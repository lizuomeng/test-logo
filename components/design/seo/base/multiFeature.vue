<script setup lang='ts'>
interface ItemType {
  title: string
  icon2?: string
  topTip?: string
  bottomTip?: string
  children: {
    title: string
    content: string
  }[]
}

const props = defineProps<{
  setting: {
    title: string
    tip?: string
    list: ItemType[]
  }
}>()

const iconColors = [
  { bg: 'bg-#F3E8FF', text: 'color-#8B5CF6' },
  { bg: 'bg-#FCE7F3', text: 'color-#EC4899' },
  { bg: 'bg-#FEF3C7', text: 'color-#F59E0B' },
  { bg: 'bg-#D1FAE5', text: 'color-#10B981' },
  { bg: 'bg-#DBEAFE', text: 'color-#3B82F6' },
  { bg: 'bg-#FEE2E2', text: 'color-#EF4444' },
  { bg: 'bg-#E0E7FF', text: 'color-#6366F1' },
  { bg: 'bg-#CCFBF1', text: 'color-#14B8A6' },
  { bg: 'bg-#FED7AA', text: 'color-#F97316' },
]
</script>

<template>
  <section class="relative flex-c flex-col gap-40 bg-#fff py-80" lt-s640="py-40 gap-24">
    <div class="relative z-2 mx-a box-border max-w-1200 w-100% flex-c flex-col gap-8 px-20 text-center">
      <h2 class="rozha text-48 text-#000 leading-62" lt-s640="text-28 leading-36">
        {{ setting.title }}
      </h2>
      <p v-if="setting.tip" class="text-20 text-#5D5B66 font-300 leading-30" lt-s640="text-14 leading-21" v-html="setting.tip" />
    </div>
    <div class="grid grid-cols-3 mx-a box-border max-w-1200 w-100% gap-20" lt-s640="grid-cols-1 px-20">
      <div
        v-for="(item, index) in setting.list"
        :key="item.title"
        class="box-border flex-col gap-20 b-1 b-#E4E4EF rounded-8 b-solid bg-#fff p-24"
        hover="b-#752EF0 shadow-[0px_30px_60px_0px_#613C9633]"
      >
        <div class="flex-a-c gap-16">
          <div class="h-56 w-56 flex-c rounded-12" :class="iconColors[index % iconColors.length].bg">
            <i v-if="item.icon2" class="iconfont2 text-32" :class="[item.icon2, iconColors[index % iconColors.length].text]" />
            <span v-else class="text-24" :class="iconColors[index % iconColors.length].text">&#9733;</span>
          </div>
          <h3 class="text-20 text-#000 font-700 leading-24">
            {{ item.title }}
          </h3>
        </div>
        <div class="w-100% flex-col gap-16">
          <div v-for="child in item.children" :key="child.title" class="flex">
            <template v-if="child.title || child.content">
              <div class="h-20 w-20 flex-c">
                <div class="h-4 w-4 rounded-50% bg-#5D5B66" />
              </div>
              <div class="flex-item_w flex-col gap-4">
                <p class="text-14 text-#2D3138 font-500 leading-20">{{ child.title }}</p>
                <div class="text-12 text-#5D5B66 font-300 leading-18" v-html="child.content" />
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
