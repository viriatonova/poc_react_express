import { Session } from 'inspector';
import NextAuth from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: '/'
    },
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {},
            // @ts-ignore: Unreachable code error
            async authorize(credentials) {
                console.log(JSON.stringify(credentials))
                // @ts-ignore: Unreachable code error
                const userData = JSON.stringify({username: credentials.username, password: credentials.password})
                const apiLogin = async () => {
                    try {
                        const url = 'http://api.teste.com:52000/api/v1/login';
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
                const response = await apiLogin();
                if (response?.id) {
                    return response
                } else {
                    return null
                }
            }
        })
    ],
    session: {
        maxAge: 1 * 24 * 60 * 60
    }
})
