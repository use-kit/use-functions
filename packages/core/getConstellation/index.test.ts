import { describe, expect, it } from 'vitest'
import { getConstellation } from '.'

describe('get constellation', () => {
  it('should', () => {
    expect(getConstellation('6.11')).toMatchInlineSnapshot('"双子座"')
    expect(getConstellation('8/10')).toMatchInlineSnapshot('"狮子座"')
    expect(getConstellation('10/02')).toMatchInlineSnapshot('"天秤座"')

    expect(getConstellation('09/28', 'ja')).toMatchInlineSnapshot('"てんびん座"')
    expect(getConstellation('07/14', 'ja')).toMatchInlineSnapshot('"かに座"')

    expect(getConstellation('5/25', 'en')).toMatchInlineSnapshot('"gemini"')
  })
})
