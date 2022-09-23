// encryption
export const encryptUrlParam = (obj: Record<string, string>) => {
  return window.btoa(window.encodeURIComponent(JSON.stringify(obj)))
}

// decryption
export const decryptUrlParam = (str: string) => {
  const ret = window.decodeURIComponent(window.atob(str))
  return JSON.parse(ret)
};

export const getUrlQuery = (uri: string) => {
  const url = uri ?? window.location.href

  if (url.indexOf('?') === -1)
    return {}

  const queryStr = url.split("?")[1]
  const list = queryStr.split("&")

  let ret: Record<string, string> = {}
  list.forEach(s => {
    const [key, value] = s.split('=')
    ret = Object.assign(ret, { [key]: value })
  })

  return ret;
}

const url = 'https://www.nogi.com/member?age=19&cate=3'
const ret = getUrlQuery(url)
encryptUrlParam(ret)
