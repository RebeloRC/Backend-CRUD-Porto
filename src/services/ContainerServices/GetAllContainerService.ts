import { AppDataSource } from "src/dataSource";
import { Container } from "src/entities/Container";


export class GetAllContainersService {
  async execute() {
    const repo = AppDataSource.getRepository<Container>(Container)

    const containers = await repo.find({
      relations: ['cliente']
    });

    return containers
  }
}