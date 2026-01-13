import { FC } from 'react'

import { Code2 } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import {
    CardDescription,
    CardHeader,
    CardTitle
} from '@/components/ui/card'

type ProjectHeaderProps = {
    name: string
    tagline: string
    status?: string
}

const ProjectHeader: FC<ProjectHeaderProps> = ({
    name,
    tagline,
    status
}) => (
    <CardHeader>
        <div className="flex items-start justify-between gap-2 mb-2">
            <Code2 className="h-8 w-8 text-primary shrink-0"/>
            {status && (
                <Badge
                    variant="secondary"
                    className="bg-primary text-primary-foreground"
                >
                    {status}
                </Badge>
            )}
        </div>
        <CardTitle className="text-xl text-balance">
            {name}
        </CardTitle>
        <CardDescription className="text-base font-medium">
            {tagline}
        </CardDescription>
    </CardHeader>
)

export default ProjectHeader