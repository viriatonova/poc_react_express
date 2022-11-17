import { Request, Response } from 'express';
import { AppDataSource } from "../../main"
import { User } from "../Entitys/User";
import { Account } from '../Entitys/Account';

export const getUser = async (req: Request, res: Response ) => {
    const results = await AppDataSource.getRepository(User).findOneBy({
        username: req.params.username,
    })
    return res.send(results)
}

export const getUsers = async (req: Request, res: Response ) => {
    const users = await AppDataSource.getRepository(User).find({
        relations: {
            account: true
        }
    })
    res.json(users)
}

export const Register = async (req: Request, res: Response ) => {
    const db_user = await AppDataSource.getRepository(User).findOneBy({
        username: req.body.username,
    })
    if (db_user) {
        res.status(500)
        return res.json({messsage: "User already exist"})
    } else {
        const account = await AppDataSource.getRepository(Account).create({ balance: 100 })
        const accountResult = await AppDataSource.getRepository(Account).save(account)
        const user = await AppDataSource.getRepository(User).create({
            username: req.body.username,
            password: req.body.password,
            account: account
        })
        const UserResult = await AppDataSource.getRepository(User).save(user)
        return res.send({user: UserResult})
    }
}

export const Login = async (req: Request, res: Response ) => {
    res.send('ok')
}