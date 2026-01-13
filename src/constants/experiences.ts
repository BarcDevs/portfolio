import { Experience } from '@/types/experience'

export const experiences: Experience[] = [
    {
        company: 'Workonit.ai',
        role: 'Full-Stack Developer',
        period: '2024-2025',
        brief: 'Built and enhanced 3 AI-driven projects with advanced job platform features',
        achievements: [
            'Developed AI-powered job platform features ' +
            '(job description generation, smart tagging, ' +
            'chatbot search, CV optimization)',
            'Refactored AI-generated and legacy code for ' +
            'improved architecture, security, and scalability',
            'Integrated customizable Unity-based games for enhanced engagement'
        ],
        techStack: ['React', 'Node.js', 'MongoDB', 'AI Integration', 'Unity integration'],
        details: [
            'Led full-stack development across multiple AI-driven projects',
            'Implemented secure authentication and authorization systems',
            'Optimized database queries and API performance',
            'Collaborated with cross-functional teams to deliver features'
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
    },
    {
        company: 'HealEase',
        role: 'Full-Stack Developer',
        period: '2024-In Development',
        brief: 'AI-powered rehabilitation platform for severely injured patients',
        achievements: [
            'Independently managed full-stack development to functional POC',
            'Designed AI-driven features for patient rehabilitation workflows',
            'Built scalable architecture for healthcare compliance'
        ],
        techStack: ['React', 'TypeScript', 'Node.js', 'AI integration', 'PostgresQL'],
        details: [
            'Leading end-to-end development of healthcare platform',
            'Implementing AI-driven patient assessment tools',
            'Ensuring HIPAA compliance and data security',
            'Building scalable microservices architecture'
        ]
    }
]
