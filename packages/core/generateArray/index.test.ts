import { describe, expect, it } from 'vitest'
import { generateArray } from '.'

describe('should', () => {
  it('generateArray', () => {
    expect(generateArray(0, 2)).toHaveLength(3)
  })
})
