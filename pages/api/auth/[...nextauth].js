import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";

import clientPromise from "../../../lib/mongodb";

export default NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    jwt: ({ token, user }) => {
      if (user) {
        return { ...token, ...user };
      } else {
        return token;
      }
    },
    session: ({ session, token }) => {
      if (token) {
        return { ...session, ...token };
      } else {
        return session;
      }
    },
  },
  session: { strategy: "jwt" },
  secret: process.env.ACCESS_TOKEN_SECRET,
  pages: {
    signIn: "/login",
  },
});
