import type { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'], // Specify the weights you need
});


export const metadata: Metadata = {
  title: 'The One Choice - Empowering Your Journey',
  description: 'Join our exclusive events and transform your life with The One Choice. Learn strategies for consistency, growth, and success.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}

