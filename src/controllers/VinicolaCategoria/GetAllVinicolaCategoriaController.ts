import { Request, Response } from 'express';
import { GetAllVinicolaCategoriaService } from '../../services/VinicolaCategoria/GetAllVinicolaCategoriaService';
import { AppDataSource } from '../../data-source';

export class GetAllVinicolaCategoriaController {
    async handle(request: Request, response: Response) {
        const service = new GetAllVinicolaCategoriaService();

        const dataSource = AppDataSource;

        const result = await service.execute(dataSource);

        if (result instanceof Error) {
            return response.status(400).json({ error: result.message });
        }

        return response.json(result);
    }
}