import { FC } from 'react'

import type { Metadata } from 'next'
import { Geist, Geist_Mono, Inter } from 'next/font/google'

import { LayoutProps } from '@/types/global'

import { meta } from '@/constants/metadata'

import '../styles/globals.css'

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin']
})

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin']
})

const inter = Inter({
    variable: '--font-inter',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const metadata: Metadata = meta

const RootLayout: FC<LayoutProps> = ({
    children
}) => (
    <html lang="en">
    <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased`}
    >
    {children}
    </body>
    </html>
)

export default RootLayout