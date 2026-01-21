'use client'

import ExperiencePeriod from '@/components/experience/experience-period'
import TimelineLine from '@/components/experience/timeline-line'
import Section from '@/components/section'

import { experiences } from '@/constants/experiences'

const ExperienceSection = () => (
    <Section
        id={'experience'}
        bgMuted
        headline={'Professional Experience'}
        description={'Building impactful solutions across diverse domains'}
    >
        <TimelineLine/>

        <div className="relative">
            <div className="space-y-12">
                {experiences.map((exp, index) => (
                    <ExperiencePeriod
                        key={exp.company}
                        exp={exp}
                        index={index}
                    />
                ))}
            </div>
        </div>
    </Section>
)

export default ExperienceSection