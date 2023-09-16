interface ObjectWithFields { [key: string]: any }

export function getFieldWithDefault<T>(
  obj: ObjectWithFields,
  ...fields: T[]
): T {
  const defaultValue = fields.find(f => f) as T

  if (typeof obj !== 'object' || obj === null)
    return defaultValue

  for (const field of fields) {
    if (Reflect.has(obj, field as string))
      return field
  }

  return defaultValue
}
