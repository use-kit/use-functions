// TODO: BigInt Date RegExp Int8Array...
// TODO: WeakMap WeakSet ArrayBuffer AsyncFunction Reflect Proxy
type PropsType = 'null' | 'undefined' | 'number' | 'boolean' | 'string' | 'array' | 'function' | 'object'

export const isNull = (obj: unknown) => {
  return Object.prototype.toString.call(obj) === '[object Null]'
}

export const isUndefined = (obj: unknown) => {
  return Object.prototype.toString.call(obj) === '[object Undefined]'
}

// include: NaN Infinity
export const isNumber = (obj: unknown) => {
  return Object.prototype.toString.call(obj) === '[object Number]'
}

export const isBoolean = (obj: unknown) => {
  return Object.prototype.toString.call(obj) === '[object Boolean]'
}

export const isString = (obj: unknown) => {
  return Object.prototype.toString.call(obj) === '[object String]'
}

export const isArray = (obj: unknown) => {
  return Object.prototype.toString.call(obj) === '[object Array]'
}

export const isFunction = (obj: unknown) => {
  return Object.prototype.toString.call(obj) === '[object Function]'
}

export const isObject = (obj: unknown) => {
  return Object.prototype.toString.call(obj) === '[object Object]'
}

export const isSymbol = (obj: unknown) => {
  return Object.prototype.toString.call(obj) === '[object Symbol]'
}

export const isSet = (obj: unknown) => {
  return Object.prototype.toString.call(obj) === '[object Set]'
}

export const isMap = (obj: unknown) => {
  return Object.prototype.toString.call(obj) === '[object Map]'
}

export const typeOf = (obj: unknown) => {
  return Object.prototype.toString.call(obj).slice(8, -1).toLocaleLowerCase()
}

export const isType = (type: PropsType) => {
  return (obj: unknown) => {
    const dataType = type.slice(0, 1).toUpperCase() + type.slice(1).toLowerCase()
    return Object.prototype.toString.call(obj) === `[object ${dataType}]`
  }
}
