import { describe, it, expect } from 'vitest'
import { generateArray } from '.'

describe('should', () => {
  it('generateArray', () => {
    expect(generateArray(0, 2)).toHaveLength(3)
  })
})
