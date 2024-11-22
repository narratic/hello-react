import * as S from "react";
import On, { useState as $c, useEffect as vo, forwardRef as Hc, createElement as js, useLayoutEffect as em, createContext as xi, useContext as At, useId as MT, useCallback as tm, Component as LT, useRef as Ms, useInsertionEffect as NT, useMemo as yo, Fragment as nm } from "react";
import * as ta from "react-dom";
import DT from "react-dom";
var Zi = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function IT(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var dc = { exports: {} }, Ji = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var uh;
function VT() {
  if (uh)
    return Ji;
  uh = 1;
  var e = On, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, s = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, c = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(u, f, h) {
    var p, g = {}, v = null, b = null;
    h !== void 0 && (v = "" + h), f.key !== void 0 && (v = "" + f.key), f.ref !== void 0 && (b = f.ref);
    for (p in f)
      o.call(f, p) && !c.hasOwnProperty(p) && (g[p] = f[p]);
    if (u && u.defaultProps)
      for (p in f = u.defaultProps, f)
        g[p] === void 0 && (g[p] = f[p]);
    return { $$typeof: t, type: u, key: v, ref: b, props: g, _owner: s.current };
  }
  return Ji.Fragment = r, Ji.jsx = l, Ji.jsxs = l, Ji;
}
var Qi = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fh;
function kT() {
  return fh || (fh = 1, process.env.NODE_ENV !== "production" && function() {
    var e = On, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), u = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), b = Symbol.for("react.offscreen"), T = Symbol.iterator, w = "@@iterator";
    function _(E) {
      if (E === null || typeof E != "object")
        return null;
      var W = T && E[T] || E[w];
      return typeof W == "function" ? W : null;
    }
    var A = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function R(E) {
      {
        for (var W = arguments.length, G = new Array(W > 1 ? W - 1 : 0), se = 1; se < W; se++)
          G[se - 1] = arguments[se];
        M("error", E, G);
      }
    }
    function M(E, W, G) {
      {
        var se = A.ReactDebugCurrentFrame, Ee = se.getStackAddendum();
        Ee !== "" && (W += "%s", G = G.concat([Ee]));
        var Le = G.map(function(be) {
          return String(be);
        });
        Le.unshift("Warning: " + W), Function.prototype.apply.call(console[E], console, Le);
      }
    }
    var I = !1, V = !1, H = !1, U = !1, $ = !1, J;
    J = Symbol.for("react.module.reference");
    function ee(E) {
      return !!(typeof E == "string" || typeof E == "function" || E === o || E === c || $ || E === s || E === h || E === p || U || E === b || I || V || H || typeof E == "object" && E !== null && (E.$$typeof === v || E.$$typeof === g || E.$$typeof === l || E.$$typeof === u || E.$$typeof === f || // This needs to include all possible module reference object
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
          case v: {
            var Ee = E, Le = Ee._payload, be = Ee._init;
            try {
              return ae(be(Le));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var te = Object.assign, _e = 0, le, X, K, pe, Me, Pe, an;
    function ln() {
    }
    ln.__reactDisabledLog = !0;
    function Ft() {
      {
        if (_e === 0) {
          le = console.log, X = console.info, K = console.warn, pe = console.error, Me = console.group, Pe = console.groupCollapsed, an = console.groupEnd;
          var E = {
            configurable: !0,
            enumerable: !0,
            value: ln,
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
        _e++;
      }
    }
    function yt() {
      {
        if (_e--, _e === 0) {
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
              value: an
            })
          });
        }
        _e < 0 && R("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ft = A.ReactCurrentDispatcher, ne;
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
      var Le;
      Le = ft.current, ft.current = null, Ft();
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
            } catch (ht) {
              se = ht;
            }
            Reflect.construct(E, [], be);
          } else {
            try {
              be.call();
            } catch (ht) {
              se = ht;
            }
            E.call(be.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ht) {
            se = ht;
          }
          E();
        }
      } catch (ht) {
        if (ht && se && typeof ht.stack == "string") {
          for (var ve = ht.stack.split(`
`), ot = se.stack.split(`
`), $e = ve.length - 1, Ke = ot.length - 1; $e >= 1 && Ke >= 0 && ve[$e] !== ot[Ke]; )
            Ke--;
          for (; $e >= 1 && Ke >= 0; $e--, Ke--)
            if (ve[$e] !== ot[Ke]) {
              if ($e !== 1 || Ke !== 1)
                do
                  if ($e--, Ke--, Ke < 0 || ve[$e] !== ot[Ke]) {
                    var st = `
` + ve[$e].replace(" at new ", " at ");
                    return E.displayName && st.includes("<anonymous>") && (st = st.replace("<anonymous>", E.displayName)), typeof E == "function" && Ae.set(E, st), st;
                  }
                while ($e >= 1 && Ke >= 0);
              break;
            }
        }
      } finally {
        Ve = !1, ft.current = Le, yt(), Error.prepareStackTrace = Ee;
      }
      var Bn = E ? E.displayName || E.name : "", Bt = Bn ? xe(Bn) : "";
      return typeof E == "function" && Ae.set(E, Bt), Bt;
    }
    function tt(E, W, G) {
      return we(E, !1);
    }
    function We(E) {
      var W = E.prototype;
      return !!(W && W.isReactComponent);
    }
    function dt(E, W, G) {
      if (E == null)
        return "";
      if (typeof E == "function")
        return we(E, We(E));
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
            return tt(E.render);
          case g:
            return dt(E.type, W, G);
          case v: {
            var se = E, Ee = se._payload, Le = se._init;
            try {
              return dt(Le(Ee), W, G);
            } catch {
            }
          }
        }
      return "";
    }
    var Et = Object.prototype.hasOwnProperty, nt = {}, dr = A.ReactDebugCurrentFrame;
    function Zt(E) {
      if (E) {
        var W = E._owner, G = dt(E.type, E._source, W ? W.type : null);
        dr.setExtraStackFrame(G);
      } else
        dr.setExtraStackFrame(null);
    }
    function hr(E, W, G, se, Ee) {
      {
        var Le = Function.call.bind(Et);
        for (var be in E)
          if (Le(E, be)) {
            var ve = void 0;
            try {
              if (typeof E[be] != "function") {
                var ot = Error((se || "React class") + ": " + G + " type `" + be + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof E[be] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ot.name = "Invariant Violation", ot;
              }
              ve = E[be](W, be, se, G, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch ($e) {
              ve = $e;
            }
            ve && !(ve instanceof Error) && (Zt(Ee), R("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", se || "React class", G, be, typeof ve), Zt(null)), ve instanceof Error && !(ve.message in nt) && (nt[ve.message] = !0, Zt(Ee), R("Failed %s type: %s", G, ve.message), Zt(null));
          }
      }
    }
    var Rt = Array.isArray;
    function yn(E) {
      return Rt(E);
    }
    function Nr(E) {
      {
        var W = typeof Symbol == "function" && Symbol.toStringTag, G = W && E[Symbol.toStringTag] || E.constructor.name || "Object";
        return G;
      }
    }
    function Ca(E) {
      try {
        return jn(E), !1;
      } catch {
        return !0;
      }
    }
    function jn(E) {
      return "" + E;
    }
    function Ao(E) {
      if (Ca(E))
        return R("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Nr(E)), jn(E);
    }
    var Jt = A.ReactCurrentOwner, Fn = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Dr, Ir, pr;
    pr = {};
    function Pi(E) {
      if (Et.call(E, "ref")) {
        var W = Object.getOwnPropertyDescriptor(E, "ref").get;
        if (W && W.isReactWarning)
          return !1;
      }
      return E.ref !== void 0;
    }
    function Ai(E) {
      if (Et.call(E, "key")) {
        var W = Object.getOwnPropertyDescriptor(E, "key").get;
        if (W && W.isReactWarning)
          return !1;
      }
      return E.key !== void 0;
    }
    function Ei(E, W) {
      if (typeof E.ref == "string" && Jt.current && W && Jt.current.stateNode !== W) {
        var G = ae(Jt.current.type);
        pr[G] || (R('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', ae(Jt.current.type), E.ref), pr[G] = !0);
      }
    }
    function Ri(E, W) {
      {
        var G = function() {
          Dr || (Dr = !0, R("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", W));
        };
        G.isReactWarning = !0, Object.defineProperty(E, "key", {
          get: G,
          configurable: !0
        });
      }
    }
    function Oi(E, W) {
      {
        var G = function() {
          Ir || (Ir = !0, R("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", W));
        };
        G.isReactWarning = !0, Object.defineProperty(E, "ref", {
          get: G,
          configurable: !0
        });
      }
    }
    var Mi = function(E, W, G, se, Ee, Le, be) {
      var ve = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: E,
        key: W,
        ref: G,
        props: be,
        // Record the component responsible for creating this element.
        _owner: Le
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
    function Ta(E, W, G, se, Ee) {
      {
        var Le, be = {}, ve = null, ot = null;
        G !== void 0 && (Ao(G), ve = "" + G), Ai(W) && (Ao(W.key), ve = "" + W.key), Pi(W) && (ot = W.ref, Ei(W, Ee));
        for (Le in W)
          Et.call(W, Le) && !Fn.hasOwnProperty(Le) && (be[Le] = W[Le]);
        if (E && E.defaultProps) {
          var $e = E.defaultProps;
          for (Le in $e)
            be[Le] === void 0 && (be[Le] = $e[Le]);
        }
        if (ve || ot) {
          var Ke = typeof E == "function" ? E.displayName || E.name || "Unknown" : E;
          ve && Ri(be, Ke), ot && Oi(be, Ke);
        }
        return Mi(E, ve, ot, Ee, se, Jt.current, be);
      }
    }
    var Li = A.ReactCurrentOwner, Eo = A.ReactDebugCurrentFrame;
    function xn(E) {
      if (E) {
        var W = E._owner, G = dt(E.type, E._source, W ? W.type : null);
        Eo.setExtraStackFrame(G);
      } else
        Eo.setExtraStackFrame(null);
    }
    var Vr;
    Vr = !1;
    function Ni(E) {
      return typeof E == "object" && E !== null && E.$$typeof === t;
    }
    function Ro() {
      {
        if (Li.current) {
          var E = ae(Li.current.type);
          if (E)
            return `

Check the render method of \`` + E + "`.";
        }
        return "";
      }
    }
    function _a(E) {
      return "";
    }
    var Oo = {};
    function Mo(E) {
      {
        var W = Ro();
        if (!W) {
          var G = typeof E == "string" ? E : E.displayName || E.name;
          G && (W = `

Check the top-level render call using <` + G + ">.");
        }
        return W;
      }
    }
    function Lo(E, W) {
      {
        if (!E._store || E._store.validated || E.key != null)
          return;
        E._store.validated = !0;
        var G = Mo(W);
        if (Oo[G])
          return;
        Oo[G] = !0;
        var se = "";
        E && E._owner && E._owner !== Li.current && (se = " It was passed a child from " + ae(E._owner.type) + "."), xn(E), R('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', G, se), xn(null);
      }
    }
    function No(E, W) {
      {
        if (typeof E != "object")
          return;
        if (yn(E))
          for (var G = 0; G < E.length; G++) {
            var se = E[G];
            Ni(se) && Lo(se, W);
          }
        else if (Ni(E))
          E._store && (E._store.validated = !0);
        else if (E) {
          var Ee = _(E);
          if (typeof Ee == "function" && Ee !== E.entries)
            for (var Le = Ee.call(E), be; !(be = Le.next()).done; )
              Ni(be.value) && Lo(be.value, W);
        }
      }
    }
    function Pa(E) {
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
          hr(G, E.props, "prop", se, E);
        } else if (W.PropTypes !== void 0 && !Vr) {
          Vr = !0;
          var Ee = ae(W);
          R("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Ee || "Unknown");
        }
        typeof W.getDefaultProps == "function" && !W.getDefaultProps.isReactClassApproved && R("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Di(E) {
      {
        for (var W = Object.keys(E.props), G = 0; G < W.length; G++) {
          var se = W[G];
          if (se !== "children" && se !== "key") {
            xn(E), R("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", se), xn(null);
            break;
          }
        }
        E.ref !== null && (xn(E), R("Invalid attribute `ref` supplied to `React.Fragment`."), xn(null));
      }
    }
    var Do = {};
    function kr(E, W, G, se, Ee, Le) {
      {
        var be = ee(E);
        if (!be) {
          var ve = "";
          (E === void 0 || typeof E == "object" && E !== null && Object.keys(E).length === 0) && (ve += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ot = _a();
          ot ? ve += ot : ve += Ro();
          var $e;
          E === null ? $e = "null" : yn(E) ? $e = "array" : E !== void 0 && E.$$typeof === t ? ($e = "<" + (ae(E.type) || "Unknown") + " />", ve = " Did you accidentally export a JSX literal instead of a component?") : $e = typeof E, R("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", $e, ve);
        }
        var Ke = Ta(E, W, G, Ee, Le);
        if (Ke == null)
          return Ke;
        if (be) {
          var st = W.children;
          if (st !== void 0)
            if (se)
              if (yn(st)) {
                for (var Bn = 0; Bn < st.length; Bn++)
                  No(st[Bn], E);
                Object.freeze && Object.freeze(st);
              } else
                R("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              No(st, E);
        }
        if (Et.call(W, "key")) {
          var Bt = ae(E), ht = Object.keys(W).filter(function(Io) {
            return Io !== "key";
          }), Ii = ht.length > 0 ? "{key: someKey, " + ht.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Do[Bt + Ii]) {
            var Ma = ht.length > 0 ? "{" + ht.join(": ..., ") + ": ...}" : "{}";
            R(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ii, Bt, Ma, Bt), Do[Bt + Ii] = !0;
          }
        }
        return E === o ? Di(Ke) : Pa(Ke), Ke;
      }
    }
    function Aa(E, W, G) {
      return kr(E, W, G, !0);
    }
    function Ea(E, W, G) {
      return kr(E, W, G, !1);
    }
    var Ra = Ea, Oa = Aa;
    Qi.Fragment = o, Qi.jsx = Ra, Qi.jsxs = Oa;
  }()), Qi;
}
process.env.NODE_ENV === "production" ? dc.exports = VT() : dc.exports = kT();
var C = dc.exports, Fs = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
Fs.exports;
(function(e, t) {
  (function() {
    var r, o = "4.17.21", s = 200, c = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", l = "Expected a function", u = "Invalid `variable` option passed into `_.template`", f = "__lodash_hash_undefined__", h = 500, p = "__lodash_placeholder__", g = 1, v = 2, b = 4, T = 1, w = 2, _ = 1, A = 2, R = 4, M = 8, I = 16, V = 32, H = 64, U = 128, $ = 256, J = 512, ee = 30, he = "...", Z = 800, ae = 16, te = 1, _e = 2, le = 3, X = 1 / 0, K = 9007199254740991, pe = 17976931348623157e292, Me = NaN, Pe = 4294967295, an = Pe - 1, ln = Pe >>> 1, Ft = [
      ["ary", U],
      ["bind", _],
      ["bindKey", A],
      ["curry", M],
      ["curryRight", I],
      ["flip", J],
      ["partial", V],
      ["partialRight", H],
      ["rearg", $]
    ], yt = "[object Arguments]", ft = "[object Array]", ne = "[object AsyncFunction]", xe = "[object Boolean]", Ve = "[object Date]", Ae = "[object DOMException]", Ce = "[object Error]", we = "[object Function]", tt = "[object GeneratorFunction]", We = "[object Map]", dt = "[object Number]", Et = "[object Null]", nt = "[object Object]", dr = "[object Promise]", Zt = "[object Proxy]", hr = "[object RegExp]", Rt = "[object Set]", yn = "[object String]", Nr = "[object Symbol]", Ca = "[object Undefined]", jn = "[object WeakMap]", Ao = "[object WeakSet]", Jt = "[object ArrayBuffer]", Fn = "[object DataView]", Dr = "[object Float32Array]", Ir = "[object Float64Array]", pr = "[object Int8Array]", Pi = "[object Int16Array]", Ai = "[object Int32Array]", Ei = "[object Uint8Array]", Ri = "[object Uint8ClampedArray]", Oi = "[object Uint16Array]", Mi = "[object Uint32Array]", Ta = /\b__p \+= '';/g, Li = /\b(__p \+=) '' \+/g, Eo = /(__e\(.*?\)|\b__t\)) \+\n'';/g, xn = /&(?:amp|lt|gt|quot|#39);/g, Vr = /[&<>"']/g, Ni = RegExp(xn.source), Ro = RegExp(Vr.source), _a = /<%-([\s\S]+?)%>/g, Oo = /<%([\s\S]+?)%>/g, Mo = /<%=([\s\S]+?)%>/g, Lo = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, No = /^\w*$/, Pa = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Di = /[\\^$.*+?()[\]{}|]/g, Do = RegExp(Di.source), kr = /^\s+/, Aa = /\s/, Ea = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Ra = /\{\n\/\* \[wrapped with (.+)\] \*/, Oa = /,? & /, E = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, W = /[()=,{}\[\]\/\s]/, G = /\\(\\)?/g, se = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Ee = /\w*$/, Le = /^[-+]0x[0-9a-f]+$/i, be = /^0b[01]+$/i, ve = /^\[object .+?Constructor\]$/, ot = /^0o[0-7]+$/i, $e = /^(?:0|[1-9]\d*)$/, Ke = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, st = /($^)/, Bn = /['\n\r\u2028\u2029\\]/g, Bt = "\\ud800-\\udfff", ht = "\\u0300-\\u036f", Ii = "\\ufe20-\\ufe2f", Ma = "\\u20d0-\\u20ff", Io = ht + Ii + Ma, Fu = "\\u2700-\\u27bf", Bu = "a-z\\xdf-\\xf6\\xf8-\\xff", Ay = "\\xac\\xb1\\xd7\\xf7", Ey = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Ry = "\\u2000-\\u206f", Oy = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Wu = "A-Z\\xc0-\\xd6\\xd8-\\xde", Uu = "\\ufe0e\\ufe0f", $u = Ay + Ey + Ry + Oy, La = "['’]", My = "[" + Bt + "]", Hu = "[" + $u + "]", Vo = "[" + Io + "]", zu = "\\d+", Ly = "[" + Fu + "]", Gu = "[" + Bu + "]", Ku = "[^" + Bt + $u + zu + Fu + Bu + Wu + "]", Na = "\\ud83c[\\udffb-\\udfff]", Ny = "(?:" + Vo + "|" + Na + ")", Yu = "[^" + Bt + "]", Da = "(?:\\ud83c[\\udde6-\\uddff]){2}", Ia = "[\\ud800-\\udbff][\\udc00-\\udfff]", jr = "[" + Wu + "]", qu = "\\u200d", Xu = "(?:" + Gu + "|" + Ku + ")", Dy = "(?:" + jr + "|" + Ku + ")", Zu = "(?:" + La + "(?:d|ll|m|re|s|t|ve))?", Ju = "(?:" + La + "(?:D|LL|M|RE|S|T|VE))?", Qu = Ny + "?", ef = "[" + Uu + "]?", Iy = "(?:" + qu + "(?:" + [Yu, Da, Ia].join("|") + ")" + ef + Qu + ")*", Vy = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", ky = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", tf = ef + Qu + Iy, jy = "(?:" + [Ly, Da, Ia].join("|") + ")" + tf, Fy = "(?:" + [Yu + Vo + "?", Vo, Da, Ia, My].join("|") + ")", By = RegExp(La, "g"), Wy = RegExp(Vo, "g"), Va = RegExp(Na + "(?=" + Na + ")|" + Fy + tf, "g"), Uy = RegExp([
      jr + "?" + Gu + "+" + Zu + "(?=" + [Hu, jr, "$"].join("|") + ")",
      Dy + "+" + Ju + "(?=" + [Hu, jr + Xu, "$"].join("|") + ")",
      jr + "?" + Xu + "+" + Zu,
      jr + "+" + Ju,
      ky,
      Vy,
      zu,
      jy
    ].join("|"), "g"), $y = RegExp("[" + qu + Bt + Io + Uu + "]"), Hy = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, zy = [
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
    ], Gy = -1, Fe = {};
    Fe[Dr] = Fe[Ir] = Fe[pr] = Fe[Pi] = Fe[Ai] = Fe[Ei] = Fe[Ri] = Fe[Oi] = Fe[Mi] = !0, Fe[yt] = Fe[ft] = Fe[Jt] = Fe[xe] = Fe[Fn] = Fe[Ve] = Fe[Ce] = Fe[we] = Fe[We] = Fe[dt] = Fe[nt] = Fe[hr] = Fe[Rt] = Fe[yn] = Fe[jn] = !1;
    var ke = {};
    ke[yt] = ke[ft] = ke[Jt] = ke[Fn] = ke[xe] = ke[Ve] = ke[Dr] = ke[Ir] = ke[pr] = ke[Pi] = ke[Ai] = ke[We] = ke[dt] = ke[nt] = ke[hr] = ke[Rt] = ke[yn] = ke[Nr] = ke[Ei] = ke[Ri] = ke[Oi] = ke[Mi] = !0, ke[Ce] = ke[we] = ke[jn] = !1;
    var Ky = {
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
    }, Yy = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, qy = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, Xy = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, Zy = parseFloat, Jy = parseInt, nf = typeof Zi == "object" && Zi && Zi.Object === Object && Zi, Qy = typeof self == "object" && self && self.Object === Object && self, at = nf || Qy || Function("return this")(), ka = t && !t.nodeType && t, mr = ka && !0 && e && !e.nodeType && e, rf = mr && mr.exports === ka, ja = rf && nf.process, Wt = function() {
      try {
        var L = mr && mr.require && mr.require("util").types;
        return L || ja && ja.binding && ja.binding("util");
      } catch {
      }
    }(), of = Wt && Wt.isArrayBuffer, sf = Wt && Wt.isDate, af = Wt && Wt.isMap, lf = Wt && Wt.isRegExp, cf = Wt && Wt.isSet, uf = Wt && Wt.isTypedArray;
    function Ot(L, k, D) {
      switch (D.length) {
        case 0:
          return L.call(k);
        case 1:
          return L.call(k, D[0]);
        case 2:
          return L.call(k, D[0], D[1]);
        case 3:
          return L.call(k, D[0], D[1], D[2]);
      }
      return L.apply(k, D);
    }
    function ex(L, k, D, Y) {
      for (var ce = -1, Re = L == null ? 0 : L.length; ++ce < Re; ) {
        var Qe = L[ce];
        k(Y, Qe, D(Qe), L);
      }
      return Y;
    }
    function Ut(L, k) {
      for (var D = -1, Y = L == null ? 0 : L.length; ++D < Y && k(L[D], D, L) !== !1; )
        ;
      return L;
    }
    function tx(L, k) {
      for (var D = L == null ? 0 : L.length; D-- && k(L[D], D, L) !== !1; )
        ;
      return L;
    }
    function ff(L, k) {
      for (var D = -1, Y = L == null ? 0 : L.length; ++D < Y; )
        if (!k(L[D], D, L))
          return !1;
      return !0;
    }
    function Wn(L, k) {
      for (var D = -1, Y = L == null ? 0 : L.length, ce = 0, Re = []; ++D < Y; ) {
        var Qe = L[D];
        k(Qe, D, L) && (Re[ce++] = Qe);
      }
      return Re;
    }
    function ko(L, k) {
      var D = L == null ? 0 : L.length;
      return !!D && Fr(L, k, 0) > -1;
    }
    function Fa(L, k, D) {
      for (var Y = -1, ce = L == null ? 0 : L.length; ++Y < ce; )
        if (D(k, L[Y]))
          return !0;
      return !1;
    }
    function Ue(L, k) {
      for (var D = -1, Y = L == null ? 0 : L.length, ce = Array(Y); ++D < Y; )
        ce[D] = k(L[D], D, L);
      return ce;
    }
    function Un(L, k) {
      for (var D = -1, Y = k.length, ce = L.length; ++D < Y; )
        L[ce + D] = k[D];
      return L;
    }
    function Ba(L, k, D, Y) {
      var ce = -1, Re = L == null ? 0 : L.length;
      for (Y && Re && (D = L[++ce]); ++ce < Re; )
        D = k(D, L[ce], ce, L);
      return D;
    }
    function nx(L, k, D, Y) {
      var ce = L == null ? 0 : L.length;
      for (Y && ce && (D = L[--ce]); ce--; )
        D = k(D, L[ce], ce, L);
      return D;
    }
    function Wa(L, k) {
      for (var D = -1, Y = L == null ? 0 : L.length; ++D < Y; )
        if (k(L[D], D, L))
          return !0;
      return !1;
    }
    var rx = Ua("length");
    function ix(L) {
      return L.split("");
    }
    function ox(L) {
      return L.match(E) || [];
    }
    function df(L, k, D) {
      var Y;
      return D(L, function(ce, Re, Qe) {
        if (k(ce, Re, Qe))
          return Y = Re, !1;
      }), Y;
    }
    function jo(L, k, D, Y) {
      for (var ce = L.length, Re = D + (Y ? 1 : -1); Y ? Re-- : ++Re < ce; )
        if (k(L[Re], Re, L))
          return Re;
      return -1;
    }
    function Fr(L, k, D) {
      return k === k ? vx(L, k, D) : jo(L, hf, D);
    }
    function sx(L, k, D, Y) {
      for (var ce = D - 1, Re = L.length; ++ce < Re; )
        if (Y(L[ce], k))
          return ce;
      return -1;
    }
    function hf(L) {
      return L !== L;
    }
    function pf(L, k) {
      var D = L == null ? 0 : L.length;
      return D ? Ha(L, k) / D : Me;
    }
    function Ua(L) {
      return function(k) {
        return k == null ? r : k[L];
      };
    }
    function $a(L) {
      return function(k) {
        return L == null ? r : L[k];
      };
    }
    function mf(L, k, D, Y, ce) {
      return ce(L, function(Re, Qe, Ie) {
        D = Y ? (Y = !1, Re) : k(D, Re, Qe, Ie);
      }), D;
    }
    function ax(L, k) {
      var D = L.length;
      for (L.sort(k); D--; )
        L[D] = L[D].value;
      return L;
    }
    function Ha(L, k) {
      for (var D, Y = -1, ce = L.length; ++Y < ce; ) {
        var Re = k(L[Y]);
        Re !== r && (D = D === r ? Re : D + Re);
      }
      return D;
    }
    function za(L, k) {
      for (var D = -1, Y = Array(L); ++D < L; )
        Y[D] = k(D);
      return Y;
    }
    function lx(L, k) {
      return Ue(k, function(D) {
        return [D, L[D]];
      });
    }
    function gf(L) {
      return L && L.slice(0, wf(L) + 1).replace(kr, "");
    }
    function Mt(L) {
      return function(k) {
        return L(k);
      };
    }
    function Ga(L, k) {
      return Ue(k, function(D) {
        return L[D];
      });
    }
    function Vi(L, k) {
      return L.has(k);
    }
    function vf(L, k) {
      for (var D = -1, Y = L.length; ++D < Y && Fr(k, L[D], 0) > -1; )
        ;
      return D;
    }
    function yf(L, k) {
      for (var D = L.length; D-- && Fr(k, L[D], 0) > -1; )
        ;
      return D;
    }
    function cx(L, k) {
      for (var D = L.length, Y = 0; D--; )
        L[D] === k && ++Y;
      return Y;
    }
    var ux = $a(Ky), fx = $a(Yy);
    function dx(L) {
      return "\\" + Xy[L];
    }
    function hx(L, k) {
      return L == null ? r : L[k];
    }
    function Br(L) {
      return $y.test(L);
    }
    function px(L) {
      return Hy.test(L);
    }
    function mx(L) {
      for (var k, D = []; !(k = L.next()).done; )
        D.push(k.value);
      return D;
    }
    function Ka(L) {
      var k = -1, D = Array(L.size);
      return L.forEach(function(Y, ce) {
        D[++k] = [ce, Y];
      }), D;
    }
    function xf(L, k) {
      return function(D) {
        return L(k(D));
      };
    }
    function $n(L, k) {
      for (var D = -1, Y = L.length, ce = 0, Re = []; ++D < Y; ) {
        var Qe = L[D];
        (Qe === k || Qe === p) && (L[D] = p, Re[ce++] = D);
      }
      return Re;
    }
    function Fo(L) {
      var k = -1, D = Array(L.size);
      return L.forEach(function(Y) {
        D[++k] = Y;
      }), D;
    }
    function gx(L) {
      var k = -1, D = Array(L.size);
      return L.forEach(function(Y) {
        D[++k] = [Y, Y];
      }), D;
    }
    function vx(L, k, D) {
      for (var Y = D - 1, ce = L.length; ++Y < ce; )
        if (L[Y] === k)
          return Y;
      return -1;
    }
    function yx(L, k, D) {
      for (var Y = D + 1; Y--; )
        if (L[Y] === k)
          return Y;
      return Y;
    }
    function Wr(L) {
      return Br(L) ? wx(L) : rx(L);
    }
    function Qt(L) {
      return Br(L) ? bx(L) : ix(L);
    }
    function wf(L) {
      for (var k = L.length; k-- && Aa.test(L.charAt(k)); )
        ;
      return k;
    }
    var xx = $a(qy);
    function wx(L) {
      for (var k = Va.lastIndex = 0; Va.test(L); )
        ++k;
      return k;
    }
    function bx(L) {
      return L.match(Va) || [];
    }
    function Sx(L) {
      return L.match(Uy) || [];
    }
    var Cx = function L(k) {
      k = k == null ? at : Ur.defaults(at.Object(), k, Ur.pick(at, zy));
      var D = k.Array, Y = k.Date, ce = k.Error, Re = k.Function, Qe = k.Math, Ie = k.Object, Ya = k.RegExp, Tx = k.String, $t = k.TypeError, Bo = D.prototype, _x = Re.prototype, $r = Ie.prototype, Wo = k["__core-js_shared__"], Uo = _x.toString, Ne = $r.hasOwnProperty, Px = 0, bf = function() {
        var n = /[^.]+$/.exec(Wo && Wo.keys && Wo.keys.IE_PROTO || "");
        return n ? "Symbol(src)_1." + n : "";
      }(), $o = $r.toString, Ax = Uo.call(Ie), Ex = at._, Rx = Ya(
        "^" + Uo.call(Ne).replace(Di, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), Ho = rf ? k.Buffer : r, Hn = k.Symbol, zo = k.Uint8Array, Sf = Ho ? Ho.allocUnsafe : r, Go = xf(Ie.getPrototypeOf, Ie), Cf = Ie.create, Tf = $r.propertyIsEnumerable, Ko = Bo.splice, _f = Hn ? Hn.isConcatSpreadable : r, ki = Hn ? Hn.iterator : r, gr = Hn ? Hn.toStringTag : r, Yo = function() {
        try {
          var n = br(Ie, "defineProperty");
          return n({}, "", {}), n;
        } catch {
        }
      }(), Ox = k.clearTimeout !== at.clearTimeout && k.clearTimeout, Mx = Y && Y.now !== at.Date.now && Y.now, Lx = k.setTimeout !== at.setTimeout && k.setTimeout, qo = Qe.ceil, Xo = Qe.floor, qa = Ie.getOwnPropertySymbols, Nx = Ho ? Ho.isBuffer : r, Pf = k.isFinite, Dx = Bo.join, Ix = xf(Ie.keys, Ie), et = Qe.max, pt = Qe.min, Vx = Y.now, kx = k.parseInt, Af = Qe.random, jx = Bo.reverse, Xa = br(k, "DataView"), ji = br(k, "Map"), Za = br(k, "Promise"), Hr = br(k, "Set"), Fi = br(k, "WeakMap"), Bi = br(Ie, "create"), Zo = Fi && new Fi(), zr = {}, Fx = Sr(Xa), Bx = Sr(ji), Wx = Sr(Za), Ux = Sr(Hr), $x = Sr(Fi), Jo = Hn ? Hn.prototype : r, Wi = Jo ? Jo.valueOf : r, Ef = Jo ? Jo.toString : r;
      function y(n) {
        if (Ye(n) && !ue(n) && !(n instanceof Se)) {
          if (n instanceof Ht)
            return n;
          if (Ne.call(n, "__wrapped__"))
            return Rd(n);
        }
        return new Ht(n);
      }
      var Gr = /* @__PURE__ */ function() {
        function n() {
        }
        return function(i) {
          if (!He(i))
            return {};
          if (Cf)
            return Cf(i);
          n.prototype = i;
          var a = new n();
          return n.prototype = r, a;
        };
      }();
      function Qo() {
      }
      function Ht(n, i) {
        this.__wrapped__ = n, this.__actions__ = [], this.__chain__ = !!i, this.__index__ = 0, this.__values__ = r;
      }
      y.templateSettings = {
        /**
         * Used to detect `data` property values to be HTML-escaped.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        escape: _a,
        /**
         * Used to detect code to be evaluated.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        evaluate: Oo,
        /**
         * Used to detect `data` property values to inject.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        interpolate: Mo,
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
          _: y
        }
      }, y.prototype = Qo.prototype, y.prototype.constructor = y, Ht.prototype = Gr(Qo.prototype), Ht.prototype.constructor = Ht;
      function Se(n) {
        this.__wrapped__ = n, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Pe, this.__views__ = [];
      }
      function Hx() {
        var n = new Se(this.__wrapped__);
        return n.__actions__ = Ct(this.__actions__), n.__dir__ = this.__dir__, n.__filtered__ = this.__filtered__, n.__iteratees__ = Ct(this.__iteratees__), n.__takeCount__ = this.__takeCount__, n.__views__ = Ct(this.__views__), n;
      }
      function zx() {
        if (this.__filtered__) {
          var n = new Se(this);
          n.__dir__ = -1, n.__filtered__ = !0;
        } else
          n = this.clone(), n.__dir__ *= -1;
        return n;
      }
      function Gx() {
        var n = this.__wrapped__.value(), i = this.__dir__, a = ue(n), d = i < 0, m = a ? n.length : 0, x = iw(0, m, this.__views__), P = x.start, O = x.end, N = O - P, j = d ? O : P - 1, F = this.__iteratees__, B = F.length, z = 0, q = pt(N, this.__takeCount__);
        if (!a || !d && m == N && q == N)
          return Jf(n, this.__actions__);
        var re = [];
        e:
          for (; N-- && z < q; ) {
            j += i;
            for (var me = -1, ie = n[j]; ++me < B; ) {
              var ye = F[me], Te = ye.iteratee, Dt = ye.type, bt = Te(ie);
              if (Dt == _e)
                ie = bt;
              else if (!bt) {
                if (Dt == te)
                  continue e;
                break e;
              }
            }
            re[z++] = ie;
          }
        return re;
      }
      Se.prototype = Gr(Qo.prototype), Se.prototype.constructor = Se;
      function vr(n) {
        var i = -1, a = n == null ? 0 : n.length;
        for (this.clear(); ++i < a; ) {
          var d = n[i];
          this.set(d[0], d[1]);
        }
      }
      function Kx() {
        this.__data__ = Bi ? Bi(null) : {}, this.size = 0;
      }
      function Yx(n) {
        var i = this.has(n) && delete this.__data__[n];
        return this.size -= i ? 1 : 0, i;
      }
      function qx(n) {
        var i = this.__data__;
        if (Bi) {
          var a = i[n];
          return a === f ? r : a;
        }
        return Ne.call(i, n) ? i[n] : r;
      }
      function Xx(n) {
        var i = this.__data__;
        return Bi ? i[n] !== r : Ne.call(i, n);
      }
      function Zx(n, i) {
        var a = this.__data__;
        return this.size += this.has(n) ? 0 : 1, a[n] = Bi && i === r ? f : i, this;
      }
      vr.prototype.clear = Kx, vr.prototype.delete = Yx, vr.prototype.get = qx, vr.prototype.has = Xx, vr.prototype.set = Zx;
      function wn(n) {
        var i = -1, a = n == null ? 0 : n.length;
        for (this.clear(); ++i < a; ) {
          var d = n[i];
          this.set(d[0], d[1]);
        }
      }
      function Jx() {
        this.__data__ = [], this.size = 0;
      }
      function Qx(n) {
        var i = this.__data__, a = es(i, n);
        if (a < 0)
          return !1;
        var d = i.length - 1;
        return a == d ? i.pop() : Ko.call(i, a, 1), --this.size, !0;
      }
      function e0(n) {
        var i = this.__data__, a = es(i, n);
        return a < 0 ? r : i[a][1];
      }
      function t0(n) {
        return es(this.__data__, n) > -1;
      }
      function n0(n, i) {
        var a = this.__data__, d = es(a, n);
        return d < 0 ? (++this.size, a.push([n, i])) : a[d][1] = i, this;
      }
      wn.prototype.clear = Jx, wn.prototype.delete = Qx, wn.prototype.get = e0, wn.prototype.has = t0, wn.prototype.set = n0;
      function bn(n) {
        var i = -1, a = n == null ? 0 : n.length;
        for (this.clear(); ++i < a; ) {
          var d = n[i];
          this.set(d[0], d[1]);
        }
      }
      function r0() {
        this.size = 0, this.__data__ = {
          hash: new vr(),
          map: new (ji || wn)(),
          string: new vr()
        };
      }
      function i0(n) {
        var i = ds(this, n).delete(n);
        return this.size -= i ? 1 : 0, i;
      }
      function o0(n) {
        return ds(this, n).get(n);
      }
      function s0(n) {
        return ds(this, n).has(n);
      }
      function a0(n, i) {
        var a = ds(this, n), d = a.size;
        return a.set(n, i), this.size += a.size == d ? 0 : 1, this;
      }
      bn.prototype.clear = r0, bn.prototype.delete = i0, bn.prototype.get = o0, bn.prototype.has = s0, bn.prototype.set = a0;
      function yr(n) {
        var i = -1, a = n == null ? 0 : n.length;
        for (this.__data__ = new bn(); ++i < a; )
          this.add(n[i]);
      }
      function l0(n) {
        return this.__data__.set(n, f), this;
      }
      function c0(n) {
        return this.__data__.has(n);
      }
      yr.prototype.add = yr.prototype.push = l0, yr.prototype.has = c0;
      function en(n) {
        var i = this.__data__ = new wn(n);
        this.size = i.size;
      }
      function u0() {
        this.__data__ = new wn(), this.size = 0;
      }
      function f0(n) {
        var i = this.__data__, a = i.delete(n);
        return this.size = i.size, a;
      }
      function d0(n) {
        return this.__data__.get(n);
      }
      function h0(n) {
        return this.__data__.has(n);
      }
      function p0(n, i) {
        var a = this.__data__;
        if (a instanceof wn) {
          var d = a.__data__;
          if (!ji || d.length < s - 1)
            return d.push([n, i]), this.size = ++a.size, this;
          a = this.__data__ = new bn(d);
        }
        return a.set(n, i), this.size = a.size, this;
      }
      en.prototype.clear = u0, en.prototype.delete = f0, en.prototype.get = d0, en.prototype.has = h0, en.prototype.set = p0;
      function Rf(n, i) {
        var a = ue(n), d = !a && Cr(n), m = !a && !d && qn(n), x = !a && !d && !m && Xr(n), P = a || d || m || x, O = P ? za(n.length, Tx) : [], N = O.length;
        for (var j in n)
          (i || Ne.call(n, j)) && !(P && // Safari 9 has enumerable `arguments.length` in strict mode.
          (j == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          m && (j == "offset" || j == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          x && (j == "buffer" || j == "byteLength" || j == "byteOffset") || // Skip index properties.
          _n(j, N))) && O.push(j);
        return O;
      }
      function Of(n) {
        var i = n.length;
        return i ? n[ll(0, i - 1)] : r;
      }
      function m0(n, i) {
        return hs(Ct(n), xr(i, 0, n.length));
      }
      function g0(n) {
        return hs(Ct(n));
      }
      function Ja(n, i, a) {
        (a !== r && !tn(n[i], a) || a === r && !(i in n)) && Sn(n, i, a);
      }
      function Ui(n, i, a) {
        var d = n[i];
        (!(Ne.call(n, i) && tn(d, a)) || a === r && !(i in n)) && Sn(n, i, a);
      }
      function es(n, i) {
        for (var a = n.length; a--; )
          if (tn(n[a][0], i))
            return a;
        return -1;
      }
      function v0(n, i, a, d) {
        return zn(n, function(m, x, P) {
          i(d, m, a(m), P);
        }), d;
      }
      function Mf(n, i) {
        return n && un(i, rt(i), n);
      }
      function y0(n, i) {
        return n && un(i, _t(i), n);
      }
      function Sn(n, i, a) {
        i == "__proto__" && Yo ? Yo(n, i, {
          configurable: !0,
          enumerable: !0,
          value: a,
          writable: !0
        }) : n[i] = a;
      }
      function Qa(n, i) {
        for (var a = -1, d = i.length, m = D(d), x = n == null; ++a < d; )
          m[a] = x ? r : Nl(n, i[a]);
        return m;
      }
      function xr(n, i, a) {
        return n === n && (a !== r && (n = n <= a ? n : a), i !== r && (n = n >= i ? n : i)), n;
      }
      function zt(n, i, a, d, m, x) {
        var P, O = i & g, N = i & v, j = i & b;
        if (a && (P = m ? a(n, d, m, x) : a(n)), P !== r)
          return P;
        if (!He(n))
          return n;
        var F = ue(n);
        if (F) {
          if (P = sw(n), !O)
            return Ct(n, P);
        } else {
          var B = mt(n), z = B == we || B == tt;
          if (qn(n))
            return td(n, O);
          if (B == nt || B == yt || z && !m) {
            if (P = N || z ? {} : wd(n), !O)
              return N ? q0(n, y0(P, n)) : Y0(n, Mf(P, n));
          } else {
            if (!ke[B])
              return m ? n : {};
            P = aw(n, B, O);
          }
        }
        x || (x = new en());
        var q = x.get(n);
        if (q)
          return q;
        x.set(n, P), qd(n) ? n.forEach(function(ie) {
          P.add(zt(ie, i, a, ie, n, x));
        }) : Kd(n) && n.forEach(function(ie, ye) {
          P.set(ye, zt(ie, i, a, ye, n, x));
        });
        var re = j ? N ? xl : yl : N ? _t : rt, me = F ? r : re(n);
        return Ut(me || n, function(ie, ye) {
          me && (ye = ie, ie = n[ye]), Ui(P, ye, zt(ie, i, a, ye, n, x));
        }), P;
      }
      function x0(n) {
        var i = rt(n);
        return function(a) {
          return Lf(a, n, i);
        };
      }
      function Lf(n, i, a) {
        var d = a.length;
        if (n == null)
          return !d;
        for (n = Ie(n); d--; ) {
          var m = a[d], x = i[m], P = n[m];
          if (P === r && !(m in n) || !x(P))
            return !1;
        }
        return !0;
      }
      function Nf(n, i, a) {
        if (typeof n != "function")
          throw new $t(l);
        return qi(function() {
          n.apply(r, a);
        }, i);
      }
      function $i(n, i, a, d) {
        var m = -1, x = ko, P = !0, O = n.length, N = [], j = i.length;
        if (!O)
          return N;
        a && (i = Ue(i, Mt(a))), d ? (x = Fa, P = !1) : i.length >= s && (x = Vi, P = !1, i = new yr(i));
        e:
          for (; ++m < O; ) {
            var F = n[m], B = a == null ? F : a(F);
            if (F = d || F !== 0 ? F : 0, P && B === B) {
              for (var z = j; z--; )
                if (i[z] === B)
                  continue e;
              N.push(F);
            } else
              x(i, B, d) || N.push(F);
          }
        return N;
      }
      var zn = sd(cn), Df = sd(tl, !0);
      function w0(n, i) {
        var a = !0;
        return zn(n, function(d, m, x) {
          return a = !!i(d, m, x), a;
        }), a;
      }
      function ts(n, i, a) {
        for (var d = -1, m = n.length; ++d < m; ) {
          var x = n[d], P = i(x);
          if (P != null && (O === r ? P === P && !Nt(P) : a(P, O)))
            var O = P, N = x;
        }
        return N;
      }
      function b0(n, i, a, d) {
        var m = n.length;
        for (a = fe(a), a < 0 && (a = -a > m ? 0 : m + a), d = d === r || d > m ? m : fe(d), d < 0 && (d += m), d = a > d ? 0 : Zd(d); a < d; )
          n[a++] = i;
        return n;
      }
      function If(n, i) {
        var a = [];
        return zn(n, function(d, m, x) {
          i(d, m, x) && a.push(d);
        }), a;
      }
      function lt(n, i, a, d, m) {
        var x = -1, P = n.length;
        for (a || (a = cw), m || (m = []); ++x < P; ) {
          var O = n[x];
          i > 0 && a(O) ? i > 1 ? lt(O, i - 1, a, d, m) : Un(m, O) : d || (m[m.length] = O);
        }
        return m;
      }
      var el = ad(), Vf = ad(!0);
      function cn(n, i) {
        return n && el(n, i, rt);
      }
      function tl(n, i) {
        return n && Vf(n, i, rt);
      }
      function ns(n, i) {
        return Wn(i, function(a) {
          return Pn(n[a]);
        });
      }
      function wr(n, i) {
        i = Kn(i, n);
        for (var a = 0, d = i.length; n != null && a < d; )
          n = n[fn(i[a++])];
        return a && a == d ? n : r;
      }
      function kf(n, i, a) {
        var d = i(n);
        return ue(n) ? d : Un(d, a(n));
      }
      function xt(n) {
        return n == null ? n === r ? Ca : Et : gr && gr in Ie(n) ? rw(n) : gw(n);
      }
      function nl(n, i) {
        return n > i;
      }
      function S0(n, i) {
        return n != null && Ne.call(n, i);
      }
      function C0(n, i) {
        return n != null && i in Ie(n);
      }
      function T0(n, i, a) {
        return n >= pt(i, a) && n < et(i, a);
      }
      function rl(n, i, a) {
        for (var d = a ? Fa : ko, m = n[0].length, x = n.length, P = x, O = D(x), N = 1 / 0, j = []; P--; ) {
          var F = n[P];
          P && i && (F = Ue(F, Mt(i))), N = pt(F.length, N), O[P] = !a && (i || m >= 120 && F.length >= 120) ? new yr(P && F) : r;
        }
        F = n[0];
        var B = -1, z = O[0];
        e:
          for (; ++B < m && j.length < N; ) {
            var q = F[B], re = i ? i(q) : q;
            if (q = a || q !== 0 ? q : 0, !(z ? Vi(z, re) : d(j, re, a))) {
              for (P = x; --P; ) {
                var me = O[P];
                if (!(me ? Vi(me, re) : d(n[P], re, a)))
                  continue e;
              }
              z && z.push(re), j.push(q);
            }
          }
        return j;
      }
      function _0(n, i, a, d) {
        return cn(n, function(m, x, P) {
          i(d, a(m), x, P);
        }), d;
      }
      function Hi(n, i, a) {
        i = Kn(i, n), n = Td(n, i);
        var d = n == null ? n : n[fn(Kt(i))];
        return d == null ? r : Ot(d, n, a);
      }
      function jf(n) {
        return Ye(n) && xt(n) == yt;
      }
      function P0(n) {
        return Ye(n) && xt(n) == Jt;
      }
      function A0(n) {
        return Ye(n) && xt(n) == Ve;
      }
      function zi(n, i, a, d, m) {
        return n === i ? !0 : n == null || i == null || !Ye(n) && !Ye(i) ? n !== n && i !== i : E0(n, i, a, d, zi, m);
      }
      function E0(n, i, a, d, m, x) {
        var P = ue(n), O = ue(i), N = P ? ft : mt(n), j = O ? ft : mt(i);
        N = N == yt ? nt : N, j = j == yt ? nt : j;
        var F = N == nt, B = j == nt, z = N == j;
        if (z && qn(n)) {
          if (!qn(i))
            return !1;
          P = !0, F = !1;
        }
        if (z && !F)
          return x || (x = new en()), P || Xr(n) ? vd(n, i, a, d, m, x) : tw(n, i, N, a, d, m, x);
        if (!(a & T)) {
          var q = F && Ne.call(n, "__wrapped__"), re = B && Ne.call(i, "__wrapped__");
          if (q || re) {
            var me = q ? n.value() : n, ie = re ? i.value() : i;
            return x || (x = new en()), m(me, ie, a, d, x);
          }
        }
        return z ? (x || (x = new en()), nw(n, i, a, d, m, x)) : !1;
      }
      function R0(n) {
        return Ye(n) && mt(n) == We;
      }
      function il(n, i, a, d) {
        var m = a.length, x = m, P = !d;
        if (n == null)
          return !x;
        for (n = Ie(n); m--; ) {
          var O = a[m];
          if (P && O[2] ? O[1] !== n[O[0]] : !(O[0] in n))
            return !1;
        }
        for (; ++m < x; ) {
          O = a[m];
          var N = O[0], j = n[N], F = O[1];
          if (P && O[2]) {
            if (j === r && !(N in n))
              return !1;
          } else {
            var B = new en();
            if (d)
              var z = d(j, F, N, n, i, B);
            if (!(z === r ? zi(F, j, T | w, d, B) : z))
              return !1;
          }
        }
        return !0;
      }
      function Ff(n) {
        if (!He(n) || fw(n))
          return !1;
        var i = Pn(n) ? Rx : ve;
        return i.test(Sr(n));
      }
      function O0(n) {
        return Ye(n) && xt(n) == hr;
      }
      function M0(n) {
        return Ye(n) && mt(n) == Rt;
      }
      function L0(n) {
        return Ye(n) && xs(n.length) && !!Fe[xt(n)];
      }
      function Bf(n) {
        return typeof n == "function" ? n : n == null ? Pt : typeof n == "object" ? ue(n) ? $f(n[0], n[1]) : Uf(n) : lh(n);
      }
      function ol(n) {
        if (!Yi(n))
          return Ix(n);
        var i = [];
        for (var a in Ie(n))
          Ne.call(n, a) && a != "constructor" && i.push(a);
        return i;
      }
      function N0(n) {
        if (!He(n))
          return mw(n);
        var i = Yi(n), a = [];
        for (var d in n)
          d == "constructor" && (i || !Ne.call(n, d)) || a.push(d);
        return a;
      }
      function sl(n, i) {
        return n < i;
      }
      function Wf(n, i) {
        var a = -1, d = Tt(n) ? D(n.length) : [];
        return zn(n, function(m, x, P) {
          d[++a] = i(m, x, P);
        }), d;
      }
      function Uf(n) {
        var i = bl(n);
        return i.length == 1 && i[0][2] ? Sd(i[0][0], i[0][1]) : function(a) {
          return a === n || il(a, n, i);
        };
      }
      function $f(n, i) {
        return Cl(n) && bd(i) ? Sd(fn(n), i) : function(a) {
          var d = Nl(a, n);
          return d === r && d === i ? Dl(a, n) : zi(i, d, T | w);
        };
      }
      function rs(n, i, a, d, m) {
        n !== i && el(i, function(x, P) {
          if (m || (m = new en()), He(x))
            D0(n, i, P, a, rs, d, m);
          else {
            var O = d ? d(_l(n, P), x, P + "", n, i, m) : r;
            O === r && (O = x), Ja(n, P, O);
          }
        }, _t);
      }
      function D0(n, i, a, d, m, x, P) {
        var O = _l(n, a), N = _l(i, a), j = P.get(N);
        if (j) {
          Ja(n, a, j);
          return;
        }
        var F = x ? x(O, N, a + "", n, i, P) : r, B = F === r;
        if (B) {
          var z = ue(N), q = !z && qn(N), re = !z && !q && Xr(N);
          F = N, z || q || re ? ue(O) ? F = O : qe(O) ? F = Ct(O) : q ? (B = !1, F = td(N, !0)) : re ? (B = !1, F = nd(N, !0)) : F = [] : Xi(N) || Cr(N) ? (F = O, Cr(O) ? F = Jd(O) : (!He(O) || Pn(O)) && (F = wd(N))) : B = !1;
        }
        B && (P.set(N, F), m(F, N, d, x, P), P.delete(N)), Ja(n, a, F);
      }
      function Hf(n, i) {
        var a = n.length;
        if (a)
          return i += i < 0 ? a : 0, _n(i, a) ? n[i] : r;
      }
      function zf(n, i, a) {
        i.length ? i = Ue(i, function(x) {
          return ue(x) ? function(P) {
            return wr(P, x.length === 1 ? x[0] : x);
          } : x;
        }) : i = [Pt];
        var d = -1;
        i = Ue(i, Mt(Q()));
        var m = Wf(n, function(x, P, O) {
          var N = Ue(i, function(j) {
            return j(x);
          });
          return { criteria: N, index: ++d, value: x };
        });
        return ax(m, function(x, P) {
          return K0(x, P, a);
        });
      }
      function I0(n, i) {
        return Gf(n, i, function(a, d) {
          return Dl(n, d);
        });
      }
      function Gf(n, i, a) {
        for (var d = -1, m = i.length, x = {}; ++d < m; ) {
          var P = i[d], O = wr(n, P);
          a(O, P) && Gi(x, Kn(P, n), O);
        }
        return x;
      }
      function V0(n) {
        return function(i) {
          return wr(i, n);
        };
      }
      function al(n, i, a, d) {
        var m = d ? sx : Fr, x = -1, P = i.length, O = n;
        for (n === i && (i = Ct(i)), a && (O = Ue(n, Mt(a))); ++x < P; )
          for (var N = 0, j = i[x], F = a ? a(j) : j; (N = m(O, F, N, d)) > -1; )
            O !== n && Ko.call(O, N, 1), Ko.call(n, N, 1);
        return n;
      }
      function Kf(n, i) {
        for (var a = n ? i.length : 0, d = a - 1; a--; ) {
          var m = i[a];
          if (a == d || m !== x) {
            var x = m;
            _n(m) ? Ko.call(n, m, 1) : fl(n, m);
          }
        }
        return n;
      }
      function ll(n, i) {
        return n + Xo(Af() * (i - n + 1));
      }
      function k0(n, i, a, d) {
        for (var m = -1, x = et(qo((i - n) / (a || 1)), 0), P = D(x); x--; )
          P[d ? x : ++m] = n, n += a;
        return P;
      }
      function cl(n, i) {
        var a = "";
        if (!n || i < 1 || i > K)
          return a;
        do
          i % 2 && (a += n), i = Xo(i / 2), i && (n += n);
        while (i);
        return a;
      }
      function ge(n, i) {
        return Pl(Cd(n, i, Pt), n + "");
      }
      function j0(n) {
        return Of(Zr(n));
      }
      function F0(n, i) {
        var a = Zr(n);
        return hs(a, xr(i, 0, a.length));
      }
      function Gi(n, i, a, d) {
        if (!He(n))
          return n;
        i = Kn(i, n);
        for (var m = -1, x = i.length, P = x - 1, O = n; O != null && ++m < x; ) {
          var N = fn(i[m]), j = a;
          if (N === "__proto__" || N === "constructor" || N === "prototype")
            return n;
          if (m != P) {
            var F = O[N];
            j = d ? d(F, N, O) : r, j === r && (j = He(F) ? F : _n(i[m + 1]) ? [] : {});
          }
          Ui(O, N, j), O = O[N];
        }
        return n;
      }
      var Yf = Zo ? function(n, i) {
        return Zo.set(n, i), n;
      } : Pt, B0 = Yo ? function(n, i) {
        return Yo(n, "toString", {
          configurable: !0,
          enumerable: !1,
          value: Vl(i),
          writable: !0
        });
      } : Pt;
      function W0(n) {
        return hs(Zr(n));
      }
      function Gt(n, i, a) {
        var d = -1, m = n.length;
        i < 0 && (i = -i > m ? 0 : m + i), a = a > m ? m : a, a < 0 && (a += m), m = i > a ? 0 : a - i >>> 0, i >>>= 0;
        for (var x = D(m); ++d < m; )
          x[d] = n[d + i];
        return x;
      }
      function U0(n, i) {
        var a;
        return zn(n, function(d, m, x) {
          return a = i(d, m, x), !a;
        }), !!a;
      }
      function is(n, i, a) {
        var d = 0, m = n == null ? d : n.length;
        if (typeof i == "number" && i === i && m <= ln) {
          for (; d < m; ) {
            var x = d + m >>> 1, P = n[x];
            P !== null && !Nt(P) && (a ? P <= i : P < i) ? d = x + 1 : m = x;
          }
          return m;
        }
        return ul(n, i, Pt, a);
      }
      function ul(n, i, a, d) {
        var m = 0, x = n == null ? 0 : n.length;
        if (x === 0)
          return 0;
        i = a(i);
        for (var P = i !== i, O = i === null, N = Nt(i), j = i === r; m < x; ) {
          var F = Xo((m + x) / 2), B = a(n[F]), z = B !== r, q = B === null, re = B === B, me = Nt(B);
          if (P)
            var ie = d || re;
          else
            j ? ie = re && (d || z) : O ? ie = re && z && (d || !q) : N ? ie = re && z && !q && (d || !me) : q || me ? ie = !1 : ie = d ? B <= i : B < i;
          ie ? m = F + 1 : x = F;
        }
        return pt(x, an);
      }
      function qf(n, i) {
        for (var a = -1, d = n.length, m = 0, x = []; ++a < d; ) {
          var P = n[a], O = i ? i(P) : P;
          if (!a || !tn(O, N)) {
            var N = O;
            x[m++] = P === 0 ? 0 : P;
          }
        }
        return x;
      }
      function Xf(n) {
        return typeof n == "number" ? n : Nt(n) ? Me : +n;
      }
      function Lt(n) {
        if (typeof n == "string")
          return n;
        if (ue(n))
          return Ue(n, Lt) + "";
        if (Nt(n))
          return Ef ? Ef.call(n) : "";
        var i = n + "";
        return i == "0" && 1 / n == -X ? "-0" : i;
      }
      function Gn(n, i, a) {
        var d = -1, m = ko, x = n.length, P = !0, O = [], N = O;
        if (a)
          P = !1, m = Fa;
        else if (x >= s) {
          var j = i ? null : Q0(n);
          if (j)
            return Fo(j);
          P = !1, m = Vi, N = new yr();
        } else
          N = i ? [] : O;
        e:
          for (; ++d < x; ) {
            var F = n[d], B = i ? i(F) : F;
            if (F = a || F !== 0 ? F : 0, P && B === B) {
              for (var z = N.length; z--; )
                if (N[z] === B)
                  continue e;
              i && N.push(B), O.push(F);
            } else
              m(N, B, a) || (N !== O && N.push(B), O.push(F));
          }
        return O;
      }
      function fl(n, i) {
        return i = Kn(i, n), n = Td(n, i), n == null || delete n[fn(Kt(i))];
      }
      function Zf(n, i, a, d) {
        return Gi(n, i, a(wr(n, i)), d);
      }
      function os(n, i, a, d) {
        for (var m = n.length, x = d ? m : -1; (d ? x-- : ++x < m) && i(n[x], x, n); )
          ;
        return a ? Gt(n, d ? 0 : x, d ? x + 1 : m) : Gt(n, d ? x + 1 : 0, d ? m : x);
      }
      function Jf(n, i) {
        var a = n;
        return a instanceof Se && (a = a.value()), Ba(i, function(d, m) {
          return m.func.apply(m.thisArg, Un([d], m.args));
        }, a);
      }
      function dl(n, i, a) {
        var d = n.length;
        if (d < 2)
          return d ? Gn(n[0]) : [];
        for (var m = -1, x = D(d); ++m < d; )
          for (var P = n[m], O = -1; ++O < d; )
            O != m && (x[m] = $i(x[m] || P, n[O], i, a));
        return Gn(lt(x, 1), i, a);
      }
      function Qf(n, i, a) {
        for (var d = -1, m = n.length, x = i.length, P = {}; ++d < m; ) {
          var O = d < x ? i[d] : r;
          a(P, n[d], O);
        }
        return P;
      }
      function hl(n) {
        return qe(n) ? n : [];
      }
      function pl(n) {
        return typeof n == "function" ? n : Pt;
      }
      function Kn(n, i) {
        return ue(n) ? n : Cl(n, i) ? [n] : Ed(Oe(n));
      }
      var $0 = ge;
      function Yn(n, i, a) {
        var d = n.length;
        return a = a === r ? d : a, !i && a >= d ? n : Gt(n, i, a);
      }
      var ed = Ox || function(n) {
        return at.clearTimeout(n);
      };
      function td(n, i) {
        if (i)
          return n.slice();
        var a = n.length, d = Sf ? Sf(a) : new n.constructor(a);
        return n.copy(d), d;
      }
      function ml(n) {
        var i = new n.constructor(n.byteLength);
        return new zo(i).set(new zo(n)), i;
      }
      function H0(n, i) {
        var a = i ? ml(n.buffer) : n.buffer;
        return new n.constructor(a, n.byteOffset, n.byteLength);
      }
      function z0(n) {
        var i = new n.constructor(n.source, Ee.exec(n));
        return i.lastIndex = n.lastIndex, i;
      }
      function G0(n) {
        return Wi ? Ie(Wi.call(n)) : {};
      }
      function nd(n, i) {
        var a = i ? ml(n.buffer) : n.buffer;
        return new n.constructor(a, n.byteOffset, n.length);
      }
      function rd(n, i) {
        if (n !== i) {
          var a = n !== r, d = n === null, m = n === n, x = Nt(n), P = i !== r, O = i === null, N = i === i, j = Nt(i);
          if (!O && !j && !x && n > i || x && P && N && !O && !j || d && P && N || !a && N || !m)
            return 1;
          if (!d && !x && !j && n < i || j && a && m && !d && !x || O && a && m || !P && m || !N)
            return -1;
        }
        return 0;
      }
      function K0(n, i, a) {
        for (var d = -1, m = n.criteria, x = i.criteria, P = m.length, O = a.length; ++d < P; ) {
          var N = rd(m[d], x[d]);
          if (N) {
            if (d >= O)
              return N;
            var j = a[d];
            return N * (j == "desc" ? -1 : 1);
          }
        }
        return n.index - i.index;
      }
      function id(n, i, a, d) {
        for (var m = -1, x = n.length, P = a.length, O = -1, N = i.length, j = et(x - P, 0), F = D(N + j), B = !d; ++O < N; )
          F[O] = i[O];
        for (; ++m < P; )
          (B || m < x) && (F[a[m]] = n[m]);
        for (; j--; )
          F[O++] = n[m++];
        return F;
      }
      function od(n, i, a, d) {
        for (var m = -1, x = n.length, P = -1, O = a.length, N = -1, j = i.length, F = et(x - O, 0), B = D(F + j), z = !d; ++m < F; )
          B[m] = n[m];
        for (var q = m; ++N < j; )
          B[q + N] = i[N];
        for (; ++P < O; )
          (z || m < x) && (B[q + a[P]] = n[m++]);
        return B;
      }
      function Ct(n, i) {
        var a = -1, d = n.length;
        for (i || (i = D(d)); ++a < d; )
          i[a] = n[a];
        return i;
      }
      function un(n, i, a, d) {
        var m = !a;
        a || (a = {});
        for (var x = -1, P = i.length; ++x < P; ) {
          var O = i[x], N = d ? d(a[O], n[O], O, a, n) : r;
          N === r && (N = n[O]), m ? Sn(a, O, N) : Ui(a, O, N);
        }
        return a;
      }
      function Y0(n, i) {
        return un(n, Sl(n), i);
      }
      function q0(n, i) {
        return un(n, yd(n), i);
      }
      function ss(n, i) {
        return function(a, d) {
          var m = ue(a) ? ex : v0, x = i ? i() : {};
          return m(a, n, Q(d, 2), x);
        };
      }
      function Kr(n) {
        return ge(function(i, a) {
          var d = -1, m = a.length, x = m > 1 ? a[m - 1] : r, P = m > 2 ? a[2] : r;
          for (x = n.length > 3 && typeof x == "function" ? (m--, x) : r, P && wt(a[0], a[1], P) && (x = m < 3 ? r : x, m = 1), i = Ie(i); ++d < m; ) {
            var O = a[d];
            O && n(i, O, d, x);
          }
          return i;
        });
      }
      function sd(n, i) {
        return function(a, d) {
          if (a == null)
            return a;
          if (!Tt(a))
            return n(a, d);
          for (var m = a.length, x = i ? m : -1, P = Ie(a); (i ? x-- : ++x < m) && d(P[x], x, P) !== !1; )
            ;
          return a;
        };
      }
      function ad(n) {
        return function(i, a, d) {
          for (var m = -1, x = Ie(i), P = d(i), O = P.length; O--; ) {
            var N = P[n ? O : ++m];
            if (a(x[N], N, x) === !1)
              break;
          }
          return i;
        };
      }
      function X0(n, i, a) {
        var d = i & _, m = Ki(n);
        function x() {
          var P = this && this !== at && this instanceof x ? m : n;
          return P.apply(d ? a : this, arguments);
        }
        return x;
      }
      function ld(n) {
        return function(i) {
          i = Oe(i);
          var a = Br(i) ? Qt(i) : r, d = a ? a[0] : i.charAt(0), m = a ? Yn(a, 1).join("") : i.slice(1);
          return d[n]() + m;
        };
      }
      function Yr(n) {
        return function(i) {
          return Ba(sh(oh(i).replace(By, "")), n, "");
        };
      }
      function Ki(n) {
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
          var a = Gr(n.prototype), d = n.apply(a, i);
          return He(d) ? d : a;
        };
      }
      function Z0(n, i, a) {
        var d = Ki(n);
        function m() {
          for (var x = arguments.length, P = D(x), O = x, N = qr(m); O--; )
            P[O] = arguments[O];
          var j = x < 3 && P[0] !== N && P[x - 1] !== N ? [] : $n(P, N);
          if (x -= j.length, x < a)
            return hd(
              n,
              i,
              as,
              m.placeholder,
              r,
              P,
              j,
              r,
              r,
              a - x
            );
          var F = this && this !== at && this instanceof m ? d : n;
          return Ot(F, this, P);
        }
        return m;
      }
      function cd(n) {
        return function(i, a, d) {
          var m = Ie(i);
          if (!Tt(i)) {
            var x = Q(a, 3);
            i = rt(i), a = function(O) {
              return x(m[O], O, m);
            };
          }
          var P = n(i, a, d);
          return P > -1 ? m[x ? i[P] : P] : r;
        };
      }
      function ud(n) {
        return Tn(function(i) {
          var a = i.length, d = a, m = Ht.prototype.thru;
          for (n && i.reverse(); d--; ) {
            var x = i[d];
            if (typeof x != "function")
              throw new $t(l);
            if (m && !P && fs(x) == "wrapper")
              var P = new Ht([], !0);
          }
          for (d = P ? d : a; ++d < a; ) {
            x = i[d];
            var O = fs(x), N = O == "wrapper" ? wl(x) : r;
            N && Tl(N[0]) && N[1] == (U | M | V | $) && !N[4].length && N[9] == 1 ? P = P[fs(N[0])].apply(P, N[3]) : P = x.length == 1 && Tl(x) ? P[O]() : P.thru(x);
          }
          return function() {
            var j = arguments, F = j[0];
            if (P && j.length == 1 && ue(F))
              return P.plant(F).value();
            for (var B = 0, z = a ? i[B].apply(this, j) : F; ++B < a; )
              z = i[B].call(this, z);
            return z;
          };
        });
      }
      function as(n, i, a, d, m, x, P, O, N, j) {
        var F = i & U, B = i & _, z = i & A, q = i & (M | I), re = i & J, me = z ? r : Ki(n);
        function ie() {
          for (var ye = arguments.length, Te = D(ye), Dt = ye; Dt--; )
            Te[Dt] = arguments[Dt];
          if (q)
            var bt = qr(ie), It = cx(Te, bt);
          if (d && (Te = id(Te, d, m, q)), x && (Te = od(Te, x, P, q)), ye -= It, q && ye < j) {
            var Xe = $n(Te, bt);
            return hd(
              n,
              i,
              as,
              ie.placeholder,
              a,
              Te,
              Xe,
              O,
              N,
              j - ye
            );
          }
          var nn = B ? a : this, En = z ? nn[n] : n;
          return ye = Te.length, O ? Te = vw(Te, O) : re && ye > 1 && Te.reverse(), F && N < ye && (Te.length = N), this && this !== at && this instanceof ie && (En = me || Ki(En)), En.apply(nn, Te);
        }
        return ie;
      }
      function fd(n, i) {
        return function(a, d) {
          return _0(a, n, i(d), {});
        };
      }
      function ls(n, i) {
        return function(a, d) {
          var m;
          if (a === r && d === r)
            return i;
          if (a !== r && (m = a), d !== r) {
            if (m === r)
              return d;
            typeof a == "string" || typeof d == "string" ? (a = Lt(a), d = Lt(d)) : (a = Xf(a), d = Xf(d)), m = n(a, d);
          }
          return m;
        };
      }
      function gl(n) {
        return Tn(function(i) {
          return i = Ue(i, Mt(Q())), ge(function(a) {
            var d = this;
            return n(i, function(m) {
              return Ot(m, d, a);
            });
          });
        });
      }
      function cs(n, i) {
        i = i === r ? " " : Lt(i);
        var a = i.length;
        if (a < 2)
          return a ? cl(i, n) : i;
        var d = cl(i, qo(n / Wr(i)));
        return Br(i) ? Yn(Qt(d), 0, n).join("") : d.slice(0, n);
      }
      function J0(n, i, a, d) {
        var m = i & _, x = Ki(n);
        function P() {
          for (var O = -1, N = arguments.length, j = -1, F = d.length, B = D(F + N), z = this && this !== at && this instanceof P ? x : n; ++j < F; )
            B[j] = d[j];
          for (; N--; )
            B[j++] = arguments[++O];
          return Ot(z, m ? a : this, B);
        }
        return P;
      }
      function dd(n) {
        return function(i, a, d) {
          return d && typeof d != "number" && wt(i, a, d) && (a = d = r), i = An(i), a === r ? (a = i, i = 0) : a = An(a), d = d === r ? i < a ? 1 : -1 : An(d), k0(i, a, d, n);
        };
      }
      function us(n) {
        return function(i, a) {
          return typeof i == "string" && typeof a == "string" || (i = Yt(i), a = Yt(a)), n(i, a);
        };
      }
      function hd(n, i, a, d, m, x, P, O, N, j) {
        var F = i & M, B = F ? P : r, z = F ? r : P, q = F ? x : r, re = F ? r : x;
        i |= F ? V : H, i &= ~(F ? H : V), i & R || (i &= ~(_ | A));
        var me = [
          n,
          i,
          m,
          q,
          B,
          re,
          z,
          O,
          N,
          j
        ], ie = a.apply(r, me);
        return Tl(n) && _d(ie, me), ie.placeholder = d, Pd(ie, n, i);
      }
      function vl(n) {
        var i = Qe[n];
        return function(a, d) {
          if (a = Yt(a), d = d == null ? 0 : pt(fe(d), 292), d && Pf(a)) {
            var m = (Oe(a) + "e").split("e"), x = i(m[0] + "e" + (+m[1] + d));
            return m = (Oe(x) + "e").split("e"), +(m[0] + "e" + (+m[1] - d));
          }
          return i(a);
        };
      }
      var Q0 = Hr && 1 / Fo(new Hr([, -0]))[1] == X ? function(n) {
        return new Hr(n);
      } : Fl;
      function pd(n) {
        return function(i) {
          var a = mt(i);
          return a == We ? Ka(i) : a == Rt ? gx(i) : lx(i, n(i));
        };
      }
      function Cn(n, i, a, d, m, x, P, O) {
        var N = i & A;
        if (!N && typeof n != "function")
          throw new $t(l);
        var j = d ? d.length : 0;
        if (j || (i &= ~(V | H), d = m = r), P = P === r ? P : et(fe(P), 0), O = O === r ? O : fe(O), j -= m ? m.length : 0, i & H) {
          var F = d, B = m;
          d = m = r;
        }
        var z = N ? r : wl(n), q = [
          n,
          i,
          a,
          d,
          m,
          F,
          B,
          x,
          P,
          O
        ];
        if (z && pw(q, z), n = q[0], i = q[1], a = q[2], d = q[3], m = q[4], O = q[9] = q[9] === r ? N ? 0 : n.length : et(q[9] - j, 0), !O && i & (M | I) && (i &= ~(M | I)), !i || i == _)
          var re = X0(n, i, a);
        else
          i == M || i == I ? re = Z0(n, i, O) : (i == V || i == (_ | V)) && !m.length ? re = J0(n, i, a, d) : re = as.apply(r, q);
        var me = z ? Yf : _d;
        return Pd(me(re, q), n, i);
      }
      function md(n, i, a, d) {
        return n === r || tn(n, $r[a]) && !Ne.call(d, a) ? i : n;
      }
      function gd(n, i, a, d, m, x) {
        return He(n) && He(i) && (x.set(i, n), rs(n, i, r, gd, x), x.delete(i)), n;
      }
      function ew(n) {
        return Xi(n) ? r : n;
      }
      function vd(n, i, a, d, m, x) {
        var P = a & T, O = n.length, N = i.length;
        if (O != N && !(P && N > O))
          return !1;
        var j = x.get(n), F = x.get(i);
        if (j && F)
          return j == i && F == n;
        var B = -1, z = !0, q = a & w ? new yr() : r;
        for (x.set(n, i), x.set(i, n); ++B < O; ) {
          var re = n[B], me = i[B];
          if (d)
            var ie = P ? d(me, re, B, i, n, x) : d(re, me, B, n, i, x);
          if (ie !== r) {
            if (ie)
              continue;
            z = !1;
            break;
          }
          if (q) {
            if (!Wa(i, function(ye, Te) {
              if (!Vi(q, Te) && (re === ye || m(re, ye, a, d, x)))
                return q.push(Te);
            })) {
              z = !1;
              break;
            }
          } else if (!(re === me || m(re, me, a, d, x))) {
            z = !1;
            break;
          }
        }
        return x.delete(n), x.delete(i), z;
      }
      function tw(n, i, a, d, m, x, P) {
        switch (a) {
          case Fn:
            if (n.byteLength != i.byteLength || n.byteOffset != i.byteOffset)
              return !1;
            n = n.buffer, i = i.buffer;
          case Jt:
            return !(n.byteLength != i.byteLength || !x(new zo(n), new zo(i)));
          case xe:
          case Ve:
          case dt:
            return tn(+n, +i);
          case Ce:
            return n.name == i.name && n.message == i.message;
          case hr:
          case yn:
            return n == i + "";
          case We:
            var O = Ka;
          case Rt:
            var N = d & T;
            if (O || (O = Fo), n.size != i.size && !N)
              return !1;
            var j = P.get(n);
            if (j)
              return j == i;
            d |= w, P.set(n, i);
            var F = vd(O(n), O(i), d, m, x, P);
            return P.delete(n), F;
          case Nr:
            if (Wi)
              return Wi.call(n) == Wi.call(i);
        }
        return !1;
      }
      function nw(n, i, a, d, m, x) {
        var P = a & T, O = yl(n), N = O.length, j = yl(i), F = j.length;
        if (N != F && !P)
          return !1;
        for (var B = N; B--; ) {
          var z = O[B];
          if (!(P ? z in i : Ne.call(i, z)))
            return !1;
        }
        var q = x.get(n), re = x.get(i);
        if (q && re)
          return q == i && re == n;
        var me = !0;
        x.set(n, i), x.set(i, n);
        for (var ie = P; ++B < N; ) {
          z = O[B];
          var ye = n[z], Te = i[z];
          if (d)
            var Dt = P ? d(Te, ye, z, i, n, x) : d(ye, Te, z, n, i, x);
          if (!(Dt === r ? ye === Te || m(ye, Te, a, d, x) : Dt)) {
            me = !1;
            break;
          }
          ie || (ie = z == "constructor");
        }
        if (me && !ie) {
          var bt = n.constructor, It = i.constructor;
          bt != It && "constructor" in n && "constructor" in i && !(typeof bt == "function" && bt instanceof bt && typeof It == "function" && It instanceof It) && (me = !1);
        }
        return x.delete(n), x.delete(i), me;
      }
      function Tn(n) {
        return Pl(Cd(n, r, Ld), n + "");
      }
      function yl(n) {
        return kf(n, rt, Sl);
      }
      function xl(n) {
        return kf(n, _t, yd);
      }
      var wl = Zo ? function(n) {
        return Zo.get(n);
      } : Fl;
      function fs(n) {
        for (var i = n.name + "", a = zr[i], d = Ne.call(zr, i) ? a.length : 0; d--; ) {
          var m = a[d], x = m.func;
          if (x == null || x == n)
            return m.name;
        }
        return i;
      }
      function qr(n) {
        var i = Ne.call(y, "placeholder") ? y : n;
        return i.placeholder;
      }
      function Q() {
        var n = y.iteratee || kl;
        return n = n === kl ? Bf : n, arguments.length ? n(arguments[0], arguments[1]) : n;
      }
      function ds(n, i) {
        var a = n.__data__;
        return uw(i) ? a[typeof i == "string" ? "string" : "hash"] : a.map;
      }
      function bl(n) {
        for (var i = rt(n), a = i.length; a--; ) {
          var d = i[a], m = n[d];
          i[a] = [d, m, bd(m)];
        }
        return i;
      }
      function br(n, i) {
        var a = hx(n, i);
        return Ff(a) ? a : r;
      }
      function rw(n) {
        var i = Ne.call(n, gr), a = n[gr];
        try {
          n[gr] = r;
          var d = !0;
        } catch {
        }
        var m = $o.call(n);
        return d && (i ? n[gr] = a : delete n[gr]), m;
      }
      var Sl = qa ? function(n) {
        return n == null ? [] : (n = Ie(n), Wn(qa(n), function(i) {
          return Tf.call(n, i);
        }));
      } : Bl, yd = qa ? function(n) {
        for (var i = []; n; )
          Un(i, Sl(n)), n = Go(n);
        return i;
      } : Bl, mt = xt;
      (Xa && mt(new Xa(new ArrayBuffer(1))) != Fn || ji && mt(new ji()) != We || Za && mt(Za.resolve()) != dr || Hr && mt(new Hr()) != Rt || Fi && mt(new Fi()) != jn) && (mt = function(n) {
        var i = xt(n), a = i == nt ? n.constructor : r, d = a ? Sr(a) : "";
        if (d)
          switch (d) {
            case Fx:
              return Fn;
            case Bx:
              return We;
            case Wx:
              return dr;
            case Ux:
              return Rt;
            case $x:
              return jn;
          }
        return i;
      });
      function iw(n, i, a) {
        for (var d = -1, m = a.length; ++d < m; ) {
          var x = a[d], P = x.size;
          switch (x.type) {
            case "drop":
              n += P;
              break;
            case "dropRight":
              i -= P;
              break;
            case "take":
              i = pt(i, n + P);
              break;
            case "takeRight":
              n = et(n, i - P);
              break;
          }
        }
        return { start: n, end: i };
      }
      function ow(n) {
        var i = n.match(Ra);
        return i ? i[1].split(Oa) : [];
      }
      function xd(n, i, a) {
        i = Kn(i, n);
        for (var d = -1, m = i.length, x = !1; ++d < m; ) {
          var P = fn(i[d]);
          if (!(x = n != null && a(n, P)))
            break;
          n = n[P];
        }
        return x || ++d != m ? x : (m = n == null ? 0 : n.length, !!m && xs(m) && _n(P, m) && (ue(n) || Cr(n)));
      }
      function sw(n) {
        var i = n.length, a = new n.constructor(i);
        return i && typeof n[0] == "string" && Ne.call(n, "index") && (a.index = n.index, a.input = n.input), a;
      }
      function wd(n) {
        return typeof n.constructor == "function" && !Yi(n) ? Gr(Go(n)) : {};
      }
      function aw(n, i, a) {
        var d = n.constructor;
        switch (i) {
          case Jt:
            return ml(n);
          case xe:
          case Ve:
            return new d(+n);
          case Fn:
            return H0(n, a);
          case Dr:
          case Ir:
          case pr:
          case Pi:
          case Ai:
          case Ei:
          case Ri:
          case Oi:
          case Mi:
            return nd(n, a);
          case We:
            return new d();
          case dt:
          case yn:
            return new d(n);
          case hr:
            return z0(n);
          case Rt:
            return new d();
          case Nr:
            return G0(n);
        }
      }
      function lw(n, i) {
        var a = i.length;
        if (!a)
          return n;
        var d = a - 1;
        return i[d] = (a > 1 ? "& " : "") + i[d], i = i.join(a > 2 ? ", " : " "), n.replace(Ea, `{
/* [wrapped with ` + i + `] */
`);
      }
      function cw(n) {
        return ue(n) || Cr(n) || !!(_f && n && n[_f]);
      }
      function _n(n, i) {
        var a = typeof n;
        return i = i ?? K, !!i && (a == "number" || a != "symbol" && $e.test(n)) && n > -1 && n % 1 == 0 && n < i;
      }
      function wt(n, i, a) {
        if (!He(a))
          return !1;
        var d = typeof i;
        return (d == "number" ? Tt(a) && _n(i, a.length) : d == "string" && i in a) ? tn(a[i], n) : !1;
      }
      function Cl(n, i) {
        if (ue(n))
          return !1;
        var a = typeof n;
        return a == "number" || a == "symbol" || a == "boolean" || n == null || Nt(n) ? !0 : No.test(n) || !Lo.test(n) || i != null && n in Ie(i);
      }
      function uw(n) {
        var i = typeof n;
        return i == "string" || i == "number" || i == "symbol" || i == "boolean" ? n !== "__proto__" : n === null;
      }
      function Tl(n) {
        var i = fs(n), a = y[i];
        if (typeof a != "function" || !(i in Se.prototype))
          return !1;
        if (n === a)
          return !0;
        var d = wl(a);
        return !!d && n === d[0];
      }
      function fw(n) {
        return !!bf && bf in n;
      }
      var dw = Wo ? Pn : Wl;
      function Yi(n) {
        var i = n && n.constructor, a = typeof i == "function" && i.prototype || $r;
        return n === a;
      }
      function bd(n) {
        return n === n && !He(n);
      }
      function Sd(n, i) {
        return function(a) {
          return a == null ? !1 : a[n] === i && (i !== r || n in Ie(a));
        };
      }
      function hw(n) {
        var i = vs(n, function(d) {
          return a.size === h && a.clear(), d;
        }), a = i.cache;
        return i;
      }
      function pw(n, i) {
        var a = n[1], d = i[1], m = a | d, x = m < (_ | A | U), P = d == U && a == M || d == U && a == $ && n[7].length <= i[8] || d == (U | $) && i[7].length <= i[8] && a == M;
        if (!(x || P))
          return n;
        d & _ && (n[2] = i[2], m |= a & _ ? 0 : R);
        var O = i[3];
        if (O) {
          var N = n[3];
          n[3] = N ? id(N, O, i[4]) : O, n[4] = N ? $n(n[3], p) : i[4];
        }
        return O = i[5], O && (N = n[5], n[5] = N ? od(N, O, i[6]) : O, n[6] = N ? $n(n[5], p) : i[6]), O = i[7], O && (n[7] = O), d & U && (n[8] = n[8] == null ? i[8] : pt(n[8], i[8])), n[9] == null && (n[9] = i[9]), n[0] = i[0], n[1] = m, n;
      }
      function mw(n) {
        var i = [];
        if (n != null)
          for (var a in Ie(n))
            i.push(a);
        return i;
      }
      function gw(n) {
        return $o.call(n);
      }
      function Cd(n, i, a) {
        return i = et(i === r ? n.length - 1 : i, 0), function() {
          for (var d = arguments, m = -1, x = et(d.length - i, 0), P = D(x); ++m < x; )
            P[m] = d[i + m];
          m = -1;
          for (var O = D(i + 1); ++m < i; )
            O[m] = d[m];
          return O[i] = a(P), Ot(n, this, O);
        };
      }
      function Td(n, i) {
        return i.length < 2 ? n : wr(n, Gt(i, 0, -1));
      }
      function vw(n, i) {
        for (var a = n.length, d = pt(i.length, a), m = Ct(n); d--; ) {
          var x = i[d];
          n[d] = _n(x, a) ? m[x] : r;
        }
        return n;
      }
      function _l(n, i) {
        if (!(i === "constructor" && typeof n[i] == "function") && i != "__proto__")
          return n[i];
      }
      var _d = Ad(Yf), qi = Lx || function(n, i) {
        return at.setTimeout(n, i);
      }, Pl = Ad(B0);
      function Pd(n, i, a) {
        var d = i + "";
        return Pl(n, lw(d, yw(ow(d), a)));
      }
      function Ad(n) {
        var i = 0, a = 0;
        return function() {
          var d = Vx(), m = ae - (d - a);
          if (a = d, m > 0) {
            if (++i >= Z)
              return arguments[0];
          } else
            i = 0;
          return n.apply(r, arguments);
        };
      }
      function hs(n, i) {
        var a = -1, d = n.length, m = d - 1;
        for (i = i === r ? d : i; ++a < i; ) {
          var x = ll(a, m), P = n[x];
          n[x] = n[a], n[a] = P;
        }
        return n.length = i, n;
      }
      var Ed = hw(function(n) {
        var i = [];
        return n.charCodeAt(0) === 46 && i.push(""), n.replace(Pa, function(a, d, m, x) {
          i.push(m ? x.replace(G, "$1") : d || a);
        }), i;
      });
      function fn(n) {
        if (typeof n == "string" || Nt(n))
          return n;
        var i = n + "";
        return i == "0" && 1 / n == -X ? "-0" : i;
      }
      function Sr(n) {
        if (n != null) {
          try {
            return Uo.call(n);
          } catch {
          }
          try {
            return n + "";
          } catch {
          }
        }
        return "";
      }
      function yw(n, i) {
        return Ut(Ft, function(a) {
          var d = "_." + a[0];
          i & a[1] && !ko(n, d) && n.push(d);
        }), n.sort();
      }
      function Rd(n) {
        if (n instanceof Se)
          return n.clone();
        var i = new Ht(n.__wrapped__, n.__chain__);
        return i.__actions__ = Ct(n.__actions__), i.__index__ = n.__index__, i.__values__ = n.__values__, i;
      }
      function xw(n, i, a) {
        (a ? wt(n, i, a) : i === r) ? i = 1 : i = et(fe(i), 0);
        var d = n == null ? 0 : n.length;
        if (!d || i < 1)
          return [];
        for (var m = 0, x = 0, P = D(qo(d / i)); m < d; )
          P[x++] = Gt(n, m, m += i);
        return P;
      }
      function ww(n) {
        for (var i = -1, a = n == null ? 0 : n.length, d = 0, m = []; ++i < a; ) {
          var x = n[i];
          x && (m[d++] = x);
        }
        return m;
      }
      function bw() {
        var n = arguments.length;
        if (!n)
          return [];
        for (var i = D(n - 1), a = arguments[0], d = n; d--; )
          i[d - 1] = arguments[d];
        return Un(ue(a) ? Ct(a) : [a], lt(i, 1));
      }
      var Sw = ge(function(n, i) {
        return qe(n) ? $i(n, lt(i, 1, qe, !0)) : [];
      }), Cw = ge(function(n, i) {
        var a = Kt(i);
        return qe(a) && (a = r), qe(n) ? $i(n, lt(i, 1, qe, !0), Q(a, 2)) : [];
      }), Tw = ge(function(n, i) {
        var a = Kt(i);
        return qe(a) && (a = r), qe(n) ? $i(n, lt(i, 1, qe, !0), r, a) : [];
      });
      function _w(n, i, a) {
        var d = n == null ? 0 : n.length;
        return d ? (i = a || i === r ? 1 : fe(i), Gt(n, i < 0 ? 0 : i, d)) : [];
      }
      function Pw(n, i, a) {
        var d = n == null ? 0 : n.length;
        return d ? (i = a || i === r ? 1 : fe(i), i = d - i, Gt(n, 0, i < 0 ? 0 : i)) : [];
      }
      function Aw(n, i) {
        return n && n.length ? os(n, Q(i, 3), !0, !0) : [];
      }
      function Ew(n, i) {
        return n && n.length ? os(n, Q(i, 3), !0) : [];
      }
      function Rw(n, i, a, d) {
        var m = n == null ? 0 : n.length;
        return m ? (a && typeof a != "number" && wt(n, i, a) && (a = 0, d = m), b0(n, i, a, d)) : [];
      }
      function Od(n, i, a) {
        var d = n == null ? 0 : n.length;
        if (!d)
          return -1;
        var m = a == null ? 0 : fe(a);
        return m < 0 && (m = et(d + m, 0)), jo(n, Q(i, 3), m);
      }
      function Md(n, i, a) {
        var d = n == null ? 0 : n.length;
        if (!d)
          return -1;
        var m = d - 1;
        return a !== r && (m = fe(a), m = a < 0 ? et(d + m, 0) : pt(m, d - 1)), jo(n, Q(i, 3), m, !0);
      }
      function Ld(n) {
        var i = n == null ? 0 : n.length;
        return i ? lt(n, 1) : [];
      }
      function Ow(n) {
        var i = n == null ? 0 : n.length;
        return i ? lt(n, X) : [];
      }
      function Mw(n, i) {
        var a = n == null ? 0 : n.length;
        return a ? (i = i === r ? 1 : fe(i), lt(n, i)) : [];
      }
      function Lw(n) {
        for (var i = -1, a = n == null ? 0 : n.length, d = {}; ++i < a; ) {
          var m = n[i];
          d[m[0]] = m[1];
        }
        return d;
      }
      function Nd(n) {
        return n && n.length ? n[0] : r;
      }
      function Nw(n, i, a) {
        var d = n == null ? 0 : n.length;
        if (!d)
          return -1;
        var m = a == null ? 0 : fe(a);
        return m < 0 && (m = et(d + m, 0)), Fr(n, i, m);
      }
      function Dw(n) {
        var i = n == null ? 0 : n.length;
        return i ? Gt(n, 0, -1) : [];
      }
      var Iw = ge(function(n) {
        var i = Ue(n, hl);
        return i.length && i[0] === n[0] ? rl(i) : [];
      }), Vw = ge(function(n) {
        var i = Kt(n), a = Ue(n, hl);
        return i === Kt(a) ? i = r : a.pop(), a.length && a[0] === n[0] ? rl(a, Q(i, 2)) : [];
      }), kw = ge(function(n) {
        var i = Kt(n), a = Ue(n, hl);
        return i = typeof i == "function" ? i : r, i && a.pop(), a.length && a[0] === n[0] ? rl(a, r, i) : [];
      });
      function jw(n, i) {
        return n == null ? "" : Dx.call(n, i);
      }
      function Kt(n) {
        var i = n == null ? 0 : n.length;
        return i ? n[i - 1] : r;
      }
      function Fw(n, i, a) {
        var d = n == null ? 0 : n.length;
        if (!d)
          return -1;
        var m = d;
        return a !== r && (m = fe(a), m = m < 0 ? et(d + m, 0) : pt(m, d - 1)), i === i ? yx(n, i, m) : jo(n, hf, m, !0);
      }
      function Bw(n, i) {
        return n && n.length ? Hf(n, fe(i)) : r;
      }
      var Ww = ge(Dd);
      function Dd(n, i) {
        return n && n.length && i && i.length ? al(n, i) : n;
      }
      function Uw(n, i, a) {
        return n && n.length && i && i.length ? al(n, i, Q(a, 2)) : n;
      }
      function $w(n, i, a) {
        return n && n.length && i && i.length ? al(n, i, r, a) : n;
      }
      var Hw = Tn(function(n, i) {
        var a = n == null ? 0 : n.length, d = Qa(n, i);
        return Kf(n, Ue(i, function(m) {
          return _n(m, a) ? +m : m;
        }).sort(rd)), d;
      });
      function zw(n, i) {
        var a = [];
        if (!(n && n.length))
          return a;
        var d = -1, m = [], x = n.length;
        for (i = Q(i, 3); ++d < x; ) {
          var P = n[d];
          i(P, d, n) && (a.push(P), m.push(d));
        }
        return Kf(n, m), a;
      }
      function Al(n) {
        return n == null ? n : jx.call(n);
      }
      function Gw(n, i, a) {
        var d = n == null ? 0 : n.length;
        return d ? (a && typeof a != "number" && wt(n, i, a) ? (i = 0, a = d) : (i = i == null ? 0 : fe(i), a = a === r ? d : fe(a)), Gt(n, i, a)) : [];
      }
      function Kw(n, i) {
        return is(n, i);
      }
      function Yw(n, i, a) {
        return ul(n, i, Q(a, 2));
      }
      function qw(n, i) {
        var a = n == null ? 0 : n.length;
        if (a) {
          var d = is(n, i);
          if (d < a && tn(n[d], i))
            return d;
        }
        return -1;
      }
      function Xw(n, i) {
        return is(n, i, !0);
      }
      function Zw(n, i, a) {
        return ul(n, i, Q(a, 2), !0);
      }
      function Jw(n, i) {
        var a = n == null ? 0 : n.length;
        if (a) {
          var d = is(n, i, !0) - 1;
          if (tn(n[d], i))
            return d;
        }
        return -1;
      }
      function Qw(n) {
        return n && n.length ? qf(n) : [];
      }
      function eb(n, i) {
        return n && n.length ? qf(n, Q(i, 2)) : [];
      }
      function tb(n) {
        var i = n == null ? 0 : n.length;
        return i ? Gt(n, 1, i) : [];
      }
      function nb(n, i, a) {
        return n && n.length ? (i = a || i === r ? 1 : fe(i), Gt(n, 0, i < 0 ? 0 : i)) : [];
      }
      function rb(n, i, a) {
        var d = n == null ? 0 : n.length;
        return d ? (i = a || i === r ? 1 : fe(i), i = d - i, Gt(n, i < 0 ? 0 : i, d)) : [];
      }
      function ib(n, i) {
        return n && n.length ? os(n, Q(i, 3), !1, !0) : [];
      }
      function ob(n, i) {
        return n && n.length ? os(n, Q(i, 3)) : [];
      }
      var sb = ge(function(n) {
        return Gn(lt(n, 1, qe, !0));
      }), ab = ge(function(n) {
        var i = Kt(n);
        return qe(i) && (i = r), Gn(lt(n, 1, qe, !0), Q(i, 2));
      }), lb = ge(function(n) {
        var i = Kt(n);
        return i = typeof i == "function" ? i : r, Gn(lt(n, 1, qe, !0), r, i);
      });
      function cb(n) {
        return n && n.length ? Gn(n) : [];
      }
      function ub(n, i) {
        return n && n.length ? Gn(n, Q(i, 2)) : [];
      }
      function fb(n, i) {
        return i = typeof i == "function" ? i : r, n && n.length ? Gn(n, r, i) : [];
      }
      function El(n) {
        if (!(n && n.length))
          return [];
        var i = 0;
        return n = Wn(n, function(a) {
          if (qe(a))
            return i = et(a.length, i), !0;
        }), za(i, function(a) {
          return Ue(n, Ua(a));
        });
      }
      function Id(n, i) {
        if (!(n && n.length))
          return [];
        var a = El(n);
        return i == null ? a : Ue(a, function(d) {
          return Ot(i, r, d);
        });
      }
      var db = ge(function(n, i) {
        return qe(n) ? $i(n, i) : [];
      }), hb = ge(function(n) {
        return dl(Wn(n, qe));
      }), pb = ge(function(n) {
        var i = Kt(n);
        return qe(i) && (i = r), dl(Wn(n, qe), Q(i, 2));
      }), mb = ge(function(n) {
        var i = Kt(n);
        return i = typeof i == "function" ? i : r, dl(Wn(n, qe), r, i);
      }), gb = ge(El);
      function vb(n, i) {
        return Qf(n || [], i || [], Ui);
      }
      function yb(n, i) {
        return Qf(n || [], i || [], Gi);
      }
      var xb = ge(function(n) {
        var i = n.length, a = i > 1 ? n[i - 1] : r;
        return a = typeof a == "function" ? (n.pop(), a) : r, Id(n, a);
      });
      function Vd(n) {
        var i = y(n);
        return i.__chain__ = !0, i;
      }
      function wb(n, i) {
        return i(n), n;
      }
      function ps(n, i) {
        return i(n);
      }
      var bb = Tn(function(n) {
        var i = n.length, a = i ? n[0] : 0, d = this.__wrapped__, m = function(x) {
          return Qa(x, n);
        };
        return i > 1 || this.__actions__.length || !(d instanceof Se) || !_n(a) ? this.thru(m) : (d = d.slice(a, +a + (i ? 1 : 0)), d.__actions__.push({
          func: ps,
          args: [m],
          thisArg: r
        }), new Ht(d, this.__chain__).thru(function(x) {
          return i && !x.length && x.push(r), x;
        }));
      });
      function Sb() {
        return Vd(this);
      }
      function Cb() {
        return new Ht(this.value(), this.__chain__);
      }
      function Tb() {
        this.__values__ === r && (this.__values__ = Xd(this.value()));
        var n = this.__index__ >= this.__values__.length, i = n ? r : this.__values__[this.__index__++];
        return { done: n, value: i };
      }
      function _b() {
        return this;
      }
      function Pb(n) {
        for (var i, a = this; a instanceof Qo; ) {
          var d = Rd(a);
          d.__index__ = 0, d.__values__ = r, i ? m.__wrapped__ = d : i = d;
          var m = d;
          a = a.__wrapped__;
        }
        return m.__wrapped__ = n, i;
      }
      function Ab() {
        var n = this.__wrapped__;
        if (n instanceof Se) {
          var i = n;
          return this.__actions__.length && (i = new Se(this)), i = i.reverse(), i.__actions__.push({
            func: ps,
            args: [Al],
            thisArg: r
          }), new Ht(i, this.__chain__);
        }
        return this.thru(Al);
      }
      function Eb() {
        return Jf(this.__wrapped__, this.__actions__);
      }
      var Rb = ss(function(n, i, a) {
        Ne.call(n, a) ? ++n[a] : Sn(n, a, 1);
      });
      function Ob(n, i, a) {
        var d = ue(n) ? ff : w0;
        return a && wt(n, i, a) && (i = r), d(n, Q(i, 3));
      }
      function Mb(n, i) {
        var a = ue(n) ? Wn : If;
        return a(n, Q(i, 3));
      }
      var Lb = cd(Od), Nb = cd(Md);
      function Db(n, i) {
        return lt(ms(n, i), 1);
      }
      function Ib(n, i) {
        return lt(ms(n, i), X);
      }
      function Vb(n, i, a) {
        return a = a === r ? 1 : fe(a), lt(ms(n, i), a);
      }
      function kd(n, i) {
        var a = ue(n) ? Ut : zn;
        return a(n, Q(i, 3));
      }
      function jd(n, i) {
        var a = ue(n) ? tx : Df;
        return a(n, Q(i, 3));
      }
      var kb = ss(function(n, i, a) {
        Ne.call(n, a) ? n[a].push(i) : Sn(n, a, [i]);
      });
      function jb(n, i, a, d) {
        n = Tt(n) ? n : Zr(n), a = a && !d ? fe(a) : 0;
        var m = n.length;
        return a < 0 && (a = et(m + a, 0)), ws(n) ? a <= m && n.indexOf(i, a) > -1 : !!m && Fr(n, i, a) > -1;
      }
      var Fb = ge(function(n, i, a) {
        var d = -1, m = typeof i == "function", x = Tt(n) ? D(n.length) : [];
        return zn(n, function(P) {
          x[++d] = m ? Ot(i, P, a) : Hi(P, i, a);
        }), x;
      }), Bb = ss(function(n, i, a) {
        Sn(n, a, i);
      });
      function ms(n, i) {
        var a = ue(n) ? Ue : Wf;
        return a(n, Q(i, 3));
      }
      function Wb(n, i, a, d) {
        return n == null ? [] : (ue(i) || (i = i == null ? [] : [i]), a = d ? r : a, ue(a) || (a = a == null ? [] : [a]), zf(n, i, a));
      }
      var Ub = ss(function(n, i, a) {
        n[a ? 0 : 1].push(i);
      }, function() {
        return [[], []];
      });
      function $b(n, i, a) {
        var d = ue(n) ? Ba : mf, m = arguments.length < 3;
        return d(n, Q(i, 4), a, m, zn);
      }
      function Hb(n, i, a) {
        var d = ue(n) ? nx : mf, m = arguments.length < 3;
        return d(n, Q(i, 4), a, m, Df);
      }
      function zb(n, i) {
        var a = ue(n) ? Wn : If;
        return a(n, ys(Q(i, 3)));
      }
      function Gb(n) {
        var i = ue(n) ? Of : j0;
        return i(n);
      }
      function Kb(n, i, a) {
        (a ? wt(n, i, a) : i === r) ? i = 1 : i = fe(i);
        var d = ue(n) ? m0 : F0;
        return d(n, i);
      }
      function Yb(n) {
        var i = ue(n) ? g0 : W0;
        return i(n);
      }
      function qb(n) {
        if (n == null)
          return 0;
        if (Tt(n))
          return ws(n) ? Wr(n) : n.length;
        var i = mt(n);
        return i == We || i == Rt ? n.size : ol(n).length;
      }
      function Xb(n, i, a) {
        var d = ue(n) ? Wa : U0;
        return a && wt(n, i, a) && (i = r), d(n, Q(i, 3));
      }
      var Zb = ge(function(n, i) {
        if (n == null)
          return [];
        var a = i.length;
        return a > 1 && wt(n, i[0], i[1]) ? i = [] : a > 2 && wt(i[0], i[1], i[2]) && (i = [i[0]]), zf(n, lt(i, 1), []);
      }), gs = Mx || function() {
        return at.Date.now();
      };
      function Jb(n, i) {
        if (typeof i != "function")
          throw new $t(l);
        return n = fe(n), function() {
          if (--n < 1)
            return i.apply(this, arguments);
        };
      }
      function Fd(n, i, a) {
        return i = a ? r : i, i = n && i == null ? n.length : i, Cn(n, U, r, r, r, r, i);
      }
      function Bd(n, i) {
        var a;
        if (typeof i != "function")
          throw new $t(l);
        return n = fe(n), function() {
          return --n > 0 && (a = i.apply(this, arguments)), n <= 1 && (i = r), a;
        };
      }
      var Rl = ge(function(n, i, a) {
        var d = _;
        if (a.length) {
          var m = $n(a, qr(Rl));
          d |= V;
        }
        return Cn(n, d, i, a, m);
      }), Wd = ge(function(n, i, a) {
        var d = _ | A;
        if (a.length) {
          var m = $n(a, qr(Wd));
          d |= V;
        }
        return Cn(i, d, n, a, m);
      });
      function Ud(n, i, a) {
        i = a ? r : i;
        var d = Cn(n, M, r, r, r, r, r, i);
        return d.placeholder = Ud.placeholder, d;
      }
      function $d(n, i, a) {
        i = a ? r : i;
        var d = Cn(n, I, r, r, r, r, r, i);
        return d.placeholder = $d.placeholder, d;
      }
      function Hd(n, i, a) {
        var d, m, x, P, O, N, j = 0, F = !1, B = !1, z = !0;
        if (typeof n != "function")
          throw new $t(l);
        i = Yt(i) || 0, He(a) && (F = !!a.leading, B = "maxWait" in a, x = B ? et(Yt(a.maxWait) || 0, i) : x, z = "trailing" in a ? !!a.trailing : z);
        function q(Xe) {
          var nn = d, En = m;
          return d = m = r, j = Xe, P = n.apply(En, nn), P;
        }
        function re(Xe) {
          return j = Xe, O = qi(ye, i), F ? q(Xe) : P;
        }
        function me(Xe) {
          var nn = Xe - N, En = Xe - j, ch = i - nn;
          return B ? pt(ch, x - En) : ch;
        }
        function ie(Xe) {
          var nn = Xe - N, En = Xe - j;
          return N === r || nn >= i || nn < 0 || B && En >= x;
        }
        function ye() {
          var Xe = gs();
          if (ie(Xe))
            return Te(Xe);
          O = qi(ye, me(Xe));
        }
        function Te(Xe) {
          return O = r, z && d ? q(Xe) : (d = m = r, P);
        }
        function Dt() {
          O !== r && ed(O), j = 0, d = N = m = O = r;
        }
        function bt() {
          return O === r ? P : Te(gs());
        }
        function It() {
          var Xe = gs(), nn = ie(Xe);
          if (d = arguments, m = this, N = Xe, nn) {
            if (O === r)
              return re(N);
            if (B)
              return ed(O), O = qi(ye, i), q(N);
          }
          return O === r && (O = qi(ye, i)), P;
        }
        return It.cancel = Dt, It.flush = bt, It;
      }
      var Qb = ge(function(n, i) {
        return Nf(n, 1, i);
      }), eS = ge(function(n, i, a) {
        return Nf(n, Yt(i) || 0, a);
      });
      function tS(n) {
        return Cn(n, J);
      }
      function vs(n, i) {
        if (typeof n != "function" || i != null && typeof i != "function")
          throw new $t(l);
        var a = function() {
          var d = arguments, m = i ? i.apply(this, d) : d[0], x = a.cache;
          if (x.has(m))
            return x.get(m);
          var P = n.apply(this, d);
          return a.cache = x.set(m, P) || x, P;
        };
        return a.cache = new (vs.Cache || bn)(), a;
      }
      vs.Cache = bn;
      function ys(n) {
        if (typeof n != "function")
          throw new $t(l);
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
      function nS(n) {
        return Bd(2, n);
      }
      var rS = $0(function(n, i) {
        i = i.length == 1 && ue(i[0]) ? Ue(i[0], Mt(Q())) : Ue(lt(i, 1), Mt(Q()));
        var a = i.length;
        return ge(function(d) {
          for (var m = -1, x = pt(d.length, a); ++m < x; )
            d[m] = i[m].call(this, d[m]);
          return Ot(n, this, d);
        });
      }), Ol = ge(function(n, i) {
        var a = $n(i, qr(Ol));
        return Cn(n, V, r, i, a);
      }), zd = ge(function(n, i) {
        var a = $n(i, qr(zd));
        return Cn(n, H, r, i, a);
      }), iS = Tn(function(n, i) {
        return Cn(n, $, r, r, r, i);
      });
      function oS(n, i) {
        if (typeof n != "function")
          throw new $t(l);
        return i = i === r ? i : fe(i), ge(n, i);
      }
      function sS(n, i) {
        if (typeof n != "function")
          throw new $t(l);
        return i = i == null ? 0 : et(fe(i), 0), ge(function(a) {
          var d = a[i], m = Yn(a, 0, i);
          return d && Un(m, d), Ot(n, this, m);
        });
      }
      function aS(n, i, a) {
        var d = !0, m = !0;
        if (typeof n != "function")
          throw new $t(l);
        return He(a) && (d = "leading" in a ? !!a.leading : d, m = "trailing" in a ? !!a.trailing : m), Hd(n, i, {
          leading: d,
          maxWait: i,
          trailing: m
        });
      }
      function lS(n) {
        return Fd(n, 1);
      }
      function cS(n, i) {
        return Ol(pl(i), n);
      }
      function uS() {
        if (!arguments.length)
          return [];
        var n = arguments[0];
        return ue(n) ? n : [n];
      }
      function fS(n) {
        return zt(n, b);
      }
      function dS(n, i) {
        return i = typeof i == "function" ? i : r, zt(n, b, i);
      }
      function hS(n) {
        return zt(n, g | b);
      }
      function pS(n, i) {
        return i = typeof i == "function" ? i : r, zt(n, g | b, i);
      }
      function mS(n, i) {
        return i == null || Lf(n, i, rt(i));
      }
      function tn(n, i) {
        return n === i || n !== n && i !== i;
      }
      var gS = us(nl), vS = us(function(n, i) {
        return n >= i;
      }), Cr = jf(/* @__PURE__ */ function() {
        return arguments;
      }()) ? jf : function(n) {
        return Ye(n) && Ne.call(n, "callee") && !Tf.call(n, "callee");
      }, ue = D.isArray, yS = of ? Mt(of) : P0;
      function Tt(n) {
        return n != null && xs(n.length) && !Pn(n);
      }
      function qe(n) {
        return Ye(n) && Tt(n);
      }
      function xS(n) {
        return n === !0 || n === !1 || Ye(n) && xt(n) == xe;
      }
      var qn = Nx || Wl, wS = sf ? Mt(sf) : A0;
      function bS(n) {
        return Ye(n) && n.nodeType === 1 && !Xi(n);
      }
      function SS(n) {
        if (n == null)
          return !0;
        if (Tt(n) && (ue(n) || typeof n == "string" || typeof n.splice == "function" || qn(n) || Xr(n) || Cr(n)))
          return !n.length;
        var i = mt(n);
        if (i == We || i == Rt)
          return !n.size;
        if (Yi(n))
          return !ol(n).length;
        for (var a in n)
          if (Ne.call(n, a))
            return !1;
        return !0;
      }
      function CS(n, i) {
        return zi(n, i);
      }
      function TS(n, i, a) {
        a = typeof a == "function" ? a : r;
        var d = a ? a(n, i) : r;
        return d === r ? zi(n, i, r, a) : !!d;
      }
      function Ml(n) {
        if (!Ye(n))
          return !1;
        var i = xt(n);
        return i == Ce || i == Ae || typeof n.message == "string" && typeof n.name == "string" && !Xi(n);
      }
      function _S(n) {
        return typeof n == "number" && Pf(n);
      }
      function Pn(n) {
        if (!He(n))
          return !1;
        var i = xt(n);
        return i == we || i == tt || i == ne || i == Zt;
      }
      function Gd(n) {
        return typeof n == "number" && n == fe(n);
      }
      function xs(n) {
        return typeof n == "number" && n > -1 && n % 1 == 0 && n <= K;
      }
      function He(n) {
        var i = typeof n;
        return n != null && (i == "object" || i == "function");
      }
      function Ye(n) {
        return n != null && typeof n == "object";
      }
      var Kd = af ? Mt(af) : R0;
      function PS(n, i) {
        return n === i || il(n, i, bl(i));
      }
      function AS(n, i, a) {
        return a = typeof a == "function" ? a : r, il(n, i, bl(i), a);
      }
      function ES(n) {
        return Yd(n) && n != +n;
      }
      function RS(n) {
        if (dw(n))
          throw new ce(c);
        return Ff(n);
      }
      function OS(n) {
        return n === null;
      }
      function MS(n) {
        return n == null;
      }
      function Yd(n) {
        return typeof n == "number" || Ye(n) && xt(n) == dt;
      }
      function Xi(n) {
        if (!Ye(n) || xt(n) != nt)
          return !1;
        var i = Go(n);
        if (i === null)
          return !0;
        var a = Ne.call(i, "constructor") && i.constructor;
        return typeof a == "function" && a instanceof a && Uo.call(a) == Ax;
      }
      var Ll = lf ? Mt(lf) : O0;
      function LS(n) {
        return Gd(n) && n >= -K && n <= K;
      }
      var qd = cf ? Mt(cf) : M0;
      function ws(n) {
        return typeof n == "string" || !ue(n) && Ye(n) && xt(n) == yn;
      }
      function Nt(n) {
        return typeof n == "symbol" || Ye(n) && xt(n) == Nr;
      }
      var Xr = uf ? Mt(uf) : L0;
      function NS(n) {
        return n === r;
      }
      function DS(n) {
        return Ye(n) && mt(n) == jn;
      }
      function IS(n) {
        return Ye(n) && xt(n) == Ao;
      }
      var VS = us(sl), kS = us(function(n, i) {
        return n <= i;
      });
      function Xd(n) {
        if (!n)
          return [];
        if (Tt(n))
          return ws(n) ? Qt(n) : Ct(n);
        if (ki && n[ki])
          return mx(n[ki]());
        var i = mt(n), a = i == We ? Ka : i == Rt ? Fo : Zr;
        return a(n);
      }
      function An(n) {
        if (!n)
          return n === 0 ? n : 0;
        if (n = Yt(n), n === X || n === -X) {
          var i = n < 0 ? -1 : 1;
          return i * pe;
        }
        return n === n ? n : 0;
      }
      function fe(n) {
        var i = An(n), a = i % 1;
        return i === i ? a ? i - a : i : 0;
      }
      function Zd(n) {
        return n ? xr(fe(n), 0, Pe) : 0;
      }
      function Yt(n) {
        if (typeof n == "number")
          return n;
        if (Nt(n))
          return Me;
        if (He(n)) {
          var i = typeof n.valueOf == "function" ? n.valueOf() : n;
          n = He(i) ? i + "" : i;
        }
        if (typeof n != "string")
          return n === 0 ? n : +n;
        n = gf(n);
        var a = be.test(n);
        return a || ot.test(n) ? Jy(n.slice(2), a ? 2 : 8) : Le.test(n) ? Me : +n;
      }
      function Jd(n) {
        return un(n, _t(n));
      }
      function jS(n) {
        return n ? xr(fe(n), -K, K) : n === 0 ? n : 0;
      }
      function Oe(n) {
        return n == null ? "" : Lt(n);
      }
      var FS = Kr(function(n, i) {
        if (Yi(i) || Tt(i)) {
          un(i, rt(i), n);
          return;
        }
        for (var a in i)
          Ne.call(i, a) && Ui(n, a, i[a]);
      }), Qd = Kr(function(n, i) {
        un(i, _t(i), n);
      }), bs = Kr(function(n, i, a, d) {
        un(i, _t(i), n, d);
      }), BS = Kr(function(n, i, a, d) {
        un(i, rt(i), n, d);
      }), WS = Tn(Qa);
      function US(n, i) {
        var a = Gr(n);
        return i == null ? a : Mf(a, i);
      }
      var $S = ge(function(n, i) {
        n = Ie(n);
        var a = -1, d = i.length, m = d > 2 ? i[2] : r;
        for (m && wt(i[0], i[1], m) && (d = 1); ++a < d; )
          for (var x = i[a], P = _t(x), O = -1, N = P.length; ++O < N; ) {
            var j = P[O], F = n[j];
            (F === r || tn(F, $r[j]) && !Ne.call(n, j)) && (n[j] = x[j]);
          }
        return n;
      }), HS = ge(function(n) {
        return n.push(r, gd), Ot(eh, r, n);
      });
      function zS(n, i) {
        return df(n, Q(i, 3), cn);
      }
      function GS(n, i) {
        return df(n, Q(i, 3), tl);
      }
      function KS(n, i) {
        return n == null ? n : el(n, Q(i, 3), _t);
      }
      function YS(n, i) {
        return n == null ? n : Vf(n, Q(i, 3), _t);
      }
      function qS(n, i) {
        return n && cn(n, Q(i, 3));
      }
      function XS(n, i) {
        return n && tl(n, Q(i, 3));
      }
      function ZS(n) {
        return n == null ? [] : ns(n, rt(n));
      }
      function JS(n) {
        return n == null ? [] : ns(n, _t(n));
      }
      function Nl(n, i, a) {
        var d = n == null ? r : wr(n, i);
        return d === r ? a : d;
      }
      function QS(n, i) {
        return n != null && xd(n, i, S0);
      }
      function Dl(n, i) {
        return n != null && xd(n, i, C0);
      }
      var eC = fd(function(n, i, a) {
        i != null && typeof i.toString != "function" && (i = $o.call(i)), n[i] = a;
      }, Vl(Pt)), tC = fd(function(n, i, a) {
        i != null && typeof i.toString != "function" && (i = $o.call(i)), Ne.call(n, i) ? n[i].push(a) : n[i] = [a];
      }, Q), nC = ge(Hi);
      function rt(n) {
        return Tt(n) ? Rf(n) : ol(n);
      }
      function _t(n) {
        return Tt(n) ? Rf(n, !0) : N0(n);
      }
      function rC(n, i) {
        var a = {};
        return i = Q(i, 3), cn(n, function(d, m, x) {
          Sn(a, i(d, m, x), d);
        }), a;
      }
      function iC(n, i) {
        var a = {};
        return i = Q(i, 3), cn(n, function(d, m, x) {
          Sn(a, m, i(d, m, x));
        }), a;
      }
      var oC = Kr(function(n, i, a) {
        rs(n, i, a);
      }), eh = Kr(function(n, i, a, d) {
        rs(n, i, a, d);
      }), sC = Tn(function(n, i) {
        var a = {};
        if (n == null)
          return a;
        var d = !1;
        i = Ue(i, function(x) {
          return x = Kn(x, n), d || (d = x.length > 1), x;
        }), un(n, xl(n), a), d && (a = zt(a, g | v | b, ew));
        for (var m = i.length; m--; )
          fl(a, i[m]);
        return a;
      });
      function aC(n, i) {
        return th(n, ys(Q(i)));
      }
      var lC = Tn(function(n, i) {
        return n == null ? {} : I0(n, i);
      });
      function th(n, i) {
        if (n == null)
          return {};
        var a = Ue(xl(n), function(d) {
          return [d];
        });
        return i = Q(i), Gf(n, a, function(d, m) {
          return i(d, m[0]);
        });
      }
      function cC(n, i, a) {
        i = Kn(i, n);
        var d = -1, m = i.length;
        for (m || (m = 1, n = r); ++d < m; ) {
          var x = n == null ? r : n[fn(i[d])];
          x === r && (d = m, x = a), n = Pn(x) ? x.call(n) : x;
        }
        return n;
      }
      function uC(n, i, a) {
        return n == null ? n : Gi(n, i, a);
      }
      function fC(n, i, a, d) {
        return d = typeof d == "function" ? d : r, n == null ? n : Gi(n, i, a, d);
      }
      var nh = pd(rt), rh = pd(_t);
      function dC(n, i, a) {
        var d = ue(n), m = d || qn(n) || Xr(n);
        if (i = Q(i, 4), a == null) {
          var x = n && n.constructor;
          m ? a = d ? new x() : [] : He(n) ? a = Pn(x) ? Gr(Go(n)) : {} : a = {};
        }
        return (m ? Ut : cn)(n, function(P, O, N) {
          return i(a, P, O, N);
        }), a;
      }
      function hC(n, i) {
        return n == null ? !0 : fl(n, i);
      }
      function pC(n, i, a) {
        return n == null ? n : Zf(n, i, pl(a));
      }
      function mC(n, i, a, d) {
        return d = typeof d == "function" ? d : r, n == null ? n : Zf(n, i, pl(a), d);
      }
      function Zr(n) {
        return n == null ? [] : Ga(n, rt(n));
      }
      function gC(n) {
        return n == null ? [] : Ga(n, _t(n));
      }
      function vC(n, i, a) {
        return a === r && (a = i, i = r), a !== r && (a = Yt(a), a = a === a ? a : 0), i !== r && (i = Yt(i), i = i === i ? i : 0), xr(Yt(n), i, a);
      }
      function yC(n, i, a) {
        return i = An(i), a === r ? (a = i, i = 0) : a = An(a), n = Yt(n), T0(n, i, a);
      }
      function xC(n, i, a) {
        if (a && typeof a != "boolean" && wt(n, i, a) && (i = a = r), a === r && (typeof i == "boolean" ? (a = i, i = r) : typeof n == "boolean" && (a = n, n = r)), n === r && i === r ? (n = 0, i = 1) : (n = An(n), i === r ? (i = n, n = 0) : i = An(i)), n > i) {
          var d = n;
          n = i, i = d;
        }
        if (a || n % 1 || i % 1) {
          var m = Af();
          return pt(n + m * (i - n + Zy("1e-" + ((m + "").length - 1))), i);
        }
        return ll(n, i);
      }
      var wC = Yr(function(n, i, a) {
        return i = i.toLowerCase(), n + (a ? ih(i) : i);
      });
      function ih(n) {
        return Il(Oe(n).toLowerCase());
      }
      function oh(n) {
        return n = Oe(n), n && n.replace(Ke, ux).replace(Wy, "");
      }
      function bC(n, i, a) {
        n = Oe(n), i = Lt(i);
        var d = n.length;
        a = a === r ? d : xr(fe(a), 0, d);
        var m = a;
        return a -= i.length, a >= 0 && n.slice(a, m) == i;
      }
      function SC(n) {
        return n = Oe(n), n && Ro.test(n) ? n.replace(Vr, fx) : n;
      }
      function CC(n) {
        return n = Oe(n), n && Do.test(n) ? n.replace(Di, "\\$&") : n;
      }
      var TC = Yr(function(n, i, a) {
        return n + (a ? "-" : "") + i.toLowerCase();
      }), _C = Yr(function(n, i, a) {
        return n + (a ? " " : "") + i.toLowerCase();
      }), PC = ld("toLowerCase");
      function AC(n, i, a) {
        n = Oe(n), i = fe(i);
        var d = i ? Wr(n) : 0;
        if (!i || d >= i)
          return n;
        var m = (i - d) / 2;
        return cs(Xo(m), a) + n + cs(qo(m), a);
      }
      function EC(n, i, a) {
        n = Oe(n), i = fe(i);
        var d = i ? Wr(n) : 0;
        return i && d < i ? n + cs(i - d, a) : n;
      }
      function RC(n, i, a) {
        n = Oe(n), i = fe(i);
        var d = i ? Wr(n) : 0;
        return i && d < i ? cs(i - d, a) + n : n;
      }
      function OC(n, i, a) {
        return a || i == null ? i = 0 : i && (i = +i), kx(Oe(n).replace(kr, ""), i || 0);
      }
      function MC(n, i, a) {
        return (a ? wt(n, i, a) : i === r) ? i = 1 : i = fe(i), cl(Oe(n), i);
      }
      function LC() {
        var n = arguments, i = Oe(n[0]);
        return n.length < 3 ? i : i.replace(n[1], n[2]);
      }
      var NC = Yr(function(n, i, a) {
        return n + (a ? "_" : "") + i.toLowerCase();
      });
      function DC(n, i, a) {
        return a && typeof a != "number" && wt(n, i, a) && (i = a = r), a = a === r ? Pe : a >>> 0, a ? (n = Oe(n), n && (typeof i == "string" || i != null && !Ll(i)) && (i = Lt(i), !i && Br(n)) ? Yn(Qt(n), 0, a) : n.split(i, a)) : [];
      }
      var IC = Yr(function(n, i, a) {
        return n + (a ? " " : "") + Il(i);
      });
      function VC(n, i, a) {
        return n = Oe(n), a = a == null ? 0 : xr(fe(a), 0, n.length), i = Lt(i), n.slice(a, a + i.length) == i;
      }
      function kC(n, i, a) {
        var d = y.templateSettings;
        a && wt(n, i, a) && (i = r), n = Oe(n), i = bs({}, i, d, md);
        var m = bs({}, i.imports, d.imports, md), x = rt(m), P = Ga(m, x), O, N, j = 0, F = i.interpolate || st, B = "__p += '", z = Ya(
          (i.escape || st).source + "|" + F.source + "|" + (F === Mo ? se : st).source + "|" + (i.evaluate || st).source + "|$",
          "g"
        ), q = "//# sourceURL=" + (Ne.call(i, "sourceURL") ? (i.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++Gy + "]") + `
`;
        n.replace(z, function(ie, ye, Te, Dt, bt, It) {
          return Te || (Te = Dt), B += n.slice(j, It).replace(Bn, dx), ye && (O = !0, B += `' +
__e(` + ye + `) +
'`), bt && (N = !0, B += `';
` + bt + `;
__p += '`), Te && (B += `' +
((__t = (` + Te + `)) == null ? '' : __t) +
'`), j = It + ie.length, ie;
        }), B += `';
`;
        var re = Ne.call(i, "variable") && i.variable;
        if (!re)
          B = `with (obj) {
` + B + `
}
`;
        else if (W.test(re))
          throw new ce(u);
        B = (N ? B.replace(Ta, "") : B).replace(Li, "$1").replace(Eo, "$1;"), B = "function(" + (re || "obj") + `) {
` + (re ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (O ? ", __e = _.escape" : "") + (N ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + B + `return __p
}`;
        var me = ah(function() {
          return Re(x, q + "return " + B).apply(r, P);
        });
        if (me.source = B, Ml(me))
          throw me;
        return me;
      }
      function jC(n) {
        return Oe(n).toLowerCase();
      }
      function FC(n) {
        return Oe(n).toUpperCase();
      }
      function BC(n, i, a) {
        if (n = Oe(n), n && (a || i === r))
          return gf(n);
        if (!n || !(i = Lt(i)))
          return n;
        var d = Qt(n), m = Qt(i), x = vf(d, m), P = yf(d, m) + 1;
        return Yn(d, x, P).join("");
      }
      function WC(n, i, a) {
        if (n = Oe(n), n && (a || i === r))
          return n.slice(0, wf(n) + 1);
        if (!n || !(i = Lt(i)))
          return n;
        var d = Qt(n), m = yf(d, Qt(i)) + 1;
        return Yn(d, 0, m).join("");
      }
      function UC(n, i, a) {
        if (n = Oe(n), n && (a || i === r))
          return n.replace(kr, "");
        if (!n || !(i = Lt(i)))
          return n;
        var d = Qt(n), m = vf(d, Qt(i));
        return Yn(d, m).join("");
      }
      function $C(n, i) {
        var a = ee, d = he;
        if (He(i)) {
          var m = "separator" in i ? i.separator : m;
          a = "length" in i ? fe(i.length) : a, d = "omission" in i ? Lt(i.omission) : d;
        }
        n = Oe(n);
        var x = n.length;
        if (Br(n)) {
          var P = Qt(n);
          x = P.length;
        }
        if (a >= x)
          return n;
        var O = a - Wr(d);
        if (O < 1)
          return d;
        var N = P ? Yn(P, 0, O).join("") : n.slice(0, O);
        if (m === r)
          return N + d;
        if (P && (O += N.length - O), Ll(m)) {
          if (n.slice(O).search(m)) {
            var j, F = N;
            for (m.global || (m = Ya(m.source, Oe(Ee.exec(m)) + "g")), m.lastIndex = 0; j = m.exec(F); )
              var B = j.index;
            N = N.slice(0, B === r ? O : B);
          }
        } else if (n.indexOf(Lt(m), O) != O) {
          var z = N.lastIndexOf(m);
          z > -1 && (N = N.slice(0, z));
        }
        return N + d;
      }
      function HC(n) {
        return n = Oe(n), n && Ni.test(n) ? n.replace(xn, xx) : n;
      }
      var zC = Yr(function(n, i, a) {
        return n + (a ? " " : "") + i.toUpperCase();
      }), Il = ld("toUpperCase");
      function sh(n, i, a) {
        return n = Oe(n), i = a ? r : i, i === r ? px(n) ? Sx(n) : ox(n) : n.match(i) || [];
      }
      var ah = ge(function(n, i) {
        try {
          return Ot(n, r, i);
        } catch (a) {
          return Ml(a) ? a : new ce(a);
        }
      }), GC = Tn(function(n, i) {
        return Ut(i, function(a) {
          a = fn(a), Sn(n, a, Rl(n[a], n));
        }), n;
      });
      function KC(n) {
        var i = n == null ? 0 : n.length, a = Q();
        return n = i ? Ue(n, function(d) {
          if (typeof d[1] != "function")
            throw new $t(l);
          return [a(d[0]), d[1]];
        }) : [], ge(function(d) {
          for (var m = -1; ++m < i; ) {
            var x = n[m];
            if (Ot(x[0], this, d))
              return Ot(x[1], this, d);
          }
        });
      }
      function YC(n) {
        return x0(zt(n, g));
      }
      function Vl(n) {
        return function() {
          return n;
        };
      }
      function qC(n, i) {
        return n == null || n !== n ? i : n;
      }
      var XC = ud(), ZC = ud(!0);
      function Pt(n) {
        return n;
      }
      function kl(n) {
        return Bf(typeof n == "function" ? n : zt(n, g));
      }
      function JC(n) {
        return Uf(zt(n, g));
      }
      function QC(n, i) {
        return $f(n, zt(i, g));
      }
      var eT = ge(function(n, i) {
        return function(a) {
          return Hi(a, n, i);
        };
      }), tT = ge(function(n, i) {
        return function(a) {
          return Hi(n, a, i);
        };
      });
      function jl(n, i, a) {
        var d = rt(i), m = ns(i, d);
        a == null && !(He(i) && (m.length || !d.length)) && (a = i, i = n, n = this, m = ns(i, rt(i)));
        var x = !(He(a) && "chain" in a) || !!a.chain, P = Pn(n);
        return Ut(m, function(O) {
          var N = i[O];
          n[O] = N, P && (n.prototype[O] = function() {
            var j = this.__chain__;
            if (x || j) {
              var F = n(this.__wrapped__), B = F.__actions__ = Ct(this.__actions__);
              return B.push({ func: N, args: arguments, thisArg: n }), F.__chain__ = j, F;
            }
            return N.apply(n, Un([this.value()], arguments));
          });
        }), n;
      }
      function nT() {
        return at._ === this && (at._ = Ex), this;
      }
      function Fl() {
      }
      function rT(n) {
        return n = fe(n), ge(function(i) {
          return Hf(i, n);
        });
      }
      var iT = gl(Ue), oT = gl(ff), sT = gl(Wa);
      function lh(n) {
        return Cl(n) ? Ua(fn(n)) : V0(n);
      }
      function aT(n) {
        return function(i) {
          return n == null ? r : wr(n, i);
        };
      }
      var lT = dd(), cT = dd(!0);
      function Bl() {
        return [];
      }
      function Wl() {
        return !1;
      }
      function uT() {
        return {};
      }
      function fT() {
        return "";
      }
      function dT() {
        return !0;
      }
      function hT(n, i) {
        if (n = fe(n), n < 1 || n > K)
          return [];
        var a = Pe, d = pt(n, Pe);
        i = Q(i), n -= Pe;
        for (var m = za(d, i); ++a < n; )
          i(a);
        return m;
      }
      function pT(n) {
        return ue(n) ? Ue(n, fn) : Nt(n) ? [n] : Ct(Ed(Oe(n)));
      }
      function mT(n) {
        var i = ++Px;
        return Oe(n) + i;
      }
      var gT = ls(function(n, i) {
        return n + i;
      }, 0), vT = vl("ceil"), yT = ls(function(n, i) {
        return n / i;
      }, 1), xT = vl("floor");
      function wT(n) {
        return n && n.length ? ts(n, Pt, nl) : r;
      }
      function bT(n, i) {
        return n && n.length ? ts(n, Q(i, 2), nl) : r;
      }
      function ST(n) {
        return pf(n, Pt);
      }
      function CT(n, i) {
        return pf(n, Q(i, 2));
      }
      function TT(n) {
        return n && n.length ? ts(n, Pt, sl) : r;
      }
      function _T(n, i) {
        return n && n.length ? ts(n, Q(i, 2), sl) : r;
      }
      var PT = ls(function(n, i) {
        return n * i;
      }, 1), AT = vl("round"), ET = ls(function(n, i) {
        return n - i;
      }, 0);
      function RT(n) {
        return n && n.length ? Ha(n, Pt) : 0;
      }
      function OT(n, i) {
        return n && n.length ? Ha(n, Q(i, 2)) : 0;
      }
      return y.after = Jb, y.ary = Fd, y.assign = FS, y.assignIn = Qd, y.assignInWith = bs, y.assignWith = BS, y.at = WS, y.before = Bd, y.bind = Rl, y.bindAll = GC, y.bindKey = Wd, y.castArray = uS, y.chain = Vd, y.chunk = xw, y.compact = ww, y.concat = bw, y.cond = KC, y.conforms = YC, y.constant = Vl, y.countBy = Rb, y.create = US, y.curry = Ud, y.curryRight = $d, y.debounce = Hd, y.defaults = $S, y.defaultsDeep = HS, y.defer = Qb, y.delay = eS, y.difference = Sw, y.differenceBy = Cw, y.differenceWith = Tw, y.drop = _w, y.dropRight = Pw, y.dropRightWhile = Aw, y.dropWhile = Ew, y.fill = Rw, y.filter = Mb, y.flatMap = Db, y.flatMapDeep = Ib, y.flatMapDepth = Vb, y.flatten = Ld, y.flattenDeep = Ow, y.flattenDepth = Mw, y.flip = tS, y.flow = XC, y.flowRight = ZC, y.fromPairs = Lw, y.functions = ZS, y.functionsIn = JS, y.groupBy = kb, y.initial = Dw, y.intersection = Iw, y.intersectionBy = Vw, y.intersectionWith = kw, y.invert = eC, y.invertBy = tC, y.invokeMap = Fb, y.iteratee = kl, y.keyBy = Bb, y.keys = rt, y.keysIn = _t, y.map = ms, y.mapKeys = rC, y.mapValues = iC, y.matches = JC, y.matchesProperty = QC, y.memoize = vs, y.merge = oC, y.mergeWith = eh, y.method = eT, y.methodOf = tT, y.mixin = jl, y.negate = ys, y.nthArg = rT, y.omit = sC, y.omitBy = aC, y.once = nS, y.orderBy = Wb, y.over = iT, y.overArgs = rS, y.overEvery = oT, y.overSome = sT, y.partial = Ol, y.partialRight = zd, y.partition = Ub, y.pick = lC, y.pickBy = th, y.property = lh, y.propertyOf = aT, y.pull = Ww, y.pullAll = Dd, y.pullAllBy = Uw, y.pullAllWith = $w, y.pullAt = Hw, y.range = lT, y.rangeRight = cT, y.rearg = iS, y.reject = zb, y.remove = zw, y.rest = oS, y.reverse = Al, y.sampleSize = Kb, y.set = uC, y.setWith = fC, y.shuffle = Yb, y.slice = Gw, y.sortBy = Zb, y.sortedUniq = Qw, y.sortedUniqBy = eb, y.split = DC, y.spread = sS, y.tail = tb, y.take = nb, y.takeRight = rb, y.takeRightWhile = ib, y.takeWhile = ob, y.tap = wb, y.throttle = aS, y.thru = ps, y.toArray = Xd, y.toPairs = nh, y.toPairsIn = rh, y.toPath = pT, y.toPlainObject = Jd, y.transform = dC, y.unary = lS, y.union = sb, y.unionBy = ab, y.unionWith = lb, y.uniq = cb, y.uniqBy = ub, y.uniqWith = fb, y.unset = hC, y.unzip = El, y.unzipWith = Id, y.update = pC, y.updateWith = mC, y.values = Zr, y.valuesIn = gC, y.without = db, y.words = sh, y.wrap = cS, y.xor = hb, y.xorBy = pb, y.xorWith = mb, y.zip = gb, y.zipObject = vb, y.zipObjectDeep = yb, y.zipWith = xb, y.entries = nh, y.entriesIn = rh, y.extend = Qd, y.extendWith = bs, jl(y, y), y.add = gT, y.attempt = ah, y.camelCase = wC, y.capitalize = ih, y.ceil = vT, y.clamp = vC, y.clone = fS, y.cloneDeep = hS, y.cloneDeepWith = pS, y.cloneWith = dS, y.conformsTo = mS, y.deburr = oh, y.defaultTo = qC, y.divide = yT, y.endsWith = bC, y.eq = tn, y.escape = SC, y.escapeRegExp = CC, y.every = Ob, y.find = Lb, y.findIndex = Od, y.findKey = zS, y.findLast = Nb, y.findLastIndex = Md, y.findLastKey = GS, y.floor = xT, y.forEach = kd, y.forEachRight = jd, y.forIn = KS, y.forInRight = YS, y.forOwn = qS, y.forOwnRight = XS, y.get = Nl, y.gt = gS, y.gte = vS, y.has = QS, y.hasIn = Dl, y.head = Nd, y.identity = Pt, y.includes = jb, y.indexOf = Nw, y.inRange = yC, y.invoke = nC, y.isArguments = Cr, y.isArray = ue, y.isArrayBuffer = yS, y.isArrayLike = Tt, y.isArrayLikeObject = qe, y.isBoolean = xS, y.isBuffer = qn, y.isDate = wS, y.isElement = bS, y.isEmpty = SS, y.isEqual = CS, y.isEqualWith = TS, y.isError = Ml, y.isFinite = _S, y.isFunction = Pn, y.isInteger = Gd, y.isLength = xs, y.isMap = Kd, y.isMatch = PS, y.isMatchWith = AS, y.isNaN = ES, y.isNative = RS, y.isNil = MS, y.isNull = OS, y.isNumber = Yd, y.isObject = He, y.isObjectLike = Ye, y.isPlainObject = Xi, y.isRegExp = Ll, y.isSafeInteger = LS, y.isSet = qd, y.isString = ws, y.isSymbol = Nt, y.isTypedArray = Xr, y.isUndefined = NS, y.isWeakMap = DS, y.isWeakSet = IS, y.join = jw, y.kebabCase = TC, y.last = Kt, y.lastIndexOf = Fw, y.lowerCase = _C, y.lowerFirst = PC, y.lt = VS, y.lte = kS, y.max = wT, y.maxBy = bT, y.mean = ST, y.meanBy = CT, y.min = TT, y.minBy = _T, y.stubArray = Bl, y.stubFalse = Wl, y.stubObject = uT, y.stubString = fT, y.stubTrue = dT, y.multiply = PT, y.nth = Bw, y.noConflict = nT, y.noop = Fl, y.now = gs, y.pad = AC, y.padEnd = EC, y.padStart = RC, y.parseInt = OC, y.random = xC, y.reduce = $b, y.reduceRight = Hb, y.repeat = MC, y.replace = LC, y.result = cC, y.round = AT, y.runInContext = L, y.sample = Gb, y.size = qb, y.snakeCase = NC, y.some = Xb, y.sortedIndex = Kw, y.sortedIndexBy = Yw, y.sortedIndexOf = qw, y.sortedLastIndex = Xw, y.sortedLastIndexBy = Zw, y.sortedLastIndexOf = Jw, y.startCase = IC, y.startsWith = VC, y.subtract = ET, y.sum = RT, y.sumBy = OT, y.template = kC, y.times = hT, y.toFinite = An, y.toInteger = fe, y.toLength = Zd, y.toLower = jC, y.toNumber = Yt, y.toSafeInteger = jS, y.toString = Oe, y.toUpper = FC, y.trim = BC, y.trimEnd = WC, y.trimStart = UC, y.truncate = $C, y.unescape = HC, y.uniqueId = mT, y.upperCase = zC, y.upperFirst = Il, y.each = kd, y.eachRight = jd, y.first = Nd, jl(y, function() {
        var n = {};
        return cn(y, function(i, a) {
          Ne.call(y.prototype, a) || (n[a] = i);
        }), n;
      }(), { chain: !1 }), y.VERSION = o, Ut(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(n) {
        y[n].placeholder = y;
      }), Ut(["drop", "take"], function(n, i) {
        Se.prototype[n] = function(a) {
          a = a === r ? 1 : et(fe(a), 0);
          var d = this.__filtered__ && !i ? new Se(this) : this.clone();
          return d.__filtered__ ? d.__takeCount__ = pt(a, d.__takeCount__) : d.__views__.push({
            size: pt(a, Pe),
            type: n + (d.__dir__ < 0 ? "Right" : "")
          }), d;
        }, Se.prototype[n + "Right"] = function(a) {
          return this.reverse()[n](a).reverse();
        };
      }), Ut(["filter", "map", "takeWhile"], function(n, i) {
        var a = i + 1, d = a == te || a == le;
        Se.prototype[n] = function(m) {
          var x = this.clone();
          return x.__iteratees__.push({
            iteratee: Q(m, 3),
            type: a
          }), x.__filtered__ = x.__filtered__ || d, x;
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
        return this.filter(Pt);
      }, Se.prototype.find = function(n) {
        return this.filter(n).head();
      }, Se.prototype.findLast = function(n) {
        return this.reverse().find(n);
      }, Se.prototype.invokeMap = ge(function(n, i) {
        return typeof n == "function" ? new Se(this) : this.map(function(a) {
          return Hi(a, n, i);
        });
      }), Se.prototype.reject = function(n) {
        return this.filter(ys(Q(n)));
      }, Se.prototype.slice = function(n, i) {
        n = fe(n);
        var a = this;
        return a.__filtered__ && (n > 0 || i < 0) ? new Se(a) : (n < 0 ? a = a.takeRight(-n) : n && (a = a.drop(n)), i !== r && (i = fe(i), a = i < 0 ? a.dropRight(-i) : a.take(i - n)), a);
      }, Se.prototype.takeRightWhile = function(n) {
        return this.reverse().takeWhile(n).reverse();
      }, Se.prototype.toArray = function() {
        return this.take(Pe);
      }, cn(Se.prototype, function(n, i) {
        var a = /^(?:filter|find|map|reject)|While$/.test(i), d = /^(?:head|last)$/.test(i), m = y[d ? "take" + (i == "last" ? "Right" : "") : i], x = d || /^find/.test(i);
        m && (y.prototype[i] = function() {
          var P = this.__wrapped__, O = d ? [1] : arguments, N = P instanceof Se, j = O[0], F = N || ue(P), B = function(ye) {
            var Te = m.apply(y, Un([ye], O));
            return d && z ? Te[0] : Te;
          };
          F && a && typeof j == "function" && j.length != 1 && (N = F = !1);
          var z = this.__chain__, q = !!this.__actions__.length, re = x && !z, me = N && !q;
          if (!x && F) {
            P = me ? P : new Se(this);
            var ie = n.apply(P, O);
            return ie.__actions__.push({ func: ps, args: [B], thisArg: r }), new Ht(ie, z);
          }
          return re && me ? n.apply(this, O) : (ie = this.thru(B), re ? d ? ie.value()[0] : ie.value() : ie);
        });
      }), Ut(["pop", "push", "shift", "sort", "splice", "unshift"], function(n) {
        var i = Bo[n], a = /^(?:push|sort|unshift)$/.test(n) ? "tap" : "thru", d = /^(?:pop|shift)$/.test(n);
        y.prototype[n] = function() {
          var m = arguments;
          if (d && !this.__chain__) {
            var x = this.value();
            return i.apply(ue(x) ? x : [], m);
          }
          return this[a](function(P) {
            return i.apply(ue(P) ? P : [], m);
          });
        };
      }), cn(Se.prototype, function(n, i) {
        var a = y[i];
        if (a) {
          var d = a.name + "";
          Ne.call(zr, d) || (zr[d] = []), zr[d].push({ name: i, func: a });
        }
      }), zr[as(r, A).name] = [{
        name: "wrapper",
        func: r
      }], Se.prototype.clone = Hx, Se.prototype.reverse = zx, Se.prototype.value = Gx, y.prototype.at = bb, y.prototype.chain = Sb, y.prototype.commit = Cb, y.prototype.next = Tb, y.prototype.plant = Pb, y.prototype.reverse = Ab, y.prototype.toJSON = y.prototype.valueOf = y.prototype.value = Eb, y.prototype.first = y.prototype.head, ki && (y.prototype[ki] = _b), y;
    }, Ur = Cx();
    mr ? ((mr.exports = Ur)._ = Ur, ka._ = Ur) : at._ = Ur;
  }).call(Zi);
})(Fs, Fs.exports);
var jT = Fs.exports;
const FT = /* @__PURE__ */ IT(jT);
function BT(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function rm(...e) {
  return (t) => e.forEach((r) => BT(r, t));
}
function Je(...e) {
  return S.useCallback(rm(...e), e);
}
var hi = S.forwardRef((e, t) => {
  const { children: r, ...o } = e, s = S.Children.toArray(r), c = s.find(WT);
  if (c) {
    const l = c.props.children, u = s.map((f) => f === c ? S.Children.count(l) > 1 ? S.Children.only(null) : S.isValidElement(l) ? l.props.children : null : f);
    return /* @__PURE__ */ C.jsx(hc, { ...o, ref: t, children: S.isValidElement(l) ? S.cloneElement(l, void 0, u) : null });
  }
  return /* @__PURE__ */ C.jsx(hc, { ...o, ref: t, children: r });
});
hi.displayName = "Slot";
var hc = S.forwardRef((e, t) => {
  const { children: r, ...o } = e;
  if (S.isValidElement(r)) {
    const s = $T(r);
    return S.cloneElement(r, {
      ...UT(o, r.props),
      // @ts-ignore
      ref: t ? rm(t, s) : s
    });
  }
  return S.Children.count(r) > 1 ? S.Children.only(null) : null;
});
hc.displayName = "SlotClone";
var im = ({ children: e }) => /* @__PURE__ */ C.jsx(C.Fragment, { children: e });
function WT(e) {
  return S.isValidElement(e) && e.type === im;
}
function UT(e, t) {
  const r = { ...t };
  for (const o in t) {
    const s = e[o], c = t[o];
    /^on[A-Z]/.test(o) ? s && c ? r[o] = (...u) => {
      c(...u), s(...u);
    } : s && (r[o] = s) : o === "style" ? r[o] = { ...s, ...c } : o === "className" && (r[o] = [s, c].filter(Boolean).join(" "));
  }
  return { ...e, ...r };
}
function $T(e) {
  var o, s;
  let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = (s = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : s.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
function om(e) {
  var t, r, o = "";
  if (typeof e == "string" || typeof e == "number")
    o += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (r = om(e[t])) && (o && (o += " "), o += r);
    else
      for (t in e)
        e[t] && (o && (o += " "), o += t);
  return o;
}
function HT() {
  for (var e, t, r = 0, o = ""; r < arguments.length; )
    (e = arguments[r++]) && (t = om(e)) && (o && (o += " "), o += t);
  return o;
}
const dh = (e) => typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e, hh = HT, sm = (e, t) => (r) => {
  var o;
  if ((t == null ? void 0 : t.variants) == null)
    return hh(e, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
  const { variants: s, defaultVariants: c } = t, l = Object.keys(s).map((h) => {
    const p = r == null ? void 0 : r[h], g = c == null ? void 0 : c[h];
    if (p === null)
      return null;
    const v = dh(p) || dh(g);
    return s[h][v];
  }), u = r && Object.entries(r).reduce((h, p) => {
    let [g, v] = p;
    return v === void 0 || (h[g] = v), h;
  }, {}), f = t == null || (o = t.compoundVariants) === null || o === void 0 ? void 0 : o.reduce((h, p) => {
    let { class: g, className: v, ...b } = p;
    return Object.entries(b).every((T) => {
      let [w, _] = T;
      return Array.isArray(_) ? _.includes({
        ...c,
        ...u
      }[w]) : {
        ...c,
        ...u
      }[w] === _;
    }) ? [
      ...h,
      g,
      v
    ] : h;
  }, []);
  return hh(e, l, f, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
};
function am(e) {
  var t, r, o = "";
  if (typeof e == "string" || typeof e == "number")
    o += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var s = e.length;
      for (t = 0; t < s; t++)
        e[t] && (r = am(e[t])) && (o && (o += " "), o += r);
    } else
      for (r in e)
        e[r] && (o && (o += " "), o += r);
  return o;
}
function zT() {
  for (var e, t, r = 0, o = "", s = arguments.length; r < s; r++)
    (e = arguments[r]) && (t = am(e)) && (o && (o += " "), o += t);
  return o;
}
const zc = "-", GT = (e) => {
  const t = YT(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: o
  } = e;
  return {
    getClassGroupId: (l) => {
      const u = l.split(zc);
      return u[0] === "" && u.length !== 1 && u.shift(), lm(u, t) || KT(l);
    },
    getConflictingClassGroupIds: (l, u) => {
      const f = r[l] || [];
      return u && o[l] ? [...f, ...o[l]] : f;
    }
  };
}, lm = (e, t) => {
  var l;
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], o = t.nextPart.get(r), s = o ? lm(e.slice(1), o) : void 0;
  if (s)
    return s;
  if (t.validators.length === 0)
    return;
  const c = e.join(zc);
  return (l = t.validators.find(({
    validator: u
  }) => u(c))) == null ? void 0 : l.classGroupId;
}, ph = /^\[(.+)\]$/, KT = (e) => {
  if (ph.test(e)) {
    const t = ph.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, YT = (e) => {
  const {
    theme: t,
    prefix: r
  } = e, o = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return XT(Object.entries(e.classGroups), r).forEach(([c, l]) => {
    pc(l, o, c, t);
  }), o;
}, pc = (e, t, r, o) => {
  e.forEach((s) => {
    if (typeof s == "string") {
      const c = s === "" ? t : mh(t, s);
      c.classGroupId = r;
      return;
    }
    if (typeof s == "function") {
      if (qT(s)) {
        pc(s(o), t, r, o);
        return;
      }
      t.validators.push({
        validator: s,
        classGroupId: r
      });
      return;
    }
    Object.entries(s).forEach(([c, l]) => {
      pc(l, mh(t, c), r, o);
    });
  });
}, mh = (e, t) => {
  let r = e;
  return t.split(zc).forEach((o) => {
    r.nextPart.has(o) || r.nextPart.set(o, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(o);
  }), r;
}, qT = (e) => e.isThemeGetter, XT = (e, t) => t ? e.map(([r, o]) => {
  const s = o.map((c) => typeof c == "string" ? t + c : typeof c == "object" ? Object.fromEntries(Object.entries(c).map(([l, u]) => [t + l, u])) : c);
  return [r, s];
}) : e, ZT = (e) => {
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
}, cm = "!", JT = (e) => {
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
    const v = f.length === 0 ? u : u.substring(p), b = v.startsWith(cm), T = b ? v.substring(1) : v, w = g && g > p ? g - p : void 0;
    return {
      modifiers: f,
      hasImportantModifier: b,
      baseClassName: T,
      maybePostfixModifierPosition: w
    };
  };
  return r ? (u) => r({
    className: u,
    parseClassName: l
  }) : l;
}, QT = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let r = [];
  return e.forEach((o) => {
    o[0] === "[" ? (t.push(...r.sort(), o), r = []) : r.push(o);
  }), t.push(...r.sort()), t;
}, e_ = (e) => ({
  cache: ZT(e.cacheSize),
  parseClassName: JT(e),
  ...GT(e)
}), t_ = /\s+/, n_ = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: o,
    getConflictingClassGroupIds: s
  } = t, c = [], l = e.trim().split(t_);
  let u = "";
  for (let f = l.length - 1; f >= 0; f -= 1) {
    const h = l[f], {
      modifiers: p,
      hasImportantModifier: g,
      baseClassName: v,
      maybePostfixModifierPosition: b
    } = r(h);
    let T = !!b, w = o(T ? v.substring(0, b) : v);
    if (!w) {
      if (!T) {
        u = h + (u.length > 0 ? " " + u : u);
        continue;
      }
      if (w = o(v), !w) {
        u = h + (u.length > 0 ? " " + u : u);
        continue;
      }
      T = !1;
    }
    const _ = QT(p).join(":"), A = g ? _ + cm : _, R = A + w;
    if (c.includes(R))
      continue;
    c.push(R);
    const M = s(w, T);
    for (let I = 0; I < M.length; ++I) {
      const V = M[I];
      c.push(A + V);
    }
    u = h + (u.length > 0 ? " " + u : u);
  }
  return u;
};
function r_() {
  let e = 0, t, r, o = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = um(t)) && (o && (o += " "), o += r);
  return o;
}
const um = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let o = 0; o < e.length; o++)
    e[o] && (t = um(e[o])) && (r && (r += " "), r += t);
  return r;
};
function i_(e, ...t) {
  let r, o, s, c = l;
  function l(f) {
    const h = t.reduce((p, g) => g(p), e());
    return r = e_(h), o = r.cache.get, s = r.cache.set, c = u, u(f);
  }
  function u(f) {
    const h = o(f);
    if (h)
      return h;
    const p = n_(f, r);
    return s(f, p), p;
  }
  return function() {
    return c(r_.apply(null, arguments));
  };
}
const Be = (e) => {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}, fm = /^\[(?:([a-z-]+):)?(.+)\]$/i, o_ = /^\d+\/\d+$/, s_ = /* @__PURE__ */ new Set(["px", "full", "screen"]), a_ = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, l_ = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, c_ = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, u_ = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, f_ = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Rn = (e) => si(e) || s_.has(e) || o_.test(e), Xn = (e) => wi(e, "length", x_), si = (e) => !!e && !Number.isNaN(Number(e)), Ul = (e) => wi(e, "number", si), eo = (e) => !!e && Number.isInteger(Number(e)), d_ = (e) => e.endsWith("%") && si(e.slice(0, -1)), de = (e) => fm.test(e), Zn = (e) => a_.test(e), h_ = /* @__PURE__ */ new Set(["length", "size", "percentage"]), p_ = (e) => wi(e, h_, dm), m_ = (e) => wi(e, "position", dm), g_ = /* @__PURE__ */ new Set(["image", "url"]), v_ = (e) => wi(e, g_, b_), y_ = (e) => wi(e, "", w_), to = () => !0, wi = (e, t, r) => {
  const o = fm.exec(e);
  return o ? o[1] ? typeof t == "string" ? o[1] === t : t.has(o[1]) : r(o[2]) : !1;
}, x_ = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  l_.test(e) && !c_.test(e)
), dm = () => !1, w_ = (e) => u_.test(e), b_ = (e) => f_.test(e), S_ = () => {
  const e = Be("colors"), t = Be("spacing"), r = Be("blur"), o = Be("brightness"), s = Be("borderColor"), c = Be("borderRadius"), l = Be("borderSpacing"), u = Be("borderWidth"), f = Be("contrast"), h = Be("grayscale"), p = Be("hueRotate"), g = Be("invert"), v = Be("gap"), b = Be("gradientColorStops"), T = Be("gradientColorStopPositions"), w = Be("inset"), _ = Be("margin"), A = Be("opacity"), R = Be("padding"), M = Be("saturate"), I = Be("scale"), V = Be("sepia"), H = Be("skew"), U = Be("space"), $ = Be("translate"), J = () => ["auto", "contain", "none"], ee = () => ["auto", "hidden", "clip", "visible", "scroll"], he = () => ["auto", de, t], Z = () => [de, t], ae = () => ["", Rn, Xn], te = () => ["auto", si, de], _e = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], le = () => ["solid", "dashed", "dotted", "double", "none"], X = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], K = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], pe = () => ["", "0", de], Me = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], Pe = () => [si, de];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [to],
      spacing: [Rn, Xn],
      blur: ["none", "", Zn, de],
      brightness: Pe(),
      borderColor: [e],
      borderRadius: ["none", "", "full", Zn, de],
      borderSpacing: Z(),
      borderWidth: ae(),
      contrast: Pe(),
      grayscale: pe(),
      hueRotate: Pe(),
      invert: pe(),
      gap: Z(),
      gradientColorStops: [e],
      gradientColorStopPositions: [d_, Xn],
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
        columns: [Zn]
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
        object: [..._e(), de]
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
        inset: [w]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [w]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [w]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [w]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [w]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [w]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [w]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [w]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [w]
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
        z: ["auto", eo, de]
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
        order: ["first", "last", "none", eo, de]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [to]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", eo, de]
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
        "grid-rows": [to]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [eo, de]
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
        gap: [v]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [v]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [v]
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
        "space-x": [U]
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
        "space-y": [U]
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
          screen: [Zn]
        }, Zn]
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
        text: ["base", Zn, Xn]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Ul]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [to]
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
        "line-clamp": ["none", si, Ul]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Rn, de]
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
        decoration: ["auto", "from-font", Rn, Xn]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Rn, de]
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
        bg: [..._e(), m_]
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
        bg: ["auto", "cover", "contain", p_]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, v_]
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
        from: [b]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [b]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [b]
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
        "outline-offset": [Rn, de]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Rn, Xn]
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
        "ring-offset": [Rn, Xn]
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
        shadow: ["", "inner", "none", Zn, y_]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [to]
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
        "drop-shadow": ["", "none", Zn, de]
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
        saturate: [M]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [V]
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
        "backdrop-saturate": [M]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [V]
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
        scale: [I]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [I]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [I]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [eo, de]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [$]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [$]
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
        stroke: [Rn, Xn, Ul]
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
}, C_ = /* @__PURE__ */ i_(S_);
function it(...e) {
  return C_(zT(e));
}
function T_(e) {
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
const __ = sm(
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
), ai = S.forwardRef(
  ({ className: e, variant: t, size: r, asChild: o = !1, ...s }, c) => {
    const l = o ? hi : "button";
    return /* @__PURE__ */ C.jsx(
      l,
      {
        className: it(__({ variant: t, size: r, className: e })),
        ref: c,
        ...s
      }
    );
  }
);
ai.displayName = "Button";
const P_ = "_counter_1wts1_1", A_ = "_header_1wts1_10", E_ = "_button_1wts1_16", $l = {
  counter: P_,
  header: A_,
  button: E_
}, R_ = (e) => {
  const [t, r] = $c(e);
  return {
    count: t,
    incrementCount: () => r(t + 1)
  };
}, { throttle: O_ } = FT, KL = ({ initialValue: e = 0 }) => {
  const { count: t, incrementCount: r } = R_(e);
  return vo(() => {
    O_(() => {
      console.log("throttle");
    }, 10)();
  }, []), /* @__PURE__ */ C.jsxs("div", { className: $l.counter, children: [
    /* @__PURE__ */ C.jsx("h2", { className: $l.header, children: "Counter" }),
    /* @__PURE__ */ C.jsx("button", { className: $l.button, type: "button", onClick: r, children: "Increment by one" }),
    /* @__PURE__ */ C.jsx(ai, { variant: "outline", children: "Shadcn button" }),
    /* @__PURE__ */ C.jsxs("div", { className: "bg-red-500", children: [
      "Total value: ",
      /* @__PURE__ */ C.jsx("strong", { children: t })
    ] })
  ] });
};
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const M_ = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), hm = (...e) => e.filter((t, r, o) => !!t && t.trim() !== "" && o.indexOf(t) === r).join(" ").trim();
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
const N_ = Hc(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: c,
    iconNode: l,
    ...u
  }, f) => js(
    "svg",
    {
      ref: f,
      ...L_,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: o ? Number(r) * 24 / Number(t) : r,
      className: hm("lucide", s),
      ...u
    },
    [
      ...l.map(([h, p]) => js(h, p)),
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
const lr = (e, t) => {
  const r = Hc(
    ({ className: o, ...s }, c) => js(N_, {
      ref: c,
      iconNode: t,
      className: hm(`lucide-${M_(e)}`, o),
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
const D_ = lr("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gc = lr("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const I_ = lr("ChevronUp", [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const V_ = lr("CircleCheckBig", [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bs = lr("CircleHelp", [
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
const pm = lr("ExternalLink", [
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
const k_ = lr("Info", [
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
const j_ = lr("TriangleAlert", [
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
function gh(e, [t, r]) {
  return Math.min(r, Math.max(t, e));
}
function je(e, t, { checkForDefaultPrevented: r = !0 } = {}) {
  return function(s) {
    if (e == null || e(s), r === !1 || !s.defaultPrevented)
      return t == null ? void 0 : t(s);
  };
}
function F_(e, t = []) {
  let r = [];
  function o(c, l) {
    const u = S.createContext(l), f = r.length;
    r = [...r, l];
    function h(g) {
      const { scope: v, children: b, ...T } = g, w = (v == null ? void 0 : v[e][f]) || u, _ = S.useMemo(() => T, Object.values(T));
      return /* @__PURE__ */ C.jsx(w.Provider, { value: _, children: b });
    }
    function p(g, v) {
      const b = (v == null ? void 0 : v[e][f]) || u, T = S.useContext(b);
      if (T)
        return T;
      if (l !== void 0)
        return l;
      throw new Error(`\`${g}\` must be used within \`${c}\``);
    }
    return h.displayName = c + "Provider", [h, p];
  }
  const s = () => {
    const c = r.map((l) => S.createContext(l));
    return function(u) {
      const f = (u == null ? void 0 : u[e]) || c;
      return S.useMemo(
        () => ({ [`__scope${e}`]: { ...u, [e]: f } }),
        [u, f]
      );
    };
  };
  return s.scopeName = e, [o, B_(s, ...t)];
}
function B_(...e) {
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
      return S.useMemo(() => ({ [`__scope${t.scopeName}`]: l }), [l]);
    };
  };
  return r.scopeName = t.scopeName, r;
}
function W_(e) {
  const t = e + "CollectionProvider", [r, o] = F_(t), [s, c] = r(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), l = (b) => {
    const { scope: T, children: w } = b, _ = On.useRef(null), A = On.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ C.jsx(s, { scope: T, itemMap: A, collectionRef: _, children: w });
  };
  l.displayName = t;
  const u = e + "CollectionSlot", f = On.forwardRef(
    (b, T) => {
      const { scope: w, children: _ } = b, A = c(u, w), R = Je(T, A.collectionRef);
      return /* @__PURE__ */ C.jsx(hi, { ref: R, children: _ });
    }
  );
  f.displayName = u;
  const h = e + "CollectionItemSlot", p = "data-radix-collection-item", g = On.forwardRef(
    (b, T) => {
      const { scope: w, children: _, ...A } = b, R = On.useRef(null), M = Je(T, R), I = c(h, w);
      return On.useEffect(() => (I.itemMap.set(R, { ref: R, ...A }), () => void I.itemMap.delete(R))), /* @__PURE__ */ C.jsx(hi, { [p]: "", ref: M, children: _ });
    }
  );
  g.displayName = h;
  function v(b) {
    const T = c(e + "CollectionConsumer", b);
    return On.useCallback(() => {
      const _ = T.collectionRef.current;
      if (!_)
        return [];
      const A = Array.from(_.querySelectorAll(`[${p}]`));
      return Array.from(T.itemMap.values()).sort(
        (I, V) => A.indexOf(I.ref.current) - A.indexOf(V.ref.current)
      );
    }, [T.collectionRef, T.itemMap]);
  }
  return [
    { Provider: l, Slot: f, ItemSlot: g },
    v,
    o
  ];
}
function mm(e, t = []) {
  let r = [];
  function o(c, l) {
    const u = S.createContext(l), f = r.length;
    r = [...r, l];
    const h = (g) => {
      var A;
      const { scope: v, children: b, ...T } = g, w = ((A = v == null ? void 0 : v[e]) == null ? void 0 : A[f]) || u, _ = S.useMemo(() => T, Object.values(T));
      return /* @__PURE__ */ C.jsx(w.Provider, { value: _, children: b });
    };
    h.displayName = c + "Provider";
    function p(g, v) {
      var w;
      const b = ((w = v == null ? void 0 : v[e]) == null ? void 0 : w[f]) || u, T = S.useContext(b);
      if (T)
        return T;
      if (l !== void 0)
        return l;
      throw new Error(`\`${g}\` must be used within \`${c}\``);
    }
    return [h, p];
  }
  const s = () => {
    const c = r.map((l) => S.createContext(l));
    return function(u) {
      const f = (u == null ? void 0 : u[e]) || c;
      return S.useMemo(
        () => ({ [`__scope${e}`]: { ...u, [e]: f } }),
        [u, f]
      );
    };
  };
  return s.scopeName = e, [o, U_(s, ...t)];
}
function U_(...e) {
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
      return S.useMemo(() => ({ [`__scope${t.scopeName}`]: l }), [l]);
    };
  };
  return r.scopeName = t.scopeName, r;
}
var $_ = S.createContext(void 0);
function H_(e) {
  const t = S.useContext($_);
  return e || t || "ltr";
}
var z_ = [
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
], Ge = z_.reduce((e, t) => {
  const r = S.forwardRef((o, s) => {
    const { asChild: c, ...l } = o, u = c ? hi : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ C.jsx(u, { ...l, ref: s });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function G_(e, t) {
  e && ta.flushSync(() => e.dispatchEvent(t));
}
function In(e) {
  const t = S.useRef(e);
  return S.useEffect(() => {
    t.current = e;
  }), S.useMemo(() => (...r) => {
    var o;
    return (o = t.current) == null ? void 0 : o.call(t, ...r);
  }, []);
}
function K_(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = In(e);
  S.useEffect(() => {
    const o = (s) => {
      s.key === "Escape" && r(s);
    };
    return t.addEventListener("keydown", o, { capture: !0 }), () => t.removeEventListener("keydown", o, { capture: !0 });
  }, [r, t]);
}
var Y_ = "DismissableLayer", mc = "dismissableLayer.update", q_ = "dismissableLayer.pointerDownOutside", X_ = "dismissableLayer.focusOutside", vh, gm = S.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Kc = S.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: r = !1,
      onEscapeKeyDown: o,
      onPointerDownOutside: s,
      onFocusOutside: c,
      onInteractOutside: l,
      onDismiss: u,
      ...f
    } = e, h = S.useContext(gm), [p, g] = S.useState(null), v = (p == null ? void 0 : p.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, b] = S.useState({}), T = Je(t, (U) => g(U)), w = Array.from(h.layers), [_] = [...h.layersWithOutsidePointerEventsDisabled].slice(-1), A = w.indexOf(_), R = p ? w.indexOf(p) : -1, M = h.layersWithOutsidePointerEventsDisabled.size > 0, I = R >= A, V = Q_((U) => {
      const $ = U.target, J = [...h.branches].some((ee) => ee.contains($));
      !I || J || (s == null || s(U), l == null || l(U), U.defaultPrevented || u == null || u());
    }, v), H = e1((U) => {
      const $ = U.target;
      [...h.branches].some((ee) => ee.contains($)) || (c == null || c(U), l == null || l(U), U.defaultPrevented || u == null || u());
    }, v);
    return K_((U) => {
      R === h.layers.size - 1 && (o == null || o(U), !U.defaultPrevented && u && (U.preventDefault(), u()));
    }, v), S.useEffect(() => {
      if (p)
        return r && (h.layersWithOutsidePointerEventsDisabled.size === 0 && (vh = v.body.style.pointerEvents, v.body.style.pointerEvents = "none"), h.layersWithOutsidePointerEventsDisabled.add(p)), h.layers.add(p), yh(), () => {
          r && h.layersWithOutsidePointerEventsDisabled.size === 1 && (v.body.style.pointerEvents = vh);
        };
    }, [p, v, r, h]), S.useEffect(() => () => {
      p && (h.layers.delete(p), h.layersWithOutsidePointerEventsDisabled.delete(p), yh());
    }, [p, h]), S.useEffect(() => {
      const U = () => b({});
      return document.addEventListener(mc, U), () => document.removeEventListener(mc, U);
    }, []), /* @__PURE__ */ C.jsx(
      Ge.div,
      {
        ...f,
        ref: T,
        style: {
          pointerEvents: M ? I ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: je(e.onFocusCapture, H.onFocusCapture),
        onBlurCapture: je(e.onBlurCapture, H.onBlurCapture),
        onPointerDownCapture: je(
          e.onPointerDownCapture,
          V.onPointerDownCapture
        )
      }
    );
  }
);
Kc.displayName = Y_;
var Z_ = "DismissableLayerBranch", J_ = S.forwardRef((e, t) => {
  const r = S.useContext(gm), o = S.useRef(null), s = Je(t, o);
  return S.useEffect(() => {
    const c = o.current;
    if (c)
      return r.branches.add(c), () => {
        r.branches.delete(c);
      };
  }, [r.branches]), /* @__PURE__ */ C.jsx(Ge.div, { ...e, ref: s });
});
J_.displayName = Z_;
function Q_(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = In(e), o = S.useRef(!1), s = S.useRef(() => {
  });
  return S.useEffect(() => {
    const c = (u) => {
      if (u.target && !o.current) {
        let f = function() {
          vm(
            q_,
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
function e1(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = In(e), o = S.useRef(!1);
  return S.useEffect(() => {
    const s = (c) => {
      c.target && !o.current && vm(X_, r, { originalEvent: c }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", s), () => t.removeEventListener("focusin", s);
  }, [t, r]), {
    onFocusCapture: () => o.current = !0,
    onBlurCapture: () => o.current = !1
  };
}
function yh() {
  const e = new CustomEvent(mc);
  document.dispatchEvent(e);
}
function vm(e, t, r, { discrete: o }) {
  const s = r.originalEvent.target, c = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: r });
  t && s.addEventListener(e, t, { once: !0 }), o ? G_(s, c) : s.dispatchEvent(c);
}
var Hl = 0;
function t1() {
  S.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? xh()), document.body.insertAdjacentElement("beforeend", e[1] ?? xh()), Hl++, () => {
      Hl === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), Hl--;
    };
  }, []);
}
function xh() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var zl = "focusScope.autoFocusOnMount", Gl = "focusScope.autoFocusOnUnmount", wh = { bubbles: !1, cancelable: !0 }, n1 = "FocusScope", ym = S.forwardRef((e, t) => {
  const {
    loop: r = !1,
    trapped: o = !1,
    onMountAutoFocus: s,
    onUnmountAutoFocus: c,
    ...l
  } = e, [u, f] = S.useState(null), h = In(s), p = In(c), g = S.useRef(null), v = Je(t, (w) => f(w)), b = S.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  S.useEffect(() => {
    if (o) {
      let w = function(M) {
        if (b.paused || !u)
          return;
        const I = M.target;
        u.contains(I) ? g.current = I : Jn(g.current, { select: !0 });
      }, _ = function(M) {
        if (b.paused || !u)
          return;
        const I = M.relatedTarget;
        I !== null && (u.contains(I) || Jn(g.current, { select: !0 }));
      }, A = function(M) {
        if (document.activeElement === document.body)
          for (const V of M)
            V.removedNodes.length > 0 && Jn(u);
      };
      document.addEventListener("focusin", w), document.addEventListener("focusout", _);
      const R = new MutationObserver(A);
      return u && R.observe(u, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", w), document.removeEventListener("focusout", _), R.disconnect();
      };
    }
  }, [o, u, b.paused]), S.useEffect(() => {
    if (u) {
      Sh.add(b);
      const w = document.activeElement;
      if (!u.contains(w)) {
        const A = new CustomEvent(zl, wh);
        u.addEventListener(zl, h), u.dispatchEvent(A), A.defaultPrevented || (r1(l1(xm(u)), { select: !0 }), document.activeElement === w && Jn(u));
      }
      return () => {
        u.removeEventListener(zl, h), setTimeout(() => {
          const A = new CustomEvent(Gl, wh);
          u.addEventListener(Gl, p), u.dispatchEvent(A), A.defaultPrevented || Jn(w ?? document.body, { select: !0 }), u.removeEventListener(Gl, p), Sh.remove(b);
        }, 0);
      };
    }
  }, [u, h, p, b]);
  const T = S.useCallback(
    (w) => {
      if (!r && !o || b.paused)
        return;
      const _ = w.key === "Tab" && !w.altKey && !w.ctrlKey && !w.metaKey, A = document.activeElement;
      if (_ && A) {
        const R = w.currentTarget, [M, I] = i1(R);
        M && I ? !w.shiftKey && A === I ? (w.preventDefault(), r && Jn(M, { select: !0 })) : w.shiftKey && A === M && (w.preventDefault(), r && Jn(I, { select: !0 })) : A === R && w.preventDefault();
      }
    },
    [r, o, b.paused]
  );
  return /* @__PURE__ */ C.jsx(Ge.div, { tabIndex: -1, ...l, ref: v, onKeyDown: T });
});
ym.displayName = n1;
function r1(e, { select: t = !1 } = {}) {
  const r = document.activeElement;
  for (const o of e)
    if (Jn(o, { select: t }), document.activeElement !== r)
      return;
}
function i1(e) {
  const t = xm(e), r = bh(t, e), o = bh(t.reverse(), e);
  return [r, o];
}
function xm(e) {
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
function bh(e, t) {
  for (const r of e)
    if (!o1(r, { upTo: t }))
      return r;
}
function o1(e, { upTo: t }) {
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
function s1(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Jn(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const r = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== r && s1(e) && t && e.select();
  }
}
var Sh = a1();
function a1() {
  let e = [];
  return {
    add(t) {
      const r = e[0];
      t !== r && (r == null || r.pause()), e = Ch(e, t), e.unshift(t);
    },
    remove(t) {
      var r;
      e = Ch(e, t), (r = e[0]) == null || r.resume();
    }
  };
}
function Ch(e, t) {
  const r = [...e], o = r.indexOf(t);
  return o !== -1 && r.splice(o, 1), r;
}
function l1(e) {
  return e.filter((t) => t.tagName !== "A");
}
var St = globalThis != null && globalThis.document ? S.useLayoutEffect : () => {
}, c1 = S.useId || (() => {
}), u1 = 0;
function na(e) {
  const [t, r] = S.useState(c1());
  return St(() => {
    r((o) => o ?? String(u1++));
  }, [e]), t ? `radix-${t}` : "";
}
const f1 = ["top", "right", "bottom", "left"], tr = Math.min, Vt = Math.max, Ws = Math.round, Ss = Math.floor, dn = (e) => ({
  x: e,
  y: e
}), d1 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, h1 = {
  start: "end",
  end: "start"
};
function gc(e, t, r) {
  return Vt(e, tr(t, r));
}
function Vn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function kn(e) {
  return e.split("-")[0];
}
function bi(e) {
  return e.split("-")[1];
}
function Yc(e) {
  return e === "x" ? "y" : "x";
}
function qc(e) {
  return e === "y" ? "height" : "width";
}
function nr(e) {
  return ["top", "bottom"].includes(kn(e)) ? "y" : "x";
}
function Xc(e) {
  return Yc(nr(e));
}
function p1(e, t, r) {
  r === void 0 && (r = !1);
  const o = bi(e), s = Xc(e), c = qc(s);
  let l = s === "x" ? o === (r ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[c] > t.floating[c] && (l = Us(l)), [l, Us(l)];
}
function m1(e) {
  const t = Us(e);
  return [vc(e), t, vc(t)];
}
function vc(e) {
  return e.replace(/start|end/g, (t) => h1[t]);
}
function g1(e, t, r) {
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
function v1(e, t, r, o) {
  const s = bi(e);
  let c = g1(kn(e), r === "start", o);
  return s && (c = c.map((l) => l + "-" + s), t && (c = c.concat(c.map(vc)))), c;
}
function Us(e) {
  return e.replace(/left|right|bottom|top/g, (t) => d1[t]);
}
function y1(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function wm(e) {
  return typeof e != "number" ? y1(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function $s(e) {
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
function Th(e, t, r) {
  let {
    reference: o,
    floating: s
  } = e;
  const c = nr(t), l = Xc(t), u = qc(l), f = kn(t), h = c === "y", p = o.x + o.width / 2 - s.width / 2, g = o.y + o.height / 2 - s.height / 2, v = o[u] / 2 - s[u] / 2;
  let b;
  switch (f) {
    case "top":
      b = {
        x: p,
        y: o.y - s.height
      };
      break;
    case "bottom":
      b = {
        x: p,
        y: o.y + o.height
      };
      break;
    case "right":
      b = {
        x: o.x + o.width,
        y: g
      };
      break;
    case "left":
      b = {
        x: o.x - s.width,
        y: g
      };
      break;
    default:
      b = {
        x: o.x,
        y: o.y
      };
  }
  switch (bi(t)) {
    case "start":
      b[l] -= v * (r && h ? -1 : 1);
      break;
    case "end":
      b[l] += v * (r && h ? -1 : 1);
      break;
  }
  return b;
}
const x1 = async (e, t, r) => {
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
  } = Th(h, o, f), v = o, b = {}, T = 0;
  for (let w = 0; w < u.length; w++) {
    const {
      name: _,
      fn: A
    } = u[w], {
      x: R,
      y: M,
      data: I,
      reset: V
    } = await A({
      x: p,
      y: g,
      initialPlacement: o,
      placement: v,
      strategy: s,
      middlewareData: b,
      rects: h,
      platform: l,
      elements: {
        reference: e,
        floating: t
      }
    });
    p = R ?? p, g = M ?? g, b = {
      ...b,
      [_]: {
        ...b[_],
        ...I
      }
    }, V && T <= 50 && (T++, typeof V == "object" && (V.placement && (v = V.placement), V.rects && (h = V.rects === !0 ? await l.getElementRects({
      reference: e,
      floating: t,
      strategy: s
    }) : V.rects), {
      x: p,
      y: g
    } = Th(h, v, f)), w = -1);
  }
  return {
    x: p,
    y: g,
    placement: v,
    strategy: s,
    middlewareData: b
  };
};
async function uo(e, t) {
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
    altBoundary: v = !1,
    padding: b = 0
  } = Vn(t, e), T = wm(b), _ = u[v ? g === "floating" ? "reference" : "floating" : g], A = $s(await c.getClippingRect({
    element: (r = await (c.isElement == null ? void 0 : c.isElement(_))) == null || r ? _ : _.contextElement || await (c.getDocumentElement == null ? void 0 : c.getDocumentElement(u.floating)),
    boundary: h,
    rootBoundary: p,
    strategy: f
  })), R = g === "floating" ? {
    x: o,
    y: s,
    width: l.floating.width,
    height: l.floating.height
  } : l.reference, M = await (c.getOffsetParent == null ? void 0 : c.getOffsetParent(u.floating)), I = await (c.isElement == null ? void 0 : c.isElement(M)) ? await (c.getScale == null ? void 0 : c.getScale(M)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, V = $s(c.convertOffsetParentRelativeRectToViewportRelativeRect ? await c.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: u,
    rect: R,
    offsetParent: M,
    strategy: f
  }) : R);
  return {
    top: (A.top - V.top + T.top) / I.y,
    bottom: (V.bottom - A.bottom + T.bottom) / I.y,
    left: (A.left - V.left + T.left) / I.x,
    right: (V.right - A.right + T.right) / I.x
  };
}
const w1 = (e) => ({
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
    } = Vn(e, t) || {};
    if (h == null)
      return {};
    const g = wm(p), v = {
      x: r,
      y: o
    }, b = Xc(s), T = qc(b), w = await l.getDimensions(h), _ = b === "y", A = _ ? "top" : "left", R = _ ? "bottom" : "right", M = _ ? "clientHeight" : "clientWidth", I = c.reference[T] + c.reference[b] - v[b] - c.floating[T], V = v[b] - c.reference[b], H = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(h));
    let U = H ? H[M] : 0;
    (!U || !await (l.isElement == null ? void 0 : l.isElement(H))) && (U = u.floating[M] || c.floating[T]);
    const $ = I / 2 - V / 2, J = U / 2 - w[T] / 2 - 1, ee = tr(g[A], J), he = tr(g[R], J), Z = ee, ae = U - w[T] - he, te = U / 2 - w[T] / 2 + $, _e = gc(Z, te, ae), le = !f.arrow && bi(s) != null && te !== _e && c.reference[T] / 2 - (te < Z ? ee : he) - w[T] / 2 < 0, X = le ? te < Z ? te - Z : te - ae : 0;
    return {
      [b]: v[b] + X,
      data: {
        [b]: _e,
        centerOffset: te - _e - X,
        ...le && {
          alignmentOffset: X
        }
      },
      reset: le
    };
  }
}), b1 = function(e) {
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
        fallbackPlacements: v,
        fallbackStrategy: b = "bestFit",
        fallbackAxisSideDirection: T = "none",
        flipAlignment: w = !0,
        ..._
      } = Vn(e, t);
      if ((r = c.arrow) != null && r.alignmentOffset)
        return {};
      const A = kn(s), R = nr(u), M = kn(u) === u, I = await (f.isRTL == null ? void 0 : f.isRTL(h.floating)), V = v || (M || !w ? [Us(u)] : m1(u)), H = T !== "none";
      !v && H && V.push(...v1(u, w, T, I));
      const U = [u, ...V], $ = await uo(t, _), J = [];
      let ee = ((o = c.flip) == null ? void 0 : o.overflows) || [];
      if (p && J.push($[A]), g) {
        const te = p1(s, l, I);
        J.push($[te[0]], $[te[1]]);
      }
      if (ee = [...ee, {
        placement: s,
        overflows: J
      }], !J.every((te) => te <= 0)) {
        var he, Z;
        const te = (((he = c.flip) == null ? void 0 : he.index) || 0) + 1, _e = U[te];
        if (_e)
          return {
            data: {
              index: te,
              overflows: ee
            },
            reset: {
              placement: _e
            }
          };
        let le = (Z = ee.filter((X) => X.overflows[0] <= 0).sort((X, K) => X.overflows[1] - K.overflows[1])[0]) == null ? void 0 : Z.placement;
        if (!le)
          switch (b) {
            case "bestFit": {
              var ae;
              const X = (ae = ee.filter((K) => {
                if (H) {
                  const pe = nr(K.placement);
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
function _h(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Ph(e) {
  return f1.some((t) => e[t] >= 0);
}
const S1 = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: r
      } = t, {
        strategy: o = "referenceHidden",
        ...s
      } = Vn(e, t);
      switch (o) {
        case "referenceHidden": {
          const c = await uo(t, {
            ...s,
            elementContext: "reference"
          }), l = _h(c, r.reference);
          return {
            data: {
              referenceHiddenOffsets: l,
              referenceHidden: Ph(l)
            }
          };
        }
        case "escaped": {
          const c = await uo(t, {
            ...s,
            altBoundary: !0
          }), l = _h(c, r.floating);
          return {
            data: {
              escapedOffsets: l,
              escaped: Ph(l)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function C1(e, t) {
  const {
    placement: r,
    platform: o,
    elements: s
  } = e, c = await (o.isRTL == null ? void 0 : o.isRTL(s.floating)), l = kn(r), u = bi(r), f = nr(r) === "y", h = ["left", "top"].includes(l) ? -1 : 1, p = c && f ? -1 : 1, g = Vn(t, e);
  let {
    mainAxis: v,
    crossAxis: b,
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
  return u && typeof T == "number" && (b = u === "end" ? T * -1 : T), f ? {
    x: b * p,
    y: v * h
  } : {
    x: v * h,
    y: b * p
  };
}
const T1 = function(e) {
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
      } = t, f = await C1(t, e);
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
}, _1 = function(e) {
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
      } = Vn(e, t), h = {
        x: r,
        y: o
      }, p = await uo(t, f), g = nr(kn(s)), v = Yc(g);
      let b = h[v], T = h[g];
      if (c) {
        const _ = v === "y" ? "top" : "left", A = v === "y" ? "bottom" : "right", R = b + p[_], M = b - p[A];
        b = gc(R, b, M);
      }
      if (l) {
        const _ = g === "y" ? "top" : "left", A = g === "y" ? "bottom" : "right", R = T + p[_], M = T - p[A];
        T = gc(R, T, M);
      }
      const w = u.fn({
        ...t,
        [v]: b,
        [g]: T
      });
      return {
        ...w,
        data: {
          x: w.x - r,
          y: w.y - o,
          enabled: {
            [v]: c,
            [g]: l
          }
        }
      };
    }
  };
}, P1 = function(e) {
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
      } = Vn(e, t), p = {
        x: r,
        y: o
      }, g = nr(s), v = Yc(g);
      let b = p[v], T = p[g];
      const w = Vn(u, t), _ = typeof w == "number" ? {
        mainAxis: w,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...w
      };
      if (f) {
        const M = v === "y" ? "height" : "width", I = c.reference[v] - c.floating[M] + _.mainAxis, V = c.reference[v] + c.reference[M] - _.mainAxis;
        b < I ? b = I : b > V && (b = V);
      }
      if (h) {
        var A, R;
        const M = v === "y" ? "width" : "height", I = ["top", "left"].includes(kn(s)), V = c.reference[g] - c.floating[M] + (I && ((A = l.offset) == null ? void 0 : A[g]) || 0) + (I ? 0 : _.crossAxis), H = c.reference[g] + c.reference[M] + (I ? 0 : ((R = l.offset) == null ? void 0 : R[g]) || 0) - (I ? _.crossAxis : 0);
        T < V ? T = V : T > H && (T = H);
      }
      return {
        [v]: b,
        [g]: T
      };
    }
  };
}, A1 = function(e) {
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
      } = Vn(e, t), p = await uo(t, h), g = kn(s), v = bi(s), b = nr(s) === "y", {
        width: T,
        height: w
      } = c.floating;
      let _, A;
      g === "top" || g === "bottom" ? (_ = g, A = v === (await (l.isRTL == null ? void 0 : l.isRTL(u.floating)) ? "start" : "end") ? "left" : "right") : (A = g, _ = v === "end" ? "top" : "bottom");
      const R = w - p.top - p.bottom, M = T - p.left - p.right, I = tr(w - p[_], R), V = tr(T - p[A], M), H = !t.middlewareData.shift;
      let U = I, $ = V;
      if ((r = t.middlewareData.shift) != null && r.enabled.x && ($ = M), (o = t.middlewareData.shift) != null && o.enabled.y && (U = R), H && !v) {
        const ee = Vt(p.left, 0), he = Vt(p.right, 0), Z = Vt(p.top, 0), ae = Vt(p.bottom, 0);
        b ? $ = T - 2 * (ee !== 0 || he !== 0 ? ee + he : Vt(p.left, p.right)) : U = w - 2 * (Z !== 0 || ae !== 0 ? Z + ae : Vt(p.top, p.bottom));
      }
      await f({
        ...t,
        availableWidth: $,
        availableHeight: U
      });
      const J = await l.getDimensions(u.floating);
      return T !== J.width || w !== J.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function ra() {
  return typeof window < "u";
}
function Si(e) {
  return bm(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function kt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function vn(e) {
  var t;
  return (t = (bm(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function bm(e) {
  return ra() ? e instanceof Node || e instanceof kt(e).Node : !1;
}
function on(e) {
  return ra() ? e instanceof Element || e instanceof kt(e).Element : !1;
}
function gn(e) {
  return ra() ? e instanceof HTMLElement || e instanceof kt(e).HTMLElement : !1;
}
function Ah(e) {
  return !ra() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof kt(e).ShadowRoot;
}
function xo(e) {
  const {
    overflow: t,
    overflowX: r,
    overflowY: o,
    display: s
  } = sn(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + r) && !["inline", "contents"].includes(s);
}
function E1(e) {
  return ["table", "td", "th"].includes(Si(e));
}
function ia(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function Zc(e) {
  const t = Jc(), r = on(e) ? sn(e) : e;
  return r.transform !== "none" || r.perspective !== "none" || (r.containerType ? r.containerType !== "normal" : !1) || !t && (r.backdropFilter ? r.backdropFilter !== "none" : !1) || !t && (r.filter ? r.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((o) => (r.willChange || "").includes(o)) || ["paint", "layout", "strict", "content"].some((o) => (r.contain || "").includes(o));
}
function R1(e) {
  let t = rr(e);
  for (; gn(t) && !pi(t); ) {
    if (Zc(t))
      return t;
    if (ia(t))
      return null;
    t = rr(t);
  }
  return null;
}
function Jc() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function pi(e) {
  return ["html", "body", "#document"].includes(Si(e));
}
function sn(e) {
  return kt(e).getComputedStyle(e);
}
function oa(e) {
  return on(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function rr(e) {
  if (Si(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Ah(e) && e.host || // Fallback.
    vn(e)
  );
  return Ah(t) ? t.host : t;
}
function Sm(e) {
  const t = rr(e);
  return pi(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : gn(t) && xo(t) ? t : Sm(t);
}
function fo(e, t, r) {
  var o;
  t === void 0 && (t = []), r === void 0 && (r = !0);
  const s = Sm(e), c = s === ((o = e.ownerDocument) == null ? void 0 : o.body), l = kt(s);
  if (c) {
    const u = yc(l);
    return t.concat(l, l.visualViewport || [], xo(s) ? s : [], u && r ? fo(u) : []);
  }
  return t.concat(s, fo(s, [], r));
}
function yc(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Cm(e) {
  const t = sn(e);
  let r = parseFloat(t.width) || 0, o = parseFloat(t.height) || 0;
  const s = gn(e), c = s ? e.offsetWidth : r, l = s ? e.offsetHeight : o, u = Ws(r) !== c || Ws(o) !== l;
  return u && (r = c, o = l), {
    width: r,
    height: o,
    $: u
  };
}
function Qc(e) {
  return on(e) ? e : e.contextElement;
}
function li(e) {
  const t = Qc(e);
  if (!gn(t))
    return dn(1);
  const r = t.getBoundingClientRect(), {
    width: o,
    height: s,
    $: c
  } = Cm(t);
  let l = (c ? Ws(r.width) : r.width) / o, u = (c ? Ws(r.height) : r.height) / s;
  return (!l || !Number.isFinite(l)) && (l = 1), (!u || !Number.isFinite(u)) && (u = 1), {
    x: l,
    y: u
  };
}
const O1 = /* @__PURE__ */ dn(0);
function Tm(e) {
  const t = kt(e);
  return !Jc() || !t.visualViewport ? O1 : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function M1(e, t, r) {
  return t === void 0 && (t = !1), !r || t && r !== kt(e) ? !1 : t;
}
function Or(e, t, r, o) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  const s = e.getBoundingClientRect(), c = Qc(e);
  let l = dn(1);
  t && (o ? on(o) && (l = li(o)) : l = li(e));
  const u = M1(c, r, o) ? Tm(c) : dn(0);
  let f = (s.left + u.x) / l.x, h = (s.top + u.y) / l.y, p = s.width / l.x, g = s.height / l.y;
  if (c) {
    const v = kt(c), b = o && on(o) ? kt(o) : o;
    let T = v, w = yc(T);
    for (; w && o && b !== T; ) {
      const _ = li(w), A = w.getBoundingClientRect(), R = sn(w), M = A.left + (w.clientLeft + parseFloat(R.paddingLeft)) * _.x, I = A.top + (w.clientTop + parseFloat(R.paddingTop)) * _.y;
      f *= _.x, h *= _.y, p *= _.x, g *= _.y, f += M, h += I, T = kt(w), w = yc(T);
    }
  }
  return $s({
    width: p,
    height: g,
    x: f,
    y: h
  });
}
function eu(e, t) {
  const r = oa(e).scrollLeft;
  return t ? t.left + r : Or(vn(e)).left + r;
}
function _m(e, t, r) {
  r === void 0 && (r = !1);
  const o = e.getBoundingClientRect(), s = o.left + t.scrollLeft - (r ? 0 : (
    // RTL <body> scrollbar.
    eu(e, o)
  )), c = o.top + t.scrollTop;
  return {
    x: s,
    y: c
  };
}
function L1(e) {
  let {
    elements: t,
    rect: r,
    offsetParent: o,
    strategy: s
  } = e;
  const c = s === "fixed", l = vn(o), u = t ? ia(t.floating) : !1;
  if (o === l || u && c)
    return r;
  let f = {
    scrollLeft: 0,
    scrollTop: 0
  }, h = dn(1);
  const p = dn(0), g = gn(o);
  if ((g || !g && !c) && ((Si(o) !== "body" || xo(l)) && (f = oa(o)), gn(o))) {
    const b = Or(o);
    h = li(o), p.x = b.x + o.clientLeft, p.y = b.y + o.clientTop;
  }
  const v = l && !g && !c ? _m(l, f, !0) : dn(0);
  return {
    width: r.width * h.x,
    height: r.height * h.y,
    x: r.x * h.x - f.scrollLeft * h.x + p.x + v.x,
    y: r.y * h.y - f.scrollTop * h.y + p.y + v.y
  };
}
function N1(e) {
  return Array.from(e.getClientRects());
}
function D1(e) {
  const t = vn(e), r = oa(e), o = e.ownerDocument.body, s = Vt(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth), c = Vt(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight);
  let l = -r.scrollLeft + eu(e);
  const u = -r.scrollTop;
  return sn(o).direction === "rtl" && (l += Vt(t.clientWidth, o.clientWidth) - s), {
    width: s,
    height: c,
    x: l,
    y: u
  };
}
function I1(e, t) {
  const r = kt(e), o = vn(e), s = r.visualViewport;
  let c = o.clientWidth, l = o.clientHeight, u = 0, f = 0;
  if (s) {
    c = s.width, l = s.height;
    const h = Jc();
    (!h || h && t === "fixed") && (u = s.offsetLeft, f = s.offsetTop);
  }
  return {
    width: c,
    height: l,
    x: u,
    y: f
  };
}
function V1(e, t) {
  const r = Or(e, !0, t === "fixed"), o = r.top + e.clientTop, s = r.left + e.clientLeft, c = gn(e) ? li(e) : dn(1), l = e.clientWidth * c.x, u = e.clientHeight * c.y, f = s * c.x, h = o * c.y;
  return {
    width: l,
    height: u,
    x: f,
    y: h
  };
}
function Eh(e, t, r) {
  let o;
  if (t === "viewport")
    o = I1(e, r);
  else if (t === "document")
    o = D1(vn(e));
  else if (on(t))
    o = V1(t, r);
  else {
    const s = Tm(e);
    o = {
      x: t.x - s.x,
      y: t.y - s.y,
      width: t.width,
      height: t.height
    };
  }
  return $s(o);
}
function Pm(e, t) {
  const r = rr(e);
  return r === t || !on(r) || pi(r) ? !1 : sn(r).position === "fixed" || Pm(r, t);
}
function k1(e, t) {
  const r = t.get(e);
  if (r)
    return r;
  let o = fo(e, [], !1).filter((u) => on(u) && Si(u) !== "body"), s = null;
  const c = sn(e).position === "fixed";
  let l = c ? rr(e) : e;
  for (; on(l) && !pi(l); ) {
    const u = sn(l), f = Zc(l);
    !f && u.position === "fixed" && (s = null), (c ? !f && !s : !f && u.position === "static" && !!s && ["absolute", "fixed"].includes(s.position) || xo(l) && !f && Pm(e, l)) ? o = o.filter((p) => p !== l) : s = u, l = rr(l);
  }
  return t.set(e, o), o;
}
function j1(e) {
  let {
    element: t,
    boundary: r,
    rootBoundary: o,
    strategy: s
  } = e;
  const l = [...r === "clippingAncestors" ? ia(t) ? [] : k1(t, this._c) : [].concat(r), o], u = l[0], f = l.reduce((h, p) => {
    const g = Eh(t, p, s);
    return h.top = Vt(g.top, h.top), h.right = tr(g.right, h.right), h.bottom = tr(g.bottom, h.bottom), h.left = Vt(g.left, h.left), h;
  }, Eh(t, u, s));
  return {
    width: f.right - f.left,
    height: f.bottom - f.top,
    x: f.left,
    y: f.top
  };
}
function F1(e) {
  const {
    width: t,
    height: r
  } = Cm(e);
  return {
    width: t,
    height: r
  };
}
function B1(e, t, r) {
  const o = gn(t), s = vn(t), c = r === "fixed", l = Or(e, !0, c, t);
  let u = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const f = dn(0);
  if (o || !o && !c)
    if ((Si(t) !== "body" || xo(s)) && (u = oa(t)), o) {
      const v = Or(t, !0, c, t);
      f.x = v.x + t.clientLeft, f.y = v.y + t.clientTop;
    } else
      s && (f.x = eu(s));
  const h = s && !o && !c ? _m(s, u) : dn(0), p = l.left + u.scrollLeft - f.x - h.x, g = l.top + u.scrollTop - f.y - h.y;
  return {
    x: p,
    y: g,
    width: l.width,
    height: l.height
  };
}
function Kl(e) {
  return sn(e).position === "static";
}
function Rh(e, t) {
  if (!gn(e) || sn(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let r = e.offsetParent;
  return vn(e) === r && (r = r.ownerDocument.body), r;
}
function Am(e, t) {
  const r = kt(e);
  if (ia(e))
    return r;
  if (!gn(e)) {
    let s = rr(e);
    for (; s && !pi(s); ) {
      if (on(s) && !Kl(s))
        return s;
      s = rr(s);
    }
    return r;
  }
  let o = Rh(e, t);
  for (; o && E1(o) && Kl(o); )
    o = Rh(o, t);
  return o && pi(o) && Kl(o) && !Zc(o) ? r : o || R1(e) || r;
}
const W1 = async function(e) {
  const t = this.getOffsetParent || Am, r = this.getDimensions, o = await r(e.floating);
  return {
    reference: B1(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: o.width,
      height: o.height
    }
  };
};
function U1(e) {
  return sn(e).direction === "rtl";
}
const $1 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: L1,
  getDocumentElement: vn,
  getClippingRect: j1,
  getOffsetParent: Am,
  getElementRects: W1,
  getClientRects: N1,
  getDimensions: F1,
  getScale: li,
  isElement: on,
  isRTL: U1
};
function H1(e, t) {
  let r = null, o;
  const s = vn(e);
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
      height: v
    } = e.getBoundingClientRect();
    if (u || t(), !g || !v)
      return;
    const b = Ss(p), T = Ss(s.clientWidth - (h + g)), w = Ss(s.clientHeight - (p + v)), _ = Ss(h), R = {
      rootMargin: -b + "px " + -T + "px " + -w + "px " + -_ + "px",
      threshold: Vt(0, tr(1, f)) || 1
    };
    let M = !0;
    function I(V) {
      const H = V[0].intersectionRatio;
      if (H !== f) {
        if (!M)
          return l();
        H ? l(!1, H) : o = setTimeout(() => {
          l(!1, 1e-7);
        }, 1e3);
      }
      M = !1;
    }
    try {
      r = new IntersectionObserver(I, {
        ...R,
        // Handle <iframe>s
        root: s.ownerDocument
      });
    } catch {
      r = new IntersectionObserver(I, R);
    }
    r.observe(e);
  }
  return l(!0), c;
}
function z1(e, t, r, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: s = !0,
    ancestorResize: c = !0,
    elementResize: l = typeof ResizeObserver == "function",
    layoutShift: u = typeof IntersectionObserver == "function",
    animationFrame: f = !1
  } = o, h = Qc(e), p = s || c ? [...h ? fo(h) : [], ...fo(t)] : [];
  p.forEach((A) => {
    s && A.addEventListener("scroll", r, {
      passive: !0
    }), c && A.addEventListener("resize", r);
  });
  const g = h && u ? H1(h, r) : null;
  let v = -1, b = null;
  l && (b = new ResizeObserver((A) => {
    let [R] = A;
    R && R.target === h && b && (b.unobserve(t), cancelAnimationFrame(v), v = requestAnimationFrame(() => {
      var M;
      (M = b) == null || M.observe(t);
    })), r();
  }), h && !f && b.observe(h), b.observe(t));
  let T, w = f ? Or(e) : null;
  f && _();
  function _() {
    const A = Or(e);
    w && (A.x !== w.x || A.y !== w.y || A.width !== w.width || A.height !== w.height) && r(), w = A, T = requestAnimationFrame(_);
  }
  return r(), () => {
    var A;
    p.forEach((R) => {
      s && R.removeEventListener("scroll", r), c && R.removeEventListener("resize", r);
    }), g == null || g(), (A = b) == null || A.disconnect(), b = null, f && cancelAnimationFrame(T);
  };
}
const G1 = T1, K1 = _1, Y1 = b1, q1 = A1, X1 = S1, Oh = w1, Z1 = P1, J1 = (e, t, r) => {
  const o = /* @__PURE__ */ new Map(), s = {
    platform: $1,
    ...r
  }, c = {
    ...s.platform,
    _c: o
  };
  return x1(e, t, {
    ...s,
    platform: c
  });
};
var Ls = typeof document < "u" ? em : vo;
function Hs(e, t) {
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
        if (!Hs(e[o], t[o]))
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
      if (!(c === "_owner" && e.$$typeof) && !Hs(e[c], t[c]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Em(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Mh(e, t) {
  const r = Em(e);
  return Math.round(t * r) / r;
}
function Yl(e) {
  const t = S.useRef(e);
  return Ls(() => {
    t.current = e;
  }), t;
}
function Q1(e) {
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
  } = e, [p, g] = S.useState({
    x: 0,
    y: 0,
    strategy: r,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [v, b] = S.useState(o);
  Hs(v, o) || b(o);
  const [T, w] = S.useState(null), [_, A] = S.useState(null), R = S.useCallback((K) => {
    K !== H.current && (H.current = K, w(K));
  }, []), M = S.useCallback((K) => {
    K !== U.current && (U.current = K, A(K));
  }, []), I = c || T, V = l || _, H = S.useRef(null), U = S.useRef(null), $ = S.useRef(p), J = f != null, ee = Yl(f), he = Yl(s), Z = Yl(h), ae = S.useCallback(() => {
    if (!H.current || !U.current)
      return;
    const K = {
      placement: t,
      strategy: r,
      middleware: v
    };
    he.current && (K.platform = he.current), J1(H.current, U.current, K).then((pe) => {
      const Me = {
        ...pe,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: Z.current !== !1
      };
      te.current && !Hs($.current, Me) && ($.current = Me, ta.flushSync(() => {
        g(Me);
      }));
    });
  }, [v, t, r, he, Z]);
  Ls(() => {
    h === !1 && $.current.isPositioned && ($.current.isPositioned = !1, g((K) => ({
      ...K,
      isPositioned: !1
    })));
  }, [h]);
  const te = S.useRef(!1);
  Ls(() => (te.current = !0, () => {
    te.current = !1;
  }), []), Ls(() => {
    if (I && (H.current = I), V && (U.current = V), I && V) {
      if (ee.current)
        return ee.current(I, V, ae);
      ae();
    }
  }, [I, V, ae, ee, J]);
  const _e = S.useMemo(() => ({
    reference: H,
    floating: U,
    setReference: R,
    setFloating: M
  }), [R, M]), le = S.useMemo(() => ({
    reference: I,
    floating: V
  }), [I, V]), X = S.useMemo(() => {
    const K = {
      position: r,
      left: 0,
      top: 0
    };
    if (!le.floating)
      return K;
    const pe = Mh(le.floating, p.x), Me = Mh(le.floating, p.y);
    return u ? {
      ...K,
      transform: "translate(" + pe + "px, " + Me + "px)",
      ...Em(le.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: r,
      left: pe,
      top: Me
    };
  }, [r, u, le.floating, p.x, p.y]);
  return S.useMemo(() => ({
    ...p,
    update: ae,
    refs: _e,
    elements: le,
    floatingStyles: X
  }), [p, ae, _e, le, X]);
}
const eP = (e) => {
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
      return o && t(o) ? o.current != null ? Oh({
        element: o.current,
        padding: s
      }).fn(r) : {} : o ? Oh({
        element: o,
        padding: s
      }).fn(r) : {};
    }
  };
}, tP = (e, t) => ({
  ...G1(e),
  options: [e, t]
}), nP = (e, t) => ({
  ...K1(e),
  options: [e, t]
}), rP = (e, t) => ({
  ...Z1(e),
  options: [e, t]
}), iP = (e, t) => ({
  ...Y1(e),
  options: [e, t]
}), oP = (e, t) => ({
  ...q1(e),
  options: [e, t]
}), sP = (e, t) => ({
  ...X1(e),
  options: [e, t]
}), aP = (e, t) => ({
  ...eP(e),
  options: [e, t]
});
var lP = "Arrow", Rm = S.forwardRef((e, t) => {
  const { children: r, width: o = 10, height: s = 5, ...c } = e;
  return /* @__PURE__ */ C.jsx(
    Ge.svg,
    {
      ...c,
      ref: t,
      width: o,
      height: s,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? r : /* @__PURE__ */ C.jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
Rm.displayName = lP;
var cP = Rm;
function uP(e, t = []) {
  let r = [];
  function o(c, l) {
    const u = S.createContext(l), f = r.length;
    r = [...r, l];
    function h(g) {
      const { scope: v, children: b, ...T } = g, w = (v == null ? void 0 : v[e][f]) || u, _ = S.useMemo(() => T, Object.values(T));
      return /* @__PURE__ */ C.jsx(w.Provider, { value: _, children: b });
    }
    function p(g, v) {
      const b = (v == null ? void 0 : v[e][f]) || u, T = S.useContext(b);
      if (T)
        return T;
      if (l !== void 0)
        return l;
      throw new Error(`\`${g}\` must be used within \`${c}\``);
    }
    return h.displayName = c + "Provider", [h, p];
  }
  const s = () => {
    const c = r.map((l) => S.createContext(l));
    return function(u) {
      const f = (u == null ? void 0 : u[e]) || c;
      return S.useMemo(
        () => ({ [`__scope${e}`]: { ...u, [e]: f } }),
        [u, f]
      );
    };
  };
  return s.scopeName = e, [o, fP(s, ...t)];
}
function fP(...e) {
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
      return S.useMemo(() => ({ [`__scope${t.scopeName}`]: l }), [l]);
    };
  };
  return r.scopeName = t.scopeName, r;
}
function dP(e) {
  const [t, r] = S.useState(void 0);
  return St(() => {
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
var tu = "Popper", [Om, sa] = uP(tu), [hP, Mm] = Om(tu), Lm = (e) => {
  const { __scopePopper: t, children: r } = e, [o, s] = S.useState(null);
  return /* @__PURE__ */ C.jsx(hP, { scope: t, anchor: o, onAnchorChange: s, children: r });
};
Lm.displayName = tu;
var Nm = "PopperAnchor", Dm = S.forwardRef(
  (e, t) => {
    const { __scopePopper: r, virtualRef: o, ...s } = e, c = Mm(Nm, r), l = S.useRef(null), u = Je(t, l);
    return S.useEffect(() => {
      c.onAnchorChange((o == null ? void 0 : o.current) || l.current);
    }), o ? null : /* @__PURE__ */ C.jsx(Ge.div, { ...s, ref: u });
  }
);
Dm.displayName = Nm;
var nu = "PopperContent", [pP, mP] = Om(nu), Im = S.forwardRef(
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
      hideWhenDetached: v = !1,
      updatePositionStrategy: b = "optimized",
      onPlaced: T,
      ...w
    } = e, _ = Mm(nu, r), [A, R] = S.useState(null), M = Je(t, (tt) => R(tt)), [I, V] = S.useState(null), H = dP(I), U = (H == null ? void 0 : H.width) ?? 0, $ = (H == null ? void 0 : H.height) ?? 0, J = o + (c !== "center" ? "-" + c : ""), ee = typeof p == "number" ? p : { top: 0, right: 0, bottom: 0, left: 0, ...p }, he = Array.isArray(h) ? h : [h], Z = he.length > 0, ae = {
      padding: ee,
      boundary: he.filter(vP),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: Z
    }, { refs: te, floatingStyles: _e, placement: le, isPositioned: X, middlewareData: K } = Q1({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: J,
      whileElementsMounted: (...tt) => z1(...tt, {
        animationFrame: b === "always"
      }),
      elements: {
        reference: _.anchor
      },
      middleware: [
        tP({ mainAxis: s + $, alignmentAxis: l }),
        f && nP({
          mainAxis: !0,
          crossAxis: !1,
          limiter: g === "partial" ? rP() : void 0,
          ...ae
        }),
        f && iP({ ...ae }),
        oP({
          ...ae,
          apply: ({ elements: tt, rects: We, availableWidth: dt, availableHeight: Et }) => {
            const { width: nt, height: dr } = We.reference, Zt = tt.floating.style;
            Zt.setProperty("--radix-popper-available-width", `${dt}px`), Zt.setProperty("--radix-popper-available-height", `${Et}px`), Zt.setProperty("--radix-popper-anchor-width", `${nt}px`), Zt.setProperty("--radix-popper-anchor-height", `${dr}px`);
          }
        }),
        I && aP({ element: I, padding: u }),
        yP({ arrowWidth: U, arrowHeight: $ }),
        v && sP({ strategy: "referenceHidden", ...ae })
      ]
    }), [pe, Me] = jm(le), Pe = In(T);
    St(() => {
      X && (Pe == null || Pe());
    }, [X, Pe]);
    const an = (ne = K.arrow) == null ? void 0 : ne.x, ln = (xe = K.arrow) == null ? void 0 : xe.y, Ft = ((Ve = K.arrow) == null ? void 0 : Ve.centerOffset) !== 0, [yt, ft] = S.useState();
    return St(() => {
      A && ft(window.getComputedStyle(A).zIndex);
    }, [A]), /* @__PURE__ */ C.jsx(
      "div",
      {
        ref: te.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ..._e,
          transform: X ? _e.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: yt,
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
        children: /* @__PURE__ */ C.jsx(
          pP,
          {
            scope: r,
            placedSide: pe,
            onArrowChange: V,
            arrowX: an,
            arrowY: ln,
            shouldHideArrow: Ft,
            children: /* @__PURE__ */ C.jsx(
              Ge.div,
              {
                "data-side": pe,
                "data-align": Me,
                ...w,
                ref: M,
                style: {
                  ...w.style,
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
Im.displayName = nu;
var Vm = "PopperArrow", gP = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, km = S.forwardRef(function(t, r) {
  const { __scopePopper: o, ...s } = t, c = mP(Vm, o), l = gP[c.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ C.jsx(
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
        children: /* @__PURE__ */ C.jsx(
          cP,
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
km.displayName = Vm;
function vP(e) {
  return e !== null;
}
var yP = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var _, A, R;
    const { placement: r, rects: o, middlewareData: s } = t, l = ((_ = s.arrow) == null ? void 0 : _.centerOffset) !== 0, u = l ? 0 : e.arrowWidth, f = l ? 0 : e.arrowHeight, [h, p] = jm(r), g = { start: "0%", center: "50%", end: "100%" }[p], v = (((A = s.arrow) == null ? void 0 : A.x) ?? 0) + u / 2, b = (((R = s.arrow) == null ? void 0 : R.y) ?? 0) + f / 2;
    let T = "", w = "";
    return h === "bottom" ? (T = l ? g : `${v}px`, w = `${-f}px`) : h === "top" ? (T = l ? g : `${v}px`, w = `${o.floating.height + f}px`) : h === "right" ? (T = `${-f}px`, w = l ? g : `${b}px`) : h === "left" && (T = `${o.floating.width + f}px`, w = l ? g : `${b}px`), { data: { x: T, y: w } };
  }
});
function jm(e) {
  const [t, r = "center"] = e.split("-");
  return [t, r];
}
var Fm = Lm, Bm = Dm, Wm = Im, Um = km, xP = "Portal", $m = S.forwardRef((e, t) => {
  var u;
  const { container: r, ...o } = e, [s, c] = S.useState(!1);
  St(() => c(!0), []);
  const l = r || s && ((u = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : u.body);
  return l ? DT.createPortal(/* @__PURE__ */ C.jsx(Ge.div, { ...o, ref: t }), l) : null;
});
$m.displayName = xP;
function xc({
  prop: e,
  defaultProp: t,
  onChange: r = () => {
  }
}) {
  const [o, s] = wP({ defaultProp: t, onChange: r }), c = e !== void 0, l = c ? e : o, u = In(r), f = S.useCallback(
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
function wP({
  defaultProp: e,
  onChange: t
}) {
  const r = S.useState(e), [o] = r, s = S.useRef(o), c = In(t);
  return S.useEffect(() => {
    s.current !== o && (c(o), s.current = o);
  }, [o, s, c]), r;
}
function bP(e) {
  const t = S.useRef({ value: e, previous: e });
  return S.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
var SP = "VisuallyHidden", ru = S.forwardRef(
  (e, t) => /* @__PURE__ */ C.jsx(
    Ge.span,
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
ru.displayName = SP;
var CP = ru, TP = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Jr = /* @__PURE__ */ new WeakMap(), Cs = /* @__PURE__ */ new WeakMap(), Ts = {}, ql = 0, Hm = function(e) {
  return e && (e.host || Hm(e.parentNode));
}, _P = function(e, t) {
  return t.map(function(r) {
    if (e.contains(r))
      return r;
    var o = Hm(r);
    return o && e.contains(o) ? o : (console.error("aria-hidden", r, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(r) {
    return !!r;
  });
}, PP = function(e, t, r, o) {
  var s = _P(t, Array.isArray(e) ? e : [e]);
  Ts[r] || (Ts[r] = /* @__PURE__ */ new WeakMap());
  var c = Ts[r], l = [], u = /* @__PURE__ */ new Set(), f = new Set(s), h = function(g) {
    !g || u.has(g) || (u.add(g), h(g.parentNode));
  };
  s.forEach(h);
  var p = function(g) {
    !g || f.has(g) || Array.prototype.forEach.call(g.children, function(v) {
      if (u.has(v))
        p(v);
      else
        try {
          var b = v.getAttribute(o), T = b !== null && b !== "false", w = (Jr.get(v) || 0) + 1, _ = (c.get(v) || 0) + 1;
          Jr.set(v, w), c.set(v, _), l.push(v), w === 1 && T && Cs.set(v, !0), _ === 1 && v.setAttribute(r, "true"), T || v.setAttribute(o, "true");
        } catch (A) {
          console.error("aria-hidden: cannot operate on ", v, A);
        }
    });
  };
  return p(t), u.clear(), ql++, function() {
    l.forEach(function(g) {
      var v = Jr.get(g) - 1, b = c.get(g) - 1;
      Jr.set(g, v), c.set(g, b), v || (Cs.has(g) || g.removeAttribute(o), Cs.delete(g)), b || g.removeAttribute(r);
    }), ql--, ql || (Jr = /* @__PURE__ */ new WeakMap(), Jr = /* @__PURE__ */ new WeakMap(), Cs = /* @__PURE__ */ new WeakMap(), Ts = {});
  };
}, AP = function(e, t, r) {
  r === void 0 && (r = "data-aria-hidden");
  var o = Array.from(Array.isArray(e) ? e : [e]), s = TP(e);
  return s ? (o.push.apply(o, Array.from(s.querySelectorAll("[aria-live]"))), PP(o, s, r, "aria-hidden")) : function() {
    return null;
  };
}, er = function() {
  return er = Object.assign || function(t) {
    for (var r, o = 1, s = arguments.length; o < s; o++) {
      r = arguments[o];
      for (var c in r)
        Object.prototype.hasOwnProperty.call(r, c) && (t[c] = r[c]);
    }
    return t;
  }, er.apply(this, arguments);
};
function EP(e, t) {
  var r = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (r[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, o = Object.getOwnPropertySymbols(e); s < o.length; s++)
      t.indexOf(o[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[s]) && (r[o[s]] = e[o[s]]);
  return r;
}
function RP(e, t, r) {
  if (r || arguments.length === 2)
    for (var o = 0, s = t.length, c; o < s; o++)
      (c || !(o in t)) && (c || (c = Array.prototype.slice.call(t, 0, o)), c[o] = t[o]);
  return e.concat(c || Array.prototype.slice.call(t));
}
var Ns = "right-scroll-bar-position", Ds = "width-before-scroll-bar", OP = "with-scroll-bars-hidden", MP = "--removed-body-scroll-bar-size";
function Xl(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function LP(e, t) {
  var r = $c(function() {
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
var NP = typeof window < "u" ? S.useLayoutEffect : S.useEffect, Lh = /* @__PURE__ */ new WeakMap();
function DP(e, t) {
  var r = LP(null, function(o) {
    return e.forEach(function(s) {
      return Xl(s, o);
    });
  });
  return NP(function() {
    var o = Lh.get(r);
    if (o) {
      var s = new Set(o), c = new Set(e), l = r.current;
      s.forEach(function(u) {
        c.has(u) || Xl(u, null);
      }), c.forEach(function(u) {
        s.has(u) || Xl(u, l);
      });
    }
    Lh.set(r, e);
  }, [e]), r;
}
var zs = function() {
  return zs = Object.assign || function(t) {
    for (var r, o = 1, s = arguments.length; o < s; o++) {
      r = arguments[o];
      for (var c in r)
        Object.prototype.hasOwnProperty.call(r, c) && (t[c] = r[c]);
    }
    return t;
  }, zs.apply(this, arguments);
};
function IP(e, t) {
  var r = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (r[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, o = Object.getOwnPropertySymbols(e); s < o.length; s++)
      t.indexOf(o[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[s]) && (r[o[s]] = e[o[s]]);
  return r;
}
function VP(e) {
  return e;
}
function kP(e, t) {
  t === void 0 && (t = VP);
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
function jP(e) {
  e === void 0 && (e = {});
  var t = kP(null);
  return t.options = zs({ async: !0, ssr: !1 }, e), t;
}
var zm = function(e) {
  var t = e.sideCar, r = IP(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var o = t.read();
  if (!o)
    throw new Error("Sidecar medium not found");
  return S.createElement(o, zs({}, r));
};
zm.isSideCarExport = !0;
function FP(e, t) {
  return e.useMedium(t), zm;
}
var Gm = jP(), Zl = function() {
}, aa = S.forwardRef(function(e, t) {
  var r = S.useRef(null), o = S.useState({
    onScrollCapture: Zl,
    onWheelCapture: Zl,
    onTouchMoveCapture: Zl
  }), s = o[0], c = o[1], l = e.forwardProps, u = e.children, f = e.className, h = e.removeScrollBar, p = e.enabled, g = e.shards, v = e.sideCar, b = e.noIsolation, T = e.inert, w = e.allowPinchZoom, _ = e.as, A = _ === void 0 ? "div" : _, R = e.gapMode, M = EP(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), I = v, V = DP([r, t]), H = er(er({}, M), s);
  return S.createElement(
    S.Fragment,
    null,
    p && S.createElement(I, { sideCar: Gm, removeScrollBar: h, shards: g, noIsolation: b, inert: T, setCallbacks: c, allowPinchZoom: !!w, lockRef: r, gapMode: R }),
    l ? S.cloneElement(S.Children.only(u), er(er({}, H), { ref: V })) : S.createElement(A, er({}, H, { className: f, ref: V }), u)
  );
});
aa.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
aa.classNames = {
  fullWidth: Ds,
  zeroRight: Ns
};
var BP = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function WP() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = BP();
  return t && e.setAttribute("nonce", t), e;
}
function UP(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function $P(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var HP = function() {
  var e = 0, t = null;
  return {
    add: function(r) {
      e == 0 && (t = WP()) && (UP(t, r), $P(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, zP = function() {
  var e = HP();
  return function(t, r) {
    S.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && r]);
  };
}, Km = function() {
  var e = zP(), t = function(r) {
    var o = r.styles, s = r.dynamic;
    return e(o, s), null;
  };
  return t;
}, GP = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Jl = function(e) {
  return parseInt(e || "", 10) || 0;
}, KP = function(e) {
  var t = window.getComputedStyle(document.body), r = t[e === "padding" ? "paddingLeft" : "marginLeft"], o = t[e === "padding" ? "paddingTop" : "marginTop"], s = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Jl(r), Jl(o), Jl(s)];
}, YP = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return GP;
  var t = KP(e), r = document.documentElement.clientWidth, o = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, o - r + t[2] - t[0])
  };
}, qP = Km(), ci = "data-scroll-locked", XP = function(e, t, r, o) {
  var s = e.left, c = e.top, l = e.right, u = e.gap;
  return r === void 0 && (r = "margin"), `
  .`.concat(OP, ` {
   overflow: hidden `).concat(o, `;
   padding-right: `).concat(u, "px ").concat(o, `;
  }
  body[`).concat(ci, `] {
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
  
  .`).concat(Ns, ` {
    right: `).concat(u, "px ").concat(o, `;
  }
  
  .`).concat(Ds, ` {
    margin-right: `).concat(u, "px ").concat(o, `;
  }
  
  .`).concat(Ns, " .").concat(Ns, ` {
    right: 0 `).concat(o, `;
  }
  
  .`).concat(Ds, " .").concat(Ds, ` {
    margin-right: 0 `).concat(o, `;
  }
  
  body[`).concat(ci, `] {
    `).concat(MP, ": ").concat(u, `px;
  }
`);
}, Nh = function() {
  var e = parseInt(document.body.getAttribute(ci) || "0", 10);
  return isFinite(e) ? e : 0;
}, ZP = function() {
  S.useEffect(function() {
    return document.body.setAttribute(ci, (Nh() + 1).toString()), function() {
      var e = Nh() - 1;
      e <= 0 ? document.body.removeAttribute(ci) : document.body.setAttribute(ci, e.toString());
    };
  }, []);
}, JP = function(e) {
  var t = e.noRelative, r = e.noImportant, o = e.gapMode, s = o === void 0 ? "margin" : o;
  ZP();
  var c = S.useMemo(function() {
    return YP(s);
  }, [s]);
  return S.createElement(qP, { styles: XP(c, !t, s, r ? "" : "!important") });
}, wc = !1;
if (typeof window < "u")
  try {
    var _s = Object.defineProperty({}, "passive", {
      get: function() {
        return wc = !0, !0;
      }
    });
    window.addEventListener("test", _s, _s), window.removeEventListener("test", _s, _s);
  } catch {
    wc = !1;
  }
var Qr = wc ? { passive: !1 } : !1, QP = function(e) {
  return e.tagName === "TEXTAREA";
}, Ym = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var r = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    r[t] !== "hidden" && // contains scroll inside self
    !(r.overflowY === r.overflowX && !QP(e) && r[t] === "visible")
  );
}, eA = function(e) {
  return Ym(e, "overflowY");
}, tA = function(e) {
  return Ym(e, "overflowX");
}, Dh = function(e, t) {
  var r = t.ownerDocument, o = t;
  do {
    typeof ShadowRoot < "u" && o instanceof ShadowRoot && (o = o.host);
    var s = qm(e, o);
    if (s) {
      var c = Xm(e, o), l = c[1], u = c[2];
      if (l > u)
        return !0;
    }
    o = o.parentNode;
  } while (o && o !== r.body);
  return !1;
}, nA = function(e) {
  var t = e.scrollTop, r = e.scrollHeight, o = e.clientHeight;
  return [
    t,
    r,
    o
  ];
}, rA = function(e) {
  var t = e.scrollLeft, r = e.scrollWidth, o = e.clientWidth;
  return [
    t,
    r,
    o
  ];
}, qm = function(e, t) {
  return e === "v" ? eA(t) : tA(t);
}, Xm = function(e, t) {
  return e === "v" ? nA(t) : rA(t);
}, iA = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, oA = function(e, t, r, o, s) {
  var c = iA(e, window.getComputedStyle(t).direction), l = c * o, u = r.target, f = t.contains(u), h = !1, p = l > 0, g = 0, v = 0;
  do {
    var b = Xm(e, u), T = b[0], w = b[1], _ = b[2], A = w - _ - c * T;
    (T || A) && qm(e, u) && (g += A, v += T), u instanceof ShadowRoot ? u = u.host : u = u.parentNode;
  } while (
    // portaled content
    !f && u !== document.body || // self content
    f && (t.contains(u) || t === u)
  );
  return (p && (Math.abs(g) < 1 || !s) || !p && (Math.abs(v) < 1 || !s)) && (h = !0), h;
}, Ps = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Ih = function(e) {
  return [e.deltaX, e.deltaY];
}, Vh = function(e) {
  return e && "current" in e ? e.current : e;
}, sA = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, aA = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, lA = 0, ei = [];
function cA(e) {
  var t = S.useRef([]), r = S.useRef([0, 0]), o = S.useRef(), s = S.useState(lA++)[0], c = S.useState(Km)[0], l = S.useRef(e);
  S.useEffect(function() {
    l.current = e;
  }, [e]), S.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(s));
      var w = RP([e.lockRef.current], (e.shards || []).map(Vh), !0).filter(Boolean);
      return w.forEach(function(_) {
        return _.classList.add("allow-interactivity-".concat(s));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(s)), w.forEach(function(_) {
          return _.classList.remove("allow-interactivity-".concat(s));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var u = S.useCallback(function(w, _) {
    if ("touches" in w && w.touches.length === 2 || w.type === "wheel" && w.ctrlKey)
      return !l.current.allowPinchZoom;
    var A = Ps(w), R = r.current, M = "deltaX" in w ? w.deltaX : R[0] - A[0], I = "deltaY" in w ? w.deltaY : R[1] - A[1], V, H = w.target, U = Math.abs(M) > Math.abs(I) ? "h" : "v";
    if ("touches" in w && U === "h" && H.type === "range")
      return !1;
    var $ = Dh(U, H);
    if (!$)
      return !0;
    if ($ ? V = U : (V = U === "v" ? "h" : "v", $ = Dh(U, H)), !$)
      return !1;
    if (!o.current && "changedTouches" in w && (M || I) && (o.current = V), !V)
      return !0;
    var J = o.current || V;
    return oA(J, _, w, J === "h" ? M : I, !0);
  }, []), f = S.useCallback(function(w) {
    var _ = w;
    if (!(!ei.length || ei[ei.length - 1] !== c)) {
      var A = "deltaY" in _ ? Ih(_) : Ps(_), R = t.current.filter(function(V) {
        return V.name === _.type && (V.target === _.target || _.target === V.shadowParent) && sA(V.delta, A);
      })[0];
      if (R && R.should) {
        _.cancelable && _.preventDefault();
        return;
      }
      if (!R) {
        var M = (l.current.shards || []).map(Vh).filter(Boolean).filter(function(V) {
          return V.contains(_.target);
        }), I = M.length > 0 ? u(_, M[0]) : !l.current.noIsolation;
        I && _.cancelable && _.preventDefault();
      }
    }
  }, []), h = S.useCallback(function(w, _, A, R) {
    var M = { name: w, delta: _, target: A, should: R, shadowParent: uA(A) };
    t.current.push(M), setTimeout(function() {
      t.current = t.current.filter(function(I) {
        return I !== M;
      });
    }, 1);
  }, []), p = S.useCallback(function(w) {
    r.current = Ps(w), o.current = void 0;
  }, []), g = S.useCallback(function(w) {
    h(w.type, Ih(w), w.target, u(w, e.lockRef.current));
  }, []), v = S.useCallback(function(w) {
    h(w.type, Ps(w), w.target, u(w, e.lockRef.current));
  }, []);
  S.useEffect(function() {
    return ei.push(c), e.setCallbacks({
      onScrollCapture: g,
      onWheelCapture: g,
      onTouchMoveCapture: v
    }), document.addEventListener("wheel", f, Qr), document.addEventListener("touchmove", f, Qr), document.addEventListener("touchstart", p, Qr), function() {
      ei = ei.filter(function(w) {
        return w !== c;
      }), document.removeEventListener("wheel", f, Qr), document.removeEventListener("touchmove", f, Qr), document.removeEventListener("touchstart", p, Qr);
    };
  }, []);
  var b = e.removeScrollBar, T = e.inert;
  return S.createElement(
    S.Fragment,
    null,
    T ? S.createElement(c, { styles: aA(s) }) : null,
    b ? S.createElement(JP, { gapMode: e.gapMode }) : null
  );
}
function uA(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const fA = FP(Gm, cA);
var Zm = S.forwardRef(function(e, t) {
  return S.createElement(aa, er({}, e, { ref: t, sideCar: fA }));
});
Zm.classNames = aa.classNames;
var dA = [" ", "Enter", "ArrowUp", "ArrowDown"], hA = [" ", "Enter"], wo = "Select", [la, ca, pA] = W_(wo), [Ci, YL] = mm(wo, [
  pA,
  sa
]), ua = sa(), [mA, cr] = Ci(wo), [gA, vA] = Ci(wo), Jm = (e) => {
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
    disabled: v,
    required: b,
    form: T
  } = e, w = ua(t), [_, A] = S.useState(null), [R, M] = S.useState(null), [I, V] = S.useState(!1), H = H_(h), [U = !1, $] = xc({
    prop: o,
    defaultProp: s,
    onChange: c
  }), [J, ee] = xc({
    prop: l,
    defaultProp: u,
    onChange: f
  }), he = S.useRef(null), Z = _ ? T || !!_.closest("form") : !0, [ae, te] = S.useState(/* @__PURE__ */ new Set()), _e = Array.from(ae).map((le) => le.props.value).join(";");
  return /* @__PURE__ */ C.jsx(Fm, { ...w, children: /* @__PURE__ */ C.jsxs(
    mA,
    {
      required: b,
      scope: t,
      trigger: _,
      onTriggerChange: A,
      valueNode: R,
      onValueNodeChange: M,
      valueNodeHasChildren: I,
      onValueNodeHasChildrenChange: V,
      contentId: na(),
      value: J,
      onValueChange: ee,
      open: U,
      onOpenChange: $,
      dir: H,
      triggerPointerDownPosRef: he,
      disabled: v,
      children: [
        /* @__PURE__ */ C.jsx(la.Provider, { scope: t, children: /* @__PURE__ */ C.jsx(
          gA,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: S.useCallback((le) => {
              te((X) => new Set(X).add(le));
            }, []),
            onNativeOptionRemove: S.useCallback((le) => {
              te((X) => {
                const K = new Set(X);
                return K.delete(le), K;
              });
            }, []),
            children: r
          }
        ) }),
        Z ? /* @__PURE__ */ C.jsxs(
          Cg,
          {
            "aria-hidden": !0,
            required: b,
            tabIndex: -1,
            name: p,
            autoComplete: g,
            value: J,
            onChange: (le) => ee(le.target.value),
            disabled: v,
            form: T,
            children: [
              J === void 0 ? /* @__PURE__ */ C.jsx("option", { value: "" }) : null,
              Array.from(ae)
            ]
          },
          _e
        ) : null
      ]
    }
  ) });
};
Jm.displayName = wo;
var Qm = "SelectTrigger", eg = S.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, disabled: o = !1, ...s } = e, c = ua(r), l = cr(Qm, r), u = l.disabled || o, f = Je(t, l.onTriggerChange), h = ca(r), p = S.useRef("touch"), [g, v, b] = Tg((w) => {
      const _ = h().filter((M) => !M.disabled), A = _.find((M) => M.value === l.value), R = _g(_, w, A);
      R !== void 0 && l.onValueChange(R.value);
    }), T = (w) => {
      u || (l.onOpenChange(!0), b()), w && (l.triggerPointerDownPosRef.current = {
        x: Math.round(w.pageX),
        y: Math.round(w.pageY)
      });
    };
    return /* @__PURE__ */ C.jsx(Bm, { asChild: !0, ...c, children: /* @__PURE__ */ C.jsx(
      Ge.button,
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
        "data-placeholder": Sg(l.value) ? "" : void 0,
        ...s,
        ref: f,
        onClick: je(s.onClick, (w) => {
          w.currentTarget.focus(), p.current !== "mouse" && T(w);
        }),
        onPointerDown: je(s.onPointerDown, (w) => {
          p.current = w.pointerType;
          const _ = w.target;
          _.hasPointerCapture(w.pointerId) && _.releasePointerCapture(w.pointerId), w.button === 0 && w.ctrlKey === !1 && w.pointerType === "mouse" && (T(w), w.preventDefault());
        }),
        onKeyDown: je(s.onKeyDown, (w) => {
          const _ = g.current !== "";
          !(w.ctrlKey || w.altKey || w.metaKey) && w.key.length === 1 && v(w.key), !(_ && w.key === " ") && dA.includes(w.key) && (T(), w.preventDefault());
        })
      }
    ) });
  }
);
eg.displayName = Qm;
var tg = "SelectValue", ng = S.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, className: o, style: s, children: c, placeholder: l = "", ...u } = e, f = cr(tg, r), { onValueNodeHasChildrenChange: h } = f, p = c !== void 0, g = Je(t, f.onValueNodeChange);
    return St(() => {
      h(p);
    }, [h, p]), /* @__PURE__ */ C.jsx(
      Ge.span,
      {
        ...u,
        ref: g,
        style: { pointerEvents: "none" },
        children: Sg(f.value) ? /* @__PURE__ */ C.jsx(C.Fragment, { children: l }) : c
      }
    );
  }
);
ng.displayName = tg;
var yA = "SelectIcon", rg = S.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, children: o, ...s } = e;
    return /* @__PURE__ */ C.jsx(Ge.span, { "aria-hidden": !0, ...s, ref: t, children: o || "▼" });
  }
);
rg.displayName = yA;
var xA = "SelectPortal", ig = (e) => /* @__PURE__ */ C.jsx($m, { asChild: !0, ...e });
ig.displayName = xA;
var Mr = "SelectContent", og = S.forwardRef(
  (e, t) => {
    const r = cr(Mr, e.__scopeSelect), [o, s] = S.useState();
    if (St(() => {
      s(new DocumentFragment());
    }, []), !r.open) {
      const c = o;
      return c ? ta.createPortal(
        /* @__PURE__ */ C.jsx(sg, { scope: e.__scopeSelect, children: /* @__PURE__ */ C.jsx(la.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ C.jsx("div", { children: e.children }) }) }),
        c
      ) : null;
    }
    return /* @__PURE__ */ C.jsx(ag, { ...e, ref: t });
  }
);
og.displayName = Mr;
var rn = 10, [sg, ur] = Ci(Mr), wA = "SelectContentImpl", ag = S.forwardRef(
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
      collisionBoundary: v,
      collisionPadding: b,
      sticky: T,
      hideWhenDetached: w,
      avoidCollisions: _,
      //
      ...A
    } = e, R = cr(Mr, r), [M, I] = S.useState(null), [V, H] = S.useState(null), U = Je(t, (ne) => I(ne)), [$, J] = S.useState(null), [ee, he] = S.useState(
      null
    ), Z = ca(r), [ae, te] = S.useState(!1), _e = S.useRef(!1);
    S.useEffect(() => {
      if (M)
        return AP(M);
    }, [M]), t1();
    const le = S.useCallback(
      (ne) => {
        const [xe, ...Ve] = Z().map((we) => we.ref.current), [Ae] = Ve.slice(-1), Ce = document.activeElement;
        for (const we of ne)
          if (we === Ce || (we == null || we.scrollIntoView({ block: "nearest" }), we === xe && V && (V.scrollTop = 0), we === Ae && V && (V.scrollTop = V.scrollHeight), we == null || we.focus(), document.activeElement !== Ce))
            return;
      },
      [Z, V]
    ), X = S.useCallback(
      () => le([$, M]),
      [le, $, M]
    );
    S.useEffect(() => {
      ae && X();
    }, [ae, X]);
    const { onOpenChange: K, triggerPointerDownPosRef: pe } = R;
    S.useEffect(() => {
      if (M) {
        let ne = { x: 0, y: 0 };
        const xe = (Ae) => {
          var Ce, we;
          ne = {
            x: Math.abs(Math.round(Ae.pageX) - (((Ce = pe.current) == null ? void 0 : Ce.x) ?? 0)),
            y: Math.abs(Math.round(Ae.pageY) - (((we = pe.current) == null ? void 0 : we.y) ?? 0))
          };
        }, Ve = (Ae) => {
          ne.x <= 10 && ne.y <= 10 ? Ae.preventDefault() : M.contains(Ae.target) || K(!1), document.removeEventListener("pointermove", xe), pe.current = null;
        };
        return pe.current !== null && (document.addEventListener("pointermove", xe), document.addEventListener("pointerup", Ve, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", xe), document.removeEventListener("pointerup", Ve, { capture: !0 });
        };
      }
    }, [M, K, pe]), S.useEffect(() => {
      const ne = () => K(!1);
      return window.addEventListener("blur", ne), window.addEventListener("resize", ne), () => {
        window.removeEventListener("blur", ne), window.removeEventListener("resize", ne);
      };
    }, [K]);
    const [Me, Pe] = Tg((ne) => {
      const xe = Z().filter((Ce) => !Ce.disabled), Ve = xe.find((Ce) => Ce.ref.current === document.activeElement), Ae = _g(xe, ne, Ve);
      Ae && setTimeout(() => Ae.ref.current.focus());
    }), an = S.useCallback(
      (ne, xe, Ve) => {
        const Ae = !_e.current && !Ve;
        (R.value !== void 0 && R.value === xe || Ae) && (J(ne), Ae && (_e.current = !0));
      },
      [R.value]
    ), ln = S.useCallback(() => M == null ? void 0 : M.focus(), [M]), Ft = S.useCallback(
      (ne, xe, Ve) => {
        const Ae = !_e.current && !Ve;
        (R.value !== void 0 && R.value === xe || Ae) && he(ne);
      },
      [R.value]
    ), yt = o === "popper" ? bc : lg, ft = yt === bc ? {
      side: u,
      sideOffset: f,
      align: h,
      alignOffset: p,
      arrowPadding: g,
      collisionBoundary: v,
      collisionPadding: b,
      sticky: T,
      hideWhenDetached: w,
      avoidCollisions: _
    } : {};
    return /* @__PURE__ */ C.jsx(
      sg,
      {
        scope: r,
        content: M,
        viewport: V,
        onViewportChange: H,
        itemRefCallback: an,
        selectedItem: $,
        onItemLeave: ln,
        itemTextRefCallback: Ft,
        focusSelectedItem: X,
        selectedItemText: ee,
        position: o,
        isPositioned: ae,
        searchRef: Me,
        children: /* @__PURE__ */ C.jsx(Zm, { as: hi, allowPinchZoom: !0, children: /* @__PURE__ */ C.jsx(
          ym,
          {
            asChild: !0,
            trapped: R.open,
            onMountAutoFocus: (ne) => {
              ne.preventDefault();
            },
            onUnmountAutoFocus: je(s, (ne) => {
              var xe;
              (xe = R.trigger) == null || xe.focus({ preventScroll: !0 }), ne.preventDefault();
            }),
            children: /* @__PURE__ */ C.jsx(
              Kc,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: c,
                onPointerDownOutside: l,
                onFocusOutside: (ne) => ne.preventDefault(),
                onDismiss: () => R.onOpenChange(!1),
                children: /* @__PURE__ */ C.jsx(
                  yt,
                  {
                    role: "listbox",
                    id: R.contentId,
                    "data-state": R.open ? "open" : "closed",
                    dir: R.dir,
                    onContextMenu: (ne) => ne.preventDefault(),
                    ...A,
                    ...ft,
                    onPlaced: () => te(!0),
                    ref: U,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...A.style
                    },
                    onKeyDown: je(A.onKeyDown, (ne) => {
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
ag.displayName = wA;
var bA = "SelectItemAlignedPosition", lg = S.forwardRef((e, t) => {
  const { __scopeSelect: r, onPlaced: o, ...s } = e, c = cr(Mr, r), l = ur(Mr, r), [u, f] = S.useState(null), [h, p] = S.useState(null), g = Je(t, (U) => p(U)), v = ca(r), b = S.useRef(!1), T = S.useRef(!0), { viewport: w, selectedItem: _, selectedItemText: A, focusSelectedItem: R } = l, M = S.useCallback(() => {
    if (c.trigger && c.valueNode && u && h && w && _ && A) {
      const U = c.trigger.getBoundingClientRect(), $ = h.getBoundingClientRect(), J = c.valueNode.getBoundingClientRect(), ee = A.getBoundingClientRect();
      if (c.dir !== "rtl") {
        const Ce = ee.left - $.left, we = J.left - Ce, tt = U.left - we, We = U.width + tt, dt = Math.max(We, $.width), Et = window.innerWidth - rn, nt = gh(we, [
          rn,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(rn, Et - dt)
        ]);
        u.style.minWidth = We + "px", u.style.left = nt + "px";
      } else {
        const Ce = $.right - ee.right, we = window.innerWidth - J.right - Ce, tt = window.innerWidth - U.right - we, We = U.width + tt, dt = Math.max(We, $.width), Et = window.innerWidth - rn, nt = gh(we, [
          rn,
          Math.max(rn, Et - dt)
        ]);
        u.style.minWidth = We + "px", u.style.right = nt + "px";
      }
      const he = v(), Z = window.innerHeight - rn * 2, ae = w.scrollHeight, te = window.getComputedStyle(h), _e = parseInt(te.borderTopWidth, 10), le = parseInt(te.paddingTop, 10), X = parseInt(te.borderBottomWidth, 10), K = parseInt(te.paddingBottom, 10), pe = _e + le + ae + K + X, Me = Math.min(_.offsetHeight * 5, pe), Pe = window.getComputedStyle(w), an = parseInt(Pe.paddingTop, 10), ln = parseInt(Pe.paddingBottom, 10), Ft = U.top + U.height / 2 - rn, yt = Z - Ft, ft = _.offsetHeight / 2, ne = _.offsetTop + ft, xe = _e + le + ne, Ve = pe - xe;
      if (xe <= Ft) {
        const Ce = he.length > 0 && _ === he[he.length - 1].ref.current;
        u.style.bottom = "0px";
        const we = h.clientHeight - w.offsetTop - w.offsetHeight, tt = Math.max(
          yt,
          ft + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (Ce ? ln : 0) + we + X
        ), We = xe + tt;
        u.style.height = We + "px";
      } else {
        const Ce = he.length > 0 && _ === he[0].ref.current;
        u.style.top = "0px";
        const tt = Math.max(
          Ft,
          _e + w.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (Ce ? an : 0) + ft
        ) + Ve;
        u.style.height = tt + "px", w.scrollTop = xe - Ft + w.offsetTop;
      }
      u.style.margin = `${rn}px 0`, u.style.minHeight = Me + "px", u.style.maxHeight = Z + "px", o == null || o(), requestAnimationFrame(() => b.current = !0);
    }
  }, [
    v,
    c.trigger,
    c.valueNode,
    u,
    h,
    w,
    _,
    A,
    c.dir,
    o
  ]);
  St(() => M(), [M]);
  const [I, V] = S.useState();
  St(() => {
    h && V(window.getComputedStyle(h).zIndex);
  }, [h]);
  const H = S.useCallback(
    (U) => {
      U && T.current === !0 && (M(), R == null || R(), T.current = !1);
    },
    [M, R]
  );
  return /* @__PURE__ */ C.jsx(
    CA,
    {
      scope: r,
      contentWrapper: u,
      shouldExpandOnScrollRef: b,
      onScrollButtonChange: H,
      children: /* @__PURE__ */ C.jsx(
        "div",
        {
          ref: f,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: I
          },
          children: /* @__PURE__ */ C.jsx(
            Ge.div,
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
lg.displayName = bA;
var SA = "SelectPopperPosition", bc = S.forwardRef((e, t) => {
  const {
    __scopeSelect: r,
    align: o = "start",
    collisionPadding: s = rn,
    ...c
  } = e, l = ua(r);
  return /* @__PURE__ */ C.jsx(
    Wm,
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
bc.displayName = SA;
var [CA, iu] = Ci(Mr, {}), Sc = "SelectViewport", cg = S.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, nonce: o, ...s } = e, c = ur(Sc, r), l = iu(Sc, r), u = Je(t, c.onViewportChange), f = S.useRef(0);
    return /* @__PURE__ */ C.jsxs(C.Fragment, { children: [
      /* @__PURE__ */ C.jsx(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: o
        }
      ),
      /* @__PURE__ */ C.jsx(la.Slot, { scope: r, children: /* @__PURE__ */ C.jsx(
        Ge.div,
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
          onScroll: je(s.onScroll, (h) => {
            const p = h.currentTarget, { contentWrapper: g, shouldExpandOnScrollRef: v } = l;
            if (v != null && v.current && g) {
              const b = Math.abs(f.current - p.scrollTop);
              if (b > 0) {
                const T = window.innerHeight - rn * 2, w = parseFloat(g.style.minHeight), _ = parseFloat(g.style.height), A = Math.max(w, _);
                if (A < T) {
                  const R = A + b, M = Math.min(T, R), I = R - M;
                  g.style.height = M + "px", g.style.bottom === "0px" && (p.scrollTop = I > 0 ? I : 0, g.style.justifyContent = "flex-end");
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
cg.displayName = Sc;
var ug = "SelectGroup", [TA, _A] = Ci(ug), PA = S.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...o } = e, s = na();
    return /* @__PURE__ */ C.jsx(TA, { scope: r, id: s, children: /* @__PURE__ */ C.jsx(Ge.div, { role: "group", "aria-labelledby": s, ...o, ref: t }) });
  }
);
PA.displayName = ug;
var fg = "SelectLabel", dg = S.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...o } = e, s = _A(fg, r);
    return /* @__PURE__ */ C.jsx(Ge.div, { id: s.id, ...o, ref: t });
  }
);
dg.displayName = fg;
var Gs = "SelectItem", [AA, hg] = Ci(Gs), pg = S.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: r,
      value: o,
      disabled: s = !1,
      textValue: c,
      ...l
    } = e, u = cr(Gs, r), f = ur(Gs, r), h = u.value === o, [p, g] = S.useState(c ?? ""), [v, b] = S.useState(!1), T = Je(
      t,
      (R) => {
        var M;
        return (M = f.itemRefCallback) == null ? void 0 : M.call(f, R, o, s);
      }
    ), w = na(), _ = S.useRef("touch"), A = () => {
      s || (u.onValueChange(o), u.onOpenChange(!1));
    };
    if (o === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ C.jsx(
      AA,
      {
        scope: r,
        value: o,
        disabled: s,
        textId: w,
        isSelected: h,
        onItemTextChange: S.useCallback((R) => {
          g((M) => M || ((R == null ? void 0 : R.textContent) ?? "").trim());
        }, []),
        children: /* @__PURE__ */ C.jsx(
          la.ItemSlot,
          {
            scope: r,
            value: o,
            disabled: s,
            textValue: p,
            children: /* @__PURE__ */ C.jsx(
              Ge.div,
              {
                role: "option",
                "aria-labelledby": w,
                "data-highlighted": v ? "" : void 0,
                "aria-selected": h && v,
                "data-state": h ? "checked" : "unchecked",
                "aria-disabled": s || void 0,
                "data-disabled": s ? "" : void 0,
                tabIndex: s ? void 0 : -1,
                ...l,
                ref: T,
                onFocus: je(l.onFocus, () => b(!0)),
                onBlur: je(l.onBlur, () => b(!1)),
                onClick: je(l.onClick, () => {
                  _.current !== "mouse" && A();
                }),
                onPointerUp: je(l.onPointerUp, () => {
                  _.current === "mouse" && A();
                }),
                onPointerDown: je(l.onPointerDown, (R) => {
                  _.current = R.pointerType;
                }),
                onPointerMove: je(l.onPointerMove, (R) => {
                  var M;
                  _.current = R.pointerType, s ? (M = f.onItemLeave) == null || M.call(f) : _.current === "mouse" && R.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: je(l.onPointerLeave, (R) => {
                  var M;
                  R.currentTarget === document.activeElement && ((M = f.onItemLeave) == null || M.call(f));
                }),
                onKeyDown: je(l.onKeyDown, (R) => {
                  var I;
                  ((I = f.searchRef) == null ? void 0 : I.current) !== "" && R.key === " " || (hA.includes(R.key) && A(), R.key === " " && R.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
pg.displayName = Gs;
var io = "SelectItemText", mg = S.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, className: o, style: s, ...c } = e, l = cr(io, r), u = ur(io, r), f = hg(io, r), h = vA(io, r), [p, g] = S.useState(null), v = Je(
      t,
      (A) => g(A),
      f.onItemTextChange,
      (A) => {
        var R;
        return (R = u.itemTextRefCallback) == null ? void 0 : R.call(u, A, f.value, f.disabled);
      }
    ), b = p == null ? void 0 : p.textContent, T = S.useMemo(
      () => /* @__PURE__ */ C.jsx("option", { value: f.value, disabled: f.disabled, children: b }, f.value),
      [f.disabled, f.value, b]
    ), { onNativeOptionAdd: w, onNativeOptionRemove: _ } = h;
    return St(() => (w(T), () => _(T)), [w, _, T]), /* @__PURE__ */ C.jsxs(C.Fragment, { children: [
      /* @__PURE__ */ C.jsx(Ge.span, { id: f.textId, ...c, ref: v }),
      f.isSelected && l.valueNode && !l.valueNodeHasChildren ? ta.createPortal(c.children, l.valueNode) : null
    ] });
  }
);
mg.displayName = io;
var gg = "SelectItemIndicator", vg = S.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...o } = e;
    return hg(gg, r).isSelected ? /* @__PURE__ */ C.jsx(Ge.span, { "aria-hidden": !0, ...o, ref: t }) : null;
  }
);
vg.displayName = gg;
var Cc = "SelectScrollUpButton", yg = S.forwardRef((e, t) => {
  const r = ur(Cc, e.__scopeSelect), o = iu(Cc, e.__scopeSelect), [s, c] = S.useState(!1), l = Je(t, o.onScrollButtonChange);
  return St(() => {
    if (r.viewport && r.isPositioned) {
      let u = function() {
        const h = f.scrollTop > 0;
        c(h);
      };
      const f = r.viewport;
      return u(), f.addEventListener("scroll", u), () => f.removeEventListener("scroll", u);
    }
  }, [r.viewport, r.isPositioned]), s ? /* @__PURE__ */ C.jsx(
    wg,
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
yg.displayName = Cc;
var Tc = "SelectScrollDownButton", xg = S.forwardRef((e, t) => {
  const r = ur(Tc, e.__scopeSelect), o = iu(Tc, e.__scopeSelect), [s, c] = S.useState(!1), l = Je(t, o.onScrollButtonChange);
  return St(() => {
    if (r.viewport && r.isPositioned) {
      let u = function() {
        const h = f.scrollHeight - f.clientHeight, p = Math.ceil(f.scrollTop) < h;
        c(p);
      };
      const f = r.viewport;
      return u(), f.addEventListener("scroll", u), () => f.removeEventListener("scroll", u);
    }
  }, [r.viewport, r.isPositioned]), s ? /* @__PURE__ */ C.jsx(
    wg,
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
xg.displayName = Tc;
var wg = S.forwardRef((e, t) => {
  const { __scopeSelect: r, onAutoScroll: o, ...s } = e, c = ur("SelectScrollButton", r), l = S.useRef(null), u = ca(r), f = S.useCallback(() => {
    l.current !== null && (window.clearInterval(l.current), l.current = null);
  }, []);
  return S.useEffect(() => () => f(), [f]), St(() => {
    var p;
    const h = u().find((g) => g.ref.current === document.activeElement);
    (p = h == null ? void 0 : h.ref.current) == null || p.scrollIntoView({ block: "nearest" });
  }, [u]), /* @__PURE__ */ C.jsx(
    Ge.div,
    {
      "aria-hidden": !0,
      ...s,
      ref: t,
      style: { flexShrink: 0, ...s.style },
      onPointerDown: je(s.onPointerDown, () => {
        l.current === null && (l.current = window.setInterval(o, 50));
      }),
      onPointerMove: je(s.onPointerMove, () => {
        var h;
        (h = c.onItemLeave) == null || h.call(c), l.current === null && (l.current = window.setInterval(o, 50));
      }),
      onPointerLeave: je(s.onPointerLeave, () => {
        f();
      })
    }
  );
}), EA = "SelectSeparator", bg = S.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...o } = e;
    return /* @__PURE__ */ C.jsx(Ge.div, { "aria-hidden": !0, ...o, ref: t });
  }
);
bg.displayName = EA;
var _c = "SelectArrow", RA = S.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...o } = e, s = ua(r), c = cr(_c, r), l = ur(_c, r);
    return c.open && l.position === "popper" ? /* @__PURE__ */ C.jsx(Um, { ...s, ...o, ref: t }) : null;
  }
);
RA.displayName = _c;
function Sg(e) {
  return e === "" || e === void 0;
}
var Cg = S.forwardRef(
  (e, t) => {
    const { value: r, ...o } = e, s = S.useRef(null), c = Je(t, s), l = bP(r);
    return S.useEffect(() => {
      const u = s.current, f = window.HTMLSelectElement.prototype, p = Object.getOwnPropertyDescriptor(
        f,
        "value"
      ).set;
      if (l !== r && p) {
        const g = new Event("change", { bubbles: !0 });
        p.call(u, r), u.dispatchEvent(g);
      }
    }, [l, r]), /* @__PURE__ */ C.jsx(ru, { asChild: !0, children: /* @__PURE__ */ C.jsx("select", { ...o, ref: c, defaultValue: r }) });
  }
);
Cg.displayName = "BubbleSelect";
function Tg(e) {
  const t = In(e), r = S.useRef(""), o = S.useRef(0), s = S.useCallback(
    (l) => {
      const u = r.current + l;
      t(u), function f(h) {
        r.current = h, window.clearTimeout(o.current), h !== "" && (o.current = window.setTimeout(() => f(""), 1e3));
      }(u);
    },
    [t]
  ), c = S.useCallback(() => {
    r.current = "", window.clearTimeout(o.current);
  }, []);
  return S.useEffect(() => () => window.clearTimeout(o.current), []), [r, s, c];
}
function _g(e, t, r) {
  const s = t.length > 1 && Array.from(t).every((h) => h === t[0]) ? t[0] : t, c = r ? e.indexOf(r) : -1;
  let l = OA(e, Math.max(c, 0));
  s.length === 1 && (l = l.filter((h) => h !== r));
  const f = l.find(
    (h) => h.textValue.toLowerCase().startsWith(s.toLowerCase())
  );
  return f !== r ? f : void 0;
}
function OA(e, t) {
  return e.map((r, o) => e[(t + o) % e.length]);
}
var MA = Jm, Pg = eg, LA = ng, NA = rg, DA = ig, Ag = og, IA = cg, Eg = dg, Rg = pg, VA = mg, kA = vg, Og = yg, Mg = xg, Lg = bg;
const jA = MA, FA = LA, Ng = S.forwardRef(({ className: e, children: t, ...r }, o) => /* @__PURE__ */ C.jsxs(
  Pg,
  {
    ref: o,
    className: it(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      e
    ),
    ...r,
    children: [
      t,
      /* @__PURE__ */ C.jsx(NA, { asChild: !0, children: /* @__PURE__ */ C.jsx(Gc, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
Ng.displayName = Pg.displayName;
const Dg = S.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ C.jsx(
  Og,
  {
    ref: r,
    className: it(
      "flex cursor-default items-center justify-center py-1",
      e
    ),
    ...t,
    children: /* @__PURE__ */ C.jsx(I_, { className: "h-4 w-4" })
  }
));
Dg.displayName = Og.displayName;
const Ig = S.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ C.jsx(
  Mg,
  {
    ref: r,
    className: it(
      "flex cursor-default items-center justify-center py-1",
      e
    ),
    ...t,
    children: /* @__PURE__ */ C.jsx(Gc, { className: "h-4 w-4" })
  }
));
Ig.displayName = Mg.displayName;
const Vg = S.forwardRef(({ className: e, children: t, position: r = "popper", ...o }, s) => /* @__PURE__ */ C.jsx(DA, { children: /* @__PURE__ */ C.jsxs(
  Ag,
  {
    ref: s,
    className: it(
      "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      r === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      e
    ),
    position: r,
    ...o,
    children: [
      /* @__PURE__ */ C.jsx(Dg, {}),
      /* @__PURE__ */ C.jsx(
        IA,
        {
          className: it(
            "p-1",
            r === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children: t
        }
      ),
      /* @__PURE__ */ C.jsx(Ig, {})
    ]
  }
) }));
Vg.displayName = Ag.displayName;
const BA = S.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ C.jsx(
  Eg,
  {
    ref: r,
    className: it("py-1.5 pl-8 pr-2 text-sm font-semibold", e),
    ...t
  }
));
BA.displayName = Eg.displayName;
const kg = S.forwardRef(({ className: e, children: t, ...r }, o) => /* @__PURE__ */ C.jsxs(
  Rg,
  {
    ref: o,
    className: it(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...r,
    children: [
      /* @__PURE__ */ C.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ C.jsx(kA, { children: /* @__PURE__ */ C.jsx(D_, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ C.jsx(VA, { children: t })
    ]
  }
));
kg.displayName = Rg.displayName;
const WA = S.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ C.jsx(
  Lg,
  {
    ref: r,
    className: it("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
WA.displayName = Lg.displayName;
function UA(e, t) {
  return S.useReducer((r, o) => t[r][o] ?? r, e);
}
var jg = (e) => {
  const { present: t, children: r } = e, o = $A(t), s = typeof r == "function" ? r({ present: o.isPresent }) : S.Children.only(r), c = Je(o.ref, HA(s));
  return typeof r == "function" || o.isPresent ? S.cloneElement(s, { ref: c }) : null;
};
jg.displayName = "Presence";
function $A(e) {
  const [t, r] = S.useState(), o = S.useRef({}), s = S.useRef(e), c = S.useRef("none"), l = e ? "mounted" : "unmounted", [u, f] = UA(l, {
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
  return S.useEffect(() => {
    const h = As(o.current);
    c.current = u === "mounted" ? h : "none";
  }, [u]), St(() => {
    const h = o.current, p = s.current;
    if (p !== e) {
      const v = c.current, b = As(h);
      e ? f("MOUNT") : b === "none" || (h == null ? void 0 : h.display) === "none" ? f("UNMOUNT") : f(p && v !== b ? "ANIMATION_OUT" : "UNMOUNT"), s.current = e;
    }
  }, [e, f]), St(() => {
    if (t) {
      let h;
      const p = t.ownerDocument.defaultView ?? window, g = (b) => {
        const w = As(o.current).includes(b.animationName);
        if (b.target === t && w && (f("ANIMATION_END"), !s.current)) {
          const _ = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", h = p.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = _);
          });
        }
      }, v = (b) => {
        b.target === t && (c.current = As(o.current));
      };
      return t.addEventListener("animationstart", v), t.addEventListener("animationcancel", g), t.addEventListener("animationend", g), () => {
        p.clearTimeout(h), t.removeEventListener("animationstart", v), t.removeEventListener("animationcancel", g), t.removeEventListener("animationend", g);
      };
    } else
      f("ANIMATION_END");
  }, [t, f]), {
    isPresent: ["mounted", "unmountSuspended"].includes(u),
    ref: S.useCallback((h) => {
      h && (o.current = getComputedStyle(h)), r(h);
    }, [])
  };
}
function As(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function HA(e) {
  var o, s;
  let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = (s = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : s.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
var [fa, qL] = mm("Tooltip", [
  sa
]), da = sa(), Fg = "TooltipProvider", zA = 700, Pc = "tooltip.open", [GA, ou] = fa(Fg), Bg = (e) => {
  const {
    __scopeTooltip: t,
    delayDuration: r = zA,
    skipDelayDuration: o = 300,
    disableHoverableContent: s = !1,
    children: c
  } = e, [l, u] = S.useState(!0), f = S.useRef(!1), h = S.useRef(0);
  return S.useEffect(() => {
    const p = h.current;
    return () => window.clearTimeout(p);
  }, []), /* @__PURE__ */ C.jsx(
    GA,
    {
      scope: t,
      isOpenDelayed: l,
      delayDuration: r,
      onOpen: S.useCallback(() => {
        window.clearTimeout(h.current), u(!1);
      }, []),
      onClose: S.useCallback(() => {
        window.clearTimeout(h.current), h.current = window.setTimeout(
          () => u(!0),
          o
        );
      }, [o]),
      isPointerInTransitRef: f,
      onPointerInTransitChange: S.useCallback((p) => {
        f.current = p;
      }, []),
      disableHoverableContent: s,
      children: c
    }
  );
};
Bg.displayName = Fg;
var ha = "Tooltip", [KA, pa] = fa(ha), Wg = (e) => {
  const {
    __scopeTooltip: t,
    children: r,
    open: o,
    defaultOpen: s = !1,
    onOpenChange: c,
    disableHoverableContent: l,
    delayDuration: u
  } = e, f = ou(ha, e.__scopeTooltip), h = da(t), [p, g] = S.useState(null), v = na(), b = S.useRef(0), T = l ?? f.disableHoverableContent, w = u ?? f.delayDuration, _ = S.useRef(!1), [A = !1, R] = xc({
    prop: o,
    defaultProp: s,
    onChange: (U) => {
      U ? (f.onOpen(), document.dispatchEvent(new CustomEvent(Pc))) : f.onClose(), c == null || c(U);
    }
  }), M = S.useMemo(() => A ? _.current ? "delayed-open" : "instant-open" : "closed", [A]), I = S.useCallback(() => {
    window.clearTimeout(b.current), b.current = 0, _.current = !1, R(!0);
  }, [R]), V = S.useCallback(() => {
    window.clearTimeout(b.current), b.current = 0, R(!1);
  }, [R]), H = S.useCallback(() => {
    window.clearTimeout(b.current), b.current = window.setTimeout(() => {
      _.current = !0, R(!0), b.current = 0;
    }, w);
  }, [w, R]);
  return S.useEffect(() => () => {
    b.current && (window.clearTimeout(b.current), b.current = 0);
  }, []), /* @__PURE__ */ C.jsx(Fm, { ...h, children: /* @__PURE__ */ C.jsx(
    KA,
    {
      scope: t,
      contentId: v,
      open: A,
      stateAttribute: M,
      trigger: p,
      onTriggerChange: g,
      onTriggerEnter: S.useCallback(() => {
        f.isOpenDelayed ? H() : I();
      }, [f.isOpenDelayed, H, I]),
      onTriggerLeave: S.useCallback(() => {
        T ? V() : (window.clearTimeout(b.current), b.current = 0);
      }, [V, T]),
      onOpen: I,
      onClose: V,
      disableHoverableContent: T,
      children: r
    }
  ) });
};
Wg.displayName = ha;
var Ac = "TooltipTrigger", Ug = S.forwardRef(
  (e, t) => {
    const { __scopeTooltip: r, ...o } = e, s = pa(Ac, r), c = ou(Ac, r), l = da(r), u = S.useRef(null), f = Je(t, u, s.onTriggerChange), h = S.useRef(!1), p = S.useRef(!1), g = S.useCallback(() => h.current = !1, []);
    return S.useEffect(() => () => document.removeEventListener("pointerup", g), [g]), /* @__PURE__ */ C.jsx(Bm, { asChild: !0, ...l, children: /* @__PURE__ */ C.jsx(
      Ge.button,
      {
        "aria-describedby": s.open ? s.contentId : void 0,
        "data-state": s.stateAttribute,
        ...o,
        ref: f,
        onPointerMove: je(e.onPointerMove, (v) => {
          v.pointerType !== "touch" && !p.current && !c.isPointerInTransitRef.current && (s.onTriggerEnter(), p.current = !0);
        }),
        onPointerLeave: je(e.onPointerLeave, () => {
          s.onTriggerLeave(), p.current = !1;
        }),
        onPointerDown: je(e.onPointerDown, () => {
          h.current = !0, document.addEventListener("pointerup", g, { once: !0 });
        }),
        onFocus: je(e.onFocus, () => {
          h.current || s.onOpen();
        }),
        onBlur: je(e.onBlur, s.onClose),
        onClick: je(e.onClick, s.onClose)
      }
    ) });
  }
);
Ug.displayName = Ac;
var YA = "TooltipPortal", [XL, qA] = fa(YA, {
  forceMount: void 0
}), mi = "TooltipContent", $g = S.forwardRef(
  (e, t) => {
    const r = qA(mi, e.__scopeTooltip), { forceMount: o = r.forceMount, side: s = "top", ...c } = e, l = pa(mi, e.__scopeTooltip);
    return /* @__PURE__ */ C.jsx(jg, { present: o || l.open, children: l.disableHoverableContent ? /* @__PURE__ */ C.jsx(Hg, { side: s, ...c, ref: t }) : /* @__PURE__ */ C.jsx(XA, { side: s, ...c, ref: t }) });
  }
), XA = S.forwardRef((e, t) => {
  const r = pa(mi, e.__scopeTooltip), o = ou(mi, e.__scopeTooltip), s = S.useRef(null), c = Je(t, s), [l, u] = S.useState(null), { trigger: f, onClose: h } = r, p = s.current, { onPointerInTransitChange: g } = o, v = S.useCallback(() => {
    u(null), g(!1);
  }, [g]), b = S.useCallback(
    (T, w) => {
      const _ = T.currentTarget, A = { x: T.clientX, y: T.clientY }, R = eE(A, _.getBoundingClientRect()), M = tE(A, R), I = nE(w.getBoundingClientRect()), V = iE([...M, ...I]);
      u(V), g(!0);
    },
    [g]
  );
  return S.useEffect(() => () => v(), [v]), S.useEffect(() => {
    if (f && p) {
      const T = (_) => b(_, p), w = (_) => b(_, f);
      return f.addEventListener("pointerleave", T), p.addEventListener("pointerleave", w), () => {
        f.removeEventListener("pointerleave", T), p.removeEventListener("pointerleave", w);
      };
    }
  }, [f, p, b, v]), S.useEffect(() => {
    if (l) {
      const T = (w) => {
        const _ = w.target, A = { x: w.clientX, y: w.clientY }, R = (f == null ? void 0 : f.contains(_)) || (p == null ? void 0 : p.contains(_)), M = !rE(A, l);
        R ? v() : M && (v(), h());
      };
      return document.addEventListener("pointermove", T), () => document.removeEventListener("pointermove", T);
    }
  }, [f, p, l, h, v]), /* @__PURE__ */ C.jsx(Hg, { ...e, ref: c });
}), [ZA, JA] = fa(ha, { isInside: !1 }), Hg = S.forwardRef(
  (e, t) => {
    const {
      __scopeTooltip: r,
      children: o,
      "aria-label": s,
      onEscapeKeyDown: c,
      onPointerDownOutside: l,
      ...u
    } = e, f = pa(mi, r), h = da(r), { onClose: p } = f;
    return S.useEffect(() => (document.addEventListener(Pc, p), () => document.removeEventListener(Pc, p)), [p]), S.useEffect(() => {
      if (f.trigger) {
        const g = (v) => {
          const b = v.target;
          b != null && b.contains(f.trigger) && p();
        };
        return window.addEventListener("scroll", g, { capture: !0 }), () => window.removeEventListener("scroll", g, { capture: !0 });
      }
    }, [f.trigger, p]), /* @__PURE__ */ C.jsx(
      Kc,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: c,
        onPointerDownOutside: l,
        onFocusOutside: (g) => g.preventDefault(),
        onDismiss: p,
        children: /* @__PURE__ */ C.jsxs(
          Wm,
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
              /* @__PURE__ */ C.jsx(im, { children: o }),
              /* @__PURE__ */ C.jsx(ZA, { scope: r, isInside: !0, children: /* @__PURE__ */ C.jsx(CP, { id: f.contentId, role: "tooltip", children: s || o }) })
            ]
          }
        )
      }
    );
  }
);
$g.displayName = mi;
var zg = "TooltipArrow", QA = S.forwardRef(
  (e, t) => {
    const { __scopeTooltip: r, ...o } = e, s = da(r);
    return JA(
      zg,
      r
    ).isInside ? null : /* @__PURE__ */ C.jsx(Um, { ...s, ...o, ref: t });
  }
);
QA.displayName = zg;
function eE(e, t) {
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
function tE(e, t, r = 5) {
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
function nE(e) {
  const { top: t, right: r, bottom: o, left: s } = e;
  return [
    { x: s, y: t },
    { x: r, y: t },
    { x: r, y: o },
    { x: s, y: o }
  ];
}
function rE(e, t) {
  const { x: r, y: o } = e;
  let s = !1;
  for (let c = 0, l = t.length - 1; c < t.length; l = c++) {
    const u = t[c].x, f = t[c].y, h = t[l].x, p = t[l].y;
    f > o != p > o && r < (h - u) * (o - f) / (p - f) + u && (s = !s);
  }
  return s;
}
function iE(e) {
  const t = e.slice();
  return t.sort((r, o) => r.x < o.x ? -1 : r.x > o.x ? 1 : r.y < o.y ? -1 : r.y > o.y ? 1 : 0), oE(t);
}
function oE(e) {
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
var sE = Bg, aE = Wg, lE = Ug, Gg = $g;
const ui = sE, fi = aE, di = lE, Er = S.forwardRef(({ className: e, sideOffset: t = 4, ...r }, o) => /* @__PURE__ */ C.jsx(
  Gg,
  {
    ref: o,
    sideOffset: t,
    className: it(
      "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...r
  }
));
Er.displayName = Gg.displayName;
const cE = sm(
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
function Kg({ className: e, variant: t, ...r }) {
  return /* @__PURE__ */ C.jsx("div", { className: it(cE({ variant: t }), e), ...r });
}
const bo = S.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ C.jsx(
  "div",
  {
    ref: r,
    className: it(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      e
    ),
    ...t
  }
));
bo.displayName = "Card";
const So = S.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ C.jsx(
  "div",
  {
    ref: r,
    className: it("flex flex-col space-y-1.5 p-6", e),
    ...t
  }
));
So.displayName = "CardHeader";
const ma = S.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ C.jsx(
  "div",
  {
    ref: r,
    className: it(
      "text-2xl font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
ma.displayName = "CardTitle";
const uE = S.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ C.jsx(
  "div",
  {
    ref: r,
    className: it("text-sm text-muted-foreground", e),
    ...t
  }
));
uE.displayName = "CardDescription";
const Co = S.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ C.jsx("div", { ref: r, className: it("p-6 pt-0", e), ...t }));
Co.displayName = "CardContent";
const fE = S.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ C.jsx(
  "div",
  {
    ref: r,
    className: it("flex items-center p-6 pt-0", e),
    ...t
  }
));
fE.displayName = "CardFooter";
function ZL({ deal: e, onDealChange: t, availableDeals: r }) {
  const o = (s) => {
    t(s);
  };
  return /* @__PURE__ */ C.jsxs(bo, { className: "bg-white shadow-sm border-slate-200", children: [
    /* @__PURE__ */ C.jsx(So, { children: /* @__PURE__ */ C.jsxs("div", { className: "flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4", children: [
      /* @__PURE__ */ C.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ C.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ C.jsx("h2", { className: "text-xl font-semibold text-slate-900", children: e.dealName }),
          /* @__PURE__ */ C.jsx(ui, { children: /* @__PURE__ */ C.jsxs(fi, { children: [
            /* @__PURE__ */ C.jsx(di, { asChild: !0, children: /* @__PURE__ */ C.jsx(
              ai,
              {
                variant: "ghost",
                size: "sm",
                className: "p-1 h-auto",
                onClick: () => window.open(e.hubspotUrl, "_blank"),
                children: /* @__PURE__ */ C.jsx(pm, { className: "w-4 h-4 text-slate-500" })
              }
            ) }),
            /* @__PURE__ */ C.jsx(Er, { children: /* @__PURE__ */ C.jsx("p", { children: "View in HubSpot" }) })
          ] }) })
        ] }),
        /* @__PURE__ */ C.jsx(Kg, { variant: "outline", className: "text-sm", children: e.dealStage })
      ] }),
      /* @__PURE__ */ C.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 lg:gap-8", children: [
        /* @__PURE__ */ C.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ C.jsx("p", { className: "text-sm text-slate-500", children: "Amount" }),
          /* @__PURE__ */ C.jsxs("p", { className: "text-lg font-semibold", children: [
            "$",
            e.amount.toLocaleString()
          ] })
        ] }),
        /* @__PURE__ */ C.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ C.jsxs("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ C.jsx("p", { className: "text-sm text-slate-500", children: "Win Probability" }),
            /* @__PURE__ */ C.jsx(ui, { children: /* @__PURE__ */ C.jsxs(fi, { children: [
              /* @__PURE__ */ C.jsx(di, { asChild: !0, children: /* @__PURE__ */ C.jsx(ai, { variant: "ghost", size: "sm", className: "p-0 h-auto", children: /* @__PURE__ */ C.jsx(Bs, { className: "w-3 h-3 text-slate-400" }) }) }),
              /* @__PURE__ */ C.jsx(Er, { className: "max-w-xs", children: /* @__PURE__ */ C.jsx("p", { children: "Estimated chance of winning, based on prospect engagement, qualification status, risk factors, and historic deal outcomes at the current stage." }) })
            ] }) })
          ] }),
          /* @__PURE__ */ C.jsxs("p", { className: "text-lg font-semibold", children: [
            e.probability,
            "%"
          ] })
        ] }),
        /* @__PURE__ */ C.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ C.jsx("p", { className: "text-sm text-slate-500", children: "Deal Owner" }),
          /* @__PURE__ */ C.jsx("p", { className: "text-lg font-semibold", children: e.dealOwner })
        ] }),
        /* @__PURE__ */ C.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ C.jsxs("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ C.jsx("p", { className: "text-sm text-slate-500", children: "Deal Language" }),
            /* @__PURE__ */ C.jsx(ui, { children: /* @__PURE__ */ C.jsxs(fi, { children: [
              /* @__PURE__ */ C.jsx(di, { asChild: !0, children: /* @__PURE__ */ C.jsx(ai, { variant: "ghost", size: "sm", className: "p-0 h-auto", children: /* @__PURE__ */ C.jsx(Bs, { className: "w-3 h-3 text-slate-400" }) }) }),
              /* @__PURE__ */ C.jsx(Er, { className: "max-w-xs", children: /* @__PURE__ */ C.jsx("p", { children: "The main language of the deal." }) })
            ] }) })
          ] }),
          /* @__PURE__ */ C.jsx("p", { className: "text-lg font-semibold", children: T_(e.dealLanguage) })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ C.jsx(Co, { children: /* @__PURE__ */ C.jsxs(jA, { value: e.dealId, onValueChange: o, children: [
      /* @__PURE__ */ C.jsx(Ng, { className: "w-[300px]", children: /* @__PURE__ */ C.jsxs(FA, { children: [
        e.dealName,
        " (",
        e.company,
        ")"
      ] }) }),
      /* @__PURE__ */ C.jsx(Vg, { children: r.map((s) => /* @__PURE__ */ C.jsxs(kg, { value: s.dealId, children: [
        s.dealName,
        " (",
        s.company,
        ")"
      ] }, s.dealId)) })
    ] }) })
  ] });
}
function dE(e, t = []) {
  let r = [];
  function o(c, l) {
    const u = S.createContext(l), f = r.length;
    r = [...r, l];
    function h(g) {
      const { scope: v, children: b, ...T } = g, w = (v == null ? void 0 : v[e][f]) || u, _ = S.useMemo(() => T, Object.values(T));
      return /* @__PURE__ */ C.jsx(w.Provider, { value: _, children: b });
    }
    function p(g, v) {
      const b = (v == null ? void 0 : v[e][f]) || u, T = S.useContext(b);
      if (T)
        return T;
      if (l !== void 0)
        return l;
      throw new Error(`\`${g}\` must be used within \`${c}\``);
    }
    return h.displayName = c + "Provider", [h, p];
  }
  const s = () => {
    const c = r.map((l) => S.createContext(l));
    return function(u) {
      const f = (u == null ? void 0 : u[e]) || c;
      return S.useMemo(
        () => ({ [`__scope${e}`]: { ...u, [e]: f } }),
        [u, f]
      );
    };
  };
  return s.scopeName = e, [o, hE(s, ...t)];
}
function hE(...e) {
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
      return S.useMemo(() => ({ [`__scope${t.scopeName}`]: l }), [l]);
    };
  };
  return r.scopeName = t.scopeName, r;
}
var su = "Progress", au = 100, [pE, JL] = dE(su), [mE, gE] = pE(su), Yg = S.forwardRef(
  (e, t) => {
    const {
      __scopeProgress: r,
      value: o = null,
      max: s,
      getValueLabel: c = vE,
      ...l
    } = e;
    (s || s === 0) && !kh(s) && console.error(yE(`${s}`, "Progress"));
    const u = kh(s) ? s : au;
    o !== null && !jh(o, u) && console.error(xE(`${o}`, "Progress"));
    const f = jh(o, u) ? o : null, h = Ks(f) ? c(f, u) : void 0;
    return /* @__PURE__ */ C.jsx(mE, { scope: r, value: f, max: u, children: /* @__PURE__ */ C.jsx(
      Ge.div,
      {
        "aria-valuemax": u,
        "aria-valuemin": 0,
        "aria-valuenow": Ks(f) ? f : void 0,
        "aria-valuetext": h,
        role: "progressbar",
        "data-state": Zg(f, u),
        "data-value": f ?? void 0,
        "data-max": u,
        ...l,
        ref: t
      }
    ) });
  }
);
Yg.displayName = su;
var qg = "ProgressIndicator", Xg = S.forwardRef(
  (e, t) => {
    const { __scopeProgress: r, ...o } = e, s = gE(qg, r);
    return /* @__PURE__ */ C.jsx(
      Ge.div,
      {
        "data-state": Zg(s.value, s.max),
        "data-value": s.value ?? void 0,
        "data-max": s.max,
        ...o,
        ref: t
      }
    );
  }
);
Xg.displayName = qg;
function vE(e, t) {
  return `${Math.round(e / t * 100)}%`;
}
function Zg(e, t) {
  return e == null ? "indeterminate" : e === t ? "complete" : "loading";
}
function Ks(e) {
  return typeof e == "number";
}
function kh(e) {
  return Ks(e) && !isNaN(e) && e > 0;
}
function jh(e, t) {
  return Ks(e) && !isNaN(e) && e <= t && e >= 0;
}
function yE(e, t) {
  return `Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${au}\`.`;
}
function xE(e, t) {
  return `Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${au} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var Jg = Yg, wE = Xg;
const Qg = S.forwardRef(({ className: e, value: t, ...r }, o) => /* @__PURE__ */ C.jsx(
  Jg,
  {
    ref: o,
    className: it(
      "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
      e
    ),
    ...r,
    children: /* @__PURE__ */ C.jsx(
      wE,
      {
        className: "h-full w-full flex-1 bg-primary transition-all",
        style: { transform: `translateX(-${100 - (t || 0)}%)` }
      }
    )
  }
));
Qg.displayName = Jg.displayName;
const no = [
  "Discovery",
  "Solution Validation",
  "Pricing Communicated",
  "Contract Sent",
  "Closed Won",
  "Closed Lost"
], QL = ({ deal: e }) => {
  const t = {
    Discovery: 75,
    "Solution Validation": 65,
    "Pricing Communicated": 55,
    "Contract Sent": 85,
    "Closed Won": 100,
    "Closed Lost": 0
  }, r = no.includes(e.dealStage) ? e.dealStage : no[0], o = t[r] || 0;
  return /* @__PURE__ */ C.jsxs(bo, { className: "bg-white shadow-sm border-slate-200", children: [
    /* @__PURE__ */ C.jsxs(So, { children: [
      /* @__PURE__ */ C.jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ C.jsx(ma, { className: "text-slate-800", children: "Deal Progress" }) }),
      /* @__PURE__ */ C.jsx("p", { className: "text-sm text-muted-foreground", children: "Current stage and overall progress" })
    ] }),
    /* @__PURE__ */ C.jsx(Co, { children: /* @__PURE__ */ C.jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ C.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ C.jsx("div", { className: "flex flex-wrap justify-between text-xs sm:text-sm text-slate-600", children: no.map((s) => /* @__PURE__ */ C.jsx(
          "span",
          {
            className: `mb-2 ${r === s ? "font-bold" : ""}`,
            children: s
          },
          s
        )) }),
        /* @__PURE__ */ C.jsx(
          Qg,
          {
            value: (no.indexOf(r) + 1) / no.length * 100,
            className: "h-2"
          }
        ),
        /* @__PURE__ */ C.jsxs("div", { className: "flex justify-between text-xs text-slate-500", children: [
          /* @__PURE__ */ C.jsx("span", { children: "0%" }),
          /* @__PURE__ */ C.jsx("span", { children: "100%" })
        ] })
      ] }),
      /* @__PURE__ */ C.jsxs("div", { className: "pt-4 border-t", children: [
        /* @__PURE__ */ C.jsxs("div", { className: "flex items-center space-x-1 mb-4", children: [
          /* @__PURE__ */ C.jsx("h3", { className: "text-sm font-medium text-slate-700", children: "Outlook" }),
          /* @__PURE__ */ C.jsx(ui, { children: /* @__PURE__ */ C.jsxs(fi, { children: [
            /* @__PURE__ */ C.jsx(di, { children: /* @__PURE__ */ C.jsx(Bs, { className: "w-3 h-3 text-muted-foreground" }) }),
            /* @__PURE__ */ C.jsxs(Er, { className: "max-w-xs", children: [
              /* @__PURE__ */ C.jsx("p", { children: "Predictions based on deal qualification status and comparison with historical deals at the same stage" }),
              /* @__PURE__ */ C.jsx("a", { href: "", children: /* @__PURE__ */ C.jsx("button", { children: "Learn more" }) })
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ C.jsxs("div", { className: "grid grid-cols-2 gap-8", children: [
          /* @__PURE__ */ C.jsxs("div", { children: [
            /* @__PURE__ */ C.jsx("div", { className: "text-sm font-medium text-muted-foreground mb-1", children: "Win Probability" }),
            /* @__PURE__ */ C.jsxs("div", { className: "text-2xl font-bold text-slate-800", children: [
              e.probability,
              "%"
            ] })
          ] }),
          /* @__PURE__ */ C.jsxs("div", { children: [
            /* @__PURE__ */ C.jsxs("div", { className: "text-sm font-medium text-muted-foreground mb-1 space-x-1", children: [
              "Next Stage Probability",
              " "
            ] }),
            /* @__PURE__ */ C.jsxs("div", { className: "text-2xl font-bold text-slate-800", children: [
              o,
              "%"
            ] })
          ] })
        ] })
      ] })
    ] }) })
  ] });
};
function eN({ deal: e }) {
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
  return /* @__PURE__ */ C.jsxs(bo, { className: "bg-white shadow-sm border-slate-200", children: [
    /* @__PURE__ */ C.jsxs(So, { children: [
      /* @__PURE__ */ C.jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ C.jsx(ma, { className: "text-slate-800", children: "Key Stakeholders" }) }),
      /* @__PURE__ */ C.jsx("p", { className: "text-sm text-slate-500", children: "Engagement levels and relationships" })
    ] }),
    /* @__PURE__ */ C.jsx(Co, { children: /* @__PURE__ */ C.jsx("div", { className: "space-y-4", children: e.keyStakeholders.map((r, o) => /* @__PURE__ */ C.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ C.jsxs("div", { children: [
        /* @__PURE__ */ C.jsx("p", { className: "font-medium", children: r.name }),
        /* @__PURE__ */ C.jsx("p", { className: "text-sm text-slate-500", children: r.role })
      ] }),
      /* @__PURE__ */ C.jsxs("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ C.jsxs(Kg, { className: t(r.engagementLevel), children: [
          r.engagementLevel,
          " Engagement"
        ] }),
        /* @__PURE__ */ C.jsx(ui, { children: /* @__PURE__ */ C.jsxs(fi, { children: [
          /* @__PURE__ */ C.jsx(di, { asChild: !0, children: /* @__PURE__ */ C.jsx(
            ai,
            {
              variant: "ghost",
              size: "sm",
              className: "",
              onClick: () => window.open(r.contactLink, "_blank"),
              children: /* @__PURE__ */ C.jsx(pm, { className: "w-4 h-4 text-slate-500" })
            }
          ) }),
          /* @__PURE__ */ C.jsx(Er, { children: /* @__PURE__ */ C.jsx("p", { children: "View contact in CRM" }) })
        ] }) })
      ] })
    ] }, o)) }) })
  ] });
}
const Fh = /* @__PURE__ */ new Set();
function ga(e, t, r) {
  e || Fh.has(t) || (console.warn(t), Fh.add(t));
}
function bE(e) {
  if (typeof Proxy > "u")
    return e;
  const t = /* @__PURE__ */ new Map(), r = (...o) => (process.env.NODE_ENV !== "production" && ga(!1, "motion() is deprecated. Use motion.create() instead."), e(...o));
  return new Proxy(r, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (o, s) => s === "create" ? e : (t.has(s) || t.set(s, e(s)), t.get(s))
  });
}
function va(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
const Ec = (e) => Array.isArray(e);
function ev(e, t) {
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
function ho(e) {
  return typeof e == "string" || Array.isArray(e);
}
function Bh(e) {
  const t = [{}, {}];
  return e == null || e.values.forEach((r, o) => {
    t[0][o] = r.get(), t[1][o] = r.getVelocity();
  }), t;
}
function lu(e, t, r, o) {
  if (typeof t == "function") {
    const [s, c] = Bh(o);
    t = t(r !== void 0 ? r : e.custom, s, c);
  }
  if (typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function") {
    const [s, c] = Bh(o);
    t = t(r !== void 0 ? r : e.custom, s, c);
  }
  return t;
}
function ya(e, t, r) {
  const o = e.getProps();
  return lu(o, t, r !== void 0 ? r : o.custom, e);
}
const cu = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], uu = ["initial", ...cu], To = [
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
], Lr = new Set(To), hn = (e) => e * 1e3, Ln = (e) => e / 1e3, SE = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, CE = (e) => ({
  type: "spring",
  stiffness: 550,
  damping: e === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), TE = {
  type: "keyframes",
  duration: 0.8
}, _E = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, PE = (e, { keyframes: t }) => t.length > 2 ? TE : Lr.has(e) ? e.startsWith("scale") ? CE(t[1]) : SE : _E;
function fu(e, t) {
  return e ? e[t] || e.default || e : void 0;
}
const AE = {
  skipAnimations: !1,
  useManualTiming: !1
}, EE = (e) => e !== null;
function xa(e, { repeat: t, repeatType: r = "loop" }, o) {
  const s = e.filter(EE), c = t && r !== "loop" && t % 2 === 1 ? 0 : s.length - 1;
  return !c || o === void 0 ? s[c] : o;
}
const ut = (e) => e;
function RE(e) {
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
      const b = g && o ? t : r;
      return p && c.add(h), b.has(h) || b.add(h), h;
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
const Es = [
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
], OE = 40;
function tv(e, t) {
  let r = !1, o = !0;
  const s = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, c = () => r = !0, l = Es.reduce((A, R) => (A[R] = RE(c), A), {}), { read: u, resolveKeyframes: f, update: h, preRender: p, render: g, postRender: v } = l, b = () => {
    const A = performance.now();
    r = !1, s.delta = o ? 1e3 / 60 : Math.max(Math.min(A - s.timestamp, OE), 1), s.timestamp = A, s.isProcessing = !0, u.process(s), f.process(s), h.process(s), p.process(s), g.process(s), v.process(s), s.isProcessing = !1, r && t && (o = !1, e(b));
  }, T = () => {
    r = !0, o = !0, s.isProcessing || e(b);
  };
  return { schedule: Es.reduce((A, R) => {
    const M = l[R];
    return A[R] = (I, V = !1, H = !1) => (r || T(), M.schedule(I, V, H)), A;
  }, {}), cancel: (A) => {
    for (let R = 0; R < Es.length; R++)
      l[Es[R]].cancel(A);
  }, state: s, steps: l };
}
const { schedule: De, cancel: ir, state: ct, steps: Ql } = tv(typeof requestAnimationFrame < "u" ? requestAnimationFrame : ut, !0), nv = (e, t, r) => (((1 - 3 * r + 3 * t) * e + (3 * r - 6 * t)) * e + 3 * t) * e, ME = 1e-7, LE = 12;
function NE(e, t, r, o, s) {
  let c, l, u = 0;
  do
    l = t + (r - t) / 2, c = nv(l, o, s) - e, c > 0 ? r = l : t = l;
  while (Math.abs(c) > ME && ++u < LE);
  return l;
}
function _o(e, t, r, o) {
  if (e === t && r === o)
    return ut;
  const s = (c) => NE(c, 0, 1, e, r);
  return (c) => c === 0 || c === 1 ? c : nv(s(c), t, o);
}
const rv = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, iv = (e) => (t) => 1 - e(1 - t), ov = /* @__PURE__ */ _o(0.33, 1.53, 0.69, 0.99), du = /* @__PURE__ */ iv(ov), sv = /* @__PURE__ */ rv(du), av = (e) => (e *= 2) < 1 ? 0.5 * du(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), hu = (e) => 1 - Math.sin(Math.acos(e)), lv = iv(hu), cv = rv(hu), uv = (e) => /^0[^.\s]+$/u.test(e);
function DE(e) {
  return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || uv(e) : !0;
}
let Ti = ut, or = ut;
process.env.NODE_ENV !== "production" && (Ti = (e, t) => {
  !e && typeof console < "u" && console.warn(t);
}, or = (e, t) => {
  if (!e)
    throw new Error(t);
});
const fv = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e), dv = (e) => (t) => typeof t == "string" && t.startsWith(e), hv = /* @__PURE__ */ dv("--"), IE = /* @__PURE__ */ dv("var(--"), pu = (e) => IE(e) ? VE.test(e.split("/*")[0].trim()) : !1, VE = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, kE = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function jE(e) {
  const t = kE.exec(e);
  if (!t)
    return [,];
  const [, r, o, s] = t;
  return [`--${r ?? o}`, s];
}
const FE = 4;
function pv(e, t, r = 1) {
  or(r <= FE, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);
  const [o, s] = jE(e);
  if (!o)
    return;
  const c = window.getComputedStyle(t).getPropertyValue(o);
  if (c) {
    const l = c.trim();
    return fv(l) ? parseFloat(l) : l;
  }
  return pu(s) ? pv(s, t, r + 1) : s;
}
const sr = (e, t, r) => r > t ? t : r < e ? e : r, _i = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, po = {
  ..._i,
  transform: (e) => sr(0, 1, e)
}, Rs = {
  ..._i,
  default: 1
}, Po = (e) => ({
  test: (t) => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: (t) => `${t}${e}`
}), Qn = /* @__PURE__ */ Po("deg"), pn = /* @__PURE__ */ Po("%"), oe = /* @__PURE__ */ Po("px"), BE = /* @__PURE__ */ Po("vh"), WE = /* @__PURE__ */ Po("vw"), Wh = {
  ...pn,
  parse: (e) => pn.parse(e) / 100,
  transform: (e) => pn.transform(e * 100)
}, UE = /* @__PURE__ */ new Set([
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
]), Uh = (e) => e === _i || e === oe, $h = (e, t) => parseFloat(e.split(", ")[t]), Hh = (e, t) => (r, { transform: o }) => {
  if (o === "none" || !o)
    return 0;
  const s = o.match(/^matrix3d\((.+)\)$/u);
  if (s)
    return $h(s[1], t);
  {
    const c = o.match(/^matrix\((.+)\)$/u);
    return c ? $h(c[1], e) : 0;
  }
}, $E = /* @__PURE__ */ new Set(["x", "y", "z"]), HE = To.filter((e) => !$E.has(e));
function zE(e) {
  const t = [];
  return HE.forEach((r) => {
    const o = e.getValue(r);
    o !== void 0 && (t.push([r, o.get()]), o.set(r.startsWith("scale") ? 1 : 0));
  }), t;
}
const gi = {
  // Dimensions
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: r = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(r),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: r = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(r),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  // Transform
  x: Hh(4, 13),
  y: Hh(5, 14)
};
gi.translateX = gi.x;
gi.translateY = gi.y;
const mv = (e) => (t) => t.test(e), GE = {
  test: (e) => e === "auto",
  parse: (e) => e
}, gv = [_i, oe, pn, Qn, WE, BE, GE], zh = (e) => gv.find(mv(e)), Rr = /* @__PURE__ */ new Set();
let Rc = !1, Oc = !1;
function vv() {
  if (Oc) {
    const e = Array.from(Rr).filter((o) => o.needsMeasurement), t = new Set(e.map((o) => o.element)), r = /* @__PURE__ */ new Map();
    t.forEach((o) => {
      const s = zE(o);
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
  Oc = !1, Rc = !1, Rr.forEach((e) => e.complete()), Rr.clear();
}
function yv() {
  Rr.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (Oc = !0);
  });
}
function KE() {
  yv(), vv();
}
class mu {
  constructor(t, r, o, s, c, l = !1) {
    this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...t], this.onComplete = r, this.name = o, this.motionValue = s, this.element = c, this.isAsync = l;
  }
  scheduleResolve() {
    this.isScheduled = !0, this.isAsync ? (Rr.add(this), Rc || (Rc = !0, De.read(yv), De.resolveKeyframes(vv))) : (this.readKeyframes(), this.complete());
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
    this.isComplete = !0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), Rr.delete(this);
  }
  cancel() {
    this.isComplete || (this.isScheduled = !1, Rr.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const ao = (e) => Math.round(e * 1e5) / 1e5, gu = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function YE(e) {
  return e == null;
}
const qE = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, vu = (e, t) => (r) => !!(typeof r == "string" && qE.test(r) && r.startsWith(e) || t && !YE(r) && Object.prototype.hasOwnProperty.call(r, t)), xv = (e, t, r) => (o) => {
  if (typeof o != "string")
    return o;
  const [s, c, l, u] = o.match(gu);
  return {
    [e]: parseFloat(s),
    [t]: parseFloat(c),
    [r]: parseFloat(l),
    alpha: u !== void 0 ? parseFloat(u) : 1
  };
}, XE = (e) => sr(0, 255, e), ec = {
  ..._i,
  transform: (e) => Math.round(XE(e))
}, Ar = {
  test: /* @__PURE__ */ vu("rgb", "red"),
  parse: /* @__PURE__ */ xv("red", "green", "blue"),
  transform: ({ red: e, green: t, blue: r, alpha: o = 1 }) => "rgba(" + ec.transform(e) + ", " + ec.transform(t) + ", " + ec.transform(r) + ", " + ao(po.transform(o)) + ")"
};
function ZE(e) {
  let t = "", r = "", o = "", s = "";
  return e.length > 5 ? (t = e.substring(1, 3), r = e.substring(3, 5), o = e.substring(5, 7), s = e.substring(7, 9)) : (t = e.substring(1, 2), r = e.substring(2, 3), o = e.substring(3, 4), s = e.substring(4, 5), t += t, r += r, o += o, s += s), {
    red: parseInt(t, 16),
    green: parseInt(r, 16),
    blue: parseInt(o, 16),
    alpha: s ? parseInt(s, 16) / 255 : 1
  };
}
const Mc = {
  test: /* @__PURE__ */ vu("#"),
  parse: ZE,
  transform: Ar.transform
}, ti = {
  test: /* @__PURE__ */ vu("hsl", "hue"),
  parse: /* @__PURE__ */ xv("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: t, lightness: r, alpha: o = 1 }) => "hsla(" + Math.round(e) + ", " + pn.transform(ao(t)) + ", " + pn.transform(ao(r)) + ", " + ao(po.transform(o)) + ")"
}, gt = {
  test: (e) => Ar.test(e) || Mc.test(e) || ti.test(e),
  parse: (e) => Ar.test(e) ? Ar.parse(e) : ti.test(e) ? ti.parse(e) : Mc.parse(e),
  transform: (e) => typeof e == "string" ? e : e.hasOwnProperty("red") ? Ar.transform(e) : ti.transform(e)
}, JE = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function QE(e) {
  var t, r;
  return isNaN(e) && typeof e == "string" && (((t = e.match(gu)) === null || t === void 0 ? void 0 : t.length) || 0) + (((r = e.match(JE)) === null || r === void 0 ? void 0 : r.length) || 0) > 0;
}
const wv = "number", bv = "color", eR = "var", tR = "var(", Gh = "${}", nR = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function mo(e) {
  const t = e.toString(), r = [], o = {
    color: [],
    number: [],
    var: []
  }, s = [];
  let c = 0;
  const u = t.replace(nR, (f) => (gt.test(f) ? (o.color.push(c), s.push(bv), r.push(gt.parse(f))) : f.startsWith(tR) ? (o.var.push(c), s.push(eR), r.push(f)) : (o.number.push(c), s.push(wv), r.push(parseFloat(f))), ++c, Gh)).split(Gh);
  return { values: r, split: u, indexes: o, types: s };
}
function Sv(e) {
  return mo(e).values;
}
function Cv(e) {
  const { split: t, types: r } = mo(e), o = t.length;
  return (s) => {
    let c = "";
    for (let l = 0; l < o; l++)
      if (c += t[l], s[l] !== void 0) {
        const u = r[l];
        u === wv ? c += ao(s[l]) : u === bv ? c += gt.transform(s[l]) : c += s[l];
      }
    return c;
  };
}
const rR = (e) => typeof e == "number" ? 0 : e;
function iR(e) {
  const t = Sv(e);
  return Cv(e)(t.map(rR));
}
const ar = {
  test: QE,
  parse: Sv,
  createTransformer: Cv,
  getAnimatableNone: iR
}, oR = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function sR(e) {
  const [t, r] = e.slice(0, -1).split("(");
  if (t === "drop-shadow")
    return e;
  const [o] = r.match(gu) || [];
  if (!o)
    return e;
  const s = r.replace(o, "");
  let c = oR.has(t) ? 1 : 0;
  return o !== r && (c *= 100), t + "(" + c + s + ")";
}
const aR = /\b([a-z-]*)\(.*?\)/gu, Lc = {
  ...ar,
  getAnimatableNone: (e) => {
    const t = e.match(aR);
    return t ? t.map(sR).join(" ") : e;
  }
}, lR = {
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
}, cR = {
  rotate: Qn,
  rotateX: Qn,
  rotateY: Qn,
  rotateZ: Qn,
  scale: Rs,
  scaleX: Rs,
  scaleY: Rs,
  scaleZ: Rs,
  skew: Qn,
  skewX: Qn,
  skewY: Qn,
  distance: oe,
  translateX: oe,
  translateY: oe,
  translateZ: oe,
  x: oe,
  y: oe,
  z: oe,
  perspective: oe,
  transformPerspective: oe,
  opacity: po,
  originX: Wh,
  originY: Wh,
  originZ: oe
}, Kh = {
  ..._i,
  transform: Math.round
}, yu = {
  ...lR,
  ...cR,
  zIndex: Kh,
  size: oe,
  // SVG
  fillOpacity: po,
  strokeOpacity: po,
  numOctaves: Kh
}, uR = {
  ...yu,
  // Color props
  color: gt,
  backgroundColor: gt,
  outlineColor: gt,
  fill: gt,
  stroke: gt,
  // Border props
  borderColor: gt,
  borderTopColor: gt,
  borderRightColor: gt,
  borderBottomColor: gt,
  borderLeftColor: gt,
  filter: Lc,
  WebkitFilter: Lc
}, xu = (e) => uR[e];
function Tv(e, t) {
  let r = xu(e);
  return r !== Lc && (r = ar), r.getAnimatableNone ? r.getAnimatableNone(t) : void 0;
}
const fR = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function dR(e, t, r) {
  let o = 0, s;
  for (; o < e.length && !s; ) {
    const c = e[o];
    typeof c == "string" && !fR.has(c) && mo(c).values.length && (s = e[o]), o++;
  }
  if (s && r)
    for (const c of t)
      e[c] = Tv(r, s);
}
class _v extends mu {
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
      if (typeof h == "string" && (h = h.trim(), pu(h))) {
        const p = pv(h, r.current);
        p !== void 0 && (t[f] = p), f === t.length - 1 && (this.finalKeyframe = h);
      }
    }
    if (this.resolveNoneKeyframes(), !UE.has(o) || t.length !== 2)
      return;
    const [s, c] = t, l = zh(s), u = zh(c);
    if (l !== u)
      if (Uh(l) && Uh(u))
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
      DE(t[s]) && o.push(s);
    o.length && dR(t, o, r);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: r, name: o } = this;
    if (!t || !t.current)
      return;
    o === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = gi[o](t.measureViewportBox(), window.getComputedStyle(t.current)), r[0] = this.measuredOrigin;
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
    s[l] = gi[o](r.measureViewportBox(), window.getComputedStyle(r.current)), u !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = u), !((t = this.removedTransforms) === null || t === void 0) && t.length && this.removedTransforms.forEach(([f, h]) => {
      r.getValue(f).set(h);
    }), this.resolveNoneKeyframes();
  }
}
function wu(e) {
  return typeof e == "function";
}
let Is;
function hR() {
  Is = void 0;
}
const mn = {
  now: () => (Is === void 0 && mn.set(ct.isProcessing || AE.useManualTiming ? ct.timestamp : performance.now()), Is),
  set: (e) => {
    Is = e, queueMicrotask(hR);
  }
}, Yh = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && // It's animatable if we have a string
(ar.test(e) || e === "0") && // And it contains numbers and/or colors
!e.startsWith("url("));
function pR(e) {
  const t = e[0];
  if (e.length === 1)
    return !0;
  for (let r = 0; r < e.length; r++)
    if (e[r] !== t)
      return !0;
}
function mR(e, t, r, o) {
  const s = e[0];
  if (s === null)
    return !1;
  if (t === "display" || t === "visibility")
    return !0;
  const c = e[e.length - 1], l = Yh(s, t), u = Yh(c, t);
  return Ti(l === u, `You are trying to animate ${t} from "${s}" to "${c}". ${s} is not an animatable value - to enable this animation set ${s} to a value animatable to ${c} via the \`style\` property.`), !l || !u ? !1 : pR(e) || (r === "spring" || wu(r)) && o;
}
const gR = 40;
class Pv {
  constructor({ autoplay: t = !0, delay: r = 0, type: o = "keyframes", repeat: s = 0, repeatDelay: c = 0, repeatType: l = "loop", ...u }) {
    this.isStopped = !1, this.hasAttemptedResolve = !1, this.createdAt = mn.now(), this.options = {
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
    return this.resolvedAt ? this.resolvedAt - this.createdAt > gR ? this.resolvedAt : this.createdAt : this.createdAt;
  }
  /**
   * A getter for resolved data. If keyframes are not yet resolved, accessing
   * this.resolved will synchronously flush all pending keyframe resolvers.
   * This is a deoptimisation, but at its worst still batches read/writes.
   */
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && KE(), this._resolved;
  }
  /**
   * A method to be called when the keyframes resolver completes. This method
   * will check if its possible to run the animation and, if not, skip it.
   * Otherwise, it will call initPlayback on the implementing class.
   */
  onKeyframesResolved(t, r) {
    this.resolvedAt = mn.now(), this.hasAttemptedResolve = !0;
    const { name: o, type: s, velocity: c, delay: l, onComplete: u, onUpdate: f, isGenerator: h } = this.options;
    if (!h && !mR(t, o, s, c))
      if (l)
        this.options.duration = 0;
      else {
        f == null || f(xa(t, this.options, r)), u == null || u(), this.resolveFinishedPromise();
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
function Av(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const vR = 5;
function Ev(e, t, r) {
  const o = Math.max(t - vR, 0);
  return Av(r - e(o), t - o);
}
const tc = 1e-3, yR = 0.01, qh = 10, xR = 0.05, wR = 1;
function bR({ duration: e = 800, bounce: t = 0.25, velocity: r = 0, mass: o = 1 }) {
  let s, c;
  Ti(e <= hn(qh), "Spring duration must be 10 seconds or less");
  let l = 1 - t;
  l = sr(xR, wR, l), e = sr(yR, qh, Ln(e)), l < 1 ? (s = (h) => {
    const p = h * l, g = p * e, v = p - r, b = Nc(h, l), T = Math.exp(-g);
    return tc - v / b * T;
  }, c = (h) => {
    const g = h * l * e, v = g * r + r, b = Math.pow(l, 2) * Math.pow(h, 2) * e, T = Math.exp(-g), w = Nc(Math.pow(h, 2), l);
    return (-s(h) + tc > 0 ? -1 : 1) * ((v - b) * T) / w;
  }) : (s = (h) => {
    const p = Math.exp(-h * e), g = (h - r) * e + 1;
    return -tc + p * g;
  }, c = (h) => {
    const p = Math.exp(-h * e), g = (r - h) * (e * e);
    return p * g;
  });
  const u = 5 / e, f = CR(s, c, u);
  if (e = hn(e), isNaN(f))
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
const SR = 12;
function CR(e, t, r) {
  let o = r;
  for (let s = 1; s < SR; s++)
    o = o - e(o) / t(o);
  return o;
}
function Nc(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const TR = ["duration", "bounce"], _R = ["stiffness", "damping", "mass"];
function Xh(e, t) {
  return t.some((r) => e[r] !== void 0);
}
function PR(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!Xh(e, _R) && Xh(e, TR)) {
    const r = bR(e);
    t = {
      ...t,
      ...r,
      mass: 1
    }, t.isResolvedFromDuration = !0;
  }
  return t;
}
function Rv({ keyframes: e, restDelta: t, restSpeed: r, ...o }) {
  const s = e[0], c = e[e.length - 1], l = { done: !1, value: s }, { stiffness: u, damping: f, mass: h, duration: p, velocity: g, isResolvedFromDuration: v } = PR({
    ...o,
    velocity: -Ln(o.velocity || 0)
  }), b = g || 0, T = f / (2 * Math.sqrt(u * h)), w = c - s, _ = Ln(Math.sqrt(u / h)), A = Math.abs(w) < 5;
  r || (r = A ? 0.01 : 2), t || (t = A ? 5e-3 : 0.5);
  let R;
  if (T < 1) {
    const M = Nc(_, T);
    R = (I) => {
      const V = Math.exp(-T * _ * I);
      return c - V * ((b + T * _ * w) / M * Math.sin(M * I) + w * Math.cos(M * I));
    };
  } else if (T === 1)
    R = (M) => c - Math.exp(-_ * M) * (w + (b + _ * w) * M);
  else {
    const M = _ * Math.sqrt(T * T - 1);
    R = (I) => {
      const V = Math.exp(-T * _ * I), H = Math.min(M * I, 300);
      return c - V * ((b + T * _ * w) * Math.sinh(H) + M * w * Math.cosh(H)) / M;
    };
  }
  return {
    calculatedDuration: v && p || null,
    next: (M) => {
      const I = R(M);
      if (v)
        l.done = M >= p;
      else {
        let V = 0;
        T < 1 && (V = M === 0 ? hn(b) : Ev(R, M, I));
        const H = Math.abs(V) <= r, U = Math.abs(c - I) <= t;
        l.done = H && U;
      }
      return l.value = l.done ? c : I, l;
    }
  };
}
function Zh({ keyframes: e, velocity: t = 0, power: r = 0.8, timeConstant: o = 325, bounceDamping: s = 10, bounceStiffness: c = 500, modifyTarget: l, min: u, max: f, restDelta: h = 0.5, restSpeed: p }) {
  const g = e[0], v = {
    done: !1,
    value: g
  }, b = ($) => u !== void 0 && $ < u || f !== void 0 && $ > f, T = ($) => u === void 0 ? f : f === void 0 || Math.abs(u - $) < Math.abs(f - $) ? u : f;
  let w = r * t;
  const _ = g + w, A = l === void 0 ? _ : l(_);
  A !== _ && (w = A - g);
  const R = ($) => -w * Math.exp(-$ / o), M = ($) => A + R($), I = ($) => {
    const J = R($), ee = M($);
    v.done = Math.abs(J) <= h, v.value = v.done ? A : ee;
  };
  let V, H;
  const U = ($) => {
    b(v.value) && (V = $, H = Rv({
      keyframes: [v.value, T(v.value)],
      velocity: Ev(M, $, v.value),
      // TODO: This should be passing * 1000
      damping: s,
      stiffness: c,
      restDelta: h,
      restSpeed: p
    }));
  };
  return U(0), {
    calculatedDuration: null,
    next: ($) => {
      let J = !1;
      return !H && V === void 0 && (J = !0, I($), U($)), V !== void 0 && $ >= V ? H.next($ - V) : (!J && I($), v);
    }
  };
}
const AR = /* @__PURE__ */ _o(0.42, 0, 1, 1), ER = /* @__PURE__ */ _o(0, 0, 0.58, 1), Ov = /* @__PURE__ */ _o(0.42, 0, 0.58, 1), RR = (e) => Array.isArray(e) && typeof e[0] != "number", bu = (e) => Array.isArray(e) && typeof e[0] == "number", Jh = {
  linear: ut,
  easeIn: AR,
  easeInOut: Ov,
  easeOut: ER,
  circIn: hu,
  circInOut: cv,
  circOut: lv,
  backIn: du,
  backInOut: sv,
  backOut: ov,
  anticipate: av
}, Qh = (e) => {
  if (bu(e)) {
    or(e.length === 4, "Cubic bezier arrays must contain four numerical values.");
    const [t, r, o, s] = e;
    return _o(t, r, o, s);
  } else if (typeof e == "string")
    return or(Jh[e] !== void 0, `Invalid easing type '${e}'`), Jh[e];
  return e;
}, OR = (e, t) => (r) => t(e(r)), Nn = (...e) => e.reduce(OR), vi = (e, t, r) => {
  const o = t - e;
  return o === 0 ? 1 : (r - e) / o;
}, ze = (e, t, r) => e + (t - e) * r;
function nc(e, t, r) {
  return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + (t - e) * 6 * r : r < 1 / 2 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e;
}
function MR({ hue: e, saturation: t, lightness: r, alpha: o }) {
  e /= 360, t /= 100, r /= 100;
  let s = 0, c = 0, l = 0;
  if (!t)
    s = c = l = r;
  else {
    const u = r < 0.5 ? r * (1 + t) : r + t - r * t, f = 2 * r - u;
    s = nc(f, u, e + 1 / 3), c = nc(f, u, e), l = nc(f, u, e - 1 / 3);
  }
  return {
    red: Math.round(s * 255),
    green: Math.round(c * 255),
    blue: Math.round(l * 255),
    alpha: o
  };
}
function Ys(e, t) {
  return (r) => r > 0 ? t : e;
}
const rc = (e, t, r) => {
  const o = e * e, s = r * (t * t - o) + o;
  return s < 0 ? 0 : Math.sqrt(s);
}, LR = [Mc, Ar, ti], NR = (e) => LR.find((t) => t.test(e));
function ep(e) {
  const t = NR(e);
  if (Ti(!!t, `'${e}' is not an animatable color. Use the equivalent color code instead.`), !t)
    return !1;
  let r = t.parse(e);
  return t === ti && (r = MR(r)), r;
}
const tp = (e, t) => {
  const r = ep(e), o = ep(t);
  if (!r || !o)
    return Ys(e, t);
  const s = { ...r };
  return (c) => (s.red = rc(r.red, o.red, c), s.green = rc(r.green, o.green, c), s.blue = rc(r.blue, o.blue, c), s.alpha = ze(r.alpha, o.alpha, c), Ar.transform(s));
}, Dc = /* @__PURE__ */ new Set(["none", "hidden"]);
function DR(e, t) {
  return Dc.has(e) ? (r) => r <= 0 ? e : t : (r) => r >= 1 ? t : e;
}
function IR(e, t) {
  return (r) => ze(e, t, r);
}
function Su(e) {
  return typeof e == "number" ? IR : typeof e == "string" ? pu(e) ? Ys : gt.test(e) ? tp : jR : Array.isArray(e) ? Mv : typeof e == "object" ? gt.test(e) ? tp : VR : Ys;
}
function Mv(e, t) {
  const r = [...e], o = r.length, s = e.map((c, l) => Su(c)(c, t[l]));
  return (c) => {
    for (let l = 0; l < o; l++)
      r[l] = s[l](c);
    return r;
  };
}
function VR(e, t) {
  const r = { ...e, ...t }, o = {};
  for (const s in r)
    e[s] !== void 0 && t[s] !== void 0 && (o[s] = Su(e[s])(e[s], t[s]));
  return (s) => {
    for (const c in o)
      r[c] = o[c](s);
    return r;
  };
}
function kR(e, t) {
  var r;
  const o = [], s = { color: 0, var: 0, number: 0 };
  for (let c = 0; c < t.values.length; c++) {
    const l = t.types[c], u = e.indexes[l][s[l]], f = (r = e.values[u]) !== null && r !== void 0 ? r : 0;
    o[c] = f, s[l]++;
  }
  return o;
}
const jR = (e, t) => {
  const r = ar.createTransformer(t), o = mo(e), s = mo(t);
  return o.indexes.var.length === s.indexes.var.length && o.indexes.color.length === s.indexes.color.length && o.indexes.number.length >= s.indexes.number.length ? Dc.has(e) && !s.values.length || Dc.has(t) && !o.values.length ? DR(e, t) : Nn(Mv(kR(o, s), s.values), r) : (Ti(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), Ys(e, t));
};
function Lv(e, t, r) {
  return typeof e == "number" && typeof t == "number" && typeof r == "number" ? ze(e, t, r) : Su(e)(e, t);
}
function FR(e, t, r) {
  const o = [], s = r || Lv, c = e.length - 1;
  for (let l = 0; l < c; l++) {
    let u = s(e[l], e[l + 1]);
    if (t) {
      const f = Array.isArray(t) ? t[l] || ut : t;
      u = Nn(f, u);
    }
    o.push(u);
  }
  return o;
}
function BR(e, t, { clamp: r = !0, ease: o, mixer: s } = {}) {
  const c = e.length;
  if (or(c === t.length, "Both input and output ranges must be the same length"), c === 1)
    return () => t[0];
  if (c === 2 && e[0] === e[1])
    return () => t[1];
  e[0] > e[c - 1] && (e = [...e].reverse(), t = [...t].reverse());
  const l = FR(t, o, s), u = l.length, f = (h) => {
    let p = 0;
    if (u > 1)
      for (; p < e.length - 2 && !(h < e[p + 1]); p++)
        ;
    const g = vi(e[p], e[p + 1], h);
    return l[p](g);
  };
  return r ? (h) => f(sr(e[0], e[c - 1], h)) : f;
}
function WR(e, t) {
  const r = e[e.length - 1];
  for (let o = 1; o <= t; o++) {
    const s = vi(0, t, o);
    e.push(ze(r, 1, s));
  }
}
function UR(e) {
  const t = [0];
  return WR(t, e.length - 1), t;
}
function $R(e, t) {
  return e.map((r) => r * t);
}
function HR(e, t) {
  return e.map(() => t || Ov).splice(0, e.length - 1);
}
function qs({ duration: e = 300, keyframes: t, times: r, ease: o = "easeInOut" }) {
  const s = RR(o) ? o.map(Qh) : Qh(o), c = {
    done: !1,
    value: t[0]
  }, l = $R(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    r && r.length === t.length ? r : UR(t),
    e
  ), u = BR(l, t, {
    ease: Array.isArray(s) ? s : HR(t, s)
  });
  return {
    calculatedDuration: e,
    next: (f) => (c.value = u(f), c.done = f >= e, c)
  };
}
const np = 2e4;
function zR(e) {
  let t = 0;
  const r = 50;
  let o = e.next(t);
  for (; !o.done && t < np; )
    t += r, o = e.next(t);
  return t >= np ? 1 / 0 : t;
}
const GR = (e) => {
  const t = ({ timestamp: r }) => e(r);
  return {
    start: () => De.update(t, !0),
    stop: () => ir(t),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => ct.isProcessing ? ct.timestamp : mn.now()
  };
}, KR = {
  decay: Zh,
  inertia: Zh,
  tween: qs,
  keyframes: qs,
  spring: Rv
}, YR = (e) => e / 100;
class Cu extends Pv {
  constructor(t) {
    super(t), this.holdTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.startTime = null, this.state = "idle", this.stop = () => {
      if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle")
        return;
      this.teardown();
      const { onStop: f } = this.options;
      f && f();
    };
    const { name: r, motionValue: o, element: s, keyframes: c } = this.options, l = (s == null ? void 0 : s.KeyframeResolver) || mu, u = (f, h) => this.onKeyframesResolved(f, h);
    this.resolver = new l(c, u, r, o, s), this.resolver.scheduleResolve();
  }
  flatten() {
    super.flatten(), this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes));
  }
  initPlayback(t) {
    const { type: r = "keyframes", repeat: o = 0, repeatDelay: s = 0, repeatType: c, velocity: l = 0 } = this.options, u = wu(r) ? r : KR[r] || qs;
    let f, h;
    u !== qs && typeof t[0] != "number" && (process.env.NODE_ENV !== "production" && or(t.length === 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${t}`), f = Nn(YR, Lv(t[0], t[1])), t = [0, 100]);
    const p = u({ ...this.options, keyframes: t });
    c === "mirror" && (h = u({
      ...this.options,
      keyframes: [...t].reverse(),
      velocity: -l
    })), p.calculatedDuration === null && (p.calculatedDuration = zR(p));
    const { calculatedDuration: g } = p, v = g + s, b = v * (o + 1) - s;
    return {
      generator: p,
      mirroredGenerator: h,
      mapPercentToKeyframes: f,
      calculatedDuration: g,
      resolvedDuration: v,
      totalDuration: b
    };
  }
  onPostResolved() {
    const { autoplay: t = !0 } = this.options;
    this.play(), this.pendingPlayState === "paused" || !t ? this.pause() : this.state = this.pendingPlayState;
  }
  tick(t, r = !1) {
    const { resolved: o } = this;
    if (!o) {
      const { keyframes: $ } = this.options;
      return { done: !0, value: $[$.length - 1] };
    }
    const { finalKeyframe: s, generator: c, mirroredGenerator: l, mapPercentToKeyframes: u, keyframes: f, calculatedDuration: h, totalDuration: p, resolvedDuration: g } = o;
    if (this.startTime === null)
      return c.next(0);
    const { delay: v, repeat: b, repeatType: T, repeatDelay: w, onUpdate: _ } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - p / this.speed, this.startTime)), r ? this.currentTime = t : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(t - this.startTime) * this.speed;
    const A = this.currentTime - v * (this.speed >= 0 ? 1 : -1), R = this.speed >= 0 ? A < 0 : A > p;
    this.currentTime = Math.max(A, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = p);
    let M = this.currentTime, I = c;
    if (b) {
      const $ = Math.min(this.currentTime, p) / g;
      let J = Math.floor($), ee = $ % 1;
      !ee && $ >= 1 && (ee = 1), ee === 1 && J--, J = Math.min(J, b + 1), !!(J % 2) && (T === "reverse" ? (ee = 1 - ee, w && (ee -= w / g)) : T === "mirror" && (I = l)), M = sr(0, 1, ee) * g;
    }
    const V = R ? { done: !1, value: f[0] } : I.next(M);
    u && (V.value = u(V.value));
    let { done: H } = V;
    !R && h !== null && (H = this.speed >= 0 ? this.currentTime >= p : this.currentTime <= 0);
    const U = this.holdTime === null && (this.state === "finished" || this.state === "running" && H);
    return U && s !== void 0 && (V.value = xa(f, this.options, s)), _ && _(V.value), U && this.finish(), V;
  }
  get duration() {
    const { resolved: t } = this;
    return t ? Ln(t.calculatedDuration) : 0;
  }
  get time() {
    return Ln(this.currentTime);
  }
  set time(t) {
    t = hn(t), this.currentTime = t, this.holdTime !== null || this.speed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const r = this.playbackSpeed !== t;
    this.playbackSpeed = t, r && (this.time = Ln(this.currentTime));
  }
  play() {
    if (this.resolver.isScheduled || this.resolver.resume(), !this._resolved) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped)
      return;
    const { driver: t = GR, onPlay: r, startTime: o } = this.options;
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
const qR = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Can be accelerated but currently disabled until https://issues.chromium.org/issues/41491098 is resolved
  // or until we implement support for linear() easing.
  // "background-color"
]), XR = 10, ZR = (e, t) => {
  let r = "";
  const o = Math.max(Math.round(t / XR), 2);
  for (let s = 0; s < o; s++)
    r += e(vi(0, o - 1, s)) + ", ";
  return `linear(${r.substring(0, r.length - 2)})`;
};
function Tu(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const JR = {
  linearEasing: void 0
};
function QR(e, t) {
  const r = Tu(e);
  return () => {
    var o;
    return (o = JR[t]) !== null && o !== void 0 ? o : r();
  };
}
const Xs = /* @__PURE__ */ QR(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing");
function Nv(e) {
  return !!(typeof e == "function" && Xs() || !e || typeof e == "string" && (e in Ic || Xs()) || bu(e) || Array.isArray(e) && e.every(Nv));
}
const oo = ([e, t, r, o]) => `cubic-bezier(${e}, ${t}, ${r}, ${o})`, Ic = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ oo([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ oo([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ oo([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ oo([0.33, 1.53, 0.69, 0.99])
};
function Dv(e, t) {
  if (e)
    return typeof e == "function" && Xs() ? ZR(e, t) : bu(e) ? oo(e) : Array.isArray(e) ? e.map((r) => Dv(r, t) || Ic.easeOut) : Ic[e];
}
function eO(e, t, r, { delay: o = 0, duration: s = 300, repeat: c = 0, repeatType: l = "loop", ease: u = "easeInOut", times: f } = {}) {
  const h = { [t]: r };
  f && (h.offset = f);
  const p = Dv(u, s);
  return Array.isArray(p) && (h.easing = p), e.animate(h, {
    delay: o,
    duration: s,
    easing: Array.isArray(p) ? "linear" : p,
    fill: "both",
    iterations: c + 1,
    direction: l === "reverse" ? "alternate" : "normal"
  });
}
function rp(e, t) {
  e.timeline = t, e.onfinish = null;
}
const tO = /* @__PURE__ */ Tu(() => Object.hasOwnProperty.call(Element.prototype, "animate")), Zs = 10, nO = 2e4;
function rO(e) {
  return wu(e.type) || e.type === "spring" || !Nv(e.ease);
}
function iO(e, t) {
  const r = new Cu({
    ...t,
    keyframes: e,
    repeat: 0,
    delay: 0,
    isGenerator: !0
  });
  let o = { done: !1, value: e[0] };
  const s = [];
  let c = 0;
  for (; !o.done && c < nO; )
    o = r.sample(c), s.push(o.value), c += Zs;
  return {
    times: void 0,
    keyframes: s,
    duration: c - Zs,
    ease: "linear"
  };
}
const Iv = {
  anticipate: av,
  backInOut: sv,
  circInOut: cv
};
function oO(e) {
  return e in Iv;
}
class ip extends Pv {
  constructor(t) {
    super(t);
    const { name: r, motionValue: o, element: s, keyframes: c } = this.options;
    this.resolver = new _v(c, (l, u) => this.onKeyframesResolved(l, u), r, o, s), this.resolver.scheduleResolve();
  }
  initPlayback(t, r) {
    var o;
    let { duration: s = 300, times: c, ease: l, type: u, motionValue: f, name: h, startTime: p } = this.options;
    if (!(!((o = f.owner) === null || o === void 0) && o.current))
      return !1;
    if (typeof l == "string" && Xs() && oO(l) && (l = Iv[l]), rO(this.options)) {
      const { onComplete: v, onUpdate: b, motionValue: T, element: w, ..._ } = this.options, A = iO(t, _);
      t = A.keyframes, t.length === 1 && (t[1] = t[0]), s = A.duration, c = A.times, l = A.ease, u = "keyframes";
    }
    const g = eO(f.owner.current, h, t, { ...this.options, duration: s, times: c, ease: l });
    return g.startTime = p ?? this.calcStartTime(), this.pendingTimeline ? (rp(g, this.pendingTimeline), this.pendingTimeline = void 0) : g.onfinish = () => {
      const { onComplete: v } = this.options;
      f.set(xa(t, this.options, r)), v && v(), this.cancel(), this.resolveFinishedPromise();
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
    return Ln(r);
  }
  get time() {
    const { resolved: t } = this;
    if (!t)
      return 0;
    const { animation: r } = t;
    return Ln(r.currentTime || 0);
  }
  set time(t) {
    const { resolved: r } = this;
    if (!r)
      return;
    const { animation: o } = r;
    o.currentTime = hn(t);
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
        return ut;
      const { animation: o } = r;
      rp(o, t);
    }
    return ut;
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
      const { motionValue: h, onUpdate: p, onComplete: g, element: v, ...b } = this.options, T = new Cu({
        ...b,
        keyframes: o,
        duration: s,
        type: c,
        ease: l,
        times: u,
        isGenerator: !0
      }), w = hn(this.time);
      h.setWithVelocity(T.sample(w - Zs).value, T.sample(w).value, Zs);
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
    return tO() && o && qR.has(o) && r && r.owner && r.owner.current instanceof HTMLElement && /**
     * If we're outputting values to onUpdate then we can't use WAAPI as there's
     * no way to read the value from WAAPI every frame.
     */
    !r.owner.getProps().onUpdate && !s && c !== "mirror" && l !== 0 && u !== "inertia";
  }
}
const sO = Tu(() => window.ScrollTimeline !== void 0);
class aO {
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
    const o = this.animations.map((s) => sO() && s.attachTimeline ? s.attachTimeline(t) : r(s));
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
function lO({ when: e, delay: t, delayChildren: r, staggerChildren: o, staggerDirection: s, repeat: c, repeatType: l, repeatDelay: u, from: f, elapsed: h, ...p }) {
  return !!Object.keys(p).length;
}
const _u = (e, t, r, o = {}, s, c) => (l) => {
  const u = fu(o, e) || {}, f = u.delay || o.delay || 0;
  let { elapsed: h = 0 } = o;
  h = h - hn(f);
  let p = {
    keyframes: Array.isArray(r) ? r : [null, r],
    ease: "easeOut",
    velocity: t.getVelocity(),
    ...u,
    delay: -h,
    onUpdate: (v) => {
      t.set(v), u.onUpdate && u.onUpdate(v);
    },
    onComplete: () => {
      l(), u.onComplete && u.onComplete();
    },
    name: e,
    motionValue: t,
    element: c ? void 0 : s
  };
  lO(u) || (p = {
    ...p,
    ...PE(e, p)
  }), p.duration && (p.duration = hn(p.duration)), p.repeatDelay && (p.repeatDelay = hn(p.repeatDelay)), p.from !== void 0 && (p.keyframes[0] = p.from);
  let g = !1;
  if ((p.type === !1 || p.duration === 0 && !p.repeatDelay) && (p.duration = 0, p.delay === 0 && (g = !0)), g && !c && t.get() !== void 0) {
    const v = xa(p.keyframes, u);
    if (v !== void 0)
      return De.update(() => {
        p.onUpdate(v), p.onComplete();
      }), new aO([]);
  }
  return !c && ip.supports(p) ? new ip(p) : new Cu(p);
}, cO = (e) => !!(e && typeof e == "object" && e.mix && e.toValue), uO = (e) => Ec(e) ? e[e.length - 1] || 0 : e;
function Pu(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Au(e, t) {
  const r = e.indexOf(t);
  r > -1 && e.splice(r, 1);
}
class Eu {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return Pu(this.subscriptions, t), () => Au(this.subscriptions, t);
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
const op = 30, fO = (e) => !isNaN(parseFloat(e));
class dO {
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
      const c = mn.now();
      this.updatedAt !== c && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(o), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), s && this.events.renderRequest && this.events.renderRequest.notify(this.current);
    }, this.hasAnimated = !1, this.setCurrent(t), this.owner = r.owner;
  }
  setCurrent(t) {
    this.current = t, this.updatedAt = mn.now(), this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = fO(this.current));
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
    return process.env.NODE_ENV !== "production" && ga(!1, 'value.onChange(callback) is deprecated. Switch to value.on("change", callback).'), this.on("change", t);
  }
  on(t, r) {
    this.events[t] || (this.events[t] = new Eu());
    const o = this.events[t].add(r);
    return t === "change" ? () => {
      o(), De.read(() => {
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
    const t = mn.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > op)
      return 0;
    const r = Math.min(this.updatedAt - this.prevUpdatedAt, op);
    return Av(parseFloat(this.current) - parseFloat(this.prevFrameValue), r);
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
function go(e, t) {
  return new dO(e, t);
}
function hO(e, t, r) {
  e.hasValue(t) ? e.getValue(t).set(r) : e.addValue(t, go(r));
}
function pO(e, t) {
  const r = ya(e, t);
  let { transitionEnd: o = {}, transition: s = {}, ...c } = r || {};
  c = { ...c, ...o };
  for (const l in c) {
    const u = uO(c[l]);
    hO(e, l, u);
  }
}
const Ru = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), mO = "framerAppearId", Vv = "data-" + Ru(mO);
function kv(e) {
  return e.props[Vv];
}
const vt = (e) => !!(e && e.getVelocity);
function gO(e) {
  return !!(vt(e) && e.add);
}
function Vc(e, t) {
  const r = e.getValue("willChange");
  if (gO(r))
    return r.add(t);
}
function vO({ protectedKeys: e, needsAnimating: t }, r) {
  const o = e.hasOwnProperty(r) && t[r] !== !0;
  return t[r] = !1, o;
}
function jv(e, t, { delay: r = 0, transitionOverride: o, type: s } = {}) {
  var c;
  let { transition: l = e.getDefaultTransition(), transitionEnd: u, ...f } = t;
  o && (l = o);
  const h = [], p = s && e.animationState && e.animationState.getState()[s];
  for (const g in f) {
    const v = e.getValue(g, (c = e.latestValues[g]) !== null && c !== void 0 ? c : null), b = f[g];
    if (b === void 0 || p && vO(p, g))
      continue;
    const T = {
      delay: r,
      ...fu(l || {}, g)
    };
    let w = !1;
    if (window.MotionHandoffAnimation) {
      const A = kv(e);
      if (A) {
        const R = window.MotionHandoffAnimation(A, g, De);
        R !== null && (T.startTime = R, w = !0);
      }
    }
    Vc(e, g), v.start(_u(g, v, b, e.shouldReduceMotion && Lr.has(g) ? { type: !1 } : T, e, w));
    const _ = v.animation;
    _ && h.push(_);
  }
  return u && Promise.all(h).then(() => {
    De.update(() => {
      u && pO(e, u);
    });
  }), h;
}
function kc(e, t, r = {}) {
  var o;
  const s = ya(e, t, r.type === "exit" ? (o = e.presenceContext) === null || o === void 0 ? void 0 : o.custom : void 0);
  let { transition: c = e.getDefaultTransition() || {} } = s || {};
  r.transitionOverride && (c = r.transitionOverride);
  const l = s ? () => Promise.all(jv(e, s, r)) : () => Promise.resolve(), u = e.variantChildren && e.variantChildren.size ? (h = 0) => {
    const { delayChildren: p = 0, staggerChildren: g, staggerDirection: v } = c;
    return yO(e, t, p + h, g, v, r);
  } : () => Promise.resolve(), { when: f } = c;
  if (f) {
    const [h, p] = f === "beforeChildren" ? [l, u] : [u, l];
    return h().then(() => p());
  } else
    return Promise.all([l(), u(r.delay)]);
}
function yO(e, t, r = 0, o = 0, s = 1, c) {
  const l = [], u = (e.variantChildren.size - 1) * o, f = s === 1 ? (h = 0) => h * o : (h = 0) => u - h * o;
  return Array.from(e.variantChildren).sort(xO).forEach((h, p) => {
    h.notify("AnimationStart", t), l.push(kc(h, t, {
      ...c,
      delay: r + f(p)
    }).then(() => h.notify("AnimationComplete", t)));
  }), Promise.all(l);
}
function xO(e, t) {
  return e.sortNodePosition(t);
}
function wO(e, t, r = {}) {
  e.notify("AnimationStart", t);
  let o;
  if (Array.isArray(t)) {
    const s = t.map((c) => kc(e, c, r));
    o = Promise.all(s);
  } else if (typeof t == "string")
    o = kc(e, t, r);
  else {
    const s = typeof t == "function" ? ya(e, t, r.custom) : t;
    o = Promise.all(jv(e, s, r));
  }
  return o.then(() => {
    e.notify("AnimationComplete", t);
  });
}
const bO = uu.length;
function Fv(e) {
  if (!e)
    return;
  if (!e.isControllingVariants) {
    const r = e.parent ? Fv(e.parent) || {} : {};
    return e.props.initial !== void 0 && (r.initial = e.props.initial), r;
  }
  const t = {};
  for (let r = 0; r < bO; r++) {
    const o = uu[r], s = e.props[o];
    (ho(s) || s === !1) && (t[o] = s);
  }
  return t;
}
const SO = [...cu].reverse(), CO = cu.length;
function TO(e) {
  return (t) => Promise.all(t.map(({ animation: r, options: o }) => wO(e, r, o)));
}
function _O(e) {
  let t = TO(e), r = sp(), o = !0;
  const s = (f) => (h, p) => {
    var g;
    const v = ya(e, p, f === "exit" ? (g = e.presenceContext) === null || g === void 0 ? void 0 : g.custom : void 0);
    if (v) {
      const { transition: b, transitionEnd: T, ...w } = v;
      h = { ...h, ...w, ...T };
    }
    return h;
  };
  function c(f) {
    t = f(e);
  }
  function l(f) {
    const { props: h } = e, p = Fv(e.parent) || {}, g = [], v = /* @__PURE__ */ new Set();
    let b = {}, T = 1 / 0;
    for (let _ = 0; _ < CO; _++) {
      const A = SO[_], R = r[A], M = h[A] !== void 0 ? h[A] : p[A], I = ho(M), V = A === f ? R.isActive : null;
      V === !1 && (T = _);
      let H = M === p[A] && M !== h[A] && I;
      if (H && o && e.manuallyAnimateOnMount && (H = !1), R.protectedKeys = { ...b }, // If it isn't active and hasn't *just* been set as inactive
      !R.isActive && V === null || // If we didn't and don't have any defined prop for this animation type
      !M && !R.prevProp || // Or if the prop doesn't define an animation
      va(M) || typeof M == "boolean")
        continue;
      const U = PO(R.prevProp, M);
      let $ = U || // If we're making this variant active, we want to always make it active
      A === f && R.isActive && !H && I || // If we removed a higher-priority variant (i is in reverse order)
      _ > T && I, J = !1;
      const ee = Array.isArray(M) ? M : [M];
      let he = ee.reduce(s(A), {});
      V === !1 && (he = {});
      const { prevResolvedValues: Z = {} } = R, ae = {
        ...Z,
        ...he
      }, te = (X) => {
        $ = !0, v.has(X) && (J = !0, v.delete(X)), R.needsAnimating[X] = !0;
        const K = e.getValue(X);
        K && (K.liveStyle = !1);
      };
      for (const X in ae) {
        const K = he[X], pe = Z[X];
        if (b.hasOwnProperty(X))
          continue;
        let Me = !1;
        Ec(K) && Ec(pe) ? Me = !ev(K, pe) : Me = K !== pe, Me ? K != null ? te(X) : v.add(X) : K !== void 0 && v.has(X) ? te(X) : R.protectedKeys[X] = !0;
      }
      R.prevProp = M, R.prevResolvedValues = he, R.isActive && (b = { ...b, ...he }), o && e.blockInitialAnimation && ($ = !1), $ && (!(H && U) || J) && g.push(...ee.map((X) => ({
        animation: X,
        options: { type: A }
      })));
    }
    if (v.size) {
      const _ = {};
      v.forEach((A) => {
        const R = e.getBaseTarget(A), M = e.getValue(A);
        M && (M.liveStyle = !0), _[A] = R ?? null;
      }), g.push({ animation: _ });
    }
    let w = !!g.length;
    return o && (h.initial === !1 || h.initial === h.animate) && !e.manuallyAnimateOnMount && (w = !1), o = !1, w ? t(g) : Promise.resolve();
  }
  function u(f, h) {
    var p;
    if (r[f].isActive === h)
      return Promise.resolve();
    (p = e.variantChildren) === null || p === void 0 || p.forEach((v) => {
      var b;
      return (b = v.animationState) === null || b === void 0 ? void 0 : b.setActive(f, h);
    }), r[f].isActive = h;
    const g = l(f);
    for (const v in r)
      r[v].protectedKeys = {};
    return g;
  }
  return {
    animateChanges: l,
    setActive: u,
    setAnimateFunction: c,
    getState: () => r,
    reset: () => {
      r = sp(), o = !0;
    }
  };
}
function PO(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !ev(t, e) : !1;
}
function Tr(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function sp() {
  return {
    animate: Tr(!0),
    whileInView: Tr(),
    whileHover: Tr(),
    whileTap: Tr(),
    whileDrag: Tr(),
    whileFocus: Tr(),
    exit: Tr()
  };
}
class fr {
  constructor(t) {
    this.isMounted = !1, this.node = t;
  }
  update() {
  }
}
class AO extends fr {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(t) {
    super(t), t.animationState || (t.animationState = _O(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    va(t) && (this.unmountControls = t.subscribe(this.node));
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
let EO = 0;
class RO extends fr {
  constructor() {
    super(...arguments), this.id = EO++;
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
const OO = {
  animation: {
    Feature: AO
  },
  exit: {
    Feature: RO
  }
}, Bv = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1;
function wa(e, t = "page") {
  return {
    point: {
      x: e[`${t}X`],
      y: e[`${t}Y`]
    }
  };
}
const MO = (e) => (t) => Bv(t) && e(t, wa(t));
function Mn(e, t, r, o = { passive: !0 }) {
  return e.addEventListener(t, r, o), () => e.removeEventListener(t, r);
}
function Dn(e, t, r, o) {
  return Mn(e, t, MO(r), o);
}
const ap = (e, t) => Math.abs(e - t);
function LO(e, t) {
  const r = ap(e.x, t.x), o = ap(e.y, t.y);
  return Math.sqrt(r ** 2 + o ** 2);
}
class Wv {
  constructor(t, r, { transformPagePoint: o, contextWindow: s, dragSnapToOrigin: c = !1 } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const g = oc(this.lastMoveEventInfo, this.history), v = this.startEvent !== null, b = LO(g.offset, { x: 0, y: 0 }) >= 3;
      if (!v && !b)
        return;
      const { point: T } = g, { timestamp: w } = ct;
      this.history.push({ ...T, timestamp: w });
      const { onStart: _, onMove: A } = this.handlers;
      v || (_ && _(this.lastMoveEvent, g), this.startEvent = this.lastMoveEvent), A && A(this.lastMoveEvent, g);
    }, this.handlePointerMove = (g, v) => {
      this.lastMoveEvent = g, this.lastMoveEventInfo = ic(v, this.transformPagePoint), De.update(this.updatePoint, !0);
    }, this.handlePointerUp = (g, v) => {
      this.end();
      const { onEnd: b, onSessionEnd: T, resumeAnimation: w } = this.handlers;
      if (this.dragSnapToOrigin && w && w(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const _ = oc(g.type === "pointercancel" ? this.lastMoveEventInfo : ic(v, this.transformPagePoint), this.history);
      this.startEvent && b && b(g, _), T && T(g, _);
    }, !Bv(t))
      return;
    this.dragSnapToOrigin = c, this.handlers = r, this.transformPagePoint = o, this.contextWindow = s || window;
    const l = wa(t), u = ic(l, this.transformPagePoint), { point: f } = u, { timestamp: h } = ct;
    this.history = [{ ...f, timestamp: h }];
    const { onSessionStart: p } = r;
    p && p(t, oc(u, this.history)), this.removeListeners = Nn(Dn(this.contextWindow, "pointermove", this.handlePointerMove), Dn(this.contextWindow, "pointerup", this.handlePointerUp), Dn(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), ir(this.updatePoint);
  }
}
function ic(e, t) {
  return t ? { point: t(e.point) } : e;
}
function lp(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function oc({ point: e }, t) {
  return {
    point: e,
    delta: lp(e, Uv(t)),
    offset: lp(e, NO(t)),
    velocity: DO(t, 0.1)
  };
}
function NO(e) {
  return e[0];
}
function Uv(e) {
  return e[e.length - 1];
}
function DO(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let r = e.length - 1, o = null;
  const s = Uv(e);
  for (; r >= 0 && (o = e[r], !(s.timestamp - o.timestamp > hn(t))); )
    r--;
  if (!o)
    return { x: 0, y: 0 };
  const c = Ln(s.timestamp - o.timestamp);
  if (c === 0)
    return { x: 0, y: 0 };
  const l = {
    x: (s.x - o.x) / c,
    y: (s.y - o.y) / c
  };
  return l.x === 1 / 0 && (l.x = 0), l.y === 1 / 0 && (l.y = 0), l;
}
function $v(e) {
  let t = null;
  return () => {
    const r = () => {
      t = null;
    };
    return t === null ? (t = e, r) : !1;
  };
}
const cp = $v("dragHorizontal"), up = $v("dragVertical");
function Hv(e) {
  let t = !1;
  if (e === "y")
    t = up();
  else if (e === "x")
    t = cp();
  else {
    const r = cp(), o = up();
    r && o ? t = () => {
      r(), o();
    } : (r && r(), o && o());
  }
  return t;
}
function zv() {
  const e = Hv(!0);
  return e ? (e(), !1) : !0;
}
function ni(e) {
  return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
const Gv = 1e-4, IO = 1 - Gv, VO = 1 + Gv, Kv = 0.01, kO = 0 - Kv, jO = 0 + Kv;
function jt(e) {
  return e.max - e.min;
}
function FO(e, t, r) {
  return Math.abs(e - t) <= r;
}
function fp(e, t, r, o = 0.5) {
  e.origin = o, e.originPoint = ze(t.min, t.max, e.origin), e.scale = jt(r) / jt(t), e.translate = ze(r.min, r.max, e.origin) - e.originPoint, (e.scale >= IO && e.scale <= VO || isNaN(e.scale)) && (e.scale = 1), (e.translate >= kO && e.translate <= jO || isNaN(e.translate)) && (e.translate = 0);
}
function lo(e, t, r, o) {
  fp(e.x, t.x, r.x, o ? o.originX : void 0), fp(e.y, t.y, r.y, o ? o.originY : void 0);
}
function dp(e, t, r) {
  e.min = r.min + t.min, e.max = e.min + jt(t);
}
function BO(e, t, r) {
  dp(e.x, t.x, r.x), dp(e.y, t.y, r.y);
}
function hp(e, t, r) {
  e.min = t.min - r.min, e.max = e.min + jt(t);
}
function co(e, t, r) {
  hp(e.x, t.x, r.x), hp(e.y, t.y, r.y);
}
function WO(e, { min: t, max: r }, o) {
  return t !== void 0 && e < t ? e = o ? ze(t, e, o.min) : Math.max(e, t) : r !== void 0 && e > r && (e = o ? ze(r, e, o.max) : Math.min(e, r)), e;
}
function pp(e, t, r) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: r !== void 0 ? e.max + r - (e.max - e.min) : void 0
  };
}
function UO(e, { top: t, left: r, bottom: o, right: s }) {
  return {
    x: pp(e.x, r, s),
    y: pp(e.y, t, o)
  };
}
function mp(e, t) {
  let r = t.min - e.min, o = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([r, o] = [o, r]), { min: r, max: o };
}
function $O(e, t) {
  return {
    x: mp(e.x, t.x),
    y: mp(e.y, t.y)
  };
}
function HO(e, t) {
  let r = 0.5;
  const o = jt(e), s = jt(t);
  return s > o ? r = vi(t.min, t.max - o, e.min) : o > s && (r = vi(e.min, e.max - s, t.min)), sr(0, 1, r);
}
function zO(e, t) {
  const r = {};
  return t.min !== void 0 && (r.min = t.min - e.min), t.max !== void 0 && (r.max = t.max - e.min), r;
}
const jc = 0.35;
function GO(e = jc) {
  return e === !1 ? e = 0 : e === !0 && (e = jc), {
    x: gp(e, "left", "right"),
    y: gp(e, "top", "bottom")
  };
}
function gp(e, t, r) {
  return {
    min: vp(e, t),
    max: vp(e, r)
  };
}
function vp(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const yp = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), ri = () => ({
  x: yp(),
  y: yp()
}), xp = () => ({ min: 0, max: 0 }), Ze = () => ({
  x: xp(),
  y: xp()
});
function Xt(e) {
  return [e("x"), e("y")];
}
function Yv({ top: e, left: t, right: r, bottom: o }) {
  return {
    x: { min: t, max: r },
    y: { min: e, max: o }
  };
}
function KO({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function YO(e, t) {
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
function sc(e) {
  return e === void 0 || e === 1;
}
function Fc({ scale: e, scaleX: t, scaleY: r }) {
  return !sc(e) || !sc(t) || !sc(r);
}
function _r(e) {
  return Fc(e) || qv(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
}
function qv(e) {
  return wp(e.x) || wp(e.y);
}
function wp(e) {
  return e && e !== "0%";
}
function Js(e, t, r) {
  const o = e - r, s = t * o;
  return r + s;
}
function bp(e, t, r, o, s) {
  return s !== void 0 && (e = Js(e, s, o)), Js(e, r, o) + t;
}
function Bc(e, t = 0, r = 1, o, s) {
  e.min = bp(e.min, t, r, o, s), e.max = bp(e.max, t, r, o, s);
}
function Xv(e, { x: t, y: r }) {
  Bc(e.x, t.translate, t.scale, t.originPoint), Bc(e.y, r.translate, r.scale, r.originPoint);
}
const Sp = 0.999999999999, Cp = 1.0000000000001;
function qO(e, t, r, o = !1) {
  const s = r.length;
  if (!s)
    return;
  t.x = t.y = 1;
  let c, l;
  for (let u = 0; u < s; u++) {
    c = r[u], l = c.projectionDelta;
    const { visualElement: f } = c.options;
    f && f.props.style && f.props.style.display === "contents" || (o && c.options.layoutScroll && c.scroll && c !== c.root && oi(e, {
      x: -c.scroll.offset.x,
      y: -c.scroll.offset.y
    }), l && (t.x *= l.x.scale, t.y *= l.y.scale, Xv(e, l)), o && _r(c.latestValues) && oi(e, c.latestValues));
  }
  t.x < Cp && t.x > Sp && (t.x = 1), t.y < Cp && t.y > Sp && (t.y = 1);
}
function ii(e, t) {
  e.min = e.min + t, e.max = e.max + t;
}
function Tp(e, t, r, o, s = 0.5) {
  const c = ze(e.min, e.max, s);
  Bc(e, t, r, c, o);
}
function oi(e, t) {
  Tp(e.x, t.x, t.scaleX, t.scale, t.originX), Tp(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function Zv(e, t) {
  return Yv(YO(e.getBoundingClientRect(), t));
}
function XO(e, t, r) {
  const o = Zv(e, r), { scroll: s } = t;
  return s && (ii(o.x, s.offset.x), ii(o.y, s.offset.y)), o;
}
const Jv = ({ current: e }) => e ? e.ownerDocument.defaultView : null, ZO = /* @__PURE__ */ new WeakMap();
class JO {
  constructor(t) {
    this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = Ze(), this.visualElement = t;
  }
  start(t, { snapToCursor: r = !1 } = {}) {
    const { presenceContext: o } = this.visualElement;
    if (o && o.isPresent === !1)
      return;
    const s = (p) => {
      const { dragSnapToOrigin: g } = this.getProps();
      g ? this.pauseAnimation() : this.stopAnimation(), r && this.snapToCursor(wa(p, "page").point);
    }, c = (p, g) => {
      const { drag: v, dragPropagation: b, onDragStart: T } = this.getProps();
      if (v && !b && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = Hv(v), !this.openGlobalLock))
        return;
      this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), Xt((_) => {
        let A = this.getAxisMotionValue(_).get() || 0;
        if (pn.test(A)) {
          const { projection: R } = this.visualElement;
          if (R && R.layout) {
            const M = R.layout.layoutBox[_];
            M && (A = jt(M) * (parseFloat(A) / 100));
          }
        }
        this.originPoint[_] = A;
      }), T && De.postRender(() => T(p, g)), Vc(this.visualElement, "transform");
      const { animationState: w } = this.visualElement;
      w && w.setActive("whileDrag", !0);
    }, l = (p, g) => {
      const { dragPropagation: v, dragDirectionLock: b, onDirectionLock: T, onDrag: w } = this.getProps();
      if (!v && !this.openGlobalLock)
        return;
      const { offset: _ } = g;
      if (b && this.currentDirection === null) {
        this.currentDirection = QO(_), this.currentDirection !== null && T && T(this.currentDirection);
        return;
      }
      this.updateAxis("x", g.point, _), this.updateAxis("y", g.point, _), this.visualElement.render(), w && w(p, g);
    }, u = (p, g) => this.stop(p, g), f = () => Xt((p) => {
      var g;
      return this.getAnimationState(p) === "paused" && ((g = this.getAxisMotionValue(p).animation) === null || g === void 0 ? void 0 : g.play());
    }), { dragSnapToOrigin: h } = this.getProps();
    this.panSession = new Wv(t, {
      onSessionStart: s,
      onStart: c,
      onMove: l,
      onSessionEnd: u,
      resumeAnimation: f
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: h,
      contextWindow: Jv(this.visualElement)
    });
  }
  stop(t, r) {
    const o = this.isDragging;
    if (this.cancel(), !o)
      return;
    const { velocity: s } = r;
    this.startAnimation(s);
    const { onDragEnd: c } = this.getProps();
    c && De.postRender(() => c(t, r));
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
    if (!o || !Os(t, s, this.currentDirection))
      return;
    const c = this.getAxisMotionValue(t);
    let l = this.originPoint[t] + o[t];
    this.constraints && this.constraints[t] && (l = WO(l, this.constraints[t], this.elastic[t])), c.set(l);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: r, dragElastic: o } = this.getProps(), s = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (t = this.visualElement.projection) === null || t === void 0 ? void 0 : t.layout, c = this.constraints;
    r && ni(r) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : r && s ? this.constraints = UO(s.layoutBox, r) : this.constraints = !1, this.elastic = GO(o), c !== this.constraints && s && this.constraints && !this.hasMutatedConstraints && Xt((l) => {
      this.constraints !== !1 && this.getAxisMotionValue(l) && (this.constraints[l] = zO(s.layoutBox[l], this.constraints[l]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: r } = this.getProps();
    if (!t || !ni(t))
      return !1;
    const o = t.current;
    or(o !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
    const { projection: s } = this.visualElement;
    if (!s || !s.layout)
      return !1;
    const c = XO(o, s.root, this.visualElement.getTransformPagePoint());
    let l = $O(s.layout.layoutBox, c);
    if (r) {
      const u = r(KO(l));
      this.hasMutatedConstraints = !!u, u && (l = Yv(u));
    }
    return l;
  }
  startAnimation(t) {
    const { drag: r, dragMomentum: o, dragElastic: s, dragTransition: c, dragSnapToOrigin: l, onDragTransitionEnd: u } = this.getProps(), f = this.constraints || {}, h = Xt((p) => {
      if (!Os(p, r, this.currentDirection))
        return;
      let g = f && f[p] || {};
      l && (g = { min: 0, max: 0 });
      const v = s ? 200 : 1e6, b = s ? 40 : 1e7, T = {
        type: "inertia",
        velocity: o ? t[p] : 0,
        bounceStiffness: v,
        bounceDamping: b,
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
    return Vc(this.visualElement, t), o.start(_u(t, o, 0, r, this.visualElement, !1));
  }
  stopAnimation() {
    Xt((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    Xt((t) => {
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
    Xt((r) => {
      const { drag: o } = this.getProps();
      if (!Os(r, o, this.currentDirection))
        return;
      const { projection: s } = this.visualElement, c = this.getAxisMotionValue(r);
      if (s && s.layout) {
        const { min: l, max: u } = s.layout.layoutBox[r];
        c.set(t[r] - ze(l, u, 0.5));
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
    if (!ni(r) || !o || !this.constraints)
      return;
    this.stopAnimation();
    const s = { x: 0, y: 0 };
    Xt((l) => {
      const u = this.getAxisMotionValue(l);
      if (u && this.constraints !== !1) {
        const f = u.get();
        s[l] = HO({ min: f, max: f }, this.constraints[l]);
      }
    });
    const { transformTemplate: c } = this.visualElement.getProps();
    this.visualElement.current.style.transform = c ? c({}, "") : "none", o.root && o.root.updateScroll(), o.updateLayout(), this.resolveConstraints(), Xt((l) => {
      if (!Os(l, t, null))
        return;
      const u = this.getAxisMotionValue(l), { min: f, max: h } = this.constraints[l];
      u.set(ze(f, h, s[l]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    ZO.set(this.visualElement, this);
    const t = this.visualElement.current, r = Dn(t, "pointerdown", (f) => {
      const { drag: h, dragListener: p = !0 } = this.getProps();
      h && p && this.start(f);
    }), o = () => {
      const { dragConstraints: f } = this.getProps();
      ni(f) && f.current && (this.constraints = this.resolveRefConstraints());
    }, { projection: s } = this.visualElement, c = s.addEventListener("measure", o);
    s && !s.layout && (s.root && s.root.updateScroll(), s.updateLayout()), De.read(o);
    const l = Mn(window, "resize", () => this.scalePositionWithinConstraints()), u = s.addEventListener("didUpdate", ({ delta: f, hasLayoutChanged: h }) => {
      this.isDragging && h && (Xt((p) => {
        const g = this.getAxisMotionValue(p);
        g && (this.originPoint[p] += f[p].translate, g.set(g.get() + f[p].translate));
      }), this.visualElement.render());
    });
    return () => {
      l(), r(), c(), u && u();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(), { drag: r = !1, dragDirectionLock: o = !1, dragPropagation: s = !1, dragConstraints: c = !1, dragElastic: l = jc, dragMomentum: u = !0 } = t;
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
function Os(e, t, r) {
  return (t === !0 || t === e) && (r === null || r === e);
}
function QO(e, t = 10) {
  let r = null;
  return Math.abs(e.y) > t ? r = "y" : Math.abs(e.x) > t && (r = "x"), r;
}
class eM extends fr {
  constructor(t) {
    super(t), this.removeGroupControls = ut, this.removeListeners = ut, this.controls = new JO(t);
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || ut;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const _p = (e) => (t, r) => {
  e && De.postRender(() => e(t, r));
};
class tM extends fr {
  constructor() {
    super(...arguments), this.removePointerDownListener = ut;
  }
  onPointerDown(t) {
    this.session = new Wv(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Jv(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: r, onPan: o, onPanEnd: s } = this.node.getProps();
    return {
      onSessionStart: _p(t),
      onStart: _p(r),
      onMove: o,
      onEnd: (c, l) => {
        delete this.session, s && De.postRender(() => s(c, l));
      }
    };
  }
  mount() {
    this.removePointerDownListener = Dn(this.node.current, "pointerdown", (t) => this.onPointerDown(t));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const Ou = xi(null);
function nM() {
  const e = At(Ou);
  if (e === null)
    return [!0, null];
  const { isPresent: t, onExitComplete: r, register: o } = e, s = MT();
  vo(() => o(s), []);
  const c = tm(() => r && r(s), [s, r]);
  return !t && r ? [!1, c] : [!0];
}
const Qv = xi({}), ey = xi({}), Vs = {
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
function Pp(e, t) {
  return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
const ro = {
  correct: (e, t) => {
    if (!t.target)
      return e;
    if (typeof e == "string")
      if (oe.test(e))
        e = parseFloat(e);
      else
        return e;
    const r = Pp(e, t.target.x), o = Pp(e, t.target.y);
    return `${r}% ${o}%`;
  }
}, rM = {
  correct: (e, { treeScale: t, projectionDelta: r }) => {
    const o = e, s = ar.parse(e);
    if (s.length > 5)
      return o;
    const c = ar.createTransformer(e), l = typeof s[0] != "number" ? 1 : 0, u = r.x.scale * t.x, f = r.y.scale * t.y;
    s[0 + l] /= u, s[1 + l] /= f;
    const h = ze(u, f, 0.5);
    return typeof s[2 + l] == "number" && (s[2 + l] /= h), typeof s[3 + l] == "number" && (s[3 + l] /= h), c(s);
  }
}, Qs = {};
function iM(e) {
  Object.assign(Qs, e);
}
const { schedule: Mu, cancel: tN } = tv(queueMicrotask, !1);
class oM extends LT {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: t, layoutGroup: r, switchLayoutGroup: o, layoutId: s } = this.props, { projection: c } = t;
    iM(sM), c && (r.group && r.group.add(c), o && o.register && s && o.register(c), c.root.didUpdate(), c.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), c.setOptions({
      ...c.options,
      onExitComplete: () => this.safeToRemove()
    })), Vs.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(t) {
    const { layoutDependency: r, visualElement: o, drag: s, isPresent: c } = this.props, l = o.projection;
    return l && (l.isPresent = c, s || t.layoutDependency !== r || r === void 0 ? l.willUpdate() : this.safeToRemove(), t.isPresent !== c && (c ? l.promote() : l.relegate() || De.postRender(() => {
      const u = l.getStack();
      (!u || !u.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t && (t.root.didUpdate(), Mu.postRender(() => {
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
function ty(e) {
  const [t, r] = nM(), o = At(Qv);
  return C.jsx(oM, { ...e, layoutGroup: o, switchLayoutGroup: At(ey), isPresent: t, safeToRemove: r });
}
const sM = {
  borderRadius: {
    ...ro,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: ro,
  borderTopRightRadius: ro,
  borderBottomLeftRadius: ro,
  borderBottomRightRadius: ro,
  boxShadow: rM
}, ny = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], aM = ny.length, Ap = (e) => typeof e == "string" ? parseFloat(e) : e, Ep = (e) => typeof e == "number" || oe.test(e);
function lM(e, t, r, o, s, c) {
  s ? (e.opacity = ze(
    0,
    // TODO Reinstate this if only child
    r.opacity !== void 0 ? r.opacity : 1,
    cM(o)
  ), e.opacityExit = ze(t.opacity !== void 0 ? t.opacity : 1, 0, uM(o))) : c && (e.opacity = ze(t.opacity !== void 0 ? t.opacity : 1, r.opacity !== void 0 ? r.opacity : 1, o));
  for (let l = 0; l < aM; l++) {
    const u = `border${ny[l]}Radius`;
    let f = Rp(t, u), h = Rp(r, u);
    if (f === void 0 && h === void 0)
      continue;
    f || (f = 0), h || (h = 0), f === 0 || h === 0 || Ep(f) === Ep(h) ? (e[u] = Math.max(ze(Ap(f), Ap(h), o), 0), (pn.test(h) || pn.test(f)) && (e[u] += "%")) : e[u] = h;
  }
  (t.rotate || r.rotate) && (e.rotate = ze(t.rotate || 0, r.rotate || 0, o));
}
function Rp(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const cM = /* @__PURE__ */ ry(0, 0.5, lv), uM = /* @__PURE__ */ ry(0.5, 0.95, ut);
function ry(e, t, r) {
  return (o) => o < e ? 0 : o > t ? 1 : r(vi(e, t, o));
}
function Op(e, t) {
  e.min = t.min, e.max = t.max;
}
function qt(e, t) {
  Op(e.x, t.x), Op(e.y, t.y);
}
function Mp(e, t) {
  e.translate = t.translate, e.scale = t.scale, e.originPoint = t.originPoint, e.origin = t.origin;
}
function Lp(e, t, r, o, s) {
  return e -= t, e = Js(e, 1 / r, o), s !== void 0 && (e = Js(e, 1 / s, o)), e;
}
function fM(e, t = 0, r = 1, o = 0.5, s, c = e, l = e) {
  if (pn.test(t) && (t = parseFloat(t), t = ze(l.min, l.max, t / 100) - l.min), typeof t != "number")
    return;
  let u = ze(c.min, c.max, o);
  e === c && (u -= t), e.min = Lp(e.min, t, r, u, s), e.max = Lp(e.max, t, r, u, s);
}
function Np(e, t, [r, o, s], c, l) {
  fM(e, t[r], t[o], t[s], t.scale, c, l);
}
const dM = ["x", "scaleX", "originX"], hM = ["y", "scaleY", "originY"];
function Dp(e, t, r, o) {
  Np(e.x, t, dM, r ? r.x : void 0, o ? o.x : void 0), Np(e.y, t, hM, r ? r.y : void 0, o ? o.y : void 0);
}
function Ip(e) {
  return e.translate === 0 && e.scale === 1;
}
function iy(e) {
  return Ip(e.x) && Ip(e.y);
}
function Vp(e, t) {
  return e.min === t.min && e.max === t.max;
}
function pM(e, t) {
  return Vp(e.x, t.x) && Vp(e.y, t.y);
}
function kp(e, t) {
  return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max);
}
function oy(e, t) {
  return kp(e.x, t.x) && kp(e.y, t.y);
}
function jp(e) {
  return jt(e.x) / jt(e.y);
}
function Fp(e, t) {
  return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint;
}
class mM {
  constructor() {
    this.members = [];
  }
  add(t) {
    Pu(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (Au(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
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
function gM(e, t, r) {
  let o = "";
  const s = e.x.translate / t.x, c = e.y.translate / t.y, l = (r == null ? void 0 : r.z) || 0;
  if ((s || c || l) && (o = `translate3d(${s}px, ${c}px, ${l}px) `), (t.x !== 1 || t.y !== 1) && (o += `scale(${1 / t.x}, ${1 / t.y}) `), r) {
    const { transformPerspective: h, rotate: p, rotateX: g, rotateY: v, skewX: b, skewY: T } = r;
    h && (o = `perspective(${h}px) ${o}`), p && (o += `rotate(${p}deg) `), g && (o += `rotateX(${g}deg) `), v && (o += `rotateY(${v}deg) `), b && (o += `skewX(${b}deg) `), T && (o += `skewY(${T}deg) `);
  }
  const u = e.x.scale * t.x, f = e.y.scale * t.y;
  return (u !== 1 || f !== 1) && (o += `scale(${u}, ${f})`), o || "none";
}
const vM = (e, t) => e.depth - t.depth;
class yM {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(t) {
    Pu(this.children, t), this.isDirty = !0;
  }
  remove(t) {
    Au(this.children, t), this.isDirty = !0;
  }
  forEach(t) {
    this.isDirty && this.children.sort(vM), this.isDirty = !1, this.children.forEach(t);
  }
}
function ks(e) {
  const t = vt(e) ? e.get() : e;
  return cO(t) ? t.toValue() : t;
}
function xM(e, t) {
  const r = mn.now(), o = ({ timestamp: s }) => {
    const c = s - r;
    c >= t && (ir(o), e(c - t));
  };
  return De.read(o, !0), () => ir(o);
}
function wM(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function bM(e, t, r) {
  const o = vt(e) ? e : go(e);
  return o.start(_u("", o, t, r)), o.animation;
}
const Pr = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0
}, so = typeof window < "u" && window.MotionDebug !== void 0, ac = ["", "X", "Y", "Z"], SM = { visibility: "hidden" }, Bp = 1e3;
let CM = 0;
function lc(e, t, r, o) {
  const { latestValues: s } = t;
  s[e] && (r[e] = s[e], t.setStaticValue(e, 0), o && (o[e] = 0));
}
function sy(e) {
  if (e.hasCheckedOptimisedAppear = !0, e.root === e)
    return;
  const { visualElement: t } = e.options;
  if (!t)
    return;
  const r = kv(t);
  if (window.MotionHasOptimisedAnimation(r, "transform")) {
    const { layout: s, layoutId: c } = e.options;
    window.MotionCancelOptimisedAnimation(r, "transform", De, !(s || c));
  }
  const { parent: o } = e;
  o && !o.hasCheckedOptimisedAppear && sy(o);
}
function ay({ attachResizeListener: e, defaultParent: t, measureScroll: r, checkIsScrollRoot: o, resetTransform: s }) {
  return class {
    constructor(l = {}, u = t == null ? void 0 : t()) {
      this.id = CM++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, so && (Pr.totalNodes = Pr.resolvedTargetDeltas = Pr.recalculatedProjection = 0), this.nodes.forEach(PM), this.nodes.forEach(MM), this.nodes.forEach(LM), this.nodes.forEach(AM), so && window.MotionDebug.record(Pr);
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = l, this.root = u ? u.root || u : this, this.path = u ? [...u.path, u] : [], this.parent = u, this.depth = u ? u.depth + 1 : 0;
      for (let f = 0; f < this.path.length; f++)
        this.path[f].shouldResetTransform = !0;
      this.root === this && (this.nodes = new yM());
    }
    addEventListener(l, u) {
      return this.eventHandlers.has(l) || this.eventHandlers.set(l, new Eu()), this.eventHandlers.get(l).add(u);
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
      this.isSVG = wM(l), this.instance = l;
      const { layoutId: f, layout: h, visualElement: p } = this.options;
      if (p && !p.current && p.mount(l), this.root.nodes.add(this), this.parent && this.parent.children.add(this), u && (h || f) && (this.isLayoutDirty = !0), e) {
        let g;
        const v = () => this.root.updateBlockedByResize = !1;
        e(l, () => {
          this.root.updateBlockedByResize = !0, g && g(), g = xM(v, 250), Vs.hasAnimatedSinceResize && (Vs.hasAnimatedSinceResize = !1, this.nodes.forEach(Up));
        });
      }
      f && this.root.registerSharedNode(f, this), this.options.animate !== !1 && p && (f || h) && this.addEventListener("didUpdate", ({ delta: g, hasLayoutChanged: v, hasRelativeTargetChanged: b, layout: T }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const w = this.options.transition || p.getDefaultTransition() || kM, { onLayoutAnimationStart: _, onLayoutAnimationComplete: A } = p.getProps(), R = !this.targetLayout || !oy(this.targetLayout, T) || b, M = !v && b;
        if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || M || v && (R || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(g, M);
          const I = {
            ...fu(w, "layout"),
            onPlay: _,
            onComplete: A
          };
          (p.shouldReduceMotion || this.options.layoutRoot) && (I.delay = 0, I.type = !1), this.startAnimation(I);
        } else
          v || Up(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = T;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const l = this.getStack();
      l && l.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, ir(this.updateProjection);
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
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(NM), this.animationId++);
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
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && sy(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
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
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Wp);
        return;
      }
      this.isUpdating || this.nodes.forEach(RM), this.isUpdating = !1, this.nodes.forEach(OM), this.nodes.forEach(TM), this.nodes.forEach(_M), this.clearAllSnapshots();
      const u = mn.now();
      ct.delta = sr(0, 1e3 / 60, u - ct.timestamp), ct.timestamp = u, ct.isProcessing = !0, Ql.update.process(ct), Ql.preRender.process(ct), Ql.render.process(ct), ct.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, Mu.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(EM), this.sharedNodes.forEach(DM);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, De.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      De.postRender(() => {
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
      this.layout = this.measure(!1), this.layoutCorrected = Ze(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
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
      const l = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, u = this.projectionDelta && !iy(this.projectionDelta), f = this.getTransformTemplate(), h = f ? f(this.latestValues, "") : void 0, p = h !== this.prevTransformTemplateValue;
      l && (u || _r(this.latestValues) || p) && (s(this.instance, h), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(l = !0) {
      const u = this.measurePageBox();
      let f = this.removeElementScroll(u);
      return l && (f = this.removeTransform(f)), jM(f), {
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
        return Ze();
      const f = u.measureViewportBox();
      if (!(((l = this.scroll) === null || l === void 0 ? void 0 : l.wasRoot) || this.path.some(FM))) {
        const { scroll: p } = this.root;
        p && (ii(f.x, p.offset.x), ii(f.y, p.offset.y));
      }
      return f;
    }
    removeElementScroll(l) {
      var u;
      const f = Ze();
      if (qt(f, l), !((u = this.scroll) === null || u === void 0) && u.wasRoot)
        return f;
      for (let h = 0; h < this.path.length; h++) {
        const p = this.path[h], { scroll: g, options: v } = p;
        p !== this.root && g && v.layoutScroll && (g.wasRoot && qt(f, l), ii(f.x, g.offset.x), ii(f.y, g.offset.y));
      }
      return f;
    }
    applyTransform(l, u = !1) {
      const f = Ze();
      qt(f, l);
      for (let h = 0; h < this.path.length; h++) {
        const p = this.path[h];
        !u && p.options.layoutScroll && p.scroll && p !== p.root && oi(f, {
          x: -p.scroll.offset.x,
          y: -p.scroll.offset.y
        }), _r(p.latestValues) && oi(f, p.latestValues);
      }
      return _r(this.latestValues) && oi(f, this.latestValues), f;
    }
    removeTransform(l) {
      const u = Ze();
      qt(u, l);
      for (let f = 0; f < this.path.length; f++) {
        const h = this.path[f];
        if (!h.instance || !_r(h.latestValues))
          continue;
        Fc(h.latestValues) && h.updateSnapshot();
        const p = Ze(), g = h.measurePageBox();
        qt(p, g), Dp(u, h.latestValues, h.snapshot ? h.snapshot.layoutBox : void 0, p);
      }
      return _r(this.latestValues) && Dp(u, this.latestValues), u;
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
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== ct.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(l = !1) {
      var u;
      const f = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = f.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = f.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = f.isSharedProjectionDirty);
      const h = !!this.resumingFrom || this !== f;
      if (!(l || h && this.isSharedProjectionDirty || this.isProjectionDirty || !((u = this.parent) === null || u === void 0) && u.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
        return;
      const { layout: g, layoutId: v } = this.options;
      if (!(!this.layout || !(g || v))) {
        if (this.resolvedRelativeTargetAt = ct.timestamp, !this.targetDelta && !this.relativeTarget) {
          const b = this.getClosestProjectingParent();
          b && b.layout && this.animationProgress !== 1 ? (this.relativeParent = b, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Ze(), this.relativeTargetOrigin = Ze(), co(this.relativeTargetOrigin, this.layout.layoutBox, b.layout.layoutBox), qt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (this.target || (this.target = Ze(), this.targetWithTransforms = Ze()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), BO(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : qt(this.target, this.layout.layoutBox), Xv(this.target, this.targetDelta)) : qt(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
            this.attemptToResolveRelativeTarget = !1;
            const b = this.getClosestProjectingParent();
            b && !!b.resumingFrom == !!this.resumingFrom && !b.options.layoutScroll && b.target && this.animationProgress !== 1 ? (this.relativeParent = b, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Ze(), this.relativeTargetOrigin = Ze(), co(this.relativeTargetOrigin, this.target, b.target), qt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
          }
          so && Pr.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || Fc(this.parent.latestValues) || qv(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      var l;
      const u = this.getLead(), f = !!this.resumingFrom || this !== u;
      let h = !0;
      if ((this.isProjectionDirty || !((l = this.parent) === null || l === void 0) && l.isProjectionDirty) && (h = !1), f && (this.isSharedProjectionDirty || this.isTransformDirty) && (h = !1), this.resolvedRelativeTargetAt === ct.timestamp && (h = !1), h)
        return;
      const { layout: p, layoutId: g } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(p || g))
        return;
      qt(this.layoutCorrected, this.layout.layoutBox);
      const v = this.treeScale.x, b = this.treeScale.y;
      qO(this.layoutCorrected, this.treeScale, this.path, f), u.layout && !u.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (u.target = u.layout.layoutBox, u.targetWithTransforms = Ze());
      const { target: T } = u;
      if (!T) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Mp(this.prevProjectionDelta.x, this.projectionDelta.x), Mp(this.prevProjectionDelta.y, this.projectionDelta.y)), lo(this.projectionDelta, this.layoutCorrected, T, this.latestValues), (this.treeScale.x !== v || this.treeScale.y !== b || !Fp(this.projectionDelta.x, this.prevProjectionDelta.x) || !Fp(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", T)), so && Pr.recalculatedProjection++;
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
      this.prevProjectionDelta = ri(), this.projectionDelta = ri(), this.projectionDeltaWithTransform = ri();
    }
    setAnimationOrigin(l, u = !1) {
      const f = this.snapshot, h = f ? f.latestValues : {}, p = { ...this.latestValues }, g = ri();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !u;
      const v = Ze(), b = f ? f.source : void 0, T = this.layout ? this.layout.source : void 0, w = b !== T, _ = this.getStack(), A = !_ || _.members.length <= 1, R = !!(w && !A && this.options.crossfade === !0 && !this.path.some(VM));
      this.animationProgress = 0;
      let M;
      this.mixTargetDelta = (I) => {
        const V = I / 1e3;
        $p(g.x, l.x, V), $p(g.y, l.y, V), this.setTargetDelta(g), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (co(v, this.layout.layoutBox, this.relativeParent.layout.layoutBox), IM(this.relativeTarget, this.relativeTargetOrigin, v, V), M && pM(this.relativeTarget, M) && (this.isProjectionDirty = !1), M || (M = Ze()), qt(M, this.relativeTarget)), w && (this.animationValues = p, lM(p, h, this.latestValues, V, R, A)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = V;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(l) {
      this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (ir(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = De.update(() => {
        Vs.hasAnimatedSinceResize = !0, this.currentAnimation = bM(0, Bp, {
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
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(Bp), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const l = this.getLead();
      let { targetWithTransforms: u, target: f, layout: h, latestValues: p } = l;
      if (!(!u || !f || !h)) {
        if (this !== l && this.layout && h && ly(this.options.animationType, this.layout.layoutBox, h.layoutBox)) {
          f = this.target || Ze();
          const g = jt(this.layout.layoutBox.x);
          f.x.min = l.target.x.min, f.x.max = f.x.min + g;
          const v = jt(this.layout.layoutBox.y);
          f.y.min = l.target.y.min, f.y.max = f.y.min + v;
        }
        qt(u, f), oi(u, p), lo(this.projectionDeltaWithTransform, this.layoutCorrected, u, p);
      }
    }
    registerSharedNode(l, u) {
      this.sharedNodes.has(l) || this.sharedNodes.set(l, new mM()), this.sharedNodes.get(l).add(u);
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
      f.z && lc("z", l, h, this.animationValues);
      for (let p = 0; p < ac.length; p++)
        lc(`rotate${ac[p]}`, l, h, this.animationValues), lc(`skew${ac[p]}`, l, h, this.animationValues);
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
        return SM;
      const h = {
        visibility: ""
      }, p = this.getTransformTemplate();
      if (this.needsReset)
        return this.needsReset = !1, h.opacity = "", h.pointerEvents = ks(l == null ? void 0 : l.pointerEvents) || "", h.transform = p ? p(this.latestValues, "") : "none", h;
      const g = this.getLead();
      if (!this.projectionDelta || !this.layout || !g.target) {
        const w = {};
        return this.options.layoutId && (w.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, w.pointerEvents = ks(l == null ? void 0 : l.pointerEvents) || ""), this.hasProjected && !_r(this.latestValues) && (w.transform = p ? p({}, "") : "none", this.hasProjected = !1), w;
      }
      const v = g.animationValues || g.latestValues;
      this.applyTransformsToTarget(), h.transform = gM(this.projectionDeltaWithTransform, this.treeScale, v), p && (h.transform = p(v, h.transform));
      const { x: b, y: T } = this.projectionDelta;
      h.transformOrigin = `${b.origin * 100}% ${T.origin * 100}% 0`, g.animationValues ? h.opacity = g === this ? (f = (u = v.opacity) !== null && u !== void 0 ? u : this.latestValues.opacity) !== null && f !== void 0 ? f : 1 : this.preserveOpacity ? this.latestValues.opacity : v.opacityExit : h.opacity = g === this ? v.opacity !== void 0 ? v.opacity : "" : v.opacityExit !== void 0 ? v.opacityExit : 0;
      for (const w in Qs) {
        if (v[w] === void 0)
          continue;
        const { correct: _, applyTo: A } = Qs[w], R = h.transform === "none" ? v[w] : _(v[w], g);
        if (A) {
          const M = A.length;
          for (let I = 0; I < M; I++)
            h[A[I]] = R;
        } else
          h[w] = R;
      }
      return this.options.layoutId && (h.pointerEvents = g === this ? ks(l == null ? void 0 : l.pointerEvents) || "" : "none"), h;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((l) => {
        var u;
        return (u = l.currentAnimation) === null || u === void 0 ? void 0 : u.stop();
      }), this.root.nodes.forEach(Wp), this.root.sharedNodes.clear();
    }
  };
}
function TM(e) {
  e.updateLayout();
}
function _M(e) {
  var t;
  const r = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && r && e.hasListeners("didUpdate")) {
    const { layoutBox: o, measuredBox: s } = e.layout, { animationType: c } = e.options, l = r.source !== e.layout.source;
    c === "size" ? Xt((g) => {
      const v = l ? r.measuredBox[g] : r.layoutBox[g], b = jt(v);
      v.min = o[g].min, v.max = v.min + b;
    }) : ly(c, r.layoutBox, o) && Xt((g) => {
      const v = l ? r.measuredBox[g] : r.layoutBox[g], b = jt(o[g]);
      v.max = v.min + b, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[g].max = e.relativeTarget[g].min + b);
    });
    const u = ri();
    lo(u, o, r.layoutBox);
    const f = ri();
    l ? lo(f, e.applyTransform(s, !0), r.measuredBox) : lo(f, o, r.layoutBox);
    const h = !iy(u);
    let p = !1;
    if (!e.resumeFrom) {
      const g = e.getClosestProjectingParent();
      if (g && !g.resumeFrom) {
        const { snapshot: v, layout: b } = g;
        if (v && b) {
          const T = Ze();
          co(T, r.layoutBox, v.layoutBox);
          const w = Ze();
          co(w, o, b.layoutBox), oy(T, w) || (p = !0), g.options.layoutRoot && (e.relativeTarget = w, e.relativeTargetOrigin = T, e.relativeParent = g);
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
function PM(e) {
  so && Pr.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function AM(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function EM(e) {
  e.clearSnapshot();
}
function Wp(e) {
  e.clearMeasurements();
}
function RM(e) {
  e.isLayoutDirty = !1;
}
function OM(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function Up(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function MM(e) {
  e.resolveTargetDelta();
}
function LM(e) {
  e.calcProjection();
}
function NM(e) {
  e.resetSkewAndRotation();
}
function DM(e) {
  e.removeLeadSnapshot();
}
function $p(e, t, r) {
  e.translate = ze(t.translate, 0, r), e.scale = ze(t.scale, 1, r), e.origin = t.origin, e.originPoint = t.originPoint;
}
function Hp(e, t, r, o) {
  e.min = ze(t.min, r.min, o), e.max = ze(t.max, r.max, o);
}
function IM(e, t, r, o) {
  Hp(e.x, t.x, r.x, o), Hp(e.y, t.y, r.y, o);
}
function VM(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const kM = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, zp = (e) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e), Gp = zp("applewebkit/") && !zp("chrome/") ? Math.round : ut;
function Kp(e) {
  e.min = Gp(e.min), e.max = Gp(e.max);
}
function jM(e) {
  Kp(e.x), Kp(e.y);
}
function ly(e, t, r) {
  return e === "position" || e === "preserve-aspect" && !FO(jp(t), jp(r), 0.2);
}
function FM(e) {
  var t;
  return e !== e.root && ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot);
}
const BM = ay({
  attachResizeListener: (e, t) => Mn(e, "resize", t),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), cc = {
  current: void 0
}, cy = ay({
  measureScroll: (e) => ({
    x: e.scrollLeft,
    y: e.scrollTop
  }),
  defaultParent: () => {
    if (!cc.current) {
      const e = new BM({});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), cc.current = e;
    }
    return cc.current;
  },
  resetTransform: (e, t) => {
    e.style.transform = t !== void 0 ? t : "none";
  },
  checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), WM = {
  pan: {
    Feature: tM
  },
  drag: {
    Feature: eM,
    ProjectionNode: cy,
    MeasureLayout: ty
  }
};
function Yp(e, t) {
  const r = t ? "pointerenter" : "pointerleave", o = t ? "onHoverStart" : "onHoverEnd", s = (c, l) => {
    if (c.pointerType === "touch" || zv())
      return;
    const u = e.getProps();
    e.animationState && u.whileHover && e.animationState.setActive("whileHover", t);
    const f = u[o];
    f && De.postRender(() => f(c, l));
  };
  return Dn(e.current, r, s, {
    passive: !e.getProps()[o]
  });
}
class UM extends fr {
  mount() {
    this.unmount = Nn(Yp(this.node, !0), Yp(this.node, !1));
  }
  unmount() {
  }
}
class $M extends fr {
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
    this.unmount = Nn(Mn(this.node.current, "focus", () => this.onFocus()), Mn(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
const uy = (e, t) => t ? e === t ? !0 : uy(e, t.parentElement) : !1;
function uc(e, t) {
  if (!t)
    return;
  const r = new PointerEvent("pointer" + e);
  t(r, wa(r));
}
class HM extends fr {
  constructor() {
    super(...arguments), this.removeStartListeners = ut, this.removeEndListeners = ut, this.removeAccessibleListeners = ut, this.startPointerPress = (t, r) => {
      if (this.isPressing)
        return;
      this.removeEndListeners();
      const o = this.node.getProps(), c = Dn(window, "pointerup", (u, f) => {
        if (!this.checkPressEnd())
          return;
        const { onTap: h, onTapCancel: p, globalTapTarget: g } = this.node.getProps(), v = !g && !uy(this.node.current, u.target) ? p : h;
        v && De.update(() => v(u, f));
      }, {
        passive: !(o.onTap || o.onPointerUp)
      }), l = Dn(window, "pointercancel", (u, f) => this.cancelPress(u, f), {
        passive: !(o.onTapCancel || o.onPointerCancel)
      });
      this.removeEndListeners = Nn(c, l), this.startPress(t, r);
    }, this.startAccessiblePress = () => {
      const t = (c) => {
        if (c.key !== "Enter" || this.isPressing)
          return;
        const l = (u) => {
          u.key !== "Enter" || !this.checkPressEnd() || uc("up", (f, h) => {
            const { onTap: p } = this.node.getProps();
            p && De.postRender(() => p(f, h));
          });
        };
        this.removeEndListeners(), this.removeEndListeners = Mn(this.node.current, "keyup", l), uc("down", (u, f) => {
          this.startPress(u, f);
        });
      }, r = Mn(this.node.current, "keydown", t), o = () => {
        this.isPressing && uc("cancel", (c, l) => this.cancelPress(c, l));
      }, s = Mn(this.node.current, "blur", o);
      this.removeAccessibleListeners = Nn(r, s);
    };
  }
  startPress(t, r) {
    this.isPressing = !0;
    const { onTapStart: o, whileTap: s } = this.node.getProps();
    s && this.node.animationState && this.node.animationState.setActive("whileTap", !0), o && De.postRender(() => o(t, r));
  }
  checkPressEnd() {
    return this.removeEndListeners(), this.isPressing = !1, this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !zv();
  }
  cancelPress(t, r) {
    if (!this.checkPressEnd())
      return;
    const { onTapCancel: o } = this.node.getProps();
    o && De.postRender(() => o(t, r));
  }
  mount() {
    const t = this.node.getProps(), r = Dn(t.globalTapTarget ? window : this.node.current, "pointerdown", this.startPointerPress, {
      passive: !(t.onTapStart || t.onPointerStart)
    }), o = Mn(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = Nn(r, o);
  }
  unmount() {
    this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners();
  }
}
const Wc = /* @__PURE__ */ new WeakMap(), fc = /* @__PURE__ */ new WeakMap(), zM = (e) => {
  const t = Wc.get(e.target);
  t && t(e);
}, GM = (e) => {
  e.forEach(zM);
};
function KM({ root: e, ...t }) {
  const r = e || document;
  fc.has(r) || fc.set(r, {});
  const o = fc.get(r), s = JSON.stringify(t);
  return o[s] || (o[s] = new IntersectionObserver(GM, { root: e, ...t })), o[s];
}
function YM(e, t, r) {
  const o = KM(t);
  return Wc.set(e, r), o.observe(e), () => {
    Wc.delete(e), o.unobserve(e);
  };
}
const qM = {
  some: 0,
  all: 1
};
class XM extends fr {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(), { root: r, margin: o, amount: s = "some", once: c } = t, l = {
      root: r ? r.current : void 0,
      rootMargin: o,
      threshold: typeof s == "number" ? s : qM[s]
    }, u = (f) => {
      const { isIntersecting: h } = f;
      if (this.isInView === h || (this.isInView = h, c && !h && this.hasEnteredView))
        return;
      h && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", h);
      const { onViewportEnter: p, onViewportLeave: g } = this.node.getProps(), v = h ? p : g;
      v && v(f);
    };
    return YM(this.node.current, l, u);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: t, prevProps: r } = this.node;
    ["amount", "margin", "root"].some(ZM(t, r)) && this.startObserver();
  }
  unmount() {
  }
}
function ZM({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (r) => e[r] !== t[r];
}
const JM = {
  inView: {
    Feature: XM
  },
  tap: {
    Feature: HM
  },
  focus: {
    Feature: $M
  },
  hover: {
    Feature: UM
  }
}, QM = {
  layout: {
    ProjectionNode: cy,
    MeasureLayout: ty
  }
}, fy = xi({
  transformPagePoint: (e) => e,
  isStatic: !1,
  reducedMotion: "never"
}), ba = xi({}), Lu = typeof window < "u", eL = Lu ? em : vo, dy = xi({ strict: !1 });
function tL(e, t, r, o, s) {
  var c, l;
  const { visualElement: u } = At(ba), f = At(dy), h = At(Ou), p = At(fy).reducedMotion, g = Ms();
  o = o || f.renderer, !g.current && o && (g.current = o(e, {
    visualState: t,
    parent: u,
    props: r,
    presenceContext: h,
    blockInitialAnimation: h ? h.initial === !1 : !1,
    reducedMotionConfig: p
  }));
  const v = g.current, b = At(ey);
  v && !v.projection && s && (v.type === "html" || v.type === "svg") && nL(g.current, r, s, b);
  const T = Ms(!1);
  NT(() => {
    v && T.current && v.update(r, h);
  });
  const w = r[Vv], _ = Ms(!!w && !(!((c = window.MotionHandoffIsComplete) === null || c === void 0) && c.call(window, w)) && ((l = window.MotionHasOptimisedAnimation) === null || l === void 0 ? void 0 : l.call(window, w)));
  return eL(() => {
    v && (T.current = !0, window.MotionIsMounted = !0, v.updateFeatures(), Mu.render(v.render), _.current && v.animationState && v.animationState.animateChanges());
  }), vo(() => {
    v && (!_.current && v.animationState && v.animationState.animateChanges(), _.current && (queueMicrotask(() => {
      var A;
      (A = window.MotionHandoffMarkAsComplete) === null || A === void 0 || A.call(window, w);
    }), _.current = !1));
  }), v;
}
function nL(e, t, r, o) {
  const { layoutId: s, layout: c, drag: l, dragConstraints: u, layoutScroll: f, layoutRoot: h } = t;
  e.projection = new r(e.latestValues, t["data-framer-portal-id"] ? void 0 : hy(e.parent)), e.projection.setOptions({
    layoutId: s,
    layout: c,
    alwaysMeasureLayout: !!l || u && ni(u),
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
function hy(e) {
  if (e)
    return e.options.allowProjection !== !1 ? e.projection : hy(e.parent);
}
function rL(e, t, r) {
  return tm(
    (o) => {
      o && e.mount && e.mount(o), t && (o ? t.mount(o) : t.unmount()), r && (typeof r == "function" ? r(o) : ni(r) && (r.current = o));
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [t]
  );
}
function Sa(e) {
  return va(e.animate) || uu.some((t) => ho(e[t]));
}
function py(e) {
  return !!(Sa(e) || e.variants);
}
function iL(e, t) {
  if (Sa(e)) {
    const { initial: r, animate: o } = e;
    return {
      initial: r === !1 || ho(r) ? r : void 0,
      animate: ho(o) ? o : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function oL(e) {
  const { initial: t, animate: r } = iL(e, At(ba));
  return yo(() => ({ initial: t, animate: r }), [qp(t), qp(r)]);
}
function qp(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const Xp = {
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
}, yi = {};
for (const e in Xp)
  yi[e] = {
    isEnabled: (t) => Xp[e].some((r) => !!t[r])
  };
function sL(e) {
  for (const t in e)
    yi[t] = {
      ...yi[t],
      ...e[t]
    };
}
const aL = Symbol.for("motionComponentSymbol");
function lL({ preloadedFeatures: e, createVisualElement: t, useRender: r, useVisualState: o, Component: s }) {
  e && sL(e);
  function c(u, f) {
    let h;
    const p = {
      ...At(fy),
      ...u,
      layoutId: cL(u)
    }, { isStatic: g } = p, v = oL(u), b = o(u, g);
    if (!g && Lu) {
      uL(p, e);
      const T = fL(p);
      h = T.MeasureLayout, v.visualElement = tL(s, b, p, t, T.ProjectionNode);
    }
    return C.jsxs(ba.Provider, { value: v, children: [h && v.visualElement ? C.jsx(h, { visualElement: v.visualElement, ...p }) : null, r(s, u, rL(b, v.visualElement, f), b, g, v.visualElement)] });
  }
  const l = Hc(c);
  return l[aL] = s, l;
}
function cL({ layoutId: e }) {
  const t = At(Qv).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function uL(e, t) {
  const r = At(dy).strict;
  if (process.env.NODE_ENV !== "production" && t && r) {
    const o = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
    e.ignoreStrict ? Ti(!1, o) : or(!1, o);
  }
}
function fL(e) {
  const { drag: t, layout: r } = yi;
  if (!t && !r)
    return {};
  const o = { ...t, ...r };
  return {
    MeasureLayout: t != null && t.isEnabled(e) || r != null && r.isEnabled(e) ? o.MeasureLayout : void 0,
    ProjectionNode: o.ProjectionNode
  };
}
const dL = [
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
function Nu(e) {
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
      !!(dL.indexOf(e) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(e))
    )
  );
}
function my(e, { style: t, vars: r }, o, s) {
  Object.assign(e.style, t, s && s.getProjectionStyles(o));
  for (const c in r)
    e.style.setProperty(c, r[c]);
}
const gy = /* @__PURE__ */ new Set([
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
function vy(e, t, r, o) {
  my(e, t, void 0, o);
  for (const s in t.attrs)
    e.setAttribute(gy.has(s) ? s : Ru(s), t.attrs[s]);
}
function yy(e, { layout: t, layoutId: r }) {
  return Lr.has(e) || e.startsWith("origin") || (t || r !== void 0) && (!!Qs[e] || e === "opacity");
}
function Du(e, t, r) {
  var o;
  const { style: s } = e, c = {};
  for (const l in s)
    (vt(s[l]) || t.style && vt(t.style[l]) || yy(l, e) || ((o = r == null ? void 0 : r.getValue(l)) === null || o === void 0 ? void 0 : o.liveStyle) !== void 0) && (c[l] = s[l]);
  return c;
}
function xy(e, t, r) {
  const o = Du(e, t, r);
  for (const s in e)
    if (vt(e[s]) || vt(t[s])) {
      const c = To.indexOf(s) !== -1 ? "attr" + s.charAt(0).toUpperCase() + s.substring(1) : s;
      o[c] = e[s];
    }
  return o;
}
function hL(e) {
  const t = Ms(null);
  return t.current === null && (t.current = e()), t.current;
}
function pL({ scrapeMotionValuesFromProps: e, createRenderState: t, onMount: r }, o, s, c) {
  const l = {
    latestValues: mL(o, s, c, e),
    renderState: t()
  };
  return r && (l.mount = (u) => r(o, u, l)), l;
}
const wy = (e) => (t, r) => {
  const o = At(ba), s = At(Ou), c = () => pL(e, t, o, s);
  return r ? c() : hL(c);
};
function mL(e, t, r, o) {
  const s = {}, c = o(e, {});
  for (const v in c)
    s[v] = ks(c[v]);
  let { initial: l, animate: u } = e;
  const f = Sa(e), h = py(e);
  t && h && !f && e.inherit !== !1 && (l === void 0 && (l = t.initial), u === void 0 && (u = t.animate));
  let p = r ? r.initial === !1 : !1;
  p = p || l === !1;
  const g = p ? u : l;
  if (g && typeof g != "boolean" && !va(g)) {
    const v = Array.isArray(g) ? g : [g];
    for (let b = 0; b < v.length; b++) {
      const T = lu(e, v[b]);
      if (T) {
        const { transitionEnd: w, transition: _, ...A } = T;
        for (const R in A) {
          let M = A[R];
          if (Array.isArray(M)) {
            const I = p ? M.length - 1 : 0;
            M = M[I];
          }
          M !== null && (s[R] = M);
        }
        for (const R in w)
          s[R] = w[R];
      }
    }
  }
  return s;
}
const Iu = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
}), by = () => ({
  ...Iu(),
  attrs: {}
}), Sy = (e, t) => t && typeof e == "number" ? t.transform(e) : e, gL = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, vL = To.length;
function yL(e, t, r) {
  let o = "", s = !0;
  for (let c = 0; c < vL; c++) {
    const l = To[c], u = e[l];
    if (u === void 0)
      continue;
    let f = !0;
    if (typeof u == "number" ? f = u === (l.startsWith("scale") ? 1 : 0) : f = parseFloat(u) === 0, !f || r) {
      const h = Sy(u, yu[l]);
      if (!f) {
        s = !1;
        const p = gL[l] || l;
        o += `${p}(${h}) `;
      }
      r && (t[l] = h);
    }
  }
  return o = o.trim(), r ? o = r(t, s ? "" : o) : s && (o = "none"), o;
}
function Vu(e, t, r) {
  const { style: o, vars: s, transformOrigin: c } = e;
  let l = !1, u = !1;
  for (const f in t) {
    const h = t[f];
    if (Lr.has(f)) {
      l = !0;
      continue;
    } else if (hv(f)) {
      s[f] = h;
      continue;
    } else {
      const p = Sy(h, yu[f]);
      f.startsWith("origin") ? (u = !0, c[f] = p) : o[f] = p;
    }
  }
  if (t.transform || (l || r ? o.transform = yL(t, e.transform, r) : o.transform && (o.transform = "none")), u) {
    const { originX: f = "50%", originY: h = "50%", originZ: p = 0 } = c;
    o.transformOrigin = `${f} ${h} ${p}`;
  }
}
function Zp(e, t, r) {
  return typeof e == "string" ? e : oe.transform(t + r * e);
}
function xL(e, t, r) {
  const o = Zp(t, e.x, e.width), s = Zp(r, e.y, e.height);
  return `${o} ${s}`;
}
const wL = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, bL = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function SL(e, t, r = 1, o = 0, s = !0) {
  e.pathLength = 1;
  const c = s ? wL : bL;
  e[c.offset] = oe.transform(-o);
  const l = oe.transform(t), u = oe.transform(r);
  e[c.array] = `${l} ${u}`;
}
function ku(e, {
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
  if (Vu(e, h, g), p) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  e.attrs = e.style, e.style = {};
  const { attrs: v, style: b, dimensions: T } = e;
  v.transform && (T && (b.transform = v.transform), delete v.transform), T && (s !== void 0 || c !== void 0 || b.transform) && (b.transformOrigin = xL(T, s !== void 0 ? s : 0.5, c !== void 0 ? c : 0.5)), t !== void 0 && (v.x = t), r !== void 0 && (v.y = r), o !== void 0 && (v.scale = o), l !== void 0 && SL(v, l, u, f, !1);
}
const ju = (e) => typeof e == "string" && e.toLowerCase() === "svg", CL = {
  useVisualState: wy({
    scrapeMotionValuesFromProps: xy,
    createRenderState: by,
    onMount: (e, t, { renderState: r, latestValues: o }) => {
      De.read(() => {
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
      }), De.render(() => {
        ku(r, o, ju(t.tagName), e.transformTemplate), vy(t, r);
      });
    }
  })
}, TL = {
  useVisualState: wy({
    scrapeMotionValuesFromProps: Du,
    createRenderState: Iu
  })
};
function Cy(e, t, r) {
  for (const o in t)
    !vt(t[o]) && !yy(o, r) && (e[o] = t[o]);
}
function _L({ transformTemplate: e }, t) {
  return yo(() => {
    const r = Iu();
    return Vu(r, t, e), Object.assign({}, r.vars, r.style);
  }, [t]);
}
function PL(e, t) {
  const r = e.style || {}, o = {};
  return Cy(o, r, e), Object.assign(o, _L(e, t)), o;
}
function AL(e, t) {
  const r = {}, o = PL(e, t);
  return e.drag && e.dragListener !== !1 && (r.draggable = !1, o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none", o.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (r.tabIndex = 0), r.style = o, r;
}
const EL = /* @__PURE__ */ new Set([
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
function ea(e) {
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || EL.has(e);
}
let Ty = (e) => !ea(e);
function RL(e) {
  e && (Ty = (t) => t.startsWith("on") ? !ea(t) : e(t));
}
try {
  RL(require("@emotion/is-prop-valid").default);
} catch {
}
function OL(e, t, r) {
  const o = {};
  for (const s in e)
    s === "values" && typeof e.values == "object" || (Ty(s) || r === !0 && ea(s) || !t && !ea(s) || // If trying to use native HTML drag events, forward drag listeners
    e.draggable && s.startsWith("onDrag")) && (o[s] = e[s]);
  return o;
}
function ML(e, t, r, o) {
  const s = yo(() => {
    const c = by();
    return ku(c, t, ju(o), e.transformTemplate), {
      ...c.attrs,
      style: { ...c.style }
    };
  }, [t]);
  if (e.style) {
    const c = {};
    Cy(c, e.style, e), s.style = { ...c, ...s.style };
  }
  return s;
}
function LL(e = !1) {
  return (r, o, s, { latestValues: c }, l) => {
    const f = (Nu(r) ? ML : AL)(o, c, l, r), h = OL(o, typeof r == "string", e), p = r !== nm ? { ...h, ...f, ref: s } : {}, { children: g } = o, v = yo(() => vt(g) ? g.get() : g, [g]);
    return js(r, {
      ...p,
      children: v
    });
  };
}
function NL(e, t) {
  return function(o, { forwardMotionProps: s } = { forwardMotionProps: !1 }) {
    const l = {
      ...Nu(o) ? CL : TL,
      preloadedFeatures: e,
      useRender: LL(s),
      createVisualElement: t,
      Component: o
    };
    return lL(l);
  };
}
const Uc = { current: null }, _y = { current: !1 };
function DL() {
  if (_y.current = !0, !!Lu)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"), t = () => Uc.current = e.matches;
      e.addListener(t), t();
    } else
      Uc.current = !1;
}
function IL(e, t, r) {
  for (const o in t) {
    const s = t[o], c = r[o];
    if (vt(s))
      e.addValue(o, s), process.env.NODE_ENV === "development" && ga(s.version === "11.11.17", `Attempting to mix Motion versions ${s.version} with 11.11.17 may not work as expected.`);
    else if (vt(c))
      e.addValue(o, go(s, { owner: e }));
    else if (c !== s)
      if (e.hasValue(o)) {
        const l = e.getValue(o);
        l.liveStyle === !0 ? l.jump(s) : l.hasAnimated || l.set(s);
      } else {
        const l = e.getStaticValue(o);
        e.addValue(o, go(l !== void 0 ? l : s, { owner: e }));
      }
  }
  for (const o in r)
    t[o] === void 0 && e.removeValue(o);
  return t;
}
const Jp = /* @__PURE__ */ new WeakMap(), VL = [...gv, gt, ar], kL = (e) => VL.find(mv(e)), Qp = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
class jL {
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
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = mu, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const v = mn.now();
      this.renderScheduledAt < v && (this.renderScheduledAt = v, De.render(this.render, !1, !0));
    };
    const { latestValues: f, renderState: h } = l;
    this.latestValues = f, this.baseTarget = { ...f }, this.initialValues = r.initial ? { ...f } : {}, this.renderState = h, this.parent = t, this.props = r, this.presenceContext = o, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = s, this.options = u, this.blockInitialAnimation = !!c, this.isControllingVariants = Sa(r), this.isVariantNode = py(r), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
    const { willChange: p, ...g } = this.scrapeMotionValuesFromProps(r, {}, this);
    for (const v in g) {
      const b = g[v];
      f[v] !== void 0 && vt(b) && b.set(f[v], !1);
    }
  }
  mount(t) {
    this.current = t, Jp.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((r, o) => this.bindToMotionValue(o, r)), _y.current || DL(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Uc.current, process.env.NODE_ENV !== "production" && ga(this.shouldReduceMotion !== !0, "You have Reduced Motion enabled on your device. Animations may not appear as expected."), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    Jp.delete(this.current), this.projection && this.projection.unmount(), ir(this.notifyUpdate), ir(this.render), this.valueSubscriptions.forEach((t) => t()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
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
    const o = Lr.has(t), s = r.on("change", (u) => {
      this.latestValues[t] = u, this.props.onUpdate && De.preRender(this.notifyUpdate), o && this.projection && (this.projection.isTransformDirty = !0);
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
    for (t in yi) {
      const r = yi[t];
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
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Ze();
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
    for (let o = 0; o < Qp.length; o++) {
      const s = Qp[o];
      this.propEventSubscriptions[s] && (this.propEventSubscriptions[s](), delete this.propEventSubscriptions[s]);
      const c = "on" + s, l = t[c];
      l && (this.propEventSubscriptions[s] = this.on(s, l));
    }
    this.prevMotionValues = IL(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
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
    return o === void 0 && r !== void 0 && (o = go(r === null ? void 0 : r, { owner: this }), this.addValue(t, o)), o;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(t, r) {
    var o;
    let s = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : (o = this.getBaseTargetFromProps(this.props, t)) !== null && o !== void 0 ? o : this.readValueFromInstance(this.current, t, this.options);
    return s != null && (typeof s == "string" && (fv(s) || uv(s)) ? s = parseFloat(s) : !kL(s) && ar.test(r) && (s = Tv(t, r)), this.setBaseTarget(t, vt(s) ? s.get() : s)), vt(s) ? s.get() : s;
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
      const l = lu(this.props, o, (r = this.presenceContext) === null || r === void 0 ? void 0 : r.custom);
      l && (s = l[t]);
    }
    if (o && s !== void 0)
      return s;
    const c = this.getBaseTargetFromProps(this.props, t);
    return c !== void 0 && !vt(c) ? c : this.initialValues[t] !== void 0 && s === void 0 ? void 0 : this.baseTarget[t];
  }
  on(t, r) {
    return this.events[t] || (this.events[t] = new Eu()), this.events[t].add(r);
  }
  notify(t, ...r) {
    this.events[t] && this.events[t].notify(...r);
  }
}
class Py extends jL {
  constructor() {
    super(...arguments), this.KeyframeResolver = _v;
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
function FL(e) {
  return window.getComputedStyle(e);
}
class BL extends Py {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = my;
  }
  readValueFromInstance(t, r) {
    if (Lr.has(r)) {
      const o = xu(r);
      return o && o.default || 0;
    } else {
      const o = FL(t), s = (hv(r) ? o.getPropertyValue(r) : o[r]) || 0;
      return typeof s == "string" ? s.trim() : s;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: r }) {
    return Zv(t, r);
  }
  build(t, r, o) {
    Vu(t, r, o.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, r, o) {
    return Du(t, r, o);
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    vt(t) && (this.childSubscription = t.on("change", (r) => {
      this.current && (this.current.textContent = `${r}`);
    }));
  }
}
class WL extends Py {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = Ze;
  }
  getBaseTargetFromProps(t, r) {
    return t[r];
  }
  readValueFromInstance(t, r) {
    if (Lr.has(r)) {
      const o = xu(r);
      return o && o.default || 0;
    }
    return r = gy.has(r) ? r : Ru(r), t.getAttribute(r);
  }
  scrapeMotionValuesFromProps(t, r, o) {
    return xy(t, r, o);
  }
  build(t, r, o) {
    ku(t, r, this.isSVGTag, o.transformTemplate);
  }
  renderInstance(t, r, o, s) {
    vy(t, r, o, s);
  }
  mount(t) {
    this.isSVGTag = ju(t.tagName), super.mount(t);
  }
}
const UL = (e, t) => Nu(e) ? new WL(t) : new BL(t, {
  allowProjection: e !== nm
}), $L = /* @__PURE__ */ NL({
  ...OO,
  ...JM,
  ...WM,
  ...QM
}, UL), HL = /* @__PURE__ */ bE($L);
function rN({ deal: e }) {
  const [t, r] = $c([]), o = yo(() => [...e.riskFactors].sort((u, f) => {
    const h = { high: 0, medium: 1, low: 2 };
    return h[u.level] - h[f.level];
  }), [e.riskFactors]), s = (u) => {
    switch (u) {
      case "high":
        return /* @__PURE__ */ C.jsx(j_, { className: "w-4 h-4" });
      case "medium":
        return /* @__PURE__ */ C.jsx(k_, { className: "w-4 h-4" });
      case "low":
        return /* @__PURE__ */ C.jsx(V_, { className: "w-4 h-4" });
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
  return /* @__PURE__ */ C.jsxs(bo, { className: "bg-white shadow-sm border-slate-200", children: [
    /* @__PURE__ */ C.jsxs(So, { children: [
      /* @__PURE__ */ C.jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ C.jsx(ma, { className: "text-slate-800", children: "Risk Assessment" }) }),
      /* @__PURE__ */ C.jsx("p", { className: "text-sm text-slate-500", children: "Identify and assess potential obstacles in the deal process" })
    ] }),
    /* @__PURE__ */ C.jsx(Co, { children: /* @__PURE__ */ C.jsx("div", { className: "space-y-6", children: o.map((u, f) => /* @__PURE__ */ C.jsxs("div", { className: `p-4 rounded-lg border ${c(u.level)}`, children: [
      /* @__PURE__ */ C.jsxs(
        "div",
        {
          className: "flex flex-col sm:flex-row sm:items-center sm:justify-between cursor-pointer space-y-2 sm:space-y-0",
          onClick: () => l(u.label),
          children: [
            /* @__PURE__ */ C.jsxs("div", { className: "flex items-center space-x-3", children: [
              s(u.level),
              /* @__PURE__ */ C.jsx("span", { className: "font-semibold text-sm sm:text-base", children: u.label })
            ] }),
            /* @__PURE__ */ C.jsxs("div", { className: "flex items-center justify-between sm:justify-end space-x-4", children: [
              /* @__PURE__ */ C.jsx(ui, { children: /* @__PURE__ */ C.jsxs(fi, { children: [
                /* @__PURE__ */ C.jsx(di, { asChild: !0, children: /* @__PURE__ */ C.jsxs("div", { className: "flex items-center space-x-1 text-xs sm:text-sm text-muted-foreground", children: [
                  /* @__PURE__ */ C.jsxs("span", { children: [
                    u.lostDealFrequency,
                    " deals lost"
                  ] }),
                  /* @__PURE__ */ C.jsx(Bs, { className: "w-3 h-3 text-muted-foreground" })
                ] }) }),
                /* @__PURE__ */ C.jsx(Er, { className: "max-w-xs", children: /* @__PURE__ */ C.jsxs("p", { children: [
                  "This factor contributed to ",
                  u.lostDealFrequency,
                  " lost deals in the past. Addressing this early can help avoid the same outcome."
                ] }) })
              ] }) }),
              /* @__PURE__ */ C.jsx(
                Gc,
                {
                  className: `w-4 h-4 transition-transform ${t.includes(u.label) ? "transform rotate-180" : ""}`
                }
              )
            ] })
          ]
        }
      ),
      t.includes(u.label) && /* @__PURE__ */ C.jsxs(
        HL.div,
        {
          initial: { opacity: 0, height: 0 },
          animate: { opacity: 1, height: "auto" },
          exit: { opacity: 0, height: 0 },
          transition: { duration: 0.3 },
          className: "mt-4 space-y-4",
          children: [
            /* @__PURE__ */ C.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ C.jsxs("div", { children: [
                /* @__PURE__ */ C.jsx("h4", { className: "font-semibold mb-2", children: "Details" }),
                /* @__PURE__ */ C.jsx("p", { className: "text-sm text-slate-600", children: u.details })
              ] }),
              /* @__PURE__ */ C.jsxs("div", { children: [
                /* @__PURE__ */ C.jsx("h4", { className: "font-semibold mb-2", children: "Impact" }),
                /* @__PURE__ */ C.jsx("p", { className: "text-sm text-slate-600", children: u.impact })
              ] })
            ] }),
            /* @__PURE__ */ C.jsxs("div", { children: [
              /* @__PURE__ */ C.jsx("h4", { className: "font-semibold mb-2", children: "Key Metric" }),
              /* @__PURE__ */ C.jsx("p", { className: "text-sm text-slate-600", children: u.metric })
            ] })
          ]
        }
      )
    ] }, f)) }) })
  ] });
}
export {
  KL as Counter,
  ZL as DealHeader,
  QL as DealProgress,
  rN as DealRisk,
  eN as DealStakeholders
};
//# sourceMappingURL=index.js.map
