import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, OneToOne } from "typeorm"
import { Account } from "./Account"

@Entity()
export class Transactions {
    @PrimaryGeneratedColumn()
    id!: number

    @Column({default: () => "NOW()"})
    createdAt!: string

    @Column()
    value!: number

    @OneToOne(() => Account, {cascade: true})
    @JoinColumn()
    debitedAcconunt!: Account

    @OneToOne(() => Account, {cascade: true})
    @JoinColumn()
    creditedAccount!: Account
}