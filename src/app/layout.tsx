import { Inter } from 'next/font/google'
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
          <link rel="icon" type="image/x-icon" href="https://cdn.lovemeetmet.space/land/public/favicon.png"/>
          <meta charSet="utf-8"/>
          <meta property="og:title" content="Meet - Приложение для знакомств в Telegram" key="title"/>
          <meta property="og:description" name="description"
                content="Meet - приложение для знакомств, которое помогает людям находить интересные знакомства, дружбу и любовь. Присоединяйтесь к нам сегодня и начните своё путешествие к счастью."
                key="description"/>
          <meta property="og:image" content="/logo.svg" key="image"/>
          <meta property="og:type" content="website" key="type"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <meta property="og:type" content="website"/>
          <meta property="og:site_name" content="Meet - Приложение для знакомств в Telegram"/>
      </head>
      <body className={inter.className}>{children}</body>
      </html>
  )
}
