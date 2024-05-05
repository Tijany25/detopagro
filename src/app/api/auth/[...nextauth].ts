import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import axios from 'axios';

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        try {
          const response = await axios.post('/api/auth/login', credentials);
          const user = response.data;

          // If no error and we have user data, return it
          if (response.status === 200 && user) {
            return user;
          }

          // Return null if user data could not be retrieved
          return null;
        } catch (error) {
          console.error('Error during authorization:', error);
          return null;
        }
      }
    })
  ],
  callbacks: {
    session({ session, token, user }) {
      return session; // The return type will match the one returned in `useSession()`
    },
  },
});
