import { FC } from 'react'

import { ArrowUp } from 'lucide-react'

import { Button } from '@/components/ui/button'

type ScrollToTopProps = {
    show: boolean
}

export const ScrollToTop: FC<ScrollToTopProps> = ({ show }) => {
    const scrollToTop = () => {
        window.scrollTo({ 
            top: 0, 
            behavior: 'smooth'
        })
    }

    if ( !show ) return null

    return (
        <Button
            onClick={scrollToTop}
            size="icon"
            className="fixed bottom-8 right-8 rounded-full shadow-lg z-50"
            aria-label="Scroll to top"
        >
            <ArrowUp className="h-5 w-5"/>
        </Button>
    )
}