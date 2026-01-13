import { FC } from 'react'

import { Education as TEducation } from '@/types/education'

import Content from '@/components/education/content'
import Header from '@/components/education/header'
import { Card } from '@/components/ui/card'

type EducationProps = {
    education: TEducation
}

const Education: FC<EducationProps> = ({ education }) => (
    <Card className="group hover:shadow-lg transition-shadow">
        <Header
            institution={education.institution}
            degree={education.degree}
            period={education.period}
        />
        <Content
            focus={education.focus}
            notableProject={education.notableProject}
        />
    </Card>
)

export default Education