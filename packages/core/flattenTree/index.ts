export const flattenTree = (tree: any) => {
  let ret: any[] = []

  tree.forEach((node: any) => {
    const { children, ...i } = node

    if (Array.isArray(children))
      ret = [...ret, ...flattenTree(children)]

    ret.push(i)
  })

  return ret
}
