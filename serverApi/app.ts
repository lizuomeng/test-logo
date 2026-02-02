import { useGet } from '@/composables/fetch'

export function httpGetSampleTagNamesVisitor() {
  return useGet('/product/v2/sample-tag/tag-names/visitor')
}
