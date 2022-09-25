type Param = string | number | symbol
type Fn = (key: Param, value?: unknown) => void

export const objectFilter = (obj: Record<string | number | symbol, unknown>, callback: Fn): Record<string | number | symbol, unknown> => {
  return Object.keys(obj)
    .filter(key => callback(key, obj[key]))
    .reduce((res: any, key: any) => {
      res[key] = obj[key]
      return res
    }, {})
}

export const getObjectField = (obj: Record<string | number | symbol, unknown>, fields: Param[]) => {
  return objectFilter(obj, (key: Param) => {
    return fields.includes(key)
  })
}
