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
        links: {}
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
        techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
        timeline: '2023-2024',
        links: {
            github: [
                'https://github.com/BarcDevs/TechTreasure--client',
                'https://github.com/BarcDevs/TechTreasure--server'
            ]
        }
    },
    {
        name: 'HealEase',
        tagline: 'AI-Powered Rehabilitation Platform',
        description:
            'Healthcare platform designed for severely injured patients ' +
            'with AI-driven rehabilitation workflows. Features ' +
            'scalable architecture built for healthcare compliance and patient-centered design.',
        features: [
            'AI-driven patient assessment and recommendations',
            'Rehabilitation progress tracking',
            'Patient and provider dashboards'
        ],
        techStack: ['React', 'TypeScript', 'Node.js', 'PostgerSQL', 'AI/ML', 'TailwindCSS'],
        timeline: '2024-Ongoing',
        links: {
            github: [
                'https://github.com/BarcDevs/HealEase--client',
                'https://github.com/BarcDevs/HealEase--server'
            ]
        },
        status: 'In Development'
    }
]
