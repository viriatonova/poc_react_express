import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, OneToOne } from "typeorm"
import { Account } from "./Account"

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    username!: string

    @Column()
    password!: string

    @OneToOne(() => Account, {cascade: true})
    @JoinColumn()
    account!: Account
}