export const getField = (
  target: Record<string, any>,
  field: string,
  preset: unknown = undefined,
) => {
  // TODO: use like lodash.get()

  if (Reflect.has(target, field))
    return target[field]

  return preset
}
