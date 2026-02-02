<script setup lang='ts'>
defineProps<{
  theme?: string
}>()
</script>

<template>
  <div class="flex-a-c gap-12">
    <NuxtLinkLocale to="/app">
      <button class="h-36 rounded-8 bg-#000 px-16 text-14 text-#fff font-600 ct hover:opacity-70">
        {{ $t('newHome.hero.cta') }}
      </button>
    </NuxtLinkLocale>
  </div>
</template>
