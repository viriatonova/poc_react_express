import { Session } from 'inspector';
import NextAuth from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials";
import { apiLogin } from "../../../service/apiRequests";

export default NextAuth({
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {},
            // @ts-ignore: Unreachable code error
            async authorize(credentials) {
                try {
                    // @ts-ignore: Unreachable code error
                    const userData = JSON.stringify({username: credentials.username, password: credentials.password})
                    console.log(`==================== ${userData} ================`)
                    const apiLogin = async () => {
                        try {
                            const url = 'http://0.0.0.0:52000/api/v1/login';
                            const response = await fetch(url, {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                                body: userData
                            })
                            return response.json()
                        } catch (err) {
                            console.log(err)
                        }
                    }
                    const response = await apiLogin()
                    return response
                } catch (err) {
                    console.log(err)
                    return null
                }
            }
        })
    ],
    session: {
        maxAge: 1 * 24 * 60 * 60
    }
})
