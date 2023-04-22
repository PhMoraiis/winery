import { Router } from 'express';

import { CreateCategoryController } from '../controllers/Category/CreateCategoryController';
import { GetAllCategoryController } from '../controllers/Category/GetAllCategoryController';
import { DeleteCategoryController } from '../controllers/Category/DeleteCategoryController';
import { UpdateCategoryController } from '../controllers/Category/UpdateCategoryController';

import { CreateVinicolaController } from '../controllers/Vinicola/CreateVinicolaController';
import { GetAllVinicolaController } from '../controllers/Vinicola/GetAllVinicolaController';


const routes = Router();

routes.post("/categories", new CreateCategoryController().handle)
routes.get("/categories", new GetAllCategoryController().handle)
routes.delete("/categories/:id", new DeleteCategoryController().handle)
routes.put("/categories/:id", new UpdateCategoryController().handle)

routes.post("/vinicolas", new CreateVinicolaController().handle)
routes.get("/vinicolas", new GetAllVinicolaController().handle)

export { routes }