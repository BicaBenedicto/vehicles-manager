import express from 'express';
import { VehiclesController } from '../controllers';
import { VehiclesMiddleware } from '../middlewares';

const router = express.Router();
const vehiclesMiddleware = new VehiclesMiddleware();
const vehiclesController = new VehiclesController();

router.get('/', vehiclesMiddleware.getAll, vehiclesController.getAll);

export default router;
