const node = {
  id: 'nogi',
}

const fields = {
  id: 'id',
  parent: 'parent',
  children: 'children',
}

export const generateTree = (list, root, fields) => {
  //
}

interface TreeNode {
  id: number | string;
  parent: number | string;
  children?: TreeNode[]
}

function makeTree(treeNodes: TreeNode[]): TreeNode[] {
  const nodesMap = new Map<number | string, TreeNode>(
    treeNodes.map(node => [node.id, node])
  );

  const virtualRoot = {} as Partial<TreeNode>;

  treeNodes.forEach((node, i) => {
    const parent = nodesMap.get(node.parent) ?? virtualRoot;
    (parent.children ??= []).push(node);
  });

  return virtualRoot.children ?? [];
}

const list = [{ id: 'nogi', parent: 'root' }, { id: 'asuka', parent: 'nogi' }, { id: 'shiori', parent: 'nogi' }]
const ret = makeTree(list)
console.log('ret: ', JSON.stringify(ret))