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
      <body className={inter.className}>{children}</body>
      </html>
    )
}
