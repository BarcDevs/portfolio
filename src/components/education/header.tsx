import { FC } from 'react'

import { Calendar, GraduationCap } from 'lucide-react'

import { CardHeader, CardTitle } from '@/components/ui/card'

type HeaderProps = {
    institution: string
    degree: string
    period: string
}

const Header: FC<HeaderProps> = ({
    institution,
    degree,
    period
}) => (
    <CardHeader>
        <div className="flex items-start gap-4">
            <GraduationCap className="h-8 w-8 text-primary shrink-0"/>
            <div className="flex-1">
                <CardTitle className="text-xl mb-2">
                    {institution}
                </CardTitle>
                <p className="text-base font-semibold text-foreground">
                    {degree}
                </p>
                <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4"/>
                    {period}
                </div>
            </div>
        </div>
    </CardHeader>
)

export default Header