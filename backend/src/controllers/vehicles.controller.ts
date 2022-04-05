import { Response, Request } from 'express';
import { VehiclesModel } from '../models';
import connection from '../models/connection';

export default class Vehicles {
  constructor(private vehiclesModel = new VehiclesModel(connection)) {}

  public getAll = async (_req: Request, res: Response): Promise<Response> => {
    const vehicles = await this.vehiclesModel.getAll();
    return res.status(200).json(vehicles);
  };
}
