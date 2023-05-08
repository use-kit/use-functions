import { describe, expect, it } from 'vitest'
import { getFileType } from '.'

describe('should', () => {
  it('getFileType', () => {
    const type = 'mp4'
    expect(getFileType('nogi.uta.mp4')).toEqual(type)
  })

  it('mime type', () => {
    expect(getFileType('application/vnd.ms-powerpoint')).toMatchInlineSnapshot('"ppt"')

    expect(getFileType('application/json', false)).toMatchInlineSnapshot('"Json"')
  })
})
