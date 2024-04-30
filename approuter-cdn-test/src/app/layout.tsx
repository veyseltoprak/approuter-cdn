'use client'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script defer src='https://cdnjs.cloudflare.com/ajax/libs/react/18.2.0/umd/react.development.min.js'></script>
        <script defer src='https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.2.0/umd/react-dom.development.min.js'></script>
        <script defer src='https://cdnjs.cloudflare.com/ajax/libs/antd/5.14.0/antd-with-locales.min.js'></script>
        <script defer src='https://cdnjs.cloudflare.com/ajax/libs/dayjs/1.11.11/dayjs.min.js'></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
