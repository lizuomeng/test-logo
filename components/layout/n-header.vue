<script setup lang='ts'>
const { t, locale } = useI18n()
const localePath = useLocalePath()

const menuList = [
  { label: 'menu.Home', path: '/' },
  { label: 'menu.Logo', path: '/ai-logo-generator/text-to-logo' },
  { label: 'menu.AI Image', path: '/ai-image-maker' },
  { label: 'menu.AI Video', path: '/ai-video-maker' },
  { label: 'menu.AI Tools', path: '/ai-tools' },
  { label: 'menu.Pricing', path: '/pricing' },
]

const { width } = useWindowSize()
const mobileMenuOpen = ref(false)
</script>

<template>
  <ClientOnly>
    <header class="sticky left-0 top-0 z-200 w-100% bg-#fff">
      <div class="relative box-border h-[calc(var(--n-header-height))] flex-a-c flex-j-sb px-24 shadow-n-1 lt-s1024:px-16">
        <div class="flex-a-c gap-8">
          <button v-if="width <= 1024" class="h-32 w-32 flex-c" @click="mobileMenuOpen = !mobileMenuOpen">
            <span class="text-20">&#9776;</span>
          </button>
          <BaseLogo />
        </div>

        <nav v-if="width > 1024" class="absolute left-50% top-50% z-10 -translate-50%">
          <div class="flex-a-c gap-4">
            <NuxtLinkLocale
              v-for="item in menuList"
              :key="item.label"
              :to="item.path"
              class="rounded-8 px-12 py-8 text-14 text-#2D3138 font-500 no-underline ct hover:bg-#F1F1F8 hover:text-nmain"
            >
              {{ t(item.label) }}
            </NuxtLinkLocale>
          </div>
        </nav>

        <div class="min-w-84 flex-a-c justify-end">
          <LoginButton />
        </div>
      </div>

      <!-- Mobile menu -->
      <div v-if="mobileMenuOpen && width <= 1024" class="absolute left-0 top-[var(--n-header-height)] z-100 w-100% bg-#fff px-16 py-8 shadow-n-2">
        <NuxtLinkLocale
          v-for="item in menuList"
          :key="item.label"
          :to="item.path"
          class="block rounded-8 px-16 py-12 text-14 text-#2D3138 font-500 no-underline ct hover:bg-#F1F1F8"
          @click="mobileMenuOpen = false"
        >
          {{ t(item.label) }}
        </NuxtLinkLocale>
      </div>
    </header>
    <template #fallback>
      <header class="sticky left-0 top-0 z-200 w-100% bg-#fff">
        <div class="relative box-border h-[calc(var(--n-header-height))] flex-a-c flex-j-sb px-24 shadow-n-1">
          <BaseLogo />
        </div>
      </header>
    </template>
  </ClientOnly>
</template>
