<script setup lang='ts'>
withDefaults(defineProps<{
  mustShowLogoLabel?: boolean
}>(), {
  mustShowLogoLabel: false,
})
</script>

<template>
  <NuxtLinkLocale to="/" class="flex-a-c gap-8 no-underline">
    <div class="h-32 w-32 rounded-8 from-#5c40ff to-#ba42f6 bg-gradient-to-br flex-c">
      <span class="text-18 text-#fff font-700">A</span>
    </div>
    <span class="text-16 text-#111827 font-700 whitespace-nowrap">AI Logo Creator</span>
  </NuxtLinkLocale>
</template>
