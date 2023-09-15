import { mergeField } from '..'

interface objParams {
  [key: string]: any
}

export const mergeList = (
  targetList: objParams[],
  sourceList: objParams[],
  fieldKey: string,
) => {
  sourceList.forEach((source) => {
    const target = targetList.find(t => t[fieldKey] === source[fieldKey])
    if (!target)
      targetList.push(source)

    else
      mergeField(target, source ?? {})
  })

  return targetList
}
