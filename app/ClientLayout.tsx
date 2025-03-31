'use client'

import type React from "react"
import "./globals.css"
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import { AnimatePresence } from "framer-motion"

const inter = Inter({ subsets: ["latin"] })

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <AnimatePresence mode="wait">
            {children}
          </AnimatePresence>
        </ThemeProvider>
      </body>
    </html>
  )
}
