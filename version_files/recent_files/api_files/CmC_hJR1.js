import {
  _ as m
} from "./Dfw_kTvk.js";
import {
  _
} from "./CxV9IiCg.js";
import {
  d as c,
  aL as u,
  ap as l,
  y as b,
  ae as d,
  o as f,
  c as k,
  b as o,
  U as n,
  e as r,
  z as v,
  f as T
} from "./CEkQG6G2.js";
import "./B0dYHWtj.js";
import "./CR8lMdFr.js";
import "./Cup1UUIa.js";
import "./BgKCkwpn.js";
import "./CcsfoEEB.js";
import "./8kxGDCXL.js";
import "./DCKbnw83.js";
const y = {
    class: "pages-tribe-top page"
  },
  g = c({
    __name: "top",
    setup(h) {
      const a = u();
      return l().meta.back = (() => {
        const e = b().previousRoute.value;
        return () => d().push({
          name: e ? e.name : "tribe-join"
        })
      })(), (e, x) => {
        const s = m,
          i = _;
        return f(), k("div", y, [o(i, {
          title: ("t" in e ? e.t : r(v))("tribes.top.title"),
          items: r(a).leaderboard.value,
          "my-item": r(a).tribeOrUndefined.value
        }, {
          "list-item": n(({
            item: t,
            idx: p
          }) => [o(s, {
            tribe: t,
            rank: p + 1
          }, null, 8, ["tribe", "rank"])]),
          "my-item": n(({
            item: t
          }) => [o(s, {
            tribe: t,
            rank: t.rank.tribe,
            "no-open": ""
          }, null, 8, ["tribe", "rank"])]),
          _: 1
        }, 8, ["title", "items", "my-item"])])
      }
    }
  }),
  A = T(g, [
    ["__scopeId", "data-v-457281d1"]
  ]);
export {
  A as
  default
};