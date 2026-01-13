'use client'

import { FC, useState } from 'react'

import ExperienceDetailsExpand from '@/components/experience/experience-details-expand'

type ExperienceDetailsProps = {
    experienceDetails: string[]
}

const ExperienceDetails: FC<ExperienceDetailsProps> = ({
    experienceDetails
}) => {
    const [isExpanded, setIsExpanded] =
        useState<boolean>(false)

    const toggleExpand = () => {
        setIsExpanded(!isExpanded)
    }

    return (
        <>
            <ExperienceDetailsExpand
                isExpanded={isExpanded}
                toggleExpand={toggleExpand}
            />

            {isExpanded && (
                <div className="pt-4 border-t space-y-2 animate-in slide-in-from-top-2 duration-300">
                    <h4 className="font-semibold">
                        Additional Details:
                    </h4>
                    <ul className="space-y-1">
                        {experienceDetails.map((detail) => (
                            <li
                                key={detail.slice(0, 10)}
                                className="text-sm text-muted-foreground flex gap-2"
                            >
                                <span className="text-primary">•</span>
                                <span>{detail}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    )
}

export default ExperienceDetails