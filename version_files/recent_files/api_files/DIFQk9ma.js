import {
  d,
  o as m,
  c as b,
  a as n,
  t as i,
  b as r,
  U as u,
  e as o,
  z as l,
  n as v,
  _ as h,
  aH as V,
  f as p,
  ar as B,
  J as $,
  V as S,
  x as g,
  aR as k
} from "./CEkQG6G2.js";
const I = {
    class: "tribe-item-see-all"
  },
  x = {
    class: "label"
  },
  y = {
    class: "see-all-label"
  },
  z = d({
    __name: "TribeItemSeeAll",
    props: {
      label: {
        type: String,
        required: !0
      },
      to: {
        type: String,
        default: void 0
      }
    },
    setup(a) {
      return (t, e) => {
        const s = h,
          _ = V;
        return m(), b("div", I, [n("div", x, i(a.label), 1), r(_, {
          class: v(["see-all", {
            "is-disabled": !a.to
          }]),
          to: a.to
        }, {
          default: u(() => [n("div", y, i(("t" in t ? t.t : o(l))("tribes.item.see_all")), 1), r(s, {
            name: "chevron-right",
            class: "see-all-icon"
          })]),
          _: 1
        }, 8, ["to", "class"])])
      }
    }
  }),
  U = p(z, [
    ["__scopeId", "data-v-c2f17806"]
  ]),
  C = {
    class: "pages-tribe-farm-faster-sheet"
  },
  N = {
    class: "title"
  },
  E = {
    class: "subtitle"
  },
  K = d({
    __name: "FarmFasterSheet",
    props: {
      modelValue: {
        type: Boolean,
        required: !0
      },
      modelModifiers: {}
    },
    emits: ["update:modelValue"],
    setup(a) {
      const t = B(a, "modelValue");
      return (e, s) => {
        const _ = g,
          f = k;
        return m(), $(f, {
          modelValue: t.value,
          "onUpdate:modelValue": s[1] || (s[1] = c => t.value = c)
        }, {
          default: u(() => [n("div", C, [n("div", N, i(("t" in e ? e.t : o(l))("tribes.farm_faster_sheet.title")), 1), n("div", E, i(("t" in e ? e.t : o(l))("tribes.farm_faster_sheet.subtitle")), 1), r(_, {
            label: ("t" in e ? e.t : o(l))("base.continue"),
            fill: "",
            size: o(S).LARGE,
            onClick: s[0] || (s[0] = c => t.value = !1)
          }, null, 8, ["label", "size"])])]),
          _: 1
        }, 8, ["modelValue"])
      }
    }
  }),
  q = p(K, [
    ["__scopeId", "data-v-d3f75073"]
  ]);
export {
  U as _, q as a
};