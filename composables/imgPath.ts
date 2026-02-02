export const imgPath = (path: string) => {
  const {
    public: { baseURL = '' },
  } = useRuntimeConfig()
  return `${baseURL}${path}`
}

export const aliImgPath = (url: string, config?: {
  width?: number
  height?: number
  format?: 'jpg' | 'png' | 'webp'
}) => {
  if (!url) return ''
  if (url.includes('webp')) return url

  const { width, height, format = 'webp' } = config || {}
  const configList = []

  if (width || height) {
    const resizeList = []
    if (width) resizeList.push(`w_${width}`)
    if (height) resizeList.push(`h_${height}`)
    configList.push(`x-oss-process=image/resize,${resizeList.join(',')}`)
  }
  if (format) {
    configList.push(`x-oss-process=image/format,${format}`)
  }
  const configString = configList.join(',')
  return `${url}${url.includes('?') ? '&' : '?'}${configString}`
}
