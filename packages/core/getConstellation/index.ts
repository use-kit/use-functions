import dayjs from 'dayjs'
import { generateArray } from '..'

type Language = 'zh' | 'en' | 'ja'
type Month = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
type Day = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31

const Constellation: Record<string, Record<Language, string>> = {
  Aires: { zh: '白羊座', en: 'aires', ja: 'おひつじ座' },
  Taurus: { zh: '金牛座', en: 'taurus', ja: 'おうし座' },
  Gemini: { zh: '双子座', en: 'gemini', ja: 'ふたご座' },
  Cancer: { zh: '巨蟹座', en: 'cancer', ja: 'かに座' },
  Leo: { zh: '狮子座', en: 'leo', ja: 'しし座' },
  Virgo: { zh: '处女座', en: 'virgo', ja: 'おとめ座' },
  Libra: { zh: '天秤座', en: 'libra', ja: 'てんびん座' },
  Scorpio: { zh: '天蝎座', en: 'scorpio', ja: 'さそり座' },
  Sagittarius: { zh: '射手座', en: 'sagittarius', ja: 'いて座' },
  Capricornus: { zh: '摩羯座', en: 'capricornus', ja: 'やぎ座' },
  Aquarius: { zh: '水瓶座', en: 'aquarius', ja: 'みずがめ座' },
  Pisces: { zh: '双鱼座', en: 'pisces', ja: 'うお座' },
}

// TODO: refactor
const mapping = (month: Month, day: Day) => {
  if (month === 4) {
    if (generateArray(1, 19).includes(day))
      return 'Aires'

    if (generateArray(20, 31).includes(day))
      return 'Taurus'
  }

  if (month === 5) {
    if (generateArray(1, 20).includes(day))
      return 'Taurus'

    if (generateArray(21, 31).includes(day))
      return 'Gemini'
  }

  if (month === 6) {
    if (generateArray(1, 20).includes(day))
      return 'Gemini'

    if (generateArray(21, 31).includes(day))
      return 'Cancer'
  }

  if (month === 7) {
    if (generateArray(1, 22).includes(day))
      return 'Cancer'

    if (generateArray(23, 31).includes(day))
      return 'Leo'
  }

  if (month === 8) {
    if (generateArray(1, 22).includes(day))
      return 'Leo'

    if (generateArray(23, 31).includes(day))
      return 'Virgo'
  }

  if (month === 9) {
    if (generateArray(1, 22).includes(day))
      return 'Virgo'

    if (generateArray(23, 31).includes(day))
      return 'Libra'
  }

  if (month === 10) {
    if (generateArray(1, 22).includes(day))
      return 'Libra'

    if (generateArray(23, 31).includes(day))
      return 'Scorpio'
  }

  if (month === 11) {
    if (generateArray(1, 21).includes(day))
      return 'Scorpio'

    if (generateArray(22, 31).includes(day))
      return 'Sagittarius'
  }

  if (month === 12) {
    if (generateArray(1, 21).includes(day))
      return 'Sagittarius'

    if (generateArray(22, 31).includes(day))
      return 'Capricornus'
  }

  if (month === 1) {
    if (generateArray(1, 19).includes(day))
      return 'Capricornus'

    if (generateArray(20, 31).includes(day))
      return 'Aquarius'
  }

  if (month === 2) {
    if (generateArray(1, 19).includes(day))
      return 'Aquarius'

    if (generateArray(20, 31).includes(day))
      return 'Pisces'
  }

  if (month === 3) {
    if (generateArray(1, 20).includes(day))
      return 'Pisces'

    if (generateArray(21, 31).includes(day))
      return 'Aires'
  }

  return 'Aires'
}

export const getConstellation = (date: string, lang: Language = 'zh') => {
  const month = dayjs(date).get('month') + 1
  const day = dayjs(date).get('date')

  const horoscopeSigns = mapping(month as Month, day as Day)
  return Constellation[horoscopeSigns][lang]
}
