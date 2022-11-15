import express, { Express, Request, Response, Router } from 'express';


export const route: Router = Router()

/**
 * 
 * HealthChecker 
 */
route.get('/api/v1', (req: Request, res: Response) => {
    res.send('API running');
  });
