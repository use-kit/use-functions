import dayjs from 'dayjs'

export const getAge = (str: string) => {
  return dayjs().diff(str, 'year')
}
