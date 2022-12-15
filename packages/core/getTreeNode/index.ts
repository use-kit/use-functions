export const getTreeNodes = (tree: any, callback: Function, ret = []) => {
  tree.forEach((node: any) => {
    if (callback(node))
      ret.push(node as never)

    const { children } = node
    if (Array.isArray(children))
      ret = [...getTreeNodes(children, callback, ret)]
  })

  return ret
}

export const getTreeNode = (tree: any, callback: Function, ret = undefined) => {
  tree.forEach((node: any) => {
    if (callback(node))
      ret = node

    const { children } = node
    if (Array.isArray(children))
      ret = getTreeNode(children, callback, ret)
  })

  return ret
}

export const getParentTree = (tree: any, callback: Function, ret = undefined) => {
  tree.forEach((node: any) => {
    if (callback(node))
      ret = tree

    const { children } = node
    if (Array.isArray(children))
      ret = getParentTree(children, callback, ret)
  })

  return ret
}
