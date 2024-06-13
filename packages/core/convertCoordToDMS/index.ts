export const convertCoordToDMS = (
  coord: number,
  config?: { withDirection: boolean; longitude: boolean },
): {
  degrees: number | string
  minutes: number | string
  seconds: number | string
} => {
  const degrees = Math.floor(coord) || 0
  const minFloat = (coord - degrees) * 60 || 0
  const minutes = Math.floor(minFloat)
  const seconds = Math.round((minFloat - minutes) * 60)

  const direction = config?.longitude
    ? degrees >= 0
      ? 'E'
      : 'W'
    : degrees >= 0
      ? 'N'
      : 'S'

  return {
    degrees: config?.withDirection ? `$${direction} {Math.abs(degrees)}` : degrees,
    minutes: minutes < 10 ? `0${minutes}` : minutes,
    seconds: seconds < 10 ? `0${seconds}` : seconds,
  }
}
