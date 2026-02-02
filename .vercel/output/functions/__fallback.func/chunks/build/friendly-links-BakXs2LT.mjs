import { defineComponent, computed, unref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { l as Bn } from './server.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import 'vue-router';
import 'lodash-unified';
import '@vue/shared';

const d = defineComponent({ __name: "friendly-links", __ssrInlineRender: true, setup(o) {
  const { t: n, locale: t } = Bn(), c = [{ link: "https://estatepass.ai", alt: "EstatePass", language: "en" }, { link: "https://gongin.kr", alt: "Gongin", language: "ko" }, { link: "https://takkenai.jp", alt: "Takkenai", language: "jp" }, { link: "https://twelve.tools", alt: "Featured on Twelve Tools", language: "all" }], a = computed(() => c.filter((r) => r.language === t.value || r.language === "all"));
  return (r, e, h, u) => {
    unref(a).length > 0 ? (e(`<section${ssrRenderAttrs(mergeProps({ class: "py-40 px-20", "lt-s640": "py-32" }, u))}><div class="mx-a max-w-1200 w-full"><h3 class="text-40 text-#000 leading-52 text-center rozha mb-40" lt-s640="text-24 leading-30 mb-24">${ssrInterpolate(unref(n)("layouts.footer.Friendly Links"))}</h3><div class="flex flex-wrap items-center justify-center gap-32" lt-s640="gap-20"><!--[-->`), ssrRenderList(unref(a), (s) => {
      e(`<a class="block transition-all-300 opacity-80 hover:opacity-100 text-14 text-#5D5B66 no-underline hover:text-nmain"${ssrRenderAttr("href", s.link)}${ssrRenderAttr("title", s.alt)} target="_blank" rel="noopener">${ssrInterpolate(s.alt)}</a>`);
    }), e("<!--]--></div></div></section>")) : e("<!---->");
  };
} }), m = d.setup;
d.setup = (o, n) => {
  const t = useSSRContext();
  return (t.modules || (t.modules = /* @__PURE__ */ new Set())).add("components/im/friendly-links.vue"), m ? m(o, n) : void 0;
};

export { d as default };
//# sourceMappingURL=friendly-links-BakXs2LT.mjs.map
