import { FileMimeType } from '../../utils'

export const getFileType = (
  mimeTypeOrName: string,
  toLowerCase = true,
): string => {
  const reg = /\w+\/[-+.\w]+/
  if (!reg.test(mimeTypeOrName)) {
    const name = mimeTypeOrName
    const split = name.split('.')
    const type = split[split.length - 1]
    return toLowerCase ? type.toLocaleLowerCase() : type
  }

  const keys = (Object.keys(FileMimeType) as Array<keyof typeof FileMimeType>).map(k => k)
  const values = Object.values(FileMimeType).map(v => v)

  const mimeType = mimeTypeOrName
  const map = new Map<string, string>()
  values.forEach((v, index) => map.set(v, keys[index]))
  const type = map.get(mimeType) ?? ''
  return toLowerCase ? type.toLocaleLowerCase() : type
}
