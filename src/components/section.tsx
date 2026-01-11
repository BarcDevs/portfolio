import { FC, ReactNode } from 'react'

type SectionProps = {
    headline: string
    description: string
    bgMuted?: boolean
    id: string
    children: ReactNode
}

const Section: FC<SectionProps> = ({
    bgMuted = false,
    headline,
    description,
    id,
    children
}) => (
    <section
        id={id}
        className={`py-24 px-4 ${bgMuted && 'bg-muted/30'}`}
    >
        <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
                    {headline}
                </h2>
                <p className="text-muted-foreground text-lg">
                    {description}
                </p>
            </div>

            {children}
        </div>
    </section>
)

export default Section