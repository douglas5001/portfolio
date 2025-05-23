import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Portella5001',
  description: 'Portifolio Pessoa de Douglas Portella',
  generator: 'Portella',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
