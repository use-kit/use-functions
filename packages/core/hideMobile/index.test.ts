import { describe, expect, it } from 'vitest'
import { hideMobile } from '.'

describe('hide mobile', () => {
  it('****', () => {
    const phone = '12345678910'
    expect(hideMobile(phone)).toMatchInlineSnapshot('"123****8910"')
  })
})
