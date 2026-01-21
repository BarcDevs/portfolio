import ThemeButton from '@/components/nav/theme-button'

import { useScroll } from '@/hooks/use-scroll'

const Buttons = ({}) => {
    useScroll()
    
    return (
        <div className="flex items-center gap-2">
            <ThemeButton/>
        </div>
    )
}

export default Buttons