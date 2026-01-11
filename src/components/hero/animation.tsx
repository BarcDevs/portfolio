import { useEffect, useState } from 'react'

import { techStack } from '@/constants/tech-stack'

const Animation = ({}) => {
    const [currentText, setCurrentText] = useState(0)
    const [displayText, setDisplayText] = useState('')
    const [isDeleting, setIsDeleting] = useState(false)


    useEffect(() => {
        const text = techStack[ currentText ]
        const timeout = setTimeout(
            () => {
                if ( !isDeleting ) {
                    if ( displayText.length < text.length ) {
                        setDisplayText(
                            text.slice(0, 
                                displayText.length + 1
                            )
                        )
                    } else {
                        setTimeout(() => 
                            setIsDeleting(true), 2000)
                    }
                } else {
                    if ( displayText.length > 0 ) {
                        setDisplayText(displayText.slice(0, -1))
                    } else {
                        setIsDeleting(false)
                        setCurrentText((prev) => 
                            ( prev + 1 ) % 
                            techStack.length)
                    }
                }
            },
            isDeleting ? 50 : 100
        )

        return () => clearTimeout(timeout)
    }, [displayText, isDeleting, currentText])

    return (
        <div className="h-16 flex items-center justify-center">
            <p className="text-lg md:text-xl text-primary font-mono">
                {displayText}
                <span className="animate-pulse">|</span>
            </p>
        </div>
    )
}

export default Animation