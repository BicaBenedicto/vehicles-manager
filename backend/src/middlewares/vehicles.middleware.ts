import { Response, Request, NextFunction } from 'express';
import { VehiclesModel } from '../models';
import { vehicleVerify } from '../validations';
import connection from '../models/connection';

export default class Vehicles {
  constructor(private _vehiclesModel = new VehiclesModel(connection)) {}

  public getAll = async (_req: Request, _res: Response, next: NextFunction): Promise<void> => {
    return next();
  };

  public getById = async (req: Request, _res: Response, next: NextFunction): Promise<void> => {
    const { id } = req.params;
    if(!id) return next({ code: 400, message: 'Id not be empty'})
    return next();
  };

  public remove = async (req: Request, _res: Response, next: NextFunction): Promise<void> => {
    const { id } = req.params;
    if(!id) return next({ code: 400, message: 'Id not be empty'});
    return next();
  };

  public create = async (req: Request, _res: Response, next: NextFunction): Promise<void> => {
    const { body } = req;
    const verify = vehicleVerify.create(body);
    if(verify) return next(verify);
    return next();
  };

  public update = async (req: Request, _res: Response, next: NextFunction): Promise<void> => {
    const { params } = req;
    const { id } = params;
    if(!id) return next({ code: 400, message: 'Id not be empty'})

    return next();
  };
}
