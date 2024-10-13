import { signIn } from 'next-auth/react'; // Make sure the path is correct
import { AuthError } from 'next-auth';

export async function authenticate(prevState, formData) {
  try {
    const result = await signIn('credentials', { 
      redirect: false, // Ensure we handle the response manually
      ...formData 
    });

    // Handle response from signIn
    if (result.error) {
      switch (result.error) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }

    // If no error, return success or handle navigation
    return 'Successfully authenticated';
    
  } catch (error) {
    console.error('Authentication error:', error);
    return 'An error occurred during authentication.';
  }
}
