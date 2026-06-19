import { Code2, Database } from 'lucide-react'

import { render, screen } from '@testing-library/react'

import { SkillCategory as SkillCategoryType } from '@/types/skills'

import SkillCategory from './skill-category'

const mockSkillCategory: SkillCategoryType = {
  title: 'Frontend',
  icon: Code2,
  skills: ['React', 'TypeScript', 'Next.js'],
}

describe('SkillCategory', () => {
  it('renders category title', () => {
    render(<SkillCategory category={mockSkillCategory} />)
    expect(screen.getByText('Frontend')).toBeInTheDocument()
  })

  it('renders all skills from category', () => {
    render(<SkillCategory category={mockSkillCategory} />)

    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
    expect(screen.getByText('Next.js')).toBeInTheDocument()
  })

  it('renders correct number of skills', () => {
    render(<SkillCategory category={mockSkillCategory} />)
    const skillElements = screen.getAllByText(/React|TypeScript|Next.js/)

    expect(skillElements).toHaveLength(3)
  })

  it('renders icon component', () => {
    const { container } = render(<SkillCategory category={mockSkillCategory} />)
    const svg = container.querySelector('svg')

    expect(svg).toBeInTheDocument()
  })

  it('applies card styling', () => {
    const { container } = render(<SkillCategory category={mockSkillCategory} />)
    const card = container.querySelector('[data-slot="card"]')

    expect(card).toBeInTheDocument()
    expect(card).toHaveClass('bg-card', 'rounded-xl', 'border')
  })

  it('applies hover styling', () => {
    const { container } = render(<SkillCategory category={mockSkillCategory} />)
    const card = container.querySelector('[data-slot="card"]')

    expect(card).toHaveClass(
      'group',
      'hover:shadow-lg',
      'hover:border-primary/50',
      'transition-all'
    )
  })

  it('renders CardTitle with icon and title', () => {
    const { container } = render(<SkillCategory category={mockSkillCategory} />)
    const cardTitle = container.querySelector('[data-slot="card-title"]')

    expect(cardTitle).toBeInTheDocument()
    expect(cardTitle).toHaveClass('flex', 'items-center', 'gap-3')
  })

  it('renders CardContent with flex layout', () => {
    const { container } = render(<SkillCategory category={mockSkillCategory} />)
    const cardContent = container.querySelector('[data-slot="card-content"]')

    expect(cardContent).toBeInTheDocument()
    expect(cardContent).toHaveClass('px-6')
  })

  it('renders skills in flex wrap container', () => {
    const { container } = render(<SkillCategory category={mockSkillCategory} />)
    const flexContainer = container.querySelector('.flex.flex-wrap')

    expect(flexContainer).toBeInTheDocument()
  })

  it('handles category with different icon', () => {
    const categoryWithDifferentIcon: SkillCategoryType = {
      title: 'Backend',
      icon: Database,
      skills: ['MongoDB', 'SQL'],
    }

    render(
      <SkillCategory category={categoryWithDifferentIcon} />
    )
    expect(screen.getByText('Backend')).toBeInTheDocument()
    expect(screen.getByText('MongoDB')).toBeInTheDocument()
    expect(screen.getByText('SQL')).toBeInTheDocument()
  })

  it('renders with single skill', () => {
    const singleSkillCategory: SkillCategoryType = {
      title: 'Single',
      icon: Code2,
      skills: ['OnlyOne'],
    }

    render(<SkillCategory category={singleSkillCategory} />)
    expect(screen.getByText('OnlyOne')).toBeInTheDocument()
  })

  it('renders with many skills', () => {
    const manySkillsCategory: SkillCategoryType = {
      title: 'Many',
      icon: Code2,
      skills: [
        'Skill1',
        'Skill2',
        'Skill3',
        'Skill4',
        'Skill5',
        'Skill6',
        'Skill7',
        'Skill8',
      ],
    }

    render(<SkillCategory category={manySkillsCategory} />)
    expect(screen.getByText('Skill1')).toBeInTheDocument()
    expect(screen.getByText('Skill8')).toBeInTheDocument()
  })

  it('uses skill name as key for rendering', () => {
    const categoryWithDuplicates: SkillCategoryType = {
      title: 'Duplicates',
      icon: Code2,
      skills: ['React', 'React', 'Vue'],
    }

    const { container } = render(
      <SkillCategory category={categoryWithDuplicates} />
    )
    const skills = container.querySelectorAll('.flex.flex-wrap > span')

    expect(skills.length).toBe(3)
  })
})
