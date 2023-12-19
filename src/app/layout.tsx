import { Inter } from 'next/font/google'
import Head from 'next/head'
import './globals.css'
import React from "react";

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Meet - Приложение для знакомств в Telegram</title>
        <meta property="og:title" content="Meet - Приложение для знакомств в Telegram" key="title" />
        <meta property="og:description" content="Meet - приложение для знакомств, которое помогает людям находить интересные знакомства, дружбу и любовь. Присоединяйтесь к нам сегодня и начните своё путешествие к счастью." key="description" />
        <meta property="og:image" content="logo.svg" key="image" />
        <meta property="og:type" content="website" key="type" />
        <link rel="icon" href="favicon.png" />
        {/* Другие мета теги и связанные с ними элементы */}
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
