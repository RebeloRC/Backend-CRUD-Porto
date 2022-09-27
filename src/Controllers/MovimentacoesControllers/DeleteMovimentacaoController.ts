import { DeleteMovimentacaoService } from './../../services/MovimentacoesService/DeleteMovimentacao';
import { Request, Response } from "express"


export class DeleteMovimentacaoController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const service = new DeleteMovimentacaoService();

    const result = await service.execute(id)

    if (result instanceof Error) {
      return response.status(400).json(result.message)
    }

    return response.status(204).end();
  }
}