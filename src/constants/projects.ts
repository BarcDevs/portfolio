import { Project } from '@/types/project'

export const projects: Project[] = [
    {
        name: 'Drushim Avodot',
        tagline: 'AI-Powered Job Platform',
        description:
            'Comprehensive job platform with AI-driven features ' +
            'including job description generation, smart tagging, ' +
            'chatbot search, and CV optimization',
        features: [
            'AI-powered job description generation and optimization',
            'Intelligent chatbot for job search and recommendations',
            'CV analysis and optimization tools'
        ],
        techStack: ['React', 'Node.js', 'AI/ML', 'MongoDB'],
        timeline: '2024-2025',
        links: {
            live: 'https://dev.drushimavodot.co.il'
        }
    },
    {
        name: 'Pulse',
        tagline: 'AI-Powered Recovery Support Platform',
        description:
            'Full-stack healthcare platform helping patients stay engaged ' +
            'during post-clinical recovery, driving daily patient engagement ' +
            'through structured check-ins, AI-generated insights, and a ' +
            'peer support community.',
        features: [
            'Daily mood and pain tracking with progress visualization to boost patient engagement',
            'AI-generated insights (Google Gemini) for early detection of declining patient engagement',
            'Community forum driving peer support and retention through posts, replies, and voting',
            'Email/password and Google OAuth authentication with CSRF protection'
        ],
        techStack: ['Next.js', 'React', 'TypeScript', 'TanStack Query', 'TailwindCSS', 'shadcn/ui', 'Node.js', 'Express', 'PostgreSQL', 'Prisma', 'Google Gemini API'],
        timeline: '2024-Ongoing',
        links: {
            live: 'https://pulse-rehab.vercel.app',
            github: [
                'https://github.com/BarcDevs/Pulse--client',
                'https://github.com/BarcDevs/Pulse--server'
            ]
        },
        status: 'In Development'
    },
    {
        name: 'TechTreasure',
        tagline: 'Full-Stack E-Commerce Platform',
        description:
            'Production-ready e-commerce platform built from concept ' +
            'to deployment. Features secure payment processing ' +
            'with Stripe, multilingual support for international ' +
            'users, and responsive design for optimal shopping experience.',
        features: [
            'Secure Stripe payment integration',
            'Multilingual support (i18n)',
            'Responsive shopping cart and checkout',
            'Product catalog with search and filtering'
        ],
        techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'REST API'],
        timeline: '2023-2024',
        links: {
            github: [
                'https://github.com/BarcDevs/TechTreasure--client',
                'https://github.com/BarcDevs/TechTreasure--server'
            ]
        }
    }
]
