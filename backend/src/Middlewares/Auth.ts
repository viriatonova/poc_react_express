import jwt, { Secret, JwtPayload } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { SECRET } from '../../main';

export interface CustomRequest extends Request {
    token: string | JwtPayload;
}

export const Auth = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.header('Authorization')?.replace('Bearer ', '');
        if (!token) {
            return res.status(401).send({message: 'Please authenticate'});
        } else {
            const decoded = jwt.verify(token, SECRET);
            (req as CustomRequest).token = decoded;
            next();
        } 
    } catch (err) {
      res.status(401).send({message: 'Please authenticate'});
    }
};