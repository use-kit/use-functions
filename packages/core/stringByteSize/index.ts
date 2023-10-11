export function stringByteSize(str: string) {
  return new Blob([str]).size
}
