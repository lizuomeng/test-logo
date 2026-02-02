import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';

const d = defineComponent({ __name: "multiFeature", __ssrInlineRender: true, props: { setting: {} }, setup(l) {
  const e = [{ bg: "bg-#F3E8FF", text: "color-#8B5CF6" }, { bg: "bg-#FCE7F3", text: "color-#EC4899" }, { bg: "bg-#FEF3C7", text: "color-#F59E0B" }, { bg: "bg-#D1FAE5", text: "color-#10B981" }, { bg: "bg-#DBEAFE", text: "color-#3B82F6" }, { bg: "bg-#FEE2E2", text: "color-#EF4444" }, { bg: "bg-#E0E7FF", text: "color-#6366F1" }, { bg: "bg-#CCFBF1", text: "color-#14B8A6" }, { bg: "bg-#FED7AA", text: "color-#F97316" }];
  return (i, t, p, g) => {
    var _a;
    t(`<section${ssrRenderAttrs(mergeProps({ class: "relative flex-c flex-col gap-40 bg-#fff py-80", "lt-s640": "py-40 gap-24" }, g))}><div class="relative z-2 mx-a box-border max-w-1200 w-100% flex-c flex-col gap-8 px-20 text-center"><h2 class="rozha text-48 text-#000 leading-62" lt-s640="text-28 leading-36">${ssrInterpolate(l.setting.title)}</h2>`), l.setting.tip ? t(`<p class="text-20 text-#5D5B66 font-300 leading-30" lt-s640="text-14 leading-21">${(_a = l.setting.tip) != null ? _a : ""}</p>`) : t("<!---->"), t('</div><div class="grid grid-cols-3 mx-a box-border max-w-1200 w-100% gap-20" lt-s640="grid-cols-1 px-20"><!--[-->'), ssrRenderList(l.setting.list, (s, n) => {
      t(`<div class="box-border flex-col gap-20 b-1 b-#E4E4EF rounded-8 b-solid bg-#fff p-24" hover="b-#752EF0 shadow-[0px_30px_60px_0px_#613C9633]"><div class="flex-a-c gap-16"><div class="${ssrRenderClass([e[n % e.length].bg, "h-56 w-56 flex-c rounded-12"])}">`), s.icon2 ? t(`<i class="${ssrRenderClass([[s.icon2, e[n % e.length].text], "iconfont2 text-32"])}"></i>`) : t(`<span class="${ssrRenderClass([e[n % e.length].text, "text-24"])}">\u2605</span>`), t(`</div><h3 class="text-20 text-#000 font-700 leading-24">${ssrInterpolate(s.title)}</h3></div><div class="w-100% flex-col gap-16"><!--[-->`), ssrRenderList(s.children, (o) => {
        var _a2;
        t('<div class="flex">'), o.title || o.content ? t(`<!--[--><div class="h-20 w-20 flex-c"><div class="h-4 w-4 rounded-50% bg-#5D5B66"></div></div><div class="flex-item_w flex-col gap-4"><p class="text-14 text-#2D3138 font-500 leading-20">${ssrInterpolate(o.title)}</p><div class="text-12 text-#5D5B66 font-300 leading-18">${(_a2 = o.content) != null ? _a2 : ""}</div></div><!--]-->`) : t("<!---->"), t("</div>");
      }), t("<!--]--></div></div>");
    }), t("<!--]--></div></section>");
  };
} }), x = d.setup;
d.setup = (l, e) => {
  const i = useSSRContext();
  return (i.modules || (i.modules = /* @__PURE__ */ new Set())).add("components/design/seo/base/multiFeature.vue"), x ? x(l, e) : void 0;
};

export { d as default };
//# sourceMappingURL=multiFeature-Be5YvbR1.mjs.map
