interface ObjectWithFields { [key: string]: any }

// TODO: get field with multiple default fields
export function getFieldWithDefault<T>(
  obj: ObjectWithFields,
  defaultValue: T,
  ...fields: string[]
): T {
  if (typeof obj !== 'object' || obj === null)
    return defaultValue

  console.log('fields', fields)
  for (const field of fields) {
    if (Reflect.has(obj, field))
      return field as T
  }
  console.log('default')

  return defaultValue
}
