import 'reflect-metadata'
import express, { Express, Request, Response } from 'express';
import { MiddlewareGLobal } from './src/Middlewares/Default';
import { route } from './router';
import dotenv from 'dotenv';

dotenv.config();

const APP: Express = express();
const PORT = 52000;
const routes = route

/**
 * 
 * Configs
 */
APP.use(MiddlewareGLobal)
APP.use(routes)


APP.listen(PORT, () => {
  console.log(`[server]: Server is running at https://localhost:${PORT}`);
});