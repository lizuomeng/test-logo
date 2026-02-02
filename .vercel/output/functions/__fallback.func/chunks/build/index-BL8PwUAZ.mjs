import { defineComponent, openBlock, createElementBlock, createElementVNode, markRaw, computed, mergeProps, unref, renderSlot, useAttrs, useSlots, shallowRef, ref, watch, nextTick, toRef, normalizeStyle, normalizeClass, createCommentVNode, Fragment, createBlock, withCtx, resolveDynamicComponent, withModifiers, toDisplayString, useSSRContext, createVNode, createTextVNode, defineAsyncComponent, isRef, getCurrentInstance, inject, getCurrentScope, onScopeDispose, toValue, onServerPrefetch, onMounted, reactive } from 'vue';
import { e as ca, g as of, d as ye, i as Xf, w as pf, h as Gu, l as Bn, m as ku, n as _o, j as qf, k as Xe$1, o as Pe, u as B, a as Hf, c as je$1, f as Bf, b as Gf } from './server.mjs';
import { isNil, pick, fromPairs } from 'lodash-unified';
import { NOOP, isString, isFunction, isPlainObject } from '@vue/shared';
import { C, x } from './Logo--uTuK-tf.mjs';
import { ssrRenderAttrs, ssrRenderSlot, ssrInterpolate, ssrRenderClass, ssrRenderVNode, ssrRenderList, ssrRenderStyle, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { s } from './_plugin-vue_export-helper-DlAUqK2U.mjs';
import { V } from './nuxt-link-73Ny-TXC.mjs';
import { A as hash } from '../nitro/nitro.mjs';
import { debounce } from 'perfect-debounce';
import { h } from './v3-0K9IZe38.mjs';
import { times, compact } from 'lodash-es';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import 'vue-router';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';

const ha = (e) => e === "defer" || e === false;
function Bt(...e) {
  var _a2, _b, _c, _d, _e, _f, _g;
  const t = typeof e[e.length - 1] == "string" ? e.pop() : void 0;
  Ft(e[0], e[1]) && e.unshift(t);
  let [o, a, s = {}] = e;
  const l = computed(() => toValue(o));
  if (typeof l.value != "string") throw new TypeError("[nuxt] [useAsyncData] key must be a string.");
  if (typeof a != "function") throw new TypeError("[nuxt] [useAsyncData] handler must be a function.");
  const n = B();
  (_a2 = s.server) != null ? _a2 : s.server = true, (_b = s.default) != null ? _b : s.default = wa, (_c = s.getCachedData) != null ? _c : s.getCachedData = St, (_d = s.lazy) != null ? _d : s.lazy = false, (_e = s.immediate) != null ? _e : s.immediate = true, (_f = s.deep) != null ? _f : s.deep = Hf.deep, (_g = s.dedupe) != null ? _g : s.dedupe = "cancel", s._functionName, n._asyncData[l.value];
  function d() {
    var _a3;
    const v = { cause: "initial", dedupe: s.dedupe };
    return ((_a3 = n._asyncData[l.value]) == null ? void 0 : _a3._init) || (v.cachedData = s.getCachedData(l.value, n, { cause: "initial" }), n._asyncData[l.value] = ya(n, l.value, a, s, v.cachedData)), () => n._asyncData[l.value].execute(v);
  }
  const b = d(), $ = n._asyncData[l.value];
  if ($._deps++, s.server !== false && n.payload.serverRendered && s.immediate) {
    const v = b();
    getCurrentInstance() ? onServerPrefetch(() => v) : n.hook("app:created", async () => {
      await v;
    });
  }
  const m = { data: Fe(() => {
    var _a3;
    return (_a3 = n._asyncData[l.value]) == null ? void 0 : _a3.data;
  }), pending: Fe(() => {
    var _a3;
    return (_a3 = n._asyncData[l.value]) == null ? void 0 : _a3.pending;
  }), status: Fe(() => {
    var _a3;
    return (_a3 = n._asyncData[l.value]) == null ? void 0 : _a3.status;
  }), error: Fe(() => {
    var _a3;
    return (_a3 = n._asyncData[l.value]) == null ? void 0 : _a3.error;
  }), refresh: (...v) => {
    var _a3;
    return ((_a3 = n._asyncData[l.value]) == null ? void 0 : _a3._init) ? n._asyncData[l.value].execute(...v) : d()();
  }, execute: (...v) => m.refresh(...v), clear: () => {
    const v = n._asyncData[l.value];
    if (v == null ? void 0 : v._abortController) try {
      v._abortController.abort(new DOMException("AsyncData aborted by user.", "AbortError"));
    } finally {
      v._abortController = void 0;
    }
    Dt(n, l.value);
  } }, C = Promise.resolve(n._asyncDataPromises[l.value]).then(() => m);
  return Object.assign(C, m), C;
}
function Fe(e) {
  return computed({ get() {
    var _a2;
    return (_a2 = e()) == null ? void 0 : _a2.value;
  }, set(t) {
    const o = e();
    o && (o.value = t);
  } });
}
function ct(...e) {
  const t = typeof e[e.length - 1] == "string" ? e.pop() : void 0;
  Ft(e[0], e[1]) && e.unshift(t);
  const [o, a, s = {}] = e;
  return Bt(o, a, { ...s, lazy: true }, null);
}
function Ft(e, t) {
  return !(typeof e == "string" || typeof e == "object" && e !== null || typeof e == "function" && typeof t == "function");
}
function Dt(e, t) {
  t in e.payload.data && (e.payload.data[t] = void 0), t in e.payload._errors && (e.payload._errors[t] = Hf.errorValue), e._asyncData[t] && (e._asyncData[t].data.value = void 0, e._asyncData[t].error.value = Hf.errorValue, e._asyncData[t].pending.value = false, e._asyncData[t].status.value = "idle"), t in e._asyncDataPromises && (e._asyncDataPromises[t] = void 0);
}
function ba(e, t) {
  const o = {};
  for (const a of t) o[a] = e[a];
  return o;
}
function ya(e, t, o, a, s) {
  var _a2, _b;
  (_b = (_a2 = e.payload._errors)[t]) != null ? _b : _a2[t] = Hf.errorValue;
  const l = a.getCachedData !== St, n = o , d = a.deep ? ref : shallowRef, b = s != null, $ = e.hook("app:data:refresh", async (m) => {
    (!m || m.includes(t)) && await u.execute({ cause: "refresh:hook" });
  }), u = { data: d(b ? s : a.default()), pending: shallowRef(!b), error: toRef(e.payload._errors, t), status: shallowRef("idle"), execute: (...m) => {
    var _a3, _b2;
    const [C, v = void 0] = m, w = C && v === void 0 && typeof C == "object" ? C : {};
    if (e._asyncDataPromises[t] && ha((_a3 = w.dedupe) != null ? _a3 : a.dedupe)) return e._asyncDataPromises[t];
    if (w.cause === "initial" || e.isHydrating) {
      const D = "cachedData" in w ? w.cachedData : a.getCachedData(t, e, { cause: (_b2 = w.cause) != null ? _b2 : "refresh:manual" });
      if (D != null) return e.payload.data[t] = u.data.value = D, u.error.value = Hf.errorValue, u.status.value = "success", Promise.resolve(D);
    }
    u.pending.value = true, u._abortController && u._abortController.abort(new DOMException("AsyncData request cancelled by deduplication", "AbortError")), u._abortController = new AbortController(), u.status.value = "pending";
    const f = new AbortController(), j = new Promise((D, S) => {
      var _a4, _b3;
      try {
        const T = (_a4 = w.timeout) != null ? _a4 : a.timeout, A = xa([(_b3 = u._abortController) == null ? void 0 : _b3.signal, w == null ? void 0 : w.signal], f.signal, T);
        if (A.aborted) {
          const i = A.reason;
          S(i instanceof Error ? i : new DOMException(String(i != null ? i : "Aborted"), "AbortError"));
          return;
        }
        return A.addEventListener("abort", () => {
          const i = A.reason;
          S(i instanceof Error ? i : new DOMException(String(i != null ? i : "Aborted"), "AbortError"));
        }, { once: true, signal: f.signal }), Promise.resolve(n(e, { signal: A })).then(D, S);
      } catch (T) {
        S(T);
      }
    }).then(async (D) => {
      let S = D;
      a.transform && (S = await a.transform(D)), a.pick && (S = ba(S, a.pick)), e.payload.data[t] = S, u.data.value = S, u.error.value = Hf.errorValue, u.status.value = "success";
    }).catch((D) => {
      var _a4;
      if (e._asyncDataPromises[t] && e._asyncDataPromises[t] !== j || ((_a4 = u._abortController) == null ? void 0 : _a4.signal.aborted)) return e._asyncDataPromises[t];
      if (typeof DOMException < "u" && D instanceof DOMException && D.name === "AbortError") return u.status.value = "idle", e._asyncDataPromises[t];
      u.error.value = je$1(D), u.data.value = unref(a.default()), u.status.value = "error";
    }).finally(() => {
      u.pending.value = false, f.abort(), delete e._asyncDataPromises[t];
    });
    return e._asyncDataPromises[t] = j, e._asyncDataPromises[t];
  }, _execute: debounce((...m) => u.execute(...m), 0, { leading: true }), _default: a.default, _deps: 0, _init: true, _hash: void 0, _off: () => {
    var _a3;
    $(), ((_a3 = e._asyncData[t]) == null ? void 0 : _a3._init) && (e._asyncData[t]._init = false), l || nextTick(() => {
      var _a4;
      ((_a4 = e._asyncData[t]) == null ? void 0 : _a4._init) || (Dt(e, t), u.execute = () => Promise.resolve(), u.data.value = Hf.value);
    });
  } };
  return u;
}
const wa = () => Hf.value, St = (e, t, o) => {
  if (t.isHydrating) return t.payload.data[e];
  if (o.cause !== "refresh:manual" && o.cause !== "refresh:hook") return t.static.data[e];
};
function xa(e, t, o) {
  var _a2, _b, _c;
  const a = e.filter((n) => !!n);
  if (typeof o == "number" && o >= 0) {
    const n = (_a2 = AbortSignal.timeout) == null ? void 0 : _a2.call(AbortSignal, o);
    n && a.push(n);
  }
  if (AbortSignal.any) return AbortSignal.any(a);
  const s = new AbortController();
  for (const n of a) if (n.aborted) {
    const d = (_b = n.reason) != null ? _b : new DOMException("Aborted", "AbortError");
    try {
      s.abort(d);
    } catch {
      s.abort();
    }
    return s.signal;
  }
  const l = () => {
    var _a3, _b2;
    const d = (_b2 = (_a3 = a.find((b) => b.aborted)) == null ? void 0 : _a3.reason) != null ? _b2 : new DOMException("Aborted", "AbortError");
    try {
      s.abort(d);
    } catch {
      s.abort();
    }
  };
  for (const n of a) (_c = n.addEventListener) == null ? void 0 : _c.call(n, "abort", l, { once: true, signal: t });
  return s.signal;
}
function $a(e, t, o) {
  const [a = {}, s] = typeof t == "string" ? [{}, t] : [t, o], l = computed(() => toValue(e)), n = computed(() => toValue(a.key) || "$f" + hash([s, typeof l.value == "string" ? l.value : "", ...Ca(a)]));
  if (!a.baseURL && typeof l.value == "string" && l.value[0] === "/" && l.value[1] === "/") throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');
  const { server: d, lazy: b, default: $, transform: u, pick: m, watch: C, immediate: v, getCachedData: w, deep: f, dedupe: j, timeout: D, ...S } = a, T = reactive({ ...Bf, ...S, cache: typeof a.cache == "boolean" ? void 0 : a.cache }), A = { server: d, lazy: b, default: $, transform: u, pick: m, immediate: v, getCachedData: w, deep: f, dedupe: j, timeout: D, watch: C === false ? [] : [...C || [], T] };
  if (!v) {
    let p = function() {
      A.immediate = true;
    };
    watch(n, p, { flush: "sync", once: true }), watch([...C || [], T], p, { flush: "sync", once: true });
  }
  return Bt(C === false ? n.value : n, (p, { signal: E }) => {
    let ie = a.$fetch || globalThis.$fetch;
    return a.$fetch || typeof l.value == "string" && l.value[0] === "/" && (!toValue(a.baseURL) || toValue(a.baseURL)[0] === "/") && (ie = Gf()), ie(l.value, { signal: E, ...T });
  }, A);
}
function Ca(e) {
  var _a2;
  const t = [((_a2 = toValue(e.method)) == null ? void 0 : _a2.toUpperCase()) || "GET", toValue(e.baseURL)];
  for (const o of [e.query || e.params]) {
    const a = toValue(o);
    if (!a) continue;
    const s = {};
    for (const [l, n] of Object.entries(a)) s[toValue(l)] = toValue(n);
    t.push(s);
  }
  if (e.body) {
    const o = toValue(e.body);
    if (!o) t.push(hash(o));
    else if (o instanceof ArrayBuffer) t.push(hash(Object.fromEntries([...new Uint8Array(o).entries()].map(([a, s]) => [a, s.toString()]))));
    else if (o instanceof FormData) {
      const a = {};
      for (const s of o.entries()) {
        const [l, n] = s;
        a[l] = n instanceof File ? n.name : n;
      }
      t.push(hash(a));
    } else if (isPlainObject(o)) t.push(hash(reactive(o)));
    else try {
      t.push(hash(o));
    } catch {
    }
  }
  return t;
}
function It(e) {
  return getCurrentScope() ? (onScopeDispose(e), true) : false;
}
function Pt(e) {
  return typeof e == "function" ? e() : unref(e);
}
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Ea = Object.prototype.toString, La = (e) => Ea.call(e) === "[object Object]", Ba = () => {
};
function je(e) {
  var t;
  const o = Pt(e);
  return (t = o == null ? void 0 : o.$el) != null ? t : o;
}
const _t = void 0;
function Re(...e) {
  let t, o, a, s;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([o, a, s] = e, t = _t) : [t, o, a, s] = e, !t) return Ba;
  Array.isArray(o) || (o = [o]), Array.isArray(a) || (a = [a]);
  const l = [], n = () => {
    l.forEach((u) => u()), l.length = 0;
  }, d = (u, m, C, v) => (u.addEventListener(m, C, v), () => u.removeEventListener(m, C, v)), b = watch(() => [je(t), Pt(s)], ([u, m]) => {
    if (n(), !u) return;
    const C = La(m) ? { ...m } : m;
    l.push(...o.flatMap((v) => a.map((w) => d(u, v, w, C))));
  }, { immediate: true, flush: "post" }), $ = () => {
    b(), n();
  };
  return It($), $;
}
function Fa() {
  const e = ref(false), t = getCurrentInstance();
  return t && onMounted(() => {
    e.value = true;
  }, t), e;
}
function Da(e) {
  const t = Fa();
  return computed(() => (t.value, !!e()));
}
function Sa(e, t, o = {}) {
  const { window: a = _t, ...s } = o;
  let l;
  const n = Da(() => a && "ResizeObserver" in a), d = () => {
    l && (l.disconnect(), l = void 0);
  }, b = computed(() => Array.isArray(e) ? e.map((m) => je(m)) : [je(e)]), $ = watch(b, (m) => {
    if (d(), n.value && a) {
      l = new ResizeObserver(t);
      for (const C of m) C && l.observe(C, s);
    }
  }, { immediate: true, flush: "post" }), u = () => {
    d(), $();
  };
  return It(u), { isSupported: n, stop: u };
}
const Ia = (e) => typeof e == "number", Pa = (e) => isString(e) ? !Number.isNaN(Number(e)) : false;
var _a = defineComponent({ name: "CircleCheck", __name: "circle-check", setup(e) {
  return (t, o) => (openBlock(), createElementBlock("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" }, [createElementVNode("path", { fill: "currentColor", d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896" }), createElementVNode("path", { fill: "currentColor", d: "M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752z" })]));
} }), za = _a, Ta = defineComponent({ name: "CircleClose", __name: "circle-close", setup(e) {
  return (t, o) => (openBlock(), createElementBlock("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" }, [createElementVNode("path", { fill: "currentColor", d: "m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248z" }), createElementVNode("path", { fill: "currentColor", d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896" })]));
} }), Ge = Ta, Aa = defineComponent({ name: "Hide", __name: "hide", setup(e) {
  return (t, o) => (openBlock(), createElementBlock("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" }, [createElementVNode("path", { fill: "currentColor", d: "M876.8 156.8c0-9.6-3.2-16-9.6-22.4s-12.8-9.6-22.4-9.6-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176S0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4s3.2 16 9.6 22.4 12.8 9.6 22.4 9.6 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4m-646.4 528Q115.2 579.2 76.8 512q43.2-72 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4m140.8-96Q352 555.2 352 512c0-44.8 16-83.2 48-112s67.2-48 112-48c28.8 0 54.4 6.4 73.6 19.2zM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6q-43.2 72-153.6 172.8c-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176S1024 528 1024 512s-48.001-73.6-134.401-176" }), createElementVNode("path", { fill: "currentColor", d: "M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112s-67.2 48-112 48" })]));
} }), ka = Aa, Ha = defineComponent({ name: "Loading", __name: "loading", setup(e) {
  return (t, o) => (openBlock(), createElementBlock("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" }, [createElementVNode("path", { fill: "currentColor", d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32m0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32m448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32m-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32M195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248m452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248M828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0m-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0" })]));
} }), Ma = Ha, Na = defineComponent({ name: "View", __name: "view", setup(e) {
  return (t, o) => (openBlock(), createElementBlock("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" }, [createElementVNode("path", { fill: "currentColor", d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352m0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288m0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448m0 64a160.19 160.19 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160" })]));
} }), Ra = Na;
const Va = (e) => e, Ve = ye([String, Object, Function]), Oa = { validating: Ma, success: za, error: Ge }, De = "update:modelValue", dt = "change", Oe = "input", qa = ca({ ariaLabel: String, ariaOrientation: { type: String, values: ["horizontal", "vertical", "undefined"] }, ariaControls: String }), ja = (e) => pick(qa, e), Ua = ca({ id: { type: String, default: void 0 }, size: of, disabled: { type: Boolean, default: void 0 }, modelValue: { type: ye([String, Number, Object]), default: "" }, modelModifiers: { type: ye(Object), default: () => ({}) }, maxlength: { type: [String, Number] }, minlength: { type: [String, Number] }, type: { type: ye(String), default: "text" }, resize: { type: String, values: ["none", "both", "horizontal", "vertical"] }, autosize: { type: ye([Boolean, Object]), default: false }, autocomplete: { type: ye(String), default: "off" }, formatter: { type: Function }, parser: { type: Function }, placeholder: { type: String }, form: { type: String }, readonly: Boolean, clearable: Boolean, clearIcon: { type: Ve, default: Ge }, showPassword: Boolean, showWordLimit: Boolean, wordLimitPosition: { type: String, values: ["inside", "outside"], default: "inside" }, suffixIcon: { type: Ve }, prefixIcon: { type: Ve }, containerRole: { type: String, default: void 0 }, tabindex: { type: [String, Number], default: 0 }, validateEvent: { type: Boolean, default: true }, inputStyle: { type: ye([Object, Array, String]), default: () => Va({}) }, autofocus: Boolean, rows: { type: Number, default: 2 }, ...ja(["ariaLabel"]), inputmode: { type: ye(String), default: void 0 }, name: String }), Ga = { [De]: (e) => isString(e), input: (e) => isString(e), change: (e, t) => isString(e) && (t instanceof Event || t === void 0), focus: (e) => e instanceof FocusEvent, blur: (e) => e instanceof FocusEvent, clear: () => true, mouseleave: (e) => e instanceof MouseEvent, mouseenter: (e) => e instanceof MouseEvent, keydown: (e) => e instanceof Event, compositionstart: (e) => e instanceof CompositionEvent, compositionupdate: (e) => e instanceof CompositionEvent, compositionend: (e) => e instanceof CompositionEvent };
markRaw(Ge);
const Ka = ca({ size: { type: ye([Number, String]) }, color: { type: String } });
function Xa(e, t = "px") {
  if (!e && e !== 0) return "";
  if (Ia(e) || Pa(e)) return `${e}${t}`;
  if (isString(e)) return e;
}
var Za = defineComponent({ name: "ElIcon", inheritAttrs: false, __name: "icon", props: Ka, setup(e) {
  const t = e, o = Xf("icon"), a = computed(() => {
    const { size: s, color: l } = t, n = Xa(s);
    return !n && !l ? {} : { fontSize: n, "--color": l };
  });
  return (s, l) => (openBlock(), createElementBlock("i", mergeProps({ class: unref(o).b(), style: a.value }, s.$attrs), [renderSlot(s.$slots, "default")], 16));
} });
const pe = pf(Za), ut = (e) => {
  const t = Number.parseFloat(e);
  return Number.isNaN(t) ? e : t;
}, Qa = ["class", "style"], Ya = /^on[A-Z]/, Ja = (e = {}) => {
  const { excludeListeners: t = false, excludeKeys: o } = e, a = computed(() => ((o == null ? void 0 : o.value) || []).concat(Qa)), s = getCurrentInstance();
  return s ? computed(() => {
    var l;
    return fromPairs(Object.entries((l = s.proxy) == null ? void 0 : l.$attrs).filter(([n]) => !a.value.includes(n) && !(t && Ya.test(n))));
  }) : (computed(() => ({})));
}, zt = (e) => {
  const t = getCurrentInstance();
  return computed(() => {
    var o, a;
    return (a = (o = t == null ? void 0 : t.proxy) == null ? void 0 : o.$props) == null ? void 0 : a[e];
  });
}, Ke = /* @__PURE__ */ Symbol("formContextKey"), Tt = /* @__PURE__ */ Symbol("formItemContextKey"), eo = (e, t = {}) => {
  const o = ref(void 0), a = t.prop ? o : zt("size"), s = t.global ? o : qf(), l = t.form ? { size: void 0 } : inject(Ke, void 0), n = t.formItem ? { size: void 0 } : inject(Tt, void 0);
  return computed(() => a.value || unref(e) || (n == null ? void 0 : n.size) || (l == null ? void 0 : l.size) || s.value || "");
}, to = (e) => {
  const t = zt("disabled"), o = inject(Ke, void 0);
  return computed(() => {
    var a, s, l;
    return (l = (s = (a = t.value) != null ? a : unref(e)) != null ? s : o == null ? void 0 : o.disabled) != null ? l : false;
  });
}, ao = (e) => {
  if (e.tabIndex > 0 || e.tabIndex === 0 && e.getAttribute("tabIndex") !== null) return true;
  if (e.tabIndex < 0 || e.hasAttribute("disabled") || e.getAttribute("aria-disabled") === "true") return false;
  switch (e.nodeName) {
    case "A":
      return !!e.href && e.rel !== "ignore";
    case "INPUT":
      return !(e.type === "hidden" || e.type === "file");
    case "BUTTON":
    case "SELECT":
    case "TEXTAREA":
      return true;
    default:
      return false;
  }
};
function oo(e, { disabled: t, beforeFocus: o, afterFocus: a, beforeBlur: s, afterBlur: l } = {}) {
  const n = getCurrentInstance(), { emit: d } = n, b = shallowRef(), $ = ref(false), u = (v) => {
    const w = isFunction(o) ? o(v) : false;
    unref(t) || $.value || w || ($.value = true, d("focus", v), a == null ? void 0 : a());
  }, m = (v) => {
    var w;
    const f = isFunction(s) ? s(v) : false;
    unref(t) || v.relatedTarget && ((w = b.value) != null && w.contains(v.relatedTarget)) || f || ($.value = false, d("blur", v), l == null ? void 0 : l());
  }, C = (v) => {
    var w, f;
    unref(t) || ao(v.target) || (w = b.value) != null && w.contains((void 0).activeElement) && b.value !== (void 0).activeElement || (f = e.value) == null || f.focus();
  };
  return watch([b, () => unref(t)], ([v, w]) => {
    v && (w ? v.removeAttribute("tabindex") : v.setAttribute("tabindex", "-1"));
  }), Re(b, "focus", u, true), Re(b, "blur", m, true), Re(b, "click", C, true), { isFocused: $, wrapperRef: b, handleFocus: u, handleBlur: m };
}
const so = () => {
  const e = inject(Ke, void 0), t = inject(Tt, void 0);
  return { form: e, formItem: t };
}, no = (e, { formItemContext: t, disableIdGeneration: o, disableIdManagement: a }) => {
  o || (o = ref(false)), a || (a = ref(false)), getCurrentInstance();
  const s = ref();
  return { isLabeledByFormItem: computed(() => {
    var n;
    return !!(!(e.label || e.ariaLabel) && t && t.inputIds && ((n = t.inputIds) == null ? void 0 : n.length) <= 1);
  }), inputId: s };
}, ro = (e) => /([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(e);
function lo({ afterComposition: e, emit: t }) {
  const o = ref(false), a = (d) => {
    t == null ? void 0 : t("compositionstart", d), o.value = true;
  }, s = (d) => {
    var b;
    t == null ? void 0 : t("compositionupdate", d);
    const $ = (b = d.target) == null ? void 0 : b.value, u = $[$.length - 1] || "";
    o.value = !ro(u);
  }, l = (d) => {
    t == null ? void 0 : t("compositionend", d), o.value && (o.value = false, nextTick(() => e(d)));
  };
  return { isComposing: o, handleComposition: (d) => {
    d.type === "compositionend" ? l(d) : s(d);
  }, handleCompositionStart: a, handleCompositionUpdate: s, handleCompositionEnd: l };
}
function io(e) {
  let t;
  function o() {
    if (e.value == null) return;
    const { selectionStart: s, selectionEnd: l, value: n } = e.value;
    if (s == null || l == null) return;
    const d = n.slice(0, Math.max(0, s)), b = n.slice(Math.max(0, l));
    t = { selectionStart: s, selectionEnd: l, value: n, beforeTxt: d, afterTxt: b };
  }
  function a() {
    if (e.value == null || t == null) return;
    const { value: s } = e.value, { beforeTxt: l, afterTxt: n, selectionStart: d } = t;
    if (l == null || n == null || d == null) return;
    let b = s.length;
    if (s.endsWith(n)) b = s.length - n.length;
    else if (s.startsWith(l)) b = l.length;
    else {
      const $ = l[d - 1], u = s.indexOf($, d - 1);
      u !== -1 && (b = u + 1);
    }
    e.value.setSelectionRange(b, b);
  }
  return [o, a];
}
const co = ["id", "name", "minlength", "maxlength", "type", "disabled", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder", "form", "autofocus", "role", "inputmode"], uo = ["id", "name", "minlength", "maxlength", "tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder", "form", "autofocus", "rows", "role"], fo = "ElInput";
var vo = defineComponent({ name: fo, inheritAttrs: false, __name: "input", props: Ua, emits: Ga, setup(e, { expose: t, emit: o }) {
  const a = e, s = o, l = useAttrs(), n = Ja(), d = useSlots(), b = computed(() => [a.type === "textarea" ? j.b() : f.b(), f.m(v.value), f.is("disabled", w.value), f.is("exceed", Te.value), { [f.b("group")]: d.prepend || d.append, [f.m("prefix")]: d.prefix || a.prefixIcon, [f.m("suffix")]: d.suffix || a.suffixIcon || a.clearable || a.showPassword, [f.bm("suffix", "password-clear")]: O.value && k.value, [f.b("hidden")]: a.type === "hidden" }, l.class]), $ = computed(() => [f.e("wrapper"), f.is("focus", ae.value)]), { form: u, formItem: m } = so(), { inputId: C } = no(a, { formItemContext: m }), v = eo(), w = to(), f = Xf("input"), j = Xf("textarea"), D = shallowRef(), S = shallowRef(), T = ref(false), A = ref(false), i = ref(), p = shallowRef(a.inputStyle), E = computed(() => D.value || S.value), { wrapperRef: ie, isFocused: ae, handleFocus: oe, handleBlur: se } = oo(E, { disabled: w, afterBlur() {
    var c;
    a.validateEvent && ((c = m == null ? void 0 : m.validate) == null || c.call(m, "blur").catch((y) => Gu()));
  } }), ye = computed(() => {
    var c;
    return (c = u == null ? void 0 : u.statusIcon) != null ? c : false;
  }), ne = computed(() => (m == null ? void 0 : m.validateState) || ""), we = computed(() => ne.value && Oa[ne.value]), _e = computed(() => A.value ? Ra : ka), ze = computed(() => [l.style]), h = computed(() => [a.inputStyle, p.value, { resize: a.resize }]), g = computed(() => isNil(a.modelValue) ? "" : String(a.modelValue)), O = computed(() => a.clearable && !w.value && !a.readonly && !!g.value && (ae.value || T.value)), k = computed(() => a.showPassword && !w.value && !!g.value), W = computed(() => a.showWordLimit && !!a.maxlength && (a.type === "text" || a.type === "textarea") && !w.value && !a.readonly && !a.showPassword), H = computed(() => g.value.length), Te = computed(() => !!W.value && H.value > Number(a.maxlength)), Ae = computed(() => !!d.suffix || !!a.suffixIcon || O.value || a.showPassword || W.value || !!ne.value && ye.value), kt = computed(() => !!Object.keys(a.modelModifiers).length), [Ht, Mt] = io(D);
  Sa(S, (c) => {
    if (Nt(), !W.value || a.resize !== "both" && a.resize !== "horizontal") return;
    const y = c[0], { width: L } = y.contentRect;
    i.value = { right: `calc(100% - ${L + 22 - 10}px)` };
  });
  const xe = () => {
    const { type: c, autosize: y } = a;
  }, Nt = /* @__PURE__ */ ((c) => {
    let y = false;
    return () => {
      var L;
      if (y || !a.autosize) return;
      ((L = S.value) == null ? void 0 : L.offsetParent) === null || (setTimeout(c), y = true);
    };
  })(xe), me = () => {
    const c = E.value, y = a.formatter ? a.formatter(g.value) : g.value;
    !c || c.value === y || a.type === "file" || (c.value = y);
  }, Ye = (c) => {
    const { trim: y, number: L } = a.modelModifiers;
    return y && (c = c.trim()), L && (c = `${ut(c)}`), a.formatter && a.parser && (c = a.parser(c)), c;
  }, ke = async (c) => {
    if (et.value) return;
    const { lazy: y } = a.modelModifiers;
    let { value: L } = c.target;
    if (y) {
      s(Oe, L);
      return;
    }
    if (L = Ye(L), String(L) === g.value) {
      a.formatter && me();
      return;
    }
    Ht(), s(De, L), s(Oe, L), await nextTick(), (a.formatter && a.parser || !kt.value) && me(), Mt();
  }, Je = async (c) => {
    let { value: y } = c.target;
    y = Ye(y), a.modelModifiers.lazy && s(De, y), s(dt, y, c), await nextTick(), me();
  }, { isComposing: et, handleCompositionStart: $e, handleCompositionUpdate: Ce, handleCompositionEnd: Ee } = lo({ emit: s, afterComposition: ke }), Rt = () => {
    A.value = !A.value;
  }, Vt = () => {
    var c;
    return (c = E.value) == null ? void 0 : c.focus();
  }, Ot = () => {
    var c;
    return (c = E.value) == null ? void 0 : c.blur();
  }, qt = (c) => {
    T.value = false, s("mouseleave", c);
  }, jt = (c) => {
    T.value = true, s("mouseenter", c);
  }, tt = (c) => {
    s("keydown", c);
  }, Ut = () => {
    var c;
    (c = E.value) == null || c.select();
  }, at = () => {
    s(De, ""), s(dt, ""), s("clear"), s(Oe, "");
  };
  return watch(() => a.modelValue, () => {
    var c;
    nextTick(() => xe()), a.validateEvent && ((c = m == null ? void 0 : m.validate) == null || c.call(m, "change").catch((y) => Gu()));
  }), watch(g, (c) => {
    if (!E.value) return;
    const { trim: y, number: L } = a.modelModifiers, Le = E.value.value, ot = (L || a.type === "number") && !/^0\d/.test(Le) ? `${ut(Le)}` : Le;
    ot !== c && ((void 0).activeElement === E.value && E.value.type !== "range" && y && ot.trim() === c || me());
  }), watch(() => a.type, async () => {
    await nextTick(), me(), xe();
  }), t({ input: D, textarea: S, ref: E, textareaStyle: h, autosize: toRef(a, "autosize"), isComposing: et, focus: Vt, blur: Ot, select: Ut, clear: at, resizeTextarea: xe }), (c, y) => (openBlock(), createElementBlock("div", { class: normalizeClass([b.value, { [unref(f).bm("group", "append")]: c.$slots.append, [unref(f).bm("group", "prepend")]: c.$slots.prepend }]), style: normalizeStyle(ze.value), onMouseenter: jt, onMouseleave: qt }, [createCommentVNode(" input "), e.type !== "textarea" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createCommentVNode(" prepend slot "), c.$slots.prepend ? (openBlock(), createElementBlock("div", { key: 0, class: normalizeClass(unref(f).be("group", "prepend")) }, [renderSlot(c.$slots, "prepend")], 2)) : createCommentVNode("v-if", true), createElementVNode("div", { ref_key: "wrapperRef", ref: ie, class: normalizeClass($.value) }, [createCommentVNode(" prefix slot "), c.$slots.prefix || e.prefixIcon ? (openBlock(), createElementBlock("span", { key: 0, class: normalizeClass(unref(f).e("prefix")) }, [createElementVNode("span", { class: normalizeClass(unref(f).e("prefix-inner")) }, [renderSlot(c.$slots, "prefix"), e.prefixIcon ? (openBlock(), createBlock(unref(pe), { key: 0, class: normalizeClass(unref(f).e("icon")) }, { default: withCtx(() => [(openBlock(), createBlock(resolveDynamicComponent(e.prefixIcon)))]), _: 1 }, 8, ["class"])) : createCommentVNode("v-if", true)], 2)], 2)) : createCommentVNode("v-if", true), createElementVNode("input", mergeProps({ id: unref(C), ref_key: "input", ref: D, class: unref(f).e("inner") }, unref(n), { name: e.name, minlength: e.minlength, maxlength: e.maxlength, type: e.showPassword ? A.value ? "text" : "password" : e.type, disabled: unref(w), readonly: e.readonly, autocomplete: e.autocomplete, tabindex: e.tabindex, "aria-label": e.ariaLabel, placeholder: e.placeholder, style: e.inputStyle, form: e.form, autofocus: e.autofocus, role: e.containerRole, inputmode: e.inputmode, onCompositionstart: y[0] || (y[0] = (...L) => unref($e) && unref($e)(...L)), onCompositionupdate: y[1] || (y[1] = (...L) => unref(Ce) && unref(Ce)(...L)), onCompositionend: y[2] || (y[2] = (...L) => unref(Ee) && unref(Ee)(...L)), onInput: ke, onChange: Je, onKeydown: tt }), null, 16, co), createCommentVNode(" suffix slot "), Ae.value ? (openBlock(), createElementBlock("span", { key: 1, class: normalizeClass(unref(f).e("suffix")) }, [createElementVNode("span", { class: normalizeClass(unref(f).e("suffix-inner")) }, [!O.value || !k.value || !W.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [renderSlot(c.$slots, "suffix"), e.suffixIcon ? (openBlock(), createBlock(unref(pe), { key: 0, class: normalizeClass(unref(f).e("icon")) }, { default: withCtx(() => [(openBlock(), createBlock(resolveDynamicComponent(e.suffixIcon)))]), _: 1 }, 8, ["class"])) : createCommentVNode("v-if", true)], 64)) : createCommentVNode("v-if", true), O.value ? (openBlock(), createBlock(unref(pe), { key: 1, class: normalizeClass([unref(f).e("icon"), unref(f).e("clear")]), onMousedown: withModifiers(unref(NOOP), ["prevent"]), onClick: at }, { default: withCtx(() => [(openBlock(), createBlock(resolveDynamicComponent(e.clearIcon)))]), _: 1 }, 8, ["class", "onMousedown"])) : createCommentVNode("v-if", true), k.value ? (openBlock(), createBlock(unref(pe), { key: 2, class: normalizeClass([unref(f).e("icon"), unref(f).e("password")]), onClick: Rt, onMousedown: withModifiers(unref(NOOP), ["prevent"]), onMouseup: withModifiers(unref(NOOP), ["prevent"]) }, { default: withCtx(() => [(openBlock(), createBlock(resolveDynamicComponent(_e.value)))]), _: 1 }, 8, ["class", "onMousedown", "onMouseup"])) : createCommentVNode("v-if", true), W.value ? (openBlock(), createElementBlock("span", { key: 3, class: normalizeClass([unref(f).e("count"), unref(f).is("outside", e.wordLimitPosition === "outside")]) }, [createElementVNode("span", { class: normalizeClass(unref(f).e("count-inner")) }, toDisplayString(H.value) + " / " + toDisplayString(e.maxlength), 3)], 2)) : createCommentVNode("v-if", true), ne.value && we.value && ye.value ? (openBlock(), createBlock(unref(pe), { key: 4, class: normalizeClass([unref(f).e("icon"), unref(f).e("validateIcon"), unref(f).is("loading", ne.value === "validating")]) }, { default: withCtx(() => [(openBlock(), createBlock(resolveDynamicComponent(we.value)))]), _: 1 }, 8, ["class"])) : createCommentVNode("v-if", true)], 2)], 2)) : createCommentVNode("v-if", true)], 2), createCommentVNode(" append slot "), c.$slots.append ? (openBlock(), createElementBlock("div", { key: 1, class: normalizeClass(unref(f).be("group", "append")) }, [renderSlot(c.$slots, "append")], 2)) : createCommentVNode("v-if", true)], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [createCommentVNode(" textarea "), createElementVNode("textarea", mergeProps({ id: unref(C), ref_key: "textarea", ref: S, class: [unref(j).e("inner"), unref(f).is("focus", unref(ae))] }, unref(n), { name: e.name, minlength: e.minlength, maxlength: e.maxlength, tabindex: e.tabindex, disabled: unref(w), readonly: e.readonly, autocomplete: e.autocomplete, style: h.value, "aria-label": e.ariaLabel, placeholder: e.placeholder, form: e.form, autofocus: e.autofocus, rows: e.rows, role: e.containerRole, onCompositionstart: y[3] || (y[3] = (...L) => unref($e) && unref($e)(...L)), onCompositionupdate: y[4] || (y[4] = (...L) => unref(Ce) && unref(Ce)(...L)), onCompositionend: y[5] || (y[5] = (...L) => unref(Ee) && unref(Ee)(...L)), onInput: ke, onFocus: y[6] || (y[6] = (...L) => unref(oe) && unref(oe)(...L)), onBlur: y[7] || (y[7] = (...L) => unref(se) && unref(se)(...L)), onChange: Je, onKeydown: tt }), null, 16, uo), W.value ? (openBlock(), createElementBlock("span", { key: 0, style: normalizeStyle(i.value), class: normalizeClass([unref(f).e("count"), unref(f).is("outside", e.wordLimitPosition === "outside")]) }, toDisplayString(H.value) + " / " + toDisplayString(e.maxlength), 7)) : createCommentVNode("v-if", true)], 64))], 38));
} });
const mo = pf(vo), We = defineComponent({ __name: "colorButton", __ssrInlineRender: true, props: { icon: { default: "" }, label: {}, disabled: { type: Boolean, default: false }, iconClass: {} }, emits: ["click"], setup(e, { emit: t }) {
  const o = ref();
  return (a, s, l, n) => {
    s(`<button${ssrRenderAttrs(mergeProps({ ref_key: "colorButton", ref: o, class: ["relative box-border h-48 flex-c overflow-hidden rounded-12 text-18 text-#fff leading-22", e.disabled ? "cursor-not-allowed bg-#EBE5F8 hover:shadow-none!" : "color-bg cursor"], hover: "shadow-[0px_8px_24px_0px_#8D30D029]" }, n))} data-v-2d2c07a1><div class="relative z-2 h-100% flex-c gap-10" data-v-2d2c07a1>`), ssrRenderSlot(a.$slots, "default", {}, () => {
      s(`<span class="font-700" data-v-2d2c07a1>${ssrInterpolate(e.label)}</span>`);
    }, s, l), s("</div></button>");
  };
} }), ft = We.setup;
We.setup = (e, t) => {
  const o = useSSRContext();
  return (o.modules || (o.modules = /* @__PURE__ */ new Set())).add("components/base/colorButton.vue"), ft ? ft(e, t) : void 0;
};
const po = s(We, [["__scopeId", "data-v-2d2c07a1"]]), ee = (e) => {
  const { public: { baseURL: t = "" } } = Xe$1();
  return `${t}${e}`;
}, vt = (e, t) => {
  if (!e) return "";
  if (e.includes("webp")) return e;
  const { width: o, height: a, format: s = "webp" } = t || {}, l = [];
  if (o || a) {
    const d = [];
    o && d.push(`w_${o}`), a && d.push(`h_${a}`), l.push(`x-oss-process=image/resize,${d.join(",")}`);
  }
  s && l.push(`x-oss-process=image/format,${s}`);
  const n = l.join(",");
  return `${e}${e.includes("?") ? "&" : "?"}${n}`;
}, Xe = defineComponent({ __name: "header", __ssrInlineRender: true, props: { setting: {}, itemClass: { default: "grid-cols-3" }, isH1: { type: Boolean, default: true }, maxWidth: { default: "max-w-1200" } }, emits: ["create"], setup(e, { emit: t }) {
  return (o, a, s, l) => {
    var _a2;
    a(`<section${ssrRenderAttrs(mergeProps({ class: "relative flex-c flex-col gap-40 px-20 pb-120 pt-80", "lt-s640": "py-40 gap-24" }, l))}><div class="${ssrRenderClass([[e.maxWidth], "relative z-2 mx-a w-100% flex-c flex-col gap-8 text-center"])}">`), ssrRenderVNode(a, createVNode(resolveDynamicComponent(e.isH1 ? "h1" : "h2"), { class: "rozha text-48 text-#000 leading-62", "lt-s640": "text-28 leading-36" }, { default: withCtx((n, d, b, $) => {
      if (d) d(`${ssrInterpolate(e.setting.title)}`);
      else return [createTextVNode(toDisplayString(e.setting.title), 1)];
    }), _: 1 }), s), e.setting.tip ? a(`<p class="text-20 text-#5D5B66 font-300 leading-30" lt-s640="text-14 leading-21">${(_a2 = e.setting.tip) != null ? _a2 : ""}</p>`) : a("<!---->"), a(`</div><ul class="${ssrRenderClass([[e.itemClass, e.maxWidth], "relative z-2 grid w-100% gap-24"])}" lt-s640="grid-cols-1 gap-12"><!--[-->`), ssrRenderList(e.setting.list, (n) => {
      var _a3, _b;
      a(`<li class="flex-col gap-20 rounded-20 bg-#fff/85 px-32 py-28 shadow-[0_30px_60px_#613C9633] backdrop-blur-10" lt-s640="px-20 py-16 rounded-12 gap-8"><div class="w-100% flex-col gap-12" lt-s640="flex-row items-center"><div class="h-44 w-44 bg-img-def bg-contain!" lt-s640="w-28 h-28" style="${ssrRenderStyle({ backgroundImage: `url(${n.icon})` })}"></div><h3 class="text-20 text-#2D3138 font-700 leading-30" lt-s640="text-16 leading-24">${ssrInterpolate(n.title)}</h3></div><p class="text-16 text-#5D5B66 font-300 leading-24" lt-s640="text-12 leading-18">${(_a3 = n.content1) != null ? _a3 : ""}</p>`), n.content2 ? a(`<p class="text-16 text-#5D5B66 font-300 leading-24" lt-s640="text-12 leading-18">${(_b = n.content2) != null ? _b : ""}</p>`) : a("<!---->"), a("</li>");
    }), a(`<!--]--></ul><div lt-s640="bg-center-bottom" class="${ssrRenderClass([e.setting.btn ? "h-414 lt-s640:h-210" : "h-240 lt-s640:h-120", "absolute bottom-0 left-0 h-240 w-100% bg-cover bg-center-bottom bg-no-repeat"])}" style="${ssrRenderStyle({ backgroundImage: `url(${("imgPath" in o ? o.imgPath : unref(ee))("/images/im/step-bg.webp")})` })}"></div></section>`);
  };
} }), mt = Xe.setup;
Xe.setup = (e, t) => {
  const o = useSSRContext();
  return (o.modules || (o.modules = /* @__PURE__ */ new Set())).add("components/design/seo/base/header.vue"), mt ? mt(e, t) : void 0;
};
const Ze = defineComponent({ __name: "footer", __ssrInlineRender: true, props: { isDark: { type: Boolean, default: false } }, setup(e) {
  const { t, locale: o } = Bn(), d = [{ title: "layouts.footer.AI Logo Generator", list: [{ label: "layouts.footer.Text to Logo", path: "/ai-logo-generator/text-to-logo" }, { label: "layouts.footer.Image to Logo", path: "/ai-logo-generator/image-to-logo" }, { label: "layouts.footer.Sketch to Logo", path: "/ai-logo-generator/sketch-to-logo" }, { label: "layouts.footer.Letter to Logo", path: "/ai-logo-generator/letter-to-logo" }] }, { title: "layouts.footer.Video Tools", list: [{ label: "layouts.footer.AI Logo Animation", path: "/ai-logo-animation" }, { label: "layouts.footer.AI Video Generator", path: "/ai-video-maker" }, { label: "layouts.footer.Image to Video", path: "/ai-video-maker/image-to-video" }, { label: "layouts.footer.Text to Video", path: "/ai-video-maker/text-to-video" }] }, { title: "layouts.footer.Image Tools", list: [{ label: "layouts.footer.AI Logo Mockups", path: "/ai-logo-mockup" }, { label: "layouts.footer.AI Image Maker", path: "/ai-image-maker" }, { label: "layouts.footer.AI Image Tools", path: "/ai-tools" }, { label: "layouts.footer.Image to Image", path: "/ai-image-maker/image-to-image" }, { label: "layouts.footer.Text to Image", path: "/ai-image-maker/text-to-image" }] }, { title: "layouts.footer.Company", list: [{ label: "layouts.footer.Terms of Service", path: "/terms" }, { label: "layouts.footer.Privacy", path: "/privacy" }, { label: "menu.Pricing", path: "/pricing" }] }];
  return (b, $, u, m) => {
    const C$1 = C, v = x;
    $(`<footer${ssrRenderAttrs(mergeProps({ class: ["box-border px-12 py-40 text-14 text-#2D3138 leading-21", e.isDark ? "bg-#F1F1F8" : "bg-#fff"] }, m))}><div class="mx-a box-border max-w-1200 w-full" lt-s1440="w-100% px-24"><div class="grid grid-cols-5 w-100% gap-y-24 gap-x-8" lt-s1280="grid-cols-4" lt-s768="grid-cols-2"><!--[-->`), ssrRenderList(d, (w) => {
      $(`<div class="col-span-1"><div class="pb-16 color-nmain leading-17">${ssrInterpolate(unref(t)(w.title))}</div><div class="grid gap-y-12"><!--[-->`), ssrRenderList(w.list, (f) => {
        $(ssrRenderComponent(C$1, { key: f.label, to: f.path, class: "no-underline" }, { default: withCtx((j, D, S, T) => {
          if (D) D(`<span class="cursor text-#2D3138 transition-all-300 hover:text-nmain"${T}>${ssrInterpolate(unref(t)(f.label))}</span>`);
          else return [createVNode("span", { class: "cursor text-#2D3138 transition-all-300 hover:text-nmain" }, toDisplayString(unref(t)(f.label)), 1)];
        }), _: 2 }, u));
      }), $("<!--]--></div></div>");
    }), $('<!--]--><div class="col-span-1" lt-s1280="col-span-4" lt-s768="col-span-2"><div class="b-l-1 b-l-#E4E4EF b-l-solid pl-32" lt-s1280="pl-0 b-l-0 pt-24 b-t-1 b-t-#E4E4EF b-t-solid" lt-s768="pt-20">'), $(ssrRenderComponent(v, { "must-show-logo-label": "", class: "h-32 lt-s480:h-24" }, null, u)), $('<div class="mt-16 text-12 color-#5D5B66 leading-22"><div>support@ailogocreator.io</div><div>Copyright @ 2025 AlLogoCreator</div><div>All rights reserved</div><div>DESIGNER AILTD</div></div></div></div></div></div></footer>');
  };
} }), pt = Ze.setup;
Ze.setup = (e, t) => {
  const o = useSSRContext();
  return (o.modules || (o.modules = /* @__PURE__ */ new Set())).add("components/layout/footer.vue"), pt ? pt(e, t) : void 0;
};
const go = { "Content-Type": "application/json", "X-Custom-Header-Origin": "web" };
async function At(e) {
  var _a2, _b;
  const { method: t, url: o, data: a = {}, config: s = {} } = e, l = { ...a }, { public: { apiBaseUrl: n, apiServeBaseUrl: d } } = Xe$1(), b = d + o, u = (_b = (_a2 = B().$i18n) == null ? void 0 : _a2.locale) == null ? void 0 : _b.value;
  let m = { ...go, "X-Custom-Header-Language": u || "en" };
  return await $a(b, { method: t, [t === "GET" ? "query" : "body"]: l, headers: m, ...s }, "$Dz8lG8_PTE");
}
async function ho(e, t = {}, o = {}) {
  return await At({ method: "POST", url: e, data: t, config: o });
}
async function bo(e, t = {}, o = {}) {
  return await At({ method: "GET", url: e, data: t, config: o });
}
function yo() {
  return bo("/product/v2/sample-tag/tag-names/visitor");
}
function wo(e) {
  return ho("/product/v2/cases/page/visitor", { pageNo: 1, ...e }, { key: `${e == null ? void 0 : e.taskType}-${e == null ? void 0 : e.pageSize}` });
}
function xo() {
  return { getAppPath: () => "/app" };
}
function $o() {
  return { handleLocalSaveBrandTitle: (a) => {
  }, handleLocalGetBrandTitle: () => "", handleLocalRemoveBrandTitle: () => "" };
}
const Co = defineAsyncComponent(() => import('./multiFeature-Be5YvbR1.mjs').then((e) => e.default || e)), Eo = defineAsyncComponent(() => import('./friendly-links-BakXs2LT.mjs').then((e) => e.default || e)), Qe = defineComponent({ __name: "index", __ssrInlineRender: true, setup(e) {
  const { t } = Bn(), o = ku(), { getAppPath: a } = xo();
  h({ title: t("layouts.title.aiLogoGenerator"), keywords: t("layouts.keywords.aiLogoGenerator"), description: t("layouts.description.aiLogoGenerator") });
  const { handleLocalSaveBrandTitle: l } = $o(), n = ref("");
  function d() {
    Pe({ path: o("/app") });
  }
  const b = { title: t("newHome.howItWorks.title"), tip: t("newHome.howItWorks.subtitle"), list: times(4, (i) => ({ title: t(`newHome.howItWorks.step${i + 1}.title`), content1: t(`newHome.howItWorks.step${i + 1}.desc`), icon: ee(`/images/aiLogo/0${i + 1}.svg`) })) }, $ = ["glicon-Frame4", "glicon-Frame-5", "glicon-Frame-6", "glicon-Frame-7", "glicon-Frame-8", "glicon-Frame-1", "glicon-Frame-2", "glicon-Frame-3", "glicon-Frame-4"], u = { title: t("app.seo.aiimage.feature.title"), list: times(9, (i) => ({ title: t(`app.home.module5.list.${i + 1}.title`), icon2: $[i], topTip: "", bottomTip: "", children: compact(times(4, (p) => {
    const E = t(`app.home.module5.list.${i + 1}.children.${p + 1}.title`);
    if (E) return { title: E, content: t(`app.home.module5.list.${i + 1}.children.${p + 1}.content`) };
  })) })) }, m = computed(() => [{ name: t("newHome.testimonials.user1.name"), role: t("newHome.testimonials.user1.role"), content: t("newHome.testimonials.user1.content"), avatar: ee("/images/home/brand/user1.png"), rating: 5 }, { name: t("newHome.testimonials.user2.name"), role: t("newHome.testimonials.user2.role"), content: t("newHome.testimonials.user2.content"), avatar: ee("/images/home/brand/user2.png"), rating: 5 }, { name: t("newHome.testimonials.user3.name"), role: t("newHome.testimonials.user3.role"), content: t("newHome.testimonials.user3.content"), avatar: ee("/images/home/brand/user3.png"), rating: 5 }]), C$1 = computed(() => times(6, (i) => ({ question: t(`newHome.faq.q${i + 1}.question`), answer: t(`newHome.faq.q${i + 1}.answer`) }))), v = ref(null), w = _o("totalStyleList", () => []), { data: f } = ct("home-showcase-data", async () => {
    var _a2, _b;
    const i = await wo({ pageSize: 12, taskType: "txt2img" });
    return ((_a2 = i.data.value) == null ? void 0 : _a2.success) ? (((_b = i.data.value.data) == null ? void 0 : _b.list) || []).map((E) => ({ ...E, src: E.logoUrl, alt: E.prompt })) : [];
  }, { server: false });
  watch(f, (i) => {
    i && (w.value = i);
  }, { immediate: true });
  const j = _o("homeTagNamesList", () => []), { data: D } = ct("home-new-tag-names", async () => {
    var _a2, _b;
    const i = await yo();
    return ((_a2 = i.data.value) == null ? void 0 : _a2.success) ? ((_b = i.data.value) == null ? void 0 : _b.data) || [] : [];
  }, { server: false });
  watch(D, (i) => {
    i && (j.value = i);
  }, { immediate: true });
  const S = computed(() => ({ title: t("trends2026.Explore More AI Logo Resources"), list: j.value })), T = computed(() => [{ value: "100K+", label: t("newHome.stats.users") }, { value: "500K+", label: t("newHome.stats.logos") }, { value: "4.8/5", label: t("newHome.stats.rating") }, { value: "50+", label: t("newHome.stats.countries") }]), A = ee("/images/home/tip.png");
  return (i, p, E, ie) => {
    var _a2;
    const ae = mo, oe = C, se = po, ye = Xe, ne = Co, we = V, _e = Eo, ze = Ze;
    p(`<div${ssrRenderAttrs(mergeProps({ class: "new-home bg-#fff" }, ie))} data-v-4a0502a3><section class="hero-section relative overflow-hidden" data-v-4a0502a3><div class="absolute inset-0 z-0 from-#FAFAFA via-#F5F3FF to-#FDF2F8 bg-gradient-to-br" data-v-4a0502a3></div><div class="hero-glow hero-glow-purple" data-v-4a0502a3></div><div class="hero-glow hero-glow-pink" data-v-4a0502a3></div><div class="hero-glow hero-glow-orange" data-v-4a0502a3></div><svg class="absolute left-6% top-25% z-1 h-28 w-28 color-#8B5CF6/35" lt-s768="hidden" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-v-4a0502a3><path d="M12 2L13.09 8.26L19 9L13.09 9.74L12 16L10.91 9.74L5 9L10.91 8.26L12 2Z" data-v-4a0502a3></path></svg><svg class="absolute bottom-25% left-2% z-1 h-20 w-20 color-#EC4899/30" lt-s768="hidden" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-v-4a0502a3><path d="M12 2L13.09 8.26L19 9L13.09 9.74L12 16L10.91 9.74L5 9L10.91 8.26L12 2Z" data-v-4a0502a3></path></svg><svg class="absolute right-46% top-12% z-1 h-16 w-16 color-#F59E0B/25" lt-s768="hidden" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-v-4a0502a3><path d="M12 2L13.09 8.26L19 9L13.09 9.74L12 16L10.91 9.74L5 9L10.91 8.26L12 2Z" data-v-4a0502a3></path></svg><div class="absolute left-2% top-18% z-1 h-3 w-3 rounded-full bg-#8B5CF6/50" lt-s768="hidden" aria-hidden="true" data-v-4a0502a3></div><div class="absolute bottom-12% left-10% z-1 h-4 w-4 rounded-full bg-#EC4899/35" lt-s768="hidden" aria-hidden="true" data-v-4a0502a3></div><div class="absolute bottom-20% right-48% z-1 h-3 w-3 rounded-full bg-#10B981/40" lt-s768="hidden" aria-hidden="true" data-v-4a0502a3></div><div class="hero-grid absolute bottom-0 right-0 z-0" lt-s768="hidden" aria-hidden="true" data-v-4a0502a3></div><div class="relative z-10 mx-a max-w-1400 px-24 pb-80 pt-60" lt-s768="pt-40 pb-60" data-v-4a0502a3><div class="grid grid-cols-2 items-center gap-60" lt-s1024="grid-cols-1 gap-40" data-v-4a0502a3><div class="hero-content" lt-s1024="text-center" data-v-4a0502a3><h1 class="rozha mb-24 text-52 color-#111827 leading-64" lt-s768="text-32 leading-40 mb-16" data-v-4a0502a3>${ssrInterpolate(i.$t("newHome.hero.title"))}</h1><p class="mb-32 text-18 color-#4B5563 leading-28" lt-s768="text-16 leading-24 mb-24" data-v-4a0502a3>${ssrInterpolate(i.$t("newHome.hero.subtitle"))}</p><div class="mb-24 flex items-center gap-12 rounded-16 bg-#fff p-8 shadow-[0_4px_24px_rgba(0,0,0,0.08)]" lt-s768="flex-col p-16 gap-16" data-v-4a0502a3>`), p(ssrRenderComponent(ae, { modelValue: unref(n), "onUpdate:modelValue": (h) => isRef(n) ? n.value = h : null, placeholder: i.$t("newHome.hero.inputPlaceholder"), class: "hero-input flex-1", size: "large", "aria-label": "Brand name", onInput: (h) => unref(l)(h), onKeyup: d }, null, E)), p(ssrRenderComponent(oe, { to: unref(a)(), "aria-label": "Create logo now" }, { default: withCtx((h, g, O, k) => {
      if (g) g(ssrRenderComponent(se, { class: "cta-pulse h-52! w-max! rounded-12! px-32! text-16! font-600!" }, { default: withCtx((W, H, Te, Ae) => {
        if (H) H(`${ssrInterpolate(i.$t("newHome.hero.cta"))}`);
        else return [createTextVNode(toDisplayString(i.$t("newHome.hero.cta")), 1)];
      }), _: 1 }, O, k));
      else return [createVNode(se, { class: "cta-pulse h-52! w-max! rounded-12! px-32! text-16! font-600!" }, { default: withCtx(() => [createTextVNode(toDisplayString(i.$t("newHome.hero.cta")), 1)]), _: 1 })];
    }), _: 1 }, E)), p('</div><div class="flex flex-wrap items-center gap-24" lt-s1024="justify-center" data-v-4a0502a3><div class="flex items-center gap-8" data-v-4a0502a3><div class="flex -space-x-2" data-v-4a0502a3><!--[-->'), ssrRenderList(4, (h) => {
      p(`<div class="h-32 w-32 overflow-hidden border-2 border-#fff rounded-full bg-#E5E7EB" data-v-4a0502a3><img${ssrRenderAttr("src", ("imgPath" in i ? i.imgPath : unref(ee))(`/images/home/brand/user${h}.png`))}${ssrRenderAttr("alt", `User ${h}`)} class="h-full w-full object-cover" data-v-4a0502a3></div>`);
    }), p(`<!--]--></div><span class="text-14 color-#6B7280" data-v-4a0502a3>${ssrInterpolate(i.$t("newHome.hero.trustedBy"))}</span></div><div class="flex items-center gap-6" data-v-4a0502a3><div class="flex items-center gap-1" role="img" aria-label="Rating" data-v-4a0502a3><!--[-->`), ssrRenderList(5, (h) => {
      p('<span class="text-16 color-#FBBF24" aria-hidden="true" data-v-4a0502a3>\u2605</span>');
    }), p(`<!--]--></div><span class="text-14 color-#111827 font-600" data-v-4a0502a3>4.8/5</span><span class="text-14 color-#6B7280" data-v-4a0502a3>${ssrInterpolate(i.$t("newHome.hero.onTrustpilot"))}</span></div></div></div><div class="hero-image relative" lt-s1024="order-first" data-v-4a0502a3><img${ssrRenderAttr("src", ("imgPath" in i ? i.imgPath : unref(ee))("/images/home/first-bg.webp"))}${ssrRenderAttr("alt", i.$t("newHome.hero.imageAlt"))} class="max-w-520 w-full" fetchpriority="high" data-v-4a0502a3></div></div></div></section><section class="stats-section from-#fff to-#F9FAFB bg-gradient-to-b py-48" data-v-4a0502a3><div class="mx-a max-w-1400 px-24" data-v-4a0502a3><div class="grid grid-cols-4 gap-24" lt-s768="grid-cols-2 gap-16" data-v-4a0502a3><!--[-->`), ssrRenderList(unref(T), (h, g) => {
      p(`<div class="stat-card group relative overflow-hidden border border-#E5E7EB/50 rounded-20 bg-#fff p-32 text-center shadow-sm transition hover:border-transparent hover:shadow-xl hover:-translate-y-1" data-v-4a0502a3><div class="${ssrRenderClass([[g === 0 ? "bg-#8B5CF6" : "", g === 1 ? "bg-#EC4899" : "", g === 2 ? "bg-#F59E0B" : "", g === 3 ? "bg-#10B981" : ""], "stat-icon absolute h-72 w-72 rounded-full opacity-15 transition -right-12 -top-12 group-hover:scale-110 group-hover:opacity-25"])}" aria-hidden="true" data-v-4a0502a3></div><div class="${ssrRenderClass([[g === 0 ? "bg-#8B5CF6" : "", g === 1 ? "bg-#EC4899" : "", g === 2 ? "bg-#F59E0B" : "", g === 3 ? "bg-#10B981" : ""], "absolute left-24 top-24 h-8 w-8 rounded-full opacity-60"])}" aria-hidden="true" data-v-4a0502a3></div><p class="${ssrRenderClass([[g === 0 ? "bg-gradient-to-r from-#8B5CF6 to-#A78BFA" : "", g === 1 ? "bg-gradient-to-r from-#EC4899 to-#F472B6" : "", g === 2 ? "bg-gradient-to-r from-#F59E0B to-#FBBF24" : "", g === 3 ? "bg-gradient-to-r from-#10B981 to-#34D399" : ""], "relative mb-8 bg-clip-text text-40 text-transparent font-700 transition group-hover:scale-105"])}" lt-s768="text-28" data-v-4a0502a3>${ssrInterpolate(h.value)}</p><p class="relative text-16 color-#6B7280 font-500" lt-s768="text-14" data-v-4a0502a3>${ssrInterpolate(h.label)}</p></div>`);
    }), p("<!--]--></div></div></section>"), p(ssrRenderComponent(ye, { "is-h1": false, setting: b, "item-class": "grid-cols-4", "max-width": "max-w-1400" }, null, E)), p(ssrRenderComponent(ne, { setting: u }, null, E)), p(`<section class="showcase-section py-80" lt-s768="py-48" data-v-4a0502a3><div class="mx-a max-w-1400 px-24" data-v-4a0502a3><div class="mb-48 flex items-end justify-between" lt-s768="flex-col items-center gap-16 mb-32" data-v-4a0502a3><div lt-s768="text-center" data-v-4a0502a3><h2 class="rozha mb-16 text-40 color-#111827 leading-48" lt-s768="text-28 leading-36" data-v-4a0502a3>${ssrInterpolate(i.$t("newHome.showcase.title"))}</h2><p class="max-w-600 text-18 color-#6B7280" lt-s768="text-16" data-v-4a0502a3>${ssrInterpolate(i.$t("newHome.showcase.subtitle"))}</p></div>`), p(ssrRenderComponent(oe, { to: "/ai-logo-generator/text-to-logo", class: "view-all-btn flex items-center gap-8 border-2 border-#8B5CF6 rounded-12 px-20 py-12 text-16 color-#8B5CF6 font-600 no-underline transition hover:bg-#8B5CF6 hover:color-#fff" }, { default: withCtx((h, g, O, k) => {
      if (g) g(`${ssrInterpolate(i.$t("newHome.showcase.viewAll"))} <span data-v-4a0502a3${k}>\u2192</span>`);
      else return [createTextVNode(toDisplayString(i.$t("newHome.showcase.viewAll")) + " ", 1), createVNode("span", null, "\u2192")];
    }), _: 1 }, E)), p('</div><div class="grid grid-cols-4 gap-24" lt-s1024="grid-cols-3" lt-s768="grid-cols-2" data-v-4a0502a3><!--[-->'), ssrRenderList(unref(w).slice(0, 8), (h, g) => {
      p(ssrRenderComponent(oe, { key: g, to: "/ai-logo-generator/text-to-logo", class: "logo-card group block overflow-hidden rounded-16 bg-#F9FAFB no-underline transition hover:shadow-lg", "aria-label": `View logo design: ${h.alt}` }, { default: withCtx((O, k, W, H) => {
        if (k) k(`<div class="aspect-square overflow-hidden" data-v-4a0502a3${H}><img${ssrRenderAttr("src", ("aliImgPath" in i ? i.aliImgPath : unref(vt))(h.src, { width: 600 }))}${ssrRenderAttr("alt", h.alt)} class="h-full w-full object-cover transition group-hover:scale-105" loading="lazy" data-v-4a0502a3${H}></div>`);
        else return [createVNode("div", { class: "aspect-square overflow-hidden" }, [createVNode("img", { src: ("aliImgPath" in i ? i.aliImgPath : unref(vt))(h.src, { width: 600 }), alt: h.alt, class: "h-full w-full object-cover transition group-hover:scale-105", loading: "lazy" }, null, 8, ["src", "alt"])])];
      }), _: 2 }, E));
    }), p(`<!--]--></div></div></section><section class="testimonials-section bg-#F9FAFB py-80" lt-s768="py-48" data-v-4a0502a3><div class="mx-a max-w-1400 px-24" data-v-4a0502a3><div class="mb-48 text-center" lt-s768="mb-32" data-v-4a0502a3><h2 class="rozha mb-16 text-40 color-#111827 leading-48" lt-s768="text-28 leading-36" data-v-4a0502a3>${ssrInterpolate(i.$t("newHome.testimonials.title"))}</h2><p class="mx-a max-w-600 text-18 color-#6B7280" lt-s768="text-16" data-v-4a0502a3>${ssrInterpolate(i.$t("newHome.testimonials.subtitle"))}</p></div><div class="grid grid-cols-3 gap-24" lt-s1024="grid-cols-1" data-v-4a0502a3><!--[-->`), ssrRenderList(unref(m), (h, g) => {
      p(`<article class="${ssrRenderClass([{ "ring-2 ring-#8B5CF6/20": g === 1 }, "testimonial-card relative rounded-20 bg-#fff p-32 shadow-sm transition hover:shadow-lg hover:-translate-y-1"])}" aria-label="Customer testimonial" data-v-4a0502a3><div class="absolute select-none text-72 color-#8B5CF6/10 leading-none font-serif -left-2 -top-4" aria-hidden="true" data-v-4a0502a3> &quot; </div><div class="relative" data-v-4a0502a3><div class="mb-20 flex items-center gap-1" role="img" aria-label="Rating" data-v-4a0502a3><!--[-->`), ssrRenderList(h.rating, (O) => {
        p('<span class="text-20 color-#FBBF24" aria-hidden="true" data-v-4a0502a3>\u2605</span>');
      }), p(`<!--]--></div><blockquote class="mb-24 text-16 color-#4B5563 leading-26 italic" data-v-4a0502a3> &quot;${ssrInterpolate(h.content)}&quot; </blockquote><div class="flex items-center gap-12" data-v-4a0502a3><div class="h-48 w-48 overflow-hidden rounded-full bg-#E5E7EB ring-2 ring-#8B5CF6/20" data-v-4a0502a3><img${ssrRenderAttr("src", h.avatar)}${ssrRenderAttr("alt", h.name)} class="h-full w-full object-cover" data-v-4a0502a3></div><div data-v-4a0502a3><p class="text-16 color-#111827 font-600" data-v-4a0502a3>${ssrInterpolate(h.name)}</p><p class="text-14 color-#6B7280" data-v-4a0502a3>${ssrInterpolate(h.role)}</p></div></div></div></article>`);
    }), p(`<!--]--></div></div></section><section class="faq-section py-80" lt-s768="py-48" data-v-4a0502a3><div class="mx-a max-w-800 px-24" data-v-4a0502a3><div class="mb-48 text-center" lt-s768="mb-32" data-v-4a0502a3><h2 class="rozha mb-16 text-40 color-#111827 leading-48" lt-s768="text-28 leading-36" data-v-4a0502a3>${ssrInterpolate(i.$t("newHome.faq.title"))}</h2><p class="text-18 color-#6B7280" lt-s768="text-16" data-v-4a0502a3>${ssrInterpolate(i.$t("newHome.faq.subtitle"))}</p></div><div class="space-y-16" role="list" aria-label="Frequently asked questions" data-v-4a0502a3><!--[-->`), ssrRenderList(unref(C$1), (h, g) => {
      p(`<div class="${ssrRenderClass([{ "border-#8B5CF6 shadow-md": unref(v) === g }, "faq-item overflow-hidden border border-#E5E7EB rounded-16 bg-#fff transition"])}" role="listitem" data-v-4a0502a3><button class="w-full flex items-center justify-between px-24 py-20 text-left transition"${ssrRenderAttr("aria-expanded", unref(v) === g)}${ssrRenderAttr("aria-controls", `faq-answer-${g}`)} data-v-4a0502a3><span class="pr-16 text-18 color-#111827 font-600" lt-s768="text-16" data-v-4a0502a3>${ssrInterpolate(h.question)}</span><span class="${ssrRenderClass([{ "rotate-180": unref(v) === g }, "text-20 color-#6B7280 transition inline-block"])}" aria-hidden="true" data-v-4a0502a3>\u25BC</span></button><div${ssrRenderAttr("id", `faq-answer-${g}`)} class="${ssrRenderClass([unref(v) === g ? "max-h-200 pb-24 px-24" : "max-h-0", "overflow-hidden transition-all"])}"${ssrRenderAttr("aria-hidden", unref(v) !== g)} data-v-4a0502a3><p class="text-16 color-#6B7280 leading-26" data-v-4a0502a3>${ssrInterpolate(h.answer)}</p></div></div>`);
    }), p("<!--]--></div></div></section>"), ((_a2 = unref(S).list) == null ? void 0 : _a2.length) ? (p(`<section class="resources-section relative overflow-hidden from-#F9FAFB to-#fff bg-gradient-to-b py-80" lt-s768="py-48" data-v-4a0502a3><div class="absolute top-1/2 h-400 w-400 rounded-full bg-#8B5CF6/5 blur-3xl -left-100 -translate-y-1/2" aria-hidden="true" data-v-4a0502a3></div><div class="absolute top-1/3 h-300 w-300 rounded-full bg-#EC4899/5 blur-3xl -right-100" aria-hidden="true" data-v-4a0502a3></div><div class="relative mx-a max-w-1400 px-24" data-v-4a0502a3><div class="mb-48 text-center" lt-s768="mb-32" data-v-4a0502a3><h2 class="rozha mb-16 text-40 color-#111827 leading-48" lt-s768="text-28 leading-36" data-v-4a0502a3>${ssrInterpolate(unref(S).title)}</h2><p class="mx-a max-w-600 text-18 color-#6B7280" lt-s768="text-16" data-v-4a0502a3>${ssrInterpolate(i.$t("newHome.resources.subtitle"))}</p></div><div class="flex-c flex-wrap gap-12" lt-s768="gap-8" aria-label="Logo resources" data-v-4a0502a3><!--[-->`), ssrRenderList(unref(S).list, (h, g) => {
      p(ssrRenderComponent(we, { key: g, to: unref(o)(`/logos/${h.value}`), class: "resource-tag group relative overflow-hidden border border-#E5E7EB/80 rounded-full bg-#fff px-24 py-12 text-16 color-#6B7280 no-underline transition-all hover:border-#8B5CF6/50 hover:color-#8B5CF6 hover:shadow-#8B5CF6/10 hover:shadow-md hover:-translate-y-1", "lt-s768": "text-14 px-16 py-8", "aria-label": `View ${h.name} logos` }, { default: withCtx((O, k, W, H) => {
        if (k) k(`<span class="relative z-10" data-v-4a0502a3${H}>${ssrInterpolate(h.name)}</span><div class="absolute inset-0 from-#8B5CF6/5 to-#EC4899/5 bg-gradient-to-r opacity-0 transition group-hover:opacity-100" aria-hidden="true" data-v-4a0502a3${H}></div>`);
        else return [createVNode("span", { class: "relative z-10" }, toDisplayString(h.name), 1), createVNode("div", { class: "absolute inset-0 from-#8B5CF6/5 to-#EC4899/5 bg-gradient-to-r opacity-0 transition group-hover:opacity-100", "aria-hidden": "true" })];
      }), _: 2 }, E));
    }), p("<!--]--></div></div></section>")) : p("<!---->"), p(`<section class="final-cta-section py-60" data-v-4a0502a3><div class="cta-bg-dark relative mx-a max-w-1200 overflow-hidden rounded-32 px-48 py-60" lt-s768="px-24 py-40 rounded-24 mx-16" data-v-4a0502a3><div class="absolute h-200 w-200 rounded-full bg-#8B5CF6 opacity-30 blur-3xl -left-40 -top-40" aria-hidden="true" data-v-4a0502a3></div><div class="absolute h-200 w-200 rounded-full bg-#EC4899 opacity-30 blur-3xl -bottom-40 -right-40" aria-hidden="true" data-v-4a0502a3></div><div class="absolute left-1/2 top-1/2 h-300 w-300 rounded-full bg-#6366F1 opacity-20 blur-3xl -translate-x-1/2 -translate-y-1/2" aria-hidden="true" data-v-4a0502a3></div><div class="relative mx-a max-w-600 text-center" data-v-4a0502a3><div class="mx-a mb-24 h-64 w-64 flex-c rounded-20 from-#A78BFA to-#F472B6 bg-gradient-to-br shadow-#8B5CF6/30 shadow-lg" data-v-4a0502a3><img${ssrRenderAttr("src", unref(A))} class="w-40" alt="Logo" aria-hidden="true" data-v-4a0502a3></div><h2 class="rozha mb-16 text-36 color-#fff leading-44" lt-s768="text-28 leading-36" data-v-4a0502a3>${ssrInterpolate(i.$t("newHome.finalCta.title"))}</h2><p class="mb-32 text-18 color-#C4B5FD" lt-s768="text-16 mb-24" data-v-4a0502a3>${ssrInterpolate(i.$t("newHome.finalCta.subtitle"))}</p><div class="flex items-center gap-12 border border-#fff/20 rounded-16 bg-#fff/10 p-8 backdrop-blur-sm" lt-s768="flex-col p-16 gap-16" data-v-4a0502a3>`), p(ssrRenderComponent(ae, { modelValue: unref(n), "onUpdate:modelValue": (h) => isRef(n) ? n.value = h : null, placeholder: i.$t("newHome.hero.inputPlaceholder"), class: "cta-input flex-1", size: "large", "aria-label": "Brand name", onInput: (h) => unref(l)(h), onKeyup: d }, null, E)), p(ssrRenderComponent(oe, { to: unref(a)(), "aria-label": "Create logo now" }, { default: withCtx((h, g, O, k) => {
      if (g) g(ssrRenderComponent(se, { class: "h-52! w-max! rounded-12! px-32! text-16! font-600!" }, { default: withCtx((W, H, Te, Ae) => {
        if (H) H(`${ssrInterpolate(i.$t("newHome.hero.cta"))}`);
        else return [createTextVNode(toDisplayString(i.$t("newHome.hero.cta")), 1)];
      }), _: 1 }, O, k));
      else return [createVNode(se, { class: "h-52! w-max! rounded-12! px-32! text-16! font-600!" }, { default: withCtx(() => [createTextVNode(toDisplayString(i.$t("newHome.hero.cta")), 1)]), _: 1 })];
    }), _: 1 }, E)), p("</div></div></div></section>"), p(ssrRenderComponent(_e, null, null, E)), p(ssrRenderComponent(ze, { "is-dark": "" }, null, E)), p("</div>");
  };
} }), gt = Qe.setup;
Qe.setup = (e, t) => {
  const o = useSSRContext();
  return (o.modules || (o.modules = /* @__PURE__ */ new Set())).add("pages/index.vue"), gt ? gt(e, t) : void 0;
};
const Zo = s(Qe, [["__scopeId", "data-v-4a0502a3"]]);

export { Zo as default };
//# sourceMappingURL=index-BL8PwUAZ.mjs.map
