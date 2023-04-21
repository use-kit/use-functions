export const generateArray = (start: number, end: number) => {
  return Array.from(new Array(end + 1).keys()).slice(start)
}
