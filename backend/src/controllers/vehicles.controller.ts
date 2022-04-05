import { Response, Request, NextFunction } from 'express';
import { VehiclesModel } from '../models';
import connection from '../models/connection';

export default class Vehicles {
  constructor(private _vehiclesModel = new VehiclesModel(connection)) {}

  public getAll = async (_req: Request, res: Response): Promise<Response> => {
    const vehicles = await this._vehiclesModel.getAll();
    return res.status(200).json(vehicles);
  };

  public getById = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    const id = Number(req.params.id);
    const vehicle = await this._vehiclesModel.getById(id);
    if (!vehicle) return next({ code: 404, message: 'Id not found'});
    return res.status(200).json(vehicle);
  };

  public remove = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    const id = Number(req.params.id);
    const vehicle = await this._vehiclesModel.remove(id);
    if (!vehicle) return next({ code: 404, message: 'Id not found'});
    return res.status(204).json({ message: 'Item removed' });
  };

  public create = async (req: Request, res: Response): Promise<Response> => {
    const { body } = req;
    const id = await this._vehiclesModel.create(body);
    return res.status(201).json({ ...body, id });
  };

  public update = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    const { body } = req;
    const id = Number(req.params.id);
    const vehicle = await this._vehiclesModel.getById(id);
    if (!vehicle) return next({ code: 404, message: 'Id not found'});

    const vehicleUpdate = {...vehicle, ...body};
    await this._vehiclesModel.update(vehicleUpdate, id);
    return res.status(200).json(vehicleUpdate);
  };
}
