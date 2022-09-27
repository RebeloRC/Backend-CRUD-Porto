import { AppDataSource } from "src/dataSource";
import { Cliente } from "src/entities/Cliente";

type ClienteUpdateRequest = {
  id: string;
  Nome_cliente: string;
}

export class UpdateClienteService {
  async execute({ id, Nome_cliente }: ClienteUpdateRequest) {
    const repo = AppDataSource.getRepository<Cliente>(Cliente)

    const cliente = await repo.find({
      where: { id: id }
    });

    if (!cliente) {
      return new Error("Cliente não encontrado!")
    }

    const result = await repo.save({
      id: id,
      Nome_cliente: Nome_cliente
    })

    return result;

  }
}