import Link from 'next/link'

import Bio from '@/components/about/bio'
import Highlights from '@/components/about/highlights'
import Section from '@/components/section'
import { Button } from '@/components/ui/button'

const AboutSection = () => (
    <Section
        id={'about'}
        bgMuted
        headline={'About Me'}
        description={'Full-stack developer building scalable solutions'}
    >
        <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-4">
                <Bio/>

                <Button
                    size="lg"
                    asChild
                    className="mt-6"
                >
                    <Link href="#contact">
                        Contact Me
                    </Link>
                </Button>
            </div>

            <Highlights/>
        </div>
    </Section>
)

export default AboutSection