import ProjectOverview from '@/components/projects/project-overview'
import Section from '@/components/section'

import { projects } from '@/constants/projects'

const ProjectsSection = () => (
    <Section
        id="projects"
        headline={'Featured Projects'}
        description={'Real-world applications demonstrating full-stack expertise'}
    >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
                <ProjectOverview
                    key={project.name}
                    project={project}
                />
            ))}
        </div>
    </Section>
)

export default ProjectsSection