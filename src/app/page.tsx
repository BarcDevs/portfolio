'use client'

import Footer from '@/components/layout/footer'
import { ScrollToTop } from '@/components/layout/scroll-to-top'
import Navbar from '@/components/nav/navbar'
import AboutSection from '@/components/sections/about-section'
import EducationSection from '@/components/sections/education-section'
import ExperienceSection from '@/components/sections/experience-section'
import HeroSection from '@/components/sections/hero-section'
import ProjectsSection from '@/components/sections/projects-section'
import SkillsSection from '@/components/sections/skills-section'

import { useScroll } from '@/hooks/use-scroll'

const Home = () => {
    const { showBackToTop } = useScroll()

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navbar/>

            <main>
                <HeroSection/>
                <AboutSection/>
                <SkillsSection/>
                <ExperienceSection/>
                <ProjectsSection/>
                <EducationSection/>
            </main>

            <Footer/>

            <ScrollToTop show={showBackToTop}/>
        </div>
    )
}

export default Home