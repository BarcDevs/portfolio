import { useEffect, useState } from 'react'

export const useScroll = () => {
    const [scrolled, setScrolled] = useState(false)
    const [showBackToTop, setShowBackToTop] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
            setShowBackToTop(window.scrollY > 500)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window
            .removeEventListener('scroll', handleScroll)
    }, [])

    return {
        scrolled,
        showBackToTop
    }
}