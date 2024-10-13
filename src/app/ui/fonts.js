import { Inter, Lusitana } from 'next/font/google';

// Correctly export Lusitana and Inter fonts with proper weight and subsets
export const lusitana = Lusitana({
  weight: ['400', '700'],  // Ensure these weights are supported
  subsets: ['latin'],
});

export const inter = Inter({
  subsets: ['latin'],  // Subsets for Inter
});
