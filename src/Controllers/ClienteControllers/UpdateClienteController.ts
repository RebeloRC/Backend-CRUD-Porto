import { UpdateClienteService } from './../../services/ClienteServices/UpdateClienteService';
import { Request, Response } from "express"


export class UpdateClinteController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { Nome_cliente } = request.body;

    const service = new UpdateClienteService();

    const result = await service.execute({ id, Nome_cliente });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }
}