import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import '@/stylesheets/tailwind.css'
import '@/stylesheets/main.css'
import Aos from '@/components/Aos'

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Bardevs Portfolio',
    description: 'Bardevs Portfolio'
}

const RootLayout = ({children}: {
    children: React.ReactNode
}) => (
    <html lang="en">
    <body className={inter.className}>
    <Aos/>
    {children}
    {/*<Footer github={data.social.github}/>*/}
    </body>
    </html>
)
export default RootLayout
