import express from 'express';
import 'express-async-errors';

import { veiculosRouter } from './routes';
import errorMiddleware from './errors';

const app = express();

app.use(express.json());

app.use('/veiculos', veiculosRouter);

app.use(errorMiddleware);

export default app;
