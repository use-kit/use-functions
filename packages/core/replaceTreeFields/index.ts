// interface TreeNode<T> {
//   value: T
//   children: TreeNode<T>[]
// }

export const replaceTreeFields = (tree: Record<string, unknown>[], fields: Record<string, string>) => {
  const newTree = tree.map((node) => {
    const newNode = { ...node }
    for (const [key, value] of Object.entries(fields)) {
      newNode[value] = node[key]

      if (node.children)
        newNode[fields.children] = replaceTreeFields(node.children as any, fields)
    }

    return newNode
  })
  return newTree
}
