import express from 'express';
import { getVinicolas } from '../controllers/vinicola.js';

const router = express.Router();

router.get('/', getVinicolas);

export default router;