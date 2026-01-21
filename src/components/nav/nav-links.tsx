import Link from 'next/link'

import { navLinks } from '@/constants/nav-links'

const NavLinks = ({}) => (
    <div className="hidden md:flex items-center gap-6">
        {Object.values(navLinks)
            .map((link) => (
                <Link
                    key={link.name}
                    href={link.href}
                    className="text-sm hover:text-primary transition-colors"
                >
                    {link.name}
                </Link>
            ))}
    </div>
)

export default NavLinks