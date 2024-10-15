
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Google Sheets Webhook API',
      version: '1.0.0',
      description: 'API для обработки событий вебхуков Google Sheets.',
    },
    servers: [
      {
        url: 'http://localhost:5000',
      },
    ],
  },
  apis: ['./src/docs/swagger.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

const setupSwagger = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
};


/**
 * @swagger
 * /api/webhook:
 *   post:
 *     summary: Обработка нового ряда
 *     description: Этот эндпоинт обрабатывает вебхук, когда добавляется или обновляется новый ряд.
 *     responses:
 *       200:
 *         description: Успешно обработан новый ряд.
 */

/**
 * @swagger
 * /api/rows:
 *   get:
 *     summary: Получить все ряды
 *     description: Этот эндпоинт получает все ряды из базы данных.
 *     responses:
 *       200:
 *         description: Успешно получены все ряды.
 */

/**
 * @swagger
 * /api/rows/{id}:
 *   get:
 *     summary: Получить ряд по ID
 *     description: Этот эндпоинт получает конкретный ряд по его ID.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID ряда для получения.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Успешно получен ряд.
 *       404:
 *         description: Ряд не найден.
 */

export default setupSwagger;
