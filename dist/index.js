import * as w from "react";
import z, { forwardRef as Sa, createElement as ra, useState as tn, useEffect as Wo, useLayoutEffect as Hm, createContext as Yi, useContext as zt, useId as XT, useCallback as zm, Component as ZT, useRef as Xs, useInsertionEffect as JT, useMemo as $o, Fragment as Gm } from "react";
import * as Ca from "react-dom";
import Km from "react-dom";
var bo = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function QT(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Lc = { exports: {} }, wo = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qh;
function eP() {
  if (qh)
    return wo;
  qh = 1;
  var e = z, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, s = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, c = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(u, d, f) {
    var m, v = {}, x = null, g = null;
    f !== void 0 && (x = "" + f), d.key !== void 0 && (x = "" + d.key), d.ref !== void 0 && (g = d.ref);
    for (m in d)
      o.call(d, m) && !c.hasOwnProperty(m) && (v[m] = d[m]);
    if (u && u.defaultProps)
      for (m in d = u.defaultProps, d)
        v[m] === void 0 && (v[m] = d[m]);
    return { $$typeof: t, type: u, key: x, ref: g, props: v, _owner: s.current };
  }
  return wo.Fragment = n, wo.jsx = l, wo.jsxs = l, wo;
}
var So = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xh;
function tP() {
  return Xh || (Xh = 1, process.env.NODE_ENV !== "production" && function() {
    var e = z, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), u = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), v = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), T = Symbol.iterator, S = "@@iterator";
    function P(R) {
      if (R === null || typeof R != "object")
        return null;
      var U = T && R[T] || R[S];
      return typeof U == "function" ? U : null;
    }
    var _ = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function E(R) {
      {
        for (var U = arguments.length, Y = new Array(U > 1 ? U - 1 : 0), de = 1; de < U; de++)
          Y[de - 1] = arguments[de];
        O("error", R, Y);
      }
    }
    function O(R, U, Y) {
      {
        var de = _.ReactDebugCurrentFrame, Ie = de.getStackAddendum();
        Ie !== "" && (U += "%s", Y = Y.concat([Ie]));
        var He = Y.map(function(Me) {
          return String(Me);
        });
        He.unshift("Warning: " + U), Function.prototype.apply.call(console[R], console, He);
      }
    }
    var N = !1, D = !1, W = !1, $ = !1, H = !1, te;
    te = Symbol.for("react.module.reference");
    function re(R) {
      return !!(typeof R == "string" || typeof R == "function" || R === o || R === c || H || R === s || R === f || R === m || $ || R === g || N || D || W || typeof R == "object" && R !== null && (R.$$typeof === x || R.$$typeof === v || R.$$typeof === l || R.$$typeof === u || R.$$typeof === d || // This needs to include all possible module reference object
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
        case f:
          return "Suspense";
        case m:
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
    var ne = Object.assign, Te = 0, ie, Z, q, G, pe, Ee, Pe;
    function ge() {
    }
    ge.__reactDisabledLog = !0;
    function Re() {
      {
        if (Te === 0) {
          ie = console.log, Z = console.info, q = console.warn, G = console.error, pe = console.group, Ee = console.groupCollapsed, Pe = console.groupEnd;
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
              value: Pe
            })
          });
        }
        Te < 0 && E("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var et = _.ReactCurrentDispatcher, X;
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
    var Le = !1, Se;
    {
      var ve = typeof WeakMap == "function" ? WeakMap : Map;
      Se = new ve();
    }
    function _e(R, U) {
      if (!R || Le)
        return "";
      {
        var Y = Se.get(R);
        if (Y !== void 0)
          return Y;
      }
      var de;
      Le = !0;
      var Ie = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var He;
      He = et.current, et.current = null, Re();
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
            } catch (_t) {
              de = _t;
            }
            Reflect.construct(R, [], Me);
          } else {
            try {
              Me.call();
            } catch (_t) {
              de = _t;
            }
            R.call(Me.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (_t) {
            de = _t;
          }
          R();
        }
      } catch (_t) {
        if (_t && de && typeof _t.stack == "string") {
          for (var Ae = _t.stack.split(`
`), yt = de.stack.split(`
`), rt = Ae.length - 1, st = yt.length - 1; rt >= 1 && st >= 0 && Ae[rt] !== yt[st]; )
            st--;
          for (; rt >= 1 && st >= 0; rt--, st--)
            if (Ae[rt] !== yt[st]) {
              if (rt !== 1 || st !== 1)
                do
                  if (rt--, st--, st < 0 || Ae[rt] !== yt[st]) {
                    var xt = `
` + Ae[rt].replace(" at new ", " at ");
                    return R.displayName && xt.includes("<anonymous>") && (xt = xt.replace("<anonymous>", R.displayName)), typeof R == "function" && Se.set(R, xt), xt;
                  }
                while (rt >= 1 && st >= 0);
              break;
            }
        }
      } finally {
        Le = !1, et.current = He, Be(), Error.prepareStackTrace = Ie;
      }
      var cr = R ? R.displayName || R.name : "", sn = cr ? be(cr) : "";
      return typeof R == "function" && Se.set(R, sn), sn;
    }
    function lt(R, U, Y) {
      return _e(R, !1);
    }
    function Ye(R) {
      var U = R.prototype;
      return !!(U && U.isReactComponent);
    }
    function ht(R, U, Y) {
      if (R == null)
        return "";
      if (typeof R == "function")
        return _e(R, Ye(R));
      if (typeof R == "string")
        return be(R);
      switch (R) {
        case f:
          return be("Suspense");
        case m:
          return be("SuspenseList");
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case d:
            return lt(R.render);
          case v:
            return ht(R.type, U, Y);
          case x: {
            var de = R, Ie = de._payload, He = de._init;
            try {
              return ht(He(Ie), U, Y);
            } catch {
            }
          }
        }
      return "";
    }
    var Mt = Object.prototype.hasOwnProperty, ct = {}, on = _.ReactDebugCurrentFrame;
    function Vt(R) {
      if (R) {
        var U = R._owner, Y = ht(R.type, R._source, U ? U.type : null);
        on.setExtraStackFrame(Y);
      } else
        on.setExtraStackFrame(null);
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
            } catch (rt) {
              Ae = rt;
            }
            Ae && !(Ae instanceof Error) && (Vt(Ie), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", de || "React class", Y, Me, typeof Ae), Vt(null)), Ae instanceof Error && !(Ae.message in ct) && (ct[Ae.message] = !0, Vt(Ie), E("Failed %s type: %s", Y, Ae.message), Vt(null));
          }
      }
    }
    var jt = Array.isArray;
    function vn(R) {
      return jt(R);
    }
    function pt(R) {
      {
        var U = typeof Symbol == "function" && Symbol.toStringTag, Y = U && R[Symbol.toStringTag] || R.constructor.name || "Object";
        return Y;
      }
    }
    function _n(R) {
      try {
        return An(R), !1;
      } catch {
        return !0;
      }
    }
    function An(R) {
      return "" + R;
    }
    function pi(R) {
      if (_n(R))
        return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", pt(R)), An(R);
    }
    var Tt = _.ReactCurrentOwner, En = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Rn, Gt, Nn;
    Nn = {};
    function Mn(R) {
      if (Mt.call(R, "ref")) {
        var U = Object.getOwnPropertyDescriptor(R, "ref").get;
        if (U && U.isReactWarning)
          return !1;
      }
      return R.ref !== void 0;
    }
    function $r(R) {
      if (Mt.call(R, "key")) {
        var U = Object.getOwnPropertyDescriptor(R, "key").get;
        if (U && U.isReactWarning)
          return !1;
      }
      return R.key !== void 0;
    }
    function Ur(R, U) {
      if (typeof R.ref == "string" && Tt.current && U && Tt.current.stateNode !== U) {
        var Y = se(Tt.current.type);
        Nn[Y] || (E('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', se(Tt.current.type), R.ref), Nn[Y] = !0);
      }
    }
    function sr(R, U) {
      {
        var Y = function() {
          Rn || (Rn = !0, E("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", U));
        };
        Y.isReactWarning = !0, Object.defineProperty(R, "key", {
          get: Y,
          configurable: !0
        });
      }
    }
    function ar(R, U) {
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
    var Hr = function(R, U, Y, de, Ie, He, Me) {
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
    function zr(R, U, Y, de, Ie) {
      {
        var He, Me = {}, Ae = null, yt = null;
        Y !== void 0 && (pi(Y), Ae = "" + Y), $r(U) && (pi(U.key), Ae = "" + U.key), Mn(U) && (yt = U.ref, Ur(U, Ie));
        for (He in U)
          Mt.call(U, He) && !En.hasOwnProperty(He) && (Me[He] = U[He]);
        if (R && R.defaultProps) {
          var rt = R.defaultProps;
          for (He in rt)
            Me[He] === void 0 && (Me[He] = rt[He]);
        }
        if (Ae || yt) {
          var st = typeof R == "function" ? R.displayName || R.name || "Unknown" : R;
          Ae && sr(Me, st), yt && ar(Me, st);
        }
        return Hr(R, Ae, yt, Ie, de, Tt.current, Me);
      }
    }
    var Ft = _.ReactCurrentOwner, mi = _.ReactDebugCurrentFrame;
    function oe(R) {
      if (R) {
        var U = R._owner, Y = ht(R.type, R._source, U ? U.type : null);
        mi.setExtraStackFrame(Y);
      } else
        mi.setExtraStackFrame(null);
    }
    var je;
    je = !1;
    function We(R) {
      return typeof R == "object" && R !== null && R.$$typeof === t;
    }
    function Pt() {
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
    var lr = {};
    function gi(R) {
      {
        var U = Pt();
        if (!U) {
          var Y = typeof R == "string" ? R : R.displayName || R.name;
          Y && (U = `

Check the top-level render call using <` + Y + ">.");
        }
        return U;
      }
    }
    function qo(R, U) {
      {
        if (!R._store || R._store.validated || R.key != null)
          return;
        R._store.validated = !0;
        var Y = gi(U);
        if (lr[Y])
          return;
        lr[Y] = !0;
        var de = "";
        R && R._owner && R._owner !== Ft.current && (de = " It was passed a child from " + se(R._owner.type) + "."), oe(R), E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', Y, de), oe(null);
      }
    }
    function Xo(R, U) {
      {
        if (typeof R != "object")
          return;
        if (vn(R))
          for (var Y = 0; Y < R.length; Y++) {
            var de = R[Y];
            We(de) && qo(de, U);
          }
        else if (We(R))
          R._store && (R._store.validated = !0);
        else if (R) {
          var Ie = P(R);
          if (typeof Ie == "function" && Ie !== R.entries)
            for (var He = Ie.call(R), Me; !(Me = He.next()).done; )
              We(Me.value) && qo(Me.value, U);
        }
      }
    }
    function Za(R) {
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
        } else if (U.PropTypes !== void 0 && !je) {
          je = !0;
          var Ie = se(U);
          E("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Ie || "Unknown");
        }
        typeof U.getDefaultProps == "function" && !U.getDefaultProps.isReactClassApproved && E("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function no(R) {
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
    var Zo = {};
    function vi(R, U, Y, de, Ie, He) {
      {
        var Me = re(R);
        if (!Me) {
          var Ae = "";
          (R === void 0 || typeof R == "object" && R !== null && Object.keys(R).length === 0) && (Ae += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var yt = Bt();
          yt ? Ae += yt : Ae += Pt();
          var rt;
          R === null ? rt = "null" : vn(R) ? rt = "array" : R !== void 0 && R.$$typeof === t ? (rt = "<" + (se(R.type) || "Unknown") + " />", Ae = " Did you accidentally export a JSX literal instead of a component?") : rt = typeof R, E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", rt, Ae);
        }
        var st = zr(R, U, Y, Ie, He);
        if (st == null)
          return st;
        if (Me) {
          var xt = U.children;
          if (xt !== void 0)
            if (de)
              if (vn(xt)) {
                for (var cr = 0; cr < xt.length; cr++)
                  Xo(xt[cr], R);
                Object.freeze && Object.freeze(xt);
              } else
                E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Xo(xt, R);
        }
        if (Mt.call(U, "key")) {
          var sn = se(R), _t = Object.keys(U).filter(function(Jo) {
            return Jo !== "key";
          }), ro = _t.length > 0 ? "{key: someKey, " + _t.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Zo[sn + ro]) {
            var nl = _t.length > 0 ? "{" + _t.join(": ..., ") + ": ...}" : "{}";
            E(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ro, sn, nl, sn), Zo[sn + ro] = !0;
          }
        }
        return R === o ? no(st) : Za(st), st;
      }
    }
    function Ja(R, U, Y) {
      return vi(R, U, Y, !0);
    }
    function Qa(R, U, Y) {
      return vi(R, U, Y, !1);
    }
    var el = Qa, tl = Ja;
    So.Fragment = o, So.jsx = el, So.jsxs = tl;
  }()), So;
}
process.env.NODE_ENV === "production" ? Lc.exports = eP() : Lc.exports = tP();
var p = Lc.exports, ia = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
ia.exports;
(function(e, t) {
  (function() {
    var n, o = "4.17.21", s = 200, c = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", l = "Expected a function", u = "Invalid `variable` option passed into `_.template`", d = "__lodash_hash_undefined__", f = 500, m = "__lodash_placeholder__", v = 1, x = 2, g = 4, T = 1, S = 2, P = 1, _ = 2, E = 4, O = 8, N = 16, D = 32, W = 64, $ = 128, H = 256, te = 512, re = 30, fe = "...", J = 800, se = 16, ne = 1, Te = 2, ie = 3, Z = 1 / 0, q = 9007199254740991, G = 17976931348623157e292, pe = NaN, Ee = 4294967295, Pe = Ee - 1, ge = Ee >>> 1, Re = [
      ["ary", $],
      ["bind", P],
      ["bindKey", _],
      ["curry", O],
      ["curryRight", N],
      ["flip", te],
      ["partial", D],
      ["partialRight", W],
      ["rearg", H]
    ], Be = "[object Arguments]", et = "[object Array]", X = "[object AsyncFunction]", be = "[object Boolean]", Le = "[object Date]", Se = "[object DOMException]", ve = "[object Error]", _e = "[object Function]", lt = "[object GeneratorFunction]", Ye = "[object Map]", ht = "[object Number]", Mt = "[object Null]", ct = "[object Object]", on = "[object Promise]", Vt = "[object Proxy]", Ot = "[object RegExp]", jt = "[object Set]", vn = "[object String]", pt = "[object Symbol]", _n = "[object Undefined]", An = "[object WeakMap]", pi = "[object WeakSet]", Tt = "[object ArrayBuffer]", En = "[object DataView]", Rn = "[object Float32Array]", Gt = "[object Float64Array]", Nn = "[object Int8Array]", Mn = "[object Int16Array]", $r = "[object Int32Array]", Ur = "[object Uint8Array]", sr = "[object Uint8ClampedArray]", ar = "[object Uint16Array]", Hr = "[object Uint32Array]", zr = /\b__p \+= '';/g, Ft = /\b(__p \+=) '' \+/g, mi = /(__e\(.*?\)|\b__t\)) \+\n'';/g, oe = /&(?:amp|lt|gt|quot|#39);/g, je = /[&<>"']/g, We = RegExp(oe.source), Pt = RegExp(je.source), Bt = /<%-([\s\S]+?)%>/g, lr = /<%([\s\S]+?)%>/g, gi = /<%=([\s\S]+?)%>/g, qo = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Xo = /^\w*$/, Za = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, no = /[\\^$.*+?()[\]{}|]/g, Zo = RegExp(no.source), vi = /^\s+/, Ja = /\s/, Qa = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, el = /\{\n\/\* \[wrapped with (.+)\] \*/, tl = /,? & /, R = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, U = /[()=,{}\[\]\/\s]/, Y = /\\(\\)?/g, de = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Ie = /\w*$/, He = /^[-+]0x[0-9a-f]+$/i, Me = /^0b[01]+$/i, Ae = /^\[object .+?Constructor\]$/, yt = /^0o[0-7]+$/i, rt = /^(?:0|[1-9]\d*)$/, st = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, xt = /($^)/, cr = /['\n\r\u2028\u2029\\]/g, sn = "\\ud800-\\udfff", _t = "\\u0300-\\u036f", ro = "\\ufe20-\\ufe2f", nl = "\\u20d0-\\u20ff", Jo = _t + ro + nl, Td = "\\u2700-\\u27bf", Pd = "a-z\\xdf-\\xf6\\xf8-\\xff", G0 = "\\xac\\xb1\\xd7\\xf7", K0 = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Y0 = "\\u2000-\\u206f", q0 = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", _d = "A-Z\\xc0-\\xd6\\xd8-\\xde", Ad = "\\ufe0e\\ufe0f", Ed = G0 + K0 + Y0 + q0, rl = "['’]", X0 = "[" + sn + "]", Rd = "[" + Ed + "]", Qo = "[" + Jo + "]", Nd = "\\d+", Z0 = "[" + Td + "]", Md = "[" + Pd + "]", Od = "[^" + sn + Ed + Nd + Td + Pd + _d + "]", il = "\\ud83c[\\udffb-\\udfff]", J0 = "(?:" + Qo + "|" + il + ")", jd = "[^" + sn + "]", ol = "(?:\\ud83c[\\udde6-\\uddff]){2}", sl = "[\\ud800-\\udbff][\\udc00-\\udfff]", yi = "[" + _d + "]", Dd = "\\u200d", Id = "(?:" + Md + "|" + Od + ")", Q0 = "(?:" + yi + "|" + Od + ")", kd = "(?:" + rl + "(?:d|ll|m|re|s|t|ve))?", Ld = "(?:" + rl + "(?:D|LL|M|RE|S|T|VE))?", Vd = J0 + "?", Fd = "[" + Ad + "]?", ex = "(?:" + Dd + "(?:" + [jd, ol, sl].join("|") + ")" + Fd + Vd + ")*", tx = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", nx = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Bd = Fd + Vd + ex, rx = "(?:" + [Z0, ol, sl].join("|") + ")" + Bd, ix = "(?:" + [jd + Qo + "?", Qo, ol, sl, X0].join("|") + ")", ox = RegExp(rl, "g"), sx = RegExp(Qo, "g"), al = RegExp(il + "(?=" + il + ")|" + ix + Bd, "g"), ax = RegExp([
      yi + "?" + Md + "+" + kd + "(?=" + [Rd, yi, "$"].join("|") + ")",
      Q0 + "+" + Ld + "(?=" + [Rd, yi + Id, "$"].join("|") + ")",
      yi + "?" + Id + "+" + kd,
      yi + "+" + Ld,
      nx,
      tx,
      Nd,
      rx
    ].join("|"), "g"), lx = RegExp("[" + Dd + sn + Jo + Ad + "]"), cx = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, ux = [
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
    ], dx = -1, Ze = {};
    Ze[Rn] = Ze[Gt] = Ze[Nn] = Ze[Mn] = Ze[$r] = Ze[Ur] = Ze[sr] = Ze[ar] = Ze[Hr] = !0, Ze[Be] = Ze[et] = Ze[Tt] = Ze[be] = Ze[En] = Ze[Le] = Ze[ve] = Ze[_e] = Ze[Ye] = Ze[ht] = Ze[ct] = Ze[Ot] = Ze[jt] = Ze[vn] = Ze[An] = !1;
    var qe = {};
    qe[Be] = qe[et] = qe[Tt] = qe[En] = qe[be] = qe[Le] = qe[Rn] = qe[Gt] = qe[Nn] = qe[Mn] = qe[$r] = qe[Ye] = qe[ht] = qe[ct] = qe[Ot] = qe[jt] = qe[vn] = qe[pt] = qe[Ur] = qe[sr] = qe[ar] = qe[Hr] = !0, qe[ve] = qe[_e] = qe[An] = !1;
    var fx = {
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
    }, hx = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, px = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, mx = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, gx = parseFloat, vx = parseInt, Wd = typeof bo == "object" && bo && bo.Object === Object && bo, yx = typeof self == "object" && self && self.Object === Object && self, bt = Wd || yx || Function("return this")(), ll = t && !t.nodeType && t, Gr = ll && !0 && e && !e.nodeType && e, $d = Gr && Gr.exports === ll, cl = $d && Wd.process, an = function() {
      try {
        var j = Gr && Gr.require && Gr.require("util").types;
        return j || cl && cl.binding && cl.binding("util");
      } catch {
      }
    }(), Ud = an && an.isArrayBuffer, Hd = an && an.isDate, zd = an && an.isMap, Gd = an && an.isRegExp, Kd = an && an.isSet, Yd = an && an.isTypedArray;
    function Kt(j, L, k) {
      switch (k.length) {
        case 0:
          return j.call(L);
        case 1:
          return j.call(L, k[0]);
        case 2:
          return j.call(L, k[0], k[1]);
        case 3:
          return j.call(L, k[0], k[1], k[2]);
      }
      return j.apply(L, k);
    }
    function xx(j, L, k, Q) {
      for (var he = -1, Fe = j == null ? 0 : j.length; ++he < Fe; ) {
        var mt = j[he];
        L(Q, mt, k(mt), j);
      }
      return Q;
    }
    function ln(j, L) {
      for (var k = -1, Q = j == null ? 0 : j.length; ++k < Q && L(j[k], k, j) !== !1; )
        ;
      return j;
    }
    function bx(j, L) {
      for (var k = j == null ? 0 : j.length; k-- && L(j[k], k, j) !== !1; )
        ;
      return j;
    }
    function qd(j, L) {
      for (var k = -1, Q = j == null ? 0 : j.length; ++k < Q; )
        if (!L(j[k], k, j))
          return !1;
      return !0;
    }
    function ur(j, L) {
      for (var k = -1, Q = j == null ? 0 : j.length, he = 0, Fe = []; ++k < Q; ) {
        var mt = j[k];
        L(mt, k, j) && (Fe[he++] = mt);
      }
      return Fe;
    }
    function es(j, L) {
      var k = j == null ? 0 : j.length;
      return !!k && xi(j, L, 0) > -1;
    }
    function ul(j, L, k) {
      for (var Q = -1, he = j == null ? 0 : j.length; ++Q < he; )
        if (k(L, j[Q]))
          return !0;
      return !1;
    }
    function tt(j, L) {
      for (var k = -1, Q = j == null ? 0 : j.length, he = Array(Q); ++k < Q; )
        he[k] = L(j[k], k, j);
      return he;
    }
    function dr(j, L) {
      for (var k = -1, Q = L.length, he = j.length; ++k < Q; )
        j[he + k] = L[k];
      return j;
    }
    function dl(j, L, k, Q) {
      var he = -1, Fe = j == null ? 0 : j.length;
      for (Q && Fe && (k = j[++he]); ++he < Fe; )
        k = L(k, j[he], he, j);
      return k;
    }
    function wx(j, L, k, Q) {
      var he = j == null ? 0 : j.length;
      for (Q && he && (k = j[--he]); he--; )
        k = L(k, j[he], he, j);
      return k;
    }
    function fl(j, L) {
      for (var k = -1, Q = j == null ? 0 : j.length; ++k < Q; )
        if (L(j[k], k, j))
          return !0;
      return !1;
    }
    var Sx = hl("length");
    function Cx(j) {
      return j.split("");
    }
    function Tx(j) {
      return j.match(R) || [];
    }
    function Xd(j, L, k) {
      var Q;
      return k(j, function(he, Fe, mt) {
        if (L(he, Fe, mt))
          return Q = Fe, !1;
      }), Q;
    }
    function ts(j, L, k, Q) {
      for (var he = j.length, Fe = k + (Q ? 1 : -1); Q ? Fe-- : ++Fe < he; )
        if (L(j[Fe], Fe, j))
          return Fe;
      return -1;
    }
    function xi(j, L, k) {
      return L === L ? kx(j, L, k) : ts(j, Zd, k);
    }
    function Px(j, L, k, Q) {
      for (var he = k - 1, Fe = j.length; ++he < Fe; )
        if (Q(j[he], L))
          return he;
      return -1;
    }
    function Zd(j) {
      return j !== j;
    }
    function Jd(j, L) {
      var k = j == null ? 0 : j.length;
      return k ? ml(j, L) / k : pe;
    }
    function hl(j) {
      return function(L) {
        return L == null ? n : L[j];
      };
    }
    function pl(j) {
      return function(L) {
        return j == null ? n : j[L];
      };
    }
    function Qd(j, L, k, Q, he) {
      return he(j, function(Fe, mt, Ke) {
        k = Q ? (Q = !1, Fe) : L(k, Fe, mt, Ke);
      }), k;
    }
    function _x(j, L) {
      var k = j.length;
      for (j.sort(L); k--; )
        j[k] = j[k].value;
      return j;
    }
    function ml(j, L) {
      for (var k, Q = -1, he = j.length; ++Q < he; ) {
        var Fe = L(j[Q]);
        Fe !== n && (k = k === n ? Fe : k + Fe);
      }
      return k;
    }
    function gl(j, L) {
      for (var k = -1, Q = Array(j); ++k < j; )
        Q[k] = L(k);
      return Q;
    }
    function Ax(j, L) {
      return tt(L, function(k) {
        return [k, j[k]];
      });
    }
    function ef(j) {
      return j && j.slice(0, of(j) + 1).replace(vi, "");
    }
    function Yt(j) {
      return function(L) {
        return j(L);
      };
    }
    function vl(j, L) {
      return tt(L, function(k) {
        return j[k];
      });
    }
    function io(j, L) {
      return j.has(L);
    }
    function tf(j, L) {
      for (var k = -1, Q = j.length; ++k < Q && xi(L, j[k], 0) > -1; )
        ;
      return k;
    }
    function nf(j, L) {
      for (var k = j.length; k-- && xi(L, j[k], 0) > -1; )
        ;
      return k;
    }
    function Ex(j, L) {
      for (var k = j.length, Q = 0; k--; )
        j[k] === L && ++Q;
      return Q;
    }
    var Rx = pl(fx), Nx = pl(hx);
    function Mx(j) {
      return "\\" + mx[j];
    }
    function Ox(j, L) {
      return j == null ? n : j[L];
    }
    function bi(j) {
      return lx.test(j);
    }
    function jx(j) {
      return cx.test(j);
    }
    function Dx(j) {
      for (var L, k = []; !(L = j.next()).done; )
        k.push(L.value);
      return k;
    }
    function yl(j) {
      var L = -1, k = Array(j.size);
      return j.forEach(function(Q, he) {
        k[++L] = [he, Q];
      }), k;
    }
    function rf(j, L) {
      return function(k) {
        return j(L(k));
      };
    }
    function fr(j, L) {
      for (var k = -1, Q = j.length, he = 0, Fe = []; ++k < Q; ) {
        var mt = j[k];
        (mt === L || mt === m) && (j[k] = m, Fe[he++] = k);
      }
      return Fe;
    }
    function ns(j) {
      var L = -1, k = Array(j.size);
      return j.forEach(function(Q) {
        k[++L] = Q;
      }), k;
    }
    function Ix(j) {
      var L = -1, k = Array(j.size);
      return j.forEach(function(Q) {
        k[++L] = [Q, Q];
      }), k;
    }
    function kx(j, L, k) {
      for (var Q = k - 1, he = j.length; ++Q < he; )
        if (j[Q] === L)
          return Q;
      return -1;
    }
    function Lx(j, L, k) {
      for (var Q = k + 1; Q--; )
        if (j[Q] === L)
          return Q;
      return Q;
    }
    function wi(j) {
      return bi(j) ? Fx(j) : Sx(j);
    }
    function yn(j) {
      return bi(j) ? Bx(j) : Cx(j);
    }
    function of(j) {
      for (var L = j.length; L-- && Ja.test(j.charAt(L)); )
        ;
      return L;
    }
    var Vx = pl(px);
    function Fx(j) {
      for (var L = al.lastIndex = 0; al.test(j); )
        ++L;
      return L;
    }
    function Bx(j) {
      return j.match(al) || [];
    }
    function Wx(j) {
      return j.match(ax) || [];
    }
    var $x = function j(L) {
      L = L == null ? bt : Si.defaults(bt.Object(), L, Si.pick(bt, ux));
      var k = L.Array, Q = L.Date, he = L.Error, Fe = L.Function, mt = L.Math, Ke = L.Object, xl = L.RegExp, Ux = L.String, cn = L.TypeError, rs = k.prototype, Hx = Fe.prototype, Ci = Ke.prototype, is = L["__core-js_shared__"], os = Hx.toString, ze = Ci.hasOwnProperty, zx = 0, sf = function() {
        var r = /[^.]+$/.exec(is && is.keys && is.keys.IE_PROTO || "");
        return r ? "Symbol(src)_1." + r : "";
      }(), ss = Ci.toString, Gx = os.call(Ke), Kx = bt._, Yx = xl(
        "^" + os.call(ze).replace(no, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), as = $d ? L.Buffer : n, hr = L.Symbol, ls = L.Uint8Array, af = as ? as.allocUnsafe : n, cs = rf(Ke.getPrototypeOf, Ke), lf = Ke.create, cf = Ci.propertyIsEnumerable, us = rs.splice, uf = hr ? hr.isConcatSpreadable : n, oo = hr ? hr.iterator : n, Kr = hr ? hr.toStringTag : n, ds = function() {
        try {
          var r = Jr(Ke, "defineProperty");
          return r({}, "", {}), r;
        } catch {
        }
      }(), qx = L.clearTimeout !== bt.clearTimeout && L.clearTimeout, Xx = Q && Q.now !== bt.Date.now && Q.now, Zx = L.setTimeout !== bt.setTimeout && L.setTimeout, fs = mt.ceil, hs = mt.floor, bl = Ke.getOwnPropertySymbols, Jx = as ? as.isBuffer : n, df = L.isFinite, Qx = rs.join, eb = rf(Ke.keys, Ke), gt = mt.max, At = mt.min, tb = Q.now, nb = L.parseInt, ff = mt.random, rb = rs.reverse, wl = Jr(L, "DataView"), so = Jr(L, "Map"), Sl = Jr(L, "Promise"), Ti = Jr(L, "Set"), ao = Jr(L, "WeakMap"), lo = Jr(Ke, "create"), ps = ao && new ao(), Pi = {}, ib = Qr(wl), ob = Qr(so), sb = Qr(Sl), ab = Qr(Ti), lb = Qr(ao), ms = hr ? hr.prototype : n, co = ms ? ms.valueOf : n, hf = ms ? ms.toString : n;
      function b(r) {
        if (at(r) && !me(r) && !(r instanceof Oe)) {
          if (r instanceof un)
            return r;
          if (ze.call(r, "__wrapped__"))
            return ph(r);
        }
        return new un(r);
      }
      var _i = /* @__PURE__ */ function() {
        function r() {
        }
        return function(i) {
          if (!it(i))
            return {};
          if (lf)
            return lf(i);
          r.prototype = i;
          var a = new r();
          return r.prototype = n, a;
        };
      }();
      function gs() {
      }
      function un(r, i) {
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
        evaluate: lr,
        /**
         * Used to detect `data` property values to inject.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        interpolate: gi,
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
      }, b.prototype = gs.prototype, b.prototype.constructor = b, un.prototype = _i(gs.prototype), un.prototype.constructor = un;
      function Oe(r) {
        this.__wrapped__ = r, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Ee, this.__views__ = [];
      }
      function cb() {
        var r = new Oe(this.__wrapped__);
        return r.__actions__ = Wt(this.__actions__), r.__dir__ = this.__dir__, r.__filtered__ = this.__filtered__, r.__iteratees__ = Wt(this.__iteratees__), r.__takeCount__ = this.__takeCount__, r.__views__ = Wt(this.__views__), r;
      }
      function ub() {
        if (this.__filtered__) {
          var r = new Oe(this);
          r.__dir__ = -1, r.__filtered__ = !0;
        } else
          r = this.clone(), r.__dir__ *= -1;
        return r;
      }
      function db() {
        var r = this.__wrapped__.value(), i = this.__dir__, a = me(r), h = i < 0, y = a ? r.length : 0, C = Cw(0, y, this.__views__), A = C.start, M = C.end, I = M - A, V = h ? M : A - 1, F = this.__iteratees__, B = F.length, K = 0, ee = At(I, this.__takeCount__);
        if (!a || !h && y == I && ee == I)
          return Lf(r, this.__actions__);
        var le = [];
        e:
          for (; I-- && K < ee; ) {
            V += i;
            for (var we = -1, ce = r[V]; ++we < B; ) {
              var Ne = F[we], De = Ne.iteratee, Zt = Ne.type, kt = De(ce);
              if (Zt == Te)
                ce = kt;
              else if (!kt) {
                if (Zt == ne)
                  continue e;
                break e;
              }
            }
            le[K++] = ce;
          }
        return le;
      }
      Oe.prototype = _i(gs.prototype), Oe.prototype.constructor = Oe;
      function Yr(r) {
        var i = -1, a = r == null ? 0 : r.length;
        for (this.clear(); ++i < a; ) {
          var h = r[i];
          this.set(h[0], h[1]);
        }
      }
      function fb() {
        this.__data__ = lo ? lo(null) : {}, this.size = 0;
      }
      function hb(r) {
        var i = this.has(r) && delete this.__data__[r];
        return this.size -= i ? 1 : 0, i;
      }
      function pb(r) {
        var i = this.__data__;
        if (lo) {
          var a = i[r];
          return a === d ? n : a;
        }
        return ze.call(i, r) ? i[r] : n;
      }
      function mb(r) {
        var i = this.__data__;
        return lo ? i[r] !== n : ze.call(i, r);
      }
      function gb(r, i) {
        var a = this.__data__;
        return this.size += this.has(r) ? 0 : 1, a[r] = lo && i === n ? d : i, this;
      }
      Yr.prototype.clear = fb, Yr.prototype.delete = hb, Yr.prototype.get = pb, Yr.prototype.has = mb, Yr.prototype.set = gb;
      function Wn(r) {
        var i = -1, a = r == null ? 0 : r.length;
        for (this.clear(); ++i < a; ) {
          var h = r[i];
          this.set(h[0], h[1]);
        }
      }
      function vb() {
        this.__data__ = [], this.size = 0;
      }
      function yb(r) {
        var i = this.__data__, a = vs(i, r);
        if (a < 0)
          return !1;
        var h = i.length - 1;
        return a == h ? i.pop() : us.call(i, a, 1), --this.size, !0;
      }
      function xb(r) {
        var i = this.__data__, a = vs(i, r);
        return a < 0 ? n : i[a][1];
      }
      function bb(r) {
        return vs(this.__data__, r) > -1;
      }
      function wb(r, i) {
        var a = this.__data__, h = vs(a, r);
        return h < 0 ? (++this.size, a.push([r, i])) : a[h][1] = i, this;
      }
      Wn.prototype.clear = vb, Wn.prototype.delete = yb, Wn.prototype.get = xb, Wn.prototype.has = bb, Wn.prototype.set = wb;
      function $n(r) {
        var i = -1, a = r == null ? 0 : r.length;
        for (this.clear(); ++i < a; ) {
          var h = r[i];
          this.set(h[0], h[1]);
        }
      }
      function Sb() {
        this.size = 0, this.__data__ = {
          hash: new Yr(),
          map: new (so || Wn)(),
          string: new Yr()
        };
      }
      function Cb(r) {
        var i = Rs(this, r).delete(r);
        return this.size -= i ? 1 : 0, i;
      }
      function Tb(r) {
        return Rs(this, r).get(r);
      }
      function Pb(r) {
        return Rs(this, r).has(r);
      }
      function _b(r, i) {
        var a = Rs(this, r), h = a.size;
        return a.set(r, i), this.size += a.size == h ? 0 : 1, this;
      }
      $n.prototype.clear = Sb, $n.prototype.delete = Cb, $n.prototype.get = Tb, $n.prototype.has = Pb, $n.prototype.set = _b;
      function qr(r) {
        var i = -1, a = r == null ? 0 : r.length;
        for (this.__data__ = new $n(); ++i < a; )
          this.add(r[i]);
      }
      function Ab(r) {
        return this.__data__.set(r, d), this;
      }
      function Eb(r) {
        return this.__data__.has(r);
      }
      qr.prototype.add = qr.prototype.push = Ab, qr.prototype.has = Eb;
      function xn(r) {
        var i = this.__data__ = new Wn(r);
        this.size = i.size;
      }
      function Rb() {
        this.__data__ = new Wn(), this.size = 0;
      }
      function Nb(r) {
        var i = this.__data__, a = i.delete(r);
        return this.size = i.size, a;
      }
      function Mb(r) {
        return this.__data__.get(r);
      }
      function Ob(r) {
        return this.__data__.has(r);
      }
      function jb(r, i) {
        var a = this.__data__;
        if (a instanceof Wn) {
          var h = a.__data__;
          if (!so || h.length < s - 1)
            return h.push([r, i]), this.size = ++a.size, this;
          a = this.__data__ = new $n(h);
        }
        return a.set(r, i), this.size = a.size, this;
      }
      xn.prototype.clear = Rb, xn.prototype.delete = Nb, xn.prototype.get = Mb, xn.prototype.has = Ob, xn.prototype.set = jb;
      function pf(r, i) {
        var a = me(r), h = !a && ei(r), y = !a && !h && yr(r), C = !a && !h && !y && Ni(r), A = a || h || y || C, M = A ? gl(r.length, Ux) : [], I = M.length;
        for (var V in r)
          (i || ze.call(r, V)) && !(A && // Safari 9 has enumerable `arguments.length` in strict mode.
          (V == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          y && (V == "offset" || V == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          C && (V == "buffer" || V == "byteLength" || V == "byteOffset") || // Skip index properties.
          Gn(V, I))) && M.push(V);
        return M;
      }
      function mf(r) {
        var i = r.length;
        return i ? r[jl(0, i - 1)] : n;
      }
      function Db(r, i) {
        return Ns(Wt(r), Xr(i, 0, r.length));
      }
      function Ib(r) {
        return Ns(Wt(r));
      }
      function Cl(r, i, a) {
        (a !== n && !bn(r[i], a) || a === n && !(i in r)) && Un(r, i, a);
      }
      function uo(r, i, a) {
        var h = r[i];
        (!(ze.call(r, i) && bn(h, a)) || a === n && !(i in r)) && Un(r, i, a);
      }
      function vs(r, i) {
        for (var a = r.length; a--; )
          if (bn(r[a][0], i))
            return a;
        return -1;
      }
      function kb(r, i, a, h) {
        return pr(r, function(y, C, A) {
          i(h, y, a(y), A);
        }), h;
      }
      function gf(r, i) {
        return r && jn(i, vt(i), r);
      }
      function Lb(r, i) {
        return r && jn(i, Ut(i), r);
      }
      function Un(r, i, a) {
        i == "__proto__" && ds ? ds(r, i, {
          configurable: !0,
          enumerable: !0,
          value: a,
          writable: !0
        }) : r[i] = a;
      }
      function Tl(r, i) {
        for (var a = -1, h = i.length, y = k(h), C = r == null; ++a < h; )
          y[a] = C ? n : ic(r, i[a]);
        return y;
      }
      function Xr(r, i, a) {
        return r === r && (a !== n && (r = r <= a ? r : a), i !== n && (r = r >= i ? r : i)), r;
      }
      function dn(r, i, a, h, y, C) {
        var A, M = i & v, I = i & x, V = i & g;
        if (a && (A = y ? a(r, h, y, C) : a(r)), A !== n)
          return A;
        if (!it(r))
          return r;
        var F = me(r);
        if (F) {
          if (A = Pw(r), !M)
            return Wt(r, A);
        } else {
          var B = Et(r), K = B == _e || B == lt;
          if (yr(r))
            return Bf(r, M);
          if (B == ct || B == Be || K && !y) {
            if (A = I || K ? {} : oh(r), !M)
              return I ? pw(r, Lb(A, r)) : hw(r, gf(A, r));
          } else {
            if (!qe[B])
              return y ? r : {};
            A = _w(r, B, M);
          }
        }
        C || (C = new xn());
        var ee = C.get(r);
        if (ee)
          return ee;
        C.set(r, A), Dh(r) ? r.forEach(function(ce) {
          A.add(dn(ce, i, a, ce, r, C));
        }) : Oh(r) && r.forEach(function(ce, Ne) {
          A.set(Ne, dn(ce, i, a, Ne, r, C));
        });
        var le = V ? I ? Hl : Ul : I ? Ut : vt, we = F ? n : le(r);
        return ln(we || r, function(ce, Ne) {
          we && (Ne = ce, ce = r[Ne]), uo(A, Ne, dn(ce, i, a, Ne, r, C));
        }), A;
      }
      function Vb(r) {
        var i = vt(r);
        return function(a) {
          return vf(a, r, i);
        };
      }
      function vf(r, i, a) {
        var h = a.length;
        if (r == null)
          return !h;
        for (r = Ke(r); h--; ) {
          var y = a[h], C = i[y], A = r[y];
          if (A === n && !(y in r) || !C(A))
            return !1;
        }
        return !0;
      }
      function yf(r, i, a) {
        if (typeof r != "function")
          throw new cn(l);
        return yo(function() {
          r.apply(n, a);
        }, i);
      }
      function fo(r, i, a, h) {
        var y = -1, C = es, A = !0, M = r.length, I = [], V = i.length;
        if (!M)
          return I;
        a && (i = tt(i, Yt(a))), h ? (C = ul, A = !1) : i.length >= s && (C = io, A = !1, i = new qr(i));
        e:
          for (; ++y < M; ) {
            var F = r[y], B = a == null ? F : a(F);
            if (F = h || F !== 0 ? F : 0, A && B === B) {
              for (var K = V; K--; )
                if (i[K] === B)
                  continue e;
              I.push(F);
            } else
              C(i, B, h) || I.push(F);
          }
        return I;
      }
      var pr = zf(On), xf = zf(_l, !0);
      function Fb(r, i) {
        var a = !0;
        return pr(r, function(h, y, C) {
          return a = !!i(h, y, C), a;
        }), a;
      }
      function ys(r, i, a) {
        for (var h = -1, y = r.length; ++h < y; ) {
          var C = r[h], A = i(C);
          if (A != null && (M === n ? A === A && !Xt(A) : a(A, M)))
            var M = A, I = C;
        }
        return I;
      }
      function Bb(r, i, a, h) {
        var y = r.length;
        for (a = ye(a), a < 0 && (a = -a > y ? 0 : y + a), h = h === n || h > y ? y : ye(h), h < 0 && (h += y), h = a > h ? 0 : kh(h); a < h; )
          r[a++] = i;
        return r;
      }
      function bf(r, i) {
        var a = [];
        return pr(r, function(h, y, C) {
          i(h, y, C) && a.push(h);
        }), a;
      }
      function wt(r, i, a, h, y) {
        var C = -1, A = r.length;
        for (a || (a = Ew), y || (y = []); ++C < A; ) {
          var M = r[C];
          i > 0 && a(M) ? i > 1 ? wt(M, i - 1, a, h, y) : dr(y, M) : h || (y[y.length] = M);
        }
        return y;
      }
      var Pl = Gf(), wf = Gf(!0);
      function On(r, i) {
        return r && Pl(r, i, vt);
      }
      function _l(r, i) {
        return r && wf(r, i, vt);
      }
      function xs(r, i) {
        return ur(i, function(a) {
          return Kn(r[a]);
        });
      }
      function Zr(r, i) {
        i = gr(i, r);
        for (var a = 0, h = i.length; r != null && a < h; )
          r = r[Dn(i[a++])];
        return a && a == h ? r : n;
      }
      function Sf(r, i, a) {
        var h = i(r);
        return me(r) ? h : dr(h, a(r));
      }
      function Dt(r) {
        return r == null ? r === n ? _n : Mt : Kr && Kr in Ke(r) ? Sw(r) : Iw(r);
      }
      function Al(r, i) {
        return r > i;
      }
      function Wb(r, i) {
        return r != null && ze.call(r, i);
      }
      function $b(r, i) {
        return r != null && i in Ke(r);
      }
      function Ub(r, i, a) {
        return r >= At(i, a) && r < gt(i, a);
      }
      function El(r, i, a) {
        for (var h = a ? ul : es, y = r[0].length, C = r.length, A = C, M = k(C), I = 1 / 0, V = []; A--; ) {
          var F = r[A];
          A && i && (F = tt(F, Yt(i))), I = At(F.length, I), M[A] = !a && (i || y >= 120 && F.length >= 120) ? new qr(A && F) : n;
        }
        F = r[0];
        var B = -1, K = M[0];
        e:
          for (; ++B < y && V.length < I; ) {
            var ee = F[B], le = i ? i(ee) : ee;
            if (ee = a || ee !== 0 ? ee : 0, !(K ? io(K, le) : h(V, le, a))) {
              for (A = C; --A; ) {
                var we = M[A];
                if (!(we ? io(we, le) : h(r[A], le, a)))
                  continue e;
              }
              K && K.push(le), V.push(ee);
            }
          }
        return V;
      }
      function Hb(r, i, a, h) {
        return On(r, function(y, C, A) {
          i(h, a(y), C, A);
        }), h;
      }
      function ho(r, i, a) {
        i = gr(i, r), r = ch(r, i);
        var h = r == null ? r : r[Dn(hn(i))];
        return h == null ? n : Kt(h, r, a);
      }
      function Cf(r) {
        return at(r) && Dt(r) == Be;
      }
      function zb(r) {
        return at(r) && Dt(r) == Tt;
      }
      function Gb(r) {
        return at(r) && Dt(r) == Le;
      }
      function po(r, i, a, h, y) {
        return r === i ? !0 : r == null || i == null || !at(r) && !at(i) ? r !== r && i !== i : Kb(r, i, a, h, po, y);
      }
      function Kb(r, i, a, h, y, C) {
        var A = me(r), M = me(i), I = A ? et : Et(r), V = M ? et : Et(i);
        I = I == Be ? ct : I, V = V == Be ? ct : V;
        var F = I == ct, B = V == ct, K = I == V;
        if (K && yr(r)) {
          if (!yr(i))
            return !1;
          A = !0, F = !1;
        }
        if (K && !F)
          return C || (C = new xn()), A || Ni(r) ? nh(r, i, a, h, y, C) : bw(r, i, I, a, h, y, C);
        if (!(a & T)) {
          var ee = F && ze.call(r, "__wrapped__"), le = B && ze.call(i, "__wrapped__");
          if (ee || le) {
            var we = ee ? r.value() : r, ce = le ? i.value() : i;
            return C || (C = new xn()), y(we, ce, a, h, C);
          }
        }
        return K ? (C || (C = new xn()), ww(r, i, a, h, y, C)) : !1;
      }
      function Yb(r) {
        return at(r) && Et(r) == Ye;
      }
      function Rl(r, i, a, h) {
        var y = a.length, C = y, A = !h;
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
            var B = new xn();
            if (h)
              var K = h(V, F, I, r, i, B);
            if (!(K === n ? po(F, V, T | S, h, B) : K))
              return !1;
          }
        }
        return !0;
      }
      function Tf(r) {
        if (!it(r) || Nw(r))
          return !1;
        var i = Kn(r) ? Yx : Ae;
        return i.test(Qr(r));
      }
      function qb(r) {
        return at(r) && Dt(r) == Ot;
      }
      function Xb(r) {
        return at(r) && Et(r) == jt;
      }
      function Zb(r) {
        return at(r) && ks(r.length) && !!Ze[Dt(r)];
      }
      function Pf(r) {
        return typeof r == "function" ? r : r == null ? Ht : typeof r == "object" ? me(r) ? Ef(r[0], r[1]) : Af(r) : Kh(r);
      }
      function Nl(r) {
        if (!vo(r))
          return eb(r);
        var i = [];
        for (var a in Ke(r))
          ze.call(r, a) && a != "constructor" && i.push(a);
        return i;
      }
      function Jb(r) {
        if (!it(r))
          return Dw(r);
        var i = vo(r), a = [];
        for (var h in r)
          h == "constructor" && (i || !ze.call(r, h)) || a.push(h);
        return a;
      }
      function Ml(r, i) {
        return r < i;
      }
      function _f(r, i) {
        var a = -1, h = $t(r) ? k(r.length) : [];
        return pr(r, function(y, C, A) {
          h[++a] = i(y, C, A);
        }), h;
      }
      function Af(r) {
        var i = Gl(r);
        return i.length == 1 && i[0][2] ? ah(i[0][0], i[0][1]) : function(a) {
          return a === r || Rl(a, r, i);
        };
      }
      function Ef(r, i) {
        return Yl(r) && sh(i) ? ah(Dn(r), i) : function(a) {
          var h = ic(a, r);
          return h === n && h === i ? oc(a, r) : po(i, h, T | S);
        };
      }
      function bs(r, i, a, h, y) {
        r !== i && Pl(i, function(C, A) {
          if (y || (y = new xn()), it(C))
            Qb(r, i, A, a, bs, h, y);
          else {
            var M = h ? h(Xl(r, A), C, A + "", r, i, y) : n;
            M === n && (M = C), Cl(r, A, M);
          }
        }, Ut);
      }
      function Qb(r, i, a, h, y, C, A) {
        var M = Xl(r, a), I = Xl(i, a), V = A.get(I);
        if (V) {
          Cl(r, a, V);
          return;
        }
        var F = C ? C(M, I, a + "", r, i, A) : n, B = F === n;
        if (B) {
          var K = me(I), ee = !K && yr(I), le = !K && !ee && Ni(I);
          F = I, K || ee || le ? me(M) ? F = M : ut(M) ? F = Wt(M) : ee ? (B = !1, F = Bf(I, !0)) : le ? (B = !1, F = Wf(I, !0)) : F = [] : xo(I) || ei(I) ? (F = M, ei(M) ? F = Lh(M) : (!it(M) || Kn(M)) && (F = oh(I))) : B = !1;
        }
        B && (A.set(I, F), y(F, I, h, C, A), A.delete(I)), Cl(r, a, F);
      }
      function Rf(r, i) {
        var a = r.length;
        if (a)
          return i += i < 0 ? a : 0, Gn(i, a) ? r[i] : n;
      }
      function Nf(r, i, a) {
        i.length ? i = tt(i, function(C) {
          return me(C) ? function(A) {
            return Zr(A, C.length === 1 ? C[0] : C);
          } : C;
        }) : i = [Ht];
        var h = -1;
        i = tt(i, Yt(ae()));
        var y = _f(r, function(C, A, M) {
          var I = tt(i, function(V) {
            return V(C);
          });
          return { criteria: I, index: ++h, value: C };
        });
        return _x(y, function(C, A) {
          return fw(C, A, a);
        });
      }
      function ew(r, i) {
        return Mf(r, i, function(a, h) {
          return oc(r, h);
        });
      }
      function Mf(r, i, a) {
        for (var h = -1, y = i.length, C = {}; ++h < y; ) {
          var A = i[h], M = Zr(r, A);
          a(M, A) && mo(C, gr(A, r), M);
        }
        return C;
      }
      function tw(r) {
        return function(i) {
          return Zr(i, r);
        };
      }
      function Ol(r, i, a, h) {
        var y = h ? Px : xi, C = -1, A = i.length, M = r;
        for (r === i && (i = Wt(i)), a && (M = tt(r, Yt(a))); ++C < A; )
          for (var I = 0, V = i[C], F = a ? a(V) : V; (I = y(M, F, I, h)) > -1; )
            M !== r && us.call(M, I, 1), us.call(r, I, 1);
        return r;
      }
      function Of(r, i) {
        for (var a = r ? i.length : 0, h = a - 1; a--; ) {
          var y = i[a];
          if (a == h || y !== C) {
            var C = y;
            Gn(y) ? us.call(r, y, 1) : kl(r, y);
          }
        }
        return r;
      }
      function jl(r, i) {
        return r + hs(ff() * (i - r + 1));
      }
      function nw(r, i, a, h) {
        for (var y = -1, C = gt(fs((i - r) / (a || 1)), 0), A = k(C); C--; )
          A[h ? C : ++y] = r, r += a;
        return A;
      }
      function Dl(r, i) {
        var a = "";
        if (!r || i < 1 || i > q)
          return a;
        do
          i % 2 && (a += r), i = hs(i / 2), i && (r += r);
        while (i);
        return a;
      }
      function Ce(r, i) {
        return Zl(lh(r, i, Ht), r + "");
      }
      function rw(r) {
        return mf(Mi(r));
      }
      function iw(r, i) {
        var a = Mi(r);
        return Ns(a, Xr(i, 0, a.length));
      }
      function mo(r, i, a, h) {
        if (!it(r))
          return r;
        i = gr(i, r);
        for (var y = -1, C = i.length, A = C - 1, M = r; M != null && ++y < C; ) {
          var I = Dn(i[y]), V = a;
          if (I === "__proto__" || I === "constructor" || I === "prototype")
            return r;
          if (y != A) {
            var F = M[I];
            V = h ? h(F, I, M) : n, V === n && (V = it(F) ? F : Gn(i[y + 1]) ? [] : {});
          }
          uo(M, I, V), M = M[I];
        }
        return r;
      }
      var jf = ps ? function(r, i) {
        return ps.set(r, i), r;
      } : Ht, ow = ds ? function(r, i) {
        return ds(r, "toString", {
          configurable: !0,
          enumerable: !1,
          value: ac(i),
          writable: !0
        });
      } : Ht;
      function sw(r) {
        return Ns(Mi(r));
      }
      function fn(r, i, a) {
        var h = -1, y = r.length;
        i < 0 && (i = -i > y ? 0 : y + i), a = a > y ? y : a, a < 0 && (a += y), y = i > a ? 0 : a - i >>> 0, i >>>= 0;
        for (var C = k(y); ++h < y; )
          C[h] = r[h + i];
        return C;
      }
      function aw(r, i) {
        var a;
        return pr(r, function(h, y, C) {
          return a = i(h, y, C), !a;
        }), !!a;
      }
      function ws(r, i, a) {
        var h = 0, y = r == null ? h : r.length;
        if (typeof i == "number" && i === i && y <= ge) {
          for (; h < y; ) {
            var C = h + y >>> 1, A = r[C];
            A !== null && !Xt(A) && (a ? A <= i : A < i) ? h = C + 1 : y = C;
          }
          return y;
        }
        return Il(r, i, Ht, a);
      }
      function Il(r, i, a, h) {
        var y = 0, C = r == null ? 0 : r.length;
        if (C === 0)
          return 0;
        i = a(i);
        for (var A = i !== i, M = i === null, I = Xt(i), V = i === n; y < C; ) {
          var F = hs((y + C) / 2), B = a(r[F]), K = B !== n, ee = B === null, le = B === B, we = Xt(B);
          if (A)
            var ce = h || le;
          else
            V ? ce = le && (h || K) : M ? ce = le && K && (h || !ee) : I ? ce = le && K && !ee && (h || !we) : ee || we ? ce = !1 : ce = h ? B <= i : B < i;
          ce ? y = F + 1 : C = F;
        }
        return At(C, Pe);
      }
      function Df(r, i) {
        for (var a = -1, h = r.length, y = 0, C = []; ++a < h; ) {
          var A = r[a], M = i ? i(A) : A;
          if (!a || !bn(M, I)) {
            var I = M;
            C[y++] = A === 0 ? 0 : A;
          }
        }
        return C;
      }
      function If(r) {
        return typeof r == "number" ? r : Xt(r) ? pe : +r;
      }
      function qt(r) {
        if (typeof r == "string")
          return r;
        if (me(r))
          return tt(r, qt) + "";
        if (Xt(r))
          return hf ? hf.call(r) : "";
        var i = r + "";
        return i == "0" && 1 / r == -Z ? "-0" : i;
      }
      function mr(r, i, a) {
        var h = -1, y = es, C = r.length, A = !0, M = [], I = M;
        if (a)
          A = !1, y = ul;
        else if (C >= s) {
          var V = i ? null : yw(r);
          if (V)
            return ns(V);
          A = !1, y = io, I = new qr();
        } else
          I = i ? [] : M;
        e:
          for (; ++h < C; ) {
            var F = r[h], B = i ? i(F) : F;
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
      function kl(r, i) {
        return i = gr(i, r), r = ch(r, i), r == null || delete r[Dn(hn(i))];
      }
      function kf(r, i, a, h) {
        return mo(r, i, a(Zr(r, i)), h);
      }
      function Ss(r, i, a, h) {
        for (var y = r.length, C = h ? y : -1; (h ? C-- : ++C < y) && i(r[C], C, r); )
          ;
        return a ? fn(r, h ? 0 : C, h ? C + 1 : y) : fn(r, h ? C + 1 : 0, h ? y : C);
      }
      function Lf(r, i) {
        var a = r;
        return a instanceof Oe && (a = a.value()), dl(i, function(h, y) {
          return y.func.apply(y.thisArg, dr([h], y.args));
        }, a);
      }
      function Ll(r, i, a) {
        var h = r.length;
        if (h < 2)
          return h ? mr(r[0]) : [];
        for (var y = -1, C = k(h); ++y < h; )
          for (var A = r[y], M = -1; ++M < h; )
            M != y && (C[y] = fo(C[y] || A, r[M], i, a));
        return mr(wt(C, 1), i, a);
      }
      function Vf(r, i, a) {
        for (var h = -1, y = r.length, C = i.length, A = {}; ++h < y; ) {
          var M = h < C ? i[h] : n;
          a(A, r[h], M);
        }
        return A;
      }
      function Vl(r) {
        return ut(r) ? r : [];
      }
      function Fl(r) {
        return typeof r == "function" ? r : Ht;
      }
      function gr(r, i) {
        return me(r) ? r : Yl(r, i) ? [r] : hh($e(r));
      }
      var lw = Ce;
      function vr(r, i, a) {
        var h = r.length;
        return a = a === n ? h : a, !i && a >= h ? r : fn(r, i, a);
      }
      var Ff = qx || function(r) {
        return bt.clearTimeout(r);
      };
      function Bf(r, i) {
        if (i)
          return r.slice();
        var a = r.length, h = af ? af(a) : new r.constructor(a);
        return r.copy(h), h;
      }
      function Bl(r) {
        var i = new r.constructor(r.byteLength);
        return new ls(i).set(new ls(r)), i;
      }
      function cw(r, i) {
        var a = i ? Bl(r.buffer) : r.buffer;
        return new r.constructor(a, r.byteOffset, r.byteLength);
      }
      function uw(r) {
        var i = new r.constructor(r.source, Ie.exec(r));
        return i.lastIndex = r.lastIndex, i;
      }
      function dw(r) {
        return co ? Ke(co.call(r)) : {};
      }
      function Wf(r, i) {
        var a = i ? Bl(r.buffer) : r.buffer;
        return new r.constructor(a, r.byteOffset, r.length);
      }
      function $f(r, i) {
        if (r !== i) {
          var a = r !== n, h = r === null, y = r === r, C = Xt(r), A = i !== n, M = i === null, I = i === i, V = Xt(i);
          if (!M && !V && !C && r > i || C && A && I && !M && !V || h && A && I || !a && I || !y)
            return 1;
          if (!h && !C && !V && r < i || V && a && y && !h && !C || M && a && y || !A && y || !I)
            return -1;
        }
        return 0;
      }
      function fw(r, i, a) {
        for (var h = -1, y = r.criteria, C = i.criteria, A = y.length, M = a.length; ++h < A; ) {
          var I = $f(y[h], C[h]);
          if (I) {
            if (h >= M)
              return I;
            var V = a[h];
            return I * (V == "desc" ? -1 : 1);
          }
        }
        return r.index - i.index;
      }
      function Uf(r, i, a, h) {
        for (var y = -1, C = r.length, A = a.length, M = -1, I = i.length, V = gt(C - A, 0), F = k(I + V), B = !h; ++M < I; )
          F[M] = i[M];
        for (; ++y < A; )
          (B || y < C) && (F[a[y]] = r[y]);
        for (; V--; )
          F[M++] = r[y++];
        return F;
      }
      function Hf(r, i, a, h) {
        for (var y = -1, C = r.length, A = -1, M = a.length, I = -1, V = i.length, F = gt(C - M, 0), B = k(F + V), K = !h; ++y < F; )
          B[y] = r[y];
        for (var ee = y; ++I < V; )
          B[ee + I] = i[I];
        for (; ++A < M; )
          (K || y < C) && (B[ee + a[A]] = r[y++]);
        return B;
      }
      function Wt(r, i) {
        var a = -1, h = r.length;
        for (i || (i = k(h)); ++a < h; )
          i[a] = r[a];
        return i;
      }
      function jn(r, i, a, h) {
        var y = !a;
        a || (a = {});
        for (var C = -1, A = i.length; ++C < A; ) {
          var M = i[C], I = h ? h(a[M], r[M], M, a, r) : n;
          I === n && (I = r[M]), y ? Un(a, M, I) : uo(a, M, I);
        }
        return a;
      }
      function hw(r, i) {
        return jn(r, Kl(r), i);
      }
      function pw(r, i) {
        return jn(r, rh(r), i);
      }
      function Cs(r, i) {
        return function(a, h) {
          var y = me(a) ? xx : kb, C = i ? i() : {};
          return y(a, r, ae(h, 2), C);
        };
      }
      function Ai(r) {
        return Ce(function(i, a) {
          var h = -1, y = a.length, C = y > 1 ? a[y - 1] : n, A = y > 2 ? a[2] : n;
          for (C = r.length > 3 && typeof C == "function" ? (y--, C) : n, A && It(a[0], a[1], A) && (C = y < 3 ? n : C, y = 1), i = Ke(i); ++h < y; ) {
            var M = a[h];
            M && r(i, M, h, C);
          }
          return i;
        });
      }
      function zf(r, i) {
        return function(a, h) {
          if (a == null)
            return a;
          if (!$t(a))
            return r(a, h);
          for (var y = a.length, C = i ? y : -1, A = Ke(a); (i ? C-- : ++C < y) && h(A[C], C, A) !== !1; )
            ;
          return a;
        };
      }
      function Gf(r) {
        return function(i, a, h) {
          for (var y = -1, C = Ke(i), A = h(i), M = A.length; M--; ) {
            var I = A[r ? M : ++y];
            if (a(C[I], I, C) === !1)
              break;
          }
          return i;
        };
      }
      function mw(r, i, a) {
        var h = i & P, y = go(r);
        function C() {
          var A = this && this !== bt && this instanceof C ? y : r;
          return A.apply(h ? a : this, arguments);
        }
        return C;
      }
      function Kf(r) {
        return function(i) {
          i = $e(i);
          var a = bi(i) ? yn(i) : n, h = a ? a[0] : i.charAt(0), y = a ? vr(a, 1).join("") : i.slice(1);
          return h[r]() + y;
        };
      }
      function Ei(r) {
        return function(i) {
          return dl(zh(Hh(i).replace(ox, "")), r, "");
        };
      }
      function go(r) {
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
          var a = _i(r.prototype), h = r.apply(a, i);
          return it(h) ? h : a;
        };
      }
      function gw(r, i, a) {
        var h = go(r);
        function y() {
          for (var C = arguments.length, A = k(C), M = C, I = Ri(y); M--; )
            A[M] = arguments[M];
          var V = C < 3 && A[0] !== I && A[C - 1] !== I ? [] : fr(A, I);
          if (C -= V.length, C < a)
            return Jf(
              r,
              i,
              Ts,
              y.placeholder,
              n,
              A,
              V,
              n,
              n,
              a - C
            );
          var F = this && this !== bt && this instanceof y ? h : r;
          return Kt(F, this, A);
        }
        return y;
      }
      function Yf(r) {
        return function(i, a, h) {
          var y = Ke(i);
          if (!$t(i)) {
            var C = ae(a, 3);
            i = vt(i), a = function(M) {
              return C(y[M], M, y);
            };
          }
          var A = r(i, a, h);
          return A > -1 ? y[C ? i[A] : A] : n;
        };
      }
      function qf(r) {
        return zn(function(i) {
          var a = i.length, h = a, y = un.prototype.thru;
          for (r && i.reverse(); h--; ) {
            var C = i[h];
            if (typeof C != "function")
              throw new cn(l);
            if (y && !A && Es(C) == "wrapper")
              var A = new un([], !0);
          }
          for (h = A ? h : a; ++h < a; ) {
            C = i[h];
            var M = Es(C), I = M == "wrapper" ? zl(C) : n;
            I && ql(I[0]) && I[1] == ($ | O | D | H) && !I[4].length && I[9] == 1 ? A = A[Es(I[0])].apply(A, I[3]) : A = C.length == 1 && ql(C) ? A[M]() : A.thru(C);
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
      function Ts(r, i, a, h, y, C, A, M, I, V) {
        var F = i & $, B = i & P, K = i & _, ee = i & (O | N), le = i & te, we = K ? n : go(r);
        function ce() {
          for (var Ne = arguments.length, De = k(Ne), Zt = Ne; Zt--; )
            De[Zt] = arguments[Zt];
          if (ee)
            var kt = Ri(ce), Jt = Ex(De, kt);
          if (h && (De = Uf(De, h, y, ee)), C && (De = Hf(De, C, A, ee)), Ne -= Jt, ee && Ne < V) {
            var dt = fr(De, kt);
            return Jf(
              r,
              i,
              Ts,
              ce.placeholder,
              a,
              De,
              dt,
              M,
              I,
              V - Ne
            );
          }
          var wn = B ? a : this, qn = K ? wn[r] : r;
          return Ne = De.length, M ? De = kw(De, M) : le && Ne > 1 && De.reverse(), F && I < Ne && (De.length = I), this && this !== bt && this instanceof ce && (qn = we || go(qn)), qn.apply(wn, De);
        }
        return ce;
      }
      function Xf(r, i) {
        return function(a, h) {
          return Hb(a, r, i(h), {});
        };
      }
      function Ps(r, i) {
        return function(a, h) {
          var y;
          if (a === n && h === n)
            return i;
          if (a !== n && (y = a), h !== n) {
            if (y === n)
              return h;
            typeof a == "string" || typeof h == "string" ? (a = qt(a), h = qt(h)) : (a = If(a), h = If(h)), y = r(a, h);
          }
          return y;
        };
      }
      function Wl(r) {
        return zn(function(i) {
          return i = tt(i, Yt(ae())), Ce(function(a) {
            var h = this;
            return r(i, function(y) {
              return Kt(y, h, a);
            });
          });
        });
      }
      function _s(r, i) {
        i = i === n ? " " : qt(i);
        var a = i.length;
        if (a < 2)
          return a ? Dl(i, r) : i;
        var h = Dl(i, fs(r / wi(i)));
        return bi(i) ? vr(yn(h), 0, r).join("") : h.slice(0, r);
      }
      function vw(r, i, a, h) {
        var y = i & P, C = go(r);
        function A() {
          for (var M = -1, I = arguments.length, V = -1, F = h.length, B = k(F + I), K = this && this !== bt && this instanceof A ? C : r; ++V < F; )
            B[V] = h[V];
          for (; I--; )
            B[V++] = arguments[++M];
          return Kt(K, y ? a : this, B);
        }
        return A;
      }
      function Zf(r) {
        return function(i, a, h) {
          return h && typeof h != "number" && It(i, a, h) && (a = h = n), i = Yn(i), a === n ? (a = i, i = 0) : a = Yn(a), h = h === n ? i < a ? 1 : -1 : Yn(h), nw(i, a, h, r);
        };
      }
      function As(r) {
        return function(i, a) {
          return typeof i == "string" && typeof a == "string" || (i = pn(i), a = pn(a)), r(i, a);
        };
      }
      function Jf(r, i, a, h, y, C, A, M, I, V) {
        var F = i & O, B = F ? A : n, K = F ? n : A, ee = F ? C : n, le = F ? n : C;
        i |= F ? D : W, i &= ~(F ? W : D), i & E || (i &= ~(P | _));
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
        return ql(r) && uh(ce, we), ce.placeholder = h, dh(ce, r, i);
      }
      function $l(r) {
        var i = mt[r];
        return function(a, h) {
          if (a = pn(a), h = h == null ? 0 : At(ye(h), 292), h && df(a)) {
            var y = ($e(a) + "e").split("e"), C = i(y[0] + "e" + (+y[1] + h));
            return y = ($e(C) + "e").split("e"), +(y[0] + "e" + (+y[1] - h));
          }
          return i(a);
        };
      }
      var yw = Ti && 1 / ns(new Ti([, -0]))[1] == Z ? function(r) {
        return new Ti(r);
      } : uc;
      function Qf(r) {
        return function(i) {
          var a = Et(i);
          return a == Ye ? yl(i) : a == jt ? Ix(i) : Ax(i, r(i));
        };
      }
      function Hn(r, i, a, h, y, C, A, M) {
        var I = i & _;
        if (!I && typeof r != "function")
          throw new cn(l);
        var V = h ? h.length : 0;
        if (V || (i &= ~(D | W), h = y = n), A = A === n ? A : gt(ye(A), 0), M = M === n ? M : ye(M), V -= y ? y.length : 0, i & W) {
          var F = h, B = y;
          h = y = n;
        }
        var K = I ? n : zl(r), ee = [
          r,
          i,
          a,
          h,
          y,
          F,
          B,
          C,
          A,
          M
        ];
        if (K && jw(ee, K), r = ee[0], i = ee[1], a = ee[2], h = ee[3], y = ee[4], M = ee[9] = ee[9] === n ? I ? 0 : r.length : gt(ee[9] - V, 0), !M && i & (O | N) && (i &= ~(O | N)), !i || i == P)
          var le = mw(r, i, a);
        else
          i == O || i == N ? le = gw(r, i, M) : (i == D || i == (P | D)) && !y.length ? le = vw(r, i, a, h) : le = Ts.apply(n, ee);
        var we = K ? jf : uh;
        return dh(we(le, ee), r, i);
      }
      function eh(r, i, a, h) {
        return r === n || bn(r, Ci[a]) && !ze.call(h, a) ? i : r;
      }
      function th(r, i, a, h, y, C) {
        return it(r) && it(i) && (C.set(i, r), bs(r, i, n, th, C), C.delete(i)), r;
      }
      function xw(r) {
        return xo(r) ? n : r;
      }
      function nh(r, i, a, h, y, C) {
        var A = a & T, M = r.length, I = i.length;
        if (M != I && !(A && I > M))
          return !1;
        var V = C.get(r), F = C.get(i);
        if (V && F)
          return V == i && F == r;
        var B = -1, K = !0, ee = a & S ? new qr() : n;
        for (C.set(r, i), C.set(i, r); ++B < M; ) {
          var le = r[B], we = i[B];
          if (h)
            var ce = A ? h(we, le, B, i, r, C) : h(le, we, B, r, i, C);
          if (ce !== n) {
            if (ce)
              continue;
            K = !1;
            break;
          }
          if (ee) {
            if (!fl(i, function(Ne, De) {
              if (!io(ee, De) && (le === Ne || y(le, Ne, a, h, C)))
                return ee.push(De);
            })) {
              K = !1;
              break;
            }
          } else if (!(le === we || y(le, we, a, h, C))) {
            K = !1;
            break;
          }
        }
        return C.delete(r), C.delete(i), K;
      }
      function bw(r, i, a, h, y, C, A) {
        switch (a) {
          case En:
            if (r.byteLength != i.byteLength || r.byteOffset != i.byteOffset)
              return !1;
            r = r.buffer, i = i.buffer;
          case Tt:
            return !(r.byteLength != i.byteLength || !C(new ls(r), new ls(i)));
          case be:
          case Le:
          case ht:
            return bn(+r, +i);
          case ve:
            return r.name == i.name && r.message == i.message;
          case Ot:
          case vn:
            return r == i + "";
          case Ye:
            var M = yl;
          case jt:
            var I = h & T;
            if (M || (M = ns), r.size != i.size && !I)
              return !1;
            var V = A.get(r);
            if (V)
              return V == i;
            h |= S, A.set(r, i);
            var F = nh(M(r), M(i), h, y, C, A);
            return A.delete(r), F;
          case pt:
            if (co)
              return co.call(r) == co.call(i);
        }
        return !1;
      }
      function ww(r, i, a, h, y, C) {
        var A = a & T, M = Ul(r), I = M.length, V = Ul(i), F = V.length;
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
          var Ne = r[K], De = i[K];
          if (h)
            var Zt = A ? h(De, Ne, K, i, r, C) : h(Ne, De, K, r, i, C);
          if (!(Zt === n ? Ne === De || y(Ne, De, a, h, C) : Zt)) {
            we = !1;
            break;
          }
          ce || (ce = K == "constructor");
        }
        if (we && !ce) {
          var kt = r.constructor, Jt = i.constructor;
          kt != Jt && "constructor" in r && "constructor" in i && !(typeof kt == "function" && kt instanceof kt && typeof Jt == "function" && Jt instanceof Jt) && (we = !1);
        }
        return C.delete(r), C.delete(i), we;
      }
      function zn(r) {
        return Zl(lh(r, n, vh), r + "");
      }
      function Ul(r) {
        return Sf(r, vt, Kl);
      }
      function Hl(r) {
        return Sf(r, Ut, rh);
      }
      var zl = ps ? function(r) {
        return ps.get(r);
      } : uc;
      function Es(r) {
        for (var i = r.name + "", a = Pi[i], h = ze.call(Pi, i) ? a.length : 0; h--; ) {
          var y = a[h], C = y.func;
          if (C == null || C == r)
            return y.name;
        }
        return i;
      }
      function Ri(r) {
        var i = ze.call(b, "placeholder") ? b : r;
        return i.placeholder;
      }
      function ae() {
        var r = b.iteratee || lc;
        return r = r === lc ? Pf : r, arguments.length ? r(arguments[0], arguments[1]) : r;
      }
      function Rs(r, i) {
        var a = r.__data__;
        return Rw(i) ? a[typeof i == "string" ? "string" : "hash"] : a.map;
      }
      function Gl(r) {
        for (var i = vt(r), a = i.length; a--; ) {
          var h = i[a], y = r[h];
          i[a] = [h, y, sh(y)];
        }
        return i;
      }
      function Jr(r, i) {
        var a = Ox(r, i);
        return Tf(a) ? a : n;
      }
      function Sw(r) {
        var i = ze.call(r, Kr), a = r[Kr];
        try {
          r[Kr] = n;
          var h = !0;
        } catch {
        }
        var y = ss.call(r);
        return h && (i ? r[Kr] = a : delete r[Kr]), y;
      }
      var Kl = bl ? function(r) {
        return r == null ? [] : (r = Ke(r), ur(bl(r), function(i) {
          return cf.call(r, i);
        }));
      } : dc, rh = bl ? function(r) {
        for (var i = []; r; )
          dr(i, Kl(r)), r = cs(r);
        return i;
      } : dc, Et = Dt;
      (wl && Et(new wl(new ArrayBuffer(1))) != En || so && Et(new so()) != Ye || Sl && Et(Sl.resolve()) != on || Ti && Et(new Ti()) != jt || ao && Et(new ao()) != An) && (Et = function(r) {
        var i = Dt(r), a = i == ct ? r.constructor : n, h = a ? Qr(a) : "";
        if (h)
          switch (h) {
            case ib:
              return En;
            case ob:
              return Ye;
            case sb:
              return on;
            case ab:
              return jt;
            case lb:
              return An;
          }
        return i;
      });
      function Cw(r, i, a) {
        for (var h = -1, y = a.length; ++h < y; ) {
          var C = a[h], A = C.size;
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
              r = gt(r, i - A);
              break;
          }
        }
        return { start: r, end: i };
      }
      function Tw(r) {
        var i = r.match(el);
        return i ? i[1].split(tl) : [];
      }
      function ih(r, i, a) {
        i = gr(i, r);
        for (var h = -1, y = i.length, C = !1; ++h < y; ) {
          var A = Dn(i[h]);
          if (!(C = r != null && a(r, A)))
            break;
          r = r[A];
        }
        return C || ++h != y ? C : (y = r == null ? 0 : r.length, !!y && ks(y) && Gn(A, y) && (me(r) || ei(r)));
      }
      function Pw(r) {
        var i = r.length, a = new r.constructor(i);
        return i && typeof r[0] == "string" && ze.call(r, "index") && (a.index = r.index, a.input = r.input), a;
      }
      function oh(r) {
        return typeof r.constructor == "function" && !vo(r) ? _i(cs(r)) : {};
      }
      function _w(r, i, a) {
        var h = r.constructor;
        switch (i) {
          case Tt:
            return Bl(r);
          case be:
          case Le:
            return new h(+r);
          case En:
            return cw(r, a);
          case Rn:
          case Gt:
          case Nn:
          case Mn:
          case $r:
          case Ur:
          case sr:
          case ar:
          case Hr:
            return Wf(r, a);
          case Ye:
            return new h();
          case ht:
          case vn:
            return new h(r);
          case Ot:
            return uw(r);
          case jt:
            return new h();
          case pt:
            return dw(r);
        }
      }
      function Aw(r, i) {
        var a = i.length;
        if (!a)
          return r;
        var h = a - 1;
        return i[h] = (a > 1 ? "& " : "") + i[h], i = i.join(a > 2 ? ", " : " "), r.replace(Qa, `{
/* [wrapped with ` + i + `] */
`);
      }
      function Ew(r) {
        return me(r) || ei(r) || !!(uf && r && r[uf]);
      }
      function Gn(r, i) {
        var a = typeof r;
        return i = i ?? q, !!i && (a == "number" || a != "symbol" && rt.test(r)) && r > -1 && r % 1 == 0 && r < i;
      }
      function It(r, i, a) {
        if (!it(a))
          return !1;
        var h = typeof i;
        return (h == "number" ? $t(a) && Gn(i, a.length) : h == "string" && i in a) ? bn(a[i], r) : !1;
      }
      function Yl(r, i) {
        if (me(r))
          return !1;
        var a = typeof r;
        return a == "number" || a == "symbol" || a == "boolean" || r == null || Xt(r) ? !0 : Xo.test(r) || !qo.test(r) || i != null && r in Ke(i);
      }
      function Rw(r) {
        var i = typeof r;
        return i == "string" || i == "number" || i == "symbol" || i == "boolean" ? r !== "__proto__" : r === null;
      }
      function ql(r) {
        var i = Es(r), a = b[i];
        if (typeof a != "function" || !(i in Oe.prototype))
          return !1;
        if (r === a)
          return !0;
        var h = zl(a);
        return !!h && r === h[0];
      }
      function Nw(r) {
        return !!sf && sf in r;
      }
      var Mw = is ? Kn : fc;
      function vo(r) {
        var i = r && r.constructor, a = typeof i == "function" && i.prototype || Ci;
        return r === a;
      }
      function sh(r) {
        return r === r && !it(r);
      }
      function ah(r, i) {
        return function(a) {
          return a == null ? !1 : a[r] === i && (i !== n || r in Ke(a));
        };
      }
      function Ow(r) {
        var i = Ds(r, function(h) {
          return a.size === f && a.clear(), h;
        }), a = i.cache;
        return i;
      }
      function jw(r, i) {
        var a = r[1], h = i[1], y = a | h, C = y < (P | _ | $), A = h == $ && a == O || h == $ && a == H && r[7].length <= i[8] || h == ($ | H) && i[7].length <= i[8] && a == O;
        if (!(C || A))
          return r;
        h & P && (r[2] = i[2], y |= a & P ? 0 : E);
        var M = i[3];
        if (M) {
          var I = r[3];
          r[3] = I ? Uf(I, M, i[4]) : M, r[4] = I ? fr(r[3], m) : i[4];
        }
        return M = i[5], M && (I = r[5], r[5] = I ? Hf(I, M, i[6]) : M, r[6] = I ? fr(r[5], m) : i[6]), M = i[7], M && (r[7] = M), h & $ && (r[8] = r[8] == null ? i[8] : At(r[8], i[8])), r[9] == null && (r[9] = i[9]), r[0] = i[0], r[1] = y, r;
      }
      function Dw(r) {
        var i = [];
        if (r != null)
          for (var a in Ke(r))
            i.push(a);
        return i;
      }
      function Iw(r) {
        return ss.call(r);
      }
      function lh(r, i, a) {
        return i = gt(i === n ? r.length - 1 : i, 0), function() {
          for (var h = arguments, y = -1, C = gt(h.length - i, 0), A = k(C); ++y < C; )
            A[y] = h[i + y];
          y = -1;
          for (var M = k(i + 1); ++y < i; )
            M[y] = h[y];
          return M[i] = a(A), Kt(r, this, M);
        };
      }
      function ch(r, i) {
        return i.length < 2 ? r : Zr(r, fn(i, 0, -1));
      }
      function kw(r, i) {
        for (var a = r.length, h = At(i.length, a), y = Wt(r); h--; ) {
          var C = i[h];
          r[h] = Gn(C, a) ? y[C] : n;
        }
        return r;
      }
      function Xl(r, i) {
        if (!(i === "constructor" && typeof r[i] == "function") && i != "__proto__")
          return r[i];
      }
      var uh = fh(jf), yo = Zx || function(r, i) {
        return bt.setTimeout(r, i);
      }, Zl = fh(ow);
      function dh(r, i, a) {
        var h = i + "";
        return Zl(r, Aw(h, Lw(Tw(h), a)));
      }
      function fh(r) {
        var i = 0, a = 0;
        return function() {
          var h = tb(), y = se - (h - a);
          if (a = h, y > 0) {
            if (++i >= J)
              return arguments[0];
          } else
            i = 0;
          return r.apply(n, arguments);
        };
      }
      function Ns(r, i) {
        var a = -1, h = r.length, y = h - 1;
        for (i = i === n ? h : i; ++a < i; ) {
          var C = jl(a, y), A = r[C];
          r[C] = r[a], r[a] = A;
        }
        return r.length = i, r;
      }
      var hh = Ow(function(r) {
        var i = [];
        return r.charCodeAt(0) === 46 && i.push(""), r.replace(Za, function(a, h, y, C) {
          i.push(y ? C.replace(Y, "$1") : h || a);
        }), i;
      });
      function Dn(r) {
        if (typeof r == "string" || Xt(r))
          return r;
        var i = r + "";
        return i == "0" && 1 / r == -Z ? "-0" : i;
      }
      function Qr(r) {
        if (r != null) {
          try {
            return os.call(r);
          } catch {
          }
          try {
            return r + "";
          } catch {
          }
        }
        return "";
      }
      function Lw(r, i) {
        return ln(Re, function(a) {
          var h = "_." + a[0];
          i & a[1] && !es(r, h) && r.push(h);
        }), r.sort();
      }
      function ph(r) {
        if (r instanceof Oe)
          return r.clone();
        var i = new un(r.__wrapped__, r.__chain__);
        return i.__actions__ = Wt(r.__actions__), i.__index__ = r.__index__, i.__values__ = r.__values__, i;
      }
      function Vw(r, i, a) {
        (a ? It(r, i, a) : i === n) ? i = 1 : i = gt(ye(i), 0);
        var h = r == null ? 0 : r.length;
        if (!h || i < 1)
          return [];
        for (var y = 0, C = 0, A = k(fs(h / i)); y < h; )
          A[C++] = fn(r, y, y += i);
        return A;
      }
      function Fw(r) {
        for (var i = -1, a = r == null ? 0 : r.length, h = 0, y = []; ++i < a; ) {
          var C = r[i];
          C && (y[h++] = C);
        }
        return y;
      }
      function Bw() {
        var r = arguments.length;
        if (!r)
          return [];
        for (var i = k(r - 1), a = arguments[0], h = r; h--; )
          i[h - 1] = arguments[h];
        return dr(me(a) ? Wt(a) : [a], wt(i, 1));
      }
      var Ww = Ce(function(r, i) {
        return ut(r) ? fo(r, wt(i, 1, ut, !0)) : [];
      }), $w = Ce(function(r, i) {
        var a = hn(i);
        return ut(a) && (a = n), ut(r) ? fo(r, wt(i, 1, ut, !0), ae(a, 2)) : [];
      }), Uw = Ce(function(r, i) {
        var a = hn(i);
        return ut(a) && (a = n), ut(r) ? fo(r, wt(i, 1, ut, !0), n, a) : [];
      });
      function Hw(r, i, a) {
        var h = r == null ? 0 : r.length;
        return h ? (i = a || i === n ? 1 : ye(i), fn(r, i < 0 ? 0 : i, h)) : [];
      }
      function zw(r, i, a) {
        var h = r == null ? 0 : r.length;
        return h ? (i = a || i === n ? 1 : ye(i), i = h - i, fn(r, 0, i < 0 ? 0 : i)) : [];
      }
      function Gw(r, i) {
        return r && r.length ? Ss(r, ae(i, 3), !0, !0) : [];
      }
      function Kw(r, i) {
        return r && r.length ? Ss(r, ae(i, 3), !0) : [];
      }
      function Yw(r, i, a, h) {
        var y = r == null ? 0 : r.length;
        return y ? (a && typeof a != "number" && It(r, i, a) && (a = 0, h = y), Bb(r, i, a, h)) : [];
      }
      function mh(r, i, a) {
        var h = r == null ? 0 : r.length;
        if (!h)
          return -1;
        var y = a == null ? 0 : ye(a);
        return y < 0 && (y = gt(h + y, 0)), ts(r, ae(i, 3), y);
      }
      function gh(r, i, a) {
        var h = r == null ? 0 : r.length;
        if (!h)
          return -1;
        var y = h - 1;
        return a !== n && (y = ye(a), y = a < 0 ? gt(h + y, 0) : At(y, h - 1)), ts(r, ae(i, 3), y, !0);
      }
      function vh(r) {
        var i = r == null ? 0 : r.length;
        return i ? wt(r, 1) : [];
      }
      function qw(r) {
        var i = r == null ? 0 : r.length;
        return i ? wt(r, Z) : [];
      }
      function Xw(r, i) {
        var a = r == null ? 0 : r.length;
        return a ? (i = i === n ? 1 : ye(i), wt(r, i)) : [];
      }
      function Zw(r) {
        for (var i = -1, a = r == null ? 0 : r.length, h = {}; ++i < a; ) {
          var y = r[i];
          h[y[0]] = y[1];
        }
        return h;
      }
      function yh(r) {
        return r && r.length ? r[0] : n;
      }
      function Jw(r, i, a) {
        var h = r == null ? 0 : r.length;
        if (!h)
          return -1;
        var y = a == null ? 0 : ye(a);
        return y < 0 && (y = gt(h + y, 0)), xi(r, i, y);
      }
      function Qw(r) {
        var i = r == null ? 0 : r.length;
        return i ? fn(r, 0, -1) : [];
      }
      var e1 = Ce(function(r) {
        var i = tt(r, Vl);
        return i.length && i[0] === r[0] ? El(i) : [];
      }), t1 = Ce(function(r) {
        var i = hn(r), a = tt(r, Vl);
        return i === hn(a) ? i = n : a.pop(), a.length && a[0] === r[0] ? El(a, ae(i, 2)) : [];
      }), n1 = Ce(function(r) {
        var i = hn(r), a = tt(r, Vl);
        return i = typeof i == "function" ? i : n, i && a.pop(), a.length && a[0] === r[0] ? El(a, n, i) : [];
      });
      function r1(r, i) {
        return r == null ? "" : Qx.call(r, i);
      }
      function hn(r) {
        var i = r == null ? 0 : r.length;
        return i ? r[i - 1] : n;
      }
      function i1(r, i, a) {
        var h = r == null ? 0 : r.length;
        if (!h)
          return -1;
        var y = h;
        return a !== n && (y = ye(a), y = y < 0 ? gt(h + y, 0) : At(y, h - 1)), i === i ? Lx(r, i, y) : ts(r, Zd, y, !0);
      }
      function o1(r, i) {
        return r && r.length ? Rf(r, ye(i)) : n;
      }
      var s1 = Ce(xh);
      function xh(r, i) {
        return r && r.length && i && i.length ? Ol(r, i) : r;
      }
      function a1(r, i, a) {
        return r && r.length && i && i.length ? Ol(r, i, ae(a, 2)) : r;
      }
      function l1(r, i, a) {
        return r && r.length && i && i.length ? Ol(r, i, n, a) : r;
      }
      var c1 = zn(function(r, i) {
        var a = r == null ? 0 : r.length, h = Tl(r, i);
        return Of(r, tt(i, function(y) {
          return Gn(y, a) ? +y : y;
        }).sort($f)), h;
      });
      function u1(r, i) {
        var a = [];
        if (!(r && r.length))
          return a;
        var h = -1, y = [], C = r.length;
        for (i = ae(i, 3); ++h < C; ) {
          var A = r[h];
          i(A, h, r) && (a.push(A), y.push(h));
        }
        return Of(r, y), a;
      }
      function Jl(r) {
        return r == null ? r : rb.call(r);
      }
      function d1(r, i, a) {
        var h = r == null ? 0 : r.length;
        return h ? (a && typeof a != "number" && It(r, i, a) ? (i = 0, a = h) : (i = i == null ? 0 : ye(i), a = a === n ? h : ye(a)), fn(r, i, a)) : [];
      }
      function f1(r, i) {
        return ws(r, i);
      }
      function h1(r, i, a) {
        return Il(r, i, ae(a, 2));
      }
      function p1(r, i) {
        var a = r == null ? 0 : r.length;
        if (a) {
          var h = ws(r, i);
          if (h < a && bn(r[h], i))
            return h;
        }
        return -1;
      }
      function m1(r, i) {
        return ws(r, i, !0);
      }
      function g1(r, i, a) {
        return Il(r, i, ae(a, 2), !0);
      }
      function v1(r, i) {
        var a = r == null ? 0 : r.length;
        if (a) {
          var h = ws(r, i, !0) - 1;
          if (bn(r[h], i))
            return h;
        }
        return -1;
      }
      function y1(r) {
        return r && r.length ? Df(r) : [];
      }
      function x1(r, i) {
        return r && r.length ? Df(r, ae(i, 2)) : [];
      }
      function b1(r) {
        var i = r == null ? 0 : r.length;
        return i ? fn(r, 1, i) : [];
      }
      function w1(r, i, a) {
        return r && r.length ? (i = a || i === n ? 1 : ye(i), fn(r, 0, i < 0 ? 0 : i)) : [];
      }
      function S1(r, i, a) {
        var h = r == null ? 0 : r.length;
        return h ? (i = a || i === n ? 1 : ye(i), i = h - i, fn(r, i < 0 ? 0 : i, h)) : [];
      }
      function C1(r, i) {
        return r && r.length ? Ss(r, ae(i, 3), !1, !0) : [];
      }
      function T1(r, i) {
        return r && r.length ? Ss(r, ae(i, 3)) : [];
      }
      var P1 = Ce(function(r) {
        return mr(wt(r, 1, ut, !0));
      }), _1 = Ce(function(r) {
        var i = hn(r);
        return ut(i) && (i = n), mr(wt(r, 1, ut, !0), ae(i, 2));
      }), A1 = Ce(function(r) {
        var i = hn(r);
        return i = typeof i == "function" ? i : n, mr(wt(r, 1, ut, !0), n, i);
      });
      function E1(r) {
        return r && r.length ? mr(r) : [];
      }
      function R1(r, i) {
        return r && r.length ? mr(r, ae(i, 2)) : [];
      }
      function N1(r, i) {
        return i = typeof i == "function" ? i : n, r && r.length ? mr(r, n, i) : [];
      }
      function Ql(r) {
        if (!(r && r.length))
          return [];
        var i = 0;
        return r = ur(r, function(a) {
          if (ut(a))
            return i = gt(a.length, i), !0;
        }), gl(i, function(a) {
          return tt(r, hl(a));
        });
      }
      function bh(r, i) {
        if (!(r && r.length))
          return [];
        var a = Ql(r);
        return i == null ? a : tt(a, function(h) {
          return Kt(i, n, h);
        });
      }
      var M1 = Ce(function(r, i) {
        return ut(r) ? fo(r, i) : [];
      }), O1 = Ce(function(r) {
        return Ll(ur(r, ut));
      }), j1 = Ce(function(r) {
        var i = hn(r);
        return ut(i) && (i = n), Ll(ur(r, ut), ae(i, 2));
      }), D1 = Ce(function(r) {
        var i = hn(r);
        return i = typeof i == "function" ? i : n, Ll(ur(r, ut), n, i);
      }), I1 = Ce(Ql);
      function k1(r, i) {
        return Vf(r || [], i || [], uo);
      }
      function L1(r, i) {
        return Vf(r || [], i || [], mo);
      }
      var V1 = Ce(function(r) {
        var i = r.length, a = i > 1 ? r[i - 1] : n;
        return a = typeof a == "function" ? (r.pop(), a) : n, bh(r, a);
      });
      function wh(r) {
        var i = b(r);
        return i.__chain__ = !0, i;
      }
      function F1(r, i) {
        return i(r), r;
      }
      function Ms(r, i) {
        return i(r);
      }
      var B1 = zn(function(r) {
        var i = r.length, a = i ? r[0] : 0, h = this.__wrapped__, y = function(C) {
          return Tl(C, r);
        };
        return i > 1 || this.__actions__.length || !(h instanceof Oe) || !Gn(a) ? this.thru(y) : (h = h.slice(a, +a + (i ? 1 : 0)), h.__actions__.push({
          func: Ms,
          args: [y],
          thisArg: n
        }), new un(h, this.__chain__).thru(function(C) {
          return i && !C.length && C.push(n), C;
        }));
      });
      function W1() {
        return wh(this);
      }
      function $1() {
        return new un(this.value(), this.__chain__);
      }
      function U1() {
        this.__values__ === n && (this.__values__ = Ih(this.value()));
        var r = this.__index__ >= this.__values__.length, i = r ? n : this.__values__[this.__index__++];
        return { done: r, value: i };
      }
      function H1() {
        return this;
      }
      function z1(r) {
        for (var i, a = this; a instanceof gs; ) {
          var h = ph(a);
          h.__index__ = 0, h.__values__ = n, i ? y.__wrapped__ = h : i = h;
          var y = h;
          a = a.__wrapped__;
        }
        return y.__wrapped__ = r, i;
      }
      function G1() {
        var r = this.__wrapped__;
        if (r instanceof Oe) {
          var i = r;
          return this.__actions__.length && (i = new Oe(this)), i = i.reverse(), i.__actions__.push({
            func: Ms,
            args: [Jl],
            thisArg: n
          }), new un(i, this.__chain__);
        }
        return this.thru(Jl);
      }
      function K1() {
        return Lf(this.__wrapped__, this.__actions__);
      }
      var Y1 = Cs(function(r, i, a) {
        ze.call(r, a) ? ++r[a] : Un(r, a, 1);
      });
      function q1(r, i, a) {
        var h = me(r) ? qd : Fb;
        return a && It(r, i, a) && (i = n), h(r, ae(i, 3));
      }
      function X1(r, i) {
        var a = me(r) ? ur : bf;
        return a(r, ae(i, 3));
      }
      var Z1 = Yf(mh), J1 = Yf(gh);
      function Q1(r, i) {
        return wt(Os(r, i), 1);
      }
      function eS(r, i) {
        return wt(Os(r, i), Z);
      }
      function tS(r, i, a) {
        return a = a === n ? 1 : ye(a), wt(Os(r, i), a);
      }
      function Sh(r, i) {
        var a = me(r) ? ln : pr;
        return a(r, ae(i, 3));
      }
      function Ch(r, i) {
        var a = me(r) ? bx : xf;
        return a(r, ae(i, 3));
      }
      var nS = Cs(function(r, i, a) {
        ze.call(r, a) ? r[a].push(i) : Un(r, a, [i]);
      });
      function rS(r, i, a, h) {
        r = $t(r) ? r : Mi(r), a = a && !h ? ye(a) : 0;
        var y = r.length;
        return a < 0 && (a = gt(y + a, 0)), Ls(r) ? a <= y && r.indexOf(i, a) > -1 : !!y && xi(r, i, a) > -1;
      }
      var iS = Ce(function(r, i, a) {
        var h = -1, y = typeof i == "function", C = $t(r) ? k(r.length) : [];
        return pr(r, function(A) {
          C[++h] = y ? Kt(i, A, a) : ho(A, i, a);
        }), C;
      }), oS = Cs(function(r, i, a) {
        Un(r, a, i);
      });
      function Os(r, i) {
        var a = me(r) ? tt : _f;
        return a(r, ae(i, 3));
      }
      function sS(r, i, a, h) {
        return r == null ? [] : (me(i) || (i = i == null ? [] : [i]), a = h ? n : a, me(a) || (a = a == null ? [] : [a]), Nf(r, i, a));
      }
      var aS = Cs(function(r, i, a) {
        r[a ? 0 : 1].push(i);
      }, function() {
        return [[], []];
      });
      function lS(r, i, a) {
        var h = me(r) ? dl : Qd, y = arguments.length < 3;
        return h(r, ae(i, 4), a, y, pr);
      }
      function cS(r, i, a) {
        var h = me(r) ? wx : Qd, y = arguments.length < 3;
        return h(r, ae(i, 4), a, y, xf);
      }
      function uS(r, i) {
        var a = me(r) ? ur : bf;
        return a(r, Is(ae(i, 3)));
      }
      function dS(r) {
        var i = me(r) ? mf : rw;
        return i(r);
      }
      function fS(r, i, a) {
        (a ? It(r, i, a) : i === n) ? i = 1 : i = ye(i);
        var h = me(r) ? Db : iw;
        return h(r, i);
      }
      function hS(r) {
        var i = me(r) ? Ib : sw;
        return i(r);
      }
      function pS(r) {
        if (r == null)
          return 0;
        if ($t(r))
          return Ls(r) ? wi(r) : r.length;
        var i = Et(r);
        return i == Ye || i == jt ? r.size : Nl(r).length;
      }
      function mS(r, i, a) {
        var h = me(r) ? fl : aw;
        return a && It(r, i, a) && (i = n), h(r, ae(i, 3));
      }
      var gS = Ce(function(r, i) {
        if (r == null)
          return [];
        var a = i.length;
        return a > 1 && It(r, i[0], i[1]) ? i = [] : a > 2 && It(i[0], i[1], i[2]) && (i = [i[0]]), Nf(r, wt(i, 1), []);
      }), js = Xx || function() {
        return bt.Date.now();
      };
      function vS(r, i) {
        if (typeof i != "function")
          throw new cn(l);
        return r = ye(r), function() {
          if (--r < 1)
            return i.apply(this, arguments);
        };
      }
      function Th(r, i, a) {
        return i = a ? n : i, i = r && i == null ? r.length : i, Hn(r, $, n, n, n, n, i);
      }
      function Ph(r, i) {
        var a;
        if (typeof i != "function")
          throw new cn(l);
        return r = ye(r), function() {
          return --r > 0 && (a = i.apply(this, arguments)), r <= 1 && (i = n), a;
        };
      }
      var ec = Ce(function(r, i, a) {
        var h = P;
        if (a.length) {
          var y = fr(a, Ri(ec));
          h |= D;
        }
        return Hn(r, h, i, a, y);
      }), _h = Ce(function(r, i, a) {
        var h = P | _;
        if (a.length) {
          var y = fr(a, Ri(_h));
          h |= D;
        }
        return Hn(i, h, r, a, y);
      });
      function Ah(r, i, a) {
        i = a ? n : i;
        var h = Hn(r, O, n, n, n, n, n, i);
        return h.placeholder = Ah.placeholder, h;
      }
      function Eh(r, i, a) {
        i = a ? n : i;
        var h = Hn(r, N, n, n, n, n, n, i);
        return h.placeholder = Eh.placeholder, h;
      }
      function Rh(r, i, a) {
        var h, y, C, A, M, I, V = 0, F = !1, B = !1, K = !0;
        if (typeof r != "function")
          throw new cn(l);
        i = pn(i) || 0, it(a) && (F = !!a.leading, B = "maxWait" in a, C = B ? gt(pn(a.maxWait) || 0, i) : C, K = "trailing" in a ? !!a.trailing : K);
        function ee(dt) {
          var wn = h, qn = y;
          return h = y = n, V = dt, A = r.apply(qn, wn), A;
        }
        function le(dt) {
          return V = dt, M = yo(Ne, i), F ? ee(dt) : A;
        }
        function we(dt) {
          var wn = dt - I, qn = dt - V, Yh = i - wn;
          return B ? At(Yh, C - qn) : Yh;
        }
        function ce(dt) {
          var wn = dt - I, qn = dt - V;
          return I === n || wn >= i || wn < 0 || B && qn >= C;
        }
        function Ne() {
          var dt = js();
          if (ce(dt))
            return De(dt);
          M = yo(Ne, we(dt));
        }
        function De(dt) {
          return M = n, K && h ? ee(dt) : (h = y = n, A);
        }
        function Zt() {
          M !== n && Ff(M), V = 0, h = I = y = M = n;
        }
        function kt() {
          return M === n ? A : De(js());
        }
        function Jt() {
          var dt = js(), wn = ce(dt);
          if (h = arguments, y = this, I = dt, wn) {
            if (M === n)
              return le(I);
            if (B)
              return Ff(M), M = yo(Ne, i), ee(I);
          }
          return M === n && (M = yo(Ne, i)), A;
        }
        return Jt.cancel = Zt, Jt.flush = kt, Jt;
      }
      var yS = Ce(function(r, i) {
        return yf(r, 1, i);
      }), xS = Ce(function(r, i, a) {
        return yf(r, pn(i) || 0, a);
      });
      function bS(r) {
        return Hn(r, te);
      }
      function Ds(r, i) {
        if (typeof r != "function" || i != null && typeof i != "function")
          throw new cn(l);
        var a = function() {
          var h = arguments, y = i ? i.apply(this, h) : h[0], C = a.cache;
          if (C.has(y))
            return C.get(y);
          var A = r.apply(this, h);
          return a.cache = C.set(y, A) || C, A;
        };
        return a.cache = new (Ds.Cache || $n)(), a;
      }
      Ds.Cache = $n;
      function Is(r) {
        if (typeof r != "function")
          throw new cn(l);
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
      function wS(r) {
        return Ph(2, r);
      }
      var SS = lw(function(r, i) {
        i = i.length == 1 && me(i[0]) ? tt(i[0], Yt(ae())) : tt(wt(i, 1), Yt(ae()));
        var a = i.length;
        return Ce(function(h) {
          for (var y = -1, C = At(h.length, a); ++y < C; )
            h[y] = i[y].call(this, h[y]);
          return Kt(r, this, h);
        });
      }), tc = Ce(function(r, i) {
        var a = fr(i, Ri(tc));
        return Hn(r, D, n, i, a);
      }), Nh = Ce(function(r, i) {
        var a = fr(i, Ri(Nh));
        return Hn(r, W, n, i, a);
      }), CS = zn(function(r, i) {
        return Hn(r, H, n, n, n, i);
      });
      function TS(r, i) {
        if (typeof r != "function")
          throw new cn(l);
        return i = i === n ? i : ye(i), Ce(r, i);
      }
      function PS(r, i) {
        if (typeof r != "function")
          throw new cn(l);
        return i = i == null ? 0 : gt(ye(i), 0), Ce(function(a) {
          var h = a[i], y = vr(a, 0, i);
          return h && dr(y, h), Kt(r, this, y);
        });
      }
      function _S(r, i, a) {
        var h = !0, y = !0;
        if (typeof r != "function")
          throw new cn(l);
        return it(a) && (h = "leading" in a ? !!a.leading : h, y = "trailing" in a ? !!a.trailing : y), Rh(r, i, {
          leading: h,
          maxWait: i,
          trailing: y
        });
      }
      function AS(r) {
        return Th(r, 1);
      }
      function ES(r, i) {
        return tc(Fl(i), r);
      }
      function RS() {
        if (!arguments.length)
          return [];
        var r = arguments[0];
        return me(r) ? r : [r];
      }
      function NS(r) {
        return dn(r, g);
      }
      function MS(r, i) {
        return i = typeof i == "function" ? i : n, dn(r, g, i);
      }
      function OS(r) {
        return dn(r, v | g);
      }
      function jS(r, i) {
        return i = typeof i == "function" ? i : n, dn(r, v | g, i);
      }
      function DS(r, i) {
        return i == null || vf(r, i, vt(i));
      }
      function bn(r, i) {
        return r === i || r !== r && i !== i;
      }
      var IS = As(Al), kS = As(function(r, i) {
        return r >= i;
      }), ei = Cf(/* @__PURE__ */ function() {
        return arguments;
      }()) ? Cf : function(r) {
        return at(r) && ze.call(r, "callee") && !cf.call(r, "callee");
      }, me = k.isArray, LS = Ud ? Yt(Ud) : zb;
      function $t(r) {
        return r != null && ks(r.length) && !Kn(r);
      }
      function ut(r) {
        return at(r) && $t(r);
      }
      function VS(r) {
        return r === !0 || r === !1 || at(r) && Dt(r) == be;
      }
      var yr = Jx || fc, FS = Hd ? Yt(Hd) : Gb;
      function BS(r) {
        return at(r) && r.nodeType === 1 && !xo(r);
      }
      function WS(r) {
        if (r == null)
          return !0;
        if ($t(r) && (me(r) || typeof r == "string" || typeof r.splice == "function" || yr(r) || Ni(r) || ei(r)))
          return !r.length;
        var i = Et(r);
        if (i == Ye || i == jt)
          return !r.size;
        if (vo(r))
          return !Nl(r).length;
        for (var a in r)
          if (ze.call(r, a))
            return !1;
        return !0;
      }
      function $S(r, i) {
        return po(r, i);
      }
      function US(r, i, a) {
        a = typeof a == "function" ? a : n;
        var h = a ? a(r, i) : n;
        return h === n ? po(r, i, n, a) : !!h;
      }
      function nc(r) {
        if (!at(r))
          return !1;
        var i = Dt(r);
        return i == ve || i == Se || typeof r.message == "string" && typeof r.name == "string" && !xo(r);
      }
      function HS(r) {
        return typeof r == "number" && df(r);
      }
      function Kn(r) {
        if (!it(r))
          return !1;
        var i = Dt(r);
        return i == _e || i == lt || i == X || i == Vt;
      }
      function Mh(r) {
        return typeof r == "number" && r == ye(r);
      }
      function ks(r) {
        return typeof r == "number" && r > -1 && r % 1 == 0 && r <= q;
      }
      function it(r) {
        var i = typeof r;
        return r != null && (i == "object" || i == "function");
      }
      function at(r) {
        return r != null && typeof r == "object";
      }
      var Oh = zd ? Yt(zd) : Yb;
      function zS(r, i) {
        return r === i || Rl(r, i, Gl(i));
      }
      function GS(r, i, a) {
        return a = typeof a == "function" ? a : n, Rl(r, i, Gl(i), a);
      }
      function KS(r) {
        return jh(r) && r != +r;
      }
      function YS(r) {
        if (Mw(r))
          throw new he(c);
        return Tf(r);
      }
      function qS(r) {
        return r === null;
      }
      function XS(r) {
        return r == null;
      }
      function jh(r) {
        return typeof r == "number" || at(r) && Dt(r) == ht;
      }
      function xo(r) {
        if (!at(r) || Dt(r) != ct)
          return !1;
        var i = cs(r);
        if (i === null)
          return !0;
        var a = ze.call(i, "constructor") && i.constructor;
        return typeof a == "function" && a instanceof a && os.call(a) == Gx;
      }
      var rc = Gd ? Yt(Gd) : qb;
      function ZS(r) {
        return Mh(r) && r >= -q && r <= q;
      }
      var Dh = Kd ? Yt(Kd) : Xb;
      function Ls(r) {
        return typeof r == "string" || !me(r) && at(r) && Dt(r) == vn;
      }
      function Xt(r) {
        return typeof r == "symbol" || at(r) && Dt(r) == pt;
      }
      var Ni = Yd ? Yt(Yd) : Zb;
      function JS(r) {
        return r === n;
      }
      function QS(r) {
        return at(r) && Et(r) == An;
      }
      function eC(r) {
        return at(r) && Dt(r) == pi;
      }
      var tC = As(Ml), nC = As(function(r, i) {
        return r <= i;
      });
      function Ih(r) {
        if (!r)
          return [];
        if ($t(r))
          return Ls(r) ? yn(r) : Wt(r);
        if (oo && r[oo])
          return Dx(r[oo]());
        var i = Et(r), a = i == Ye ? yl : i == jt ? ns : Mi;
        return a(r);
      }
      function Yn(r) {
        if (!r)
          return r === 0 ? r : 0;
        if (r = pn(r), r === Z || r === -Z) {
          var i = r < 0 ? -1 : 1;
          return i * G;
        }
        return r === r ? r : 0;
      }
      function ye(r) {
        var i = Yn(r), a = i % 1;
        return i === i ? a ? i - a : i : 0;
      }
      function kh(r) {
        return r ? Xr(ye(r), 0, Ee) : 0;
      }
      function pn(r) {
        if (typeof r == "number")
          return r;
        if (Xt(r))
          return pe;
        if (it(r)) {
          var i = typeof r.valueOf == "function" ? r.valueOf() : r;
          r = it(i) ? i + "" : i;
        }
        if (typeof r != "string")
          return r === 0 ? r : +r;
        r = ef(r);
        var a = Me.test(r);
        return a || yt.test(r) ? vx(r.slice(2), a ? 2 : 8) : He.test(r) ? pe : +r;
      }
      function Lh(r) {
        return jn(r, Ut(r));
      }
      function rC(r) {
        return r ? Xr(ye(r), -q, q) : r === 0 ? r : 0;
      }
      function $e(r) {
        return r == null ? "" : qt(r);
      }
      var iC = Ai(function(r, i) {
        if (vo(i) || $t(i)) {
          jn(i, vt(i), r);
          return;
        }
        for (var a in i)
          ze.call(i, a) && uo(r, a, i[a]);
      }), Vh = Ai(function(r, i) {
        jn(i, Ut(i), r);
      }), Vs = Ai(function(r, i, a, h) {
        jn(i, Ut(i), r, h);
      }), oC = Ai(function(r, i, a, h) {
        jn(i, vt(i), r, h);
      }), sC = zn(Tl);
      function aC(r, i) {
        var a = _i(r);
        return i == null ? a : gf(a, i);
      }
      var lC = Ce(function(r, i) {
        r = Ke(r);
        var a = -1, h = i.length, y = h > 2 ? i[2] : n;
        for (y && It(i[0], i[1], y) && (h = 1); ++a < h; )
          for (var C = i[a], A = Ut(C), M = -1, I = A.length; ++M < I; ) {
            var V = A[M], F = r[V];
            (F === n || bn(F, Ci[V]) && !ze.call(r, V)) && (r[V] = C[V]);
          }
        return r;
      }), cC = Ce(function(r) {
        return r.push(n, th), Kt(Fh, n, r);
      });
      function uC(r, i) {
        return Xd(r, ae(i, 3), On);
      }
      function dC(r, i) {
        return Xd(r, ae(i, 3), _l);
      }
      function fC(r, i) {
        return r == null ? r : Pl(r, ae(i, 3), Ut);
      }
      function hC(r, i) {
        return r == null ? r : wf(r, ae(i, 3), Ut);
      }
      function pC(r, i) {
        return r && On(r, ae(i, 3));
      }
      function mC(r, i) {
        return r && _l(r, ae(i, 3));
      }
      function gC(r) {
        return r == null ? [] : xs(r, vt(r));
      }
      function vC(r) {
        return r == null ? [] : xs(r, Ut(r));
      }
      function ic(r, i, a) {
        var h = r == null ? n : Zr(r, i);
        return h === n ? a : h;
      }
      function yC(r, i) {
        return r != null && ih(r, i, Wb);
      }
      function oc(r, i) {
        return r != null && ih(r, i, $b);
      }
      var xC = Xf(function(r, i, a) {
        i != null && typeof i.toString != "function" && (i = ss.call(i)), r[i] = a;
      }, ac(Ht)), bC = Xf(function(r, i, a) {
        i != null && typeof i.toString != "function" && (i = ss.call(i)), ze.call(r, i) ? r[i].push(a) : r[i] = [a];
      }, ae), wC = Ce(ho);
      function vt(r) {
        return $t(r) ? pf(r) : Nl(r);
      }
      function Ut(r) {
        return $t(r) ? pf(r, !0) : Jb(r);
      }
      function SC(r, i) {
        var a = {};
        return i = ae(i, 3), On(r, function(h, y, C) {
          Un(a, i(h, y, C), h);
        }), a;
      }
      function CC(r, i) {
        var a = {};
        return i = ae(i, 3), On(r, function(h, y, C) {
          Un(a, y, i(h, y, C));
        }), a;
      }
      var TC = Ai(function(r, i, a) {
        bs(r, i, a);
      }), Fh = Ai(function(r, i, a, h) {
        bs(r, i, a, h);
      }), PC = zn(function(r, i) {
        var a = {};
        if (r == null)
          return a;
        var h = !1;
        i = tt(i, function(C) {
          return C = gr(C, r), h || (h = C.length > 1), C;
        }), jn(r, Hl(r), a), h && (a = dn(a, v | x | g, xw));
        for (var y = i.length; y--; )
          kl(a, i[y]);
        return a;
      });
      function _C(r, i) {
        return Bh(r, Is(ae(i)));
      }
      var AC = zn(function(r, i) {
        return r == null ? {} : ew(r, i);
      });
      function Bh(r, i) {
        if (r == null)
          return {};
        var a = tt(Hl(r), function(h) {
          return [h];
        });
        return i = ae(i), Mf(r, a, function(h, y) {
          return i(h, y[0]);
        });
      }
      function EC(r, i, a) {
        i = gr(i, r);
        var h = -1, y = i.length;
        for (y || (y = 1, r = n); ++h < y; ) {
          var C = r == null ? n : r[Dn(i[h])];
          C === n && (h = y, C = a), r = Kn(C) ? C.call(r) : C;
        }
        return r;
      }
      function RC(r, i, a) {
        return r == null ? r : mo(r, i, a);
      }
      function NC(r, i, a, h) {
        return h = typeof h == "function" ? h : n, r == null ? r : mo(r, i, a, h);
      }
      var Wh = Qf(vt), $h = Qf(Ut);
      function MC(r, i, a) {
        var h = me(r), y = h || yr(r) || Ni(r);
        if (i = ae(i, 4), a == null) {
          var C = r && r.constructor;
          y ? a = h ? new C() : [] : it(r) ? a = Kn(C) ? _i(cs(r)) : {} : a = {};
        }
        return (y ? ln : On)(r, function(A, M, I) {
          return i(a, A, M, I);
        }), a;
      }
      function OC(r, i) {
        return r == null ? !0 : kl(r, i);
      }
      function jC(r, i, a) {
        return r == null ? r : kf(r, i, Fl(a));
      }
      function DC(r, i, a, h) {
        return h = typeof h == "function" ? h : n, r == null ? r : kf(r, i, Fl(a), h);
      }
      function Mi(r) {
        return r == null ? [] : vl(r, vt(r));
      }
      function IC(r) {
        return r == null ? [] : vl(r, Ut(r));
      }
      function kC(r, i, a) {
        return a === n && (a = i, i = n), a !== n && (a = pn(a), a = a === a ? a : 0), i !== n && (i = pn(i), i = i === i ? i : 0), Xr(pn(r), i, a);
      }
      function LC(r, i, a) {
        return i = Yn(i), a === n ? (a = i, i = 0) : a = Yn(a), r = pn(r), Ub(r, i, a);
      }
      function VC(r, i, a) {
        if (a && typeof a != "boolean" && It(r, i, a) && (i = a = n), a === n && (typeof i == "boolean" ? (a = i, i = n) : typeof r == "boolean" && (a = r, r = n)), r === n && i === n ? (r = 0, i = 1) : (r = Yn(r), i === n ? (i = r, r = 0) : i = Yn(i)), r > i) {
          var h = r;
          r = i, i = h;
        }
        if (a || r % 1 || i % 1) {
          var y = ff();
          return At(r + y * (i - r + gx("1e-" + ((y + "").length - 1))), i);
        }
        return jl(r, i);
      }
      var FC = Ei(function(r, i, a) {
        return i = i.toLowerCase(), r + (a ? Uh(i) : i);
      });
      function Uh(r) {
        return sc($e(r).toLowerCase());
      }
      function Hh(r) {
        return r = $e(r), r && r.replace(st, Rx).replace(sx, "");
      }
      function BC(r, i, a) {
        r = $e(r), i = qt(i);
        var h = r.length;
        a = a === n ? h : Xr(ye(a), 0, h);
        var y = a;
        return a -= i.length, a >= 0 && r.slice(a, y) == i;
      }
      function WC(r) {
        return r = $e(r), r && Pt.test(r) ? r.replace(je, Nx) : r;
      }
      function $C(r) {
        return r = $e(r), r && Zo.test(r) ? r.replace(no, "\\$&") : r;
      }
      var UC = Ei(function(r, i, a) {
        return r + (a ? "-" : "") + i.toLowerCase();
      }), HC = Ei(function(r, i, a) {
        return r + (a ? " " : "") + i.toLowerCase();
      }), zC = Kf("toLowerCase");
      function GC(r, i, a) {
        r = $e(r), i = ye(i);
        var h = i ? wi(r) : 0;
        if (!i || h >= i)
          return r;
        var y = (i - h) / 2;
        return _s(hs(y), a) + r + _s(fs(y), a);
      }
      function KC(r, i, a) {
        r = $e(r), i = ye(i);
        var h = i ? wi(r) : 0;
        return i && h < i ? r + _s(i - h, a) : r;
      }
      function YC(r, i, a) {
        r = $e(r), i = ye(i);
        var h = i ? wi(r) : 0;
        return i && h < i ? _s(i - h, a) + r : r;
      }
      function qC(r, i, a) {
        return a || i == null ? i = 0 : i && (i = +i), nb($e(r).replace(vi, ""), i || 0);
      }
      function XC(r, i, a) {
        return (a ? It(r, i, a) : i === n) ? i = 1 : i = ye(i), Dl($e(r), i);
      }
      function ZC() {
        var r = arguments, i = $e(r[0]);
        return r.length < 3 ? i : i.replace(r[1], r[2]);
      }
      var JC = Ei(function(r, i, a) {
        return r + (a ? "_" : "") + i.toLowerCase();
      });
      function QC(r, i, a) {
        return a && typeof a != "number" && It(r, i, a) && (i = a = n), a = a === n ? Ee : a >>> 0, a ? (r = $e(r), r && (typeof i == "string" || i != null && !rc(i)) && (i = qt(i), !i && bi(r)) ? vr(yn(r), 0, a) : r.split(i, a)) : [];
      }
      var eT = Ei(function(r, i, a) {
        return r + (a ? " " : "") + sc(i);
      });
      function tT(r, i, a) {
        return r = $e(r), a = a == null ? 0 : Xr(ye(a), 0, r.length), i = qt(i), r.slice(a, a + i.length) == i;
      }
      function nT(r, i, a) {
        var h = b.templateSettings;
        a && It(r, i, a) && (i = n), r = $e(r), i = Vs({}, i, h, eh);
        var y = Vs({}, i.imports, h.imports, eh), C = vt(y), A = vl(y, C), M, I, V = 0, F = i.interpolate || xt, B = "__p += '", K = xl(
          (i.escape || xt).source + "|" + F.source + "|" + (F === gi ? de : xt).source + "|" + (i.evaluate || xt).source + "|$",
          "g"
        ), ee = "//# sourceURL=" + (ze.call(i, "sourceURL") ? (i.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++dx + "]") + `
`;
        r.replace(K, function(ce, Ne, De, Zt, kt, Jt) {
          return De || (De = Zt), B += r.slice(V, Jt).replace(cr, Mx), Ne && (M = !0, B += `' +
__e(` + Ne + `) +
'`), kt && (I = !0, B += `';
` + kt + `;
__p += '`), De && (B += `' +
((__t = (` + De + `)) == null ? '' : __t) +
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
        B = (I ? B.replace(zr, "") : B).replace(Ft, "$1").replace(mi, "$1;"), B = "function(" + (le || "obj") + `) {
` + (le ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (M ? ", __e = _.escape" : "") + (I ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + B + `return __p
}`;
        var we = Gh(function() {
          return Fe(C, ee + "return " + B).apply(n, A);
        });
        if (we.source = B, nc(we))
          throw we;
        return we;
      }
      function rT(r) {
        return $e(r).toLowerCase();
      }
      function iT(r) {
        return $e(r).toUpperCase();
      }
      function oT(r, i, a) {
        if (r = $e(r), r && (a || i === n))
          return ef(r);
        if (!r || !(i = qt(i)))
          return r;
        var h = yn(r), y = yn(i), C = tf(h, y), A = nf(h, y) + 1;
        return vr(h, C, A).join("");
      }
      function sT(r, i, a) {
        if (r = $e(r), r && (a || i === n))
          return r.slice(0, of(r) + 1);
        if (!r || !(i = qt(i)))
          return r;
        var h = yn(r), y = nf(h, yn(i)) + 1;
        return vr(h, 0, y).join("");
      }
      function aT(r, i, a) {
        if (r = $e(r), r && (a || i === n))
          return r.replace(vi, "");
        if (!r || !(i = qt(i)))
          return r;
        var h = yn(r), y = tf(h, yn(i));
        return vr(h, y).join("");
      }
      function lT(r, i) {
        var a = re, h = fe;
        if (it(i)) {
          var y = "separator" in i ? i.separator : y;
          a = "length" in i ? ye(i.length) : a, h = "omission" in i ? qt(i.omission) : h;
        }
        r = $e(r);
        var C = r.length;
        if (bi(r)) {
          var A = yn(r);
          C = A.length;
        }
        if (a >= C)
          return r;
        var M = a - wi(h);
        if (M < 1)
          return h;
        var I = A ? vr(A, 0, M).join("") : r.slice(0, M);
        if (y === n)
          return I + h;
        if (A && (M += I.length - M), rc(y)) {
          if (r.slice(M).search(y)) {
            var V, F = I;
            for (y.global || (y = xl(y.source, $e(Ie.exec(y)) + "g")), y.lastIndex = 0; V = y.exec(F); )
              var B = V.index;
            I = I.slice(0, B === n ? M : B);
          }
        } else if (r.indexOf(qt(y), M) != M) {
          var K = I.lastIndexOf(y);
          K > -1 && (I = I.slice(0, K));
        }
        return I + h;
      }
      function cT(r) {
        return r = $e(r), r && We.test(r) ? r.replace(oe, Vx) : r;
      }
      var uT = Ei(function(r, i, a) {
        return r + (a ? " " : "") + i.toUpperCase();
      }), sc = Kf("toUpperCase");
      function zh(r, i, a) {
        return r = $e(r), i = a ? n : i, i === n ? jx(r) ? Wx(r) : Tx(r) : r.match(i) || [];
      }
      var Gh = Ce(function(r, i) {
        try {
          return Kt(r, n, i);
        } catch (a) {
          return nc(a) ? a : new he(a);
        }
      }), dT = zn(function(r, i) {
        return ln(i, function(a) {
          a = Dn(a), Un(r, a, ec(r[a], r));
        }), r;
      });
      function fT(r) {
        var i = r == null ? 0 : r.length, a = ae();
        return r = i ? tt(r, function(h) {
          if (typeof h[1] != "function")
            throw new cn(l);
          return [a(h[0]), h[1]];
        }) : [], Ce(function(h) {
          for (var y = -1; ++y < i; ) {
            var C = r[y];
            if (Kt(C[0], this, h))
              return Kt(C[1], this, h);
          }
        });
      }
      function hT(r) {
        return Vb(dn(r, v));
      }
      function ac(r) {
        return function() {
          return r;
        };
      }
      function pT(r, i) {
        return r == null || r !== r ? i : r;
      }
      var mT = qf(), gT = qf(!0);
      function Ht(r) {
        return r;
      }
      function lc(r) {
        return Pf(typeof r == "function" ? r : dn(r, v));
      }
      function vT(r) {
        return Af(dn(r, v));
      }
      function yT(r, i) {
        return Ef(r, dn(i, v));
      }
      var xT = Ce(function(r, i) {
        return function(a) {
          return ho(a, r, i);
        };
      }), bT = Ce(function(r, i) {
        return function(a) {
          return ho(r, a, i);
        };
      });
      function cc(r, i, a) {
        var h = vt(i), y = xs(i, h);
        a == null && !(it(i) && (y.length || !h.length)) && (a = i, i = r, r = this, y = xs(i, vt(i)));
        var C = !(it(a) && "chain" in a) || !!a.chain, A = Kn(r);
        return ln(y, function(M) {
          var I = i[M];
          r[M] = I, A && (r.prototype[M] = function() {
            var V = this.__chain__;
            if (C || V) {
              var F = r(this.__wrapped__), B = F.__actions__ = Wt(this.__actions__);
              return B.push({ func: I, args: arguments, thisArg: r }), F.__chain__ = V, F;
            }
            return I.apply(r, dr([this.value()], arguments));
          });
        }), r;
      }
      function wT() {
        return bt._ === this && (bt._ = Kx), this;
      }
      function uc() {
      }
      function ST(r) {
        return r = ye(r), Ce(function(i) {
          return Rf(i, r);
        });
      }
      var CT = Wl(tt), TT = Wl(qd), PT = Wl(fl);
      function Kh(r) {
        return Yl(r) ? hl(Dn(r)) : tw(r);
      }
      function _T(r) {
        return function(i) {
          return r == null ? n : Zr(r, i);
        };
      }
      var AT = Zf(), ET = Zf(!0);
      function dc() {
        return [];
      }
      function fc() {
        return !1;
      }
      function RT() {
        return {};
      }
      function NT() {
        return "";
      }
      function MT() {
        return !0;
      }
      function OT(r, i) {
        if (r = ye(r), r < 1 || r > q)
          return [];
        var a = Ee, h = At(r, Ee);
        i = ae(i), r -= Ee;
        for (var y = gl(h, i); ++a < r; )
          i(a);
        return y;
      }
      function jT(r) {
        return me(r) ? tt(r, Dn) : Xt(r) ? [r] : Wt(hh($e(r)));
      }
      function DT(r) {
        var i = ++zx;
        return $e(r) + i;
      }
      var IT = Ps(function(r, i) {
        return r + i;
      }, 0), kT = $l("ceil"), LT = Ps(function(r, i) {
        return r / i;
      }, 1), VT = $l("floor");
      function FT(r) {
        return r && r.length ? ys(r, Ht, Al) : n;
      }
      function BT(r, i) {
        return r && r.length ? ys(r, ae(i, 2), Al) : n;
      }
      function WT(r) {
        return Jd(r, Ht);
      }
      function $T(r, i) {
        return Jd(r, ae(i, 2));
      }
      function UT(r) {
        return r && r.length ? ys(r, Ht, Ml) : n;
      }
      function HT(r, i) {
        return r && r.length ? ys(r, ae(i, 2), Ml) : n;
      }
      var zT = Ps(function(r, i) {
        return r * i;
      }, 1), GT = $l("round"), KT = Ps(function(r, i) {
        return r - i;
      }, 0);
      function YT(r) {
        return r && r.length ? ml(r, Ht) : 0;
      }
      function qT(r, i) {
        return r && r.length ? ml(r, ae(i, 2)) : 0;
      }
      return b.after = vS, b.ary = Th, b.assign = iC, b.assignIn = Vh, b.assignInWith = Vs, b.assignWith = oC, b.at = sC, b.before = Ph, b.bind = ec, b.bindAll = dT, b.bindKey = _h, b.castArray = RS, b.chain = wh, b.chunk = Vw, b.compact = Fw, b.concat = Bw, b.cond = fT, b.conforms = hT, b.constant = ac, b.countBy = Y1, b.create = aC, b.curry = Ah, b.curryRight = Eh, b.debounce = Rh, b.defaults = lC, b.defaultsDeep = cC, b.defer = yS, b.delay = xS, b.difference = Ww, b.differenceBy = $w, b.differenceWith = Uw, b.drop = Hw, b.dropRight = zw, b.dropRightWhile = Gw, b.dropWhile = Kw, b.fill = Yw, b.filter = X1, b.flatMap = Q1, b.flatMapDeep = eS, b.flatMapDepth = tS, b.flatten = vh, b.flattenDeep = qw, b.flattenDepth = Xw, b.flip = bS, b.flow = mT, b.flowRight = gT, b.fromPairs = Zw, b.functions = gC, b.functionsIn = vC, b.groupBy = nS, b.initial = Qw, b.intersection = e1, b.intersectionBy = t1, b.intersectionWith = n1, b.invert = xC, b.invertBy = bC, b.invokeMap = iS, b.iteratee = lc, b.keyBy = oS, b.keys = vt, b.keysIn = Ut, b.map = Os, b.mapKeys = SC, b.mapValues = CC, b.matches = vT, b.matchesProperty = yT, b.memoize = Ds, b.merge = TC, b.mergeWith = Fh, b.method = xT, b.methodOf = bT, b.mixin = cc, b.negate = Is, b.nthArg = ST, b.omit = PC, b.omitBy = _C, b.once = wS, b.orderBy = sS, b.over = CT, b.overArgs = SS, b.overEvery = TT, b.overSome = PT, b.partial = tc, b.partialRight = Nh, b.partition = aS, b.pick = AC, b.pickBy = Bh, b.property = Kh, b.propertyOf = _T, b.pull = s1, b.pullAll = xh, b.pullAllBy = a1, b.pullAllWith = l1, b.pullAt = c1, b.range = AT, b.rangeRight = ET, b.rearg = CS, b.reject = uS, b.remove = u1, b.rest = TS, b.reverse = Jl, b.sampleSize = fS, b.set = RC, b.setWith = NC, b.shuffle = hS, b.slice = d1, b.sortBy = gS, b.sortedUniq = y1, b.sortedUniqBy = x1, b.split = QC, b.spread = PS, b.tail = b1, b.take = w1, b.takeRight = S1, b.takeRightWhile = C1, b.takeWhile = T1, b.tap = F1, b.throttle = _S, b.thru = Ms, b.toArray = Ih, b.toPairs = Wh, b.toPairsIn = $h, b.toPath = jT, b.toPlainObject = Lh, b.transform = MC, b.unary = AS, b.union = P1, b.unionBy = _1, b.unionWith = A1, b.uniq = E1, b.uniqBy = R1, b.uniqWith = N1, b.unset = OC, b.unzip = Ql, b.unzipWith = bh, b.update = jC, b.updateWith = DC, b.values = Mi, b.valuesIn = IC, b.without = M1, b.words = zh, b.wrap = ES, b.xor = O1, b.xorBy = j1, b.xorWith = D1, b.zip = I1, b.zipObject = k1, b.zipObjectDeep = L1, b.zipWith = V1, b.entries = Wh, b.entriesIn = $h, b.extend = Vh, b.extendWith = Vs, cc(b, b), b.add = IT, b.attempt = Gh, b.camelCase = FC, b.capitalize = Uh, b.ceil = kT, b.clamp = kC, b.clone = NS, b.cloneDeep = OS, b.cloneDeepWith = jS, b.cloneWith = MS, b.conformsTo = DS, b.deburr = Hh, b.defaultTo = pT, b.divide = LT, b.endsWith = BC, b.eq = bn, b.escape = WC, b.escapeRegExp = $C, b.every = q1, b.find = Z1, b.findIndex = mh, b.findKey = uC, b.findLast = J1, b.findLastIndex = gh, b.findLastKey = dC, b.floor = VT, b.forEach = Sh, b.forEachRight = Ch, b.forIn = fC, b.forInRight = hC, b.forOwn = pC, b.forOwnRight = mC, b.get = ic, b.gt = IS, b.gte = kS, b.has = yC, b.hasIn = oc, b.head = yh, b.identity = Ht, b.includes = rS, b.indexOf = Jw, b.inRange = LC, b.invoke = wC, b.isArguments = ei, b.isArray = me, b.isArrayBuffer = LS, b.isArrayLike = $t, b.isArrayLikeObject = ut, b.isBoolean = VS, b.isBuffer = yr, b.isDate = FS, b.isElement = BS, b.isEmpty = WS, b.isEqual = $S, b.isEqualWith = US, b.isError = nc, b.isFinite = HS, b.isFunction = Kn, b.isInteger = Mh, b.isLength = ks, b.isMap = Oh, b.isMatch = zS, b.isMatchWith = GS, b.isNaN = KS, b.isNative = YS, b.isNil = XS, b.isNull = qS, b.isNumber = jh, b.isObject = it, b.isObjectLike = at, b.isPlainObject = xo, b.isRegExp = rc, b.isSafeInteger = ZS, b.isSet = Dh, b.isString = Ls, b.isSymbol = Xt, b.isTypedArray = Ni, b.isUndefined = JS, b.isWeakMap = QS, b.isWeakSet = eC, b.join = r1, b.kebabCase = UC, b.last = hn, b.lastIndexOf = i1, b.lowerCase = HC, b.lowerFirst = zC, b.lt = tC, b.lte = nC, b.max = FT, b.maxBy = BT, b.mean = WT, b.meanBy = $T, b.min = UT, b.minBy = HT, b.stubArray = dc, b.stubFalse = fc, b.stubObject = RT, b.stubString = NT, b.stubTrue = MT, b.multiply = zT, b.nth = o1, b.noConflict = wT, b.noop = uc, b.now = js, b.pad = GC, b.padEnd = KC, b.padStart = YC, b.parseInt = qC, b.random = VC, b.reduce = lS, b.reduceRight = cS, b.repeat = XC, b.replace = ZC, b.result = EC, b.round = GT, b.runInContext = j, b.sample = dS, b.size = pS, b.snakeCase = JC, b.some = mS, b.sortedIndex = f1, b.sortedIndexBy = h1, b.sortedIndexOf = p1, b.sortedLastIndex = m1, b.sortedLastIndexBy = g1, b.sortedLastIndexOf = v1, b.startCase = eT, b.startsWith = tT, b.subtract = KT, b.sum = YT, b.sumBy = qT, b.template = nT, b.times = OT, b.toFinite = Yn, b.toInteger = ye, b.toLength = kh, b.toLower = rT, b.toNumber = pn, b.toSafeInteger = rC, b.toString = $e, b.toUpper = iT, b.trim = oT, b.trimEnd = sT, b.trimStart = aT, b.truncate = lT, b.unescape = cT, b.uniqueId = DT, b.upperCase = uT, b.upperFirst = sc, b.each = Sh, b.eachRight = Ch, b.first = yh, cc(b, function() {
        var r = {};
        return On(b, function(i, a) {
          ze.call(b.prototype, a) || (r[a] = i);
        }), r;
      }(), { chain: !1 }), b.VERSION = o, ln(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(r) {
        b[r].placeholder = b;
      }), ln(["drop", "take"], function(r, i) {
        Oe.prototype[r] = function(a) {
          a = a === n ? 1 : gt(ye(a), 0);
          var h = this.__filtered__ && !i ? new Oe(this) : this.clone();
          return h.__filtered__ ? h.__takeCount__ = At(a, h.__takeCount__) : h.__views__.push({
            size: At(a, Ee),
            type: r + (h.__dir__ < 0 ? "Right" : "")
          }), h;
        }, Oe.prototype[r + "Right"] = function(a) {
          return this.reverse()[r](a).reverse();
        };
      }), ln(["filter", "map", "takeWhile"], function(r, i) {
        var a = i + 1, h = a == ne || a == ie;
        Oe.prototype[r] = function(y) {
          var C = this.clone();
          return C.__iteratees__.push({
            iteratee: ae(y, 3),
            type: a
          }), C.__filtered__ = C.__filtered__ || h, C;
        };
      }), ln(["head", "last"], function(r, i) {
        var a = "take" + (i ? "Right" : "");
        Oe.prototype[r] = function() {
          return this[a](1).value()[0];
        };
      }), ln(["initial", "tail"], function(r, i) {
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
          return ho(a, r, i);
        });
      }), Oe.prototype.reject = function(r) {
        return this.filter(Is(ae(r)));
      }, Oe.prototype.slice = function(r, i) {
        r = ye(r);
        var a = this;
        return a.__filtered__ && (r > 0 || i < 0) ? new Oe(a) : (r < 0 ? a = a.takeRight(-r) : r && (a = a.drop(r)), i !== n && (i = ye(i), a = i < 0 ? a.dropRight(-i) : a.take(i - r)), a);
      }, Oe.prototype.takeRightWhile = function(r) {
        return this.reverse().takeWhile(r).reverse();
      }, Oe.prototype.toArray = function() {
        return this.take(Ee);
      }, On(Oe.prototype, function(r, i) {
        var a = /^(?:filter|find|map|reject)|While$/.test(i), h = /^(?:head|last)$/.test(i), y = b[h ? "take" + (i == "last" ? "Right" : "") : i], C = h || /^find/.test(i);
        y && (b.prototype[i] = function() {
          var A = this.__wrapped__, M = h ? [1] : arguments, I = A instanceof Oe, V = M[0], F = I || me(A), B = function(Ne) {
            var De = y.apply(b, dr([Ne], M));
            return h && K ? De[0] : De;
          };
          F && a && typeof V == "function" && V.length != 1 && (I = F = !1);
          var K = this.__chain__, ee = !!this.__actions__.length, le = C && !K, we = I && !ee;
          if (!C && F) {
            A = we ? A : new Oe(this);
            var ce = r.apply(A, M);
            return ce.__actions__.push({ func: Ms, args: [B], thisArg: n }), new un(ce, K);
          }
          return le && we ? r.apply(this, M) : (ce = this.thru(B), le ? h ? ce.value()[0] : ce.value() : ce);
        });
      }), ln(["pop", "push", "shift", "sort", "splice", "unshift"], function(r) {
        var i = rs[r], a = /^(?:push|sort|unshift)$/.test(r) ? "tap" : "thru", h = /^(?:pop|shift)$/.test(r);
        b.prototype[r] = function() {
          var y = arguments;
          if (h && !this.__chain__) {
            var C = this.value();
            return i.apply(me(C) ? C : [], y);
          }
          return this[a](function(A) {
            return i.apply(me(A) ? A : [], y);
          });
        };
      }), On(Oe.prototype, function(r, i) {
        var a = b[i];
        if (a) {
          var h = a.name + "";
          ze.call(Pi, h) || (Pi[h] = []), Pi[h].push({ name: i, func: a });
        }
      }), Pi[Ts(n, _).name] = [{
        name: "wrapper",
        func: n
      }], Oe.prototype.clone = cb, Oe.prototype.reverse = ub, Oe.prototype.value = db, b.prototype.at = B1, b.prototype.chain = W1, b.prototype.commit = $1, b.prototype.next = U1, b.prototype.plant = z1, b.prototype.reverse = G1, b.prototype.toJSON = b.prototype.valueOf = b.prototype.value = K1, b.prototype.first = b.prototype.head, oo && (b.prototype[oo] = H1), b;
    }, Si = $x();
    Gr ? ((Gr.exports = Si)._ = Si, ll._ = Si) : bt._ = Si;
  }).call(bo);
})(ia, ia.exports);
var nP = ia.exports;
const rP = /* @__PURE__ */ QT(nP);
function iP(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function Ym(...e) {
  return (t) => e.forEach((n) => iP(n, t));
}
function nt(...e) {
  return w.useCallback(Ym(...e), e);
}
var li = w.forwardRef((e, t) => {
  const { children: n, ...o } = e, s = w.Children.toArray(n), c = s.find(oP);
  if (c) {
    const l = c.props.children, u = s.map((d) => d === c ? w.Children.count(l) > 1 ? w.Children.only(null) : w.isValidElement(l) ? l.props.children : null : d);
    return /* @__PURE__ */ p.jsx(Vc, { ...o, ref: t, children: w.isValidElement(l) ? w.cloneElement(l, void 0, u) : null });
  }
  return /* @__PURE__ */ p.jsx(Vc, { ...o, ref: t, children: n });
});
li.displayName = "Slot";
var Vc = w.forwardRef((e, t) => {
  const { children: n, ...o } = e;
  if (w.isValidElement(n)) {
    const s = aP(n);
    return w.cloneElement(n, {
      ...sP(o, n.props),
      // @ts-ignore
      ref: t ? Ym(t, s) : s
    });
  }
  return w.Children.count(n) > 1 ? w.Children.only(null) : null;
});
Vc.displayName = "SlotClone";
var qm = ({ children: e }) => /* @__PURE__ */ p.jsx(p.Fragment, { children: e });
function oP(e) {
  return w.isValidElement(e) && e.type === qm;
}
function sP(e, t) {
  const n = { ...t };
  for (const o in t) {
    const s = e[o], c = t[o];
    /^on[A-Z]/.test(o) ? s && c ? n[o] = (...u) => {
      c(...u), s(...u);
    } : s && (n[o] = s) : o === "style" ? n[o] = { ...s, ...c } : o === "className" && (n[o] = [s, c].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function aP(e) {
  var o, s;
  let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (s = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : s.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function Xm(e) {
  var t, n, o = "";
  if (typeof e == "string" || typeof e == "number")
    o += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = Xm(e[t])) && (o && (o += " "), o += n);
    else
      for (t in e)
        e[t] && (o && (o += " "), o += t);
  return o;
}
function lP() {
  for (var e, t, n = 0, o = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = Xm(e)) && (o && (o += " "), o += t);
  return o;
}
const Zh = (e) => typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e, Jh = lP, yu = (e, t) => (n) => {
  var o;
  if ((t == null ? void 0 : t.variants) == null)
    return Jh(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: s, defaultVariants: c } = t, l = Object.keys(s).map((f) => {
    const m = n == null ? void 0 : n[f], v = c == null ? void 0 : c[f];
    if (m === null)
      return null;
    const x = Zh(m) || Zh(v);
    return s[f][x];
  }), u = n && Object.entries(n).reduce((f, m) => {
    let [v, x] = m;
    return x === void 0 || (f[v] = x), f;
  }, {}), d = t == null || (o = t.compoundVariants) === null || o === void 0 ? void 0 : o.reduce((f, m) => {
    let { class: v, className: x, ...g } = m;
    return Object.entries(g).every((T) => {
      let [S, P] = T;
      return Array.isArray(P) ? P.includes({
        ...c,
        ...u
      }[S]) : {
        ...c,
        ...u
      }[S] === P;
    }) ? [
      ...f,
      v,
      x
    ] : f;
  }, []);
  return Jh(e, l, d, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
};
function Zm(e) {
  var t, n, o = "";
  if (typeof e == "string" || typeof e == "number")
    o += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var s = e.length;
      for (t = 0; t < s; t++)
        e[t] && (n = Zm(e[t])) && (o && (o += " "), o += n);
    } else
      for (n in e)
        e[n] && (o && (o += " "), o += n);
  return o;
}
function cP() {
  for (var e, t, n = 0, o = "", s = arguments.length; n < s; n++)
    (e = arguments[n]) && (t = Zm(e)) && (o && (o += " "), o += t);
  return o;
}
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uP = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Jm = (...e) => e.filter((t, n, o) => !!t && t.trim() !== "" && o.indexOf(t) === n).join(" ").trim();
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var dP = {
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
const fP = Sa(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: c,
    iconNode: l,
    ...u
  }, d) => ra(
    "svg",
    {
      ref: d,
      ...dP,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: o ? Number(n) * 24 / Number(t) : n,
      className: Jm("lucide", s),
      ...u
    },
    [
      ...l.map(([f, m]) => ra(f, m)),
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
const Qe = (e, t) => {
  const n = Sa(
    ({ className: o, ...s }, c) => ra(fP, {
      ref: c,
      iconNode: t,
      className: Jm(`lucide-${uP(e)}`, o),
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
const hP = Qe("Award", [
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
const pP = Qe("Calendar", [
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
const Uo = Qe("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ta = Qe("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mP = Qe("ChevronUp", [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gP = Qe("CircleCheckBig", [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jo = Qe("CircleHelp", [
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
const vP = Qe("Crosshair", [
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
const Qm = Qe("ExternalLink", [
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
const Qh = Qe("FileText", [
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
const yP = Qe("Info", [
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
const xP = Qe("Lightbulb", [
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
const Fc = Qe("ListTodo", [
  ["rect", { x: "3", y: "5", width: "6", height: "6", rx: "1", key: "1defrl" }],
  ["path", { d: "m3 17 2 2 4-4", key: "1jhpwq" }],
  ["path", { d: "M13 6h8", key: "15sg57" }],
  ["path", { d: "M13 12h8", key: "h98zly" }],
  ["path", { d: "M13 18h8", key: "oe0vm4" }]
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const eg = Qe("Mail", [
  ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }]
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bP = Qe("Pen", [
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
const tg = Qe("Phone", [
  [
    "path",
    {
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
      key: "foiqr5"
    }
  ]
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ng = Qe("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ep = Qe("Settings", [
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
const wP = Qe("Target", [
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
const SP = Qe("Trash2", [
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
const Bc = Qe("TriangleAlert", [
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
const CP = Qe("User", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const TP = Qe("Users", [
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
const rg = Qe("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const PP = Qe("Zap", [
  [
    "path",
    {
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
      key: "1xq2db"
    }
  ]
]), xu = "-", _P = (e) => {
  const t = EP(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: o
  } = e;
  return {
    getClassGroupId: (l) => {
      const u = l.split(xu);
      return u[0] === "" && u.length !== 1 && u.shift(), ig(u, t) || AP(l);
    },
    getConflictingClassGroupIds: (l, u) => {
      const d = n[l] || [];
      return u && o[l] ? [...d, ...o[l]] : d;
    }
  };
}, ig = (e, t) => {
  var l;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], o = t.nextPart.get(n), s = o ? ig(e.slice(1), o) : void 0;
  if (s)
    return s;
  if (t.validators.length === 0)
    return;
  const c = e.join(xu);
  return (l = t.validators.find(({
    validator: u
  }) => u(c))) == null ? void 0 : l.classGroupId;
}, tp = /^\[(.+)\]$/, AP = (e) => {
  if (tp.test(e)) {
    const t = tp.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, EP = (e) => {
  const {
    theme: t,
    prefix: n
  } = e, o = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return NP(Object.entries(e.classGroups), n).forEach(([c, l]) => {
    Wc(l, o, c, t);
  }), o;
}, Wc = (e, t, n, o) => {
  e.forEach((s) => {
    if (typeof s == "string") {
      const c = s === "" ? t : np(t, s);
      c.classGroupId = n;
      return;
    }
    if (typeof s == "function") {
      if (RP(s)) {
        Wc(s(o), t, n, o);
        return;
      }
      t.validators.push({
        validator: s,
        classGroupId: n
      });
      return;
    }
    Object.entries(s).forEach(([c, l]) => {
      Wc(l, np(t, c), n, o);
    });
  });
}, np = (e, t) => {
  let n = e;
  return t.split(xu).forEach((o) => {
    n.nextPart.has(o) || n.nextPart.set(o, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(o);
  }), n;
}, RP = (e) => e.isThemeGetter, NP = (e, t) => t ? e.map(([n, o]) => {
  const s = o.map((c) => typeof c == "string" ? t + c : typeof c == "object" ? Object.fromEntries(Object.entries(c).map(([l, u]) => [t + l, u])) : c);
  return [n, s];
}) : e, MP = (e) => {
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
}, og = "!", OP = (e) => {
  const {
    separator: t,
    experimentalParseClassName: n
  } = e, o = t.length === 1, s = t[0], c = t.length, l = (u) => {
    const d = [];
    let f = 0, m = 0, v;
    for (let P = 0; P < u.length; P++) {
      let _ = u[P];
      if (f === 0) {
        if (_ === s && (o || u.slice(P, P + c) === t)) {
          d.push(u.slice(m, P)), m = P + c;
          continue;
        }
        if (_ === "/") {
          v = P;
          continue;
        }
      }
      _ === "[" ? f++ : _ === "]" && f--;
    }
    const x = d.length === 0 ? u : u.substring(m), g = x.startsWith(og), T = g ? x.substring(1) : x, S = v && v > m ? v - m : void 0;
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
}, jP = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let n = [];
  return e.forEach((o) => {
    o[0] === "[" ? (t.push(...n.sort(), o), n = []) : n.push(o);
  }), t.push(...n.sort()), t;
}, DP = (e) => ({
  cache: MP(e.cacheSize),
  parseClassName: OP(e),
  ..._P(e)
}), IP = /\s+/, kP = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: o,
    getConflictingClassGroupIds: s
  } = t, c = [], l = e.trim().split(IP);
  let u = "";
  for (let d = l.length - 1; d >= 0; d -= 1) {
    const f = l[d], {
      modifiers: m,
      hasImportantModifier: v,
      baseClassName: x,
      maybePostfixModifierPosition: g
    } = n(f);
    let T = !!g, S = o(T ? x.substring(0, g) : x);
    if (!S) {
      if (!T) {
        u = f + (u.length > 0 ? " " + u : u);
        continue;
      }
      if (S = o(x), !S) {
        u = f + (u.length > 0 ? " " + u : u);
        continue;
      }
      T = !1;
    }
    const P = jP(m).join(":"), _ = v ? P + og : P, E = _ + S;
    if (c.includes(E))
      continue;
    c.push(E);
    const O = s(S, T);
    for (let N = 0; N < O.length; ++N) {
      const D = O[N];
      c.push(_ + D);
    }
    u = f + (u.length > 0 ? " " + u : u);
  }
  return u;
};
function LP() {
  let e = 0, t, n, o = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = sg(t)) && (o && (o += " "), o += n);
  return o;
}
const sg = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let o = 0; o < e.length; o++)
    e[o] && (t = sg(e[o])) && (n && (n += " "), n += t);
  return n;
};
function VP(e, ...t) {
  let n, o, s, c = l;
  function l(d) {
    const f = t.reduce((m, v) => v(m), e());
    return n = DP(f), o = n.cache.get, s = n.cache.set, c = u, u(d);
  }
  function u(d) {
    const f = o(d);
    if (f)
      return f;
    const m = kP(d, n);
    return s(d, m), m;
  }
  return function() {
    return c(LP.apply(null, arguments));
  };
}
const Je = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, ag = /^\[(?:([a-z-]+):)?(.+)\]$/i, FP = /^\d+\/\d+$/, BP = /* @__PURE__ */ new Set(["px", "full", "screen"]), WP = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, $P = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, UP = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, HP = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, zP = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Xn = (e) => Bi(e) || BP.has(e) || FP.test(e), xr = (e) => qi(e, "length", QP), Bi = (e) => !!e && !Number.isNaN(Number(e)), hc = (e) => qi(e, "number", Bi), Co = (e) => !!e && Number.isInteger(Number(e)), GP = (e) => e.endsWith("%") && Bi(e.slice(0, -1)), xe = (e) => ag.test(e), br = (e) => WP.test(e), KP = /* @__PURE__ */ new Set(["length", "size", "percentage"]), YP = (e) => qi(e, KP, lg), qP = (e) => qi(e, "position", lg), XP = /* @__PURE__ */ new Set(["image", "url"]), ZP = (e) => qi(e, XP, t_), JP = (e) => qi(e, "", e_), To = () => !0, qi = (e, t, n) => {
  const o = ag.exec(e);
  return o ? o[1] ? typeof t == "string" ? o[1] === t : t.has(o[1]) : n(o[2]) : !1;
}, QP = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  $P.test(e) && !UP.test(e)
), lg = () => !1, e_ = (e) => HP.test(e), t_ = (e) => zP.test(e), n_ = () => {
  const e = Je("colors"), t = Je("spacing"), n = Je("blur"), o = Je("brightness"), s = Je("borderColor"), c = Je("borderRadius"), l = Je("borderSpacing"), u = Je("borderWidth"), d = Je("contrast"), f = Je("grayscale"), m = Je("hueRotate"), v = Je("invert"), x = Je("gap"), g = Je("gradientColorStops"), T = Je("gradientColorStopPositions"), S = Je("inset"), P = Je("margin"), _ = Je("opacity"), E = Je("padding"), O = Je("saturate"), N = Je("scale"), D = Je("sepia"), W = Je("skew"), $ = Je("space"), H = Je("translate"), te = () => ["auto", "contain", "none"], re = () => ["auto", "hidden", "clip", "visible", "scroll"], fe = () => ["auto", xe, t], J = () => [xe, t], se = () => ["", Xn, xr], ne = () => ["auto", Bi, xe], Te = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], ie = () => ["solid", "dashed", "dotted", "double", "none"], Z = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], q = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], G = () => ["", "0", xe], pe = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], Ee = () => [Bi, xe];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [To],
      spacing: [Xn, xr],
      blur: ["none", "", br, xe],
      brightness: Ee(),
      borderColor: [e],
      borderRadius: ["none", "", "full", br, xe],
      borderSpacing: J(),
      borderWidth: se(),
      contrast: Ee(),
      grayscale: G(),
      hueRotate: Ee(),
      invert: G(),
      gap: J(),
      gradientColorStops: [e],
      gradientColorStopPositions: [GP, xr],
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
        columns: [br]
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
        z: ["auto", Co, xe]
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
        order: ["first", "last", "none", Co, xe]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [To]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Co, xe]
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
        "grid-rows": [To]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Co, xe]
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
        m: [P]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [P]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [P]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [P]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [P]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [P]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [P]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [P]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [P]
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
          screen: [br]
        }, br]
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
        text: ["base", br, xr]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", hc]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [To]
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
        "line-clamp": ["none", Bi, hc]
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
        "placeholder-opacity": [_]
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
        "text-opacity": [_]
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
        decoration: ["auto", "from-font", Xn, xr]
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
        "bg-opacity": [_]
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
        bg: [...Te(), qP]
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
        bg: ["auto", "cover", "contain", YP]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, ZP]
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
        "border-opacity": [_]
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
        "divide-opacity": [_]
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
        outline: [Xn, xr]
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
        "ring-opacity": [_]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [Xn, xr]
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
        shadow: ["", "inner", "none", br, JP]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [To]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [_]
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
        "drop-shadow": ["", "none", br, xe]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [f]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [m]
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
        sepia: [D]
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
        "backdrop-grayscale": [f]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [m]
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
        "backdrop-opacity": [_]
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
        "backdrop-sepia": [D]
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
        rotate: [Co, xe]
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
        stroke: [Xn, xr, hc]
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
}, r_ = /* @__PURE__ */ VP(n_);
function Ue(...e) {
  return r_(cP(e));
}
function i_(e) {
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
function o_(e) {
  switch (e) {
    case "metrics":
      return wP;
    case "economicBuyer":
      return CP;
    case "decisionCriteria":
      return Qh;
    case "decisionProcess":
      return TP;
    case "paperProcess":
      return Qh;
    case "identifyPain":
      return PP;
    case "champion":
      return hP;
    case "competition":
      return vP;
    default:
      return null;
  }
}
const s_ = yu(
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
), Xe = w.forwardRef(
  ({ className: e, variant: t, size: n, asChild: o = !1, ...s }, c) => {
    const l = o ? li : "button";
    return /* @__PURE__ */ p.jsx(
      l,
      {
        className: Ue(s_({ variant: t, size: n, className: e })),
        ref: c,
        ...s
      }
    );
  }
);
Xe.displayName = "Button";
const a_ = "_counter_1wts1_1", l_ = "_header_1wts1_10", c_ = "_button_1wts1_16", pc = {
  counter: a_,
  header: l_,
  button: c_
}, u_ = (e) => {
  const [t, n] = tn(e);
  return {
    count: t,
    incrementCount: () => n(t + 1)
  };
}, { throttle: d_ } = rP, mD = ({ initialValue: e = 0 }) => {
  const { count: t, incrementCount: n } = u_(e);
  return Wo(() => {
    d_(() => {
      console.log("throttle");
    }, 10)();
  }, []), /* @__PURE__ */ p.jsxs("div", { className: pc.counter, children: [
    /* @__PURE__ */ p.jsx("h2", { className: pc.header, children: "Counter" }),
    /* @__PURE__ */ p.jsx("button", { className: pc.button, type: "button", onClick: n, children: "Increment by one" }),
    /* @__PURE__ */ p.jsx(Xe, { variant: "outline", children: "Shadcn button" }),
    /* @__PURE__ */ p.jsxs("div", { className: "bg-red-500", children: [
      "Total value: ",
      /* @__PURE__ */ p.jsx("strong", { children: t })
    ] })
  ] });
};
var f_ = (e, t, n, o, s, c, l, u) => {
  let d = document.documentElement, f = ["light", "dark"];
  function m(g) {
    (Array.isArray(e) ? e : [e]).forEach((T) => {
      let S = T === "class", P = S && c ? s.map((_) => c[_] || _) : s;
      S ? (d.classList.remove(...P), d.classList.add(g)) : d.setAttribute(T, g);
    }), v(g);
  }
  function v(g) {
    u && f.includes(g) && (d.style.colorScheme = g);
  }
  function x() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  if (o)
    m(o);
  else
    try {
      let g = localStorage.getItem(t) || n, T = l && g === "system" ? x() : g;
      m(T);
    } catch {
    }
}, h_ = w.createContext(void 0), p_ = { setTheme: (e) => {
}, themes: [] }, m_ = () => {
  var e;
  return (e = w.useContext(h_)) != null ? e : p_;
};
w.memo(({ forcedTheme: e, storageKey: t, attribute: n, enableSystem: o, enableColorScheme: s, defaultTheme: c, value: l, themes: u, nonce: d, scriptProps: f }) => {
  let m = JSON.stringify([n, t, c, e, u, l, o, s]).slice(1, -1);
  return w.createElement("script", { ...f, suppressHydrationWarning: !0, nonce: typeof window > "u" ? d : "", dangerouslySetInnerHTML: { __html: `(${f_.toString()})(${m})` } });
});
var g_ = (e) => {
  switch (e) {
    case "success":
      return x_;
    case "info":
      return w_;
    case "warning":
      return b_;
    case "error":
      return S_;
    default:
      return null;
  }
}, v_ = Array(12).fill(0), y_ = ({ visible: e, className: t }) => z.createElement("div", { className: ["sonner-loading-wrapper", t].filter(Boolean).join(" "), "data-visible": e }, z.createElement("div", { className: "sonner-spinner" }, v_.map((n, o) => z.createElement("div", { className: "sonner-loading-bar", key: `spinner-bar-${o}` })))), x_ = z.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, z.createElement("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z", clipRule: "evenodd" })), b_ = z.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", height: "20", width: "20" }, z.createElement("path", { fillRule: "evenodd", d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z", clipRule: "evenodd" })), w_ = z.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, z.createElement("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z", clipRule: "evenodd" })), S_ = z.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, z.createElement("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z", clipRule: "evenodd" })), C_ = z.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }, z.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }), z.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" })), T_ = () => {
  let [e, t] = z.useState(document.hidden);
  return z.useEffect(() => {
    let n = () => {
      t(document.hidden);
    };
    return document.addEventListener("visibilitychange", n), () => window.removeEventListener("visibilitychange", n);
  }, []), e;
}, $c = 1, P_ = class {
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
      let { message: n, ...o } = e, s = typeof (e == null ? void 0 : e.id) == "number" || ((t = e.id) == null ? void 0 : t.length) > 0 ? e.id : $c++, c = this.toasts.find((u) => u.id === s), l = e.dismissible === void 0 ? !0 : e.dismissible;
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
        else if (A_(d) && !d.ok) {
          s = !1;
          let f = typeof t.error == "function" ? await t.error(`HTTP error! status: ${d.status}`) : t.error, m = typeof t.description == "function" ? await t.description(`HTTP error! status: ${d.status}`) : t.description;
          this.create({ id: n, type: "error", message: f, description: m });
        } else if (t.success !== void 0) {
          s = !1;
          let f = typeof t.success == "function" ? await t.success(d) : t.success, m = typeof t.description == "function" ? await t.description(d) : t.description;
          this.create({ id: n, type: "success", message: f, description: m });
        }
      }).catch(async (d) => {
        if (c = ["reject", d], t.error !== void 0) {
          s = !1;
          let f = typeof t.error == "function" ? await t.error(d) : t.error, m = typeof t.description == "function" ? await t.description(d) : t.description;
          this.create({ id: n, type: "error", message: f, description: m });
        }
      }).finally(() => {
        var d;
        s && (this.dismiss(n), n = void 0), (d = t.finally) == null || d.call(t);
      }), u = () => new Promise((d, f) => l.then(() => c[0] === "reject" ? f(c[1]) : d(c[1])).catch(f));
      return typeof n != "string" && typeof n != "number" ? { unwrap: u } : Object.assign(n, { unwrap: u });
    }, this.custom = (e, t) => {
      let n = (t == null ? void 0 : t.id) || $c++;
      return this.create({ jsx: e(n), id: n, ...t }), n;
    }, this.subscribers = [], this.toasts = [];
  }
}, Qt = new P_(), __ = (e, t) => {
  let n = (t == null ? void 0 : t.id) || $c++;
  return Qt.addToast({ title: e, ...t, id: n }), n;
}, A_ = (e) => e && typeof e == "object" && "ok" in e && typeof e.ok == "boolean" && "status" in e && typeof e.status == "number", E_ = __, R_ = () => Qt.toasts;
Object.assign(E_, { success: Qt.success, info: Qt.info, warning: Qt.warning, error: Qt.error, custom: Qt.custom, message: Qt.message, promise: Qt.promise, dismiss: Qt.dismiss, loading: Qt.loading }, { getHistory: R_ });
function N_(e, { insertAt: t } = {}) {
  if (typeof document > "u")
    return;
  let n = document.head || document.getElementsByTagName("head")[0], o = document.createElement("style");
  o.type = "text/css", t === "top" && n.firstChild ? n.insertBefore(o, n.firstChild) : n.appendChild(o), o.styleSheet ? o.styleSheet.cssText = e : o.appendChild(document.createTextNode(e));
}
N_(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:max(var(--offset),env(safe-area-inset-right))}:where([data-sonner-toaster][data-x-position="left"]){left:max(var(--offset),env(safe-area-inset-left))}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:max(var(--offset),env(safe-area-inset-top))}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:max(var(--offset),env(safe-area-inset-bottom))}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:0;right:0;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation:swipe-out .2s ease-out forwards}@keyframes swipe-out{0%{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount)));opacity:1}to{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount) + var(--lift) * -100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;--mobile-offset: 16px;right:var(--mobile-offset);left:var(--mobile-offset);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset)}[data-sonner-toaster][data-y-position=bottom]{bottom:20px}[data-sonner-toaster][data-y-position=top]{top:20px}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset);right:var(--mobile-offset);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function Fs(e) {
  return e.label !== void 0;
}
var M_ = 3, O_ = "32px", rp = 4e3, j_ = 356, D_ = 14, I_ = 20, k_ = 200;
function L_(...e) {
  return e.filter(Boolean).join(" ");
}
var V_ = (e) => {
  var t, n, o, s, c, l, u, d, f, m, v;
  let { invert: x, toast: g, unstyled: T, interacting: S, setHeights: P, visibleToasts: _, heights: E, index: O, toasts: N, expanded: D, removeToast: W, defaultRichColors: $, closeButton: H, style: te, cancelButtonStyle: re, actionButtonStyle: fe, className: J = "", descriptionClassName: se = "", duration: ne, position: Te, gap: ie, loadingIcon: Z, expandByDefault: q, classNames: G, icons: pe, closeButtonAriaLabel: Ee = "Close toast", pauseWhenPageIsHidden: Pe, cn: ge } = e, [Re, Be] = z.useState(!1), [et, X] = z.useState(!1), [be, Le] = z.useState(!1), [Se, ve] = z.useState(!1), [_e, lt] = z.useState(!1), [Ye, ht] = z.useState(0), [Mt, ct] = z.useState(0), on = z.useRef(g.duration || ne || rp), Vt = z.useRef(null), Ot = z.useRef(null), jt = O === 0, vn = O + 1 <= _, pt = g.type, _n = g.dismissible !== !1, An = g.className || "", pi = g.descriptionClassName || "", Tt = z.useMemo(() => E.findIndex((oe) => oe.toastId === g.id) || 0, [E, g.id]), En = z.useMemo(() => {
    var oe;
    return (oe = g.closeButton) != null ? oe : H;
  }, [g.closeButton, H]);
  z.useMemo(() => g.duration || ne || rp, [g.duration, ne]);
  let Rn = z.useRef(0), Gt = z.useRef(0), Nn = z.useRef(0), Mn = z.useRef(null), [$r, Ur] = Te.split("-"), sr = z.useMemo(() => E.reduce((oe, je, We) => We >= Tt ? oe : oe + je.height, 0), [E, Tt]), ar = T_(), Hr = g.invert || x, zr = pt === "loading";
  Gt.current = z.useMemo(() => Tt * ie + sr, [Tt, sr]), z.useEffect(() => {
    Be(!0);
  }, []), z.useEffect(() => {
    let oe = Ot.current;
    if (oe) {
      let je = oe.getBoundingClientRect().height;
      return ct(je), P((We) => [{ toastId: g.id, height: je, position: g.position }, ...We]), () => P((We) => We.filter((Pt) => Pt.toastId !== g.id));
    }
  }, [P, g.id]), z.useLayoutEffect(() => {
    if (!Re)
      return;
    let oe = Ot.current, je = oe.style.height;
    oe.style.height = "auto";
    let We = oe.getBoundingClientRect().height;
    oe.style.height = je, ct(We), P((Pt) => Pt.find((Bt) => Bt.toastId === g.id) ? Pt.map((Bt) => Bt.toastId === g.id ? { ...Bt, height: We } : Bt) : [{ toastId: g.id, height: We, position: g.position }, ...Pt]);
  }, [Re, g.title, g.description, P, g.id]);
  let Ft = z.useCallback(() => {
    X(!0), ht(Gt.current), P((oe) => oe.filter((je) => je.toastId !== g.id)), setTimeout(() => {
      W(g);
    }, k_);
  }, [g, W, P, Gt]);
  z.useEffect(() => {
    if (g.promise && pt === "loading" || g.duration === 1 / 0 || g.type === "loading")
      return;
    let oe;
    return D || S || Pe && ar ? (() => {
      if (Nn.current < Rn.current) {
        let je = (/* @__PURE__ */ new Date()).getTime() - Rn.current;
        on.current = on.current - je;
      }
      Nn.current = (/* @__PURE__ */ new Date()).getTime();
    })() : on.current !== 1 / 0 && (Rn.current = (/* @__PURE__ */ new Date()).getTime(), oe = setTimeout(() => {
      var je;
      (je = g.onAutoClose) == null || je.call(g, g), Ft();
    }, on.current)), () => clearTimeout(oe);
  }, [D, S, g, pt, Pe, ar, Ft]), z.useEffect(() => {
    g.delete && Ft();
  }, [Ft, g.delete]);
  function mi() {
    var oe, je, We;
    return pe != null && pe.loading ? z.createElement("div", { className: ge(G == null ? void 0 : G.loader, (oe = g == null ? void 0 : g.classNames) == null ? void 0 : oe.loader, "sonner-loader"), "data-visible": pt === "loading" }, pe.loading) : Z ? z.createElement("div", { className: ge(G == null ? void 0 : G.loader, (je = g == null ? void 0 : g.classNames) == null ? void 0 : je.loader, "sonner-loader"), "data-visible": pt === "loading" }, Z) : z.createElement(y_, { className: ge(G == null ? void 0 : G.loader, (We = g == null ? void 0 : g.classNames) == null ? void 0 : We.loader), visible: pt === "loading" });
  }
  return z.createElement("li", { tabIndex: 0, ref: Ot, className: ge(J, An, G == null ? void 0 : G.toast, (t = g == null ? void 0 : g.classNames) == null ? void 0 : t.toast, G == null ? void 0 : G.default, G == null ? void 0 : G[pt], (n = g == null ? void 0 : g.classNames) == null ? void 0 : n[pt]), "data-sonner-toast": "", "data-rich-colors": (o = g.richColors) != null ? o : $, "data-styled": !(g.jsx || g.unstyled || T), "data-mounted": Re, "data-promise": !!g.promise, "data-swiped": _e, "data-removed": et, "data-visible": vn, "data-y-position": $r, "data-x-position": Ur, "data-index": O, "data-front": jt, "data-swiping": be, "data-dismissible": _n, "data-type": pt, "data-invert": Hr, "data-swipe-out": Se, "data-expanded": !!(D || q && Re), style: { "--index": O, "--toasts-before": O, "--z-index": N.length - O, "--offset": `${et ? Ye : Gt.current}px`, "--initial-height": q ? "auto" : `${Mt}px`, ...te, ...g.style }, onPointerDown: (oe) => {
    zr || !_n || (Vt.current = /* @__PURE__ */ new Date(), ht(Gt.current), oe.target.setPointerCapture(oe.pointerId), oe.target.tagName !== "BUTTON" && (Le(!0), Mn.current = { x: oe.clientX, y: oe.clientY }));
  }, onPointerUp: () => {
    var oe, je, We, Pt;
    if (Se || !_n)
      return;
    Mn.current = null;
    let Bt = Number(((oe = Ot.current) == null ? void 0 : oe.style.getPropertyValue("--swipe-amount").replace("px", "")) || 0), lr = (/* @__PURE__ */ new Date()).getTime() - ((je = Vt.current) == null ? void 0 : je.getTime()), gi = Math.abs(Bt) / lr;
    if (Math.abs(Bt) >= I_ || gi > 0.11) {
      ht(Gt.current), (We = g.onDismiss) == null || We.call(g, g), Ft(), ve(!0), lt(!1);
      return;
    }
    (Pt = Ot.current) == null || Pt.style.setProperty("--swipe-amount", "0px"), Le(!1);
  }, onPointerMove: (oe) => {
    var je, We, Pt;
    if (!Mn.current || !_n)
      return;
    let Bt = oe.clientY - Mn.current.y, lr = ((je = window.getSelection()) == null ? void 0 : je.toString().length) > 0;
    Number(((We = Ot.current) == null ? void 0 : We.style.getPropertyValue("--swipe-amount").replace("px", "")) || 0) > 0 && lt(!0), !lr && ((Pt = Ot.current) == null || Pt.style.setProperty("--swipe-amount", `${Math.max(0, Bt)}px`));
  } }, En && !g.jsx ? z.createElement("button", { "aria-label": Ee, "data-disabled": zr, "data-close-button": !0, onClick: zr || !_n ? () => {
  } : () => {
    var oe;
    Ft(), (oe = g.onDismiss) == null || oe.call(g, g);
  }, className: ge(G == null ? void 0 : G.closeButton, (s = g == null ? void 0 : g.classNames) == null ? void 0 : s.closeButton) }, (c = pe == null ? void 0 : pe.close) != null ? c : C_) : null, g.jsx || z.isValidElement(g.title) ? g.jsx ? g.jsx : typeof g.title == "function" ? g.title() : g.title : z.createElement(z.Fragment, null, pt || g.icon || g.promise ? z.createElement("div", { "data-icon": "", className: ge(G == null ? void 0 : G.icon, (l = g == null ? void 0 : g.classNames) == null ? void 0 : l.icon) }, g.promise || g.type === "loading" && !g.icon ? g.icon || mi() : null, g.type !== "loading" ? g.icon || (pe == null ? void 0 : pe[pt]) || g_(pt) : null) : null, z.createElement("div", { "data-content": "", className: ge(G == null ? void 0 : G.content, (u = g == null ? void 0 : g.classNames) == null ? void 0 : u.content) }, z.createElement("div", { "data-title": "", className: ge(G == null ? void 0 : G.title, (d = g == null ? void 0 : g.classNames) == null ? void 0 : d.title) }, typeof g.title == "function" ? g.title() : g.title), g.description ? z.createElement("div", { "data-description": "", className: ge(se, pi, G == null ? void 0 : G.description, (f = g == null ? void 0 : g.classNames) == null ? void 0 : f.description) }, typeof g.description == "function" ? g.description() : g.description) : null), z.isValidElement(g.cancel) ? g.cancel : g.cancel && Fs(g.cancel) ? z.createElement("button", { "data-button": !0, "data-cancel": !0, style: g.cancelButtonStyle || re, onClick: (oe) => {
    var je, We;
    Fs(g.cancel) && _n && ((We = (je = g.cancel).onClick) == null || We.call(je, oe), Ft());
  }, className: ge(G == null ? void 0 : G.cancelButton, (m = g == null ? void 0 : g.classNames) == null ? void 0 : m.cancelButton) }, g.cancel.label) : null, z.isValidElement(g.action) ? g.action : g.action && Fs(g.action) ? z.createElement("button", { "data-button": !0, "data-action": !0, style: g.actionButtonStyle || fe, onClick: (oe) => {
    var je, We;
    Fs(g.action) && ((We = (je = g.action).onClick) == null || We.call(je, oe), !oe.defaultPrevented && Ft());
  }, className: ge(G == null ? void 0 : G.actionButton, (v = g == null ? void 0 : g.classNames) == null ? void 0 : v.actionButton) }, g.action.label) : null));
};
function ip() {
  if (typeof window > "u" || typeof document > "u")
    return "ltr";
  let e = document.documentElement.getAttribute("dir");
  return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e;
}
var F_ = Sa(function(e, t) {
  let { invert: n, position: o = "bottom-right", hotkey: s = ["altKey", "KeyT"], expand: c, closeButton: l, className: u, offset: d, theme: f = "light", richColors: m, duration: v, style: x, visibleToasts: g = M_, toastOptions: T, dir: S = ip(), gap: P = D_, loadingIcon: _, icons: E, containerAriaLabel: O = "Notifications", pauseWhenPageIsHidden: N, cn: D = L_ } = e, [W, $] = z.useState([]), H = z.useMemo(() => Array.from(new Set([o].concat(W.filter((Pe) => Pe.position).map((Pe) => Pe.position)))), [W, o]), [te, re] = z.useState([]), [fe, J] = z.useState(!1), [se, ne] = z.useState(!1), [Te, ie] = z.useState(f !== "system" ? f : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), Z = z.useRef(null), q = s.join("+").replace(/Key/g, "").replace(/Digit/g, ""), G = z.useRef(null), pe = z.useRef(!1), Ee = z.useCallback((Pe) => {
    $((ge) => {
      var Re;
      return (Re = ge.find((Be) => Be.id === Pe.id)) != null && Re.delete || Qt.dismiss(Pe.id), ge.filter(({ id: Be }) => Be !== Pe.id);
    });
  }, []);
  return z.useEffect(() => Qt.subscribe((Pe) => {
    if (Pe.dismiss) {
      $((ge) => ge.map((Re) => Re.id === Pe.id ? { ...Re, delete: !0 } : Re));
      return;
    }
    setTimeout(() => {
      Km.flushSync(() => {
        $((ge) => {
          let Re = ge.findIndex((Be) => Be.id === Pe.id);
          return Re !== -1 ? [...ge.slice(0, Re), { ...ge[Re], ...Pe }, ...ge.slice(Re + 1)] : [Pe, ...ge];
        });
      });
    });
  }), []), z.useEffect(() => {
    if (f !== "system") {
      ie(f);
      return;
    }
    if (f === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? ie("dark") : ie("light")), typeof window > "u")
      return;
    let Pe = window.matchMedia("(prefers-color-scheme: dark)");
    try {
      Pe.addEventListener("change", ({ matches: ge }) => {
        ie(ge ? "dark" : "light");
      });
    } catch {
      Pe.addListener(({ matches: Re }) => {
        try {
          ie(Re ? "dark" : "light");
        } catch (Be) {
          console.error(Be);
        }
      });
    }
  }, [f]), z.useEffect(() => {
    W.length <= 1 && J(!1);
  }, [W]), z.useEffect(() => {
    let Pe = (ge) => {
      var Re, Be;
      s.every((et) => ge[et] || ge.code === et) && (J(!0), (Re = Z.current) == null || Re.focus()), ge.code === "Escape" && (document.activeElement === Z.current || (Be = Z.current) != null && Be.contains(document.activeElement)) && J(!1);
    };
    return document.addEventListener("keydown", Pe), () => document.removeEventListener("keydown", Pe);
  }, [s]), z.useEffect(() => {
    if (Z.current)
      return () => {
        G.current && (G.current.focus({ preventScroll: !0 }), G.current = null, pe.current = !1);
      };
  }, [Z.current]), z.createElement("section", { "aria-label": `${O} ${q}`, tabIndex: -1, "aria-live": "polite", "aria-relevant": "additions text", "aria-atomic": "false" }, H.map((Pe, ge) => {
    var Re;
    let [Be, et] = Pe.split("-");
    return W.length ? z.createElement("ol", { key: Pe, dir: S === "auto" ? ip() : S, tabIndex: -1, ref: Z, className: u, "data-sonner-toaster": !0, "data-theme": Te, "data-y-position": Be, "data-lifted": fe && W.length > 1 && !c, "data-x-position": et, style: { "--front-toast-height": `${((Re = te[0]) == null ? void 0 : Re.height) || 0}px`, "--offset": typeof d == "number" ? `${d}px` : d || O_, "--width": `${j_}px`, "--gap": `${P}px`, ...x }, onBlur: (X) => {
      pe.current && !X.currentTarget.contains(X.relatedTarget) && (pe.current = !1, G.current && (G.current.focus({ preventScroll: !0 }), G.current = null));
    }, onFocus: (X) => {
      X.target instanceof HTMLElement && X.target.dataset.dismissible === "false" || pe.current || (pe.current = !0, G.current = X.relatedTarget);
    }, onMouseEnter: () => J(!0), onMouseMove: () => J(!0), onMouseLeave: () => {
      se || J(!1);
    }, onPointerDown: (X) => {
      X.target instanceof HTMLElement && X.target.dataset.dismissible === "false" || ne(!0);
    }, onPointerUp: () => ne(!1) }, W.filter((X) => !X.position && ge === 0 || X.position === Pe).map((X, be) => {
      var Le, Se;
      return z.createElement(V_, { key: X.id, icons: E, index: be, toast: X, defaultRichColors: m, duration: (Le = T == null ? void 0 : T.duration) != null ? Le : v, className: T == null ? void 0 : T.className, descriptionClassName: T == null ? void 0 : T.descriptionClassName, invert: n, visibleToasts: g, closeButton: (Se = T == null ? void 0 : T.closeButton) != null ? Se : l, interacting: se, position: Pe, style: T == null ? void 0 : T.style, unstyled: T == null ? void 0 : T.unstyled, classNames: T == null ? void 0 : T.classNames, cancelButtonStyle: T == null ? void 0 : T.cancelButtonStyle, actionButtonStyle: T == null ? void 0 : T.actionButtonStyle, removeToast: Ee, toasts: W.filter((ve) => ve.position == X.position), heights: te.filter((ve) => ve.position == X.position), setHeights: re, expandByDefault: c, gap: P, loadingIcon: _, expanded: fe, pauseWhenPageIsHidden: N, cn: D });
    })) : null;
  }));
});
const gD = ({ ...e }) => {
  const { theme: t = "system" } = m_();
  return /* @__PURE__ */ p.jsx(
    F_,
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
function op(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function ke(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(s) {
    if (e == null || e(s), n === !1 || !s.defaultPrevented)
      return t == null ? void 0 : t(s);
  };
}
function B_(e, t = []) {
  let n = [];
  function o(c, l) {
    const u = w.createContext(l), d = n.length;
    n = [...n, l];
    function f(v) {
      const { scope: x, children: g, ...T } = v, S = (x == null ? void 0 : x[e][d]) || u, P = w.useMemo(() => T, Object.values(T));
      return /* @__PURE__ */ p.jsx(S.Provider, { value: P, children: g });
    }
    function m(v, x) {
      const g = (x == null ? void 0 : x[e][d]) || u, T = w.useContext(g);
      if (T)
        return T;
      if (l !== void 0)
        return l;
      throw new Error(`\`${v}\` must be used within \`${c}\``);
    }
    return f.displayName = c + "Provider", [f, m];
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
  return s.scopeName = e, [o, W_(s, ...t)];
}
function W_(...e) {
  const t = e[0];
  if (e.length === 1)
    return t;
  const n = () => {
    const o = e.map((s) => ({
      useScope: s(),
      scopeName: s.scopeName
    }));
    return function(c) {
      const l = o.reduce((u, { useScope: d, scopeName: f }) => {
        const v = d(c)[`__scope${f}`];
        return { ...u, ...v };
      }, {});
      return w.useMemo(() => ({ [`__scope${t.scopeName}`]: l }), [l]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
function $_(e) {
  const t = e + "CollectionProvider", [n, o] = B_(t), [s, c] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), l = (g) => {
    const { scope: T, children: S } = g, P = z.useRef(null), _ = z.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ p.jsx(s, { scope: T, itemMap: _, collectionRef: P, children: S });
  };
  l.displayName = t;
  const u = e + "CollectionSlot", d = z.forwardRef(
    (g, T) => {
      const { scope: S, children: P } = g, _ = c(u, S), E = nt(T, _.collectionRef);
      return /* @__PURE__ */ p.jsx(li, { ref: E, children: P });
    }
  );
  d.displayName = u;
  const f = e + "CollectionItemSlot", m = "data-radix-collection-item", v = z.forwardRef(
    (g, T) => {
      const { scope: S, children: P, ..._ } = g, E = z.useRef(null), O = nt(T, E), N = c(f, S);
      return z.useEffect(() => (N.itemMap.set(E, { ref: E, ..._ }), () => void N.itemMap.delete(E))), /* @__PURE__ */ p.jsx(li, { [m]: "", ref: O, children: P });
    }
  );
  v.displayName = f;
  function x(g) {
    const T = c(e + "CollectionConsumer", g);
    return z.useCallback(() => {
      const P = T.collectionRef.current;
      if (!P)
        return [];
      const _ = Array.from(P.querySelectorAll(`[${m}]`));
      return Array.from(T.itemMap.values()).sort(
        (N, D) => _.indexOf(N.ref.current) - _.indexOf(D.ref.current)
      );
    }, [T.collectionRef, T.itemMap]);
  }
  return [
    { Provider: l, Slot: d, ItemSlot: v },
    x,
    o
  ];
}
function U_(e, t) {
  const n = w.createContext(t), o = (c) => {
    const { children: l, ...u } = c, d = w.useMemo(() => u, Object.values(u));
    return /* @__PURE__ */ p.jsx(n.Provider, { value: d, children: l });
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
function Pa(e, t = []) {
  let n = [];
  function o(c, l) {
    const u = w.createContext(l), d = n.length;
    n = [...n, l];
    const f = (v) => {
      var _;
      const { scope: x, children: g, ...T } = v, S = ((_ = x == null ? void 0 : x[e]) == null ? void 0 : _[d]) || u, P = w.useMemo(() => T, Object.values(T));
      return /* @__PURE__ */ p.jsx(S.Provider, { value: P, children: g });
    };
    f.displayName = c + "Provider";
    function m(v, x) {
      var S;
      const g = ((S = x == null ? void 0 : x[e]) == null ? void 0 : S[d]) || u, T = w.useContext(g);
      if (T)
        return T;
      if (l !== void 0)
        return l;
      throw new Error(`\`${v}\` must be used within \`${c}\``);
    }
    return [f, m];
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
  return s.scopeName = e, [o, H_(s, ...t)];
}
function H_(...e) {
  const t = e[0];
  if (e.length === 1)
    return t;
  const n = () => {
    const o = e.map((s) => ({
      useScope: s(),
      scopeName: s.scopeName
    }));
    return function(c) {
      const l = o.reduce((u, { useScope: d, scopeName: f }) => {
        const v = d(c)[`__scope${f}`];
        return { ...u, ...v };
      }, {});
      return w.useMemo(() => ({ [`__scope${t.scopeName}`]: l }), [l]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
var z_ = w.createContext(void 0);
function G_(e) {
  const t = w.useContext(z_);
  return e || t || "ltr";
}
var K_ = [
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
], Ve = K_.reduce((e, t) => {
  const n = w.forwardRef((o, s) => {
    const { asChild: c, ...l } = o, u = c ? li : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ p.jsx(u, { ...l, ref: s });
  });
  return n.displayName = `Primitive.${t}`, { ...e, [t]: n };
}, {});
function Y_(e, t) {
  e && Ca.flushSync(() => e.dispatchEvent(t));
}
function rr(e) {
  const t = w.useRef(e);
  return w.useEffect(() => {
    t.current = e;
  }), w.useMemo(() => (...n) => {
    var o;
    return (o = t.current) == null ? void 0 : o.call(t, ...n);
  }, []);
}
function q_(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = rr(e);
  w.useEffect(() => {
    const o = (s) => {
      s.key === "Escape" && n(s);
    };
    return t.addEventListener("keydown", o, { capture: !0 }), () => t.removeEventListener("keydown", o, { capture: !0 });
  }, [n, t]);
}
var X_ = "DismissableLayer", Uc = "dismissableLayer.update", Z_ = "dismissableLayer.pointerDownOutside", J_ = "dismissableLayer.focusOutside", sp, cg = w.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), _a = w.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: o,
      onPointerDownOutside: s,
      onFocusOutside: c,
      onInteractOutside: l,
      onDismiss: u,
      ...d
    } = e, f = w.useContext(cg), [m, v] = w.useState(null), x = (m == null ? void 0 : m.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, g] = w.useState({}), T = nt(t, ($) => v($)), S = Array.from(f.layers), [P] = [...f.layersWithOutsidePointerEventsDisabled].slice(-1), _ = S.indexOf(P), E = m ? S.indexOf(m) : -1, O = f.layersWithOutsidePointerEventsDisabled.size > 0, N = E >= _, D = tA(($) => {
      const H = $.target, te = [...f.branches].some((re) => re.contains(H));
      !N || te || (s == null || s($), l == null || l($), $.defaultPrevented || u == null || u());
    }, x), W = nA(($) => {
      const H = $.target;
      [...f.branches].some((re) => re.contains(H)) || (c == null || c($), l == null || l($), $.defaultPrevented || u == null || u());
    }, x);
    return q_(($) => {
      E === f.layers.size - 1 && (o == null || o($), !$.defaultPrevented && u && ($.preventDefault(), u()));
    }, x), w.useEffect(() => {
      if (m)
        return n && (f.layersWithOutsidePointerEventsDisabled.size === 0 && (sp = x.body.style.pointerEvents, x.body.style.pointerEvents = "none"), f.layersWithOutsidePointerEventsDisabled.add(m)), f.layers.add(m), ap(), () => {
          n && f.layersWithOutsidePointerEventsDisabled.size === 1 && (x.body.style.pointerEvents = sp);
        };
    }, [m, x, n, f]), w.useEffect(() => () => {
      m && (f.layers.delete(m), f.layersWithOutsidePointerEventsDisabled.delete(m), ap());
    }, [m, f]), w.useEffect(() => {
      const $ = () => g({});
      return document.addEventListener(Uc, $), () => document.removeEventListener(Uc, $);
    }, []), /* @__PURE__ */ p.jsx(
      Ve.div,
      {
        ...d,
        ref: T,
        style: {
          pointerEvents: O ? N ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: ke(e.onFocusCapture, W.onFocusCapture),
        onBlurCapture: ke(e.onBlurCapture, W.onBlurCapture),
        onPointerDownCapture: ke(
          e.onPointerDownCapture,
          D.onPointerDownCapture
        )
      }
    );
  }
);
_a.displayName = X_;
var Q_ = "DismissableLayerBranch", eA = w.forwardRef((e, t) => {
  const n = w.useContext(cg), o = w.useRef(null), s = nt(t, o);
  return w.useEffect(() => {
    const c = o.current;
    if (c)
      return n.branches.add(c), () => {
        n.branches.delete(c);
      };
  }, [n.branches]), /* @__PURE__ */ p.jsx(Ve.div, { ...e, ref: s });
});
eA.displayName = Q_;
function tA(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = rr(e), o = w.useRef(!1), s = w.useRef(() => {
  });
  return w.useEffect(() => {
    const c = (u) => {
      if (u.target && !o.current) {
        let d = function() {
          ug(
            Z_,
            n,
            f,
            { discrete: !0 }
          );
        };
        const f = { originalEvent: u };
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
function nA(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = rr(e), o = w.useRef(!1);
  return w.useEffect(() => {
    const s = (c) => {
      c.target && !o.current && ug(J_, n, { originalEvent: c }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", s), () => t.removeEventListener("focusin", s);
  }, [t, n]), {
    onFocusCapture: () => o.current = !0,
    onBlurCapture: () => o.current = !1
  };
}
function ap() {
  const e = new CustomEvent(Uc);
  document.dispatchEvent(e);
}
function ug(e, t, n, { discrete: o }) {
  const s = n.originalEvent.target, c = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && s.addEventListener(e, t, { once: !0 }), o ? Y_(s, c) : s.dispatchEvent(c);
}
var mc = 0;
function dg() {
  w.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? lp()), document.body.insertAdjacentElement("beforeend", e[1] ?? lp()), mc++, () => {
      mc === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), mc--;
    };
  }, []);
}
function lp() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var gc = "focusScope.autoFocusOnMount", vc = "focusScope.autoFocusOnUnmount", cp = { bubbles: !1, cancelable: !0 }, rA = "FocusScope", bu = w.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: o = !1,
    onMountAutoFocus: s,
    onUnmountAutoFocus: c,
    ...l
  } = e, [u, d] = w.useState(null), f = rr(s), m = rr(c), v = w.useRef(null), x = nt(t, (S) => d(S)), g = w.useRef({
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
        u.contains(N) ? v.current = N : wr(v.current, { select: !0 });
      }, P = function(O) {
        if (g.paused || !u)
          return;
        const N = O.relatedTarget;
        N !== null && (u.contains(N) || wr(v.current, { select: !0 }));
      }, _ = function(O) {
        if (document.activeElement === document.body)
          for (const D of O)
            D.removedNodes.length > 0 && wr(u);
      };
      document.addEventListener("focusin", S), document.addEventListener("focusout", P);
      const E = new MutationObserver(_);
      return u && E.observe(u, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", S), document.removeEventListener("focusout", P), E.disconnect();
      };
    }
  }, [o, u, g.paused]), w.useEffect(() => {
    if (u) {
      dp.add(g);
      const S = document.activeElement;
      if (!u.contains(S)) {
        const _ = new CustomEvent(gc, cp);
        u.addEventListener(gc, f), u.dispatchEvent(_), _.defaultPrevented || (iA(cA(fg(u)), { select: !0 }), document.activeElement === S && wr(u));
      }
      return () => {
        u.removeEventListener(gc, f), setTimeout(() => {
          const _ = new CustomEvent(vc, cp);
          u.addEventListener(vc, m), u.dispatchEvent(_), _.defaultPrevented || wr(S ?? document.body, { select: !0 }), u.removeEventListener(vc, m), dp.remove(g);
        }, 0);
      };
    }
  }, [u, f, m, g]);
  const T = w.useCallback(
    (S) => {
      if (!n && !o || g.paused)
        return;
      const P = S.key === "Tab" && !S.altKey && !S.ctrlKey && !S.metaKey, _ = document.activeElement;
      if (P && _) {
        const E = S.currentTarget, [O, N] = oA(E);
        O && N ? !S.shiftKey && _ === N ? (S.preventDefault(), n && wr(O, { select: !0 })) : S.shiftKey && _ === O && (S.preventDefault(), n && wr(N, { select: !0 })) : _ === E && S.preventDefault();
      }
    },
    [n, o, g.paused]
  );
  return /* @__PURE__ */ p.jsx(Ve.div, { tabIndex: -1, ...l, ref: x, onKeyDown: T });
});
bu.displayName = rA;
function iA(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const o of e)
    if (wr(o, { select: t }), document.activeElement !== n)
      return;
}
function oA(e) {
  const t = fg(e), n = up(t, e), o = up(t.reverse(), e);
  return [n, o];
}
function fg(e) {
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
function up(e, t) {
  for (const n of e)
    if (!sA(n, { upTo: t }))
      return n;
}
function sA(e, { upTo: t }) {
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
function aA(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function wr(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && aA(e) && t && e.select();
  }
}
var dp = lA();
function lA() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = fp(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = fp(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function fp(e, t) {
  const n = [...e], o = n.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
function cA(e) {
  return e.filter((t) => t.tagName !== "A");
}
var Lt = globalThis != null && globalThis.document ? w.useLayoutEffect : () => {
}, uA = w.useId || (() => {
}), dA = 0;
function si(e) {
  const [t, n] = w.useState(uA());
  return Lt(() => {
    n((o) => o ?? String(dA++));
  }, [e]), t ? `radix-${t}` : "";
}
const fA = ["top", "right", "bottom", "left"], Rr = Math.min, en = Math.max, oa = Math.round, Bs = Math.floor, In = (e) => ({
  x: e,
  y: e
}), hA = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, pA = {
  start: "end",
  end: "start"
};
function Hc(e, t, n) {
  return en(e, Rr(t, n));
}
function ir(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function or(e) {
  return e.split("-")[0];
}
function Xi(e) {
  return e.split("-")[1];
}
function wu(e) {
  return e === "x" ? "y" : "x";
}
function Su(e) {
  return e === "y" ? "height" : "width";
}
function Nr(e) {
  return ["top", "bottom"].includes(or(e)) ? "y" : "x";
}
function Cu(e) {
  return wu(Nr(e));
}
function mA(e, t, n) {
  n === void 0 && (n = !1);
  const o = Xi(e), s = Cu(e), c = Su(s);
  let l = s === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[c] > t.floating[c] && (l = sa(l)), [l, sa(l)];
}
function gA(e) {
  const t = sa(e);
  return [zc(e), t, zc(t)];
}
function zc(e) {
  return e.replace(/start|end/g, (t) => pA[t]);
}
function vA(e, t, n) {
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
function yA(e, t, n, o) {
  const s = Xi(e);
  let c = vA(or(e), n === "start", o);
  return s && (c = c.map((l) => l + "-" + s), t && (c = c.concat(c.map(zc)))), c;
}
function sa(e) {
  return e.replace(/left|right|bottom|top/g, (t) => hA[t]);
}
function xA(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function hg(e) {
  return typeof e != "number" ? xA(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function aa(e) {
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
function hp(e, t, n) {
  let {
    reference: o,
    floating: s
  } = e;
  const c = Nr(t), l = Cu(t), u = Su(l), d = or(t), f = c === "y", m = o.x + o.width / 2 - s.width / 2, v = o.y + o.height / 2 - s.height / 2, x = o[u] / 2 - s[u] / 2;
  let g;
  switch (d) {
    case "top":
      g = {
        x: m,
        y: o.y - s.height
      };
      break;
    case "bottom":
      g = {
        x: m,
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
  switch (Xi(t)) {
    case "start":
      g[l] -= x * (n && f ? -1 : 1);
      break;
    case "end":
      g[l] += x * (n && f ? -1 : 1);
      break;
  }
  return g;
}
const bA = async (e, t, n) => {
  const {
    placement: o = "bottom",
    strategy: s = "absolute",
    middleware: c = [],
    platform: l
  } = n, u = c.filter(Boolean), d = await (l.isRTL == null ? void 0 : l.isRTL(t));
  let f = await l.getElementRects({
    reference: e,
    floating: t,
    strategy: s
  }), {
    x: m,
    y: v
  } = hp(f, o, d), x = o, g = {}, T = 0;
  for (let S = 0; S < u.length; S++) {
    const {
      name: P,
      fn: _
    } = u[S], {
      x: E,
      y: O,
      data: N,
      reset: D
    } = await _({
      x: m,
      y: v,
      initialPlacement: o,
      placement: x,
      strategy: s,
      middlewareData: g,
      rects: f,
      platform: l,
      elements: {
        reference: e,
        floating: t
      }
    });
    m = E ?? m, v = O ?? v, g = {
      ...g,
      [P]: {
        ...g[P],
        ...N
      }
    }, D && T <= 50 && (T++, typeof D == "object" && (D.placement && (x = D.placement), D.rects && (f = D.rects === !0 ? await l.getElementRects({
      reference: e,
      floating: t,
      strategy: s
    }) : D.rects), {
      x: m,
      y: v
    } = hp(f, x, d)), S = -1);
  }
  return {
    x: m,
    y: v,
    placement: x,
    strategy: s,
    middlewareData: g
  };
};
async function Do(e, t) {
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
    boundary: f = "clippingAncestors",
    rootBoundary: m = "viewport",
    elementContext: v = "floating",
    altBoundary: x = !1,
    padding: g = 0
  } = ir(t, e), T = hg(g), P = u[x ? v === "floating" ? "reference" : "floating" : v], _ = aa(await c.getClippingRect({
    element: (n = await (c.isElement == null ? void 0 : c.isElement(P))) == null || n ? P : P.contextElement || await (c.getDocumentElement == null ? void 0 : c.getDocumentElement(u.floating)),
    boundary: f,
    rootBoundary: m,
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
  }, D = aa(c.convertOffsetParentRelativeRectToViewportRelativeRect ? await c.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: u,
    rect: E,
    offsetParent: O,
    strategy: d
  }) : E);
  return {
    top: (_.top - D.top + T.top) / N.y,
    bottom: (D.bottom - _.bottom + T.bottom) / N.y,
    left: (_.left - D.left + T.left) / N.x,
    right: (D.right - _.right + T.right) / N.x
  };
}
const wA = (e) => ({
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
      element: f,
      padding: m = 0
    } = ir(e, t) || {};
    if (f == null)
      return {};
    const v = hg(m), x = {
      x: n,
      y: o
    }, g = Cu(s), T = Su(g), S = await l.getDimensions(f), P = g === "y", _ = P ? "top" : "left", E = P ? "bottom" : "right", O = P ? "clientHeight" : "clientWidth", N = c.reference[T] + c.reference[g] - x[g] - c.floating[T], D = x[g] - c.reference[g], W = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(f));
    let $ = W ? W[O] : 0;
    (!$ || !await (l.isElement == null ? void 0 : l.isElement(W))) && ($ = u.floating[O] || c.floating[T]);
    const H = N / 2 - D / 2, te = $ / 2 - S[T] / 2 - 1, re = Rr(v[_], te), fe = Rr(v[E], te), J = re, se = $ - S[T] - fe, ne = $ / 2 - S[T] / 2 + H, Te = Hc(J, ne, se), ie = !d.arrow && Xi(s) != null && ne !== Te && c.reference[T] / 2 - (ne < J ? re : fe) - S[T] / 2 < 0, Z = ie ? ne < J ? ne - J : ne - se : 0;
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
}), SA = function(e) {
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
        elements: f
      } = t, {
        mainAxis: m = !0,
        crossAxis: v = !0,
        fallbackPlacements: x,
        fallbackStrategy: g = "bestFit",
        fallbackAxisSideDirection: T = "none",
        flipAlignment: S = !0,
        ...P
      } = ir(e, t);
      if ((n = c.arrow) != null && n.alignmentOffset)
        return {};
      const _ = or(s), E = Nr(u), O = or(u) === u, N = await (d.isRTL == null ? void 0 : d.isRTL(f.floating)), D = x || (O || !S ? [sa(u)] : gA(u)), W = T !== "none";
      !x && W && D.push(...yA(u, S, T, N));
      const $ = [u, ...D], H = await Do(t, P), te = [];
      let re = ((o = c.flip) == null ? void 0 : o.overflows) || [];
      if (m && te.push(H[_]), v) {
        const ne = mA(s, l, N);
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
                  const G = Nr(q.placement);
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
function pp(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function mp(e) {
  return fA.some((t) => e[t] >= 0);
}
const CA = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: o = "referenceHidden",
        ...s
      } = ir(e, t);
      switch (o) {
        case "referenceHidden": {
          const c = await Do(t, {
            ...s,
            elementContext: "reference"
          }), l = pp(c, n.reference);
          return {
            data: {
              referenceHiddenOffsets: l,
              referenceHidden: mp(l)
            }
          };
        }
        case "escaped": {
          const c = await Do(t, {
            ...s,
            altBoundary: !0
          }), l = pp(c, n.floating);
          return {
            data: {
              escapedOffsets: l,
              escaped: mp(l)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function TA(e, t) {
  const {
    placement: n,
    platform: o,
    elements: s
  } = e, c = await (o.isRTL == null ? void 0 : o.isRTL(s.floating)), l = or(n), u = Xi(n), d = Nr(n) === "y", f = ["left", "top"].includes(l) ? -1 : 1, m = c && d ? -1 : 1, v = ir(t, e);
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
    x: g * m,
    y: x * f
  } : {
    x: x * f,
    y: g * m
  };
}
const PA = function(e) {
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
      } = t, d = await TA(t, e);
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
}, _A = function(e) {
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
          fn: (P) => {
            let {
              x: _,
              y: E
            } = P;
            return {
              x: _,
              y: E
            };
          }
        },
        ...d
      } = ir(e, t), f = {
        x: n,
        y: o
      }, m = await Do(t, d), v = Nr(or(s)), x = wu(v);
      let g = f[x], T = f[v];
      if (c) {
        const P = x === "y" ? "top" : "left", _ = x === "y" ? "bottom" : "right", E = g + m[P], O = g - m[_];
        g = Hc(E, g, O);
      }
      if (l) {
        const P = v === "y" ? "top" : "left", _ = v === "y" ? "bottom" : "right", E = T + m[P], O = T - m[_];
        T = Hc(E, T, O);
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
}, AA = function(e) {
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
        crossAxis: f = !0
      } = ir(e, t), m = {
        x: n,
        y: o
      }, v = Nr(s), x = wu(v);
      let g = m[x], T = m[v];
      const S = ir(u, t), P = typeof S == "number" ? {
        mainAxis: S,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...S
      };
      if (d) {
        const O = x === "y" ? "height" : "width", N = c.reference[x] - c.floating[O] + P.mainAxis, D = c.reference[x] + c.reference[O] - P.mainAxis;
        g < N ? g = N : g > D && (g = D);
      }
      if (f) {
        var _, E;
        const O = x === "y" ? "width" : "height", N = ["top", "left"].includes(or(s)), D = c.reference[v] - c.floating[O] + (N && ((_ = l.offset) == null ? void 0 : _[v]) || 0) + (N ? 0 : P.crossAxis), W = c.reference[v] + c.reference[O] + (N ? 0 : ((E = l.offset) == null ? void 0 : E[v]) || 0) - (N ? P.crossAxis : 0);
        T < D ? T = D : T > W && (T = W);
      }
      return {
        [x]: g,
        [v]: T
      };
    }
  };
}, EA = function(e) {
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
        ...f
      } = ir(e, t), m = await Do(t, f), v = or(s), x = Xi(s), g = Nr(s) === "y", {
        width: T,
        height: S
      } = c.floating;
      let P, _;
      v === "top" || v === "bottom" ? (P = v, _ = x === (await (l.isRTL == null ? void 0 : l.isRTL(u.floating)) ? "start" : "end") ? "left" : "right") : (_ = v, P = x === "end" ? "top" : "bottom");
      const E = S - m.top - m.bottom, O = T - m.left - m.right, N = Rr(S - m[P], E), D = Rr(T - m[_], O), W = !t.middlewareData.shift;
      let $ = N, H = D;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (H = O), (o = t.middlewareData.shift) != null && o.enabled.y && ($ = E), W && !x) {
        const re = en(m.left, 0), fe = en(m.right, 0), J = en(m.top, 0), se = en(m.bottom, 0);
        g ? H = T - 2 * (re !== 0 || fe !== 0 ? re + fe : en(m.left, m.right)) : $ = S - 2 * (J !== 0 || se !== 0 ? J + se : en(m.top, m.bottom));
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
function Zi(e) {
  return pg(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function nn(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Bn(e) {
  var t;
  return (t = (pg(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function pg(e) {
  return Aa() ? e instanceof Node || e instanceof nn(e).Node : !1;
}
function Cn(e) {
  return Aa() ? e instanceof Element || e instanceof nn(e).Element : !1;
}
function Fn(e) {
  return Aa() ? e instanceof HTMLElement || e instanceof nn(e).HTMLElement : !1;
}
function gp(e) {
  return !Aa() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof nn(e).ShadowRoot;
}
function Ho(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: o,
    display: s
  } = Tn(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + n) && !["inline", "contents"].includes(s);
}
function RA(e) {
  return ["table", "td", "th"].includes(Zi(e));
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
function Tu(e) {
  const t = Pu(), n = Cn(e) ? Tn(e) : e;
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((o) => (n.willChange || "").includes(o)) || ["paint", "layout", "strict", "content"].some((o) => (n.contain || "").includes(o));
}
function NA(e) {
  let t = Mr(e);
  for (; Fn(t) && !Ui(t); ) {
    if (Tu(t))
      return t;
    if (Ea(t))
      return null;
    t = Mr(t);
  }
  return null;
}
function Pu() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Ui(e) {
  return ["html", "body", "#document"].includes(Zi(e));
}
function Tn(e) {
  return nn(e).getComputedStyle(e);
}
function Ra(e) {
  return Cn(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Mr(e) {
  if (Zi(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    gp(e) && e.host || // Fallback.
    Bn(e)
  );
  return gp(t) ? t.host : t;
}
function mg(e) {
  const t = Mr(e);
  return Ui(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Fn(t) && Ho(t) ? t : mg(t);
}
function Io(e, t, n) {
  var o;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const s = mg(e), c = s === ((o = e.ownerDocument) == null ? void 0 : o.body), l = nn(s);
  if (c) {
    const u = Gc(l);
    return t.concat(l, l.visualViewport || [], Ho(s) ? s : [], u && n ? Io(u) : []);
  }
  return t.concat(s, Io(s, [], n));
}
function Gc(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function gg(e) {
  const t = Tn(e);
  let n = parseFloat(t.width) || 0, o = parseFloat(t.height) || 0;
  const s = Fn(e), c = s ? e.offsetWidth : n, l = s ? e.offsetHeight : o, u = oa(n) !== c || oa(o) !== l;
  return u && (n = c, o = l), {
    width: n,
    height: o,
    $: u
  };
}
function _u(e) {
  return Cn(e) ? e : e.contextElement;
}
function Wi(e) {
  const t = _u(e);
  if (!Fn(t))
    return In(1);
  const n = t.getBoundingClientRect(), {
    width: o,
    height: s,
    $: c
  } = gg(t);
  let l = (c ? oa(n.width) : n.width) / o, u = (c ? oa(n.height) : n.height) / s;
  return (!l || !Number.isFinite(l)) && (l = 1), (!u || !Number.isFinite(u)) && (u = 1), {
    x: l,
    y: u
  };
}
const MA = /* @__PURE__ */ In(0);
function vg(e) {
  const t = nn(e);
  return !Pu() || !t.visualViewport ? MA : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function OA(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== nn(e) ? !1 : t;
}
function ci(e, t, n, o) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const s = e.getBoundingClientRect(), c = _u(e);
  let l = In(1);
  t && (o ? Cn(o) && (l = Wi(o)) : l = Wi(e));
  const u = OA(c, n, o) ? vg(c) : In(0);
  let d = (s.left + u.x) / l.x, f = (s.top + u.y) / l.y, m = s.width / l.x, v = s.height / l.y;
  if (c) {
    const x = nn(c), g = o && Cn(o) ? nn(o) : o;
    let T = x, S = Gc(T);
    for (; S && o && g !== T; ) {
      const P = Wi(S), _ = S.getBoundingClientRect(), E = Tn(S), O = _.left + (S.clientLeft + parseFloat(E.paddingLeft)) * P.x, N = _.top + (S.clientTop + parseFloat(E.paddingTop)) * P.y;
      d *= P.x, f *= P.y, m *= P.x, v *= P.y, d += O, f += N, T = nn(S), S = Gc(T);
    }
  }
  return aa({
    width: m,
    height: v,
    x: d,
    y: f
  });
}
function Au(e, t) {
  const n = Ra(e).scrollLeft;
  return t ? t.left + n : ci(Bn(e)).left + n;
}
function yg(e, t, n) {
  n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), s = o.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    Au(e, o)
  )), c = o.top + t.scrollTop;
  return {
    x: s,
    y: c
  };
}
function jA(e) {
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
  }, f = In(1);
  const m = In(0), v = Fn(o);
  if ((v || !v && !c) && ((Zi(o) !== "body" || Ho(l)) && (d = Ra(o)), Fn(o))) {
    const g = ci(o);
    f = Wi(o), m.x = g.x + o.clientLeft, m.y = g.y + o.clientTop;
  }
  const x = l && !v && !c ? yg(l, d, !0) : In(0);
  return {
    width: n.width * f.x,
    height: n.height * f.y,
    x: n.x * f.x - d.scrollLeft * f.x + m.x + x.x,
    y: n.y * f.y - d.scrollTop * f.y + m.y + x.y
  };
}
function DA(e) {
  return Array.from(e.getClientRects());
}
function IA(e) {
  const t = Bn(e), n = Ra(e), o = e.ownerDocument.body, s = en(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth), c = en(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight);
  let l = -n.scrollLeft + Au(e);
  const u = -n.scrollTop;
  return Tn(o).direction === "rtl" && (l += en(t.clientWidth, o.clientWidth) - s), {
    width: s,
    height: c,
    x: l,
    y: u
  };
}
function kA(e, t) {
  const n = nn(e), o = Bn(e), s = n.visualViewport;
  let c = o.clientWidth, l = o.clientHeight, u = 0, d = 0;
  if (s) {
    c = s.width, l = s.height;
    const f = Pu();
    (!f || f && t === "fixed") && (u = s.offsetLeft, d = s.offsetTop);
  }
  return {
    width: c,
    height: l,
    x: u,
    y: d
  };
}
function LA(e, t) {
  const n = ci(e, !0, t === "fixed"), o = n.top + e.clientTop, s = n.left + e.clientLeft, c = Fn(e) ? Wi(e) : In(1), l = e.clientWidth * c.x, u = e.clientHeight * c.y, d = s * c.x, f = o * c.y;
  return {
    width: l,
    height: u,
    x: d,
    y: f
  };
}
function vp(e, t, n) {
  let o;
  if (t === "viewport")
    o = kA(e, n);
  else if (t === "document")
    o = IA(Bn(e));
  else if (Cn(t))
    o = LA(t, n);
  else {
    const s = vg(e);
    o = {
      x: t.x - s.x,
      y: t.y - s.y,
      width: t.width,
      height: t.height
    };
  }
  return aa(o);
}
function xg(e, t) {
  const n = Mr(e);
  return n === t || !Cn(n) || Ui(n) ? !1 : Tn(n).position === "fixed" || xg(n, t);
}
function VA(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let o = Io(e, [], !1).filter((u) => Cn(u) && Zi(u) !== "body"), s = null;
  const c = Tn(e).position === "fixed";
  let l = c ? Mr(e) : e;
  for (; Cn(l) && !Ui(l); ) {
    const u = Tn(l), d = Tu(l);
    !d && u.position === "fixed" && (s = null), (c ? !d && !s : !d && u.position === "static" && !!s && ["absolute", "fixed"].includes(s.position) || Ho(l) && !d && xg(e, l)) ? o = o.filter((m) => m !== l) : s = u, l = Mr(l);
  }
  return t.set(e, o), o;
}
function FA(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: o,
    strategy: s
  } = e;
  const l = [...n === "clippingAncestors" ? Ea(t) ? [] : VA(t, this._c) : [].concat(n), o], u = l[0], d = l.reduce((f, m) => {
    const v = vp(t, m, s);
    return f.top = en(v.top, f.top), f.right = Rr(v.right, f.right), f.bottom = Rr(v.bottom, f.bottom), f.left = en(v.left, f.left), f;
  }, vp(t, u, s));
  return {
    width: d.right - d.left,
    height: d.bottom - d.top,
    x: d.left,
    y: d.top
  };
}
function BA(e) {
  const {
    width: t,
    height: n
  } = gg(e);
  return {
    width: t,
    height: n
  };
}
function WA(e, t, n) {
  const o = Fn(t), s = Bn(t), c = n === "fixed", l = ci(e, !0, c, t);
  let u = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const d = In(0);
  if (o || !o && !c)
    if ((Zi(t) !== "body" || Ho(s)) && (u = Ra(t)), o) {
      const x = ci(t, !0, c, t);
      d.x = x.x + t.clientLeft, d.y = x.y + t.clientTop;
    } else
      s && (d.x = Au(s));
  const f = s && !o && !c ? yg(s, u) : In(0), m = l.left + u.scrollLeft - d.x - f.x, v = l.top + u.scrollTop - d.y - f.y;
  return {
    x: m,
    y: v,
    width: l.width,
    height: l.height
  };
}
function yc(e) {
  return Tn(e).position === "static";
}
function yp(e, t) {
  if (!Fn(e) || Tn(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Bn(e) === n && (n = n.ownerDocument.body), n;
}
function bg(e, t) {
  const n = nn(e);
  if (Ea(e))
    return n;
  if (!Fn(e)) {
    let s = Mr(e);
    for (; s && !Ui(s); ) {
      if (Cn(s) && !yc(s))
        return s;
      s = Mr(s);
    }
    return n;
  }
  let o = yp(e, t);
  for (; o && RA(o) && yc(o); )
    o = yp(o, t);
  return o && Ui(o) && yc(o) && !Tu(o) ? n : o || NA(e) || n;
}
const $A = async function(e) {
  const t = this.getOffsetParent || bg, n = this.getDimensions, o = await n(e.floating);
  return {
    reference: WA(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: o.width,
      height: o.height
    }
  };
};
function UA(e) {
  return Tn(e).direction === "rtl";
}
const HA = {
  convertOffsetParentRelativeRectToViewportRelativeRect: jA,
  getDocumentElement: Bn,
  getClippingRect: FA,
  getOffsetParent: bg,
  getElementRects: $A,
  getClientRects: DA,
  getDimensions: BA,
  getScale: Wi,
  isElement: Cn,
  isRTL: UA
};
function zA(e, t) {
  let n = null, o;
  const s = Bn(e);
  function c() {
    var u;
    clearTimeout(o), (u = n) == null || u.disconnect(), n = null;
  }
  function l(u, d) {
    u === void 0 && (u = !1), d === void 0 && (d = 1), c();
    const {
      left: f,
      top: m,
      width: v,
      height: x
    } = e.getBoundingClientRect();
    if (u || t(), !v || !x)
      return;
    const g = Bs(m), T = Bs(s.clientWidth - (f + v)), S = Bs(s.clientHeight - (m + x)), P = Bs(f), E = {
      rootMargin: -g + "px " + -T + "px " + -S + "px " + -P + "px",
      threshold: en(0, Rr(1, d)) || 1
    };
    let O = !0;
    function N(D) {
      const W = D[0].intersectionRatio;
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
function GA(e, t, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: s = !0,
    ancestorResize: c = !0,
    elementResize: l = typeof ResizeObserver == "function",
    layoutShift: u = typeof IntersectionObserver == "function",
    animationFrame: d = !1
  } = o, f = _u(e), m = s || c ? [...f ? Io(f) : [], ...Io(t)] : [];
  m.forEach((_) => {
    s && _.addEventListener("scroll", n, {
      passive: !0
    }), c && _.addEventListener("resize", n);
  });
  const v = f && u ? zA(f, n) : null;
  let x = -1, g = null;
  l && (g = new ResizeObserver((_) => {
    let [E] = _;
    E && E.target === f && g && (g.unobserve(t), cancelAnimationFrame(x), x = requestAnimationFrame(() => {
      var O;
      (O = g) == null || O.observe(t);
    })), n();
  }), f && !d && g.observe(f), g.observe(t));
  let T, S = d ? ci(e) : null;
  d && P();
  function P() {
    const _ = ci(e);
    S && (_.x !== S.x || _.y !== S.y || _.width !== S.width || _.height !== S.height) && n(), S = _, T = requestAnimationFrame(P);
  }
  return n(), () => {
    var _;
    m.forEach((E) => {
      s && E.removeEventListener("scroll", n), c && E.removeEventListener("resize", n);
    }), v == null || v(), (_ = g) == null || _.disconnect(), g = null, d && cancelAnimationFrame(T);
  };
}
const KA = PA, YA = _A, qA = SA, XA = EA, ZA = CA, xp = wA, JA = AA, QA = (e, t, n) => {
  const o = /* @__PURE__ */ new Map(), s = {
    platform: HA,
    ...n
  }, c = {
    ...s.platform,
    _c: o
  };
  return bA(e, t, {
    ...s,
    platform: c
  });
};
var Zs = typeof document < "u" ? Hm : Wo;
function la(e, t) {
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
        if (!la(e[o], t[o]))
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
      if (!(c === "_owner" && e.$$typeof) && !la(e[c], t[c]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function wg(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function bp(e, t) {
  const n = wg(e);
  return Math.round(t * n) / n;
}
function xc(e) {
  const t = w.useRef(e);
  return Zs(() => {
    t.current = e;
  }), t;
}
function eE(e) {
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
    open: f
  } = e, [m, v] = w.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [x, g] = w.useState(o);
  la(x, o) || g(o);
  const [T, S] = w.useState(null), [P, _] = w.useState(null), E = w.useCallback((q) => {
    q !== W.current && (W.current = q, S(q));
  }, []), O = w.useCallback((q) => {
    q !== $.current && ($.current = q, _(q));
  }, []), N = c || T, D = l || P, W = w.useRef(null), $ = w.useRef(null), H = w.useRef(m), te = d != null, re = xc(d), fe = xc(s), J = xc(f), se = w.useCallback(() => {
    if (!W.current || !$.current)
      return;
    const q = {
      placement: t,
      strategy: n,
      middleware: x
    };
    fe.current && (q.platform = fe.current), QA(W.current, $.current, q).then((G) => {
      const pe = {
        ...G,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: J.current !== !1
      };
      ne.current && !la(H.current, pe) && (H.current = pe, Ca.flushSync(() => {
        v(pe);
      }));
    });
  }, [x, t, n, fe, J]);
  Zs(() => {
    f === !1 && H.current.isPositioned && (H.current.isPositioned = !1, v((q) => ({
      ...q,
      isPositioned: !1
    })));
  }, [f]);
  const ne = w.useRef(!1);
  Zs(() => (ne.current = !0, () => {
    ne.current = !1;
  }), []), Zs(() => {
    if (N && (W.current = N), D && ($.current = D), N && D) {
      if (re.current)
        return re.current(N, D, se);
      se();
    }
  }, [N, D, se, re, te]);
  const Te = w.useMemo(() => ({
    reference: W,
    floating: $,
    setReference: E,
    setFloating: O
  }), [E, O]), ie = w.useMemo(() => ({
    reference: N,
    floating: D
  }), [N, D]), Z = w.useMemo(() => {
    const q = {
      position: n,
      left: 0,
      top: 0
    };
    if (!ie.floating)
      return q;
    const G = bp(ie.floating, m.x), pe = bp(ie.floating, m.y);
    return u ? {
      ...q,
      transform: "translate(" + G + "px, " + pe + "px)",
      ...wg(ie.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: G,
      top: pe
    };
  }, [n, u, ie.floating, m.x, m.y]);
  return w.useMemo(() => ({
    ...m,
    update: se,
    refs: Te,
    elements: ie,
    floatingStyles: Z
  }), [m, se, Te, ie, Z]);
}
const tE = (e) => {
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
      return o && t(o) ? o.current != null ? xp({
        element: o.current,
        padding: s
      }).fn(n) : {} : o ? xp({
        element: o,
        padding: s
      }).fn(n) : {};
    }
  };
}, nE = (e, t) => ({
  ...KA(e),
  options: [e, t]
}), rE = (e, t) => ({
  ...YA(e),
  options: [e, t]
}), iE = (e, t) => ({
  ...JA(e),
  options: [e, t]
}), oE = (e, t) => ({
  ...qA(e),
  options: [e, t]
}), sE = (e, t) => ({
  ...XA(e),
  options: [e, t]
}), aE = (e, t) => ({
  ...ZA(e),
  options: [e, t]
}), lE = (e, t) => ({
  ...tE(e),
  options: [e, t]
});
var cE = "Arrow", Sg = w.forwardRef((e, t) => {
  const { children: n, width: o = 10, height: s = 5, ...c } = e;
  return /* @__PURE__ */ p.jsx(
    Ve.svg,
    {
      ...c,
      ref: t,
      width: o,
      height: s,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : /* @__PURE__ */ p.jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
Sg.displayName = cE;
var uE = Sg;
function dE(e, t = []) {
  let n = [];
  function o(c, l) {
    const u = w.createContext(l), d = n.length;
    n = [...n, l];
    function f(v) {
      const { scope: x, children: g, ...T } = v, S = (x == null ? void 0 : x[e][d]) || u, P = w.useMemo(() => T, Object.values(T));
      return /* @__PURE__ */ p.jsx(S.Provider, { value: P, children: g });
    }
    function m(v, x) {
      const g = (x == null ? void 0 : x[e][d]) || u, T = w.useContext(g);
      if (T)
        return T;
      if (l !== void 0)
        return l;
      throw new Error(`\`${v}\` must be used within \`${c}\``);
    }
    return f.displayName = c + "Provider", [f, m];
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
  return s.scopeName = e, [o, fE(s, ...t)];
}
function fE(...e) {
  const t = e[0];
  if (e.length === 1)
    return t;
  const n = () => {
    const o = e.map((s) => ({
      useScope: s(),
      scopeName: s.scopeName
    }));
    return function(c) {
      const l = o.reduce((u, { useScope: d, scopeName: f }) => {
        const v = d(c)[`__scope${f}`];
        return { ...u, ...v };
      }, {});
      return w.useMemo(() => ({ [`__scope${t.scopeName}`]: l }), [l]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
function Cg(e) {
  const [t, n] = w.useState(void 0);
  return Lt(() => {
    if (e) {
      n({ width: e.offsetWidth, height: e.offsetHeight });
      const o = new ResizeObserver((s) => {
        if (!Array.isArray(s) || !s.length)
          return;
        const c = s[0];
        let l, u;
        if ("borderBoxSize" in c) {
          const d = c.borderBoxSize, f = Array.isArray(d) ? d[0] : d;
          l = f.inlineSize, u = f.blockSize;
        } else
          l = e.offsetWidth, u = e.offsetHeight;
        n({ width: l, height: u });
      });
      return o.observe(e, { box: "border-box" }), () => o.unobserve(e);
    } else
      n(void 0);
  }, [e]), t;
}
var Eu = "Popper", [Tg, Na] = dE(Eu), [hE, Pg] = Tg(Eu), _g = (e) => {
  const { __scopePopper: t, children: n } = e, [o, s] = w.useState(null);
  return /* @__PURE__ */ p.jsx(hE, { scope: t, anchor: o, onAnchorChange: s, children: n });
};
_g.displayName = Eu;
var Ag = "PopperAnchor", Eg = w.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: o, ...s } = e, c = Pg(Ag, n), l = w.useRef(null), u = nt(t, l);
    return w.useEffect(() => {
      c.onAnchorChange((o == null ? void 0 : o.current) || l.current);
    }), o ? null : /* @__PURE__ */ p.jsx(Ve.div, { ...s, ref: u });
  }
);
Eg.displayName = Ag;
var Ru = "PopperContent", [pE, mE] = Tg(Ru), Rg = w.forwardRef(
  (e, t) => {
    var X, be, Le, Se, ve, _e;
    const {
      __scopePopper: n,
      side: o = "bottom",
      sideOffset: s = 0,
      align: c = "center",
      alignOffset: l = 0,
      arrowPadding: u = 0,
      avoidCollisions: d = !0,
      collisionBoundary: f = [],
      collisionPadding: m = 0,
      sticky: v = "partial",
      hideWhenDetached: x = !1,
      updatePositionStrategy: g = "optimized",
      onPlaced: T,
      ...S
    } = e, P = Pg(Ru, n), [_, E] = w.useState(null), O = nt(t, (lt) => E(lt)), [N, D] = w.useState(null), W = Cg(N), $ = (W == null ? void 0 : W.width) ?? 0, H = (W == null ? void 0 : W.height) ?? 0, te = o + (c !== "center" ? "-" + c : ""), re = typeof m == "number" ? m : { top: 0, right: 0, bottom: 0, left: 0, ...m }, fe = Array.isArray(f) ? f : [f], J = fe.length > 0, se = {
      padding: re,
      boundary: fe.filter(vE),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: J
    }, { refs: ne, floatingStyles: Te, placement: ie, isPositioned: Z, middlewareData: q } = eE({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: te,
      whileElementsMounted: (...lt) => GA(...lt, {
        animationFrame: g === "always"
      }),
      elements: {
        reference: P.anchor
      },
      middleware: [
        nE({ mainAxis: s + H, alignmentAxis: l }),
        d && rE({
          mainAxis: !0,
          crossAxis: !1,
          limiter: v === "partial" ? iE() : void 0,
          ...se
        }),
        d && oE({ ...se }),
        sE({
          ...se,
          apply: ({ elements: lt, rects: Ye, availableWidth: ht, availableHeight: Mt }) => {
            const { width: ct, height: on } = Ye.reference, Vt = lt.floating.style;
            Vt.setProperty("--radix-popper-available-width", `${ht}px`), Vt.setProperty("--radix-popper-available-height", `${Mt}px`), Vt.setProperty("--radix-popper-anchor-width", `${ct}px`), Vt.setProperty("--radix-popper-anchor-height", `${on}px`);
          }
        }),
        N && lE({ element: N, padding: u }),
        yE({ arrowWidth: $, arrowHeight: H }),
        x && aE({ strategy: "referenceHidden", ...se })
      ]
    }), [G, pe] = Og(ie), Ee = rr(T);
    Lt(() => {
      Z && (Ee == null || Ee());
    }, [Z, Ee]);
    const Pe = (X = q.arrow) == null ? void 0 : X.x, ge = (be = q.arrow) == null ? void 0 : be.y, Re = ((Le = q.arrow) == null ? void 0 : Le.centerOffset) !== 0, [Be, et] = w.useState();
    return Lt(() => {
      _ && et(window.getComputedStyle(_).zIndex);
    }, [_]), /* @__PURE__ */ p.jsx(
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
          ...((_e = q.hide) == null ? void 0 : _e.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ p.jsx(
          pE,
          {
            scope: n,
            placedSide: G,
            onArrowChange: D,
            arrowX: Pe,
            arrowY: ge,
            shouldHideArrow: Re,
            children: /* @__PURE__ */ p.jsx(
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
Rg.displayName = Ru;
var Ng = "PopperArrow", gE = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, Mg = w.forwardRef(function(t, n) {
  const { __scopePopper: o, ...s } = t, c = mE(Ng, o), l = gE[c.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ p.jsx(
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
        children: /* @__PURE__ */ p.jsx(
          uE,
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
Mg.displayName = Ng;
function vE(e) {
  return e !== null;
}
var yE = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var P, _, E;
    const { placement: n, rects: o, middlewareData: s } = t, l = ((P = s.arrow) == null ? void 0 : P.centerOffset) !== 0, u = l ? 0 : e.arrowWidth, d = l ? 0 : e.arrowHeight, [f, m] = Og(n), v = { start: "0%", center: "50%", end: "100%" }[m], x = (((_ = s.arrow) == null ? void 0 : _.x) ?? 0) + u / 2, g = (((E = s.arrow) == null ? void 0 : E.y) ?? 0) + d / 2;
    let T = "", S = "";
    return f === "bottom" ? (T = l ? v : `${x}px`, S = `${-d}px`) : f === "top" ? (T = l ? v : `${x}px`, S = `${o.floating.height + d}px`) : f === "right" ? (T = `${-d}px`, S = l ? v : `${g}px`) : f === "left" && (T = `${o.floating.width + d}px`, S = l ? v : `${g}px`), { data: { x: T, y: S } };
  }
});
function Og(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var jg = _g, Dg = Eg, Ig = Rg, kg = Mg, xE = "Portal", Nu = w.forwardRef((e, t) => {
  var u;
  const { container: n, ...o } = e, [s, c] = w.useState(!1);
  Lt(() => c(!0), []);
  const l = n || s && ((u = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : u.body);
  return l ? Km.createPortal(/* @__PURE__ */ p.jsx(Ve.div, { ...o, ref: t }), l) : null;
});
Nu.displayName = xE;
function ko({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  }
}) {
  const [o, s] = bE({ defaultProp: t, onChange: n }), c = e !== void 0, l = c ? e : o, u = rr(n), d = w.useCallback(
    (f) => {
      if (c) {
        const v = typeof f == "function" ? f(e) : f;
        v !== e && u(v);
      } else
        s(f);
    },
    [c, e, s, u]
  );
  return [l, d];
}
function bE({
  defaultProp: e,
  onChange: t
}) {
  const n = w.useState(e), [o] = n, s = w.useRef(o), c = rr(t);
  return w.useEffect(() => {
    s.current !== o && (c(o), s.current = o);
  }, [o, s, c]), n;
}
function Lg(e) {
  const t = w.useRef({ value: e, previous: e });
  return w.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
var wE = "VisuallyHidden", Mu = w.forwardRef(
  (e, t) => /* @__PURE__ */ p.jsx(
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
Mu.displayName = wE;
var SE = Mu, CE = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Oi = /* @__PURE__ */ new WeakMap(), Ws = /* @__PURE__ */ new WeakMap(), $s = {}, bc = 0, Vg = function(e) {
  return e && (e.host || Vg(e.parentNode));
}, TE = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var o = Vg(n);
    return o && e.contains(o) ? o : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, PE = function(e, t, n, o) {
  var s = TE(t, Array.isArray(e) ? e : [e]);
  $s[n] || ($s[n] = /* @__PURE__ */ new WeakMap());
  var c = $s[n], l = [], u = /* @__PURE__ */ new Set(), d = new Set(s), f = function(v) {
    !v || u.has(v) || (u.add(v), f(v.parentNode));
  };
  s.forEach(f);
  var m = function(v) {
    !v || d.has(v) || Array.prototype.forEach.call(v.children, function(x) {
      if (u.has(x))
        m(x);
      else
        try {
          var g = x.getAttribute(o), T = g !== null && g !== "false", S = (Oi.get(x) || 0) + 1, P = (c.get(x) || 0) + 1;
          Oi.set(x, S), c.set(x, P), l.push(x), S === 1 && T && Ws.set(x, !0), P === 1 && x.setAttribute(n, "true"), T || x.setAttribute(o, "true");
        } catch (_) {
          console.error("aria-hidden: cannot operate on ", x, _);
        }
    });
  };
  return m(t), u.clear(), bc++, function() {
    l.forEach(function(v) {
      var x = Oi.get(v) - 1, g = c.get(v) - 1;
      Oi.set(v, x), c.set(v, g), x || (Ws.has(v) || v.removeAttribute(o), Ws.delete(v)), g || v.removeAttribute(n);
    }), bc--, bc || (Oi = /* @__PURE__ */ new WeakMap(), Oi = /* @__PURE__ */ new WeakMap(), Ws = /* @__PURE__ */ new WeakMap(), $s = {});
  };
}, Fg = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var o = Array.from(Array.isArray(e) ? e : [e]), s = CE(e);
  return s ? (o.push.apply(o, Array.from(s.querySelectorAll("[aria-live]"))), PE(o, s, n, "aria-hidden")) : function() {
    return null;
  };
}, Tr = function() {
  return Tr = Object.assign || function(t) {
    for (var n, o = 1, s = arguments.length; o < s; o++) {
      n = arguments[o];
      for (var c in n)
        Object.prototype.hasOwnProperty.call(n, c) && (t[c] = n[c]);
    }
    return t;
  }, Tr.apply(this, arguments);
};
function _E(e, t) {
  var n = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, o = Object.getOwnPropertySymbols(e); s < o.length; s++)
      t.indexOf(o[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[s]) && (n[o[s]] = e[o[s]]);
  return n;
}
function AE(e, t, n) {
  if (n || arguments.length === 2)
    for (var o = 0, s = t.length, c; o < s; o++)
      (c || !(o in t)) && (c || (c = Array.prototype.slice.call(t, 0, o)), c[o] = t[o]);
  return e.concat(c || Array.prototype.slice.call(t));
}
var Js = "right-scroll-bar-position", Qs = "width-before-scroll-bar", EE = "with-scroll-bars-hidden", RE = "--removed-body-scroll-bar-size";
function wc(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function NE(e, t) {
  var n = tn(function() {
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
var ME = typeof window < "u" ? w.useLayoutEffect : w.useEffect, wp = /* @__PURE__ */ new WeakMap();
function OE(e, t) {
  var n = NE(null, function(o) {
    return e.forEach(function(s) {
      return wc(s, o);
    });
  });
  return ME(function() {
    var o = wp.get(n);
    if (o) {
      var s = new Set(o), c = new Set(e), l = n.current;
      s.forEach(function(u) {
        c.has(u) || wc(u, null);
      }), c.forEach(function(u) {
        s.has(u) || wc(u, l);
      });
    }
    wp.set(n, e);
  }, [e]), n;
}
var ca = function() {
  return ca = Object.assign || function(t) {
    for (var n, o = 1, s = arguments.length; o < s; o++) {
      n = arguments[o];
      for (var c in n)
        Object.prototype.hasOwnProperty.call(n, c) && (t[c] = n[c]);
    }
    return t;
  }, ca.apply(this, arguments);
};
function jE(e, t) {
  var n = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, o = Object.getOwnPropertySymbols(e); s < o.length; s++)
      t.indexOf(o[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[s]) && (n[o[s]] = e[o[s]]);
  return n;
}
function DE(e) {
  return e;
}
function IE(e, t) {
  t === void 0 && (t = DE);
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
        var m = l;
        l = [], m.forEach(c);
      }, f = function() {
        return Promise.resolve().then(d);
      };
      f(), n = {
        push: function(m) {
          l.push(m), f();
        },
        filter: function(m) {
          return l = l.filter(m), n;
        }
      };
    }
  };
  return s;
}
function kE(e) {
  e === void 0 && (e = {});
  var t = IE(null);
  return t.options = ca({ async: !0, ssr: !1 }, e), t;
}
var Bg = function(e) {
  var t = e.sideCar, n = jE(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var o = t.read();
  if (!o)
    throw new Error("Sidecar medium not found");
  return w.createElement(o, ca({}, n));
};
Bg.isSideCarExport = !0;
function LE(e, t) {
  return e.useMedium(t), Bg;
}
var Wg = kE(), Sc = function() {
}, Ma = w.forwardRef(function(e, t) {
  var n = w.useRef(null), o = w.useState({
    onScrollCapture: Sc,
    onWheelCapture: Sc,
    onTouchMoveCapture: Sc
  }), s = o[0], c = o[1], l = e.forwardProps, u = e.children, d = e.className, f = e.removeScrollBar, m = e.enabled, v = e.shards, x = e.sideCar, g = e.noIsolation, T = e.inert, S = e.allowPinchZoom, P = e.as, _ = P === void 0 ? "div" : P, E = e.gapMode, O = _E(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), N = x, D = OE([n, t]), W = Tr(Tr({}, O), s);
  return w.createElement(
    w.Fragment,
    null,
    m && w.createElement(N, { sideCar: Wg, removeScrollBar: f, shards: v, noIsolation: g, inert: T, setCallbacks: c, allowPinchZoom: !!S, lockRef: n, gapMode: E }),
    l ? w.cloneElement(w.Children.only(u), Tr(Tr({}, W), { ref: D })) : w.createElement(_, Tr({}, W, { className: d, ref: D }), u)
  );
});
Ma.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Ma.classNames = {
  fullWidth: Qs,
  zeroRight: Js
};
var VE = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function FE() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = VE();
  return t && e.setAttribute("nonce", t), e;
}
function BE(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function WE(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var $E = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = FE()) && (BE(t, n), WE(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, UE = function() {
  var e = $E();
  return function(t, n) {
    w.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, $g = function() {
  var e = UE(), t = function(n) {
    var o = n.styles, s = n.dynamic;
    return e(o, s), null;
  };
  return t;
}, HE = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Cc = function(e) {
  return parseInt(e || "", 10) || 0;
}, zE = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], o = t[e === "padding" ? "paddingTop" : "marginTop"], s = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Cc(n), Cc(o), Cc(s)];
}, GE = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return HE;
  var t = zE(e), n = document.documentElement.clientWidth, o = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, o - n + t[2] - t[0])
  };
}, KE = $g(), $i = "data-scroll-locked", YE = function(e, t, n, o) {
  var s = e.left, c = e.top, l = e.right, u = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(EE, ` {
   overflow: hidden `).concat(o, `;
   padding-right: `).concat(u, "px ").concat(o, `;
  }
  body[`).concat($i, `] {
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
  
  .`).concat(Js, ` {
    right: `).concat(u, "px ").concat(o, `;
  }
  
  .`).concat(Qs, ` {
    margin-right: `).concat(u, "px ").concat(o, `;
  }
  
  .`).concat(Js, " .").concat(Js, ` {
    right: 0 `).concat(o, `;
  }
  
  .`).concat(Qs, " .").concat(Qs, ` {
    margin-right: 0 `).concat(o, `;
  }
  
  body[`).concat($i, `] {
    `).concat(RE, ": ").concat(u, `px;
  }
`);
}, Sp = function() {
  var e = parseInt(document.body.getAttribute($i) || "0", 10);
  return isFinite(e) ? e : 0;
}, qE = function() {
  w.useEffect(function() {
    return document.body.setAttribute($i, (Sp() + 1).toString()), function() {
      var e = Sp() - 1;
      e <= 0 ? document.body.removeAttribute($i) : document.body.setAttribute($i, e.toString());
    };
  }, []);
}, XE = function(e) {
  var t = e.noRelative, n = e.noImportant, o = e.gapMode, s = o === void 0 ? "margin" : o;
  qE();
  var c = w.useMemo(function() {
    return GE(s);
  }, [s]);
  return w.createElement(KE, { styles: YE(c, !t, s, n ? "" : "!important") });
}, Kc = !1;
if (typeof window < "u")
  try {
    var Us = Object.defineProperty({}, "passive", {
      get: function() {
        return Kc = !0, !0;
      }
    });
    window.addEventListener("test", Us, Us), window.removeEventListener("test", Us, Us);
  } catch {
    Kc = !1;
  }
var ji = Kc ? { passive: !1 } : !1, ZE = function(e) {
  return e.tagName === "TEXTAREA";
}, Ug = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !ZE(e) && n[t] === "visible")
  );
}, JE = function(e) {
  return Ug(e, "overflowY");
}, QE = function(e) {
  return Ug(e, "overflowX");
}, Cp = function(e, t) {
  var n = t.ownerDocument, o = t;
  do {
    typeof ShadowRoot < "u" && o instanceof ShadowRoot && (o = o.host);
    var s = Hg(e, o);
    if (s) {
      var c = zg(e, o), l = c[1], u = c[2];
      if (l > u)
        return !0;
    }
    o = o.parentNode;
  } while (o && o !== n.body);
  return !1;
}, eR = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, o = e.clientHeight;
  return [
    t,
    n,
    o
  ];
}, tR = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, o = e.clientWidth;
  return [
    t,
    n,
    o
  ];
}, Hg = function(e, t) {
  return e === "v" ? JE(t) : QE(t);
}, zg = function(e, t) {
  return e === "v" ? eR(t) : tR(t);
}, nR = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, rR = function(e, t, n, o, s) {
  var c = nR(e, window.getComputedStyle(t).direction), l = c * o, u = n.target, d = t.contains(u), f = !1, m = l > 0, v = 0, x = 0;
  do {
    var g = zg(e, u), T = g[0], S = g[1], P = g[2], _ = S - P - c * T;
    (T || _) && Hg(e, u) && (v += _, x += T), u instanceof ShadowRoot ? u = u.host : u = u.parentNode;
  } while (
    // portaled content
    !d && u !== document.body || // self content
    d && (t.contains(u) || t === u)
  );
  return (m && (Math.abs(v) < 1 || !s) || !m && (Math.abs(x) < 1 || !s)) && (f = !0), f;
}, Hs = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Tp = function(e) {
  return [e.deltaX, e.deltaY];
}, Pp = function(e) {
  return e && "current" in e ? e.current : e;
}, iR = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, oR = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, sR = 0, Di = [];
function aR(e) {
  var t = w.useRef([]), n = w.useRef([0, 0]), o = w.useRef(), s = w.useState(sR++)[0], c = w.useState($g)[0], l = w.useRef(e);
  w.useEffect(function() {
    l.current = e;
  }, [e]), w.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(s));
      var S = AE([e.lockRef.current], (e.shards || []).map(Pp), !0).filter(Boolean);
      return S.forEach(function(P) {
        return P.classList.add("allow-interactivity-".concat(s));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(s)), S.forEach(function(P) {
          return P.classList.remove("allow-interactivity-".concat(s));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var u = w.useCallback(function(S, P) {
    if ("touches" in S && S.touches.length === 2 || S.type === "wheel" && S.ctrlKey)
      return !l.current.allowPinchZoom;
    var _ = Hs(S), E = n.current, O = "deltaX" in S ? S.deltaX : E[0] - _[0], N = "deltaY" in S ? S.deltaY : E[1] - _[1], D, W = S.target, $ = Math.abs(O) > Math.abs(N) ? "h" : "v";
    if ("touches" in S && $ === "h" && W.type === "range")
      return !1;
    var H = Cp($, W);
    if (!H)
      return !0;
    if (H ? D = $ : (D = $ === "v" ? "h" : "v", H = Cp($, W)), !H)
      return !1;
    if (!o.current && "changedTouches" in S && (O || N) && (o.current = D), !D)
      return !0;
    var te = o.current || D;
    return rR(te, P, S, te === "h" ? O : N, !0);
  }, []), d = w.useCallback(function(S) {
    var P = S;
    if (!(!Di.length || Di[Di.length - 1] !== c)) {
      var _ = "deltaY" in P ? Tp(P) : Hs(P), E = t.current.filter(function(D) {
        return D.name === P.type && (D.target === P.target || P.target === D.shadowParent) && iR(D.delta, _);
      })[0];
      if (E && E.should) {
        P.cancelable && P.preventDefault();
        return;
      }
      if (!E) {
        var O = (l.current.shards || []).map(Pp).filter(Boolean).filter(function(D) {
          return D.contains(P.target);
        }), N = O.length > 0 ? u(P, O[0]) : !l.current.noIsolation;
        N && P.cancelable && P.preventDefault();
      }
    }
  }, []), f = w.useCallback(function(S, P, _, E) {
    var O = { name: S, delta: P, target: _, should: E, shadowParent: lR(_) };
    t.current.push(O), setTimeout(function() {
      t.current = t.current.filter(function(N) {
        return N !== O;
      });
    }, 1);
  }, []), m = w.useCallback(function(S) {
    n.current = Hs(S), o.current = void 0;
  }, []), v = w.useCallback(function(S) {
    f(S.type, Tp(S), S.target, u(S, e.lockRef.current));
  }, []), x = w.useCallback(function(S) {
    f(S.type, Hs(S), S.target, u(S, e.lockRef.current));
  }, []);
  w.useEffect(function() {
    return Di.push(c), e.setCallbacks({
      onScrollCapture: v,
      onWheelCapture: v,
      onTouchMoveCapture: x
    }), document.addEventListener("wheel", d, ji), document.addEventListener("touchmove", d, ji), document.addEventListener("touchstart", m, ji), function() {
      Di = Di.filter(function(S) {
        return S !== c;
      }), document.removeEventListener("wheel", d, ji), document.removeEventListener("touchmove", d, ji), document.removeEventListener("touchstart", m, ji);
    };
  }, []);
  var g = e.removeScrollBar, T = e.inert;
  return w.createElement(
    w.Fragment,
    null,
    T ? w.createElement(c, { styles: oR(s) }) : null,
    g ? w.createElement(XE, { gapMode: e.gapMode }) : null
  );
}
function lR(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const cR = LE(Wg, aR);
var Ou = w.forwardRef(function(e, t) {
  return w.createElement(Ma, Tr({}, e, { ref: t, sideCar: cR }));
});
Ou.classNames = Ma.classNames;
var uR = [" ", "Enter", "ArrowUp", "ArrowDown"], dR = [" ", "Enter"], zo = "Select", [Oa, ja, fR] = $_(zo), [Ji, vD] = Pa(zo, [
  fR,
  Na
]), Da = Na(), [hR, kr] = Ji(zo), [pR, mR] = Ji(zo), Gg = (e) => {
  const {
    __scopeSelect: t,
    children: n,
    open: o,
    defaultOpen: s,
    onOpenChange: c,
    value: l,
    defaultValue: u,
    onValueChange: d,
    dir: f,
    name: m,
    autoComplete: v,
    disabled: x,
    required: g,
    form: T
  } = e, S = Da(t), [P, _] = w.useState(null), [E, O] = w.useState(null), [N, D] = w.useState(!1), W = G_(f), [$ = !1, H] = ko({
    prop: o,
    defaultProp: s,
    onChange: c
  }), [te, re] = ko({
    prop: l,
    defaultProp: u,
    onChange: d
  }), fe = w.useRef(null), J = P ? T || !!P.closest("form") : !0, [se, ne] = w.useState(/* @__PURE__ */ new Set()), Te = Array.from(se).map((ie) => ie.props.value).join(";");
  return /* @__PURE__ */ p.jsx(jg, { ...S, children: /* @__PURE__ */ p.jsxs(
    hR,
    {
      required: g,
      scope: t,
      trigger: P,
      onTriggerChange: _,
      valueNode: E,
      onValueNodeChange: O,
      valueNodeHasChildren: N,
      onValueNodeHasChildrenChange: D,
      contentId: si(),
      value: te,
      onValueChange: re,
      open: $,
      onOpenChange: H,
      dir: W,
      triggerPointerDownPosRef: fe,
      disabled: x,
      children: [
        /* @__PURE__ */ p.jsx(Oa.Provider, { scope: t, children: /* @__PURE__ */ p.jsx(
          pR,
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
        J ? /* @__PURE__ */ p.jsxs(
          vv,
          {
            "aria-hidden": !0,
            required: g,
            tabIndex: -1,
            name: m,
            autoComplete: v,
            value: te,
            onChange: (ie) => re(ie.target.value),
            disabled: x,
            form: T,
            children: [
              te === void 0 ? /* @__PURE__ */ p.jsx("option", { value: "" }) : null,
              Array.from(se)
            ]
          },
          Te
        ) : null
      ]
    }
  ) });
};
Gg.displayName = zo;
var Kg = "SelectTrigger", Yg = w.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, disabled: o = !1, ...s } = e, c = Da(n), l = kr(Kg, n), u = l.disabled || o, d = nt(t, l.onTriggerChange), f = ja(n), m = w.useRef("touch"), [v, x, g] = yv((S) => {
      const P = f().filter((O) => !O.disabled), _ = P.find((O) => O.value === l.value), E = xv(P, S, _);
      E !== void 0 && l.onValueChange(E.value);
    }), T = (S) => {
      u || (l.onOpenChange(!0), g()), S && (l.triggerPointerDownPosRef.current = {
        x: Math.round(S.pageX),
        y: Math.round(S.pageY)
      });
    };
    return /* @__PURE__ */ p.jsx(Dg, { asChild: !0, ...c, children: /* @__PURE__ */ p.jsx(
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
        "data-placeholder": gv(l.value) ? "" : void 0,
        ...s,
        ref: d,
        onClick: ke(s.onClick, (S) => {
          S.currentTarget.focus(), m.current !== "mouse" && T(S);
        }),
        onPointerDown: ke(s.onPointerDown, (S) => {
          m.current = S.pointerType;
          const P = S.target;
          P.hasPointerCapture(S.pointerId) && P.releasePointerCapture(S.pointerId), S.button === 0 && S.ctrlKey === !1 && S.pointerType === "mouse" && (T(S), S.preventDefault());
        }),
        onKeyDown: ke(s.onKeyDown, (S) => {
          const P = v.current !== "";
          !(S.ctrlKey || S.altKey || S.metaKey) && S.key.length === 1 && x(S.key), !(P && S.key === " ") && uR.includes(S.key) && (T(), S.preventDefault());
        })
      }
    ) });
  }
);
Yg.displayName = Kg;
var qg = "SelectValue", Xg = w.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: o, style: s, children: c, placeholder: l = "", ...u } = e, d = kr(qg, n), { onValueNodeHasChildrenChange: f } = d, m = c !== void 0, v = nt(t, d.onValueNodeChange);
    return Lt(() => {
      f(m);
    }, [f, m]), /* @__PURE__ */ p.jsx(
      Ve.span,
      {
        ...u,
        ref: v,
        style: { pointerEvents: "none" },
        children: gv(d.value) ? /* @__PURE__ */ p.jsx(p.Fragment, { children: l }) : c
      }
    );
  }
);
Xg.displayName = qg;
var gR = "SelectIcon", Zg = w.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, children: o, ...s } = e;
    return /* @__PURE__ */ p.jsx(Ve.span, { "aria-hidden": !0, ...s, ref: t, children: o || "▼" });
  }
);
Zg.displayName = gR;
var vR = "SelectPortal", Jg = (e) => /* @__PURE__ */ p.jsx(Nu, { asChild: !0, ...e });
Jg.displayName = vR;
var ui = "SelectContent", Qg = w.forwardRef(
  (e, t) => {
    const n = kr(ui, e.__scopeSelect), [o, s] = w.useState();
    if (Lt(() => {
      s(new DocumentFragment());
    }, []), !n.open) {
      const c = o;
      return c ? Ca.createPortal(
        /* @__PURE__ */ p.jsx(ev, { scope: e.__scopeSelect, children: /* @__PURE__ */ p.jsx(Oa.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ p.jsx("div", { children: e.children }) }) }),
        c
      ) : null;
    }
    return /* @__PURE__ */ p.jsx(tv, { ...e, ref: t });
  }
);
Qg.displayName = ui;
var Sn = 10, [ev, Lr] = Ji(ui), yR = "SelectContentImpl", tv = w.forwardRef(
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
      align: f,
      alignOffset: m,
      arrowPadding: v,
      collisionBoundary: x,
      collisionPadding: g,
      sticky: T,
      hideWhenDetached: S,
      avoidCollisions: P,
      //
      ..._
    } = e, E = kr(ui, n), [O, N] = w.useState(null), [D, W] = w.useState(null), $ = nt(t, (X) => N(X)), [H, te] = w.useState(null), [re, fe] = w.useState(
      null
    ), J = ja(n), [se, ne] = w.useState(!1), Te = w.useRef(!1);
    w.useEffect(() => {
      if (O)
        return Fg(O);
    }, [O]), dg();
    const ie = w.useCallback(
      (X) => {
        const [be, ...Le] = J().map((_e) => _e.ref.current), [Se] = Le.slice(-1), ve = document.activeElement;
        for (const _e of X)
          if (_e === ve || (_e == null || _e.scrollIntoView({ block: "nearest" }), _e === be && D && (D.scrollTop = 0), _e === Se && D && (D.scrollTop = D.scrollHeight), _e == null || _e.focus(), document.activeElement !== ve))
            return;
      },
      [J, D]
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
          var ve, _e;
          X = {
            x: Math.abs(Math.round(Se.pageX) - (((ve = G.current) == null ? void 0 : ve.x) ?? 0)),
            y: Math.abs(Math.round(Se.pageY) - (((_e = G.current) == null ? void 0 : _e.y) ?? 0))
          };
        }, Le = (Se) => {
          X.x <= 10 && X.y <= 10 ? Se.preventDefault() : O.contains(Se.target) || q(!1), document.removeEventListener("pointermove", be), G.current = null;
        };
        return G.current !== null && (document.addEventListener("pointermove", be), document.addEventListener("pointerup", Le, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", be), document.removeEventListener("pointerup", Le, { capture: !0 });
        };
      }
    }, [O, q, G]), w.useEffect(() => {
      const X = () => q(!1);
      return window.addEventListener("blur", X), window.addEventListener("resize", X), () => {
        window.removeEventListener("blur", X), window.removeEventListener("resize", X);
      };
    }, [q]);
    const [pe, Ee] = yv((X) => {
      const be = J().filter((ve) => !ve.disabled), Le = be.find((ve) => ve.ref.current === document.activeElement), Se = xv(be, X, Le);
      Se && setTimeout(() => Se.ref.current.focus());
    }), Pe = w.useCallback(
      (X, be, Le) => {
        const Se = !Te.current && !Le;
        (E.value !== void 0 && E.value === be || Se) && (te(X), Se && (Te.current = !0));
      },
      [E.value]
    ), ge = w.useCallback(() => O == null ? void 0 : O.focus(), [O]), Re = w.useCallback(
      (X, be, Le) => {
        const Se = !Te.current && !Le;
        (E.value !== void 0 && E.value === be || Se) && fe(X);
      },
      [E.value]
    ), Be = o === "popper" ? Yc : nv, et = Be === Yc ? {
      side: u,
      sideOffset: d,
      align: f,
      alignOffset: m,
      arrowPadding: v,
      collisionBoundary: x,
      collisionPadding: g,
      sticky: T,
      hideWhenDetached: S,
      avoidCollisions: P
    } : {};
    return /* @__PURE__ */ p.jsx(
      ev,
      {
        scope: n,
        content: O,
        viewport: D,
        onViewportChange: W,
        itemRefCallback: Pe,
        selectedItem: H,
        onItemLeave: ge,
        itemTextRefCallback: Re,
        focusSelectedItem: Z,
        selectedItemText: re,
        position: o,
        isPositioned: se,
        searchRef: pe,
        children: /* @__PURE__ */ p.jsx(Ou, { as: li, allowPinchZoom: !0, children: /* @__PURE__ */ p.jsx(
          bu,
          {
            asChild: !0,
            trapped: E.open,
            onMountAutoFocus: (X) => {
              X.preventDefault();
            },
            onUnmountAutoFocus: ke(s, (X) => {
              var be;
              (be = E.trigger) == null || be.focus({ preventScroll: !0 }), X.preventDefault();
            }),
            children: /* @__PURE__ */ p.jsx(
              _a,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: c,
                onPointerDownOutside: l,
                onFocusOutside: (X) => X.preventDefault(),
                onDismiss: () => E.onOpenChange(!1),
                children: /* @__PURE__ */ p.jsx(
                  Be,
                  {
                    role: "listbox",
                    id: E.contentId,
                    "data-state": E.open ? "open" : "closed",
                    dir: E.dir,
                    onContextMenu: (X) => X.preventDefault(),
                    ..._,
                    ...et,
                    onPlaced: () => ne(!0),
                    ref: $,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ..._.style
                    },
                    onKeyDown: ke(_.onKeyDown, (X) => {
                      const be = X.ctrlKey || X.altKey || X.metaKey;
                      if (X.key === "Tab" && X.preventDefault(), !be && X.key.length === 1 && Ee(X.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(X.key)) {
                        let Se = J().filter((ve) => !ve.disabled).map((ve) => ve.ref.current);
                        if (["ArrowUp", "End"].includes(X.key) && (Se = Se.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(X.key)) {
                          const ve = X.target, _e = Se.indexOf(ve);
                          Se = Se.slice(_e + 1);
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
tv.displayName = yR;
var xR = "SelectItemAlignedPosition", nv = w.forwardRef((e, t) => {
  const { __scopeSelect: n, onPlaced: o, ...s } = e, c = kr(ui, n), l = Lr(ui, n), [u, d] = w.useState(null), [f, m] = w.useState(null), v = nt(t, ($) => m($)), x = ja(n), g = w.useRef(!1), T = w.useRef(!0), { viewport: S, selectedItem: P, selectedItemText: _, focusSelectedItem: E } = l, O = w.useCallback(() => {
    if (c.trigger && c.valueNode && u && f && S && P && _) {
      const $ = c.trigger.getBoundingClientRect(), H = f.getBoundingClientRect(), te = c.valueNode.getBoundingClientRect(), re = _.getBoundingClientRect();
      if (c.dir !== "rtl") {
        const ve = re.left - H.left, _e = te.left - ve, lt = $.left - _e, Ye = $.width + lt, ht = Math.max(Ye, H.width), Mt = window.innerWidth - Sn, ct = op(_e, [
          Sn,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(Sn, Mt - ht)
        ]);
        u.style.minWidth = Ye + "px", u.style.left = ct + "px";
      } else {
        const ve = H.right - re.right, _e = window.innerWidth - te.right - ve, lt = window.innerWidth - $.right - _e, Ye = $.width + lt, ht = Math.max(Ye, H.width), Mt = window.innerWidth - Sn, ct = op(_e, [
          Sn,
          Math.max(Sn, Mt - ht)
        ]);
        u.style.minWidth = Ye + "px", u.style.right = ct + "px";
      }
      const fe = x(), J = window.innerHeight - Sn * 2, se = S.scrollHeight, ne = window.getComputedStyle(f), Te = parseInt(ne.borderTopWidth, 10), ie = parseInt(ne.paddingTop, 10), Z = parseInt(ne.borderBottomWidth, 10), q = parseInt(ne.paddingBottom, 10), G = Te + ie + se + q + Z, pe = Math.min(P.offsetHeight * 5, G), Ee = window.getComputedStyle(S), Pe = parseInt(Ee.paddingTop, 10), ge = parseInt(Ee.paddingBottom, 10), Re = $.top + $.height / 2 - Sn, Be = J - Re, et = P.offsetHeight / 2, X = P.offsetTop + et, be = Te + ie + X, Le = G - be;
      if (be <= Re) {
        const ve = fe.length > 0 && P === fe[fe.length - 1].ref.current;
        u.style.bottom = "0px";
        const _e = f.clientHeight - S.offsetTop - S.offsetHeight, lt = Math.max(
          Be,
          et + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (ve ? ge : 0) + _e + Z
        ), Ye = be + lt;
        u.style.height = Ye + "px";
      } else {
        const ve = fe.length > 0 && P === fe[0].ref.current;
        u.style.top = "0px";
        const lt = Math.max(
          Re,
          Te + S.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (ve ? Pe : 0) + et
        ) + Le;
        u.style.height = lt + "px", S.scrollTop = be - Re + S.offsetTop;
      }
      u.style.margin = `${Sn}px 0`, u.style.minHeight = pe + "px", u.style.maxHeight = J + "px", o == null || o(), requestAnimationFrame(() => g.current = !0);
    }
  }, [
    x,
    c.trigger,
    c.valueNode,
    u,
    f,
    S,
    P,
    _,
    c.dir,
    o
  ]);
  Lt(() => O(), [O]);
  const [N, D] = w.useState();
  Lt(() => {
    f && D(window.getComputedStyle(f).zIndex);
  }, [f]);
  const W = w.useCallback(
    ($) => {
      $ && T.current === !0 && (O(), E == null || E(), T.current = !1);
    },
    [O, E]
  );
  return /* @__PURE__ */ p.jsx(
    wR,
    {
      scope: n,
      contentWrapper: u,
      shouldExpandOnScrollRef: g,
      onScrollButtonChange: W,
      children: /* @__PURE__ */ p.jsx(
        "div",
        {
          ref: d,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: N
          },
          children: /* @__PURE__ */ p.jsx(
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
nv.displayName = xR;
var bR = "SelectPopperPosition", Yc = w.forwardRef((e, t) => {
  const {
    __scopeSelect: n,
    align: o = "start",
    collisionPadding: s = Sn,
    ...c
  } = e, l = Da(n);
  return /* @__PURE__ */ p.jsx(
    Ig,
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
Yc.displayName = bR;
var [wR, ju] = Ji(ui, {}), qc = "SelectViewport", rv = w.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, nonce: o, ...s } = e, c = Lr(qc, n), l = ju(qc, n), u = nt(t, c.onViewportChange), d = w.useRef(0);
    return /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
      /* @__PURE__ */ p.jsx(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: o
        }
      ),
      /* @__PURE__ */ p.jsx(Oa.Slot, { scope: n, children: /* @__PURE__ */ p.jsx(
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
          onScroll: ke(s.onScroll, (f) => {
            const m = f.currentTarget, { contentWrapper: v, shouldExpandOnScrollRef: x } = l;
            if (x != null && x.current && v) {
              const g = Math.abs(d.current - m.scrollTop);
              if (g > 0) {
                const T = window.innerHeight - Sn * 2, S = parseFloat(v.style.minHeight), P = parseFloat(v.style.height), _ = Math.max(S, P);
                if (_ < T) {
                  const E = _ + g, O = Math.min(T, E), N = E - O;
                  v.style.height = O + "px", v.style.bottom === "0px" && (m.scrollTop = N > 0 ? N : 0, v.style.justifyContent = "flex-end");
                }
              }
            }
            d.current = m.scrollTop;
          })
        }
      ) })
    ] });
  }
);
rv.displayName = qc;
var iv = "SelectGroup", [SR, CR] = Ji(iv), TR = w.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...o } = e, s = si();
    return /* @__PURE__ */ p.jsx(SR, { scope: n, id: s, children: /* @__PURE__ */ p.jsx(Ve.div, { role: "group", "aria-labelledby": s, ...o, ref: t }) });
  }
);
TR.displayName = iv;
var ov = "SelectLabel", sv = w.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...o } = e, s = CR(ov, n);
    return /* @__PURE__ */ p.jsx(Ve.div, { id: s.id, ...o, ref: t });
  }
);
sv.displayName = ov;
var ua = "SelectItem", [PR, av] = Ji(ua), lv = w.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      value: o,
      disabled: s = !1,
      textValue: c,
      ...l
    } = e, u = kr(ua, n), d = Lr(ua, n), f = u.value === o, [m, v] = w.useState(c ?? ""), [x, g] = w.useState(!1), T = nt(
      t,
      (E) => {
        var O;
        return (O = d.itemRefCallback) == null ? void 0 : O.call(d, E, o, s);
      }
    ), S = si(), P = w.useRef("touch"), _ = () => {
      s || (u.onValueChange(o), u.onOpenChange(!1));
    };
    if (o === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ p.jsx(
      PR,
      {
        scope: n,
        value: o,
        disabled: s,
        textId: S,
        isSelected: f,
        onItemTextChange: w.useCallback((E) => {
          v((O) => O || ((E == null ? void 0 : E.textContent) ?? "").trim());
        }, []),
        children: /* @__PURE__ */ p.jsx(
          Oa.ItemSlot,
          {
            scope: n,
            value: o,
            disabled: s,
            textValue: m,
            children: /* @__PURE__ */ p.jsx(
              Ve.div,
              {
                role: "option",
                "aria-labelledby": S,
                "data-highlighted": x ? "" : void 0,
                "aria-selected": f && x,
                "data-state": f ? "checked" : "unchecked",
                "aria-disabled": s || void 0,
                "data-disabled": s ? "" : void 0,
                tabIndex: s ? void 0 : -1,
                ...l,
                ref: T,
                onFocus: ke(l.onFocus, () => g(!0)),
                onBlur: ke(l.onBlur, () => g(!1)),
                onClick: ke(l.onClick, () => {
                  P.current !== "mouse" && _();
                }),
                onPointerUp: ke(l.onPointerUp, () => {
                  P.current === "mouse" && _();
                }),
                onPointerDown: ke(l.onPointerDown, (E) => {
                  P.current = E.pointerType;
                }),
                onPointerMove: ke(l.onPointerMove, (E) => {
                  var O;
                  P.current = E.pointerType, s ? (O = d.onItemLeave) == null || O.call(d) : P.current === "mouse" && E.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: ke(l.onPointerLeave, (E) => {
                  var O;
                  E.currentTarget === document.activeElement && ((O = d.onItemLeave) == null || O.call(d));
                }),
                onKeyDown: ke(l.onKeyDown, (E) => {
                  var N;
                  ((N = d.searchRef) == null ? void 0 : N.current) !== "" && E.key === " " || (dR.includes(E.key) && _(), E.key === " " && E.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
lv.displayName = ua;
var Ao = "SelectItemText", cv = w.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: o, style: s, ...c } = e, l = kr(Ao, n), u = Lr(Ao, n), d = av(Ao, n), f = mR(Ao, n), [m, v] = w.useState(null), x = nt(
      t,
      (_) => v(_),
      d.onItemTextChange,
      (_) => {
        var E;
        return (E = u.itemTextRefCallback) == null ? void 0 : E.call(u, _, d.value, d.disabled);
      }
    ), g = m == null ? void 0 : m.textContent, T = w.useMemo(
      () => /* @__PURE__ */ p.jsx("option", { value: d.value, disabled: d.disabled, children: g }, d.value),
      [d.disabled, d.value, g]
    ), { onNativeOptionAdd: S, onNativeOptionRemove: P } = f;
    return Lt(() => (S(T), () => P(T)), [S, P, T]), /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
      /* @__PURE__ */ p.jsx(Ve.span, { id: d.textId, ...c, ref: x }),
      d.isSelected && l.valueNode && !l.valueNodeHasChildren ? Ca.createPortal(c.children, l.valueNode) : null
    ] });
  }
);
cv.displayName = Ao;
var uv = "SelectItemIndicator", dv = w.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...o } = e;
    return av(uv, n).isSelected ? /* @__PURE__ */ p.jsx(Ve.span, { "aria-hidden": !0, ...o, ref: t }) : null;
  }
);
dv.displayName = uv;
var Xc = "SelectScrollUpButton", fv = w.forwardRef((e, t) => {
  const n = Lr(Xc, e.__scopeSelect), o = ju(Xc, e.__scopeSelect), [s, c] = w.useState(!1), l = nt(t, o.onScrollButtonChange);
  return Lt(() => {
    if (n.viewport && n.isPositioned) {
      let u = function() {
        const f = d.scrollTop > 0;
        c(f);
      };
      const d = n.viewport;
      return u(), d.addEventListener("scroll", u), () => d.removeEventListener("scroll", u);
    }
  }, [n.viewport, n.isPositioned]), s ? /* @__PURE__ */ p.jsx(
    pv,
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
fv.displayName = Xc;
var Zc = "SelectScrollDownButton", hv = w.forwardRef((e, t) => {
  const n = Lr(Zc, e.__scopeSelect), o = ju(Zc, e.__scopeSelect), [s, c] = w.useState(!1), l = nt(t, o.onScrollButtonChange);
  return Lt(() => {
    if (n.viewport && n.isPositioned) {
      let u = function() {
        const f = d.scrollHeight - d.clientHeight, m = Math.ceil(d.scrollTop) < f;
        c(m);
      };
      const d = n.viewport;
      return u(), d.addEventListener("scroll", u), () => d.removeEventListener("scroll", u);
    }
  }, [n.viewport, n.isPositioned]), s ? /* @__PURE__ */ p.jsx(
    pv,
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
hv.displayName = Zc;
var pv = w.forwardRef((e, t) => {
  const { __scopeSelect: n, onAutoScroll: o, ...s } = e, c = Lr("SelectScrollButton", n), l = w.useRef(null), u = ja(n), d = w.useCallback(() => {
    l.current !== null && (window.clearInterval(l.current), l.current = null);
  }, []);
  return w.useEffect(() => () => d(), [d]), Lt(() => {
    var m;
    const f = u().find((v) => v.ref.current === document.activeElement);
    (m = f == null ? void 0 : f.ref.current) == null || m.scrollIntoView({ block: "nearest" });
  }, [u]), /* @__PURE__ */ p.jsx(
    Ve.div,
    {
      "aria-hidden": !0,
      ...s,
      ref: t,
      style: { flexShrink: 0, ...s.style },
      onPointerDown: ke(s.onPointerDown, () => {
        l.current === null && (l.current = window.setInterval(o, 50));
      }),
      onPointerMove: ke(s.onPointerMove, () => {
        var f;
        (f = c.onItemLeave) == null || f.call(c), l.current === null && (l.current = window.setInterval(o, 50));
      }),
      onPointerLeave: ke(s.onPointerLeave, () => {
        d();
      })
    }
  );
}), _R = "SelectSeparator", mv = w.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...o } = e;
    return /* @__PURE__ */ p.jsx(Ve.div, { "aria-hidden": !0, ...o, ref: t });
  }
);
mv.displayName = _R;
var Jc = "SelectArrow", AR = w.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...o } = e, s = Da(n), c = kr(Jc, n), l = Lr(Jc, n);
    return c.open && l.position === "popper" ? /* @__PURE__ */ p.jsx(kg, { ...s, ...o, ref: t }) : null;
  }
);
AR.displayName = Jc;
function gv(e) {
  return e === "" || e === void 0;
}
var vv = w.forwardRef(
  (e, t) => {
    const { value: n, ...o } = e, s = w.useRef(null), c = nt(t, s), l = Lg(n);
    return w.useEffect(() => {
      const u = s.current, d = window.HTMLSelectElement.prototype, m = Object.getOwnPropertyDescriptor(
        d,
        "value"
      ).set;
      if (l !== n && m) {
        const v = new Event("change", { bubbles: !0 });
        m.call(u, n), u.dispatchEvent(v);
      }
    }, [l, n]), /* @__PURE__ */ p.jsx(Mu, { asChild: !0, children: /* @__PURE__ */ p.jsx("select", { ...o, ref: c, defaultValue: n }) });
  }
);
vv.displayName = "BubbleSelect";
function yv(e) {
  const t = rr(e), n = w.useRef(""), o = w.useRef(0), s = w.useCallback(
    (l) => {
      const u = n.current + l;
      t(u), function d(f) {
        n.current = f, window.clearTimeout(o.current), f !== "" && (o.current = window.setTimeout(() => d(""), 1e3));
      }(u);
    },
    [t]
  ), c = w.useCallback(() => {
    n.current = "", window.clearTimeout(o.current);
  }, []);
  return w.useEffect(() => () => window.clearTimeout(o.current), []), [n, s, c];
}
function xv(e, t, n) {
  const s = t.length > 1 && Array.from(t).every((f) => f === t[0]) ? t[0] : t, c = n ? e.indexOf(n) : -1;
  let l = ER(e, Math.max(c, 0));
  s.length === 1 && (l = l.filter((f) => f !== n));
  const d = l.find(
    (f) => f.textValue.toLowerCase().startsWith(s.toLowerCase())
  );
  return d !== n ? d : void 0;
}
function ER(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
var RR = Gg, bv = Yg, NR = Xg, MR = Zg, OR = Jg, wv = Qg, jR = rv, Sv = sv, Cv = lv, DR = cv, IR = dv, Tv = fv, Pv = hv, _v = mv;
const Qc = RR, eu = NR, da = w.forwardRef(({ className: e, children: t, ...n }, o) => /* @__PURE__ */ p.jsxs(
  bv,
  {
    ref: o,
    className: Ue(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ p.jsx(MR, { asChild: !0, children: /* @__PURE__ */ p.jsx(Ta, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
da.displayName = bv.displayName;
const Av = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.jsx(
  Tv,
  {
    ref: n,
    className: Ue(
      "flex cursor-default items-center justify-center py-1",
      e
    ),
    ...t,
    children: /* @__PURE__ */ p.jsx(mP, { className: "h-4 w-4" })
  }
));
Av.displayName = Tv.displayName;
const Ev = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.jsx(
  Pv,
  {
    ref: n,
    className: Ue(
      "flex cursor-default items-center justify-center py-1",
      e
    ),
    ...t,
    children: /* @__PURE__ */ p.jsx(Ta, { className: "h-4 w-4" })
  }
));
Ev.displayName = Pv.displayName;
const fa = w.forwardRef(({ className: e, children: t, position: n = "popper", ...o }, s) => /* @__PURE__ */ p.jsx(OR, { children: /* @__PURE__ */ p.jsxs(
  wv,
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
      /* @__PURE__ */ p.jsx(Av, {}),
      /* @__PURE__ */ p.jsx(
        jR,
        {
          className: Ue(
            "p-1",
            n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children: t
        }
      ),
      /* @__PURE__ */ p.jsx(Ev, {})
    ]
  }
) }));
fa.displayName = wv.displayName;
const kR = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.jsx(
  Sv,
  {
    ref: n,
    className: Ue("py-1.5 pl-8 pr-2 text-sm font-semibold", e),
    ...t
  }
));
kR.displayName = Sv.displayName;
const Cr = w.forwardRef(({ className: e, children: t, ...n }, o) => /* @__PURE__ */ p.jsxs(
  Cv,
  {
    ref: o,
    className: Ue(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ p.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ p.jsx(IR, { children: /* @__PURE__ */ p.jsx(Uo, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ p.jsx(DR, { children: t })
    ]
  }
));
Cr.displayName = Cv.displayName;
const LR = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.jsx(
  _v,
  {
    ref: n,
    className: Ue("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
LR.displayName = _v.displayName;
function VR(e, t) {
  return w.useReducer((n, o) => t[n][o] ?? n, e);
}
var Qi = (e) => {
  const { present: t, children: n } = e, o = FR(t), s = typeof n == "function" ? n({ present: o.isPresent }) : w.Children.only(n), c = nt(o.ref, BR(s));
  return typeof n == "function" || o.isPresent ? w.cloneElement(s, { ref: c }) : null;
};
Qi.displayName = "Presence";
function FR(e) {
  const [t, n] = w.useState(), o = w.useRef({}), s = w.useRef(e), c = w.useRef("none"), l = e ? "mounted" : "unmounted", [u, d] = VR(l, {
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
    const f = zs(o.current);
    c.current = u === "mounted" ? f : "none";
  }, [u]), Lt(() => {
    const f = o.current, m = s.current;
    if (m !== e) {
      const x = c.current, g = zs(f);
      e ? d("MOUNT") : g === "none" || (f == null ? void 0 : f.display) === "none" ? d("UNMOUNT") : d(m && x !== g ? "ANIMATION_OUT" : "UNMOUNT"), s.current = e;
    }
  }, [e, d]), Lt(() => {
    if (t) {
      let f;
      const m = t.ownerDocument.defaultView ?? window, v = (g) => {
        const S = zs(o.current).includes(g.animationName);
        if (g.target === t && S && (d("ANIMATION_END"), !s.current)) {
          const P = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", f = m.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = P);
          });
        }
      }, x = (g) => {
        g.target === t && (c.current = zs(o.current));
      };
      return t.addEventListener("animationstart", x), t.addEventListener("animationcancel", v), t.addEventListener("animationend", v), () => {
        m.clearTimeout(f), t.removeEventListener("animationstart", x), t.removeEventListener("animationcancel", v), t.removeEventListener("animationend", v);
      };
    } else
      d("ANIMATION_END");
  }, [t, d]), {
    isPresent: ["mounted", "unmountSuspended"].includes(u),
    ref: w.useCallback((f) => {
      f && (o.current = getComputedStyle(f)), n(f);
    }, [])
  };
}
function zs(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function BR(e) {
  var o, s;
  let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (s = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : s.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var [Ia, yD] = Pa("Tooltip", [
  Na
]), ka = Na(), Rv = "TooltipProvider", WR = 700, tu = "tooltip.open", [$R, Du] = Ia(Rv), Nv = (e) => {
  const {
    __scopeTooltip: t,
    delayDuration: n = WR,
    skipDelayDuration: o = 300,
    disableHoverableContent: s = !1,
    children: c
  } = e, [l, u] = w.useState(!0), d = w.useRef(!1), f = w.useRef(0);
  return w.useEffect(() => {
    const m = f.current;
    return () => window.clearTimeout(m);
  }, []), /* @__PURE__ */ p.jsx(
    $R,
    {
      scope: t,
      isOpenDelayed: l,
      delayDuration: n,
      onOpen: w.useCallback(() => {
        window.clearTimeout(f.current), u(!1);
      }, []),
      onClose: w.useCallback(() => {
        window.clearTimeout(f.current), f.current = window.setTimeout(
          () => u(!0),
          o
        );
      }, [o]),
      isPointerInTransitRef: d,
      onPointerInTransitChange: w.useCallback((m) => {
        d.current = m;
      }, []),
      disableHoverableContent: s,
      children: c
    }
  );
};
Nv.displayName = Rv;
var La = "Tooltip", [UR, Va] = Ia(La), Mv = (e) => {
  const {
    __scopeTooltip: t,
    children: n,
    open: o,
    defaultOpen: s = !1,
    onOpenChange: c,
    disableHoverableContent: l,
    delayDuration: u
  } = e, d = Du(La, e.__scopeTooltip), f = ka(t), [m, v] = w.useState(null), x = si(), g = w.useRef(0), T = l ?? d.disableHoverableContent, S = u ?? d.delayDuration, P = w.useRef(!1), [_ = !1, E] = ko({
    prop: o,
    defaultProp: s,
    onChange: ($) => {
      $ ? (d.onOpen(), document.dispatchEvent(new CustomEvent(tu))) : d.onClose(), c == null || c($);
    }
  }), O = w.useMemo(() => _ ? P.current ? "delayed-open" : "instant-open" : "closed", [_]), N = w.useCallback(() => {
    window.clearTimeout(g.current), g.current = 0, P.current = !1, E(!0);
  }, [E]), D = w.useCallback(() => {
    window.clearTimeout(g.current), g.current = 0, E(!1);
  }, [E]), W = w.useCallback(() => {
    window.clearTimeout(g.current), g.current = window.setTimeout(() => {
      P.current = !0, E(!0), g.current = 0;
    }, S);
  }, [S, E]);
  return w.useEffect(() => () => {
    g.current && (window.clearTimeout(g.current), g.current = 0);
  }, []), /* @__PURE__ */ p.jsx(jg, { ...f, children: /* @__PURE__ */ p.jsx(
    UR,
    {
      scope: t,
      contentId: x,
      open: _,
      stateAttribute: O,
      trigger: m,
      onTriggerChange: v,
      onTriggerEnter: w.useCallback(() => {
        d.isOpenDelayed ? W() : N();
      }, [d.isOpenDelayed, W, N]),
      onTriggerLeave: w.useCallback(() => {
        T ? D() : (window.clearTimeout(g.current), g.current = 0);
      }, [D, T]),
      onOpen: N,
      onClose: D,
      disableHoverableContent: T,
      children: n
    }
  ) });
};
Mv.displayName = La;
var nu = "TooltipTrigger", Ov = w.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...o } = e, s = Va(nu, n), c = Du(nu, n), l = ka(n), u = w.useRef(null), d = nt(t, u, s.onTriggerChange), f = w.useRef(!1), m = w.useRef(!1), v = w.useCallback(() => f.current = !1, []);
    return w.useEffect(() => () => document.removeEventListener("pointerup", v), [v]), /* @__PURE__ */ p.jsx(Dg, { asChild: !0, ...l, children: /* @__PURE__ */ p.jsx(
      Ve.button,
      {
        "aria-describedby": s.open ? s.contentId : void 0,
        "data-state": s.stateAttribute,
        ...o,
        ref: d,
        onPointerMove: ke(e.onPointerMove, (x) => {
          x.pointerType !== "touch" && !m.current && !c.isPointerInTransitRef.current && (s.onTriggerEnter(), m.current = !0);
        }),
        onPointerLeave: ke(e.onPointerLeave, () => {
          s.onTriggerLeave(), m.current = !1;
        }),
        onPointerDown: ke(e.onPointerDown, () => {
          f.current = !0, document.addEventListener("pointerup", v, { once: !0 });
        }),
        onFocus: ke(e.onFocus, () => {
          f.current || s.onOpen();
        }),
        onBlur: ke(e.onBlur, s.onClose),
        onClick: ke(e.onClick, s.onClose)
      }
    ) });
  }
);
Ov.displayName = nu;
var HR = "TooltipPortal", [xD, zR] = Ia(HR, {
  forceMount: void 0
}), Hi = "TooltipContent", jv = w.forwardRef(
  (e, t) => {
    const n = zR(Hi, e.__scopeTooltip), { forceMount: o = n.forceMount, side: s = "top", ...c } = e, l = Va(Hi, e.__scopeTooltip);
    return /* @__PURE__ */ p.jsx(Qi, { present: o || l.open, children: l.disableHoverableContent ? /* @__PURE__ */ p.jsx(Dv, { side: s, ...c, ref: t }) : /* @__PURE__ */ p.jsx(GR, { side: s, ...c, ref: t }) });
  }
), GR = w.forwardRef((e, t) => {
  const n = Va(Hi, e.__scopeTooltip), o = Du(Hi, e.__scopeTooltip), s = w.useRef(null), c = nt(t, s), [l, u] = w.useState(null), { trigger: d, onClose: f } = n, m = s.current, { onPointerInTransitChange: v } = o, x = w.useCallback(() => {
    u(null), v(!1);
  }, [v]), g = w.useCallback(
    (T, S) => {
      const P = T.currentTarget, _ = { x: T.clientX, y: T.clientY }, E = XR(_, P.getBoundingClientRect()), O = ZR(_, E), N = JR(S.getBoundingClientRect()), D = eN([...O, ...N]);
      u(D), v(!0);
    },
    [v]
  );
  return w.useEffect(() => () => x(), [x]), w.useEffect(() => {
    if (d && m) {
      const T = (P) => g(P, m), S = (P) => g(P, d);
      return d.addEventListener("pointerleave", T), m.addEventListener("pointerleave", S), () => {
        d.removeEventListener("pointerleave", T), m.removeEventListener("pointerleave", S);
      };
    }
  }, [d, m, g, x]), w.useEffect(() => {
    if (l) {
      const T = (S) => {
        const P = S.target, _ = { x: S.clientX, y: S.clientY }, E = (d == null ? void 0 : d.contains(P)) || (m == null ? void 0 : m.contains(P)), O = !QR(_, l);
        E ? x() : O && (x(), f());
      };
      return document.addEventListener("pointermove", T), () => document.removeEventListener("pointermove", T);
    }
  }, [d, m, l, f, x]), /* @__PURE__ */ p.jsx(Dv, { ...e, ref: c });
}), [KR, YR] = Ia(La, { isInside: !1 }), Dv = w.forwardRef(
  (e, t) => {
    const {
      __scopeTooltip: n,
      children: o,
      "aria-label": s,
      onEscapeKeyDown: c,
      onPointerDownOutside: l,
      ...u
    } = e, d = Va(Hi, n), f = ka(n), { onClose: m } = d;
    return w.useEffect(() => (document.addEventListener(tu, m), () => document.removeEventListener(tu, m)), [m]), w.useEffect(() => {
      if (d.trigger) {
        const v = (x) => {
          const g = x.target;
          g != null && g.contains(d.trigger) && m();
        };
        return window.addEventListener("scroll", v, { capture: !0 }), () => window.removeEventListener("scroll", v, { capture: !0 });
      }
    }, [d.trigger, m]), /* @__PURE__ */ p.jsx(
      _a,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: c,
        onPointerDownOutside: l,
        onFocusOutside: (v) => v.preventDefault(),
        onDismiss: m,
        children: /* @__PURE__ */ p.jsxs(
          Ig,
          {
            "data-state": d.stateAttribute,
            ...f,
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
              /* @__PURE__ */ p.jsx(qm, { children: o }),
              /* @__PURE__ */ p.jsx(KR, { scope: n, isInside: !0, children: /* @__PURE__ */ p.jsx(SE, { id: d.contentId, role: "tooltip", children: s || o }) })
            ]
          }
        )
      }
    );
  }
);
jv.displayName = Hi;
var Iv = "TooltipArrow", qR = w.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...o } = e, s = ka(n);
    return YR(
      Iv,
      n
    ).isInside ? null : /* @__PURE__ */ p.jsx(kg, { ...s, ...o, ref: t });
  }
);
qR.displayName = Iv;
function XR(e, t) {
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
function ZR(e, t, n = 5) {
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
function JR(e) {
  const { top: t, right: n, bottom: o, left: s } = e;
  return [
    { x: s, y: t },
    { x: n, y: t },
    { x: n, y: o },
    { x: s, y: o }
  ];
}
function QR(e, t) {
  const { x: n, y: o } = e;
  let s = !1;
  for (let c = 0, l = t.length - 1; c < t.length; l = c++) {
    const u = t[c].x, d = t[c].y, f = t[l].x, m = t[l].y;
    d > o != m > o && n < (f - u) * (o - d) / (m - d) + u && (s = !s);
  }
  return s;
}
function eN(e) {
  const t = e.slice();
  return t.sort((n, o) => n.x < o.x ? -1 : n.x > o.x ? 1 : n.y < o.y ? -1 : n.y > o.y ? 1 : 0), tN(t);
}
function tN(e) {
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
var nN = Nv, rN = Mv, iN = Ov, kv = jv;
const Pr = nN, _r = rN, Ar = iN, Qn = w.forwardRef(({ className: e, sideOffset: t = 4, ...n }, o) => /* @__PURE__ */ p.jsx(
  kv,
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
Qn.displayName = kv.displayName;
const oN = yu(
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
function Iu({ className: e, variant: t, ...n }) {
  return /* @__PURE__ */ p.jsx("div", { className: Ue(oN({ variant: t }), e), ...n });
}
const Vr = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.jsx(
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
Vr.displayName = "Card";
const Fr = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.jsx(
  "div",
  {
    ref: n,
    className: Ue("flex flex-col space-y-1.5 p-6", e),
    ...t
  }
));
Fr.displayName = "CardHeader";
const Br = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.jsx(
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
Br.displayName = "CardTitle";
const sN = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.jsx(
  "div",
  {
    ref: n,
    className: Ue("text-sm text-muted-foreground", e),
    ...t
  }
));
sN.displayName = "CardDescription";
const fi = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.jsx("div", { ref: n, className: Ue("p-6 pt-0", e), ...t }));
fi.displayName = "CardContent";
const aN = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.jsx(
  "div",
  {
    ref: n,
    className: Ue("flex items-center p-6 pt-0", e),
    ...t
  }
));
aN.displayName = "CardFooter";
function bD({ deal: e, onDealChange: t, availableDeals: n }) {
  const o = (s) => {
    t(s);
  };
  return /* @__PURE__ */ p.jsxs(Vr, { className: "shadow-lg w-full max-w-3xl mx-auto my-8", children: [
    /* @__PURE__ */ p.jsx(Fr, { children: /* @__PURE__ */ p.jsxs("div", { className: "flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4", children: [
      /* @__PURE__ */ p.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ p.jsx(Br, { children: e.dealName }),
          /* @__PURE__ */ p.jsx(Pr, { children: /* @__PURE__ */ p.jsxs(_r, { children: [
            /* @__PURE__ */ p.jsx(Ar, { asChild: !0, children: /* @__PURE__ */ p.jsx(
              Xe,
              {
                variant: "ghost",
                size: "sm",
                className: "p-1 h-auto",
                onClick: () => window.open(e.hubspotUrl, "_blank"),
                children: /* @__PURE__ */ p.jsx(Qm, { className: "w-4 h-4 text-slate-500" })
              }
            ) }),
            /* @__PURE__ */ p.jsx(Qn, { children: /* @__PURE__ */ p.jsx("p", { children: "View in HubSpot" }) })
          ] }) })
        ] }),
        /* @__PURE__ */ p.jsx(Iu, { variant: "outline", className: "text-sm", children: e.dealStage })
      ] }),
      /* @__PURE__ */ p.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 lg:gap-8", children: [
        /* @__PURE__ */ p.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ p.jsx("p", { className: "text-sm text-slate-500", children: "Amount" }),
          /* @__PURE__ */ p.jsxs("p", { className: "text-lg font-semibold", children: [
            "$",
            e.amount.toLocaleString()
          ] })
        ] }),
        /* @__PURE__ */ p.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ p.jsx("p", { className: "text-sm text-slate-500", children: "Win Probability" }),
            /* @__PURE__ */ p.jsx(Pr, { children: /* @__PURE__ */ p.jsxs(_r, { children: [
              /* @__PURE__ */ p.jsx(Ar, { asChild: !0, children: /* @__PURE__ */ p.jsx(Xe, { variant: "ghost", size: "sm", className: "p-0 h-auto", children: /* @__PURE__ */ p.jsx(jo, { className: "w-3 h-3 text-slate-400" }) }) }),
              /* @__PURE__ */ p.jsx(Qn, { className: "max-w-xs", children: /* @__PURE__ */ p.jsx("p", { children: "Estimated chance of winning, based on prospect engagement, qualification status, risk factors, and historic deal outcomes at the current stage." }) })
            ] }) })
          ] }),
          /* @__PURE__ */ p.jsxs("p", { className: "text-lg font-semibold", children: [
            e.probability,
            "%"
          ] })
        ] }),
        /* @__PURE__ */ p.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ p.jsx("p", { className: "text-sm text-slate-500", children: "Deal Owner" }),
          /* @__PURE__ */ p.jsx("p", { className: "text-lg font-semibold", children: e.dealOwner })
        ] }),
        /* @__PURE__ */ p.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ p.jsx("p", { className: "text-sm text-slate-500", children: "Deal Language" }),
            /* @__PURE__ */ p.jsx(Pr, { children: /* @__PURE__ */ p.jsxs(_r, { children: [
              /* @__PURE__ */ p.jsx(Ar, { asChild: !0, children: /* @__PURE__ */ p.jsx(Xe, { variant: "ghost", size: "sm", className: "p-0 h-auto", children: /* @__PURE__ */ p.jsx(jo, { className: "w-3 h-3 text-slate-400" }) }) }),
              /* @__PURE__ */ p.jsx(Qn, { className: "max-w-xs", children: /* @__PURE__ */ p.jsx("p", { children: "The main language of the deal." }) })
            ] }) })
          ] }),
          /* @__PURE__ */ p.jsx("p", { className: "text-lg font-semibold", children: i_(e.dealLanguage) })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ p.jsx(fi, { children: /* @__PURE__ */ p.jsxs(Qc, { value: e.dealId, onValueChange: o, children: [
      /* @__PURE__ */ p.jsx(da, { className: "w-[300px]", children: /* @__PURE__ */ p.jsxs(eu, { children: [
        e.dealName,
        " (",
        e.company,
        ")"
      ] }) }),
      /* @__PURE__ */ p.jsx(fa, { children: n.map((s) => /* @__PURE__ */ p.jsxs(Cr, { value: s.dealId, children: [
        s.dealName,
        " (",
        s.company,
        ")"
      ] }, s.dealId)) })
    ] }) })
  ] });
}
function lN(e, t = []) {
  let n = [];
  function o(c, l) {
    const u = w.createContext(l), d = n.length;
    n = [...n, l];
    function f(v) {
      const { scope: x, children: g, ...T } = v, S = (x == null ? void 0 : x[e][d]) || u, P = w.useMemo(() => T, Object.values(T));
      return /* @__PURE__ */ p.jsx(S.Provider, { value: P, children: g });
    }
    function m(v, x) {
      const g = (x == null ? void 0 : x[e][d]) || u, T = w.useContext(g);
      if (T)
        return T;
      if (l !== void 0)
        return l;
      throw new Error(`\`${v}\` must be used within \`${c}\``);
    }
    return f.displayName = c + "Provider", [f, m];
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
  return s.scopeName = e, [o, cN(s, ...t)];
}
function cN(...e) {
  const t = e[0];
  if (e.length === 1)
    return t;
  const n = () => {
    const o = e.map((s) => ({
      useScope: s(),
      scopeName: s.scopeName
    }));
    return function(c) {
      const l = o.reduce((u, { useScope: d, scopeName: f }) => {
        const v = d(c)[`__scope${f}`];
        return { ...u, ...v };
      }, {});
      return w.useMemo(() => ({ [`__scope${t.scopeName}`]: l }), [l]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
var ku = "Progress", Lu = 100, [uN, wD] = lN(ku), [dN, fN] = uN(ku), Lv = w.forwardRef(
  (e, t) => {
    const {
      __scopeProgress: n,
      value: o = null,
      max: s,
      getValueLabel: c = hN,
      ...l
    } = e;
    (s || s === 0) && !_p(s) && console.error(pN(`${s}`, "Progress"));
    const u = _p(s) ? s : Lu;
    o !== null && !Ap(o, u) && console.error(mN(`${o}`, "Progress"));
    const d = Ap(o, u) ? o : null, f = ha(d) ? c(d, u) : void 0;
    return /* @__PURE__ */ p.jsx(dN, { scope: n, value: d, max: u, children: /* @__PURE__ */ p.jsx(
      Ve.div,
      {
        "aria-valuemax": u,
        "aria-valuemin": 0,
        "aria-valuenow": ha(d) ? d : void 0,
        "aria-valuetext": f,
        role: "progressbar",
        "data-state": Bv(d, u),
        "data-value": d ?? void 0,
        "data-max": u,
        ...l,
        ref: t
      }
    ) });
  }
);
Lv.displayName = ku;
var Vv = "ProgressIndicator", Fv = w.forwardRef(
  (e, t) => {
    const { __scopeProgress: n, ...o } = e, s = fN(Vv, n);
    return /* @__PURE__ */ p.jsx(
      Ve.div,
      {
        "data-state": Bv(s.value, s.max),
        "data-value": s.value ?? void 0,
        "data-max": s.max,
        ...o,
        ref: t
      }
    );
  }
);
Fv.displayName = Vv;
function hN(e, t) {
  return `${Math.round(e / t * 100)}%`;
}
function Bv(e, t) {
  return e == null ? "indeterminate" : e === t ? "complete" : "loading";
}
function ha(e) {
  return typeof e == "number";
}
function _p(e) {
  return ha(e) && !isNaN(e) && e > 0;
}
function Ap(e, t) {
  return ha(e) && !isNaN(e) && e <= t && e >= 0;
}
function pN(e, t) {
  return `Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${Lu}\`.`;
}
function mN(e, t) {
  return `Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${Lu} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var Wv = Lv, gN = Fv;
const Vu = w.forwardRef(({ className: e, value: t, ...n }, o) => /* @__PURE__ */ p.jsx(
  Wv,
  {
    ref: o,
    className: Ue(
      "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
      e
    ),
    ...n,
    children: /* @__PURE__ */ p.jsx(
      gN,
      {
        className: "h-full w-full flex-1 bg-primary transition-all",
        style: { transform: `translateX(-${100 - (t || 0)}%)` }
      }
    )
  }
));
Vu.displayName = Wv.displayName;
const Po = [
  "Discovery",
  "Solution Validation",
  "Pricing Communicated",
  "Contract Sent",
  "Closed Won",
  "Closed Lost"
], SD = ({ deal: e }) => {
  const t = {
    Discovery: 75,
    "Solution Validation": 65,
    "Pricing Communicated": 55,
    "Contract Sent": 85,
    "Closed Won": 100,
    "Closed Lost": 0
  }, n = Po.includes(e.dealStage) ? e.dealStage : Po[0], o = t[n] || 0;
  return /* @__PURE__ */ p.jsxs(Vr, { className: "shadow-lg w-full max-w-3xl mx-auto my-8", children: [
    /* @__PURE__ */ p.jsxs(Fr, { children: [
      /* @__PURE__ */ p.jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ p.jsx(Br, { className: "text-slate-800", children: "Deal Progress" }) }),
      /* @__PURE__ */ p.jsx("p", { className: "text-sm text-muted-foreground", children: "Current stage and overall progress" })
    ] }),
    /* @__PURE__ */ p.jsx(fi, { children: /* @__PURE__ */ p.jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ p.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ p.jsx("div", { className: "flex flex-wrap justify-between text-xs sm:text-sm text-slate-600", children: Po.map((s) => /* @__PURE__ */ p.jsx("span", { className: `mb-2 ${n === s ? "font-bold" : ""}`, children: s }, s)) }),
        /* @__PURE__ */ p.jsx(
          Vu,
          {
            value: (Po.indexOf(n) + 1) / Po.length * 100,
            className: "h-2"
          }
        ),
        /* @__PURE__ */ p.jsxs("div", { className: "flex justify-between text-xs text-slate-500", children: [
          /* @__PURE__ */ p.jsx("span", { children: "0%" }),
          /* @__PURE__ */ p.jsx("span", { children: "100%" })
        ] })
      ] }),
      /* @__PURE__ */ p.jsxs("div", { className: "pt-4 border-t", children: [
        /* @__PURE__ */ p.jsxs("div", { className: "flex items-center space-x-1 mb-4", children: [
          /* @__PURE__ */ p.jsx("h3", { className: "text-sm font-medium text-slate-700", children: "Outlook" }),
          /* @__PURE__ */ p.jsx(Pr, { children: /* @__PURE__ */ p.jsxs(_r, { children: [
            /* @__PURE__ */ p.jsx(Ar, { children: /* @__PURE__ */ p.jsx(jo, { className: "w-3 h-3 text-muted-foreground" }) }),
            /* @__PURE__ */ p.jsxs(Qn, { className: "max-w-xs", children: [
              /* @__PURE__ */ p.jsx("p", { children: "Predictions based on deal qualification status and comparison with historical deals at the same stage" }),
              /* @__PURE__ */ p.jsx("a", { href: "", children: /* @__PURE__ */ p.jsx("button", { children: "Learn more" }) })
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ p.jsxs("div", { className: "grid grid-cols-2 gap-8", children: [
          /* @__PURE__ */ p.jsxs("div", { children: [
            /* @__PURE__ */ p.jsx("div", { className: "text-sm font-medium text-muted-foreground mb-1", children: "Win Probability" }),
            /* @__PURE__ */ p.jsxs("div", { className: "text-2xl font-bold text-slate-800", children: [
              e.probability,
              "%"
            ] })
          ] }),
          /* @__PURE__ */ p.jsxs("div", { children: [
            /* @__PURE__ */ p.jsxs("div", { className: "text-sm font-medium text-muted-foreground mb-1 space-x-1", children: [
              "Next Stage Probability",
              " "
            ] }),
            /* @__PURE__ */ p.jsxs("div", { className: "text-2xl font-bold text-slate-800", children: [
              o,
              "%"
            ] })
          ] })
        ] })
      ] })
    ] }) })
  ] });
};
function CD({ deal: e }) {
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
  return /* @__PURE__ */ p.jsxs(Vr, { className: "shadow-lg w-full max-w-3xl mx-auto my-8", children: [
    /* @__PURE__ */ p.jsxs(Fr, { children: [
      /* @__PURE__ */ p.jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ p.jsx(Br, { className: "text-slate-800", children: "Key Stakeholders" }) }),
      /* @__PURE__ */ p.jsx("p", { className: "text-sm text-slate-500", children: "Engagement levels and relationships" })
    ] }),
    /* @__PURE__ */ p.jsx(fi, { children: /* @__PURE__ */ p.jsx("div", { className: "space-y-4", children: e.keyStakeholders.map((n, o) => /* @__PURE__ */ p.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ p.jsxs("div", { children: [
        /* @__PURE__ */ p.jsx("p", { className: "font-medium", children: n.name }),
        /* @__PURE__ */ p.jsx("p", { className: "text-sm text-slate-500", children: n.role })
      ] }),
      /* @__PURE__ */ p.jsxs("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ p.jsxs(Iu, { className: t(n.engagementLevel), children: [
          n.engagementLevel,
          " Engagement"
        ] }),
        /* @__PURE__ */ p.jsx(Pr, { children: /* @__PURE__ */ p.jsxs(_r, { children: [
          /* @__PURE__ */ p.jsx(Ar, { asChild: !0, children: /* @__PURE__ */ p.jsx(
            Xe,
            {
              variant: "ghost",
              size: "sm",
              className: "",
              onClick: () => window.open(n.contactLink, "_blank"),
              children: /* @__PURE__ */ p.jsx(Qm, { className: "w-4 h-4 text-slate-500" })
            }
          ) }),
          /* @__PURE__ */ p.jsx(Qn, { children: /* @__PURE__ */ p.jsx("p", { children: "View contact in CRM" }) })
        ] }) })
      ] })
    ] }, o)) }) })
  ] });
}
const Ep = /* @__PURE__ */ new Set();
function Fa(e, t, n) {
  e || Ep.has(t) || (console.warn(t), Ep.add(t));
}
function vN(e) {
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
const ru = (e) => Array.isArray(e);
function $v(e, t) {
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
function Lo(e) {
  return typeof e == "string" || Array.isArray(e);
}
function Rp(e) {
  const t = [{}, {}];
  return e == null || e.values.forEach((n, o) => {
    t[0][o] = n.get(), t[1][o] = n.getVelocity();
  }), t;
}
function Fu(e, t, n, o) {
  if (typeof t == "function") {
    const [s, c] = Rp(o);
    t = t(n !== void 0 ? n : e.custom, s, c);
  }
  if (typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function") {
    const [s, c] = Rp(o);
    t = t(n !== void 0 ? n : e.custom, s, c);
  }
  return t;
}
function Wa(e, t, n) {
  const o = e.getProps();
  return Fu(o, t, n !== void 0 ? n : o.custom, e);
}
const Bu = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], Wu = ["initial", ...Bu], Go = [
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
], hi = new Set(Go), kn = (e) => e * 1e3, er = (e) => e / 1e3, yN = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, xN = (e) => ({
  type: "spring",
  stiffness: 550,
  damping: e === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), bN = {
  type: "keyframes",
  duration: 0.8
}, wN = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, SN = (e, { keyframes: t }) => t.length > 2 ? bN : hi.has(e) ? e.startsWith("scale") ? xN(t[1]) : yN : wN;
function $u(e, t) {
  return e ? e[t] || e.default || e : void 0;
}
const CN = {
  skipAnimations: !1,
  useManualTiming: !1
}, TN = (e) => e !== null;
function $a(e, { repeat: t, repeatType: n = "loop" }, o) {
  const s = e.filter(TN), c = t && n !== "loop" && t % 2 === 1 ? 0 : s.length - 1;
  return !c || o === void 0 ? s[c] : o;
}
const Ct = (e) => e;
function PN(e) {
  let t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set(), o = !1, s = !1;
  const c = /* @__PURE__ */ new WeakSet();
  let l = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  };
  function u(f) {
    c.has(f) && (d.schedule(f), e()), f(l);
  }
  const d = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (f, m = !1, v = !1) => {
      const g = v && o ? t : n;
      return m && c.add(f), g.has(f) || g.add(f), f;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (f) => {
      n.delete(f), c.delete(f);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (f) => {
      if (l = f, o) {
        s = !0;
        return;
      }
      o = !0, [t, n] = [n, t], n.clear(), t.forEach(u), o = !1, s && (s = !1, d.process(f));
    }
  };
  return d;
}
const Gs = [
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
], _N = 40;
function Uv(e, t) {
  let n = !1, o = !0;
  const s = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, c = () => n = !0, l = Gs.reduce((_, E) => (_[E] = PN(c), _), {}), { read: u, resolveKeyframes: d, update: f, preRender: m, render: v, postRender: x } = l, g = () => {
    const _ = performance.now();
    n = !1, s.delta = o ? 1e3 / 60 : Math.max(Math.min(_ - s.timestamp, _N), 1), s.timestamp = _, s.isProcessing = !0, u.process(s), d.process(s), f.process(s), m.process(s), v.process(s), x.process(s), s.isProcessing = !1, n && t && (o = !1, e(g));
  }, T = () => {
    n = !0, o = !0, s.isProcessing || e(g);
  };
  return { schedule: Gs.reduce((_, E) => {
    const O = l[E];
    return _[E] = (N, D = !1, W = !1) => (n || T(), O.schedule(N, D, W)), _;
  }, {}), cancel: (_) => {
    for (let E = 0; E < Gs.length; E++)
      l[Gs[E]].cancel(_);
  }, state: s, steps: l };
}
const { schedule: Ge, cancel: Or, state: St, steps: Tc } = Uv(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Ct, !0), Hv = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e, AN = 1e-7, EN = 12;
function RN(e, t, n, o, s) {
  let c, l, u = 0;
  do
    l = t + (n - t) / 2, c = Hv(l, o, s) - e, c > 0 ? n = l : t = l;
  while (Math.abs(c) > AN && ++u < EN);
  return l;
}
function Ko(e, t, n, o) {
  if (e === t && n === o)
    return Ct;
  const s = (c) => RN(c, 0, 1, e, n);
  return (c) => c === 0 || c === 1 ? c : Hv(s(c), t, o);
}
const zv = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, Gv = (e) => (t) => 1 - e(1 - t), Kv = /* @__PURE__ */ Ko(0.33, 1.53, 0.69, 0.99), Uu = /* @__PURE__ */ Gv(Kv), Yv = /* @__PURE__ */ zv(Uu), qv = (e) => (e *= 2) < 1 ? 0.5 * Uu(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), Hu = (e) => 1 - Math.sin(Math.acos(e)), Xv = Gv(Hu), Zv = zv(Hu), Jv = (e) => /^0[^.\s]+$/u.test(e);
function NN(e) {
  return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || Jv(e) : !0;
}
let eo = Ct, jr = Ct;
process.env.NODE_ENV !== "production" && (eo = (e, t) => {
  !e && typeof console < "u" && console.warn(t);
}, jr = (e, t) => {
  if (!e)
    throw new Error(t);
});
const Qv = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e), ey = (e) => (t) => typeof t == "string" && t.startsWith(e), ty = /* @__PURE__ */ ey("--"), MN = /* @__PURE__ */ ey("var(--"), zu = (e) => MN(e) ? ON.test(e.split("/*")[0].trim()) : !1, ON = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, jN = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function DN(e) {
  const t = jN.exec(e);
  if (!t)
    return [,];
  const [, n, o, s] = t;
  return [`--${n ?? o}`, s];
}
const IN = 4;
function ny(e, t, n = 1) {
  jr(n <= IN, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);
  const [o, s] = DN(e);
  if (!o)
    return;
  const c = window.getComputedStyle(t).getPropertyValue(o);
  if (c) {
    const l = c.trim();
    return Qv(l) ? parseFloat(l) : l;
  }
  return zu(s) ? ny(s, t, n + 1) : s;
}
const Dr = (e, t, n) => n > t ? t : n < e ? e : n, to = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, Vo = {
  ...to,
  transform: (e) => Dr(0, 1, e)
}, Ks = {
  ...to,
  default: 1
}, Yo = (e) => ({
  test: (t) => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: (t) => `${t}${e}`
}), Sr = /* @__PURE__ */ Yo("deg"), Ln = /* @__PURE__ */ Yo("%"), ue = /* @__PURE__ */ Yo("px"), kN = /* @__PURE__ */ Yo("vh"), LN = /* @__PURE__ */ Yo("vw"), Np = {
  ...Ln,
  parse: (e) => Ln.parse(e) / 100,
  transform: (e) => Ln.transform(e * 100)
}, VN = /* @__PURE__ */ new Set([
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
]), Mp = (e) => e === to || e === ue, Op = (e, t) => parseFloat(e.split(", ")[t]), jp = (e, t) => (n, { transform: o }) => {
  if (o === "none" || !o)
    return 0;
  const s = o.match(/^matrix3d\((.+)\)$/u);
  if (s)
    return Op(s[1], t);
  {
    const c = o.match(/^matrix\((.+)\)$/u);
    return c ? Op(c[1], e) : 0;
  }
}, FN = /* @__PURE__ */ new Set(["x", "y", "z"]), BN = Go.filter((e) => !FN.has(e));
function WN(e) {
  const t = [];
  return BN.forEach((n) => {
    const o = e.getValue(n);
    o !== void 0 && (t.push([n, o.get()]), o.set(n.startsWith("scale") ? 1 : 0));
  }), t;
}
const zi = {
  // Dimensions
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  // Transform
  x: jp(4, 13),
  y: jp(5, 14)
};
zi.translateX = zi.x;
zi.translateY = zi.y;
const ry = (e) => (t) => t.test(e), $N = {
  test: (e) => e === "auto",
  parse: (e) => e
}, iy = [to, ue, Ln, Sr, LN, kN, $N], Dp = (e) => iy.find(ry(e)), ai = /* @__PURE__ */ new Set();
let iu = !1, ou = !1;
function oy() {
  if (ou) {
    const e = Array.from(ai).filter((o) => o.needsMeasurement), t = new Set(e.map((o) => o.element)), n = /* @__PURE__ */ new Map();
    t.forEach((o) => {
      const s = WN(o);
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
  ou = !1, iu = !1, ai.forEach((e) => e.complete()), ai.clear();
}
function sy() {
  ai.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (ou = !0);
  });
}
function UN() {
  sy(), oy();
}
class Gu {
  constructor(t, n, o, s, c, l = !1) {
    this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...t], this.onComplete = n, this.name = o, this.motionValue = s, this.element = c, this.isAsync = l;
  }
  scheduleResolve() {
    this.isScheduled = !0, this.isAsync ? (ai.add(this), iu || (iu = !0, Ge.read(sy), Ge.resolveKeyframes(oy))) : (this.readKeyframes(), this.complete());
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
    this.isComplete = !0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), ai.delete(this);
  }
  cancel() {
    this.isComplete || (this.isScheduled = !1, ai.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const No = (e) => Math.round(e * 1e5) / 1e5, Ku = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function HN(e) {
  return e == null;
}
const zN = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, Yu = (e, t) => (n) => !!(typeof n == "string" && zN.test(n) && n.startsWith(e) || t && !HN(n) && Object.prototype.hasOwnProperty.call(n, t)), ay = (e, t, n) => (o) => {
  if (typeof o != "string")
    return o;
  const [s, c, l, u] = o.match(Ku);
  return {
    [e]: parseFloat(s),
    [t]: parseFloat(c),
    [n]: parseFloat(l),
    alpha: u !== void 0 ? parseFloat(u) : 1
  };
}, GN = (e) => Dr(0, 255, e), Pc = {
  ...to,
  transform: (e) => Math.round(GN(e))
}, ii = {
  test: /* @__PURE__ */ Yu("rgb", "red"),
  parse: /* @__PURE__ */ ay("red", "green", "blue"),
  transform: ({ red: e, green: t, blue: n, alpha: o = 1 }) => "rgba(" + Pc.transform(e) + ", " + Pc.transform(t) + ", " + Pc.transform(n) + ", " + No(Vo.transform(o)) + ")"
};
function KN(e) {
  let t = "", n = "", o = "", s = "";
  return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), o = e.substring(5, 7), s = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), o = e.substring(3, 4), s = e.substring(4, 5), t += t, n += n, o += o, s += s), {
    red: parseInt(t, 16),
    green: parseInt(n, 16),
    blue: parseInt(o, 16),
    alpha: s ? parseInt(s, 16) / 255 : 1
  };
}
const su = {
  test: /* @__PURE__ */ Yu("#"),
  parse: KN,
  transform: ii.transform
}, Ii = {
  test: /* @__PURE__ */ Yu("hsl", "hue"),
  parse: /* @__PURE__ */ ay("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: t, lightness: n, alpha: o = 1 }) => "hsla(" + Math.round(e) + ", " + Ln.transform(No(t)) + ", " + Ln.transform(No(n)) + ", " + No(Vo.transform(o)) + ")"
}, Rt = {
  test: (e) => ii.test(e) || su.test(e) || Ii.test(e),
  parse: (e) => ii.test(e) ? ii.parse(e) : Ii.test(e) ? Ii.parse(e) : su.parse(e),
  transform: (e) => typeof e == "string" ? e : e.hasOwnProperty("red") ? ii.transform(e) : Ii.transform(e)
}, YN = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function qN(e) {
  var t, n;
  return isNaN(e) && typeof e == "string" && (((t = e.match(Ku)) === null || t === void 0 ? void 0 : t.length) || 0) + (((n = e.match(YN)) === null || n === void 0 ? void 0 : n.length) || 0) > 0;
}
const ly = "number", cy = "color", XN = "var", ZN = "var(", Ip = "${}", JN = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Fo(e) {
  const t = e.toString(), n = [], o = {
    color: [],
    number: [],
    var: []
  }, s = [];
  let c = 0;
  const u = t.replace(JN, (d) => (Rt.test(d) ? (o.color.push(c), s.push(cy), n.push(Rt.parse(d))) : d.startsWith(ZN) ? (o.var.push(c), s.push(XN), n.push(d)) : (o.number.push(c), s.push(ly), n.push(parseFloat(d))), ++c, Ip)).split(Ip);
  return { values: n, split: u, indexes: o, types: s };
}
function uy(e) {
  return Fo(e).values;
}
function dy(e) {
  const { split: t, types: n } = Fo(e), o = t.length;
  return (s) => {
    let c = "";
    for (let l = 0; l < o; l++)
      if (c += t[l], s[l] !== void 0) {
        const u = n[l];
        u === ly ? c += No(s[l]) : u === cy ? c += Rt.transform(s[l]) : c += s[l];
      }
    return c;
  };
}
const QN = (e) => typeof e == "number" ? 0 : e;
function e2(e) {
  const t = uy(e);
  return dy(e)(t.map(QN));
}
const Ir = {
  test: qN,
  parse: uy,
  createTransformer: dy,
  getAnimatableNone: e2
}, t2 = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function n2(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow")
    return e;
  const [o] = n.match(Ku) || [];
  if (!o)
    return e;
  const s = n.replace(o, "");
  let c = t2.has(t) ? 1 : 0;
  return o !== n && (c *= 100), t + "(" + c + s + ")";
}
const r2 = /\b([a-z-]*)\(.*?\)/gu, au = {
  ...Ir,
  getAnimatableNone: (e) => {
    const t = e.match(r2);
    return t ? t.map(n2).join(" ") : e;
  }
}, i2 = {
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
}, o2 = {
  rotate: Sr,
  rotateX: Sr,
  rotateY: Sr,
  rotateZ: Sr,
  scale: Ks,
  scaleX: Ks,
  scaleY: Ks,
  scaleZ: Ks,
  skew: Sr,
  skewX: Sr,
  skewY: Sr,
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
  originX: Np,
  originY: Np,
  originZ: ue
}, kp = {
  ...to,
  transform: Math.round
}, qu = {
  ...i2,
  ...o2,
  zIndex: kp,
  size: ue,
  // SVG
  fillOpacity: Vo,
  strokeOpacity: Vo,
  numOctaves: kp
}, s2 = {
  ...qu,
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
  filter: au,
  WebkitFilter: au
}, Xu = (e) => s2[e];
function fy(e, t) {
  let n = Xu(e);
  return n !== au && (n = Ir), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
}
const a2 = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function l2(e, t, n) {
  let o = 0, s;
  for (; o < e.length && !s; ) {
    const c = e[o];
    typeof c == "string" && !a2.has(c) && Fo(c).values.length && (s = e[o]), o++;
  }
  if (s && n)
    for (const c of t)
      e[c] = fy(n, s);
}
class hy extends Gu {
  constructor(t, n, o, s, c) {
    super(t, n, o, s, c, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: o } = this;
    if (!n || !n.current)
      return;
    super.readKeyframes();
    for (let d = 0; d < t.length; d++) {
      let f = t[d];
      if (typeof f == "string" && (f = f.trim(), zu(f))) {
        const m = ny(f, n.current);
        m !== void 0 && (t[d] = m), d === t.length - 1 && (this.finalKeyframe = f);
      }
    }
    if (this.resolveNoneKeyframes(), !VN.has(o) || t.length !== 2)
      return;
    const [s, c] = t, l = Dp(s), u = Dp(c);
    if (l !== u)
      if (Mp(l) && Mp(u))
        for (let d = 0; d < t.length; d++) {
          const f = t[d];
          typeof f == "string" && (t[d] = parseFloat(f));
        }
      else
        this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this, o = [];
    for (let s = 0; s < t.length; s++)
      NN(t[s]) && o.push(s);
    o.length && l2(t, o, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: o } = this;
    if (!t || !t.current)
      return;
    o === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = zi[o](t.measureViewportBox(), window.getComputedStyle(t.current)), n[0] = this.measuredOrigin;
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
    s[l] = zi[o](n.measureViewportBox(), window.getComputedStyle(n.current)), u !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = u), !((t = this.removedTransforms) === null || t === void 0) && t.length && this.removedTransforms.forEach(([d, f]) => {
      n.getValue(d).set(f);
    }), this.resolveNoneKeyframes();
  }
}
function Zu(e) {
  return typeof e == "function";
}
let ea;
function c2() {
  ea = void 0;
}
const Vn = {
  now: () => (ea === void 0 && Vn.set(St.isProcessing || CN.useManualTiming ? St.timestamp : performance.now()), ea),
  set: (e) => {
    ea = e, queueMicrotask(c2);
  }
}, Lp = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && // It's animatable if we have a string
(Ir.test(e) || e === "0") && // And it contains numbers and/or colors
!e.startsWith("url("));
function u2(e) {
  const t = e[0];
  if (e.length === 1)
    return !0;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t)
      return !0;
}
function d2(e, t, n, o) {
  const s = e[0];
  if (s === null)
    return !1;
  if (t === "display" || t === "visibility")
    return !0;
  const c = e[e.length - 1], l = Lp(s, t), u = Lp(c, t);
  return eo(l === u, `You are trying to animate ${t} from "${s}" to "${c}". ${s} is not an animatable value - to enable this animation set ${s} to a value animatable to ${c} via the \`style\` property.`), !l || !u ? !1 : u2(e) || (n === "spring" || Zu(n)) && o;
}
const f2 = 40;
class py {
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
    return this.resolvedAt ? this.resolvedAt - this.createdAt > f2 ? this.resolvedAt : this.createdAt : this.createdAt;
  }
  /**
   * A getter for resolved data. If keyframes are not yet resolved, accessing
   * this.resolved will synchronously flush all pending keyframe resolvers.
   * This is a deoptimisation, but at its worst still batches read/writes.
   */
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && UN(), this._resolved;
  }
  /**
   * A method to be called when the keyframes resolver completes. This method
   * will check if its possible to run the animation and, if not, skip it.
   * Otherwise, it will call initPlayback on the implementing class.
   */
  onKeyframesResolved(t, n) {
    this.resolvedAt = Vn.now(), this.hasAttemptedResolve = !0;
    const { name: o, type: s, velocity: c, delay: l, onComplete: u, onUpdate: d, isGenerator: f } = this.options;
    if (!f && !d2(t, o, s, c))
      if (l)
        this.options.duration = 0;
      else {
        d == null || d($a(t, this.options, n)), u == null || u(), this.resolveFinishedPromise();
        return;
      }
    const m = this.initPlayback(t, n);
    m !== !1 && (this._resolved = {
      keyframes: t,
      finalKeyframe: n,
      ...m
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
function my(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const h2 = 5;
function gy(e, t, n) {
  const o = Math.max(t - h2, 0);
  return my(n - e(o), t - o);
}
const _c = 1e-3, p2 = 0.01, Vp = 10, m2 = 0.05, g2 = 1;
function v2({ duration: e = 800, bounce: t = 0.25, velocity: n = 0, mass: o = 1 }) {
  let s, c;
  eo(e <= kn(Vp), "Spring duration must be 10 seconds or less");
  let l = 1 - t;
  l = Dr(m2, g2, l), e = Dr(p2, Vp, er(e)), l < 1 ? (s = (f) => {
    const m = f * l, v = m * e, x = m - n, g = lu(f, l), T = Math.exp(-v);
    return _c - x / g * T;
  }, c = (f) => {
    const v = f * l * e, x = v * n + n, g = Math.pow(l, 2) * Math.pow(f, 2) * e, T = Math.exp(-v), S = lu(Math.pow(f, 2), l);
    return (-s(f) + _c > 0 ? -1 : 1) * ((x - g) * T) / S;
  }) : (s = (f) => {
    const m = Math.exp(-f * e), v = (f - n) * e + 1;
    return -_c + m * v;
  }, c = (f) => {
    const m = Math.exp(-f * e), v = (n - f) * (e * e);
    return m * v;
  });
  const u = 5 / e, d = x2(s, c, u);
  if (e = kn(e), isNaN(d))
    return {
      stiffness: 100,
      damping: 10,
      duration: e
    };
  {
    const f = Math.pow(d, 2) * o;
    return {
      stiffness: f,
      damping: l * 2 * Math.sqrt(o * f),
      duration: e
    };
  }
}
const y2 = 12;
function x2(e, t, n) {
  let o = n;
  for (let s = 1; s < y2; s++)
    o = o - e(o) / t(o);
  return o;
}
function lu(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const b2 = ["duration", "bounce"], w2 = ["stiffness", "damping", "mass"];
function Fp(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function S2(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!Fp(e, w2) && Fp(e, b2)) {
    const n = v2(e);
    t = {
      ...t,
      ...n,
      mass: 1
    }, t.isResolvedFromDuration = !0;
  }
  return t;
}
function vy({ keyframes: e, restDelta: t, restSpeed: n, ...o }) {
  const s = e[0], c = e[e.length - 1], l = { done: !1, value: s }, { stiffness: u, damping: d, mass: f, duration: m, velocity: v, isResolvedFromDuration: x } = S2({
    ...o,
    velocity: -er(o.velocity || 0)
  }), g = v || 0, T = d / (2 * Math.sqrt(u * f)), S = c - s, P = er(Math.sqrt(u / f)), _ = Math.abs(S) < 5;
  n || (n = _ ? 0.01 : 2), t || (t = _ ? 5e-3 : 0.5);
  let E;
  if (T < 1) {
    const O = lu(P, T);
    E = (N) => {
      const D = Math.exp(-T * P * N);
      return c - D * ((g + T * P * S) / O * Math.sin(O * N) + S * Math.cos(O * N));
    };
  } else if (T === 1)
    E = (O) => c - Math.exp(-P * O) * (S + (g + P * S) * O);
  else {
    const O = P * Math.sqrt(T * T - 1);
    E = (N) => {
      const D = Math.exp(-T * P * N), W = Math.min(O * N, 300);
      return c - D * ((g + T * P * S) * Math.sinh(W) + O * S * Math.cosh(W)) / O;
    };
  }
  return {
    calculatedDuration: x && m || null,
    next: (O) => {
      const N = E(O);
      if (x)
        l.done = O >= m;
      else {
        let D = 0;
        T < 1 && (D = O === 0 ? kn(g) : gy(E, O, N));
        const W = Math.abs(D) <= n, $ = Math.abs(c - N) <= t;
        l.done = W && $;
      }
      return l.value = l.done ? c : N, l;
    }
  };
}
function Bp({ keyframes: e, velocity: t = 0, power: n = 0.8, timeConstant: o = 325, bounceDamping: s = 10, bounceStiffness: c = 500, modifyTarget: l, min: u, max: d, restDelta: f = 0.5, restSpeed: m }) {
  const v = e[0], x = {
    done: !1,
    value: v
  }, g = (H) => u !== void 0 && H < u || d !== void 0 && H > d, T = (H) => u === void 0 ? d : d === void 0 || Math.abs(u - H) < Math.abs(d - H) ? u : d;
  let S = n * t;
  const P = v + S, _ = l === void 0 ? P : l(P);
  _ !== P && (S = _ - v);
  const E = (H) => -S * Math.exp(-H / o), O = (H) => _ + E(H), N = (H) => {
    const te = E(H), re = O(H);
    x.done = Math.abs(te) <= f, x.value = x.done ? _ : re;
  };
  let D, W;
  const $ = (H) => {
    g(x.value) && (D = H, W = vy({
      keyframes: [x.value, T(x.value)],
      velocity: gy(O, H, x.value),
      // TODO: This should be passing * 1000
      damping: s,
      stiffness: c,
      restDelta: f,
      restSpeed: m
    }));
  };
  return $(0), {
    calculatedDuration: null,
    next: (H) => {
      let te = !1;
      return !W && D === void 0 && (te = !0, N(H), $(H)), D !== void 0 && H >= D ? W.next(H - D) : (!te && N(H), x);
    }
  };
}
const C2 = /* @__PURE__ */ Ko(0.42, 0, 1, 1), T2 = /* @__PURE__ */ Ko(0, 0, 0.58, 1), yy = /* @__PURE__ */ Ko(0.42, 0, 0.58, 1), P2 = (e) => Array.isArray(e) && typeof e[0] != "number", Ju = (e) => Array.isArray(e) && typeof e[0] == "number", Wp = {
  linear: Ct,
  easeIn: C2,
  easeInOut: yy,
  easeOut: T2,
  circIn: Hu,
  circInOut: Zv,
  circOut: Xv,
  backIn: Uu,
  backInOut: Yv,
  backOut: Kv,
  anticipate: qv
}, $p = (e) => {
  if (Ju(e)) {
    jr(e.length === 4, "Cubic bezier arrays must contain four numerical values.");
    const [t, n, o, s] = e;
    return Ko(t, n, o, s);
  } else if (typeof e == "string")
    return jr(Wp[e] !== void 0, `Invalid easing type '${e}'`), Wp[e];
  return e;
}, _2 = (e, t) => (n) => t(e(n)), tr = (...e) => e.reduce(_2), Gi = (e, t, n) => {
  const o = t - e;
  return o === 0 ? 1 : (n - e) / o;
}, ot = (e, t, n) => e + (t - e) * n;
function Ac(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function A2({ hue: e, saturation: t, lightness: n, alpha: o }) {
  e /= 360, t /= 100, n /= 100;
  let s = 0, c = 0, l = 0;
  if (!t)
    s = c = l = n;
  else {
    const u = n < 0.5 ? n * (1 + t) : n + t - n * t, d = 2 * n - u;
    s = Ac(d, u, e + 1 / 3), c = Ac(d, u, e), l = Ac(d, u, e - 1 / 3);
  }
  return {
    red: Math.round(s * 255),
    green: Math.round(c * 255),
    blue: Math.round(l * 255),
    alpha: o
  };
}
function pa(e, t) {
  return (n) => n > 0 ? t : e;
}
const Ec = (e, t, n) => {
  const o = e * e, s = n * (t * t - o) + o;
  return s < 0 ? 0 : Math.sqrt(s);
}, E2 = [su, ii, Ii], R2 = (e) => E2.find((t) => t.test(e));
function Up(e) {
  const t = R2(e);
  if (eo(!!t, `'${e}' is not an animatable color. Use the equivalent color code instead.`), !t)
    return !1;
  let n = t.parse(e);
  return t === Ii && (n = A2(n)), n;
}
const Hp = (e, t) => {
  const n = Up(e), o = Up(t);
  if (!n || !o)
    return pa(e, t);
  const s = { ...n };
  return (c) => (s.red = Ec(n.red, o.red, c), s.green = Ec(n.green, o.green, c), s.blue = Ec(n.blue, o.blue, c), s.alpha = ot(n.alpha, o.alpha, c), ii.transform(s));
}, cu = /* @__PURE__ */ new Set(["none", "hidden"]);
function N2(e, t) {
  return cu.has(e) ? (n) => n <= 0 ? e : t : (n) => n >= 1 ? t : e;
}
function M2(e, t) {
  return (n) => ot(e, t, n);
}
function Qu(e) {
  return typeof e == "number" ? M2 : typeof e == "string" ? zu(e) ? pa : Rt.test(e) ? Hp : D2 : Array.isArray(e) ? xy : typeof e == "object" ? Rt.test(e) ? Hp : O2 : pa;
}
function xy(e, t) {
  const n = [...e], o = n.length, s = e.map((c, l) => Qu(c)(c, t[l]));
  return (c) => {
    for (let l = 0; l < o; l++)
      n[l] = s[l](c);
    return n;
  };
}
function O2(e, t) {
  const n = { ...e, ...t }, o = {};
  for (const s in n)
    e[s] !== void 0 && t[s] !== void 0 && (o[s] = Qu(e[s])(e[s], t[s]));
  return (s) => {
    for (const c in o)
      n[c] = o[c](s);
    return n;
  };
}
function j2(e, t) {
  var n;
  const o = [], s = { color: 0, var: 0, number: 0 };
  for (let c = 0; c < t.values.length; c++) {
    const l = t.types[c], u = e.indexes[l][s[l]], d = (n = e.values[u]) !== null && n !== void 0 ? n : 0;
    o[c] = d, s[l]++;
  }
  return o;
}
const D2 = (e, t) => {
  const n = Ir.createTransformer(t), o = Fo(e), s = Fo(t);
  return o.indexes.var.length === s.indexes.var.length && o.indexes.color.length === s.indexes.color.length && o.indexes.number.length >= s.indexes.number.length ? cu.has(e) && !s.values.length || cu.has(t) && !o.values.length ? N2(e, t) : tr(xy(j2(o, s), s.values), n) : (eo(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), pa(e, t));
};
function by(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number" ? ot(e, t, n) : Qu(e)(e, t);
}
function I2(e, t, n) {
  const o = [], s = n || by, c = e.length - 1;
  for (let l = 0; l < c; l++) {
    let u = s(e[l], e[l + 1]);
    if (t) {
      const d = Array.isArray(t) ? t[l] || Ct : t;
      u = tr(d, u);
    }
    o.push(u);
  }
  return o;
}
function k2(e, t, { clamp: n = !0, ease: o, mixer: s } = {}) {
  const c = e.length;
  if (jr(c === t.length, "Both input and output ranges must be the same length"), c === 1)
    return () => t[0];
  if (c === 2 && e[0] === e[1])
    return () => t[1];
  e[0] > e[c - 1] && (e = [...e].reverse(), t = [...t].reverse());
  const l = I2(t, o, s), u = l.length, d = (f) => {
    let m = 0;
    if (u > 1)
      for (; m < e.length - 2 && !(f < e[m + 1]); m++)
        ;
    const v = Gi(e[m], e[m + 1], f);
    return l[m](v);
  };
  return n ? (f) => d(Dr(e[0], e[c - 1], f)) : d;
}
function L2(e, t) {
  const n = e[e.length - 1];
  for (let o = 1; o <= t; o++) {
    const s = Gi(0, t, o);
    e.push(ot(n, 1, s));
  }
}
function V2(e) {
  const t = [0];
  return L2(t, e.length - 1), t;
}
function F2(e, t) {
  return e.map((n) => n * t);
}
function B2(e, t) {
  return e.map(() => t || yy).splice(0, e.length - 1);
}
function ma({ duration: e = 300, keyframes: t, times: n, ease: o = "easeInOut" }) {
  const s = P2(o) ? o.map($p) : $p(o), c = {
    done: !1,
    value: t[0]
  }, l = F2(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    n && n.length === t.length ? n : V2(t),
    e
  ), u = k2(l, t, {
    ease: Array.isArray(s) ? s : B2(t, s)
  });
  return {
    calculatedDuration: e,
    next: (d) => (c.value = u(d), c.done = d >= e, c)
  };
}
const zp = 2e4;
function W2(e) {
  let t = 0;
  const n = 50;
  let o = e.next(t);
  for (; !o.done && t < zp; )
    t += n, o = e.next(t);
  return t >= zp ? 1 / 0 : t;
}
const $2 = (e) => {
  const t = ({ timestamp: n }) => e(n);
  return {
    start: () => Ge.update(t, !0),
    stop: () => Or(t),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => St.isProcessing ? St.timestamp : Vn.now()
  };
}, U2 = {
  decay: Bp,
  inertia: Bp,
  tween: ma,
  keyframes: ma,
  spring: vy
}, H2 = (e) => e / 100;
class ed extends py {
  constructor(t) {
    super(t), this.holdTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.startTime = null, this.state = "idle", this.stop = () => {
      if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle")
        return;
      this.teardown();
      const { onStop: d } = this.options;
      d && d();
    };
    const { name: n, motionValue: o, element: s, keyframes: c } = this.options, l = (s == null ? void 0 : s.KeyframeResolver) || Gu, u = (d, f) => this.onKeyframesResolved(d, f);
    this.resolver = new l(c, u, n, o, s), this.resolver.scheduleResolve();
  }
  flatten() {
    super.flatten(), this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes));
  }
  initPlayback(t) {
    const { type: n = "keyframes", repeat: o = 0, repeatDelay: s = 0, repeatType: c, velocity: l = 0 } = this.options, u = Zu(n) ? n : U2[n] || ma;
    let d, f;
    u !== ma && typeof t[0] != "number" && (process.env.NODE_ENV !== "production" && jr(t.length === 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${t}`), d = tr(H2, by(t[0], t[1])), t = [0, 100]);
    const m = u({ ...this.options, keyframes: t });
    c === "mirror" && (f = u({
      ...this.options,
      keyframes: [...t].reverse(),
      velocity: -l
    })), m.calculatedDuration === null && (m.calculatedDuration = W2(m));
    const { calculatedDuration: v } = m, x = v + s, g = x * (o + 1) - s;
    return {
      generator: m,
      mirroredGenerator: f,
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
    const { finalKeyframe: s, generator: c, mirroredGenerator: l, mapPercentToKeyframes: u, keyframes: d, calculatedDuration: f, totalDuration: m, resolvedDuration: v } = o;
    if (this.startTime === null)
      return c.next(0);
    const { delay: x, repeat: g, repeatType: T, repeatDelay: S, onUpdate: P } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - m / this.speed, this.startTime)), n ? this.currentTime = t : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(t - this.startTime) * this.speed;
    const _ = this.currentTime - x * (this.speed >= 0 ? 1 : -1), E = this.speed >= 0 ? _ < 0 : _ > m;
    this.currentTime = Math.max(_, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = m);
    let O = this.currentTime, N = c;
    if (g) {
      const H = Math.min(this.currentTime, m) / v;
      let te = Math.floor(H), re = H % 1;
      !re && H >= 1 && (re = 1), re === 1 && te--, te = Math.min(te, g + 1), !!(te % 2) && (T === "reverse" ? (re = 1 - re, S && (re -= S / v)) : T === "mirror" && (N = l)), O = Dr(0, 1, re) * v;
    }
    const D = E ? { done: !1, value: d[0] } : N.next(O);
    u && (D.value = u(D.value));
    let { done: W } = D;
    !E && f !== null && (W = this.speed >= 0 ? this.currentTime >= m : this.currentTime <= 0);
    const $ = this.holdTime === null && (this.state === "finished" || this.state === "running" && W);
    return $ && s !== void 0 && (D.value = $a(d, this.options, s)), P && P(D.value), $ && this.finish(), D;
  }
  get duration() {
    const { resolved: t } = this;
    return t ? er(t.calculatedDuration) : 0;
  }
  get time() {
    return er(this.currentTime);
  }
  set time(t) {
    t = kn(t), this.currentTime = t, this.holdTime !== null || this.speed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const n = this.playbackSpeed !== t;
    this.playbackSpeed = t, n && (this.time = er(this.currentTime));
  }
  play() {
    if (this.resolver.isScheduled || this.resolver.resume(), !this._resolved) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped)
      return;
    const { driver: t = $2, onPlay: n, startTime: o } = this.options;
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
const z2 = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Can be accelerated but currently disabled until https://issues.chromium.org/issues/41491098 is resolved
  // or until we implement support for linear() easing.
  // "background-color"
]), G2 = 10, K2 = (e, t) => {
  let n = "";
  const o = Math.max(Math.round(t / G2), 2);
  for (let s = 0; s < o; s++)
    n += e(Gi(0, o - 1, s)) + ", ";
  return `linear(${n.substring(0, n.length - 2)})`;
};
function td(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const Y2 = {
  linearEasing: void 0
};
function q2(e, t) {
  const n = td(e);
  return () => {
    var o;
    return (o = Y2[t]) !== null && o !== void 0 ? o : n();
  };
}
const ga = /* @__PURE__ */ q2(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing");
function wy(e) {
  return !!(typeof e == "function" && ga() || !e || typeof e == "string" && (e in uu || ga()) || Ju(e) || Array.isArray(e) && e.every(wy));
}
const Eo = ([e, t, n, o]) => `cubic-bezier(${e}, ${t}, ${n}, ${o})`, uu = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ Eo([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ Eo([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ Eo([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ Eo([0.33, 1.53, 0.69, 0.99])
};
function Sy(e, t) {
  if (e)
    return typeof e == "function" && ga() ? K2(e, t) : Ju(e) ? Eo(e) : Array.isArray(e) ? e.map((n) => Sy(n, t) || uu.easeOut) : uu[e];
}
function X2(e, t, n, { delay: o = 0, duration: s = 300, repeat: c = 0, repeatType: l = "loop", ease: u = "easeInOut", times: d } = {}) {
  const f = { [t]: n };
  d && (f.offset = d);
  const m = Sy(u, s);
  return Array.isArray(m) && (f.easing = m), e.animate(f, {
    delay: o,
    duration: s,
    easing: Array.isArray(m) ? "linear" : m,
    fill: "both",
    iterations: c + 1,
    direction: l === "reverse" ? "alternate" : "normal"
  });
}
function Gp(e, t) {
  e.timeline = t, e.onfinish = null;
}
const Z2 = /* @__PURE__ */ td(() => Object.hasOwnProperty.call(Element.prototype, "animate")), va = 10, J2 = 2e4;
function Q2(e) {
  return Zu(e.type) || e.type === "spring" || !wy(e.ease);
}
function eM(e, t) {
  const n = new ed({
    ...t,
    keyframes: e,
    repeat: 0,
    delay: 0,
    isGenerator: !0
  });
  let o = { done: !1, value: e[0] };
  const s = [];
  let c = 0;
  for (; !o.done && c < J2; )
    o = n.sample(c), s.push(o.value), c += va;
  return {
    times: void 0,
    keyframes: s,
    duration: c - va,
    ease: "linear"
  };
}
const Cy = {
  anticipate: qv,
  backInOut: Yv,
  circInOut: Zv
};
function tM(e) {
  return e in Cy;
}
class Kp extends py {
  constructor(t) {
    super(t);
    const { name: n, motionValue: o, element: s, keyframes: c } = this.options;
    this.resolver = new hy(c, (l, u) => this.onKeyframesResolved(l, u), n, o, s), this.resolver.scheduleResolve();
  }
  initPlayback(t, n) {
    var o;
    let { duration: s = 300, times: c, ease: l, type: u, motionValue: d, name: f, startTime: m } = this.options;
    if (!(!((o = d.owner) === null || o === void 0) && o.current))
      return !1;
    if (typeof l == "string" && ga() && tM(l) && (l = Cy[l]), Q2(this.options)) {
      const { onComplete: x, onUpdate: g, motionValue: T, element: S, ...P } = this.options, _ = eM(t, P);
      t = _.keyframes, t.length === 1 && (t[1] = t[0]), s = _.duration, c = _.times, l = _.ease, u = "keyframes";
    }
    const v = X2(d.owner.current, f, t, { ...this.options, duration: s, times: c, ease: l });
    return v.startTime = m ?? this.calcStartTime(), this.pendingTimeline ? (Gp(v, this.pendingTimeline), this.pendingTimeline = void 0) : v.onfinish = () => {
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
    return er(n);
  }
  get time() {
    const { resolved: t } = this;
    if (!t)
      return 0;
    const { animation: n } = t;
    return er(n.currentTime || 0);
  }
  set time(t) {
    const { resolved: n } = this;
    if (!n)
      return;
    const { animation: o } = n;
    o.currentTime = kn(t);
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
      Gp(o, t);
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
      const { motionValue: f, onUpdate: m, onComplete: v, element: x, ...g } = this.options, T = new ed({
        ...g,
        keyframes: o,
        duration: s,
        type: c,
        ease: l,
        times: u,
        isGenerator: !0
      }), S = kn(this.time);
      f.setWithVelocity(T.sample(S - va).value, T.sample(S).value, va);
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
    return Z2() && o && z2.has(o) && n && n.owner && n.owner.current instanceof HTMLElement && /**
     * If we're outputting values to onUpdate then we can't use WAAPI as there's
     * no way to read the value from WAAPI every frame.
     */
    !n.owner.getProps().onUpdate && !s && c !== "mirror" && l !== 0 && u !== "inertia";
  }
}
const nM = td(() => window.ScrollTimeline !== void 0);
class rM {
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
    const o = this.animations.map((s) => nM() && s.attachTimeline ? s.attachTimeline(t) : n(s));
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
function iM({ when: e, delay: t, delayChildren: n, staggerChildren: o, staggerDirection: s, repeat: c, repeatType: l, repeatDelay: u, from: d, elapsed: f, ...m }) {
  return !!Object.keys(m).length;
}
const nd = (e, t, n, o = {}, s, c) => (l) => {
  const u = $u(o, e) || {}, d = u.delay || o.delay || 0;
  let { elapsed: f = 0 } = o;
  f = f - kn(d);
  let m = {
    keyframes: Array.isArray(n) ? n : [null, n],
    ease: "easeOut",
    velocity: t.getVelocity(),
    ...u,
    delay: -f,
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
  iM(u) || (m = {
    ...m,
    ...SN(e, m)
  }), m.duration && (m.duration = kn(m.duration)), m.repeatDelay && (m.repeatDelay = kn(m.repeatDelay)), m.from !== void 0 && (m.keyframes[0] = m.from);
  let v = !1;
  if ((m.type === !1 || m.duration === 0 && !m.repeatDelay) && (m.duration = 0, m.delay === 0 && (v = !0)), v && !c && t.get() !== void 0) {
    const x = $a(m.keyframes, u);
    if (x !== void 0)
      return Ge.update(() => {
        m.onUpdate(x), m.onComplete();
      }), new rM([]);
  }
  return !c && Kp.supports(m) ? new Kp(m) : new ed(m);
}, oM = (e) => !!(e && typeof e == "object" && e.mix && e.toValue), sM = (e) => ru(e) ? e[e.length - 1] || 0 : e;
function rd(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function id(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class od {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return rd(this.subscriptions, t), () => id(this.subscriptions, t);
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
const Yp = 30, aM = (e) => !isNaN(parseFloat(e));
class lM {
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
    this.current = t, this.updatedAt = Vn.now(), this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = aM(this.current));
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
    this.events[t] || (this.events[t] = new od());
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
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > Yp)
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, Yp);
    return my(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
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
  return new lM(e, t);
}
function cM(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Bo(n));
}
function uM(e, t) {
  const n = Wa(e, t);
  let { transitionEnd: o = {}, transition: s = {}, ...c } = n || {};
  c = { ...c, ...o };
  for (const l in c) {
    const u = sM(c[l]);
    cM(e, l, u);
  }
}
const sd = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), dM = "framerAppearId", Ty = "data-" + sd(dM);
function Py(e) {
  return e.props[Ty];
}
const Nt = (e) => !!(e && e.getVelocity);
function fM(e) {
  return !!(Nt(e) && e.add);
}
function du(e, t) {
  const n = e.getValue("willChange");
  if (fM(n))
    return n.add(t);
}
function hM({ protectedKeys: e, needsAnimating: t }, n) {
  const o = e.hasOwnProperty(n) && t[n] !== !0;
  return t[n] = !1, o;
}
function _y(e, t, { delay: n = 0, transitionOverride: o, type: s } = {}) {
  var c;
  let { transition: l = e.getDefaultTransition(), transitionEnd: u, ...d } = t;
  o && (l = o);
  const f = [], m = s && e.animationState && e.animationState.getState()[s];
  for (const v in d) {
    const x = e.getValue(v, (c = e.latestValues[v]) !== null && c !== void 0 ? c : null), g = d[v];
    if (g === void 0 || m && hM(m, v))
      continue;
    const T = {
      delay: n,
      ...$u(l || {}, v)
    };
    let S = !1;
    if (window.MotionHandoffAnimation) {
      const _ = Py(e);
      if (_) {
        const E = window.MotionHandoffAnimation(_, v, Ge);
        E !== null && (T.startTime = E, S = !0);
      }
    }
    du(e, v), x.start(nd(v, x, g, e.shouldReduceMotion && hi.has(v) ? { type: !1 } : T, e, S));
    const P = x.animation;
    P && f.push(P);
  }
  return u && Promise.all(f).then(() => {
    Ge.update(() => {
      u && uM(e, u);
    });
  }), f;
}
function fu(e, t, n = {}) {
  var o;
  const s = Wa(e, t, n.type === "exit" ? (o = e.presenceContext) === null || o === void 0 ? void 0 : o.custom : void 0);
  let { transition: c = e.getDefaultTransition() || {} } = s || {};
  n.transitionOverride && (c = n.transitionOverride);
  const l = s ? () => Promise.all(_y(e, s, n)) : () => Promise.resolve(), u = e.variantChildren && e.variantChildren.size ? (f = 0) => {
    const { delayChildren: m = 0, staggerChildren: v, staggerDirection: x } = c;
    return pM(e, t, m + f, v, x, n);
  } : () => Promise.resolve(), { when: d } = c;
  if (d) {
    const [f, m] = d === "beforeChildren" ? [l, u] : [u, l];
    return f().then(() => m());
  } else
    return Promise.all([l(), u(n.delay)]);
}
function pM(e, t, n = 0, o = 0, s = 1, c) {
  const l = [], u = (e.variantChildren.size - 1) * o, d = s === 1 ? (f = 0) => f * o : (f = 0) => u - f * o;
  return Array.from(e.variantChildren).sort(mM).forEach((f, m) => {
    f.notify("AnimationStart", t), l.push(fu(f, t, {
      ...c,
      delay: n + d(m)
    }).then(() => f.notify("AnimationComplete", t)));
  }), Promise.all(l);
}
function mM(e, t) {
  return e.sortNodePosition(t);
}
function gM(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let o;
  if (Array.isArray(t)) {
    const s = t.map((c) => fu(e, c, n));
    o = Promise.all(s);
  } else if (typeof t == "string")
    o = fu(e, t, n);
  else {
    const s = typeof t == "function" ? Wa(e, t, n.custom) : t;
    o = Promise.all(_y(e, s, n));
  }
  return o.then(() => {
    e.notify("AnimationComplete", t);
  });
}
const vM = Wu.length;
function Ay(e) {
  if (!e)
    return;
  if (!e.isControllingVariants) {
    const n = e.parent ? Ay(e.parent) || {} : {};
    return e.props.initial !== void 0 && (n.initial = e.props.initial), n;
  }
  const t = {};
  for (let n = 0; n < vM; n++) {
    const o = Wu[n], s = e.props[o];
    (Lo(s) || s === !1) && (t[o] = s);
  }
  return t;
}
const yM = [...Bu].reverse(), xM = Bu.length;
function bM(e) {
  return (t) => Promise.all(t.map(({ animation: n, options: o }) => gM(e, n, o)));
}
function wM(e) {
  let t = bM(e), n = qp(), o = !0;
  const s = (d) => (f, m) => {
    var v;
    const x = Wa(e, m, d === "exit" ? (v = e.presenceContext) === null || v === void 0 ? void 0 : v.custom : void 0);
    if (x) {
      const { transition: g, transitionEnd: T, ...S } = x;
      f = { ...f, ...S, ...T };
    }
    return f;
  };
  function c(d) {
    t = d(e);
  }
  function l(d) {
    const { props: f } = e, m = Ay(e.parent) || {}, v = [], x = /* @__PURE__ */ new Set();
    let g = {}, T = 1 / 0;
    for (let P = 0; P < xM; P++) {
      const _ = yM[P], E = n[_], O = f[_] !== void 0 ? f[_] : m[_], N = Lo(O), D = _ === d ? E.isActive : null;
      D === !1 && (T = P);
      let W = O === m[_] && O !== f[_] && N;
      if (W && o && e.manuallyAnimateOnMount && (W = !1), E.protectedKeys = { ...g }, // If it isn't active and hasn't *just* been set as inactive
      !E.isActive && D === null || // If we didn't and don't have any defined prop for this animation type
      !O && !E.prevProp || // Or if the prop doesn't define an animation
      Ba(O) || typeof O == "boolean")
        continue;
      const $ = SM(E.prevProp, O);
      let H = $ || // If we're making this variant active, we want to always make it active
      _ === d && E.isActive && !W && N || // If we removed a higher-priority variant (i is in reverse order)
      P > T && N, te = !1;
      const re = Array.isArray(O) ? O : [O];
      let fe = re.reduce(s(_), {});
      D === !1 && (fe = {});
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
        ru(q) && ru(G) ? pe = !$v(q, G) : pe = q !== G, pe ? q != null ? ne(Z) : x.add(Z) : q !== void 0 && x.has(Z) ? ne(Z) : E.protectedKeys[Z] = !0;
      }
      E.prevProp = O, E.prevResolvedValues = fe, E.isActive && (g = { ...g, ...fe }), o && e.blockInitialAnimation && (H = !1), H && (!(W && $) || te) && v.push(...re.map((Z) => ({
        animation: Z,
        options: { type: _ }
      })));
    }
    if (x.size) {
      const P = {};
      x.forEach((_) => {
        const E = e.getBaseTarget(_), O = e.getValue(_);
        O && (O.liveStyle = !0), P[_] = E ?? null;
      }), v.push({ animation: P });
    }
    let S = !!v.length;
    return o && (f.initial === !1 || f.initial === f.animate) && !e.manuallyAnimateOnMount && (S = !1), o = !1, S ? t(v) : Promise.resolve();
  }
  function u(d, f) {
    var m;
    if (n[d].isActive === f)
      return Promise.resolve();
    (m = e.variantChildren) === null || m === void 0 || m.forEach((x) => {
      var g;
      return (g = x.animationState) === null || g === void 0 ? void 0 : g.setActive(d, f);
    }), n[d].isActive = f;
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
      n = qp(), o = !0;
    }
  };
}
function SM(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !$v(t, e) : !1;
}
function ti(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function qp() {
  return {
    animate: ti(!0),
    whileInView: ti(),
    whileHover: ti(),
    whileTap: ti(),
    whileDrag: ti(),
    whileFocus: ti(),
    exit: ti()
  };
}
class Wr {
  constructor(t) {
    this.isMounted = !1, this.node = t;
  }
  update() {
  }
}
class CM extends Wr {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(t) {
    super(t), t.animationState || (t.animationState = wM(t));
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
let TM = 0;
class PM extends Wr {
  constructor() {
    super(...arguments), this.id = TM++;
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
const _M = {
  animation: {
    Feature: CM
  },
  exit: {
    Feature: PM
  }
}, Ey = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1;
function Ua(e, t = "page") {
  return {
    point: {
      x: e[`${t}X`],
      y: e[`${t}Y`]
    }
  };
}
const AM = (e) => (t) => Ey(t) && e(t, Ua(t));
function Zn(e, t, n, o = { passive: !0 }) {
  return e.addEventListener(t, n, o), () => e.removeEventListener(t, n);
}
function nr(e, t, n, o) {
  return Zn(e, t, AM(n), o);
}
const Xp = (e, t) => Math.abs(e - t);
function EM(e, t) {
  const n = Xp(e.x, t.x), o = Xp(e.y, t.y);
  return Math.sqrt(n ** 2 + o ** 2);
}
class Ry {
  constructor(t, n, { transformPagePoint: o, contextWindow: s, dragSnapToOrigin: c = !1 } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const v = Nc(this.lastMoveEventInfo, this.history), x = this.startEvent !== null, g = EM(v.offset, { x: 0, y: 0 }) >= 3;
      if (!x && !g)
        return;
      const { point: T } = v, { timestamp: S } = St;
      this.history.push({ ...T, timestamp: S });
      const { onStart: P, onMove: _ } = this.handlers;
      x || (P && P(this.lastMoveEvent, v), this.startEvent = this.lastMoveEvent), _ && _(this.lastMoveEvent, v);
    }, this.handlePointerMove = (v, x) => {
      this.lastMoveEvent = v, this.lastMoveEventInfo = Rc(x, this.transformPagePoint), Ge.update(this.updatePoint, !0);
    }, this.handlePointerUp = (v, x) => {
      this.end();
      const { onEnd: g, onSessionEnd: T, resumeAnimation: S } = this.handlers;
      if (this.dragSnapToOrigin && S && S(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const P = Nc(v.type === "pointercancel" ? this.lastMoveEventInfo : Rc(x, this.transformPagePoint), this.history);
      this.startEvent && g && g(v, P), T && T(v, P);
    }, !Ey(t))
      return;
    this.dragSnapToOrigin = c, this.handlers = n, this.transformPagePoint = o, this.contextWindow = s || window;
    const l = Ua(t), u = Rc(l, this.transformPagePoint), { point: d } = u, { timestamp: f } = St;
    this.history = [{ ...d, timestamp: f }];
    const { onSessionStart: m } = n;
    m && m(t, Nc(u, this.history)), this.removeListeners = tr(nr(this.contextWindow, "pointermove", this.handlePointerMove), nr(this.contextWindow, "pointerup", this.handlePointerUp), nr(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), Or(this.updatePoint);
  }
}
function Rc(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Zp(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Nc({ point: e }, t) {
  return {
    point: e,
    delta: Zp(e, Ny(t)),
    offset: Zp(e, RM(t)),
    velocity: NM(t, 0.1)
  };
}
function RM(e) {
  return e[0];
}
function Ny(e) {
  return e[e.length - 1];
}
function NM(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let n = e.length - 1, o = null;
  const s = Ny(e);
  for (; n >= 0 && (o = e[n], !(s.timestamp - o.timestamp > kn(t))); )
    n--;
  if (!o)
    return { x: 0, y: 0 };
  const c = er(s.timestamp - o.timestamp);
  if (c === 0)
    return { x: 0, y: 0 };
  const l = {
    x: (s.x - o.x) / c,
    y: (s.y - o.y) / c
  };
  return l.x === 1 / 0 && (l.x = 0), l.y === 1 / 0 && (l.y = 0), l;
}
function My(e) {
  let t = null;
  return () => {
    const n = () => {
      t = null;
    };
    return t === null ? (t = e, n) : !1;
  };
}
const Jp = My("dragHorizontal"), Qp = My("dragVertical");
function Oy(e) {
  let t = !1;
  if (e === "y")
    t = Qp();
  else if (e === "x")
    t = Jp();
  else {
    const n = Jp(), o = Qp();
    n && o ? t = () => {
      n(), o();
    } : (n && n(), o && o());
  }
  return t;
}
function jy() {
  const e = Oy(!0);
  return e ? (e(), !1) : !0;
}
function ki(e) {
  return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
const Dy = 1e-4, MM = 1 - Dy, OM = 1 + Dy, Iy = 0.01, jM = 0 - Iy, DM = 0 + Iy;
function rn(e) {
  return e.max - e.min;
}
function IM(e, t, n) {
  return Math.abs(e - t) <= n;
}
function em(e, t, n, o = 0.5) {
  e.origin = o, e.originPoint = ot(t.min, t.max, e.origin), e.scale = rn(n) / rn(t), e.translate = ot(n.min, n.max, e.origin) - e.originPoint, (e.scale >= MM && e.scale <= OM || isNaN(e.scale)) && (e.scale = 1), (e.translate >= jM && e.translate <= DM || isNaN(e.translate)) && (e.translate = 0);
}
function Mo(e, t, n, o) {
  em(e.x, t.x, n.x, o ? o.originX : void 0), em(e.y, t.y, n.y, o ? o.originY : void 0);
}
function tm(e, t, n) {
  e.min = n.min + t.min, e.max = e.min + rn(t);
}
function kM(e, t, n) {
  tm(e.x, t.x, n.x), tm(e.y, t.y, n.y);
}
function nm(e, t, n) {
  e.min = t.min - n.min, e.max = e.min + rn(t);
}
function Oo(e, t, n) {
  nm(e.x, t.x, n.x), nm(e.y, t.y, n.y);
}
function LM(e, { min: t, max: n }, o) {
  return t !== void 0 && e < t ? e = o ? ot(t, e, o.min) : Math.max(e, t) : n !== void 0 && e > n && (e = o ? ot(n, e, o.max) : Math.min(e, n)), e;
}
function rm(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
  };
}
function VM(e, { top: t, left: n, bottom: o, right: s }) {
  return {
    x: rm(e.x, n, s),
    y: rm(e.y, t, o)
  };
}
function im(e, t) {
  let n = t.min - e.min, o = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, o] = [o, n]), { min: n, max: o };
}
function FM(e, t) {
  return {
    x: im(e.x, t.x),
    y: im(e.y, t.y)
  };
}
function BM(e, t) {
  let n = 0.5;
  const o = rn(e), s = rn(t);
  return s > o ? n = Gi(t.min, t.max - o, e.min) : o > s && (n = Gi(e.min, e.max - s, t.min)), Dr(0, 1, n);
}
function WM(e, t) {
  const n = {};
  return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n;
}
const hu = 0.35;
function $M(e = hu) {
  return e === !1 ? e = 0 : e === !0 && (e = hu), {
    x: om(e, "left", "right"),
    y: om(e, "top", "bottom")
  };
}
function om(e, t, n) {
  return {
    min: sm(e, t),
    max: sm(e, n)
  };
}
function sm(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const am = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), Li = () => ({
  x: am(),
  y: am()
}), lm = () => ({ min: 0, max: 0 }), ft = () => ({
  x: lm(),
  y: lm()
});
function gn(e) {
  return [e("x"), e("y")];
}
function ky({ top: e, left: t, right: n, bottom: o }) {
  return {
    x: { min: t, max: n },
    y: { min: e, max: o }
  };
}
function UM({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function HM(e, t) {
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
function Mc(e) {
  return e === void 0 || e === 1;
}
function pu({ scale: e, scaleX: t, scaleY: n }) {
  return !Mc(e) || !Mc(t) || !Mc(n);
}
function ni(e) {
  return pu(e) || Ly(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
}
function Ly(e) {
  return cm(e.x) || cm(e.y);
}
function cm(e) {
  return e && e !== "0%";
}
function ya(e, t, n) {
  const o = e - n, s = t * o;
  return n + s;
}
function um(e, t, n, o, s) {
  return s !== void 0 && (e = ya(e, s, o)), ya(e, n, o) + t;
}
function mu(e, t = 0, n = 1, o, s) {
  e.min = um(e.min, t, n, o, s), e.max = um(e.max, t, n, o, s);
}
function Vy(e, { x: t, y: n }) {
  mu(e.x, t.translate, t.scale, t.originPoint), mu(e.y, n.translate, n.scale, n.originPoint);
}
const dm = 0.999999999999, fm = 1.0000000000001;
function zM(e, t, n, o = !1) {
  const s = n.length;
  if (!s)
    return;
  t.x = t.y = 1;
  let c, l;
  for (let u = 0; u < s; u++) {
    c = n[u], l = c.projectionDelta;
    const { visualElement: d } = c.options;
    d && d.props.style && d.props.style.display === "contents" || (o && c.options.layoutScroll && c.scroll && c !== c.root && Fi(e, {
      x: -c.scroll.offset.x,
      y: -c.scroll.offset.y
    }), l && (t.x *= l.x.scale, t.y *= l.y.scale, Vy(e, l)), o && ni(c.latestValues) && Fi(e, c.latestValues));
  }
  t.x < fm && t.x > dm && (t.x = 1), t.y < fm && t.y > dm && (t.y = 1);
}
function Vi(e, t) {
  e.min = e.min + t, e.max = e.max + t;
}
function hm(e, t, n, o, s = 0.5) {
  const c = ot(e.min, e.max, s);
  mu(e, t, n, c, o);
}
function Fi(e, t) {
  hm(e.x, t.x, t.scaleX, t.scale, t.originX), hm(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function Fy(e, t) {
  return ky(HM(e.getBoundingClientRect(), t));
}
function GM(e, t, n) {
  const o = Fy(e, n), { scroll: s } = t;
  return s && (Vi(o.x, s.offset.x), Vi(o.y, s.offset.y)), o;
}
const By = ({ current: e }) => e ? e.ownerDocument.defaultView : null, KM = /* @__PURE__ */ new WeakMap();
class YM {
  constructor(t) {
    this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = ft(), this.visualElement = t;
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: o } = this.visualElement;
    if (o && o.isPresent === !1)
      return;
    const s = (m) => {
      const { dragSnapToOrigin: v } = this.getProps();
      v ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(Ua(m, "page").point);
    }, c = (m, v) => {
      const { drag: x, dragPropagation: g, onDragStart: T } = this.getProps();
      if (x && !g && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = Oy(x), !this.openGlobalLock))
        return;
      this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), gn((P) => {
        let _ = this.getAxisMotionValue(P).get() || 0;
        if (Ln.test(_)) {
          const { projection: E } = this.visualElement;
          if (E && E.layout) {
            const O = E.layout.layoutBox[P];
            O && (_ = rn(O) * (parseFloat(_) / 100));
          }
        }
        this.originPoint[P] = _;
      }), T && Ge.postRender(() => T(m, v)), du(this.visualElement, "transform");
      const { animationState: S } = this.visualElement;
      S && S.setActive("whileDrag", !0);
    }, l = (m, v) => {
      const { dragPropagation: x, dragDirectionLock: g, onDirectionLock: T, onDrag: S } = this.getProps();
      if (!x && !this.openGlobalLock)
        return;
      const { offset: P } = v;
      if (g && this.currentDirection === null) {
        this.currentDirection = qM(P), this.currentDirection !== null && T && T(this.currentDirection);
        return;
      }
      this.updateAxis("x", v.point, P), this.updateAxis("y", v.point, P), this.visualElement.render(), S && S(m, v);
    }, u = (m, v) => this.stop(m, v), d = () => gn((m) => {
      var v;
      return this.getAnimationState(m) === "paused" && ((v = this.getAxisMotionValue(m).animation) === null || v === void 0 ? void 0 : v.play());
    }), { dragSnapToOrigin: f } = this.getProps();
    this.panSession = new Ry(t, {
      onSessionStart: s,
      onStart: c,
      onMove: l,
      onSessionEnd: u,
      resumeAnimation: d
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: f,
      contextWindow: By(this.visualElement)
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
    if (!o || !Ys(t, s, this.currentDirection))
      return;
    const c = this.getAxisMotionValue(t);
    let l = this.originPoint[t] + o[t];
    this.constraints && this.constraints[t] && (l = LM(l, this.constraints[t], this.elastic[t])), c.set(l);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: o } = this.getProps(), s = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (t = this.visualElement.projection) === null || t === void 0 ? void 0 : t.layout, c = this.constraints;
    n && ki(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && s ? this.constraints = VM(s.layoutBox, n) : this.constraints = !1, this.elastic = $M(o), c !== this.constraints && s && this.constraints && !this.hasMutatedConstraints && gn((l) => {
      this.constraints !== !1 && this.getAxisMotionValue(l) && (this.constraints[l] = WM(s.layoutBox[l], this.constraints[l]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !ki(t))
      return !1;
    const o = t.current;
    jr(o !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
    const { projection: s } = this.visualElement;
    if (!s || !s.layout)
      return !1;
    const c = GM(o, s.root, this.visualElement.getTransformPagePoint());
    let l = FM(s.layout.layoutBox, c);
    if (n) {
      const u = n(UM(l));
      this.hasMutatedConstraints = !!u, u && (l = ky(u));
    }
    return l;
  }
  startAnimation(t) {
    const { drag: n, dragMomentum: o, dragElastic: s, dragTransition: c, dragSnapToOrigin: l, onDragTransitionEnd: u } = this.getProps(), d = this.constraints || {}, f = gn((m) => {
      if (!Ys(m, n, this.currentDirection))
        return;
      let v = d && d[m] || {};
      l && (v = { min: 0, max: 0 });
      const x = s ? 200 : 1e6, g = s ? 40 : 1e7, T = {
        type: "inertia",
        velocity: o ? t[m] : 0,
        bounceStiffness: x,
        bounceDamping: g,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...c,
        ...v
      };
      return this.startAxisValueAnimation(m, T);
    });
    return Promise.all(f).then(u);
  }
  startAxisValueAnimation(t, n) {
    const o = this.getAxisMotionValue(t);
    return du(this.visualElement, t), o.start(nd(t, o, 0, n, this.visualElement, !1));
  }
  stopAnimation() {
    gn((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    gn((t) => {
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
    gn((n) => {
      const { drag: o } = this.getProps();
      if (!Ys(n, o, this.currentDirection))
        return;
      const { projection: s } = this.visualElement, c = this.getAxisMotionValue(n);
      if (s && s.layout) {
        const { min: l, max: u } = s.layout.layoutBox[n];
        c.set(t[n] - ot(l, u, 0.5));
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
    if (!ki(n) || !o || !this.constraints)
      return;
    this.stopAnimation();
    const s = { x: 0, y: 0 };
    gn((l) => {
      const u = this.getAxisMotionValue(l);
      if (u && this.constraints !== !1) {
        const d = u.get();
        s[l] = BM({ min: d, max: d }, this.constraints[l]);
      }
    });
    const { transformTemplate: c } = this.visualElement.getProps();
    this.visualElement.current.style.transform = c ? c({}, "") : "none", o.root && o.root.updateScroll(), o.updateLayout(), this.resolveConstraints(), gn((l) => {
      if (!Ys(l, t, null))
        return;
      const u = this.getAxisMotionValue(l), { min: d, max: f } = this.constraints[l];
      u.set(ot(d, f, s[l]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    KM.set(this.visualElement, this);
    const t = this.visualElement.current, n = nr(t, "pointerdown", (d) => {
      const { drag: f, dragListener: m = !0 } = this.getProps();
      f && m && this.start(d);
    }), o = () => {
      const { dragConstraints: d } = this.getProps();
      ki(d) && d.current && (this.constraints = this.resolveRefConstraints());
    }, { projection: s } = this.visualElement, c = s.addEventListener("measure", o);
    s && !s.layout && (s.root && s.root.updateScroll(), s.updateLayout()), Ge.read(o);
    const l = Zn(window, "resize", () => this.scalePositionWithinConstraints()), u = s.addEventListener("didUpdate", ({ delta: d, hasLayoutChanged: f }) => {
      this.isDragging && f && (gn((m) => {
        const v = this.getAxisMotionValue(m);
        v && (this.originPoint[m] += d[m].translate, v.set(v.get() + d[m].translate));
      }), this.visualElement.render());
    });
    return () => {
      l(), n(), c(), u && u();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(), { drag: n = !1, dragDirectionLock: o = !1, dragPropagation: s = !1, dragConstraints: c = !1, dragElastic: l = hu, dragMomentum: u = !0 } = t;
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
function Ys(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function qM(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n;
}
class XM extends Wr {
  constructor(t) {
    super(t), this.removeGroupControls = Ct, this.removeListeners = Ct, this.controls = new YM(t);
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || Ct;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const pm = (e) => (t, n) => {
  e && Ge.postRender(() => e(t, n));
};
class ZM extends Wr {
  constructor() {
    super(...arguments), this.removePointerDownListener = Ct;
  }
  onPointerDown(t) {
    this.session = new Ry(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: By(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: n, onPan: o, onPanEnd: s } = this.node.getProps();
    return {
      onSessionStart: pm(t),
      onStart: pm(n),
      onMove: o,
      onEnd: (c, l) => {
        delete this.session, s && Ge.postRender(() => s(c, l));
      }
    };
  }
  mount() {
    this.removePointerDownListener = nr(this.node.current, "pointerdown", (t) => this.onPointerDown(t));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const ad = Yi(null);
function JM() {
  const e = zt(ad);
  if (e === null)
    return [!0, null];
  const { isPresent: t, onExitComplete: n, register: o } = e, s = XT();
  Wo(() => o(s), []);
  const c = zm(() => n && n(s), [s, n]);
  return !t && n ? [!1, c] : [!0];
}
const Wy = Yi({}), $y = Yi({}), ta = {
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
function mm(e, t) {
  return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
const _o = {
  correct: (e, t) => {
    if (!t.target)
      return e;
    if (typeof e == "string")
      if (ue.test(e))
        e = parseFloat(e);
      else
        return e;
    const n = mm(e, t.target.x), o = mm(e, t.target.y);
    return `${n}% ${o}%`;
  }
}, QM = {
  correct: (e, { treeScale: t, projectionDelta: n }) => {
    const o = e, s = Ir.parse(e);
    if (s.length > 5)
      return o;
    const c = Ir.createTransformer(e), l = typeof s[0] != "number" ? 1 : 0, u = n.x.scale * t.x, d = n.y.scale * t.y;
    s[0 + l] /= u, s[1 + l] /= d;
    const f = ot(u, d, 0.5);
    return typeof s[2 + l] == "number" && (s[2 + l] /= f), typeof s[3 + l] == "number" && (s[3 + l] /= f), c(s);
  }
}, xa = {};
function eO(e) {
  Object.assign(xa, e);
}
const { schedule: ld, cancel: TD } = Uv(queueMicrotask, !1);
class tO extends ZT {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: o, layoutId: s } = this.props, { projection: c } = t;
    eO(nO), c && (n.group && n.group.add(c), o && o.register && s && o.register(c), c.root.didUpdate(), c.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), c.setOptions({
      ...c.options,
      onExitComplete: () => this.safeToRemove()
    })), ta.hasEverUpdated = !0;
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
    t && (t.root.didUpdate(), ld.postRender(() => {
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
function Uy(e) {
  const [t, n] = JM(), o = zt(Wy);
  return p.jsx(tO, { ...e, layoutGroup: o, switchLayoutGroup: zt($y), isPresent: t, safeToRemove: n });
}
const nO = {
  borderRadius: {
    ..._o,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: _o,
  borderTopRightRadius: _o,
  borderBottomLeftRadius: _o,
  borderBottomRightRadius: _o,
  boxShadow: QM
}, Hy = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], rO = Hy.length, gm = (e) => typeof e == "string" ? parseFloat(e) : e, vm = (e) => typeof e == "number" || ue.test(e);
function iO(e, t, n, o, s, c) {
  s ? (e.opacity = ot(
    0,
    // TODO Reinstate this if only child
    n.opacity !== void 0 ? n.opacity : 1,
    oO(o)
  ), e.opacityExit = ot(t.opacity !== void 0 ? t.opacity : 1, 0, sO(o))) : c && (e.opacity = ot(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, o));
  for (let l = 0; l < rO; l++) {
    const u = `border${Hy[l]}Radius`;
    let d = ym(t, u), f = ym(n, u);
    if (d === void 0 && f === void 0)
      continue;
    d || (d = 0), f || (f = 0), d === 0 || f === 0 || vm(d) === vm(f) ? (e[u] = Math.max(ot(gm(d), gm(f), o), 0), (Ln.test(f) || Ln.test(d)) && (e[u] += "%")) : e[u] = f;
  }
  (t.rotate || n.rotate) && (e.rotate = ot(t.rotate || 0, n.rotate || 0, o));
}
function ym(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const oO = /* @__PURE__ */ zy(0, 0.5, Xv), sO = /* @__PURE__ */ zy(0.5, 0.95, Ct);
function zy(e, t, n) {
  return (o) => o < e ? 0 : o > t ? 1 : n(Gi(e, t, o));
}
function xm(e, t) {
  e.min = t.min, e.max = t.max;
}
function mn(e, t) {
  xm(e.x, t.x), xm(e.y, t.y);
}
function bm(e, t) {
  e.translate = t.translate, e.scale = t.scale, e.originPoint = t.originPoint, e.origin = t.origin;
}
function wm(e, t, n, o, s) {
  return e -= t, e = ya(e, 1 / n, o), s !== void 0 && (e = ya(e, 1 / s, o)), e;
}
function aO(e, t = 0, n = 1, o = 0.5, s, c = e, l = e) {
  if (Ln.test(t) && (t = parseFloat(t), t = ot(l.min, l.max, t / 100) - l.min), typeof t != "number")
    return;
  let u = ot(c.min, c.max, o);
  e === c && (u -= t), e.min = wm(e.min, t, n, u, s), e.max = wm(e.max, t, n, u, s);
}
function Sm(e, t, [n, o, s], c, l) {
  aO(e, t[n], t[o], t[s], t.scale, c, l);
}
const lO = ["x", "scaleX", "originX"], cO = ["y", "scaleY", "originY"];
function Cm(e, t, n, o) {
  Sm(e.x, t, lO, n ? n.x : void 0, o ? o.x : void 0), Sm(e.y, t, cO, n ? n.y : void 0, o ? o.y : void 0);
}
function Tm(e) {
  return e.translate === 0 && e.scale === 1;
}
function Gy(e) {
  return Tm(e.x) && Tm(e.y);
}
function Pm(e, t) {
  return e.min === t.min && e.max === t.max;
}
function uO(e, t) {
  return Pm(e.x, t.x) && Pm(e.y, t.y);
}
function _m(e, t) {
  return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max);
}
function Ky(e, t) {
  return _m(e.x, t.x) && _m(e.y, t.y);
}
function Am(e) {
  return rn(e.x) / rn(e.y);
}
function Em(e, t) {
  return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint;
}
class dO {
  constructor() {
    this.members = [];
  }
  add(t) {
    rd(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (id(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
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
function fO(e, t, n) {
  let o = "";
  const s = e.x.translate / t.x, c = e.y.translate / t.y, l = (n == null ? void 0 : n.z) || 0;
  if ((s || c || l) && (o = `translate3d(${s}px, ${c}px, ${l}px) `), (t.x !== 1 || t.y !== 1) && (o += `scale(${1 / t.x}, ${1 / t.y}) `), n) {
    const { transformPerspective: f, rotate: m, rotateX: v, rotateY: x, skewX: g, skewY: T } = n;
    f && (o = `perspective(${f}px) ${o}`), m && (o += `rotate(${m}deg) `), v && (o += `rotateX(${v}deg) `), x && (o += `rotateY(${x}deg) `), g && (o += `skewX(${g}deg) `), T && (o += `skewY(${T}deg) `);
  }
  const u = e.x.scale * t.x, d = e.y.scale * t.y;
  return (u !== 1 || d !== 1) && (o += `scale(${u}, ${d})`), o || "none";
}
const hO = (e, t) => e.depth - t.depth;
class pO {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(t) {
    rd(this.children, t), this.isDirty = !0;
  }
  remove(t) {
    id(this.children, t), this.isDirty = !0;
  }
  forEach(t) {
    this.isDirty && this.children.sort(hO), this.isDirty = !1, this.children.forEach(t);
  }
}
function na(e) {
  const t = Nt(e) ? e.get() : e;
  return oM(t) ? t.toValue() : t;
}
function mO(e, t) {
  const n = Vn.now(), o = ({ timestamp: s }) => {
    const c = s - n;
    c >= t && (Or(o), e(c - t));
  };
  return Ge.read(o, !0), () => Or(o);
}
function gO(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function vO(e, t, n) {
  const o = Nt(e) ? e : Bo(e);
  return o.start(nd("", o, t, n)), o.animation;
}
const ri = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0
}, Ro = typeof window < "u" && window.MotionDebug !== void 0, Oc = ["", "X", "Y", "Z"], yO = { visibility: "hidden" }, Rm = 1e3;
let xO = 0;
function jc(e, t, n, o) {
  const { latestValues: s } = t;
  s[e] && (n[e] = s[e], t.setStaticValue(e, 0), o && (o[e] = 0));
}
function Yy(e) {
  if (e.hasCheckedOptimisedAppear = !0, e.root === e)
    return;
  const { visualElement: t } = e.options;
  if (!t)
    return;
  const n = Py(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: s, layoutId: c } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", Ge, !(s || c));
  }
  const { parent: o } = e;
  o && !o.hasCheckedOptimisedAppear && Yy(o);
}
function qy({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: o, resetTransform: s }) {
  return class {
    constructor(l = {}, u = t == null ? void 0 : t()) {
      this.id = xO++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, Ro && (ri.totalNodes = ri.resolvedTargetDeltas = ri.recalculatedProjection = 0), this.nodes.forEach(SO), this.nodes.forEach(AO), this.nodes.forEach(EO), this.nodes.forEach(CO), Ro && window.MotionDebug.record(ri);
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = l, this.root = u ? u.root || u : this, this.path = u ? [...u.path, u] : [], this.parent = u, this.depth = u ? u.depth + 1 : 0;
      for (let d = 0; d < this.path.length; d++)
        this.path[d].shouldResetTransform = !0;
      this.root === this && (this.nodes = new pO());
    }
    addEventListener(l, u) {
      return this.eventHandlers.has(l) || this.eventHandlers.set(l, new od()), this.eventHandlers.get(l).add(u);
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
      this.isSVG = gO(l), this.instance = l;
      const { layoutId: d, layout: f, visualElement: m } = this.options;
      if (m && !m.current && m.mount(l), this.root.nodes.add(this), this.parent && this.parent.children.add(this), u && (f || d) && (this.isLayoutDirty = !0), e) {
        let v;
        const x = () => this.root.updateBlockedByResize = !1;
        e(l, () => {
          this.root.updateBlockedByResize = !0, v && v(), v = mO(x, 250), ta.hasAnimatedSinceResize && (ta.hasAnimatedSinceResize = !1, this.nodes.forEach(Mm));
        });
      }
      d && this.root.registerSharedNode(d, this), this.options.animate !== !1 && m && (d || f) && this.addEventListener("didUpdate", ({ delta: v, hasLayoutChanged: x, hasRelativeTargetChanged: g, layout: T }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const S = this.options.transition || m.getDefaultTransition() || jO, { onLayoutAnimationStart: P, onLayoutAnimationComplete: _ } = m.getProps(), E = !this.targetLayout || !Ky(this.targetLayout, T) || g, O = !x && g;
        if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || O || x && (E || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(v, O);
          const N = {
            ...$u(S, "layout"),
            onPlay: P,
            onComplete: _
          };
          (m.shouldReduceMotion || this.options.layoutRoot) && (N.delay = 0, N.type = !1), this.startAnimation(N);
        } else
          x || Mm(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = T;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const l = this.getStack();
      l && l.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, Or(this.updateProjection);
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
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(RO), this.animationId++);
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
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && Yy(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let m = 0; m < this.path.length; m++) {
        const v = this.path[m];
        v.shouldResetTransform = !0, v.updateScroll("snapshot"), v.options.layoutRoot && v.willUpdate(!1);
      }
      const { layoutId: u, layout: d } = this.options;
      if (u === void 0 && !d)
        return;
      const f = this.getTransformTemplate();
      this.prevTransformTemplateValue = f ? f(this.latestValues, "") : void 0, this.updateSnapshot(), l && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Nm);
        return;
      }
      this.isUpdating || this.nodes.forEach(PO), this.isUpdating = !1, this.nodes.forEach(_O), this.nodes.forEach(bO), this.nodes.forEach(wO), this.clearAllSnapshots();
      const u = Vn.now();
      St.delta = Dr(0, 1e3 / 60, u - St.timestamp), St.timestamp = u, St.isProcessing = !0, Tc.update.process(St), Tc.preRender.process(St), Tc.render.process(St), St.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, ld.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(TO), this.sharedNodes.forEach(NO);
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
      this.layout = this.measure(!1), this.layoutCorrected = ft(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
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
      const l = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, u = this.projectionDelta && !Gy(this.projectionDelta), d = this.getTransformTemplate(), f = d ? d(this.latestValues, "") : void 0, m = f !== this.prevTransformTemplateValue;
      l && (u || ni(this.latestValues) || m) && (s(this.instance, f), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(l = !0) {
      const u = this.measurePageBox();
      let d = this.removeElementScroll(u);
      return l && (d = this.removeTransform(d)), DO(d), {
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
        return ft();
      const d = u.measureViewportBox();
      if (!(((l = this.scroll) === null || l === void 0 ? void 0 : l.wasRoot) || this.path.some(IO))) {
        const { scroll: m } = this.root;
        m && (Vi(d.x, m.offset.x), Vi(d.y, m.offset.y));
      }
      return d;
    }
    removeElementScroll(l) {
      var u;
      const d = ft();
      if (mn(d, l), !((u = this.scroll) === null || u === void 0) && u.wasRoot)
        return d;
      for (let f = 0; f < this.path.length; f++) {
        const m = this.path[f], { scroll: v, options: x } = m;
        m !== this.root && v && x.layoutScroll && (v.wasRoot && mn(d, l), Vi(d.x, v.offset.x), Vi(d.y, v.offset.y));
      }
      return d;
    }
    applyTransform(l, u = !1) {
      const d = ft();
      mn(d, l);
      for (let f = 0; f < this.path.length; f++) {
        const m = this.path[f];
        !u && m.options.layoutScroll && m.scroll && m !== m.root && Fi(d, {
          x: -m.scroll.offset.x,
          y: -m.scroll.offset.y
        }), ni(m.latestValues) && Fi(d, m.latestValues);
      }
      return ni(this.latestValues) && Fi(d, this.latestValues), d;
    }
    removeTransform(l) {
      const u = ft();
      mn(u, l);
      for (let d = 0; d < this.path.length; d++) {
        const f = this.path[d];
        if (!f.instance || !ni(f.latestValues))
          continue;
        pu(f.latestValues) && f.updateSnapshot();
        const m = ft(), v = f.measurePageBox();
        mn(m, v), Cm(u, f.latestValues, f.snapshot ? f.snapshot.layoutBox : void 0, m);
      }
      return ni(this.latestValues) && Cm(u, this.latestValues), u;
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
      const f = !!this.resumingFrom || this !== d;
      if (!(l || f && this.isSharedProjectionDirty || this.isProjectionDirty || !((u = this.parent) === null || u === void 0) && u.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
        return;
      const { layout: v, layoutId: x } = this.options;
      if (!(!this.layout || !(v || x))) {
        if (this.resolvedRelativeTargetAt = St.timestamp, !this.targetDelta && !this.relativeTarget) {
          const g = this.getClosestProjectingParent();
          g && g.layout && this.animationProgress !== 1 ? (this.relativeParent = g, this.forceRelativeParentToResolveTarget(), this.relativeTarget = ft(), this.relativeTargetOrigin = ft(), Oo(this.relativeTargetOrigin, this.layout.layoutBox, g.layout.layoutBox), mn(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (this.target || (this.target = ft(), this.targetWithTransforms = ft()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), kM(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : mn(this.target, this.layout.layoutBox), Vy(this.target, this.targetDelta)) : mn(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
            this.attemptToResolveRelativeTarget = !1;
            const g = this.getClosestProjectingParent();
            g && !!g.resumingFrom == !!this.resumingFrom && !g.options.layoutScroll && g.target && this.animationProgress !== 1 ? (this.relativeParent = g, this.forceRelativeParentToResolveTarget(), this.relativeTarget = ft(), this.relativeTargetOrigin = ft(), Oo(this.relativeTargetOrigin, this.target, g.target), mn(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
          }
          Ro && ri.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || pu(this.parent.latestValues) || Ly(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      var l;
      const u = this.getLead(), d = !!this.resumingFrom || this !== u;
      let f = !0;
      if ((this.isProjectionDirty || !((l = this.parent) === null || l === void 0) && l.isProjectionDirty) && (f = !1), d && (this.isSharedProjectionDirty || this.isTransformDirty) && (f = !1), this.resolvedRelativeTargetAt === St.timestamp && (f = !1), f)
        return;
      const { layout: m, layoutId: v } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(m || v))
        return;
      mn(this.layoutCorrected, this.layout.layoutBox);
      const x = this.treeScale.x, g = this.treeScale.y;
      zM(this.layoutCorrected, this.treeScale, this.path, d), u.layout && !u.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (u.target = u.layout.layoutBox, u.targetWithTransforms = ft());
      const { target: T } = u;
      if (!T) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (bm(this.prevProjectionDelta.x, this.projectionDelta.x), bm(this.prevProjectionDelta.y, this.projectionDelta.y)), Mo(this.projectionDelta, this.layoutCorrected, T, this.latestValues), (this.treeScale.x !== x || this.treeScale.y !== g || !Em(this.projectionDelta.x, this.prevProjectionDelta.x) || !Em(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", T)), Ro && ri.recalculatedProjection++;
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
      this.prevProjectionDelta = Li(), this.projectionDelta = Li(), this.projectionDeltaWithTransform = Li();
    }
    setAnimationOrigin(l, u = !1) {
      const d = this.snapshot, f = d ? d.latestValues : {}, m = { ...this.latestValues }, v = Li();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !u;
      const x = ft(), g = d ? d.source : void 0, T = this.layout ? this.layout.source : void 0, S = g !== T, P = this.getStack(), _ = !P || P.members.length <= 1, E = !!(S && !_ && this.options.crossfade === !0 && !this.path.some(OO));
      this.animationProgress = 0;
      let O;
      this.mixTargetDelta = (N) => {
        const D = N / 1e3;
        Om(v.x, l.x, D), Om(v.y, l.y, D), this.setTargetDelta(v), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Oo(x, this.layout.layoutBox, this.relativeParent.layout.layoutBox), MO(this.relativeTarget, this.relativeTargetOrigin, x, D), O && uO(this.relativeTarget, O) && (this.isProjectionDirty = !1), O || (O = ft()), mn(O, this.relativeTarget)), S && (this.animationValues = m, iO(m, f, this.latestValues, D, E, _)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = D;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(l) {
      this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (Or(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = Ge.update(() => {
        ta.hasAnimatedSinceResize = !0, this.currentAnimation = vO(0, Rm, {
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
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(Rm), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const l = this.getLead();
      let { targetWithTransforms: u, target: d, layout: f, latestValues: m } = l;
      if (!(!u || !d || !f)) {
        if (this !== l && this.layout && f && Xy(this.options.animationType, this.layout.layoutBox, f.layoutBox)) {
          d = this.target || ft();
          const v = rn(this.layout.layoutBox.x);
          d.x.min = l.target.x.min, d.x.max = d.x.min + v;
          const x = rn(this.layout.layoutBox.y);
          d.y.min = l.target.y.min, d.y.max = d.y.min + x;
        }
        mn(u, d), Fi(u, m), Mo(this.projectionDeltaWithTransform, this.layoutCorrected, u, m);
      }
    }
    registerSharedNode(l, u) {
      this.sharedNodes.has(l) || this.sharedNodes.set(l, new dO()), this.sharedNodes.get(l).add(u);
      const f = u.options.initialPromotionConfig;
      u.promote({
        transition: f ? f.transition : void 0,
        preserveFollowOpacity: f && f.shouldPreserveFollowOpacity ? f.shouldPreserveFollowOpacity(u) : void 0
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
      const f = this.getStack();
      f && f.promote(this, d), l && (this.projectionDelta = void 0, this.needsReset = !0), u && this.setOptions({ transition: u });
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
      const f = {};
      d.z && jc("z", l, f, this.animationValues);
      for (let m = 0; m < Oc.length; m++)
        jc(`rotate${Oc[m]}`, l, f, this.animationValues), jc(`skew${Oc[m]}`, l, f, this.animationValues);
      l.render();
      for (const m in f)
        l.setStaticValue(m, f[m]), this.animationValues && (this.animationValues[m] = f[m]);
      l.scheduleRender();
    }
    getProjectionStyles(l) {
      var u, d;
      if (!this.instance || this.isSVG)
        return;
      if (!this.isVisible)
        return yO;
      const f = {
        visibility: ""
      }, m = this.getTransformTemplate();
      if (this.needsReset)
        return this.needsReset = !1, f.opacity = "", f.pointerEvents = na(l == null ? void 0 : l.pointerEvents) || "", f.transform = m ? m(this.latestValues, "") : "none", f;
      const v = this.getLead();
      if (!this.projectionDelta || !this.layout || !v.target) {
        const S = {};
        return this.options.layoutId && (S.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, S.pointerEvents = na(l == null ? void 0 : l.pointerEvents) || ""), this.hasProjected && !ni(this.latestValues) && (S.transform = m ? m({}, "") : "none", this.hasProjected = !1), S;
      }
      const x = v.animationValues || v.latestValues;
      this.applyTransformsToTarget(), f.transform = fO(this.projectionDeltaWithTransform, this.treeScale, x), m && (f.transform = m(x, f.transform));
      const { x: g, y: T } = this.projectionDelta;
      f.transformOrigin = `${g.origin * 100}% ${T.origin * 100}% 0`, v.animationValues ? f.opacity = v === this ? (d = (u = x.opacity) !== null && u !== void 0 ? u : this.latestValues.opacity) !== null && d !== void 0 ? d : 1 : this.preserveOpacity ? this.latestValues.opacity : x.opacityExit : f.opacity = v === this ? x.opacity !== void 0 ? x.opacity : "" : x.opacityExit !== void 0 ? x.opacityExit : 0;
      for (const S in xa) {
        if (x[S] === void 0)
          continue;
        const { correct: P, applyTo: _ } = xa[S], E = f.transform === "none" ? x[S] : P(x[S], v);
        if (_) {
          const O = _.length;
          for (let N = 0; N < O; N++)
            f[_[N]] = E;
        } else
          f[S] = E;
      }
      return this.options.layoutId && (f.pointerEvents = v === this ? na(l == null ? void 0 : l.pointerEvents) || "" : "none"), f;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((l) => {
        var u;
        return (u = l.currentAnimation) === null || u === void 0 ? void 0 : u.stop();
      }), this.root.nodes.forEach(Nm), this.root.sharedNodes.clear();
    }
  };
}
function bO(e) {
  e.updateLayout();
}
function wO(e) {
  var t;
  const n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: o, measuredBox: s } = e.layout, { animationType: c } = e.options, l = n.source !== e.layout.source;
    c === "size" ? gn((v) => {
      const x = l ? n.measuredBox[v] : n.layoutBox[v], g = rn(x);
      x.min = o[v].min, x.max = x.min + g;
    }) : Xy(c, n.layoutBox, o) && gn((v) => {
      const x = l ? n.measuredBox[v] : n.layoutBox[v], g = rn(o[v]);
      x.max = x.min + g, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[v].max = e.relativeTarget[v].min + g);
    });
    const u = Li();
    Mo(u, o, n.layoutBox);
    const d = Li();
    l ? Mo(d, e.applyTransform(s, !0), n.measuredBox) : Mo(d, o, n.layoutBox);
    const f = !Gy(u);
    let m = !1;
    if (!e.resumeFrom) {
      const v = e.getClosestProjectingParent();
      if (v && !v.resumeFrom) {
        const { snapshot: x, layout: g } = v;
        if (x && g) {
          const T = ft();
          Oo(T, n.layoutBox, x.layoutBox);
          const S = ft();
          Oo(S, o, g.layoutBox), Ky(T, S) || (m = !0), v.options.layoutRoot && (e.relativeTarget = S, e.relativeTargetOrigin = T, e.relativeParent = v);
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: o,
      snapshot: n,
      delta: d,
      layoutDelta: u,
      hasLayoutChanged: f,
      hasRelativeTargetChanged: m
    });
  } else if (e.isLead()) {
    const { onExitComplete: o } = e.options;
    o && o();
  }
  e.options.transition = void 0;
}
function SO(e) {
  Ro && ri.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function CO(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function TO(e) {
  e.clearSnapshot();
}
function Nm(e) {
  e.clearMeasurements();
}
function PO(e) {
  e.isLayoutDirty = !1;
}
function _O(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function Mm(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function AO(e) {
  e.resolveTargetDelta();
}
function EO(e) {
  e.calcProjection();
}
function RO(e) {
  e.resetSkewAndRotation();
}
function NO(e) {
  e.removeLeadSnapshot();
}
function Om(e, t, n) {
  e.translate = ot(t.translate, 0, n), e.scale = ot(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint;
}
function jm(e, t, n, o) {
  e.min = ot(t.min, n.min, o), e.max = ot(t.max, n.max, o);
}
function MO(e, t, n, o) {
  jm(e.x, t.x, n.x, o), jm(e.y, t.y, n.y, o);
}
function OO(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const jO = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, Dm = (e) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e), Im = Dm("applewebkit/") && !Dm("chrome/") ? Math.round : Ct;
function km(e) {
  e.min = Im(e.min), e.max = Im(e.max);
}
function DO(e) {
  km(e.x), km(e.y);
}
function Xy(e, t, n) {
  return e === "position" || e === "preserve-aspect" && !IM(Am(t), Am(n), 0.2);
}
function IO(e) {
  var t;
  return e !== e.root && ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot);
}
const kO = qy({
  attachResizeListener: (e, t) => Zn(e, "resize", t),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), Dc = {
  current: void 0
}, Zy = qy({
  measureScroll: (e) => ({
    x: e.scrollLeft,
    y: e.scrollTop
  }),
  defaultParent: () => {
    if (!Dc.current) {
      const e = new kO({});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), Dc.current = e;
    }
    return Dc.current;
  },
  resetTransform: (e, t) => {
    e.style.transform = t !== void 0 ? t : "none";
  },
  checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), LO = {
  pan: {
    Feature: ZM
  },
  drag: {
    Feature: XM,
    ProjectionNode: Zy,
    MeasureLayout: Uy
  }
};
function Lm(e, t) {
  const n = t ? "pointerenter" : "pointerleave", o = t ? "onHoverStart" : "onHoverEnd", s = (c, l) => {
    if (c.pointerType === "touch" || jy())
      return;
    const u = e.getProps();
    e.animationState && u.whileHover && e.animationState.setActive("whileHover", t);
    const d = u[o];
    d && Ge.postRender(() => d(c, l));
  };
  return nr(e.current, n, s, {
    passive: !e.getProps()[o]
  });
}
class VO extends Wr {
  mount() {
    this.unmount = tr(Lm(this.node, !0), Lm(this.node, !1));
  }
  unmount() {
  }
}
class FO extends Wr {
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
    this.unmount = tr(Zn(this.node.current, "focus", () => this.onFocus()), Zn(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
const Jy = (e, t) => t ? e === t ? !0 : Jy(e, t.parentElement) : !1;
function Ic(e, t) {
  if (!t)
    return;
  const n = new PointerEvent("pointer" + e);
  t(n, Ua(n));
}
class BO extends Wr {
  constructor() {
    super(...arguments), this.removeStartListeners = Ct, this.removeEndListeners = Ct, this.removeAccessibleListeners = Ct, this.startPointerPress = (t, n) => {
      if (this.isPressing)
        return;
      this.removeEndListeners();
      const o = this.node.getProps(), c = nr(window, "pointerup", (u, d) => {
        if (!this.checkPressEnd())
          return;
        const { onTap: f, onTapCancel: m, globalTapTarget: v } = this.node.getProps(), x = !v && !Jy(this.node.current, u.target) ? m : f;
        x && Ge.update(() => x(u, d));
      }, {
        passive: !(o.onTap || o.onPointerUp)
      }), l = nr(window, "pointercancel", (u, d) => this.cancelPress(u, d), {
        passive: !(o.onTapCancel || o.onPointerCancel)
      });
      this.removeEndListeners = tr(c, l), this.startPress(t, n);
    }, this.startAccessiblePress = () => {
      const t = (c) => {
        if (c.key !== "Enter" || this.isPressing)
          return;
        const l = (u) => {
          u.key !== "Enter" || !this.checkPressEnd() || Ic("up", (d, f) => {
            const { onTap: m } = this.node.getProps();
            m && Ge.postRender(() => m(d, f));
          });
        };
        this.removeEndListeners(), this.removeEndListeners = Zn(this.node.current, "keyup", l), Ic("down", (u, d) => {
          this.startPress(u, d);
        });
      }, n = Zn(this.node.current, "keydown", t), o = () => {
        this.isPressing && Ic("cancel", (c, l) => this.cancelPress(c, l));
      }, s = Zn(this.node.current, "blur", o);
      this.removeAccessibleListeners = tr(n, s);
    };
  }
  startPress(t, n) {
    this.isPressing = !0;
    const { onTapStart: o, whileTap: s } = this.node.getProps();
    s && this.node.animationState && this.node.animationState.setActive("whileTap", !0), o && Ge.postRender(() => o(t, n));
  }
  checkPressEnd() {
    return this.removeEndListeners(), this.isPressing = !1, this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !jy();
  }
  cancelPress(t, n) {
    if (!this.checkPressEnd())
      return;
    const { onTapCancel: o } = this.node.getProps();
    o && Ge.postRender(() => o(t, n));
  }
  mount() {
    const t = this.node.getProps(), n = nr(t.globalTapTarget ? window : this.node.current, "pointerdown", this.startPointerPress, {
      passive: !(t.onTapStart || t.onPointerStart)
    }), o = Zn(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = tr(n, o);
  }
  unmount() {
    this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners();
  }
}
const gu = /* @__PURE__ */ new WeakMap(), kc = /* @__PURE__ */ new WeakMap(), WO = (e) => {
  const t = gu.get(e.target);
  t && t(e);
}, $O = (e) => {
  e.forEach(WO);
};
function UO({ root: e, ...t }) {
  const n = e || document;
  kc.has(n) || kc.set(n, {});
  const o = kc.get(n), s = JSON.stringify(t);
  return o[s] || (o[s] = new IntersectionObserver($O, { root: e, ...t })), o[s];
}
function HO(e, t, n) {
  const o = UO(t);
  return gu.set(e, n), o.observe(e), () => {
    gu.delete(e), o.unobserve(e);
  };
}
const zO = {
  some: 0,
  all: 1
};
class GO extends Wr {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(), { root: n, margin: o, amount: s = "some", once: c } = t, l = {
      root: n ? n.current : void 0,
      rootMargin: o,
      threshold: typeof s == "number" ? s : zO[s]
    }, u = (d) => {
      const { isIntersecting: f } = d;
      if (this.isInView === f || (this.isInView = f, c && !f && this.hasEnteredView))
        return;
      f && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", f);
      const { onViewportEnter: m, onViewportLeave: v } = this.node.getProps(), x = f ? m : v;
      x && x(d);
    };
    return HO(this.node.current, l, u);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(KO(t, n)) && this.startObserver();
  }
  unmount() {
  }
}
function KO({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const YO = {
  inView: {
    Feature: GO
  },
  tap: {
    Feature: BO
  },
  focus: {
    Feature: FO
  },
  hover: {
    Feature: VO
  }
}, qO = {
  layout: {
    ProjectionNode: Zy,
    MeasureLayout: Uy
  }
}, Qy = Yi({
  transformPagePoint: (e) => e,
  isStatic: !1,
  reducedMotion: "never"
}), Ha = Yi({}), cd = typeof window < "u", XO = cd ? Hm : Wo, e0 = Yi({ strict: !1 });
function ZO(e, t, n, o, s) {
  var c, l;
  const { visualElement: u } = zt(Ha), d = zt(e0), f = zt(ad), m = zt(Qy).reducedMotion, v = Xs();
  o = o || d.renderer, !v.current && o && (v.current = o(e, {
    visualState: t,
    parent: u,
    props: n,
    presenceContext: f,
    blockInitialAnimation: f ? f.initial === !1 : !1,
    reducedMotionConfig: m
  }));
  const x = v.current, g = zt($y);
  x && !x.projection && s && (x.type === "html" || x.type === "svg") && JO(v.current, n, s, g);
  const T = Xs(!1);
  JT(() => {
    x && T.current && x.update(n, f);
  });
  const S = n[Ty], P = Xs(!!S && !(!((c = window.MotionHandoffIsComplete) === null || c === void 0) && c.call(window, S)) && ((l = window.MotionHasOptimisedAnimation) === null || l === void 0 ? void 0 : l.call(window, S)));
  return XO(() => {
    x && (T.current = !0, window.MotionIsMounted = !0, x.updateFeatures(), ld.render(x.render), P.current && x.animationState && x.animationState.animateChanges());
  }), Wo(() => {
    x && (!P.current && x.animationState && x.animationState.animateChanges(), P.current && (queueMicrotask(() => {
      var _;
      (_ = window.MotionHandoffMarkAsComplete) === null || _ === void 0 || _.call(window, S);
    }), P.current = !1));
  }), x;
}
function JO(e, t, n, o) {
  const { layoutId: s, layout: c, drag: l, dragConstraints: u, layoutScroll: d, layoutRoot: f } = t;
  e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? void 0 : t0(e.parent)), e.projection.setOptions({
    layoutId: s,
    layout: c,
    alwaysMeasureLayout: !!l || u && ki(u),
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
    layoutRoot: f
  });
}
function t0(e) {
  if (e)
    return e.options.allowProjection !== !1 ? e.projection : t0(e.parent);
}
function QO(e, t, n) {
  return zm(
    (o) => {
      o && e.mount && e.mount(o), t && (o ? t.mount(o) : t.unmount()), n && (typeof n == "function" ? n(o) : ki(n) && (n.current = o));
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
  return Ba(e.animate) || Wu.some((t) => Lo(e[t]));
}
function n0(e) {
  return !!(za(e) || e.variants);
}
function ej(e, t) {
  if (za(e)) {
    const { initial: n, animate: o } = e;
    return {
      initial: n === !1 || Lo(n) ? n : void 0,
      animate: Lo(o) ? o : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function tj(e) {
  const { initial: t, animate: n } = ej(e, zt(Ha));
  return $o(() => ({ initial: t, animate: n }), [Vm(t), Vm(n)]);
}
function Vm(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const Fm = {
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
}, Ki = {};
for (const e in Fm)
  Ki[e] = {
    isEnabled: (t) => Fm[e].some((n) => !!t[n])
  };
function nj(e) {
  for (const t in e)
    Ki[t] = {
      ...Ki[t],
      ...e[t]
    };
}
const rj = Symbol.for("motionComponentSymbol");
function ij({ preloadedFeatures: e, createVisualElement: t, useRender: n, useVisualState: o, Component: s }) {
  e && nj(e);
  function c(u, d) {
    let f;
    const m = {
      ...zt(Qy),
      ...u,
      layoutId: oj(u)
    }, { isStatic: v } = m, x = tj(u), g = o(u, v);
    if (!v && cd) {
      sj(m, e);
      const T = aj(m);
      f = T.MeasureLayout, x.visualElement = ZO(s, g, m, t, T.ProjectionNode);
    }
    return p.jsxs(Ha.Provider, { value: x, children: [f && x.visualElement ? p.jsx(f, { visualElement: x.visualElement, ...m }) : null, n(s, u, QO(g, x.visualElement, d), g, v, x.visualElement)] });
  }
  const l = Sa(c);
  return l[rj] = s, l;
}
function oj({ layoutId: e }) {
  const t = zt(Wy).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function sj(e, t) {
  const n = zt(e0).strict;
  if (process.env.NODE_ENV !== "production" && t && n) {
    const o = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
    e.ignoreStrict ? eo(!1, o) : jr(!1, o);
  }
}
function aj(e) {
  const { drag: t, layout: n } = Ki;
  if (!t && !n)
    return {};
  const o = { ...t, ...n };
  return {
    MeasureLayout: t != null && t.isEnabled(e) || n != null && n.isEnabled(e) ? o.MeasureLayout : void 0,
    ProjectionNode: o.ProjectionNode
  };
}
const lj = [
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
function ud(e) {
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
      !!(lj.indexOf(e) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(e))
    )
  );
}
function r0(e, { style: t, vars: n }, o, s) {
  Object.assign(e.style, t, s && s.getProjectionStyles(o));
  for (const c in n)
    e.style.setProperty(c, n[c]);
}
const i0 = /* @__PURE__ */ new Set([
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
function o0(e, t, n, o) {
  r0(e, t, void 0, o);
  for (const s in t.attrs)
    e.setAttribute(i0.has(s) ? s : sd(s), t.attrs[s]);
}
function s0(e, { layout: t, layoutId: n }) {
  return hi.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!xa[e] || e === "opacity");
}
function dd(e, t, n) {
  var o;
  const { style: s } = e, c = {};
  for (const l in s)
    (Nt(s[l]) || t.style && Nt(t.style[l]) || s0(l, e) || ((o = n == null ? void 0 : n.getValue(l)) === null || o === void 0 ? void 0 : o.liveStyle) !== void 0) && (c[l] = s[l]);
  return c;
}
function a0(e, t, n) {
  const o = dd(e, t, n);
  for (const s in e)
    if (Nt(e[s]) || Nt(t[s])) {
      const c = Go.indexOf(s) !== -1 ? "attr" + s.charAt(0).toUpperCase() + s.substring(1) : s;
      o[c] = e[s];
    }
  return o;
}
function cj(e) {
  const t = Xs(null);
  return t.current === null && (t.current = e()), t.current;
}
function uj({ scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n }, o, s, c) {
  const l = {
    latestValues: dj(o, s, c, e),
    renderState: t()
  };
  return n && (l.mount = (u) => n(o, u, l)), l;
}
const l0 = (e) => (t, n) => {
  const o = zt(Ha), s = zt(ad), c = () => uj(e, t, o, s);
  return n ? c() : cj(c);
};
function dj(e, t, n, o) {
  const s = {}, c = o(e, {});
  for (const x in c)
    s[x] = na(c[x]);
  let { initial: l, animate: u } = e;
  const d = za(e), f = n0(e);
  t && f && !d && e.inherit !== !1 && (l === void 0 && (l = t.initial), u === void 0 && (u = t.animate));
  let m = n ? n.initial === !1 : !1;
  m = m || l === !1;
  const v = m ? u : l;
  if (v && typeof v != "boolean" && !Ba(v)) {
    const x = Array.isArray(v) ? v : [v];
    for (let g = 0; g < x.length; g++) {
      const T = Fu(e, x[g]);
      if (T) {
        const { transitionEnd: S, transition: P, ..._ } = T;
        for (const E in _) {
          let O = _[E];
          if (Array.isArray(O)) {
            const N = m ? O.length - 1 : 0;
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
const fd = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
}), c0 = () => ({
  ...fd(),
  attrs: {}
}), u0 = (e, t) => t && typeof e == "number" ? t.transform(e) : e, fj = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, hj = Go.length;
function pj(e, t, n) {
  let o = "", s = !0;
  for (let c = 0; c < hj; c++) {
    const l = Go[c], u = e[l];
    if (u === void 0)
      continue;
    let d = !0;
    if (typeof u == "number" ? d = u === (l.startsWith("scale") ? 1 : 0) : d = parseFloat(u) === 0, !d || n) {
      const f = u0(u, qu[l]);
      if (!d) {
        s = !1;
        const m = fj[l] || l;
        o += `${m}(${f}) `;
      }
      n && (t[l] = f);
    }
  }
  return o = o.trim(), n ? o = n(t, s ? "" : o) : s && (o = "none"), o;
}
function hd(e, t, n) {
  const { style: o, vars: s, transformOrigin: c } = e;
  let l = !1, u = !1;
  for (const d in t) {
    const f = t[d];
    if (hi.has(d)) {
      l = !0;
      continue;
    } else if (ty(d)) {
      s[d] = f;
      continue;
    } else {
      const m = u0(f, qu[d]);
      d.startsWith("origin") ? (u = !0, c[d] = m) : o[d] = m;
    }
  }
  if (t.transform || (l || n ? o.transform = pj(t, e.transform, n) : o.transform && (o.transform = "none")), u) {
    const { originX: d = "50%", originY: f = "50%", originZ: m = 0 } = c;
    o.transformOrigin = `${d} ${f} ${m}`;
  }
}
function Bm(e, t, n) {
  return typeof e == "string" ? e : ue.transform(t + n * e);
}
function mj(e, t, n) {
  const o = Bm(t, e.x, e.width), s = Bm(n, e.y, e.height);
  return `${o} ${s}`;
}
const gj = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, vj = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function yj(e, t, n = 1, o = 0, s = !0) {
  e.pathLength = 1;
  const c = s ? gj : vj;
  e[c.offset] = ue.transform(-o);
  const l = ue.transform(t), u = ue.transform(n);
  e[c.array] = `${l} ${u}`;
}
function pd(e, {
  attrX: t,
  attrY: n,
  attrScale: o,
  originX: s,
  originY: c,
  pathLength: l,
  pathSpacing: u = 1,
  pathOffset: d = 0,
  // This is object creation, which we try to avoid per-frame.
  ...f
}, m, v) {
  if (hd(e, f, v), m) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  e.attrs = e.style, e.style = {};
  const { attrs: x, style: g, dimensions: T } = e;
  x.transform && (T && (g.transform = x.transform), delete x.transform), T && (s !== void 0 || c !== void 0 || g.transform) && (g.transformOrigin = mj(T, s !== void 0 ? s : 0.5, c !== void 0 ? c : 0.5)), t !== void 0 && (x.x = t), n !== void 0 && (x.y = n), o !== void 0 && (x.scale = o), l !== void 0 && yj(x, l, u, d, !1);
}
const md = (e) => typeof e == "string" && e.toLowerCase() === "svg", xj = {
  useVisualState: l0({
    scrapeMotionValuesFromProps: a0,
    createRenderState: c0,
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
        pd(n, o, md(t.tagName), e.transformTemplate), o0(t, n);
      });
    }
  })
}, bj = {
  useVisualState: l0({
    scrapeMotionValuesFromProps: dd,
    createRenderState: fd
  })
};
function d0(e, t, n) {
  for (const o in t)
    !Nt(t[o]) && !s0(o, n) && (e[o] = t[o]);
}
function wj({ transformTemplate: e }, t) {
  return $o(() => {
    const n = fd();
    return hd(n, t, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function Sj(e, t) {
  const n = e.style || {}, o = {};
  return d0(o, n, e), Object.assign(o, wj(e, t)), o;
}
function Cj(e, t) {
  const n = {}, o = Sj(e, t);
  return e.drag && e.dragListener !== !1 && (n.draggable = !1, o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none", o.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = o, n;
}
const Tj = /* @__PURE__ */ new Set([
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
function ba(e) {
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || Tj.has(e);
}
let f0 = (e) => !ba(e);
function Pj(e) {
  e && (f0 = (t) => t.startsWith("on") ? !ba(t) : e(t));
}
try {
  Pj(require("@emotion/is-prop-valid").default);
} catch {
}
function _j(e, t, n) {
  const o = {};
  for (const s in e)
    s === "values" && typeof e.values == "object" || (f0(s) || n === !0 && ba(s) || !t && !ba(s) || // If trying to use native HTML drag events, forward drag listeners
    e.draggable && s.startsWith("onDrag")) && (o[s] = e[s]);
  return o;
}
function Aj(e, t, n, o) {
  const s = $o(() => {
    const c = c0();
    return pd(c, t, md(o), e.transformTemplate), {
      ...c.attrs,
      style: { ...c.style }
    };
  }, [t]);
  if (e.style) {
    const c = {};
    d0(c, e.style, e), s.style = { ...c, ...s.style };
  }
  return s;
}
function Ej(e = !1) {
  return (n, o, s, { latestValues: c }, l) => {
    const d = (ud(n) ? Aj : Cj)(o, c, l, n), f = _j(o, typeof n == "string", e), m = n !== Gm ? { ...f, ...d, ref: s } : {}, { children: v } = o, x = $o(() => Nt(v) ? v.get() : v, [v]);
    return ra(n, {
      ...m,
      children: x
    });
  };
}
function Rj(e, t) {
  return function(o, { forwardMotionProps: s } = { forwardMotionProps: !1 }) {
    const l = {
      ...ud(o) ? xj : bj,
      preloadedFeatures: e,
      useRender: Ej(s),
      createVisualElement: t,
      Component: o
    };
    return ij(l);
  };
}
const vu = { current: null }, h0 = { current: !1 };
function Nj() {
  if (h0.current = !0, !!cd)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"), t = () => vu.current = e.matches;
      e.addListener(t), t();
    } else
      vu.current = !1;
}
function Mj(e, t, n) {
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
const Wm = /* @__PURE__ */ new WeakMap(), Oj = [...iy, Rt, Ir], jj = (e) => Oj.find(ry(e)), $m = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
class Dj {
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
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = Gu, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const x = Vn.now();
      this.renderScheduledAt < x && (this.renderScheduledAt = x, Ge.render(this.render, !1, !0));
    };
    const { latestValues: d, renderState: f } = l;
    this.latestValues = d, this.baseTarget = { ...d }, this.initialValues = n.initial ? { ...d } : {}, this.renderState = f, this.parent = t, this.props = n, this.presenceContext = o, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = s, this.options = u, this.blockInitialAnimation = !!c, this.isControllingVariants = za(n), this.isVariantNode = n0(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
    const { willChange: m, ...v } = this.scrapeMotionValuesFromProps(n, {}, this);
    for (const x in v) {
      const g = v[x];
      d[x] !== void 0 && Nt(g) && g.set(d[x], !1);
    }
  }
  mount(t) {
    this.current = t, Wm.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, o) => this.bindToMotionValue(o, n)), h0.current || Nj(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : vu.current, process.env.NODE_ENV !== "production" && Fa(this.shouldReduceMotion !== !0, "You have Reduced Motion enabled on your device. Animations may not appear as expected."), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    Wm.delete(this.current), this.projection && this.projection.unmount(), Or(this.notifyUpdate), Or(this.render), this.valueSubscriptions.forEach((t) => t()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
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
    const o = hi.has(t), s = n.on("change", (u) => {
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
    for (t in Ki) {
      const n = Ki[t];
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
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : ft();
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
    for (let o = 0; o < $m.length; o++) {
      const s = $m[o];
      this.propEventSubscriptions[s] && (this.propEventSubscriptions[s](), delete this.propEventSubscriptions[s]);
      const c = "on" + s, l = t[c];
      l && (this.propEventSubscriptions[s] = this.on(s, l));
    }
    this.prevMotionValues = Mj(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
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
    return s != null && (typeof s == "string" && (Qv(s) || Jv(s)) ? s = parseFloat(s) : !jj(s) && Ir.test(n) && (s = fy(t, n)), this.setBaseTarget(t, Nt(s) ? s.get() : s)), Nt(s) ? s.get() : s;
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
      const l = Fu(this.props, o, (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom);
      l && (s = l[t]);
    }
    if (o && s !== void 0)
      return s;
    const c = this.getBaseTargetFromProps(this.props, t);
    return c !== void 0 && !Nt(c) ? c : this.initialValues[t] !== void 0 && s === void 0 ? void 0 : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new od()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class p0 extends Dj {
  constructor() {
    super(...arguments), this.KeyframeResolver = hy;
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
function Ij(e) {
  return window.getComputedStyle(e);
}
class kj extends p0 {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = r0;
  }
  readValueFromInstance(t, n) {
    if (hi.has(n)) {
      const o = Xu(n);
      return o && o.default || 0;
    } else {
      const o = Ij(t), s = (ty(n) ? o.getPropertyValue(n) : o[n]) || 0;
      return typeof s == "string" ? s.trim() : s;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return Fy(t, n);
  }
  build(t, n, o) {
    hd(t, n, o.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, o) {
    return dd(t, n, o);
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    Nt(t) && (this.childSubscription = t.on("change", (n) => {
      this.current && (this.current.textContent = `${n}`);
    }));
  }
}
class Lj extends p0 {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = ft;
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (hi.has(n)) {
      const o = Xu(n);
      return o && o.default || 0;
    }
    return n = i0.has(n) ? n : sd(n), t.getAttribute(n);
  }
  scrapeMotionValuesFromProps(t, n, o) {
    return a0(t, n, o);
  }
  build(t, n, o) {
    pd(t, n, this.isSVGTag, o.transformTemplate);
  }
  renderInstance(t, n, o, s) {
    o0(t, n, o, s);
  }
  mount(t) {
    this.isSVGTag = md(t.tagName), super.mount(t);
  }
}
const Vj = (e, t) => ud(e) ? new Lj(t) : new kj(t, {
  allowProjection: e !== Gm
}), Fj = /* @__PURE__ */ Rj({
  ..._M,
  ...YO,
  ...LO,
  ...qO
}, Vj), Ga = /* @__PURE__ */ vN(Fj);
function _D({ deal: e }) {
  const [t, n] = tn([]), o = $o(() => [...e.riskFactors].sort((u, d) => {
    const f = { high: 0, medium: 1, low: 2 };
    return f[u.level] - f[d.level];
  }), [e.riskFactors]), s = (u) => {
    switch (u) {
      case "high":
        return /* @__PURE__ */ p.jsx(Bc, { className: "w-4 h-4" });
      case "medium":
        return /* @__PURE__ */ p.jsx(yP, { className: "w-4 h-4" });
      case "low":
        return /* @__PURE__ */ p.jsx(gP, { className: "w-4 h-4" });
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
    n((d) => d.includes(u) ? d.filter((f) => f !== u) : [...d, u]);
  };
  return /* @__PURE__ */ p.jsxs(Vr, { className: "shadow-lg w-full max-w-3xl mx-auto my-8", children: [
    /* @__PURE__ */ p.jsxs(Fr, { children: [
      /* @__PURE__ */ p.jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ p.jsx(Br, { className: "text-slate-800", children: "Risk Assessment" }) }),
      /* @__PURE__ */ p.jsx("p", { className: "text-sm text-slate-500", children: "Identify and assess potential obstacles in the deal process" })
    ] }),
    /* @__PURE__ */ p.jsx(fi, { children: /* @__PURE__ */ p.jsx("div", { className: "space-y-6", children: o.map((u, d) => /* @__PURE__ */ p.jsxs("div", { className: `p-4 rounded-lg border ${c(u.level)}`, children: [
      /* @__PURE__ */ p.jsxs(
        "div",
        {
          className: "flex flex-col sm:flex-row sm:items-center sm:justify-between cursor-pointer space-y-2 sm:space-y-0",
          onClick: () => l(u.label),
          children: [
            /* @__PURE__ */ p.jsxs("div", { className: "flex items-center space-x-3", children: [
              s(u.level),
              /* @__PURE__ */ p.jsx("span", { className: "font-semibold text-sm sm:text-base", children: u.label })
            ] }),
            /* @__PURE__ */ p.jsxs("div", { className: "flex items-center justify-between sm:justify-end space-x-4", children: [
              /* @__PURE__ */ p.jsx(Pr, { children: /* @__PURE__ */ p.jsxs(_r, { children: [
                /* @__PURE__ */ p.jsx(Ar, { asChild: !0, children: /* @__PURE__ */ p.jsxs("div", { className: "flex items-center space-x-1 text-xs sm:text-sm text-muted-foreground", children: [
                  /* @__PURE__ */ p.jsxs("span", { children: [
                    u.lostDealFrequency,
                    " deals lost"
                  ] }),
                  /* @__PURE__ */ p.jsx(jo, { className: "w-3 h-3 text-muted-foreground" })
                ] }) }),
                /* @__PURE__ */ p.jsx(Qn, { className: "max-w-xs", children: /* @__PURE__ */ p.jsxs("p", { children: [
                  "This factor contributed to ",
                  u.lostDealFrequency,
                  " lost deals in the past. Addressing this early can help avoid the same outcome."
                ] }) })
              ] }) }),
              /* @__PURE__ */ p.jsx(
                Ta,
                {
                  className: `w-4 h-4 transition-transform ${t.includes(u.label) ? "transform rotate-180" : ""}`
                }
              )
            ] })
          ]
        }
      ),
      t.includes(u.label) && /* @__PURE__ */ p.jsxs(
        Ga.div,
        {
          initial: { opacity: 0, height: 0 },
          animate: { opacity: 1, height: "auto" },
          exit: { opacity: 0, height: 0 },
          transition: { duration: 0.3 },
          className: "mt-4 space-y-4",
          children: [
            /* @__PURE__ */ p.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ p.jsxs("div", { children: [
                /* @__PURE__ */ p.jsx("h4", { className: "font-semibold mb-2", children: "Details" }),
                /* @__PURE__ */ p.jsx("p", { className: "text-sm text-slate-600", children: u.details })
              ] }),
              /* @__PURE__ */ p.jsxs("div", { children: [
                /* @__PURE__ */ p.jsx("h4", { className: "font-semibold mb-2", children: "Impact" }),
                /* @__PURE__ */ p.jsx("p", { className: "text-sm text-slate-600", children: u.impact })
              ] })
            ] }),
            /* @__PURE__ */ p.jsxs("div", { children: [
              /* @__PURE__ */ p.jsx("h4", { className: "font-semibold mb-2", children: "Key Metric" }),
              /* @__PURE__ */ p.jsx("p", { className: "text-sm text-slate-600", children: u.metric })
            ] })
          ]
        }
      )
    ] }, d)) }) })
  ] });
}
var gd = "Dialog", [m0, AD] = Pa(gd), [Bj, Pn] = m0(gd), g0 = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: o,
    defaultOpen: s,
    onOpenChange: c,
    modal: l = !0
  } = e, u = w.useRef(null), d = w.useRef(null), [f = !1, m] = ko({
    prop: o,
    defaultProp: s,
    onChange: c
  });
  return /* @__PURE__ */ p.jsx(
    Bj,
    {
      scope: t,
      triggerRef: u,
      contentRef: d,
      contentId: si(),
      titleId: si(),
      descriptionId: si(),
      open: f,
      onOpenChange: m,
      onOpenToggle: w.useCallback(() => m((v) => !v), [m]),
      modal: l,
      children: n
    }
  );
};
g0.displayName = gd;
var v0 = "DialogTrigger", Wj = w.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...o } = e, s = Pn(v0, n), c = nt(t, s.triggerRef);
    return /* @__PURE__ */ p.jsx(
      Ve.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": s.open,
        "aria-controls": s.contentId,
        "data-state": xd(s.open),
        ...o,
        ref: c,
        onClick: ke(e.onClick, s.onOpenToggle)
      }
    );
  }
);
Wj.displayName = v0;
var vd = "DialogPortal", [$j, y0] = m0(vd, {
  forceMount: void 0
}), x0 = (e) => {
  const { __scopeDialog: t, forceMount: n, children: o, container: s } = e, c = Pn(vd, t);
  return /* @__PURE__ */ p.jsx($j, { scope: t, forceMount: n, children: w.Children.map(o, (l) => /* @__PURE__ */ p.jsx(Qi, { present: n || c.open, children: /* @__PURE__ */ p.jsx(Nu, { asChild: !0, container: s, children: l }) })) });
};
x0.displayName = vd;
var wa = "DialogOverlay", b0 = w.forwardRef(
  (e, t) => {
    const n = y0(wa, e.__scopeDialog), { forceMount: o = n.forceMount, ...s } = e, c = Pn(wa, e.__scopeDialog);
    return c.modal ? /* @__PURE__ */ p.jsx(Qi, { present: o || c.open, children: /* @__PURE__ */ p.jsx(Uj, { ...s, ref: t }) }) : null;
  }
);
b0.displayName = wa;
var Uj = w.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...o } = e, s = Pn(wa, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ p.jsx(Ou, { as: li, allowPinchZoom: !0, shards: [s.contentRef], children: /* @__PURE__ */ p.jsx(
        Ve.div,
        {
          "data-state": xd(s.open),
          ...o,
          ref: t,
          style: { pointerEvents: "auto", ...o.style }
        }
      ) })
    );
  }
), di = "DialogContent", w0 = w.forwardRef(
  (e, t) => {
    const n = y0(di, e.__scopeDialog), { forceMount: o = n.forceMount, ...s } = e, c = Pn(di, e.__scopeDialog);
    return /* @__PURE__ */ p.jsx(Qi, { present: o || c.open, children: c.modal ? /* @__PURE__ */ p.jsx(Hj, { ...s, ref: t }) : /* @__PURE__ */ p.jsx(zj, { ...s, ref: t }) });
  }
);
w0.displayName = di;
var Hj = w.forwardRef(
  (e, t) => {
    const n = Pn(di, e.__scopeDialog), o = w.useRef(null), s = nt(t, n.contentRef, o);
    return w.useEffect(() => {
      const c = o.current;
      if (c)
        return Fg(c);
    }, []), /* @__PURE__ */ p.jsx(
      S0,
      {
        ...e,
        ref: s,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: ke(e.onCloseAutoFocus, (c) => {
          var l;
          c.preventDefault(), (l = n.triggerRef.current) == null || l.focus();
        }),
        onPointerDownOutside: ke(e.onPointerDownOutside, (c) => {
          const l = c.detail.originalEvent, u = l.button === 0 && l.ctrlKey === !0;
          (l.button === 2 || u) && c.preventDefault();
        }),
        onFocusOutside: ke(
          e.onFocusOutside,
          (c) => c.preventDefault()
        )
      }
    );
  }
), zj = w.forwardRef(
  (e, t) => {
    const n = Pn(di, e.__scopeDialog), o = w.useRef(!1), s = w.useRef(!1);
    return /* @__PURE__ */ p.jsx(
      S0,
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
          var d, f;
          (d = e.onInteractOutside) == null || d.call(e, c), c.defaultPrevented || (o.current = !0, c.detail.originalEvent.type === "pointerdown" && (s.current = !0));
          const l = c.target;
          ((f = n.triggerRef.current) == null ? void 0 : f.contains(l)) && c.preventDefault(), c.detail.originalEvent.type === "focusin" && s.current && c.preventDefault();
        }
      }
    );
  }
), S0 = w.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: o, onOpenAutoFocus: s, onCloseAutoFocus: c, ...l } = e, u = Pn(di, n), d = w.useRef(null), f = nt(t, d);
    return dg(), /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
      /* @__PURE__ */ p.jsx(
        bu,
        {
          asChild: !0,
          loop: !0,
          trapped: o,
          onMountAutoFocus: s,
          onUnmountAutoFocus: c,
          children: /* @__PURE__ */ p.jsx(
            _a,
            {
              role: "dialog",
              id: u.contentId,
              "aria-describedby": u.descriptionId,
              "aria-labelledby": u.titleId,
              "data-state": xd(u.open),
              ...l,
              ref: f,
              onDismiss: () => u.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
        /* @__PURE__ */ p.jsx(Gj, { titleId: u.titleId }),
        /* @__PURE__ */ p.jsx(Yj, { contentRef: d, descriptionId: u.descriptionId })
      ] })
    ] });
  }
), yd = "DialogTitle", C0 = w.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...o } = e, s = Pn(yd, n);
    return /* @__PURE__ */ p.jsx(Ve.h2, { id: s.titleId, ...o, ref: t });
  }
);
C0.displayName = yd;
var T0 = "DialogDescription", P0 = w.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...o } = e, s = Pn(T0, n);
    return /* @__PURE__ */ p.jsx(Ve.p, { id: s.descriptionId, ...o, ref: t });
  }
);
P0.displayName = T0;
var _0 = "DialogClose", A0 = w.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...o } = e, s = Pn(_0, n);
    return /* @__PURE__ */ p.jsx(
      Ve.button,
      {
        type: "button",
        ...o,
        ref: t,
        onClick: ke(e.onClick, () => s.onOpenChange(!1))
      }
    );
  }
);
A0.displayName = _0;
function xd(e) {
  return e ? "open" : "closed";
}
var E0 = "DialogTitleWarning", [ED, R0] = U_(E0, {
  contentName: di,
  titleName: yd,
  docsSlug: "dialog"
}), Gj = ({ titleId: e }) => {
  const t = R0(E0), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return w.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, Kj = "DialogDescriptionWarning", Yj = ({ contentRef: e, descriptionId: t }) => {
  const o = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${R0(Kj).contentName}}.`;
  return w.useEffect(() => {
    var c;
    const s = (c = e.current) == null ? void 0 : c.getAttribute("aria-describedby");
    t && s && (document.getElementById(t) || console.warn(o));
  }, [o, e, t]), null;
}, qj = g0, Xj = x0, N0 = b0, M0 = w0, O0 = C0, j0 = P0, Zj = A0;
const bd = qj, Jj = Xj, D0 = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.jsx(
  N0,
  {
    ref: n,
    className: Ue(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
D0.displayName = N0.displayName;
const Ka = w.forwardRef(({ className: e, children: t, ...n }, o) => /* @__PURE__ */ p.jsxs(Jj, { children: [
  /* @__PURE__ */ p.jsx(D0, {}),
  /* @__PURE__ */ p.jsxs(
    M0,
    {
      ref: o,
      className: Ue(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        e
      ),
      ...n,
      children: [
        t,
        /* @__PURE__ */ p.jsxs(Zj, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ p.jsx(rg, { className: "h-4 w-4" }),
          /* @__PURE__ */ p.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
Ka.displayName = M0.displayName;
const Ya = ({
  className: e,
  ...t
}) => /* @__PURE__ */ p.jsx(
  "div",
  {
    className: Ue(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      e
    ),
    ...t
  }
);
Ya.displayName = "DialogHeader";
const qa = ({
  className: e,
  ...t
}) => /* @__PURE__ */ p.jsx(
  "div",
  {
    className: Ue(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
qa.displayName = "DialogFooter";
const Xa = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.jsx(
  O0,
  {
    ref: n,
    className: Ue(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
Xa.displayName = O0.displayName;
const wd = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.jsx(
  j0,
  {
    ref: n,
    className: Ue("text-sm text-muted-foreground", e),
    ...t
  }
));
wd.displayName = j0.displayName;
var Qj = "Separator", Um = "horizontal", eD = ["horizontal", "vertical"], I0 = w.forwardRef((e, t) => {
  const { decorative: n, orientation: o = Um, ...s } = e, c = tD(o) ? o : Um, u = n ? { role: "none" } : { "aria-orientation": c === "vertical" ? c : void 0, role: "separator" };
  return /* @__PURE__ */ p.jsx(
    Ve.div,
    {
      "data-orientation": c,
      ...u,
      ...s,
      ref: t
    }
  );
});
I0.displayName = Qj;
function tD(e) {
  return eD.includes(e);
}
var k0 = I0;
const L0 = w.forwardRef(
  ({ className: e, orientation: t = "horizontal", decorative: n = !0, ...o }, s) => /* @__PURE__ */ p.jsx(
    k0,
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
L0.displayName = k0.displayName;
const RD = ({ deal: e, onNavigate: t }) => {
  const [n, o] = tn([]), [s, c] = tn(!1), l = (f) => {
    o((m) => m.includes(f) ? m.filter((v) => v !== f) : [...m, f]);
  }, u = (f) => f.replace(/([A-Z])/g, " $1").replace(/^./, (m) => m.toUpperCase()).trim(), d = (f) => f === "implications" ? xP : o_(f);
  return /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    /* @__PURE__ */ p.jsxs(Vr, { className: "shadow-lg w-full max-w-3xl mx-auto my-8", children: [
      /* @__PURE__ */ p.jsxs(Fr, { className: "flex flex-row items-center justify-between", children: [
        /* @__PURE__ */ p.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ p.jsx(Br, { className: "", children: "Deal Qualification" }),
          /* @__PURE__ */ p.jsx("p", { className: "text-sm text-muted-foreground", children: "Assess this deal's qualification strength according to MEDDPICC" })
        ] }),
        /* @__PURE__ */ p.jsx(Pr, { children: /* @__PURE__ */ p.jsxs(_r, { children: [
          /* @__PURE__ */ p.jsx(Ar, { asChild: !0, children: /* @__PURE__ */ p.jsx(
            Xe,
            {
              variant: "outline",
              size: "sm",
              onClick: () => t == null ? void 0 : t("/deals/qualification-framework"),
              children: /* @__PURE__ */ p.jsx(ep, { className: "w-3 h-3" })
            }
          ) }),
          /* @__PURE__ */ p.jsx(Qn, { children: /* @__PURE__ */ p.jsx("p", { children: "Configure qualification framework" }) })
        ] }) })
      ] }),
      /* @__PURE__ */ p.jsx(fi, { children: /* @__PURE__ */ p.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ p.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
          /* @__PURE__ */ p.jsx("span", { className: "text-sm font-medium text-muted-foreground", children: "Criteria" }),
          /* @__PURE__ */ p.jsx("div", { className: "flex items-center space-x-1", children: /* @__PURE__ */ p.jsx(Pr, { children: /* @__PURE__ */ p.jsxs(_r, { children: [
            /* @__PURE__ */ p.jsx(Ar, { asChild: !0, children: /* @__PURE__ */ p.jsxs("div", { className: "flex items-center space-x-1 text-sm text-muted-foreground cursor-help", children: [
              /* @__PURE__ */ p.jsx("span", { className: "text-sm font-medium", children: "Score" }),
              /* @__PURE__ */ p.jsx(jo, { className: "w-3 h-3" })
            ] }) }),
            /* @__PURE__ */ p.jsx(Qn, { className: "w-80", children: /* @__PURE__ */ p.jsx("div", { className: "space-y-4", children: /* @__PURE__ */ p.jsxs("p", { className: "text-sm", children: [
              "This score (0-5) indicates your progress in addressing key sales qualification criteria. You can expand each category to view details.",
              " ",
              /* @__PURE__ */ p.jsx(
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
        Object.entries(e.meddpicc).map(([f, m], v) => {
          const x = d(f), g = n.includes(f), T = e.dealBreakers[f];
          return /* @__PURE__ */ p.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ p.jsxs("div", { className: "flex items-center space-x-4", children: [
              /* @__PURE__ */ p.jsxs("div", { className: "w-48 flex items-center space-x-2", children: [
                x && /* @__PURE__ */ p.jsx(x, { className: "w-5 h-5" }),
                /* @__PURE__ */ p.jsx("span", { children: u(f) }),
                T && /* @__PURE__ */ p.jsx(Bc, { className: "w-4 h-4 text-red-500" })
              ] }),
              /* @__PURE__ */ p.jsxs("div", { className: "flex-1 flex items-center space-x-4", children: [
                /* @__PURE__ */ p.jsx("div", { className: "flex-1", children: /* @__PURE__ */ p.jsx(Vu, { value: m * 100 / 5 }) }),
                /* @__PURE__ */ p.jsx("div", { className: "w-12 text-center", children: /* @__PURE__ */ p.jsxs("span", { className: "text-sm font-medium", children: [
                  m,
                  "/5"
                ] }) }),
                /* @__PURE__ */ p.jsx(
                  Xe,
                  {
                    variant: "ghost",
                    size: "sm",
                    className: "p-0",
                    onClick: () => l(f),
                    children: /* @__PURE__ */ p.jsx(
                      Ta,
                      {
                        className: `h-4 w-4 transform transition-transform duration-200 ${g ? "rotate-180" : ""}`
                      }
                    )
                  }
                )
              ] })
            ] }),
            g && /* @__PURE__ */ p.jsxs("div", { className: "ml-12 pl-4 border-l border-slate-200", children: [
              T && /* @__PURE__ */ p.jsxs("div", { className: "inline-flex items-center space-x-2 py-2 text-red-600 bg-red-50 px-3 rounded-md mb-2", children: [
                /* @__PURE__ */ p.jsx(Bc, { className: "w-4 h-4 shrink-0" }),
                /* @__PURE__ */ p.jsx("span", { className: "text-sm font-medium", children: T })
              ] }),
              /* @__PURE__ */ p.jsx("div", { className: "space-y-2", children: [...e.qualificationDetails[f]].sort(
                (S, P) => P.completed === S.completed ? 0 : P.completed ? 1 : -1
              ).map((S, P) => /* @__PURE__ */ p.jsxs("div", { className: "flex items-center space-x-2", children: [
                S.completed ? /* @__PURE__ */ p.jsx(Uo, { className: "h-4 w-4 text-green-500" }) : /* @__PURE__ */ p.jsx(rg, { className: "h-4 w-4 text-muted-foreground" }),
                /* @__PURE__ */ p.jsx(
                  "span",
                  {
                    className: S.completed ? "text-slate-600" : "text-muted-foreground",
                    children: S.text
                  }
                )
              ] }, P)) })
            ] })
          ] }, v);
        })
      ] }) })
    ] }),
    /* @__PURE__ */ p.jsx(bd, { open: s, onOpenChange: c, children: /* @__PURE__ */ p.jsxs(Ka, { className: "sm:max-w-md", children: [
      /* @__PURE__ */ p.jsx(Ya, { children: /* @__PURE__ */ p.jsx(Xa, { children: "Qualification Score" }) }),
      /* @__PURE__ */ p.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ p.jsxs("div", { children: [
          /* @__PURE__ */ p.jsx("p", { className: "font-medium mb-2", children: "What the score means" }),
          /* @__PURE__ */ p.jsx("p", { className: "text-sm text-muted-foreground", children: "The score (0-5) reflects your progress in qualifying an opportunity across key criteria of the framework you have selected." })
        ] }),
        /* @__PURE__ */ p.jsxs("div", { children: [
          /* @__PURE__ */ p.jsx("p", { className: "font-medium mb-2", children: "Score interpretation" }),
          /* @__PURE__ */ p.jsxs("ul", { className: "text-sm text-muted-foreground space-y-1", children: [
            /* @__PURE__ */ p.jsxs("li", { children: [
              /* @__PURE__ */ p.jsx("strong", { children: "0" }),
              " = No progress"
            ] }),
            /* @__PURE__ */ p.jsxs("li", { children: [
              /* @__PURE__ */ p.jsx("strong", { children: "1-2" }),
              " = Limited progress"
            ] }),
            /* @__PURE__ */ p.jsxs("li", { children: [
              /* @__PURE__ */ p.jsx("strong", { children: "3" }),
              " = Moderate progress"
            ] }),
            /* @__PURE__ */ p.jsxs("li", { children: [
              /* @__PURE__ */ p.jsx("strong", { children: "4" }),
              " = Strong progress"
            ] }),
            /* @__PURE__ */ p.jsxs("li", { children: [
              /* @__PURE__ */ p.jsx("strong", { children: "5" }),
              " = Full progress"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ p.jsxs("div", { children: [
          /* @__PURE__ */ p.jsx("p", { className: "font-medium mb-2", children: "How the score is calculated" }),
          /* @__PURE__ */ p.jsx("p", { className: "text-sm text-muted-foreground", children: "Each component's score depends on how many weighted conditions are met. Meeting more conditions increases the score." })
        ] }),
        /* @__PURE__ */ p.jsxs("div", { children: [
          /* @__PURE__ */ p.jsx("p", { className: "font-medium mb-2", children: "What are deal breakers?" }),
          /* @__PURE__ */ p.jsx("p", { className: "text-sm text-muted-foreground", children: "Any flagged deal breakers are critical issues that may block the deal and need immediate attention." })
        ] }),
        /* @__PURE__ */ p.jsx(L0, {}),
        /* @__PURE__ */ p.jsxs("div", { children: [
          /* @__PURE__ */ p.jsx("p", { className: "font-medium mb-2", children: "Adjust the framework" }),
          /* @__PURE__ */ p.jsxs("p", { className: "text-sm text-muted-foreground", children: [
            "You can adjust the qualification questions and weights here",
            " ",
            /* @__PURE__ */ p.jsx(
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
      /* @__PURE__ */ p.jsxs(qa, { children: [
        /* @__PURE__ */ p.jsxs(Xe, { onClick: () => t == null ? void 0 : t("/deals/qualification-framework"), variant: "outline", children: [
          "Configure framework",
          /* @__PURE__ */ p.jsx(ep, { className: "w-3 h-3 ml-1" })
        ] }),
        /* @__PURE__ */ p.jsx(Xe, { onClick: () => c(!1), children: "Close" })
      ] })
    ] }) })
  ] });
}, oi = w.forwardRef(
  ({ className: e, type: t, ...n }, o) => /* @__PURE__ */ p.jsx(
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
oi.displayName = "Input";
var Sd = "Checkbox", [nD, ND] = Pa(Sd), [rD, iD] = nD(Sd), V0 = w.forwardRef(
  (e, t) => {
    const {
      __scopeCheckbox: n,
      name: o,
      checked: s,
      defaultChecked: c,
      required: l,
      disabled: u,
      value: d = "on",
      onCheckedChange: f,
      form: m,
      ...v
    } = e, [x, g] = w.useState(null), T = nt(t, (N) => g(N)), S = w.useRef(!1), P = x ? m || !!x.closest("form") : !0, [_ = !1, E] = ko({
      prop: s,
      defaultProp: c,
      onChange: f
    }), O = w.useRef(_);
    return w.useEffect(() => {
      const N = x == null ? void 0 : x.form;
      if (N) {
        const D = () => E(O.current);
        return N.addEventListener("reset", D), () => N.removeEventListener("reset", D);
      }
    }, [x, E]), /* @__PURE__ */ p.jsxs(rD, { scope: n, state: _, disabled: u, children: [
      /* @__PURE__ */ p.jsx(
        Ve.button,
        {
          type: "button",
          role: "checkbox",
          "aria-checked": Er(_) ? "mixed" : _,
          "aria-required": l,
          "data-state": W0(_),
          "data-disabled": u ? "" : void 0,
          disabled: u,
          value: d,
          ...v,
          ref: T,
          onKeyDown: ke(e.onKeyDown, (N) => {
            N.key === "Enter" && N.preventDefault();
          }),
          onClick: ke(e.onClick, (N) => {
            E((D) => Er(D) ? !0 : !D), P && (S.current = N.isPropagationStopped(), S.current || N.stopPropagation());
          })
        }
      ),
      P && /* @__PURE__ */ p.jsx(
        oD,
        {
          control: x,
          bubbles: !S.current,
          name: o,
          value: d,
          checked: _,
          required: l,
          disabled: u,
          form: m,
          style: { transform: "translateX(-100%)" },
          defaultChecked: Er(c) ? !1 : c
        }
      )
    ] });
  }
);
V0.displayName = Sd;
var F0 = "CheckboxIndicator", B0 = w.forwardRef(
  (e, t) => {
    const { __scopeCheckbox: n, forceMount: o, ...s } = e, c = iD(F0, n);
    return /* @__PURE__ */ p.jsx(Qi, { present: o || Er(c.state) || c.state === !0, children: /* @__PURE__ */ p.jsx(
      Ve.span,
      {
        "data-state": W0(c.state),
        "data-disabled": c.disabled ? "" : void 0,
        ...s,
        ref: t,
        style: { pointerEvents: "none", ...e.style }
      }
    ) });
  }
);
B0.displayName = F0;
var oD = (e) => {
  const { control: t, checked: n, bubbles: o = !0, defaultChecked: s, ...c } = e, l = w.useRef(null), u = Lg(n), d = Cg(t);
  w.useEffect(() => {
    const m = l.current, v = window.HTMLInputElement.prototype, g = Object.getOwnPropertyDescriptor(v, "checked").set;
    if (u !== n && g) {
      const T = new Event("click", { bubbles: o });
      m.indeterminate = Er(n), g.call(m, Er(n) ? !1 : n), m.dispatchEvent(T);
    }
  }, [u, n, o]);
  const f = w.useRef(Er(n) ? !1 : n);
  return /* @__PURE__ */ p.jsx(
    "input",
    {
      type: "checkbox",
      "aria-hidden": !0,
      defaultChecked: s ?? f.current,
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
function Er(e) {
  return e === "indeterminate";
}
function W0(e) {
  return Er(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
var $0 = V0, sD = B0;
const U0 = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.jsx(
  $0,
  {
    ref: n,
    className: Ue(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      e
    ),
    ...t,
    children: /* @__PURE__ */ p.jsx(
      sD,
      {
        className: Ue("flex items-center justify-center text-current"),
        children: /* @__PURE__ */ p.jsx(Uo, { className: "h-4 w-4" })
      }
    )
  }
));
U0.displayName = $0.displayName;
var aD = "Label", H0 = w.forwardRef((e, t) => /* @__PURE__ */ p.jsx(
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
H0.displayName = aD;
var z0 = H0;
const lD = yu(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), Jn = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.jsx(
  z0,
  {
    ref: n,
    className: Ue(lD(), e),
    ...t
  }
));
Jn.displayName = z0.displayName;
const Cd = w.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.jsx(
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
Cd.displayName = "Textarea";
const qs = {
  high: 0,
  medium: 1,
  low: 2
};
function MD({ deal: e }) {
  const [t, n] = tn(
    () => [...e.recommendedActions].sort((N, D) => qs[N.priority] - qs[D.priority])
  ), [o, s] = tn(null), [c, l] = tn(""), [u, d] = tn("medium"), [f, m] = tn({
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
  }, x = (N) => [...N].sort((D, W) => qs[D.priority] - qs[W.priority]), g = (N) => {
    s(N);
  }, T = (N, D) => {
    const W = [...t];
    W[N] = { ...W[N], text: D }, n(x(W)), s(null);
  }, S = (N) => {
    const D = t.filter((W, $) => $ !== N);
    n(x(D));
  }, P = () => {
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
  }, _ = (N) => {
    const D = t[N];
    m({
      isOpen: !0,
      taskTitle: D.text,
      notes: "",
      taskType: "to-do",
      dueDate: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
      actionIndex: N
    });
  }, E = () => {
    if (f.actionIndex !== null) {
      const N = [...t];
      N[f.actionIndex] = {
        ...N[f.actionIndex],
        addedToHubspot: !0
      }, n(x(N)), console.log("Creating HubSpot task:", {
        title: f.taskTitle,
        notes: f.notes,
        type: f.taskType,
        dueDate: f.dueDate
      }), m((D) => ({ ...D, isOpen: !1 }));
    }
  }, O = () => {
    const N = t.map((D) => ({
      ...D,
      addedToHubspot: !0
    }));
    n(x(N));
  };
  return /* @__PURE__ */ p.jsxs(Vr, { className: "shadow-lg w-full max-w-3xl mx-auto my-8", children: [
    /* @__PURE__ */ p.jsxs(Fr, { children: [
      /* @__PURE__ */ p.jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ p.jsx(Br, { children: "Action Plan" }) }),
      /* @__PURE__ */ p.jsx("p", { className: "text-sm text-muted-foreground", children: "Recommended actions to drive the deal forward" })
    ] }),
    /* @__PURE__ */ p.jsxs(fi, { children: [
      /* @__PURE__ */ p.jsx("ul", { className: "space-y-3", children: t.map((N, D) => /* @__PURE__ */ p.jsxs(
        Ga.li,
        {
          initial: { opacity: 0, y: -10 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: D * 0.1 },
          className: "group flex items-center space-x-3 p-2 rounded-lg hover:bg-slate-50",
          children: [
            /* @__PURE__ */ p.jsx(
              U0,
              {
                id: `action-${D}`,
                checked: N.completed,
                onCheckedChange: (W) => {
                  const $ = [...t];
                  $[D] = {
                    ...N,
                    completed: W
                  }, n(x($));
                }
              }
            ),
            o === D ? /* @__PURE__ */ p.jsxs("div", { className: "flex-1 flex items-center space-x-2", children: [
              /* @__PURE__ */ p.jsx(
                oi,
                {
                  value: N.text,
                  onChange: (W) => T(D, W.target.value),
                  className: "flex-1"
                }
              ),
              /* @__PURE__ */ p.jsx(Xe, { onClick: () => s(null), size: "sm", children: "Save" })
            ] }) : /* @__PURE__ */ p.jsxs("div", { className: "flex-1 flex items-center justify-between", children: [
              /* @__PURE__ */ p.jsx("div", { className: "flex items-center space-x-3", children: /* @__PURE__ */ p.jsx(
                "label",
                {
                  htmlFor: `action-${D}`,
                  className: `text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${N.completed ? "line-through text-slate-400" : ""}`,
                  children: N.text
                }
              ) }),
              /* @__PURE__ */ p.jsxs("div", { className: "flex items-center space-x-2", children: [
                /* @__PURE__ */ p.jsxs(
                  "div",
                  {
                    className: N.addedToHubspot ? "flex items-center opacity-100" : "flex items-center opacity-0 group-hover:opacity-100 transition-opacity",
                    children: [
                      /* @__PURE__ */ p.jsx(
                        Xe,
                        {
                          variant: "ghost",
                          size: "sm",
                          onClick: () => g(D),
                          className: N.addedToHubspot ? "hidden" : "",
                          children: /* @__PURE__ */ p.jsx(bP, { className: "w-4 h-4" })
                        }
                      ),
                      /* @__PURE__ */ p.jsx(
                        Xe,
                        {
                          variant: "ghost",
                          size: "sm",
                          onClick: () => S(D),
                          className: N.addedToHubspot ? "hidden" : "",
                          children: /* @__PURE__ */ p.jsx(SP, { className: "w-4 h-4" })
                        }
                      ),
                      /* @__PURE__ */ p.jsx(
                        Xe,
                        {
                          variant: "ghost",
                          size: "sm",
                          onClick: () => _(D),
                          disabled: N.addedToHubspot,
                          children: N.addedToHubspot ? /* @__PURE__ */ p.jsxs("span", { className: "flex items-center space-x-1", children: [
                            /* @__PURE__ */ p.jsx(Uo, { className: "w-4 h-4 text-green-500" }),
                            /* @__PURE__ */ p.jsx("span", { className: "text-xs text-green-500", children: "Added to HubSpot" })
                          ] }) : "Add HubSpot Task"
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ p.jsx(Iu, { className: `${v(N.priority)} capitalize`, children: N.priority })
              ] })
            ] })
          ]
        },
        D
      )) }),
      /* @__PURE__ */ p.jsxs("div", { className: "mt-4 flex items-center space-x-2", children: [
        /* @__PURE__ */ p.jsx(
          oi,
          {
            value: c,
            onChange: (N) => l(N.target.value),
            placeholder: "Add a new action...",
            className: "flex-1"
          }
        ),
        /* @__PURE__ */ p.jsxs(
          Qc,
          {
            value: u,
            onValueChange: (N) => d(N),
            children: [
              /* @__PURE__ */ p.jsx(da, { className: "w-[130px]", children: /* @__PURE__ */ p.jsx(eu, { placeholder: "Select priority" }) }),
              /* @__PURE__ */ p.jsxs(fa, { children: [
                /* @__PURE__ */ p.jsx(Cr, { value: "high", children: "High" }),
                /* @__PURE__ */ p.jsx(Cr, { value: "medium", children: "Medium" }),
                /* @__PURE__ */ p.jsx(Cr, { value: "low", children: "Low" })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ p.jsxs(Xe, { onClick: P, children: [
          /* @__PURE__ */ p.jsx(ng, { className: "w-4 h-4 mr-2" }),
          "Add"
        ] })
      ] }),
      /* @__PURE__ */ p.jsx("div", { className: "mt-4 flex justify-end", children: /* @__PURE__ */ p.jsx(Xe, { variant: "secondary", onClick: O, children: "Add All as HubSpot Tasks" }) }),
      /* @__PURE__ */ p.jsx(
        bd,
        {
          open: f.isOpen,
          onOpenChange: (N) => m((D) => ({ ...D, isOpen: N })),
          children: /* @__PURE__ */ p.jsxs(Ka, { children: [
            /* @__PURE__ */ p.jsxs(Ya, { children: [
              /* @__PURE__ */ p.jsx(Xa, { children: "Add Task to HubSpot" }),
              /* @__PURE__ */ p.jsx(wd, { children: "Configure the task details before adding it to HubSpot" })
            ] }),
            /* @__PURE__ */ p.jsxs("div", { className: "grid gap-4 py-4", children: [
              /* @__PURE__ */ p.jsxs("div", { className: "grid gap-2", children: [
                /* @__PURE__ */ p.jsx(Jn, { htmlFor: "taskTitle", children: "Task Title" }),
                /* @__PURE__ */ p.jsx(
                  oi,
                  {
                    id: "taskTitle",
                    value: f.taskTitle,
                    onChange: (N) => m((D) => ({ ...D, taskTitle: N.target.value }))
                  }
                )
              ] }),
              /* @__PURE__ */ p.jsxs("div", { className: "grid gap-2", children: [
                /* @__PURE__ */ p.jsx(Jn, { htmlFor: "taskType", children: "Task Type" }),
                /* @__PURE__ */ p.jsxs(
                  Qc,
                  {
                    value: f.taskType,
                    onValueChange: (N) => m((D) => ({ ...D, taskType: N })),
                    children: [
                      /* @__PURE__ */ p.jsx(da, { children: /* @__PURE__ */ p.jsx(eu, { placeholder: "Select task type" }) }),
                      /* @__PURE__ */ p.jsxs(fa, { children: [
                        /* @__PURE__ */ p.jsx(Cr, { value: "call", children: "Call" }),
                        /* @__PURE__ */ p.jsx(Cr, { value: "email", children: "Email" }),
                        /* @__PURE__ */ p.jsx(Cr, { value: "to-do", children: "To-Do" })
                      ] })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ p.jsxs("div", { className: "grid gap-2", children: [
                /* @__PURE__ */ p.jsx(Jn, { htmlFor: "dueDate", children: "Due Date" }),
                /* @__PURE__ */ p.jsxs("div", { className: "flex items-center space-x-2", children: [
                  /* @__PURE__ */ p.jsx(
                    oi,
                    {
                      id: "dueDate",
                      type: "date",
                      value: f.dueDate,
                      onChange: (N) => m((D) => ({ ...D, dueDate: N.target.value }))
                    }
                  ),
                  /* @__PURE__ */ p.jsx(
                    Xe,
                    {
                      variant: "outline",
                      size: "icon",
                      onClick: () => m((N) => ({
                        ...N,
                        dueDate: (/* @__PURE__ */ new Date()).toISOString().split("T")[0]
                      })),
                      children: /* @__PURE__ */ p.jsx(pP, { className: "h-4 w-4" })
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ p.jsxs("div", { className: "grid gap-2", children: [
                /* @__PURE__ */ p.jsx(Jn, { htmlFor: "notes", children: "Notes" }),
                /* @__PURE__ */ p.jsx(
                  Cd,
                  {
                    id: "notes",
                    value: f.notes,
                    onChange: (N) => m((D) => ({ ...D, notes: N.target.value })),
                    placeholder: "Add any additional notes..."
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ p.jsxs(qa, { children: [
              /* @__PURE__ */ p.jsx(
                Xe,
                {
                  variant: "outline",
                  onClick: () => m((N) => ({ ...N, isOpen: !1 })),
                  children: "Cancel"
                }
              ),
              /* @__PURE__ */ p.jsx(Xe, { onClick: E, children: "Add to HubSpot" })
            ] })
          ] })
        }
      )
    ] })
  ] });
}
const cD = (e) => {
  switch (e) {
    case "high":
      return "text-red-600";
    case "medium":
      return "text-yellow-600";
    case "low":
      return "text-slate-600";
    default:
      return "text-slate-600";
  }
}, uD = (e) => {
  switch (e) {
    case "call":
      return /* @__PURE__ */ p.jsx(tg, { className: "w-4 h-4 text-slate-500" });
    case "email":
      return /* @__PURE__ */ p.jsx(eg, { className: "w-4 h-4 text-slate-500" });
    case "to-do":
      return /* @__PURE__ */ p.jsx(Fc, { className: "w-4 h-4 text-slate-500" });
    default:
      return /* @__PURE__ */ p.jsx(Fc, { className: "w-4 h-4 text-slate-500" });
  }
};
function dD({ task: e, onAddToHubspot: t }) {
  return /* @__PURE__ */ p.jsxs(
    Ga.div,
    {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.3 },
      className: "flex items-start p-4 bg-slate-100 rounded-lg mb-2 hover:bg-slate-200 transition-colors",
      children: [
        /* @__PURE__ */ p.jsxs("div", { className: "flex items-start", children: [
          /* @__PURE__ */ p.jsx("div", { className: "mr-3 mt-1", children: uD(e.type) }),
          /* @__PURE__ */ p.jsxs("div", { children: [
            /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
              /* @__PURE__ */ p.jsx("span", { className: `text-xs ${cD(e.priority)}`, children: e.priority.charAt(0).toUpperCase() + e.priority.slice(1) }),
              /* @__PURE__ */ p.jsx("span", { className: "text-xs text-slate-500", children: e.category })
            ] }),
            /* @__PURE__ */ p.jsx("p", { className: "text-slate-900 leading-snug", children: e.title })
          ] })
        ] }),
        /* @__PURE__ */ p.jsx("div", { className: "ml-auto", children: /* @__PURE__ */ p.jsx(
          Xe,
          {
            variant: "ghost",
            size: "sm",
            onClick: () => t(e.id),
            disabled: e.addedToHubspot,
            className: `text-slate-600 hover:bg-slate-300 hover:text-slate-900 transition-colors ${e.addedToHubspot ? "text-green-600" : ""}`,
            children: e.addedToHubspot ? /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
              /* @__PURE__ */ p.jsx(Uo, { className: "w-4 h-4 mr-1" }),
              "Added to Hubspot"
            ] }) : "Add to Hubspot"
          }
        ) })
      ]
    }
  );
}
function fD({
  dialog: e,
  setDialog: t,
  onSubmit: n
}) {
  return /* @__PURE__ */ p.jsx(bd, { open: e.isOpen, onOpenChange: (o) => t({ ...e, isOpen: o }), children: /* @__PURE__ */ p.jsxs(Ka, { className: "sm:max-w-[425px]", children: [
    /* @__PURE__ */ p.jsxs(Ya, { children: [
      /* @__PURE__ */ p.jsx(Xa, { children: "Add Task to HubSpot" }),
      /* @__PURE__ */ p.jsx(wd, { children: "Configure the task details before adding it to HubSpot" })
    ] }),
    /* @__PURE__ */ p.jsxs("div", { className: "grid gap-4 py-4", children: [
      /* @__PURE__ */ p.jsxs("div", { className: "grid gap-2", children: [
        /* @__PURE__ */ p.jsx(Jn, { htmlFor: "taskTitle", children: "Task Title" }),
        /* @__PURE__ */ p.jsx(
          oi,
          {
            id: "taskTitle",
            value: e.taskTitle,
            onChange: (o) => t({ ...e, taskTitle: o.target.value })
          }
        )
      ] }),
      /* @__PURE__ */ p.jsxs("div", { className: "grid gap-2", children: [
        /* @__PURE__ */ p.jsx(Jn, { htmlFor: "taskType", children: "Task Type" }),
        /* @__PURE__ */ p.jsxs("div", { className: "grid grid-cols-3 gap-2", children: [
          /* @__PURE__ */ p.jsxs(
            Xe,
            {
              variant: e.taskType === "call" ? "default" : "outline",
              onClick: () => t({ ...e, taskType: "call" }),
              className: "w-full",
              children: [
                /* @__PURE__ */ p.jsx(tg, { className: "w-4 h-4 mr-2" }),
                "Call"
              ]
            }
          ),
          /* @__PURE__ */ p.jsxs(
            Xe,
            {
              variant: e.taskType === "email" ? "default" : "outline",
              onClick: () => t({ ...e, taskType: "email" }),
              className: "w-full",
              children: [
                /* @__PURE__ */ p.jsx(eg, { className: "w-4 h-4 mr-2" }),
                "Email"
              ]
            }
          ),
          /* @__PURE__ */ p.jsxs(
            Xe,
            {
              variant: e.taskType === "to-do" ? "default" : "outline",
              onClick: () => t({ ...e, taskType: "to-do" }),
              className: "w-full",
              children: [
                /* @__PURE__ */ p.jsx(Fc, { className: "w-4 h-4 mr-2" }),
                "To-Do"
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ p.jsxs("div", { className: "grid gap-2", children: [
        /* @__PURE__ */ p.jsx(Jn, { htmlFor: "dueDate", children: "Due Date" }),
        /* @__PURE__ */ p.jsx(
          oi,
          {
            id: "dueDate",
            type: "date",
            value: e.dueDate,
            onChange: (o) => t({ ...e, dueDate: o.target.value })
          }
        )
      ] }),
      /* @__PURE__ */ p.jsxs("div", { className: "grid gap-2", children: [
        /* @__PURE__ */ p.jsx(Jn, { htmlFor: "notes", children: "Notes" }),
        /* @__PURE__ */ p.jsx(
          Cd,
          {
            id: "notes",
            value: e.notes,
            onChange: (o) => t({ ...e, notes: o.target.value }),
            placeholder: "Add any additional notes..."
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ p.jsxs(qa, { className: "sm:justify-between", children: [
      /* @__PURE__ */ p.jsx(Xe, { variant: "outline", onClick: () => t({ ...e, isOpen: !1 }), children: "Cancel" }),
      /* @__PURE__ */ p.jsx(Xe, { onClick: n, children: "Add to HubSpot" })
    ] })
  ] }) });
}
function OD({ deal: e, onHubspotTaskAdd: t }) {
  const [n, o] = tn(e.recommendedActions), [s, c] = tn({
    dealId: e.dealId,
    taskId: "",
    taskTitle: "",
    taskType: "to-do",
    dueDate: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
    notes: "",
    isOpen: !1
  });
  tn(!1);
  const l = (f) => {
    const m = n.find((v) => v.id === f);
    m && c({
      dealId: e.dealId,
      taskId: f,
      taskTitle: m.title,
      taskType: m.type,
      dueDate: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
      notes: "",
      isOpen: !0
    });
  }, u = () => {
    s.taskId && (o(
      (f) => f.map((m) => m.id === s.taskId ? { ...m, addedToHubspot: !0 } : m)
    ), t == null || t({ ...s, isOpen: !1 }), c((f) => ({ ...f, isOpen: !1 })));
  }, d = () => {
    c({
      dealId: e.dealId,
      taskId: "",
      taskTitle: "",
      taskType: "to-do",
      dueDate: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
      notes: "",
      isOpen: !1
    });
  };
  return /* @__PURE__ */ p.jsxs(Vr, { className: "shadow-lg w-full max-w-3xl mx-auto my-4 bg-slate-50", children: [
    /* @__PURE__ */ p.jsxs(Fr, { children: [
      /* @__PURE__ */ p.jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ p.jsx(Br, { children: "Action Plan" }) }),
      /* @__PURE__ */ p.jsx("p", { className: "text-sm text-muted-foreground", children: "Recommended actions to drive the deal forward" })
    ] }),
    /* @__PURE__ */ p.jsxs(
      Ga.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.5 },
        className: "p-6",
        children: [
          n.map((f) => /* @__PURE__ */ p.jsx(dD, { task: f, onAddToHubspot: l }, f.id)),
          /* @__PURE__ */ p.jsxs(
            Xe,
            {
              variant: "ghost",
              onClick: d,
              className: "mt-2 text-slate-500 hover:text-slate-900",
              size: "sm",
              children: [
                /* @__PURE__ */ p.jsx(ng, { className: "w-4 h-4 mr-2" }),
                "Add task"
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ p.jsx(fD, { dialog: s, setDialog: c, onSubmit: u })
  ] });
}
export {
  OD as ActionPlan,
  mD as Counter,
  MD as DealActions,
  bD as DealHeader,
  SD as DealProgress,
  RD as DealQualification,
  _D as DealRisk,
  CD as DealStakeholders,
  gD as Toastie2
};
//# sourceMappingURL=index.js.map
