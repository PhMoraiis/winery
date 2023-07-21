import { Request, Response } from 'express';
import { PrismaClient, Vinicola } from '@prisma/client';

const prisma = new PrismaClient();

export class GetAllVinicolaController {
  async handle(request: Request, response: Response) {
    const vinicola = await prisma.vinicola.findMany();

    return response.json(vinicola);
  }
}
