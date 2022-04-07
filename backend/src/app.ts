import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';

import { VeiculosRouter, CategoriesRouter } from './routes';
import errorMiddleware from './errors';

const app = express();

app.use(express.json());

app.use((_req: Request, res: Response, next: NextFunction) => {
  res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
  next();
});

app.use('/veiculos', VeiculosRouter);
app.use('/categorias', CategoriesRouter);

app.use(errorMiddleware);

export default app;
