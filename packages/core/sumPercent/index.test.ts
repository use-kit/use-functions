import { describe, expect, it } from 'vitest'
import { sumPercent } from '.'

describe('sum percent', () => {
  it('add', () => {
    expect(sumPercent('20%', '13%')).toMatchInlineSnapshot('"33%"')
  })
})
