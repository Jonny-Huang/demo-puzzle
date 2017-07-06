import { Application } from 'express';
import { api_users } from './users/api_users';
import { api_contacts } from './contacts/api_contacts';

export function initApi(app: Application) {
  api_users(app);
  api_contacts(app);
}
