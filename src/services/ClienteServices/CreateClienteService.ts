import { AppDataSource } from 'src/dataSource';
import { Cliente } from '../../entities/Cliente';
type ClienteRequest = {
  Nome_cliente: string;
}

export class CreateClienteService {
  async execute({ Nome_cliente }: ClienteRequest): Promise<Cliente | Error> {
    const repo = AppDataSource.getRepository<Cliente>(Cliente)

    if (await repo.findOne({
      where: { Nome_cliente: Nome_cliente }
    })) {
      return new Error("Cliente já cadastrado!")
    }

    const cliente = repo.create({
      Nome_cliente
    });

    await repo.save(cliente)

    return cliente;
  }
}