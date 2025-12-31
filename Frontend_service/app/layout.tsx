import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SUMAQTI - Plataforma de Empleo con IA",
  description: "Encuentra tu empleo ideal con Inteligencia Artificial",
  generator: 'v0.app',
  icons: {
    icon: '/Sumaqti-logo.jpg', 
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}