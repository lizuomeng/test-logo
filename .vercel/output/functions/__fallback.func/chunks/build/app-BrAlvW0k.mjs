import { useSSRContext, mergeProps } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { s } from './_plugin-vue_export-helper-DlAUqK2U.mjs';

const t = {};
function m(r, e, s, p) {
  e(`<div${ssrRenderAttrs(mergeProps({ class: "flex-c min-h-80vh" }, p))}><div class="text-center"><h1 class="rozha text-48 text-#111827 mb-16">AI Logo Creator</h1><p class="text-18 color-#6B7280">App page placeholder</p></div></div>`);
}
const o = t.setup;
t.setup = (r, e) => {
  const s = useSSRContext();
  return (s.modules || (s.modules = /* @__PURE__ */ new Set())).add("pages/app.vue"), o ? o(r, e) : void 0;
};
const u = s(t, [["ssrRender", m]]);

export { u as default };
//# sourceMappingURL=app-BrAlvW0k.mjs.map
