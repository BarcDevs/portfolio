import { FC } from 'react'

type SkillProps = {
    skill: string
}

const Skill: FC<SkillProps> = ({ skill }) => (
    <span className="px-3 py-1.5 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">
      {skill}
    </span>
)

export default Skill