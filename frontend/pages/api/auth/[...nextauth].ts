import NextAuth, { Awaitable, Session, User } from 'next-auth';
import { JWT } from "next-auth/jwt"
import CredentialsProvider from "next-auth/providers/credentials";


declare module "next-auth" {
    /**
     * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
     */
    interface Session {
        user: {
            name: string,
            id: number,
            accessToken: string
        }
    }

    interface token {
        user: {
            name: string,
            id: number,
            accessToken: string
        }
    }
}

declare module "next-auth/jwt" {
    interface JWT {
      user: {
        username: string,
        id: number,
        accessToken: string
      }
    }
  }

export default NextAuth({
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: '/'
    },
    session: {
        strategy: "jwt",
        maxAge: 1 * 24 * 60 * 60
    },
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {},
            // @ts-ignore: Unreachable code error
            async authorize(credentials, req) {
                try {
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
                    const user = await apiLogin();
                    if (!user) {
                        throw new Error("User not exist")
                    } else {
                        return user
                    }
                } catch (error) {
                    console.log(error)
                    return null
                }
            }
        })
    ],
    callbacks: {
        // @ts-ignore: Unreachable code error
        async jwt({ token, user }) {
            if (user) {
                return {
                    ...token,
                    user: user
                }
            }
            return token
        },
        // @ts-ignore: Unreachable code error
        async session({ session, token }) {
            if (token) {
                session.user.name = token.user.username;
                session.user.id = token.user.id;
                session.user.accessToken = token.user.accessToken;
                return {...session}
            }   
            console.log(session)
            return session;
        },
    }
})
