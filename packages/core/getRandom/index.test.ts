import { describe, expect, it } from 'vitest'

import { getRandom } from '.'

describe('getRandom', () => {
  it('should return a random number between 1 and 10', () => {
    const result = getRandom(1, 10)
    expect(result).toBeGreaterThanOrEqual(1)
    expect(result).toBeLessThanOrEqual(10)
  })

  it('should return a random element from the array', () => {
    const arr = [1, 2, 3, 4, 5]
    const result = getRandom(arr)
    expect(arr).toContain(result)
  })

  it('should return a random string of length 5', () => {
    const result = getRandom(5) as string
    expect(typeof result).toBe('string')
    expect(result.length).toBe(5)
  })

  it('should return a unique key when no arguments are passed', () => {
    const result = getRandom() as string
    expect(typeof result).toBe('string')
    expect(result.length).toBeGreaterThan(0)
  })
})
