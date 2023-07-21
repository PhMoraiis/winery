import express, { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client';
import { routes } from './routes';

const prisma = new PrismaClient();

const startServer = async () => {
  const app = express();

  app.use(express.json());

  app.use(routes);

  app.listen(process.env.PORT ? Number(process.env.PORT) : 3000, () => {
    console.log('HTTP Server running');
  });
};

startServer()
  .catch((error) => console.log(error))
  .finally(async () => {
    await prisma.$disconnect();
  });
