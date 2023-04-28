import express from 'express';
import { AppDataSource } from "./data-source";
import { routes } from './routes';

const app = express();

AppDataSource.initialize().then(async () => {

  app.use(express.json());

  const PORT = 3001;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });

  app.use(routes)

}).catch(error => console.log(error))
