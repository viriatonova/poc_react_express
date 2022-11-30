import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Transactions } from "./Transactions"

@Entity()
export class Account {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    balance!: number

    @OneToMany(() => Transactions, (transactions) => transactions.debitedAccount)
    creditedTransactions!: Transactions[]

    @OneToMany(() => Transactions, (transactions) => transactions.creditedAccount)
    debitedTransactions!: Transactions[]
}