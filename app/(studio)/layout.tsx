import Link from 'next/link'
import '../globals.css'
import { Rajdhani } from 'next/font/google'

const inter = Rajdhani({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700']
})

export const metadata = {
  title: 'My Awesome Site',
  description: 'Generated by Next + Sanity',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      {children}
      </body>
    </html>
  )
}
