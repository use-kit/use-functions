import { describe, expect, it } from 'vitest'
import { stringByteSize } from '.'

describe('stringByteSize', () => {
  it('should return the byte size of a string', () => {
    expect(stringByteSize('')).toBe(0)
    expect(stringByteSize('a')).toBe(1)
    expect(stringByteSize('ab')).toBe(2)
    expect(stringByteSize('abc')).toBe(3)
    expect(stringByteSize('abcd')).toBe(4)
    expect(stringByteSize('abcde')).toBe(5)
    expect(stringByteSize('😜')).toMatchInlineSnapshot('4')
  })
})
