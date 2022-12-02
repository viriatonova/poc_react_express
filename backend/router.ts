import { Request, Response, Router } from 'express';
import { Register, Login, getUser } from './src/Controllers/UserController';
import { registerTransaction, getUserTransaction } from './src/Controllers/TransactionsController';
import { Auth } from './src/Middlewares/Auth';

export const route: Router = Router()

route.get('/api/v1', (req: Request, res: Response) => res.send({status: 'API is running'}) );
route.get('/api/v1/user', Auth, getUser)
route.post('/api/v1/register', Register);
route.post('/api/v1/login', Login);
route.get('/api/v1/transaction', Auth, getUserTransaction);
route.post('/api/v1/transaction', Auth, registerTransaction);