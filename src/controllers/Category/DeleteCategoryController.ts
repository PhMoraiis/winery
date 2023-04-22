import { Request, Response } from "express";
import { DeleteCategoryService } from "../../services/Category/DeleteCategoryService";
import { AppDataSource } from "../../data-source";

export class DeleteCategoryController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;

        const dataSource = AppDataSource;

        const service = new DeleteCategoryService();


        const result = await service.execute(dataSource, id);

        if(result instanceof Error) {
            return response.status(400).json(result.message);
        }

        return response.status(200).end();
    }
}