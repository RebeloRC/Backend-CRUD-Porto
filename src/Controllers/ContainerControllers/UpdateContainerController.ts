import { UpdateContainerService } from './../../services/ContainerServices/UpdateContainerService';
import { Request, Response } from "express"


export class UpdateContainerController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { id_cliente, Numero_container, Tipo_container, Status_container, Categoria_container } = request.body;

    const service = new UpdateContainerService();

    const result = await service.execute({ id, id_cliente, Numero_container, Tipo_container, Status_container, Categoria_container });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }
}