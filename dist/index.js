import { jsxs as c, jsx as o } from "react/jsx-runtime";
import { useState as s, useEffect as u } from "react";
import l from "lodash";
const a = "_counter_1wts1_1", i = "_header_1wts1_10", h = "_button_1wts1_16", r = {
  counter: a,
  header: i,
  button: h
}, m = (n) => {
  const [t, e] = s(n);
  return {
    count: t,
    incrementCount: () => e(t + 1)
  };
}, { throttle: d } = l, f = ({ initialValue: n = 0 }) => {
  const { count: t, incrementCount: e } = m(n);
  return u(() => {
    d(() => {
      console.log("throttle");
    }, 10)();
  }, []), /* @__PURE__ */ c("div", { className: r.counter, children: [
    /* @__PURE__ */ o("h2", { className: r.header, children: "Counter" }),
    /* @__PURE__ */ o("button", { className: r.button, type: "button", onClick: e, children: "Increment by one" }),
    /* @__PURE__ */ c("div", { children: [
      "Total value: ",
      /* @__PURE__ */ o("strong", { children: t })
    ] })
  ] });
};
export {
  f as Counter
};
//# sourceMappingURL=index.js.map
