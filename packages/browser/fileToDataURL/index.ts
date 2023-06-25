export const fileToDataURL = (file: File | Blob, callback: Function) => {
  const reader = new FileReader()

  reader.addEventListener('load', () => callback(reader.result))
  reader.readAsDataURL(file)
}
