import * as w from "react";
import z, { forwardRef as wa, createElement as na, useState as jn, useEffect as Wo, useLayoutEffect as Fm, createContext as Gi, useContext as zt, useId as GT, useCallback as Bm, Component as KT, useRef as qs, useInsertionEffect as YT, useMemo as $o, Fragment as Wm } from "react";
import * as Sa from "react-dom";
import $m from "react-dom";
var yo = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function qT(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Oc = { exports: {} }, xo = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hh;
function XT() {
  if (Hh)
    return xo;
  Hh = 1;
  var e = z, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, s = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, c = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(u, d, h) {
    var p, v = {}, x = null, g = null;
    h !== void 0 && (x = "" + h), d.key !== void 0 && (x = "" + d.key), d.ref !== void 0 && (g = d.ref);
    for (p in d)
      o.call(d, p) && !c.hasOwnProperty(p) && (v[p] = d[p]);
    if (u && u.defaultProps)
      for (p in d = u.defaultProps, d)
        v[p] === void 0 && (v[p] = d[p]);
    return { $$typeof: t, type: u, key: x, ref: g, props: v, _owner: s.current };
  }
  return xo.Fragment = n, xo.jsx = l, xo.jsxs = l, xo;
}
var bo = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zh;
function ZT() {
  return zh || (zh = 1, process.env.NODE_ENV !== "production" && function() {
    var e = z, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), u = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), v = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), T = Symbol.iterator, S = "@@iterator";
    function _(R) {
      if (R === null || typeof R != "object")
        return null;
      var U = T && R[T] || R[S];
      return typeof U == "function" ? U : null;
    }
    var P = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function E(R) {
      {
        for (var U = arguments.length, Y = new Array(U > 1 ? U - 1 : 0), de = 1; de < U; de++)
          Y[de - 1] = arguments[de];
        O("error", R, Y);
      }
    }
    function O(R, U, Y) {
      {
        var de = P.ReactDebugCurrentFrame, Ie = de.getStackAddendum();
        Ie !== "" && (U += "%s", Y = Y.concat([Ie]));
        var He = Y.map(function(Me) {
          return String(Me);
        });
        He.unshift("Warning: " + U), Function.prototype.apply.call(console[R], console, He);
      }
    }
    var N = !1, j = !1, W = !1, $ = !1, H = !1, te;
    te = Symbol.for("react.module.reference");
    function re(R) {
      return !!(typeof R == "string" || typeof R == "function" || R === o || R === c || H || R === s || R === h || R === p || $ || R === g || N || j || W || typeof R == "object" && R !== null && (R.$$typeof === x || R.$$typeof === v || R.$$typeof === l || R.$$typeof === u || R.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      R.$$typeof === te || R.getModuleId !== void 0));
    }
    function fe(R, U, Y) {
      var de = R.displayName;
      if (de)
        return de;
      var Ie = U.displayName || U.name || "";
      return Ie !== "" ? Y + "(" + Ie + ")" : Y;
    }
    function J(R) {
      return R.displayName || "Context";
    }
    function se(R) {
      if (R == null)
        return null;
      if (typeof R.tag == "number" && E("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof R == "function")
        return R.displayName || R.name || null;
      if (typeof R == "string")
        return R;
      switch (R) {
        case o:
          return "Fragment";
        case n:
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
      if (typeof R == "object")
        switch (R.$$typeof) {
          case u:
            var U = R;
            return J(U) + ".Consumer";
          case l:
            var Y = R;
            return J(Y._context) + ".Provider";
          case d:
            return fe(R, R.render, "ForwardRef");
          case v:
            var de = R.displayName || null;
            return de !== null ? de : se(R.type) || "Memo";
          case x: {
            var Ie = R, He = Ie._payload, Me = Ie._init;
            try {
              return se(Me(He));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var ne = Object.assign, Te = 0, ie, Z, q, G, pe, Ee, _e;
    function ge() {
    }
    ge.__reactDisabledLog = !0;
    function Re() {
      {
        if (Te === 0) {
          ie = console.log, Z = console.info, q = console.warn, G = console.error, pe = console.group, Ee = console.groupCollapsed, _e = console.groupEnd;
          var R = {
            configurable: !0,
            enumerable: !0,
            value: ge,
            writable: !0
          };
          Object.defineProperties(console, {
            info: R,
            log: R,
            warn: R,
            error: R,
            group: R,
            groupCollapsed: R,
            groupEnd: R
          });
        }
        Te++;
      }
    }
    function Be() {
      {
        if (Te--, Te === 0) {
          var R = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ne({}, R, {
              value: ie
            }),
            info: ne({}, R, {
              value: Z
            }),
            warn: ne({}, R, {
              value: q
            }),
            error: ne({}, R, {
              value: G
            }),
            group: ne({}, R, {
              value: pe
            }),
            groupCollapsed: ne({}, R, {
              value: Ee
            }),
            groupEnd: ne({}, R, {
              value: _e
            })
          });
        }
        Te < 0 && E("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Je = P.ReactCurrentDispatcher, X;
    function be(R, U, Y) {
      {
        if (X === void 0)
          try {
            throw Error();
          } catch (Ie) {
            var de = Ie.stack.trim().match(/\n( *(at )?)/);
            X = de && de[1] || "";
          }
        return `
` + X + R;
      }
    }
    var ke = !1, Se;
    {
      var ve = typeof WeakMap == "function" ? WeakMap : Map;
      Se = new ve();
    }
    function Pe(R, U) {
      if (!R || ke)
        return "";
      {
        var Y = Se.get(R);
        if (Y !== void 0)
          return Y;
      }
      var de;
      ke = !0;
      var Ie = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var He;
      He = Je.current, Je.current = null, Re();
      try {
        if (U) {
          var Me = function() {
            throw Error();
          };
          if (Object.defineProperty(Me.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Me, []);
            } catch (Pt) {
              de = Pt;
            }
            Reflect.construct(R, [], Me);
          } else {
            try {
              Me.call();
            } catch (Pt) {
              de = Pt;
            }
            R.call(Me.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Pt) {
            de = Pt;
          }
          R();
        }
      } catch (Pt) {
        if (Pt && de && typeof Pt.stack == "string") {
          for (var Ae = Pt.stack.split(`
`), yt = de.stack.split(`
`), tt = Ae.length - 1, it = yt.length - 1; tt >= 1 && it >= 0 && Ae[tt] !== yt[it]; )
            it--;
          for (; tt >= 1 && it >= 0; tt--, it--)
            if (Ae[tt] !== yt[it]) {
              if (tt !== 1 || it !== 1)
                do
                  if (tt--, it--, it < 0 || Ae[tt] !== yt[it]) {
                    var xt = `
` + Ae[tt].replace(" at new ", " at ");
                    return R.displayName && xt.includes("<anonymous>") && (xt = xt.replace("<anonymous>", R.displayName)), typeof R == "function" && Se.set(R, xt), xt;
                  }
                while (tt >= 1 && it >= 0);
              break;
            }
        }
      } finally {
        ke = !1, Je.current = He, Be(), Error.prepareStackTrace = Ie;
      }
      var lr = R ? R.displayName || R.name : "", on = lr ? be(lr) : "";
      return typeof R == "function" && Se.set(R, on), on;
    }
    function at(R, U, Y) {
      return Pe(R, !1);
    }
    function Ye(R) {
      var U = R.prototype;
      return !!(U && U.isReactComponent);
    }
    function ft(R, U, Y) {
      if (R == null)
        return "";
      if (typeof R == "function")
        return Pe(R, Ye(R));
      if (typeof R == "string")
        return be(R);
      switch (R) {
        case h:
          return be("Suspense");
        case p:
          return be("SuspenseList");
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case d:
            return at(R.render);
          case v:
            return ft(R.type, U, Y);
          case x: {
            var de = R, Ie = de._payload, He = de._init;
            try {
              return ft(He(Ie), U, Y);
            } catch {
            }
          }
        }
      return "";
    }
    var Mt = Object.prototype.hasOwnProperty, lt = {}, rn = P.ReactDebugCurrentFrame;
    function Vt(R) {
      if (R) {
        var U = R._owner, Y = ft(R.type, R._source, U ? U.type : null);
        rn.setExtraStackFrame(Y);
      } else
        rn.setExtraStackFrame(null);
    }
    function Ot(R, U, Y, de, Ie) {
      {
        var He = Function.call.bind(Mt);
        for (var Me in R)
          if (He(R, Me)) {
            var Ae = void 0;
            try {
              if (typeof R[Me] != "function") {
                var yt = Error((de || "React class") + ": " + Y + " type `" + Me + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof R[Me] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw yt.name = "Invariant Violation", yt;
              }
              Ae = R[Me](U, Me, de, Y, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (tt) {
              Ae = tt;
            }
            Ae && !(Ae instanceof Error) && (Vt(Ie), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", de || "React class", Y, Me, typeof Ae), Vt(null)), Ae instanceof Error && !(Ae.message in lt) && (lt[Ae.message] = !0, Vt(Ie), E("Failed %s type: %s", Y, Ae.message), Vt(null));
          }
      }
    }
    var Dt = Array.isArray;
    function gn(R) {
      return Dt(R);
    }
    function ht(R) {
      {
        var U = typeof Symbol == "function" && Symbol.toStringTag, Y = U && R[Symbol.toStringTag] || R.constructor.name || "Object";
        return Y;
      }
    }
    function _n(R) {
      try {
        return Pn(R), !1;
      } catch {
        return !0;
      }
    }
    function Pn(R) {
      return "" + R;
    }
    function fi(R) {
      if (_n(R))
        return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ht(R)), Pn(R);
    }
    var Tt = P.ReactCurrentOwner, An = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, En, Gt, Rn;
    Rn = {};
    function Nn(R) {
      if (Mt.call(R, "ref")) {
        var U = Object.getOwnPropertyDescriptor(R, "ref").get;
        if (U && U.isReactWarning)
          return !1;
      }
      return R.ref !== void 0;
    }
    function Vr(R) {
      if (Mt.call(R, "key")) {
        var U = Object.getOwnPropertyDescriptor(R, "key").get;
        if (U && U.isReactWarning)
          return !1;
      }
      return R.key !== void 0;
    }
    function Fr(R, U) {
      if (typeof R.ref == "string" && Tt.current && U && Tt.current.stateNode !== U) {
        var Y = se(Tt.current.type);
        Rn[Y] || (E('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', se(Tt.current.type), R.ref), Rn[Y] = !0);
      }
    }
    function or(R, U) {
      {
        var Y = function() {
          En || (En = !0, E("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", U));
        };
        Y.isReactWarning = !0, Object.defineProperty(R, "key", {
          get: Y,
          configurable: !0
        });
      }
    }
    function sr(R, U) {
      {
        var Y = function() {
          Gt || (Gt = !0, E("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", U));
        };
        Y.isReactWarning = !0, Object.defineProperty(R, "ref", {
          get: Y,
          configurable: !0
        });
      }
    }
    var Br = function(R, U, Y, de, Ie, He, Me) {
      var Ae = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: R,
        key: U,
        ref: Y,
        props: Me,
        // Record the component responsible for creating this element.
        _owner: He
      };
      return Ae._store = {}, Object.defineProperty(Ae._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Ae, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: de
      }), Object.defineProperty(Ae, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ie
      }), Object.freeze && (Object.freeze(Ae.props), Object.freeze(Ae)), Ae;
    };
    function Wr(R, U, Y, de, Ie) {
      {
        var He, Me = {}, Ae = null, yt = null;
        Y !== void 0 && (fi(Y), Ae = "" + Y), Vr(U) && (fi(U.key), Ae = "" + U.key), Nn(U) && (yt = U.ref, Fr(U, Ie));
        for (He in U)
          Mt.call(U, He) && !An.hasOwnProperty(He) && (Me[He] = U[He]);
        if (R && R.defaultProps) {
          var tt = R.defaultProps;
          for (He in tt)
            Me[He] === void 0 && (Me[He] = tt[He]);
        }
        if (Ae || yt) {
          var it = typeof R == "function" ? R.displayName || R.name || "Unknown" : R;
          Ae && or(Me, it), yt && sr(Me, it);
        }
        return Br(R, Ae, yt, Ie, de, Tt.current, Me);
      }
    }
    var Ft = P.ReactCurrentOwner, hi = P.ReactDebugCurrentFrame;
    function oe(R) {
      if (R) {
        var U = R._owner, Y = ft(R.type, R._source, U ? U.type : null);
        hi.setExtraStackFrame(Y);
      } else
        hi.setExtraStackFrame(null);
    }
    var De;
    De = !1;
    function We(R) {
      return typeof R == "object" && R !== null && R.$$typeof === t;
    }
    function _t() {
      {
        if (Ft.current) {
          var R = se(Ft.current.type);
          if (R)
            return `

Check the render method of \`` + R + "`.";
        }
        return "";
      }
    }
    function Bt(R) {
      return "";
    }
    var ar = {};
    function pi(R) {
      {
        var U = _t();
        if (!U) {
          var Y = typeof R == "string" ? R : R.displayName || R.name;
          Y && (U = `

Check the top-level render call using <` + Y + ">.");
        }
        return U;
      }
    }
    function Yo(R, U) {
      {
        if (!R._store || R._store.validated || R.key != null)
          return;
        R._store.validated = !0;
        var Y = pi(U);
        if (ar[Y])
          return;
        ar[Y] = !0;
        var de = "";
        R && R._owner && R._owner !== Ft.current && (de = " It was passed a child from " + se(R._owner.type) + "."), oe(R), E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', Y, de), oe(null);
      }
    }
    function qo(R, U) {
      {
        if (typeof R != "object")
          return;
        if (gn(R))
          for (var Y = 0; Y < R.length; Y++) {
            var de = R[Y];
            We(de) && Yo(de, U);
          }
        else if (We(R))
          R._store && (R._store.validated = !0);
        else if (R) {
          var Ie = _(R);
          if (typeof Ie == "function" && Ie !== R.entries)
            for (var He = Ie.call(R), Me; !(Me = He.next()).done; )
              We(Me.value) && Yo(Me.value, U);
        }
      }
    }
    function Ga(R) {
      {
        var U = R.type;
        if (U == null || typeof U == "string")
          return;
        var Y;
        if (typeof U == "function")
          Y = U.propTypes;
        else if (typeof U == "object" && (U.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        U.$$typeof === v))
          Y = U.propTypes;
        else
          return;
        if (Y) {
          var de = se(U);
          Ot(Y, R.props, "prop", de, R);
        } else if (U.PropTypes !== void 0 && !De) {
          De = !0;
          var Ie = se(U);
          E("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Ie || "Unknown");
        }
        typeof U.getDefaultProps == "function" && !U.getDefaultProps.isReactClassApproved && E("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function eo(R) {
      {
        for (var U = Object.keys(R.props), Y = 0; Y < U.length; Y++) {
          var de = U[Y];
          if (de !== "children" && de !== "key") {
            oe(R), E("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", de), oe(null);
            break;
          }
        }
        R.ref !== null && (oe(R), E("Invalid attribute `ref` supplied to `React.Fragment`."), oe(null));
      }
    }
    var Xo = {};
    function mi(R, U, Y, de, Ie, He) {
      {
        var Me = re(R);
        if (!Me) {
          var Ae = "";
          (R === void 0 || typeof R == "object" && R !== null && Object.keys(R).length === 0) && (Ae += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var yt = Bt();
          yt ? Ae += yt : Ae += _t();
          var tt;
          R === null ? tt = "null" : gn(R) ? tt = "array" : R !== void 0 && R.$$typeof === t ? (tt = "<" + (se(R.type) || "Unknown") + " />", Ae = " Did you accidentally export a JSX literal instead of a component?") : tt = typeof R, E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", tt, Ae);
        }
        var it = Wr(R, U, Y, Ie, He);
        if (it == null)
          return it;
        if (Me) {
          var xt = U.children;
          if (xt !== void 0)
            if (de)
              if (gn(xt)) {
                for (var lr = 0; lr < xt.length; lr++)
                  qo(xt[lr], R);
                Object.freeze && Object.freeze(xt);
              } else
                E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              qo(xt, R);
        }
        if (Mt.call(U, "key")) {
          var on = se(R), Pt = Object.keys(U).filter(function(Zo) {
            return Zo !== "key";
          }), to = Pt.length > 0 ? "{key: someKey, " + Pt.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Xo[on + to]) {
            var Za = Pt.length > 0 ? "{" + Pt.join(": ..., ") + ": ...}" : "{}";
            E(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, to, on, Za, on), Xo[on + to] = !0;
          }
        }
        return R === o ? eo(it) : Ga(it), it;
      }
    }
    function Ka(R, U, Y) {
      return mi(R, U, Y, !0);
    }
    function Ya(R, U, Y) {
      return mi(R, U, Y, !1);
    }
    var qa = Ya, Xa = Ka;
    bo.Fragment = o, bo.jsx = qa, bo.jsxs = Xa;
  }()), bo;
}
process.env.NODE_ENV === "production" ? Oc.exports = XT() : Oc.exports = ZT();
var m = Oc.exports, ra = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
ra.exports;
(function(e, t) {
  (function() {
    var n, o = "4.17.21", s = 200, c = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", l = "Expected a function", u = "Invalid `variable` option passed into `_.template`", d = "__lodash_hash_undefined__", h = 500, p = "__lodash_placeholder__", v = 1, x = 2, g = 4, T = 1, S = 2, _ = 1, P = 2, E = 4, O = 8, N = 16, j = 32, W = 64, $ = 128, H = 256, te = 512, re = 30, fe = "...", J = 800, se = 16, ne = 1, Te = 2, ie = 3, Z = 1 / 0, q = 9007199254740991, G = 17976931348623157e292, pe = NaN, Ee = 4294967295, _e = Ee - 1, ge = Ee >>> 1, Re = [
      ["ary", $],
      ["bind", _],
      ["bindKey", P],
      ["curry", O],
      ["curryRight", N],
      ["flip", te],
      ["partial", j],
      ["partialRight", W],
      ["rearg", H]
    ], Be = "[object Arguments]", Je = "[object Array]", X = "[object AsyncFunction]", be = "[object Boolean]", ke = "[object Date]", Se = "[object DOMException]", ve = "[object Error]", Pe = "[object Function]", at = "[object GeneratorFunction]", Ye = "[object Map]", ft = "[object Number]", Mt = "[object Null]", lt = "[object Object]", rn = "[object Promise]", Vt = "[object Proxy]", Ot = "[object RegExp]", Dt = "[object Set]", gn = "[object String]", ht = "[object Symbol]", _n = "[object Undefined]", Pn = "[object WeakMap]", fi = "[object WeakSet]", Tt = "[object ArrayBuffer]", An = "[object DataView]", En = "[object Float32Array]", Gt = "[object Float64Array]", Rn = "[object Int8Array]", Nn = "[object Int16Array]", Vr = "[object Int32Array]", Fr = "[object Uint8Array]", or = "[object Uint8ClampedArray]", sr = "[object Uint16Array]", Br = "[object Uint32Array]", Wr = /\b__p \+= '';/g, Ft = /\b(__p \+=) '' \+/g, hi = /(__e\(.*?\)|\b__t\)) \+\n'';/g, oe = /&(?:amp|lt|gt|quot|#39);/g, De = /[&<>"']/g, We = RegExp(oe.source), _t = RegExp(De.source), Bt = /<%-([\s\S]+?)%>/g, ar = /<%([\s\S]+?)%>/g, pi = /<%=([\s\S]+?)%>/g, Yo = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, qo = /^\w*$/, Ga = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, eo = /[\\^$.*+?()[\]{}|]/g, Xo = RegExp(eo.source), mi = /^\s+/, Ka = /\s/, Ya = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, qa = /\{\n\/\* \[wrapped with (.+)\] \*/, Xa = /,? & /, R = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, U = /[()=,{}\[\]\/\s]/, Y = /\\(\\)?/g, de = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Ie = /\w*$/, He = /^[-+]0x[0-9a-f]+$/i, Me = /^0b[01]+$/i, Ae = /^\[object .+?Constructor\]$/, yt = /^0o[0-7]+$/i, tt = /^(?:0|[1-9]\d*)$/, it = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, xt = /($^)/, lr = /['\n\r\u2028\u2029\\]/g, on = "\\ud800-\\udfff", Pt = "\\u0300-\\u036f", to = "\\ufe20-\\ufe2f", Za = "\\u20d0-\\u20ff", Zo = Pt + to + Za, xd = "\\u2700-\\u27bf", bd = "a-z\\xdf-\\xf6\\xf8-\\xff", $0 = "\\xac\\xb1\\xd7\\xf7", U0 = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", H0 = "\\u2000-\\u206f", z0 = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", wd = "A-Z\\xc0-\\xd6\\xd8-\\xde", Sd = "\\ufe0e\\ufe0f", Cd = $0 + U0 + H0 + z0, Ja = "['’]", G0 = "[" + on + "]", Td = "[" + Cd + "]", Jo = "[" + Zo + "]", _d = "\\d+", K0 = "[" + xd + "]", Pd = "[" + bd + "]", Ad = "[^" + on + Cd + _d + xd + bd + wd + "]", Qa = "\\ud83c[\\udffb-\\udfff]", Y0 = "(?:" + Jo + "|" + Qa + ")", Ed = "[^" + on + "]", el = "(?:\\ud83c[\\udde6-\\uddff]){2}", tl = "[\\ud800-\\udbff][\\udc00-\\udfff]", gi = "[" + wd + "]", Rd = "\\u200d", Nd = "(?:" + Pd + "|" + Ad + ")", q0 = "(?:" + gi + "|" + Ad + ")", Md = "(?:" + Ja + "(?:d|ll|m|re|s|t|ve))?", Od = "(?:" + Ja + "(?:D|LL|M|RE|S|T|VE))?", Dd = Y0 + "?", jd = "[" + Sd + "]?", X0 = "(?:" + Rd + "(?:" + [Ed, el, tl].join("|") + ")" + jd + Dd + ")*", Z0 = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", J0 = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Id = jd + Dd + X0, Q0 = "(?:" + [K0, el, tl].join("|") + ")" + Id, ex = "(?:" + [Ed + Jo + "?", Jo, el, tl, G0].join("|") + ")", tx = RegExp(Ja, "g"), nx = RegExp(Jo, "g"), nl = RegExp(Qa + "(?=" + Qa + ")|" + ex + Id, "g"), rx = RegExp([
      gi + "?" + Pd + "+" + Md + "(?=" + [Td, gi, "$"].join("|") + ")",
      q0 + "+" + Od + "(?=" + [Td, gi + Nd, "$"].join("|") + ")",
      gi + "?" + Nd + "+" + Md,
      gi + "+" + Od,
      J0,
      Z0,
      _d,
      Q0
    ].join("|"), "g"), ix = RegExp("[" + Rd + on + Zo + Sd + "]"), ox = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, sx = [
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
    ], ax = -1, Xe = {};
    Xe[En] = Xe[Gt] = Xe[Rn] = Xe[Nn] = Xe[Vr] = Xe[Fr] = Xe[or] = Xe[sr] = Xe[Br] = !0, Xe[Be] = Xe[Je] = Xe[Tt] = Xe[be] = Xe[An] = Xe[ke] = Xe[ve] = Xe[Pe] = Xe[Ye] = Xe[ft] = Xe[lt] = Xe[Ot] = Xe[Dt] = Xe[gn] = Xe[Pn] = !1;
    var qe = {};
    qe[Be] = qe[Je] = qe[Tt] = qe[An] = qe[be] = qe[ke] = qe[En] = qe[Gt] = qe[Rn] = qe[Nn] = qe[Vr] = qe[Ye] = qe[ft] = qe[lt] = qe[Ot] = qe[Dt] = qe[gn] = qe[ht] = qe[Fr] = qe[or] = qe[sr] = qe[Br] = !0, qe[ve] = qe[Pe] = qe[Pn] = !1;
    var lx = {
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
    }, cx = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, ux = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, dx = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, fx = parseFloat, hx = parseInt, Ld = typeof yo == "object" && yo && yo.Object === Object && yo, px = typeof self == "object" && self && self.Object === Object && self, bt = Ld || px || Function("return this")(), rl = t && !t.nodeType && t, $r = rl && !0 && e && !e.nodeType && e, kd = $r && $r.exports === rl, il = kd && Ld.process, sn = function() {
      try {
        var D = $r && $r.require && $r.require("util").types;
        return D || il && il.binding && il.binding("util");
      } catch {
      }
    }(), Vd = sn && sn.isArrayBuffer, Fd = sn && sn.isDate, Bd = sn && sn.isMap, Wd = sn && sn.isRegExp, $d = sn && sn.isSet, Ud = sn && sn.isTypedArray;
    function Kt(D, k, L) {
      switch (L.length) {
        case 0:
          return D.call(k);
        case 1:
          return D.call(k, L[0]);
        case 2:
          return D.call(k, L[0], L[1]);
        case 3:
          return D.call(k, L[0], L[1], L[2]);
      }
      return D.apply(k, L);
    }
    function mx(D, k, L, Q) {
      for (var he = -1, Fe = D == null ? 0 : D.length; ++he < Fe; ) {
        var pt = D[he];
        k(Q, pt, L(pt), D);
      }
      return Q;
    }
    function an(D, k) {
      for (var L = -1, Q = D == null ? 0 : D.length; ++L < Q && k(D[L], L, D) !== !1; )
        ;
      return D;
    }
    function gx(D, k) {
      for (var L = D == null ? 0 : D.length; L-- && k(D[L], L, D) !== !1; )
        ;
      return D;
    }
    function Hd(D, k) {
      for (var L = -1, Q = D == null ? 0 : D.length; ++L < Q; )
        if (!k(D[L], L, D))
          return !1;
      return !0;
    }
    function cr(D, k) {
      for (var L = -1, Q = D == null ? 0 : D.length, he = 0, Fe = []; ++L < Q; ) {
        var pt = D[L];
        k(pt, L, D) && (Fe[he++] = pt);
      }
      return Fe;
    }
    function Qo(D, k) {
      var L = D == null ? 0 : D.length;
      return !!L && vi(D, k, 0) > -1;
    }
    function ol(D, k, L) {
      for (var Q = -1, he = D == null ? 0 : D.length; ++Q < he; )
        if (L(k, D[Q]))
          return !0;
      return !1;
    }
    function Qe(D, k) {
      for (var L = -1, Q = D == null ? 0 : D.length, he = Array(Q); ++L < Q; )
        he[L] = k(D[L], L, D);
      return he;
    }
    function ur(D, k) {
      for (var L = -1, Q = k.length, he = D.length; ++L < Q; )
        D[he + L] = k[L];
      return D;
    }
    function sl(D, k, L, Q) {
      var he = -1, Fe = D == null ? 0 : D.length;
      for (Q && Fe && (L = D[++he]); ++he < Fe; )
        L = k(L, D[he], he, D);
      return L;
    }
    function vx(D, k, L, Q) {
      var he = D == null ? 0 : D.length;
      for (Q && he && (L = D[--he]); he--; )
        L = k(L, D[he], he, D);
      return L;
    }
    function al(D, k) {
      for (var L = -1, Q = D == null ? 0 : D.length; ++L < Q; )
        if (k(D[L], L, D))
          return !0;
      return !1;
    }
    var yx = ll("length");
    function xx(D) {
      return D.split("");
    }
    function bx(D) {
      return D.match(R) || [];
    }
    function zd(D, k, L) {
      var Q;
      return L(D, function(he, Fe, pt) {
        if (k(he, Fe, pt))
          return Q = Fe, !1;
      }), Q;
    }
    function es(D, k, L, Q) {
      for (var he = D.length, Fe = L + (Q ? 1 : -1); Q ? Fe-- : ++Fe < he; )
        if (k(D[Fe], Fe, D))
          return Fe;
      return -1;
    }
    function vi(D, k, L) {
      return k === k ? Ox(D, k, L) : es(D, Gd, L);
    }
    function wx(D, k, L, Q) {
      for (var he = L - 1, Fe = D.length; ++he < Fe; )
        if (Q(D[he], k))
          return he;
      return -1;
    }
    function Gd(D) {
      return D !== D;
    }
    function Kd(D, k) {
      var L = D == null ? 0 : D.length;
      return L ? ul(D, k) / L : pe;
    }
    function ll(D) {
      return function(k) {
        return k == null ? n : k[D];
      };
    }
    function cl(D) {
      return function(k) {
        return D == null ? n : D[k];
      };
    }
    function Yd(D, k, L, Q, he) {
      return he(D, function(Fe, pt, Ke) {
        L = Q ? (Q = !1, Fe) : k(L, Fe, pt, Ke);
      }), L;
    }
    function Sx(D, k) {
      var L = D.length;
      for (D.sort(k); L--; )
        D[L] = D[L].value;
      return D;
    }
    function ul(D, k) {
      for (var L, Q = -1, he = D.length; ++Q < he; ) {
        var Fe = k(D[Q]);
        Fe !== n && (L = L === n ? Fe : L + Fe);
      }
      return L;
    }
    function dl(D, k) {
      for (var L = -1, Q = Array(D); ++L < D; )
        Q[L] = k(L);
      return Q;
    }
    function Cx(D, k) {
      return Qe(k, function(L) {
        return [L, D[L]];
      });
    }
    function qd(D) {
      return D && D.slice(0, Qd(D) + 1).replace(mi, "");
    }
    function Yt(D) {
      return function(k) {
        return D(k);
      };
    }
    function fl(D, k) {
      return Qe(k, function(L) {
        return D[L];
      });
    }
    function no(D, k) {
      return D.has(k);
    }
    function Xd(D, k) {
      for (var L = -1, Q = D.length; ++L < Q && vi(k, D[L], 0) > -1; )
        ;
      return L;
    }
    function Zd(D, k) {
      for (var L = D.length; L-- && vi(k, D[L], 0) > -1; )
        ;
      return L;
    }
    function Tx(D, k) {
      for (var L = D.length, Q = 0; L--; )
        D[L] === k && ++Q;
      return Q;
    }
    var _x = cl(lx), Px = cl(cx);
    function Ax(D) {
      return "\\" + dx[D];
    }
    function Ex(D, k) {
      return D == null ? n : D[k];
    }
    function yi(D) {
      return ix.test(D);
    }
    function Rx(D) {
      return ox.test(D);
    }
    function Nx(D) {
      for (var k, L = []; !(k = D.next()).done; )
        L.push(k.value);
      return L;
    }
    function hl(D) {
      var k = -1, L = Array(D.size);
      return D.forEach(function(Q, he) {
        L[++k] = [he, Q];
      }), L;
    }
    function Jd(D, k) {
      return function(L) {
        return D(k(L));
      };
    }
    function dr(D, k) {
      for (var L = -1, Q = D.length, he = 0, Fe = []; ++L < Q; ) {
        var pt = D[L];
        (pt === k || pt === p) && (D[L] = p, Fe[he++] = L);
      }
      return Fe;
    }
    function ts(D) {
      var k = -1, L = Array(D.size);
      return D.forEach(function(Q) {
        L[++k] = Q;
      }), L;
    }
    function Mx(D) {
      var k = -1, L = Array(D.size);
      return D.forEach(function(Q) {
        L[++k] = [Q, Q];
      }), L;
    }
    function Ox(D, k, L) {
      for (var Q = L - 1, he = D.length; ++Q < he; )
        if (D[Q] === k)
          return Q;
      return -1;
    }
    function Dx(D, k, L) {
      for (var Q = L + 1; Q--; )
        if (D[Q] === k)
          return Q;
      return Q;
    }
    function xi(D) {
      return yi(D) ? Ix(D) : yx(D);
    }
    function vn(D) {
      return yi(D) ? Lx(D) : xx(D);
    }
    function Qd(D) {
      for (var k = D.length; k-- && Ka.test(D.charAt(k)); )
        ;
      return k;
    }
    var jx = cl(ux);
    function Ix(D) {
      for (var k = nl.lastIndex = 0; nl.test(D); )
        ++k;
      return k;
    }
    function Lx(D) {
      return D.match(nl) || [];
    }
    function kx(D) {
      return D.match(rx) || [];
    }
    var Vx = function D(k) {
      k = k == null ? bt : bi.defaults(bt.Object(), k, bi.pick(bt, sx));
      var L = k.Array, Q = k.Date, he = k.Error, Fe = k.Function, pt = k.Math, Ke = k.Object, pl = k.RegExp, Fx = k.String, ln = k.TypeError, ns = L.prototype, Bx = Fe.prototype, wi = Ke.prototype, rs = k["__core-js_shared__"], is = Bx.toString, ze = wi.hasOwnProperty, Wx = 0, ef = function() {
        var r = /[^.]+$/.exec(rs && rs.keys && rs.keys.IE_PROTO || "");
        return r ? "Symbol(src)_1." + r : "";
      }(), os = wi.toString, $x = is.call(Ke), Ux = bt._, Hx = pl(
        "^" + is.call(ze).replace(eo, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), ss = kd ? k.Buffer : n, fr = k.Symbol, as = k.Uint8Array, tf = ss ? ss.allocUnsafe : n, ls = Jd(Ke.getPrototypeOf, Ke), nf = Ke.create, rf = wi.propertyIsEnumerable, cs = ns.splice, of = fr ? fr.isConcatSpreadable : n, ro = fr ? fr.iterator : n, Ur = fr ? fr.toStringTag : n, us = function() {
        try {
          var r = Yr(Ke, "defineProperty");
          return r({}, "", {}), r;
        } catch {
        }
      }(), zx = k.clearTimeout !== bt.clearTimeout && k.clearTimeout, Gx = Q && Q.now !== bt.Date.now && Q.now, Kx = k.setTimeout !== bt.setTimeout && k.setTimeout, ds = pt.ceil, fs = pt.floor, ml = Ke.getOwnPropertySymbols, Yx = ss ? ss.isBuffer : n, sf = k.isFinite, qx = ns.join, Xx = Jd(Ke.keys, Ke), mt = pt.max, At = pt.min, Zx = Q.now, Jx = k.parseInt, af = pt.random, Qx = ns.reverse, gl = Yr(k, "DataView"), io = Yr(k, "Map"), vl = Yr(k, "Promise"), Si = Yr(k, "Set"), oo = Yr(k, "WeakMap"), so = Yr(Ke, "create"), hs = oo && new oo(), Ci = {}, eb = qr(gl), tb = qr(io), nb = qr(vl), rb = qr(Si), ib = qr(oo), ps = fr ? fr.prototype : n, ao = ps ? ps.valueOf : n, lf = ps ? ps.toString : n;
      function b(r) {
        if (ot(r) && !me(r) && !(r instanceof Oe)) {
          if (r instanceof cn)
            return r;
          if (ze.call(r, "__wrapped__"))
            return ch(r);
        }
        return new cn(r);
      }
      var Ti = /* @__PURE__ */ function() {
        function r() {
        }
        return function(i) {
          if (!nt(i))
            return {};
          if (nf)
            return nf(i);
          r.prototype = i;
          var a = new r();
          return r.prototype = n, a;
        };
      }();
      function ms() {
      }
      function cn(r, i) {
        this.__wrapped__ = r, this.__actions__ = [], this.__chain__ = !!i, this.__index__ = 0, this.__values__ = n;
      }
      b.templateSettings = {
        /**
         * Used to detect `data` property values to be HTML-escaped.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        escape: Bt,
        /**
         * Used to detect code to be evaluated.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        evaluate: ar,
        /**
         * Used to detect `data` property values to inject.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        interpolate: pi,
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
          _: b
        }
      }, b.prototype = ms.prototype, b.prototype.constructor = b, cn.prototype = Ti(ms.prototype), cn.prototype.constructor = cn;
      function Oe(r) {
        this.__wrapped__ = r, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Ee, this.__views__ = [];
      }
      function ob() {
        var r = new Oe(this.__wrapped__);
        return r.__actions__ = Wt(this.__actions__), r.__dir__ = this.__dir__, r.__filtered__ = this.__filtered__, r.__iteratees__ = Wt(this.__iteratees__), r.__takeCount__ = this.__takeCount__, r.__views__ = Wt(this.__views__), r;
      }
      function sb() {
        if (this.__filtered__) {
          var r = new Oe(this);
          r.__dir__ = -1, r.__filtered__ = !0;
        } else
          r = this.clone(), r.__dir__ *= -1;
        return r;
      }
      function ab() {
        var r = this.__wrapped__.value(), i = this.__dir__, a = me(r), f = i < 0, y = a ? r.length : 0, C = xw(0, y, this.__views__), A = C.start, M = C.end, I = M - A, V = f ? M : A - 1, F = this.__iteratees__, B = F.length, K = 0, ee = At(I, this.__takeCount__);
        if (!a || !f && y == I && ee == I)
          return Of(r, this.__actions__);
        var le = [];
        e:
          for (; I-- && K < ee; ) {
            V += i;
            for (var we = -1, ce = r[V]; ++we < B; ) {
              var Ne = F[we], je = Ne.iteratee, Zt = Ne.type, Lt = je(ce);
              if (Zt == Te)
                ce = Lt;
              else if (!Lt) {
                if (Zt == ne)
                  continue e;
                break e;
              }
            }
            le[K++] = ce;
          }
        return le;
      }
      Oe.prototype = Ti(ms.prototype), Oe.prototype.constructor = Oe;
      function Hr(r) {
        var i = -1, a = r == null ? 0 : r.length;
        for (this.clear(); ++i < a; ) {
          var f = r[i];
          this.set(f[0], f[1]);
        }
      }
      function lb() {
        this.__data__ = so ? so(null) : {}, this.size = 0;
      }
      function cb(r) {
        var i = this.has(r) && delete this.__data__[r];
        return this.size -= i ? 1 : 0, i;
      }
      function ub(r) {
        var i = this.__data__;
        if (so) {
          var a = i[r];
          return a === d ? n : a;
        }
        return ze.call(i, r) ? i[r] : n;
      }
      function db(r) {
        var i = this.__data__;
        return so ? i[r] !== n : ze.call(i, r);
      }
      function fb(r, i) {
        var a = this.__data__;
        return this.size += this.has(r) ? 0 : 1, a[r] = so && i === n ? d : i, this;
      }
      Hr.prototype.clear = lb, Hr.prototype.delete = cb, Hr.prototype.get = ub, Hr.prototype.has = db, Hr.prototype.set = fb;
      function Wn(r) {
        var i = -1, a = r == null ? 0 : r.length;
        for (this.clear(); ++i < a; ) {
          var f = r[i];
          this.set(f[0], f[1]);
        }
      }
      function hb() {
        this.__data__ = [], this.size = 0;
      }
      function pb(r) {
        var i = this.__data__, a = gs(i, r);
        if (a < 0)
          return !1;
        var f = i.length - 1;
        return a == f ? i.pop() : cs.call(i, a, 1), --this.size, !0;
      }
      function mb(r) {
        var i = this.__data__, a = gs(i, r);
        return a < 0 ? n : i[a][1];
      }
      function gb(r) {
        return gs(this.__data__, r) > -1;
      }
      function vb(r, i) {
        var a = this.__data__, f = gs(a, r);
        return f < 0 ? (++this.size, a.push([r, i])) : a[f][1] = i, this;
      }
      Wn.prototype.clear = hb, Wn.prototype.delete = pb, Wn.prototype.get = mb, Wn.prototype.has = gb, Wn.prototype.set = vb;
      function $n(r) {
        var i = -1, a = r == null ? 0 : r.length;
        for (this.clear(); ++i < a; ) {
          var f = r[i];
          this.set(f[0], f[1]);
        }
      }
      function yb() {
        this.size = 0, this.__data__ = {
          hash: new Hr(),
          map: new (io || Wn)(),
          string: new Hr()
        };
      }
      function xb(r) {
        var i = Es(this, r).delete(r);
        return this.size -= i ? 1 : 0, i;
      }
      function bb(r) {
        return Es(this, r).get(r);
      }
      function wb(r) {
        return Es(this, r).has(r);
      }
      function Sb(r, i) {
        var a = Es(this, r), f = a.size;
        return a.set(r, i), this.size += a.size == f ? 0 : 1, this;
      }
      $n.prototype.clear = yb, $n.prototype.delete = xb, $n.prototype.get = bb, $n.prototype.has = wb, $n.prototype.set = Sb;
      function zr(r) {
        var i = -1, a = r == null ? 0 : r.length;
        for (this.__data__ = new $n(); ++i < a; )
          this.add(r[i]);
      }
      function Cb(r) {
        return this.__data__.set(r, d), this;
      }
      function Tb(r) {
        return this.__data__.has(r);
      }
      zr.prototype.add = zr.prototype.push = Cb, zr.prototype.has = Tb;
      function yn(r) {
        var i = this.__data__ = new Wn(r);
        this.size = i.size;
      }
      function _b() {
        this.__data__ = new Wn(), this.size = 0;
      }
      function Pb(r) {
        var i = this.__data__, a = i.delete(r);
        return this.size = i.size, a;
      }
      function Ab(r) {
        return this.__data__.get(r);
      }
      function Eb(r) {
        return this.__data__.has(r);
      }
      function Rb(r, i) {
        var a = this.__data__;
        if (a instanceof Wn) {
          var f = a.__data__;
          if (!io || f.length < s - 1)
            return f.push([r, i]), this.size = ++a.size, this;
          a = this.__data__ = new $n(f);
        }
        return a.set(r, i), this.size = a.size, this;
      }
      yn.prototype.clear = _b, yn.prototype.delete = Pb, yn.prototype.get = Ab, yn.prototype.has = Eb, yn.prototype.set = Rb;
      function cf(r, i) {
        var a = me(r), f = !a && Xr(r), y = !a && !f && vr(r), C = !a && !f && !y && Ei(r), A = a || f || y || C, M = A ? dl(r.length, Fx) : [], I = M.length;
        for (var V in r)
          (i || ze.call(r, V)) && !(A && // Safari 9 has enumerable `arguments.length` in strict mode.
          (V == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          y && (V == "offset" || V == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          C && (V == "buffer" || V == "byteLength" || V == "byteOffset") || // Skip index properties.
          Gn(V, I))) && M.push(V);
        return M;
      }
      function uf(r) {
        var i = r.length;
        return i ? r[El(0, i - 1)] : n;
      }
      function Nb(r, i) {
        return Rs(Wt(r), Gr(i, 0, r.length));
      }
      function Mb(r) {
        return Rs(Wt(r));
      }
      function yl(r, i, a) {
        (a !== n && !xn(r[i], a) || a === n && !(i in r)) && Un(r, i, a);
      }
      function lo(r, i, a) {
        var f = r[i];
        (!(ze.call(r, i) && xn(f, a)) || a === n && !(i in r)) && Un(r, i, a);
      }
      function gs(r, i) {
        for (var a = r.length; a--; )
          if (xn(r[a][0], i))
            return a;
        return -1;
      }
      function Ob(r, i, a, f) {
        return hr(r, function(y, C, A) {
          i(f, y, a(y), A);
        }), f;
      }
      function df(r, i) {
        return r && On(i, vt(i), r);
      }
      function Db(r, i) {
        return r && On(i, Ut(i), r);
      }
      function Un(r, i, a) {
        i == "__proto__" && us ? us(r, i, {
          configurable: !0,
          enumerable: !0,
          value: a,
          writable: !0
        }) : r[i] = a;
      }
      function xl(r, i) {
        for (var a = -1, f = i.length, y = L(f), C = r == null; ++a < f; )
          y[a] = C ? n : Ql(r, i[a]);
        return y;
      }
      function Gr(r, i, a) {
        return r === r && (a !== n && (r = r <= a ? r : a), i !== n && (r = r >= i ? r : i)), r;
      }
      function un(r, i, a, f, y, C) {
        var A, M = i & v, I = i & x, V = i & g;
        if (a && (A = y ? a(r, f, y, C) : a(r)), A !== n)
          return A;
        if (!nt(r))
          return r;
        var F = me(r);
        if (F) {
          if (A = ww(r), !M)
            return Wt(r, A);
        } else {
          var B = Et(r), K = B == Pe || B == at;
          if (vr(r))
            return If(r, M);
          if (B == lt || B == Be || K && !y) {
            if (A = I || K ? {} : eh(r), !M)
              return I ? uw(r, Db(A, r)) : cw(r, df(A, r));
          } else {
            if (!qe[B])
              return y ? r : {};
            A = Sw(r, B, M);
          }
        }
        C || (C = new yn());
        var ee = C.get(r);
        if (ee)
          return ee;
        C.set(r, A), Rh(r) ? r.forEach(function(ce) {
          A.add(un(ce, i, a, ce, r, C));
        }) : Ah(r) && r.forEach(function(ce, Ne) {
          A.set(Ne, un(ce, i, a, Ne, r, C));
        });
        var le = V ? I ? Fl : Vl : I ? Ut : vt, we = F ? n : le(r);
        return an(we || r, function(ce, Ne) {
          we && (Ne = ce, ce = r[Ne]), lo(A, Ne, un(ce, i, a, Ne, r, C));
        }), A;
      }
      function jb(r) {
        var i = vt(r);
        return function(a) {
          return ff(a, r, i);
        };
      }
      function ff(r, i, a) {
        var f = a.length;
        if (r == null)
          return !f;
        for (r = Ke(r); f--; ) {
          var y = a[f], C = i[y], A = r[y];
          if (A === n && !(y in r) || !C(A))
            return !1;
        }
        return !0;
      }
      function hf(r, i, a) {
        if (typeof r != "function")
          throw new ln(l);
        return go(function() {
          r.apply(n, a);
        }, i);
      }
      function co(r, i, a, f) {
        var y = -1, C = Qo, A = !0, M = r.length, I = [], V = i.length;
        if (!M)
          return I;
        a && (i = Qe(i, Yt(a))), f ? (C = ol, A = !1) : i.length >= s && (C = no, A = !1, i = new zr(i));
        e:
          for (; ++y < M; ) {
            var F = r[y], B = a == null ? F : a(F);
            if (F = f || F !== 0 ? F : 0, A && B === B) {
              for (var K = V; K--; )
                if (i[K] === B)
                  continue e;
              I.push(F);
            } else
              C(i, B, f) || I.push(F);
          }
        return I;
      }
      var hr = Bf(Mn), pf = Bf(wl, !0);
      function Ib(r, i) {
        var a = !0;
        return hr(r, function(f, y, C) {
          return a = !!i(f, y, C), a;
        }), a;
      }
      function vs(r, i, a) {
        for (var f = -1, y = r.length; ++f < y; ) {
          var C = r[f], A = i(C);
          if (A != null && (M === n ? A === A && !Xt(A) : a(A, M)))
            var M = A, I = C;
        }
        return I;
      }
      function Lb(r, i, a, f) {
        var y = r.length;
        for (a = ye(a), a < 0 && (a = -a > y ? 0 : y + a), f = f === n || f > y ? y : ye(f), f < 0 && (f += y), f = a > f ? 0 : Mh(f); a < f; )
          r[a++] = i;
        return r;
      }
      function mf(r, i) {
        var a = [];
        return hr(r, function(f, y, C) {
          i(f, y, C) && a.push(f);
        }), a;
      }
      function wt(r, i, a, f, y) {
        var C = -1, A = r.length;
        for (a || (a = Tw), y || (y = []); ++C < A; ) {
          var M = r[C];
          i > 0 && a(M) ? i > 1 ? wt(M, i - 1, a, f, y) : ur(y, M) : f || (y[y.length] = M);
        }
        return y;
      }
      var bl = Wf(), gf = Wf(!0);
      function Mn(r, i) {
        return r && bl(r, i, vt);
      }
      function wl(r, i) {
        return r && gf(r, i, vt);
      }
      function ys(r, i) {
        return cr(i, function(a) {
          return Kn(r[a]);
        });
      }
      function Kr(r, i) {
        i = mr(i, r);
        for (var a = 0, f = i.length; r != null && a < f; )
          r = r[Dn(i[a++])];
        return a && a == f ? r : n;
      }
      function vf(r, i, a) {
        var f = i(r);
        return me(r) ? f : ur(f, a(r));
      }
      function jt(r) {
        return r == null ? r === n ? _n : Mt : Ur && Ur in Ke(r) ? yw(r) : Mw(r);
      }
      function Sl(r, i) {
        return r > i;
      }
      function kb(r, i) {
        return r != null && ze.call(r, i);
      }
      function Vb(r, i) {
        return r != null && i in Ke(r);
      }
      function Fb(r, i, a) {
        return r >= At(i, a) && r < mt(i, a);
      }
      function Cl(r, i, a) {
        for (var f = a ? ol : Qo, y = r[0].length, C = r.length, A = C, M = L(C), I = 1 / 0, V = []; A--; ) {
          var F = r[A];
          A && i && (F = Qe(F, Yt(i))), I = At(F.length, I), M[A] = !a && (i || y >= 120 && F.length >= 120) ? new zr(A && F) : n;
        }
        F = r[0];
        var B = -1, K = M[0];
        e:
          for (; ++B < y && V.length < I; ) {
            var ee = F[B], le = i ? i(ee) : ee;
            if (ee = a || ee !== 0 ? ee : 0, !(K ? no(K, le) : f(V, le, a))) {
              for (A = C; --A; ) {
                var we = M[A];
                if (!(we ? no(we, le) : f(r[A], le, a)))
                  continue e;
              }
              K && K.push(le), V.push(ee);
            }
          }
        return V;
      }
      function Bb(r, i, a, f) {
        return Mn(r, function(y, C, A) {
          i(f, a(y), C, A);
        }), f;
      }
      function uo(r, i, a) {
        i = mr(i, r), r = ih(r, i);
        var f = r == null ? r : r[Dn(fn(i))];
        return f == null ? n : Kt(f, r, a);
      }
      function yf(r) {
        return ot(r) && jt(r) == Be;
      }
      function Wb(r) {
        return ot(r) && jt(r) == Tt;
      }
      function $b(r) {
        return ot(r) && jt(r) == ke;
      }
      function fo(r, i, a, f, y) {
        return r === i ? !0 : r == null || i == null || !ot(r) && !ot(i) ? r !== r && i !== i : Ub(r, i, a, f, fo, y);
      }
      function Ub(r, i, a, f, y, C) {
        var A = me(r), M = me(i), I = A ? Je : Et(r), V = M ? Je : Et(i);
        I = I == Be ? lt : I, V = V == Be ? lt : V;
        var F = I == lt, B = V == lt, K = I == V;
        if (K && vr(r)) {
          if (!vr(i))
            return !1;
          A = !0, F = !1;
        }
        if (K && !F)
          return C || (C = new yn()), A || Ei(r) ? Zf(r, i, a, f, y, C) : gw(r, i, I, a, f, y, C);
        if (!(a & T)) {
          var ee = F && ze.call(r, "__wrapped__"), le = B && ze.call(i, "__wrapped__");
          if (ee || le) {
            var we = ee ? r.value() : r, ce = le ? i.value() : i;
            return C || (C = new yn()), y(we, ce, a, f, C);
          }
        }
        return K ? (C || (C = new yn()), vw(r, i, a, f, y, C)) : !1;
      }
      function Hb(r) {
        return ot(r) && Et(r) == Ye;
      }
      function Tl(r, i, a, f) {
        var y = a.length, C = y, A = !f;
        if (r == null)
          return !C;
        for (r = Ke(r); y--; ) {
          var M = a[y];
          if (A && M[2] ? M[1] !== r[M[0]] : !(M[0] in r))
            return !1;
        }
        for (; ++y < C; ) {
          M = a[y];
          var I = M[0], V = r[I], F = M[1];
          if (A && M[2]) {
            if (V === n && !(I in r))
              return !1;
          } else {
            var B = new yn();
            if (f)
              var K = f(V, F, I, r, i, B);
            if (!(K === n ? fo(F, V, T | S, f, B) : K))
              return !1;
          }
        }
        return !0;
      }
      function xf(r) {
        if (!nt(r) || Pw(r))
          return !1;
        var i = Kn(r) ? Hx : Ae;
        return i.test(qr(r));
      }
      function zb(r) {
        return ot(r) && jt(r) == Ot;
      }
      function Gb(r) {
        return ot(r) && Et(r) == Dt;
      }
      function Kb(r) {
        return ot(r) && Is(r.length) && !!Xe[jt(r)];
      }
      function bf(r) {
        return typeof r == "function" ? r : r == null ? Ht : typeof r == "object" ? me(r) ? Cf(r[0], r[1]) : Sf(r) : $h(r);
      }
      function _l(r) {
        if (!mo(r))
          return Xx(r);
        var i = [];
        for (var a in Ke(r))
          ze.call(r, a) && a != "constructor" && i.push(a);
        return i;
      }
      function Yb(r) {
        if (!nt(r))
          return Nw(r);
        var i = mo(r), a = [];
        for (var f in r)
          f == "constructor" && (i || !ze.call(r, f)) || a.push(f);
        return a;
      }
      function Pl(r, i) {
        return r < i;
      }
      function wf(r, i) {
        var a = -1, f = $t(r) ? L(r.length) : [];
        return hr(r, function(y, C, A) {
          f[++a] = i(y, C, A);
        }), f;
      }
      function Sf(r) {
        var i = Wl(r);
        return i.length == 1 && i[0][2] ? nh(i[0][0], i[0][1]) : function(a) {
          return a === r || Tl(a, r, i);
        };
      }
      function Cf(r, i) {
        return Ul(r) && th(i) ? nh(Dn(r), i) : function(a) {
          var f = Ql(a, r);
          return f === n && f === i ? ec(a, r) : fo(i, f, T | S);
        };
      }
      function xs(r, i, a, f, y) {
        r !== i && bl(i, function(C, A) {
          if (y || (y = new yn()), nt(C))
            qb(r, i, A, a, xs, f, y);
          else {
            var M = f ? f(zl(r, A), C, A + "", r, i, y) : n;
            M === n && (M = C), yl(r, A, M);
          }
        }, Ut);
      }
      function qb(r, i, a, f, y, C, A) {
        var M = zl(r, a), I = zl(i, a), V = A.get(I);
        if (V) {
          yl(r, a, V);
          return;
        }
        var F = C ? C(M, I, a + "", r, i, A) : n, B = F === n;
        if (B) {
          var K = me(I), ee = !K && vr(I), le = !K && !ee && Ei(I);
          F = I, K || ee || le ? me(M) ? F = M : ct(M) ? F = Wt(M) : ee ? (B = !1, F = If(I, !0)) : le ? (B = !1, F = Lf(I, !0)) : F = [] : vo(I) || Xr(I) ? (F = M, Xr(M) ? F = Oh(M) : (!nt(M) || Kn(M)) && (F = eh(I))) : B = !1;
        }
        B && (A.set(I, F), y(F, I, f, C, A), A.delete(I)), yl(r, a, F);
      }
      function Tf(r, i) {
        var a = r.length;
        if (a)
          return i += i < 0 ? a : 0, Gn(i, a) ? r[i] : n;
      }
      function _f(r, i, a) {
        i.length ? i = Qe(i, function(C) {
          return me(C) ? function(A) {
            return Kr(A, C.length === 1 ? C[0] : C);
          } : C;
        }) : i = [Ht];
        var f = -1;
        i = Qe(i, Yt(ae()));
        var y = wf(r, function(C, A, M) {
          var I = Qe(i, function(V) {
            return V(C);
          });
          return { criteria: I, index: ++f, value: C };
        });
        return Sx(y, function(C, A) {
          return lw(C, A, a);
        });
      }
      function Xb(r, i) {
        return Pf(r, i, function(a, f) {
          return ec(r, f);
        });
      }
      function Pf(r, i, a) {
        for (var f = -1, y = i.length, C = {}; ++f < y; ) {
          var A = i[f], M = Kr(r, A);
          a(M, A) && ho(C, mr(A, r), M);
        }
        return C;
      }
      function Zb(r) {
        return function(i) {
          return Kr(i, r);
        };
      }
      function Al(r, i, a, f) {
        var y = f ? wx : vi, C = -1, A = i.length, M = r;
        for (r === i && (i = Wt(i)), a && (M = Qe(r, Yt(a))); ++C < A; )
          for (var I = 0, V = i[C], F = a ? a(V) : V; (I = y(M, F, I, f)) > -1; )
            M !== r && cs.call(M, I, 1), cs.call(r, I, 1);
        return r;
      }
      function Af(r, i) {
        for (var a = r ? i.length : 0, f = a - 1; a--; ) {
          var y = i[a];
          if (a == f || y !== C) {
            var C = y;
            Gn(y) ? cs.call(r, y, 1) : Ml(r, y);
          }
        }
        return r;
      }
      function El(r, i) {
        return r + fs(af() * (i - r + 1));
      }
      function Jb(r, i, a, f) {
        for (var y = -1, C = mt(ds((i - r) / (a || 1)), 0), A = L(C); C--; )
          A[f ? C : ++y] = r, r += a;
        return A;
      }
      function Rl(r, i) {
        var a = "";
        if (!r || i < 1 || i > q)
          return a;
        do
          i % 2 && (a += r), i = fs(i / 2), i && (r += r);
        while (i);
        return a;
      }
      function Ce(r, i) {
        return Gl(rh(r, i, Ht), r + "");
      }
      function Qb(r) {
        return uf(Ri(r));
      }
      function ew(r, i) {
        var a = Ri(r);
        return Rs(a, Gr(i, 0, a.length));
      }
      function ho(r, i, a, f) {
        if (!nt(r))
          return r;
        i = mr(i, r);
        for (var y = -1, C = i.length, A = C - 1, M = r; M != null && ++y < C; ) {
          var I = Dn(i[y]), V = a;
          if (I === "__proto__" || I === "constructor" || I === "prototype")
            return r;
          if (y != A) {
            var F = M[I];
            V = f ? f(F, I, M) : n, V === n && (V = nt(F) ? F : Gn(i[y + 1]) ? [] : {});
          }
          lo(M, I, V), M = M[I];
        }
        return r;
      }
      var Ef = hs ? function(r, i) {
        return hs.set(r, i), r;
      } : Ht, tw = us ? function(r, i) {
        return us(r, "toString", {
          configurable: !0,
          enumerable: !1,
          value: nc(i),
          writable: !0
        });
      } : Ht;
      function nw(r) {
        return Rs(Ri(r));
      }
      function dn(r, i, a) {
        var f = -1, y = r.length;
        i < 0 && (i = -i > y ? 0 : y + i), a = a > y ? y : a, a < 0 && (a += y), y = i > a ? 0 : a - i >>> 0, i >>>= 0;
        for (var C = L(y); ++f < y; )
          C[f] = r[f + i];
        return C;
      }
      function rw(r, i) {
        var a;
        return hr(r, function(f, y, C) {
          return a = i(f, y, C), !a;
        }), !!a;
      }
      function bs(r, i, a) {
        var f = 0, y = r == null ? f : r.length;
        if (typeof i == "number" && i === i && y <= ge) {
          for (; f < y; ) {
            var C = f + y >>> 1, A = r[C];
            A !== null && !Xt(A) && (a ? A <= i : A < i) ? f = C + 1 : y = C;
          }
          return y;
        }
        return Nl(r, i, Ht, a);
      }
      function Nl(r, i, a, f) {
        var y = 0, C = r == null ? 0 : r.length;
        if (C === 0)
          return 0;
        i = a(i);
        for (var A = i !== i, M = i === null, I = Xt(i), V = i === n; y < C; ) {
          var F = fs((y + C) / 2), B = a(r[F]), K = B !== n, ee = B === null, le = B === B, we = Xt(B);
          if (A)
            var ce = f || le;
          else
            V ? ce = le && (f || K) : M ? ce = le && K && (f || !ee) : I ? ce = le && K && !ee && (f || !we) : ee || we ? ce = !1 : ce = f ? B <= i : B < i;
          ce ? y = F + 1 : C = F;
        }
        return At(C, _e);
      }
      function Rf(r, i) {
        for (var a = -1, f = r.length, y = 0, C = []; ++a < f; ) {
          var A = r[a], M = i ? i(A) : A;
          if (!a || !xn(M, I)) {
            var I = M;
            C[y++] = A === 0 ? 0 : A;
          }
        }
        return C;
      }
      function Nf(r) {
        return typeof r == "number" ? r : Xt(r) ? pe : +r;
      }
      function qt(r) {
        if (typeof r == "string")
          return r;
        if (me(r))
          return Qe(r, qt) + "";
        if (Xt(r))
          return lf ? lf.call(r) : "";
        var i = r + "";
        return i == "0" && 1 / r == -Z ? "-0" : i;
      }
      function pr(r, i, a) {
        var f = -1, y = Qo, C = r.length, A = !0, M = [], I = M;
        if (a)
          A = !1, y = ol;
        else if (C >= s) {
          var V = i ? null : pw(r);
          if (V)
            return ts(V);
          A = !1, y = no, I = new zr();
        } else
          I = i ? [] : M;
        e:
          for (; ++f < C; ) {
            var F = r[f], B = i ? i(F) : F;
            if (F = a || F !== 0 ? F : 0, A && B === B) {
              for (var K = I.length; K--; )
                if (I[K] === B)
                  continue e;
              i && I.push(B), M.push(F);
            } else
              y(I, B, a) || (I !== M && I.push(B), M.push(F));
          }
        return M;
      }
      function Ml(r, i) {
        return i = mr(i, r), r = ih(r, i), r == null || delete r[Dn(fn(i))];
      }
      function Mf(r, i, a, f) {
        return ho(r, i, a(Kr(r, i)), f);
      }
      function ws(r, i, a, f) {
        for (var y = r.length, C = f ? y : -1; (f ? C-- : ++C < y) && i(r[C], C, r); )
          ;
        return a ? dn(r, f ? 0 : C, f ? C + 1 : y) : dn(r, f ? C + 1 : 0, f ? y : C);
      }
      function Of(r, i) {
        var a = r;
        return a instanceof Oe && (a = a.value()), sl(i, function(f, y) {
          return y.func.apply(y.thisArg, ur([f], y.args));
        }, a);
      }
      function Ol(r, i, a) {
        var f = r.length;
        if (f < 2)
          return f ? pr(r[0]) : [];
        for (var y = -1, C = L(f); ++y < f; )
          for (var A = r[y], M = -1; ++M < f; )
            M != y && (C[y] = co(C[y] || A, r[M], i, a));
        return pr(wt(C, 1), i, a);
      }
      function Df(r, i, a) {
        for (var f = -1, y = r.length, C = i.length, A = {}; ++f < y; ) {
          var M = f < C ? i[f] : n;
          a(A, r[f], M);
        }
        return A;
      }
      function Dl(r) {
        return ct(r) ? r : [];
      }
      function jl(r) {
        return typeof r == "function" ? r : Ht;
      }
      function mr(r, i) {
        return me(r) ? r : Ul(r, i) ? [r] : lh($e(r));
      }
      var iw = Ce;
      function gr(r, i, a) {
        var f = r.length;
        return a = a === n ? f : a, !i && a >= f ? r : dn(r, i, a);
      }
      var jf = zx || function(r) {
        return bt.clearTimeout(r);
      };
      function If(r, i) {
        if (i)
          return r.slice();
        var a = r.length, f = tf ? tf(a) : new r.constructor(a);
        return r.copy(f), f;
      }
      function Il(r) {
        var i = new r.constructor(r.byteLength);
        return new as(i).set(new as(r)), i;
      }
      function ow(r, i) {
        var a = i ? Il(r.buffer) : r.buffer;
        return new r.constructor(a, r.byteOffset, r.byteLength);
      }
      function sw(r) {
        var i = new r.constructor(r.source, Ie.exec(r));
        return i.lastIndex = r.lastIndex, i;
      }
      function aw(r) {
        return ao ? Ke(ao.call(r)) : {};
      }
      function Lf(r, i) {
        var a = i ? Il(r.buffer) : r.buffer;
        return new r.constructor(a, r.byteOffset, r.length);
      }
      function kf(r, i) {
        if (r !== i) {
          var a = r !== n, f = r === null, y = r === r, C = Xt(r), A = i !== n, M = i === null, I = i === i, V = Xt(i);
          if (!M && !V && !C && r > i || C && A && I && !M && !V || f && A && I || !a && I || !y)
            return 1;
          if (!f && !C && !V && r < i || V && a && y && !f && !C || M && a && y || !A && y || !I)
            return -1;
        }
        return 0;
      }
      function lw(r, i, a) {
        for (var f = -1, y = r.criteria, C = i.criteria, A = y.length, M = a.length; ++f < A; ) {
          var I = kf(y[f], C[f]);
          if (I) {
            if (f >= M)
              return I;
            var V = a[f];
            return I * (V == "desc" ? -1 : 1);
          }
        }
        return r.index - i.index;
      }
      function Vf(r, i, a, f) {
        for (var y = -1, C = r.length, A = a.length, M = -1, I = i.length, V = mt(C - A, 0), F = L(I + V), B = !f; ++M < I; )
          F[M] = i[M];
        for (; ++y < A; )
          (B || y < C) && (F[a[y]] = r[y]);
        for (; V--; )
          F[M++] = r[y++];
        return F;
      }
      function Ff(r, i, a, f) {
        for (var y = -1, C = r.length, A = -1, M = a.length, I = -1, V = i.length, F = mt(C - M, 0), B = L(F + V), K = !f; ++y < F; )
          B[y] = r[y];
        for (var ee = y; ++I < V; )
          B[ee + I] = i[I];
        for (; ++A < M; )
          (K || y < C) && (B[ee + a[A]] = r[y++]);
        return B;
      }
      function Wt(r, i) {
        var a = -1, f = r.length;
        for (i || (i = L(f)); ++a < f; )
          i[a] = r[a];
        return i;
      }
      function On(r, i, a, f) {
        var y = !a;
        a || (a = {});
        for (var C = -1, A = i.length; ++C < A; ) {
          var M = i[C], I = f ? f(a[M], r[M], M, a, r) : n;
          I === n && (I = r[M]), y ? Un(a, M, I) : lo(a, M, I);
        }
        return a;
      }
      function cw(r, i) {
        return On(r, $l(r), i);
      }
      function uw(r, i) {
        return On(r, Jf(r), i);
      }
      function Ss(r, i) {
        return function(a, f) {
          var y = me(a) ? mx : Ob, C = i ? i() : {};
          return y(a, r, ae(f, 2), C);
        };
      }
      function _i(r) {
        return Ce(function(i, a) {
          var f = -1, y = a.length, C = y > 1 ? a[y - 1] : n, A = y > 2 ? a[2] : n;
          for (C = r.length > 3 && typeof C == "function" ? (y--, C) : n, A && It(a[0], a[1], A) && (C = y < 3 ? n : C, y = 1), i = Ke(i); ++f < y; ) {
            var M = a[f];
            M && r(i, M, f, C);
          }
          return i;
        });
      }
      function Bf(r, i) {
        return function(a, f) {
          if (a == null)
            return a;
          if (!$t(a))
            return r(a, f);
          for (var y = a.length, C = i ? y : -1, A = Ke(a); (i ? C-- : ++C < y) && f(A[C], C, A) !== !1; )
            ;
          return a;
        };
      }
      function Wf(r) {
        return function(i, a, f) {
          for (var y = -1, C = Ke(i), A = f(i), M = A.length; M--; ) {
            var I = A[r ? M : ++y];
            if (a(C[I], I, C) === !1)
              break;
          }
          return i;
        };
      }
      function dw(r, i, a) {
        var f = i & _, y = po(r);
        function C() {
          var A = this && this !== bt && this instanceof C ? y : r;
          return A.apply(f ? a : this, arguments);
        }
        return C;
      }
      function $f(r) {
        return function(i) {
          i = $e(i);
          var a = yi(i) ? vn(i) : n, f = a ? a[0] : i.charAt(0), y = a ? gr(a, 1).join("") : i.slice(1);
          return f[r]() + y;
        };
      }
      function Pi(r) {
        return function(i) {
          return sl(Bh(Fh(i).replace(tx, "")), r, "");
        };
      }
      function po(r) {
        return function() {
          var i = arguments;
          switch (i.length) {
            case 0:
              return new r();
            case 1:
              return new r(i[0]);
            case 2:
              return new r(i[0], i[1]);
            case 3:
              return new r(i[0], i[1], i[2]);
            case 4:
              return new r(i[0], i[1], i[2], i[3]);
            case 5:
              return new r(i[0], i[1], i[2], i[3], i[4]);
            case 6:
              return new r(i[0], i[1], i[2], i[3], i[4], i[5]);
            case 7:
              return new r(i[0], i[1], i[2], i[3], i[4], i[5], i[6]);
          }
          var a = Ti(r.prototype), f = r.apply(a, i);
          return nt(f) ? f : a;
        };
      }
      function fw(r, i, a) {
        var f = po(r);
        function y() {
          for (var C = arguments.length, A = L(C), M = C, I = Ai(y); M--; )
            A[M] = arguments[M];
          var V = C < 3 && A[0] !== I && A[C - 1] !== I ? [] : dr(A, I);
          if (C -= V.length, C < a)
            return Kf(
              r,
              i,
              Cs,
              y.placeholder,
              n,
              A,
              V,
              n,
              n,
              a - C
            );
          var F = this && this !== bt && this instanceof y ? f : r;
          return Kt(F, this, A);
        }
        return y;
      }
      function Uf(r) {
        return function(i, a, f) {
          var y = Ke(i);
          if (!$t(i)) {
            var C = ae(a, 3);
            i = vt(i), a = function(M) {
              return C(y[M], M, y);
            };
          }
          var A = r(i, a, f);
          return A > -1 ? y[C ? i[A] : A] : n;
        };
      }
      function Hf(r) {
        return zn(function(i) {
          var a = i.length, f = a, y = cn.prototype.thru;
          for (r && i.reverse(); f--; ) {
            var C = i[f];
            if (typeof C != "function")
              throw new ln(l);
            if (y && !A && As(C) == "wrapper")
              var A = new cn([], !0);
          }
          for (f = A ? f : a; ++f < a; ) {
            C = i[f];
            var M = As(C), I = M == "wrapper" ? Bl(C) : n;
            I && Hl(I[0]) && I[1] == ($ | O | j | H) && !I[4].length && I[9] == 1 ? A = A[As(I[0])].apply(A, I[3]) : A = C.length == 1 && Hl(C) ? A[M]() : A.thru(C);
          }
          return function() {
            var V = arguments, F = V[0];
            if (A && V.length == 1 && me(F))
              return A.plant(F).value();
            for (var B = 0, K = a ? i[B].apply(this, V) : F; ++B < a; )
              K = i[B].call(this, K);
            return K;
          };
        });
      }
      function Cs(r, i, a, f, y, C, A, M, I, V) {
        var F = i & $, B = i & _, K = i & P, ee = i & (O | N), le = i & te, we = K ? n : po(r);
        function ce() {
          for (var Ne = arguments.length, je = L(Ne), Zt = Ne; Zt--; )
            je[Zt] = arguments[Zt];
          if (ee)
            var Lt = Ai(ce), Jt = Tx(je, Lt);
          if (f && (je = Vf(je, f, y, ee)), C && (je = Ff(je, C, A, ee)), Ne -= Jt, ee && Ne < V) {
            var ut = dr(je, Lt);
            return Kf(
              r,
              i,
              Cs,
              ce.placeholder,
              a,
              je,
              ut,
              M,
              I,
              V - Ne
            );
          }
          var bn = B ? a : this, qn = K ? bn[r] : r;
          return Ne = je.length, M ? je = Ow(je, M) : le && Ne > 1 && je.reverse(), F && I < Ne && (je.length = I), this && this !== bt && this instanceof ce && (qn = we || po(qn)), qn.apply(bn, je);
        }
        return ce;
      }
      function zf(r, i) {
        return function(a, f) {
          return Bb(a, r, i(f), {});
        };
      }
      function Ts(r, i) {
        return function(a, f) {
          var y;
          if (a === n && f === n)
            return i;
          if (a !== n && (y = a), f !== n) {
            if (y === n)
              return f;
            typeof a == "string" || typeof f == "string" ? (a = qt(a), f = qt(f)) : (a = Nf(a), f = Nf(f)), y = r(a, f);
          }
          return y;
        };
      }
      function Ll(r) {
        return zn(function(i) {
          return i = Qe(i, Yt(ae())), Ce(function(a) {
            var f = this;
            return r(i, function(y) {
              return Kt(y, f, a);
            });
          });
        });
      }
      function _s(r, i) {
        i = i === n ? " " : qt(i);
        var a = i.length;
        if (a < 2)
          return a ? Rl(i, r) : i;
        var f = Rl(i, ds(r / xi(i)));
        return yi(i) ? gr(vn(f), 0, r).join("") : f.slice(0, r);
      }
      function hw(r, i, a, f) {
        var y = i & _, C = po(r);
        function A() {
          for (var M = -1, I = arguments.length, V = -1, F = f.length, B = L(F + I), K = this && this !== bt && this instanceof A ? C : r; ++V < F; )
            B[V] = f[V];
          for (; I--; )
            B[V++] = arguments[++M];
          return Kt(K, y ? a : this, B);
        }
        return A;
      }
      function Gf(r) {
        return function(i, a, f) {
          return f && typeof f != "number" && It(i, a, f) && (a = f = n), i = Yn(i), a === n ? (a = i, i = 0) : a = Yn(a), f = f === n ? i < a ? 1 : -1 : Yn(f), Jb(i, a, f, r);
        };
      }
      function Ps(r) {
        return function(i, a) {
          return typeof i == "string" && typeof a == "string" || (i = hn(i), a = hn(a)), r(i, a);
        };
      }
      function Kf(r, i, a, f, y, C, A, M, I, V) {
        var F = i & O, B = F ? A : n, K = F ? n : A, ee = F ? C : n, le = F ? n : C;
        i |= F ? j : W, i &= ~(F ? W : j), i & E || (i &= ~(_ | P));
        var we = [
          r,
          i,
          y,
          ee,
          B,
          le,
          K,
          M,
          I,
          V
        ], ce = a.apply(n, we);
        return Hl(r) && oh(ce, we), ce.placeholder = f, sh(ce, r, i);
      }
      function kl(r) {
        var i = pt[r];
        return function(a, f) {
          if (a = hn(a), f = f == null ? 0 : At(ye(f), 292), f && sf(a)) {
            var y = ($e(a) + "e").split("e"), C = i(y[0] + "e" + (+y[1] + f));
            return y = ($e(C) + "e").split("e"), +(y[0] + "e" + (+y[1] - f));
          }
          return i(a);
        };
      }
      var pw = Si && 1 / ts(new Si([, -0]))[1] == Z ? function(r) {
        return new Si(r);
      } : oc;
      function Yf(r) {
        return function(i) {
          var a = Et(i);
          return a == Ye ? hl(i) : a == Dt ? Mx(i) : Cx(i, r(i));
        };
      }
      function Hn(r, i, a, f, y, C, A, M) {
        var I = i & P;
        if (!I && typeof r != "function")
          throw new ln(l);
        var V = f ? f.length : 0;
        if (V || (i &= ~(j | W), f = y = n), A = A === n ? A : mt(ye(A), 0), M = M === n ? M : ye(M), V -= y ? y.length : 0, i & W) {
          var F = f, B = y;
          f = y = n;
        }
        var K = I ? n : Bl(r), ee = [
          r,
          i,
          a,
          f,
          y,
          F,
          B,
          C,
          A,
          M
        ];
        if (K && Rw(ee, K), r = ee[0], i = ee[1], a = ee[2], f = ee[3], y = ee[4], M = ee[9] = ee[9] === n ? I ? 0 : r.length : mt(ee[9] - V, 0), !M && i & (O | N) && (i &= ~(O | N)), !i || i == _)
          var le = dw(r, i, a);
        else
          i == O || i == N ? le = fw(r, i, M) : (i == j || i == (_ | j)) && !y.length ? le = hw(r, i, a, f) : le = Cs.apply(n, ee);
        var we = K ? Ef : oh;
        return sh(we(le, ee), r, i);
      }
      function qf(r, i, a, f) {
        return r === n || xn(r, wi[a]) && !ze.call(f, a) ? i : r;
      }
      function Xf(r, i, a, f, y, C) {
        return nt(r) && nt(i) && (C.set(i, r), xs(r, i, n, Xf, C), C.delete(i)), r;
      }
      function mw(r) {
        return vo(r) ? n : r;
      }
      function Zf(r, i, a, f, y, C) {
        var A = a & T, M = r.length, I = i.length;
        if (M != I && !(A && I > M))
          return !1;
        var V = C.get(r), F = C.get(i);
        if (V && F)
          return V == i && F == r;
        var B = -1, K = !0, ee = a & S ? new zr() : n;
        for (C.set(r, i), C.set(i, r); ++B < M; ) {
          var le = r[B], we = i[B];
          if (f)
            var ce = A ? f(we, le, B, i, r, C) : f(le, we, B, r, i, C);
          if (ce !== n) {
            if (ce)
              continue;
            K = !1;
            break;
          }
          if (ee) {
            if (!al(i, function(Ne, je) {
              if (!no(ee, je) && (le === Ne || y(le, Ne, a, f, C)))
                return ee.push(je);
            })) {
              K = !1;
              break;
            }
          } else if (!(le === we || y(le, we, a, f, C))) {
            K = !1;
            break;
          }
        }
        return C.delete(r), C.delete(i), K;
      }
      function gw(r, i, a, f, y, C, A) {
        switch (a) {
          case An:
            if (r.byteLength != i.byteLength || r.byteOffset != i.byteOffset)
              return !1;
            r = r.buffer, i = i.buffer;
          case Tt:
            return !(r.byteLength != i.byteLength || !C(new as(r), new as(i)));
          case be:
          case ke:
          case ft:
            return xn(+r, +i);
          case ve:
            return r.name == i.name && r.message == i.message;
          case Ot:
          case gn:
            return r == i + "";
          case Ye:
            var M = hl;
          case Dt:
            var I = f & T;
            if (M || (M = ts), r.size != i.size && !I)
              return !1;
            var V = A.get(r);
            if (V)
              return V == i;
            f |= S, A.set(r, i);
            var F = Zf(M(r), M(i), f, y, C, A);
            return A.delete(r), F;
          case ht:
            if (ao)
              return ao.call(r) == ao.call(i);
        }
        return !1;
      }
      function vw(r, i, a, f, y, C) {
        var A = a & T, M = Vl(r), I = M.length, V = Vl(i), F = V.length;
        if (I != F && !A)
          return !1;
        for (var B = I; B--; ) {
          var K = M[B];
          if (!(A ? K in i : ze.call(i, K)))
            return !1;
        }
        var ee = C.get(r), le = C.get(i);
        if (ee && le)
          return ee == i && le == r;
        var we = !0;
        C.set(r, i), C.set(i, r);
        for (var ce = A; ++B < I; ) {
          K = M[B];
          var Ne = r[K], je = i[K];
          if (f)
            var Zt = A ? f(je, Ne, K, i, r, C) : f(Ne, je, K, r, i, C);
          if (!(Zt === n ? Ne === je || y(Ne, je, a, f, C) : Zt)) {
            we = !1;
            break;
          }
          ce || (ce = K == "constructor");
        }
        if (we && !ce) {
          var Lt = r.constructor, Jt = i.constructor;
          Lt != Jt && "constructor" in r && "constructor" in i && !(typeof Lt == "function" && Lt instanceof Lt && typeof Jt == "function" && Jt instanceof Jt) && (we = !1);
        }
        return C.delete(r), C.delete(i), we;
      }
      function zn(r) {
        return Gl(rh(r, n, fh), r + "");
      }
      function Vl(r) {
        return vf(r, vt, $l);
      }
      function Fl(r) {
        return vf(r, Ut, Jf);
      }
      var Bl = hs ? function(r) {
        return hs.get(r);
      } : oc;
      function As(r) {
        for (var i = r.name + "", a = Ci[i], f = ze.call(Ci, i) ? a.length : 0; f--; ) {
          var y = a[f], C = y.func;
          if (C == null || C == r)
            return y.name;
        }
        return i;
      }
      function Ai(r) {
        var i = ze.call(b, "placeholder") ? b : r;
        return i.placeholder;
      }
      function ae() {
        var r = b.iteratee || rc;
        return r = r === rc ? bf : r, arguments.length ? r(arguments[0], arguments[1]) : r;
      }
      function Es(r, i) {
        var a = r.__data__;
        return _w(i) ? a[typeof i == "string" ? "string" : "hash"] : a.map;
      }
      function Wl(r) {
        for (var i = vt(r), a = i.length; a--; ) {
          var f = i[a], y = r[f];
          i[a] = [f, y, th(y)];
        }
        return i;
      }
      function Yr(r, i) {
        var a = Ex(r, i);
        return xf(a) ? a : n;
      }
      function yw(r) {
        var i = ze.call(r, Ur), a = r[Ur];
        try {
          r[Ur] = n;
          var f = !0;
        } catch {
        }
        var y = os.call(r);
        return f && (i ? r[Ur] = a : delete r[Ur]), y;
      }
      var $l = ml ? function(r) {
        return r == null ? [] : (r = Ke(r), cr(ml(r), function(i) {
          return rf.call(r, i);
        }));
      } : sc, Jf = ml ? function(r) {
        for (var i = []; r; )
          ur(i, $l(r)), r = ls(r);
        return i;
      } : sc, Et = jt;
      (gl && Et(new gl(new ArrayBuffer(1))) != An || io && Et(new io()) != Ye || vl && Et(vl.resolve()) != rn || Si && Et(new Si()) != Dt || oo && Et(new oo()) != Pn) && (Et = function(r) {
        var i = jt(r), a = i == lt ? r.constructor : n, f = a ? qr(a) : "";
        if (f)
          switch (f) {
            case eb:
              return An;
            case tb:
              return Ye;
            case nb:
              return rn;
            case rb:
              return Dt;
            case ib:
              return Pn;
          }
        return i;
      });
      function xw(r, i, a) {
        for (var f = -1, y = a.length; ++f < y; ) {
          var C = a[f], A = C.size;
          switch (C.type) {
            case "drop":
              r += A;
              break;
            case "dropRight":
              i -= A;
              break;
            case "take":
              i = At(i, r + A);
              break;
            case "takeRight":
              r = mt(r, i - A);
              break;
          }
        }
        return { start: r, end: i };
      }
      function bw(r) {
        var i = r.match(qa);
        return i ? i[1].split(Xa) : [];
      }
      function Qf(r, i, a) {
        i = mr(i, r);
        for (var f = -1, y = i.length, C = !1; ++f < y; ) {
          var A = Dn(i[f]);
          if (!(C = r != null && a(r, A)))
            break;
          r = r[A];
        }
        return C || ++f != y ? C : (y = r == null ? 0 : r.length, !!y && Is(y) && Gn(A, y) && (me(r) || Xr(r)));
      }
      function ww(r) {
        var i = r.length, a = new r.constructor(i);
        return i && typeof r[0] == "string" && ze.call(r, "index") && (a.index = r.index, a.input = r.input), a;
      }
      function eh(r) {
        return typeof r.constructor == "function" && !mo(r) ? Ti(ls(r)) : {};
      }
      function Sw(r, i, a) {
        var f = r.constructor;
        switch (i) {
          case Tt:
            return Il(r);
          case be:
          case ke:
            return new f(+r);
          case An:
            return ow(r, a);
          case En:
          case Gt:
          case Rn:
          case Nn:
          case Vr:
          case Fr:
          case or:
          case sr:
          case Br:
            return Lf(r, a);
          case Ye:
            return new f();
          case ft:
          case gn:
            return new f(r);
          case Ot:
            return sw(r);
          case Dt:
            return new f();
          case ht:
            return aw(r);
        }
      }
      function Cw(r, i) {
        var a = i.length;
        if (!a)
          return r;
        var f = a - 1;
        return i[f] = (a > 1 ? "& " : "") + i[f], i = i.join(a > 2 ? ", " : " "), r.replace(Ya, `{
/* [wrapped with ` + i + `] */
`);
      }
      function Tw(r) {
        return me(r) || Xr(r) || !!(of && r && r[of]);
      }
      function Gn(r, i) {
        var a = typeof r;
        return i = i ?? q, !!i && (a == "number" || a != "symbol" && tt.test(r)) && r > -1 && r % 1 == 0 && r < i;
      }
      function It(r, i, a) {
        if (!nt(a))
          return !1;
        var f = typeof i;
        return (f == "number" ? $t(a) && Gn(i, a.length) : f == "string" && i in a) ? xn(a[i], r) : !1;
      }
      function Ul(r, i) {
        if (me(r))
          return !1;
        var a = typeof r;
        return a == "number" || a == "symbol" || a == "boolean" || r == null || Xt(r) ? !0 : qo.test(r) || !Yo.test(r) || i != null && r in Ke(i);
      }
      function _w(r) {
        var i = typeof r;
        return i == "string" || i == "number" || i == "symbol" || i == "boolean" ? r !== "__proto__" : r === null;
      }
      function Hl(r) {
        var i = As(r), a = b[i];
        if (typeof a != "function" || !(i in Oe.prototype))
          return !1;
        if (r === a)
          return !0;
        var f = Bl(a);
        return !!f && r === f[0];
      }
      function Pw(r) {
        return !!ef && ef in r;
      }
      var Aw = rs ? Kn : ac;
      function mo(r) {
        var i = r && r.constructor, a = typeof i == "function" && i.prototype || wi;
        return r === a;
      }
      function th(r) {
        return r === r && !nt(r);
      }
      function nh(r, i) {
        return function(a) {
          return a == null ? !1 : a[r] === i && (i !== n || r in Ke(a));
        };
      }
      function Ew(r) {
        var i = Ds(r, function(f) {
          return a.size === h && a.clear(), f;
        }), a = i.cache;
        return i;
      }
      function Rw(r, i) {
        var a = r[1], f = i[1], y = a | f, C = y < (_ | P | $), A = f == $ && a == O || f == $ && a == H && r[7].length <= i[8] || f == ($ | H) && i[7].length <= i[8] && a == O;
        if (!(C || A))
          return r;
        f & _ && (r[2] = i[2], y |= a & _ ? 0 : E);
        var M = i[3];
        if (M) {
          var I = r[3];
          r[3] = I ? Vf(I, M, i[4]) : M, r[4] = I ? dr(r[3], p) : i[4];
        }
        return M = i[5], M && (I = r[5], r[5] = I ? Ff(I, M, i[6]) : M, r[6] = I ? dr(r[5], p) : i[6]), M = i[7], M && (r[7] = M), f & $ && (r[8] = r[8] == null ? i[8] : At(r[8], i[8])), r[9] == null && (r[9] = i[9]), r[0] = i[0], r[1] = y, r;
      }
      function Nw(r) {
        var i = [];
        if (r != null)
          for (var a in Ke(r))
            i.push(a);
        return i;
      }
      function Mw(r) {
        return os.call(r);
      }
      function rh(r, i, a) {
        return i = mt(i === n ? r.length - 1 : i, 0), function() {
          for (var f = arguments, y = -1, C = mt(f.length - i, 0), A = L(C); ++y < C; )
            A[y] = f[i + y];
          y = -1;
          for (var M = L(i + 1); ++y < i; )
            M[y] = f[y];
          return M[i] = a(A), Kt(r, this, M);
        };
      }
      function ih(r, i) {
        return i.length < 2 ? r : Kr(r, dn(i, 0, -1));
      }
      function Ow(r, i) {
        for (var a = r.length, f = At(i.length, a), y = Wt(r); f--; ) {
          var C = i[f];
          r[f] = Gn(C, a) ? y[C] : n;
        }
        return r;
      }
      function zl(r, i) {
        if (!(i === "constructor" && typeof r[i] == "function") && i != "__proto__")
          return r[i];
      }
      var oh = ah(Ef), go = Kx || function(r, i) {
        return bt.setTimeout(r, i);
      }, Gl = ah(tw);
      function sh(r, i, a) {
        var f = i + "";
        return Gl(r, Cw(f, Dw(bw(f), a)));
      }
      function ah(r) {
        var i = 0, a = 0;
        return function() {
          var f = Zx(), y = se - (f - a);
          if (a = f, y > 0) {
            if (++i >= J)
              return arguments[0];
          } else
            i = 0;
          return r.apply(n, arguments);
        };
      }
      function Rs(r, i) {
        var a = -1, f = r.length, y = f - 1;
        for (i = i === n ? f : i; ++a < i; ) {
          var C = El(a, y), A = r[C];
          r[C] = r[a], r[a] = A;
        }
        return r.length = i, r;
      }
      var lh = Ew(function(r) {
        var i = [];
        return r.charCodeAt(0) === 46 && i.push(""), r.replace(Ga, function(a, f, y, C) {
          i.push(y ? C.replace(Y, "$1") : f || a);
        }), i;
      });
      function Dn(r) {
        if (typeof r == "string" || Xt(r))
          return r;
        var i = r + "";
        return i == "0" && 1 / r == -Z ? "-0" : i;
      }
      function qr(r) {
        if (r != null) {
          try {
            return is.call(r);
          } catch {
          }
          try {
            return r + "";
          } catch {
          }
        }
        return "";
      }
      function Dw(r, i) {
        return an(Re, function(a) {
          var f = "_." + a[0];
          i & a[1] && !Qo(r, f) && r.push(f);
        }), r.sort();
      }
      function ch(r) {
        if (r instanceof Oe)
          return r.clone();
        var i = new cn(r.__wrapped__, r.__chain__);
        return i.__actions__ = Wt(r.__actions__), i.__index__ = r.__index__, i.__values__ = r.__values__, i;
      }
      function jw(r, i, a) {
        (a ? It(r, i, a) : i === n) ? i = 1 : i = mt(ye(i), 0);
        var f = r == null ? 0 : r.length;
        if (!f || i < 1)
          return [];
        for (var y = 0, C = 0, A = L(ds(f / i)); y < f; )
          A[C++] = dn(r, y, y += i);
        return A;
      }
      function Iw(r) {
        for (var i = -1, a = r == null ? 0 : r.length, f = 0, y = []; ++i < a; ) {
          var C = r[i];
          C && (y[f++] = C);
        }
        return y;
      }
      function Lw() {
        var r = arguments.length;
        if (!r)
          return [];
        for (var i = L(r - 1), a = arguments[0], f = r; f--; )
          i[f - 1] = arguments[f];
        return ur(me(a) ? Wt(a) : [a], wt(i, 1));
      }
      var kw = Ce(function(r, i) {
        return ct(r) ? co(r, wt(i, 1, ct, !0)) : [];
      }), Vw = Ce(function(r, i) {
        var a = fn(i);
        return ct(a) && (a = n), ct(r) ? co(r, wt(i, 1, ct, !0), ae(a, 2)) : [];
      }), Fw = Ce(function(r, i) {
        var a = fn(i);
        return ct(a) && (a = n), ct(r) ? co(r, wt(i, 1, ct, !0), n, a) : [];
      });
      function Bw(r, i, a) {
        var f = r == null ? 0 : r.length;
        return f ? (i = a || i === n ? 1 : ye(i), dn(r, i < 0 ? 0 : i, f)) : [];
      }
      function Ww(r, i, a) {
        var f = r == null ? 0 : r.length;
        return f ? (i = a || i === n ? 1 : ye(i), i = f - i, dn(r, 0, i < 0 ? 0 : i)) : [];
      }
      function $w(r, i) {
        return r && r.length ? ws(r, ae(i, 3), !0, !0) : [];
      }
      function Uw(r, i) {
        return r && r.length ? ws(r, ae(i, 3), !0) : [];
      }
      function Hw(r, i, a, f) {
        var y = r == null ? 0 : r.length;
        return y ? (a && typeof a != "number" && It(r, i, a) && (a = 0, f = y), Lb(r, i, a, f)) : [];
      }
      function uh(r, i, a) {
        var f = r == null ? 0 : r.length;
        if (!f)
          return -1;
        var y = a == null ? 0 : ye(a);
        return y < 0 && (y = mt(f + y, 0)), es(r, ae(i, 3), y);
      }
      function dh(r, i, a) {
        var f = r == null ? 0 : r.length;
        if (!f)
          return -1;
        var y = f - 1;
        return a !== n && (y = ye(a), y = a < 0 ? mt(f + y, 0) : At(y, f - 1)), es(r, ae(i, 3), y, !0);
      }
      function fh(r) {
        var i = r == null ? 0 : r.length;
        return i ? wt(r, 1) : [];
      }
      function zw(r) {
        var i = r == null ? 0 : r.length;
        return i ? wt(r, Z) : [];
      }
      function Gw(r, i) {
        var a = r == null ? 0 : r.length;
        return a ? (i = i === n ? 1 : ye(i), wt(r, i)) : [];
      }
      function Kw(r) {
        for (var i = -1, a = r == null ? 0 : r.length, f = {}; ++i < a; ) {
          var y = r[i];
          f[y[0]] = y[1];
        }
        return f;
      }
      function hh(r) {
        return r && r.length ? r[0] : n;
      }
      function Yw(r, i, a) {
        var f = r == null ? 0 : r.length;
        if (!f)
          return -1;
        var y = a == null ? 0 : ye(a);
        return y < 0 && (y = mt(f + y, 0)), vi(r, i, y);
      }
      function qw(r) {
        var i = r == null ? 0 : r.length;
        return i ? dn(r, 0, -1) : [];
      }
      var Xw = Ce(function(r) {
        var i = Qe(r, Dl);
        return i.length && i[0] === r[0] ? Cl(i) : [];
      }), Zw = Ce(function(r) {
        var i = fn(r), a = Qe(r, Dl);
        return i === fn(a) ? i = n : a.pop(), a.length && a[0] === r[0] ? Cl(a, ae(i, 2)) : [];
      }), Jw = Ce(function(r) {
        var i = fn(r), a = Qe(r, Dl);
        return i = typeof i == "function" ? i : n, i && a.pop(), a.length && a[0] === r[0] ? Cl(a, n, i) : [];
      });
      function Qw(r, i) {
        return r == null ? "" : qx.call(r, i);
      }
      function fn(r) {
        var i = r == null ? 0 : r.length;
        return i ? r[i - 1] : n;
      }
      function e1(r, i, a) {
        var f = r == null ? 0 : r.length;
        if (!f)
          return -1;
        var y = f;
        return a !== n && (y = ye(a), y = y < 0 ? mt(f + y, 0) : At(y, f - 1)), i === i ? Dx(r, i, y) : es(r, Gd, y, !0);
      }
      function t1(r, i) {
        return r && r.length ? Tf(r, ye(i)) : n;
      }
      var n1 = Ce(ph);
      function ph(r, i) {
        return r && r.length && i && i.length ? Al(r, i) : r;
      }
      function r1(r, i, a) {
        return r && r.length && i && i.length ? Al(r, i, ae(a, 2)) : r;
      }
      function i1(r, i, a) {
        return r && r.length && i && i.length ? Al(r, i, n, a) : r;
      }
      var o1 = zn(function(r, i) {
        var a = r == null ? 0 : r.length, f = xl(r, i);
        return Af(r, Qe(i, function(y) {
          return Gn(y, a) ? +y : y;
        }).sort(kf)), f;
      });
      function s1(r, i) {
        var a = [];
        if (!(r && r.length))
          return a;
        var f = -1, y = [], C = r.length;
        for (i = ae(i, 3); ++f < C; ) {
          var A = r[f];
          i(A, f, r) && (a.push(A), y.push(f));
        }
        return Af(r, y), a;
      }
      function Kl(r) {
        return r == null ? r : Qx.call(r);
      }
      function a1(r, i, a) {
        var f = r == null ? 0 : r.length;
        return f ? (a && typeof a != "number" && It(r, i, a) ? (i = 0, a = f) : (i = i == null ? 0 : ye(i), a = a === n ? f : ye(a)), dn(r, i, a)) : [];
      }
      function l1(r, i) {
        return bs(r, i);
      }
      function c1(r, i, a) {
        return Nl(r, i, ae(a, 2));
      }
      function u1(r, i) {
        var a = r == null ? 0 : r.length;
        if (a) {
          var f = bs(r, i);
          if (f < a && xn(r[f], i))
            return f;
        }
        return -1;
      }
      function d1(r, i) {
        return bs(r, i, !0);
      }
      function f1(r, i, a) {
        return Nl(r, i, ae(a, 2), !0);
      }
      function h1(r, i) {
        var a = r == null ? 0 : r.length;
        if (a) {
          var f = bs(r, i, !0) - 1;
          if (xn(r[f], i))
            return f;
        }
        return -1;
      }
      function p1(r) {
        return r && r.length ? Rf(r) : [];
      }
      function m1(r, i) {
        return r && r.length ? Rf(r, ae(i, 2)) : [];
      }
      function g1(r) {
        var i = r == null ? 0 : r.length;
        return i ? dn(r, 1, i) : [];
      }
      function v1(r, i, a) {
        return r && r.length ? (i = a || i === n ? 1 : ye(i), dn(r, 0, i < 0 ? 0 : i)) : [];
      }
      function y1(r, i, a) {
        var f = r == null ? 0 : r.length;
        return f ? (i = a || i === n ? 1 : ye(i), i = f - i, dn(r, i < 0 ? 0 : i, f)) : [];
      }
      function x1(r, i) {
        return r && r.length ? ws(r, ae(i, 3), !1, !0) : [];
      }
      function b1(r, i) {
        return r && r.length ? ws(r, ae(i, 3)) : [];
      }
      var w1 = Ce(function(r) {
        return pr(wt(r, 1, ct, !0));
      }), S1 = Ce(function(r) {
        var i = fn(r);
        return ct(i) && (i = n), pr(wt(r, 1, ct, !0), ae(i, 2));
      }), C1 = Ce(function(r) {
        var i = fn(r);
        return i = typeof i == "function" ? i : n, pr(wt(r, 1, ct, !0), n, i);
      });
      function T1(r) {
        return r && r.length ? pr(r) : [];
      }
      function _1(r, i) {
        return r && r.length ? pr(r, ae(i, 2)) : [];
      }
      function P1(r, i) {
        return i = typeof i == "function" ? i : n, r && r.length ? pr(r, n, i) : [];
      }
      function Yl(r) {
        if (!(r && r.length))
          return [];
        var i = 0;
        return r = cr(r, function(a) {
          if (ct(a))
            return i = mt(a.length, i), !0;
        }), dl(i, function(a) {
          return Qe(r, ll(a));
        });
      }
      function mh(r, i) {
        if (!(r && r.length))
          return [];
        var a = Yl(r);
        return i == null ? a : Qe(a, function(f) {
          return Kt(i, n, f);
        });
      }
      var A1 = Ce(function(r, i) {
        return ct(r) ? co(r, i) : [];
      }), E1 = Ce(function(r) {
        return Ol(cr(r, ct));
      }), R1 = Ce(function(r) {
        var i = fn(r);
        return ct(i) && (i = n), Ol(cr(r, ct), ae(i, 2));
      }), N1 = Ce(function(r) {
        var i = fn(r);
        return i = typeof i == "function" ? i : n, Ol(cr(r, ct), n, i);
      }), M1 = Ce(Yl);
      function O1(r, i) {
        return Df(r || [], i || [], lo);
      }
      function D1(r, i) {
        return Df(r || [], i || [], ho);
      }
      var j1 = Ce(function(r) {
        var i = r.length, a = i > 1 ? r[i - 1] : n;
        return a = typeof a == "function" ? (r.pop(), a) : n, mh(r, a);
      });
      function gh(r) {
        var i = b(r);
        return i.__chain__ = !0, i;
      }
      function I1(r, i) {
        return i(r), r;
      }
      function Ns(r, i) {
        return i(r);
      }
      var L1 = zn(function(r) {
        var i = r.length, a = i ? r[0] : 0, f = this.__wrapped__, y = function(C) {
          return xl(C, r);
        };
        return i > 1 || this.__actions__.length || !(f instanceof Oe) || !Gn(a) ? this.thru(y) : (f = f.slice(a, +a + (i ? 1 : 0)), f.__actions__.push({
          func: Ns,
          args: [y],
          thisArg: n
        }), new cn(f, this.__chain__).thru(function(C) {
          return i && !C.length && C.push(n), C;
        }));
      });
      function k1() {
        return gh(this);
      }
      function V1() {
        return new cn(this.value(), this.__chain__);
      }
      function F1() {
        this.__values__ === n && (this.__values__ = Nh(this.value()));
        var r = this.__index__ >= this.__values__.length, i = r ? n : this.__values__[this.__index__++];
        return { done: r, value: i };
      }
      function B1() {
        return this;
      }
      function W1(r) {
        for (var i, a = this; a instanceof ms; ) {
          var f = ch(a);
          f.__index__ = 0, f.__values__ = n, i ? y.__wrapped__ = f : i = f;
          var y = f;
          a = a.__wrapped__;
        }
        return y.__wrapped__ = r, i;
      }
      function $1() {
        var r = this.__wrapped__;
        if (r instanceof Oe) {
          var i = r;
          return this.__actions__.length && (i = new Oe(this)), i = i.reverse(), i.__actions__.push({
            func: Ns,
            args: [Kl],
            thisArg: n
          }), new cn(i, this.__chain__);
        }
        return this.thru(Kl);
      }
      function U1() {
        return Of(this.__wrapped__, this.__actions__);
      }
      var H1 = Ss(function(r, i, a) {
        ze.call(r, a) ? ++r[a] : Un(r, a, 1);
      });
      function z1(r, i, a) {
        var f = me(r) ? Hd : Ib;
        return a && It(r, i, a) && (i = n), f(r, ae(i, 3));
      }
      function G1(r, i) {
        var a = me(r) ? cr : mf;
        return a(r, ae(i, 3));
      }
      var K1 = Uf(uh), Y1 = Uf(dh);
      function q1(r, i) {
        return wt(Ms(r, i), 1);
      }
      function X1(r, i) {
        return wt(Ms(r, i), Z);
      }
      function Z1(r, i, a) {
        return a = a === n ? 1 : ye(a), wt(Ms(r, i), a);
      }
      function vh(r, i) {
        var a = me(r) ? an : hr;
        return a(r, ae(i, 3));
      }
      function yh(r, i) {
        var a = me(r) ? gx : pf;
        return a(r, ae(i, 3));
      }
      var J1 = Ss(function(r, i, a) {
        ze.call(r, a) ? r[a].push(i) : Un(r, a, [i]);
      });
      function Q1(r, i, a, f) {
        r = $t(r) ? r : Ri(r), a = a && !f ? ye(a) : 0;
        var y = r.length;
        return a < 0 && (a = mt(y + a, 0)), Ls(r) ? a <= y && r.indexOf(i, a) > -1 : !!y && vi(r, i, a) > -1;
      }
      var eS = Ce(function(r, i, a) {
        var f = -1, y = typeof i == "function", C = $t(r) ? L(r.length) : [];
        return hr(r, function(A) {
          C[++f] = y ? Kt(i, A, a) : uo(A, i, a);
        }), C;
      }), tS = Ss(function(r, i, a) {
        Un(r, a, i);
      });
      function Ms(r, i) {
        var a = me(r) ? Qe : wf;
        return a(r, ae(i, 3));
      }
      function nS(r, i, a, f) {
        return r == null ? [] : (me(i) || (i = i == null ? [] : [i]), a = f ? n : a, me(a) || (a = a == null ? [] : [a]), _f(r, i, a));
      }
      var rS = Ss(function(r, i, a) {
        r[a ? 0 : 1].push(i);
      }, function() {
        return [[], []];
      });
      function iS(r, i, a) {
        var f = me(r) ? sl : Yd, y = arguments.length < 3;
        return f(r, ae(i, 4), a, y, hr);
      }
      function oS(r, i, a) {
        var f = me(r) ? vx : Yd, y = arguments.length < 3;
        return f(r, ae(i, 4), a, y, pf);
      }
      function sS(r, i) {
        var a = me(r) ? cr : mf;
        return a(r, js(ae(i, 3)));
      }
      function aS(r) {
        var i = me(r) ? uf : Qb;
        return i(r);
      }
      function lS(r, i, a) {
        (a ? It(r, i, a) : i === n) ? i = 1 : i = ye(i);
        var f = me(r) ? Nb : ew;
        return f(r, i);
      }
      function cS(r) {
        var i = me(r) ? Mb : nw;
        return i(r);
      }
      function uS(r) {
        if (r == null)
          return 0;
        if ($t(r))
          return Ls(r) ? xi(r) : r.length;
        var i = Et(r);
        return i == Ye || i == Dt ? r.size : _l(r).length;
      }
      function dS(r, i, a) {
        var f = me(r) ? al : rw;
        return a && It(r, i, a) && (i = n), f(r, ae(i, 3));
      }
      var fS = Ce(function(r, i) {
        if (r == null)
          return [];
        var a = i.length;
        return a > 1 && It(r, i[0], i[1]) ? i = [] : a > 2 && It(i[0], i[1], i[2]) && (i = [i[0]]), _f(r, wt(i, 1), []);
      }), Os = Gx || function() {
        return bt.Date.now();
      };
      function hS(r, i) {
        if (typeof i != "function")
          throw new ln(l);
        return r = ye(r), function() {
          if (--r < 1)
            return i.apply(this, arguments);
        };
      }
      function xh(r, i, a) {
        return i = a ? n : i, i = r && i == null ? r.length : i, Hn(r, $, n, n, n, n, i);
      }
      function bh(r, i) {
        var a;
        if (typeof i != "function")
          throw new ln(l);
        return r = ye(r), function() {
          return --r > 0 && (a = i.apply(this, arguments)), r <= 1 && (i = n), a;
        };
      }
      var ql = Ce(function(r, i, a) {
        var f = _;
        if (a.length) {
          var y = dr(a, Ai(ql));
          f |= j;
        }
        return Hn(r, f, i, a, y);
      }), wh = Ce(function(r, i, a) {
        var f = _ | P;
        if (a.length) {
          var y = dr(a, Ai(wh));
          f |= j;
        }
        return Hn(i, f, r, a, y);
      });
      function Sh(r, i, a) {
        i = a ? n : i;
        var f = Hn(r, O, n, n, n, n, n, i);
        return f.placeholder = Sh.placeholder, f;
      }
      function Ch(r, i, a) {
        i = a ? n : i;
        var f = Hn(r, N, n, n, n, n, n, i);
        return f.placeholder = Ch.placeholder, f;
      }
      function Th(r, i, a) {
        var f, y, C, A, M, I, V = 0, F = !1, B = !1, K = !0;
        if (typeof r != "function")
          throw new ln(l);
        i = hn(i) || 0, nt(a) && (F = !!a.leading, B = "maxWait" in a, C = B ? mt(hn(a.maxWait) || 0, i) : C, K = "trailing" in a ? !!a.trailing : K);
        function ee(ut) {
          var bn = f, qn = y;
          return f = y = n, V = ut, A = r.apply(qn, bn), A;
        }
        function le(ut) {
          return V = ut, M = go(Ne, i), F ? ee(ut) : A;
        }
        function we(ut) {
          var bn = ut - I, qn = ut - V, Uh = i - bn;
          return B ? At(Uh, C - qn) : Uh;
        }
        function ce(ut) {
          var bn = ut - I, qn = ut - V;
          return I === n || bn >= i || bn < 0 || B && qn >= C;
        }
        function Ne() {
          var ut = Os();
          if (ce(ut))
            return je(ut);
          M = go(Ne, we(ut));
        }
        function je(ut) {
          return M = n, K && f ? ee(ut) : (f = y = n, A);
        }
        function Zt() {
          M !== n && jf(M), V = 0, f = I = y = M = n;
        }
        function Lt() {
          return M === n ? A : je(Os());
        }
        function Jt() {
          var ut = Os(), bn = ce(ut);
          if (f = arguments, y = this, I = ut, bn) {
            if (M === n)
              return le(I);
            if (B)
              return jf(M), M = go(Ne, i), ee(I);
          }
          return M === n && (M = go(Ne, i)), A;
        }
        return Jt.cancel = Zt, Jt.flush = Lt, Jt;
      }
      var pS = Ce(function(r, i) {
        return hf(r, 1, i);
      }), mS = Ce(function(r, i, a) {
        return hf(r, hn(i) || 0, a);
      });
      function gS(r) {
        return Hn(r, te);
      }
      function Ds(r, i) {
        if (typeof r != "function" || i != null && typeof i != "function")
          throw new ln(l);
        var a = function() {
          var f = arguments, y = i ? i.apply(this, f) : f[0], C = a.cache;
          if (C.has(y))
            return C.get(y);
          var A = r.apply(this, f);
          return a.cache = C.set(y, A) || C, A;
        };
        return a.cache = new (Ds.Cache || $n)(), a;
      }
      Ds.Cache = $n;
      function js(r) {
        if (typeof r != "function")
          throw new ln(l);
        return function() {
          var i = arguments;
          switch (i.length) {
            case 0:
              return !r.call(this);
            case 1:
              return !r.call(this, i[0]);
            case 2:
              return !r.call(this, i[0], i[1]);
            case 3:
              return !r.call(this, i[0], i[1], i[2]);
          }
          return !r.apply(this, i);
        };
      }
      function vS(r) {
        return bh(2, r);
      }
      var yS = iw(function(r, i) {
        i = i.length == 1 && me(i[0]) ? Qe(i[0], Yt(ae())) : Qe(wt(i, 1), Yt(ae()));
        var a = i.length;
        return Ce(function(f) {
          for (var y = -1, C = At(f.length, a); ++y < C; )
            f[y] = i[y].call(this, f[y]);
          return Kt(r, this, f);
        });
      }), Xl = Ce(function(r, i) {
        var a = dr(i, Ai(Xl));
        return Hn(r, j, n, i, a);
      }), _h = Ce(function(r, i) {
        var a = dr(i, Ai(_h));
        return Hn(r, W, n, i, a);
      }), xS = zn(function(r, i) {
        return Hn(r, H, n, n, n, i);
      });
      function bS(r, i) {
        if (typeof r != "function")
          throw new ln(l);
        return i = i === n ? i : ye(i), Ce(r, i);
      }
      function wS(r, i) {
        if (typeof r != "function")
          throw new ln(l);
        return i = i == null ? 0 : mt(ye(i), 0), Ce(function(a) {
          var f = a[i], y = gr(a, 0, i);
          return f && ur(y, f), Kt(r, this, y);
        });
      }
      function SS(r, i, a) {
        var f = !0, y = !0;
        if (typeof r != "function")
          throw new ln(l);
        return nt(a) && (f = "leading" in a ? !!a.leading : f, y = "trailing" in a ? !!a.trailing : y), Th(r, i, {
          leading: f,
          maxWait: i,
          trailing: y
        });
      }
      function CS(r) {
        return xh(r, 1);
      }
      function TS(r, i) {
        return Xl(jl(i), r);
      }
      function _S() {
        if (!arguments.length)
          return [];
        var r = arguments[0];
        return me(r) ? r : [r];
      }
      function PS(r) {
        return un(r, g);
      }
      function AS(r, i) {
        return i = typeof i == "function" ? i : n, un(r, g, i);
      }
      function ES(r) {
        return un(r, v | g);
      }
      function RS(r, i) {
        return i = typeof i == "function" ? i : n, un(r, v | g, i);
      }
      function NS(r, i) {
        return i == null || ff(r, i, vt(i));
      }
      function xn(r, i) {
        return r === i || r !== r && i !== i;
      }
      var MS = Ps(Sl), OS = Ps(function(r, i) {
        return r >= i;
      }), Xr = yf(/* @__PURE__ */ function() {
        return arguments;
      }()) ? yf : function(r) {
        return ot(r) && ze.call(r, "callee") && !rf.call(r, "callee");
      }, me = L.isArray, DS = Vd ? Yt(Vd) : Wb;
      function $t(r) {
        return r != null && Is(r.length) && !Kn(r);
      }
      function ct(r) {
        return ot(r) && $t(r);
      }
      function jS(r) {
        return r === !0 || r === !1 || ot(r) && jt(r) == be;
      }
      var vr = Yx || ac, IS = Fd ? Yt(Fd) : $b;
      function LS(r) {
        return ot(r) && r.nodeType === 1 && !vo(r);
      }
      function kS(r) {
        if (r == null)
          return !0;
        if ($t(r) && (me(r) || typeof r == "string" || typeof r.splice == "function" || vr(r) || Ei(r) || Xr(r)))
          return !r.length;
        var i = Et(r);
        if (i == Ye || i == Dt)
          return !r.size;
        if (mo(r))
          return !_l(r).length;
        for (var a in r)
          if (ze.call(r, a))
            return !1;
        return !0;
      }
      function VS(r, i) {
        return fo(r, i);
      }
      function FS(r, i, a) {
        a = typeof a == "function" ? a : n;
        var f = a ? a(r, i) : n;
        return f === n ? fo(r, i, n, a) : !!f;
      }
      function Zl(r) {
        if (!ot(r))
          return !1;
        var i = jt(r);
        return i == ve || i == Se || typeof r.message == "string" && typeof r.name == "string" && !vo(r);
      }
      function BS(r) {
        return typeof r == "number" && sf(r);
      }
      function Kn(r) {
        if (!nt(r))
          return !1;
        var i = jt(r);
        return i == Pe || i == at || i == X || i == Vt;
      }
      function Ph(r) {
        return typeof r == "number" && r == ye(r);
      }
      function Is(r) {
        return typeof r == "number" && r > -1 && r % 1 == 0 && r <= q;
      }
      function nt(r) {
        var i = typeof r;
        return r != null && (i == "object" || i == "function");
      }
      function ot(r) {
        return r != null && typeof r == "object";
      }
      var Ah = Bd ? Yt(Bd) : Hb;
      function WS(r, i) {
        return r === i || Tl(r, i, Wl(i));
      }
      function $S(r, i, a) {
        return a = typeof a == "function" ? a : n, Tl(r, i, Wl(i), a);
      }
      function US(r) {
        return Eh(r) && r != +r;
      }
      function HS(r) {
        if (Aw(r))
          throw new he(c);
        return xf(r);
      }
      function zS(r) {
        return r === null;
      }
      function GS(r) {
        return r == null;
      }
      function Eh(r) {
        return typeof r == "number" || ot(r) && jt(r) == ft;
      }
      function vo(r) {
        if (!ot(r) || jt(r) != lt)
          return !1;
        var i = ls(r);
        if (i === null)
          return !0;
        var a = ze.call(i, "constructor") && i.constructor;
        return typeof a == "function" && a instanceof a && is.call(a) == $x;
      }
      var Jl = Wd ? Yt(Wd) : zb;
      function KS(r) {
        return Ph(r) && r >= -q && r <= q;
      }
      var Rh = $d ? Yt($d) : Gb;
      function Ls(r) {
        return typeof r == "string" || !me(r) && ot(r) && jt(r) == gn;
      }
      function Xt(r) {
        return typeof r == "symbol" || ot(r) && jt(r) == ht;
      }
      var Ei = Ud ? Yt(Ud) : Kb;
      function YS(r) {
        return r === n;
      }
      function qS(r) {
        return ot(r) && Et(r) == Pn;
      }
      function XS(r) {
        return ot(r) && jt(r) == fi;
      }
      var ZS = Ps(Pl), JS = Ps(function(r, i) {
        return r <= i;
      });
      function Nh(r) {
        if (!r)
          return [];
        if ($t(r))
          return Ls(r) ? vn(r) : Wt(r);
        if (ro && r[ro])
          return Nx(r[ro]());
        var i = Et(r), a = i == Ye ? hl : i == Dt ? ts : Ri;
        return a(r);
      }
      function Yn(r) {
        if (!r)
          return r === 0 ? r : 0;
        if (r = hn(r), r === Z || r === -Z) {
          var i = r < 0 ? -1 : 1;
          return i * G;
        }
        return r === r ? r : 0;
      }
      function ye(r) {
        var i = Yn(r), a = i % 1;
        return i === i ? a ? i - a : i : 0;
      }
      function Mh(r) {
        return r ? Gr(ye(r), 0, Ee) : 0;
      }
      function hn(r) {
        if (typeof r == "number")
          return r;
        if (Xt(r))
          return pe;
        if (nt(r)) {
          var i = typeof r.valueOf == "function" ? r.valueOf() : r;
          r = nt(i) ? i + "" : i;
        }
        if (typeof r != "string")
          return r === 0 ? r : +r;
        r = qd(r);
        var a = Me.test(r);
        return a || yt.test(r) ? hx(r.slice(2), a ? 2 : 8) : He.test(r) ? pe : +r;
      }
      function Oh(r) {
        return On(r, Ut(r));
      }
      function QS(r) {
        return r ? Gr(ye(r), -q, q) : r === 0 ? r : 0;
      }
      function $e(r) {
        return r == null ? "" : qt(r);
      }
      var eC = _i(function(r, i) {
        if (mo(i) || $t(i)) {
          On(i, vt(i), r);
          return;
        }
        for (var a in i)
          ze.call(i, a) && lo(r, a, i[a]);
      }), Dh = _i(function(r, i) {
        On(i, Ut(i), r);
      }), ks = _i(function(r, i, a, f) {
        On(i, Ut(i), r, f);
      }), tC = _i(function(r, i, a, f) {
        On(i, vt(i), r, f);
      }), nC = zn(xl);
      function rC(r, i) {
        var a = Ti(r);
        return i == null ? a : df(a, i);
      }
      var iC = Ce(function(r, i) {
        r = Ke(r);
        var a = -1, f = i.length, y = f > 2 ? i[2] : n;
        for (y && It(i[0], i[1], y) && (f = 1); ++a < f; )
          for (var C = i[a], A = Ut(C), M = -1, I = A.length; ++M < I; ) {
            var V = A[M], F = r[V];
            (F === n || xn(F, wi[V]) && !ze.call(r, V)) && (r[V] = C[V]);
          }
        return r;
      }), oC = Ce(function(r) {
        return r.push(n, Xf), Kt(jh, n, r);
      });
      function sC(r, i) {
        return zd(r, ae(i, 3), Mn);
      }
      function aC(r, i) {
        return zd(r, ae(i, 3), wl);
      }
      function lC(r, i) {
        return r == null ? r : bl(r, ae(i, 3), Ut);
      }
      function cC(r, i) {
        return r == null ? r : gf(r, ae(i, 3), Ut);
      }
      function uC(r, i) {
        return r && Mn(r, ae(i, 3));
      }
      function dC(r, i) {
        return r && wl(r, ae(i, 3));
      }
      function fC(r) {
        return r == null ? [] : ys(r, vt(r));
      }
      function hC(r) {
        return r == null ? [] : ys(r, Ut(r));
      }
      function Ql(r, i, a) {
        var f = r == null ? n : Kr(r, i);
        return f === n ? a : f;
      }
      function pC(r, i) {
        return r != null && Qf(r, i, kb);
      }
      function ec(r, i) {
        return r != null && Qf(r, i, Vb);
      }
      var mC = zf(function(r, i, a) {
        i != null && typeof i.toString != "function" && (i = os.call(i)), r[i] = a;
      }, nc(Ht)), gC = zf(function(r, i, a) {
        i != null && typeof i.toString != "function" && (i = os.call(i)), ze.call(r, i) ? r[i].push(a) : r[i] = [a];
      }, ae), vC = Ce(uo);
      function vt(r) {
        return $t(r) ? cf(r) : _l(r);
      }
      function Ut(r) {
        return $t(r) ? cf(r, !0) : Yb(r);
      }
      function yC(r, i) {
        var a = {};
        return i = ae(i, 3), Mn(r, function(f, y, C) {
          Un(a, i(f, y, C), f);
        }), a;
      }
      function xC(r, i) {
        var a = {};
        return i = ae(i, 3), Mn(r, function(f, y, C) {
          Un(a, y, i(f, y, C));
        }), a;
      }
      var bC = _i(function(r, i, a) {
        xs(r, i, a);
      }), jh = _i(function(r, i, a, f) {
        xs(r, i, a, f);
      }), wC = zn(function(r, i) {
        var a = {};
        if (r == null)
          return a;
        var f = !1;
        i = Qe(i, function(C) {
          return C = mr(C, r), f || (f = C.length > 1), C;
        }), On(r, Fl(r), a), f && (a = un(a, v | x | g, mw));
        for (var y = i.length; y--; )
          Ml(a, i[y]);
        return a;
      });
      function SC(r, i) {
        return Ih(r, js(ae(i)));
      }
      var CC = zn(function(r, i) {
        return r == null ? {} : Xb(r, i);
      });
      function Ih(r, i) {
        if (r == null)
          return {};
        var a = Qe(Fl(r), function(f) {
          return [f];
        });
        return i = ae(i), Pf(r, a, function(f, y) {
          return i(f, y[0]);
        });
      }
      function TC(r, i, a) {
        i = mr(i, r);
        var f = -1, y = i.length;
        for (y || (y = 1, r = n); ++f < y; ) {
          var C = r == null ? n : r[Dn(i[f])];
          C === n && (f = y, C = a), r = Kn(C) ? C.call(r) : C;
        }
        return r;
      }
      function _C(r, i, a) {
        return r == null ? r : ho(r, i, a);
      }
      function PC(r, i, a, f) {
        return f = typeof f == "function" ? f : n, r == null ? r : ho(r, i, a, f);
      }
      var Lh = Yf(vt), kh = Yf(Ut);
      function AC(r, i, a) {
        var f = me(r), y = f || vr(r) || Ei(r);
        if (i = ae(i, 4), a == null) {
          var C = r && r.constructor;
          y ? a = f ? new C() : [] : nt(r) ? a = Kn(C) ? Ti(ls(r)) : {} : a = {};
        }
        return (y ? an : Mn)(r, function(A, M, I) {
          return i(a, A, M, I);
        }), a;
      }
      function EC(r, i) {
        return r == null ? !0 : Ml(r, i);
      }
      function RC(r, i, a) {
        return r == null ? r : Mf(r, i, jl(a));
      }
      function NC(r, i, a, f) {
        return f = typeof f == "function" ? f : n, r == null ? r : Mf(r, i, jl(a), f);
      }
      function Ri(r) {
        return r == null ? [] : fl(r, vt(r));
      }
      function MC(r) {
        return r == null ? [] : fl(r, Ut(r));
      }
      function OC(r, i, a) {
        return a === n && (a = i, i = n), a !== n && (a = hn(a), a = a === a ? a : 0), i !== n && (i = hn(i), i = i === i ? i : 0), Gr(hn(r), i, a);
      }
      function DC(r, i, a) {
        return i = Yn(i), a === n ? (a = i, i = 0) : a = Yn(a), r = hn(r), Fb(r, i, a);
      }
      function jC(r, i, a) {
        if (a && typeof a != "boolean" && It(r, i, a) && (i = a = n), a === n && (typeof i == "boolean" ? (a = i, i = n) : typeof r == "boolean" && (a = r, r = n)), r === n && i === n ? (r = 0, i = 1) : (r = Yn(r), i === n ? (i = r, r = 0) : i = Yn(i)), r > i) {
          var f = r;
          r = i, i = f;
        }
        if (a || r % 1 || i % 1) {
          var y = af();
          return At(r + y * (i - r + fx("1e-" + ((y + "").length - 1))), i);
        }
        return El(r, i);
      }
      var IC = Pi(function(r, i, a) {
        return i = i.toLowerCase(), r + (a ? Vh(i) : i);
      });
      function Vh(r) {
        return tc($e(r).toLowerCase());
      }
      function Fh(r) {
        return r = $e(r), r && r.replace(it, _x).replace(nx, "");
      }
      function LC(r, i, a) {
        r = $e(r), i = qt(i);
        var f = r.length;
        a = a === n ? f : Gr(ye(a), 0, f);
        var y = a;
        return a -= i.length, a >= 0 && r.slice(a, y) == i;
      }
      function kC(r) {
        return r = $e(r), r && _t.test(r) ? r.replace(De, Px) : r;
      }
      function VC(r) {
        return r = $e(r), r && Xo.test(r) ? r.replace(eo, "\\$&") : r;
      }
      var FC = Pi(function(r, i, a) {
        return r + (a ? "-" : "") + i.toLowerCase();
      }), BC = Pi(function(r, i, a) {
        return r + (a ? " " : "") + i.toLowerCase();
      }), WC = $f("toLowerCase");
      function $C(r, i, a) {
        r = $e(r), i = ye(i);
        var f = i ? xi(r) : 0;
        if (!i || f >= i)
          return r;
        var y = (i - f) / 2;
        return _s(fs(y), a) + r + _s(ds(y), a);
      }
      function UC(r, i, a) {
        r = $e(r), i = ye(i);
        var f = i ? xi(r) : 0;
        return i && f < i ? r + _s(i - f, a) : r;
      }
      function HC(r, i, a) {
        r = $e(r), i = ye(i);
        var f = i ? xi(r) : 0;
        return i && f < i ? _s(i - f, a) + r : r;
      }
      function zC(r, i, a) {
        return a || i == null ? i = 0 : i && (i = +i), Jx($e(r).replace(mi, ""), i || 0);
      }
      function GC(r, i, a) {
        return (a ? It(r, i, a) : i === n) ? i = 1 : i = ye(i), Rl($e(r), i);
      }
      function KC() {
        var r = arguments, i = $e(r[0]);
        return r.length < 3 ? i : i.replace(r[1], r[2]);
      }
      var YC = Pi(function(r, i, a) {
        return r + (a ? "_" : "") + i.toLowerCase();
      });
      function qC(r, i, a) {
        return a && typeof a != "number" && It(r, i, a) && (i = a = n), a = a === n ? Ee : a >>> 0, a ? (r = $e(r), r && (typeof i == "string" || i != null && !Jl(i)) && (i = qt(i), !i && yi(r)) ? gr(vn(r), 0, a) : r.split(i, a)) : [];
      }
      var XC = Pi(function(r, i, a) {
        return r + (a ? " " : "") + tc(i);
      });
      function ZC(r, i, a) {
        return r = $e(r), a = a == null ? 0 : Gr(ye(a), 0, r.length), i = qt(i), r.slice(a, a + i.length) == i;
      }
      function JC(r, i, a) {
        var f = b.templateSettings;
        a && It(r, i, a) && (i = n), r = $e(r), i = ks({}, i, f, qf);
        var y = ks({}, i.imports, f.imports, qf), C = vt(y), A = fl(y, C), M, I, V = 0, F = i.interpolate || xt, B = "__p += '", K = pl(
          (i.escape || xt).source + "|" + F.source + "|" + (F === pi ? de : xt).source + "|" + (i.evaluate || xt).source + "|$",
          "g"
        ), ee = "//# sourceURL=" + (ze.call(i, "sourceURL") ? (i.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++ax + "]") + `
`;
        r.replace(K, function(ce, Ne, je, Zt, Lt, Jt) {
          return je || (je = Zt), B += r.slice(V, Jt).replace(lr, Ax), Ne && (M = !0, B += `' +
__e(` + Ne + `) +
'`), Lt && (I = !0, B += `';
` + Lt + `;
__p += '`), je && (B += `' +
((__t = (` + je + `)) == null ? '' : __t) +
'`), V = Jt + ce.length, ce;
        }), B += `';
`;
        var le = ze.call(i, "variable") && i.variable;
        if (!le)
          B = `with (obj) {
` + B + `
}
`;
        else if (U.test(le))
          throw new he(u);
        B = (I ? B.replace(Wr, "") : B).replace(Ft, "$1").replace(hi, "$1;"), B = "function(" + (le || "obj") + `) {
` + (le ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (M ? ", __e = _.escape" : "") + (I ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + B + `return __p
}`;
        var we = Wh(function() {
          return Fe(C, ee + "return " + B).apply(n, A);
        });
        if (we.source = B, Zl(we))
          throw we;
        return we;
      }
      function QC(r) {
        return $e(r).toLowerCase();
      }
      function eT(r) {
        return $e(r).toUpperCase();
      }
      function tT(r, i, a) {
        if (r = $e(r), r && (a || i === n))
          return qd(r);
        if (!r || !(i = qt(i)))
          return r;
        var f = vn(r), y = vn(i), C = Xd(f, y), A = Zd(f, y) + 1;
        return gr(f, C, A).join("");
      }
      function nT(r, i, a) {
        if (r = $e(r), r && (a || i === n))
          return r.slice(0, Qd(r) + 1);
        if (!r || !(i = qt(i)))
          return r;
        var f = vn(r), y = Zd(f, vn(i)) + 1;
        return gr(f, 0, y).join("");
      }
      function rT(r, i, a) {
        if (r = $e(r), r && (a || i === n))
          return r.replace(mi, "");
        if (!r || !(i = qt(i)))
          return r;
        var f = vn(r), y = Xd(f, vn(i));
        return gr(f, y).join("");
      }
      function iT(r, i) {
        var a = re, f = fe;
        if (nt(i)) {
          var y = "separator" in i ? i.separator : y;
          a = "length" in i ? ye(i.length) : a, f = "omission" in i ? qt(i.omission) : f;
        }
        r = $e(r);
        var C = r.length;
        if (yi(r)) {
          var A = vn(r);
          C = A.length;
        }
        if (a >= C)
          return r;
        var M = a - xi(f);
        if (M < 1)
          return f;
        var I = A ? gr(A, 0, M).join("") : r.slice(0, M);
        if (y === n)
          return I + f;
        if (A && (M += I.length - M), Jl(y)) {
          if (r.slice(M).search(y)) {
            var V, F = I;
            for (y.global || (y = pl(y.source, $e(Ie.exec(y)) + "g")), y.lastIndex = 0; V = y.exec(F); )
              var B = V.index;
            I = I.slice(0, B === n ? M : B);
          }
        } else if (r.indexOf(qt(y), M) != M) {
          var K = I.lastIndexOf(y);
          K > -1 && (I = I.slice(0, K));
        }
        return I + f;
      }
      function oT(r) {
        return r = $e(r), r && We.test(r) ? r.replace(oe, jx) : r;
      }
      var sT = Pi(function(r, i, a) {
        return r + (a ? " " : "") + i.toUpperCase();
      }), tc = $f("toUpperCase");
      function Bh(r, i, a) {
        return r = $e(r), i = a ? n : i, i === n ? Rx(r) ? kx(r) : bx(r) : r.match(i) || [];
      }
      var Wh = Ce(function(r, i) {
        try {
          return Kt(r, n, i);
        } catch (a) {
          return Zl(a) ? a : new he(a);
        }
      }), aT = zn(function(r, i) {
        return an(i, function(a) {
          a = Dn(a), Un(r, a, ql(r[a], r));
        }), r;
      });
      function lT(r) {
        var i = r == null ? 0 : r.length, a = ae();
        return r = i ? Qe(r, function(f) {
          if (typeof f[1] != "function")
            throw new ln(l);
          return [a(f[0]), f[1]];
        }) : [], Ce(function(f) {
          for (var y = -1; ++y < i; ) {
            var C = r[y];
            if (Kt(C[0], this, f))
              return Kt(C[1], this, f);
          }
        });
      }
      function cT(r) {
        return jb(un(r, v));
      }
      function nc(r) {
        return function() {
          return r;
        };
      }
      function uT(r, i) {
        return r == null || r !== r ? i : r;
      }
      var dT = Hf(), fT = Hf(!0);
      function Ht(r) {
        return r;
      }
      function rc(r) {
        return bf(typeof r == "function" ? r : un(r, v));
      }
      function hT(r) {
        return Sf(un(r, v));
      }
      function pT(r, i) {
        return Cf(r, un(i, v));
      }
      var mT = Ce(function(r, i) {
        return function(a) {
          return uo(a, r, i);
        };
      }), gT = Ce(function(r, i) {
        return function(a) {
          return uo(r, a, i);
        };
      });
      function ic(r, i, a) {
        var f = vt(i), y = ys(i, f);
        a == null && !(nt(i) && (y.length || !f.length)) && (a = i, i = r, r = this, y = ys(i, vt(i)));
        var C = !(nt(a) && "chain" in a) || !!a.chain, A = Kn(r);
        return an(y, function(M) {
          var I = i[M];
          r[M] = I, A && (r.prototype[M] = function() {
            var V = this.__chain__;
            if (C || V) {
              var F = r(this.__wrapped__), B = F.__actions__ = Wt(this.__actions__);
              return B.push({ func: I, args: arguments, thisArg: r }), F.__chain__ = V, F;
            }
            return I.apply(r, ur([this.value()], arguments));
          });
        }), r;
      }
      function vT() {
        return bt._ === this && (bt._ = Ux), this;
      }
      function oc() {
      }
      function yT(r) {
        return r = ye(r), Ce(function(i) {
          return Tf(i, r);
        });
      }
      var xT = Ll(Qe), bT = Ll(Hd), wT = Ll(al);
      function $h(r) {
        return Ul(r) ? ll(Dn(r)) : Zb(r);
      }
      function ST(r) {
        return function(i) {
          return r == null ? n : Kr(r, i);
        };
      }
      var CT = Gf(), TT = Gf(!0);
      function sc() {
        return [];
      }
      function ac() {
        return !1;
      }
      function _T() {
        return {};
      }
      function PT() {
        return "";
      }
      function AT() {
        return !0;
      }
      function ET(r, i) {
        if (r = ye(r), r < 1 || r > q)
          return [];
        var a = Ee, f = At(r, Ee);
        i = ae(i), r -= Ee;
        for (var y = dl(f, i); ++a < r; )
          i(a);
        return y;
      }
      function RT(r) {
        return me(r) ? Qe(r, Dn) : Xt(r) ? [r] : Wt(lh($e(r)));
      }
      function NT(r) {
        var i = ++Wx;
        return $e(r) + i;
      }
      var MT = Ts(function(r, i) {
        return r + i;
      }, 0), OT = kl("ceil"), DT = Ts(function(r, i) {
        return r / i;
      }, 1), jT = kl("floor");
      function IT(r) {
        return r && r.length ? vs(r, Ht, Sl) : n;
      }
      function LT(r, i) {
        return r && r.length ? vs(r, ae(i, 2), Sl) : n;
      }
      function kT(r) {
        return Kd(r, Ht);
      }
      function VT(r, i) {
        return Kd(r, ae(i, 2));
      }
      function FT(r) {
        return r && r.length ? vs(r, Ht, Pl) : n;
      }
      function BT(r, i) {
        return r && r.length ? vs(r, ae(i, 2), Pl) : n;
      }
      var WT = Ts(function(r, i) {
        return r * i;
      }, 1), $T = kl("round"), UT = Ts(function(r, i) {
        return r - i;
      }, 0);
      function HT(r) {
        return r && r.length ? ul(r, Ht) : 0;
      }
      function zT(r, i) {
        return r && r.length ? ul(r, ae(i, 2)) : 0;
      }
      return b.after = hS, b.ary = xh, b.assign = eC, b.assignIn = Dh, b.assignInWith = ks, b.assignWith = tC, b.at = nC, b.before = bh, b.bind = ql, b.bindAll = aT, b.bindKey = wh, b.castArray = _S, b.chain = gh, b.chunk = jw, b.compact = Iw, b.concat = Lw, b.cond = lT, b.conforms = cT, b.constant = nc, b.countBy = H1, b.create = rC, b.curry = Sh, b.curryRight = Ch, b.debounce = Th, b.defaults = iC, b.defaultsDeep = oC, b.defer = pS, b.delay = mS, b.difference = kw, b.differenceBy = Vw, b.differenceWith = Fw, b.drop = Bw, b.dropRight = Ww, b.dropRightWhile = $w, b.dropWhile = Uw, b.fill = Hw, b.filter = G1, b.flatMap = q1, b.flatMapDeep = X1, b.flatMapDepth = Z1, b.flatten = fh, b.flattenDeep = zw, b.flattenDepth = Gw, b.flip = gS, b.flow = dT, b.flowRight = fT, b.fromPairs = Kw, b.functions = fC, b.functionsIn = hC, b.groupBy = J1, b.initial = qw, b.intersection = Xw, b.intersectionBy = Zw, b.intersectionWith = Jw, b.invert = mC, b.invertBy = gC, b.invokeMap = eS, b.iteratee = rc, b.keyBy = tS, b.keys = vt, b.keysIn = Ut, b.map = Ms, b.mapKeys = yC, b.mapValues = xC, b.matches = hT, b.matchesProperty = pT, b.memoize = Ds, b.merge = bC, b.mergeWith = jh, b.method = mT, b.methodOf = gT, b.mixin = ic, b.negate = js, b.nthArg = yT, b.omit = wC, b.omitBy = SC, b.once = vS, b.orderBy = nS, b.over = xT, b.overArgs = yS, b.overEvery = bT, b.overSome = wT, b.partial = Xl, b.partialRight = _h, b.partition = rS, b.pick = CC, b.pickBy = Ih, b.property = $h, b.propertyOf = ST, b.pull = n1, b.pullAll = ph, b.pullAllBy = r1, b.pullAllWith = i1, b.pullAt = o1, b.range = CT, b.rangeRight = TT, b.rearg = xS, b.reject = sS, b.remove = s1, b.rest = bS, b.reverse = Kl, b.sampleSize = lS, b.set = _C, b.setWith = PC, b.shuffle = cS, b.slice = a1, b.sortBy = fS, b.sortedUniq = p1, b.sortedUniqBy = m1, b.split = qC, b.spread = wS, b.tail = g1, b.take = v1, b.takeRight = y1, b.takeRightWhile = x1, b.takeWhile = b1, b.tap = I1, b.throttle = SS, b.thru = Ns, b.toArray = Nh, b.toPairs = Lh, b.toPairsIn = kh, b.toPath = RT, b.toPlainObject = Oh, b.transform = AC, b.unary = CS, b.union = w1, b.unionBy = S1, b.unionWith = C1, b.uniq = T1, b.uniqBy = _1, b.uniqWith = P1, b.unset = EC, b.unzip = Yl, b.unzipWith = mh, b.update = RC, b.updateWith = NC, b.values = Ri, b.valuesIn = MC, b.without = A1, b.words = Bh, b.wrap = TS, b.xor = E1, b.xorBy = R1, b.xorWith = N1, b.zip = M1, b.zipObject = O1, b.zipObjectDeep = D1, b.zipWith = j1, b.entries = Lh, b.entriesIn = kh, b.extend = Dh, b.extendWith = ks, ic(b, b), b.add = MT, b.attempt = Wh, b.camelCase = IC, b.capitalize = Vh, b.ceil = OT, b.clamp = OC, b.clone = PS, b.cloneDeep = ES, b.cloneDeepWith = RS, b.cloneWith = AS, b.conformsTo = NS, b.deburr = Fh, b.defaultTo = uT, b.divide = DT, b.endsWith = LC, b.eq = xn, b.escape = kC, b.escapeRegExp = VC, b.every = z1, b.find = K1, b.findIndex = uh, b.findKey = sC, b.findLast = Y1, b.findLastIndex = dh, b.findLastKey = aC, b.floor = jT, b.forEach = vh, b.forEachRight = yh, b.forIn = lC, b.forInRight = cC, b.forOwn = uC, b.forOwnRight = dC, b.get = Ql, b.gt = MS, b.gte = OS, b.has = pC, b.hasIn = ec, b.head = hh, b.identity = Ht, b.includes = Q1, b.indexOf = Yw, b.inRange = DC, b.invoke = vC, b.isArguments = Xr, b.isArray = me, b.isArrayBuffer = DS, b.isArrayLike = $t, b.isArrayLikeObject = ct, b.isBoolean = jS, b.isBuffer = vr, b.isDate = IS, b.isElement = LS, b.isEmpty = kS, b.isEqual = VS, b.isEqualWith = FS, b.isError = Zl, b.isFinite = BS, b.isFunction = Kn, b.isInteger = Ph, b.isLength = Is, b.isMap = Ah, b.isMatch = WS, b.isMatchWith = $S, b.isNaN = US, b.isNative = HS, b.isNil = GS, b.isNull = zS, b.isNumber = Eh, b.isObject = nt, b.isObjectLike = ot, b.isPlainObject = vo, b.isRegExp = Jl, b.isSafeInteger = KS, b.isSet = Rh, b.isString = Ls, b.isSymbol = Xt, b.isTypedArray = Ei, b.isUndefined = YS, b.isWeakMap = qS, b.isWeakSet = XS, b.join = Qw, b.kebabCase = FC, b.last = fn, b.lastIndexOf = e1, b.lowerCase = BC, b.lowerFirst = WC, b.lt = ZS, b.lte = JS, b.max = IT, b.maxBy = LT, b.mean = kT, b.meanBy = VT, b.min = FT, b.minBy = BT, b.stubArray = sc, b.stubFalse = ac, b.stubObject = _T, b.stubString = PT, b.stubTrue = AT, b.multiply = WT, b.nth = t1, b.noConflict = vT, b.noop = oc, b.now = Os, b.pad = $C, b.padEnd = UC, b.padStart = HC, b.parseInt = zC, b.random = jC, b.reduce = iS, b.reduceRight = oS, b.repeat = GC, b.replace = KC, b.result = TC, b.round = $T, b.runInContext = D, b.sample = aS, b.size = uS, b.snakeCase = YC, b.some = dS, b.sortedIndex = l1, b.sortedIndexBy = c1, b.sortedIndexOf = u1, b.sortedLastIndex = d1, b.sortedLastIndexBy = f1, b.sortedLastIndexOf = h1, b.startCase = XC, b.startsWith = ZC, b.subtract = UT, b.sum = HT, b.sumBy = zT, b.template = JC, b.times = ET, b.toFinite = Yn, b.toInteger = ye, b.toLength = Mh, b.toLower = QC, b.toNumber = hn, b.toSafeInteger = QS, b.toString = $e, b.toUpper = eT, b.trim = tT, b.trimEnd = nT, b.trimStart = rT, b.truncate = iT, b.unescape = oT, b.uniqueId = NT, b.upperCase = sT, b.upperFirst = tc, b.each = vh, b.eachRight = yh, b.first = hh, ic(b, function() {
        var r = {};
        return Mn(b, function(i, a) {
          ze.call(b.prototype, a) || (r[a] = i);
        }), r;
      }(), { chain: !1 }), b.VERSION = o, an(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(r) {
        b[r].placeholder = b;
      }), an(["drop", "take"], function(r, i) {
        Oe.prototype[r] = function(a) {
          a = a === n ? 1 : mt(ye(a), 0);
          var f = this.__filtered__ && !i ? new Oe(this) : this.clone();
          return f.__filtered__ ? f.__takeCount__ = At(a, f.__takeCount__) : f.__views__.push({
            size: At(a, Ee),
            type: r + (f.__dir__ < 0 ? "Right" : "")
          }), f;
        }, Oe.prototype[r + "Right"] = function(a) {
          return this.reverse()[r](a).reverse();
        };
      }), an(["filter", "map", "takeWhile"], function(r, i) {
        var a = i + 1, f = a == ne || a == ie;
        Oe.prototype[r] = function(y) {
          var C = this.clone();
          return C.__iteratees__.push({
            iteratee: ae(y, 3),
            type: a
          }), C.__filtered__ = C.__filtered__ || f, C;
        };
      }), an(["head", "last"], function(r, i) {
        var a = "take" + (i ? "Right" : "");
        Oe.prototype[r] = function() {
          return this[a](1).value()[0];
        };
      }), an(["initial", "tail"], function(r, i) {
        var a = "drop" + (i ? "" : "Right");
        Oe.prototype[r] = function() {
          return this.__filtered__ ? new Oe(this) : this[a](1);
        };
      }), Oe.prototype.compact = function() {
        return this.filter(Ht);
      }, Oe.prototype.find = function(r) {
        return this.filter(r).head();
      }, Oe.prototype.findLast = function(r) {
        return this.reverse().find(r);
      }, Oe.prototype.invokeMap = Ce(function(r, i) {
        return typeof r == "function" ? new Oe(this) : this.map(function(a) {
          return uo(a, r, i);
        });
      }), Oe.prototype.reject = function(r) {
        return this.filter(js(ae(r)));
      }, Oe.prototype.slice = function(r, i) {
        r = ye(r);
        var a = this;
        return a.__filtered__ && (r > 0 || i < 0) ? new Oe(a) : (r < 0 ? a = a.takeRight(-r) : r && (a = a.drop(r)), i !== n && (i = ye(i), a = i < 0 ? a.dropRight(-i) : a.take(i - r)), a);
      }, Oe.prototype.takeRightWhile = function(r) {
        return this.reverse().takeWhile(r).reverse();
      }, Oe.prototype.toArray = function() {
        return this.take(Ee);
      }, Mn(Oe.prototype, function(r, i) {
        var a = /^(?:filter|find|map|reject)|While$/.test(i), f = /^(?:head|last)$/.test(i), y = b[f ? "take" + (i == "last" ? "Right" : "") : i], C = f || /^find/.test(i);
        y && (b.prototype[i] = function() {
          var A = this.__wrapped__, M = f ? [1] : arguments, I = A instanceof Oe, V = M[0], F = I || me(A), B = function(Ne) {
            var je = y.apply(b, ur([Ne], M));
            return f && K ? je[0] : je;
          };
          F && a && typeof V == "function" && V.length != 1 && (I = F = !1);
          var K = this.__chain__, ee = !!this.__actions__.length, le = C && !K, we = I && !ee;
          if (!C && F) {
            A = we ? A : new Oe(this);
            var ce = r.apply(A, M);
            return ce.__actions__.push({ func: Ns, args: [B], thisArg: n }), new cn(ce, K);
          }
          return le && we ? r.apply(this, M) : (ce = this.thru(B), le ? f ? ce.value()[0] : ce.value() : ce);
        });
      }), an(["pop", "push", "shift", "sort", "splice", "unshift"], function(r) {
        var i = ns[r], a = /^(?:push|sort|unshift)$/.test(r) ? "tap" : "thru", f = /^(?:pop|shift)$/.test(r);
        b.prototype[r] = function() {
          var y = arguments;
          if (f && !this.__chain__) {
            var C = this.value();
            return i.apply(me(C) ? C : [], y);
          }
          return this[a](function(A) {
            return i.apply(me(A) ? A : [], y);
          });
        };
      }), Mn(Oe.prototype, function(r, i) {
        var a = b[i];
        if (a) {
          var f = a.name + "";
          ze.call(Ci, f) || (Ci[f] = []), Ci[f].push({ name: i, func: a });
        }
      }), Ci[Cs(n, P).name] = [{
        name: "wrapper",
        func: n
      }], Oe.prototype.clone = ob, Oe.prototype.reverse = sb, Oe.prototype.value = ab, b.prototype.at = L1, b.prototype.chain = k1, b.prototype.commit = V1, b.prototype.next = F1, b.prototype.plant = W1, b.prototype.reverse = $1, b.prototype.toJSON = b.prototype.valueOf = b.prototype.value = U1, b.prototype.first = b.prototype.head, ro && (b.prototype[ro] = B1), b;
    }, bi = Vx();
    $r ? (($r.exports = bi)._ = bi, rl._ = bi) : bt._ = bi;
  }).call(yo);
})(ra, ra.exports);
var JT = ra.exports;
const QT = /* @__PURE__ */ qT(JT);
function e_(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function Um(...e) {
  return (t) => e.forEach((n) => e_(n, t));
}
function et(...e) {
  return w.useCallback(Um(...e), e);
}
var ri = w.forwardRef((e, t) => {
  const { children: n, ...o } = e, s = w.Children.toArray(n), c = s.find(t_);
  if (c) {
    const l = c.props.children, u = s.map((d) => d === c ? w.Children.count(l) > 1 ? w.Children.only(null) : w.isValidElement(l) ? l.props.children : null : d);
    return /* @__PURE__ */ m.jsx(Dc, { ...o, ref: t, children: w.isValidElement(l) ? w.cloneElement(l, void 0, u) : null });
  }
  return /* @__PURE__ */ m.jsx(Dc, { ...o, ref: t, children: n });
});
ri.displayName = "Slot";
var Dc = w.forwardRef((e, t) => {
  const { children: n, ...o } = e;
  if (w.isValidElement(n)) {
    const s = r_(n);
    return w.cloneElement(n, {
      ...n_(o, n.props),
      // @ts-ignore
      ref: t ? Um(t, s) : s
    });
  }
  return w.Children.count(n) > 1 ? w.Children.only(null) : null;
});
Dc.displayName = "SlotClone";
var Hm = ({ children: e }) => /* @__PURE__ */ m.jsx(m.Fragment, { children: e });
function t_(e) {
  return w.isValidElement(e) && e.type === Hm;
}
function n_(e, t) {
  const n = { ...t };
  for (const o in t) {
    const s = e[o], c = t[o];
    /^on[A-Z]/.test(o) ? s && c ? n[o] = (...u) => {
      c(...u), s(...u);
    } : s && (n[o] = s) : o === "style" ? n[o] = { ...s, ...c } : o === "className" && (n[o] = [s, c].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function r_(e) {
  var o, s;
  let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (s = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : s.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function zm(e) {
  var t, n, o = "";
  if (typeof e == "string" || typeof e == "number")
    o += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = zm(e[t])) && (o && (o += " "), o += n);
    else
      for (t in e)
        e[t] && (o && (o += " "), o += t);
  return o;
}
function i_() {
  for (var e, t, n = 0, o = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = zm(e)) && (o && (o += " "), o += t);
  return o;
}
const Gh = (e) => typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e, Kh = i_, fu = (e, t) => (n) => {
  var o;
  if ((t == null ? void 0 : t.variants) == null)
    return Kh(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: s, defaultVariants: c } = t, l = Object.keys(s).map((h) => {
    const p = n == null ? void 0 : n[h], v = c == null ? void 0 : c[h];
    if (p === null)
      return null;
    const x = Gh(p) || Gh(v);
    return s[h][x];
  }), u = n && Object.entries(n).reduce((h, p) => {
    let [v, x] = p;
    return x === void 0 || (h[v] = x), h;
  }, {}), d = t == null || (o = t.compoundVariants) === null || o === void 0 ? void 0 : o.reduce((h, p) => {
    let { class: v, className: x, ...g } = p;
    return Object.entries(g).every((T) => {
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
      v,
      x
    ] : h;
  }, []);
  return Kh(e, l, d, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
};
function Gm(e) {
  var t, n, o = "";
  if (typeof e == "string" || typeof e == "number")
    o += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var s = e.length;
      for (t = 0; t < s; t++)
        e[t] && (n = Gm(e[t])) && (o && (o += " "), o += n);
    } else
      for (n in e)
        e[n] && (o && (o += " "), o += n);
  return o;
}
function o_() {
  for (var e, t, n = 0, o = "", s = arguments.length; n < s; n++)
    (e = arguments[n]) && (t = Gm(e)) && (o && (o += " "), o += t);
  return o;
}
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const s_ = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Km = (...e) => e.filter((t, n, o) => !!t && t.trim() !== "" && o.indexOf(t) === n).join(" ").trim();
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var a_ = {
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
const l_ = wa(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: c,
    iconNode: l,
    ...u
  }, d) => na(
    "svg",
    {
      ref: d,
      ...a_,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: o ? Number(n) * 24 / Number(t) : n,
      className: Km("lucide", s),
      ...u
    },
    [
      ...l.map(([h, p]) => na(h, p)),
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
const st = (e, t) => {
  const n = wa(
    ({ className: o, ...s }, c) => na(l_, {
      ref: c,
      iconNode: t,
      className: Km(`lucide-${s_(e)}`, o),
      ...s
    })
  );
  return n.displayName = `${e}`, n;
};
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const c_ = st("Award", [
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
const u_ = st("Calendar", [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ca = st("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ta = st("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const d_ = st("ChevronUp", [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const f_ = st("CircleCheckBig", [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Do = st("CircleHelp", [
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
const h_ = st("Crosshair", [
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
const Ym = st("ExternalLink", [
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
const Yh = st("FileText", [
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
const p_ = st("Info", [
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
const m_ = st("Lightbulb", [
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
const g_ = st("Pen", [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ]
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const v_ = st("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qh = st("Settings", [
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
const y_ = st("Target", [
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
const x_ = st("Trash2", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jc = st("TriangleAlert", [
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
const b_ = st("User", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const w_ = st("Users", [
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
const qm = st("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const S_ = st("Zap", [
  [
    "path",
    {
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
      key: "1xq2db"
    }
  ]
]), hu = "-", C_ = (e) => {
  const t = __(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: o
  } = e;
  return {
    getClassGroupId: (l) => {
      const u = l.split(hu);
      return u[0] === "" && u.length !== 1 && u.shift(), Xm(u, t) || T_(l);
    },
    getConflictingClassGroupIds: (l, u) => {
      const d = n[l] || [];
      return u && o[l] ? [...d, ...o[l]] : d;
    }
  };
}, Xm = (e, t) => {
  var l;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], o = t.nextPart.get(n), s = o ? Xm(e.slice(1), o) : void 0;
  if (s)
    return s;
  if (t.validators.length === 0)
    return;
  const c = e.join(hu);
  return (l = t.validators.find(({
    validator: u
  }) => u(c))) == null ? void 0 : l.classGroupId;
}, Xh = /^\[(.+)\]$/, T_ = (e) => {
  if (Xh.test(e)) {
    const t = Xh.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, __ = (e) => {
  const {
    theme: t,
    prefix: n
  } = e, o = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return A_(Object.entries(e.classGroups), n).forEach(([c, l]) => {
    Ic(l, o, c, t);
  }), o;
}, Ic = (e, t, n, o) => {
  e.forEach((s) => {
    if (typeof s == "string") {
      const c = s === "" ? t : Zh(t, s);
      c.classGroupId = n;
      return;
    }
    if (typeof s == "function") {
      if (P_(s)) {
        Ic(s(o), t, n, o);
        return;
      }
      t.validators.push({
        validator: s,
        classGroupId: n
      });
      return;
    }
    Object.entries(s).forEach(([c, l]) => {
      Ic(l, Zh(t, c), n, o);
    });
  });
}, Zh = (e, t) => {
  let n = e;
  return t.split(hu).forEach((o) => {
    n.nextPart.has(o) || n.nextPart.set(o, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(o);
  }), n;
}, P_ = (e) => e.isThemeGetter, A_ = (e, t) => t ? e.map(([n, o]) => {
  const s = o.map((c) => typeof c == "string" ? t + c : typeof c == "object" ? Object.fromEntries(Object.entries(c).map(([l, u]) => [t + l, u])) : c);
  return [n, s];
}) : e, E_ = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, n = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
  const s = (c, l) => {
    n.set(c, l), t++, t > e && (t = 0, o = n, n = /* @__PURE__ */ new Map());
  };
  return {
    get(c) {
      let l = n.get(c);
      if (l !== void 0)
        return l;
      if ((l = o.get(c)) !== void 0)
        return s(c, l), l;
    },
    set(c, l) {
      n.has(c) ? n.set(c, l) : s(c, l);
    }
  };
}, Zm = "!", R_ = (e) => {
  const {
    separator: t,
    experimentalParseClassName: n
  } = e, o = t.length === 1, s = t[0], c = t.length, l = (u) => {
    const d = [];
    let h = 0, p = 0, v;
    for (let _ = 0; _ < u.length; _++) {
      let P = u[_];
      if (h === 0) {
        if (P === s && (o || u.slice(_, _ + c) === t)) {
          d.push(u.slice(p, _)), p = _ + c;
          continue;
        }
        if (P === "/") {
          v = _;
          continue;
        }
      }
      P === "[" ? h++ : P === "]" && h--;
    }
    const x = d.length === 0 ? u : u.substring(p), g = x.startsWith(Zm), T = g ? x.substring(1) : x, S = v && v > p ? v - p : void 0;
    return {
      modifiers: d,
      hasImportantModifier: g,
      baseClassName: T,
      maybePostfixModifierPosition: S
    };
  };
  return n ? (u) => n({
    className: u,
    parseClassName: l
  }) : l;
}, N_ = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let n = [];
  return e.forEach((o) => {
    o[0] === "[" ? (t.push(...n.sort(), o), n = []) : n.push(o);
  }), t.push(...n.sort()), t;
}, M_ = (e) => ({
  cache: E_(e.cacheSize),
  parseClassName: R_(e),
  ...C_(e)
}), O_ = /\s+/, D_ = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: o,
    getConflictingClassGroupIds: s
  } = t, c = [], l = e.trim().split(O_);
  let u = "";
  for (let d = l.length - 1; d >= 0; d -= 1) {
    const h = l[d], {
      modifiers: p,
      hasImportantModifier: v,
      baseClassName: x,
      maybePostfixModifierPosition: g
    } = n(h);
    let T = !!g, S = o(T ? x.substring(0, g) : x);
    if (!S) {
      if (!T) {
        u = h + (u.length > 0 ? " " + u : u);
        continue;
      }
      if (S = o(x), !S) {
        u = h + (u.length > 0 ? " " + u : u);
        continue;
      }
      T = !1;
    }
    const _ = N_(p).join(":"), P = v ? _ + Zm : _, E = P + S;
    if (c.includes(E))
      continue;
    c.push(E);
    const O = s(S, T);
    for (let N = 0; N < O.length; ++N) {
      const j = O[N];
      c.push(P + j);
    }
    u = h + (u.length > 0 ? " " + u : u);
  }
  return u;
};
function j_() {
  let e = 0, t, n, o = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = Jm(t)) && (o && (o += " "), o += n);
  return o;
}
const Jm = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let o = 0; o < e.length; o++)
    e[o] && (t = Jm(e[o])) && (n && (n += " "), n += t);
  return n;
};
function I_(e, ...t) {
  let n, o, s, c = l;
  function l(d) {
    const h = t.reduce((p, v) => v(p), e());
    return n = M_(h), o = n.cache.get, s = n.cache.set, c = u, u(d);
  }
  function u(d) {
    const h = o(d);
    if (h)
      return h;
    const p = D_(d, n);
    return s(d, p), p;
  }
  return function() {
    return c(j_.apply(null, arguments));
  };
}
const Ze = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, Qm = /^\[(?:([a-z-]+):)?(.+)\]$/i, L_ = /^\d+\/\d+$/, k_ = /* @__PURE__ */ new Set(["px", "full", "screen"]), V_ = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, F_ = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, B_ = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, W_ = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, $_ = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Xn = (e) => Vi(e) || k_.has(e) || L_.test(e), yr = (e) => Ki(e, "length", X_), Vi = (e) => !!e && !Number.isNaN(Number(e)), lc = (e) => Ki(e, "number", Vi), wo = (e) => !!e && Number.isInteger(Number(e)), U_ = (e) => e.endsWith("%") && Vi(e.slice(0, -1)), xe = (e) => Qm.test(e), xr = (e) => V_.test(e), H_ = /* @__PURE__ */ new Set(["length", "size", "percentage"]), z_ = (e) => Ki(e, H_, eg), G_ = (e) => Ki(e, "position", eg), K_ = /* @__PURE__ */ new Set(["image", "url"]), Y_ = (e) => Ki(e, K_, J_), q_ = (e) => Ki(e, "", Z_), So = () => !0, Ki = (e, t, n) => {
  const o = Qm.exec(e);
  return o ? o[1] ? typeof t == "string" ? o[1] === t : t.has(o[1]) : n(o[2]) : !1;
}, X_ = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  F_.test(e) && !B_.test(e)
), eg = () => !1, Z_ = (e) => W_.test(e), J_ = (e) => $_.test(e), Q_ = () => {
  const e = Ze("colors"), t = Ze("spacing"), n = Ze("blur"), o = Ze("brightness"), s = Ze("borderColor"), c = Ze("borderRadius"), l = Ze("borderSpacing"), u = Ze("borderWidth"), d = Ze("contrast"), h = Ze("grayscale"), p = Ze("hueRotate"), v = Ze("invert"), x = Ze("gap"), g = Ze("gradientColorStops"), T = Ze("gradientColorStopPositions"), S = Ze("inset"), _ = Ze("margin"), P = Ze("opacity"), E = Ze("padding"), O = Ze("saturate"), N = Ze("scale"), j = Ze("sepia"), W = Ze("skew"), $ = Ze("space"), H = Ze("translate"), te = () => ["auto", "contain", "none"], re = () => ["auto", "hidden", "clip", "visible", "scroll"], fe = () => ["auto", xe, t], J = () => [xe, t], se = () => ["", Xn, yr], ne = () => ["auto", Vi, xe], Te = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], ie = () => ["solid", "dashed", "dotted", "double", "none"], Z = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], q = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], G = () => ["", "0", xe], pe = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], Ee = () => [Vi, xe];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [So],
      spacing: [Xn, yr],
      blur: ["none", "", xr, xe],
      brightness: Ee(),
      borderColor: [e],
      borderRadius: ["none", "", "full", xr, xe],
      borderSpacing: J(),
      borderWidth: se(),
      contrast: Ee(),
      grayscale: G(),
      hueRotate: Ee(),
      invert: G(),
      gap: J(),
      gradientColorStops: [e],
      gradientColorStopPositions: [U_, yr],
      inset: fe(),
      margin: fe(),
      opacity: Ee(),
      padding: J(),
      saturate: Ee(),
      scale: Ee(),
      sepia: G(),
      skew: Ee(),
      space: J(),
      translate: J()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", xe]
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
        columns: [xr]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": pe()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": pe()
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
        object: [...Te(), xe]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: re()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": re()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": re()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: te()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": te()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": te()
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
        z: ["auto", wo, xe]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: fe()
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
        flex: ["1", "auto", "initial", "none", xe]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: G()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: G()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", wo, xe]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [So]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", wo, xe]
        }, xe]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": ne()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": ne()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [So]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [wo, xe]
        }, xe]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": ne()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": ne()
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
        "auto-cols": ["auto", "min", "max", "fr", xe]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", xe]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [x]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [x]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [x]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...q()]
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
        content: ["normal", ...q(), "baseline"]
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
        "place-content": [...q(), "baseline"]
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
        p: [E]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [E]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [E]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [E]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [E]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [E]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [E]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [E]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [E]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", xe, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [xe, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [xe, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [xr]
        }, xr]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [xe, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [xe, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [xe, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [xe, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", xr, yr]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", lc]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [So]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", xe]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Vi, lc]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Xn, xe]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", xe]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", xe]
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
        "placeholder-opacity": [P]
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
        "text-opacity": [P]
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
        decoration: [...ie(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Xn, yr]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Xn, xe]
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
        indent: J()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", xe]
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
        content: ["none", xe]
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
        "bg-opacity": [P]
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
        bg: [...Te(), G_]
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
        bg: ["auto", "cover", "contain", z_]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Y_]
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
        from: [g]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [g]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [g]
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
        "border-opacity": [P]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...ie(), "hidden"]
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
        "divide-opacity": [P]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: ie()
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
        outline: ["", ...ie()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Xn, xe]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Xn, yr]
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
        ring: se()
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
        "ring-opacity": [P]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [Xn, yr]
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
        shadow: ["", "inner", "none", xr, q_]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [So]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [P]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...Z(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": Z()
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
        blur: [n]
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
        contrast: [d]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", xr, xe]
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
        invert: [v]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [O]
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
        "backdrop-blur": [n]
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
        "backdrop-contrast": [d]
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
        "backdrop-invert": [v]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [P]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [O]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", xe]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: Ee()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", xe]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: Ee()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", xe]
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
        scale: [N]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [N]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [N]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [wo, xe]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [H]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [H]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [W]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [W]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", xe]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", xe]
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
        "scroll-m": J()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": J()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": J()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": J()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": J()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": J()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": J()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": J()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": J()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": J()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": J()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": J()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": J()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": J()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": J()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": J()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": J()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": J()
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
        "will-change": ["auto", "scroll", "contents", "transform", xe]
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
        stroke: [Xn, yr, lc]
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
}, eP = /* @__PURE__ */ I_(Q_);
function Ue(...e) {
  return eP(o_(e));
}
function tP(e) {
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
function nP(e) {
  switch (e) {
    case "metrics":
      return y_;
    case "economic_buyer":
      return b_;
    case "decision_criteria":
      return Yh;
    case "decision_process":
      return w_;
    case "paper_process":
      return Yh;
    case "identification_pain":
      return S_;
    case "champion":
      return c_;
    case "competition":
      return h_;
    default:
      return null;
  }
}
const rP = fu(
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
), gt = w.forwardRef(
  ({ className: e, variant: t, size: n, asChild: o = !1, ...s }, c) => {
    const l = o ? ri : "button";
    return /* @__PURE__ */ m.jsx(
      l,
      {
        className: Ue(rP({ variant: t, size: n, className: e })),
        ref: c,
        ...s
      }
    );
  }
);
gt.displayName = "Button";
const iP = "_counter_1wts1_1", oP = "_header_1wts1_10", sP = "_button_1wts1_16", cc = {
  counter: iP,
  header: oP,
  button: sP
}, aP = (e) => {
  const [t, n] = jn(e);
  return {
    count: t,
    incrementCount: () => n(t + 1)
  };
}, { throttle: lP } = QT, lj = ({ initialValue: e = 0 }) => {
  const { count: t, incrementCount: n } = aP(e);
  return Wo(() => {
    lP(() => {
      console.log("throttle");
    }, 10)();
  }, []), /* @__PURE__ */ m.jsxs("div", { className: cc.counter, children: [
    /* @__PURE__ */ m.jsx("h2", { className: cc.header, children: "Counter" }),
    /* @__PURE__ */ m.jsx("button", { className: cc.button, type: "button", onClick: n, children: "Increment by one" }),
    /* @__PURE__ */ m.jsx(gt, { variant: "outline", children: "Shadcn button" }),
    /* @__PURE__ */ m.jsxs("div", { className: "bg-red-500", children: [
      "Total value: ",
      /* @__PURE__ */ m.jsx("strong", { children: t })
    ] })
  ] });
};
var cP = (e, t, n, o, s, c, l, u) => {
  let d = document.documentElement, h = ["light", "dark"];
  function p(g) {
    (Array.isArray(e) ? e : [e]).forEach((T) => {
      let S = T === "class", _ = S && c ? s.map((P) => c[P] || P) : s;
      S ? (d.classList.remove(..._), d.classList.add(g)) : d.setAttribute(T, g);
    }), v(g);
  }
  function v(g) {
    u && h.includes(g) && (d.style.colorScheme = g);
  }
  function x() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  if (o)
    p(o);
  else
    try {
      let g = localStorage.getItem(t) || n, T = l && g === "system" ? x() : g;
      p(T);
    } catch {
    }
}, uP = w.createContext(void 0), dP = { setTheme: (e) => {
}, themes: [] }, fP = () => {
  var e;
  return (e = w.useContext(uP)) != null ? e : dP;
};
w.memo(({ forcedTheme: e, storageKey: t, attribute: n, enableSystem: o, enableColorScheme: s, defaultTheme: c, value: l, themes: u, nonce: d, scriptProps: h }) => {
  let p = JSON.stringify([n, t, c, e, u, l, o, s]).slice(1, -1);
  return w.createElement("script", { ...h, suppressHydrationWarning: !0, nonce: typeof window > "u" ? d : "", dangerouslySetInnerHTML: { __html: `(${cP.toString()})(${p})` } });
});
var hP = (e) => {
  switch (e) {
    case "success":
      return gP;
    case "info":
      return yP;
    case "warning":
      return vP;
    case "error":
      return xP;
    default:
      return null;
  }
}, pP = Array(12).fill(0), mP = ({ visible: e, className: t }) => z.createElement("div", { className: ["sonner-loading-wrapper", t].filter(Boolean).join(" "), "data-visible": e }, z.createElement("div", { className: "sonner-spinner" }, pP.map((n, o) => z.createElement("div", { className: "sonner-loading-bar", key: `spinner-bar-${o}` })))), gP = z.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, z.createElement("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z", clipRule: "evenodd" })), vP = z.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", height: "20", width: "20" }, z.createElement("path", { fillRule: "evenodd", d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z", clipRule: "evenodd" })), yP = z.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, z.createElement("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z", clipRule: "evenodd" })), xP = z.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, z.createElement("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z", clipRule: "evenodd" })), bP = z.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }, z.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }), z.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" })), wP = () => {
  let [e, t] = z.useState(document.hidden);
  return z.useEffect(() => {
    let n = () => {
      t(document.hidden);
    };
    return document.addEventListener("visibilitychange", n), () => window.removeEventListener("visibilitychange", n);
  }, []), e;
}, Lc = 1, SP = class {
  constructor() {
    this.subscribe = (e) => (this.subscribers.push(e), () => {
      let t = this.subscribers.indexOf(e);
      this.subscribers.splice(t, 1);
    }), this.publish = (e) => {
      this.subscribers.forEach((t) => t(e));
    }, this.addToast = (e) => {
      this.publish(e), this.toasts = [...this.toasts, e];
    }, this.create = (e) => {
      var t;
      let { message: n, ...o } = e, s = typeof (e == null ? void 0 : e.id) == "number" || ((t = e.id) == null ? void 0 : t.length) > 0 ? e.id : Lc++, c = this.toasts.find((u) => u.id === s), l = e.dismissible === void 0 ? !0 : e.dismissible;
      return c ? this.toasts = this.toasts.map((u) => u.id === s ? (this.publish({ ...u, ...e, id: s, title: n }), { ...u, ...e, id: s, dismissible: l, title: n }) : u) : this.addToast({ title: n, ...o, dismissible: l, id: s }), s;
    }, this.dismiss = (e) => (e || this.toasts.forEach((t) => {
      this.subscribers.forEach((n) => n({ id: t.id, dismiss: !0 }));
    }), this.subscribers.forEach((t) => t({ id: e, dismiss: !0 })), e), this.message = (e, t) => this.create({ ...t, message: e }), this.error = (e, t) => this.create({ ...t, message: e, type: "error" }), this.success = (e, t) => this.create({ ...t, type: "success", message: e }), this.info = (e, t) => this.create({ ...t, type: "info", message: e }), this.warning = (e, t) => this.create({ ...t, type: "warning", message: e }), this.loading = (e, t) => this.create({ ...t, type: "loading", message: e }), this.promise = (e, t) => {
      if (!t)
        return;
      let n;
      t.loading !== void 0 && (n = this.create({ ...t, promise: e, type: "loading", message: t.loading, description: typeof t.description != "function" ? t.description : void 0 }));
      let o = e instanceof Promise ? e : e(), s = n !== void 0, c, l = o.then(async (d) => {
        if (c = ["resolve", d], z.isValidElement(d))
          s = !1, this.create({ id: n, type: "default", message: d });
        else if (TP(d) && !d.ok) {
          s = !1;
          let h = typeof t.error == "function" ? await t.error(`HTTP error! status: ${d.status}`) : t.error, p = typeof t.description == "function" ? await t.description(`HTTP error! status: ${d.status}`) : t.description;
          this.create({ id: n, type: "error", message: h, description: p });
        } else if (t.success !== void 0) {
          s = !1;
          let h = typeof t.success == "function" ? await t.success(d) : t.success, p = typeof t.description == "function" ? await t.description(d) : t.description;
          this.create({ id: n, type: "success", message: h, description: p });
        }
      }).catch(async (d) => {
        if (c = ["reject", d], t.error !== void 0) {
          s = !1;
          let h = typeof t.error == "function" ? await t.error(d) : t.error, p = typeof t.description == "function" ? await t.description(d) : t.description;
          this.create({ id: n, type: "error", message: h, description: p });
        }
      }).finally(() => {
        var d;
        s && (this.dismiss(n), n = void 0), (d = t.finally) == null || d.call(t);
      }), u = () => new Promise((d, h) => l.then(() => c[0] === "reject" ? h(c[1]) : d(c[1])).catch(h));
      return typeof n != "string" && typeof n != "number" ? { unwrap: u } : Object.assign(n, { unwrap: u });
    }, this.custom = (e, t) => {
      let n = (t == null ? void 0 : t.id) || Lc++;
      return this.create({ jsx: e(n), id: n, ...t }), n;
    }, this.subscribers = [], this.toasts = [];
  }
}, Qt = new SP(), CP = (e, t) => {
  let n = (t == null ? void 0 : t.id) || Lc++;
  return Qt.addToast({ title: e, ...t, id: n }), n;
}, TP = (e) => e && typeof e == "object" && "ok" in e && typeof e.ok == "boolean" && "status" in e && typeof e.status == "number", _P = CP, PP = () => Qt.toasts;
Object.assign(_P, { success: Qt.success, info: Qt.info, warning: Qt.warning, error: Qt.error, custom: Qt.custom, message: Qt.message, promise: Qt.promise, dismiss: Qt.dismiss, loading: Qt.loading }, { getHistory: PP });
function AP(e, { insertAt: t } = {}) {
  if (typeof document > "u")
    return;
  let n = document.head || document.getElementsByTagName("head")[0], o = document.createElement("style");
  o.type = "text/css", t === "top" && n.firstChild ? n.insertBefore(o, n.firstChild) : n.appendChild(o), o.styleSheet ? o.styleSheet.cssText = e : o.appendChild(document.createTextNode(e));
}
AP(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:max(var(--offset),env(safe-area-inset-right))}:where([data-sonner-toaster][data-x-position="left"]){left:max(var(--offset),env(safe-area-inset-left))}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:max(var(--offset),env(safe-area-inset-top))}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:max(var(--offset),env(safe-area-inset-bottom))}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:0;right:0;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation:swipe-out .2s ease-out forwards}@keyframes swipe-out{0%{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount)));opacity:1}to{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount) + var(--lift) * -100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;--mobile-offset: 16px;right:var(--mobile-offset);left:var(--mobile-offset);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset)}[data-sonner-toaster][data-y-position=bottom]{bottom:20px}[data-sonner-toaster][data-y-position=top]{top:20px}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset);right:var(--mobile-offset);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function Vs(e) {
  return e.label !== void 0;
}
var EP = 3, RP = "32px", Jh = 4e3, NP = 356, MP = 14, OP = 20, DP = 200;
function jP(...e) {
  return e.filter(Boolean).join(" ");
}
var IP = (e) => {
  var t, n, o, s, c, l, u, d, h, p, v;
  let { invert: x, toast: g, unstyled: T, interacting: S, setHeights: _, visibleToasts: P, heights: E, index: O, toasts: N, expanded: j, removeToast: W, defaultRichColors: $, closeButton: H, style: te, cancelButtonStyle: re, actionButtonStyle: fe, className: J = "", descriptionClassName: se = "", duration: ne, position: Te, gap: ie, loadingIcon: Z, expandByDefault: q, classNames: G, icons: pe, closeButtonAriaLabel: Ee = "Close toast", pauseWhenPageIsHidden: _e, cn: ge } = e, [Re, Be] = z.useState(!1), [Je, X] = z.useState(!1), [be, ke] = z.useState(!1), [Se, ve] = z.useState(!1), [Pe, at] = z.useState(!1), [Ye, ft] = z.useState(0), [Mt, lt] = z.useState(0), rn = z.useRef(g.duration || ne || Jh), Vt = z.useRef(null), Ot = z.useRef(null), Dt = O === 0, gn = O + 1 <= P, ht = g.type, _n = g.dismissible !== !1, Pn = g.className || "", fi = g.descriptionClassName || "", Tt = z.useMemo(() => E.findIndex((oe) => oe.toastId === g.id) || 0, [E, g.id]), An = z.useMemo(() => {
    var oe;
    return (oe = g.closeButton) != null ? oe : H;
  }, [g.closeButton, H]);
  z.useMemo(() => g.duration || ne || Jh, [g.duration, ne]);
  let En = z.useRef(0), Gt = z.useRef(0), Rn = z.useRef(0), Nn = z.useRef(null), [Vr, Fr] = Te.split("-"), or = z.useMemo(() => E.reduce((oe, De, We) => We >= Tt ? oe : oe + De.height, 0), [E, Tt]), sr = wP(), Br = g.invert || x, Wr = ht === "loading";
  Gt.current = z.useMemo(() => Tt * ie + or, [Tt, or]), z.useEffect(() => {
    Be(!0);
  }, []), z.useEffect(() => {
    let oe = Ot.current;
    if (oe) {
      let De = oe.getBoundingClientRect().height;
      return lt(De), _((We) => [{ toastId: g.id, height: De, position: g.position }, ...We]), () => _((We) => We.filter((_t) => _t.toastId !== g.id));
    }
  }, [_, g.id]), z.useLayoutEffect(() => {
    if (!Re)
      return;
    let oe = Ot.current, De = oe.style.height;
    oe.style.height = "auto";
    let We = oe.getBoundingClientRect().height;
    oe.style.height = De, lt(We), _((_t) => _t.find((Bt) => Bt.toastId === g.id) ? _t.map((Bt) => Bt.toastId === g.id ? { ...Bt, height: We } : Bt) : [{ toastId: g.id, height: We, position: g.position }, ..._t]);
  }, [Re, g.title, g.description, _, g.id]);
  let Ft = z.useCallback(() => {
    X(!0), ft(Gt.current), _((oe) => oe.filter((De) => De.toastId !== g.id)), setTimeout(() => {
      W(g);
    }, DP);
  }, [g, W, _, Gt]);
  z.useEffect(() => {
    if (g.promise && ht === "loading" || g.duration === 1 / 0 || g.type === "loading")
      return;
    let oe;
    return j || S || _e && sr ? (() => {
      if (Rn.current < En.current) {
        let De = (/* @__PURE__ */ new Date()).getTime() - En.current;
        rn.current = rn.current - De;
      }
      Rn.current = (/* @__PURE__ */ new Date()).getTime();
    })() : rn.current !== 1 / 0 && (En.current = (/* @__PURE__ */ new Date()).getTime(), oe = setTimeout(() => {
      var De;
      (De = g.onAutoClose) == null || De.call(g, g), Ft();
    }, rn.current)), () => clearTimeout(oe);
  }, [j, S, g, ht, _e, sr, Ft]), z.useEffect(() => {
    g.delete && Ft();
  }, [Ft, g.delete]);
  function hi() {
    var oe, De, We;
    return pe != null && pe.loading ? z.createElement("div", { className: ge(G == null ? void 0 : G.loader, (oe = g == null ? void 0 : g.classNames) == null ? void 0 : oe.loader, "sonner-loader"), "data-visible": ht === "loading" }, pe.loading) : Z ? z.createElement("div", { className: ge(G == null ? void 0 : G.loader, (De = g == null ? void 0 : g.classNames) == null ? void 0 : De.loader, "sonner-loader"), "data-visible": ht === "loading" }, Z) : z.createElement(mP, { className: ge(G == null ? void 0 : G.loader, (We = g == null ? void 0 : g.classNames) == null ? void 0 : We.loader), visible: ht === "loading" });
  }
  return z.createElement("li", { tabIndex: 0, ref: Ot, className: ge(J, Pn, G == null ? void 0 : G.toast, (t = g == null ? void 0 : g.classNames) == null ? void 0 : t.toast, G == null ? void 0 : G.default, G == null ? void 0 : G[ht], (n = g == null ? void 0 : g.classNames) == null ? void 0 : n[ht]), "data-sonner-toast": "", "data-rich-colors": (o = g.richColors) != null ? o : $, "data-styled": !(g.jsx || g.unstyled || T), "data-mounted": Re, "data-promise": !!g.promise, "data-swiped": Pe, "data-removed": Je, "data-visible": gn, "data-y-position": Vr, "data-x-position": Fr, "data-index": O, "data-front": Dt, "data-swiping": be, "data-dismissible": _n, "data-type": ht, "data-invert": Br, "data-swipe-out": Se, "data-expanded": !!(j || q && Re), style: { "--index": O, "--toasts-before": O, "--z-index": N.length - O, "--offset": `${Je ? Ye : Gt.current}px`, "--initial-height": q ? "auto" : `${Mt}px`, ...te, ...g.style }, onPointerDown: (oe) => {
    Wr || !_n || (Vt.current = /* @__PURE__ */ new Date(), ft(Gt.current), oe.target.setPointerCapture(oe.pointerId), oe.target.tagName !== "BUTTON" && (ke(!0), Nn.current = { x: oe.clientX, y: oe.clientY }));
  }, onPointerUp: () => {
    var oe, De, We, _t;
    if (Se || !_n)
      return;
    Nn.current = null;
    let Bt = Number(((oe = Ot.current) == null ? void 0 : oe.style.getPropertyValue("--swipe-amount").replace("px", "")) || 0), ar = (/* @__PURE__ */ new Date()).getTime() - ((De = Vt.current) == null ? void 0 : De.getTime()), pi = Math.abs(Bt) / ar;
    if (Math.abs(Bt) >= OP || pi > 0.11) {
      ft(Gt.current), (We = g.onDismiss) == null || We.call(g, g), Ft(), ve(!0), at(!1);
      return;
    }
    (_t = Ot.current) == null || _t.style.setProperty("--swipe-amount", "0px"), ke(!1);
  }, onPointerMove: (oe) => {
    var De, We, _t;
    if (!Nn.current || !_n)
      return;
    let Bt = oe.clientY - Nn.current.y, ar = ((De = window.getSelection()) == null ? void 0 : De.toString().length) > 0;
    Number(((We = Ot.current) == null ? void 0 : We.style.getPropertyValue("--swipe-amount").replace("px", "")) || 0) > 0 && at(!0), !ar && ((_t = Ot.current) == null || _t.style.setProperty("--swipe-amount", `${Math.max(0, Bt)}px`));
  } }, An && !g.jsx ? z.createElement("button", { "aria-label": Ee, "data-disabled": Wr, "data-close-button": !0, onClick: Wr || !_n ? () => {
  } : () => {
    var oe;
    Ft(), (oe = g.onDismiss) == null || oe.call(g, g);
  }, className: ge(G == null ? void 0 : G.closeButton, (s = g == null ? void 0 : g.classNames) == null ? void 0 : s.closeButton) }, (c = pe == null ? void 0 : pe.close) != null ? c : bP) : null, g.jsx || z.isValidElement(g.title) ? g.jsx ? g.jsx : typeof g.title == "function" ? g.title() : g.title : z.createElement(z.Fragment, null, ht || g.icon || g.promise ? z.createElement("div", { "data-icon": "", className: ge(G == null ? void 0 : G.icon, (l = g == null ? void 0 : g.classNames) == null ? void 0 : l.icon) }, g.promise || g.type === "loading" && !g.icon ? g.icon || hi() : null, g.type !== "loading" ? g.icon || (pe == null ? void 0 : pe[ht]) || hP(ht) : null) : null, z.createElement("div", { "data-content": "", className: ge(G == null ? void 0 : G.content, (u = g == null ? void 0 : g.classNames) == null ? void 0 : u.content) }, z.createElement("div", { "data-title": "", className: ge(G == null ? void 0 : G.title, (d = g == null ? void 0 : g.classNames) == null ? void 0 : d.title) }, typeof g.title == "function" ? g.title() : g.title), g.description ? z.createElement("div", { "data-description": "", className: ge(se, fi, G == null ? void 0 : G.description, (h = g == null ? void 0 : g.classNames) == null ? void 0 : h.description) }, typeof g.description == "function" ? g.description() : g.description) : null), z.isValidElement(g.cancel) ? g.cancel : g.cancel && Vs(g.cancel) ? z.createElement("button", { "data-button": !0, "data-cancel": !0, style: g.cancelButtonStyle || re, onClick: (oe) => {
    var De, We;
    Vs(g.cancel) && _n && ((We = (De = g.cancel).onClick) == null || We.call(De, oe), Ft());
  }, className: ge(G == null ? void 0 : G.cancelButton, (p = g == null ? void 0 : g.classNames) == null ? void 0 : p.cancelButton) }, g.cancel.label) : null, z.isValidElement(g.action) ? g.action : g.action && Vs(g.action) ? z.createElement("button", { "data-button": !0, "data-action": !0, style: g.actionButtonStyle || fe, onClick: (oe) => {
    var De, We;
    Vs(g.action) && ((We = (De = g.action).onClick) == null || We.call(De, oe), !oe.defaultPrevented && Ft());
  }, className: ge(G == null ? void 0 : G.actionButton, (v = g == null ? void 0 : g.classNames) == null ? void 0 : v.actionButton) }, g.action.label) : null));
};
function Qh() {
  if (typeof window > "u" || typeof document > "u")
    return "ltr";
  let e = document.documentElement.getAttribute("dir");
  return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e;
}
var LP = wa(function(e, t) {
  let { invert: n, position: o = "bottom-right", hotkey: s = ["altKey", "KeyT"], expand: c, closeButton: l, className: u, offset: d, theme: h = "light", richColors: p, duration: v, style: x, visibleToasts: g = EP, toastOptions: T, dir: S = Qh(), gap: _ = MP, loadingIcon: P, icons: E, containerAriaLabel: O = "Notifications", pauseWhenPageIsHidden: N, cn: j = jP } = e, [W, $] = z.useState([]), H = z.useMemo(() => Array.from(new Set([o].concat(W.filter((_e) => _e.position).map((_e) => _e.position)))), [W, o]), [te, re] = z.useState([]), [fe, J] = z.useState(!1), [se, ne] = z.useState(!1), [Te, ie] = z.useState(h !== "system" ? h : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), Z = z.useRef(null), q = s.join("+").replace(/Key/g, "").replace(/Digit/g, ""), G = z.useRef(null), pe = z.useRef(!1), Ee = z.useCallback((_e) => {
    $((ge) => {
      var Re;
      return (Re = ge.find((Be) => Be.id === _e.id)) != null && Re.delete || Qt.dismiss(_e.id), ge.filter(({ id: Be }) => Be !== _e.id);
    });
  }, []);
  return z.useEffect(() => Qt.subscribe((_e) => {
    if (_e.dismiss) {
      $((ge) => ge.map((Re) => Re.id === _e.id ? { ...Re, delete: !0 } : Re));
      return;
    }
    setTimeout(() => {
      $m.flushSync(() => {
        $((ge) => {
          let Re = ge.findIndex((Be) => Be.id === _e.id);
          return Re !== -1 ? [...ge.slice(0, Re), { ...ge[Re], ..._e }, ...ge.slice(Re + 1)] : [_e, ...ge];
        });
      });
    });
  }), []), z.useEffect(() => {
    if (h !== "system") {
      ie(h);
      return;
    }
    if (h === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? ie("dark") : ie("light")), typeof window > "u")
      return;
    let _e = window.matchMedia("(prefers-color-scheme: dark)");
    try {
      _e.addEventListener("change", ({ matches: ge }) => {
        ie(ge ? "dark" : "light");
      });
    } catch {
      _e.addListener(({ matches: Re }) => {
        try {
          ie(Re ? "dark" : "light");
        } catch (Be) {
          console.error(Be);
        }
      });
    }
  }, [h]), z.useEffect(() => {
    W.length <= 1 && J(!1);
  }, [W]), z.useEffect(() => {
    let _e = (ge) => {
      var Re, Be;
      s.every((Je) => ge[Je] || ge.code === Je) && (J(!0), (Re = Z.current) == null || Re.focus()), ge.code === "Escape" && (document.activeElement === Z.current || (Be = Z.current) != null && Be.contains(document.activeElement)) && J(!1);
    };
    return document.addEventListener("keydown", _e), () => document.removeEventListener("keydown", _e);
  }, [s]), z.useEffect(() => {
    if (Z.current)
      return () => {
        G.current && (G.current.focus({ preventScroll: !0 }), G.current = null, pe.current = !1);
      };
  }, [Z.current]), z.createElement("section", { "aria-label": `${O} ${q}`, tabIndex: -1, "aria-live": "polite", "aria-relevant": "additions text", "aria-atomic": "false" }, H.map((_e, ge) => {
    var Re;
    let [Be, Je] = _e.split("-");
    return W.length ? z.createElement("ol", { key: _e, dir: S === "auto" ? Qh() : S, tabIndex: -1, ref: Z, className: u, "data-sonner-toaster": !0, "data-theme": Te, "data-y-position": Be, "data-lifted": fe && W.length > 1 && !c, "data-x-position": Je, style: { "--front-toast-height": `${((Re = te[0]) == null ? void 0 : Re.height) || 0}px`, "--offset": typeof d == "number" ? `${d}px` : d || RP, "--width": `${NP}px`, "--gap": `${_}px`, ...x }, onBlur: (X) => {
      pe.current && !X.currentTarget.contains(X.relatedTarget) && (pe.current = !1, G.current && (G.current.focus({ preventScroll: !0 }), G.current = null));
    }, onFocus: (X) => {
      X.target instanceof HTMLElement && X.target.dataset.dismissible === "false" || pe.current || (pe.current = !0, G.current = X.relatedTarget);
    }, onMouseEnter: () => J(!0), onMouseMove: () => J(!0), onMouseLeave: () => {
      se || J(!1);
    }, onPointerDown: (X) => {
      X.target instanceof HTMLElement && X.target.dataset.dismissible === "false" || ne(!0);
    }, onPointerUp: () => ne(!1) }, W.filter((X) => !X.position && ge === 0 || X.position === _e).map((X, be) => {
      var ke, Se;
      return z.createElement(IP, { key: X.id, icons: E, index: be, toast: X, defaultRichColors: p, duration: (ke = T == null ? void 0 : T.duration) != null ? ke : v, className: T == null ? void 0 : T.className, descriptionClassName: T == null ? void 0 : T.descriptionClassName, invert: n, visibleToasts: g, closeButton: (Se = T == null ? void 0 : T.closeButton) != null ? Se : l, interacting: se, position: _e, style: T == null ? void 0 : T.style, unstyled: T == null ? void 0 : T.unstyled, classNames: T == null ? void 0 : T.classNames, cancelButtonStyle: T == null ? void 0 : T.cancelButtonStyle, actionButtonStyle: T == null ? void 0 : T.actionButtonStyle, removeToast: Ee, toasts: W.filter((ve) => ve.position == X.position), heights: te.filter((ve) => ve.position == X.position), setHeights: re, expandByDefault: c, gap: _, loadingIcon: P, expanded: fe, pauseWhenPageIsHidden: N, cn: j });
    })) : null;
  }));
});
const cj = ({ ...e }) => {
  const { theme: t = "system" } = fP();
  return /* @__PURE__ */ m.jsx(
    LP,
    {
      theme: t,
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...e
    }
  );
};
function ep(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function Le(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(s) {
    if (e == null || e(s), n === !1 || !s.defaultPrevented)
      return t == null ? void 0 : t(s);
  };
}
function kP(e, t = []) {
  let n = [];
  function o(c, l) {
    const u = w.createContext(l), d = n.length;
    n = [...n, l];
    function h(v) {
      const { scope: x, children: g, ...T } = v, S = (x == null ? void 0 : x[e][d]) || u, _ = w.useMemo(() => T, Object.values(T));
      return /* @__PURE__ */ m.jsx(S.Provider, { value: _, children: g });
    }
    function p(v, x) {
      const g = (x == null ? void 0 : x[e][d]) || u, T = w.useContext(g);
      if (T)
        return T;
      if (l !== void 0)
        return l;
      throw new Error(`\`${v}\` must be used within \`${c}\``);
    }
    return h.displayName = c + "Provider", [h, p];
  }
  const s = () => {
    const c = n.map((l) => w.createContext(l));
    return function(u) {
      const d = (u == null ? void 0 : u[e]) || c;
      return w.useMemo(
        () => ({ [`__scope${e}`]: { ...u, [e]: d } }),
        [u, d]
      );
    };
  };
  return s.scopeName = e, [o, VP(s, ...t)];
}
function VP(...e) {
  const t = e[0];
  if (e.length === 1)
    return t;
  const n = () => {
    const o = e.map((s) => ({
      useScope: s(),
      scopeName: s.scopeName
    }));
    return function(c) {
      const l = o.reduce((u, { useScope: d, scopeName: h }) => {
        const v = d(c)[`__scope${h}`];
        return { ...u, ...v };
      }, {});
      return w.useMemo(() => ({ [`__scope${t.scopeName}`]: l }), [l]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
function FP(e) {
  const t = e + "CollectionProvider", [n, o] = kP(t), [s, c] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), l = (g) => {
    const { scope: T, children: S } = g, _ = z.useRef(null), P = z.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ m.jsx(s, { scope: T, itemMap: P, collectionRef: _, children: S });
  };
  l.displayName = t;
  const u = e + "CollectionSlot", d = z.forwardRef(
    (g, T) => {
      const { scope: S, children: _ } = g, P = c(u, S), E = et(T, P.collectionRef);
      return /* @__PURE__ */ m.jsx(ri, { ref: E, children: _ });
    }
  );
  d.displayName = u;
  const h = e + "CollectionItemSlot", p = "data-radix-collection-item", v = z.forwardRef(
    (g, T) => {
      const { scope: S, children: _, ...P } = g, E = z.useRef(null), O = et(T, E), N = c(h, S);
      return z.useEffect(() => (N.itemMap.set(E, { ref: E, ...P }), () => void N.itemMap.delete(E))), /* @__PURE__ */ m.jsx(ri, { [p]: "", ref: O, children: _ });
    }
  );
  v.displayName = h;
  function x(g) {
    const T = c(e + "CollectionConsumer", g);
    return z.useCallback(() => {
      const _ = T.collectionRef.current;
      if (!_)
        return [];
      const P = Array.from(_.querySelectorAll(`[${p}]`));
      return Array.from(T.itemMap.values()).sort(
        (N, j) => P.indexOf(N.ref.current) - P.indexOf(j.ref.current)
      );
    }, [T.collectionRef, T.itemMap]);
  }
  return [
    { Provider: l, Slot: d, ItemSlot: v },
    x,
    o
  ];
}
function BP(e, t) {
  const n = w.createContext(t), o = (c) => {
    const { children: l, ...u } = c, d = w.useMemo(() => u, Object.values(u));
    return /* @__PURE__ */ m.jsx(n.Provider, { value: d, children: l });
  };
  o.displayName = e + "Provider";
  function s(c) {
    const l = w.useContext(n);
    if (l)
      return l;
    if (t !== void 0)
      return t;
    throw new Error(`\`${c}\` must be used within \`${e}\``);
  }
  return [o, s];
}
function _a(e, t = []) {
  let n = [];
  function o(c, l) {
    const u = w.createContext(l), d = n.length;
    n = [...n, l];
    const h = (v) => {
      var P;
      const { scope: x, children: g, ...T } = v, S = ((P = x == null ? void 0 : x[e]) == null ? void 0 : P[d]) || u, _ = w.useMemo(() => T, Object.values(T));
      return /* @__PURE__ */ m.jsx(S.Provider, { value: _, children: g });
    };
    h.displayName = c + "Provider";
    function p(v, x) {
      var S;
      const g = ((S = x == null ? void 0 : x[e]) == null ? void 0 : S[d]) || u, T = w.useContext(g);
      if (T)
        return T;
      if (l !== void 0)
        return l;
      throw new Error(`\`${v}\` must be used within \`${c}\``);
    }
    return [h, p];
  }
  const s = () => {
    const c = n.map((l) => w.createContext(l));
    return function(u) {
      const d = (u == null ? void 0 : u[e]) || c;
      return w.useMemo(
        () => ({ [`__scope${e}`]: { ...u, [e]: d } }),
        [u, d]
      );
    };
  };
  return s.scopeName = e, [o, WP(s, ...t)];
}
function WP(...e) {
  const t = e[0];
  if (e.length === 1)
    return t;
  const n = () => {
    const o = e.map((s) => ({
      useScope: s(),
      scopeName: s.scopeName
    }));
    return function(c) {
      const l = o.reduce((u, { useScope: d, scopeName: h }) => {
        const v = d(c)[`__scope${h}`];
        return { ...u, ...v };
      }, {});
      return w.useMemo(() => ({ [`__scope${t.scopeName}`]: l }), [l]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
var $P = w.createContext(void 0);
function UP(e) {
  const t = w.useContext($P);
  return e || t || "ltr";
}
var HP = [
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
], Ve = HP.reduce((e, t) => {
  const n = w.forwardRef((o, s) => {
    const { asChild: c, ...l } = o, u = c ? ri : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ m.jsx(u, { ...l, ref: s });
  });
  return n.displayName = `Primitive.${t}`, { ...e, [t]: n };
}, {});
function zP(e, t) {
  e && Sa.flushSync(() => e.dispatchEvent(t));
}
function nr(e) {
  const t = w.useRef(e);
  return w.useEffect(() => {
    t.current = e;
  }), w.useMemo(() => (...n) => {
    var o;
    return (o = t.current) == null ? void 0 : o.call(t, ...n);
  }, []);
}
function GP(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = nr(e);
  w.useEffect(() => {
    const o = (s) => {
      s.key === "Escape" && n(s);
    };
    return t.addEventListener("keydown", o, { capture: !0 }), () => t.removeEventListener("keydown", o, { capture: !0 });
  }, [n, t]);
}
var KP = "DismissableLayer", kc = "dismissableLayer.update", YP = "dismissableLayer.pointerDownOutside", qP = "dismissableLayer.focusOutside", tp, tg = w.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Pa = w.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: o,
      onPointerDownOutside: s,
      onFocusOutside: c,
      onInteractOutside: l,
      onDismiss: u,
      ...d
    } = e, h = w.useContext(tg), [p, v] = w.useState(null), x = (p == null ? void 0 : p.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, g] = w.useState({}), T = et(t, ($) => v($)), S = Array.from(h.layers), [_] = [...h.layersWithOutsidePointerEventsDisabled].slice(-1), P = S.indexOf(_), E = p ? S.indexOf(p) : -1, O = h.layersWithOutsidePointerEventsDisabled.size > 0, N = E >= P, j = JP(($) => {
      const H = $.target, te = [...h.branches].some((re) => re.contains(H));
      !N || te || (s == null || s($), l == null || l($), $.defaultPrevented || u == null || u());
    }, x), W = QP(($) => {
      const H = $.target;
      [...h.branches].some((re) => re.contains(H)) || (c == null || c($), l == null || l($), $.defaultPrevented || u == null || u());
    }, x);
    return GP(($) => {
      E === h.layers.size - 1 && (o == null || o($), !$.defaultPrevented && u && ($.preventDefault(), u()));
    }, x), w.useEffect(() => {
      if (p)
        return n && (h.layersWithOutsidePointerEventsDisabled.size === 0 && (tp = x.body.style.pointerEvents, x.body.style.pointerEvents = "none"), h.layersWithOutsidePointerEventsDisabled.add(p)), h.layers.add(p), np(), () => {
          n && h.layersWithOutsidePointerEventsDisabled.size === 1 && (x.body.style.pointerEvents = tp);
        };
    }, [p, x, n, h]), w.useEffect(() => () => {
      p && (h.layers.delete(p), h.layersWithOutsidePointerEventsDisabled.delete(p), np());
    }, [p, h]), w.useEffect(() => {
      const $ = () => g({});
      return document.addEventListener(kc, $), () => document.removeEventListener(kc, $);
    }, []), /* @__PURE__ */ m.jsx(
      Ve.div,
      {
        ...d,
        ref: T,
        style: {
          pointerEvents: O ? N ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: Le(e.onFocusCapture, W.onFocusCapture),
        onBlurCapture: Le(e.onBlurCapture, W.onBlurCapture),
        onPointerDownCapture: Le(
          e.onPointerDownCapture,
          j.onPointerDownCapture
        )
      }
    );
  }
);
Pa.displayName = KP;
var XP = "DismissableLayerBranch", ZP = w.forwardRef((e, t) => {
  const n = w.useContext(tg), o = w.useRef(null), s = et(t, o);
  return w.useEffect(() => {
    const c = o.current;
    if (c)
      return n.branches.add(c), () => {
        n.branches.delete(c);
      };
  }, [n.branches]), /* @__PURE__ */ m.jsx(Ve.div, { ...e, ref: s });
});
ZP.displayName = XP;
function JP(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = nr(e), o = w.useRef(!1), s = w.useRef(() => {
  });
  return w.useEffect(() => {
    const c = (u) => {
      if (u.target && !o.current) {
        let d = function() {
          ng(
            YP,
            n,
            h,
            { discrete: !0 }
          );
        };
        const h = { originalEvent: u };
        u.pointerType === "touch" ? (t.removeEventListener("click", s.current), s.current = d, t.addEventListener("click", s.current, { once: !0 })) : d();
      } else
        t.removeEventListener("click", s.current);
      o.current = !1;
    }, l = window.setTimeout(() => {
      t.addEventListener("pointerdown", c);
    }, 0);
    return () => {
      window.clearTimeout(l), t.removeEventListener("pointerdown", c), t.removeEventListener("click", s.current);
    };
  }, [t, n]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => o.current = !0
  };
}
function QP(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = nr(e), o = w.useRef(!1);
  return w.useEffect(() => {
    const s = (c) => {
      c.target && !o.current && ng(qP, n, { originalEvent: c }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", s), () => t.removeEventListener("focusin", s);
  }, [t, n]), {
    onFocusCapture: () => o.current = !0,
    onBlurCapture: () => o.current = !1
  };
}
function np() {
  const e = new CustomEvent(kc);
  document.dispatchEvent(e);
}
function ng(e, t, n, { discrete: o }) {
  const s = n.originalEvent.target, c = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && s.addEventListener(e, t, { once: !0 }), o ? zP(s, c) : s.dispatchEvent(c);
}
var uc = 0;
function rg() {
  w.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? rp()), document.body.insertAdjacentElement("beforeend", e[1] ?? rp()), uc++, () => {
      uc === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), uc--;
    };
  }, []);
}
function rp() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var dc = "focusScope.autoFocusOnMount", fc = "focusScope.autoFocusOnUnmount", ip = { bubbles: !1, cancelable: !0 }, eA = "FocusScope", pu = w.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: o = !1,
    onMountAutoFocus: s,
    onUnmountAutoFocus: c,
    ...l
  } = e, [u, d] = w.useState(null), h = nr(s), p = nr(c), v = w.useRef(null), x = et(t, (S) => d(S)), g = w.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  w.useEffect(() => {
    if (o) {
      let S = function(O) {
        if (g.paused || !u)
          return;
        const N = O.target;
        u.contains(N) ? v.current = N : br(v.current, { select: !0 });
      }, _ = function(O) {
        if (g.paused || !u)
          return;
        const N = O.relatedTarget;
        N !== null && (u.contains(N) || br(v.current, { select: !0 }));
      }, P = function(O) {
        if (document.activeElement === document.body)
          for (const j of O)
            j.removedNodes.length > 0 && br(u);
      };
      document.addEventListener("focusin", S), document.addEventListener("focusout", _);
      const E = new MutationObserver(P);
      return u && E.observe(u, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", S), document.removeEventListener("focusout", _), E.disconnect();
      };
    }
  }, [o, u, g.paused]), w.useEffect(() => {
    if (u) {
      sp.add(g);
      const S = document.activeElement;
      if (!u.contains(S)) {
        const P = new CustomEvent(dc, ip);
        u.addEventListener(dc, h), u.dispatchEvent(P), P.defaultPrevented || (tA(sA(ig(u)), { select: !0 }), document.activeElement === S && br(u));
      }
      return () => {
        u.removeEventListener(dc, h), setTimeout(() => {
          const P = new CustomEvent(fc, ip);
          u.addEventListener(fc, p), u.dispatchEvent(P), P.defaultPrevented || br(S ?? document.body, { select: !0 }), u.removeEventListener(fc, p), sp.remove(g);
        }, 0);
      };
    }
  }, [u, h, p, g]);
  const T = w.useCallback(
    (S) => {
      if (!n && !o || g.paused)
        return;
      const _ = S.key === "Tab" && !S.altKey && !S.ctrlKey && !S.metaKey, P = document.activeElement;
      if (_ && P) {
        const E = S.currentTarget, [O, N] = nA(E);
        O && N ? !S.shiftKey && P === N ? (S.preventDefault(), n && br(O, { select: !0 })) : S.shiftKey && P === O && (S.preventDefault(), n && br(N, { select: !0 })) : P === E && S.preventDefault();
      }
    },
    [n, o, g.paused]
  );
  return /* @__PURE__ */ m.jsx(Ve.div, { tabIndex: -1, ...l, ref: x, onKeyDown: T });
});
pu.displayName = eA;
function tA(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const o of e)
    if (br(o, { select: t }), document.activeElement !== n)
      return;
}
function nA(e) {
  const t = ig(e), n = op(t, e), o = op(t.reverse(), e);
  return [n, o];
}
function ig(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (o) => {
      const s = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || s ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}
function op(e, t) {
  for (const n of e)
    if (!rA(n, { upTo: t }))
      return n;
}
function rA(e, { upTo: t }) {
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
function iA(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function br(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && iA(e) && t && e.select();
  }
}
var sp = oA();
function oA() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = ap(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = ap(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function ap(e, t) {
  const n = [...e], o = n.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
function sA(e) {
  return e.filter((t) => t.tagName !== "A");
}
var kt = globalThis != null && globalThis.document ? w.useLayoutEffect : () => {
}, aA = w.useId || (() => {
}), lA = 0;
function ti(e) {
  const [t, n] = w.useState(aA());
  return kt(() => {
    n((o) => o ?? String(lA++));
  }, [e]), t ? `radix-${t}` : "";
}
const cA = ["top", "right", "bottom", "left"], Er = Math.min, en = Math.max, ia = Math.round, Fs = Math.floor, In = (e) => ({
  x: e,
  y: e
}), uA = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, dA = {
  start: "end",
  end: "start"
};
function Vc(e, t, n) {
  return en(e, Er(t, n));
}
function rr(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function ir(e) {
  return e.split("-")[0];
}
function Yi(e) {
  return e.split("-")[1];
}
function mu(e) {
  return e === "x" ? "y" : "x";
}
function gu(e) {
  return e === "y" ? "height" : "width";
}
function Rr(e) {
  return ["top", "bottom"].includes(ir(e)) ? "y" : "x";
}
function vu(e) {
  return mu(Rr(e));
}
function fA(e, t, n) {
  n === void 0 && (n = !1);
  const o = Yi(e), s = vu(e), c = gu(s);
  let l = s === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[c] > t.floating[c] && (l = oa(l)), [l, oa(l)];
}
function hA(e) {
  const t = oa(e);
  return [Fc(e), t, Fc(t)];
}
function Fc(e) {
  return e.replace(/start|end/g, (t) => dA[t]);
}
function pA(e, t, n) {
  const o = ["left", "right"], s = ["right", "left"], c = ["top", "bottom"], l = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? s : o : t ? o : s;
    case "left":
    case "right":
      return t ? c : l;
    default:
      return [];
  }
}
function mA(e, t, n, o) {
  const s = Yi(e);
  let c = pA(ir(e), n === "start", o);
  return s && (c = c.map((l) => l + "-" + s), t && (c = c.concat(c.map(Fc)))), c;
}
function oa(e) {
  return e.replace(/left|right|bottom|top/g, (t) => uA[t]);
}
function gA(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function og(e) {
  return typeof e != "number" ? gA(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function sa(e) {
  const {
    x: t,
    y: n,
    width: o,
    height: s
  } = e;
  return {
    width: o,
    height: s,
    top: n,
    left: t,
    right: t + o,
    bottom: n + s,
    x: t,
    y: n
  };
}
function lp(e, t, n) {
  let {
    reference: o,
    floating: s
  } = e;
  const c = Rr(t), l = vu(t), u = gu(l), d = ir(t), h = c === "y", p = o.x + o.width / 2 - s.width / 2, v = o.y + o.height / 2 - s.height / 2, x = o[u] / 2 - s[u] / 2;
  let g;
  switch (d) {
    case "top":
      g = {
        x: p,
        y: o.y - s.height
      };
      break;
    case "bottom":
      g = {
        x: p,
        y: o.y + o.height
      };
      break;
    case "right":
      g = {
        x: o.x + o.width,
        y: v
      };
      break;
    case "left":
      g = {
        x: o.x - s.width,
        y: v
      };
      break;
    default:
      g = {
        x: o.x,
        y: o.y
      };
  }
  switch (Yi(t)) {
    case "start":
      g[l] -= x * (n && h ? -1 : 1);
      break;
    case "end":
      g[l] += x * (n && h ? -1 : 1);
      break;
  }
  return g;
}
const vA = async (e, t, n) => {
  const {
    placement: o = "bottom",
    strategy: s = "absolute",
    middleware: c = [],
    platform: l
  } = n, u = c.filter(Boolean), d = await (l.isRTL == null ? void 0 : l.isRTL(t));
  let h = await l.getElementRects({
    reference: e,
    floating: t,
    strategy: s
  }), {
    x: p,
    y: v
  } = lp(h, o, d), x = o, g = {}, T = 0;
  for (let S = 0; S < u.length; S++) {
    const {
      name: _,
      fn: P
    } = u[S], {
      x: E,
      y: O,
      data: N,
      reset: j
    } = await P({
      x: p,
      y: v,
      initialPlacement: o,
      placement: x,
      strategy: s,
      middlewareData: g,
      rects: h,
      platform: l,
      elements: {
        reference: e,
        floating: t
      }
    });
    p = E ?? p, v = O ?? v, g = {
      ...g,
      [_]: {
        ...g[_],
        ...N
      }
    }, j && T <= 50 && (T++, typeof j == "object" && (j.placement && (x = j.placement), j.rects && (h = j.rects === !0 ? await l.getElementRects({
      reference: e,
      floating: t,
      strategy: s
    }) : j.rects), {
      x: p,
      y: v
    } = lp(h, x, d)), S = -1);
  }
  return {
    x: p,
    y: v,
    placement: x,
    strategy: s,
    middlewareData: g
  };
};
async function jo(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: o,
    y: s,
    platform: c,
    rects: l,
    elements: u,
    strategy: d
  } = e, {
    boundary: h = "clippingAncestors",
    rootBoundary: p = "viewport",
    elementContext: v = "floating",
    altBoundary: x = !1,
    padding: g = 0
  } = rr(t, e), T = og(g), _ = u[x ? v === "floating" ? "reference" : "floating" : v], P = sa(await c.getClippingRect({
    element: (n = await (c.isElement == null ? void 0 : c.isElement(_))) == null || n ? _ : _.contextElement || await (c.getDocumentElement == null ? void 0 : c.getDocumentElement(u.floating)),
    boundary: h,
    rootBoundary: p,
    strategy: d
  })), E = v === "floating" ? {
    x: o,
    y: s,
    width: l.floating.width,
    height: l.floating.height
  } : l.reference, O = await (c.getOffsetParent == null ? void 0 : c.getOffsetParent(u.floating)), N = await (c.isElement == null ? void 0 : c.isElement(O)) ? await (c.getScale == null ? void 0 : c.getScale(O)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, j = sa(c.convertOffsetParentRelativeRectToViewportRelativeRect ? await c.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: u,
    rect: E,
    offsetParent: O,
    strategy: d
  }) : E);
  return {
    top: (P.top - j.top + T.top) / N.y,
    bottom: (j.bottom - P.bottom + T.bottom) / N.y,
    left: (P.left - j.left + T.left) / N.x,
    right: (j.right - P.right + T.right) / N.x
  };
}
const yA = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: o,
      placement: s,
      rects: c,
      platform: l,
      elements: u,
      middlewareData: d
    } = t, {
      element: h,
      padding: p = 0
    } = rr(e, t) || {};
    if (h == null)
      return {};
    const v = og(p), x = {
      x: n,
      y: o
    }, g = vu(s), T = gu(g), S = await l.getDimensions(h), _ = g === "y", P = _ ? "top" : "left", E = _ ? "bottom" : "right", O = _ ? "clientHeight" : "clientWidth", N = c.reference[T] + c.reference[g] - x[g] - c.floating[T], j = x[g] - c.reference[g], W = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(h));
    let $ = W ? W[O] : 0;
    (!$ || !await (l.isElement == null ? void 0 : l.isElement(W))) && ($ = u.floating[O] || c.floating[T]);
    const H = N / 2 - j / 2, te = $ / 2 - S[T] / 2 - 1, re = Er(v[P], te), fe = Er(v[E], te), J = re, se = $ - S[T] - fe, ne = $ / 2 - S[T] / 2 + H, Te = Vc(J, ne, se), ie = !d.arrow && Yi(s) != null && ne !== Te && c.reference[T] / 2 - (ne < J ? re : fe) - S[T] / 2 < 0, Z = ie ? ne < J ? ne - J : ne - se : 0;
    return {
      [g]: x[g] + Z,
      data: {
        [g]: Te,
        centerOffset: ne - Te - Z,
        ...ie && {
          alignmentOffset: Z
        }
      },
      reset: ie
    };
  }
}), xA = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, o;
      const {
        placement: s,
        middlewareData: c,
        rects: l,
        initialPlacement: u,
        platform: d,
        elements: h
      } = t, {
        mainAxis: p = !0,
        crossAxis: v = !0,
        fallbackPlacements: x,
        fallbackStrategy: g = "bestFit",
        fallbackAxisSideDirection: T = "none",
        flipAlignment: S = !0,
        ..._
      } = rr(e, t);
      if ((n = c.arrow) != null && n.alignmentOffset)
        return {};
      const P = ir(s), E = Rr(u), O = ir(u) === u, N = await (d.isRTL == null ? void 0 : d.isRTL(h.floating)), j = x || (O || !S ? [oa(u)] : hA(u)), W = T !== "none";
      !x && W && j.push(...mA(u, S, T, N));
      const $ = [u, ...j], H = await jo(t, _), te = [];
      let re = ((o = c.flip) == null ? void 0 : o.overflows) || [];
      if (p && te.push(H[P]), v) {
        const ne = fA(s, l, N);
        te.push(H[ne[0]], H[ne[1]]);
      }
      if (re = [...re, {
        placement: s,
        overflows: te
      }], !te.every((ne) => ne <= 0)) {
        var fe, J;
        const ne = (((fe = c.flip) == null ? void 0 : fe.index) || 0) + 1, Te = $[ne];
        if (Te)
          return {
            data: {
              index: ne,
              overflows: re
            },
            reset: {
              placement: Te
            }
          };
        let ie = (J = re.filter((Z) => Z.overflows[0] <= 0).sort((Z, q) => Z.overflows[1] - q.overflows[1])[0]) == null ? void 0 : J.placement;
        if (!ie)
          switch (g) {
            case "bestFit": {
              var se;
              const Z = (se = re.filter((q) => {
                if (W) {
                  const G = Rr(q.placement);
                  return G === E || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  G === "y";
                }
                return !0;
              }).map((q) => [q.placement, q.overflows.filter((G) => G > 0).reduce((G, pe) => G + pe, 0)]).sort((q, G) => q[1] - G[1])[0]) == null ? void 0 : se[0];
              Z && (ie = Z);
              break;
            }
            case "initialPlacement":
              ie = u;
              break;
          }
        if (s !== ie)
          return {
            reset: {
              placement: ie
            }
          };
      }
      return {};
    }
  };
};
function cp(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function up(e) {
  return cA.some((t) => e[t] >= 0);
}
const bA = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: o = "referenceHidden",
        ...s
      } = rr(e, t);
      switch (o) {
        case "referenceHidden": {
          const c = await jo(t, {
            ...s,
            elementContext: "reference"
          }), l = cp(c, n.reference);
          return {
            data: {
              referenceHiddenOffsets: l,
              referenceHidden: up(l)
            }
          };
        }
        case "escaped": {
          const c = await jo(t, {
            ...s,
            altBoundary: !0
          }), l = cp(c, n.floating);
          return {
            data: {
              escapedOffsets: l,
              escaped: up(l)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function wA(e, t) {
  const {
    placement: n,
    platform: o,
    elements: s
  } = e, c = await (o.isRTL == null ? void 0 : o.isRTL(s.floating)), l = ir(n), u = Yi(n), d = Rr(n) === "y", h = ["left", "top"].includes(l) ? -1 : 1, p = c && d ? -1 : 1, v = rr(t, e);
  let {
    mainAxis: x,
    crossAxis: g,
    alignmentAxis: T
  } = typeof v == "number" ? {
    mainAxis: v,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: v.mainAxis || 0,
    crossAxis: v.crossAxis || 0,
    alignmentAxis: v.alignmentAxis
  };
  return u && typeof T == "number" && (g = u === "end" ? T * -1 : T), d ? {
    x: g * p,
    y: x * h
  } : {
    x: x * h,
    y: g * p
  };
}
const SA = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, o;
      const {
        x: s,
        y: c,
        placement: l,
        middlewareData: u
      } = t, d = await wA(t, e);
      return l === ((n = u.offset) == null ? void 0 : n.placement) && (o = u.arrow) != null && o.alignmentOffset ? {} : {
        x: s + d.x,
        y: c + d.y,
        data: {
          ...d,
          placement: l
        }
      };
    }
  };
}, CA = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: o,
        placement: s
      } = t, {
        mainAxis: c = !0,
        crossAxis: l = !1,
        limiter: u = {
          fn: (_) => {
            let {
              x: P,
              y: E
            } = _;
            return {
              x: P,
              y: E
            };
          }
        },
        ...d
      } = rr(e, t), h = {
        x: n,
        y: o
      }, p = await jo(t, d), v = Rr(ir(s)), x = mu(v);
      let g = h[x], T = h[v];
      if (c) {
        const _ = x === "y" ? "top" : "left", P = x === "y" ? "bottom" : "right", E = g + p[_], O = g - p[P];
        g = Vc(E, g, O);
      }
      if (l) {
        const _ = v === "y" ? "top" : "left", P = v === "y" ? "bottom" : "right", E = T + p[_], O = T - p[P];
        T = Vc(E, T, O);
      }
      const S = u.fn({
        ...t,
        [x]: g,
        [v]: T
      });
      return {
        ...S,
        data: {
          x: S.x - n,
          y: S.y - o,
          enabled: {
            [x]: c,
            [v]: l
          }
        }
      };
    }
  };
}, TA = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: o,
        placement: s,
        rects: c,
        middlewareData: l
      } = t, {
        offset: u = 0,
        mainAxis: d = !0,
        crossAxis: h = !0
      } = rr(e, t), p = {
        x: n,
        y: o
      }, v = Rr(s), x = mu(v);
      let g = p[x], T = p[v];
      const S = rr(u, t), _ = typeof S == "number" ? {
        mainAxis: S,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...S
      };
      if (d) {
        const O = x === "y" ? "height" : "width", N = c.reference[x] - c.floating[O] + _.mainAxis, j = c.reference[x] + c.reference[O] - _.mainAxis;
        g < N ? g = N : g > j && (g = j);
      }
      if (h) {
        var P, E;
        const O = x === "y" ? "width" : "height", N = ["top", "left"].includes(ir(s)), j = c.reference[v] - c.floating[O] + (N && ((P = l.offset) == null ? void 0 : P[v]) || 0) + (N ? 0 : _.crossAxis), W = c.reference[v] + c.reference[O] + (N ? 0 : ((E = l.offset) == null ? void 0 : E[v]) || 0) - (N ? _.crossAxis : 0);
        T < j ? T = j : T > W && (T = W);
      }
      return {
        [x]: g,
        [v]: T
      };
    }
  };
}, _A = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var n, o;
      const {
        placement: s,
        rects: c,
        platform: l,
        elements: u
      } = t, {
        apply: d = () => {
        },
        ...h
      } = rr(e, t), p = await jo(t, h), v = ir(s), x = Yi(s), g = Rr(s) === "y", {
        width: T,
        height: S
      } = c.floating;
      let _, P;
      v === "top" || v === "bottom" ? (_ = v, P = x === (await (l.isRTL == null ? void 0 : l.isRTL(u.floating)) ? "start" : "end") ? "left" : "right") : (P = v, _ = x === "end" ? "top" : "bottom");
      const E = S - p.top - p.bottom, O = T - p.left - p.right, N = Er(S - p[_], E), j = Er(T - p[P], O), W = !t.middlewareData.shift;
      let $ = N, H = j;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (H = O), (o = t.middlewareData.shift) != null && o.enabled.y && ($ = E), W && !x) {
        const re = en(p.left, 0), fe = en(p.right, 0), J = en(p.top, 0), se = en(p.bottom, 0);
        g ? H = T - 2 * (re !== 0 || fe !== 0 ? re + fe : en(p.left, p.right)) : $ = S - 2 * (J !== 0 || se !== 0 ? J + se : en(p.top, p.bottom));
      }
      await d({
        ...t,
        availableWidth: H,
        availableHeight: $
      });
      const te = await l.getDimensions(u.floating);
      return T !== te.width || S !== te.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Aa() {
  return typeof window < "u";
}
function qi(e) {
  return sg(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function tn(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Bn(e) {
  var t;
  return (t = (sg(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function sg(e) {
  return Aa() ? e instanceof Node || e instanceof tn(e).Node : !1;
}
function Sn(e) {
  return Aa() ? e instanceof Element || e instanceof tn(e).Element : !1;
}
function Fn(e) {
  return Aa() ? e instanceof HTMLElement || e instanceof tn(e).HTMLElement : !1;
}
function dp(e) {
  return !Aa() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof tn(e).ShadowRoot;
}
function Uo(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: o,
    display: s
  } = Cn(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + n) && !["inline", "contents"].includes(s);
}
function PA(e) {
  return ["table", "td", "th"].includes(qi(e));
}
function Ea(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function yu(e) {
  const t = xu(), n = Sn(e) ? Cn(e) : e;
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((o) => (n.willChange || "").includes(o)) || ["paint", "layout", "strict", "content"].some((o) => (n.contain || "").includes(o));
}
function AA(e) {
  let t = Nr(e);
  for (; Fn(t) && !Wi(t); ) {
    if (yu(t))
      return t;
    if (Ea(t))
      return null;
    t = Nr(t);
  }
  return null;
}
function xu() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Wi(e) {
  return ["html", "body", "#document"].includes(qi(e));
}
function Cn(e) {
  return tn(e).getComputedStyle(e);
}
function Ra(e) {
  return Sn(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Nr(e) {
  if (qi(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    dp(e) && e.host || // Fallback.
    Bn(e)
  );
  return dp(t) ? t.host : t;
}
function ag(e) {
  const t = Nr(e);
  return Wi(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Fn(t) && Uo(t) ? t : ag(t);
}
function Io(e, t, n) {
  var o;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const s = ag(e), c = s === ((o = e.ownerDocument) == null ? void 0 : o.body), l = tn(s);
  if (c) {
    const u = Bc(l);
    return t.concat(l, l.visualViewport || [], Uo(s) ? s : [], u && n ? Io(u) : []);
  }
  return t.concat(s, Io(s, [], n));
}
function Bc(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function lg(e) {
  const t = Cn(e);
  let n = parseFloat(t.width) || 0, o = parseFloat(t.height) || 0;
  const s = Fn(e), c = s ? e.offsetWidth : n, l = s ? e.offsetHeight : o, u = ia(n) !== c || ia(o) !== l;
  return u && (n = c, o = l), {
    width: n,
    height: o,
    $: u
  };
}
function bu(e) {
  return Sn(e) ? e : e.contextElement;
}
function Fi(e) {
  const t = bu(e);
  if (!Fn(t))
    return In(1);
  const n = t.getBoundingClientRect(), {
    width: o,
    height: s,
    $: c
  } = lg(t);
  let l = (c ? ia(n.width) : n.width) / o, u = (c ? ia(n.height) : n.height) / s;
  return (!l || !Number.isFinite(l)) && (l = 1), (!u || !Number.isFinite(u)) && (u = 1), {
    x: l,
    y: u
  };
}
const EA = /* @__PURE__ */ In(0);
function cg(e) {
  const t = tn(e);
  return !xu() || !t.visualViewport ? EA : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function RA(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== tn(e) ? !1 : t;
}
function ii(e, t, n, o) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const s = e.getBoundingClientRect(), c = bu(e);
  let l = In(1);
  t && (o ? Sn(o) && (l = Fi(o)) : l = Fi(e));
  const u = RA(c, n, o) ? cg(c) : In(0);
  let d = (s.left + u.x) / l.x, h = (s.top + u.y) / l.y, p = s.width / l.x, v = s.height / l.y;
  if (c) {
    const x = tn(c), g = o && Sn(o) ? tn(o) : o;
    let T = x, S = Bc(T);
    for (; S && o && g !== T; ) {
      const _ = Fi(S), P = S.getBoundingClientRect(), E = Cn(S), O = P.left + (S.clientLeft + parseFloat(E.paddingLeft)) * _.x, N = P.top + (S.clientTop + parseFloat(E.paddingTop)) * _.y;
      d *= _.x, h *= _.y, p *= _.x, v *= _.y, d += O, h += N, T = tn(S), S = Bc(T);
    }
  }
  return sa({
    width: p,
    height: v,
    x: d,
    y: h
  });
}
function wu(e, t) {
  const n = Ra(e).scrollLeft;
  return t ? t.left + n : ii(Bn(e)).left + n;
}
function ug(e, t, n) {
  n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), s = o.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    wu(e, o)
  )), c = o.top + t.scrollTop;
  return {
    x: s,
    y: c
  };
}
function NA(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: o,
    strategy: s
  } = e;
  const c = s === "fixed", l = Bn(o), u = t ? Ea(t.floating) : !1;
  if (o === l || u && c)
    return n;
  let d = {
    scrollLeft: 0,
    scrollTop: 0
  }, h = In(1);
  const p = In(0), v = Fn(o);
  if ((v || !v && !c) && ((qi(o) !== "body" || Uo(l)) && (d = Ra(o)), Fn(o))) {
    const g = ii(o);
    h = Fi(o), p.x = g.x + o.clientLeft, p.y = g.y + o.clientTop;
  }
  const x = l && !v && !c ? ug(l, d, !0) : In(0);
  return {
    width: n.width * h.x,
    height: n.height * h.y,
    x: n.x * h.x - d.scrollLeft * h.x + p.x + x.x,
    y: n.y * h.y - d.scrollTop * h.y + p.y + x.y
  };
}
function MA(e) {
  return Array.from(e.getClientRects());
}
function OA(e) {
  const t = Bn(e), n = Ra(e), o = e.ownerDocument.body, s = en(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth), c = en(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight);
  let l = -n.scrollLeft + wu(e);
  const u = -n.scrollTop;
  return Cn(o).direction === "rtl" && (l += en(t.clientWidth, o.clientWidth) - s), {
    width: s,
    height: c,
    x: l,
    y: u
  };
}
function DA(e, t) {
  const n = tn(e), o = Bn(e), s = n.visualViewport;
  let c = o.clientWidth, l = o.clientHeight, u = 0, d = 0;
  if (s) {
    c = s.width, l = s.height;
    const h = xu();
    (!h || h && t === "fixed") && (u = s.offsetLeft, d = s.offsetTop);
  }
  return {
    width: c,
    height: l,
    x: u,
    y: d
  };
}
function jA(e, t) {
  const n = ii(e, !0, t === "fixed"), o = n.top + e.clientTop, s = n.left + e.clientLeft, c = Fn(e) ? Fi(e) : In(1), l = e.clientWidth * c.x, u = e.clientHeight * c.y, d = s * c.x, h = o * c.y;
  return {
    width: l,
    height: u,
    x: d,
    y: h
  };
}
function fp(e, t, n) {
  let o;
  if (t === "viewport")
    o = DA(e, n);
  else if (t === "document")
    o = OA(Bn(e));
  else if (Sn(t))
    o = jA(t, n);
  else {
    const s = cg(e);
    o = {
      x: t.x - s.x,
      y: t.y - s.y,
      width: t.width,
      height: t.height
    };
  }
  return sa(o);
}
function dg(e, t) {
  const n = Nr(e);
  return n === t || !Sn(n) || Wi(n) ? !1 : Cn(n).position === "fixed" || dg(n, t);
}
function IA(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let o = Io(e, [], !1).filter((u) => Sn(u) && qi(u) !== "body"), s = null;
  const c = Cn(e).position === "fixed";
  let l = c ? Nr(e) : e;
  for (; Sn(l) && !Wi(l); ) {
    const u = Cn(l), d = yu(l);
    !d && u.position === "fixed" && (s = null), (c ? !d && !s : !d && u.position === "static" && !!s && ["absolute", "fixed"].includes(s.position) || Uo(l) && !d && dg(e, l)) ? o = o.filter((p) => p !== l) : s = u, l = Nr(l);
  }
  return t.set(e, o), o;
}
function LA(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: o,
    strategy: s
  } = e;
  const l = [...n === "clippingAncestors" ? Ea(t) ? [] : IA(t, this._c) : [].concat(n), o], u = l[0], d = l.reduce((h, p) => {
    const v = fp(t, p, s);
    return h.top = en(v.top, h.top), h.right = Er(v.right, h.right), h.bottom = Er(v.bottom, h.bottom), h.left = en(v.left, h.left), h;
  }, fp(t, u, s));
  return {
    width: d.right - d.left,
    height: d.bottom - d.top,
    x: d.left,
    y: d.top
  };
}
function kA(e) {
  const {
    width: t,
    height: n
  } = lg(e);
  return {
    width: t,
    height: n
  };
}
function VA(e, t, n) {
  const o = Fn(t), s = Bn(t), c = n === "fixed", l = ii(e, !0, c, t);
  let u = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const d = In(0);
  if (o || !o && !c)
    if ((qi(t) !== "body" || Uo(s)) && (u = Ra(t)), o) {
      const x = ii(t, !0, c, t);
      d.x = x.x + t.clientLeft, d.y = x.y + t.clientTop;
    } else
      s && (d.x = wu(s));
  const h = s && !o && !c ? ug(s, u) : In(0), p = l.left + u.scrollLeft - d.x - h.x, v = l.top + u.scrollTop - d.y - h.y;
  return {
    x: p,
    y: v,
    width: l.width,
    height: l.height
  };
}
function hc(e) {
  return Cn(e).position === "static";
}
function hp(e, t) {
  if (!Fn(e) || Cn(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Bn(e) === n && (n = n.ownerDocument.body), n;
}
function fg(e, t) {
  const n = tn(e);
  if (Ea(e))
    return n;
  if (!Fn(e)) {
    let s = Nr(e);
    for (; s && !Wi(s); ) {
      if (Sn(s) && !hc(s))
        return s;
      s = Nr(s);
    }
    return n;
  }
  let o = hp(e, t);
  for (; o && PA(o) && hc(o); )
    o = hp(o, t);
  return o && Wi(o) && hc(o) && !yu(o) ? n : o || AA(e) || n;
}
const FA = async function(e) {
  const t = this.getOffsetParent || fg, n = this.getDimensions, o = await n(e.floating);
  return {
    reference: VA(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: o.width,
      height: o.height
    }
  };
};
function BA(e) {
  return Cn(e).direction === "rtl";
}
const WA = {
  convertOffsetParentRelativeRectToViewportRelativeRect: NA,
  getDocumentElement: Bn,
  getClippingRect: LA,
  getOffsetParent: fg,
  getElementRects: FA,
  getClientRects: MA,
  getDimensions: kA,
  getScale: Fi,
  isElement: Sn,
  isRTL: BA
};
function $A(e, t) {
  let n = null, o;
  const s = Bn(e);
  function c() {
    var u;
    clearTimeout(o), (u = n) == null || u.disconnect(), n = null;
  }
  function l(u, d) {
    u === void 0 && (u = !1), d === void 0 && (d = 1), c();
    const {
      left: h,
      top: p,
      width: v,
      height: x
    } = e.getBoundingClientRect();
    if (u || t(), !v || !x)
      return;
    const g = Fs(p), T = Fs(s.clientWidth - (h + v)), S = Fs(s.clientHeight - (p + x)), _ = Fs(h), E = {
      rootMargin: -g + "px " + -T + "px " + -S + "px " + -_ + "px",
      threshold: en(0, Er(1, d)) || 1
    };
    let O = !0;
    function N(j) {
      const W = j[0].intersectionRatio;
      if (W !== d) {
        if (!O)
          return l();
        W ? l(!1, W) : o = setTimeout(() => {
          l(!1, 1e-7);
        }, 1e3);
      }
      O = !1;
    }
    try {
      n = new IntersectionObserver(N, {
        ...E,
        // Handle <iframe>s
        root: s.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(N, E);
    }
    n.observe(e);
  }
  return l(!0), c;
}
function UA(e, t, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: s = !0,
    ancestorResize: c = !0,
    elementResize: l = typeof ResizeObserver == "function",
    layoutShift: u = typeof IntersectionObserver == "function",
    animationFrame: d = !1
  } = o, h = bu(e), p = s || c ? [...h ? Io(h) : [], ...Io(t)] : [];
  p.forEach((P) => {
    s && P.addEventListener("scroll", n, {
      passive: !0
    }), c && P.addEventListener("resize", n);
  });
  const v = h && u ? $A(h, n) : null;
  let x = -1, g = null;
  l && (g = new ResizeObserver((P) => {
    let [E] = P;
    E && E.target === h && g && (g.unobserve(t), cancelAnimationFrame(x), x = requestAnimationFrame(() => {
      var O;
      (O = g) == null || O.observe(t);
    })), n();
  }), h && !d && g.observe(h), g.observe(t));
  let T, S = d ? ii(e) : null;
  d && _();
  function _() {
    const P = ii(e);
    S && (P.x !== S.x || P.y !== S.y || P.width !== S.width || P.height !== S.height) && n(), S = P, T = requestAnimationFrame(_);
  }
  return n(), () => {
    var P;
    p.forEach((E) => {
      s && E.removeEventListener("scroll", n), c && E.removeEventListener("resize", n);
    }), v == null || v(), (P = g) == null || P.disconnect(), g = null, d && cancelAnimationFrame(T);
  };
}
const HA = SA, zA = CA, GA = xA, KA = _A, YA = bA, pp = yA, qA = TA, XA = (e, t, n) => {
  const o = /* @__PURE__ */ new Map(), s = {
    platform: WA,
    ...n
  }, c = {
    ...s.platform,
    _c: o
  };
  return vA(e, t, {
    ...s,
    platform: c
  });
};
var Xs = typeof document < "u" ? Fm : Wo;
function aa(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, o, s;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n !== t.length)
        return !1;
      for (o = n; o-- !== 0; )
        if (!aa(e[o], t[o]))
          return !1;
      return !0;
    }
    if (s = Object.keys(e), n = s.length, n !== Object.keys(t).length)
      return !1;
    for (o = n; o-- !== 0; )
      if (!{}.hasOwnProperty.call(t, s[o]))
        return !1;
    for (o = n; o-- !== 0; ) {
      const c = s[o];
      if (!(c === "_owner" && e.$$typeof) && !aa(e[c], t[c]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function hg(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function mp(e, t) {
  const n = hg(e);
  return Math.round(t * n) / n;
}
function pc(e) {
  const t = w.useRef(e);
  return Xs(() => {
    t.current = e;
  }), t;
}
function ZA(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: o = [],
    platform: s,
    elements: {
      reference: c,
      floating: l
    } = {},
    transform: u = !0,
    whileElementsMounted: d,
    open: h
  } = e, [p, v] = w.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [x, g] = w.useState(o);
  aa(x, o) || g(o);
  const [T, S] = w.useState(null), [_, P] = w.useState(null), E = w.useCallback((q) => {
    q !== W.current && (W.current = q, S(q));
  }, []), O = w.useCallback((q) => {
    q !== $.current && ($.current = q, P(q));
  }, []), N = c || T, j = l || _, W = w.useRef(null), $ = w.useRef(null), H = w.useRef(p), te = d != null, re = pc(d), fe = pc(s), J = pc(h), se = w.useCallback(() => {
    if (!W.current || !$.current)
      return;
    const q = {
      placement: t,
      strategy: n,
      middleware: x
    };
    fe.current && (q.platform = fe.current), XA(W.current, $.current, q).then((G) => {
      const pe = {
        ...G,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: J.current !== !1
      };
      ne.current && !aa(H.current, pe) && (H.current = pe, Sa.flushSync(() => {
        v(pe);
      }));
    });
  }, [x, t, n, fe, J]);
  Xs(() => {
    h === !1 && H.current.isPositioned && (H.current.isPositioned = !1, v((q) => ({
      ...q,
      isPositioned: !1
    })));
  }, [h]);
  const ne = w.useRef(!1);
  Xs(() => (ne.current = !0, () => {
    ne.current = !1;
  }), []), Xs(() => {
    if (N && (W.current = N), j && ($.current = j), N && j) {
      if (re.current)
        return re.current(N, j, se);
      se();
    }
  }, [N, j, se, re, te]);
  const Te = w.useMemo(() => ({
    reference: W,
    floating: $,
    setReference: E,
    setFloating: O
  }), [E, O]), ie = w.useMemo(() => ({
    reference: N,
    floating: j
  }), [N, j]), Z = w.useMemo(() => {
    const q = {
      position: n,
      left: 0,
      top: 0
    };
    if (!ie.floating)
      return q;
    const G = mp(ie.floating, p.x), pe = mp(ie.floating, p.y);
    return u ? {
      ...q,
      transform: "translate(" + G + "px, " + pe + "px)",
      ...hg(ie.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: G,
      top: pe
    };
  }, [n, u, ie.floating, p.x, p.y]);
  return w.useMemo(() => ({
    ...p,
    update: se,
    refs: Te,
    elements: ie,
    floatingStyles: Z
  }), [p, se, Te, ie, Z]);
}
const JA = (e) => {
  function t(n) {
    return {}.hasOwnProperty.call(n, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(n) {
      const {
        element: o,
        padding: s
      } = typeof e == "function" ? e(n) : e;
      return o && t(o) ? o.current != null ? pp({
        element: o.current,
        padding: s
      }).fn(n) : {} : o ? pp({
        element: o,
        padding: s
      }).fn(n) : {};
    }
  };
}, QA = (e, t) => ({
  ...HA(e),
  options: [e, t]
}), eE = (e, t) => ({
  ...zA(e),
  options: [e, t]
}), tE = (e, t) => ({
  ...qA(e),
  options: [e, t]
}), nE = (e, t) => ({
  ...GA(e),
  options: [e, t]
}), rE = (e, t) => ({
  ...KA(e),
  options: [e, t]
}), iE = (e, t) => ({
  ...YA(e),
  options: [e, t]
}), oE = (e, t) => ({
  ...JA(e),
  options: [e, t]
});
var sE = "Arrow", pg = w.forwardRef((e, t) => {
  const { children: n, width: o = 10, height: s = 5, ...c } = e;
  return /* @__PURE__ */ m.jsx(
    Ve.svg,
    {
      ...c,
      ref: t,
      width: o,
      height: s,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : /* @__PURE__ */ m.jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
pg.displayName = sE;
var aE = pg;
function lE(e, t = []) {
  let n = [];
  function o(c, l) {
    const u = w.createContext(l), d = n.length;
    n = [...n, l];
    function h(v) {
      const { scope: x, children: g, ...T } = v, S = (x == null ? void 0 : x[e][d]) || u, _ = w.useMemo(() => T, Object.values(T));
      return /* @__PURE__ */ m.jsx(S.Provider, { value: _, children: g });
    }
    function p(v, x) {
      const g = (x == null ? void 0 : x[e][d]) || u, T = w.useContext(g);
      if (T)
        return T;
      if (l !== void 0)
        return l;
      throw new Error(`\`${v}\` must be used within \`${c}\``);
    }
    return h.displayName = c + "Provider", [h, p];
  }
  const s = () => {
    const c = n.map((l) => w.createContext(l));
    return function(u) {
      const d = (u == null ? void 0 : u[e]) || c;
      return w.useMemo(
        () => ({ [`__scope${e}`]: { ...u, [e]: d } }),
        [u, d]
      );
    };
  };
  return s.scopeName = e, [o, cE(s, ...t)];
}
function cE(...e) {
  const t = e[0];
  if (e.length === 1)
    return t;
  const n = () => {
    const o = e.map((s) => ({
      useScope: s(),
      scopeName: s.scopeName
    }));
    return function(c) {
      const l = o.reduce((u, { useScope: d, scopeName: h }) => {
        const v = d(c)[`__scope${h}`];
        return { ...u, ...v };
      }, {});
      return w.useMemo(() => ({ [`__scope${t.scopeName}`]: l }), [l]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
function mg(e) {
  const [t, n] = w.useState(void 0);
  return kt(() => {
    if (e) {
      n({ width: e.offsetWidth, height: e.offsetHeight });
      const o = new ResizeObserver((s) => {
        if (!Array.isArray(s) || !s.length)
          return;
        const c = s[0];
        let l, u;
        if ("borderBoxSize" in c) {
          const d = c.borderBoxSize, h = Array.isArray(d) ? d[0] : d;
          l = h.inlineSize, u = h.blockSize;
        } else
          l = e.offsetWidth, u = e.offsetHeight;
        n({ width: l, height: u });
      });
      return o.observe(e, { box: "border-box" }), () => o.unobserve(e);
    } else
      n(void 0);
  }, [e]), t;
}
var Su = "Popper", [gg, Na] = lE(Su), [uE, vg] = gg(Su), yg = (e) => {
  const { __scopePopper: t, children: n } = e, [o, s] = w.useState(null);
  return /* @__PURE__ */ m.jsx(uE, { scope: t, anchor: o, onAnchorChange: s, children: n });
};
yg.displayName = Su;
var xg = "PopperAnchor", bg = w.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: o, ...s } = e, c = vg(xg, n), l = w.useRef(null), u = et(t, l);
    return w.useEffect(() => {
      c.onAnchorChange((o == null ? void 0 : o.current) || l.current);
    }), o ? null : /* @__PURE__ */ m.jsx(Ve.div, { ...s, ref: u });
  }
);
bg.displayName = xg;
var Cu = "PopperContent", [dE, fE] = gg(Cu), wg = w.forwardRef(
  (e, t) => {
    var X, be, ke, Se, ve, Pe;
    const {
      __scopePopper: n,
      side: o = "bottom",
      sideOffset: s = 0,
      align: c = "center",
      alignOffset: l = 0,
      arrowPadding: u = 0,
      avoidCollisions: d = !0,
      collisionBoundary: h = [],
      collisionPadding: p = 0,
      sticky: v = "partial",
      hideWhenDetached: x = !1,
      updatePositionStrategy: g = "optimized",
      onPlaced: T,
      ...S
    } = e, _ = vg(Cu, n), [P, E] = w.useState(null), O = et(t, (at) => E(at)), [N, j] = w.useState(null), W = mg(N), $ = (W == null ? void 0 : W.width) ?? 0, H = (W == null ? void 0 : W.height) ?? 0, te = o + (c !== "center" ? "-" + c : ""), re = typeof p == "number" ? p : { top: 0, right: 0, bottom: 0, left: 0, ...p }, fe = Array.isArray(h) ? h : [h], J = fe.length > 0, se = {
      padding: re,
      boundary: fe.filter(pE),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: J
    }, { refs: ne, floatingStyles: Te, placement: ie, isPositioned: Z, middlewareData: q } = ZA({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: te,
      whileElementsMounted: (...at) => UA(...at, {
        animationFrame: g === "always"
      }),
      elements: {
        reference: _.anchor
      },
      middleware: [
        QA({ mainAxis: s + H, alignmentAxis: l }),
        d && eE({
          mainAxis: !0,
          crossAxis: !1,
          limiter: v === "partial" ? tE() : void 0,
          ...se
        }),
        d && nE({ ...se }),
        rE({
          ...se,
          apply: ({ elements: at, rects: Ye, availableWidth: ft, availableHeight: Mt }) => {
            const { width: lt, height: rn } = Ye.reference, Vt = at.floating.style;
            Vt.setProperty("--radix-popper-available-width", `${ft}px`), Vt.setProperty("--radix-popper-available-height", `${Mt}px`), Vt.setProperty("--radix-popper-anchor-width", `${lt}px`), Vt.setProperty("--radix-popper-anchor-height", `${rn}px`);
          }
        }),
        N && oE({ element: N, padding: u }),
        mE({ arrowWidth: $, arrowHeight: H }),
        x && iE({ strategy: "referenceHidden", ...se })
      ]
    }), [G, pe] = Tg(ie), Ee = nr(T);
    kt(() => {
      Z && (Ee == null || Ee());
    }, [Z, Ee]);
    const _e = (X = q.arrow) == null ? void 0 : X.x, ge = (be = q.arrow) == null ? void 0 : be.y, Re = ((ke = q.arrow) == null ? void 0 : ke.centerOffset) !== 0, [Be, Je] = w.useState();
    return kt(() => {
      P && Je(window.getComputedStyle(P).zIndex);
    }, [P]), /* @__PURE__ */ m.jsx(
      "div",
      {
        ref: ne.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...Te,
          transform: Z ? Te.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: Be,
          "--radix-popper-transform-origin": [
            (Se = q.transformOrigin) == null ? void 0 : Se.x,
            (ve = q.transformOrigin) == null ? void 0 : ve.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((Pe = q.hide) == null ? void 0 : Pe.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ m.jsx(
          dE,
          {
            scope: n,
            placedSide: G,
            onArrowChange: j,
            arrowX: _e,
            arrowY: ge,
            shouldHideArrow: Re,
            children: /* @__PURE__ */ m.jsx(
              Ve.div,
              {
                "data-side": G,
                "data-align": pe,
                ...S,
                ref: O,
                style: {
                  ...S.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: Z ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
wg.displayName = Cu;
var Sg = "PopperArrow", hE = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, Cg = w.forwardRef(function(t, n) {
  const { __scopePopper: o, ...s } = t, c = fE(Sg, o), l = hE[c.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ m.jsx(
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
        children: /* @__PURE__ */ m.jsx(
          aE,
          {
            ...s,
            ref: n,
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
Cg.displayName = Sg;
function pE(e) {
  return e !== null;
}
var mE = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var _, P, E;
    const { placement: n, rects: o, middlewareData: s } = t, l = ((_ = s.arrow) == null ? void 0 : _.centerOffset) !== 0, u = l ? 0 : e.arrowWidth, d = l ? 0 : e.arrowHeight, [h, p] = Tg(n), v = { start: "0%", center: "50%", end: "100%" }[p], x = (((P = s.arrow) == null ? void 0 : P.x) ?? 0) + u / 2, g = (((E = s.arrow) == null ? void 0 : E.y) ?? 0) + d / 2;
    let T = "", S = "";
    return h === "bottom" ? (T = l ? v : `${x}px`, S = `${-d}px`) : h === "top" ? (T = l ? v : `${x}px`, S = `${o.floating.height + d}px`) : h === "right" ? (T = `${-d}px`, S = l ? v : `${g}px`) : h === "left" && (T = `${o.floating.width + d}px`, S = l ? v : `${g}px`), { data: { x: T, y: S } };
  }
});
function Tg(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var _g = yg, Pg = bg, Ag = wg, Eg = Cg, gE = "Portal", Tu = w.forwardRef((e, t) => {
  var u;
  const { container: n, ...o } = e, [s, c] = w.useState(!1);
  kt(() => c(!0), []);
  const l = n || s && ((u = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : u.body);
  return l ? $m.createPortal(/* @__PURE__ */ m.jsx(Ve.div, { ...o, ref: t }), l) : null;
});
Tu.displayName = gE;
function Lo({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  }
}) {
  const [o, s] = vE({ defaultProp: t, onChange: n }), c = e !== void 0, l = c ? e : o, u = nr(n), d = w.useCallback(
    (h) => {
      if (c) {
        const v = typeof h == "function" ? h(e) : h;
        v !== e && u(v);
      } else
        s(h);
    },
    [c, e, s, u]
  );
  return [l, d];
}
function vE({
  defaultProp: e,
  onChange: t
}) {
  const n = w.useState(e), [o] = n, s = w.useRef(o), c = nr(t);
  return w.useEffect(() => {
    s.current !== o && (c(o), s.current = o);
  }, [o, s, c]), n;
}
function Rg(e) {
  const t = w.useRef({ value: e, previous: e });
  return w.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
var yE = "VisuallyHidden", _u = w.forwardRef(
  (e, t) => /* @__PURE__ */ m.jsx(
    Ve.span,
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
_u.displayName = yE;
var xE = _u, bE = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Ni = /* @__PURE__ */ new WeakMap(), Bs = /* @__PURE__ */ new WeakMap(), Ws = {}, mc = 0, Ng = function(e) {
  return e && (e.host || Ng(e.parentNode));
}, wE = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var o = Ng(n);
    return o && e.contains(o) ? o : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, SE = function(e, t, n, o) {
  var s = wE(t, Array.isArray(e) ? e : [e]);
  Ws[n] || (Ws[n] = /* @__PURE__ */ new WeakMap());
  var c = Ws[n], l = [], u = /* @__PURE__ */ new Set(), d = new Set(s), h = function(v) {
    !v || u.has(v) || (u.add(v), h(v.parentNode));
  };
  s.forEach(h);
  var p = function(v) {
    !v || d.has(v) || Array.prototype.forEach.call(v.children, function(x) {
      if (u.has(x))
        p(x);
      else
        try {
          var g = x.getAttribute(o), T = g !== null && g !== "false", S = (Ni.get(x) || 0) + 1, _ = (c.get(x) || 0) + 1;
          Ni.set(x, S), c.set(x, _), l.push(x), S === 1 && T && Bs.set(x, !0), _ === 1 && x.setAttribute(n, "true"), T || x.setAttribute(o, "true");
        } catch (P) {
          console.error("aria-hidden: cannot operate on ", x, P);
        }
    });
  };
  return p(t), u.clear(), mc++, function() {
    l.forEach(function(v) {
      var x = Ni.get(v) - 1, g = c.get(v) - 1;
      Ni.set(v, x), c.set(v, g), x || (Bs.has(v) || v.removeAttribute(o), Bs.delete(v)), g || v.removeAttribute(n);
    }), mc--, mc || (Ni = /* @__PURE__ */ new WeakMap(), Ni = /* @__PURE__ */ new WeakMap(), Bs = /* @__PURE__ */ new WeakMap(), Ws = {});
  };
}, Mg = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var o = Array.from(Array.isArray(e) ? e : [e]), s = bE(e);
  return s ? (o.push.apply(o, Array.from(s.querySelectorAll("[aria-live]"))), SE(o, s, n, "aria-hidden")) : function() {
    return null;
  };
}, Cr = function() {
  return Cr = Object.assign || function(t) {
    for (var n, o = 1, s = arguments.length; o < s; o++) {
      n = arguments[o];
      for (var c in n)
        Object.prototype.hasOwnProperty.call(n, c) && (t[c] = n[c]);
    }
    return t;
  }, Cr.apply(this, arguments);
};
function CE(e, t) {
  var n = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, o = Object.getOwnPropertySymbols(e); s < o.length; s++)
      t.indexOf(o[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[s]) && (n[o[s]] = e[o[s]]);
  return n;
}
function TE(e, t, n) {
  if (n || arguments.length === 2)
    for (var o = 0, s = t.length, c; o < s; o++)
      (c || !(o in t)) && (c || (c = Array.prototype.slice.call(t, 0, o)), c[o] = t[o]);
  return e.concat(c || Array.prototype.slice.call(t));
}
var Zs = "right-scroll-bar-position", Js = "width-before-scroll-bar", _E = "with-scroll-bars-hidden", PE = "--removed-body-scroll-bar-size";
function gc(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function AE(e, t) {
  var n = jn(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return n.value;
        },
        set current(o) {
          var s = n.value;
          s !== o && (n.value = o, n.callback(o, s));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
var EE = typeof window < "u" ? w.useLayoutEffect : w.useEffect, gp = /* @__PURE__ */ new WeakMap();
function RE(e, t) {
  var n = AE(null, function(o) {
    return e.forEach(function(s) {
      return gc(s, o);
    });
  });
  return EE(function() {
    var o = gp.get(n);
    if (o) {
      var s = new Set(o), c = new Set(e), l = n.current;
      s.forEach(function(u) {
        c.has(u) || gc(u, null);
      }), c.forEach(function(u) {
        s.has(u) || gc(u, l);
      });
    }
    gp.set(n, e);
  }, [e]), n;
}
var la = function() {
  return la = Object.assign || function(t) {
    for (var n, o = 1, s = arguments.length; o < s; o++) {
      n = arguments[o];
      for (var c in n)
        Object.prototype.hasOwnProperty.call(n, c) && (t[c] = n[c]);
    }
    return t;
  }, la.apply(this, arguments);
};
function NE(e, t) {
  var n = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, o = Object.getOwnPropertySymbols(e); s < o.length; s++)
      t.indexOf(o[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[s]) && (n[o[s]] = e[o[s]]);
  return n;
}
function ME(e) {
  return e;
}
function OE(e, t) {
  t === void 0 && (t = ME);
  var n = [], o = !1, s = {
    read: function() {
      if (o)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(c) {
      var l = t(c, o);
      return n.push(l), function() {
        n = n.filter(function(u) {
          return u !== l;
        });
      };
    },
    assignSyncMedium: function(c) {
      for (o = !0; n.length; ) {
        var l = n;
        n = [], l.forEach(c);
      }
      n = {
        push: function(u) {
          return c(u);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(c) {
      o = !0;
      var l = [];
      if (n.length) {
        var u = n;
        n = [], u.forEach(c), l = n;
      }
      var d = function() {
        var p = l;
        l = [], p.forEach(c);
      }, h = function() {
        return Promise.resolve().then(d);
      };
      h(), n = {
        push: function(p) {
          l.push(p), h();
        },
        filter: function(p) {
          return l = l.filter(p), n;
        }
      };
    }
  };
  return s;
}
function DE(e) {
  e === void 0 && (e = {});
  var t = OE(null);
  return t.options = la({ async: !0, ssr: !1 }, e), t;
}
var Og = function(e) {
  var t = e.sideCar, n = NE(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var o = t.read();
  if (!o)
    throw new Error("Sidecar medium not found");
  return w.createElement(o, la({}, n));
};
Og.isSideCarExport = !0;
function jE(e, t) {
  return e.useMedium(t), Og;
}
var Dg = DE(), vc = function() {
}, Ma = w.forwardRef(function(e, t) {
  var n = w.useRef(null), o = w.useState({
    onScrollCapture: vc,
    onWheelCapture: vc,
    onTouchMoveCapture: vc
  }), s = o[0], c = o[1], l = e.forwardProps, u = e.children, d = e.className, h = e.removeScrollBar, p = e.enabled, v = e.shards, x = e.sideCar, g = e.noIsolation, T = e.inert, S = e.allowPinchZoom, _ = e.as, P = _ === void 0 ? "div" : _, E = e.gapMode, O = CE(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), N = x, j = RE([n, t]), W = Cr(Cr({}, O), s);
  return w.createElement(
    w.Fragment,
    null,
    p && w.createElement(N, { sideCar: Dg, removeScrollBar: h, shards: v, noIsolation: g, inert: T, setCallbacks: c, allowPinchZoom: !!S, lockRef: n, gapMode: E }),
    l ? w.cloneElement(w.Children.only(u), Cr(Cr({}, W), { ref: j })) : w.createElement(P, Cr({}, W, { className: d, ref: j }), u)
  );
});
Ma.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Ma.classNames = {
  fullWidth: Js,
  zeroRight: Zs
};
var IE = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function LE() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = IE();
  return t && e.setAttribute("nonce", t), e;
}
function kE(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function VE(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var FE = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = LE()) && (kE(t, n), VE(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, BE = function() {
  var e = FE();
  return function(t, n) {
    w.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, jg = function() {
  var e = BE(), t = function(n) {
    var o = n.styles, s = n.dynamic;
    return e(o, s), null;
  };
  return t;
}, WE = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, yc = function(e) {
  return parseInt(e || "", 10) || 0;
}, $E = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], o = t[e === "padding" ? "paddingTop" : "marginTop"], s = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [yc(n), yc(o), yc(s)];
}, UE = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return WE;
  var t = $E(e), n = document.documentElement.clientWidth, o = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, o - n + t[2] - t[0])
  };
}, HE = jg(), Bi = "data-scroll-locked", zE = function(e, t, n, o) {
  var s = e.left, c = e.top, l = e.right, u = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(_E, ` {
   overflow: hidden `).concat(o, `;
   padding-right: `).concat(u, "px ").concat(o, `;
  }
  body[`).concat(Bi, `] {
    overflow: hidden `).concat(o, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(o, ";"),
    n === "margin" && `
    padding-left: `.concat(s, `px;
    padding-top: `).concat(c, `px;
    padding-right: `).concat(l, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(u, "px ").concat(o, `;
    `),
    n === "padding" && "padding-right: ".concat(u, "px ").concat(o, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(Zs, ` {
    right: `).concat(u, "px ").concat(o, `;
  }
  
  .`).concat(Js, ` {
    margin-right: `).concat(u, "px ").concat(o, `;
  }
  
  .`).concat(Zs, " .").concat(Zs, ` {
    right: 0 `).concat(o, `;
  }
  
  .`).concat(Js, " .").concat(Js, ` {
    margin-right: 0 `).concat(o, `;
  }
  
  body[`).concat(Bi, `] {
    `).concat(PE, ": ").concat(u, `px;
  }
`);
}, vp = function() {
  var e = parseInt(document.body.getAttribute(Bi) || "0", 10);
  return isFinite(e) ? e : 0;
}, GE = function() {
  w.useEffect(function() {
    return document.body.setAttribute(Bi, (vp() + 1).toString()), function() {
      var e = vp() - 1;
      e <= 0 ? document.body.removeAttribute(Bi) : document.body.setAttribute(Bi, e.toString());
    };
  }, []);
}, KE = function(e) {
  var t = e.noRelative, n = e.noImportant, o = e.gapMode, s = o === void 0 ? "margin" : o;
  GE();
  var c = w.useMemo(function() {
    return UE(s);
  }, [s]);
  return w.createElement(HE, { styles: zE(c, !t, s, n ? "" : "!important") });
}, Wc = !1;
if (typeof window < "u")
  try {
    var $s = Object.defineProperty({}, "passive", {
      get: function() {
        return Wc = !0, !0;
      }
    });
    window.addEventListener("test", $s, $s), window.removeEventListener("test", $s, $s);
  } catch {
    Wc = !1;
  }
var Mi = Wc ? { passive: !1 } : !1, YE = function(e) {
  return e.tagName === "TEXTAREA";
}, Ig = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !YE(e) && n[t] === "visible")
  );
}, qE = function(e) {
  return Ig(e, "overflowY");
}, XE = function(e) {
  return Ig(e, "overflowX");
}, yp = function(e, t) {
  var n = t.ownerDocument, o = t;
  do {
    typeof ShadowRoot < "u" && o instanceof ShadowRoot && (o = o.host);
    var s = Lg(e, o);
    if (s) {
      var c = kg(e, o), l = c[1], u = c[2];
      if (l > u)
        return !0;
    }
    o = o.parentNode;
  } while (o && o !== n.body);
  return !1;
}, ZE = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, o = e.clientHeight;
  return [
    t,
    n,
    o
  ];
}, JE = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, o = e.clientWidth;
  return [
    t,
    n,
    o
  ];
}, Lg = function(e, t) {
  return e === "v" ? qE(t) : XE(t);
}, kg = function(e, t) {
  return e === "v" ? ZE(t) : JE(t);
}, QE = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, eR = function(e, t, n, o, s) {
  var c = QE(e, window.getComputedStyle(t).direction), l = c * o, u = n.target, d = t.contains(u), h = !1, p = l > 0, v = 0, x = 0;
  do {
    var g = kg(e, u), T = g[0], S = g[1], _ = g[2], P = S - _ - c * T;
    (T || P) && Lg(e, u) && (v += P, x += T), u instanceof ShadowRoot ? u = u.host : u = u.parentNode;
  } while (
    // portaled content
    !d && u !== document.body || // self content
    d && (t.contains(u) || t === u)
  );
  return (p && (Math.abs(v) < 1 || !s) || !p && (Math.abs(x) < 1 || !s)) && (h = !0), h;
}, Us = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, xp = function(e) {
  return [e.deltaX, e.deltaY];
}, bp = function(e) {
  return e && "current" in e ? e.current : e;
}, tR = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, nR = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, rR = 0, Oi = [];
function iR(e) {
  var t = w.useRef([]), n = w.useRef([0, 0]), o = w.useRef(), s = w.useState(rR++)[0], c = w.useState(jg)[0], l = w.useRef(e);
  w.useEffect(function() {
    l.current = e;
  }, [e]), w.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(s));
      var S = TE([e.lockRef.current], (e.shards || []).map(bp), !0).filter(Boolean);
      return S.forEach(function(_) {
        return _.classList.add("allow-interactivity-".concat(s));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(s)), S.forEach(function(_) {
          return _.classList.remove("allow-interactivity-".concat(s));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var u = w.useCallback(function(S, _) {
    if ("touches" in S && S.touches.length === 2 || S.type === "wheel" && S.ctrlKey)
      return !l.current.allowPinchZoom;
    var P = Us(S), E = n.current, O = "deltaX" in S ? S.deltaX : E[0] - P[0], N = "deltaY" in S ? S.deltaY : E[1] - P[1], j, W = S.target, $ = Math.abs(O) > Math.abs(N) ? "h" : "v";
    if ("touches" in S && $ === "h" && W.type === "range")
      return !1;
    var H = yp($, W);
    if (!H)
      return !0;
    if (H ? j = $ : (j = $ === "v" ? "h" : "v", H = yp($, W)), !H)
      return !1;
    if (!o.current && "changedTouches" in S && (O || N) && (o.current = j), !j)
      return !0;
    var te = o.current || j;
    return eR(te, _, S, te === "h" ? O : N, !0);
  }, []), d = w.useCallback(function(S) {
    var _ = S;
    if (!(!Oi.length || Oi[Oi.length - 1] !== c)) {
      var P = "deltaY" in _ ? xp(_) : Us(_), E = t.current.filter(function(j) {
        return j.name === _.type && (j.target === _.target || _.target === j.shadowParent) && tR(j.delta, P);
      })[0];
      if (E && E.should) {
        _.cancelable && _.preventDefault();
        return;
      }
      if (!E) {
        var O = (l.current.shards || []).map(bp).filter(Boolean).filter(function(j) {
          return j.contains(_.target);
        }), N = O.length > 0 ? u(_, O[0]) : !l.current.noIsolation;
        N && _.cancelable && _.preventDefault();
      }
    }
  }, []), h = w.useCallback(function(S, _, P, E) {
    var O = { name: S, delta: _, target: P, should: E, shadowParent: oR(P) };
    t.current.push(O), setTimeout(function() {
      t.current = t.current.filter(function(N) {
        return N !== O;
      });
    }, 1);
  }, []), p = w.useCallback(function(S) {
    n.current = Us(S), o.current = void 0;
  }, []), v = w.useCallback(function(S) {
    h(S.type, xp(S), S.target, u(S, e.lockRef.current));
  }, []), x = w.useCallback(function(S) {
    h(S.type, Us(S), S.target, u(S, e.lockRef.current));
  }, []);
  w.useEffect(function() {
    return Oi.push(c), e.setCallbacks({
      onScrollCapture: v,
      onWheelCapture: v,
      onTouchMoveCapture: x
    }), document.addEventListener("wheel", d, Mi), document.addEventListener("touchmove", d, Mi), document.addEventListener("touchstart", p, Mi), function() {
      Oi = Oi.filter(function(S) {
        return S !== c;
      }), document.removeEventListener("wheel", d, Mi), document.removeEventListener("touchmove", d, Mi), document.removeEventListener("touchstart", p, Mi);
    };
  }, []);
  var g = e.removeScrollBar, T = e.inert;
  return w.createElement(
    w.Fragment,
    null,
    T ? w.createElement(c, { styles: nR(s) }) : null,
    g ? w.createElement(KE, { gapMode: e.gapMode }) : null
  );
}
function oR(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const sR = jE(Dg, iR);
var Pu = w.forwardRef(function(e, t) {
  return w.createElement(Ma, Cr({}, e, { ref: t, sideCar: sR }));
});
Pu.classNames = Ma.classNames;
var aR = [" ", "Enter", "ArrowUp", "ArrowDown"], lR = [" ", "Enter"], Ho = "Select", [Oa, Da, cR] = FP(Ho), [Xi, uj] = _a(Ho, [
  cR,
  Na
]), ja = Na(), [uR, Ir] = Xi(Ho), [dR, fR] = Xi(Ho), Vg = (e) => {
  const {
    __scopeSelect: t,
    children: n,
    open: o,
    defaultOpen: s,
    onOpenChange: c,
    value: l,
    defaultValue: u,
    onValueChange: d,
    dir: h,
    name: p,
    autoComplete: v,
    disabled: x,
    required: g,
    form: T
  } = e, S = ja(t), [_, P] = w.useState(null), [E, O] = w.useState(null), [N, j] = w.useState(!1), W = UP(h), [$ = !1, H] = Lo({
    prop: o,
    defaultProp: s,
    onChange: c
  }), [te, re] = Lo({
    prop: l,
    defaultProp: u,
    onChange: d
  }), fe = w.useRef(null), J = _ ? T || !!_.closest("form") : !0, [se, ne] = w.useState(/* @__PURE__ */ new Set()), Te = Array.from(se).map((ie) => ie.props.value).join(";");
  return /* @__PURE__ */ m.jsx(_g, { ...S, children: /* @__PURE__ */ m.jsxs(
    uR,
    {
      required: g,
      scope: t,
      trigger: _,
      onTriggerChange: P,
      valueNode: E,
      onValueNodeChange: O,
      valueNodeHasChildren: N,
      onValueNodeHasChildrenChange: j,
      contentId: ti(),
      value: te,
      onValueChange: re,
      open: $,
      onOpenChange: H,
      dir: W,
      triggerPointerDownPosRef: fe,
      disabled: x,
      children: [
        /* @__PURE__ */ m.jsx(Oa.Provider, { scope: t, children: /* @__PURE__ */ m.jsx(
          dR,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: w.useCallback((ie) => {
              ne((Z) => new Set(Z).add(ie));
            }, []),
            onNativeOptionRemove: w.useCallback((ie) => {
              ne((Z) => {
                const q = new Set(Z);
                return q.delete(ie), q;
              });
            }, []),
            children: n
          }
        ) }),
        J ? /* @__PURE__ */ m.jsxs(
          cv,
          {
            "aria-hidden": !0,
            required: g,
            tabIndex: -1,
            name: p,
            autoComplete: v,
            value: te,
            onChange: (ie) => re(ie.target.value),
            disabled: x,
            form: T,
            children: [
              te === void 0 ? /* @__PURE__ */ m.jsx("option", { value: "" }) : null,
              Array.from(se)
            ]
          },
          Te
        ) : null
      ]
    }
  ) });
};
Vg.displayName = Ho;
var Fg = "SelectTrigger", Bg = w.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, disabled: o = !1, ...s } = e, c = ja(n), l = Ir(Fg, n), u = l.disabled || o, d = et(t, l.onTriggerChange), h = Da(n), p = w.useRef("touch"), [v, x, g] = uv((S) => {
      const _ = h().filter((O) => !O.disabled), P = _.find((O) => O.value === l.value), E = dv(_, S, P);
      E !== void 0 && l.onValueChange(E.value);
    }), T = (S) => {
      u || (l.onOpenChange(!0), g()), S && (l.triggerPointerDownPosRef.current = {
        x: Math.round(S.pageX),
        y: Math.round(S.pageY)
      });
    };
    return /* @__PURE__ */ m.jsx(Pg, { asChild: !0, ...c, children: /* @__PURE__ */ m.jsx(
      Ve.button,
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
        "data-placeholder": lv(l.value) ? "" : void 0,
        ...s,
        ref: d,
        onClick: Le(s.onClick, (S) => {
          S.currentTarget.focus(), p.current !== "mouse" && T(S);
        }),
        onPointerDown: Le(s.onPointerDown, (S) => {
          p.current = S.pointerType;
          const _ = S.target;
          _.hasPointerCapture(S.pointerId) && _.releasePointerCapture(S.pointerId), S.button === 0 && S.ctrlKey === !1 && S.pointerType === "mouse" && (T(S), S.preventDefault());
        }),
        onKeyDown: Le(s.onKeyDown, (S) => {
          const _ = v.current !== "";
          !(S.ctrlKey || S.altKey || S.metaKey) && S.key.length === 1 && x(S.key), !(_ && S.key === " ") && aR.includes(S.key) && (T(), S.preventDefault());
        })
      }
    ) });
  }
);
Bg.displayName = Fg;
var Wg = "SelectValue", $g = w.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: o, style: s, children: c, placeholder: l = "", ...u } = e, d = Ir(Wg, n), { onValueNodeHasChildrenChange: h } = d, p = c !== void 0, v = et(t, d.onValueNodeChange);
    return kt(() => {
      h(p);
    }, [h, p]), /* @__PURE__ */ m.jsx(
      Ve.span,
      {
        ...u,
        ref: v,
        style: { pointerEvents: "none" },
        children: lv(d.value) ? /* @__PURE__ */ m.jsx(m.Fragment, { children: l }) : c
      }
    );
  }
);
$g.displayName = Wg;
var hR = "SelectIcon", Ug = w.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, children: o, ...s } = e;
    return /* @__PURE__ */ m.jsx(Ve.span, { "aria-hidden": !0, ...s, ref: t, children: o || "▼" });
  }
);
Ug.displayName = hR;
var pR = "SelectPortal", Hg = (e) => /* @__PURE__ */ m.jsx(Tu, { asChild: !0, ...e });
Hg.displayName = pR;
var oi = "SelectContent", zg = w.forwardRef(
  (e, t) => {
    const n = Ir(oi, e.__scopeSelect), [o, s] = w.useState();
    if (kt(() => {
      s(new DocumentFragment());
    }, []), !n.open) {
      const c = o;
      return c ? Sa.createPortal(
        /* @__PURE__ */ m.jsx(Gg, { scope: e.__scopeSelect, children: /* @__PURE__ */ m.jsx(Oa.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ m.jsx("div", { children: e.children }) }) }),
        c
      ) : null;
    }
    return /* @__PURE__ */ m.jsx(Kg, { ...e, ref: t });
  }
);
zg.displayName = oi;
var wn = 10, [Gg, Lr] = Xi(oi), mR = "SelectContentImpl", Kg = w.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      position: o = "item-aligned",
      onCloseAutoFocus: s,
      onEscapeKeyDown: c,
      onPointerDownOutside: l,
      //
      // PopperContent props
      side: u,
      sideOffset: d,
      align: h,
      alignOffset: p,
      arrowPadding: v,
      collisionBoundary: x,
      collisionPadding: g,
      sticky: T,
      hideWhenDetached: S,
      avoidCollisions: _,
      //
      ...P
    } = e, E = Ir(oi, n), [O, N] = w.useState(null), [j, W] = w.useState(null), $ = et(t, (X) => N(X)), [H, te] = w.useState(null), [re, fe] = w.useState(
      null
    ), J = Da(n), [se, ne] = w.useState(!1), Te = w.useRef(!1);
    w.useEffect(() => {
      if (O)
        return Mg(O);
    }, [O]), rg();
    const ie = w.useCallback(
      (X) => {
        const [be, ...ke] = J().map((Pe) => Pe.ref.current), [Se] = ke.slice(-1), ve = document.activeElement;
        for (const Pe of X)
          if (Pe === ve || (Pe == null || Pe.scrollIntoView({ block: "nearest" }), Pe === be && j && (j.scrollTop = 0), Pe === Se && j && (j.scrollTop = j.scrollHeight), Pe == null || Pe.focus(), document.activeElement !== ve))
            return;
      },
      [J, j]
    ), Z = w.useCallback(
      () => ie([H, O]),
      [ie, H, O]
    );
    w.useEffect(() => {
      se && Z();
    }, [se, Z]);
    const { onOpenChange: q, triggerPointerDownPosRef: G } = E;
    w.useEffect(() => {
      if (O) {
        let X = { x: 0, y: 0 };
        const be = (Se) => {
          var ve, Pe;
          X = {
            x: Math.abs(Math.round(Se.pageX) - (((ve = G.current) == null ? void 0 : ve.x) ?? 0)),
            y: Math.abs(Math.round(Se.pageY) - (((Pe = G.current) == null ? void 0 : Pe.y) ?? 0))
          };
        }, ke = (Se) => {
          X.x <= 10 && X.y <= 10 ? Se.preventDefault() : O.contains(Se.target) || q(!1), document.removeEventListener("pointermove", be), G.current = null;
        };
        return G.current !== null && (document.addEventListener("pointermove", be), document.addEventListener("pointerup", ke, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", be), document.removeEventListener("pointerup", ke, { capture: !0 });
        };
      }
    }, [O, q, G]), w.useEffect(() => {
      const X = () => q(!1);
      return window.addEventListener("blur", X), window.addEventListener("resize", X), () => {
        window.removeEventListener("blur", X), window.removeEventListener("resize", X);
      };
    }, [q]);
    const [pe, Ee] = uv((X) => {
      const be = J().filter((ve) => !ve.disabled), ke = be.find((ve) => ve.ref.current === document.activeElement), Se = dv(be, X, ke);
      Se && setTimeout(() => Se.ref.current.focus());
    }), _e = w.useCallback(
      (X, be, ke) => {
        const Se = !Te.current && !ke;
        (E.value !== void 0 && E.value === be || Se) && (te(X), Se && (Te.current = !0));
      },
      [E.value]
    ), ge = w.useCallback(() => O == null ? void 0 : O.focus(), [O]), Re = w.useCallback(
      (X, be, ke) => {
        const Se = !Te.current && !ke;
        (E.value !== void 0 && E.value === be || Se) && fe(X);
      },
      [E.value]
    ), Be = o === "popper" ? $c : Yg, Je = Be === $c ? {
      side: u,
      sideOffset: d,
      align: h,
      alignOffset: p,
      arrowPadding: v,
      collisionBoundary: x,
      collisionPadding: g,
      sticky: T,
      hideWhenDetached: S,
      avoidCollisions: _
    } : {};
    return /* @__PURE__ */ m.jsx(
      Gg,
      {
        scope: n,
        content: O,
        viewport: j,
        onViewportChange: W,
        itemRefCallback: _e,
        selectedItem: H,
        onItemLeave: ge,
        itemTextRefCallback: Re,
        focusSelectedItem: Z,
        selectedItemText: re,
        position: o,
        isPositioned: se,
        searchRef: pe,
        children: /* @__PURE__ */ m.jsx(Pu, { as: ri, allowPinchZoom: !0, children: /* @__PURE__ */ m.jsx(
          pu,
          {
            asChild: !0,
            trapped: E.open,
            onMountAutoFocus: (X) => {
              X.preventDefault();
            },
            onUnmountAutoFocus: Le(s, (X) => {
              var be;
              (be = E.trigger) == null || be.focus({ preventScroll: !0 }), X.preventDefault();
            }),
            children: /* @__PURE__ */ m.jsx(
              Pa,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: c,
                onPointerDownOutside: l,
                onFocusOutside: (X) => X.preventDefault(),
                onDismiss: () => E.onOpenChange(!1),
                children: /* @__PURE__ */ m.jsx(
                  Be,
                  {
                    role: "listbox",
                    id: E.contentId,
                    "data-state": E.open ? "open" : "closed",
                    dir: E.dir,
                    onContextMenu: (X) => X.preventDefault(),
                    ...P,
                    ...Je,
                    onPlaced: () => ne(!0),
                    ref: $,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...P.style
                    },
                    onKeyDown: Le(P.onKeyDown, (X) => {
                      const be = X.ctrlKey || X.altKey || X.metaKey;
                      if (X.key === "Tab" && X.preventDefault(), !be && X.key.length === 1 && Ee(X.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(X.key)) {
                        let Se = J().filter((ve) => !ve.disabled).map((ve) => ve.ref.current);
                        if (["ArrowUp", "End"].includes(X.key) && (Se = Se.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(X.key)) {
                          const ve = X.target, Pe = Se.indexOf(ve);
                          Se = Se.slice(Pe + 1);
                        }
                        setTimeout(() => ie(Se)), X.preventDefault();
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
Kg.displayName = mR;
var gR = "SelectItemAlignedPosition", Yg = w.forwardRef((e, t) => {
  const { __scopeSelect: n, onPlaced: o, ...s } = e, c = Ir(oi, n), l = Lr(oi, n), [u, d] = w.useState(null), [h, p] = w.useState(null), v = et(t, ($) => p($)), x = Da(n), g = w.useRef(!1), T = w.useRef(!0), { viewport: S, selectedItem: _, selectedItemText: P, focusSelectedItem: E } = l, O = w.useCallback(() => {
    if (c.trigger && c.valueNode && u && h && S && _ && P) {
      const $ = c.trigger.getBoundingClientRect(), H = h.getBoundingClientRect(), te = c.valueNode.getBoundingClientRect(), re = P.getBoundingClientRect();
      if (c.dir !== "rtl") {
        const ve = re.left - H.left, Pe = te.left - ve, at = $.left - Pe, Ye = $.width + at, ft = Math.max(Ye, H.width), Mt = window.innerWidth - wn, lt = ep(Pe, [
          wn,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(wn, Mt - ft)
        ]);
        u.style.minWidth = Ye + "px", u.style.left = lt + "px";
      } else {
        const ve = H.right - re.right, Pe = window.innerWidth - te.right - ve, at = window.innerWidth - $.right - Pe, Ye = $.width + at, ft = Math.max(Ye, H.width), Mt = window.innerWidth - wn, lt = ep(Pe, [
          wn,
          Math.max(wn, Mt - ft)
        ]);
        u.style.minWidth = Ye + "px", u.style.right = lt + "px";
      }
      const fe = x(), J = window.innerHeight - wn * 2, se = S.scrollHeight, ne = window.getComputedStyle(h), Te = parseInt(ne.borderTopWidth, 10), ie = parseInt(ne.paddingTop, 10), Z = parseInt(ne.borderBottomWidth, 10), q = parseInt(ne.paddingBottom, 10), G = Te + ie + se + q + Z, pe = Math.min(_.offsetHeight * 5, G), Ee = window.getComputedStyle(S), _e = parseInt(Ee.paddingTop, 10), ge = parseInt(Ee.paddingBottom, 10), Re = $.top + $.height / 2 - wn, Be = J - Re, Je = _.offsetHeight / 2, X = _.offsetTop + Je, be = Te + ie + X, ke = G - be;
      if (be <= Re) {
        const ve = fe.length > 0 && _ === fe[fe.length - 1].ref.current;
        u.style.bottom = "0px";
        const Pe = h.clientHeight - S.offsetTop - S.offsetHeight, at = Math.max(
          Be,
          Je + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (ve ? ge : 0) + Pe + Z
        ), Ye = be + at;
        u.style.height = Ye + "px";
      } else {
        const ve = fe.length > 0 && _ === fe[0].ref.current;
        u.style.top = "0px";
        const at = Math.max(
          Re,
          Te + S.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (ve ? _e : 0) + Je
        ) + ke;
        u.style.height = at + "px", S.scrollTop = be - Re + S.offsetTop;
      }
      u.style.margin = `${wn}px 0`, u.style.minHeight = pe + "px", u.style.maxHeight = J + "px", o == null || o(), requestAnimationFrame(() => g.current = !0);
    }
  }, [
    x,
    c.trigger,
    c.valueNode,
    u,
    h,
    S,
    _,
    P,
    c.dir,
    o
  ]);
  kt(() => O(), [O]);
  const [N, j] = w.useState();
  kt(() => {
    h && j(window.getComputedStyle(h).zIndex);
  }, [h]);
  const W = w.useCallback(
    ($) => {
      $ && T.current === !0 && (O(), E == null || E(), T.current = !1);
    },
    [O, E]
  );
  return /* @__PURE__ */ m.jsx(
    yR,
    {
      scope: n,
      contentWrapper: u,
      shouldExpandOnScrollRef: g,
      onScrollButtonChange: W,
      children: /* @__PURE__ */ m.jsx(
        "div",
        {
          ref: d,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: N
          },
          children: /* @__PURE__ */ m.jsx(
            Ve.div,
            {
              ...s,
              ref: v,
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
Yg.displayName = gR;
var vR = "SelectPopperPosition", $c = w.forwardRef((e, t) => {
  const {
    __scopeSelect: n,
    align: o = "start",
    collisionPadding: s = wn,
    ...c
  } = e, l = ja(n);
  return /* @__PURE__ */ m.jsx(
    Ag,
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
$c.displayName = vR;
var [yR, Au] = Xi(oi, {}), Uc = "SelectViewport", qg = w.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, nonce: o, ...s } = e, c = Lr(Uc, n), l = Au(Uc, n), u = et(t, c.onViewportChange), d = w.useRef(0);
    return /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
      /* @__PURE__ */ m.jsx(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: o
        }
      ),
      /* @__PURE__ */ m.jsx(Oa.Slot, { scope: n, children: /* @__PURE__ */ m.jsx(
        Ve.div,
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
          onScroll: Le(s.onScroll, (h) => {
            const p = h.currentTarget, { contentWrapper: v, shouldExpandOnScrollRef: x } = l;
            if (x != null && x.current && v) {
              const g = Math.abs(d.current - p.scrollTop);
              if (g > 0) {
                const T = window.innerHeight - wn * 2, S = parseFloat(v.style.minHeight), _ = parseFloat(v.style.height), P = Math.max(S, _);
                if (P < T) {
                  const E = P + g, O = Math.min(T, E), N = E - O;
                  v.style.height = O + "px", v.style.bottom === "0px" && (p.scrollTop = N > 0 ? N : 0, v.style.justifyContent = "flex-end");
                }
              }
            }
            d.current = p.scrollTop;
          })
        }
      ) })
    ] });
  }
);
qg.displayName = Uc;
var Xg = "SelectGroup", [xR, bR] = Xi(Xg), wR = w.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...o } = e, s = ti();
    return /* @__PURE__ */ m.jsx(xR, { scope: n, id: s, children: /* @__PURE__ */ m.jsx(Ve.div, { role: "group", "aria-labelledby": s, ...o, ref: t }) });
  }
);
wR.displayName = Xg;
var Zg = "SelectLabel", Jg = w.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...o } = e, s = bR(Zg, n);
    return /* @__PURE__ */ m.jsx(Ve.div, { id: s.id, ...o, ref: t });
  }
);
Jg.displayName = Zg;
var ca = "SelectItem", [SR, Qg] = Xi(ca), ev = w.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      value: o,
      disabled: s = !1,
      textValue: c,
      ...l
    } = e, u = Ir(ca, n), d = Lr(ca, n), h = u.value === o, [p, v] = w.useState(c ?? ""), [x, g] = w.useState(!1), T = et(
      t,
      (E) => {
        var O;
        return (O = d.itemRefCallback) == null ? void 0 : O.call(d, E, o, s);
      }
    ), S = ti(), _ = w.useRef("touch"), P = () => {
      s || (u.onValueChange(o), u.onOpenChange(!1));
    };
    if (o === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ m.jsx(
      SR,
      {
        scope: n,
        value: o,
        disabled: s,
        textId: S,
        isSelected: h,
        onItemTextChange: w.useCallback((E) => {
          v((O) => O || ((E == null ? void 0 : E.textContent) ?? "").trim());
        }, []),
        children: /* @__PURE__ */ m.jsx(
          Oa.ItemSlot,
          {
            scope: n,
            value: o,
            disabled: s,
            textValue: p,
            children: /* @__PURE__ */ m.jsx(
              Ve.div,
              {
                role: "option",
                "aria-labelledby": S,
                "data-highlighted": x ? "" : void 0,
                "aria-selected": h && x,
                "data-state": h ? "checked" : "unchecked",
                "aria-disabled": s || void 0,
                "data-disabled": s ? "" : void 0,
                tabIndex: s ? void 0 : -1,
                ...l,
                ref: T,
                onFocus: Le(l.onFocus, () => g(!0)),
                onBlur: Le(l.onBlur, () => g(!1)),
                onClick: Le(l.onClick, () => {
                  _.current !== "mouse" && P();
                }),
                onPointerUp: Le(l.onPointerUp, () => {
                  _.current === "mouse" && P();
                }),
                onPointerDown: Le(l.onPointerDown, (E) => {
                  _.current = E.pointerType;
                }),
                onPointerMove: Le(l.onPointerMove, (E) => {
                  var O;
                  _.current = E.pointerType, s ? (O = d.onItemLeave) == null || O.call(d) : _.current === "mouse" && E.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: Le(l.onPointerLeave, (E) => {
                  var O;
                  E.currentTarget === document.activeElement && ((O = d.onItemLeave) == null || O.call(d));
                }),
                onKeyDown: Le(l.onKeyDown, (E) => {
                  var N;
                  ((N = d.searchRef) == null ? void 0 : N.current) !== "" && E.key === " " || (lR.includes(E.key) && P(), E.key === " " && E.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
ev.displayName = ca;
var _o = "SelectItemText", tv = w.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: o, style: s, ...c } = e, l = Ir(_o, n), u = Lr(_o, n), d = Qg(_o, n), h = fR(_o, n), [p, v] = w.useState(null), x = et(
      t,
      (P) => v(P),
      d.onItemTextChange,
      (P) => {
        var E;
        return (E = u.itemTextRefCallback) == null ? void 0 : E.call(u, P, d.value, d.disabled);
      }
    ), g = p == null ? void 0 : p.textContent, T = w.useMemo(
      () => /* @__PURE__ */ m.jsx("option", { value: d.value, disabled: d.disabled, children: g }, d.value),
      [d.disabled, d.value, g]
    ), { onNativeOptionAdd: S, onNativeOptionRemove: _ } = h;
    return kt(() => (S(T), () => _(T)), [S, _, T]), /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
      /* @__PURE__ */ m.jsx(Ve.span, { id: d.textId, ...c, ref: x }),
      d.isSelected && l.valueNode && !l.valueNodeHasChildren ? Sa.createPortal(c.children, l.valueNode) : null
    ] });
  }
);
tv.displayName = _o;
var nv = "SelectItemIndicator", rv = w.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...o } = e;
    return Qg(nv, n).isSelected ? /* @__PURE__ */ m.jsx(Ve.span, { "aria-hidden": !0, ...o, ref: t }) : null;
  }
);
rv.displayName = nv;
var Hc = "SelectScrollUpButton", iv = w.forwardRef((e, t) => {
  const n = Lr(Hc, e.__scopeSelect), o = Au(Hc, e.__scopeSelect), [s, c] = w.useState(!1), l = et(t, o.onScrollButtonChange);
  return kt(() => {
    if (n.viewport && n.isPositioned) {
      let u = function() {
        const h = d.scrollTop > 0;
        c(h);
      };
      const d = n.viewport;
      return u(), d.addEventListener("scroll", u), () => d.removeEventListener("scroll", u);
    }
  }, [n.viewport, n.isPositioned]), s ? /* @__PURE__ */ m.jsx(
    sv,
    {
      ...e,
      ref: l,
      onAutoScroll: () => {
        const { viewport: u, selectedItem: d } = n;
        u && d && (u.scrollTop = u.scrollTop - d.offsetHeight);
      }
    }
  ) : null;
});
iv.displayName = Hc;
var zc = "SelectScrollDownButton", ov = w.forwardRef((e, t) => {
  const n = Lr(zc, e.__scopeSelect), o = Au(zc, e.__scopeSelect), [s, c] = w.useState(!1), l = et(t, o.onScrollButtonChange);
  return kt(() => {
    if (n.viewport && n.isPositioned) {
      let u = function() {
        const h = d.scrollHeight - d.clientHeight, p = Math.ceil(d.scrollTop) < h;
        c(p);
      };
      const d = n.viewport;
      return u(), d.addEventListener("scroll", u), () => d.removeEventListener("scroll", u);
    }
  }, [n.viewport, n.isPositioned]), s ? /* @__PURE__ */ m.jsx(
    sv,
    {
      ...e,
      ref: l,
      onAutoScroll: () => {
        const { viewport: u, selectedItem: d } = n;
        u && d && (u.scrollTop = u.scrollTop + d.offsetHeight);
      }
    }
  ) : null;
});
ov.displayName = zc;
var sv = w.forwardRef((e, t) => {
  const { __scopeSelect: n, onAutoScroll: o, ...s } = e, c = Lr("SelectScrollButton", n), l = w.useRef(null), u = Da(n), d = w.useCallback(() => {
    l.current !== null && (window.clearInterval(l.current), l.current = null);
  }, []);
  return w.useEffect(() => () => d(), [d]), kt(() => {
    var p;
    const h = u().find((v) => v.ref.current === document.activeElement);
    (p = h == null ? void 0 : h.ref.current) == null || p.scrollIntoView({ block: "nearest" });
  }, [u]), /* @__PURE__ */ m.jsx(
    Ve.div,
    {
      "aria-hidden": !0,
      ...s,
      ref: t,
      style: { flexShrink: 0, ...s.style },
      onPointerDown: Le(s.onPointerDown, () => {
        l.current === null && (l.current = window.setInterval(o, 50));
      }),
      onPointerMove: Le(s.onPointerMove, () => {
        var h;
        (h = c.onItemLeave) == null || h.call(c), l.current === null && (l.current = window.setInterval(o, 50));
      }),
      onPointerLeave: Le(s.onPointerLeave, () => {
        d();
      })
    }
  );
}), CR = "SelectSeparator", av = w.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...o } = e;
    return /* @__PURE__ */ m.jsx(Ve.div, { "aria-hidden": !0, ...o, ref: t });
  }
);
av.displayName = CR;
var Gc = "SelectArrow", TR = w.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...o } = e, s = ja(n), c = Ir(Gc, n), l = Lr(Gc, n);
    return c.open && l.position === "popper" ? /* @__PURE__ */ m.jsx(Eg, { ...s, ...o, ref: t }) : null;
  }
);
TR.displayName = Gc;
function lv(e) {
  return e === "" || e === void 0;
}
var cv = w.forwardRef(
  (e, t) => {
    const { value: n, ...o } = e, s = w.useRef(null), c = et(t, s), l = Rg(n);
    return w.useEffect(() => {
      const u = s.current, d = window.HTMLSelectElement.prototype, p = Object.getOwnPropertyDescriptor(
        d,
        "value"
      ).set;
      if (l !== n && p) {
        const v = new Event("change", { bubbles: !0 });
        p.call(u, n), u.dispatchEvent(v);
      }
    }, [l, n]), /* @__PURE__ */ m.jsx(_u, { asChild: !0, children: /* @__PURE__ */ m.jsx("select", { ...o, ref: c, defaultValue: n }) });
  }
);
cv.displayName = "BubbleSelect";
function uv(e) {
  const t = nr(e), n = w.useRef(""), o = w.useRef(0), s = w.useCallback(
    (l) => {
      const u = n.current + l;
      t(u), function d(h) {
        n.current = h, window.clearTimeout(o.current), h !== "" && (o.current = window.setTimeout(() => d(""), 1e3));
      }(u);
    },
    [t]
  ), c = w.useCallback(() => {
    n.current = "", window.clearTimeout(o.current);
  }, []);
  return w.useEffect(() => () => window.clearTimeout(o.current), []), [n, s, c];
}
function dv(e, t, n) {
  const s = t.length > 1 && Array.from(t).every((h) => h === t[0]) ? t[0] : t, c = n ? e.indexOf(n) : -1;
  let l = _R(e, Math.max(c, 0));
  s.length === 1 && (l = l.filter((h) => h !== n));
  const d = l.find(
    (h) => h.textValue.toLowerCase().startsWith(s.toLowerCase())
  );
  return d !== n ? d : void 0;
}
function _R(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
var PR = Vg, fv = Bg, AR = $g, ER = Ug, RR = Hg, hv = zg, NR = qg, pv = Jg, mv = ev, MR = tv, OR = rv, gv = iv, vv = ov, yv = av;
const Kc = PR, Yc = AR, ua = w.forwardRef(({ className: e, children: t, ...n }, o) => /* @__PURE__ */ m.jsxs(
  fv,
  {
    ref: o,
    className: Ue(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ m.jsx(ER, { asChild: !0, children: /* @__PURE__ */ m.jsx(Ta, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
ua.displayName = fv.displayName;
const xv = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m.jsx(
  gv,
  {
    ref: n,
    className: Ue(
      "flex cursor-default items-center justify-center py-1",
      e
    ),
    ...t,
    children: /* @__PURE__ */ m.jsx(d_, { className: "h-4 w-4" })
  }
));
xv.displayName = gv.displayName;
const bv = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m.jsx(
  vv,
  {
    ref: n,
    className: Ue(
      "flex cursor-default items-center justify-center py-1",
      e
    ),
    ...t,
    children: /* @__PURE__ */ m.jsx(Ta, { className: "h-4 w-4" })
  }
));
bv.displayName = vv.displayName;
const da = w.forwardRef(({ className: e, children: t, position: n = "popper", ...o }, s) => /* @__PURE__ */ m.jsx(RR, { children: /* @__PURE__ */ m.jsxs(
  hv,
  {
    ref: s,
    className: Ue(
      "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      n === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      e
    ),
    position: n,
    ...o,
    children: [
      /* @__PURE__ */ m.jsx(xv, {}),
      /* @__PURE__ */ m.jsx(
        NR,
        {
          className: Ue(
            "p-1",
            n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children: t
        }
      ),
      /* @__PURE__ */ m.jsx(bv, {})
    ]
  }
) }));
da.displayName = hv.displayName;
const DR = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m.jsx(
  pv,
  {
    ref: n,
    className: Ue("py-1.5 pl-8 pr-2 text-sm font-semibold", e),
    ...t
  }
));
DR.displayName = pv.displayName;
const Sr = w.forwardRef(({ className: e, children: t, ...n }, o) => /* @__PURE__ */ m.jsxs(
  mv,
  {
    ref: o,
    className: Ue(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ m.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ m.jsx(OR, { children: /* @__PURE__ */ m.jsx(Ca, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ m.jsx(MR, { children: t })
    ]
  }
));
Sr.displayName = mv.displayName;
const jR = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m.jsx(
  yv,
  {
    ref: n,
    className: Ue("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
jR.displayName = yv.displayName;
function IR(e, t) {
  return w.useReducer((n, o) => t[n][o] ?? n, e);
}
var Zi = (e) => {
  const { present: t, children: n } = e, o = LR(t), s = typeof n == "function" ? n({ present: o.isPresent }) : w.Children.only(n), c = et(o.ref, kR(s));
  return typeof n == "function" || o.isPresent ? w.cloneElement(s, { ref: c }) : null;
};
Zi.displayName = "Presence";
function LR(e) {
  const [t, n] = w.useState(), o = w.useRef({}), s = w.useRef(e), c = w.useRef("none"), l = e ? "mounted" : "unmounted", [u, d] = IR(l, {
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
  return w.useEffect(() => {
    const h = Hs(o.current);
    c.current = u === "mounted" ? h : "none";
  }, [u]), kt(() => {
    const h = o.current, p = s.current;
    if (p !== e) {
      const x = c.current, g = Hs(h);
      e ? d("MOUNT") : g === "none" || (h == null ? void 0 : h.display) === "none" ? d("UNMOUNT") : d(p && x !== g ? "ANIMATION_OUT" : "UNMOUNT"), s.current = e;
    }
  }, [e, d]), kt(() => {
    if (t) {
      let h;
      const p = t.ownerDocument.defaultView ?? window, v = (g) => {
        const S = Hs(o.current).includes(g.animationName);
        if (g.target === t && S && (d("ANIMATION_END"), !s.current)) {
          const _ = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", h = p.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = _);
          });
        }
      }, x = (g) => {
        g.target === t && (c.current = Hs(o.current));
      };
      return t.addEventListener("animationstart", x), t.addEventListener("animationcancel", v), t.addEventListener("animationend", v), () => {
        p.clearTimeout(h), t.removeEventListener("animationstart", x), t.removeEventListener("animationcancel", v), t.removeEventListener("animationend", v);
      };
    } else
      d("ANIMATION_END");
  }, [t, d]), {
    isPresent: ["mounted", "unmountSuspended"].includes(u),
    ref: w.useCallback((h) => {
      h && (o.current = getComputedStyle(h)), n(h);
    }, [])
  };
}
function Hs(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function kR(e) {
  var o, s;
  let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (s = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : s.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var [Ia, dj] = _a("Tooltip", [
  Na
]), La = Na(), wv = "TooltipProvider", VR = 700, qc = "tooltip.open", [FR, Eu] = Ia(wv), Sv = (e) => {
  const {
    __scopeTooltip: t,
    delayDuration: n = VR,
    skipDelayDuration: o = 300,
    disableHoverableContent: s = !1,
    children: c
  } = e, [l, u] = w.useState(!0), d = w.useRef(!1), h = w.useRef(0);
  return w.useEffect(() => {
    const p = h.current;
    return () => window.clearTimeout(p);
  }, []), /* @__PURE__ */ m.jsx(
    FR,
    {
      scope: t,
      isOpenDelayed: l,
      delayDuration: n,
      onOpen: w.useCallback(() => {
        window.clearTimeout(h.current), u(!1);
      }, []),
      onClose: w.useCallback(() => {
        window.clearTimeout(h.current), h.current = window.setTimeout(
          () => u(!0),
          o
        );
      }, [o]),
      isPointerInTransitRef: d,
      onPointerInTransitChange: w.useCallback((p) => {
        d.current = p;
      }, []),
      disableHoverableContent: s,
      children: c
    }
  );
};
Sv.displayName = wv;
var ka = "Tooltip", [BR, Va] = Ia(ka), Cv = (e) => {
  const {
    __scopeTooltip: t,
    children: n,
    open: o,
    defaultOpen: s = !1,
    onOpenChange: c,
    disableHoverableContent: l,
    delayDuration: u
  } = e, d = Eu(ka, e.__scopeTooltip), h = La(t), [p, v] = w.useState(null), x = ti(), g = w.useRef(0), T = l ?? d.disableHoverableContent, S = u ?? d.delayDuration, _ = w.useRef(!1), [P = !1, E] = Lo({
    prop: o,
    defaultProp: s,
    onChange: ($) => {
      $ ? (d.onOpen(), document.dispatchEvent(new CustomEvent(qc))) : d.onClose(), c == null || c($);
    }
  }), O = w.useMemo(() => P ? _.current ? "delayed-open" : "instant-open" : "closed", [P]), N = w.useCallback(() => {
    window.clearTimeout(g.current), g.current = 0, _.current = !1, E(!0);
  }, [E]), j = w.useCallback(() => {
    window.clearTimeout(g.current), g.current = 0, E(!1);
  }, [E]), W = w.useCallback(() => {
    window.clearTimeout(g.current), g.current = window.setTimeout(() => {
      _.current = !0, E(!0), g.current = 0;
    }, S);
  }, [S, E]);
  return w.useEffect(() => () => {
    g.current && (window.clearTimeout(g.current), g.current = 0);
  }, []), /* @__PURE__ */ m.jsx(_g, { ...h, children: /* @__PURE__ */ m.jsx(
    BR,
    {
      scope: t,
      contentId: x,
      open: P,
      stateAttribute: O,
      trigger: p,
      onTriggerChange: v,
      onTriggerEnter: w.useCallback(() => {
        d.isOpenDelayed ? W() : N();
      }, [d.isOpenDelayed, W, N]),
      onTriggerLeave: w.useCallback(() => {
        T ? j() : (window.clearTimeout(g.current), g.current = 0);
      }, [j, T]),
      onOpen: N,
      onClose: j,
      disableHoverableContent: T,
      children: n
    }
  ) });
};
Cv.displayName = ka;
var Xc = "TooltipTrigger", Tv = w.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...o } = e, s = Va(Xc, n), c = Eu(Xc, n), l = La(n), u = w.useRef(null), d = et(t, u, s.onTriggerChange), h = w.useRef(!1), p = w.useRef(!1), v = w.useCallback(() => h.current = !1, []);
    return w.useEffect(() => () => document.removeEventListener("pointerup", v), [v]), /* @__PURE__ */ m.jsx(Pg, { asChild: !0, ...l, children: /* @__PURE__ */ m.jsx(
      Ve.button,
      {
        "aria-describedby": s.open ? s.contentId : void 0,
        "data-state": s.stateAttribute,
        ...o,
        ref: d,
        onPointerMove: Le(e.onPointerMove, (x) => {
          x.pointerType !== "touch" && !p.current && !c.isPointerInTransitRef.current && (s.onTriggerEnter(), p.current = !0);
        }),
        onPointerLeave: Le(e.onPointerLeave, () => {
          s.onTriggerLeave(), p.current = !1;
        }),
        onPointerDown: Le(e.onPointerDown, () => {
          h.current = !0, document.addEventListener("pointerup", v, { once: !0 });
        }),
        onFocus: Le(e.onFocus, () => {
          h.current || s.onOpen();
        }),
        onBlur: Le(e.onBlur, s.onClose),
        onClick: Le(e.onClick, s.onClose)
      }
    ) });
  }
);
Tv.displayName = Xc;
var WR = "TooltipPortal", [fj, $R] = Ia(WR, {
  forceMount: void 0
}), $i = "TooltipContent", _v = w.forwardRef(
  (e, t) => {
    const n = $R($i, e.__scopeTooltip), { forceMount: o = n.forceMount, side: s = "top", ...c } = e, l = Va($i, e.__scopeTooltip);
    return /* @__PURE__ */ m.jsx(Zi, { present: o || l.open, children: l.disableHoverableContent ? /* @__PURE__ */ m.jsx(Pv, { side: s, ...c, ref: t }) : /* @__PURE__ */ m.jsx(UR, { side: s, ...c, ref: t }) });
  }
), UR = w.forwardRef((e, t) => {
  const n = Va($i, e.__scopeTooltip), o = Eu($i, e.__scopeTooltip), s = w.useRef(null), c = et(t, s), [l, u] = w.useState(null), { trigger: d, onClose: h } = n, p = s.current, { onPointerInTransitChange: v } = o, x = w.useCallback(() => {
    u(null), v(!1);
  }, [v]), g = w.useCallback(
    (T, S) => {
      const _ = T.currentTarget, P = { x: T.clientX, y: T.clientY }, E = KR(P, _.getBoundingClientRect()), O = YR(P, E), N = qR(S.getBoundingClientRect()), j = ZR([...O, ...N]);
      u(j), v(!0);
    },
    [v]
  );
  return w.useEffect(() => () => x(), [x]), w.useEffect(() => {
    if (d && p) {
      const T = (_) => g(_, p), S = (_) => g(_, d);
      return d.addEventListener("pointerleave", T), p.addEventListener("pointerleave", S), () => {
        d.removeEventListener("pointerleave", T), p.removeEventListener("pointerleave", S);
      };
    }
  }, [d, p, g, x]), w.useEffect(() => {
    if (l) {
      const T = (S) => {
        const _ = S.target, P = { x: S.clientX, y: S.clientY }, E = (d == null ? void 0 : d.contains(_)) || (p == null ? void 0 : p.contains(_)), O = !XR(P, l);
        E ? x() : O && (x(), h());
      };
      return document.addEventListener("pointermove", T), () => document.removeEventListener("pointermove", T);
    }
  }, [d, p, l, h, x]), /* @__PURE__ */ m.jsx(Pv, { ...e, ref: c });
}), [HR, zR] = Ia(ka, { isInside: !1 }), Pv = w.forwardRef(
  (e, t) => {
    const {
      __scopeTooltip: n,
      children: o,
      "aria-label": s,
      onEscapeKeyDown: c,
      onPointerDownOutside: l,
      ...u
    } = e, d = Va($i, n), h = La(n), { onClose: p } = d;
    return w.useEffect(() => (document.addEventListener(qc, p), () => document.removeEventListener(qc, p)), [p]), w.useEffect(() => {
      if (d.trigger) {
        const v = (x) => {
          const g = x.target;
          g != null && g.contains(d.trigger) && p();
        };
        return window.addEventListener("scroll", v, { capture: !0 }), () => window.removeEventListener("scroll", v, { capture: !0 });
      }
    }, [d.trigger, p]), /* @__PURE__ */ m.jsx(
      Pa,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: c,
        onPointerDownOutside: l,
        onFocusOutside: (v) => v.preventDefault(),
        onDismiss: p,
        children: /* @__PURE__ */ m.jsxs(
          Ag,
          {
            "data-state": d.stateAttribute,
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
              /* @__PURE__ */ m.jsx(Hm, { children: o }),
              /* @__PURE__ */ m.jsx(HR, { scope: n, isInside: !0, children: /* @__PURE__ */ m.jsx(xE, { id: d.contentId, role: "tooltip", children: s || o }) })
            ]
          }
        )
      }
    );
  }
);
_v.displayName = $i;
var Av = "TooltipArrow", GR = w.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...o } = e, s = La(n);
    return zR(
      Av,
      n
    ).isInside ? null : /* @__PURE__ */ m.jsx(Eg, { ...s, ...o, ref: t });
  }
);
GR.displayName = Av;
function KR(e, t) {
  const n = Math.abs(t.top - e.y), o = Math.abs(t.bottom - e.y), s = Math.abs(t.right - e.x), c = Math.abs(t.left - e.x);
  switch (Math.min(n, o, s, c)) {
    case c:
      return "left";
    case s:
      return "right";
    case n:
      return "top";
    case o:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function YR(e, t, n = 5) {
  const o = [];
  switch (t) {
    case "top":
      o.push(
        { x: e.x - n, y: e.y + n },
        { x: e.x + n, y: e.y + n }
      );
      break;
    case "bottom":
      o.push(
        { x: e.x - n, y: e.y - n },
        { x: e.x + n, y: e.y - n }
      );
      break;
    case "left":
      o.push(
        { x: e.x + n, y: e.y - n },
        { x: e.x + n, y: e.y + n }
      );
      break;
    case "right":
      o.push(
        { x: e.x - n, y: e.y - n },
        { x: e.x - n, y: e.y + n }
      );
      break;
  }
  return o;
}
function qR(e) {
  const { top: t, right: n, bottom: o, left: s } = e;
  return [
    { x: s, y: t },
    { x: n, y: t },
    { x: n, y: o },
    { x: s, y: o }
  ];
}
function XR(e, t) {
  const { x: n, y: o } = e;
  let s = !1;
  for (let c = 0, l = t.length - 1; c < t.length; l = c++) {
    const u = t[c].x, d = t[c].y, h = t[l].x, p = t[l].y;
    d > o != p > o && n < (h - u) * (o - d) / (p - d) + u && (s = !s);
  }
  return s;
}
function ZR(e) {
  const t = e.slice();
  return t.sort((n, o) => n.x < o.x ? -1 : n.x > o.x ? 1 : n.y < o.y ? -1 : n.y > o.y ? 1 : 0), JR(t);
}
function JR(e) {
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
  const n = [];
  for (let o = e.length - 1; o >= 0; o--) {
    const s = e[o];
    for (; n.length >= 2; ) {
      const c = n[n.length - 1], l = n[n.length - 2];
      if ((c.x - l.x) * (s.y - l.y) >= (c.y - l.y) * (s.x - l.x))
        n.pop();
      else
        break;
    }
    n.push(s);
  }
  return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n);
}
var QR = Sv, eN = Cv, tN = Tv, Ev = _v;
const Tr = QR, _r = eN, Pr = tN, Jn = w.forwardRef(({ className: e, sideOffset: t = 4, ...n }, o) => /* @__PURE__ */ m.jsx(
  Ev,
  {
    ref: o,
    sideOffset: t,
    className: Ue(
      "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...n
  }
));
Jn.displayName = Ev.displayName;
const nN = fu(
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
function Ru({ className: e, variant: t, ...n }) {
  return /* @__PURE__ */ m.jsx("div", { className: Ue(nN({ variant: t }), e), ...n });
}
const ai = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m.jsx(
  "div",
  {
    ref: n,
    className: Ue(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      e
    ),
    ...t
  }
));
ai.displayName = "Card";
const li = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m.jsx(
  "div",
  {
    ref: n,
    className: Ue("flex flex-col space-y-1.5 p-6", e),
    ...t
  }
));
li.displayName = "CardHeader";
const ci = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m.jsx(
  "div",
  {
    ref: n,
    className: Ue(
      "text-2xl font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
ci.displayName = "CardTitle";
const rN = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m.jsx(
  "div",
  {
    ref: n,
    className: Ue("text-sm text-muted-foreground", e),
    ...t
  }
));
rN.displayName = "CardDescription";
const ui = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m.jsx("div", { ref: n, className: Ue("p-6 pt-0", e), ...t }));
ui.displayName = "CardContent";
const iN = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m.jsx(
  "div",
  {
    ref: n,
    className: Ue("flex items-center p-6 pt-0", e),
    ...t
  }
));
iN.displayName = "CardFooter";
function hj({ deal: e, onDealChange: t, availableDeals: n }) {
  const o = (s) => {
    t(s);
  };
  return /* @__PURE__ */ m.jsxs(ai, { className: "shadow-lg w-full max-w-3xl mx-auto my-8", children: [
    /* @__PURE__ */ m.jsx(li, { children: /* @__PURE__ */ m.jsxs("div", { className: "flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4", children: [
      /* @__PURE__ */ m.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ m.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ m.jsx(ci, { children: e.dealName }),
          /* @__PURE__ */ m.jsx(Tr, { children: /* @__PURE__ */ m.jsxs(_r, { children: [
            /* @__PURE__ */ m.jsx(Pr, { asChild: !0, children: /* @__PURE__ */ m.jsx(
              gt,
              {
                variant: "ghost",
                size: "sm",
                className: "p-1 h-auto",
                onClick: () => window.open(e.hubspotUrl, "_blank"),
                children: /* @__PURE__ */ m.jsx(Ym, { className: "w-4 h-4 text-slate-500" })
              }
            ) }),
            /* @__PURE__ */ m.jsx(Jn, { children: /* @__PURE__ */ m.jsx("p", { children: "View in HubSpot" }) })
          ] }) })
        ] }),
        /* @__PURE__ */ m.jsx(Ru, { variant: "outline", className: "text-sm", children: e.dealStage })
      ] }),
      /* @__PURE__ */ m.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 lg:gap-8", children: [
        /* @__PURE__ */ m.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ m.jsx("p", { className: "text-sm text-slate-500", children: "Amount" }),
          /* @__PURE__ */ m.jsxs("p", { className: "text-lg font-semibold", children: [
            "$",
            e.amount.toLocaleString()
          ] })
        ] }),
        /* @__PURE__ */ m.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ m.jsxs("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ m.jsx("p", { className: "text-sm text-slate-500", children: "Win Probability" }),
            /* @__PURE__ */ m.jsx(Tr, { children: /* @__PURE__ */ m.jsxs(_r, { children: [
              /* @__PURE__ */ m.jsx(Pr, { asChild: !0, children: /* @__PURE__ */ m.jsx(gt, { variant: "ghost", size: "sm", className: "p-0 h-auto", children: /* @__PURE__ */ m.jsx(Do, { className: "w-3 h-3 text-slate-400" }) }) }),
              /* @__PURE__ */ m.jsx(Jn, { className: "max-w-xs", children: /* @__PURE__ */ m.jsx("p", { children: "Estimated chance of winning, based on prospect engagement, qualification status, risk factors, and historic deal outcomes at the current stage." }) })
            ] }) })
          ] }),
          /* @__PURE__ */ m.jsxs("p", { className: "text-lg font-semibold", children: [
            e.probability,
            "%"
          ] })
        ] }),
        /* @__PURE__ */ m.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ m.jsx("p", { className: "text-sm text-slate-500", children: "Deal Owner" }),
          /* @__PURE__ */ m.jsx("p", { className: "text-lg font-semibold", children: e.dealOwner })
        ] }),
        /* @__PURE__ */ m.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ m.jsxs("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ m.jsx("p", { className: "text-sm text-slate-500", children: "Deal Language" }),
            /* @__PURE__ */ m.jsx(Tr, { children: /* @__PURE__ */ m.jsxs(_r, { children: [
              /* @__PURE__ */ m.jsx(Pr, { asChild: !0, children: /* @__PURE__ */ m.jsx(gt, { variant: "ghost", size: "sm", className: "p-0 h-auto", children: /* @__PURE__ */ m.jsx(Do, { className: "w-3 h-3 text-slate-400" }) }) }),
              /* @__PURE__ */ m.jsx(Jn, { className: "max-w-xs", children: /* @__PURE__ */ m.jsx("p", { children: "The main language of the deal." }) })
            ] }) })
          ] }),
          /* @__PURE__ */ m.jsx("p", { className: "text-lg font-semibold", children: tP(e.dealLanguage) })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ m.jsx(ui, { children: /* @__PURE__ */ m.jsxs(Kc, { value: e.dealId, onValueChange: o, children: [
      /* @__PURE__ */ m.jsx(ua, { className: "w-[300px]", children: /* @__PURE__ */ m.jsxs(Yc, { children: [
        e.dealName,
        " (",
        e.company,
        ")"
      ] }) }),
      /* @__PURE__ */ m.jsx(da, { children: n.map((s) => /* @__PURE__ */ m.jsxs(Sr, { value: s.dealId, children: [
        s.dealName,
        " (",
        s.company,
        ")"
      ] }, s.dealId)) })
    ] }) })
  ] });
}
function oN(e, t = []) {
  let n = [];
  function o(c, l) {
    const u = w.createContext(l), d = n.length;
    n = [...n, l];
    function h(v) {
      const { scope: x, children: g, ...T } = v, S = (x == null ? void 0 : x[e][d]) || u, _ = w.useMemo(() => T, Object.values(T));
      return /* @__PURE__ */ m.jsx(S.Provider, { value: _, children: g });
    }
    function p(v, x) {
      const g = (x == null ? void 0 : x[e][d]) || u, T = w.useContext(g);
      if (T)
        return T;
      if (l !== void 0)
        return l;
      throw new Error(`\`${v}\` must be used within \`${c}\``);
    }
    return h.displayName = c + "Provider", [h, p];
  }
  const s = () => {
    const c = n.map((l) => w.createContext(l));
    return function(u) {
      const d = (u == null ? void 0 : u[e]) || c;
      return w.useMemo(
        () => ({ [`__scope${e}`]: { ...u, [e]: d } }),
        [u, d]
      );
    };
  };
  return s.scopeName = e, [o, sN(s, ...t)];
}
function sN(...e) {
  const t = e[0];
  if (e.length === 1)
    return t;
  const n = () => {
    const o = e.map((s) => ({
      useScope: s(),
      scopeName: s.scopeName
    }));
    return function(c) {
      const l = o.reduce((u, { useScope: d, scopeName: h }) => {
        const v = d(c)[`__scope${h}`];
        return { ...u, ...v };
      }, {});
      return w.useMemo(() => ({ [`__scope${t.scopeName}`]: l }), [l]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
var Nu = "Progress", Mu = 100, [aN, pj] = oN(Nu), [lN, cN] = aN(Nu), Rv = w.forwardRef(
  (e, t) => {
    const {
      __scopeProgress: n,
      value: o = null,
      max: s,
      getValueLabel: c = uN,
      ...l
    } = e;
    (s || s === 0) && !wp(s) && console.error(dN(`${s}`, "Progress"));
    const u = wp(s) ? s : Mu;
    o !== null && !Sp(o, u) && console.error(fN(`${o}`, "Progress"));
    const d = Sp(o, u) ? o : null, h = fa(d) ? c(d, u) : void 0;
    return /* @__PURE__ */ m.jsx(lN, { scope: n, value: d, max: u, children: /* @__PURE__ */ m.jsx(
      Ve.div,
      {
        "aria-valuemax": u,
        "aria-valuemin": 0,
        "aria-valuenow": fa(d) ? d : void 0,
        "aria-valuetext": h,
        role: "progressbar",
        "data-state": Ov(d, u),
        "data-value": d ?? void 0,
        "data-max": u,
        ...l,
        ref: t
      }
    ) });
  }
);
Rv.displayName = Nu;
var Nv = "ProgressIndicator", Mv = w.forwardRef(
  (e, t) => {
    const { __scopeProgress: n, ...o } = e, s = cN(Nv, n);
    return /* @__PURE__ */ m.jsx(
      Ve.div,
      {
        "data-state": Ov(s.value, s.max),
        "data-value": s.value ?? void 0,
        "data-max": s.max,
        ...o,
        ref: t
      }
    );
  }
);
Mv.displayName = Nv;
function uN(e, t) {
  return `${Math.round(e / t * 100)}%`;
}
function Ov(e, t) {
  return e == null ? "indeterminate" : e === t ? "complete" : "loading";
}
function fa(e) {
  return typeof e == "number";
}
function wp(e) {
  return fa(e) && !isNaN(e) && e > 0;
}
function Sp(e, t) {
  return fa(e) && !isNaN(e) && e <= t && e >= 0;
}
function dN(e, t) {
  return `Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${Mu}\`.`;
}
function fN(e, t) {
  return `Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${Mu} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var Dv = Rv, hN = Mv;
const Ou = w.forwardRef(({ className: e, value: t, ...n }, o) => /* @__PURE__ */ m.jsx(
  Dv,
  {
    ref: o,
    className: Ue(
      "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
      e
    ),
    ...n,
    children: /* @__PURE__ */ m.jsx(
      hN,
      {
        className: "h-full w-full flex-1 bg-primary transition-all",
        style: { transform: `translateX(-${100 - (t || 0)}%)` }
      }
    )
  }
));
Ou.displayName = Dv.displayName;
const Co = [
  "Discovery",
  "Solution Validation",
  "Pricing Communicated",
  "Contract Sent",
  "Closed Won",
  "Closed Lost"
], mj = ({ deal: e }) => {
  const t = {
    Discovery: 75,
    "Solution Validation": 65,
    "Pricing Communicated": 55,
    "Contract Sent": 85,
    "Closed Won": 100,
    "Closed Lost": 0
  }, n = Co.includes(e.dealStage) ? e.dealStage : Co[0], o = t[n] || 0;
  return /* @__PURE__ */ m.jsxs(ai, { className: "shadow-lg w-full max-w-3xl mx-auto my-8", children: [
    /* @__PURE__ */ m.jsxs(li, { children: [
      /* @__PURE__ */ m.jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ m.jsx(ci, { className: "text-slate-800", children: "Deal Progress" }) }),
      /* @__PURE__ */ m.jsx("p", { className: "text-sm text-muted-foreground", children: "Current stage and overall progress" })
    ] }),
    /* @__PURE__ */ m.jsx(ui, { children: /* @__PURE__ */ m.jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ m.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ m.jsx("div", { className: "flex flex-wrap justify-between text-xs sm:text-sm text-slate-600", children: Co.map((s) => /* @__PURE__ */ m.jsx("span", { className: `mb-2 ${n === s ? "font-bold" : ""}`, children: s }, s)) }),
        /* @__PURE__ */ m.jsx(
          Ou,
          {
            value: (Co.indexOf(n) + 1) / Co.length * 100,
            className: "h-2"
          }
        ),
        /* @__PURE__ */ m.jsxs("div", { className: "flex justify-between text-xs text-slate-500", children: [
          /* @__PURE__ */ m.jsx("span", { children: "0%" }),
          /* @__PURE__ */ m.jsx("span", { children: "100%" })
        ] })
      ] }),
      /* @__PURE__ */ m.jsxs("div", { className: "pt-4 border-t", children: [
        /* @__PURE__ */ m.jsxs("div", { className: "flex items-center space-x-1 mb-4", children: [
          /* @__PURE__ */ m.jsx("h3", { className: "text-sm font-medium text-slate-700", children: "Outlook" }),
          /* @__PURE__ */ m.jsx(Tr, { children: /* @__PURE__ */ m.jsxs(_r, { children: [
            /* @__PURE__ */ m.jsx(Pr, { children: /* @__PURE__ */ m.jsx(Do, { className: "w-3 h-3 text-muted-foreground" }) }),
            /* @__PURE__ */ m.jsxs(Jn, { className: "max-w-xs", children: [
              /* @__PURE__ */ m.jsx("p", { children: "Predictions based on deal qualification status and comparison with historical deals at the same stage" }),
              /* @__PURE__ */ m.jsx("a", { href: "", children: /* @__PURE__ */ m.jsx("button", { children: "Learn more" }) })
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ m.jsxs("div", { className: "grid grid-cols-2 gap-8", children: [
          /* @__PURE__ */ m.jsxs("div", { children: [
            /* @__PURE__ */ m.jsx("div", { className: "text-sm font-medium text-muted-foreground mb-1", children: "Win Probability" }),
            /* @__PURE__ */ m.jsxs("div", { className: "text-2xl font-bold text-slate-800", children: [
              e.probability,
              "%"
            ] })
          ] }),
          /* @__PURE__ */ m.jsxs("div", { children: [
            /* @__PURE__ */ m.jsxs("div", { className: "text-sm font-medium text-muted-foreground mb-1 space-x-1", children: [
              "Next Stage Probability",
              " "
            ] }),
            /* @__PURE__ */ m.jsxs("div", { className: "text-2xl font-bold text-slate-800", children: [
              o,
              "%"
            ] })
          ] })
        ] })
      ] })
    ] }) })
  ] });
};
function gj({ deal: e }) {
  const t = (n) => {
    switch (n.toLowerCase()) {
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
  return /* @__PURE__ */ m.jsxs(ai, { className: "shadow-lg w-full max-w-3xl mx-auto my-8", children: [
    /* @__PURE__ */ m.jsxs(li, { children: [
      /* @__PURE__ */ m.jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ m.jsx(ci, { className: "text-slate-800", children: "Key Stakeholders" }) }),
      /* @__PURE__ */ m.jsx("p", { className: "text-sm text-slate-500", children: "Engagement levels and relationships" })
    ] }),
    /* @__PURE__ */ m.jsx(ui, { children: /* @__PURE__ */ m.jsx("div", { className: "space-y-4", children: e.keyStakeholders.map((n, o) => /* @__PURE__ */ m.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ m.jsxs("div", { children: [
        /* @__PURE__ */ m.jsx("p", { className: "font-medium", children: n.name }),
        /* @__PURE__ */ m.jsx("p", { className: "text-sm text-slate-500", children: n.role })
      ] }),
      /* @__PURE__ */ m.jsxs("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ m.jsxs(Ru, { className: t(n.engagementLevel), children: [
          n.engagementLevel,
          " Engagement"
        ] }),
        /* @__PURE__ */ m.jsx(Tr, { children: /* @__PURE__ */ m.jsxs(_r, { children: [
          /* @__PURE__ */ m.jsx(Pr, { asChild: !0, children: /* @__PURE__ */ m.jsx(
            gt,
            {
              variant: "ghost",
              size: "sm",
              className: "",
              onClick: () => window.open(n.contactLink, "_blank"),
              children: /* @__PURE__ */ m.jsx(Ym, { className: "w-4 h-4 text-slate-500" })
            }
          ) }),
          /* @__PURE__ */ m.jsx(Jn, { children: /* @__PURE__ */ m.jsx("p", { children: "View contact in CRM" }) })
        ] }) })
      ] })
    ] }, o)) }) })
  ] });
}
const Cp = /* @__PURE__ */ new Set();
function Fa(e, t, n) {
  e || Cp.has(t) || (console.warn(t), Cp.add(t));
}
function pN(e) {
  if (typeof Proxy > "u")
    return e;
  const t = /* @__PURE__ */ new Map(), n = (...o) => (process.env.NODE_ENV !== "production" && Fa(!1, "motion() is deprecated. Use motion.create() instead."), e(...o));
  return new Proxy(n, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (o, s) => s === "create" ? e : (t.has(s) || t.set(s, e(s)), t.get(s))
  });
}
function Ba(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
const Zc = (e) => Array.isArray(e);
function jv(e, t) {
  if (!Array.isArray(t))
    return !1;
  const n = t.length;
  if (n !== e.length)
    return !1;
  for (let o = 0; o < n; o++)
    if (t[o] !== e[o])
      return !1;
  return !0;
}
function ko(e) {
  return typeof e == "string" || Array.isArray(e);
}
function Tp(e) {
  const t = [{}, {}];
  return e == null || e.values.forEach((n, o) => {
    t[0][o] = n.get(), t[1][o] = n.getVelocity();
  }), t;
}
function Du(e, t, n, o) {
  if (typeof t == "function") {
    const [s, c] = Tp(o);
    t = t(n !== void 0 ? n : e.custom, s, c);
  }
  if (typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function") {
    const [s, c] = Tp(o);
    t = t(n !== void 0 ? n : e.custom, s, c);
  }
  return t;
}
function Wa(e, t, n) {
  const o = e.getProps();
  return Du(o, t, n !== void 0 ? n : o.custom, e);
}
const ju = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], Iu = ["initial", ...ju], zo = [
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
], di = new Set(zo), Ln = (e) => e * 1e3, Qn = (e) => e / 1e3, mN = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, gN = (e) => ({
  type: "spring",
  stiffness: 550,
  damping: e === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), vN = {
  type: "keyframes",
  duration: 0.8
}, yN = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, xN = (e, { keyframes: t }) => t.length > 2 ? vN : di.has(e) ? e.startsWith("scale") ? gN(t[1]) : mN : yN;
function Lu(e, t) {
  return e ? e[t] || e.default || e : void 0;
}
const bN = {
  skipAnimations: !1,
  useManualTiming: !1
}, wN = (e) => e !== null;
function $a(e, { repeat: t, repeatType: n = "loop" }, o) {
  const s = e.filter(wN), c = t && n !== "loop" && t % 2 === 1 ? 0 : s.length - 1;
  return !c || o === void 0 ? s[c] : o;
}
const Ct = (e) => e;
function SN(e) {
  let t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set(), o = !1, s = !1;
  const c = /* @__PURE__ */ new WeakSet();
  let l = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  };
  function u(h) {
    c.has(h) && (d.schedule(h), e()), h(l);
  }
  const d = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (h, p = !1, v = !1) => {
      const g = v && o ? t : n;
      return p && c.add(h), g.has(h) || g.add(h), h;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (h) => {
      n.delete(h), c.delete(h);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (h) => {
      if (l = h, o) {
        s = !0;
        return;
      }
      o = !0, [t, n] = [n, t], n.clear(), t.forEach(u), o = !1, s && (s = !1, d.process(h));
    }
  };
  return d;
}
const zs = [
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
], CN = 40;
function Iv(e, t) {
  let n = !1, o = !0;
  const s = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, c = () => n = !0, l = zs.reduce((P, E) => (P[E] = SN(c), P), {}), { read: u, resolveKeyframes: d, update: h, preRender: p, render: v, postRender: x } = l, g = () => {
    const P = performance.now();
    n = !1, s.delta = o ? 1e3 / 60 : Math.max(Math.min(P - s.timestamp, CN), 1), s.timestamp = P, s.isProcessing = !0, u.process(s), d.process(s), h.process(s), p.process(s), v.process(s), x.process(s), s.isProcessing = !1, n && t && (o = !1, e(g));
  }, T = () => {
    n = !0, o = !0, s.isProcessing || e(g);
  };
  return { schedule: zs.reduce((P, E) => {
    const O = l[E];
    return P[E] = (N, j = !1, W = !1) => (n || T(), O.schedule(N, j, W)), P;
  }, {}), cancel: (P) => {
    for (let E = 0; E < zs.length; E++)
      l[zs[E]].cancel(P);
  }, state: s, steps: l };
}
const { schedule: Ge, cancel: Mr, state: St, steps: xc } = Iv(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Ct, !0), Lv = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e, TN = 1e-7, _N = 12;
function PN(e, t, n, o, s) {
  let c, l, u = 0;
  do
    l = t + (n - t) / 2, c = Lv(l, o, s) - e, c > 0 ? n = l : t = l;
  while (Math.abs(c) > TN && ++u < _N);
  return l;
}
function Go(e, t, n, o) {
  if (e === t && n === o)
    return Ct;
  const s = (c) => PN(c, 0, 1, e, n);
  return (c) => c === 0 || c === 1 ? c : Lv(s(c), t, o);
}
const kv = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, Vv = (e) => (t) => 1 - e(1 - t), Fv = /* @__PURE__ */ Go(0.33, 1.53, 0.69, 0.99), ku = /* @__PURE__ */ Vv(Fv), Bv = /* @__PURE__ */ kv(ku), Wv = (e) => (e *= 2) < 1 ? 0.5 * ku(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), Vu = (e) => 1 - Math.sin(Math.acos(e)), $v = Vv(Vu), Uv = kv(Vu), Hv = (e) => /^0[^.\s]+$/u.test(e);
function AN(e) {
  return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || Hv(e) : !0;
}
let Ji = Ct, Or = Ct;
process.env.NODE_ENV !== "production" && (Ji = (e, t) => {
  !e && typeof console < "u" && console.warn(t);
}, Or = (e, t) => {
  if (!e)
    throw new Error(t);
});
const zv = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e), Gv = (e) => (t) => typeof t == "string" && t.startsWith(e), Kv = /* @__PURE__ */ Gv("--"), EN = /* @__PURE__ */ Gv("var(--"), Fu = (e) => EN(e) ? RN.test(e.split("/*")[0].trim()) : !1, RN = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, NN = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function MN(e) {
  const t = NN.exec(e);
  if (!t)
    return [,];
  const [, n, o, s] = t;
  return [`--${n ?? o}`, s];
}
const ON = 4;
function Yv(e, t, n = 1) {
  Or(n <= ON, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);
  const [o, s] = MN(e);
  if (!o)
    return;
  const c = window.getComputedStyle(t).getPropertyValue(o);
  if (c) {
    const l = c.trim();
    return zv(l) ? parseFloat(l) : l;
  }
  return Fu(s) ? Yv(s, t, n + 1) : s;
}
const Dr = (e, t, n) => n > t ? t : n < e ? e : n, Qi = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, Vo = {
  ...Qi,
  transform: (e) => Dr(0, 1, e)
}, Gs = {
  ...Qi,
  default: 1
}, Ko = (e) => ({
  test: (t) => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: (t) => `${t}${e}`
}), wr = /* @__PURE__ */ Ko("deg"), kn = /* @__PURE__ */ Ko("%"), ue = /* @__PURE__ */ Ko("px"), DN = /* @__PURE__ */ Ko("vh"), jN = /* @__PURE__ */ Ko("vw"), _p = {
  ...kn,
  parse: (e) => kn.parse(e) / 100,
  transform: (e) => kn.transform(e * 100)
}, IN = /* @__PURE__ */ new Set([
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
]), Pp = (e) => e === Qi || e === ue, Ap = (e, t) => parseFloat(e.split(", ")[t]), Ep = (e, t) => (n, { transform: o }) => {
  if (o === "none" || !o)
    return 0;
  const s = o.match(/^matrix3d\((.+)\)$/u);
  if (s)
    return Ap(s[1], t);
  {
    const c = o.match(/^matrix\((.+)\)$/u);
    return c ? Ap(c[1], e) : 0;
  }
}, LN = /* @__PURE__ */ new Set(["x", "y", "z"]), kN = zo.filter((e) => !LN.has(e));
function VN(e) {
  const t = [];
  return kN.forEach((n) => {
    const o = e.getValue(n);
    o !== void 0 && (t.push([n, o.get()]), o.set(n.startsWith("scale") ? 1 : 0));
  }), t;
}
const Ui = {
  // Dimensions
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  // Transform
  x: Ep(4, 13),
  y: Ep(5, 14)
};
Ui.translateX = Ui.x;
Ui.translateY = Ui.y;
const qv = (e) => (t) => t.test(e), FN = {
  test: (e) => e === "auto",
  parse: (e) => e
}, Xv = [Qi, ue, kn, wr, jN, DN, FN], Rp = (e) => Xv.find(qv(e)), ni = /* @__PURE__ */ new Set();
let Jc = !1, Qc = !1;
function Zv() {
  if (Qc) {
    const e = Array.from(ni).filter((o) => o.needsMeasurement), t = new Set(e.map((o) => o.element)), n = /* @__PURE__ */ new Map();
    t.forEach((o) => {
      const s = VN(o);
      s.length && (n.set(o, s), o.render());
    }), e.forEach((o) => o.measureInitialState()), t.forEach((o) => {
      o.render();
      const s = n.get(o);
      s && s.forEach(([c, l]) => {
        var u;
        (u = o.getValue(c)) === null || u === void 0 || u.set(l);
      });
    }), e.forEach((o) => o.measureEndState()), e.forEach((o) => {
      o.suspendedScrollY !== void 0 && window.scrollTo(0, o.suspendedScrollY);
    });
  }
  Qc = !1, Jc = !1, ni.forEach((e) => e.complete()), ni.clear();
}
function Jv() {
  ni.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (Qc = !0);
  });
}
function BN() {
  Jv(), Zv();
}
class Bu {
  constructor(t, n, o, s, c, l = !1) {
    this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...t], this.onComplete = n, this.name = o, this.motionValue = s, this.element = c, this.isAsync = l;
  }
  scheduleResolve() {
    this.isScheduled = !0, this.isAsync ? (ni.add(this), Jc || (Jc = !0, Ge.read(Jv), Ge.resolveKeyframes(Zv))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, name: n, element: o, motionValue: s } = this;
    for (let c = 0; c < t.length; c++)
      if (t[c] === null)
        if (c === 0) {
          const l = s == null ? void 0 : s.get(), u = t[t.length - 1];
          if (l !== void 0)
            t[0] = l;
          else if (o && n) {
            const d = o.readValue(n, u);
            d != null && (t[0] = d);
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
    this.isComplete = !0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), ni.delete(this);
  }
  cancel() {
    this.isComplete || (this.isScheduled = !1, ni.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const No = (e) => Math.round(e * 1e5) / 1e5, Wu = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function WN(e) {
  return e == null;
}
const $N = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, $u = (e, t) => (n) => !!(typeof n == "string" && $N.test(n) && n.startsWith(e) || t && !WN(n) && Object.prototype.hasOwnProperty.call(n, t)), Qv = (e, t, n) => (o) => {
  if (typeof o != "string")
    return o;
  const [s, c, l, u] = o.match(Wu);
  return {
    [e]: parseFloat(s),
    [t]: parseFloat(c),
    [n]: parseFloat(l),
    alpha: u !== void 0 ? parseFloat(u) : 1
  };
}, UN = (e) => Dr(0, 255, e), bc = {
  ...Qi,
  transform: (e) => Math.round(UN(e))
}, ei = {
  test: /* @__PURE__ */ $u("rgb", "red"),
  parse: /* @__PURE__ */ Qv("red", "green", "blue"),
  transform: ({ red: e, green: t, blue: n, alpha: o = 1 }) => "rgba(" + bc.transform(e) + ", " + bc.transform(t) + ", " + bc.transform(n) + ", " + No(Vo.transform(o)) + ")"
};
function HN(e) {
  let t = "", n = "", o = "", s = "";
  return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), o = e.substring(5, 7), s = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), o = e.substring(3, 4), s = e.substring(4, 5), t += t, n += n, o += o, s += s), {
    red: parseInt(t, 16),
    green: parseInt(n, 16),
    blue: parseInt(o, 16),
    alpha: s ? parseInt(s, 16) / 255 : 1
  };
}
const eu = {
  test: /* @__PURE__ */ $u("#"),
  parse: HN,
  transform: ei.transform
}, Di = {
  test: /* @__PURE__ */ $u("hsl", "hue"),
  parse: /* @__PURE__ */ Qv("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: t, lightness: n, alpha: o = 1 }) => "hsla(" + Math.round(e) + ", " + kn.transform(No(t)) + ", " + kn.transform(No(n)) + ", " + No(Vo.transform(o)) + ")"
}, Rt = {
  test: (e) => ei.test(e) || eu.test(e) || Di.test(e),
  parse: (e) => ei.test(e) ? ei.parse(e) : Di.test(e) ? Di.parse(e) : eu.parse(e),
  transform: (e) => typeof e == "string" ? e : e.hasOwnProperty("red") ? ei.transform(e) : Di.transform(e)
}, zN = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function GN(e) {
  var t, n;
  return isNaN(e) && typeof e == "string" && (((t = e.match(Wu)) === null || t === void 0 ? void 0 : t.length) || 0) + (((n = e.match(zN)) === null || n === void 0 ? void 0 : n.length) || 0) > 0;
}
const ey = "number", ty = "color", KN = "var", YN = "var(", Np = "${}", qN = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Fo(e) {
  const t = e.toString(), n = [], o = {
    color: [],
    number: [],
    var: []
  }, s = [];
  let c = 0;
  const u = t.replace(qN, (d) => (Rt.test(d) ? (o.color.push(c), s.push(ty), n.push(Rt.parse(d))) : d.startsWith(YN) ? (o.var.push(c), s.push(KN), n.push(d)) : (o.number.push(c), s.push(ey), n.push(parseFloat(d))), ++c, Np)).split(Np);
  return { values: n, split: u, indexes: o, types: s };
}
function ny(e) {
  return Fo(e).values;
}
function ry(e) {
  const { split: t, types: n } = Fo(e), o = t.length;
  return (s) => {
    let c = "";
    for (let l = 0; l < o; l++)
      if (c += t[l], s[l] !== void 0) {
        const u = n[l];
        u === ey ? c += No(s[l]) : u === ty ? c += Rt.transform(s[l]) : c += s[l];
      }
    return c;
  };
}
const XN = (e) => typeof e == "number" ? 0 : e;
function ZN(e) {
  const t = ny(e);
  return ry(e)(t.map(XN));
}
const jr = {
  test: GN,
  parse: ny,
  createTransformer: ry,
  getAnimatableNone: ZN
}, JN = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function QN(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow")
    return e;
  const [o] = n.match(Wu) || [];
  if (!o)
    return e;
  const s = n.replace(o, "");
  let c = JN.has(t) ? 1 : 0;
  return o !== n && (c *= 100), t + "(" + c + s + ")";
}
const e2 = /\b([a-z-]*)\(.*?\)/gu, tu = {
  ...jr,
  getAnimatableNone: (e) => {
    const t = e.match(e2);
    return t ? t.map(QN).join(" ") : e;
  }
}, t2 = {
  // Border props
  borderWidth: ue,
  borderTopWidth: ue,
  borderRightWidth: ue,
  borderBottomWidth: ue,
  borderLeftWidth: ue,
  borderRadius: ue,
  radius: ue,
  borderTopLeftRadius: ue,
  borderTopRightRadius: ue,
  borderBottomRightRadius: ue,
  borderBottomLeftRadius: ue,
  // Positioning props
  width: ue,
  maxWidth: ue,
  height: ue,
  maxHeight: ue,
  top: ue,
  right: ue,
  bottom: ue,
  left: ue,
  // Spacing props
  padding: ue,
  paddingTop: ue,
  paddingRight: ue,
  paddingBottom: ue,
  paddingLeft: ue,
  margin: ue,
  marginTop: ue,
  marginRight: ue,
  marginBottom: ue,
  marginLeft: ue,
  // Misc
  backgroundPositionX: ue,
  backgroundPositionY: ue
}, n2 = {
  rotate: wr,
  rotateX: wr,
  rotateY: wr,
  rotateZ: wr,
  scale: Gs,
  scaleX: Gs,
  scaleY: Gs,
  scaleZ: Gs,
  skew: wr,
  skewX: wr,
  skewY: wr,
  distance: ue,
  translateX: ue,
  translateY: ue,
  translateZ: ue,
  x: ue,
  y: ue,
  z: ue,
  perspective: ue,
  transformPerspective: ue,
  opacity: Vo,
  originX: _p,
  originY: _p,
  originZ: ue
}, Mp = {
  ...Qi,
  transform: Math.round
}, Uu = {
  ...t2,
  ...n2,
  zIndex: Mp,
  size: ue,
  // SVG
  fillOpacity: Vo,
  strokeOpacity: Vo,
  numOctaves: Mp
}, r2 = {
  ...Uu,
  // Color props
  color: Rt,
  backgroundColor: Rt,
  outlineColor: Rt,
  fill: Rt,
  stroke: Rt,
  // Border props
  borderColor: Rt,
  borderTopColor: Rt,
  borderRightColor: Rt,
  borderBottomColor: Rt,
  borderLeftColor: Rt,
  filter: tu,
  WebkitFilter: tu
}, Hu = (e) => r2[e];
function iy(e, t) {
  let n = Hu(e);
  return n !== tu && (n = jr), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
}
const i2 = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function o2(e, t, n) {
  let o = 0, s;
  for (; o < e.length && !s; ) {
    const c = e[o];
    typeof c == "string" && !i2.has(c) && Fo(c).values.length && (s = e[o]), o++;
  }
  if (s && n)
    for (const c of t)
      e[c] = iy(n, s);
}
class oy extends Bu {
  constructor(t, n, o, s, c) {
    super(t, n, o, s, c, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: o } = this;
    if (!n || !n.current)
      return;
    super.readKeyframes();
    for (let d = 0; d < t.length; d++) {
      let h = t[d];
      if (typeof h == "string" && (h = h.trim(), Fu(h))) {
        const p = Yv(h, n.current);
        p !== void 0 && (t[d] = p), d === t.length - 1 && (this.finalKeyframe = h);
      }
    }
    if (this.resolveNoneKeyframes(), !IN.has(o) || t.length !== 2)
      return;
    const [s, c] = t, l = Rp(s), u = Rp(c);
    if (l !== u)
      if (Pp(l) && Pp(u))
        for (let d = 0; d < t.length; d++) {
          const h = t[d];
          typeof h == "string" && (t[d] = parseFloat(h));
        }
      else
        this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this, o = [];
    for (let s = 0; s < t.length; s++)
      AN(t[s]) && o.push(s);
    o.length && o2(t, o, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: o } = this;
    if (!t || !t.current)
      return;
    o === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = Ui[o](t.measureViewportBox(), window.getComputedStyle(t.current)), n[0] = this.measuredOrigin;
    const s = n[n.length - 1];
    s !== void 0 && t.getValue(o, s).jump(s, !1);
  }
  measureEndState() {
    var t;
    const { element: n, name: o, unresolvedKeyframes: s } = this;
    if (!n || !n.current)
      return;
    const c = n.getValue(o);
    c && c.jump(this.measuredOrigin, !1);
    const l = s.length - 1, u = s[l];
    s[l] = Ui[o](n.measureViewportBox(), window.getComputedStyle(n.current)), u !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = u), !((t = this.removedTransforms) === null || t === void 0) && t.length && this.removedTransforms.forEach(([d, h]) => {
      n.getValue(d).set(h);
    }), this.resolveNoneKeyframes();
  }
}
function zu(e) {
  return typeof e == "function";
}
let Qs;
function s2() {
  Qs = void 0;
}
const Vn = {
  now: () => (Qs === void 0 && Vn.set(St.isProcessing || bN.useManualTiming ? St.timestamp : performance.now()), Qs),
  set: (e) => {
    Qs = e, queueMicrotask(s2);
  }
}, Op = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && // It's animatable if we have a string
(jr.test(e) || e === "0") && // And it contains numbers and/or colors
!e.startsWith("url("));
function a2(e) {
  const t = e[0];
  if (e.length === 1)
    return !0;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t)
      return !0;
}
function l2(e, t, n, o) {
  const s = e[0];
  if (s === null)
    return !1;
  if (t === "display" || t === "visibility")
    return !0;
  const c = e[e.length - 1], l = Op(s, t), u = Op(c, t);
  return Ji(l === u, `You are trying to animate ${t} from "${s}" to "${c}". ${s} is not an animatable value - to enable this animation set ${s} to a value animatable to ${c} via the \`style\` property.`), !l || !u ? !1 : a2(e) || (n === "spring" || zu(n)) && o;
}
const c2 = 40;
class sy {
  constructor({ autoplay: t = !0, delay: n = 0, type: o = "keyframes", repeat: s = 0, repeatDelay: c = 0, repeatType: l = "loop", ...u }) {
    this.isStopped = !1, this.hasAttemptedResolve = !1, this.createdAt = Vn.now(), this.options = {
      autoplay: t,
      delay: n,
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
    return this.resolvedAt ? this.resolvedAt - this.createdAt > c2 ? this.resolvedAt : this.createdAt : this.createdAt;
  }
  /**
   * A getter for resolved data. If keyframes are not yet resolved, accessing
   * this.resolved will synchronously flush all pending keyframe resolvers.
   * This is a deoptimisation, but at its worst still batches read/writes.
   */
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && BN(), this._resolved;
  }
  /**
   * A method to be called when the keyframes resolver completes. This method
   * will check if its possible to run the animation and, if not, skip it.
   * Otherwise, it will call initPlayback on the implementing class.
   */
  onKeyframesResolved(t, n) {
    this.resolvedAt = Vn.now(), this.hasAttemptedResolve = !0;
    const { name: o, type: s, velocity: c, delay: l, onComplete: u, onUpdate: d, isGenerator: h } = this.options;
    if (!h && !l2(t, o, s, c))
      if (l)
        this.options.duration = 0;
      else {
        d == null || d($a(t, this.options, n)), u == null || u(), this.resolveFinishedPromise();
        return;
      }
    const p = this.initPlayback(t, n);
    p !== !1 && (this._resolved = {
      keyframes: t,
      finalKeyframe: n,
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
  then(t, n) {
    return this.currentFinishedPromise.then(t, n);
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
function ay(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const u2 = 5;
function ly(e, t, n) {
  const o = Math.max(t - u2, 0);
  return ay(n - e(o), t - o);
}
const wc = 1e-3, d2 = 0.01, Dp = 10, f2 = 0.05, h2 = 1;
function p2({ duration: e = 800, bounce: t = 0.25, velocity: n = 0, mass: o = 1 }) {
  let s, c;
  Ji(e <= Ln(Dp), "Spring duration must be 10 seconds or less");
  let l = 1 - t;
  l = Dr(f2, h2, l), e = Dr(d2, Dp, Qn(e)), l < 1 ? (s = (h) => {
    const p = h * l, v = p * e, x = p - n, g = nu(h, l), T = Math.exp(-v);
    return wc - x / g * T;
  }, c = (h) => {
    const v = h * l * e, x = v * n + n, g = Math.pow(l, 2) * Math.pow(h, 2) * e, T = Math.exp(-v), S = nu(Math.pow(h, 2), l);
    return (-s(h) + wc > 0 ? -1 : 1) * ((x - g) * T) / S;
  }) : (s = (h) => {
    const p = Math.exp(-h * e), v = (h - n) * e + 1;
    return -wc + p * v;
  }, c = (h) => {
    const p = Math.exp(-h * e), v = (n - h) * (e * e);
    return p * v;
  });
  const u = 5 / e, d = g2(s, c, u);
  if (e = Ln(e), isNaN(d))
    return {
      stiffness: 100,
      damping: 10,
      duration: e
    };
  {
    const h = Math.pow(d, 2) * o;
    return {
      stiffness: h,
      damping: l * 2 * Math.sqrt(o * h),
      duration: e
    };
  }
}
const m2 = 12;
function g2(e, t, n) {
  let o = n;
  for (let s = 1; s < m2; s++)
    o = o - e(o) / t(o);
  return o;
}
function nu(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const v2 = ["duration", "bounce"], y2 = ["stiffness", "damping", "mass"];
function jp(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function x2(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!jp(e, y2) && jp(e, v2)) {
    const n = p2(e);
    t = {
      ...t,
      ...n,
      mass: 1
    }, t.isResolvedFromDuration = !0;
  }
  return t;
}
function cy({ keyframes: e, restDelta: t, restSpeed: n, ...o }) {
  const s = e[0], c = e[e.length - 1], l = { done: !1, value: s }, { stiffness: u, damping: d, mass: h, duration: p, velocity: v, isResolvedFromDuration: x } = x2({
    ...o,
    velocity: -Qn(o.velocity || 0)
  }), g = v || 0, T = d / (2 * Math.sqrt(u * h)), S = c - s, _ = Qn(Math.sqrt(u / h)), P = Math.abs(S) < 5;
  n || (n = P ? 0.01 : 2), t || (t = P ? 5e-3 : 0.5);
  let E;
  if (T < 1) {
    const O = nu(_, T);
    E = (N) => {
      const j = Math.exp(-T * _ * N);
      return c - j * ((g + T * _ * S) / O * Math.sin(O * N) + S * Math.cos(O * N));
    };
  } else if (T === 1)
    E = (O) => c - Math.exp(-_ * O) * (S + (g + _ * S) * O);
  else {
    const O = _ * Math.sqrt(T * T - 1);
    E = (N) => {
      const j = Math.exp(-T * _ * N), W = Math.min(O * N, 300);
      return c - j * ((g + T * _ * S) * Math.sinh(W) + O * S * Math.cosh(W)) / O;
    };
  }
  return {
    calculatedDuration: x && p || null,
    next: (O) => {
      const N = E(O);
      if (x)
        l.done = O >= p;
      else {
        let j = 0;
        T < 1 && (j = O === 0 ? Ln(g) : ly(E, O, N));
        const W = Math.abs(j) <= n, $ = Math.abs(c - N) <= t;
        l.done = W && $;
      }
      return l.value = l.done ? c : N, l;
    }
  };
}
function Ip({ keyframes: e, velocity: t = 0, power: n = 0.8, timeConstant: o = 325, bounceDamping: s = 10, bounceStiffness: c = 500, modifyTarget: l, min: u, max: d, restDelta: h = 0.5, restSpeed: p }) {
  const v = e[0], x = {
    done: !1,
    value: v
  }, g = (H) => u !== void 0 && H < u || d !== void 0 && H > d, T = (H) => u === void 0 ? d : d === void 0 || Math.abs(u - H) < Math.abs(d - H) ? u : d;
  let S = n * t;
  const _ = v + S, P = l === void 0 ? _ : l(_);
  P !== _ && (S = P - v);
  const E = (H) => -S * Math.exp(-H / o), O = (H) => P + E(H), N = (H) => {
    const te = E(H), re = O(H);
    x.done = Math.abs(te) <= h, x.value = x.done ? P : re;
  };
  let j, W;
  const $ = (H) => {
    g(x.value) && (j = H, W = cy({
      keyframes: [x.value, T(x.value)],
      velocity: ly(O, H, x.value),
      // TODO: This should be passing * 1000
      damping: s,
      stiffness: c,
      restDelta: h,
      restSpeed: p
    }));
  };
  return $(0), {
    calculatedDuration: null,
    next: (H) => {
      let te = !1;
      return !W && j === void 0 && (te = !0, N(H), $(H)), j !== void 0 && H >= j ? W.next(H - j) : (!te && N(H), x);
    }
  };
}
const b2 = /* @__PURE__ */ Go(0.42, 0, 1, 1), w2 = /* @__PURE__ */ Go(0, 0, 0.58, 1), uy = /* @__PURE__ */ Go(0.42, 0, 0.58, 1), S2 = (e) => Array.isArray(e) && typeof e[0] != "number", Gu = (e) => Array.isArray(e) && typeof e[0] == "number", Lp = {
  linear: Ct,
  easeIn: b2,
  easeInOut: uy,
  easeOut: w2,
  circIn: Vu,
  circInOut: Uv,
  circOut: $v,
  backIn: ku,
  backInOut: Bv,
  backOut: Fv,
  anticipate: Wv
}, kp = (e) => {
  if (Gu(e)) {
    Or(e.length === 4, "Cubic bezier arrays must contain four numerical values.");
    const [t, n, o, s] = e;
    return Go(t, n, o, s);
  } else if (typeof e == "string")
    return Or(Lp[e] !== void 0, `Invalid easing type '${e}'`), Lp[e];
  return e;
}, C2 = (e, t) => (n) => t(e(n)), er = (...e) => e.reduce(C2), Hi = (e, t, n) => {
  const o = t - e;
  return o === 0 ? 1 : (n - e) / o;
}, rt = (e, t, n) => e + (t - e) * n;
function Sc(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function T2({ hue: e, saturation: t, lightness: n, alpha: o }) {
  e /= 360, t /= 100, n /= 100;
  let s = 0, c = 0, l = 0;
  if (!t)
    s = c = l = n;
  else {
    const u = n < 0.5 ? n * (1 + t) : n + t - n * t, d = 2 * n - u;
    s = Sc(d, u, e + 1 / 3), c = Sc(d, u, e), l = Sc(d, u, e - 1 / 3);
  }
  return {
    red: Math.round(s * 255),
    green: Math.round(c * 255),
    blue: Math.round(l * 255),
    alpha: o
  };
}
function ha(e, t) {
  return (n) => n > 0 ? t : e;
}
const Cc = (e, t, n) => {
  const o = e * e, s = n * (t * t - o) + o;
  return s < 0 ? 0 : Math.sqrt(s);
}, _2 = [eu, ei, Di], P2 = (e) => _2.find((t) => t.test(e));
function Vp(e) {
  const t = P2(e);
  if (Ji(!!t, `'${e}' is not an animatable color. Use the equivalent color code instead.`), !t)
    return !1;
  let n = t.parse(e);
  return t === Di && (n = T2(n)), n;
}
const Fp = (e, t) => {
  const n = Vp(e), o = Vp(t);
  if (!n || !o)
    return ha(e, t);
  const s = { ...n };
  return (c) => (s.red = Cc(n.red, o.red, c), s.green = Cc(n.green, o.green, c), s.blue = Cc(n.blue, o.blue, c), s.alpha = rt(n.alpha, o.alpha, c), ei.transform(s));
}, ru = /* @__PURE__ */ new Set(["none", "hidden"]);
function A2(e, t) {
  return ru.has(e) ? (n) => n <= 0 ? e : t : (n) => n >= 1 ? t : e;
}
function E2(e, t) {
  return (n) => rt(e, t, n);
}
function Ku(e) {
  return typeof e == "number" ? E2 : typeof e == "string" ? Fu(e) ? ha : Rt.test(e) ? Fp : M2 : Array.isArray(e) ? dy : typeof e == "object" ? Rt.test(e) ? Fp : R2 : ha;
}
function dy(e, t) {
  const n = [...e], o = n.length, s = e.map((c, l) => Ku(c)(c, t[l]));
  return (c) => {
    for (let l = 0; l < o; l++)
      n[l] = s[l](c);
    return n;
  };
}
function R2(e, t) {
  const n = { ...e, ...t }, o = {};
  for (const s in n)
    e[s] !== void 0 && t[s] !== void 0 && (o[s] = Ku(e[s])(e[s], t[s]));
  return (s) => {
    for (const c in o)
      n[c] = o[c](s);
    return n;
  };
}
function N2(e, t) {
  var n;
  const o = [], s = { color: 0, var: 0, number: 0 };
  for (let c = 0; c < t.values.length; c++) {
    const l = t.types[c], u = e.indexes[l][s[l]], d = (n = e.values[u]) !== null && n !== void 0 ? n : 0;
    o[c] = d, s[l]++;
  }
  return o;
}
const M2 = (e, t) => {
  const n = jr.createTransformer(t), o = Fo(e), s = Fo(t);
  return o.indexes.var.length === s.indexes.var.length && o.indexes.color.length === s.indexes.color.length && o.indexes.number.length >= s.indexes.number.length ? ru.has(e) && !s.values.length || ru.has(t) && !o.values.length ? A2(e, t) : er(dy(N2(o, s), s.values), n) : (Ji(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), ha(e, t));
};
function fy(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number" ? rt(e, t, n) : Ku(e)(e, t);
}
function O2(e, t, n) {
  const o = [], s = n || fy, c = e.length - 1;
  for (let l = 0; l < c; l++) {
    let u = s(e[l], e[l + 1]);
    if (t) {
      const d = Array.isArray(t) ? t[l] || Ct : t;
      u = er(d, u);
    }
    o.push(u);
  }
  return o;
}
function D2(e, t, { clamp: n = !0, ease: o, mixer: s } = {}) {
  const c = e.length;
  if (Or(c === t.length, "Both input and output ranges must be the same length"), c === 1)
    return () => t[0];
  if (c === 2 && e[0] === e[1])
    return () => t[1];
  e[0] > e[c - 1] && (e = [...e].reverse(), t = [...t].reverse());
  const l = O2(t, o, s), u = l.length, d = (h) => {
    let p = 0;
    if (u > 1)
      for (; p < e.length - 2 && !(h < e[p + 1]); p++)
        ;
    const v = Hi(e[p], e[p + 1], h);
    return l[p](v);
  };
  return n ? (h) => d(Dr(e[0], e[c - 1], h)) : d;
}
function j2(e, t) {
  const n = e[e.length - 1];
  for (let o = 1; o <= t; o++) {
    const s = Hi(0, t, o);
    e.push(rt(n, 1, s));
  }
}
function I2(e) {
  const t = [0];
  return j2(t, e.length - 1), t;
}
function L2(e, t) {
  return e.map((n) => n * t);
}
function k2(e, t) {
  return e.map(() => t || uy).splice(0, e.length - 1);
}
function pa({ duration: e = 300, keyframes: t, times: n, ease: o = "easeInOut" }) {
  const s = S2(o) ? o.map(kp) : kp(o), c = {
    done: !1,
    value: t[0]
  }, l = L2(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    n && n.length === t.length ? n : I2(t),
    e
  ), u = D2(l, t, {
    ease: Array.isArray(s) ? s : k2(t, s)
  });
  return {
    calculatedDuration: e,
    next: (d) => (c.value = u(d), c.done = d >= e, c)
  };
}
const Bp = 2e4;
function V2(e) {
  let t = 0;
  const n = 50;
  let o = e.next(t);
  for (; !o.done && t < Bp; )
    t += n, o = e.next(t);
  return t >= Bp ? 1 / 0 : t;
}
const F2 = (e) => {
  const t = ({ timestamp: n }) => e(n);
  return {
    start: () => Ge.update(t, !0),
    stop: () => Mr(t),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => St.isProcessing ? St.timestamp : Vn.now()
  };
}, B2 = {
  decay: Ip,
  inertia: Ip,
  tween: pa,
  keyframes: pa,
  spring: cy
}, W2 = (e) => e / 100;
class Yu extends sy {
  constructor(t) {
    super(t), this.holdTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.startTime = null, this.state = "idle", this.stop = () => {
      if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle")
        return;
      this.teardown();
      const { onStop: d } = this.options;
      d && d();
    };
    const { name: n, motionValue: o, element: s, keyframes: c } = this.options, l = (s == null ? void 0 : s.KeyframeResolver) || Bu, u = (d, h) => this.onKeyframesResolved(d, h);
    this.resolver = new l(c, u, n, o, s), this.resolver.scheduleResolve();
  }
  flatten() {
    super.flatten(), this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes));
  }
  initPlayback(t) {
    const { type: n = "keyframes", repeat: o = 0, repeatDelay: s = 0, repeatType: c, velocity: l = 0 } = this.options, u = zu(n) ? n : B2[n] || pa;
    let d, h;
    u !== pa && typeof t[0] != "number" && (process.env.NODE_ENV !== "production" && Or(t.length === 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${t}`), d = er(W2, fy(t[0], t[1])), t = [0, 100]);
    const p = u({ ...this.options, keyframes: t });
    c === "mirror" && (h = u({
      ...this.options,
      keyframes: [...t].reverse(),
      velocity: -l
    })), p.calculatedDuration === null && (p.calculatedDuration = V2(p));
    const { calculatedDuration: v } = p, x = v + s, g = x * (o + 1) - s;
    return {
      generator: p,
      mirroredGenerator: h,
      mapPercentToKeyframes: d,
      calculatedDuration: v,
      resolvedDuration: x,
      totalDuration: g
    };
  }
  onPostResolved() {
    const { autoplay: t = !0 } = this.options;
    this.play(), this.pendingPlayState === "paused" || !t ? this.pause() : this.state = this.pendingPlayState;
  }
  tick(t, n = !1) {
    const { resolved: o } = this;
    if (!o) {
      const { keyframes: H } = this.options;
      return { done: !0, value: H[H.length - 1] };
    }
    const { finalKeyframe: s, generator: c, mirroredGenerator: l, mapPercentToKeyframes: u, keyframes: d, calculatedDuration: h, totalDuration: p, resolvedDuration: v } = o;
    if (this.startTime === null)
      return c.next(0);
    const { delay: x, repeat: g, repeatType: T, repeatDelay: S, onUpdate: _ } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - p / this.speed, this.startTime)), n ? this.currentTime = t : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(t - this.startTime) * this.speed;
    const P = this.currentTime - x * (this.speed >= 0 ? 1 : -1), E = this.speed >= 0 ? P < 0 : P > p;
    this.currentTime = Math.max(P, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = p);
    let O = this.currentTime, N = c;
    if (g) {
      const H = Math.min(this.currentTime, p) / v;
      let te = Math.floor(H), re = H % 1;
      !re && H >= 1 && (re = 1), re === 1 && te--, te = Math.min(te, g + 1), !!(te % 2) && (T === "reverse" ? (re = 1 - re, S && (re -= S / v)) : T === "mirror" && (N = l)), O = Dr(0, 1, re) * v;
    }
    const j = E ? { done: !1, value: d[0] } : N.next(O);
    u && (j.value = u(j.value));
    let { done: W } = j;
    !E && h !== null && (W = this.speed >= 0 ? this.currentTime >= p : this.currentTime <= 0);
    const $ = this.holdTime === null && (this.state === "finished" || this.state === "running" && W);
    return $ && s !== void 0 && (j.value = $a(d, this.options, s)), _ && _(j.value), $ && this.finish(), j;
  }
  get duration() {
    const { resolved: t } = this;
    return t ? Qn(t.calculatedDuration) : 0;
  }
  get time() {
    return Qn(this.currentTime);
  }
  set time(t) {
    t = Ln(t), this.currentTime = t, this.holdTime !== null || this.speed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const n = this.playbackSpeed !== t;
    this.playbackSpeed = t, n && (this.time = Qn(this.currentTime));
  }
  play() {
    if (this.resolver.isScheduled || this.resolver.resume(), !this._resolved) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped)
      return;
    const { driver: t = F2, onPlay: n, startTime: o } = this.options;
    this.driver || (this.driver = t((c) => this.tick(c))), n && n();
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
const $2 = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Can be accelerated but currently disabled until https://issues.chromium.org/issues/41491098 is resolved
  // or until we implement support for linear() easing.
  // "background-color"
]), U2 = 10, H2 = (e, t) => {
  let n = "";
  const o = Math.max(Math.round(t / U2), 2);
  for (let s = 0; s < o; s++)
    n += e(Hi(0, o - 1, s)) + ", ";
  return `linear(${n.substring(0, n.length - 2)})`;
};
function qu(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const z2 = {
  linearEasing: void 0
};
function G2(e, t) {
  const n = qu(e);
  return () => {
    var o;
    return (o = z2[t]) !== null && o !== void 0 ? o : n();
  };
}
const ma = /* @__PURE__ */ G2(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing");
function hy(e) {
  return !!(typeof e == "function" && ma() || !e || typeof e == "string" && (e in iu || ma()) || Gu(e) || Array.isArray(e) && e.every(hy));
}
const Po = ([e, t, n, o]) => `cubic-bezier(${e}, ${t}, ${n}, ${o})`, iu = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ Po([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ Po([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ Po([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ Po([0.33, 1.53, 0.69, 0.99])
};
function py(e, t) {
  if (e)
    return typeof e == "function" && ma() ? H2(e, t) : Gu(e) ? Po(e) : Array.isArray(e) ? e.map((n) => py(n, t) || iu.easeOut) : iu[e];
}
function K2(e, t, n, { delay: o = 0, duration: s = 300, repeat: c = 0, repeatType: l = "loop", ease: u = "easeInOut", times: d } = {}) {
  const h = { [t]: n };
  d && (h.offset = d);
  const p = py(u, s);
  return Array.isArray(p) && (h.easing = p), e.animate(h, {
    delay: o,
    duration: s,
    easing: Array.isArray(p) ? "linear" : p,
    fill: "both",
    iterations: c + 1,
    direction: l === "reverse" ? "alternate" : "normal"
  });
}
function Wp(e, t) {
  e.timeline = t, e.onfinish = null;
}
const Y2 = /* @__PURE__ */ qu(() => Object.hasOwnProperty.call(Element.prototype, "animate")), ga = 10, q2 = 2e4;
function X2(e) {
  return zu(e.type) || e.type === "spring" || !hy(e.ease);
}
function Z2(e, t) {
  const n = new Yu({
    ...t,
    keyframes: e,
    repeat: 0,
    delay: 0,
    isGenerator: !0
  });
  let o = { done: !1, value: e[0] };
  const s = [];
  let c = 0;
  for (; !o.done && c < q2; )
    o = n.sample(c), s.push(o.value), c += ga;
  return {
    times: void 0,
    keyframes: s,
    duration: c - ga,
    ease: "linear"
  };
}
const my = {
  anticipate: Wv,
  backInOut: Bv,
  circInOut: Uv
};
function J2(e) {
  return e in my;
}
class $p extends sy {
  constructor(t) {
    super(t);
    const { name: n, motionValue: o, element: s, keyframes: c } = this.options;
    this.resolver = new oy(c, (l, u) => this.onKeyframesResolved(l, u), n, o, s), this.resolver.scheduleResolve();
  }
  initPlayback(t, n) {
    var o;
    let { duration: s = 300, times: c, ease: l, type: u, motionValue: d, name: h, startTime: p } = this.options;
    if (!(!((o = d.owner) === null || o === void 0) && o.current))
      return !1;
    if (typeof l == "string" && ma() && J2(l) && (l = my[l]), X2(this.options)) {
      const { onComplete: x, onUpdate: g, motionValue: T, element: S, ..._ } = this.options, P = Z2(t, _);
      t = P.keyframes, t.length === 1 && (t[1] = t[0]), s = P.duration, c = P.times, l = P.ease, u = "keyframes";
    }
    const v = K2(d.owner.current, h, t, { ...this.options, duration: s, times: c, ease: l });
    return v.startTime = p ?? this.calcStartTime(), this.pendingTimeline ? (Wp(v, this.pendingTimeline), this.pendingTimeline = void 0) : v.onfinish = () => {
      const { onComplete: x } = this.options;
      d.set($a(t, this.options, n)), x && x(), this.cancel(), this.resolveFinishedPromise();
    }, {
      animation: v,
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
    const { duration: n } = t;
    return Qn(n);
  }
  get time() {
    const { resolved: t } = this;
    if (!t)
      return 0;
    const { animation: n } = t;
    return Qn(n.currentTime || 0);
  }
  set time(t) {
    const { resolved: n } = this;
    if (!n)
      return;
    const { animation: o } = n;
    o.currentTime = Ln(t);
  }
  get speed() {
    const { resolved: t } = this;
    if (!t)
      return 1;
    const { animation: n } = t;
    return n.playbackRate;
  }
  set speed(t) {
    const { resolved: n } = this;
    if (!n)
      return;
    const { animation: o } = n;
    o.playbackRate = t;
  }
  get state() {
    const { resolved: t } = this;
    if (!t)
      return "idle";
    const { animation: n } = t;
    return n.playState;
  }
  get startTime() {
    const { resolved: t } = this;
    if (!t)
      return null;
    const { animation: n } = t;
    return n.startTime;
  }
  /**
   * Replace the default DocumentTimeline with another AnimationTimeline.
   * Currently used for scroll animations.
   */
  attachTimeline(t) {
    if (!this._resolved)
      this.pendingTimeline = t;
    else {
      const { resolved: n } = this;
      if (!n)
        return Ct;
      const { animation: o } = n;
      Wp(o, t);
    }
    return Ct;
  }
  play() {
    if (this.isStopped)
      return;
    const { resolved: t } = this;
    if (!t)
      return;
    const { animation: n } = t;
    n.playState === "finished" && this.updateFinishedPromise(), n.play();
  }
  pause() {
    const { resolved: t } = this;
    if (!t)
      return;
    const { animation: n } = t;
    n.pause();
  }
  stop() {
    if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle")
      return;
    this.resolveFinishedPromise(), this.updateFinishedPromise();
    const { resolved: t } = this;
    if (!t)
      return;
    const { animation: n, keyframes: o, duration: s, type: c, ease: l, times: u } = t;
    if (n.playState === "idle" || n.playState === "finished")
      return;
    if (this.time) {
      const { motionValue: h, onUpdate: p, onComplete: v, element: x, ...g } = this.options, T = new Yu({
        ...g,
        keyframes: o,
        duration: s,
        type: c,
        ease: l,
        times: u,
        isGenerator: !0
      }), S = Ln(this.time);
      h.setWithVelocity(T.sample(S - ga).value, T.sample(S).value, ga);
    }
    const { onStop: d } = this.options;
    d && d(), this.cancel();
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
    const { motionValue: n, name: o, repeatDelay: s, repeatType: c, damping: l, type: u } = t;
    return Y2() && o && $2.has(o) && n && n.owner && n.owner.current instanceof HTMLElement && /**
     * If we're outputting values to onUpdate then we can't use WAAPI as there's
     * no way to read the value from WAAPI every frame.
     */
    !n.owner.getProps().onUpdate && !s && c !== "mirror" && l !== 0 && u !== "inertia";
  }
}
const Q2 = qu(() => window.ScrollTimeline !== void 0);
class eM {
  constructor(t) {
    this.stop = () => this.runAll("stop"), this.animations = t.filter(Boolean);
  }
  then(t, n) {
    return Promise.all(this.animations).then(t).catch(n);
  }
  /**
   * TODO: Filter out cancelled or stopped animations before returning
   */
  getAll(t) {
    return this.animations[0][t];
  }
  setAll(t, n) {
    for (let o = 0; o < this.animations.length; o++)
      this.animations[o][t] = n;
  }
  attachTimeline(t, n) {
    const o = this.animations.map((s) => Q2() && s.attachTimeline ? s.attachTimeline(t) : n(s));
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
    for (let n = 0; n < this.animations.length; n++)
      t = Math.max(t, this.animations[n].duration);
    return t;
  }
  runAll(t) {
    this.animations.forEach((n) => n[t]());
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
function tM({ when: e, delay: t, delayChildren: n, staggerChildren: o, staggerDirection: s, repeat: c, repeatType: l, repeatDelay: u, from: d, elapsed: h, ...p }) {
  return !!Object.keys(p).length;
}
const Xu = (e, t, n, o = {}, s, c) => (l) => {
  const u = Lu(o, e) || {}, d = u.delay || o.delay || 0;
  let { elapsed: h = 0 } = o;
  h = h - Ln(d);
  let p = {
    keyframes: Array.isArray(n) ? n : [null, n],
    ease: "easeOut",
    velocity: t.getVelocity(),
    ...u,
    delay: -h,
    onUpdate: (x) => {
      t.set(x), u.onUpdate && u.onUpdate(x);
    },
    onComplete: () => {
      l(), u.onComplete && u.onComplete();
    },
    name: e,
    motionValue: t,
    element: c ? void 0 : s
  };
  tM(u) || (p = {
    ...p,
    ...xN(e, p)
  }), p.duration && (p.duration = Ln(p.duration)), p.repeatDelay && (p.repeatDelay = Ln(p.repeatDelay)), p.from !== void 0 && (p.keyframes[0] = p.from);
  let v = !1;
  if ((p.type === !1 || p.duration === 0 && !p.repeatDelay) && (p.duration = 0, p.delay === 0 && (v = !0)), v && !c && t.get() !== void 0) {
    const x = $a(p.keyframes, u);
    if (x !== void 0)
      return Ge.update(() => {
        p.onUpdate(x), p.onComplete();
      }), new eM([]);
  }
  return !c && $p.supports(p) ? new $p(p) : new Yu(p);
}, nM = (e) => !!(e && typeof e == "object" && e.mix && e.toValue), rM = (e) => Zc(e) ? e[e.length - 1] || 0 : e;
function Zu(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Ju(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class Qu {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return Zu(this.subscriptions, t), () => Ju(this.subscriptions, t);
  }
  notify(t, n, o) {
    const s = this.subscriptions.length;
    if (s)
      if (s === 1)
        this.subscriptions[0](t, n, o);
      else
        for (let c = 0; c < s; c++) {
          const l = this.subscriptions[c];
          l && l(t, n, o);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const Up = 30, iM = (e) => !isNaN(parseFloat(e));
class oM {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   *
   * @internal
   */
  constructor(t, n = {}) {
    this.version = "11.11.17", this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (o, s = !0) => {
      const c = Vn.now();
      this.updatedAt !== c && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(o), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), s && this.events.renderRequest && this.events.renderRequest.notify(this.current);
    }, this.hasAnimated = !1, this.setCurrent(t), this.owner = n.owner;
  }
  setCurrent(t) {
    this.current = t, this.updatedAt = Vn.now(), this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = iM(this.current));
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
    return process.env.NODE_ENV !== "production" && Fa(!1, 'value.onChange(callback) is deprecated. Switch to value.on("change", callback).'), this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new Qu());
    const o = this.events[t].add(n);
    return t === "change" ? () => {
      o(), Ge.read(() => {
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
  attach(t, n) {
    this.passiveEffect = t, this.stopPassiveEffect = n;
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
  set(t, n = !0) {
    !n || !this.passiveEffect ? this.updateAndNotify(t, n) : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, o) {
    this.set(n), this.prev = void 0, this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt - o;
  }
  /**
   * Set the state of the `MotionValue`, stopping any active animations,
   * effects, and resets velocity to `0`.
   */
  jump(t, n = !0) {
    this.updateAndNotify(t), this.prev = t, this.prevUpdatedAt = this.prevFrameValue = void 0, n && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
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
    const t = Vn.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > Up)
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, Up);
    return ay(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
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
    return this.stop(), new Promise((n) => {
      this.hasAnimated = !0, this.animation = t(n), this.events.animationStart && this.events.animationStart.notify();
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
function Bo(e, t) {
  return new oM(e, t);
}
function sM(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Bo(n));
}
function aM(e, t) {
  const n = Wa(e, t);
  let { transitionEnd: o = {}, transition: s = {}, ...c } = n || {};
  c = { ...c, ...o };
  for (const l in c) {
    const u = rM(c[l]);
    sM(e, l, u);
  }
}
const ed = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), lM = "framerAppearId", gy = "data-" + ed(lM);
function vy(e) {
  return e.props[gy];
}
const Nt = (e) => !!(e && e.getVelocity);
function cM(e) {
  return !!(Nt(e) && e.add);
}
function ou(e, t) {
  const n = e.getValue("willChange");
  if (cM(n))
    return n.add(t);
}
function uM({ protectedKeys: e, needsAnimating: t }, n) {
  const o = e.hasOwnProperty(n) && t[n] !== !0;
  return t[n] = !1, o;
}
function yy(e, t, { delay: n = 0, transitionOverride: o, type: s } = {}) {
  var c;
  let { transition: l = e.getDefaultTransition(), transitionEnd: u, ...d } = t;
  o && (l = o);
  const h = [], p = s && e.animationState && e.animationState.getState()[s];
  for (const v in d) {
    const x = e.getValue(v, (c = e.latestValues[v]) !== null && c !== void 0 ? c : null), g = d[v];
    if (g === void 0 || p && uM(p, v))
      continue;
    const T = {
      delay: n,
      ...Lu(l || {}, v)
    };
    let S = !1;
    if (window.MotionHandoffAnimation) {
      const P = vy(e);
      if (P) {
        const E = window.MotionHandoffAnimation(P, v, Ge);
        E !== null && (T.startTime = E, S = !0);
      }
    }
    ou(e, v), x.start(Xu(v, x, g, e.shouldReduceMotion && di.has(v) ? { type: !1 } : T, e, S));
    const _ = x.animation;
    _ && h.push(_);
  }
  return u && Promise.all(h).then(() => {
    Ge.update(() => {
      u && aM(e, u);
    });
  }), h;
}
function su(e, t, n = {}) {
  var o;
  const s = Wa(e, t, n.type === "exit" ? (o = e.presenceContext) === null || o === void 0 ? void 0 : o.custom : void 0);
  let { transition: c = e.getDefaultTransition() || {} } = s || {};
  n.transitionOverride && (c = n.transitionOverride);
  const l = s ? () => Promise.all(yy(e, s, n)) : () => Promise.resolve(), u = e.variantChildren && e.variantChildren.size ? (h = 0) => {
    const { delayChildren: p = 0, staggerChildren: v, staggerDirection: x } = c;
    return dM(e, t, p + h, v, x, n);
  } : () => Promise.resolve(), { when: d } = c;
  if (d) {
    const [h, p] = d === "beforeChildren" ? [l, u] : [u, l];
    return h().then(() => p());
  } else
    return Promise.all([l(), u(n.delay)]);
}
function dM(e, t, n = 0, o = 0, s = 1, c) {
  const l = [], u = (e.variantChildren.size - 1) * o, d = s === 1 ? (h = 0) => h * o : (h = 0) => u - h * o;
  return Array.from(e.variantChildren).sort(fM).forEach((h, p) => {
    h.notify("AnimationStart", t), l.push(su(h, t, {
      ...c,
      delay: n + d(p)
    }).then(() => h.notify("AnimationComplete", t)));
  }), Promise.all(l);
}
function fM(e, t) {
  return e.sortNodePosition(t);
}
function hM(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let o;
  if (Array.isArray(t)) {
    const s = t.map((c) => su(e, c, n));
    o = Promise.all(s);
  } else if (typeof t == "string")
    o = su(e, t, n);
  else {
    const s = typeof t == "function" ? Wa(e, t, n.custom) : t;
    o = Promise.all(yy(e, s, n));
  }
  return o.then(() => {
    e.notify("AnimationComplete", t);
  });
}
const pM = Iu.length;
function xy(e) {
  if (!e)
    return;
  if (!e.isControllingVariants) {
    const n = e.parent ? xy(e.parent) || {} : {};
    return e.props.initial !== void 0 && (n.initial = e.props.initial), n;
  }
  const t = {};
  for (let n = 0; n < pM; n++) {
    const o = Iu[n], s = e.props[o];
    (ko(s) || s === !1) && (t[o] = s);
  }
  return t;
}
const mM = [...ju].reverse(), gM = ju.length;
function vM(e) {
  return (t) => Promise.all(t.map(({ animation: n, options: o }) => hM(e, n, o)));
}
function yM(e) {
  let t = vM(e), n = Hp(), o = !0;
  const s = (d) => (h, p) => {
    var v;
    const x = Wa(e, p, d === "exit" ? (v = e.presenceContext) === null || v === void 0 ? void 0 : v.custom : void 0);
    if (x) {
      const { transition: g, transitionEnd: T, ...S } = x;
      h = { ...h, ...S, ...T };
    }
    return h;
  };
  function c(d) {
    t = d(e);
  }
  function l(d) {
    const { props: h } = e, p = xy(e.parent) || {}, v = [], x = /* @__PURE__ */ new Set();
    let g = {}, T = 1 / 0;
    for (let _ = 0; _ < gM; _++) {
      const P = mM[_], E = n[P], O = h[P] !== void 0 ? h[P] : p[P], N = ko(O), j = P === d ? E.isActive : null;
      j === !1 && (T = _);
      let W = O === p[P] && O !== h[P] && N;
      if (W && o && e.manuallyAnimateOnMount && (W = !1), E.protectedKeys = { ...g }, // If it isn't active and hasn't *just* been set as inactive
      !E.isActive && j === null || // If we didn't and don't have any defined prop for this animation type
      !O && !E.prevProp || // Or if the prop doesn't define an animation
      Ba(O) || typeof O == "boolean")
        continue;
      const $ = xM(E.prevProp, O);
      let H = $ || // If we're making this variant active, we want to always make it active
      P === d && E.isActive && !W && N || // If we removed a higher-priority variant (i is in reverse order)
      _ > T && N, te = !1;
      const re = Array.isArray(O) ? O : [O];
      let fe = re.reduce(s(P), {});
      j === !1 && (fe = {});
      const { prevResolvedValues: J = {} } = E, se = {
        ...J,
        ...fe
      }, ne = (Z) => {
        H = !0, x.has(Z) && (te = !0, x.delete(Z)), E.needsAnimating[Z] = !0;
        const q = e.getValue(Z);
        q && (q.liveStyle = !1);
      };
      for (const Z in se) {
        const q = fe[Z], G = J[Z];
        if (g.hasOwnProperty(Z))
          continue;
        let pe = !1;
        Zc(q) && Zc(G) ? pe = !jv(q, G) : pe = q !== G, pe ? q != null ? ne(Z) : x.add(Z) : q !== void 0 && x.has(Z) ? ne(Z) : E.protectedKeys[Z] = !0;
      }
      E.prevProp = O, E.prevResolvedValues = fe, E.isActive && (g = { ...g, ...fe }), o && e.blockInitialAnimation && (H = !1), H && (!(W && $) || te) && v.push(...re.map((Z) => ({
        animation: Z,
        options: { type: P }
      })));
    }
    if (x.size) {
      const _ = {};
      x.forEach((P) => {
        const E = e.getBaseTarget(P), O = e.getValue(P);
        O && (O.liveStyle = !0), _[P] = E ?? null;
      }), v.push({ animation: _ });
    }
    let S = !!v.length;
    return o && (h.initial === !1 || h.initial === h.animate) && !e.manuallyAnimateOnMount && (S = !1), o = !1, S ? t(v) : Promise.resolve();
  }
  function u(d, h) {
    var p;
    if (n[d].isActive === h)
      return Promise.resolve();
    (p = e.variantChildren) === null || p === void 0 || p.forEach((x) => {
      var g;
      return (g = x.animationState) === null || g === void 0 ? void 0 : g.setActive(d, h);
    }), n[d].isActive = h;
    const v = l(d);
    for (const x in n)
      n[x].protectedKeys = {};
    return v;
  }
  return {
    animateChanges: l,
    setActive: u,
    setAnimateFunction: c,
    getState: () => n,
    reset: () => {
      n = Hp(), o = !0;
    }
  };
}
function xM(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !jv(t, e) : !1;
}
function Zr(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function Hp() {
  return {
    animate: Zr(!0),
    whileInView: Zr(),
    whileHover: Zr(),
    whileTap: Zr(),
    whileDrag: Zr(),
    whileFocus: Zr(),
    exit: Zr()
  };
}
class kr {
  constructor(t) {
    this.isMounted = !1, this.node = t;
  }
  update() {
  }
}
class bM extends kr {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(t) {
    super(t), t.animationState || (t.animationState = yM(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    Ba(t) && (this.unmountControls = t.subscribe(this.node));
  }
  /**
   * Subscribe any provided AnimationControls to the component's VisualElement
   */
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(), { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var t;
    this.node.animationState.reset(), (t = this.unmountControls) === null || t === void 0 || t.call(this);
  }
}
let wM = 0;
class SM extends kr {
  constructor() {
    super(...arguments), this.id = wM++;
  }
  update() {
    if (!this.node.presenceContext)
      return;
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext, { isPresent: o } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === o)
      return;
    const s = this.node.animationState.setActive("exit", !t);
    n && !t && s.then(() => n(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {
  }
}
const CM = {
  animation: {
    Feature: bM
  },
  exit: {
    Feature: SM
  }
}, by = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1;
function Ua(e, t = "page") {
  return {
    point: {
      x: e[`${t}X`],
      y: e[`${t}Y`]
    }
  };
}
const TM = (e) => (t) => by(t) && e(t, Ua(t));
function Zn(e, t, n, o = { passive: !0 }) {
  return e.addEventListener(t, n, o), () => e.removeEventListener(t, n);
}
function tr(e, t, n, o) {
  return Zn(e, t, TM(n), o);
}
const zp = (e, t) => Math.abs(e - t);
function _M(e, t) {
  const n = zp(e.x, t.x), o = zp(e.y, t.y);
  return Math.sqrt(n ** 2 + o ** 2);
}
class wy {
  constructor(t, n, { transformPagePoint: o, contextWindow: s, dragSnapToOrigin: c = !1 } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const v = _c(this.lastMoveEventInfo, this.history), x = this.startEvent !== null, g = _M(v.offset, { x: 0, y: 0 }) >= 3;
      if (!x && !g)
        return;
      const { point: T } = v, { timestamp: S } = St;
      this.history.push({ ...T, timestamp: S });
      const { onStart: _, onMove: P } = this.handlers;
      x || (_ && _(this.lastMoveEvent, v), this.startEvent = this.lastMoveEvent), P && P(this.lastMoveEvent, v);
    }, this.handlePointerMove = (v, x) => {
      this.lastMoveEvent = v, this.lastMoveEventInfo = Tc(x, this.transformPagePoint), Ge.update(this.updatePoint, !0);
    }, this.handlePointerUp = (v, x) => {
      this.end();
      const { onEnd: g, onSessionEnd: T, resumeAnimation: S } = this.handlers;
      if (this.dragSnapToOrigin && S && S(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const _ = _c(v.type === "pointercancel" ? this.lastMoveEventInfo : Tc(x, this.transformPagePoint), this.history);
      this.startEvent && g && g(v, _), T && T(v, _);
    }, !by(t))
      return;
    this.dragSnapToOrigin = c, this.handlers = n, this.transformPagePoint = o, this.contextWindow = s || window;
    const l = Ua(t), u = Tc(l, this.transformPagePoint), { point: d } = u, { timestamp: h } = St;
    this.history = [{ ...d, timestamp: h }];
    const { onSessionStart: p } = n;
    p && p(t, _c(u, this.history)), this.removeListeners = er(tr(this.contextWindow, "pointermove", this.handlePointerMove), tr(this.contextWindow, "pointerup", this.handlePointerUp), tr(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), Mr(this.updatePoint);
  }
}
function Tc(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Gp(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function _c({ point: e }, t) {
  return {
    point: e,
    delta: Gp(e, Sy(t)),
    offset: Gp(e, PM(t)),
    velocity: AM(t, 0.1)
  };
}
function PM(e) {
  return e[0];
}
function Sy(e) {
  return e[e.length - 1];
}
function AM(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let n = e.length - 1, o = null;
  const s = Sy(e);
  for (; n >= 0 && (o = e[n], !(s.timestamp - o.timestamp > Ln(t))); )
    n--;
  if (!o)
    return { x: 0, y: 0 };
  const c = Qn(s.timestamp - o.timestamp);
  if (c === 0)
    return { x: 0, y: 0 };
  const l = {
    x: (s.x - o.x) / c,
    y: (s.y - o.y) / c
  };
  return l.x === 1 / 0 && (l.x = 0), l.y === 1 / 0 && (l.y = 0), l;
}
function Cy(e) {
  let t = null;
  return () => {
    const n = () => {
      t = null;
    };
    return t === null ? (t = e, n) : !1;
  };
}
const Kp = Cy("dragHorizontal"), Yp = Cy("dragVertical");
function Ty(e) {
  let t = !1;
  if (e === "y")
    t = Yp();
  else if (e === "x")
    t = Kp();
  else {
    const n = Kp(), o = Yp();
    n && o ? t = () => {
      n(), o();
    } : (n && n(), o && o());
  }
  return t;
}
function _y() {
  const e = Ty(!0);
  return e ? (e(), !1) : !0;
}
function ji(e) {
  return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
const Py = 1e-4, EM = 1 - Py, RM = 1 + Py, Ay = 0.01, NM = 0 - Ay, MM = 0 + Ay;
function nn(e) {
  return e.max - e.min;
}
function OM(e, t, n) {
  return Math.abs(e - t) <= n;
}
function qp(e, t, n, o = 0.5) {
  e.origin = o, e.originPoint = rt(t.min, t.max, e.origin), e.scale = nn(n) / nn(t), e.translate = rt(n.min, n.max, e.origin) - e.originPoint, (e.scale >= EM && e.scale <= RM || isNaN(e.scale)) && (e.scale = 1), (e.translate >= NM && e.translate <= MM || isNaN(e.translate)) && (e.translate = 0);
}
function Mo(e, t, n, o) {
  qp(e.x, t.x, n.x, o ? o.originX : void 0), qp(e.y, t.y, n.y, o ? o.originY : void 0);
}
function Xp(e, t, n) {
  e.min = n.min + t.min, e.max = e.min + nn(t);
}
function DM(e, t, n) {
  Xp(e.x, t.x, n.x), Xp(e.y, t.y, n.y);
}
function Zp(e, t, n) {
  e.min = t.min - n.min, e.max = e.min + nn(t);
}
function Oo(e, t, n) {
  Zp(e.x, t.x, n.x), Zp(e.y, t.y, n.y);
}
function jM(e, { min: t, max: n }, o) {
  return t !== void 0 && e < t ? e = o ? rt(t, e, o.min) : Math.max(e, t) : n !== void 0 && e > n && (e = o ? rt(n, e, o.max) : Math.min(e, n)), e;
}
function Jp(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
  };
}
function IM(e, { top: t, left: n, bottom: o, right: s }) {
  return {
    x: Jp(e.x, n, s),
    y: Jp(e.y, t, o)
  };
}
function Qp(e, t) {
  let n = t.min - e.min, o = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, o] = [o, n]), { min: n, max: o };
}
function LM(e, t) {
  return {
    x: Qp(e.x, t.x),
    y: Qp(e.y, t.y)
  };
}
function kM(e, t) {
  let n = 0.5;
  const o = nn(e), s = nn(t);
  return s > o ? n = Hi(t.min, t.max - o, e.min) : o > s && (n = Hi(e.min, e.max - s, t.min)), Dr(0, 1, n);
}
function VM(e, t) {
  const n = {};
  return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n;
}
const au = 0.35;
function FM(e = au) {
  return e === !1 ? e = 0 : e === !0 && (e = au), {
    x: em(e, "left", "right"),
    y: em(e, "top", "bottom")
  };
}
function em(e, t, n) {
  return {
    min: tm(e, t),
    max: tm(e, n)
  };
}
function tm(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const nm = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), Ii = () => ({
  x: nm(),
  y: nm()
}), rm = () => ({ min: 0, max: 0 }), dt = () => ({
  x: rm(),
  y: rm()
});
function mn(e) {
  return [e("x"), e("y")];
}
function Ey({ top: e, left: t, right: n, bottom: o }) {
  return {
    x: { min: t, max: n },
    y: { min: e, max: o }
  };
}
function BM({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function WM(e, t) {
  if (!t)
    return e;
  const n = t({ x: e.left, y: e.top }), o = t({ x: e.right, y: e.bottom });
  return {
    top: n.y,
    left: n.x,
    bottom: o.y,
    right: o.x
  };
}
function Pc(e) {
  return e === void 0 || e === 1;
}
function lu({ scale: e, scaleX: t, scaleY: n }) {
  return !Pc(e) || !Pc(t) || !Pc(n);
}
function Jr(e) {
  return lu(e) || Ry(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
}
function Ry(e) {
  return im(e.x) || im(e.y);
}
function im(e) {
  return e && e !== "0%";
}
function va(e, t, n) {
  const o = e - n, s = t * o;
  return n + s;
}
function om(e, t, n, o, s) {
  return s !== void 0 && (e = va(e, s, o)), va(e, n, o) + t;
}
function cu(e, t = 0, n = 1, o, s) {
  e.min = om(e.min, t, n, o, s), e.max = om(e.max, t, n, o, s);
}
function Ny(e, { x: t, y: n }) {
  cu(e.x, t.translate, t.scale, t.originPoint), cu(e.y, n.translate, n.scale, n.originPoint);
}
const sm = 0.999999999999, am = 1.0000000000001;
function $M(e, t, n, o = !1) {
  const s = n.length;
  if (!s)
    return;
  t.x = t.y = 1;
  let c, l;
  for (let u = 0; u < s; u++) {
    c = n[u], l = c.projectionDelta;
    const { visualElement: d } = c.options;
    d && d.props.style && d.props.style.display === "contents" || (o && c.options.layoutScroll && c.scroll && c !== c.root && ki(e, {
      x: -c.scroll.offset.x,
      y: -c.scroll.offset.y
    }), l && (t.x *= l.x.scale, t.y *= l.y.scale, Ny(e, l)), o && Jr(c.latestValues) && ki(e, c.latestValues));
  }
  t.x < am && t.x > sm && (t.x = 1), t.y < am && t.y > sm && (t.y = 1);
}
function Li(e, t) {
  e.min = e.min + t, e.max = e.max + t;
}
function lm(e, t, n, o, s = 0.5) {
  const c = rt(e.min, e.max, s);
  cu(e, t, n, c, o);
}
function ki(e, t) {
  lm(e.x, t.x, t.scaleX, t.scale, t.originX), lm(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function My(e, t) {
  return Ey(WM(e.getBoundingClientRect(), t));
}
function UM(e, t, n) {
  const o = My(e, n), { scroll: s } = t;
  return s && (Li(o.x, s.offset.x), Li(o.y, s.offset.y)), o;
}
const Oy = ({ current: e }) => e ? e.ownerDocument.defaultView : null, HM = /* @__PURE__ */ new WeakMap();
class zM {
  constructor(t) {
    this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = dt(), this.visualElement = t;
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: o } = this.visualElement;
    if (o && o.isPresent === !1)
      return;
    const s = (p) => {
      const { dragSnapToOrigin: v } = this.getProps();
      v ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(Ua(p, "page").point);
    }, c = (p, v) => {
      const { drag: x, dragPropagation: g, onDragStart: T } = this.getProps();
      if (x && !g && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = Ty(x), !this.openGlobalLock))
        return;
      this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), mn((_) => {
        let P = this.getAxisMotionValue(_).get() || 0;
        if (kn.test(P)) {
          const { projection: E } = this.visualElement;
          if (E && E.layout) {
            const O = E.layout.layoutBox[_];
            O && (P = nn(O) * (parseFloat(P) / 100));
          }
        }
        this.originPoint[_] = P;
      }), T && Ge.postRender(() => T(p, v)), ou(this.visualElement, "transform");
      const { animationState: S } = this.visualElement;
      S && S.setActive("whileDrag", !0);
    }, l = (p, v) => {
      const { dragPropagation: x, dragDirectionLock: g, onDirectionLock: T, onDrag: S } = this.getProps();
      if (!x && !this.openGlobalLock)
        return;
      const { offset: _ } = v;
      if (g && this.currentDirection === null) {
        this.currentDirection = GM(_), this.currentDirection !== null && T && T(this.currentDirection);
        return;
      }
      this.updateAxis("x", v.point, _), this.updateAxis("y", v.point, _), this.visualElement.render(), S && S(p, v);
    }, u = (p, v) => this.stop(p, v), d = () => mn((p) => {
      var v;
      return this.getAnimationState(p) === "paused" && ((v = this.getAxisMotionValue(p).animation) === null || v === void 0 ? void 0 : v.play());
    }), { dragSnapToOrigin: h } = this.getProps();
    this.panSession = new wy(t, {
      onSessionStart: s,
      onStart: c,
      onMove: l,
      onSessionEnd: u,
      resumeAnimation: d
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: h,
      contextWindow: Oy(this.visualElement)
    });
  }
  stop(t, n) {
    const o = this.isDragging;
    if (this.cancel(), !o)
      return;
    const { velocity: s } = n;
    this.startAnimation(s);
    const { onDragEnd: c } = this.getProps();
    c && Ge.postRender(() => c(t, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
    const { dragPropagation: o } = this.getProps();
    !o && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), n && n.setActive("whileDrag", !1);
  }
  updateAxis(t, n, o) {
    const { drag: s } = this.getProps();
    if (!o || !Ks(t, s, this.currentDirection))
      return;
    const c = this.getAxisMotionValue(t);
    let l = this.originPoint[t] + o[t];
    this.constraints && this.constraints[t] && (l = jM(l, this.constraints[t], this.elastic[t])), c.set(l);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: o } = this.getProps(), s = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (t = this.visualElement.projection) === null || t === void 0 ? void 0 : t.layout, c = this.constraints;
    n && ji(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && s ? this.constraints = IM(s.layoutBox, n) : this.constraints = !1, this.elastic = FM(o), c !== this.constraints && s && this.constraints && !this.hasMutatedConstraints && mn((l) => {
      this.constraints !== !1 && this.getAxisMotionValue(l) && (this.constraints[l] = VM(s.layoutBox[l], this.constraints[l]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !ji(t))
      return !1;
    const o = t.current;
    Or(o !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
    const { projection: s } = this.visualElement;
    if (!s || !s.layout)
      return !1;
    const c = UM(o, s.root, this.visualElement.getTransformPagePoint());
    let l = LM(s.layout.layoutBox, c);
    if (n) {
      const u = n(BM(l));
      this.hasMutatedConstraints = !!u, u && (l = Ey(u));
    }
    return l;
  }
  startAnimation(t) {
    const { drag: n, dragMomentum: o, dragElastic: s, dragTransition: c, dragSnapToOrigin: l, onDragTransitionEnd: u } = this.getProps(), d = this.constraints || {}, h = mn((p) => {
      if (!Ks(p, n, this.currentDirection))
        return;
      let v = d && d[p] || {};
      l && (v = { min: 0, max: 0 });
      const x = s ? 200 : 1e6, g = s ? 40 : 1e7, T = {
        type: "inertia",
        velocity: o ? t[p] : 0,
        bounceStiffness: x,
        bounceDamping: g,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...c,
        ...v
      };
      return this.startAxisValueAnimation(p, T);
    });
    return Promise.all(h).then(u);
  }
  startAxisValueAnimation(t, n) {
    const o = this.getAxisMotionValue(t);
    return ou(this.visualElement, t), o.start(Xu(t, o, 0, n, this.visualElement, !1));
  }
  stopAnimation() {
    mn((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    mn((t) => {
      var n;
      return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.pause();
    });
  }
  getAnimationState(t) {
    var n;
    return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.state;
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(t) {
    const n = `_drag${t.toUpperCase()}`, o = this.visualElement.getProps(), s = o[n];
    return s || this.visualElement.getValue(t, (o.initial ? o.initial[t] : void 0) || 0);
  }
  snapToCursor(t) {
    mn((n) => {
      const { drag: o } = this.getProps();
      if (!Ks(n, o, this.currentDirection))
        return;
      const { projection: s } = this.visualElement, c = this.getAxisMotionValue(n);
      if (s && s.layout) {
        const { min: l, max: u } = s.layout.layoutBox[n];
        c.set(t[n] - rt(l, u, 0.5));
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
    const { drag: t, dragConstraints: n } = this.getProps(), { projection: o } = this.visualElement;
    if (!ji(n) || !o || !this.constraints)
      return;
    this.stopAnimation();
    const s = { x: 0, y: 0 };
    mn((l) => {
      const u = this.getAxisMotionValue(l);
      if (u && this.constraints !== !1) {
        const d = u.get();
        s[l] = kM({ min: d, max: d }, this.constraints[l]);
      }
    });
    const { transformTemplate: c } = this.visualElement.getProps();
    this.visualElement.current.style.transform = c ? c({}, "") : "none", o.root && o.root.updateScroll(), o.updateLayout(), this.resolveConstraints(), mn((l) => {
      if (!Ks(l, t, null))
        return;
      const u = this.getAxisMotionValue(l), { min: d, max: h } = this.constraints[l];
      u.set(rt(d, h, s[l]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    HM.set(this.visualElement, this);
    const t = this.visualElement.current, n = tr(t, "pointerdown", (d) => {
      const { drag: h, dragListener: p = !0 } = this.getProps();
      h && p && this.start(d);
    }), o = () => {
      const { dragConstraints: d } = this.getProps();
      ji(d) && d.current && (this.constraints = this.resolveRefConstraints());
    }, { projection: s } = this.visualElement, c = s.addEventListener("measure", o);
    s && !s.layout && (s.root && s.root.updateScroll(), s.updateLayout()), Ge.read(o);
    const l = Zn(window, "resize", () => this.scalePositionWithinConstraints()), u = s.addEventListener("didUpdate", ({ delta: d, hasLayoutChanged: h }) => {
      this.isDragging && h && (mn((p) => {
        const v = this.getAxisMotionValue(p);
        v && (this.originPoint[p] += d[p].translate, v.set(v.get() + d[p].translate));
      }), this.visualElement.render());
    });
    return () => {
      l(), n(), c(), u && u();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(), { drag: n = !1, dragDirectionLock: o = !1, dragPropagation: s = !1, dragConstraints: c = !1, dragElastic: l = au, dragMomentum: u = !0 } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: o,
      dragPropagation: s,
      dragConstraints: c,
      dragElastic: l,
      dragMomentum: u
    };
  }
}
function Ks(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function GM(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n;
}
class KM extends kr {
  constructor(t) {
    super(t), this.removeGroupControls = Ct, this.removeListeners = Ct, this.controls = new zM(t);
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || Ct;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const cm = (e) => (t, n) => {
  e && Ge.postRender(() => e(t, n));
};
class YM extends kr {
  constructor() {
    super(...arguments), this.removePointerDownListener = Ct;
  }
  onPointerDown(t) {
    this.session = new wy(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Oy(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: n, onPan: o, onPanEnd: s } = this.node.getProps();
    return {
      onSessionStart: cm(t),
      onStart: cm(n),
      onMove: o,
      onEnd: (c, l) => {
        delete this.session, s && Ge.postRender(() => s(c, l));
      }
    };
  }
  mount() {
    this.removePointerDownListener = tr(this.node.current, "pointerdown", (t) => this.onPointerDown(t));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const td = Gi(null);
function qM() {
  const e = zt(td);
  if (e === null)
    return [!0, null];
  const { isPresent: t, onExitComplete: n, register: o } = e, s = GT();
  Wo(() => o(s), []);
  const c = Bm(() => n && n(s), [s, n]);
  return !t && n ? [!1, c] : [!0];
}
const Dy = Gi({}), jy = Gi({}), ea = {
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
function um(e, t) {
  return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
const To = {
  correct: (e, t) => {
    if (!t.target)
      return e;
    if (typeof e == "string")
      if (ue.test(e))
        e = parseFloat(e);
      else
        return e;
    const n = um(e, t.target.x), o = um(e, t.target.y);
    return `${n}% ${o}%`;
  }
}, XM = {
  correct: (e, { treeScale: t, projectionDelta: n }) => {
    const o = e, s = jr.parse(e);
    if (s.length > 5)
      return o;
    const c = jr.createTransformer(e), l = typeof s[0] != "number" ? 1 : 0, u = n.x.scale * t.x, d = n.y.scale * t.y;
    s[0 + l] /= u, s[1 + l] /= d;
    const h = rt(u, d, 0.5);
    return typeof s[2 + l] == "number" && (s[2 + l] /= h), typeof s[3 + l] == "number" && (s[3 + l] /= h), c(s);
  }
}, ya = {};
function ZM(e) {
  Object.assign(ya, e);
}
const { schedule: nd, cancel: vj } = Iv(queueMicrotask, !1);
class JM extends KT {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: o, layoutId: s } = this.props, { projection: c } = t;
    ZM(QM), c && (n.group && n.group.add(c), o && o.register && s && o.register(c), c.root.didUpdate(), c.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), c.setOptions({
      ...c.options,
      onExitComplete: () => this.safeToRemove()
    })), ea.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(t) {
    const { layoutDependency: n, visualElement: o, drag: s, isPresent: c } = this.props, l = o.projection;
    return l && (l.isPresent = c, s || t.layoutDependency !== n || n === void 0 ? l.willUpdate() : this.safeToRemove(), t.isPresent !== c && (c ? l.promote() : l.relegate() || Ge.postRender(() => {
      const u = l.getStack();
      (!u || !u.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t && (t.root.didUpdate(), nd.postRender(() => {
      !t.currentAnimation && t.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: o } = this.props, { projection: s } = t;
    s && (s.scheduleCheckAfterUnmount(), n && n.group && n.group.remove(s), o && o.deregister && o.deregister(s));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function Iy(e) {
  const [t, n] = qM(), o = zt(Dy);
  return m.jsx(JM, { ...e, layoutGroup: o, switchLayoutGroup: zt(jy), isPresent: t, safeToRemove: n });
}
const QM = {
  borderRadius: {
    ...To,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: To,
  borderTopRightRadius: To,
  borderBottomLeftRadius: To,
  borderBottomRightRadius: To,
  boxShadow: XM
}, Ly = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], eO = Ly.length, dm = (e) => typeof e == "string" ? parseFloat(e) : e, fm = (e) => typeof e == "number" || ue.test(e);
function tO(e, t, n, o, s, c) {
  s ? (e.opacity = rt(
    0,
    // TODO Reinstate this if only child
    n.opacity !== void 0 ? n.opacity : 1,
    nO(o)
  ), e.opacityExit = rt(t.opacity !== void 0 ? t.opacity : 1, 0, rO(o))) : c && (e.opacity = rt(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, o));
  for (let l = 0; l < eO; l++) {
    const u = `border${Ly[l]}Radius`;
    let d = hm(t, u), h = hm(n, u);
    if (d === void 0 && h === void 0)
      continue;
    d || (d = 0), h || (h = 0), d === 0 || h === 0 || fm(d) === fm(h) ? (e[u] = Math.max(rt(dm(d), dm(h), o), 0), (kn.test(h) || kn.test(d)) && (e[u] += "%")) : e[u] = h;
  }
  (t.rotate || n.rotate) && (e.rotate = rt(t.rotate || 0, n.rotate || 0, o));
}
function hm(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const nO = /* @__PURE__ */ ky(0, 0.5, $v), rO = /* @__PURE__ */ ky(0.5, 0.95, Ct);
function ky(e, t, n) {
  return (o) => o < e ? 0 : o > t ? 1 : n(Hi(e, t, o));
}
function pm(e, t) {
  e.min = t.min, e.max = t.max;
}
function pn(e, t) {
  pm(e.x, t.x), pm(e.y, t.y);
}
function mm(e, t) {
  e.translate = t.translate, e.scale = t.scale, e.originPoint = t.originPoint, e.origin = t.origin;
}
function gm(e, t, n, o, s) {
  return e -= t, e = va(e, 1 / n, o), s !== void 0 && (e = va(e, 1 / s, o)), e;
}
function iO(e, t = 0, n = 1, o = 0.5, s, c = e, l = e) {
  if (kn.test(t) && (t = parseFloat(t), t = rt(l.min, l.max, t / 100) - l.min), typeof t != "number")
    return;
  let u = rt(c.min, c.max, o);
  e === c && (u -= t), e.min = gm(e.min, t, n, u, s), e.max = gm(e.max, t, n, u, s);
}
function vm(e, t, [n, o, s], c, l) {
  iO(e, t[n], t[o], t[s], t.scale, c, l);
}
const oO = ["x", "scaleX", "originX"], sO = ["y", "scaleY", "originY"];
function ym(e, t, n, o) {
  vm(e.x, t, oO, n ? n.x : void 0, o ? o.x : void 0), vm(e.y, t, sO, n ? n.y : void 0, o ? o.y : void 0);
}
function xm(e) {
  return e.translate === 0 && e.scale === 1;
}
function Vy(e) {
  return xm(e.x) && xm(e.y);
}
function bm(e, t) {
  return e.min === t.min && e.max === t.max;
}
function aO(e, t) {
  return bm(e.x, t.x) && bm(e.y, t.y);
}
function wm(e, t) {
  return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max);
}
function Fy(e, t) {
  return wm(e.x, t.x) && wm(e.y, t.y);
}
function Sm(e) {
  return nn(e.x) / nn(e.y);
}
function Cm(e, t) {
  return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint;
}
class lO {
  constructor() {
    this.members = [];
  }
  add(t) {
    Zu(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (Ju(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((s) => t === s);
    if (n === 0)
      return !1;
    let o;
    for (let s = n; s >= 0; s--) {
      const c = this.members[s];
      if (c.isPresent !== !1) {
        o = c;
        break;
      }
    }
    return o ? (this.promote(o), !0) : !1;
  }
  promote(t, n) {
    const o = this.lead;
    if (t !== o && (this.prevLead = o, this.lead = t, t.show(), o)) {
      o.instance && o.scheduleRender(), t.scheduleRender(), t.resumeFrom = o, n && (t.resumeFrom.preserveOpacity = !0), o.snapshot && (t.snapshot = o.snapshot, t.snapshot.latestValues = o.animationValues || o.latestValues), t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: s } = t.options;
      s === !1 && o.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: o } = t;
      n.onExitComplete && n.onExitComplete(), o && o.options.onExitComplete && o.options.onExitComplete();
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
function cO(e, t, n) {
  let o = "";
  const s = e.x.translate / t.x, c = e.y.translate / t.y, l = (n == null ? void 0 : n.z) || 0;
  if ((s || c || l) && (o = `translate3d(${s}px, ${c}px, ${l}px) `), (t.x !== 1 || t.y !== 1) && (o += `scale(${1 / t.x}, ${1 / t.y}) `), n) {
    const { transformPerspective: h, rotate: p, rotateX: v, rotateY: x, skewX: g, skewY: T } = n;
    h && (o = `perspective(${h}px) ${o}`), p && (o += `rotate(${p}deg) `), v && (o += `rotateX(${v}deg) `), x && (o += `rotateY(${x}deg) `), g && (o += `skewX(${g}deg) `), T && (o += `skewY(${T}deg) `);
  }
  const u = e.x.scale * t.x, d = e.y.scale * t.y;
  return (u !== 1 || d !== 1) && (o += `scale(${u}, ${d})`), o || "none";
}
const uO = (e, t) => e.depth - t.depth;
class dO {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(t) {
    Zu(this.children, t), this.isDirty = !0;
  }
  remove(t) {
    Ju(this.children, t), this.isDirty = !0;
  }
  forEach(t) {
    this.isDirty && this.children.sort(uO), this.isDirty = !1, this.children.forEach(t);
  }
}
function ta(e) {
  const t = Nt(e) ? e.get() : e;
  return nM(t) ? t.toValue() : t;
}
function fO(e, t) {
  const n = Vn.now(), o = ({ timestamp: s }) => {
    const c = s - n;
    c >= t && (Mr(o), e(c - t));
  };
  return Ge.read(o, !0), () => Mr(o);
}
function hO(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function pO(e, t, n) {
  const o = Nt(e) ? e : Bo(e);
  return o.start(Xu("", o, t, n)), o.animation;
}
const Qr = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0
}, Ao = typeof window < "u" && window.MotionDebug !== void 0, Ac = ["", "X", "Y", "Z"], mO = { visibility: "hidden" }, Tm = 1e3;
let gO = 0;
function Ec(e, t, n, o) {
  const { latestValues: s } = t;
  s[e] && (n[e] = s[e], t.setStaticValue(e, 0), o && (o[e] = 0));
}
function By(e) {
  if (e.hasCheckedOptimisedAppear = !0, e.root === e)
    return;
  const { visualElement: t } = e.options;
  if (!t)
    return;
  const n = vy(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: s, layoutId: c } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", Ge, !(s || c));
  }
  const { parent: o } = e;
  o && !o.hasCheckedOptimisedAppear && By(o);
}
function Wy({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: o, resetTransform: s }) {
  return class {
    constructor(l = {}, u = t == null ? void 0 : t()) {
      this.id = gO++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, Ao && (Qr.totalNodes = Qr.resolvedTargetDeltas = Qr.recalculatedProjection = 0), this.nodes.forEach(xO), this.nodes.forEach(TO), this.nodes.forEach(_O), this.nodes.forEach(bO), Ao && window.MotionDebug.record(Qr);
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = l, this.root = u ? u.root || u : this, this.path = u ? [...u.path, u] : [], this.parent = u, this.depth = u ? u.depth + 1 : 0;
      for (let d = 0; d < this.path.length; d++)
        this.path[d].shouldResetTransform = !0;
      this.root === this && (this.nodes = new dO());
    }
    addEventListener(l, u) {
      return this.eventHandlers.has(l) || this.eventHandlers.set(l, new Qu()), this.eventHandlers.get(l).add(u);
    }
    notifyListeners(l, ...u) {
      const d = this.eventHandlers.get(l);
      d && d.notify(...u);
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
      this.isSVG = hO(l), this.instance = l;
      const { layoutId: d, layout: h, visualElement: p } = this.options;
      if (p && !p.current && p.mount(l), this.root.nodes.add(this), this.parent && this.parent.children.add(this), u && (h || d) && (this.isLayoutDirty = !0), e) {
        let v;
        const x = () => this.root.updateBlockedByResize = !1;
        e(l, () => {
          this.root.updateBlockedByResize = !0, v && v(), v = fO(x, 250), ea.hasAnimatedSinceResize && (ea.hasAnimatedSinceResize = !1, this.nodes.forEach(Pm));
        });
      }
      d && this.root.registerSharedNode(d, this), this.options.animate !== !1 && p && (d || h) && this.addEventListener("didUpdate", ({ delta: v, hasLayoutChanged: x, hasRelativeTargetChanged: g, layout: T }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const S = this.options.transition || p.getDefaultTransition() || NO, { onLayoutAnimationStart: _, onLayoutAnimationComplete: P } = p.getProps(), E = !this.targetLayout || !Fy(this.targetLayout, T) || g, O = !x && g;
        if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || O || x && (E || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(v, O);
          const N = {
            ...Lu(S, "layout"),
            onPlay: _,
            onComplete: P
          };
          (p.shouldReduceMotion || this.options.layoutRoot) && (N.delay = 0, N.type = !1), this.startAnimation(N);
        } else
          x || Pm(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = T;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const l = this.getStack();
      l && l.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, Mr(this.updateProjection);
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
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(PO), this.animationId++);
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
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && By(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let p = 0; p < this.path.length; p++) {
        const v = this.path[p];
        v.shouldResetTransform = !0, v.updateScroll("snapshot"), v.options.layoutRoot && v.willUpdate(!1);
      }
      const { layoutId: u, layout: d } = this.options;
      if (u === void 0 && !d)
        return;
      const h = this.getTransformTemplate();
      this.prevTransformTemplateValue = h ? h(this.latestValues, "") : void 0, this.updateSnapshot(), l && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(_m);
        return;
      }
      this.isUpdating || this.nodes.forEach(SO), this.isUpdating = !1, this.nodes.forEach(CO), this.nodes.forEach(vO), this.nodes.forEach(yO), this.clearAllSnapshots();
      const u = Vn.now();
      St.delta = Dr(0, 1e3 / 60, u - St.timestamp), St.timestamp = u, St.isProcessing = !0, xc.update.process(St), xc.preRender.process(St), xc.render.process(St), St.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, nd.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(wO), this.sharedNodes.forEach(AO);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, Ge.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      Ge.postRender(() => {
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
        for (let d = 0; d < this.path.length; d++)
          this.path[d].updateScroll();
      const l = this.layout;
      this.layout = this.measure(!1), this.layoutCorrected = dt(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: u } = this.options;
      u && u.notify("LayoutMeasure", this.layout.layoutBox, l ? l.layoutBox : void 0);
    }
    updateScroll(l = "measure") {
      let u = !!(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === l && (u = !1), u) {
        const d = o(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: l,
          isRoot: d,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : d
        };
      }
    }
    resetTransform() {
      if (!s)
        return;
      const l = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, u = this.projectionDelta && !Vy(this.projectionDelta), d = this.getTransformTemplate(), h = d ? d(this.latestValues, "") : void 0, p = h !== this.prevTransformTemplateValue;
      l && (u || Jr(this.latestValues) || p) && (s(this.instance, h), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(l = !0) {
      const u = this.measurePageBox();
      let d = this.removeElementScroll(u);
      return l && (d = this.removeTransform(d)), MO(d), {
        animationId: this.root.animationId,
        measuredBox: u,
        layoutBox: d,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      var l;
      const { visualElement: u } = this.options;
      if (!u)
        return dt();
      const d = u.measureViewportBox();
      if (!(((l = this.scroll) === null || l === void 0 ? void 0 : l.wasRoot) || this.path.some(OO))) {
        const { scroll: p } = this.root;
        p && (Li(d.x, p.offset.x), Li(d.y, p.offset.y));
      }
      return d;
    }
    removeElementScroll(l) {
      var u;
      const d = dt();
      if (pn(d, l), !((u = this.scroll) === null || u === void 0) && u.wasRoot)
        return d;
      for (let h = 0; h < this.path.length; h++) {
        const p = this.path[h], { scroll: v, options: x } = p;
        p !== this.root && v && x.layoutScroll && (v.wasRoot && pn(d, l), Li(d.x, v.offset.x), Li(d.y, v.offset.y));
      }
      return d;
    }
    applyTransform(l, u = !1) {
      const d = dt();
      pn(d, l);
      for (let h = 0; h < this.path.length; h++) {
        const p = this.path[h];
        !u && p.options.layoutScroll && p.scroll && p !== p.root && ki(d, {
          x: -p.scroll.offset.x,
          y: -p.scroll.offset.y
        }), Jr(p.latestValues) && ki(d, p.latestValues);
      }
      return Jr(this.latestValues) && ki(d, this.latestValues), d;
    }
    removeTransform(l) {
      const u = dt();
      pn(u, l);
      for (let d = 0; d < this.path.length; d++) {
        const h = this.path[d];
        if (!h.instance || !Jr(h.latestValues))
          continue;
        lu(h.latestValues) && h.updateSnapshot();
        const p = dt(), v = h.measurePageBox();
        pn(p, v), ym(u, h.latestValues, h.snapshot ? h.snapshot.layoutBox : void 0, p);
      }
      return Jr(this.latestValues) && ym(u, this.latestValues), u;
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
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== St.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(l = !1) {
      var u;
      const d = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = d.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = d.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = d.isSharedProjectionDirty);
      const h = !!this.resumingFrom || this !== d;
      if (!(l || h && this.isSharedProjectionDirty || this.isProjectionDirty || !((u = this.parent) === null || u === void 0) && u.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
        return;
      const { layout: v, layoutId: x } = this.options;
      if (!(!this.layout || !(v || x))) {
        if (this.resolvedRelativeTargetAt = St.timestamp, !this.targetDelta && !this.relativeTarget) {
          const g = this.getClosestProjectingParent();
          g && g.layout && this.animationProgress !== 1 ? (this.relativeParent = g, this.forceRelativeParentToResolveTarget(), this.relativeTarget = dt(), this.relativeTargetOrigin = dt(), Oo(this.relativeTargetOrigin, this.layout.layoutBox, g.layout.layoutBox), pn(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (this.target || (this.target = dt(), this.targetWithTransforms = dt()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), DM(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : pn(this.target, this.layout.layoutBox), Ny(this.target, this.targetDelta)) : pn(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
            this.attemptToResolveRelativeTarget = !1;
            const g = this.getClosestProjectingParent();
            g && !!g.resumingFrom == !!this.resumingFrom && !g.options.layoutScroll && g.target && this.animationProgress !== 1 ? (this.relativeParent = g, this.forceRelativeParentToResolveTarget(), this.relativeTarget = dt(), this.relativeTargetOrigin = dt(), Oo(this.relativeTargetOrigin, this.target, g.target), pn(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
          }
          Ao && Qr.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || lu(this.parent.latestValues) || Ry(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      var l;
      const u = this.getLead(), d = !!this.resumingFrom || this !== u;
      let h = !0;
      if ((this.isProjectionDirty || !((l = this.parent) === null || l === void 0) && l.isProjectionDirty) && (h = !1), d && (this.isSharedProjectionDirty || this.isTransformDirty) && (h = !1), this.resolvedRelativeTargetAt === St.timestamp && (h = !1), h)
        return;
      const { layout: p, layoutId: v } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(p || v))
        return;
      pn(this.layoutCorrected, this.layout.layoutBox);
      const x = this.treeScale.x, g = this.treeScale.y;
      $M(this.layoutCorrected, this.treeScale, this.path, d), u.layout && !u.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (u.target = u.layout.layoutBox, u.targetWithTransforms = dt());
      const { target: T } = u;
      if (!T) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (mm(this.prevProjectionDelta.x, this.projectionDelta.x), mm(this.prevProjectionDelta.y, this.projectionDelta.y)), Mo(this.projectionDelta, this.layoutCorrected, T, this.latestValues), (this.treeScale.x !== x || this.treeScale.y !== g || !Cm(this.projectionDelta.x, this.prevProjectionDelta.x) || !Cm(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", T)), Ao && Qr.recalculatedProjection++;
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
        const d = this.getStack();
        d && d.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = Ii(), this.projectionDelta = Ii(), this.projectionDeltaWithTransform = Ii();
    }
    setAnimationOrigin(l, u = !1) {
      const d = this.snapshot, h = d ? d.latestValues : {}, p = { ...this.latestValues }, v = Ii();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !u;
      const x = dt(), g = d ? d.source : void 0, T = this.layout ? this.layout.source : void 0, S = g !== T, _ = this.getStack(), P = !_ || _.members.length <= 1, E = !!(S && !P && this.options.crossfade === !0 && !this.path.some(RO));
      this.animationProgress = 0;
      let O;
      this.mixTargetDelta = (N) => {
        const j = N / 1e3;
        Am(v.x, l.x, j), Am(v.y, l.y, j), this.setTargetDelta(v), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Oo(x, this.layout.layoutBox, this.relativeParent.layout.layoutBox), EO(this.relativeTarget, this.relativeTargetOrigin, x, j), O && aO(this.relativeTarget, O) && (this.isProjectionDirty = !1), O || (O = dt()), pn(O, this.relativeTarget)), S && (this.animationValues = p, tO(p, h, this.latestValues, j, E, P)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = j;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(l) {
      this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (Mr(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = Ge.update(() => {
        ea.hasAnimatedSinceResize = !0, this.currentAnimation = pO(0, Tm, {
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
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(Tm), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const l = this.getLead();
      let { targetWithTransforms: u, target: d, layout: h, latestValues: p } = l;
      if (!(!u || !d || !h)) {
        if (this !== l && this.layout && h && $y(this.options.animationType, this.layout.layoutBox, h.layoutBox)) {
          d = this.target || dt();
          const v = nn(this.layout.layoutBox.x);
          d.x.min = l.target.x.min, d.x.max = d.x.min + v;
          const x = nn(this.layout.layoutBox.y);
          d.y.min = l.target.y.min, d.y.max = d.y.min + x;
        }
        pn(u, d), ki(u, p), Mo(this.projectionDeltaWithTransform, this.layoutCorrected, u, p);
      }
    }
    registerSharedNode(l, u) {
      this.sharedNodes.has(l) || this.sharedNodes.set(l, new lO()), this.sharedNodes.get(l).add(u);
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
    promote({ needsReset: l, transition: u, preserveFollowOpacity: d } = {}) {
      const h = this.getStack();
      h && h.promote(this, d), l && (this.projectionDelta = void 0, this.needsReset = !0), u && this.setOptions({ transition: u });
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
      const { latestValues: d } = l;
      if ((d.z || d.rotate || d.rotateX || d.rotateY || d.rotateZ || d.skewX || d.skewY) && (u = !0), !u)
        return;
      const h = {};
      d.z && Ec("z", l, h, this.animationValues);
      for (let p = 0; p < Ac.length; p++)
        Ec(`rotate${Ac[p]}`, l, h, this.animationValues), Ec(`skew${Ac[p]}`, l, h, this.animationValues);
      l.render();
      for (const p in h)
        l.setStaticValue(p, h[p]), this.animationValues && (this.animationValues[p] = h[p]);
      l.scheduleRender();
    }
    getProjectionStyles(l) {
      var u, d;
      if (!this.instance || this.isSVG)
        return;
      if (!this.isVisible)
        return mO;
      const h = {
        visibility: ""
      }, p = this.getTransformTemplate();
      if (this.needsReset)
        return this.needsReset = !1, h.opacity = "", h.pointerEvents = ta(l == null ? void 0 : l.pointerEvents) || "", h.transform = p ? p(this.latestValues, "") : "none", h;
      const v = this.getLead();
      if (!this.projectionDelta || !this.layout || !v.target) {
        const S = {};
        return this.options.layoutId && (S.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, S.pointerEvents = ta(l == null ? void 0 : l.pointerEvents) || ""), this.hasProjected && !Jr(this.latestValues) && (S.transform = p ? p({}, "") : "none", this.hasProjected = !1), S;
      }
      const x = v.animationValues || v.latestValues;
      this.applyTransformsToTarget(), h.transform = cO(this.projectionDeltaWithTransform, this.treeScale, x), p && (h.transform = p(x, h.transform));
      const { x: g, y: T } = this.projectionDelta;
      h.transformOrigin = `${g.origin * 100}% ${T.origin * 100}% 0`, v.animationValues ? h.opacity = v === this ? (d = (u = x.opacity) !== null && u !== void 0 ? u : this.latestValues.opacity) !== null && d !== void 0 ? d : 1 : this.preserveOpacity ? this.latestValues.opacity : x.opacityExit : h.opacity = v === this ? x.opacity !== void 0 ? x.opacity : "" : x.opacityExit !== void 0 ? x.opacityExit : 0;
      for (const S in ya) {
        if (x[S] === void 0)
          continue;
        const { correct: _, applyTo: P } = ya[S], E = h.transform === "none" ? x[S] : _(x[S], v);
        if (P) {
          const O = P.length;
          for (let N = 0; N < O; N++)
            h[P[N]] = E;
        } else
          h[S] = E;
      }
      return this.options.layoutId && (h.pointerEvents = v === this ? ta(l == null ? void 0 : l.pointerEvents) || "" : "none"), h;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((l) => {
        var u;
        return (u = l.currentAnimation) === null || u === void 0 ? void 0 : u.stop();
      }), this.root.nodes.forEach(_m), this.root.sharedNodes.clear();
    }
  };
}
function vO(e) {
  e.updateLayout();
}
function yO(e) {
  var t;
  const n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: o, measuredBox: s } = e.layout, { animationType: c } = e.options, l = n.source !== e.layout.source;
    c === "size" ? mn((v) => {
      const x = l ? n.measuredBox[v] : n.layoutBox[v], g = nn(x);
      x.min = o[v].min, x.max = x.min + g;
    }) : $y(c, n.layoutBox, o) && mn((v) => {
      const x = l ? n.measuredBox[v] : n.layoutBox[v], g = nn(o[v]);
      x.max = x.min + g, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[v].max = e.relativeTarget[v].min + g);
    });
    const u = Ii();
    Mo(u, o, n.layoutBox);
    const d = Ii();
    l ? Mo(d, e.applyTransform(s, !0), n.measuredBox) : Mo(d, o, n.layoutBox);
    const h = !Vy(u);
    let p = !1;
    if (!e.resumeFrom) {
      const v = e.getClosestProjectingParent();
      if (v && !v.resumeFrom) {
        const { snapshot: x, layout: g } = v;
        if (x && g) {
          const T = dt();
          Oo(T, n.layoutBox, x.layoutBox);
          const S = dt();
          Oo(S, o, g.layoutBox), Fy(T, S) || (p = !0), v.options.layoutRoot && (e.relativeTarget = S, e.relativeTargetOrigin = T, e.relativeParent = v);
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: o,
      snapshot: n,
      delta: d,
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
function xO(e) {
  Ao && Qr.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function bO(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function wO(e) {
  e.clearSnapshot();
}
function _m(e) {
  e.clearMeasurements();
}
function SO(e) {
  e.isLayoutDirty = !1;
}
function CO(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function Pm(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function TO(e) {
  e.resolveTargetDelta();
}
function _O(e) {
  e.calcProjection();
}
function PO(e) {
  e.resetSkewAndRotation();
}
function AO(e) {
  e.removeLeadSnapshot();
}
function Am(e, t, n) {
  e.translate = rt(t.translate, 0, n), e.scale = rt(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint;
}
function Em(e, t, n, o) {
  e.min = rt(t.min, n.min, o), e.max = rt(t.max, n.max, o);
}
function EO(e, t, n, o) {
  Em(e.x, t.x, n.x, o), Em(e.y, t.y, n.y, o);
}
function RO(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const NO = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, Rm = (e) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e), Nm = Rm("applewebkit/") && !Rm("chrome/") ? Math.round : Ct;
function Mm(e) {
  e.min = Nm(e.min), e.max = Nm(e.max);
}
function MO(e) {
  Mm(e.x), Mm(e.y);
}
function $y(e, t, n) {
  return e === "position" || e === "preserve-aspect" && !OM(Sm(t), Sm(n), 0.2);
}
function OO(e) {
  var t;
  return e !== e.root && ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot);
}
const DO = Wy({
  attachResizeListener: (e, t) => Zn(e, "resize", t),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), Rc = {
  current: void 0
}, Uy = Wy({
  measureScroll: (e) => ({
    x: e.scrollLeft,
    y: e.scrollTop
  }),
  defaultParent: () => {
    if (!Rc.current) {
      const e = new DO({});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), Rc.current = e;
    }
    return Rc.current;
  },
  resetTransform: (e, t) => {
    e.style.transform = t !== void 0 ? t : "none";
  },
  checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), jO = {
  pan: {
    Feature: YM
  },
  drag: {
    Feature: KM,
    ProjectionNode: Uy,
    MeasureLayout: Iy
  }
};
function Om(e, t) {
  const n = t ? "pointerenter" : "pointerleave", o = t ? "onHoverStart" : "onHoverEnd", s = (c, l) => {
    if (c.pointerType === "touch" || _y())
      return;
    const u = e.getProps();
    e.animationState && u.whileHover && e.animationState.setActive("whileHover", t);
    const d = u[o];
    d && Ge.postRender(() => d(c, l));
  };
  return tr(e.current, n, s, {
    passive: !e.getProps()[o]
  });
}
class IO extends kr {
  mount() {
    this.unmount = er(Om(this.node, !0), Om(this.node, !1));
  }
  unmount() {
  }
}
class LO extends kr {
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
    this.unmount = er(Zn(this.node.current, "focus", () => this.onFocus()), Zn(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
const Hy = (e, t) => t ? e === t ? !0 : Hy(e, t.parentElement) : !1;
function Nc(e, t) {
  if (!t)
    return;
  const n = new PointerEvent("pointer" + e);
  t(n, Ua(n));
}
class kO extends kr {
  constructor() {
    super(...arguments), this.removeStartListeners = Ct, this.removeEndListeners = Ct, this.removeAccessibleListeners = Ct, this.startPointerPress = (t, n) => {
      if (this.isPressing)
        return;
      this.removeEndListeners();
      const o = this.node.getProps(), c = tr(window, "pointerup", (u, d) => {
        if (!this.checkPressEnd())
          return;
        const { onTap: h, onTapCancel: p, globalTapTarget: v } = this.node.getProps(), x = !v && !Hy(this.node.current, u.target) ? p : h;
        x && Ge.update(() => x(u, d));
      }, {
        passive: !(o.onTap || o.onPointerUp)
      }), l = tr(window, "pointercancel", (u, d) => this.cancelPress(u, d), {
        passive: !(o.onTapCancel || o.onPointerCancel)
      });
      this.removeEndListeners = er(c, l), this.startPress(t, n);
    }, this.startAccessiblePress = () => {
      const t = (c) => {
        if (c.key !== "Enter" || this.isPressing)
          return;
        const l = (u) => {
          u.key !== "Enter" || !this.checkPressEnd() || Nc("up", (d, h) => {
            const { onTap: p } = this.node.getProps();
            p && Ge.postRender(() => p(d, h));
          });
        };
        this.removeEndListeners(), this.removeEndListeners = Zn(this.node.current, "keyup", l), Nc("down", (u, d) => {
          this.startPress(u, d);
        });
      }, n = Zn(this.node.current, "keydown", t), o = () => {
        this.isPressing && Nc("cancel", (c, l) => this.cancelPress(c, l));
      }, s = Zn(this.node.current, "blur", o);
      this.removeAccessibleListeners = er(n, s);
    };
  }
  startPress(t, n) {
    this.isPressing = !0;
    const { onTapStart: o, whileTap: s } = this.node.getProps();
    s && this.node.animationState && this.node.animationState.setActive("whileTap", !0), o && Ge.postRender(() => o(t, n));
  }
  checkPressEnd() {
    return this.removeEndListeners(), this.isPressing = !1, this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !_y();
  }
  cancelPress(t, n) {
    if (!this.checkPressEnd())
      return;
    const { onTapCancel: o } = this.node.getProps();
    o && Ge.postRender(() => o(t, n));
  }
  mount() {
    const t = this.node.getProps(), n = tr(t.globalTapTarget ? window : this.node.current, "pointerdown", this.startPointerPress, {
      passive: !(t.onTapStart || t.onPointerStart)
    }), o = Zn(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = er(n, o);
  }
  unmount() {
    this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners();
  }
}
const uu = /* @__PURE__ */ new WeakMap(), Mc = /* @__PURE__ */ new WeakMap(), VO = (e) => {
  const t = uu.get(e.target);
  t && t(e);
}, FO = (e) => {
  e.forEach(VO);
};
function BO({ root: e, ...t }) {
  const n = e || document;
  Mc.has(n) || Mc.set(n, {});
  const o = Mc.get(n), s = JSON.stringify(t);
  return o[s] || (o[s] = new IntersectionObserver(FO, { root: e, ...t })), o[s];
}
function WO(e, t, n) {
  const o = BO(t);
  return uu.set(e, n), o.observe(e), () => {
    uu.delete(e), o.unobserve(e);
  };
}
const $O = {
  some: 0,
  all: 1
};
class UO extends kr {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(), { root: n, margin: o, amount: s = "some", once: c } = t, l = {
      root: n ? n.current : void 0,
      rootMargin: o,
      threshold: typeof s == "number" ? s : $O[s]
    }, u = (d) => {
      const { isIntersecting: h } = d;
      if (this.isInView === h || (this.isInView = h, c && !h && this.hasEnteredView))
        return;
      h && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", h);
      const { onViewportEnter: p, onViewportLeave: v } = this.node.getProps(), x = h ? p : v;
      x && x(d);
    };
    return WO(this.node.current, l, u);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(HO(t, n)) && this.startObserver();
  }
  unmount() {
  }
}
function HO({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const zO = {
  inView: {
    Feature: UO
  },
  tap: {
    Feature: kO
  },
  focus: {
    Feature: LO
  },
  hover: {
    Feature: IO
  }
}, GO = {
  layout: {
    ProjectionNode: Uy,
    MeasureLayout: Iy
  }
}, zy = Gi({
  transformPagePoint: (e) => e,
  isStatic: !1,
  reducedMotion: "never"
}), Ha = Gi({}), rd = typeof window < "u", KO = rd ? Fm : Wo, Gy = Gi({ strict: !1 });
function YO(e, t, n, o, s) {
  var c, l;
  const { visualElement: u } = zt(Ha), d = zt(Gy), h = zt(td), p = zt(zy).reducedMotion, v = qs();
  o = o || d.renderer, !v.current && o && (v.current = o(e, {
    visualState: t,
    parent: u,
    props: n,
    presenceContext: h,
    blockInitialAnimation: h ? h.initial === !1 : !1,
    reducedMotionConfig: p
  }));
  const x = v.current, g = zt(jy);
  x && !x.projection && s && (x.type === "html" || x.type === "svg") && qO(v.current, n, s, g);
  const T = qs(!1);
  YT(() => {
    x && T.current && x.update(n, h);
  });
  const S = n[gy], _ = qs(!!S && !(!((c = window.MotionHandoffIsComplete) === null || c === void 0) && c.call(window, S)) && ((l = window.MotionHasOptimisedAnimation) === null || l === void 0 ? void 0 : l.call(window, S)));
  return KO(() => {
    x && (T.current = !0, window.MotionIsMounted = !0, x.updateFeatures(), nd.render(x.render), _.current && x.animationState && x.animationState.animateChanges());
  }), Wo(() => {
    x && (!_.current && x.animationState && x.animationState.animateChanges(), _.current && (queueMicrotask(() => {
      var P;
      (P = window.MotionHandoffMarkAsComplete) === null || P === void 0 || P.call(window, S);
    }), _.current = !1));
  }), x;
}
function qO(e, t, n, o) {
  const { layoutId: s, layout: c, drag: l, dragConstraints: u, layoutScroll: d, layoutRoot: h } = t;
  e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? void 0 : Ky(e.parent)), e.projection.setOptions({
    layoutId: s,
    layout: c,
    alwaysMeasureLayout: !!l || u && ji(u),
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
    layoutScroll: d,
    layoutRoot: h
  });
}
function Ky(e) {
  if (e)
    return e.options.allowProjection !== !1 ? e.projection : Ky(e.parent);
}
function XO(e, t, n) {
  return Bm(
    (o) => {
      o && e.mount && e.mount(o), t && (o ? t.mount(o) : t.unmount()), n && (typeof n == "function" ? n(o) : ji(n) && (n.current = o));
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [t]
  );
}
function za(e) {
  return Ba(e.animate) || Iu.some((t) => ko(e[t]));
}
function Yy(e) {
  return !!(za(e) || e.variants);
}
function ZO(e, t) {
  if (za(e)) {
    const { initial: n, animate: o } = e;
    return {
      initial: n === !1 || ko(n) ? n : void 0,
      animate: ko(o) ? o : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function JO(e) {
  const { initial: t, animate: n } = ZO(e, zt(Ha));
  return $o(() => ({ initial: t, animate: n }), [Dm(t), Dm(n)]);
}
function Dm(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const jm = {
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
}, zi = {};
for (const e in jm)
  zi[e] = {
    isEnabled: (t) => jm[e].some((n) => !!t[n])
  };
function QO(e) {
  for (const t in e)
    zi[t] = {
      ...zi[t],
      ...e[t]
    };
}
const eD = Symbol.for("motionComponentSymbol");
function tD({ preloadedFeatures: e, createVisualElement: t, useRender: n, useVisualState: o, Component: s }) {
  e && QO(e);
  function c(u, d) {
    let h;
    const p = {
      ...zt(zy),
      ...u,
      layoutId: nD(u)
    }, { isStatic: v } = p, x = JO(u), g = o(u, v);
    if (!v && rd) {
      rD(p, e);
      const T = iD(p);
      h = T.MeasureLayout, x.visualElement = YO(s, g, p, t, T.ProjectionNode);
    }
    return m.jsxs(Ha.Provider, { value: x, children: [h && x.visualElement ? m.jsx(h, { visualElement: x.visualElement, ...p }) : null, n(s, u, XO(g, x.visualElement, d), g, v, x.visualElement)] });
  }
  const l = wa(c);
  return l[eD] = s, l;
}
function nD({ layoutId: e }) {
  const t = zt(Dy).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function rD(e, t) {
  const n = zt(Gy).strict;
  if (process.env.NODE_ENV !== "production" && t && n) {
    const o = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
    e.ignoreStrict ? Ji(!1, o) : Or(!1, o);
  }
}
function iD(e) {
  const { drag: t, layout: n } = zi;
  if (!t && !n)
    return {};
  const o = { ...t, ...n };
  return {
    MeasureLayout: t != null && t.isEnabled(e) || n != null && n.isEnabled(e) ? o.MeasureLayout : void 0,
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
function id(e) {
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
function qy(e, { style: t, vars: n }, o, s) {
  Object.assign(e.style, t, s && s.getProjectionStyles(o));
  for (const c in n)
    e.style.setProperty(c, n[c]);
}
const Xy = /* @__PURE__ */ new Set([
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
function Zy(e, t, n, o) {
  qy(e, t, void 0, o);
  for (const s in t.attrs)
    e.setAttribute(Xy.has(s) ? s : ed(s), t.attrs[s]);
}
function Jy(e, { layout: t, layoutId: n }) {
  return di.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!ya[e] || e === "opacity");
}
function od(e, t, n) {
  var o;
  const { style: s } = e, c = {};
  for (const l in s)
    (Nt(s[l]) || t.style && Nt(t.style[l]) || Jy(l, e) || ((o = n == null ? void 0 : n.getValue(l)) === null || o === void 0 ? void 0 : o.liveStyle) !== void 0) && (c[l] = s[l]);
  return c;
}
function Qy(e, t, n) {
  const o = od(e, t, n);
  for (const s in e)
    if (Nt(e[s]) || Nt(t[s])) {
      const c = zo.indexOf(s) !== -1 ? "attr" + s.charAt(0).toUpperCase() + s.substring(1) : s;
      o[c] = e[s];
    }
  return o;
}
function sD(e) {
  const t = qs(null);
  return t.current === null && (t.current = e()), t.current;
}
function aD({ scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n }, o, s, c) {
  const l = {
    latestValues: lD(o, s, c, e),
    renderState: t()
  };
  return n && (l.mount = (u) => n(o, u, l)), l;
}
const e0 = (e) => (t, n) => {
  const o = zt(Ha), s = zt(td), c = () => aD(e, t, o, s);
  return n ? c() : sD(c);
};
function lD(e, t, n, o) {
  const s = {}, c = o(e, {});
  for (const x in c)
    s[x] = ta(c[x]);
  let { initial: l, animate: u } = e;
  const d = za(e), h = Yy(e);
  t && h && !d && e.inherit !== !1 && (l === void 0 && (l = t.initial), u === void 0 && (u = t.animate));
  let p = n ? n.initial === !1 : !1;
  p = p || l === !1;
  const v = p ? u : l;
  if (v && typeof v != "boolean" && !Ba(v)) {
    const x = Array.isArray(v) ? v : [v];
    for (let g = 0; g < x.length; g++) {
      const T = Du(e, x[g]);
      if (T) {
        const { transitionEnd: S, transition: _, ...P } = T;
        for (const E in P) {
          let O = P[E];
          if (Array.isArray(O)) {
            const N = p ? O.length - 1 : 0;
            O = O[N];
          }
          O !== null && (s[E] = O);
        }
        for (const E in S)
          s[E] = S[E];
      }
    }
  }
  return s;
}
const sd = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
}), t0 = () => ({
  ...sd(),
  attrs: {}
}), n0 = (e, t) => t && typeof e == "number" ? t.transform(e) : e, cD = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, uD = zo.length;
function dD(e, t, n) {
  let o = "", s = !0;
  for (let c = 0; c < uD; c++) {
    const l = zo[c], u = e[l];
    if (u === void 0)
      continue;
    let d = !0;
    if (typeof u == "number" ? d = u === (l.startsWith("scale") ? 1 : 0) : d = parseFloat(u) === 0, !d || n) {
      const h = n0(u, Uu[l]);
      if (!d) {
        s = !1;
        const p = cD[l] || l;
        o += `${p}(${h}) `;
      }
      n && (t[l] = h);
    }
  }
  return o = o.trim(), n ? o = n(t, s ? "" : o) : s && (o = "none"), o;
}
function ad(e, t, n) {
  const { style: o, vars: s, transformOrigin: c } = e;
  let l = !1, u = !1;
  for (const d in t) {
    const h = t[d];
    if (di.has(d)) {
      l = !0;
      continue;
    } else if (Kv(d)) {
      s[d] = h;
      continue;
    } else {
      const p = n0(h, Uu[d]);
      d.startsWith("origin") ? (u = !0, c[d] = p) : o[d] = p;
    }
  }
  if (t.transform || (l || n ? o.transform = dD(t, e.transform, n) : o.transform && (o.transform = "none")), u) {
    const { originX: d = "50%", originY: h = "50%", originZ: p = 0 } = c;
    o.transformOrigin = `${d} ${h} ${p}`;
  }
}
function Im(e, t, n) {
  return typeof e == "string" ? e : ue.transform(t + n * e);
}
function fD(e, t, n) {
  const o = Im(t, e.x, e.width), s = Im(n, e.y, e.height);
  return `${o} ${s}`;
}
const hD = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, pD = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function mD(e, t, n = 1, o = 0, s = !0) {
  e.pathLength = 1;
  const c = s ? hD : pD;
  e[c.offset] = ue.transform(-o);
  const l = ue.transform(t), u = ue.transform(n);
  e[c.array] = `${l} ${u}`;
}
function ld(e, {
  attrX: t,
  attrY: n,
  attrScale: o,
  originX: s,
  originY: c,
  pathLength: l,
  pathSpacing: u = 1,
  pathOffset: d = 0,
  // This is object creation, which we try to avoid per-frame.
  ...h
}, p, v) {
  if (ad(e, h, v), p) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  e.attrs = e.style, e.style = {};
  const { attrs: x, style: g, dimensions: T } = e;
  x.transform && (T && (g.transform = x.transform), delete x.transform), T && (s !== void 0 || c !== void 0 || g.transform) && (g.transformOrigin = fD(T, s !== void 0 ? s : 0.5, c !== void 0 ? c : 0.5)), t !== void 0 && (x.x = t), n !== void 0 && (x.y = n), o !== void 0 && (x.scale = o), l !== void 0 && mD(x, l, u, d, !1);
}
const cd = (e) => typeof e == "string" && e.toLowerCase() === "svg", gD = {
  useVisualState: e0({
    scrapeMotionValuesFromProps: Qy,
    createRenderState: t0,
    onMount: (e, t, { renderState: n, latestValues: o }) => {
      Ge.read(() => {
        try {
          n.dimensions = typeof t.getBBox == "function" ? t.getBBox() : t.getBoundingClientRect();
        } catch {
          n.dimensions = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
          };
        }
      }), Ge.render(() => {
        ld(n, o, cd(t.tagName), e.transformTemplate), Zy(t, n);
      });
    }
  })
}, vD = {
  useVisualState: e0({
    scrapeMotionValuesFromProps: od,
    createRenderState: sd
  })
};
function r0(e, t, n) {
  for (const o in t)
    !Nt(t[o]) && !Jy(o, n) && (e[o] = t[o]);
}
function yD({ transformTemplate: e }, t) {
  return $o(() => {
    const n = sd();
    return ad(n, t, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function xD(e, t) {
  const n = e.style || {}, o = {};
  return r0(o, n, e), Object.assign(o, yD(e, t)), o;
}
function bD(e, t) {
  const n = {}, o = xD(e, t);
  return e.drag && e.dragListener !== !1 && (n.draggable = !1, o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none", o.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = o, n;
}
const wD = /* @__PURE__ */ new Set([
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
function xa(e) {
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || wD.has(e);
}
let i0 = (e) => !xa(e);
function SD(e) {
  e && (i0 = (t) => t.startsWith("on") ? !xa(t) : e(t));
}
try {
  SD(require("@emotion/is-prop-valid").default);
} catch {
}
function CD(e, t, n) {
  const o = {};
  for (const s in e)
    s === "values" && typeof e.values == "object" || (i0(s) || n === !0 && xa(s) || !t && !xa(s) || // If trying to use native HTML drag events, forward drag listeners
    e.draggable && s.startsWith("onDrag")) && (o[s] = e[s]);
  return o;
}
function TD(e, t, n, o) {
  const s = $o(() => {
    const c = t0();
    return ld(c, t, cd(o), e.transformTemplate), {
      ...c.attrs,
      style: { ...c.style }
    };
  }, [t]);
  if (e.style) {
    const c = {};
    r0(c, e.style, e), s.style = { ...c, ...s.style };
  }
  return s;
}
function _D(e = !1) {
  return (n, o, s, { latestValues: c }, l) => {
    const d = (id(n) ? TD : bD)(o, c, l, n), h = CD(o, typeof n == "string", e), p = n !== Wm ? { ...h, ...d, ref: s } : {}, { children: v } = o, x = $o(() => Nt(v) ? v.get() : v, [v]);
    return na(n, {
      ...p,
      children: x
    });
  };
}
function PD(e, t) {
  return function(o, { forwardMotionProps: s } = { forwardMotionProps: !1 }) {
    const l = {
      ...id(o) ? gD : vD,
      preloadedFeatures: e,
      useRender: _D(s),
      createVisualElement: t,
      Component: o
    };
    return tD(l);
  };
}
const du = { current: null }, o0 = { current: !1 };
function AD() {
  if (o0.current = !0, !!rd)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"), t = () => du.current = e.matches;
      e.addListener(t), t();
    } else
      du.current = !1;
}
function ED(e, t, n) {
  for (const o in t) {
    const s = t[o], c = n[o];
    if (Nt(s))
      e.addValue(o, s), process.env.NODE_ENV === "development" && Fa(s.version === "11.11.17", `Attempting to mix Motion versions ${s.version} with 11.11.17 may not work as expected.`);
    else if (Nt(c))
      e.addValue(o, Bo(s, { owner: e }));
    else if (c !== s)
      if (e.hasValue(o)) {
        const l = e.getValue(o);
        l.liveStyle === !0 ? l.jump(s) : l.hasAnimated || l.set(s);
      } else {
        const l = e.getStaticValue(o);
        e.addValue(o, Bo(l !== void 0 ? l : s, { owner: e }));
      }
  }
  for (const o in n)
    t[o] === void 0 && e.removeValue(o);
  return t;
}
const Lm = /* @__PURE__ */ new WeakMap(), RD = [...Xv, Rt, jr], ND = (e) => RD.find(qv(e)), km = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
class MD {
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(t, n, o) {
    return {};
  }
  constructor({ parent: t, props: n, presenceContext: o, reducedMotionConfig: s, blockInitialAnimation: c, visualState: l }, u = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = Bu, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const x = Vn.now();
      this.renderScheduledAt < x && (this.renderScheduledAt = x, Ge.render(this.render, !1, !0));
    };
    const { latestValues: d, renderState: h } = l;
    this.latestValues = d, this.baseTarget = { ...d }, this.initialValues = n.initial ? { ...d } : {}, this.renderState = h, this.parent = t, this.props = n, this.presenceContext = o, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = s, this.options = u, this.blockInitialAnimation = !!c, this.isControllingVariants = za(n), this.isVariantNode = Yy(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
    const { willChange: p, ...v } = this.scrapeMotionValuesFromProps(n, {}, this);
    for (const x in v) {
      const g = v[x];
      d[x] !== void 0 && Nt(g) && g.set(d[x], !1);
    }
  }
  mount(t) {
    this.current = t, Lm.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, o) => this.bindToMotionValue(o, n)), o0.current || AD(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : du.current, process.env.NODE_ENV !== "production" && Fa(this.shouldReduceMotion !== !0, "You have Reduced Motion enabled on your device. Animations may not appear as expected."), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    Lm.delete(this.current), this.projection && this.projection.unmount(), Mr(this.notifyUpdate), Mr(this.render), this.valueSubscriptions.forEach((t) => t()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
    for (const t in this.events)
      this.events[t].clear();
    for (const t in this.features) {
      const n = this.features[t];
      n && (n.unmount(), n.isMounted = !1);
    }
    this.current = null;
  }
  bindToMotionValue(t, n) {
    this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
    const o = di.has(t), s = n.on("change", (u) => {
      this.latestValues[t] = u, this.props.onUpdate && Ge.preRender(this.notifyUpdate), o && this.projection && (this.projection.isTransformDirty = !0);
    }), c = n.on("renderRequest", this.scheduleRender);
    let l;
    window.MotionCheckAppearSync && (l = window.MotionCheckAppearSync(this, t, n)), this.valueSubscriptions.set(t, () => {
      s(), c(), l && l(), n.owner && n.stop();
    });
  }
  sortNodePosition(t) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in zi) {
      const n = zi[t];
      if (!n)
        continue;
      const { isEnabled: o, Feature: s } = n;
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
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : dt();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = n;
    for (let o = 0; o < km.length; o++) {
      const s = km[o];
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
    const n = this.getClosestVariantNode();
    if (n)
      return n.variantChildren && n.variantChildren.add(t), () => n.variantChildren.delete(t);
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(t, n) {
    const o = this.values.get(t);
    n !== o && (o && this.removeValue(t), this.bindToMotionValue(t, n), this.values.set(t, n), this.latestValues[t] = n.get());
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t])
      return this.props.values[t];
    let o = this.values.get(t);
    return o === void 0 && n !== void 0 && (o = Bo(n === null ? void 0 : n, { owner: this }), this.addValue(t, o)), o;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(t, n) {
    var o;
    let s = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : (o = this.getBaseTargetFromProps(this.props, t)) !== null && o !== void 0 ? o : this.readValueFromInstance(this.current, t, this.options);
    return s != null && (typeof s == "string" && (zv(s) || Hv(s)) ? s = parseFloat(s) : !ND(s) && jr.test(n) && (s = iy(t, n)), this.setBaseTarget(t, Nt(s) ? s.get() : s)), Nt(s) ? s.get() : s;
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  /**
   * Find the base target for a value thats been removed from all animation
   * props.
   */
  getBaseTarget(t) {
    var n;
    const { initial: o } = this.props;
    let s;
    if (typeof o == "string" || typeof o == "object") {
      const l = Du(this.props, o, (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom);
      l && (s = l[t]);
    }
    if (o && s !== void 0)
      return s;
    const c = this.getBaseTargetFromProps(this.props, t);
    return c !== void 0 && !Nt(c) ? c : this.initialValues[t] !== void 0 && s === void 0 ? void 0 : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new Qu()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class s0 extends MD {
  constructor() {
    super(...arguments), this.KeyframeResolver = oy;
  }
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: o }) {
    delete n[t], delete o[t];
  }
}
function OD(e) {
  return window.getComputedStyle(e);
}
class DD extends s0 {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = qy;
  }
  readValueFromInstance(t, n) {
    if (di.has(n)) {
      const o = Hu(n);
      return o && o.default || 0;
    } else {
      const o = OD(t), s = (Kv(n) ? o.getPropertyValue(n) : o[n]) || 0;
      return typeof s == "string" ? s.trim() : s;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return My(t, n);
  }
  build(t, n, o) {
    ad(t, n, o.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, o) {
    return od(t, n, o);
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    Nt(t) && (this.childSubscription = t.on("change", (n) => {
      this.current && (this.current.textContent = `${n}`);
    }));
  }
}
class jD extends s0 {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = dt;
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (di.has(n)) {
      const o = Hu(n);
      return o && o.default || 0;
    }
    return n = Xy.has(n) ? n : ed(n), t.getAttribute(n);
  }
  scrapeMotionValuesFromProps(t, n, o) {
    return Qy(t, n, o);
  }
  build(t, n, o) {
    ld(t, n, this.isSVGTag, o.transformTemplate);
  }
  renderInstance(t, n, o, s) {
    Zy(t, n, o, s);
  }
  mount(t) {
    this.isSVGTag = cd(t.tagName), super.mount(t);
  }
}
const ID = (e, t) => id(e) ? new jD(t) : new DD(t, {
  allowProjection: e !== Wm
}), LD = /* @__PURE__ */ PD({
  ...CM,
  ...zO,
  ...jO,
  ...GO
}, ID), a0 = /* @__PURE__ */ pN(LD);
function xj({ deal: e }) {
  const [t, n] = jn([]), o = $o(() => [...e.riskFactors].sort((u, d) => {
    const h = { high: 0, medium: 1, low: 2 };
    return h[u.level] - h[d.level];
  }), [e.riskFactors]), s = (u) => {
    switch (u) {
      case "high":
        return /* @__PURE__ */ m.jsx(jc, { className: "w-4 h-4" });
      case "medium":
        return /* @__PURE__ */ m.jsx(p_, { className: "w-4 h-4" });
      case "low":
        return /* @__PURE__ */ m.jsx(f_, { className: "w-4 h-4" });
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
    n((d) => d.includes(u) ? d.filter((h) => h !== u) : [...d, u]);
  };
  return /* @__PURE__ */ m.jsxs(ai, { className: "shadow-lg w-full max-w-3xl mx-auto my-8", children: [
    /* @__PURE__ */ m.jsxs(li, { children: [
      /* @__PURE__ */ m.jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ m.jsx(ci, { className: "text-slate-800", children: "Risk Assessment" }) }),
      /* @__PURE__ */ m.jsx("p", { className: "text-sm text-slate-500", children: "Identify and assess potential obstacles in the deal process" })
    ] }),
    /* @__PURE__ */ m.jsx(ui, { children: /* @__PURE__ */ m.jsx("div", { className: "space-y-6", children: o.map((u, d) => /* @__PURE__ */ m.jsxs("div", { className: `p-4 rounded-lg border ${c(u.level)}`, children: [
      /* @__PURE__ */ m.jsxs(
        "div",
        {
          className: "flex flex-col sm:flex-row sm:items-center sm:justify-between cursor-pointer space-y-2 sm:space-y-0",
          onClick: () => l(u.label),
          children: [
            /* @__PURE__ */ m.jsxs("div", { className: "flex items-center space-x-3", children: [
              s(u.level),
              /* @__PURE__ */ m.jsx("span", { className: "font-semibold text-sm sm:text-base", children: u.label })
            ] }),
            /* @__PURE__ */ m.jsxs("div", { className: "flex items-center justify-between sm:justify-end space-x-4", children: [
              /* @__PURE__ */ m.jsx(Tr, { children: /* @__PURE__ */ m.jsxs(_r, { children: [
                /* @__PURE__ */ m.jsx(Pr, { asChild: !0, children: /* @__PURE__ */ m.jsxs("div", { className: "flex items-center space-x-1 text-xs sm:text-sm text-muted-foreground", children: [
                  /* @__PURE__ */ m.jsxs("span", { children: [
                    u.lostDealFrequency,
                    " deals lost"
                  ] }),
                  /* @__PURE__ */ m.jsx(Do, { className: "w-3 h-3 text-muted-foreground" })
                ] }) }),
                /* @__PURE__ */ m.jsx(Jn, { className: "max-w-xs", children: /* @__PURE__ */ m.jsxs("p", { children: [
                  "This factor contributed to ",
                  u.lostDealFrequency,
                  " lost deals in the past. Addressing this early can help avoid the same outcome."
                ] }) })
              ] }) }),
              /* @__PURE__ */ m.jsx(
                Ta,
                {
                  className: `w-4 h-4 transition-transform ${t.includes(u.label) ? "transform rotate-180" : ""}`
                }
              )
            ] })
          ]
        }
      ),
      t.includes(u.label) && /* @__PURE__ */ m.jsxs(
        a0.div,
        {
          initial: { opacity: 0, height: 0 },
          animate: { opacity: 1, height: "auto" },
          exit: { opacity: 0, height: 0 },
          transition: { duration: 0.3 },
          className: "mt-4 space-y-4",
          children: [
            /* @__PURE__ */ m.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ m.jsxs("div", { children: [
                /* @__PURE__ */ m.jsx("h4", { className: "font-semibold mb-2", children: "Details" }),
                /* @__PURE__ */ m.jsx("p", { className: "text-sm text-slate-600", children: u.details })
              ] }),
              /* @__PURE__ */ m.jsxs("div", { children: [
                /* @__PURE__ */ m.jsx("h4", { className: "font-semibold mb-2", children: "Impact" }),
                /* @__PURE__ */ m.jsx("p", { className: "text-sm text-slate-600", children: u.impact })
              ] })
            ] }),
            /* @__PURE__ */ m.jsxs("div", { children: [
              /* @__PURE__ */ m.jsx("h4", { className: "font-semibold mb-2", children: "Key Metric" }),
              /* @__PURE__ */ m.jsx("p", { className: "text-sm text-slate-600", children: u.metric })
            ] })
          ]
        }
      )
    ] }, d)) }) })
  ] });
}
var ud = "Dialog", [l0, bj] = _a(ud), [kD, Tn] = l0(ud), c0 = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: o,
    defaultOpen: s,
    onOpenChange: c,
    modal: l = !0
  } = e, u = w.useRef(null), d = w.useRef(null), [h = !1, p] = Lo({
    prop: o,
    defaultProp: s,
    onChange: c
  });
  return /* @__PURE__ */ m.jsx(
    kD,
    {
      scope: t,
      triggerRef: u,
      contentRef: d,
      contentId: ti(),
      titleId: ti(),
      descriptionId: ti(),
      open: h,
      onOpenChange: p,
      onOpenToggle: w.useCallback(() => p((v) => !v), [p]),
      modal: l,
      children: n
    }
  );
};
c0.displayName = ud;
var u0 = "DialogTrigger", VD = w.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...o } = e, s = Tn(u0, n), c = et(t, s.triggerRef);
    return /* @__PURE__ */ m.jsx(
      Ve.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": s.open,
        "aria-controls": s.contentId,
        "data-state": hd(s.open),
        ...o,
        ref: c,
        onClick: Le(e.onClick, s.onOpenToggle)
      }
    );
  }
);
VD.displayName = u0;
var dd = "DialogPortal", [FD, d0] = l0(dd, {
  forceMount: void 0
}), f0 = (e) => {
  const { __scopeDialog: t, forceMount: n, children: o, container: s } = e, c = Tn(dd, t);
  return /* @__PURE__ */ m.jsx(FD, { scope: t, forceMount: n, children: w.Children.map(o, (l) => /* @__PURE__ */ m.jsx(Zi, { present: n || c.open, children: /* @__PURE__ */ m.jsx(Tu, { asChild: !0, container: s, children: l }) })) });
};
f0.displayName = dd;
var ba = "DialogOverlay", h0 = w.forwardRef(
  (e, t) => {
    const n = d0(ba, e.__scopeDialog), { forceMount: o = n.forceMount, ...s } = e, c = Tn(ba, e.__scopeDialog);
    return c.modal ? /* @__PURE__ */ m.jsx(Zi, { present: o || c.open, children: /* @__PURE__ */ m.jsx(BD, { ...s, ref: t }) }) : null;
  }
);
h0.displayName = ba;
var BD = w.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...o } = e, s = Tn(ba, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ m.jsx(Pu, { as: ri, allowPinchZoom: !0, shards: [s.contentRef], children: /* @__PURE__ */ m.jsx(
        Ve.div,
        {
          "data-state": hd(s.open),
          ...o,
          ref: t,
          style: { pointerEvents: "auto", ...o.style }
        }
      ) })
    );
  }
), si = "DialogContent", p0 = w.forwardRef(
  (e, t) => {
    const n = d0(si, e.__scopeDialog), { forceMount: o = n.forceMount, ...s } = e, c = Tn(si, e.__scopeDialog);
    return /* @__PURE__ */ m.jsx(Zi, { present: o || c.open, children: c.modal ? /* @__PURE__ */ m.jsx(WD, { ...s, ref: t }) : /* @__PURE__ */ m.jsx($D, { ...s, ref: t }) });
  }
);
p0.displayName = si;
var WD = w.forwardRef(
  (e, t) => {
    const n = Tn(si, e.__scopeDialog), o = w.useRef(null), s = et(t, n.contentRef, o);
    return w.useEffect(() => {
      const c = o.current;
      if (c)
        return Mg(c);
    }, []), /* @__PURE__ */ m.jsx(
      m0,
      {
        ...e,
        ref: s,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: Le(e.onCloseAutoFocus, (c) => {
          var l;
          c.preventDefault(), (l = n.triggerRef.current) == null || l.focus();
        }),
        onPointerDownOutside: Le(e.onPointerDownOutside, (c) => {
          const l = c.detail.originalEvent, u = l.button === 0 && l.ctrlKey === !0;
          (l.button === 2 || u) && c.preventDefault();
        }),
        onFocusOutside: Le(
          e.onFocusOutside,
          (c) => c.preventDefault()
        )
      }
    );
  }
), $D = w.forwardRef(
  (e, t) => {
    const n = Tn(si, e.__scopeDialog), o = w.useRef(!1), s = w.useRef(!1);
    return /* @__PURE__ */ m.jsx(
      m0,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (c) => {
          var l, u;
          (l = e.onCloseAutoFocus) == null || l.call(e, c), c.defaultPrevented || (o.current || (u = n.triggerRef.current) == null || u.focus(), c.preventDefault()), o.current = !1, s.current = !1;
        },
        onInteractOutside: (c) => {
          var d, h;
          (d = e.onInteractOutside) == null || d.call(e, c), c.defaultPrevented || (o.current = !0, c.detail.originalEvent.type === "pointerdown" && (s.current = !0));
          const l = c.target;
          ((h = n.triggerRef.current) == null ? void 0 : h.contains(l)) && c.preventDefault(), c.detail.originalEvent.type === "focusin" && s.current && c.preventDefault();
        }
      }
    );
  }
), m0 = w.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: o, onOpenAutoFocus: s, onCloseAutoFocus: c, ...l } = e, u = Tn(si, n), d = w.useRef(null), h = et(t, d);
    return rg(), /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
      /* @__PURE__ */ m.jsx(
        pu,
        {
          asChild: !0,
          loop: !0,
          trapped: o,
          onMountAutoFocus: s,
          onUnmountAutoFocus: c,
          children: /* @__PURE__ */ m.jsx(
            Pa,
            {
              role: "dialog",
              id: u.contentId,
              "aria-describedby": u.descriptionId,
              "aria-labelledby": u.titleId,
              "data-state": hd(u.open),
              ...l,
              ref: h,
              onDismiss: () => u.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
        /* @__PURE__ */ m.jsx(UD, { titleId: u.titleId }),
        /* @__PURE__ */ m.jsx(zD, { contentRef: d, descriptionId: u.descriptionId })
      ] })
    ] });
  }
), fd = "DialogTitle", g0 = w.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...o } = e, s = Tn(fd, n);
    return /* @__PURE__ */ m.jsx(Ve.h2, { id: s.titleId, ...o, ref: t });
  }
);
g0.displayName = fd;
var v0 = "DialogDescription", y0 = w.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...o } = e, s = Tn(v0, n);
    return /* @__PURE__ */ m.jsx(Ve.p, { id: s.descriptionId, ...o, ref: t });
  }
);
y0.displayName = v0;
var x0 = "DialogClose", b0 = w.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...o } = e, s = Tn(x0, n);
    return /* @__PURE__ */ m.jsx(
      Ve.button,
      {
        type: "button",
        ...o,
        ref: t,
        onClick: Le(e.onClick, () => s.onOpenChange(!1))
      }
    );
  }
);
b0.displayName = x0;
function hd(e) {
  return e ? "open" : "closed";
}
var w0 = "DialogTitleWarning", [wj, S0] = BP(w0, {
  contentName: si,
  titleName: fd,
  docsSlug: "dialog"
}), UD = ({ titleId: e }) => {
  const t = S0(w0), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return w.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, HD = "DialogDescriptionWarning", zD = ({ contentRef: e, descriptionId: t }) => {
  const o = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${S0(HD).contentName}}.`;
  return w.useEffect(() => {
    var c;
    const s = (c = e.current) == null ? void 0 : c.getAttribute("aria-describedby");
    t && s && (document.getElementById(t) || console.warn(o));
  }, [o, e, t]), null;
}, GD = c0, KD = f0, C0 = h0, T0 = p0, _0 = g0, P0 = y0, YD = b0;
const A0 = GD, qD = KD, E0 = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m.jsx(
  C0,
  {
    ref: n,
    className: Ue(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
E0.displayName = C0.displayName;
const pd = w.forwardRef(({ className: e, children: t, ...n }, o) => /* @__PURE__ */ m.jsxs(qD, { children: [
  /* @__PURE__ */ m.jsx(E0, {}),
  /* @__PURE__ */ m.jsxs(
    T0,
    {
      ref: o,
      className: Ue(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        e
      ),
      ...n,
      children: [
        t,
        /* @__PURE__ */ m.jsxs(YD, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ m.jsx(qm, { className: "h-4 w-4" }),
          /* @__PURE__ */ m.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
pd.displayName = T0.displayName;
const md = ({
  className: e,
  ...t
}) => /* @__PURE__ */ m.jsx(
  "div",
  {
    className: Ue(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      e
    ),
    ...t
  }
);
md.displayName = "DialogHeader";
const gd = ({
  className: e,
  ...t
}) => /* @__PURE__ */ m.jsx(
  "div",
  {
    className: Ue(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
gd.displayName = "DialogFooter";
const vd = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m.jsx(
  _0,
  {
    ref: n,
    className: Ue(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
vd.displayName = _0.displayName;
const R0 = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m.jsx(
  P0,
  {
    ref: n,
    className: Ue("text-sm text-muted-foreground", e),
    ...t
  }
));
R0.displayName = P0.displayName;
var XD = "Separator", Vm = "horizontal", ZD = ["horizontal", "vertical"], N0 = w.forwardRef((e, t) => {
  const { decorative: n, orientation: o = Vm, ...s } = e, c = JD(o) ? o : Vm, u = n ? { role: "none" } : { "aria-orientation": c === "vertical" ? c : void 0, role: "separator" };
  return /* @__PURE__ */ m.jsx(
    Ve.div,
    {
      "data-orientation": c,
      ...u,
      ...s,
      ref: t
    }
  );
});
N0.displayName = XD;
function JD(e) {
  return ZD.includes(e);
}
var M0 = N0;
const O0 = w.forwardRef(
  ({ className: e, orientation: t = "horizontal", decorative: n = !0, ...o }, s) => /* @__PURE__ */ m.jsx(
    M0,
    {
      ref: s,
      decorative: n,
      orientation: t,
      className: Ue(
        "shrink-0 bg-border",
        t === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        e
      ),
      ...o
    }
  )
);
O0.displayName = M0.displayName;
const Sj = ({ deal: e, onNavigate: t }) => {
  const [n, o] = jn([]), [s, c] = jn(!1), l = (h) => {
    o((p) => p.includes(h) ? p.filter((v) => v !== h) : [...p, h]);
  }, u = (h) => h.split("_").map((p) => p.charAt(0).toUpperCase() + p.slice(1)).join(" "), d = (h) => h === "implications" ? m_ : nP(h);
  return /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
    /* @__PURE__ */ m.jsxs(ai, { className: "shadow-lg w-full max-w-3xl mx-auto my-8", children: [
      /* @__PURE__ */ m.jsxs(li, { className: "flex flex-row items-center justify-between", children: [
        /* @__PURE__ */ m.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ m.jsx(ci, { className: "", children: "Deal Qualification" }),
          /* @__PURE__ */ m.jsx("p", { className: "text-sm text-muted-foreground", children: "Assess this deal's qualification strength according to MEDDPICC." })
        ] }),
        /* @__PURE__ */ m.jsx(Tr, { children: /* @__PURE__ */ m.jsxs(_r, { children: [
          /* @__PURE__ */ m.jsx(Pr, { asChild: !0, children: /* @__PURE__ */ m.jsx(
            gt,
            {
              variant: "outline",
              size: "sm",
              onClick: () => t == null ? void 0 : t("/deals/qualification-framework"),
              children: /* @__PURE__ */ m.jsx(qh, { className: "w-3 h-3" })
            }
          ) }),
          /* @__PURE__ */ m.jsx(Jn, { children: /* @__PURE__ */ m.jsx("p", { children: "Configure qualification framework" }) })
        ] }) })
      ] }),
      /* @__PURE__ */ m.jsx(ui, { children: /* @__PURE__ */ m.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ m.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
          /* @__PURE__ */ m.jsx("span", { className: "text-sm font-medium text-muted-foreground", children: "Criteria" }),
          /* @__PURE__ */ m.jsx("div", { className: "flex items-center space-x-1", children: /* @__PURE__ */ m.jsx(Tr, { children: /* @__PURE__ */ m.jsxs(_r, { children: [
            /* @__PURE__ */ m.jsx(Pr, { asChild: !0, children: /* @__PURE__ */ m.jsxs("div", { className: "flex items-center space-x-1 text-sm text-muted-foreground cursor-help", children: [
              /* @__PURE__ */ m.jsx("span", { className: "text-sm font-medium", children: "Score" }),
              /* @__PURE__ */ m.jsx(Do, { className: "w-3 h-3" })
            ] }) }),
            /* @__PURE__ */ m.jsx(Jn, { className: "w-80", children: /* @__PURE__ */ m.jsx("div", { className: "space-y-4", children: /* @__PURE__ */ m.jsxs("p", { className: "text-sm", children: [
              "This score (0-5) indicates your progress in addressing key sales qualification criteria. You can expand each category to view details.",
              " ",
              /* @__PURE__ */ m.jsx(
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
        Object.entries(e.meddpicc).map(([h, p], v) => {
          const x = d(h), g = n.includes(h), T = e.dealBreakers[h];
          return /* @__PURE__ */ m.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ m.jsxs("div", { className: "flex items-center space-x-4", children: [
              /* @__PURE__ */ m.jsxs("div", { className: "w-48 flex items-center space-x-2", children: [
                x && /* @__PURE__ */ m.jsx(x, { className: "w-5 h-5" }),
                /* @__PURE__ */ m.jsx("span", { children: u(h) }),
                T && /* @__PURE__ */ m.jsx(jc, { className: "w-4 h-4 text-red-500" })
              ] }),
              /* @__PURE__ */ m.jsxs("div", { className: "flex-1 flex items-center space-x-4", children: [
                /* @__PURE__ */ m.jsx("div", { className: "flex-1", children: /* @__PURE__ */ m.jsx(Ou, { value: p * 100 / 5 }) }),
                /* @__PURE__ */ m.jsx("div", { className: "w-12 text-center", children: /* @__PURE__ */ m.jsxs("span", { className: "text-sm font-medium", children: [
                  p,
                  "/5"
                ] }) }),
                /* @__PURE__ */ m.jsx(
                  gt,
                  {
                    variant: "ghost",
                    size: "sm",
                    className: "p-0",
                    onClick: () => l(h),
                    children: /* @__PURE__ */ m.jsx(
                      Ta,
                      {
                        className: `h-4 w-4 transform transition-transform duration-200 ${g ? "rotate-180" : ""}`
                      }
                    )
                  }
                )
              ] })
            ] }),
            g && /* @__PURE__ */ m.jsxs("div", { className: "ml-12 pl-4 border-l border-slate-200", children: [
              T && /* @__PURE__ */ m.jsxs("div", { className: "inline-flex items-center space-x-2 py-2 text-red-600 bg-red-50 px-3 rounded-md mb-2", children: [
                /* @__PURE__ */ m.jsx(jc, { className: "w-4 h-4 shrink-0" }),
                /* @__PURE__ */ m.jsx("span", { className: "text-sm font-medium", children: T })
              ] }),
              /* @__PURE__ */ m.jsx("div", { className: "space-y-2", children: [...e.qualificationDetails[h]].sort(
                (S, _) => _.completed === S.completed ? 0 : _.completed ? 1 : -1
              ).map((S, _) => /* @__PURE__ */ m.jsxs("div", { className: "flex items-center space-x-2", children: [
                S.completed ? /* @__PURE__ */ m.jsx(Ca, { className: "h-4 w-4 text-green-500" }) : /* @__PURE__ */ m.jsx(qm, { className: "h-4 w-4 text-muted-foreground" }),
                /* @__PURE__ */ m.jsx(
                  "span",
                  {
                    className: S.completed ? "text-slate-600" : "text-muted-foreground",
                    children: S.text
                  }
                )
              ] }, _)) })
            ] })
          ] }, v);
        })
      ] }) })
    ] }),
    /* @__PURE__ */ m.jsx(A0, { open: s, onOpenChange: c, children: /* @__PURE__ */ m.jsxs(pd, { className: "sm:max-w-md", children: [
      /* @__PURE__ */ m.jsx(md, { children: /* @__PURE__ */ m.jsx(vd, { children: "Qualification Score" }) }),
      /* @__PURE__ */ m.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ m.jsxs("div", { children: [
          /* @__PURE__ */ m.jsx("p", { className: "font-medium mb-2", children: "What the score means" }),
          /* @__PURE__ */ m.jsx("p", { className: "text-sm text-muted-foreground", children: "The score (0-5) reflects your progress in qualifying an opportunity across key criteria of the framework you have selected." })
        ] }),
        /* @__PURE__ */ m.jsxs("div", { children: [
          /* @__PURE__ */ m.jsx("p", { className: "font-medium mb-2", children: "Score interpretation" }),
          /* @__PURE__ */ m.jsxs("ul", { className: "text-sm text-muted-foreground space-y-1", children: [
            /* @__PURE__ */ m.jsxs("li", { children: [
              /* @__PURE__ */ m.jsx("strong", { children: "0" }),
              " = No progress"
            ] }),
            /* @__PURE__ */ m.jsxs("li", { children: [
              /* @__PURE__ */ m.jsx("strong", { children: "1-2" }),
              " = Limited progress"
            ] }),
            /* @__PURE__ */ m.jsxs("li", { children: [
              /* @__PURE__ */ m.jsx("strong", { children: "3" }),
              " = Moderate progress"
            ] }),
            /* @__PURE__ */ m.jsxs("li", { children: [
              /* @__PURE__ */ m.jsx("strong", { children: "4" }),
              " = Strong progress"
            ] }),
            /* @__PURE__ */ m.jsxs("li", { children: [
              /* @__PURE__ */ m.jsx("strong", { children: "5" }),
              " = Full progress"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ m.jsxs("div", { children: [
          /* @__PURE__ */ m.jsx("p", { className: "font-medium mb-2", children: "How the score is calculated" }),
          /* @__PURE__ */ m.jsx("p", { className: "text-sm text-muted-foreground", children: "Each component's score depends on how many weighted conditions are met. Meeting more conditions increases the score." })
        ] }),
        /* @__PURE__ */ m.jsxs("div", { children: [
          /* @__PURE__ */ m.jsx("p", { className: "font-medium mb-2", children: "What are deal breakers?" }),
          /* @__PURE__ */ m.jsx("p", { className: "text-sm text-muted-foreground", children: "Any flagged deal breakers are critical issues that may block the deal and need immediate attention." })
        ] }),
        /* @__PURE__ */ m.jsx(O0, {}),
        /* @__PURE__ */ m.jsxs("div", { children: [
          /* @__PURE__ */ m.jsx("p", { className: "font-medium mb-2", children: "Adjust the framework" }),
          /* @__PURE__ */ m.jsxs("p", { className: "text-sm text-muted-foreground", children: [
            "You can adjust the qualification questions and weights here",
            " ",
            /* @__PURE__ */ m.jsx(
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
      /* @__PURE__ */ m.jsxs(gd, { children: [
        /* @__PURE__ */ m.jsxs(gt, { onClick: () => t == null ? void 0 : t("/deals/qualification-framework"), variant: "outline", children: [
          "Configure framework",
          /* @__PURE__ */ m.jsx(qh, { className: "w-3 h-3 ml-1" })
        ] }),
        /* @__PURE__ */ m.jsx(gt, { onClick: () => c(!1), children: "Close" })
      ] })
    ] }) })
  ] });
}, Eo = w.forwardRef(
  ({ className: e, type: t, ...n }, o) => /* @__PURE__ */ m.jsx(
    "input",
    {
      type: t,
      className: Ue(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        e
      ),
      ref: o,
      ...n
    }
  )
);
Eo.displayName = "Input";
var yd = "Checkbox", [QD, Cj] = _a(yd), [ej, tj] = QD(yd), D0 = w.forwardRef(
  (e, t) => {
    const {
      __scopeCheckbox: n,
      name: o,
      checked: s,
      defaultChecked: c,
      required: l,
      disabled: u,
      value: d = "on",
      onCheckedChange: h,
      form: p,
      ...v
    } = e, [x, g] = w.useState(null), T = et(t, (N) => g(N)), S = w.useRef(!1), _ = x ? p || !!x.closest("form") : !0, [P = !1, E] = Lo({
      prop: s,
      defaultProp: c,
      onChange: h
    }), O = w.useRef(P);
    return w.useEffect(() => {
      const N = x == null ? void 0 : x.form;
      if (N) {
        const j = () => E(O.current);
        return N.addEventListener("reset", j), () => N.removeEventListener("reset", j);
      }
    }, [x, E]), /* @__PURE__ */ m.jsxs(ej, { scope: n, state: P, disabled: u, children: [
      /* @__PURE__ */ m.jsx(
        Ve.button,
        {
          type: "button",
          role: "checkbox",
          "aria-checked": Ar(P) ? "mixed" : P,
          "aria-required": l,
          "data-state": L0(P),
          "data-disabled": u ? "" : void 0,
          disabled: u,
          value: d,
          ...v,
          ref: T,
          onKeyDown: Le(e.onKeyDown, (N) => {
            N.key === "Enter" && N.preventDefault();
          }),
          onClick: Le(e.onClick, (N) => {
            E((j) => Ar(j) ? !0 : !j), _ && (S.current = N.isPropagationStopped(), S.current || N.stopPropagation());
          })
        }
      ),
      _ && /* @__PURE__ */ m.jsx(
        nj,
        {
          control: x,
          bubbles: !S.current,
          name: o,
          value: d,
          checked: P,
          required: l,
          disabled: u,
          form: p,
          style: { transform: "translateX(-100%)" },
          defaultChecked: Ar(c) ? !1 : c
        }
      )
    ] });
  }
);
D0.displayName = yd;
var j0 = "CheckboxIndicator", I0 = w.forwardRef(
  (e, t) => {
    const { __scopeCheckbox: n, forceMount: o, ...s } = e, c = tj(j0, n);
    return /* @__PURE__ */ m.jsx(Zi, { present: o || Ar(c.state) || c.state === !0, children: /* @__PURE__ */ m.jsx(
      Ve.span,
      {
        "data-state": L0(c.state),
        "data-disabled": c.disabled ? "" : void 0,
        ...s,
        ref: t,
        style: { pointerEvents: "none", ...e.style }
      }
    ) });
  }
);
I0.displayName = j0;
var nj = (e) => {
  const { control: t, checked: n, bubbles: o = !0, defaultChecked: s, ...c } = e, l = w.useRef(null), u = Rg(n), d = mg(t);
  w.useEffect(() => {
    const p = l.current, v = window.HTMLInputElement.prototype, g = Object.getOwnPropertyDescriptor(v, "checked").set;
    if (u !== n && g) {
      const T = new Event("click", { bubbles: o });
      p.indeterminate = Ar(n), g.call(p, Ar(n) ? !1 : n), p.dispatchEvent(T);
    }
  }, [u, n, o]);
  const h = w.useRef(Ar(n) ? !1 : n);
  return /* @__PURE__ */ m.jsx(
    "input",
    {
      type: "checkbox",
      "aria-hidden": !0,
      defaultChecked: s ?? h.current,
      ...c,
      tabIndex: -1,
      ref: l,
      style: {
        ...e.style,
        ...d,
        position: "absolute",
        pointerEvents: "none",
        opacity: 0,
        margin: 0
      }
    }
  );
};
function Ar(e) {
  return e === "indeterminate";
}
function L0(e) {
  return Ar(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
var k0 = D0, rj = I0;
const V0 = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m.jsx(
  k0,
  {
    ref: n,
    className: Ue(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      e
    ),
    ...t,
    children: /* @__PURE__ */ m.jsx(
      rj,
      {
        className: Ue("flex items-center justify-center text-current"),
        children: /* @__PURE__ */ m.jsx(Ca, { className: "h-4 w-4" })
      }
    )
  }
));
V0.displayName = k0.displayName;
var ij = "Label", F0 = w.forwardRef((e, t) => /* @__PURE__ */ m.jsx(
  Ve.label,
  {
    ...e,
    ref: t,
    onMouseDown: (n) => {
      var s;
      n.target.closest("button, input, select, textarea") || ((s = e.onMouseDown) == null || s.call(e, n), !n.defaultPrevented && n.detail > 1 && n.preventDefault());
    }
  }
));
F0.displayName = ij;
var B0 = F0;
const oj = fu(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), Ro = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m.jsx(
  B0,
  {
    ref: n,
    className: Ue(oj(), e),
    ...t
  }
));
Ro.displayName = B0.displayName;
const W0 = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m.jsx(
  "textarea",
  {
    className: Ue(
      "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      e
    ),
    ref: n,
    ...t
  }
));
W0.displayName = "Textarea";
const Ys = {
  high: 0,
  medium: 1,
  low: 2
};
function Tj({ deal: e }) {
  const [t, n] = jn(
    () => [...e.recommendedActions].sort((N, j) => Ys[N.priority] - Ys[j.priority])
  ), [o, s] = jn(null), [c, l] = jn(""), [u, d] = jn("medium"), [h, p] = jn({
    isOpen: !1,
    taskTitle: "",
    notes: "",
    taskType: "to-do",
    dueDate: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
    actionIndex: null
  }), v = (N) => {
    switch (N) {
      case "high":
        return "bg-red-100 text-red-800";
      case "medium":
        return "bg-yellow-100 text-yellow-800";
      case "low":
        return "bg-slate-100 text-slate-800";
      default:
        return "bg-slate-100 text-slate-800";
    }
  }, x = (N) => [...N].sort((j, W) => Ys[j.priority] - Ys[W.priority]), g = (N) => {
    s(N);
  }, T = (N, j) => {
    const W = [...t];
    W[N] = { ...W[N], text: j }, n(x(W)), s(null);
  }, S = (N) => {
    const j = t.filter((W, $) => $ !== N);
    n(x(j));
  }, _ = () => {
    if (c.trim()) {
      const N = [
        ...t,
        {
          text: c.trim(),
          priority: u,
          type: "document",
          completed: !1,
          addedToHubspot: !1
        }
      ];
      n(x(N)), l("");
    }
  }, P = (N) => {
    const j = t[N];
    p({
      isOpen: !0,
      taskTitle: j.text,
      notes: "",
      taskType: "to-do",
      dueDate: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
      actionIndex: N
    });
  }, E = () => {
    if (h.actionIndex !== null) {
      const N = [...t];
      N[h.actionIndex] = {
        ...N[h.actionIndex],
        addedToHubspot: !0
      }, n(x(N)), console.log("Creating HubSpot task:", {
        title: h.taskTitle,
        notes: h.notes,
        type: h.taskType,
        dueDate: h.dueDate
      }), p((j) => ({ ...j, isOpen: !1 }));
    }
  }, O = () => {
    const N = t.map((j) => ({
      ...j,
      addedToHubspot: !0
    }));
    n(x(N));
  };
  return /* @__PURE__ */ m.jsxs(ai, { className: "shadow-lg w-full max-w-3xl mx-auto my-8", children: [
    /* @__PURE__ */ m.jsxs(li, { children: [
      /* @__PURE__ */ m.jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ m.jsx(ci, { children: "Action Plan" }) }),
      /* @__PURE__ */ m.jsx("p", { className: "text-sm text-muted-foreground", children: "Recommended actions to drive the deal forward" })
    ] }),
    /* @__PURE__ */ m.jsxs(ui, { children: [
      /* @__PURE__ */ m.jsx("ul", { className: "space-y-3", children: t.map((N, j) => /* @__PURE__ */ m.jsxs(
        a0.li,
        {
          initial: { opacity: 0, y: -10 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: j * 0.1 },
          className: "group flex items-center space-x-3 p-2 rounded-lg hover:bg-slate-50",
          children: [
            /* @__PURE__ */ m.jsx(
              V0,
              {
                id: `action-${j}`,
                checked: N.completed,
                onCheckedChange: (W) => {
                  const $ = [...t];
                  $[j] = {
                    ...N,
                    completed: W
                  }, n(x($));
                }
              }
            ),
            o === j ? /* @__PURE__ */ m.jsxs("div", { className: "flex-1 flex items-center space-x-2", children: [
              /* @__PURE__ */ m.jsx(
                Eo,
                {
                  value: N.text,
                  onChange: (W) => T(j, W.target.value),
                  className: "flex-1"
                }
              ),
              /* @__PURE__ */ m.jsx(gt, { onClick: () => s(null), size: "sm", children: "Save" })
            ] }) : /* @__PURE__ */ m.jsxs("div", { className: "flex-1 flex items-center justify-between", children: [
              /* @__PURE__ */ m.jsx("div", { className: "flex items-center space-x-3", children: /* @__PURE__ */ m.jsx(
                "label",
                {
                  htmlFor: `action-${j}`,
                  className: `text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${N.completed ? "line-through text-slate-400" : "text-slate-900"}`,
                  children: N.text
                }
              ) }),
              /* @__PURE__ */ m.jsxs("div", { className: "flex items-center space-x-2", children: [
                /* @__PURE__ */ m.jsxs(
                  "div",
                  {
                    className: N.addedToHubspot ? "flex items-center opacity-100" : "flex items-center opacity-0 group-hover:opacity-100 transition-opacity",
                    children: [
                      /* @__PURE__ */ m.jsx(
                        gt,
                        {
                          variant: "ghost",
                          size: "sm",
                          onClick: () => g(j),
                          className: N.addedToHubspot ? "hidden" : "",
                          children: /* @__PURE__ */ m.jsx(g_, { className: "w-4 h-4" })
                        }
                      ),
                      /* @__PURE__ */ m.jsx(
                        gt,
                        {
                          variant: "ghost",
                          size: "sm",
                          onClick: () => S(j),
                          className: N.addedToHubspot ? "hidden" : "",
                          children: /* @__PURE__ */ m.jsx(x_, { className: "w-4 h-4" })
                        }
                      ),
                      /* @__PURE__ */ m.jsx(
                        gt,
                        {
                          variant: "ghost",
                          size: "sm",
                          onClick: () => P(j),
                          disabled: N.addedToHubspot,
                          children: N.addedToHubspot ? /* @__PURE__ */ m.jsxs("span", { className: "flex items-center space-x-1", children: [
                            /* @__PURE__ */ m.jsx(Ca, { className: "w-4 h-4 text-green-500" }),
                            /* @__PURE__ */ m.jsx("span", { className: "text-xs text-green-500", children: "Added to HubSpot" })
                          ] }) : "Add HubSpot Task"
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ m.jsx(Ru, { className: `${v(N.priority)} capitalize`, children: N.priority })
              ] })
            ] })
          ]
        },
        j
      )) }),
      /* @__PURE__ */ m.jsxs("div", { className: "mt-4 flex items-center space-x-2", children: [
        /* @__PURE__ */ m.jsx(
          Eo,
          {
            value: c,
            onChange: (N) => l(N.target.value),
            placeholder: "Add a new action...",
            className: "flex-1"
          }
        ),
        /* @__PURE__ */ m.jsxs(
          Kc,
          {
            value: u,
            onValueChange: (N) => d(N),
            children: [
              /* @__PURE__ */ m.jsx(ua, { className: "w-[130px]", children: /* @__PURE__ */ m.jsx(Yc, { placeholder: "Select priority" }) }),
              /* @__PURE__ */ m.jsxs(da, { children: [
                /* @__PURE__ */ m.jsx(Sr, { value: "high", children: "High" }),
                /* @__PURE__ */ m.jsx(Sr, { value: "medium", children: "Medium" }),
                /* @__PURE__ */ m.jsx(Sr, { value: "low", children: "Low" })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ m.jsxs(gt, { onClick: _, children: [
          /* @__PURE__ */ m.jsx(v_, { className: "w-4 h-4 mr-2" }),
          "Add"
        ] })
      ] }),
      /* @__PURE__ */ m.jsx("div", { className: "mt-4 flex justify-end", children: /* @__PURE__ */ m.jsx(gt, { variant: "secondary", onClick: O, children: "Add All as HubSpot Tasks" }) }),
      /* @__PURE__ */ m.jsx(
        A0,
        {
          open: h.isOpen,
          onOpenChange: (N) => p((j) => ({ ...j, isOpen: N })),
          children: /* @__PURE__ */ m.jsxs(pd, { children: [
            /* @__PURE__ */ m.jsxs(md, { children: [
              /* @__PURE__ */ m.jsx(vd, { children: "Add Task to HubSpot" }),
              /* @__PURE__ */ m.jsx(R0, { children: "Configure the task details before adding it to HubSpot" })
            ] }),
            /* @__PURE__ */ m.jsxs("div", { className: "grid gap-4 py-4", children: [
              /* @__PURE__ */ m.jsxs("div", { className: "grid gap-2", children: [
                /* @__PURE__ */ m.jsx(Ro, { htmlFor: "taskTitle", children: "Task Title" }),
                /* @__PURE__ */ m.jsx(
                  Eo,
                  {
                    id: "taskTitle",
                    value: h.taskTitle,
                    onChange: (N) => p((j) => ({ ...j, taskTitle: N.target.value }))
                  }
                )
              ] }),
              /* @__PURE__ */ m.jsxs("div", { className: "grid gap-2", children: [
                /* @__PURE__ */ m.jsx(Ro, { htmlFor: "taskType", children: "Task Type" }),
                /* @__PURE__ */ m.jsxs(
                  Kc,
                  {
                    value: h.taskType,
                    onValueChange: (N) => p((j) => ({ ...j, taskType: N })),
                    children: [
                      /* @__PURE__ */ m.jsx(ua, { children: /* @__PURE__ */ m.jsx(Yc, { placeholder: "Select task type" }) }),
                      /* @__PURE__ */ m.jsxs(da, { children: [
                        /* @__PURE__ */ m.jsx(Sr, { value: "call", children: "Call" }),
                        /* @__PURE__ */ m.jsx(Sr, { value: "email", children: "Email" }),
                        /* @__PURE__ */ m.jsx(Sr, { value: "to-do", children: "To-Do" })
                      ] })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ m.jsxs("div", { className: "grid gap-2", children: [
                /* @__PURE__ */ m.jsx(Ro, { htmlFor: "dueDate", children: "Due Date" }),
                /* @__PURE__ */ m.jsxs("div", { className: "flex items-center space-x-2", children: [
                  /* @__PURE__ */ m.jsx(
                    Eo,
                    {
                      id: "dueDate",
                      type: "date",
                      value: h.dueDate,
                      onChange: (N) => p((j) => ({ ...j, dueDate: N.target.value }))
                    }
                  ),
                  /* @__PURE__ */ m.jsx(
                    gt,
                    {
                      variant: "outline",
                      size: "icon",
                      onClick: () => p((N) => ({
                        ...N,
                        dueDate: (/* @__PURE__ */ new Date()).toISOString().split("T")[0]
                      })),
                      children: /* @__PURE__ */ m.jsx(u_, { className: "h-4 w-4" })
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ m.jsxs("div", { className: "grid gap-2", children: [
                /* @__PURE__ */ m.jsx(Ro, { htmlFor: "notes", children: "Notes" }),
                /* @__PURE__ */ m.jsx(
                  W0,
                  {
                    id: "notes",
                    value: h.notes,
                    onChange: (N) => p((j) => ({ ...j, notes: N.target.value })),
                    placeholder: "Add any additional notes..."
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ m.jsxs(gd, { children: [
              /* @__PURE__ */ m.jsx(
                gt,
                {
                  variant: "outline",
                  onClick: () => p((N) => ({ ...N, isOpen: !1 })),
                  children: "Cancel"
                }
              ),
              /* @__PURE__ */ m.jsx(gt, { onClick: E, children: "Add to HubSpot" })
            ] })
          ] })
        }
      )
    ] })
  ] });
}
export {
  lj as Counter,
  Tj as DealActions,
  hj as DealHeader,
  mj as DealProgress,
  Sj as DealQualification,
  xj as DealRisk,
  gj as DealStakeholders,
  cj as Toaster
};
//# sourceMappingURL=index.js.map
