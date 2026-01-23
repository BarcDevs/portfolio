import { FC } from 'react'

type AchievementsProps = {
    achievements: string[]
}

const Achievements: FC<AchievementsProps> = ({
    achievements
}) => (
    <div>
        <h4 className="font-semibold mb-2">
            Key Achievements:
        </h4>
        <ul className="space-y-1">
            {achievements.map((achievement) => (
                <li
                    key={achievement.slice(0, 10)}
                    className="text-sm text-muted-foreground flex gap-2"
                >
                    <span className="text-primary">•</span>
                    <span>
                        {achievement}
                    </span>
                </li>
            ))}
        </ul>
    </div>

)

export default Achievements