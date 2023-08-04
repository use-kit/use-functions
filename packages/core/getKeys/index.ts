import { isEmpty, isMap } from '..'

export const getKeys = (
  obj: object | Map<string, any> | null | undefined,
): string[] => {
  if (isEmpty(obj))
    return []

  if (isMap(obj))
    return Array.from((obj as Map<string, any>).keys())

  else
    return Object.keys(obj as object)
}
