import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Providers } from "./redux/provider";
import { FaPhone, FaRocketchat, FaWhatsapp } from "react-icons/fa6";
import ClientLayout from "@/components/ClientLayout";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Dipankar Interior & Exterior Solutions',
    template: '%s | Dipankar Interior'
  },
  description: 'Transform your space with our expert interior and exterior design solutions. Professional, creative, and personalized home makeovers.',
  keywords: ['interior design', 'exterior design', 'home renovation', 'interior decoration', 'home makeover'],
  authors: [{ name: 'Dipankar Interior' }],
  creator: 'Dipankar Interior',
  publisher: 'Dipankar Interior',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://dipankar-interior.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Dipankar Interior & Exterior Solutions',
    description: 'Transform your space with our expert interior and exterior design solutions.',
    url: 'https://dipankar-interior.com',
    siteName: 'Dipankar Interior',
    images: [
      {
        url: '/assets/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Dipankar Interior & Exterior Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dipankar Interior & Exterior Solutions',
    description: 'Transform your space with our expert interior and exterior design solutions.',
    images: ['/assets/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <ClientLayout>
            <Navbar />
            <main className="relative overflow-hidden min-h-screen">
              {children}
            </main>
            {/* fixed contact button */}
            <div className="fixed top-[65%] md:top-[80%] translate-y-[-65%] md:translate-y-[-80%] right-0 z-20 flex flex-col gap-y-3 md:gap-y-6 p-3 md:p-5 text-2xl md:text-3xl bg-slate-100 shadow-md text-black">
              <FaWhatsapp className="text-green-500 cursor-pointer" />
              <FaPhone className="text-gray-500 cursor-pointer" />
            </div>
            {/*sticky help button */}
            <div className="fixed z-20 top-[98%] translate-y-[-98%] transition-all ease-in-out duration-700 right-5 bg-primary-btn text-primary-bg shadow-lg rounded-md cursor-pointer p-2.5 md:p-4 text-2xl md:text-3xl">
              <FaRocketchat />
            </div>
            <Footer />
          </ClientLayout>
        </Providers>
      </body>
    </html>
  );
}
