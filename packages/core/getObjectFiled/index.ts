type Param = string | number | symbol
type Obj = Record<Param, Param>
type Fn = (key: Param, value?: Param) => void

export const objectFilter = (obj: Obj, callback: Fn): Obj => {
  return Object.keys(obj)
    .filter(key => callback(key, obj[key]))
    .reduce((res: any, key: any) => {
      res[key] = obj[key]
      return res
    }, {})
}

export const getObjectFiled = (obj: Obj, fields: Param[]) => {
  return objectFilter(obj, (key: Param) => {
    return fields.includes(key)
  })
}
