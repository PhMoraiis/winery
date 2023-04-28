import { Request, Response } from 'express';
import { DeleteCategoryService } from '../../services/Category/DeleteCategoryService';
import { AppDataSource } from '../../data-source';

export class DeleteVinicolaCategoriaController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;

        const service = new DeleteCategoryService();

        const dataSource = AppDataSource;

        const result = await service.execute(dataSource, id);

        if (result instanceof Error) {
            return response.status(400).json({ error: result.message });
        }

        return response.json(result);
    }
}