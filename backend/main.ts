import 'reflect-metadata'
import { DataSource } from "typeorm"
import express, { Express, Request, Response } from 'express';
import { UserEntity } from './src/Entitys/UserEntity';
import { MiddlewareGLobal } from './src/Middlewares/Default';
import { route } from './router';
import dotenv from 'dotenv';

dotenv.config();

/**
 * 
 * DB Connection
 */
 const AppDataSource = new DataSource({
  type: "postgres",
  host: "db_ng",
  port: 5432,
  username: "postgres",
  password: "secret",
  database: "dev_ng",
  entities: [UserEntity],
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
 * Server
 */    
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