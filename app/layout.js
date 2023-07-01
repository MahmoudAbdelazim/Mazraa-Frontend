import './globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'المزرعة',
  description: 'المزرعة هو تطبيق إلكترونى لبيع وتسويق كافة المنتجات الزراعية من آلات زراعية و محاصيل زراعية',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
