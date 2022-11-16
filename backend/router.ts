import { Request, Response, Router } from 'express';
import { Register, Login, getUser, getUsers } from './src/Controllers/UserController';

export const route: Router = Router()

route.get('/api/v1', (req: Request, res: Response) => res.send({status: 'API is running'}) );
route.get('/api/v1/user', getUsers)
route.get('/api/v1/user:username', getUser)
route.post('/api/v1/register', Register);
route.post('/api/v1/login', Login);