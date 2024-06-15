export function coordToDMS(coord: number, absolute = true): {
  degrees: number
  minutes: number
  seconds: number
} {
  const degrees = Math.floor(coord) || 0
  const minFloat = (coord - degrees) * 60 || 0
  const minutes = Math.floor(minFloat)
  const seconds = Math.round((minFloat - minutes) * 60)

  return {
    degrees: absolute ? Math.abs(degrees) : degrees,
    minutes,
    seconds,
  }
}

export function coordToDD(coord: number) {
  const degrees = Number(coord.toFixed(4)) || 0
  return `${Math.abs(degrees)}`
}

function getDirection(coord: number, latitude: boolean): 'N' | 'S' | 'E' | 'W' {
  return latitude ? coord >= 0 ? 'N' : 'S' : coord >= 0 ? 'E' : 'W'
}

export const convertCoordToDecimalDegrees = (coord: [number, number]): string | [string, string] => {
  const [lat, long] = coord
  const latitude = coordToDD(lat)
  const longitude = coordToDD(long)

  return [
    `${latitude}° ${getDirection(lat, true)}`,
    `${longitude}° ${getDirection(long, false)}`,
  ]
}

export const convertCoordToDMS = (coord: [number, number]): string | [string, string] => {
  const [latitude, longitude] = coord
  const latitudeDMS = coordToDMS(latitude)
  const longitudeDMS = coordToDMS(longitude)

  return [
    `${latitudeDMS.degrees}°${latitudeDMS.minutes}'${latitudeDMS.seconds}" ${getDirection(latitude, true)}`,
    `${longitudeDMS.degrees}°${longitudeDMS.minutes}'${longitudeDMS.seconds}" ${getDirection(longitude, false)}`,
  ]
}
