import 'reflect-metadata'
import { DataSource } from "typeorm"
import express, { Express, Request, Response } from 'express';
import { User } from './src/Entities/User';
import { Account } from './src/Entities/Account';
import { Transactions } from './src/Entities/Transactions';
import { MiddlewareGLobal } from './src/Middlewares/Default';
import { route } from './router';
import cors from 'cors'
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config();

/**
 * 
 * DB Connection
 */
export const AppDataSource = new DataSource({
    type: "postgres",
    host: "db_ng",
    port: 5432,
    username: "postgres",
    password: "secret",
    database: "dev_ng",
    entities: [User, Account, Transactions],
    synchronize: true,
    logging: false,
})

AppDataSource.initialize()
    .then(() => {
        console.log('Database has been intialized')
    })
    .catch((error) => console.log(error))

/**
 * 
 * Configs
 */
export const SECRET = String(process.env.SECRET)

/**
 * 
 * Server
 */
const APP: Express = express();
const PORT = 52000;
const routes = route


/**
 * 
 * Configs
 */
APP.use(cors())
APP.use(bodyParser.json())
APP.use(MiddlewareGLobal)
APP.use(routes)

APP.listen(PORT, () => {
    console.log(`[server]: Server is running at https://0.0.0.0:${PORT}/api/v1`);
});