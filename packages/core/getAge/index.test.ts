import { describe, expect, it } from 'vitest'
import { getAge } from '.'

describe('should', () => {
  it('exported', () => {
    expect(getAge('1997-09-28')).toMatchInlineSnapshot(String(new Date().getFullYear() - 1997))
  })
})
