import Link from 'next/link'

import { ChevronDown } from 'lucide-react'

import Animation from '@/components/hero/animation'
import Background from '@/components/hero/background'
import DownloadCvButton from '@/components/hero/download-cv-button'
import HeroLinks from '@/components/hero/hero-links'
import { Button } from '@/components/ui/button'

import { personalData } from '@/config/personal-data'

const HeroSection = () => (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-12 px-4 overflow-hidden">
        <Background/>

        <div className="container mx-auto text-center max-w-4xl">
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance">
                    {personalData.name}
                </h1>
                <p className="text-2xl md:text-3xl text-muted-foreground font-semibold">
                    {personalData.profession}
                </p>

                <Animation/>

                <HeroLinks/>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
                    <Button size="lg" asChild>
                        <Link href="#projects">
                            View Projects
                        </Link>
                    </Button>
                    <DownloadCvButton/>
                </div>
            </div>

            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
                <ChevronDown className="h-6 w-6 text-muted-foreground"/>
            </div>
        </div>
    </section>
)

export default HeroSection