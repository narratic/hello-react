import * as S from "react";
import z, { forwardRef as ma, createElement as Zs, useState as Sr, useEffect as Lo, useLayoutEffect as Om, createContext as Ui, useContext as zt, useId as LT, useCallback as Dm, Component as kT, useRef as Hs, useInsertionEffect as VT, useMemo as ko, Fragment as Im } from "react";
import * as ga from "react-dom";
import jm from "react-dom";
var mo = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function FT(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Tc = { exports: {} }, go = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kh;
function BT() {
  if (kh)
    return go;
  kh = 1;
  var e = z, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, s = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, c = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(u, f, h) {
    var p, v = {}, x = null, y = null;
    h !== void 0 && (x = "" + h), f.key !== void 0 && (x = "" + f.key), f.ref !== void 0 && (y = f.ref);
    for (p in f)
      o.call(f, p) && !c.hasOwnProperty(p) && (v[p] = f[p]);
    if (u && u.defaultProps)
      for (p in f = u.defaultProps, f)
        v[p] === void 0 && (v[p] = f[p]);
    return { $$typeof: t, type: u, key: x, ref: y, props: v, _owner: s.current };
  }
  return go.Fragment = r, go.jsx = l, go.jsxs = l, go;
}
var vo = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vh;
function WT() {
  return Vh || (Vh = 1, process.env.NODE_ENV !== "production" && function() {
    var e = z, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), u = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), v = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), T = Symbol.iterator, C = "@@iterator";
    function _(R) {
      if (R === null || typeof R != "object")
        return null;
      var W = T && R[T] || R[C];
      return typeof W == "function" ? W : null;
    }
    var E = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function A(R) {
      {
        for (var W = arguments.length, Y = new Array(W > 1 ? W - 1 : 0), fe = 1; fe < W; fe++)
          Y[fe - 1] = arguments[fe];
        M("error", R, Y);
      }
    }
    function M(R, W, Y) {
      {
        var fe = E.ReactDebugCurrentFrame, je = fe.getStackAddendum();
        je !== "" && (W += "%s", Y = Y.concat([je]));
        var Ue = Y.map(function(Me) {
          return String(Me);
        });
        Ue.unshift("Warning: " + W), Function.prototype.apply.call(console[R], console, Ue);
      }
    }
    var I = !1, L = !1, U = !1, $ = !1, H = !1, te;
    te = Symbol.for("react.module.reference");
    function re(R) {
      return !!(typeof R == "string" || typeof R == "function" || R === o || R === c || H || R === s || R === h || R === p || $ || R === y || I || L || U || typeof R == "object" && R !== null && (R.$$typeof === x || R.$$typeof === v || R.$$typeof === l || R.$$typeof === u || R.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      R.$$typeof === te || R.getModuleId !== void 0));
    }
    function de(R, W, Y) {
      var fe = R.displayName;
      if (fe)
        return fe;
      var je = W.displayName || W.name || "";
      return je !== "" ? Y + "(" + je + ")" : Y;
    }
    function J(R) {
      return R.displayName || "Context";
    }
    function se(R) {
      if (R == null)
        return null;
      if (typeof R.tag == "number" && A("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof R == "function")
        return R.displayName || R.name || null;
      if (typeof R == "string")
        return R;
      switch (R) {
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
      if (typeof R == "object")
        switch (R.$$typeof) {
          case u:
            var W = R;
            return J(W) + ".Consumer";
          case l:
            var Y = R;
            return J(Y._context) + ".Provider";
          case f:
            return de(R, R.render, "ForwardRef");
          case v:
            var fe = R.displayName || null;
            return fe !== null ? fe : se(R.type) || "Memo";
          case x: {
            var je = R, Ue = je._payload, Me = je._init;
            try {
              return se(Me(Ue));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var ne = Object.assign, Te = 0, ie, Z, q, G, pe, Ae, _e;
    function ge() {
    }
    ge.__reactDisabledLog = !0;
    function Re() {
      {
        if (Te === 0) {
          ie = console.log, Z = console.info, q = console.warn, G = console.error, pe = console.group, Ae = console.groupCollapsed, _e = console.groupEnd;
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
    function Fe() {
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
              value: Ae
            }),
            groupEnd: ne({}, R, {
              value: _e
            })
          });
        }
        Te < 0 && A("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Je = E.ReactCurrentDispatcher, X;
    function we(R, W, Y) {
      {
        if (X === void 0)
          try {
            throw Error();
          } catch (je) {
            var fe = je.stack.trim().match(/\n( *(at )?)/);
            X = fe && fe[1] || "";
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
    function Pe(R, W) {
      if (!R || Le)
        return "";
      {
        var Y = Se.get(R);
        if (Y !== void 0)
          return Y;
      }
      var fe;
      Le = !0;
      var je = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Ue;
      Ue = Je.current, Je.current = null, Re();
      try {
        if (W) {
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
              fe = Pt;
            }
            Reflect.construct(R, [], Me);
          } else {
            try {
              Me.call();
            } catch (Pt) {
              fe = Pt;
            }
            R.call(Me.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Pt) {
            fe = Pt;
          }
          R();
        }
      } catch (Pt) {
        if (Pt && fe && typeof Pt.stack == "string") {
          for (var Ee = Pt.stack.split(`
`), vt = fe.stack.split(`
`), et = Ee.length - 1, it = vt.length - 1; et >= 1 && it >= 0 && Ee[et] !== vt[it]; )
            it--;
          for (; et >= 1 && it >= 0; et--, it--)
            if (Ee[et] !== vt[it]) {
              if (et !== 1 || it !== 1)
                do
                  if (et--, it--, it < 0 || Ee[et] !== vt[it]) {
                    var yt = `
` + Ee[et].replace(" at new ", " at ");
                    return R.displayName && yt.includes("<anonymous>") && (yt = yt.replace("<anonymous>", R.displayName)), typeof R == "function" && Se.set(R, yt), yt;
                  }
                while (et >= 1 && it >= 0);
              break;
            }
        }
      } finally {
        Le = !1, Je.current = Ue, Fe(), Error.prepareStackTrace = je;
      }
      var ar = R ? R.displayName || R.name : "", on = ar ? we(ar) : "";
      return typeof R == "function" && Se.set(R, on), on;
    }
    function st(R, W, Y) {
      return Pe(R, !1);
    }
    function Ye(R) {
      var W = R.prototype;
      return !!(W && W.isReactComponent);
    }
    function dt(R, W, Y) {
      if (R == null)
        return "";
      if (typeof R == "function")
        return Pe(R, Ye(R));
      if (typeof R == "string")
        return we(R);
      switch (R) {
        case h:
          return we("Suspense");
        case p:
          return we("SuspenseList");
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case f:
            return st(R.render);
          case v:
            return dt(R.type, W, Y);
          case x: {
            var fe = R, je = fe._payload, Ue = fe._init;
            try {
              return dt(Ue(je), W, Y);
            } catch {
            }
          }
        }
      return "";
    }
    var Mt = Object.prototype.hasOwnProperty, at = {}, rn = E.ReactDebugCurrentFrame;
    function Vt(R) {
      if (R) {
        var W = R._owner, Y = dt(R.type, R._source, W ? W.type : null);
        rn.setExtraStackFrame(Y);
      } else
        rn.setExtraStackFrame(null);
    }
    function Ot(R, W, Y, fe, je) {
      {
        var Ue = Function.call.bind(Mt);
        for (var Me in R)
          if (Ue(R, Me)) {
            var Ee = void 0;
            try {
              if (typeof R[Me] != "function") {
                var vt = Error((fe || "React class") + ": " + Y + " type `" + Me + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof R[Me] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw vt.name = "Invariant Violation", vt;
              }
              Ee = R[Me](W, Me, fe, Y, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (et) {
              Ee = et;
            }
            Ee && !(Ee instanceof Error) && (Vt(je), A("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", fe || "React class", Y, Me, typeof Ee), Vt(null)), Ee instanceof Error && !(Ee.message in at) && (at[Ee.message] = !0, Vt(je), A("Failed %s type: %s", Y, Ee.message), Vt(null));
          }
      }
    }
    var Dt = Array.isArray;
    function gn(R) {
      return Dt(R);
    }
    function ht(R) {
      {
        var W = typeof Symbol == "function" && Symbol.toStringTag, Y = W && R[Symbol.toStringTag] || R.constructor.name || "Object";
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
    function ci(R) {
      if (_n(R))
        return A("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ht(R)), Pn(R);
    }
    var Tt = E.ReactCurrentOwner, En = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, An, Gt, Rn;
    Rn = {};
    function Nn(R) {
      if (Mt.call(R, "ref")) {
        var W = Object.getOwnPropertyDescriptor(R, "ref").get;
        if (W && W.isReactWarning)
          return !1;
      }
      return R.ref !== void 0;
    }
    function Lr(R) {
      if (Mt.call(R, "key")) {
        var W = Object.getOwnPropertyDescriptor(R, "key").get;
        if (W && W.isReactWarning)
          return !1;
      }
      return R.key !== void 0;
    }
    function kr(R, W) {
      if (typeof R.ref == "string" && Tt.current && W && Tt.current.stateNode !== W) {
        var Y = se(Tt.current.type);
        Rn[Y] || (A('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', se(Tt.current.type), R.ref), Rn[Y] = !0);
      }
    }
    function ir(R, W) {
      {
        var Y = function() {
          An || (An = !0, A("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", W));
        };
        Y.isReactWarning = !0, Object.defineProperty(R, "key", {
          get: Y,
          configurable: !0
        });
      }
    }
    function or(R, W) {
      {
        var Y = function() {
          Gt || (Gt = !0, A("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", W));
        };
        Y.isReactWarning = !0, Object.defineProperty(R, "ref", {
          get: Y,
          configurable: !0
        });
      }
    }
    var Vr = function(R, W, Y, fe, je, Ue, Me) {
      var Ee = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: R,
        key: W,
        ref: Y,
        props: Me,
        // Record the component responsible for creating this element.
        _owner: Ue
      };
      return Ee._store = {}, Object.defineProperty(Ee._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Ee, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: fe
      }), Object.defineProperty(Ee, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: je
      }), Object.freeze && (Object.freeze(Ee.props), Object.freeze(Ee)), Ee;
    };
    function Fr(R, W, Y, fe, je) {
      {
        var Ue, Me = {}, Ee = null, vt = null;
        Y !== void 0 && (ci(Y), Ee = "" + Y), Lr(W) && (ci(W.key), Ee = "" + W.key), Nn(W) && (vt = W.ref, kr(W, je));
        for (Ue in W)
          Mt.call(W, Ue) && !En.hasOwnProperty(Ue) && (Me[Ue] = W[Ue]);
        if (R && R.defaultProps) {
          var et = R.defaultProps;
          for (Ue in et)
            Me[Ue] === void 0 && (Me[Ue] = et[Ue]);
        }
        if (Ee || vt) {
          var it = typeof R == "function" ? R.displayName || R.name || "Unknown" : R;
          Ee && ir(Me, it), vt && or(Me, it);
        }
        return Vr(R, Ee, vt, je, fe, Tt.current, Me);
      }
    }
    var Ft = E.ReactCurrentOwner, ui = E.ReactDebugCurrentFrame;
    function oe(R) {
      if (R) {
        var W = R._owner, Y = dt(R.type, R._source, W ? W.type : null);
        ui.setExtraStackFrame(Y);
      } else
        ui.setExtraStackFrame(null);
    }
    var De;
    De = !1;
    function Be(R) {
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
    var sr = {};
    function fi(R) {
      {
        var W = _t();
        if (!W) {
          var Y = typeof R == "string" ? R : R.displayName || R.name;
          Y && (W = `

Check the top-level render call using <` + Y + ">.");
        }
        return W;
      }
    }
    function Ho(R, W) {
      {
        if (!R._store || R._store.validated || R.key != null)
          return;
        R._store.validated = !0;
        var Y = fi(W);
        if (sr[Y])
          return;
        sr[Y] = !0;
        var fe = "";
        R && R._owner && R._owner !== Ft.current && (fe = " It was passed a child from " + se(R._owner.type) + "."), oe(R), A('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', Y, fe), oe(null);
      }
    }
    function zo(R, W) {
      {
        if (typeof R != "object")
          return;
        if (gn(R))
          for (var Y = 0; Y < R.length; Y++) {
            var fe = R[Y];
            Be(fe) && Ho(fe, W);
          }
        else if (Be(R))
          R._store && (R._store.validated = !0);
        else if (R) {
          var je = _(R);
          if (typeof je == "function" && je !== R.entries)
            for (var Ue = je.call(R), Me; !(Me = Ue.next()).done; )
              Be(Me.value) && Ho(Me.value, W);
        }
      }
    }
    function Va(R) {
      {
        var W = R.type;
        if (W == null || typeof W == "string")
          return;
        var Y;
        if (typeof W == "function")
          Y = W.propTypes;
        else if (typeof W == "object" && (W.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        W.$$typeof === v))
          Y = W.propTypes;
        else
          return;
        if (Y) {
          var fe = se(W);
          Ot(Y, R.props, "prop", fe, R);
        } else if (W.PropTypes !== void 0 && !De) {
          De = !0;
          var je = se(W);
          A("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", je || "Unknown");
        }
        typeof W.getDefaultProps == "function" && !W.getDefaultProps.isReactClassApproved && A("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Zi(R) {
      {
        for (var W = Object.keys(R.props), Y = 0; Y < W.length; Y++) {
          var fe = W[Y];
          if (fe !== "children" && fe !== "key") {
            oe(R), A("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", fe), oe(null);
            break;
          }
        }
        R.ref !== null && (oe(R), A("Invalid attribute `ref` supplied to `React.Fragment`."), oe(null));
      }
    }
    var Go = {};
    function di(R, W, Y, fe, je, Ue) {
      {
        var Me = re(R);
        if (!Me) {
          var Ee = "";
          (R === void 0 || typeof R == "object" && R !== null && Object.keys(R).length === 0) && (Ee += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var vt = Bt();
          vt ? Ee += vt : Ee += _t();
          var et;
          R === null ? et = "null" : gn(R) ? et = "array" : R !== void 0 && R.$$typeof === t ? (et = "<" + (se(R.type) || "Unknown") + " />", Ee = " Did you accidentally export a JSX literal instead of a component?") : et = typeof R, A("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", et, Ee);
        }
        var it = Fr(R, W, Y, je, Ue);
        if (it == null)
          return it;
        if (Me) {
          var yt = W.children;
          if (yt !== void 0)
            if (fe)
              if (gn(yt)) {
                for (var ar = 0; ar < yt.length; ar++)
                  zo(yt[ar], R);
                Object.freeze && Object.freeze(yt);
              } else
                A("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              zo(yt, R);
        }
        if (Mt.call(W, "key")) {
          var on = se(R), Pt = Object.keys(W).filter(function(Ko) {
            return Ko !== "key";
          }), Ji = Pt.length > 0 ? "{key: someKey, " + Pt.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Go[on + Ji]) {
            var Ua = Pt.length > 0 ? "{" + Pt.join(": ..., ") + ": ...}" : "{}";
            A(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ji, on, Ua, on), Go[on + Ji] = !0;
          }
        }
        return R === o ? Zi(it) : Va(it), it;
      }
    }
    function Fa(R, W, Y) {
      return di(R, W, Y, !0);
    }
    function Ba(R, W, Y) {
      return di(R, W, Y, !1);
    }
    var Wa = Ba, $a = Fa;
    vo.Fragment = o, vo.jsx = Wa, vo.jsxs = $a;
  }()), vo;
}
process.env.NODE_ENV === "production" ? Tc.exports = BT() : Tc.exports = WT();
var m = Tc.exports, Js = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
Js.exports;
(function(e, t) {
  (function() {
    var r, o = "4.17.21", s = 200, c = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", l = "Expected a function", u = "Invalid `variable` option passed into `_.template`", f = "__lodash_hash_undefined__", h = 500, p = "__lodash_placeholder__", v = 1, x = 2, y = 4, T = 1, C = 2, _ = 1, E = 2, A = 4, M = 8, I = 16, L = 32, U = 64, $ = 128, H = 256, te = 512, re = 30, de = "...", J = 800, se = 16, ne = 1, Te = 2, ie = 3, Z = 1 / 0, q = 9007199254740991, G = 17976931348623157e292, pe = NaN, Ae = 4294967295, _e = Ae - 1, ge = Ae >>> 1, Re = [
      ["ary", $],
      ["bind", _],
      ["bindKey", E],
      ["curry", M],
      ["curryRight", I],
      ["flip", te],
      ["partial", L],
      ["partialRight", U],
      ["rearg", H]
    ], Fe = "[object Arguments]", Je = "[object Array]", X = "[object AsyncFunction]", we = "[object Boolean]", Le = "[object Date]", Se = "[object DOMException]", ve = "[object Error]", Pe = "[object Function]", st = "[object GeneratorFunction]", Ye = "[object Map]", dt = "[object Number]", Mt = "[object Null]", at = "[object Object]", rn = "[object Promise]", Vt = "[object Proxy]", Ot = "[object RegExp]", Dt = "[object Set]", gn = "[object String]", ht = "[object Symbol]", _n = "[object Undefined]", Pn = "[object WeakMap]", ci = "[object WeakSet]", Tt = "[object ArrayBuffer]", En = "[object DataView]", An = "[object Float32Array]", Gt = "[object Float64Array]", Rn = "[object Int8Array]", Nn = "[object Int16Array]", Lr = "[object Int32Array]", kr = "[object Uint8Array]", ir = "[object Uint8ClampedArray]", or = "[object Uint16Array]", Vr = "[object Uint32Array]", Fr = /\b__p \+= '';/g, Ft = /\b(__p \+=) '' \+/g, ui = /(__e\(.*?\)|\b__t\)) \+\n'';/g, oe = /&(?:amp|lt|gt|quot|#39);/g, De = /[&<>"']/g, Be = RegExp(oe.source), _t = RegExp(De.source), Bt = /<%-([\s\S]+?)%>/g, sr = /<%([\s\S]+?)%>/g, fi = /<%=([\s\S]+?)%>/g, Ho = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, zo = /^\w*$/, Va = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Zi = /[\\^$.*+?()[\]{}|]/g, Go = RegExp(Zi.source), di = /^\s+/, Fa = /\s/, Ba = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Wa = /\{\n\/\* \[wrapped with (.+)\] \*/, $a = /,? & /, R = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, W = /[()=,{}\[\]\/\s]/, Y = /\\(\\)?/g, fe = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, je = /\w*$/, Ue = /^[-+]0x[0-9a-f]+$/i, Me = /^0b[01]+$/i, Ee = /^\[object .+?Constructor\]$/, vt = /^0o[0-7]+$/i, et = /^(?:0|[1-9]\d*)$/, it = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, yt = /($^)/, ar = /['\n\r\u2028\u2029\\]/g, on = "\\ud800-\\udfff", Pt = "\\u0300-\\u036f", Ji = "\\ufe20-\\ufe2f", Ua = "\\u20d0-\\u20ff", Ko = Pt + Ji + Ua, hf = "\\u2700-\\u27bf", pf = "a-z\\xdf-\\xf6\\xf8-\\xff", O0 = "\\xac\\xb1\\xd7\\xf7", D0 = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", I0 = "\\u2000-\\u206f", j0 = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", mf = "A-Z\\xc0-\\xd6\\xd8-\\xde", gf = "\\ufe0e\\ufe0f", vf = O0 + D0 + I0 + j0, Ha = "['’]", L0 = "[" + on + "]", yf = "[" + vf + "]", Yo = "[" + Ko + "]", xf = "\\d+", k0 = "[" + hf + "]", wf = "[" + pf + "]", bf = "[^" + on + vf + xf + hf + pf + mf + "]", za = "\\ud83c[\\udffb-\\udfff]", V0 = "(?:" + Yo + "|" + za + ")", Sf = "[^" + on + "]", Ga = "(?:\\ud83c[\\udde6-\\uddff]){2}", Ka = "[\\ud800-\\udbff][\\udc00-\\udfff]", hi = "[" + mf + "]", Cf = "\\u200d", Tf = "(?:" + wf + "|" + bf + ")", F0 = "(?:" + hi + "|" + bf + ")", _f = "(?:" + Ha + "(?:d|ll|m|re|s|t|ve))?", Pf = "(?:" + Ha + "(?:D|LL|M|RE|S|T|VE))?", Ef = V0 + "?", Af = "[" + gf + "]?", B0 = "(?:" + Cf + "(?:" + [Sf, Ga, Ka].join("|") + ")" + Af + Ef + ")*", W0 = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", $0 = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Rf = Af + Ef + B0, U0 = "(?:" + [k0, Ga, Ka].join("|") + ")" + Rf, H0 = "(?:" + [Sf + Yo + "?", Yo, Ga, Ka, L0].join("|") + ")", z0 = RegExp(Ha, "g"), G0 = RegExp(Yo, "g"), Ya = RegExp(za + "(?=" + za + ")|" + H0 + Rf, "g"), K0 = RegExp([
      hi + "?" + wf + "+" + _f + "(?=" + [yf, hi, "$"].join("|") + ")",
      F0 + "+" + Pf + "(?=" + [yf, hi + Tf, "$"].join("|") + ")",
      hi + "?" + Tf + "+" + _f,
      hi + "+" + Pf,
      $0,
      W0,
      xf,
      U0
    ].join("|"), "g"), Y0 = RegExp("[" + Cf + on + Ko + gf + "]"), q0 = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, X0 = [
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
    ], Z0 = -1, Xe = {};
    Xe[An] = Xe[Gt] = Xe[Rn] = Xe[Nn] = Xe[Lr] = Xe[kr] = Xe[ir] = Xe[or] = Xe[Vr] = !0, Xe[Fe] = Xe[Je] = Xe[Tt] = Xe[we] = Xe[En] = Xe[Le] = Xe[ve] = Xe[Pe] = Xe[Ye] = Xe[dt] = Xe[at] = Xe[Ot] = Xe[Dt] = Xe[gn] = Xe[Pn] = !1;
    var qe = {};
    qe[Fe] = qe[Je] = qe[Tt] = qe[En] = qe[we] = qe[Le] = qe[An] = qe[Gt] = qe[Rn] = qe[Nn] = qe[Lr] = qe[Ye] = qe[dt] = qe[at] = qe[Ot] = qe[Dt] = qe[gn] = qe[ht] = qe[kr] = qe[ir] = qe[or] = qe[Vr] = !0, qe[ve] = qe[Pe] = qe[Pn] = !1;
    var J0 = {
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
    }, Q0 = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, ex = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, tx = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, nx = parseFloat, rx = parseInt, Nf = typeof mo == "object" && mo && mo.Object === Object && mo, ix = typeof self == "object" && self && self.Object === Object && self, xt = Nf || ix || Function("return this")(), qa = t && !t.nodeType && t, Br = qa && !0 && e && !e.nodeType && e, Mf = Br && Br.exports === qa, Xa = Mf && Nf.process, sn = function() {
      try {
        var O = Br && Br.require && Br.require("util").types;
        return O || Xa && Xa.binding && Xa.binding("util");
      } catch {
      }
    }(), Of = sn && sn.isArrayBuffer, Df = sn && sn.isDate, If = sn && sn.isMap, jf = sn && sn.isRegExp, Lf = sn && sn.isSet, kf = sn && sn.isTypedArray;
    function Kt(O, k, j) {
      switch (j.length) {
        case 0:
          return O.call(k);
        case 1:
          return O.call(k, j[0]);
        case 2:
          return O.call(k, j[0], j[1]);
        case 3:
          return O.call(k, j[0], j[1], j[2]);
      }
      return O.apply(k, j);
    }
    function ox(O, k, j, Q) {
      for (var he = -1, ke = O == null ? 0 : O.length; ++he < ke; ) {
        var pt = O[he];
        k(Q, pt, j(pt), O);
      }
      return Q;
    }
    function an(O, k) {
      for (var j = -1, Q = O == null ? 0 : O.length; ++j < Q && k(O[j], j, O) !== !1; )
        ;
      return O;
    }
    function sx(O, k) {
      for (var j = O == null ? 0 : O.length; j-- && k(O[j], j, O) !== !1; )
        ;
      return O;
    }
    function Vf(O, k) {
      for (var j = -1, Q = O == null ? 0 : O.length; ++j < Q; )
        if (!k(O[j], j, O))
          return !1;
      return !0;
    }
    function lr(O, k) {
      for (var j = -1, Q = O == null ? 0 : O.length, he = 0, ke = []; ++j < Q; ) {
        var pt = O[j];
        k(pt, j, O) && (ke[he++] = pt);
      }
      return ke;
    }
    function qo(O, k) {
      var j = O == null ? 0 : O.length;
      return !!j && pi(O, k, 0) > -1;
    }
    function Za(O, k, j) {
      for (var Q = -1, he = O == null ? 0 : O.length; ++Q < he; )
        if (j(k, O[Q]))
          return !0;
      return !1;
    }
    function Qe(O, k) {
      for (var j = -1, Q = O == null ? 0 : O.length, he = Array(Q); ++j < Q; )
        he[j] = k(O[j], j, O);
      return he;
    }
    function cr(O, k) {
      for (var j = -1, Q = k.length, he = O.length; ++j < Q; )
        O[he + j] = k[j];
      return O;
    }
    function Ja(O, k, j, Q) {
      var he = -1, ke = O == null ? 0 : O.length;
      for (Q && ke && (j = O[++he]); ++he < ke; )
        j = k(j, O[he], he, O);
      return j;
    }
    function ax(O, k, j, Q) {
      var he = O == null ? 0 : O.length;
      for (Q && he && (j = O[--he]); he--; )
        j = k(j, O[he], he, O);
      return j;
    }
    function Qa(O, k) {
      for (var j = -1, Q = O == null ? 0 : O.length; ++j < Q; )
        if (k(O[j], j, O))
          return !0;
      return !1;
    }
    var lx = el("length");
    function cx(O) {
      return O.split("");
    }
    function ux(O) {
      return O.match(R) || [];
    }
    function Ff(O, k, j) {
      var Q;
      return j(O, function(he, ke, pt) {
        if (k(he, ke, pt))
          return Q = ke, !1;
      }), Q;
    }
    function Xo(O, k, j, Q) {
      for (var he = O.length, ke = j + (Q ? 1 : -1); Q ? ke-- : ++ke < he; )
        if (k(O[ke], ke, O))
          return ke;
      return -1;
    }
    function pi(O, k, j) {
      return k === k ? Sx(O, k, j) : Xo(O, Bf, j);
    }
    function fx(O, k, j, Q) {
      for (var he = j - 1, ke = O.length; ++he < ke; )
        if (Q(O[he], k))
          return he;
      return -1;
    }
    function Bf(O) {
      return O !== O;
    }
    function Wf(O, k) {
      var j = O == null ? 0 : O.length;
      return j ? nl(O, k) / j : pe;
    }
    function el(O) {
      return function(k) {
        return k == null ? r : k[O];
      };
    }
    function tl(O) {
      return function(k) {
        return O == null ? r : O[k];
      };
    }
    function $f(O, k, j, Q, he) {
      return he(O, function(ke, pt, Ke) {
        j = Q ? (Q = !1, ke) : k(j, ke, pt, Ke);
      }), j;
    }
    function dx(O, k) {
      var j = O.length;
      for (O.sort(k); j--; )
        O[j] = O[j].value;
      return O;
    }
    function nl(O, k) {
      for (var j, Q = -1, he = O.length; ++Q < he; ) {
        var ke = k(O[Q]);
        ke !== r && (j = j === r ? ke : j + ke);
      }
      return j;
    }
    function rl(O, k) {
      for (var j = -1, Q = Array(O); ++j < O; )
        Q[j] = k(j);
      return Q;
    }
    function hx(O, k) {
      return Qe(k, function(j) {
        return [j, O[j]];
      });
    }
    function Uf(O) {
      return O && O.slice(0, Kf(O) + 1).replace(di, "");
    }
    function Yt(O) {
      return function(k) {
        return O(k);
      };
    }
    function il(O, k) {
      return Qe(k, function(j) {
        return O[j];
      });
    }
    function Qi(O, k) {
      return O.has(k);
    }
    function Hf(O, k) {
      for (var j = -1, Q = O.length; ++j < Q && pi(k, O[j], 0) > -1; )
        ;
      return j;
    }
    function zf(O, k) {
      for (var j = O.length; j-- && pi(k, O[j], 0) > -1; )
        ;
      return j;
    }
    function px(O, k) {
      for (var j = O.length, Q = 0; j--; )
        O[j] === k && ++Q;
      return Q;
    }
    var mx = tl(J0), gx = tl(Q0);
    function vx(O) {
      return "\\" + tx[O];
    }
    function yx(O, k) {
      return O == null ? r : O[k];
    }
    function mi(O) {
      return Y0.test(O);
    }
    function xx(O) {
      return q0.test(O);
    }
    function wx(O) {
      for (var k, j = []; !(k = O.next()).done; )
        j.push(k.value);
      return j;
    }
    function ol(O) {
      var k = -1, j = Array(O.size);
      return O.forEach(function(Q, he) {
        j[++k] = [he, Q];
      }), j;
    }
    function Gf(O, k) {
      return function(j) {
        return O(k(j));
      };
    }
    function ur(O, k) {
      for (var j = -1, Q = O.length, he = 0, ke = []; ++j < Q; ) {
        var pt = O[j];
        (pt === k || pt === p) && (O[j] = p, ke[he++] = j);
      }
      return ke;
    }
    function Zo(O) {
      var k = -1, j = Array(O.size);
      return O.forEach(function(Q) {
        j[++k] = Q;
      }), j;
    }
    function bx(O) {
      var k = -1, j = Array(O.size);
      return O.forEach(function(Q) {
        j[++k] = [Q, Q];
      }), j;
    }
    function Sx(O, k, j) {
      for (var Q = j - 1, he = O.length; ++Q < he; )
        if (O[Q] === k)
          return Q;
      return -1;
    }
    function Cx(O, k, j) {
      for (var Q = j + 1; Q--; )
        if (O[Q] === k)
          return Q;
      return Q;
    }
    function gi(O) {
      return mi(O) ? _x(O) : lx(O);
    }
    function vn(O) {
      return mi(O) ? Px(O) : cx(O);
    }
    function Kf(O) {
      for (var k = O.length; k-- && Fa.test(O.charAt(k)); )
        ;
      return k;
    }
    var Tx = tl(ex);
    function _x(O) {
      for (var k = Ya.lastIndex = 0; Ya.test(O); )
        ++k;
      return k;
    }
    function Px(O) {
      return O.match(Ya) || [];
    }
    function Ex(O) {
      return O.match(K0) || [];
    }
    var Ax = function O(k) {
      k = k == null ? xt : vi.defaults(xt.Object(), k, vi.pick(xt, X0));
      var j = k.Array, Q = k.Date, he = k.Error, ke = k.Function, pt = k.Math, Ke = k.Object, sl = k.RegExp, Rx = k.String, ln = k.TypeError, Jo = j.prototype, Nx = ke.prototype, yi = Ke.prototype, Qo = k["__core-js_shared__"], es = Nx.toString, He = yi.hasOwnProperty, Mx = 0, Yf = function() {
        var n = /[^.]+$/.exec(Qo && Qo.keys && Qo.keys.IE_PROTO || "");
        return n ? "Symbol(src)_1." + n : "";
      }(), ts = yi.toString, Ox = es.call(Ke), Dx = xt._, Ix = sl(
        "^" + es.call(He).replace(Zi, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), ns = Mf ? k.Buffer : r, fr = k.Symbol, rs = k.Uint8Array, qf = ns ? ns.allocUnsafe : r, is = Gf(Ke.getPrototypeOf, Ke), Xf = Ke.create, Zf = yi.propertyIsEnumerable, os = Jo.splice, Jf = fr ? fr.isConcatSpreadable : r, eo = fr ? fr.iterator : r, Wr = fr ? fr.toStringTag : r, ss = function() {
        try {
          var n = Gr(Ke, "defineProperty");
          return n({}, "", {}), n;
        } catch {
        }
      }(), jx = k.clearTimeout !== xt.clearTimeout && k.clearTimeout, Lx = Q && Q.now !== xt.Date.now && Q.now, kx = k.setTimeout !== xt.setTimeout && k.setTimeout, as = pt.ceil, ls = pt.floor, al = Ke.getOwnPropertySymbols, Vx = ns ? ns.isBuffer : r, Qf = k.isFinite, Fx = Jo.join, Bx = Gf(Ke.keys, Ke), mt = pt.max, Et = pt.min, Wx = Q.now, $x = k.parseInt, ed = pt.random, Ux = Jo.reverse, ll = Gr(k, "DataView"), to = Gr(k, "Map"), cl = Gr(k, "Promise"), xi = Gr(k, "Set"), no = Gr(k, "WeakMap"), ro = Gr(Ke, "create"), cs = no && new no(), wi = {}, Hx = Kr(ll), zx = Kr(to), Gx = Kr(cl), Kx = Kr(xi), Yx = Kr(no), us = fr ? fr.prototype : r, io = us ? us.valueOf : r, td = us ? us.toString : r;
      function w(n) {
        if (ot(n) && !me(n) && !(n instanceof Oe)) {
          if (n instanceof cn)
            return n;
          if (He.call(n, "__wrapped__"))
            return nh(n);
        }
        return new cn(n);
      }
      var bi = /* @__PURE__ */ function() {
        function n() {
        }
        return function(i) {
          if (!tt(i))
            return {};
          if (Xf)
            return Xf(i);
          n.prototype = i;
          var a = new n();
          return n.prototype = r, a;
        };
      }();
      function fs() {
      }
      function cn(n, i) {
        this.__wrapped__ = n, this.__actions__ = [], this.__chain__ = !!i, this.__index__ = 0, this.__values__ = r;
      }
      w.templateSettings = {
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
        evaluate: sr,
        /**
         * Used to detect `data` property values to inject.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        interpolate: fi,
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
          _: w
        }
      }, w.prototype = fs.prototype, w.prototype.constructor = w, cn.prototype = bi(fs.prototype), cn.prototype.constructor = cn;
      function Oe(n) {
        this.__wrapped__ = n, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Ae, this.__views__ = [];
      }
      function qx() {
        var n = new Oe(this.__wrapped__);
        return n.__actions__ = Wt(this.__actions__), n.__dir__ = this.__dir__, n.__filtered__ = this.__filtered__, n.__iteratees__ = Wt(this.__iteratees__), n.__takeCount__ = this.__takeCount__, n.__views__ = Wt(this.__views__), n;
      }
      function Xx() {
        if (this.__filtered__) {
          var n = new Oe(this);
          n.__dir__ = -1, n.__filtered__ = !0;
        } else
          n = this.clone(), n.__dir__ *= -1;
        return n;
      }
      function Zx() {
        var n = this.__wrapped__.value(), i = this.__dir__, a = me(n), d = i < 0, g = a ? n.length : 0, b = cb(0, g, this.__views__), P = b.start, N = b.end, D = N - P, V = d ? N : P - 1, F = this.__iteratees__, B = F.length, K = 0, ee = Et(D, this.__takeCount__);
        if (!a || !d && g == D && ee == D)
          return _d(n, this.__actions__);
        var le = [];
        e:
          for (; D-- && K < ee; ) {
            V += i;
            for (var be = -1, ce = n[V]; ++be < B; ) {
              var Ne = F[be], Ie = Ne.iteratee, Zt = Ne.type, Lt = Ie(ce);
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
      Oe.prototype = bi(fs.prototype), Oe.prototype.constructor = Oe;
      function $r(n) {
        var i = -1, a = n == null ? 0 : n.length;
        for (this.clear(); ++i < a; ) {
          var d = n[i];
          this.set(d[0], d[1]);
        }
      }
      function Jx() {
        this.__data__ = ro ? ro(null) : {}, this.size = 0;
      }
      function Qx(n) {
        var i = this.has(n) && delete this.__data__[n];
        return this.size -= i ? 1 : 0, i;
      }
      function ew(n) {
        var i = this.__data__;
        if (ro) {
          var a = i[n];
          return a === f ? r : a;
        }
        return He.call(i, n) ? i[n] : r;
      }
      function tw(n) {
        var i = this.__data__;
        return ro ? i[n] !== r : He.call(i, n);
      }
      function nw(n, i) {
        var a = this.__data__;
        return this.size += this.has(n) ? 0 : 1, a[n] = ro && i === r ? f : i, this;
      }
      $r.prototype.clear = Jx, $r.prototype.delete = Qx, $r.prototype.get = ew, $r.prototype.has = tw, $r.prototype.set = nw;
      function Bn(n) {
        var i = -1, a = n == null ? 0 : n.length;
        for (this.clear(); ++i < a; ) {
          var d = n[i];
          this.set(d[0], d[1]);
        }
      }
      function rw() {
        this.__data__ = [], this.size = 0;
      }
      function iw(n) {
        var i = this.__data__, a = ds(i, n);
        if (a < 0)
          return !1;
        var d = i.length - 1;
        return a == d ? i.pop() : os.call(i, a, 1), --this.size, !0;
      }
      function ow(n) {
        var i = this.__data__, a = ds(i, n);
        return a < 0 ? r : i[a][1];
      }
      function sw(n) {
        return ds(this.__data__, n) > -1;
      }
      function aw(n, i) {
        var a = this.__data__, d = ds(a, n);
        return d < 0 ? (++this.size, a.push([n, i])) : a[d][1] = i, this;
      }
      Bn.prototype.clear = rw, Bn.prototype.delete = iw, Bn.prototype.get = ow, Bn.prototype.has = sw, Bn.prototype.set = aw;
      function Wn(n) {
        var i = -1, a = n == null ? 0 : n.length;
        for (this.clear(); ++i < a; ) {
          var d = n[i];
          this.set(d[0], d[1]);
        }
      }
      function lw() {
        this.size = 0, this.__data__ = {
          hash: new $r(),
          map: new (to || Bn)(),
          string: new $r()
        };
      }
      function cw(n) {
        var i = Ts(this, n).delete(n);
        return this.size -= i ? 1 : 0, i;
      }
      function uw(n) {
        return Ts(this, n).get(n);
      }
      function fw(n) {
        return Ts(this, n).has(n);
      }
      function dw(n, i) {
        var a = Ts(this, n), d = a.size;
        return a.set(n, i), this.size += a.size == d ? 0 : 1, this;
      }
      Wn.prototype.clear = lw, Wn.prototype.delete = cw, Wn.prototype.get = uw, Wn.prototype.has = fw, Wn.prototype.set = dw;
      function Ur(n) {
        var i = -1, a = n == null ? 0 : n.length;
        for (this.__data__ = new Wn(); ++i < a; )
          this.add(n[i]);
      }
      function hw(n) {
        return this.__data__.set(n, f), this;
      }
      function pw(n) {
        return this.__data__.has(n);
      }
      Ur.prototype.add = Ur.prototype.push = hw, Ur.prototype.has = pw;
      function yn(n) {
        var i = this.__data__ = new Bn(n);
        this.size = i.size;
      }
      function mw() {
        this.__data__ = new Bn(), this.size = 0;
      }
      function gw(n) {
        var i = this.__data__, a = i.delete(n);
        return this.size = i.size, a;
      }
      function vw(n) {
        return this.__data__.get(n);
      }
      function yw(n) {
        return this.__data__.has(n);
      }
      function xw(n, i) {
        var a = this.__data__;
        if (a instanceof Bn) {
          var d = a.__data__;
          if (!to || d.length < s - 1)
            return d.push([n, i]), this.size = ++a.size, this;
          a = this.__data__ = new Wn(d);
        }
        return a.set(n, i), this.size = a.size, this;
      }
      yn.prototype.clear = mw, yn.prototype.delete = gw, yn.prototype.get = vw, yn.prototype.has = yw, yn.prototype.set = xw;
      function nd(n, i) {
        var a = me(n), d = !a && Yr(n), g = !a && !d && gr(n), b = !a && !d && !g && _i(n), P = a || d || g || b, N = P ? rl(n.length, Rx) : [], D = N.length;
        for (var V in n)
          (i || He.call(n, V)) && !(P && // Safari 9 has enumerable `arguments.length` in strict mode.
          (V == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          g && (V == "offset" || V == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          b && (V == "buffer" || V == "byteLength" || V == "byteOffset") || // Skip index properties.
          zn(V, D))) && N.push(V);
        return N;
      }
      function rd(n) {
        var i = n.length;
        return i ? n[wl(0, i - 1)] : r;
      }
      function ww(n, i) {
        return _s(Wt(n), Hr(i, 0, n.length));
      }
      function bw(n) {
        return _s(Wt(n));
      }
      function ul(n, i, a) {
        (a !== r && !xn(n[i], a) || a === r && !(i in n)) && $n(n, i, a);
      }
      function oo(n, i, a) {
        var d = n[i];
        (!(He.call(n, i) && xn(d, a)) || a === r && !(i in n)) && $n(n, i, a);
      }
      function ds(n, i) {
        for (var a = n.length; a--; )
          if (xn(n[a][0], i))
            return a;
        return -1;
      }
      function Sw(n, i, a, d) {
        return dr(n, function(g, b, P) {
          i(d, g, a(g), P);
        }), d;
      }
      function id(n, i) {
        return n && On(i, gt(i), n);
      }
      function Cw(n, i) {
        return n && On(i, Ut(i), n);
      }
      function $n(n, i, a) {
        i == "__proto__" && ss ? ss(n, i, {
          configurable: !0,
          enumerable: !0,
          value: a,
          writable: !0
        }) : n[i] = a;
      }
      function fl(n, i) {
        for (var a = -1, d = i.length, g = j(d), b = n == null; ++a < d; )
          g[a] = b ? r : zl(n, i[a]);
        return g;
      }
      function Hr(n, i, a) {
        return n === n && (a !== r && (n = n <= a ? n : a), i !== r && (n = n >= i ? n : i)), n;
      }
      function un(n, i, a, d, g, b) {
        var P, N = i & v, D = i & x, V = i & y;
        if (a && (P = g ? a(n, d, g, b) : a(n)), P !== r)
          return P;
        if (!tt(n))
          return n;
        var F = me(n);
        if (F) {
          if (P = fb(n), !N)
            return Wt(n, P);
        } else {
          var B = At(n), K = B == Pe || B == st;
          if (gr(n))
            return Ad(n, N);
          if (B == at || B == Fe || K && !g) {
            if (P = D || K ? {} : Kd(n), !N)
              return D ? eb(n, Cw(P, n)) : Qw(n, id(P, n));
          } else {
            if (!qe[B])
              return g ? n : {};
            P = db(n, B, N);
          }
        }
        b || (b = new yn());
        var ee = b.get(n);
        if (ee)
          return ee;
        b.set(n, P), Sh(n) ? n.forEach(function(ce) {
          P.add(un(ce, i, a, ce, n, b));
        }) : wh(n) && n.forEach(function(ce, Ne) {
          P.set(Ne, un(ce, i, a, Ne, n, b));
        });
        var le = V ? D ? Ml : Nl : D ? Ut : gt, be = F ? r : le(n);
        return an(be || n, function(ce, Ne) {
          be && (Ne = ce, ce = n[Ne]), oo(P, Ne, un(ce, i, a, Ne, n, b));
        }), P;
      }
      function Tw(n) {
        var i = gt(n);
        return function(a) {
          return od(a, n, i);
        };
      }
      function od(n, i, a) {
        var d = a.length;
        if (n == null)
          return !d;
        for (n = Ke(n); d--; ) {
          var g = a[d], b = i[g], P = n[g];
          if (P === r && !(g in n) || !b(P))
            return !1;
        }
        return !0;
      }
      function sd(n, i, a) {
        if (typeof n != "function")
          throw new ln(l);
        return ho(function() {
          n.apply(r, a);
        }, i);
      }
      function so(n, i, a, d) {
        var g = -1, b = qo, P = !0, N = n.length, D = [], V = i.length;
        if (!N)
          return D;
        a && (i = Qe(i, Yt(a))), d ? (b = Za, P = !1) : i.length >= s && (b = Qi, P = !1, i = new Ur(i));
        e:
          for (; ++g < N; ) {
            var F = n[g], B = a == null ? F : a(F);
            if (F = d || F !== 0 ? F : 0, P && B === B) {
              for (var K = V; K--; )
                if (i[K] === B)
                  continue e;
              D.push(F);
            } else
              b(i, B, d) || D.push(F);
          }
        return D;
      }
      var dr = Dd(Mn), ad = Dd(hl, !0);
      function _w(n, i) {
        var a = !0;
        return dr(n, function(d, g, b) {
          return a = !!i(d, g, b), a;
        }), a;
      }
      function hs(n, i, a) {
        for (var d = -1, g = n.length; ++d < g; ) {
          var b = n[d], P = i(b);
          if (P != null && (N === r ? P === P && !Xt(P) : a(P, N)))
            var N = P, D = b;
        }
        return D;
      }
      function Pw(n, i, a, d) {
        var g = n.length;
        for (a = ye(a), a < 0 && (a = -a > g ? 0 : g + a), d = d === r || d > g ? g : ye(d), d < 0 && (d += g), d = a > d ? 0 : Th(d); a < d; )
          n[a++] = i;
        return n;
      }
      function ld(n, i) {
        var a = [];
        return dr(n, function(d, g, b) {
          i(d, g, b) && a.push(d);
        }), a;
      }
      function wt(n, i, a, d, g) {
        var b = -1, P = n.length;
        for (a || (a = pb), g || (g = []); ++b < P; ) {
          var N = n[b];
          i > 0 && a(N) ? i > 1 ? wt(N, i - 1, a, d, g) : cr(g, N) : d || (g[g.length] = N);
        }
        return g;
      }
      var dl = Id(), cd = Id(!0);
      function Mn(n, i) {
        return n && dl(n, i, gt);
      }
      function hl(n, i) {
        return n && cd(n, i, gt);
      }
      function ps(n, i) {
        return lr(i, function(a) {
          return Gn(n[a]);
        });
      }
      function zr(n, i) {
        i = pr(i, n);
        for (var a = 0, d = i.length; n != null && a < d; )
          n = n[Dn(i[a++])];
        return a && a == d ? n : r;
      }
      function ud(n, i, a) {
        var d = i(n);
        return me(n) ? d : cr(d, a(n));
      }
      function It(n) {
        return n == null ? n === r ? _n : Mt : Wr && Wr in Ke(n) ? lb(n) : bb(n);
      }
      function pl(n, i) {
        return n > i;
      }
      function Ew(n, i) {
        return n != null && He.call(n, i);
      }
      function Aw(n, i) {
        return n != null && i in Ke(n);
      }
      function Rw(n, i, a) {
        return n >= Et(i, a) && n < mt(i, a);
      }
      function ml(n, i, a) {
        for (var d = a ? Za : qo, g = n[0].length, b = n.length, P = b, N = j(b), D = 1 / 0, V = []; P--; ) {
          var F = n[P];
          P && i && (F = Qe(F, Yt(i))), D = Et(F.length, D), N[P] = !a && (i || g >= 120 && F.length >= 120) ? new Ur(P && F) : r;
        }
        F = n[0];
        var B = -1, K = N[0];
        e:
          for (; ++B < g && V.length < D; ) {
            var ee = F[B], le = i ? i(ee) : ee;
            if (ee = a || ee !== 0 ? ee : 0, !(K ? Qi(K, le) : d(V, le, a))) {
              for (P = b; --P; ) {
                var be = N[P];
                if (!(be ? Qi(be, le) : d(n[P], le, a)))
                  continue e;
              }
              K && K.push(le), V.push(ee);
            }
          }
        return V;
      }
      function Nw(n, i, a, d) {
        return Mn(n, function(g, b, P) {
          i(d, a(g), b, P);
        }), d;
      }
      function ao(n, i, a) {
        i = pr(i, n), n = Zd(n, i);
        var d = n == null ? n : n[Dn(dn(i))];
        return d == null ? r : Kt(d, n, a);
      }
      function fd(n) {
        return ot(n) && It(n) == Fe;
      }
      function Mw(n) {
        return ot(n) && It(n) == Tt;
      }
      function Ow(n) {
        return ot(n) && It(n) == Le;
      }
      function lo(n, i, a, d, g) {
        return n === i ? !0 : n == null || i == null || !ot(n) && !ot(i) ? n !== n && i !== i : Dw(n, i, a, d, lo, g);
      }
      function Dw(n, i, a, d, g, b) {
        var P = me(n), N = me(i), D = P ? Je : At(n), V = N ? Je : At(i);
        D = D == Fe ? at : D, V = V == Fe ? at : V;
        var F = D == at, B = V == at, K = D == V;
        if (K && gr(n)) {
          if (!gr(i))
            return !1;
          P = !0, F = !1;
        }
        if (K && !F)
          return b || (b = new yn()), P || _i(n) ? Hd(n, i, a, d, g, b) : sb(n, i, D, a, d, g, b);
        if (!(a & T)) {
          var ee = F && He.call(n, "__wrapped__"), le = B && He.call(i, "__wrapped__");
          if (ee || le) {
            var be = ee ? n.value() : n, ce = le ? i.value() : i;
            return b || (b = new yn()), g(be, ce, a, d, b);
          }
        }
        return K ? (b || (b = new yn()), ab(n, i, a, d, g, b)) : !1;
      }
      function Iw(n) {
        return ot(n) && At(n) == Ye;
      }
      function gl(n, i, a, d) {
        var g = a.length, b = g, P = !d;
        if (n == null)
          return !b;
        for (n = Ke(n); g--; ) {
          var N = a[g];
          if (P && N[2] ? N[1] !== n[N[0]] : !(N[0] in n))
            return !1;
        }
        for (; ++g < b; ) {
          N = a[g];
          var D = N[0], V = n[D], F = N[1];
          if (P && N[2]) {
            if (V === r && !(D in n))
              return !1;
          } else {
            var B = new yn();
            if (d)
              var K = d(V, F, D, n, i, B);
            if (!(K === r ? lo(F, V, T | C, d, B) : K))
              return !1;
          }
        }
        return !0;
      }
      function dd(n) {
        if (!tt(n) || gb(n))
          return !1;
        var i = Gn(n) ? Ix : Ee;
        return i.test(Kr(n));
      }
      function jw(n) {
        return ot(n) && It(n) == Ot;
      }
      function Lw(n) {
        return ot(n) && At(n) == Dt;
      }
      function kw(n) {
        return ot(n) && Ms(n.length) && !!Xe[It(n)];
      }
      function hd(n) {
        return typeof n == "function" ? n : n == null ? Ht : typeof n == "object" ? me(n) ? gd(n[0], n[1]) : md(n) : jh(n);
      }
      function vl(n) {
        if (!fo(n))
          return Bx(n);
        var i = [];
        for (var a in Ke(n))
          He.call(n, a) && a != "constructor" && i.push(a);
        return i;
      }
      function Vw(n) {
        if (!tt(n))
          return wb(n);
        var i = fo(n), a = [];
        for (var d in n)
          d == "constructor" && (i || !He.call(n, d)) || a.push(d);
        return a;
      }
      function yl(n, i) {
        return n < i;
      }
      function pd(n, i) {
        var a = -1, d = $t(n) ? j(n.length) : [];
        return dr(n, function(g, b, P) {
          d[++a] = i(g, b, P);
        }), d;
      }
      function md(n) {
        var i = Dl(n);
        return i.length == 1 && i[0][2] ? qd(i[0][0], i[0][1]) : function(a) {
          return a === n || gl(a, n, i);
        };
      }
      function gd(n, i) {
        return jl(n) && Yd(i) ? qd(Dn(n), i) : function(a) {
          var d = zl(a, n);
          return d === r && d === i ? Gl(a, n) : lo(i, d, T | C);
        };
      }
      function ms(n, i, a, d, g) {
        n !== i && dl(i, function(b, P) {
          if (g || (g = new yn()), tt(b))
            Fw(n, i, P, a, ms, d, g);
          else {
            var N = d ? d(kl(n, P), b, P + "", n, i, g) : r;
            N === r && (N = b), ul(n, P, N);
          }
        }, Ut);
      }
      function Fw(n, i, a, d, g, b, P) {
        var N = kl(n, a), D = kl(i, a), V = P.get(D);
        if (V) {
          ul(n, a, V);
          return;
        }
        var F = b ? b(N, D, a + "", n, i, P) : r, B = F === r;
        if (B) {
          var K = me(D), ee = !K && gr(D), le = !K && !ee && _i(D);
          F = D, K || ee || le ? me(N) ? F = N : lt(N) ? F = Wt(N) : ee ? (B = !1, F = Ad(D, !0)) : le ? (B = !1, F = Rd(D, !0)) : F = [] : po(D) || Yr(D) ? (F = N, Yr(N) ? F = _h(N) : (!tt(N) || Gn(N)) && (F = Kd(D))) : B = !1;
        }
        B && (P.set(D, F), g(F, D, d, b, P), P.delete(D)), ul(n, a, F);
      }
      function vd(n, i) {
        var a = n.length;
        if (a)
          return i += i < 0 ? a : 0, zn(i, a) ? n[i] : r;
      }
      function yd(n, i, a) {
        i.length ? i = Qe(i, function(b) {
          return me(b) ? function(P) {
            return zr(P, b.length === 1 ? b[0] : b);
          } : b;
        }) : i = [Ht];
        var d = -1;
        i = Qe(i, Yt(ae()));
        var g = pd(n, function(b, P, N) {
          var D = Qe(i, function(V) {
            return V(b);
          });
          return { criteria: D, index: ++d, value: b };
        });
        return dx(g, function(b, P) {
          return Jw(b, P, a);
        });
      }
      function Bw(n, i) {
        return xd(n, i, function(a, d) {
          return Gl(n, d);
        });
      }
      function xd(n, i, a) {
        for (var d = -1, g = i.length, b = {}; ++d < g; ) {
          var P = i[d], N = zr(n, P);
          a(N, P) && co(b, pr(P, n), N);
        }
        return b;
      }
      function Ww(n) {
        return function(i) {
          return zr(i, n);
        };
      }
      function xl(n, i, a, d) {
        var g = d ? fx : pi, b = -1, P = i.length, N = n;
        for (n === i && (i = Wt(i)), a && (N = Qe(n, Yt(a))); ++b < P; )
          for (var D = 0, V = i[b], F = a ? a(V) : V; (D = g(N, F, D, d)) > -1; )
            N !== n && os.call(N, D, 1), os.call(n, D, 1);
        return n;
      }
      function wd(n, i) {
        for (var a = n ? i.length : 0, d = a - 1; a--; ) {
          var g = i[a];
          if (a == d || g !== b) {
            var b = g;
            zn(g) ? os.call(n, g, 1) : Cl(n, g);
          }
        }
        return n;
      }
      function wl(n, i) {
        return n + ls(ed() * (i - n + 1));
      }
      function $w(n, i, a, d) {
        for (var g = -1, b = mt(as((i - n) / (a || 1)), 0), P = j(b); b--; )
          P[d ? b : ++g] = n, n += a;
        return P;
      }
      function bl(n, i) {
        var a = "";
        if (!n || i < 1 || i > q)
          return a;
        do
          i % 2 && (a += n), i = ls(i / 2), i && (n += n);
        while (i);
        return a;
      }
      function Ce(n, i) {
        return Vl(Xd(n, i, Ht), n + "");
      }
      function Uw(n) {
        return rd(Pi(n));
      }
      function Hw(n, i) {
        var a = Pi(n);
        return _s(a, Hr(i, 0, a.length));
      }
      function co(n, i, a, d) {
        if (!tt(n))
          return n;
        i = pr(i, n);
        for (var g = -1, b = i.length, P = b - 1, N = n; N != null && ++g < b; ) {
          var D = Dn(i[g]), V = a;
          if (D === "__proto__" || D === "constructor" || D === "prototype")
            return n;
          if (g != P) {
            var F = N[D];
            V = d ? d(F, D, N) : r, V === r && (V = tt(F) ? F : zn(i[g + 1]) ? [] : {});
          }
          oo(N, D, V), N = N[D];
        }
        return n;
      }
      var bd = cs ? function(n, i) {
        return cs.set(n, i), n;
      } : Ht, zw = ss ? function(n, i) {
        return ss(n, "toString", {
          configurable: !0,
          enumerable: !1,
          value: Yl(i),
          writable: !0
        });
      } : Ht;
      function Gw(n) {
        return _s(Pi(n));
      }
      function fn(n, i, a) {
        var d = -1, g = n.length;
        i < 0 && (i = -i > g ? 0 : g + i), a = a > g ? g : a, a < 0 && (a += g), g = i > a ? 0 : a - i >>> 0, i >>>= 0;
        for (var b = j(g); ++d < g; )
          b[d] = n[d + i];
        return b;
      }
      function Kw(n, i) {
        var a;
        return dr(n, function(d, g, b) {
          return a = i(d, g, b), !a;
        }), !!a;
      }
      function gs(n, i, a) {
        var d = 0, g = n == null ? d : n.length;
        if (typeof i == "number" && i === i && g <= ge) {
          for (; d < g; ) {
            var b = d + g >>> 1, P = n[b];
            P !== null && !Xt(P) && (a ? P <= i : P < i) ? d = b + 1 : g = b;
          }
          return g;
        }
        return Sl(n, i, Ht, a);
      }
      function Sl(n, i, a, d) {
        var g = 0, b = n == null ? 0 : n.length;
        if (b === 0)
          return 0;
        i = a(i);
        for (var P = i !== i, N = i === null, D = Xt(i), V = i === r; g < b; ) {
          var F = ls((g + b) / 2), B = a(n[F]), K = B !== r, ee = B === null, le = B === B, be = Xt(B);
          if (P)
            var ce = d || le;
          else
            V ? ce = le && (d || K) : N ? ce = le && K && (d || !ee) : D ? ce = le && K && !ee && (d || !be) : ee || be ? ce = !1 : ce = d ? B <= i : B < i;
          ce ? g = F + 1 : b = F;
        }
        return Et(b, _e);
      }
      function Sd(n, i) {
        for (var a = -1, d = n.length, g = 0, b = []; ++a < d; ) {
          var P = n[a], N = i ? i(P) : P;
          if (!a || !xn(N, D)) {
            var D = N;
            b[g++] = P === 0 ? 0 : P;
          }
        }
        return b;
      }
      function Cd(n) {
        return typeof n == "number" ? n : Xt(n) ? pe : +n;
      }
      function qt(n) {
        if (typeof n == "string")
          return n;
        if (me(n))
          return Qe(n, qt) + "";
        if (Xt(n))
          return td ? td.call(n) : "";
        var i = n + "";
        return i == "0" && 1 / n == -Z ? "-0" : i;
      }
      function hr(n, i, a) {
        var d = -1, g = qo, b = n.length, P = !0, N = [], D = N;
        if (a)
          P = !1, g = Za;
        else if (b >= s) {
          var V = i ? null : ib(n);
          if (V)
            return Zo(V);
          P = !1, g = Qi, D = new Ur();
        } else
          D = i ? [] : N;
        e:
          for (; ++d < b; ) {
            var F = n[d], B = i ? i(F) : F;
            if (F = a || F !== 0 ? F : 0, P && B === B) {
              for (var K = D.length; K--; )
                if (D[K] === B)
                  continue e;
              i && D.push(B), N.push(F);
            } else
              g(D, B, a) || (D !== N && D.push(B), N.push(F));
          }
        return N;
      }
      function Cl(n, i) {
        return i = pr(i, n), n = Zd(n, i), n == null || delete n[Dn(dn(i))];
      }
      function Td(n, i, a, d) {
        return co(n, i, a(zr(n, i)), d);
      }
      function vs(n, i, a, d) {
        for (var g = n.length, b = d ? g : -1; (d ? b-- : ++b < g) && i(n[b], b, n); )
          ;
        return a ? fn(n, d ? 0 : b, d ? b + 1 : g) : fn(n, d ? b + 1 : 0, d ? g : b);
      }
      function _d(n, i) {
        var a = n;
        return a instanceof Oe && (a = a.value()), Ja(i, function(d, g) {
          return g.func.apply(g.thisArg, cr([d], g.args));
        }, a);
      }
      function Tl(n, i, a) {
        var d = n.length;
        if (d < 2)
          return d ? hr(n[0]) : [];
        for (var g = -1, b = j(d); ++g < d; )
          for (var P = n[g], N = -1; ++N < d; )
            N != g && (b[g] = so(b[g] || P, n[N], i, a));
        return hr(wt(b, 1), i, a);
      }
      function Pd(n, i, a) {
        for (var d = -1, g = n.length, b = i.length, P = {}; ++d < g; ) {
          var N = d < b ? i[d] : r;
          a(P, n[d], N);
        }
        return P;
      }
      function _l(n) {
        return lt(n) ? n : [];
      }
      function Pl(n) {
        return typeof n == "function" ? n : Ht;
      }
      function pr(n, i) {
        return me(n) ? n : jl(n, i) ? [n] : th(We(n));
      }
      var Yw = Ce;
      function mr(n, i, a) {
        var d = n.length;
        return a = a === r ? d : a, !i && a >= d ? n : fn(n, i, a);
      }
      var Ed = jx || function(n) {
        return xt.clearTimeout(n);
      };
      function Ad(n, i) {
        if (i)
          return n.slice();
        var a = n.length, d = qf ? qf(a) : new n.constructor(a);
        return n.copy(d), d;
      }
      function El(n) {
        var i = new n.constructor(n.byteLength);
        return new rs(i).set(new rs(n)), i;
      }
      function qw(n, i) {
        var a = i ? El(n.buffer) : n.buffer;
        return new n.constructor(a, n.byteOffset, n.byteLength);
      }
      function Xw(n) {
        var i = new n.constructor(n.source, je.exec(n));
        return i.lastIndex = n.lastIndex, i;
      }
      function Zw(n) {
        return io ? Ke(io.call(n)) : {};
      }
      function Rd(n, i) {
        var a = i ? El(n.buffer) : n.buffer;
        return new n.constructor(a, n.byteOffset, n.length);
      }
      function Nd(n, i) {
        if (n !== i) {
          var a = n !== r, d = n === null, g = n === n, b = Xt(n), P = i !== r, N = i === null, D = i === i, V = Xt(i);
          if (!N && !V && !b && n > i || b && P && D && !N && !V || d && P && D || !a && D || !g)
            return 1;
          if (!d && !b && !V && n < i || V && a && g && !d && !b || N && a && g || !P && g || !D)
            return -1;
        }
        return 0;
      }
      function Jw(n, i, a) {
        for (var d = -1, g = n.criteria, b = i.criteria, P = g.length, N = a.length; ++d < P; ) {
          var D = Nd(g[d], b[d]);
          if (D) {
            if (d >= N)
              return D;
            var V = a[d];
            return D * (V == "desc" ? -1 : 1);
          }
        }
        return n.index - i.index;
      }
      function Md(n, i, a, d) {
        for (var g = -1, b = n.length, P = a.length, N = -1, D = i.length, V = mt(b - P, 0), F = j(D + V), B = !d; ++N < D; )
          F[N] = i[N];
        for (; ++g < P; )
          (B || g < b) && (F[a[g]] = n[g]);
        for (; V--; )
          F[N++] = n[g++];
        return F;
      }
      function Od(n, i, a, d) {
        for (var g = -1, b = n.length, P = -1, N = a.length, D = -1, V = i.length, F = mt(b - N, 0), B = j(F + V), K = !d; ++g < F; )
          B[g] = n[g];
        for (var ee = g; ++D < V; )
          B[ee + D] = i[D];
        for (; ++P < N; )
          (K || g < b) && (B[ee + a[P]] = n[g++]);
        return B;
      }
      function Wt(n, i) {
        var a = -1, d = n.length;
        for (i || (i = j(d)); ++a < d; )
          i[a] = n[a];
        return i;
      }
      function On(n, i, a, d) {
        var g = !a;
        a || (a = {});
        for (var b = -1, P = i.length; ++b < P; ) {
          var N = i[b], D = d ? d(a[N], n[N], N, a, n) : r;
          D === r && (D = n[N]), g ? $n(a, N, D) : oo(a, N, D);
        }
        return a;
      }
      function Qw(n, i) {
        return On(n, Il(n), i);
      }
      function eb(n, i) {
        return On(n, zd(n), i);
      }
      function ys(n, i) {
        return function(a, d) {
          var g = me(a) ? ox : Sw, b = i ? i() : {};
          return g(a, n, ae(d, 2), b);
        };
      }
      function Si(n) {
        return Ce(function(i, a) {
          var d = -1, g = a.length, b = g > 1 ? a[g - 1] : r, P = g > 2 ? a[2] : r;
          for (b = n.length > 3 && typeof b == "function" ? (g--, b) : r, P && jt(a[0], a[1], P) && (b = g < 3 ? r : b, g = 1), i = Ke(i); ++d < g; ) {
            var N = a[d];
            N && n(i, N, d, b);
          }
          return i;
        });
      }
      function Dd(n, i) {
        return function(a, d) {
          if (a == null)
            return a;
          if (!$t(a))
            return n(a, d);
          for (var g = a.length, b = i ? g : -1, P = Ke(a); (i ? b-- : ++b < g) && d(P[b], b, P) !== !1; )
            ;
          return a;
        };
      }
      function Id(n) {
        return function(i, a, d) {
          for (var g = -1, b = Ke(i), P = d(i), N = P.length; N--; ) {
            var D = P[n ? N : ++g];
            if (a(b[D], D, b) === !1)
              break;
          }
          return i;
        };
      }
      function tb(n, i, a) {
        var d = i & _, g = uo(n);
        function b() {
          var P = this && this !== xt && this instanceof b ? g : n;
          return P.apply(d ? a : this, arguments);
        }
        return b;
      }
      function jd(n) {
        return function(i) {
          i = We(i);
          var a = mi(i) ? vn(i) : r, d = a ? a[0] : i.charAt(0), g = a ? mr(a, 1).join("") : i.slice(1);
          return d[n]() + g;
        };
      }
      function Ci(n) {
        return function(i) {
          return Ja(Dh(Oh(i).replace(z0, "")), n, "");
        };
      }
      function uo(n) {
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
          var a = bi(n.prototype), d = n.apply(a, i);
          return tt(d) ? d : a;
        };
      }
      function nb(n, i, a) {
        var d = uo(n);
        function g() {
          for (var b = arguments.length, P = j(b), N = b, D = Ti(g); N--; )
            P[N] = arguments[N];
          var V = b < 3 && P[0] !== D && P[b - 1] !== D ? [] : ur(P, D);
          if (b -= V.length, b < a)
            return Bd(
              n,
              i,
              xs,
              g.placeholder,
              r,
              P,
              V,
              r,
              r,
              a - b
            );
          var F = this && this !== xt && this instanceof g ? d : n;
          return Kt(F, this, P);
        }
        return g;
      }
      function Ld(n) {
        return function(i, a, d) {
          var g = Ke(i);
          if (!$t(i)) {
            var b = ae(a, 3);
            i = gt(i), a = function(N) {
              return b(g[N], N, g);
            };
          }
          var P = n(i, a, d);
          return P > -1 ? g[b ? i[P] : P] : r;
        };
      }
      function kd(n) {
        return Hn(function(i) {
          var a = i.length, d = a, g = cn.prototype.thru;
          for (n && i.reverse(); d--; ) {
            var b = i[d];
            if (typeof b != "function")
              throw new ln(l);
            if (g && !P && Cs(b) == "wrapper")
              var P = new cn([], !0);
          }
          for (d = P ? d : a; ++d < a; ) {
            b = i[d];
            var N = Cs(b), D = N == "wrapper" ? Ol(b) : r;
            D && Ll(D[0]) && D[1] == ($ | M | L | H) && !D[4].length && D[9] == 1 ? P = P[Cs(D[0])].apply(P, D[3]) : P = b.length == 1 && Ll(b) ? P[N]() : P.thru(b);
          }
          return function() {
            var V = arguments, F = V[0];
            if (P && V.length == 1 && me(F))
              return P.plant(F).value();
            for (var B = 0, K = a ? i[B].apply(this, V) : F; ++B < a; )
              K = i[B].call(this, K);
            return K;
          };
        });
      }
      function xs(n, i, a, d, g, b, P, N, D, V) {
        var F = i & $, B = i & _, K = i & E, ee = i & (M | I), le = i & te, be = K ? r : uo(n);
        function ce() {
          for (var Ne = arguments.length, Ie = j(Ne), Zt = Ne; Zt--; )
            Ie[Zt] = arguments[Zt];
          if (ee)
            var Lt = Ti(ce), Jt = px(Ie, Lt);
          if (d && (Ie = Md(Ie, d, g, ee)), b && (Ie = Od(Ie, b, P, ee)), Ne -= Jt, ee && Ne < V) {
            var ct = ur(Ie, Lt);
            return Bd(
              n,
              i,
              xs,
              ce.placeholder,
              a,
              Ie,
              ct,
              N,
              D,
              V - Ne
            );
          }
          var wn = B ? a : this, Yn = K ? wn[n] : n;
          return Ne = Ie.length, N ? Ie = Sb(Ie, N) : le && Ne > 1 && Ie.reverse(), F && D < Ne && (Ie.length = D), this && this !== xt && this instanceof ce && (Yn = be || uo(Yn)), Yn.apply(wn, Ie);
        }
        return ce;
      }
      function Vd(n, i) {
        return function(a, d) {
          return Nw(a, n, i(d), {});
        };
      }
      function ws(n, i) {
        return function(a, d) {
          var g;
          if (a === r && d === r)
            return i;
          if (a !== r && (g = a), d !== r) {
            if (g === r)
              return d;
            typeof a == "string" || typeof d == "string" ? (a = qt(a), d = qt(d)) : (a = Cd(a), d = Cd(d)), g = n(a, d);
          }
          return g;
        };
      }
      function Al(n) {
        return Hn(function(i) {
          return i = Qe(i, Yt(ae())), Ce(function(a) {
            var d = this;
            return n(i, function(g) {
              return Kt(g, d, a);
            });
          });
        });
      }
      function bs(n, i) {
        i = i === r ? " " : qt(i);
        var a = i.length;
        if (a < 2)
          return a ? bl(i, n) : i;
        var d = bl(i, as(n / gi(i)));
        return mi(i) ? mr(vn(d), 0, n).join("") : d.slice(0, n);
      }
      function rb(n, i, a, d) {
        var g = i & _, b = uo(n);
        function P() {
          for (var N = -1, D = arguments.length, V = -1, F = d.length, B = j(F + D), K = this && this !== xt && this instanceof P ? b : n; ++V < F; )
            B[V] = d[V];
          for (; D--; )
            B[V++] = arguments[++N];
          return Kt(K, g ? a : this, B);
        }
        return P;
      }
      function Fd(n) {
        return function(i, a, d) {
          return d && typeof d != "number" && jt(i, a, d) && (a = d = r), i = Kn(i), a === r ? (a = i, i = 0) : a = Kn(a), d = d === r ? i < a ? 1 : -1 : Kn(d), $w(i, a, d, n);
        };
      }
      function Ss(n) {
        return function(i, a) {
          return typeof i == "string" && typeof a == "string" || (i = hn(i), a = hn(a)), n(i, a);
        };
      }
      function Bd(n, i, a, d, g, b, P, N, D, V) {
        var F = i & M, B = F ? P : r, K = F ? r : P, ee = F ? b : r, le = F ? r : b;
        i |= F ? L : U, i &= ~(F ? U : L), i & A || (i &= ~(_ | E));
        var be = [
          n,
          i,
          g,
          ee,
          B,
          le,
          K,
          N,
          D,
          V
        ], ce = a.apply(r, be);
        return Ll(n) && Jd(ce, be), ce.placeholder = d, Qd(ce, n, i);
      }
      function Rl(n) {
        var i = pt[n];
        return function(a, d) {
          if (a = hn(a), d = d == null ? 0 : Et(ye(d), 292), d && Qf(a)) {
            var g = (We(a) + "e").split("e"), b = i(g[0] + "e" + (+g[1] + d));
            return g = (We(b) + "e").split("e"), +(g[0] + "e" + (+g[1] - d));
          }
          return i(a);
        };
      }
      var ib = xi && 1 / Zo(new xi([, -0]))[1] == Z ? function(n) {
        return new xi(n);
      } : Zl;
      function Wd(n) {
        return function(i) {
          var a = At(i);
          return a == Ye ? ol(i) : a == Dt ? bx(i) : hx(i, n(i));
        };
      }
      function Un(n, i, a, d, g, b, P, N) {
        var D = i & E;
        if (!D && typeof n != "function")
          throw new ln(l);
        var V = d ? d.length : 0;
        if (V || (i &= ~(L | U), d = g = r), P = P === r ? P : mt(ye(P), 0), N = N === r ? N : ye(N), V -= g ? g.length : 0, i & U) {
          var F = d, B = g;
          d = g = r;
        }
        var K = D ? r : Ol(n), ee = [
          n,
          i,
          a,
          d,
          g,
          F,
          B,
          b,
          P,
          N
        ];
        if (K && xb(ee, K), n = ee[0], i = ee[1], a = ee[2], d = ee[3], g = ee[4], N = ee[9] = ee[9] === r ? D ? 0 : n.length : mt(ee[9] - V, 0), !N && i & (M | I) && (i &= ~(M | I)), !i || i == _)
          var le = tb(n, i, a);
        else
          i == M || i == I ? le = nb(n, i, N) : (i == L || i == (_ | L)) && !g.length ? le = rb(n, i, a, d) : le = xs.apply(r, ee);
        var be = K ? bd : Jd;
        return Qd(be(le, ee), n, i);
      }
      function $d(n, i, a, d) {
        return n === r || xn(n, yi[a]) && !He.call(d, a) ? i : n;
      }
      function Ud(n, i, a, d, g, b) {
        return tt(n) && tt(i) && (b.set(i, n), ms(n, i, r, Ud, b), b.delete(i)), n;
      }
      function ob(n) {
        return po(n) ? r : n;
      }
      function Hd(n, i, a, d, g, b) {
        var P = a & T, N = n.length, D = i.length;
        if (N != D && !(P && D > N))
          return !1;
        var V = b.get(n), F = b.get(i);
        if (V && F)
          return V == i && F == n;
        var B = -1, K = !0, ee = a & C ? new Ur() : r;
        for (b.set(n, i), b.set(i, n); ++B < N; ) {
          var le = n[B], be = i[B];
          if (d)
            var ce = P ? d(be, le, B, i, n, b) : d(le, be, B, n, i, b);
          if (ce !== r) {
            if (ce)
              continue;
            K = !1;
            break;
          }
          if (ee) {
            if (!Qa(i, function(Ne, Ie) {
              if (!Qi(ee, Ie) && (le === Ne || g(le, Ne, a, d, b)))
                return ee.push(Ie);
            })) {
              K = !1;
              break;
            }
          } else if (!(le === be || g(le, be, a, d, b))) {
            K = !1;
            break;
          }
        }
        return b.delete(n), b.delete(i), K;
      }
      function sb(n, i, a, d, g, b, P) {
        switch (a) {
          case En:
            if (n.byteLength != i.byteLength || n.byteOffset != i.byteOffset)
              return !1;
            n = n.buffer, i = i.buffer;
          case Tt:
            return !(n.byteLength != i.byteLength || !b(new rs(n), new rs(i)));
          case we:
          case Le:
          case dt:
            return xn(+n, +i);
          case ve:
            return n.name == i.name && n.message == i.message;
          case Ot:
          case gn:
            return n == i + "";
          case Ye:
            var N = ol;
          case Dt:
            var D = d & T;
            if (N || (N = Zo), n.size != i.size && !D)
              return !1;
            var V = P.get(n);
            if (V)
              return V == i;
            d |= C, P.set(n, i);
            var F = Hd(N(n), N(i), d, g, b, P);
            return P.delete(n), F;
          case ht:
            if (io)
              return io.call(n) == io.call(i);
        }
        return !1;
      }
      function ab(n, i, a, d, g, b) {
        var P = a & T, N = Nl(n), D = N.length, V = Nl(i), F = V.length;
        if (D != F && !P)
          return !1;
        for (var B = D; B--; ) {
          var K = N[B];
          if (!(P ? K in i : He.call(i, K)))
            return !1;
        }
        var ee = b.get(n), le = b.get(i);
        if (ee && le)
          return ee == i && le == n;
        var be = !0;
        b.set(n, i), b.set(i, n);
        for (var ce = P; ++B < D; ) {
          K = N[B];
          var Ne = n[K], Ie = i[K];
          if (d)
            var Zt = P ? d(Ie, Ne, K, i, n, b) : d(Ne, Ie, K, n, i, b);
          if (!(Zt === r ? Ne === Ie || g(Ne, Ie, a, d, b) : Zt)) {
            be = !1;
            break;
          }
          ce || (ce = K == "constructor");
        }
        if (be && !ce) {
          var Lt = n.constructor, Jt = i.constructor;
          Lt != Jt && "constructor" in n && "constructor" in i && !(typeof Lt == "function" && Lt instanceof Lt && typeof Jt == "function" && Jt instanceof Jt) && (be = !1);
        }
        return b.delete(n), b.delete(i), be;
      }
      function Hn(n) {
        return Vl(Xd(n, r, oh), n + "");
      }
      function Nl(n) {
        return ud(n, gt, Il);
      }
      function Ml(n) {
        return ud(n, Ut, zd);
      }
      var Ol = cs ? function(n) {
        return cs.get(n);
      } : Zl;
      function Cs(n) {
        for (var i = n.name + "", a = wi[i], d = He.call(wi, i) ? a.length : 0; d--; ) {
          var g = a[d], b = g.func;
          if (b == null || b == n)
            return g.name;
        }
        return i;
      }
      function Ti(n) {
        var i = He.call(w, "placeholder") ? w : n;
        return i.placeholder;
      }
      function ae() {
        var n = w.iteratee || ql;
        return n = n === ql ? hd : n, arguments.length ? n(arguments[0], arguments[1]) : n;
      }
      function Ts(n, i) {
        var a = n.__data__;
        return mb(i) ? a[typeof i == "string" ? "string" : "hash"] : a.map;
      }
      function Dl(n) {
        for (var i = gt(n), a = i.length; a--; ) {
          var d = i[a], g = n[d];
          i[a] = [d, g, Yd(g)];
        }
        return i;
      }
      function Gr(n, i) {
        var a = yx(n, i);
        return dd(a) ? a : r;
      }
      function lb(n) {
        var i = He.call(n, Wr), a = n[Wr];
        try {
          n[Wr] = r;
          var d = !0;
        } catch {
        }
        var g = ts.call(n);
        return d && (i ? n[Wr] = a : delete n[Wr]), g;
      }
      var Il = al ? function(n) {
        return n == null ? [] : (n = Ke(n), lr(al(n), function(i) {
          return Zf.call(n, i);
        }));
      } : Jl, zd = al ? function(n) {
        for (var i = []; n; )
          cr(i, Il(n)), n = is(n);
        return i;
      } : Jl, At = It;
      (ll && At(new ll(new ArrayBuffer(1))) != En || to && At(new to()) != Ye || cl && At(cl.resolve()) != rn || xi && At(new xi()) != Dt || no && At(new no()) != Pn) && (At = function(n) {
        var i = It(n), a = i == at ? n.constructor : r, d = a ? Kr(a) : "";
        if (d)
          switch (d) {
            case Hx:
              return En;
            case zx:
              return Ye;
            case Gx:
              return rn;
            case Kx:
              return Dt;
            case Yx:
              return Pn;
          }
        return i;
      });
      function cb(n, i, a) {
        for (var d = -1, g = a.length; ++d < g; ) {
          var b = a[d], P = b.size;
          switch (b.type) {
            case "drop":
              n += P;
              break;
            case "dropRight":
              i -= P;
              break;
            case "take":
              i = Et(i, n + P);
              break;
            case "takeRight":
              n = mt(n, i - P);
              break;
          }
        }
        return { start: n, end: i };
      }
      function ub(n) {
        var i = n.match(Wa);
        return i ? i[1].split($a) : [];
      }
      function Gd(n, i, a) {
        i = pr(i, n);
        for (var d = -1, g = i.length, b = !1; ++d < g; ) {
          var P = Dn(i[d]);
          if (!(b = n != null && a(n, P)))
            break;
          n = n[P];
        }
        return b || ++d != g ? b : (g = n == null ? 0 : n.length, !!g && Ms(g) && zn(P, g) && (me(n) || Yr(n)));
      }
      function fb(n) {
        var i = n.length, a = new n.constructor(i);
        return i && typeof n[0] == "string" && He.call(n, "index") && (a.index = n.index, a.input = n.input), a;
      }
      function Kd(n) {
        return typeof n.constructor == "function" && !fo(n) ? bi(is(n)) : {};
      }
      function db(n, i, a) {
        var d = n.constructor;
        switch (i) {
          case Tt:
            return El(n);
          case we:
          case Le:
            return new d(+n);
          case En:
            return qw(n, a);
          case An:
          case Gt:
          case Rn:
          case Nn:
          case Lr:
          case kr:
          case ir:
          case or:
          case Vr:
            return Rd(n, a);
          case Ye:
            return new d();
          case dt:
          case gn:
            return new d(n);
          case Ot:
            return Xw(n);
          case Dt:
            return new d();
          case ht:
            return Zw(n);
        }
      }
      function hb(n, i) {
        var a = i.length;
        if (!a)
          return n;
        var d = a - 1;
        return i[d] = (a > 1 ? "& " : "") + i[d], i = i.join(a > 2 ? ", " : " "), n.replace(Ba, `{
/* [wrapped with ` + i + `] */
`);
      }
      function pb(n) {
        return me(n) || Yr(n) || !!(Jf && n && n[Jf]);
      }
      function zn(n, i) {
        var a = typeof n;
        return i = i ?? q, !!i && (a == "number" || a != "symbol" && et.test(n)) && n > -1 && n % 1 == 0 && n < i;
      }
      function jt(n, i, a) {
        if (!tt(a))
          return !1;
        var d = typeof i;
        return (d == "number" ? $t(a) && zn(i, a.length) : d == "string" && i in a) ? xn(a[i], n) : !1;
      }
      function jl(n, i) {
        if (me(n))
          return !1;
        var a = typeof n;
        return a == "number" || a == "symbol" || a == "boolean" || n == null || Xt(n) ? !0 : zo.test(n) || !Ho.test(n) || i != null && n in Ke(i);
      }
      function mb(n) {
        var i = typeof n;
        return i == "string" || i == "number" || i == "symbol" || i == "boolean" ? n !== "__proto__" : n === null;
      }
      function Ll(n) {
        var i = Cs(n), a = w[i];
        if (typeof a != "function" || !(i in Oe.prototype))
          return !1;
        if (n === a)
          return !0;
        var d = Ol(a);
        return !!d && n === d[0];
      }
      function gb(n) {
        return !!Yf && Yf in n;
      }
      var vb = Qo ? Gn : Ql;
      function fo(n) {
        var i = n && n.constructor, a = typeof i == "function" && i.prototype || yi;
        return n === a;
      }
      function Yd(n) {
        return n === n && !tt(n);
      }
      function qd(n, i) {
        return function(a) {
          return a == null ? !1 : a[n] === i && (i !== r || n in Ke(a));
        };
      }
      function yb(n) {
        var i = Rs(n, function(d) {
          return a.size === h && a.clear(), d;
        }), a = i.cache;
        return i;
      }
      function xb(n, i) {
        var a = n[1], d = i[1], g = a | d, b = g < (_ | E | $), P = d == $ && a == M || d == $ && a == H && n[7].length <= i[8] || d == ($ | H) && i[7].length <= i[8] && a == M;
        if (!(b || P))
          return n;
        d & _ && (n[2] = i[2], g |= a & _ ? 0 : A);
        var N = i[3];
        if (N) {
          var D = n[3];
          n[3] = D ? Md(D, N, i[4]) : N, n[4] = D ? ur(n[3], p) : i[4];
        }
        return N = i[5], N && (D = n[5], n[5] = D ? Od(D, N, i[6]) : N, n[6] = D ? ur(n[5], p) : i[6]), N = i[7], N && (n[7] = N), d & $ && (n[8] = n[8] == null ? i[8] : Et(n[8], i[8])), n[9] == null && (n[9] = i[9]), n[0] = i[0], n[1] = g, n;
      }
      function wb(n) {
        var i = [];
        if (n != null)
          for (var a in Ke(n))
            i.push(a);
        return i;
      }
      function bb(n) {
        return ts.call(n);
      }
      function Xd(n, i, a) {
        return i = mt(i === r ? n.length - 1 : i, 0), function() {
          for (var d = arguments, g = -1, b = mt(d.length - i, 0), P = j(b); ++g < b; )
            P[g] = d[i + g];
          g = -1;
          for (var N = j(i + 1); ++g < i; )
            N[g] = d[g];
          return N[i] = a(P), Kt(n, this, N);
        };
      }
      function Zd(n, i) {
        return i.length < 2 ? n : zr(n, fn(i, 0, -1));
      }
      function Sb(n, i) {
        for (var a = n.length, d = Et(i.length, a), g = Wt(n); d--; ) {
          var b = i[d];
          n[d] = zn(b, a) ? g[b] : r;
        }
        return n;
      }
      function kl(n, i) {
        if (!(i === "constructor" && typeof n[i] == "function") && i != "__proto__")
          return n[i];
      }
      var Jd = eh(bd), ho = kx || function(n, i) {
        return xt.setTimeout(n, i);
      }, Vl = eh(zw);
      function Qd(n, i, a) {
        var d = i + "";
        return Vl(n, hb(d, Cb(ub(d), a)));
      }
      function eh(n) {
        var i = 0, a = 0;
        return function() {
          var d = Wx(), g = se - (d - a);
          if (a = d, g > 0) {
            if (++i >= J)
              return arguments[0];
          } else
            i = 0;
          return n.apply(r, arguments);
        };
      }
      function _s(n, i) {
        var a = -1, d = n.length, g = d - 1;
        for (i = i === r ? d : i; ++a < i; ) {
          var b = wl(a, g), P = n[b];
          n[b] = n[a], n[a] = P;
        }
        return n.length = i, n;
      }
      var th = yb(function(n) {
        var i = [];
        return n.charCodeAt(0) === 46 && i.push(""), n.replace(Va, function(a, d, g, b) {
          i.push(g ? b.replace(Y, "$1") : d || a);
        }), i;
      });
      function Dn(n) {
        if (typeof n == "string" || Xt(n))
          return n;
        var i = n + "";
        return i == "0" && 1 / n == -Z ? "-0" : i;
      }
      function Kr(n) {
        if (n != null) {
          try {
            return es.call(n);
          } catch {
          }
          try {
            return n + "";
          } catch {
          }
        }
        return "";
      }
      function Cb(n, i) {
        return an(Re, function(a) {
          var d = "_." + a[0];
          i & a[1] && !qo(n, d) && n.push(d);
        }), n.sort();
      }
      function nh(n) {
        if (n instanceof Oe)
          return n.clone();
        var i = new cn(n.__wrapped__, n.__chain__);
        return i.__actions__ = Wt(n.__actions__), i.__index__ = n.__index__, i.__values__ = n.__values__, i;
      }
      function Tb(n, i, a) {
        (a ? jt(n, i, a) : i === r) ? i = 1 : i = mt(ye(i), 0);
        var d = n == null ? 0 : n.length;
        if (!d || i < 1)
          return [];
        for (var g = 0, b = 0, P = j(as(d / i)); g < d; )
          P[b++] = fn(n, g, g += i);
        return P;
      }
      function _b(n) {
        for (var i = -1, a = n == null ? 0 : n.length, d = 0, g = []; ++i < a; ) {
          var b = n[i];
          b && (g[d++] = b);
        }
        return g;
      }
      function Pb() {
        var n = arguments.length;
        if (!n)
          return [];
        for (var i = j(n - 1), a = arguments[0], d = n; d--; )
          i[d - 1] = arguments[d];
        return cr(me(a) ? Wt(a) : [a], wt(i, 1));
      }
      var Eb = Ce(function(n, i) {
        return lt(n) ? so(n, wt(i, 1, lt, !0)) : [];
      }), Ab = Ce(function(n, i) {
        var a = dn(i);
        return lt(a) && (a = r), lt(n) ? so(n, wt(i, 1, lt, !0), ae(a, 2)) : [];
      }), Rb = Ce(function(n, i) {
        var a = dn(i);
        return lt(a) && (a = r), lt(n) ? so(n, wt(i, 1, lt, !0), r, a) : [];
      });
      function Nb(n, i, a) {
        var d = n == null ? 0 : n.length;
        return d ? (i = a || i === r ? 1 : ye(i), fn(n, i < 0 ? 0 : i, d)) : [];
      }
      function Mb(n, i, a) {
        var d = n == null ? 0 : n.length;
        return d ? (i = a || i === r ? 1 : ye(i), i = d - i, fn(n, 0, i < 0 ? 0 : i)) : [];
      }
      function Ob(n, i) {
        return n && n.length ? vs(n, ae(i, 3), !0, !0) : [];
      }
      function Db(n, i) {
        return n && n.length ? vs(n, ae(i, 3), !0) : [];
      }
      function Ib(n, i, a, d) {
        var g = n == null ? 0 : n.length;
        return g ? (a && typeof a != "number" && jt(n, i, a) && (a = 0, d = g), Pw(n, i, a, d)) : [];
      }
      function rh(n, i, a) {
        var d = n == null ? 0 : n.length;
        if (!d)
          return -1;
        var g = a == null ? 0 : ye(a);
        return g < 0 && (g = mt(d + g, 0)), Xo(n, ae(i, 3), g);
      }
      function ih(n, i, a) {
        var d = n == null ? 0 : n.length;
        if (!d)
          return -1;
        var g = d - 1;
        return a !== r && (g = ye(a), g = a < 0 ? mt(d + g, 0) : Et(g, d - 1)), Xo(n, ae(i, 3), g, !0);
      }
      function oh(n) {
        var i = n == null ? 0 : n.length;
        return i ? wt(n, 1) : [];
      }
      function jb(n) {
        var i = n == null ? 0 : n.length;
        return i ? wt(n, Z) : [];
      }
      function Lb(n, i) {
        var a = n == null ? 0 : n.length;
        return a ? (i = i === r ? 1 : ye(i), wt(n, i)) : [];
      }
      function kb(n) {
        for (var i = -1, a = n == null ? 0 : n.length, d = {}; ++i < a; ) {
          var g = n[i];
          d[g[0]] = g[1];
        }
        return d;
      }
      function sh(n) {
        return n && n.length ? n[0] : r;
      }
      function Vb(n, i, a) {
        var d = n == null ? 0 : n.length;
        if (!d)
          return -1;
        var g = a == null ? 0 : ye(a);
        return g < 0 && (g = mt(d + g, 0)), pi(n, i, g);
      }
      function Fb(n) {
        var i = n == null ? 0 : n.length;
        return i ? fn(n, 0, -1) : [];
      }
      var Bb = Ce(function(n) {
        var i = Qe(n, _l);
        return i.length && i[0] === n[0] ? ml(i) : [];
      }), Wb = Ce(function(n) {
        var i = dn(n), a = Qe(n, _l);
        return i === dn(a) ? i = r : a.pop(), a.length && a[0] === n[0] ? ml(a, ae(i, 2)) : [];
      }), $b = Ce(function(n) {
        var i = dn(n), a = Qe(n, _l);
        return i = typeof i == "function" ? i : r, i && a.pop(), a.length && a[0] === n[0] ? ml(a, r, i) : [];
      });
      function Ub(n, i) {
        return n == null ? "" : Fx.call(n, i);
      }
      function dn(n) {
        var i = n == null ? 0 : n.length;
        return i ? n[i - 1] : r;
      }
      function Hb(n, i, a) {
        var d = n == null ? 0 : n.length;
        if (!d)
          return -1;
        var g = d;
        return a !== r && (g = ye(a), g = g < 0 ? mt(d + g, 0) : Et(g, d - 1)), i === i ? Cx(n, i, g) : Xo(n, Bf, g, !0);
      }
      function zb(n, i) {
        return n && n.length ? vd(n, ye(i)) : r;
      }
      var Gb = Ce(ah);
      function ah(n, i) {
        return n && n.length && i && i.length ? xl(n, i) : n;
      }
      function Kb(n, i, a) {
        return n && n.length && i && i.length ? xl(n, i, ae(a, 2)) : n;
      }
      function Yb(n, i, a) {
        return n && n.length && i && i.length ? xl(n, i, r, a) : n;
      }
      var qb = Hn(function(n, i) {
        var a = n == null ? 0 : n.length, d = fl(n, i);
        return wd(n, Qe(i, function(g) {
          return zn(g, a) ? +g : g;
        }).sort(Nd)), d;
      });
      function Xb(n, i) {
        var a = [];
        if (!(n && n.length))
          return a;
        var d = -1, g = [], b = n.length;
        for (i = ae(i, 3); ++d < b; ) {
          var P = n[d];
          i(P, d, n) && (a.push(P), g.push(d));
        }
        return wd(n, g), a;
      }
      function Fl(n) {
        return n == null ? n : Ux.call(n);
      }
      function Zb(n, i, a) {
        var d = n == null ? 0 : n.length;
        return d ? (a && typeof a != "number" && jt(n, i, a) ? (i = 0, a = d) : (i = i == null ? 0 : ye(i), a = a === r ? d : ye(a)), fn(n, i, a)) : [];
      }
      function Jb(n, i) {
        return gs(n, i);
      }
      function Qb(n, i, a) {
        return Sl(n, i, ae(a, 2));
      }
      function e1(n, i) {
        var a = n == null ? 0 : n.length;
        if (a) {
          var d = gs(n, i);
          if (d < a && xn(n[d], i))
            return d;
        }
        return -1;
      }
      function t1(n, i) {
        return gs(n, i, !0);
      }
      function n1(n, i, a) {
        return Sl(n, i, ae(a, 2), !0);
      }
      function r1(n, i) {
        var a = n == null ? 0 : n.length;
        if (a) {
          var d = gs(n, i, !0) - 1;
          if (xn(n[d], i))
            return d;
        }
        return -1;
      }
      function i1(n) {
        return n && n.length ? Sd(n) : [];
      }
      function o1(n, i) {
        return n && n.length ? Sd(n, ae(i, 2)) : [];
      }
      function s1(n) {
        var i = n == null ? 0 : n.length;
        return i ? fn(n, 1, i) : [];
      }
      function a1(n, i, a) {
        return n && n.length ? (i = a || i === r ? 1 : ye(i), fn(n, 0, i < 0 ? 0 : i)) : [];
      }
      function l1(n, i, a) {
        var d = n == null ? 0 : n.length;
        return d ? (i = a || i === r ? 1 : ye(i), i = d - i, fn(n, i < 0 ? 0 : i, d)) : [];
      }
      function c1(n, i) {
        return n && n.length ? vs(n, ae(i, 3), !1, !0) : [];
      }
      function u1(n, i) {
        return n && n.length ? vs(n, ae(i, 3)) : [];
      }
      var f1 = Ce(function(n) {
        return hr(wt(n, 1, lt, !0));
      }), d1 = Ce(function(n) {
        var i = dn(n);
        return lt(i) && (i = r), hr(wt(n, 1, lt, !0), ae(i, 2));
      }), h1 = Ce(function(n) {
        var i = dn(n);
        return i = typeof i == "function" ? i : r, hr(wt(n, 1, lt, !0), r, i);
      });
      function p1(n) {
        return n && n.length ? hr(n) : [];
      }
      function m1(n, i) {
        return n && n.length ? hr(n, ae(i, 2)) : [];
      }
      function g1(n, i) {
        return i = typeof i == "function" ? i : r, n && n.length ? hr(n, r, i) : [];
      }
      function Bl(n) {
        if (!(n && n.length))
          return [];
        var i = 0;
        return n = lr(n, function(a) {
          if (lt(a))
            return i = mt(a.length, i), !0;
        }), rl(i, function(a) {
          return Qe(n, el(a));
        });
      }
      function lh(n, i) {
        if (!(n && n.length))
          return [];
        var a = Bl(n);
        return i == null ? a : Qe(a, function(d) {
          return Kt(i, r, d);
        });
      }
      var v1 = Ce(function(n, i) {
        return lt(n) ? so(n, i) : [];
      }), y1 = Ce(function(n) {
        return Tl(lr(n, lt));
      }), x1 = Ce(function(n) {
        var i = dn(n);
        return lt(i) && (i = r), Tl(lr(n, lt), ae(i, 2));
      }), w1 = Ce(function(n) {
        var i = dn(n);
        return i = typeof i == "function" ? i : r, Tl(lr(n, lt), r, i);
      }), b1 = Ce(Bl);
      function S1(n, i) {
        return Pd(n || [], i || [], oo);
      }
      function C1(n, i) {
        return Pd(n || [], i || [], co);
      }
      var T1 = Ce(function(n) {
        var i = n.length, a = i > 1 ? n[i - 1] : r;
        return a = typeof a == "function" ? (n.pop(), a) : r, lh(n, a);
      });
      function ch(n) {
        var i = w(n);
        return i.__chain__ = !0, i;
      }
      function _1(n, i) {
        return i(n), n;
      }
      function Ps(n, i) {
        return i(n);
      }
      var P1 = Hn(function(n) {
        var i = n.length, a = i ? n[0] : 0, d = this.__wrapped__, g = function(b) {
          return fl(b, n);
        };
        return i > 1 || this.__actions__.length || !(d instanceof Oe) || !zn(a) ? this.thru(g) : (d = d.slice(a, +a + (i ? 1 : 0)), d.__actions__.push({
          func: Ps,
          args: [g],
          thisArg: r
        }), new cn(d, this.__chain__).thru(function(b) {
          return i && !b.length && b.push(r), b;
        }));
      });
      function E1() {
        return ch(this);
      }
      function A1() {
        return new cn(this.value(), this.__chain__);
      }
      function R1() {
        this.__values__ === r && (this.__values__ = Ch(this.value()));
        var n = this.__index__ >= this.__values__.length, i = n ? r : this.__values__[this.__index__++];
        return { done: n, value: i };
      }
      function N1() {
        return this;
      }
      function M1(n) {
        for (var i, a = this; a instanceof fs; ) {
          var d = nh(a);
          d.__index__ = 0, d.__values__ = r, i ? g.__wrapped__ = d : i = d;
          var g = d;
          a = a.__wrapped__;
        }
        return g.__wrapped__ = n, i;
      }
      function O1() {
        var n = this.__wrapped__;
        if (n instanceof Oe) {
          var i = n;
          return this.__actions__.length && (i = new Oe(this)), i = i.reverse(), i.__actions__.push({
            func: Ps,
            args: [Fl],
            thisArg: r
          }), new cn(i, this.__chain__);
        }
        return this.thru(Fl);
      }
      function D1() {
        return _d(this.__wrapped__, this.__actions__);
      }
      var I1 = ys(function(n, i, a) {
        He.call(n, a) ? ++n[a] : $n(n, a, 1);
      });
      function j1(n, i, a) {
        var d = me(n) ? Vf : _w;
        return a && jt(n, i, a) && (i = r), d(n, ae(i, 3));
      }
      function L1(n, i) {
        var a = me(n) ? lr : ld;
        return a(n, ae(i, 3));
      }
      var k1 = Ld(rh), V1 = Ld(ih);
      function F1(n, i) {
        return wt(Es(n, i), 1);
      }
      function B1(n, i) {
        return wt(Es(n, i), Z);
      }
      function W1(n, i, a) {
        return a = a === r ? 1 : ye(a), wt(Es(n, i), a);
      }
      function uh(n, i) {
        var a = me(n) ? an : dr;
        return a(n, ae(i, 3));
      }
      function fh(n, i) {
        var a = me(n) ? sx : ad;
        return a(n, ae(i, 3));
      }
      var $1 = ys(function(n, i, a) {
        He.call(n, a) ? n[a].push(i) : $n(n, a, [i]);
      });
      function U1(n, i, a, d) {
        n = $t(n) ? n : Pi(n), a = a && !d ? ye(a) : 0;
        var g = n.length;
        return a < 0 && (a = mt(g + a, 0)), Os(n) ? a <= g && n.indexOf(i, a) > -1 : !!g && pi(n, i, a) > -1;
      }
      var H1 = Ce(function(n, i, a) {
        var d = -1, g = typeof i == "function", b = $t(n) ? j(n.length) : [];
        return dr(n, function(P) {
          b[++d] = g ? Kt(i, P, a) : ao(P, i, a);
        }), b;
      }), z1 = ys(function(n, i, a) {
        $n(n, a, i);
      });
      function Es(n, i) {
        var a = me(n) ? Qe : pd;
        return a(n, ae(i, 3));
      }
      function G1(n, i, a, d) {
        return n == null ? [] : (me(i) || (i = i == null ? [] : [i]), a = d ? r : a, me(a) || (a = a == null ? [] : [a]), yd(n, i, a));
      }
      var K1 = ys(function(n, i, a) {
        n[a ? 0 : 1].push(i);
      }, function() {
        return [[], []];
      });
      function Y1(n, i, a) {
        var d = me(n) ? Ja : $f, g = arguments.length < 3;
        return d(n, ae(i, 4), a, g, dr);
      }
      function q1(n, i, a) {
        var d = me(n) ? ax : $f, g = arguments.length < 3;
        return d(n, ae(i, 4), a, g, ad);
      }
      function X1(n, i) {
        var a = me(n) ? lr : ld;
        return a(n, Ns(ae(i, 3)));
      }
      function Z1(n) {
        var i = me(n) ? rd : Uw;
        return i(n);
      }
      function J1(n, i, a) {
        (a ? jt(n, i, a) : i === r) ? i = 1 : i = ye(i);
        var d = me(n) ? ww : Hw;
        return d(n, i);
      }
      function Q1(n) {
        var i = me(n) ? bw : Gw;
        return i(n);
      }
      function eS(n) {
        if (n == null)
          return 0;
        if ($t(n))
          return Os(n) ? gi(n) : n.length;
        var i = At(n);
        return i == Ye || i == Dt ? n.size : vl(n).length;
      }
      function tS(n, i, a) {
        var d = me(n) ? Qa : Kw;
        return a && jt(n, i, a) && (i = r), d(n, ae(i, 3));
      }
      var nS = Ce(function(n, i) {
        if (n == null)
          return [];
        var a = i.length;
        return a > 1 && jt(n, i[0], i[1]) ? i = [] : a > 2 && jt(i[0], i[1], i[2]) && (i = [i[0]]), yd(n, wt(i, 1), []);
      }), As = Lx || function() {
        return xt.Date.now();
      };
      function rS(n, i) {
        if (typeof i != "function")
          throw new ln(l);
        return n = ye(n), function() {
          if (--n < 1)
            return i.apply(this, arguments);
        };
      }
      function dh(n, i, a) {
        return i = a ? r : i, i = n && i == null ? n.length : i, Un(n, $, r, r, r, r, i);
      }
      function hh(n, i) {
        var a;
        if (typeof i != "function")
          throw new ln(l);
        return n = ye(n), function() {
          return --n > 0 && (a = i.apply(this, arguments)), n <= 1 && (i = r), a;
        };
      }
      var Wl = Ce(function(n, i, a) {
        var d = _;
        if (a.length) {
          var g = ur(a, Ti(Wl));
          d |= L;
        }
        return Un(n, d, i, a, g);
      }), ph = Ce(function(n, i, a) {
        var d = _ | E;
        if (a.length) {
          var g = ur(a, Ti(ph));
          d |= L;
        }
        return Un(i, d, n, a, g);
      });
      function mh(n, i, a) {
        i = a ? r : i;
        var d = Un(n, M, r, r, r, r, r, i);
        return d.placeholder = mh.placeholder, d;
      }
      function gh(n, i, a) {
        i = a ? r : i;
        var d = Un(n, I, r, r, r, r, r, i);
        return d.placeholder = gh.placeholder, d;
      }
      function vh(n, i, a) {
        var d, g, b, P, N, D, V = 0, F = !1, B = !1, K = !0;
        if (typeof n != "function")
          throw new ln(l);
        i = hn(i) || 0, tt(a) && (F = !!a.leading, B = "maxWait" in a, b = B ? mt(hn(a.maxWait) || 0, i) : b, K = "trailing" in a ? !!a.trailing : K);
        function ee(ct) {
          var wn = d, Yn = g;
          return d = g = r, V = ct, P = n.apply(Yn, wn), P;
        }
        function le(ct) {
          return V = ct, N = ho(Ne, i), F ? ee(ct) : P;
        }
        function be(ct) {
          var wn = ct - D, Yn = ct - V, Lh = i - wn;
          return B ? Et(Lh, b - Yn) : Lh;
        }
        function ce(ct) {
          var wn = ct - D, Yn = ct - V;
          return D === r || wn >= i || wn < 0 || B && Yn >= b;
        }
        function Ne() {
          var ct = As();
          if (ce(ct))
            return Ie(ct);
          N = ho(Ne, be(ct));
        }
        function Ie(ct) {
          return N = r, K && d ? ee(ct) : (d = g = r, P);
        }
        function Zt() {
          N !== r && Ed(N), V = 0, d = D = g = N = r;
        }
        function Lt() {
          return N === r ? P : Ie(As());
        }
        function Jt() {
          var ct = As(), wn = ce(ct);
          if (d = arguments, g = this, D = ct, wn) {
            if (N === r)
              return le(D);
            if (B)
              return Ed(N), N = ho(Ne, i), ee(D);
          }
          return N === r && (N = ho(Ne, i)), P;
        }
        return Jt.cancel = Zt, Jt.flush = Lt, Jt;
      }
      var iS = Ce(function(n, i) {
        return sd(n, 1, i);
      }), oS = Ce(function(n, i, a) {
        return sd(n, hn(i) || 0, a);
      });
      function sS(n) {
        return Un(n, te);
      }
      function Rs(n, i) {
        if (typeof n != "function" || i != null && typeof i != "function")
          throw new ln(l);
        var a = function() {
          var d = arguments, g = i ? i.apply(this, d) : d[0], b = a.cache;
          if (b.has(g))
            return b.get(g);
          var P = n.apply(this, d);
          return a.cache = b.set(g, P) || b, P;
        };
        return a.cache = new (Rs.Cache || Wn)(), a;
      }
      Rs.Cache = Wn;
      function Ns(n) {
        if (typeof n != "function")
          throw new ln(l);
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
      function aS(n) {
        return hh(2, n);
      }
      var lS = Yw(function(n, i) {
        i = i.length == 1 && me(i[0]) ? Qe(i[0], Yt(ae())) : Qe(wt(i, 1), Yt(ae()));
        var a = i.length;
        return Ce(function(d) {
          for (var g = -1, b = Et(d.length, a); ++g < b; )
            d[g] = i[g].call(this, d[g]);
          return Kt(n, this, d);
        });
      }), $l = Ce(function(n, i) {
        var a = ur(i, Ti($l));
        return Un(n, L, r, i, a);
      }), yh = Ce(function(n, i) {
        var a = ur(i, Ti(yh));
        return Un(n, U, r, i, a);
      }), cS = Hn(function(n, i) {
        return Un(n, H, r, r, r, i);
      });
      function uS(n, i) {
        if (typeof n != "function")
          throw new ln(l);
        return i = i === r ? i : ye(i), Ce(n, i);
      }
      function fS(n, i) {
        if (typeof n != "function")
          throw new ln(l);
        return i = i == null ? 0 : mt(ye(i), 0), Ce(function(a) {
          var d = a[i], g = mr(a, 0, i);
          return d && cr(g, d), Kt(n, this, g);
        });
      }
      function dS(n, i, a) {
        var d = !0, g = !0;
        if (typeof n != "function")
          throw new ln(l);
        return tt(a) && (d = "leading" in a ? !!a.leading : d, g = "trailing" in a ? !!a.trailing : g), vh(n, i, {
          leading: d,
          maxWait: i,
          trailing: g
        });
      }
      function hS(n) {
        return dh(n, 1);
      }
      function pS(n, i) {
        return $l(Pl(i), n);
      }
      function mS() {
        if (!arguments.length)
          return [];
        var n = arguments[0];
        return me(n) ? n : [n];
      }
      function gS(n) {
        return un(n, y);
      }
      function vS(n, i) {
        return i = typeof i == "function" ? i : r, un(n, y, i);
      }
      function yS(n) {
        return un(n, v | y);
      }
      function xS(n, i) {
        return i = typeof i == "function" ? i : r, un(n, v | y, i);
      }
      function wS(n, i) {
        return i == null || od(n, i, gt(i));
      }
      function xn(n, i) {
        return n === i || n !== n && i !== i;
      }
      var bS = Ss(pl), SS = Ss(function(n, i) {
        return n >= i;
      }), Yr = fd(/* @__PURE__ */ function() {
        return arguments;
      }()) ? fd : function(n) {
        return ot(n) && He.call(n, "callee") && !Zf.call(n, "callee");
      }, me = j.isArray, CS = Of ? Yt(Of) : Mw;
      function $t(n) {
        return n != null && Ms(n.length) && !Gn(n);
      }
      function lt(n) {
        return ot(n) && $t(n);
      }
      function TS(n) {
        return n === !0 || n === !1 || ot(n) && It(n) == we;
      }
      var gr = Vx || Ql, _S = Df ? Yt(Df) : Ow;
      function PS(n) {
        return ot(n) && n.nodeType === 1 && !po(n);
      }
      function ES(n) {
        if (n == null)
          return !0;
        if ($t(n) && (me(n) || typeof n == "string" || typeof n.splice == "function" || gr(n) || _i(n) || Yr(n)))
          return !n.length;
        var i = At(n);
        if (i == Ye || i == Dt)
          return !n.size;
        if (fo(n))
          return !vl(n).length;
        for (var a in n)
          if (He.call(n, a))
            return !1;
        return !0;
      }
      function AS(n, i) {
        return lo(n, i);
      }
      function RS(n, i, a) {
        a = typeof a == "function" ? a : r;
        var d = a ? a(n, i) : r;
        return d === r ? lo(n, i, r, a) : !!d;
      }
      function Ul(n) {
        if (!ot(n))
          return !1;
        var i = It(n);
        return i == ve || i == Se || typeof n.message == "string" && typeof n.name == "string" && !po(n);
      }
      function NS(n) {
        return typeof n == "number" && Qf(n);
      }
      function Gn(n) {
        if (!tt(n))
          return !1;
        var i = It(n);
        return i == Pe || i == st || i == X || i == Vt;
      }
      function xh(n) {
        return typeof n == "number" && n == ye(n);
      }
      function Ms(n) {
        return typeof n == "number" && n > -1 && n % 1 == 0 && n <= q;
      }
      function tt(n) {
        var i = typeof n;
        return n != null && (i == "object" || i == "function");
      }
      function ot(n) {
        return n != null && typeof n == "object";
      }
      var wh = If ? Yt(If) : Iw;
      function MS(n, i) {
        return n === i || gl(n, i, Dl(i));
      }
      function OS(n, i, a) {
        return a = typeof a == "function" ? a : r, gl(n, i, Dl(i), a);
      }
      function DS(n) {
        return bh(n) && n != +n;
      }
      function IS(n) {
        if (vb(n))
          throw new he(c);
        return dd(n);
      }
      function jS(n) {
        return n === null;
      }
      function LS(n) {
        return n == null;
      }
      function bh(n) {
        return typeof n == "number" || ot(n) && It(n) == dt;
      }
      function po(n) {
        if (!ot(n) || It(n) != at)
          return !1;
        var i = is(n);
        if (i === null)
          return !0;
        var a = He.call(i, "constructor") && i.constructor;
        return typeof a == "function" && a instanceof a && es.call(a) == Ox;
      }
      var Hl = jf ? Yt(jf) : jw;
      function kS(n) {
        return xh(n) && n >= -q && n <= q;
      }
      var Sh = Lf ? Yt(Lf) : Lw;
      function Os(n) {
        return typeof n == "string" || !me(n) && ot(n) && It(n) == gn;
      }
      function Xt(n) {
        return typeof n == "symbol" || ot(n) && It(n) == ht;
      }
      var _i = kf ? Yt(kf) : kw;
      function VS(n) {
        return n === r;
      }
      function FS(n) {
        return ot(n) && At(n) == Pn;
      }
      function BS(n) {
        return ot(n) && It(n) == ci;
      }
      var WS = Ss(yl), $S = Ss(function(n, i) {
        return n <= i;
      });
      function Ch(n) {
        if (!n)
          return [];
        if ($t(n))
          return Os(n) ? vn(n) : Wt(n);
        if (eo && n[eo])
          return wx(n[eo]());
        var i = At(n), a = i == Ye ? ol : i == Dt ? Zo : Pi;
        return a(n);
      }
      function Kn(n) {
        if (!n)
          return n === 0 ? n : 0;
        if (n = hn(n), n === Z || n === -Z) {
          var i = n < 0 ? -1 : 1;
          return i * G;
        }
        return n === n ? n : 0;
      }
      function ye(n) {
        var i = Kn(n), a = i % 1;
        return i === i ? a ? i - a : i : 0;
      }
      function Th(n) {
        return n ? Hr(ye(n), 0, Ae) : 0;
      }
      function hn(n) {
        if (typeof n == "number")
          return n;
        if (Xt(n))
          return pe;
        if (tt(n)) {
          var i = typeof n.valueOf == "function" ? n.valueOf() : n;
          n = tt(i) ? i + "" : i;
        }
        if (typeof n != "string")
          return n === 0 ? n : +n;
        n = Uf(n);
        var a = Me.test(n);
        return a || vt.test(n) ? rx(n.slice(2), a ? 2 : 8) : Ue.test(n) ? pe : +n;
      }
      function _h(n) {
        return On(n, Ut(n));
      }
      function US(n) {
        return n ? Hr(ye(n), -q, q) : n === 0 ? n : 0;
      }
      function We(n) {
        return n == null ? "" : qt(n);
      }
      var HS = Si(function(n, i) {
        if (fo(i) || $t(i)) {
          On(i, gt(i), n);
          return;
        }
        for (var a in i)
          He.call(i, a) && oo(n, a, i[a]);
      }), Ph = Si(function(n, i) {
        On(i, Ut(i), n);
      }), Ds = Si(function(n, i, a, d) {
        On(i, Ut(i), n, d);
      }), zS = Si(function(n, i, a, d) {
        On(i, gt(i), n, d);
      }), GS = Hn(fl);
      function KS(n, i) {
        var a = bi(n);
        return i == null ? a : id(a, i);
      }
      var YS = Ce(function(n, i) {
        n = Ke(n);
        var a = -1, d = i.length, g = d > 2 ? i[2] : r;
        for (g && jt(i[0], i[1], g) && (d = 1); ++a < d; )
          for (var b = i[a], P = Ut(b), N = -1, D = P.length; ++N < D; ) {
            var V = P[N], F = n[V];
            (F === r || xn(F, yi[V]) && !He.call(n, V)) && (n[V] = b[V]);
          }
        return n;
      }), qS = Ce(function(n) {
        return n.push(r, Ud), Kt(Eh, r, n);
      });
      function XS(n, i) {
        return Ff(n, ae(i, 3), Mn);
      }
      function ZS(n, i) {
        return Ff(n, ae(i, 3), hl);
      }
      function JS(n, i) {
        return n == null ? n : dl(n, ae(i, 3), Ut);
      }
      function QS(n, i) {
        return n == null ? n : cd(n, ae(i, 3), Ut);
      }
      function eC(n, i) {
        return n && Mn(n, ae(i, 3));
      }
      function tC(n, i) {
        return n && hl(n, ae(i, 3));
      }
      function nC(n) {
        return n == null ? [] : ps(n, gt(n));
      }
      function rC(n) {
        return n == null ? [] : ps(n, Ut(n));
      }
      function zl(n, i, a) {
        var d = n == null ? r : zr(n, i);
        return d === r ? a : d;
      }
      function iC(n, i) {
        return n != null && Gd(n, i, Ew);
      }
      function Gl(n, i) {
        return n != null && Gd(n, i, Aw);
      }
      var oC = Vd(function(n, i, a) {
        i != null && typeof i.toString != "function" && (i = ts.call(i)), n[i] = a;
      }, Yl(Ht)), sC = Vd(function(n, i, a) {
        i != null && typeof i.toString != "function" && (i = ts.call(i)), He.call(n, i) ? n[i].push(a) : n[i] = [a];
      }, ae), aC = Ce(ao);
      function gt(n) {
        return $t(n) ? nd(n) : vl(n);
      }
      function Ut(n) {
        return $t(n) ? nd(n, !0) : Vw(n);
      }
      function lC(n, i) {
        var a = {};
        return i = ae(i, 3), Mn(n, function(d, g, b) {
          $n(a, i(d, g, b), d);
        }), a;
      }
      function cC(n, i) {
        var a = {};
        return i = ae(i, 3), Mn(n, function(d, g, b) {
          $n(a, g, i(d, g, b));
        }), a;
      }
      var uC = Si(function(n, i, a) {
        ms(n, i, a);
      }), Eh = Si(function(n, i, a, d) {
        ms(n, i, a, d);
      }), fC = Hn(function(n, i) {
        var a = {};
        if (n == null)
          return a;
        var d = !1;
        i = Qe(i, function(b) {
          return b = pr(b, n), d || (d = b.length > 1), b;
        }), On(n, Ml(n), a), d && (a = un(a, v | x | y, ob));
        for (var g = i.length; g--; )
          Cl(a, i[g]);
        return a;
      });
      function dC(n, i) {
        return Ah(n, Ns(ae(i)));
      }
      var hC = Hn(function(n, i) {
        return n == null ? {} : Bw(n, i);
      });
      function Ah(n, i) {
        if (n == null)
          return {};
        var a = Qe(Ml(n), function(d) {
          return [d];
        });
        return i = ae(i), xd(n, a, function(d, g) {
          return i(d, g[0]);
        });
      }
      function pC(n, i, a) {
        i = pr(i, n);
        var d = -1, g = i.length;
        for (g || (g = 1, n = r); ++d < g; ) {
          var b = n == null ? r : n[Dn(i[d])];
          b === r && (d = g, b = a), n = Gn(b) ? b.call(n) : b;
        }
        return n;
      }
      function mC(n, i, a) {
        return n == null ? n : co(n, i, a);
      }
      function gC(n, i, a, d) {
        return d = typeof d == "function" ? d : r, n == null ? n : co(n, i, a, d);
      }
      var Rh = Wd(gt), Nh = Wd(Ut);
      function vC(n, i, a) {
        var d = me(n), g = d || gr(n) || _i(n);
        if (i = ae(i, 4), a == null) {
          var b = n && n.constructor;
          g ? a = d ? new b() : [] : tt(n) ? a = Gn(b) ? bi(is(n)) : {} : a = {};
        }
        return (g ? an : Mn)(n, function(P, N, D) {
          return i(a, P, N, D);
        }), a;
      }
      function yC(n, i) {
        return n == null ? !0 : Cl(n, i);
      }
      function xC(n, i, a) {
        return n == null ? n : Td(n, i, Pl(a));
      }
      function wC(n, i, a, d) {
        return d = typeof d == "function" ? d : r, n == null ? n : Td(n, i, Pl(a), d);
      }
      function Pi(n) {
        return n == null ? [] : il(n, gt(n));
      }
      function bC(n) {
        return n == null ? [] : il(n, Ut(n));
      }
      function SC(n, i, a) {
        return a === r && (a = i, i = r), a !== r && (a = hn(a), a = a === a ? a : 0), i !== r && (i = hn(i), i = i === i ? i : 0), Hr(hn(n), i, a);
      }
      function CC(n, i, a) {
        return i = Kn(i), a === r ? (a = i, i = 0) : a = Kn(a), n = hn(n), Rw(n, i, a);
      }
      function TC(n, i, a) {
        if (a && typeof a != "boolean" && jt(n, i, a) && (i = a = r), a === r && (typeof i == "boolean" ? (a = i, i = r) : typeof n == "boolean" && (a = n, n = r)), n === r && i === r ? (n = 0, i = 1) : (n = Kn(n), i === r ? (i = n, n = 0) : i = Kn(i)), n > i) {
          var d = n;
          n = i, i = d;
        }
        if (a || n % 1 || i % 1) {
          var g = ed();
          return Et(n + g * (i - n + nx("1e-" + ((g + "").length - 1))), i);
        }
        return wl(n, i);
      }
      var _C = Ci(function(n, i, a) {
        return i = i.toLowerCase(), n + (a ? Mh(i) : i);
      });
      function Mh(n) {
        return Kl(We(n).toLowerCase());
      }
      function Oh(n) {
        return n = We(n), n && n.replace(it, mx).replace(G0, "");
      }
      function PC(n, i, a) {
        n = We(n), i = qt(i);
        var d = n.length;
        a = a === r ? d : Hr(ye(a), 0, d);
        var g = a;
        return a -= i.length, a >= 0 && n.slice(a, g) == i;
      }
      function EC(n) {
        return n = We(n), n && _t.test(n) ? n.replace(De, gx) : n;
      }
      function AC(n) {
        return n = We(n), n && Go.test(n) ? n.replace(Zi, "\\$&") : n;
      }
      var RC = Ci(function(n, i, a) {
        return n + (a ? "-" : "") + i.toLowerCase();
      }), NC = Ci(function(n, i, a) {
        return n + (a ? " " : "") + i.toLowerCase();
      }), MC = jd("toLowerCase");
      function OC(n, i, a) {
        n = We(n), i = ye(i);
        var d = i ? gi(n) : 0;
        if (!i || d >= i)
          return n;
        var g = (i - d) / 2;
        return bs(ls(g), a) + n + bs(as(g), a);
      }
      function DC(n, i, a) {
        n = We(n), i = ye(i);
        var d = i ? gi(n) : 0;
        return i && d < i ? n + bs(i - d, a) : n;
      }
      function IC(n, i, a) {
        n = We(n), i = ye(i);
        var d = i ? gi(n) : 0;
        return i && d < i ? bs(i - d, a) + n : n;
      }
      function jC(n, i, a) {
        return a || i == null ? i = 0 : i && (i = +i), $x(We(n).replace(di, ""), i || 0);
      }
      function LC(n, i, a) {
        return (a ? jt(n, i, a) : i === r) ? i = 1 : i = ye(i), bl(We(n), i);
      }
      function kC() {
        var n = arguments, i = We(n[0]);
        return n.length < 3 ? i : i.replace(n[1], n[2]);
      }
      var VC = Ci(function(n, i, a) {
        return n + (a ? "_" : "") + i.toLowerCase();
      });
      function FC(n, i, a) {
        return a && typeof a != "number" && jt(n, i, a) && (i = a = r), a = a === r ? Ae : a >>> 0, a ? (n = We(n), n && (typeof i == "string" || i != null && !Hl(i)) && (i = qt(i), !i && mi(n)) ? mr(vn(n), 0, a) : n.split(i, a)) : [];
      }
      var BC = Ci(function(n, i, a) {
        return n + (a ? " " : "") + Kl(i);
      });
      function WC(n, i, a) {
        return n = We(n), a = a == null ? 0 : Hr(ye(a), 0, n.length), i = qt(i), n.slice(a, a + i.length) == i;
      }
      function $C(n, i, a) {
        var d = w.templateSettings;
        a && jt(n, i, a) && (i = r), n = We(n), i = Ds({}, i, d, $d);
        var g = Ds({}, i.imports, d.imports, $d), b = gt(g), P = il(g, b), N, D, V = 0, F = i.interpolate || yt, B = "__p += '", K = sl(
          (i.escape || yt).source + "|" + F.source + "|" + (F === fi ? fe : yt).source + "|" + (i.evaluate || yt).source + "|$",
          "g"
        ), ee = "//# sourceURL=" + (He.call(i, "sourceURL") ? (i.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++Z0 + "]") + `
`;
        n.replace(K, function(ce, Ne, Ie, Zt, Lt, Jt) {
          return Ie || (Ie = Zt), B += n.slice(V, Jt).replace(ar, vx), Ne && (N = !0, B += `' +
__e(` + Ne + `) +
'`), Lt && (D = !0, B += `';
` + Lt + `;
__p += '`), Ie && (B += `' +
((__t = (` + Ie + `)) == null ? '' : __t) +
'`), V = Jt + ce.length, ce;
        }), B += `';
`;
        var le = He.call(i, "variable") && i.variable;
        if (!le)
          B = `with (obj) {
` + B + `
}
`;
        else if (W.test(le))
          throw new he(u);
        B = (D ? B.replace(Fr, "") : B).replace(Ft, "$1").replace(ui, "$1;"), B = "function(" + (le || "obj") + `) {
` + (le ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (N ? ", __e = _.escape" : "") + (D ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + B + `return __p
}`;
        var be = Ih(function() {
          return ke(b, ee + "return " + B).apply(r, P);
        });
        if (be.source = B, Ul(be))
          throw be;
        return be;
      }
      function UC(n) {
        return We(n).toLowerCase();
      }
      function HC(n) {
        return We(n).toUpperCase();
      }
      function zC(n, i, a) {
        if (n = We(n), n && (a || i === r))
          return Uf(n);
        if (!n || !(i = qt(i)))
          return n;
        var d = vn(n), g = vn(i), b = Hf(d, g), P = zf(d, g) + 1;
        return mr(d, b, P).join("");
      }
      function GC(n, i, a) {
        if (n = We(n), n && (a || i === r))
          return n.slice(0, Kf(n) + 1);
        if (!n || !(i = qt(i)))
          return n;
        var d = vn(n), g = zf(d, vn(i)) + 1;
        return mr(d, 0, g).join("");
      }
      function KC(n, i, a) {
        if (n = We(n), n && (a || i === r))
          return n.replace(di, "");
        if (!n || !(i = qt(i)))
          return n;
        var d = vn(n), g = Hf(d, vn(i));
        return mr(d, g).join("");
      }
      function YC(n, i) {
        var a = re, d = de;
        if (tt(i)) {
          var g = "separator" in i ? i.separator : g;
          a = "length" in i ? ye(i.length) : a, d = "omission" in i ? qt(i.omission) : d;
        }
        n = We(n);
        var b = n.length;
        if (mi(n)) {
          var P = vn(n);
          b = P.length;
        }
        if (a >= b)
          return n;
        var N = a - gi(d);
        if (N < 1)
          return d;
        var D = P ? mr(P, 0, N).join("") : n.slice(0, N);
        if (g === r)
          return D + d;
        if (P && (N += D.length - N), Hl(g)) {
          if (n.slice(N).search(g)) {
            var V, F = D;
            for (g.global || (g = sl(g.source, We(je.exec(g)) + "g")), g.lastIndex = 0; V = g.exec(F); )
              var B = V.index;
            D = D.slice(0, B === r ? N : B);
          }
        } else if (n.indexOf(qt(g), N) != N) {
          var K = D.lastIndexOf(g);
          K > -1 && (D = D.slice(0, K));
        }
        return D + d;
      }
      function qC(n) {
        return n = We(n), n && Be.test(n) ? n.replace(oe, Tx) : n;
      }
      var XC = Ci(function(n, i, a) {
        return n + (a ? " " : "") + i.toUpperCase();
      }), Kl = jd("toUpperCase");
      function Dh(n, i, a) {
        return n = We(n), i = a ? r : i, i === r ? xx(n) ? Ex(n) : ux(n) : n.match(i) || [];
      }
      var Ih = Ce(function(n, i) {
        try {
          return Kt(n, r, i);
        } catch (a) {
          return Ul(a) ? a : new he(a);
        }
      }), ZC = Hn(function(n, i) {
        return an(i, function(a) {
          a = Dn(a), $n(n, a, Wl(n[a], n));
        }), n;
      });
      function JC(n) {
        var i = n == null ? 0 : n.length, a = ae();
        return n = i ? Qe(n, function(d) {
          if (typeof d[1] != "function")
            throw new ln(l);
          return [a(d[0]), d[1]];
        }) : [], Ce(function(d) {
          for (var g = -1; ++g < i; ) {
            var b = n[g];
            if (Kt(b[0], this, d))
              return Kt(b[1], this, d);
          }
        });
      }
      function QC(n) {
        return Tw(un(n, v));
      }
      function Yl(n) {
        return function() {
          return n;
        };
      }
      function eT(n, i) {
        return n == null || n !== n ? i : n;
      }
      var tT = kd(), nT = kd(!0);
      function Ht(n) {
        return n;
      }
      function ql(n) {
        return hd(typeof n == "function" ? n : un(n, v));
      }
      function rT(n) {
        return md(un(n, v));
      }
      function iT(n, i) {
        return gd(n, un(i, v));
      }
      var oT = Ce(function(n, i) {
        return function(a) {
          return ao(a, n, i);
        };
      }), sT = Ce(function(n, i) {
        return function(a) {
          return ao(n, a, i);
        };
      });
      function Xl(n, i, a) {
        var d = gt(i), g = ps(i, d);
        a == null && !(tt(i) && (g.length || !d.length)) && (a = i, i = n, n = this, g = ps(i, gt(i)));
        var b = !(tt(a) && "chain" in a) || !!a.chain, P = Gn(n);
        return an(g, function(N) {
          var D = i[N];
          n[N] = D, P && (n.prototype[N] = function() {
            var V = this.__chain__;
            if (b || V) {
              var F = n(this.__wrapped__), B = F.__actions__ = Wt(this.__actions__);
              return B.push({ func: D, args: arguments, thisArg: n }), F.__chain__ = V, F;
            }
            return D.apply(n, cr([this.value()], arguments));
          });
        }), n;
      }
      function aT() {
        return xt._ === this && (xt._ = Dx), this;
      }
      function Zl() {
      }
      function lT(n) {
        return n = ye(n), Ce(function(i) {
          return vd(i, n);
        });
      }
      var cT = Al(Qe), uT = Al(Vf), fT = Al(Qa);
      function jh(n) {
        return jl(n) ? el(Dn(n)) : Ww(n);
      }
      function dT(n) {
        return function(i) {
          return n == null ? r : zr(n, i);
        };
      }
      var hT = Fd(), pT = Fd(!0);
      function Jl() {
        return [];
      }
      function Ql() {
        return !1;
      }
      function mT() {
        return {};
      }
      function gT() {
        return "";
      }
      function vT() {
        return !0;
      }
      function yT(n, i) {
        if (n = ye(n), n < 1 || n > q)
          return [];
        var a = Ae, d = Et(n, Ae);
        i = ae(i), n -= Ae;
        for (var g = rl(d, i); ++a < n; )
          i(a);
        return g;
      }
      function xT(n) {
        return me(n) ? Qe(n, Dn) : Xt(n) ? [n] : Wt(th(We(n)));
      }
      function wT(n) {
        var i = ++Mx;
        return We(n) + i;
      }
      var bT = ws(function(n, i) {
        return n + i;
      }, 0), ST = Rl("ceil"), CT = ws(function(n, i) {
        return n / i;
      }, 1), TT = Rl("floor");
      function _T(n) {
        return n && n.length ? hs(n, Ht, pl) : r;
      }
      function PT(n, i) {
        return n && n.length ? hs(n, ae(i, 2), pl) : r;
      }
      function ET(n) {
        return Wf(n, Ht);
      }
      function AT(n, i) {
        return Wf(n, ae(i, 2));
      }
      function RT(n) {
        return n && n.length ? hs(n, Ht, yl) : r;
      }
      function NT(n, i) {
        return n && n.length ? hs(n, ae(i, 2), yl) : r;
      }
      var MT = ws(function(n, i) {
        return n * i;
      }, 1), OT = Rl("round"), DT = ws(function(n, i) {
        return n - i;
      }, 0);
      function IT(n) {
        return n && n.length ? nl(n, Ht) : 0;
      }
      function jT(n, i) {
        return n && n.length ? nl(n, ae(i, 2)) : 0;
      }
      return w.after = rS, w.ary = dh, w.assign = HS, w.assignIn = Ph, w.assignInWith = Ds, w.assignWith = zS, w.at = GS, w.before = hh, w.bind = Wl, w.bindAll = ZC, w.bindKey = ph, w.castArray = mS, w.chain = ch, w.chunk = Tb, w.compact = _b, w.concat = Pb, w.cond = JC, w.conforms = QC, w.constant = Yl, w.countBy = I1, w.create = KS, w.curry = mh, w.curryRight = gh, w.debounce = vh, w.defaults = YS, w.defaultsDeep = qS, w.defer = iS, w.delay = oS, w.difference = Eb, w.differenceBy = Ab, w.differenceWith = Rb, w.drop = Nb, w.dropRight = Mb, w.dropRightWhile = Ob, w.dropWhile = Db, w.fill = Ib, w.filter = L1, w.flatMap = F1, w.flatMapDeep = B1, w.flatMapDepth = W1, w.flatten = oh, w.flattenDeep = jb, w.flattenDepth = Lb, w.flip = sS, w.flow = tT, w.flowRight = nT, w.fromPairs = kb, w.functions = nC, w.functionsIn = rC, w.groupBy = $1, w.initial = Fb, w.intersection = Bb, w.intersectionBy = Wb, w.intersectionWith = $b, w.invert = oC, w.invertBy = sC, w.invokeMap = H1, w.iteratee = ql, w.keyBy = z1, w.keys = gt, w.keysIn = Ut, w.map = Es, w.mapKeys = lC, w.mapValues = cC, w.matches = rT, w.matchesProperty = iT, w.memoize = Rs, w.merge = uC, w.mergeWith = Eh, w.method = oT, w.methodOf = sT, w.mixin = Xl, w.negate = Ns, w.nthArg = lT, w.omit = fC, w.omitBy = dC, w.once = aS, w.orderBy = G1, w.over = cT, w.overArgs = lS, w.overEvery = uT, w.overSome = fT, w.partial = $l, w.partialRight = yh, w.partition = K1, w.pick = hC, w.pickBy = Ah, w.property = jh, w.propertyOf = dT, w.pull = Gb, w.pullAll = ah, w.pullAllBy = Kb, w.pullAllWith = Yb, w.pullAt = qb, w.range = hT, w.rangeRight = pT, w.rearg = cS, w.reject = X1, w.remove = Xb, w.rest = uS, w.reverse = Fl, w.sampleSize = J1, w.set = mC, w.setWith = gC, w.shuffle = Q1, w.slice = Zb, w.sortBy = nS, w.sortedUniq = i1, w.sortedUniqBy = o1, w.split = FC, w.spread = fS, w.tail = s1, w.take = a1, w.takeRight = l1, w.takeRightWhile = c1, w.takeWhile = u1, w.tap = _1, w.throttle = dS, w.thru = Ps, w.toArray = Ch, w.toPairs = Rh, w.toPairsIn = Nh, w.toPath = xT, w.toPlainObject = _h, w.transform = vC, w.unary = hS, w.union = f1, w.unionBy = d1, w.unionWith = h1, w.uniq = p1, w.uniqBy = m1, w.uniqWith = g1, w.unset = yC, w.unzip = Bl, w.unzipWith = lh, w.update = xC, w.updateWith = wC, w.values = Pi, w.valuesIn = bC, w.without = v1, w.words = Dh, w.wrap = pS, w.xor = y1, w.xorBy = x1, w.xorWith = w1, w.zip = b1, w.zipObject = S1, w.zipObjectDeep = C1, w.zipWith = T1, w.entries = Rh, w.entriesIn = Nh, w.extend = Ph, w.extendWith = Ds, Xl(w, w), w.add = bT, w.attempt = Ih, w.camelCase = _C, w.capitalize = Mh, w.ceil = ST, w.clamp = SC, w.clone = gS, w.cloneDeep = yS, w.cloneDeepWith = xS, w.cloneWith = vS, w.conformsTo = wS, w.deburr = Oh, w.defaultTo = eT, w.divide = CT, w.endsWith = PC, w.eq = xn, w.escape = EC, w.escapeRegExp = AC, w.every = j1, w.find = k1, w.findIndex = rh, w.findKey = XS, w.findLast = V1, w.findLastIndex = ih, w.findLastKey = ZS, w.floor = TT, w.forEach = uh, w.forEachRight = fh, w.forIn = JS, w.forInRight = QS, w.forOwn = eC, w.forOwnRight = tC, w.get = zl, w.gt = bS, w.gte = SS, w.has = iC, w.hasIn = Gl, w.head = sh, w.identity = Ht, w.includes = U1, w.indexOf = Vb, w.inRange = CC, w.invoke = aC, w.isArguments = Yr, w.isArray = me, w.isArrayBuffer = CS, w.isArrayLike = $t, w.isArrayLikeObject = lt, w.isBoolean = TS, w.isBuffer = gr, w.isDate = _S, w.isElement = PS, w.isEmpty = ES, w.isEqual = AS, w.isEqualWith = RS, w.isError = Ul, w.isFinite = NS, w.isFunction = Gn, w.isInteger = xh, w.isLength = Ms, w.isMap = wh, w.isMatch = MS, w.isMatchWith = OS, w.isNaN = DS, w.isNative = IS, w.isNil = LS, w.isNull = jS, w.isNumber = bh, w.isObject = tt, w.isObjectLike = ot, w.isPlainObject = po, w.isRegExp = Hl, w.isSafeInteger = kS, w.isSet = Sh, w.isString = Os, w.isSymbol = Xt, w.isTypedArray = _i, w.isUndefined = VS, w.isWeakMap = FS, w.isWeakSet = BS, w.join = Ub, w.kebabCase = RC, w.last = dn, w.lastIndexOf = Hb, w.lowerCase = NC, w.lowerFirst = MC, w.lt = WS, w.lte = $S, w.max = _T, w.maxBy = PT, w.mean = ET, w.meanBy = AT, w.min = RT, w.minBy = NT, w.stubArray = Jl, w.stubFalse = Ql, w.stubObject = mT, w.stubString = gT, w.stubTrue = vT, w.multiply = MT, w.nth = zb, w.noConflict = aT, w.noop = Zl, w.now = As, w.pad = OC, w.padEnd = DC, w.padStart = IC, w.parseInt = jC, w.random = TC, w.reduce = Y1, w.reduceRight = q1, w.repeat = LC, w.replace = kC, w.result = pC, w.round = OT, w.runInContext = O, w.sample = Z1, w.size = eS, w.snakeCase = VC, w.some = tS, w.sortedIndex = Jb, w.sortedIndexBy = Qb, w.sortedIndexOf = e1, w.sortedLastIndex = t1, w.sortedLastIndexBy = n1, w.sortedLastIndexOf = r1, w.startCase = BC, w.startsWith = WC, w.subtract = DT, w.sum = IT, w.sumBy = jT, w.template = $C, w.times = yT, w.toFinite = Kn, w.toInteger = ye, w.toLength = Th, w.toLower = UC, w.toNumber = hn, w.toSafeInteger = US, w.toString = We, w.toUpper = HC, w.trim = zC, w.trimEnd = GC, w.trimStart = KC, w.truncate = YC, w.unescape = qC, w.uniqueId = wT, w.upperCase = XC, w.upperFirst = Kl, w.each = uh, w.eachRight = fh, w.first = sh, Xl(w, function() {
        var n = {};
        return Mn(w, function(i, a) {
          He.call(w.prototype, a) || (n[a] = i);
        }), n;
      }(), { chain: !1 }), w.VERSION = o, an(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(n) {
        w[n].placeholder = w;
      }), an(["drop", "take"], function(n, i) {
        Oe.prototype[n] = function(a) {
          a = a === r ? 1 : mt(ye(a), 0);
          var d = this.__filtered__ && !i ? new Oe(this) : this.clone();
          return d.__filtered__ ? d.__takeCount__ = Et(a, d.__takeCount__) : d.__views__.push({
            size: Et(a, Ae),
            type: n + (d.__dir__ < 0 ? "Right" : "")
          }), d;
        }, Oe.prototype[n + "Right"] = function(a) {
          return this.reverse()[n](a).reverse();
        };
      }), an(["filter", "map", "takeWhile"], function(n, i) {
        var a = i + 1, d = a == ne || a == ie;
        Oe.prototype[n] = function(g) {
          var b = this.clone();
          return b.__iteratees__.push({
            iteratee: ae(g, 3),
            type: a
          }), b.__filtered__ = b.__filtered__ || d, b;
        };
      }), an(["head", "last"], function(n, i) {
        var a = "take" + (i ? "Right" : "");
        Oe.prototype[n] = function() {
          return this[a](1).value()[0];
        };
      }), an(["initial", "tail"], function(n, i) {
        var a = "drop" + (i ? "" : "Right");
        Oe.prototype[n] = function() {
          return this.__filtered__ ? new Oe(this) : this[a](1);
        };
      }), Oe.prototype.compact = function() {
        return this.filter(Ht);
      }, Oe.prototype.find = function(n) {
        return this.filter(n).head();
      }, Oe.prototype.findLast = function(n) {
        return this.reverse().find(n);
      }, Oe.prototype.invokeMap = Ce(function(n, i) {
        return typeof n == "function" ? new Oe(this) : this.map(function(a) {
          return ao(a, n, i);
        });
      }), Oe.prototype.reject = function(n) {
        return this.filter(Ns(ae(n)));
      }, Oe.prototype.slice = function(n, i) {
        n = ye(n);
        var a = this;
        return a.__filtered__ && (n > 0 || i < 0) ? new Oe(a) : (n < 0 ? a = a.takeRight(-n) : n && (a = a.drop(n)), i !== r && (i = ye(i), a = i < 0 ? a.dropRight(-i) : a.take(i - n)), a);
      }, Oe.prototype.takeRightWhile = function(n) {
        return this.reverse().takeWhile(n).reverse();
      }, Oe.prototype.toArray = function() {
        return this.take(Ae);
      }, Mn(Oe.prototype, function(n, i) {
        var a = /^(?:filter|find|map|reject)|While$/.test(i), d = /^(?:head|last)$/.test(i), g = w[d ? "take" + (i == "last" ? "Right" : "") : i], b = d || /^find/.test(i);
        g && (w.prototype[i] = function() {
          var P = this.__wrapped__, N = d ? [1] : arguments, D = P instanceof Oe, V = N[0], F = D || me(P), B = function(Ne) {
            var Ie = g.apply(w, cr([Ne], N));
            return d && K ? Ie[0] : Ie;
          };
          F && a && typeof V == "function" && V.length != 1 && (D = F = !1);
          var K = this.__chain__, ee = !!this.__actions__.length, le = b && !K, be = D && !ee;
          if (!b && F) {
            P = be ? P : new Oe(this);
            var ce = n.apply(P, N);
            return ce.__actions__.push({ func: Ps, args: [B], thisArg: r }), new cn(ce, K);
          }
          return le && be ? n.apply(this, N) : (ce = this.thru(B), le ? d ? ce.value()[0] : ce.value() : ce);
        });
      }), an(["pop", "push", "shift", "sort", "splice", "unshift"], function(n) {
        var i = Jo[n], a = /^(?:push|sort|unshift)$/.test(n) ? "tap" : "thru", d = /^(?:pop|shift)$/.test(n);
        w.prototype[n] = function() {
          var g = arguments;
          if (d && !this.__chain__) {
            var b = this.value();
            return i.apply(me(b) ? b : [], g);
          }
          return this[a](function(P) {
            return i.apply(me(P) ? P : [], g);
          });
        };
      }), Mn(Oe.prototype, function(n, i) {
        var a = w[i];
        if (a) {
          var d = a.name + "";
          He.call(wi, d) || (wi[d] = []), wi[d].push({ name: i, func: a });
        }
      }), wi[xs(r, E).name] = [{
        name: "wrapper",
        func: r
      }], Oe.prototype.clone = qx, Oe.prototype.reverse = Xx, Oe.prototype.value = Zx, w.prototype.at = P1, w.prototype.chain = E1, w.prototype.commit = A1, w.prototype.next = R1, w.prototype.plant = M1, w.prototype.reverse = O1, w.prototype.toJSON = w.prototype.valueOf = w.prototype.value = D1, w.prototype.first = w.prototype.head, eo && (w.prototype[eo] = N1), w;
    }, vi = Ax();
    Br ? ((Br.exports = vi)._ = vi, qa._ = vi) : xt._ = vi;
  }).call(mo);
})(Js, Js.exports);
var $T = Js.exports;
const UT = /* @__PURE__ */ FT($T);
function HT(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function Lm(...e) {
  return (t) => e.forEach((r) => HT(r, t));
}
function rt(...e) {
  return S.useCallback(Lm(...e), e);
}
var ti = S.forwardRef((e, t) => {
  const { children: r, ...o } = e, s = S.Children.toArray(r), c = s.find(zT);
  if (c) {
    const l = c.props.children, u = s.map((f) => f === c ? S.Children.count(l) > 1 ? S.Children.only(null) : S.isValidElement(l) ? l.props.children : null : f);
    return /* @__PURE__ */ m.jsx(_c, { ...o, ref: t, children: S.isValidElement(l) ? S.cloneElement(l, void 0, u) : null });
  }
  return /* @__PURE__ */ m.jsx(_c, { ...o, ref: t, children: r });
});
ti.displayName = "Slot";
var _c = S.forwardRef((e, t) => {
  const { children: r, ...o } = e;
  if (S.isValidElement(r)) {
    const s = KT(r);
    return S.cloneElement(r, {
      ...GT(o, r.props),
      // @ts-ignore
      ref: t ? Lm(t, s) : s
    });
  }
  return S.Children.count(r) > 1 ? S.Children.only(null) : null;
});
_c.displayName = "SlotClone";
var km = ({ children: e }) => /* @__PURE__ */ m.jsx(m.Fragment, { children: e });
function zT(e) {
  return S.isValidElement(e) && e.type === km;
}
function GT(e, t) {
  const r = { ...t };
  for (const o in t) {
    const s = e[o], c = t[o];
    /^on[A-Z]/.test(o) ? s && c ? r[o] = (...u) => {
      c(...u), s(...u);
    } : s && (r[o] = s) : o === "style" ? r[o] = { ...s, ...c } : o === "className" && (r[o] = [s, c].filter(Boolean).join(" "));
  }
  return { ...e, ...r };
}
function KT(e) {
  var o, s;
  let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = (s = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : s.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
function Vm(e) {
  var t, r, o = "";
  if (typeof e == "string" || typeof e == "number")
    o += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (r = Vm(e[t])) && (o && (o += " "), o += r);
    else
      for (t in e)
        e[t] && (o && (o += " "), o += t);
  return o;
}
function YT() {
  for (var e, t, r = 0, o = ""; r < arguments.length; )
    (e = arguments[r++]) && (t = Vm(e)) && (o && (o += " "), o += t);
  return o;
}
const Fh = (e) => typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e, Bh = YT, iu = (e, t) => (r) => {
  var o;
  if ((t == null ? void 0 : t.variants) == null)
    return Bh(e, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
  const { variants: s, defaultVariants: c } = t, l = Object.keys(s).map((h) => {
    const p = r == null ? void 0 : r[h], v = c == null ? void 0 : c[h];
    if (p === null)
      return null;
    const x = Fh(p) || Fh(v);
    return s[h][x];
  }), u = r && Object.entries(r).reduce((h, p) => {
    let [v, x] = p;
    return x === void 0 || (h[v] = x), h;
  }, {}), f = t == null || (o = t.compoundVariants) === null || o === void 0 ? void 0 : o.reduce((h, p) => {
    let { class: v, className: x, ...y } = p;
    return Object.entries(y).every((T) => {
      let [C, _] = T;
      return Array.isArray(_) ? _.includes({
        ...c,
        ...u
      }[C]) : {
        ...c,
        ...u
      }[C] === _;
    }) ? [
      ...h,
      v,
      x
    ] : h;
  }, []);
  return Bh(e, l, f, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
};
function Fm(e) {
  var t, r, o = "";
  if (typeof e == "string" || typeof e == "number")
    o += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var s = e.length;
      for (t = 0; t < s; t++)
        e[t] && (r = Fm(e[t])) && (o && (o += " "), o += r);
    } else
      for (r in e)
        e[r] && (o && (o += " "), o += r);
  return o;
}
function qT() {
  for (var e, t, r = 0, o = "", s = arguments.length; r < s; r++)
    (e = arguments[r]) && (t = Fm(e)) && (o && (o += " "), o += t);
  return o;
}
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const XT = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Bm = (...e) => e.filter((t, r, o) => !!t && t.trim() !== "" && o.indexOf(t) === r).join(" ").trim();
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var ZT = {
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
const JT = ma(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: c,
    iconNode: l,
    ...u
  }, f) => Zs(
    "svg",
    {
      ref: f,
      ...ZT,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: o ? Number(r) * 24 / Number(t) : r,
      className: Bm("lucide", s),
      ...u
    },
    [
      ...l.map(([h, p]) => Zs(h, p)),
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
const ft = (e, t) => {
  const r = ma(
    ({ className: o, ...s }, c) => Zs(JT, {
      ref: c,
      iconNode: t,
      className: Bm(`lucide-${XT(e)}`, o),
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
const QT = ft("Award", [
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
const ou = ft("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const va = ft("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const e_ = ft("ChevronUp", [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const t_ = ft("CircleCheckBig", [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ro = ft("CircleHelp", [
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
const n_ = ft("Crosshair", [
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
const Wm = ft("ExternalLink", [
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
const Wh = ft("FileText", [
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
const r_ = ft("Info", [
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
const Pc = ft("ListTodo", [
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
const $m = ft("Mail", [
  ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }]
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Um = ft("Phone", [
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
const i_ = ft("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $h = ft("Settings", [
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
const o_ = ft("Target", [
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
const Ec = ft("TriangleAlert", [
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
const s_ = ft("User", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const a_ = ft("Users", [
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
const Hm = ft("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const l_ = ft("Zap", [
  [
    "path",
    {
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
      key: "1xq2db"
    }
  ]
]), su = "-", c_ = (e) => {
  const t = f_(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: o
  } = e;
  return {
    getClassGroupId: (l) => {
      const u = l.split(su);
      return u[0] === "" && u.length !== 1 && u.shift(), zm(u, t) || u_(l);
    },
    getConflictingClassGroupIds: (l, u) => {
      const f = r[l] || [];
      return u && o[l] ? [...f, ...o[l]] : f;
    }
  };
}, zm = (e, t) => {
  var l;
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], o = t.nextPart.get(r), s = o ? zm(e.slice(1), o) : void 0;
  if (s)
    return s;
  if (t.validators.length === 0)
    return;
  const c = e.join(su);
  return (l = t.validators.find(({
    validator: u
  }) => u(c))) == null ? void 0 : l.classGroupId;
}, Uh = /^\[(.+)\]$/, u_ = (e) => {
  if (Uh.test(e)) {
    const t = Uh.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, f_ = (e) => {
  const {
    theme: t,
    prefix: r
  } = e, o = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return h_(Object.entries(e.classGroups), r).forEach(([c, l]) => {
    Ac(l, o, c, t);
  }), o;
}, Ac = (e, t, r, o) => {
  e.forEach((s) => {
    if (typeof s == "string") {
      const c = s === "" ? t : Hh(t, s);
      c.classGroupId = r;
      return;
    }
    if (typeof s == "function") {
      if (d_(s)) {
        Ac(s(o), t, r, o);
        return;
      }
      t.validators.push({
        validator: s,
        classGroupId: r
      });
      return;
    }
    Object.entries(s).forEach(([c, l]) => {
      Ac(l, Hh(t, c), r, o);
    });
  });
}, Hh = (e, t) => {
  let r = e;
  return t.split(su).forEach((o) => {
    r.nextPart.has(o) || r.nextPart.set(o, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(o);
  }), r;
}, d_ = (e) => e.isThemeGetter, h_ = (e, t) => t ? e.map(([r, o]) => {
  const s = o.map((c) => typeof c == "string" ? t + c : typeof c == "object" ? Object.fromEntries(Object.entries(c).map(([l, u]) => [t + l, u])) : c);
  return [r, s];
}) : e, p_ = (e) => {
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
}, Gm = "!", m_ = (e) => {
  const {
    separator: t,
    experimentalParseClassName: r
  } = e, o = t.length === 1, s = t[0], c = t.length, l = (u) => {
    const f = [];
    let h = 0, p = 0, v;
    for (let _ = 0; _ < u.length; _++) {
      let E = u[_];
      if (h === 0) {
        if (E === s && (o || u.slice(_, _ + c) === t)) {
          f.push(u.slice(p, _)), p = _ + c;
          continue;
        }
        if (E === "/") {
          v = _;
          continue;
        }
      }
      E === "[" ? h++ : E === "]" && h--;
    }
    const x = f.length === 0 ? u : u.substring(p), y = x.startsWith(Gm), T = y ? x.substring(1) : x, C = v && v > p ? v - p : void 0;
    return {
      modifiers: f,
      hasImportantModifier: y,
      baseClassName: T,
      maybePostfixModifierPosition: C
    };
  };
  return r ? (u) => r({
    className: u,
    parseClassName: l
  }) : l;
}, g_ = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let r = [];
  return e.forEach((o) => {
    o[0] === "[" ? (t.push(...r.sort(), o), r = []) : r.push(o);
  }), t.push(...r.sort()), t;
}, v_ = (e) => ({
  cache: p_(e.cacheSize),
  parseClassName: m_(e),
  ...c_(e)
}), y_ = /\s+/, x_ = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: o,
    getConflictingClassGroupIds: s
  } = t, c = [], l = e.trim().split(y_);
  let u = "";
  for (let f = l.length - 1; f >= 0; f -= 1) {
    const h = l[f], {
      modifiers: p,
      hasImportantModifier: v,
      baseClassName: x,
      maybePostfixModifierPosition: y
    } = r(h);
    let T = !!y, C = o(T ? x.substring(0, y) : x);
    if (!C) {
      if (!T) {
        u = h + (u.length > 0 ? " " + u : u);
        continue;
      }
      if (C = o(x), !C) {
        u = h + (u.length > 0 ? " " + u : u);
        continue;
      }
      T = !1;
    }
    const _ = g_(p).join(":"), E = v ? _ + Gm : _, A = E + C;
    if (c.includes(A))
      continue;
    c.push(A);
    const M = s(C, T);
    for (let I = 0; I < M.length; ++I) {
      const L = M[I];
      c.push(E + L);
    }
    u = h + (u.length > 0 ? " " + u : u);
  }
  return u;
};
function w_() {
  let e = 0, t, r, o = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = Km(t)) && (o && (o += " "), o += r);
  return o;
}
const Km = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let o = 0; o < e.length; o++)
    e[o] && (t = Km(e[o])) && (r && (r += " "), r += t);
  return r;
};
function b_(e, ...t) {
  let r, o, s, c = l;
  function l(f) {
    const h = t.reduce((p, v) => v(p), e());
    return r = v_(h), o = r.cache.get, s = r.cache.set, c = u, u(f);
  }
  function u(f) {
    const h = o(f);
    if (h)
      return h;
    const p = x_(f, r);
    return s(f, p), p;
  }
  return function() {
    return c(w_.apply(null, arguments));
  };
}
const Ze = (e) => {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}, Ym = /^\[(?:([a-z-]+):)?(.+)\]$/i, S_ = /^\d+\/\d+$/, C_ = /* @__PURE__ */ new Set(["px", "full", "screen"]), T_ = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, __ = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, P_ = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, E_ = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, A_ = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, qn = (e) => ji(e) || C_.has(e) || S_.test(e), vr = (e) => Hi(e, "length", L_), ji = (e) => !!e && !Number.isNaN(Number(e)), ec = (e) => Hi(e, "number", ji), yo = (e) => !!e && Number.isInteger(Number(e)), R_ = (e) => e.endsWith("%") && ji(e.slice(0, -1)), xe = (e) => Ym.test(e), yr = (e) => T_.test(e), N_ = /* @__PURE__ */ new Set(["length", "size", "percentage"]), M_ = (e) => Hi(e, N_, qm), O_ = (e) => Hi(e, "position", qm), D_ = /* @__PURE__ */ new Set(["image", "url"]), I_ = (e) => Hi(e, D_, V_), j_ = (e) => Hi(e, "", k_), xo = () => !0, Hi = (e, t, r) => {
  const o = Ym.exec(e);
  return o ? o[1] ? typeof t == "string" ? o[1] === t : t.has(o[1]) : r(o[2]) : !1;
}, L_ = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  __.test(e) && !P_.test(e)
), qm = () => !1, k_ = (e) => E_.test(e), V_ = (e) => A_.test(e), F_ = () => {
  const e = Ze("colors"), t = Ze("spacing"), r = Ze("blur"), o = Ze("brightness"), s = Ze("borderColor"), c = Ze("borderRadius"), l = Ze("borderSpacing"), u = Ze("borderWidth"), f = Ze("contrast"), h = Ze("grayscale"), p = Ze("hueRotate"), v = Ze("invert"), x = Ze("gap"), y = Ze("gradientColorStops"), T = Ze("gradientColorStopPositions"), C = Ze("inset"), _ = Ze("margin"), E = Ze("opacity"), A = Ze("padding"), M = Ze("saturate"), I = Ze("scale"), L = Ze("sepia"), U = Ze("skew"), $ = Ze("space"), H = Ze("translate"), te = () => ["auto", "contain", "none"], re = () => ["auto", "hidden", "clip", "visible", "scroll"], de = () => ["auto", xe, t], J = () => [xe, t], se = () => ["", qn, vr], ne = () => ["auto", ji, xe], Te = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], ie = () => ["solid", "dashed", "dotted", "double", "none"], Z = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], q = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], G = () => ["", "0", xe], pe = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], Ae = () => [ji, xe];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [xo],
      spacing: [qn, vr],
      blur: ["none", "", yr, xe],
      brightness: Ae(),
      borderColor: [e],
      borderRadius: ["none", "", "full", yr, xe],
      borderSpacing: J(),
      borderWidth: se(),
      contrast: Ae(),
      grayscale: G(),
      hueRotate: Ae(),
      invert: G(),
      gap: J(),
      gradientColorStops: [e],
      gradientColorStopPositions: [R_, vr],
      inset: de(),
      margin: de(),
      opacity: Ae(),
      padding: J(),
      saturate: Ae(),
      scale: Ae(),
      sepia: G(),
      skew: Ae(),
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
        columns: [yr]
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
        inset: [C]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [C]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [C]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [C]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [C]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [C]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [C]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [C]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [C]
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
        z: ["auto", yo, xe]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: de()
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
        order: ["first", "last", "none", yo, xe]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [xo]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", yo, xe]
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
        "grid-rows": [xo]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [yo, xe]
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
        p: [A]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [A]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [A]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [A]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [A]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [A]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [A]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [A]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [A]
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
          screen: [yr]
        }, yr]
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
        text: ["base", yr, vr]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", ec]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [xo]
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
        "line-clamp": ["none", ji, ec]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", qn, xe]
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
        "placeholder-opacity": [E]
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
        "text-opacity": [E]
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
        decoration: ["auto", "from-font", qn, vr]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", qn, xe]
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
        "bg-opacity": [E]
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
        bg: [...Te(), O_]
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
        bg: ["auto", "cover", "contain", M_]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, I_]
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
        from: [y]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [y]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [y]
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
        "border-opacity": [E]
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
        "divide-opacity": [E]
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
        "outline-offset": [qn, xe]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [qn, vr]
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
        "ring-opacity": [E]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [qn, vr]
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
        shadow: ["", "inner", "none", yr, j_]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [xo]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [E]
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
        "drop-shadow": ["", "none", yr, xe]
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
        saturate: [M]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [L]
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
        "backdrop-invert": [v]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [E]
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
        "backdrop-sepia": [L]
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
        duration: Ae()
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
        delay: Ae()
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
        rotate: [yo, xe]
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
        "skew-x": [U]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [U]
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
        stroke: [qn, vr, ec]
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
}, B_ = /* @__PURE__ */ b_(F_);
function Ge(...e) {
  return B_(qT(e));
}
function W_(e) {
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
function $_(e) {
  switch (e) {
    case "metrics":
      return o_;
    case "economicBuyer":
      return s_;
    case "decisionCriteria":
      return Wh;
    case "decisionProcess":
      return a_;
    case "paperProcess":
      return Wh;
    case "identifyPain":
      return l_;
    case "champion":
      return QT;
    case "competition":
      return n_;
    default:
      return null;
  }
}
const U_ = iu(
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
), St = S.forwardRef(
  ({ className: e, variant: t, size: r, asChild: o = !1, ...s }, c) => {
    const l = o ? ti : "button";
    return /* @__PURE__ */ m.jsx(
      l,
      {
        className: Ge(U_({ variant: t, size: r, className: e })),
        ref: c,
        ...s
      }
    );
  }
);
St.displayName = "Button";
const H_ = "_counter_1wts1_1", z_ = "_header_1wts1_10", G_ = "_button_1wts1_16", tc = {
  counter: H_,
  header: z_,
  button: G_
}, K_ = (e) => {
  const [t, r] = Sr(e);
  return {
    count: t,
    incrementCount: () => r(t + 1)
  };
}, { throttle: Y_ } = UT, ZD = ({ initialValue: e = 0 }) => {
  const { count: t, incrementCount: r } = K_(e);
  return Lo(() => {
    Y_(() => {
      console.log("throttle");
    }, 10)();
  }, []), /* @__PURE__ */ m.jsxs("div", { className: tc.counter, children: [
    /* @__PURE__ */ m.jsx("h2", { className: tc.header, children: "Counter" }),
    /* @__PURE__ */ m.jsx("button", { className: tc.button, type: "button", onClick: r, children: "Increment by one" }),
    /* @__PURE__ */ m.jsx(St, { variant: "outline", children: "Shadcn button" }),
    /* @__PURE__ */ m.jsxs("div", { className: "bg-red-500", children: [
      "Total value: ",
      /* @__PURE__ */ m.jsx("strong", { children: t })
    ] })
  ] });
};
var q_ = (e, t, r, o, s, c, l, u) => {
  let f = document.documentElement, h = ["light", "dark"];
  function p(y) {
    (Array.isArray(e) ? e : [e]).forEach((T) => {
      let C = T === "class", _ = C && c ? s.map((E) => c[E] || E) : s;
      C ? (f.classList.remove(..._), f.classList.add(y)) : f.setAttribute(T, y);
    }), v(y);
  }
  function v(y) {
    u && h.includes(y) && (f.style.colorScheme = y);
  }
  function x() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  if (o)
    p(o);
  else
    try {
      let y = localStorage.getItem(t) || r, T = l && y === "system" ? x() : y;
      p(T);
    } catch {
    }
}, X_ = S.createContext(void 0), Z_ = { setTheme: (e) => {
}, themes: [] }, J_ = () => {
  var e;
  return (e = S.useContext(X_)) != null ? e : Z_;
};
S.memo(({ forcedTheme: e, storageKey: t, attribute: r, enableSystem: o, enableColorScheme: s, defaultTheme: c, value: l, themes: u, nonce: f, scriptProps: h }) => {
  let p = JSON.stringify([r, t, c, e, u, l, o, s]).slice(1, -1);
  return S.createElement("script", { ...h, suppressHydrationWarning: !0, nonce: typeof window > "u" ? f : "", dangerouslySetInnerHTML: { __html: `(${q_.toString()})(${p})` } });
});
var Q_ = (e) => {
  switch (e) {
    case "success":
      return nP;
    case "info":
      return iP;
    case "warning":
      return rP;
    case "error":
      return oP;
    default:
      return null;
  }
}, eP = Array(12).fill(0), tP = ({ visible: e, className: t }) => z.createElement("div", { className: ["sonner-loading-wrapper", t].filter(Boolean).join(" "), "data-visible": e }, z.createElement("div", { className: "sonner-spinner" }, eP.map((r, o) => z.createElement("div", { className: "sonner-loading-bar", key: `spinner-bar-${o}` })))), nP = z.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, z.createElement("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z", clipRule: "evenodd" })), rP = z.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", height: "20", width: "20" }, z.createElement("path", { fillRule: "evenodd", d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z", clipRule: "evenodd" })), iP = z.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, z.createElement("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z", clipRule: "evenodd" })), oP = z.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, z.createElement("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z", clipRule: "evenodd" })), sP = z.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }, z.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }), z.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" })), aP = () => {
  let [e, t] = z.useState(document.hidden);
  return z.useEffect(() => {
    let r = () => {
      t(document.hidden);
    };
    return document.addEventListener("visibilitychange", r), () => window.removeEventListener("visibilitychange", r);
  }, []), e;
}, Rc = 1, lP = class {
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
      let { message: r, ...o } = e, s = typeof (e == null ? void 0 : e.id) == "number" || ((t = e.id) == null ? void 0 : t.length) > 0 ? e.id : Rc++, c = this.toasts.find((u) => u.id === s), l = e.dismissible === void 0 ? !0 : e.dismissible;
      return c ? this.toasts = this.toasts.map((u) => u.id === s ? (this.publish({ ...u, ...e, id: s, title: r }), { ...u, ...e, id: s, dismissible: l, title: r }) : u) : this.addToast({ title: r, ...o, dismissible: l, id: s }), s;
    }, this.dismiss = (e) => (e || this.toasts.forEach((t) => {
      this.subscribers.forEach((r) => r({ id: t.id, dismiss: !0 }));
    }), this.subscribers.forEach((t) => t({ id: e, dismiss: !0 })), e), this.message = (e, t) => this.create({ ...t, message: e }), this.error = (e, t) => this.create({ ...t, message: e, type: "error" }), this.success = (e, t) => this.create({ ...t, type: "success", message: e }), this.info = (e, t) => this.create({ ...t, type: "info", message: e }), this.warning = (e, t) => this.create({ ...t, type: "warning", message: e }), this.loading = (e, t) => this.create({ ...t, type: "loading", message: e }), this.promise = (e, t) => {
      if (!t)
        return;
      let r;
      t.loading !== void 0 && (r = this.create({ ...t, promise: e, type: "loading", message: t.loading, description: typeof t.description != "function" ? t.description : void 0 }));
      let o = e instanceof Promise ? e : e(), s = r !== void 0, c, l = o.then(async (f) => {
        if (c = ["resolve", f], z.isValidElement(f))
          s = !1, this.create({ id: r, type: "default", message: f });
        else if (uP(f) && !f.ok) {
          s = !1;
          let h = typeof t.error == "function" ? await t.error(`HTTP error! status: ${f.status}`) : t.error, p = typeof t.description == "function" ? await t.description(`HTTP error! status: ${f.status}`) : t.description;
          this.create({ id: r, type: "error", message: h, description: p });
        } else if (t.success !== void 0) {
          s = !1;
          let h = typeof t.success == "function" ? await t.success(f) : t.success, p = typeof t.description == "function" ? await t.description(f) : t.description;
          this.create({ id: r, type: "success", message: h, description: p });
        }
      }).catch(async (f) => {
        if (c = ["reject", f], t.error !== void 0) {
          s = !1;
          let h = typeof t.error == "function" ? await t.error(f) : t.error, p = typeof t.description == "function" ? await t.description(f) : t.description;
          this.create({ id: r, type: "error", message: h, description: p });
        }
      }).finally(() => {
        var f;
        s && (this.dismiss(r), r = void 0), (f = t.finally) == null || f.call(t);
      }), u = () => new Promise((f, h) => l.then(() => c[0] === "reject" ? h(c[1]) : f(c[1])).catch(h));
      return typeof r != "string" && typeof r != "number" ? { unwrap: u } : Object.assign(r, { unwrap: u });
    }, this.custom = (e, t) => {
      let r = (t == null ? void 0 : t.id) || Rc++;
      return this.create({ jsx: e(r), id: r, ...t }), r;
    }, this.subscribers = [], this.toasts = [];
  }
}, Qt = new lP(), cP = (e, t) => {
  let r = (t == null ? void 0 : t.id) || Rc++;
  return Qt.addToast({ title: e, ...t, id: r }), r;
}, uP = (e) => e && typeof e == "object" && "ok" in e && typeof e.ok == "boolean" && "status" in e && typeof e.status == "number", fP = cP, dP = () => Qt.toasts;
Object.assign(fP, { success: Qt.success, info: Qt.info, warning: Qt.warning, error: Qt.error, custom: Qt.custom, message: Qt.message, promise: Qt.promise, dismiss: Qt.dismiss, loading: Qt.loading }, { getHistory: dP });
function hP(e, { insertAt: t } = {}) {
  if (typeof document > "u")
    return;
  let r = document.head || document.getElementsByTagName("head")[0], o = document.createElement("style");
  o.type = "text/css", t === "top" && r.firstChild ? r.insertBefore(o, r.firstChild) : r.appendChild(o), o.styleSheet ? o.styleSheet.cssText = e : o.appendChild(document.createTextNode(e));
}
hP(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:max(var(--offset),env(safe-area-inset-right))}:where([data-sonner-toaster][data-x-position="left"]){left:max(var(--offset),env(safe-area-inset-left))}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:max(var(--offset),env(safe-area-inset-top))}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:max(var(--offset),env(safe-area-inset-bottom))}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:0;right:0;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation:swipe-out .2s ease-out forwards}@keyframes swipe-out{0%{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount)));opacity:1}to{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount) + var(--lift) * -100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;--mobile-offset: 16px;right:var(--mobile-offset);left:var(--mobile-offset);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset)}[data-sonner-toaster][data-y-position=bottom]{bottom:20px}[data-sonner-toaster][data-y-position=top]{top:20px}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset);right:var(--mobile-offset);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function Is(e) {
  return e.label !== void 0;
}
var pP = 3, mP = "32px", zh = 4e3, gP = 356, vP = 14, yP = 20, xP = 200;
function wP(...e) {
  return e.filter(Boolean).join(" ");
}
var bP = (e) => {
  var t, r, o, s, c, l, u, f, h, p, v;
  let { invert: x, toast: y, unstyled: T, interacting: C, setHeights: _, visibleToasts: E, heights: A, index: M, toasts: I, expanded: L, removeToast: U, defaultRichColors: $, closeButton: H, style: te, cancelButtonStyle: re, actionButtonStyle: de, className: J = "", descriptionClassName: se = "", duration: ne, position: Te, gap: ie, loadingIcon: Z, expandByDefault: q, classNames: G, icons: pe, closeButtonAriaLabel: Ae = "Close toast", pauseWhenPageIsHidden: _e, cn: ge } = e, [Re, Fe] = z.useState(!1), [Je, X] = z.useState(!1), [we, Le] = z.useState(!1), [Se, ve] = z.useState(!1), [Pe, st] = z.useState(!1), [Ye, dt] = z.useState(0), [Mt, at] = z.useState(0), rn = z.useRef(y.duration || ne || zh), Vt = z.useRef(null), Ot = z.useRef(null), Dt = M === 0, gn = M + 1 <= E, ht = y.type, _n = y.dismissible !== !1, Pn = y.className || "", ci = y.descriptionClassName || "", Tt = z.useMemo(() => A.findIndex((oe) => oe.toastId === y.id) || 0, [A, y.id]), En = z.useMemo(() => {
    var oe;
    return (oe = y.closeButton) != null ? oe : H;
  }, [y.closeButton, H]);
  z.useMemo(() => y.duration || ne || zh, [y.duration, ne]);
  let An = z.useRef(0), Gt = z.useRef(0), Rn = z.useRef(0), Nn = z.useRef(null), [Lr, kr] = Te.split("-"), ir = z.useMemo(() => A.reduce((oe, De, Be) => Be >= Tt ? oe : oe + De.height, 0), [A, Tt]), or = aP(), Vr = y.invert || x, Fr = ht === "loading";
  Gt.current = z.useMemo(() => Tt * ie + ir, [Tt, ir]), z.useEffect(() => {
    Fe(!0);
  }, []), z.useEffect(() => {
    let oe = Ot.current;
    if (oe) {
      let De = oe.getBoundingClientRect().height;
      return at(De), _((Be) => [{ toastId: y.id, height: De, position: y.position }, ...Be]), () => _((Be) => Be.filter((_t) => _t.toastId !== y.id));
    }
  }, [_, y.id]), z.useLayoutEffect(() => {
    if (!Re)
      return;
    let oe = Ot.current, De = oe.style.height;
    oe.style.height = "auto";
    let Be = oe.getBoundingClientRect().height;
    oe.style.height = De, at(Be), _((_t) => _t.find((Bt) => Bt.toastId === y.id) ? _t.map((Bt) => Bt.toastId === y.id ? { ...Bt, height: Be } : Bt) : [{ toastId: y.id, height: Be, position: y.position }, ..._t]);
  }, [Re, y.title, y.description, _, y.id]);
  let Ft = z.useCallback(() => {
    X(!0), dt(Gt.current), _((oe) => oe.filter((De) => De.toastId !== y.id)), setTimeout(() => {
      U(y);
    }, xP);
  }, [y, U, _, Gt]);
  z.useEffect(() => {
    if (y.promise && ht === "loading" || y.duration === 1 / 0 || y.type === "loading")
      return;
    let oe;
    return L || C || _e && or ? (() => {
      if (Rn.current < An.current) {
        let De = (/* @__PURE__ */ new Date()).getTime() - An.current;
        rn.current = rn.current - De;
      }
      Rn.current = (/* @__PURE__ */ new Date()).getTime();
    })() : rn.current !== 1 / 0 && (An.current = (/* @__PURE__ */ new Date()).getTime(), oe = setTimeout(() => {
      var De;
      (De = y.onAutoClose) == null || De.call(y, y), Ft();
    }, rn.current)), () => clearTimeout(oe);
  }, [L, C, y, ht, _e, or, Ft]), z.useEffect(() => {
    y.delete && Ft();
  }, [Ft, y.delete]);
  function ui() {
    var oe, De, Be;
    return pe != null && pe.loading ? z.createElement("div", { className: ge(G == null ? void 0 : G.loader, (oe = y == null ? void 0 : y.classNames) == null ? void 0 : oe.loader, "sonner-loader"), "data-visible": ht === "loading" }, pe.loading) : Z ? z.createElement("div", { className: ge(G == null ? void 0 : G.loader, (De = y == null ? void 0 : y.classNames) == null ? void 0 : De.loader, "sonner-loader"), "data-visible": ht === "loading" }, Z) : z.createElement(tP, { className: ge(G == null ? void 0 : G.loader, (Be = y == null ? void 0 : y.classNames) == null ? void 0 : Be.loader), visible: ht === "loading" });
  }
  return z.createElement("li", { tabIndex: 0, ref: Ot, className: ge(J, Pn, G == null ? void 0 : G.toast, (t = y == null ? void 0 : y.classNames) == null ? void 0 : t.toast, G == null ? void 0 : G.default, G == null ? void 0 : G[ht], (r = y == null ? void 0 : y.classNames) == null ? void 0 : r[ht]), "data-sonner-toast": "", "data-rich-colors": (o = y.richColors) != null ? o : $, "data-styled": !(y.jsx || y.unstyled || T), "data-mounted": Re, "data-promise": !!y.promise, "data-swiped": Pe, "data-removed": Je, "data-visible": gn, "data-y-position": Lr, "data-x-position": kr, "data-index": M, "data-front": Dt, "data-swiping": we, "data-dismissible": _n, "data-type": ht, "data-invert": Vr, "data-swipe-out": Se, "data-expanded": !!(L || q && Re), style: { "--index": M, "--toasts-before": M, "--z-index": I.length - M, "--offset": `${Je ? Ye : Gt.current}px`, "--initial-height": q ? "auto" : `${Mt}px`, ...te, ...y.style }, onPointerDown: (oe) => {
    Fr || !_n || (Vt.current = /* @__PURE__ */ new Date(), dt(Gt.current), oe.target.setPointerCapture(oe.pointerId), oe.target.tagName !== "BUTTON" && (Le(!0), Nn.current = { x: oe.clientX, y: oe.clientY }));
  }, onPointerUp: () => {
    var oe, De, Be, _t;
    if (Se || !_n)
      return;
    Nn.current = null;
    let Bt = Number(((oe = Ot.current) == null ? void 0 : oe.style.getPropertyValue("--swipe-amount").replace("px", "")) || 0), sr = (/* @__PURE__ */ new Date()).getTime() - ((De = Vt.current) == null ? void 0 : De.getTime()), fi = Math.abs(Bt) / sr;
    if (Math.abs(Bt) >= yP || fi > 0.11) {
      dt(Gt.current), (Be = y.onDismiss) == null || Be.call(y, y), Ft(), ve(!0), st(!1);
      return;
    }
    (_t = Ot.current) == null || _t.style.setProperty("--swipe-amount", "0px"), Le(!1);
  }, onPointerMove: (oe) => {
    var De, Be, _t;
    if (!Nn.current || !_n)
      return;
    let Bt = oe.clientY - Nn.current.y, sr = ((De = window.getSelection()) == null ? void 0 : De.toString().length) > 0;
    Number(((Be = Ot.current) == null ? void 0 : Be.style.getPropertyValue("--swipe-amount").replace("px", "")) || 0) > 0 && st(!0), !sr && ((_t = Ot.current) == null || _t.style.setProperty("--swipe-amount", `${Math.max(0, Bt)}px`));
  } }, En && !y.jsx ? z.createElement("button", { "aria-label": Ae, "data-disabled": Fr, "data-close-button": !0, onClick: Fr || !_n ? () => {
  } : () => {
    var oe;
    Ft(), (oe = y.onDismiss) == null || oe.call(y, y);
  }, className: ge(G == null ? void 0 : G.closeButton, (s = y == null ? void 0 : y.classNames) == null ? void 0 : s.closeButton) }, (c = pe == null ? void 0 : pe.close) != null ? c : sP) : null, y.jsx || z.isValidElement(y.title) ? y.jsx ? y.jsx : typeof y.title == "function" ? y.title() : y.title : z.createElement(z.Fragment, null, ht || y.icon || y.promise ? z.createElement("div", { "data-icon": "", className: ge(G == null ? void 0 : G.icon, (l = y == null ? void 0 : y.classNames) == null ? void 0 : l.icon) }, y.promise || y.type === "loading" && !y.icon ? y.icon || ui() : null, y.type !== "loading" ? y.icon || (pe == null ? void 0 : pe[ht]) || Q_(ht) : null) : null, z.createElement("div", { "data-content": "", className: ge(G == null ? void 0 : G.content, (u = y == null ? void 0 : y.classNames) == null ? void 0 : u.content) }, z.createElement("div", { "data-title": "", className: ge(G == null ? void 0 : G.title, (f = y == null ? void 0 : y.classNames) == null ? void 0 : f.title) }, typeof y.title == "function" ? y.title() : y.title), y.description ? z.createElement("div", { "data-description": "", className: ge(se, ci, G == null ? void 0 : G.description, (h = y == null ? void 0 : y.classNames) == null ? void 0 : h.description) }, typeof y.description == "function" ? y.description() : y.description) : null), z.isValidElement(y.cancel) ? y.cancel : y.cancel && Is(y.cancel) ? z.createElement("button", { "data-button": !0, "data-cancel": !0, style: y.cancelButtonStyle || re, onClick: (oe) => {
    var De, Be;
    Is(y.cancel) && _n && ((Be = (De = y.cancel).onClick) == null || Be.call(De, oe), Ft());
  }, className: ge(G == null ? void 0 : G.cancelButton, (p = y == null ? void 0 : y.classNames) == null ? void 0 : p.cancelButton) }, y.cancel.label) : null, z.isValidElement(y.action) ? y.action : y.action && Is(y.action) ? z.createElement("button", { "data-button": !0, "data-action": !0, style: y.actionButtonStyle || de, onClick: (oe) => {
    var De, Be;
    Is(y.action) && ((Be = (De = y.action).onClick) == null || Be.call(De, oe), !oe.defaultPrevented && Ft());
  }, className: ge(G == null ? void 0 : G.actionButton, (v = y == null ? void 0 : y.classNames) == null ? void 0 : v.actionButton) }, y.action.label) : null));
};
function Gh() {
  if (typeof window > "u" || typeof document > "u")
    return "ltr";
  let e = document.documentElement.getAttribute("dir");
  return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e;
}
var SP = ma(function(e, t) {
  let { invert: r, position: o = "bottom-right", hotkey: s = ["altKey", "KeyT"], expand: c, closeButton: l, className: u, offset: f, theme: h = "light", richColors: p, duration: v, style: x, visibleToasts: y = pP, toastOptions: T, dir: C = Gh(), gap: _ = vP, loadingIcon: E, icons: A, containerAriaLabel: M = "Notifications", pauseWhenPageIsHidden: I, cn: L = wP } = e, [U, $] = z.useState([]), H = z.useMemo(() => Array.from(new Set([o].concat(U.filter((_e) => _e.position).map((_e) => _e.position)))), [U, o]), [te, re] = z.useState([]), [de, J] = z.useState(!1), [se, ne] = z.useState(!1), [Te, ie] = z.useState(h !== "system" ? h : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), Z = z.useRef(null), q = s.join("+").replace(/Key/g, "").replace(/Digit/g, ""), G = z.useRef(null), pe = z.useRef(!1), Ae = z.useCallback((_e) => {
    $((ge) => {
      var Re;
      return (Re = ge.find((Fe) => Fe.id === _e.id)) != null && Re.delete || Qt.dismiss(_e.id), ge.filter(({ id: Fe }) => Fe !== _e.id);
    });
  }, []);
  return z.useEffect(() => Qt.subscribe((_e) => {
    if (_e.dismiss) {
      $((ge) => ge.map((Re) => Re.id === _e.id ? { ...Re, delete: !0 } : Re));
      return;
    }
    setTimeout(() => {
      jm.flushSync(() => {
        $((ge) => {
          let Re = ge.findIndex((Fe) => Fe.id === _e.id);
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
        } catch (Fe) {
          console.error(Fe);
        }
      });
    }
  }, [h]), z.useEffect(() => {
    U.length <= 1 && J(!1);
  }, [U]), z.useEffect(() => {
    let _e = (ge) => {
      var Re, Fe;
      s.every((Je) => ge[Je] || ge.code === Je) && (J(!0), (Re = Z.current) == null || Re.focus()), ge.code === "Escape" && (document.activeElement === Z.current || (Fe = Z.current) != null && Fe.contains(document.activeElement)) && J(!1);
    };
    return document.addEventListener("keydown", _e), () => document.removeEventListener("keydown", _e);
  }, [s]), z.useEffect(() => {
    if (Z.current)
      return () => {
        G.current && (G.current.focus({ preventScroll: !0 }), G.current = null, pe.current = !1);
      };
  }, [Z.current]), z.createElement("section", { "aria-label": `${M} ${q}`, tabIndex: -1, "aria-live": "polite", "aria-relevant": "additions text", "aria-atomic": "false" }, H.map((_e, ge) => {
    var Re;
    let [Fe, Je] = _e.split("-");
    return U.length ? z.createElement("ol", { key: _e, dir: C === "auto" ? Gh() : C, tabIndex: -1, ref: Z, className: u, "data-sonner-toaster": !0, "data-theme": Te, "data-y-position": Fe, "data-lifted": de && U.length > 1 && !c, "data-x-position": Je, style: { "--front-toast-height": `${((Re = te[0]) == null ? void 0 : Re.height) || 0}px`, "--offset": typeof f == "number" ? `${f}px` : f || mP, "--width": `${gP}px`, "--gap": `${_}px`, ...x }, onBlur: (X) => {
      pe.current && !X.currentTarget.contains(X.relatedTarget) && (pe.current = !1, G.current && (G.current.focus({ preventScroll: !0 }), G.current = null));
    }, onFocus: (X) => {
      X.target instanceof HTMLElement && X.target.dataset.dismissible === "false" || pe.current || (pe.current = !0, G.current = X.relatedTarget);
    }, onMouseEnter: () => J(!0), onMouseMove: () => J(!0), onMouseLeave: () => {
      se || J(!1);
    }, onPointerDown: (X) => {
      X.target instanceof HTMLElement && X.target.dataset.dismissible === "false" || ne(!0);
    }, onPointerUp: () => ne(!1) }, U.filter((X) => !X.position && ge === 0 || X.position === _e).map((X, we) => {
      var Le, Se;
      return z.createElement(bP, { key: X.id, icons: A, index: we, toast: X, defaultRichColors: p, duration: (Le = T == null ? void 0 : T.duration) != null ? Le : v, className: T == null ? void 0 : T.className, descriptionClassName: T == null ? void 0 : T.descriptionClassName, invert: r, visibleToasts: y, closeButton: (Se = T == null ? void 0 : T.closeButton) != null ? Se : l, interacting: se, position: _e, style: T == null ? void 0 : T.style, unstyled: T == null ? void 0 : T.unstyled, classNames: T == null ? void 0 : T.classNames, cancelButtonStyle: T == null ? void 0 : T.cancelButtonStyle, actionButtonStyle: T == null ? void 0 : T.actionButtonStyle, removeToast: Ae, toasts: U.filter((ve) => ve.position == X.position), heights: te.filter((ve) => ve.position == X.position), setHeights: re, expandByDefault: c, gap: _, loadingIcon: E, expanded: de, pauseWhenPageIsHidden: I, cn: L });
    })) : null;
  }));
});
const JD = ({ ...e }) => {
  const { theme: t = "system" } = J_();
  return /* @__PURE__ */ m.jsx(
    SP,
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
function Kh(e, [t, r]) {
  return Math.min(r, Math.max(t, e));
}
function Ve(e, t, { checkForDefaultPrevented: r = !0 } = {}) {
  return function(s) {
    if (e == null || e(s), r === !1 || !s.defaultPrevented)
      return t == null ? void 0 : t(s);
  };
}
function CP(e, t = []) {
  let r = [];
  function o(c, l) {
    const u = S.createContext(l), f = r.length;
    r = [...r, l];
    function h(v) {
      const { scope: x, children: y, ...T } = v, C = (x == null ? void 0 : x[e][f]) || u, _ = S.useMemo(() => T, Object.values(T));
      return /* @__PURE__ */ m.jsx(C.Provider, { value: _, children: y });
    }
    function p(v, x) {
      const y = (x == null ? void 0 : x[e][f]) || u, T = S.useContext(y);
      if (T)
        return T;
      if (l !== void 0)
        return l;
      throw new Error(`\`${v}\` must be used within \`${c}\``);
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
  return s.scopeName = e, [o, TP(s, ...t)];
}
function TP(...e) {
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
        const v = f(c)[`__scope${h}`];
        return { ...u, ...v };
      }, {});
      return S.useMemo(() => ({ [`__scope${t.scopeName}`]: l }), [l]);
    };
  };
  return r.scopeName = t.scopeName, r;
}
function _P(e) {
  const t = e + "CollectionProvider", [r, o] = CP(t), [s, c] = r(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), l = (y) => {
    const { scope: T, children: C } = y, _ = z.useRef(null), E = z.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ m.jsx(s, { scope: T, itemMap: E, collectionRef: _, children: C });
  };
  l.displayName = t;
  const u = e + "CollectionSlot", f = z.forwardRef(
    (y, T) => {
      const { scope: C, children: _ } = y, E = c(u, C), A = rt(T, E.collectionRef);
      return /* @__PURE__ */ m.jsx(ti, { ref: A, children: _ });
    }
  );
  f.displayName = u;
  const h = e + "CollectionItemSlot", p = "data-radix-collection-item", v = z.forwardRef(
    (y, T) => {
      const { scope: C, children: _, ...E } = y, A = z.useRef(null), M = rt(T, A), I = c(h, C);
      return z.useEffect(() => (I.itemMap.set(A, { ref: A, ...E }), () => void I.itemMap.delete(A))), /* @__PURE__ */ m.jsx(ti, { [p]: "", ref: M, children: _ });
    }
  );
  v.displayName = h;
  function x(y) {
    const T = c(e + "CollectionConsumer", y);
    return z.useCallback(() => {
      const _ = T.collectionRef.current;
      if (!_)
        return [];
      const E = Array.from(_.querySelectorAll(`[${p}]`));
      return Array.from(T.itemMap.values()).sort(
        (I, L) => E.indexOf(I.ref.current) - E.indexOf(L.ref.current)
      );
    }, [T.collectionRef, T.itemMap]);
  }
  return [
    { Provider: l, Slot: f, ItemSlot: v },
    x,
    o
  ];
}
function PP(e, t) {
  const r = S.createContext(t), o = (c) => {
    const { children: l, ...u } = c, f = S.useMemo(() => u, Object.values(u));
    return /* @__PURE__ */ m.jsx(r.Provider, { value: f, children: l });
  };
  o.displayName = e + "Provider";
  function s(c) {
    const l = S.useContext(r);
    if (l)
      return l;
    if (t !== void 0)
      return t;
    throw new Error(`\`${c}\` must be used within \`${e}\``);
  }
  return [o, s];
}
function au(e, t = []) {
  let r = [];
  function o(c, l) {
    const u = S.createContext(l), f = r.length;
    r = [...r, l];
    const h = (v) => {
      var E;
      const { scope: x, children: y, ...T } = v, C = ((E = x == null ? void 0 : x[e]) == null ? void 0 : E[f]) || u, _ = S.useMemo(() => T, Object.values(T));
      return /* @__PURE__ */ m.jsx(C.Provider, { value: _, children: y });
    };
    h.displayName = c + "Provider";
    function p(v, x) {
      var C;
      const y = ((C = x == null ? void 0 : x[e]) == null ? void 0 : C[f]) || u, T = S.useContext(y);
      if (T)
        return T;
      if (l !== void 0)
        return l;
      throw new Error(`\`${v}\` must be used within \`${c}\``);
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
  return s.scopeName = e, [o, EP(s, ...t)];
}
function EP(...e) {
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
        const v = f(c)[`__scope${h}`];
        return { ...u, ...v };
      }, {});
      return S.useMemo(() => ({ [`__scope${t.scopeName}`]: l }), [l]);
    };
  };
  return r.scopeName = t.scopeName, r;
}
var AP = S.createContext(void 0);
function RP(e) {
  const t = S.useContext(AP);
  return e || t || "ltr";
}
var NP = [
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
], $e = NP.reduce((e, t) => {
  const r = S.forwardRef((o, s) => {
    const { asChild: c, ...l } = o, u = c ? ti : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ m.jsx(u, { ...l, ref: s });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function MP(e, t) {
  e && ga.flushSync(() => e.dispatchEvent(t));
}
function tr(e) {
  const t = S.useRef(e);
  return S.useEffect(() => {
    t.current = e;
  }), S.useMemo(() => (...r) => {
    var o;
    return (o = t.current) == null ? void 0 : o.call(t, ...r);
  }, []);
}
function OP(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = tr(e);
  S.useEffect(() => {
    const o = (s) => {
      s.key === "Escape" && r(s);
    };
    return t.addEventListener("keydown", o, { capture: !0 }), () => t.removeEventListener("keydown", o, { capture: !0 });
  }, [r, t]);
}
var DP = "DismissableLayer", Nc = "dismissableLayer.update", IP = "dismissableLayer.pointerDownOutside", jP = "dismissableLayer.focusOutside", Yh, Xm = S.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), ya = S.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: r = !1,
      onEscapeKeyDown: o,
      onPointerDownOutside: s,
      onFocusOutside: c,
      onInteractOutside: l,
      onDismiss: u,
      ...f
    } = e, h = S.useContext(Xm), [p, v] = S.useState(null), x = (p == null ? void 0 : p.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, y] = S.useState({}), T = rt(t, ($) => v($)), C = Array.from(h.layers), [_] = [...h.layersWithOutsidePointerEventsDisabled].slice(-1), E = C.indexOf(_), A = p ? C.indexOf(p) : -1, M = h.layersWithOutsidePointerEventsDisabled.size > 0, I = A >= E, L = VP(($) => {
      const H = $.target, te = [...h.branches].some((re) => re.contains(H));
      !I || te || (s == null || s($), l == null || l($), $.defaultPrevented || u == null || u());
    }, x), U = FP(($) => {
      const H = $.target;
      [...h.branches].some((re) => re.contains(H)) || (c == null || c($), l == null || l($), $.defaultPrevented || u == null || u());
    }, x);
    return OP(($) => {
      A === h.layers.size - 1 && (o == null || o($), !$.defaultPrevented && u && ($.preventDefault(), u()));
    }, x), S.useEffect(() => {
      if (p)
        return r && (h.layersWithOutsidePointerEventsDisabled.size === 0 && (Yh = x.body.style.pointerEvents, x.body.style.pointerEvents = "none"), h.layersWithOutsidePointerEventsDisabled.add(p)), h.layers.add(p), qh(), () => {
          r && h.layersWithOutsidePointerEventsDisabled.size === 1 && (x.body.style.pointerEvents = Yh);
        };
    }, [p, x, r, h]), S.useEffect(() => () => {
      p && (h.layers.delete(p), h.layersWithOutsidePointerEventsDisabled.delete(p), qh());
    }, [p, h]), S.useEffect(() => {
      const $ = () => y({});
      return document.addEventListener(Nc, $), () => document.removeEventListener(Nc, $);
    }, []), /* @__PURE__ */ m.jsx(
      $e.div,
      {
        ...f,
        ref: T,
        style: {
          pointerEvents: M ? I ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: Ve(e.onFocusCapture, U.onFocusCapture),
        onBlurCapture: Ve(e.onBlurCapture, U.onBlurCapture),
        onPointerDownCapture: Ve(
          e.onPointerDownCapture,
          L.onPointerDownCapture
        )
      }
    );
  }
);
ya.displayName = DP;
var LP = "DismissableLayerBranch", kP = S.forwardRef((e, t) => {
  const r = S.useContext(Xm), o = S.useRef(null), s = rt(t, o);
  return S.useEffect(() => {
    const c = o.current;
    if (c)
      return r.branches.add(c), () => {
        r.branches.delete(c);
      };
  }, [r.branches]), /* @__PURE__ */ m.jsx($e.div, { ...e, ref: s });
});
kP.displayName = LP;
function VP(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = tr(e), o = S.useRef(!1), s = S.useRef(() => {
  });
  return S.useEffect(() => {
    const c = (u) => {
      if (u.target && !o.current) {
        let f = function() {
          Zm(
            IP,
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
function FP(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = tr(e), o = S.useRef(!1);
  return S.useEffect(() => {
    const s = (c) => {
      c.target && !o.current && Zm(jP, r, { originalEvent: c }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", s), () => t.removeEventListener("focusin", s);
  }, [t, r]), {
    onFocusCapture: () => o.current = !0,
    onBlurCapture: () => o.current = !1
  };
}
function qh() {
  const e = new CustomEvent(Nc);
  document.dispatchEvent(e);
}
function Zm(e, t, r, { discrete: o }) {
  const s = r.originalEvent.target, c = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: r });
  t && s.addEventListener(e, t, { once: !0 }), o ? MP(s, c) : s.dispatchEvent(c);
}
var nc = 0;
function Jm() {
  S.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? Xh()), document.body.insertAdjacentElement("beforeend", e[1] ?? Xh()), nc++, () => {
      nc === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), nc--;
    };
  }, []);
}
function Xh() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var rc = "focusScope.autoFocusOnMount", ic = "focusScope.autoFocusOnUnmount", Zh = { bubbles: !1, cancelable: !0 }, BP = "FocusScope", lu = S.forwardRef((e, t) => {
  const {
    loop: r = !1,
    trapped: o = !1,
    onMountAutoFocus: s,
    onUnmountAutoFocus: c,
    ...l
  } = e, [u, f] = S.useState(null), h = tr(s), p = tr(c), v = S.useRef(null), x = rt(t, (C) => f(C)), y = S.useRef({
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
      let C = function(M) {
        if (y.paused || !u)
          return;
        const I = M.target;
        u.contains(I) ? v.current = I : xr(v.current, { select: !0 });
      }, _ = function(M) {
        if (y.paused || !u)
          return;
        const I = M.relatedTarget;
        I !== null && (u.contains(I) || xr(v.current, { select: !0 }));
      }, E = function(M) {
        if (document.activeElement === document.body)
          for (const L of M)
            L.removedNodes.length > 0 && xr(u);
      };
      document.addEventListener("focusin", C), document.addEventListener("focusout", _);
      const A = new MutationObserver(E);
      return u && A.observe(u, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", C), document.removeEventListener("focusout", _), A.disconnect();
      };
    }
  }, [o, u, y.paused]), S.useEffect(() => {
    if (u) {
      Qh.add(y);
      const C = document.activeElement;
      if (!u.contains(C)) {
        const E = new CustomEvent(rc, Zh);
        u.addEventListener(rc, h), u.dispatchEvent(E), E.defaultPrevented || (WP(GP(Qm(u)), { select: !0 }), document.activeElement === C && xr(u));
      }
      return () => {
        u.removeEventListener(rc, h), setTimeout(() => {
          const E = new CustomEvent(ic, Zh);
          u.addEventListener(ic, p), u.dispatchEvent(E), E.defaultPrevented || xr(C ?? document.body, { select: !0 }), u.removeEventListener(ic, p), Qh.remove(y);
        }, 0);
      };
    }
  }, [u, h, p, y]);
  const T = S.useCallback(
    (C) => {
      if (!r && !o || y.paused)
        return;
      const _ = C.key === "Tab" && !C.altKey && !C.ctrlKey && !C.metaKey, E = document.activeElement;
      if (_ && E) {
        const A = C.currentTarget, [M, I] = $P(A);
        M && I ? !C.shiftKey && E === I ? (C.preventDefault(), r && xr(M, { select: !0 })) : C.shiftKey && E === M && (C.preventDefault(), r && xr(I, { select: !0 })) : E === A && C.preventDefault();
      }
    },
    [r, o, y.paused]
  );
  return /* @__PURE__ */ m.jsx($e.div, { tabIndex: -1, ...l, ref: x, onKeyDown: T });
});
lu.displayName = BP;
function WP(e, { select: t = !1 } = {}) {
  const r = document.activeElement;
  for (const o of e)
    if (xr(o, { select: t }), document.activeElement !== r)
      return;
}
function $P(e) {
  const t = Qm(e), r = Jh(t, e), o = Jh(t.reverse(), e);
  return [r, o];
}
function Qm(e) {
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
function Jh(e, t) {
  for (const r of e)
    if (!UP(r, { upTo: t }))
      return r;
}
function UP(e, { upTo: t }) {
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
function HP(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function xr(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const r = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== r && HP(e) && t && e.select();
  }
}
var Qh = zP();
function zP() {
  let e = [];
  return {
    add(t) {
      const r = e[0];
      t !== r && (r == null || r.pause()), e = ep(e, t), e.unshift(t);
    },
    remove(t) {
      var r;
      e = ep(e, t), (r = e[0]) == null || r.resume();
    }
  };
}
function ep(e, t) {
  const r = [...e], o = r.indexOf(t);
  return o !== -1 && r.splice(o, 1), r;
}
function GP(e) {
  return e.filter((t) => t.tagName !== "A");
}
var kt = globalThis != null && globalThis.document ? S.useLayoutEffect : () => {
}, KP = S.useId || (() => {
}), YP = 0;
function Qr(e) {
  const [t, r] = S.useState(KP());
  return kt(() => {
    r((o) => o ?? String(YP++));
  }, [e]), t ? `radix-${t}` : "";
}
const qP = ["top", "right", "bottom", "left"], Pr = Math.min, en = Math.max, Qs = Math.round, js = Math.floor, In = (e) => ({
  x: e,
  y: e
}), XP = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, ZP = {
  start: "end",
  end: "start"
};
function Mc(e, t, r) {
  return en(e, Pr(t, r));
}
function nr(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function rr(e) {
  return e.split("-")[0];
}
function zi(e) {
  return e.split("-")[1];
}
function cu(e) {
  return e === "x" ? "y" : "x";
}
function uu(e) {
  return e === "y" ? "height" : "width";
}
function Er(e) {
  return ["top", "bottom"].includes(rr(e)) ? "y" : "x";
}
function fu(e) {
  return cu(Er(e));
}
function JP(e, t, r) {
  r === void 0 && (r = !1);
  const o = zi(e), s = fu(e), c = uu(s);
  let l = s === "x" ? o === (r ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[c] > t.floating[c] && (l = ea(l)), [l, ea(l)];
}
function QP(e) {
  const t = ea(e);
  return [Oc(e), t, Oc(t)];
}
function Oc(e) {
  return e.replace(/start|end/g, (t) => ZP[t]);
}
function eE(e, t, r) {
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
function tE(e, t, r, o) {
  const s = zi(e);
  let c = eE(rr(e), r === "start", o);
  return s && (c = c.map((l) => l + "-" + s), t && (c = c.concat(c.map(Oc)))), c;
}
function ea(e) {
  return e.replace(/left|right|bottom|top/g, (t) => XP[t]);
}
function nE(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function eg(e) {
  return typeof e != "number" ? nE(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function ta(e) {
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
function tp(e, t, r) {
  let {
    reference: o,
    floating: s
  } = e;
  const c = Er(t), l = fu(t), u = uu(l), f = rr(t), h = c === "y", p = o.x + o.width / 2 - s.width / 2, v = o.y + o.height / 2 - s.height / 2, x = o[u] / 2 - s[u] / 2;
  let y;
  switch (f) {
    case "top":
      y = {
        x: p,
        y: o.y - s.height
      };
      break;
    case "bottom":
      y = {
        x: p,
        y: o.y + o.height
      };
      break;
    case "right":
      y = {
        x: o.x + o.width,
        y: v
      };
      break;
    case "left":
      y = {
        x: o.x - s.width,
        y: v
      };
      break;
    default:
      y = {
        x: o.x,
        y: o.y
      };
  }
  switch (zi(t)) {
    case "start":
      y[l] -= x * (r && h ? -1 : 1);
      break;
    case "end":
      y[l] += x * (r && h ? -1 : 1);
      break;
  }
  return y;
}
const rE = async (e, t, r) => {
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
    y: v
  } = tp(h, o, f), x = o, y = {}, T = 0;
  for (let C = 0; C < u.length; C++) {
    const {
      name: _,
      fn: E
    } = u[C], {
      x: A,
      y: M,
      data: I,
      reset: L
    } = await E({
      x: p,
      y: v,
      initialPlacement: o,
      placement: x,
      strategy: s,
      middlewareData: y,
      rects: h,
      platform: l,
      elements: {
        reference: e,
        floating: t
      }
    });
    p = A ?? p, v = M ?? v, y = {
      ...y,
      [_]: {
        ...y[_],
        ...I
      }
    }, L && T <= 50 && (T++, typeof L == "object" && (L.placement && (x = L.placement), L.rects && (h = L.rects === !0 ? await l.getElementRects({
      reference: e,
      floating: t,
      strategy: s
    }) : L.rects), {
      x: p,
      y: v
    } = tp(h, x, f)), C = -1);
  }
  return {
    x: p,
    y: v,
    placement: x,
    strategy: s,
    middlewareData: y
  };
};
async function No(e, t) {
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
    elementContext: v = "floating",
    altBoundary: x = !1,
    padding: y = 0
  } = nr(t, e), T = eg(y), _ = u[x ? v === "floating" ? "reference" : "floating" : v], E = ta(await c.getClippingRect({
    element: (r = await (c.isElement == null ? void 0 : c.isElement(_))) == null || r ? _ : _.contextElement || await (c.getDocumentElement == null ? void 0 : c.getDocumentElement(u.floating)),
    boundary: h,
    rootBoundary: p,
    strategy: f
  })), A = v === "floating" ? {
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
  }, L = ta(c.convertOffsetParentRelativeRectToViewportRelativeRect ? await c.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: u,
    rect: A,
    offsetParent: M,
    strategy: f
  }) : A);
  return {
    top: (E.top - L.top + T.top) / I.y,
    bottom: (L.bottom - E.bottom + T.bottom) / I.y,
    left: (E.left - L.left + T.left) / I.x,
    right: (L.right - E.right + T.right) / I.x
  };
}
const iE = (e) => ({
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
    } = nr(e, t) || {};
    if (h == null)
      return {};
    const v = eg(p), x = {
      x: r,
      y: o
    }, y = fu(s), T = uu(y), C = await l.getDimensions(h), _ = y === "y", E = _ ? "top" : "left", A = _ ? "bottom" : "right", M = _ ? "clientHeight" : "clientWidth", I = c.reference[T] + c.reference[y] - x[y] - c.floating[T], L = x[y] - c.reference[y], U = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(h));
    let $ = U ? U[M] : 0;
    (!$ || !await (l.isElement == null ? void 0 : l.isElement(U))) && ($ = u.floating[M] || c.floating[T]);
    const H = I / 2 - L / 2, te = $ / 2 - C[T] / 2 - 1, re = Pr(v[E], te), de = Pr(v[A], te), J = re, se = $ - C[T] - de, ne = $ / 2 - C[T] / 2 + H, Te = Mc(J, ne, se), ie = !f.arrow && zi(s) != null && ne !== Te && c.reference[T] / 2 - (ne < J ? re : de) - C[T] / 2 < 0, Z = ie ? ne < J ? ne - J : ne - se : 0;
    return {
      [y]: x[y] + Z,
      data: {
        [y]: Te,
        centerOffset: ne - Te - Z,
        ...ie && {
          alignmentOffset: Z
        }
      },
      reset: ie
    };
  }
}), oE = function(e) {
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
        crossAxis: v = !0,
        fallbackPlacements: x,
        fallbackStrategy: y = "bestFit",
        fallbackAxisSideDirection: T = "none",
        flipAlignment: C = !0,
        ..._
      } = nr(e, t);
      if ((r = c.arrow) != null && r.alignmentOffset)
        return {};
      const E = rr(s), A = Er(u), M = rr(u) === u, I = await (f.isRTL == null ? void 0 : f.isRTL(h.floating)), L = x || (M || !C ? [ea(u)] : QP(u)), U = T !== "none";
      !x && U && L.push(...tE(u, C, T, I));
      const $ = [u, ...L], H = await No(t, _), te = [];
      let re = ((o = c.flip) == null ? void 0 : o.overflows) || [];
      if (p && te.push(H[E]), v) {
        const ne = JP(s, l, I);
        te.push(H[ne[0]], H[ne[1]]);
      }
      if (re = [...re, {
        placement: s,
        overflows: te
      }], !te.every((ne) => ne <= 0)) {
        var de, J;
        const ne = (((de = c.flip) == null ? void 0 : de.index) || 0) + 1, Te = $[ne];
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
          switch (y) {
            case "bestFit": {
              var se;
              const Z = (se = re.filter((q) => {
                if (U) {
                  const G = Er(q.placement);
                  return G === A || // Create a bias to the `y` side axis due to horizontal
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
function np(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function rp(e) {
  return qP.some((t) => e[t] >= 0);
}
const sE = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: r
      } = t, {
        strategy: o = "referenceHidden",
        ...s
      } = nr(e, t);
      switch (o) {
        case "referenceHidden": {
          const c = await No(t, {
            ...s,
            elementContext: "reference"
          }), l = np(c, r.reference);
          return {
            data: {
              referenceHiddenOffsets: l,
              referenceHidden: rp(l)
            }
          };
        }
        case "escaped": {
          const c = await No(t, {
            ...s,
            altBoundary: !0
          }), l = np(c, r.floating);
          return {
            data: {
              escapedOffsets: l,
              escaped: rp(l)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function aE(e, t) {
  const {
    placement: r,
    platform: o,
    elements: s
  } = e, c = await (o.isRTL == null ? void 0 : o.isRTL(s.floating)), l = rr(r), u = zi(r), f = Er(r) === "y", h = ["left", "top"].includes(l) ? -1 : 1, p = c && f ? -1 : 1, v = nr(t, e);
  let {
    mainAxis: x,
    crossAxis: y,
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
  return u && typeof T == "number" && (y = u === "end" ? T * -1 : T), f ? {
    x: y * p,
    y: x * h
  } : {
    x: x * h,
    y: y * p
  };
}
const lE = function(e) {
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
      } = t, f = await aE(t, e);
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
}, cE = function(e) {
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
              x: E,
              y: A
            } = _;
            return {
              x: E,
              y: A
            };
          }
        },
        ...f
      } = nr(e, t), h = {
        x: r,
        y: o
      }, p = await No(t, f), v = Er(rr(s)), x = cu(v);
      let y = h[x], T = h[v];
      if (c) {
        const _ = x === "y" ? "top" : "left", E = x === "y" ? "bottom" : "right", A = y + p[_], M = y - p[E];
        y = Mc(A, y, M);
      }
      if (l) {
        const _ = v === "y" ? "top" : "left", E = v === "y" ? "bottom" : "right", A = T + p[_], M = T - p[E];
        T = Mc(A, T, M);
      }
      const C = u.fn({
        ...t,
        [x]: y,
        [v]: T
      });
      return {
        ...C,
        data: {
          x: C.x - r,
          y: C.y - o,
          enabled: {
            [x]: c,
            [v]: l
          }
        }
      };
    }
  };
}, uE = function(e) {
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
      } = nr(e, t), p = {
        x: r,
        y: o
      }, v = Er(s), x = cu(v);
      let y = p[x], T = p[v];
      const C = nr(u, t), _ = typeof C == "number" ? {
        mainAxis: C,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...C
      };
      if (f) {
        const M = x === "y" ? "height" : "width", I = c.reference[x] - c.floating[M] + _.mainAxis, L = c.reference[x] + c.reference[M] - _.mainAxis;
        y < I ? y = I : y > L && (y = L);
      }
      if (h) {
        var E, A;
        const M = x === "y" ? "width" : "height", I = ["top", "left"].includes(rr(s)), L = c.reference[v] - c.floating[M] + (I && ((E = l.offset) == null ? void 0 : E[v]) || 0) + (I ? 0 : _.crossAxis), U = c.reference[v] + c.reference[M] + (I ? 0 : ((A = l.offset) == null ? void 0 : A[v]) || 0) - (I ? _.crossAxis : 0);
        T < L ? T = L : T > U && (T = U);
      }
      return {
        [x]: y,
        [v]: T
      };
    }
  };
}, fE = function(e) {
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
      } = nr(e, t), p = await No(t, h), v = rr(s), x = zi(s), y = Er(s) === "y", {
        width: T,
        height: C
      } = c.floating;
      let _, E;
      v === "top" || v === "bottom" ? (_ = v, E = x === (await (l.isRTL == null ? void 0 : l.isRTL(u.floating)) ? "start" : "end") ? "left" : "right") : (E = v, _ = x === "end" ? "top" : "bottom");
      const A = C - p.top - p.bottom, M = T - p.left - p.right, I = Pr(C - p[_], A), L = Pr(T - p[E], M), U = !t.middlewareData.shift;
      let $ = I, H = L;
      if ((r = t.middlewareData.shift) != null && r.enabled.x && (H = M), (o = t.middlewareData.shift) != null && o.enabled.y && ($ = A), U && !x) {
        const re = en(p.left, 0), de = en(p.right, 0), J = en(p.top, 0), se = en(p.bottom, 0);
        y ? H = T - 2 * (re !== 0 || de !== 0 ? re + de : en(p.left, p.right)) : $ = C - 2 * (J !== 0 || se !== 0 ? J + se : en(p.top, p.bottom));
      }
      await f({
        ...t,
        availableWidth: H,
        availableHeight: $
      });
      const te = await l.getDimensions(u.floating);
      return T !== te.width || C !== te.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function xa() {
  return typeof window < "u";
}
function Gi(e) {
  return tg(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function tn(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Fn(e) {
  var t;
  return (t = (tg(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function tg(e) {
  return xa() ? e instanceof Node || e instanceof tn(e).Node : !1;
}
function Sn(e) {
  return xa() ? e instanceof Element || e instanceof tn(e).Element : !1;
}
function Vn(e) {
  return xa() ? e instanceof HTMLElement || e instanceof tn(e).HTMLElement : !1;
}
function ip(e) {
  return !xa() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof tn(e).ShadowRoot;
}
function Vo(e) {
  const {
    overflow: t,
    overflowX: r,
    overflowY: o,
    display: s
  } = Cn(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + r) && !["inline", "contents"].includes(s);
}
function dE(e) {
  return ["table", "td", "th"].includes(Gi(e));
}
function wa(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function du(e) {
  const t = hu(), r = Sn(e) ? Cn(e) : e;
  return r.transform !== "none" || r.perspective !== "none" || (r.containerType ? r.containerType !== "normal" : !1) || !t && (r.backdropFilter ? r.backdropFilter !== "none" : !1) || !t && (r.filter ? r.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((o) => (r.willChange || "").includes(o)) || ["paint", "layout", "strict", "content"].some((o) => (r.contain || "").includes(o));
}
function hE(e) {
  let t = Ar(e);
  for (; Vn(t) && !Vi(t); ) {
    if (du(t))
      return t;
    if (wa(t))
      return null;
    t = Ar(t);
  }
  return null;
}
function hu() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Vi(e) {
  return ["html", "body", "#document"].includes(Gi(e));
}
function Cn(e) {
  return tn(e).getComputedStyle(e);
}
function ba(e) {
  return Sn(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Ar(e) {
  if (Gi(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    ip(e) && e.host || // Fallback.
    Fn(e)
  );
  return ip(t) ? t.host : t;
}
function ng(e) {
  const t = Ar(e);
  return Vi(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Vn(t) && Vo(t) ? t : ng(t);
}
function Mo(e, t, r) {
  var o;
  t === void 0 && (t = []), r === void 0 && (r = !0);
  const s = ng(e), c = s === ((o = e.ownerDocument) == null ? void 0 : o.body), l = tn(s);
  if (c) {
    const u = Dc(l);
    return t.concat(l, l.visualViewport || [], Vo(s) ? s : [], u && r ? Mo(u) : []);
  }
  return t.concat(s, Mo(s, [], r));
}
function Dc(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function rg(e) {
  const t = Cn(e);
  let r = parseFloat(t.width) || 0, o = parseFloat(t.height) || 0;
  const s = Vn(e), c = s ? e.offsetWidth : r, l = s ? e.offsetHeight : o, u = Qs(r) !== c || Qs(o) !== l;
  return u && (r = c, o = l), {
    width: r,
    height: o,
    $: u
  };
}
function pu(e) {
  return Sn(e) ? e : e.contextElement;
}
function Li(e) {
  const t = pu(e);
  if (!Vn(t))
    return In(1);
  const r = t.getBoundingClientRect(), {
    width: o,
    height: s,
    $: c
  } = rg(t);
  let l = (c ? Qs(r.width) : r.width) / o, u = (c ? Qs(r.height) : r.height) / s;
  return (!l || !Number.isFinite(l)) && (l = 1), (!u || !Number.isFinite(u)) && (u = 1), {
    x: l,
    y: u
  };
}
const pE = /* @__PURE__ */ In(0);
function ig(e) {
  const t = tn(e);
  return !hu() || !t.visualViewport ? pE : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function mE(e, t, r) {
  return t === void 0 && (t = !1), !r || t && r !== tn(e) ? !1 : t;
}
function ni(e, t, r, o) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  const s = e.getBoundingClientRect(), c = pu(e);
  let l = In(1);
  t && (o ? Sn(o) && (l = Li(o)) : l = Li(e));
  const u = mE(c, r, o) ? ig(c) : In(0);
  let f = (s.left + u.x) / l.x, h = (s.top + u.y) / l.y, p = s.width / l.x, v = s.height / l.y;
  if (c) {
    const x = tn(c), y = o && Sn(o) ? tn(o) : o;
    let T = x, C = Dc(T);
    for (; C && o && y !== T; ) {
      const _ = Li(C), E = C.getBoundingClientRect(), A = Cn(C), M = E.left + (C.clientLeft + parseFloat(A.paddingLeft)) * _.x, I = E.top + (C.clientTop + parseFloat(A.paddingTop)) * _.y;
      f *= _.x, h *= _.y, p *= _.x, v *= _.y, f += M, h += I, T = tn(C), C = Dc(T);
    }
  }
  return ta({
    width: p,
    height: v,
    x: f,
    y: h
  });
}
function mu(e, t) {
  const r = ba(e).scrollLeft;
  return t ? t.left + r : ni(Fn(e)).left + r;
}
function og(e, t, r) {
  r === void 0 && (r = !1);
  const o = e.getBoundingClientRect(), s = o.left + t.scrollLeft - (r ? 0 : (
    // RTL <body> scrollbar.
    mu(e, o)
  )), c = o.top + t.scrollTop;
  return {
    x: s,
    y: c
  };
}
function gE(e) {
  let {
    elements: t,
    rect: r,
    offsetParent: o,
    strategy: s
  } = e;
  const c = s === "fixed", l = Fn(o), u = t ? wa(t.floating) : !1;
  if (o === l || u && c)
    return r;
  let f = {
    scrollLeft: 0,
    scrollTop: 0
  }, h = In(1);
  const p = In(0), v = Vn(o);
  if ((v || !v && !c) && ((Gi(o) !== "body" || Vo(l)) && (f = ba(o)), Vn(o))) {
    const y = ni(o);
    h = Li(o), p.x = y.x + o.clientLeft, p.y = y.y + o.clientTop;
  }
  const x = l && !v && !c ? og(l, f, !0) : In(0);
  return {
    width: r.width * h.x,
    height: r.height * h.y,
    x: r.x * h.x - f.scrollLeft * h.x + p.x + x.x,
    y: r.y * h.y - f.scrollTop * h.y + p.y + x.y
  };
}
function vE(e) {
  return Array.from(e.getClientRects());
}
function yE(e) {
  const t = Fn(e), r = ba(e), o = e.ownerDocument.body, s = en(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth), c = en(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight);
  let l = -r.scrollLeft + mu(e);
  const u = -r.scrollTop;
  return Cn(o).direction === "rtl" && (l += en(t.clientWidth, o.clientWidth) - s), {
    width: s,
    height: c,
    x: l,
    y: u
  };
}
function xE(e, t) {
  const r = tn(e), o = Fn(e), s = r.visualViewport;
  let c = o.clientWidth, l = o.clientHeight, u = 0, f = 0;
  if (s) {
    c = s.width, l = s.height;
    const h = hu();
    (!h || h && t === "fixed") && (u = s.offsetLeft, f = s.offsetTop);
  }
  return {
    width: c,
    height: l,
    x: u,
    y: f
  };
}
function wE(e, t) {
  const r = ni(e, !0, t === "fixed"), o = r.top + e.clientTop, s = r.left + e.clientLeft, c = Vn(e) ? Li(e) : In(1), l = e.clientWidth * c.x, u = e.clientHeight * c.y, f = s * c.x, h = o * c.y;
  return {
    width: l,
    height: u,
    x: f,
    y: h
  };
}
function op(e, t, r) {
  let o;
  if (t === "viewport")
    o = xE(e, r);
  else if (t === "document")
    o = yE(Fn(e));
  else if (Sn(t))
    o = wE(t, r);
  else {
    const s = ig(e);
    o = {
      x: t.x - s.x,
      y: t.y - s.y,
      width: t.width,
      height: t.height
    };
  }
  return ta(o);
}
function sg(e, t) {
  const r = Ar(e);
  return r === t || !Sn(r) || Vi(r) ? !1 : Cn(r).position === "fixed" || sg(r, t);
}
function bE(e, t) {
  const r = t.get(e);
  if (r)
    return r;
  let o = Mo(e, [], !1).filter((u) => Sn(u) && Gi(u) !== "body"), s = null;
  const c = Cn(e).position === "fixed";
  let l = c ? Ar(e) : e;
  for (; Sn(l) && !Vi(l); ) {
    const u = Cn(l), f = du(l);
    !f && u.position === "fixed" && (s = null), (c ? !f && !s : !f && u.position === "static" && !!s && ["absolute", "fixed"].includes(s.position) || Vo(l) && !f && sg(e, l)) ? o = o.filter((p) => p !== l) : s = u, l = Ar(l);
  }
  return t.set(e, o), o;
}
function SE(e) {
  let {
    element: t,
    boundary: r,
    rootBoundary: o,
    strategy: s
  } = e;
  const l = [...r === "clippingAncestors" ? wa(t) ? [] : bE(t, this._c) : [].concat(r), o], u = l[0], f = l.reduce((h, p) => {
    const v = op(t, p, s);
    return h.top = en(v.top, h.top), h.right = Pr(v.right, h.right), h.bottom = Pr(v.bottom, h.bottom), h.left = en(v.left, h.left), h;
  }, op(t, u, s));
  return {
    width: f.right - f.left,
    height: f.bottom - f.top,
    x: f.left,
    y: f.top
  };
}
function CE(e) {
  const {
    width: t,
    height: r
  } = rg(e);
  return {
    width: t,
    height: r
  };
}
function TE(e, t, r) {
  const o = Vn(t), s = Fn(t), c = r === "fixed", l = ni(e, !0, c, t);
  let u = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const f = In(0);
  if (o || !o && !c)
    if ((Gi(t) !== "body" || Vo(s)) && (u = ba(t)), o) {
      const x = ni(t, !0, c, t);
      f.x = x.x + t.clientLeft, f.y = x.y + t.clientTop;
    } else
      s && (f.x = mu(s));
  const h = s && !o && !c ? og(s, u) : In(0), p = l.left + u.scrollLeft - f.x - h.x, v = l.top + u.scrollTop - f.y - h.y;
  return {
    x: p,
    y: v,
    width: l.width,
    height: l.height
  };
}
function oc(e) {
  return Cn(e).position === "static";
}
function sp(e, t) {
  if (!Vn(e) || Cn(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let r = e.offsetParent;
  return Fn(e) === r && (r = r.ownerDocument.body), r;
}
function ag(e, t) {
  const r = tn(e);
  if (wa(e))
    return r;
  if (!Vn(e)) {
    let s = Ar(e);
    for (; s && !Vi(s); ) {
      if (Sn(s) && !oc(s))
        return s;
      s = Ar(s);
    }
    return r;
  }
  let o = sp(e, t);
  for (; o && dE(o) && oc(o); )
    o = sp(o, t);
  return o && Vi(o) && oc(o) && !du(o) ? r : o || hE(e) || r;
}
const _E = async function(e) {
  const t = this.getOffsetParent || ag, r = this.getDimensions, o = await r(e.floating);
  return {
    reference: TE(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: o.width,
      height: o.height
    }
  };
};
function PE(e) {
  return Cn(e).direction === "rtl";
}
const EE = {
  convertOffsetParentRelativeRectToViewportRelativeRect: gE,
  getDocumentElement: Fn,
  getClippingRect: SE,
  getOffsetParent: ag,
  getElementRects: _E,
  getClientRects: vE,
  getDimensions: CE,
  getScale: Li,
  isElement: Sn,
  isRTL: PE
};
function AE(e, t) {
  let r = null, o;
  const s = Fn(e);
  function c() {
    var u;
    clearTimeout(o), (u = r) == null || u.disconnect(), r = null;
  }
  function l(u, f) {
    u === void 0 && (u = !1), f === void 0 && (f = 1), c();
    const {
      left: h,
      top: p,
      width: v,
      height: x
    } = e.getBoundingClientRect();
    if (u || t(), !v || !x)
      return;
    const y = js(p), T = js(s.clientWidth - (h + v)), C = js(s.clientHeight - (p + x)), _ = js(h), A = {
      rootMargin: -y + "px " + -T + "px " + -C + "px " + -_ + "px",
      threshold: en(0, Pr(1, f)) || 1
    };
    let M = !0;
    function I(L) {
      const U = L[0].intersectionRatio;
      if (U !== f) {
        if (!M)
          return l();
        U ? l(!1, U) : o = setTimeout(() => {
          l(!1, 1e-7);
        }, 1e3);
      }
      M = !1;
    }
    try {
      r = new IntersectionObserver(I, {
        ...A,
        // Handle <iframe>s
        root: s.ownerDocument
      });
    } catch {
      r = new IntersectionObserver(I, A);
    }
    r.observe(e);
  }
  return l(!0), c;
}
function RE(e, t, r, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: s = !0,
    ancestorResize: c = !0,
    elementResize: l = typeof ResizeObserver == "function",
    layoutShift: u = typeof IntersectionObserver == "function",
    animationFrame: f = !1
  } = o, h = pu(e), p = s || c ? [...h ? Mo(h) : [], ...Mo(t)] : [];
  p.forEach((E) => {
    s && E.addEventListener("scroll", r, {
      passive: !0
    }), c && E.addEventListener("resize", r);
  });
  const v = h && u ? AE(h, r) : null;
  let x = -1, y = null;
  l && (y = new ResizeObserver((E) => {
    let [A] = E;
    A && A.target === h && y && (y.unobserve(t), cancelAnimationFrame(x), x = requestAnimationFrame(() => {
      var M;
      (M = y) == null || M.observe(t);
    })), r();
  }), h && !f && y.observe(h), y.observe(t));
  let T, C = f ? ni(e) : null;
  f && _();
  function _() {
    const E = ni(e);
    C && (E.x !== C.x || E.y !== C.y || E.width !== C.width || E.height !== C.height) && r(), C = E, T = requestAnimationFrame(_);
  }
  return r(), () => {
    var E;
    p.forEach((A) => {
      s && A.removeEventListener("scroll", r), c && A.removeEventListener("resize", r);
    }), v == null || v(), (E = y) == null || E.disconnect(), y = null, f && cancelAnimationFrame(T);
  };
}
const NE = lE, ME = cE, OE = oE, DE = fE, IE = sE, ap = iE, jE = uE, LE = (e, t, r) => {
  const o = /* @__PURE__ */ new Map(), s = {
    platform: EE,
    ...r
  }, c = {
    ...s.platform,
    _c: o
  };
  return rE(e, t, {
    ...s,
    platform: c
  });
};
var zs = typeof document < "u" ? Om : Lo;
function na(e, t) {
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
        if (!na(e[o], t[o]))
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
      if (!(c === "_owner" && e.$$typeof) && !na(e[c], t[c]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function lg(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function lp(e, t) {
  const r = lg(e);
  return Math.round(t * r) / r;
}
function sc(e) {
  const t = S.useRef(e);
  return zs(() => {
    t.current = e;
  }), t;
}
function kE(e) {
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
  } = e, [p, v] = S.useState({
    x: 0,
    y: 0,
    strategy: r,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [x, y] = S.useState(o);
  na(x, o) || y(o);
  const [T, C] = S.useState(null), [_, E] = S.useState(null), A = S.useCallback((q) => {
    q !== U.current && (U.current = q, C(q));
  }, []), M = S.useCallback((q) => {
    q !== $.current && ($.current = q, E(q));
  }, []), I = c || T, L = l || _, U = S.useRef(null), $ = S.useRef(null), H = S.useRef(p), te = f != null, re = sc(f), de = sc(s), J = sc(h), se = S.useCallback(() => {
    if (!U.current || !$.current)
      return;
    const q = {
      placement: t,
      strategy: r,
      middleware: x
    };
    de.current && (q.platform = de.current), LE(U.current, $.current, q).then((G) => {
      const pe = {
        ...G,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: J.current !== !1
      };
      ne.current && !na(H.current, pe) && (H.current = pe, ga.flushSync(() => {
        v(pe);
      }));
    });
  }, [x, t, r, de, J]);
  zs(() => {
    h === !1 && H.current.isPositioned && (H.current.isPositioned = !1, v((q) => ({
      ...q,
      isPositioned: !1
    })));
  }, [h]);
  const ne = S.useRef(!1);
  zs(() => (ne.current = !0, () => {
    ne.current = !1;
  }), []), zs(() => {
    if (I && (U.current = I), L && ($.current = L), I && L) {
      if (re.current)
        return re.current(I, L, se);
      se();
    }
  }, [I, L, se, re, te]);
  const Te = S.useMemo(() => ({
    reference: U,
    floating: $,
    setReference: A,
    setFloating: M
  }), [A, M]), ie = S.useMemo(() => ({
    reference: I,
    floating: L
  }), [I, L]), Z = S.useMemo(() => {
    const q = {
      position: r,
      left: 0,
      top: 0
    };
    if (!ie.floating)
      return q;
    const G = lp(ie.floating, p.x), pe = lp(ie.floating, p.y);
    return u ? {
      ...q,
      transform: "translate(" + G + "px, " + pe + "px)",
      ...lg(ie.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: r,
      left: G,
      top: pe
    };
  }, [r, u, ie.floating, p.x, p.y]);
  return S.useMemo(() => ({
    ...p,
    update: se,
    refs: Te,
    elements: ie,
    floatingStyles: Z
  }), [p, se, Te, ie, Z]);
}
const VE = (e) => {
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
      return o && t(o) ? o.current != null ? ap({
        element: o.current,
        padding: s
      }).fn(r) : {} : o ? ap({
        element: o,
        padding: s
      }).fn(r) : {};
    }
  };
}, FE = (e, t) => ({
  ...NE(e),
  options: [e, t]
}), BE = (e, t) => ({
  ...ME(e),
  options: [e, t]
}), WE = (e, t) => ({
  ...jE(e),
  options: [e, t]
}), $E = (e, t) => ({
  ...OE(e),
  options: [e, t]
}), UE = (e, t) => ({
  ...DE(e),
  options: [e, t]
}), HE = (e, t) => ({
  ...IE(e),
  options: [e, t]
}), zE = (e, t) => ({
  ...VE(e),
  options: [e, t]
});
var GE = "Arrow", cg = S.forwardRef((e, t) => {
  const { children: r, width: o = 10, height: s = 5, ...c } = e;
  return /* @__PURE__ */ m.jsx(
    $e.svg,
    {
      ...c,
      ref: t,
      width: o,
      height: s,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? r : /* @__PURE__ */ m.jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
cg.displayName = GE;
var KE = cg;
function YE(e, t = []) {
  let r = [];
  function o(c, l) {
    const u = S.createContext(l), f = r.length;
    r = [...r, l];
    function h(v) {
      const { scope: x, children: y, ...T } = v, C = (x == null ? void 0 : x[e][f]) || u, _ = S.useMemo(() => T, Object.values(T));
      return /* @__PURE__ */ m.jsx(C.Provider, { value: _, children: y });
    }
    function p(v, x) {
      const y = (x == null ? void 0 : x[e][f]) || u, T = S.useContext(y);
      if (T)
        return T;
      if (l !== void 0)
        return l;
      throw new Error(`\`${v}\` must be used within \`${c}\``);
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
  return s.scopeName = e, [o, qE(s, ...t)];
}
function qE(...e) {
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
        const v = f(c)[`__scope${h}`];
        return { ...u, ...v };
      }, {});
      return S.useMemo(() => ({ [`__scope${t.scopeName}`]: l }), [l]);
    };
  };
  return r.scopeName = t.scopeName, r;
}
function XE(e) {
  const [t, r] = S.useState(void 0);
  return kt(() => {
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
var gu = "Popper", [ug, Sa] = YE(gu), [ZE, fg] = ug(gu), dg = (e) => {
  const { __scopePopper: t, children: r } = e, [o, s] = S.useState(null);
  return /* @__PURE__ */ m.jsx(ZE, { scope: t, anchor: o, onAnchorChange: s, children: r });
};
dg.displayName = gu;
var hg = "PopperAnchor", pg = S.forwardRef(
  (e, t) => {
    const { __scopePopper: r, virtualRef: o, ...s } = e, c = fg(hg, r), l = S.useRef(null), u = rt(t, l);
    return S.useEffect(() => {
      c.onAnchorChange((o == null ? void 0 : o.current) || l.current);
    }), o ? null : /* @__PURE__ */ m.jsx($e.div, { ...s, ref: u });
  }
);
pg.displayName = hg;
var vu = "PopperContent", [JE, QE] = ug(vu), mg = S.forwardRef(
  (e, t) => {
    var X, we, Le, Se, ve, Pe;
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
      sticky: v = "partial",
      hideWhenDetached: x = !1,
      updatePositionStrategy: y = "optimized",
      onPlaced: T,
      ...C
    } = e, _ = fg(vu, r), [E, A] = S.useState(null), M = rt(t, (st) => A(st)), [I, L] = S.useState(null), U = XE(I), $ = (U == null ? void 0 : U.width) ?? 0, H = (U == null ? void 0 : U.height) ?? 0, te = o + (c !== "center" ? "-" + c : ""), re = typeof p == "number" ? p : { top: 0, right: 0, bottom: 0, left: 0, ...p }, de = Array.isArray(h) ? h : [h], J = de.length > 0, se = {
      padding: re,
      boundary: de.filter(tA),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: J
    }, { refs: ne, floatingStyles: Te, placement: ie, isPositioned: Z, middlewareData: q } = kE({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: te,
      whileElementsMounted: (...st) => RE(...st, {
        animationFrame: y === "always"
      }),
      elements: {
        reference: _.anchor
      },
      middleware: [
        FE({ mainAxis: s + H, alignmentAxis: l }),
        f && BE({
          mainAxis: !0,
          crossAxis: !1,
          limiter: v === "partial" ? WE() : void 0,
          ...se
        }),
        f && $E({ ...se }),
        UE({
          ...se,
          apply: ({ elements: st, rects: Ye, availableWidth: dt, availableHeight: Mt }) => {
            const { width: at, height: rn } = Ye.reference, Vt = st.floating.style;
            Vt.setProperty("--radix-popper-available-width", `${dt}px`), Vt.setProperty("--radix-popper-available-height", `${Mt}px`), Vt.setProperty("--radix-popper-anchor-width", `${at}px`), Vt.setProperty("--radix-popper-anchor-height", `${rn}px`);
          }
        }),
        I && zE({ element: I, padding: u }),
        nA({ arrowWidth: $, arrowHeight: H }),
        x && HE({ strategy: "referenceHidden", ...se })
      ]
    }), [G, pe] = yg(ie), Ae = tr(T);
    kt(() => {
      Z && (Ae == null || Ae());
    }, [Z, Ae]);
    const _e = (X = q.arrow) == null ? void 0 : X.x, ge = (we = q.arrow) == null ? void 0 : we.y, Re = ((Le = q.arrow) == null ? void 0 : Le.centerOffset) !== 0, [Fe, Je] = S.useState();
    return kt(() => {
      E && Je(window.getComputedStyle(E).zIndex);
    }, [E]), /* @__PURE__ */ m.jsx(
      "div",
      {
        ref: ne.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...Te,
          transform: Z ? Te.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: Fe,
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
          JE,
          {
            scope: r,
            placedSide: G,
            onArrowChange: L,
            arrowX: _e,
            arrowY: ge,
            shouldHideArrow: Re,
            children: /* @__PURE__ */ m.jsx(
              $e.div,
              {
                "data-side": G,
                "data-align": pe,
                ...C,
                ref: M,
                style: {
                  ...C.style,
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
mg.displayName = vu;
var gg = "PopperArrow", eA = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, vg = S.forwardRef(function(t, r) {
  const { __scopePopper: o, ...s } = t, c = QE(gg, o), l = eA[c.placedSide];
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
          KE,
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
vg.displayName = gg;
function tA(e) {
  return e !== null;
}
var nA = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var _, E, A;
    const { placement: r, rects: o, middlewareData: s } = t, l = ((_ = s.arrow) == null ? void 0 : _.centerOffset) !== 0, u = l ? 0 : e.arrowWidth, f = l ? 0 : e.arrowHeight, [h, p] = yg(r), v = { start: "0%", center: "50%", end: "100%" }[p], x = (((E = s.arrow) == null ? void 0 : E.x) ?? 0) + u / 2, y = (((A = s.arrow) == null ? void 0 : A.y) ?? 0) + f / 2;
    let T = "", C = "";
    return h === "bottom" ? (T = l ? v : `${x}px`, C = `${-f}px`) : h === "top" ? (T = l ? v : `${x}px`, C = `${o.floating.height + f}px`) : h === "right" ? (T = `${-f}px`, C = l ? v : `${y}px`) : h === "left" && (T = `${o.floating.width + f}px`, C = l ? v : `${y}px`), { data: { x: T, y: C } };
  }
});
function yg(e) {
  const [t, r = "center"] = e.split("-");
  return [t, r];
}
var xg = dg, wg = pg, bg = mg, Sg = vg, rA = "Portal", yu = S.forwardRef((e, t) => {
  var u;
  const { container: r, ...o } = e, [s, c] = S.useState(!1);
  kt(() => c(!0), []);
  const l = r || s && ((u = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : u.body);
  return l ? jm.createPortal(/* @__PURE__ */ m.jsx($e.div, { ...o, ref: t }), l) : null;
});
yu.displayName = rA;
function ra({
  prop: e,
  defaultProp: t,
  onChange: r = () => {
  }
}) {
  const [o, s] = iA({ defaultProp: t, onChange: r }), c = e !== void 0, l = c ? e : o, u = tr(r), f = S.useCallback(
    (h) => {
      if (c) {
        const v = typeof h == "function" ? h(e) : h;
        v !== e && u(v);
      } else
        s(h);
    },
    [c, e, s, u]
  );
  return [l, f];
}
function iA({
  defaultProp: e,
  onChange: t
}) {
  const r = S.useState(e), [o] = r, s = S.useRef(o), c = tr(t);
  return S.useEffect(() => {
    s.current !== o && (c(o), s.current = o);
  }, [o, s, c]), r;
}
function oA(e) {
  const t = S.useRef({ value: e, previous: e });
  return S.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
var sA = "VisuallyHidden", xu = S.forwardRef(
  (e, t) => /* @__PURE__ */ m.jsx(
    $e.span,
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
xu.displayName = sA;
var aA = xu, lA = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Ei = /* @__PURE__ */ new WeakMap(), Ls = /* @__PURE__ */ new WeakMap(), ks = {}, ac = 0, Cg = function(e) {
  return e && (e.host || Cg(e.parentNode));
}, cA = function(e, t) {
  return t.map(function(r) {
    if (e.contains(r))
      return r;
    var o = Cg(r);
    return o && e.contains(o) ? o : (console.error("aria-hidden", r, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(r) {
    return !!r;
  });
}, uA = function(e, t, r, o) {
  var s = cA(t, Array.isArray(e) ? e : [e]);
  ks[r] || (ks[r] = /* @__PURE__ */ new WeakMap());
  var c = ks[r], l = [], u = /* @__PURE__ */ new Set(), f = new Set(s), h = function(v) {
    !v || u.has(v) || (u.add(v), h(v.parentNode));
  };
  s.forEach(h);
  var p = function(v) {
    !v || f.has(v) || Array.prototype.forEach.call(v.children, function(x) {
      if (u.has(x))
        p(x);
      else
        try {
          var y = x.getAttribute(o), T = y !== null && y !== "false", C = (Ei.get(x) || 0) + 1, _ = (c.get(x) || 0) + 1;
          Ei.set(x, C), c.set(x, _), l.push(x), C === 1 && T && Ls.set(x, !0), _ === 1 && x.setAttribute(r, "true"), T || x.setAttribute(o, "true");
        } catch (E) {
          console.error("aria-hidden: cannot operate on ", x, E);
        }
    });
  };
  return p(t), u.clear(), ac++, function() {
    l.forEach(function(v) {
      var x = Ei.get(v) - 1, y = c.get(v) - 1;
      Ei.set(v, x), c.set(v, y), x || (Ls.has(v) || v.removeAttribute(o), Ls.delete(v)), y || v.removeAttribute(r);
    }), ac--, ac || (Ei = /* @__PURE__ */ new WeakMap(), Ei = /* @__PURE__ */ new WeakMap(), Ls = /* @__PURE__ */ new WeakMap(), ks = {});
  };
}, Tg = function(e, t, r) {
  r === void 0 && (r = "data-aria-hidden");
  var o = Array.from(Array.isArray(e) ? e : [e]), s = lA(e);
  return s ? (o.push.apply(o, Array.from(s.querySelectorAll("[aria-live]"))), uA(o, s, r, "aria-hidden")) : function() {
    return null;
  };
}, br = function() {
  return br = Object.assign || function(t) {
    for (var r, o = 1, s = arguments.length; o < s; o++) {
      r = arguments[o];
      for (var c in r)
        Object.prototype.hasOwnProperty.call(r, c) && (t[c] = r[c]);
    }
    return t;
  }, br.apply(this, arguments);
};
function fA(e, t) {
  var r = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (r[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, o = Object.getOwnPropertySymbols(e); s < o.length; s++)
      t.indexOf(o[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[s]) && (r[o[s]] = e[o[s]]);
  return r;
}
function dA(e, t, r) {
  if (r || arguments.length === 2)
    for (var o = 0, s = t.length, c; o < s; o++)
      (c || !(o in t)) && (c || (c = Array.prototype.slice.call(t, 0, o)), c[o] = t[o]);
  return e.concat(c || Array.prototype.slice.call(t));
}
var Gs = "right-scroll-bar-position", Ks = "width-before-scroll-bar", hA = "with-scroll-bars-hidden", pA = "--removed-body-scroll-bar-size";
function lc(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function mA(e, t) {
  var r = Sr(function() {
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
var gA = typeof window < "u" ? S.useLayoutEffect : S.useEffect, cp = /* @__PURE__ */ new WeakMap();
function vA(e, t) {
  var r = mA(null, function(o) {
    return e.forEach(function(s) {
      return lc(s, o);
    });
  });
  return gA(function() {
    var o = cp.get(r);
    if (o) {
      var s = new Set(o), c = new Set(e), l = r.current;
      s.forEach(function(u) {
        c.has(u) || lc(u, null);
      }), c.forEach(function(u) {
        s.has(u) || lc(u, l);
      });
    }
    cp.set(r, e);
  }, [e]), r;
}
var ia = function() {
  return ia = Object.assign || function(t) {
    for (var r, o = 1, s = arguments.length; o < s; o++) {
      r = arguments[o];
      for (var c in r)
        Object.prototype.hasOwnProperty.call(r, c) && (t[c] = r[c]);
    }
    return t;
  }, ia.apply(this, arguments);
};
function yA(e, t) {
  var r = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (r[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, o = Object.getOwnPropertySymbols(e); s < o.length; s++)
      t.indexOf(o[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[s]) && (r[o[s]] = e[o[s]]);
  return r;
}
function xA(e) {
  return e;
}
function wA(e, t) {
  t === void 0 && (t = xA);
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
function bA(e) {
  e === void 0 && (e = {});
  var t = wA(null);
  return t.options = ia({ async: !0, ssr: !1 }, e), t;
}
var _g = function(e) {
  var t = e.sideCar, r = yA(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var o = t.read();
  if (!o)
    throw new Error("Sidecar medium not found");
  return S.createElement(o, ia({}, r));
};
_g.isSideCarExport = !0;
function SA(e, t) {
  return e.useMedium(t), _g;
}
var Pg = bA(), cc = function() {
}, Ca = S.forwardRef(function(e, t) {
  var r = S.useRef(null), o = S.useState({
    onScrollCapture: cc,
    onWheelCapture: cc,
    onTouchMoveCapture: cc
  }), s = o[0], c = o[1], l = e.forwardProps, u = e.children, f = e.className, h = e.removeScrollBar, p = e.enabled, v = e.shards, x = e.sideCar, y = e.noIsolation, T = e.inert, C = e.allowPinchZoom, _ = e.as, E = _ === void 0 ? "div" : _, A = e.gapMode, M = fA(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), I = x, L = vA([r, t]), U = br(br({}, M), s);
  return S.createElement(
    S.Fragment,
    null,
    p && S.createElement(I, { sideCar: Pg, removeScrollBar: h, shards: v, noIsolation: y, inert: T, setCallbacks: c, allowPinchZoom: !!C, lockRef: r, gapMode: A }),
    l ? S.cloneElement(S.Children.only(u), br(br({}, U), { ref: L })) : S.createElement(E, br({}, U, { className: f, ref: L }), u)
  );
});
Ca.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Ca.classNames = {
  fullWidth: Ks,
  zeroRight: Gs
};
var CA = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function TA() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = CA();
  return t && e.setAttribute("nonce", t), e;
}
function _A(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function PA(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var EA = function() {
  var e = 0, t = null;
  return {
    add: function(r) {
      e == 0 && (t = TA()) && (_A(t, r), PA(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, AA = function() {
  var e = EA();
  return function(t, r) {
    S.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && r]);
  };
}, Eg = function() {
  var e = AA(), t = function(r) {
    var o = r.styles, s = r.dynamic;
    return e(o, s), null;
  };
  return t;
}, RA = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, uc = function(e) {
  return parseInt(e || "", 10) || 0;
}, NA = function(e) {
  var t = window.getComputedStyle(document.body), r = t[e === "padding" ? "paddingLeft" : "marginLeft"], o = t[e === "padding" ? "paddingTop" : "marginTop"], s = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [uc(r), uc(o), uc(s)];
}, MA = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return RA;
  var t = NA(e), r = document.documentElement.clientWidth, o = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, o - r + t[2] - t[0])
  };
}, OA = Eg(), ki = "data-scroll-locked", DA = function(e, t, r, o) {
  var s = e.left, c = e.top, l = e.right, u = e.gap;
  return r === void 0 && (r = "margin"), `
  .`.concat(hA, ` {
   overflow: hidden `).concat(o, `;
   padding-right: `).concat(u, "px ").concat(o, `;
  }
  body[`).concat(ki, `] {
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
  
  .`).concat(Gs, ` {
    right: `).concat(u, "px ").concat(o, `;
  }
  
  .`).concat(Ks, ` {
    margin-right: `).concat(u, "px ").concat(o, `;
  }
  
  .`).concat(Gs, " .").concat(Gs, ` {
    right: 0 `).concat(o, `;
  }
  
  .`).concat(Ks, " .").concat(Ks, ` {
    margin-right: 0 `).concat(o, `;
  }
  
  body[`).concat(ki, `] {
    `).concat(pA, ": ").concat(u, `px;
  }
`);
}, up = function() {
  var e = parseInt(document.body.getAttribute(ki) || "0", 10);
  return isFinite(e) ? e : 0;
}, IA = function() {
  S.useEffect(function() {
    return document.body.setAttribute(ki, (up() + 1).toString()), function() {
      var e = up() - 1;
      e <= 0 ? document.body.removeAttribute(ki) : document.body.setAttribute(ki, e.toString());
    };
  }, []);
}, jA = function(e) {
  var t = e.noRelative, r = e.noImportant, o = e.gapMode, s = o === void 0 ? "margin" : o;
  IA();
  var c = S.useMemo(function() {
    return MA(s);
  }, [s]);
  return S.createElement(OA, { styles: DA(c, !t, s, r ? "" : "!important") });
}, Ic = !1;
if (typeof window < "u")
  try {
    var Vs = Object.defineProperty({}, "passive", {
      get: function() {
        return Ic = !0, !0;
      }
    });
    window.addEventListener("test", Vs, Vs), window.removeEventListener("test", Vs, Vs);
  } catch {
    Ic = !1;
  }
var Ai = Ic ? { passive: !1 } : !1, LA = function(e) {
  return e.tagName === "TEXTAREA";
}, Ag = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var r = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    r[t] !== "hidden" && // contains scroll inside self
    !(r.overflowY === r.overflowX && !LA(e) && r[t] === "visible")
  );
}, kA = function(e) {
  return Ag(e, "overflowY");
}, VA = function(e) {
  return Ag(e, "overflowX");
}, fp = function(e, t) {
  var r = t.ownerDocument, o = t;
  do {
    typeof ShadowRoot < "u" && o instanceof ShadowRoot && (o = o.host);
    var s = Rg(e, o);
    if (s) {
      var c = Ng(e, o), l = c[1], u = c[2];
      if (l > u)
        return !0;
    }
    o = o.parentNode;
  } while (o && o !== r.body);
  return !1;
}, FA = function(e) {
  var t = e.scrollTop, r = e.scrollHeight, o = e.clientHeight;
  return [
    t,
    r,
    o
  ];
}, BA = function(e) {
  var t = e.scrollLeft, r = e.scrollWidth, o = e.clientWidth;
  return [
    t,
    r,
    o
  ];
}, Rg = function(e, t) {
  return e === "v" ? kA(t) : VA(t);
}, Ng = function(e, t) {
  return e === "v" ? FA(t) : BA(t);
}, WA = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, $A = function(e, t, r, o, s) {
  var c = WA(e, window.getComputedStyle(t).direction), l = c * o, u = r.target, f = t.contains(u), h = !1, p = l > 0, v = 0, x = 0;
  do {
    var y = Ng(e, u), T = y[0], C = y[1], _ = y[2], E = C - _ - c * T;
    (T || E) && Rg(e, u) && (v += E, x += T), u instanceof ShadowRoot ? u = u.host : u = u.parentNode;
  } while (
    // portaled content
    !f && u !== document.body || // self content
    f && (t.contains(u) || t === u)
  );
  return (p && (Math.abs(v) < 1 || !s) || !p && (Math.abs(x) < 1 || !s)) && (h = !0), h;
}, Fs = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, dp = function(e) {
  return [e.deltaX, e.deltaY];
}, hp = function(e) {
  return e && "current" in e ? e.current : e;
}, UA = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, HA = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, zA = 0, Ri = [];
function GA(e) {
  var t = S.useRef([]), r = S.useRef([0, 0]), o = S.useRef(), s = S.useState(zA++)[0], c = S.useState(Eg)[0], l = S.useRef(e);
  S.useEffect(function() {
    l.current = e;
  }, [e]), S.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(s));
      var C = dA([e.lockRef.current], (e.shards || []).map(hp), !0).filter(Boolean);
      return C.forEach(function(_) {
        return _.classList.add("allow-interactivity-".concat(s));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(s)), C.forEach(function(_) {
          return _.classList.remove("allow-interactivity-".concat(s));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var u = S.useCallback(function(C, _) {
    if ("touches" in C && C.touches.length === 2 || C.type === "wheel" && C.ctrlKey)
      return !l.current.allowPinchZoom;
    var E = Fs(C), A = r.current, M = "deltaX" in C ? C.deltaX : A[0] - E[0], I = "deltaY" in C ? C.deltaY : A[1] - E[1], L, U = C.target, $ = Math.abs(M) > Math.abs(I) ? "h" : "v";
    if ("touches" in C && $ === "h" && U.type === "range")
      return !1;
    var H = fp($, U);
    if (!H)
      return !0;
    if (H ? L = $ : (L = $ === "v" ? "h" : "v", H = fp($, U)), !H)
      return !1;
    if (!o.current && "changedTouches" in C && (M || I) && (o.current = L), !L)
      return !0;
    var te = o.current || L;
    return $A(te, _, C, te === "h" ? M : I, !0);
  }, []), f = S.useCallback(function(C) {
    var _ = C;
    if (!(!Ri.length || Ri[Ri.length - 1] !== c)) {
      var E = "deltaY" in _ ? dp(_) : Fs(_), A = t.current.filter(function(L) {
        return L.name === _.type && (L.target === _.target || _.target === L.shadowParent) && UA(L.delta, E);
      })[0];
      if (A && A.should) {
        _.cancelable && _.preventDefault();
        return;
      }
      if (!A) {
        var M = (l.current.shards || []).map(hp).filter(Boolean).filter(function(L) {
          return L.contains(_.target);
        }), I = M.length > 0 ? u(_, M[0]) : !l.current.noIsolation;
        I && _.cancelable && _.preventDefault();
      }
    }
  }, []), h = S.useCallback(function(C, _, E, A) {
    var M = { name: C, delta: _, target: E, should: A, shadowParent: KA(E) };
    t.current.push(M), setTimeout(function() {
      t.current = t.current.filter(function(I) {
        return I !== M;
      });
    }, 1);
  }, []), p = S.useCallback(function(C) {
    r.current = Fs(C), o.current = void 0;
  }, []), v = S.useCallback(function(C) {
    h(C.type, dp(C), C.target, u(C, e.lockRef.current));
  }, []), x = S.useCallback(function(C) {
    h(C.type, Fs(C), C.target, u(C, e.lockRef.current));
  }, []);
  S.useEffect(function() {
    return Ri.push(c), e.setCallbacks({
      onScrollCapture: v,
      onWheelCapture: v,
      onTouchMoveCapture: x
    }), document.addEventListener("wheel", f, Ai), document.addEventListener("touchmove", f, Ai), document.addEventListener("touchstart", p, Ai), function() {
      Ri = Ri.filter(function(C) {
        return C !== c;
      }), document.removeEventListener("wheel", f, Ai), document.removeEventListener("touchmove", f, Ai), document.removeEventListener("touchstart", p, Ai);
    };
  }, []);
  var y = e.removeScrollBar, T = e.inert;
  return S.createElement(
    S.Fragment,
    null,
    T ? S.createElement(c, { styles: HA(s) }) : null,
    y ? S.createElement(jA, { gapMode: e.gapMode }) : null
  );
}
function KA(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const YA = SA(Pg, GA);
var wu = S.forwardRef(function(e, t) {
  return S.createElement(Ca, br({}, e, { ref: t, sideCar: YA }));
});
wu.classNames = Ca.classNames;
var qA = [" ", "Enter", "ArrowUp", "ArrowDown"], XA = [" ", "Enter"], Fo = "Select", [Ta, _a, ZA] = _P(Fo), [Ki, QD] = au(Fo, [
  ZA,
  Sa
]), Pa = Sa(), [JA, Dr] = Ki(Fo), [QA, eR] = Ki(Fo), Mg = (e) => {
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
    autoComplete: v,
    disabled: x,
    required: y,
    form: T
  } = e, C = Pa(t), [_, E] = S.useState(null), [A, M] = S.useState(null), [I, L] = S.useState(!1), U = RP(h), [$ = !1, H] = ra({
    prop: o,
    defaultProp: s,
    onChange: c
  }), [te, re] = ra({
    prop: l,
    defaultProp: u,
    onChange: f
  }), de = S.useRef(null), J = _ ? T || !!_.closest("form") : !0, [se, ne] = S.useState(/* @__PURE__ */ new Set()), Te = Array.from(se).map((ie) => ie.props.value).join(";");
  return /* @__PURE__ */ m.jsx(xg, { ...C, children: /* @__PURE__ */ m.jsxs(
    JA,
    {
      required: y,
      scope: t,
      trigger: _,
      onTriggerChange: E,
      valueNode: A,
      onValueNodeChange: M,
      valueNodeHasChildren: I,
      onValueNodeHasChildrenChange: L,
      contentId: Qr(),
      value: te,
      onValueChange: re,
      open: $,
      onOpenChange: H,
      dir: U,
      triggerPointerDownPosRef: de,
      disabled: x,
      children: [
        /* @__PURE__ */ m.jsx(Ta.Provider, { scope: t, children: /* @__PURE__ */ m.jsx(
          QA,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: S.useCallback((ie) => {
              ne((Z) => new Set(Z).add(ie));
            }, []),
            onNativeOptionRemove: S.useCallback((ie) => {
              ne((Z) => {
                const q = new Set(Z);
                return q.delete(ie), q;
              });
            }, []),
            children: r
          }
        ) }),
        J ? /* @__PURE__ */ m.jsxs(
          nv,
          {
            "aria-hidden": !0,
            required: y,
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
Mg.displayName = Fo;
var Og = "SelectTrigger", Dg = S.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, disabled: o = !1, ...s } = e, c = Pa(r), l = Dr(Og, r), u = l.disabled || o, f = rt(t, l.onTriggerChange), h = _a(r), p = S.useRef("touch"), [v, x, y] = rv((C) => {
      const _ = h().filter((M) => !M.disabled), E = _.find((M) => M.value === l.value), A = iv(_, C, E);
      A !== void 0 && l.onValueChange(A.value);
    }), T = (C) => {
      u || (l.onOpenChange(!0), y()), C && (l.triggerPointerDownPosRef.current = {
        x: Math.round(C.pageX),
        y: Math.round(C.pageY)
      });
    };
    return /* @__PURE__ */ m.jsx(wg, { asChild: !0, ...c, children: /* @__PURE__ */ m.jsx(
      $e.button,
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
        "data-placeholder": tv(l.value) ? "" : void 0,
        ...s,
        ref: f,
        onClick: Ve(s.onClick, (C) => {
          C.currentTarget.focus(), p.current !== "mouse" && T(C);
        }),
        onPointerDown: Ve(s.onPointerDown, (C) => {
          p.current = C.pointerType;
          const _ = C.target;
          _.hasPointerCapture(C.pointerId) && _.releasePointerCapture(C.pointerId), C.button === 0 && C.ctrlKey === !1 && C.pointerType === "mouse" && (T(C), C.preventDefault());
        }),
        onKeyDown: Ve(s.onKeyDown, (C) => {
          const _ = v.current !== "";
          !(C.ctrlKey || C.altKey || C.metaKey) && C.key.length === 1 && x(C.key), !(_ && C.key === " ") && qA.includes(C.key) && (T(), C.preventDefault());
        })
      }
    ) });
  }
);
Dg.displayName = Og;
var Ig = "SelectValue", jg = S.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, className: o, style: s, children: c, placeholder: l = "", ...u } = e, f = Dr(Ig, r), { onValueNodeHasChildrenChange: h } = f, p = c !== void 0, v = rt(t, f.onValueNodeChange);
    return kt(() => {
      h(p);
    }, [h, p]), /* @__PURE__ */ m.jsx(
      $e.span,
      {
        ...u,
        ref: v,
        style: { pointerEvents: "none" },
        children: tv(f.value) ? /* @__PURE__ */ m.jsx(m.Fragment, { children: l }) : c
      }
    );
  }
);
jg.displayName = Ig;
var tR = "SelectIcon", Lg = S.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, children: o, ...s } = e;
    return /* @__PURE__ */ m.jsx($e.span, { "aria-hidden": !0, ...s, ref: t, children: o || "▼" });
  }
);
Lg.displayName = tR;
var nR = "SelectPortal", kg = (e) => /* @__PURE__ */ m.jsx(yu, { asChild: !0, ...e });
kg.displayName = nR;
var ri = "SelectContent", Vg = S.forwardRef(
  (e, t) => {
    const r = Dr(ri, e.__scopeSelect), [o, s] = S.useState();
    if (kt(() => {
      s(new DocumentFragment());
    }, []), !r.open) {
      const c = o;
      return c ? ga.createPortal(
        /* @__PURE__ */ m.jsx(Fg, { scope: e.__scopeSelect, children: /* @__PURE__ */ m.jsx(Ta.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ m.jsx("div", { children: e.children }) }) }),
        c
      ) : null;
    }
    return /* @__PURE__ */ m.jsx(Bg, { ...e, ref: t });
  }
);
Vg.displayName = ri;
var bn = 10, [Fg, Ir] = Ki(ri), rR = "SelectContentImpl", Bg = S.forwardRef(
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
      arrowPadding: v,
      collisionBoundary: x,
      collisionPadding: y,
      sticky: T,
      hideWhenDetached: C,
      avoidCollisions: _,
      //
      ...E
    } = e, A = Dr(ri, r), [M, I] = S.useState(null), [L, U] = S.useState(null), $ = rt(t, (X) => I(X)), [H, te] = S.useState(null), [re, de] = S.useState(
      null
    ), J = _a(r), [se, ne] = S.useState(!1), Te = S.useRef(!1);
    S.useEffect(() => {
      if (M)
        return Tg(M);
    }, [M]), Jm();
    const ie = S.useCallback(
      (X) => {
        const [we, ...Le] = J().map((Pe) => Pe.ref.current), [Se] = Le.slice(-1), ve = document.activeElement;
        for (const Pe of X)
          if (Pe === ve || (Pe == null || Pe.scrollIntoView({ block: "nearest" }), Pe === we && L && (L.scrollTop = 0), Pe === Se && L && (L.scrollTop = L.scrollHeight), Pe == null || Pe.focus(), document.activeElement !== ve))
            return;
      },
      [J, L]
    ), Z = S.useCallback(
      () => ie([H, M]),
      [ie, H, M]
    );
    S.useEffect(() => {
      se && Z();
    }, [se, Z]);
    const { onOpenChange: q, triggerPointerDownPosRef: G } = A;
    S.useEffect(() => {
      if (M) {
        let X = { x: 0, y: 0 };
        const we = (Se) => {
          var ve, Pe;
          X = {
            x: Math.abs(Math.round(Se.pageX) - (((ve = G.current) == null ? void 0 : ve.x) ?? 0)),
            y: Math.abs(Math.round(Se.pageY) - (((Pe = G.current) == null ? void 0 : Pe.y) ?? 0))
          };
        }, Le = (Se) => {
          X.x <= 10 && X.y <= 10 ? Se.preventDefault() : M.contains(Se.target) || q(!1), document.removeEventListener("pointermove", we), G.current = null;
        };
        return G.current !== null && (document.addEventListener("pointermove", we), document.addEventListener("pointerup", Le, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", we), document.removeEventListener("pointerup", Le, { capture: !0 });
        };
      }
    }, [M, q, G]), S.useEffect(() => {
      const X = () => q(!1);
      return window.addEventListener("blur", X), window.addEventListener("resize", X), () => {
        window.removeEventListener("blur", X), window.removeEventListener("resize", X);
      };
    }, [q]);
    const [pe, Ae] = rv((X) => {
      const we = J().filter((ve) => !ve.disabled), Le = we.find((ve) => ve.ref.current === document.activeElement), Se = iv(we, X, Le);
      Se && setTimeout(() => Se.ref.current.focus());
    }), _e = S.useCallback(
      (X, we, Le) => {
        const Se = !Te.current && !Le;
        (A.value !== void 0 && A.value === we || Se) && (te(X), Se && (Te.current = !0));
      },
      [A.value]
    ), ge = S.useCallback(() => M == null ? void 0 : M.focus(), [M]), Re = S.useCallback(
      (X, we, Le) => {
        const Se = !Te.current && !Le;
        (A.value !== void 0 && A.value === we || Se) && de(X);
      },
      [A.value]
    ), Fe = o === "popper" ? jc : Wg, Je = Fe === jc ? {
      side: u,
      sideOffset: f,
      align: h,
      alignOffset: p,
      arrowPadding: v,
      collisionBoundary: x,
      collisionPadding: y,
      sticky: T,
      hideWhenDetached: C,
      avoidCollisions: _
    } : {};
    return /* @__PURE__ */ m.jsx(
      Fg,
      {
        scope: r,
        content: M,
        viewport: L,
        onViewportChange: U,
        itemRefCallback: _e,
        selectedItem: H,
        onItemLeave: ge,
        itemTextRefCallback: Re,
        focusSelectedItem: Z,
        selectedItemText: re,
        position: o,
        isPositioned: se,
        searchRef: pe,
        children: /* @__PURE__ */ m.jsx(wu, { as: ti, allowPinchZoom: !0, children: /* @__PURE__ */ m.jsx(
          lu,
          {
            asChild: !0,
            trapped: A.open,
            onMountAutoFocus: (X) => {
              X.preventDefault();
            },
            onUnmountAutoFocus: Ve(s, (X) => {
              var we;
              (we = A.trigger) == null || we.focus({ preventScroll: !0 }), X.preventDefault();
            }),
            children: /* @__PURE__ */ m.jsx(
              ya,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: c,
                onPointerDownOutside: l,
                onFocusOutside: (X) => X.preventDefault(),
                onDismiss: () => A.onOpenChange(!1),
                children: /* @__PURE__ */ m.jsx(
                  Fe,
                  {
                    role: "listbox",
                    id: A.contentId,
                    "data-state": A.open ? "open" : "closed",
                    dir: A.dir,
                    onContextMenu: (X) => X.preventDefault(),
                    ...E,
                    ...Je,
                    onPlaced: () => ne(!0),
                    ref: $,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...E.style
                    },
                    onKeyDown: Ve(E.onKeyDown, (X) => {
                      const we = X.ctrlKey || X.altKey || X.metaKey;
                      if (X.key === "Tab" && X.preventDefault(), !we && X.key.length === 1 && Ae(X.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(X.key)) {
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
Bg.displayName = rR;
var iR = "SelectItemAlignedPosition", Wg = S.forwardRef((e, t) => {
  const { __scopeSelect: r, onPlaced: o, ...s } = e, c = Dr(ri, r), l = Ir(ri, r), [u, f] = S.useState(null), [h, p] = S.useState(null), v = rt(t, ($) => p($)), x = _a(r), y = S.useRef(!1), T = S.useRef(!0), { viewport: C, selectedItem: _, selectedItemText: E, focusSelectedItem: A } = l, M = S.useCallback(() => {
    if (c.trigger && c.valueNode && u && h && C && _ && E) {
      const $ = c.trigger.getBoundingClientRect(), H = h.getBoundingClientRect(), te = c.valueNode.getBoundingClientRect(), re = E.getBoundingClientRect();
      if (c.dir !== "rtl") {
        const ve = re.left - H.left, Pe = te.left - ve, st = $.left - Pe, Ye = $.width + st, dt = Math.max(Ye, H.width), Mt = window.innerWidth - bn, at = Kh(Pe, [
          bn,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(bn, Mt - dt)
        ]);
        u.style.minWidth = Ye + "px", u.style.left = at + "px";
      } else {
        const ve = H.right - re.right, Pe = window.innerWidth - te.right - ve, st = window.innerWidth - $.right - Pe, Ye = $.width + st, dt = Math.max(Ye, H.width), Mt = window.innerWidth - bn, at = Kh(Pe, [
          bn,
          Math.max(bn, Mt - dt)
        ]);
        u.style.minWidth = Ye + "px", u.style.right = at + "px";
      }
      const de = x(), J = window.innerHeight - bn * 2, se = C.scrollHeight, ne = window.getComputedStyle(h), Te = parseInt(ne.borderTopWidth, 10), ie = parseInt(ne.paddingTop, 10), Z = parseInt(ne.borderBottomWidth, 10), q = parseInt(ne.paddingBottom, 10), G = Te + ie + se + q + Z, pe = Math.min(_.offsetHeight * 5, G), Ae = window.getComputedStyle(C), _e = parseInt(Ae.paddingTop, 10), ge = parseInt(Ae.paddingBottom, 10), Re = $.top + $.height / 2 - bn, Fe = J - Re, Je = _.offsetHeight / 2, X = _.offsetTop + Je, we = Te + ie + X, Le = G - we;
      if (we <= Re) {
        const ve = de.length > 0 && _ === de[de.length - 1].ref.current;
        u.style.bottom = "0px";
        const Pe = h.clientHeight - C.offsetTop - C.offsetHeight, st = Math.max(
          Fe,
          Je + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (ve ? ge : 0) + Pe + Z
        ), Ye = we + st;
        u.style.height = Ye + "px";
      } else {
        const ve = de.length > 0 && _ === de[0].ref.current;
        u.style.top = "0px";
        const st = Math.max(
          Re,
          Te + C.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (ve ? _e : 0) + Je
        ) + Le;
        u.style.height = st + "px", C.scrollTop = we - Re + C.offsetTop;
      }
      u.style.margin = `${bn}px 0`, u.style.minHeight = pe + "px", u.style.maxHeight = J + "px", o == null || o(), requestAnimationFrame(() => y.current = !0);
    }
  }, [
    x,
    c.trigger,
    c.valueNode,
    u,
    h,
    C,
    _,
    E,
    c.dir,
    o
  ]);
  kt(() => M(), [M]);
  const [I, L] = S.useState();
  kt(() => {
    h && L(window.getComputedStyle(h).zIndex);
  }, [h]);
  const U = S.useCallback(
    ($) => {
      $ && T.current === !0 && (M(), A == null || A(), T.current = !1);
    },
    [M, A]
  );
  return /* @__PURE__ */ m.jsx(
    sR,
    {
      scope: r,
      contentWrapper: u,
      shouldExpandOnScrollRef: y,
      onScrollButtonChange: U,
      children: /* @__PURE__ */ m.jsx(
        "div",
        {
          ref: f,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: I
          },
          children: /* @__PURE__ */ m.jsx(
            $e.div,
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
Wg.displayName = iR;
var oR = "SelectPopperPosition", jc = S.forwardRef((e, t) => {
  const {
    __scopeSelect: r,
    align: o = "start",
    collisionPadding: s = bn,
    ...c
  } = e, l = Pa(r);
  return /* @__PURE__ */ m.jsx(
    bg,
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
jc.displayName = oR;
var [sR, bu] = Ki(ri, {}), Lc = "SelectViewport", $g = S.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, nonce: o, ...s } = e, c = Ir(Lc, r), l = bu(Lc, r), u = rt(t, c.onViewportChange), f = S.useRef(0);
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
      /* @__PURE__ */ m.jsx(Ta.Slot, { scope: r, children: /* @__PURE__ */ m.jsx(
        $e.div,
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
          onScroll: Ve(s.onScroll, (h) => {
            const p = h.currentTarget, { contentWrapper: v, shouldExpandOnScrollRef: x } = l;
            if (x != null && x.current && v) {
              const y = Math.abs(f.current - p.scrollTop);
              if (y > 0) {
                const T = window.innerHeight - bn * 2, C = parseFloat(v.style.minHeight), _ = parseFloat(v.style.height), E = Math.max(C, _);
                if (E < T) {
                  const A = E + y, M = Math.min(T, A), I = A - M;
                  v.style.height = M + "px", v.style.bottom === "0px" && (p.scrollTop = I > 0 ? I : 0, v.style.justifyContent = "flex-end");
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
$g.displayName = Lc;
var Ug = "SelectGroup", [aR, lR] = Ki(Ug), cR = S.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...o } = e, s = Qr();
    return /* @__PURE__ */ m.jsx(aR, { scope: r, id: s, children: /* @__PURE__ */ m.jsx($e.div, { role: "group", "aria-labelledby": s, ...o, ref: t }) });
  }
);
cR.displayName = Ug;
var Hg = "SelectLabel", zg = S.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...o } = e, s = lR(Hg, r);
    return /* @__PURE__ */ m.jsx($e.div, { id: s.id, ...o, ref: t });
  }
);
zg.displayName = Hg;
var oa = "SelectItem", [uR, Gg] = Ki(oa), Kg = S.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: r,
      value: o,
      disabled: s = !1,
      textValue: c,
      ...l
    } = e, u = Dr(oa, r), f = Ir(oa, r), h = u.value === o, [p, v] = S.useState(c ?? ""), [x, y] = S.useState(!1), T = rt(
      t,
      (A) => {
        var M;
        return (M = f.itemRefCallback) == null ? void 0 : M.call(f, A, o, s);
      }
    ), C = Qr(), _ = S.useRef("touch"), E = () => {
      s || (u.onValueChange(o), u.onOpenChange(!1));
    };
    if (o === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ m.jsx(
      uR,
      {
        scope: r,
        value: o,
        disabled: s,
        textId: C,
        isSelected: h,
        onItemTextChange: S.useCallback((A) => {
          v((M) => M || ((A == null ? void 0 : A.textContent) ?? "").trim());
        }, []),
        children: /* @__PURE__ */ m.jsx(
          Ta.ItemSlot,
          {
            scope: r,
            value: o,
            disabled: s,
            textValue: p,
            children: /* @__PURE__ */ m.jsx(
              $e.div,
              {
                role: "option",
                "aria-labelledby": C,
                "data-highlighted": x ? "" : void 0,
                "aria-selected": h && x,
                "data-state": h ? "checked" : "unchecked",
                "aria-disabled": s || void 0,
                "data-disabled": s ? "" : void 0,
                tabIndex: s ? void 0 : -1,
                ...l,
                ref: T,
                onFocus: Ve(l.onFocus, () => y(!0)),
                onBlur: Ve(l.onBlur, () => y(!1)),
                onClick: Ve(l.onClick, () => {
                  _.current !== "mouse" && E();
                }),
                onPointerUp: Ve(l.onPointerUp, () => {
                  _.current === "mouse" && E();
                }),
                onPointerDown: Ve(l.onPointerDown, (A) => {
                  _.current = A.pointerType;
                }),
                onPointerMove: Ve(l.onPointerMove, (A) => {
                  var M;
                  _.current = A.pointerType, s ? (M = f.onItemLeave) == null || M.call(f) : _.current === "mouse" && A.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: Ve(l.onPointerLeave, (A) => {
                  var M;
                  A.currentTarget === document.activeElement && ((M = f.onItemLeave) == null || M.call(f));
                }),
                onKeyDown: Ve(l.onKeyDown, (A) => {
                  var I;
                  ((I = f.searchRef) == null ? void 0 : I.current) !== "" && A.key === " " || (XA.includes(A.key) && E(), A.key === " " && A.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
Kg.displayName = oa;
var So = "SelectItemText", Yg = S.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, className: o, style: s, ...c } = e, l = Dr(So, r), u = Ir(So, r), f = Gg(So, r), h = eR(So, r), [p, v] = S.useState(null), x = rt(
      t,
      (E) => v(E),
      f.onItemTextChange,
      (E) => {
        var A;
        return (A = u.itemTextRefCallback) == null ? void 0 : A.call(u, E, f.value, f.disabled);
      }
    ), y = p == null ? void 0 : p.textContent, T = S.useMemo(
      () => /* @__PURE__ */ m.jsx("option", { value: f.value, disabled: f.disabled, children: y }, f.value),
      [f.disabled, f.value, y]
    ), { onNativeOptionAdd: C, onNativeOptionRemove: _ } = h;
    return kt(() => (C(T), () => _(T)), [C, _, T]), /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
      /* @__PURE__ */ m.jsx($e.span, { id: f.textId, ...c, ref: x }),
      f.isSelected && l.valueNode && !l.valueNodeHasChildren ? ga.createPortal(c.children, l.valueNode) : null
    ] });
  }
);
Yg.displayName = So;
var qg = "SelectItemIndicator", Xg = S.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...o } = e;
    return Gg(qg, r).isSelected ? /* @__PURE__ */ m.jsx($e.span, { "aria-hidden": !0, ...o, ref: t }) : null;
  }
);
Xg.displayName = qg;
var kc = "SelectScrollUpButton", Zg = S.forwardRef((e, t) => {
  const r = Ir(kc, e.__scopeSelect), o = bu(kc, e.__scopeSelect), [s, c] = S.useState(!1), l = rt(t, o.onScrollButtonChange);
  return kt(() => {
    if (r.viewport && r.isPositioned) {
      let u = function() {
        const h = f.scrollTop > 0;
        c(h);
      };
      const f = r.viewport;
      return u(), f.addEventListener("scroll", u), () => f.removeEventListener("scroll", u);
    }
  }, [r.viewport, r.isPositioned]), s ? /* @__PURE__ */ m.jsx(
    Qg,
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
Zg.displayName = kc;
var Vc = "SelectScrollDownButton", Jg = S.forwardRef((e, t) => {
  const r = Ir(Vc, e.__scopeSelect), o = bu(Vc, e.__scopeSelect), [s, c] = S.useState(!1), l = rt(t, o.onScrollButtonChange);
  return kt(() => {
    if (r.viewport && r.isPositioned) {
      let u = function() {
        const h = f.scrollHeight - f.clientHeight, p = Math.ceil(f.scrollTop) < h;
        c(p);
      };
      const f = r.viewport;
      return u(), f.addEventListener("scroll", u), () => f.removeEventListener("scroll", u);
    }
  }, [r.viewport, r.isPositioned]), s ? /* @__PURE__ */ m.jsx(
    Qg,
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
Jg.displayName = Vc;
var Qg = S.forwardRef((e, t) => {
  const { __scopeSelect: r, onAutoScroll: o, ...s } = e, c = Ir("SelectScrollButton", r), l = S.useRef(null), u = _a(r), f = S.useCallback(() => {
    l.current !== null && (window.clearInterval(l.current), l.current = null);
  }, []);
  return S.useEffect(() => () => f(), [f]), kt(() => {
    var p;
    const h = u().find((v) => v.ref.current === document.activeElement);
    (p = h == null ? void 0 : h.ref.current) == null || p.scrollIntoView({ block: "nearest" });
  }, [u]), /* @__PURE__ */ m.jsx(
    $e.div,
    {
      "aria-hidden": !0,
      ...s,
      ref: t,
      style: { flexShrink: 0, ...s.style },
      onPointerDown: Ve(s.onPointerDown, () => {
        l.current === null && (l.current = window.setInterval(o, 50));
      }),
      onPointerMove: Ve(s.onPointerMove, () => {
        var h;
        (h = c.onItemLeave) == null || h.call(c), l.current === null && (l.current = window.setInterval(o, 50));
      }),
      onPointerLeave: Ve(s.onPointerLeave, () => {
        f();
      })
    }
  );
}), fR = "SelectSeparator", ev = S.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...o } = e;
    return /* @__PURE__ */ m.jsx($e.div, { "aria-hidden": !0, ...o, ref: t });
  }
);
ev.displayName = fR;
var Fc = "SelectArrow", dR = S.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...o } = e, s = Pa(r), c = Dr(Fc, r), l = Ir(Fc, r);
    return c.open && l.position === "popper" ? /* @__PURE__ */ m.jsx(Sg, { ...s, ...o, ref: t }) : null;
  }
);
dR.displayName = Fc;
function tv(e) {
  return e === "" || e === void 0;
}
var nv = S.forwardRef(
  (e, t) => {
    const { value: r, ...o } = e, s = S.useRef(null), c = rt(t, s), l = oA(r);
    return S.useEffect(() => {
      const u = s.current, f = window.HTMLSelectElement.prototype, p = Object.getOwnPropertyDescriptor(
        f,
        "value"
      ).set;
      if (l !== r && p) {
        const v = new Event("change", { bubbles: !0 });
        p.call(u, r), u.dispatchEvent(v);
      }
    }, [l, r]), /* @__PURE__ */ m.jsx(xu, { asChild: !0, children: /* @__PURE__ */ m.jsx("select", { ...o, ref: c, defaultValue: r }) });
  }
);
nv.displayName = "BubbleSelect";
function rv(e) {
  const t = tr(e), r = S.useRef(""), o = S.useRef(0), s = S.useCallback(
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
function iv(e, t, r) {
  const s = t.length > 1 && Array.from(t).every((h) => h === t[0]) ? t[0] : t, c = r ? e.indexOf(r) : -1;
  let l = hR(e, Math.max(c, 0));
  s.length === 1 && (l = l.filter((h) => h !== r));
  const f = l.find(
    (h) => h.textValue.toLowerCase().startsWith(s.toLowerCase())
  );
  return f !== r ? f : void 0;
}
function hR(e, t) {
  return e.map((r, o) => e[(t + o) % e.length]);
}
var pR = Mg, ov = Dg, mR = jg, gR = Lg, vR = kg, sv = Vg, yR = $g, av = zg, lv = Kg, xR = Yg, wR = Xg, cv = Zg, uv = Jg, fv = ev;
const bR = pR, SR = mR, dv = S.forwardRef(({ className: e, children: t, ...r }, o) => /* @__PURE__ */ m.jsxs(
  ov,
  {
    ref: o,
    className: Ge(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      e
    ),
    ...r,
    children: [
      t,
      /* @__PURE__ */ m.jsx(gR, { asChild: !0, children: /* @__PURE__ */ m.jsx(va, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
dv.displayName = ov.displayName;
const hv = S.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ m.jsx(
  cv,
  {
    ref: r,
    className: Ge(
      "flex cursor-default items-center justify-center py-1",
      e
    ),
    ...t,
    children: /* @__PURE__ */ m.jsx(e_, { className: "h-4 w-4" })
  }
));
hv.displayName = cv.displayName;
const pv = S.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ m.jsx(
  uv,
  {
    ref: r,
    className: Ge(
      "flex cursor-default items-center justify-center py-1",
      e
    ),
    ...t,
    children: /* @__PURE__ */ m.jsx(va, { className: "h-4 w-4" })
  }
));
pv.displayName = uv.displayName;
const mv = S.forwardRef(({ className: e, children: t, position: r = "popper", ...o }, s) => /* @__PURE__ */ m.jsx(vR, { children: /* @__PURE__ */ m.jsxs(
  sv,
  {
    ref: s,
    className: Ge(
      "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      r === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      e
    ),
    position: r,
    ...o,
    children: [
      /* @__PURE__ */ m.jsx(hv, {}),
      /* @__PURE__ */ m.jsx(
        yR,
        {
          className: Ge(
            "p-1",
            r === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children: t
        }
      ),
      /* @__PURE__ */ m.jsx(pv, {})
    ]
  }
) }));
mv.displayName = sv.displayName;
const CR = S.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ m.jsx(
  av,
  {
    ref: r,
    className: Ge("py-1.5 pl-8 pr-2 text-sm font-semibold", e),
    ...t
  }
));
CR.displayName = av.displayName;
const gv = S.forwardRef(({ className: e, children: t, ...r }, o) => /* @__PURE__ */ m.jsxs(
  lv,
  {
    ref: o,
    className: Ge(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...r,
    children: [
      /* @__PURE__ */ m.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ m.jsx(wR, { children: /* @__PURE__ */ m.jsx(ou, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ m.jsx(xR, { children: t })
    ]
  }
));
gv.displayName = lv.displayName;
const TR = S.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ m.jsx(
  fv,
  {
    ref: r,
    className: Ge("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
TR.displayName = fv.displayName;
function _R(e, t) {
  return S.useReducer((r, o) => t[r][o] ?? r, e);
}
var Bo = (e) => {
  const { present: t, children: r } = e, o = PR(t), s = typeof r == "function" ? r({ present: o.isPresent }) : S.Children.only(r), c = rt(o.ref, ER(s));
  return typeof r == "function" || o.isPresent ? S.cloneElement(s, { ref: c }) : null;
};
Bo.displayName = "Presence";
function PR(e) {
  const [t, r] = S.useState(), o = S.useRef({}), s = S.useRef(e), c = S.useRef("none"), l = e ? "mounted" : "unmounted", [u, f] = _R(l, {
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
    const h = Bs(o.current);
    c.current = u === "mounted" ? h : "none";
  }, [u]), kt(() => {
    const h = o.current, p = s.current;
    if (p !== e) {
      const x = c.current, y = Bs(h);
      e ? f("MOUNT") : y === "none" || (h == null ? void 0 : h.display) === "none" ? f("UNMOUNT") : f(p && x !== y ? "ANIMATION_OUT" : "UNMOUNT"), s.current = e;
    }
  }, [e, f]), kt(() => {
    if (t) {
      let h;
      const p = t.ownerDocument.defaultView ?? window, v = (y) => {
        const C = Bs(o.current).includes(y.animationName);
        if (y.target === t && C && (f("ANIMATION_END"), !s.current)) {
          const _ = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", h = p.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = _);
          });
        }
      }, x = (y) => {
        y.target === t && (c.current = Bs(o.current));
      };
      return t.addEventListener("animationstart", x), t.addEventListener("animationcancel", v), t.addEventListener("animationend", v), () => {
        p.clearTimeout(h), t.removeEventListener("animationstart", x), t.removeEventListener("animationcancel", v), t.removeEventListener("animationend", v);
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
function Bs(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function ER(e) {
  var o, s;
  let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = (s = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : s.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
var [Ea, eI] = au("Tooltip", [
  Sa
]), Aa = Sa(), vv = "TooltipProvider", AR = 700, Bc = "tooltip.open", [RR, Su] = Ea(vv), yv = (e) => {
  const {
    __scopeTooltip: t,
    delayDuration: r = AR,
    skipDelayDuration: o = 300,
    disableHoverableContent: s = !1,
    children: c
  } = e, [l, u] = S.useState(!0), f = S.useRef(!1), h = S.useRef(0);
  return S.useEffect(() => {
    const p = h.current;
    return () => window.clearTimeout(p);
  }, []), /* @__PURE__ */ m.jsx(
    RR,
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
yv.displayName = vv;
var Ra = "Tooltip", [NR, Na] = Ea(Ra), xv = (e) => {
  const {
    __scopeTooltip: t,
    children: r,
    open: o,
    defaultOpen: s = !1,
    onOpenChange: c,
    disableHoverableContent: l,
    delayDuration: u
  } = e, f = Su(Ra, e.__scopeTooltip), h = Aa(t), [p, v] = S.useState(null), x = Qr(), y = S.useRef(0), T = l ?? f.disableHoverableContent, C = u ?? f.delayDuration, _ = S.useRef(!1), [E = !1, A] = ra({
    prop: o,
    defaultProp: s,
    onChange: ($) => {
      $ ? (f.onOpen(), document.dispatchEvent(new CustomEvent(Bc))) : f.onClose(), c == null || c($);
    }
  }), M = S.useMemo(() => E ? _.current ? "delayed-open" : "instant-open" : "closed", [E]), I = S.useCallback(() => {
    window.clearTimeout(y.current), y.current = 0, _.current = !1, A(!0);
  }, [A]), L = S.useCallback(() => {
    window.clearTimeout(y.current), y.current = 0, A(!1);
  }, [A]), U = S.useCallback(() => {
    window.clearTimeout(y.current), y.current = window.setTimeout(() => {
      _.current = !0, A(!0), y.current = 0;
    }, C);
  }, [C, A]);
  return S.useEffect(() => () => {
    y.current && (window.clearTimeout(y.current), y.current = 0);
  }, []), /* @__PURE__ */ m.jsx(xg, { ...h, children: /* @__PURE__ */ m.jsx(
    NR,
    {
      scope: t,
      contentId: x,
      open: E,
      stateAttribute: M,
      trigger: p,
      onTriggerChange: v,
      onTriggerEnter: S.useCallback(() => {
        f.isOpenDelayed ? U() : I();
      }, [f.isOpenDelayed, U, I]),
      onTriggerLeave: S.useCallback(() => {
        T ? L() : (window.clearTimeout(y.current), y.current = 0);
      }, [L, T]),
      onOpen: I,
      onClose: L,
      disableHoverableContent: T,
      children: r
    }
  ) });
};
xv.displayName = Ra;
var Wc = "TooltipTrigger", wv = S.forwardRef(
  (e, t) => {
    const { __scopeTooltip: r, ...o } = e, s = Na(Wc, r), c = Su(Wc, r), l = Aa(r), u = S.useRef(null), f = rt(t, u, s.onTriggerChange), h = S.useRef(!1), p = S.useRef(!1), v = S.useCallback(() => h.current = !1, []);
    return S.useEffect(() => () => document.removeEventListener("pointerup", v), [v]), /* @__PURE__ */ m.jsx(wg, { asChild: !0, ...l, children: /* @__PURE__ */ m.jsx(
      $e.button,
      {
        "aria-describedby": s.open ? s.contentId : void 0,
        "data-state": s.stateAttribute,
        ...o,
        ref: f,
        onPointerMove: Ve(e.onPointerMove, (x) => {
          x.pointerType !== "touch" && !p.current && !c.isPointerInTransitRef.current && (s.onTriggerEnter(), p.current = !0);
        }),
        onPointerLeave: Ve(e.onPointerLeave, () => {
          s.onTriggerLeave(), p.current = !1;
        }),
        onPointerDown: Ve(e.onPointerDown, () => {
          h.current = !0, document.addEventListener("pointerup", v, { once: !0 });
        }),
        onFocus: Ve(e.onFocus, () => {
          h.current || s.onOpen();
        }),
        onBlur: Ve(e.onBlur, s.onClose),
        onClick: Ve(e.onClick, s.onClose)
      }
    ) });
  }
);
wv.displayName = Wc;
var MR = "TooltipPortal", [tI, OR] = Ea(MR, {
  forceMount: void 0
}), Fi = "TooltipContent", bv = S.forwardRef(
  (e, t) => {
    const r = OR(Fi, e.__scopeTooltip), { forceMount: o = r.forceMount, side: s = "top", ...c } = e, l = Na(Fi, e.__scopeTooltip);
    return /* @__PURE__ */ m.jsx(Bo, { present: o || l.open, children: l.disableHoverableContent ? /* @__PURE__ */ m.jsx(Sv, { side: s, ...c, ref: t }) : /* @__PURE__ */ m.jsx(DR, { side: s, ...c, ref: t }) });
  }
), DR = S.forwardRef((e, t) => {
  const r = Na(Fi, e.__scopeTooltip), o = Su(Fi, e.__scopeTooltip), s = S.useRef(null), c = rt(t, s), [l, u] = S.useState(null), { trigger: f, onClose: h } = r, p = s.current, { onPointerInTransitChange: v } = o, x = S.useCallback(() => {
    u(null), v(!1);
  }, [v]), y = S.useCallback(
    (T, C) => {
      const _ = T.currentTarget, E = { x: T.clientX, y: T.clientY }, A = kR(E, _.getBoundingClientRect()), M = VR(E, A), I = FR(C.getBoundingClientRect()), L = WR([...M, ...I]);
      u(L), v(!0);
    },
    [v]
  );
  return S.useEffect(() => () => x(), [x]), S.useEffect(() => {
    if (f && p) {
      const T = (_) => y(_, p), C = (_) => y(_, f);
      return f.addEventListener("pointerleave", T), p.addEventListener("pointerleave", C), () => {
        f.removeEventListener("pointerleave", T), p.removeEventListener("pointerleave", C);
      };
    }
  }, [f, p, y, x]), S.useEffect(() => {
    if (l) {
      const T = (C) => {
        const _ = C.target, E = { x: C.clientX, y: C.clientY }, A = (f == null ? void 0 : f.contains(_)) || (p == null ? void 0 : p.contains(_)), M = !BR(E, l);
        A ? x() : M && (x(), h());
      };
      return document.addEventListener("pointermove", T), () => document.removeEventListener("pointermove", T);
    }
  }, [f, p, l, h, x]), /* @__PURE__ */ m.jsx(Sv, { ...e, ref: c });
}), [IR, jR] = Ea(Ra, { isInside: !1 }), Sv = S.forwardRef(
  (e, t) => {
    const {
      __scopeTooltip: r,
      children: o,
      "aria-label": s,
      onEscapeKeyDown: c,
      onPointerDownOutside: l,
      ...u
    } = e, f = Na(Fi, r), h = Aa(r), { onClose: p } = f;
    return S.useEffect(() => (document.addEventListener(Bc, p), () => document.removeEventListener(Bc, p)), [p]), S.useEffect(() => {
      if (f.trigger) {
        const v = (x) => {
          const y = x.target;
          y != null && y.contains(f.trigger) && p();
        };
        return window.addEventListener("scroll", v, { capture: !0 }), () => window.removeEventListener("scroll", v, { capture: !0 });
      }
    }, [f.trigger, p]), /* @__PURE__ */ m.jsx(
      ya,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: c,
        onPointerDownOutside: l,
        onFocusOutside: (v) => v.preventDefault(),
        onDismiss: p,
        children: /* @__PURE__ */ m.jsxs(
          bg,
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
              /* @__PURE__ */ m.jsx(km, { children: o }),
              /* @__PURE__ */ m.jsx(IR, { scope: r, isInside: !0, children: /* @__PURE__ */ m.jsx(aA, { id: f.contentId, role: "tooltip", children: s || o }) })
            ]
          }
        )
      }
    );
  }
);
bv.displayName = Fi;
var Cv = "TooltipArrow", LR = S.forwardRef(
  (e, t) => {
    const { __scopeTooltip: r, ...o } = e, s = Aa(r);
    return jR(
      Cv,
      r
    ).isInside ? null : /* @__PURE__ */ m.jsx(Sg, { ...s, ...o, ref: t });
  }
);
LR.displayName = Cv;
function kR(e, t) {
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
function VR(e, t, r = 5) {
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
function FR(e) {
  const { top: t, right: r, bottom: o, left: s } = e;
  return [
    { x: s, y: t },
    { x: r, y: t },
    { x: r, y: o },
    { x: s, y: o }
  ];
}
function BR(e, t) {
  const { x: r, y: o } = e;
  let s = !1;
  for (let c = 0, l = t.length - 1; c < t.length; l = c++) {
    const u = t[c].x, f = t[c].y, h = t[l].x, p = t[l].y;
    f > o != p > o && r < (h - u) * (o - f) / (p - f) + u && (s = !s);
  }
  return s;
}
function WR(e) {
  const t = e.slice();
  return t.sort((r, o) => r.x < o.x ? -1 : r.x > o.x ? 1 : r.y < o.y ? -1 : r.y > o.y ? 1 : 0), $R(t);
}
function $R(e) {
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
var UR = yv, HR = xv, zR = wv, Tv = bv;
const Cr = UR, Tr = HR, _r = zR, Zn = S.forwardRef(({ className: e, sideOffset: t = 4, ...r }, o) => /* @__PURE__ */ m.jsx(
  Tv,
  {
    ref: o,
    sideOffset: t,
    className: Ge(
      "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...r
  }
));
Zn.displayName = Tv.displayName;
const GR = iu(
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
function _v({ className: e, variant: t, ...r }) {
  return /* @__PURE__ */ m.jsx("div", { className: Ge(GR({ variant: t }), e), ...r });
}
const oi = S.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ m.jsx(
  "div",
  {
    ref: r,
    className: Ge(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      e
    ),
    ...t
  }
));
oi.displayName = "Card";
const si = S.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ m.jsx(
  "div",
  {
    ref: r,
    className: Ge("flex flex-col space-y-1.5 p-6", e),
    ...t
  }
));
si.displayName = "CardHeader";
const ai = S.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ m.jsx(
  "div",
  {
    ref: r,
    className: Ge(
      "text-2xl font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
ai.displayName = "CardTitle";
const KR = S.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ m.jsx(
  "div",
  {
    ref: r,
    className: Ge("text-sm text-muted-foreground", e),
    ...t
  }
));
KR.displayName = "CardDescription";
const Yi = S.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ m.jsx("div", { ref: r, className: Ge("p-6 pt-0", e), ...t }));
Yi.displayName = "CardContent";
const YR = S.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ m.jsx(
  "div",
  {
    ref: r,
    className: Ge("flex items-center p-6 pt-0", e),
    ...t
  }
));
YR.displayName = "CardFooter";
function nI({ deal: e, onDealChange: t, availableDeals: r }) {
  const o = (s) => {
    t(s);
  };
  return /* @__PURE__ */ m.jsxs(oi, { className: "shadow-lg w-full max-w-3xl mx-auto my-8", children: [
    /* @__PURE__ */ m.jsx(si, { children: /* @__PURE__ */ m.jsxs("div", { className: "flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4", children: [
      /* @__PURE__ */ m.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ m.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ m.jsx(ai, { children: e.dealName }),
          /* @__PURE__ */ m.jsx(Cr, { children: /* @__PURE__ */ m.jsxs(Tr, { children: [
            /* @__PURE__ */ m.jsx(_r, { asChild: !0, children: /* @__PURE__ */ m.jsx(
              St,
              {
                variant: "ghost",
                size: "sm",
                className: "p-1 h-auto",
                onClick: () => window.open(e.hubspotUrl, "_blank"),
                children: /* @__PURE__ */ m.jsx(Wm, { className: "w-4 h-4 text-slate-500" })
              }
            ) }),
            /* @__PURE__ */ m.jsx(Zn, { children: /* @__PURE__ */ m.jsx("p", { children: "View in HubSpot" }) })
          ] }) })
        ] }),
        /* @__PURE__ */ m.jsx(_v, { variant: "outline", className: "text-sm", children: e.dealStage })
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
            /* @__PURE__ */ m.jsx(Cr, { children: /* @__PURE__ */ m.jsxs(Tr, { children: [
              /* @__PURE__ */ m.jsx(_r, { asChild: !0, children: /* @__PURE__ */ m.jsx(St, { variant: "ghost", size: "sm", className: "p-0 h-auto", children: /* @__PURE__ */ m.jsx(Ro, { className: "w-3 h-3 text-slate-400" }) }) }),
              /* @__PURE__ */ m.jsx(Zn, { className: "max-w-xs", children: /* @__PURE__ */ m.jsx("p", { children: "Estimated chance of winning, based on prospect engagement, qualification status, risk factors, and historic deal outcomes at the current stage." }) })
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
            /* @__PURE__ */ m.jsx(Cr, { children: /* @__PURE__ */ m.jsxs(Tr, { children: [
              /* @__PURE__ */ m.jsx(_r, { asChild: !0, children: /* @__PURE__ */ m.jsx(St, { variant: "ghost", size: "sm", className: "p-0 h-auto", children: /* @__PURE__ */ m.jsx(Ro, { className: "w-3 h-3 text-slate-400" }) }) }),
              /* @__PURE__ */ m.jsx(Zn, { className: "max-w-xs", children: /* @__PURE__ */ m.jsx("p", { children: "The main language of the deal." }) })
            ] }) })
          ] }),
          /* @__PURE__ */ m.jsx("p", { className: "text-lg font-semibold", children: W_(e.dealLanguage) })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ m.jsx(Yi, { children: /* @__PURE__ */ m.jsxs(bR, { value: e.dealId, onValueChange: o, children: [
      /* @__PURE__ */ m.jsx(dv, { className: "w-[300px]", children: /* @__PURE__ */ m.jsxs(SR, { children: [
        e.dealName,
        " (",
        e.company,
        ")"
      ] }) }),
      /* @__PURE__ */ m.jsx(mv, { children: r.map((s) => /* @__PURE__ */ m.jsxs(gv, { value: s.dealId, children: [
        s.dealName,
        " (",
        s.company,
        ")"
      ] }, s.dealId)) })
    ] }) })
  ] });
}
function qR(e, t = []) {
  let r = [];
  function o(c, l) {
    const u = S.createContext(l), f = r.length;
    r = [...r, l];
    function h(v) {
      const { scope: x, children: y, ...T } = v, C = (x == null ? void 0 : x[e][f]) || u, _ = S.useMemo(() => T, Object.values(T));
      return /* @__PURE__ */ m.jsx(C.Provider, { value: _, children: y });
    }
    function p(v, x) {
      const y = (x == null ? void 0 : x[e][f]) || u, T = S.useContext(y);
      if (T)
        return T;
      if (l !== void 0)
        return l;
      throw new Error(`\`${v}\` must be used within \`${c}\``);
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
  return s.scopeName = e, [o, XR(s, ...t)];
}
function XR(...e) {
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
        const v = f(c)[`__scope${h}`];
        return { ...u, ...v };
      }, {});
      return S.useMemo(() => ({ [`__scope${t.scopeName}`]: l }), [l]);
    };
  };
  return r.scopeName = t.scopeName, r;
}
var Cu = "Progress", Tu = 100, [ZR, rI] = qR(Cu), [JR, QR] = ZR(Cu), Pv = S.forwardRef(
  (e, t) => {
    const {
      __scopeProgress: r,
      value: o = null,
      max: s,
      getValueLabel: c = eN,
      ...l
    } = e;
    (s || s === 0) && !pp(s) && console.error(tN(`${s}`, "Progress"));
    const u = pp(s) ? s : Tu;
    o !== null && !mp(o, u) && console.error(nN(`${o}`, "Progress"));
    const f = mp(o, u) ? o : null, h = sa(f) ? c(f, u) : void 0;
    return /* @__PURE__ */ m.jsx(JR, { scope: r, value: f, max: u, children: /* @__PURE__ */ m.jsx(
      $e.div,
      {
        "aria-valuemax": u,
        "aria-valuemin": 0,
        "aria-valuenow": sa(f) ? f : void 0,
        "aria-valuetext": h,
        role: "progressbar",
        "data-state": Rv(f, u),
        "data-value": f ?? void 0,
        "data-max": u,
        ...l,
        ref: t
      }
    ) });
  }
);
Pv.displayName = Cu;
var Ev = "ProgressIndicator", Av = S.forwardRef(
  (e, t) => {
    const { __scopeProgress: r, ...o } = e, s = QR(Ev, r);
    return /* @__PURE__ */ m.jsx(
      $e.div,
      {
        "data-state": Rv(s.value, s.max),
        "data-value": s.value ?? void 0,
        "data-max": s.max,
        ...o,
        ref: t
      }
    );
  }
);
Av.displayName = Ev;
function eN(e, t) {
  return `${Math.round(e / t * 100)}%`;
}
function Rv(e, t) {
  return e == null ? "indeterminate" : e === t ? "complete" : "loading";
}
function sa(e) {
  return typeof e == "number";
}
function pp(e) {
  return sa(e) && !isNaN(e) && e > 0;
}
function mp(e, t) {
  return sa(e) && !isNaN(e) && e <= t && e >= 0;
}
function tN(e, t) {
  return `Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${Tu}\`.`;
}
function nN(e, t) {
  return `Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${Tu} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var Nv = Pv, rN = Av;
const _u = S.forwardRef(({ className: e, value: t, ...r }, o) => /* @__PURE__ */ m.jsx(
  Nv,
  {
    ref: o,
    className: Ge(
      "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
      e
    ),
    ...r,
    children: /* @__PURE__ */ m.jsx(
      rN,
      {
        className: "h-full w-full flex-1 bg-primary transition-all",
        style: { transform: `translateX(-${100 - (t || 0)}%)` }
      }
    )
  }
));
_u.displayName = Nv.displayName;
const wo = [
  "Discovery",
  "Solution Validation",
  "Pricing Communicated",
  "Contract Sent",
  "Closed Won",
  "Closed Lost"
], iI = ({ deal: e }) => {
  const t = {
    Discovery: 75,
    "Solution Validation": 65,
    "Pricing Communicated": 55,
    "Contract Sent": 85,
    "Closed Won": 100,
    "Closed Lost": 0
  }, r = wo.includes(e.dealStage) ? e.dealStage : wo[0], o = t[r] || 0;
  return /* @__PURE__ */ m.jsxs(oi, { className: "shadow-lg w-full max-w-3xl mx-auto my-8", children: [
    /* @__PURE__ */ m.jsxs(si, { children: [
      /* @__PURE__ */ m.jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ m.jsx(ai, { className: "text-slate-800", children: "Deal Progress" }) }),
      /* @__PURE__ */ m.jsx("p", { className: "text-sm text-muted-foreground", children: "Current stage and overall progress" })
    ] }),
    /* @__PURE__ */ m.jsx(Yi, { children: /* @__PURE__ */ m.jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ m.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ m.jsx("div", { className: "flex flex-wrap justify-between text-xs sm:text-sm text-slate-600", children: wo.map((s) => /* @__PURE__ */ m.jsx("span", { className: `mb-2 ${r === s ? "font-bold" : ""}`, children: s }, s)) }),
        /* @__PURE__ */ m.jsx(
          _u,
          {
            value: (wo.indexOf(r) + 1) / wo.length * 100,
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
          /* @__PURE__ */ m.jsx(Cr, { children: /* @__PURE__ */ m.jsxs(Tr, { children: [
            /* @__PURE__ */ m.jsx(_r, { children: /* @__PURE__ */ m.jsx(Ro, { className: "w-3 h-3 text-muted-foreground" }) }),
            /* @__PURE__ */ m.jsxs(Zn, { className: "max-w-xs", children: [
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
function oI({ deal: e }) {
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
  return /* @__PURE__ */ m.jsxs(oi, { className: "shadow-lg w-full max-w-3xl mx-auto my-8", children: [
    /* @__PURE__ */ m.jsxs(si, { children: [
      /* @__PURE__ */ m.jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ m.jsx(ai, { className: "text-slate-800", children: "Key Stakeholders" }) }),
      /* @__PURE__ */ m.jsx("p", { className: "text-sm text-slate-500", children: "Engagement levels and relationships" })
    ] }),
    /* @__PURE__ */ m.jsx(Yi, { children: /* @__PURE__ */ m.jsx("div", { className: "space-y-4", children: e.keyStakeholders.map((r, o) => /* @__PURE__ */ m.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ m.jsxs("div", { children: [
        /* @__PURE__ */ m.jsx("p", { className: "font-medium", children: r.name }),
        /* @__PURE__ */ m.jsx("p", { className: "text-sm text-slate-500", children: r.role })
      ] }),
      /* @__PURE__ */ m.jsxs("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ m.jsxs(_v, { className: t(r.engagementLevel), children: [
          r.engagementLevel,
          " Engagement"
        ] }),
        /* @__PURE__ */ m.jsx(Cr, { children: /* @__PURE__ */ m.jsxs(Tr, { children: [
          /* @__PURE__ */ m.jsx(_r, { asChild: !0, children: /* @__PURE__ */ m.jsx(
            St,
            {
              variant: "ghost",
              size: "sm",
              className: "",
              onClick: () => window.open(r.contactLink, "_blank"),
              children: /* @__PURE__ */ m.jsx(Wm, { className: "w-4 h-4 text-slate-500" })
            }
          ) }),
          /* @__PURE__ */ m.jsx(Zn, { children: /* @__PURE__ */ m.jsx("p", { children: "View contact in CRM" }) })
        ] }) })
      ] })
    ] }, o)) }) })
  ] });
}
const gp = /* @__PURE__ */ new Set();
function Ma(e, t, r) {
  e || gp.has(t) || (console.warn(t), gp.add(t));
}
function iN(e) {
  if (typeof Proxy > "u")
    return e;
  const t = /* @__PURE__ */ new Map(), r = (...o) => (process.env.NODE_ENV !== "production" && Ma(!1, "motion() is deprecated. Use motion.create() instead."), e(...o));
  return new Proxy(r, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (o, s) => s === "create" ? e : (t.has(s) || t.set(s, e(s)), t.get(s))
  });
}
function Oa(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
const $c = (e) => Array.isArray(e);
function Mv(e, t) {
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
function Oo(e) {
  return typeof e == "string" || Array.isArray(e);
}
function vp(e) {
  const t = [{}, {}];
  return e == null || e.values.forEach((r, o) => {
    t[0][o] = r.get(), t[1][o] = r.getVelocity();
  }), t;
}
function Pu(e, t, r, o) {
  if (typeof t == "function") {
    const [s, c] = vp(o);
    t = t(r !== void 0 ? r : e.custom, s, c);
  }
  if (typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function") {
    const [s, c] = vp(o);
    t = t(r !== void 0 ? r : e.custom, s, c);
  }
  return t;
}
function Da(e, t, r) {
  const o = e.getProps();
  return Pu(o, t, r !== void 0 ? r : o.custom, e);
}
const Eu = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], Au = ["initial", ...Eu], Wo = [
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
], li = new Set(Wo), jn = (e) => e * 1e3, Jn = (e) => e / 1e3, oN = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, sN = (e) => ({
  type: "spring",
  stiffness: 550,
  damping: e === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), aN = {
  type: "keyframes",
  duration: 0.8
}, lN = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, cN = (e, { keyframes: t }) => t.length > 2 ? aN : li.has(e) ? e.startsWith("scale") ? sN(t[1]) : oN : lN;
function Ru(e, t) {
  return e ? e[t] || e.default || e : void 0;
}
const uN = {
  skipAnimations: !1,
  useManualTiming: !1
}, fN = (e) => e !== null;
function Ia(e, { repeat: t, repeatType: r = "loop" }, o) {
  const s = e.filter(fN), c = t && r !== "loop" && t % 2 === 1 ? 0 : s.length - 1;
  return !c || o === void 0 ? s[c] : o;
}
const Ct = (e) => e;
function dN(e) {
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
    schedule: (h, p = !1, v = !1) => {
      const y = v && o ? t : r;
      return p && c.add(h), y.has(h) || y.add(h), h;
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
const Ws = [
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
], hN = 40;
function Ov(e, t) {
  let r = !1, o = !0;
  const s = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, c = () => r = !0, l = Ws.reduce((E, A) => (E[A] = dN(c), E), {}), { read: u, resolveKeyframes: f, update: h, preRender: p, render: v, postRender: x } = l, y = () => {
    const E = performance.now();
    r = !1, s.delta = o ? 1e3 / 60 : Math.max(Math.min(E - s.timestamp, hN), 1), s.timestamp = E, s.isProcessing = !0, u.process(s), f.process(s), h.process(s), p.process(s), v.process(s), x.process(s), s.isProcessing = !1, r && t && (o = !1, e(y));
  }, T = () => {
    r = !0, o = !0, s.isProcessing || e(y);
  };
  return { schedule: Ws.reduce((E, A) => {
    const M = l[A];
    return E[A] = (I, L = !1, U = !1) => (r || T(), M.schedule(I, L, U)), E;
  }, {}), cancel: (E) => {
    for (let A = 0; A < Ws.length; A++)
      l[Ws[A]].cancel(E);
  }, state: s, steps: l };
}
const { schedule: ze, cancel: Rr, state: bt, steps: fc } = Ov(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Ct, !0), Dv = (e, t, r) => (((1 - 3 * r + 3 * t) * e + (3 * r - 6 * t)) * e + 3 * t) * e, pN = 1e-7, mN = 12;
function gN(e, t, r, o, s) {
  let c, l, u = 0;
  do
    l = t + (r - t) / 2, c = Dv(l, o, s) - e, c > 0 ? r = l : t = l;
  while (Math.abs(c) > pN && ++u < mN);
  return l;
}
function $o(e, t, r, o) {
  if (e === t && r === o)
    return Ct;
  const s = (c) => gN(c, 0, 1, e, r);
  return (c) => c === 0 || c === 1 ? c : Dv(s(c), t, o);
}
const Iv = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, jv = (e) => (t) => 1 - e(1 - t), Lv = /* @__PURE__ */ $o(0.33, 1.53, 0.69, 0.99), Nu = /* @__PURE__ */ jv(Lv), kv = /* @__PURE__ */ Iv(Nu), Vv = (e) => (e *= 2) < 1 ? 0.5 * Nu(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), Mu = (e) => 1 - Math.sin(Math.acos(e)), Fv = jv(Mu), Bv = Iv(Mu), Wv = (e) => /^0[^.\s]+$/u.test(e);
function vN(e) {
  return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || Wv(e) : !0;
}
let qi = Ct, Nr = Ct;
process.env.NODE_ENV !== "production" && (qi = (e, t) => {
  !e && typeof console < "u" && console.warn(t);
}, Nr = (e, t) => {
  if (!e)
    throw new Error(t);
});
const $v = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e), Uv = (e) => (t) => typeof t == "string" && t.startsWith(e), Hv = /* @__PURE__ */ Uv("--"), yN = /* @__PURE__ */ Uv("var(--"), Ou = (e) => yN(e) ? xN.test(e.split("/*")[0].trim()) : !1, xN = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, wN = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function bN(e) {
  const t = wN.exec(e);
  if (!t)
    return [,];
  const [, r, o, s] = t;
  return [`--${r ?? o}`, s];
}
const SN = 4;
function zv(e, t, r = 1) {
  Nr(r <= SN, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);
  const [o, s] = bN(e);
  if (!o)
    return;
  const c = window.getComputedStyle(t).getPropertyValue(o);
  if (c) {
    const l = c.trim();
    return $v(l) ? parseFloat(l) : l;
  }
  return Ou(s) ? zv(s, t, r + 1) : s;
}
const Mr = (e, t, r) => r > t ? t : r < e ? e : r, Xi = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, Do = {
  ...Xi,
  transform: (e) => Mr(0, 1, e)
}, $s = {
  ...Xi,
  default: 1
}, Uo = (e) => ({
  test: (t) => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: (t) => `${t}${e}`
}), wr = /* @__PURE__ */ Uo("deg"), Ln = /* @__PURE__ */ Uo("%"), ue = /* @__PURE__ */ Uo("px"), CN = /* @__PURE__ */ Uo("vh"), TN = /* @__PURE__ */ Uo("vw"), yp = {
  ...Ln,
  parse: (e) => Ln.parse(e) / 100,
  transform: (e) => Ln.transform(e * 100)
}, _N = /* @__PURE__ */ new Set([
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
]), xp = (e) => e === Xi || e === ue, wp = (e, t) => parseFloat(e.split(", ")[t]), bp = (e, t) => (r, { transform: o }) => {
  if (o === "none" || !o)
    return 0;
  const s = o.match(/^matrix3d\((.+)\)$/u);
  if (s)
    return wp(s[1], t);
  {
    const c = o.match(/^matrix\((.+)\)$/u);
    return c ? wp(c[1], e) : 0;
  }
}, PN = /* @__PURE__ */ new Set(["x", "y", "z"]), EN = Wo.filter((e) => !PN.has(e));
function AN(e) {
  const t = [];
  return EN.forEach((r) => {
    const o = e.getValue(r);
    o !== void 0 && (t.push([r, o.get()]), o.set(r.startsWith("scale") ? 1 : 0));
  }), t;
}
const Bi = {
  // Dimensions
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: r = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(r),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: r = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(r),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  // Transform
  x: bp(4, 13),
  y: bp(5, 14)
};
Bi.translateX = Bi.x;
Bi.translateY = Bi.y;
const Gv = (e) => (t) => t.test(e), RN = {
  test: (e) => e === "auto",
  parse: (e) => e
}, Kv = [Xi, ue, Ln, wr, TN, CN, RN], Sp = (e) => Kv.find(Gv(e)), ei = /* @__PURE__ */ new Set();
let Uc = !1, Hc = !1;
function Yv() {
  if (Hc) {
    const e = Array.from(ei).filter((o) => o.needsMeasurement), t = new Set(e.map((o) => o.element)), r = /* @__PURE__ */ new Map();
    t.forEach((o) => {
      const s = AN(o);
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
  Hc = !1, Uc = !1, ei.forEach((e) => e.complete()), ei.clear();
}
function qv() {
  ei.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (Hc = !0);
  });
}
function NN() {
  qv(), Yv();
}
class Du {
  constructor(t, r, o, s, c, l = !1) {
    this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...t], this.onComplete = r, this.name = o, this.motionValue = s, this.element = c, this.isAsync = l;
  }
  scheduleResolve() {
    this.isScheduled = !0, this.isAsync ? (ei.add(this), Uc || (Uc = !0, ze.read(qv), ze.resolveKeyframes(Yv))) : (this.readKeyframes(), this.complete());
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
    this.isComplete = !0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), ei.delete(this);
  }
  cancel() {
    this.isComplete || (this.isScheduled = !1, ei.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const Po = (e) => Math.round(e * 1e5) / 1e5, Iu = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function MN(e) {
  return e == null;
}
const ON = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, ju = (e, t) => (r) => !!(typeof r == "string" && ON.test(r) && r.startsWith(e) || t && !MN(r) && Object.prototype.hasOwnProperty.call(r, t)), Xv = (e, t, r) => (o) => {
  if (typeof o != "string")
    return o;
  const [s, c, l, u] = o.match(Iu);
  return {
    [e]: parseFloat(s),
    [t]: parseFloat(c),
    [r]: parseFloat(l),
    alpha: u !== void 0 ? parseFloat(u) : 1
  };
}, DN = (e) => Mr(0, 255, e), dc = {
  ...Xi,
  transform: (e) => Math.round(DN(e))
}, Jr = {
  test: /* @__PURE__ */ ju("rgb", "red"),
  parse: /* @__PURE__ */ Xv("red", "green", "blue"),
  transform: ({ red: e, green: t, blue: r, alpha: o = 1 }) => "rgba(" + dc.transform(e) + ", " + dc.transform(t) + ", " + dc.transform(r) + ", " + Po(Do.transform(o)) + ")"
};
function IN(e) {
  let t = "", r = "", o = "", s = "";
  return e.length > 5 ? (t = e.substring(1, 3), r = e.substring(3, 5), o = e.substring(5, 7), s = e.substring(7, 9)) : (t = e.substring(1, 2), r = e.substring(2, 3), o = e.substring(3, 4), s = e.substring(4, 5), t += t, r += r, o += o, s += s), {
    red: parseInt(t, 16),
    green: parseInt(r, 16),
    blue: parseInt(o, 16),
    alpha: s ? parseInt(s, 16) / 255 : 1
  };
}
const zc = {
  test: /* @__PURE__ */ ju("#"),
  parse: IN,
  transform: Jr.transform
}, Ni = {
  test: /* @__PURE__ */ ju("hsl", "hue"),
  parse: /* @__PURE__ */ Xv("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: t, lightness: r, alpha: o = 1 }) => "hsla(" + Math.round(e) + ", " + Ln.transform(Po(t)) + ", " + Ln.transform(Po(r)) + ", " + Po(Do.transform(o)) + ")"
}, Rt = {
  test: (e) => Jr.test(e) || zc.test(e) || Ni.test(e),
  parse: (e) => Jr.test(e) ? Jr.parse(e) : Ni.test(e) ? Ni.parse(e) : zc.parse(e),
  transform: (e) => typeof e == "string" ? e : e.hasOwnProperty("red") ? Jr.transform(e) : Ni.transform(e)
}, jN = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function LN(e) {
  var t, r;
  return isNaN(e) && typeof e == "string" && (((t = e.match(Iu)) === null || t === void 0 ? void 0 : t.length) || 0) + (((r = e.match(jN)) === null || r === void 0 ? void 0 : r.length) || 0) > 0;
}
const Zv = "number", Jv = "color", kN = "var", VN = "var(", Cp = "${}", FN = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Io(e) {
  const t = e.toString(), r = [], o = {
    color: [],
    number: [],
    var: []
  }, s = [];
  let c = 0;
  const u = t.replace(FN, (f) => (Rt.test(f) ? (o.color.push(c), s.push(Jv), r.push(Rt.parse(f))) : f.startsWith(VN) ? (o.var.push(c), s.push(kN), r.push(f)) : (o.number.push(c), s.push(Zv), r.push(parseFloat(f))), ++c, Cp)).split(Cp);
  return { values: r, split: u, indexes: o, types: s };
}
function Qv(e) {
  return Io(e).values;
}
function ey(e) {
  const { split: t, types: r } = Io(e), o = t.length;
  return (s) => {
    let c = "";
    for (let l = 0; l < o; l++)
      if (c += t[l], s[l] !== void 0) {
        const u = r[l];
        u === Zv ? c += Po(s[l]) : u === Jv ? c += Rt.transform(s[l]) : c += s[l];
      }
    return c;
  };
}
const BN = (e) => typeof e == "number" ? 0 : e;
function WN(e) {
  const t = Qv(e);
  return ey(e)(t.map(BN));
}
const Or = {
  test: LN,
  parse: Qv,
  createTransformer: ey,
  getAnimatableNone: WN
}, $N = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function UN(e) {
  const [t, r] = e.slice(0, -1).split("(");
  if (t === "drop-shadow")
    return e;
  const [o] = r.match(Iu) || [];
  if (!o)
    return e;
  const s = r.replace(o, "");
  let c = $N.has(t) ? 1 : 0;
  return o !== r && (c *= 100), t + "(" + c + s + ")";
}
const HN = /\b([a-z-]*)\(.*?\)/gu, Gc = {
  ...Or,
  getAnimatableNone: (e) => {
    const t = e.match(HN);
    return t ? t.map(UN).join(" ") : e;
  }
}, zN = {
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
}, GN = {
  rotate: wr,
  rotateX: wr,
  rotateY: wr,
  rotateZ: wr,
  scale: $s,
  scaleX: $s,
  scaleY: $s,
  scaleZ: $s,
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
  opacity: Do,
  originX: yp,
  originY: yp,
  originZ: ue
}, Tp = {
  ...Xi,
  transform: Math.round
}, Lu = {
  ...zN,
  ...GN,
  zIndex: Tp,
  size: ue,
  // SVG
  fillOpacity: Do,
  strokeOpacity: Do,
  numOctaves: Tp
}, KN = {
  ...Lu,
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
  filter: Gc,
  WebkitFilter: Gc
}, ku = (e) => KN[e];
function ty(e, t) {
  let r = ku(e);
  return r !== Gc && (r = Or), r.getAnimatableNone ? r.getAnimatableNone(t) : void 0;
}
const YN = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function qN(e, t, r) {
  let o = 0, s;
  for (; o < e.length && !s; ) {
    const c = e[o];
    typeof c == "string" && !YN.has(c) && Io(c).values.length && (s = e[o]), o++;
  }
  if (s && r)
    for (const c of t)
      e[c] = ty(r, s);
}
class ny extends Du {
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
      if (typeof h == "string" && (h = h.trim(), Ou(h))) {
        const p = zv(h, r.current);
        p !== void 0 && (t[f] = p), f === t.length - 1 && (this.finalKeyframe = h);
      }
    }
    if (this.resolveNoneKeyframes(), !_N.has(o) || t.length !== 2)
      return;
    const [s, c] = t, l = Sp(s), u = Sp(c);
    if (l !== u)
      if (xp(l) && xp(u))
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
      vN(t[s]) && o.push(s);
    o.length && qN(t, o, r);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: r, name: o } = this;
    if (!t || !t.current)
      return;
    o === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = Bi[o](t.measureViewportBox(), window.getComputedStyle(t.current)), r[0] = this.measuredOrigin;
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
    s[l] = Bi[o](r.measureViewportBox(), window.getComputedStyle(r.current)), u !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = u), !((t = this.removedTransforms) === null || t === void 0) && t.length && this.removedTransforms.forEach(([f, h]) => {
      r.getValue(f).set(h);
    }), this.resolveNoneKeyframes();
  }
}
function Vu(e) {
  return typeof e == "function";
}
let Ys;
function XN() {
  Ys = void 0;
}
const kn = {
  now: () => (Ys === void 0 && kn.set(bt.isProcessing || uN.useManualTiming ? bt.timestamp : performance.now()), Ys),
  set: (e) => {
    Ys = e, queueMicrotask(XN);
  }
}, _p = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && // It's animatable if we have a string
(Or.test(e) || e === "0") && // And it contains numbers and/or colors
!e.startsWith("url("));
function ZN(e) {
  const t = e[0];
  if (e.length === 1)
    return !0;
  for (let r = 0; r < e.length; r++)
    if (e[r] !== t)
      return !0;
}
function JN(e, t, r, o) {
  const s = e[0];
  if (s === null)
    return !1;
  if (t === "display" || t === "visibility")
    return !0;
  const c = e[e.length - 1], l = _p(s, t), u = _p(c, t);
  return qi(l === u, `You are trying to animate ${t} from "${s}" to "${c}". ${s} is not an animatable value - to enable this animation set ${s} to a value animatable to ${c} via the \`style\` property.`), !l || !u ? !1 : ZN(e) || (r === "spring" || Vu(r)) && o;
}
const QN = 40;
class ry {
  constructor({ autoplay: t = !0, delay: r = 0, type: o = "keyframes", repeat: s = 0, repeatDelay: c = 0, repeatType: l = "loop", ...u }) {
    this.isStopped = !1, this.hasAttemptedResolve = !1, this.createdAt = kn.now(), this.options = {
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
    return this.resolvedAt ? this.resolvedAt - this.createdAt > QN ? this.resolvedAt : this.createdAt : this.createdAt;
  }
  /**
   * A getter for resolved data. If keyframes are not yet resolved, accessing
   * this.resolved will synchronously flush all pending keyframe resolvers.
   * This is a deoptimisation, but at its worst still batches read/writes.
   */
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && NN(), this._resolved;
  }
  /**
   * A method to be called when the keyframes resolver completes. This method
   * will check if its possible to run the animation and, if not, skip it.
   * Otherwise, it will call initPlayback on the implementing class.
   */
  onKeyframesResolved(t, r) {
    this.resolvedAt = kn.now(), this.hasAttemptedResolve = !0;
    const { name: o, type: s, velocity: c, delay: l, onComplete: u, onUpdate: f, isGenerator: h } = this.options;
    if (!h && !JN(t, o, s, c))
      if (l)
        this.options.duration = 0;
      else {
        f == null || f(Ia(t, this.options, r)), u == null || u(), this.resolveFinishedPromise();
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
function iy(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const e2 = 5;
function oy(e, t, r) {
  const o = Math.max(t - e2, 0);
  return iy(r - e(o), t - o);
}
const hc = 1e-3, t2 = 0.01, Pp = 10, n2 = 0.05, r2 = 1;
function i2({ duration: e = 800, bounce: t = 0.25, velocity: r = 0, mass: o = 1 }) {
  let s, c;
  qi(e <= jn(Pp), "Spring duration must be 10 seconds or less");
  let l = 1 - t;
  l = Mr(n2, r2, l), e = Mr(t2, Pp, Jn(e)), l < 1 ? (s = (h) => {
    const p = h * l, v = p * e, x = p - r, y = Kc(h, l), T = Math.exp(-v);
    return hc - x / y * T;
  }, c = (h) => {
    const v = h * l * e, x = v * r + r, y = Math.pow(l, 2) * Math.pow(h, 2) * e, T = Math.exp(-v), C = Kc(Math.pow(h, 2), l);
    return (-s(h) + hc > 0 ? -1 : 1) * ((x - y) * T) / C;
  }) : (s = (h) => {
    const p = Math.exp(-h * e), v = (h - r) * e + 1;
    return -hc + p * v;
  }, c = (h) => {
    const p = Math.exp(-h * e), v = (r - h) * (e * e);
    return p * v;
  });
  const u = 5 / e, f = s2(s, c, u);
  if (e = jn(e), isNaN(f))
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
const o2 = 12;
function s2(e, t, r) {
  let o = r;
  for (let s = 1; s < o2; s++)
    o = o - e(o) / t(o);
  return o;
}
function Kc(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const a2 = ["duration", "bounce"], l2 = ["stiffness", "damping", "mass"];
function Ep(e, t) {
  return t.some((r) => e[r] !== void 0);
}
function c2(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!Ep(e, l2) && Ep(e, a2)) {
    const r = i2(e);
    t = {
      ...t,
      ...r,
      mass: 1
    }, t.isResolvedFromDuration = !0;
  }
  return t;
}
function sy({ keyframes: e, restDelta: t, restSpeed: r, ...o }) {
  const s = e[0], c = e[e.length - 1], l = { done: !1, value: s }, { stiffness: u, damping: f, mass: h, duration: p, velocity: v, isResolvedFromDuration: x } = c2({
    ...o,
    velocity: -Jn(o.velocity || 0)
  }), y = v || 0, T = f / (2 * Math.sqrt(u * h)), C = c - s, _ = Jn(Math.sqrt(u / h)), E = Math.abs(C) < 5;
  r || (r = E ? 0.01 : 2), t || (t = E ? 5e-3 : 0.5);
  let A;
  if (T < 1) {
    const M = Kc(_, T);
    A = (I) => {
      const L = Math.exp(-T * _ * I);
      return c - L * ((y + T * _ * C) / M * Math.sin(M * I) + C * Math.cos(M * I));
    };
  } else if (T === 1)
    A = (M) => c - Math.exp(-_ * M) * (C + (y + _ * C) * M);
  else {
    const M = _ * Math.sqrt(T * T - 1);
    A = (I) => {
      const L = Math.exp(-T * _ * I), U = Math.min(M * I, 300);
      return c - L * ((y + T * _ * C) * Math.sinh(U) + M * C * Math.cosh(U)) / M;
    };
  }
  return {
    calculatedDuration: x && p || null,
    next: (M) => {
      const I = A(M);
      if (x)
        l.done = M >= p;
      else {
        let L = 0;
        T < 1 && (L = M === 0 ? jn(y) : oy(A, M, I));
        const U = Math.abs(L) <= r, $ = Math.abs(c - I) <= t;
        l.done = U && $;
      }
      return l.value = l.done ? c : I, l;
    }
  };
}
function Ap({ keyframes: e, velocity: t = 0, power: r = 0.8, timeConstant: o = 325, bounceDamping: s = 10, bounceStiffness: c = 500, modifyTarget: l, min: u, max: f, restDelta: h = 0.5, restSpeed: p }) {
  const v = e[0], x = {
    done: !1,
    value: v
  }, y = (H) => u !== void 0 && H < u || f !== void 0 && H > f, T = (H) => u === void 0 ? f : f === void 0 || Math.abs(u - H) < Math.abs(f - H) ? u : f;
  let C = r * t;
  const _ = v + C, E = l === void 0 ? _ : l(_);
  E !== _ && (C = E - v);
  const A = (H) => -C * Math.exp(-H / o), M = (H) => E + A(H), I = (H) => {
    const te = A(H), re = M(H);
    x.done = Math.abs(te) <= h, x.value = x.done ? E : re;
  };
  let L, U;
  const $ = (H) => {
    y(x.value) && (L = H, U = sy({
      keyframes: [x.value, T(x.value)],
      velocity: oy(M, H, x.value),
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
      return !U && L === void 0 && (te = !0, I(H), $(H)), L !== void 0 && H >= L ? U.next(H - L) : (!te && I(H), x);
    }
  };
}
const u2 = /* @__PURE__ */ $o(0.42, 0, 1, 1), f2 = /* @__PURE__ */ $o(0, 0, 0.58, 1), ay = /* @__PURE__ */ $o(0.42, 0, 0.58, 1), d2 = (e) => Array.isArray(e) && typeof e[0] != "number", Fu = (e) => Array.isArray(e) && typeof e[0] == "number", Rp = {
  linear: Ct,
  easeIn: u2,
  easeInOut: ay,
  easeOut: f2,
  circIn: Mu,
  circInOut: Bv,
  circOut: Fv,
  backIn: Nu,
  backInOut: kv,
  backOut: Lv,
  anticipate: Vv
}, Np = (e) => {
  if (Fu(e)) {
    Nr(e.length === 4, "Cubic bezier arrays must contain four numerical values.");
    const [t, r, o, s] = e;
    return $o(t, r, o, s);
  } else if (typeof e == "string")
    return Nr(Rp[e] !== void 0, `Invalid easing type '${e}'`), Rp[e];
  return e;
}, h2 = (e, t) => (r) => t(e(r)), Qn = (...e) => e.reduce(h2), Wi = (e, t, r) => {
  const o = t - e;
  return o === 0 ? 1 : (r - e) / o;
}, nt = (e, t, r) => e + (t - e) * r;
function pc(e, t, r) {
  return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + (t - e) * 6 * r : r < 1 / 2 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e;
}
function p2({ hue: e, saturation: t, lightness: r, alpha: o }) {
  e /= 360, t /= 100, r /= 100;
  let s = 0, c = 0, l = 0;
  if (!t)
    s = c = l = r;
  else {
    const u = r < 0.5 ? r * (1 + t) : r + t - r * t, f = 2 * r - u;
    s = pc(f, u, e + 1 / 3), c = pc(f, u, e), l = pc(f, u, e - 1 / 3);
  }
  return {
    red: Math.round(s * 255),
    green: Math.round(c * 255),
    blue: Math.round(l * 255),
    alpha: o
  };
}
function aa(e, t) {
  return (r) => r > 0 ? t : e;
}
const mc = (e, t, r) => {
  const o = e * e, s = r * (t * t - o) + o;
  return s < 0 ? 0 : Math.sqrt(s);
}, m2 = [zc, Jr, Ni], g2 = (e) => m2.find((t) => t.test(e));
function Mp(e) {
  const t = g2(e);
  if (qi(!!t, `'${e}' is not an animatable color. Use the equivalent color code instead.`), !t)
    return !1;
  let r = t.parse(e);
  return t === Ni && (r = p2(r)), r;
}
const Op = (e, t) => {
  const r = Mp(e), o = Mp(t);
  if (!r || !o)
    return aa(e, t);
  const s = { ...r };
  return (c) => (s.red = mc(r.red, o.red, c), s.green = mc(r.green, o.green, c), s.blue = mc(r.blue, o.blue, c), s.alpha = nt(r.alpha, o.alpha, c), Jr.transform(s));
}, Yc = /* @__PURE__ */ new Set(["none", "hidden"]);
function v2(e, t) {
  return Yc.has(e) ? (r) => r <= 0 ? e : t : (r) => r >= 1 ? t : e;
}
function y2(e, t) {
  return (r) => nt(e, t, r);
}
function Bu(e) {
  return typeof e == "number" ? y2 : typeof e == "string" ? Ou(e) ? aa : Rt.test(e) ? Op : b2 : Array.isArray(e) ? ly : typeof e == "object" ? Rt.test(e) ? Op : x2 : aa;
}
function ly(e, t) {
  const r = [...e], o = r.length, s = e.map((c, l) => Bu(c)(c, t[l]));
  return (c) => {
    for (let l = 0; l < o; l++)
      r[l] = s[l](c);
    return r;
  };
}
function x2(e, t) {
  const r = { ...e, ...t }, o = {};
  for (const s in r)
    e[s] !== void 0 && t[s] !== void 0 && (o[s] = Bu(e[s])(e[s], t[s]));
  return (s) => {
    for (const c in o)
      r[c] = o[c](s);
    return r;
  };
}
function w2(e, t) {
  var r;
  const o = [], s = { color: 0, var: 0, number: 0 };
  for (let c = 0; c < t.values.length; c++) {
    const l = t.types[c], u = e.indexes[l][s[l]], f = (r = e.values[u]) !== null && r !== void 0 ? r : 0;
    o[c] = f, s[l]++;
  }
  return o;
}
const b2 = (e, t) => {
  const r = Or.createTransformer(t), o = Io(e), s = Io(t);
  return o.indexes.var.length === s.indexes.var.length && o.indexes.color.length === s.indexes.color.length && o.indexes.number.length >= s.indexes.number.length ? Yc.has(e) && !s.values.length || Yc.has(t) && !o.values.length ? v2(e, t) : Qn(ly(w2(o, s), s.values), r) : (qi(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), aa(e, t));
};
function cy(e, t, r) {
  return typeof e == "number" && typeof t == "number" && typeof r == "number" ? nt(e, t, r) : Bu(e)(e, t);
}
function S2(e, t, r) {
  const o = [], s = r || cy, c = e.length - 1;
  for (let l = 0; l < c; l++) {
    let u = s(e[l], e[l + 1]);
    if (t) {
      const f = Array.isArray(t) ? t[l] || Ct : t;
      u = Qn(f, u);
    }
    o.push(u);
  }
  return o;
}
function C2(e, t, { clamp: r = !0, ease: o, mixer: s } = {}) {
  const c = e.length;
  if (Nr(c === t.length, "Both input and output ranges must be the same length"), c === 1)
    return () => t[0];
  if (c === 2 && e[0] === e[1])
    return () => t[1];
  e[0] > e[c - 1] && (e = [...e].reverse(), t = [...t].reverse());
  const l = S2(t, o, s), u = l.length, f = (h) => {
    let p = 0;
    if (u > 1)
      for (; p < e.length - 2 && !(h < e[p + 1]); p++)
        ;
    const v = Wi(e[p], e[p + 1], h);
    return l[p](v);
  };
  return r ? (h) => f(Mr(e[0], e[c - 1], h)) : f;
}
function T2(e, t) {
  const r = e[e.length - 1];
  for (let o = 1; o <= t; o++) {
    const s = Wi(0, t, o);
    e.push(nt(r, 1, s));
  }
}
function _2(e) {
  const t = [0];
  return T2(t, e.length - 1), t;
}
function P2(e, t) {
  return e.map((r) => r * t);
}
function E2(e, t) {
  return e.map(() => t || ay).splice(0, e.length - 1);
}
function la({ duration: e = 300, keyframes: t, times: r, ease: o = "easeInOut" }) {
  const s = d2(o) ? o.map(Np) : Np(o), c = {
    done: !1,
    value: t[0]
  }, l = P2(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    r && r.length === t.length ? r : _2(t),
    e
  ), u = C2(l, t, {
    ease: Array.isArray(s) ? s : E2(t, s)
  });
  return {
    calculatedDuration: e,
    next: (f) => (c.value = u(f), c.done = f >= e, c)
  };
}
const Dp = 2e4;
function A2(e) {
  let t = 0;
  const r = 50;
  let o = e.next(t);
  for (; !o.done && t < Dp; )
    t += r, o = e.next(t);
  return t >= Dp ? 1 / 0 : t;
}
const R2 = (e) => {
  const t = ({ timestamp: r }) => e(r);
  return {
    start: () => ze.update(t, !0),
    stop: () => Rr(t),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => bt.isProcessing ? bt.timestamp : kn.now()
  };
}, N2 = {
  decay: Ap,
  inertia: Ap,
  tween: la,
  keyframes: la,
  spring: sy
}, M2 = (e) => e / 100;
class Wu extends ry {
  constructor(t) {
    super(t), this.holdTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.startTime = null, this.state = "idle", this.stop = () => {
      if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle")
        return;
      this.teardown();
      const { onStop: f } = this.options;
      f && f();
    };
    const { name: r, motionValue: o, element: s, keyframes: c } = this.options, l = (s == null ? void 0 : s.KeyframeResolver) || Du, u = (f, h) => this.onKeyframesResolved(f, h);
    this.resolver = new l(c, u, r, o, s), this.resolver.scheduleResolve();
  }
  flatten() {
    super.flatten(), this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes));
  }
  initPlayback(t) {
    const { type: r = "keyframes", repeat: o = 0, repeatDelay: s = 0, repeatType: c, velocity: l = 0 } = this.options, u = Vu(r) ? r : N2[r] || la;
    let f, h;
    u !== la && typeof t[0] != "number" && (process.env.NODE_ENV !== "production" && Nr(t.length === 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${t}`), f = Qn(M2, cy(t[0], t[1])), t = [0, 100]);
    const p = u({ ...this.options, keyframes: t });
    c === "mirror" && (h = u({
      ...this.options,
      keyframes: [...t].reverse(),
      velocity: -l
    })), p.calculatedDuration === null && (p.calculatedDuration = A2(p));
    const { calculatedDuration: v } = p, x = v + s, y = x * (o + 1) - s;
    return {
      generator: p,
      mirroredGenerator: h,
      mapPercentToKeyframes: f,
      calculatedDuration: v,
      resolvedDuration: x,
      totalDuration: y
    };
  }
  onPostResolved() {
    const { autoplay: t = !0 } = this.options;
    this.play(), this.pendingPlayState === "paused" || !t ? this.pause() : this.state = this.pendingPlayState;
  }
  tick(t, r = !1) {
    const { resolved: o } = this;
    if (!o) {
      const { keyframes: H } = this.options;
      return { done: !0, value: H[H.length - 1] };
    }
    const { finalKeyframe: s, generator: c, mirroredGenerator: l, mapPercentToKeyframes: u, keyframes: f, calculatedDuration: h, totalDuration: p, resolvedDuration: v } = o;
    if (this.startTime === null)
      return c.next(0);
    const { delay: x, repeat: y, repeatType: T, repeatDelay: C, onUpdate: _ } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - p / this.speed, this.startTime)), r ? this.currentTime = t : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(t - this.startTime) * this.speed;
    const E = this.currentTime - x * (this.speed >= 0 ? 1 : -1), A = this.speed >= 0 ? E < 0 : E > p;
    this.currentTime = Math.max(E, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = p);
    let M = this.currentTime, I = c;
    if (y) {
      const H = Math.min(this.currentTime, p) / v;
      let te = Math.floor(H), re = H % 1;
      !re && H >= 1 && (re = 1), re === 1 && te--, te = Math.min(te, y + 1), !!(te % 2) && (T === "reverse" ? (re = 1 - re, C && (re -= C / v)) : T === "mirror" && (I = l)), M = Mr(0, 1, re) * v;
    }
    const L = A ? { done: !1, value: f[0] } : I.next(M);
    u && (L.value = u(L.value));
    let { done: U } = L;
    !A && h !== null && (U = this.speed >= 0 ? this.currentTime >= p : this.currentTime <= 0);
    const $ = this.holdTime === null && (this.state === "finished" || this.state === "running" && U);
    return $ && s !== void 0 && (L.value = Ia(f, this.options, s)), _ && _(L.value), $ && this.finish(), L;
  }
  get duration() {
    const { resolved: t } = this;
    return t ? Jn(t.calculatedDuration) : 0;
  }
  get time() {
    return Jn(this.currentTime);
  }
  set time(t) {
    t = jn(t), this.currentTime = t, this.holdTime !== null || this.speed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const r = this.playbackSpeed !== t;
    this.playbackSpeed = t, r && (this.time = Jn(this.currentTime));
  }
  play() {
    if (this.resolver.isScheduled || this.resolver.resume(), !this._resolved) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped)
      return;
    const { driver: t = R2, onPlay: r, startTime: o } = this.options;
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
const O2 = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Can be accelerated but currently disabled until https://issues.chromium.org/issues/41491098 is resolved
  // or until we implement support for linear() easing.
  // "background-color"
]), D2 = 10, I2 = (e, t) => {
  let r = "";
  const o = Math.max(Math.round(t / D2), 2);
  for (let s = 0; s < o; s++)
    r += e(Wi(0, o - 1, s)) + ", ";
  return `linear(${r.substring(0, r.length - 2)})`;
};
function $u(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const j2 = {
  linearEasing: void 0
};
function L2(e, t) {
  const r = $u(e);
  return () => {
    var o;
    return (o = j2[t]) !== null && o !== void 0 ? o : r();
  };
}
const ca = /* @__PURE__ */ L2(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing");
function uy(e) {
  return !!(typeof e == "function" && ca() || !e || typeof e == "string" && (e in qc || ca()) || Fu(e) || Array.isArray(e) && e.every(uy));
}
const Co = ([e, t, r, o]) => `cubic-bezier(${e}, ${t}, ${r}, ${o})`, qc = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ Co([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ Co([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ Co([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ Co([0.33, 1.53, 0.69, 0.99])
};
function fy(e, t) {
  if (e)
    return typeof e == "function" && ca() ? I2(e, t) : Fu(e) ? Co(e) : Array.isArray(e) ? e.map((r) => fy(r, t) || qc.easeOut) : qc[e];
}
function k2(e, t, r, { delay: o = 0, duration: s = 300, repeat: c = 0, repeatType: l = "loop", ease: u = "easeInOut", times: f } = {}) {
  const h = { [t]: r };
  f && (h.offset = f);
  const p = fy(u, s);
  return Array.isArray(p) && (h.easing = p), e.animate(h, {
    delay: o,
    duration: s,
    easing: Array.isArray(p) ? "linear" : p,
    fill: "both",
    iterations: c + 1,
    direction: l === "reverse" ? "alternate" : "normal"
  });
}
function Ip(e, t) {
  e.timeline = t, e.onfinish = null;
}
const V2 = /* @__PURE__ */ $u(() => Object.hasOwnProperty.call(Element.prototype, "animate")), ua = 10, F2 = 2e4;
function B2(e) {
  return Vu(e.type) || e.type === "spring" || !uy(e.ease);
}
function W2(e, t) {
  const r = new Wu({
    ...t,
    keyframes: e,
    repeat: 0,
    delay: 0,
    isGenerator: !0
  });
  let o = { done: !1, value: e[0] };
  const s = [];
  let c = 0;
  for (; !o.done && c < F2; )
    o = r.sample(c), s.push(o.value), c += ua;
  return {
    times: void 0,
    keyframes: s,
    duration: c - ua,
    ease: "linear"
  };
}
const dy = {
  anticipate: Vv,
  backInOut: kv,
  circInOut: Bv
};
function $2(e) {
  return e in dy;
}
class jp extends ry {
  constructor(t) {
    super(t);
    const { name: r, motionValue: o, element: s, keyframes: c } = this.options;
    this.resolver = new ny(c, (l, u) => this.onKeyframesResolved(l, u), r, o, s), this.resolver.scheduleResolve();
  }
  initPlayback(t, r) {
    var o;
    let { duration: s = 300, times: c, ease: l, type: u, motionValue: f, name: h, startTime: p } = this.options;
    if (!(!((o = f.owner) === null || o === void 0) && o.current))
      return !1;
    if (typeof l == "string" && ca() && $2(l) && (l = dy[l]), B2(this.options)) {
      const { onComplete: x, onUpdate: y, motionValue: T, element: C, ..._ } = this.options, E = W2(t, _);
      t = E.keyframes, t.length === 1 && (t[1] = t[0]), s = E.duration, c = E.times, l = E.ease, u = "keyframes";
    }
    const v = k2(f.owner.current, h, t, { ...this.options, duration: s, times: c, ease: l });
    return v.startTime = p ?? this.calcStartTime(), this.pendingTimeline ? (Ip(v, this.pendingTimeline), this.pendingTimeline = void 0) : v.onfinish = () => {
      const { onComplete: x } = this.options;
      f.set(Ia(t, this.options, r)), x && x(), this.cancel(), this.resolveFinishedPromise();
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
    const { duration: r } = t;
    return Jn(r);
  }
  get time() {
    const { resolved: t } = this;
    if (!t)
      return 0;
    const { animation: r } = t;
    return Jn(r.currentTime || 0);
  }
  set time(t) {
    const { resolved: r } = this;
    if (!r)
      return;
    const { animation: o } = r;
    o.currentTime = jn(t);
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
        return Ct;
      const { animation: o } = r;
      Ip(o, t);
    }
    return Ct;
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
      const { motionValue: h, onUpdate: p, onComplete: v, element: x, ...y } = this.options, T = new Wu({
        ...y,
        keyframes: o,
        duration: s,
        type: c,
        ease: l,
        times: u,
        isGenerator: !0
      }), C = jn(this.time);
      h.setWithVelocity(T.sample(C - ua).value, T.sample(C).value, ua);
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
    return V2() && o && O2.has(o) && r && r.owner && r.owner.current instanceof HTMLElement && /**
     * If we're outputting values to onUpdate then we can't use WAAPI as there's
     * no way to read the value from WAAPI every frame.
     */
    !r.owner.getProps().onUpdate && !s && c !== "mirror" && l !== 0 && u !== "inertia";
  }
}
const U2 = $u(() => window.ScrollTimeline !== void 0);
class H2 {
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
    const o = this.animations.map((s) => U2() && s.attachTimeline ? s.attachTimeline(t) : r(s));
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
function z2({ when: e, delay: t, delayChildren: r, staggerChildren: o, staggerDirection: s, repeat: c, repeatType: l, repeatDelay: u, from: f, elapsed: h, ...p }) {
  return !!Object.keys(p).length;
}
const Uu = (e, t, r, o = {}, s, c) => (l) => {
  const u = Ru(o, e) || {}, f = u.delay || o.delay || 0;
  let { elapsed: h = 0 } = o;
  h = h - jn(f);
  let p = {
    keyframes: Array.isArray(r) ? r : [null, r],
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
  z2(u) || (p = {
    ...p,
    ...cN(e, p)
  }), p.duration && (p.duration = jn(p.duration)), p.repeatDelay && (p.repeatDelay = jn(p.repeatDelay)), p.from !== void 0 && (p.keyframes[0] = p.from);
  let v = !1;
  if ((p.type === !1 || p.duration === 0 && !p.repeatDelay) && (p.duration = 0, p.delay === 0 && (v = !0)), v && !c && t.get() !== void 0) {
    const x = Ia(p.keyframes, u);
    if (x !== void 0)
      return ze.update(() => {
        p.onUpdate(x), p.onComplete();
      }), new H2([]);
  }
  return !c && jp.supports(p) ? new jp(p) : new Wu(p);
}, G2 = (e) => !!(e && typeof e == "object" && e.mix && e.toValue), K2 = (e) => $c(e) ? e[e.length - 1] || 0 : e;
function Hu(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function zu(e, t) {
  const r = e.indexOf(t);
  r > -1 && e.splice(r, 1);
}
class Gu {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return Hu(this.subscriptions, t), () => zu(this.subscriptions, t);
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
const Lp = 30, Y2 = (e) => !isNaN(parseFloat(e));
class q2 {
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
      const c = kn.now();
      this.updatedAt !== c && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(o), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), s && this.events.renderRequest && this.events.renderRequest.notify(this.current);
    }, this.hasAnimated = !1, this.setCurrent(t), this.owner = r.owner;
  }
  setCurrent(t) {
    this.current = t, this.updatedAt = kn.now(), this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = Y2(this.current));
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
    return process.env.NODE_ENV !== "production" && Ma(!1, 'value.onChange(callback) is deprecated. Switch to value.on("change", callback).'), this.on("change", t);
  }
  on(t, r) {
    this.events[t] || (this.events[t] = new Gu());
    const o = this.events[t].add(r);
    return t === "change" ? () => {
      o(), ze.read(() => {
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
    const t = kn.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > Lp)
      return 0;
    const r = Math.min(this.updatedAt - this.prevUpdatedAt, Lp);
    return iy(parseFloat(this.current) - parseFloat(this.prevFrameValue), r);
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
function jo(e, t) {
  return new q2(e, t);
}
function X2(e, t, r) {
  e.hasValue(t) ? e.getValue(t).set(r) : e.addValue(t, jo(r));
}
function Z2(e, t) {
  const r = Da(e, t);
  let { transitionEnd: o = {}, transition: s = {}, ...c } = r || {};
  c = { ...c, ...o };
  for (const l in c) {
    const u = K2(c[l]);
    X2(e, l, u);
  }
}
const Ku = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), J2 = "framerAppearId", hy = "data-" + Ku(J2);
function py(e) {
  return e.props[hy];
}
const Nt = (e) => !!(e && e.getVelocity);
function Q2(e) {
  return !!(Nt(e) && e.add);
}
function Xc(e, t) {
  const r = e.getValue("willChange");
  if (Q2(r))
    return r.add(t);
}
function eM({ protectedKeys: e, needsAnimating: t }, r) {
  const o = e.hasOwnProperty(r) && t[r] !== !0;
  return t[r] = !1, o;
}
function my(e, t, { delay: r = 0, transitionOverride: o, type: s } = {}) {
  var c;
  let { transition: l = e.getDefaultTransition(), transitionEnd: u, ...f } = t;
  o && (l = o);
  const h = [], p = s && e.animationState && e.animationState.getState()[s];
  for (const v in f) {
    const x = e.getValue(v, (c = e.latestValues[v]) !== null && c !== void 0 ? c : null), y = f[v];
    if (y === void 0 || p && eM(p, v))
      continue;
    const T = {
      delay: r,
      ...Ru(l || {}, v)
    };
    let C = !1;
    if (window.MotionHandoffAnimation) {
      const E = py(e);
      if (E) {
        const A = window.MotionHandoffAnimation(E, v, ze);
        A !== null && (T.startTime = A, C = !0);
      }
    }
    Xc(e, v), x.start(Uu(v, x, y, e.shouldReduceMotion && li.has(v) ? { type: !1 } : T, e, C));
    const _ = x.animation;
    _ && h.push(_);
  }
  return u && Promise.all(h).then(() => {
    ze.update(() => {
      u && Z2(e, u);
    });
  }), h;
}
function Zc(e, t, r = {}) {
  var o;
  const s = Da(e, t, r.type === "exit" ? (o = e.presenceContext) === null || o === void 0 ? void 0 : o.custom : void 0);
  let { transition: c = e.getDefaultTransition() || {} } = s || {};
  r.transitionOverride && (c = r.transitionOverride);
  const l = s ? () => Promise.all(my(e, s, r)) : () => Promise.resolve(), u = e.variantChildren && e.variantChildren.size ? (h = 0) => {
    const { delayChildren: p = 0, staggerChildren: v, staggerDirection: x } = c;
    return tM(e, t, p + h, v, x, r);
  } : () => Promise.resolve(), { when: f } = c;
  if (f) {
    const [h, p] = f === "beforeChildren" ? [l, u] : [u, l];
    return h().then(() => p());
  } else
    return Promise.all([l(), u(r.delay)]);
}
function tM(e, t, r = 0, o = 0, s = 1, c) {
  const l = [], u = (e.variantChildren.size - 1) * o, f = s === 1 ? (h = 0) => h * o : (h = 0) => u - h * o;
  return Array.from(e.variantChildren).sort(nM).forEach((h, p) => {
    h.notify("AnimationStart", t), l.push(Zc(h, t, {
      ...c,
      delay: r + f(p)
    }).then(() => h.notify("AnimationComplete", t)));
  }), Promise.all(l);
}
function nM(e, t) {
  return e.sortNodePosition(t);
}
function rM(e, t, r = {}) {
  e.notify("AnimationStart", t);
  let o;
  if (Array.isArray(t)) {
    const s = t.map((c) => Zc(e, c, r));
    o = Promise.all(s);
  } else if (typeof t == "string")
    o = Zc(e, t, r);
  else {
    const s = typeof t == "function" ? Da(e, t, r.custom) : t;
    o = Promise.all(my(e, s, r));
  }
  return o.then(() => {
    e.notify("AnimationComplete", t);
  });
}
const iM = Au.length;
function gy(e) {
  if (!e)
    return;
  if (!e.isControllingVariants) {
    const r = e.parent ? gy(e.parent) || {} : {};
    return e.props.initial !== void 0 && (r.initial = e.props.initial), r;
  }
  const t = {};
  for (let r = 0; r < iM; r++) {
    const o = Au[r], s = e.props[o];
    (Oo(s) || s === !1) && (t[o] = s);
  }
  return t;
}
const oM = [...Eu].reverse(), sM = Eu.length;
function aM(e) {
  return (t) => Promise.all(t.map(({ animation: r, options: o }) => rM(e, r, o)));
}
function lM(e) {
  let t = aM(e), r = kp(), o = !0;
  const s = (f) => (h, p) => {
    var v;
    const x = Da(e, p, f === "exit" ? (v = e.presenceContext) === null || v === void 0 ? void 0 : v.custom : void 0);
    if (x) {
      const { transition: y, transitionEnd: T, ...C } = x;
      h = { ...h, ...C, ...T };
    }
    return h;
  };
  function c(f) {
    t = f(e);
  }
  function l(f) {
    const { props: h } = e, p = gy(e.parent) || {}, v = [], x = /* @__PURE__ */ new Set();
    let y = {}, T = 1 / 0;
    for (let _ = 0; _ < sM; _++) {
      const E = oM[_], A = r[E], M = h[E] !== void 0 ? h[E] : p[E], I = Oo(M), L = E === f ? A.isActive : null;
      L === !1 && (T = _);
      let U = M === p[E] && M !== h[E] && I;
      if (U && o && e.manuallyAnimateOnMount && (U = !1), A.protectedKeys = { ...y }, // If it isn't active and hasn't *just* been set as inactive
      !A.isActive && L === null || // If we didn't and don't have any defined prop for this animation type
      !M && !A.prevProp || // Or if the prop doesn't define an animation
      Oa(M) || typeof M == "boolean")
        continue;
      const $ = cM(A.prevProp, M);
      let H = $ || // If we're making this variant active, we want to always make it active
      E === f && A.isActive && !U && I || // If we removed a higher-priority variant (i is in reverse order)
      _ > T && I, te = !1;
      const re = Array.isArray(M) ? M : [M];
      let de = re.reduce(s(E), {});
      L === !1 && (de = {});
      const { prevResolvedValues: J = {} } = A, se = {
        ...J,
        ...de
      }, ne = (Z) => {
        H = !0, x.has(Z) && (te = !0, x.delete(Z)), A.needsAnimating[Z] = !0;
        const q = e.getValue(Z);
        q && (q.liveStyle = !1);
      };
      for (const Z in se) {
        const q = de[Z], G = J[Z];
        if (y.hasOwnProperty(Z))
          continue;
        let pe = !1;
        $c(q) && $c(G) ? pe = !Mv(q, G) : pe = q !== G, pe ? q != null ? ne(Z) : x.add(Z) : q !== void 0 && x.has(Z) ? ne(Z) : A.protectedKeys[Z] = !0;
      }
      A.prevProp = M, A.prevResolvedValues = de, A.isActive && (y = { ...y, ...de }), o && e.blockInitialAnimation && (H = !1), H && (!(U && $) || te) && v.push(...re.map((Z) => ({
        animation: Z,
        options: { type: E }
      })));
    }
    if (x.size) {
      const _ = {};
      x.forEach((E) => {
        const A = e.getBaseTarget(E), M = e.getValue(E);
        M && (M.liveStyle = !0), _[E] = A ?? null;
      }), v.push({ animation: _ });
    }
    let C = !!v.length;
    return o && (h.initial === !1 || h.initial === h.animate) && !e.manuallyAnimateOnMount && (C = !1), o = !1, C ? t(v) : Promise.resolve();
  }
  function u(f, h) {
    var p;
    if (r[f].isActive === h)
      return Promise.resolve();
    (p = e.variantChildren) === null || p === void 0 || p.forEach((x) => {
      var y;
      return (y = x.animationState) === null || y === void 0 ? void 0 : y.setActive(f, h);
    }), r[f].isActive = h;
    const v = l(f);
    for (const x in r)
      r[x].protectedKeys = {};
    return v;
  }
  return {
    animateChanges: l,
    setActive: u,
    setAnimateFunction: c,
    getState: () => r,
    reset: () => {
      r = kp(), o = !0;
    }
  };
}
function cM(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !Mv(t, e) : !1;
}
function qr(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function kp() {
  return {
    animate: qr(!0),
    whileInView: qr(),
    whileHover: qr(),
    whileTap: qr(),
    whileDrag: qr(),
    whileFocus: qr(),
    exit: qr()
  };
}
class jr {
  constructor(t) {
    this.isMounted = !1, this.node = t;
  }
  update() {
  }
}
class uM extends jr {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(t) {
    super(t), t.animationState || (t.animationState = lM(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    Oa(t) && (this.unmountControls = t.subscribe(this.node));
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
let fM = 0;
class dM extends jr {
  constructor() {
    super(...arguments), this.id = fM++;
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
const hM = {
  animation: {
    Feature: uM
  },
  exit: {
    Feature: dM
  }
}, vy = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1;
function ja(e, t = "page") {
  return {
    point: {
      x: e[`${t}X`],
      y: e[`${t}Y`]
    }
  };
}
const pM = (e) => (t) => vy(t) && e(t, ja(t));
function Xn(e, t, r, o = { passive: !0 }) {
  return e.addEventListener(t, r, o), () => e.removeEventListener(t, r);
}
function er(e, t, r, o) {
  return Xn(e, t, pM(r), o);
}
const Vp = (e, t) => Math.abs(e - t);
function mM(e, t) {
  const r = Vp(e.x, t.x), o = Vp(e.y, t.y);
  return Math.sqrt(r ** 2 + o ** 2);
}
class yy {
  constructor(t, r, { transformPagePoint: o, contextWindow: s, dragSnapToOrigin: c = !1 } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const v = vc(this.lastMoveEventInfo, this.history), x = this.startEvent !== null, y = mM(v.offset, { x: 0, y: 0 }) >= 3;
      if (!x && !y)
        return;
      const { point: T } = v, { timestamp: C } = bt;
      this.history.push({ ...T, timestamp: C });
      const { onStart: _, onMove: E } = this.handlers;
      x || (_ && _(this.lastMoveEvent, v), this.startEvent = this.lastMoveEvent), E && E(this.lastMoveEvent, v);
    }, this.handlePointerMove = (v, x) => {
      this.lastMoveEvent = v, this.lastMoveEventInfo = gc(x, this.transformPagePoint), ze.update(this.updatePoint, !0);
    }, this.handlePointerUp = (v, x) => {
      this.end();
      const { onEnd: y, onSessionEnd: T, resumeAnimation: C } = this.handlers;
      if (this.dragSnapToOrigin && C && C(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const _ = vc(v.type === "pointercancel" ? this.lastMoveEventInfo : gc(x, this.transformPagePoint), this.history);
      this.startEvent && y && y(v, _), T && T(v, _);
    }, !vy(t))
      return;
    this.dragSnapToOrigin = c, this.handlers = r, this.transformPagePoint = o, this.contextWindow = s || window;
    const l = ja(t), u = gc(l, this.transformPagePoint), { point: f } = u, { timestamp: h } = bt;
    this.history = [{ ...f, timestamp: h }];
    const { onSessionStart: p } = r;
    p && p(t, vc(u, this.history)), this.removeListeners = Qn(er(this.contextWindow, "pointermove", this.handlePointerMove), er(this.contextWindow, "pointerup", this.handlePointerUp), er(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), Rr(this.updatePoint);
  }
}
function gc(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Fp(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function vc({ point: e }, t) {
  return {
    point: e,
    delta: Fp(e, xy(t)),
    offset: Fp(e, gM(t)),
    velocity: vM(t, 0.1)
  };
}
function gM(e) {
  return e[0];
}
function xy(e) {
  return e[e.length - 1];
}
function vM(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let r = e.length - 1, o = null;
  const s = xy(e);
  for (; r >= 0 && (o = e[r], !(s.timestamp - o.timestamp > jn(t))); )
    r--;
  if (!o)
    return { x: 0, y: 0 };
  const c = Jn(s.timestamp - o.timestamp);
  if (c === 0)
    return { x: 0, y: 0 };
  const l = {
    x: (s.x - o.x) / c,
    y: (s.y - o.y) / c
  };
  return l.x === 1 / 0 && (l.x = 0), l.y === 1 / 0 && (l.y = 0), l;
}
function wy(e) {
  let t = null;
  return () => {
    const r = () => {
      t = null;
    };
    return t === null ? (t = e, r) : !1;
  };
}
const Bp = wy("dragHorizontal"), Wp = wy("dragVertical");
function by(e) {
  let t = !1;
  if (e === "y")
    t = Wp();
  else if (e === "x")
    t = Bp();
  else {
    const r = Bp(), o = Wp();
    r && o ? t = () => {
      r(), o();
    } : (r && r(), o && o());
  }
  return t;
}
function Sy() {
  const e = by(!0);
  return e ? (e(), !1) : !0;
}
function Mi(e) {
  return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
const Cy = 1e-4, yM = 1 - Cy, xM = 1 + Cy, Ty = 0.01, wM = 0 - Ty, bM = 0 + Ty;
function nn(e) {
  return e.max - e.min;
}
function SM(e, t, r) {
  return Math.abs(e - t) <= r;
}
function $p(e, t, r, o = 0.5) {
  e.origin = o, e.originPoint = nt(t.min, t.max, e.origin), e.scale = nn(r) / nn(t), e.translate = nt(r.min, r.max, e.origin) - e.originPoint, (e.scale >= yM && e.scale <= xM || isNaN(e.scale)) && (e.scale = 1), (e.translate >= wM && e.translate <= bM || isNaN(e.translate)) && (e.translate = 0);
}
function Eo(e, t, r, o) {
  $p(e.x, t.x, r.x, o ? o.originX : void 0), $p(e.y, t.y, r.y, o ? o.originY : void 0);
}
function Up(e, t, r) {
  e.min = r.min + t.min, e.max = e.min + nn(t);
}
function CM(e, t, r) {
  Up(e.x, t.x, r.x), Up(e.y, t.y, r.y);
}
function Hp(e, t, r) {
  e.min = t.min - r.min, e.max = e.min + nn(t);
}
function Ao(e, t, r) {
  Hp(e.x, t.x, r.x), Hp(e.y, t.y, r.y);
}
function TM(e, { min: t, max: r }, o) {
  return t !== void 0 && e < t ? e = o ? nt(t, e, o.min) : Math.max(e, t) : r !== void 0 && e > r && (e = o ? nt(r, e, o.max) : Math.min(e, r)), e;
}
function zp(e, t, r) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: r !== void 0 ? e.max + r - (e.max - e.min) : void 0
  };
}
function _M(e, { top: t, left: r, bottom: o, right: s }) {
  return {
    x: zp(e.x, r, s),
    y: zp(e.y, t, o)
  };
}
function Gp(e, t) {
  let r = t.min - e.min, o = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([r, o] = [o, r]), { min: r, max: o };
}
function PM(e, t) {
  return {
    x: Gp(e.x, t.x),
    y: Gp(e.y, t.y)
  };
}
function EM(e, t) {
  let r = 0.5;
  const o = nn(e), s = nn(t);
  return s > o ? r = Wi(t.min, t.max - o, e.min) : o > s && (r = Wi(e.min, e.max - s, t.min)), Mr(0, 1, r);
}
function AM(e, t) {
  const r = {};
  return t.min !== void 0 && (r.min = t.min - e.min), t.max !== void 0 && (r.max = t.max - e.min), r;
}
const Jc = 0.35;
function RM(e = Jc) {
  return e === !1 ? e = 0 : e === !0 && (e = Jc), {
    x: Kp(e, "left", "right"),
    y: Kp(e, "top", "bottom")
  };
}
function Kp(e, t, r) {
  return {
    min: Yp(e, t),
    max: Yp(e, r)
  };
}
function Yp(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const qp = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), Oi = () => ({
  x: qp(),
  y: qp()
}), Xp = () => ({ min: 0, max: 0 }), ut = () => ({
  x: Xp(),
  y: Xp()
});
function mn(e) {
  return [e("x"), e("y")];
}
function _y({ top: e, left: t, right: r, bottom: o }) {
  return {
    x: { min: t, max: r },
    y: { min: e, max: o }
  };
}
function NM({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function MM(e, t) {
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
function yc(e) {
  return e === void 0 || e === 1;
}
function Qc({ scale: e, scaleX: t, scaleY: r }) {
  return !yc(e) || !yc(t) || !yc(r);
}
function Xr(e) {
  return Qc(e) || Py(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
}
function Py(e) {
  return Zp(e.x) || Zp(e.y);
}
function Zp(e) {
  return e && e !== "0%";
}
function fa(e, t, r) {
  const o = e - r, s = t * o;
  return r + s;
}
function Jp(e, t, r, o, s) {
  return s !== void 0 && (e = fa(e, s, o)), fa(e, r, o) + t;
}
function eu(e, t = 0, r = 1, o, s) {
  e.min = Jp(e.min, t, r, o, s), e.max = Jp(e.max, t, r, o, s);
}
function Ey(e, { x: t, y: r }) {
  eu(e.x, t.translate, t.scale, t.originPoint), eu(e.y, r.translate, r.scale, r.originPoint);
}
const Qp = 0.999999999999, em = 1.0000000000001;
function OM(e, t, r, o = !1) {
  const s = r.length;
  if (!s)
    return;
  t.x = t.y = 1;
  let c, l;
  for (let u = 0; u < s; u++) {
    c = r[u], l = c.projectionDelta;
    const { visualElement: f } = c.options;
    f && f.props.style && f.props.style.display === "contents" || (o && c.options.layoutScroll && c.scroll && c !== c.root && Ii(e, {
      x: -c.scroll.offset.x,
      y: -c.scroll.offset.y
    }), l && (t.x *= l.x.scale, t.y *= l.y.scale, Ey(e, l)), o && Xr(c.latestValues) && Ii(e, c.latestValues));
  }
  t.x < em && t.x > Qp && (t.x = 1), t.y < em && t.y > Qp && (t.y = 1);
}
function Di(e, t) {
  e.min = e.min + t, e.max = e.max + t;
}
function tm(e, t, r, o, s = 0.5) {
  const c = nt(e.min, e.max, s);
  eu(e, t, r, c, o);
}
function Ii(e, t) {
  tm(e.x, t.x, t.scaleX, t.scale, t.originX), tm(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function Ay(e, t) {
  return _y(MM(e.getBoundingClientRect(), t));
}
function DM(e, t, r) {
  const o = Ay(e, r), { scroll: s } = t;
  return s && (Di(o.x, s.offset.x), Di(o.y, s.offset.y)), o;
}
const Ry = ({ current: e }) => e ? e.ownerDocument.defaultView : null, IM = /* @__PURE__ */ new WeakMap();
class jM {
  constructor(t) {
    this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = ut(), this.visualElement = t;
  }
  start(t, { snapToCursor: r = !1 } = {}) {
    const { presenceContext: o } = this.visualElement;
    if (o && o.isPresent === !1)
      return;
    const s = (p) => {
      const { dragSnapToOrigin: v } = this.getProps();
      v ? this.pauseAnimation() : this.stopAnimation(), r && this.snapToCursor(ja(p, "page").point);
    }, c = (p, v) => {
      const { drag: x, dragPropagation: y, onDragStart: T } = this.getProps();
      if (x && !y && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = by(x), !this.openGlobalLock))
        return;
      this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), mn((_) => {
        let E = this.getAxisMotionValue(_).get() || 0;
        if (Ln.test(E)) {
          const { projection: A } = this.visualElement;
          if (A && A.layout) {
            const M = A.layout.layoutBox[_];
            M && (E = nn(M) * (parseFloat(E) / 100));
          }
        }
        this.originPoint[_] = E;
      }), T && ze.postRender(() => T(p, v)), Xc(this.visualElement, "transform");
      const { animationState: C } = this.visualElement;
      C && C.setActive("whileDrag", !0);
    }, l = (p, v) => {
      const { dragPropagation: x, dragDirectionLock: y, onDirectionLock: T, onDrag: C } = this.getProps();
      if (!x && !this.openGlobalLock)
        return;
      const { offset: _ } = v;
      if (y && this.currentDirection === null) {
        this.currentDirection = LM(_), this.currentDirection !== null && T && T(this.currentDirection);
        return;
      }
      this.updateAxis("x", v.point, _), this.updateAxis("y", v.point, _), this.visualElement.render(), C && C(p, v);
    }, u = (p, v) => this.stop(p, v), f = () => mn((p) => {
      var v;
      return this.getAnimationState(p) === "paused" && ((v = this.getAxisMotionValue(p).animation) === null || v === void 0 ? void 0 : v.play());
    }), { dragSnapToOrigin: h } = this.getProps();
    this.panSession = new yy(t, {
      onSessionStart: s,
      onStart: c,
      onMove: l,
      onSessionEnd: u,
      resumeAnimation: f
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: h,
      contextWindow: Ry(this.visualElement)
    });
  }
  stop(t, r) {
    const o = this.isDragging;
    if (this.cancel(), !o)
      return;
    const { velocity: s } = r;
    this.startAnimation(s);
    const { onDragEnd: c } = this.getProps();
    c && ze.postRender(() => c(t, r));
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
    if (!o || !Us(t, s, this.currentDirection))
      return;
    const c = this.getAxisMotionValue(t);
    let l = this.originPoint[t] + o[t];
    this.constraints && this.constraints[t] && (l = TM(l, this.constraints[t], this.elastic[t])), c.set(l);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: r, dragElastic: o } = this.getProps(), s = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (t = this.visualElement.projection) === null || t === void 0 ? void 0 : t.layout, c = this.constraints;
    r && Mi(r) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : r && s ? this.constraints = _M(s.layoutBox, r) : this.constraints = !1, this.elastic = RM(o), c !== this.constraints && s && this.constraints && !this.hasMutatedConstraints && mn((l) => {
      this.constraints !== !1 && this.getAxisMotionValue(l) && (this.constraints[l] = AM(s.layoutBox[l], this.constraints[l]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: r } = this.getProps();
    if (!t || !Mi(t))
      return !1;
    const o = t.current;
    Nr(o !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
    const { projection: s } = this.visualElement;
    if (!s || !s.layout)
      return !1;
    const c = DM(o, s.root, this.visualElement.getTransformPagePoint());
    let l = PM(s.layout.layoutBox, c);
    if (r) {
      const u = r(NM(l));
      this.hasMutatedConstraints = !!u, u && (l = _y(u));
    }
    return l;
  }
  startAnimation(t) {
    const { drag: r, dragMomentum: o, dragElastic: s, dragTransition: c, dragSnapToOrigin: l, onDragTransitionEnd: u } = this.getProps(), f = this.constraints || {}, h = mn((p) => {
      if (!Us(p, r, this.currentDirection))
        return;
      let v = f && f[p] || {};
      l && (v = { min: 0, max: 0 });
      const x = s ? 200 : 1e6, y = s ? 40 : 1e7, T = {
        type: "inertia",
        velocity: o ? t[p] : 0,
        bounceStiffness: x,
        bounceDamping: y,
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
  startAxisValueAnimation(t, r) {
    const o = this.getAxisMotionValue(t);
    return Xc(this.visualElement, t), o.start(Uu(t, o, 0, r, this.visualElement, !1));
  }
  stopAnimation() {
    mn((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    mn((t) => {
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
    mn((r) => {
      const { drag: o } = this.getProps();
      if (!Us(r, o, this.currentDirection))
        return;
      const { projection: s } = this.visualElement, c = this.getAxisMotionValue(r);
      if (s && s.layout) {
        const { min: l, max: u } = s.layout.layoutBox[r];
        c.set(t[r] - nt(l, u, 0.5));
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
    if (!Mi(r) || !o || !this.constraints)
      return;
    this.stopAnimation();
    const s = { x: 0, y: 0 };
    mn((l) => {
      const u = this.getAxisMotionValue(l);
      if (u && this.constraints !== !1) {
        const f = u.get();
        s[l] = EM({ min: f, max: f }, this.constraints[l]);
      }
    });
    const { transformTemplate: c } = this.visualElement.getProps();
    this.visualElement.current.style.transform = c ? c({}, "") : "none", o.root && o.root.updateScroll(), o.updateLayout(), this.resolveConstraints(), mn((l) => {
      if (!Us(l, t, null))
        return;
      const u = this.getAxisMotionValue(l), { min: f, max: h } = this.constraints[l];
      u.set(nt(f, h, s[l]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    IM.set(this.visualElement, this);
    const t = this.visualElement.current, r = er(t, "pointerdown", (f) => {
      const { drag: h, dragListener: p = !0 } = this.getProps();
      h && p && this.start(f);
    }), o = () => {
      const { dragConstraints: f } = this.getProps();
      Mi(f) && f.current && (this.constraints = this.resolveRefConstraints());
    }, { projection: s } = this.visualElement, c = s.addEventListener("measure", o);
    s && !s.layout && (s.root && s.root.updateScroll(), s.updateLayout()), ze.read(o);
    const l = Xn(window, "resize", () => this.scalePositionWithinConstraints()), u = s.addEventListener("didUpdate", ({ delta: f, hasLayoutChanged: h }) => {
      this.isDragging && h && (mn((p) => {
        const v = this.getAxisMotionValue(p);
        v && (this.originPoint[p] += f[p].translate, v.set(v.get() + f[p].translate));
      }), this.visualElement.render());
    });
    return () => {
      l(), r(), c(), u && u();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(), { drag: r = !1, dragDirectionLock: o = !1, dragPropagation: s = !1, dragConstraints: c = !1, dragElastic: l = Jc, dragMomentum: u = !0 } = t;
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
function Us(e, t, r) {
  return (t === !0 || t === e) && (r === null || r === e);
}
function LM(e, t = 10) {
  let r = null;
  return Math.abs(e.y) > t ? r = "y" : Math.abs(e.x) > t && (r = "x"), r;
}
class kM extends jr {
  constructor(t) {
    super(t), this.removeGroupControls = Ct, this.removeListeners = Ct, this.controls = new jM(t);
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || Ct;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const nm = (e) => (t, r) => {
  e && ze.postRender(() => e(t, r));
};
class VM extends jr {
  constructor() {
    super(...arguments), this.removePointerDownListener = Ct;
  }
  onPointerDown(t) {
    this.session = new yy(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Ry(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: r, onPan: o, onPanEnd: s } = this.node.getProps();
    return {
      onSessionStart: nm(t),
      onStart: nm(r),
      onMove: o,
      onEnd: (c, l) => {
        delete this.session, s && ze.postRender(() => s(c, l));
      }
    };
  }
  mount() {
    this.removePointerDownListener = er(this.node.current, "pointerdown", (t) => this.onPointerDown(t));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const Yu = Ui(null);
function FM() {
  const e = zt(Yu);
  if (e === null)
    return [!0, null];
  const { isPresent: t, onExitComplete: r, register: o } = e, s = LT();
  Lo(() => o(s), []);
  const c = Dm(() => r && r(s), [s, r]);
  return !t && r ? [!1, c] : [!0];
}
const Ny = Ui({}), My = Ui({}), qs = {
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
function rm(e, t) {
  return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
const bo = {
  correct: (e, t) => {
    if (!t.target)
      return e;
    if (typeof e == "string")
      if (ue.test(e))
        e = parseFloat(e);
      else
        return e;
    const r = rm(e, t.target.x), o = rm(e, t.target.y);
    return `${r}% ${o}%`;
  }
}, BM = {
  correct: (e, { treeScale: t, projectionDelta: r }) => {
    const o = e, s = Or.parse(e);
    if (s.length > 5)
      return o;
    const c = Or.createTransformer(e), l = typeof s[0] != "number" ? 1 : 0, u = r.x.scale * t.x, f = r.y.scale * t.y;
    s[0 + l] /= u, s[1 + l] /= f;
    const h = nt(u, f, 0.5);
    return typeof s[2 + l] == "number" && (s[2 + l] /= h), typeof s[3 + l] == "number" && (s[3 + l] /= h), c(s);
  }
}, da = {};
function WM(e) {
  Object.assign(da, e);
}
const { schedule: qu, cancel: sI } = Ov(queueMicrotask, !1);
class $M extends kT {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: t, layoutGroup: r, switchLayoutGroup: o, layoutId: s } = this.props, { projection: c } = t;
    WM(UM), c && (r.group && r.group.add(c), o && o.register && s && o.register(c), c.root.didUpdate(), c.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), c.setOptions({
      ...c.options,
      onExitComplete: () => this.safeToRemove()
    })), qs.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(t) {
    const { layoutDependency: r, visualElement: o, drag: s, isPresent: c } = this.props, l = o.projection;
    return l && (l.isPresent = c, s || t.layoutDependency !== r || r === void 0 ? l.willUpdate() : this.safeToRemove(), t.isPresent !== c && (c ? l.promote() : l.relegate() || ze.postRender(() => {
      const u = l.getStack();
      (!u || !u.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t && (t.root.didUpdate(), qu.postRender(() => {
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
function Oy(e) {
  const [t, r] = FM(), o = zt(Ny);
  return m.jsx($M, { ...e, layoutGroup: o, switchLayoutGroup: zt(My), isPresent: t, safeToRemove: r });
}
const UM = {
  borderRadius: {
    ...bo,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: bo,
  borderTopRightRadius: bo,
  borderBottomLeftRadius: bo,
  borderBottomRightRadius: bo,
  boxShadow: BM
}, Dy = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], HM = Dy.length, im = (e) => typeof e == "string" ? parseFloat(e) : e, om = (e) => typeof e == "number" || ue.test(e);
function zM(e, t, r, o, s, c) {
  s ? (e.opacity = nt(
    0,
    // TODO Reinstate this if only child
    r.opacity !== void 0 ? r.opacity : 1,
    GM(o)
  ), e.opacityExit = nt(t.opacity !== void 0 ? t.opacity : 1, 0, KM(o))) : c && (e.opacity = nt(t.opacity !== void 0 ? t.opacity : 1, r.opacity !== void 0 ? r.opacity : 1, o));
  for (let l = 0; l < HM; l++) {
    const u = `border${Dy[l]}Radius`;
    let f = sm(t, u), h = sm(r, u);
    if (f === void 0 && h === void 0)
      continue;
    f || (f = 0), h || (h = 0), f === 0 || h === 0 || om(f) === om(h) ? (e[u] = Math.max(nt(im(f), im(h), o), 0), (Ln.test(h) || Ln.test(f)) && (e[u] += "%")) : e[u] = h;
  }
  (t.rotate || r.rotate) && (e.rotate = nt(t.rotate || 0, r.rotate || 0, o));
}
function sm(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const GM = /* @__PURE__ */ Iy(0, 0.5, Fv), KM = /* @__PURE__ */ Iy(0.5, 0.95, Ct);
function Iy(e, t, r) {
  return (o) => o < e ? 0 : o > t ? 1 : r(Wi(e, t, o));
}
function am(e, t) {
  e.min = t.min, e.max = t.max;
}
function pn(e, t) {
  am(e.x, t.x), am(e.y, t.y);
}
function lm(e, t) {
  e.translate = t.translate, e.scale = t.scale, e.originPoint = t.originPoint, e.origin = t.origin;
}
function cm(e, t, r, o, s) {
  return e -= t, e = fa(e, 1 / r, o), s !== void 0 && (e = fa(e, 1 / s, o)), e;
}
function YM(e, t = 0, r = 1, o = 0.5, s, c = e, l = e) {
  if (Ln.test(t) && (t = parseFloat(t), t = nt(l.min, l.max, t / 100) - l.min), typeof t != "number")
    return;
  let u = nt(c.min, c.max, o);
  e === c && (u -= t), e.min = cm(e.min, t, r, u, s), e.max = cm(e.max, t, r, u, s);
}
function um(e, t, [r, o, s], c, l) {
  YM(e, t[r], t[o], t[s], t.scale, c, l);
}
const qM = ["x", "scaleX", "originX"], XM = ["y", "scaleY", "originY"];
function fm(e, t, r, o) {
  um(e.x, t, qM, r ? r.x : void 0, o ? o.x : void 0), um(e.y, t, XM, r ? r.y : void 0, o ? o.y : void 0);
}
function dm(e) {
  return e.translate === 0 && e.scale === 1;
}
function jy(e) {
  return dm(e.x) && dm(e.y);
}
function hm(e, t) {
  return e.min === t.min && e.max === t.max;
}
function ZM(e, t) {
  return hm(e.x, t.x) && hm(e.y, t.y);
}
function pm(e, t) {
  return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max);
}
function Ly(e, t) {
  return pm(e.x, t.x) && pm(e.y, t.y);
}
function mm(e) {
  return nn(e.x) / nn(e.y);
}
function gm(e, t) {
  return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint;
}
class JM {
  constructor() {
    this.members = [];
  }
  add(t) {
    Hu(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (zu(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
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
function QM(e, t, r) {
  let o = "";
  const s = e.x.translate / t.x, c = e.y.translate / t.y, l = (r == null ? void 0 : r.z) || 0;
  if ((s || c || l) && (o = `translate3d(${s}px, ${c}px, ${l}px) `), (t.x !== 1 || t.y !== 1) && (o += `scale(${1 / t.x}, ${1 / t.y}) `), r) {
    const { transformPerspective: h, rotate: p, rotateX: v, rotateY: x, skewX: y, skewY: T } = r;
    h && (o = `perspective(${h}px) ${o}`), p && (o += `rotate(${p}deg) `), v && (o += `rotateX(${v}deg) `), x && (o += `rotateY(${x}deg) `), y && (o += `skewX(${y}deg) `), T && (o += `skewY(${T}deg) `);
  }
  const u = e.x.scale * t.x, f = e.y.scale * t.y;
  return (u !== 1 || f !== 1) && (o += `scale(${u}, ${f})`), o || "none";
}
const eO = (e, t) => e.depth - t.depth;
class tO {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(t) {
    Hu(this.children, t), this.isDirty = !0;
  }
  remove(t) {
    zu(this.children, t), this.isDirty = !0;
  }
  forEach(t) {
    this.isDirty && this.children.sort(eO), this.isDirty = !1, this.children.forEach(t);
  }
}
function Xs(e) {
  const t = Nt(e) ? e.get() : e;
  return G2(t) ? t.toValue() : t;
}
function nO(e, t) {
  const r = kn.now(), o = ({ timestamp: s }) => {
    const c = s - r;
    c >= t && (Rr(o), e(c - t));
  };
  return ze.read(o, !0), () => Rr(o);
}
function rO(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function iO(e, t, r) {
  const o = Nt(e) ? e : jo(e);
  return o.start(Uu("", o, t, r)), o.animation;
}
const Zr = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0
}, To = typeof window < "u" && window.MotionDebug !== void 0, xc = ["", "X", "Y", "Z"], oO = { visibility: "hidden" }, vm = 1e3;
let sO = 0;
function wc(e, t, r, o) {
  const { latestValues: s } = t;
  s[e] && (r[e] = s[e], t.setStaticValue(e, 0), o && (o[e] = 0));
}
function ky(e) {
  if (e.hasCheckedOptimisedAppear = !0, e.root === e)
    return;
  const { visualElement: t } = e.options;
  if (!t)
    return;
  const r = py(t);
  if (window.MotionHasOptimisedAnimation(r, "transform")) {
    const { layout: s, layoutId: c } = e.options;
    window.MotionCancelOptimisedAnimation(r, "transform", ze, !(s || c));
  }
  const { parent: o } = e;
  o && !o.hasCheckedOptimisedAppear && ky(o);
}
function Vy({ attachResizeListener: e, defaultParent: t, measureScroll: r, checkIsScrollRoot: o, resetTransform: s }) {
  return class {
    constructor(l = {}, u = t == null ? void 0 : t()) {
      this.id = sO++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, To && (Zr.totalNodes = Zr.resolvedTargetDeltas = Zr.recalculatedProjection = 0), this.nodes.forEach(cO), this.nodes.forEach(pO), this.nodes.forEach(mO), this.nodes.forEach(uO), To && window.MotionDebug.record(Zr);
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = l, this.root = u ? u.root || u : this, this.path = u ? [...u.path, u] : [], this.parent = u, this.depth = u ? u.depth + 1 : 0;
      for (let f = 0; f < this.path.length; f++)
        this.path[f].shouldResetTransform = !0;
      this.root === this && (this.nodes = new tO());
    }
    addEventListener(l, u) {
      return this.eventHandlers.has(l) || this.eventHandlers.set(l, new Gu()), this.eventHandlers.get(l).add(u);
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
      this.isSVG = rO(l), this.instance = l;
      const { layoutId: f, layout: h, visualElement: p } = this.options;
      if (p && !p.current && p.mount(l), this.root.nodes.add(this), this.parent && this.parent.children.add(this), u && (h || f) && (this.isLayoutDirty = !0), e) {
        let v;
        const x = () => this.root.updateBlockedByResize = !1;
        e(l, () => {
          this.root.updateBlockedByResize = !0, v && v(), v = nO(x, 250), qs.hasAnimatedSinceResize && (qs.hasAnimatedSinceResize = !1, this.nodes.forEach(xm));
        });
      }
      f && this.root.registerSharedNode(f, this), this.options.animate !== !1 && p && (f || h) && this.addEventListener("didUpdate", ({ delta: v, hasLayoutChanged: x, hasRelativeTargetChanged: y, layout: T }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const C = this.options.transition || p.getDefaultTransition() || wO, { onLayoutAnimationStart: _, onLayoutAnimationComplete: E } = p.getProps(), A = !this.targetLayout || !Ly(this.targetLayout, T) || y, M = !x && y;
        if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || M || x && (A || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(v, M);
          const I = {
            ...Ru(C, "layout"),
            onPlay: _,
            onComplete: E
          };
          (p.shouldReduceMotion || this.options.layoutRoot) && (I.delay = 0, I.type = !1), this.startAnimation(I);
        } else
          x || xm(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = T;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const l = this.getStack();
      l && l.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, Rr(this.updateProjection);
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
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(gO), this.animationId++);
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
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && ky(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let p = 0; p < this.path.length; p++) {
        const v = this.path[p];
        v.shouldResetTransform = !0, v.updateScroll("snapshot"), v.options.layoutRoot && v.willUpdate(!1);
      }
      const { layoutId: u, layout: f } = this.options;
      if (u === void 0 && !f)
        return;
      const h = this.getTransformTemplate();
      this.prevTransformTemplateValue = h ? h(this.latestValues, "") : void 0, this.updateSnapshot(), l && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(ym);
        return;
      }
      this.isUpdating || this.nodes.forEach(dO), this.isUpdating = !1, this.nodes.forEach(hO), this.nodes.forEach(aO), this.nodes.forEach(lO), this.clearAllSnapshots();
      const u = kn.now();
      bt.delta = Mr(0, 1e3 / 60, u - bt.timestamp), bt.timestamp = u, bt.isProcessing = !0, fc.update.process(bt), fc.preRender.process(bt), fc.render.process(bt), bt.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, qu.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(fO), this.sharedNodes.forEach(vO);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, ze.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      ze.postRender(() => {
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
      this.layout = this.measure(!1), this.layoutCorrected = ut(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
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
      const l = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, u = this.projectionDelta && !jy(this.projectionDelta), f = this.getTransformTemplate(), h = f ? f(this.latestValues, "") : void 0, p = h !== this.prevTransformTemplateValue;
      l && (u || Xr(this.latestValues) || p) && (s(this.instance, h), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(l = !0) {
      const u = this.measurePageBox();
      let f = this.removeElementScroll(u);
      return l && (f = this.removeTransform(f)), bO(f), {
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
        return ut();
      const f = u.measureViewportBox();
      if (!(((l = this.scroll) === null || l === void 0 ? void 0 : l.wasRoot) || this.path.some(SO))) {
        const { scroll: p } = this.root;
        p && (Di(f.x, p.offset.x), Di(f.y, p.offset.y));
      }
      return f;
    }
    removeElementScroll(l) {
      var u;
      const f = ut();
      if (pn(f, l), !((u = this.scroll) === null || u === void 0) && u.wasRoot)
        return f;
      for (let h = 0; h < this.path.length; h++) {
        const p = this.path[h], { scroll: v, options: x } = p;
        p !== this.root && v && x.layoutScroll && (v.wasRoot && pn(f, l), Di(f.x, v.offset.x), Di(f.y, v.offset.y));
      }
      return f;
    }
    applyTransform(l, u = !1) {
      const f = ut();
      pn(f, l);
      for (let h = 0; h < this.path.length; h++) {
        const p = this.path[h];
        !u && p.options.layoutScroll && p.scroll && p !== p.root && Ii(f, {
          x: -p.scroll.offset.x,
          y: -p.scroll.offset.y
        }), Xr(p.latestValues) && Ii(f, p.latestValues);
      }
      return Xr(this.latestValues) && Ii(f, this.latestValues), f;
    }
    removeTransform(l) {
      const u = ut();
      pn(u, l);
      for (let f = 0; f < this.path.length; f++) {
        const h = this.path[f];
        if (!h.instance || !Xr(h.latestValues))
          continue;
        Qc(h.latestValues) && h.updateSnapshot();
        const p = ut(), v = h.measurePageBox();
        pn(p, v), fm(u, h.latestValues, h.snapshot ? h.snapshot.layoutBox : void 0, p);
      }
      return Xr(this.latestValues) && fm(u, this.latestValues), u;
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
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== bt.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(l = !1) {
      var u;
      const f = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = f.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = f.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = f.isSharedProjectionDirty);
      const h = !!this.resumingFrom || this !== f;
      if (!(l || h && this.isSharedProjectionDirty || this.isProjectionDirty || !((u = this.parent) === null || u === void 0) && u.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
        return;
      const { layout: v, layoutId: x } = this.options;
      if (!(!this.layout || !(v || x))) {
        if (this.resolvedRelativeTargetAt = bt.timestamp, !this.targetDelta && !this.relativeTarget) {
          const y = this.getClosestProjectingParent();
          y && y.layout && this.animationProgress !== 1 ? (this.relativeParent = y, this.forceRelativeParentToResolveTarget(), this.relativeTarget = ut(), this.relativeTargetOrigin = ut(), Ao(this.relativeTargetOrigin, this.layout.layoutBox, y.layout.layoutBox), pn(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (this.target || (this.target = ut(), this.targetWithTransforms = ut()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), CM(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : pn(this.target, this.layout.layoutBox), Ey(this.target, this.targetDelta)) : pn(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
            this.attemptToResolveRelativeTarget = !1;
            const y = this.getClosestProjectingParent();
            y && !!y.resumingFrom == !!this.resumingFrom && !y.options.layoutScroll && y.target && this.animationProgress !== 1 ? (this.relativeParent = y, this.forceRelativeParentToResolveTarget(), this.relativeTarget = ut(), this.relativeTargetOrigin = ut(), Ao(this.relativeTargetOrigin, this.target, y.target), pn(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
          }
          To && Zr.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || Qc(this.parent.latestValues) || Py(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      var l;
      const u = this.getLead(), f = !!this.resumingFrom || this !== u;
      let h = !0;
      if ((this.isProjectionDirty || !((l = this.parent) === null || l === void 0) && l.isProjectionDirty) && (h = !1), f && (this.isSharedProjectionDirty || this.isTransformDirty) && (h = !1), this.resolvedRelativeTargetAt === bt.timestamp && (h = !1), h)
        return;
      const { layout: p, layoutId: v } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(p || v))
        return;
      pn(this.layoutCorrected, this.layout.layoutBox);
      const x = this.treeScale.x, y = this.treeScale.y;
      OM(this.layoutCorrected, this.treeScale, this.path, f), u.layout && !u.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (u.target = u.layout.layoutBox, u.targetWithTransforms = ut());
      const { target: T } = u;
      if (!T) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (lm(this.prevProjectionDelta.x, this.projectionDelta.x), lm(this.prevProjectionDelta.y, this.projectionDelta.y)), Eo(this.projectionDelta, this.layoutCorrected, T, this.latestValues), (this.treeScale.x !== x || this.treeScale.y !== y || !gm(this.projectionDelta.x, this.prevProjectionDelta.x) || !gm(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", T)), To && Zr.recalculatedProjection++;
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
      this.prevProjectionDelta = Oi(), this.projectionDelta = Oi(), this.projectionDeltaWithTransform = Oi();
    }
    setAnimationOrigin(l, u = !1) {
      const f = this.snapshot, h = f ? f.latestValues : {}, p = { ...this.latestValues }, v = Oi();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !u;
      const x = ut(), y = f ? f.source : void 0, T = this.layout ? this.layout.source : void 0, C = y !== T, _ = this.getStack(), E = !_ || _.members.length <= 1, A = !!(C && !E && this.options.crossfade === !0 && !this.path.some(xO));
      this.animationProgress = 0;
      let M;
      this.mixTargetDelta = (I) => {
        const L = I / 1e3;
        wm(v.x, l.x, L), wm(v.y, l.y, L), this.setTargetDelta(v), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Ao(x, this.layout.layoutBox, this.relativeParent.layout.layoutBox), yO(this.relativeTarget, this.relativeTargetOrigin, x, L), M && ZM(this.relativeTarget, M) && (this.isProjectionDirty = !1), M || (M = ut()), pn(M, this.relativeTarget)), C && (this.animationValues = p, zM(p, h, this.latestValues, L, A, E)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = L;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(l) {
      this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (Rr(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = ze.update(() => {
        qs.hasAnimatedSinceResize = !0, this.currentAnimation = iO(0, vm, {
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
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(vm), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const l = this.getLead();
      let { targetWithTransforms: u, target: f, layout: h, latestValues: p } = l;
      if (!(!u || !f || !h)) {
        if (this !== l && this.layout && h && Fy(this.options.animationType, this.layout.layoutBox, h.layoutBox)) {
          f = this.target || ut();
          const v = nn(this.layout.layoutBox.x);
          f.x.min = l.target.x.min, f.x.max = f.x.min + v;
          const x = nn(this.layout.layoutBox.y);
          f.y.min = l.target.y.min, f.y.max = f.y.min + x;
        }
        pn(u, f), Ii(u, p), Eo(this.projectionDeltaWithTransform, this.layoutCorrected, u, p);
      }
    }
    registerSharedNode(l, u) {
      this.sharedNodes.has(l) || this.sharedNodes.set(l, new JM()), this.sharedNodes.get(l).add(u);
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
      f.z && wc("z", l, h, this.animationValues);
      for (let p = 0; p < xc.length; p++)
        wc(`rotate${xc[p]}`, l, h, this.animationValues), wc(`skew${xc[p]}`, l, h, this.animationValues);
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
        return oO;
      const h = {
        visibility: ""
      }, p = this.getTransformTemplate();
      if (this.needsReset)
        return this.needsReset = !1, h.opacity = "", h.pointerEvents = Xs(l == null ? void 0 : l.pointerEvents) || "", h.transform = p ? p(this.latestValues, "") : "none", h;
      const v = this.getLead();
      if (!this.projectionDelta || !this.layout || !v.target) {
        const C = {};
        return this.options.layoutId && (C.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, C.pointerEvents = Xs(l == null ? void 0 : l.pointerEvents) || ""), this.hasProjected && !Xr(this.latestValues) && (C.transform = p ? p({}, "") : "none", this.hasProjected = !1), C;
      }
      const x = v.animationValues || v.latestValues;
      this.applyTransformsToTarget(), h.transform = QM(this.projectionDeltaWithTransform, this.treeScale, x), p && (h.transform = p(x, h.transform));
      const { x: y, y: T } = this.projectionDelta;
      h.transformOrigin = `${y.origin * 100}% ${T.origin * 100}% 0`, v.animationValues ? h.opacity = v === this ? (f = (u = x.opacity) !== null && u !== void 0 ? u : this.latestValues.opacity) !== null && f !== void 0 ? f : 1 : this.preserveOpacity ? this.latestValues.opacity : x.opacityExit : h.opacity = v === this ? x.opacity !== void 0 ? x.opacity : "" : x.opacityExit !== void 0 ? x.opacityExit : 0;
      for (const C in da) {
        if (x[C] === void 0)
          continue;
        const { correct: _, applyTo: E } = da[C], A = h.transform === "none" ? x[C] : _(x[C], v);
        if (E) {
          const M = E.length;
          for (let I = 0; I < M; I++)
            h[E[I]] = A;
        } else
          h[C] = A;
      }
      return this.options.layoutId && (h.pointerEvents = v === this ? Xs(l == null ? void 0 : l.pointerEvents) || "" : "none"), h;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((l) => {
        var u;
        return (u = l.currentAnimation) === null || u === void 0 ? void 0 : u.stop();
      }), this.root.nodes.forEach(ym), this.root.sharedNodes.clear();
    }
  };
}
function aO(e) {
  e.updateLayout();
}
function lO(e) {
  var t;
  const r = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && r && e.hasListeners("didUpdate")) {
    const { layoutBox: o, measuredBox: s } = e.layout, { animationType: c } = e.options, l = r.source !== e.layout.source;
    c === "size" ? mn((v) => {
      const x = l ? r.measuredBox[v] : r.layoutBox[v], y = nn(x);
      x.min = o[v].min, x.max = x.min + y;
    }) : Fy(c, r.layoutBox, o) && mn((v) => {
      const x = l ? r.measuredBox[v] : r.layoutBox[v], y = nn(o[v]);
      x.max = x.min + y, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[v].max = e.relativeTarget[v].min + y);
    });
    const u = Oi();
    Eo(u, o, r.layoutBox);
    const f = Oi();
    l ? Eo(f, e.applyTransform(s, !0), r.measuredBox) : Eo(f, o, r.layoutBox);
    const h = !jy(u);
    let p = !1;
    if (!e.resumeFrom) {
      const v = e.getClosestProjectingParent();
      if (v && !v.resumeFrom) {
        const { snapshot: x, layout: y } = v;
        if (x && y) {
          const T = ut();
          Ao(T, r.layoutBox, x.layoutBox);
          const C = ut();
          Ao(C, o, y.layoutBox), Ly(T, C) || (p = !0), v.options.layoutRoot && (e.relativeTarget = C, e.relativeTargetOrigin = T, e.relativeParent = v);
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
function cO(e) {
  To && Zr.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function uO(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function fO(e) {
  e.clearSnapshot();
}
function ym(e) {
  e.clearMeasurements();
}
function dO(e) {
  e.isLayoutDirty = !1;
}
function hO(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function xm(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function pO(e) {
  e.resolveTargetDelta();
}
function mO(e) {
  e.calcProjection();
}
function gO(e) {
  e.resetSkewAndRotation();
}
function vO(e) {
  e.removeLeadSnapshot();
}
function wm(e, t, r) {
  e.translate = nt(t.translate, 0, r), e.scale = nt(t.scale, 1, r), e.origin = t.origin, e.originPoint = t.originPoint;
}
function bm(e, t, r, o) {
  e.min = nt(t.min, r.min, o), e.max = nt(t.max, r.max, o);
}
function yO(e, t, r, o) {
  bm(e.x, t.x, r.x, o), bm(e.y, t.y, r.y, o);
}
function xO(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const wO = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, Sm = (e) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e), Cm = Sm("applewebkit/") && !Sm("chrome/") ? Math.round : Ct;
function Tm(e) {
  e.min = Cm(e.min), e.max = Cm(e.max);
}
function bO(e) {
  Tm(e.x), Tm(e.y);
}
function Fy(e, t, r) {
  return e === "position" || e === "preserve-aspect" && !SM(mm(t), mm(r), 0.2);
}
function SO(e) {
  var t;
  return e !== e.root && ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot);
}
const CO = Vy({
  attachResizeListener: (e, t) => Xn(e, "resize", t),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), bc = {
  current: void 0
}, By = Vy({
  measureScroll: (e) => ({
    x: e.scrollLeft,
    y: e.scrollTop
  }),
  defaultParent: () => {
    if (!bc.current) {
      const e = new CO({});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), bc.current = e;
    }
    return bc.current;
  },
  resetTransform: (e, t) => {
    e.style.transform = t !== void 0 ? t : "none";
  },
  checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), TO = {
  pan: {
    Feature: VM
  },
  drag: {
    Feature: kM,
    ProjectionNode: By,
    MeasureLayout: Oy
  }
};
function _m(e, t) {
  const r = t ? "pointerenter" : "pointerleave", o = t ? "onHoverStart" : "onHoverEnd", s = (c, l) => {
    if (c.pointerType === "touch" || Sy())
      return;
    const u = e.getProps();
    e.animationState && u.whileHover && e.animationState.setActive("whileHover", t);
    const f = u[o];
    f && ze.postRender(() => f(c, l));
  };
  return er(e.current, r, s, {
    passive: !e.getProps()[o]
  });
}
class _O extends jr {
  mount() {
    this.unmount = Qn(_m(this.node, !0), _m(this.node, !1));
  }
  unmount() {
  }
}
class PO extends jr {
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
    this.unmount = Qn(Xn(this.node.current, "focus", () => this.onFocus()), Xn(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
const Wy = (e, t) => t ? e === t ? !0 : Wy(e, t.parentElement) : !1;
function Sc(e, t) {
  if (!t)
    return;
  const r = new PointerEvent("pointer" + e);
  t(r, ja(r));
}
class EO extends jr {
  constructor() {
    super(...arguments), this.removeStartListeners = Ct, this.removeEndListeners = Ct, this.removeAccessibleListeners = Ct, this.startPointerPress = (t, r) => {
      if (this.isPressing)
        return;
      this.removeEndListeners();
      const o = this.node.getProps(), c = er(window, "pointerup", (u, f) => {
        if (!this.checkPressEnd())
          return;
        const { onTap: h, onTapCancel: p, globalTapTarget: v } = this.node.getProps(), x = !v && !Wy(this.node.current, u.target) ? p : h;
        x && ze.update(() => x(u, f));
      }, {
        passive: !(o.onTap || o.onPointerUp)
      }), l = er(window, "pointercancel", (u, f) => this.cancelPress(u, f), {
        passive: !(o.onTapCancel || o.onPointerCancel)
      });
      this.removeEndListeners = Qn(c, l), this.startPress(t, r);
    }, this.startAccessiblePress = () => {
      const t = (c) => {
        if (c.key !== "Enter" || this.isPressing)
          return;
        const l = (u) => {
          u.key !== "Enter" || !this.checkPressEnd() || Sc("up", (f, h) => {
            const { onTap: p } = this.node.getProps();
            p && ze.postRender(() => p(f, h));
          });
        };
        this.removeEndListeners(), this.removeEndListeners = Xn(this.node.current, "keyup", l), Sc("down", (u, f) => {
          this.startPress(u, f);
        });
      }, r = Xn(this.node.current, "keydown", t), o = () => {
        this.isPressing && Sc("cancel", (c, l) => this.cancelPress(c, l));
      }, s = Xn(this.node.current, "blur", o);
      this.removeAccessibleListeners = Qn(r, s);
    };
  }
  startPress(t, r) {
    this.isPressing = !0;
    const { onTapStart: o, whileTap: s } = this.node.getProps();
    s && this.node.animationState && this.node.animationState.setActive("whileTap", !0), o && ze.postRender(() => o(t, r));
  }
  checkPressEnd() {
    return this.removeEndListeners(), this.isPressing = !1, this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !Sy();
  }
  cancelPress(t, r) {
    if (!this.checkPressEnd())
      return;
    const { onTapCancel: o } = this.node.getProps();
    o && ze.postRender(() => o(t, r));
  }
  mount() {
    const t = this.node.getProps(), r = er(t.globalTapTarget ? window : this.node.current, "pointerdown", this.startPointerPress, {
      passive: !(t.onTapStart || t.onPointerStart)
    }), o = Xn(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = Qn(r, o);
  }
  unmount() {
    this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners();
  }
}
const tu = /* @__PURE__ */ new WeakMap(), Cc = /* @__PURE__ */ new WeakMap(), AO = (e) => {
  const t = tu.get(e.target);
  t && t(e);
}, RO = (e) => {
  e.forEach(AO);
};
function NO({ root: e, ...t }) {
  const r = e || document;
  Cc.has(r) || Cc.set(r, {});
  const o = Cc.get(r), s = JSON.stringify(t);
  return o[s] || (o[s] = new IntersectionObserver(RO, { root: e, ...t })), o[s];
}
function MO(e, t, r) {
  const o = NO(t);
  return tu.set(e, r), o.observe(e), () => {
    tu.delete(e), o.unobserve(e);
  };
}
const OO = {
  some: 0,
  all: 1
};
class DO extends jr {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(), { root: r, margin: o, amount: s = "some", once: c } = t, l = {
      root: r ? r.current : void 0,
      rootMargin: o,
      threshold: typeof s == "number" ? s : OO[s]
    }, u = (f) => {
      const { isIntersecting: h } = f;
      if (this.isInView === h || (this.isInView = h, c && !h && this.hasEnteredView))
        return;
      h && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", h);
      const { onViewportEnter: p, onViewportLeave: v } = this.node.getProps(), x = h ? p : v;
      x && x(f);
    };
    return MO(this.node.current, l, u);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: t, prevProps: r } = this.node;
    ["amount", "margin", "root"].some(IO(t, r)) && this.startObserver();
  }
  unmount() {
  }
}
function IO({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (r) => e[r] !== t[r];
}
const jO = {
  inView: {
    Feature: DO
  },
  tap: {
    Feature: EO
  },
  focus: {
    Feature: PO
  },
  hover: {
    Feature: _O
  }
}, LO = {
  layout: {
    ProjectionNode: By,
    MeasureLayout: Oy
  }
}, $y = Ui({
  transformPagePoint: (e) => e,
  isStatic: !1,
  reducedMotion: "never"
}), La = Ui({}), Xu = typeof window < "u", kO = Xu ? Om : Lo, Uy = Ui({ strict: !1 });
function VO(e, t, r, o, s) {
  var c, l;
  const { visualElement: u } = zt(La), f = zt(Uy), h = zt(Yu), p = zt($y).reducedMotion, v = Hs();
  o = o || f.renderer, !v.current && o && (v.current = o(e, {
    visualState: t,
    parent: u,
    props: r,
    presenceContext: h,
    blockInitialAnimation: h ? h.initial === !1 : !1,
    reducedMotionConfig: p
  }));
  const x = v.current, y = zt(My);
  x && !x.projection && s && (x.type === "html" || x.type === "svg") && FO(v.current, r, s, y);
  const T = Hs(!1);
  VT(() => {
    x && T.current && x.update(r, h);
  });
  const C = r[hy], _ = Hs(!!C && !(!((c = window.MotionHandoffIsComplete) === null || c === void 0) && c.call(window, C)) && ((l = window.MotionHasOptimisedAnimation) === null || l === void 0 ? void 0 : l.call(window, C)));
  return kO(() => {
    x && (T.current = !0, window.MotionIsMounted = !0, x.updateFeatures(), qu.render(x.render), _.current && x.animationState && x.animationState.animateChanges());
  }), Lo(() => {
    x && (!_.current && x.animationState && x.animationState.animateChanges(), _.current && (queueMicrotask(() => {
      var E;
      (E = window.MotionHandoffMarkAsComplete) === null || E === void 0 || E.call(window, C);
    }), _.current = !1));
  }), x;
}
function FO(e, t, r, o) {
  const { layoutId: s, layout: c, drag: l, dragConstraints: u, layoutScroll: f, layoutRoot: h } = t;
  e.projection = new r(e.latestValues, t["data-framer-portal-id"] ? void 0 : Hy(e.parent)), e.projection.setOptions({
    layoutId: s,
    layout: c,
    alwaysMeasureLayout: !!l || u && Mi(u),
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
function Hy(e) {
  if (e)
    return e.options.allowProjection !== !1 ? e.projection : Hy(e.parent);
}
function BO(e, t, r) {
  return Dm(
    (o) => {
      o && e.mount && e.mount(o), t && (o ? t.mount(o) : t.unmount()), r && (typeof r == "function" ? r(o) : Mi(r) && (r.current = o));
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [t]
  );
}
function ka(e) {
  return Oa(e.animate) || Au.some((t) => Oo(e[t]));
}
function zy(e) {
  return !!(ka(e) || e.variants);
}
function WO(e, t) {
  if (ka(e)) {
    const { initial: r, animate: o } = e;
    return {
      initial: r === !1 || Oo(r) ? r : void 0,
      animate: Oo(o) ? o : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function $O(e) {
  const { initial: t, animate: r } = WO(e, zt(La));
  return ko(() => ({ initial: t, animate: r }), [Pm(t), Pm(r)]);
}
function Pm(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const Em = {
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
}, $i = {};
for (const e in Em)
  $i[e] = {
    isEnabled: (t) => Em[e].some((r) => !!t[r])
  };
function UO(e) {
  for (const t in e)
    $i[t] = {
      ...$i[t],
      ...e[t]
    };
}
const HO = Symbol.for("motionComponentSymbol");
function zO({ preloadedFeatures: e, createVisualElement: t, useRender: r, useVisualState: o, Component: s }) {
  e && UO(e);
  function c(u, f) {
    let h;
    const p = {
      ...zt($y),
      ...u,
      layoutId: GO(u)
    }, { isStatic: v } = p, x = $O(u), y = o(u, v);
    if (!v && Xu) {
      KO(p, e);
      const T = YO(p);
      h = T.MeasureLayout, x.visualElement = VO(s, y, p, t, T.ProjectionNode);
    }
    return m.jsxs(La.Provider, { value: x, children: [h && x.visualElement ? m.jsx(h, { visualElement: x.visualElement, ...p }) : null, r(s, u, BO(y, x.visualElement, f), y, v, x.visualElement)] });
  }
  const l = ma(c);
  return l[HO] = s, l;
}
function GO({ layoutId: e }) {
  const t = zt(Ny).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function KO(e, t) {
  const r = zt(Uy).strict;
  if (process.env.NODE_ENV !== "production" && t && r) {
    const o = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
    e.ignoreStrict ? qi(!1, o) : Nr(!1, o);
  }
}
function YO(e) {
  const { drag: t, layout: r } = $i;
  if (!t && !r)
    return {};
  const o = { ...t, ...r };
  return {
    MeasureLayout: t != null && t.isEnabled(e) || r != null && r.isEnabled(e) ? o.MeasureLayout : void 0,
    ProjectionNode: o.ProjectionNode
  };
}
const qO = [
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
function Zu(e) {
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
      !!(qO.indexOf(e) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(e))
    )
  );
}
function Gy(e, { style: t, vars: r }, o, s) {
  Object.assign(e.style, t, s && s.getProjectionStyles(o));
  for (const c in r)
    e.style.setProperty(c, r[c]);
}
const Ky = /* @__PURE__ */ new Set([
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
function Yy(e, t, r, o) {
  Gy(e, t, void 0, o);
  for (const s in t.attrs)
    e.setAttribute(Ky.has(s) ? s : Ku(s), t.attrs[s]);
}
function qy(e, { layout: t, layoutId: r }) {
  return li.has(e) || e.startsWith("origin") || (t || r !== void 0) && (!!da[e] || e === "opacity");
}
function Ju(e, t, r) {
  var o;
  const { style: s } = e, c = {};
  for (const l in s)
    (Nt(s[l]) || t.style && Nt(t.style[l]) || qy(l, e) || ((o = r == null ? void 0 : r.getValue(l)) === null || o === void 0 ? void 0 : o.liveStyle) !== void 0) && (c[l] = s[l]);
  return c;
}
function Xy(e, t, r) {
  const o = Ju(e, t, r);
  for (const s in e)
    if (Nt(e[s]) || Nt(t[s])) {
      const c = Wo.indexOf(s) !== -1 ? "attr" + s.charAt(0).toUpperCase() + s.substring(1) : s;
      o[c] = e[s];
    }
  return o;
}
function XO(e) {
  const t = Hs(null);
  return t.current === null && (t.current = e()), t.current;
}
function ZO({ scrapeMotionValuesFromProps: e, createRenderState: t, onMount: r }, o, s, c) {
  const l = {
    latestValues: JO(o, s, c, e),
    renderState: t()
  };
  return r && (l.mount = (u) => r(o, u, l)), l;
}
const Zy = (e) => (t, r) => {
  const o = zt(La), s = zt(Yu), c = () => ZO(e, t, o, s);
  return r ? c() : XO(c);
};
function JO(e, t, r, o) {
  const s = {}, c = o(e, {});
  for (const x in c)
    s[x] = Xs(c[x]);
  let { initial: l, animate: u } = e;
  const f = ka(e), h = zy(e);
  t && h && !f && e.inherit !== !1 && (l === void 0 && (l = t.initial), u === void 0 && (u = t.animate));
  let p = r ? r.initial === !1 : !1;
  p = p || l === !1;
  const v = p ? u : l;
  if (v && typeof v != "boolean" && !Oa(v)) {
    const x = Array.isArray(v) ? v : [v];
    for (let y = 0; y < x.length; y++) {
      const T = Pu(e, x[y]);
      if (T) {
        const { transitionEnd: C, transition: _, ...E } = T;
        for (const A in E) {
          let M = E[A];
          if (Array.isArray(M)) {
            const I = p ? M.length - 1 : 0;
            M = M[I];
          }
          M !== null && (s[A] = M);
        }
        for (const A in C)
          s[A] = C[A];
      }
    }
  }
  return s;
}
const Qu = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
}), Jy = () => ({
  ...Qu(),
  attrs: {}
}), Qy = (e, t) => t && typeof e == "number" ? t.transform(e) : e, QO = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, eD = Wo.length;
function tD(e, t, r) {
  let o = "", s = !0;
  for (let c = 0; c < eD; c++) {
    const l = Wo[c], u = e[l];
    if (u === void 0)
      continue;
    let f = !0;
    if (typeof u == "number" ? f = u === (l.startsWith("scale") ? 1 : 0) : f = parseFloat(u) === 0, !f || r) {
      const h = Qy(u, Lu[l]);
      if (!f) {
        s = !1;
        const p = QO[l] || l;
        o += `${p}(${h}) `;
      }
      r && (t[l] = h);
    }
  }
  return o = o.trim(), r ? o = r(t, s ? "" : o) : s && (o = "none"), o;
}
function ef(e, t, r) {
  const { style: o, vars: s, transformOrigin: c } = e;
  let l = !1, u = !1;
  for (const f in t) {
    const h = t[f];
    if (li.has(f)) {
      l = !0;
      continue;
    } else if (Hv(f)) {
      s[f] = h;
      continue;
    } else {
      const p = Qy(h, Lu[f]);
      f.startsWith("origin") ? (u = !0, c[f] = p) : o[f] = p;
    }
  }
  if (t.transform || (l || r ? o.transform = tD(t, e.transform, r) : o.transform && (o.transform = "none")), u) {
    const { originX: f = "50%", originY: h = "50%", originZ: p = 0 } = c;
    o.transformOrigin = `${f} ${h} ${p}`;
  }
}
function Am(e, t, r) {
  return typeof e == "string" ? e : ue.transform(t + r * e);
}
function nD(e, t, r) {
  const o = Am(t, e.x, e.width), s = Am(r, e.y, e.height);
  return `${o} ${s}`;
}
const rD = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, iD = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function oD(e, t, r = 1, o = 0, s = !0) {
  e.pathLength = 1;
  const c = s ? rD : iD;
  e[c.offset] = ue.transform(-o);
  const l = ue.transform(t), u = ue.transform(r);
  e[c.array] = `${l} ${u}`;
}
function tf(e, {
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
}, p, v) {
  if (ef(e, h, v), p) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  e.attrs = e.style, e.style = {};
  const { attrs: x, style: y, dimensions: T } = e;
  x.transform && (T && (y.transform = x.transform), delete x.transform), T && (s !== void 0 || c !== void 0 || y.transform) && (y.transformOrigin = nD(T, s !== void 0 ? s : 0.5, c !== void 0 ? c : 0.5)), t !== void 0 && (x.x = t), r !== void 0 && (x.y = r), o !== void 0 && (x.scale = o), l !== void 0 && oD(x, l, u, f, !1);
}
const nf = (e) => typeof e == "string" && e.toLowerCase() === "svg", sD = {
  useVisualState: Zy({
    scrapeMotionValuesFromProps: Xy,
    createRenderState: Jy,
    onMount: (e, t, { renderState: r, latestValues: o }) => {
      ze.read(() => {
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
      }), ze.render(() => {
        tf(r, o, nf(t.tagName), e.transformTemplate), Yy(t, r);
      });
    }
  })
}, aD = {
  useVisualState: Zy({
    scrapeMotionValuesFromProps: Ju,
    createRenderState: Qu
  })
};
function e0(e, t, r) {
  for (const o in t)
    !Nt(t[o]) && !qy(o, r) && (e[o] = t[o]);
}
function lD({ transformTemplate: e }, t) {
  return ko(() => {
    const r = Qu();
    return ef(r, t, e), Object.assign({}, r.vars, r.style);
  }, [t]);
}
function cD(e, t) {
  const r = e.style || {}, o = {};
  return e0(o, r, e), Object.assign(o, lD(e, t)), o;
}
function uD(e, t) {
  const r = {}, o = cD(e, t);
  return e.drag && e.dragListener !== !1 && (r.draggable = !1, o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none", o.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (r.tabIndex = 0), r.style = o, r;
}
const fD = /* @__PURE__ */ new Set([
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
function ha(e) {
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || fD.has(e);
}
let t0 = (e) => !ha(e);
function dD(e) {
  e && (t0 = (t) => t.startsWith("on") ? !ha(t) : e(t));
}
try {
  dD(require("@emotion/is-prop-valid").default);
} catch {
}
function hD(e, t, r) {
  const o = {};
  for (const s in e)
    s === "values" && typeof e.values == "object" || (t0(s) || r === !0 && ha(s) || !t && !ha(s) || // If trying to use native HTML drag events, forward drag listeners
    e.draggable && s.startsWith("onDrag")) && (o[s] = e[s]);
  return o;
}
function pD(e, t, r, o) {
  const s = ko(() => {
    const c = Jy();
    return tf(c, t, nf(o), e.transformTemplate), {
      ...c.attrs,
      style: { ...c.style }
    };
  }, [t]);
  if (e.style) {
    const c = {};
    e0(c, e.style, e), s.style = { ...c, ...s.style };
  }
  return s;
}
function mD(e = !1) {
  return (r, o, s, { latestValues: c }, l) => {
    const f = (Zu(r) ? pD : uD)(o, c, l, r), h = hD(o, typeof r == "string", e), p = r !== Im ? { ...h, ...f, ref: s } : {}, { children: v } = o, x = ko(() => Nt(v) ? v.get() : v, [v]);
    return Zs(r, {
      ...p,
      children: x
    });
  };
}
function gD(e, t) {
  return function(o, { forwardMotionProps: s } = { forwardMotionProps: !1 }) {
    const l = {
      ...Zu(o) ? sD : aD,
      preloadedFeatures: e,
      useRender: mD(s),
      createVisualElement: t,
      Component: o
    };
    return zO(l);
  };
}
const nu = { current: null }, n0 = { current: !1 };
function vD() {
  if (n0.current = !0, !!Xu)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"), t = () => nu.current = e.matches;
      e.addListener(t), t();
    } else
      nu.current = !1;
}
function yD(e, t, r) {
  for (const o in t) {
    const s = t[o], c = r[o];
    if (Nt(s))
      e.addValue(o, s), process.env.NODE_ENV === "development" && Ma(s.version === "11.11.17", `Attempting to mix Motion versions ${s.version} with 11.11.17 may not work as expected.`);
    else if (Nt(c))
      e.addValue(o, jo(s, { owner: e }));
    else if (c !== s)
      if (e.hasValue(o)) {
        const l = e.getValue(o);
        l.liveStyle === !0 ? l.jump(s) : l.hasAnimated || l.set(s);
      } else {
        const l = e.getStaticValue(o);
        e.addValue(o, jo(l !== void 0 ? l : s, { owner: e }));
      }
  }
  for (const o in r)
    t[o] === void 0 && e.removeValue(o);
  return t;
}
const Rm = /* @__PURE__ */ new WeakMap(), xD = [...Kv, Rt, Or], wD = (e) => xD.find(Gv(e)), Nm = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
class bD {
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
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = Du, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const x = kn.now();
      this.renderScheduledAt < x && (this.renderScheduledAt = x, ze.render(this.render, !1, !0));
    };
    const { latestValues: f, renderState: h } = l;
    this.latestValues = f, this.baseTarget = { ...f }, this.initialValues = r.initial ? { ...f } : {}, this.renderState = h, this.parent = t, this.props = r, this.presenceContext = o, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = s, this.options = u, this.blockInitialAnimation = !!c, this.isControllingVariants = ka(r), this.isVariantNode = zy(r), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
    const { willChange: p, ...v } = this.scrapeMotionValuesFromProps(r, {}, this);
    for (const x in v) {
      const y = v[x];
      f[x] !== void 0 && Nt(y) && y.set(f[x], !1);
    }
  }
  mount(t) {
    this.current = t, Rm.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((r, o) => this.bindToMotionValue(o, r)), n0.current || vD(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : nu.current, process.env.NODE_ENV !== "production" && Ma(this.shouldReduceMotion !== !0, "You have Reduced Motion enabled on your device. Animations may not appear as expected."), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    Rm.delete(this.current), this.projection && this.projection.unmount(), Rr(this.notifyUpdate), Rr(this.render), this.valueSubscriptions.forEach((t) => t()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
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
    const o = li.has(t), s = r.on("change", (u) => {
      this.latestValues[t] = u, this.props.onUpdate && ze.preRender(this.notifyUpdate), o && this.projection && (this.projection.isTransformDirty = !0);
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
    for (t in $i) {
      const r = $i[t];
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
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : ut();
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
    for (let o = 0; o < Nm.length; o++) {
      const s = Nm[o];
      this.propEventSubscriptions[s] && (this.propEventSubscriptions[s](), delete this.propEventSubscriptions[s]);
      const c = "on" + s, l = t[c];
      l && (this.propEventSubscriptions[s] = this.on(s, l));
    }
    this.prevMotionValues = yD(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
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
    return o === void 0 && r !== void 0 && (o = jo(r === null ? void 0 : r, { owner: this }), this.addValue(t, o)), o;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(t, r) {
    var o;
    let s = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : (o = this.getBaseTargetFromProps(this.props, t)) !== null && o !== void 0 ? o : this.readValueFromInstance(this.current, t, this.options);
    return s != null && (typeof s == "string" && ($v(s) || Wv(s)) ? s = parseFloat(s) : !wD(s) && Or.test(r) && (s = ty(t, r)), this.setBaseTarget(t, Nt(s) ? s.get() : s)), Nt(s) ? s.get() : s;
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
      const l = Pu(this.props, o, (r = this.presenceContext) === null || r === void 0 ? void 0 : r.custom);
      l && (s = l[t]);
    }
    if (o && s !== void 0)
      return s;
    const c = this.getBaseTargetFromProps(this.props, t);
    return c !== void 0 && !Nt(c) ? c : this.initialValues[t] !== void 0 && s === void 0 ? void 0 : this.baseTarget[t];
  }
  on(t, r) {
    return this.events[t] || (this.events[t] = new Gu()), this.events[t].add(r);
  }
  notify(t, ...r) {
    this.events[t] && this.events[t].notify(...r);
  }
}
class r0 extends bD {
  constructor() {
    super(...arguments), this.KeyframeResolver = ny;
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
function SD(e) {
  return window.getComputedStyle(e);
}
class CD extends r0 {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = Gy;
  }
  readValueFromInstance(t, r) {
    if (li.has(r)) {
      const o = ku(r);
      return o && o.default || 0;
    } else {
      const o = SD(t), s = (Hv(r) ? o.getPropertyValue(r) : o[r]) || 0;
      return typeof s == "string" ? s.trim() : s;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: r }) {
    return Ay(t, r);
  }
  build(t, r, o) {
    ef(t, r, o.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, r, o) {
    return Ju(t, r, o);
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    Nt(t) && (this.childSubscription = t.on("change", (r) => {
      this.current && (this.current.textContent = `${r}`);
    }));
  }
}
class TD extends r0 {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = ut;
  }
  getBaseTargetFromProps(t, r) {
    return t[r];
  }
  readValueFromInstance(t, r) {
    if (li.has(r)) {
      const o = ku(r);
      return o && o.default || 0;
    }
    return r = Ky.has(r) ? r : Ku(r), t.getAttribute(r);
  }
  scrapeMotionValuesFromProps(t, r, o) {
    return Xy(t, r, o);
  }
  build(t, r, o) {
    tf(t, r, this.isSVGTag, o.transformTemplate);
  }
  renderInstance(t, r, o, s) {
    Yy(t, r, o, s);
  }
  mount(t) {
    this.isSVGTag = nf(t.tagName), super.mount(t);
  }
}
const _D = (e, t) => Zu(e) ? new TD(t) : new CD(t, {
  allowProjection: e !== Im
}), PD = /* @__PURE__ */ gD({
  ...hM,
  ...jO,
  ...TO,
  ...LO
}, _D), rf = /* @__PURE__ */ iN(PD);
function lI({ deal: e }) {
  const [t, r] = Sr([]), o = ko(() => [...e.riskFactors].sort((u, f) => {
    const h = { high: 0, medium: 1, low: 2 };
    return h[u.level] - h[f.level];
  }), [e.riskFactors]), s = (u) => {
    switch (u) {
      case "high":
        return /* @__PURE__ */ m.jsx(Ec, { className: "w-4 h-4" });
      case "medium":
        return /* @__PURE__ */ m.jsx(r_, { className: "w-4 h-4" });
      case "low":
        return /* @__PURE__ */ m.jsx(t_, { className: "w-4 h-4" });
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
  return /* @__PURE__ */ m.jsxs(oi, { className: "shadow-lg w-full max-w-3xl mx-auto my-8", children: [
    /* @__PURE__ */ m.jsxs(si, { children: [
      /* @__PURE__ */ m.jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ m.jsx(ai, { className: "text-slate-800", children: "Risk Assessment" }) }),
      /* @__PURE__ */ m.jsx("p", { className: "text-sm text-slate-500", children: "Identify and assess potential obstacles in the deal process" })
    ] }),
    /* @__PURE__ */ m.jsx(Yi, { children: /* @__PURE__ */ m.jsx("div", { className: "space-y-6", children: o.map((u, f) => /* @__PURE__ */ m.jsxs("div", { className: `p-4 rounded-lg border ${c(u.level)}`, children: [
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
              /* @__PURE__ */ m.jsx(Cr, { children: /* @__PURE__ */ m.jsxs(Tr, { children: [
                /* @__PURE__ */ m.jsx(_r, { asChild: !0, children: /* @__PURE__ */ m.jsxs("div", { className: "flex items-center space-x-1 text-xs sm:text-sm text-muted-foreground", children: [
                  /* @__PURE__ */ m.jsxs("span", { children: [
                    u.lostDealFrequency,
                    " deals lost"
                  ] }),
                  /* @__PURE__ */ m.jsx(Ro, { className: "w-3 h-3 text-muted-foreground" })
                ] }) }),
                /* @__PURE__ */ m.jsx(Zn, { className: "max-w-xs", children: /* @__PURE__ */ m.jsxs("p", { children: [
                  "This factor contributed to ",
                  u.lostDealFrequency,
                  " lost deals in the past. Addressing this early can help avoid the same outcome."
                ] }) })
              ] }) }),
              /* @__PURE__ */ m.jsx(
                va,
                {
                  className: `w-4 h-4 transition-transform ${t.includes(u.label) ? "transform rotate-180" : ""}`
                }
              )
            ] })
          ]
        }
      ),
      t.includes(u.label) && /* @__PURE__ */ m.jsxs(
        rf.div,
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
    ] }, f)) }) })
  ] });
}
var of = "Dialog", [i0, cI] = au(of), [ED, Tn] = i0(of), o0 = (e) => {
  const {
    __scopeDialog: t,
    children: r,
    open: o,
    defaultOpen: s,
    onOpenChange: c,
    modal: l = !0
  } = e, u = S.useRef(null), f = S.useRef(null), [h = !1, p] = ra({
    prop: o,
    defaultProp: s,
    onChange: c
  });
  return /* @__PURE__ */ m.jsx(
    ED,
    {
      scope: t,
      triggerRef: u,
      contentRef: f,
      contentId: Qr(),
      titleId: Qr(),
      descriptionId: Qr(),
      open: h,
      onOpenChange: p,
      onOpenToggle: S.useCallback(() => p((v) => !v), [p]),
      modal: l,
      children: r
    }
  );
};
o0.displayName = of;
var s0 = "DialogTrigger", AD = S.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...o } = e, s = Tn(s0, r), c = rt(t, s.triggerRef);
    return /* @__PURE__ */ m.jsx(
      $e.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": s.open,
        "aria-controls": s.contentId,
        "data-state": lf(s.open),
        ...o,
        ref: c,
        onClick: Ve(e.onClick, s.onOpenToggle)
      }
    );
  }
);
AD.displayName = s0;
var sf = "DialogPortal", [RD, a0] = i0(sf, {
  forceMount: void 0
}), l0 = (e) => {
  const { __scopeDialog: t, forceMount: r, children: o, container: s } = e, c = Tn(sf, t);
  return /* @__PURE__ */ m.jsx(RD, { scope: t, forceMount: r, children: S.Children.map(o, (l) => /* @__PURE__ */ m.jsx(Bo, { present: r || c.open, children: /* @__PURE__ */ m.jsx(yu, { asChild: !0, container: s, children: l }) })) });
};
l0.displayName = sf;
var pa = "DialogOverlay", c0 = S.forwardRef(
  (e, t) => {
    const r = a0(pa, e.__scopeDialog), { forceMount: o = r.forceMount, ...s } = e, c = Tn(pa, e.__scopeDialog);
    return c.modal ? /* @__PURE__ */ m.jsx(Bo, { present: o || c.open, children: /* @__PURE__ */ m.jsx(ND, { ...s, ref: t }) }) : null;
  }
);
c0.displayName = pa;
var ND = S.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...o } = e, s = Tn(pa, r);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ m.jsx(wu, { as: ti, allowPinchZoom: !0, shards: [s.contentRef], children: /* @__PURE__ */ m.jsx(
        $e.div,
        {
          "data-state": lf(s.open),
          ...o,
          ref: t,
          style: { pointerEvents: "auto", ...o.style }
        }
      ) })
    );
  }
), ii = "DialogContent", u0 = S.forwardRef(
  (e, t) => {
    const r = a0(ii, e.__scopeDialog), { forceMount: o = r.forceMount, ...s } = e, c = Tn(ii, e.__scopeDialog);
    return /* @__PURE__ */ m.jsx(Bo, { present: o || c.open, children: c.modal ? /* @__PURE__ */ m.jsx(MD, { ...s, ref: t }) : /* @__PURE__ */ m.jsx(OD, { ...s, ref: t }) });
  }
);
u0.displayName = ii;
var MD = S.forwardRef(
  (e, t) => {
    const r = Tn(ii, e.__scopeDialog), o = S.useRef(null), s = rt(t, r.contentRef, o);
    return S.useEffect(() => {
      const c = o.current;
      if (c)
        return Tg(c);
    }, []), /* @__PURE__ */ m.jsx(
      f0,
      {
        ...e,
        ref: s,
        trapFocus: r.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: Ve(e.onCloseAutoFocus, (c) => {
          var l;
          c.preventDefault(), (l = r.triggerRef.current) == null || l.focus();
        }),
        onPointerDownOutside: Ve(e.onPointerDownOutside, (c) => {
          const l = c.detail.originalEvent, u = l.button === 0 && l.ctrlKey === !0;
          (l.button === 2 || u) && c.preventDefault();
        }),
        onFocusOutside: Ve(
          e.onFocusOutside,
          (c) => c.preventDefault()
        )
      }
    );
  }
), OD = S.forwardRef(
  (e, t) => {
    const r = Tn(ii, e.__scopeDialog), o = S.useRef(!1), s = S.useRef(!1);
    return /* @__PURE__ */ m.jsx(
      f0,
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
), f0 = S.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, trapFocus: o, onOpenAutoFocus: s, onCloseAutoFocus: c, ...l } = e, u = Tn(ii, r), f = S.useRef(null), h = rt(t, f);
    return Jm(), /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
      /* @__PURE__ */ m.jsx(
        lu,
        {
          asChild: !0,
          loop: !0,
          trapped: o,
          onMountAutoFocus: s,
          onUnmountAutoFocus: c,
          children: /* @__PURE__ */ m.jsx(
            ya,
            {
              role: "dialog",
              id: u.contentId,
              "aria-describedby": u.descriptionId,
              "aria-labelledby": u.titleId,
              "data-state": lf(u.open),
              ...l,
              ref: h,
              onDismiss: () => u.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
        /* @__PURE__ */ m.jsx(DD, { titleId: u.titleId }),
        /* @__PURE__ */ m.jsx(jD, { contentRef: f, descriptionId: u.descriptionId })
      ] })
    ] });
  }
), af = "DialogTitle", d0 = S.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...o } = e, s = Tn(af, r);
    return /* @__PURE__ */ m.jsx($e.h2, { id: s.titleId, ...o, ref: t });
  }
);
d0.displayName = af;
var h0 = "DialogDescription", p0 = S.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...o } = e, s = Tn(h0, r);
    return /* @__PURE__ */ m.jsx($e.p, { id: s.descriptionId, ...o, ref: t });
  }
);
p0.displayName = h0;
var m0 = "DialogClose", g0 = S.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...o } = e, s = Tn(m0, r);
    return /* @__PURE__ */ m.jsx(
      $e.button,
      {
        type: "button",
        ...o,
        ref: t,
        onClick: Ve(e.onClick, () => s.onOpenChange(!1))
      }
    );
  }
);
g0.displayName = m0;
function lf(e) {
  return e ? "open" : "closed";
}
var v0 = "DialogTitleWarning", [uI, y0] = PP(v0, {
  contentName: ii,
  titleName: af,
  docsSlug: "dialog"
}), DD = ({ titleId: e }) => {
  const t = y0(v0), r = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return S.useEffect(() => {
    e && (document.getElementById(e) || console.error(r));
  }, [r, e]), null;
}, ID = "DialogDescriptionWarning", jD = ({ contentRef: e, descriptionId: t }) => {
  const o = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${y0(ID).contentName}}.`;
  return S.useEffect(() => {
    var c;
    const s = (c = e.current) == null ? void 0 : c.getAttribute("aria-describedby");
    t && s && (document.getElementById(t) || console.warn(o));
  }, [o, e, t]), null;
}, LD = o0, kD = l0, x0 = c0, w0 = u0, b0 = d0, S0 = p0, VD = g0;
const C0 = LD, FD = kD, T0 = S.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ m.jsx(
  x0,
  {
    ref: r,
    className: Ge(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
T0.displayName = x0.displayName;
const cf = S.forwardRef(({ className: e, children: t, ...r }, o) => /* @__PURE__ */ m.jsxs(FD, { children: [
  /* @__PURE__ */ m.jsx(T0, {}),
  /* @__PURE__ */ m.jsxs(
    w0,
    {
      ref: o,
      className: Ge(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        e
      ),
      ...r,
      children: [
        t,
        /* @__PURE__ */ m.jsxs(VD, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ m.jsx(Hm, { className: "h-4 w-4" }),
          /* @__PURE__ */ m.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
cf.displayName = w0.displayName;
const uf = ({
  className: e,
  ...t
}) => /* @__PURE__ */ m.jsx(
  "div",
  {
    className: Ge(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      e
    ),
    ...t
  }
);
uf.displayName = "DialogHeader";
const ff = ({
  className: e,
  ...t
}) => /* @__PURE__ */ m.jsx(
  "div",
  {
    className: Ge(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
ff.displayName = "DialogFooter";
const df = S.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ m.jsx(
  b0,
  {
    ref: r,
    className: Ge(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
df.displayName = b0.displayName;
const _0 = S.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ m.jsx(
  S0,
  {
    ref: r,
    className: Ge("text-sm text-muted-foreground", e),
    ...t
  }
));
_0.displayName = S0.displayName;
var BD = "Separator", Mm = "horizontal", WD = ["horizontal", "vertical"], P0 = S.forwardRef((e, t) => {
  const { decorative: r, orientation: o = Mm, ...s } = e, c = $D(o) ? o : Mm, u = r ? { role: "none" } : { "aria-orientation": c === "vertical" ? c : void 0, role: "separator" };
  return /* @__PURE__ */ m.jsx(
    $e.div,
    {
      "data-orientation": c,
      ...u,
      ...s,
      ref: t
    }
  );
});
P0.displayName = BD;
function $D(e) {
  return WD.includes(e);
}
var E0 = P0;
const A0 = S.forwardRef(
  ({ className: e, orientation: t = "horizontal", decorative: r = !0, ...o }, s) => /* @__PURE__ */ m.jsx(
    E0,
    {
      ref: s,
      decorative: r,
      orientation: t,
      className: Ge(
        "shrink-0 bg-border",
        t === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        e
      ),
      ...o
    }
  )
);
A0.displayName = E0.displayName;
const fI = ({ deal: e, onNavigate: t }) => {
  const [r, o] = Sr([]), [s, c] = Sr(!1), l = (h) => {
    o((p) => p.includes(h) ? p.filter((v) => v !== h) : [...p, h]);
  }, u = (h) => h.replace(/([A-Z])/g, " $1").replace(/^./, (p) => p.toUpperCase()).trim(), f = (h) => $_(h);
  return /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
    /* @__PURE__ */ m.jsxs(oi, { className: "shadow-lg w-full max-w-3xl mx-auto my-8", children: [
      /* @__PURE__ */ m.jsxs(si, { className: "flex flex-row items-center justify-between", children: [
        /* @__PURE__ */ m.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ m.jsx(ai, { className: "", children: "Deal Qualification" }),
          /* @__PURE__ */ m.jsx("p", { className: "text-sm text-muted-foreground", children: "Assess this deal's qualification strength according to MEDDPICC" })
        ] }),
        /* @__PURE__ */ m.jsx(Cr, { children: /* @__PURE__ */ m.jsxs(Tr, { children: [
          /* @__PURE__ */ m.jsx(_r, { asChild: !0, children: /* @__PURE__ */ m.jsx(
            St,
            {
              variant: "outline",
              size: "sm",
              onClick: () => t == null ? void 0 : t("/deals/qualification-framework"),
              children: /* @__PURE__ */ m.jsx($h, { className: "w-3 h-3" })
            }
          ) }),
          /* @__PURE__ */ m.jsx(Zn, { children: /* @__PURE__ */ m.jsx("p", { children: "Configure qualification framework" }) })
        ] }) })
      ] }),
      /* @__PURE__ */ m.jsx(Yi, { children: /* @__PURE__ */ m.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ m.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
          /* @__PURE__ */ m.jsx("span", { className: "text-sm font-medium text-muted-foreground", children: "Criteria" }),
          /* @__PURE__ */ m.jsx("div", { className: "flex items-center space-x-1", children: /* @__PURE__ */ m.jsx(Cr, { children: /* @__PURE__ */ m.jsxs(Tr, { children: [
            /* @__PURE__ */ m.jsx(_r, { asChild: !0, children: /* @__PURE__ */ m.jsxs("div", { className: "flex items-center space-x-1 text-sm text-muted-foreground cursor-help", children: [
              /* @__PURE__ */ m.jsx("span", { className: "text-sm font-medium", children: "Score" }),
              /* @__PURE__ */ m.jsx(Ro, { className: "w-3 h-3" })
            ] }) }),
            /* @__PURE__ */ m.jsx(Zn, { className: "w-80", children: /* @__PURE__ */ m.jsx("div", { className: "space-y-4", children: /* @__PURE__ */ m.jsxs("p", { className: "text-sm", children: [
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
          const x = f(h), y = r.includes(h), T = e.dealBreakers[h];
          return /* @__PURE__ */ m.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ m.jsxs("div", { className: "flex items-center space-x-4", children: [
              /* @__PURE__ */ m.jsxs("div", { className: "w-48 flex items-center space-x-2", children: [
                x && /* @__PURE__ */ m.jsx(x, { className: "w-5 h-5" }),
                /* @__PURE__ */ m.jsx("span", { children: u(h) }),
                T && /* @__PURE__ */ m.jsx(Ec, { className: "w-4 h-4 text-red-500" })
              ] }),
              /* @__PURE__ */ m.jsxs("div", { className: "flex-1 flex items-center space-x-4", children: [
                /* @__PURE__ */ m.jsx("div", { className: "flex-1", children: /* @__PURE__ */ m.jsx(_u, { value: p * 100 / 5 }) }),
                /* @__PURE__ */ m.jsx("div", { className: "w-12 text-center", children: /* @__PURE__ */ m.jsxs("span", { className: "text-sm font-medium", children: [
                  p,
                  "/5"
                ] }) }),
                /* @__PURE__ */ m.jsx(
                  St,
                  {
                    variant: "ghost",
                    size: "sm",
                    className: "p-0",
                    onClick: () => l(h),
                    children: /* @__PURE__ */ m.jsx(
                      va,
                      {
                        className: `h-4 w-4 transform transition-transform duration-200 ${y ? "rotate-180" : ""}`
                      }
                    )
                  }
                )
              ] })
            ] }),
            y && /* @__PURE__ */ m.jsxs("div", { className: "ml-12 pl-4 border-l border-slate-200", children: [
              T && /* @__PURE__ */ m.jsxs("div", { className: "inline-flex items-center space-x-2 py-2 text-red-600 bg-red-50 px-3 rounded-md mb-2", children: [
                /* @__PURE__ */ m.jsx(Ec, { className: "w-4 h-4 shrink-0" }),
                /* @__PURE__ */ m.jsx("span", { className: "text-sm font-medium", children: T })
              ] }),
              /* @__PURE__ */ m.jsx("div", { className: "space-y-2", children: [...e.qualificationDetails[h]].sort(
                (C, _) => _.completed === C.completed ? 0 : _.completed ? 1 : -1
              ).map((C, _) => /* @__PURE__ */ m.jsxs("div", { className: "flex items-center space-x-2", children: [
                C.completed ? /* @__PURE__ */ m.jsx(ou, { className: "h-4 w-4 text-green-500" }) : /* @__PURE__ */ m.jsx(Hm, { className: "h-4 w-4 text-muted-foreground" }),
                /* @__PURE__ */ m.jsx(
                  "span",
                  {
                    className: C.completed ? "text-slate-600" : "text-muted-foreground",
                    children: C.text
                  }
                )
              ] }, _)) })
            ] })
          ] }, v);
        })
      ] }) })
    ] }),
    /* @__PURE__ */ m.jsx(C0, { open: s, onOpenChange: c, children: /* @__PURE__ */ m.jsxs(cf, { className: "sm:max-w-md", children: [
      /* @__PURE__ */ m.jsx(uf, { children: /* @__PURE__ */ m.jsx(df, { children: "Qualification Score" }) }),
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
        /* @__PURE__ */ m.jsx(A0, {}),
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
      /* @__PURE__ */ m.jsxs(ff, { children: [
        /* @__PURE__ */ m.jsxs(St, { onClick: () => t == null ? void 0 : t("/deals/qualification-framework"), variant: "outline", children: [
          "Configure framework",
          /* @__PURE__ */ m.jsx($h, { className: "w-3 h-3 ml-1" })
        ] }),
        /* @__PURE__ */ m.jsx(St, { onClick: () => c(!1), children: "Close" })
      ] })
    ] }) })
  ] });
}, ru = S.forwardRef(
  ({ className: e, type: t, ...r }, o) => /* @__PURE__ */ m.jsx(
    "input",
    {
      type: t,
      className: Ge(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        e
      ),
      ref: o,
      ...r
    }
  )
);
ru.displayName = "Input";
var UD = "Label", R0 = S.forwardRef((e, t) => /* @__PURE__ */ m.jsx(
  $e.label,
  {
    ...e,
    ref: t,
    onMouseDown: (r) => {
      var s;
      r.target.closest("button, input, select, textarea") || ((s = e.onMouseDown) == null || s.call(e, r), !r.defaultPrevented && r.detail > 1 && r.preventDefault());
    }
  }
));
R0.displayName = UD;
var N0 = R0;
const HD = iu(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), _o = S.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ m.jsx(
  N0,
  {
    ref: r,
    className: Ge(HD(), e),
    ...t
  }
));
_o.displayName = N0.displayName;
const M0 = S.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ m.jsx(
  "textarea",
  {
    className: Ge(
      "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      e
    ),
    ref: r,
    ...t
  }
));
M0.displayName = "Textarea";
const zD = (e) => {
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
}, GD = (e) => {
  switch (e) {
    case "call":
      return /* @__PURE__ */ m.jsx(Um, { className: "w-3 h-3 text-slate-500" });
    case "email":
      return /* @__PURE__ */ m.jsx($m, { className: "w-3 h-3 text-slate-500" });
    case "to-do":
      return /* @__PURE__ */ m.jsx(Pc, { className: "w-3 h-3 text-slate-500" });
    default:
      return /* @__PURE__ */ m.jsx(Pc, { className: "w-3 h-3 text-slate-500" });
  }
};
function KD({ task: e, onAddToHubspot: t }) {
  return console.log(e), /* @__PURE__ */ m.jsxs(
    rf.div,
    {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.3 },
      className: "flex items-start p-4 bg-slate-100 rounded-lg mb-2 hover:bg-slate-200 transition-colors",
      children: [
        /* @__PURE__ */ m.jsx("div", { className: "flex items-start", children: /* @__PURE__ */ m.jsxs("div", { children: [
          /* @__PURE__ */ m.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
            /* @__PURE__ */ m.jsx("div", { children: GD(e.type) }),
            /* @__PURE__ */ m.jsx("span", { className: `text-xs ${zD(e.priority)}`, children: e.priority.charAt(0).toUpperCase() + e.priority.slice(1) }),
            /* @__PURE__ */ m.jsx("span", { className: "text-xs text-slate-500", children: e.category })
          ] }),
          /* @__PURE__ */ m.jsx("p", { className: "text-slate-900 leading-snug", children: e.title })
        ] }) }),
        /* @__PURE__ */ m.jsx("div", { className: "ml-auto", children: /* @__PURE__ */ m.jsx(
          St,
          {
            variant: "ghost",
            size: "sm",
            onClick: () => t(e.id),
            disabled: e.addedToHubspot,
            className: `text-slate-600 hover:bg-slate-300 hover:text-slate-900 transition-colors ${e.addedToHubspot ? "text-green-600" : ""}`,
            children: e.addedToHubspot ? /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
              /* @__PURE__ */ m.jsx(ou, { className: "w-4 h-4 mr-1" }),
              "Added to Hubspot"
            ] }) : "Add to Hubspot"
          }
        ) })
      ]
    }
  );
}
function YD({
  dialog: e,
  setDialog: t,
  onSubmit: r
}) {
  return /* @__PURE__ */ m.jsx(C0, { open: e.isOpen, onOpenChange: (o) => t({ ...e, isOpen: o }), children: /* @__PURE__ */ m.jsxs(cf, { className: "sm:max-w-[425px]", children: [
    /* @__PURE__ */ m.jsxs(uf, { children: [
      /* @__PURE__ */ m.jsx(df, { children: "Add Task to HubSpot" }),
      /* @__PURE__ */ m.jsx(_0, { children: "Configure the task details before adding it to HubSpot" })
    ] }),
    /* @__PURE__ */ m.jsxs("div", { className: "grid gap-4 py-4", children: [
      /* @__PURE__ */ m.jsxs("div", { className: "grid gap-2", children: [
        /* @__PURE__ */ m.jsx(_o, { htmlFor: "taskTitle", children: "Task Title" }),
        /* @__PURE__ */ m.jsx(
          ru,
          {
            id: "taskTitle",
            value: e.taskTitle,
            onChange: (o) => t({ ...e, taskTitle: o.target.value })
          }
        )
      ] }),
      /* @__PURE__ */ m.jsxs("div", { className: "grid gap-2", children: [
        /* @__PURE__ */ m.jsx(_o, { htmlFor: "taskType", children: "Task Type" }),
        /* @__PURE__ */ m.jsxs("div", { className: "grid grid-cols-3 gap-2", children: [
          /* @__PURE__ */ m.jsxs(
            St,
            {
              variant: e.taskType === "call" ? "default" : "outline",
              onClick: () => t({ ...e, taskType: "call" }),
              className: "w-full",
              children: [
                /* @__PURE__ */ m.jsx(Um, { className: "w-4 h-4 mr-2" }),
                "Call"
              ]
            }
          ),
          /* @__PURE__ */ m.jsxs(
            St,
            {
              variant: e.taskType === "email" ? "default" : "outline",
              onClick: () => t({ ...e, taskType: "email" }),
              className: "w-full",
              children: [
                /* @__PURE__ */ m.jsx($m, { className: "w-4 h-4 mr-2" }),
                "Email"
              ]
            }
          ),
          /* @__PURE__ */ m.jsxs(
            St,
            {
              variant: e.taskType === "to-do" ? "default" : "outline",
              onClick: () => t({ ...e, taskType: "to-do" }),
              className: "w-full",
              children: [
                /* @__PURE__ */ m.jsx(Pc, { className: "w-4 h-4 mr-2" }),
                "To-Do"
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ m.jsxs("div", { className: "grid gap-2", children: [
        /* @__PURE__ */ m.jsx(_o, { htmlFor: "dueDate", children: "Due Date" }),
        /* @__PURE__ */ m.jsx(
          ru,
          {
            id: "dueDate",
            type: "date",
            value: e.dueDate,
            onChange: (o) => t({ ...e, dueDate: o.target.value })
          }
        )
      ] }),
      /* @__PURE__ */ m.jsxs("div", { className: "grid gap-2", children: [
        /* @__PURE__ */ m.jsx(_o, { htmlFor: "notes", children: "Notes" }),
        /* @__PURE__ */ m.jsx(
          M0,
          {
            id: "notes",
            value: e.notes,
            onChange: (o) => t({ ...e, notes: o.target.value }),
            placeholder: "Add any additional notes..."
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ m.jsxs(ff, { className: "sm:justify-between", children: [
      /* @__PURE__ */ m.jsx(St, { variant: "outline", onClick: () => t({ ...e, isOpen: !1 }), children: "Cancel" }),
      /* @__PURE__ */ m.jsx(St, { onClick: r, children: "Add to HubSpot" })
    ] })
  ] }) });
}
function dI({ deal: e, onHubspotTaskAdd: t }) {
  const [r, o] = Sr(e.recommendedActions), [s, c] = Sr({
    dealId: e.dealId,
    taskId: "",
    taskTitle: "",
    taskType: "to-do",
    dueDate: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
    notes: "",
    isOpen: !1
  });
  Sr(!1);
  const l = (h) => {
    const p = r.find((v) => v.id === h);
    p && c({
      dealId: e.dealId,
      taskId: h,
      taskTitle: p.title,
      taskType: p.type,
      dueDate: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
      notes: "",
      isOpen: !0
    });
  }, u = () => {
    s.taskId && (o(
      (h) => h.map((p) => p.id === s.taskId ? { ...p, addedToHubspot: !0 } : p)
    ), t == null || t({ ...s, isOpen: !1 }), c((h) => ({ ...h, isOpen: !1 })));
  }, f = () => {
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
  return /* @__PURE__ */ m.jsxs(oi, { className: "shadow-lg w-full max-w-3xl mx-auto my-4 bg-slate-50", children: [
    /* @__PURE__ */ m.jsxs(si, { children: [
      /* @__PURE__ */ m.jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ m.jsx(ai, { children: "Action Plan" }) }),
      /* @__PURE__ */ m.jsx("p", { className: "text-sm text-muted-foreground", children: "Recommended actions to drive the deal forward" })
    ] }),
    /* @__PURE__ */ m.jsxs(
      rf.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.5 },
        className: "p-6",
        children: [
          r.map((h) => /* @__PURE__ */ m.jsx(KD, { task: h, onAddToHubspot: l }, h.id)),
          /* @__PURE__ */ m.jsxs(
            St,
            {
              variant: "ghost",
              onClick: f,
              className: "mt-2 text-slate-500 hover:text-slate-900",
              size: "sm",
              children: [
                /* @__PURE__ */ m.jsx(i_, { className: "w-4 h-4 mr-2" }),
                "Add task"
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ m.jsx(YD, { dialog: s, setDialog: c, onSubmit: u })
  ] });
}
export {
  dI as ActionPlan,
  ZD as Counter,
  nI as DealHeader,
  iI as DealProgress,
  fI as DealQualification,
  lI as DealRisk,
  oI as DealStakeholders,
  JD as Toastie2
};
//# sourceMappingURL=index.js.map
