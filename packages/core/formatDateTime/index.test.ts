import { describe, expect, it } from 'vitest'
import { formatDate, formatTime } from '.'

describe('format', () => {
  it('formats date', () => {
    expect(formatDate(1711983600000)).toMatchInlineSnapshot('"2024-04-01"')
  })

  it('formats time', () => {
    expect(formatTime(1711983600000)).toMatchInlineSnapshot('"23:00:00"')
  })
})
