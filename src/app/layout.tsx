import { Inter } from 'next/font/google'
import './globals.css'
import React from "react";
import JsonLdScript from "@/components/JsonLdScript/index.server";
import YaScript from "@/components/YaScript/index.server";
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // @ts-ignore
    return (
      <html lang="en">
      <JsonLdScript/>
      <YaScript/>
      <script
          type="text/javascript"
          src="https://platform-api.sharethis.com/js/sharethis.js#property=65a297db047cc8001954d2c4&product=inline-share-buttons&source=platform"
          async={true}
      />
      <body className={inter.className}>{children}</body>
      </html>
    )
}
