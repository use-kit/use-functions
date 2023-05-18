export const percentToNumber = (target: string, source: string) => {
  const x = target.split('%')[0]
  const y = source.split('%')[0]

  return { x: Number(x), y: Number(y) }
}

export const sumPercent = (target: string, source: string) => {
  const { x, y } = percentToNumber(target, source)

  return `${x + y}%`
}
