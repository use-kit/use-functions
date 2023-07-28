export const getValues = <T>(object: { [key: string]: T } | null | undefined): T[] => {
  if (object == null)
    return []

  return Object.keys(object).map(key => object[key])
}
