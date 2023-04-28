import { Request, Response } from 'express';
import { DeleteVinicolaService } from '../../services/Vinicola/DeleteVinicolaService';
import { AppDataSource } from '../../data-source';

export class DeleteVinicolaController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;

        const service = new DeleteVinicolaService();

        const dataSource = AppDataSource;

        const result = await service.execute(dataSource, id);

        if (result instanceof Error) {
            return response.status(400).json({ error: result.message });
        }

        return response.json(result);
    }
}