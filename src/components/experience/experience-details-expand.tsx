import { FC } from 'react'

import { ChevronDown, ChevronUp } from 'lucide-react'

import { Button } from '@/components/ui/button'

type ExperienceDetailsExpandProps = {
    isExpanded: boolean
    toggleExpand: () => void
}

const ExperienceDetailsExpand: FC<ExperienceDetailsExpandProps> = ({
    isExpanded,
    toggleExpand
}) => (
    <Button
        variant="ghost"
        size="sm"
        onClick={toggleExpand}
        className="gap-2"
    >
        <ChevronUp className="h-4 w-4"/>
        {isExpanded ?
            <ChevronUp className="h-4 w-4"/> :
            <ChevronDown className="h-4 w-4"/>
        }
        {isExpanded ?
            'Hide Details' :
            'View Details'
        }
    </Button>
)

export default ExperienceDetailsExpand