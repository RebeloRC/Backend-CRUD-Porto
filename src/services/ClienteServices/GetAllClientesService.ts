import { AppDataSource } from "src/dataSource";
import { Cliente } from "src/entities/Cliente";

export class GetAllClientesService {
  async execute() {
    const repo = AppDataSource.getRepository<Cliente>(Cliente)

    const clientes = await repo.find();

    return clientes;

  }
}