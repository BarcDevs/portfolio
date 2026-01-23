import {
    Code2,
    Database,
    Server,
    Sparkles,
    Wrench
} from 'lucide-react'

import { SkillCategory } from '@/types/skills'

export const skillCategories: SkillCategory[] = [
    {
        title: 'Frontend',
        icon: Code2,
        skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS']
    },
    {
        title: 'Backend',
        icon: Server,
        skills: ['Node.js', 'REST API', 'Authentication & Security']
    },
    {
        title: 'Databases',
        icon: Database,
        skills: ['MongoDB', 'SQL', 'Database Design']
    },
    {
        title: 'Tools & Platforms',
        icon: Wrench,
        skills: ['Git & GitHub', 'Stripe Integration', 'Unity Integration']
    },
    {
        title: 'Specializations',
        icon: Sparkles,
        skills: ['AI-Assisted Development', 'Code Refactoring', 'System Architecture', 'Scalability & Performance']
    }
]