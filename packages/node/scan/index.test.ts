import { describe, expect, it } from 'vitest'
import { scan } from '.'

describe('scan', () => {
  it('file', () => {
    const files = scan('packages/node/scan', { type: 'file' }).map(f => f.name)
    // console.log('files', files)
    expect(files.length).toBe(3)
  })
})
