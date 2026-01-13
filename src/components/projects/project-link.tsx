import { FC } from 'react'

import Link from 'next/link'

import { LucideIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'

type ProjectLinkProps = {
    link: string
    Icon: LucideIcon
    label: string
}

const ProjectLink: FC<ProjectLinkProps> = ({
    link,
    Icon,
    label
}) => (
    <Button
        size="sm"
        variant="default"
        className="flex-1 gap-2"
        asChild
    >
        <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
        >
            <Icon className="h-3 w-3"/>
            {label}
        </Link>
    </Button>
)

export default ProjectLink