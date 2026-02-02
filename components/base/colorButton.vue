<script setup lang='ts'>
const props = withDefaults(defineProps<{
  icon?: string
  label?: string
  disabled?: boolean
  iconClass?: string
}>(), {
  icon: '',
  disabled: false,
})
const emits = defineEmits(['click'])

const colorButton = ref()
function handleButtonCursorMove(e: any) {
  if (props.disabled) return
  const position = useElementBounding(colorButton)
  const x = e.clientX - position.x.value
  const y = e.clientY - position.y.value
  colorButton.value.style.setProperty('--x', `${x}px`)
  colorButton.value.style.setProperty('--y', `${y}px`)
}

function handleClick() {
  if (props.disabled) return
  emits('click')
}
</script>

<template>
  <button
    ref="colorButton"
    class="relative box-border h-48 flex-c overflow-hidden rounded-12 text-18 text-#fff leading-22"
    :class="disabled ? 'cursor-not-allowed bg-#EBE5F8 hover:shadow-none!' : 'color-bg cursor'"
    hover="shadow-[0px_8px_24px_0px_#8D30D029]"
    @mousemove="handleButtonCursorMove"
    @click="handleClick"
  >
    <div class="relative z-2 h-100% flex-c gap-10">
      <slot>
        <span class="font-700">{{ label }}</span>
      </slot>
    </div>
  </button>
</template>

<style scoped lang='scss'>
.color-bg {
  background: linear-gradient(90deg, #5c40ff 0%, #ba42f6 41.83%, #ff41cf 73.56%, #ff208c 100%);

  &::before {
    --size: 0;
    content: '';
    position: absolute;
    left: var(--x);
    top: var(--y);
    width: var(--size);
    height: var(--size);
    background: radial-gradient(circle closest-side, #ba42f6, transparent);
    transform: translate(-50%, -50%);
    transition: width 0.2s ease, height 0.2s ease;
  }

  &:hover::before {
    --size: 300px;
  }
}
</style>
