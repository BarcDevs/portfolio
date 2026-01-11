export type Skill = {
    name: string
    level: 'Expert' | 'Advanced' | 'Intermediate'
}

export type SkillCategory = {
    title: string
    icon: string
    skills: Skill[]
}