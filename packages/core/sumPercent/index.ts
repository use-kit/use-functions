import { isNumber, isString } from '..'

const percentToNumber = (target: string, source: string) => {
  const x = target.split('%')[0]
  const y = source.split('%')[0]

  return { x: Number(x), y: Number(y) }
}

export const isPercent = (target: string | number) => {
  if (isNumber(target))
    return false

  return target.toString().includes('%')
}

export const toNumber = (target: string | number, keepSize = true) => {
  if (isString(target)) {
    if (isPercent(target)) {
      const num = Number((target as string).split('%')[0])
      return keepSize ? num / 100 : num
    }

    return Number(target)
  }

  return target
}

export const sumPercent = (target: string, source: string) => {
  const { x, y } = percentToNumber(target, source)

  return `${x + y}%`
}
