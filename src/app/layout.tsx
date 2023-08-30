import './globals.css'
import { Mulish, Lora } from 'next/font/google'

const mulish = Mulish({
  weight: ['400', '700'],
  variable: '--font-mulish',
  subsets: ['latin']
})

const lora = Lora({
  weight: ['400'],
  variable: '--font-lora',
  subsets: ['latin']
})
 
export const metadata = {
  title: 'Kelly Mei',
  description: 'Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${lora.variable} ${mulish.variable}`}>
      <body>{children}</body>
    </html>
  )
}