import { Request, Response } from 'express';

export function Post(req: Request, res: Response) {
  res.status(200).json({
    payload: 'Hello,'
  });
}
