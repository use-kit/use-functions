interface TreeNode {
  id: number | string
  parent: number | string
  children?: TreeNode[]
}

// TODO: support replace fields
// const fields = {
//   id: 'id',
//   parent: 'parent',
//   children: 'children',
// }

export const generateTree = (nodes: TreeNode[]) => {
  return makeTree(nodes)
}

function makeTree(treeNodes: TreeNode[]): TreeNode[] {
  const nodesMap = new Map<number | string, TreeNode>(
    treeNodes.map(node => [node.id, node]),
  )

  const virtualRoot = {} as Partial<TreeNode>

  treeNodes.forEach((node) => {
    const parent = nodesMap.get(node.parent) ?? virtualRoot;
    (parent.children ??= []).push(node)
  })

  return virtualRoot.children ?? []
}
