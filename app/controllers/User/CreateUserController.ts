import { Request, Response } from 'express';
import { CreateUserService } from '../../services/User/CreateUserService';
import { AppDataSource } from '../../data-source';

export class CreateUserController {
    async handle(request: Request, response: Response) {
        const { name, email, password } = request.body;

        const dataSource = AppDataSource;

        const service = new CreateUserService();

        const result = await service.execute({ name, email, password }, dataSource);

        if(result instanceof Error) {
            return response.status(400).json(result.message);
        }

        return response.status(201).json(result);
    }
}