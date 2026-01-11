import { bio } from '@/constants/bio'

const Bio = ({}) => (
    <>
        <h3 className="text-2xl font-semibold mb-4">
            Professional Bio
        </h3>
        {bio.map(p => (
            <p
                key={p.slice(0, 5)}
                className="text-muted-foreground leading-relaxed">
                {p}
            </p>
        ))}
    </>
)

export default Bio