import { Container } from 'src/entities/Container';
import { AppDataSource } from "src/dataSource";

export class DeleteContainerService {
  async execute(id: string) {
    const repo = AppDataSource.getRepository<Container>(Container)

    if (!await repo.findOne({
      where: { id: id }
    })) {
      return Error("Container não encontrado!")
    }

    await repo.delete(id);

  }
}