import Link from 'next/link'

import { navLinks } from '@/constants/nav-links'

const NavLinks = ({}) => (
    <nav className="flex items-center gap-6 text-sm">
        {Object.values(navLinks)
            .map((link) => (
                <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                >
                    {link.name}
                </Link>
            ))}
    </nav>
)

export default NavLinks