import { Inter, Dancing_Script } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const dancingScript = Dancing_Script({ subsets: ['latin'], variable: '--font-dancing-script' })

export const metadata = {
  title: 'I Love You Adeshola 💗💗',
  description: 'A romantic declaration of love',
openGraph: {
  type: 'website',
  url: 'https://lovedovey.vercel.app',
  title: 'I Love You Adeshola 💗💗',
  description: 'A romantic declaration of love',
  images: [
    {
      url: 'https://lovedovey.vercel.app//heart-img.png',
      width: 800,
      height: 600,
      alt: 'I Love You Adeshola 💗💗',
    },
  ],
},
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${dancingScript.variable}`}>{children}</body>
    </html>
  )
}

