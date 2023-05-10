export const isBase64 = (source: string) => {
  const str: string = source.includes(',') ? source.split(',')[1] : source

  const regex = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/

  return regex.test(str)
}
