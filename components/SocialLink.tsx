"use client"
import Link from 'next/link'

type SocialLinkProps = {
    name: string
    link: string
    color: string
    Icon: React.ElementType
}

const SocialLink = ({name, link,color, Icon}: SocialLinkProps) => {
    return (
        <Link
            className={`text-xl m-1 p-1 sm:m-2 sm:p-2 text-${color} hover:bg-${color} rounded-full hover:text-white transition-colors duration-300`}
            href={link}
        >
            <Icon/>
            <span className="sr-only">{name}</span>
        </Link>
    )
}

export default SocialLink
