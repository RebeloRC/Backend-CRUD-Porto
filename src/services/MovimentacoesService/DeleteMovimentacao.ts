import { Movimentacao } from './../../entities/Movimentacoes';
import { AppDataSource } from "src/dataSource";

export class DeleteMovimentacaoService {
  async execute(id: string) {
    const repo = AppDataSource.getRepository<Movimentacao>(Movimentacao)

    if (!await repo.findOne({
      where: { id: id }
    })) {
      return Error("Movimentação não encontrada!")
    }

    await repo.delete(id);

  }
}