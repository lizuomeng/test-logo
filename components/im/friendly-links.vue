<script setup lang='ts'>
const { t, locale } = useI18n()

const friendlyLinkList = [
  { link: 'https://estatepass.ai', alt: 'EstatePass', language: 'en' },
  { link: 'https://gongin.kr', alt: 'Gongin', language: 'ko' },
  { link: 'https://takkenai.jp', alt: 'Takkenai', language: 'jp' },
  { link: 'https://twelve.tools', alt: 'Featured on Twelve Tools', language: 'all' },
]

const filteredFriendlyLinks = computed(() => {
  return friendlyLinkList.filter(link => link.language === locale.value || link.language === 'all')
})
</script>

<template>
  <section v-if="filteredFriendlyLinks.length > 0" class="py-40 px-20" lt-s640="py-32">
    <div class="mx-a max-w-1200 w-full">
      <h3 class="text-40 text-#000 leading-52 text-center rozha mb-40" lt-s640="text-24 leading-30 mb-24">
        {{ t('layouts.footer.Friendly Links') }}
      </h3>
      <div class="flex flex-wrap items-center justify-center gap-32" lt-s640="gap-20">
        <a
          v-for="link in filteredFriendlyLinks"
          :key="link.link"
          class="block transition-all-300 opacity-80 hover:opacity-100 text-14 text-#5D5B66 no-underline hover:text-nmain"
          :href="link.link"
          :title="link.alt"
          target="_blank"
          rel="noopener"
        >
          {{ link.alt }}
        </a>
      </div>
    </div>
  </section>
</template>
