import type { ReactNode } from 'react'
import '../styles/globals.css'

export const metadata = {
  title: 'Pharmly',
  description: 'Plataforma de gestión farmacéutica'
}

export default function RootLayout({
  children
}: {
  children: ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
