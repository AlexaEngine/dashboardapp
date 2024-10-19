import CredentialsProvider from 'next-auth/providers/credentials';

export const authConfig = {
  pages: {
    signIn: '/login', // Custom login page
  },
  callbacks: {
    // Handle JSON Web Tokens (JWT)
    async jwt({ token, user }) {
      // If the user is authenticated, add user information to the token
      if (user) {
        token.id = user.id;
        token.email = user.email;
      }
      return token;
    },
    // Manage user session based on JWT
    async session({ session, token }) {
      // Add user details from token to session object
      session.user = {
        id: token.id,
        email: token.email,
      };
      return session;
    },
    // Handle redirects after login
    async redirect({ url, baseUrl }) {
      // If URL starts with baseUrl, allow redirect, otherwise redirect to base URL
      if (url.startsWith(baseUrl)) return url;
      return baseUrl;
    },
    // Handle sign-in
    async signIn({ user, account, profile }) {
      // Allow login if user is authenticated
      if (user) {
        return true;
      }
      return false; // Otherwise, block login
    },
  },
  // Specify JWT settings for NextAuth
  jwt: {
    secret: process.env.NEXTAUTH_SECRET, // Use the secret from the environment
  },
  // Define authentication providers
  providers: [
    CredentialsProvider({
      name: 'Credentials', // Label for the login provider
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      // Custom authentication logic
      async authorize(credentials) {
        // Replace with your actual authentication logic
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
