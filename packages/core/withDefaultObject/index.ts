import { isUndefined } from '..'

interface objParams {
  [key: string]: any
}

export const withDefaultObject = (
  target: objParams | undefined,
  source: objParams,
): objParams => {
  if (isUndefined(target))
    target = {}

  Object.keys(source).forEach((sKey) => {
    if (!Object.keys(target as objParams).includes(sKey))
      (target as objParams)[sKey] = source[sKey]
  })

  return target as objParams
}
