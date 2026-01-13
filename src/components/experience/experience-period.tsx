import { FC } from 'react'

import { Experience } from '@/types/experience'

import Achievements from '@/components/experience/achievements'
import ExperienceDetails from '@/components/experience/experience-details'
import ExperienceHeader from '@/components/experience/experience-header'
import TimelineDot from '@/components/experience/timeline-dot'
import { Card, CardContent } from '@/components/ui/card'

type ExperiencePeriodProps = {
    exp: Experience
    index: number
}

const ExperiencePeriod: FC<ExperiencePeriodProps> = ({
    exp,
    index
}) => (
    <div className={`relative ${
            index % 2 === 0 ? 
                'md:pr-[calc(50%+2rem)]' :
                'md:pl-[calc(50%+2rem)] md:text-right'
        }`}
    >
        <TimelineDot/>
        <Card className="group hover:shadow-lg transition-shadow">
            <ExperienceHeader
                exp={exp}
                index={index}
            />
            <CardContent className="space-y-4">
                <p className="text-muted-foreground italic">
                    {exp.brief}
                </p>

                <Achievements achievements={exp.achievements}/>

                {exp.details && (
                    <ExperienceDetails experienceDetails={exp.details}/>
                )}
            </CardContent>
        </Card>
    </div>
)

export default ExperiencePeriod