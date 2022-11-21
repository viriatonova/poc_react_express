import { Request, Response } from 'express';
import { Account } from '../Entities/Account';
import { Transactions } from "../Entities/Transactions";
import { AppDataSource } from "../../main"
import { getUserByName, getAccountById } from '../helpers/DadaHelper';


export const registerTransaction = async (req: Request, res: Response) => {
    const userDebit = await getUserByName(req.body.username)
    const userCredit = await getUserByName(req.body.userCredit)
    if (userCredit?.username === userDebit?.username) {
        return res.status(400).send({ message: "Can't transfer to self account" })
    }
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

        
        const transaction = await AppDataSource.getRepository(Transactions).create({
            // @ts-ignore: Unreachable code error
            currency: req.body.creditValue,
            debitedAccount: userDebit!.account.id,
            creditedAccount: userCredit!.account.id
        })
        const transactionResult = await AppDataSource.getRepository(Transactions).save(transaction)

        return res.status(200).send({ transaction: transactionResult })
    }
}

export const getUserTransaction = async (req: Request, res: Response) => {
    const db_user = await getUserByName(req.body.username)
    const transactions = await AppDataSource.getRepository(Transactions).find({
        // @ts-ignore: Unreachable code error
        where: {debitedAccount: db_user?.id},
        relations: ['debitedAccount'], 
    })
    return transactions
}