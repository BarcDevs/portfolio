import ProjectCard from "./ProjectCard"
import {Project} from '@/types'

type ProjectProps = {
    projects: Project[]
}

const Projects = ({projects}: ProjectProps) => {
    return (
        <div>
            <h1 className="mt-8 text-2xl md:text-4xl text-center font-extrabold">My projects</h1>
            {projects.map((project) => (
                <ProjectCard key={project.title} project={project}/>
            ))}
        </div>
    )
}

export default Projects
