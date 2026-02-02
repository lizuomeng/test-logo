import { handleStorageSetItem, handleStorageGetItem, handleStorageRemoveItem } from '@/utils/storage'

export function useDesignUserUploadSaveHook() {
  const STORE_KEY2 = 'brandTitle'

  const handleLocalSaveBrandTitle = (value?: string) => {
    if (import.meta.server) return
    if (_isEmpty(value)) {
      handleStorageRemoveItem(STORE_KEY2)
    }
    handleStorageSetItem(STORE_KEY2, value)
  }

  const handleLocalGetBrandTitle = () => {
    if (import.meta.server) return ''
    const storeValue = handleStorageGetItem(STORE_KEY2)
    return storeValue || ''
  }

  const handleLocalRemoveBrandTitle = () => {
    if (import.meta.server) return ''
    handleStorageRemoveItem(STORE_KEY2)
  }

  return {
    handleLocalSaveBrandTitle,
    handleLocalGetBrandTitle,
    handleLocalRemoveBrandTitle,
  }
}
