import { getNode, getNodes, getTreeNode, getTreeNodes } from '.'

const tree = [{
  id: 'nogi',
  children: [{ id: 'asuka', parent: 'nogi' }, { id: 'shiori', parent: 'nogi' }],
}]

console.time('test getTreeNode')
for (let i = 0; i < 10000; i++)
  getTreeNode(tree, (node: any) => node.id === 'shiori')
console.timeEnd('test getTreeNode')

console.time('test getNode')
for (let i = 0; i < 10000; i++)
  getNode(tree, (node: any) => node.id === 'shiori')
console.timeEnd('test getNode')

console.time('test getTreeNodes')
for (let i = 0; i < 10000; i++)
  getTreeNodes(tree, (node: any) => node.id === 'shiori')
console.timeEnd('test getTreeNodes')

console.time('test getNodes')
for (let i = 0; i < 10000; i++)
  getNodes(tree, (node: any) => node.id === 'shiori')
console.timeEnd('test getNodes')
