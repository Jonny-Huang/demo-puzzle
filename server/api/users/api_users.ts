import { Application } from 'express';
// import { Request, Response } from 'express';
import { Get } from './get';
import { Put } from './put';
import { Delete } from './delete';
import { Post } from './post';
import { GetAll } from './getAll';

const API_NAME = 'users';
export function api_users(app: Application) {
  // app.route('/api/users/:uuid').get(
  //   function (req: Request, res: Response) {
  //     const uuid: string = req.params.uuid;
  //     res.status(200).json({
  //       payload: 'Hello,' + uuid
  //     });
  //   });

  app.route('/api/' + API_NAME + '/:uuid').get(Get);
  app.route('/api/' + API_NAME + '/:uuid').put(Put);
  app.route('/api/' + API_NAME + '/:uuid').delete(Delete);
  app.route('/api/' + API_NAME).get(GetAll);
  app.route('/api/' + API_NAME).post(Post);
}
