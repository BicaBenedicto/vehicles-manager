import express from 'express';
import { VehiclesController } from '../controllers';
import { VehiclesMiddleware } from '../middlewares';

const router = express.Router();
const vehiclesMiddleware = new VehiclesMiddleware();
const vehiclesController = new VehiclesController();

router.get('/:id', vehiclesMiddleware.getById, vehiclesController.getById);
router.delete('/:id', vehiclesMiddleware.remove, vehiclesController.remove);
router.get('/', vehiclesMiddleware.getAll, vehiclesController.getAll);
router.post('/', vehiclesMiddleware.create, vehiclesController.create);

export default router;
