// src/server.js

import express from 'express';
import connectDB from './config/db.js';
import logger from './middlewares/logger.js';
import webhookRoutes from './routes/webhookRoutes.js';
import setupSwagger from './docs/swagger.js';

const app = express();


connectDB();


app.use(express.json());
app.use(logger);


setupSwagger(app);


app.use('/api', webhookRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
