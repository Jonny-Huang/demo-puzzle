import { Application } from 'express';
import { Get } from './get';
import { Put } from './put';
import { Delete } from './delete';
import { Post } from './post';
import { GetAll } from './getAll';

const API_NAME = 'contacts';
export function api_contacts(app: Application) {
  app.route('/api/' + API_NAME + '/:uuid').get(Get);
  app.route('/api/' + API_NAME + '/:uuid').put(Put);
  app.route('/api/' + API_NAME + '/:uuid').delete(Delete);
  app.route('/api/' + API_NAME ).get(GetAll);
  app.route('/api/' + API_NAME ).post(Post);
}
