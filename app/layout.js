import './globals.css'
import { Roboto, Aladin } from 'next/font/google'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-roboto'
})

const aladin = Aladin({
  subsets: ['latin'],
  weight: ['400'],
  variable: "--font-aladin"
})

export const metadata = {
  title: "Sartaj Alam | MERN Stack Developer",
  description:
    "Sartaj Alam is a MERN Stack Developer building responsive and scalable web applications using MongoDB, Express, React, and Node.js.",
  keywords: [
    "Sartaj Alam",
    "MERN Stack Developer",
    "React Developer",
    "Node.js Developer",
    "Next.js Portfolio",
  ],
  openGraph: {
    title: "Sartaj Alam | MERN Stack Developer",
    description:
      "Explore projects and skills of Sartaj Alam, a MERN Stack Developer.",
    url: "https://a1sartaj.in", // change to your domain
    siteName: "Sartaj Portfolio",
    images: [
      {
        url: "/images/og.png",
        width: 1200,
        height: 630,
        alt: "Sartaj Alam Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sartaj Alam | MERN Stack Developer",
    description:
      "Portfolio of Sartaj Alam, a MERN Stack Developer.",
    images: ["/images/og.png"],
  },
  authors: [{ name: "Sartaj Alam" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body className={`${aladin.variable} ${roboto.variable} relative bg-bg text-text transition-colors duration-300 min-h-screen `} >
        {children}
      </body>
    </html>
  )
}
