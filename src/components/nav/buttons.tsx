import {
    Dispatch, FC,
    SetStateAction,
    useEffect
} from 'react'

import DownloadCvButton from '@/components/nav/download-cv-button'
import { ThemeButton } from '@/components/nav/theme-button'

type ButtonsProps = {
    setScrolled: Dispatch<SetStateAction<boolean>>
}

export const Buttons: FC<ButtonsProps> = ({
    setScrolled
}) => {
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className="flex items-center gap-2">
            <ThemeButton/>
            <DownloadCvButton/>
        </div>
    )
}
