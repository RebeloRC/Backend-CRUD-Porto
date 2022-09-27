import { CreateMovimentacaoService } from './../../services/MovimentacoesService/CreateMovimentacao';
import { Request, Response } from "express"


export class CreateMovimentacaoController {
  async handle(request: Request, response: Response) {
    const { id_cliente, id_container, Tipo_movimentacao, data_hora_inicio, data_hora_fim } = request.body

    const service = new CreateMovimentacaoService();

    const result = await service.execute({ id_cliente, id_container, Tipo_movimentacao, data_hora_inicio, data_hora_fim });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }
}