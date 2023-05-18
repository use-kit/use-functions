import { typeOf } from '../isType'

export const uniqueList = (
  arr: (number | string)[] | Record<string, any>[] = [],
  key = 'id',
): (number | string)[] | Record<string, any>[] => {
  if (!arr.length)
    return []

  if (['number', 'string'].includes(typeOf(arr.at(0))))
    return Array.from(new Set(arr as any)) as (number | string)[]

  const map: Record<string, Record<string, any>> = {} as const

  (arr as Record<string, any>[]).forEach((item: Record<string, any>) => {
    if (!map[item[key]])
      map[item[key]] = item
  })

  return Object.values(map)
}
