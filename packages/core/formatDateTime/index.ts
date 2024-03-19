// refactor: use luxon or date-fns
function overTen(num: number) {
  return num < 10 ? `0${num}` : num
}

export const formatDate = (time: number) => {
  if (!time)
    return

  const date = new Date(time)

  const Y = `${date.getFullYear()}-`
  const M = `${overTen(date.getMonth() + 1)}-`
  const D = `${overTen(date.getDate())}`

  return Y + M + D
}

export const formatTime = (time: number) => {
  if (!time)
    return

  const date = new Date(time)

  const h = `${overTen(date.getHours())}:`
  const m = `${overTen(date.getMinutes())}:`
  const s = `${overTen(date.getSeconds())}`

  return h + m + s
}
