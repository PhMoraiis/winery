import { Request, Response } from "express";
import { GetAllCategoriesService } from "../../services/Category/GetAllCategoriesService";
import { AppDataSource } from "../../data-source";

export class GetAllCategoryController {
    async handle(request: Request, response: Response) {
        const service = new GetAllCategoriesService();

        const dataSource = AppDataSource;

        const categories = await service.execute(dataSource);

        return response.json(categories);
    }
}