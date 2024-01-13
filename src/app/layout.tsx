import { Inter } from 'next/font/google'
import './globals.css'
import React from "react";
import JsonLdScript from "@/components/JsonLdScript/index.server";
import YaScript from "@/components/YaScript/index.server";

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
                content="Meet - приложение для знакомств, которое помогает людям находить интересные знакомства, дружбу и любовь. Используйте Telegram для общения и незабываемых встреч."
                key="description"/>
          <link rel="canonical" href="https://www.lovemeetmet.space/"/>
          <meta name="twitter:title" content="Meet - Приложение для знакомств в Telegram"/>
          <meta name="twitter:description"
                content="Meet - приложение для знакомств, которое помогает людям находить интересные знакомства, дружбу и любовь. Используйте Telegram для общения и незабываемых встреч."/>
          <meta property="og:image" content="https://cdn.lovemeetmet.space/land/public/logo.svg" key="image"/>
          <meta property="og:type" content="website" key="type"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <meta property="og:type" content="website"/>
          <meta property="og:site_name" content="Meet - Приложение для знакомств в Telegram"/>
          <meta name="keywords"
                content="знакомства, любовь, дружба, приложение для знакомств, Meet, Telegram, телеграм"/>
          <meta name="robots" content="index, follow"/>
          <JsonLdScript/>
          <YaScript/>
          <script
              type="text/javascript"
              src="https://platform-api.sharethis.com/js/sharethis.js#property=65a297db047cc8001954d2c4&product=inline-share-buttons&source=platform"
              async="async"
          />
      </head>
      <body className={inter.className}>{children}</body>
      </html>
  )
}
