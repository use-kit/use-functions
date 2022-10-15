export const flattenArray = (list: any[]) => {
  // const match = JSON.stringify(list).toString().match(/\[/g)
  // const len = match ? match.length - 1 : 1
  // return list.flat(len)

  return list.flat(Infinity)
}
