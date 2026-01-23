import { useEffect, useState } from 'react'

import { Moon, Sun } from 'lucide-react'

import { Button } from '@/components/ui/button'

const ThemeButton = () => {
    const [isDark, setIsDark] = useState(false)

    const toggleTheme = () => {
        document.documentElement
            .classList.toggle('dark')

        const newIsDark = document.documentElement
            .classList.contains('dark')

        setIsDark(newIsDark)
        localStorage.setItem(
            'theme',
            newIsDark ? 'dark' : 'light'
        )
    }

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme')
        const systemPrefersDark = window
            .matchMedia('(prefers-color-scheme: dark)').matches

        const isDarkMode = savedTheme
            ? savedTheme === 'dark'
            : systemPrefersDark

        setIsDark(isDarkMode)

        if ( isDarkMode ) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [])

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label="Toggle theme"
        >
            {isDark ? (
                <Sun className="h-5 w-5"/>
            ) : (
                <Moon className="h-5 w-5"/>
            )}
        </Button>
    )
}

export default ThemeButton