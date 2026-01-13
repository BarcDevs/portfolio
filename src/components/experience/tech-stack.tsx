import { FC } from 'react'

import { Badge } from '@/components/ui/badge'

type TechStackProps = {
    techStack: string[]
}

const TechStack: FC<TechStackProps> = ({
    techStack
}) => (
    <div className="flex flex-wrap gap-2">
        {techStack.map((tech) => (
            <Badge
                key={tech}
                variant="outline"
            >
                {tech}
            </Badge>
        ))}
    </div>
)

export default TechStack