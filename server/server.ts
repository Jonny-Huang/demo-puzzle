import * as express from 'express';
import * as cors from 'cors';
import * as helmet from 'helmet';
import * as path from 'path';
import * as compression from 'compression';
import { json, urlencoded } from 'body-parser';
import { Request, Response } from 'express';
// import { api_users } from './api/users/api_users';
// import { api_contacts } from './api/contacts/api_contacts';
import { initApi } from './api/initApi';

const app = express();
// app.disable('x-powered-by');
app.use(cors());
app.use(helmet());
app.use(compression());
app.use(urlencoded({ extended: false }));
app.use(json());
// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });

// app.route('/api/users/:uuid').get(
//   function (req: Request, res: Response) {
//     const uuid: string = req.params.uuid;
//     res.status(200).json({
//       payload: 'Hello,' + uuid
//     });
//   });

// api_users(app);
// api_contacts(app);

initApi(app);

const filePath = path.join(__dirname, '/../client');
console.log(`filePath：${filePath}`);
app.use(express.static(filePath));
app.get('/', (req, res, next) => res.sendFile(path.join(filePath, 'index.html')));

app.listen(8081, () => console.log('listening on http://localhost:8081'));
