import express from 'express';

import { veiculosRouter } from './routes';

const app = express();

app.use(express.json());

app.use('/veiculos', veiculosRouter);

export default app;
