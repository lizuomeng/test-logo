import { usePost } from '@/composables/fetch'

export function httpPostDesignTemplateList(params: any) {
  return usePost('/product/v2/cases/page/visitor', { pageNo: 1, ...params }, { key: `${params?.taskType}-${params?.pageSize}` })
}
