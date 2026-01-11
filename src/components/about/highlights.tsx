import { Card, CardContent } from '@/components/ui/card'

import { highlights } from '@/constants/hightights'

const Highlights = ({}) => (
    <div className="grid sm:grid-cols-2 gap-4">
        {highlights.map((highlight) => (
            <Card
                key={highlight.title.slice(0, 5)}
                className="group hover:shadow-lg transition-shadow"
            >
                <CardContent className="p-6 space-y-3">
                    <highlight.icon className="h-10 w-10 text-primary group-hover:scale-110 transition-transform"/>
                    <h4 className="font-semibold text-balance">
                        {highlight.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                        {highlight.description}
                    </p>
                </CardContent>
            </Card>
        ))}
    </div>
)

export default Highlights