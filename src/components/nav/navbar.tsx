'use client'

import { useState } from 'react'

import { Buttons } from '@/components/nav/buttons'
import NavLinks from '@/components/nav/nav-links'

import { personalData } from '@/config/personal-data'

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false)

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

                    <Buttons setScrolled={setScrolled}/>
                </div>
            </div>
        </nav>
    )
}
