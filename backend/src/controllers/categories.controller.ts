import { Response, Request } from 'express';
import { CategoriesModel } from '../models';
import connection from '../models/connection';

export default class Categories {
  constructor(private categoriesModel = new CategoriesModel(connection)) {}

  public getAll = async (_req: Request, res: Response): Promise<Response> => {
    const vehicles = await this.categoriesModel.getAll();
    return res.status(200).json(vehicles);
  };
}
