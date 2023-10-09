import { describe, expect, it } from 'vitest'
import { isValidJSON } from '.'

describe('isValidJSON', () => {
  it('should return true for valid JSON', () => {
    expect(isValidJSON('{ "foo": "bar" }')).toBe(true)
  })
})
