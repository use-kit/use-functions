export const getFileType = (filename: string): string => {
  // TODO: support MimeType
  const split = filename.split('.')
  return split[split.length - 1]
}
