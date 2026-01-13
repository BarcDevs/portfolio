import { FC } from 'react'

type KeyFeaturesProps = {
    features: string[]
}

const KeyFeatures: FC<KeyFeaturesProps> = ({ features }) => (
    <div>
        <h4 className="font-semibold text-sm mb-2">
            Key Features:
        </h4>
        <ul className="space-y-1">
            {features.map((feature) => (
                <li
                    key={feature}
                    className="text-xs text-muted-foreground flex gap-2"
                >
                    <span className="text-primary">•</span>
                    <span>{feature}</span>
                </li>
            ))}
        </ul>
    </div>
)

export default KeyFeatures