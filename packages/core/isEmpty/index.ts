import { isArray, isNull, isObject, isString, isUndefined } from '..'

export const isEmpty = (
  field?: null | undefined | string | any[] | Record<string, any>,
) => {
  if (isNull(field) || isUndefined(field))
    return true

  if (isString(field))
    return field === ''

  if (isArray(field))
    return !(field as []).length

  if (isObject(field))
    return !Object.keys(field as object).length

  return false
}
