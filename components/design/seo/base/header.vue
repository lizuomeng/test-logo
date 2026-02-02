<script setup lang='ts'>
const props = withDefaults(defineProps<{
  setting: {
    title: string
    tip?: string
    list: {
      title: string
      content1: string
      content2?: string
      icon: string
    }[]
    btn?: string
  }
  itemClass?: string
  isH1?: boolean
  maxWidth?: string
}>(), {
  itemClass: 'grid-cols-3',
  maxWidth: 'max-w-1200',
  isH1: true,
})
const emits = defineEmits(['create'])
</script>

<template>
  <section class="relative flex-c flex-col gap-40 px-20 pb-120 pt-80" lt-s640="py-40 gap-24">
    <div class="relative z-2 mx-a w-100% flex-c flex-col gap-8 text-center" :class="[maxWidth]">
      <component :is="isH1 ? 'h1' : 'h2'" class="rozha text-48 text-#000 leading-62" lt-s640="text-28 leading-36">
        {{ setting.title }}
      </component>
      <p v-if="setting.tip" class="text-20 text-#5D5B66 font-300 leading-30" lt-s640="text-14 leading-21" v-html="setting.tip" />
    </div>
    <ul class="relative z-2 grid w-100% gap-24" :class="[itemClass, maxWidth]" lt-s640="grid-cols-1 gap-12">
      <li
        v-for="item in setting.list" :key="item.title"
        class="flex-col gap-20 rounded-20 bg-#fff/85 px-32 py-28 shadow-[0_30px_60px_#613C9633] backdrop-blur-10"
        lt-s640="px-20 py-16 rounded-12 gap-8"
      >
        <div class="w-100% flex-col gap-12" lt-s640="flex-row items-center">
          <div class="h-44 w-44 bg-img-def bg-contain!" lt-s640="w-28 h-28" :style="{ backgroundImage: `url(${item.icon})` }" />
          <h3 class="text-20 text-#2D3138 font-700 leading-30" lt-s640="text-16 leading-24">
            {{ item.title }}
          </h3>
        </div>
        <p class="text-16 text-#5D5B66 font-300 leading-24" lt-s640="text-12 leading-18" v-html="item.content1" />
        <p v-if="item.content2" class="text-16 text-#5D5B66 font-300 leading-24" lt-s640="text-12 leading-18" v-html="item.content2" />
      </li>
    </ul>
    <div class="absolute bottom-0 left-0 h-240 w-100% bg-cover bg-center-bottom bg-no-repeat" lt-s640="bg-center-bottom" :class="setting.btn ? 'h-414 lt-s640:h-210' : 'h-240 lt-s640:h-120'" :style="{ backgroundImage: `url(${imgPath('/images/im/step-bg.webp')})` }" />
  </section>
</template>
