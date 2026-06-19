import { Education } from '@/types/education'

export const createMockEducation = (
  overrides?: Partial<Education>
): Education => ({
  school: 'Test University',
  degree: 'Bachelor of Science',
  field: 'Computer Science',
  completionDate: new Date(2023, 5, 1),
  details: ['Relevant coursework or honors'],
  ...overrides,
})
