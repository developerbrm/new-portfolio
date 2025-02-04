import type { Metadata } from 'next'
import { Lato } from 'next/font/google'
import './globals.css'

const font = Lato({
  variable: '--font-lato',
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
})

export const metadata: Metadata = {
  title: 'Portfolio | Braham Prakash',
  description: 'Portfolio of Braham Prakash | FrontEnd Developer',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${font.variable} antialiased`}>{children}</body>
    </html>
  )
}
