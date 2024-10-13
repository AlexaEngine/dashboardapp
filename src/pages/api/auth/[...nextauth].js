import NextAuth from 'next-auth';
import { authConfig } from '../../../app/login/auth.config'; // Corrected path

export default NextAuth(authConfig);
