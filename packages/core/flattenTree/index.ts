const flattenTree = (tree: any) => {
  let ret: any[] = []

  tree.forEach((node: any) => {
    const { children, ...i } = node

    if(Array.isArray(children))
      ret = [...ret, ...flattenTree(children)]

    ret.push(i)
  })

  return ret
}

const getTreeNodes = (tree: any, callback: Function) => {
  const nodes = flattenTree(tree)
  return nodes.filter((node) => callback(node))
}

const getTreeNode = (tree: any, callback: Function, ret = undefined) => {
  tree.forEach((node: any) => {
    if (callback(node))
      ret = node

    const { children } = node
    if (Array.isArray(children))
      ret = getTreeNode(children, callback, ret)
  })

  return ret
}
