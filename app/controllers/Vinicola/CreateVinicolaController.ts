import { Request, Response } from 'express';
import { PrismaClient, Vinicola } from '@prisma/client';

const prisma = new PrismaClient();

export class CreateVinicolaController {
  async handle(request: Request, response: Response) {
    const { name, description, image } = request.body;

    const existingVinicola = await prisma.vinicola.findUnique({
      where: { name },
    });

    if (existingVinicola) {
      return response.status(400).json({ error: 'Vinicola already exists' });
    }

    const vinicola = await prisma.vinicola.create({
      data: { name, description, image },
    });

    return response.json(vinicola);
  }
}
