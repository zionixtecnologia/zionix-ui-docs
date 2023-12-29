import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import '../../node_modules/zionix-ui/dist/style.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ZIONIX ui',
  description: 'ZIONIX ui docs page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
