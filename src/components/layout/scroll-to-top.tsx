import { ArrowUp } from 'lucide-react'

import { Button } from '@/components/ui/button'

export const ScrollToTop = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    
    return (
        <Button
            onClick={scrollToTop}
            size="icon"
            className="fixed bottom-8 right-8 rounded-full shadow-lg z-50"
        >
            <ArrowUp className="h-5 w-5"/>
        </Button>
    )
}
