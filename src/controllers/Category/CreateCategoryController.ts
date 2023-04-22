import { Request, Response } from "express";
import { CreateCategoryService } from "../../services/Category/CreateCategoryService";
import { AppDataSource } from "../../data-source";

export class CreateCategoryController {
    async handle(request: Request, response: Response) {
        const { name, icon } = request.body;

        const dataSource = AppDataSource;

        const service = new CreateCategoryService();

        const result = await service.execute({ name, icon }, dataSource);

        if(result instanceof Error) {
            return response.status(400).json(result.message);
        }

        return response.status(201).json(result);
    }
}
