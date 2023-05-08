export const download = (url: string, name = 'download') => {
  // TODO: unprocessed => fetch cors
  const link = document.createElement('a')

  link.download = name
  link.href = url
  link.click()
}
