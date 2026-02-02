export const prefix = 'AI_LOGO_MARKER_'

export function handleStorageSetItem(key: string, value: any) {
  localStorage.setItem(`${prefix}${key}`, value)
}

export function handleStorageGetItem(key: string) {
  return localStorage.getItem(`${prefix}${key}`)
}

export function handleStorageRemoveItem(key: string) {
  localStorage.removeItem(`${prefix}${key}`)
}

export function handleSetToken(token: string) {
  handleStorageSetItem('USER_TOKEN', token)
}

export function handleGetToken() {
  if (import.meta.server) return ''
  return handleStorageGetItem('USER_TOKEN')
}

export function handleRemoveToken() {
  handleStorageRemoveItem('USER_TOKEN')
}

export function getQueryParam(name: string) {
  if (import.meta.server) return ''
  const urlParams = new URLSearchParams(window.location.search)
  return urlParams.get(name) || ''
}
