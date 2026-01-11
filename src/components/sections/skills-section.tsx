import Section from '@/components/section'
import SkillCategory from '@/components/skills/skill-category'

import { skillCategories } from '@/constants/skillCategories'

const SkillsSection = () => (
    <Section
        id={'skills'}
        headline={'Technical Skills'}
        description={'Expertise across the full technology stack'}
    >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category) => (
                <SkillCategory category={category}/>
            ))}
        </div>
    </Section>
)

export default SkillsSection