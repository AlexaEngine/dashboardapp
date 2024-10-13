import CredentialsProvider from 'next-auth/providers/credentials';

export const authConfig = {
  pages: {
    signIn: '/login', // The custom login page
  },
  callbacks: {
    async jwt({ token, user }) {
      // If user is present, add user info to the token
      if (user) {
        token.id = user.id;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      // Pass user data from token to the session
      if (token) {
        session.user.id = token.id;
        session.user.email = token.email;
      }
      return session;
    },
    async redirect({ url, baseUrl }) {
      // Redirect to dashboard after login, or to the base URL if not specified
      if (url.startsWith(baseUrl)) return url;
      return baseUrl;
    },
    async signIn({ user, account, profile }) {
      // Implement any specific sign-in logic here if needed
      if (user) {
        return true;
      } else {
        return false;
      }
    }
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        // Custom authentication logic
        if (
          credentials.email === 'user@nextmail.com' &&
          credentials.password === '123456'
        ) {
          // Return user object if credentials are valid
          return {
            id: '1',
            name: 'User Name',
            email: 'user@nextmail.com',
          };
        }
        // Return null if authentication fails
        return null;
      },
    }),
  ],
};
