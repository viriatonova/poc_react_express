import { Request, Response } from 'express';
import { User } from "../Entities/User";
import { Account } from '../Entities/Account';
import { Transactions } from "../Entities/Transactions";
import { AppDataSource } from "../../main"
import { getUserByName, getUserById, getAccountById } from '../helpers/DadaHelper';

export const registerTransaction = async (req: Request, res: Response) => {
    const userDebit = await getUserByName(req.body.username)
    const userCredit = await getUserByName(req.body.userCredit)
    if (userDebit!.account.balance < req.body.creditValue) {
        return res.status(400).send({ message: "Not monetary fund" })
    } else {
        const debitAccount = await getAccountById(userDebit!.account.id)
        const creditAccount = await getAccountById(userCredit!.account.id)

        AppDataSource.getRepository(Account).merge(debitAccount!, {
            balance: debitAccount!.balance - req.body.creditValue,
        })

        const debitResult = await AppDataSource.getRepository(Account).save(debitAccount!)

        AppDataSource.getRepository(Account).merge(creditAccount!, {
            balance: creditAccount!.balance + req.body.creditValue,
        })

        const creditResult = await AppDataSource.getRepository(Account).save(creditAccount!)

        return res.status(200).send({ debitResult: debitResult })
    }
}

export const getUserTransaction = async (req: Request, res: Response) => {

}