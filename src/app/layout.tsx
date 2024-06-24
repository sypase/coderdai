import Header from '@/components/Header'
import './globals.css'
import { ThemeProvider } from '@/components/theme/theme-provider'
import Footer from '@/components/Footer'
import Link from 'next/link'
import ThemeToggle from '@/components/theme/ThemeToggle'
import React from 'react'
import { FaDiscord, FaInstagram } from 'react-icons/fa'

export const metadata = {}
export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <title>Coursework DAI</title>
                <meta name="description" content="Open Source, AI Powered Realtime Text Analytics Platform" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
                <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
                <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
                <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
                <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
                <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
                <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
                <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
                <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/manifest.json" />
                <meta name="msapplication-TileColor" content="#ffffff" />
                <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
                <meta name="theme-color" content="#ffffff"></meta>

                <meta property="og:title" content="Coursework DAI" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://courseworkdai.com/" />
                <meta property="og:image" content="https://courseworkdai.com/og.png" />
                <meta property="og:description" content="Open Source, AI Powered Realtime text analytics platform" />
            </head>
            <body>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                    <Header>
                        <Link href="https://discord.gg/KNQYQE3gPh">
                            <FaDiscord className="h-6 w-6" />
                        </Link>
                        <Link href="https://www.instagram.com/coder.dai/">
                            <FaInstagram className="h-6 w-6" />
                        </Link>
                        <ThemeToggle />
                    </Header>
                    <main>{children}</main>
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    )
}