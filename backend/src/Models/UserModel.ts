import { UserEntity } from './src/entitys/UserEntity';

type UserObject = { username: string; password: string }
type OnlyKeys = keyof UserObject

export class User {
    body: UserObject
    user: string

    constructor(body: UserObject) {
        this.body = body
        this.user = ""
    }

    cleanUp() {
        for (let key in this.body) {
            if (this.body[key as OnlyKeys] === '') throw new Error("Not empty paramans");
        }
        this.body = {
            username: this.body.username,
            password: this.body.password
        }
    }
}