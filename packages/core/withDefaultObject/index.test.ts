import { describe, expect, it } from 'vitest'
import { withDefaultObject } from '.'

describe('default object', () => {
  it('default return', () => {
    expect(
      withDefaultObject({ x: 1 }, { x: 0, y: 0 }),
    ).toMatchInlineSnapshot(`
      {
        "x": 1,
        "y": 0,
      }
    `)
  })

  it('with not return', () => {
    const target = { x: 1 }
    const source = { x: 0, y: 0 }
    withDefaultObject(target, source)
    expect(target).toMatchInlineSnapshot(`
      {
        "x": 1,
        "y": 0,
      }
    `)
  })

  it('with {}', () => {
    const target = {}
    const source = { x: 0, y: 0 }
    withDefaultObject(target, source)
    expect(target).toMatchInlineSnapshot(`
      {
        "x": 0,
        "y": 0,
      }
    `)
  })

  it('with undefined', () => {
    let target
    const source = { x: 0, y: 0 }
    withDefaultObject((target || (target = {})), source)

    expect(target).toMatchInlineSnapshot(`
      {
        "x": 0,
        "y": 0,
      }
    `)

    expect(withDefaultObject(target, source)).toMatchInlineSnapshot(`
      {
        "x": 0,
        "y": 0,
      }
    `)
  })

  it('with default undefined', () => {
    const target = undefined
    const source = { x: 0, y: 0 }
    withDefaultObject(target, source)

    // TODO:
    expect(target).toMatchInlineSnapshot('undefined')
  })
})
