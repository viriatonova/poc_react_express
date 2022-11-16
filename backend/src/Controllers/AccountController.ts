import { Request, Response } from 'express';
import { User } from "../Entitys/User";
import { AppDataSource } from "../../main"


export const getAccountBalance = async (req: Request, res: Response ) => {
    res.send('ok')
}
