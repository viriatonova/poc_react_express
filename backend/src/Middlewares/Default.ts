import { Request, Response, NextFunction } from 'express';

export const MiddlewareGLobal = (req: Request, res: Response, next: NextFunction): void => {
    next();
};