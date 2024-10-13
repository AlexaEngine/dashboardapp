// middleware.js
import { withAuth } from 'next-auth/middleware';

// Use the withAuth function to handle authentication with NextAuth.js
export default withAuth({
  callbacks: {
    authorized({ token }) {
      // Only allow access if the user is authenticated
      return !!token;
    },
  },
});

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'], // Add any specific routes you want to protect
};
