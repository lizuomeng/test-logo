import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    {
      'flex-c': 'flex items-center justify-center',
      'flex-a-c': 'flex items-center',
      'flex-j-sb': 'flex justify-between',
      'flex-j-sa': 'flex justify-around',
      'flex-col': 'flex flex-col',
      'flex-item_w': 'flex-1 min-w-0',
      'flex-item_h': 'flex-1 min-h-0',
      'cursor': 'cursor-pointer',
      'ct': 'cursor-pointer transition-all-300',
      'ellipsis': 'truncate',
      'ellipsis2': 'line-clamp-2',
      'bg-img-def': 'bg-cover bg-center bg-no-repeat',
    },
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({ scale: 1.2 }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  theme: {
    colors: {
      main: '#3D39FF',
      tmain: '#2D3138',
      nmain: '#752EF0',
    },
    breakpoints: {
      s375: '375px',
      s480: '480px',
      s640: '640px',
      s768: '768px',
      s1024: '1024px',
      s1280: '1280px',
      s1366: '1366px',
      s1440: '1440px',
      s1600: '1600px',
      s1920: '1920px',
    },
    boxShadow: {
      '1': '0 0 0 1px rgba(61, 57, 255, 1)',
      'n-1': '0px 0px 16px 0px rgba(128, 142, 164, 0.16)',
      'n-2': '0px 8px 16px 0px rgba(98, 105, 116, 0.16)',
      'n-3': '0 0 0 2px #752EF0',
      'n-4': '0px 8px 24px 0px rgba(141, 48, 208, 0.16)',
      'n-5': '0 2px 8px 0 rgba(98, 105, 116, 0.16)',
      'n-6': '0 20px 40px 0 rgba(123, 97, 159, 0.12)',
    },
  },
})
