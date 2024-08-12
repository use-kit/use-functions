let cache: { [key: string]: any } = {}

export async function cacheField(
  field: string,
  provider: () => Promise<any> | any,
): Promise<any> {
  if (cache[field])
    return cache[field]

  if (typeof provider === 'function') {
    const result = await provider()
    cache[field] = result
    return result
  }

  cache[field] = provider
  return provider
}

export function clearCache(field?: string): boolean {
  if (!field) {
    cache = {}
    return true
  }

  if (!cache[field])
    return false

  // delete cache[field]
  cache[field] = undefined
  return true
}
