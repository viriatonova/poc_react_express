import { Request, Response } from 'express';
import { User } from "../Entities/User";
import { AppDataSource } from "../../main"


export const getAccountBalance = async (req: Request, res: Response ) => {
    res.send('ok')
}
