<script setup lang='ts'>
const props = withDefaults(defineProps<{
  isDark?: boolean
}>(), {
  isDark: false,
})

const { t, locale } = useI18n()

const generatorList = {
  title: 'layouts.footer.AI Logo Generator',
  list: [
    { label: 'layouts.footer.Text to Logo', path: '/ai-logo-generator/text-to-logo' },
    { label: 'layouts.footer.Image to Logo', path: '/ai-logo-generator/image-to-logo' },
    { label: 'layouts.footer.Sketch to Logo', path: '/ai-logo-generator/sketch-to-logo' },
    { label: 'layouts.footer.Letter to Logo', path: '/ai-logo-generator/letter-to-logo' },
  ],
}

const videoToolsList = {
  title: 'layouts.footer.Video Tools',
  list: [
    { label: 'layouts.footer.AI Logo Animation', path: '/ai-logo-animation' },
    { label: 'layouts.footer.AI Video Generator', path: '/ai-video-maker' },
    { label: 'layouts.footer.Image to Video', path: '/ai-video-maker/image-to-video' },
    { label: 'layouts.footer.Text to Video', path: '/ai-video-maker/text-to-video' },
  ],
}

const imageToolsList = {
  title: 'layouts.footer.Image Tools',
  list: [
    { label: 'layouts.footer.AI Logo Mockups', path: '/ai-logo-mockup' },
    { label: 'layouts.footer.AI Image Maker', path: '/ai-image-maker' },
    { label: 'layouts.footer.AI Image Tools', path: '/ai-tools' },
    { label: 'layouts.footer.Image to Image', path: '/ai-image-maker/image-to-image' },
    { label: 'layouts.footer.Text to Image', path: '/ai-image-maker/text-to-image' },
  ],
}

const companyList = {
  title: 'layouts.footer.Company',
  list: [
    { label: 'layouts.footer.Terms of Service', path: '/terms' },
    { label: 'layouts.footer.Privacy', path: '/privacy' },
    { label: 'menu.Pricing', path: '/pricing' },
  ],
}

const sections = [generatorList, videoToolsList, imageToolsList, companyList]
</script>

<template>
  <footer class="box-border px-12 py-40 text-14 text-#2D3138 leading-21" :class="isDark ? 'bg-#F1F1F8' : 'bg-#fff'">
    <div class="mx-a box-border max-w-1200 w-full" lt-s1440="w-100% px-24">
      <div class="grid grid-cols-5 w-100% gap-y-24 gap-x-8" lt-s1280="grid-cols-4" lt-s768="grid-cols-2">
        <div v-for="section in sections" :key="section.title" class="col-span-1">
          <div class="pb-16 color-nmain leading-17">{{ t(section.title) }}</div>
          <div class="grid gap-y-12">
            <NuxtLinkLocale v-for="item in section.list" :key="item.label" :to="item.path" class="no-underline">
              <span class="cursor text-#2D3138 transition-all-300 hover:text-nmain">{{ t(item.label) }}</span>
            </NuxtLinkLocale>
          </div>
        </div>
        <div class="col-span-1" lt-s1280="col-span-4" lt-s768="col-span-2">
          <div class="b-l-1 b-l-#E4E4EF b-l-solid pl-32" lt-s1280="pl-0 b-l-0 pt-24 b-t-1 b-t-#E4E4EF b-t-solid" lt-s768="pt-20">
            <BaseLogo must-show-logo-label class="h-32 lt-s480:h-24" />
            <div class="mt-16 text-12 color-#5D5B66 leading-22">
              <div>support@ailogocreator.io</div>
              <div>Copyright @ 2025 AlLogoCreator</div>
              <div>All rights reserved</div>
              <div>DESIGNER AILTD</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
