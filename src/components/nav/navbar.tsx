'use client'

import { Buttons } from '@/components/nav/buttons'
import NavLinks from '@/components/nav/nav-links'

import { useScroll } from '@/hooks/use-scroll'

import { personalData } from '@/config/personal-data'

export const Navbar = () => {
    const { scrolled } = useScroll()

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled ? 'bg-background/80 backdrop-blur-lg border-b border-border shadow-sm' :
                    'bg-transparent'
            }`}
        >
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <div className="text-xl font-bold">
                        {personalData.name}
                    </div>

                    <NavLinks/>

                    <Buttons/>
                </div>
            </div>
        </nav>
    )
}
