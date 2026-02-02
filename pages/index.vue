<script setup lang='ts'>
import { httpGetSampleTagNamesVisitor, httpPostDesignTemplateList } from '~/api'

const { t } = useI18n()
const config = useRuntimeConfig()
const localePath = useLocalePath()
const { getAppPath } = useSeoHook()

// SEO Meta
useSeoMeta({
  title: t('layouts.title.aiLogoGenerator'),
  keywords: t('layouts.keywords.aiLogoGenerator'),
  description: t('layouts.description.aiLogoGenerator'),
})

// Brand input
const { handleLocalGetBrandTitle, handleLocalSaveBrandTitle } = useDesignUserUploadSaveHook()
const brandTitle = ref(handleLocalGetBrandTitle() || '')

function handleEnter() {
  navigateTo({ path: localePath('/app') })
}

// How it works setting
const HEADER_SETTING = {
  title: t('newHome.howItWorks.title'),
  tip: t('newHome.howItWorks.subtitle'),
  list: _times(4, (index) => {
    return {
      title: t(`newHome.howItWorks.step${index + 1}.title`),
      content1: t(`newHome.howItWorks.step${index + 1}.desc`),
      icon: imgPath(`/images/aiLogo/0${index + 1}.svg`),
    }
  }),
}

const iconList = [
  'glicon-Frame4',
  'glicon-Frame-5',
  'glicon-Frame-6',
  'glicon-Frame-7',
  'glicon-Frame-8',
  'glicon-Frame-1',
  'glicon-Frame-2',
  'glicon-Frame-3',
  'glicon-Frame-4',
]
const FEATURE_SETTING = {
  title: t(`app.seo.aiimage.feature.title`),
  list: _times(9, (index) => {
    return {
      title: t(`app.home.module5.list.${index + 1}.title`),
      icon2: iconList[index],
      topTip: '',
      bottomTip: '',
      children: _compact(_times(4, (c) => {
        const title = t(`app.home.module5.list.${index + 1}.children.${c + 1}.title`)
        if (!title) return undefined
        return {
          title,
          content: t(`app.home.module5.list.${index + 1}.children.${c + 1}.content`),
        }
      })),
    }
  }),
}

// Testimonials
const testimonials = computed(() => [
  {
    name: t('newHome.testimonials.user1.name'),
    role: t('newHome.testimonials.user1.role'),
    content: t('newHome.testimonials.user1.content'),
    avatar: imgPath('/images/home/brand/user1.png'),
    rating: 5,
  },
  {
    name: t('newHome.testimonials.user2.name'),
    role: t('newHome.testimonials.user2.role'),
    content: t('newHome.testimonials.user2.content'),
    avatar: imgPath('/images/home/brand/user2.png'),
    rating: 5,
  },
  {
    name: t('newHome.testimonials.user3.name'),
    role: t('newHome.testimonials.user3.role'),
    content: t('newHome.testimonials.user3.content'),
    avatar: imgPath('/images/home/brand/user3.png'),
    rating: 5,
  },
])

// FAQ
const faqList = computed(() => _times(6, index => ({
  question: t(`newHome.faq.q${index + 1}.question`),
  answer: t(`newHome.faq.q${index + 1}.answer`),
})))

const expandedFaq = ref<number | null>(null)

function toggleFaq(index: number) {
  expandedFaq.value = expandedFaq.value === index ? null : index
}

// Logo showcase data
const styleList = useState<any[]>('totalStyleList', () => [])

const { data: showcaseData } = useLazyAsyncData(
  'home-showcase-data',
  async () => {
    const styleRes = await httpPostDesignTemplateList({ pageSize: 12, taskType: 'txt2img' })
    if (styleRes.data.value?.success) {
      const list = styleRes.data.value.data?.list || []
      return list.map((item: any) => ({
        ...item,
        src: item.logoUrl,
        alt: item.prompt,
      }))
    }
    return []
  },
  { server: false },
)

watch(showcaseData, (data) => {
  if (data) styleList.value = data
}, { immediate: true })

// Resources data (tag names)
const tagNamesList = useState<any>('homeTagNamesList', () => [])

const { data: tagNamesData } = useLazyAsyncData(
  'home-new-tag-names',
  async () => {
    const res = await httpGetSampleTagNamesVisitor()
    if (res.data.value?.success) {
      return res.data.value?.data || []
    }
    return []
  },
  { server: false },
)

watch(tagNamesData, (data) => {
  if (data) tagNamesList.value = data
}, { immediate: true })

const resourcesData = computed(() => ({
  title: t('trends2026.Explore More AI Logo Resources'),
  list: tagNamesList.value,
}))

// Stats
const stats = computed(() => [
  { value: '100K+', label: t('newHome.stats.users') },
  { value: '500K+', label: t('newHome.stats.logos') },
  { value: '4.8/5', label: t('newHome.stats.rating') },
  { value: '50+', label: t('newHome.stats.countries') },
])

// Images
const homeTipIcon = imgPath('/images/home/tip.png')
</script>

<template>
  <div class="new-home bg-#fff">
    <!-- Hero Section -->
    <section class="hero-section relative overflow-hidden">
      <div class="absolute inset-0 z-0 from-#FAFAFA via-#F5F3FF to-#FDF2F8 bg-gradient-to-br" />
      <div class="hero-glow hero-glow-purple" />
      <div class="hero-glow hero-glow-pink" />
      <div class="hero-glow hero-glow-orange" />

      <svg class="absolute left-6% top-25% z-1 h-28 w-28 color-#8B5CF6/35" lt-s768="hidden" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2L13.09 8.26L19 9L13.09 9.74L12 16L10.91 9.74L5 9L10.91 8.26L12 2Z" />
      </svg>
      <svg class="absolute bottom-25% left-2% z-1 h-20 w-20 color-#EC4899/30" lt-s768="hidden" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2L13.09 8.26L19 9L13.09 9.74L12 16L10.91 9.74L5 9L10.91 8.26L12 2Z" />
      </svg>
      <svg class="absolute right-46% top-12% z-1 h-16 w-16 color-#F59E0B/25" lt-s768="hidden" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2L13.09 8.26L19 9L13.09 9.74L12 16L10.91 9.74L5 9L10.91 8.26L12 2Z" />
      </svg>

      <div class="absolute left-2% top-18% z-1 h-3 w-3 rounded-full bg-#8B5CF6/50" lt-s768="hidden" aria-hidden="true" />
      <div class="absolute bottom-12% left-10% z-1 h-4 w-4 rounded-full bg-#EC4899/35" lt-s768="hidden" aria-hidden="true" />
      <div class="absolute bottom-20% right-48% z-1 h-3 w-3 rounded-full bg-#10B981/40" lt-s768="hidden" aria-hidden="true" />

      <div class="hero-grid absolute bottom-0 right-0 z-0" lt-s768="hidden" aria-hidden="true" />
      <div class="relative z-10 mx-a max-w-1400 px-24 pb-80 pt-60" lt-s768="pt-40 pb-60">
        <div class="grid grid-cols-2 items-center gap-60" lt-s1024="grid-cols-1 gap-40">
          <div class="hero-content" lt-s1024="text-center">
            <h1 class="rozha mb-24 text-52 color-#111827 leading-64" lt-s768="text-32 leading-40 mb-16">
              {{ $t('newHome.hero.title') }}
            </h1>
            <p class="mb-32 text-18 color-#4B5563 leading-28" lt-s768="text-16 leading-24 mb-24">
              {{ $t('newHome.hero.subtitle') }}
            </p>

            <div
              class="mb-24 flex items-center gap-12 rounded-16 bg-#fff p-8 shadow-[0_4px_24px_rgba(0,0,0,0.08)]"
              lt-s768="flex-col p-16 gap-16"
            >
              <el-input
                v-model="brandTitle"
                :placeholder="$t('newHome.hero.inputPlaceholder')"
                class="hero-input flex-1"
                size="large"
                aria-label="Brand name"
                @input="handleLocalSaveBrandTitle($event)"
                @keyup.enter="handleEnter"
              />
              <NuxtLinkLocale :to="getAppPath()" aria-label="Create logo now">
                <BaseColorButton class="cta-pulse h-52! w-max! rounded-12! px-32! text-16! font-600!">
                  {{ $t('newHome.hero.cta') }}
                </BaseColorButton>
              </NuxtLinkLocale>
            </div>

            <div class="flex flex-wrap items-center gap-24" lt-s1024="justify-center">
              <div class="flex items-center gap-8">
                <div class="flex -space-x-2">
                  <div v-for="i in 4" :key="i" class="h-32 w-32 overflow-hidden border-2 border-#fff rounded-full bg-#E5E7EB">
                    <img :src="imgPath(`/images/home/brand/user${i}.png`)" :alt="`User ${i}`" class="h-full w-full object-cover">
                  </div>
                </div>
                <span class="text-14 color-#6B7280">{{ $t('newHome.hero.trustedBy') }}</span>
              </div>
              <div class="flex items-center gap-6">
                <div class="flex items-center gap-1" role="img" aria-label="Rating">
                  <span v-for="i in 5" :key="i" class="text-16 color-#FBBF24" aria-hidden="true">&#9733;</span>
                </div>
                <span class="text-14 color-#111827 font-600">4.8/5</span>
                <span class="text-14 color-#6B7280">{{ $t('newHome.hero.onTrustpilot') }}</span>
              </div>
            </div>
          </div>

          <div class="hero-image relative" lt-s1024="order-first">
            <img
              :src="imgPath('/images/home/first-bg.webp')"
              :alt="$t('newHome.hero.imageAlt')"
              class="max-w-520 w-full"
              fetchpriority="high"
            >
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="stats-section from-#fff to-#F9FAFB bg-gradient-to-b py-48">
      <div class="mx-a max-w-1400 px-24">
        <div class="grid grid-cols-4 gap-24" lt-s768="grid-cols-2 gap-16">
          <div
            v-for="(stat, index) in stats"
            :key="stat.label"
            class="stat-card group relative overflow-hidden border border-#E5E7EB/50 rounded-20 bg-#fff p-32 text-center shadow-sm transition hover:border-transparent hover:shadow-xl hover:-translate-y-1"
          >
            <div
              class="stat-icon absolute h-72 w-72 rounded-full opacity-15 transition -right-12 -top-12 group-hover:scale-110 group-hover:opacity-25"
              :class="[
                index === 0 ? 'bg-#8B5CF6' : '',
                index === 1 ? 'bg-#EC4899' : '',
                index === 2 ? 'bg-#F59E0B' : '',
                index === 3 ? 'bg-#10B981' : '',
              ]"
              aria-hidden="true"
            />
            <div
              class="absolute left-24 top-24 h-8 w-8 rounded-full opacity-60"
              :class="[
                index === 0 ? 'bg-#8B5CF6' : '',
                index === 1 ? 'bg-#EC4899' : '',
                index === 2 ? 'bg-#F59E0B' : '',
                index === 3 ? 'bg-#10B981' : '',
              ]"
              aria-hidden="true"
            />
            <p
              class="relative mb-8 bg-clip-text text-40 text-transparent font-700 transition group-hover:scale-105"
              :class="[
                index === 0 ? 'bg-gradient-to-r from-#8B5CF6 to-#A78BFA' : '',
                index === 1 ? 'bg-gradient-to-r from-#EC4899 to-#F472B6' : '',
                index === 2 ? 'bg-gradient-to-r from-#F59E0B to-#FBBF24' : '',
                index === 3 ? 'bg-gradient-to-r from-#10B981 to-#34D399' : '',
              ]"
              lt-s768="text-28"
            >
              {{ stat.value }}
            </p>
            <p class="relative text-16 color-#6B7280 font-500" lt-s768="text-14">
              {{ stat.label }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works -->
    <DesignSeoBaseHeader
      :is-h1="false"
      :setting="HEADER_SETTING"
      item-class="grid-cols-4"
      max-width="max-w-1400"
    />

    <LazyDesignSeoBaseMultiFeature :setting="FEATURE_SETTING" />

    <!-- Logo Showcase -->
    <section class="showcase-section py-80" lt-s768="py-48">
      <div class="mx-a max-w-1400 px-24">
        <div class="mb-48 flex items-end justify-between" lt-s768="flex-col items-center gap-16 mb-32">
          <div lt-s768="text-center">
            <h2 class="rozha mb-16 text-40 color-#111827 leading-48" lt-s768="text-28 leading-36">
              {{ $t('newHome.showcase.title') }}
            </h2>
            <p class="max-w-600 text-18 color-#6B7280" lt-s768="text-16">
              {{ $t('newHome.showcase.subtitle') }}
            </p>
          </div>
          <NuxtLinkLocale to="/ai-logo-generator/text-to-logo" class="view-all-btn flex items-center gap-8 border-2 border-#8B5CF6 rounded-12 px-20 py-12 text-16 color-#8B5CF6 font-600 no-underline transition hover:bg-#8B5CF6 hover:color-#fff">
            {{ $t('newHome.showcase.viewAll') }}
            <span>&rarr;</span>
          </NuxtLinkLocale>
        </div>

        <div class="grid grid-cols-4 gap-24" lt-s1024="grid-cols-3" lt-s768="grid-cols-2">
          <NuxtLinkLocale
            v-for="(logo, index) in styleList.slice(0, 8)"
            :key="index"
            to="/ai-logo-generator/text-to-logo"
            class="logo-card group block overflow-hidden rounded-16 bg-#F9FAFB no-underline transition hover:shadow-lg"
            :aria-label="`View logo design: ${logo.alt}`"
          >
            <div class="aspect-square overflow-hidden">
              <img
                :src="aliImgPath(logo.src, { width: 600 })"
                :alt="logo.alt"
                class="h-full w-full object-cover transition group-hover:scale-105"
                loading="lazy"
              >
            </div>
          </NuxtLinkLocale>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="testimonials-section bg-#F9FAFB py-80" lt-s768="py-48">
      <div class="mx-a max-w-1400 px-24">
        <div class="mb-48 text-center" lt-s768="mb-32">
          <h2 class="rozha mb-16 text-40 color-#111827 leading-48" lt-s768="text-28 leading-36">
            {{ $t('newHome.testimonials.title') }}
          </h2>
          <p class="mx-a max-w-600 text-18 color-#6B7280" lt-s768="text-16">
            {{ $t('newHome.testimonials.subtitle') }}
          </p>
        </div>

        <div class="grid grid-cols-3 gap-24" lt-s1024="grid-cols-1">
          <article
            v-for="(testimonial, index) in testimonials"
            :key="index"
            class="testimonial-card relative rounded-20 bg-#fff p-32 shadow-sm transition hover:shadow-lg hover:-translate-y-1"
            :class="{ 'ring-2 ring-#8B5CF6/20': index === 1 }"
            aria-label="Customer testimonial"
          >
            <div class="absolute select-none text-72 color-#8B5CF6/10 leading-none font-serif -left-2 -top-4" aria-hidden="true">
              "
            </div>

            <div class="relative">
              <div class="mb-20 flex items-center gap-1" role="img" aria-label="Rating">
                <span v-for="i in testimonial.rating" :key="i" class="text-20 color-#FBBF24" aria-hidden="true">&#9733;</span>
              </div>
              <blockquote class="mb-24 text-16 color-#4B5563 leading-26 italic">
                "{{ testimonial.content }}"
              </blockquote>
              <div class="flex items-center gap-12">
                <div class="h-48 w-48 overflow-hidden rounded-full bg-#E5E7EB ring-2 ring-#8B5CF6/20">
                  <img :src="testimonial.avatar" :alt="testimonial.name" class="h-full w-full object-cover">
                </div>
                <div>
                  <p class="text-16 color-#111827 font-600">{{ testimonial.name }}</p>
                  <p class="text-14 color-#6B7280">{{ testimonial.role }}</p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="faq-section py-80" lt-s768="py-48">
      <div class="mx-a max-w-800 px-24">
        <div class="mb-48 text-center" lt-s768="mb-32">
          <h2 class="rozha mb-16 text-40 color-#111827 leading-48" lt-s768="text-28 leading-36">
            {{ $t('newHome.faq.title') }}
          </h2>
          <p class="text-18 color-#6B7280" lt-s768="text-16">
            {{ $t('newHome.faq.subtitle') }}
          </p>
        </div>

        <div class="space-y-16" role="list" aria-label="Frequently asked questions">
          <div
            v-for="(faq, index) in faqList"
            :key="index"
            class="faq-item overflow-hidden border border-#E5E7EB rounded-16 bg-#fff transition"
            :class="{ 'border-#8B5CF6 shadow-md': expandedFaq === index }"
            role="listitem"
          >
            <button
              class="w-full flex items-center justify-between px-24 py-20 text-left transition"
              :aria-expanded="expandedFaq === index"
              :aria-controls="`faq-answer-${index}`"
              @click="toggleFaq(index)"
            >
              <span class="pr-16 text-18 color-#111827 font-600" lt-s768="text-16">{{ faq.question }}</span>
              <span
                class="text-20 color-#6B7280 transition inline-block"
                :class="{ 'rotate-180': expandedFaq === index }"
                aria-hidden="true"
              >&#9660;</span>
            </button>
            <div
              :id="`faq-answer-${index}`"
              class="overflow-hidden transition-all"
              :class="expandedFaq === index ? 'max-h-200 pb-24 px-24' : 'max-h-0'"
              :aria-hidden="expandedFaq !== index"
            >
              <p class="text-16 color-#6B7280 leading-26">{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Explore More AI Logo Resources -->
    <section v-if="resourcesData.list?.length" class="resources-section relative overflow-hidden from-#F9FAFB to-#fff bg-gradient-to-b py-80" lt-s768="py-48">
      <div class="absolute top-1/2 h-400 w-400 rounded-full bg-#8B5CF6/5 blur-3xl -left-100 -translate-y-1/2" aria-hidden="true" />
      <div class="absolute top-1/3 h-300 w-300 rounded-full bg-#EC4899/5 blur-3xl -right-100" aria-hidden="true" />

      <div class="relative mx-a max-w-1400 px-24">
        <div class="mb-48 text-center" lt-s768="mb-32">
          <h2 class="rozha mb-16 text-40 color-#111827 leading-48" lt-s768="text-28 leading-36">
            {{ resourcesData.title }}
          </h2>
          <p class="mx-a max-w-600 text-18 color-#6B7280" lt-s768="text-16">
            {{ $t('newHome.resources.subtitle') }}
          </p>
        </div>

        <div class="flex-c flex-wrap gap-12" lt-s768="gap-8" aria-label="Logo resources">
          <NuxtLink
            v-for="(item, index) in resourcesData.list"
            :key="index"
            :to="localePath(`/logos/${item.value}`)"
            class="resource-tag group relative overflow-hidden border border-#E5E7EB/80 rounded-full bg-#fff px-24 py-12 text-16 color-#6B7280 no-underline transition-all hover:border-#8B5CF6/50 hover:color-#8B5CF6 hover:shadow-#8B5CF6/10 hover:shadow-md hover:-translate-y-1"
            lt-s768="text-14 px-16 py-8"
            :aria-label="`View ${item.name} logos`"
          >
            <span class="relative z-10">{{ item.name }}</span>
            <div class="absolute inset-0 from-#8B5CF6/5 to-#EC4899/5 bg-gradient-to-r opacity-0 transition group-hover:opacity-100" aria-hidden="true" />
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="final-cta-section py-60">
      <div class="cta-bg-dark relative mx-a max-w-1200 overflow-hidden rounded-32 px-48 py-60" lt-s768="px-24 py-40 rounded-24 mx-16">
        <div class="absolute h-200 w-200 rounded-full bg-#8B5CF6 opacity-30 blur-3xl -left-40 -top-40" aria-hidden="true" />
        <div class="absolute h-200 w-200 rounded-full bg-#EC4899 opacity-30 blur-3xl -bottom-40 -right-40" aria-hidden="true" />
        <div class="absolute left-1/2 top-1/2 h-300 w-300 rounded-full bg-#6366F1 opacity-20 blur-3xl -translate-x-1/2 -translate-y-1/2" aria-hidden="true" />

        <div class="relative mx-a max-w-600 text-center">
          <div class="mx-a mb-24 h-64 w-64 flex-c rounded-20 from-#A78BFA to-#F472B6 bg-gradient-to-br shadow-#8B5CF6/30 shadow-lg">
            <img :src="homeTipIcon" class="w-40" alt="Logo" aria-hidden="true">
          </div>
          <h2 class="rozha mb-16 text-36 color-#fff leading-44" lt-s768="text-28 leading-36">
            {{ $t('newHome.finalCta.title') }}
          </h2>
          <p class="mb-32 text-18 color-#C4B5FD" lt-s768="text-16 mb-24">
            {{ $t('newHome.finalCta.subtitle') }}
          </p>

          <div
            class="flex items-center gap-12 border border-#fff/20 rounded-16 bg-#fff/10 p-8 backdrop-blur-sm"
            lt-s768="flex-col p-16 gap-16"
          >
            <el-input
              v-model="brandTitle"
              :placeholder="$t('newHome.hero.inputPlaceholder')"
              class="cta-input flex-1"
              size="large"
              aria-label="Brand name"
              @input="handleLocalSaveBrandTitle($event)"
              @keyup.enter="handleEnter"
            />
            <NuxtLinkLocale :to="getAppPath()" aria-label="Create logo now">
              <BaseColorButton class="h-52! w-max! rounded-12! px-32! text-16! font-600!">
                {{ $t('newHome.hero.cta') }}
              </BaseColorButton>
            </NuxtLinkLocale>
          </div>
        </div>
      </div>
    </section>

    <!-- Friendly Links -->
    <LazyImFriendlyLinks />

    <!-- Footer -->
    <LayoutFooter is-dark />
  </div>
</template>

<style scoped lang='scss'>
.hero-glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  z-index: 0;
}

.hero-glow-purple {
  width: 700px;
  height: 700px;
  top: -250px;
  left: -200px;
  background: radial-gradient(circle, rgba(139, 92, 246, 0.35) 0%, rgba(139, 92, 246, 0) 65%);
}

.hero-glow-pink {
  width: 550px;
  height: 550px;
  top: -50px;
  right: -50px;
  background: radial-gradient(circle, rgba(236, 72, 153, 0.25) 0%, rgba(236, 72, 153, 0) 65%);
}

.hero-glow-orange {
  width: 450px;
  height: 450px;
  bottom: -150px;
  right: 15%;
  background: radial-gradient(circle, rgba(245, 158, 11, 0.2) 0%, rgba(245, 158, 11, 0) 65%);
}

.hero-grid {
  width: 250px;
  height: 250px;
  background-image:
    linear-gradient(to right, rgba(139, 92, 246, 0.08) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(139, 92, 246, 0.08) 1px, transparent 1px);
  background-size: 25px 25px;
  mask-image: linear-gradient(to top left, rgba(0, 0, 0, 0.5) 0%, transparent 70%);
  -webkit-mask-image: linear-gradient(to top left, rgba(0, 0, 0, 0.5) 0%, transparent 70%);
}

.hero-input {
  :deep(.el-input__wrapper) {
    box-shadow: none;
    padding: 8px 16px;
    border-radius: 12px;
    background: #f9fafb;

    &.is-focus {
      box-shadow: none;
      background: #fff;
    }

    &:hover {
      box-shadow: none;
    }

    .el-input__inner {
      font-size: 16px;

      &::placeholder {
        color: #9ca3af;
      }
    }
  }
}

.cta-bg-dark {
  background: linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #3730a3 100%);
}

.cta-input {
  :deep(.el-input__wrapper) {
    box-shadow: none;
    padding: 8px 16px;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(8px);

    &.is-focus {
      box-shadow: none;
      background: rgba(255, 255, 255, 0.25);
    }

    &:hover {
      box-shadow: none;
      background: rgba(255, 255, 255, 0.2);
    }

    .el-input__inner {
      font-size: 16px;
      color: #fff;

      &::placeholder {
        color: rgba(255, 255, 255, 0.6);
      }
    }
  }
}

@keyframes cta-pulse {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(139, 92, 246, 0.4);
  }
  50% {
    box-shadow: 0 0 0 12px rgba(139, 92, 246, 0);
  }
}

.cta-pulse {
  animation: cta-pulse 2s ease-in-out infinite;

  &:hover {
    animation: none;
    box-shadow: 0 8px 24px 0 rgba(141, 48, 208, 0.16);
  }
}

@media (max-width: 768px) {
  .hero-section .hero-content h1 {
    font-size: 32px;
    line-height: 40px;
  }
}
</style>
