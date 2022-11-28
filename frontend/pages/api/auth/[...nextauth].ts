import NextAuth from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: '/'
    },
    session: {
        maxAge: 1 * 24 * 60 * 60
    },
    // callbacks: {
    //     async session({ session, token, user }) {
    //     // @ts-ignore: Unreachable code error
    //       session.user = token.id
    //       return session
    //     }
    // },
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {},
            // @ts-ignore: Unreachable code error
            async authorize(credentials, req) {
                // @ts-ignore: Unreachable code error
                const userData = JSON.stringify({ username: credentials.username, password: credentials.password })
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
                        return response.json();
                    } catch (err) {
                        console.log(err)
                    }
                }
                const response = await apiLogin();
                const user = {
                    _id: response.id,
                    name: response.username,
                    apiToken: response.accessToken
                }
                if (user._id) {
                    return user
                } else {
                    return null
                }
            }
        })
    ],
    // callbacks: {
    //     async session({ session, token }) {
    //     // @ts-ignore: Unreachable code error
    //       session.user = session.name;
    //       return session;
    //     }
    // },
})
