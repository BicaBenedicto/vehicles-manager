import { Response, Request, NextFunction } from 'express';
import { VehiclesModel } from '../models';
import connection from '../models/connection';

export default class Vehicles {
  constructor(private vehiclesModel = new VehiclesModel(connection)) {}

  public getAll = async (_req: Request, _res: Response, next: NextFunction): Promise<void> => {
    return next();
  };
}
