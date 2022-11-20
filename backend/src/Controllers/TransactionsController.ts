import { Request, Response } from 'express';
import { User } from "../Entities/User";
import { Account } from '../Entities/Account';
import { Transactions } from "../Entities/Transactions";
import { AppDataSource } from "../../main"

export const registerTransaction = async (req: Request, res: Response ) => {
    const db_user = await AppDataSource.getRepository(User).findOneBy({
        username: req.body.username,
    })
}

export const getUserTransaction = async (req: Request, res: Response ) => {

}