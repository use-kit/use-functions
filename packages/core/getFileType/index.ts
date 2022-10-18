export const getFileType = (filename: string): string => {
  const split = filename.split('.')
  return split[split.length - 1]
}
