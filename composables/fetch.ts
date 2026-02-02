import { handleGetToken, getQueryParam } from '@/utils/storage'

const HEADER_CONFIG = {
  'Content-Type': 'application/json',
  'X-Custom-Header-Origin': 'web',
}

export async function useHttp(params: {
  method: 'POST' | 'GET' | 'DELETE'
  url: string
  data: Record<string, any>
  config: any
}) {
  const { method, url, data = {}, config = {} } = params
  const newParams: any = { ...data }
  const {
    public: { apiBaseUrl, apiServeBaseUrl },
  } = useRuntimeConfig()

  const requestUrl = import.meta.server ? apiServeBaseUrl + url : apiBaseUrl + url
  const nuxtApp = useNuxtApp()
  const language = nuxtApp.$i18n?.locale?.value
  let headers: any = {
    ...HEADER_CONFIG,
    'X-Custom-Header-Language': language || 'en',
  }

  if (!import.meta.server) {
    const userToken = handleGetToken()
    headers = {
      ...headers,
      'Authorization': userToken ? `Bearer ${userToken}` : '',
    }
  }

  const res = await useFetch<any>(requestUrl, {
    method,
    [method === 'GET' ? 'query' : 'body']: newParams,
    headers,
    ...config,
  })
  return res
}

export async function usePost(url: string, data: Record<string, any> = {}, config = {}) {
  return await useHttp({ method: 'POST', url, data, config })
}

export async function useGet(url: string, params: Record<string, any> = {}, config = {}) {
  return await useHttp({ method: 'GET', url, data: params, config })
}
