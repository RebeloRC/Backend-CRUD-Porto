import { AppDataSource } from "src/dataSource";
import { Cliente } from "src/entities/Cliente";

export class DeleteClienteService {
  async execute(id: string) {
    const repo = AppDataSource.getRepository<Cliente>(Cliente)

    if (!await repo.findOne({
      where: { id: id }
    })) {
      return Error("Cliente não encontrado!")
    }

    await repo.delete(id);

  }
}