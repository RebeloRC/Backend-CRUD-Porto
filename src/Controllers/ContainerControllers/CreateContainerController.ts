import { Request, Response } from "express";
import { CreateContainerService } from "src/services/ContainerServices/CreateContainerService";


export class CreateContainerController {
  async handle(request: Request, response: Response) {
    const { id_cliente, Numero_container, Tipo_container, Status_container, Categoria_container } = request.body

    const service = new CreateContainerService();

    const result = await service.execute({
      id_cliente,
      Numero_container,
      Tipo_container,
      Status_container,
      Categoria_container
    })

    if (result instanceof Error) {
      return response.status(400).json(result.message)
    }

    return response.json(result);
  }
}