import SkillCard from "./SkillCard"
import {Skill} from '@/types'

type SkillsProps = {
    skills: Skill[]
}

const Skills = ({skills} : SkillsProps) => (
    <div className="flex flex-col sm:flex-row align-center justify-center max-w-2xl mx-auto mt-8">
        {skills.map((skill) => {
            return (
                <SkillCard key={skill.skillName} skill={skill}/>
            )
        })}
    </div>
)

export default Skills
