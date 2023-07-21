import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class UpdateVinicolaController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { name, description, image } = request.body;

    const numericId = parseInt(id, 10); // Convert the id to a number if it is a string

    const vinicola = await prisma.vinicola.findUnique({ where: { id: numericId } });

    if (!vinicola) {
      return response.status(404).json({ error: 'Vinicola not found' });
    }

    const updatedVinicola = await prisma.vinicola.update({
      where: { id: numericId },
      data: {
        name: name ? name : vinicola.name,
        description: description ? description : vinicola.description,
        image: image ? image : vinicola.image,
      },
    });

    return response.json(updatedVinicola);
  }
}
