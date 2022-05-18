import { Response, Request, NextFunction } from 'express';
import VehicleVerify from '../validations';

export default class Vehicles {
  public static getAll = async (_req: Request, _res: Response, next: NextFunction): Promise<void> => next();

  public static getById = async (req: Request, _res: Response, next: NextFunction): Promise<void> => {
    const { id } = req.params;
    if (!id) return next({ code: 400, message: 'Id not be empty' });
    return next();
  };

  public static remove = async (req: Request, _res: Response, next: NextFunction): Promise<void> => {
    const { id } = req.params;
    if (!id) return next({ code: 400, message: 'Id not be empty' });
    return next();
  };

  public static create = async (req: Request, _res: Response, next: NextFunction): Promise<void> => {
    const { body } = req;
    const {
      color, brand, model, year, category, plate,
    } = body;
    const verify = VehicleVerify.validateVehicle(color, brand, model, year, category, plate);
    if (verify) return next(verify);
    return next();
  };

  public static update = async (req: Request, _res: Response, next: NextFunction): Promise<void> => {
    const { params } = req;
    const { id } = params;
    if (!id) return next({ code: 400, message: 'Id not be empty' });

    return next();
  };
}
