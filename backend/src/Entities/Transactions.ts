import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, OneToOne } from "typeorm"
import { Account } from "./Account"

@Entity()
export class Transactions {
    @PrimaryGeneratedColumn()
    id!: number

    @Column({default: () => "NOW()"})
    createdAt!: string

    @Column()
    currency!: number

    @OneToOne(() => Account, {cascade: true})
    @JoinColumn()
    debitedAccount!: Account

    @OneToOne(() => Account, {cascade: true})
    @JoinColumn()
    creditedAccount!: Account
}