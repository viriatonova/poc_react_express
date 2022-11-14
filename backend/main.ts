import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const APP: Express = express();
const PORT = process.env.PORT;

APP.get('/', (req: Request, res: Response) => {
  res.send('API running');
});

APP.listen(PORT, () => {
  console.log(`[server]: Server is running at https://localhost:${PORT}`);
});