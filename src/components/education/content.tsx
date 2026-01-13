import { FC } from 'react'

import { CardContent } from '@/components/ui/card'

type ContentProps = {
    focus: string
    notableProject?: string
}

const Content: FC<ContentProps> = ({
    focus,
    notableProject
}) => (
    <CardContent className="space-y-3">
        <div>
            <p className="text-sm font-semibold mb-1">
                Focus Areas:
            </p>
            <p className="text-sm text-muted-foreground">
                {focus}
            </p>
        </div>
        {notableProject && (
            <div>
                <p className="text-sm font-semibold mb-1">
                    Notable Project:
                </p>
                <p className="text-sm text-muted-foreground">
                    {notableProject}
                </p>
            </div>
        )}
    </CardContent>
)

export default Content