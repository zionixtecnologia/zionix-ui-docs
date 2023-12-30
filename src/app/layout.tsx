import type { Metadata } from 'next'
import './globals.css'
import '../../node_modules/highlight.js/styles/dracula.css'
import '../../node_modules/zionix-ui/dist/style.css'



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
      <body>{children}</body>
    </html>
  )
}
