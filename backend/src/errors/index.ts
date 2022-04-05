import { Response, Request, NextFunction } from 'express';

export default async function handdleGenericErrors (err: Error | any, _req: Request, res: Response, _next: NextFunction): Promise<Response> {
  if(err.code) {
    const { code, message } = err; 
    return res.status(code).json({ message });
  }
  console.log(err);
  return res.status(500).json({ message: 'Internal error' })
};
