import { GetAllClientesService } from '../../services/ClienteServices/GetAllClientesService';
import { Request, Response } from "express"


export class GetAllClienteController {
  async handle(request: Request, response: Response) {
    const service = new GetAllClientesService();

    const clientes = await service.execute();

    return response.json(clientes);
  }
}