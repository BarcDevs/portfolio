import { FC } from 'react'

import { Project } from '@/types/project'

import KeyFeatures from '@/components/projects/key-features'
import ProjectDetails from '@/components/projects/project-details'
import ProjectHeader from '@/components/projects/project-header'
import ProjectLinks from '@/components/projects/project-links'
import TechStack from '@/components/projects/tech-stack'
import { Card, CardContent } from '@/components/ui/card'

type ProjectOverviewProps = {
    project: Project
}

const ProjectOverview: FC<ProjectOverviewProps> = ({ project }) => (
    <Card className="group hover:shadow-xl transition-all flex flex-col">
        <ProjectHeader
            name={project.name}
            tagline={project.tagline}
            status={project.status}
        />
        <CardContent className="flex-1 flex flex-col gap-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
                {project.description}
            </p>

            <KeyFeatures features={project.features}/>

            <TechStack techStack={project.techStack}/>

            <ProjectDetails timeline={project.timeline}/>

            <ProjectLinks links={project.links}/>
        </CardContent>
    </Card>
)

export default ProjectOverview