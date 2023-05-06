export const clipboardWrite = async (text: string) => {
  if (navigator.clipboard && window.isSecureContext) {
    return new Promise((resolve, reject) => {
      navigator.clipboard.writeText(text)
        .then(() => resolve(true))
        .catch((err) => {
          reject(false)
          throw new Error(err)
        })
    })
  }
  else {
    const input = document.createElement('input')
    document.body.appendChild(input)
    input.value = text
    input.select()
    input.style.display = 'none'

    return new Promise((resolve, reject) => {
      document.execCommand('copy') ? resolve(true) : reject(false)

      document.body.removeChild(input)
    })
  }
}
