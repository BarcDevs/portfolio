import { FC } from 'react'

import { ExternalLink, Github } from 'lucide-react'

import { 
    ProjectLink as TProjectLink
} from '@/types/project'

import ProjectLink from './project-link'

type ProjectLinksProps = {
    links: TProjectLink
}

const ProjectLinks: FC<ProjectLinksProps> = ({ links }) => {
    const { demo, github, portfolio } = links

    return (
        <div className="flex gap-2">
            {demo || portfolio && (
                <ProjectLink
                    link={demo || portfolio}
                    Icon={ExternalLink}
                    label={demo ? 'Demo' : 'Portfolio'}
                />
            )}
            {github && github === typeof String && (
                <ProjectLink
                    link={github}
                    Icon={Github}
                    label={'GitHub'}
                />
            )}
            {github && Array.isArray(github) && (
                <>
                    {github.map(link =>
                        <ProjectLink
                            key={link}
                            link={link}
                            Icon={Github}
                            label={
                                link.includes('client') ?
                                    'Client' : 'Server'
                            }
                        />
                    )}
                </>
            )}
        </div>
    )
}

export default ProjectLinks