import {
  _ as p
} from "./jSH_7D0L.js";
import {
  _ as l
} from "./DJMHDB9y.js";
import {
  d as c,
  o as m,
  c as d,
  b as r,
  e as o,
  z as j,
  f as u,
  bl as f,
  j as a,
  J as T
} from "./CEkQG6G2.js";
import {
  a as g
} from "./JYwA3zMO.js";
import "./d09dnnve.js";
import "./BgKCkwpn.js";
const M = {
    class: "memepad-jetton-page-transactions"
  },
  P = c({
    __name: "PageTransactions",
    props: {
      jetton: {},
      jettonTransactions: {},
      jettonModalControls: {}
    },
    setup(_) {
      return (t, s) => {
        const n = p,
          e = l;
        return m(), d("div", M, [r(n, {
          title: ("t" in t ? t.t : o(j))("memepad.transactions.title", {
            ticker: t.jetton.ticker
          }),
          jetton: t.jetton,
          "jetton-modal-controls": t.jettonModalControls
        }, null, 8, ["title", "jetton", "jetton-modal-controls"]), r(e, {
          transactions: t.jettonTransactions
        }, null, 8, ["transactions"])])
      }
    }
  }),
  b = u(P, [
    ["__scopeId", "data-v-65afc0b1"]
  ]),
  x = c({
    __name: "transactions",
    setup(_) {
      const t = f(),
        s = a(() => t.jetton),
        n = a(() => t.jettonModalControls),
        e = a(() => t.jettonTransactions);
      return g("memepad-about-transactions"), (k, C) => {
        const i = b;
        return m(), T(i, {
          jetton: o(s),
          "jetton-transactions": o(e),
          "jetton-modal-controls": o(n)
        }, null, 8, ["jetton", "jetton-transactions", "jetton-modal-controls"])
      }
    }
  });
export {
  x as
  default
};