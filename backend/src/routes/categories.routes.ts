import express from 'express';
import { CategoriesController } from '../controllers';
import { CategoriesMiddleware } from '../middlewares';

const router = express.Router();

const categoriesController = new CategoriesController();
const categoriesMiddleware = new CategoriesMiddleware();

router.get('/', categoriesMiddleware.getAll, categoriesController.getAll);

export default router;
