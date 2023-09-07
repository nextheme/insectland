import Header from '@/components/header'
import './globals.css'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'اینسکت لند: مرکز خرید میلورم و غذای دام و طیور',
  description: 'بهترین و تخصصی ترین وبسایت خرید میلورم و غذای دام و طیور',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir="rtl">
      <body >
        <main className="flex min-h-screen flex-col  ">
          <Header />
          {children}
        </main>
      </body>
    </html>
  )
}
