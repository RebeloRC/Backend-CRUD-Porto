import { DeleteClienteService } from './../../services/ClienteServices/DeleteClienteService';
import { Request, Response } from "express"


export class DeleteClienteController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const service = new DeleteClienteService();

    const result = await service.execute(id)

    if (result instanceof Error) {
      return response.status(400).json(result.message)
    }

    return response.status(204).end();
  }
}