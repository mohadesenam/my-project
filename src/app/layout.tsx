import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const serif = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
});
const sans = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'STRATECH — Advancing Innovative Engineering & Construction',
    template: '%s | STRATECH',
  },
  description:
    'STRATECH is a global engineering and construction company building the future with expertise and excellence. Infrastructure, commercial buildings, and urban solutions worldwide.',
  keywords: ['engineering', 'construction', 'infrastructure', 'commercial buildings', 'urban solutions', 'STRATECH'],
  openGraph: {
    title: 'STRATECH — Advancing Innovative Engineering & Construction',
    description: 'Building the future with expertise and excellence.',
    type: 'website',
    images: [{ url: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80' }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
