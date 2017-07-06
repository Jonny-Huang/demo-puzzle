import { Request, Response } from 'express';

export function Get(req: Request, res: Response) {
  const uuid: string = req.params.uuid;
  res.status(200).json({
    payload: 'Hello,' + uuid
  });
}
