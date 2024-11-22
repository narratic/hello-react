import * as b from "react";
import Dn, { forwardRef as Zc, createElement as zs, useState as vo, useEffect as To, useLayoutEffect as vm, createContext as Si, useContext as Et, useId as x_, useCallback as ym, Component as w_, useRef as Vs, useInsertionEffect as b_, useMemo as Po, Fragment as xm } from "react";
import * as ca from "react-dom";
import S_ from "react-dom";
var ro = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function C_(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var wc = { exports: {} }, io = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _h;
function __() {
  if (_h)
    return io;
  _h = 1;
  var e = Dn, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, s = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, c = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(u, f, h) {
    var p, g = {}, y = null, C = null;
    h !== void 0 && (y = "" + h), f.key !== void 0 && (y = "" + f.key), f.ref !== void 0 && (C = f.ref);
    for (p in f)
      o.call(f, p) && !c.hasOwnProperty(p) && (g[p] = f[p]);
    if (u && u.defaultProps)
      for (p in f = u.defaultProps, f)
        g[p] === void 0 && (g[p] = f[p]);
    return { $$typeof: t, type: u, key: y, ref: C, props: g, _owner: s.current };
  }
  return io.Fragment = r, io.jsx = l, io.jsxs = l, io;
}
var oo = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Th;
function T_() {
  return Th || (Th = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Dn, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), u = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), C = Symbol.for("react.offscreen"), T = Symbol.iterator, S = "@@iterator";
    function _(E) {
      if (E === null || typeof E != "object")
        return null;
      var W = T && E[T] || E[S];
      return typeof W == "function" ? W : null;
    }
    var A = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function R(E) {
      {
        for (var W = arguments.length, G = new Array(W > 1 ? W - 1 : 0), se = 1; se < W; se++)
          G[se - 1] = arguments[se];
        N("error", E, G);
      }
    }
    function N(E, W, G) {
      {
        var se = A.ReactDebugCurrentFrame, Ee = se.getStackAddendum();
        Ee !== "" && (W += "%s", G = G.concat([Ee]));
        var De = G.map(function(be) {
          return String(be);
        });
        De.unshift("Warning: " + W), Function.prototype.apply.call(console[E], console, De);
      }
    }
    var L = !1, j = !1, H = !1, $ = !1, U = !1, J;
    J = Symbol.for("react.module.reference");
    function ee(E) {
      return !!(typeof E == "string" || typeof E == "function" || E === o || E === c || U || E === s || E === h || E === p || $ || E === C || L || j || H || typeof E == "object" && E !== null && (E.$$typeof === y || E.$$typeof === g || E.$$typeof === l || E.$$typeof === u || E.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      E.$$typeof === J || E.getModuleId !== void 0));
    }
    function he(E, W, G) {
      var se = E.displayName;
      if (se)
        return se;
      var Ee = W.displayName || W.name || "";
      return Ee !== "" ? G + "(" + Ee + ")" : G;
    }
    function Z(E) {
      return E.displayName || "Context";
    }
    function ae(E) {
      if (E == null)
        return null;
      if (typeof E.tag == "number" && R("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof E == "function")
        return E.displayName || E.name || null;
      if (typeof E == "string")
        return E;
      switch (E) {
        case o:
          return "Fragment";
        case r:
          return "Portal";
        case c:
          return "Profiler";
        case s:
          return "StrictMode";
        case h:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof E == "object")
        switch (E.$$typeof) {
          case u:
            var W = E;
            return Z(W) + ".Consumer";
          case l:
            var G = E;
            return Z(G._context) + ".Provider";
          case f:
            return he(E, E.render, "ForwardRef");
          case g:
            var se = E.displayName || null;
            return se !== null ? se : ae(E.type) || "Memo";
          case y: {
            var Ee = E, De = Ee._payload, be = Ee._init;
            try {
              return ae(be(De));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var te = Object.assign, Te = 0, le, X, K, pe, Me, Pe, cn;
    function un() {
    }
    un.__reactDisabledLog = !0;
    function Bt() {
      {
        if (Te === 0) {
          le = console.log, X = console.info, K = console.warn, pe = console.error, Me = console.group, Pe = console.groupCollapsed, cn = console.groupEnd;
          var E = {
            configurable: !0,
            enumerable: !0,
            value: un,
            writable: !0
          };
          Object.defineProperties(console, {
            info: E,
            log: E,
            warn: E,
            error: E,
            group: E,
            groupCollapsed: E,
            groupEnd: E
          });
        }
        Te++;
      }
    }
    function xt() {
      {
        if (Te--, Te === 0) {
          var E = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: te({}, E, {
              value: le
            }),
            info: te({}, E, {
              value: X
            }),
            warn: te({}, E, {
              value: K
            }),
            error: te({}, E, {
              value: pe
            }),
            group: te({}, E, {
              value: Me
            }),
            groupCollapsed: te({}, E, {
              value: Pe
            }),
            groupEnd: te({}, E, {
              value: cn
            })
          });
        }
        Te < 0 && R("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var dt = A.ReactCurrentDispatcher, ne;
    function xe(E, W, G) {
      {
        if (ne === void 0)
          try {
            throw Error();
          } catch (Ee) {
            var se = Ee.stack.trim().match(/\n( *(at )?)/);
            ne = se && se[1] || "";
          }
        return `
` + ne + E;
      }
    }
    var Ve = !1, Ae;
    {
      var Ce = typeof WeakMap == "function" ? WeakMap : Map;
      Ae = new Ce();
    }
    function we(E, W) {
      if (!E || Ve)
        return "";
      {
        var G = Ae.get(E);
        if (G !== void 0)
          return G;
      }
      var se;
      Ve = !0;
      var Ee = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var De;
      De = dt.current, dt.current = null, Bt();
      try {
        if (W) {
          var be = function() {
            throw Error();
          };
          if (Object.defineProperty(be.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(be, []);
            } catch (pt) {
              se = pt;
            }
            Reflect.construct(E, [], be);
          } else {
            try {
              be.call();
            } catch (pt) {
              se = pt;
            }
            E.call(be.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (pt) {
            se = pt;
          }
          E();
        }
      } catch (pt) {
        if (pt && se && typeof pt.stack == "string") {
          for (var ve = pt.stack.split(`
`), st = se.stack.split(`
`), ze = ve.length - 1, qe = st.length - 1; ze >= 1 && qe >= 0 && ve[ze] !== st[qe]; )
            qe--;
          for (; ze >= 1 && qe >= 0; ze--, qe--)
            if (ve[ze] !== st[qe]) {
              if (ze !== 1 || qe !== 1)
                do
                  if (ze--, qe--, qe < 0 || ve[ze] !== st[qe]) {
                    var at = `
` + ve[ze].replace(" at new ", " at ");
                    return E.displayName && at.includes("<anonymous>") && (at = at.replace("<anonymous>", E.displayName)), typeof E == "function" && Ae.set(E, at), at;
                  }
                while (ze >= 1 && qe >= 0);
              break;
            }
        }
      } finally {
        Ve = !1, dt.current = De, xt(), Error.prepareStackTrace = Ee;
      }
      var Hn = E ? E.displayName || E.name : "", Wt = Hn ? xe(Hn) : "";
      return typeof E == "function" && Ae.set(E, Wt), Wt;
    }
    function nt(E, W, G) {
      return we(E, !1);
    }
    function Ue(E) {
      var W = E.prototype;
      return !!(W && W.isReactComponent);
    }
    function ht(E, W, G) {
      if (E == null)
        return "";
      if (typeof E == "function")
        return we(E, Ue(E));
      if (typeof E == "string")
        return xe(E);
      switch (E) {
        case h:
          return xe("Suspense");
        case p:
          return xe("SuspenseList");
      }
      if (typeof E == "object")
        switch (E.$$typeof) {
          case f:
            return nt(E.render);
          case g:
            return ht(E.type, W, G);
          case y: {
            var se = E, Ee = se._payload, De = se._init;
            try {
              return ht(De(Ee), W, G);
            } catch {
            }
          }
        }
      return "";
    }
    var Rt = Object.prototype.hasOwnProperty, rt = {}, yr = A.ReactDebugCurrentFrame;
    function Jt(E) {
      if (E) {
        var W = E._owner, G = ht(E.type, E._source, W ? W.type : null);
        yr.setExtraStackFrame(G);
      } else
        yr.setExtraStackFrame(null);
    }
    function xr(E, W, G, se, Ee) {
      {
        var De = Function.call.bind(Rt);
        for (var be in E)
          if (De(E, be)) {
            var ve = void 0;
            try {
              if (typeof E[be] != "function") {
                var st = Error((se || "React class") + ": " + G + " type `" + be + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof E[be] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw st.name = "Invariant Violation", st;
              }
              ve = E[be](W, be, se, G, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ze) {
              ve = ze;
            }
            ve && !(ve instanceof Error) && (Jt(Ee), R("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", se || "React class", G, be, typeof ve), Jt(null)), ve instanceof Error && !(ve.message in rt) && (rt[ve.message] = !0, Jt(Ee), R("Failed %s type: %s", G, ve.message), Jt(null));
          }
      }
    }
    var Ot = Array.isArray;
    function bn(E) {
      return Ot(E);
    }
    function Wr(E) {
      {
        var W = typeof Symbol == "function" && Symbol.toStringTag, G = W && E[Symbol.toStringTag] || E.constructor.name || "Object";
        return G;
      }
    }
    function Na(E) {
      try {
        return $n(E), !1;
      } catch {
        return !0;
      }
    }
    function $n(E) {
      return "" + E;
    }
    function Io(E) {
      if (Na(E))
        return R("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Wr(E)), $n(E);
    }
    var Qt = A.ReactCurrentOwner, Un = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, $r, Ur, wr;
    wr = {};
    function Mi(E) {
      if (Rt.call(E, "ref")) {
        var W = Object.getOwnPropertyDescriptor(E, "ref").get;
        if (W && W.isReactWarning)
          return !1;
      }
      return E.ref !== void 0;
    }
    function Di(E) {
      if (Rt.call(E, "key")) {
        var W = Object.getOwnPropertyDescriptor(E, "key").get;
        if (W && W.isReactWarning)
          return !1;
      }
      return E.key !== void 0;
    }
    function Ii(E, W) {
      if (typeof E.ref == "string" && Qt.current && W && Qt.current.stateNode !== W) {
        var G = ae(Qt.current.type);
        wr[G] || (R('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', ae(Qt.current.type), E.ref), wr[G] = !0);
      }
    }
    function Li(E, W) {
      {
        var G = function() {
          $r || ($r = !0, R("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", W));
        };
        G.isReactWarning = !0, Object.defineProperty(E, "key", {
          get: G,
          configurable: !0
        });
      }
    }
    function ji(E, W) {
      {
        var G = function() {
          Ur || (Ur = !0, R("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", W));
        };
        G.isReactWarning = !0, Object.defineProperty(E, "ref", {
          get: G,
          configurable: !0
        });
      }
    }
    var ki = function(E, W, G, se, Ee, De, be) {
      var ve = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: E,
        key: W,
        ref: G,
        props: be,
        // Record the component responsible for creating this element.
        _owner: De
      };
      return ve._store = {}, Object.defineProperty(ve._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(ve, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: se
      }), Object.defineProperty(ve, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ee
      }), Object.freeze && (Object.freeze(ve.props), Object.freeze(ve)), ve;
    };
    function Ma(E, W, G, se, Ee) {
      {
        var De, be = {}, ve = null, st = null;
        G !== void 0 && (Io(G), ve = "" + G), Di(W) && (Io(W.key), ve = "" + W.key), Mi(W) && (st = W.ref, Ii(W, Ee));
        for (De in W)
          Rt.call(W, De) && !Un.hasOwnProperty(De) && (be[De] = W[De]);
        if (E && E.defaultProps) {
          var ze = E.defaultProps;
          for (De in ze)
            be[De] === void 0 && (be[De] = ze[De]);
        }
        if (ve || st) {
          var qe = typeof E == "function" ? E.displayName || E.name || "Unknown" : E;
          ve && Li(be, qe), st && ji(be, qe);
        }
        return ki(E, ve, st, Ee, se, Qt.current, be);
      }
    }
    var Vi = A.ReactCurrentOwner, Lo = A.ReactDebugCurrentFrame;
    function Sn(E) {
      if (E) {
        var W = E._owner, G = ht(E.type, E._source, W ? W.type : null);
        Lo.setExtraStackFrame(G);
      } else
        Lo.setExtraStackFrame(null);
    }
    var Hr;
    Hr = !1;
    function Fi(E) {
      return typeof E == "object" && E !== null && E.$$typeof === t;
    }
    function jo() {
      {
        if (Vi.current) {
          var E = ae(Vi.current.type);
          if (E)
            return `

Check the render method of \`` + E + "`.";
        }
        return "";
      }
    }
    function Da(E) {
      return "";
    }
    var ko = {};
    function Vo(E) {
      {
        var W = jo();
        if (!W) {
          var G = typeof E == "string" ? E : E.displayName || E.name;
          G && (W = `

Check the top-level render call using <` + G + ">.");
        }
        return W;
      }
    }
    function Fo(E, W) {
      {
        if (!E._store || E._store.validated || E.key != null)
          return;
        E._store.validated = !0;
        var G = Vo(W);
        if (ko[G])
          return;
        ko[G] = !0;
        var se = "";
        E && E._owner && E._owner !== Vi.current && (se = " It was passed a child from " + ae(E._owner.type) + "."), Sn(E), R('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', G, se), Sn(null);
      }
    }
    function Bo(E, W) {
      {
        if (typeof E != "object")
          return;
        if (bn(E))
          for (var G = 0; G < E.length; G++) {
            var se = E[G];
            Fi(se) && Fo(se, W);
          }
        else if (Fi(E))
          E._store && (E._store.validated = !0);
        else if (E) {
          var Ee = _(E);
          if (typeof Ee == "function" && Ee !== E.entries)
            for (var De = Ee.call(E), be; !(be = De.next()).done; )
              Fi(be.value) && Fo(be.value, W);
        }
      }
    }
    function Ia(E) {
      {
        var W = E.type;
        if (W == null || typeof W == "string")
          return;
        var G;
        if (typeof W == "function")
          G = W.propTypes;
        else if (typeof W == "object" && (W.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        W.$$typeof === g))
          G = W.propTypes;
        else
          return;
        if (G) {
          var se = ae(W);
          xr(G, E.props, "prop", se, E);
        } else if (W.PropTypes !== void 0 && !Hr) {
          Hr = !0;
          var Ee = ae(W);
          R("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Ee || "Unknown");
        }
        typeof W.getDefaultProps == "function" && !W.getDefaultProps.isReactClassApproved && R("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Bi(E) {
      {
        for (var W = Object.keys(E.props), G = 0; G < W.length; G++) {
          var se = W[G];
          if (se !== "children" && se !== "key") {
            Sn(E), R("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", se), Sn(null);
            break;
          }
        }
        E.ref !== null && (Sn(E), R("Invalid attribute `ref` supplied to `React.Fragment`."), Sn(null));
      }
    }
    var Wo = {};
    function zr(E, W, G, se, Ee, De) {
      {
        var be = ee(E);
        if (!be) {
          var ve = "";
          (E === void 0 || typeof E == "object" && E !== null && Object.keys(E).length === 0) && (ve += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var st = Da();
          st ? ve += st : ve += jo();
          var ze;
          E === null ? ze = "null" : bn(E) ? ze = "array" : E !== void 0 && E.$$typeof === t ? (ze = "<" + (ae(E.type) || "Unknown") + " />", ve = " Did you accidentally export a JSX literal instead of a component?") : ze = typeof E, R("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ze, ve);
        }
        var qe = Ma(E, W, G, Ee, De);
        if (qe == null)
          return qe;
        if (be) {
          var at = W.children;
          if (at !== void 0)
            if (se)
              if (bn(at)) {
                for (var Hn = 0; Hn < at.length; Hn++)
                  Bo(at[Hn], E);
                Object.freeze && Object.freeze(at);
              } else
                R("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Bo(at, E);
        }
        if (Rt.call(W, "key")) {
          var Wt = ae(E), pt = Object.keys(W).filter(function($o) {
            return $o !== "key";
          }), Wi = pt.length > 0 ? "{key: someKey, " + pt.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Wo[Wt + Wi]) {
            var Fa = pt.length > 0 ? "{" + pt.join(": ..., ") + ": ...}" : "{}";
            R(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Wi, Wt, Fa, Wt), Wo[Wt + Wi] = !0;
          }
        }
        return E === o ? Bi(qe) : Ia(qe), qe;
      }
    }
    function La(E, W, G) {
      return zr(E, W, G, !0);
    }
    function ja(E, W, G) {
      return zr(E, W, G, !1);
    }
    var ka = ja, Va = La;
    oo.Fragment = o, oo.jsx = ka, oo.jsxs = Va;
  }()), oo;
}
process.env.NODE_ENV === "production" ? wc.exports = __() : wc.exports = T_();
var v = wc.exports, Gs = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
Gs.exports;
(function(e, t) {
  (function() {
    var r, o = "4.17.21", s = 200, c = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", l = "Expected a function", u = "Invalid `variable` option passed into `_.template`", f = "__lodash_hash_undefined__", h = 500, p = "__lodash_placeholder__", g = 1, y = 2, C = 4, T = 1, S = 2, _ = 1, A = 2, R = 4, N = 8, L = 16, j = 32, H = 64, $ = 128, U = 256, J = 512, ee = 30, he = "...", Z = 800, ae = 16, te = 1, Te = 2, le = 3, X = 1 / 0, K = 9007199254740991, pe = 17976931348623157e292, Me = NaN, Pe = 4294967295, cn = Pe - 1, un = Pe >>> 1, Bt = [
      ["ary", $],
      ["bind", _],
      ["bindKey", A],
      ["curry", N],
      ["curryRight", L],
      ["flip", J],
      ["partial", j],
      ["partialRight", H],
      ["rearg", U]
    ], xt = "[object Arguments]", dt = "[object Array]", ne = "[object AsyncFunction]", xe = "[object Boolean]", Ve = "[object Date]", Ae = "[object DOMException]", Ce = "[object Error]", we = "[object Function]", nt = "[object GeneratorFunction]", Ue = "[object Map]", ht = "[object Number]", Rt = "[object Null]", rt = "[object Object]", yr = "[object Promise]", Jt = "[object Proxy]", xr = "[object RegExp]", Ot = "[object Set]", bn = "[object String]", Wr = "[object Symbol]", Na = "[object Undefined]", $n = "[object WeakMap]", Io = "[object WeakSet]", Qt = "[object ArrayBuffer]", Un = "[object DataView]", $r = "[object Float32Array]", Ur = "[object Float64Array]", wr = "[object Int8Array]", Mi = "[object Int16Array]", Di = "[object Int32Array]", Ii = "[object Uint8Array]", Li = "[object Uint8ClampedArray]", ji = "[object Uint16Array]", ki = "[object Uint32Array]", Ma = /\b__p \+= '';/g, Vi = /\b(__p \+=) '' \+/g, Lo = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Sn = /&(?:amp|lt|gt|quot|#39);/g, Hr = /[&<>"']/g, Fi = RegExp(Sn.source), jo = RegExp(Hr.source), Da = /<%-([\s\S]+?)%>/g, ko = /<%([\s\S]+?)%>/g, Vo = /<%=([\s\S]+?)%>/g, Fo = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Bo = /^\w*$/, Ia = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Bi = /[\\^$.*+?()[\]{}|]/g, Wo = RegExp(Bi.source), zr = /^\s+/, La = /\s/, ja = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, ka = /\{\n\/\* \[wrapped with (.+)\] \*/, Va = /,? & /, E = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, W = /[()=,{}\[\]\/\s]/, G = /\\(\\)?/g, se = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Ee = /\w*$/, De = /^[-+]0x[0-9a-f]+$/i, be = /^0b[01]+$/i, ve = /^\[object .+?Constructor\]$/, st = /^0o[0-7]+$/i, ze = /^(?:0|[1-9]\d*)$/, qe = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, at = /($^)/, Hn = /['\n\r\u2028\u2029\\]/g, Wt = "\\ud800-\\udfff", pt = "\\u0300-\\u036f", Wi = "\\ufe20-\\ufe2f", Fa = "\\u20d0-\\u20ff", $o = pt + Wi + Fa, Qu = "\\u2700-\\u27bf", ef = "a-z\\xdf-\\xf6\\xf8-\\xff", mx = "\\xac\\xb1\\xd7\\xf7", gx = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", vx = "\\u2000-\\u206f", yx = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", tf = "A-Z\\xc0-\\xd6\\xd8-\\xde", nf = "\\ufe0e\\ufe0f", rf = mx + gx + vx + yx, Ba = "['’]", xx = "[" + Wt + "]", of = "[" + rf + "]", Uo = "[" + $o + "]", sf = "\\d+", wx = "[" + Qu + "]", af = "[" + ef + "]", lf = "[^" + Wt + rf + sf + Qu + ef + tf + "]", Wa = "\\ud83c[\\udffb-\\udfff]", bx = "(?:" + Uo + "|" + Wa + ")", cf = "[^" + Wt + "]", $a = "(?:\\ud83c[\\udde6-\\uddff]){2}", Ua = "[\\ud800-\\udbff][\\udc00-\\udfff]", Gr = "[" + tf + "]", uf = "\\u200d", ff = "(?:" + af + "|" + lf + ")", Sx = "(?:" + Gr + "|" + lf + ")", df = "(?:" + Ba + "(?:d|ll|m|re|s|t|ve))?", hf = "(?:" + Ba + "(?:D|LL|M|RE|S|T|VE))?", pf = bx + "?", mf = "[" + nf + "]?", Cx = "(?:" + uf + "(?:" + [cf, $a, Ua].join("|") + ")" + mf + pf + ")*", _x = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Tx = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", gf = mf + pf + Cx, Px = "(?:" + [wx, $a, Ua].join("|") + ")" + gf, Ax = "(?:" + [cf + Uo + "?", Uo, $a, Ua, xx].join("|") + ")", Ex = RegExp(Ba, "g"), Rx = RegExp(Uo, "g"), Ha = RegExp(Wa + "(?=" + Wa + ")|" + Ax + gf, "g"), Ox = RegExp([
      Gr + "?" + af + "+" + df + "(?=" + [of, Gr, "$"].join("|") + ")",
      Sx + "+" + hf + "(?=" + [of, Gr + ff, "$"].join("|") + ")",
      Gr + "?" + ff + "+" + df,
      Gr + "+" + hf,
      Tx,
      _x,
      sf,
      Px
    ].join("|"), "g"), Nx = RegExp("[" + uf + Wt + $o + nf + "]"), Mx = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Dx = [
      "Array",
      "Buffer",
      "DataView",
      "Date",
      "Error",
      "Float32Array",
      "Float64Array",
      "Function",
      "Int8Array",
      "Int16Array",
      "Int32Array",
      "Map",
      "Math",
      "Object",
      "Promise",
      "RegExp",
      "Set",
      "String",
      "Symbol",
      "TypeError",
      "Uint8Array",
      "Uint8ClampedArray",
      "Uint16Array",
      "Uint32Array",
      "WeakMap",
      "_",
      "clearTimeout",
      "isFinite",
      "parseInt",
      "setTimeout"
    ], Ix = -1, Be = {};
    Be[$r] = Be[Ur] = Be[wr] = Be[Mi] = Be[Di] = Be[Ii] = Be[Li] = Be[ji] = Be[ki] = !0, Be[xt] = Be[dt] = Be[Qt] = Be[xe] = Be[Un] = Be[Ve] = Be[Ce] = Be[we] = Be[Ue] = Be[ht] = Be[rt] = Be[xr] = Be[Ot] = Be[bn] = Be[$n] = !1;
    var Fe = {};
    Fe[xt] = Fe[dt] = Fe[Qt] = Fe[Un] = Fe[xe] = Fe[Ve] = Fe[$r] = Fe[Ur] = Fe[wr] = Fe[Mi] = Fe[Di] = Fe[Ue] = Fe[ht] = Fe[rt] = Fe[xr] = Fe[Ot] = Fe[bn] = Fe[Wr] = Fe[Ii] = Fe[Li] = Fe[ji] = Fe[ki] = !0, Fe[Ce] = Fe[we] = Fe[$n] = !1;
    var Lx = {
      // Latin-1 Supplement block.
      À: "A",
      Á: "A",
      Â: "A",
      Ã: "A",
      Ä: "A",
      Å: "A",
      à: "a",
      á: "a",
      â: "a",
      ã: "a",
      ä: "a",
      å: "a",
      Ç: "C",
      ç: "c",
      Ð: "D",
      ð: "d",
      È: "E",
      É: "E",
      Ê: "E",
      Ë: "E",
      è: "e",
      é: "e",
      ê: "e",
      ë: "e",
      Ì: "I",
      Í: "I",
      Î: "I",
      Ï: "I",
      ì: "i",
      í: "i",
      î: "i",
      ï: "i",
      Ñ: "N",
      ñ: "n",
      Ò: "O",
      Ó: "O",
      Ô: "O",
      Õ: "O",
      Ö: "O",
      Ø: "O",
      ò: "o",
      ó: "o",
      ô: "o",
      õ: "o",
      ö: "o",
      ø: "o",
      Ù: "U",
      Ú: "U",
      Û: "U",
      Ü: "U",
      ù: "u",
      ú: "u",
      û: "u",
      ü: "u",
      Ý: "Y",
      ý: "y",
      ÿ: "y",
      Æ: "Ae",
      æ: "ae",
      Þ: "Th",
      þ: "th",
      ß: "ss",
      // Latin Extended-A block.
      Ā: "A",
      Ă: "A",
      Ą: "A",
      ā: "a",
      ă: "a",
      ą: "a",
      Ć: "C",
      Ĉ: "C",
      Ċ: "C",
      Č: "C",
      ć: "c",
      ĉ: "c",
      ċ: "c",
      č: "c",
      Ď: "D",
      Đ: "D",
      ď: "d",
      đ: "d",
      Ē: "E",
      Ĕ: "E",
      Ė: "E",
      Ę: "E",
      Ě: "E",
      ē: "e",
      ĕ: "e",
      ė: "e",
      ę: "e",
      ě: "e",
      Ĝ: "G",
      Ğ: "G",
      Ġ: "G",
      Ģ: "G",
      ĝ: "g",
      ğ: "g",
      ġ: "g",
      ģ: "g",
      Ĥ: "H",
      Ħ: "H",
      ĥ: "h",
      ħ: "h",
      Ĩ: "I",
      Ī: "I",
      Ĭ: "I",
      Į: "I",
      İ: "I",
      ĩ: "i",
      ī: "i",
      ĭ: "i",
      į: "i",
      ı: "i",
      Ĵ: "J",
      ĵ: "j",
      Ķ: "K",
      ķ: "k",
      ĸ: "k",
      Ĺ: "L",
      Ļ: "L",
      Ľ: "L",
      Ŀ: "L",
      Ł: "L",
      ĺ: "l",
      ļ: "l",
      ľ: "l",
      ŀ: "l",
      ł: "l",
      Ń: "N",
      Ņ: "N",
      Ň: "N",
      Ŋ: "N",
      ń: "n",
      ņ: "n",
      ň: "n",
      ŋ: "n",
      Ō: "O",
      Ŏ: "O",
      Ő: "O",
      ō: "o",
      ŏ: "o",
      ő: "o",
      Ŕ: "R",
      Ŗ: "R",
      Ř: "R",
      ŕ: "r",
      ŗ: "r",
      ř: "r",
      Ś: "S",
      Ŝ: "S",
      Ş: "S",
      Š: "S",
      ś: "s",
      ŝ: "s",
      ş: "s",
      š: "s",
      Ţ: "T",
      Ť: "T",
      Ŧ: "T",
      ţ: "t",
      ť: "t",
      ŧ: "t",
      Ũ: "U",
      Ū: "U",
      Ŭ: "U",
      Ů: "U",
      Ű: "U",
      Ų: "U",
      ũ: "u",
      ū: "u",
      ŭ: "u",
      ů: "u",
      ű: "u",
      ų: "u",
      Ŵ: "W",
      ŵ: "w",
      Ŷ: "Y",
      ŷ: "y",
      Ÿ: "Y",
      Ź: "Z",
      Ż: "Z",
      Ž: "Z",
      ź: "z",
      ż: "z",
      ž: "z",
      Ĳ: "IJ",
      ĳ: "ij",
      Œ: "Oe",
      œ: "oe",
      ŉ: "'n",
      ſ: "s"
    }, jx = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, kx = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, Vx = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, Fx = parseFloat, Bx = parseInt, vf = typeof ro == "object" && ro && ro.Object === Object && ro, Wx = typeof self == "object" && self && self.Object === Object && self, lt = vf || Wx || Function("return this")(), za = t && !t.nodeType && t, br = za && !0 && e && !e.nodeType && e, yf = br && br.exports === za, Ga = yf && vf.process, $t = function() {
      try {
        var M = br && br.require && br.require("util").types;
        return M || Ga && Ga.binding && Ga.binding("util");
      } catch {
      }
    }(), xf = $t && $t.isArrayBuffer, wf = $t && $t.isDate, bf = $t && $t.isMap, Sf = $t && $t.isRegExp, Cf = $t && $t.isSet, _f = $t && $t.isTypedArray;
    function Nt(M, k, I) {
      switch (I.length) {
        case 0:
          return M.call(k);
        case 1:
          return M.call(k, I[0]);
        case 2:
          return M.call(k, I[0], I[1]);
        case 3:
          return M.call(k, I[0], I[1], I[2]);
      }
      return M.apply(k, I);
    }
    function $x(M, k, I, Y) {
      for (var ce = -1, Re = M == null ? 0 : M.length; ++ce < Re; ) {
        var et = M[ce];
        k(Y, et, I(et), M);
      }
      return Y;
    }
    function Ut(M, k) {
      for (var I = -1, Y = M == null ? 0 : M.length; ++I < Y && k(M[I], I, M) !== !1; )
        ;
      return M;
    }
    function Ux(M, k) {
      for (var I = M == null ? 0 : M.length; I-- && k(M[I], I, M) !== !1; )
        ;
      return M;
    }
    function Tf(M, k) {
      for (var I = -1, Y = M == null ? 0 : M.length; ++I < Y; )
        if (!k(M[I], I, M))
          return !1;
      return !0;
    }
    function zn(M, k) {
      for (var I = -1, Y = M == null ? 0 : M.length, ce = 0, Re = []; ++I < Y; ) {
        var et = M[I];
        k(et, I, M) && (Re[ce++] = et);
      }
      return Re;
    }
    function Ho(M, k) {
      var I = M == null ? 0 : M.length;
      return !!I && Kr(M, k, 0) > -1;
    }
    function Ka(M, k, I) {
      for (var Y = -1, ce = M == null ? 0 : M.length; ++Y < ce; )
        if (I(k, M[Y]))
          return !0;
      return !1;
    }
    function He(M, k) {
      for (var I = -1, Y = M == null ? 0 : M.length, ce = Array(Y); ++I < Y; )
        ce[I] = k(M[I], I, M);
      return ce;
    }
    function Gn(M, k) {
      for (var I = -1, Y = k.length, ce = M.length; ++I < Y; )
        M[ce + I] = k[I];
      return M;
    }
    function Ya(M, k, I, Y) {
      var ce = -1, Re = M == null ? 0 : M.length;
      for (Y && Re && (I = M[++ce]); ++ce < Re; )
        I = k(I, M[ce], ce, M);
      return I;
    }
    function Hx(M, k, I, Y) {
      var ce = M == null ? 0 : M.length;
      for (Y && ce && (I = M[--ce]); ce--; )
        I = k(I, M[ce], ce, M);
      return I;
    }
    function qa(M, k) {
      for (var I = -1, Y = M == null ? 0 : M.length; ++I < Y; )
        if (k(M[I], I, M))
          return !0;
      return !1;
    }
    var zx = Xa("length");
    function Gx(M) {
      return M.split("");
    }
    function Kx(M) {
      return M.match(E) || [];
    }
    function Pf(M, k, I) {
      var Y;
      return I(M, function(ce, Re, et) {
        if (k(ce, Re, et))
          return Y = Re, !1;
      }), Y;
    }
    function zo(M, k, I, Y) {
      for (var ce = M.length, Re = I + (Y ? 1 : -1); Y ? Re-- : ++Re < ce; )
        if (k(M[Re], Re, M))
          return Re;
      return -1;
    }
    function Kr(M, k, I) {
      return k === k ? o0(M, k, I) : zo(M, Af, I);
    }
    function Yx(M, k, I, Y) {
      for (var ce = I - 1, Re = M.length; ++ce < Re; )
        if (Y(M[ce], k))
          return ce;
      return -1;
    }
    function Af(M) {
      return M !== M;
    }
    function Ef(M, k) {
      var I = M == null ? 0 : M.length;
      return I ? Ja(M, k) / I : Me;
    }
    function Xa(M) {
      return function(k) {
        return k == null ? r : k[M];
      };
    }
    function Za(M) {
      return function(k) {
        return M == null ? r : M[k];
      };
    }
    function Rf(M, k, I, Y, ce) {
      return ce(M, function(Re, et, ke) {
        I = Y ? (Y = !1, Re) : k(I, Re, et, ke);
      }), I;
    }
    function qx(M, k) {
      var I = M.length;
      for (M.sort(k); I--; )
        M[I] = M[I].value;
      return M;
    }
    function Ja(M, k) {
      for (var I, Y = -1, ce = M.length; ++Y < ce; ) {
        var Re = k(M[Y]);
        Re !== r && (I = I === r ? Re : I + Re);
      }
      return I;
    }
    function Qa(M, k) {
      for (var I = -1, Y = Array(M); ++I < M; )
        Y[I] = k(I);
      return Y;
    }
    function Xx(M, k) {
      return He(k, function(I) {
        return [I, M[I]];
      });
    }
    function Of(M) {
      return M && M.slice(0, If(M) + 1).replace(zr, "");
    }
    function Mt(M) {
      return function(k) {
        return M(k);
      };
    }
    function el(M, k) {
      return He(k, function(I) {
        return M[I];
      });
    }
    function $i(M, k) {
      return M.has(k);
    }
    function Nf(M, k) {
      for (var I = -1, Y = M.length; ++I < Y && Kr(k, M[I], 0) > -1; )
        ;
      return I;
    }
    function Mf(M, k) {
      for (var I = M.length; I-- && Kr(k, M[I], 0) > -1; )
        ;
      return I;
    }
    function Zx(M, k) {
      for (var I = M.length, Y = 0; I--; )
        M[I] === k && ++Y;
      return Y;
    }
    var Jx = Za(Lx), Qx = Za(jx);
    function e0(M) {
      return "\\" + Vx[M];
    }
    function t0(M, k) {
      return M == null ? r : M[k];
    }
    function Yr(M) {
      return Nx.test(M);
    }
    function n0(M) {
      return Mx.test(M);
    }
    function r0(M) {
      for (var k, I = []; !(k = M.next()).done; )
        I.push(k.value);
      return I;
    }
    function tl(M) {
      var k = -1, I = Array(M.size);
      return M.forEach(function(Y, ce) {
        I[++k] = [ce, Y];
      }), I;
    }
    function Df(M, k) {
      return function(I) {
        return M(k(I));
      };
    }
    function Kn(M, k) {
      for (var I = -1, Y = M.length, ce = 0, Re = []; ++I < Y; ) {
        var et = M[I];
        (et === k || et === p) && (M[I] = p, Re[ce++] = I);
      }
      return Re;
    }
    function Go(M) {
      var k = -1, I = Array(M.size);
      return M.forEach(function(Y) {
        I[++k] = Y;
      }), I;
    }
    function i0(M) {
      var k = -1, I = Array(M.size);
      return M.forEach(function(Y) {
        I[++k] = [Y, Y];
      }), I;
    }
    function o0(M, k, I) {
      for (var Y = I - 1, ce = M.length; ++Y < ce; )
        if (M[Y] === k)
          return Y;
      return -1;
    }
    function s0(M, k, I) {
      for (var Y = I + 1; Y--; )
        if (M[Y] === k)
          return Y;
      return Y;
    }
    function qr(M) {
      return Yr(M) ? l0(M) : zx(M);
    }
    function en(M) {
      return Yr(M) ? c0(M) : Gx(M);
    }
    function If(M) {
      for (var k = M.length; k-- && La.test(M.charAt(k)); )
        ;
      return k;
    }
    var a0 = Za(kx);
    function l0(M) {
      for (var k = Ha.lastIndex = 0; Ha.test(M); )
        ++k;
      return k;
    }
    function c0(M) {
      return M.match(Ha) || [];
    }
    function u0(M) {
      return M.match(Ox) || [];
    }
    var f0 = function M(k) {
      k = k == null ? lt : Xr.defaults(lt.Object(), k, Xr.pick(lt, Dx));
      var I = k.Array, Y = k.Date, ce = k.Error, Re = k.Function, et = k.Math, ke = k.Object, nl = k.RegExp, d0 = k.String, Ht = k.TypeError, Ko = I.prototype, h0 = Re.prototype, Zr = ke.prototype, Yo = k["__core-js_shared__"], qo = h0.toString, Ie = Zr.hasOwnProperty, p0 = 0, Lf = function() {
        var n = /[^.]+$/.exec(Yo && Yo.keys && Yo.keys.IE_PROTO || "");
        return n ? "Symbol(src)_1." + n : "";
      }(), Xo = Zr.toString, m0 = qo.call(ke), g0 = lt._, v0 = nl(
        "^" + qo.call(Ie).replace(Bi, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), Zo = yf ? k.Buffer : r, Yn = k.Symbol, Jo = k.Uint8Array, jf = Zo ? Zo.allocUnsafe : r, Qo = Df(ke.getPrototypeOf, ke), kf = ke.create, Vf = Zr.propertyIsEnumerable, es = Ko.splice, Ff = Yn ? Yn.isConcatSpreadable : r, Ui = Yn ? Yn.iterator : r, Sr = Yn ? Yn.toStringTag : r, ts = function() {
        try {
          var n = Ar(ke, "defineProperty");
          return n({}, "", {}), n;
        } catch {
        }
      }(), y0 = k.clearTimeout !== lt.clearTimeout && k.clearTimeout, x0 = Y && Y.now !== lt.Date.now && Y.now, w0 = k.setTimeout !== lt.setTimeout && k.setTimeout, ns = et.ceil, rs = et.floor, rl = ke.getOwnPropertySymbols, b0 = Zo ? Zo.isBuffer : r, Bf = k.isFinite, S0 = Ko.join, C0 = Df(ke.keys, ke), tt = et.max, mt = et.min, _0 = Y.now, T0 = k.parseInt, Wf = et.random, P0 = Ko.reverse, il = Ar(k, "DataView"), Hi = Ar(k, "Map"), ol = Ar(k, "Promise"), Jr = Ar(k, "Set"), zi = Ar(k, "WeakMap"), Gi = Ar(ke, "create"), is = zi && new zi(), Qr = {}, A0 = Er(il), E0 = Er(Hi), R0 = Er(ol), O0 = Er(Jr), N0 = Er(zi), os = Yn ? Yn.prototype : r, Ki = os ? os.valueOf : r, $f = os ? os.toString : r;
      function x(n) {
        if (Xe(n) && !ue(n) && !(n instanceof Se)) {
          if (n instanceof zt)
            return n;
          if (Ie.call(n, "__wrapped__"))
            return Ud(n);
        }
        return new zt(n);
      }
      var ei = /* @__PURE__ */ function() {
        function n() {
        }
        return function(i) {
          if (!Ge(i))
            return {};
          if (kf)
            return kf(i);
          n.prototype = i;
          var a = new n();
          return n.prototype = r, a;
        };
      }();
      function ss() {
      }
      function zt(n, i) {
        this.__wrapped__ = n, this.__actions__ = [], this.__chain__ = !!i, this.__index__ = 0, this.__values__ = r;
      }
      x.templateSettings = {
        /**
         * Used to detect `data` property values to be HTML-escaped.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        escape: Da,
        /**
         * Used to detect code to be evaluated.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        evaluate: ko,
        /**
         * Used to detect `data` property values to inject.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        interpolate: Vo,
        /**
         * Used to reference the data object in the template text.
         *
         * @memberOf _.templateSettings
         * @type {string}
         */
        variable: "",
        /**
         * Used to import variables into the compiled template.
         *
         * @memberOf _.templateSettings
         * @type {Object}
         */
        imports: {
          /**
           * A reference to the `lodash` function.
           *
           * @memberOf _.templateSettings.imports
           * @type {Function}
           */
          _: x
        }
      }, x.prototype = ss.prototype, x.prototype.constructor = x, zt.prototype = ei(ss.prototype), zt.prototype.constructor = zt;
      function Se(n) {
        this.__wrapped__ = n, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Pe, this.__views__ = [];
      }
      function M0() {
        var n = new Se(this.__wrapped__);
        return n.__actions__ = _t(this.__actions__), n.__dir__ = this.__dir__, n.__filtered__ = this.__filtered__, n.__iteratees__ = _t(this.__iteratees__), n.__takeCount__ = this.__takeCount__, n.__views__ = _t(this.__views__), n;
      }
      function D0() {
        if (this.__filtered__) {
          var n = new Se(this);
          n.__dir__ = -1, n.__filtered__ = !0;
        } else
          n = this.clone(), n.__dir__ *= -1;
        return n;
      }
      function I0() {
        var n = this.__wrapped__.value(), i = this.__dir__, a = ue(n), d = i < 0, m = a ? n.length : 0, w = Gw(0, m, this.__views__), P = w.start, O = w.end, D = O - P, V = d ? O : P - 1, F = this.__iteratees__, B = F.length, z = 0, q = mt(D, this.__takeCount__);
        if (!a || !d && m == D && q == D)
          return dd(n, this.__actions__);
        var re = [];
        e:
          for (; D-- && z < q; ) {
            V += i;
            for (var me = -1, ie = n[V]; ++me < B; ) {
              var ye = F[me], _e = ye.iteratee, Lt = ye.type, St = _e(ie);
              if (Lt == Te)
                ie = St;
              else if (!St) {
                if (Lt == te)
                  continue e;
                break e;
              }
            }
            re[z++] = ie;
          }
        return re;
      }
      Se.prototype = ei(ss.prototype), Se.prototype.constructor = Se;
      function Cr(n) {
        var i = -1, a = n == null ? 0 : n.length;
        for (this.clear(); ++i < a; ) {
          var d = n[i];
          this.set(d[0], d[1]);
        }
      }
      function L0() {
        this.__data__ = Gi ? Gi(null) : {}, this.size = 0;
      }
      function j0(n) {
        var i = this.has(n) && delete this.__data__[n];
        return this.size -= i ? 1 : 0, i;
      }
      function k0(n) {
        var i = this.__data__;
        if (Gi) {
          var a = i[n];
          return a === f ? r : a;
        }
        return Ie.call(i, n) ? i[n] : r;
      }
      function V0(n) {
        var i = this.__data__;
        return Gi ? i[n] !== r : Ie.call(i, n);
      }
      function F0(n, i) {
        var a = this.__data__;
        return this.size += this.has(n) ? 0 : 1, a[n] = Gi && i === r ? f : i, this;
      }
      Cr.prototype.clear = L0, Cr.prototype.delete = j0, Cr.prototype.get = k0, Cr.prototype.has = V0, Cr.prototype.set = F0;
      function Cn(n) {
        var i = -1, a = n == null ? 0 : n.length;
        for (this.clear(); ++i < a; ) {
          var d = n[i];
          this.set(d[0], d[1]);
        }
      }
      function B0() {
        this.__data__ = [], this.size = 0;
      }
      function W0(n) {
        var i = this.__data__, a = as(i, n);
        if (a < 0)
          return !1;
        var d = i.length - 1;
        return a == d ? i.pop() : es.call(i, a, 1), --this.size, !0;
      }
      function $0(n) {
        var i = this.__data__, a = as(i, n);
        return a < 0 ? r : i[a][1];
      }
      function U0(n) {
        return as(this.__data__, n) > -1;
      }
      function H0(n, i) {
        var a = this.__data__, d = as(a, n);
        return d < 0 ? (++this.size, a.push([n, i])) : a[d][1] = i, this;
      }
      Cn.prototype.clear = B0, Cn.prototype.delete = W0, Cn.prototype.get = $0, Cn.prototype.has = U0, Cn.prototype.set = H0;
      function _n(n) {
        var i = -1, a = n == null ? 0 : n.length;
        for (this.clear(); ++i < a; ) {
          var d = n[i];
          this.set(d[0], d[1]);
        }
      }
      function z0() {
        this.size = 0, this.__data__ = {
          hash: new Cr(),
          map: new (Hi || Cn)(),
          string: new Cr()
        };
      }
      function G0(n) {
        var i = xs(this, n).delete(n);
        return this.size -= i ? 1 : 0, i;
      }
      function K0(n) {
        return xs(this, n).get(n);
      }
      function Y0(n) {
        return xs(this, n).has(n);
      }
      function q0(n, i) {
        var a = xs(this, n), d = a.size;
        return a.set(n, i), this.size += a.size == d ? 0 : 1, this;
      }
      _n.prototype.clear = z0, _n.prototype.delete = G0, _n.prototype.get = K0, _n.prototype.has = Y0, _n.prototype.set = q0;
      function _r(n) {
        var i = -1, a = n == null ? 0 : n.length;
        for (this.__data__ = new _n(); ++i < a; )
          this.add(n[i]);
      }
      function X0(n) {
        return this.__data__.set(n, f), this;
      }
      function Z0(n) {
        return this.__data__.has(n);
      }
      _r.prototype.add = _r.prototype.push = X0, _r.prototype.has = Z0;
      function tn(n) {
        var i = this.__data__ = new Cn(n);
        this.size = i.size;
      }
      function J0() {
        this.__data__ = new Cn(), this.size = 0;
      }
      function Q0(n) {
        var i = this.__data__, a = i.delete(n);
        return this.size = i.size, a;
      }
      function ew(n) {
        return this.__data__.get(n);
      }
      function tw(n) {
        return this.__data__.has(n);
      }
      function nw(n, i) {
        var a = this.__data__;
        if (a instanceof Cn) {
          var d = a.__data__;
          if (!Hi || d.length < s - 1)
            return d.push([n, i]), this.size = ++a.size, this;
          a = this.__data__ = new _n(d);
        }
        return a.set(n, i), this.size = a.size, this;
      }
      tn.prototype.clear = J0, tn.prototype.delete = Q0, tn.prototype.get = ew, tn.prototype.has = tw, tn.prototype.set = nw;
      function Uf(n, i) {
        var a = ue(n), d = !a && Rr(n), m = !a && !d && Qn(n), w = !a && !d && !m && ii(n), P = a || d || m || w, O = P ? Qa(n.length, d0) : [], D = O.length;
        for (var V in n)
          (i || Ie.call(n, V)) && !(P && // Safari 9 has enumerable `arguments.length` in strict mode.
          (V == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          m && (V == "offset" || V == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          w && (V == "buffer" || V == "byteLength" || V == "byteOffset") || // Skip index properties.
          En(V, D))) && O.push(V);
        return O;
      }
      function Hf(n) {
        var i = n.length;
        return i ? n[gl(0, i - 1)] : r;
      }
      function rw(n, i) {
        return ws(_t(n), Tr(i, 0, n.length));
      }
      function iw(n) {
        return ws(_t(n));
      }
      function sl(n, i, a) {
        (a !== r && !nn(n[i], a) || a === r && !(i in n)) && Tn(n, i, a);
      }
      function Yi(n, i, a) {
        var d = n[i];
        (!(Ie.call(n, i) && nn(d, a)) || a === r && !(i in n)) && Tn(n, i, a);
      }
      function as(n, i) {
        for (var a = n.length; a--; )
          if (nn(n[a][0], i))
            return a;
        return -1;
      }
      function ow(n, i, a, d) {
        return qn(n, function(m, w, P) {
          i(d, m, a(m), P);
        }), d;
      }
      function zf(n, i) {
        return n && dn(i, it(i), n);
      }
      function sw(n, i) {
        return n && dn(i, Pt(i), n);
      }
      function Tn(n, i, a) {
        i == "__proto__" && ts ? ts(n, i, {
          configurable: !0,
          enumerable: !0,
          value: a,
          writable: !0
        }) : n[i] = a;
      }
      function al(n, i) {
        for (var a = -1, d = i.length, m = I(d), w = n == null; ++a < d; )
          m[a] = w ? r : Wl(n, i[a]);
        return m;
      }
      function Tr(n, i, a) {
        return n === n && (a !== r && (n = n <= a ? n : a), i !== r && (n = n >= i ? n : i)), n;
      }
      function Gt(n, i, a, d, m, w) {
        var P, O = i & g, D = i & y, V = i & C;
        if (a && (P = m ? a(n, d, m, w) : a(n)), P !== r)
          return P;
        if (!Ge(n))
          return n;
        var F = ue(n);
        if (F) {
          if (P = Yw(n), !O)
            return _t(n, P);
        } else {
          var B = gt(n), z = B == we || B == nt;
          if (Qn(n))
            return md(n, O);
          if (B == rt || B == xt || z && !m) {
            if (P = D || z ? {} : Id(n), !O)
              return D ? kw(n, sw(P, n)) : jw(n, zf(P, n));
          } else {
            if (!Fe[B])
              return m ? n : {};
            P = qw(n, B, O);
          }
        }
        w || (w = new tn());
        var q = w.get(n);
        if (q)
          return q;
        w.set(n, P), ch(n) ? n.forEach(function(ie) {
          P.add(Gt(ie, i, a, ie, n, w));
        }) : ah(n) && n.forEach(function(ie, ye) {
          P.set(ye, Gt(ie, i, a, ye, n, w));
        });
        var re = V ? D ? Al : Pl : D ? Pt : it, me = F ? r : re(n);
        return Ut(me || n, function(ie, ye) {
          me && (ye = ie, ie = n[ye]), Yi(P, ye, Gt(ie, i, a, ye, n, w));
        }), P;
      }
      function aw(n) {
        var i = it(n);
        return function(a) {
          return Gf(a, n, i);
        };
      }
      function Gf(n, i, a) {
        var d = a.length;
        if (n == null)
          return !d;
        for (n = ke(n); d--; ) {
          var m = a[d], w = i[m], P = n[m];
          if (P === r && !(m in n) || !w(P))
            return !1;
        }
        return !0;
      }
      function Kf(n, i, a) {
        if (typeof n != "function")
          throw new Ht(l);
        return to(function() {
          n.apply(r, a);
        }, i);
      }
      function qi(n, i, a, d) {
        var m = -1, w = Ho, P = !0, O = n.length, D = [], V = i.length;
        if (!O)
          return D;
        a && (i = He(i, Mt(a))), d ? (w = Ka, P = !1) : i.length >= s && (w = $i, P = !1, i = new _r(i));
        e:
          for (; ++m < O; ) {
            var F = n[m], B = a == null ? F : a(F);
            if (F = d || F !== 0 ? F : 0, P && B === B) {
              for (var z = V; z--; )
                if (i[z] === B)
                  continue e;
              D.push(F);
            } else
              w(i, B, d) || D.push(F);
          }
        return D;
      }
      var qn = wd(fn), Yf = wd(cl, !0);
      function lw(n, i) {
        var a = !0;
        return qn(n, function(d, m, w) {
          return a = !!i(d, m, w), a;
        }), a;
      }
      function ls(n, i, a) {
        for (var d = -1, m = n.length; ++d < m; ) {
          var w = n[d], P = i(w);
          if (P != null && (O === r ? P === P && !It(P) : a(P, O)))
            var O = P, D = w;
        }
        return D;
      }
      function cw(n, i, a, d) {
        var m = n.length;
        for (a = fe(a), a < 0 && (a = -a > m ? 0 : m + a), d = d === r || d > m ? m : fe(d), d < 0 && (d += m), d = a > d ? 0 : fh(d); a < d; )
          n[a++] = i;
        return n;
      }
      function qf(n, i) {
        var a = [];
        return qn(n, function(d, m, w) {
          i(d, m, w) && a.push(d);
        }), a;
      }
      function ct(n, i, a, d, m) {
        var w = -1, P = n.length;
        for (a || (a = Zw), m || (m = []); ++w < P; ) {
          var O = n[w];
          i > 0 && a(O) ? i > 1 ? ct(O, i - 1, a, d, m) : Gn(m, O) : d || (m[m.length] = O);
        }
        return m;
      }
      var ll = bd(), Xf = bd(!0);
      function fn(n, i) {
        return n && ll(n, i, it);
      }
      function cl(n, i) {
        return n && Xf(n, i, it);
      }
      function cs(n, i) {
        return zn(i, function(a) {
          return Rn(n[a]);
        });
      }
      function Pr(n, i) {
        i = Zn(i, n);
        for (var a = 0, d = i.length; n != null && a < d; )
          n = n[hn(i[a++])];
        return a && a == d ? n : r;
      }
      function Zf(n, i, a) {
        var d = i(n);
        return ue(n) ? d : Gn(d, a(n));
      }
      function wt(n) {
        return n == null ? n === r ? Na : Rt : Sr && Sr in ke(n) ? zw(n) : ib(n);
      }
      function ul(n, i) {
        return n > i;
      }
      function uw(n, i) {
        return n != null && Ie.call(n, i);
      }
      function fw(n, i) {
        return n != null && i in ke(n);
      }
      function dw(n, i, a) {
        return n >= mt(i, a) && n < tt(i, a);
      }
      function fl(n, i, a) {
        for (var d = a ? Ka : Ho, m = n[0].length, w = n.length, P = w, O = I(w), D = 1 / 0, V = []; P--; ) {
          var F = n[P];
          P && i && (F = He(F, Mt(i))), D = mt(F.length, D), O[P] = !a && (i || m >= 120 && F.length >= 120) ? new _r(P && F) : r;
        }
        F = n[0];
        var B = -1, z = O[0];
        e:
          for (; ++B < m && V.length < D; ) {
            var q = F[B], re = i ? i(q) : q;
            if (q = a || q !== 0 ? q : 0, !(z ? $i(z, re) : d(V, re, a))) {
              for (P = w; --P; ) {
                var me = O[P];
                if (!(me ? $i(me, re) : d(n[P], re, a)))
                  continue e;
              }
              z && z.push(re), V.push(q);
            }
          }
        return V;
      }
      function hw(n, i, a, d) {
        return fn(n, function(m, w, P) {
          i(d, a(m), w, P);
        }), d;
      }
      function Xi(n, i, a) {
        i = Zn(i, n), n = Vd(n, i);
        var d = n == null ? n : n[hn(Yt(i))];
        return d == null ? r : Nt(d, n, a);
      }
      function Jf(n) {
        return Xe(n) && wt(n) == xt;
      }
      function pw(n) {
        return Xe(n) && wt(n) == Qt;
      }
      function mw(n) {
        return Xe(n) && wt(n) == Ve;
      }
      function Zi(n, i, a, d, m) {
        return n === i ? !0 : n == null || i == null || !Xe(n) && !Xe(i) ? n !== n && i !== i : gw(n, i, a, d, Zi, m);
      }
      function gw(n, i, a, d, m, w) {
        var P = ue(n), O = ue(i), D = P ? dt : gt(n), V = O ? dt : gt(i);
        D = D == xt ? rt : D, V = V == xt ? rt : V;
        var F = D == rt, B = V == rt, z = D == V;
        if (z && Qn(n)) {
          if (!Qn(i))
            return !1;
          P = !0, F = !1;
        }
        if (z && !F)
          return w || (w = new tn()), P || ii(n) ? Nd(n, i, a, d, m, w) : Uw(n, i, D, a, d, m, w);
        if (!(a & T)) {
          var q = F && Ie.call(n, "__wrapped__"), re = B && Ie.call(i, "__wrapped__");
          if (q || re) {
            var me = q ? n.value() : n, ie = re ? i.value() : i;
            return w || (w = new tn()), m(me, ie, a, d, w);
          }
        }
        return z ? (w || (w = new tn()), Hw(n, i, a, d, m, w)) : !1;
      }
      function vw(n) {
        return Xe(n) && gt(n) == Ue;
      }
      function dl(n, i, a, d) {
        var m = a.length, w = m, P = !d;
        if (n == null)
          return !w;
        for (n = ke(n); m--; ) {
          var O = a[m];
          if (P && O[2] ? O[1] !== n[O[0]] : !(O[0] in n))
            return !1;
        }
        for (; ++m < w; ) {
          O = a[m];
          var D = O[0], V = n[D], F = O[1];
          if (P && O[2]) {
            if (V === r && !(D in n))
              return !1;
          } else {
            var B = new tn();
            if (d)
              var z = d(V, F, D, n, i, B);
            if (!(z === r ? Zi(F, V, T | S, d, B) : z))
              return !1;
          }
        }
        return !0;
      }
      function Qf(n) {
        if (!Ge(n) || Qw(n))
          return !1;
        var i = Rn(n) ? v0 : ve;
        return i.test(Er(n));
      }
      function yw(n) {
        return Xe(n) && wt(n) == xr;
      }
      function xw(n) {
        return Xe(n) && gt(n) == Ot;
      }
      function ww(n) {
        return Xe(n) && Ps(n.length) && !!Be[wt(n)];
      }
      function ed(n) {
        return typeof n == "function" ? n : n == null ? At : typeof n == "object" ? ue(n) ? rd(n[0], n[1]) : nd(n) : Sh(n);
      }
      function hl(n) {
        if (!eo(n))
          return C0(n);
        var i = [];
        for (var a in ke(n))
          Ie.call(n, a) && a != "constructor" && i.push(a);
        return i;
      }
      function bw(n) {
        if (!Ge(n))
          return rb(n);
        var i = eo(n), a = [];
        for (var d in n)
          d == "constructor" && (i || !Ie.call(n, d)) || a.push(d);
        return a;
      }
      function pl(n, i) {
        return n < i;
      }
      function td(n, i) {
        var a = -1, d = Tt(n) ? I(n.length) : [];
        return qn(n, function(m, w, P) {
          d[++a] = i(m, w, P);
        }), d;
      }
      function nd(n) {
        var i = Rl(n);
        return i.length == 1 && i[0][2] ? jd(i[0][0], i[0][1]) : function(a) {
          return a === n || dl(a, n, i);
        };
      }
      function rd(n, i) {
        return Nl(n) && Ld(i) ? jd(hn(n), i) : function(a) {
          var d = Wl(a, n);
          return d === r && d === i ? $l(a, n) : Zi(i, d, T | S);
        };
      }
      function us(n, i, a, d, m) {
        n !== i && ll(i, function(w, P) {
          if (m || (m = new tn()), Ge(w))
            Sw(n, i, P, a, us, d, m);
          else {
            var O = d ? d(Dl(n, P), w, P + "", n, i, m) : r;
            O === r && (O = w), sl(n, P, O);
          }
        }, Pt);
      }
      function Sw(n, i, a, d, m, w, P) {
        var O = Dl(n, a), D = Dl(i, a), V = P.get(D);
        if (V) {
          sl(n, a, V);
          return;
        }
        var F = w ? w(O, D, a + "", n, i, P) : r, B = F === r;
        if (B) {
          var z = ue(D), q = !z && Qn(D), re = !z && !q && ii(D);
          F = D, z || q || re ? ue(O) ? F = O : Ze(O) ? F = _t(O) : q ? (B = !1, F = md(D, !0)) : re ? (B = !1, F = gd(D, !0)) : F = [] : no(D) || Rr(D) ? (F = O, Rr(O) ? F = dh(O) : (!Ge(O) || Rn(O)) && (F = Id(D))) : B = !1;
        }
        B && (P.set(D, F), m(F, D, d, w, P), P.delete(D)), sl(n, a, F);
      }
      function id(n, i) {
        var a = n.length;
        if (a)
          return i += i < 0 ? a : 0, En(i, a) ? n[i] : r;
      }
      function od(n, i, a) {
        i.length ? i = He(i, function(w) {
          return ue(w) ? function(P) {
            return Pr(P, w.length === 1 ? w[0] : w);
          } : w;
        }) : i = [At];
        var d = -1;
        i = He(i, Mt(Q()));
        var m = td(n, function(w, P, O) {
          var D = He(i, function(V) {
            return V(w);
          });
          return { criteria: D, index: ++d, value: w };
        });
        return qx(m, function(w, P) {
          return Lw(w, P, a);
        });
      }
      function Cw(n, i) {
        return sd(n, i, function(a, d) {
          return $l(n, d);
        });
      }
      function sd(n, i, a) {
        for (var d = -1, m = i.length, w = {}; ++d < m; ) {
          var P = i[d], O = Pr(n, P);
          a(O, P) && Ji(w, Zn(P, n), O);
        }
        return w;
      }
      function _w(n) {
        return function(i) {
          return Pr(i, n);
        };
      }
      function ml(n, i, a, d) {
        var m = d ? Yx : Kr, w = -1, P = i.length, O = n;
        for (n === i && (i = _t(i)), a && (O = He(n, Mt(a))); ++w < P; )
          for (var D = 0, V = i[w], F = a ? a(V) : V; (D = m(O, F, D, d)) > -1; )
            O !== n && es.call(O, D, 1), es.call(n, D, 1);
        return n;
      }
      function ad(n, i) {
        for (var a = n ? i.length : 0, d = a - 1; a--; ) {
          var m = i[a];
          if (a == d || m !== w) {
            var w = m;
            En(m) ? es.call(n, m, 1) : xl(n, m);
          }
        }
        return n;
      }
      function gl(n, i) {
        return n + rs(Wf() * (i - n + 1));
      }
      function Tw(n, i, a, d) {
        for (var m = -1, w = tt(ns((i - n) / (a || 1)), 0), P = I(w); w--; )
          P[d ? w : ++m] = n, n += a;
        return P;
      }
      function vl(n, i) {
        var a = "";
        if (!n || i < 1 || i > K)
          return a;
        do
          i % 2 && (a += n), i = rs(i / 2), i && (n += n);
        while (i);
        return a;
      }
      function ge(n, i) {
        return Il(kd(n, i, At), n + "");
      }
      function Pw(n) {
        return Hf(oi(n));
      }
      function Aw(n, i) {
        var a = oi(n);
        return ws(a, Tr(i, 0, a.length));
      }
      function Ji(n, i, a, d) {
        if (!Ge(n))
          return n;
        i = Zn(i, n);
        for (var m = -1, w = i.length, P = w - 1, O = n; O != null && ++m < w; ) {
          var D = hn(i[m]), V = a;
          if (D === "__proto__" || D === "constructor" || D === "prototype")
            return n;
          if (m != P) {
            var F = O[D];
            V = d ? d(F, D, O) : r, V === r && (V = Ge(F) ? F : En(i[m + 1]) ? [] : {});
          }
          Yi(O, D, V), O = O[D];
        }
        return n;
      }
      var ld = is ? function(n, i) {
        return is.set(n, i), n;
      } : At, Ew = ts ? function(n, i) {
        return ts(n, "toString", {
          configurable: !0,
          enumerable: !1,
          value: Hl(i),
          writable: !0
        });
      } : At;
      function Rw(n) {
        return ws(oi(n));
      }
      function Kt(n, i, a) {
        var d = -1, m = n.length;
        i < 0 && (i = -i > m ? 0 : m + i), a = a > m ? m : a, a < 0 && (a += m), m = i > a ? 0 : a - i >>> 0, i >>>= 0;
        for (var w = I(m); ++d < m; )
          w[d] = n[d + i];
        return w;
      }
      function Ow(n, i) {
        var a;
        return qn(n, function(d, m, w) {
          return a = i(d, m, w), !a;
        }), !!a;
      }
      function fs(n, i, a) {
        var d = 0, m = n == null ? d : n.length;
        if (typeof i == "number" && i === i && m <= un) {
          for (; d < m; ) {
            var w = d + m >>> 1, P = n[w];
            P !== null && !It(P) && (a ? P <= i : P < i) ? d = w + 1 : m = w;
          }
          return m;
        }
        return yl(n, i, At, a);
      }
      function yl(n, i, a, d) {
        var m = 0, w = n == null ? 0 : n.length;
        if (w === 0)
          return 0;
        i = a(i);
        for (var P = i !== i, O = i === null, D = It(i), V = i === r; m < w; ) {
          var F = rs((m + w) / 2), B = a(n[F]), z = B !== r, q = B === null, re = B === B, me = It(B);
          if (P)
            var ie = d || re;
          else
            V ? ie = re && (d || z) : O ? ie = re && z && (d || !q) : D ? ie = re && z && !q && (d || !me) : q || me ? ie = !1 : ie = d ? B <= i : B < i;
          ie ? m = F + 1 : w = F;
        }
        return mt(w, cn);
      }
      function cd(n, i) {
        for (var a = -1, d = n.length, m = 0, w = []; ++a < d; ) {
          var P = n[a], O = i ? i(P) : P;
          if (!a || !nn(O, D)) {
            var D = O;
            w[m++] = P === 0 ? 0 : P;
          }
        }
        return w;
      }
      function ud(n) {
        return typeof n == "number" ? n : It(n) ? Me : +n;
      }
      function Dt(n) {
        if (typeof n == "string")
          return n;
        if (ue(n))
          return He(n, Dt) + "";
        if (It(n))
          return $f ? $f.call(n) : "";
        var i = n + "";
        return i == "0" && 1 / n == -X ? "-0" : i;
      }
      function Xn(n, i, a) {
        var d = -1, m = Ho, w = n.length, P = !0, O = [], D = O;
        if (a)
          P = !1, m = Ka;
        else if (w >= s) {
          var V = i ? null : Ww(n);
          if (V)
            return Go(V);
          P = !1, m = $i, D = new _r();
        } else
          D = i ? [] : O;
        e:
          for (; ++d < w; ) {
            var F = n[d], B = i ? i(F) : F;
            if (F = a || F !== 0 ? F : 0, P && B === B) {
              for (var z = D.length; z--; )
                if (D[z] === B)
                  continue e;
              i && D.push(B), O.push(F);
            } else
              m(D, B, a) || (D !== O && D.push(B), O.push(F));
          }
        return O;
      }
      function xl(n, i) {
        return i = Zn(i, n), n = Vd(n, i), n == null || delete n[hn(Yt(i))];
      }
      function fd(n, i, a, d) {
        return Ji(n, i, a(Pr(n, i)), d);
      }
      function ds(n, i, a, d) {
        for (var m = n.length, w = d ? m : -1; (d ? w-- : ++w < m) && i(n[w], w, n); )
          ;
        return a ? Kt(n, d ? 0 : w, d ? w + 1 : m) : Kt(n, d ? w + 1 : 0, d ? m : w);
      }
      function dd(n, i) {
        var a = n;
        return a instanceof Se && (a = a.value()), Ya(i, function(d, m) {
          return m.func.apply(m.thisArg, Gn([d], m.args));
        }, a);
      }
      function wl(n, i, a) {
        var d = n.length;
        if (d < 2)
          return d ? Xn(n[0]) : [];
        for (var m = -1, w = I(d); ++m < d; )
          for (var P = n[m], O = -1; ++O < d; )
            O != m && (w[m] = qi(w[m] || P, n[O], i, a));
        return Xn(ct(w, 1), i, a);
      }
      function hd(n, i, a) {
        for (var d = -1, m = n.length, w = i.length, P = {}; ++d < m; ) {
          var O = d < w ? i[d] : r;
          a(P, n[d], O);
        }
        return P;
      }
      function bl(n) {
        return Ze(n) ? n : [];
      }
      function Sl(n) {
        return typeof n == "function" ? n : At;
      }
      function Zn(n, i) {
        return ue(n) ? n : Nl(n, i) ? [n] : $d(Ne(n));
      }
      var Nw = ge;
      function Jn(n, i, a) {
        var d = n.length;
        return a = a === r ? d : a, !i && a >= d ? n : Kt(n, i, a);
      }
      var pd = y0 || function(n) {
        return lt.clearTimeout(n);
      };
      function md(n, i) {
        if (i)
          return n.slice();
        var a = n.length, d = jf ? jf(a) : new n.constructor(a);
        return n.copy(d), d;
      }
      function Cl(n) {
        var i = new n.constructor(n.byteLength);
        return new Jo(i).set(new Jo(n)), i;
      }
      function Mw(n, i) {
        var a = i ? Cl(n.buffer) : n.buffer;
        return new n.constructor(a, n.byteOffset, n.byteLength);
      }
      function Dw(n) {
        var i = new n.constructor(n.source, Ee.exec(n));
        return i.lastIndex = n.lastIndex, i;
      }
      function Iw(n) {
        return Ki ? ke(Ki.call(n)) : {};
      }
      function gd(n, i) {
        var a = i ? Cl(n.buffer) : n.buffer;
        return new n.constructor(a, n.byteOffset, n.length);
      }
      function vd(n, i) {
        if (n !== i) {
          var a = n !== r, d = n === null, m = n === n, w = It(n), P = i !== r, O = i === null, D = i === i, V = It(i);
          if (!O && !V && !w && n > i || w && P && D && !O && !V || d && P && D || !a && D || !m)
            return 1;
          if (!d && !w && !V && n < i || V && a && m && !d && !w || O && a && m || !P && m || !D)
            return -1;
        }
        return 0;
      }
      function Lw(n, i, a) {
        for (var d = -1, m = n.criteria, w = i.criteria, P = m.length, O = a.length; ++d < P; ) {
          var D = vd(m[d], w[d]);
          if (D) {
            if (d >= O)
              return D;
            var V = a[d];
            return D * (V == "desc" ? -1 : 1);
          }
        }
        return n.index - i.index;
      }
      function yd(n, i, a, d) {
        for (var m = -1, w = n.length, P = a.length, O = -1, D = i.length, V = tt(w - P, 0), F = I(D + V), B = !d; ++O < D; )
          F[O] = i[O];
        for (; ++m < P; )
          (B || m < w) && (F[a[m]] = n[m]);
        for (; V--; )
          F[O++] = n[m++];
        return F;
      }
      function xd(n, i, a, d) {
        for (var m = -1, w = n.length, P = -1, O = a.length, D = -1, V = i.length, F = tt(w - O, 0), B = I(F + V), z = !d; ++m < F; )
          B[m] = n[m];
        for (var q = m; ++D < V; )
          B[q + D] = i[D];
        for (; ++P < O; )
          (z || m < w) && (B[q + a[P]] = n[m++]);
        return B;
      }
      function _t(n, i) {
        var a = -1, d = n.length;
        for (i || (i = I(d)); ++a < d; )
          i[a] = n[a];
        return i;
      }
      function dn(n, i, a, d) {
        var m = !a;
        a || (a = {});
        for (var w = -1, P = i.length; ++w < P; ) {
          var O = i[w], D = d ? d(a[O], n[O], O, a, n) : r;
          D === r && (D = n[O]), m ? Tn(a, O, D) : Yi(a, O, D);
        }
        return a;
      }
      function jw(n, i) {
        return dn(n, Ol(n), i);
      }
      function kw(n, i) {
        return dn(n, Md(n), i);
      }
      function hs(n, i) {
        return function(a, d) {
          var m = ue(a) ? $x : ow, w = i ? i() : {};
          return m(a, n, Q(d, 2), w);
        };
      }
      function ti(n) {
        return ge(function(i, a) {
          var d = -1, m = a.length, w = m > 1 ? a[m - 1] : r, P = m > 2 ? a[2] : r;
          for (w = n.length > 3 && typeof w == "function" ? (m--, w) : r, P && bt(a[0], a[1], P) && (w = m < 3 ? r : w, m = 1), i = ke(i); ++d < m; ) {
            var O = a[d];
            O && n(i, O, d, w);
          }
          return i;
        });
      }
      function wd(n, i) {
        return function(a, d) {
          if (a == null)
            return a;
          if (!Tt(a))
            return n(a, d);
          for (var m = a.length, w = i ? m : -1, P = ke(a); (i ? w-- : ++w < m) && d(P[w], w, P) !== !1; )
            ;
          return a;
        };
      }
      function bd(n) {
        return function(i, a, d) {
          for (var m = -1, w = ke(i), P = d(i), O = P.length; O--; ) {
            var D = P[n ? O : ++m];
            if (a(w[D], D, w) === !1)
              break;
          }
          return i;
        };
      }
      function Vw(n, i, a) {
        var d = i & _, m = Qi(n);
        function w() {
          var P = this && this !== lt && this instanceof w ? m : n;
          return P.apply(d ? a : this, arguments);
        }
        return w;
      }
      function Sd(n) {
        return function(i) {
          i = Ne(i);
          var a = Yr(i) ? en(i) : r, d = a ? a[0] : i.charAt(0), m = a ? Jn(a, 1).join("") : i.slice(1);
          return d[n]() + m;
        };
      }
      function ni(n) {
        return function(i) {
          return Ya(wh(xh(i).replace(Ex, "")), n, "");
        };
      }
      function Qi(n) {
        return function() {
          var i = arguments;
          switch (i.length) {
            case 0:
              return new n();
            case 1:
              return new n(i[0]);
            case 2:
              return new n(i[0], i[1]);
            case 3:
              return new n(i[0], i[1], i[2]);
            case 4:
              return new n(i[0], i[1], i[2], i[3]);
            case 5:
              return new n(i[0], i[1], i[2], i[3], i[4]);
            case 6:
              return new n(i[0], i[1], i[2], i[3], i[4], i[5]);
            case 7:
              return new n(i[0], i[1], i[2], i[3], i[4], i[5], i[6]);
          }
          var a = ei(n.prototype), d = n.apply(a, i);
          return Ge(d) ? d : a;
        };
      }
      function Fw(n, i, a) {
        var d = Qi(n);
        function m() {
          for (var w = arguments.length, P = I(w), O = w, D = ri(m); O--; )
            P[O] = arguments[O];
          var V = w < 3 && P[0] !== D && P[w - 1] !== D ? [] : Kn(P, D);
          if (w -= V.length, w < a)
            return Ad(
              n,
              i,
              ps,
              m.placeholder,
              r,
              P,
              V,
              r,
              r,
              a - w
            );
          var F = this && this !== lt && this instanceof m ? d : n;
          return Nt(F, this, P);
        }
        return m;
      }
      function Cd(n) {
        return function(i, a, d) {
          var m = ke(i);
          if (!Tt(i)) {
            var w = Q(a, 3);
            i = it(i), a = function(O) {
              return w(m[O], O, m);
            };
          }
          var P = n(i, a, d);
          return P > -1 ? m[w ? i[P] : P] : r;
        };
      }
      function _d(n) {
        return An(function(i) {
          var a = i.length, d = a, m = zt.prototype.thru;
          for (n && i.reverse(); d--; ) {
            var w = i[d];
            if (typeof w != "function")
              throw new Ht(l);
            if (m && !P && ys(w) == "wrapper")
              var P = new zt([], !0);
          }
          for (d = P ? d : a; ++d < a; ) {
            w = i[d];
            var O = ys(w), D = O == "wrapper" ? El(w) : r;
            D && Ml(D[0]) && D[1] == ($ | N | j | U) && !D[4].length && D[9] == 1 ? P = P[ys(D[0])].apply(P, D[3]) : P = w.length == 1 && Ml(w) ? P[O]() : P.thru(w);
          }
          return function() {
            var V = arguments, F = V[0];
            if (P && V.length == 1 && ue(F))
              return P.plant(F).value();
            for (var B = 0, z = a ? i[B].apply(this, V) : F; ++B < a; )
              z = i[B].call(this, z);
            return z;
          };
        });
      }
      function ps(n, i, a, d, m, w, P, O, D, V) {
        var F = i & $, B = i & _, z = i & A, q = i & (N | L), re = i & J, me = z ? r : Qi(n);
        function ie() {
          for (var ye = arguments.length, _e = I(ye), Lt = ye; Lt--; )
            _e[Lt] = arguments[Lt];
          if (q)
            var St = ri(ie), jt = Zx(_e, St);
          if (d && (_e = yd(_e, d, m, q)), w && (_e = xd(_e, w, P, q)), ye -= jt, q && ye < V) {
            var Je = Kn(_e, St);
            return Ad(
              n,
              i,
              ps,
              ie.placeholder,
              a,
              _e,
              Je,
              O,
              D,
              V - ye
            );
          }
          var rn = B ? a : this, Nn = z ? rn[n] : n;
          return ye = _e.length, O ? _e = ob(_e, O) : re && ye > 1 && _e.reverse(), F && D < ye && (_e.length = D), this && this !== lt && this instanceof ie && (Nn = me || Qi(Nn)), Nn.apply(rn, _e);
        }
        return ie;
      }
      function Td(n, i) {
        return function(a, d) {
          return hw(a, n, i(d), {});
        };
      }
      function ms(n, i) {
        return function(a, d) {
          var m;
          if (a === r && d === r)
            return i;
          if (a !== r && (m = a), d !== r) {
            if (m === r)
              return d;
            typeof a == "string" || typeof d == "string" ? (a = Dt(a), d = Dt(d)) : (a = ud(a), d = ud(d)), m = n(a, d);
          }
          return m;
        };
      }
      function _l(n) {
        return An(function(i) {
          return i = He(i, Mt(Q())), ge(function(a) {
            var d = this;
            return n(i, function(m) {
              return Nt(m, d, a);
            });
          });
        });
      }
      function gs(n, i) {
        i = i === r ? " " : Dt(i);
        var a = i.length;
        if (a < 2)
          return a ? vl(i, n) : i;
        var d = vl(i, ns(n / qr(i)));
        return Yr(i) ? Jn(en(d), 0, n).join("") : d.slice(0, n);
      }
      function Bw(n, i, a, d) {
        var m = i & _, w = Qi(n);
        function P() {
          for (var O = -1, D = arguments.length, V = -1, F = d.length, B = I(F + D), z = this && this !== lt && this instanceof P ? w : n; ++V < F; )
            B[V] = d[V];
          for (; D--; )
            B[V++] = arguments[++O];
          return Nt(z, m ? a : this, B);
        }
        return P;
      }
      function Pd(n) {
        return function(i, a, d) {
          return d && typeof d != "number" && bt(i, a, d) && (a = d = r), i = On(i), a === r ? (a = i, i = 0) : a = On(a), d = d === r ? i < a ? 1 : -1 : On(d), Tw(i, a, d, n);
        };
      }
      function vs(n) {
        return function(i, a) {
          return typeof i == "string" && typeof a == "string" || (i = qt(i), a = qt(a)), n(i, a);
        };
      }
      function Ad(n, i, a, d, m, w, P, O, D, V) {
        var F = i & N, B = F ? P : r, z = F ? r : P, q = F ? w : r, re = F ? r : w;
        i |= F ? j : H, i &= ~(F ? H : j), i & R || (i &= ~(_ | A));
        var me = [
          n,
          i,
          m,
          q,
          B,
          re,
          z,
          O,
          D,
          V
        ], ie = a.apply(r, me);
        return Ml(n) && Fd(ie, me), ie.placeholder = d, Bd(ie, n, i);
      }
      function Tl(n) {
        var i = et[n];
        return function(a, d) {
          if (a = qt(a), d = d == null ? 0 : mt(fe(d), 292), d && Bf(a)) {
            var m = (Ne(a) + "e").split("e"), w = i(m[0] + "e" + (+m[1] + d));
            return m = (Ne(w) + "e").split("e"), +(m[0] + "e" + (+m[1] - d));
          }
          return i(a);
        };
      }
      var Ww = Jr && 1 / Go(new Jr([, -0]))[1] == X ? function(n) {
        return new Jr(n);
      } : Kl;
      function Ed(n) {
        return function(i) {
          var a = gt(i);
          return a == Ue ? tl(i) : a == Ot ? i0(i) : Xx(i, n(i));
        };
      }
      function Pn(n, i, a, d, m, w, P, O) {
        var D = i & A;
        if (!D && typeof n != "function")
          throw new Ht(l);
        var V = d ? d.length : 0;
        if (V || (i &= ~(j | H), d = m = r), P = P === r ? P : tt(fe(P), 0), O = O === r ? O : fe(O), V -= m ? m.length : 0, i & H) {
          var F = d, B = m;
          d = m = r;
        }
        var z = D ? r : El(n), q = [
          n,
          i,
          a,
          d,
          m,
          F,
          B,
          w,
          P,
          O
        ];
        if (z && nb(q, z), n = q[0], i = q[1], a = q[2], d = q[3], m = q[4], O = q[9] = q[9] === r ? D ? 0 : n.length : tt(q[9] - V, 0), !O && i & (N | L) && (i &= ~(N | L)), !i || i == _)
          var re = Vw(n, i, a);
        else
          i == N || i == L ? re = Fw(n, i, O) : (i == j || i == (_ | j)) && !m.length ? re = Bw(n, i, a, d) : re = ps.apply(r, q);
        var me = z ? ld : Fd;
        return Bd(me(re, q), n, i);
      }
      function Rd(n, i, a, d) {
        return n === r || nn(n, Zr[a]) && !Ie.call(d, a) ? i : n;
      }
      function Od(n, i, a, d, m, w) {
        return Ge(n) && Ge(i) && (w.set(i, n), us(n, i, r, Od, w), w.delete(i)), n;
      }
      function $w(n) {
        return no(n) ? r : n;
      }
      function Nd(n, i, a, d, m, w) {
        var P = a & T, O = n.length, D = i.length;
        if (O != D && !(P && D > O))
          return !1;
        var V = w.get(n), F = w.get(i);
        if (V && F)
          return V == i && F == n;
        var B = -1, z = !0, q = a & S ? new _r() : r;
        for (w.set(n, i), w.set(i, n); ++B < O; ) {
          var re = n[B], me = i[B];
          if (d)
            var ie = P ? d(me, re, B, i, n, w) : d(re, me, B, n, i, w);
          if (ie !== r) {
            if (ie)
              continue;
            z = !1;
            break;
          }
          if (q) {
            if (!qa(i, function(ye, _e) {
              if (!$i(q, _e) && (re === ye || m(re, ye, a, d, w)))
                return q.push(_e);
            })) {
              z = !1;
              break;
            }
          } else if (!(re === me || m(re, me, a, d, w))) {
            z = !1;
            break;
          }
        }
        return w.delete(n), w.delete(i), z;
      }
      function Uw(n, i, a, d, m, w, P) {
        switch (a) {
          case Un:
            if (n.byteLength != i.byteLength || n.byteOffset != i.byteOffset)
              return !1;
            n = n.buffer, i = i.buffer;
          case Qt:
            return !(n.byteLength != i.byteLength || !w(new Jo(n), new Jo(i)));
          case xe:
          case Ve:
          case ht:
            return nn(+n, +i);
          case Ce:
            return n.name == i.name && n.message == i.message;
          case xr:
          case bn:
            return n == i + "";
          case Ue:
            var O = tl;
          case Ot:
            var D = d & T;
            if (O || (O = Go), n.size != i.size && !D)
              return !1;
            var V = P.get(n);
            if (V)
              return V == i;
            d |= S, P.set(n, i);
            var F = Nd(O(n), O(i), d, m, w, P);
            return P.delete(n), F;
          case Wr:
            if (Ki)
              return Ki.call(n) == Ki.call(i);
        }
        return !1;
      }
      function Hw(n, i, a, d, m, w) {
        var P = a & T, O = Pl(n), D = O.length, V = Pl(i), F = V.length;
        if (D != F && !P)
          return !1;
        for (var B = D; B--; ) {
          var z = O[B];
          if (!(P ? z in i : Ie.call(i, z)))
            return !1;
        }
        var q = w.get(n), re = w.get(i);
        if (q && re)
          return q == i && re == n;
        var me = !0;
        w.set(n, i), w.set(i, n);
        for (var ie = P; ++B < D; ) {
          z = O[B];
          var ye = n[z], _e = i[z];
          if (d)
            var Lt = P ? d(_e, ye, z, i, n, w) : d(ye, _e, z, n, i, w);
          if (!(Lt === r ? ye === _e || m(ye, _e, a, d, w) : Lt)) {
            me = !1;
            break;
          }
          ie || (ie = z == "constructor");
        }
        if (me && !ie) {
          var St = n.constructor, jt = i.constructor;
          St != jt && "constructor" in n && "constructor" in i && !(typeof St == "function" && St instanceof St && typeof jt == "function" && jt instanceof jt) && (me = !1);
        }
        return w.delete(n), w.delete(i), me;
      }
      function An(n) {
        return Il(kd(n, r, Gd), n + "");
      }
      function Pl(n) {
        return Zf(n, it, Ol);
      }
      function Al(n) {
        return Zf(n, Pt, Md);
      }
      var El = is ? function(n) {
        return is.get(n);
      } : Kl;
      function ys(n) {
        for (var i = n.name + "", a = Qr[i], d = Ie.call(Qr, i) ? a.length : 0; d--; ) {
          var m = a[d], w = m.func;
          if (w == null || w == n)
            return m.name;
        }
        return i;
      }
      function ri(n) {
        var i = Ie.call(x, "placeholder") ? x : n;
        return i.placeholder;
      }
      function Q() {
        var n = x.iteratee || zl;
        return n = n === zl ? ed : n, arguments.length ? n(arguments[0], arguments[1]) : n;
      }
      function xs(n, i) {
        var a = n.__data__;
        return Jw(i) ? a[typeof i == "string" ? "string" : "hash"] : a.map;
      }
      function Rl(n) {
        for (var i = it(n), a = i.length; a--; ) {
          var d = i[a], m = n[d];
          i[a] = [d, m, Ld(m)];
        }
        return i;
      }
      function Ar(n, i) {
        var a = t0(n, i);
        return Qf(a) ? a : r;
      }
      function zw(n) {
        var i = Ie.call(n, Sr), a = n[Sr];
        try {
          n[Sr] = r;
          var d = !0;
        } catch {
        }
        var m = Xo.call(n);
        return d && (i ? n[Sr] = a : delete n[Sr]), m;
      }
      var Ol = rl ? function(n) {
        return n == null ? [] : (n = ke(n), zn(rl(n), function(i) {
          return Vf.call(n, i);
        }));
      } : Yl, Md = rl ? function(n) {
        for (var i = []; n; )
          Gn(i, Ol(n)), n = Qo(n);
        return i;
      } : Yl, gt = wt;
      (il && gt(new il(new ArrayBuffer(1))) != Un || Hi && gt(new Hi()) != Ue || ol && gt(ol.resolve()) != yr || Jr && gt(new Jr()) != Ot || zi && gt(new zi()) != $n) && (gt = function(n) {
        var i = wt(n), a = i == rt ? n.constructor : r, d = a ? Er(a) : "";
        if (d)
          switch (d) {
            case A0:
              return Un;
            case E0:
              return Ue;
            case R0:
              return yr;
            case O0:
              return Ot;
            case N0:
              return $n;
          }
        return i;
      });
      function Gw(n, i, a) {
        for (var d = -1, m = a.length; ++d < m; ) {
          var w = a[d], P = w.size;
          switch (w.type) {
            case "drop":
              n += P;
              break;
            case "dropRight":
              i -= P;
              break;
            case "take":
              i = mt(i, n + P);
              break;
            case "takeRight":
              n = tt(n, i - P);
              break;
          }
        }
        return { start: n, end: i };
      }
      function Kw(n) {
        var i = n.match(ka);
        return i ? i[1].split(Va) : [];
      }
      function Dd(n, i, a) {
        i = Zn(i, n);
        for (var d = -1, m = i.length, w = !1; ++d < m; ) {
          var P = hn(i[d]);
          if (!(w = n != null && a(n, P)))
            break;
          n = n[P];
        }
        return w || ++d != m ? w : (m = n == null ? 0 : n.length, !!m && Ps(m) && En(P, m) && (ue(n) || Rr(n)));
      }
      function Yw(n) {
        var i = n.length, a = new n.constructor(i);
        return i && typeof n[0] == "string" && Ie.call(n, "index") && (a.index = n.index, a.input = n.input), a;
      }
      function Id(n) {
        return typeof n.constructor == "function" && !eo(n) ? ei(Qo(n)) : {};
      }
      function qw(n, i, a) {
        var d = n.constructor;
        switch (i) {
          case Qt:
            return Cl(n);
          case xe:
          case Ve:
            return new d(+n);
          case Un:
            return Mw(n, a);
          case $r:
          case Ur:
          case wr:
          case Mi:
          case Di:
          case Ii:
          case Li:
          case ji:
          case ki:
            return gd(n, a);
          case Ue:
            return new d();
          case ht:
          case bn:
            return new d(n);
          case xr:
            return Dw(n);
          case Ot:
            return new d();
          case Wr:
            return Iw(n);
        }
      }
      function Xw(n, i) {
        var a = i.length;
        if (!a)
          return n;
        var d = a - 1;
        return i[d] = (a > 1 ? "& " : "") + i[d], i = i.join(a > 2 ? ", " : " "), n.replace(ja, `{
/* [wrapped with ` + i + `] */
`);
      }
      function Zw(n) {
        return ue(n) || Rr(n) || !!(Ff && n && n[Ff]);
      }
      function En(n, i) {
        var a = typeof n;
        return i = i ?? K, !!i && (a == "number" || a != "symbol" && ze.test(n)) && n > -1 && n % 1 == 0 && n < i;
      }
      function bt(n, i, a) {
        if (!Ge(a))
          return !1;
        var d = typeof i;
        return (d == "number" ? Tt(a) && En(i, a.length) : d == "string" && i in a) ? nn(a[i], n) : !1;
      }
      function Nl(n, i) {
        if (ue(n))
          return !1;
        var a = typeof n;
        return a == "number" || a == "symbol" || a == "boolean" || n == null || It(n) ? !0 : Bo.test(n) || !Fo.test(n) || i != null && n in ke(i);
      }
      function Jw(n) {
        var i = typeof n;
        return i == "string" || i == "number" || i == "symbol" || i == "boolean" ? n !== "__proto__" : n === null;
      }
      function Ml(n) {
        var i = ys(n), a = x[i];
        if (typeof a != "function" || !(i in Se.prototype))
          return !1;
        if (n === a)
          return !0;
        var d = El(a);
        return !!d && n === d[0];
      }
      function Qw(n) {
        return !!Lf && Lf in n;
      }
      var eb = Yo ? Rn : ql;
      function eo(n) {
        var i = n && n.constructor, a = typeof i == "function" && i.prototype || Zr;
        return n === a;
      }
      function Ld(n) {
        return n === n && !Ge(n);
      }
      function jd(n, i) {
        return function(a) {
          return a == null ? !1 : a[n] === i && (i !== r || n in ke(a));
        };
      }
      function tb(n) {
        var i = _s(n, function(d) {
          return a.size === h && a.clear(), d;
        }), a = i.cache;
        return i;
      }
      function nb(n, i) {
        var a = n[1], d = i[1], m = a | d, w = m < (_ | A | $), P = d == $ && a == N || d == $ && a == U && n[7].length <= i[8] || d == ($ | U) && i[7].length <= i[8] && a == N;
        if (!(w || P))
          return n;
        d & _ && (n[2] = i[2], m |= a & _ ? 0 : R);
        var O = i[3];
        if (O) {
          var D = n[3];
          n[3] = D ? yd(D, O, i[4]) : O, n[4] = D ? Kn(n[3], p) : i[4];
        }
        return O = i[5], O && (D = n[5], n[5] = D ? xd(D, O, i[6]) : O, n[6] = D ? Kn(n[5], p) : i[6]), O = i[7], O && (n[7] = O), d & $ && (n[8] = n[8] == null ? i[8] : mt(n[8], i[8])), n[9] == null && (n[9] = i[9]), n[0] = i[0], n[1] = m, n;
      }
      function rb(n) {
        var i = [];
        if (n != null)
          for (var a in ke(n))
            i.push(a);
        return i;
      }
      function ib(n) {
        return Xo.call(n);
      }
      function kd(n, i, a) {
        return i = tt(i === r ? n.length - 1 : i, 0), function() {
          for (var d = arguments, m = -1, w = tt(d.length - i, 0), P = I(w); ++m < w; )
            P[m] = d[i + m];
          m = -1;
          for (var O = I(i + 1); ++m < i; )
            O[m] = d[m];
          return O[i] = a(P), Nt(n, this, O);
        };
      }
      function Vd(n, i) {
        return i.length < 2 ? n : Pr(n, Kt(i, 0, -1));
      }
      function ob(n, i) {
        for (var a = n.length, d = mt(i.length, a), m = _t(n); d--; ) {
          var w = i[d];
          n[d] = En(w, a) ? m[w] : r;
        }
        return n;
      }
      function Dl(n, i) {
        if (!(i === "constructor" && typeof n[i] == "function") && i != "__proto__")
          return n[i];
      }
      var Fd = Wd(ld), to = w0 || function(n, i) {
        return lt.setTimeout(n, i);
      }, Il = Wd(Ew);
      function Bd(n, i, a) {
        var d = i + "";
        return Il(n, Xw(d, sb(Kw(d), a)));
      }
      function Wd(n) {
        var i = 0, a = 0;
        return function() {
          var d = _0(), m = ae - (d - a);
          if (a = d, m > 0) {
            if (++i >= Z)
              return arguments[0];
          } else
            i = 0;
          return n.apply(r, arguments);
        };
      }
      function ws(n, i) {
        var a = -1, d = n.length, m = d - 1;
        for (i = i === r ? d : i; ++a < i; ) {
          var w = gl(a, m), P = n[w];
          n[w] = n[a], n[a] = P;
        }
        return n.length = i, n;
      }
      var $d = tb(function(n) {
        var i = [];
        return n.charCodeAt(0) === 46 && i.push(""), n.replace(Ia, function(a, d, m, w) {
          i.push(m ? w.replace(G, "$1") : d || a);
        }), i;
      });
      function hn(n) {
        if (typeof n == "string" || It(n))
          return n;
        var i = n + "";
        return i == "0" && 1 / n == -X ? "-0" : i;
      }
      function Er(n) {
        if (n != null) {
          try {
            return qo.call(n);
          } catch {
          }
          try {
            return n + "";
          } catch {
          }
        }
        return "";
      }
      function sb(n, i) {
        return Ut(Bt, function(a) {
          var d = "_." + a[0];
          i & a[1] && !Ho(n, d) && n.push(d);
        }), n.sort();
      }
      function Ud(n) {
        if (n instanceof Se)
          return n.clone();
        var i = new zt(n.__wrapped__, n.__chain__);
        return i.__actions__ = _t(n.__actions__), i.__index__ = n.__index__, i.__values__ = n.__values__, i;
      }
      function ab(n, i, a) {
        (a ? bt(n, i, a) : i === r) ? i = 1 : i = tt(fe(i), 0);
        var d = n == null ? 0 : n.length;
        if (!d || i < 1)
          return [];
        for (var m = 0, w = 0, P = I(ns(d / i)); m < d; )
          P[w++] = Kt(n, m, m += i);
        return P;
      }
      function lb(n) {
        for (var i = -1, a = n == null ? 0 : n.length, d = 0, m = []; ++i < a; ) {
          var w = n[i];
          w && (m[d++] = w);
        }
        return m;
      }
      function cb() {
        var n = arguments.length;
        if (!n)
          return [];
        for (var i = I(n - 1), a = arguments[0], d = n; d--; )
          i[d - 1] = arguments[d];
        return Gn(ue(a) ? _t(a) : [a], ct(i, 1));
      }
      var ub = ge(function(n, i) {
        return Ze(n) ? qi(n, ct(i, 1, Ze, !0)) : [];
      }), fb = ge(function(n, i) {
        var a = Yt(i);
        return Ze(a) && (a = r), Ze(n) ? qi(n, ct(i, 1, Ze, !0), Q(a, 2)) : [];
      }), db = ge(function(n, i) {
        var a = Yt(i);
        return Ze(a) && (a = r), Ze(n) ? qi(n, ct(i, 1, Ze, !0), r, a) : [];
      });
      function hb(n, i, a) {
        var d = n == null ? 0 : n.length;
        return d ? (i = a || i === r ? 1 : fe(i), Kt(n, i < 0 ? 0 : i, d)) : [];
      }
      function pb(n, i, a) {
        var d = n == null ? 0 : n.length;
        return d ? (i = a || i === r ? 1 : fe(i), i = d - i, Kt(n, 0, i < 0 ? 0 : i)) : [];
      }
      function mb(n, i) {
        return n && n.length ? ds(n, Q(i, 3), !0, !0) : [];
      }
      function gb(n, i) {
        return n && n.length ? ds(n, Q(i, 3), !0) : [];
      }
      function vb(n, i, a, d) {
        var m = n == null ? 0 : n.length;
        return m ? (a && typeof a != "number" && bt(n, i, a) && (a = 0, d = m), cw(n, i, a, d)) : [];
      }
      function Hd(n, i, a) {
        var d = n == null ? 0 : n.length;
        if (!d)
          return -1;
        var m = a == null ? 0 : fe(a);
        return m < 0 && (m = tt(d + m, 0)), zo(n, Q(i, 3), m);
      }
      function zd(n, i, a) {
        var d = n == null ? 0 : n.length;
        if (!d)
          return -1;
        var m = d - 1;
        return a !== r && (m = fe(a), m = a < 0 ? tt(d + m, 0) : mt(m, d - 1)), zo(n, Q(i, 3), m, !0);
      }
      function Gd(n) {
        var i = n == null ? 0 : n.length;
        return i ? ct(n, 1) : [];
      }
      function yb(n) {
        var i = n == null ? 0 : n.length;
        return i ? ct(n, X) : [];
      }
      function xb(n, i) {
        var a = n == null ? 0 : n.length;
        return a ? (i = i === r ? 1 : fe(i), ct(n, i)) : [];
      }
      function wb(n) {
        for (var i = -1, a = n == null ? 0 : n.length, d = {}; ++i < a; ) {
          var m = n[i];
          d[m[0]] = m[1];
        }
        return d;
      }
      function Kd(n) {
        return n && n.length ? n[0] : r;
      }
      function bb(n, i, a) {
        var d = n == null ? 0 : n.length;
        if (!d)
          return -1;
        var m = a == null ? 0 : fe(a);
        return m < 0 && (m = tt(d + m, 0)), Kr(n, i, m);
      }
      function Sb(n) {
        var i = n == null ? 0 : n.length;
        return i ? Kt(n, 0, -1) : [];
      }
      var Cb = ge(function(n) {
        var i = He(n, bl);
        return i.length && i[0] === n[0] ? fl(i) : [];
      }), _b = ge(function(n) {
        var i = Yt(n), a = He(n, bl);
        return i === Yt(a) ? i = r : a.pop(), a.length && a[0] === n[0] ? fl(a, Q(i, 2)) : [];
      }), Tb = ge(function(n) {
        var i = Yt(n), a = He(n, bl);
        return i = typeof i == "function" ? i : r, i && a.pop(), a.length && a[0] === n[0] ? fl(a, r, i) : [];
      });
      function Pb(n, i) {
        return n == null ? "" : S0.call(n, i);
      }
      function Yt(n) {
        var i = n == null ? 0 : n.length;
        return i ? n[i - 1] : r;
      }
      function Ab(n, i, a) {
        var d = n == null ? 0 : n.length;
        if (!d)
          return -1;
        var m = d;
        return a !== r && (m = fe(a), m = m < 0 ? tt(d + m, 0) : mt(m, d - 1)), i === i ? s0(n, i, m) : zo(n, Af, m, !0);
      }
      function Eb(n, i) {
        return n && n.length ? id(n, fe(i)) : r;
      }
      var Rb = ge(Yd);
      function Yd(n, i) {
        return n && n.length && i && i.length ? ml(n, i) : n;
      }
      function Ob(n, i, a) {
        return n && n.length && i && i.length ? ml(n, i, Q(a, 2)) : n;
      }
      function Nb(n, i, a) {
        return n && n.length && i && i.length ? ml(n, i, r, a) : n;
      }
      var Mb = An(function(n, i) {
        var a = n == null ? 0 : n.length, d = al(n, i);
        return ad(n, He(i, function(m) {
          return En(m, a) ? +m : m;
        }).sort(vd)), d;
      });
      function Db(n, i) {
        var a = [];
        if (!(n && n.length))
          return a;
        var d = -1, m = [], w = n.length;
        for (i = Q(i, 3); ++d < w; ) {
          var P = n[d];
          i(P, d, n) && (a.push(P), m.push(d));
        }
        return ad(n, m), a;
      }
      function Ll(n) {
        return n == null ? n : P0.call(n);
      }
      function Ib(n, i, a) {
        var d = n == null ? 0 : n.length;
        return d ? (a && typeof a != "number" && bt(n, i, a) ? (i = 0, a = d) : (i = i == null ? 0 : fe(i), a = a === r ? d : fe(a)), Kt(n, i, a)) : [];
      }
      function Lb(n, i) {
        return fs(n, i);
      }
      function jb(n, i, a) {
        return yl(n, i, Q(a, 2));
      }
      function kb(n, i) {
        var a = n == null ? 0 : n.length;
        if (a) {
          var d = fs(n, i);
          if (d < a && nn(n[d], i))
            return d;
        }
        return -1;
      }
      function Vb(n, i) {
        return fs(n, i, !0);
      }
      function Fb(n, i, a) {
        return yl(n, i, Q(a, 2), !0);
      }
      function Bb(n, i) {
        var a = n == null ? 0 : n.length;
        if (a) {
          var d = fs(n, i, !0) - 1;
          if (nn(n[d], i))
            return d;
        }
        return -1;
      }
      function Wb(n) {
        return n && n.length ? cd(n) : [];
      }
      function $b(n, i) {
        return n && n.length ? cd(n, Q(i, 2)) : [];
      }
      function Ub(n) {
        var i = n == null ? 0 : n.length;
        return i ? Kt(n, 1, i) : [];
      }
      function Hb(n, i, a) {
        return n && n.length ? (i = a || i === r ? 1 : fe(i), Kt(n, 0, i < 0 ? 0 : i)) : [];
      }
      function zb(n, i, a) {
        var d = n == null ? 0 : n.length;
        return d ? (i = a || i === r ? 1 : fe(i), i = d - i, Kt(n, i < 0 ? 0 : i, d)) : [];
      }
      function Gb(n, i) {
        return n && n.length ? ds(n, Q(i, 3), !1, !0) : [];
      }
      function Kb(n, i) {
        return n && n.length ? ds(n, Q(i, 3)) : [];
      }
      var Yb = ge(function(n) {
        return Xn(ct(n, 1, Ze, !0));
      }), qb = ge(function(n) {
        var i = Yt(n);
        return Ze(i) && (i = r), Xn(ct(n, 1, Ze, !0), Q(i, 2));
      }), Xb = ge(function(n) {
        var i = Yt(n);
        return i = typeof i == "function" ? i : r, Xn(ct(n, 1, Ze, !0), r, i);
      });
      function Zb(n) {
        return n && n.length ? Xn(n) : [];
      }
      function Jb(n, i) {
        return n && n.length ? Xn(n, Q(i, 2)) : [];
      }
      function Qb(n, i) {
        return i = typeof i == "function" ? i : r, n && n.length ? Xn(n, r, i) : [];
      }
      function jl(n) {
        if (!(n && n.length))
          return [];
        var i = 0;
        return n = zn(n, function(a) {
          if (Ze(a))
            return i = tt(a.length, i), !0;
        }), Qa(i, function(a) {
          return He(n, Xa(a));
        });
      }
      function qd(n, i) {
        if (!(n && n.length))
          return [];
        var a = jl(n);
        return i == null ? a : He(a, function(d) {
          return Nt(i, r, d);
        });
      }
      var e1 = ge(function(n, i) {
        return Ze(n) ? qi(n, i) : [];
      }), t1 = ge(function(n) {
        return wl(zn(n, Ze));
      }), n1 = ge(function(n) {
        var i = Yt(n);
        return Ze(i) && (i = r), wl(zn(n, Ze), Q(i, 2));
      }), r1 = ge(function(n) {
        var i = Yt(n);
        return i = typeof i == "function" ? i : r, wl(zn(n, Ze), r, i);
      }), i1 = ge(jl);
      function o1(n, i) {
        return hd(n || [], i || [], Yi);
      }
      function s1(n, i) {
        return hd(n || [], i || [], Ji);
      }
      var a1 = ge(function(n) {
        var i = n.length, a = i > 1 ? n[i - 1] : r;
        return a = typeof a == "function" ? (n.pop(), a) : r, qd(n, a);
      });
      function Xd(n) {
        var i = x(n);
        return i.__chain__ = !0, i;
      }
      function l1(n, i) {
        return i(n), n;
      }
      function bs(n, i) {
        return i(n);
      }
      var c1 = An(function(n) {
        var i = n.length, a = i ? n[0] : 0, d = this.__wrapped__, m = function(w) {
          return al(w, n);
        };
        return i > 1 || this.__actions__.length || !(d instanceof Se) || !En(a) ? this.thru(m) : (d = d.slice(a, +a + (i ? 1 : 0)), d.__actions__.push({
          func: bs,
          args: [m],
          thisArg: r
        }), new zt(d, this.__chain__).thru(function(w) {
          return i && !w.length && w.push(r), w;
        }));
      });
      function u1() {
        return Xd(this);
      }
      function f1() {
        return new zt(this.value(), this.__chain__);
      }
      function d1() {
        this.__values__ === r && (this.__values__ = uh(this.value()));
        var n = this.__index__ >= this.__values__.length, i = n ? r : this.__values__[this.__index__++];
        return { done: n, value: i };
      }
      function h1() {
        return this;
      }
      function p1(n) {
        for (var i, a = this; a instanceof ss; ) {
          var d = Ud(a);
          d.__index__ = 0, d.__values__ = r, i ? m.__wrapped__ = d : i = d;
          var m = d;
          a = a.__wrapped__;
        }
        return m.__wrapped__ = n, i;
      }
      function m1() {
        var n = this.__wrapped__;
        if (n instanceof Se) {
          var i = n;
          return this.__actions__.length && (i = new Se(this)), i = i.reverse(), i.__actions__.push({
            func: bs,
            args: [Ll],
            thisArg: r
          }), new zt(i, this.__chain__);
        }
        return this.thru(Ll);
      }
      function g1() {
        return dd(this.__wrapped__, this.__actions__);
      }
      var v1 = hs(function(n, i, a) {
        Ie.call(n, a) ? ++n[a] : Tn(n, a, 1);
      });
      function y1(n, i, a) {
        var d = ue(n) ? Tf : lw;
        return a && bt(n, i, a) && (i = r), d(n, Q(i, 3));
      }
      function x1(n, i) {
        var a = ue(n) ? zn : qf;
        return a(n, Q(i, 3));
      }
      var w1 = Cd(Hd), b1 = Cd(zd);
      function S1(n, i) {
        return ct(Ss(n, i), 1);
      }
      function C1(n, i) {
        return ct(Ss(n, i), X);
      }
      function _1(n, i, a) {
        return a = a === r ? 1 : fe(a), ct(Ss(n, i), a);
      }
      function Zd(n, i) {
        var a = ue(n) ? Ut : qn;
        return a(n, Q(i, 3));
      }
      function Jd(n, i) {
        var a = ue(n) ? Ux : Yf;
        return a(n, Q(i, 3));
      }
      var T1 = hs(function(n, i, a) {
        Ie.call(n, a) ? n[a].push(i) : Tn(n, a, [i]);
      });
      function P1(n, i, a, d) {
        n = Tt(n) ? n : oi(n), a = a && !d ? fe(a) : 0;
        var m = n.length;
        return a < 0 && (a = tt(m + a, 0)), As(n) ? a <= m && n.indexOf(i, a) > -1 : !!m && Kr(n, i, a) > -1;
      }
      var A1 = ge(function(n, i, a) {
        var d = -1, m = typeof i == "function", w = Tt(n) ? I(n.length) : [];
        return qn(n, function(P) {
          w[++d] = m ? Nt(i, P, a) : Xi(P, i, a);
        }), w;
      }), E1 = hs(function(n, i, a) {
        Tn(n, a, i);
      });
      function Ss(n, i) {
        var a = ue(n) ? He : td;
        return a(n, Q(i, 3));
      }
      function R1(n, i, a, d) {
        return n == null ? [] : (ue(i) || (i = i == null ? [] : [i]), a = d ? r : a, ue(a) || (a = a == null ? [] : [a]), od(n, i, a));
      }
      var O1 = hs(function(n, i, a) {
        n[a ? 0 : 1].push(i);
      }, function() {
        return [[], []];
      });
      function N1(n, i, a) {
        var d = ue(n) ? Ya : Rf, m = arguments.length < 3;
        return d(n, Q(i, 4), a, m, qn);
      }
      function M1(n, i, a) {
        var d = ue(n) ? Hx : Rf, m = arguments.length < 3;
        return d(n, Q(i, 4), a, m, Yf);
      }
      function D1(n, i) {
        var a = ue(n) ? zn : qf;
        return a(n, Ts(Q(i, 3)));
      }
      function I1(n) {
        var i = ue(n) ? Hf : Pw;
        return i(n);
      }
      function L1(n, i, a) {
        (a ? bt(n, i, a) : i === r) ? i = 1 : i = fe(i);
        var d = ue(n) ? rw : Aw;
        return d(n, i);
      }
      function j1(n) {
        var i = ue(n) ? iw : Rw;
        return i(n);
      }
      function k1(n) {
        if (n == null)
          return 0;
        if (Tt(n))
          return As(n) ? qr(n) : n.length;
        var i = gt(n);
        return i == Ue || i == Ot ? n.size : hl(n).length;
      }
      function V1(n, i, a) {
        var d = ue(n) ? qa : Ow;
        return a && bt(n, i, a) && (i = r), d(n, Q(i, 3));
      }
      var F1 = ge(function(n, i) {
        if (n == null)
          return [];
        var a = i.length;
        return a > 1 && bt(n, i[0], i[1]) ? i = [] : a > 2 && bt(i[0], i[1], i[2]) && (i = [i[0]]), od(n, ct(i, 1), []);
      }), Cs = x0 || function() {
        return lt.Date.now();
      };
      function B1(n, i) {
        if (typeof i != "function")
          throw new Ht(l);
        return n = fe(n), function() {
          if (--n < 1)
            return i.apply(this, arguments);
        };
      }
      function Qd(n, i, a) {
        return i = a ? r : i, i = n && i == null ? n.length : i, Pn(n, $, r, r, r, r, i);
      }
      function eh(n, i) {
        var a;
        if (typeof i != "function")
          throw new Ht(l);
        return n = fe(n), function() {
          return --n > 0 && (a = i.apply(this, arguments)), n <= 1 && (i = r), a;
        };
      }
      var kl = ge(function(n, i, a) {
        var d = _;
        if (a.length) {
          var m = Kn(a, ri(kl));
          d |= j;
        }
        return Pn(n, d, i, a, m);
      }), th = ge(function(n, i, a) {
        var d = _ | A;
        if (a.length) {
          var m = Kn(a, ri(th));
          d |= j;
        }
        return Pn(i, d, n, a, m);
      });
      function nh(n, i, a) {
        i = a ? r : i;
        var d = Pn(n, N, r, r, r, r, r, i);
        return d.placeholder = nh.placeholder, d;
      }
      function rh(n, i, a) {
        i = a ? r : i;
        var d = Pn(n, L, r, r, r, r, r, i);
        return d.placeholder = rh.placeholder, d;
      }
      function ih(n, i, a) {
        var d, m, w, P, O, D, V = 0, F = !1, B = !1, z = !0;
        if (typeof n != "function")
          throw new Ht(l);
        i = qt(i) || 0, Ge(a) && (F = !!a.leading, B = "maxWait" in a, w = B ? tt(qt(a.maxWait) || 0, i) : w, z = "trailing" in a ? !!a.trailing : z);
        function q(Je) {
          var rn = d, Nn = m;
          return d = m = r, V = Je, P = n.apply(Nn, rn), P;
        }
        function re(Je) {
          return V = Je, O = to(ye, i), F ? q(Je) : P;
        }
        function me(Je) {
          var rn = Je - D, Nn = Je - V, Ch = i - rn;
          return B ? mt(Ch, w - Nn) : Ch;
        }
        function ie(Je) {
          var rn = Je - D, Nn = Je - V;
          return D === r || rn >= i || rn < 0 || B && Nn >= w;
        }
        function ye() {
          var Je = Cs();
          if (ie(Je))
            return _e(Je);
          O = to(ye, me(Je));
        }
        function _e(Je) {
          return O = r, z && d ? q(Je) : (d = m = r, P);
        }
        function Lt() {
          O !== r && pd(O), V = 0, d = D = m = O = r;
        }
        function St() {
          return O === r ? P : _e(Cs());
        }
        function jt() {
          var Je = Cs(), rn = ie(Je);
          if (d = arguments, m = this, D = Je, rn) {
            if (O === r)
              return re(D);
            if (B)
              return pd(O), O = to(ye, i), q(D);
          }
          return O === r && (O = to(ye, i)), P;
        }
        return jt.cancel = Lt, jt.flush = St, jt;
      }
      var W1 = ge(function(n, i) {
        return Kf(n, 1, i);
      }), $1 = ge(function(n, i, a) {
        return Kf(n, qt(i) || 0, a);
      });
      function U1(n) {
        return Pn(n, J);
      }
      function _s(n, i) {
        if (typeof n != "function" || i != null && typeof i != "function")
          throw new Ht(l);
        var a = function() {
          var d = arguments, m = i ? i.apply(this, d) : d[0], w = a.cache;
          if (w.has(m))
            return w.get(m);
          var P = n.apply(this, d);
          return a.cache = w.set(m, P) || w, P;
        };
        return a.cache = new (_s.Cache || _n)(), a;
      }
      _s.Cache = _n;
      function Ts(n) {
        if (typeof n != "function")
          throw new Ht(l);
        return function() {
          var i = arguments;
          switch (i.length) {
            case 0:
              return !n.call(this);
            case 1:
              return !n.call(this, i[0]);
            case 2:
              return !n.call(this, i[0], i[1]);
            case 3:
              return !n.call(this, i[0], i[1], i[2]);
          }
          return !n.apply(this, i);
        };
      }
      function H1(n) {
        return eh(2, n);
      }
      var z1 = Nw(function(n, i) {
        i = i.length == 1 && ue(i[0]) ? He(i[0], Mt(Q())) : He(ct(i, 1), Mt(Q()));
        var a = i.length;
        return ge(function(d) {
          for (var m = -1, w = mt(d.length, a); ++m < w; )
            d[m] = i[m].call(this, d[m]);
          return Nt(n, this, d);
        });
      }), Vl = ge(function(n, i) {
        var a = Kn(i, ri(Vl));
        return Pn(n, j, r, i, a);
      }), oh = ge(function(n, i) {
        var a = Kn(i, ri(oh));
        return Pn(n, H, r, i, a);
      }), G1 = An(function(n, i) {
        return Pn(n, U, r, r, r, i);
      });
      function K1(n, i) {
        if (typeof n != "function")
          throw new Ht(l);
        return i = i === r ? i : fe(i), ge(n, i);
      }
      function Y1(n, i) {
        if (typeof n != "function")
          throw new Ht(l);
        return i = i == null ? 0 : tt(fe(i), 0), ge(function(a) {
          var d = a[i], m = Jn(a, 0, i);
          return d && Gn(m, d), Nt(n, this, m);
        });
      }
      function q1(n, i, a) {
        var d = !0, m = !0;
        if (typeof n != "function")
          throw new Ht(l);
        return Ge(a) && (d = "leading" in a ? !!a.leading : d, m = "trailing" in a ? !!a.trailing : m), ih(n, i, {
          leading: d,
          maxWait: i,
          trailing: m
        });
      }
      function X1(n) {
        return Qd(n, 1);
      }
      function Z1(n, i) {
        return Vl(Sl(i), n);
      }
      function J1() {
        if (!arguments.length)
          return [];
        var n = arguments[0];
        return ue(n) ? n : [n];
      }
      function Q1(n) {
        return Gt(n, C);
      }
      function eS(n, i) {
        return i = typeof i == "function" ? i : r, Gt(n, C, i);
      }
      function tS(n) {
        return Gt(n, g | C);
      }
      function nS(n, i) {
        return i = typeof i == "function" ? i : r, Gt(n, g | C, i);
      }
      function rS(n, i) {
        return i == null || Gf(n, i, it(i));
      }
      function nn(n, i) {
        return n === i || n !== n && i !== i;
      }
      var iS = vs(ul), oS = vs(function(n, i) {
        return n >= i;
      }), Rr = Jf(/* @__PURE__ */ function() {
        return arguments;
      }()) ? Jf : function(n) {
        return Xe(n) && Ie.call(n, "callee") && !Vf.call(n, "callee");
      }, ue = I.isArray, sS = xf ? Mt(xf) : pw;
      function Tt(n) {
        return n != null && Ps(n.length) && !Rn(n);
      }
      function Ze(n) {
        return Xe(n) && Tt(n);
      }
      function aS(n) {
        return n === !0 || n === !1 || Xe(n) && wt(n) == xe;
      }
      var Qn = b0 || ql, lS = wf ? Mt(wf) : mw;
      function cS(n) {
        return Xe(n) && n.nodeType === 1 && !no(n);
      }
      function uS(n) {
        if (n == null)
          return !0;
        if (Tt(n) && (ue(n) || typeof n == "string" || typeof n.splice == "function" || Qn(n) || ii(n) || Rr(n)))
          return !n.length;
        var i = gt(n);
        if (i == Ue || i == Ot)
          return !n.size;
        if (eo(n))
          return !hl(n).length;
        for (var a in n)
          if (Ie.call(n, a))
            return !1;
        return !0;
      }
      function fS(n, i) {
        return Zi(n, i);
      }
      function dS(n, i, a) {
        a = typeof a == "function" ? a : r;
        var d = a ? a(n, i) : r;
        return d === r ? Zi(n, i, r, a) : !!d;
      }
      function Fl(n) {
        if (!Xe(n))
          return !1;
        var i = wt(n);
        return i == Ce || i == Ae || typeof n.message == "string" && typeof n.name == "string" && !no(n);
      }
      function hS(n) {
        return typeof n == "number" && Bf(n);
      }
      function Rn(n) {
        if (!Ge(n))
          return !1;
        var i = wt(n);
        return i == we || i == nt || i == ne || i == Jt;
      }
      function sh(n) {
        return typeof n == "number" && n == fe(n);
      }
      function Ps(n) {
        return typeof n == "number" && n > -1 && n % 1 == 0 && n <= K;
      }
      function Ge(n) {
        var i = typeof n;
        return n != null && (i == "object" || i == "function");
      }
      function Xe(n) {
        return n != null && typeof n == "object";
      }
      var ah = bf ? Mt(bf) : vw;
      function pS(n, i) {
        return n === i || dl(n, i, Rl(i));
      }
      function mS(n, i, a) {
        return a = typeof a == "function" ? a : r, dl(n, i, Rl(i), a);
      }
      function gS(n) {
        return lh(n) && n != +n;
      }
      function vS(n) {
        if (eb(n))
          throw new ce(c);
        return Qf(n);
      }
      function yS(n) {
        return n === null;
      }
      function xS(n) {
        return n == null;
      }
      function lh(n) {
        return typeof n == "number" || Xe(n) && wt(n) == ht;
      }
      function no(n) {
        if (!Xe(n) || wt(n) != rt)
          return !1;
        var i = Qo(n);
        if (i === null)
          return !0;
        var a = Ie.call(i, "constructor") && i.constructor;
        return typeof a == "function" && a instanceof a && qo.call(a) == m0;
      }
      var Bl = Sf ? Mt(Sf) : yw;
      function wS(n) {
        return sh(n) && n >= -K && n <= K;
      }
      var ch = Cf ? Mt(Cf) : xw;
      function As(n) {
        return typeof n == "string" || !ue(n) && Xe(n) && wt(n) == bn;
      }
      function It(n) {
        return typeof n == "symbol" || Xe(n) && wt(n) == Wr;
      }
      var ii = _f ? Mt(_f) : ww;
      function bS(n) {
        return n === r;
      }
      function SS(n) {
        return Xe(n) && gt(n) == $n;
      }
      function CS(n) {
        return Xe(n) && wt(n) == Io;
      }
      var _S = vs(pl), TS = vs(function(n, i) {
        return n <= i;
      });
      function uh(n) {
        if (!n)
          return [];
        if (Tt(n))
          return As(n) ? en(n) : _t(n);
        if (Ui && n[Ui])
          return r0(n[Ui]());
        var i = gt(n), a = i == Ue ? tl : i == Ot ? Go : oi;
        return a(n);
      }
      function On(n) {
        if (!n)
          return n === 0 ? n : 0;
        if (n = qt(n), n === X || n === -X) {
          var i = n < 0 ? -1 : 1;
          return i * pe;
        }
        return n === n ? n : 0;
      }
      function fe(n) {
        var i = On(n), a = i % 1;
        return i === i ? a ? i - a : i : 0;
      }
      function fh(n) {
        return n ? Tr(fe(n), 0, Pe) : 0;
      }
      function qt(n) {
        if (typeof n == "number")
          return n;
        if (It(n))
          return Me;
        if (Ge(n)) {
          var i = typeof n.valueOf == "function" ? n.valueOf() : n;
          n = Ge(i) ? i + "" : i;
        }
        if (typeof n != "string")
          return n === 0 ? n : +n;
        n = Of(n);
        var a = be.test(n);
        return a || st.test(n) ? Bx(n.slice(2), a ? 2 : 8) : De.test(n) ? Me : +n;
      }
      function dh(n) {
        return dn(n, Pt(n));
      }
      function PS(n) {
        return n ? Tr(fe(n), -K, K) : n === 0 ? n : 0;
      }
      function Ne(n) {
        return n == null ? "" : Dt(n);
      }
      var AS = ti(function(n, i) {
        if (eo(i) || Tt(i)) {
          dn(i, it(i), n);
          return;
        }
        for (var a in i)
          Ie.call(i, a) && Yi(n, a, i[a]);
      }), hh = ti(function(n, i) {
        dn(i, Pt(i), n);
      }), Es = ti(function(n, i, a, d) {
        dn(i, Pt(i), n, d);
      }), ES = ti(function(n, i, a, d) {
        dn(i, it(i), n, d);
      }), RS = An(al);
      function OS(n, i) {
        var a = ei(n);
        return i == null ? a : zf(a, i);
      }
      var NS = ge(function(n, i) {
        n = ke(n);
        var a = -1, d = i.length, m = d > 2 ? i[2] : r;
        for (m && bt(i[0], i[1], m) && (d = 1); ++a < d; )
          for (var w = i[a], P = Pt(w), O = -1, D = P.length; ++O < D; ) {
            var V = P[O], F = n[V];
            (F === r || nn(F, Zr[V]) && !Ie.call(n, V)) && (n[V] = w[V]);
          }
        return n;
      }), MS = ge(function(n) {
        return n.push(r, Od), Nt(ph, r, n);
      });
      function DS(n, i) {
        return Pf(n, Q(i, 3), fn);
      }
      function IS(n, i) {
        return Pf(n, Q(i, 3), cl);
      }
      function LS(n, i) {
        return n == null ? n : ll(n, Q(i, 3), Pt);
      }
      function jS(n, i) {
        return n == null ? n : Xf(n, Q(i, 3), Pt);
      }
      function kS(n, i) {
        return n && fn(n, Q(i, 3));
      }
      function VS(n, i) {
        return n && cl(n, Q(i, 3));
      }
      function FS(n) {
        return n == null ? [] : cs(n, it(n));
      }
      function BS(n) {
        return n == null ? [] : cs(n, Pt(n));
      }
      function Wl(n, i, a) {
        var d = n == null ? r : Pr(n, i);
        return d === r ? a : d;
      }
      function WS(n, i) {
        return n != null && Dd(n, i, uw);
      }
      function $l(n, i) {
        return n != null && Dd(n, i, fw);
      }
      var $S = Td(function(n, i, a) {
        i != null && typeof i.toString != "function" && (i = Xo.call(i)), n[i] = a;
      }, Hl(At)), US = Td(function(n, i, a) {
        i != null && typeof i.toString != "function" && (i = Xo.call(i)), Ie.call(n, i) ? n[i].push(a) : n[i] = [a];
      }, Q), HS = ge(Xi);
      function it(n) {
        return Tt(n) ? Uf(n) : hl(n);
      }
      function Pt(n) {
        return Tt(n) ? Uf(n, !0) : bw(n);
      }
      function zS(n, i) {
        var a = {};
        return i = Q(i, 3), fn(n, function(d, m, w) {
          Tn(a, i(d, m, w), d);
        }), a;
      }
      function GS(n, i) {
        var a = {};
        return i = Q(i, 3), fn(n, function(d, m, w) {
          Tn(a, m, i(d, m, w));
        }), a;
      }
      var KS = ti(function(n, i, a) {
        us(n, i, a);
      }), ph = ti(function(n, i, a, d) {
        us(n, i, a, d);
      }), YS = An(function(n, i) {
        var a = {};
        if (n == null)
          return a;
        var d = !1;
        i = He(i, function(w) {
          return w = Zn(w, n), d || (d = w.length > 1), w;
        }), dn(n, Al(n), a), d && (a = Gt(a, g | y | C, $w));
        for (var m = i.length; m--; )
          xl(a, i[m]);
        return a;
      });
      function qS(n, i) {
        return mh(n, Ts(Q(i)));
      }
      var XS = An(function(n, i) {
        return n == null ? {} : Cw(n, i);
      });
      function mh(n, i) {
        if (n == null)
          return {};
        var a = He(Al(n), function(d) {
          return [d];
        });
        return i = Q(i), sd(n, a, function(d, m) {
          return i(d, m[0]);
        });
      }
      function ZS(n, i, a) {
        i = Zn(i, n);
        var d = -1, m = i.length;
        for (m || (m = 1, n = r); ++d < m; ) {
          var w = n == null ? r : n[hn(i[d])];
          w === r && (d = m, w = a), n = Rn(w) ? w.call(n) : w;
        }
        return n;
      }
      function JS(n, i, a) {
        return n == null ? n : Ji(n, i, a);
      }
      function QS(n, i, a, d) {
        return d = typeof d == "function" ? d : r, n == null ? n : Ji(n, i, a, d);
      }
      var gh = Ed(it), vh = Ed(Pt);
      function eC(n, i, a) {
        var d = ue(n), m = d || Qn(n) || ii(n);
        if (i = Q(i, 4), a == null) {
          var w = n && n.constructor;
          m ? a = d ? new w() : [] : Ge(n) ? a = Rn(w) ? ei(Qo(n)) : {} : a = {};
        }
        return (m ? Ut : fn)(n, function(P, O, D) {
          return i(a, P, O, D);
        }), a;
      }
      function tC(n, i) {
        return n == null ? !0 : xl(n, i);
      }
      function nC(n, i, a) {
        return n == null ? n : fd(n, i, Sl(a));
      }
      function rC(n, i, a, d) {
        return d = typeof d == "function" ? d : r, n == null ? n : fd(n, i, Sl(a), d);
      }
      function oi(n) {
        return n == null ? [] : el(n, it(n));
      }
      function iC(n) {
        return n == null ? [] : el(n, Pt(n));
      }
      function oC(n, i, a) {
        return a === r && (a = i, i = r), a !== r && (a = qt(a), a = a === a ? a : 0), i !== r && (i = qt(i), i = i === i ? i : 0), Tr(qt(n), i, a);
      }
      function sC(n, i, a) {
        return i = On(i), a === r ? (a = i, i = 0) : a = On(a), n = qt(n), dw(n, i, a);
      }
      function aC(n, i, a) {
        if (a && typeof a != "boolean" && bt(n, i, a) && (i = a = r), a === r && (typeof i == "boolean" ? (a = i, i = r) : typeof n == "boolean" && (a = n, n = r)), n === r && i === r ? (n = 0, i = 1) : (n = On(n), i === r ? (i = n, n = 0) : i = On(i)), n > i) {
          var d = n;
          n = i, i = d;
        }
        if (a || n % 1 || i % 1) {
          var m = Wf();
          return mt(n + m * (i - n + Fx("1e-" + ((m + "").length - 1))), i);
        }
        return gl(n, i);
      }
      var lC = ni(function(n, i, a) {
        return i = i.toLowerCase(), n + (a ? yh(i) : i);
      });
      function yh(n) {
        return Ul(Ne(n).toLowerCase());
      }
      function xh(n) {
        return n = Ne(n), n && n.replace(qe, Jx).replace(Rx, "");
      }
      function cC(n, i, a) {
        n = Ne(n), i = Dt(i);
        var d = n.length;
        a = a === r ? d : Tr(fe(a), 0, d);
        var m = a;
        return a -= i.length, a >= 0 && n.slice(a, m) == i;
      }
      function uC(n) {
        return n = Ne(n), n && jo.test(n) ? n.replace(Hr, Qx) : n;
      }
      function fC(n) {
        return n = Ne(n), n && Wo.test(n) ? n.replace(Bi, "\\$&") : n;
      }
      var dC = ni(function(n, i, a) {
        return n + (a ? "-" : "") + i.toLowerCase();
      }), hC = ni(function(n, i, a) {
        return n + (a ? " " : "") + i.toLowerCase();
      }), pC = Sd("toLowerCase");
      function mC(n, i, a) {
        n = Ne(n), i = fe(i);
        var d = i ? qr(n) : 0;
        if (!i || d >= i)
          return n;
        var m = (i - d) / 2;
        return gs(rs(m), a) + n + gs(ns(m), a);
      }
      function gC(n, i, a) {
        n = Ne(n), i = fe(i);
        var d = i ? qr(n) : 0;
        return i && d < i ? n + gs(i - d, a) : n;
      }
      function vC(n, i, a) {
        n = Ne(n), i = fe(i);
        var d = i ? qr(n) : 0;
        return i && d < i ? gs(i - d, a) + n : n;
      }
      function yC(n, i, a) {
        return a || i == null ? i = 0 : i && (i = +i), T0(Ne(n).replace(zr, ""), i || 0);
      }
      function xC(n, i, a) {
        return (a ? bt(n, i, a) : i === r) ? i = 1 : i = fe(i), vl(Ne(n), i);
      }
      function wC() {
        var n = arguments, i = Ne(n[0]);
        return n.length < 3 ? i : i.replace(n[1], n[2]);
      }
      var bC = ni(function(n, i, a) {
        return n + (a ? "_" : "") + i.toLowerCase();
      });
      function SC(n, i, a) {
        return a && typeof a != "number" && bt(n, i, a) && (i = a = r), a = a === r ? Pe : a >>> 0, a ? (n = Ne(n), n && (typeof i == "string" || i != null && !Bl(i)) && (i = Dt(i), !i && Yr(n)) ? Jn(en(n), 0, a) : n.split(i, a)) : [];
      }
      var CC = ni(function(n, i, a) {
        return n + (a ? " " : "") + Ul(i);
      });
      function _C(n, i, a) {
        return n = Ne(n), a = a == null ? 0 : Tr(fe(a), 0, n.length), i = Dt(i), n.slice(a, a + i.length) == i;
      }
      function TC(n, i, a) {
        var d = x.templateSettings;
        a && bt(n, i, a) && (i = r), n = Ne(n), i = Es({}, i, d, Rd);
        var m = Es({}, i.imports, d.imports, Rd), w = it(m), P = el(m, w), O, D, V = 0, F = i.interpolate || at, B = "__p += '", z = nl(
          (i.escape || at).source + "|" + F.source + "|" + (F === Vo ? se : at).source + "|" + (i.evaluate || at).source + "|$",
          "g"
        ), q = "//# sourceURL=" + (Ie.call(i, "sourceURL") ? (i.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++Ix + "]") + `
`;
        n.replace(z, function(ie, ye, _e, Lt, St, jt) {
          return _e || (_e = Lt), B += n.slice(V, jt).replace(Hn, e0), ye && (O = !0, B += `' +
__e(` + ye + `) +
'`), St && (D = !0, B += `';
` + St + `;
__p += '`), _e && (B += `' +
((__t = (` + _e + `)) == null ? '' : __t) +
'`), V = jt + ie.length, ie;
        }), B += `';
`;
        var re = Ie.call(i, "variable") && i.variable;
        if (!re)
          B = `with (obj) {
` + B + `
}
`;
        else if (W.test(re))
          throw new ce(u);
        B = (D ? B.replace(Ma, "") : B).replace(Vi, "$1").replace(Lo, "$1;"), B = "function(" + (re || "obj") + `) {
` + (re ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (O ? ", __e = _.escape" : "") + (D ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + B + `return __p
}`;
        var me = bh(function() {
          return Re(w, q + "return " + B).apply(r, P);
        });
        if (me.source = B, Fl(me))
          throw me;
        return me;
      }
      function PC(n) {
        return Ne(n).toLowerCase();
      }
      function AC(n) {
        return Ne(n).toUpperCase();
      }
      function EC(n, i, a) {
        if (n = Ne(n), n && (a || i === r))
          return Of(n);
        if (!n || !(i = Dt(i)))
          return n;
        var d = en(n), m = en(i), w = Nf(d, m), P = Mf(d, m) + 1;
        return Jn(d, w, P).join("");
      }
      function RC(n, i, a) {
        if (n = Ne(n), n && (a || i === r))
          return n.slice(0, If(n) + 1);
        if (!n || !(i = Dt(i)))
          return n;
        var d = en(n), m = Mf(d, en(i)) + 1;
        return Jn(d, 0, m).join("");
      }
      function OC(n, i, a) {
        if (n = Ne(n), n && (a || i === r))
          return n.replace(zr, "");
        if (!n || !(i = Dt(i)))
          return n;
        var d = en(n), m = Nf(d, en(i));
        return Jn(d, m).join("");
      }
      function NC(n, i) {
        var a = ee, d = he;
        if (Ge(i)) {
          var m = "separator" in i ? i.separator : m;
          a = "length" in i ? fe(i.length) : a, d = "omission" in i ? Dt(i.omission) : d;
        }
        n = Ne(n);
        var w = n.length;
        if (Yr(n)) {
          var P = en(n);
          w = P.length;
        }
        if (a >= w)
          return n;
        var O = a - qr(d);
        if (O < 1)
          return d;
        var D = P ? Jn(P, 0, O).join("") : n.slice(0, O);
        if (m === r)
          return D + d;
        if (P && (O += D.length - O), Bl(m)) {
          if (n.slice(O).search(m)) {
            var V, F = D;
            for (m.global || (m = nl(m.source, Ne(Ee.exec(m)) + "g")), m.lastIndex = 0; V = m.exec(F); )
              var B = V.index;
            D = D.slice(0, B === r ? O : B);
          }
        } else if (n.indexOf(Dt(m), O) != O) {
          var z = D.lastIndexOf(m);
          z > -1 && (D = D.slice(0, z));
        }
        return D + d;
      }
      function MC(n) {
        return n = Ne(n), n && Fi.test(n) ? n.replace(Sn, a0) : n;
      }
      var DC = ni(function(n, i, a) {
        return n + (a ? " " : "") + i.toUpperCase();
      }), Ul = Sd("toUpperCase");
      function wh(n, i, a) {
        return n = Ne(n), i = a ? r : i, i === r ? n0(n) ? u0(n) : Kx(n) : n.match(i) || [];
      }
      var bh = ge(function(n, i) {
        try {
          return Nt(n, r, i);
        } catch (a) {
          return Fl(a) ? a : new ce(a);
        }
      }), IC = An(function(n, i) {
        return Ut(i, function(a) {
          a = hn(a), Tn(n, a, kl(n[a], n));
        }), n;
      });
      function LC(n) {
        var i = n == null ? 0 : n.length, a = Q();
        return n = i ? He(n, function(d) {
          if (typeof d[1] != "function")
            throw new Ht(l);
          return [a(d[0]), d[1]];
        }) : [], ge(function(d) {
          for (var m = -1; ++m < i; ) {
            var w = n[m];
            if (Nt(w[0], this, d))
              return Nt(w[1], this, d);
          }
        });
      }
      function jC(n) {
        return aw(Gt(n, g));
      }
      function Hl(n) {
        return function() {
          return n;
        };
      }
      function kC(n, i) {
        return n == null || n !== n ? i : n;
      }
      var VC = _d(), FC = _d(!0);
      function At(n) {
        return n;
      }
      function zl(n) {
        return ed(typeof n == "function" ? n : Gt(n, g));
      }
      function BC(n) {
        return nd(Gt(n, g));
      }
      function WC(n, i) {
        return rd(n, Gt(i, g));
      }
      var $C = ge(function(n, i) {
        return function(a) {
          return Xi(a, n, i);
        };
      }), UC = ge(function(n, i) {
        return function(a) {
          return Xi(n, a, i);
        };
      });
      function Gl(n, i, a) {
        var d = it(i), m = cs(i, d);
        a == null && !(Ge(i) && (m.length || !d.length)) && (a = i, i = n, n = this, m = cs(i, it(i)));
        var w = !(Ge(a) && "chain" in a) || !!a.chain, P = Rn(n);
        return Ut(m, function(O) {
          var D = i[O];
          n[O] = D, P && (n.prototype[O] = function() {
            var V = this.__chain__;
            if (w || V) {
              var F = n(this.__wrapped__), B = F.__actions__ = _t(this.__actions__);
              return B.push({ func: D, args: arguments, thisArg: n }), F.__chain__ = V, F;
            }
            return D.apply(n, Gn([this.value()], arguments));
          });
        }), n;
      }
      function HC() {
        return lt._ === this && (lt._ = g0), this;
      }
      function Kl() {
      }
      function zC(n) {
        return n = fe(n), ge(function(i) {
          return id(i, n);
        });
      }
      var GC = _l(He), KC = _l(Tf), YC = _l(qa);
      function Sh(n) {
        return Nl(n) ? Xa(hn(n)) : _w(n);
      }
      function qC(n) {
        return function(i) {
          return n == null ? r : Pr(n, i);
        };
      }
      var XC = Pd(), ZC = Pd(!0);
      function Yl() {
        return [];
      }
      function ql() {
        return !1;
      }
      function JC() {
        return {};
      }
      function QC() {
        return "";
      }
      function e_() {
        return !0;
      }
      function t_(n, i) {
        if (n = fe(n), n < 1 || n > K)
          return [];
        var a = Pe, d = mt(n, Pe);
        i = Q(i), n -= Pe;
        for (var m = Qa(d, i); ++a < n; )
          i(a);
        return m;
      }
      function n_(n) {
        return ue(n) ? He(n, hn) : It(n) ? [n] : _t($d(Ne(n)));
      }
      function r_(n) {
        var i = ++p0;
        return Ne(n) + i;
      }
      var i_ = ms(function(n, i) {
        return n + i;
      }, 0), o_ = Tl("ceil"), s_ = ms(function(n, i) {
        return n / i;
      }, 1), a_ = Tl("floor");
      function l_(n) {
        return n && n.length ? ls(n, At, ul) : r;
      }
      function c_(n, i) {
        return n && n.length ? ls(n, Q(i, 2), ul) : r;
      }
      function u_(n) {
        return Ef(n, At);
      }
      function f_(n, i) {
        return Ef(n, Q(i, 2));
      }
      function d_(n) {
        return n && n.length ? ls(n, At, pl) : r;
      }
      function h_(n, i) {
        return n && n.length ? ls(n, Q(i, 2), pl) : r;
      }
      var p_ = ms(function(n, i) {
        return n * i;
      }, 1), m_ = Tl("round"), g_ = ms(function(n, i) {
        return n - i;
      }, 0);
      function v_(n) {
        return n && n.length ? Ja(n, At) : 0;
      }
      function y_(n, i) {
        return n && n.length ? Ja(n, Q(i, 2)) : 0;
      }
      return x.after = B1, x.ary = Qd, x.assign = AS, x.assignIn = hh, x.assignInWith = Es, x.assignWith = ES, x.at = RS, x.before = eh, x.bind = kl, x.bindAll = IC, x.bindKey = th, x.castArray = J1, x.chain = Xd, x.chunk = ab, x.compact = lb, x.concat = cb, x.cond = LC, x.conforms = jC, x.constant = Hl, x.countBy = v1, x.create = OS, x.curry = nh, x.curryRight = rh, x.debounce = ih, x.defaults = NS, x.defaultsDeep = MS, x.defer = W1, x.delay = $1, x.difference = ub, x.differenceBy = fb, x.differenceWith = db, x.drop = hb, x.dropRight = pb, x.dropRightWhile = mb, x.dropWhile = gb, x.fill = vb, x.filter = x1, x.flatMap = S1, x.flatMapDeep = C1, x.flatMapDepth = _1, x.flatten = Gd, x.flattenDeep = yb, x.flattenDepth = xb, x.flip = U1, x.flow = VC, x.flowRight = FC, x.fromPairs = wb, x.functions = FS, x.functionsIn = BS, x.groupBy = T1, x.initial = Sb, x.intersection = Cb, x.intersectionBy = _b, x.intersectionWith = Tb, x.invert = $S, x.invertBy = US, x.invokeMap = A1, x.iteratee = zl, x.keyBy = E1, x.keys = it, x.keysIn = Pt, x.map = Ss, x.mapKeys = zS, x.mapValues = GS, x.matches = BC, x.matchesProperty = WC, x.memoize = _s, x.merge = KS, x.mergeWith = ph, x.method = $C, x.methodOf = UC, x.mixin = Gl, x.negate = Ts, x.nthArg = zC, x.omit = YS, x.omitBy = qS, x.once = H1, x.orderBy = R1, x.over = GC, x.overArgs = z1, x.overEvery = KC, x.overSome = YC, x.partial = Vl, x.partialRight = oh, x.partition = O1, x.pick = XS, x.pickBy = mh, x.property = Sh, x.propertyOf = qC, x.pull = Rb, x.pullAll = Yd, x.pullAllBy = Ob, x.pullAllWith = Nb, x.pullAt = Mb, x.range = XC, x.rangeRight = ZC, x.rearg = G1, x.reject = D1, x.remove = Db, x.rest = K1, x.reverse = Ll, x.sampleSize = L1, x.set = JS, x.setWith = QS, x.shuffle = j1, x.slice = Ib, x.sortBy = F1, x.sortedUniq = Wb, x.sortedUniqBy = $b, x.split = SC, x.spread = Y1, x.tail = Ub, x.take = Hb, x.takeRight = zb, x.takeRightWhile = Gb, x.takeWhile = Kb, x.tap = l1, x.throttle = q1, x.thru = bs, x.toArray = uh, x.toPairs = gh, x.toPairsIn = vh, x.toPath = n_, x.toPlainObject = dh, x.transform = eC, x.unary = X1, x.union = Yb, x.unionBy = qb, x.unionWith = Xb, x.uniq = Zb, x.uniqBy = Jb, x.uniqWith = Qb, x.unset = tC, x.unzip = jl, x.unzipWith = qd, x.update = nC, x.updateWith = rC, x.values = oi, x.valuesIn = iC, x.without = e1, x.words = wh, x.wrap = Z1, x.xor = t1, x.xorBy = n1, x.xorWith = r1, x.zip = i1, x.zipObject = o1, x.zipObjectDeep = s1, x.zipWith = a1, x.entries = gh, x.entriesIn = vh, x.extend = hh, x.extendWith = Es, Gl(x, x), x.add = i_, x.attempt = bh, x.camelCase = lC, x.capitalize = yh, x.ceil = o_, x.clamp = oC, x.clone = Q1, x.cloneDeep = tS, x.cloneDeepWith = nS, x.cloneWith = eS, x.conformsTo = rS, x.deburr = xh, x.defaultTo = kC, x.divide = s_, x.endsWith = cC, x.eq = nn, x.escape = uC, x.escapeRegExp = fC, x.every = y1, x.find = w1, x.findIndex = Hd, x.findKey = DS, x.findLast = b1, x.findLastIndex = zd, x.findLastKey = IS, x.floor = a_, x.forEach = Zd, x.forEachRight = Jd, x.forIn = LS, x.forInRight = jS, x.forOwn = kS, x.forOwnRight = VS, x.get = Wl, x.gt = iS, x.gte = oS, x.has = WS, x.hasIn = $l, x.head = Kd, x.identity = At, x.includes = P1, x.indexOf = bb, x.inRange = sC, x.invoke = HS, x.isArguments = Rr, x.isArray = ue, x.isArrayBuffer = sS, x.isArrayLike = Tt, x.isArrayLikeObject = Ze, x.isBoolean = aS, x.isBuffer = Qn, x.isDate = lS, x.isElement = cS, x.isEmpty = uS, x.isEqual = fS, x.isEqualWith = dS, x.isError = Fl, x.isFinite = hS, x.isFunction = Rn, x.isInteger = sh, x.isLength = Ps, x.isMap = ah, x.isMatch = pS, x.isMatchWith = mS, x.isNaN = gS, x.isNative = vS, x.isNil = xS, x.isNull = yS, x.isNumber = lh, x.isObject = Ge, x.isObjectLike = Xe, x.isPlainObject = no, x.isRegExp = Bl, x.isSafeInteger = wS, x.isSet = ch, x.isString = As, x.isSymbol = It, x.isTypedArray = ii, x.isUndefined = bS, x.isWeakMap = SS, x.isWeakSet = CS, x.join = Pb, x.kebabCase = dC, x.last = Yt, x.lastIndexOf = Ab, x.lowerCase = hC, x.lowerFirst = pC, x.lt = _S, x.lte = TS, x.max = l_, x.maxBy = c_, x.mean = u_, x.meanBy = f_, x.min = d_, x.minBy = h_, x.stubArray = Yl, x.stubFalse = ql, x.stubObject = JC, x.stubString = QC, x.stubTrue = e_, x.multiply = p_, x.nth = Eb, x.noConflict = HC, x.noop = Kl, x.now = Cs, x.pad = mC, x.padEnd = gC, x.padStart = vC, x.parseInt = yC, x.random = aC, x.reduce = N1, x.reduceRight = M1, x.repeat = xC, x.replace = wC, x.result = ZS, x.round = m_, x.runInContext = M, x.sample = I1, x.size = k1, x.snakeCase = bC, x.some = V1, x.sortedIndex = Lb, x.sortedIndexBy = jb, x.sortedIndexOf = kb, x.sortedLastIndex = Vb, x.sortedLastIndexBy = Fb, x.sortedLastIndexOf = Bb, x.startCase = CC, x.startsWith = _C, x.subtract = g_, x.sum = v_, x.sumBy = y_, x.template = TC, x.times = t_, x.toFinite = On, x.toInteger = fe, x.toLength = fh, x.toLower = PC, x.toNumber = qt, x.toSafeInteger = PS, x.toString = Ne, x.toUpper = AC, x.trim = EC, x.trimEnd = RC, x.trimStart = OC, x.truncate = NC, x.unescape = MC, x.uniqueId = r_, x.upperCase = DC, x.upperFirst = Ul, x.each = Zd, x.eachRight = Jd, x.first = Kd, Gl(x, function() {
        var n = {};
        return fn(x, function(i, a) {
          Ie.call(x.prototype, a) || (n[a] = i);
        }), n;
      }(), { chain: !1 }), x.VERSION = o, Ut(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(n) {
        x[n].placeholder = x;
      }), Ut(["drop", "take"], function(n, i) {
        Se.prototype[n] = function(a) {
          a = a === r ? 1 : tt(fe(a), 0);
          var d = this.__filtered__ && !i ? new Se(this) : this.clone();
          return d.__filtered__ ? d.__takeCount__ = mt(a, d.__takeCount__) : d.__views__.push({
            size: mt(a, Pe),
            type: n + (d.__dir__ < 0 ? "Right" : "")
          }), d;
        }, Se.prototype[n + "Right"] = function(a) {
          return this.reverse()[n](a).reverse();
        };
      }), Ut(["filter", "map", "takeWhile"], function(n, i) {
        var a = i + 1, d = a == te || a == le;
        Se.prototype[n] = function(m) {
          var w = this.clone();
          return w.__iteratees__.push({
            iteratee: Q(m, 3),
            type: a
          }), w.__filtered__ = w.__filtered__ || d, w;
        };
      }), Ut(["head", "last"], function(n, i) {
        var a = "take" + (i ? "Right" : "");
        Se.prototype[n] = function() {
          return this[a](1).value()[0];
        };
      }), Ut(["initial", "tail"], function(n, i) {
        var a = "drop" + (i ? "" : "Right");
        Se.prototype[n] = function() {
          return this.__filtered__ ? new Se(this) : this[a](1);
        };
      }), Se.prototype.compact = function() {
        return this.filter(At);
      }, Se.prototype.find = function(n) {
        return this.filter(n).head();
      }, Se.prototype.findLast = function(n) {
        return this.reverse().find(n);
      }, Se.prototype.invokeMap = ge(function(n, i) {
        return typeof n == "function" ? new Se(this) : this.map(function(a) {
          return Xi(a, n, i);
        });
      }), Se.prototype.reject = function(n) {
        return this.filter(Ts(Q(n)));
      }, Se.prototype.slice = function(n, i) {
        n = fe(n);
        var a = this;
        return a.__filtered__ && (n > 0 || i < 0) ? new Se(a) : (n < 0 ? a = a.takeRight(-n) : n && (a = a.drop(n)), i !== r && (i = fe(i), a = i < 0 ? a.dropRight(-i) : a.take(i - n)), a);
      }, Se.prototype.takeRightWhile = function(n) {
        return this.reverse().takeWhile(n).reverse();
      }, Se.prototype.toArray = function() {
        return this.take(Pe);
      }, fn(Se.prototype, function(n, i) {
        var a = /^(?:filter|find|map|reject)|While$/.test(i), d = /^(?:head|last)$/.test(i), m = x[d ? "take" + (i == "last" ? "Right" : "") : i], w = d || /^find/.test(i);
        m && (x.prototype[i] = function() {
          var P = this.__wrapped__, O = d ? [1] : arguments, D = P instanceof Se, V = O[0], F = D || ue(P), B = function(ye) {
            var _e = m.apply(x, Gn([ye], O));
            return d && z ? _e[0] : _e;
          };
          F && a && typeof V == "function" && V.length != 1 && (D = F = !1);
          var z = this.__chain__, q = !!this.__actions__.length, re = w && !z, me = D && !q;
          if (!w && F) {
            P = me ? P : new Se(this);
            var ie = n.apply(P, O);
            return ie.__actions__.push({ func: bs, args: [B], thisArg: r }), new zt(ie, z);
          }
          return re && me ? n.apply(this, O) : (ie = this.thru(B), re ? d ? ie.value()[0] : ie.value() : ie);
        });
      }), Ut(["pop", "push", "shift", "sort", "splice", "unshift"], function(n) {
        var i = Ko[n], a = /^(?:push|sort|unshift)$/.test(n) ? "tap" : "thru", d = /^(?:pop|shift)$/.test(n);
        x.prototype[n] = function() {
          var m = arguments;
          if (d && !this.__chain__) {
            var w = this.value();
            return i.apply(ue(w) ? w : [], m);
          }
          return this[a](function(P) {
            return i.apply(ue(P) ? P : [], m);
          });
        };
      }), fn(Se.prototype, function(n, i) {
        var a = x[i];
        if (a) {
          var d = a.name + "";
          Ie.call(Qr, d) || (Qr[d] = []), Qr[d].push({ name: i, func: a });
        }
      }), Qr[ps(r, A).name] = [{
        name: "wrapper",
        func: r
      }], Se.prototype.clone = M0, Se.prototype.reverse = D0, Se.prototype.value = I0, x.prototype.at = c1, x.prototype.chain = u1, x.prototype.commit = f1, x.prototype.next = d1, x.prototype.plant = p1, x.prototype.reverse = m1, x.prototype.toJSON = x.prototype.valueOf = x.prototype.value = g1, x.prototype.first = x.prototype.head, Ui && (x.prototype[Ui] = h1), x;
    }, Xr = f0();
    br ? ((br.exports = Xr)._ = Xr, za._ = Xr) : lt._ = Xr;
  }).call(ro);
})(Gs, Gs.exports);
var P_ = Gs.exports;
const A_ = /* @__PURE__ */ C_(P_);
function E_(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function wm(...e) {
  return (t) => e.forEach((r) => E_(r, t));
}
function Ye(...e) {
  return b.useCallback(wm(...e), e);
}
var jr = b.forwardRef((e, t) => {
  const { children: r, ...o } = e, s = b.Children.toArray(r), c = s.find(R_);
  if (c) {
    const l = c.props.children, u = s.map((f) => f === c ? b.Children.count(l) > 1 ? b.Children.only(null) : b.isValidElement(l) ? l.props.children : null : f);
    return /* @__PURE__ */ v.jsx(bc, { ...o, ref: t, children: b.isValidElement(l) ? b.cloneElement(l, void 0, u) : null });
  }
  return /* @__PURE__ */ v.jsx(bc, { ...o, ref: t, children: r });
});
jr.displayName = "Slot";
var bc = b.forwardRef((e, t) => {
  const { children: r, ...o } = e;
  if (b.isValidElement(r)) {
    const s = N_(r);
    return b.cloneElement(r, {
      ...O_(o, r.props),
      // @ts-ignore
      ref: t ? wm(t, s) : s
    });
  }
  return b.Children.count(r) > 1 ? b.Children.only(null) : null;
});
bc.displayName = "SlotClone";
var bm = ({ children: e }) => /* @__PURE__ */ v.jsx(v.Fragment, { children: e });
function R_(e) {
  return b.isValidElement(e) && e.type === bm;
}
function O_(e, t) {
  const r = { ...t };
  for (const o in t) {
    const s = e[o], c = t[o];
    /^on[A-Z]/.test(o) ? s && c ? r[o] = (...u) => {
      c(...u), s(...u);
    } : s && (r[o] = s) : o === "style" ? r[o] = { ...s, ...c } : o === "className" && (r[o] = [s, c].filter(Boolean).join(" "));
  }
  return { ...e, ...r };
}
function N_(e) {
  var o, s;
  let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = (s = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : s.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
function Sm(e) {
  var t, r, o = "";
  if (typeof e == "string" || typeof e == "number")
    o += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (r = Sm(e[t])) && (o && (o += " "), o += r);
    else
      for (t in e)
        e[t] && (o && (o += " "), o += t);
  return o;
}
function M_() {
  for (var e, t, r = 0, o = ""; r < arguments.length; )
    (e = arguments[r++]) && (t = Sm(e)) && (o && (o += " "), o += t);
  return o;
}
const Ph = (e) => typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e, Ah = M_, Cm = (e, t) => (r) => {
  var o;
  if ((t == null ? void 0 : t.variants) == null)
    return Ah(e, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
  const { variants: s, defaultVariants: c } = t, l = Object.keys(s).map((h) => {
    const p = r == null ? void 0 : r[h], g = c == null ? void 0 : c[h];
    if (p === null)
      return null;
    const y = Ph(p) || Ph(g);
    return s[h][y];
  }), u = r && Object.entries(r).reduce((h, p) => {
    let [g, y] = p;
    return y === void 0 || (h[g] = y), h;
  }, {}), f = t == null || (o = t.compoundVariants) === null || o === void 0 ? void 0 : o.reduce((h, p) => {
    let { class: g, className: y, ...C } = p;
    return Object.entries(C).every((T) => {
      let [S, _] = T;
      return Array.isArray(_) ? _.includes({
        ...c,
        ...u
      }[S]) : {
        ...c,
        ...u
      }[S] === _;
    }) ? [
      ...h,
      g,
      y
    ] : h;
  }, []);
  return Ah(e, l, f, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
};
function _m(e) {
  var t, r, o = "";
  if (typeof e == "string" || typeof e == "number")
    o += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var s = e.length;
      for (t = 0; t < s; t++)
        e[t] && (r = _m(e[t])) && (o && (o += " "), o += r);
    } else
      for (r in e)
        e[r] && (o && (o += " "), o += r);
  return o;
}
function D_() {
  for (var e, t, r = 0, o = "", s = arguments.length; r < s; r++)
    (e = arguments[r]) && (t = _m(e)) && (o && (o += " "), o += t);
  return o;
}
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const I_ = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Tm = (...e) => e.filter((t, r, o) => !!t && t.trim() !== "" && o.indexOf(t) === r).join(" ").trim();
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var L_ = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const j_ = Zc(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: c,
    iconNode: l,
    ...u
  }, f) => zs(
    "svg",
    {
      ref: f,
      ...L_,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: o ? Number(r) * 24 / Number(t) : r,
      className: Tm("lucide", s),
      ...u
    },
    [
      ...l.map(([h, p]) => zs(h, p)),
      ...Array.isArray(c) ? c : [c]
    ]
  )
);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ot = (e, t) => {
  const r = Zc(
    ({ className: o, ...s }, c) => zs(j_, {
      ref: c,
      iconNode: t,
      className: Tm(`lucide-${I_(e)}`, o),
      ...s
    })
  );
  return r.displayName = `${e}`, r;
};
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const k_ = ot("Award", [
  [
    "path",
    {
      d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
      key: "1yiouv"
    }
  ],
  ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }]
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pm = ot("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ua = ot("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const V_ = ot("ChevronUp", [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const F_ = ot("CircleCheckBig", [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yo = ot("CircleHelp", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const B_ = ot("Crosshair", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "22", x2: "18", y1: "12", y2: "12", key: "l9bcsi" }],
  ["line", { x1: "6", x2: "2", y1: "12", y2: "12", key: "13hhkx" }],
  ["line", { x1: "12", x2: "12", y1: "6", y2: "2", key: "10w3f3" }],
  ["line", { x1: "12", x2: "12", y1: "22", y2: "18", key: "15g9kq" }]
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Am = ot("ExternalLink", [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Eh = ot("FileText", [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const W_ = ot("Info", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $_ = ot("Lightbulb", [
  [
    "path",
    {
      d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",
      key: "1gvzjb"
    }
  ],
  ["path", { d: "M9 18h6", key: "x1upvd" }],
  ["path", { d: "M10 22h4", key: "ceow96" }]
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rh = ot("Settings", [
  [
    "path",
    {
      d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
      key: "1qme2f"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const U_ = ot("Target", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sc = ot("TriangleAlert", [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const H_ = ot("User", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const z_ = ot("Users", [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }]
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Em = ot("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const G_ = ot("Zap", [
  [
    "path",
    {
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
      key: "1xq2db"
    }
  ]
]), Jc = "-", K_ = (e) => {
  const t = q_(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: o
  } = e;
  return {
    getClassGroupId: (l) => {
      const u = l.split(Jc);
      return u[0] === "" && u.length !== 1 && u.shift(), Rm(u, t) || Y_(l);
    },
    getConflictingClassGroupIds: (l, u) => {
      const f = r[l] || [];
      return u && o[l] ? [...f, ...o[l]] : f;
    }
  };
}, Rm = (e, t) => {
  var l;
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], o = t.nextPart.get(r), s = o ? Rm(e.slice(1), o) : void 0;
  if (s)
    return s;
  if (t.validators.length === 0)
    return;
  const c = e.join(Jc);
  return (l = t.validators.find(({
    validator: u
  }) => u(c))) == null ? void 0 : l.classGroupId;
}, Oh = /^\[(.+)\]$/, Y_ = (e) => {
  if (Oh.test(e)) {
    const t = Oh.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, q_ = (e) => {
  const {
    theme: t,
    prefix: r
  } = e, o = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Z_(Object.entries(e.classGroups), r).forEach(([c, l]) => {
    Cc(l, o, c, t);
  }), o;
}, Cc = (e, t, r, o) => {
  e.forEach((s) => {
    if (typeof s == "string") {
      const c = s === "" ? t : Nh(t, s);
      c.classGroupId = r;
      return;
    }
    if (typeof s == "function") {
      if (X_(s)) {
        Cc(s(o), t, r, o);
        return;
      }
      t.validators.push({
        validator: s,
        classGroupId: r
      });
      return;
    }
    Object.entries(s).forEach(([c, l]) => {
      Cc(l, Nh(t, c), r, o);
    });
  });
}, Nh = (e, t) => {
  let r = e;
  return t.split(Jc).forEach((o) => {
    r.nextPart.has(o) || r.nextPart.set(o, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(o);
  }), r;
}, X_ = (e) => e.isThemeGetter, Z_ = (e, t) => t ? e.map(([r, o]) => {
  const s = o.map((c) => typeof c == "string" ? t + c : typeof c == "object" ? Object.fromEntries(Object.entries(c).map(([l, u]) => [t + l, u])) : c);
  return [r, s];
}) : e, J_ = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, r = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
  const s = (c, l) => {
    r.set(c, l), t++, t > e && (t = 0, o = r, r = /* @__PURE__ */ new Map());
  };
  return {
    get(c) {
      let l = r.get(c);
      if (l !== void 0)
        return l;
      if ((l = o.get(c)) !== void 0)
        return s(c, l), l;
    },
    set(c, l) {
      r.has(c) ? r.set(c, l) : s(c, l);
    }
  };
}, Om = "!", Q_ = (e) => {
  const {
    separator: t,
    experimentalParseClassName: r
  } = e, o = t.length === 1, s = t[0], c = t.length, l = (u) => {
    const f = [];
    let h = 0, p = 0, g;
    for (let _ = 0; _ < u.length; _++) {
      let A = u[_];
      if (h === 0) {
        if (A === s && (o || u.slice(_, _ + c) === t)) {
          f.push(u.slice(p, _)), p = _ + c;
          continue;
        }
        if (A === "/") {
          g = _;
          continue;
        }
      }
      A === "[" ? h++ : A === "]" && h--;
    }
    const y = f.length === 0 ? u : u.substring(p), C = y.startsWith(Om), T = C ? y.substring(1) : y, S = g && g > p ? g - p : void 0;
    return {
      modifiers: f,
      hasImportantModifier: C,
      baseClassName: T,
      maybePostfixModifierPosition: S
    };
  };
  return r ? (u) => r({
    className: u,
    parseClassName: l
  }) : l;
}, eT = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let r = [];
  return e.forEach((o) => {
    o[0] === "[" ? (t.push(...r.sort(), o), r = []) : r.push(o);
  }), t.push(...r.sort()), t;
}, tT = (e) => ({
  cache: J_(e.cacheSize),
  parseClassName: Q_(e),
  ...K_(e)
}), nT = /\s+/, rT = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: o,
    getConflictingClassGroupIds: s
  } = t, c = [], l = e.trim().split(nT);
  let u = "";
  for (let f = l.length - 1; f >= 0; f -= 1) {
    const h = l[f], {
      modifiers: p,
      hasImportantModifier: g,
      baseClassName: y,
      maybePostfixModifierPosition: C
    } = r(h);
    let T = !!C, S = o(T ? y.substring(0, C) : y);
    if (!S) {
      if (!T) {
        u = h + (u.length > 0 ? " " + u : u);
        continue;
      }
      if (S = o(y), !S) {
        u = h + (u.length > 0 ? " " + u : u);
        continue;
      }
      T = !1;
    }
    const _ = eT(p).join(":"), A = g ? _ + Om : _, R = A + S;
    if (c.includes(R))
      continue;
    c.push(R);
    const N = s(S, T);
    for (let L = 0; L < N.length; ++L) {
      const j = N[L];
      c.push(A + j);
    }
    u = h + (u.length > 0 ? " " + u : u);
  }
  return u;
};
function iT() {
  let e = 0, t, r, o = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = Nm(t)) && (o && (o += " "), o += r);
  return o;
}
const Nm = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let o = 0; o < e.length; o++)
    e[o] && (t = Nm(e[o])) && (r && (r += " "), r += t);
  return r;
};
function oT(e, ...t) {
  let r, o, s, c = l;
  function l(f) {
    const h = t.reduce((p, g) => g(p), e());
    return r = tT(h), o = r.cache.get, s = r.cache.set, c = u, u(f);
  }
  function u(f) {
    const h = o(f);
    if (h)
      return h;
    const p = rT(f, r);
    return s(f, p), p;
  }
  return function() {
    return c(iT.apply(null, arguments));
  };
}
const We = (e) => {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}, Mm = /^\[(?:([a-z-]+):)?(.+)\]$/i, sT = /^\d+\/\d+$/, aT = /* @__PURE__ */ new Set(["px", "full", "screen"]), lT = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, cT = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, uT = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, fT = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, dT = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Mn = (e) => pi(e) || aT.has(e) || sT.test(e), er = (e) => Ci(e, "length", wT), pi = (e) => !!e && !Number.isNaN(Number(e)), Xl = (e) => Ci(e, "number", pi), so = (e) => !!e && Number.isInteger(Number(e)), hT = (e) => e.endsWith("%") && pi(e.slice(0, -1)), de = (e) => Mm.test(e), tr = (e) => lT.test(e), pT = /* @__PURE__ */ new Set(["length", "size", "percentage"]), mT = (e) => Ci(e, pT, Dm), gT = (e) => Ci(e, "position", Dm), vT = /* @__PURE__ */ new Set(["image", "url"]), yT = (e) => Ci(e, vT, ST), xT = (e) => Ci(e, "", bT), ao = () => !0, Ci = (e, t, r) => {
  const o = Mm.exec(e);
  return o ? o[1] ? typeof t == "string" ? o[1] === t : t.has(o[1]) : r(o[2]) : !1;
}, wT = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  cT.test(e) && !uT.test(e)
), Dm = () => !1, bT = (e) => fT.test(e), ST = (e) => dT.test(e), CT = () => {
  const e = We("colors"), t = We("spacing"), r = We("blur"), o = We("brightness"), s = We("borderColor"), c = We("borderRadius"), l = We("borderSpacing"), u = We("borderWidth"), f = We("contrast"), h = We("grayscale"), p = We("hueRotate"), g = We("invert"), y = We("gap"), C = We("gradientColorStops"), T = We("gradientColorStopPositions"), S = We("inset"), _ = We("margin"), A = We("opacity"), R = We("padding"), N = We("saturate"), L = We("scale"), j = We("sepia"), H = We("skew"), $ = We("space"), U = We("translate"), J = () => ["auto", "contain", "none"], ee = () => ["auto", "hidden", "clip", "visible", "scroll"], he = () => ["auto", de, t], Z = () => [de, t], ae = () => ["", Mn, er], te = () => ["auto", pi, de], Te = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], le = () => ["solid", "dashed", "dotted", "double", "none"], X = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], K = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], pe = () => ["", "0", de], Me = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], Pe = () => [pi, de];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [ao],
      spacing: [Mn, er],
      blur: ["none", "", tr, de],
      brightness: Pe(),
      borderColor: [e],
      borderRadius: ["none", "", "full", tr, de],
      borderSpacing: Z(),
      borderWidth: ae(),
      contrast: Pe(),
      grayscale: pe(),
      hueRotate: Pe(),
      invert: pe(),
      gap: Z(),
      gradientColorStops: [e],
      gradientColorStopPositions: [hT, er],
      inset: he(),
      margin: he(),
      opacity: Pe(),
      padding: Z(),
      saturate: Pe(),
      scale: Pe(),
      sepia: pe(),
      skew: Pe(),
      space: Z(),
      translate: Z()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", de]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [tr]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": Me()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": Me()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...Te(), de]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: ee()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": ee()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": ee()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: J()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": J()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": J()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [S]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [S]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [S]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [S]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [S]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [S]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [S]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [S]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [S]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", so, de]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: he()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", de]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: pe()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: pe()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", so, de]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [ao]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", so, de]
        }, de]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": te()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": te()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [ao]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [so, de]
        }, de]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": te()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": te()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", de]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", de]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [y]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [y]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [y]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...K()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...K(), "baseline"]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [...K(), "baseline"]
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [R]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [R]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [R]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [R]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [R]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [R]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [R]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [R]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [R]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [_]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [_]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [_]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [_]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [_]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [_]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [_]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [_]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [_]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [$]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [$]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", de, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [de, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [de, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [tr]
        }, tr]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [de, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [de, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [de, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [de, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", tr, er]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Xl]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [ao]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", de]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", pi, Xl]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Mn, de]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", de]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", de]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [e]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [A]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [e]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [A]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...le(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Mn, er]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Mn, de]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [e]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: Z()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", de]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", de]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [A]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...Te(), gT]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", mT]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, yT]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [e]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [T]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [T]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [T]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [C]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [C]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [C]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [c]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [c]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [c]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [c]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [c]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [c]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [c]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [c]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [c]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [c]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [c]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [c]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [c]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [c]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [c]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [u]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [u]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [u]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [u]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [u]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [u]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [u]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [u]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [u]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [A]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...le(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [u]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [u]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [A]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: le()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [s]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [s]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [s]
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": [s]
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": [s]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [s]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [s]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [s]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [s]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [s]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...le()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Mn, de]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Mn, er]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [e]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: ae()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [e]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [A]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [Mn, er]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [e]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", tr, xT]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [ao]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [A]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...X(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": X()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [r]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [o]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [f]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", tr, de]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [h]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [p]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [g]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [N]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [j]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [r]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [o]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [f]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [h]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [p]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [g]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [A]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [N]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [j]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [l]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [l]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [l]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", de]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: Pe()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", de]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: Pe()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", de]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [L]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [L]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [L]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [so, de]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [U]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [U]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [H]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [H]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", de]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", e]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", de]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [e]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": Z()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": Z()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": Z()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": Z()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": Z()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": Z()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": Z()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": Z()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": Z()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": Z()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": Z()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": Z()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": Z()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": Z()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": Z()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": Z()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": Z()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": Z()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", de]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [e, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [Mn, er, Xl]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [e, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}, _T = /* @__PURE__ */ oT(CT);
function $e(...e) {
  return _T(D_(e));
}
function TT(e) {
  switch (e) {
    case "en":
      return "English";
    case "es":
      return "Spanish";
    case "fr":
      return "French";
    case "de":
      return "German";
    default:
      return "Unknown";
  }
}
function PT(e) {
  switch (e) {
    case "metrics":
      return U_;
    case "economic_buyer":
      return H_;
    case "decision_criteria":
      return Eh;
    case "decision_process":
      return z_;
    case "paper_process":
      return Eh;
    case "identification_pain":
      return G_;
    case "champion":
      return k_;
    case "competition":
      return B_;
    default:
      return null;
  }
}
const AT = Cm(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), pn = b.forwardRef(
  ({ className: e, variant: t, size: r, asChild: o = !1, ...s }, c) => {
    const l = o ? jr : "button";
    return /* @__PURE__ */ v.jsx(
      l,
      {
        className: $e(AT({ variant: t, size: r, className: e })),
        ref: c,
        ...s
      }
    );
  }
);
pn.displayName = "Button";
const ET = "_counter_1wts1_1", RT = "_header_1wts1_10", OT = "_button_1wts1_16", Zl = {
  counter: ET,
  header: RT,
  button: OT
}, NT = (e) => {
  const [t, r] = vo(e);
  return {
    count: t,
    incrementCount: () => r(t + 1)
  };
}, { throttle: MT } = A_, iI = ({ initialValue: e = 0 }) => {
  const { count: t, incrementCount: r } = NT(e);
  return To(() => {
    MT(() => {
      console.log("throttle");
    }, 10)();
  }, []), /* @__PURE__ */ v.jsxs("div", { className: Zl.counter, children: [
    /* @__PURE__ */ v.jsx("h2", { className: Zl.header, children: "Counter" }),
    /* @__PURE__ */ v.jsx("button", { className: Zl.button, type: "button", onClick: r, children: "Increment by one" }),
    /* @__PURE__ */ v.jsx(pn, { variant: "outline", children: "Shadcn button" }),
    /* @__PURE__ */ v.jsxs("div", { className: "bg-red-500", children: [
      "Total value: ",
      /* @__PURE__ */ v.jsx("strong", { children: t })
    ] })
  ] });
};
function Mh(e, [t, r]) {
  return Math.min(r, Math.max(t, e));
}
function Oe(e, t, { checkForDefaultPrevented: r = !0 } = {}) {
  return function(s) {
    if (e == null || e(s), r === !1 || !s.defaultPrevented)
      return t == null ? void 0 : t(s);
  };
}
function DT(e, t = []) {
  let r = [];
  function o(c, l) {
    const u = b.createContext(l), f = r.length;
    r = [...r, l];
    function h(g) {
      const { scope: y, children: C, ...T } = g, S = (y == null ? void 0 : y[e][f]) || u, _ = b.useMemo(() => T, Object.values(T));
      return /* @__PURE__ */ v.jsx(S.Provider, { value: _, children: C });
    }
    function p(g, y) {
      const C = (y == null ? void 0 : y[e][f]) || u, T = b.useContext(C);
      if (T)
        return T;
      if (l !== void 0)
        return l;
      throw new Error(`\`${g}\` must be used within \`${c}\``);
    }
    return h.displayName = c + "Provider", [h, p];
  }
  const s = () => {
    const c = r.map((l) => b.createContext(l));
    return function(u) {
      const f = (u == null ? void 0 : u[e]) || c;
      return b.useMemo(
        () => ({ [`__scope${e}`]: { ...u, [e]: f } }),
        [u, f]
      );
    };
  };
  return s.scopeName = e, [o, IT(s, ...t)];
}
function IT(...e) {
  const t = e[0];
  if (e.length === 1)
    return t;
  const r = () => {
    const o = e.map((s) => ({
      useScope: s(),
      scopeName: s.scopeName
    }));
    return function(c) {
      const l = o.reduce((u, { useScope: f, scopeName: h }) => {
        const g = f(c)[`__scope${h}`];
        return { ...u, ...g };
      }, {});
      return b.useMemo(() => ({ [`__scope${t.scopeName}`]: l }), [l]);
    };
  };
  return r.scopeName = t.scopeName, r;
}
function LT(e) {
  const t = e + "CollectionProvider", [r, o] = DT(t), [s, c] = r(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), l = (C) => {
    const { scope: T, children: S } = C, _ = Dn.useRef(null), A = Dn.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ v.jsx(s, { scope: T, itemMap: A, collectionRef: _, children: S });
  };
  l.displayName = t;
  const u = e + "CollectionSlot", f = Dn.forwardRef(
    (C, T) => {
      const { scope: S, children: _ } = C, A = c(u, S), R = Ye(T, A.collectionRef);
      return /* @__PURE__ */ v.jsx(jr, { ref: R, children: _ });
    }
  );
  f.displayName = u;
  const h = e + "CollectionItemSlot", p = "data-radix-collection-item", g = Dn.forwardRef(
    (C, T) => {
      const { scope: S, children: _, ...A } = C, R = Dn.useRef(null), N = Ye(T, R), L = c(h, S);
      return Dn.useEffect(() => (L.itemMap.set(R, { ref: R, ...A }), () => void L.itemMap.delete(R))), /* @__PURE__ */ v.jsx(jr, { [p]: "", ref: N, children: _ });
    }
  );
  g.displayName = h;
  function y(C) {
    const T = c(e + "CollectionConsumer", C);
    return Dn.useCallback(() => {
      const _ = T.collectionRef.current;
      if (!_)
        return [];
      const A = Array.from(_.querySelectorAll(`[${p}]`));
      return Array.from(T.itemMap.values()).sort(
        (L, j) => A.indexOf(L.ref.current) - A.indexOf(j.ref.current)
      );
    }, [T.collectionRef, T.itemMap]);
  }
  return [
    { Provider: l, Slot: f, ItemSlot: g },
    y,
    o
  ];
}
function jT(e, t) {
  const r = b.createContext(t), o = (c) => {
    const { children: l, ...u } = c, f = b.useMemo(() => u, Object.values(u));
    return /* @__PURE__ */ v.jsx(r.Provider, { value: f, children: l });
  };
  o.displayName = e + "Provider";
  function s(c) {
    const l = b.useContext(r);
    if (l)
      return l;
    if (t !== void 0)
      return t;
    throw new Error(`\`${c}\` must be used within \`${e}\``);
  }
  return [o, s];
}
function Qc(e, t = []) {
  let r = [];
  function o(c, l) {
    const u = b.createContext(l), f = r.length;
    r = [...r, l];
    const h = (g) => {
      var A;
      const { scope: y, children: C, ...T } = g, S = ((A = y == null ? void 0 : y[e]) == null ? void 0 : A[f]) || u, _ = b.useMemo(() => T, Object.values(T));
      return /* @__PURE__ */ v.jsx(S.Provider, { value: _, children: C });
    };
    h.displayName = c + "Provider";
    function p(g, y) {
      var S;
      const C = ((S = y == null ? void 0 : y[e]) == null ? void 0 : S[f]) || u, T = b.useContext(C);
      if (T)
        return T;
      if (l !== void 0)
        return l;
      throw new Error(`\`${g}\` must be used within \`${c}\``);
    }
    return [h, p];
  }
  const s = () => {
    const c = r.map((l) => b.createContext(l));
    return function(u) {
      const f = (u == null ? void 0 : u[e]) || c;
      return b.useMemo(
        () => ({ [`__scope${e}`]: { ...u, [e]: f } }),
        [u, f]
      );
    };
  };
  return s.scopeName = e, [o, kT(s, ...t)];
}
function kT(...e) {
  const t = e[0];
  if (e.length === 1)
    return t;
  const r = () => {
    const o = e.map((s) => ({
      useScope: s(),
      scopeName: s.scopeName
    }));
    return function(c) {
      const l = o.reduce((u, { useScope: f, scopeName: h }) => {
        const g = f(c)[`__scope${h}`];
        return { ...u, ...g };
      }, {});
      return b.useMemo(() => ({ [`__scope${t.scopeName}`]: l }), [l]);
    };
  };
  return r.scopeName = t.scopeName, r;
}
var VT = b.createContext(void 0);
function FT(e) {
  const t = b.useContext(VT);
  return e || t || "ltr";
}
var BT = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
], Le = BT.reduce((e, t) => {
  const r = b.forwardRef((o, s) => {
    const { asChild: c, ...l } = o, u = c ? jr : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ v.jsx(u, { ...l, ref: s });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function WT(e, t) {
  e && ca.flushSync(() => e.dispatchEvent(t));
}
function Fn(e) {
  const t = b.useRef(e);
  return b.useEffect(() => {
    t.current = e;
  }), b.useMemo(() => (...r) => {
    var o;
    return (o = t.current) == null ? void 0 : o.call(t, ...r);
  }, []);
}
function $T(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = Fn(e);
  b.useEffect(() => {
    const o = (s) => {
      s.key === "Escape" && r(s);
    };
    return t.addEventListener("keydown", o, { capture: !0 }), () => t.removeEventListener("keydown", o, { capture: !0 });
  }, [r, t]);
}
var UT = "DismissableLayer", _c = "dismissableLayer.update", HT = "dismissableLayer.pointerDownOutside", zT = "dismissableLayer.focusOutside", Dh, Im = b.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), fa = b.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: r = !1,
      onEscapeKeyDown: o,
      onPointerDownOutside: s,
      onFocusOutside: c,
      onInteractOutside: l,
      onDismiss: u,
      ...f
    } = e, h = b.useContext(Im), [p, g] = b.useState(null), y = (p == null ? void 0 : p.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, C] = b.useState({}), T = Ye(t, ($) => g($)), S = Array.from(h.layers), [_] = [...h.layersWithOutsidePointerEventsDisabled].slice(-1), A = S.indexOf(_), R = p ? S.indexOf(p) : -1, N = h.layersWithOutsidePointerEventsDisabled.size > 0, L = R >= A, j = YT(($) => {
      const U = $.target, J = [...h.branches].some((ee) => ee.contains(U));
      !L || J || (s == null || s($), l == null || l($), $.defaultPrevented || u == null || u());
    }, y), H = qT(($) => {
      const U = $.target;
      [...h.branches].some((ee) => ee.contains(U)) || (c == null || c($), l == null || l($), $.defaultPrevented || u == null || u());
    }, y);
    return $T(($) => {
      R === h.layers.size - 1 && (o == null || o($), !$.defaultPrevented && u && ($.preventDefault(), u()));
    }, y), b.useEffect(() => {
      if (p)
        return r && (h.layersWithOutsidePointerEventsDisabled.size === 0 && (Dh = y.body.style.pointerEvents, y.body.style.pointerEvents = "none"), h.layersWithOutsidePointerEventsDisabled.add(p)), h.layers.add(p), Ih(), () => {
          r && h.layersWithOutsidePointerEventsDisabled.size === 1 && (y.body.style.pointerEvents = Dh);
        };
    }, [p, y, r, h]), b.useEffect(() => () => {
      p && (h.layers.delete(p), h.layersWithOutsidePointerEventsDisabled.delete(p), Ih());
    }, [p, h]), b.useEffect(() => {
      const $ = () => C({});
      return document.addEventListener(_c, $), () => document.removeEventListener(_c, $);
    }, []), /* @__PURE__ */ v.jsx(
      Le.div,
      {
        ...f,
        ref: T,
        style: {
          pointerEvents: N ? L ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: Oe(e.onFocusCapture, H.onFocusCapture),
        onBlurCapture: Oe(e.onBlurCapture, H.onBlurCapture),
        onPointerDownCapture: Oe(
          e.onPointerDownCapture,
          j.onPointerDownCapture
        )
      }
    );
  }
);
fa.displayName = UT;
var GT = "DismissableLayerBranch", KT = b.forwardRef((e, t) => {
  const r = b.useContext(Im), o = b.useRef(null), s = Ye(t, o);
  return b.useEffect(() => {
    const c = o.current;
    if (c)
      return r.branches.add(c), () => {
        r.branches.delete(c);
      };
  }, [r.branches]), /* @__PURE__ */ v.jsx(Le.div, { ...e, ref: s });
});
KT.displayName = GT;
function YT(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = Fn(e), o = b.useRef(!1), s = b.useRef(() => {
  });
  return b.useEffect(() => {
    const c = (u) => {
      if (u.target && !o.current) {
        let f = function() {
          Lm(
            HT,
            r,
            h,
            { discrete: !0 }
          );
        };
        const h = { originalEvent: u };
        u.pointerType === "touch" ? (t.removeEventListener("click", s.current), s.current = f, t.addEventListener("click", s.current, { once: !0 })) : f();
      } else
        t.removeEventListener("click", s.current);
      o.current = !1;
    }, l = window.setTimeout(() => {
      t.addEventListener("pointerdown", c);
    }, 0);
    return () => {
      window.clearTimeout(l), t.removeEventListener("pointerdown", c), t.removeEventListener("click", s.current);
    };
  }, [t, r]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => o.current = !0
  };
}
function qT(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = Fn(e), o = b.useRef(!1);
  return b.useEffect(() => {
    const s = (c) => {
      c.target && !o.current && Lm(zT, r, { originalEvent: c }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", s), () => t.removeEventListener("focusin", s);
  }, [t, r]), {
    onFocusCapture: () => o.current = !0,
    onBlurCapture: () => o.current = !1
  };
}
function Ih() {
  const e = new CustomEvent(_c);
  document.dispatchEvent(e);
}
function Lm(e, t, r, { discrete: o }) {
  const s = r.originalEvent.target, c = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: r });
  t && s.addEventListener(e, t, { once: !0 }), o ? WT(s, c) : s.dispatchEvent(c);
}
var Jl = 0;
function jm() {
  b.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? Lh()), document.body.insertAdjacentElement("beforeend", e[1] ?? Lh()), Jl++, () => {
      Jl === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), Jl--;
    };
  }, []);
}
function Lh() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var Ql = "focusScope.autoFocusOnMount", ec = "focusScope.autoFocusOnUnmount", jh = { bubbles: !1, cancelable: !0 }, XT = "FocusScope", eu = b.forwardRef((e, t) => {
  const {
    loop: r = !1,
    trapped: o = !1,
    onMountAutoFocus: s,
    onUnmountAutoFocus: c,
    ...l
  } = e, [u, f] = b.useState(null), h = Fn(s), p = Fn(c), g = b.useRef(null), y = Ye(t, (S) => f(S)), C = b.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  b.useEffect(() => {
    if (o) {
      let S = function(N) {
        if (C.paused || !u)
          return;
        const L = N.target;
        u.contains(L) ? g.current = L : nr(g.current, { select: !0 });
      }, _ = function(N) {
        if (C.paused || !u)
          return;
        const L = N.relatedTarget;
        L !== null && (u.contains(L) || nr(g.current, { select: !0 }));
      }, A = function(N) {
        if (document.activeElement === document.body)
          for (const j of N)
            j.removedNodes.length > 0 && nr(u);
      };
      document.addEventListener("focusin", S), document.addEventListener("focusout", _);
      const R = new MutationObserver(A);
      return u && R.observe(u, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", S), document.removeEventListener("focusout", _), R.disconnect();
      };
    }
  }, [o, u, C.paused]), b.useEffect(() => {
    if (u) {
      Vh.add(C);
      const S = document.activeElement;
      if (!u.contains(S)) {
        const A = new CustomEvent(Ql, jh);
        u.addEventListener(Ql, h), u.dispatchEvent(A), A.defaultPrevented || (ZT(nP(km(u)), { select: !0 }), document.activeElement === S && nr(u));
      }
      return () => {
        u.removeEventListener(Ql, h), setTimeout(() => {
          const A = new CustomEvent(ec, jh);
          u.addEventListener(ec, p), u.dispatchEvent(A), A.defaultPrevented || nr(S ?? document.body, { select: !0 }), u.removeEventListener(ec, p), Vh.remove(C);
        }, 0);
      };
    }
  }, [u, h, p, C]);
  const T = b.useCallback(
    (S) => {
      if (!r && !o || C.paused)
        return;
      const _ = S.key === "Tab" && !S.altKey && !S.ctrlKey && !S.metaKey, A = document.activeElement;
      if (_ && A) {
        const R = S.currentTarget, [N, L] = JT(R);
        N && L ? !S.shiftKey && A === L ? (S.preventDefault(), r && nr(N, { select: !0 })) : S.shiftKey && A === N && (S.preventDefault(), r && nr(L, { select: !0 })) : A === R && S.preventDefault();
      }
    },
    [r, o, C.paused]
  );
  return /* @__PURE__ */ v.jsx(Le.div, { tabIndex: -1, ...l, ref: y, onKeyDown: T });
});
eu.displayName = XT;
function ZT(e, { select: t = !1 } = {}) {
  const r = document.activeElement;
  for (const o of e)
    if (nr(o, { select: t }), document.activeElement !== r)
      return;
}
function JT(e) {
  const t = km(e), r = kh(t, e), o = kh(t.reverse(), e);
  return [r, o];
}
function km(e) {
  const t = [], r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (o) => {
      const s = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || s ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; r.nextNode(); )
    t.push(r.currentNode);
  return t;
}
function kh(e, t) {
  for (const r of e)
    if (!QT(r, { upTo: t }))
      return r;
}
function QT(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden")
    return !0;
  for (; e; ) {
    if (t !== void 0 && e === t)
      return !1;
    if (getComputedStyle(e).display === "none")
      return !0;
    e = e.parentElement;
  }
  return !1;
}
function eP(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function nr(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const r = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== r && eP(e) && t && e.select();
  }
}
var Vh = tP();
function tP() {
  let e = [];
  return {
    add(t) {
      const r = e[0];
      t !== r && (r == null || r.pause()), e = Fh(e, t), e.unshift(t);
    },
    remove(t) {
      var r;
      e = Fh(e, t), (r = e[0]) == null || r.resume();
    }
  };
}
function Fh(e, t) {
  const r = [...e], o = r.indexOf(t);
  return o !== -1 && r.splice(o, 1), r;
}
function nP(e) {
  return e.filter((t) => t.tagName !== "A");
}
var Ct = globalThis != null && globalThis.document ? b.useLayoutEffect : () => {
}, rP = b.useId || (() => {
}), iP = 0;
function Ir(e) {
  const [t, r] = b.useState(rP());
  return Ct(() => {
    r((o) => o ?? String(iP++));
  }, [e]), t ? `radix-${t}` : "";
}
const oP = ["top", "right", "bottom", "left"], lr = Math.min, kt = Math.max, Ks = Math.round, Rs = Math.floor, mn = (e) => ({
  x: e,
  y: e
}), sP = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, aP = {
  start: "end",
  end: "start"
};
function Tc(e, t, r) {
  return kt(e, lr(t, r));
}
function Bn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Wn(e) {
  return e.split("-")[0];
}
function _i(e) {
  return e.split("-")[1];
}
function tu(e) {
  return e === "x" ? "y" : "x";
}
function nu(e) {
  return e === "y" ? "height" : "width";
}
function cr(e) {
  return ["top", "bottom"].includes(Wn(e)) ? "y" : "x";
}
function ru(e) {
  return tu(cr(e));
}
function lP(e, t, r) {
  r === void 0 && (r = !1);
  const o = _i(e), s = ru(e), c = nu(s);
  let l = s === "x" ? o === (r ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[c] > t.floating[c] && (l = Ys(l)), [l, Ys(l)];
}
function cP(e) {
  const t = Ys(e);
  return [Pc(e), t, Pc(t)];
}
function Pc(e) {
  return e.replace(/start|end/g, (t) => aP[t]);
}
function uP(e, t, r) {
  const o = ["left", "right"], s = ["right", "left"], c = ["top", "bottom"], l = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return r ? t ? s : o : t ? o : s;
    case "left":
    case "right":
      return t ? c : l;
    default:
      return [];
  }
}
function fP(e, t, r, o) {
  const s = _i(e);
  let c = uP(Wn(e), r === "start", o);
  return s && (c = c.map((l) => l + "-" + s), t && (c = c.concat(c.map(Pc)))), c;
}
function Ys(e) {
  return e.replace(/left|right|bottom|top/g, (t) => sP[t]);
}
function dP(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Vm(e) {
  return typeof e != "number" ? dP(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function qs(e) {
  const {
    x: t,
    y: r,
    width: o,
    height: s
  } = e;
  return {
    width: o,
    height: s,
    top: r,
    left: t,
    right: t + o,
    bottom: r + s,
    x: t,
    y: r
  };
}
function Bh(e, t, r) {
  let {
    reference: o,
    floating: s
  } = e;
  const c = cr(t), l = ru(t), u = nu(l), f = Wn(t), h = c === "y", p = o.x + o.width / 2 - s.width / 2, g = o.y + o.height / 2 - s.height / 2, y = o[u] / 2 - s[u] / 2;
  let C;
  switch (f) {
    case "top":
      C = {
        x: p,
        y: o.y - s.height
      };
      break;
    case "bottom":
      C = {
        x: p,
        y: o.y + o.height
      };
      break;
    case "right":
      C = {
        x: o.x + o.width,
        y: g
      };
      break;
    case "left":
      C = {
        x: o.x - s.width,
        y: g
      };
      break;
    default:
      C = {
        x: o.x,
        y: o.y
      };
  }
  switch (_i(t)) {
    case "start":
      C[l] -= y * (r && h ? -1 : 1);
      break;
    case "end":
      C[l] += y * (r && h ? -1 : 1);
      break;
  }
  return C;
}
const hP = async (e, t, r) => {
  const {
    placement: o = "bottom",
    strategy: s = "absolute",
    middleware: c = [],
    platform: l
  } = r, u = c.filter(Boolean), f = await (l.isRTL == null ? void 0 : l.isRTL(t));
  let h = await l.getElementRects({
    reference: e,
    floating: t,
    strategy: s
  }), {
    x: p,
    y: g
  } = Bh(h, o, f), y = o, C = {}, T = 0;
  for (let S = 0; S < u.length; S++) {
    const {
      name: _,
      fn: A
    } = u[S], {
      x: R,
      y: N,
      data: L,
      reset: j
    } = await A({
      x: p,
      y: g,
      initialPlacement: o,
      placement: y,
      strategy: s,
      middlewareData: C,
      rects: h,
      platform: l,
      elements: {
        reference: e,
        floating: t
      }
    });
    p = R ?? p, g = N ?? g, C = {
      ...C,
      [_]: {
        ...C[_],
        ...L
      }
    }, j && T <= 50 && (T++, typeof j == "object" && (j.placement && (y = j.placement), j.rects && (h = j.rects === !0 ? await l.getElementRects({
      reference: e,
      floating: t,
      strategy: s
    }) : j.rects), {
      x: p,
      y: g
    } = Bh(h, y, f)), S = -1);
  }
  return {
    x: p,
    y: g,
    placement: y,
    strategy: s,
    middlewareData: C
  };
};
async function xo(e, t) {
  var r;
  t === void 0 && (t = {});
  const {
    x: o,
    y: s,
    platform: c,
    rects: l,
    elements: u,
    strategy: f
  } = e, {
    boundary: h = "clippingAncestors",
    rootBoundary: p = "viewport",
    elementContext: g = "floating",
    altBoundary: y = !1,
    padding: C = 0
  } = Bn(t, e), T = Vm(C), _ = u[y ? g === "floating" ? "reference" : "floating" : g], A = qs(await c.getClippingRect({
    element: (r = await (c.isElement == null ? void 0 : c.isElement(_))) == null || r ? _ : _.contextElement || await (c.getDocumentElement == null ? void 0 : c.getDocumentElement(u.floating)),
    boundary: h,
    rootBoundary: p,
    strategy: f
  })), R = g === "floating" ? {
    x: o,
    y: s,
    width: l.floating.width,
    height: l.floating.height
  } : l.reference, N = await (c.getOffsetParent == null ? void 0 : c.getOffsetParent(u.floating)), L = await (c.isElement == null ? void 0 : c.isElement(N)) ? await (c.getScale == null ? void 0 : c.getScale(N)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, j = qs(c.convertOffsetParentRelativeRectToViewportRelativeRect ? await c.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: u,
    rect: R,
    offsetParent: N,
    strategy: f
  }) : R);
  return {
    top: (A.top - j.top + T.top) / L.y,
    bottom: (j.bottom - A.bottom + T.bottom) / L.y,
    left: (A.left - j.left + T.left) / L.x,
    right: (j.right - A.right + T.right) / L.x
  };
}
const pP = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: r,
      y: o,
      placement: s,
      rects: c,
      platform: l,
      elements: u,
      middlewareData: f
    } = t, {
      element: h,
      padding: p = 0
    } = Bn(e, t) || {};
    if (h == null)
      return {};
    const g = Vm(p), y = {
      x: r,
      y: o
    }, C = ru(s), T = nu(C), S = await l.getDimensions(h), _ = C === "y", A = _ ? "top" : "left", R = _ ? "bottom" : "right", N = _ ? "clientHeight" : "clientWidth", L = c.reference[T] + c.reference[C] - y[C] - c.floating[T], j = y[C] - c.reference[C], H = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(h));
    let $ = H ? H[N] : 0;
    (!$ || !await (l.isElement == null ? void 0 : l.isElement(H))) && ($ = u.floating[N] || c.floating[T]);
    const U = L / 2 - j / 2, J = $ / 2 - S[T] / 2 - 1, ee = lr(g[A], J), he = lr(g[R], J), Z = ee, ae = $ - S[T] - he, te = $ / 2 - S[T] / 2 + U, Te = Tc(Z, te, ae), le = !f.arrow && _i(s) != null && te !== Te && c.reference[T] / 2 - (te < Z ? ee : he) - S[T] / 2 < 0, X = le ? te < Z ? te - Z : te - ae : 0;
    return {
      [C]: y[C] + X,
      data: {
        [C]: Te,
        centerOffset: te - Te - X,
        ...le && {
          alignmentOffset: X
        }
      },
      reset: le
    };
  }
}), mP = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var r, o;
      const {
        placement: s,
        middlewareData: c,
        rects: l,
        initialPlacement: u,
        platform: f,
        elements: h
      } = t, {
        mainAxis: p = !0,
        crossAxis: g = !0,
        fallbackPlacements: y,
        fallbackStrategy: C = "bestFit",
        fallbackAxisSideDirection: T = "none",
        flipAlignment: S = !0,
        ..._
      } = Bn(e, t);
      if ((r = c.arrow) != null && r.alignmentOffset)
        return {};
      const A = Wn(s), R = cr(u), N = Wn(u) === u, L = await (f.isRTL == null ? void 0 : f.isRTL(h.floating)), j = y || (N || !S ? [Ys(u)] : cP(u)), H = T !== "none";
      !y && H && j.push(...fP(u, S, T, L));
      const $ = [u, ...j], U = await xo(t, _), J = [];
      let ee = ((o = c.flip) == null ? void 0 : o.overflows) || [];
      if (p && J.push(U[A]), g) {
        const te = lP(s, l, L);
        J.push(U[te[0]], U[te[1]]);
      }
      if (ee = [...ee, {
        placement: s,
        overflows: J
      }], !J.every((te) => te <= 0)) {
        var he, Z;
        const te = (((he = c.flip) == null ? void 0 : he.index) || 0) + 1, Te = $[te];
        if (Te)
          return {
            data: {
              index: te,
              overflows: ee
            },
            reset: {
              placement: Te
            }
          };
        let le = (Z = ee.filter((X) => X.overflows[0] <= 0).sort((X, K) => X.overflows[1] - K.overflows[1])[0]) == null ? void 0 : Z.placement;
        if (!le)
          switch (C) {
            case "bestFit": {
              var ae;
              const X = (ae = ee.filter((K) => {
                if (H) {
                  const pe = cr(K.placement);
                  return pe === R || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  pe === "y";
                }
                return !0;
              }).map((K) => [K.placement, K.overflows.filter((pe) => pe > 0).reduce((pe, Me) => pe + Me, 0)]).sort((K, pe) => K[1] - pe[1])[0]) == null ? void 0 : ae[0];
              X && (le = X);
              break;
            }
            case "initialPlacement":
              le = u;
              break;
          }
        if (s !== le)
          return {
            reset: {
              placement: le
            }
          };
      }
      return {};
    }
  };
};
function Wh(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function $h(e) {
  return oP.some((t) => e[t] >= 0);
}
const gP = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: r
      } = t, {
        strategy: o = "referenceHidden",
        ...s
      } = Bn(e, t);
      switch (o) {
        case "referenceHidden": {
          const c = await xo(t, {
            ...s,
            elementContext: "reference"
          }), l = Wh(c, r.reference);
          return {
            data: {
              referenceHiddenOffsets: l,
              referenceHidden: $h(l)
            }
          };
        }
        case "escaped": {
          const c = await xo(t, {
            ...s,
            altBoundary: !0
          }), l = Wh(c, r.floating);
          return {
            data: {
              escapedOffsets: l,
              escaped: $h(l)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function vP(e, t) {
  const {
    placement: r,
    platform: o,
    elements: s
  } = e, c = await (o.isRTL == null ? void 0 : o.isRTL(s.floating)), l = Wn(r), u = _i(r), f = cr(r) === "y", h = ["left", "top"].includes(l) ? -1 : 1, p = c && f ? -1 : 1, g = Bn(t, e);
  let {
    mainAxis: y,
    crossAxis: C,
    alignmentAxis: T
  } = typeof g == "number" ? {
    mainAxis: g,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: g.mainAxis || 0,
    crossAxis: g.crossAxis || 0,
    alignmentAxis: g.alignmentAxis
  };
  return u && typeof T == "number" && (C = u === "end" ? T * -1 : T), f ? {
    x: C * p,
    y: y * h
  } : {
    x: y * h,
    y: C * p
  };
}
const yP = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var r, o;
      const {
        x: s,
        y: c,
        placement: l,
        middlewareData: u
      } = t, f = await vP(t, e);
      return l === ((r = u.offset) == null ? void 0 : r.placement) && (o = u.arrow) != null && o.alignmentOffset ? {} : {
        x: s + f.x,
        y: c + f.y,
        data: {
          ...f,
          placement: l
        }
      };
    }
  };
}, xP = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: r,
        y: o,
        placement: s
      } = t, {
        mainAxis: c = !0,
        crossAxis: l = !1,
        limiter: u = {
          fn: (_) => {
            let {
              x: A,
              y: R
            } = _;
            return {
              x: A,
              y: R
            };
          }
        },
        ...f
      } = Bn(e, t), h = {
        x: r,
        y: o
      }, p = await xo(t, f), g = cr(Wn(s)), y = tu(g);
      let C = h[y], T = h[g];
      if (c) {
        const _ = y === "y" ? "top" : "left", A = y === "y" ? "bottom" : "right", R = C + p[_], N = C - p[A];
        C = Tc(R, C, N);
      }
      if (l) {
        const _ = g === "y" ? "top" : "left", A = g === "y" ? "bottom" : "right", R = T + p[_], N = T - p[A];
        T = Tc(R, T, N);
      }
      const S = u.fn({
        ...t,
        [y]: C,
        [g]: T
      });
      return {
        ...S,
        data: {
          x: S.x - r,
          y: S.y - o,
          enabled: {
            [y]: c,
            [g]: l
          }
        }
      };
    }
  };
}, wP = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: r,
        y: o,
        placement: s,
        rects: c,
        middlewareData: l
      } = t, {
        offset: u = 0,
        mainAxis: f = !0,
        crossAxis: h = !0
      } = Bn(e, t), p = {
        x: r,
        y: o
      }, g = cr(s), y = tu(g);
      let C = p[y], T = p[g];
      const S = Bn(u, t), _ = typeof S == "number" ? {
        mainAxis: S,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...S
      };
      if (f) {
        const N = y === "y" ? "height" : "width", L = c.reference[y] - c.floating[N] + _.mainAxis, j = c.reference[y] + c.reference[N] - _.mainAxis;
        C < L ? C = L : C > j && (C = j);
      }
      if (h) {
        var A, R;
        const N = y === "y" ? "width" : "height", L = ["top", "left"].includes(Wn(s)), j = c.reference[g] - c.floating[N] + (L && ((A = l.offset) == null ? void 0 : A[g]) || 0) + (L ? 0 : _.crossAxis), H = c.reference[g] + c.reference[N] + (L ? 0 : ((R = l.offset) == null ? void 0 : R[g]) || 0) - (L ? _.crossAxis : 0);
        T < j ? T = j : T > H && (T = H);
      }
      return {
        [y]: C,
        [g]: T
      };
    }
  };
}, bP = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var r, o;
      const {
        placement: s,
        rects: c,
        platform: l,
        elements: u
      } = t, {
        apply: f = () => {
        },
        ...h
      } = Bn(e, t), p = await xo(t, h), g = Wn(s), y = _i(s), C = cr(s) === "y", {
        width: T,
        height: S
      } = c.floating;
      let _, A;
      g === "top" || g === "bottom" ? (_ = g, A = y === (await (l.isRTL == null ? void 0 : l.isRTL(u.floating)) ? "start" : "end") ? "left" : "right") : (A = g, _ = y === "end" ? "top" : "bottom");
      const R = S - p.top - p.bottom, N = T - p.left - p.right, L = lr(S - p[_], R), j = lr(T - p[A], N), H = !t.middlewareData.shift;
      let $ = L, U = j;
      if ((r = t.middlewareData.shift) != null && r.enabled.x && (U = N), (o = t.middlewareData.shift) != null && o.enabled.y && ($ = R), H && !y) {
        const ee = kt(p.left, 0), he = kt(p.right, 0), Z = kt(p.top, 0), ae = kt(p.bottom, 0);
        C ? U = T - 2 * (ee !== 0 || he !== 0 ? ee + he : kt(p.left, p.right)) : $ = S - 2 * (Z !== 0 || ae !== 0 ? Z + ae : kt(p.top, p.bottom));
      }
      await f({
        ...t,
        availableWidth: U,
        availableHeight: $
      });
      const J = await l.getDimensions(u.floating);
      return T !== J.width || S !== J.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function da() {
  return typeof window < "u";
}
function Ti(e) {
  return Fm(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Vt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function wn(e) {
  var t;
  return (t = (Fm(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Fm(e) {
  return da() ? e instanceof Node || e instanceof Vt(e).Node : !1;
}
function sn(e) {
  return da() ? e instanceof Element || e instanceof Vt(e).Element : !1;
}
function xn(e) {
  return da() ? e instanceof HTMLElement || e instanceof Vt(e).HTMLElement : !1;
}
function Uh(e) {
  return !da() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Vt(e).ShadowRoot;
}
function Ao(e) {
  const {
    overflow: t,
    overflowX: r,
    overflowY: o,
    display: s
  } = an(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + r) && !["inline", "contents"].includes(s);
}
function SP(e) {
  return ["table", "td", "th"].includes(Ti(e));
}
function ha(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function iu(e) {
  const t = ou(), r = sn(e) ? an(e) : e;
  return r.transform !== "none" || r.perspective !== "none" || (r.containerType ? r.containerType !== "normal" : !1) || !t && (r.backdropFilter ? r.backdropFilter !== "none" : !1) || !t && (r.filter ? r.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((o) => (r.willChange || "").includes(o)) || ["paint", "layout", "strict", "content"].some((o) => (r.contain || "").includes(o));
}
function CP(e) {
  let t = ur(e);
  for (; xn(t) && !vi(t); ) {
    if (iu(t))
      return t;
    if (ha(t))
      return null;
    t = ur(t);
  }
  return null;
}
function ou() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function vi(e) {
  return ["html", "body", "#document"].includes(Ti(e));
}
function an(e) {
  return Vt(e).getComputedStyle(e);
}
function pa(e) {
  return sn(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function ur(e) {
  if (Ti(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Uh(e) && e.host || // Fallback.
    wn(e)
  );
  return Uh(t) ? t.host : t;
}
function Bm(e) {
  const t = ur(e);
  return vi(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : xn(t) && Ao(t) ? t : Bm(t);
}
function wo(e, t, r) {
  var o;
  t === void 0 && (t = []), r === void 0 && (r = !0);
  const s = Bm(e), c = s === ((o = e.ownerDocument) == null ? void 0 : o.body), l = Vt(s);
  if (c) {
    const u = Ac(l);
    return t.concat(l, l.visualViewport || [], Ao(s) ? s : [], u && r ? wo(u) : []);
  }
  return t.concat(s, wo(s, [], r));
}
function Ac(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Wm(e) {
  const t = an(e);
  let r = parseFloat(t.width) || 0, o = parseFloat(t.height) || 0;
  const s = xn(e), c = s ? e.offsetWidth : r, l = s ? e.offsetHeight : o, u = Ks(r) !== c || Ks(o) !== l;
  return u && (r = c, o = l), {
    width: r,
    height: o,
    $: u
  };
}
function su(e) {
  return sn(e) ? e : e.contextElement;
}
function mi(e) {
  const t = su(e);
  if (!xn(t))
    return mn(1);
  const r = t.getBoundingClientRect(), {
    width: o,
    height: s,
    $: c
  } = Wm(t);
  let l = (c ? Ks(r.width) : r.width) / o, u = (c ? Ks(r.height) : r.height) / s;
  return (!l || !Number.isFinite(l)) && (l = 1), (!u || !Number.isFinite(u)) && (u = 1), {
    x: l,
    y: u
  };
}
const _P = /* @__PURE__ */ mn(0);
function $m(e) {
  const t = Vt(e);
  return !ou() || !t.visualViewport ? _P : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function TP(e, t, r) {
  return t === void 0 && (t = !1), !r || t && r !== Vt(e) ? !1 : t;
}
function kr(e, t, r, o) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  const s = e.getBoundingClientRect(), c = su(e);
  let l = mn(1);
  t && (o ? sn(o) && (l = mi(o)) : l = mi(e));
  const u = TP(c, r, o) ? $m(c) : mn(0);
  let f = (s.left + u.x) / l.x, h = (s.top + u.y) / l.y, p = s.width / l.x, g = s.height / l.y;
  if (c) {
    const y = Vt(c), C = o && sn(o) ? Vt(o) : o;
    let T = y, S = Ac(T);
    for (; S && o && C !== T; ) {
      const _ = mi(S), A = S.getBoundingClientRect(), R = an(S), N = A.left + (S.clientLeft + parseFloat(R.paddingLeft)) * _.x, L = A.top + (S.clientTop + parseFloat(R.paddingTop)) * _.y;
      f *= _.x, h *= _.y, p *= _.x, g *= _.y, f += N, h += L, T = Vt(S), S = Ac(T);
    }
  }
  return qs({
    width: p,
    height: g,
    x: f,
    y: h
  });
}
function au(e, t) {
  const r = pa(e).scrollLeft;
  return t ? t.left + r : kr(wn(e)).left + r;
}
function Um(e, t, r) {
  r === void 0 && (r = !1);
  const o = e.getBoundingClientRect(), s = o.left + t.scrollLeft - (r ? 0 : (
    // RTL <body> scrollbar.
    au(e, o)
  )), c = o.top + t.scrollTop;
  return {
    x: s,
    y: c
  };
}
function PP(e) {
  let {
    elements: t,
    rect: r,
    offsetParent: o,
    strategy: s
  } = e;
  const c = s === "fixed", l = wn(o), u = t ? ha(t.floating) : !1;
  if (o === l || u && c)
    return r;
  let f = {
    scrollLeft: 0,
    scrollTop: 0
  }, h = mn(1);
  const p = mn(0), g = xn(o);
  if ((g || !g && !c) && ((Ti(o) !== "body" || Ao(l)) && (f = pa(o)), xn(o))) {
    const C = kr(o);
    h = mi(o), p.x = C.x + o.clientLeft, p.y = C.y + o.clientTop;
  }
  const y = l && !g && !c ? Um(l, f, !0) : mn(0);
  return {
    width: r.width * h.x,
    height: r.height * h.y,
    x: r.x * h.x - f.scrollLeft * h.x + p.x + y.x,
    y: r.y * h.y - f.scrollTop * h.y + p.y + y.y
  };
}
function AP(e) {
  return Array.from(e.getClientRects());
}
function EP(e) {
  const t = wn(e), r = pa(e), o = e.ownerDocument.body, s = kt(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth), c = kt(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight);
  let l = -r.scrollLeft + au(e);
  const u = -r.scrollTop;
  return an(o).direction === "rtl" && (l += kt(t.clientWidth, o.clientWidth) - s), {
    width: s,
    height: c,
    x: l,
    y: u
  };
}
function RP(e, t) {
  const r = Vt(e), o = wn(e), s = r.visualViewport;
  let c = o.clientWidth, l = o.clientHeight, u = 0, f = 0;
  if (s) {
    c = s.width, l = s.height;
    const h = ou();
    (!h || h && t === "fixed") && (u = s.offsetLeft, f = s.offsetTop);
  }
  return {
    width: c,
    height: l,
    x: u,
    y: f
  };
}
function OP(e, t) {
  const r = kr(e, !0, t === "fixed"), o = r.top + e.clientTop, s = r.left + e.clientLeft, c = xn(e) ? mi(e) : mn(1), l = e.clientWidth * c.x, u = e.clientHeight * c.y, f = s * c.x, h = o * c.y;
  return {
    width: l,
    height: u,
    x: f,
    y: h
  };
}
function Hh(e, t, r) {
  let o;
  if (t === "viewport")
    o = RP(e, r);
  else if (t === "document")
    o = EP(wn(e));
  else if (sn(t))
    o = OP(t, r);
  else {
    const s = $m(e);
    o = {
      x: t.x - s.x,
      y: t.y - s.y,
      width: t.width,
      height: t.height
    };
  }
  return qs(o);
}
function Hm(e, t) {
  const r = ur(e);
  return r === t || !sn(r) || vi(r) ? !1 : an(r).position === "fixed" || Hm(r, t);
}
function NP(e, t) {
  const r = t.get(e);
  if (r)
    return r;
  let o = wo(e, [], !1).filter((u) => sn(u) && Ti(u) !== "body"), s = null;
  const c = an(e).position === "fixed";
  let l = c ? ur(e) : e;
  for (; sn(l) && !vi(l); ) {
    const u = an(l), f = iu(l);
    !f && u.position === "fixed" && (s = null), (c ? !f && !s : !f && u.position === "static" && !!s && ["absolute", "fixed"].includes(s.position) || Ao(l) && !f && Hm(e, l)) ? o = o.filter((p) => p !== l) : s = u, l = ur(l);
  }
  return t.set(e, o), o;
}
function MP(e) {
  let {
    element: t,
    boundary: r,
    rootBoundary: o,
    strategy: s
  } = e;
  const l = [...r === "clippingAncestors" ? ha(t) ? [] : NP(t, this._c) : [].concat(r), o], u = l[0], f = l.reduce((h, p) => {
    const g = Hh(t, p, s);
    return h.top = kt(g.top, h.top), h.right = lr(g.right, h.right), h.bottom = lr(g.bottom, h.bottom), h.left = kt(g.left, h.left), h;
  }, Hh(t, u, s));
  return {
    width: f.right - f.left,
    height: f.bottom - f.top,
    x: f.left,
    y: f.top
  };
}
function DP(e) {
  const {
    width: t,
    height: r
  } = Wm(e);
  return {
    width: t,
    height: r
  };
}
function IP(e, t, r) {
  const o = xn(t), s = wn(t), c = r === "fixed", l = kr(e, !0, c, t);
  let u = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const f = mn(0);
  if (o || !o && !c)
    if ((Ti(t) !== "body" || Ao(s)) && (u = pa(t)), o) {
      const y = kr(t, !0, c, t);
      f.x = y.x + t.clientLeft, f.y = y.y + t.clientTop;
    } else
      s && (f.x = au(s));
  const h = s && !o && !c ? Um(s, u) : mn(0), p = l.left + u.scrollLeft - f.x - h.x, g = l.top + u.scrollTop - f.y - h.y;
  return {
    x: p,
    y: g,
    width: l.width,
    height: l.height
  };
}
function tc(e) {
  return an(e).position === "static";
}
function zh(e, t) {
  if (!xn(e) || an(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let r = e.offsetParent;
  return wn(e) === r && (r = r.ownerDocument.body), r;
}
function zm(e, t) {
  const r = Vt(e);
  if (ha(e))
    return r;
  if (!xn(e)) {
    let s = ur(e);
    for (; s && !vi(s); ) {
      if (sn(s) && !tc(s))
        return s;
      s = ur(s);
    }
    return r;
  }
  let o = zh(e, t);
  for (; o && SP(o) && tc(o); )
    o = zh(o, t);
  return o && vi(o) && tc(o) && !iu(o) ? r : o || CP(e) || r;
}
const LP = async function(e) {
  const t = this.getOffsetParent || zm, r = this.getDimensions, o = await r(e.floating);
  return {
    reference: IP(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: o.width,
      height: o.height
    }
  };
};
function jP(e) {
  return an(e).direction === "rtl";
}
const kP = {
  convertOffsetParentRelativeRectToViewportRelativeRect: PP,
  getDocumentElement: wn,
  getClippingRect: MP,
  getOffsetParent: zm,
  getElementRects: LP,
  getClientRects: AP,
  getDimensions: DP,
  getScale: mi,
  isElement: sn,
  isRTL: jP
};
function VP(e, t) {
  let r = null, o;
  const s = wn(e);
  function c() {
    var u;
    clearTimeout(o), (u = r) == null || u.disconnect(), r = null;
  }
  function l(u, f) {
    u === void 0 && (u = !1), f === void 0 && (f = 1), c();
    const {
      left: h,
      top: p,
      width: g,
      height: y
    } = e.getBoundingClientRect();
    if (u || t(), !g || !y)
      return;
    const C = Rs(p), T = Rs(s.clientWidth - (h + g)), S = Rs(s.clientHeight - (p + y)), _ = Rs(h), R = {
      rootMargin: -C + "px " + -T + "px " + -S + "px " + -_ + "px",
      threshold: kt(0, lr(1, f)) || 1
    };
    let N = !0;
    function L(j) {
      const H = j[0].intersectionRatio;
      if (H !== f) {
        if (!N)
          return l();
        H ? l(!1, H) : o = setTimeout(() => {
          l(!1, 1e-7);
        }, 1e3);
      }
      N = !1;
    }
    try {
      r = new IntersectionObserver(L, {
        ...R,
        // Handle <iframe>s
        root: s.ownerDocument
      });
    } catch {
      r = new IntersectionObserver(L, R);
    }
    r.observe(e);
  }
  return l(!0), c;
}
function FP(e, t, r, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: s = !0,
    ancestorResize: c = !0,
    elementResize: l = typeof ResizeObserver == "function",
    layoutShift: u = typeof IntersectionObserver == "function",
    animationFrame: f = !1
  } = o, h = su(e), p = s || c ? [...h ? wo(h) : [], ...wo(t)] : [];
  p.forEach((A) => {
    s && A.addEventListener("scroll", r, {
      passive: !0
    }), c && A.addEventListener("resize", r);
  });
  const g = h && u ? VP(h, r) : null;
  let y = -1, C = null;
  l && (C = new ResizeObserver((A) => {
    let [R] = A;
    R && R.target === h && C && (C.unobserve(t), cancelAnimationFrame(y), y = requestAnimationFrame(() => {
      var N;
      (N = C) == null || N.observe(t);
    })), r();
  }), h && !f && C.observe(h), C.observe(t));
  let T, S = f ? kr(e) : null;
  f && _();
  function _() {
    const A = kr(e);
    S && (A.x !== S.x || A.y !== S.y || A.width !== S.width || A.height !== S.height) && r(), S = A, T = requestAnimationFrame(_);
  }
  return r(), () => {
    var A;
    p.forEach((R) => {
      s && R.removeEventListener("scroll", r), c && R.removeEventListener("resize", r);
    }), g == null || g(), (A = C) == null || A.disconnect(), C = null, f && cancelAnimationFrame(T);
  };
}
const BP = yP, WP = xP, $P = mP, UP = bP, HP = gP, Gh = pP, zP = wP, GP = (e, t, r) => {
  const o = /* @__PURE__ */ new Map(), s = {
    platform: kP,
    ...r
  }, c = {
    ...s.platform,
    _c: o
  };
  return hP(e, t, {
    ...s,
    platform: c
  });
};
var Fs = typeof document < "u" ? vm : To;
function Xs(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let r, o, s;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (r = e.length, r !== t.length)
        return !1;
      for (o = r; o-- !== 0; )
        if (!Xs(e[o], t[o]))
          return !1;
      return !0;
    }
    if (s = Object.keys(e), r = s.length, r !== Object.keys(t).length)
      return !1;
    for (o = r; o-- !== 0; )
      if (!{}.hasOwnProperty.call(t, s[o]))
        return !1;
    for (o = r; o-- !== 0; ) {
      const c = s[o];
      if (!(c === "_owner" && e.$$typeof) && !Xs(e[c], t[c]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Gm(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Kh(e, t) {
  const r = Gm(e);
  return Math.round(t * r) / r;
}
function nc(e) {
  const t = b.useRef(e);
  return Fs(() => {
    t.current = e;
  }), t;
}
function KP(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: r = "absolute",
    middleware: o = [],
    platform: s,
    elements: {
      reference: c,
      floating: l
    } = {},
    transform: u = !0,
    whileElementsMounted: f,
    open: h
  } = e, [p, g] = b.useState({
    x: 0,
    y: 0,
    strategy: r,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [y, C] = b.useState(o);
  Xs(y, o) || C(o);
  const [T, S] = b.useState(null), [_, A] = b.useState(null), R = b.useCallback((K) => {
    K !== H.current && (H.current = K, S(K));
  }, []), N = b.useCallback((K) => {
    K !== $.current && ($.current = K, A(K));
  }, []), L = c || T, j = l || _, H = b.useRef(null), $ = b.useRef(null), U = b.useRef(p), J = f != null, ee = nc(f), he = nc(s), Z = nc(h), ae = b.useCallback(() => {
    if (!H.current || !$.current)
      return;
    const K = {
      placement: t,
      strategy: r,
      middleware: y
    };
    he.current && (K.platform = he.current), GP(H.current, $.current, K).then((pe) => {
      const Me = {
        ...pe,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: Z.current !== !1
      };
      te.current && !Xs(U.current, Me) && (U.current = Me, ca.flushSync(() => {
        g(Me);
      }));
    });
  }, [y, t, r, he, Z]);
  Fs(() => {
    h === !1 && U.current.isPositioned && (U.current.isPositioned = !1, g((K) => ({
      ...K,
      isPositioned: !1
    })));
  }, [h]);
  const te = b.useRef(!1);
  Fs(() => (te.current = !0, () => {
    te.current = !1;
  }), []), Fs(() => {
    if (L && (H.current = L), j && ($.current = j), L && j) {
      if (ee.current)
        return ee.current(L, j, ae);
      ae();
    }
  }, [L, j, ae, ee, J]);
  const Te = b.useMemo(() => ({
    reference: H,
    floating: $,
    setReference: R,
    setFloating: N
  }), [R, N]), le = b.useMemo(() => ({
    reference: L,
    floating: j
  }), [L, j]), X = b.useMemo(() => {
    const K = {
      position: r,
      left: 0,
      top: 0
    };
    if (!le.floating)
      return K;
    const pe = Kh(le.floating, p.x), Me = Kh(le.floating, p.y);
    return u ? {
      ...K,
      transform: "translate(" + pe + "px, " + Me + "px)",
      ...Gm(le.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: r,
      left: pe,
      top: Me
    };
  }, [r, u, le.floating, p.x, p.y]);
  return b.useMemo(() => ({
    ...p,
    update: ae,
    refs: Te,
    elements: le,
    floatingStyles: X
  }), [p, ae, Te, le, X]);
}
const YP = (e) => {
  function t(r) {
    return {}.hasOwnProperty.call(r, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(r) {
      const {
        element: o,
        padding: s
      } = typeof e == "function" ? e(r) : e;
      return o && t(o) ? o.current != null ? Gh({
        element: o.current,
        padding: s
      }).fn(r) : {} : o ? Gh({
        element: o,
        padding: s
      }).fn(r) : {};
    }
  };
}, qP = (e, t) => ({
  ...BP(e),
  options: [e, t]
}), XP = (e, t) => ({
  ...WP(e),
  options: [e, t]
}), ZP = (e, t) => ({
  ...zP(e),
  options: [e, t]
}), JP = (e, t) => ({
  ...$P(e),
  options: [e, t]
}), QP = (e, t) => ({
  ...UP(e),
  options: [e, t]
}), eA = (e, t) => ({
  ...HP(e),
  options: [e, t]
}), tA = (e, t) => ({
  ...YP(e),
  options: [e, t]
});
var nA = "Arrow", Km = b.forwardRef((e, t) => {
  const { children: r, width: o = 10, height: s = 5, ...c } = e;
  return /* @__PURE__ */ v.jsx(
    Le.svg,
    {
      ...c,
      ref: t,
      width: o,
      height: s,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? r : /* @__PURE__ */ v.jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
Km.displayName = nA;
var rA = Km;
function iA(e, t = []) {
  let r = [];
  function o(c, l) {
    const u = b.createContext(l), f = r.length;
    r = [...r, l];
    function h(g) {
      const { scope: y, children: C, ...T } = g, S = (y == null ? void 0 : y[e][f]) || u, _ = b.useMemo(() => T, Object.values(T));
      return /* @__PURE__ */ v.jsx(S.Provider, { value: _, children: C });
    }
    function p(g, y) {
      const C = (y == null ? void 0 : y[e][f]) || u, T = b.useContext(C);
      if (T)
        return T;
      if (l !== void 0)
        return l;
      throw new Error(`\`${g}\` must be used within \`${c}\``);
    }
    return h.displayName = c + "Provider", [h, p];
  }
  const s = () => {
    const c = r.map((l) => b.createContext(l));
    return function(u) {
      const f = (u == null ? void 0 : u[e]) || c;
      return b.useMemo(
        () => ({ [`__scope${e}`]: { ...u, [e]: f } }),
        [u, f]
      );
    };
  };
  return s.scopeName = e, [o, oA(s, ...t)];
}
function oA(...e) {
  const t = e[0];
  if (e.length === 1)
    return t;
  const r = () => {
    const o = e.map((s) => ({
      useScope: s(),
      scopeName: s.scopeName
    }));
    return function(c) {
      const l = o.reduce((u, { useScope: f, scopeName: h }) => {
        const g = f(c)[`__scope${h}`];
        return { ...u, ...g };
      }, {});
      return b.useMemo(() => ({ [`__scope${t.scopeName}`]: l }), [l]);
    };
  };
  return r.scopeName = t.scopeName, r;
}
function sA(e) {
  const [t, r] = b.useState(void 0);
  return Ct(() => {
    if (e) {
      r({ width: e.offsetWidth, height: e.offsetHeight });
      const o = new ResizeObserver((s) => {
        if (!Array.isArray(s) || !s.length)
          return;
        const c = s[0];
        let l, u;
        if ("borderBoxSize" in c) {
          const f = c.borderBoxSize, h = Array.isArray(f) ? f[0] : f;
          l = h.inlineSize, u = h.blockSize;
        } else
          l = e.offsetWidth, u = e.offsetHeight;
        r({ width: l, height: u });
      });
      return o.observe(e, { box: "border-box" }), () => o.unobserve(e);
    } else
      r(void 0);
  }, [e]), t;
}
var lu = "Popper", [Ym, ma] = iA(lu), [aA, qm] = Ym(lu), Xm = (e) => {
  const { __scopePopper: t, children: r } = e, [o, s] = b.useState(null);
  return /* @__PURE__ */ v.jsx(aA, { scope: t, anchor: o, onAnchorChange: s, children: r });
};
Xm.displayName = lu;
var Zm = "PopperAnchor", Jm = b.forwardRef(
  (e, t) => {
    const { __scopePopper: r, virtualRef: o, ...s } = e, c = qm(Zm, r), l = b.useRef(null), u = Ye(t, l);
    return b.useEffect(() => {
      c.onAnchorChange((o == null ? void 0 : o.current) || l.current);
    }), o ? null : /* @__PURE__ */ v.jsx(Le.div, { ...s, ref: u });
  }
);
Jm.displayName = Zm;
var cu = "PopperContent", [lA, cA] = Ym(cu), Qm = b.forwardRef(
  (e, t) => {
    var ne, xe, Ve, Ae, Ce, we;
    const {
      __scopePopper: r,
      side: o = "bottom",
      sideOffset: s = 0,
      align: c = "center",
      alignOffset: l = 0,
      arrowPadding: u = 0,
      avoidCollisions: f = !0,
      collisionBoundary: h = [],
      collisionPadding: p = 0,
      sticky: g = "partial",
      hideWhenDetached: y = !1,
      updatePositionStrategy: C = "optimized",
      onPlaced: T,
      ...S
    } = e, _ = qm(cu, r), [A, R] = b.useState(null), N = Ye(t, (nt) => R(nt)), [L, j] = b.useState(null), H = sA(L), $ = (H == null ? void 0 : H.width) ?? 0, U = (H == null ? void 0 : H.height) ?? 0, J = o + (c !== "center" ? "-" + c : ""), ee = typeof p == "number" ? p : { top: 0, right: 0, bottom: 0, left: 0, ...p }, he = Array.isArray(h) ? h : [h], Z = he.length > 0, ae = {
      padding: ee,
      boundary: he.filter(fA),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: Z
    }, { refs: te, floatingStyles: Te, placement: le, isPositioned: X, middlewareData: K } = KP({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: J,
      whileElementsMounted: (...nt) => FP(...nt, {
        animationFrame: C === "always"
      }),
      elements: {
        reference: _.anchor
      },
      middleware: [
        qP({ mainAxis: s + U, alignmentAxis: l }),
        f && XP({
          mainAxis: !0,
          crossAxis: !1,
          limiter: g === "partial" ? ZP() : void 0,
          ...ae
        }),
        f && JP({ ...ae }),
        QP({
          ...ae,
          apply: ({ elements: nt, rects: Ue, availableWidth: ht, availableHeight: Rt }) => {
            const { width: rt, height: yr } = Ue.reference, Jt = nt.floating.style;
            Jt.setProperty("--radix-popper-available-width", `${ht}px`), Jt.setProperty("--radix-popper-available-height", `${Rt}px`), Jt.setProperty("--radix-popper-anchor-width", `${rt}px`), Jt.setProperty("--radix-popper-anchor-height", `${yr}px`);
          }
        }),
        L && tA({ element: L, padding: u }),
        dA({ arrowWidth: $, arrowHeight: U }),
        y && eA({ strategy: "referenceHidden", ...ae })
      ]
    }), [pe, Me] = ng(le), Pe = Fn(T);
    Ct(() => {
      X && (Pe == null || Pe());
    }, [X, Pe]);
    const cn = (ne = K.arrow) == null ? void 0 : ne.x, un = (xe = K.arrow) == null ? void 0 : xe.y, Bt = ((Ve = K.arrow) == null ? void 0 : Ve.centerOffset) !== 0, [xt, dt] = b.useState();
    return Ct(() => {
      A && dt(window.getComputedStyle(A).zIndex);
    }, [A]), /* @__PURE__ */ v.jsx(
      "div",
      {
        ref: te.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...Te,
          transform: X ? Te.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: xt,
          "--radix-popper-transform-origin": [
            (Ae = K.transformOrigin) == null ? void 0 : Ae.x,
            (Ce = K.transformOrigin) == null ? void 0 : Ce.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((we = K.hide) == null ? void 0 : we.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ v.jsx(
          lA,
          {
            scope: r,
            placedSide: pe,
            onArrowChange: j,
            arrowX: cn,
            arrowY: un,
            shouldHideArrow: Bt,
            children: /* @__PURE__ */ v.jsx(
              Le.div,
              {
                "data-side": pe,
                "data-align": Me,
                ...S,
                ref: N,
                style: {
                  ...S.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: X ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
Qm.displayName = cu;
var eg = "PopperArrow", uA = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, tg = b.forwardRef(function(t, r) {
  const { __scopePopper: o, ...s } = t, c = cA(eg, o), l = uA[c.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ v.jsx(
      "span",
      {
        ref: c.onArrowChange,
        style: {
          position: "absolute",
          left: c.arrowX,
          top: c.arrowY,
          [l]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[c.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[c.placedSide],
          visibility: c.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ v.jsx(
          rA,
          {
            ...s,
            ref: r,
            style: {
              ...s.style,
              // ensures the element can be measured correctly (mostly for if SVG)
              display: "block"
            }
          }
        )
      }
    )
  );
});
tg.displayName = eg;
function fA(e) {
  return e !== null;
}
var dA = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var _, A, R;
    const { placement: r, rects: o, middlewareData: s } = t, l = ((_ = s.arrow) == null ? void 0 : _.centerOffset) !== 0, u = l ? 0 : e.arrowWidth, f = l ? 0 : e.arrowHeight, [h, p] = ng(r), g = { start: "0%", center: "50%", end: "100%" }[p], y = (((A = s.arrow) == null ? void 0 : A.x) ?? 0) + u / 2, C = (((R = s.arrow) == null ? void 0 : R.y) ?? 0) + f / 2;
    let T = "", S = "";
    return h === "bottom" ? (T = l ? g : `${y}px`, S = `${-f}px`) : h === "top" ? (T = l ? g : `${y}px`, S = `${o.floating.height + f}px`) : h === "right" ? (T = `${-f}px`, S = l ? g : `${C}px`) : h === "left" && (T = `${o.floating.width + f}px`, S = l ? g : `${C}px`), { data: { x: T, y: S } };
  }
});
function ng(e) {
  const [t, r = "center"] = e.split("-");
  return [t, r];
}
var rg = Xm, ig = Jm, og = Qm, sg = tg, hA = "Portal", uu = b.forwardRef((e, t) => {
  var u;
  const { container: r, ...o } = e, [s, c] = b.useState(!1);
  Ct(() => c(!0), []);
  const l = r || s && ((u = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : u.body);
  return l ? S_.createPortal(/* @__PURE__ */ v.jsx(Le.div, { ...o, ref: t }), l) : null;
});
uu.displayName = hA;
function Zs({
  prop: e,
  defaultProp: t,
  onChange: r = () => {
  }
}) {
  const [o, s] = pA({ defaultProp: t, onChange: r }), c = e !== void 0, l = c ? e : o, u = Fn(r), f = b.useCallback(
    (h) => {
      if (c) {
        const g = typeof h == "function" ? h(e) : h;
        g !== e && u(g);
      } else
        s(h);
    },
    [c, e, s, u]
  );
  return [l, f];
}
function pA({
  defaultProp: e,
  onChange: t
}) {
  const r = b.useState(e), [o] = r, s = b.useRef(o), c = Fn(t);
  return b.useEffect(() => {
    s.current !== o && (c(o), s.current = o);
  }, [o, s, c]), r;
}
function mA(e) {
  const t = b.useRef({ value: e, previous: e });
  return b.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
var gA = "VisuallyHidden", fu = b.forwardRef(
  (e, t) => /* @__PURE__ */ v.jsx(
    Le.span,
    {
      ...e,
      ref: t,
      style: {
        // See: https://github.com/twbs/bootstrap/blob/master/scss/mixins/_screen-reader.scss
        position: "absolute",
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal",
        ...e.style
      }
    }
  )
);
fu.displayName = gA;
var vA = fu, yA = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, si = /* @__PURE__ */ new WeakMap(), Os = /* @__PURE__ */ new WeakMap(), Ns = {}, rc = 0, ag = function(e) {
  return e && (e.host || ag(e.parentNode));
}, xA = function(e, t) {
  return t.map(function(r) {
    if (e.contains(r))
      return r;
    var o = ag(r);
    return o && e.contains(o) ? o : (console.error("aria-hidden", r, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(r) {
    return !!r;
  });
}, wA = function(e, t, r, o) {
  var s = xA(t, Array.isArray(e) ? e : [e]);
  Ns[r] || (Ns[r] = /* @__PURE__ */ new WeakMap());
  var c = Ns[r], l = [], u = /* @__PURE__ */ new Set(), f = new Set(s), h = function(g) {
    !g || u.has(g) || (u.add(g), h(g.parentNode));
  };
  s.forEach(h);
  var p = function(g) {
    !g || f.has(g) || Array.prototype.forEach.call(g.children, function(y) {
      if (u.has(y))
        p(y);
      else
        try {
          var C = y.getAttribute(o), T = C !== null && C !== "false", S = (si.get(y) || 0) + 1, _ = (c.get(y) || 0) + 1;
          si.set(y, S), c.set(y, _), l.push(y), S === 1 && T && Os.set(y, !0), _ === 1 && y.setAttribute(r, "true"), T || y.setAttribute(o, "true");
        } catch (A) {
          console.error("aria-hidden: cannot operate on ", y, A);
        }
    });
  };
  return p(t), u.clear(), rc++, function() {
    l.forEach(function(g) {
      var y = si.get(g) - 1, C = c.get(g) - 1;
      si.set(g, y), c.set(g, C), y || (Os.has(g) || g.removeAttribute(o), Os.delete(g)), C || g.removeAttribute(r);
    }), rc--, rc || (si = /* @__PURE__ */ new WeakMap(), si = /* @__PURE__ */ new WeakMap(), Os = /* @__PURE__ */ new WeakMap(), Ns = {});
  };
}, lg = function(e, t, r) {
  r === void 0 && (r = "data-aria-hidden");
  var o = Array.from(Array.isArray(e) ? e : [e]), s = yA(e);
  return s ? (o.push.apply(o, Array.from(s.querySelectorAll("[aria-live]"))), wA(o, s, r, "aria-hidden")) : function() {
    return null;
  };
}, ir = function() {
  return ir = Object.assign || function(t) {
    for (var r, o = 1, s = arguments.length; o < s; o++) {
      r = arguments[o];
      for (var c in r)
        Object.prototype.hasOwnProperty.call(r, c) && (t[c] = r[c]);
    }
    return t;
  }, ir.apply(this, arguments);
};
function bA(e, t) {
  var r = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (r[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, o = Object.getOwnPropertySymbols(e); s < o.length; s++)
      t.indexOf(o[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[s]) && (r[o[s]] = e[o[s]]);
  return r;
}
function SA(e, t, r) {
  if (r || arguments.length === 2)
    for (var o = 0, s = t.length, c; o < s; o++)
      (c || !(o in t)) && (c || (c = Array.prototype.slice.call(t, 0, o)), c[o] = t[o]);
  return e.concat(c || Array.prototype.slice.call(t));
}
var Bs = "right-scroll-bar-position", Ws = "width-before-scroll-bar", CA = "with-scroll-bars-hidden", _A = "--removed-body-scroll-bar-size";
function ic(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function TA(e, t) {
  var r = vo(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return r.value;
        },
        set current(o) {
          var s = r.value;
          s !== o && (r.value = o, r.callback(o, s));
        }
      }
    };
  })[0];
  return r.callback = t, r.facade;
}
var PA = typeof window < "u" ? b.useLayoutEffect : b.useEffect, Yh = /* @__PURE__ */ new WeakMap();
function AA(e, t) {
  var r = TA(null, function(o) {
    return e.forEach(function(s) {
      return ic(s, o);
    });
  });
  return PA(function() {
    var o = Yh.get(r);
    if (o) {
      var s = new Set(o), c = new Set(e), l = r.current;
      s.forEach(function(u) {
        c.has(u) || ic(u, null);
      }), c.forEach(function(u) {
        s.has(u) || ic(u, l);
      });
    }
    Yh.set(r, e);
  }, [e]), r;
}
var Js = function() {
  return Js = Object.assign || function(t) {
    for (var r, o = 1, s = arguments.length; o < s; o++) {
      r = arguments[o];
      for (var c in r)
        Object.prototype.hasOwnProperty.call(r, c) && (t[c] = r[c]);
    }
    return t;
  }, Js.apply(this, arguments);
};
function EA(e, t) {
  var r = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (r[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, o = Object.getOwnPropertySymbols(e); s < o.length; s++)
      t.indexOf(o[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[s]) && (r[o[s]] = e[o[s]]);
  return r;
}
function RA(e) {
  return e;
}
function OA(e, t) {
  t === void 0 && (t = RA);
  var r = [], o = !1, s = {
    read: function() {
      if (o)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return r.length ? r[r.length - 1] : e;
    },
    useMedium: function(c) {
      var l = t(c, o);
      return r.push(l), function() {
        r = r.filter(function(u) {
          return u !== l;
        });
      };
    },
    assignSyncMedium: function(c) {
      for (o = !0; r.length; ) {
        var l = r;
        r = [], l.forEach(c);
      }
      r = {
        push: function(u) {
          return c(u);
        },
        filter: function() {
          return r;
        }
      };
    },
    assignMedium: function(c) {
      o = !0;
      var l = [];
      if (r.length) {
        var u = r;
        r = [], u.forEach(c), l = r;
      }
      var f = function() {
        var p = l;
        l = [], p.forEach(c);
      }, h = function() {
        return Promise.resolve().then(f);
      };
      h(), r = {
        push: function(p) {
          l.push(p), h();
        },
        filter: function(p) {
          return l = l.filter(p), r;
        }
      };
    }
  };
  return s;
}
function NA(e) {
  e === void 0 && (e = {});
  var t = OA(null);
  return t.options = Js({ async: !0, ssr: !1 }, e), t;
}
var cg = function(e) {
  var t = e.sideCar, r = EA(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var o = t.read();
  if (!o)
    throw new Error("Sidecar medium not found");
  return b.createElement(o, Js({}, r));
};
cg.isSideCarExport = !0;
function MA(e, t) {
  return e.useMedium(t), cg;
}
var ug = NA(), oc = function() {
}, ga = b.forwardRef(function(e, t) {
  var r = b.useRef(null), o = b.useState({
    onScrollCapture: oc,
    onWheelCapture: oc,
    onTouchMoveCapture: oc
  }), s = o[0], c = o[1], l = e.forwardProps, u = e.children, f = e.className, h = e.removeScrollBar, p = e.enabled, g = e.shards, y = e.sideCar, C = e.noIsolation, T = e.inert, S = e.allowPinchZoom, _ = e.as, A = _ === void 0 ? "div" : _, R = e.gapMode, N = bA(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), L = y, j = AA([r, t]), H = ir(ir({}, N), s);
  return b.createElement(
    b.Fragment,
    null,
    p && b.createElement(L, { sideCar: ug, removeScrollBar: h, shards: g, noIsolation: C, inert: T, setCallbacks: c, allowPinchZoom: !!S, lockRef: r, gapMode: R }),
    l ? b.cloneElement(b.Children.only(u), ir(ir({}, H), { ref: j })) : b.createElement(A, ir({}, H, { className: f, ref: j }), u)
  );
});
ga.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
ga.classNames = {
  fullWidth: Ws,
  zeroRight: Bs
};
var DA = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function IA() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = DA();
  return t && e.setAttribute("nonce", t), e;
}
function LA(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function jA(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var kA = function() {
  var e = 0, t = null;
  return {
    add: function(r) {
      e == 0 && (t = IA()) && (LA(t, r), jA(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, VA = function() {
  var e = kA();
  return function(t, r) {
    b.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && r]);
  };
}, fg = function() {
  var e = VA(), t = function(r) {
    var o = r.styles, s = r.dynamic;
    return e(o, s), null;
  };
  return t;
}, FA = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, sc = function(e) {
  return parseInt(e || "", 10) || 0;
}, BA = function(e) {
  var t = window.getComputedStyle(document.body), r = t[e === "padding" ? "paddingLeft" : "marginLeft"], o = t[e === "padding" ? "paddingTop" : "marginTop"], s = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [sc(r), sc(o), sc(s)];
}, WA = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return FA;
  var t = BA(e), r = document.documentElement.clientWidth, o = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, o - r + t[2] - t[0])
  };
}, $A = fg(), gi = "data-scroll-locked", UA = function(e, t, r, o) {
  var s = e.left, c = e.top, l = e.right, u = e.gap;
  return r === void 0 && (r = "margin"), `
  .`.concat(CA, ` {
   overflow: hidden `).concat(o, `;
   padding-right: `).concat(u, "px ").concat(o, `;
  }
  body[`).concat(gi, `] {
    overflow: hidden `).concat(o, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(o, ";"),
    r === "margin" && `
    padding-left: `.concat(s, `px;
    padding-top: `).concat(c, `px;
    padding-right: `).concat(l, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(u, "px ").concat(o, `;
    `),
    r === "padding" && "padding-right: ".concat(u, "px ").concat(o, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(Bs, ` {
    right: `).concat(u, "px ").concat(o, `;
  }
  
  .`).concat(Ws, ` {
    margin-right: `).concat(u, "px ").concat(o, `;
  }
  
  .`).concat(Bs, " .").concat(Bs, ` {
    right: 0 `).concat(o, `;
  }
  
  .`).concat(Ws, " .").concat(Ws, ` {
    margin-right: 0 `).concat(o, `;
  }
  
  body[`).concat(gi, `] {
    `).concat(_A, ": ").concat(u, `px;
  }
`);
}, qh = function() {
  var e = parseInt(document.body.getAttribute(gi) || "0", 10);
  return isFinite(e) ? e : 0;
}, HA = function() {
  b.useEffect(function() {
    return document.body.setAttribute(gi, (qh() + 1).toString()), function() {
      var e = qh() - 1;
      e <= 0 ? document.body.removeAttribute(gi) : document.body.setAttribute(gi, e.toString());
    };
  }, []);
}, zA = function(e) {
  var t = e.noRelative, r = e.noImportant, o = e.gapMode, s = o === void 0 ? "margin" : o;
  HA();
  var c = b.useMemo(function() {
    return WA(s);
  }, [s]);
  return b.createElement($A, { styles: UA(c, !t, s, r ? "" : "!important") });
}, Ec = !1;
if (typeof window < "u")
  try {
    var Ms = Object.defineProperty({}, "passive", {
      get: function() {
        return Ec = !0, !0;
      }
    });
    window.addEventListener("test", Ms, Ms), window.removeEventListener("test", Ms, Ms);
  } catch {
    Ec = !1;
  }
var ai = Ec ? { passive: !1 } : !1, GA = function(e) {
  return e.tagName === "TEXTAREA";
}, dg = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var r = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    r[t] !== "hidden" && // contains scroll inside self
    !(r.overflowY === r.overflowX && !GA(e) && r[t] === "visible")
  );
}, KA = function(e) {
  return dg(e, "overflowY");
}, YA = function(e) {
  return dg(e, "overflowX");
}, Xh = function(e, t) {
  var r = t.ownerDocument, o = t;
  do {
    typeof ShadowRoot < "u" && o instanceof ShadowRoot && (o = o.host);
    var s = hg(e, o);
    if (s) {
      var c = pg(e, o), l = c[1], u = c[2];
      if (l > u)
        return !0;
    }
    o = o.parentNode;
  } while (o && o !== r.body);
  return !1;
}, qA = function(e) {
  var t = e.scrollTop, r = e.scrollHeight, o = e.clientHeight;
  return [
    t,
    r,
    o
  ];
}, XA = function(e) {
  var t = e.scrollLeft, r = e.scrollWidth, o = e.clientWidth;
  return [
    t,
    r,
    o
  ];
}, hg = function(e, t) {
  return e === "v" ? KA(t) : YA(t);
}, pg = function(e, t) {
  return e === "v" ? qA(t) : XA(t);
}, ZA = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, JA = function(e, t, r, o, s) {
  var c = ZA(e, window.getComputedStyle(t).direction), l = c * o, u = r.target, f = t.contains(u), h = !1, p = l > 0, g = 0, y = 0;
  do {
    var C = pg(e, u), T = C[0], S = C[1], _ = C[2], A = S - _ - c * T;
    (T || A) && hg(e, u) && (g += A, y += T), u instanceof ShadowRoot ? u = u.host : u = u.parentNode;
  } while (
    // portaled content
    !f && u !== document.body || // self content
    f && (t.contains(u) || t === u)
  );
  return (p && (Math.abs(g) < 1 || !s) || !p && (Math.abs(y) < 1 || !s)) && (h = !0), h;
}, Ds = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Zh = function(e) {
  return [e.deltaX, e.deltaY];
}, Jh = function(e) {
  return e && "current" in e ? e.current : e;
}, QA = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, eE = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, tE = 0, li = [];
function nE(e) {
  var t = b.useRef([]), r = b.useRef([0, 0]), o = b.useRef(), s = b.useState(tE++)[0], c = b.useState(fg)[0], l = b.useRef(e);
  b.useEffect(function() {
    l.current = e;
  }, [e]), b.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(s));
      var S = SA([e.lockRef.current], (e.shards || []).map(Jh), !0).filter(Boolean);
      return S.forEach(function(_) {
        return _.classList.add("allow-interactivity-".concat(s));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(s)), S.forEach(function(_) {
          return _.classList.remove("allow-interactivity-".concat(s));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var u = b.useCallback(function(S, _) {
    if ("touches" in S && S.touches.length === 2 || S.type === "wheel" && S.ctrlKey)
      return !l.current.allowPinchZoom;
    var A = Ds(S), R = r.current, N = "deltaX" in S ? S.deltaX : R[0] - A[0], L = "deltaY" in S ? S.deltaY : R[1] - A[1], j, H = S.target, $ = Math.abs(N) > Math.abs(L) ? "h" : "v";
    if ("touches" in S && $ === "h" && H.type === "range")
      return !1;
    var U = Xh($, H);
    if (!U)
      return !0;
    if (U ? j = $ : (j = $ === "v" ? "h" : "v", U = Xh($, H)), !U)
      return !1;
    if (!o.current && "changedTouches" in S && (N || L) && (o.current = j), !j)
      return !0;
    var J = o.current || j;
    return JA(J, _, S, J === "h" ? N : L, !0);
  }, []), f = b.useCallback(function(S) {
    var _ = S;
    if (!(!li.length || li[li.length - 1] !== c)) {
      var A = "deltaY" in _ ? Zh(_) : Ds(_), R = t.current.filter(function(j) {
        return j.name === _.type && (j.target === _.target || _.target === j.shadowParent) && QA(j.delta, A);
      })[0];
      if (R && R.should) {
        _.cancelable && _.preventDefault();
        return;
      }
      if (!R) {
        var N = (l.current.shards || []).map(Jh).filter(Boolean).filter(function(j) {
          return j.contains(_.target);
        }), L = N.length > 0 ? u(_, N[0]) : !l.current.noIsolation;
        L && _.cancelable && _.preventDefault();
      }
    }
  }, []), h = b.useCallback(function(S, _, A, R) {
    var N = { name: S, delta: _, target: A, should: R, shadowParent: rE(A) };
    t.current.push(N), setTimeout(function() {
      t.current = t.current.filter(function(L) {
        return L !== N;
      });
    }, 1);
  }, []), p = b.useCallback(function(S) {
    r.current = Ds(S), o.current = void 0;
  }, []), g = b.useCallback(function(S) {
    h(S.type, Zh(S), S.target, u(S, e.lockRef.current));
  }, []), y = b.useCallback(function(S) {
    h(S.type, Ds(S), S.target, u(S, e.lockRef.current));
  }, []);
  b.useEffect(function() {
    return li.push(c), e.setCallbacks({
      onScrollCapture: g,
      onWheelCapture: g,
      onTouchMoveCapture: y
    }), document.addEventListener("wheel", f, ai), document.addEventListener("touchmove", f, ai), document.addEventListener("touchstart", p, ai), function() {
      li = li.filter(function(S) {
        return S !== c;
      }), document.removeEventListener("wheel", f, ai), document.removeEventListener("touchmove", f, ai), document.removeEventListener("touchstart", p, ai);
    };
  }, []);
  var C = e.removeScrollBar, T = e.inert;
  return b.createElement(
    b.Fragment,
    null,
    T ? b.createElement(c, { styles: eE(s) }) : null,
    C ? b.createElement(zA, { gapMode: e.gapMode }) : null
  );
}
function rE(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const iE = MA(ug, nE);
var du = b.forwardRef(function(e, t) {
  return b.createElement(ga, ir({}, e, { ref: t, sideCar: iE }));
});
du.classNames = ga.classNames;
var oE = [" ", "Enter", "ArrowUp", "ArrowDown"], sE = [" ", "Enter"], Eo = "Select", [va, ya, aE] = LT(Eo), [Pi, oI] = Qc(Eo, [
  aE,
  ma
]), xa = ma(), [lE, mr] = Pi(Eo), [cE, uE] = Pi(Eo), mg = (e) => {
  const {
    __scopeSelect: t,
    children: r,
    open: o,
    defaultOpen: s,
    onOpenChange: c,
    value: l,
    defaultValue: u,
    onValueChange: f,
    dir: h,
    name: p,
    autoComplete: g,
    disabled: y,
    required: C,
    form: T
  } = e, S = xa(t), [_, A] = b.useState(null), [R, N] = b.useState(null), [L, j] = b.useState(!1), H = FT(h), [$ = !1, U] = Zs({
    prop: o,
    defaultProp: s,
    onChange: c
  }), [J, ee] = Zs({
    prop: l,
    defaultProp: u,
    onChange: f
  }), he = b.useRef(null), Z = _ ? T || !!_.closest("form") : !0, [ae, te] = b.useState(/* @__PURE__ */ new Set()), Te = Array.from(ae).map((le) => le.props.value).join(";");
  return /* @__PURE__ */ v.jsx(rg, { ...S, children: /* @__PURE__ */ v.jsxs(
    lE,
    {
      required: C,
      scope: t,
      trigger: _,
      onTriggerChange: A,
      valueNode: R,
      onValueNodeChange: N,
      valueNodeHasChildren: L,
      onValueNodeHasChildrenChange: j,
      contentId: Ir(),
      value: J,
      onValueChange: ee,
      open: $,
      onOpenChange: U,
      dir: H,
      triggerPointerDownPosRef: he,
      disabled: y,
      children: [
        /* @__PURE__ */ v.jsx(va.Provider, { scope: t, children: /* @__PURE__ */ v.jsx(
          cE,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: b.useCallback((le) => {
              te((X) => new Set(X).add(le));
            }, []),
            onNativeOptionRemove: b.useCallback((le) => {
              te((X) => {
                const K = new Set(X);
                return K.delete(le), K;
              });
            }, []),
            children: r
          }
        ) }),
        Z ? /* @__PURE__ */ v.jsxs(
          Bg,
          {
            "aria-hidden": !0,
            required: C,
            tabIndex: -1,
            name: p,
            autoComplete: g,
            value: J,
            onChange: (le) => ee(le.target.value),
            disabled: y,
            form: T,
            children: [
              J === void 0 ? /* @__PURE__ */ v.jsx("option", { value: "" }) : null,
              Array.from(ae)
            ]
          },
          Te
        ) : null
      ]
    }
  ) });
};
mg.displayName = Eo;
var gg = "SelectTrigger", vg = b.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, disabled: o = !1, ...s } = e, c = xa(r), l = mr(gg, r), u = l.disabled || o, f = Ye(t, l.onTriggerChange), h = ya(r), p = b.useRef("touch"), [g, y, C] = Wg((S) => {
      const _ = h().filter((N) => !N.disabled), A = _.find((N) => N.value === l.value), R = $g(_, S, A);
      R !== void 0 && l.onValueChange(R.value);
    }), T = (S) => {
      u || (l.onOpenChange(!0), C()), S && (l.triggerPointerDownPosRef.current = {
        x: Math.round(S.pageX),
        y: Math.round(S.pageY)
      });
    };
    return /* @__PURE__ */ v.jsx(ig, { asChild: !0, ...c, children: /* @__PURE__ */ v.jsx(
      Le.button,
      {
        type: "button",
        role: "combobox",
        "aria-controls": l.contentId,
        "aria-expanded": l.open,
        "aria-required": l.required,
        "aria-autocomplete": "none",
        dir: l.dir,
        "data-state": l.open ? "open" : "closed",
        disabled: u,
        "data-disabled": u ? "" : void 0,
        "data-placeholder": Fg(l.value) ? "" : void 0,
        ...s,
        ref: f,
        onClick: Oe(s.onClick, (S) => {
          S.currentTarget.focus(), p.current !== "mouse" && T(S);
        }),
        onPointerDown: Oe(s.onPointerDown, (S) => {
          p.current = S.pointerType;
          const _ = S.target;
          _.hasPointerCapture(S.pointerId) && _.releasePointerCapture(S.pointerId), S.button === 0 && S.ctrlKey === !1 && S.pointerType === "mouse" && (T(S), S.preventDefault());
        }),
        onKeyDown: Oe(s.onKeyDown, (S) => {
          const _ = g.current !== "";
          !(S.ctrlKey || S.altKey || S.metaKey) && S.key.length === 1 && y(S.key), !(_ && S.key === " ") && oE.includes(S.key) && (T(), S.preventDefault());
        })
      }
    ) });
  }
);
vg.displayName = gg;
var yg = "SelectValue", xg = b.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, className: o, style: s, children: c, placeholder: l = "", ...u } = e, f = mr(yg, r), { onValueNodeHasChildrenChange: h } = f, p = c !== void 0, g = Ye(t, f.onValueNodeChange);
    return Ct(() => {
      h(p);
    }, [h, p]), /* @__PURE__ */ v.jsx(
      Le.span,
      {
        ...u,
        ref: g,
        style: { pointerEvents: "none" },
        children: Fg(f.value) ? /* @__PURE__ */ v.jsx(v.Fragment, { children: l }) : c
      }
    );
  }
);
xg.displayName = yg;
var fE = "SelectIcon", wg = b.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, children: o, ...s } = e;
    return /* @__PURE__ */ v.jsx(Le.span, { "aria-hidden": !0, ...s, ref: t, children: o || "▼" });
  }
);
wg.displayName = fE;
var dE = "SelectPortal", bg = (e) => /* @__PURE__ */ v.jsx(uu, { asChild: !0, ...e });
bg.displayName = dE;
var Vr = "SelectContent", Sg = b.forwardRef(
  (e, t) => {
    const r = mr(Vr, e.__scopeSelect), [o, s] = b.useState();
    if (Ct(() => {
      s(new DocumentFragment());
    }, []), !r.open) {
      const c = o;
      return c ? ca.createPortal(
        /* @__PURE__ */ v.jsx(Cg, { scope: e.__scopeSelect, children: /* @__PURE__ */ v.jsx(va.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ v.jsx("div", { children: e.children }) }) }),
        c
      ) : null;
    }
    return /* @__PURE__ */ v.jsx(_g, { ...e, ref: t });
  }
);
Sg.displayName = Vr;
var on = 10, [Cg, gr] = Pi(Vr), hE = "SelectContentImpl", _g = b.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: r,
      position: o = "item-aligned",
      onCloseAutoFocus: s,
      onEscapeKeyDown: c,
      onPointerDownOutside: l,
      //
      // PopperContent props
      side: u,
      sideOffset: f,
      align: h,
      alignOffset: p,
      arrowPadding: g,
      collisionBoundary: y,
      collisionPadding: C,
      sticky: T,
      hideWhenDetached: S,
      avoidCollisions: _,
      //
      ...A
    } = e, R = mr(Vr, r), [N, L] = b.useState(null), [j, H] = b.useState(null), $ = Ye(t, (ne) => L(ne)), [U, J] = b.useState(null), [ee, he] = b.useState(
      null
    ), Z = ya(r), [ae, te] = b.useState(!1), Te = b.useRef(!1);
    b.useEffect(() => {
      if (N)
        return lg(N);
    }, [N]), jm();
    const le = b.useCallback(
      (ne) => {
        const [xe, ...Ve] = Z().map((we) => we.ref.current), [Ae] = Ve.slice(-1), Ce = document.activeElement;
        for (const we of ne)
          if (we === Ce || (we == null || we.scrollIntoView({ block: "nearest" }), we === xe && j && (j.scrollTop = 0), we === Ae && j && (j.scrollTop = j.scrollHeight), we == null || we.focus(), document.activeElement !== Ce))
            return;
      },
      [Z, j]
    ), X = b.useCallback(
      () => le([U, N]),
      [le, U, N]
    );
    b.useEffect(() => {
      ae && X();
    }, [ae, X]);
    const { onOpenChange: K, triggerPointerDownPosRef: pe } = R;
    b.useEffect(() => {
      if (N) {
        let ne = { x: 0, y: 0 };
        const xe = (Ae) => {
          var Ce, we;
          ne = {
            x: Math.abs(Math.round(Ae.pageX) - (((Ce = pe.current) == null ? void 0 : Ce.x) ?? 0)),
            y: Math.abs(Math.round(Ae.pageY) - (((we = pe.current) == null ? void 0 : we.y) ?? 0))
          };
        }, Ve = (Ae) => {
          ne.x <= 10 && ne.y <= 10 ? Ae.preventDefault() : N.contains(Ae.target) || K(!1), document.removeEventListener("pointermove", xe), pe.current = null;
        };
        return pe.current !== null && (document.addEventListener("pointermove", xe), document.addEventListener("pointerup", Ve, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", xe), document.removeEventListener("pointerup", Ve, { capture: !0 });
        };
      }
    }, [N, K, pe]), b.useEffect(() => {
      const ne = () => K(!1);
      return window.addEventListener("blur", ne), window.addEventListener("resize", ne), () => {
        window.removeEventListener("blur", ne), window.removeEventListener("resize", ne);
      };
    }, [K]);
    const [Me, Pe] = Wg((ne) => {
      const xe = Z().filter((Ce) => !Ce.disabled), Ve = xe.find((Ce) => Ce.ref.current === document.activeElement), Ae = $g(xe, ne, Ve);
      Ae && setTimeout(() => Ae.ref.current.focus());
    }), cn = b.useCallback(
      (ne, xe, Ve) => {
        const Ae = !Te.current && !Ve;
        (R.value !== void 0 && R.value === xe || Ae) && (J(ne), Ae && (Te.current = !0));
      },
      [R.value]
    ), un = b.useCallback(() => N == null ? void 0 : N.focus(), [N]), Bt = b.useCallback(
      (ne, xe, Ve) => {
        const Ae = !Te.current && !Ve;
        (R.value !== void 0 && R.value === xe || Ae) && he(ne);
      },
      [R.value]
    ), xt = o === "popper" ? Rc : Tg, dt = xt === Rc ? {
      side: u,
      sideOffset: f,
      align: h,
      alignOffset: p,
      arrowPadding: g,
      collisionBoundary: y,
      collisionPadding: C,
      sticky: T,
      hideWhenDetached: S,
      avoidCollisions: _
    } : {};
    return /* @__PURE__ */ v.jsx(
      Cg,
      {
        scope: r,
        content: N,
        viewport: j,
        onViewportChange: H,
        itemRefCallback: cn,
        selectedItem: U,
        onItemLeave: un,
        itemTextRefCallback: Bt,
        focusSelectedItem: X,
        selectedItemText: ee,
        position: o,
        isPositioned: ae,
        searchRef: Me,
        children: /* @__PURE__ */ v.jsx(du, { as: jr, allowPinchZoom: !0, children: /* @__PURE__ */ v.jsx(
          eu,
          {
            asChild: !0,
            trapped: R.open,
            onMountAutoFocus: (ne) => {
              ne.preventDefault();
            },
            onUnmountAutoFocus: Oe(s, (ne) => {
              var xe;
              (xe = R.trigger) == null || xe.focus({ preventScroll: !0 }), ne.preventDefault();
            }),
            children: /* @__PURE__ */ v.jsx(
              fa,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: c,
                onPointerDownOutside: l,
                onFocusOutside: (ne) => ne.preventDefault(),
                onDismiss: () => R.onOpenChange(!1),
                children: /* @__PURE__ */ v.jsx(
                  xt,
                  {
                    role: "listbox",
                    id: R.contentId,
                    "data-state": R.open ? "open" : "closed",
                    dir: R.dir,
                    onContextMenu: (ne) => ne.preventDefault(),
                    ...A,
                    ...dt,
                    onPlaced: () => te(!0),
                    ref: $,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...A.style
                    },
                    onKeyDown: Oe(A.onKeyDown, (ne) => {
                      const xe = ne.ctrlKey || ne.altKey || ne.metaKey;
                      if (ne.key === "Tab" && ne.preventDefault(), !xe && ne.key.length === 1 && Pe(ne.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(ne.key)) {
                        let Ae = Z().filter((Ce) => !Ce.disabled).map((Ce) => Ce.ref.current);
                        if (["ArrowUp", "End"].includes(ne.key) && (Ae = Ae.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(ne.key)) {
                          const Ce = ne.target, we = Ae.indexOf(Ce);
                          Ae = Ae.slice(we + 1);
                        }
                        setTimeout(() => le(Ae)), ne.preventDefault();
                      }
                    })
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }
);
_g.displayName = hE;
var pE = "SelectItemAlignedPosition", Tg = b.forwardRef((e, t) => {
  const { __scopeSelect: r, onPlaced: o, ...s } = e, c = mr(Vr, r), l = gr(Vr, r), [u, f] = b.useState(null), [h, p] = b.useState(null), g = Ye(t, ($) => p($)), y = ya(r), C = b.useRef(!1), T = b.useRef(!0), { viewport: S, selectedItem: _, selectedItemText: A, focusSelectedItem: R } = l, N = b.useCallback(() => {
    if (c.trigger && c.valueNode && u && h && S && _ && A) {
      const $ = c.trigger.getBoundingClientRect(), U = h.getBoundingClientRect(), J = c.valueNode.getBoundingClientRect(), ee = A.getBoundingClientRect();
      if (c.dir !== "rtl") {
        const Ce = ee.left - U.left, we = J.left - Ce, nt = $.left - we, Ue = $.width + nt, ht = Math.max(Ue, U.width), Rt = window.innerWidth - on, rt = Mh(we, [
          on,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(on, Rt - ht)
        ]);
        u.style.minWidth = Ue + "px", u.style.left = rt + "px";
      } else {
        const Ce = U.right - ee.right, we = window.innerWidth - J.right - Ce, nt = window.innerWidth - $.right - we, Ue = $.width + nt, ht = Math.max(Ue, U.width), Rt = window.innerWidth - on, rt = Mh(we, [
          on,
          Math.max(on, Rt - ht)
        ]);
        u.style.minWidth = Ue + "px", u.style.right = rt + "px";
      }
      const he = y(), Z = window.innerHeight - on * 2, ae = S.scrollHeight, te = window.getComputedStyle(h), Te = parseInt(te.borderTopWidth, 10), le = parseInt(te.paddingTop, 10), X = parseInt(te.borderBottomWidth, 10), K = parseInt(te.paddingBottom, 10), pe = Te + le + ae + K + X, Me = Math.min(_.offsetHeight * 5, pe), Pe = window.getComputedStyle(S), cn = parseInt(Pe.paddingTop, 10), un = parseInt(Pe.paddingBottom, 10), Bt = $.top + $.height / 2 - on, xt = Z - Bt, dt = _.offsetHeight / 2, ne = _.offsetTop + dt, xe = Te + le + ne, Ve = pe - xe;
      if (xe <= Bt) {
        const Ce = he.length > 0 && _ === he[he.length - 1].ref.current;
        u.style.bottom = "0px";
        const we = h.clientHeight - S.offsetTop - S.offsetHeight, nt = Math.max(
          xt,
          dt + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (Ce ? un : 0) + we + X
        ), Ue = xe + nt;
        u.style.height = Ue + "px";
      } else {
        const Ce = he.length > 0 && _ === he[0].ref.current;
        u.style.top = "0px";
        const nt = Math.max(
          Bt,
          Te + S.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (Ce ? cn : 0) + dt
        ) + Ve;
        u.style.height = nt + "px", S.scrollTop = xe - Bt + S.offsetTop;
      }
      u.style.margin = `${on}px 0`, u.style.minHeight = Me + "px", u.style.maxHeight = Z + "px", o == null || o(), requestAnimationFrame(() => C.current = !0);
    }
  }, [
    y,
    c.trigger,
    c.valueNode,
    u,
    h,
    S,
    _,
    A,
    c.dir,
    o
  ]);
  Ct(() => N(), [N]);
  const [L, j] = b.useState();
  Ct(() => {
    h && j(window.getComputedStyle(h).zIndex);
  }, [h]);
  const H = b.useCallback(
    ($) => {
      $ && T.current === !0 && (N(), R == null || R(), T.current = !1);
    },
    [N, R]
  );
  return /* @__PURE__ */ v.jsx(
    gE,
    {
      scope: r,
      contentWrapper: u,
      shouldExpandOnScrollRef: C,
      onScrollButtonChange: H,
      children: /* @__PURE__ */ v.jsx(
        "div",
        {
          ref: f,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: L
          },
          children: /* @__PURE__ */ v.jsx(
            Le.div,
            {
              ...s,
              ref: g,
              style: {
                // When we get the height of the content, it includes borders. If we were to set
                // the height without having `boxSizing: 'border-box'` it would be too big.
                boxSizing: "border-box",
                // We need to ensure the content doesn't get taller than the wrapper
                maxHeight: "100%",
                ...s.style
              }
            }
          )
        }
      )
    }
  );
});
Tg.displayName = pE;
var mE = "SelectPopperPosition", Rc = b.forwardRef((e, t) => {
  const {
    __scopeSelect: r,
    align: o = "start",
    collisionPadding: s = on,
    ...c
  } = e, l = xa(r);
  return /* @__PURE__ */ v.jsx(
    og,
    {
      ...l,
      ...c,
      ref: t,
      align: o,
      collisionPadding: s,
      style: {
        // Ensure border-box for floating-ui calculations
        boxSizing: "border-box",
        ...c.style,
        "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-select-content-available-width": "var(--radix-popper-available-width)",
        "--radix-select-content-available-height": "var(--radix-popper-available-height)",
        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
Rc.displayName = mE;
var [gE, hu] = Pi(Vr, {}), Oc = "SelectViewport", Pg = b.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, nonce: o, ...s } = e, c = gr(Oc, r), l = hu(Oc, r), u = Ye(t, c.onViewportChange), f = b.useRef(0);
    return /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
      /* @__PURE__ */ v.jsx(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: o
        }
      ),
      /* @__PURE__ */ v.jsx(va.Slot, { scope: r, children: /* @__PURE__ */ v.jsx(
        Le.div,
        {
          "data-radix-select-viewport": "",
          role: "presentation",
          ...s,
          ref: u,
          style: {
            // we use position: 'relative' here on the `viewport` so that when we call
            // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
            // (independent of the scrollUpButton).
            position: "relative",
            flex: 1,
            // Viewport should only be scrollable in the vertical direction.
            // This won't work in vertical writing modes, so we'll need to
            // revisit this if/when that is supported
            // https://developer.chrome.com/blog/vertical-form-controls
            overflow: "hidden auto",
            ...s.style
          },
          onScroll: Oe(s.onScroll, (h) => {
            const p = h.currentTarget, { contentWrapper: g, shouldExpandOnScrollRef: y } = l;
            if (y != null && y.current && g) {
              const C = Math.abs(f.current - p.scrollTop);
              if (C > 0) {
                const T = window.innerHeight - on * 2, S = parseFloat(g.style.minHeight), _ = parseFloat(g.style.height), A = Math.max(S, _);
                if (A < T) {
                  const R = A + C, N = Math.min(T, R), L = R - N;
                  g.style.height = N + "px", g.style.bottom === "0px" && (p.scrollTop = L > 0 ? L : 0, g.style.justifyContent = "flex-end");
                }
              }
            }
            f.current = p.scrollTop;
          })
        }
      ) })
    ] });
  }
);
Pg.displayName = Oc;
var Ag = "SelectGroup", [vE, yE] = Pi(Ag), xE = b.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...o } = e, s = Ir();
    return /* @__PURE__ */ v.jsx(vE, { scope: r, id: s, children: /* @__PURE__ */ v.jsx(Le.div, { role: "group", "aria-labelledby": s, ...o, ref: t }) });
  }
);
xE.displayName = Ag;
var Eg = "SelectLabel", Rg = b.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...o } = e, s = yE(Eg, r);
    return /* @__PURE__ */ v.jsx(Le.div, { id: s.id, ...o, ref: t });
  }
);
Rg.displayName = Eg;
var Qs = "SelectItem", [wE, Og] = Pi(Qs), Ng = b.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: r,
      value: o,
      disabled: s = !1,
      textValue: c,
      ...l
    } = e, u = mr(Qs, r), f = gr(Qs, r), h = u.value === o, [p, g] = b.useState(c ?? ""), [y, C] = b.useState(!1), T = Ye(
      t,
      (R) => {
        var N;
        return (N = f.itemRefCallback) == null ? void 0 : N.call(f, R, o, s);
      }
    ), S = Ir(), _ = b.useRef("touch"), A = () => {
      s || (u.onValueChange(o), u.onOpenChange(!1));
    };
    if (o === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ v.jsx(
      wE,
      {
        scope: r,
        value: o,
        disabled: s,
        textId: S,
        isSelected: h,
        onItemTextChange: b.useCallback((R) => {
          g((N) => N || ((R == null ? void 0 : R.textContent) ?? "").trim());
        }, []),
        children: /* @__PURE__ */ v.jsx(
          va.ItemSlot,
          {
            scope: r,
            value: o,
            disabled: s,
            textValue: p,
            children: /* @__PURE__ */ v.jsx(
              Le.div,
              {
                role: "option",
                "aria-labelledby": S,
                "data-highlighted": y ? "" : void 0,
                "aria-selected": h && y,
                "data-state": h ? "checked" : "unchecked",
                "aria-disabled": s || void 0,
                "data-disabled": s ? "" : void 0,
                tabIndex: s ? void 0 : -1,
                ...l,
                ref: T,
                onFocus: Oe(l.onFocus, () => C(!0)),
                onBlur: Oe(l.onBlur, () => C(!1)),
                onClick: Oe(l.onClick, () => {
                  _.current !== "mouse" && A();
                }),
                onPointerUp: Oe(l.onPointerUp, () => {
                  _.current === "mouse" && A();
                }),
                onPointerDown: Oe(l.onPointerDown, (R) => {
                  _.current = R.pointerType;
                }),
                onPointerMove: Oe(l.onPointerMove, (R) => {
                  var N;
                  _.current = R.pointerType, s ? (N = f.onItemLeave) == null || N.call(f) : _.current === "mouse" && R.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: Oe(l.onPointerLeave, (R) => {
                  var N;
                  R.currentTarget === document.activeElement && ((N = f.onItemLeave) == null || N.call(f));
                }),
                onKeyDown: Oe(l.onKeyDown, (R) => {
                  var L;
                  ((L = f.searchRef) == null ? void 0 : L.current) !== "" && R.key === " " || (sE.includes(R.key) && A(), R.key === " " && R.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
Ng.displayName = Qs;
var uo = "SelectItemText", Mg = b.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, className: o, style: s, ...c } = e, l = mr(uo, r), u = gr(uo, r), f = Og(uo, r), h = uE(uo, r), [p, g] = b.useState(null), y = Ye(
      t,
      (A) => g(A),
      f.onItemTextChange,
      (A) => {
        var R;
        return (R = u.itemTextRefCallback) == null ? void 0 : R.call(u, A, f.value, f.disabled);
      }
    ), C = p == null ? void 0 : p.textContent, T = b.useMemo(
      () => /* @__PURE__ */ v.jsx("option", { value: f.value, disabled: f.disabled, children: C }, f.value),
      [f.disabled, f.value, C]
    ), { onNativeOptionAdd: S, onNativeOptionRemove: _ } = h;
    return Ct(() => (S(T), () => _(T)), [S, _, T]), /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
      /* @__PURE__ */ v.jsx(Le.span, { id: f.textId, ...c, ref: y }),
      f.isSelected && l.valueNode && !l.valueNodeHasChildren ? ca.createPortal(c.children, l.valueNode) : null
    ] });
  }
);
Mg.displayName = uo;
var Dg = "SelectItemIndicator", Ig = b.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...o } = e;
    return Og(Dg, r).isSelected ? /* @__PURE__ */ v.jsx(Le.span, { "aria-hidden": !0, ...o, ref: t }) : null;
  }
);
Ig.displayName = Dg;
var Nc = "SelectScrollUpButton", Lg = b.forwardRef((e, t) => {
  const r = gr(Nc, e.__scopeSelect), o = hu(Nc, e.__scopeSelect), [s, c] = b.useState(!1), l = Ye(t, o.onScrollButtonChange);
  return Ct(() => {
    if (r.viewport && r.isPositioned) {
      let u = function() {
        const h = f.scrollTop > 0;
        c(h);
      };
      const f = r.viewport;
      return u(), f.addEventListener("scroll", u), () => f.removeEventListener("scroll", u);
    }
  }, [r.viewport, r.isPositioned]), s ? /* @__PURE__ */ v.jsx(
    kg,
    {
      ...e,
      ref: l,
      onAutoScroll: () => {
        const { viewport: u, selectedItem: f } = r;
        u && f && (u.scrollTop = u.scrollTop - f.offsetHeight);
      }
    }
  ) : null;
});
Lg.displayName = Nc;
var Mc = "SelectScrollDownButton", jg = b.forwardRef((e, t) => {
  const r = gr(Mc, e.__scopeSelect), o = hu(Mc, e.__scopeSelect), [s, c] = b.useState(!1), l = Ye(t, o.onScrollButtonChange);
  return Ct(() => {
    if (r.viewport && r.isPositioned) {
      let u = function() {
        const h = f.scrollHeight - f.clientHeight, p = Math.ceil(f.scrollTop) < h;
        c(p);
      };
      const f = r.viewport;
      return u(), f.addEventListener("scroll", u), () => f.removeEventListener("scroll", u);
    }
  }, [r.viewport, r.isPositioned]), s ? /* @__PURE__ */ v.jsx(
    kg,
    {
      ...e,
      ref: l,
      onAutoScroll: () => {
        const { viewport: u, selectedItem: f } = r;
        u && f && (u.scrollTop = u.scrollTop + f.offsetHeight);
      }
    }
  ) : null;
});
jg.displayName = Mc;
var kg = b.forwardRef((e, t) => {
  const { __scopeSelect: r, onAutoScroll: o, ...s } = e, c = gr("SelectScrollButton", r), l = b.useRef(null), u = ya(r), f = b.useCallback(() => {
    l.current !== null && (window.clearInterval(l.current), l.current = null);
  }, []);
  return b.useEffect(() => () => f(), [f]), Ct(() => {
    var p;
    const h = u().find((g) => g.ref.current === document.activeElement);
    (p = h == null ? void 0 : h.ref.current) == null || p.scrollIntoView({ block: "nearest" });
  }, [u]), /* @__PURE__ */ v.jsx(
    Le.div,
    {
      "aria-hidden": !0,
      ...s,
      ref: t,
      style: { flexShrink: 0, ...s.style },
      onPointerDown: Oe(s.onPointerDown, () => {
        l.current === null && (l.current = window.setInterval(o, 50));
      }),
      onPointerMove: Oe(s.onPointerMove, () => {
        var h;
        (h = c.onItemLeave) == null || h.call(c), l.current === null && (l.current = window.setInterval(o, 50));
      }),
      onPointerLeave: Oe(s.onPointerLeave, () => {
        f();
      })
    }
  );
}), bE = "SelectSeparator", Vg = b.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...o } = e;
    return /* @__PURE__ */ v.jsx(Le.div, { "aria-hidden": !0, ...o, ref: t });
  }
);
Vg.displayName = bE;
var Dc = "SelectArrow", SE = b.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...o } = e, s = xa(r), c = mr(Dc, r), l = gr(Dc, r);
    return c.open && l.position === "popper" ? /* @__PURE__ */ v.jsx(sg, { ...s, ...o, ref: t }) : null;
  }
);
SE.displayName = Dc;
function Fg(e) {
  return e === "" || e === void 0;
}
var Bg = b.forwardRef(
  (e, t) => {
    const { value: r, ...o } = e, s = b.useRef(null), c = Ye(t, s), l = mA(r);
    return b.useEffect(() => {
      const u = s.current, f = window.HTMLSelectElement.prototype, p = Object.getOwnPropertyDescriptor(
        f,
        "value"
      ).set;
      if (l !== r && p) {
        const g = new Event("change", { bubbles: !0 });
        p.call(u, r), u.dispatchEvent(g);
      }
    }, [l, r]), /* @__PURE__ */ v.jsx(fu, { asChild: !0, children: /* @__PURE__ */ v.jsx("select", { ...o, ref: c, defaultValue: r }) });
  }
);
Bg.displayName = "BubbleSelect";
function Wg(e) {
  const t = Fn(e), r = b.useRef(""), o = b.useRef(0), s = b.useCallback(
    (l) => {
      const u = r.current + l;
      t(u), function f(h) {
        r.current = h, window.clearTimeout(o.current), h !== "" && (o.current = window.setTimeout(() => f(""), 1e3));
      }(u);
    },
    [t]
  ), c = b.useCallback(() => {
    r.current = "", window.clearTimeout(o.current);
  }, []);
  return b.useEffect(() => () => window.clearTimeout(o.current), []), [r, s, c];
}
function $g(e, t, r) {
  const s = t.length > 1 && Array.from(t).every((h) => h === t[0]) ? t[0] : t, c = r ? e.indexOf(r) : -1;
  let l = CE(e, Math.max(c, 0));
  s.length === 1 && (l = l.filter((h) => h !== r));
  const f = l.find(
    (h) => h.textValue.toLowerCase().startsWith(s.toLowerCase())
  );
  return f !== r ? f : void 0;
}
function CE(e, t) {
  return e.map((r, o) => e[(t + o) % e.length]);
}
var _E = mg, Ug = vg, TE = xg, PE = wg, AE = bg, Hg = Sg, EE = Pg, zg = Rg, Gg = Ng, RE = Mg, OE = Ig, Kg = Lg, Yg = jg, qg = Vg;
const NE = _E, ME = TE, Xg = b.forwardRef(({ className: e, children: t, ...r }, o) => /* @__PURE__ */ v.jsxs(
  Ug,
  {
    ref: o,
    className: $e(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      e
    ),
    ...r,
    children: [
      t,
      /* @__PURE__ */ v.jsx(PE, { asChild: !0, children: /* @__PURE__ */ v.jsx(ua, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
Xg.displayName = Ug.displayName;
const Zg = b.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ v.jsx(
  Kg,
  {
    ref: r,
    className: $e(
      "flex cursor-default items-center justify-center py-1",
      e
    ),
    ...t,
    children: /* @__PURE__ */ v.jsx(V_, { className: "h-4 w-4" })
  }
));
Zg.displayName = Kg.displayName;
const Jg = b.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ v.jsx(
  Yg,
  {
    ref: r,
    className: $e(
      "flex cursor-default items-center justify-center py-1",
      e
    ),
    ...t,
    children: /* @__PURE__ */ v.jsx(ua, { className: "h-4 w-4" })
  }
));
Jg.displayName = Yg.displayName;
const Qg = b.forwardRef(({ className: e, children: t, position: r = "popper", ...o }, s) => /* @__PURE__ */ v.jsx(AE, { children: /* @__PURE__ */ v.jsxs(
  Hg,
  {
    ref: s,
    className: $e(
      "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      r === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      e
    ),
    position: r,
    ...o,
    children: [
      /* @__PURE__ */ v.jsx(Zg, {}),
      /* @__PURE__ */ v.jsx(
        EE,
        {
          className: $e(
            "p-1",
            r === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children: t
        }
      ),
      /* @__PURE__ */ v.jsx(Jg, {})
    ]
  }
) }));
Qg.displayName = Hg.displayName;
const DE = b.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ v.jsx(
  zg,
  {
    ref: r,
    className: $e("py-1.5 pl-8 pr-2 text-sm font-semibold", e),
    ...t
  }
));
DE.displayName = zg.displayName;
const ev = b.forwardRef(({ className: e, children: t, ...r }, o) => /* @__PURE__ */ v.jsxs(
  Gg,
  {
    ref: o,
    className: $e(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...r,
    children: [
      /* @__PURE__ */ v.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ v.jsx(OE, { children: /* @__PURE__ */ v.jsx(Pm, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ v.jsx(RE, { children: t })
    ]
  }
));
ev.displayName = Gg.displayName;
const IE = b.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ v.jsx(
  qg,
  {
    ref: r,
    className: $e("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
IE.displayName = qg.displayName;
function LE(e, t) {
  return b.useReducer((r, o) => t[r][o] ?? r, e);
}
var Ro = (e) => {
  const { present: t, children: r } = e, o = jE(t), s = typeof r == "function" ? r({ present: o.isPresent }) : b.Children.only(r), c = Ye(o.ref, kE(s));
  return typeof r == "function" || o.isPresent ? b.cloneElement(s, { ref: c }) : null;
};
Ro.displayName = "Presence";
function jE(e) {
  const [t, r] = b.useState(), o = b.useRef({}), s = b.useRef(e), c = b.useRef("none"), l = e ? "mounted" : "unmounted", [u, f] = LE(l, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return b.useEffect(() => {
    const h = Is(o.current);
    c.current = u === "mounted" ? h : "none";
  }, [u]), Ct(() => {
    const h = o.current, p = s.current;
    if (p !== e) {
      const y = c.current, C = Is(h);
      e ? f("MOUNT") : C === "none" || (h == null ? void 0 : h.display) === "none" ? f("UNMOUNT") : f(p && y !== C ? "ANIMATION_OUT" : "UNMOUNT"), s.current = e;
    }
  }, [e, f]), Ct(() => {
    if (t) {
      let h;
      const p = t.ownerDocument.defaultView ?? window, g = (C) => {
        const S = Is(o.current).includes(C.animationName);
        if (C.target === t && S && (f("ANIMATION_END"), !s.current)) {
          const _ = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", h = p.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = _);
          });
        }
      }, y = (C) => {
        C.target === t && (c.current = Is(o.current));
      };
      return t.addEventListener("animationstart", y), t.addEventListener("animationcancel", g), t.addEventListener("animationend", g), () => {
        p.clearTimeout(h), t.removeEventListener("animationstart", y), t.removeEventListener("animationcancel", g), t.removeEventListener("animationend", g);
      };
    } else
      f("ANIMATION_END");
  }, [t, f]), {
    isPresent: ["mounted", "unmountSuspended"].includes(u),
    ref: b.useCallback((h) => {
      h && (o.current = getComputedStyle(h)), r(h);
    }, [])
  };
}
function Is(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function kE(e) {
  var o, s;
  let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = (s = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : s.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
var [wa, sI] = Qc("Tooltip", [
  ma
]), ba = ma(), tv = "TooltipProvider", VE = 700, Ic = "tooltip.open", [FE, pu] = wa(tv), nv = (e) => {
  const {
    __scopeTooltip: t,
    delayDuration: r = VE,
    skipDelayDuration: o = 300,
    disableHoverableContent: s = !1,
    children: c
  } = e, [l, u] = b.useState(!0), f = b.useRef(!1), h = b.useRef(0);
  return b.useEffect(() => {
    const p = h.current;
    return () => window.clearTimeout(p);
  }, []), /* @__PURE__ */ v.jsx(
    FE,
    {
      scope: t,
      isOpenDelayed: l,
      delayDuration: r,
      onOpen: b.useCallback(() => {
        window.clearTimeout(h.current), u(!1);
      }, []),
      onClose: b.useCallback(() => {
        window.clearTimeout(h.current), h.current = window.setTimeout(
          () => u(!0),
          o
        );
      }, [o]),
      isPointerInTransitRef: f,
      onPointerInTransitChange: b.useCallback((p) => {
        f.current = p;
      }, []),
      disableHoverableContent: s,
      children: c
    }
  );
};
nv.displayName = tv;
var Sa = "Tooltip", [BE, Ca] = wa(Sa), rv = (e) => {
  const {
    __scopeTooltip: t,
    children: r,
    open: o,
    defaultOpen: s = !1,
    onOpenChange: c,
    disableHoverableContent: l,
    delayDuration: u
  } = e, f = pu(Sa, e.__scopeTooltip), h = ba(t), [p, g] = b.useState(null), y = Ir(), C = b.useRef(0), T = l ?? f.disableHoverableContent, S = u ?? f.delayDuration, _ = b.useRef(!1), [A = !1, R] = Zs({
    prop: o,
    defaultProp: s,
    onChange: ($) => {
      $ ? (f.onOpen(), document.dispatchEvent(new CustomEvent(Ic))) : f.onClose(), c == null || c($);
    }
  }), N = b.useMemo(() => A ? _.current ? "delayed-open" : "instant-open" : "closed", [A]), L = b.useCallback(() => {
    window.clearTimeout(C.current), C.current = 0, _.current = !1, R(!0);
  }, [R]), j = b.useCallback(() => {
    window.clearTimeout(C.current), C.current = 0, R(!1);
  }, [R]), H = b.useCallback(() => {
    window.clearTimeout(C.current), C.current = window.setTimeout(() => {
      _.current = !0, R(!0), C.current = 0;
    }, S);
  }, [S, R]);
  return b.useEffect(() => () => {
    C.current && (window.clearTimeout(C.current), C.current = 0);
  }, []), /* @__PURE__ */ v.jsx(rg, { ...h, children: /* @__PURE__ */ v.jsx(
    BE,
    {
      scope: t,
      contentId: y,
      open: A,
      stateAttribute: N,
      trigger: p,
      onTriggerChange: g,
      onTriggerEnter: b.useCallback(() => {
        f.isOpenDelayed ? H() : L();
      }, [f.isOpenDelayed, H, L]),
      onTriggerLeave: b.useCallback(() => {
        T ? j() : (window.clearTimeout(C.current), C.current = 0);
      }, [j, T]),
      onOpen: L,
      onClose: j,
      disableHoverableContent: T,
      children: r
    }
  ) });
};
rv.displayName = Sa;
var Lc = "TooltipTrigger", iv = b.forwardRef(
  (e, t) => {
    const { __scopeTooltip: r, ...o } = e, s = Ca(Lc, r), c = pu(Lc, r), l = ba(r), u = b.useRef(null), f = Ye(t, u, s.onTriggerChange), h = b.useRef(!1), p = b.useRef(!1), g = b.useCallback(() => h.current = !1, []);
    return b.useEffect(() => () => document.removeEventListener("pointerup", g), [g]), /* @__PURE__ */ v.jsx(ig, { asChild: !0, ...l, children: /* @__PURE__ */ v.jsx(
      Le.button,
      {
        "aria-describedby": s.open ? s.contentId : void 0,
        "data-state": s.stateAttribute,
        ...o,
        ref: f,
        onPointerMove: Oe(e.onPointerMove, (y) => {
          y.pointerType !== "touch" && !p.current && !c.isPointerInTransitRef.current && (s.onTriggerEnter(), p.current = !0);
        }),
        onPointerLeave: Oe(e.onPointerLeave, () => {
          s.onTriggerLeave(), p.current = !1;
        }),
        onPointerDown: Oe(e.onPointerDown, () => {
          h.current = !0, document.addEventListener("pointerup", g, { once: !0 });
        }),
        onFocus: Oe(e.onFocus, () => {
          h.current || s.onOpen();
        }),
        onBlur: Oe(e.onBlur, s.onClose),
        onClick: Oe(e.onClick, s.onClose)
      }
    ) });
  }
);
iv.displayName = Lc;
var WE = "TooltipPortal", [aI, $E] = wa(WE, {
  forceMount: void 0
}), yi = "TooltipContent", ov = b.forwardRef(
  (e, t) => {
    const r = $E(yi, e.__scopeTooltip), { forceMount: o = r.forceMount, side: s = "top", ...c } = e, l = Ca(yi, e.__scopeTooltip);
    return /* @__PURE__ */ v.jsx(Ro, { present: o || l.open, children: l.disableHoverableContent ? /* @__PURE__ */ v.jsx(sv, { side: s, ...c, ref: t }) : /* @__PURE__ */ v.jsx(UE, { side: s, ...c, ref: t }) });
  }
), UE = b.forwardRef((e, t) => {
  const r = Ca(yi, e.__scopeTooltip), o = pu(yi, e.__scopeTooltip), s = b.useRef(null), c = Ye(t, s), [l, u] = b.useState(null), { trigger: f, onClose: h } = r, p = s.current, { onPointerInTransitChange: g } = o, y = b.useCallback(() => {
    u(null), g(!1);
  }, [g]), C = b.useCallback(
    (T, S) => {
      const _ = T.currentTarget, A = { x: T.clientX, y: T.clientY }, R = KE(A, _.getBoundingClientRect()), N = YE(A, R), L = qE(S.getBoundingClientRect()), j = ZE([...N, ...L]);
      u(j), g(!0);
    },
    [g]
  );
  return b.useEffect(() => () => y(), [y]), b.useEffect(() => {
    if (f && p) {
      const T = (_) => C(_, p), S = (_) => C(_, f);
      return f.addEventListener("pointerleave", T), p.addEventListener("pointerleave", S), () => {
        f.removeEventListener("pointerleave", T), p.removeEventListener("pointerleave", S);
      };
    }
  }, [f, p, C, y]), b.useEffect(() => {
    if (l) {
      const T = (S) => {
        const _ = S.target, A = { x: S.clientX, y: S.clientY }, R = (f == null ? void 0 : f.contains(_)) || (p == null ? void 0 : p.contains(_)), N = !XE(A, l);
        R ? y() : N && (y(), h());
      };
      return document.addEventListener("pointermove", T), () => document.removeEventListener("pointermove", T);
    }
  }, [f, p, l, h, y]), /* @__PURE__ */ v.jsx(sv, { ...e, ref: c });
}), [HE, zE] = wa(Sa, { isInside: !1 }), sv = b.forwardRef(
  (e, t) => {
    const {
      __scopeTooltip: r,
      children: o,
      "aria-label": s,
      onEscapeKeyDown: c,
      onPointerDownOutside: l,
      ...u
    } = e, f = Ca(yi, r), h = ba(r), { onClose: p } = f;
    return b.useEffect(() => (document.addEventListener(Ic, p), () => document.removeEventListener(Ic, p)), [p]), b.useEffect(() => {
      if (f.trigger) {
        const g = (y) => {
          const C = y.target;
          C != null && C.contains(f.trigger) && p();
        };
        return window.addEventListener("scroll", g, { capture: !0 }), () => window.removeEventListener("scroll", g, { capture: !0 });
      }
    }, [f.trigger, p]), /* @__PURE__ */ v.jsx(
      fa,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: c,
        onPointerDownOutside: l,
        onFocusOutside: (g) => g.preventDefault(),
        onDismiss: p,
        children: /* @__PURE__ */ v.jsxs(
          og,
          {
            "data-state": f.stateAttribute,
            ...h,
            ...u,
            ref: t,
            style: {
              ...u.style,
              "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
              "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
              "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
              "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
              "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [
              /* @__PURE__ */ v.jsx(bm, { children: o }),
              /* @__PURE__ */ v.jsx(HE, { scope: r, isInside: !0, children: /* @__PURE__ */ v.jsx(vA, { id: f.contentId, role: "tooltip", children: s || o }) })
            ]
          }
        )
      }
    );
  }
);
ov.displayName = yi;
var av = "TooltipArrow", GE = b.forwardRef(
  (e, t) => {
    const { __scopeTooltip: r, ...o } = e, s = ba(r);
    return zE(
      av,
      r
    ).isInside ? null : /* @__PURE__ */ v.jsx(sg, { ...s, ...o, ref: t });
  }
);
GE.displayName = av;
function KE(e, t) {
  const r = Math.abs(t.top - e.y), o = Math.abs(t.bottom - e.y), s = Math.abs(t.right - e.x), c = Math.abs(t.left - e.x);
  switch (Math.min(r, o, s, c)) {
    case c:
      return "left";
    case s:
      return "right";
    case r:
      return "top";
    case o:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function YE(e, t, r = 5) {
  const o = [];
  switch (t) {
    case "top":
      o.push(
        { x: e.x - r, y: e.y + r },
        { x: e.x + r, y: e.y + r }
      );
      break;
    case "bottom":
      o.push(
        { x: e.x - r, y: e.y - r },
        { x: e.x + r, y: e.y - r }
      );
      break;
    case "left":
      o.push(
        { x: e.x + r, y: e.y - r },
        { x: e.x + r, y: e.y + r }
      );
      break;
    case "right":
      o.push(
        { x: e.x - r, y: e.y - r },
        { x: e.x - r, y: e.y + r }
      );
      break;
  }
  return o;
}
function qE(e) {
  const { top: t, right: r, bottom: o, left: s } = e;
  return [
    { x: s, y: t },
    { x: r, y: t },
    { x: r, y: o },
    { x: s, y: o }
  ];
}
function XE(e, t) {
  const { x: r, y: o } = e;
  let s = !1;
  for (let c = 0, l = t.length - 1; c < t.length; l = c++) {
    const u = t[c].x, f = t[c].y, h = t[l].x, p = t[l].y;
    f > o != p > o && r < (h - u) * (o - f) / (p - f) + u && (s = !s);
  }
  return s;
}
function ZE(e) {
  const t = e.slice();
  return t.sort((r, o) => r.x < o.x ? -1 : r.x > o.x ? 1 : r.y < o.y ? -1 : r.y > o.y ? 1 : 0), JE(t);
}
function JE(e) {
  if (e.length <= 1)
    return e.slice();
  const t = [];
  for (let o = 0; o < e.length; o++) {
    const s = e[o];
    for (; t.length >= 2; ) {
      const c = t[t.length - 1], l = t[t.length - 2];
      if ((c.x - l.x) * (s.y - l.y) >= (c.y - l.y) * (s.x - l.x))
        t.pop();
      else
        break;
    }
    t.push(s);
  }
  t.pop();
  const r = [];
  for (let o = e.length - 1; o >= 0; o--) {
    const s = e[o];
    for (; r.length >= 2; ) {
      const c = r[r.length - 1], l = r[r.length - 2];
      if ((c.x - l.x) * (s.y - l.y) >= (c.y - l.y) * (s.x - l.x))
        r.pop();
      else
        break;
    }
    r.push(s);
  }
  return r.pop(), t.length === 1 && r.length === 1 && t[0].x === r[0].x && t[0].y === r[0].y ? t : t.concat(r);
}
var QE = nv, eR = rv, tR = iv, lv = ov;
const or = QE, sr = eR, ar = tR, Ln = b.forwardRef(({ className: e, sideOffset: t = 4, ...r }, o) => /* @__PURE__ */ v.jsx(
  lv,
  {
    ref: o,
    sideOffset: t,
    className: $e(
      "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...r
  }
));
Ln.displayName = lv.displayName;
const nR = Cm(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function cv({ className: e, variant: t, ...r }) {
  return /* @__PURE__ */ v.jsx("div", { className: $e(nR({ variant: t }), e), ...r });
}
const Ai = b.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ v.jsx(
  "div",
  {
    ref: r,
    className: $e(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      e
    ),
    ...t
  }
));
Ai.displayName = "Card";
const Ei = b.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ v.jsx(
  "div",
  {
    ref: r,
    className: $e("flex flex-col space-y-1.5 p-6", e),
    ...t
  }
));
Ei.displayName = "CardHeader";
const Oo = b.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ v.jsx(
  "div",
  {
    ref: r,
    className: $e(
      "text-2xl font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
Oo.displayName = "CardTitle";
const rR = b.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ v.jsx(
  "div",
  {
    ref: r,
    className: $e("text-sm text-muted-foreground", e),
    ...t
  }
));
rR.displayName = "CardDescription";
const Ri = b.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ v.jsx("div", { ref: r, className: $e("p-6 pt-0", e), ...t }));
Ri.displayName = "CardContent";
const iR = b.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ v.jsx(
  "div",
  {
    ref: r,
    className: $e("flex items-center p-6 pt-0", e),
    ...t
  }
));
iR.displayName = "CardFooter";
function lI({ deal: e, onDealChange: t, availableDeals: r }) {
  const o = (s) => {
    t(s);
  };
  return /* @__PURE__ */ v.jsxs(Ai, { className: "shadow-lg w-full max-w-3xl mx-auto my-8", children: [
    /* @__PURE__ */ v.jsx(Ei, { children: /* @__PURE__ */ v.jsxs("div", { className: "flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4", children: [
      /* @__PURE__ */ v.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ v.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ v.jsx("h2", { className: "text-xl font-semibold text-slate-900", children: e.dealName }),
          /* @__PURE__ */ v.jsx(or, { children: /* @__PURE__ */ v.jsxs(sr, { children: [
            /* @__PURE__ */ v.jsx(ar, { asChild: !0, children: /* @__PURE__ */ v.jsx(
              pn,
              {
                variant: "ghost",
                size: "sm",
                className: "p-1 h-auto",
                onClick: () => window.open(e.hubspotUrl, "_blank"),
                children: /* @__PURE__ */ v.jsx(Am, { className: "w-4 h-4 text-slate-500" })
              }
            ) }),
            /* @__PURE__ */ v.jsx(Ln, { children: /* @__PURE__ */ v.jsx("p", { children: "View in HubSpot" }) })
          ] }) })
        ] }),
        /* @__PURE__ */ v.jsx(cv, { variant: "outline", className: "text-sm", children: e.dealStage })
      ] }),
      /* @__PURE__ */ v.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 lg:gap-8", children: [
        /* @__PURE__ */ v.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ v.jsx("p", { className: "text-sm text-slate-500", children: "Amount" }),
          /* @__PURE__ */ v.jsxs("p", { className: "text-lg font-semibold", children: [
            "$",
            e.amount.toLocaleString()
          ] })
        ] }),
        /* @__PURE__ */ v.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ v.jsxs("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ v.jsx("p", { className: "text-sm text-slate-500", children: "Win Probability" }),
            /* @__PURE__ */ v.jsx(or, { children: /* @__PURE__ */ v.jsxs(sr, { children: [
              /* @__PURE__ */ v.jsx(ar, { asChild: !0, children: /* @__PURE__ */ v.jsx(pn, { variant: "ghost", size: "sm", className: "p-0 h-auto", children: /* @__PURE__ */ v.jsx(yo, { className: "w-3 h-3 text-slate-400" }) }) }),
              /* @__PURE__ */ v.jsx(Ln, { className: "max-w-xs", children: /* @__PURE__ */ v.jsx("p", { children: "Estimated chance of winning, based on prospect engagement, qualification status, risk factors, and historic deal outcomes at the current stage." }) })
            ] }) })
          ] }),
          /* @__PURE__ */ v.jsxs("p", { className: "text-lg font-semibold", children: [
            e.probability,
            "%"
          ] })
        ] }),
        /* @__PURE__ */ v.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ v.jsx("p", { className: "text-sm text-slate-500", children: "Deal Owner" }),
          /* @__PURE__ */ v.jsx("p", { className: "text-lg font-semibold", children: e.dealOwner })
        ] }),
        /* @__PURE__ */ v.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ v.jsxs("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ v.jsx("p", { className: "text-sm text-slate-500", children: "Deal Language" }),
            /* @__PURE__ */ v.jsx(or, { children: /* @__PURE__ */ v.jsxs(sr, { children: [
              /* @__PURE__ */ v.jsx(ar, { asChild: !0, children: /* @__PURE__ */ v.jsx(pn, { variant: "ghost", size: "sm", className: "p-0 h-auto", children: /* @__PURE__ */ v.jsx(yo, { className: "w-3 h-3 text-slate-400" }) }) }),
              /* @__PURE__ */ v.jsx(Ln, { className: "max-w-xs", children: /* @__PURE__ */ v.jsx("p", { children: "The main language of the deal." }) })
            ] }) })
          ] }),
          /* @__PURE__ */ v.jsx("p", { className: "text-lg font-semibold", children: TT(e.dealLanguage) })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ v.jsx(Ri, { children: /* @__PURE__ */ v.jsxs(NE, { value: e.dealId, onValueChange: o, children: [
      /* @__PURE__ */ v.jsx(Xg, { className: "w-[300px]", children: /* @__PURE__ */ v.jsxs(ME, { children: [
        e.dealName,
        " (",
        e.company,
        ")"
      ] }) }),
      /* @__PURE__ */ v.jsx(Qg, { children: r.map((s) => /* @__PURE__ */ v.jsxs(ev, { value: s.dealId, children: [
        s.dealName,
        " (",
        s.company,
        ")"
      ] }, s.dealId)) })
    ] }) })
  ] });
}
function oR(e, t = []) {
  let r = [];
  function o(c, l) {
    const u = b.createContext(l), f = r.length;
    r = [...r, l];
    function h(g) {
      const { scope: y, children: C, ...T } = g, S = (y == null ? void 0 : y[e][f]) || u, _ = b.useMemo(() => T, Object.values(T));
      return /* @__PURE__ */ v.jsx(S.Provider, { value: _, children: C });
    }
    function p(g, y) {
      const C = (y == null ? void 0 : y[e][f]) || u, T = b.useContext(C);
      if (T)
        return T;
      if (l !== void 0)
        return l;
      throw new Error(`\`${g}\` must be used within \`${c}\``);
    }
    return h.displayName = c + "Provider", [h, p];
  }
  const s = () => {
    const c = r.map((l) => b.createContext(l));
    return function(u) {
      const f = (u == null ? void 0 : u[e]) || c;
      return b.useMemo(
        () => ({ [`__scope${e}`]: { ...u, [e]: f } }),
        [u, f]
      );
    };
  };
  return s.scopeName = e, [o, sR(s, ...t)];
}
function sR(...e) {
  const t = e[0];
  if (e.length === 1)
    return t;
  const r = () => {
    const o = e.map((s) => ({
      useScope: s(),
      scopeName: s.scopeName
    }));
    return function(c) {
      const l = o.reduce((u, { useScope: f, scopeName: h }) => {
        const g = f(c)[`__scope${h}`];
        return { ...u, ...g };
      }, {});
      return b.useMemo(() => ({ [`__scope${t.scopeName}`]: l }), [l]);
    };
  };
  return r.scopeName = t.scopeName, r;
}
var mu = "Progress", gu = 100, [aR, cI] = oR(mu), [lR, cR] = aR(mu), uv = b.forwardRef(
  (e, t) => {
    const {
      __scopeProgress: r,
      value: o = null,
      max: s,
      getValueLabel: c = uR,
      ...l
    } = e;
    (s || s === 0) && !Qh(s) && console.error(fR(`${s}`, "Progress"));
    const u = Qh(s) ? s : gu;
    o !== null && !ep(o, u) && console.error(dR(`${o}`, "Progress"));
    const f = ep(o, u) ? o : null, h = ea(f) ? c(f, u) : void 0;
    return /* @__PURE__ */ v.jsx(lR, { scope: r, value: f, max: u, children: /* @__PURE__ */ v.jsx(
      Le.div,
      {
        "aria-valuemax": u,
        "aria-valuemin": 0,
        "aria-valuenow": ea(f) ? f : void 0,
        "aria-valuetext": h,
        role: "progressbar",
        "data-state": hv(f, u),
        "data-value": f ?? void 0,
        "data-max": u,
        ...l,
        ref: t
      }
    ) });
  }
);
uv.displayName = mu;
var fv = "ProgressIndicator", dv = b.forwardRef(
  (e, t) => {
    const { __scopeProgress: r, ...o } = e, s = cR(fv, r);
    return /* @__PURE__ */ v.jsx(
      Le.div,
      {
        "data-state": hv(s.value, s.max),
        "data-value": s.value ?? void 0,
        "data-max": s.max,
        ...o,
        ref: t
      }
    );
  }
);
dv.displayName = fv;
function uR(e, t) {
  return `${Math.round(e / t * 100)}%`;
}
function hv(e, t) {
  return e == null ? "indeterminate" : e === t ? "complete" : "loading";
}
function ea(e) {
  return typeof e == "number";
}
function Qh(e) {
  return ea(e) && !isNaN(e) && e > 0;
}
function ep(e, t) {
  return ea(e) && !isNaN(e) && e <= t && e >= 0;
}
function fR(e, t) {
  return `Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${gu}\`.`;
}
function dR(e, t) {
  return `Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${gu} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var pv = uv, hR = dv;
const vu = b.forwardRef(({ className: e, value: t, ...r }, o) => /* @__PURE__ */ v.jsx(
  pv,
  {
    ref: o,
    className: $e(
      "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
      e
    ),
    ...r,
    children: /* @__PURE__ */ v.jsx(
      hR,
      {
        className: "h-full w-full flex-1 bg-primary transition-all",
        style: { transform: `translateX(-${100 - (t || 0)}%)` }
      }
    )
  }
));
vu.displayName = pv.displayName;
const lo = [
  "Discovery",
  "Solution Validation",
  "Pricing Communicated",
  "Contract Sent",
  "Closed Won",
  "Closed Lost"
], uI = ({ deal: e }) => {
  const t = {
    Discovery: 75,
    "Solution Validation": 65,
    "Pricing Communicated": 55,
    "Contract Sent": 85,
    "Closed Won": 100,
    "Closed Lost": 0
  }, r = lo.includes(e.dealStage) ? e.dealStage : lo[0], o = t[r] || 0;
  return /* @__PURE__ */ v.jsxs(Ai, { className: "shadow-lg w-full max-w-3xl mx-auto my-8", children: [
    /* @__PURE__ */ v.jsxs(Ei, { children: [
      /* @__PURE__ */ v.jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ v.jsx(Oo, { className: "text-slate-800", children: "Deal Progress" }) }),
      /* @__PURE__ */ v.jsx("p", { className: "text-sm text-muted-foreground", children: "Current stage and overall progress" })
    ] }),
    /* @__PURE__ */ v.jsx(Ri, { children: /* @__PURE__ */ v.jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ v.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ v.jsx("div", { className: "flex flex-wrap justify-between text-xs sm:text-sm text-slate-600", children: lo.map((s) => /* @__PURE__ */ v.jsx("span", { className: `mb-2 ${r === s ? "font-bold" : ""}`, children: s }, s)) }),
        /* @__PURE__ */ v.jsx(
          vu,
          {
            value: (lo.indexOf(r) + 1) / lo.length * 100,
            className: "h-2"
          }
        ),
        /* @__PURE__ */ v.jsxs("div", { className: "flex justify-between text-xs text-slate-500", children: [
          /* @__PURE__ */ v.jsx("span", { children: "0%" }),
          /* @__PURE__ */ v.jsx("span", { children: "100%" })
        ] })
      ] }),
      /* @__PURE__ */ v.jsxs("div", { className: "pt-4 border-t", children: [
        /* @__PURE__ */ v.jsxs("div", { className: "flex items-center space-x-1 mb-4", children: [
          /* @__PURE__ */ v.jsx("h3", { className: "text-sm font-medium text-slate-700", children: "Outlook" }),
          /* @__PURE__ */ v.jsx(or, { children: /* @__PURE__ */ v.jsxs(sr, { children: [
            /* @__PURE__ */ v.jsx(ar, { children: /* @__PURE__ */ v.jsx(yo, { className: "w-3 h-3 text-muted-foreground" }) }),
            /* @__PURE__ */ v.jsxs(Ln, { className: "max-w-xs", children: [
              /* @__PURE__ */ v.jsx("p", { children: "Predictions based on deal qualification status and comparison with historical deals at the same stage" }),
              /* @__PURE__ */ v.jsx("a", { href: "", children: /* @__PURE__ */ v.jsx("button", { children: "Learn more" }) })
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ v.jsxs("div", { className: "grid grid-cols-2 gap-8", children: [
          /* @__PURE__ */ v.jsxs("div", { children: [
            /* @__PURE__ */ v.jsx("div", { className: "text-sm font-medium text-muted-foreground mb-1", children: "Win Probability" }),
            /* @__PURE__ */ v.jsxs("div", { className: "text-2xl font-bold text-slate-800", children: [
              e.probability,
              "%"
            ] })
          ] }),
          /* @__PURE__ */ v.jsxs("div", { children: [
            /* @__PURE__ */ v.jsxs("div", { className: "text-sm font-medium text-muted-foreground mb-1 space-x-1", children: [
              "Next Stage Probability",
              " "
            ] }),
            /* @__PURE__ */ v.jsxs("div", { className: "text-2xl font-bold text-slate-800", children: [
              o,
              "%"
            ] })
          ] })
        ] })
      ] })
    ] }) })
  ] });
};
function fI({ deal: e }) {
  const t = (r) => {
    switch (r.toLowerCase()) {
      case "high":
        return "bg-green-100 text-green-800";
      case "medium":
        return "bg-yellow-100 text-yellow-800";
      case "low":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };
  return /* @__PURE__ */ v.jsxs(Ai, { className: "shadow-lg w-full max-w-3xl mx-auto my-8", children: [
    /* @__PURE__ */ v.jsxs(Ei, { children: [
      /* @__PURE__ */ v.jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ v.jsx(Oo, { className: "text-slate-800", children: "Key Stakeholders" }) }),
      /* @__PURE__ */ v.jsx("p", { className: "text-sm text-slate-500", children: "Engagement levels and relationships" })
    ] }),
    /* @__PURE__ */ v.jsx(Ri, { children: /* @__PURE__ */ v.jsx("div", { className: "space-y-4", children: e.keyStakeholders.map((r, o) => /* @__PURE__ */ v.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ v.jsxs("div", { children: [
        /* @__PURE__ */ v.jsx("p", { className: "font-medium", children: r.name }),
        /* @__PURE__ */ v.jsx("p", { className: "text-sm text-slate-500", children: r.role })
      ] }),
      /* @__PURE__ */ v.jsxs("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ v.jsxs(cv, { className: t(r.engagementLevel), children: [
          r.engagementLevel,
          " Engagement"
        ] }),
        /* @__PURE__ */ v.jsx(or, { children: /* @__PURE__ */ v.jsxs(sr, { children: [
          /* @__PURE__ */ v.jsx(ar, { asChild: !0, children: /* @__PURE__ */ v.jsx(
            pn,
            {
              variant: "ghost",
              size: "sm",
              className: "",
              onClick: () => window.open(r.contactLink, "_blank"),
              children: /* @__PURE__ */ v.jsx(Am, { className: "w-4 h-4 text-slate-500" })
            }
          ) }),
          /* @__PURE__ */ v.jsx(Ln, { children: /* @__PURE__ */ v.jsx("p", { children: "View contact in CRM" }) })
        ] }) })
      ] })
    ] }, o)) }) })
  ] });
}
const tp = /* @__PURE__ */ new Set();
function _a(e, t, r) {
  e || tp.has(t) || (console.warn(t), tp.add(t));
}
function pR(e) {
  if (typeof Proxy > "u")
    return e;
  const t = /* @__PURE__ */ new Map(), r = (...o) => (process.env.NODE_ENV !== "production" && _a(!1, "motion() is deprecated. Use motion.create() instead."), e(...o));
  return new Proxy(r, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (o, s) => s === "create" ? e : (t.has(s) || t.set(s, e(s)), t.get(s))
  });
}
function Ta(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
const jc = (e) => Array.isArray(e);
function mv(e, t) {
  if (!Array.isArray(t))
    return !1;
  const r = t.length;
  if (r !== e.length)
    return !1;
  for (let o = 0; o < r; o++)
    if (t[o] !== e[o])
      return !1;
  return !0;
}
function bo(e) {
  return typeof e == "string" || Array.isArray(e);
}
function np(e) {
  const t = [{}, {}];
  return e == null || e.values.forEach((r, o) => {
    t[0][o] = r.get(), t[1][o] = r.getVelocity();
  }), t;
}
function yu(e, t, r, o) {
  if (typeof t == "function") {
    const [s, c] = np(o);
    t = t(r !== void 0 ? r : e.custom, s, c);
  }
  if (typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function") {
    const [s, c] = np(o);
    t = t(r !== void 0 ? r : e.custom, s, c);
  }
  return t;
}
function Pa(e, t, r) {
  const o = e.getProps();
  return yu(o, t, r !== void 0 ? r : o.custom, e);
}
const xu = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], wu = ["initial", ...xu], No = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY"
], Br = new Set(No), gn = (e) => e * 1e3, jn = (e) => e / 1e3, mR = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, gR = (e) => ({
  type: "spring",
  stiffness: 550,
  damping: e === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), vR = {
  type: "keyframes",
  duration: 0.8
}, yR = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, xR = (e, { keyframes: t }) => t.length > 2 ? vR : Br.has(e) ? e.startsWith("scale") ? gR(t[1]) : mR : yR;
function bu(e, t) {
  return e ? e[t] || e.default || e : void 0;
}
const wR = {
  skipAnimations: !1,
  useManualTiming: !1
}, bR = (e) => e !== null;
function Aa(e, { repeat: t, repeatType: r = "loop" }, o) {
  const s = e.filter(bR), c = t && r !== "loop" && t % 2 === 1 ? 0 : s.length - 1;
  return !c || o === void 0 ? s[c] : o;
}
const ft = (e) => e;
function SR(e) {
  let t = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set(), o = !1, s = !1;
  const c = /* @__PURE__ */ new WeakSet();
  let l = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  };
  function u(h) {
    c.has(h) && (f.schedule(h), e()), h(l);
  }
  const f = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (h, p = !1, g = !1) => {
      const C = g && o ? t : r;
      return p && c.add(h), C.has(h) || C.add(h), h;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (h) => {
      r.delete(h), c.delete(h);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (h) => {
      if (l = h, o) {
        s = !0;
        return;
      }
      o = !0, [t, r] = [r, t], r.clear(), t.forEach(u), o = !1, s && (s = !1, f.process(h));
    }
  };
  return f;
}
const Ls = [
  "read",
  // Read
  "resolveKeyframes",
  // Write/Read/Write/Read
  "update",
  // Compute
  "preRender",
  // Compute
  "render",
  // Write
  "postRender"
  // Compute
], CR = 40;
function gv(e, t) {
  let r = !1, o = !0;
  const s = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, c = () => r = !0, l = Ls.reduce((A, R) => (A[R] = SR(c), A), {}), { read: u, resolveKeyframes: f, update: h, preRender: p, render: g, postRender: y } = l, C = () => {
    const A = performance.now();
    r = !1, s.delta = o ? 1e3 / 60 : Math.max(Math.min(A - s.timestamp, CR), 1), s.timestamp = A, s.isProcessing = !0, u.process(s), f.process(s), h.process(s), p.process(s), g.process(s), y.process(s), s.isProcessing = !1, r && t && (o = !1, e(C));
  }, T = () => {
    r = !0, o = !0, s.isProcessing || e(C);
  };
  return { schedule: Ls.reduce((A, R) => {
    const N = l[R];
    return A[R] = (L, j = !1, H = !1) => (r || T(), N.schedule(L, j, H)), A;
  }, {}), cancel: (A) => {
    for (let R = 0; R < Ls.length; R++)
      l[Ls[R]].cancel(A);
  }, state: s, steps: l };
}
const { schedule: je, cancel: fr, state: ut, steps: ac } = gv(typeof requestAnimationFrame < "u" ? requestAnimationFrame : ft, !0), vv = (e, t, r) => (((1 - 3 * r + 3 * t) * e + (3 * r - 6 * t)) * e + 3 * t) * e, _R = 1e-7, TR = 12;
function PR(e, t, r, o, s) {
  let c, l, u = 0;
  do
    l = t + (r - t) / 2, c = vv(l, o, s) - e, c > 0 ? r = l : t = l;
  while (Math.abs(c) > _R && ++u < TR);
  return l;
}
function Mo(e, t, r, o) {
  if (e === t && r === o)
    return ft;
  const s = (c) => PR(c, 0, 1, e, r);
  return (c) => c === 0 || c === 1 ? c : vv(s(c), t, o);
}
const yv = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, xv = (e) => (t) => 1 - e(1 - t), wv = /* @__PURE__ */ Mo(0.33, 1.53, 0.69, 0.99), Su = /* @__PURE__ */ xv(wv), bv = /* @__PURE__ */ yv(Su), Sv = (e) => (e *= 2) < 1 ? 0.5 * Su(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), Cu = (e) => 1 - Math.sin(Math.acos(e)), Cv = xv(Cu), _v = yv(Cu), Tv = (e) => /^0[^.\s]+$/u.test(e);
function AR(e) {
  return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || Tv(e) : !0;
}
let Oi = ft, dr = ft;
process.env.NODE_ENV !== "production" && (Oi = (e, t) => {
  !e && typeof console < "u" && console.warn(t);
}, dr = (e, t) => {
  if (!e)
    throw new Error(t);
});
const Pv = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e), Av = (e) => (t) => typeof t == "string" && t.startsWith(e), Ev = /* @__PURE__ */ Av("--"), ER = /* @__PURE__ */ Av("var(--"), _u = (e) => ER(e) ? RR.test(e.split("/*")[0].trim()) : !1, RR = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, OR = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function NR(e) {
  const t = OR.exec(e);
  if (!t)
    return [,];
  const [, r, o, s] = t;
  return [`--${r ?? o}`, s];
}
const MR = 4;
function Rv(e, t, r = 1) {
  dr(r <= MR, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);
  const [o, s] = NR(e);
  if (!o)
    return;
  const c = window.getComputedStyle(t).getPropertyValue(o);
  if (c) {
    const l = c.trim();
    return Pv(l) ? parseFloat(l) : l;
  }
  return _u(s) ? Rv(s, t, r + 1) : s;
}
const hr = (e, t, r) => r > t ? t : r < e ? e : r, Ni = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, So = {
  ...Ni,
  transform: (e) => hr(0, 1, e)
}, js = {
  ...Ni,
  default: 1
}, Do = (e) => ({
  test: (t) => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: (t) => `${t}${e}`
}), rr = /* @__PURE__ */ Do("deg"), vn = /* @__PURE__ */ Do("%"), oe = /* @__PURE__ */ Do("px"), DR = /* @__PURE__ */ Do("vh"), IR = /* @__PURE__ */ Do("vw"), rp = {
  ...vn,
  parse: (e) => vn.parse(e) / 100,
  transform: (e) => vn.transform(e * 100)
}, LR = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  "x",
  "y",
  "translateX",
  "translateY"
]), ip = (e) => e === Ni || e === oe, op = (e, t) => parseFloat(e.split(", ")[t]), sp = (e, t) => (r, { transform: o }) => {
  if (o === "none" || !o)
    return 0;
  const s = o.match(/^matrix3d\((.+)\)$/u);
  if (s)
    return op(s[1], t);
  {
    const c = o.match(/^matrix\((.+)\)$/u);
    return c ? op(c[1], e) : 0;
  }
}, jR = /* @__PURE__ */ new Set(["x", "y", "z"]), kR = No.filter((e) => !jR.has(e));
function VR(e) {
  const t = [];
  return kR.forEach((r) => {
    const o = e.getValue(r);
    o !== void 0 && (t.push([r, o.get()]), o.set(r.startsWith("scale") ? 1 : 0));
  }), t;
}
const xi = {
  // Dimensions
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: r = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(r),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: r = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(r),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  // Transform
  x: sp(4, 13),
  y: sp(5, 14)
};
xi.translateX = xi.x;
xi.translateY = xi.y;
const Ov = (e) => (t) => t.test(e), FR = {
  test: (e) => e === "auto",
  parse: (e) => e
}, Nv = [Ni, oe, vn, rr, IR, DR, FR], ap = (e) => Nv.find(Ov(e)), Lr = /* @__PURE__ */ new Set();
let kc = !1, Vc = !1;
function Mv() {
  if (Vc) {
    const e = Array.from(Lr).filter((o) => o.needsMeasurement), t = new Set(e.map((o) => o.element)), r = /* @__PURE__ */ new Map();
    t.forEach((o) => {
      const s = VR(o);
      s.length && (r.set(o, s), o.render());
    }), e.forEach((o) => o.measureInitialState()), t.forEach((o) => {
      o.render();
      const s = r.get(o);
      s && s.forEach(([c, l]) => {
        var u;
        (u = o.getValue(c)) === null || u === void 0 || u.set(l);
      });
    }), e.forEach((o) => o.measureEndState()), e.forEach((o) => {
      o.suspendedScrollY !== void 0 && window.scrollTo(0, o.suspendedScrollY);
    });
  }
  Vc = !1, kc = !1, Lr.forEach((e) => e.complete()), Lr.clear();
}
function Dv() {
  Lr.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (Vc = !0);
  });
}
function BR() {
  Dv(), Mv();
}
class Tu {
  constructor(t, r, o, s, c, l = !1) {
    this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...t], this.onComplete = r, this.name = o, this.motionValue = s, this.element = c, this.isAsync = l;
  }
  scheduleResolve() {
    this.isScheduled = !0, this.isAsync ? (Lr.add(this), kc || (kc = !0, je.read(Dv), je.resolveKeyframes(Mv))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, name: r, element: o, motionValue: s } = this;
    for (let c = 0; c < t.length; c++)
      if (t[c] === null)
        if (c === 0) {
          const l = s == null ? void 0 : s.get(), u = t[t.length - 1];
          if (l !== void 0)
            t[0] = l;
          else if (o && r) {
            const f = o.readValue(r, u);
            f != null && (t[0] = f);
          }
          t[0] === void 0 && (t[0] = u), s && l === void 0 && s.set(t[0]);
        } else
          t[c] = t[c - 1];
  }
  setFinalKeyframe() {
  }
  measureInitialState() {
  }
  renderEndStyles() {
  }
  measureEndState() {
  }
  complete() {
    this.isComplete = !0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), Lr.delete(this);
  }
  cancel() {
    this.isComplete || (this.isScheduled = !1, Lr.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const po = (e) => Math.round(e * 1e5) / 1e5, Pu = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function WR(e) {
  return e == null;
}
const $R = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, Au = (e, t) => (r) => !!(typeof r == "string" && $R.test(r) && r.startsWith(e) || t && !WR(r) && Object.prototype.hasOwnProperty.call(r, t)), Iv = (e, t, r) => (o) => {
  if (typeof o != "string")
    return o;
  const [s, c, l, u] = o.match(Pu);
  return {
    [e]: parseFloat(s),
    [t]: parseFloat(c),
    [r]: parseFloat(l),
    alpha: u !== void 0 ? parseFloat(u) : 1
  };
}, UR = (e) => hr(0, 255, e), lc = {
  ...Ni,
  transform: (e) => Math.round(UR(e))
}, Dr = {
  test: /* @__PURE__ */ Au("rgb", "red"),
  parse: /* @__PURE__ */ Iv("red", "green", "blue"),
  transform: ({ red: e, green: t, blue: r, alpha: o = 1 }) => "rgba(" + lc.transform(e) + ", " + lc.transform(t) + ", " + lc.transform(r) + ", " + po(So.transform(o)) + ")"
};
function HR(e) {
  let t = "", r = "", o = "", s = "";
  return e.length > 5 ? (t = e.substring(1, 3), r = e.substring(3, 5), o = e.substring(5, 7), s = e.substring(7, 9)) : (t = e.substring(1, 2), r = e.substring(2, 3), o = e.substring(3, 4), s = e.substring(4, 5), t += t, r += r, o += o, s += s), {
    red: parseInt(t, 16),
    green: parseInt(r, 16),
    blue: parseInt(o, 16),
    alpha: s ? parseInt(s, 16) / 255 : 1
  };
}
const Fc = {
  test: /* @__PURE__ */ Au("#"),
  parse: HR,
  transform: Dr.transform
}, ci = {
  test: /* @__PURE__ */ Au("hsl", "hue"),
  parse: /* @__PURE__ */ Iv("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: t, lightness: r, alpha: o = 1 }) => "hsla(" + Math.round(e) + ", " + vn.transform(po(t)) + ", " + vn.transform(po(r)) + ", " + po(So.transform(o)) + ")"
}, vt = {
  test: (e) => Dr.test(e) || Fc.test(e) || ci.test(e),
  parse: (e) => Dr.test(e) ? Dr.parse(e) : ci.test(e) ? ci.parse(e) : Fc.parse(e),
  transform: (e) => typeof e == "string" ? e : e.hasOwnProperty("red") ? Dr.transform(e) : ci.transform(e)
}, zR = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function GR(e) {
  var t, r;
  return isNaN(e) && typeof e == "string" && (((t = e.match(Pu)) === null || t === void 0 ? void 0 : t.length) || 0) + (((r = e.match(zR)) === null || r === void 0 ? void 0 : r.length) || 0) > 0;
}
const Lv = "number", jv = "color", KR = "var", YR = "var(", lp = "${}", qR = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Co(e) {
  const t = e.toString(), r = [], o = {
    color: [],
    number: [],
    var: []
  }, s = [];
  let c = 0;
  const u = t.replace(qR, (f) => (vt.test(f) ? (o.color.push(c), s.push(jv), r.push(vt.parse(f))) : f.startsWith(YR) ? (o.var.push(c), s.push(KR), r.push(f)) : (o.number.push(c), s.push(Lv), r.push(parseFloat(f))), ++c, lp)).split(lp);
  return { values: r, split: u, indexes: o, types: s };
}
function kv(e) {
  return Co(e).values;
}
function Vv(e) {
  const { split: t, types: r } = Co(e), o = t.length;
  return (s) => {
    let c = "";
    for (let l = 0; l < o; l++)
      if (c += t[l], s[l] !== void 0) {
        const u = r[l];
        u === Lv ? c += po(s[l]) : u === jv ? c += vt.transform(s[l]) : c += s[l];
      }
    return c;
  };
}
const XR = (e) => typeof e == "number" ? 0 : e;
function ZR(e) {
  const t = kv(e);
  return Vv(e)(t.map(XR));
}
const pr = {
  test: GR,
  parse: kv,
  createTransformer: Vv,
  getAnimatableNone: ZR
}, JR = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function QR(e) {
  const [t, r] = e.slice(0, -1).split("(");
  if (t === "drop-shadow")
    return e;
  const [o] = r.match(Pu) || [];
  if (!o)
    return e;
  const s = r.replace(o, "");
  let c = JR.has(t) ? 1 : 0;
  return o !== r && (c *= 100), t + "(" + c + s + ")";
}
const eO = /\b([a-z-]*)\(.*?\)/gu, Bc = {
  ...pr,
  getAnimatableNone: (e) => {
    const t = e.match(eO);
    return t ? t.map(QR).join(" ") : e;
  }
}, tO = {
  // Border props
  borderWidth: oe,
  borderTopWidth: oe,
  borderRightWidth: oe,
  borderBottomWidth: oe,
  borderLeftWidth: oe,
  borderRadius: oe,
  radius: oe,
  borderTopLeftRadius: oe,
  borderTopRightRadius: oe,
  borderBottomRightRadius: oe,
  borderBottomLeftRadius: oe,
  // Positioning props
  width: oe,
  maxWidth: oe,
  height: oe,
  maxHeight: oe,
  top: oe,
  right: oe,
  bottom: oe,
  left: oe,
  // Spacing props
  padding: oe,
  paddingTop: oe,
  paddingRight: oe,
  paddingBottom: oe,
  paddingLeft: oe,
  margin: oe,
  marginTop: oe,
  marginRight: oe,
  marginBottom: oe,
  marginLeft: oe,
  // Misc
  backgroundPositionX: oe,
  backgroundPositionY: oe
}, nO = {
  rotate: rr,
  rotateX: rr,
  rotateY: rr,
  rotateZ: rr,
  scale: js,
  scaleX: js,
  scaleY: js,
  scaleZ: js,
  skew: rr,
  skewX: rr,
  skewY: rr,
  distance: oe,
  translateX: oe,
  translateY: oe,
  translateZ: oe,
  x: oe,
  y: oe,
  z: oe,
  perspective: oe,
  transformPerspective: oe,
  opacity: So,
  originX: rp,
  originY: rp,
  originZ: oe
}, cp = {
  ...Ni,
  transform: Math.round
}, Eu = {
  ...tO,
  ...nO,
  zIndex: cp,
  size: oe,
  // SVG
  fillOpacity: So,
  strokeOpacity: So,
  numOctaves: cp
}, rO = {
  ...Eu,
  // Color props
  color: vt,
  backgroundColor: vt,
  outlineColor: vt,
  fill: vt,
  stroke: vt,
  // Border props
  borderColor: vt,
  borderTopColor: vt,
  borderRightColor: vt,
  borderBottomColor: vt,
  borderLeftColor: vt,
  filter: Bc,
  WebkitFilter: Bc
}, Ru = (e) => rO[e];
function Fv(e, t) {
  let r = Ru(e);
  return r !== Bc && (r = pr), r.getAnimatableNone ? r.getAnimatableNone(t) : void 0;
}
const iO = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function oO(e, t, r) {
  let o = 0, s;
  for (; o < e.length && !s; ) {
    const c = e[o];
    typeof c == "string" && !iO.has(c) && Co(c).values.length && (s = e[o]), o++;
  }
  if (s && r)
    for (const c of t)
      e[c] = Fv(r, s);
}
class Bv extends Tu {
  constructor(t, r, o, s, c) {
    super(t, r, o, s, c, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: r, name: o } = this;
    if (!r || !r.current)
      return;
    super.readKeyframes();
    for (let f = 0; f < t.length; f++) {
      let h = t[f];
      if (typeof h == "string" && (h = h.trim(), _u(h))) {
        const p = Rv(h, r.current);
        p !== void 0 && (t[f] = p), f === t.length - 1 && (this.finalKeyframe = h);
      }
    }
    if (this.resolveNoneKeyframes(), !LR.has(o) || t.length !== 2)
      return;
    const [s, c] = t, l = ap(s), u = ap(c);
    if (l !== u)
      if (ip(l) && ip(u))
        for (let f = 0; f < t.length; f++) {
          const h = t[f];
          typeof h == "string" && (t[f] = parseFloat(h));
        }
      else
        this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: r } = this, o = [];
    for (let s = 0; s < t.length; s++)
      AR(t[s]) && o.push(s);
    o.length && oO(t, o, r);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: r, name: o } = this;
    if (!t || !t.current)
      return;
    o === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = xi[o](t.measureViewportBox(), window.getComputedStyle(t.current)), r[0] = this.measuredOrigin;
    const s = r[r.length - 1];
    s !== void 0 && t.getValue(o, s).jump(s, !1);
  }
  measureEndState() {
    var t;
    const { element: r, name: o, unresolvedKeyframes: s } = this;
    if (!r || !r.current)
      return;
    const c = r.getValue(o);
    c && c.jump(this.measuredOrigin, !1);
    const l = s.length - 1, u = s[l];
    s[l] = xi[o](r.measureViewportBox(), window.getComputedStyle(r.current)), u !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = u), !((t = this.removedTransforms) === null || t === void 0) && t.length && this.removedTransforms.forEach(([f, h]) => {
      r.getValue(f).set(h);
    }), this.resolveNoneKeyframes();
  }
}
function Ou(e) {
  return typeof e == "function";
}
let $s;
function sO() {
  $s = void 0;
}
const yn = {
  now: () => ($s === void 0 && yn.set(ut.isProcessing || wR.useManualTiming ? ut.timestamp : performance.now()), $s),
  set: (e) => {
    $s = e, queueMicrotask(sO);
  }
}, up = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && // It's animatable if we have a string
(pr.test(e) || e === "0") && // And it contains numbers and/or colors
!e.startsWith("url("));
function aO(e) {
  const t = e[0];
  if (e.length === 1)
    return !0;
  for (let r = 0; r < e.length; r++)
    if (e[r] !== t)
      return !0;
}
function lO(e, t, r, o) {
  const s = e[0];
  if (s === null)
    return !1;
  if (t === "display" || t === "visibility")
    return !0;
  const c = e[e.length - 1], l = up(s, t), u = up(c, t);
  return Oi(l === u, `You are trying to animate ${t} from "${s}" to "${c}". ${s} is not an animatable value - to enable this animation set ${s} to a value animatable to ${c} via the \`style\` property.`), !l || !u ? !1 : aO(e) || (r === "spring" || Ou(r)) && o;
}
const cO = 40;
class Wv {
  constructor({ autoplay: t = !0, delay: r = 0, type: o = "keyframes", repeat: s = 0, repeatDelay: c = 0, repeatType: l = "loop", ...u }) {
    this.isStopped = !1, this.hasAttemptedResolve = !1, this.createdAt = yn.now(), this.options = {
      autoplay: t,
      delay: r,
      type: o,
      repeat: s,
      repeatDelay: c,
      repeatType: l,
      ...u
    }, this.updateFinishedPromise();
  }
  /**
   * This method uses the createdAt and resolvedAt to calculate the
   * animation startTime. *Ideally*, we would use the createdAt time as t=0
   * as the following frame would then be the first frame of the animation in
   * progress, which would feel snappier.
   *
   * However, if there's a delay (main thread work) between the creation of
   * the animation and the first commited frame, we prefer to use resolvedAt
   * to avoid a sudden jump into the animation.
   */
  calcStartTime() {
    return this.resolvedAt ? this.resolvedAt - this.createdAt > cO ? this.resolvedAt : this.createdAt : this.createdAt;
  }
  /**
   * A getter for resolved data. If keyframes are not yet resolved, accessing
   * this.resolved will synchronously flush all pending keyframe resolvers.
   * This is a deoptimisation, but at its worst still batches read/writes.
   */
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && BR(), this._resolved;
  }
  /**
   * A method to be called when the keyframes resolver completes. This method
   * will check if its possible to run the animation and, if not, skip it.
   * Otherwise, it will call initPlayback on the implementing class.
   */
  onKeyframesResolved(t, r) {
    this.resolvedAt = yn.now(), this.hasAttemptedResolve = !0;
    const { name: o, type: s, velocity: c, delay: l, onComplete: u, onUpdate: f, isGenerator: h } = this.options;
    if (!h && !lO(t, o, s, c))
      if (l)
        this.options.duration = 0;
      else {
        f == null || f(Aa(t, this.options, r)), u == null || u(), this.resolveFinishedPromise();
        return;
      }
    const p = this.initPlayback(t, r);
    p !== !1 && (this._resolved = {
      keyframes: t,
      finalKeyframe: r,
      ...p
    }, this.onPostResolved());
  }
  onPostResolved() {
  }
  /**
   * Allows the returned animation to be awaited or promise-chained. Currently
   * resolves when the animation finishes at all but in a future update could/should
   * reject if its cancels.
   */
  then(t, r) {
    return this.currentFinishedPromise.then(t, r);
  }
  flatten() {
    this.options.type = "keyframes", this.options.ease = "linear";
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((t) => {
      this.resolveFinishedPromise = t;
    });
  }
}
function $v(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const uO = 5;
function Uv(e, t, r) {
  const o = Math.max(t - uO, 0);
  return $v(r - e(o), t - o);
}
const cc = 1e-3, fO = 0.01, fp = 10, dO = 0.05, hO = 1;
function pO({ duration: e = 800, bounce: t = 0.25, velocity: r = 0, mass: o = 1 }) {
  let s, c;
  Oi(e <= gn(fp), "Spring duration must be 10 seconds or less");
  let l = 1 - t;
  l = hr(dO, hO, l), e = hr(fO, fp, jn(e)), l < 1 ? (s = (h) => {
    const p = h * l, g = p * e, y = p - r, C = Wc(h, l), T = Math.exp(-g);
    return cc - y / C * T;
  }, c = (h) => {
    const g = h * l * e, y = g * r + r, C = Math.pow(l, 2) * Math.pow(h, 2) * e, T = Math.exp(-g), S = Wc(Math.pow(h, 2), l);
    return (-s(h) + cc > 0 ? -1 : 1) * ((y - C) * T) / S;
  }) : (s = (h) => {
    const p = Math.exp(-h * e), g = (h - r) * e + 1;
    return -cc + p * g;
  }, c = (h) => {
    const p = Math.exp(-h * e), g = (r - h) * (e * e);
    return p * g;
  });
  const u = 5 / e, f = gO(s, c, u);
  if (e = gn(e), isNaN(f))
    return {
      stiffness: 100,
      damping: 10,
      duration: e
    };
  {
    const h = Math.pow(f, 2) * o;
    return {
      stiffness: h,
      damping: l * 2 * Math.sqrt(o * h),
      duration: e
    };
  }
}
const mO = 12;
function gO(e, t, r) {
  let o = r;
  for (let s = 1; s < mO; s++)
    o = o - e(o) / t(o);
  return o;
}
function Wc(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const vO = ["duration", "bounce"], yO = ["stiffness", "damping", "mass"];
function dp(e, t) {
  return t.some((r) => e[r] !== void 0);
}
function xO(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!dp(e, yO) && dp(e, vO)) {
    const r = pO(e);
    t = {
      ...t,
      ...r,
      mass: 1
    }, t.isResolvedFromDuration = !0;
  }
  return t;
}
function Hv({ keyframes: e, restDelta: t, restSpeed: r, ...o }) {
  const s = e[0], c = e[e.length - 1], l = { done: !1, value: s }, { stiffness: u, damping: f, mass: h, duration: p, velocity: g, isResolvedFromDuration: y } = xO({
    ...o,
    velocity: -jn(o.velocity || 0)
  }), C = g || 0, T = f / (2 * Math.sqrt(u * h)), S = c - s, _ = jn(Math.sqrt(u / h)), A = Math.abs(S) < 5;
  r || (r = A ? 0.01 : 2), t || (t = A ? 5e-3 : 0.5);
  let R;
  if (T < 1) {
    const N = Wc(_, T);
    R = (L) => {
      const j = Math.exp(-T * _ * L);
      return c - j * ((C + T * _ * S) / N * Math.sin(N * L) + S * Math.cos(N * L));
    };
  } else if (T === 1)
    R = (N) => c - Math.exp(-_ * N) * (S + (C + _ * S) * N);
  else {
    const N = _ * Math.sqrt(T * T - 1);
    R = (L) => {
      const j = Math.exp(-T * _ * L), H = Math.min(N * L, 300);
      return c - j * ((C + T * _ * S) * Math.sinh(H) + N * S * Math.cosh(H)) / N;
    };
  }
  return {
    calculatedDuration: y && p || null,
    next: (N) => {
      const L = R(N);
      if (y)
        l.done = N >= p;
      else {
        let j = 0;
        T < 1 && (j = N === 0 ? gn(C) : Uv(R, N, L));
        const H = Math.abs(j) <= r, $ = Math.abs(c - L) <= t;
        l.done = H && $;
      }
      return l.value = l.done ? c : L, l;
    }
  };
}
function hp({ keyframes: e, velocity: t = 0, power: r = 0.8, timeConstant: o = 325, bounceDamping: s = 10, bounceStiffness: c = 500, modifyTarget: l, min: u, max: f, restDelta: h = 0.5, restSpeed: p }) {
  const g = e[0], y = {
    done: !1,
    value: g
  }, C = (U) => u !== void 0 && U < u || f !== void 0 && U > f, T = (U) => u === void 0 ? f : f === void 0 || Math.abs(u - U) < Math.abs(f - U) ? u : f;
  let S = r * t;
  const _ = g + S, A = l === void 0 ? _ : l(_);
  A !== _ && (S = A - g);
  const R = (U) => -S * Math.exp(-U / o), N = (U) => A + R(U), L = (U) => {
    const J = R(U), ee = N(U);
    y.done = Math.abs(J) <= h, y.value = y.done ? A : ee;
  };
  let j, H;
  const $ = (U) => {
    C(y.value) && (j = U, H = Hv({
      keyframes: [y.value, T(y.value)],
      velocity: Uv(N, U, y.value),
      // TODO: This should be passing * 1000
      damping: s,
      stiffness: c,
      restDelta: h,
      restSpeed: p
    }));
  };
  return $(0), {
    calculatedDuration: null,
    next: (U) => {
      let J = !1;
      return !H && j === void 0 && (J = !0, L(U), $(U)), j !== void 0 && U >= j ? H.next(U - j) : (!J && L(U), y);
    }
  };
}
const wO = /* @__PURE__ */ Mo(0.42, 0, 1, 1), bO = /* @__PURE__ */ Mo(0, 0, 0.58, 1), zv = /* @__PURE__ */ Mo(0.42, 0, 0.58, 1), SO = (e) => Array.isArray(e) && typeof e[0] != "number", Nu = (e) => Array.isArray(e) && typeof e[0] == "number", pp = {
  linear: ft,
  easeIn: wO,
  easeInOut: zv,
  easeOut: bO,
  circIn: Cu,
  circInOut: _v,
  circOut: Cv,
  backIn: Su,
  backInOut: bv,
  backOut: wv,
  anticipate: Sv
}, mp = (e) => {
  if (Nu(e)) {
    dr(e.length === 4, "Cubic bezier arrays must contain four numerical values.");
    const [t, r, o, s] = e;
    return Mo(t, r, o, s);
  } else if (typeof e == "string")
    return dr(pp[e] !== void 0, `Invalid easing type '${e}'`), pp[e];
  return e;
}, CO = (e, t) => (r) => t(e(r)), kn = (...e) => e.reduce(CO), wi = (e, t, r) => {
  const o = t - e;
  return o === 0 ? 1 : (r - e) / o;
}, Ke = (e, t, r) => e + (t - e) * r;
function uc(e, t, r) {
  return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + (t - e) * 6 * r : r < 1 / 2 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e;
}
function _O({ hue: e, saturation: t, lightness: r, alpha: o }) {
  e /= 360, t /= 100, r /= 100;
  let s = 0, c = 0, l = 0;
  if (!t)
    s = c = l = r;
  else {
    const u = r < 0.5 ? r * (1 + t) : r + t - r * t, f = 2 * r - u;
    s = uc(f, u, e + 1 / 3), c = uc(f, u, e), l = uc(f, u, e - 1 / 3);
  }
  return {
    red: Math.round(s * 255),
    green: Math.round(c * 255),
    blue: Math.round(l * 255),
    alpha: o
  };
}
function ta(e, t) {
  return (r) => r > 0 ? t : e;
}
const fc = (e, t, r) => {
  const o = e * e, s = r * (t * t - o) + o;
  return s < 0 ? 0 : Math.sqrt(s);
}, TO = [Fc, Dr, ci], PO = (e) => TO.find((t) => t.test(e));
function gp(e) {
  const t = PO(e);
  if (Oi(!!t, `'${e}' is not an animatable color. Use the equivalent color code instead.`), !t)
    return !1;
  let r = t.parse(e);
  return t === ci && (r = _O(r)), r;
}
const vp = (e, t) => {
  const r = gp(e), o = gp(t);
  if (!r || !o)
    return ta(e, t);
  const s = { ...r };
  return (c) => (s.red = fc(r.red, o.red, c), s.green = fc(r.green, o.green, c), s.blue = fc(r.blue, o.blue, c), s.alpha = Ke(r.alpha, o.alpha, c), Dr.transform(s));
}, $c = /* @__PURE__ */ new Set(["none", "hidden"]);
function AO(e, t) {
  return $c.has(e) ? (r) => r <= 0 ? e : t : (r) => r >= 1 ? t : e;
}
function EO(e, t) {
  return (r) => Ke(e, t, r);
}
function Mu(e) {
  return typeof e == "number" ? EO : typeof e == "string" ? _u(e) ? ta : vt.test(e) ? vp : NO : Array.isArray(e) ? Gv : typeof e == "object" ? vt.test(e) ? vp : RO : ta;
}
function Gv(e, t) {
  const r = [...e], o = r.length, s = e.map((c, l) => Mu(c)(c, t[l]));
  return (c) => {
    for (let l = 0; l < o; l++)
      r[l] = s[l](c);
    return r;
  };
}
function RO(e, t) {
  const r = { ...e, ...t }, o = {};
  for (const s in r)
    e[s] !== void 0 && t[s] !== void 0 && (o[s] = Mu(e[s])(e[s], t[s]));
  return (s) => {
    for (const c in o)
      r[c] = o[c](s);
    return r;
  };
}
function OO(e, t) {
  var r;
  const o = [], s = { color: 0, var: 0, number: 0 };
  for (let c = 0; c < t.values.length; c++) {
    const l = t.types[c], u = e.indexes[l][s[l]], f = (r = e.values[u]) !== null && r !== void 0 ? r : 0;
    o[c] = f, s[l]++;
  }
  return o;
}
const NO = (e, t) => {
  const r = pr.createTransformer(t), o = Co(e), s = Co(t);
  return o.indexes.var.length === s.indexes.var.length && o.indexes.color.length === s.indexes.color.length && o.indexes.number.length >= s.indexes.number.length ? $c.has(e) && !s.values.length || $c.has(t) && !o.values.length ? AO(e, t) : kn(Gv(OO(o, s), s.values), r) : (Oi(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), ta(e, t));
};
function Kv(e, t, r) {
  return typeof e == "number" && typeof t == "number" && typeof r == "number" ? Ke(e, t, r) : Mu(e)(e, t);
}
function MO(e, t, r) {
  const o = [], s = r || Kv, c = e.length - 1;
  for (let l = 0; l < c; l++) {
    let u = s(e[l], e[l + 1]);
    if (t) {
      const f = Array.isArray(t) ? t[l] || ft : t;
      u = kn(f, u);
    }
    o.push(u);
  }
  return o;
}
function DO(e, t, { clamp: r = !0, ease: o, mixer: s } = {}) {
  const c = e.length;
  if (dr(c === t.length, "Both input and output ranges must be the same length"), c === 1)
    return () => t[0];
  if (c === 2 && e[0] === e[1])
    return () => t[1];
  e[0] > e[c - 1] && (e = [...e].reverse(), t = [...t].reverse());
  const l = MO(t, o, s), u = l.length, f = (h) => {
    let p = 0;
    if (u > 1)
      for (; p < e.length - 2 && !(h < e[p + 1]); p++)
        ;
    const g = wi(e[p], e[p + 1], h);
    return l[p](g);
  };
  return r ? (h) => f(hr(e[0], e[c - 1], h)) : f;
}
function IO(e, t) {
  const r = e[e.length - 1];
  for (let o = 1; o <= t; o++) {
    const s = wi(0, t, o);
    e.push(Ke(r, 1, s));
  }
}
function LO(e) {
  const t = [0];
  return IO(t, e.length - 1), t;
}
function jO(e, t) {
  return e.map((r) => r * t);
}
function kO(e, t) {
  return e.map(() => t || zv).splice(0, e.length - 1);
}
function na({ duration: e = 300, keyframes: t, times: r, ease: o = "easeInOut" }) {
  const s = SO(o) ? o.map(mp) : mp(o), c = {
    done: !1,
    value: t[0]
  }, l = jO(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    r && r.length === t.length ? r : LO(t),
    e
  ), u = DO(l, t, {
    ease: Array.isArray(s) ? s : kO(t, s)
  });
  return {
    calculatedDuration: e,
    next: (f) => (c.value = u(f), c.done = f >= e, c)
  };
}
const yp = 2e4;
function VO(e) {
  let t = 0;
  const r = 50;
  let o = e.next(t);
  for (; !o.done && t < yp; )
    t += r, o = e.next(t);
  return t >= yp ? 1 / 0 : t;
}
const FO = (e) => {
  const t = ({ timestamp: r }) => e(r);
  return {
    start: () => je.update(t, !0),
    stop: () => fr(t),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => ut.isProcessing ? ut.timestamp : yn.now()
  };
}, BO = {
  decay: hp,
  inertia: hp,
  tween: na,
  keyframes: na,
  spring: Hv
}, WO = (e) => e / 100;
class Du extends Wv {
  constructor(t) {
    super(t), this.holdTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.startTime = null, this.state = "idle", this.stop = () => {
      if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle")
        return;
      this.teardown();
      const { onStop: f } = this.options;
      f && f();
    };
    const { name: r, motionValue: o, element: s, keyframes: c } = this.options, l = (s == null ? void 0 : s.KeyframeResolver) || Tu, u = (f, h) => this.onKeyframesResolved(f, h);
    this.resolver = new l(c, u, r, o, s), this.resolver.scheduleResolve();
  }
  flatten() {
    super.flatten(), this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes));
  }
  initPlayback(t) {
    const { type: r = "keyframes", repeat: o = 0, repeatDelay: s = 0, repeatType: c, velocity: l = 0 } = this.options, u = Ou(r) ? r : BO[r] || na;
    let f, h;
    u !== na && typeof t[0] != "number" && (process.env.NODE_ENV !== "production" && dr(t.length === 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${t}`), f = kn(WO, Kv(t[0], t[1])), t = [0, 100]);
    const p = u({ ...this.options, keyframes: t });
    c === "mirror" && (h = u({
      ...this.options,
      keyframes: [...t].reverse(),
      velocity: -l
    })), p.calculatedDuration === null && (p.calculatedDuration = VO(p));
    const { calculatedDuration: g } = p, y = g + s, C = y * (o + 1) - s;
    return {
      generator: p,
      mirroredGenerator: h,
      mapPercentToKeyframes: f,
      calculatedDuration: g,
      resolvedDuration: y,
      totalDuration: C
    };
  }
  onPostResolved() {
    const { autoplay: t = !0 } = this.options;
    this.play(), this.pendingPlayState === "paused" || !t ? this.pause() : this.state = this.pendingPlayState;
  }
  tick(t, r = !1) {
    const { resolved: o } = this;
    if (!o) {
      const { keyframes: U } = this.options;
      return { done: !0, value: U[U.length - 1] };
    }
    const { finalKeyframe: s, generator: c, mirroredGenerator: l, mapPercentToKeyframes: u, keyframes: f, calculatedDuration: h, totalDuration: p, resolvedDuration: g } = o;
    if (this.startTime === null)
      return c.next(0);
    const { delay: y, repeat: C, repeatType: T, repeatDelay: S, onUpdate: _ } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - p / this.speed, this.startTime)), r ? this.currentTime = t : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(t - this.startTime) * this.speed;
    const A = this.currentTime - y * (this.speed >= 0 ? 1 : -1), R = this.speed >= 0 ? A < 0 : A > p;
    this.currentTime = Math.max(A, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = p);
    let N = this.currentTime, L = c;
    if (C) {
      const U = Math.min(this.currentTime, p) / g;
      let J = Math.floor(U), ee = U % 1;
      !ee && U >= 1 && (ee = 1), ee === 1 && J--, J = Math.min(J, C + 1), !!(J % 2) && (T === "reverse" ? (ee = 1 - ee, S && (ee -= S / g)) : T === "mirror" && (L = l)), N = hr(0, 1, ee) * g;
    }
    const j = R ? { done: !1, value: f[0] } : L.next(N);
    u && (j.value = u(j.value));
    let { done: H } = j;
    !R && h !== null && (H = this.speed >= 0 ? this.currentTime >= p : this.currentTime <= 0);
    const $ = this.holdTime === null && (this.state === "finished" || this.state === "running" && H);
    return $ && s !== void 0 && (j.value = Aa(f, this.options, s)), _ && _(j.value), $ && this.finish(), j;
  }
  get duration() {
    const { resolved: t } = this;
    return t ? jn(t.calculatedDuration) : 0;
  }
  get time() {
    return jn(this.currentTime);
  }
  set time(t) {
    t = gn(t), this.currentTime = t, this.holdTime !== null || this.speed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const r = this.playbackSpeed !== t;
    this.playbackSpeed = t, r && (this.time = jn(this.currentTime));
  }
  play() {
    if (this.resolver.isScheduled || this.resolver.resume(), !this._resolved) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped)
      return;
    const { driver: t = FO, onPlay: r, startTime: o } = this.options;
    this.driver || (this.driver = t((c) => this.tick(c))), r && r();
    const s = this.driver.now();
    this.holdTime !== null ? this.startTime = s - this.holdTime : this.startTime ? this.state === "finished" && (this.startTime = s) : this.startTime = o ?? this.calcStartTime(), this.state === "finished" && this.updateFinishedPromise(), this.cancelTime = this.startTime, this.holdTime = null, this.state = "running", this.driver.start();
  }
  pause() {
    var t;
    if (!this._resolved) {
      this.pendingPlayState = "paused";
      return;
    }
    this.state = "paused", this.holdTime = (t = this.currentTime) !== null && t !== void 0 ? t : 0;
  }
  complete() {
    this.state !== "running" && this.play(), this.pendingPlayState = this.state = "finished", this.holdTime = null;
  }
  finish() {
    this.teardown(), this.state = "finished";
    const { onComplete: t } = this.options;
    t && t();
  }
  cancel() {
    this.cancelTime !== null && this.tick(this.cancelTime), this.teardown(), this.updateFinishedPromise();
  }
  teardown() {
    this.state = "idle", this.stopDriver(), this.resolveFinishedPromise(), this.updateFinishedPromise(), this.startTime = this.cancelTime = null, this.resolver.cancel();
  }
  stopDriver() {
    this.driver && (this.driver.stop(), this.driver = void 0);
  }
  sample(t) {
    return this.startTime = 0, this.tick(t, !0);
  }
}
const $O = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Can be accelerated but currently disabled until https://issues.chromium.org/issues/41491098 is resolved
  // or until we implement support for linear() easing.
  // "background-color"
]), UO = 10, HO = (e, t) => {
  let r = "";
  const o = Math.max(Math.round(t / UO), 2);
  for (let s = 0; s < o; s++)
    r += e(wi(0, o - 1, s)) + ", ";
  return `linear(${r.substring(0, r.length - 2)})`;
};
function Iu(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const zO = {
  linearEasing: void 0
};
function GO(e, t) {
  const r = Iu(e);
  return () => {
    var o;
    return (o = zO[t]) !== null && o !== void 0 ? o : r();
  };
}
const ra = /* @__PURE__ */ GO(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing");
function Yv(e) {
  return !!(typeof e == "function" && ra() || !e || typeof e == "string" && (e in Uc || ra()) || Nu(e) || Array.isArray(e) && e.every(Yv));
}
const fo = ([e, t, r, o]) => `cubic-bezier(${e}, ${t}, ${r}, ${o})`, Uc = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ fo([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ fo([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ fo([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ fo([0.33, 1.53, 0.69, 0.99])
};
function qv(e, t) {
  if (e)
    return typeof e == "function" && ra() ? HO(e, t) : Nu(e) ? fo(e) : Array.isArray(e) ? e.map((r) => qv(r, t) || Uc.easeOut) : Uc[e];
}
function KO(e, t, r, { delay: o = 0, duration: s = 300, repeat: c = 0, repeatType: l = "loop", ease: u = "easeInOut", times: f } = {}) {
  const h = { [t]: r };
  f && (h.offset = f);
  const p = qv(u, s);
  return Array.isArray(p) && (h.easing = p), e.animate(h, {
    delay: o,
    duration: s,
    easing: Array.isArray(p) ? "linear" : p,
    fill: "both",
    iterations: c + 1,
    direction: l === "reverse" ? "alternate" : "normal"
  });
}
function xp(e, t) {
  e.timeline = t, e.onfinish = null;
}
const YO = /* @__PURE__ */ Iu(() => Object.hasOwnProperty.call(Element.prototype, "animate")), ia = 10, qO = 2e4;
function XO(e) {
  return Ou(e.type) || e.type === "spring" || !Yv(e.ease);
}
function ZO(e, t) {
  const r = new Du({
    ...t,
    keyframes: e,
    repeat: 0,
    delay: 0,
    isGenerator: !0
  });
  let o = { done: !1, value: e[0] };
  const s = [];
  let c = 0;
  for (; !o.done && c < qO; )
    o = r.sample(c), s.push(o.value), c += ia;
  return {
    times: void 0,
    keyframes: s,
    duration: c - ia,
    ease: "linear"
  };
}
const Xv = {
  anticipate: Sv,
  backInOut: bv,
  circInOut: _v
};
function JO(e) {
  return e in Xv;
}
class wp extends Wv {
  constructor(t) {
    super(t);
    const { name: r, motionValue: o, element: s, keyframes: c } = this.options;
    this.resolver = new Bv(c, (l, u) => this.onKeyframesResolved(l, u), r, o, s), this.resolver.scheduleResolve();
  }
  initPlayback(t, r) {
    var o;
    let { duration: s = 300, times: c, ease: l, type: u, motionValue: f, name: h, startTime: p } = this.options;
    if (!(!((o = f.owner) === null || o === void 0) && o.current))
      return !1;
    if (typeof l == "string" && ra() && JO(l) && (l = Xv[l]), XO(this.options)) {
      const { onComplete: y, onUpdate: C, motionValue: T, element: S, ..._ } = this.options, A = ZO(t, _);
      t = A.keyframes, t.length === 1 && (t[1] = t[0]), s = A.duration, c = A.times, l = A.ease, u = "keyframes";
    }
    const g = KO(f.owner.current, h, t, { ...this.options, duration: s, times: c, ease: l });
    return g.startTime = p ?? this.calcStartTime(), this.pendingTimeline ? (xp(g, this.pendingTimeline), this.pendingTimeline = void 0) : g.onfinish = () => {
      const { onComplete: y } = this.options;
      f.set(Aa(t, this.options, r)), y && y(), this.cancel(), this.resolveFinishedPromise();
    }, {
      animation: g,
      duration: s,
      times: c,
      type: u,
      ease: l,
      keyframes: t
    };
  }
  get duration() {
    const { resolved: t } = this;
    if (!t)
      return 0;
    const { duration: r } = t;
    return jn(r);
  }
  get time() {
    const { resolved: t } = this;
    if (!t)
      return 0;
    const { animation: r } = t;
    return jn(r.currentTime || 0);
  }
  set time(t) {
    const { resolved: r } = this;
    if (!r)
      return;
    const { animation: o } = r;
    o.currentTime = gn(t);
  }
  get speed() {
    const { resolved: t } = this;
    if (!t)
      return 1;
    const { animation: r } = t;
    return r.playbackRate;
  }
  set speed(t) {
    const { resolved: r } = this;
    if (!r)
      return;
    const { animation: o } = r;
    o.playbackRate = t;
  }
  get state() {
    const { resolved: t } = this;
    if (!t)
      return "idle";
    const { animation: r } = t;
    return r.playState;
  }
  get startTime() {
    const { resolved: t } = this;
    if (!t)
      return null;
    const { animation: r } = t;
    return r.startTime;
  }
  /**
   * Replace the default DocumentTimeline with another AnimationTimeline.
   * Currently used for scroll animations.
   */
  attachTimeline(t) {
    if (!this._resolved)
      this.pendingTimeline = t;
    else {
      const { resolved: r } = this;
      if (!r)
        return ft;
      const { animation: o } = r;
      xp(o, t);
    }
    return ft;
  }
  play() {
    if (this.isStopped)
      return;
    const { resolved: t } = this;
    if (!t)
      return;
    const { animation: r } = t;
    r.playState === "finished" && this.updateFinishedPromise(), r.play();
  }
  pause() {
    const { resolved: t } = this;
    if (!t)
      return;
    const { animation: r } = t;
    r.pause();
  }
  stop() {
    if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle")
      return;
    this.resolveFinishedPromise(), this.updateFinishedPromise();
    const { resolved: t } = this;
    if (!t)
      return;
    const { animation: r, keyframes: o, duration: s, type: c, ease: l, times: u } = t;
    if (r.playState === "idle" || r.playState === "finished")
      return;
    if (this.time) {
      const { motionValue: h, onUpdate: p, onComplete: g, element: y, ...C } = this.options, T = new Du({
        ...C,
        keyframes: o,
        duration: s,
        type: c,
        ease: l,
        times: u,
        isGenerator: !0
      }), S = gn(this.time);
      h.setWithVelocity(T.sample(S - ia).value, T.sample(S).value, ia);
    }
    const { onStop: f } = this.options;
    f && f(), this.cancel();
  }
  complete() {
    const { resolved: t } = this;
    t && t.animation.finish();
  }
  cancel() {
    const { resolved: t } = this;
    t && t.animation.cancel();
  }
  static supports(t) {
    const { motionValue: r, name: o, repeatDelay: s, repeatType: c, damping: l, type: u } = t;
    return YO() && o && $O.has(o) && r && r.owner && r.owner.current instanceof HTMLElement && /**
     * If we're outputting values to onUpdate then we can't use WAAPI as there's
     * no way to read the value from WAAPI every frame.
     */
    !r.owner.getProps().onUpdate && !s && c !== "mirror" && l !== 0 && u !== "inertia";
  }
}
const QO = Iu(() => window.ScrollTimeline !== void 0);
class eN {
  constructor(t) {
    this.stop = () => this.runAll("stop"), this.animations = t.filter(Boolean);
  }
  then(t, r) {
    return Promise.all(this.animations).then(t).catch(r);
  }
  /**
   * TODO: Filter out cancelled or stopped animations before returning
   */
  getAll(t) {
    return this.animations[0][t];
  }
  setAll(t, r) {
    for (let o = 0; o < this.animations.length; o++)
      this.animations[o][t] = r;
  }
  attachTimeline(t, r) {
    const o = this.animations.map((s) => QO() && s.attachTimeline ? s.attachTimeline(t) : r(s));
    return () => {
      o.forEach((s, c) => {
        s && s(), this.animations[c].stop();
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(t) {
    this.setAll("time", t);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(t) {
    this.setAll("speed", t);
  }
  get startTime() {
    return this.getAll("startTime");
  }
  get duration() {
    let t = 0;
    for (let r = 0; r < this.animations.length; r++)
      t = Math.max(t, this.animations[r].duration);
    return t;
  }
  runAll(t) {
    this.animations.forEach((r) => r[t]());
  }
  flatten() {
    this.runAll("flatten");
  }
  play() {
    this.runAll("play");
  }
  pause() {
    this.runAll("pause");
  }
  cancel() {
    this.runAll("cancel");
  }
  complete() {
    this.runAll("complete");
  }
}
function tN({ when: e, delay: t, delayChildren: r, staggerChildren: o, staggerDirection: s, repeat: c, repeatType: l, repeatDelay: u, from: f, elapsed: h, ...p }) {
  return !!Object.keys(p).length;
}
const Lu = (e, t, r, o = {}, s, c) => (l) => {
  const u = bu(o, e) || {}, f = u.delay || o.delay || 0;
  let { elapsed: h = 0 } = o;
  h = h - gn(f);
  let p = {
    keyframes: Array.isArray(r) ? r : [null, r],
    ease: "easeOut",
    velocity: t.getVelocity(),
    ...u,
    delay: -h,
    onUpdate: (y) => {
      t.set(y), u.onUpdate && u.onUpdate(y);
    },
    onComplete: () => {
      l(), u.onComplete && u.onComplete();
    },
    name: e,
    motionValue: t,
    element: c ? void 0 : s
  };
  tN(u) || (p = {
    ...p,
    ...xR(e, p)
  }), p.duration && (p.duration = gn(p.duration)), p.repeatDelay && (p.repeatDelay = gn(p.repeatDelay)), p.from !== void 0 && (p.keyframes[0] = p.from);
  let g = !1;
  if ((p.type === !1 || p.duration === 0 && !p.repeatDelay) && (p.duration = 0, p.delay === 0 && (g = !0)), g && !c && t.get() !== void 0) {
    const y = Aa(p.keyframes, u);
    if (y !== void 0)
      return je.update(() => {
        p.onUpdate(y), p.onComplete();
      }), new eN([]);
  }
  return !c && wp.supports(p) ? new wp(p) : new Du(p);
}, nN = (e) => !!(e && typeof e == "object" && e.mix && e.toValue), rN = (e) => jc(e) ? e[e.length - 1] || 0 : e;
function ju(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function ku(e, t) {
  const r = e.indexOf(t);
  r > -1 && e.splice(r, 1);
}
class Vu {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return ju(this.subscriptions, t), () => ku(this.subscriptions, t);
  }
  notify(t, r, o) {
    const s = this.subscriptions.length;
    if (s)
      if (s === 1)
        this.subscriptions[0](t, r, o);
      else
        for (let c = 0; c < s; c++) {
          const l = this.subscriptions[c];
          l && l(t, r, o);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const bp = 30, iN = (e) => !isNaN(parseFloat(e));
class oN {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   *
   * @internal
   */
  constructor(t, r = {}) {
    this.version = "11.11.17", this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (o, s = !0) => {
      const c = yn.now();
      this.updatedAt !== c && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(o), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), s && this.events.renderRequest && this.events.renderRequest.notify(this.current);
    }, this.hasAnimated = !1, this.setCurrent(t), this.owner = r.owner;
  }
  setCurrent(t) {
    this.current = t, this.updatedAt = yn.now(), this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = iN(this.current));
  }
  setPrevFrameValue(t = this.current) {
    this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt;
  }
  /**
   * Adds a function that will be notified when the `MotionValue` is updated.
   *
   * It returns a function that, when called, will cancel the subscription.
   *
   * When calling `onChange` inside a React component, it should be wrapped with the
   * `useEffect` hook. As it returns an unsubscribe function, this should be returned
   * from the `useEffect` function to ensure you don't add duplicate subscribers..
   *
   * ```jsx
   * export const MyComponent = () => {
   *   const x = useMotionValue(0)
   *   const y = useMotionValue(0)
   *   const opacity = useMotionValue(1)
   *
   *   useEffect(() => {
   *     function updateOpacity() {
   *       const maxXY = Math.max(x.get(), y.get())
   *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
   *       opacity.set(newOpacity)
   *     }
   *
   *     const unsubscribeX = x.on("change", updateOpacity)
   *     const unsubscribeY = y.on("change", updateOpacity)
   *
   *     return () => {
   *       unsubscribeX()
   *       unsubscribeY()
   *     }
   *   }, [])
   *
   *   return <motion.div style={{ x }} />
   * }
   * ```
   *
   * @param subscriber - A function that receives the latest value.
   * @returns A function that, when called, will cancel this subscription.
   *
   * @deprecated
   */
  onChange(t) {
    return process.env.NODE_ENV !== "production" && _a(!1, 'value.onChange(callback) is deprecated. Switch to value.on("change", callback).'), this.on("change", t);
  }
  on(t, r) {
    this.events[t] || (this.events[t] = new Vu());
    const o = this.events[t].add(r);
    return t === "change" ? () => {
      o(), je.read(() => {
        this.events.change.getSize() || this.stop();
      });
    } : o;
  }
  clearListeners() {
    for (const t in this.events)
      this.events[t].clear();
  }
  /**
   * Attaches a passive effect to the `MotionValue`.
   *
   * @internal
   */
  attach(t, r) {
    this.passiveEffect = t, this.stopPassiveEffect = r;
  }
  /**
   * Sets the state of the `MotionValue`.
   *
   * @remarks
   *
   * ```jsx
   * const x = useMotionValue(0)
   * x.set(10)
   * ```
   *
   * @param latest - Latest value to set.
   * @param render - Whether to notify render subscribers. Defaults to `true`
   *
   * @public
   */
  set(t, r = !0) {
    !r || !this.passiveEffect ? this.updateAndNotify(t, r) : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, r, o) {
    this.set(r), this.prev = void 0, this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt - o;
  }
  /**
   * Set the state of the `MotionValue`, stopping any active animations,
   * effects, and resets velocity to `0`.
   */
  jump(t, r = !0) {
    this.updateAndNotify(t), this.prev = t, this.prevUpdatedAt = this.prevFrameValue = void 0, r && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
  /**
   * Returns the latest state of `MotionValue`
   *
   * @returns - The latest state of `MotionValue`
   *
   * @public
   */
  get() {
    return this.current;
  }
  /**
   * @public
   */
  getPrevious() {
    return this.prev;
  }
  /**
   * Returns the latest velocity of `MotionValue`
   *
   * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
   *
   * @public
   */
  getVelocity() {
    const t = yn.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > bp)
      return 0;
    const r = Math.min(this.updatedAt - this.prevUpdatedAt, bp);
    return $v(parseFloat(this.current) - parseFloat(this.prevFrameValue), r);
  }
  /**
   * Registers a new animation to control this `MotionValue`. Only one
   * animation can drive a `MotionValue` at one time.
   *
   * ```jsx
   * value.start()
   * ```
   *
   * @param animation - A function that starts the provided animation
   *
   * @internal
   */
  start(t) {
    return this.stop(), new Promise((r) => {
      this.hasAnimated = !0, this.animation = t(r), this.events.animationStart && this.events.animationStart.notify();
    }).then(() => {
      this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
    });
  }
  /**
   * Stop the currently active animation.
   *
   * @public
   */
  stop() {
    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
  }
  /**
   * Returns `true` if this value is currently animating.
   *
   * @public
   */
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  /**
   * Destroy and clean up subscribers to this `MotionValue`.
   *
   * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
   * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
   * created a `MotionValue` via the `motionValue` function.
   *
   * @public
   */
  destroy() {
    this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function _o(e, t) {
  return new oN(e, t);
}
function sN(e, t, r) {
  e.hasValue(t) ? e.getValue(t).set(r) : e.addValue(t, _o(r));
}
function aN(e, t) {
  const r = Pa(e, t);
  let { transitionEnd: o = {}, transition: s = {}, ...c } = r || {};
  c = { ...c, ...o };
  for (const l in c) {
    const u = rN(c[l]);
    sN(e, l, u);
  }
}
const Fu = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), lN = "framerAppearId", Zv = "data-" + Fu(lN);
function Jv(e) {
  return e.props[Zv];
}
const yt = (e) => !!(e && e.getVelocity);
function cN(e) {
  return !!(yt(e) && e.add);
}
function Hc(e, t) {
  const r = e.getValue("willChange");
  if (cN(r))
    return r.add(t);
}
function uN({ protectedKeys: e, needsAnimating: t }, r) {
  const o = e.hasOwnProperty(r) && t[r] !== !0;
  return t[r] = !1, o;
}
function Qv(e, t, { delay: r = 0, transitionOverride: o, type: s } = {}) {
  var c;
  let { transition: l = e.getDefaultTransition(), transitionEnd: u, ...f } = t;
  o && (l = o);
  const h = [], p = s && e.animationState && e.animationState.getState()[s];
  for (const g in f) {
    const y = e.getValue(g, (c = e.latestValues[g]) !== null && c !== void 0 ? c : null), C = f[g];
    if (C === void 0 || p && uN(p, g))
      continue;
    const T = {
      delay: r,
      ...bu(l || {}, g)
    };
    let S = !1;
    if (window.MotionHandoffAnimation) {
      const A = Jv(e);
      if (A) {
        const R = window.MotionHandoffAnimation(A, g, je);
        R !== null && (T.startTime = R, S = !0);
      }
    }
    Hc(e, g), y.start(Lu(g, y, C, e.shouldReduceMotion && Br.has(g) ? { type: !1 } : T, e, S));
    const _ = y.animation;
    _ && h.push(_);
  }
  return u && Promise.all(h).then(() => {
    je.update(() => {
      u && aN(e, u);
    });
  }), h;
}
function zc(e, t, r = {}) {
  var o;
  const s = Pa(e, t, r.type === "exit" ? (o = e.presenceContext) === null || o === void 0 ? void 0 : o.custom : void 0);
  let { transition: c = e.getDefaultTransition() || {} } = s || {};
  r.transitionOverride && (c = r.transitionOverride);
  const l = s ? () => Promise.all(Qv(e, s, r)) : () => Promise.resolve(), u = e.variantChildren && e.variantChildren.size ? (h = 0) => {
    const { delayChildren: p = 0, staggerChildren: g, staggerDirection: y } = c;
    return fN(e, t, p + h, g, y, r);
  } : () => Promise.resolve(), { when: f } = c;
  if (f) {
    const [h, p] = f === "beforeChildren" ? [l, u] : [u, l];
    return h().then(() => p());
  } else
    return Promise.all([l(), u(r.delay)]);
}
function fN(e, t, r = 0, o = 0, s = 1, c) {
  const l = [], u = (e.variantChildren.size - 1) * o, f = s === 1 ? (h = 0) => h * o : (h = 0) => u - h * o;
  return Array.from(e.variantChildren).sort(dN).forEach((h, p) => {
    h.notify("AnimationStart", t), l.push(zc(h, t, {
      ...c,
      delay: r + f(p)
    }).then(() => h.notify("AnimationComplete", t)));
  }), Promise.all(l);
}
function dN(e, t) {
  return e.sortNodePosition(t);
}
function hN(e, t, r = {}) {
  e.notify("AnimationStart", t);
  let o;
  if (Array.isArray(t)) {
    const s = t.map((c) => zc(e, c, r));
    o = Promise.all(s);
  } else if (typeof t == "string")
    o = zc(e, t, r);
  else {
    const s = typeof t == "function" ? Pa(e, t, r.custom) : t;
    o = Promise.all(Qv(e, s, r));
  }
  return o.then(() => {
    e.notify("AnimationComplete", t);
  });
}
const pN = wu.length;
function ey(e) {
  if (!e)
    return;
  if (!e.isControllingVariants) {
    const r = e.parent ? ey(e.parent) || {} : {};
    return e.props.initial !== void 0 && (r.initial = e.props.initial), r;
  }
  const t = {};
  for (let r = 0; r < pN; r++) {
    const o = wu[r], s = e.props[o];
    (bo(s) || s === !1) && (t[o] = s);
  }
  return t;
}
const mN = [...xu].reverse(), gN = xu.length;
function vN(e) {
  return (t) => Promise.all(t.map(({ animation: r, options: o }) => hN(e, r, o)));
}
function yN(e) {
  let t = vN(e), r = Sp(), o = !0;
  const s = (f) => (h, p) => {
    var g;
    const y = Pa(e, p, f === "exit" ? (g = e.presenceContext) === null || g === void 0 ? void 0 : g.custom : void 0);
    if (y) {
      const { transition: C, transitionEnd: T, ...S } = y;
      h = { ...h, ...S, ...T };
    }
    return h;
  };
  function c(f) {
    t = f(e);
  }
  function l(f) {
    const { props: h } = e, p = ey(e.parent) || {}, g = [], y = /* @__PURE__ */ new Set();
    let C = {}, T = 1 / 0;
    for (let _ = 0; _ < gN; _++) {
      const A = mN[_], R = r[A], N = h[A] !== void 0 ? h[A] : p[A], L = bo(N), j = A === f ? R.isActive : null;
      j === !1 && (T = _);
      let H = N === p[A] && N !== h[A] && L;
      if (H && o && e.manuallyAnimateOnMount && (H = !1), R.protectedKeys = { ...C }, // If it isn't active and hasn't *just* been set as inactive
      !R.isActive && j === null || // If we didn't and don't have any defined prop for this animation type
      !N && !R.prevProp || // Or if the prop doesn't define an animation
      Ta(N) || typeof N == "boolean")
        continue;
      const $ = xN(R.prevProp, N);
      let U = $ || // If we're making this variant active, we want to always make it active
      A === f && R.isActive && !H && L || // If we removed a higher-priority variant (i is in reverse order)
      _ > T && L, J = !1;
      const ee = Array.isArray(N) ? N : [N];
      let he = ee.reduce(s(A), {});
      j === !1 && (he = {});
      const { prevResolvedValues: Z = {} } = R, ae = {
        ...Z,
        ...he
      }, te = (X) => {
        U = !0, y.has(X) && (J = !0, y.delete(X)), R.needsAnimating[X] = !0;
        const K = e.getValue(X);
        K && (K.liveStyle = !1);
      };
      for (const X in ae) {
        const K = he[X], pe = Z[X];
        if (C.hasOwnProperty(X))
          continue;
        let Me = !1;
        jc(K) && jc(pe) ? Me = !mv(K, pe) : Me = K !== pe, Me ? K != null ? te(X) : y.add(X) : K !== void 0 && y.has(X) ? te(X) : R.protectedKeys[X] = !0;
      }
      R.prevProp = N, R.prevResolvedValues = he, R.isActive && (C = { ...C, ...he }), o && e.blockInitialAnimation && (U = !1), U && (!(H && $) || J) && g.push(...ee.map((X) => ({
        animation: X,
        options: { type: A }
      })));
    }
    if (y.size) {
      const _ = {};
      y.forEach((A) => {
        const R = e.getBaseTarget(A), N = e.getValue(A);
        N && (N.liveStyle = !0), _[A] = R ?? null;
      }), g.push({ animation: _ });
    }
    let S = !!g.length;
    return o && (h.initial === !1 || h.initial === h.animate) && !e.manuallyAnimateOnMount && (S = !1), o = !1, S ? t(g) : Promise.resolve();
  }
  function u(f, h) {
    var p;
    if (r[f].isActive === h)
      return Promise.resolve();
    (p = e.variantChildren) === null || p === void 0 || p.forEach((y) => {
      var C;
      return (C = y.animationState) === null || C === void 0 ? void 0 : C.setActive(f, h);
    }), r[f].isActive = h;
    const g = l(f);
    for (const y in r)
      r[y].protectedKeys = {};
    return g;
  }
  return {
    animateChanges: l,
    setActive: u,
    setAnimateFunction: c,
    getState: () => r,
    reset: () => {
      r = Sp(), o = !0;
    }
  };
}
function xN(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !mv(t, e) : !1;
}
function Or(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function Sp() {
  return {
    animate: Or(!0),
    whileInView: Or(),
    whileHover: Or(),
    whileTap: Or(),
    whileDrag: Or(),
    whileFocus: Or(),
    exit: Or()
  };
}
class vr {
  constructor(t) {
    this.isMounted = !1, this.node = t;
  }
  update() {
  }
}
class wN extends vr {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(t) {
    super(t), t.animationState || (t.animationState = yN(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    Ta(t) && (this.unmountControls = t.subscribe(this.node));
  }
  /**
   * Subscribe any provided AnimationControls to the component's VisualElement
   */
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(), { animate: r } = this.node.prevProps || {};
    t !== r && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var t;
    this.node.animationState.reset(), (t = this.unmountControls) === null || t === void 0 || t.call(this);
  }
}
let bN = 0;
class SN extends vr {
  constructor() {
    super(...arguments), this.id = bN++;
  }
  update() {
    if (!this.node.presenceContext)
      return;
    const { isPresent: t, onExitComplete: r } = this.node.presenceContext, { isPresent: o } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === o)
      return;
    const s = this.node.animationState.setActive("exit", !t);
    r && !t && s.then(() => r(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {
  }
}
const CN = {
  animation: {
    Feature: wN
  },
  exit: {
    Feature: SN
  }
}, ty = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1;
function Ea(e, t = "page") {
  return {
    point: {
      x: e[`${t}X`],
      y: e[`${t}Y`]
    }
  };
}
const _N = (e) => (t) => ty(t) && e(t, Ea(t));
function In(e, t, r, o = { passive: !0 }) {
  return e.addEventListener(t, r, o), () => e.removeEventListener(t, r);
}
function Vn(e, t, r, o) {
  return In(e, t, _N(r), o);
}
const Cp = (e, t) => Math.abs(e - t);
function TN(e, t) {
  const r = Cp(e.x, t.x), o = Cp(e.y, t.y);
  return Math.sqrt(r ** 2 + o ** 2);
}
class ny {
  constructor(t, r, { transformPagePoint: o, contextWindow: s, dragSnapToOrigin: c = !1 } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const g = hc(this.lastMoveEventInfo, this.history), y = this.startEvent !== null, C = TN(g.offset, { x: 0, y: 0 }) >= 3;
      if (!y && !C)
        return;
      const { point: T } = g, { timestamp: S } = ut;
      this.history.push({ ...T, timestamp: S });
      const { onStart: _, onMove: A } = this.handlers;
      y || (_ && _(this.lastMoveEvent, g), this.startEvent = this.lastMoveEvent), A && A(this.lastMoveEvent, g);
    }, this.handlePointerMove = (g, y) => {
      this.lastMoveEvent = g, this.lastMoveEventInfo = dc(y, this.transformPagePoint), je.update(this.updatePoint, !0);
    }, this.handlePointerUp = (g, y) => {
      this.end();
      const { onEnd: C, onSessionEnd: T, resumeAnimation: S } = this.handlers;
      if (this.dragSnapToOrigin && S && S(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const _ = hc(g.type === "pointercancel" ? this.lastMoveEventInfo : dc(y, this.transformPagePoint), this.history);
      this.startEvent && C && C(g, _), T && T(g, _);
    }, !ty(t))
      return;
    this.dragSnapToOrigin = c, this.handlers = r, this.transformPagePoint = o, this.contextWindow = s || window;
    const l = Ea(t), u = dc(l, this.transformPagePoint), { point: f } = u, { timestamp: h } = ut;
    this.history = [{ ...f, timestamp: h }];
    const { onSessionStart: p } = r;
    p && p(t, hc(u, this.history)), this.removeListeners = kn(Vn(this.contextWindow, "pointermove", this.handlePointerMove), Vn(this.contextWindow, "pointerup", this.handlePointerUp), Vn(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), fr(this.updatePoint);
  }
}
function dc(e, t) {
  return t ? { point: t(e.point) } : e;
}
function _p(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function hc({ point: e }, t) {
  return {
    point: e,
    delta: _p(e, ry(t)),
    offset: _p(e, PN(t)),
    velocity: AN(t, 0.1)
  };
}
function PN(e) {
  return e[0];
}
function ry(e) {
  return e[e.length - 1];
}
function AN(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let r = e.length - 1, o = null;
  const s = ry(e);
  for (; r >= 0 && (o = e[r], !(s.timestamp - o.timestamp > gn(t))); )
    r--;
  if (!o)
    return { x: 0, y: 0 };
  const c = jn(s.timestamp - o.timestamp);
  if (c === 0)
    return { x: 0, y: 0 };
  const l = {
    x: (s.x - o.x) / c,
    y: (s.y - o.y) / c
  };
  return l.x === 1 / 0 && (l.x = 0), l.y === 1 / 0 && (l.y = 0), l;
}
function iy(e) {
  let t = null;
  return () => {
    const r = () => {
      t = null;
    };
    return t === null ? (t = e, r) : !1;
  };
}
const Tp = iy("dragHorizontal"), Pp = iy("dragVertical");
function oy(e) {
  let t = !1;
  if (e === "y")
    t = Pp();
  else if (e === "x")
    t = Tp();
  else {
    const r = Tp(), o = Pp();
    r && o ? t = () => {
      r(), o();
    } : (r && r(), o && o());
  }
  return t;
}
function sy() {
  const e = oy(!0);
  return e ? (e(), !1) : !0;
}
function ui(e) {
  return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
const ay = 1e-4, EN = 1 - ay, RN = 1 + ay, ly = 0.01, ON = 0 - ly, NN = 0 + ly;
function Ft(e) {
  return e.max - e.min;
}
function MN(e, t, r) {
  return Math.abs(e - t) <= r;
}
function Ap(e, t, r, o = 0.5) {
  e.origin = o, e.originPoint = Ke(t.min, t.max, e.origin), e.scale = Ft(r) / Ft(t), e.translate = Ke(r.min, r.max, e.origin) - e.originPoint, (e.scale >= EN && e.scale <= RN || isNaN(e.scale)) && (e.scale = 1), (e.translate >= ON && e.translate <= NN || isNaN(e.translate)) && (e.translate = 0);
}
function mo(e, t, r, o) {
  Ap(e.x, t.x, r.x, o ? o.originX : void 0), Ap(e.y, t.y, r.y, o ? o.originY : void 0);
}
function Ep(e, t, r) {
  e.min = r.min + t.min, e.max = e.min + Ft(t);
}
function DN(e, t, r) {
  Ep(e.x, t.x, r.x), Ep(e.y, t.y, r.y);
}
function Rp(e, t, r) {
  e.min = t.min - r.min, e.max = e.min + Ft(t);
}
function go(e, t, r) {
  Rp(e.x, t.x, r.x), Rp(e.y, t.y, r.y);
}
function IN(e, { min: t, max: r }, o) {
  return t !== void 0 && e < t ? e = o ? Ke(t, e, o.min) : Math.max(e, t) : r !== void 0 && e > r && (e = o ? Ke(r, e, o.max) : Math.min(e, r)), e;
}
function Op(e, t, r) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: r !== void 0 ? e.max + r - (e.max - e.min) : void 0
  };
}
function LN(e, { top: t, left: r, bottom: o, right: s }) {
  return {
    x: Op(e.x, r, s),
    y: Op(e.y, t, o)
  };
}
function Np(e, t) {
  let r = t.min - e.min, o = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([r, o] = [o, r]), { min: r, max: o };
}
function jN(e, t) {
  return {
    x: Np(e.x, t.x),
    y: Np(e.y, t.y)
  };
}
function kN(e, t) {
  let r = 0.5;
  const o = Ft(e), s = Ft(t);
  return s > o ? r = wi(t.min, t.max - o, e.min) : o > s && (r = wi(e.min, e.max - s, t.min)), hr(0, 1, r);
}
function VN(e, t) {
  const r = {};
  return t.min !== void 0 && (r.min = t.min - e.min), t.max !== void 0 && (r.max = t.max - e.min), r;
}
const Gc = 0.35;
function FN(e = Gc) {
  return e === !1 ? e = 0 : e === !0 && (e = Gc), {
    x: Mp(e, "left", "right"),
    y: Mp(e, "top", "bottom")
  };
}
function Mp(e, t, r) {
  return {
    min: Dp(e, t),
    max: Dp(e, r)
  };
}
function Dp(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const Ip = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), fi = () => ({
  x: Ip(),
  y: Ip()
}), Lp = () => ({ min: 0, max: 0 }), Qe = () => ({
  x: Lp(),
  y: Lp()
});
function Zt(e) {
  return [e("x"), e("y")];
}
function cy({ top: e, left: t, right: r, bottom: o }) {
  return {
    x: { min: t, max: r },
    y: { min: e, max: o }
  };
}
function BN({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function WN(e, t) {
  if (!t)
    return e;
  const r = t({ x: e.left, y: e.top }), o = t({ x: e.right, y: e.bottom });
  return {
    top: r.y,
    left: r.x,
    bottom: o.y,
    right: o.x
  };
}
function pc(e) {
  return e === void 0 || e === 1;
}
function Kc({ scale: e, scaleX: t, scaleY: r }) {
  return !pc(e) || !pc(t) || !pc(r);
}
function Nr(e) {
  return Kc(e) || uy(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
}
function uy(e) {
  return jp(e.x) || jp(e.y);
}
function jp(e) {
  return e && e !== "0%";
}
function oa(e, t, r) {
  const o = e - r, s = t * o;
  return r + s;
}
function kp(e, t, r, o, s) {
  return s !== void 0 && (e = oa(e, s, o)), oa(e, r, o) + t;
}
function Yc(e, t = 0, r = 1, o, s) {
  e.min = kp(e.min, t, r, o, s), e.max = kp(e.max, t, r, o, s);
}
function fy(e, { x: t, y: r }) {
  Yc(e.x, t.translate, t.scale, t.originPoint), Yc(e.y, r.translate, r.scale, r.originPoint);
}
const Vp = 0.999999999999, Fp = 1.0000000000001;
function $N(e, t, r, o = !1) {
  const s = r.length;
  if (!s)
    return;
  t.x = t.y = 1;
  let c, l;
  for (let u = 0; u < s; u++) {
    c = r[u], l = c.projectionDelta;
    const { visualElement: f } = c.options;
    f && f.props.style && f.props.style.display === "contents" || (o && c.options.layoutScroll && c.scroll && c !== c.root && hi(e, {
      x: -c.scroll.offset.x,
      y: -c.scroll.offset.y
    }), l && (t.x *= l.x.scale, t.y *= l.y.scale, fy(e, l)), o && Nr(c.latestValues) && hi(e, c.latestValues));
  }
  t.x < Fp && t.x > Vp && (t.x = 1), t.y < Fp && t.y > Vp && (t.y = 1);
}
function di(e, t) {
  e.min = e.min + t, e.max = e.max + t;
}
function Bp(e, t, r, o, s = 0.5) {
  const c = Ke(e.min, e.max, s);
  Yc(e, t, r, c, o);
}
function hi(e, t) {
  Bp(e.x, t.x, t.scaleX, t.scale, t.originX), Bp(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function dy(e, t) {
  return cy(WN(e.getBoundingClientRect(), t));
}
function UN(e, t, r) {
  const o = dy(e, r), { scroll: s } = t;
  return s && (di(o.x, s.offset.x), di(o.y, s.offset.y)), o;
}
const hy = ({ current: e }) => e ? e.ownerDocument.defaultView : null, HN = /* @__PURE__ */ new WeakMap();
class zN {
  constructor(t) {
    this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = Qe(), this.visualElement = t;
  }
  start(t, { snapToCursor: r = !1 } = {}) {
    const { presenceContext: o } = this.visualElement;
    if (o && o.isPresent === !1)
      return;
    const s = (p) => {
      const { dragSnapToOrigin: g } = this.getProps();
      g ? this.pauseAnimation() : this.stopAnimation(), r && this.snapToCursor(Ea(p, "page").point);
    }, c = (p, g) => {
      const { drag: y, dragPropagation: C, onDragStart: T } = this.getProps();
      if (y && !C && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = oy(y), !this.openGlobalLock))
        return;
      this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), Zt((_) => {
        let A = this.getAxisMotionValue(_).get() || 0;
        if (vn.test(A)) {
          const { projection: R } = this.visualElement;
          if (R && R.layout) {
            const N = R.layout.layoutBox[_];
            N && (A = Ft(N) * (parseFloat(A) / 100));
          }
        }
        this.originPoint[_] = A;
      }), T && je.postRender(() => T(p, g)), Hc(this.visualElement, "transform");
      const { animationState: S } = this.visualElement;
      S && S.setActive("whileDrag", !0);
    }, l = (p, g) => {
      const { dragPropagation: y, dragDirectionLock: C, onDirectionLock: T, onDrag: S } = this.getProps();
      if (!y && !this.openGlobalLock)
        return;
      const { offset: _ } = g;
      if (C && this.currentDirection === null) {
        this.currentDirection = GN(_), this.currentDirection !== null && T && T(this.currentDirection);
        return;
      }
      this.updateAxis("x", g.point, _), this.updateAxis("y", g.point, _), this.visualElement.render(), S && S(p, g);
    }, u = (p, g) => this.stop(p, g), f = () => Zt((p) => {
      var g;
      return this.getAnimationState(p) === "paused" && ((g = this.getAxisMotionValue(p).animation) === null || g === void 0 ? void 0 : g.play());
    }), { dragSnapToOrigin: h } = this.getProps();
    this.panSession = new ny(t, {
      onSessionStart: s,
      onStart: c,
      onMove: l,
      onSessionEnd: u,
      resumeAnimation: f
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: h,
      contextWindow: hy(this.visualElement)
    });
  }
  stop(t, r) {
    const o = this.isDragging;
    if (this.cancel(), !o)
      return;
    const { velocity: s } = r;
    this.startAnimation(s);
    const { onDragEnd: c } = this.getProps();
    c && je.postRender(() => c(t, r));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: r } = this.visualElement;
    t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
    const { dragPropagation: o } = this.getProps();
    !o && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), r && r.setActive("whileDrag", !1);
  }
  updateAxis(t, r, o) {
    const { drag: s } = this.getProps();
    if (!o || !ks(t, s, this.currentDirection))
      return;
    const c = this.getAxisMotionValue(t);
    let l = this.originPoint[t] + o[t];
    this.constraints && this.constraints[t] && (l = IN(l, this.constraints[t], this.elastic[t])), c.set(l);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: r, dragElastic: o } = this.getProps(), s = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (t = this.visualElement.projection) === null || t === void 0 ? void 0 : t.layout, c = this.constraints;
    r && ui(r) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : r && s ? this.constraints = LN(s.layoutBox, r) : this.constraints = !1, this.elastic = FN(o), c !== this.constraints && s && this.constraints && !this.hasMutatedConstraints && Zt((l) => {
      this.constraints !== !1 && this.getAxisMotionValue(l) && (this.constraints[l] = VN(s.layoutBox[l], this.constraints[l]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: r } = this.getProps();
    if (!t || !ui(t))
      return !1;
    const o = t.current;
    dr(o !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
    const { projection: s } = this.visualElement;
    if (!s || !s.layout)
      return !1;
    const c = UN(o, s.root, this.visualElement.getTransformPagePoint());
    let l = jN(s.layout.layoutBox, c);
    if (r) {
      const u = r(BN(l));
      this.hasMutatedConstraints = !!u, u && (l = cy(u));
    }
    return l;
  }
  startAnimation(t) {
    const { drag: r, dragMomentum: o, dragElastic: s, dragTransition: c, dragSnapToOrigin: l, onDragTransitionEnd: u } = this.getProps(), f = this.constraints || {}, h = Zt((p) => {
      if (!ks(p, r, this.currentDirection))
        return;
      let g = f && f[p] || {};
      l && (g = { min: 0, max: 0 });
      const y = s ? 200 : 1e6, C = s ? 40 : 1e7, T = {
        type: "inertia",
        velocity: o ? t[p] : 0,
        bounceStiffness: y,
        bounceDamping: C,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...c,
        ...g
      };
      return this.startAxisValueAnimation(p, T);
    });
    return Promise.all(h).then(u);
  }
  startAxisValueAnimation(t, r) {
    const o = this.getAxisMotionValue(t);
    return Hc(this.visualElement, t), o.start(Lu(t, o, 0, r, this.visualElement, !1));
  }
  stopAnimation() {
    Zt((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    Zt((t) => {
      var r;
      return (r = this.getAxisMotionValue(t).animation) === null || r === void 0 ? void 0 : r.pause();
    });
  }
  getAnimationState(t) {
    var r;
    return (r = this.getAxisMotionValue(t).animation) === null || r === void 0 ? void 0 : r.state;
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(t) {
    const r = `_drag${t.toUpperCase()}`, o = this.visualElement.getProps(), s = o[r];
    return s || this.visualElement.getValue(t, (o.initial ? o.initial[t] : void 0) || 0);
  }
  snapToCursor(t) {
    Zt((r) => {
      const { drag: o } = this.getProps();
      if (!ks(r, o, this.currentDirection))
        return;
      const { projection: s } = this.visualElement, c = this.getAxisMotionValue(r);
      if (s && s.layout) {
        const { min: l, max: u } = s.layout.layoutBox[r];
        c.set(t[r] - Ke(l, u, 0.5));
      }
    });
  }
  /**
   * When the viewport resizes we want to check if the measured constraints
   * have changed and, if so, reposition the element within those new constraints
   * relative to where it was before the resize.
   */
  scalePositionWithinConstraints() {
    if (!this.visualElement.current)
      return;
    const { drag: t, dragConstraints: r } = this.getProps(), { projection: o } = this.visualElement;
    if (!ui(r) || !o || !this.constraints)
      return;
    this.stopAnimation();
    const s = { x: 0, y: 0 };
    Zt((l) => {
      const u = this.getAxisMotionValue(l);
      if (u && this.constraints !== !1) {
        const f = u.get();
        s[l] = kN({ min: f, max: f }, this.constraints[l]);
      }
    });
    const { transformTemplate: c } = this.visualElement.getProps();
    this.visualElement.current.style.transform = c ? c({}, "") : "none", o.root && o.root.updateScroll(), o.updateLayout(), this.resolveConstraints(), Zt((l) => {
      if (!ks(l, t, null))
        return;
      const u = this.getAxisMotionValue(l), { min: f, max: h } = this.constraints[l];
      u.set(Ke(f, h, s[l]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    HN.set(this.visualElement, this);
    const t = this.visualElement.current, r = Vn(t, "pointerdown", (f) => {
      const { drag: h, dragListener: p = !0 } = this.getProps();
      h && p && this.start(f);
    }), o = () => {
      const { dragConstraints: f } = this.getProps();
      ui(f) && f.current && (this.constraints = this.resolveRefConstraints());
    }, { projection: s } = this.visualElement, c = s.addEventListener("measure", o);
    s && !s.layout && (s.root && s.root.updateScroll(), s.updateLayout()), je.read(o);
    const l = In(window, "resize", () => this.scalePositionWithinConstraints()), u = s.addEventListener("didUpdate", ({ delta: f, hasLayoutChanged: h }) => {
      this.isDragging && h && (Zt((p) => {
        const g = this.getAxisMotionValue(p);
        g && (this.originPoint[p] += f[p].translate, g.set(g.get() + f[p].translate));
      }), this.visualElement.render());
    });
    return () => {
      l(), r(), c(), u && u();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(), { drag: r = !1, dragDirectionLock: o = !1, dragPropagation: s = !1, dragConstraints: c = !1, dragElastic: l = Gc, dragMomentum: u = !0 } = t;
    return {
      ...t,
      drag: r,
      dragDirectionLock: o,
      dragPropagation: s,
      dragConstraints: c,
      dragElastic: l,
      dragMomentum: u
    };
  }
}
function ks(e, t, r) {
  return (t === !0 || t === e) && (r === null || r === e);
}
function GN(e, t = 10) {
  let r = null;
  return Math.abs(e.y) > t ? r = "y" : Math.abs(e.x) > t && (r = "x"), r;
}
class KN extends vr {
  constructor(t) {
    super(t), this.removeGroupControls = ft, this.removeListeners = ft, this.controls = new zN(t);
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || ft;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Wp = (e) => (t, r) => {
  e && je.postRender(() => e(t, r));
};
class YN extends vr {
  constructor() {
    super(...arguments), this.removePointerDownListener = ft;
  }
  onPointerDown(t) {
    this.session = new ny(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: hy(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: r, onPan: o, onPanEnd: s } = this.node.getProps();
    return {
      onSessionStart: Wp(t),
      onStart: Wp(r),
      onMove: o,
      onEnd: (c, l) => {
        delete this.session, s && je.postRender(() => s(c, l));
      }
    };
  }
  mount() {
    this.removePointerDownListener = Vn(this.node.current, "pointerdown", (t) => this.onPointerDown(t));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const Bu = Si(null);
function qN() {
  const e = Et(Bu);
  if (e === null)
    return [!0, null];
  const { isPresent: t, onExitComplete: r, register: o } = e, s = x_();
  To(() => o(s), []);
  const c = ym(() => r && r(s), [s, r]);
  return !t && r ? [!1, c] : [!0];
}
const py = Si({}), my = Si({}), Us = {
  /**
   * Global flag as to whether the tree has animated since the last time
   * we resized the window
   */
  hasAnimatedSinceResize: !0,
  /**
   * We set this to true once, on the first update. Any nodes added to the tree beyond that
   * update will be given a `data-projection-id` attribute.
   */
  hasEverUpdated: !1
};
function $p(e, t) {
  return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
const co = {
  correct: (e, t) => {
    if (!t.target)
      return e;
    if (typeof e == "string")
      if (oe.test(e))
        e = parseFloat(e);
      else
        return e;
    const r = $p(e, t.target.x), o = $p(e, t.target.y);
    return `${r}% ${o}%`;
  }
}, XN = {
  correct: (e, { treeScale: t, projectionDelta: r }) => {
    const o = e, s = pr.parse(e);
    if (s.length > 5)
      return o;
    const c = pr.createTransformer(e), l = typeof s[0] != "number" ? 1 : 0, u = r.x.scale * t.x, f = r.y.scale * t.y;
    s[0 + l] /= u, s[1 + l] /= f;
    const h = Ke(u, f, 0.5);
    return typeof s[2 + l] == "number" && (s[2 + l] /= h), typeof s[3 + l] == "number" && (s[3 + l] /= h), c(s);
  }
}, sa = {};
function ZN(e) {
  Object.assign(sa, e);
}
const { schedule: Wu, cancel: dI } = gv(queueMicrotask, !1);
class JN extends w_ {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: t, layoutGroup: r, switchLayoutGroup: o, layoutId: s } = this.props, { projection: c } = t;
    ZN(QN), c && (r.group && r.group.add(c), o && o.register && s && o.register(c), c.root.didUpdate(), c.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), c.setOptions({
      ...c.options,
      onExitComplete: () => this.safeToRemove()
    })), Us.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(t) {
    const { layoutDependency: r, visualElement: o, drag: s, isPresent: c } = this.props, l = o.projection;
    return l && (l.isPresent = c, s || t.layoutDependency !== r || r === void 0 ? l.willUpdate() : this.safeToRemove(), t.isPresent !== c && (c ? l.promote() : l.relegate() || je.postRender(() => {
      const u = l.getStack();
      (!u || !u.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t && (t.root.didUpdate(), Wu.postRender(() => {
      !t.currentAnimation && t.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: t, layoutGroup: r, switchLayoutGroup: o } = this.props, { projection: s } = t;
    s && (s.scheduleCheckAfterUnmount(), r && r.group && r.group.remove(s), o && o.deregister && o.deregister(s));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function gy(e) {
  const [t, r] = qN(), o = Et(py);
  return v.jsx(JN, { ...e, layoutGroup: o, switchLayoutGroup: Et(my), isPresent: t, safeToRemove: r });
}
const QN = {
  borderRadius: {
    ...co,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: co,
  borderTopRightRadius: co,
  borderBottomLeftRadius: co,
  borderBottomRightRadius: co,
  boxShadow: XN
}, vy = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], eM = vy.length, Up = (e) => typeof e == "string" ? parseFloat(e) : e, Hp = (e) => typeof e == "number" || oe.test(e);
function tM(e, t, r, o, s, c) {
  s ? (e.opacity = Ke(
    0,
    // TODO Reinstate this if only child
    r.opacity !== void 0 ? r.opacity : 1,
    nM(o)
  ), e.opacityExit = Ke(t.opacity !== void 0 ? t.opacity : 1, 0, rM(o))) : c && (e.opacity = Ke(t.opacity !== void 0 ? t.opacity : 1, r.opacity !== void 0 ? r.opacity : 1, o));
  for (let l = 0; l < eM; l++) {
    const u = `border${vy[l]}Radius`;
    let f = zp(t, u), h = zp(r, u);
    if (f === void 0 && h === void 0)
      continue;
    f || (f = 0), h || (h = 0), f === 0 || h === 0 || Hp(f) === Hp(h) ? (e[u] = Math.max(Ke(Up(f), Up(h), o), 0), (vn.test(h) || vn.test(f)) && (e[u] += "%")) : e[u] = h;
  }
  (t.rotate || r.rotate) && (e.rotate = Ke(t.rotate || 0, r.rotate || 0, o));
}
function zp(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const nM = /* @__PURE__ */ yy(0, 0.5, Cv), rM = /* @__PURE__ */ yy(0.5, 0.95, ft);
function yy(e, t, r) {
  return (o) => o < e ? 0 : o > t ? 1 : r(wi(e, t, o));
}
function Gp(e, t) {
  e.min = t.min, e.max = t.max;
}
function Xt(e, t) {
  Gp(e.x, t.x), Gp(e.y, t.y);
}
function Kp(e, t) {
  e.translate = t.translate, e.scale = t.scale, e.originPoint = t.originPoint, e.origin = t.origin;
}
function Yp(e, t, r, o, s) {
  return e -= t, e = oa(e, 1 / r, o), s !== void 0 && (e = oa(e, 1 / s, o)), e;
}
function iM(e, t = 0, r = 1, o = 0.5, s, c = e, l = e) {
  if (vn.test(t) && (t = parseFloat(t), t = Ke(l.min, l.max, t / 100) - l.min), typeof t != "number")
    return;
  let u = Ke(c.min, c.max, o);
  e === c && (u -= t), e.min = Yp(e.min, t, r, u, s), e.max = Yp(e.max, t, r, u, s);
}
function qp(e, t, [r, o, s], c, l) {
  iM(e, t[r], t[o], t[s], t.scale, c, l);
}
const oM = ["x", "scaleX", "originX"], sM = ["y", "scaleY", "originY"];
function Xp(e, t, r, o) {
  qp(e.x, t, oM, r ? r.x : void 0, o ? o.x : void 0), qp(e.y, t, sM, r ? r.y : void 0, o ? o.y : void 0);
}
function Zp(e) {
  return e.translate === 0 && e.scale === 1;
}
function xy(e) {
  return Zp(e.x) && Zp(e.y);
}
function Jp(e, t) {
  return e.min === t.min && e.max === t.max;
}
function aM(e, t) {
  return Jp(e.x, t.x) && Jp(e.y, t.y);
}
function Qp(e, t) {
  return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max);
}
function wy(e, t) {
  return Qp(e.x, t.x) && Qp(e.y, t.y);
}
function em(e) {
  return Ft(e.x) / Ft(e.y);
}
function tm(e, t) {
  return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint;
}
class lM {
  constructor() {
    this.members = [];
  }
  add(t) {
    ju(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (ku(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
      const r = this.members[this.members.length - 1];
      r && this.promote(r);
    }
  }
  relegate(t) {
    const r = this.members.findIndex((s) => t === s);
    if (r === 0)
      return !1;
    let o;
    for (let s = r; s >= 0; s--) {
      const c = this.members[s];
      if (c.isPresent !== !1) {
        o = c;
        break;
      }
    }
    return o ? (this.promote(o), !0) : !1;
  }
  promote(t, r) {
    const o = this.lead;
    if (t !== o && (this.prevLead = o, this.lead = t, t.show(), o)) {
      o.instance && o.scheduleRender(), t.scheduleRender(), t.resumeFrom = o, r && (t.resumeFrom.preserveOpacity = !0), o.snapshot && (t.snapshot = o.snapshot, t.snapshot.latestValues = o.animationValues || o.latestValues), t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: s } = t.options;
      s === !1 && o.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: r, resumingFrom: o } = t;
      r.onExitComplete && r.onExitComplete(), o && o.options.onExitComplete && o.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  /**
   * Clear any leads that have been removed this render to prevent them from being
   * used in future animations and to prevent memory leaks
   */
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function cM(e, t, r) {
  let o = "";
  const s = e.x.translate / t.x, c = e.y.translate / t.y, l = (r == null ? void 0 : r.z) || 0;
  if ((s || c || l) && (o = `translate3d(${s}px, ${c}px, ${l}px) `), (t.x !== 1 || t.y !== 1) && (o += `scale(${1 / t.x}, ${1 / t.y}) `), r) {
    const { transformPerspective: h, rotate: p, rotateX: g, rotateY: y, skewX: C, skewY: T } = r;
    h && (o = `perspective(${h}px) ${o}`), p && (o += `rotate(${p}deg) `), g && (o += `rotateX(${g}deg) `), y && (o += `rotateY(${y}deg) `), C && (o += `skewX(${C}deg) `), T && (o += `skewY(${T}deg) `);
  }
  const u = e.x.scale * t.x, f = e.y.scale * t.y;
  return (u !== 1 || f !== 1) && (o += `scale(${u}, ${f})`), o || "none";
}
const uM = (e, t) => e.depth - t.depth;
class fM {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(t) {
    ju(this.children, t), this.isDirty = !0;
  }
  remove(t) {
    ku(this.children, t), this.isDirty = !0;
  }
  forEach(t) {
    this.isDirty && this.children.sort(uM), this.isDirty = !1, this.children.forEach(t);
  }
}
function Hs(e) {
  const t = yt(e) ? e.get() : e;
  return nN(t) ? t.toValue() : t;
}
function dM(e, t) {
  const r = yn.now(), o = ({ timestamp: s }) => {
    const c = s - r;
    c >= t && (fr(o), e(c - t));
  };
  return je.read(o, !0), () => fr(o);
}
function hM(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function pM(e, t, r) {
  const o = yt(e) ? e : _o(e);
  return o.start(Lu("", o, t, r)), o.animation;
}
const Mr = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0
}, ho = typeof window < "u" && window.MotionDebug !== void 0, mc = ["", "X", "Y", "Z"], mM = { visibility: "hidden" }, nm = 1e3;
let gM = 0;
function gc(e, t, r, o) {
  const { latestValues: s } = t;
  s[e] && (r[e] = s[e], t.setStaticValue(e, 0), o && (o[e] = 0));
}
function by(e) {
  if (e.hasCheckedOptimisedAppear = !0, e.root === e)
    return;
  const { visualElement: t } = e.options;
  if (!t)
    return;
  const r = Jv(t);
  if (window.MotionHasOptimisedAnimation(r, "transform")) {
    const { layout: s, layoutId: c } = e.options;
    window.MotionCancelOptimisedAnimation(r, "transform", je, !(s || c));
  }
  const { parent: o } = e;
  o && !o.hasCheckedOptimisedAppear && by(o);
}
function Sy({ attachResizeListener: e, defaultParent: t, measureScroll: r, checkIsScrollRoot: o, resetTransform: s }) {
  return class {
    constructor(l = {}, u = t == null ? void 0 : t()) {
      this.id = gM++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, ho && (Mr.totalNodes = Mr.resolvedTargetDeltas = Mr.recalculatedProjection = 0), this.nodes.forEach(xM), this.nodes.forEach(_M), this.nodes.forEach(TM), this.nodes.forEach(wM), ho && window.MotionDebug.record(Mr);
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = l, this.root = u ? u.root || u : this, this.path = u ? [...u.path, u] : [], this.parent = u, this.depth = u ? u.depth + 1 : 0;
      for (let f = 0; f < this.path.length; f++)
        this.path[f].shouldResetTransform = !0;
      this.root === this && (this.nodes = new fM());
    }
    addEventListener(l, u) {
      return this.eventHandlers.has(l) || this.eventHandlers.set(l, new Vu()), this.eventHandlers.get(l).add(u);
    }
    notifyListeners(l, ...u) {
      const f = this.eventHandlers.get(l);
      f && f.notify(...u);
    }
    hasListeners(l) {
      return this.eventHandlers.has(l);
    }
    /**
     * Lifecycles
     */
    mount(l, u = this.root.hasTreeAnimated) {
      if (this.instance)
        return;
      this.isSVG = hM(l), this.instance = l;
      const { layoutId: f, layout: h, visualElement: p } = this.options;
      if (p && !p.current && p.mount(l), this.root.nodes.add(this), this.parent && this.parent.children.add(this), u && (h || f) && (this.isLayoutDirty = !0), e) {
        let g;
        const y = () => this.root.updateBlockedByResize = !1;
        e(l, () => {
          this.root.updateBlockedByResize = !0, g && g(), g = dM(y, 250), Us.hasAnimatedSinceResize && (Us.hasAnimatedSinceResize = !1, this.nodes.forEach(im));
        });
      }
      f && this.root.registerSharedNode(f, this), this.options.animate !== !1 && p && (f || h) && this.addEventListener("didUpdate", ({ delta: g, hasLayoutChanged: y, hasRelativeTargetChanged: C, layout: T }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const S = this.options.transition || p.getDefaultTransition() || OM, { onLayoutAnimationStart: _, onLayoutAnimationComplete: A } = p.getProps(), R = !this.targetLayout || !wy(this.targetLayout, T) || C, N = !y && C;
        if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || N || y && (R || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(g, N);
          const L = {
            ...bu(S, "layout"),
            onPlay: _,
            onComplete: A
          };
          (p.shouldReduceMotion || this.options.layoutRoot) && (L.delay = 0, L.type = !1), this.startAnimation(L);
        } else
          y || im(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = T;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const l = this.getStack();
      l && l.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, fr(this.updateProjection);
    }
    // only on the root
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1;
    }
    // Note: currently only running on root node
    startUpdate() {
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(PM), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: l } = this.options;
      return l && l.getProps().transformTemplate;
    }
    willUpdate(l = !0) {
      if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && by(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let p = 0; p < this.path.length; p++) {
        const g = this.path[p];
        g.shouldResetTransform = !0, g.updateScroll("snapshot"), g.options.layoutRoot && g.willUpdate(!1);
      }
      const { layoutId: u, layout: f } = this.options;
      if (u === void 0 && !f)
        return;
      const h = this.getTransformTemplate();
      this.prevTransformTemplateValue = h ? h(this.latestValues, "") : void 0, this.updateSnapshot(), l && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(rm);
        return;
      }
      this.isUpdating || this.nodes.forEach(SM), this.isUpdating = !1, this.nodes.forEach(CM), this.nodes.forEach(vM), this.nodes.forEach(yM), this.clearAllSnapshots();
      const u = yn.now();
      ut.delta = hr(0, 1e3 / 60, u - ut.timestamp), ut.timestamp = u, ut.isProcessing = !0, ac.update.process(ut), ac.preRender.process(ut), ac.render.process(ut), ut.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, Wu.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(bM), this.sharedNodes.forEach(AM);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, je.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      je.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let f = 0; f < this.path.length; f++)
          this.path[f].updateScroll();
      const l = this.layout;
      this.layout = this.measure(!1), this.layoutCorrected = Qe(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: u } = this.options;
      u && u.notify("LayoutMeasure", this.layout.layoutBox, l ? l.layoutBox : void 0);
    }
    updateScroll(l = "measure") {
      let u = !!(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === l && (u = !1), u) {
        const f = o(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: l,
          isRoot: f,
          offset: r(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : f
        };
      }
    }
    resetTransform() {
      if (!s)
        return;
      const l = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, u = this.projectionDelta && !xy(this.projectionDelta), f = this.getTransformTemplate(), h = f ? f(this.latestValues, "") : void 0, p = h !== this.prevTransformTemplateValue;
      l && (u || Nr(this.latestValues) || p) && (s(this.instance, h), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(l = !0) {
      const u = this.measurePageBox();
      let f = this.removeElementScroll(u);
      return l && (f = this.removeTransform(f)), NM(f), {
        animationId: this.root.animationId,
        measuredBox: u,
        layoutBox: f,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      var l;
      const { visualElement: u } = this.options;
      if (!u)
        return Qe();
      const f = u.measureViewportBox();
      if (!(((l = this.scroll) === null || l === void 0 ? void 0 : l.wasRoot) || this.path.some(MM))) {
        const { scroll: p } = this.root;
        p && (di(f.x, p.offset.x), di(f.y, p.offset.y));
      }
      return f;
    }
    removeElementScroll(l) {
      var u;
      const f = Qe();
      if (Xt(f, l), !((u = this.scroll) === null || u === void 0) && u.wasRoot)
        return f;
      for (let h = 0; h < this.path.length; h++) {
        const p = this.path[h], { scroll: g, options: y } = p;
        p !== this.root && g && y.layoutScroll && (g.wasRoot && Xt(f, l), di(f.x, g.offset.x), di(f.y, g.offset.y));
      }
      return f;
    }
    applyTransform(l, u = !1) {
      const f = Qe();
      Xt(f, l);
      for (let h = 0; h < this.path.length; h++) {
        const p = this.path[h];
        !u && p.options.layoutScroll && p.scroll && p !== p.root && hi(f, {
          x: -p.scroll.offset.x,
          y: -p.scroll.offset.y
        }), Nr(p.latestValues) && hi(f, p.latestValues);
      }
      return Nr(this.latestValues) && hi(f, this.latestValues), f;
    }
    removeTransform(l) {
      const u = Qe();
      Xt(u, l);
      for (let f = 0; f < this.path.length; f++) {
        const h = this.path[f];
        if (!h.instance || !Nr(h.latestValues))
          continue;
        Kc(h.latestValues) && h.updateSnapshot();
        const p = Qe(), g = h.measurePageBox();
        Xt(p, g), Xp(u, h.latestValues, h.snapshot ? h.snapshot.layoutBox : void 0, p);
      }
      return Nr(this.latestValues) && Xp(u, this.latestValues), u;
    }
    setTargetDelta(l) {
      this.targetDelta = l, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
    }
    setOptions(l) {
      this.options = {
        ...this.options,
        ...l,
        crossfade: l.crossfade !== void 0 ? l.crossfade : !0
      };
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== ut.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(l = !1) {
      var u;
      const f = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = f.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = f.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = f.isSharedProjectionDirty);
      const h = !!this.resumingFrom || this !== f;
      if (!(l || h && this.isSharedProjectionDirty || this.isProjectionDirty || !((u = this.parent) === null || u === void 0) && u.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
        return;
      const { layout: g, layoutId: y } = this.options;
      if (!(!this.layout || !(g || y))) {
        if (this.resolvedRelativeTargetAt = ut.timestamp, !this.targetDelta && !this.relativeTarget) {
          const C = this.getClosestProjectingParent();
          C && C.layout && this.animationProgress !== 1 ? (this.relativeParent = C, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Qe(), this.relativeTargetOrigin = Qe(), go(this.relativeTargetOrigin, this.layout.layoutBox, C.layout.layoutBox), Xt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (this.target || (this.target = Qe(), this.targetWithTransforms = Qe()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), DN(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Xt(this.target, this.layout.layoutBox), fy(this.target, this.targetDelta)) : Xt(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
            this.attemptToResolveRelativeTarget = !1;
            const C = this.getClosestProjectingParent();
            C && !!C.resumingFrom == !!this.resumingFrom && !C.options.layoutScroll && C.target && this.animationProgress !== 1 ? (this.relativeParent = C, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Qe(), this.relativeTargetOrigin = Qe(), go(this.relativeTargetOrigin, this.target, C.target), Xt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
          }
          ho && Mr.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || Kc(this.parent.latestValues) || uy(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      var l;
      const u = this.getLead(), f = !!this.resumingFrom || this !== u;
      let h = !0;
      if ((this.isProjectionDirty || !((l = this.parent) === null || l === void 0) && l.isProjectionDirty) && (h = !1), f && (this.isSharedProjectionDirty || this.isTransformDirty) && (h = !1), this.resolvedRelativeTargetAt === ut.timestamp && (h = !1), h)
        return;
      const { layout: p, layoutId: g } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(p || g))
        return;
      Xt(this.layoutCorrected, this.layout.layoutBox);
      const y = this.treeScale.x, C = this.treeScale.y;
      $N(this.layoutCorrected, this.treeScale, this.path, f), u.layout && !u.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (u.target = u.layout.layoutBox, u.targetWithTransforms = Qe());
      const { target: T } = u;
      if (!T) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Kp(this.prevProjectionDelta.x, this.projectionDelta.x), Kp(this.prevProjectionDelta.y, this.projectionDelta.y)), mo(this.projectionDelta, this.layoutCorrected, T, this.latestValues), (this.treeScale.x !== y || this.treeScale.y !== C || !tm(this.projectionDelta.x, this.prevProjectionDelta.x) || !tm(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", T)), ho && Mr.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(l = !0) {
      var u;
      if ((u = this.options.visualElement) === null || u === void 0 || u.scheduleRender(), l) {
        const f = this.getStack();
        f && f.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = fi(), this.projectionDelta = fi(), this.projectionDeltaWithTransform = fi();
    }
    setAnimationOrigin(l, u = !1) {
      const f = this.snapshot, h = f ? f.latestValues : {}, p = { ...this.latestValues }, g = fi();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !u;
      const y = Qe(), C = f ? f.source : void 0, T = this.layout ? this.layout.source : void 0, S = C !== T, _ = this.getStack(), A = !_ || _.members.length <= 1, R = !!(S && !A && this.options.crossfade === !0 && !this.path.some(RM));
      this.animationProgress = 0;
      let N;
      this.mixTargetDelta = (L) => {
        const j = L / 1e3;
        om(g.x, l.x, j), om(g.y, l.y, j), this.setTargetDelta(g), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (go(y, this.layout.layoutBox, this.relativeParent.layout.layoutBox), EM(this.relativeTarget, this.relativeTargetOrigin, y, j), N && aM(this.relativeTarget, N) && (this.isProjectionDirty = !1), N || (N = Qe()), Xt(N, this.relativeTarget)), S && (this.animationValues = p, tM(p, h, this.latestValues, j, R, A)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = j;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(l) {
      this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (fr(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = je.update(() => {
        Us.hasAnimatedSinceResize = !0, this.currentAnimation = pM(0, nm, {
          ...l,
          onUpdate: (u) => {
            this.mixTargetDelta(u), l.onUpdate && l.onUpdate(u);
          },
          onComplete: () => {
            l.onComplete && l.onComplete(), this.completeAnimation();
          }
        }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const l = this.getStack();
      l && l.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(nm), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const l = this.getLead();
      let { targetWithTransforms: u, target: f, layout: h, latestValues: p } = l;
      if (!(!u || !f || !h)) {
        if (this !== l && this.layout && h && Cy(this.options.animationType, this.layout.layoutBox, h.layoutBox)) {
          f = this.target || Qe();
          const g = Ft(this.layout.layoutBox.x);
          f.x.min = l.target.x.min, f.x.max = f.x.min + g;
          const y = Ft(this.layout.layoutBox.y);
          f.y.min = l.target.y.min, f.y.max = f.y.min + y;
        }
        Xt(u, f), hi(u, p), mo(this.projectionDeltaWithTransform, this.layoutCorrected, u, p);
      }
    }
    registerSharedNode(l, u) {
      this.sharedNodes.has(l) || this.sharedNodes.set(l, new lM()), this.sharedNodes.get(l).add(u);
      const h = u.options.initialPromotionConfig;
      u.promote({
        transition: h ? h.transition : void 0,
        preserveFollowOpacity: h && h.shouldPreserveFollowOpacity ? h.shouldPreserveFollowOpacity(u) : void 0
      });
    }
    isLead() {
      const l = this.getStack();
      return l ? l.lead === this : !0;
    }
    getLead() {
      var l;
      const { layoutId: u } = this.options;
      return u ? ((l = this.getStack()) === null || l === void 0 ? void 0 : l.lead) || this : this;
    }
    getPrevLead() {
      var l;
      const { layoutId: u } = this.options;
      return u ? (l = this.getStack()) === null || l === void 0 ? void 0 : l.prevLead : void 0;
    }
    getStack() {
      const { layoutId: l } = this.options;
      if (l)
        return this.root.sharedNodes.get(l);
    }
    promote({ needsReset: l, transition: u, preserveFollowOpacity: f } = {}) {
      const h = this.getStack();
      h && h.promote(this, f), l && (this.projectionDelta = void 0, this.needsReset = !0), u && this.setOptions({ transition: u });
    }
    relegate() {
      const l = this.getStack();
      return l ? l.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: l } = this.options;
      if (!l)
        return;
      let u = !1;
      const { latestValues: f } = l;
      if ((f.z || f.rotate || f.rotateX || f.rotateY || f.rotateZ || f.skewX || f.skewY) && (u = !0), !u)
        return;
      const h = {};
      f.z && gc("z", l, h, this.animationValues);
      for (let p = 0; p < mc.length; p++)
        gc(`rotate${mc[p]}`, l, h, this.animationValues), gc(`skew${mc[p]}`, l, h, this.animationValues);
      l.render();
      for (const p in h)
        l.setStaticValue(p, h[p]), this.animationValues && (this.animationValues[p] = h[p]);
      l.scheduleRender();
    }
    getProjectionStyles(l) {
      var u, f;
      if (!this.instance || this.isSVG)
        return;
      if (!this.isVisible)
        return mM;
      const h = {
        visibility: ""
      }, p = this.getTransformTemplate();
      if (this.needsReset)
        return this.needsReset = !1, h.opacity = "", h.pointerEvents = Hs(l == null ? void 0 : l.pointerEvents) || "", h.transform = p ? p(this.latestValues, "") : "none", h;
      const g = this.getLead();
      if (!this.projectionDelta || !this.layout || !g.target) {
        const S = {};
        return this.options.layoutId && (S.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, S.pointerEvents = Hs(l == null ? void 0 : l.pointerEvents) || ""), this.hasProjected && !Nr(this.latestValues) && (S.transform = p ? p({}, "") : "none", this.hasProjected = !1), S;
      }
      const y = g.animationValues || g.latestValues;
      this.applyTransformsToTarget(), h.transform = cM(this.projectionDeltaWithTransform, this.treeScale, y), p && (h.transform = p(y, h.transform));
      const { x: C, y: T } = this.projectionDelta;
      h.transformOrigin = `${C.origin * 100}% ${T.origin * 100}% 0`, g.animationValues ? h.opacity = g === this ? (f = (u = y.opacity) !== null && u !== void 0 ? u : this.latestValues.opacity) !== null && f !== void 0 ? f : 1 : this.preserveOpacity ? this.latestValues.opacity : y.opacityExit : h.opacity = g === this ? y.opacity !== void 0 ? y.opacity : "" : y.opacityExit !== void 0 ? y.opacityExit : 0;
      for (const S in sa) {
        if (y[S] === void 0)
          continue;
        const { correct: _, applyTo: A } = sa[S], R = h.transform === "none" ? y[S] : _(y[S], g);
        if (A) {
          const N = A.length;
          for (let L = 0; L < N; L++)
            h[A[L]] = R;
        } else
          h[S] = R;
      }
      return this.options.layoutId && (h.pointerEvents = g === this ? Hs(l == null ? void 0 : l.pointerEvents) || "" : "none"), h;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((l) => {
        var u;
        return (u = l.currentAnimation) === null || u === void 0 ? void 0 : u.stop();
      }), this.root.nodes.forEach(rm), this.root.sharedNodes.clear();
    }
  };
}
function vM(e) {
  e.updateLayout();
}
function yM(e) {
  var t;
  const r = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && r && e.hasListeners("didUpdate")) {
    const { layoutBox: o, measuredBox: s } = e.layout, { animationType: c } = e.options, l = r.source !== e.layout.source;
    c === "size" ? Zt((g) => {
      const y = l ? r.measuredBox[g] : r.layoutBox[g], C = Ft(y);
      y.min = o[g].min, y.max = y.min + C;
    }) : Cy(c, r.layoutBox, o) && Zt((g) => {
      const y = l ? r.measuredBox[g] : r.layoutBox[g], C = Ft(o[g]);
      y.max = y.min + C, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[g].max = e.relativeTarget[g].min + C);
    });
    const u = fi();
    mo(u, o, r.layoutBox);
    const f = fi();
    l ? mo(f, e.applyTransform(s, !0), r.measuredBox) : mo(f, o, r.layoutBox);
    const h = !xy(u);
    let p = !1;
    if (!e.resumeFrom) {
      const g = e.getClosestProjectingParent();
      if (g && !g.resumeFrom) {
        const { snapshot: y, layout: C } = g;
        if (y && C) {
          const T = Qe();
          go(T, r.layoutBox, y.layoutBox);
          const S = Qe();
          go(S, o, C.layoutBox), wy(T, S) || (p = !0), g.options.layoutRoot && (e.relativeTarget = S, e.relativeTargetOrigin = T, e.relativeParent = g);
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: o,
      snapshot: r,
      delta: f,
      layoutDelta: u,
      hasLayoutChanged: h,
      hasRelativeTargetChanged: p
    });
  } else if (e.isLead()) {
    const { onExitComplete: o } = e.options;
    o && o();
  }
  e.options.transition = void 0;
}
function xM(e) {
  ho && Mr.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function wM(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function bM(e) {
  e.clearSnapshot();
}
function rm(e) {
  e.clearMeasurements();
}
function SM(e) {
  e.isLayoutDirty = !1;
}
function CM(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function im(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function _M(e) {
  e.resolveTargetDelta();
}
function TM(e) {
  e.calcProjection();
}
function PM(e) {
  e.resetSkewAndRotation();
}
function AM(e) {
  e.removeLeadSnapshot();
}
function om(e, t, r) {
  e.translate = Ke(t.translate, 0, r), e.scale = Ke(t.scale, 1, r), e.origin = t.origin, e.originPoint = t.originPoint;
}
function sm(e, t, r, o) {
  e.min = Ke(t.min, r.min, o), e.max = Ke(t.max, r.max, o);
}
function EM(e, t, r, o) {
  sm(e.x, t.x, r.x, o), sm(e.y, t.y, r.y, o);
}
function RM(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const OM = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, am = (e) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e), lm = am("applewebkit/") && !am("chrome/") ? Math.round : ft;
function cm(e) {
  e.min = lm(e.min), e.max = lm(e.max);
}
function NM(e) {
  cm(e.x), cm(e.y);
}
function Cy(e, t, r) {
  return e === "position" || e === "preserve-aspect" && !MN(em(t), em(r), 0.2);
}
function MM(e) {
  var t;
  return e !== e.root && ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot);
}
const DM = Sy({
  attachResizeListener: (e, t) => In(e, "resize", t),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), vc = {
  current: void 0
}, _y = Sy({
  measureScroll: (e) => ({
    x: e.scrollLeft,
    y: e.scrollTop
  }),
  defaultParent: () => {
    if (!vc.current) {
      const e = new DM({});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), vc.current = e;
    }
    return vc.current;
  },
  resetTransform: (e, t) => {
    e.style.transform = t !== void 0 ? t : "none";
  },
  checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), IM = {
  pan: {
    Feature: YN
  },
  drag: {
    Feature: KN,
    ProjectionNode: _y,
    MeasureLayout: gy
  }
};
function um(e, t) {
  const r = t ? "pointerenter" : "pointerleave", o = t ? "onHoverStart" : "onHoverEnd", s = (c, l) => {
    if (c.pointerType === "touch" || sy())
      return;
    const u = e.getProps();
    e.animationState && u.whileHover && e.animationState.setActive("whileHover", t);
    const f = u[o];
    f && je.postRender(() => f(c, l));
  };
  return Vn(e.current, r, s, {
    passive: !e.getProps()[o]
  });
}
class LM extends vr {
  mount() {
    this.unmount = kn(um(this.node, !0), um(this.node, !1));
  }
  unmount() {
  }
}
class jM extends vr {
  constructor() {
    super(...arguments), this.isActive = !1;
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0);
  }
  onBlur() {
    !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1);
  }
  mount() {
    this.unmount = kn(In(this.node.current, "focus", () => this.onFocus()), In(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
const Ty = (e, t) => t ? e === t ? !0 : Ty(e, t.parentElement) : !1;
function yc(e, t) {
  if (!t)
    return;
  const r = new PointerEvent("pointer" + e);
  t(r, Ea(r));
}
class kM extends vr {
  constructor() {
    super(...arguments), this.removeStartListeners = ft, this.removeEndListeners = ft, this.removeAccessibleListeners = ft, this.startPointerPress = (t, r) => {
      if (this.isPressing)
        return;
      this.removeEndListeners();
      const o = this.node.getProps(), c = Vn(window, "pointerup", (u, f) => {
        if (!this.checkPressEnd())
          return;
        const { onTap: h, onTapCancel: p, globalTapTarget: g } = this.node.getProps(), y = !g && !Ty(this.node.current, u.target) ? p : h;
        y && je.update(() => y(u, f));
      }, {
        passive: !(o.onTap || o.onPointerUp)
      }), l = Vn(window, "pointercancel", (u, f) => this.cancelPress(u, f), {
        passive: !(o.onTapCancel || o.onPointerCancel)
      });
      this.removeEndListeners = kn(c, l), this.startPress(t, r);
    }, this.startAccessiblePress = () => {
      const t = (c) => {
        if (c.key !== "Enter" || this.isPressing)
          return;
        const l = (u) => {
          u.key !== "Enter" || !this.checkPressEnd() || yc("up", (f, h) => {
            const { onTap: p } = this.node.getProps();
            p && je.postRender(() => p(f, h));
          });
        };
        this.removeEndListeners(), this.removeEndListeners = In(this.node.current, "keyup", l), yc("down", (u, f) => {
          this.startPress(u, f);
        });
      }, r = In(this.node.current, "keydown", t), o = () => {
        this.isPressing && yc("cancel", (c, l) => this.cancelPress(c, l));
      }, s = In(this.node.current, "blur", o);
      this.removeAccessibleListeners = kn(r, s);
    };
  }
  startPress(t, r) {
    this.isPressing = !0;
    const { onTapStart: o, whileTap: s } = this.node.getProps();
    s && this.node.animationState && this.node.animationState.setActive("whileTap", !0), o && je.postRender(() => o(t, r));
  }
  checkPressEnd() {
    return this.removeEndListeners(), this.isPressing = !1, this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !sy();
  }
  cancelPress(t, r) {
    if (!this.checkPressEnd())
      return;
    const { onTapCancel: o } = this.node.getProps();
    o && je.postRender(() => o(t, r));
  }
  mount() {
    const t = this.node.getProps(), r = Vn(t.globalTapTarget ? window : this.node.current, "pointerdown", this.startPointerPress, {
      passive: !(t.onTapStart || t.onPointerStart)
    }), o = In(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = kn(r, o);
  }
  unmount() {
    this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners();
  }
}
const qc = /* @__PURE__ */ new WeakMap(), xc = /* @__PURE__ */ new WeakMap(), VM = (e) => {
  const t = qc.get(e.target);
  t && t(e);
}, FM = (e) => {
  e.forEach(VM);
};
function BM({ root: e, ...t }) {
  const r = e || document;
  xc.has(r) || xc.set(r, {});
  const o = xc.get(r), s = JSON.stringify(t);
  return o[s] || (o[s] = new IntersectionObserver(FM, { root: e, ...t })), o[s];
}
function WM(e, t, r) {
  const o = BM(t);
  return qc.set(e, r), o.observe(e), () => {
    qc.delete(e), o.unobserve(e);
  };
}
const $M = {
  some: 0,
  all: 1
};
class UM extends vr {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(), { root: r, margin: o, amount: s = "some", once: c } = t, l = {
      root: r ? r.current : void 0,
      rootMargin: o,
      threshold: typeof s == "number" ? s : $M[s]
    }, u = (f) => {
      const { isIntersecting: h } = f;
      if (this.isInView === h || (this.isInView = h, c && !h && this.hasEnteredView))
        return;
      h && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", h);
      const { onViewportEnter: p, onViewportLeave: g } = this.node.getProps(), y = h ? p : g;
      y && y(f);
    };
    return WM(this.node.current, l, u);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: t, prevProps: r } = this.node;
    ["amount", "margin", "root"].some(HM(t, r)) && this.startObserver();
  }
  unmount() {
  }
}
function HM({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (r) => e[r] !== t[r];
}
const zM = {
  inView: {
    Feature: UM
  },
  tap: {
    Feature: kM
  },
  focus: {
    Feature: jM
  },
  hover: {
    Feature: LM
  }
}, GM = {
  layout: {
    ProjectionNode: _y,
    MeasureLayout: gy
  }
}, Py = Si({
  transformPagePoint: (e) => e,
  isStatic: !1,
  reducedMotion: "never"
}), Ra = Si({}), $u = typeof window < "u", KM = $u ? vm : To, Ay = Si({ strict: !1 });
function YM(e, t, r, o, s) {
  var c, l;
  const { visualElement: u } = Et(Ra), f = Et(Ay), h = Et(Bu), p = Et(Py).reducedMotion, g = Vs();
  o = o || f.renderer, !g.current && o && (g.current = o(e, {
    visualState: t,
    parent: u,
    props: r,
    presenceContext: h,
    blockInitialAnimation: h ? h.initial === !1 : !1,
    reducedMotionConfig: p
  }));
  const y = g.current, C = Et(my);
  y && !y.projection && s && (y.type === "html" || y.type === "svg") && qM(g.current, r, s, C);
  const T = Vs(!1);
  b_(() => {
    y && T.current && y.update(r, h);
  });
  const S = r[Zv], _ = Vs(!!S && !(!((c = window.MotionHandoffIsComplete) === null || c === void 0) && c.call(window, S)) && ((l = window.MotionHasOptimisedAnimation) === null || l === void 0 ? void 0 : l.call(window, S)));
  return KM(() => {
    y && (T.current = !0, window.MotionIsMounted = !0, y.updateFeatures(), Wu.render(y.render), _.current && y.animationState && y.animationState.animateChanges());
  }), To(() => {
    y && (!_.current && y.animationState && y.animationState.animateChanges(), _.current && (queueMicrotask(() => {
      var A;
      (A = window.MotionHandoffMarkAsComplete) === null || A === void 0 || A.call(window, S);
    }), _.current = !1));
  }), y;
}
function qM(e, t, r, o) {
  const { layoutId: s, layout: c, drag: l, dragConstraints: u, layoutScroll: f, layoutRoot: h } = t;
  e.projection = new r(e.latestValues, t["data-framer-portal-id"] ? void 0 : Ey(e.parent)), e.projection.setOptions({
    layoutId: s,
    layout: c,
    alwaysMeasureLayout: !!l || u && ui(u),
    visualElement: e,
    /**
     * TODO: Update options in an effect. This could be tricky as it'll be too late
     * to update by the time layout animations run.
     * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
     * ensuring it gets called if there's no potential layout animations.
     *
     */
    animationType: typeof c == "string" ? c : "both",
    initialPromotionConfig: o,
    layoutScroll: f,
    layoutRoot: h
  });
}
function Ey(e) {
  if (e)
    return e.options.allowProjection !== !1 ? e.projection : Ey(e.parent);
}
function XM(e, t, r) {
  return ym(
    (o) => {
      o && e.mount && e.mount(o), t && (o ? t.mount(o) : t.unmount()), r && (typeof r == "function" ? r(o) : ui(r) && (r.current = o));
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [t]
  );
}
function Oa(e) {
  return Ta(e.animate) || wu.some((t) => bo(e[t]));
}
function Ry(e) {
  return !!(Oa(e) || e.variants);
}
function ZM(e, t) {
  if (Oa(e)) {
    const { initial: r, animate: o } = e;
    return {
      initial: r === !1 || bo(r) ? r : void 0,
      animate: bo(o) ? o : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function JM(e) {
  const { initial: t, animate: r } = ZM(e, Et(Ra));
  return Po(() => ({ initial: t, animate: r }), [fm(t), fm(r)]);
}
function fm(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const dm = {
  animation: [
    "animate",
    "variants",
    "whileHover",
    "whileTap",
    "exit",
    "whileInView",
    "whileFocus",
    "whileDrag"
  ],
  exit: ["exit"],
  drag: ["drag", "dragControls"],
  focus: ["whileFocus"],
  hover: ["whileHover", "onHoverStart", "onHoverEnd"],
  tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
  pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
  inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
  layout: ["layout", "layoutId"]
}, bi = {};
for (const e in dm)
  bi[e] = {
    isEnabled: (t) => dm[e].some((r) => !!t[r])
  };
function QM(e) {
  for (const t in e)
    bi[t] = {
      ...bi[t],
      ...e[t]
    };
}
const eD = Symbol.for("motionComponentSymbol");
function tD({ preloadedFeatures: e, createVisualElement: t, useRender: r, useVisualState: o, Component: s }) {
  e && QM(e);
  function c(u, f) {
    let h;
    const p = {
      ...Et(Py),
      ...u,
      layoutId: nD(u)
    }, { isStatic: g } = p, y = JM(u), C = o(u, g);
    if (!g && $u) {
      rD(p, e);
      const T = iD(p);
      h = T.MeasureLayout, y.visualElement = YM(s, C, p, t, T.ProjectionNode);
    }
    return v.jsxs(Ra.Provider, { value: y, children: [h && y.visualElement ? v.jsx(h, { visualElement: y.visualElement, ...p }) : null, r(s, u, XM(C, y.visualElement, f), C, g, y.visualElement)] });
  }
  const l = Zc(c);
  return l[eD] = s, l;
}
function nD({ layoutId: e }) {
  const t = Et(py).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function rD(e, t) {
  const r = Et(Ay).strict;
  if (process.env.NODE_ENV !== "production" && t && r) {
    const o = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
    e.ignoreStrict ? Oi(!1, o) : dr(!1, o);
  }
}
function iD(e) {
  const { drag: t, layout: r } = bi;
  if (!t && !r)
    return {};
  const o = { ...t, ...r };
  return {
    MeasureLayout: t != null && t.isEnabled(e) || r != null && r.isEnabled(e) ? o.MeasureLayout : void 0,
    ProjectionNode: o.ProjectionNode
  };
}
const oD = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view"
];
function Uu(e) {
  return (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof e != "string" || /**
     * If it contains a dash, the element is a custom HTML webcomponent.
     */
    e.includes("-") ? !1 : (
      /**
       * If it's in our list of lowercase SVG tags, it's an SVG component
       */
      !!(oD.indexOf(e) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(e))
    )
  );
}
function Oy(e, { style: t, vars: r }, o, s) {
  Object.assign(e.style, t, s && s.getProjectionStyles(o));
  for (const c in r)
    e.style.setProperty(c, r[c]);
}
const Ny = /* @__PURE__ */ new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust"
]);
function My(e, t, r, o) {
  Oy(e, t, void 0, o);
  for (const s in t.attrs)
    e.setAttribute(Ny.has(s) ? s : Fu(s), t.attrs[s]);
}
function Dy(e, { layout: t, layoutId: r }) {
  return Br.has(e) || e.startsWith("origin") || (t || r !== void 0) && (!!sa[e] || e === "opacity");
}
function Hu(e, t, r) {
  var o;
  const { style: s } = e, c = {};
  for (const l in s)
    (yt(s[l]) || t.style && yt(t.style[l]) || Dy(l, e) || ((o = r == null ? void 0 : r.getValue(l)) === null || o === void 0 ? void 0 : o.liveStyle) !== void 0) && (c[l] = s[l]);
  return c;
}
function Iy(e, t, r) {
  const o = Hu(e, t, r);
  for (const s in e)
    if (yt(e[s]) || yt(t[s])) {
      const c = No.indexOf(s) !== -1 ? "attr" + s.charAt(0).toUpperCase() + s.substring(1) : s;
      o[c] = e[s];
    }
  return o;
}
function sD(e) {
  const t = Vs(null);
  return t.current === null && (t.current = e()), t.current;
}
function aD({ scrapeMotionValuesFromProps: e, createRenderState: t, onMount: r }, o, s, c) {
  const l = {
    latestValues: lD(o, s, c, e),
    renderState: t()
  };
  return r && (l.mount = (u) => r(o, u, l)), l;
}
const Ly = (e) => (t, r) => {
  const o = Et(Ra), s = Et(Bu), c = () => aD(e, t, o, s);
  return r ? c() : sD(c);
};
function lD(e, t, r, o) {
  const s = {}, c = o(e, {});
  for (const y in c)
    s[y] = Hs(c[y]);
  let { initial: l, animate: u } = e;
  const f = Oa(e), h = Ry(e);
  t && h && !f && e.inherit !== !1 && (l === void 0 && (l = t.initial), u === void 0 && (u = t.animate));
  let p = r ? r.initial === !1 : !1;
  p = p || l === !1;
  const g = p ? u : l;
  if (g && typeof g != "boolean" && !Ta(g)) {
    const y = Array.isArray(g) ? g : [g];
    for (let C = 0; C < y.length; C++) {
      const T = yu(e, y[C]);
      if (T) {
        const { transitionEnd: S, transition: _, ...A } = T;
        for (const R in A) {
          let N = A[R];
          if (Array.isArray(N)) {
            const L = p ? N.length - 1 : 0;
            N = N[L];
          }
          N !== null && (s[R] = N);
        }
        for (const R in S)
          s[R] = S[R];
      }
    }
  }
  return s;
}
const zu = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
}), jy = () => ({
  ...zu(),
  attrs: {}
}), ky = (e, t) => t && typeof e == "number" ? t.transform(e) : e, cD = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, uD = No.length;
function fD(e, t, r) {
  let o = "", s = !0;
  for (let c = 0; c < uD; c++) {
    const l = No[c], u = e[l];
    if (u === void 0)
      continue;
    let f = !0;
    if (typeof u == "number" ? f = u === (l.startsWith("scale") ? 1 : 0) : f = parseFloat(u) === 0, !f || r) {
      const h = ky(u, Eu[l]);
      if (!f) {
        s = !1;
        const p = cD[l] || l;
        o += `${p}(${h}) `;
      }
      r && (t[l] = h);
    }
  }
  return o = o.trim(), r ? o = r(t, s ? "" : o) : s && (o = "none"), o;
}
function Gu(e, t, r) {
  const { style: o, vars: s, transformOrigin: c } = e;
  let l = !1, u = !1;
  for (const f in t) {
    const h = t[f];
    if (Br.has(f)) {
      l = !0;
      continue;
    } else if (Ev(f)) {
      s[f] = h;
      continue;
    } else {
      const p = ky(h, Eu[f]);
      f.startsWith("origin") ? (u = !0, c[f] = p) : o[f] = p;
    }
  }
  if (t.transform || (l || r ? o.transform = fD(t, e.transform, r) : o.transform && (o.transform = "none")), u) {
    const { originX: f = "50%", originY: h = "50%", originZ: p = 0 } = c;
    o.transformOrigin = `${f} ${h} ${p}`;
  }
}
function hm(e, t, r) {
  return typeof e == "string" ? e : oe.transform(t + r * e);
}
function dD(e, t, r) {
  const o = hm(t, e.x, e.width), s = hm(r, e.y, e.height);
  return `${o} ${s}`;
}
const hD = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, pD = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function mD(e, t, r = 1, o = 0, s = !0) {
  e.pathLength = 1;
  const c = s ? hD : pD;
  e[c.offset] = oe.transform(-o);
  const l = oe.transform(t), u = oe.transform(r);
  e[c.array] = `${l} ${u}`;
}
function Ku(e, {
  attrX: t,
  attrY: r,
  attrScale: o,
  originX: s,
  originY: c,
  pathLength: l,
  pathSpacing: u = 1,
  pathOffset: f = 0,
  // This is object creation, which we try to avoid per-frame.
  ...h
}, p, g) {
  if (Gu(e, h, g), p) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  e.attrs = e.style, e.style = {};
  const { attrs: y, style: C, dimensions: T } = e;
  y.transform && (T && (C.transform = y.transform), delete y.transform), T && (s !== void 0 || c !== void 0 || C.transform) && (C.transformOrigin = dD(T, s !== void 0 ? s : 0.5, c !== void 0 ? c : 0.5)), t !== void 0 && (y.x = t), r !== void 0 && (y.y = r), o !== void 0 && (y.scale = o), l !== void 0 && mD(y, l, u, f, !1);
}
const Yu = (e) => typeof e == "string" && e.toLowerCase() === "svg", gD = {
  useVisualState: Ly({
    scrapeMotionValuesFromProps: Iy,
    createRenderState: jy,
    onMount: (e, t, { renderState: r, latestValues: o }) => {
      je.read(() => {
        try {
          r.dimensions = typeof t.getBBox == "function" ? t.getBBox() : t.getBoundingClientRect();
        } catch {
          r.dimensions = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
          };
        }
      }), je.render(() => {
        Ku(r, o, Yu(t.tagName), e.transformTemplate), My(t, r);
      });
    }
  })
}, vD = {
  useVisualState: Ly({
    scrapeMotionValuesFromProps: Hu,
    createRenderState: zu
  })
};
function Vy(e, t, r) {
  for (const o in t)
    !yt(t[o]) && !Dy(o, r) && (e[o] = t[o]);
}
function yD({ transformTemplate: e }, t) {
  return Po(() => {
    const r = zu();
    return Gu(r, t, e), Object.assign({}, r.vars, r.style);
  }, [t]);
}
function xD(e, t) {
  const r = e.style || {}, o = {};
  return Vy(o, r, e), Object.assign(o, yD(e, t)), o;
}
function wD(e, t) {
  const r = {}, o = xD(e, t);
  return e.drag && e.dragListener !== !1 && (r.draggable = !1, o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none", o.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (r.tabIndex = 0), r.style = o, r;
}
const bD = /* @__PURE__ */ new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport"
]);
function aa(e) {
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || bD.has(e);
}
let Fy = (e) => !aa(e);
function SD(e) {
  e && (Fy = (t) => t.startsWith("on") ? !aa(t) : e(t));
}
try {
  SD(require("@emotion/is-prop-valid").default);
} catch {
}
function CD(e, t, r) {
  const o = {};
  for (const s in e)
    s === "values" && typeof e.values == "object" || (Fy(s) || r === !0 && aa(s) || !t && !aa(s) || // If trying to use native HTML drag events, forward drag listeners
    e.draggable && s.startsWith("onDrag")) && (o[s] = e[s]);
  return o;
}
function _D(e, t, r, o) {
  const s = Po(() => {
    const c = jy();
    return Ku(c, t, Yu(o), e.transformTemplate), {
      ...c.attrs,
      style: { ...c.style }
    };
  }, [t]);
  if (e.style) {
    const c = {};
    Vy(c, e.style, e), s.style = { ...c, ...s.style };
  }
  return s;
}
function TD(e = !1) {
  return (r, o, s, { latestValues: c }, l) => {
    const f = (Uu(r) ? _D : wD)(o, c, l, r), h = CD(o, typeof r == "string", e), p = r !== xm ? { ...h, ...f, ref: s } : {}, { children: g } = o, y = Po(() => yt(g) ? g.get() : g, [g]);
    return zs(r, {
      ...p,
      children: y
    });
  };
}
function PD(e, t) {
  return function(o, { forwardMotionProps: s } = { forwardMotionProps: !1 }) {
    const l = {
      ...Uu(o) ? gD : vD,
      preloadedFeatures: e,
      useRender: TD(s),
      createVisualElement: t,
      Component: o
    };
    return tD(l);
  };
}
const Xc = { current: null }, By = { current: !1 };
function AD() {
  if (By.current = !0, !!$u)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"), t = () => Xc.current = e.matches;
      e.addListener(t), t();
    } else
      Xc.current = !1;
}
function ED(e, t, r) {
  for (const o in t) {
    const s = t[o], c = r[o];
    if (yt(s))
      e.addValue(o, s), process.env.NODE_ENV === "development" && _a(s.version === "11.11.17", `Attempting to mix Motion versions ${s.version} with 11.11.17 may not work as expected.`);
    else if (yt(c))
      e.addValue(o, _o(s, { owner: e }));
    else if (c !== s)
      if (e.hasValue(o)) {
        const l = e.getValue(o);
        l.liveStyle === !0 ? l.jump(s) : l.hasAnimated || l.set(s);
      } else {
        const l = e.getStaticValue(o);
        e.addValue(o, _o(l !== void 0 ? l : s, { owner: e }));
      }
  }
  for (const o in r)
    t[o] === void 0 && e.removeValue(o);
  return t;
}
const pm = /* @__PURE__ */ new WeakMap(), RD = [...Nv, vt, pr], OD = (e) => RD.find(Ov(e)), mm = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
class ND {
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(t, r, o) {
    return {};
  }
  constructor({ parent: t, props: r, presenceContext: o, reducedMotionConfig: s, blockInitialAnimation: c, visualState: l }, u = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = Tu, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const y = yn.now();
      this.renderScheduledAt < y && (this.renderScheduledAt = y, je.render(this.render, !1, !0));
    };
    const { latestValues: f, renderState: h } = l;
    this.latestValues = f, this.baseTarget = { ...f }, this.initialValues = r.initial ? { ...f } : {}, this.renderState = h, this.parent = t, this.props = r, this.presenceContext = o, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = s, this.options = u, this.blockInitialAnimation = !!c, this.isControllingVariants = Oa(r), this.isVariantNode = Ry(r), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
    const { willChange: p, ...g } = this.scrapeMotionValuesFromProps(r, {}, this);
    for (const y in g) {
      const C = g[y];
      f[y] !== void 0 && yt(C) && C.set(f[y], !1);
    }
  }
  mount(t) {
    this.current = t, pm.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((r, o) => this.bindToMotionValue(o, r)), By.current || AD(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Xc.current, process.env.NODE_ENV !== "production" && _a(this.shouldReduceMotion !== !0, "You have Reduced Motion enabled on your device. Animations may not appear as expected."), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    pm.delete(this.current), this.projection && this.projection.unmount(), fr(this.notifyUpdate), fr(this.render), this.valueSubscriptions.forEach((t) => t()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
    for (const t in this.events)
      this.events[t].clear();
    for (const t in this.features) {
      const r = this.features[t];
      r && (r.unmount(), r.isMounted = !1);
    }
    this.current = null;
  }
  bindToMotionValue(t, r) {
    this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
    const o = Br.has(t), s = r.on("change", (u) => {
      this.latestValues[t] = u, this.props.onUpdate && je.preRender(this.notifyUpdate), o && this.projection && (this.projection.isTransformDirty = !0);
    }), c = r.on("renderRequest", this.scheduleRender);
    let l;
    window.MotionCheckAppearSync && (l = window.MotionCheckAppearSync(this, t, r)), this.valueSubscriptions.set(t, () => {
      s(), c(), l && l(), r.owner && r.stop();
    });
  }
  sortNodePosition(t) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in bi) {
      const r = bi[t];
      if (!r)
        continue;
      const { isEnabled: o, Feature: s } = r;
      if (!this.features[t] && s && o(this.props) && (this.features[t] = new s(this)), this.features[t]) {
        const c = this.features[t];
        c.isMounted ? c.update() : (c.mount(), c.isMounted = !0);
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  /**
   * Measure the current viewport box with or without transforms.
   * Only measures axis-aligned boxes, rotate and skew must be manually
   * removed with a re-render to work.
   */
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Qe();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, r) {
    this.latestValues[t] = r;
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  update(t, r) {
    (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = r;
    for (let o = 0; o < mm.length; o++) {
      const s = mm[o];
      this.propEventSubscriptions[s] && (this.propEventSubscriptions[s](), delete this.propEventSubscriptions[s]);
      const c = "on" + s, l = t[c];
      l && (this.propEventSubscriptions[s] = this.on(s, l));
    }
    this.prevMotionValues = ED(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  /**
   * Returns the variant definition with a given name.
   */
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  /**
   * Returns the defined default transition on this component.
   */
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
  }
  /**
   * Add a child visual element to our set of children.
   */
  addVariantChild(t) {
    const r = this.getClosestVariantNode();
    if (r)
      return r.variantChildren && r.variantChildren.add(t), () => r.variantChildren.delete(t);
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(t, r) {
    const o = this.values.get(t);
    r !== o && (o && this.removeValue(t), this.bindToMotionValue(t, r), this.values.set(t, r), this.latestValues[t] = r.get());
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(t) {
    this.values.delete(t);
    const r = this.valueSubscriptions.get(t);
    r && (r(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, r) {
    if (this.props.values && this.props.values[t])
      return this.props.values[t];
    let o = this.values.get(t);
    return o === void 0 && r !== void 0 && (o = _o(r === null ? void 0 : r, { owner: this }), this.addValue(t, o)), o;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(t, r) {
    var o;
    let s = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : (o = this.getBaseTargetFromProps(this.props, t)) !== null && o !== void 0 ? o : this.readValueFromInstance(this.current, t, this.options);
    return s != null && (typeof s == "string" && (Pv(s) || Tv(s)) ? s = parseFloat(s) : !OD(s) && pr.test(r) && (s = Fv(t, r)), this.setBaseTarget(t, yt(s) ? s.get() : s)), yt(s) ? s.get() : s;
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(t, r) {
    this.baseTarget[t] = r;
  }
  /**
   * Find the base target for a value thats been removed from all animation
   * props.
   */
  getBaseTarget(t) {
    var r;
    const { initial: o } = this.props;
    let s;
    if (typeof o == "string" || typeof o == "object") {
      const l = yu(this.props, o, (r = this.presenceContext) === null || r === void 0 ? void 0 : r.custom);
      l && (s = l[t]);
    }
    if (o && s !== void 0)
      return s;
    const c = this.getBaseTargetFromProps(this.props, t);
    return c !== void 0 && !yt(c) ? c : this.initialValues[t] !== void 0 && s === void 0 ? void 0 : this.baseTarget[t];
  }
  on(t, r) {
    return this.events[t] || (this.events[t] = new Vu()), this.events[t].add(r);
  }
  notify(t, ...r) {
    this.events[t] && this.events[t].notify(...r);
  }
}
class Wy extends ND {
  constructor() {
    super(...arguments), this.KeyframeResolver = Bv;
  }
  sortInstanceNodePosition(t, r) {
    return t.compareDocumentPosition(r) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, r) {
    return t.style ? t.style[r] : void 0;
  }
  removeValueFromRenderState(t, { vars: r, style: o }) {
    delete r[t], delete o[t];
  }
}
function MD(e) {
  return window.getComputedStyle(e);
}
class DD extends Wy {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = Oy;
  }
  readValueFromInstance(t, r) {
    if (Br.has(r)) {
      const o = Ru(r);
      return o && o.default || 0;
    } else {
      const o = MD(t), s = (Ev(r) ? o.getPropertyValue(r) : o[r]) || 0;
      return typeof s == "string" ? s.trim() : s;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: r }) {
    return dy(t, r);
  }
  build(t, r, o) {
    Gu(t, r, o.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, r, o) {
    return Hu(t, r, o);
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    yt(t) && (this.childSubscription = t.on("change", (r) => {
      this.current && (this.current.textContent = `${r}`);
    }));
  }
}
class ID extends Wy {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = Qe;
  }
  getBaseTargetFromProps(t, r) {
    return t[r];
  }
  readValueFromInstance(t, r) {
    if (Br.has(r)) {
      const o = Ru(r);
      return o && o.default || 0;
    }
    return r = Ny.has(r) ? r : Fu(r), t.getAttribute(r);
  }
  scrapeMotionValuesFromProps(t, r, o) {
    return Iy(t, r, o);
  }
  build(t, r, o) {
    Ku(t, r, this.isSVGTag, o.transformTemplate);
  }
  renderInstance(t, r, o, s) {
    My(t, r, o, s);
  }
  mount(t) {
    this.isSVGTag = Yu(t.tagName), super.mount(t);
  }
}
const LD = (e, t) => Uu(e) ? new ID(t) : new DD(t, {
  allowProjection: e !== xm
}), jD = /* @__PURE__ */ PD({
  ...CN,
  ...zM,
  ...IM,
  ...GM
}, LD), kD = /* @__PURE__ */ pR(jD);
function pI({ deal: e }) {
  const [t, r] = vo([]), o = Po(() => [...e.riskFactors].sort((u, f) => {
    const h = { high: 0, medium: 1, low: 2 };
    return h[u.level] - h[f.level];
  }), [e.riskFactors]), s = (u) => {
    switch (u) {
      case "high":
        return /* @__PURE__ */ v.jsx(Sc, { className: "w-4 h-4" });
      case "medium":
        return /* @__PURE__ */ v.jsx(W_, { className: "w-4 h-4" });
      case "low":
        return /* @__PURE__ */ v.jsx(F_, { className: "w-4 h-4" });
      default:
        return null;
    }
  }, c = (u) => {
    switch (u) {
      case "high":
        return "bg-red-100 text-red-800 border-red-200";
      case "medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "low":
        return "bg-green-100 text-green-800 border-green-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  }, l = (u) => {
    r((f) => f.includes(u) ? f.filter((h) => h !== u) : [...f, u]);
  };
  return /* @__PURE__ */ v.jsxs(Ai, { className: "shadow-lg w-full max-w-3xl mx-auto my-8", children: [
    /* @__PURE__ */ v.jsxs(Ei, { children: [
      /* @__PURE__ */ v.jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ v.jsx(Oo, { className: "text-slate-800", children: "Risk Assessment" }) }),
      /* @__PURE__ */ v.jsx("p", { className: "text-sm text-slate-500", children: "Identify and assess potential obstacles in the deal process" })
    ] }),
    /* @__PURE__ */ v.jsx(Ri, { children: /* @__PURE__ */ v.jsx("div", { className: "space-y-6", children: o.map((u, f) => /* @__PURE__ */ v.jsxs("div", { className: `p-4 rounded-lg border ${c(u.level)}`, children: [
      /* @__PURE__ */ v.jsxs(
        "div",
        {
          className: "flex flex-col sm:flex-row sm:items-center sm:justify-between cursor-pointer space-y-2 sm:space-y-0",
          onClick: () => l(u.label),
          children: [
            /* @__PURE__ */ v.jsxs("div", { className: "flex items-center space-x-3", children: [
              s(u.level),
              /* @__PURE__ */ v.jsx("span", { className: "font-semibold text-sm sm:text-base", children: u.label })
            ] }),
            /* @__PURE__ */ v.jsxs("div", { className: "flex items-center justify-between sm:justify-end space-x-4", children: [
              /* @__PURE__ */ v.jsx(or, { children: /* @__PURE__ */ v.jsxs(sr, { children: [
                /* @__PURE__ */ v.jsx(ar, { asChild: !0, children: /* @__PURE__ */ v.jsxs("div", { className: "flex items-center space-x-1 text-xs sm:text-sm text-muted-foreground", children: [
                  /* @__PURE__ */ v.jsxs("span", { children: [
                    u.lostDealFrequency,
                    " deals lost"
                  ] }),
                  /* @__PURE__ */ v.jsx(yo, { className: "w-3 h-3 text-muted-foreground" })
                ] }) }),
                /* @__PURE__ */ v.jsx(Ln, { className: "max-w-xs", children: /* @__PURE__ */ v.jsxs("p", { children: [
                  "This factor contributed to ",
                  u.lostDealFrequency,
                  " lost deals in the past. Addressing this early can help avoid the same outcome."
                ] }) })
              ] }) }),
              /* @__PURE__ */ v.jsx(
                ua,
                {
                  className: `w-4 h-4 transition-transform ${t.includes(u.label) ? "transform rotate-180" : ""}`
                }
              )
            ] })
          ]
        }
      ),
      t.includes(u.label) && /* @__PURE__ */ v.jsxs(
        kD.div,
        {
          initial: { opacity: 0, height: 0 },
          animate: { opacity: 1, height: "auto" },
          exit: { opacity: 0, height: 0 },
          transition: { duration: 0.3 },
          className: "mt-4 space-y-4",
          children: [
            /* @__PURE__ */ v.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ v.jsxs("div", { children: [
                /* @__PURE__ */ v.jsx("h4", { className: "font-semibold mb-2", children: "Details" }),
                /* @__PURE__ */ v.jsx("p", { className: "text-sm text-slate-600", children: u.details })
              ] }),
              /* @__PURE__ */ v.jsxs("div", { children: [
                /* @__PURE__ */ v.jsx("h4", { className: "font-semibold mb-2", children: "Impact" }),
                /* @__PURE__ */ v.jsx("p", { className: "text-sm text-slate-600", children: u.impact })
              ] })
            ] }),
            /* @__PURE__ */ v.jsxs("div", { children: [
              /* @__PURE__ */ v.jsx("h4", { className: "font-semibold mb-2", children: "Key Metric" }),
              /* @__PURE__ */ v.jsx("p", { className: "text-sm text-slate-600", children: u.metric })
            ] })
          ]
        }
      )
    ] }, f)) }) })
  ] });
}
var qu = "Dialog", [$y, mI] = Qc(qu), [VD, ln] = $y(qu), Uy = (e) => {
  const {
    __scopeDialog: t,
    children: r,
    open: o,
    defaultOpen: s,
    onOpenChange: c,
    modal: l = !0
  } = e, u = b.useRef(null), f = b.useRef(null), [h = !1, p] = Zs({
    prop: o,
    defaultProp: s,
    onChange: c
  });
  return /* @__PURE__ */ v.jsx(
    VD,
    {
      scope: t,
      triggerRef: u,
      contentRef: f,
      contentId: Ir(),
      titleId: Ir(),
      descriptionId: Ir(),
      open: h,
      onOpenChange: p,
      onOpenToggle: b.useCallback(() => p((g) => !g), [p]),
      modal: l,
      children: r
    }
  );
};
Uy.displayName = qu;
var Hy = "DialogTrigger", FD = b.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...o } = e, s = ln(Hy, r), c = Ye(t, s.triggerRef);
    return /* @__PURE__ */ v.jsx(
      Le.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": s.open,
        "aria-controls": s.contentId,
        "data-state": Ju(s.open),
        ...o,
        ref: c,
        onClick: Oe(e.onClick, s.onOpenToggle)
      }
    );
  }
);
FD.displayName = Hy;
var Xu = "DialogPortal", [BD, zy] = $y(Xu, {
  forceMount: void 0
}), Gy = (e) => {
  const { __scopeDialog: t, forceMount: r, children: o, container: s } = e, c = ln(Xu, t);
  return /* @__PURE__ */ v.jsx(BD, { scope: t, forceMount: r, children: b.Children.map(o, (l) => /* @__PURE__ */ v.jsx(Ro, { present: r || c.open, children: /* @__PURE__ */ v.jsx(uu, { asChild: !0, container: s, children: l }) })) });
};
Gy.displayName = Xu;
var la = "DialogOverlay", Ky = b.forwardRef(
  (e, t) => {
    const r = zy(la, e.__scopeDialog), { forceMount: o = r.forceMount, ...s } = e, c = ln(la, e.__scopeDialog);
    return c.modal ? /* @__PURE__ */ v.jsx(Ro, { present: o || c.open, children: /* @__PURE__ */ v.jsx(WD, { ...s, ref: t }) }) : null;
  }
);
Ky.displayName = la;
var WD = b.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...o } = e, s = ln(la, r);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ v.jsx(du, { as: jr, allowPinchZoom: !0, shards: [s.contentRef], children: /* @__PURE__ */ v.jsx(
        Le.div,
        {
          "data-state": Ju(s.open),
          ...o,
          ref: t,
          style: { pointerEvents: "auto", ...o.style }
        }
      ) })
    );
  }
), Fr = "DialogContent", Yy = b.forwardRef(
  (e, t) => {
    const r = zy(Fr, e.__scopeDialog), { forceMount: o = r.forceMount, ...s } = e, c = ln(Fr, e.__scopeDialog);
    return /* @__PURE__ */ v.jsx(Ro, { present: o || c.open, children: c.modal ? /* @__PURE__ */ v.jsx($D, { ...s, ref: t }) : /* @__PURE__ */ v.jsx(UD, { ...s, ref: t }) });
  }
);
Yy.displayName = Fr;
var $D = b.forwardRef(
  (e, t) => {
    const r = ln(Fr, e.__scopeDialog), o = b.useRef(null), s = Ye(t, r.contentRef, o);
    return b.useEffect(() => {
      const c = o.current;
      if (c)
        return lg(c);
    }, []), /* @__PURE__ */ v.jsx(
      qy,
      {
        ...e,
        ref: s,
        trapFocus: r.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: Oe(e.onCloseAutoFocus, (c) => {
          var l;
          c.preventDefault(), (l = r.triggerRef.current) == null || l.focus();
        }),
        onPointerDownOutside: Oe(e.onPointerDownOutside, (c) => {
          const l = c.detail.originalEvent, u = l.button === 0 && l.ctrlKey === !0;
          (l.button === 2 || u) && c.preventDefault();
        }),
        onFocusOutside: Oe(
          e.onFocusOutside,
          (c) => c.preventDefault()
        )
      }
    );
  }
), UD = b.forwardRef(
  (e, t) => {
    const r = ln(Fr, e.__scopeDialog), o = b.useRef(!1), s = b.useRef(!1);
    return /* @__PURE__ */ v.jsx(
      qy,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (c) => {
          var l, u;
          (l = e.onCloseAutoFocus) == null || l.call(e, c), c.defaultPrevented || (o.current || (u = r.triggerRef.current) == null || u.focus(), c.preventDefault()), o.current = !1, s.current = !1;
        },
        onInteractOutside: (c) => {
          var f, h;
          (f = e.onInteractOutside) == null || f.call(e, c), c.defaultPrevented || (o.current = !0, c.detail.originalEvent.type === "pointerdown" && (s.current = !0));
          const l = c.target;
          ((h = r.triggerRef.current) == null ? void 0 : h.contains(l)) && c.preventDefault(), c.detail.originalEvent.type === "focusin" && s.current && c.preventDefault();
        }
      }
    );
  }
), qy = b.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, trapFocus: o, onOpenAutoFocus: s, onCloseAutoFocus: c, ...l } = e, u = ln(Fr, r), f = b.useRef(null), h = Ye(t, f);
    return jm(), /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
      /* @__PURE__ */ v.jsx(
        eu,
        {
          asChild: !0,
          loop: !0,
          trapped: o,
          onMountAutoFocus: s,
          onUnmountAutoFocus: c,
          children: /* @__PURE__ */ v.jsx(
            fa,
            {
              role: "dialog",
              id: u.contentId,
              "aria-describedby": u.descriptionId,
              "aria-labelledby": u.titleId,
              "data-state": Ju(u.open),
              ...l,
              ref: h,
              onDismiss: () => u.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
        /* @__PURE__ */ v.jsx(HD, { titleId: u.titleId }),
        /* @__PURE__ */ v.jsx(GD, { contentRef: f, descriptionId: u.descriptionId })
      ] })
    ] });
  }
), Zu = "DialogTitle", Xy = b.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...o } = e, s = ln(Zu, r);
    return /* @__PURE__ */ v.jsx(Le.h2, { id: s.titleId, ...o, ref: t });
  }
);
Xy.displayName = Zu;
var Zy = "DialogDescription", Jy = b.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...o } = e, s = ln(Zy, r);
    return /* @__PURE__ */ v.jsx(Le.p, { id: s.descriptionId, ...o, ref: t });
  }
);
Jy.displayName = Zy;
var Qy = "DialogClose", ex = b.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...o } = e, s = ln(Qy, r);
    return /* @__PURE__ */ v.jsx(
      Le.button,
      {
        type: "button",
        ...o,
        ref: t,
        onClick: Oe(e.onClick, () => s.onOpenChange(!1))
      }
    );
  }
);
ex.displayName = Qy;
function Ju(e) {
  return e ? "open" : "closed";
}
var tx = "DialogTitleWarning", [gI, nx] = jT(tx, {
  contentName: Fr,
  titleName: Zu,
  docsSlug: "dialog"
}), HD = ({ titleId: e }) => {
  const t = nx(tx), r = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return b.useEffect(() => {
    e && (document.getElementById(e) || console.error(r));
  }, [r, e]), null;
}, zD = "DialogDescriptionWarning", GD = ({ contentRef: e, descriptionId: t }) => {
  const o = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${nx(zD).contentName}}.`;
  return b.useEffect(() => {
    var c;
    const s = (c = e.current) == null ? void 0 : c.getAttribute("aria-describedby");
    t && s && (document.getElementById(t) || console.warn(o));
  }, [o, e, t]), null;
}, KD = Uy, YD = Gy, rx = Ky, ix = Yy, ox = Xy, sx = Jy, qD = ex;
const XD = KD, ZD = YD, ax = b.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ v.jsx(
  rx,
  {
    ref: r,
    className: $e(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
ax.displayName = rx.displayName;
const lx = b.forwardRef(({ className: e, children: t, ...r }, o) => /* @__PURE__ */ v.jsxs(ZD, { children: [
  /* @__PURE__ */ v.jsx(ax, {}),
  /* @__PURE__ */ v.jsxs(
    ix,
    {
      ref: o,
      className: $e(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        e
      ),
      ...r,
      children: [
        t,
        /* @__PURE__ */ v.jsxs(qD, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ v.jsx(Em, { className: "h-4 w-4" }),
          /* @__PURE__ */ v.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
lx.displayName = ix.displayName;
const cx = ({
  className: e,
  ...t
}) => /* @__PURE__ */ v.jsx(
  "div",
  {
    className: $e(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      e
    ),
    ...t
  }
);
cx.displayName = "DialogHeader";
const ux = ({
  className: e,
  ...t
}) => /* @__PURE__ */ v.jsx(
  "div",
  {
    className: $e(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
ux.displayName = "DialogFooter";
const fx = b.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ v.jsx(
  ox,
  {
    ref: r,
    className: $e(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
fx.displayName = ox.displayName;
const JD = b.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ v.jsx(
  sx,
  {
    ref: r,
    className: $e("text-sm text-muted-foreground", e),
    ...t
  }
));
JD.displayName = sx.displayName;
var QD = "Separator", gm = "horizontal", eI = ["horizontal", "vertical"], dx = b.forwardRef((e, t) => {
  const { decorative: r, orientation: o = gm, ...s } = e, c = tI(o) ? o : gm, u = r ? { role: "none" } : { "aria-orientation": c === "vertical" ? c : void 0, role: "separator" };
  return /* @__PURE__ */ v.jsx(
    Le.div,
    {
      "data-orientation": c,
      ...u,
      ...s,
      ref: t
    }
  );
});
dx.displayName = QD;
function tI(e) {
  return eI.includes(e);
}
var hx = dx;
const px = b.forwardRef(
  ({ className: e, orientation: t = "horizontal", decorative: r = !0, ...o }, s) => /* @__PURE__ */ v.jsx(
    hx,
    {
      ref: s,
      decorative: r,
      orientation: t,
      className: $e(
        "shrink-0 bg-border",
        t === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        e
      ),
      ...o
    }
  )
);
px.displayName = hx.displayName;
const vI = ({ deal: e, onNavigate: t }) => {
  const [r, o] = vo([]), [s, c] = vo(!1), l = (h) => {
    o((p) => p.includes(h) ? p.filter((g) => g !== h) : [...p, h]);
  }, u = (h) => h.split("_").map((p) => p.charAt(0).toUpperCase() + p.slice(1)).join(" "), f = (h) => h === "implications" ? $_ : PT(h);
  return /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
    /* @__PURE__ */ v.jsxs(Ai, { className: "shadow-lg w-full max-w-3xl mx-auto my-8", children: [
      /* @__PURE__ */ v.jsxs(Ei, { className: "flex flex-row items-center justify-between", children: [
        /* @__PURE__ */ v.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ v.jsx(Oo, { className: "", children: "Deal Qualification" }),
          /* @__PURE__ */ v.jsx("p", { className: "text-sm text-muted-foreground", children: "Assess this deal's qualification strength according to MEDDPICC." })
        ] }),
        /* @__PURE__ */ v.jsx(or, { children: /* @__PURE__ */ v.jsxs(sr, { children: [
          /* @__PURE__ */ v.jsx(ar, { asChild: !0, children: /* @__PURE__ */ v.jsx(
            pn,
            {
              variant: "outline",
              size: "sm",
              onClick: () => t == null ? void 0 : t("/deals/qualification-framework"),
              children: /* @__PURE__ */ v.jsx(Rh, { className: "w-3 h-3" })
            }
          ) }),
          /* @__PURE__ */ v.jsx(Ln, { children: /* @__PURE__ */ v.jsx("p", { children: "Configure qualification framework" }) })
        ] }) })
      ] }),
      /* @__PURE__ */ v.jsx(Ri, { children: /* @__PURE__ */ v.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ v.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
          /* @__PURE__ */ v.jsx("span", { className: "text-sm font-medium text-muted-foreground", children: "Criteria" }),
          /* @__PURE__ */ v.jsx("div", { className: "flex items-center space-x-1", children: /* @__PURE__ */ v.jsx(or, { children: /* @__PURE__ */ v.jsxs(sr, { children: [
            /* @__PURE__ */ v.jsx(ar, { asChild: !0, children: /* @__PURE__ */ v.jsxs("div", { className: "flex items-center space-x-1 text-sm text-muted-foreground cursor-help", children: [
              /* @__PURE__ */ v.jsx("span", { className: "text-sm font-medium", children: "Score" }),
              /* @__PURE__ */ v.jsx(yo, { className: "w-3 h-3" })
            ] }) }),
            /* @__PURE__ */ v.jsx(Ln, { className: "w-80", children: /* @__PURE__ */ v.jsx("div", { className: "space-y-4", children: /* @__PURE__ */ v.jsxs("p", { className: "text-sm", children: [
              "This score (0-5) indicates your progress in addressing key sales qualification criteria. You can expand each category to view details.",
              " ",
              /* @__PURE__ */ v.jsx(
                "button",
                {
                  className: "h-auto p-0",
                  onClick: () => c(!0),
                  children: "Learn more"
                }
              )
            ] }) }) })
          ] }) }) })
        ] }),
        Object.entries(e.meddpicc).map(([h, p], g) => {
          const y = f(h), C = r.includes(h), T = e.dealBreakers[h];
          return /* @__PURE__ */ v.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ v.jsxs("div", { className: "flex items-center space-x-4", children: [
              /* @__PURE__ */ v.jsxs("div", { className: "w-48 flex items-center space-x-2", children: [
                y && /* @__PURE__ */ v.jsx(y, { className: "w-5 h-5" }),
                /* @__PURE__ */ v.jsx("span", { children: u(h) }),
                T && /* @__PURE__ */ v.jsx(Sc, { className: "w-4 h-4 text-red-500" })
              ] }),
              /* @__PURE__ */ v.jsxs("div", { className: "flex-1 flex items-center space-x-4", children: [
                /* @__PURE__ */ v.jsx("div", { className: "flex-1", children: /* @__PURE__ */ v.jsx(vu, { value: p * 100 / 5 }) }),
                /* @__PURE__ */ v.jsx("div", { className: "w-12 text-center", children: /* @__PURE__ */ v.jsxs("span", { className: "text-sm font-medium", children: [
                  p,
                  "/5"
                ] }) }),
                /* @__PURE__ */ v.jsx(
                  pn,
                  {
                    variant: "ghost",
                    size: "sm",
                    className: "p-0",
                    onClick: () => l(h),
                    children: /* @__PURE__ */ v.jsx(
                      ua,
                      {
                        className: `h-4 w-4 transform transition-transform duration-200 ${C ? "rotate-180" : ""}`
                      }
                    )
                  }
                )
              ] })
            ] }),
            C && /* @__PURE__ */ v.jsxs("div", { className: "ml-12 pl-4 border-l border-slate-200", children: [
              T && /* @__PURE__ */ v.jsxs("div", { className: "inline-flex items-center space-x-2 py-2 text-red-600 bg-red-50 px-3 rounded-md mb-2", children: [
                /* @__PURE__ */ v.jsx(Sc, { className: "w-4 h-4 shrink-0" }),
                /* @__PURE__ */ v.jsx("span", { className: "text-sm font-medium", children: T })
              ] }),
              /* @__PURE__ */ v.jsx("div", { className: "space-y-2", children: [...e.qualificationDetails[h]].sort(
                (S, _) => _.completed === S.completed ? 0 : _.completed ? 1 : -1
              ).map((S, _) => /* @__PURE__ */ v.jsxs("div", { className: "flex items-center space-x-2", children: [
                S.completed ? /* @__PURE__ */ v.jsx(Pm, { className: "h-4 w-4 text-green-500" }) : /* @__PURE__ */ v.jsx(Em, { className: "h-4 w-4 text-muted-foreground" }),
                /* @__PURE__ */ v.jsx(
                  "span",
                  {
                    className: S.completed ? "text-slate-600" : "text-muted-foreground",
                    children: S.text
                  }
                )
              ] }, _)) })
            ] })
          ] }, g);
        })
      ] }) })
    ] }),
    /* @__PURE__ */ v.jsx(XD, { open: s, onOpenChange: c, children: /* @__PURE__ */ v.jsxs(lx, { className: "sm:max-w-md", children: [
      /* @__PURE__ */ v.jsx(cx, { children: /* @__PURE__ */ v.jsx(fx, { children: "Qualification Score" }) }),
      /* @__PURE__ */ v.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ v.jsxs("div", { children: [
          /* @__PURE__ */ v.jsx("p", { className: "font-medium mb-2", children: "What the score means" }),
          /* @__PURE__ */ v.jsx("p", { className: "text-sm text-muted-foreground", children: "The score (0-5) reflects your progress in qualifying an opportunity across key criteria of the framework you have selected." })
        ] }),
        /* @__PURE__ */ v.jsxs("div", { children: [
          /* @__PURE__ */ v.jsx("p", { className: "font-medium mb-2", children: "Score interpretation" }),
          /* @__PURE__ */ v.jsxs("ul", { className: "text-sm text-muted-foreground space-y-1", children: [
            /* @__PURE__ */ v.jsxs("li", { children: [
              /* @__PURE__ */ v.jsx("strong", { children: "0" }),
              " = No progress"
            ] }),
            /* @__PURE__ */ v.jsxs("li", { children: [
              /* @__PURE__ */ v.jsx("strong", { children: "1-2" }),
              " = Limited progress"
            ] }),
            /* @__PURE__ */ v.jsxs("li", { children: [
              /* @__PURE__ */ v.jsx("strong", { children: "3" }),
              " = Moderate progress"
            ] }),
            /* @__PURE__ */ v.jsxs("li", { children: [
              /* @__PURE__ */ v.jsx("strong", { children: "4" }),
              " = Strong progress"
            ] }),
            /* @__PURE__ */ v.jsxs("li", { children: [
              /* @__PURE__ */ v.jsx("strong", { children: "5" }),
              " = Full progress"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ v.jsxs("div", { children: [
          /* @__PURE__ */ v.jsx("p", { className: "font-medium mb-2", children: "How the score is calculated" }),
          /* @__PURE__ */ v.jsx("p", { className: "text-sm text-muted-foreground", children: "Each component's score depends on how many weighted conditions are met. Meeting more conditions increases the score." })
        ] }),
        /* @__PURE__ */ v.jsxs("div", { children: [
          /* @__PURE__ */ v.jsx("p", { className: "font-medium mb-2", children: "What are deal breakers?" }),
          /* @__PURE__ */ v.jsx("p", { className: "text-sm text-muted-foreground", children: "Any flagged deal breakers are critical issues that may block the deal and need immediate attention." })
        ] }),
        /* @__PURE__ */ v.jsx(px, {}),
        /* @__PURE__ */ v.jsxs("div", { children: [
          /* @__PURE__ */ v.jsx("p", { className: "font-medium mb-2", children: "Adjust the framework" }),
          /* @__PURE__ */ v.jsxs("p", { className: "text-sm text-muted-foreground", children: [
            "You can adjust the qualification questions and weights here",
            " ",
            /* @__PURE__ */ v.jsx(
              "button",
              {
                className: "h-auto p-0",
                onClick: () => t == null ? void 0 : t("/deals/qualification-framework"),
                children: "qualification framework"
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ v.jsxs(ux, { children: [
        /* @__PURE__ */ v.jsxs(pn, { onClick: () => t == null ? void 0 : t("/deals/qualification-framework"), variant: "outline", children: [
          "Configure framework",
          /* @__PURE__ */ v.jsx(Rh, { className: "w-3 h-3 ml-1" })
        ] }),
        /* @__PURE__ */ v.jsx(pn, { onClick: () => c(!1), children: "Close" })
      ] })
    ] }) })
  ] });
};
export {
  iI as Counter,
  lI as DealHeader,
  uI as DealProgress,
  vI as DealQualification,
  pI as DealRisk,
  fI as DealStakeholders
};
//# sourceMappingURL=index.js.map
