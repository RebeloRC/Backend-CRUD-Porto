import { Movimentacao } from './../../entities/Movimentacoes';
import { AppDataSource } from "src/dataSource";

export class GetAllMovimentacoesService {
  async execute() {
    const repo = AppDataSource.getRepository<Movimentacao>(Movimentacao)

    const movimentacao = await repo.find({
      relations: ['cliente']
    });

    return movimentacao;

  }
}