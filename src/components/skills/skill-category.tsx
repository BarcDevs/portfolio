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
    <Card className="group hover:shadow-lg transition-all">
        <CardHeader>
            <CardTitle className="flex items-center gap-3">
                    <span className="text-3xl">
                        {category.icon}
                    </span>
                {category.title}
            </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
            {category.skills.map((skill) => (
                <Skill
                    key={skill.name}
                    skill={skill}
                />
            ))}
        </CardContent>
    </Card>
)

export default SkillCategory