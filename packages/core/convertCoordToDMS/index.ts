export const convertCoordToDMS = (coord: number): {
  degrees: number | string
  minutes: number | string
  seconds: number | string
} => {
  const degrees = Math.floor(coord)
  const minFloat = (coord - degrees) * 60
  const minutes = Math.floor(minFloat)
  const seconds = Math.round((minFloat - minutes) * 60)

  return {
    degrees,
    minutes: minutes < 10 ? `0${minutes}` : minutes,
    seconds: seconds < 10 ? `0${seconds}` : seconds,
  }
}
