import { isEmpty } from '..'

interface Target {
  [k: string]: any
}

export const hasField = (target: Target | null | undefined, field: string) => {
  let flag = false

  if (isEmpty(target))
    return flag

  Object.keys(target as Target).forEach((key: string) => {
    if (key === field)
      flag = true
  })

  return flag
}
