import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mauricio Uehara',
  description: 'Product Designer and Front-End Developer with 5+ years of experience in the tech industry. Proven ability to create user-centered designs and develop high-quality front-end code. Passionate about creating simple and user-friendly products.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
