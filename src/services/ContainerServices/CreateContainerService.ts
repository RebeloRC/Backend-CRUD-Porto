import { Cliente } from '../../entities/Cliente';
import { AppDataSource } from "src/dataSource";
import { Container } from "src/entities/Container";


type ContainerRequest = {
  id_cliente: string;
  Numero_container: string;
  Tipo_container: number;
  Status_container: string;
  Categoria_container: string;
}

export class CreateContainerService {
  async execute({ id_cliente, Numero_container, Tipo_container, Status_container, Categoria_container }: ContainerRequest): Promise<Error | Container> {
    const repo = AppDataSource.getRepository<Container>(Container)
    const repoCliente = AppDataSource.getRepository<Cliente>(Cliente)

    if (! await repoCliente.findOne({
      where:
        { id: id_cliente }
    })) {
      return new Error("Cliente não encontrado!")
    }

    const container = repo.create({ id_cliente, Numero_container, Tipo_container, Status_container, Categoria_container })

    await repo.save(container);

    return container;

  }
}