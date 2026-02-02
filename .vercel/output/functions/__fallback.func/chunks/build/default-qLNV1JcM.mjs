import { defineComponent, unref, withCtx, openBlock, createBlock, Fragment, renderList, createVNode, renderSlot, ref, inject, reactive, provide, getCurrentInstance, shallowRef, watch, nextTick, computed, toValue, watchEffect, getCurrentScope, onScopeDispose, hasInjectionContext, useSSRContext } from 'vue';
import { m } from './v3-0K9IZe38.mjs';
import { l as Bn, p as Yf, q as Pn, m as ku, _ as Kf } from './server.mjs';
import { x } from './Logo--uTuK-tf.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderSlot } from 'vue/server-renderer';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import 'vue-router';
import 'lodash-unified';
import '@vue/shared';
import './nuxt-link-73Ny-TXC.mjs';

function St(t) {
  return getCurrentScope() ? (onScopeDispose(t), true) : false;
}
const O = /* @__PURE__ */ new WeakMap(), xt = (...t) => {
  var n;
  const e = t[0], r = (n = getCurrentInstance()) == null ? void 0 : n.proxy;
  if (r == null && !hasInjectionContext()) throw new Error("injectLocal must be called in setup");
  return r && O.has(r) && e in O.get(r) ? O.get(r)[e] : inject(...t);
};
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const bt = Object.prototype.toString, _t = (t) => bt.call(t) === "[object Object]";
function Y(t) {
  return t.endsWith("rem") ? Number.parseFloat(t) * 16 : Number.parseFloat(t);
}
function wt(t) {
  return getCurrentInstance();
}
function V(t) {
  return Array.isArray(t) ? t : [t];
}
function Ct(t, n = true, e) {
  wt() || (n ? t() : nextTick(t));
}
function kt(t, n, e) {
  return watch(t, n, { ...e, immediate: true });
}
const I = void 0;
function At(t) {
  var n;
  const e = toValue(t);
  return (n = e == null ? void 0 : e.$el) != null ? n : e;
}
function $(...t) {
  const n = [], e = () => {
    n.forEach((o) => o()), n.length = 0;
  }, r = (o, i, s, a) => (o.addEventListener(i, s, a), () => o.removeEventListener(i, s, a)), l = computed(() => {
    const o = V(toValue(t[0])).filter((i) => i != null);
    return o.every((i) => typeof i != "string") ? o : void 0;
  }), d = kt(() => {
    var o, i;
    return [(i = (o = l.value) == null ? void 0 : o.map((s) => At(s))) != null ? i : [I].filter((s) => s != null), V(toValue(l.value ? t[1] : t[0])), V(unref(l.value ? t[2] : t[1])), toValue(l.value ? t[3] : t[2])];
  }, ([o, i, s, a]) => {
    if (e(), !(o == null ? void 0 : o.length) || !(i == null ? void 0 : i.length) || !(s == null ? void 0 : s.length)) return;
    const m = _t(a) ? { ...a } : a;
    n.push(...o.flatMap((p) => i.flatMap((S) => s.map((h) => r(p, S, h, m)))));
  }, { flush: "post" }), u = () => {
    d(), e();
  };
  return St(e), u;
}
function Bt() {
  const t = shallowRef(false);
  return getCurrentInstance(), t;
}
function Ht(t) {
  const n = Bt();
  return computed(() => (n.value, !!t()));
}
const Mt = /* @__PURE__ */ Symbol("vueuse-ssr-width");
function Wt() {
  const t = hasInjectionContext() ? xt(Mt, null) : null;
  return typeof t == "number" ? t : void 0;
}
function Et(t, n = {}) {
  const { window: e = I, ssrWidth: r = Wt() } = n, l = Ht(() => e && "matchMedia" in e && typeof e.matchMedia == "function"), d = shallowRef(typeof r == "number"), u = shallowRef(), o = shallowRef(false), i = (s) => {
    o.value = s.matches;
  };
  return watchEffect(() => {
    if (d.value) {
      d.value = !l.value;
      const s = toValue(t).split(",");
      o.value = s.some((a) => {
        const m = a.includes("not all"), p = a.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/), S = a.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);
        let h = !!(p || S);
        return p && h && (h = r >= Y(p[1])), S && h && (h = r <= Y(S[1])), m ? !h : h;
      });
      return;
    }
    l.value && (u.value = e.matchMedia(toValue(t)), o.value = u.value.matches);
  }), $(u, "change", i, { passive: true }), computed(() => o.value);
}
function Lt(t = {}) {
  const { window: n = I, initialWidth: e = Number.POSITIVE_INFINITY, initialHeight: r = Number.POSITIVE_INFINITY, listenOrientation: l = true, includeScrollbar: d = true, type: u = "inner" } = t, o = shallowRef(e), i = shallowRef(r), s = () => {
    if (n) if (u === "outer") o.value = n.outerWidth, i.value = n.outerHeight;
    else if (u === "visual" && n.visualViewport) {
      const { width: m, height: p, scale: S } = n.visualViewport;
      o.value = Math.round(m * S), i.value = Math.round(p * S);
    } else d ? (o.value = n.innerWidth, i.value = n.innerHeight) : (o.value = n.document.documentElement.clientWidth, i.value = n.document.documentElement.clientHeight);
  };
  s(), Ct(s);
  const a = { passive: true };
  if ($("resize", s, a), n && u === "visual" && n.visualViewport && $(n.visualViewport, "resize", s, a), l) {
    const m = Et("(orientation: portrait)");
    watch(m, () => s());
  }
  return { width: o, height: i };
}
const z = /* @__PURE__ */ Symbol("head-component"), F = { body: { type: Boolean, default: void 0 }, tagPosition: { type: String } };
function E(t, n) {
  const e = Object.fromEntries(Object.entries(t).filter(([r, l]) => l !== void 0));
  return typeof e.body < "u" && (e.tagPosition = e.body ? "bodyClose" : "head"), typeof e.renderPriority < "u" && (e.tagPriority = e.renderPriority), { ...e, key: n };
}
function L() {
  var _a;
  const t = (_a = getCurrentInstance()) == null ? void 0 : _a.vnode.key;
  return t != null && typeof t != "symbol" ? String(t) : void 0;
}
function C() {
  return inject(z, nt, true);
}
function nt() {
  const t = inject(z, null);
  if (t) return t;
  const n = reactive({}), e = m(n), r = { input: n, entry: e, update: () => e.patch(n) };
  return provide(z, r), r;
}
const A = { accesskey: String, autocapitalize: String, autofocus: { type: Boolean, default: void 0 }, class: { type: [String, Object, Array], default: void 0 }, contenteditable: { type: Boolean, default: void 0 }, contextmenu: String, dir: String, draggable: { type: Boolean, default: void 0 }, enterkeyhint: String, exportparts: String, hidden: { type: Boolean, default: void 0 }, id: String, inputmode: String, is: String, itemid: String, itemprop: String, itemref: String, itemscope: String, itemtype: String, lang: String, nonce: String, part: String, slot: String, spellcheck: { type: Boolean, default: void 0 }, style: { type: [String, Object, Array], default: void 0 }, tabindex: String, title: String, translate: String, renderPriority: [String, Number], tagPriority: { type: [String, Number] } };
defineComponent({ name: "NoScript", inheritAttrs: false, props: { ...A, ...F, title: String }, setup(t, { slots: n }) {
  const { input: e, update: r } = C();
  e.noscript || (e.noscript = []);
  const l = e.noscript.push({}) - 1, d = L();
  return () => {
    var _a;
    const u = E(t, d), o = (_a = n.default) == null ? void 0 : _a.call(n), i = [];
    if (o) for (const s of o) s.children && i.push(s.children);
    return i.length > 0 && (u.innerHTML = i.join("")), e.noscript[l] = u, r(), null;
  };
} });
const Pt = defineComponent({ name: "Link", inheritAttrs: false, props: { ...A, ...F, as: String, crossorigin: String, disabled: Boolean, fetchpriority: String, href: String, hreflang: String, imagesizes: String, imagesrcset: String, integrity: String, media: String, prefetch: { type: Boolean, default: void 0 }, referrerpolicy: String, rel: String, sizes: String, title: String, type: String, methods: String, target: String }, setup(t) {
  const { input: n, update: e } = C();
  n.link || (n.link = []);
  const r = n.link.push({}) - 1, l = L();
  return () => (n.link[r] = E(t, l), e(), null);
} });
defineComponent({ name: "Base", inheritAttrs: false, props: { ...A, href: String, target: String }, setup(t) {
  const { input: n, update: e } = C(), r = L();
  return () => (n.base = E(t, r), e(), null);
} });
defineComponent({ name: "Title", inheritAttrs: false, setup(t, { slots: n }) {
  const { input: e, update: r } = C();
  return () => {
    var _a, _b, _c;
    const l = (_a = n.default) == null ? void 0 : _a.call(n);
    return e.title = ((_b = l == null ? void 0 : l[0]) == null ? void 0 : _b.children) ? String((_c = l == null ? void 0 : l[0]) == null ? void 0 : _c.children) : void 0, r(), null;
  };
} });
const jt = defineComponent({ name: "Meta", inheritAttrs: false, props: { ...A, charset: String, content: String, httpEquiv: String, name: String, property: String }, setup(t) {
  const { input: n, update: e } = C(), r = L();
  n.meta || (n.meta = []);
  const l = n.meta.push({}) - 1;
  return () => {
    const d = { "http-equiv": t.httpEquiv, ...E(t, r) };
    return "httpEquiv" in d && delete d.httpEquiv, n.meta[l] = d, e(), null;
  };
} });
defineComponent({ name: "Style", inheritAttrs: false, props: { ...A, ...F, type: String, media: String, nonce: String, title: String, scoped: { type: Boolean, default: void 0 } }, setup(t, { slots: n }) {
  const { input: e, update: r } = C(), l = L();
  e.style || (e.style = []);
  const d = e.style.push({}) - 1;
  return () => {
    var _a, _b, _c;
    const u = E(t, l), o = (_c = (_b = (_a = n.default) == null ? void 0 : _a.call(n)) == null ? void 0 : _b[0]) == null ? void 0 : _c.children;
    return o && (e.style[d] = u, u.textContent = o), r(), null;
  };
} });
const Nt = defineComponent({ name: "Head", inheritAttrs: false, setup: (t, n) => (nt(), () => {
  var _a, _b;
  return (_b = (_a = n.slots).default) == null ? void 0 : _b.call(_a);
}) }), Ot = defineComponent({ name: "Html", inheritAttrs: false, props: { ...A, manifest: String, version: String, xmlns: String }, setup(t, n) {
  const { input: e, update: r } = C();
  return () => {
    var _a, _b;
    return e.htmlAttrs = { ...t, ...n.attrs }, r(), (_b = (_a = n.slots).default) == null ? void 0 : _b.call(_a);
  };
} }), Vt = defineComponent({ name: "Body", inheritAttrs: false, props: A, setup(t, n) {
  const { input: e, update: r } = C();
  return () => {
    var _a, _b;
    return e.bodyAttrs = { ...t, ...n.attrs }, r(), (_b = (_a = n.slots).default) == null ? void 0 : _b.call(_a);
  };
} }), q = defineComponent({ __name: "n-header", __ssrInlineRender: true, setup(t) {
  const { t: n, locale: e } = Bn();
  return ku(), Lt(), ref(false), (r, l, d, u) => {
    const o = Kf, i = x;
    l(ssrRenderComponent(o, u, { fallback: withCtx((s, a, m, p) => {
      if (a) a(`<header class="sticky left-0 top-0 z-200 w-100% bg-#fff"${p}><div class="relative box-border h-[calc(var(--n-header-height))] flex-a-c flex-j-sb px-24 shadow-n-1"${p}>`), a(ssrRenderComponent(i, null, null, m, p)), a("</div></header>");
      else return [createVNode("header", { class: "sticky left-0 top-0 z-200 w-100% bg-#fff" }, [createVNode("div", { class: "relative box-border h-[calc(var(--n-header-height))] flex-a-c flex-j-sb px-24 shadow-n-1" }, [createVNode(i)])])];
    }) }, d));
  };
} }), J = q.setup;
q.setup = (t, n) => {
  const e = useSSRContext();
  return (e.modules || (e.modules = /* @__PURE__ */ new Set())).add("components/layout/n-header.vue"), J ? J(t, n) : void 0;
};
const rt = defineComponent({ __name: "default", __ssrInlineRender: true, setup(t) {
  const { t: n } = Bn(), e = Yf({});
  return Pn(), (r, l, d, u) => {
    const o = Ot, i = Nt, s = Pt, a = jt, m = Vt, p = q;
    l(`<div${ssrRenderAttrs(u)}>`), l(ssrRenderComponent(o, { lang: unref(e).htmlAttrs.lang, dir: unref(e).htmlAttrs.dir }, { default: withCtx((S, h, D, G) => {
      if (h) h(ssrRenderComponent(i, null, { default: withCtx((g, f, W, k) => {
        if (f) f("<!--[-->"), ssrRenderList(unref(e).link, (c) => {
          f(ssrRenderComponent(s, { id: c.id, rel: c.rel, href: c.href, hreflang: c.hreflang }, null, W, k));
        }), f("<!--]--><!--[-->"), ssrRenderList(unref(e).meta, (c) => {
          f(ssrRenderComponent(a, { id: c.id, property: c.property, content: c.content }, null, W, k));
        }), f("<!--]-->");
        else return [(openBlock(true), createBlock(Fragment, null, renderList(unref(e).link, (c) => (openBlock(), createBlock(s, { key: c.id, id: c.id, rel: c.rel, href: c.href, hreflang: c.hreflang }, null, 8, ["id", "rel", "href", "hreflang"]))), 128)), (openBlock(true), createBlock(Fragment, null, renderList(unref(e).meta, (c) => (openBlock(), createBlock(a, { key: c.id, id: c.id, property: c.property, content: c.content }, null, 8, ["id", "property", "content"]))), 128))];
      }), _: 1 }, D, G)), h(ssrRenderComponent(m, null, { default: withCtx((g, f, W, k) => {
        if (f) f(`<div class="text-14 flex flex-col"${k}>`), f(ssrRenderComponent(p, null, null, W, k)), f(`<main class="flex-item_h flex flex-col"${k}>`), ssrRenderSlot(r.$slots, "default", {}, null, f, W, k), f("</main></div>");
        else return [createVNode("div", { class: "text-14 flex flex-col" }, [createVNode(p), createVNode("main", { class: "flex-item_h flex flex-col" }, [renderSlot(r.$slots, "default")])])];
      }), _: 3 }, D, G));
      else return [createVNode(i, null, { default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList(unref(e).link, (g) => (openBlock(), createBlock(s, { key: g.id, id: g.id, rel: g.rel, href: g.href, hreflang: g.hreflang }, null, 8, ["id", "rel", "href", "hreflang"]))), 128)), (openBlock(true), createBlock(Fragment, null, renderList(unref(e).meta, (g) => (openBlock(), createBlock(a, { key: g.id, id: g.id, property: g.property, content: g.content }, null, 8, ["id", "property", "content"]))), 128))]), _: 1 }), createVNode(m, null, { default: withCtx(() => [createVNode("div", { class: "text-14 flex flex-col" }, [createVNode(p), createVNode("main", { class: "flex-item_h flex flex-col" }, [renderSlot(r.$slots, "default")])])]), _: 3 })];
    }), _: 3 }, d)), l("</div>");
  };
} }), U = rt.setup;
rt.setup = (t, n) => {
  const e = useSSRContext();
  return (e.modules || (e.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue"), U ? U(t, n) : void 0;
};

export { rt as default };
//# sourceMappingURL=default-qLNV1JcM.mjs.map
