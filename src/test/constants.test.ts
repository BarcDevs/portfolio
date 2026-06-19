import { Education } from '@/types/education'
import { Experience } from '@/types/experience'
import { Project } from '@/types/project'
import { SkillCategory } from '@/types/skills'

import { bio } from '@/constants/bio'
import { education } from '@/constants/education'
import { experiences } from '@/constants/experiences'
import { projects } from '@/constants/projects'
import { skills } from '@/constants/skills'

describe('Data Constants - Structure Validation', () => {
  describe('skills constant', () => {
    it('is an array with at least one category', () => {
      expect(Array.isArray(skills)).toBe(true)
      expect(skills.length).toBeGreaterThan(0)
    })

    it('all items have required SkillCategory properties', () => {
      skills.forEach((category: SkillCategory) => {
        expect(category).toHaveProperty('title')
        expect(category).toHaveProperty('icon')
        expect(category).toHaveProperty('skills')
      })
    })

    it('title is non-empty string', () => {
      skills.forEach((category: SkillCategory) => {
        expect(typeof category.title).toBe('string')
        expect(category.title.length).toBeGreaterThan(0)
      })
    })

    it('icon is a valid React component (LucideIcon)', () => {
      skills.forEach((category: SkillCategory) => {
        expect(['function', 'object']).toContain(typeof category.icon)
        expect(category.icon).toBeTruthy()
      })
    })

    it('skills is non-empty array of non-empty strings', () => {
      skills.forEach((category: SkillCategory) => {
        expect(Array.isArray(category.skills)).toBe(true)
        expect(category.skills.length).toBeGreaterThan(0)

        category.skills.forEach(skill => {
          expect(typeof skill).toBe('string')
          expect(skill.length).toBeGreaterThan(0)
        })
      })
    })

    it('no duplicate skill categories', () => {
      const titles = skills.map(cat => cat.title)
      const uniqueTitles = new Set(titles)
      expect(uniqueTitles.size).toBe(titles.length)
    })
  })

  describe('projects constant', () => {
    it('is an array with at least one project', () => {
      expect(Array.isArray(projects)).toBe(true)
      expect(projects.length).toBeGreaterThan(0)
    })

    it('all items have required Project properties', () => {
      projects.forEach((project: Project) => {
        expect(project).toHaveProperty('name')
        expect(project).toHaveProperty('tagline')
        expect(project).toHaveProperty('description')
        expect(project).toHaveProperty('features')
        expect(project).toHaveProperty('techStack')
        expect(project).toHaveProperty('timeline')
        expect(project).toHaveProperty('links')
      })
    })

    it('all required string fields are non-empty', () => {
      projects.forEach((project: Project) => {
        expect(typeof project.name).toBe('string')
        expect(project.name.length).toBeGreaterThan(0)

        expect(typeof project.tagline).toBe('string')
        expect(project.tagline.length).toBeGreaterThan(0)

        expect(typeof project.description).toBe('string')
        expect(project.description.length).toBeGreaterThan(0)

        expect(typeof project.timeline).toBe('string')
        expect(project.timeline.length).toBeGreaterThan(0)
      })
    })

    it('features is non-empty array of non-empty strings', () => {
      projects.forEach((project: Project) => {
        expect(Array.isArray(project.features)).toBe(true)
        expect(project.features.length).toBeGreaterThan(0)

        project.features.forEach(feature => {
          expect(typeof feature).toBe('string')
          expect(feature.length).toBeGreaterThan(0)
        })
      })
    })

    it('techStack is non-empty array of non-empty strings', () => {
      projects.forEach((project: Project) => {
        expect(Array.isArray(project.techStack)).toBe(true)
        expect(project.techStack.length).toBeGreaterThan(0)

        project.techStack.forEach(tech => {
          expect(typeof tech).toBe('string')
          expect(tech.length).toBeGreaterThan(0)
        })
      })
    })

    it('links object has at least one valid link', () => {
      projects.forEach((project: Project) => {
        const hasLink =
          project.links.live ||
          project.links.github ||
          project.links.portfolio

        expect(hasLink).toBeTruthy()
      })
    })

    it('github links are string or array of strings', () => {
      projects.forEach((project: Project) => {
        if (project.links.github !== undefined) {
          const isValid =
            typeof project.links.github === 'string' ||
            (Array.isArray(project.links.github) &&
              project.links.github.every(link => typeof link === 'string'))

          expect(isValid).toBe(true)
        }
      })
    })

    it('all URL links are valid strings when present', () => {
      projects.forEach((project: Project) => {
        if (project.links.live) {
          expect(typeof project.links.live).toBe('string')
          expect(project.links.live.length).toBeGreaterThan(0)
        }

        if (project.links.portfolio) {
          expect(typeof project.links.portfolio).toBe('string')
          expect(project.links.portfolio.length).toBeGreaterThan(0)
        }
      })
    })

    it('no duplicate project names', () => {
      const names = projects.map(p => p.name)
      const uniqueNames = new Set(names)
      expect(uniqueNames.size).toBe(names.length)
    })
  })

  describe('experiences constant', () => {
    it('is an array with at least one experience', () => {
      expect(Array.isArray(experiences)).toBe(true)
      expect(experiences.length).toBeGreaterThan(0)
    })

    it('all items have required Experience properties', () => {
      experiences.forEach((exp: Experience) => {
        expect(exp).toHaveProperty('company')
        expect(exp).toHaveProperty('role')
        expect(exp).toHaveProperty('period')
        expect(exp).toHaveProperty('brief')
        expect(exp).toHaveProperty('achievements')
        expect(exp).toHaveProperty('techStack')
      })
    })

    it('all required string fields are non-empty', () => {
      experiences.forEach((exp: Experience) => {
        expect(typeof exp.company).toBe('string')
        expect(exp.company.length).toBeGreaterThan(0)

        expect(typeof exp.role).toBe('string')
        expect(exp.role.length).toBeGreaterThan(0)

        expect(typeof exp.period).toBe('string')
        expect(exp.period.length).toBeGreaterThan(0)

        expect(typeof exp.brief).toBe('string')
        expect(exp.brief.length).toBeGreaterThan(0)
      })
    })

    it('achievements is non-empty array of non-empty strings', () => {
      experiences.forEach((exp: Experience) => {
        expect(Array.isArray(exp.achievements)).toBe(true)
        expect(exp.achievements.length).toBeGreaterThan(0)

        exp.achievements.forEach(achievement => {
          expect(typeof achievement).toBe('string')
          expect(achievement.length).toBeGreaterThan(0)
        })
      })
    })

    it('techStack is non-empty array of non-empty strings', () => {
      experiences.forEach((exp: Experience) => {
        expect(Array.isArray(exp.techStack)).toBe(true)
        expect(exp.techStack.length).toBeGreaterThan(0)

        exp.techStack.forEach(tech => {
          expect(typeof tech).toBe('string')
          expect(tech.length).toBeGreaterThan(0)
        })
      })
    })

    it('details is optional but non-empty when present', () => {
      experiences.forEach((exp: Experience) => {
        if (exp.details !== undefined) {
          expect(Array.isArray(exp.details)).toBe(true)
          exp.details.forEach(detail => {
            expect(typeof detail).toBe('string')
            expect(detail.length).toBeGreaterThan(0)
          })
        }
      })
    })
  })

  describe('education constant', () => {
    it('is an array with at least one education', () => {
      expect(Array.isArray(education)).toBe(true)
      expect(education.length).toBeGreaterThan(0)
    })

    it('all items have required Education properties', () => {
      education.forEach((edu: Education) => {
        expect(edu).toHaveProperty('institution')
        expect(edu).toHaveProperty('degree')
        expect(edu).toHaveProperty('period')
        expect(edu).toHaveProperty('focus')
      })
    })

    it('all required string fields are non-empty', () => {
      education.forEach((edu: Education) => {
        expect(typeof edu.institution).toBe('string')
        expect(edu.institution.length).toBeGreaterThan(0)

        expect(typeof edu.degree).toBe('string')
        expect(edu.degree.length).toBeGreaterThan(0)

        expect(typeof edu.period).toBe('string')
        expect(edu.period.length).toBeGreaterThan(0)

        expect(typeof edu.focus).toBe('string')
        expect(edu.focus.length).toBeGreaterThan(0)
      })
    })

    it('notableProject is optional but non-empty when present', () => {
      education.forEach((edu: Education) => {
        if (edu.notableProject !== undefined) {
          expect(typeof edu.notableProject).toBe('string')
          expect(edu.notableProject.length).toBeGreaterThan(0)
        }
      })
    })

    it('no duplicate institutions', () => {
      const institutions = education.map(e => e.institution)
      const uniqueInstitutions = new Set(institutions)
      expect(uniqueInstitutions.size).toBe(institutions.length)
    })
  })

  describe('bio constant', () => {
    it('is an array with at least one paragraph', () => {
      expect(Array.isArray(bio)).toBe(true)
      expect(bio.length).toBeGreaterThan(0)
    })

    it('all paragraphs are non-empty strings', () => {
      bio.forEach((paragraph: string) => {
        expect(typeof paragraph).toBe('string')
        expect(paragraph.length).toBeGreaterThan(0)
      })
    })

    it('all paragraphs have reasonable length', () => {
      bio.forEach((paragraph: string) => {
        expect(paragraph.length).toBeGreaterThan(50)
      })
    })
  })

  describe('cross-constant consistency', () => {
    it('all projects have non-empty techStack entries', () => {
      projects.forEach(project => {
        expect(project.techStack.length).toBeGreaterThan(0)
        project.techStack.forEach(tech => {
          expect(typeof tech).toBe('string')
          expect(tech.length).toBeGreaterThan(0)
        })
      })
    })

    it('all experiences have non-empty techStack entries', () => {
      experiences.forEach(exp => {
        expect(exp.techStack.length).toBeGreaterThan(0)
        exp.techStack.forEach(tech => {
          expect(typeof tech).toBe('string')
          expect(tech.length).toBeGreaterThan(0)
        })
      })
    })
  })
})
