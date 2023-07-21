import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class GetVinicolaByIdController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const numericId = parseInt(id, 10); // Convert the id to a number if it is a string

    const vinicola = await prisma.vinicola.findUnique({
      where: { id: numericId },
    });

    if (!vinicola) {
      return response.status(404).json({ error: 'Vinicola not found' });
    }

    return response.json(vinicola);
  }
}
