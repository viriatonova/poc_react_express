import express, { Express, Request, Response, Router } from 'express';


export const route: Router = Router()

/**
 * 
 * HealthChecker 
 */
route.get('/api/v1', (req: Request, res: Response) => {
    res.send({status: 'API running'});
  });

/**
 * 
 * SingIn SingUp
 */
route.post('/api/v1/login', (req: Request, res: Response) => {
  res.send('API running');
});

route.post('/api/v1/register', (req: Request, res: Response) => {
  res.send('API running');
});