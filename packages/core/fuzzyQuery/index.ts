export const fuzzyQuery = (
  list: Record<string, any>[],
  keyword: string,
  attribute = 'id',
): Record<string, any> => {
  const reg = new RegExp(keyword)
  const arr: any[] = []

  list.forEach((value, index) => {
    if (reg.test(list[index][attribute]))
      arr.push(list[index])
  })

  return arr
}
