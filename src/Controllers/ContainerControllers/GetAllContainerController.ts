import { GetAllContainersService } from '../../services/ContainerServices/GetAllContainerService';
import { Request, Response } from "express"


export class GetAllContainerController {
  async handle(request: Request, response: Response) {
    const service = new GetAllContainersService();

    const containers = await service.execute();

    return response.json(containers);
  }
}