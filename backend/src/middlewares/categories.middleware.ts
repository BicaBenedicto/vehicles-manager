import { Response, Request, NextFunction } from 'express';

export default class Categories {
  public static getAll = async (_req: Request, _res: Response, next: NextFunction): Promise<void> => next();
}
