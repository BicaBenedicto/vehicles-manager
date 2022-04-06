import { Response, Request, NextFunction } from 'express';
import { CategoriesModel } from '../models';
import connection from '../models/connection';

export default class Categories {
  constructor(private _categoriesModel = new CategoriesModel(connection)) {}

  public getAll = async (_req: Request, _res: Response, next: NextFunction): Promise<void> => {
    return next();
  };
}
