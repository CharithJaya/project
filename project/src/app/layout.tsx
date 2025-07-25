import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { AuthProvider } from '@/context/AuthContext';
import { CartProvider } from '@/context/CartContext';
import Header from '@/components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CricStore - Premium Cricket Equipment',
  description: 'Your one-stop shop for professional cricket equipment. Bats, balls, pads, gloves, and more.',
 icons: {
    icon: '/logo.png', // ✅ Path to your logo
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <CartProvider>
            <div className="min-h-screen bg-gray-50">
              <Header />
              <main>{children}</main>
            </div>
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}