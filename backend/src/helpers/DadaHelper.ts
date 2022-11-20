import { Entity } from "typeorm"
import { Request, Response } from 'express';
import { User } from "../Entities/User";
import { Account } from '../Entities/Account';
import { Transactions } from "../Entities/Transactions";
import { AppDataSource } from "../../main"

export const getUserByName = async (username: string) => {
    const db_user = await AppDataSource.getRepository(User).findOne({
        where: {username: username},
        relations: ['account'],
    })
    return db_user
}

export const getUserById = async (id: number) => {
    const db_user = await AppDataSource.getRepository(User).findOneBy({
        id: id,
    })
    return db_user
}

export const getAccountById = async (id: number) => {
    const user_account = await AppDataSource.getRepository(Account).findOneBy({
        id: id,
    })
    return user_account
}

