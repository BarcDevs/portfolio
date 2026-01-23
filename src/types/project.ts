export type ProjectLink = {
    live?: string
    github?: string | string[]
    portfolio?: string
}

export type Project = {
    name: string
    tagline: string
    description: string
    features: string[]
    techStack: string[]
    timeline: string
    links: ProjectLink
    status?: string
}