import { Download } from 'lucide-react'

import { Button } from '@/components/ui/button'

const DownloadCvButton = ({}) => (
    <Button
        size="lg"
        variant="outline"
        className="gap-2 bg-transparent"
    >
        {/*todo - download cv*/}
        <Download className="h-4 w-4"/>
        Download CV
    </Button>
)

export default DownloadCvButton