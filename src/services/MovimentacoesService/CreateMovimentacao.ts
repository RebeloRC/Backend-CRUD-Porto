import { Movimentacao } from '../../entities/Movimentacoes';
import { AppDataSource } from "src/dataSource";
import { Container } from "src/entities/Container";


type MovimentacaoRequest = {
  id_cliente: string;
  id_container: string;
  Tipo_movimentacao: string;
  data_hora_inicio: string;
  data_hora_fim: string;
}

export class CreateMovimentacaoService {
  async execute({ id_cliente, id_container, Tipo_movimentacao, data_hora_inicio, data_hora_fim }: MovimentacaoRequest): Promise<Error | Movimentacao> {
    const repo = AppDataSource.getRepository<Movimentacao>(Movimentacao)

    if (!await repo.find({
      where: { id_container: id_container }
    })) {
      return new Error("Container não encontrado!")
    }

    const container = repo.create({ id_cliente, id_container, Tipo_movimentacao, data_hora_inicio, data_hora_fim })

    await repo.save(container);

    return container;

  }
}