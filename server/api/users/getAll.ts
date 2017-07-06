import { Request, Response } from 'express';

export function GetAll(req: Request, res: Response) {
  res.status(200).json({
    payload: 'Hello,'
  });
}
