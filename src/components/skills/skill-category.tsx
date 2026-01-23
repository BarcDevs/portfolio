import { FC } from 'react'

import { type SkillCategory } from '@/types/skills'

import Skill from '@/components/skills/skill'
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle
} from '@/components/ui/card'

type SkillProps = {
    category: SkillCategory
}

const SkillCategory: FC<SkillProps> = ({ category }) => (
    <Card className="group hover:shadow-lg hover:border-primary/50 transition-all">
        <CardHeader>
            <CardTitle className="flex items-center gap-3">
                <category.icon/>
                {category.title}
            </CardTitle>
        </CardHeader>
        <CardContent>
            <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                    <Skill
                        key={skill}
                        skill={skill}
                    />
                ))}
            </div>
        </CardContent>
    </Card>

)

export default SkillCategory