import { Request, Response } from "express";
import { UpdateCategoryService } from "../../services/Category/UpdateCategoryService";
import { AppDataSource } from "../../data-source";

export class UpdateCategoryController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;
        const { name, icon } = request.body;

        const service = new UpdateCategoryService();

        const dataSource = AppDataSource;

        const result = await service.execute({ id, name, icon }, dataSource);

        if(result instanceof Error) {
            return response.status(400).json(result.message);
        }

        return response.json(result);
    }
}