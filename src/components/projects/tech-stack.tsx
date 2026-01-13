import { FC } from 'react'

import { Badge } from '@/components/ui/badge'

type TechStackProps = {
    techStack: string[]
}

const TechStack: FC<TechStackProps> = ({ techStack }) => (
    <div>
        <h4 className="font-semibold text-sm mb-2">
            Tech Stack:
        </h4>
        <div className="flex flex-wrap gap-1">
            {techStack.map((tech) => (
                <Badge
                    key={tech}
                    variant="outline"
                    className="text-xs"
                >
                    {tech}
                </Badge>
            ))}
        </div>
    </div>
)

export default TechStack