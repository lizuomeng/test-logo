import { hasInjectionContext, inject } from 'vue';
import { C as ss } from './server.mjs';
import { u as useHead, h as headSymbol, a as useSeoMeta } from '../routes/renderer.mjs';

function u(t) {
  var _a;
  const e = t || ss();
  return ((_a = e == null ? void 0 : e.ssrContext) == null ? void 0 : _a.head) || (e == null ? void 0 : e.runWithContext(() => {
    if (hasInjectionContext()) return inject(headSymbol);
  }));
}
function m(t, e = {}) {
  const n = u(e.nuxt);
  if (n) return useHead(t, { head: n, ...e });
}
function h(t, e = {}) {
  const n = u(e.nuxt);
  if (n) return useSeoMeta(t, { head: n, ...e });
}

export { h, m };
//# sourceMappingURL=v3-0K9IZe38.mjs.map
