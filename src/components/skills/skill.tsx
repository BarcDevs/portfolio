import { FC } from 'react'

import { type Skill } from '@/types/skills'

import { getLevelColor } from '@/components/lib/utils/getLevelColor'
import { getLevelWidth } from '@/components/lib/utils/getLevelWidth'
import { Badge } from '@/components/ui/badge'

type SkillProps = {
    skill: Skill
}

const Skill: FC<SkillProps> = ({ skill }) => {
    const levelWidth = getLevelWidth(skill.level)
    const levelColor = getLevelColor(skill.level)

    return (
        <div
            key={skill.name}
            className="space-y-2"
        >
            <div className="flex items-center justify-between">
                <span className="text-sm font-medium">
                    {skill.name}
                </span>
                <Badge
                    variant="secondary"
                    className={levelColor}
                >
                    {skill.level}
                </Badge>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div className={`h-full bg-primary transition-all duration-500 ${levelWidth}`}/>
            </div>
        </div>
    )
}

export default Skill