import { FC } from 'react'

import { Briefcase, Calendar } from 'lucide-react'

import { Experience } from '@/types/experience'

import { Badge } from '@/components/ui/badge'
import { CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

type ExperienceHeaderProps = {
    exp: Experience
    index: number
}

const ExperienceHeader: FC<ExperienceHeaderProps> = ({
    exp,
    index
}) => (
    <CardHeader>
        <div className={`flex items-start gap-3 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
            <Briefcase className="h-6 w-6 text-primary shrink-0 mt-1"/>
            <div className="flex-1">
                <CardTitle className="text-xl mb-2">
                    {exp.company}
                </CardTitle>
                <CardDescription className="text-base font-semibold text-foreground">
                    {exp.role}
                </CardDescription>
                <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4"/>
                    {exp.period}
                    {exp.period.includes('In Development') && (
                        <Badge
                            variant="secondary"
                            className="ml-2"
                        >
                            In Development
                        </Badge>
                    )}
                </div>
            </div>
        </div>
    </CardHeader>
)

export default ExperienceHeader