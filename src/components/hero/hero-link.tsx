import { FC } from 'react'

import Link from 'next/link'

import { type LucideIcon } from 'lucide-react'

type HeroLinkProps = {
    Icon: LucideIcon
    href: string
    target?: string
    rel?: string
    title: string
}

const HeroLink: FC<HeroLinkProps> = ({
    Icon,
    href,
    target,
    rel,
    title
}) => (
    <Link
        href={href}
        target={target}
        rel={rel}
        className={'flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors'}
    >
        <Icon className={'h-4 w-4'}/>
        {title}
    </Link>
)

export default HeroLink