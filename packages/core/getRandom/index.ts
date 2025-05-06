export function getRandom<T>(
  param1?: number | T[],
  param2?: number,
): number | T | string | undefined {
  if (param1 === undefined && param2 === undefined) {
    // 不传参数，生成唯一 key
    const timestamp = Date.now().toString(36)
    const randomStr = Math.random().toString(36).substr(2, 5)
    return `${timestamp}${randomStr}`
  }

  if (typeof param1 === 'number' && typeof param2 === 'number') {
    // 生成指定范围内的随机整数
    return Math.floor(Math.random() * (param2 - param1 + 1)) + param1
  }
  else if (Array.isArray(param1)) {
    // 从数组中随机选取一个元素
    if (param1.length === 0)
      return undefined

    const randomIndex = Math.floor(Math.random() * param1.length)
    return param1[randomIndex]
  }
  else if (typeof param1 === 'number') {
    // 生成指定长度的随机字符串
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let result = ''
    for (let i = 0; i < param1; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length)
      result += characters.charAt(randomIndex)
    }
    return result
  }
  return undefined
}

export default getRandom
