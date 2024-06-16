// TODO:
export function filterTreeByIds<T>(tree: T[], ids: number[]): T[] {
  return tree.filter((item: T) => ids.includes(item.id))
}
