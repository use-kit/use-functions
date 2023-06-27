// TODO: Date RegExp Int8Array...
type PropsType = 'null' | 'undefined' | 'number' | 'boolean' | 'string' | 'array' | 'function' | 'object' | 'async-function' | 'weak-set' | 'weak-map' | 'big-int' | 'array-buffer'

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

export const isBigInt = (obj: unknown) => {
  return Object.prototype.toString.call(obj) === '[object BigInt]'
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

export const isAsyncFunction = (obj: unknown) => {
  return Object.prototype.toString.call(obj) === '[object AsyncFunction]'
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

export const isWeakSet = (obj: unknown) => {
  return Object.prototype.toString.call(obj) === '[object WeakSet]'
}

export const isWeakMap = (obj: unknown) => {
  return Object.prototype.toString.call(obj) === '[object WeakMap]'
}

export const isArrayBuffer = (obj: unknown) => {
  return Object.prototype.toString.call(obj) === '[object ArrayBuffer]'
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
