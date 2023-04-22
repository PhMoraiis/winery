import { Request, Response } from 'express';
import { CreateVinicolaCategoriaService } from '../../services/VinicolaCategoria/CreateVinicolaCategoriaService';
import { AppDataSource } from '../../data-source';

export class CreateVinicolaCategoriaController {
    async handle(request: Request, response: Response) {
        const { vinicola, categoria } = request.body;

        const service = new CreateVinicolaCategoriaService();

        const dataSource = AppDataSource;

        const vinicolaCategoria = await service.execute({ vinicola, categoria }, dataSource);

        return response.json(vinicolaCategoria);
    }
}