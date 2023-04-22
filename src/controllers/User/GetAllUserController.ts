import { Request, Response } from 'express';
import { GetAllUserService } from '../../services/User/GetAllUserService';
import { AppDataSource } from '../../data-source';

export class GetAllUserController {
    async handle(request: Request, response: Response) {
        const dataSource = AppDataSource;

        const service = new GetAllUserService();

        const result = await service.execute(dataSource);

        if(result instanceof Error) {
            return response.status(400).json(result.message);
        }

        return response.status(200).json(result);
    }
}
