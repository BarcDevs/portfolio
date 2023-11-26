export type Skill = {
    skillName: string
    skillIcon: React.ReactNode
}

export type Project = {
    title: string
    description: string
    tags: string[]
    link: string,
    github?: string
}

export type Social = {
    email: string
    github: string
    dribble?: string
    twitter?: string
    linkedin?: string
}
