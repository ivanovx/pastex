import NextAuth, { AuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { db } from "@/prisma/client"

export const authOptions: AuthOptions = {
    providers: [
        GithubProvider({
            clientId: "daad249778a9526c116a", //process.env.GITHUB_ID!,
            clientSecret: "7605f7455b0feb0fbc3ad23834ce9fce0edd63ad"  //process.env.GITHUB_SECRET!,
        }),
    ],

    adapter: PrismaAdapter(db),

    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60,
    },

    callbacks: {
        session: async ({ session, token }) => {
            return {
                ...session,
                user: {
                    ...session.user,
                    ...(token.sub ? { id: token.sub } : {}),
                },
            }
        },
        jwt: async ({ token, user }) => {
            if (user) {
                return { 
                    ...token, 
                    user 
                };
            }

            return token;
        },
    },
}

export default NextAuth(authOptions);