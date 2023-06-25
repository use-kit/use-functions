import { mergeField } from '..'

interface objParams {
  [key: string]: any
}

export const mergeList = (
  targetList: objParams[],
  sourceList: objParams[],
  fieldKey: string,
) => {
  targetList.forEach((target) => {
    const source = sourceList.find(s => s[fieldKey] === target[fieldKey])
    mergeField(target, source ?? {})
  })

  return targetList
}
