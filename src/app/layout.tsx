import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import React from "react";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Meet - Найдите свою любовь в telegram',
  description: 'Meet - приложение для знакомств, которое помогает людям находить интересные знакомства, дружбу и любовь. Присоединяйтесь к нам сегодня и начните своё путешествие к счастью.'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="favicon.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
