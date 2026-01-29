import { Metadata } from 'next'

export const meta: Metadata = {
    title: 'Bar Cohen - Full-Stack Software Engineer | React, TypeScript, Node.js',
    description:
        'Full-Stack Software Engineer with 2+ years experience ' +
        'specializing in React, TypeScript, Node.js, and the MERN stack. ' +
        'Building scalable web applications with AI integration and clean architecture.',
    keywords: [
        'Bar Cohen',
        'Full-Stack Developer',
        'Software Engineer',
        'React Developer',
        'Tailwind CSS',
        'TypeScript',
        'Node.js',
        'REST API',
        'MongoDB',
        'Database Design',
        'MERN Stack',
        'Next.js',
        'AI Integration',
        'Web Development',
        'System Architecture'
    ],
    authors: [{
        name: 'Bar Cohen'
    }],
openGraph: {
    title: 'Bar Cohen - Full-Stack Software Engineer',
    description:
      'Full-Stack Software Engineer with 2+ years experience ' +
        'specializing in React, TypeScript, Node.js, and the MERN stack. ' +
        'Building scalable web applications with AI integration and clean architecture.',
    url: 'https://bardevs-portfolio.vercel.app/',
    siteName: 'Bar Cohen Portfolio',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Bar Cohen - Full-Stack Engineer | AI-Powered Web Platforms'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bar Cohen - Full-Stack Software Engineer',
    description:
      'Full-Stack Software Engineer specializing in React, TypeScript, Node.js, and AI-powered applications.',
    images: ['/og-image.png']
  }
}