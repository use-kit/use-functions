import { describe, expect, it } from 'vitest'
import { getFieldWithDefault } from '.'

describe('getFieldWithDefault', () => {
  it('default', () => {
    const obj = { name: 'asuka', age: 23, height: 158 }
    expect(getFieldWithDefault(
      obj,
      (obj as any)?.id,
      obj?.name,
      (obj as any)?.nickname,
    )).toMatchInlineSnapshot('"asuka"')
  })

  it('undefined', () => {
    const obj = { name: 'asuka', age: 23, height: 158 }
    const fields = [undefined, null, '', 'field']

    expect(getFieldWithDefault(obj, ...fields)).toMatchInlineSnapshot('"field"')
  })
})
