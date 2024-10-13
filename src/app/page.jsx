import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link'; // Import Link from next/link
import Image from 'next/image'; // Import Image component
import { lusitana } from './ui/fonts.js'; // Import custom font styles
import styles from './ui/home.module.css'; // Import styles if used

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      {/* Header section with the Acme logo */}
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        <AcmeLogo />
      </div>

      {/* Main content section with welcome message and images */}
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        {/* Welcome message and Log In button */}
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <p
            className={`${lusitana.className} antialiased text-xl text-gray-800 md:text-3xl md:leading-normal`}
          >
            <strong>Welcome to Acme.</strong> This is the example for the{' '}
            <a href="https://nextjs.org/learn/" className="text-blue-500">
              Next.js Learn Course
            </a>
            , brought to you by Vercel.
          </p>

          {/* Updated Log In Button with Link component for navigation */}
          <Link
            href="/ui/dashboard"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>

        {/* Hero Images Section */}
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Desktop Hero Image */}
          <Image
            src="/hero-desktop.png" // Path to your image in the 'public' folder
            width={1000}
            height={760}
            className="hidden md:block" // Hides on mobile, shows on desktop
            alt="Screenshots of the dashboard project showing desktop version"
            priority // Load this image with priority for better performance
          />
          {/* Mobile Hero Image */}
          <Image
            src="/hero-mobile.png"
            width={560}
            height={620}
            className="block md:hidden"
            alt="Screenshots of the dashboard project showing mobile version"
            priority // Load this image with priority for better performance
          />
        </div>
      </div>
    </main>
  );
}
