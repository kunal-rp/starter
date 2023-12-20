import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import fetch from "node-fetch";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    async jwt({ token, user, account, profile, isNewUser }) {
      if (user) {
        const response = await fetch(process.env.MAIN_SERVER_URL + "/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ user, isNewUser }),
        }).catch((error) => console.log(error));

        var data = await response.json();
        return token;
      }

      return token;
    },

    async session({ session, token, user }) {
      console.log("session callback ", { token });
      return session;
    },
  },
  secret: process.env.JWT_SECRET,
};

export default NextAuth(authOptions);
