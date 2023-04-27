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

/* eslint-disable @typescript-eslint/no-unused-vars */
export const generateTree = (nodes: TreeNode[], root?: string, fields?: any) => {
  return makeTree(nodes)
}

function makeTree(treeNodes: TreeNode[]): TreeNode[] {
  const nodesMap = new Map<number | string, TreeNode>(
    treeNodes.map(node => [node.id, node]),
  )

  const virtualRoot = {} as Partial<TreeNode>

  treeNodes.forEach((node, i) => {
    const parent = nodesMap.get(node.parent) ?? virtualRoot;
    (parent.children ??= []).push(node)
  })

  return virtualRoot.children ?? []
}
