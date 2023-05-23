interface objParams {
  [key: string]: any
}

export const mergeField = (target: objParams, source: objParams) => {
  Object.keys(source).forEach((sKey) => {
    target[sKey] = source[sKey]
  })
}
