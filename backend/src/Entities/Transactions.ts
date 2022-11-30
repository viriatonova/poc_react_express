import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { Account } from "./Account"

@Entity()
export class Transactions {
    @PrimaryGeneratedColumn()
    id!: number

    @Column({default: () => "NOW()"})
    createdAt!: string

    @Column()
    currency!: number

    @ManyToOne(() => Account, (account) => account.debitedTransactions)
    debitedAccount!: Account[]

    @ManyToOne(() => Account, (account) => account.creditedTransactions)
    creditedAccount!: Account[]
}