export const download = (url: string, name = 'download') => {
  const link = document.createElement('a')
  link.download = name
  link.href = url

  // Check if the browser supports the download attribute
  if (typeof link.download === 'undefined')
    window.open(url)

  else
    link.click()
}
