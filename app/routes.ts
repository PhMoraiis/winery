import { Router } from 'express';

import { CreateVinicolaController } from './controllers/Vinicola/CreateVinicolaController';
import { GetAllVinicolaController } from './controllers/Vinicola/GetAllVinicolaController';
import { DeleteVinicolaController } from './controllers/Vinicola/DeleteVinicolaController';
import { UpdateVinicolaController } from './controllers/Vinicola/UpdateVinicolaController';
import { GetVinicolaByIdController } from './controllers/Vinicola/GetVinicolaByIdController';

import { GetAllUserController } from './controllers/User/GetAllUserController';
import { CreateUserController } from './controllers/User/CreateUserController';

const routes = Router();

routes.get("/", (req, res) => {
    res.send("Hello World! Você está na raiz da API!");
})

routes.post("/vinicolas", new CreateVinicolaController().handle)
routes.get("/vinicolas", new GetAllVinicolaController().handle)
routes.delete("/vinicolas/:id", new DeleteVinicolaController().handle)
routes.put("/vinicolas/:id", new UpdateVinicolaController().handle)
routes.get("/vinicolas/:id", new GetVinicolaByIdController().handle)

routes.get("/users", new GetAllUserController().handle)
routes.post("/users", new CreateUserController().handle)

export { routes }