import Link from 'next/link'

import Bio from '@/components/about/bio'
import Highlights from '@/components/about/highlights'
import { Button } from '@/components/ui/button'

const AboutSection = () => (
    <section
        id="about"
        className="py-24 px-4 bg-muted/30"
    >
        <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
                    About Me
                </h2>
                <p className="text-muted-foreground text-lg">
                    Full-stack developer building scalable solutions
                </p>
            </div>

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
        </div>
    </section>
)

export default AboutSection