import { describe, expect, it } from 'vitest'
import { generateTree } from '.'

describe('should', () => {
  it('generateTree', () => {
    const list = [
      { id: 'nogi' },
      { id: 'asuka', parent: 'nogi' },
      { id: 'shiori', parent: 'nogi' },
    ]
    expect(generateTree(list)).toMatchInlineSnapshot('undefined')
  })
})
