import { describe, expect, it } from 'vitest'
import { getAge } from '.'

describe('should', () => {
  it('exported', () => {
    expect(getAge('1997-09-28')).toMatchInlineSnapshot('27')
  })
})
