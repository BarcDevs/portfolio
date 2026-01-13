import { FC } from 'react'

type ProjectDetailsProps = {
    timeline: string
}

const ProjectDetails: FC<ProjectDetailsProps> = ({ timeline }) => (
    <div className="text-xs text-muted-foreground space-y-1 mt-auto pt-4 border-t">
        <p>
            <span className="font-semibold">
                Timeline:
            </span> {timeline}
        </p>
    </div>
)

export default ProjectDetails