import bcrypt from "bcrypt";
import { Request, Response } from 'express';
import { AppDataSource, SECRET } from "../../main"
import { User } from "../Entities/User";
import { Account } from '../Entities/Account';
import { sign } from "jsonwebtoken";
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
    return res.send(users)
}

export const Register = async (req: Request, res: Response ) => {
    if (checkUsername(req.body.username) && checkPassword(req.body.password)) {
        const db_user = await AppDataSource.getRepository(User).findOneBy({
            username: req.body.username,
        })
        if (db_user) {
            return res.status(500).send({messsage: "User already exist"})
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
        return res.status(500).send({messsage: "Insuficient requirements from password"})
    }
}

export const Login = async (req: Request, res: Response ) => {
    const db_user = await AppDataSource.getRepository(User).findOneBy({
        username: req.body.username,
    })
    if (!db_user) {
        res.status(500)
        return res.json({messsage: "User don't exist"})
    }
    if (bcrypt.compareSync(req.body.password, db_user.password)) {
        const token = sign({ data: req.body }, SECRET, { expiresIn: '24h' })
        return res.status(200).send({id: db_user.id, username: db_user.username, accessToken: token})
    } else {
        return res.status(500).send({messsage: "Password is not correct"})
    }
}