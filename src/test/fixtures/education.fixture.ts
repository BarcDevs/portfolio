import { Education } from '@/types/education'

export const createMockEducation = (
  overrides?: Partial<Education>
): Education => ({
  institution: 'Test University',
  degree: 'Bachelor of Science',
  period: '2019 - 2023',
  focus: 'Computer Science',
  notableProject: 'Relevant coursework or honors',
  ...overrides,
})
