import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Clinc Padel / Guadal',
  description: 'Created by Guadal',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
