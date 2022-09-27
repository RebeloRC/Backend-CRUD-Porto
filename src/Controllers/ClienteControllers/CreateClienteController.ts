import { CreateClienteService } from '../../services/ClienteServices/CreateClienteService';
import { Request, Response } from "express"


export class CreateClienteController {
  async handle(request: Request, response: Response) {
    const { Nome_cliente } = request.body

    const service = new CreateClienteService();

    const result = await service.execute({ Nome_cliente });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }
}