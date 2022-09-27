import { GetAllMovimentacoesService } from './../../services/MovimentacoesService/GetAllMovimentacoesService';
import { Request, Response } from "express"


export class GetAllMovimentacaoController {
  async handle(request: Request, response: Response) {
    const service = new GetAllMovimentacoesService();

    const movimentacoes = await service.execute();

    return response.json(movimentacoes);
  }
}