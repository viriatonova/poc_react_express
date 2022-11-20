import { Request, Response, Router } from 'express';
import { Register, Login, getUser, getUsers } from './src/Controllers/UserController';
import { Auth } from './src/Middlewares/Auth';

export const route: Router = Router()

route.get('/api/v1', (req: Request, res: Response) => res.send({status: 'API is running'}) );
route.get('/api/v1/user', Auth, getUsers)
route.get('/api/v1/user:username',Auth, getUser)
route.post('/api/v1/register', Register);
route.post('/api/v1/login', Auth, Login);