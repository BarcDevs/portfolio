import { ThemeButton } from '@/components/nav/theme-button'

import { useScroll } from '@/hooks/use-scroll'

export const Buttons = ({}) => {
    useScroll()
    
    return (
        <div className="flex items-center gap-2">
            <ThemeButton/>
        </div>
    )
}