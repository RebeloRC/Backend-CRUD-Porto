import { UpdateContainerController } from './Controllers/ContainerControllers/UpdateContainerController';
import { DeleteMovimentacaoController } from './Controllers/MovimentacoesControllers/DeleteMovimentacaoController';
import { GetAllMovimentacaoController } from './Controllers/MovimentacoesControllers/GetAllMovimentacoesController';
import { CreateMovimentacaoController } from './Controllers/MovimentacoesControllers/CreateMovimentacaoController';
import { DeleteContainerController } from './Controllers/ContainerControllers/DeleteContainerController';
import { GetAllContainerController } from './Controllers/ContainerControllers/GetAllContainerController';
import { CreateContainerController } from './Controllers/ContainerControllers/CreateContainerController';
import { UpdateClinteController } from './Controllers/ClienteControllers/UpdateClienteController';
import { DeleteClienteController } from './Controllers/ClienteControllers/DeleteClienteController';
import { CreateClienteController } from './Controllers/ClienteControllers/CreateClienteController';
import { Router } from "express";
import { GetAllClienteController } from './Controllers/ClienteControllers/GetAllClientes.Controller';


const routes = Router();

routes.post("/cliente", new CreateClienteController().handle);
routes.get("/cliente", new GetAllClienteController().handle);
routes.delete("/cliente/:id", new DeleteClienteController().handle);
routes.put("/cliente", new UpdateClinteController().handle);

routes.post("/container", new CreateContainerController().handle);
routes.get("/container", new GetAllContainerController().handle);
routes.delete("/container/:id", new DeleteContainerController().handle);
routes.put("/container", new UpdateContainerController().handle);

routes.post("/movimentacao", new CreateMovimentacaoController().handle);
routes.get("/movimentacao", new GetAllMovimentacaoController().handle);
routes.delete("/movimentacao/:id", new DeleteMovimentacaoController().handle);


export { routes }