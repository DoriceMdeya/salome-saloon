import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { ReactNode } from 'react';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SALOME salon | Premium Braiding & Hair Services',
  description: 'Professional women\'s hair salon specializing in braiding, styling, and hair care services.',
}

export default function RootLayout({ children }: {children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}