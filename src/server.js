
import dotenv from 'dotenv';
import express from 'express';
import connectDB from './config/db.js';
import logger from './middlewares/logger.js';
import webhookRoutes from './routes/webhookRoutes.js';
import swaggerDocs from './docs/swagger.js';

dotenv.config();
const app = express();
app.use(express.json());
app.use(logger);
swaggerDocs(app);

app.use('/api', webhookRoutes);

connectDB();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
