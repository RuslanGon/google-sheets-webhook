// src/routes/webhookRoutes.js
import express from 'express';
import { handleNewRow, getAllRows, getRowById } from '../controllers/webhookController.js';

const router = express.Router();

router.post('/webhook', handleNewRow);
router.get('/rows', getAllRows);
router.get('/rows/:id', getRowById);

export default router;
