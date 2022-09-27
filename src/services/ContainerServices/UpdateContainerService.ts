import { Cliente } from './../../entities/Cliente';
import { AppDataSource } from "src/dataSource";
import { Container } from "src/entities/Container";

type ContainerUpdateRequest = {
  id: string;
  id_cliente: string;
  Numero_container: string;
  Tipo_container: number;
  Status_container: string;
  Categoria_container: string;
}

export class UpdateContainerService {
  async execute({ id, id_cliente, Numero_container, Tipo_container, Status_container, Categoria_container }: ContainerUpdateRequest) {
    const repo = AppDataSource.getRepository<Container>(Container)

    const container = await repo.find({
      where: { id: id }
    });

    if (!container) {
      return new Error("container não encontrado!")
    }

    const result = await repo.save({
      id: id,
      Numero_container: Numero_container,
      Tipo_container: Tipo_container,
      Status_container: Status_container,
      Categoria_container: Categoria_container
    })

    return result;
  }
}