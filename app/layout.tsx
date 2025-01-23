import type { Metadata } from 'next'
import './globals.css'
import React from 'react'

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
    <html lang="es">
      <head>
        <link rel="icon" href="/img/padel.ico" type="image/x-icon" />
        <title>Clinc Padel / Guadal</title>
      </head>
      <body>{children}</body>
    </html>
  )
}
