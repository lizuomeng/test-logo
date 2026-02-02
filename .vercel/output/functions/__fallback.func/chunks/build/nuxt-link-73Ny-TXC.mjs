import { defineComponent, shallowRef, h, resolveComponent, computed } from 'vue';
import { v as at, x as oo, k as Xe, s as ct, y as ws, z as ut, o as Pe, u as B, A as yt, B as Rs, t as Wf } from './server.mjs';

const O = (...r) => r.find((d) => d !== void 0);
function D(r) {
  const d = r.componentName || "NuxtLink";
  function p(e) {
    return typeof e == "string" && e.startsWith("#");
  }
  function S(e, l, c) {
    const u = c != null ? c : r.trailingSlash;
    if (!e || u !== "append" && u !== "remove") return e;
    if (typeof e == "string") return x(e, u);
    const n = "path" in e && e.path !== void 0 ? e.path : l(e).path;
    return { ...e, name: void 0, path: x(n, u) };
  }
  function q(e) {
    var _a, _b, _c;
    const l = at(), c = Xe(), u = computed(() => !!e.target && e.target !== "_self"), n = computed(() => {
      const a = e.to || e.href || "";
      return typeof a == "string" && ct(a, { acceptRelative: true });
    }), v = resolveComponent("RouterLink"), h = v && typeof v != "string" ? v.useLink : void 0, i = computed(() => {
      if (e.external) return true;
      const a = e.to || e.href || "";
      return typeof a == "object" ? false : a === "" || n.value;
    }), t = computed(() => {
      const a = e.to || e.href || "";
      return i.value ? a : S(a, l.resolve, e.trailingSlash);
    }), g = i.value ? void 0 : h == null ? void 0 : h({ ...e, to: t }), m = computed(() => {
      var _a2, _b2, _c2;
      const a = (_a2 = e.trailingSlash) != null ? _a2 : r.trailingSlash;
      if (!t.value || n.value || p(t.value)) return t.value;
      if (i.value) {
        const f = typeof t.value == "object" && "path" in t.value ? ws(t.value) : t.value, y = typeof f == "object" ? l.resolve(f).href : f;
        return x(y, a);
      }
      return typeof t.value == "object" ? (_c2 = (_b2 = l.resolve(t.value)) == null ? void 0 : _b2.href) != null ? _c2 : null : x(ut(c.app.baseURL, t.value), a);
    });
    return { to: t, hasTarget: u, isAbsoluteUrl: n, isExternal: i, href: m, isActive: (_a = g == null ? void 0 : g.isActive) != null ? _a : computed(() => t.value === l.currentRoute.value.path), isExactActive: (_b = g == null ? void 0 : g.isExactActive) != null ? _b : computed(() => t.value === l.currentRoute.value.path), route: (_c = g == null ? void 0 : g.route) != null ? _c : computed(() => l.resolve(t.value)), async navigate(a) {
      await Pe(m.value, { replace: e.replace, external: i.value || u.value });
    } };
  }
  return defineComponent({ name: d, props: { to: { type: [String, Object], default: void 0, required: false }, href: { type: [String, Object], default: void 0, required: false }, target: { type: String, default: void 0, required: false }, rel: { type: String, default: void 0, required: false }, noRel: { type: Boolean, default: void 0, required: false }, prefetch: { type: Boolean, default: void 0, required: false }, prefetchOn: { type: [String, Object], default: void 0, required: false }, noPrefetch: { type: Boolean, default: void 0, required: false }, activeClass: { type: String, default: void 0, required: false }, exactActiveClass: { type: String, default: void 0, required: false }, prefetchedClass: { type: String, default: void 0, required: false }, replace: { type: Boolean, default: void 0, required: false }, ariaCurrentValue: { type: String, default: void 0, required: false }, external: { type: Boolean, default: void 0, required: false }, custom: { type: Boolean, default: void 0, required: false }, trailingSlash: { type: String, default: void 0, required: false } }, useLink: q, setup(e, { slots: l }) {
    const c = at(), { to: u, href: n, navigate: v, isExternal: h$1, hasTarget: i, isAbsoluteUrl: t } = q(e);
    shallowRef(false);
    const g = void 0, m = void 0;
    async function a(f = B()) {
    }
    return () => {
      var _a;
      if (!h$1.value && !i.value && !p(u.value)) {
        const o = { ref: m, to: u.value, activeClass: e.activeClass || r.activeClass, exactActiveClass: e.exactActiveClass || r.exactActiveClass, replace: e.replace, ariaCurrentValue: e.ariaCurrentValue, custom: e.custom };
        return e.custom || (o.rel = e.rel || void 0), h(resolveComponent("RouterLink"), o, l.default);
      }
      const f = e.target || null, y = O(e.noRel ? "" : e.rel, r.externalRelAttribute, t.value || i.value ? "noopener noreferrer" : "") || null;
      return e.custom ? l.default ? l.default({ href: n.value, navigate: v, prefetch: a, get route() {
        if (!n.value) return;
        const o = new URL(n.value, "http://localhost");
        return { path: o.pathname, fullPath: o.pathname, get query() {
          return oo(o.search);
        }, hash: o.hash, params: {}, name: void 0, matched: [], redirectedFrom: void 0, meta: {}, href: n.value };
      }, rel: y, target: f, isExternal: h$1.value || i.value, isActive: false, isExactActive: false }) : null : h("a", { ref: g, href: n.value || null, rel: y, target: f, onClick: (o) => {
        if (!(h$1.value || i.value)) return o.preventDefault(), e.replace ? c.replace(n.value) : c.push(n.value);
      } }, (_a = l.default) == null ? void 0 : _a.call(l));
    };
  } });
}
const V = D(Wf);
function x(r, d) {
  const p = d === "append" ? yt : Rs;
  return ct(r) && !r.startsWith("http") ? r : p(r, true);
}

export { D, V };
//# sourceMappingURL=nuxt-link-73Ny-TXC.mjs.map
