import { Request, Response } from 'express';
import { UpdateVinicolaCategoriaService } from '../../services/VinicolaCategoria/UpdateVinicolaCategoriaService';
import { AppDataSource } from '../../data-source';

export class UpdateVinicolaCategoriaController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;
        const { vinicola, categoria } = request.body;

        const service = new UpdateVinicolaCategoriaService();

        const dataSource = AppDataSource;

        const result = await service.execute({ id, vinicola, categoria } , dataSource);

        if (result instanceof Error) {
            return response.status(400).json({ error: result.message });
        }

        return response.json(result);
    }
}