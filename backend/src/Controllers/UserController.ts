import { Request, Response } from 'express';
import { AppDataSource } from "../../main"
import { User } from "../Entities/User";
import { Account } from '../Entities/Account';
import { checkUsername, checkPassword, hashPassword } from '../helpers/UserHelper';

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
    if (checkUsername(req.body.username) && checkPassword(req.body.password)) {
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
                password: hashPassword(req.body.password),
                account: account
            })
            const UserResult = await AppDataSource.getRepository(User).save(user)
            return res.send({user: UserResult})
        }
    } else {
        res.status(500)
        return res.json({messsage: "Insuficient requirements from password"})
    }
}

export const Login = async (req: Request, res: Response ) => {
    res.send('ok')
}