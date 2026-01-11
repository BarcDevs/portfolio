import { 
    Github,
    Linkedin, 
    Mail, 
    Phone 
} from 'lucide-react'

import HeroLink from '@/components/hero/hero-link'

import { personalData } from '@/config/personal-data'

const HeroLinks = ({}) => (
    <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
        <HeroLink
            Icon={Phone}
            href={`tel:${personalData.phone}`}
            title={personalData.phone}
        />
        <HeroLink
            Icon={Mail}
            href={`mailto:${personalData.email}`}
            title={personalData.email}
        />
        <HeroLink
            Icon={Linkedin}
            href={personalData.links.linkedin}
            target={'_blank'}
            rel={'noopener noreferrer'}
            title={'LinkedIn'}
        />
        <HeroLink
            Icon={Github}
            href={personalData.links.github}
            target={'_blank'}
            rel={'noopener noreferrer'}
            title={'GitHub'}
        />
    </div>
)

export default HeroLinks