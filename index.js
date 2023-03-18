import express from 'express';
import vinicolasRoutes from './routes/vinicolas.js';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/', vinicolasRoutes);

app.listen(8800)