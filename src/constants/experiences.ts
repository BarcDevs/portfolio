import { Experience } from '@/types/experience'

export const experiences: Experience[] = [
    {
        company: 'Workonit.ai',
        role: 'Full-Stack Developer',
        period: '2024-2025',
        brief: 'Drove growth of an AI-driven recruitment platform through full-stack feature delivery and system-level improvements',
        achievements: [
            'Built AI-powered recruitment features ' +
            '(automated job description generation, intelligent tagging, ' +
            'chatbot-assisted job search, AI-based CV optimization)',
            'Expanded job posting reach by integrating distribution to 22 targeted Facebook groups for automated, AI-assisted posting',
            'Refactored AI-generated and legacy code, improving system architecture, security, scalability, and long-term maintainability',
            'Integrated customizable Unity-based games for enhanced engagement'
        ],
        techStack: ['React', 'Node.js', 'MongoDB', 'AI Integration', 'Unity integration'],
        details: [
            'Contributed to backend and frontend feature implementation across an AI-driven recruitment platform',
            'Implemented secure authentication and authorization systems',
            'Optimized database queries and API performance',
            'Collaborated with cross-functional teams to deliver features'
        ]
    },
    {
        company: 'Pulse',
        role: 'Full-Stack Developer',
        period: '2024-In Development',
        brief: 'AI-powered recovery platform driving patient engagement through daily check-ins and community support',
        achievements: [
            'Independently shipped and deployed a full-stack healthcare platform to production',
            'Drove patient engagement through a daily check-in system with mood/pain tracking and progress visualization',
            'Grew peer support through a community forum with posts, replies, voting, and tag-based filtering',
            'Strengthened account security with dual authentication (email/password and Google OAuth) and CSRF protection'
        ],
        techStack: ['Next.js', 'React', 'TypeScript', 'TanStack Query', 'Node.js', 'Express', 'PostgreSQL', 'Prisma', 'AI integration'],
        details: [
            'Owning end-to-end development of a healthcare platform from architecture to deployment',
            'Delivering AI-generated insights (Google Gemini) for early detection of declining patient engagement',
            'Hardening session security via HTTP-only JWT cookies and CSRF token validation',
            'Architecting with Next.js App Router and TanStack Query for scalable state management'
        ]
    },
    {
        company: 'TechTreasure',
        role: 'Full-Stack Developer',
        period: '2023-2024',
        brief: 'Full-stack e-commerce platform from concept to production',
        achievements: [
            'Developed complete platform from concept to production-ready application',
            'Integrated Stripe payment processing',
            'Implemented multilingual support for international users'
        ],
        techStack: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        details: [
            'Designed and implemented full e-commerce architecture',
            'Built secure payment processing with Stripe integration',
            'Created responsive UI with excellent user experience',
            'Implemented internationalization for multiple languages'
        ]
    }
]
