import { SkillCategory } from '@/types/skills'

export const skillCategories: SkillCategory[] = [
    {
        title: 'Frontend',
        icon: '🎨',
        skills: [
            { name: 'React', level: 'Expert' },
            { name: 'TypeScript', level: 'Expert' },
            { name: 'Next.js', level: 'Advanced' },
            { name: 'Tailwind CSS', level: 'Expert' },
            { name: 'Shadcn UI', level: 'Advanced' }
        ]
    },
    {
        title: 'Backend',
        icon: '⚙️',
        skills: [
            { name: 'Node.js', level: 'Expert' },
            { name: 'NestJS', level: 'Intermediate' },
            { name: 'RESTful APIs', level: 'Advanced' },
            { name: 'Authentication & Security', level: 'Advanced' }
        ]
    },
    {
        title: 'Databases',
        icon: '💾',
        skills: [
            { name: 'MongoDB', level: 'Advanced' },
            { name: 'SQL', level: 'Intermediate' },
            { name: 'Database Design', level: 'Advanced' }
        ]
    },
    {
        title: 'Tools & Platforms',
        icon: '🛠️',
        skills: [
            { name: 'Git & GitHub', level: 'Advanced' },
            { name: 'WebStorm', level: 'Expert' },
            { name: 'Vercel', level: 'Advanced' },
            { name: 'Stripe Integration', level: 'Advanced' },
            { name: 'Unity Integration', level: 'Intermediate' }
        ]
    },
    {
        title: 'Specializations',
        icon: '🚀',
        skills: [
            { name: 'AI-Assisted Development', level: 'Advanced' },
            { name: 'Code Refactoring', level: 'Expert' },
            { name: 'System Architecture', level: 'Advanced' },
            { name: 'Scalability & Performance', level: 'Advanced' }
        ]
    }
]
