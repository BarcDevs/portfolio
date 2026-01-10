import { Download } from 'lucide-react'

import { Button } from '@/components/ui/button'

const DownloadCvButton = ({}) => (
    <Button size="sm" className="gap-2">
        <Download className="h-4 w-4"/>
        <span className="hidden sm:inline">
            {/*todo - download cv*/}
            Download CV
        </span>
    </Button>
)

export default DownloadCvButton