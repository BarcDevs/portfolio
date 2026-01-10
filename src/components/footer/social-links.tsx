import Link from 'next/link'

import { Github, Linkedin } from 'lucide-react'

import { personalData } from '@/config/personal-data'

const SocialLinks = ({}) => (
    <div className="flex items-center gap-4">
        <Link
            href={personalData.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
        >
            <Linkedin className="h-5 w-5"/>
        </Link>
        <Link
            href={personalData.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
        >
            <Github className="h-5 w-5"/>
        </Link>
    </div>
)

export default SocialLinks