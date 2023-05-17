import { isNumber, isString } from '..'

type sumProps = number | string

export const sum = (target: sumProps, source: sumProps) => {
  if (isNumber(target) && isNumber(source))
    return (target as number) + (source as number)

  if (isString(target) || isString(source)) {
    if (!isNaN(Number(target)) && !isNaN(Number(source)))
      return Number(target) + Number(source)

    else
      return (target as string) + (source as string)
  }

  return (target as string) + (source as string)
}
