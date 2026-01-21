import Education from '@/components/education/education'
import Section from '@/components/section'

import { education } from '@/constants/education'

const EducationSection = () => (
    <Section
        id="education"
        bgMuted
        headline={'Education'}
        description={'Academic foundation in software engineering'}
    >
        <div className="space-y-6">
            {education.map((education) => (
                <Education
                    key={education.institution}
                    education={education}
                />
            ))}
        </div>
    </Section>
)

export default EducationSection