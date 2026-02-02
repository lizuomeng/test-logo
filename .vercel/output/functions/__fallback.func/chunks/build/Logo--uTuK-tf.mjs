import { m as ku, r as D, s as ct, t as Wf } from './server.mjs';
import { defineComponent, mergeProps, withCtx, createVNode, computed, h, useSSRContext } from 'vue';
import { D as D$1 } from './nuxt-link-73Ny-TXC.mjs';
import { ssrRenderComponent } from 'vue/server-renderer';

const i = D$1({ ...Wf, componentName: "NuxtLinkLocale" }), C = defineComponent({ name: "NuxtLinkLocale", props: { ...i.props, locale: { type: String, default: void 0, required: false } }, setup(t, { slots: n }) {
  const o = ku(), a = computed(() => {
    var _a;
    const e = (_a = t.to) != null ? _a : t.href;
    return e != null ? o(e, t.locale) : e;
  }), s = computed(() => {
    var _a;
    if (t.external || t.target && t.target !== "_self") return true;
    const e = (_a = t.to) != null ? _a : t.href;
    return D(e) ? false : e === "" || e == null || ct(e, { acceptRelative: true });
  }), c = () => {
    const e = { ...t };
    return s.value || (e.to = a.value), delete e.href, delete e.locale, e;
  };
  return () => h(i, c(), n.default);
} }), x = defineComponent({ __name: "Logo", __ssrInlineRender: true, props: { mustShowLogoLabel: { type: Boolean, default: false } }, setup(t) {
  return (n, o, a, s) => {
    o(ssrRenderComponent(C, mergeProps({ to: "/", class: "flex-a-c gap-8 no-underline" }, s), { default: withCtx((e, u, P, r) => {
      if (u) u(`<div class="h-32 w-32 rounded-8 from-#5c40ff to-#ba42f6 bg-gradient-to-br flex-c"${r}><span class="text-18 text-#fff font-700"${r}>A</span></div><span class="text-16 text-#111827 font-700 whitespace-nowrap"${r}>AI Logo Creator</span>`);
      else return [createVNode("div", { class: "h-32 w-32 rounded-8 from-#5c40ff to-#ba42f6 bg-gradient-to-br flex-c" }, [createVNode("span", { class: "text-18 text-#fff font-700" }, "A")]), createVNode("span", { class: "text-16 text-#111827 font-700 whitespace-nowrap" }, "AI Logo Creator")];
    }), _: 1 }, a));
  };
} }), d = x.setup;
x.setup = (t, n) => {
  const o = useSSRContext();
  return (o.modules || (o.modules = /* @__PURE__ */ new Set())).add("components/base/Logo.vue"), d ? d(t, n) : void 0;
};

export { C, x };
//# sourceMappingURL=Logo--uTuK-tf.mjs.map
