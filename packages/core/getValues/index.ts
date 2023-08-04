import { isEmpty, isMap } from '..'

interface GenericObject<T> {
  [key: string]: T
}

export const getValues = <T>(object: {
  [key: string]: T
} | Map<string, T> | string | null | undefined): T[] => {
  if (isEmpty(object))
    return []

  if (isMap(object))
    return Array.from((object as Map<string, T>).values())

  return Object
    .keys((object as GenericObject<T>))
    .map(key => (object as GenericObject<T>)[key])
}
