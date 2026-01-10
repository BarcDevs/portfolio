import NavLinks from '@/components/footer/footer-nav-links'
import Rights from '@/components/footer/rights'
import SocialLinks from '@/components/footer/social-links'

const Footer = ({}) => (
    <footer className="bg-muted/50 border-t border-border py-12">
        <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <SocialLinks/>

                <NavLinks/>

                <Rights/>
            </div>
        </div>
    </footer>
)

export default Footer