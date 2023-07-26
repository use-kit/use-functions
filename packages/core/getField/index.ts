// export const getField = (
//   target: Record<string, any>,
//   field: string,
//   preset: unknown = undefined,
// ) => {
//   if (Reflect.has(target, field))
//     return target[field]

//   return preset
// }

export const getField = <T>(target: any, path: string, preset?: T): T => {
  const keys = path.split('.')
  let value: any = target

  for (const key of keys) {
    if (value === null || value === undefined)
      return preset!

    value = value[key]
  }

  return value !== undefined ? value : preset
}
