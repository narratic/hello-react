import * as C from "react";
import z, { forwardRef as pa, createElement as Xs, useState as Po, useEffect as Io, useLayoutEffect as Sm, createContext as Fi, useContext as Ht, useId as _T, useCallback as Cm, Component as PT, useRef as Us, useInsertionEffect as ET, useMemo as Lo, Fragment as Tm } from "react";
import * as ma from "react-dom";
import _m from "react-dom";
var ho = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function AT(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Cc = { exports: {} }, po = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Eh;
function RT() {
  if (Eh)
    return po;
  Eh = 1;
  var e = z, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, s = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, c = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(u, f, h) {
    var p, v = {}, x = null, g = null;
    h !== void 0 && (x = "" + h), f.key !== void 0 && (x = "" + f.key), f.ref !== void 0 && (g = f.ref);
    for (p in f)
      o.call(f, p) && !c.hasOwnProperty(p) && (v[p] = f[p]);
    if (u && u.defaultProps)
      for (p in f = u.defaultProps, f)
        v[p] === void 0 && (v[p] = f[p]);
    return { $$typeof: t, type: u, key: x, ref: g, props: v, _owner: s.current };
  }
  return po.Fragment = r, po.jsx = l, po.jsxs = l, po;
}
var mo = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ah;
function NT() {
  return Ah || (Ah = 1, process.env.NODE_ENV !== "production" && function() {
    var e = z, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), u = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), v = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), T = Symbol.iterator, S = "@@iterator";
    function _(R) {
      if (R === null || typeof R != "object")
        return null;
      var W = T && R[T] || R[S];
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
        var fe = E.ReactDebugCurrentFrame, Le = fe.getStackAddendum();
        Le !== "" && (W += "%s", Y = Y.concat([Le]));
        var $e = Y.map(function(Me) {
          return String(Me);
        });
        $e.unshift("Warning: " + W), Function.prototype.apply.call(console[R], console, $e);
      }
    }
    var I = !1, j = !1, U = !1, $ = !1, H = !1, te;
    te = Symbol.for("react.module.reference");
    function re(R) {
      return !!(typeof R == "string" || typeof R == "function" || R === o || R === c || H || R === s || R === h || R === p || $ || R === g || I || j || U || typeof R == "object" && R !== null && (R.$$typeof === x || R.$$typeof === v || R.$$typeof === l || R.$$typeof === u || R.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      R.$$typeof === te || R.getModuleId !== void 0));
    }
    function de(R, W, Y) {
      var fe = R.displayName;
      if (fe)
        return fe;
      var Le = W.displayName || W.name || "";
      return Le !== "" ? Y + "(" + Le + ")" : Y;
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
            var Le = R, $e = Le._payload, Me = Le._init;
            try {
              return se(Me($e));
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
          } catch (Le) {
            var fe = Le.stack.trim().match(/\n( *(at )?)/);
            X = fe && fe[1] || "";
          }
        return `
` + X + R;
      }
    }
    var je = !1, Se;
    {
      var ve = typeof WeakMap == "function" ? WeakMap : Map;
      Se = new ve();
    }
    function Pe(R, W) {
      if (!R || je)
        return "";
      {
        var Y = Se.get(R);
        if (Y !== void 0)
          return Y;
      }
      var fe;
      je = !0;
      var Le = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var $e;
      $e = Je.current, Je.current = null, Re();
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
            } catch (_t) {
              fe = _t;
            }
            Reflect.construct(R, [], Me);
          } else {
            try {
              Me.call();
            } catch (_t) {
              fe = _t;
            }
            R.call(Me.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (_t) {
            fe = _t;
          }
          R();
        }
      } catch (_t) {
        if (_t && fe && typeof _t.stack == "string") {
          for (var Ee = _t.stack.split(`
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
        je = !1, Je.current = $e, Fe(), Error.prepareStackTrace = Le;
      }
      var ar = R ? R.displayName || R.name : "", rn = ar ? we(ar) : "";
      return typeof R == "function" && Se.set(R, rn), rn;
    }
    function st(R, W, Y) {
      return Pe(R, !1);
    }
    function Ke(R) {
      var W = R.prototype;
      return !!(W && W.isReactComponent);
    }
    function ft(R, W, Y) {
      if (R == null)
        return "";
      if (typeof R == "function")
        return Pe(R, Ke(R));
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
            return ft(R.type, W, Y);
          case x: {
            var fe = R, Le = fe._payload, $e = fe._init;
            try {
              return ft($e(Le), W, Y);
            } catch {
            }
          }
        }
      return "";
    }
    var Nt = Object.prototype.hasOwnProperty, at = {}, nn = E.ReactDebugCurrentFrame;
    function kt(R) {
      if (R) {
        var W = R._owner, Y = ft(R.type, R._source, W ? W.type : null);
        nn.setExtraStackFrame(Y);
      } else
        nn.setExtraStackFrame(null);
    }
    function Mt(R, W, Y, fe, Le) {
      {
        var $e = Function.call.bind(Nt);
        for (var Me in R)
          if ($e(R, Me)) {
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
            Ee && !(Ee instanceof Error) && (kt(Le), A("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", fe || "React class", Y, Me, typeof Ee), kt(null)), Ee instanceof Error && !(Ee.message in at) && (at[Ee.message] = !0, kt(Le), A("Failed %s type: %s", Y, Ee.message), kt(null));
          }
      }
    }
    var Ot = Array.isArray;
    function mn(R) {
      return Ot(R);
    }
    function dt(R) {
      {
        var W = typeof Symbol == "function" && Symbol.toStringTag, Y = W && R[Symbol.toStringTag] || R.constructor.name || "Object";
        return Y;
      }
    }
    function Tn(R) {
      try {
        return _n(R), !1;
      } catch {
        return !0;
      }
    }
    function _n(R) {
      return "" + R;
    }
    function oi(R) {
      if (Tn(R))
        return A("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", dt(R)), _n(R);
    }
    var Ct = E.ReactCurrentOwner, Pn = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, En, zt, An;
    An = {};
    function Rn(R) {
      if (Nt.call(R, "ref")) {
        var W = Object.getOwnPropertyDescriptor(R, "ref").get;
        if (W && W.isReactWarning)
          return !1;
      }
      return R.ref !== void 0;
    }
    function Lr(R) {
      if (Nt.call(R, "key")) {
        var W = Object.getOwnPropertyDescriptor(R, "key").get;
        if (W && W.isReactWarning)
          return !1;
      }
      return R.key !== void 0;
    }
    function jr(R, W) {
      if (typeof R.ref == "string" && Ct.current && W && Ct.current.stateNode !== W) {
        var Y = se(Ct.current.type);
        An[Y] || (A('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', se(Ct.current.type), R.ref), An[Y] = !0);
      }
    }
    function ir(R, W) {
      {
        var Y = function() {
          En || (En = !0, A("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", W));
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
          zt || (zt = !0, A("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", W));
        };
        Y.isReactWarning = !0, Object.defineProperty(R, "ref", {
          get: Y,
          configurable: !0
        });
      }
    }
    var kr = function(R, W, Y, fe, Le, $e, Me) {
      var Ee = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: R,
        key: W,
        ref: Y,
        props: Me,
        // Record the component responsible for creating this element.
        _owner: $e
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
        value: Le
      }), Object.freeze && (Object.freeze(Ee.props), Object.freeze(Ee)), Ee;
    };
    function Vr(R, W, Y, fe, Le) {
      {
        var $e, Me = {}, Ee = null, vt = null;
        Y !== void 0 && (oi(Y), Ee = "" + Y), Lr(W) && (oi(W.key), Ee = "" + W.key), Rn(W) && (vt = W.ref, jr(W, Le));
        for ($e in W)
          Nt.call(W, $e) && !Pn.hasOwnProperty($e) && (Me[$e] = W[$e]);
        if (R && R.defaultProps) {
          var et = R.defaultProps;
          for ($e in et)
            Me[$e] === void 0 && (Me[$e] = et[$e]);
        }
        if (Ee || vt) {
          var it = typeof R == "function" ? R.displayName || R.name || "Unknown" : R;
          Ee && ir(Me, it), vt && or(Me, it);
        }
        return kr(R, Ee, vt, Le, fe, Ct.current, Me);
      }
    }
    var Vt = E.ReactCurrentOwner, si = E.ReactDebugCurrentFrame;
    function oe(R) {
      if (R) {
        var W = R._owner, Y = ft(R.type, R._source, W ? W.type : null);
        si.setExtraStackFrame(Y);
      } else
        si.setExtraStackFrame(null);
    }
    var De;
    De = !1;
    function Be(R) {
      return typeof R == "object" && R !== null && R.$$typeof === t;
    }
    function Tt() {
      {
        if (Vt.current) {
          var R = se(Vt.current.type);
          if (R)
            return `

Check the render method of \`` + R + "`.";
        }
        return "";
      }
    }
    function Ft(R) {
      return "";
    }
    var sr = {};
    function ai(R) {
      {
        var W = Tt();
        if (!W) {
          var Y = typeof R == "string" ? R : R.displayName || R.name;
          Y && (W = `

Check the top-level render call using <` + Y + ">.");
        }
        return W;
      }
    }
    function Uo(R, W) {
      {
        if (!R._store || R._store.validated || R.key != null)
          return;
        R._store.validated = !0;
        var Y = ai(W);
        if (sr[Y])
          return;
        sr[Y] = !0;
        var fe = "";
        R && R._owner && R._owner !== Vt.current && (fe = " It was passed a child from " + se(R._owner.type) + "."), oe(R), A('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', Y, fe), oe(null);
      }
    }
    function Ho(R, W) {
      {
        if (typeof R != "object")
          return;
        if (mn(R))
          for (var Y = 0; Y < R.length; Y++) {
            var fe = R[Y];
            Be(fe) && Uo(fe, W);
          }
        else if (Be(R))
          R._store && (R._store.validated = !0);
        else if (R) {
          var Le = _(R);
          if (typeof Le == "function" && Le !== R.entries)
            for (var $e = Le.call(R), Me; !(Me = $e.next()).done; )
              Be(Me.value) && Uo(Me.value, W);
        }
      }
    }
    function ka(R) {
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
          Mt(Y, R.props, "prop", fe, R);
        } else if (W.PropTypes !== void 0 && !De) {
          De = !0;
          var Le = se(W);
          A("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Le || "Unknown");
        }
        typeof W.getDefaultProps == "function" && !W.getDefaultProps.isReactClassApproved && A("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function qi(R) {
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
    var zo = {};
    function li(R, W, Y, fe, Le, $e) {
      {
        var Me = re(R);
        if (!Me) {
          var Ee = "";
          (R === void 0 || typeof R == "object" && R !== null && Object.keys(R).length === 0) && (Ee += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var vt = Ft();
          vt ? Ee += vt : Ee += Tt();
          var et;
          R === null ? et = "null" : mn(R) ? et = "array" : R !== void 0 && R.$$typeof === t ? (et = "<" + (se(R.type) || "Unknown") + " />", Ee = " Did you accidentally export a JSX literal instead of a component?") : et = typeof R, A("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", et, Ee);
        }
        var it = Vr(R, W, Y, Le, $e);
        if (it == null)
          return it;
        if (Me) {
          var yt = W.children;
          if (yt !== void 0)
            if (fe)
              if (mn(yt)) {
                for (var ar = 0; ar < yt.length; ar++)
                  Ho(yt[ar], R);
                Object.freeze && Object.freeze(yt);
              } else
                A("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ho(yt, R);
        }
        if (Nt.call(W, "key")) {
          var rn = se(R), _t = Object.keys(W).filter(function(Go) {
            return Go !== "key";
          }), Xi = _t.length > 0 ? "{key: someKey, " + _t.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!zo[rn + Xi]) {
            var $a = _t.length > 0 ? "{" + _t.join(": ..., ") + ": ...}" : "{}";
            A(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Xi, rn, $a, rn), zo[rn + Xi] = !0;
          }
        }
        return R === o ? qi(it) : ka(it), it;
      }
    }
    function Va(R, W, Y) {
      return li(R, W, Y, !0);
    }
    function Fa(R, W, Y) {
      return li(R, W, Y, !1);
    }
    var Ba = Fa, Wa = Va;
    mo.Fragment = o, mo.jsx = Ba, mo.jsxs = Wa;
  }()), mo;
}
process.env.NODE_ENV === "production" ? Cc.exports = RT() : Cc.exports = NT();
var y = Cc.exports, Zs = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
Zs.exports;
(function(e, t) {
  (function() {
    var r, o = "4.17.21", s = 200, c = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", l = "Expected a function", u = "Invalid `variable` option passed into `_.template`", f = "__lodash_hash_undefined__", h = 500, p = "__lodash_placeholder__", v = 1, x = 2, g = 4, T = 1, S = 2, _ = 1, E = 2, A = 4, M = 8, I = 16, j = 32, U = 64, $ = 128, H = 256, te = 512, re = 30, de = "...", J = 800, se = 16, ne = 1, Te = 2, ie = 3, Z = 1 / 0, q = 9007199254740991, G = 17976931348623157e292, pe = NaN, Ae = 4294967295, _e = Ae - 1, ge = Ae >>> 1, Re = [
      ["ary", $],
      ["bind", _],
      ["bindKey", E],
      ["curry", M],
      ["curryRight", I],
      ["flip", te],
      ["partial", j],
      ["partialRight", U],
      ["rearg", H]
    ], Fe = "[object Arguments]", Je = "[object Array]", X = "[object AsyncFunction]", we = "[object Boolean]", je = "[object Date]", Se = "[object DOMException]", ve = "[object Error]", Pe = "[object Function]", st = "[object GeneratorFunction]", Ke = "[object Map]", ft = "[object Number]", Nt = "[object Null]", at = "[object Object]", nn = "[object Promise]", kt = "[object Proxy]", Mt = "[object RegExp]", Ot = "[object Set]", mn = "[object String]", dt = "[object Symbol]", Tn = "[object Undefined]", _n = "[object WeakMap]", oi = "[object WeakSet]", Ct = "[object ArrayBuffer]", Pn = "[object DataView]", En = "[object Float32Array]", zt = "[object Float64Array]", An = "[object Int8Array]", Rn = "[object Int16Array]", Lr = "[object Int32Array]", jr = "[object Uint8Array]", ir = "[object Uint8ClampedArray]", or = "[object Uint16Array]", kr = "[object Uint32Array]", Vr = /\b__p \+= '';/g, Vt = /\b(__p \+=) '' \+/g, si = /(__e\(.*?\)|\b__t\)) \+\n'';/g, oe = /&(?:amp|lt|gt|quot|#39);/g, De = /[&<>"']/g, Be = RegExp(oe.source), Tt = RegExp(De.source), Ft = /<%-([\s\S]+?)%>/g, sr = /<%([\s\S]+?)%>/g, ai = /<%=([\s\S]+?)%>/g, Uo = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Ho = /^\w*$/, ka = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, qi = /[\\^$.*+?()[\]{}|]/g, zo = RegExp(qi.source), li = /^\s+/, Va = /\s/, Fa = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Ba = /\{\n\/\* \[wrapped with (.+)\] \*/, Wa = /,? & /, R = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, W = /[()=,{}\[\]\/\s]/, Y = /\\(\\)?/g, fe = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Le = /\w*$/, $e = /^[-+]0x[0-9a-f]+$/i, Me = /^0b[01]+$/i, Ee = /^\[object .+?Constructor\]$/, vt = /^0o[0-7]+$/i, et = /^(?:0|[1-9]\d*)$/, it = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, yt = /($^)/, ar = /['\n\r\u2028\u2029\\]/g, rn = "\\ud800-\\udfff", _t = "\\u0300-\\u036f", Xi = "\\ufe20-\\ufe2f", $a = "\\u20d0-\\u20ff", Go = _t + Xi + $a, nf = "\\u2700-\\u27bf", rf = "a-z\\xdf-\\xf6\\xf8-\\xff", b0 = "\\xac\\xb1\\xd7\\xf7", S0 = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", C0 = "\\u2000-\\u206f", T0 = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", of = "A-Z\\xc0-\\xd6\\xd8-\\xde", sf = "\\ufe0e\\ufe0f", af = b0 + S0 + C0 + T0, Ua = "['’]", _0 = "[" + rn + "]", lf = "[" + af + "]", Ko = "[" + Go + "]", cf = "\\d+", P0 = "[" + nf + "]", uf = "[" + rf + "]", ff = "[^" + rn + af + cf + nf + rf + of + "]", Ha = "\\ud83c[\\udffb-\\udfff]", E0 = "(?:" + Ko + "|" + Ha + ")", df = "[^" + rn + "]", za = "(?:\\ud83c[\\udde6-\\uddff]){2}", Ga = "[\\ud800-\\udbff][\\udc00-\\udfff]", ci = "[" + of + "]", hf = "\\u200d", pf = "(?:" + uf + "|" + ff + ")", A0 = "(?:" + ci + "|" + ff + ")", mf = "(?:" + Ua + "(?:d|ll|m|re|s|t|ve))?", gf = "(?:" + Ua + "(?:D|LL|M|RE|S|T|VE))?", vf = E0 + "?", yf = "[" + sf + "]?", R0 = "(?:" + hf + "(?:" + [df, za, Ga].join("|") + ")" + yf + vf + ")*", N0 = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", M0 = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", xf = yf + vf + R0, O0 = "(?:" + [P0, za, Ga].join("|") + ")" + xf, D0 = "(?:" + [df + Ko + "?", Ko, za, Ga, _0].join("|") + ")", I0 = RegExp(Ua, "g"), L0 = RegExp(Ko, "g"), Ka = RegExp(Ha + "(?=" + Ha + ")|" + D0 + xf, "g"), j0 = RegExp([
      ci + "?" + uf + "+" + mf + "(?=" + [lf, ci, "$"].join("|") + ")",
      A0 + "+" + gf + "(?=" + [lf, ci + pf, "$"].join("|") + ")",
      ci + "?" + pf + "+" + mf,
      ci + "+" + gf,
      M0,
      N0,
      cf,
      O0
    ].join("|"), "g"), k0 = RegExp("[" + hf + rn + Go + sf + "]"), V0 = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, F0 = [
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
    ], B0 = -1, qe = {};
    qe[En] = qe[zt] = qe[An] = qe[Rn] = qe[Lr] = qe[jr] = qe[ir] = qe[or] = qe[kr] = !0, qe[Fe] = qe[Je] = qe[Ct] = qe[we] = qe[Pn] = qe[je] = qe[ve] = qe[Pe] = qe[Ke] = qe[ft] = qe[at] = qe[Mt] = qe[Ot] = qe[mn] = qe[_n] = !1;
    var Ye = {};
    Ye[Fe] = Ye[Je] = Ye[Ct] = Ye[Pn] = Ye[we] = Ye[je] = Ye[En] = Ye[zt] = Ye[An] = Ye[Rn] = Ye[Lr] = Ye[Ke] = Ye[ft] = Ye[at] = Ye[Mt] = Ye[Ot] = Ye[mn] = Ye[dt] = Ye[jr] = Ye[ir] = Ye[or] = Ye[kr] = !0, Ye[ve] = Ye[Pe] = Ye[_n] = !1;
    var W0 = {
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
    }, $0 = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, U0 = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, H0 = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, z0 = parseFloat, G0 = parseInt, wf = typeof ho == "object" && ho && ho.Object === Object && ho, K0 = typeof self == "object" && self && self.Object === Object && self, xt = wf || K0 || Function("return this")(), Ya = t && !t.nodeType && t, Fr = Ya && !0 && e && !e.nodeType && e, bf = Fr && Fr.exports === Ya, qa = bf && wf.process, on = function() {
      try {
        var O = Fr && Fr.require && Fr.require("util").types;
        return O || qa && qa.binding && qa.binding("util");
      } catch {
      }
    }(), Sf = on && on.isArrayBuffer, Cf = on && on.isDate, Tf = on && on.isMap, _f = on && on.isRegExp, Pf = on && on.isSet, Ef = on && on.isTypedArray;
    function Gt(O, k, L) {
      switch (L.length) {
        case 0:
          return O.call(k);
        case 1:
          return O.call(k, L[0]);
        case 2:
          return O.call(k, L[0], L[1]);
        case 3:
          return O.call(k, L[0], L[1], L[2]);
      }
      return O.apply(k, L);
    }
    function Y0(O, k, L, Q) {
      for (var he = -1, ke = O == null ? 0 : O.length; ++he < ke; ) {
        var ht = O[he];
        k(Q, ht, L(ht), O);
      }
      return Q;
    }
    function sn(O, k) {
      for (var L = -1, Q = O == null ? 0 : O.length; ++L < Q && k(O[L], L, O) !== !1; )
        ;
      return O;
    }
    function q0(O, k) {
      for (var L = O == null ? 0 : O.length; L-- && k(O[L], L, O) !== !1; )
        ;
      return O;
    }
    function Af(O, k) {
      for (var L = -1, Q = O == null ? 0 : O.length; ++L < Q; )
        if (!k(O[L], L, O))
          return !1;
      return !0;
    }
    function lr(O, k) {
      for (var L = -1, Q = O == null ? 0 : O.length, he = 0, ke = []; ++L < Q; ) {
        var ht = O[L];
        k(ht, L, O) && (ke[he++] = ht);
      }
      return ke;
    }
    function Yo(O, k) {
      var L = O == null ? 0 : O.length;
      return !!L && ui(O, k, 0) > -1;
    }
    function Xa(O, k, L) {
      for (var Q = -1, he = O == null ? 0 : O.length; ++Q < he; )
        if (L(k, O[Q]))
          return !0;
      return !1;
    }
    function Qe(O, k) {
      for (var L = -1, Q = O == null ? 0 : O.length, he = Array(Q); ++L < Q; )
        he[L] = k(O[L], L, O);
      return he;
    }
    function cr(O, k) {
      for (var L = -1, Q = k.length, he = O.length; ++L < Q; )
        O[he + L] = k[L];
      return O;
    }
    function Za(O, k, L, Q) {
      var he = -1, ke = O == null ? 0 : O.length;
      for (Q && ke && (L = O[++he]); ++he < ke; )
        L = k(L, O[he], he, O);
      return L;
    }
    function X0(O, k, L, Q) {
      var he = O == null ? 0 : O.length;
      for (Q && he && (L = O[--he]); he--; )
        L = k(L, O[he], he, O);
      return L;
    }
    function Ja(O, k) {
      for (var L = -1, Q = O == null ? 0 : O.length; ++L < Q; )
        if (k(O[L], L, O))
          return !0;
      return !1;
    }
    var Z0 = Qa("length");
    function J0(O) {
      return O.split("");
    }
    function Q0(O) {
      return O.match(R) || [];
    }
    function Rf(O, k, L) {
      var Q;
      return L(O, function(he, ke, ht) {
        if (k(he, ke, ht))
          return Q = ke, !1;
      }), Q;
    }
    function qo(O, k, L, Q) {
      for (var he = O.length, ke = L + (Q ? 1 : -1); Q ? ke-- : ++ke < he; )
        if (k(O[ke], ke, O))
          return ke;
      return -1;
    }
    function ui(O, k, L) {
      return k === k ? fx(O, k, L) : qo(O, Nf, L);
    }
    function ex(O, k, L, Q) {
      for (var he = L - 1, ke = O.length; ++he < ke; )
        if (Q(O[he], k))
          return he;
      return -1;
    }
    function Nf(O) {
      return O !== O;
    }
    function Mf(O, k) {
      var L = O == null ? 0 : O.length;
      return L ? tl(O, k) / L : pe;
    }
    function Qa(O) {
      return function(k) {
        return k == null ? r : k[O];
      };
    }
    function el(O) {
      return function(k) {
        return O == null ? r : O[k];
      };
    }
    function Of(O, k, L, Q, he) {
      return he(O, function(ke, ht, Ge) {
        L = Q ? (Q = !1, ke) : k(L, ke, ht, Ge);
      }), L;
    }
    function tx(O, k) {
      var L = O.length;
      for (O.sort(k); L--; )
        O[L] = O[L].value;
      return O;
    }
    function tl(O, k) {
      for (var L, Q = -1, he = O.length; ++Q < he; ) {
        var ke = k(O[Q]);
        ke !== r && (L = L === r ? ke : L + ke);
      }
      return L;
    }
    function nl(O, k) {
      for (var L = -1, Q = Array(O); ++L < O; )
        Q[L] = k(L);
      return Q;
    }
    function nx(O, k) {
      return Qe(k, function(L) {
        return [L, O[L]];
      });
    }
    function Df(O) {
      return O && O.slice(0, kf(O) + 1).replace(li, "");
    }
    function Kt(O) {
      return function(k) {
        return O(k);
      };
    }
    function rl(O, k) {
      return Qe(k, function(L) {
        return O[L];
      });
    }
    function Zi(O, k) {
      return O.has(k);
    }
    function If(O, k) {
      for (var L = -1, Q = O.length; ++L < Q && ui(k, O[L], 0) > -1; )
        ;
      return L;
    }
    function Lf(O, k) {
      for (var L = O.length; L-- && ui(k, O[L], 0) > -1; )
        ;
      return L;
    }
    function rx(O, k) {
      for (var L = O.length, Q = 0; L--; )
        O[L] === k && ++Q;
      return Q;
    }
    var ix = el(W0), ox = el($0);
    function sx(O) {
      return "\\" + H0[O];
    }
    function ax(O, k) {
      return O == null ? r : O[k];
    }
    function fi(O) {
      return k0.test(O);
    }
    function lx(O) {
      return V0.test(O);
    }
    function cx(O) {
      for (var k, L = []; !(k = O.next()).done; )
        L.push(k.value);
      return L;
    }
    function il(O) {
      var k = -1, L = Array(O.size);
      return O.forEach(function(Q, he) {
        L[++k] = [he, Q];
      }), L;
    }
    function jf(O, k) {
      return function(L) {
        return O(k(L));
      };
    }
    function ur(O, k) {
      for (var L = -1, Q = O.length, he = 0, ke = []; ++L < Q; ) {
        var ht = O[L];
        (ht === k || ht === p) && (O[L] = p, ke[he++] = L);
      }
      return ke;
    }
    function Xo(O) {
      var k = -1, L = Array(O.size);
      return O.forEach(function(Q) {
        L[++k] = Q;
      }), L;
    }
    function ux(O) {
      var k = -1, L = Array(O.size);
      return O.forEach(function(Q) {
        L[++k] = [Q, Q];
      }), L;
    }
    function fx(O, k, L) {
      for (var Q = L - 1, he = O.length; ++Q < he; )
        if (O[Q] === k)
          return Q;
      return -1;
    }
    function dx(O, k, L) {
      for (var Q = L + 1; Q--; )
        if (O[Q] === k)
          return Q;
      return Q;
    }
    function di(O) {
      return fi(O) ? px(O) : Z0(O);
    }
    function gn(O) {
      return fi(O) ? mx(O) : J0(O);
    }
    function kf(O) {
      for (var k = O.length; k-- && Va.test(O.charAt(k)); )
        ;
      return k;
    }
    var hx = el(U0);
    function px(O) {
      for (var k = Ka.lastIndex = 0; Ka.test(O); )
        ++k;
      return k;
    }
    function mx(O) {
      return O.match(Ka) || [];
    }
    function gx(O) {
      return O.match(j0) || [];
    }
    var vx = function O(k) {
      k = k == null ? xt : hi.defaults(xt.Object(), k, hi.pick(xt, F0));
      var L = k.Array, Q = k.Date, he = k.Error, ke = k.Function, ht = k.Math, Ge = k.Object, ol = k.RegExp, yx = k.String, an = k.TypeError, Zo = L.prototype, xx = ke.prototype, pi = Ge.prototype, Jo = k["__core-js_shared__"], Qo = xx.toString, Ue = pi.hasOwnProperty, wx = 0, Vf = function() {
        var n = /[^.]+$/.exec(Jo && Jo.keys && Jo.keys.IE_PROTO || "");
        return n ? "Symbol(src)_1." + n : "";
      }(), es = pi.toString, bx = Qo.call(Ge), Sx = xt._, Cx = ol(
        "^" + Qo.call(Ue).replace(qi, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), ts = bf ? k.Buffer : r, fr = k.Symbol, ns = k.Uint8Array, Ff = ts ? ts.allocUnsafe : r, rs = jf(Ge.getPrototypeOf, Ge), Bf = Ge.create, Wf = pi.propertyIsEnumerable, is = Zo.splice, $f = fr ? fr.isConcatSpreadable : r, Ji = fr ? fr.iterator : r, Br = fr ? fr.toStringTag : r, os = function() {
        try {
          var n = zr(Ge, "defineProperty");
          return n({}, "", {}), n;
        } catch {
        }
      }(), Tx = k.clearTimeout !== xt.clearTimeout && k.clearTimeout, _x = Q && Q.now !== xt.Date.now && Q.now, Px = k.setTimeout !== xt.setTimeout && k.setTimeout, ss = ht.ceil, as = ht.floor, sl = Ge.getOwnPropertySymbols, Ex = ts ? ts.isBuffer : r, Uf = k.isFinite, Ax = Zo.join, Rx = jf(Ge.keys, Ge), pt = ht.max, Pt = ht.min, Nx = Q.now, Mx = k.parseInt, Hf = ht.random, Ox = Zo.reverse, al = zr(k, "DataView"), Qi = zr(k, "Map"), ll = zr(k, "Promise"), mi = zr(k, "Set"), eo = zr(k, "WeakMap"), to = zr(Ge, "create"), ls = eo && new eo(), gi = {}, Dx = Gr(al), Ix = Gr(Qi), Lx = Gr(ll), jx = Gr(mi), kx = Gr(eo), cs = fr ? fr.prototype : r, no = cs ? cs.valueOf : r, zf = cs ? cs.toString : r;
      function w(n) {
        if (ot(n) && !me(n) && !(n instanceof Oe)) {
          if (n instanceof ln)
            return n;
          if (Ue.call(n, "__wrapped__"))
            return Gd(n);
        }
        return new ln(n);
      }
      var vi = /* @__PURE__ */ function() {
        function n() {
        }
        return function(i) {
          if (!tt(i))
            return {};
          if (Bf)
            return Bf(i);
          n.prototype = i;
          var a = new n();
          return n.prototype = r, a;
        };
      }();
      function us() {
      }
      function ln(n, i) {
        this.__wrapped__ = n, this.__actions__ = [], this.__chain__ = !!i, this.__index__ = 0, this.__values__ = r;
      }
      w.templateSettings = {
        /**
         * Used to detect `data` property values to be HTML-escaped.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        escape: Ft,
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
        interpolate: ai,
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
      }, w.prototype = us.prototype, w.prototype.constructor = w, ln.prototype = vi(us.prototype), ln.prototype.constructor = ln;
      function Oe(n) {
        this.__wrapped__ = n, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Ae, this.__views__ = [];
      }
      function Vx() {
        var n = new Oe(this.__wrapped__);
        return n.__actions__ = Bt(this.__actions__), n.__dir__ = this.__dir__, n.__filtered__ = this.__filtered__, n.__iteratees__ = Bt(this.__iteratees__), n.__takeCount__ = this.__takeCount__, n.__views__ = Bt(this.__views__), n;
      }
      function Fx() {
        if (this.__filtered__) {
          var n = new Oe(this);
          n.__dir__ = -1, n.__filtered__ = !0;
        } else
          n = this.clone(), n.__dir__ *= -1;
        return n;
      }
      function Bx() {
        var n = this.__wrapped__.value(), i = this.__dir__, a = me(n), d = i < 0, m = a ? n.length : 0, b = Jw(0, m, this.__views__), P = b.start, N = b.end, D = N - P, V = d ? N : P - 1, F = this.__iteratees__, B = F.length, K = 0, ee = Pt(D, this.__takeCount__);
        if (!a || !d && m == D && ee == D)
          return md(n, this.__actions__);
        var le = [];
        e:
          for (; D-- && K < ee; ) {
            V += i;
            for (var be = -1, ce = n[V]; ++be < B; ) {
              var Ne = F[be], Ie = Ne.iteratee, Xt = Ne.type, Lt = Ie(ce);
              if (Xt == Te)
                ce = Lt;
              else if (!Lt) {
                if (Xt == ne)
                  continue e;
                break e;
              }
            }
            le[K++] = ce;
          }
        return le;
      }
      Oe.prototype = vi(us.prototype), Oe.prototype.constructor = Oe;
      function Wr(n) {
        var i = -1, a = n == null ? 0 : n.length;
        for (this.clear(); ++i < a; ) {
          var d = n[i];
          this.set(d[0], d[1]);
        }
      }
      function Wx() {
        this.__data__ = to ? to(null) : {}, this.size = 0;
      }
      function $x(n) {
        var i = this.has(n) && delete this.__data__[n];
        return this.size -= i ? 1 : 0, i;
      }
      function Ux(n) {
        var i = this.__data__;
        if (to) {
          var a = i[n];
          return a === f ? r : a;
        }
        return Ue.call(i, n) ? i[n] : r;
      }
      function Hx(n) {
        var i = this.__data__;
        return to ? i[n] !== r : Ue.call(i, n);
      }
      function zx(n, i) {
        var a = this.__data__;
        return this.size += this.has(n) ? 0 : 1, a[n] = to && i === r ? f : i, this;
      }
      Wr.prototype.clear = Wx, Wr.prototype.delete = $x, Wr.prototype.get = Ux, Wr.prototype.has = Hx, Wr.prototype.set = zx;
      function Bn(n) {
        var i = -1, a = n == null ? 0 : n.length;
        for (this.clear(); ++i < a; ) {
          var d = n[i];
          this.set(d[0], d[1]);
        }
      }
      function Gx() {
        this.__data__ = [], this.size = 0;
      }
      function Kx(n) {
        var i = this.__data__, a = fs(i, n);
        if (a < 0)
          return !1;
        var d = i.length - 1;
        return a == d ? i.pop() : is.call(i, a, 1), --this.size, !0;
      }
      function Yx(n) {
        var i = this.__data__, a = fs(i, n);
        return a < 0 ? r : i[a][1];
      }
      function qx(n) {
        return fs(this.__data__, n) > -1;
      }
      function Xx(n, i) {
        var a = this.__data__, d = fs(a, n);
        return d < 0 ? (++this.size, a.push([n, i])) : a[d][1] = i, this;
      }
      Bn.prototype.clear = Gx, Bn.prototype.delete = Kx, Bn.prototype.get = Yx, Bn.prototype.has = qx, Bn.prototype.set = Xx;
      function Wn(n) {
        var i = -1, a = n == null ? 0 : n.length;
        for (this.clear(); ++i < a; ) {
          var d = n[i];
          this.set(d[0], d[1]);
        }
      }
      function Zx() {
        this.size = 0, this.__data__ = {
          hash: new Wr(),
          map: new (Qi || Bn)(),
          string: new Wr()
        };
      }
      function Jx(n) {
        var i = Cs(this, n).delete(n);
        return this.size -= i ? 1 : 0, i;
      }
      function Qx(n) {
        return Cs(this, n).get(n);
      }
      function ew(n) {
        return Cs(this, n).has(n);
      }
      function tw(n, i) {
        var a = Cs(this, n), d = a.size;
        return a.set(n, i), this.size += a.size == d ? 0 : 1, this;
      }
      Wn.prototype.clear = Zx, Wn.prototype.delete = Jx, Wn.prototype.get = Qx, Wn.prototype.has = ew, Wn.prototype.set = tw;
      function $r(n) {
        var i = -1, a = n == null ? 0 : n.length;
        for (this.__data__ = new Wn(); ++i < a; )
          this.add(n[i]);
      }
      function nw(n) {
        return this.__data__.set(n, f), this;
      }
      function rw(n) {
        return this.__data__.has(n);
      }
      $r.prototype.add = $r.prototype.push = nw, $r.prototype.has = rw;
      function vn(n) {
        var i = this.__data__ = new Bn(n);
        this.size = i.size;
      }
      function iw() {
        this.__data__ = new Bn(), this.size = 0;
      }
      function ow(n) {
        var i = this.__data__, a = i.delete(n);
        return this.size = i.size, a;
      }
      function sw(n) {
        return this.__data__.get(n);
      }
      function aw(n) {
        return this.__data__.has(n);
      }
      function lw(n, i) {
        var a = this.__data__;
        if (a instanceof Bn) {
          var d = a.__data__;
          if (!Qi || d.length < s - 1)
            return d.push([n, i]), this.size = ++a.size, this;
          a = this.__data__ = new Wn(d);
        }
        return a.set(n, i), this.size = a.size, this;
      }
      vn.prototype.clear = iw, vn.prototype.delete = ow, vn.prototype.get = sw, vn.prototype.has = aw, vn.prototype.set = lw;
      function Gf(n, i) {
        var a = me(n), d = !a && Kr(n), m = !a && !d && gr(n), b = !a && !d && !m && bi(n), P = a || d || m || b, N = P ? nl(n.length, yx) : [], D = N.length;
        for (var V in n)
          (i || Ue.call(n, V)) && !(P && // Safari 9 has enumerable `arguments.length` in strict mode.
          (V == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          m && (V == "offset" || V == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          b && (V == "buffer" || V == "byteLength" || V == "byteOffset") || // Skip index properties.
          zn(V, D))) && N.push(V);
        return N;
      }
      function Kf(n) {
        var i = n.length;
        return i ? n[xl(0, i - 1)] : r;
      }
      function cw(n, i) {
        return Ts(Bt(n), Ur(i, 0, n.length));
      }
      function uw(n) {
        return Ts(Bt(n));
      }
      function cl(n, i, a) {
        (a !== r && !yn(n[i], a) || a === r && !(i in n)) && $n(n, i, a);
      }
      function ro(n, i, a) {
        var d = n[i];
        (!(Ue.call(n, i) && yn(d, a)) || a === r && !(i in n)) && $n(n, i, a);
      }
      function fs(n, i) {
        for (var a = n.length; a--; )
          if (yn(n[a][0], i))
            return a;
        return -1;
      }
      function fw(n, i, a, d) {
        return dr(n, function(m, b, P) {
          i(d, m, a(m), P);
        }), d;
      }
      function Yf(n, i) {
        return n && Mn(i, mt(i), n);
      }
      function dw(n, i) {
        return n && Mn(i, $t(i), n);
      }
      function $n(n, i, a) {
        i == "__proto__" && os ? os(n, i, {
          configurable: !0,
          enumerable: !0,
          value: a,
          writable: !0
        }) : n[i] = a;
      }
      function ul(n, i) {
        for (var a = -1, d = i.length, m = L(d), b = n == null; ++a < d; )
          m[a] = b ? r : Hl(n, i[a]);
        return m;
      }
      function Ur(n, i, a) {
        return n === n && (a !== r && (n = n <= a ? n : a), i !== r && (n = n >= i ? n : i)), n;
      }
      function cn(n, i, a, d, m, b) {
        var P, N = i & v, D = i & x, V = i & g;
        if (a && (P = m ? a(n, d, m, b) : a(n)), P !== r)
          return P;
        if (!tt(n))
          return n;
        var F = me(n);
        if (F) {
          if (P = eb(n), !N)
            return Bt(n, P);
        } else {
          var B = Et(n), K = B == Pe || B == st;
          if (gr(n))
            return yd(n, N);
          if (B == at || B == Fe || K && !m) {
            if (P = D || K ? {} : kd(n), !N)
              return D ? Uw(n, dw(P, n)) : $w(n, Yf(P, n));
          } else {
            if (!Ye[B])
              return m ? n : {};
            P = tb(n, B, N);
          }
        }
        b || (b = new vn());
        var ee = b.get(n);
        if (ee)
          return ee;
        b.set(n, P), dh(n) ? n.forEach(function(ce) {
          P.add(cn(ce, i, a, ce, n, b));
        }) : uh(n) && n.forEach(function(ce, Ne) {
          P.set(Ne, cn(ce, i, a, Ne, n, b));
        });
        var le = V ? D ? Nl : Rl : D ? $t : mt, be = F ? r : le(n);
        return sn(be || n, function(ce, Ne) {
          be && (Ne = ce, ce = n[Ne]), ro(P, Ne, cn(ce, i, a, Ne, n, b));
        }), P;
      }
      function hw(n) {
        var i = mt(n);
        return function(a) {
          return qf(a, n, i);
        };
      }
      function qf(n, i, a) {
        var d = a.length;
        if (n == null)
          return !d;
        for (n = Ge(n); d--; ) {
          var m = a[d], b = i[m], P = n[m];
          if (P === r && !(m in n) || !b(P))
            return !1;
        }
        return !0;
      }
      function Xf(n, i, a) {
        if (typeof n != "function")
          throw new an(l);
        return uo(function() {
          n.apply(r, a);
        }, i);
      }
      function io(n, i, a, d) {
        var m = -1, b = Yo, P = !0, N = n.length, D = [], V = i.length;
        if (!N)
          return D;
        a && (i = Qe(i, Kt(a))), d ? (b = Xa, P = !1) : i.length >= s && (b = Zi, P = !1, i = new $r(i));
        e:
          for (; ++m < N; ) {
            var F = n[m], B = a == null ? F : a(F);
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
      var dr = Cd(Nn), Zf = Cd(dl, !0);
      function pw(n, i) {
        var a = !0;
        return dr(n, function(d, m, b) {
          return a = !!i(d, m, b), a;
        }), a;
      }
      function ds(n, i, a) {
        for (var d = -1, m = n.length; ++d < m; ) {
          var b = n[d], P = i(b);
          if (P != null && (N === r ? P === P && !qt(P) : a(P, N)))
            var N = P, D = b;
        }
        return D;
      }
      function mw(n, i, a, d) {
        var m = n.length;
        for (a = ye(a), a < 0 && (a = -a > m ? 0 : m + a), d = d === r || d > m ? m : ye(d), d < 0 && (d += m), d = a > d ? 0 : ph(d); a < d; )
          n[a++] = i;
        return n;
      }
      function Jf(n, i) {
        var a = [];
        return dr(n, function(d, m, b) {
          i(d, m, b) && a.push(d);
        }), a;
      }
      function wt(n, i, a, d, m) {
        var b = -1, P = n.length;
        for (a || (a = rb), m || (m = []); ++b < P; ) {
          var N = n[b];
          i > 0 && a(N) ? i > 1 ? wt(N, i - 1, a, d, m) : cr(m, N) : d || (m[m.length] = N);
        }
        return m;
      }
      var fl = Td(), Qf = Td(!0);
      function Nn(n, i) {
        return n && fl(n, i, mt);
      }
      function dl(n, i) {
        return n && Qf(n, i, mt);
      }
      function hs(n, i) {
        return lr(i, function(a) {
          return Gn(n[a]);
        });
      }
      function Hr(n, i) {
        i = pr(i, n);
        for (var a = 0, d = i.length; n != null && a < d; )
          n = n[On(i[a++])];
        return a && a == d ? n : r;
      }
      function ed(n, i, a) {
        var d = i(n);
        return me(n) ? d : cr(d, a(n));
      }
      function Dt(n) {
        return n == null ? n === r ? Tn : Nt : Br && Br in Ge(n) ? Zw(n) : ub(n);
      }
      function hl(n, i) {
        return n > i;
      }
      function gw(n, i) {
        return n != null && Ue.call(n, i);
      }
      function vw(n, i) {
        return n != null && i in Ge(n);
      }
      function yw(n, i, a) {
        return n >= Pt(i, a) && n < pt(i, a);
      }
      function pl(n, i, a) {
        for (var d = a ? Xa : Yo, m = n[0].length, b = n.length, P = b, N = L(b), D = 1 / 0, V = []; P--; ) {
          var F = n[P];
          P && i && (F = Qe(F, Kt(i))), D = Pt(F.length, D), N[P] = !a && (i || m >= 120 && F.length >= 120) ? new $r(P && F) : r;
        }
        F = n[0];
        var B = -1, K = N[0];
        e:
          for (; ++B < m && V.length < D; ) {
            var ee = F[B], le = i ? i(ee) : ee;
            if (ee = a || ee !== 0 ? ee : 0, !(K ? Zi(K, le) : d(V, le, a))) {
              for (P = b; --P; ) {
                var be = N[P];
                if (!(be ? Zi(be, le) : d(n[P], le, a)))
                  continue e;
              }
              K && K.push(le), V.push(ee);
            }
          }
        return V;
      }
      function xw(n, i, a, d) {
        return Nn(n, function(m, b, P) {
          i(d, a(m), b, P);
        }), d;
      }
      function oo(n, i, a) {
        i = pr(i, n), n = Wd(n, i);
        var d = n == null ? n : n[On(fn(i))];
        return d == null ? r : Gt(d, n, a);
      }
      function td(n) {
        return ot(n) && Dt(n) == Fe;
      }
      function ww(n) {
        return ot(n) && Dt(n) == Ct;
      }
      function bw(n) {
        return ot(n) && Dt(n) == je;
      }
      function so(n, i, a, d, m) {
        return n === i ? !0 : n == null || i == null || !ot(n) && !ot(i) ? n !== n && i !== i : Sw(n, i, a, d, so, m);
      }
      function Sw(n, i, a, d, m, b) {
        var P = me(n), N = me(i), D = P ? Je : Et(n), V = N ? Je : Et(i);
        D = D == Fe ? at : D, V = V == Fe ? at : V;
        var F = D == at, B = V == at, K = D == V;
        if (K && gr(n)) {
          if (!gr(i))
            return !1;
          P = !0, F = !1;
        }
        if (K && !F)
          return b || (b = new vn()), P || bi(n) ? Id(n, i, a, d, m, b) : qw(n, i, D, a, d, m, b);
        if (!(a & T)) {
          var ee = F && Ue.call(n, "__wrapped__"), le = B && Ue.call(i, "__wrapped__");
          if (ee || le) {
            var be = ee ? n.value() : n, ce = le ? i.value() : i;
            return b || (b = new vn()), m(be, ce, a, d, b);
          }
        }
        return K ? (b || (b = new vn()), Xw(n, i, a, d, m, b)) : !1;
      }
      function Cw(n) {
        return ot(n) && Et(n) == Ke;
      }
      function ml(n, i, a, d) {
        var m = a.length, b = m, P = !d;
        if (n == null)
          return !b;
        for (n = Ge(n); m--; ) {
          var N = a[m];
          if (P && N[2] ? N[1] !== n[N[0]] : !(N[0] in n))
            return !1;
        }
        for (; ++m < b; ) {
          N = a[m];
          var D = N[0], V = n[D], F = N[1];
          if (P && N[2]) {
            if (V === r && !(D in n))
              return !1;
          } else {
            var B = new vn();
            if (d)
              var K = d(V, F, D, n, i, B);
            if (!(K === r ? so(F, V, T | S, d, B) : K))
              return !1;
          }
        }
        return !0;
      }
      function nd(n) {
        if (!tt(n) || ob(n))
          return !1;
        var i = Gn(n) ? Cx : Ee;
        return i.test(Gr(n));
      }
      function Tw(n) {
        return ot(n) && Dt(n) == Mt;
      }
      function _w(n) {
        return ot(n) && Et(n) == Ot;
      }
      function Pw(n) {
        return ot(n) && Ns(n.length) && !!qe[Dt(n)];
      }
      function rd(n) {
        return typeof n == "function" ? n : n == null ? Ut : typeof n == "object" ? me(n) ? sd(n[0], n[1]) : od(n) : _h(n);
      }
      function gl(n) {
        if (!co(n))
          return Rx(n);
        var i = [];
        for (var a in Ge(n))
          Ue.call(n, a) && a != "constructor" && i.push(a);
        return i;
      }
      function Ew(n) {
        if (!tt(n))
          return cb(n);
        var i = co(n), a = [];
        for (var d in n)
          d == "constructor" && (i || !Ue.call(n, d)) || a.push(d);
        return a;
      }
      function vl(n, i) {
        return n < i;
      }
      function id(n, i) {
        var a = -1, d = Wt(n) ? L(n.length) : [];
        return dr(n, function(m, b, P) {
          d[++a] = i(m, b, P);
        }), d;
      }
      function od(n) {
        var i = Ol(n);
        return i.length == 1 && i[0][2] ? Fd(i[0][0], i[0][1]) : function(a) {
          return a === n || ml(a, n, i);
        };
      }
      function sd(n, i) {
        return Il(n) && Vd(i) ? Fd(On(n), i) : function(a) {
          var d = Hl(a, n);
          return d === r && d === i ? zl(a, n) : so(i, d, T | S);
        };
      }
      function ps(n, i, a, d, m) {
        n !== i && fl(i, function(b, P) {
          if (m || (m = new vn()), tt(b))
            Aw(n, i, P, a, ps, d, m);
          else {
            var N = d ? d(jl(n, P), b, P + "", n, i, m) : r;
            N === r && (N = b), cl(n, P, N);
          }
        }, $t);
      }
      function Aw(n, i, a, d, m, b, P) {
        var N = jl(n, a), D = jl(i, a), V = P.get(D);
        if (V) {
          cl(n, a, V);
          return;
        }
        var F = b ? b(N, D, a + "", n, i, P) : r, B = F === r;
        if (B) {
          var K = me(D), ee = !K && gr(D), le = !K && !ee && bi(D);
          F = D, K || ee || le ? me(N) ? F = N : lt(N) ? F = Bt(N) : ee ? (B = !1, F = yd(D, !0)) : le ? (B = !1, F = xd(D, !0)) : F = [] : fo(D) || Kr(D) ? (F = N, Kr(N) ? F = mh(N) : (!tt(N) || Gn(N)) && (F = kd(D))) : B = !1;
        }
        B && (P.set(D, F), m(F, D, d, b, P), P.delete(D)), cl(n, a, F);
      }
      function ad(n, i) {
        var a = n.length;
        if (a)
          return i += i < 0 ? a : 0, zn(i, a) ? n[i] : r;
      }
      function ld(n, i, a) {
        i.length ? i = Qe(i, function(b) {
          return me(b) ? function(P) {
            return Hr(P, b.length === 1 ? b[0] : b);
          } : b;
        }) : i = [Ut];
        var d = -1;
        i = Qe(i, Kt(ae()));
        var m = id(n, function(b, P, N) {
          var D = Qe(i, function(V) {
            return V(b);
          });
          return { criteria: D, index: ++d, value: b };
        });
        return tx(m, function(b, P) {
          return Ww(b, P, a);
        });
      }
      function Rw(n, i) {
        return cd(n, i, function(a, d) {
          return zl(n, d);
        });
      }
      function cd(n, i, a) {
        for (var d = -1, m = i.length, b = {}; ++d < m; ) {
          var P = i[d], N = Hr(n, P);
          a(N, P) && ao(b, pr(P, n), N);
        }
        return b;
      }
      function Nw(n) {
        return function(i) {
          return Hr(i, n);
        };
      }
      function yl(n, i, a, d) {
        var m = d ? ex : ui, b = -1, P = i.length, N = n;
        for (n === i && (i = Bt(i)), a && (N = Qe(n, Kt(a))); ++b < P; )
          for (var D = 0, V = i[b], F = a ? a(V) : V; (D = m(N, F, D, d)) > -1; )
            N !== n && is.call(N, D, 1), is.call(n, D, 1);
        return n;
      }
      function ud(n, i) {
        for (var a = n ? i.length : 0, d = a - 1; a--; ) {
          var m = i[a];
          if (a == d || m !== b) {
            var b = m;
            zn(m) ? is.call(n, m, 1) : Sl(n, m);
          }
        }
        return n;
      }
      function xl(n, i) {
        return n + as(Hf() * (i - n + 1));
      }
      function Mw(n, i, a, d) {
        for (var m = -1, b = pt(ss((i - n) / (a || 1)), 0), P = L(b); b--; )
          P[d ? b : ++m] = n, n += a;
        return P;
      }
      function wl(n, i) {
        var a = "";
        if (!n || i < 1 || i > q)
          return a;
        do
          i % 2 && (a += n), i = as(i / 2), i && (n += n);
        while (i);
        return a;
      }
      function Ce(n, i) {
        return kl(Bd(n, i, Ut), n + "");
      }
      function Ow(n) {
        return Kf(Si(n));
      }
      function Dw(n, i) {
        var a = Si(n);
        return Ts(a, Ur(i, 0, a.length));
      }
      function ao(n, i, a, d) {
        if (!tt(n))
          return n;
        i = pr(i, n);
        for (var m = -1, b = i.length, P = b - 1, N = n; N != null && ++m < b; ) {
          var D = On(i[m]), V = a;
          if (D === "__proto__" || D === "constructor" || D === "prototype")
            return n;
          if (m != P) {
            var F = N[D];
            V = d ? d(F, D, N) : r, V === r && (V = tt(F) ? F : zn(i[m + 1]) ? [] : {});
          }
          ro(N, D, V), N = N[D];
        }
        return n;
      }
      var fd = ls ? function(n, i) {
        return ls.set(n, i), n;
      } : Ut, Iw = os ? function(n, i) {
        return os(n, "toString", {
          configurable: !0,
          enumerable: !1,
          value: Kl(i),
          writable: !0
        });
      } : Ut;
      function Lw(n) {
        return Ts(Si(n));
      }
      function un(n, i, a) {
        var d = -1, m = n.length;
        i < 0 && (i = -i > m ? 0 : m + i), a = a > m ? m : a, a < 0 && (a += m), m = i > a ? 0 : a - i >>> 0, i >>>= 0;
        for (var b = L(m); ++d < m; )
          b[d] = n[d + i];
        return b;
      }
      function jw(n, i) {
        var a;
        return dr(n, function(d, m, b) {
          return a = i(d, m, b), !a;
        }), !!a;
      }
      function ms(n, i, a) {
        var d = 0, m = n == null ? d : n.length;
        if (typeof i == "number" && i === i && m <= ge) {
          for (; d < m; ) {
            var b = d + m >>> 1, P = n[b];
            P !== null && !qt(P) && (a ? P <= i : P < i) ? d = b + 1 : m = b;
          }
          return m;
        }
        return bl(n, i, Ut, a);
      }
      function bl(n, i, a, d) {
        var m = 0, b = n == null ? 0 : n.length;
        if (b === 0)
          return 0;
        i = a(i);
        for (var P = i !== i, N = i === null, D = qt(i), V = i === r; m < b; ) {
          var F = as((m + b) / 2), B = a(n[F]), K = B !== r, ee = B === null, le = B === B, be = qt(B);
          if (P)
            var ce = d || le;
          else
            V ? ce = le && (d || K) : N ? ce = le && K && (d || !ee) : D ? ce = le && K && !ee && (d || !be) : ee || be ? ce = !1 : ce = d ? B <= i : B < i;
          ce ? m = F + 1 : b = F;
        }
        return Pt(b, _e);
      }
      function dd(n, i) {
        for (var a = -1, d = n.length, m = 0, b = []; ++a < d; ) {
          var P = n[a], N = i ? i(P) : P;
          if (!a || !yn(N, D)) {
            var D = N;
            b[m++] = P === 0 ? 0 : P;
          }
        }
        return b;
      }
      function hd(n) {
        return typeof n == "number" ? n : qt(n) ? pe : +n;
      }
      function Yt(n) {
        if (typeof n == "string")
          return n;
        if (me(n))
          return Qe(n, Yt) + "";
        if (qt(n))
          return zf ? zf.call(n) : "";
        var i = n + "";
        return i == "0" && 1 / n == -Z ? "-0" : i;
      }
      function hr(n, i, a) {
        var d = -1, m = Yo, b = n.length, P = !0, N = [], D = N;
        if (a)
          P = !1, m = Xa;
        else if (b >= s) {
          var V = i ? null : Kw(n);
          if (V)
            return Xo(V);
          P = !1, m = Zi, D = new $r();
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
              m(D, B, a) || (D !== N && D.push(B), N.push(F));
          }
        return N;
      }
      function Sl(n, i) {
        return i = pr(i, n), n = Wd(n, i), n == null || delete n[On(fn(i))];
      }
      function pd(n, i, a, d) {
        return ao(n, i, a(Hr(n, i)), d);
      }
      function gs(n, i, a, d) {
        for (var m = n.length, b = d ? m : -1; (d ? b-- : ++b < m) && i(n[b], b, n); )
          ;
        return a ? un(n, d ? 0 : b, d ? b + 1 : m) : un(n, d ? b + 1 : 0, d ? m : b);
      }
      function md(n, i) {
        var a = n;
        return a instanceof Oe && (a = a.value()), Za(i, function(d, m) {
          return m.func.apply(m.thisArg, cr([d], m.args));
        }, a);
      }
      function Cl(n, i, a) {
        var d = n.length;
        if (d < 2)
          return d ? hr(n[0]) : [];
        for (var m = -1, b = L(d); ++m < d; )
          for (var P = n[m], N = -1; ++N < d; )
            N != m && (b[m] = io(b[m] || P, n[N], i, a));
        return hr(wt(b, 1), i, a);
      }
      function gd(n, i, a) {
        for (var d = -1, m = n.length, b = i.length, P = {}; ++d < m; ) {
          var N = d < b ? i[d] : r;
          a(P, n[d], N);
        }
        return P;
      }
      function Tl(n) {
        return lt(n) ? n : [];
      }
      function _l(n) {
        return typeof n == "function" ? n : Ut;
      }
      function pr(n, i) {
        return me(n) ? n : Il(n, i) ? [n] : zd(We(n));
      }
      var kw = Ce;
      function mr(n, i, a) {
        var d = n.length;
        return a = a === r ? d : a, !i && a >= d ? n : un(n, i, a);
      }
      var vd = Tx || function(n) {
        return xt.clearTimeout(n);
      };
      function yd(n, i) {
        if (i)
          return n.slice();
        var a = n.length, d = Ff ? Ff(a) : new n.constructor(a);
        return n.copy(d), d;
      }
      function Pl(n) {
        var i = new n.constructor(n.byteLength);
        return new ns(i).set(new ns(n)), i;
      }
      function Vw(n, i) {
        var a = i ? Pl(n.buffer) : n.buffer;
        return new n.constructor(a, n.byteOffset, n.byteLength);
      }
      function Fw(n) {
        var i = new n.constructor(n.source, Le.exec(n));
        return i.lastIndex = n.lastIndex, i;
      }
      function Bw(n) {
        return no ? Ge(no.call(n)) : {};
      }
      function xd(n, i) {
        var a = i ? Pl(n.buffer) : n.buffer;
        return new n.constructor(a, n.byteOffset, n.length);
      }
      function wd(n, i) {
        if (n !== i) {
          var a = n !== r, d = n === null, m = n === n, b = qt(n), P = i !== r, N = i === null, D = i === i, V = qt(i);
          if (!N && !V && !b && n > i || b && P && D && !N && !V || d && P && D || !a && D || !m)
            return 1;
          if (!d && !b && !V && n < i || V && a && m && !d && !b || N && a && m || !P && m || !D)
            return -1;
        }
        return 0;
      }
      function Ww(n, i, a) {
        for (var d = -1, m = n.criteria, b = i.criteria, P = m.length, N = a.length; ++d < P; ) {
          var D = wd(m[d], b[d]);
          if (D) {
            if (d >= N)
              return D;
            var V = a[d];
            return D * (V == "desc" ? -1 : 1);
          }
        }
        return n.index - i.index;
      }
      function bd(n, i, a, d) {
        for (var m = -1, b = n.length, P = a.length, N = -1, D = i.length, V = pt(b - P, 0), F = L(D + V), B = !d; ++N < D; )
          F[N] = i[N];
        for (; ++m < P; )
          (B || m < b) && (F[a[m]] = n[m]);
        for (; V--; )
          F[N++] = n[m++];
        return F;
      }
      function Sd(n, i, a, d) {
        for (var m = -1, b = n.length, P = -1, N = a.length, D = -1, V = i.length, F = pt(b - N, 0), B = L(F + V), K = !d; ++m < F; )
          B[m] = n[m];
        for (var ee = m; ++D < V; )
          B[ee + D] = i[D];
        for (; ++P < N; )
          (K || m < b) && (B[ee + a[P]] = n[m++]);
        return B;
      }
      function Bt(n, i) {
        var a = -1, d = n.length;
        for (i || (i = L(d)); ++a < d; )
          i[a] = n[a];
        return i;
      }
      function Mn(n, i, a, d) {
        var m = !a;
        a || (a = {});
        for (var b = -1, P = i.length; ++b < P; ) {
          var N = i[b], D = d ? d(a[N], n[N], N, a, n) : r;
          D === r && (D = n[N]), m ? $n(a, N, D) : ro(a, N, D);
        }
        return a;
      }
      function $w(n, i) {
        return Mn(n, Dl(n), i);
      }
      function Uw(n, i) {
        return Mn(n, Ld(n), i);
      }
      function vs(n, i) {
        return function(a, d) {
          var m = me(a) ? Y0 : fw, b = i ? i() : {};
          return m(a, n, ae(d, 2), b);
        };
      }
      function yi(n) {
        return Ce(function(i, a) {
          var d = -1, m = a.length, b = m > 1 ? a[m - 1] : r, P = m > 2 ? a[2] : r;
          for (b = n.length > 3 && typeof b == "function" ? (m--, b) : r, P && It(a[0], a[1], P) && (b = m < 3 ? r : b, m = 1), i = Ge(i); ++d < m; ) {
            var N = a[d];
            N && n(i, N, d, b);
          }
          return i;
        });
      }
      function Cd(n, i) {
        return function(a, d) {
          if (a == null)
            return a;
          if (!Wt(a))
            return n(a, d);
          for (var m = a.length, b = i ? m : -1, P = Ge(a); (i ? b-- : ++b < m) && d(P[b], b, P) !== !1; )
            ;
          return a;
        };
      }
      function Td(n) {
        return function(i, a, d) {
          for (var m = -1, b = Ge(i), P = d(i), N = P.length; N--; ) {
            var D = P[n ? N : ++m];
            if (a(b[D], D, b) === !1)
              break;
          }
          return i;
        };
      }
      function Hw(n, i, a) {
        var d = i & _, m = lo(n);
        function b() {
          var P = this && this !== xt && this instanceof b ? m : n;
          return P.apply(d ? a : this, arguments);
        }
        return b;
      }
      function _d(n) {
        return function(i) {
          i = We(i);
          var a = fi(i) ? gn(i) : r, d = a ? a[0] : i.charAt(0), m = a ? mr(a, 1).join("") : i.slice(1);
          return d[n]() + m;
        };
      }
      function xi(n) {
        return function(i) {
          return Za(Ch(Sh(i).replace(I0, "")), n, "");
        };
      }
      function lo(n) {
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
          var a = vi(n.prototype), d = n.apply(a, i);
          return tt(d) ? d : a;
        };
      }
      function zw(n, i, a) {
        var d = lo(n);
        function m() {
          for (var b = arguments.length, P = L(b), N = b, D = wi(m); N--; )
            P[N] = arguments[N];
          var V = b < 3 && P[0] !== D && P[b - 1] !== D ? [] : ur(P, D);
          if (b -= V.length, b < a)
            return Nd(
              n,
              i,
              ys,
              m.placeholder,
              r,
              P,
              V,
              r,
              r,
              a - b
            );
          var F = this && this !== xt && this instanceof m ? d : n;
          return Gt(F, this, P);
        }
        return m;
      }
      function Pd(n) {
        return function(i, a, d) {
          var m = Ge(i);
          if (!Wt(i)) {
            var b = ae(a, 3);
            i = mt(i), a = function(N) {
              return b(m[N], N, m);
            };
          }
          var P = n(i, a, d);
          return P > -1 ? m[b ? i[P] : P] : r;
        };
      }
      function Ed(n) {
        return Hn(function(i) {
          var a = i.length, d = a, m = ln.prototype.thru;
          for (n && i.reverse(); d--; ) {
            var b = i[d];
            if (typeof b != "function")
              throw new an(l);
            if (m && !P && Ss(b) == "wrapper")
              var P = new ln([], !0);
          }
          for (d = P ? d : a; ++d < a; ) {
            b = i[d];
            var N = Ss(b), D = N == "wrapper" ? Ml(b) : r;
            D && Ll(D[0]) && D[1] == ($ | M | j | H) && !D[4].length && D[9] == 1 ? P = P[Ss(D[0])].apply(P, D[3]) : P = b.length == 1 && Ll(b) ? P[N]() : P.thru(b);
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
      function ys(n, i, a, d, m, b, P, N, D, V) {
        var F = i & $, B = i & _, K = i & E, ee = i & (M | I), le = i & te, be = K ? r : lo(n);
        function ce() {
          for (var Ne = arguments.length, Ie = L(Ne), Xt = Ne; Xt--; )
            Ie[Xt] = arguments[Xt];
          if (ee)
            var Lt = wi(ce), Zt = rx(Ie, Lt);
          if (d && (Ie = bd(Ie, d, m, ee)), b && (Ie = Sd(Ie, b, P, ee)), Ne -= Zt, ee && Ne < V) {
            var ct = ur(Ie, Lt);
            return Nd(
              n,
              i,
              ys,
              ce.placeholder,
              a,
              Ie,
              ct,
              N,
              D,
              V - Ne
            );
          }
          var xn = B ? a : this, Yn = K ? xn[n] : n;
          return Ne = Ie.length, N ? Ie = fb(Ie, N) : le && Ne > 1 && Ie.reverse(), F && D < Ne && (Ie.length = D), this && this !== xt && this instanceof ce && (Yn = be || lo(Yn)), Yn.apply(xn, Ie);
        }
        return ce;
      }
      function Ad(n, i) {
        return function(a, d) {
          return xw(a, n, i(d), {});
        };
      }
      function xs(n, i) {
        return function(a, d) {
          var m;
          if (a === r && d === r)
            return i;
          if (a !== r && (m = a), d !== r) {
            if (m === r)
              return d;
            typeof a == "string" || typeof d == "string" ? (a = Yt(a), d = Yt(d)) : (a = hd(a), d = hd(d)), m = n(a, d);
          }
          return m;
        };
      }
      function El(n) {
        return Hn(function(i) {
          return i = Qe(i, Kt(ae())), Ce(function(a) {
            var d = this;
            return n(i, function(m) {
              return Gt(m, d, a);
            });
          });
        });
      }
      function ws(n, i) {
        i = i === r ? " " : Yt(i);
        var a = i.length;
        if (a < 2)
          return a ? wl(i, n) : i;
        var d = wl(i, ss(n / di(i)));
        return fi(i) ? mr(gn(d), 0, n).join("") : d.slice(0, n);
      }
      function Gw(n, i, a, d) {
        var m = i & _, b = lo(n);
        function P() {
          for (var N = -1, D = arguments.length, V = -1, F = d.length, B = L(F + D), K = this && this !== xt && this instanceof P ? b : n; ++V < F; )
            B[V] = d[V];
          for (; D--; )
            B[V++] = arguments[++N];
          return Gt(K, m ? a : this, B);
        }
        return P;
      }
      function Rd(n) {
        return function(i, a, d) {
          return d && typeof d != "number" && It(i, a, d) && (a = d = r), i = Kn(i), a === r ? (a = i, i = 0) : a = Kn(a), d = d === r ? i < a ? 1 : -1 : Kn(d), Mw(i, a, d, n);
        };
      }
      function bs(n) {
        return function(i, a) {
          return typeof i == "string" && typeof a == "string" || (i = dn(i), a = dn(a)), n(i, a);
        };
      }
      function Nd(n, i, a, d, m, b, P, N, D, V) {
        var F = i & M, B = F ? P : r, K = F ? r : P, ee = F ? b : r, le = F ? r : b;
        i |= F ? j : U, i &= ~(F ? U : j), i & A || (i &= ~(_ | E));
        var be = [
          n,
          i,
          m,
          ee,
          B,
          le,
          K,
          N,
          D,
          V
        ], ce = a.apply(r, be);
        return Ll(n) && $d(ce, be), ce.placeholder = d, Ud(ce, n, i);
      }
      function Al(n) {
        var i = ht[n];
        return function(a, d) {
          if (a = dn(a), d = d == null ? 0 : Pt(ye(d), 292), d && Uf(a)) {
            var m = (We(a) + "e").split("e"), b = i(m[0] + "e" + (+m[1] + d));
            return m = (We(b) + "e").split("e"), +(m[0] + "e" + (+m[1] - d));
          }
          return i(a);
        };
      }
      var Kw = mi && 1 / Xo(new mi([, -0]))[1] == Z ? function(n) {
        return new mi(n);
      } : Xl;
      function Md(n) {
        return function(i) {
          var a = Et(i);
          return a == Ke ? il(i) : a == Ot ? ux(i) : nx(i, n(i));
        };
      }
      function Un(n, i, a, d, m, b, P, N) {
        var D = i & E;
        if (!D && typeof n != "function")
          throw new an(l);
        var V = d ? d.length : 0;
        if (V || (i &= ~(j | U), d = m = r), P = P === r ? P : pt(ye(P), 0), N = N === r ? N : ye(N), V -= m ? m.length : 0, i & U) {
          var F = d, B = m;
          d = m = r;
        }
        var K = D ? r : Ml(n), ee = [
          n,
          i,
          a,
          d,
          m,
          F,
          B,
          b,
          P,
          N
        ];
        if (K && lb(ee, K), n = ee[0], i = ee[1], a = ee[2], d = ee[3], m = ee[4], N = ee[9] = ee[9] === r ? D ? 0 : n.length : pt(ee[9] - V, 0), !N && i & (M | I) && (i &= ~(M | I)), !i || i == _)
          var le = Hw(n, i, a);
        else
          i == M || i == I ? le = zw(n, i, N) : (i == j || i == (_ | j)) && !m.length ? le = Gw(n, i, a, d) : le = ys.apply(r, ee);
        var be = K ? fd : $d;
        return Ud(be(le, ee), n, i);
      }
      function Od(n, i, a, d) {
        return n === r || yn(n, pi[a]) && !Ue.call(d, a) ? i : n;
      }
      function Dd(n, i, a, d, m, b) {
        return tt(n) && tt(i) && (b.set(i, n), ps(n, i, r, Dd, b), b.delete(i)), n;
      }
      function Yw(n) {
        return fo(n) ? r : n;
      }
      function Id(n, i, a, d, m, b) {
        var P = a & T, N = n.length, D = i.length;
        if (N != D && !(P && D > N))
          return !1;
        var V = b.get(n), F = b.get(i);
        if (V && F)
          return V == i && F == n;
        var B = -1, K = !0, ee = a & S ? new $r() : r;
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
            if (!Ja(i, function(Ne, Ie) {
              if (!Zi(ee, Ie) && (le === Ne || m(le, Ne, a, d, b)))
                return ee.push(Ie);
            })) {
              K = !1;
              break;
            }
          } else if (!(le === be || m(le, be, a, d, b))) {
            K = !1;
            break;
          }
        }
        return b.delete(n), b.delete(i), K;
      }
      function qw(n, i, a, d, m, b, P) {
        switch (a) {
          case Pn:
            if (n.byteLength != i.byteLength || n.byteOffset != i.byteOffset)
              return !1;
            n = n.buffer, i = i.buffer;
          case Ct:
            return !(n.byteLength != i.byteLength || !b(new ns(n), new ns(i)));
          case we:
          case je:
          case ft:
            return yn(+n, +i);
          case ve:
            return n.name == i.name && n.message == i.message;
          case Mt:
          case mn:
            return n == i + "";
          case Ke:
            var N = il;
          case Ot:
            var D = d & T;
            if (N || (N = Xo), n.size != i.size && !D)
              return !1;
            var V = P.get(n);
            if (V)
              return V == i;
            d |= S, P.set(n, i);
            var F = Id(N(n), N(i), d, m, b, P);
            return P.delete(n), F;
          case dt:
            if (no)
              return no.call(n) == no.call(i);
        }
        return !1;
      }
      function Xw(n, i, a, d, m, b) {
        var P = a & T, N = Rl(n), D = N.length, V = Rl(i), F = V.length;
        if (D != F && !P)
          return !1;
        for (var B = D; B--; ) {
          var K = N[B];
          if (!(P ? K in i : Ue.call(i, K)))
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
            var Xt = P ? d(Ie, Ne, K, i, n, b) : d(Ne, Ie, K, n, i, b);
          if (!(Xt === r ? Ne === Ie || m(Ne, Ie, a, d, b) : Xt)) {
            be = !1;
            break;
          }
          ce || (ce = K == "constructor");
        }
        if (be && !ce) {
          var Lt = n.constructor, Zt = i.constructor;
          Lt != Zt && "constructor" in n && "constructor" in i && !(typeof Lt == "function" && Lt instanceof Lt && typeof Zt == "function" && Zt instanceof Zt) && (be = !1);
        }
        return b.delete(n), b.delete(i), be;
      }
      function Hn(n) {
        return kl(Bd(n, r, qd), n + "");
      }
      function Rl(n) {
        return ed(n, mt, Dl);
      }
      function Nl(n) {
        return ed(n, $t, Ld);
      }
      var Ml = ls ? function(n) {
        return ls.get(n);
      } : Xl;
      function Ss(n) {
        for (var i = n.name + "", a = gi[i], d = Ue.call(gi, i) ? a.length : 0; d--; ) {
          var m = a[d], b = m.func;
          if (b == null || b == n)
            return m.name;
        }
        return i;
      }
      function wi(n) {
        var i = Ue.call(w, "placeholder") ? w : n;
        return i.placeholder;
      }
      function ae() {
        var n = w.iteratee || Yl;
        return n = n === Yl ? rd : n, arguments.length ? n(arguments[0], arguments[1]) : n;
      }
      function Cs(n, i) {
        var a = n.__data__;
        return ib(i) ? a[typeof i == "string" ? "string" : "hash"] : a.map;
      }
      function Ol(n) {
        for (var i = mt(n), a = i.length; a--; ) {
          var d = i[a], m = n[d];
          i[a] = [d, m, Vd(m)];
        }
        return i;
      }
      function zr(n, i) {
        var a = ax(n, i);
        return nd(a) ? a : r;
      }
      function Zw(n) {
        var i = Ue.call(n, Br), a = n[Br];
        try {
          n[Br] = r;
          var d = !0;
        } catch {
        }
        var m = es.call(n);
        return d && (i ? n[Br] = a : delete n[Br]), m;
      }
      var Dl = sl ? function(n) {
        return n == null ? [] : (n = Ge(n), lr(sl(n), function(i) {
          return Wf.call(n, i);
        }));
      } : Zl, Ld = sl ? function(n) {
        for (var i = []; n; )
          cr(i, Dl(n)), n = rs(n);
        return i;
      } : Zl, Et = Dt;
      (al && Et(new al(new ArrayBuffer(1))) != Pn || Qi && Et(new Qi()) != Ke || ll && Et(ll.resolve()) != nn || mi && Et(new mi()) != Ot || eo && Et(new eo()) != _n) && (Et = function(n) {
        var i = Dt(n), a = i == at ? n.constructor : r, d = a ? Gr(a) : "";
        if (d)
          switch (d) {
            case Dx:
              return Pn;
            case Ix:
              return Ke;
            case Lx:
              return nn;
            case jx:
              return Ot;
            case kx:
              return _n;
          }
        return i;
      });
      function Jw(n, i, a) {
        for (var d = -1, m = a.length; ++d < m; ) {
          var b = a[d], P = b.size;
          switch (b.type) {
            case "drop":
              n += P;
              break;
            case "dropRight":
              i -= P;
              break;
            case "take":
              i = Pt(i, n + P);
              break;
            case "takeRight":
              n = pt(n, i - P);
              break;
          }
        }
        return { start: n, end: i };
      }
      function Qw(n) {
        var i = n.match(Ba);
        return i ? i[1].split(Wa) : [];
      }
      function jd(n, i, a) {
        i = pr(i, n);
        for (var d = -1, m = i.length, b = !1; ++d < m; ) {
          var P = On(i[d]);
          if (!(b = n != null && a(n, P)))
            break;
          n = n[P];
        }
        return b || ++d != m ? b : (m = n == null ? 0 : n.length, !!m && Ns(m) && zn(P, m) && (me(n) || Kr(n)));
      }
      function eb(n) {
        var i = n.length, a = new n.constructor(i);
        return i && typeof n[0] == "string" && Ue.call(n, "index") && (a.index = n.index, a.input = n.input), a;
      }
      function kd(n) {
        return typeof n.constructor == "function" && !co(n) ? vi(rs(n)) : {};
      }
      function tb(n, i, a) {
        var d = n.constructor;
        switch (i) {
          case Ct:
            return Pl(n);
          case we:
          case je:
            return new d(+n);
          case Pn:
            return Vw(n, a);
          case En:
          case zt:
          case An:
          case Rn:
          case Lr:
          case jr:
          case ir:
          case or:
          case kr:
            return xd(n, a);
          case Ke:
            return new d();
          case ft:
          case mn:
            return new d(n);
          case Mt:
            return Fw(n);
          case Ot:
            return new d();
          case dt:
            return Bw(n);
        }
      }
      function nb(n, i) {
        var a = i.length;
        if (!a)
          return n;
        var d = a - 1;
        return i[d] = (a > 1 ? "& " : "") + i[d], i = i.join(a > 2 ? ", " : " "), n.replace(Fa, `{
/* [wrapped with ` + i + `] */
`);
      }
      function rb(n) {
        return me(n) || Kr(n) || !!($f && n && n[$f]);
      }
      function zn(n, i) {
        var a = typeof n;
        return i = i ?? q, !!i && (a == "number" || a != "symbol" && et.test(n)) && n > -1 && n % 1 == 0 && n < i;
      }
      function It(n, i, a) {
        if (!tt(a))
          return !1;
        var d = typeof i;
        return (d == "number" ? Wt(a) && zn(i, a.length) : d == "string" && i in a) ? yn(a[i], n) : !1;
      }
      function Il(n, i) {
        if (me(n))
          return !1;
        var a = typeof n;
        return a == "number" || a == "symbol" || a == "boolean" || n == null || qt(n) ? !0 : Ho.test(n) || !Uo.test(n) || i != null && n in Ge(i);
      }
      function ib(n) {
        var i = typeof n;
        return i == "string" || i == "number" || i == "symbol" || i == "boolean" ? n !== "__proto__" : n === null;
      }
      function Ll(n) {
        var i = Ss(n), a = w[i];
        if (typeof a != "function" || !(i in Oe.prototype))
          return !1;
        if (n === a)
          return !0;
        var d = Ml(a);
        return !!d && n === d[0];
      }
      function ob(n) {
        return !!Vf && Vf in n;
      }
      var sb = Jo ? Gn : Jl;
      function co(n) {
        var i = n && n.constructor, a = typeof i == "function" && i.prototype || pi;
        return n === a;
      }
      function Vd(n) {
        return n === n && !tt(n);
      }
      function Fd(n, i) {
        return function(a) {
          return a == null ? !1 : a[n] === i && (i !== r || n in Ge(a));
        };
      }
      function ab(n) {
        var i = As(n, function(d) {
          return a.size === h && a.clear(), d;
        }), a = i.cache;
        return i;
      }
      function lb(n, i) {
        var a = n[1], d = i[1], m = a | d, b = m < (_ | E | $), P = d == $ && a == M || d == $ && a == H && n[7].length <= i[8] || d == ($ | H) && i[7].length <= i[8] && a == M;
        if (!(b || P))
          return n;
        d & _ && (n[2] = i[2], m |= a & _ ? 0 : A);
        var N = i[3];
        if (N) {
          var D = n[3];
          n[3] = D ? bd(D, N, i[4]) : N, n[4] = D ? ur(n[3], p) : i[4];
        }
        return N = i[5], N && (D = n[5], n[5] = D ? Sd(D, N, i[6]) : N, n[6] = D ? ur(n[5], p) : i[6]), N = i[7], N && (n[7] = N), d & $ && (n[8] = n[8] == null ? i[8] : Pt(n[8], i[8])), n[9] == null && (n[9] = i[9]), n[0] = i[0], n[1] = m, n;
      }
      function cb(n) {
        var i = [];
        if (n != null)
          for (var a in Ge(n))
            i.push(a);
        return i;
      }
      function ub(n) {
        return es.call(n);
      }
      function Bd(n, i, a) {
        return i = pt(i === r ? n.length - 1 : i, 0), function() {
          for (var d = arguments, m = -1, b = pt(d.length - i, 0), P = L(b); ++m < b; )
            P[m] = d[i + m];
          m = -1;
          for (var N = L(i + 1); ++m < i; )
            N[m] = d[m];
          return N[i] = a(P), Gt(n, this, N);
        };
      }
      function Wd(n, i) {
        return i.length < 2 ? n : Hr(n, un(i, 0, -1));
      }
      function fb(n, i) {
        for (var a = n.length, d = Pt(i.length, a), m = Bt(n); d--; ) {
          var b = i[d];
          n[d] = zn(b, a) ? m[b] : r;
        }
        return n;
      }
      function jl(n, i) {
        if (!(i === "constructor" && typeof n[i] == "function") && i != "__proto__")
          return n[i];
      }
      var $d = Hd(fd), uo = Px || function(n, i) {
        return xt.setTimeout(n, i);
      }, kl = Hd(Iw);
      function Ud(n, i, a) {
        var d = i + "";
        return kl(n, nb(d, db(Qw(d), a)));
      }
      function Hd(n) {
        var i = 0, a = 0;
        return function() {
          var d = Nx(), m = se - (d - a);
          if (a = d, m > 0) {
            if (++i >= J)
              return arguments[0];
          } else
            i = 0;
          return n.apply(r, arguments);
        };
      }
      function Ts(n, i) {
        var a = -1, d = n.length, m = d - 1;
        for (i = i === r ? d : i; ++a < i; ) {
          var b = xl(a, m), P = n[b];
          n[b] = n[a], n[a] = P;
        }
        return n.length = i, n;
      }
      var zd = ab(function(n) {
        var i = [];
        return n.charCodeAt(0) === 46 && i.push(""), n.replace(ka, function(a, d, m, b) {
          i.push(m ? b.replace(Y, "$1") : d || a);
        }), i;
      });
      function On(n) {
        if (typeof n == "string" || qt(n))
          return n;
        var i = n + "";
        return i == "0" && 1 / n == -Z ? "-0" : i;
      }
      function Gr(n) {
        if (n != null) {
          try {
            return Qo.call(n);
          } catch {
          }
          try {
            return n + "";
          } catch {
          }
        }
        return "";
      }
      function db(n, i) {
        return sn(Re, function(a) {
          var d = "_." + a[0];
          i & a[1] && !Yo(n, d) && n.push(d);
        }), n.sort();
      }
      function Gd(n) {
        if (n instanceof Oe)
          return n.clone();
        var i = new ln(n.__wrapped__, n.__chain__);
        return i.__actions__ = Bt(n.__actions__), i.__index__ = n.__index__, i.__values__ = n.__values__, i;
      }
      function hb(n, i, a) {
        (a ? It(n, i, a) : i === r) ? i = 1 : i = pt(ye(i), 0);
        var d = n == null ? 0 : n.length;
        if (!d || i < 1)
          return [];
        for (var m = 0, b = 0, P = L(ss(d / i)); m < d; )
          P[b++] = un(n, m, m += i);
        return P;
      }
      function pb(n) {
        for (var i = -1, a = n == null ? 0 : n.length, d = 0, m = []; ++i < a; ) {
          var b = n[i];
          b && (m[d++] = b);
        }
        return m;
      }
      function mb() {
        var n = arguments.length;
        if (!n)
          return [];
        for (var i = L(n - 1), a = arguments[0], d = n; d--; )
          i[d - 1] = arguments[d];
        return cr(me(a) ? Bt(a) : [a], wt(i, 1));
      }
      var gb = Ce(function(n, i) {
        return lt(n) ? io(n, wt(i, 1, lt, !0)) : [];
      }), vb = Ce(function(n, i) {
        var a = fn(i);
        return lt(a) && (a = r), lt(n) ? io(n, wt(i, 1, lt, !0), ae(a, 2)) : [];
      }), yb = Ce(function(n, i) {
        var a = fn(i);
        return lt(a) && (a = r), lt(n) ? io(n, wt(i, 1, lt, !0), r, a) : [];
      });
      function xb(n, i, a) {
        var d = n == null ? 0 : n.length;
        return d ? (i = a || i === r ? 1 : ye(i), un(n, i < 0 ? 0 : i, d)) : [];
      }
      function wb(n, i, a) {
        var d = n == null ? 0 : n.length;
        return d ? (i = a || i === r ? 1 : ye(i), i = d - i, un(n, 0, i < 0 ? 0 : i)) : [];
      }
      function bb(n, i) {
        return n && n.length ? gs(n, ae(i, 3), !0, !0) : [];
      }
      function Sb(n, i) {
        return n && n.length ? gs(n, ae(i, 3), !0) : [];
      }
      function Cb(n, i, a, d) {
        var m = n == null ? 0 : n.length;
        return m ? (a && typeof a != "number" && It(n, i, a) && (a = 0, d = m), mw(n, i, a, d)) : [];
      }
      function Kd(n, i, a) {
        var d = n == null ? 0 : n.length;
        if (!d)
          return -1;
        var m = a == null ? 0 : ye(a);
        return m < 0 && (m = pt(d + m, 0)), qo(n, ae(i, 3), m);
      }
      function Yd(n, i, a) {
        var d = n == null ? 0 : n.length;
        if (!d)
          return -1;
        var m = d - 1;
        return a !== r && (m = ye(a), m = a < 0 ? pt(d + m, 0) : Pt(m, d - 1)), qo(n, ae(i, 3), m, !0);
      }
      function qd(n) {
        var i = n == null ? 0 : n.length;
        return i ? wt(n, 1) : [];
      }
      function Tb(n) {
        var i = n == null ? 0 : n.length;
        return i ? wt(n, Z) : [];
      }
      function _b(n, i) {
        var a = n == null ? 0 : n.length;
        return a ? (i = i === r ? 1 : ye(i), wt(n, i)) : [];
      }
      function Pb(n) {
        for (var i = -1, a = n == null ? 0 : n.length, d = {}; ++i < a; ) {
          var m = n[i];
          d[m[0]] = m[1];
        }
        return d;
      }
      function Xd(n) {
        return n && n.length ? n[0] : r;
      }
      function Eb(n, i, a) {
        var d = n == null ? 0 : n.length;
        if (!d)
          return -1;
        var m = a == null ? 0 : ye(a);
        return m < 0 && (m = pt(d + m, 0)), ui(n, i, m);
      }
      function Ab(n) {
        var i = n == null ? 0 : n.length;
        return i ? un(n, 0, -1) : [];
      }
      var Rb = Ce(function(n) {
        var i = Qe(n, Tl);
        return i.length && i[0] === n[0] ? pl(i) : [];
      }), Nb = Ce(function(n) {
        var i = fn(n), a = Qe(n, Tl);
        return i === fn(a) ? i = r : a.pop(), a.length && a[0] === n[0] ? pl(a, ae(i, 2)) : [];
      }), Mb = Ce(function(n) {
        var i = fn(n), a = Qe(n, Tl);
        return i = typeof i == "function" ? i : r, i && a.pop(), a.length && a[0] === n[0] ? pl(a, r, i) : [];
      });
      function Ob(n, i) {
        return n == null ? "" : Ax.call(n, i);
      }
      function fn(n) {
        var i = n == null ? 0 : n.length;
        return i ? n[i - 1] : r;
      }
      function Db(n, i, a) {
        var d = n == null ? 0 : n.length;
        if (!d)
          return -1;
        var m = d;
        return a !== r && (m = ye(a), m = m < 0 ? pt(d + m, 0) : Pt(m, d - 1)), i === i ? dx(n, i, m) : qo(n, Nf, m, !0);
      }
      function Ib(n, i) {
        return n && n.length ? ad(n, ye(i)) : r;
      }
      var Lb = Ce(Zd);
      function Zd(n, i) {
        return n && n.length && i && i.length ? yl(n, i) : n;
      }
      function jb(n, i, a) {
        return n && n.length && i && i.length ? yl(n, i, ae(a, 2)) : n;
      }
      function kb(n, i, a) {
        return n && n.length && i && i.length ? yl(n, i, r, a) : n;
      }
      var Vb = Hn(function(n, i) {
        var a = n == null ? 0 : n.length, d = ul(n, i);
        return ud(n, Qe(i, function(m) {
          return zn(m, a) ? +m : m;
        }).sort(wd)), d;
      });
      function Fb(n, i) {
        var a = [];
        if (!(n && n.length))
          return a;
        var d = -1, m = [], b = n.length;
        for (i = ae(i, 3); ++d < b; ) {
          var P = n[d];
          i(P, d, n) && (a.push(P), m.push(d));
        }
        return ud(n, m), a;
      }
      function Vl(n) {
        return n == null ? n : Ox.call(n);
      }
      function Bb(n, i, a) {
        var d = n == null ? 0 : n.length;
        return d ? (a && typeof a != "number" && It(n, i, a) ? (i = 0, a = d) : (i = i == null ? 0 : ye(i), a = a === r ? d : ye(a)), un(n, i, a)) : [];
      }
      function Wb(n, i) {
        return ms(n, i);
      }
      function $b(n, i, a) {
        return bl(n, i, ae(a, 2));
      }
      function Ub(n, i) {
        var a = n == null ? 0 : n.length;
        if (a) {
          var d = ms(n, i);
          if (d < a && yn(n[d], i))
            return d;
        }
        return -1;
      }
      function Hb(n, i) {
        return ms(n, i, !0);
      }
      function zb(n, i, a) {
        return bl(n, i, ae(a, 2), !0);
      }
      function Gb(n, i) {
        var a = n == null ? 0 : n.length;
        if (a) {
          var d = ms(n, i, !0) - 1;
          if (yn(n[d], i))
            return d;
        }
        return -1;
      }
      function Kb(n) {
        return n && n.length ? dd(n) : [];
      }
      function Yb(n, i) {
        return n && n.length ? dd(n, ae(i, 2)) : [];
      }
      function qb(n) {
        var i = n == null ? 0 : n.length;
        return i ? un(n, 1, i) : [];
      }
      function Xb(n, i, a) {
        return n && n.length ? (i = a || i === r ? 1 : ye(i), un(n, 0, i < 0 ? 0 : i)) : [];
      }
      function Zb(n, i, a) {
        var d = n == null ? 0 : n.length;
        return d ? (i = a || i === r ? 1 : ye(i), i = d - i, un(n, i < 0 ? 0 : i, d)) : [];
      }
      function Jb(n, i) {
        return n && n.length ? gs(n, ae(i, 3), !1, !0) : [];
      }
      function Qb(n, i) {
        return n && n.length ? gs(n, ae(i, 3)) : [];
      }
      var e1 = Ce(function(n) {
        return hr(wt(n, 1, lt, !0));
      }), t1 = Ce(function(n) {
        var i = fn(n);
        return lt(i) && (i = r), hr(wt(n, 1, lt, !0), ae(i, 2));
      }), n1 = Ce(function(n) {
        var i = fn(n);
        return i = typeof i == "function" ? i : r, hr(wt(n, 1, lt, !0), r, i);
      });
      function r1(n) {
        return n && n.length ? hr(n) : [];
      }
      function i1(n, i) {
        return n && n.length ? hr(n, ae(i, 2)) : [];
      }
      function o1(n, i) {
        return i = typeof i == "function" ? i : r, n && n.length ? hr(n, r, i) : [];
      }
      function Fl(n) {
        if (!(n && n.length))
          return [];
        var i = 0;
        return n = lr(n, function(a) {
          if (lt(a))
            return i = pt(a.length, i), !0;
        }), nl(i, function(a) {
          return Qe(n, Qa(a));
        });
      }
      function Jd(n, i) {
        if (!(n && n.length))
          return [];
        var a = Fl(n);
        return i == null ? a : Qe(a, function(d) {
          return Gt(i, r, d);
        });
      }
      var s1 = Ce(function(n, i) {
        return lt(n) ? io(n, i) : [];
      }), a1 = Ce(function(n) {
        return Cl(lr(n, lt));
      }), l1 = Ce(function(n) {
        var i = fn(n);
        return lt(i) && (i = r), Cl(lr(n, lt), ae(i, 2));
      }), c1 = Ce(function(n) {
        var i = fn(n);
        return i = typeof i == "function" ? i : r, Cl(lr(n, lt), r, i);
      }), u1 = Ce(Fl);
      function f1(n, i) {
        return gd(n || [], i || [], ro);
      }
      function d1(n, i) {
        return gd(n || [], i || [], ao);
      }
      var h1 = Ce(function(n) {
        var i = n.length, a = i > 1 ? n[i - 1] : r;
        return a = typeof a == "function" ? (n.pop(), a) : r, Jd(n, a);
      });
      function Qd(n) {
        var i = w(n);
        return i.__chain__ = !0, i;
      }
      function p1(n, i) {
        return i(n), n;
      }
      function _s(n, i) {
        return i(n);
      }
      var m1 = Hn(function(n) {
        var i = n.length, a = i ? n[0] : 0, d = this.__wrapped__, m = function(b) {
          return ul(b, n);
        };
        return i > 1 || this.__actions__.length || !(d instanceof Oe) || !zn(a) ? this.thru(m) : (d = d.slice(a, +a + (i ? 1 : 0)), d.__actions__.push({
          func: _s,
          args: [m],
          thisArg: r
        }), new ln(d, this.__chain__).thru(function(b) {
          return i && !b.length && b.push(r), b;
        }));
      });
      function g1() {
        return Qd(this);
      }
      function v1() {
        return new ln(this.value(), this.__chain__);
      }
      function y1() {
        this.__values__ === r && (this.__values__ = hh(this.value()));
        var n = this.__index__ >= this.__values__.length, i = n ? r : this.__values__[this.__index__++];
        return { done: n, value: i };
      }
      function x1() {
        return this;
      }
      function w1(n) {
        for (var i, a = this; a instanceof us; ) {
          var d = Gd(a);
          d.__index__ = 0, d.__values__ = r, i ? m.__wrapped__ = d : i = d;
          var m = d;
          a = a.__wrapped__;
        }
        return m.__wrapped__ = n, i;
      }
      function b1() {
        var n = this.__wrapped__;
        if (n instanceof Oe) {
          var i = n;
          return this.__actions__.length && (i = new Oe(this)), i = i.reverse(), i.__actions__.push({
            func: _s,
            args: [Vl],
            thisArg: r
          }), new ln(i, this.__chain__);
        }
        return this.thru(Vl);
      }
      function S1() {
        return md(this.__wrapped__, this.__actions__);
      }
      var C1 = vs(function(n, i, a) {
        Ue.call(n, a) ? ++n[a] : $n(n, a, 1);
      });
      function T1(n, i, a) {
        var d = me(n) ? Af : pw;
        return a && It(n, i, a) && (i = r), d(n, ae(i, 3));
      }
      function _1(n, i) {
        var a = me(n) ? lr : Jf;
        return a(n, ae(i, 3));
      }
      var P1 = Pd(Kd), E1 = Pd(Yd);
      function A1(n, i) {
        return wt(Ps(n, i), 1);
      }
      function R1(n, i) {
        return wt(Ps(n, i), Z);
      }
      function N1(n, i, a) {
        return a = a === r ? 1 : ye(a), wt(Ps(n, i), a);
      }
      function eh(n, i) {
        var a = me(n) ? sn : dr;
        return a(n, ae(i, 3));
      }
      function th(n, i) {
        var a = me(n) ? q0 : Zf;
        return a(n, ae(i, 3));
      }
      var M1 = vs(function(n, i, a) {
        Ue.call(n, a) ? n[a].push(i) : $n(n, a, [i]);
      });
      function O1(n, i, a, d) {
        n = Wt(n) ? n : Si(n), a = a && !d ? ye(a) : 0;
        var m = n.length;
        return a < 0 && (a = pt(m + a, 0)), Ms(n) ? a <= m && n.indexOf(i, a) > -1 : !!m && ui(n, i, a) > -1;
      }
      var D1 = Ce(function(n, i, a) {
        var d = -1, m = typeof i == "function", b = Wt(n) ? L(n.length) : [];
        return dr(n, function(P) {
          b[++d] = m ? Gt(i, P, a) : oo(P, i, a);
        }), b;
      }), I1 = vs(function(n, i, a) {
        $n(n, a, i);
      });
      function Ps(n, i) {
        var a = me(n) ? Qe : id;
        return a(n, ae(i, 3));
      }
      function L1(n, i, a, d) {
        return n == null ? [] : (me(i) || (i = i == null ? [] : [i]), a = d ? r : a, me(a) || (a = a == null ? [] : [a]), ld(n, i, a));
      }
      var j1 = vs(function(n, i, a) {
        n[a ? 0 : 1].push(i);
      }, function() {
        return [[], []];
      });
      function k1(n, i, a) {
        var d = me(n) ? Za : Of, m = arguments.length < 3;
        return d(n, ae(i, 4), a, m, dr);
      }
      function V1(n, i, a) {
        var d = me(n) ? X0 : Of, m = arguments.length < 3;
        return d(n, ae(i, 4), a, m, Zf);
      }
      function F1(n, i) {
        var a = me(n) ? lr : Jf;
        return a(n, Rs(ae(i, 3)));
      }
      function B1(n) {
        var i = me(n) ? Kf : Ow;
        return i(n);
      }
      function W1(n, i, a) {
        (a ? It(n, i, a) : i === r) ? i = 1 : i = ye(i);
        var d = me(n) ? cw : Dw;
        return d(n, i);
      }
      function $1(n) {
        var i = me(n) ? uw : Lw;
        return i(n);
      }
      function U1(n) {
        if (n == null)
          return 0;
        if (Wt(n))
          return Ms(n) ? di(n) : n.length;
        var i = Et(n);
        return i == Ke || i == Ot ? n.size : gl(n).length;
      }
      function H1(n, i, a) {
        var d = me(n) ? Ja : jw;
        return a && It(n, i, a) && (i = r), d(n, ae(i, 3));
      }
      var z1 = Ce(function(n, i) {
        if (n == null)
          return [];
        var a = i.length;
        return a > 1 && It(n, i[0], i[1]) ? i = [] : a > 2 && It(i[0], i[1], i[2]) && (i = [i[0]]), ld(n, wt(i, 1), []);
      }), Es = _x || function() {
        return xt.Date.now();
      };
      function G1(n, i) {
        if (typeof i != "function")
          throw new an(l);
        return n = ye(n), function() {
          if (--n < 1)
            return i.apply(this, arguments);
        };
      }
      function nh(n, i, a) {
        return i = a ? r : i, i = n && i == null ? n.length : i, Un(n, $, r, r, r, r, i);
      }
      function rh(n, i) {
        var a;
        if (typeof i != "function")
          throw new an(l);
        return n = ye(n), function() {
          return --n > 0 && (a = i.apply(this, arguments)), n <= 1 && (i = r), a;
        };
      }
      var Bl = Ce(function(n, i, a) {
        var d = _;
        if (a.length) {
          var m = ur(a, wi(Bl));
          d |= j;
        }
        return Un(n, d, i, a, m);
      }), ih = Ce(function(n, i, a) {
        var d = _ | E;
        if (a.length) {
          var m = ur(a, wi(ih));
          d |= j;
        }
        return Un(i, d, n, a, m);
      });
      function oh(n, i, a) {
        i = a ? r : i;
        var d = Un(n, M, r, r, r, r, r, i);
        return d.placeholder = oh.placeholder, d;
      }
      function sh(n, i, a) {
        i = a ? r : i;
        var d = Un(n, I, r, r, r, r, r, i);
        return d.placeholder = sh.placeholder, d;
      }
      function ah(n, i, a) {
        var d, m, b, P, N, D, V = 0, F = !1, B = !1, K = !0;
        if (typeof n != "function")
          throw new an(l);
        i = dn(i) || 0, tt(a) && (F = !!a.leading, B = "maxWait" in a, b = B ? pt(dn(a.maxWait) || 0, i) : b, K = "trailing" in a ? !!a.trailing : K);
        function ee(ct) {
          var xn = d, Yn = m;
          return d = m = r, V = ct, P = n.apply(Yn, xn), P;
        }
        function le(ct) {
          return V = ct, N = uo(Ne, i), F ? ee(ct) : P;
        }
        function be(ct) {
          var xn = ct - D, Yn = ct - V, Ph = i - xn;
          return B ? Pt(Ph, b - Yn) : Ph;
        }
        function ce(ct) {
          var xn = ct - D, Yn = ct - V;
          return D === r || xn >= i || xn < 0 || B && Yn >= b;
        }
        function Ne() {
          var ct = Es();
          if (ce(ct))
            return Ie(ct);
          N = uo(Ne, be(ct));
        }
        function Ie(ct) {
          return N = r, K && d ? ee(ct) : (d = m = r, P);
        }
        function Xt() {
          N !== r && vd(N), V = 0, d = D = m = N = r;
        }
        function Lt() {
          return N === r ? P : Ie(Es());
        }
        function Zt() {
          var ct = Es(), xn = ce(ct);
          if (d = arguments, m = this, D = ct, xn) {
            if (N === r)
              return le(D);
            if (B)
              return vd(N), N = uo(Ne, i), ee(D);
          }
          return N === r && (N = uo(Ne, i)), P;
        }
        return Zt.cancel = Xt, Zt.flush = Lt, Zt;
      }
      var K1 = Ce(function(n, i) {
        return Xf(n, 1, i);
      }), Y1 = Ce(function(n, i, a) {
        return Xf(n, dn(i) || 0, a);
      });
      function q1(n) {
        return Un(n, te);
      }
      function As(n, i) {
        if (typeof n != "function" || i != null && typeof i != "function")
          throw new an(l);
        var a = function() {
          var d = arguments, m = i ? i.apply(this, d) : d[0], b = a.cache;
          if (b.has(m))
            return b.get(m);
          var P = n.apply(this, d);
          return a.cache = b.set(m, P) || b, P;
        };
        return a.cache = new (As.Cache || Wn)(), a;
      }
      As.Cache = Wn;
      function Rs(n) {
        if (typeof n != "function")
          throw new an(l);
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
      function X1(n) {
        return rh(2, n);
      }
      var Z1 = kw(function(n, i) {
        i = i.length == 1 && me(i[0]) ? Qe(i[0], Kt(ae())) : Qe(wt(i, 1), Kt(ae()));
        var a = i.length;
        return Ce(function(d) {
          for (var m = -1, b = Pt(d.length, a); ++m < b; )
            d[m] = i[m].call(this, d[m]);
          return Gt(n, this, d);
        });
      }), Wl = Ce(function(n, i) {
        var a = ur(i, wi(Wl));
        return Un(n, j, r, i, a);
      }), lh = Ce(function(n, i) {
        var a = ur(i, wi(lh));
        return Un(n, U, r, i, a);
      }), J1 = Hn(function(n, i) {
        return Un(n, H, r, r, r, i);
      });
      function Q1(n, i) {
        if (typeof n != "function")
          throw new an(l);
        return i = i === r ? i : ye(i), Ce(n, i);
      }
      function eS(n, i) {
        if (typeof n != "function")
          throw new an(l);
        return i = i == null ? 0 : pt(ye(i), 0), Ce(function(a) {
          var d = a[i], m = mr(a, 0, i);
          return d && cr(m, d), Gt(n, this, m);
        });
      }
      function tS(n, i, a) {
        var d = !0, m = !0;
        if (typeof n != "function")
          throw new an(l);
        return tt(a) && (d = "leading" in a ? !!a.leading : d, m = "trailing" in a ? !!a.trailing : m), ah(n, i, {
          leading: d,
          maxWait: i,
          trailing: m
        });
      }
      function nS(n) {
        return nh(n, 1);
      }
      function rS(n, i) {
        return Wl(_l(i), n);
      }
      function iS() {
        if (!arguments.length)
          return [];
        var n = arguments[0];
        return me(n) ? n : [n];
      }
      function oS(n) {
        return cn(n, g);
      }
      function sS(n, i) {
        return i = typeof i == "function" ? i : r, cn(n, g, i);
      }
      function aS(n) {
        return cn(n, v | g);
      }
      function lS(n, i) {
        return i = typeof i == "function" ? i : r, cn(n, v | g, i);
      }
      function cS(n, i) {
        return i == null || qf(n, i, mt(i));
      }
      function yn(n, i) {
        return n === i || n !== n && i !== i;
      }
      var uS = bs(hl), fS = bs(function(n, i) {
        return n >= i;
      }), Kr = td(/* @__PURE__ */ function() {
        return arguments;
      }()) ? td : function(n) {
        return ot(n) && Ue.call(n, "callee") && !Wf.call(n, "callee");
      }, me = L.isArray, dS = Sf ? Kt(Sf) : ww;
      function Wt(n) {
        return n != null && Ns(n.length) && !Gn(n);
      }
      function lt(n) {
        return ot(n) && Wt(n);
      }
      function hS(n) {
        return n === !0 || n === !1 || ot(n) && Dt(n) == we;
      }
      var gr = Ex || Jl, pS = Cf ? Kt(Cf) : bw;
      function mS(n) {
        return ot(n) && n.nodeType === 1 && !fo(n);
      }
      function gS(n) {
        if (n == null)
          return !0;
        if (Wt(n) && (me(n) || typeof n == "string" || typeof n.splice == "function" || gr(n) || bi(n) || Kr(n)))
          return !n.length;
        var i = Et(n);
        if (i == Ke || i == Ot)
          return !n.size;
        if (co(n))
          return !gl(n).length;
        for (var a in n)
          if (Ue.call(n, a))
            return !1;
        return !0;
      }
      function vS(n, i) {
        return so(n, i);
      }
      function yS(n, i, a) {
        a = typeof a == "function" ? a : r;
        var d = a ? a(n, i) : r;
        return d === r ? so(n, i, r, a) : !!d;
      }
      function $l(n) {
        if (!ot(n))
          return !1;
        var i = Dt(n);
        return i == ve || i == Se || typeof n.message == "string" && typeof n.name == "string" && !fo(n);
      }
      function xS(n) {
        return typeof n == "number" && Uf(n);
      }
      function Gn(n) {
        if (!tt(n))
          return !1;
        var i = Dt(n);
        return i == Pe || i == st || i == X || i == kt;
      }
      function ch(n) {
        return typeof n == "number" && n == ye(n);
      }
      function Ns(n) {
        return typeof n == "number" && n > -1 && n % 1 == 0 && n <= q;
      }
      function tt(n) {
        var i = typeof n;
        return n != null && (i == "object" || i == "function");
      }
      function ot(n) {
        return n != null && typeof n == "object";
      }
      var uh = Tf ? Kt(Tf) : Cw;
      function wS(n, i) {
        return n === i || ml(n, i, Ol(i));
      }
      function bS(n, i, a) {
        return a = typeof a == "function" ? a : r, ml(n, i, Ol(i), a);
      }
      function SS(n) {
        return fh(n) && n != +n;
      }
      function CS(n) {
        if (sb(n))
          throw new he(c);
        return nd(n);
      }
      function TS(n) {
        return n === null;
      }
      function _S(n) {
        return n == null;
      }
      function fh(n) {
        return typeof n == "number" || ot(n) && Dt(n) == ft;
      }
      function fo(n) {
        if (!ot(n) || Dt(n) != at)
          return !1;
        var i = rs(n);
        if (i === null)
          return !0;
        var a = Ue.call(i, "constructor") && i.constructor;
        return typeof a == "function" && a instanceof a && Qo.call(a) == bx;
      }
      var Ul = _f ? Kt(_f) : Tw;
      function PS(n) {
        return ch(n) && n >= -q && n <= q;
      }
      var dh = Pf ? Kt(Pf) : _w;
      function Ms(n) {
        return typeof n == "string" || !me(n) && ot(n) && Dt(n) == mn;
      }
      function qt(n) {
        return typeof n == "symbol" || ot(n) && Dt(n) == dt;
      }
      var bi = Ef ? Kt(Ef) : Pw;
      function ES(n) {
        return n === r;
      }
      function AS(n) {
        return ot(n) && Et(n) == _n;
      }
      function RS(n) {
        return ot(n) && Dt(n) == oi;
      }
      var NS = bs(vl), MS = bs(function(n, i) {
        return n <= i;
      });
      function hh(n) {
        if (!n)
          return [];
        if (Wt(n))
          return Ms(n) ? gn(n) : Bt(n);
        if (Ji && n[Ji])
          return cx(n[Ji]());
        var i = Et(n), a = i == Ke ? il : i == Ot ? Xo : Si;
        return a(n);
      }
      function Kn(n) {
        if (!n)
          return n === 0 ? n : 0;
        if (n = dn(n), n === Z || n === -Z) {
          var i = n < 0 ? -1 : 1;
          return i * G;
        }
        return n === n ? n : 0;
      }
      function ye(n) {
        var i = Kn(n), a = i % 1;
        return i === i ? a ? i - a : i : 0;
      }
      function ph(n) {
        return n ? Ur(ye(n), 0, Ae) : 0;
      }
      function dn(n) {
        if (typeof n == "number")
          return n;
        if (qt(n))
          return pe;
        if (tt(n)) {
          var i = typeof n.valueOf == "function" ? n.valueOf() : n;
          n = tt(i) ? i + "" : i;
        }
        if (typeof n != "string")
          return n === 0 ? n : +n;
        n = Df(n);
        var a = Me.test(n);
        return a || vt.test(n) ? G0(n.slice(2), a ? 2 : 8) : $e.test(n) ? pe : +n;
      }
      function mh(n) {
        return Mn(n, $t(n));
      }
      function OS(n) {
        return n ? Ur(ye(n), -q, q) : n === 0 ? n : 0;
      }
      function We(n) {
        return n == null ? "" : Yt(n);
      }
      var DS = yi(function(n, i) {
        if (co(i) || Wt(i)) {
          Mn(i, mt(i), n);
          return;
        }
        for (var a in i)
          Ue.call(i, a) && ro(n, a, i[a]);
      }), gh = yi(function(n, i) {
        Mn(i, $t(i), n);
      }), Os = yi(function(n, i, a, d) {
        Mn(i, $t(i), n, d);
      }), IS = yi(function(n, i, a, d) {
        Mn(i, mt(i), n, d);
      }), LS = Hn(ul);
      function jS(n, i) {
        var a = vi(n);
        return i == null ? a : Yf(a, i);
      }
      var kS = Ce(function(n, i) {
        n = Ge(n);
        var a = -1, d = i.length, m = d > 2 ? i[2] : r;
        for (m && It(i[0], i[1], m) && (d = 1); ++a < d; )
          for (var b = i[a], P = $t(b), N = -1, D = P.length; ++N < D; ) {
            var V = P[N], F = n[V];
            (F === r || yn(F, pi[V]) && !Ue.call(n, V)) && (n[V] = b[V]);
          }
        return n;
      }), VS = Ce(function(n) {
        return n.push(r, Dd), Gt(vh, r, n);
      });
      function FS(n, i) {
        return Rf(n, ae(i, 3), Nn);
      }
      function BS(n, i) {
        return Rf(n, ae(i, 3), dl);
      }
      function WS(n, i) {
        return n == null ? n : fl(n, ae(i, 3), $t);
      }
      function $S(n, i) {
        return n == null ? n : Qf(n, ae(i, 3), $t);
      }
      function US(n, i) {
        return n && Nn(n, ae(i, 3));
      }
      function HS(n, i) {
        return n && dl(n, ae(i, 3));
      }
      function zS(n) {
        return n == null ? [] : hs(n, mt(n));
      }
      function GS(n) {
        return n == null ? [] : hs(n, $t(n));
      }
      function Hl(n, i, a) {
        var d = n == null ? r : Hr(n, i);
        return d === r ? a : d;
      }
      function KS(n, i) {
        return n != null && jd(n, i, gw);
      }
      function zl(n, i) {
        return n != null && jd(n, i, vw);
      }
      var YS = Ad(function(n, i, a) {
        i != null && typeof i.toString != "function" && (i = es.call(i)), n[i] = a;
      }, Kl(Ut)), qS = Ad(function(n, i, a) {
        i != null && typeof i.toString != "function" && (i = es.call(i)), Ue.call(n, i) ? n[i].push(a) : n[i] = [a];
      }, ae), XS = Ce(oo);
      function mt(n) {
        return Wt(n) ? Gf(n) : gl(n);
      }
      function $t(n) {
        return Wt(n) ? Gf(n, !0) : Ew(n);
      }
      function ZS(n, i) {
        var a = {};
        return i = ae(i, 3), Nn(n, function(d, m, b) {
          $n(a, i(d, m, b), d);
        }), a;
      }
      function JS(n, i) {
        var a = {};
        return i = ae(i, 3), Nn(n, function(d, m, b) {
          $n(a, m, i(d, m, b));
        }), a;
      }
      var QS = yi(function(n, i, a) {
        ps(n, i, a);
      }), vh = yi(function(n, i, a, d) {
        ps(n, i, a, d);
      }), eC = Hn(function(n, i) {
        var a = {};
        if (n == null)
          return a;
        var d = !1;
        i = Qe(i, function(b) {
          return b = pr(b, n), d || (d = b.length > 1), b;
        }), Mn(n, Nl(n), a), d && (a = cn(a, v | x | g, Yw));
        for (var m = i.length; m--; )
          Sl(a, i[m]);
        return a;
      });
      function tC(n, i) {
        return yh(n, Rs(ae(i)));
      }
      var nC = Hn(function(n, i) {
        return n == null ? {} : Rw(n, i);
      });
      function yh(n, i) {
        if (n == null)
          return {};
        var a = Qe(Nl(n), function(d) {
          return [d];
        });
        return i = ae(i), cd(n, a, function(d, m) {
          return i(d, m[0]);
        });
      }
      function rC(n, i, a) {
        i = pr(i, n);
        var d = -1, m = i.length;
        for (m || (m = 1, n = r); ++d < m; ) {
          var b = n == null ? r : n[On(i[d])];
          b === r && (d = m, b = a), n = Gn(b) ? b.call(n) : b;
        }
        return n;
      }
      function iC(n, i, a) {
        return n == null ? n : ao(n, i, a);
      }
      function oC(n, i, a, d) {
        return d = typeof d == "function" ? d : r, n == null ? n : ao(n, i, a, d);
      }
      var xh = Md(mt), wh = Md($t);
      function sC(n, i, a) {
        var d = me(n), m = d || gr(n) || bi(n);
        if (i = ae(i, 4), a == null) {
          var b = n && n.constructor;
          m ? a = d ? new b() : [] : tt(n) ? a = Gn(b) ? vi(rs(n)) : {} : a = {};
        }
        return (m ? sn : Nn)(n, function(P, N, D) {
          return i(a, P, N, D);
        }), a;
      }
      function aC(n, i) {
        return n == null ? !0 : Sl(n, i);
      }
      function lC(n, i, a) {
        return n == null ? n : pd(n, i, _l(a));
      }
      function cC(n, i, a, d) {
        return d = typeof d == "function" ? d : r, n == null ? n : pd(n, i, _l(a), d);
      }
      function Si(n) {
        return n == null ? [] : rl(n, mt(n));
      }
      function uC(n) {
        return n == null ? [] : rl(n, $t(n));
      }
      function fC(n, i, a) {
        return a === r && (a = i, i = r), a !== r && (a = dn(a), a = a === a ? a : 0), i !== r && (i = dn(i), i = i === i ? i : 0), Ur(dn(n), i, a);
      }
      function dC(n, i, a) {
        return i = Kn(i), a === r ? (a = i, i = 0) : a = Kn(a), n = dn(n), yw(n, i, a);
      }
      function hC(n, i, a) {
        if (a && typeof a != "boolean" && It(n, i, a) && (i = a = r), a === r && (typeof i == "boolean" ? (a = i, i = r) : typeof n == "boolean" && (a = n, n = r)), n === r && i === r ? (n = 0, i = 1) : (n = Kn(n), i === r ? (i = n, n = 0) : i = Kn(i)), n > i) {
          var d = n;
          n = i, i = d;
        }
        if (a || n % 1 || i % 1) {
          var m = Hf();
          return Pt(n + m * (i - n + z0("1e-" + ((m + "").length - 1))), i);
        }
        return xl(n, i);
      }
      var pC = xi(function(n, i, a) {
        return i = i.toLowerCase(), n + (a ? bh(i) : i);
      });
      function bh(n) {
        return Gl(We(n).toLowerCase());
      }
      function Sh(n) {
        return n = We(n), n && n.replace(it, ix).replace(L0, "");
      }
      function mC(n, i, a) {
        n = We(n), i = Yt(i);
        var d = n.length;
        a = a === r ? d : Ur(ye(a), 0, d);
        var m = a;
        return a -= i.length, a >= 0 && n.slice(a, m) == i;
      }
      function gC(n) {
        return n = We(n), n && Tt.test(n) ? n.replace(De, ox) : n;
      }
      function vC(n) {
        return n = We(n), n && zo.test(n) ? n.replace(qi, "\\$&") : n;
      }
      var yC = xi(function(n, i, a) {
        return n + (a ? "-" : "") + i.toLowerCase();
      }), xC = xi(function(n, i, a) {
        return n + (a ? " " : "") + i.toLowerCase();
      }), wC = _d("toLowerCase");
      function bC(n, i, a) {
        n = We(n), i = ye(i);
        var d = i ? di(n) : 0;
        if (!i || d >= i)
          return n;
        var m = (i - d) / 2;
        return ws(as(m), a) + n + ws(ss(m), a);
      }
      function SC(n, i, a) {
        n = We(n), i = ye(i);
        var d = i ? di(n) : 0;
        return i && d < i ? n + ws(i - d, a) : n;
      }
      function CC(n, i, a) {
        n = We(n), i = ye(i);
        var d = i ? di(n) : 0;
        return i && d < i ? ws(i - d, a) + n : n;
      }
      function TC(n, i, a) {
        return a || i == null ? i = 0 : i && (i = +i), Mx(We(n).replace(li, ""), i || 0);
      }
      function _C(n, i, a) {
        return (a ? It(n, i, a) : i === r) ? i = 1 : i = ye(i), wl(We(n), i);
      }
      function PC() {
        var n = arguments, i = We(n[0]);
        return n.length < 3 ? i : i.replace(n[1], n[2]);
      }
      var EC = xi(function(n, i, a) {
        return n + (a ? "_" : "") + i.toLowerCase();
      });
      function AC(n, i, a) {
        return a && typeof a != "number" && It(n, i, a) && (i = a = r), a = a === r ? Ae : a >>> 0, a ? (n = We(n), n && (typeof i == "string" || i != null && !Ul(i)) && (i = Yt(i), !i && fi(n)) ? mr(gn(n), 0, a) : n.split(i, a)) : [];
      }
      var RC = xi(function(n, i, a) {
        return n + (a ? " " : "") + Gl(i);
      });
      function NC(n, i, a) {
        return n = We(n), a = a == null ? 0 : Ur(ye(a), 0, n.length), i = Yt(i), n.slice(a, a + i.length) == i;
      }
      function MC(n, i, a) {
        var d = w.templateSettings;
        a && It(n, i, a) && (i = r), n = We(n), i = Os({}, i, d, Od);
        var m = Os({}, i.imports, d.imports, Od), b = mt(m), P = rl(m, b), N, D, V = 0, F = i.interpolate || yt, B = "__p += '", K = ol(
          (i.escape || yt).source + "|" + F.source + "|" + (F === ai ? fe : yt).source + "|" + (i.evaluate || yt).source + "|$",
          "g"
        ), ee = "//# sourceURL=" + (Ue.call(i, "sourceURL") ? (i.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++B0 + "]") + `
`;
        n.replace(K, function(ce, Ne, Ie, Xt, Lt, Zt) {
          return Ie || (Ie = Xt), B += n.slice(V, Zt).replace(ar, sx), Ne && (N = !0, B += `' +
__e(` + Ne + `) +
'`), Lt && (D = !0, B += `';
` + Lt + `;
__p += '`), Ie && (B += `' +
((__t = (` + Ie + `)) == null ? '' : __t) +
'`), V = Zt + ce.length, ce;
        }), B += `';
`;
        var le = Ue.call(i, "variable") && i.variable;
        if (!le)
          B = `with (obj) {
` + B + `
}
`;
        else if (W.test(le))
          throw new he(u);
        B = (D ? B.replace(Vr, "") : B).replace(Vt, "$1").replace(si, "$1;"), B = "function(" + (le || "obj") + `) {
` + (le ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (N ? ", __e = _.escape" : "") + (D ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + B + `return __p
}`;
        var be = Th(function() {
          return ke(b, ee + "return " + B).apply(r, P);
        });
        if (be.source = B, $l(be))
          throw be;
        return be;
      }
      function OC(n) {
        return We(n).toLowerCase();
      }
      function DC(n) {
        return We(n).toUpperCase();
      }
      function IC(n, i, a) {
        if (n = We(n), n && (a || i === r))
          return Df(n);
        if (!n || !(i = Yt(i)))
          return n;
        var d = gn(n), m = gn(i), b = If(d, m), P = Lf(d, m) + 1;
        return mr(d, b, P).join("");
      }
      function LC(n, i, a) {
        if (n = We(n), n && (a || i === r))
          return n.slice(0, kf(n) + 1);
        if (!n || !(i = Yt(i)))
          return n;
        var d = gn(n), m = Lf(d, gn(i)) + 1;
        return mr(d, 0, m).join("");
      }
      function jC(n, i, a) {
        if (n = We(n), n && (a || i === r))
          return n.replace(li, "");
        if (!n || !(i = Yt(i)))
          return n;
        var d = gn(n), m = If(d, gn(i));
        return mr(d, m).join("");
      }
      function kC(n, i) {
        var a = re, d = de;
        if (tt(i)) {
          var m = "separator" in i ? i.separator : m;
          a = "length" in i ? ye(i.length) : a, d = "omission" in i ? Yt(i.omission) : d;
        }
        n = We(n);
        var b = n.length;
        if (fi(n)) {
          var P = gn(n);
          b = P.length;
        }
        if (a >= b)
          return n;
        var N = a - di(d);
        if (N < 1)
          return d;
        var D = P ? mr(P, 0, N).join("") : n.slice(0, N);
        if (m === r)
          return D + d;
        if (P && (N += D.length - N), Ul(m)) {
          if (n.slice(N).search(m)) {
            var V, F = D;
            for (m.global || (m = ol(m.source, We(Le.exec(m)) + "g")), m.lastIndex = 0; V = m.exec(F); )
              var B = V.index;
            D = D.slice(0, B === r ? N : B);
          }
        } else if (n.indexOf(Yt(m), N) != N) {
          var K = D.lastIndexOf(m);
          K > -1 && (D = D.slice(0, K));
        }
        return D + d;
      }
      function VC(n) {
        return n = We(n), n && Be.test(n) ? n.replace(oe, hx) : n;
      }
      var FC = xi(function(n, i, a) {
        return n + (a ? " " : "") + i.toUpperCase();
      }), Gl = _d("toUpperCase");
      function Ch(n, i, a) {
        return n = We(n), i = a ? r : i, i === r ? lx(n) ? gx(n) : Q0(n) : n.match(i) || [];
      }
      var Th = Ce(function(n, i) {
        try {
          return Gt(n, r, i);
        } catch (a) {
          return $l(a) ? a : new he(a);
        }
      }), BC = Hn(function(n, i) {
        return sn(i, function(a) {
          a = On(a), $n(n, a, Bl(n[a], n));
        }), n;
      });
      function WC(n) {
        var i = n == null ? 0 : n.length, a = ae();
        return n = i ? Qe(n, function(d) {
          if (typeof d[1] != "function")
            throw new an(l);
          return [a(d[0]), d[1]];
        }) : [], Ce(function(d) {
          for (var m = -1; ++m < i; ) {
            var b = n[m];
            if (Gt(b[0], this, d))
              return Gt(b[1], this, d);
          }
        });
      }
      function $C(n) {
        return hw(cn(n, v));
      }
      function Kl(n) {
        return function() {
          return n;
        };
      }
      function UC(n, i) {
        return n == null || n !== n ? i : n;
      }
      var HC = Ed(), zC = Ed(!0);
      function Ut(n) {
        return n;
      }
      function Yl(n) {
        return rd(typeof n == "function" ? n : cn(n, v));
      }
      function GC(n) {
        return od(cn(n, v));
      }
      function KC(n, i) {
        return sd(n, cn(i, v));
      }
      var YC = Ce(function(n, i) {
        return function(a) {
          return oo(a, n, i);
        };
      }), qC = Ce(function(n, i) {
        return function(a) {
          return oo(n, a, i);
        };
      });
      function ql(n, i, a) {
        var d = mt(i), m = hs(i, d);
        a == null && !(tt(i) && (m.length || !d.length)) && (a = i, i = n, n = this, m = hs(i, mt(i)));
        var b = !(tt(a) && "chain" in a) || !!a.chain, P = Gn(n);
        return sn(m, function(N) {
          var D = i[N];
          n[N] = D, P && (n.prototype[N] = function() {
            var V = this.__chain__;
            if (b || V) {
              var F = n(this.__wrapped__), B = F.__actions__ = Bt(this.__actions__);
              return B.push({ func: D, args: arguments, thisArg: n }), F.__chain__ = V, F;
            }
            return D.apply(n, cr([this.value()], arguments));
          });
        }), n;
      }
      function XC() {
        return xt._ === this && (xt._ = Sx), this;
      }
      function Xl() {
      }
      function ZC(n) {
        return n = ye(n), Ce(function(i) {
          return ad(i, n);
        });
      }
      var JC = El(Qe), QC = El(Af), eT = El(Ja);
      function _h(n) {
        return Il(n) ? Qa(On(n)) : Nw(n);
      }
      function tT(n) {
        return function(i) {
          return n == null ? r : Hr(n, i);
        };
      }
      var nT = Rd(), rT = Rd(!0);
      function Zl() {
        return [];
      }
      function Jl() {
        return !1;
      }
      function iT() {
        return {};
      }
      function oT() {
        return "";
      }
      function sT() {
        return !0;
      }
      function aT(n, i) {
        if (n = ye(n), n < 1 || n > q)
          return [];
        var a = Ae, d = Pt(n, Ae);
        i = ae(i), n -= Ae;
        for (var m = nl(d, i); ++a < n; )
          i(a);
        return m;
      }
      function lT(n) {
        return me(n) ? Qe(n, On) : qt(n) ? [n] : Bt(zd(We(n)));
      }
      function cT(n) {
        var i = ++wx;
        return We(n) + i;
      }
      var uT = xs(function(n, i) {
        return n + i;
      }, 0), fT = Al("ceil"), dT = xs(function(n, i) {
        return n / i;
      }, 1), hT = Al("floor");
      function pT(n) {
        return n && n.length ? ds(n, Ut, hl) : r;
      }
      function mT(n, i) {
        return n && n.length ? ds(n, ae(i, 2), hl) : r;
      }
      function gT(n) {
        return Mf(n, Ut);
      }
      function vT(n, i) {
        return Mf(n, ae(i, 2));
      }
      function yT(n) {
        return n && n.length ? ds(n, Ut, vl) : r;
      }
      function xT(n, i) {
        return n && n.length ? ds(n, ae(i, 2), vl) : r;
      }
      var wT = xs(function(n, i) {
        return n * i;
      }, 1), bT = Al("round"), ST = xs(function(n, i) {
        return n - i;
      }, 0);
      function CT(n) {
        return n && n.length ? tl(n, Ut) : 0;
      }
      function TT(n, i) {
        return n && n.length ? tl(n, ae(i, 2)) : 0;
      }
      return w.after = G1, w.ary = nh, w.assign = DS, w.assignIn = gh, w.assignInWith = Os, w.assignWith = IS, w.at = LS, w.before = rh, w.bind = Bl, w.bindAll = BC, w.bindKey = ih, w.castArray = iS, w.chain = Qd, w.chunk = hb, w.compact = pb, w.concat = mb, w.cond = WC, w.conforms = $C, w.constant = Kl, w.countBy = C1, w.create = jS, w.curry = oh, w.curryRight = sh, w.debounce = ah, w.defaults = kS, w.defaultsDeep = VS, w.defer = K1, w.delay = Y1, w.difference = gb, w.differenceBy = vb, w.differenceWith = yb, w.drop = xb, w.dropRight = wb, w.dropRightWhile = bb, w.dropWhile = Sb, w.fill = Cb, w.filter = _1, w.flatMap = A1, w.flatMapDeep = R1, w.flatMapDepth = N1, w.flatten = qd, w.flattenDeep = Tb, w.flattenDepth = _b, w.flip = q1, w.flow = HC, w.flowRight = zC, w.fromPairs = Pb, w.functions = zS, w.functionsIn = GS, w.groupBy = M1, w.initial = Ab, w.intersection = Rb, w.intersectionBy = Nb, w.intersectionWith = Mb, w.invert = YS, w.invertBy = qS, w.invokeMap = D1, w.iteratee = Yl, w.keyBy = I1, w.keys = mt, w.keysIn = $t, w.map = Ps, w.mapKeys = ZS, w.mapValues = JS, w.matches = GC, w.matchesProperty = KC, w.memoize = As, w.merge = QS, w.mergeWith = vh, w.method = YC, w.methodOf = qC, w.mixin = ql, w.negate = Rs, w.nthArg = ZC, w.omit = eC, w.omitBy = tC, w.once = X1, w.orderBy = L1, w.over = JC, w.overArgs = Z1, w.overEvery = QC, w.overSome = eT, w.partial = Wl, w.partialRight = lh, w.partition = j1, w.pick = nC, w.pickBy = yh, w.property = _h, w.propertyOf = tT, w.pull = Lb, w.pullAll = Zd, w.pullAllBy = jb, w.pullAllWith = kb, w.pullAt = Vb, w.range = nT, w.rangeRight = rT, w.rearg = J1, w.reject = F1, w.remove = Fb, w.rest = Q1, w.reverse = Vl, w.sampleSize = W1, w.set = iC, w.setWith = oC, w.shuffle = $1, w.slice = Bb, w.sortBy = z1, w.sortedUniq = Kb, w.sortedUniqBy = Yb, w.split = AC, w.spread = eS, w.tail = qb, w.take = Xb, w.takeRight = Zb, w.takeRightWhile = Jb, w.takeWhile = Qb, w.tap = p1, w.throttle = tS, w.thru = _s, w.toArray = hh, w.toPairs = xh, w.toPairsIn = wh, w.toPath = lT, w.toPlainObject = mh, w.transform = sC, w.unary = nS, w.union = e1, w.unionBy = t1, w.unionWith = n1, w.uniq = r1, w.uniqBy = i1, w.uniqWith = o1, w.unset = aC, w.unzip = Fl, w.unzipWith = Jd, w.update = lC, w.updateWith = cC, w.values = Si, w.valuesIn = uC, w.without = s1, w.words = Ch, w.wrap = rS, w.xor = a1, w.xorBy = l1, w.xorWith = c1, w.zip = u1, w.zipObject = f1, w.zipObjectDeep = d1, w.zipWith = h1, w.entries = xh, w.entriesIn = wh, w.extend = gh, w.extendWith = Os, ql(w, w), w.add = uT, w.attempt = Th, w.camelCase = pC, w.capitalize = bh, w.ceil = fT, w.clamp = fC, w.clone = oS, w.cloneDeep = aS, w.cloneDeepWith = lS, w.cloneWith = sS, w.conformsTo = cS, w.deburr = Sh, w.defaultTo = UC, w.divide = dT, w.endsWith = mC, w.eq = yn, w.escape = gC, w.escapeRegExp = vC, w.every = T1, w.find = P1, w.findIndex = Kd, w.findKey = FS, w.findLast = E1, w.findLastIndex = Yd, w.findLastKey = BS, w.floor = hT, w.forEach = eh, w.forEachRight = th, w.forIn = WS, w.forInRight = $S, w.forOwn = US, w.forOwnRight = HS, w.get = Hl, w.gt = uS, w.gte = fS, w.has = KS, w.hasIn = zl, w.head = Xd, w.identity = Ut, w.includes = O1, w.indexOf = Eb, w.inRange = dC, w.invoke = XS, w.isArguments = Kr, w.isArray = me, w.isArrayBuffer = dS, w.isArrayLike = Wt, w.isArrayLikeObject = lt, w.isBoolean = hS, w.isBuffer = gr, w.isDate = pS, w.isElement = mS, w.isEmpty = gS, w.isEqual = vS, w.isEqualWith = yS, w.isError = $l, w.isFinite = xS, w.isFunction = Gn, w.isInteger = ch, w.isLength = Ns, w.isMap = uh, w.isMatch = wS, w.isMatchWith = bS, w.isNaN = SS, w.isNative = CS, w.isNil = _S, w.isNull = TS, w.isNumber = fh, w.isObject = tt, w.isObjectLike = ot, w.isPlainObject = fo, w.isRegExp = Ul, w.isSafeInteger = PS, w.isSet = dh, w.isString = Ms, w.isSymbol = qt, w.isTypedArray = bi, w.isUndefined = ES, w.isWeakMap = AS, w.isWeakSet = RS, w.join = Ob, w.kebabCase = yC, w.last = fn, w.lastIndexOf = Db, w.lowerCase = xC, w.lowerFirst = wC, w.lt = NS, w.lte = MS, w.max = pT, w.maxBy = mT, w.mean = gT, w.meanBy = vT, w.min = yT, w.minBy = xT, w.stubArray = Zl, w.stubFalse = Jl, w.stubObject = iT, w.stubString = oT, w.stubTrue = sT, w.multiply = wT, w.nth = Ib, w.noConflict = XC, w.noop = Xl, w.now = Es, w.pad = bC, w.padEnd = SC, w.padStart = CC, w.parseInt = TC, w.random = hC, w.reduce = k1, w.reduceRight = V1, w.repeat = _C, w.replace = PC, w.result = rC, w.round = bT, w.runInContext = O, w.sample = B1, w.size = U1, w.snakeCase = EC, w.some = H1, w.sortedIndex = Wb, w.sortedIndexBy = $b, w.sortedIndexOf = Ub, w.sortedLastIndex = Hb, w.sortedLastIndexBy = zb, w.sortedLastIndexOf = Gb, w.startCase = RC, w.startsWith = NC, w.subtract = ST, w.sum = CT, w.sumBy = TT, w.template = MC, w.times = aT, w.toFinite = Kn, w.toInteger = ye, w.toLength = ph, w.toLower = OC, w.toNumber = dn, w.toSafeInteger = OS, w.toString = We, w.toUpper = DC, w.trim = IC, w.trimEnd = LC, w.trimStart = jC, w.truncate = kC, w.unescape = VC, w.uniqueId = cT, w.upperCase = FC, w.upperFirst = Gl, w.each = eh, w.eachRight = th, w.first = Xd, ql(w, function() {
        var n = {};
        return Nn(w, function(i, a) {
          Ue.call(w.prototype, a) || (n[a] = i);
        }), n;
      }(), { chain: !1 }), w.VERSION = o, sn(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(n) {
        w[n].placeholder = w;
      }), sn(["drop", "take"], function(n, i) {
        Oe.prototype[n] = function(a) {
          a = a === r ? 1 : pt(ye(a), 0);
          var d = this.__filtered__ && !i ? new Oe(this) : this.clone();
          return d.__filtered__ ? d.__takeCount__ = Pt(a, d.__takeCount__) : d.__views__.push({
            size: Pt(a, Ae),
            type: n + (d.__dir__ < 0 ? "Right" : "")
          }), d;
        }, Oe.prototype[n + "Right"] = function(a) {
          return this.reverse()[n](a).reverse();
        };
      }), sn(["filter", "map", "takeWhile"], function(n, i) {
        var a = i + 1, d = a == ne || a == ie;
        Oe.prototype[n] = function(m) {
          var b = this.clone();
          return b.__iteratees__.push({
            iteratee: ae(m, 3),
            type: a
          }), b.__filtered__ = b.__filtered__ || d, b;
        };
      }), sn(["head", "last"], function(n, i) {
        var a = "take" + (i ? "Right" : "");
        Oe.prototype[n] = function() {
          return this[a](1).value()[0];
        };
      }), sn(["initial", "tail"], function(n, i) {
        var a = "drop" + (i ? "" : "Right");
        Oe.prototype[n] = function() {
          return this.__filtered__ ? new Oe(this) : this[a](1);
        };
      }), Oe.prototype.compact = function() {
        return this.filter(Ut);
      }, Oe.prototype.find = function(n) {
        return this.filter(n).head();
      }, Oe.prototype.findLast = function(n) {
        return this.reverse().find(n);
      }, Oe.prototype.invokeMap = Ce(function(n, i) {
        return typeof n == "function" ? new Oe(this) : this.map(function(a) {
          return oo(a, n, i);
        });
      }), Oe.prototype.reject = function(n) {
        return this.filter(Rs(ae(n)));
      }, Oe.prototype.slice = function(n, i) {
        n = ye(n);
        var a = this;
        return a.__filtered__ && (n > 0 || i < 0) ? new Oe(a) : (n < 0 ? a = a.takeRight(-n) : n && (a = a.drop(n)), i !== r && (i = ye(i), a = i < 0 ? a.dropRight(-i) : a.take(i - n)), a);
      }, Oe.prototype.takeRightWhile = function(n) {
        return this.reverse().takeWhile(n).reverse();
      }, Oe.prototype.toArray = function() {
        return this.take(Ae);
      }, Nn(Oe.prototype, function(n, i) {
        var a = /^(?:filter|find|map|reject)|While$/.test(i), d = /^(?:head|last)$/.test(i), m = w[d ? "take" + (i == "last" ? "Right" : "") : i], b = d || /^find/.test(i);
        m && (w.prototype[i] = function() {
          var P = this.__wrapped__, N = d ? [1] : arguments, D = P instanceof Oe, V = N[0], F = D || me(P), B = function(Ne) {
            var Ie = m.apply(w, cr([Ne], N));
            return d && K ? Ie[0] : Ie;
          };
          F && a && typeof V == "function" && V.length != 1 && (D = F = !1);
          var K = this.__chain__, ee = !!this.__actions__.length, le = b && !K, be = D && !ee;
          if (!b && F) {
            P = be ? P : new Oe(this);
            var ce = n.apply(P, N);
            return ce.__actions__.push({ func: _s, args: [B], thisArg: r }), new ln(ce, K);
          }
          return le && be ? n.apply(this, N) : (ce = this.thru(B), le ? d ? ce.value()[0] : ce.value() : ce);
        });
      }), sn(["pop", "push", "shift", "sort", "splice", "unshift"], function(n) {
        var i = Zo[n], a = /^(?:push|sort|unshift)$/.test(n) ? "tap" : "thru", d = /^(?:pop|shift)$/.test(n);
        w.prototype[n] = function() {
          var m = arguments;
          if (d && !this.__chain__) {
            var b = this.value();
            return i.apply(me(b) ? b : [], m);
          }
          return this[a](function(P) {
            return i.apply(me(P) ? P : [], m);
          });
        };
      }), Nn(Oe.prototype, function(n, i) {
        var a = w[i];
        if (a) {
          var d = a.name + "";
          Ue.call(gi, d) || (gi[d] = []), gi[d].push({ name: i, func: a });
        }
      }), gi[ys(r, E).name] = [{
        name: "wrapper",
        func: r
      }], Oe.prototype.clone = Vx, Oe.prototype.reverse = Fx, Oe.prototype.value = Bx, w.prototype.at = m1, w.prototype.chain = g1, w.prototype.commit = v1, w.prototype.next = y1, w.prototype.plant = w1, w.prototype.reverse = b1, w.prototype.toJSON = w.prototype.valueOf = w.prototype.value = S1, w.prototype.first = w.prototype.head, Ji && (w.prototype[Ji] = x1), w;
    }, hi = vx();
    Fr ? ((Fr.exports = hi)._ = hi, Ya._ = hi) : xt._ = hi;
  }).call(ho);
})(Zs, Zs.exports);
var MT = Zs.exports;
const OT = /* @__PURE__ */ AT(MT);
function DT(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function Pm(...e) {
  return (t) => e.forEach((r) => DT(r, t));
}
function rt(...e) {
  return C.useCallback(Pm(...e), e);
}
var ei = C.forwardRef((e, t) => {
  const { children: r, ...o } = e, s = C.Children.toArray(r), c = s.find(IT);
  if (c) {
    const l = c.props.children, u = s.map((f) => f === c ? C.Children.count(l) > 1 ? C.Children.only(null) : C.isValidElement(l) ? l.props.children : null : f);
    return /* @__PURE__ */ y.jsx(Tc, { ...o, ref: t, children: C.isValidElement(l) ? C.cloneElement(l, void 0, u) : null });
  }
  return /* @__PURE__ */ y.jsx(Tc, { ...o, ref: t, children: r });
});
ei.displayName = "Slot";
var Tc = C.forwardRef((e, t) => {
  const { children: r, ...o } = e;
  if (C.isValidElement(r)) {
    const s = jT(r);
    return C.cloneElement(r, {
      ...LT(o, r.props),
      // @ts-ignore
      ref: t ? Pm(t, s) : s
    });
  }
  return C.Children.count(r) > 1 ? C.Children.only(null) : null;
});
Tc.displayName = "SlotClone";
var Em = ({ children: e }) => /* @__PURE__ */ y.jsx(y.Fragment, { children: e });
function IT(e) {
  return C.isValidElement(e) && e.type === Em;
}
function LT(e, t) {
  const r = { ...t };
  for (const o in t) {
    const s = e[o], c = t[o];
    /^on[A-Z]/.test(o) ? s && c ? r[o] = (...u) => {
      c(...u), s(...u);
    } : s && (r[o] = s) : o === "style" ? r[o] = { ...s, ...c } : o === "className" && (r[o] = [s, c].filter(Boolean).join(" "));
  }
  return { ...e, ...r };
}
function jT(e) {
  var o, s;
  let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = (s = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : s.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
function Am(e) {
  var t, r, o = "";
  if (typeof e == "string" || typeof e == "number")
    o += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (r = Am(e[t])) && (o && (o += " "), o += r);
    else
      for (t in e)
        e[t] && (o && (o += " "), o += t);
  return o;
}
function kT() {
  for (var e, t, r = 0, o = ""; r < arguments.length; )
    (e = arguments[r++]) && (t = Am(e)) && (o && (o += " "), o += t);
  return o;
}
const Rh = (e) => typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e, Nh = kT, Rm = (e, t) => (r) => {
  var o;
  if ((t == null ? void 0 : t.variants) == null)
    return Nh(e, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
  const { variants: s, defaultVariants: c } = t, l = Object.keys(s).map((h) => {
    const p = r == null ? void 0 : r[h], v = c == null ? void 0 : c[h];
    if (p === null)
      return null;
    const x = Rh(p) || Rh(v);
    return s[h][x];
  }), u = r && Object.entries(r).reduce((h, p) => {
    let [v, x] = p;
    return x === void 0 || (h[v] = x), h;
  }, {}), f = t == null || (o = t.compoundVariants) === null || o === void 0 ? void 0 : o.reduce((h, p) => {
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
  return Nh(e, l, f, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
};
function Nm(e) {
  var t, r, o = "";
  if (typeof e == "string" || typeof e == "number")
    o += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var s = e.length;
      for (t = 0; t < s; t++)
        e[t] && (r = Nm(e[t])) && (o && (o += " "), o += r);
    } else
      for (r in e)
        e[r] && (o && (o += " "), o += r);
  return o;
}
function VT() {
  for (var e, t, r = 0, o = "", s = arguments.length; r < s; r++)
    (e = arguments[r]) && (t = Nm(e)) && (o && (o += " "), o += t);
  return o;
}
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const FT = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Mm = (...e) => e.filter((t, r, o) => !!t && t.trim() !== "" && o.indexOf(t) === r).join(" ").trim();
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var BT = {
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
const WT = pa(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: c,
    iconNode: l,
    ...u
  }, f) => Xs(
    "svg",
    {
      ref: f,
      ...BT,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: o ? Number(r) * 24 / Number(t) : r,
      className: Mm("lucide", s),
      ...u
    },
    [
      ...l.map(([h, p]) => Xs(h, p)),
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
const gt = (e, t) => {
  const r = pa(
    ({ className: o, ...s }, c) => Xs(WT, {
      ref: c,
      iconNode: t,
      className: Mm(`lucide-${FT(e)}`, o),
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
const $T = gt("Award", [
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
const Om = gt("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ga = gt("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const UT = gt("ChevronUp", [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const HT = gt("CircleCheckBig", [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Eo = gt("CircleHelp", [
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
const zT = gt("Crosshair", [
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
const Dm = gt("ExternalLink", [
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
const Mh = gt("FileText", [
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
const GT = gt("Info", [
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
const KT = gt("Lightbulb", [
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
const Oh = gt("Settings", [
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
const YT = gt("Target", [
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
const _c = gt("TriangleAlert", [
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
const qT = gt("User", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const XT = gt("Users", [
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
const Im = gt("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ZT = gt("Zap", [
  [
    "path",
    {
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
      key: "1xq2db"
    }
  ]
]), tu = "-", JT = (e) => {
  const t = e_(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: o
  } = e;
  return {
    getClassGroupId: (l) => {
      const u = l.split(tu);
      return u[0] === "" && u.length !== 1 && u.shift(), Lm(u, t) || QT(l);
    },
    getConflictingClassGroupIds: (l, u) => {
      const f = r[l] || [];
      return u && o[l] ? [...f, ...o[l]] : f;
    }
  };
}, Lm = (e, t) => {
  var l;
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], o = t.nextPart.get(r), s = o ? Lm(e.slice(1), o) : void 0;
  if (s)
    return s;
  if (t.validators.length === 0)
    return;
  const c = e.join(tu);
  return (l = t.validators.find(({
    validator: u
  }) => u(c))) == null ? void 0 : l.classGroupId;
}, Dh = /^\[(.+)\]$/, QT = (e) => {
  if (Dh.test(e)) {
    const t = Dh.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, e_ = (e) => {
  const {
    theme: t,
    prefix: r
  } = e, o = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return n_(Object.entries(e.classGroups), r).forEach(([c, l]) => {
    Pc(l, o, c, t);
  }), o;
}, Pc = (e, t, r, o) => {
  e.forEach((s) => {
    if (typeof s == "string") {
      const c = s === "" ? t : Ih(t, s);
      c.classGroupId = r;
      return;
    }
    if (typeof s == "function") {
      if (t_(s)) {
        Pc(s(o), t, r, o);
        return;
      }
      t.validators.push({
        validator: s,
        classGroupId: r
      });
      return;
    }
    Object.entries(s).forEach(([c, l]) => {
      Pc(l, Ih(t, c), r, o);
    });
  });
}, Ih = (e, t) => {
  let r = e;
  return t.split(tu).forEach((o) => {
    r.nextPart.has(o) || r.nextPart.set(o, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(o);
  }), r;
}, t_ = (e) => e.isThemeGetter, n_ = (e, t) => t ? e.map(([r, o]) => {
  const s = o.map((c) => typeof c == "string" ? t + c : typeof c == "object" ? Object.fromEntries(Object.entries(c).map(([l, u]) => [t + l, u])) : c);
  return [r, s];
}) : e, r_ = (e) => {
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
}, jm = "!", i_ = (e) => {
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
    const x = f.length === 0 ? u : u.substring(p), g = x.startsWith(jm), T = g ? x.substring(1) : x, S = v && v > p ? v - p : void 0;
    return {
      modifiers: f,
      hasImportantModifier: g,
      baseClassName: T,
      maybePostfixModifierPosition: S
    };
  };
  return r ? (u) => r({
    className: u,
    parseClassName: l
  }) : l;
}, o_ = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let r = [];
  return e.forEach((o) => {
    o[0] === "[" ? (t.push(...r.sort(), o), r = []) : r.push(o);
  }), t.push(...r.sort()), t;
}, s_ = (e) => ({
  cache: r_(e.cacheSize),
  parseClassName: i_(e),
  ...JT(e)
}), a_ = /\s+/, l_ = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: o,
    getConflictingClassGroupIds: s
  } = t, c = [], l = e.trim().split(a_);
  let u = "";
  for (let f = l.length - 1; f >= 0; f -= 1) {
    const h = l[f], {
      modifiers: p,
      hasImportantModifier: v,
      baseClassName: x,
      maybePostfixModifierPosition: g
    } = r(h);
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
    const _ = o_(p).join(":"), E = v ? _ + jm : _, A = E + S;
    if (c.includes(A))
      continue;
    c.push(A);
    const M = s(S, T);
    for (let I = 0; I < M.length; ++I) {
      const j = M[I];
      c.push(E + j);
    }
    u = h + (u.length > 0 ? " " + u : u);
  }
  return u;
};
function c_() {
  let e = 0, t, r, o = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = km(t)) && (o && (o += " "), o += r);
  return o;
}
const km = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let o = 0; o < e.length; o++)
    e[o] && (t = km(e[o])) && (r && (r += " "), r += t);
  return r;
};
function u_(e, ...t) {
  let r, o, s, c = l;
  function l(f) {
    const h = t.reduce((p, v) => v(p), e());
    return r = s_(h), o = r.cache.get, s = r.cache.set, c = u, u(f);
  }
  function u(f) {
    const h = o(f);
    if (h)
      return h;
    const p = l_(f, r);
    return s(f, p), p;
  }
  return function() {
    return c(c_.apply(null, arguments));
  };
}
const Xe = (e) => {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}, Vm = /^\[(?:([a-z-]+):)?(.+)\]$/i, f_ = /^\d+\/\d+$/, d_ = /* @__PURE__ */ new Set(["px", "full", "screen"]), h_ = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, p_ = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, m_ = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, g_ = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, v_ = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, qn = (e) => Mi(e) || d_.has(e) || f_.test(e), vr = (e) => Bi(e, "length", __), Mi = (e) => !!e && !Number.isNaN(Number(e)), Ql = (e) => Bi(e, "number", Mi), go = (e) => !!e && Number.isInteger(Number(e)), y_ = (e) => e.endsWith("%") && Mi(e.slice(0, -1)), xe = (e) => Vm.test(e), yr = (e) => h_.test(e), x_ = /* @__PURE__ */ new Set(["length", "size", "percentage"]), w_ = (e) => Bi(e, x_, Fm), b_ = (e) => Bi(e, "position", Fm), S_ = /* @__PURE__ */ new Set(["image", "url"]), C_ = (e) => Bi(e, S_, E_), T_ = (e) => Bi(e, "", P_), vo = () => !0, Bi = (e, t, r) => {
  const o = Vm.exec(e);
  return o ? o[1] ? typeof t == "string" ? o[1] === t : t.has(o[1]) : r(o[2]) : !1;
}, __ = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  p_.test(e) && !m_.test(e)
), Fm = () => !1, P_ = (e) => g_.test(e), E_ = (e) => v_.test(e), A_ = () => {
  const e = Xe("colors"), t = Xe("spacing"), r = Xe("blur"), o = Xe("brightness"), s = Xe("borderColor"), c = Xe("borderRadius"), l = Xe("borderSpacing"), u = Xe("borderWidth"), f = Xe("contrast"), h = Xe("grayscale"), p = Xe("hueRotate"), v = Xe("invert"), x = Xe("gap"), g = Xe("gradientColorStops"), T = Xe("gradientColorStopPositions"), S = Xe("inset"), _ = Xe("margin"), E = Xe("opacity"), A = Xe("padding"), M = Xe("saturate"), I = Xe("scale"), j = Xe("sepia"), U = Xe("skew"), $ = Xe("space"), H = Xe("translate"), te = () => ["auto", "contain", "none"], re = () => ["auto", "hidden", "clip", "visible", "scroll"], de = () => ["auto", xe, t], J = () => [xe, t], se = () => ["", qn, vr], ne = () => ["auto", Mi, xe], Te = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], ie = () => ["solid", "dashed", "dotted", "double", "none"], Z = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], q = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], G = () => ["", "0", xe], pe = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], Ae = () => [Mi, xe];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [vo],
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
      gradientColorStopPositions: [y_, vr],
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
        z: ["auto", go, xe]
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
        order: ["first", "last", "none", go, xe]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [vo]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", go, xe]
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
        "grid-rows": [vo]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [go, xe]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Ql]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [vo]
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
        "line-clamp": ["none", Mi, Ql]
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
        bg: [...Te(), b_]
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
        bg: ["auto", "cover", "contain", w_]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, C_]
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
        shadow: ["", "inner", "none", yr, T_]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [vo]
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
        rotate: [go, xe]
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
        stroke: [qn, vr, Ql]
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
}, R_ = /* @__PURE__ */ u_(A_);
function Ze(...e) {
  return R_(VT(e));
}
function N_(e) {
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
function M_(e) {
  switch (e) {
    case "metrics":
      return YT;
    case "economic_buyer":
      return qT;
    case "decision_criteria":
      return Mh;
    case "decision_process":
      return XT;
    case "paper_process":
      return Mh;
    case "identification_pain":
      return ZT;
    case "champion":
      return $T;
    case "competition":
      return zT;
    default:
      return null;
  }
}
const O_ = Rm(
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
), Dn = C.forwardRef(
  ({ className: e, variant: t, size: r, asChild: o = !1, ...s }, c) => {
    const l = o ? ei : "button";
    return /* @__PURE__ */ y.jsx(
      l,
      {
        className: Ze(O_({ variant: t, size: r, className: e })),
        ref: c,
        ...s
      }
    );
  }
);
Dn.displayName = "Button";
const D_ = "_counter_1wts1_1", I_ = "_header_1wts1_10", L_ = "_button_1wts1_16", ec = {
  counter: D_,
  header: I_,
  button: L_
}, j_ = (e) => {
  const [t, r] = Po(e);
  return {
    count: t,
    incrementCount: () => r(t + 1)
  };
}, { throttle: k_ } = OT, kD = ({ initialValue: e = 0 }) => {
  const { count: t, incrementCount: r } = j_(e);
  return Io(() => {
    k_(() => {
      console.log("throttle");
    }, 10)();
  }, []), /* @__PURE__ */ y.jsxs("div", { className: ec.counter, children: [
    /* @__PURE__ */ y.jsx("h2", { className: ec.header, children: "Counter" }),
    /* @__PURE__ */ y.jsx("button", { className: ec.button, type: "button", onClick: r, children: "Increment by one" }),
    /* @__PURE__ */ y.jsx(Dn, { variant: "outline", children: "Shadcn button" }),
    /* @__PURE__ */ y.jsxs("div", { className: "bg-red-500", children: [
      "Total value: ",
      /* @__PURE__ */ y.jsx("strong", { children: t })
    ] })
  ] });
};
function Lh(e, [t, r]) {
  return Math.min(r, Math.max(t, e));
}
function Ve(e, t, { checkForDefaultPrevented: r = !0 } = {}) {
  return function(s) {
    if (e == null || e(s), r === !1 || !s.defaultPrevented)
      return t == null ? void 0 : t(s);
  };
}
function V_(e, t = []) {
  let r = [];
  function o(c, l) {
    const u = C.createContext(l), f = r.length;
    r = [...r, l];
    function h(v) {
      const { scope: x, children: g, ...T } = v, S = (x == null ? void 0 : x[e][f]) || u, _ = C.useMemo(() => T, Object.values(T));
      return /* @__PURE__ */ y.jsx(S.Provider, { value: _, children: g });
    }
    function p(v, x) {
      const g = (x == null ? void 0 : x[e][f]) || u, T = C.useContext(g);
      if (T)
        return T;
      if (l !== void 0)
        return l;
      throw new Error(`\`${v}\` must be used within \`${c}\``);
    }
    return h.displayName = c + "Provider", [h, p];
  }
  const s = () => {
    const c = r.map((l) => C.createContext(l));
    return function(u) {
      const f = (u == null ? void 0 : u[e]) || c;
      return C.useMemo(
        () => ({ [`__scope${e}`]: { ...u, [e]: f } }),
        [u, f]
      );
    };
  };
  return s.scopeName = e, [o, F_(s, ...t)];
}
function F_(...e) {
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
      return C.useMemo(() => ({ [`__scope${t.scopeName}`]: l }), [l]);
    };
  };
  return r.scopeName = t.scopeName, r;
}
function B_(e) {
  const t = e + "CollectionProvider", [r, o] = V_(t), [s, c] = r(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), l = (g) => {
    const { scope: T, children: S } = g, _ = z.useRef(null), E = z.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ y.jsx(s, { scope: T, itemMap: E, collectionRef: _, children: S });
  };
  l.displayName = t;
  const u = e + "CollectionSlot", f = z.forwardRef(
    (g, T) => {
      const { scope: S, children: _ } = g, E = c(u, S), A = rt(T, E.collectionRef);
      return /* @__PURE__ */ y.jsx(ei, { ref: A, children: _ });
    }
  );
  f.displayName = u;
  const h = e + "CollectionItemSlot", p = "data-radix-collection-item", v = z.forwardRef(
    (g, T) => {
      const { scope: S, children: _, ...E } = g, A = z.useRef(null), M = rt(T, A), I = c(h, S);
      return z.useEffect(() => (I.itemMap.set(A, { ref: A, ...E }), () => void I.itemMap.delete(A))), /* @__PURE__ */ y.jsx(ei, { [p]: "", ref: M, children: _ });
    }
  );
  v.displayName = h;
  function x(g) {
    const T = c(e + "CollectionConsumer", g);
    return z.useCallback(() => {
      const _ = T.collectionRef.current;
      if (!_)
        return [];
      const E = Array.from(_.querySelectorAll(`[${p}]`));
      return Array.from(T.itemMap.values()).sort(
        (I, j) => E.indexOf(I.ref.current) - E.indexOf(j.ref.current)
      );
    }, [T.collectionRef, T.itemMap]);
  }
  return [
    { Provider: l, Slot: f, ItemSlot: v },
    x,
    o
  ];
}
function W_(e, t) {
  const r = C.createContext(t), o = (c) => {
    const { children: l, ...u } = c, f = C.useMemo(() => u, Object.values(u));
    return /* @__PURE__ */ y.jsx(r.Provider, { value: f, children: l });
  };
  o.displayName = e + "Provider";
  function s(c) {
    const l = C.useContext(r);
    if (l)
      return l;
    if (t !== void 0)
      return t;
    throw new Error(`\`${c}\` must be used within \`${e}\``);
  }
  return [o, s];
}
function nu(e, t = []) {
  let r = [];
  function o(c, l) {
    const u = C.createContext(l), f = r.length;
    r = [...r, l];
    const h = (v) => {
      var E;
      const { scope: x, children: g, ...T } = v, S = ((E = x == null ? void 0 : x[e]) == null ? void 0 : E[f]) || u, _ = C.useMemo(() => T, Object.values(T));
      return /* @__PURE__ */ y.jsx(S.Provider, { value: _, children: g });
    };
    h.displayName = c + "Provider";
    function p(v, x) {
      var S;
      const g = ((S = x == null ? void 0 : x[e]) == null ? void 0 : S[f]) || u, T = C.useContext(g);
      if (T)
        return T;
      if (l !== void 0)
        return l;
      throw new Error(`\`${v}\` must be used within \`${c}\``);
    }
    return [h, p];
  }
  const s = () => {
    const c = r.map((l) => C.createContext(l));
    return function(u) {
      const f = (u == null ? void 0 : u[e]) || c;
      return C.useMemo(
        () => ({ [`__scope${e}`]: { ...u, [e]: f } }),
        [u, f]
      );
    };
  };
  return s.scopeName = e, [o, $_(s, ...t)];
}
function $_(...e) {
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
      return C.useMemo(() => ({ [`__scope${t.scopeName}`]: l }), [l]);
    };
  };
  return r.scopeName = t.scopeName, r;
}
var U_ = C.createContext(void 0);
function H_(e) {
  const t = C.useContext(U_);
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
], He = z_.reduce((e, t) => {
  const r = C.forwardRef((o, s) => {
    const { asChild: c, ...l } = o, u = c ? ei : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ y.jsx(u, { ...l, ref: s });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function G_(e, t) {
  e && ma.flushSync(() => e.dispatchEvent(t));
}
function tr(e) {
  const t = C.useRef(e);
  return C.useEffect(() => {
    t.current = e;
  }), C.useMemo(() => (...r) => {
    var o;
    return (o = t.current) == null ? void 0 : o.call(t, ...r);
  }, []);
}
function K_(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = tr(e);
  C.useEffect(() => {
    const o = (s) => {
      s.key === "Escape" && r(s);
    };
    return t.addEventListener("keydown", o, { capture: !0 }), () => t.removeEventListener("keydown", o, { capture: !0 });
  }, [r, t]);
}
var Y_ = "DismissableLayer", Ec = "dismissableLayer.update", q_ = "dismissableLayer.pointerDownOutside", X_ = "dismissableLayer.focusOutside", jh, Bm = C.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), va = C.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: r = !1,
      onEscapeKeyDown: o,
      onPointerDownOutside: s,
      onFocusOutside: c,
      onInteractOutside: l,
      onDismiss: u,
      ...f
    } = e, h = C.useContext(Bm), [p, v] = C.useState(null), x = (p == null ? void 0 : p.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, g] = C.useState({}), T = rt(t, ($) => v($)), S = Array.from(h.layers), [_] = [...h.layersWithOutsidePointerEventsDisabled].slice(-1), E = S.indexOf(_), A = p ? S.indexOf(p) : -1, M = h.layersWithOutsidePointerEventsDisabled.size > 0, I = A >= E, j = Q_(($) => {
      const H = $.target, te = [...h.branches].some((re) => re.contains(H));
      !I || te || (s == null || s($), l == null || l($), $.defaultPrevented || u == null || u());
    }, x), U = eP(($) => {
      const H = $.target;
      [...h.branches].some((re) => re.contains(H)) || (c == null || c($), l == null || l($), $.defaultPrevented || u == null || u());
    }, x);
    return K_(($) => {
      A === h.layers.size - 1 && (o == null || o($), !$.defaultPrevented && u && ($.preventDefault(), u()));
    }, x), C.useEffect(() => {
      if (p)
        return r && (h.layersWithOutsidePointerEventsDisabled.size === 0 && (jh = x.body.style.pointerEvents, x.body.style.pointerEvents = "none"), h.layersWithOutsidePointerEventsDisabled.add(p)), h.layers.add(p), kh(), () => {
          r && h.layersWithOutsidePointerEventsDisabled.size === 1 && (x.body.style.pointerEvents = jh);
        };
    }, [p, x, r, h]), C.useEffect(() => () => {
      p && (h.layers.delete(p), h.layersWithOutsidePointerEventsDisabled.delete(p), kh());
    }, [p, h]), C.useEffect(() => {
      const $ = () => g({});
      return document.addEventListener(Ec, $), () => document.removeEventListener(Ec, $);
    }, []), /* @__PURE__ */ y.jsx(
      He.div,
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
          j.onPointerDownCapture
        )
      }
    );
  }
);
va.displayName = Y_;
var Z_ = "DismissableLayerBranch", J_ = C.forwardRef((e, t) => {
  const r = C.useContext(Bm), o = C.useRef(null), s = rt(t, o);
  return C.useEffect(() => {
    const c = o.current;
    if (c)
      return r.branches.add(c), () => {
        r.branches.delete(c);
      };
  }, [r.branches]), /* @__PURE__ */ y.jsx(He.div, { ...e, ref: s });
});
J_.displayName = Z_;
function Q_(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = tr(e), o = C.useRef(!1), s = C.useRef(() => {
  });
  return C.useEffect(() => {
    const c = (u) => {
      if (u.target && !o.current) {
        let f = function() {
          Wm(
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
function eP(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = tr(e), o = C.useRef(!1);
  return C.useEffect(() => {
    const s = (c) => {
      c.target && !o.current && Wm(X_, r, { originalEvent: c }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", s), () => t.removeEventListener("focusin", s);
  }, [t, r]), {
    onFocusCapture: () => o.current = !0,
    onBlurCapture: () => o.current = !1
  };
}
function kh() {
  const e = new CustomEvent(Ec);
  document.dispatchEvent(e);
}
function Wm(e, t, r, { discrete: o }) {
  const s = r.originalEvent.target, c = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: r });
  t && s.addEventListener(e, t, { once: !0 }), o ? G_(s, c) : s.dispatchEvent(c);
}
var tc = 0;
function $m() {
  C.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? Vh()), document.body.insertAdjacentElement("beforeend", e[1] ?? Vh()), tc++, () => {
      tc === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), tc--;
    };
  }, []);
}
function Vh() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var nc = "focusScope.autoFocusOnMount", rc = "focusScope.autoFocusOnUnmount", Fh = { bubbles: !1, cancelable: !0 }, tP = "FocusScope", ru = C.forwardRef((e, t) => {
  const {
    loop: r = !1,
    trapped: o = !1,
    onMountAutoFocus: s,
    onUnmountAutoFocus: c,
    ...l
  } = e, [u, f] = C.useState(null), h = tr(s), p = tr(c), v = C.useRef(null), x = rt(t, (S) => f(S)), g = C.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  C.useEffect(() => {
    if (o) {
      let S = function(M) {
        if (g.paused || !u)
          return;
        const I = M.target;
        u.contains(I) ? v.current = I : xr(v.current, { select: !0 });
      }, _ = function(M) {
        if (g.paused || !u)
          return;
        const I = M.relatedTarget;
        I !== null && (u.contains(I) || xr(v.current, { select: !0 }));
      }, E = function(M) {
        if (document.activeElement === document.body)
          for (const j of M)
            j.removedNodes.length > 0 && xr(u);
      };
      document.addEventListener("focusin", S), document.addEventListener("focusout", _);
      const A = new MutationObserver(E);
      return u && A.observe(u, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", S), document.removeEventListener("focusout", _), A.disconnect();
      };
    }
  }, [o, u, g.paused]), C.useEffect(() => {
    if (u) {
      Wh.add(g);
      const S = document.activeElement;
      if (!u.contains(S)) {
        const E = new CustomEvent(nc, Fh);
        u.addEventListener(nc, h), u.dispatchEvent(E), E.defaultPrevented || (nP(aP(Um(u)), { select: !0 }), document.activeElement === S && xr(u));
      }
      return () => {
        u.removeEventListener(nc, h), setTimeout(() => {
          const E = new CustomEvent(rc, Fh);
          u.addEventListener(rc, p), u.dispatchEvent(E), E.defaultPrevented || xr(S ?? document.body, { select: !0 }), u.removeEventListener(rc, p), Wh.remove(g);
        }, 0);
      };
    }
  }, [u, h, p, g]);
  const T = C.useCallback(
    (S) => {
      if (!r && !o || g.paused)
        return;
      const _ = S.key === "Tab" && !S.altKey && !S.ctrlKey && !S.metaKey, E = document.activeElement;
      if (_ && E) {
        const A = S.currentTarget, [M, I] = rP(A);
        M && I ? !S.shiftKey && E === I ? (S.preventDefault(), r && xr(M, { select: !0 })) : S.shiftKey && E === M && (S.preventDefault(), r && xr(I, { select: !0 })) : E === A && S.preventDefault();
      }
    },
    [r, o, g.paused]
  );
  return /* @__PURE__ */ y.jsx(He.div, { tabIndex: -1, ...l, ref: x, onKeyDown: T });
});
ru.displayName = tP;
function nP(e, { select: t = !1 } = {}) {
  const r = document.activeElement;
  for (const o of e)
    if (xr(o, { select: t }), document.activeElement !== r)
      return;
}
function rP(e) {
  const t = Um(e), r = Bh(t, e), o = Bh(t.reverse(), e);
  return [r, o];
}
function Um(e) {
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
function Bh(e, t) {
  for (const r of e)
    if (!iP(r, { upTo: t }))
      return r;
}
function iP(e, { upTo: t }) {
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
function oP(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function xr(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const r = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== r && oP(e) && t && e.select();
  }
}
var Wh = sP();
function sP() {
  let e = [];
  return {
    add(t) {
      const r = e[0];
      t !== r && (r == null || r.pause()), e = $h(e, t), e.unshift(t);
    },
    remove(t) {
      var r;
      e = $h(e, t), (r = e[0]) == null || r.resume();
    }
  };
}
function $h(e, t) {
  const r = [...e], o = r.indexOf(t);
  return o !== -1 && r.splice(o, 1), r;
}
function aP(e) {
  return e.filter((t) => t.tagName !== "A");
}
var jt = globalThis != null && globalThis.document ? C.useLayoutEffect : () => {
}, lP = C.useId || (() => {
}), cP = 0;
function Jr(e) {
  const [t, r] = C.useState(lP());
  return jt(() => {
    r((o) => o ?? String(cP++));
  }, [e]), t ? `radix-${t}` : "";
}
const uP = ["top", "right", "bottom", "left"], _r = Math.min, Qt = Math.max, Js = Math.round, Ds = Math.floor, In = (e) => ({
  x: e,
  y: e
}), fP = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, dP = {
  start: "end",
  end: "start"
};
function Ac(e, t, r) {
  return Qt(e, _r(t, r));
}
function nr(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function rr(e) {
  return e.split("-")[0];
}
function Wi(e) {
  return e.split("-")[1];
}
function iu(e) {
  return e === "x" ? "y" : "x";
}
function ou(e) {
  return e === "y" ? "height" : "width";
}
function Pr(e) {
  return ["top", "bottom"].includes(rr(e)) ? "y" : "x";
}
function su(e) {
  return iu(Pr(e));
}
function hP(e, t, r) {
  r === void 0 && (r = !1);
  const o = Wi(e), s = su(e), c = ou(s);
  let l = s === "x" ? o === (r ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[c] > t.floating[c] && (l = Qs(l)), [l, Qs(l)];
}
function pP(e) {
  const t = Qs(e);
  return [Rc(e), t, Rc(t)];
}
function Rc(e) {
  return e.replace(/start|end/g, (t) => dP[t]);
}
function mP(e, t, r) {
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
function gP(e, t, r, o) {
  const s = Wi(e);
  let c = mP(rr(e), r === "start", o);
  return s && (c = c.map((l) => l + "-" + s), t && (c = c.concat(c.map(Rc)))), c;
}
function Qs(e) {
  return e.replace(/left|right|bottom|top/g, (t) => fP[t]);
}
function vP(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Hm(e) {
  return typeof e != "number" ? vP(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function ea(e) {
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
function Uh(e, t, r) {
  let {
    reference: o,
    floating: s
  } = e;
  const c = Pr(t), l = su(t), u = ou(l), f = rr(t), h = c === "y", p = o.x + o.width / 2 - s.width / 2, v = o.y + o.height / 2 - s.height / 2, x = o[u] / 2 - s[u] / 2;
  let g;
  switch (f) {
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
  switch (Wi(t)) {
    case "start":
      g[l] -= x * (r && h ? -1 : 1);
      break;
    case "end":
      g[l] += x * (r && h ? -1 : 1);
      break;
  }
  return g;
}
const yP = async (e, t, r) => {
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
  } = Uh(h, o, f), x = o, g = {}, T = 0;
  for (let S = 0; S < u.length; S++) {
    const {
      name: _,
      fn: E
    } = u[S], {
      x: A,
      y: M,
      data: I,
      reset: j
    } = await E({
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
    p = A ?? p, v = M ?? v, g = {
      ...g,
      [_]: {
        ...g[_],
        ...I
      }
    }, j && T <= 50 && (T++, typeof j == "object" && (j.placement && (x = j.placement), j.rects && (h = j.rects === !0 ? await l.getElementRects({
      reference: e,
      floating: t,
      strategy: s
    }) : j.rects), {
      x: p,
      y: v
    } = Uh(h, x, f)), S = -1);
  }
  return {
    x: p,
    y: v,
    placement: x,
    strategy: s,
    middlewareData: g
  };
};
async function Ao(e, t) {
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
    padding: g = 0
  } = nr(t, e), T = Hm(g), _ = u[x ? v === "floating" ? "reference" : "floating" : v], E = ea(await c.getClippingRect({
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
  }, j = ea(c.convertOffsetParentRelativeRectToViewportRelativeRect ? await c.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: u,
    rect: A,
    offsetParent: M,
    strategy: f
  }) : A);
  return {
    top: (E.top - j.top + T.top) / I.y,
    bottom: (j.bottom - E.bottom + T.bottom) / I.y,
    left: (E.left - j.left + T.left) / I.x,
    right: (j.right - E.right + T.right) / I.x
  };
}
const xP = (e) => ({
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
    const v = Hm(p), x = {
      x: r,
      y: o
    }, g = su(s), T = ou(g), S = await l.getDimensions(h), _ = g === "y", E = _ ? "top" : "left", A = _ ? "bottom" : "right", M = _ ? "clientHeight" : "clientWidth", I = c.reference[T] + c.reference[g] - x[g] - c.floating[T], j = x[g] - c.reference[g], U = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(h));
    let $ = U ? U[M] : 0;
    (!$ || !await (l.isElement == null ? void 0 : l.isElement(U))) && ($ = u.floating[M] || c.floating[T]);
    const H = I / 2 - j / 2, te = $ / 2 - S[T] / 2 - 1, re = _r(v[E], te), de = _r(v[A], te), J = re, se = $ - S[T] - de, ne = $ / 2 - S[T] / 2 + H, Te = Ac(J, ne, se), ie = !f.arrow && Wi(s) != null && ne !== Te && c.reference[T] / 2 - (ne < J ? re : de) - S[T] / 2 < 0, Z = ie ? ne < J ? ne - J : ne - se : 0;
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
}), wP = function(e) {
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
        fallbackStrategy: g = "bestFit",
        fallbackAxisSideDirection: T = "none",
        flipAlignment: S = !0,
        ..._
      } = nr(e, t);
      if ((r = c.arrow) != null && r.alignmentOffset)
        return {};
      const E = rr(s), A = Pr(u), M = rr(u) === u, I = await (f.isRTL == null ? void 0 : f.isRTL(h.floating)), j = x || (M || !S ? [Qs(u)] : pP(u)), U = T !== "none";
      !x && U && j.push(...gP(u, S, T, I));
      const $ = [u, ...j], H = await Ao(t, _), te = [];
      let re = ((o = c.flip) == null ? void 0 : o.overflows) || [];
      if (p && te.push(H[E]), v) {
        const ne = hP(s, l, I);
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
          switch (g) {
            case "bestFit": {
              var se;
              const Z = (se = re.filter((q) => {
                if (U) {
                  const G = Pr(q.placement);
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
function Hh(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function zh(e) {
  return uP.some((t) => e[t] >= 0);
}
const bP = function(e) {
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
          const c = await Ao(t, {
            ...s,
            elementContext: "reference"
          }), l = Hh(c, r.reference);
          return {
            data: {
              referenceHiddenOffsets: l,
              referenceHidden: zh(l)
            }
          };
        }
        case "escaped": {
          const c = await Ao(t, {
            ...s,
            altBoundary: !0
          }), l = Hh(c, r.floating);
          return {
            data: {
              escapedOffsets: l,
              escaped: zh(l)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function SP(e, t) {
  const {
    placement: r,
    platform: o,
    elements: s
  } = e, c = await (o.isRTL == null ? void 0 : o.isRTL(s.floating)), l = rr(r), u = Wi(r), f = Pr(r) === "y", h = ["left", "top"].includes(l) ? -1 : 1, p = c && f ? -1 : 1, v = nr(t, e);
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
  return u && typeof T == "number" && (g = u === "end" ? T * -1 : T), f ? {
    x: g * p,
    y: x * h
  } : {
    x: x * h,
    y: g * p
  };
}
const CP = function(e) {
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
      } = t, f = await SP(t, e);
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
}, TP = function(e) {
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
      }, p = await Ao(t, f), v = Pr(rr(s)), x = iu(v);
      let g = h[x], T = h[v];
      if (c) {
        const _ = x === "y" ? "top" : "left", E = x === "y" ? "bottom" : "right", A = g + p[_], M = g - p[E];
        g = Ac(A, g, M);
      }
      if (l) {
        const _ = v === "y" ? "top" : "left", E = v === "y" ? "bottom" : "right", A = T + p[_], M = T - p[E];
        T = Ac(A, T, M);
      }
      const S = u.fn({
        ...t,
        [x]: g,
        [v]: T
      });
      return {
        ...S,
        data: {
          x: S.x - r,
          y: S.y - o,
          enabled: {
            [x]: c,
            [v]: l
          }
        }
      };
    }
  };
}, _P = function(e) {
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
      }, v = Pr(s), x = iu(v);
      let g = p[x], T = p[v];
      const S = nr(u, t), _ = typeof S == "number" ? {
        mainAxis: S,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...S
      };
      if (f) {
        const M = x === "y" ? "height" : "width", I = c.reference[x] - c.floating[M] + _.mainAxis, j = c.reference[x] + c.reference[M] - _.mainAxis;
        g < I ? g = I : g > j && (g = j);
      }
      if (h) {
        var E, A;
        const M = x === "y" ? "width" : "height", I = ["top", "left"].includes(rr(s)), j = c.reference[v] - c.floating[M] + (I && ((E = l.offset) == null ? void 0 : E[v]) || 0) + (I ? 0 : _.crossAxis), U = c.reference[v] + c.reference[M] + (I ? 0 : ((A = l.offset) == null ? void 0 : A[v]) || 0) - (I ? _.crossAxis : 0);
        T < j ? T = j : T > U && (T = U);
      }
      return {
        [x]: g,
        [v]: T
      };
    }
  };
}, PP = function(e) {
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
      } = nr(e, t), p = await Ao(t, h), v = rr(s), x = Wi(s), g = Pr(s) === "y", {
        width: T,
        height: S
      } = c.floating;
      let _, E;
      v === "top" || v === "bottom" ? (_ = v, E = x === (await (l.isRTL == null ? void 0 : l.isRTL(u.floating)) ? "start" : "end") ? "left" : "right") : (E = v, _ = x === "end" ? "top" : "bottom");
      const A = S - p.top - p.bottom, M = T - p.left - p.right, I = _r(S - p[_], A), j = _r(T - p[E], M), U = !t.middlewareData.shift;
      let $ = I, H = j;
      if ((r = t.middlewareData.shift) != null && r.enabled.x && (H = M), (o = t.middlewareData.shift) != null && o.enabled.y && ($ = A), U && !x) {
        const re = Qt(p.left, 0), de = Qt(p.right, 0), J = Qt(p.top, 0), se = Qt(p.bottom, 0);
        g ? H = T - 2 * (re !== 0 || de !== 0 ? re + de : Qt(p.left, p.right)) : $ = S - 2 * (J !== 0 || se !== 0 ? J + se : Qt(p.top, p.bottom));
      }
      await f({
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
function ya() {
  return typeof window < "u";
}
function $i(e) {
  return zm(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function en(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Fn(e) {
  var t;
  return (t = (zm(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function zm(e) {
  return ya() ? e instanceof Node || e instanceof en(e).Node : !1;
}
function bn(e) {
  return ya() ? e instanceof Element || e instanceof en(e).Element : !1;
}
function Vn(e) {
  return ya() ? e instanceof HTMLElement || e instanceof en(e).HTMLElement : !1;
}
function Gh(e) {
  return !ya() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof en(e).ShadowRoot;
}
function jo(e) {
  const {
    overflow: t,
    overflowX: r,
    overflowY: o,
    display: s
  } = Sn(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + r) && !["inline", "contents"].includes(s);
}
function EP(e) {
  return ["table", "td", "th"].includes($i(e));
}
function xa(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function au(e) {
  const t = lu(), r = bn(e) ? Sn(e) : e;
  return r.transform !== "none" || r.perspective !== "none" || (r.containerType ? r.containerType !== "normal" : !1) || !t && (r.backdropFilter ? r.backdropFilter !== "none" : !1) || !t && (r.filter ? r.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((o) => (r.willChange || "").includes(o)) || ["paint", "layout", "strict", "content"].some((o) => (r.contain || "").includes(o));
}
function AP(e) {
  let t = Er(e);
  for (; Vn(t) && !Ii(t); ) {
    if (au(t))
      return t;
    if (xa(t))
      return null;
    t = Er(t);
  }
  return null;
}
function lu() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Ii(e) {
  return ["html", "body", "#document"].includes($i(e));
}
function Sn(e) {
  return en(e).getComputedStyle(e);
}
function wa(e) {
  return bn(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Er(e) {
  if ($i(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Gh(e) && e.host || // Fallback.
    Fn(e)
  );
  return Gh(t) ? t.host : t;
}
function Gm(e) {
  const t = Er(e);
  return Ii(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Vn(t) && jo(t) ? t : Gm(t);
}
function Ro(e, t, r) {
  var o;
  t === void 0 && (t = []), r === void 0 && (r = !0);
  const s = Gm(e), c = s === ((o = e.ownerDocument) == null ? void 0 : o.body), l = en(s);
  if (c) {
    const u = Nc(l);
    return t.concat(l, l.visualViewport || [], jo(s) ? s : [], u && r ? Ro(u) : []);
  }
  return t.concat(s, Ro(s, [], r));
}
function Nc(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Km(e) {
  const t = Sn(e);
  let r = parseFloat(t.width) || 0, o = parseFloat(t.height) || 0;
  const s = Vn(e), c = s ? e.offsetWidth : r, l = s ? e.offsetHeight : o, u = Js(r) !== c || Js(o) !== l;
  return u && (r = c, o = l), {
    width: r,
    height: o,
    $: u
  };
}
function cu(e) {
  return bn(e) ? e : e.contextElement;
}
function Oi(e) {
  const t = cu(e);
  if (!Vn(t))
    return In(1);
  const r = t.getBoundingClientRect(), {
    width: o,
    height: s,
    $: c
  } = Km(t);
  let l = (c ? Js(r.width) : r.width) / o, u = (c ? Js(r.height) : r.height) / s;
  return (!l || !Number.isFinite(l)) && (l = 1), (!u || !Number.isFinite(u)) && (u = 1), {
    x: l,
    y: u
  };
}
const RP = /* @__PURE__ */ In(0);
function Ym(e) {
  const t = en(e);
  return !lu() || !t.visualViewport ? RP : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function NP(e, t, r) {
  return t === void 0 && (t = !1), !r || t && r !== en(e) ? !1 : t;
}
function ti(e, t, r, o) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  const s = e.getBoundingClientRect(), c = cu(e);
  let l = In(1);
  t && (o ? bn(o) && (l = Oi(o)) : l = Oi(e));
  const u = NP(c, r, o) ? Ym(c) : In(0);
  let f = (s.left + u.x) / l.x, h = (s.top + u.y) / l.y, p = s.width / l.x, v = s.height / l.y;
  if (c) {
    const x = en(c), g = o && bn(o) ? en(o) : o;
    let T = x, S = Nc(T);
    for (; S && o && g !== T; ) {
      const _ = Oi(S), E = S.getBoundingClientRect(), A = Sn(S), M = E.left + (S.clientLeft + parseFloat(A.paddingLeft)) * _.x, I = E.top + (S.clientTop + parseFloat(A.paddingTop)) * _.y;
      f *= _.x, h *= _.y, p *= _.x, v *= _.y, f += M, h += I, T = en(S), S = Nc(T);
    }
  }
  return ea({
    width: p,
    height: v,
    x: f,
    y: h
  });
}
function uu(e, t) {
  const r = wa(e).scrollLeft;
  return t ? t.left + r : ti(Fn(e)).left + r;
}
function qm(e, t, r) {
  r === void 0 && (r = !1);
  const o = e.getBoundingClientRect(), s = o.left + t.scrollLeft - (r ? 0 : (
    // RTL <body> scrollbar.
    uu(e, o)
  )), c = o.top + t.scrollTop;
  return {
    x: s,
    y: c
  };
}
function MP(e) {
  let {
    elements: t,
    rect: r,
    offsetParent: o,
    strategy: s
  } = e;
  const c = s === "fixed", l = Fn(o), u = t ? xa(t.floating) : !1;
  if (o === l || u && c)
    return r;
  let f = {
    scrollLeft: 0,
    scrollTop: 0
  }, h = In(1);
  const p = In(0), v = Vn(o);
  if ((v || !v && !c) && (($i(o) !== "body" || jo(l)) && (f = wa(o)), Vn(o))) {
    const g = ti(o);
    h = Oi(o), p.x = g.x + o.clientLeft, p.y = g.y + o.clientTop;
  }
  const x = l && !v && !c ? qm(l, f, !0) : In(0);
  return {
    width: r.width * h.x,
    height: r.height * h.y,
    x: r.x * h.x - f.scrollLeft * h.x + p.x + x.x,
    y: r.y * h.y - f.scrollTop * h.y + p.y + x.y
  };
}
function OP(e) {
  return Array.from(e.getClientRects());
}
function DP(e) {
  const t = Fn(e), r = wa(e), o = e.ownerDocument.body, s = Qt(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth), c = Qt(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight);
  let l = -r.scrollLeft + uu(e);
  const u = -r.scrollTop;
  return Sn(o).direction === "rtl" && (l += Qt(t.clientWidth, o.clientWidth) - s), {
    width: s,
    height: c,
    x: l,
    y: u
  };
}
function IP(e, t) {
  const r = en(e), o = Fn(e), s = r.visualViewport;
  let c = o.clientWidth, l = o.clientHeight, u = 0, f = 0;
  if (s) {
    c = s.width, l = s.height;
    const h = lu();
    (!h || h && t === "fixed") && (u = s.offsetLeft, f = s.offsetTop);
  }
  return {
    width: c,
    height: l,
    x: u,
    y: f
  };
}
function LP(e, t) {
  const r = ti(e, !0, t === "fixed"), o = r.top + e.clientTop, s = r.left + e.clientLeft, c = Vn(e) ? Oi(e) : In(1), l = e.clientWidth * c.x, u = e.clientHeight * c.y, f = s * c.x, h = o * c.y;
  return {
    width: l,
    height: u,
    x: f,
    y: h
  };
}
function Kh(e, t, r) {
  let o;
  if (t === "viewport")
    o = IP(e, r);
  else if (t === "document")
    o = DP(Fn(e));
  else if (bn(t))
    o = LP(t, r);
  else {
    const s = Ym(e);
    o = {
      x: t.x - s.x,
      y: t.y - s.y,
      width: t.width,
      height: t.height
    };
  }
  return ea(o);
}
function Xm(e, t) {
  const r = Er(e);
  return r === t || !bn(r) || Ii(r) ? !1 : Sn(r).position === "fixed" || Xm(r, t);
}
function jP(e, t) {
  const r = t.get(e);
  if (r)
    return r;
  let o = Ro(e, [], !1).filter((u) => bn(u) && $i(u) !== "body"), s = null;
  const c = Sn(e).position === "fixed";
  let l = c ? Er(e) : e;
  for (; bn(l) && !Ii(l); ) {
    const u = Sn(l), f = au(l);
    !f && u.position === "fixed" && (s = null), (c ? !f && !s : !f && u.position === "static" && !!s && ["absolute", "fixed"].includes(s.position) || jo(l) && !f && Xm(e, l)) ? o = o.filter((p) => p !== l) : s = u, l = Er(l);
  }
  return t.set(e, o), o;
}
function kP(e) {
  let {
    element: t,
    boundary: r,
    rootBoundary: o,
    strategy: s
  } = e;
  const l = [...r === "clippingAncestors" ? xa(t) ? [] : jP(t, this._c) : [].concat(r), o], u = l[0], f = l.reduce((h, p) => {
    const v = Kh(t, p, s);
    return h.top = Qt(v.top, h.top), h.right = _r(v.right, h.right), h.bottom = _r(v.bottom, h.bottom), h.left = Qt(v.left, h.left), h;
  }, Kh(t, u, s));
  return {
    width: f.right - f.left,
    height: f.bottom - f.top,
    x: f.left,
    y: f.top
  };
}
function VP(e) {
  const {
    width: t,
    height: r
  } = Km(e);
  return {
    width: t,
    height: r
  };
}
function FP(e, t, r) {
  const o = Vn(t), s = Fn(t), c = r === "fixed", l = ti(e, !0, c, t);
  let u = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const f = In(0);
  if (o || !o && !c)
    if (($i(t) !== "body" || jo(s)) && (u = wa(t)), o) {
      const x = ti(t, !0, c, t);
      f.x = x.x + t.clientLeft, f.y = x.y + t.clientTop;
    } else
      s && (f.x = uu(s));
  const h = s && !o && !c ? qm(s, u) : In(0), p = l.left + u.scrollLeft - f.x - h.x, v = l.top + u.scrollTop - f.y - h.y;
  return {
    x: p,
    y: v,
    width: l.width,
    height: l.height
  };
}
function ic(e) {
  return Sn(e).position === "static";
}
function Yh(e, t) {
  if (!Vn(e) || Sn(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let r = e.offsetParent;
  return Fn(e) === r && (r = r.ownerDocument.body), r;
}
function Zm(e, t) {
  const r = en(e);
  if (xa(e))
    return r;
  if (!Vn(e)) {
    let s = Er(e);
    for (; s && !Ii(s); ) {
      if (bn(s) && !ic(s))
        return s;
      s = Er(s);
    }
    return r;
  }
  let o = Yh(e, t);
  for (; o && EP(o) && ic(o); )
    o = Yh(o, t);
  return o && Ii(o) && ic(o) && !au(o) ? r : o || AP(e) || r;
}
const BP = async function(e) {
  const t = this.getOffsetParent || Zm, r = this.getDimensions, o = await r(e.floating);
  return {
    reference: FP(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: o.width,
      height: o.height
    }
  };
};
function WP(e) {
  return Sn(e).direction === "rtl";
}
const $P = {
  convertOffsetParentRelativeRectToViewportRelativeRect: MP,
  getDocumentElement: Fn,
  getClippingRect: kP,
  getOffsetParent: Zm,
  getElementRects: BP,
  getClientRects: OP,
  getDimensions: VP,
  getScale: Oi,
  isElement: bn,
  isRTL: WP
};
function UP(e, t) {
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
    const g = Ds(p), T = Ds(s.clientWidth - (h + v)), S = Ds(s.clientHeight - (p + x)), _ = Ds(h), A = {
      rootMargin: -g + "px " + -T + "px " + -S + "px " + -_ + "px",
      threshold: Qt(0, _r(1, f)) || 1
    };
    let M = !0;
    function I(j) {
      const U = j[0].intersectionRatio;
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
function HP(e, t, r, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: s = !0,
    ancestorResize: c = !0,
    elementResize: l = typeof ResizeObserver == "function",
    layoutShift: u = typeof IntersectionObserver == "function",
    animationFrame: f = !1
  } = o, h = cu(e), p = s || c ? [...h ? Ro(h) : [], ...Ro(t)] : [];
  p.forEach((E) => {
    s && E.addEventListener("scroll", r, {
      passive: !0
    }), c && E.addEventListener("resize", r);
  });
  const v = h && u ? UP(h, r) : null;
  let x = -1, g = null;
  l && (g = new ResizeObserver((E) => {
    let [A] = E;
    A && A.target === h && g && (g.unobserve(t), cancelAnimationFrame(x), x = requestAnimationFrame(() => {
      var M;
      (M = g) == null || M.observe(t);
    })), r();
  }), h && !f && g.observe(h), g.observe(t));
  let T, S = f ? ti(e) : null;
  f && _();
  function _() {
    const E = ti(e);
    S && (E.x !== S.x || E.y !== S.y || E.width !== S.width || E.height !== S.height) && r(), S = E, T = requestAnimationFrame(_);
  }
  return r(), () => {
    var E;
    p.forEach((A) => {
      s && A.removeEventListener("scroll", r), c && A.removeEventListener("resize", r);
    }), v == null || v(), (E = g) == null || E.disconnect(), g = null, f && cancelAnimationFrame(T);
  };
}
const zP = CP, GP = TP, KP = wP, YP = PP, qP = bP, qh = xP, XP = _P, ZP = (e, t, r) => {
  const o = /* @__PURE__ */ new Map(), s = {
    platform: $P,
    ...r
  }, c = {
    ...s.platform,
    _c: o
  };
  return yP(e, t, {
    ...s,
    platform: c
  });
};
var Hs = typeof document < "u" ? Sm : Io;
function ta(e, t) {
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
        if (!ta(e[o], t[o]))
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
      if (!(c === "_owner" && e.$$typeof) && !ta(e[c], t[c]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Jm(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Xh(e, t) {
  const r = Jm(e);
  return Math.round(t * r) / r;
}
function oc(e) {
  const t = C.useRef(e);
  return Hs(() => {
    t.current = e;
  }), t;
}
function JP(e) {
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
  } = e, [p, v] = C.useState({
    x: 0,
    y: 0,
    strategy: r,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [x, g] = C.useState(o);
  ta(x, o) || g(o);
  const [T, S] = C.useState(null), [_, E] = C.useState(null), A = C.useCallback((q) => {
    q !== U.current && (U.current = q, S(q));
  }, []), M = C.useCallback((q) => {
    q !== $.current && ($.current = q, E(q));
  }, []), I = c || T, j = l || _, U = C.useRef(null), $ = C.useRef(null), H = C.useRef(p), te = f != null, re = oc(f), de = oc(s), J = oc(h), se = C.useCallback(() => {
    if (!U.current || !$.current)
      return;
    const q = {
      placement: t,
      strategy: r,
      middleware: x
    };
    de.current && (q.platform = de.current), ZP(U.current, $.current, q).then((G) => {
      const pe = {
        ...G,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: J.current !== !1
      };
      ne.current && !ta(H.current, pe) && (H.current = pe, ma.flushSync(() => {
        v(pe);
      }));
    });
  }, [x, t, r, de, J]);
  Hs(() => {
    h === !1 && H.current.isPositioned && (H.current.isPositioned = !1, v((q) => ({
      ...q,
      isPositioned: !1
    })));
  }, [h]);
  const ne = C.useRef(!1);
  Hs(() => (ne.current = !0, () => {
    ne.current = !1;
  }), []), Hs(() => {
    if (I && (U.current = I), j && ($.current = j), I && j) {
      if (re.current)
        return re.current(I, j, se);
      se();
    }
  }, [I, j, se, re, te]);
  const Te = C.useMemo(() => ({
    reference: U,
    floating: $,
    setReference: A,
    setFloating: M
  }), [A, M]), ie = C.useMemo(() => ({
    reference: I,
    floating: j
  }), [I, j]), Z = C.useMemo(() => {
    const q = {
      position: r,
      left: 0,
      top: 0
    };
    if (!ie.floating)
      return q;
    const G = Xh(ie.floating, p.x), pe = Xh(ie.floating, p.y);
    return u ? {
      ...q,
      transform: "translate(" + G + "px, " + pe + "px)",
      ...Jm(ie.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: r,
      left: G,
      top: pe
    };
  }, [r, u, ie.floating, p.x, p.y]);
  return C.useMemo(() => ({
    ...p,
    update: se,
    refs: Te,
    elements: ie,
    floatingStyles: Z
  }), [p, se, Te, ie, Z]);
}
const QP = (e) => {
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
      return o && t(o) ? o.current != null ? qh({
        element: o.current,
        padding: s
      }).fn(r) : {} : o ? qh({
        element: o,
        padding: s
      }).fn(r) : {};
    }
  };
}, eE = (e, t) => ({
  ...zP(e),
  options: [e, t]
}), tE = (e, t) => ({
  ...GP(e),
  options: [e, t]
}), nE = (e, t) => ({
  ...XP(e),
  options: [e, t]
}), rE = (e, t) => ({
  ...KP(e),
  options: [e, t]
}), iE = (e, t) => ({
  ...YP(e),
  options: [e, t]
}), oE = (e, t) => ({
  ...qP(e),
  options: [e, t]
}), sE = (e, t) => ({
  ...QP(e),
  options: [e, t]
});
var aE = "Arrow", Qm = C.forwardRef((e, t) => {
  const { children: r, width: o = 10, height: s = 5, ...c } = e;
  return /* @__PURE__ */ y.jsx(
    He.svg,
    {
      ...c,
      ref: t,
      width: o,
      height: s,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? r : /* @__PURE__ */ y.jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
Qm.displayName = aE;
var lE = Qm;
function cE(e, t = []) {
  let r = [];
  function o(c, l) {
    const u = C.createContext(l), f = r.length;
    r = [...r, l];
    function h(v) {
      const { scope: x, children: g, ...T } = v, S = (x == null ? void 0 : x[e][f]) || u, _ = C.useMemo(() => T, Object.values(T));
      return /* @__PURE__ */ y.jsx(S.Provider, { value: _, children: g });
    }
    function p(v, x) {
      const g = (x == null ? void 0 : x[e][f]) || u, T = C.useContext(g);
      if (T)
        return T;
      if (l !== void 0)
        return l;
      throw new Error(`\`${v}\` must be used within \`${c}\``);
    }
    return h.displayName = c + "Provider", [h, p];
  }
  const s = () => {
    const c = r.map((l) => C.createContext(l));
    return function(u) {
      const f = (u == null ? void 0 : u[e]) || c;
      return C.useMemo(
        () => ({ [`__scope${e}`]: { ...u, [e]: f } }),
        [u, f]
      );
    };
  };
  return s.scopeName = e, [o, uE(s, ...t)];
}
function uE(...e) {
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
      return C.useMemo(() => ({ [`__scope${t.scopeName}`]: l }), [l]);
    };
  };
  return r.scopeName = t.scopeName, r;
}
function fE(e) {
  const [t, r] = C.useState(void 0);
  return jt(() => {
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
var fu = "Popper", [eg, ba] = cE(fu), [dE, tg] = eg(fu), ng = (e) => {
  const { __scopePopper: t, children: r } = e, [o, s] = C.useState(null);
  return /* @__PURE__ */ y.jsx(dE, { scope: t, anchor: o, onAnchorChange: s, children: r });
};
ng.displayName = fu;
var rg = "PopperAnchor", ig = C.forwardRef(
  (e, t) => {
    const { __scopePopper: r, virtualRef: o, ...s } = e, c = tg(rg, r), l = C.useRef(null), u = rt(t, l);
    return C.useEffect(() => {
      c.onAnchorChange((o == null ? void 0 : o.current) || l.current);
    }), o ? null : /* @__PURE__ */ y.jsx(He.div, { ...s, ref: u });
  }
);
ig.displayName = rg;
var du = "PopperContent", [hE, pE] = eg(du), og = C.forwardRef(
  (e, t) => {
    var X, we, je, Se, ve, Pe;
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
      updatePositionStrategy: g = "optimized",
      onPlaced: T,
      ...S
    } = e, _ = tg(du, r), [E, A] = C.useState(null), M = rt(t, (st) => A(st)), [I, j] = C.useState(null), U = fE(I), $ = (U == null ? void 0 : U.width) ?? 0, H = (U == null ? void 0 : U.height) ?? 0, te = o + (c !== "center" ? "-" + c : ""), re = typeof p == "number" ? p : { top: 0, right: 0, bottom: 0, left: 0, ...p }, de = Array.isArray(h) ? h : [h], J = de.length > 0, se = {
      padding: re,
      boundary: de.filter(gE),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: J
    }, { refs: ne, floatingStyles: Te, placement: ie, isPositioned: Z, middlewareData: q } = JP({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: te,
      whileElementsMounted: (...st) => HP(...st, {
        animationFrame: g === "always"
      }),
      elements: {
        reference: _.anchor
      },
      middleware: [
        eE({ mainAxis: s + H, alignmentAxis: l }),
        f && tE({
          mainAxis: !0,
          crossAxis: !1,
          limiter: v === "partial" ? nE() : void 0,
          ...se
        }),
        f && rE({ ...se }),
        iE({
          ...se,
          apply: ({ elements: st, rects: Ke, availableWidth: ft, availableHeight: Nt }) => {
            const { width: at, height: nn } = Ke.reference, kt = st.floating.style;
            kt.setProperty("--radix-popper-available-width", `${ft}px`), kt.setProperty("--radix-popper-available-height", `${Nt}px`), kt.setProperty("--radix-popper-anchor-width", `${at}px`), kt.setProperty("--radix-popper-anchor-height", `${nn}px`);
          }
        }),
        I && sE({ element: I, padding: u }),
        vE({ arrowWidth: $, arrowHeight: H }),
        x && oE({ strategy: "referenceHidden", ...se })
      ]
    }), [G, pe] = lg(ie), Ae = tr(T);
    jt(() => {
      Z && (Ae == null || Ae());
    }, [Z, Ae]);
    const _e = (X = q.arrow) == null ? void 0 : X.x, ge = (we = q.arrow) == null ? void 0 : we.y, Re = ((je = q.arrow) == null ? void 0 : je.centerOffset) !== 0, [Fe, Je] = C.useState();
    return jt(() => {
      E && Je(window.getComputedStyle(E).zIndex);
    }, [E]), /* @__PURE__ */ y.jsx(
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
        children: /* @__PURE__ */ y.jsx(
          hE,
          {
            scope: r,
            placedSide: G,
            onArrowChange: j,
            arrowX: _e,
            arrowY: ge,
            shouldHideArrow: Re,
            children: /* @__PURE__ */ y.jsx(
              He.div,
              {
                "data-side": G,
                "data-align": pe,
                ...S,
                ref: M,
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
og.displayName = du;
var sg = "PopperArrow", mE = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, ag = C.forwardRef(function(t, r) {
  const { __scopePopper: o, ...s } = t, c = pE(sg, o), l = mE[c.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ y.jsx(
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
        children: /* @__PURE__ */ y.jsx(
          lE,
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
ag.displayName = sg;
function gE(e) {
  return e !== null;
}
var vE = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var _, E, A;
    const { placement: r, rects: o, middlewareData: s } = t, l = ((_ = s.arrow) == null ? void 0 : _.centerOffset) !== 0, u = l ? 0 : e.arrowWidth, f = l ? 0 : e.arrowHeight, [h, p] = lg(r), v = { start: "0%", center: "50%", end: "100%" }[p], x = (((E = s.arrow) == null ? void 0 : E.x) ?? 0) + u / 2, g = (((A = s.arrow) == null ? void 0 : A.y) ?? 0) + f / 2;
    let T = "", S = "";
    return h === "bottom" ? (T = l ? v : `${x}px`, S = `${-f}px`) : h === "top" ? (T = l ? v : `${x}px`, S = `${o.floating.height + f}px`) : h === "right" ? (T = `${-f}px`, S = l ? v : `${g}px`) : h === "left" && (T = `${o.floating.width + f}px`, S = l ? v : `${g}px`), { data: { x: T, y: S } };
  }
});
function lg(e) {
  const [t, r = "center"] = e.split("-");
  return [t, r];
}
var cg = ng, ug = ig, fg = og, dg = ag, yE = "Portal", hu = C.forwardRef((e, t) => {
  var u;
  const { container: r, ...o } = e, [s, c] = C.useState(!1);
  jt(() => c(!0), []);
  const l = r || s && ((u = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : u.body);
  return l ? _m.createPortal(/* @__PURE__ */ y.jsx(He.div, { ...o, ref: t }), l) : null;
});
hu.displayName = yE;
function na({
  prop: e,
  defaultProp: t,
  onChange: r = () => {
  }
}) {
  const [o, s] = xE({ defaultProp: t, onChange: r }), c = e !== void 0, l = c ? e : o, u = tr(r), f = C.useCallback(
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
function xE({
  defaultProp: e,
  onChange: t
}) {
  const r = C.useState(e), [o] = r, s = C.useRef(o), c = tr(t);
  return C.useEffect(() => {
    s.current !== o && (c(o), s.current = o);
  }, [o, s, c]), r;
}
function wE(e) {
  const t = C.useRef({ value: e, previous: e });
  return C.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
var bE = "VisuallyHidden", pu = C.forwardRef(
  (e, t) => /* @__PURE__ */ y.jsx(
    He.span,
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
pu.displayName = bE;
var SE = pu, CE = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Ci = /* @__PURE__ */ new WeakMap(), Is = /* @__PURE__ */ new WeakMap(), Ls = {}, sc = 0, hg = function(e) {
  return e && (e.host || hg(e.parentNode));
}, TE = function(e, t) {
  return t.map(function(r) {
    if (e.contains(r))
      return r;
    var o = hg(r);
    return o && e.contains(o) ? o : (console.error("aria-hidden", r, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(r) {
    return !!r;
  });
}, _E = function(e, t, r, o) {
  var s = TE(t, Array.isArray(e) ? e : [e]);
  Ls[r] || (Ls[r] = /* @__PURE__ */ new WeakMap());
  var c = Ls[r], l = [], u = /* @__PURE__ */ new Set(), f = new Set(s), h = function(v) {
    !v || u.has(v) || (u.add(v), h(v.parentNode));
  };
  s.forEach(h);
  var p = function(v) {
    !v || f.has(v) || Array.prototype.forEach.call(v.children, function(x) {
      if (u.has(x))
        p(x);
      else
        try {
          var g = x.getAttribute(o), T = g !== null && g !== "false", S = (Ci.get(x) || 0) + 1, _ = (c.get(x) || 0) + 1;
          Ci.set(x, S), c.set(x, _), l.push(x), S === 1 && T && Is.set(x, !0), _ === 1 && x.setAttribute(r, "true"), T || x.setAttribute(o, "true");
        } catch (E) {
          console.error("aria-hidden: cannot operate on ", x, E);
        }
    });
  };
  return p(t), u.clear(), sc++, function() {
    l.forEach(function(v) {
      var x = Ci.get(v) - 1, g = c.get(v) - 1;
      Ci.set(v, x), c.set(v, g), x || (Is.has(v) || v.removeAttribute(o), Is.delete(v)), g || v.removeAttribute(r);
    }), sc--, sc || (Ci = /* @__PURE__ */ new WeakMap(), Ci = /* @__PURE__ */ new WeakMap(), Is = /* @__PURE__ */ new WeakMap(), Ls = {});
  };
}, pg = function(e, t, r) {
  r === void 0 && (r = "data-aria-hidden");
  var o = Array.from(Array.isArray(e) ? e : [e]), s = CE(e);
  return s ? (o.push.apply(o, Array.from(s.querySelectorAll("[aria-live]"))), _E(o, s, r, "aria-hidden")) : function() {
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
function PE(e, t) {
  var r = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (r[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, o = Object.getOwnPropertySymbols(e); s < o.length; s++)
      t.indexOf(o[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[s]) && (r[o[s]] = e[o[s]]);
  return r;
}
function EE(e, t, r) {
  if (r || arguments.length === 2)
    for (var o = 0, s = t.length, c; o < s; o++)
      (c || !(o in t)) && (c || (c = Array.prototype.slice.call(t, 0, o)), c[o] = t[o]);
  return e.concat(c || Array.prototype.slice.call(t));
}
var zs = "right-scroll-bar-position", Gs = "width-before-scroll-bar", AE = "with-scroll-bars-hidden", RE = "--removed-body-scroll-bar-size";
function ac(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function NE(e, t) {
  var r = Po(function() {
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
var ME = typeof window < "u" ? C.useLayoutEffect : C.useEffect, Zh = /* @__PURE__ */ new WeakMap();
function OE(e, t) {
  var r = NE(null, function(o) {
    return e.forEach(function(s) {
      return ac(s, o);
    });
  });
  return ME(function() {
    var o = Zh.get(r);
    if (o) {
      var s = new Set(o), c = new Set(e), l = r.current;
      s.forEach(function(u) {
        c.has(u) || ac(u, null);
      }), c.forEach(function(u) {
        s.has(u) || ac(u, l);
      });
    }
    Zh.set(r, e);
  }, [e]), r;
}
var ra = function() {
  return ra = Object.assign || function(t) {
    for (var r, o = 1, s = arguments.length; o < s; o++) {
      r = arguments[o];
      for (var c in r)
        Object.prototype.hasOwnProperty.call(r, c) && (t[c] = r[c]);
    }
    return t;
  }, ra.apply(this, arguments);
};
function DE(e, t) {
  var r = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (r[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, o = Object.getOwnPropertySymbols(e); s < o.length; s++)
      t.indexOf(o[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[s]) && (r[o[s]] = e[o[s]]);
  return r;
}
function IE(e) {
  return e;
}
function LE(e, t) {
  t === void 0 && (t = IE);
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
function jE(e) {
  e === void 0 && (e = {});
  var t = LE(null);
  return t.options = ra({ async: !0, ssr: !1 }, e), t;
}
var mg = function(e) {
  var t = e.sideCar, r = DE(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var o = t.read();
  if (!o)
    throw new Error("Sidecar medium not found");
  return C.createElement(o, ra({}, r));
};
mg.isSideCarExport = !0;
function kE(e, t) {
  return e.useMedium(t), mg;
}
var gg = jE(), lc = function() {
}, Sa = C.forwardRef(function(e, t) {
  var r = C.useRef(null), o = C.useState({
    onScrollCapture: lc,
    onWheelCapture: lc,
    onTouchMoveCapture: lc
  }), s = o[0], c = o[1], l = e.forwardProps, u = e.children, f = e.className, h = e.removeScrollBar, p = e.enabled, v = e.shards, x = e.sideCar, g = e.noIsolation, T = e.inert, S = e.allowPinchZoom, _ = e.as, E = _ === void 0 ? "div" : _, A = e.gapMode, M = PE(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), I = x, j = OE([r, t]), U = br(br({}, M), s);
  return C.createElement(
    C.Fragment,
    null,
    p && C.createElement(I, { sideCar: gg, removeScrollBar: h, shards: v, noIsolation: g, inert: T, setCallbacks: c, allowPinchZoom: !!S, lockRef: r, gapMode: A }),
    l ? C.cloneElement(C.Children.only(u), br(br({}, U), { ref: j })) : C.createElement(E, br({}, U, { className: f, ref: j }), u)
  );
});
Sa.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Sa.classNames = {
  fullWidth: Gs,
  zeroRight: zs
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
    add: function(r) {
      e == 0 && (t = FE()) && (BE(t, r), WE(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, UE = function() {
  var e = $E();
  return function(t, r) {
    C.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && r]);
  };
}, vg = function() {
  var e = UE(), t = function(r) {
    var o = r.styles, s = r.dynamic;
    return e(o, s), null;
  };
  return t;
}, HE = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, cc = function(e) {
  return parseInt(e || "", 10) || 0;
}, zE = function(e) {
  var t = window.getComputedStyle(document.body), r = t[e === "padding" ? "paddingLeft" : "marginLeft"], o = t[e === "padding" ? "paddingTop" : "marginTop"], s = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [cc(r), cc(o), cc(s)];
}, GE = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return HE;
  var t = zE(e), r = document.documentElement.clientWidth, o = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, o - r + t[2] - t[0])
  };
}, KE = vg(), Di = "data-scroll-locked", YE = function(e, t, r, o) {
  var s = e.left, c = e.top, l = e.right, u = e.gap;
  return r === void 0 && (r = "margin"), `
  .`.concat(AE, ` {
   overflow: hidden `).concat(o, `;
   padding-right: `).concat(u, "px ").concat(o, `;
  }
  body[`).concat(Di, `] {
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
  
  .`).concat(zs, ` {
    right: `).concat(u, "px ").concat(o, `;
  }
  
  .`).concat(Gs, ` {
    margin-right: `).concat(u, "px ").concat(o, `;
  }
  
  .`).concat(zs, " .").concat(zs, ` {
    right: 0 `).concat(o, `;
  }
  
  .`).concat(Gs, " .").concat(Gs, ` {
    margin-right: 0 `).concat(o, `;
  }
  
  body[`).concat(Di, `] {
    `).concat(RE, ": ").concat(u, `px;
  }
`);
}, Jh = function() {
  var e = parseInt(document.body.getAttribute(Di) || "0", 10);
  return isFinite(e) ? e : 0;
}, qE = function() {
  C.useEffect(function() {
    return document.body.setAttribute(Di, (Jh() + 1).toString()), function() {
      var e = Jh() - 1;
      e <= 0 ? document.body.removeAttribute(Di) : document.body.setAttribute(Di, e.toString());
    };
  }, []);
}, XE = function(e) {
  var t = e.noRelative, r = e.noImportant, o = e.gapMode, s = o === void 0 ? "margin" : o;
  qE();
  var c = C.useMemo(function() {
    return GE(s);
  }, [s]);
  return C.createElement(KE, { styles: YE(c, !t, s, r ? "" : "!important") });
}, Mc = !1;
if (typeof window < "u")
  try {
    var js = Object.defineProperty({}, "passive", {
      get: function() {
        return Mc = !0, !0;
      }
    });
    window.addEventListener("test", js, js), window.removeEventListener("test", js, js);
  } catch {
    Mc = !1;
  }
var Ti = Mc ? { passive: !1 } : !1, ZE = function(e) {
  return e.tagName === "TEXTAREA";
}, yg = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var r = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    r[t] !== "hidden" && // contains scroll inside self
    !(r.overflowY === r.overflowX && !ZE(e) && r[t] === "visible")
  );
}, JE = function(e) {
  return yg(e, "overflowY");
}, QE = function(e) {
  return yg(e, "overflowX");
}, Qh = function(e, t) {
  var r = t.ownerDocument, o = t;
  do {
    typeof ShadowRoot < "u" && o instanceof ShadowRoot && (o = o.host);
    var s = xg(e, o);
    if (s) {
      var c = wg(e, o), l = c[1], u = c[2];
      if (l > u)
        return !0;
    }
    o = o.parentNode;
  } while (o && o !== r.body);
  return !1;
}, eA = function(e) {
  var t = e.scrollTop, r = e.scrollHeight, o = e.clientHeight;
  return [
    t,
    r,
    o
  ];
}, tA = function(e) {
  var t = e.scrollLeft, r = e.scrollWidth, o = e.clientWidth;
  return [
    t,
    r,
    o
  ];
}, xg = function(e, t) {
  return e === "v" ? JE(t) : QE(t);
}, wg = function(e, t) {
  return e === "v" ? eA(t) : tA(t);
}, nA = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, rA = function(e, t, r, o, s) {
  var c = nA(e, window.getComputedStyle(t).direction), l = c * o, u = r.target, f = t.contains(u), h = !1, p = l > 0, v = 0, x = 0;
  do {
    var g = wg(e, u), T = g[0], S = g[1], _ = g[2], E = S - _ - c * T;
    (T || E) && xg(e, u) && (v += E, x += T), u instanceof ShadowRoot ? u = u.host : u = u.parentNode;
  } while (
    // portaled content
    !f && u !== document.body || // self content
    f && (t.contains(u) || t === u)
  );
  return (p && (Math.abs(v) < 1 || !s) || !p && (Math.abs(x) < 1 || !s)) && (h = !0), h;
}, ks = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, ep = function(e) {
  return [e.deltaX, e.deltaY];
}, tp = function(e) {
  return e && "current" in e ? e.current : e;
}, iA = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, oA = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, sA = 0, _i = [];
function aA(e) {
  var t = C.useRef([]), r = C.useRef([0, 0]), o = C.useRef(), s = C.useState(sA++)[0], c = C.useState(vg)[0], l = C.useRef(e);
  C.useEffect(function() {
    l.current = e;
  }, [e]), C.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(s));
      var S = EE([e.lockRef.current], (e.shards || []).map(tp), !0).filter(Boolean);
      return S.forEach(function(_) {
        return _.classList.add("allow-interactivity-".concat(s));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(s)), S.forEach(function(_) {
          return _.classList.remove("allow-interactivity-".concat(s));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var u = C.useCallback(function(S, _) {
    if ("touches" in S && S.touches.length === 2 || S.type === "wheel" && S.ctrlKey)
      return !l.current.allowPinchZoom;
    var E = ks(S), A = r.current, M = "deltaX" in S ? S.deltaX : A[0] - E[0], I = "deltaY" in S ? S.deltaY : A[1] - E[1], j, U = S.target, $ = Math.abs(M) > Math.abs(I) ? "h" : "v";
    if ("touches" in S && $ === "h" && U.type === "range")
      return !1;
    var H = Qh($, U);
    if (!H)
      return !0;
    if (H ? j = $ : (j = $ === "v" ? "h" : "v", H = Qh($, U)), !H)
      return !1;
    if (!o.current && "changedTouches" in S && (M || I) && (o.current = j), !j)
      return !0;
    var te = o.current || j;
    return rA(te, _, S, te === "h" ? M : I, !0);
  }, []), f = C.useCallback(function(S) {
    var _ = S;
    if (!(!_i.length || _i[_i.length - 1] !== c)) {
      var E = "deltaY" in _ ? ep(_) : ks(_), A = t.current.filter(function(j) {
        return j.name === _.type && (j.target === _.target || _.target === j.shadowParent) && iA(j.delta, E);
      })[0];
      if (A && A.should) {
        _.cancelable && _.preventDefault();
        return;
      }
      if (!A) {
        var M = (l.current.shards || []).map(tp).filter(Boolean).filter(function(j) {
          return j.contains(_.target);
        }), I = M.length > 0 ? u(_, M[0]) : !l.current.noIsolation;
        I && _.cancelable && _.preventDefault();
      }
    }
  }, []), h = C.useCallback(function(S, _, E, A) {
    var M = { name: S, delta: _, target: E, should: A, shadowParent: lA(E) };
    t.current.push(M), setTimeout(function() {
      t.current = t.current.filter(function(I) {
        return I !== M;
      });
    }, 1);
  }, []), p = C.useCallback(function(S) {
    r.current = ks(S), o.current = void 0;
  }, []), v = C.useCallback(function(S) {
    h(S.type, ep(S), S.target, u(S, e.lockRef.current));
  }, []), x = C.useCallback(function(S) {
    h(S.type, ks(S), S.target, u(S, e.lockRef.current));
  }, []);
  C.useEffect(function() {
    return _i.push(c), e.setCallbacks({
      onScrollCapture: v,
      onWheelCapture: v,
      onTouchMoveCapture: x
    }), document.addEventListener("wheel", f, Ti), document.addEventListener("touchmove", f, Ti), document.addEventListener("touchstart", p, Ti), function() {
      _i = _i.filter(function(S) {
        return S !== c;
      }), document.removeEventListener("wheel", f, Ti), document.removeEventListener("touchmove", f, Ti), document.removeEventListener("touchstart", p, Ti);
    };
  }, []);
  var g = e.removeScrollBar, T = e.inert;
  return C.createElement(
    C.Fragment,
    null,
    T ? C.createElement(c, { styles: oA(s) }) : null,
    g ? C.createElement(XE, { gapMode: e.gapMode }) : null
  );
}
function lA(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const cA = kE(gg, aA);
var mu = C.forwardRef(function(e, t) {
  return C.createElement(Sa, br({}, e, { ref: t, sideCar: cA }));
});
mu.classNames = Sa.classNames;
var uA = [" ", "Enter", "ArrowUp", "ArrowDown"], fA = [" ", "Enter"], ko = "Select", [Ca, Ta, dA] = B_(ko), [Ui, VD] = nu(ko, [
  dA,
  ba
]), _a = ba(), [hA, Or] = Ui(ko), [pA, mA] = Ui(ko), bg = (e) => {
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
    required: g,
    form: T
  } = e, S = _a(t), [_, E] = C.useState(null), [A, M] = C.useState(null), [I, j] = C.useState(!1), U = H_(h), [$ = !1, H] = na({
    prop: o,
    defaultProp: s,
    onChange: c
  }), [te, re] = na({
    prop: l,
    defaultProp: u,
    onChange: f
  }), de = C.useRef(null), J = _ ? T || !!_.closest("form") : !0, [se, ne] = C.useState(/* @__PURE__ */ new Set()), Te = Array.from(se).map((ie) => ie.props.value).join(";");
  return /* @__PURE__ */ y.jsx(cg, { ...S, children: /* @__PURE__ */ y.jsxs(
    hA,
    {
      required: g,
      scope: t,
      trigger: _,
      onTriggerChange: E,
      valueNode: A,
      onValueNodeChange: M,
      valueNodeHasChildren: I,
      onValueNodeHasChildrenChange: j,
      contentId: Jr(),
      value: te,
      onValueChange: re,
      open: $,
      onOpenChange: H,
      dir: U,
      triggerPointerDownPosRef: de,
      disabled: x,
      children: [
        /* @__PURE__ */ y.jsx(Ca.Provider, { scope: t, children: /* @__PURE__ */ y.jsx(
          pA,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: C.useCallback((ie) => {
              ne((Z) => new Set(Z).add(ie));
            }, []),
            onNativeOptionRemove: C.useCallback((ie) => {
              ne((Z) => {
                const q = new Set(Z);
                return q.delete(ie), q;
              });
            }, []),
            children: r
          }
        ) }),
        J ? /* @__PURE__ */ y.jsxs(
          Gg,
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
              te === void 0 ? /* @__PURE__ */ y.jsx("option", { value: "" }) : null,
              Array.from(se)
            ]
          },
          Te
        ) : null
      ]
    }
  ) });
};
bg.displayName = ko;
var Sg = "SelectTrigger", Cg = C.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, disabled: o = !1, ...s } = e, c = _a(r), l = Or(Sg, r), u = l.disabled || o, f = rt(t, l.onTriggerChange), h = Ta(r), p = C.useRef("touch"), [v, x, g] = Kg((S) => {
      const _ = h().filter((M) => !M.disabled), E = _.find((M) => M.value === l.value), A = Yg(_, S, E);
      A !== void 0 && l.onValueChange(A.value);
    }), T = (S) => {
      u || (l.onOpenChange(!0), g()), S && (l.triggerPointerDownPosRef.current = {
        x: Math.round(S.pageX),
        y: Math.round(S.pageY)
      });
    };
    return /* @__PURE__ */ y.jsx(ug, { asChild: !0, ...c, children: /* @__PURE__ */ y.jsx(
      He.button,
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
        "data-placeholder": zg(l.value) ? "" : void 0,
        ...s,
        ref: f,
        onClick: Ve(s.onClick, (S) => {
          S.currentTarget.focus(), p.current !== "mouse" && T(S);
        }),
        onPointerDown: Ve(s.onPointerDown, (S) => {
          p.current = S.pointerType;
          const _ = S.target;
          _.hasPointerCapture(S.pointerId) && _.releasePointerCapture(S.pointerId), S.button === 0 && S.ctrlKey === !1 && S.pointerType === "mouse" && (T(S), S.preventDefault());
        }),
        onKeyDown: Ve(s.onKeyDown, (S) => {
          const _ = v.current !== "";
          !(S.ctrlKey || S.altKey || S.metaKey) && S.key.length === 1 && x(S.key), !(_ && S.key === " ") && uA.includes(S.key) && (T(), S.preventDefault());
        })
      }
    ) });
  }
);
Cg.displayName = Sg;
var Tg = "SelectValue", _g = C.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, className: o, style: s, children: c, placeholder: l = "", ...u } = e, f = Or(Tg, r), { onValueNodeHasChildrenChange: h } = f, p = c !== void 0, v = rt(t, f.onValueNodeChange);
    return jt(() => {
      h(p);
    }, [h, p]), /* @__PURE__ */ y.jsx(
      He.span,
      {
        ...u,
        ref: v,
        style: { pointerEvents: "none" },
        children: zg(f.value) ? /* @__PURE__ */ y.jsx(y.Fragment, { children: l }) : c
      }
    );
  }
);
_g.displayName = Tg;
var gA = "SelectIcon", Pg = C.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, children: o, ...s } = e;
    return /* @__PURE__ */ y.jsx(He.span, { "aria-hidden": !0, ...s, ref: t, children: o || "▼" });
  }
);
Pg.displayName = gA;
var vA = "SelectPortal", Eg = (e) => /* @__PURE__ */ y.jsx(hu, { asChild: !0, ...e });
Eg.displayName = vA;
var ni = "SelectContent", Ag = C.forwardRef(
  (e, t) => {
    const r = Or(ni, e.__scopeSelect), [o, s] = C.useState();
    if (jt(() => {
      s(new DocumentFragment());
    }, []), !r.open) {
      const c = o;
      return c ? ma.createPortal(
        /* @__PURE__ */ y.jsx(Rg, { scope: e.__scopeSelect, children: /* @__PURE__ */ y.jsx(Ca.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ y.jsx("div", { children: e.children }) }) }),
        c
      ) : null;
    }
    return /* @__PURE__ */ y.jsx(Ng, { ...e, ref: t });
  }
);
Ag.displayName = ni;
var wn = 10, [Rg, Dr] = Ui(ni), yA = "SelectContentImpl", Ng = C.forwardRef(
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
      collisionPadding: g,
      sticky: T,
      hideWhenDetached: S,
      avoidCollisions: _,
      //
      ...E
    } = e, A = Or(ni, r), [M, I] = C.useState(null), [j, U] = C.useState(null), $ = rt(t, (X) => I(X)), [H, te] = C.useState(null), [re, de] = C.useState(
      null
    ), J = Ta(r), [se, ne] = C.useState(!1), Te = C.useRef(!1);
    C.useEffect(() => {
      if (M)
        return pg(M);
    }, [M]), $m();
    const ie = C.useCallback(
      (X) => {
        const [we, ...je] = J().map((Pe) => Pe.ref.current), [Se] = je.slice(-1), ve = document.activeElement;
        for (const Pe of X)
          if (Pe === ve || (Pe == null || Pe.scrollIntoView({ block: "nearest" }), Pe === we && j && (j.scrollTop = 0), Pe === Se && j && (j.scrollTop = j.scrollHeight), Pe == null || Pe.focus(), document.activeElement !== ve))
            return;
      },
      [J, j]
    ), Z = C.useCallback(
      () => ie([H, M]),
      [ie, H, M]
    );
    C.useEffect(() => {
      se && Z();
    }, [se, Z]);
    const { onOpenChange: q, triggerPointerDownPosRef: G } = A;
    C.useEffect(() => {
      if (M) {
        let X = { x: 0, y: 0 };
        const we = (Se) => {
          var ve, Pe;
          X = {
            x: Math.abs(Math.round(Se.pageX) - (((ve = G.current) == null ? void 0 : ve.x) ?? 0)),
            y: Math.abs(Math.round(Se.pageY) - (((Pe = G.current) == null ? void 0 : Pe.y) ?? 0))
          };
        }, je = (Se) => {
          X.x <= 10 && X.y <= 10 ? Se.preventDefault() : M.contains(Se.target) || q(!1), document.removeEventListener("pointermove", we), G.current = null;
        };
        return G.current !== null && (document.addEventListener("pointermove", we), document.addEventListener("pointerup", je, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", we), document.removeEventListener("pointerup", je, { capture: !0 });
        };
      }
    }, [M, q, G]), C.useEffect(() => {
      const X = () => q(!1);
      return window.addEventListener("blur", X), window.addEventListener("resize", X), () => {
        window.removeEventListener("blur", X), window.removeEventListener("resize", X);
      };
    }, [q]);
    const [pe, Ae] = Kg((X) => {
      const we = J().filter((ve) => !ve.disabled), je = we.find((ve) => ve.ref.current === document.activeElement), Se = Yg(we, X, je);
      Se && setTimeout(() => Se.ref.current.focus());
    }), _e = C.useCallback(
      (X, we, je) => {
        const Se = !Te.current && !je;
        (A.value !== void 0 && A.value === we || Se) && (te(X), Se && (Te.current = !0));
      },
      [A.value]
    ), ge = C.useCallback(() => M == null ? void 0 : M.focus(), [M]), Re = C.useCallback(
      (X, we, je) => {
        const Se = !Te.current && !je;
        (A.value !== void 0 && A.value === we || Se) && de(X);
      },
      [A.value]
    ), Fe = o === "popper" ? Oc : Mg, Je = Fe === Oc ? {
      side: u,
      sideOffset: f,
      align: h,
      alignOffset: p,
      arrowPadding: v,
      collisionBoundary: x,
      collisionPadding: g,
      sticky: T,
      hideWhenDetached: S,
      avoidCollisions: _
    } : {};
    return /* @__PURE__ */ y.jsx(
      Rg,
      {
        scope: r,
        content: M,
        viewport: j,
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
        children: /* @__PURE__ */ y.jsx(mu, { as: ei, allowPinchZoom: !0, children: /* @__PURE__ */ y.jsx(
          ru,
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
            children: /* @__PURE__ */ y.jsx(
              va,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: c,
                onPointerDownOutside: l,
                onFocusOutside: (X) => X.preventDefault(),
                onDismiss: () => A.onOpenChange(!1),
                children: /* @__PURE__ */ y.jsx(
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
Ng.displayName = yA;
var xA = "SelectItemAlignedPosition", Mg = C.forwardRef((e, t) => {
  const { __scopeSelect: r, onPlaced: o, ...s } = e, c = Or(ni, r), l = Dr(ni, r), [u, f] = C.useState(null), [h, p] = C.useState(null), v = rt(t, ($) => p($)), x = Ta(r), g = C.useRef(!1), T = C.useRef(!0), { viewport: S, selectedItem: _, selectedItemText: E, focusSelectedItem: A } = l, M = C.useCallback(() => {
    if (c.trigger && c.valueNode && u && h && S && _ && E) {
      const $ = c.trigger.getBoundingClientRect(), H = h.getBoundingClientRect(), te = c.valueNode.getBoundingClientRect(), re = E.getBoundingClientRect();
      if (c.dir !== "rtl") {
        const ve = re.left - H.left, Pe = te.left - ve, st = $.left - Pe, Ke = $.width + st, ft = Math.max(Ke, H.width), Nt = window.innerWidth - wn, at = Lh(Pe, [
          wn,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(wn, Nt - ft)
        ]);
        u.style.minWidth = Ke + "px", u.style.left = at + "px";
      } else {
        const ve = H.right - re.right, Pe = window.innerWidth - te.right - ve, st = window.innerWidth - $.right - Pe, Ke = $.width + st, ft = Math.max(Ke, H.width), Nt = window.innerWidth - wn, at = Lh(Pe, [
          wn,
          Math.max(wn, Nt - ft)
        ]);
        u.style.minWidth = Ke + "px", u.style.right = at + "px";
      }
      const de = x(), J = window.innerHeight - wn * 2, se = S.scrollHeight, ne = window.getComputedStyle(h), Te = parseInt(ne.borderTopWidth, 10), ie = parseInt(ne.paddingTop, 10), Z = parseInt(ne.borderBottomWidth, 10), q = parseInt(ne.paddingBottom, 10), G = Te + ie + se + q + Z, pe = Math.min(_.offsetHeight * 5, G), Ae = window.getComputedStyle(S), _e = parseInt(Ae.paddingTop, 10), ge = parseInt(Ae.paddingBottom, 10), Re = $.top + $.height / 2 - wn, Fe = J - Re, Je = _.offsetHeight / 2, X = _.offsetTop + Je, we = Te + ie + X, je = G - we;
      if (we <= Re) {
        const ve = de.length > 0 && _ === de[de.length - 1].ref.current;
        u.style.bottom = "0px";
        const Pe = h.clientHeight - S.offsetTop - S.offsetHeight, st = Math.max(
          Fe,
          Je + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (ve ? ge : 0) + Pe + Z
        ), Ke = we + st;
        u.style.height = Ke + "px";
      } else {
        const ve = de.length > 0 && _ === de[0].ref.current;
        u.style.top = "0px";
        const st = Math.max(
          Re,
          Te + S.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (ve ? _e : 0) + Je
        ) + je;
        u.style.height = st + "px", S.scrollTop = we - Re + S.offsetTop;
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
    E,
    c.dir,
    o
  ]);
  jt(() => M(), [M]);
  const [I, j] = C.useState();
  jt(() => {
    h && j(window.getComputedStyle(h).zIndex);
  }, [h]);
  const U = C.useCallback(
    ($) => {
      $ && T.current === !0 && (M(), A == null || A(), T.current = !1);
    },
    [M, A]
  );
  return /* @__PURE__ */ y.jsx(
    bA,
    {
      scope: r,
      contentWrapper: u,
      shouldExpandOnScrollRef: g,
      onScrollButtonChange: U,
      children: /* @__PURE__ */ y.jsx(
        "div",
        {
          ref: f,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: I
          },
          children: /* @__PURE__ */ y.jsx(
            He.div,
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
Mg.displayName = xA;
var wA = "SelectPopperPosition", Oc = C.forwardRef((e, t) => {
  const {
    __scopeSelect: r,
    align: o = "start",
    collisionPadding: s = wn,
    ...c
  } = e, l = _a(r);
  return /* @__PURE__ */ y.jsx(
    fg,
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
Oc.displayName = wA;
var [bA, gu] = Ui(ni, {}), Dc = "SelectViewport", Og = C.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, nonce: o, ...s } = e, c = Dr(Dc, r), l = gu(Dc, r), u = rt(t, c.onViewportChange), f = C.useRef(0);
    return /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
      /* @__PURE__ */ y.jsx(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: o
        }
      ),
      /* @__PURE__ */ y.jsx(Ca.Slot, { scope: r, children: /* @__PURE__ */ y.jsx(
        He.div,
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
              const g = Math.abs(f.current - p.scrollTop);
              if (g > 0) {
                const T = window.innerHeight - wn * 2, S = parseFloat(v.style.minHeight), _ = parseFloat(v.style.height), E = Math.max(S, _);
                if (E < T) {
                  const A = E + g, M = Math.min(T, A), I = A - M;
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
Og.displayName = Dc;
var Dg = "SelectGroup", [SA, CA] = Ui(Dg), TA = C.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...o } = e, s = Jr();
    return /* @__PURE__ */ y.jsx(SA, { scope: r, id: s, children: /* @__PURE__ */ y.jsx(He.div, { role: "group", "aria-labelledby": s, ...o, ref: t }) });
  }
);
TA.displayName = Dg;
var Ig = "SelectLabel", Lg = C.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...o } = e, s = CA(Ig, r);
    return /* @__PURE__ */ y.jsx(He.div, { id: s.id, ...o, ref: t });
  }
);
Lg.displayName = Ig;
var ia = "SelectItem", [_A, jg] = Ui(ia), kg = C.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: r,
      value: o,
      disabled: s = !1,
      textValue: c,
      ...l
    } = e, u = Or(ia, r), f = Dr(ia, r), h = u.value === o, [p, v] = C.useState(c ?? ""), [x, g] = C.useState(!1), T = rt(
      t,
      (A) => {
        var M;
        return (M = f.itemRefCallback) == null ? void 0 : M.call(f, A, o, s);
      }
    ), S = Jr(), _ = C.useRef("touch"), E = () => {
      s || (u.onValueChange(o), u.onOpenChange(!1));
    };
    if (o === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ y.jsx(
      _A,
      {
        scope: r,
        value: o,
        disabled: s,
        textId: S,
        isSelected: h,
        onItemTextChange: C.useCallback((A) => {
          v((M) => M || ((A == null ? void 0 : A.textContent) ?? "").trim());
        }, []),
        children: /* @__PURE__ */ y.jsx(
          Ca.ItemSlot,
          {
            scope: r,
            value: o,
            disabled: s,
            textValue: p,
            children: /* @__PURE__ */ y.jsx(
              He.div,
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
                onFocus: Ve(l.onFocus, () => g(!0)),
                onBlur: Ve(l.onBlur, () => g(!1)),
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
                  ((I = f.searchRef) == null ? void 0 : I.current) !== "" && A.key === " " || (fA.includes(A.key) && E(), A.key === " " && A.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
kg.displayName = ia;
var wo = "SelectItemText", Vg = C.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, className: o, style: s, ...c } = e, l = Or(wo, r), u = Dr(wo, r), f = jg(wo, r), h = mA(wo, r), [p, v] = C.useState(null), x = rt(
      t,
      (E) => v(E),
      f.onItemTextChange,
      (E) => {
        var A;
        return (A = u.itemTextRefCallback) == null ? void 0 : A.call(u, E, f.value, f.disabled);
      }
    ), g = p == null ? void 0 : p.textContent, T = C.useMemo(
      () => /* @__PURE__ */ y.jsx("option", { value: f.value, disabled: f.disabled, children: g }, f.value),
      [f.disabled, f.value, g]
    ), { onNativeOptionAdd: S, onNativeOptionRemove: _ } = h;
    return jt(() => (S(T), () => _(T)), [S, _, T]), /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
      /* @__PURE__ */ y.jsx(He.span, { id: f.textId, ...c, ref: x }),
      f.isSelected && l.valueNode && !l.valueNodeHasChildren ? ma.createPortal(c.children, l.valueNode) : null
    ] });
  }
);
Vg.displayName = wo;
var Fg = "SelectItemIndicator", Bg = C.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...o } = e;
    return jg(Fg, r).isSelected ? /* @__PURE__ */ y.jsx(He.span, { "aria-hidden": !0, ...o, ref: t }) : null;
  }
);
Bg.displayName = Fg;
var Ic = "SelectScrollUpButton", Wg = C.forwardRef((e, t) => {
  const r = Dr(Ic, e.__scopeSelect), o = gu(Ic, e.__scopeSelect), [s, c] = C.useState(!1), l = rt(t, o.onScrollButtonChange);
  return jt(() => {
    if (r.viewport && r.isPositioned) {
      let u = function() {
        const h = f.scrollTop > 0;
        c(h);
      };
      const f = r.viewport;
      return u(), f.addEventListener("scroll", u), () => f.removeEventListener("scroll", u);
    }
  }, [r.viewport, r.isPositioned]), s ? /* @__PURE__ */ y.jsx(
    Ug,
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
Wg.displayName = Ic;
var Lc = "SelectScrollDownButton", $g = C.forwardRef((e, t) => {
  const r = Dr(Lc, e.__scopeSelect), o = gu(Lc, e.__scopeSelect), [s, c] = C.useState(!1), l = rt(t, o.onScrollButtonChange);
  return jt(() => {
    if (r.viewport && r.isPositioned) {
      let u = function() {
        const h = f.scrollHeight - f.clientHeight, p = Math.ceil(f.scrollTop) < h;
        c(p);
      };
      const f = r.viewport;
      return u(), f.addEventListener("scroll", u), () => f.removeEventListener("scroll", u);
    }
  }, [r.viewport, r.isPositioned]), s ? /* @__PURE__ */ y.jsx(
    Ug,
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
$g.displayName = Lc;
var Ug = C.forwardRef((e, t) => {
  const { __scopeSelect: r, onAutoScroll: o, ...s } = e, c = Dr("SelectScrollButton", r), l = C.useRef(null), u = Ta(r), f = C.useCallback(() => {
    l.current !== null && (window.clearInterval(l.current), l.current = null);
  }, []);
  return C.useEffect(() => () => f(), [f]), jt(() => {
    var p;
    const h = u().find((v) => v.ref.current === document.activeElement);
    (p = h == null ? void 0 : h.ref.current) == null || p.scrollIntoView({ block: "nearest" });
  }, [u]), /* @__PURE__ */ y.jsx(
    He.div,
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
}), PA = "SelectSeparator", Hg = C.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...o } = e;
    return /* @__PURE__ */ y.jsx(He.div, { "aria-hidden": !0, ...o, ref: t });
  }
);
Hg.displayName = PA;
var jc = "SelectArrow", EA = C.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...o } = e, s = _a(r), c = Or(jc, r), l = Dr(jc, r);
    return c.open && l.position === "popper" ? /* @__PURE__ */ y.jsx(dg, { ...s, ...o, ref: t }) : null;
  }
);
EA.displayName = jc;
function zg(e) {
  return e === "" || e === void 0;
}
var Gg = C.forwardRef(
  (e, t) => {
    const { value: r, ...o } = e, s = C.useRef(null), c = rt(t, s), l = wE(r);
    return C.useEffect(() => {
      const u = s.current, f = window.HTMLSelectElement.prototype, p = Object.getOwnPropertyDescriptor(
        f,
        "value"
      ).set;
      if (l !== r && p) {
        const v = new Event("change", { bubbles: !0 });
        p.call(u, r), u.dispatchEvent(v);
      }
    }, [l, r]), /* @__PURE__ */ y.jsx(pu, { asChild: !0, children: /* @__PURE__ */ y.jsx("select", { ...o, ref: c, defaultValue: r }) });
  }
);
Gg.displayName = "BubbleSelect";
function Kg(e) {
  const t = tr(e), r = C.useRef(""), o = C.useRef(0), s = C.useCallback(
    (l) => {
      const u = r.current + l;
      t(u), function f(h) {
        r.current = h, window.clearTimeout(o.current), h !== "" && (o.current = window.setTimeout(() => f(""), 1e3));
      }(u);
    },
    [t]
  ), c = C.useCallback(() => {
    r.current = "", window.clearTimeout(o.current);
  }, []);
  return C.useEffect(() => () => window.clearTimeout(o.current), []), [r, s, c];
}
function Yg(e, t, r) {
  const s = t.length > 1 && Array.from(t).every((h) => h === t[0]) ? t[0] : t, c = r ? e.indexOf(r) : -1;
  let l = AA(e, Math.max(c, 0));
  s.length === 1 && (l = l.filter((h) => h !== r));
  const f = l.find(
    (h) => h.textValue.toLowerCase().startsWith(s.toLowerCase())
  );
  return f !== r ? f : void 0;
}
function AA(e, t) {
  return e.map((r, o) => e[(t + o) % e.length]);
}
var RA = bg, qg = Cg, NA = _g, MA = Pg, OA = Eg, Xg = Ag, DA = Og, Zg = Lg, Jg = kg, IA = Vg, LA = Bg, Qg = Wg, ev = $g, tv = Hg;
const jA = RA, kA = NA, nv = C.forwardRef(({ className: e, children: t, ...r }, o) => /* @__PURE__ */ y.jsxs(
  qg,
  {
    ref: o,
    className: Ze(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      e
    ),
    ...r,
    children: [
      t,
      /* @__PURE__ */ y.jsx(MA, { asChild: !0, children: /* @__PURE__ */ y.jsx(ga, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
nv.displayName = qg.displayName;
const rv = C.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ y.jsx(
  Qg,
  {
    ref: r,
    className: Ze(
      "flex cursor-default items-center justify-center py-1",
      e
    ),
    ...t,
    children: /* @__PURE__ */ y.jsx(UT, { className: "h-4 w-4" })
  }
));
rv.displayName = Qg.displayName;
const iv = C.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ y.jsx(
  ev,
  {
    ref: r,
    className: Ze(
      "flex cursor-default items-center justify-center py-1",
      e
    ),
    ...t,
    children: /* @__PURE__ */ y.jsx(ga, { className: "h-4 w-4" })
  }
));
iv.displayName = ev.displayName;
const ov = C.forwardRef(({ className: e, children: t, position: r = "popper", ...o }, s) => /* @__PURE__ */ y.jsx(OA, { children: /* @__PURE__ */ y.jsxs(
  Xg,
  {
    ref: s,
    className: Ze(
      "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      r === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      e
    ),
    position: r,
    ...o,
    children: [
      /* @__PURE__ */ y.jsx(rv, {}),
      /* @__PURE__ */ y.jsx(
        DA,
        {
          className: Ze(
            "p-1",
            r === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children: t
        }
      ),
      /* @__PURE__ */ y.jsx(iv, {})
    ]
  }
) }));
ov.displayName = Xg.displayName;
const VA = C.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ y.jsx(
  Zg,
  {
    ref: r,
    className: Ze("py-1.5 pl-8 pr-2 text-sm font-semibold", e),
    ...t
  }
));
VA.displayName = Zg.displayName;
const sv = C.forwardRef(({ className: e, children: t, ...r }, o) => /* @__PURE__ */ y.jsxs(
  Jg,
  {
    ref: o,
    className: Ze(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...r,
    children: [
      /* @__PURE__ */ y.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ y.jsx(LA, { children: /* @__PURE__ */ y.jsx(Om, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ y.jsx(IA, { children: t })
    ]
  }
));
sv.displayName = Jg.displayName;
const FA = C.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ y.jsx(
  tv,
  {
    ref: r,
    className: Ze("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
FA.displayName = tv.displayName;
function BA(e, t) {
  return C.useReducer((r, o) => t[r][o] ?? r, e);
}
var Vo = (e) => {
  const { present: t, children: r } = e, o = WA(t), s = typeof r == "function" ? r({ present: o.isPresent }) : C.Children.only(r), c = rt(o.ref, $A(s));
  return typeof r == "function" || o.isPresent ? C.cloneElement(s, { ref: c }) : null;
};
Vo.displayName = "Presence";
function WA(e) {
  const [t, r] = C.useState(), o = C.useRef({}), s = C.useRef(e), c = C.useRef("none"), l = e ? "mounted" : "unmounted", [u, f] = BA(l, {
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
  return C.useEffect(() => {
    const h = Vs(o.current);
    c.current = u === "mounted" ? h : "none";
  }, [u]), jt(() => {
    const h = o.current, p = s.current;
    if (p !== e) {
      const x = c.current, g = Vs(h);
      e ? f("MOUNT") : g === "none" || (h == null ? void 0 : h.display) === "none" ? f("UNMOUNT") : f(p && x !== g ? "ANIMATION_OUT" : "UNMOUNT"), s.current = e;
    }
  }, [e, f]), jt(() => {
    if (t) {
      let h;
      const p = t.ownerDocument.defaultView ?? window, v = (g) => {
        const S = Vs(o.current).includes(g.animationName);
        if (g.target === t && S && (f("ANIMATION_END"), !s.current)) {
          const _ = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", h = p.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = _);
          });
        }
      }, x = (g) => {
        g.target === t && (c.current = Vs(o.current));
      };
      return t.addEventListener("animationstart", x), t.addEventListener("animationcancel", v), t.addEventListener("animationend", v), () => {
        p.clearTimeout(h), t.removeEventListener("animationstart", x), t.removeEventListener("animationcancel", v), t.removeEventListener("animationend", v);
      };
    } else
      f("ANIMATION_END");
  }, [t, f]), {
    isPresent: ["mounted", "unmountSuspended"].includes(u),
    ref: C.useCallback((h) => {
      h && (o.current = getComputedStyle(h)), r(h);
    }, [])
  };
}
function Vs(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function $A(e) {
  var o, s;
  let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = (s = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : s.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
var [Pa, FD] = nu("Tooltip", [
  ba
]), Ea = ba(), av = "TooltipProvider", UA = 700, kc = "tooltip.open", [HA, vu] = Pa(av), lv = (e) => {
  const {
    __scopeTooltip: t,
    delayDuration: r = UA,
    skipDelayDuration: o = 300,
    disableHoverableContent: s = !1,
    children: c
  } = e, [l, u] = C.useState(!0), f = C.useRef(!1), h = C.useRef(0);
  return C.useEffect(() => {
    const p = h.current;
    return () => window.clearTimeout(p);
  }, []), /* @__PURE__ */ y.jsx(
    HA,
    {
      scope: t,
      isOpenDelayed: l,
      delayDuration: r,
      onOpen: C.useCallback(() => {
        window.clearTimeout(h.current), u(!1);
      }, []),
      onClose: C.useCallback(() => {
        window.clearTimeout(h.current), h.current = window.setTimeout(
          () => u(!0),
          o
        );
      }, [o]),
      isPointerInTransitRef: f,
      onPointerInTransitChange: C.useCallback((p) => {
        f.current = p;
      }, []),
      disableHoverableContent: s,
      children: c
    }
  );
};
lv.displayName = av;
var Aa = "Tooltip", [zA, Ra] = Pa(Aa), cv = (e) => {
  const {
    __scopeTooltip: t,
    children: r,
    open: o,
    defaultOpen: s = !1,
    onOpenChange: c,
    disableHoverableContent: l,
    delayDuration: u
  } = e, f = vu(Aa, e.__scopeTooltip), h = Ea(t), [p, v] = C.useState(null), x = Jr(), g = C.useRef(0), T = l ?? f.disableHoverableContent, S = u ?? f.delayDuration, _ = C.useRef(!1), [E = !1, A] = na({
    prop: o,
    defaultProp: s,
    onChange: ($) => {
      $ ? (f.onOpen(), document.dispatchEvent(new CustomEvent(kc))) : f.onClose(), c == null || c($);
    }
  }), M = C.useMemo(() => E ? _.current ? "delayed-open" : "instant-open" : "closed", [E]), I = C.useCallback(() => {
    window.clearTimeout(g.current), g.current = 0, _.current = !1, A(!0);
  }, [A]), j = C.useCallback(() => {
    window.clearTimeout(g.current), g.current = 0, A(!1);
  }, [A]), U = C.useCallback(() => {
    window.clearTimeout(g.current), g.current = window.setTimeout(() => {
      _.current = !0, A(!0), g.current = 0;
    }, S);
  }, [S, A]);
  return C.useEffect(() => () => {
    g.current && (window.clearTimeout(g.current), g.current = 0);
  }, []), /* @__PURE__ */ y.jsx(cg, { ...h, children: /* @__PURE__ */ y.jsx(
    zA,
    {
      scope: t,
      contentId: x,
      open: E,
      stateAttribute: M,
      trigger: p,
      onTriggerChange: v,
      onTriggerEnter: C.useCallback(() => {
        f.isOpenDelayed ? U() : I();
      }, [f.isOpenDelayed, U, I]),
      onTriggerLeave: C.useCallback(() => {
        T ? j() : (window.clearTimeout(g.current), g.current = 0);
      }, [j, T]),
      onOpen: I,
      onClose: j,
      disableHoverableContent: T,
      children: r
    }
  ) });
};
cv.displayName = Aa;
var Vc = "TooltipTrigger", uv = C.forwardRef(
  (e, t) => {
    const { __scopeTooltip: r, ...o } = e, s = Ra(Vc, r), c = vu(Vc, r), l = Ea(r), u = C.useRef(null), f = rt(t, u, s.onTriggerChange), h = C.useRef(!1), p = C.useRef(!1), v = C.useCallback(() => h.current = !1, []);
    return C.useEffect(() => () => document.removeEventListener("pointerup", v), [v]), /* @__PURE__ */ y.jsx(ug, { asChild: !0, ...l, children: /* @__PURE__ */ y.jsx(
      He.button,
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
uv.displayName = Vc;
var GA = "TooltipPortal", [BD, KA] = Pa(GA, {
  forceMount: void 0
}), Li = "TooltipContent", fv = C.forwardRef(
  (e, t) => {
    const r = KA(Li, e.__scopeTooltip), { forceMount: o = r.forceMount, side: s = "top", ...c } = e, l = Ra(Li, e.__scopeTooltip);
    return /* @__PURE__ */ y.jsx(Vo, { present: o || l.open, children: l.disableHoverableContent ? /* @__PURE__ */ y.jsx(dv, { side: s, ...c, ref: t }) : /* @__PURE__ */ y.jsx(YA, { side: s, ...c, ref: t }) });
  }
), YA = C.forwardRef((e, t) => {
  const r = Ra(Li, e.__scopeTooltip), o = vu(Li, e.__scopeTooltip), s = C.useRef(null), c = rt(t, s), [l, u] = C.useState(null), { trigger: f, onClose: h } = r, p = s.current, { onPointerInTransitChange: v } = o, x = C.useCallback(() => {
    u(null), v(!1);
  }, [v]), g = C.useCallback(
    (T, S) => {
      const _ = T.currentTarget, E = { x: T.clientX, y: T.clientY }, A = JA(E, _.getBoundingClientRect()), M = QA(E, A), I = eR(S.getBoundingClientRect()), j = nR([...M, ...I]);
      u(j), v(!0);
    },
    [v]
  );
  return C.useEffect(() => () => x(), [x]), C.useEffect(() => {
    if (f && p) {
      const T = (_) => g(_, p), S = (_) => g(_, f);
      return f.addEventListener("pointerleave", T), p.addEventListener("pointerleave", S), () => {
        f.removeEventListener("pointerleave", T), p.removeEventListener("pointerleave", S);
      };
    }
  }, [f, p, g, x]), C.useEffect(() => {
    if (l) {
      const T = (S) => {
        const _ = S.target, E = { x: S.clientX, y: S.clientY }, A = (f == null ? void 0 : f.contains(_)) || (p == null ? void 0 : p.contains(_)), M = !tR(E, l);
        A ? x() : M && (x(), h());
      };
      return document.addEventListener("pointermove", T), () => document.removeEventListener("pointermove", T);
    }
  }, [f, p, l, h, x]), /* @__PURE__ */ y.jsx(dv, { ...e, ref: c });
}), [qA, XA] = Pa(Aa, { isInside: !1 }), dv = C.forwardRef(
  (e, t) => {
    const {
      __scopeTooltip: r,
      children: o,
      "aria-label": s,
      onEscapeKeyDown: c,
      onPointerDownOutside: l,
      ...u
    } = e, f = Ra(Li, r), h = Ea(r), { onClose: p } = f;
    return C.useEffect(() => (document.addEventListener(kc, p), () => document.removeEventListener(kc, p)), [p]), C.useEffect(() => {
      if (f.trigger) {
        const v = (x) => {
          const g = x.target;
          g != null && g.contains(f.trigger) && p();
        };
        return window.addEventListener("scroll", v, { capture: !0 }), () => window.removeEventListener("scroll", v, { capture: !0 });
      }
    }, [f.trigger, p]), /* @__PURE__ */ y.jsx(
      va,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: c,
        onPointerDownOutside: l,
        onFocusOutside: (v) => v.preventDefault(),
        onDismiss: p,
        children: /* @__PURE__ */ y.jsxs(
          fg,
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
              /* @__PURE__ */ y.jsx(Em, { children: o }),
              /* @__PURE__ */ y.jsx(qA, { scope: r, isInside: !0, children: /* @__PURE__ */ y.jsx(SE, { id: f.contentId, role: "tooltip", children: s || o }) })
            ]
          }
        )
      }
    );
  }
);
fv.displayName = Li;
var hv = "TooltipArrow", ZA = C.forwardRef(
  (e, t) => {
    const { __scopeTooltip: r, ...o } = e, s = Ea(r);
    return XA(
      hv,
      r
    ).isInside ? null : /* @__PURE__ */ y.jsx(dg, { ...s, ...o, ref: t });
  }
);
ZA.displayName = hv;
function JA(e, t) {
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
function QA(e, t, r = 5) {
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
function eR(e) {
  const { top: t, right: r, bottom: o, left: s } = e;
  return [
    { x: s, y: t },
    { x: r, y: t },
    { x: r, y: o },
    { x: s, y: o }
  ];
}
function tR(e, t) {
  const { x: r, y: o } = e;
  let s = !1;
  for (let c = 0, l = t.length - 1; c < t.length; l = c++) {
    const u = t[c].x, f = t[c].y, h = t[l].x, p = t[l].y;
    f > o != p > o && r < (h - u) * (o - f) / (p - f) + u && (s = !s);
  }
  return s;
}
function nR(e) {
  const t = e.slice();
  return t.sort((r, o) => r.x < o.x ? -1 : r.x > o.x ? 1 : r.y < o.y ? -1 : r.y > o.y ? 1 : 0), rR(t);
}
function rR(e) {
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
var iR = lv, oR = cv, sR = uv, pv = fv;
const Sr = iR, Cr = oR, Tr = sR, Zn = C.forwardRef(({ className: e, sideOffset: t = 4, ...r }, o) => /* @__PURE__ */ y.jsx(
  pv,
  {
    ref: o,
    sideOffset: t,
    className: Ze(
      "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...r
  }
));
Zn.displayName = pv.displayName;
const aR = Rm(
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
function mv({ className: e, variant: t, ...r }) {
  return /* @__PURE__ */ y.jsx("div", { className: Ze(aR({ variant: t }), e), ...r });
}
const Hi = C.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ y.jsx(
  "div",
  {
    ref: r,
    className: Ze(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      e
    ),
    ...t
  }
));
Hi.displayName = "Card";
const zi = C.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ y.jsx(
  "div",
  {
    ref: r,
    className: Ze("flex flex-col space-y-1.5 p-6", e),
    ...t
  }
));
zi.displayName = "CardHeader";
const Fo = C.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ y.jsx(
  "div",
  {
    ref: r,
    className: Ze(
      "text-2xl font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
Fo.displayName = "CardTitle";
const lR = C.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ y.jsx(
  "div",
  {
    ref: r,
    className: Ze("text-sm text-muted-foreground", e),
    ...t
  }
));
lR.displayName = "CardDescription";
const Gi = C.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ y.jsx("div", { ref: r, className: Ze("p-6 pt-0", e), ...t }));
Gi.displayName = "CardContent";
const cR = C.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ y.jsx(
  "div",
  {
    ref: r,
    className: Ze("flex items-center p-6 pt-0", e),
    ...t
  }
));
cR.displayName = "CardFooter";
function WD({ deal: e, onDealChange: t, availableDeals: r }) {
  const o = (s) => {
    t(s);
  };
  return /* @__PURE__ */ y.jsxs(Hi, { className: "shadow-lg w-full max-w-3xl mx-auto my-8", children: [
    /* @__PURE__ */ y.jsx(zi, { children: /* @__PURE__ */ y.jsxs("div", { className: "flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4", children: [
      /* @__PURE__ */ y.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ y.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ y.jsx("h2", { className: "text-xl font-semibold text-slate-900", children: e.dealName }),
          /* @__PURE__ */ y.jsx(Sr, { children: /* @__PURE__ */ y.jsxs(Cr, { children: [
            /* @__PURE__ */ y.jsx(Tr, { asChild: !0, children: /* @__PURE__ */ y.jsx(
              Dn,
              {
                variant: "ghost",
                size: "sm",
                className: "p-1 h-auto",
                onClick: () => window.open(e.hubspotUrl, "_blank"),
                children: /* @__PURE__ */ y.jsx(Dm, { className: "w-4 h-4 text-slate-500" })
              }
            ) }),
            /* @__PURE__ */ y.jsx(Zn, { children: /* @__PURE__ */ y.jsx("p", { children: "View in HubSpot" }) })
          ] }) })
        ] }),
        /* @__PURE__ */ y.jsx(mv, { variant: "outline", className: "text-sm", children: e.dealStage })
      ] }),
      /* @__PURE__ */ y.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 lg:gap-8", children: [
        /* @__PURE__ */ y.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ y.jsx("p", { className: "text-sm text-slate-500", children: "Amount" }),
          /* @__PURE__ */ y.jsxs("p", { className: "text-lg font-semibold", children: [
            "$",
            e.amount.toLocaleString()
          ] })
        ] }),
        /* @__PURE__ */ y.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ y.jsxs("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ y.jsx("p", { className: "text-sm text-slate-500", children: "Win Probability" }),
            /* @__PURE__ */ y.jsx(Sr, { children: /* @__PURE__ */ y.jsxs(Cr, { children: [
              /* @__PURE__ */ y.jsx(Tr, { asChild: !0, children: /* @__PURE__ */ y.jsx(Dn, { variant: "ghost", size: "sm", className: "p-0 h-auto", children: /* @__PURE__ */ y.jsx(Eo, { className: "w-3 h-3 text-slate-400" }) }) }),
              /* @__PURE__ */ y.jsx(Zn, { className: "max-w-xs", children: /* @__PURE__ */ y.jsx("p", { children: "Estimated chance of winning, based on prospect engagement, qualification status, risk factors, and historic deal outcomes at the current stage." }) })
            ] }) })
          ] }),
          /* @__PURE__ */ y.jsxs("p", { className: "text-lg font-semibold", children: [
            e.probability,
            "%"
          ] })
        ] }),
        /* @__PURE__ */ y.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ y.jsx("p", { className: "text-sm text-slate-500", children: "Deal Owner" }),
          /* @__PURE__ */ y.jsx("p", { className: "text-lg font-semibold", children: e.dealOwner })
        ] }),
        /* @__PURE__ */ y.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ y.jsxs("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ y.jsx("p", { className: "text-sm text-slate-500", children: "Deal Language" }),
            /* @__PURE__ */ y.jsx(Sr, { children: /* @__PURE__ */ y.jsxs(Cr, { children: [
              /* @__PURE__ */ y.jsx(Tr, { asChild: !0, children: /* @__PURE__ */ y.jsx(Dn, { variant: "ghost", size: "sm", className: "p-0 h-auto", children: /* @__PURE__ */ y.jsx(Eo, { className: "w-3 h-3 text-slate-400" }) }) }),
              /* @__PURE__ */ y.jsx(Zn, { className: "max-w-xs", children: /* @__PURE__ */ y.jsx("p", { children: "The main language of the deal." }) })
            ] }) })
          ] }),
          /* @__PURE__ */ y.jsx("p", { className: "text-lg font-semibold", children: N_(e.dealLanguage) })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ y.jsx(Gi, { children: /* @__PURE__ */ y.jsxs(jA, { value: e.dealId, onValueChange: o, children: [
      /* @__PURE__ */ y.jsx(nv, { className: "w-[300px]", children: /* @__PURE__ */ y.jsxs(kA, { children: [
        e.dealName,
        " (",
        e.company,
        ")"
      ] }) }),
      /* @__PURE__ */ y.jsx(ov, { children: r.map((s) => /* @__PURE__ */ y.jsxs(sv, { value: s.dealId, children: [
        s.dealName,
        " (",
        s.company,
        ")"
      ] }, s.dealId)) })
    ] }) })
  ] });
}
function uR(e, t = []) {
  let r = [];
  function o(c, l) {
    const u = C.createContext(l), f = r.length;
    r = [...r, l];
    function h(v) {
      const { scope: x, children: g, ...T } = v, S = (x == null ? void 0 : x[e][f]) || u, _ = C.useMemo(() => T, Object.values(T));
      return /* @__PURE__ */ y.jsx(S.Provider, { value: _, children: g });
    }
    function p(v, x) {
      const g = (x == null ? void 0 : x[e][f]) || u, T = C.useContext(g);
      if (T)
        return T;
      if (l !== void 0)
        return l;
      throw new Error(`\`${v}\` must be used within \`${c}\``);
    }
    return h.displayName = c + "Provider", [h, p];
  }
  const s = () => {
    const c = r.map((l) => C.createContext(l));
    return function(u) {
      const f = (u == null ? void 0 : u[e]) || c;
      return C.useMemo(
        () => ({ [`__scope${e}`]: { ...u, [e]: f } }),
        [u, f]
      );
    };
  };
  return s.scopeName = e, [o, fR(s, ...t)];
}
function fR(...e) {
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
      return C.useMemo(() => ({ [`__scope${t.scopeName}`]: l }), [l]);
    };
  };
  return r.scopeName = t.scopeName, r;
}
var yu = "Progress", xu = 100, [dR, $D] = uR(yu), [hR, pR] = dR(yu), gv = C.forwardRef(
  (e, t) => {
    const {
      __scopeProgress: r,
      value: o = null,
      max: s,
      getValueLabel: c = mR,
      ...l
    } = e;
    (s || s === 0) && !np(s) && console.error(gR(`${s}`, "Progress"));
    const u = np(s) ? s : xu;
    o !== null && !rp(o, u) && console.error(vR(`${o}`, "Progress"));
    const f = rp(o, u) ? o : null, h = oa(f) ? c(f, u) : void 0;
    return /* @__PURE__ */ y.jsx(hR, { scope: r, value: f, max: u, children: /* @__PURE__ */ y.jsx(
      He.div,
      {
        "aria-valuemax": u,
        "aria-valuemin": 0,
        "aria-valuenow": oa(f) ? f : void 0,
        "aria-valuetext": h,
        role: "progressbar",
        "data-state": xv(f, u),
        "data-value": f ?? void 0,
        "data-max": u,
        ...l,
        ref: t
      }
    ) });
  }
);
gv.displayName = yu;
var vv = "ProgressIndicator", yv = C.forwardRef(
  (e, t) => {
    const { __scopeProgress: r, ...o } = e, s = pR(vv, r);
    return /* @__PURE__ */ y.jsx(
      He.div,
      {
        "data-state": xv(s.value, s.max),
        "data-value": s.value ?? void 0,
        "data-max": s.max,
        ...o,
        ref: t
      }
    );
  }
);
yv.displayName = vv;
function mR(e, t) {
  return `${Math.round(e / t * 100)}%`;
}
function xv(e, t) {
  return e == null ? "indeterminate" : e === t ? "complete" : "loading";
}
function oa(e) {
  return typeof e == "number";
}
function np(e) {
  return oa(e) && !isNaN(e) && e > 0;
}
function rp(e, t) {
  return oa(e) && !isNaN(e) && e <= t && e >= 0;
}
function gR(e, t) {
  return `Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${xu}\`.`;
}
function vR(e, t) {
  return `Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${xu} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var wv = gv, yR = yv;
const wu = C.forwardRef(({ className: e, value: t, ...r }, o) => /* @__PURE__ */ y.jsx(
  wv,
  {
    ref: o,
    className: Ze(
      "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
      e
    ),
    ...r,
    children: /* @__PURE__ */ y.jsx(
      yR,
      {
        className: "h-full w-full flex-1 bg-primary transition-all",
        style: { transform: `translateX(-${100 - (t || 0)}%)` }
      }
    )
  }
));
wu.displayName = wv.displayName;
const yo = [
  "Discovery",
  "Solution Validation",
  "Pricing Communicated",
  "Contract Sent",
  "Closed Won",
  "Closed Lost"
], UD = ({ deal: e }) => {
  const t = {
    Discovery: 75,
    "Solution Validation": 65,
    "Pricing Communicated": 55,
    "Contract Sent": 85,
    "Closed Won": 100,
    "Closed Lost": 0
  }, r = yo.includes(e.dealStage) ? e.dealStage : yo[0], o = t[r] || 0;
  return /* @__PURE__ */ y.jsxs(Hi, { className: "shadow-lg w-full max-w-3xl mx-auto my-8", children: [
    /* @__PURE__ */ y.jsxs(zi, { children: [
      /* @__PURE__ */ y.jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ y.jsx(Fo, { className: "text-slate-800", children: "Deal Progress" }) }),
      /* @__PURE__ */ y.jsx("p", { className: "text-sm text-muted-foreground", children: "Current stage and overall progress" })
    ] }),
    /* @__PURE__ */ y.jsx(Gi, { children: /* @__PURE__ */ y.jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ y.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ y.jsx("div", { className: "flex flex-wrap justify-between text-xs sm:text-sm text-slate-600", children: yo.map((s) => /* @__PURE__ */ y.jsx("span", { className: `mb-2 ${r === s ? "font-bold" : ""}`, children: s }, s)) }),
        /* @__PURE__ */ y.jsx(
          wu,
          {
            value: (yo.indexOf(r) + 1) / yo.length * 100,
            className: "h-2"
          }
        ),
        /* @__PURE__ */ y.jsxs("div", { className: "flex justify-between text-xs text-slate-500", children: [
          /* @__PURE__ */ y.jsx("span", { children: "0%" }),
          /* @__PURE__ */ y.jsx("span", { children: "100%" })
        ] })
      ] }),
      /* @__PURE__ */ y.jsxs("div", { className: "pt-4 border-t", children: [
        /* @__PURE__ */ y.jsxs("div", { className: "flex items-center space-x-1 mb-4", children: [
          /* @__PURE__ */ y.jsx("h3", { className: "text-sm font-medium text-slate-700", children: "Outlook" }),
          /* @__PURE__ */ y.jsx(Sr, { children: /* @__PURE__ */ y.jsxs(Cr, { children: [
            /* @__PURE__ */ y.jsx(Tr, { children: /* @__PURE__ */ y.jsx(Eo, { className: "w-3 h-3 text-muted-foreground" }) }),
            /* @__PURE__ */ y.jsxs(Zn, { className: "max-w-xs", children: [
              /* @__PURE__ */ y.jsx("p", { children: "Predictions based on deal qualification status and comparison with historical deals at the same stage" }),
              /* @__PURE__ */ y.jsx("a", { href: "", children: /* @__PURE__ */ y.jsx("button", { children: "Learn more" }) })
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ y.jsxs("div", { className: "grid grid-cols-2 gap-8", children: [
          /* @__PURE__ */ y.jsxs("div", { children: [
            /* @__PURE__ */ y.jsx("div", { className: "text-sm font-medium text-muted-foreground mb-1", children: "Win Probability" }),
            /* @__PURE__ */ y.jsxs("div", { className: "text-2xl font-bold text-slate-800", children: [
              e.probability,
              "%"
            ] })
          ] }),
          /* @__PURE__ */ y.jsxs("div", { children: [
            /* @__PURE__ */ y.jsxs("div", { className: "text-sm font-medium text-muted-foreground mb-1 space-x-1", children: [
              "Next Stage Probability",
              " "
            ] }),
            /* @__PURE__ */ y.jsxs("div", { className: "text-2xl font-bold text-slate-800", children: [
              o,
              "%"
            ] })
          ] })
        ] })
      ] })
    ] }) })
  ] });
};
function HD({ deal: e }) {
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
  return /* @__PURE__ */ y.jsxs(Hi, { className: "shadow-lg w-full max-w-3xl mx-auto my-8", children: [
    /* @__PURE__ */ y.jsxs(zi, { children: [
      /* @__PURE__ */ y.jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ y.jsx(Fo, { className: "text-slate-800", children: "Key Stakeholders" }) }),
      /* @__PURE__ */ y.jsx("p", { className: "text-sm text-slate-500", children: "Engagement levels and relationships" })
    ] }),
    /* @__PURE__ */ y.jsx(Gi, { children: /* @__PURE__ */ y.jsx("div", { className: "space-y-4", children: e.keyStakeholders.map((r, o) => /* @__PURE__ */ y.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ y.jsxs("div", { children: [
        /* @__PURE__ */ y.jsx("p", { className: "font-medium", children: r.name }),
        /* @__PURE__ */ y.jsx("p", { className: "text-sm text-slate-500", children: r.role })
      ] }),
      /* @__PURE__ */ y.jsxs("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ y.jsxs(mv, { className: t(r.engagementLevel), children: [
          r.engagementLevel,
          " Engagement"
        ] }),
        /* @__PURE__ */ y.jsx(Sr, { children: /* @__PURE__ */ y.jsxs(Cr, { children: [
          /* @__PURE__ */ y.jsx(Tr, { asChild: !0, children: /* @__PURE__ */ y.jsx(
            Dn,
            {
              variant: "ghost",
              size: "sm",
              className: "",
              onClick: () => window.open(r.contactLink, "_blank"),
              children: /* @__PURE__ */ y.jsx(Dm, { className: "w-4 h-4 text-slate-500" })
            }
          ) }),
          /* @__PURE__ */ y.jsx(Zn, { children: /* @__PURE__ */ y.jsx("p", { children: "View contact in CRM" }) })
        ] }) })
      ] })
    ] }, o)) }) })
  ] });
}
const ip = /* @__PURE__ */ new Set();
function Na(e, t, r) {
  e || ip.has(t) || (console.warn(t), ip.add(t));
}
function xR(e) {
  if (typeof Proxy > "u")
    return e;
  const t = /* @__PURE__ */ new Map(), r = (...o) => (process.env.NODE_ENV !== "production" && Na(!1, "motion() is deprecated. Use motion.create() instead."), e(...o));
  return new Proxy(r, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (o, s) => s === "create" ? e : (t.has(s) || t.set(s, e(s)), t.get(s))
  });
}
function Ma(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
const Fc = (e) => Array.isArray(e);
function bv(e, t) {
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
function No(e) {
  return typeof e == "string" || Array.isArray(e);
}
function op(e) {
  const t = [{}, {}];
  return e == null || e.values.forEach((r, o) => {
    t[0][o] = r.get(), t[1][o] = r.getVelocity();
  }), t;
}
function bu(e, t, r, o) {
  if (typeof t == "function") {
    const [s, c] = op(o);
    t = t(r !== void 0 ? r : e.custom, s, c);
  }
  if (typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function") {
    const [s, c] = op(o);
    t = t(r !== void 0 ? r : e.custom, s, c);
  }
  return t;
}
function Oa(e, t, r) {
  const o = e.getProps();
  return bu(o, t, r !== void 0 ? r : o.custom, e);
}
const Su = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], Cu = ["initial", ...Su], Bo = [
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
], ii = new Set(Bo), Ln = (e) => e * 1e3, Jn = (e) => e / 1e3, wR = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, bR = (e) => ({
  type: "spring",
  stiffness: 550,
  damping: e === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), SR = {
  type: "keyframes",
  duration: 0.8
}, CR = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, TR = (e, { keyframes: t }) => t.length > 2 ? SR : ii.has(e) ? e.startsWith("scale") ? bR(t[1]) : wR : CR;
function Tu(e, t) {
  return e ? e[t] || e.default || e : void 0;
}
const _R = {
  skipAnimations: !1,
  useManualTiming: !1
}, PR = (e) => e !== null;
function Da(e, { repeat: t, repeatType: r = "loop" }, o) {
  const s = e.filter(PR), c = t && r !== "loop" && t % 2 === 1 ? 0 : s.length - 1;
  return !c || o === void 0 ? s[c] : o;
}
const St = (e) => e;
function ER(e) {
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
      const g = v && o ? t : r;
      return p && c.add(h), g.has(h) || g.add(h), h;
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
const Fs = [
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
], AR = 40;
function Sv(e, t) {
  let r = !1, o = !0;
  const s = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, c = () => r = !0, l = Fs.reduce((E, A) => (E[A] = ER(c), E), {}), { read: u, resolveKeyframes: f, update: h, preRender: p, render: v, postRender: x } = l, g = () => {
    const E = performance.now();
    r = !1, s.delta = o ? 1e3 / 60 : Math.max(Math.min(E - s.timestamp, AR), 1), s.timestamp = E, s.isProcessing = !0, u.process(s), f.process(s), h.process(s), p.process(s), v.process(s), x.process(s), s.isProcessing = !1, r && t && (o = !1, e(g));
  }, T = () => {
    r = !0, o = !0, s.isProcessing || e(g);
  };
  return { schedule: Fs.reduce((E, A) => {
    const M = l[A];
    return E[A] = (I, j = !1, U = !1) => (r || T(), M.schedule(I, j, U)), E;
  }, {}), cancel: (E) => {
    for (let A = 0; A < Fs.length; A++)
      l[Fs[A]].cancel(E);
  }, state: s, steps: l };
}
const { schedule: ze, cancel: Ar, state: bt, steps: uc } = Sv(typeof requestAnimationFrame < "u" ? requestAnimationFrame : St, !0), Cv = (e, t, r) => (((1 - 3 * r + 3 * t) * e + (3 * r - 6 * t)) * e + 3 * t) * e, RR = 1e-7, NR = 12;
function MR(e, t, r, o, s) {
  let c, l, u = 0;
  do
    l = t + (r - t) / 2, c = Cv(l, o, s) - e, c > 0 ? r = l : t = l;
  while (Math.abs(c) > RR && ++u < NR);
  return l;
}
function Wo(e, t, r, o) {
  if (e === t && r === o)
    return St;
  const s = (c) => MR(c, 0, 1, e, r);
  return (c) => c === 0 || c === 1 ? c : Cv(s(c), t, o);
}
const Tv = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, _v = (e) => (t) => 1 - e(1 - t), Pv = /* @__PURE__ */ Wo(0.33, 1.53, 0.69, 0.99), _u = /* @__PURE__ */ _v(Pv), Ev = /* @__PURE__ */ Tv(_u), Av = (e) => (e *= 2) < 1 ? 0.5 * _u(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), Pu = (e) => 1 - Math.sin(Math.acos(e)), Rv = _v(Pu), Nv = Tv(Pu), Mv = (e) => /^0[^.\s]+$/u.test(e);
function OR(e) {
  return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || Mv(e) : !0;
}
let Ki = St, Rr = St;
process.env.NODE_ENV !== "production" && (Ki = (e, t) => {
  !e && typeof console < "u" && console.warn(t);
}, Rr = (e, t) => {
  if (!e)
    throw new Error(t);
});
const Ov = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e), Dv = (e) => (t) => typeof t == "string" && t.startsWith(e), Iv = /* @__PURE__ */ Dv("--"), DR = /* @__PURE__ */ Dv("var(--"), Eu = (e) => DR(e) ? IR.test(e.split("/*")[0].trim()) : !1, IR = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, LR = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function jR(e) {
  const t = LR.exec(e);
  if (!t)
    return [,];
  const [, r, o, s] = t;
  return [`--${r ?? o}`, s];
}
const kR = 4;
function Lv(e, t, r = 1) {
  Rr(r <= kR, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);
  const [o, s] = jR(e);
  if (!o)
    return;
  const c = window.getComputedStyle(t).getPropertyValue(o);
  if (c) {
    const l = c.trim();
    return Ov(l) ? parseFloat(l) : l;
  }
  return Eu(s) ? Lv(s, t, r + 1) : s;
}
const Nr = (e, t, r) => r > t ? t : r < e ? e : r, Yi = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, Mo = {
  ...Yi,
  transform: (e) => Nr(0, 1, e)
}, Bs = {
  ...Yi,
  default: 1
}, $o = (e) => ({
  test: (t) => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: (t) => `${t}${e}`
}), wr = /* @__PURE__ */ $o("deg"), jn = /* @__PURE__ */ $o("%"), ue = /* @__PURE__ */ $o("px"), VR = /* @__PURE__ */ $o("vh"), FR = /* @__PURE__ */ $o("vw"), sp = {
  ...jn,
  parse: (e) => jn.parse(e) / 100,
  transform: (e) => jn.transform(e * 100)
}, BR = /* @__PURE__ */ new Set([
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
]), ap = (e) => e === Yi || e === ue, lp = (e, t) => parseFloat(e.split(", ")[t]), cp = (e, t) => (r, { transform: o }) => {
  if (o === "none" || !o)
    return 0;
  const s = o.match(/^matrix3d\((.+)\)$/u);
  if (s)
    return lp(s[1], t);
  {
    const c = o.match(/^matrix\((.+)\)$/u);
    return c ? lp(c[1], e) : 0;
  }
}, WR = /* @__PURE__ */ new Set(["x", "y", "z"]), $R = Bo.filter((e) => !WR.has(e));
function UR(e) {
  const t = [];
  return $R.forEach((r) => {
    const o = e.getValue(r);
    o !== void 0 && (t.push([r, o.get()]), o.set(r.startsWith("scale") ? 1 : 0));
  }), t;
}
const ji = {
  // Dimensions
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: r = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(r),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: r = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(r),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  // Transform
  x: cp(4, 13),
  y: cp(5, 14)
};
ji.translateX = ji.x;
ji.translateY = ji.y;
const jv = (e) => (t) => t.test(e), HR = {
  test: (e) => e === "auto",
  parse: (e) => e
}, kv = [Yi, ue, jn, wr, FR, VR, HR], up = (e) => kv.find(jv(e)), Qr = /* @__PURE__ */ new Set();
let Bc = !1, Wc = !1;
function Vv() {
  if (Wc) {
    const e = Array.from(Qr).filter((o) => o.needsMeasurement), t = new Set(e.map((o) => o.element)), r = /* @__PURE__ */ new Map();
    t.forEach((o) => {
      const s = UR(o);
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
  Wc = !1, Bc = !1, Qr.forEach((e) => e.complete()), Qr.clear();
}
function Fv() {
  Qr.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (Wc = !0);
  });
}
function zR() {
  Fv(), Vv();
}
class Au {
  constructor(t, r, o, s, c, l = !1) {
    this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...t], this.onComplete = r, this.name = o, this.motionValue = s, this.element = c, this.isAsync = l;
  }
  scheduleResolve() {
    this.isScheduled = !0, this.isAsync ? (Qr.add(this), Bc || (Bc = !0, ze.read(Fv), ze.resolveKeyframes(Vv))) : (this.readKeyframes(), this.complete());
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
    this.isComplete = !0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), Qr.delete(this);
  }
  cancel() {
    this.isComplete || (this.isScheduled = !1, Qr.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const Co = (e) => Math.round(e * 1e5) / 1e5, Ru = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function GR(e) {
  return e == null;
}
const KR = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, Nu = (e, t) => (r) => !!(typeof r == "string" && KR.test(r) && r.startsWith(e) || t && !GR(r) && Object.prototype.hasOwnProperty.call(r, t)), Bv = (e, t, r) => (o) => {
  if (typeof o != "string")
    return o;
  const [s, c, l, u] = o.match(Ru);
  return {
    [e]: parseFloat(s),
    [t]: parseFloat(c),
    [r]: parseFloat(l),
    alpha: u !== void 0 ? parseFloat(u) : 1
  };
}, YR = (e) => Nr(0, 255, e), fc = {
  ...Yi,
  transform: (e) => Math.round(YR(e))
}, Zr = {
  test: /* @__PURE__ */ Nu("rgb", "red"),
  parse: /* @__PURE__ */ Bv("red", "green", "blue"),
  transform: ({ red: e, green: t, blue: r, alpha: o = 1 }) => "rgba(" + fc.transform(e) + ", " + fc.transform(t) + ", " + fc.transform(r) + ", " + Co(Mo.transform(o)) + ")"
};
function qR(e) {
  let t = "", r = "", o = "", s = "";
  return e.length > 5 ? (t = e.substring(1, 3), r = e.substring(3, 5), o = e.substring(5, 7), s = e.substring(7, 9)) : (t = e.substring(1, 2), r = e.substring(2, 3), o = e.substring(3, 4), s = e.substring(4, 5), t += t, r += r, o += o, s += s), {
    red: parseInt(t, 16),
    green: parseInt(r, 16),
    blue: parseInt(o, 16),
    alpha: s ? parseInt(s, 16) / 255 : 1
  };
}
const $c = {
  test: /* @__PURE__ */ Nu("#"),
  parse: qR,
  transform: Zr.transform
}, Pi = {
  test: /* @__PURE__ */ Nu("hsl", "hue"),
  parse: /* @__PURE__ */ Bv("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: t, lightness: r, alpha: o = 1 }) => "hsla(" + Math.round(e) + ", " + jn.transform(Co(t)) + ", " + jn.transform(Co(r)) + ", " + Co(Mo.transform(o)) + ")"
}, At = {
  test: (e) => Zr.test(e) || $c.test(e) || Pi.test(e),
  parse: (e) => Zr.test(e) ? Zr.parse(e) : Pi.test(e) ? Pi.parse(e) : $c.parse(e),
  transform: (e) => typeof e == "string" ? e : e.hasOwnProperty("red") ? Zr.transform(e) : Pi.transform(e)
}, XR = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function ZR(e) {
  var t, r;
  return isNaN(e) && typeof e == "string" && (((t = e.match(Ru)) === null || t === void 0 ? void 0 : t.length) || 0) + (((r = e.match(XR)) === null || r === void 0 ? void 0 : r.length) || 0) > 0;
}
const Wv = "number", $v = "color", JR = "var", QR = "var(", fp = "${}", eN = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Oo(e) {
  const t = e.toString(), r = [], o = {
    color: [],
    number: [],
    var: []
  }, s = [];
  let c = 0;
  const u = t.replace(eN, (f) => (At.test(f) ? (o.color.push(c), s.push($v), r.push(At.parse(f))) : f.startsWith(QR) ? (o.var.push(c), s.push(JR), r.push(f)) : (o.number.push(c), s.push(Wv), r.push(parseFloat(f))), ++c, fp)).split(fp);
  return { values: r, split: u, indexes: o, types: s };
}
function Uv(e) {
  return Oo(e).values;
}
function Hv(e) {
  const { split: t, types: r } = Oo(e), o = t.length;
  return (s) => {
    let c = "";
    for (let l = 0; l < o; l++)
      if (c += t[l], s[l] !== void 0) {
        const u = r[l];
        u === Wv ? c += Co(s[l]) : u === $v ? c += At.transform(s[l]) : c += s[l];
      }
    return c;
  };
}
const tN = (e) => typeof e == "number" ? 0 : e;
function nN(e) {
  const t = Uv(e);
  return Hv(e)(t.map(tN));
}
const Mr = {
  test: ZR,
  parse: Uv,
  createTransformer: Hv,
  getAnimatableNone: nN
}, rN = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function iN(e) {
  const [t, r] = e.slice(0, -1).split("(");
  if (t === "drop-shadow")
    return e;
  const [o] = r.match(Ru) || [];
  if (!o)
    return e;
  const s = r.replace(o, "");
  let c = rN.has(t) ? 1 : 0;
  return o !== r && (c *= 100), t + "(" + c + s + ")";
}
const oN = /\b([a-z-]*)\(.*?\)/gu, Uc = {
  ...Mr,
  getAnimatableNone: (e) => {
    const t = e.match(oN);
    return t ? t.map(iN).join(" ") : e;
  }
}, sN = {
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
}, aN = {
  rotate: wr,
  rotateX: wr,
  rotateY: wr,
  rotateZ: wr,
  scale: Bs,
  scaleX: Bs,
  scaleY: Bs,
  scaleZ: Bs,
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
  opacity: Mo,
  originX: sp,
  originY: sp,
  originZ: ue
}, dp = {
  ...Yi,
  transform: Math.round
}, Mu = {
  ...sN,
  ...aN,
  zIndex: dp,
  size: ue,
  // SVG
  fillOpacity: Mo,
  strokeOpacity: Mo,
  numOctaves: dp
}, lN = {
  ...Mu,
  // Color props
  color: At,
  backgroundColor: At,
  outlineColor: At,
  fill: At,
  stroke: At,
  // Border props
  borderColor: At,
  borderTopColor: At,
  borderRightColor: At,
  borderBottomColor: At,
  borderLeftColor: At,
  filter: Uc,
  WebkitFilter: Uc
}, Ou = (e) => lN[e];
function zv(e, t) {
  let r = Ou(e);
  return r !== Uc && (r = Mr), r.getAnimatableNone ? r.getAnimatableNone(t) : void 0;
}
const cN = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function uN(e, t, r) {
  let o = 0, s;
  for (; o < e.length && !s; ) {
    const c = e[o];
    typeof c == "string" && !cN.has(c) && Oo(c).values.length && (s = e[o]), o++;
  }
  if (s && r)
    for (const c of t)
      e[c] = zv(r, s);
}
class Gv extends Au {
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
      if (typeof h == "string" && (h = h.trim(), Eu(h))) {
        const p = Lv(h, r.current);
        p !== void 0 && (t[f] = p), f === t.length - 1 && (this.finalKeyframe = h);
      }
    }
    if (this.resolveNoneKeyframes(), !BR.has(o) || t.length !== 2)
      return;
    const [s, c] = t, l = up(s), u = up(c);
    if (l !== u)
      if (ap(l) && ap(u))
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
      OR(t[s]) && o.push(s);
    o.length && uN(t, o, r);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: r, name: o } = this;
    if (!t || !t.current)
      return;
    o === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = ji[o](t.measureViewportBox(), window.getComputedStyle(t.current)), r[0] = this.measuredOrigin;
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
    s[l] = ji[o](r.measureViewportBox(), window.getComputedStyle(r.current)), u !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = u), !((t = this.removedTransforms) === null || t === void 0) && t.length && this.removedTransforms.forEach(([f, h]) => {
      r.getValue(f).set(h);
    }), this.resolveNoneKeyframes();
  }
}
function Du(e) {
  return typeof e == "function";
}
let Ks;
function fN() {
  Ks = void 0;
}
const kn = {
  now: () => (Ks === void 0 && kn.set(bt.isProcessing || _R.useManualTiming ? bt.timestamp : performance.now()), Ks),
  set: (e) => {
    Ks = e, queueMicrotask(fN);
  }
}, hp = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && // It's animatable if we have a string
(Mr.test(e) || e === "0") && // And it contains numbers and/or colors
!e.startsWith("url("));
function dN(e) {
  const t = e[0];
  if (e.length === 1)
    return !0;
  for (let r = 0; r < e.length; r++)
    if (e[r] !== t)
      return !0;
}
function hN(e, t, r, o) {
  const s = e[0];
  if (s === null)
    return !1;
  if (t === "display" || t === "visibility")
    return !0;
  const c = e[e.length - 1], l = hp(s, t), u = hp(c, t);
  return Ki(l === u, `You are trying to animate ${t} from "${s}" to "${c}". ${s} is not an animatable value - to enable this animation set ${s} to a value animatable to ${c} via the \`style\` property.`), !l || !u ? !1 : dN(e) || (r === "spring" || Du(r)) && o;
}
const pN = 40;
class Kv {
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
    return this.resolvedAt ? this.resolvedAt - this.createdAt > pN ? this.resolvedAt : this.createdAt : this.createdAt;
  }
  /**
   * A getter for resolved data. If keyframes are not yet resolved, accessing
   * this.resolved will synchronously flush all pending keyframe resolvers.
   * This is a deoptimisation, but at its worst still batches read/writes.
   */
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && zR(), this._resolved;
  }
  /**
   * A method to be called when the keyframes resolver completes. This method
   * will check if its possible to run the animation and, if not, skip it.
   * Otherwise, it will call initPlayback on the implementing class.
   */
  onKeyframesResolved(t, r) {
    this.resolvedAt = kn.now(), this.hasAttemptedResolve = !0;
    const { name: o, type: s, velocity: c, delay: l, onComplete: u, onUpdate: f, isGenerator: h } = this.options;
    if (!h && !hN(t, o, s, c))
      if (l)
        this.options.duration = 0;
      else {
        f == null || f(Da(t, this.options, r)), u == null || u(), this.resolveFinishedPromise();
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
function Yv(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const mN = 5;
function qv(e, t, r) {
  const o = Math.max(t - mN, 0);
  return Yv(r - e(o), t - o);
}
const dc = 1e-3, gN = 0.01, pp = 10, vN = 0.05, yN = 1;
function xN({ duration: e = 800, bounce: t = 0.25, velocity: r = 0, mass: o = 1 }) {
  let s, c;
  Ki(e <= Ln(pp), "Spring duration must be 10 seconds or less");
  let l = 1 - t;
  l = Nr(vN, yN, l), e = Nr(gN, pp, Jn(e)), l < 1 ? (s = (h) => {
    const p = h * l, v = p * e, x = p - r, g = Hc(h, l), T = Math.exp(-v);
    return dc - x / g * T;
  }, c = (h) => {
    const v = h * l * e, x = v * r + r, g = Math.pow(l, 2) * Math.pow(h, 2) * e, T = Math.exp(-v), S = Hc(Math.pow(h, 2), l);
    return (-s(h) + dc > 0 ? -1 : 1) * ((x - g) * T) / S;
  }) : (s = (h) => {
    const p = Math.exp(-h * e), v = (h - r) * e + 1;
    return -dc + p * v;
  }, c = (h) => {
    const p = Math.exp(-h * e), v = (r - h) * (e * e);
    return p * v;
  });
  const u = 5 / e, f = bN(s, c, u);
  if (e = Ln(e), isNaN(f))
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
const wN = 12;
function bN(e, t, r) {
  let o = r;
  for (let s = 1; s < wN; s++)
    o = o - e(o) / t(o);
  return o;
}
function Hc(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const SN = ["duration", "bounce"], CN = ["stiffness", "damping", "mass"];
function mp(e, t) {
  return t.some((r) => e[r] !== void 0);
}
function TN(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!mp(e, CN) && mp(e, SN)) {
    const r = xN(e);
    t = {
      ...t,
      ...r,
      mass: 1
    }, t.isResolvedFromDuration = !0;
  }
  return t;
}
function Xv({ keyframes: e, restDelta: t, restSpeed: r, ...o }) {
  const s = e[0], c = e[e.length - 1], l = { done: !1, value: s }, { stiffness: u, damping: f, mass: h, duration: p, velocity: v, isResolvedFromDuration: x } = TN({
    ...o,
    velocity: -Jn(o.velocity || 0)
  }), g = v || 0, T = f / (2 * Math.sqrt(u * h)), S = c - s, _ = Jn(Math.sqrt(u / h)), E = Math.abs(S) < 5;
  r || (r = E ? 0.01 : 2), t || (t = E ? 5e-3 : 0.5);
  let A;
  if (T < 1) {
    const M = Hc(_, T);
    A = (I) => {
      const j = Math.exp(-T * _ * I);
      return c - j * ((g + T * _ * S) / M * Math.sin(M * I) + S * Math.cos(M * I));
    };
  } else if (T === 1)
    A = (M) => c - Math.exp(-_ * M) * (S + (g + _ * S) * M);
  else {
    const M = _ * Math.sqrt(T * T - 1);
    A = (I) => {
      const j = Math.exp(-T * _ * I), U = Math.min(M * I, 300);
      return c - j * ((g + T * _ * S) * Math.sinh(U) + M * S * Math.cosh(U)) / M;
    };
  }
  return {
    calculatedDuration: x && p || null,
    next: (M) => {
      const I = A(M);
      if (x)
        l.done = M >= p;
      else {
        let j = 0;
        T < 1 && (j = M === 0 ? Ln(g) : qv(A, M, I));
        const U = Math.abs(j) <= r, $ = Math.abs(c - I) <= t;
        l.done = U && $;
      }
      return l.value = l.done ? c : I, l;
    }
  };
}
function gp({ keyframes: e, velocity: t = 0, power: r = 0.8, timeConstant: o = 325, bounceDamping: s = 10, bounceStiffness: c = 500, modifyTarget: l, min: u, max: f, restDelta: h = 0.5, restSpeed: p }) {
  const v = e[0], x = {
    done: !1,
    value: v
  }, g = (H) => u !== void 0 && H < u || f !== void 0 && H > f, T = (H) => u === void 0 ? f : f === void 0 || Math.abs(u - H) < Math.abs(f - H) ? u : f;
  let S = r * t;
  const _ = v + S, E = l === void 0 ? _ : l(_);
  E !== _ && (S = E - v);
  const A = (H) => -S * Math.exp(-H / o), M = (H) => E + A(H), I = (H) => {
    const te = A(H), re = M(H);
    x.done = Math.abs(te) <= h, x.value = x.done ? E : re;
  };
  let j, U;
  const $ = (H) => {
    g(x.value) && (j = H, U = Xv({
      keyframes: [x.value, T(x.value)],
      velocity: qv(M, H, x.value),
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
      return !U && j === void 0 && (te = !0, I(H), $(H)), j !== void 0 && H >= j ? U.next(H - j) : (!te && I(H), x);
    }
  };
}
const _N = /* @__PURE__ */ Wo(0.42, 0, 1, 1), PN = /* @__PURE__ */ Wo(0, 0, 0.58, 1), Zv = /* @__PURE__ */ Wo(0.42, 0, 0.58, 1), EN = (e) => Array.isArray(e) && typeof e[0] != "number", Iu = (e) => Array.isArray(e) && typeof e[0] == "number", vp = {
  linear: St,
  easeIn: _N,
  easeInOut: Zv,
  easeOut: PN,
  circIn: Pu,
  circInOut: Nv,
  circOut: Rv,
  backIn: _u,
  backInOut: Ev,
  backOut: Pv,
  anticipate: Av
}, yp = (e) => {
  if (Iu(e)) {
    Rr(e.length === 4, "Cubic bezier arrays must contain four numerical values.");
    const [t, r, o, s] = e;
    return Wo(t, r, o, s);
  } else if (typeof e == "string")
    return Rr(vp[e] !== void 0, `Invalid easing type '${e}'`), vp[e];
  return e;
}, AN = (e, t) => (r) => t(e(r)), Qn = (...e) => e.reduce(AN), ki = (e, t, r) => {
  const o = t - e;
  return o === 0 ? 1 : (r - e) / o;
}, nt = (e, t, r) => e + (t - e) * r;
function hc(e, t, r) {
  return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + (t - e) * 6 * r : r < 1 / 2 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e;
}
function RN({ hue: e, saturation: t, lightness: r, alpha: o }) {
  e /= 360, t /= 100, r /= 100;
  let s = 0, c = 0, l = 0;
  if (!t)
    s = c = l = r;
  else {
    const u = r < 0.5 ? r * (1 + t) : r + t - r * t, f = 2 * r - u;
    s = hc(f, u, e + 1 / 3), c = hc(f, u, e), l = hc(f, u, e - 1 / 3);
  }
  return {
    red: Math.round(s * 255),
    green: Math.round(c * 255),
    blue: Math.round(l * 255),
    alpha: o
  };
}
function sa(e, t) {
  return (r) => r > 0 ? t : e;
}
const pc = (e, t, r) => {
  const o = e * e, s = r * (t * t - o) + o;
  return s < 0 ? 0 : Math.sqrt(s);
}, NN = [$c, Zr, Pi], MN = (e) => NN.find((t) => t.test(e));
function xp(e) {
  const t = MN(e);
  if (Ki(!!t, `'${e}' is not an animatable color. Use the equivalent color code instead.`), !t)
    return !1;
  let r = t.parse(e);
  return t === Pi && (r = RN(r)), r;
}
const wp = (e, t) => {
  const r = xp(e), o = xp(t);
  if (!r || !o)
    return sa(e, t);
  const s = { ...r };
  return (c) => (s.red = pc(r.red, o.red, c), s.green = pc(r.green, o.green, c), s.blue = pc(r.blue, o.blue, c), s.alpha = nt(r.alpha, o.alpha, c), Zr.transform(s));
}, zc = /* @__PURE__ */ new Set(["none", "hidden"]);
function ON(e, t) {
  return zc.has(e) ? (r) => r <= 0 ? e : t : (r) => r >= 1 ? t : e;
}
function DN(e, t) {
  return (r) => nt(e, t, r);
}
function Lu(e) {
  return typeof e == "number" ? DN : typeof e == "string" ? Eu(e) ? sa : At.test(e) ? wp : jN : Array.isArray(e) ? Jv : typeof e == "object" ? At.test(e) ? wp : IN : sa;
}
function Jv(e, t) {
  const r = [...e], o = r.length, s = e.map((c, l) => Lu(c)(c, t[l]));
  return (c) => {
    for (let l = 0; l < o; l++)
      r[l] = s[l](c);
    return r;
  };
}
function IN(e, t) {
  const r = { ...e, ...t }, o = {};
  for (const s in r)
    e[s] !== void 0 && t[s] !== void 0 && (o[s] = Lu(e[s])(e[s], t[s]));
  return (s) => {
    for (const c in o)
      r[c] = o[c](s);
    return r;
  };
}
function LN(e, t) {
  var r;
  const o = [], s = { color: 0, var: 0, number: 0 };
  for (let c = 0; c < t.values.length; c++) {
    const l = t.types[c], u = e.indexes[l][s[l]], f = (r = e.values[u]) !== null && r !== void 0 ? r : 0;
    o[c] = f, s[l]++;
  }
  return o;
}
const jN = (e, t) => {
  const r = Mr.createTransformer(t), o = Oo(e), s = Oo(t);
  return o.indexes.var.length === s.indexes.var.length && o.indexes.color.length === s.indexes.color.length && o.indexes.number.length >= s.indexes.number.length ? zc.has(e) && !s.values.length || zc.has(t) && !o.values.length ? ON(e, t) : Qn(Jv(LN(o, s), s.values), r) : (Ki(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), sa(e, t));
};
function Qv(e, t, r) {
  return typeof e == "number" && typeof t == "number" && typeof r == "number" ? nt(e, t, r) : Lu(e)(e, t);
}
function kN(e, t, r) {
  const o = [], s = r || Qv, c = e.length - 1;
  for (let l = 0; l < c; l++) {
    let u = s(e[l], e[l + 1]);
    if (t) {
      const f = Array.isArray(t) ? t[l] || St : t;
      u = Qn(f, u);
    }
    o.push(u);
  }
  return o;
}
function VN(e, t, { clamp: r = !0, ease: o, mixer: s } = {}) {
  const c = e.length;
  if (Rr(c === t.length, "Both input and output ranges must be the same length"), c === 1)
    return () => t[0];
  if (c === 2 && e[0] === e[1])
    return () => t[1];
  e[0] > e[c - 1] && (e = [...e].reverse(), t = [...t].reverse());
  const l = kN(t, o, s), u = l.length, f = (h) => {
    let p = 0;
    if (u > 1)
      for (; p < e.length - 2 && !(h < e[p + 1]); p++)
        ;
    const v = ki(e[p], e[p + 1], h);
    return l[p](v);
  };
  return r ? (h) => f(Nr(e[0], e[c - 1], h)) : f;
}
function FN(e, t) {
  const r = e[e.length - 1];
  for (let o = 1; o <= t; o++) {
    const s = ki(0, t, o);
    e.push(nt(r, 1, s));
  }
}
function BN(e) {
  const t = [0];
  return FN(t, e.length - 1), t;
}
function WN(e, t) {
  return e.map((r) => r * t);
}
function $N(e, t) {
  return e.map(() => t || Zv).splice(0, e.length - 1);
}
function aa({ duration: e = 300, keyframes: t, times: r, ease: o = "easeInOut" }) {
  const s = EN(o) ? o.map(yp) : yp(o), c = {
    done: !1,
    value: t[0]
  }, l = WN(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    r && r.length === t.length ? r : BN(t),
    e
  ), u = VN(l, t, {
    ease: Array.isArray(s) ? s : $N(t, s)
  });
  return {
    calculatedDuration: e,
    next: (f) => (c.value = u(f), c.done = f >= e, c)
  };
}
const bp = 2e4;
function UN(e) {
  let t = 0;
  const r = 50;
  let o = e.next(t);
  for (; !o.done && t < bp; )
    t += r, o = e.next(t);
  return t >= bp ? 1 / 0 : t;
}
const HN = (e) => {
  const t = ({ timestamp: r }) => e(r);
  return {
    start: () => ze.update(t, !0),
    stop: () => Ar(t),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => bt.isProcessing ? bt.timestamp : kn.now()
  };
}, zN = {
  decay: gp,
  inertia: gp,
  tween: aa,
  keyframes: aa,
  spring: Xv
}, GN = (e) => e / 100;
class ju extends Kv {
  constructor(t) {
    super(t), this.holdTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.startTime = null, this.state = "idle", this.stop = () => {
      if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle")
        return;
      this.teardown();
      const { onStop: f } = this.options;
      f && f();
    };
    const { name: r, motionValue: o, element: s, keyframes: c } = this.options, l = (s == null ? void 0 : s.KeyframeResolver) || Au, u = (f, h) => this.onKeyframesResolved(f, h);
    this.resolver = new l(c, u, r, o, s), this.resolver.scheduleResolve();
  }
  flatten() {
    super.flatten(), this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes));
  }
  initPlayback(t) {
    const { type: r = "keyframes", repeat: o = 0, repeatDelay: s = 0, repeatType: c, velocity: l = 0 } = this.options, u = Du(r) ? r : zN[r] || aa;
    let f, h;
    u !== aa && typeof t[0] != "number" && (process.env.NODE_ENV !== "production" && Rr(t.length === 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${t}`), f = Qn(GN, Qv(t[0], t[1])), t = [0, 100]);
    const p = u({ ...this.options, keyframes: t });
    c === "mirror" && (h = u({
      ...this.options,
      keyframes: [...t].reverse(),
      velocity: -l
    })), p.calculatedDuration === null && (p.calculatedDuration = UN(p));
    const { calculatedDuration: v } = p, x = v + s, g = x * (o + 1) - s;
    return {
      generator: p,
      mirroredGenerator: h,
      mapPercentToKeyframes: f,
      calculatedDuration: v,
      resolvedDuration: x,
      totalDuration: g
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
    const { delay: x, repeat: g, repeatType: T, repeatDelay: S, onUpdate: _ } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - p / this.speed, this.startTime)), r ? this.currentTime = t : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(t - this.startTime) * this.speed;
    const E = this.currentTime - x * (this.speed >= 0 ? 1 : -1), A = this.speed >= 0 ? E < 0 : E > p;
    this.currentTime = Math.max(E, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = p);
    let M = this.currentTime, I = c;
    if (g) {
      const H = Math.min(this.currentTime, p) / v;
      let te = Math.floor(H), re = H % 1;
      !re && H >= 1 && (re = 1), re === 1 && te--, te = Math.min(te, g + 1), !!(te % 2) && (T === "reverse" ? (re = 1 - re, S && (re -= S / v)) : T === "mirror" && (I = l)), M = Nr(0, 1, re) * v;
    }
    const j = A ? { done: !1, value: f[0] } : I.next(M);
    u && (j.value = u(j.value));
    let { done: U } = j;
    !A && h !== null && (U = this.speed >= 0 ? this.currentTime >= p : this.currentTime <= 0);
    const $ = this.holdTime === null && (this.state === "finished" || this.state === "running" && U);
    return $ && s !== void 0 && (j.value = Da(f, this.options, s)), _ && _(j.value), $ && this.finish(), j;
  }
  get duration() {
    const { resolved: t } = this;
    return t ? Jn(t.calculatedDuration) : 0;
  }
  get time() {
    return Jn(this.currentTime);
  }
  set time(t) {
    t = Ln(t), this.currentTime = t, this.holdTime !== null || this.speed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.speed);
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
    const { driver: t = HN, onPlay: r, startTime: o } = this.options;
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
const KN = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Can be accelerated but currently disabled until https://issues.chromium.org/issues/41491098 is resolved
  // or until we implement support for linear() easing.
  // "background-color"
]), YN = 10, qN = (e, t) => {
  let r = "";
  const o = Math.max(Math.round(t / YN), 2);
  for (let s = 0; s < o; s++)
    r += e(ki(0, o - 1, s)) + ", ";
  return `linear(${r.substring(0, r.length - 2)})`;
};
function ku(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const XN = {
  linearEasing: void 0
};
function ZN(e, t) {
  const r = ku(e);
  return () => {
    var o;
    return (o = XN[t]) !== null && o !== void 0 ? o : r();
  };
}
const la = /* @__PURE__ */ ZN(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing");
function ey(e) {
  return !!(typeof e == "function" && la() || !e || typeof e == "string" && (e in Gc || la()) || Iu(e) || Array.isArray(e) && e.every(ey));
}
const bo = ([e, t, r, o]) => `cubic-bezier(${e}, ${t}, ${r}, ${o})`, Gc = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ bo([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ bo([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ bo([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ bo([0.33, 1.53, 0.69, 0.99])
};
function ty(e, t) {
  if (e)
    return typeof e == "function" && la() ? qN(e, t) : Iu(e) ? bo(e) : Array.isArray(e) ? e.map((r) => ty(r, t) || Gc.easeOut) : Gc[e];
}
function JN(e, t, r, { delay: o = 0, duration: s = 300, repeat: c = 0, repeatType: l = "loop", ease: u = "easeInOut", times: f } = {}) {
  const h = { [t]: r };
  f && (h.offset = f);
  const p = ty(u, s);
  return Array.isArray(p) && (h.easing = p), e.animate(h, {
    delay: o,
    duration: s,
    easing: Array.isArray(p) ? "linear" : p,
    fill: "both",
    iterations: c + 1,
    direction: l === "reverse" ? "alternate" : "normal"
  });
}
function Sp(e, t) {
  e.timeline = t, e.onfinish = null;
}
const QN = /* @__PURE__ */ ku(() => Object.hasOwnProperty.call(Element.prototype, "animate")), ca = 10, eM = 2e4;
function tM(e) {
  return Du(e.type) || e.type === "spring" || !ey(e.ease);
}
function nM(e, t) {
  const r = new ju({
    ...t,
    keyframes: e,
    repeat: 0,
    delay: 0,
    isGenerator: !0
  });
  let o = { done: !1, value: e[0] };
  const s = [];
  let c = 0;
  for (; !o.done && c < eM; )
    o = r.sample(c), s.push(o.value), c += ca;
  return {
    times: void 0,
    keyframes: s,
    duration: c - ca,
    ease: "linear"
  };
}
const ny = {
  anticipate: Av,
  backInOut: Ev,
  circInOut: Nv
};
function rM(e) {
  return e in ny;
}
class Cp extends Kv {
  constructor(t) {
    super(t);
    const { name: r, motionValue: o, element: s, keyframes: c } = this.options;
    this.resolver = new Gv(c, (l, u) => this.onKeyframesResolved(l, u), r, o, s), this.resolver.scheduleResolve();
  }
  initPlayback(t, r) {
    var o;
    let { duration: s = 300, times: c, ease: l, type: u, motionValue: f, name: h, startTime: p } = this.options;
    if (!(!((o = f.owner) === null || o === void 0) && o.current))
      return !1;
    if (typeof l == "string" && la() && rM(l) && (l = ny[l]), tM(this.options)) {
      const { onComplete: x, onUpdate: g, motionValue: T, element: S, ..._ } = this.options, E = nM(t, _);
      t = E.keyframes, t.length === 1 && (t[1] = t[0]), s = E.duration, c = E.times, l = E.ease, u = "keyframes";
    }
    const v = JN(f.owner.current, h, t, { ...this.options, duration: s, times: c, ease: l });
    return v.startTime = p ?? this.calcStartTime(), this.pendingTimeline ? (Sp(v, this.pendingTimeline), this.pendingTimeline = void 0) : v.onfinish = () => {
      const { onComplete: x } = this.options;
      f.set(Da(t, this.options, r)), x && x(), this.cancel(), this.resolveFinishedPromise();
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
    o.currentTime = Ln(t);
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
        return St;
      const { animation: o } = r;
      Sp(o, t);
    }
    return St;
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
      const { motionValue: h, onUpdate: p, onComplete: v, element: x, ...g } = this.options, T = new ju({
        ...g,
        keyframes: o,
        duration: s,
        type: c,
        ease: l,
        times: u,
        isGenerator: !0
      }), S = Ln(this.time);
      h.setWithVelocity(T.sample(S - ca).value, T.sample(S).value, ca);
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
    return QN() && o && KN.has(o) && r && r.owner && r.owner.current instanceof HTMLElement && /**
     * If we're outputting values to onUpdate then we can't use WAAPI as there's
     * no way to read the value from WAAPI every frame.
     */
    !r.owner.getProps().onUpdate && !s && c !== "mirror" && l !== 0 && u !== "inertia";
  }
}
const iM = ku(() => window.ScrollTimeline !== void 0);
class oM {
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
    const o = this.animations.map((s) => iM() && s.attachTimeline ? s.attachTimeline(t) : r(s));
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
function sM({ when: e, delay: t, delayChildren: r, staggerChildren: o, staggerDirection: s, repeat: c, repeatType: l, repeatDelay: u, from: f, elapsed: h, ...p }) {
  return !!Object.keys(p).length;
}
const Vu = (e, t, r, o = {}, s, c) => (l) => {
  const u = Tu(o, e) || {}, f = u.delay || o.delay || 0;
  let { elapsed: h = 0 } = o;
  h = h - Ln(f);
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
  sM(u) || (p = {
    ...p,
    ...TR(e, p)
  }), p.duration && (p.duration = Ln(p.duration)), p.repeatDelay && (p.repeatDelay = Ln(p.repeatDelay)), p.from !== void 0 && (p.keyframes[0] = p.from);
  let v = !1;
  if ((p.type === !1 || p.duration === 0 && !p.repeatDelay) && (p.duration = 0, p.delay === 0 && (v = !0)), v && !c && t.get() !== void 0) {
    const x = Da(p.keyframes, u);
    if (x !== void 0)
      return ze.update(() => {
        p.onUpdate(x), p.onComplete();
      }), new oM([]);
  }
  return !c && Cp.supports(p) ? new Cp(p) : new ju(p);
}, aM = (e) => !!(e && typeof e == "object" && e.mix && e.toValue), lM = (e) => Fc(e) ? e[e.length - 1] || 0 : e;
function Fu(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Bu(e, t) {
  const r = e.indexOf(t);
  r > -1 && e.splice(r, 1);
}
class Wu {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return Fu(this.subscriptions, t), () => Bu(this.subscriptions, t);
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
const Tp = 30, cM = (e) => !isNaN(parseFloat(e));
class uM {
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
    this.current = t, this.updatedAt = kn.now(), this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = cM(this.current));
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
    return process.env.NODE_ENV !== "production" && Na(!1, 'value.onChange(callback) is deprecated. Switch to value.on("change", callback).'), this.on("change", t);
  }
  on(t, r) {
    this.events[t] || (this.events[t] = new Wu());
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
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > Tp)
      return 0;
    const r = Math.min(this.updatedAt - this.prevUpdatedAt, Tp);
    return Yv(parseFloat(this.current) - parseFloat(this.prevFrameValue), r);
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
function Do(e, t) {
  return new uM(e, t);
}
function fM(e, t, r) {
  e.hasValue(t) ? e.getValue(t).set(r) : e.addValue(t, Do(r));
}
function dM(e, t) {
  const r = Oa(e, t);
  let { transitionEnd: o = {}, transition: s = {}, ...c } = r || {};
  c = { ...c, ...o };
  for (const l in c) {
    const u = lM(c[l]);
    fM(e, l, u);
  }
}
const $u = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), hM = "framerAppearId", ry = "data-" + $u(hM);
function iy(e) {
  return e.props[ry];
}
const Rt = (e) => !!(e && e.getVelocity);
function pM(e) {
  return !!(Rt(e) && e.add);
}
function Kc(e, t) {
  const r = e.getValue("willChange");
  if (pM(r))
    return r.add(t);
}
function mM({ protectedKeys: e, needsAnimating: t }, r) {
  const o = e.hasOwnProperty(r) && t[r] !== !0;
  return t[r] = !1, o;
}
function oy(e, t, { delay: r = 0, transitionOverride: o, type: s } = {}) {
  var c;
  let { transition: l = e.getDefaultTransition(), transitionEnd: u, ...f } = t;
  o && (l = o);
  const h = [], p = s && e.animationState && e.animationState.getState()[s];
  for (const v in f) {
    const x = e.getValue(v, (c = e.latestValues[v]) !== null && c !== void 0 ? c : null), g = f[v];
    if (g === void 0 || p && mM(p, v))
      continue;
    const T = {
      delay: r,
      ...Tu(l || {}, v)
    };
    let S = !1;
    if (window.MotionHandoffAnimation) {
      const E = iy(e);
      if (E) {
        const A = window.MotionHandoffAnimation(E, v, ze);
        A !== null && (T.startTime = A, S = !0);
      }
    }
    Kc(e, v), x.start(Vu(v, x, g, e.shouldReduceMotion && ii.has(v) ? { type: !1 } : T, e, S));
    const _ = x.animation;
    _ && h.push(_);
  }
  return u && Promise.all(h).then(() => {
    ze.update(() => {
      u && dM(e, u);
    });
  }), h;
}
function Yc(e, t, r = {}) {
  var o;
  const s = Oa(e, t, r.type === "exit" ? (o = e.presenceContext) === null || o === void 0 ? void 0 : o.custom : void 0);
  let { transition: c = e.getDefaultTransition() || {} } = s || {};
  r.transitionOverride && (c = r.transitionOverride);
  const l = s ? () => Promise.all(oy(e, s, r)) : () => Promise.resolve(), u = e.variantChildren && e.variantChildren.size ? (h = 0) => {
    const { delayChildren: p = 0, staggerChildren: v, staggerDirection: x } = c;
    return gM(e, t, p + h, v, x, r);
  } : () => Promise.resolve(), { when: f } = c;
  if (f) {
    const [h, p] = f === "beforeChildren" ? [l, u] : [u, l];
    return h().then(() => p());
  } else
    return Promise.all([l(), u(r.delay)]);
}
function gM(e, t, r = 0, o = 0, s = 1, c) {
  const l = [], u = (e.variantChildren.size - 1) * o, f = s === 1 ? (h = 0) => h * o : (h = 0) => u - h * o;
  return Array.from(e.variantChildren).sort(vM).forEach((h, p) => {
    h.notify("AnimationStart", t), l.push(Yc(h, t, {
      ...c,
      delay: r + f(p)
    }).then(() => h.notify("AnimationComplete", t)));
  }), Promise.all(l);
}
function vM(e, t) {
  return e.sortNodePosition(t);
}
function yM(e, t, r = {}) {
  e.notify("AnimationStart", t);
  let o;
  if (Array.isArray(t)) {
    const s = t.map((c) => Yc(e, c, r));
    o = Promise.all(s);
  } else if (typeof t == "string")
    o = Yc(e, t, r);
  else {
    const s = typeof t == "function" ? Oa(e, t, r.custom) : t;
    o = Promise.all(oy(e, s, r));
  }
  return o.then(() => {
    e.notify("AnimationComplete", t);
  });
}
const xM = Cu.length;
function sy(e) {
  if (!e)
    return;
  if (!e.isControllingVariants) {
    const r = e.parent ? sy(e.parent) || {} : {};
    return e.props.initial !== void 0 && (r.initial = e.props.initial), r;
  }
  const t = {};
  for (let r = 0; r < xM; r++) {
    const o = Cu[r], s = e.props[o];
    (No(s) || s === !1) && (t[o] = s);
  }
  return t;
}
const wM = [...Su].reverse(), bM = Su.length;
function SM(e) {
  return (t) => Promise.all(t.map(({ animation: r, options: o }) => yM(e, r, o)));
}
function CM(e) {
  let t = SM(e), r = _p(), o = !0;
  const s = (f) => (h, p) => {
    var v;
    const x = Oa(e, p, f === "exit" ? (v = e.presenceContext) === null || v === void 0 ? void 0 : v.custom : void 0);
    if (x) {
      const { transition: g, transitionEnd: T, ...S } = x;
      h = { ...h, ...S, ...T };
    }
    return h;
  };
  function c(f) {
    t = f(e);
  }
  function l(f) {
    const { props: h } = e, p = sy(e.parent) || {}, v = [], x = /* @__PURE__ */ new Set();
    let g = {}, T = 1 / 0;
    for (let _ = 0; _ < bM; _++) {
      const E = wM[_], A = r[E], M = h[E] !== void 0 ? h[E] : p[E], I = No(M), j = E === f ? A.isActive : null;
      j === !1 && (T = _);
      let U = M === p[E] && M !== h[E] && I;
      if (U && o && e.manuallyAnimateOnMount && (U = !1), A.protectedKeys = { ...g }, // If it isn't active and hasn't *just* been set as inactive
      !A.isActive && j === null || // If we didn't and don't have any defined prop for this animation type
      !M && !A.prevProp || // Or if the prop doesn't define an animation
      Ma(M) || typeof M == "boolean")
        continue;
      const $ = TM(A.prevProp, M);
      let H = $ || // If we're making this variant active, we want to always make it active
      E === f && A.isActive && !U && I || // If we removed a higher-priority variant (i is in reverse order)
      _ > T && I, te = !1;
      const re = Array.isArray(M) ? M : [M];
      let de = re.reduce(s(E), {});
      j === !1 && (de = {});
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
        if (g.hasOwnProperty(Z))
          continue;
        let pe = !1;
        Fc(q) && Fc(G) ? pe = !bv(q, G) : pe = q !== G, pe ? q != null ? ne(Z) : x.add(Z) : q !== void 0 && x.has(Z) ? ne(Z) : A.protectedKeys[Z] = !0;
      }
      A.prevProp = M, A.prevResolvedValues = de, A.isActive && (g = { ...g, ...de }), o && e.blockInitialAnimation && (H = !1), H && (!(U && $) || te) && v.push(...re.map((Z) => ({
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
    let S = !!v.length;
    return o && (h.initial === !1 || h.initial === h.animate) && !e.manuallyAnimateOnMount && (S = !1), o = !1, S ? t(v) : Promise.resolve();
  }
  function u(f, h) {
    var p;
    if (r[f].isActive === h)
      return Promise.resolve();
    (p = e.variantChildren) === null || p === void 0 || p.forEach((x) => {
      var g;
      return (g = x.animationState) === null || g === void 0 ? void 0 : g.setActive(f, h);
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
      r = _p(), o = !0;
    }
  };
}
function TM(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !bv(t, e) : !1;
}
function Yr(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function _p() {
  return {
    animate: Yr(!0),
    whileInView: Yr(),
    whileHover: Yr(),
    whileTap: Yr(),
    whileDrag: Yr(),
    whileFocus: Yr(),
    exit: Yr()
  };
}
class Ir {
  constructor(t) {
    this.isMounted = !1, this.node = t;
  }
  update() {
  }
}
class _M extends Ir {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(t) {
    super(t), t.animationState || (t.animationState = CM(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    Ma(t) && (this.unmountControls = t.subscribe(this.node));
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
let PM = 0;
class EM extends Ir {
  constructor() {
    super(...arguments), this.id = PM++;
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
const AM = {
  animation: {
    Feature: _M
  },
  exit: {
    Feature: EM
  }
}, ay = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1;
function Ia(e, t = "page") {
  return {
    point: {
      x: e[`${t}X`],
      y: e[`${t}Y`]
    }
  };
}
const RM = (e) => (t) => ay(t) && e(t, Ia(t));
function Xn(e, t, r, o = { passive: !0 }) {
  return e.addEventListener(t, r, o), () => e.removeEventListener(t, r);
}
function er(e, t, r, o) {
  return Xn(e, t, RM(r), o);
}
const Pp = (e, t) => Math.abs(e - t);
function NM(e, t) {
  const r = Pp(e.x, t.x), o = Pp(e.y, t.y);
  return Math.sqrt(r ** 2 + o ** 2);
}
class ly {
  constructor(t, r, { transformPagePoint: o, contextWindow: s, dragSnapToOrigin: c = !1 } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const v = gc(this.lastMoveEventInfo, this.history), x = this.startEvent !== null, g = NM(v.offset, { x: 0, y: 0 }) >= 3;
      if (!x && !g)
        return;
      const { point: T } = v, { timestamp: S } = bt;
      this.history.push({ ...T, timestamp: S });
      const { onStart: _, onMove: E } = this.handlers;
      x || (_ && _(this.lastMoveEvent, v), this.startEvent = this.lastMoveEvent), E && E(this.lastMoveEvent, v);
    }, this.handlePointerMove = (v, x) => {
      this.lastMoveEvent = v, this.lastMoveEventInfo = mc(x, this.transformPagePoint), ze.update(this.updatePoint, !0);
    }, this.handlePointerUp = (v, x) => {
      this.end();
      const { onEnd: g, onSessionEnd: T, resumeAnimation: S } = this.handlers;
      if (this.dragSnapToOrigin && S && S(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const _ = gc(v.type === "pointercancel" ? this.lastMoveEventInfo : mc(x, this.transformPagePoint), this.history);
      this.startEvent && g && g(v, _), T && T(v, _);
    }, !ay(t))
      return;
    this.dragSnapToOrigin = c, this.handlers = r, this.transformPagePoint = o, this.contextWindow = s || window;
    const l = Ia(t), u = mc(l, this.transformPagePoint), { point: f } = u, { timestamp: h } = bt;
    this.history = [{ ...f, timestamp: h }];
    const { onSessionStart: p } = r;
    p && p(t, gc(u, this.history)), this.removeListeners = Qn(er(this.contextWindow, "pointermove", this.handlePointerMove), er(this.contextWindow, "pointerup", this.handlePointerUp), er(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), Ar(this.updatePoint);
  }
}
function mc(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Ep(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function gc({ point: e }, t) {
  return {
    point: e,
    delta: Ep(e, cy(t)),
    offset: Ep(e, MM(t)),
    velocity: OM(t, 0.1)
  };
}
function MM(e) {
  return e[0];
}
function cy(e) {
  return e[e.length - 1];
}
function OM(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let r = e.length - 1, o = null;
  const s = cy(e);
  for (; r >= 0 && (o = e[r], !(s.timestamp - o.timestamp > Ln(t))); )
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
function uy(e) {
  let t = null;
  return () => {
    const r = () => {
      t = null;
    };
    return t === null ? (t = e, r) : !1;
  };
}
const Ap = uy("dragHorizontal"), Rp = uy("dragVertical");
function fy(e) {
  let t = !1;
  if (e === "y")
    t = Rp();
  else if (e === "x")
    t = Ap();
  else {
    const r = Ap(), o = Rp();
    r && o ? t = () => {
      r(), o();
    } : (r && r(), o && o());
  }
  return t;
}
function dy() {
  const e = fy(!0);
  return e ? (e(), !1) : !0;
}
function Ei(e) {
  return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
const hy = 1e-4, DM = 1 - hy, IM = 1 + hy, py = 0.01, LM = 0 - py, jM = 0 + py;
function tn(e) {
  return e.max - e.min;
}
function kM(e, t, r) {
  return Math.abs(e - t) <= r;
}
function Np(e, t, r, o = 0.5) {
  e.origin = o, e.originPoint = nt(t.min, t.max, e.origin), e.scale = tn(r) / tn(t), e.translate = nt(r.min, r.max, e.origin) - e.originPoint, (e.scale >= DM && e.scale <= IM || isNaN(e.scale)) && (e.scale = 1), (e.translate >= LM && e.translate <= jM || isNaN(e.translate)) && (e.translate = 0);
}
function To(e, t, r, o) {
  Np(e.x, t.x, r.x, o ? o.originX : void 0), Np(e.y, t.y, r.y, o ? o.originY : void 0);
}
function Mp(e, t, r) {
  e.min = r.min + t.min, e.max = e.min + tn(t);
}
function VM(e, t, r) {
  Mp(e.x, t.x, r.x), Mp(e.y, t.y, r.y);
}
function Op(e, t, r) {
  e.min = t.min - r.min, e.max = e.min + tn(t);
}
function _o(e, t, r) {
  Op(e.x, t.x, r.x), Op(e.y, t.y, r.y);
}
function FM(e, { min: t, max: r }, o) {
  return t !== void 0 && e < t ? e = o ? nt(t, e, o.min) : Math.max(e, t) : r !== void 0 && e > r && (e = o ? nt(r, e, o.max) : Math.min(e, r)), e;
}
function Dp(e, t, r) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: r !== void 0 ? e.max + r - (e.max - e.min) : void 0
  };
}
function BM(e, { top: t, left: r, bottom: o, right: s }) {
  return {
    x: Dp(e.x, r, s),
    y: Dp(e.y, t, o)
  };
}
function Ip(e, t) {
  let r = t.min - e.min, o = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([r, o] = [o, r]), { min: r, max: o };
}
function WM(e, t) {
  return {
    x: Ip(e.x, t.x),
    y: Ip(e.y, t.y)
  };
}
function $M(e, t) {
  let r = 0.5;
  const o = tn(e), s = tn(t);
  return s > o ? r = ki(t.min, t.max - o, e.min) : o > s && (r = ki(e.min, e.max - s, t.min)), Nr(0, 1, r);
}
function UM(e, t) {
  const r = {};
  return t.min !== void 0 && (r.min = t.min - e.min), t.max !== void 0 && (r.max = t.max - e.min), r;
}
const qc = 0.35;
function HM(e = qc) {
  return e === !1 ? e = 0 : e === !0 && (e = qc), {
    x: Lp(e, "left", "right"),
    y: Lp(e, "top", "bottom")
  };
}
function Lp(e, t, r) {
  return {
    min: jp(e, t),
    max: jp(e, r)
  };
}
function jp(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const kp = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), Ai = () => ({
  x: kp(),
  y: kp()
}), Vp = () => ({ min: 0, max: 0 }), ut = () => ({
  x: Vp(),
  y: Vp()
});
function pn(e) {
  return [e("x"), e("y")];
}
function my({ top: e, left: t, right: r, bottom: o }) {
  return {
    x: { min: t, max: r },
    y: { min: e, max: o }
  };
}
function zM({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function GM(e, t) {
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
function vc(e) {
  return e === void 0 || e === 1;
}
function Xc({ scale: e, scaleX: t, scaleY: r }) {
  return !vc(e) || !vc(t) || !vc(r);
}
function qr(e) {
  return Xc(e) || gy(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
}
function gy(e) {
  return Fp(e.x) || Fp(e.y);
}
function Fp(e) {
  return e && e !== "0%";
}
function ua(e, t, r) {
  const o = e - r, s = t * o;
  return r + s;
}
function Bp(e, t, r, o, s) {
  return s !== void 0 && (e = ua(e, s, o)), ua(e, r, o) + t;
}
function Zc(e, t = 0, r = 1, o, s) {
  e.min = Bp(e.min, t, r, o, s), e.max = Bp(e.max, t, r, o, s);
}
function vy(e, { x: t, y: r }) {
  Zc(e.x, t.translate, t.scale, t.originPoint), Zc(e.y, r.translate, r.scale, r.originPoint);
}
const Wp = 0.999999999999, $p = 1.0000000000001;
function KM(e, t, r, o = !1) {
  const s = r.length;
  if (!s)
    return;
  t.x = t.y = 1;
  let c, l;
  for (let u = 0; u < s; u++) {
    c = r[u], l = c.projectionDelta;
    const { visualElement: f } = c.options;
    f && f.props.style && f.props.style.display === "contents" || (o && c.options.layoutScroll && c.scroll && c !== c.root && Ni(e, {
      x: -c.scroll.offset.x,
      y: -c.scroll.offset.y
    }), l && (t.x *= l.x.scale, t.y *= l.y.scale, vy(e, l)), o && qr(c.latestValues) && Ni(e, c.latestValues));
  }
  t.x < $p && t.x > Wp && (t.x = 1), t.y < $p && t.y > Wp && (t.y = 1);
}
function Ri(e, t) {
  e.min = e.min + t, e.max = e.max + t;
}
function Up(e, t, r, o, s = 0.5) {
  const c = nt(e.min, e.max, s);
  Zc(e, t, r, c, o);
}
function Ni(e, t) {
  Up(e.x, t.x, t.scaleX, t.scale, t.originX), Up(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function yy(e, t) {
  return my(GM(e.getBoundingClientRect(), t));
}
function YM(e, t, r) {
  const o = yy(e, r), { scroll: s } = t;
  return s && (Ri(o.x, s.offset.x), Ri(o.y, s.offset.y)), o;
}
const xy = ({ current: e }) => e ? e.ownerDocument.defaultView : null, qM = /* @__PURE__ */ new WeakMap();
class XM {
  constructor(t) {
    this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = ut(), this.visualElement = t;
  }
  start(t, { snapToCursor: r = !1 } = {}) {
    const { presenceContext: o } = this.visualElement;
    if (o && o.isPresent === !1)
      return;
    const s = (p) => {
      const { dragSnapToOrigin: v } = this.getProps();
      v ? this.pauseAnimation() : this.stopAnimation(), r && this.snapToCursor(Ia(p, "page").point);
    }, c = (p, v) => {
      const { drag: x, dragPropagation: g, onDragStart: T } = this.getProps();
      if (x && !g && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = fy(x), !this.openGlobalLock))
        return;
      this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), pn((_) => {
        let E = this.getAxisMotionValue(_).get() || 0;
        if (jn.test(E)) {
          const { projection: A } = this.visualElement;
          if (A && A.layout) {
            const M = A.layout.layoutBox[_];
            M && (E = tn(M) * (parseFloat(E) / 100));
          }
        }
        this.originPoint[_] = E;
      }), T && ze.postRender(() => T(p, v)), Kc(this.visualElement, "transform");
      const { animationState: S } = this.visualElement;
      S && S.setActive("whileDrag", !0);
    }, l = (p, v) => {
      const { dragPropagation: x, dragDirectionLock: g, onDirectionLock: T, onDrag: S } = this.getProps();
      if (!x && !this.openGlobalLock)
        return;
      const { offset: _ } = v;
      if (g && this.currentDirection === null) {
        this.currentDirection = ZM(_), this.currentDirection !== null && T && T(this.currentDirection);
        return;
      }
      this.updateAxis("x", v.point, _), this.updateAxis("y", v.point, _), this.visualElement.render(), S && S(p, v);
    }, u = (p, v) => this.stop(p, v), f = () => pn((p) => {
      var v;
      return this.getAnimationState(p) === "paused" && ((v = this.getAxisMotionValue(p).animation) === null || v === void 0 ? void 0 : v.play());
    }), { dragSnapToOrigin: h } = this.getProps();
    this.panSession = new ly(t, {
      onSessionStart: s,
      onStart: c,
      onMove: l,
      onSessionEnd: u,
      resumeAnimation: f
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: h,
      contextWindow: xy(this.visualElement)
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
    if (!o || !Ws(t, s, this.currentDirection))
      return;
    const c = this.getAxisMotionValue(t);
    let l = this.originPoint[t] + o[t];
    this.constraints && this.constraints[t] && (l = FM(l, this.constraints[t], this.elastic[t])), c.set(l);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: r, dragElastic: o } = this.getProps(), s = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (t = this.visualElement.projection) === null || t === void 0 ? void 0 : t.layout, c = this.constraints;
    r && Ei(r) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : r && s ? this.constraints = BM(s.layoutBox, r) : this.constraints = !1, this.elastic = HM(o), c !== this.constraints && s && this.constraints && !this.hasMutatedConstraints && pn((l) => {
      this.constraints !== !1 && this.getAxisMotionValue(l) && (this.constraints[l] = UM(s.layoutBox[l], this.constraints[l]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: r } = this.getProps();
    if (!t || !Ei(t))
      return !1;
    const o = t.current;
    Rr(o !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
    const { projection: s } = this.visualElement;
    if (!s || !s.layout)
      return !1;
    const c = YM(o, s.root, this.visualElement.getTransformPagePoint());
    let l = WM(s.layout.layoutBox, c);
    if (r) {
      const u = r(zM(l));
      this.hasMutatedConstraints = !!u, u && (l = my(u));
    }
    return l;
  }
  startAnimation(t) {
    const { drag: r, dragMomentum: o, dragElastic: s, dragTransition: c, dragSnapToOrigin: l, onDragTransitionEnd: u } = this.getProps(), f = this.constraints || {}, h = pn((p) => {
      if (!Ws(p, r, this.currentDirection))
        return;
      let v = f && f[p] || {};
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
  startAxisValueAnimation(t, r) {
    const o = this.getAxisMotionValue(t);
    return Kc(this.visualElement, t), o.start(Vu(t, o, 0, r, this.visualElement, !1));
  }
  stopAnimation() {
    pn((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    pn((t) => {
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
    pn((r) => {
      const { drag: o } = this.getProps();
      if (!Ws(r, o, this.currentDirection))
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
    if (!Ei(r) || !o || !this.constraints)
      return;
    this.stopAnimation();
    const s = { x: 0, y: 0 };
    pn((l) => {
      const u = this.getAxisMotionValue(l);
      if (u && this.constraints !== !1) {
        const f = u.get();
        s[l] = $M({ min: f, max: f }, this.constraints[l]);
      }
    });
    const { transformTemplate: c } = this.visualElement.getProps();
    this.visualElement.current.style.transform = c ? c({}, "") : "none", o.root && o.root.updateScroll(), o.updateLayout(), this.resolveConstraints(), pn((l) => {
      if (!Ws(l, t, null))
        return;
      const u = this.getAxisMotionValue(l), { min: f, max: h } = this.constraints[l];
      u.set(nt(f, h, s[l]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    qM.set(this.visualElement, this);
    const t = this.visualElement.current, r = er(t, "pointerdown", (f) => {
      const { drag: h, dragListener: p = !0 } = this.getProps();
      h && p && this.start(f);
    }), o = () => {
      const { dragConstraints: f } = this.getProps();
      Ei(f) && f.current && (this.constraints = this.resolveRefConstraints());
    }, { projection: s } = this.visualElement, c = s.addEventListener("measure", o);
    s && !s.layout && (s.root && s.root.updateScroll(), s.updateLayout()), ze.read(o);
    const l = Xn(window, "resize", () => this.scalePositionWithinConstraints()), u = s.addEventListener("didUpdate", ({ delta: f, hasLayoutChanged: h }) => {
      this.isDragging && h && (pn((p) => {
        const v = this.getAxisMotionValue(p);
        v && (this.originPoint[p] += f[p].translate, v.set(v.get() + f[p].translate));
      }), this.visualElement.render());
    });
    return () => {
      l(), r(), c(), u && u();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(), { drag: r = !1, dragDirectionLock: o = !1, dragPropagation: s = !1, dragConstraints: c = !1, dragElastic: l = qc, dragMomentum: u = !0 } = t;
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
function Ws(e, t, r) {
  return (t === !0 || t === e) && (r === null || r === e);
}
function ZM(e, t = 10) {
  let r = null;
  return Math.abs(e.y) > t ? r = "y" : Math.abs(e.x) > t && (r = "x"), r;
}
class JM extends Ir {
  constructor(t) {
    super(t), this.removeGroupControls = St, this.removeListeners = St, this.controls = new XM(t);
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || St;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Hp = (e) => (t, r) => {
  e && ze.postRender(() => e(t, r));
};
class QM extends Ir {
  constructor() {
    super(...arguments), this.removePointerDownListener = St;
  }
  onPointerDown(t) {
    this.session = new ly(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: xy(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: r, onPan: o, onPanEnd: s } = this.node.getProps();
    return {
      onSessionStart: Hp(t),
      onStart: Hp(r),
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
const Uu = Fi(null);
function eO() {
  const e = Ht(Uu);
  if (e === null)
    return [!0, null];
  const { isPresent: t, onExitComplete: r, register: o } = e, s = _T();
  Io(() => o(s), []);
  const c = Cm(() => r && r(s), [s, r]);
  return !t && r ? [!1, c] : [!0];
}
const wy = Fi({}), by = Fi({}), Ys = {
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
function zp(e, t) {
  return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
const xo = {
  correct: (e, t) => {
    if (!t.target)
      return e;
    if (typeof e == "string")
      if (ue.test(e))
        e = parseFloat(e);
      else
        return e;
    const r = zp(e, t.target.x), o = zp(e, t.target.y);
    return `${r}% ${o}%`;
  }
}, tO = {
  correct: (e, { treeScale: t, projectionDelta: r }) => {
    const o = e, s = Mr.parse(e);
    if (s.length > 5)
      return o;
    const c = Mr.createTransformer(e), l = typeof s[0] != "number" ? 1 : 0, u = r.x.scale * t.x, f = r.y.scale * t.y;
    s[0 + l] /= u, s[1 + l] /= f;
    const h = nt(u, f, 0.5);
    return typeof s[2 + l] == "number" && (s[2 + l] /= h), typeof s[3 + l] == "number" && (s[3 + l] /= h), c(s);
  }
}, fa = {};
function nO(e) {
  Object.assign(fa, e);
}
const { schedule: Hu, cancel: zD } = Sv(queueMicrotask, !1);
class rO extends PT {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: t, layoutGroup: r, switchLayoutGroup: o, layoutId: s } = this.props, { projection: c } = t;
    nO(iO), c && (r.group && r.group.add(c), o && o.register && s && o.register(c), c.root.didUpdate(), c.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), c.setOptions({
      ...c.options,
      onExitComplete: () => this.safeToRemove()
    })), Ys.hasEverUpdated = !0;
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
    t && (t.root.didUpdate(), Hu.postRender(() => {
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
function Sy(e) {
  const [t, r] = eO(), o = Ht(wy);
  return y.jsx(rO, { ...e, layoutGroup: o, switchLayoutGroup: Ht(by), isPresent: t, safeToRemove: r });
}
const iO = {
  borderRadius: {
    ...xo,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: xo,
  borderTopRightRadius: xo,
  borderBottomLeftRadius: xo,
  borderBottomRightRadius: xo,
  boxShadow: tO
}, Cy = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], oO = Cy.length, Gp = (e) => typeof e == "string" ? parseFloat(e) : e, Kp = (e) => typeof e == "number" || ue.test(e);
function sO(e, t, r, o, s, c) {
  s ? (e.opacity = nt(
    0,
    // TODO Reinstate this if only child
    r.opacity !== void 0 ? r.opacity : 1,
    aO(o)
  ), e.opacityExit = nt(t.opacity !== void 0 ? t.opacity : 1, 0, lO(o))) : c && (e.opacity = nt(t.opacity !== void 0 ? t.opacity : 1, r.opacity !== void 0 ? r.opacity : 1, o));
  for (let l = 0; l < oO; l++) {
    const u = `border${Cy[l]}Radius`;
    let f = Yp(t, u), h = Yp(r, u);
    if (f === void 0 && h === void 0)
      continue;
    f || (f = 0), h || (h = 0), f === 0 || h === 0 || Kp(f) === Kp(h) ? (e[u] = Math.max(nt(Gp(f), Gp(h), o), 0), (jn.test(h) || jn.test(f)) && (e[u] += "%")) : e[u] = h;
  }
  (t.rotate || r.rotate) && (e.rotate = nt(t.rotate || 0, r.rotate || 0, o));
}
function Yp(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const aO = /* @__PURE__ */ Ty(0, 0.5, Rv), lO = /* @__PURE__ */ Ty(0.5, 0.95, St);
function Ty(e, t, r) {
  return (o) => o < e ? 0 : o > t ? 1 : r(ki(e, t, o));
}
function qp(e, t) {
  e.min = t.min, e.max = t.max;
}
function hn(e, t) {
  qp(e.x, t.x), qp(e.y, t.y);
}
function Xp(e, t) {
  e.translate = t.translate, e.scale = t.scale, e.originPoint = t.originPoint, e.origin = t.origin;
}
function Zp(e, t, r, o, s) {
  return e -= t, e = ua(e, 1 / r, o), s !== void 0 && (e = ua(e, 1 / s, o)), e;
}
function cO(e, t = 0, r = 1, o = 0.5, s, c = e, l = e) {
  if (jn.test(t) && (t = parseFloat(t), t = nt(l.min, l.max, t / 100) - l.min), typeof t != "number")
    return;
  let u = nt(c.min, c.max, o);
  e === c && (u -= t), e.min = Zp(e.min, t, r, u, s), e.max = Zp(e.max, t, r, u, s);
}
function Jp(e, t, [r, o, s], c, l) {
  cO(e, t[r], t[o], t[s], t.scale, c, l);
}
const uO = ["x", "scaleX", "originX"], fO = ["y", "scaleY", "originY"];
function Qp(e, t, r, o) {
  Jp(e.x, t, uO, r ? r.x : void 0, o ? o.x : void 0), Jp(e.y, t, fO, r ? r.y : void 0, o ? o.y : void 0);
}
function em(e) {
  return e.translate === 0 && e.scale === 1;
}
function _y(e) {
  return em(e.x) && em(e.y);
}
function tm(e, t) {
  return e.min === t.min && e.max === t.max;
}
function dO(e, t) {
  return tm(e.x, t.x) && tm(e.y, t.y);
}
function nm(e, t) {
  return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max);
}
function Py(e, t) {
  return nm(e.x, t.x) && nm(e.y, t.y);
}
function rm(e) {
  return tn(e.x) / tn(e.y);
}
function im(e, t) {
  return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint;
}
class hO {
  constructor() {
    this.members = [];
  }
  add(t) {
    Fu(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (Bu(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
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
function pO(e, t, r) {
  let o = "";
  const s = e.x.translate / t.x, c = e.y.translate / t.y, l = (r == null ? void 0 : r.z) || 0;
  if ((s || c || l) && (o = `translate3d(${s}px, ${c}px, ${l}px) `), (t.x !== 1 || t.y !== 1) && (o += `scale(${1 / t.x}, ${1 / t.y}) `), r) {
    const { transformPerspective: h, rotate: p, rotateX: v, rotateY: x, skewX: g, skewY: T } = r;
    h && (o = `perspective(${h}px) ${o}`), p && (o += `rotate(${p}deg) `), v && (o += `rotateX(${v}deg) `), x && (o += `rotateY(${x}deg) `), g && (o += `skewX(${g}deg) `), T && (o += `skewY(${T}deg) `);
  }
  const u = e.x.scale * t.x, f = e.y.scale * t.y;
  return (u !== 1 || f !== 1) && (o += `scale(${u}, ${f})`), o || "none";
}
const mO = (e, t) => e.depth - t.depth;
class gO {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(t) {
    Fu(this.children, t), this.isDirty = !0;
  }
  remove(t) {
    Bu(this.children, t), this.isDirty = !0;
  }
  forEach(t) {
    this.isDirty && this.children.sort(mO), this.isDirty = !1, this.children.forEach(t);
  }
}
function qs(e) {
  const t = Rt(e) ? e.get() : e;
  return aM(t) ? t.toValue() : t;
}
function vO(e, t) {
  const r = kn.now(), o = ({ timestamp: s }) => {
    const c = s - r;
    c >= t && (Ar(o), e(c - t));
  };
  return ze.read(o, !0), () => Ar(o);
}
function yO(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function xO(e, t, r) {
  const o = Rt(e) ? e : Do(e);
  return o.start(Vu("", o, t, r)), o.animation;
}
const Xr = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0
}, So = typeof window < "u" && window.MotionDebug !== void 0, yc = ["", "X", "Y", "Z"], wO = { visibility: "hidden" }, om = 1e3;
let bO = 0;
function xc(e, t, r, o) {
  const { latestValues: s } = t;
  s[e] && (r[e] = s[e], t.setStaticValue(e, 0), o && (o[e] = 0));
}
function Ey(e) {
  if (e.hasCheckedOptimisedAppear = !0, e.root === e)
    return;
  const { visualElement: t } = e.options;
  if (!t)
    return;
  const r = iy(t);
  if (window.MotionHasOptimisedAnimation(r, "transform")) {
    const { layout: s, layoutId: c } = e.options;
    window.MotionCancelOptimisedAnimation(r, "transform", ze, !(s || c));
  }
  const { parent: o } = e;
  o && !o.hasCheckedOptimisedAppear && Ey(o);
}
function Ay({ attachResizeListener: e, defaultParent: t, measureScroll: r, checkIsScrollRoot: o, resetTransform: s }) {
  return class {
    constructor(l = {}, u = t == null ? void 0 : t()) {
      this.id = bO++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, So && (Xr.totalNodes = Xr.resolvedTargetDeltas = Xr.recalculatedProjection = 0), this.nodes.forEach(TO), this.nodes.forEach(RO), this.nodes.forEach(NO), this.nodes.forEach(_O), So && window.MotionDebug.record(Xr);
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = l, this.root = u ? u.root || u : this, this.path = u ? [...u.path, u] : [], this.parent = u, this.depth = u ? u.depth + 1 : 0;
      for (let f = 0; f < this.path.length; f++)
        this.path[f].shouldResetTransform = !0;
      this.root === this && (this.nodes = new gO());
    }
    addEventListener(l, u) {
      return this.eventHandlers.has(l) || this.eventHandlers.set(l, new Wu()), this.eventHandlers.get(l).add(u);
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
      this.isSVG = yO(l), this.instance = l;
      const { layoutId: f, layout: h, visualElement: p } = this.options;
      if (p && !p.current && p.mount(l), this.root.nodes.add(this), this.parent && this.parent.children.add(this), u && (h || f) && (this.isLayoutDirty = !0), e) {
        let v;
        const x = () => this.root.updateBlockedByResize = !1;
        e(l, () => {
          this.root.updateBlockedByResize = !0, v && v(), v = vO(x, 250), Ys.hasAnimatedSinceResize && (Ys.hasAnimatedSinceResize = !1, this.nodes.forEach(am));
        });
      }
      f && this.root.registerSharedNode(f, this), this.options.animate !== !1 && p && (f || h) && this.addEventListener("didUpdate", ({ delta: v, hasLayoutChanged: x, hasRelativeTargetChanged: g, layout: T }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const S = this.options.transition || p.getDefaultTransition() || LO, { onLayoutAnimationStart: _, onLayoutAnimationComplete: E } = p.getProps(), A = !this.targetLayout || !Py(this.targetLayout, T) || g, M = !x && g;
        if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || M || x && (A || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(v, M);
          const I = {
            ...Tu(S, "layout"),
            onPlay: _,
            onComplete: E
          };
          (p.shouldReduceMotion || this.options.layoutRoot) && (I.delay = 0, I.type = !1), this.startAnimation(I);
        } else
          x || am(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = T;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const l = this.getStack();
      l && l.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, Ar(this.updateProjection);
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
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(MO), this.animationId++);
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
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && Ey(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
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
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(sm);
        return;
      }
      this.isUpdating || this.nodes.forEach(EO), this.isUpdating = !1, this.nodes.forEach(AO), this.nodes.forEach(SO), this.nodes.forEach(CO), this.clearAllSnapshots();
      const u = kn.now();
      bt.delta = Nr(0, 1e3 / 60, u - bt.timestamp), bt.timestamp = u, bt.isProcessing = !0, uc.update.process(bt), uc.preRender.process(bt), uc.render.process(bt), bt.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, Hu.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(PO), this.sharedNodes.forEach(OO);
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
      const l = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, u = this.projectionDelta && !_y(this.projectionDelta), f = this.getTransformTemplate(), h = f ? f(this.latestValues, "") : void 0, p = h !== this.prevTransformTemplateValue;
      l && (u || qr(this.latestValues) || p) && (s(this.instance, h), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(l = !0) {
      const u = this.measurePageBox();
      let f = this.removeElementScroll(u);
      return l && (f = this.removeTransform(f)), jO(f), {
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
      if (!(((l = this.scroll) === null || l === void 0 ? void 0 : l.wasRoot) || this.path.some(kO))) {
        const { scroll: p } = this.root;
        p && (Ri(f.x, p.offset.x), Ri(f.y, p.offset.y));
      }
      return f;
    }
    removeElementScroll(l) {
      var u;
      const f = ut();
      if (hn(f, l), !((u = this.scroll) === null || u === void 0) && u.wasRoot)
        return f;
      for (let h = 0; h < this.path.length; h++) {
        const p = this.path[h], { scroll: v, options: x } = p;
        p !== this.root && v && x.layoutScroll && (v.wasRoot && hn(f, l), Ri(f.x, v.offset.x), Ri(f.y, v.offset.y));
      }
      return f;
    }
    applyTransform(l, u = !1) {
      const f = ut();
      hn(f, l);
      for (let h = 0; h < this.path.length; h++) {
        const p = this.path[h];
        !u && p.options.layoutScroll && p.scroll && p !== p.root && Ni(f, {
          x: -p.scroll.offset.x,
          y: -p.scroll.offset.y
        }), qr(p.latestValues) && Ni(f, p.latestValues);
      }
      return qr(this.latestValues) && Ni(f, this.latestValues), f;
    }
    removeTransform(l) {
      const u = ut();
      hn(u, l);
      for (let f = 0; f < this.path.length; f++) {
        const h = this.path[f];
        if (!h.instance || !qr(h.latestValues))
          continue;
        Xc(h.latestValues) && h.updateSnapshot();
        const p = ut(), v = h.measurePageBox();
        hn(p, v), Qp(u, h.latestValues, h.snapshot ? h.snapshot.layoutBox : void 0, p);
      }
      return qr(this.latestValues) && Qp(u, this.latestValues), u;
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
          const g = this.getClosestProjectingParent();
          g && g.layout && this.animationProgress !== 1 ? (this.relativeParent = g, this.forceRelativeParentToResolveTarget(), this.relativeTarget = ut(), this.relativeTargetOrigin = ut(), _o(this.relativeTargetOrigin, this.layout.layoutBox, g.layout.layoutBox), hn(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (this.target || (this.target = ut(), this.targetWithTransforms = ut()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), VM(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : hn(this.target, this.layout.layoutBox), vy(this.target, this.targetDelta)) : hn(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
            this.attemptToResolveRelativeTarget = !1;
            const g = this.getClosestProjectingParent();
            g && !!g.resumingFrom == !!this.resumingFrom && !g.options.layoutScroll && g.target && this.animationProgress !== 1 ? (this.relativeParent = g, this.forceRelativeParentToResolveTarget(), this.relativeTarget = ut(), this.relativeTargetOrigin = ut(), _o(this.relativeTargetOrigin, this.target, g.target), hn(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
          }
          So && Xr.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || Xc(this.parent.latestValues) || gy(this.parent.latestValues)))
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
      hn(this.layoutCorrected, this.layout.layoutBox);
      const x = this.treeScale.x, g = this.treeScale.y;
      KM(this.layoutCorrected, this.treeScale, this.path, f), u.layout && !u.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (u.target = u.layout.layoutBox, u.targetWithTransforms = ut());
      const { target: T } = u;
      if (!T) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Xp(this.prevProjectionDelta.x, this.projectionDelta.x), Xp(this.prevProjectionDelta.y, this.projectionDelta.y)), To(this.projectionDelta, this.layoutCorrected, T, this.latestValues), (this.treeScale.x !== x || this.treeScale.y !== g || !im(this.projectionDelta.x, this.prevProjectionDelta.x) || !im(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", T)), So && Xr.recalculatedProjection++;
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
      this.prevProjectionDelta = Ai(), this.projectionDelta = Ai(), this.projectionDeltaWithTransform = Ai();
    }
    setAnimationOrigin(l, u = !1) {
      const f = this.snapshot, h = f ? f.latestValues : {}, p = { ...this.latestValues }, v = Ai();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !u;
      const x = ut(), g = f ? f.source : void 0, T = this.layout ? this.layout.source : void 0, S = g !== T, _ = this.getStack(), E = !_ || _.members.length <= 1, A = !!(S && !E && this.options.crossfade === !0 && !this.path.some(IO));
      this.animationProgress = 0;
      let M;
      this.mixTargetDelta = (I) => {
        const j = I / 1e3;
        lm(v.x, l.x, j), lm(v.y, l.y, j), this.setTargetDelta(v), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (_o(x, this.layout.layoutBox, this.relativeParent.layout.layoutBox), DO(this.relativeTarget, this.relativeTargetOrigin, x, j), M && dO(this.relativeTarget, M) && (this.isProjectionDirty = !1), M || (M = ut()), hn(M, this.relativeTarget)), S && (this.animationValues = p, sO(p, h, this.latestValues, j, A, E)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = j;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(l) {
      this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (Ar(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = ze.update(() => {
        Ys.hasAnimatedSinceResize = !0, this.currentAnimation = xO(0, om, {
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
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(om), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const l = this.getLead();
      let { targetWithTransforms: u, target: f, layout: h, latestValues: p } = l;
      if (!(!u || !f || !h)) {
        if (this !== l && this.layout && h && Ry(this.options.animationType, this.layout.layoutBox, h.layoutBox)) {
          f = this.target || ut();
          const v = tn(this.layout.layoutBox.x);
          f.x.min = l.target.x.min, f.x.max = f.x.min + v;
          const x = tn(this.layout.layoutBox.y);
          f.y.min = l.target.y.min, f.y.max = f.y.min + x;
        }
        hn(u, f), Ni(u, p), To(this.projectionDeltaWithTransform, this.layoutCorrected, u, p);
      }
    }
    registerSharedNode(l, u) {
      this.sharedNodes.has(l) || this.sharedNodes.set(l, new hO()), this.sharedNodes.get(l).add(u);
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
      f.z && xc("z", l, h, this.animationValues);
      for (let p = 0; p < yc.length; p++)
        xc(`rotate${yc[p]}`, l, h, this.animationValues), xc(`skew${yc[p]}`, l, h, this.animationValues);
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
        return wO;
      const h = {
        visibility: ""
      }, p = this.getTransformTemplate();
      if (this.needsReset)
        return this.needsReset = !1, h.opacity = "", h.pointerEvents = qs(l == null ? void 0 : l.pointerEvents) || "", h.transform = p ? p(this.latestValues, "") : "none", h;
      const v = this.getLead();
      if (!this.projectionDelta || !this.layout || !v.target) {
        const S = {};
        return this.options.layoutId && (S.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, S.pointerEvents = qs(l == null ? void 0 : l.pointerEvents) || ""), this.hasProjected && !qr(this.latestValues) && (S.transform = p ? p({}, "") : "none", this.hasProjected = !1), S;
      }
      const x = v.animationValues || v.latestValues;
      this.applyTransformsToTarget(), h.transform = pO(this.projectionDeltaWithTransform, this.treeScale, x), p && (h.transform = p(x, h.transform));
      const { x: g, y: T } = this.projectionDelta;
      h.transformOrigin = `${g.origin * 100}% ${T.origin * 100}% 0`, v.animationValues ? h.opacity = v === this ? (f = (u = x.opacity) !== null && u !== void 0 ? u : this.latestValues.opacity) !== null && f !== void 0 ? f : 1 : this.preserveOpacity ? this.latestValues.opacity : x.opacityExit : h.opacity = v === this ? x.opacity !== void 0 ? x.opacity : "" : x.opacityExit !== void 0 ? x.opacityExit : 0;
      for (const S in fa) {
        if (x[S] === void 0)
          continue;
        const { correct: _, applyTo: E } = fa[S], A = h.transform === "none" ? x[S] : _(x[S], v);
        if (E) {
          const M = E.length;
          for (let I = 0; I < M; I++)
            h[E[I]] = A;
        } else
          h[S] = A;
      }
      return this.options.layoutId && (h.pointerEvents = v === this ? qs(l == null ? void 0 : l.pointerEvents) || "" : "none"), h;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((l) => {
        var u;
        return (u = l.currentAnimation) === null || u === void 0 ? void 0 : u.stop();
      }), this.root.nodes.forEach(sm), this.root.sharedNodes.clear();
    }
  };
}
function SO(e) {
  e.updateLayout();
}
function CO(e) {
  var t;
  const r = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && r && e.hasListeners("didUpdate")) {
    const { layoutBox: o, measuredBox: s } = e.layout, { animationType: c } = e.options, l = r.source !== e.layout.source;
    c === "size" ? pn((v) => {
      const x = l ? r.measuredBox[v] : r.layoutBox[v], g = tn(x);
      x.min = o[v].min, x.max = x.min + g;
    }) : Ry(c, r.layoutBox, o) && pn((v) => {
      const x = l ? r.measuredBox[v] : r.layoutBox[v], g = tn(o[v]);
      x.max = x.min + g, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[v].max = e.relativeTarget[v].min + g);
    });
    const u = Ai();
    To(u, o, r.layoutBox);
    const f = Ai();
    l ? To(f, e.applyTransform(s, !0), r.measuredBox) : To(f, o, r.layoutBox);
    const h = !_y(u);
    let p = !1;
    if (!e.resumeFrom) {
      const v = e.getClosestProjectingParent();
      if (v && !v.resumeFrom) {
        const { snapshot: x, layout: g } = v;
        if (x && g) {
          const T = ut();
          _o(T, r.layoutBox, x.layoutBox);
          const S = ut();
          _o(S, o, g.layoutBox), Py(T, S) || (p = !0), v.options.layoutRoot && (e.relativeTarget = S, e.relativeTargetOrigin = T, e.relativeParent = v);
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
function TO(e) {
  So && Xr.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function _O(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function PO(e) {
  e.clearSnapshot();
}
function sm(e) {
  e.clearMeasurements();
}
function EO(e) {
  e.isLayoutDirty = !1;
}
function AO(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function am(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function RO(e) {
  e.resolveTargetDelta();
}
function NO(e) {
  e.calcProjection();
}
function MO(e) {
  e.resetSkewAndRotation();
}
function OO(e) {
  e.removeLeadSnapshot();
}
function lm(e, t, r) {
  e.translate = nt(t.translate, 0, r), e.scale = nt(t.scale, 1, r), e.origin = t.origin, e.originPoint = t.originPoint;
}
function cm(e, t, r, o) {
  e.min = nt(t.min, r.min, o), e.max = nt(t.max, r.max, o);
}
function DO(e, t, r, o) {
  cm(e.x, t.x, r.x, o), cm(e.y, t.y, r.y, o);
}
function IO(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const LO = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, um = (e) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e), fm = um("applewebkit/") && !um("chrome/") ? Math.round : St;
function dm(e) {
  e.min = fm(e.min), e.max = fm(e.max);
}
function jO(e) {
  dm(e.x), dm(e.y);
}
function Ry(e, t, r) {
  return e === "position" || e === "preserve-aspect" && !kM(rm(t), rm(r), 0.2);
}
function kO(e) {
  var t;
  return e !== e.root && ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot);
}
const VO = Ay({
  attachResizeListener: (e, t) => Xn(e, "resize", t),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), wc = {
  current: void 0
}, Ny = Ay({
  measureScroll: (e) => ({
    x: e.scrollLeft,
    y: e.scrollTop
  }),
  defaultParent: () => {
    if (!wc.current) {
      const e = new VO({});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), wc.current = e;
    }
    return wc.current;
  },
  resetTransform: (e, t) => {
    e.style.transform = t !== void 0 ? t : "none";
  },
  checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), FO = {
  pan: {
    Feature: QM
  },
  drag: {
    Feature: JM,
    ProjectionNode: Ny,
    MeasureLayout: Sy
  }
};
function hm(e, t) {
  const r = t ? "pointerenter" : "pointerleave", o = t ? "onHoverStart" : "onHoverEnd", s = (c, l) => {
    if (c.pointerType === "touch" || dy())
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
class BO extends Ir {
  mount() {
    this.unmount = Qn(hm(this.node, !0), hm(this.node, !1));
  }
  unmount() {
  }
}
class WO extends Ir {
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
const My = (e, t) => t ? e === t ? !0 : My(e, t.parentElement) : !1;
function bc(e, t) {
  if (!t)
    return;
  const r = new PointerEvent("pointer" + e);
  t(r, Ia(r));
}
class $O extends Ir {
  constructor() {
    super(...arguments), this.removeStartListeners = St, this.removeEndListeners = St, this.removeAccessibleListeners = St, this.startPointerPress = (t, r) => {
      if (this.isPressing)
        return;
      this.removeEndListeners();
      const o = this.node.getProps(), c = er(window, "pointerup", (u, f) => {
        if (!this.checkPressEnd())
          return;
        const { onTap: h, onTapCancel: p, globalTapTarget: v } = this.node.getProps(), x = !v && !My(this.node.current, u.target) ? p : h;
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
          u.key !== "Enter" || !this.checkPressEnd() || bc("up", (f, h) => {
            const { onTap: p } = this.node.getProps();
            p && ze.postRender(() => p(f, h));
          });
        };
        this.removeEndListeners(), this.removeEndListeners = Xn(this.node.current, "keyup", l), bc("down", (u, f) => {
          this.startPress(u, f);
        });
      }, r = Xn(this.node.current, "keydown", t), o = () => {
        this.isPressing && bc("cancel", (c, l) => this.cancelPress(c, l));
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
    return this.removeEndListeners(), this.isPressing = !1, this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !dy();
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
const Jc = /* @__PURE__ */ new WeakMap(), Sc = /* @__PURE__ */ new WeakMap(), UO = (e) => {
  const t = Jc.get(e.target);
  t && t(e);
}, HO = (e) => {
  e.forEach(UO);
};
function zO({ root: e, ...t }) {
  const r = e || document;
  Sc.has(r) || Sc.set(r, {});
  const o = Sc.get(r), s = JSON.stringify(t);
  return o[s] || (o[s] = new IntersectionObserver(HO, { root: e, ...t })), o[s];
}
function GO(e, t, r) {
  const o = zO(t);
  return Jc.set(e, r), o.observe(e), () => {
    Jc.delete(e), o.unobserve(e);
  };
}
const KO = {
  some: 0,
  all: 1
};
class YO extends Ir {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(), { root: r, margin: o, amount: s = "some", once: c } = t, l = {
      root: r ? r.current : void 0,
      rootMargin: o,
      threshold: typeof s == "number" ? s : KO[s]
    }, u = (f) => {
      const { isIntersecting: h } = f;
      if (this.isInView === h || (this.isInView = h, c && !h && this.hasEnteredView))
        return;
      h && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", h);
      const { onViewportEnter: p, onViewportLeave: v } = this.node.getProps(), x = h ? p : v;
      x && x(f);
    };
    return GO(this.node.current, l, u);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: t, prevProps: r } = this.node;
    ["amount", "margin", "root"].some(qO(t, r)) && this.startObserver();
  }
  unmount() {
  }
}
function qO({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (r) => e[r] !== t[r];
}
const XO = {
  inView: {
    Feature: YO
  },
  tap: {
    Feature: $O
  },
  focus: {
    Feature: WO
  },
  hover: {
    Feature: BO
  }
}, ZO = {
  layout: {
    ProjectionNode: Ny,
    MeasureLayout: Sy
  }
}, Oy = Fi({
  transformPagePoint: (e) => e,
  isStatic: !1,
  reducedMotion: "never"
}), La = Fi({}), zu = typeof window < "u", JO = zu ? Sm : Io, Dy = Fi({ strict: !1 });
function QO(e, t, r, o, s) {
  var c, l;
  const { visualElement: u } = Ht(La), f = Ht(Dy), h = Ht(Uu), p = Ht(Oy).reducedMotion, v = Us();
  o = o || f.renderer, !v.current && o && (v.current = o(e, {
    visualState: t,
    parent: u,
    props: r,
    presenceContext: h,
    blockInitialAnimation: h ? h.initial === !1 : !1,
    reducedMotionConfig: p
  }));
  const x = v.current, g = Ht(by);
  x && !x.projection && s && (x.type === "html" || x.type === "svg") && e2(v.current, r, s, g);
  const T = Us(!1);
  ET(() => {
    x && T.current && x.update(r, h);
  });
  const S = r[ry], _ = Us(!!S && !(!((c = window.MotionHandoffIsComplete) === null || c === void 0) && c.call(window, S)) && ((l = window.MotionHasOptimisedAnimation) === null || l === void 0 ? void 0 : l.call(window, S)));
  return JO(() => {
    x && (T.current = !0, window.MotionIsMounted = !0, x.updateFeatures(), Hu.render(x.render), _.current && x.animationState && x.animationState.animateChanges());
  }), Io(() => {
    x && (!_.current && x.animationState && x.animationState.animateChanges(), _.current && (queueMicrotask(() => {
      var E;
      (E = window.MotionHandoffMarkAsComplete) === null || E === void 0 || E.call(window, S);
    }), _.current = !1));
  }), x;
}
function e2(e, t, r, o) {
  const { layoutId: s, layout: c, drag: l, dragConstraints: u, layoutScroll: f, layoutRoot: h } = t;
  e.projection = new r(e.latestValues, t["data-framer-portal-id"] ? void 0 : Iy(e.parent)), e.projection.setOptions({
    layoutId: s,
    layout: c,
    alwaysMeasureLayout: !!l || u && Ei(u),
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
function Iy(e) {
  if (e)
    return e.options.allowProjection !== !1 ? e.projection : Iy(e.parent);
}
function t2(e, t, r) {
  return Cm(
    (o) => {
      o && e.mount && e.mount(o), t && (o ? t.mount(o) : t.unmount()), r && (typeof r == "function" ? r(o) : Ei(r) && (r.current = o));
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [t]
  );
}
function ja(e) {
  return Ma(e.animate) || Cu.some((t) => No(e[t]));
}
function Ly(e) {
  return !!(ja(e) || e.variants);
}
function n2(e, t) {
  if (ja(e)) {
    const { initial: r, animate: o } = e;
    return {
      initial: r === !1 || No(r) ? r : void 0,
      animate: No(o) ? o : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function r2(e) {
  const { initial: t, animate: r } = n2(e, Ht(La));
  return Lo(() => ({ initial: t, animate: r }), [pm(t), pm(r)]);
}
function pm(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const mm = {
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
}, Vi = {};
for (const e in mm)
  Vi[e] = {
    isEnabled: (t) => mm[e].some((r) => !!t[r])
  };
function i2(e) {
  for (const t in e)
    Vi[t] = {
      ...Vi[t],
      ...e[t]
    };
}
const o2 = Symbol.for("motionComponentSymbol");
function s2({ preloadedFeatures: e, createVisualElement: t, useRender: r, useVisualState: o, Component: s }) {
  e && i2(e);
  function c(u, f) {
    let h;
    const p = {
      ...Ht(Oy),
      ...u,
      layoutId: a2(u)
    }, { isStatic: v } = p, x = r2(u), g = o(u, v);
    if (!v && zu) {
      l2(p, e);
      const T = c2(p);
      h = T.MeasureLayout, x.visualElement = QO(s, g, p, t, T.ProjectionNode);
    }
    return y.jsxs(La.Provider, { value: x, children: [h && x.visualElement ? y.jsx(h, { visualElement: x.visualElement, ...p }) : null, r(s, u, t2(g, x.visualElement, f), g, v, x.visualElement)] });
  }
  const l = pa(c);
  return l[o2] = s, l;
}
function a2({ layoutId: e }) {
  const t = Ht(wy).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function l2(e, t) {
  const r = Ht(Dy).strict;
  if (process.env.NODE_ENV !== "production" && t && r) {
    const o = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
    e.ignoreStrict ? Ki(!1, o) : Rr(!1, o);
  }
}
function c2(e) {
  const { drag: t, layout: r } = Vi;
  if (!t && !r)
    return {};
  const o = { ...t, ...r };
  return {
    MeasureLayout: t != null && t.isEnabled(e) || r != null && r.isEnabled(e) ? o.MeasureLayout : void 0,
    ProjectionNode: o.ProjectionNode
  };
}
const u2 = [
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
function Gu(e) {
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
      !!(u2.indexOf(e) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(e))
    )
  );
}
function jy(e, { style: t, vars: r }, o, s) {
  Object.assign(e.style, t, s && s.getProjectionStyles(o));
  for (const c in r)
    e.style.setProperty(c, r[c]);
}
const ky = /* @__PURE__ */ new Set([
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
function Vy(e, t, r, o) {
  jy(e, t, void 0, o);
  for (const s in t.attrs)
    e.setAttribute(ky.has(s) ? s : $u(s), t.attrs[s]);
}
function Fy(e, { layout: t, layoutId: r }) {
  return ii.has(e) || e.startsWith("origin") || (t || r !== void 0) && (!!fa[e] || e === "opacity");
}
function Ku(e, t, r) {
  var o;
  const { style: s } = e, c = {};
  for (const l in s)
    (Rt(s[l]) || t.style && Rt(t.style[l]) || Fy(l, e) || ((o = r == null ? void 0 : r.getValue(l)) === null || o === void 0 ? void 0 : o.liveStyle) !== void 0) && (c[l] = s[l]);
  return c;
}
function By(e, t, r) {
  const o = Ku(e, t, r);
  for (const s in e)
    if (Rt(e[s]) || Rt(t[s])) {
      const c = Bo.indexOf(s) !== -1 ? "attr" + s.charAt(0).toUpperCase() + s.substring(1) : s;
      o[c] = e[s];
    }
  return o;
}
function f2(e) {
  const t = Us(null);
  return t.current === null && (t.current = e()), t.current;
}
function d2({ scrapeMotionValuesFromProps: e, createRenderState: t, onMount: r }, o, s, c) {
  const l = {
    latestValues: h2(o, s, c, e),
    renderState: t()
  };
  return r && (l.mount = (u) => r(o, u, l)), l;
}
const Wy = (e) => (t, r) => {
  const o = Ht(La), s = Ht(Uu), c = () => d2(e, t, o, s);
  return r ? c() : f2(c);
};
function h2(e, t, r, o) {
  const s = {}, c = o(e, {});
  for (const x in c)
    s[x] = qs(c[x]);
  let { initial: l, animate: u } = e;
  const f = ja(e), h = Ly(e);
  t && h && !f && e.inherit !== !1 && (l === void 0 && (l = t.initial), u === void 0 && (u = t.animate));
  let p = r ? r.initial === !1 : !1;
  p = p || l === !1;
  const v = p ? u : l;
  if (v && typeof v != "boolean" && !Ma(v)) {
    const x = Array.isArray(v) ? v : [v];
    for (let g = 0; g < x.length; g++) {
      const T = bu(e, x[g]);
      if (T) {
        const { transitionEnd: S, transition: _, ...E } = T;
        for (const A in E) {
          let M = E[A];
          if (Array.isArray(M)) {
            const I = p ? M.length - 1 : 0;
            M = M[I];
          }
          M !== null && (s[A] = M);
        }
        for (const A in S)
          s[A] = S[A];
      }
    }
  }
  return s;
}
const Yu = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
}), $y = () => ({
  ...Yu(),
  attrs: {}
}), Uy = (e, t) => t && typeof e == "number" ? t.transform(e) : e, p2 = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, m2 = Bo.length;
function g2(e, t, r) {
  let o = "", s = !0;
  for (let c = 0; c < m2; c++) {
    const l = Bo[c], u = e[l];
    if (u === void 0)
      continue;
    let f = !0;
    if (typeof u == "number" ? f = u === (l.startsWith("scale") ? 1 : 0) : f = parseFloat(u) === 0, !f || r) {
      const h = Uy(u, Mu[l]);
      if (!f) {
        s = !1;
        const p = p2[l] || l;
        o += `${p}(${h}) `;
      }
      r && (t[l] = h);
    }
  }
  return o = o.trim(), r ? o = r(t, s ? "" : o) : s && (o = "none"), o;
}
function qu(e, t, r) {
  const { style: o, vars: s, transformOrigin: c } = e;
  let l = !1, u = !1;
  for (const f in t) {
    const h = t[f];
    if (ii.has(f)) {
      l = !0;
      continue;
    } else if (Iv(f)) {
      s[f] = h;
      continue;
    } else {
      const p = Uy(h, Mu[f]);
      f.startsWith("origin") ? (u = !0, c[f] = p) : o[f] = p;
    }
  }
  if (t.transform || (l || r ? o.transform = g2(t, e.transform, r) : o.transform && (o.transform = "none")), u) {
    const { originX: f = "50%", originY: h = "50%", originZ: p = 0 } = c;
    o.transformOrigin = `${f} ${h} ${p}`;
  }
}
function gm(e, t, r) {
  return typeof e == "string" ? e : ue.transform(t + r * e);
}
function v2(e, t, r) {
  const o = gm(t, e.x, e.width), s = gm(r, e.y, e.height);
  return `${o} ${s}`;
}
const y2 = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, x2 = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function w2(e, t, r = 1, o = 0, s = !0) {
  e.pathLength = 1;
  const c = s ? y2 : x2;
  e[c.offset] = ue.transform(-o);
  const l = ue.transform(t), u = ue.transform(r);
  e[c.array] = `${l} ${u}`;
}
function Xu(e, {
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
  if (qu(e, h, v), p) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  e.attrs = e.style, e.style = {};
  const { attrs: x, style: g, dimensions: T } = e;
  x.transform && (T && (g.transform = x.transform), delete x.transform), T && (s !== void 0 || c !== void 0 || g.transform) && (g.transformOrigin = v2(T, s !== void 0 ? s : 0.5, c !== void 0 ? c : 0.5)), t !== void 0 && (x.x = t), r !== void 0 && (x.y = r), o !== void 0 && (x.scale = o), l !== void 0 && w2(x, l, u, f, !1);
}
const Zu = (e) => typeof e == "string" && e.toLowerCase() === "svg", b2 = {
  useVisualState: Wy({
    scrapeMotionValuesFromProps: By,
    createRenderState: $y,
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
        Xu(r, o, Zu(t.tagName), e.transformTemplate), Vy(t, r);
      });
    }
  })
}, S2 = {
  useVisualState: Wy({
    scrapeMotionValuesFromProps: Ku,
    createRenderState: Yu
  })
};
function Hy(e, t, r) {
  for (const o in t)
    !Rt(t[o]) && !Fy(o, r) && (e[o] = t[o]);
}
function C2({ transformTemplate: e }, t) {
  return Lo(() => {
    const r = Yu();
    return qu(r, t, e), Object.assign({}, r.vars, r.style);
  }, [t]);
}
function T2(e, t) {
  const r = e.style || {}, o = {};
  return Hy(o, r, e), Object.assign(o, C2(e, t)), o;
}
function _2(e, t) {
  const r = {}, o = T2(e, t);
  return e.drag && e.dragListener !== !1 && (r.draggable = !1, o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none", o.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (r.tabIndex = 0), r.style = o, r;
}
const P2 = /* @__PURE__ */ new Set([
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
function da(e) {
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || P2.has(e);
}
let zy = (e) => !da(e);
function E2(e) {
  e && (zy = (t) => t.startsWith("on") ? !da(t) : e(t));
}
try {
  E2(require("@emotion/is-prop-valid").default);
} catch {
}
function A2(e, t, r) {
  const o = {};
  for (const s in e)
    s === "values" && typeof e.values == "object" || (zy(s) || r === !0 && da(s) || !t && !da(s) || // If trying to use native HTML drag events, forward drag listeners
    e.draggable && s.startsWith("onDrag")) && (o[s] = e[s]);
  return o;
}
function R2(e, t, r, o) {
  const s = Lo(() => {
    const c = $y();
    return Xu(c, t, Zu(o), e.transformTemplate), {
      ...c.attrs,
      style: { ...c.style }
    };
  }, [t]);
  if (e.style) {
    const c = {};
    Hy(c, e.style, e), s.style = { ...c, ...s.style };
  }
  return s;
}
function N2(e = !1) {
  return (r, o, s, { latestValues: c }, l) => {
    const f = (Gu(r) ? R2 : _2)(o, c, l, r), h = A2(o, typeof r == "string", e), p = r !== Tm ? { ...h, ...f, ref: s } : {}, { children: v } = o, x = Lo(() => Rt(v) ? v.get() : v, [v]);
    return Xs(r, {
      ...p,
      children: x
    });
  };
}
function M2(e, t) {
  return function(o, { forwardMotionProps: s } = { forwardMotionProps: !1 }) {
    const l = {
      ...Gu(o) ? b2 : S2,
      preloadedFeatures: e,
      useRender: N2(s),
      createVisualElement: t,
      Component: o
    };
    return s2(l);
  };
}
const Qc = { current: null }, Gy = { current: !1 };
function O2() {
  if (Gy.current = !0, !!zu)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"), t = () => Qc.current = e.matches;
      e.addListener(t), t();
    } else
      Qc.current = !1;
}
function D2(e, t, r) {
  for (const o in t) {
    const s = t[o], c = r[o];
    if (Rt(s))
      e.addValue(o, s), process.env.NODE_ENV === "development" && Na(s.version === "11.11.17", `Attempting to mix Motion versions ${s.version} with 11.11.17 may not work as expected.`);
    else if (Rt(c))
      e.addValue(o, Do(s, { owner: e }));
    else if (c !== s)
      if (e.hasValue(o)) {
        const l = e.getValue(o);
        l.liveStyle === !0 ? l.jump(s) : l.hasAnimated || l.set(s);
      } else {
        const l = e.getStaticValue(o);
        e.addValue(o, Do(l !== void 0 ? l : s, { owner: e }));
      }
  }
  for (const o in r)
    t[o] === void 0 && e.removeValue(o);
  return t;
}
const vm = /* @__PURE__ */ new WeakMap(), I2 = [...kv, At, Mr], L2 = (e) => I2.find(jv(e)), ym = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
class j2 {
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
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = Au, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const x = kn.now();
      this.renderScheduledAt < x && (this.renderScheduledAt = x, ze.render(this.render, !1, !0));
    };
    const { latestValues: f, renderState: h } = l;
    this.latestValues = f, this.baseTarget = { ...f }, this.initialValues = r.initial ? { ...f } : {}, this.renderState = h, this.parent = t, this.props = r, this.presenceContext = o, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = s, this.options = u, this.blockInitialAnimation = !!c, this.isControllingVariants = ja(r), this.isVariantNode = Ly(r), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
    const { willChange: p, ...v } = this.scrapeMotionValuesFromProps(r, {}, this);
    for (const x in v) {
      const g = v[x];
      f[x] !== void 0 && Rt(g) && g.set(f[x], !1);
    }
  }
  mount(t) {
    this.current = t, vm.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((r, o) => this.bindToMotionValue(o, r)), Gy.current || O2(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Qc.current, process.env.NODE_ENV !== "production" && Na(this.shouldReduceMotion !== !0, "You have Reduced Motion enabled on your device. Animations may not appear as expected."), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    vm.delete(this.current), this.projection && this.projection.unmount(), Ar(this.notifyUpdate), Ar(this.render), this.valueSubscriptions.forEach((t) => t()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
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
    const o = ii.has(t), s = r.on("change", (u) => {
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
    for (t in Vi) {
      const r = Vi[t];
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
    for (let o = 0; o < ym.length; o++) {
      const s = ym[o];
      this.propEventSubscriptions[s] && (this.propEventSubscriptions[s](), delete this.propEventSubscriptions[s]);
      const c = "on" + s, l = t[c];
      l && (this.propEventSubscriptions[s] = this.on(s, l));
    }
    this.prevMotionValues = D2(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
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
    return o === void 0 && r !== void 0 && (o = Do(r === null ? void 0 : r, { owner: this }), this.addValue(t, o)), o;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(t, r) {
    var o;
    let s = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : (o = this.getBaseTargetFromProps(this.props, t)) !== null && o !== void 0 ? o : this.readValueFromInstance(this.current, t, this.options);
    return s != null && (typeof s == "string" && (Ov(s) || Mv(s)) ? s = parseFloat(s) : !L2(s) && Mr.test(r) && (s = zv(t, r)), this.setBaseTarget(t, Rt(s) ? s.get() : s)), Rt(s) ? s.get() : s;
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
      const l = bu(this.props, o, (r = this.presenceContext) === null || r === void 0 ? void 0 : r.custom);
      l && (s = l[t]);
    }
    if (o && s !== void 0)
      return s;
    const c = this.getBaseTargetFromProps(this.props, t);
    return c !== void 0 && !Rt(c) ? c : this.initialValues[t] !== void 0 && s === void 0 ? void 0 : this.baseTarget[t];
  }
  on(t, r) {
    return this.events[t] || (this.events[t] = new Wu()), this.events[t].add(r);
  }
  notify(t, ...r) {
    this.events[t] && this.events[t].notify(...r);
  }
}
class Ky extends j2 {
  constructor() {
    super(...arguments), this.KeyframeResolver = Gv;
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
function k2(e) {
  return window.getComputedStyle(e);
}
class V2 extends Ky {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = jy;
  }
  readValueFromInstance(t, r) {
    if (ii.has(r)) {
      const o = Ou(r);
      return o && o.default || 0;
    } else {
      const o = k2(t), s = (Iv(r) ? o.getPropertyValue(r) : o[r]) || 0;
      return typeof s == "string" ? s.trim() : s;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: r }) {
    return yy(t, r);
  }
  build(t, r, o) {
    qu(t, r, o.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, r, o) {
    return Ku(t, r, o);
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    Rt(t) && (this.childSubscription = t.on("change", (r) => {
      this.current && (this.current.textContent = `${r}`);
    }));
  }
}
class F2 extends Ky {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = ut;
  }
  getBaseTargetFromProps(t, r) {
    return t[r];
  }
  readValueFromInstance(t, r) {
    if (ii.has(r)) {
      const o = Ou(r);
      return o && o.default || 0;
    }
    return r = ky.has(r) ? r : $u(r), t.getAttribute(r);
  }
  scrapeMotionValuesFromProps(t, r, o) {
    return By(t, r, o);
  }
  build(t, r, o) {
    Xu(t, r, this.isSVGTag, o.transformTemplate);
  }
  renderInstance(t, r, o, s) {
    Vy(t, r, o, s);
  }
  mount(t) {
    this.isSVGTag = Zu(t.tagName), super.mount(t);
  }
}
const B2 = (e, t) => Gu(e) ? new F2(t) : new V2(t, {
  allowProjection: e !== Tm
}), W2 = /* @__PURE__ */ M2({
  ...AM,
  ...XO,
  ...FO,
  ...ZO
}, B2), $2 = /* @__PURE__ */ xR(W2);
function KD({ deal: e }) {
  const [t, r] = Po([]), o = Lo(() => [...e.riskFactors].sort((u, f) => {
    const h = { high: 0, medium: 1, low: 2 };
    return h[u.level] - h[f.level];
  }), [e.riskFactors]), s = (u) => {
    switch (u) {
      case "high":
        return /* @__PURE__ */ y.jsx(_c, { className: "w-4 h-4" });
      case "medium":
        return /* @__PURE__ */ y.jsx(GT, { className: "w-4 h-4" });
      case "low":
        return /* @__PURE__ */ y.jsx(HT, { className: "w-4 h-4" });
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
  return /* @__PURE__ */ y.jsxs(Hi, { className: "shadow-lg w-full max-w-3xl mx-auto my-8", children: [
    /* @__PURE__ */ y.jsxs(zi, { children: [
      /* @__PURE__ */ y.jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ y.jsx(Fo, { className: "text-slate-800", children: "Risk Assessment" }) }),
      /* @__PURE__ */ y.jsx("p", { className: "text-sm text-slate-500", children: "Identify and assess potential obstacles in the deal process" })
    ] }),
    /* @__PURE__ */ y.jsx(Gi, { children: /* @__PURE__ */ y.jsx("div", { className: "space-y-6", children: o.map((u, f) => /* @__PURE__ */ y.jsxs("div", { className: `p-4 rounded-lg border ${c(u.level)}`, children: [
      /* @__PURE__ */ y.jsxs(
        "div",
        {
          className: "flex flex-col sm:flex-row sm:items-center sm:justify-between cursor-pointer space-y-2 sm:space-y-0",
          onClick: () => l(u.label),
          children: [
            /* @__PURE__ */ y.jsxs("div", { className: "flex items-center space-x-3", children: [
              s(u.level),
              /* @__PURE__ */ y.jsx("span", { className: "font-semibold text-sm sm:text-base", children: u.label })
            ] }),
            /* @__PURE__ */ y.jsxs("div", { className: "flex items-center justify-between sm:justify-end space-x-4", children: [
              /* @__PURE__ */ y.jsx(Sr, { children: /* @__PURE__ */ y.jsxs(Cr, { children: [
                /* @__PURE__ */ y.jsx(Tr, { asChild: !0, children: /* @__PURE__ */ y.jsxs("div", { className: "flex items-center space-x-1 text-xs sm:text-sm text-muted-foreground", children: [
                  /* @__PURE__ */ y.jsxs("span", { children: [
                    u.lostDealFrequency,
                    " deals lost"
                  ] }),
                  /* @__PURE__ */ y.jsx(Eo, { className: "w-3 h-3 text-muted-foreground" })
                ] }) }),
                /* @__PURE__ */ y.jsx(Zn, { className: "max-w-xs", children: /* @__PURE__ */ y.jsxs("p", { children: [
                  "This factor contributed to ",
                  u.lostDealFrequency,
                  " lost deals in the past. Addressing this early can help avoid the same outcome."
                ] }) })
              ] }) }),
              /* @__PURE__ */ y.jsx(
                ga,
                {
                  className: `w-4 h-4 transition-transform ${t.includes(u.label) ? "transform rotate-180" : ""}`
                }
              )
            ] })
          ]
        }
      ),
      t.includes(u.label) && /* @__PURE__ */ y.jsxs(
        $2.div,
        {
          initial: { opacity: 0, height: 0 },
          animate: { opacity: 1, height: "auto" },
          exit: { opacity: 0, height: 0 },
          transition: { duration: 0.3 },
          className: "mt-4 space-y-4",
          children: [
            /* @__PURE__ */ y.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ y.jsxs("div", { children: [
                /* @__PURE__ */ y.jsx("h4", { className: "font-semibold mb-2", children: "Details" }),
                /* @__PURE__ */ y.jsx("p", { className: "text-sm text-slate-600", children: u.details })
              ] }),
              /* @__PURE__ */ y.jsxs("div", { children: [
                /* @__PURE__ */ y.jsx("h4", { className: "font-semibold mb-2", children: "Impact" }),
                /* @__PURE__ */ y.jsx("p", { className: "text-sm text-slate-600", children: u.impact })
              ] })
            ] }),
            /* @__PURE__ */ y.jsxs("div", { children: [
              /* @__PURE__ */ y.jsx("h4", { className: "font-semibold mb-2", children: "Key Metric" }),
              /* @__PURE__ */ y.jsx("p", { className: "text-sm text-slate-600", children: u.metric })
            ] })
          ]
        }
      )
    ] }, f)) }) })
  ] });
}
var Ju = "Dialog", [Yy, YD] = nu(Ju), [U2, Cn] = Yy(Ju), qy = (e) => {
  const {
    __scopeDialog: t,
    children: r,
    open: o,
    defaultOpen: s,
    onOpenChange: c,
    modal: l = !0
  } = e, u = C.useRef(null), f = C.useRef(null), [h = !1, p] = na({
    prop: o,
    defaultProp: s,
    onChange: c
  });
  return /* @__PURE__ */ y.jsx(
    U2,
    {
      scope: t,
      triggerRef: u,
      contentRef: f,
      contentId: Jr(),
      titleId: Jr(),
      descriptionId: Jr(),
      open: h,
      onOpenChange: p,
      onOpenToggle: C.useCallback(() => p((v) => !v), [p]),
      modal: l,
      children: r
    }
  );
};
qy.displayName = Ju;
var Xy = "DialogTrigger", H2 = C.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...o } = e, s = Cn(Xy, r), c = rt(t, s.triggerRef);
    return /* @__PURE__ */ y.jsx(
      He.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": s.open,
        "aria-controls": s.contentId,
        "data-state": tf(s.open),
        ...o,
        ref: c,
        onClick: Ve(e.onClick, s.onOpenToggle)
      }
    );
  }
);
H2.displayName = Xy;
var Qu = "DialogPortal", [z2, Zy] = Yy(Qu, {
  forceMount: void 0
}), Jy = (e) => {
  const { __scopeDialog: t, forceMount: r, children: o, container: s } = e, c = Cn(Qu, t);
  return /* @__PURE__ */ y.jsx(z2, { scope: t, forceMount: r, children: C.Children.map(o, (l) => /* @__PURE__ */ y.jsx(Vo, { present: r || c.open, children: /* @__PURE__ */ y.jsx(hu, { asChild: !0, container: s, children: l }) })) });
};
Jy.displayName = Qu;
var ha = "DialogOverlay", Qy = C.forwardRef(
  (e, t) => {
    const r = Zy(ha, e.__scopeDialog), { forceMount: o = r.forceMount, ...s } = e, c = Cn(ha, e.__scopeDialog);
    return c.modal ? /* @__PURE__ */ y.jsx(Vo, { present: o || c.open, children: /* @__PURE__ */ y.jsx(G2, { ...s, ref: t }) }) : null;
  }
);
Qy.displayName = ha;
var G2 = C.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...o } = e, s = Cn(ha, r);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ y.jsx(mu, { as: ei, allowPinchZoom: !0, shards: [s.contentRef], children: /* @__PURE__ */ y.jsx(
        He.div,
        {
          "data-state": tf(s.open),
          ...o,
          ref: t,
          style: { pointerEvents: "auto", ...o.style }
        }
      ) })
    );
  }
), ri = "DialogContent", e0 = C.forwardRef(
  (e, t) => {
    const r = Zy(ri, e.__scopeDialog), { forceMount: o = r.forceMount, ...s } = e, c = Cn(ri, e.__scopeDialog);
    return /* @__PURE__ */ y.jsx(Vo, { present: o || c.open, children: c.modal ? /* @__PURE__ */ y.jsx(K2, { ...s, ref: t }) : /* @__PURE__ */ y.jsx(Y2, { ...s, ref: t }) });
  }
);
e0.displayName = ri;
var K2 = C.forwardRef(
  (e, t) => {
    const r = Cn(ri, e.__scopeDialog), o = C.useRef(null), s = rt(t, r.contentRef, o);
    return C.useEffect(() => {
      const c = o.current;
      if (c)
        return pg(c);
    }, []), /* @__PURE__ */ y.jsx(
      t0,
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
), Y2 = C.forwardRef(
  (e, t) => {
    const r = Cn(ri, e.__scopeDialog), o = C.useRef(!1), s = C.useRef(!1);
    return /* @__PURE__ */ y.jsx(
      t0,
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
), t0 = C.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, trapFocus: o, onOpenAutoFocus: s, onCloseAutoFocus: c, ...l } = e, u = Cn(ri, r), f = C.useRef(null), h = rt(t, f);
    return $m(), /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
      /* @__PURE__ */ y.jsx(
        ru,
        {
          asChild: !0,
          loop: !0,
          trapped: o,
          onMountAutoFocus: s,
          onUnmountAutoFocus: c,
          children: /* @__PURE__ */ y.jsx(
            va,
            {
              role: "dialog",
              id: u.contentId,
              "aria-describedby": u.descriptionId,
              "aria-labelledby": u.titleId,
              "data-state": tf(u.open),
              ...l,
              ref: h,
              onDismiss: () => u.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
        /* @__PURE__ */ y.jsx(q2, { titleId: u.titleId }),
        /* @__PURE__ */ y.jsx(Z2, { contentRef: f, descriptionId: u.descriptionId })
      ] })
    ] });
  }
), ef = "DialogTitle", n0 = C.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...o } = e, s = Cn(ef, r);
    return /* @__PURE__ */ y.jsx(He.h2, { id: s.titleId, ...o, ref: t });
  }
);
n0.displayName = ef;
var r0 = "DialogDescription", i0 = C.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...o } = e, s = Cn(r0, r);
    return /* @__PURE__ */ y.jsx(He.p, { id: s.descriptionId, ...o, ref: t });
  }
);
i0.displayName = r0;
var o0 = "DialogClose", s0 = C.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...o } = e, s = Cn(o0, r);
    return /* @__PURE__ */ y.jsx(
      He.button,
      {
        type: "button",
        ...o,
        ref: t,
        onClick: Ve(e.onClick, () => s.onOpenChange(!1))
      }
    );
  }
);
s0.displayName = o0;
function tf(e) {
  return e ? "open" : "closed";
}
var a0 = "DialogTitleWarning", [qD, l0] = W_(a0, {
  contentName: ri,
  titleName: ef,
  docsSlug: "dialog"
}), q2 = ({ titleId: e }) => {
  const t = l0(a0), r = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return C.useEffect(() => {
    e && (document.getElementById(e) || console.error(r));
  }, [r, e]), null;
}, X2 = "DialogDescriptionWarning", Z2 = ({ contentRef: e, descriptionId: t }) => {
  const o = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${l0(X2).contentName}}.`;
  return C.useEffect(() => {
    var c;
    const s = (c = e.current) == null ? void 0 : c.getAttribute("aria-describedby");
    t && s && (document.getElementById(t) || console.warn(o));
  }, [o, e, t]), null;
}, J2 = qy, Q2 = Jy, c0 = Qy, u0 = e0, f0 = n0, d0 = i0, eD = s0;
const tD = J2, nD = Q2, h0 = C.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ y.jsx(
  c0,
  {
    ref: r,
    className: Ze(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
h0.displayName = c0.displayName;
const p0 = C.forwardRef(({ className: e, children: t, ...r }, o) => /* @__PURE__ */ y.jsxs(nD, { children: [
  /* @__PURE__ */ y.jsx(h0, {}),
  /* @__PURE__ */ y.jsxs(
    u0,
    {
      ref: o,
      className: Ze(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        e
      ),
      ...r,
      children: [
        t,
        /* @__PURE__ */ y.jsxs(eD, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ y.jsx(Im, { className: "h-4 w-4" }),
          /* @__PURE__ */ y.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
p0.displayName = u0.displayName;
const m0 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ y.jsx(
  "div",
  {
    className: Ze(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      e
    ),
    ...t
  }
);
m0.displayName = "DialogHeader";
const g0 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ y.jsx(
  "div",
  {
    className: Ze(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
g0.displayName = "DialogFooter";
const v0 = C.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ y.jsx(
  f0,
  {
    ref: r,
    className: Ze(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
v0.displayName = f0.displayName;
const rD = C.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ y.jsx(
  d0,
  {
    ref: r,
    className: Ze("text-sm text-muted-foreground", e),
    ...t
  }
));
rD.displayName = d0.displayName;
var iD = "Separator", xm = "horizontal", oD = ["horizontal", "vertical"], y0 = C.forwardRef((e, t) => {
  const { decorative: r, orientation: o = xm, ...s } = e, c = sD(o) ? o : xm, u = r ? { role: "none" } : { "aria-orientation": c === "vertical" ? c : void 0, role: "separator" };
  return /* @__PURE__ */ y.jsx(
    He.div,
    {
      "data-orientation": c,
      ...u,
      ...s,
      ref: t
    }
  );
});
y0.displayName = iD;
function sD(e) {
  return oD.includes(e);
}
var x0 = y0;
const w0 = C.forwardRef(
  ({ className: e, orientation: t = "horizontal", decorative: r = !0, ...o }, s) => /* @__PURE__ */ y.jsx(
    x0,
    {
      ref: s,
      decorative: r,
      orientation: t,
      className: Ze(
        "shrink-0 bg-border",
        t === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        e
      ),
      ...o
    }
  )
);
w0.displayName = x0.displayName;
const XD = ({ deal: e, onNavigate: t }) => {
  const [r, o] = Po([]), [s, c] = Po(!1), l = (h) => {
    o((p) => p.includes(h) ? p.filter((v) => v !== h) : [...p, h]);
  }, u = (h) => h.split("_").map((p) => p.charAt(0).toUpperCase() + p.slice(1)).join(" "), f = (h) => h === "implications" ? KT : M_(h);
  return /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
    /* @__PURE__ */ y.jsxs(Hi, { className: "shadow-lg w-full max-w-3xl mx-auto my-8", children: [
      /* @__PURE__ */ y.jsxs(zi, { className: "flex flex-row items-center justify-between", children: [
        /* @__PURE__ */ y.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ y.jsx(Fo, { className: "", children: "Deal Qualification" }),
          /* @__PURE__ */ y.jsx("p", { className: "text-sm text-muted-foreground", children: "Assess this deal's qualification strength according to MEDDPICC." })
        ] }),
        /* @__PURE__ */ y.jsx(Sr, { children: /* @__PURE__ */ y.jsxs(Cr, { children: [
          /* @__PURE__ */ y.jsx(Tr, { asChild: !0, children: /* @__PURE__ */ y.jsx(
            Dn,
            {
              variant: "outline",
              size: "sm",
              onClick: () => t == null ? void 0 : t("/deals/qualification-framework"),
              children: /* @__PURE__ */ y.jsx(Oh, { className: "w-3 h-3" })
            }
          ) }),
          /* @__PURE__ */ y.jsx(Zn, { children: /* @__PURE__ */ y.jsx("p", { children: "Configure qualification framework" }) })
        ] }) })
      ] }),
      /* @__PURE__ */ y.jsx(Gi, { children: /* @__PURE__ */ y.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ y.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
          /* @__PURE__ */ y.jsx("span", { className: "text-sm font-medium text-muted-foreground", children: "Criteria" }),
          /* @__PURE__ */ y.jsx("div", { className: "flex items-center space-x-1", children: /* @__PURE__ */ y.jsx(Sr, { children: /* @__PURE__ */ y.jsxs(Cr, { children: [
            /* @__PURE__ */ y.jsx(Tr, { asChild: !0, children: /* @__PURE__ */ y.jsxs("div", { className: "flex items-center space-x-1 text-sm text-muted-foreground cursor-help", children: [
              /* @__PURE__ */ y.jsx("span", { className: "text-sm font-medium", children: "Score" }),
              /* @__PURE__ */ y.jsx(Eo, { className: "w-3 h-3" })
            ] }) }),
            /* @__PURE__ */ y.jsx(Zn, { className: "w-80", children: /* @__PURE__ */ y.jsx("div", { className: "space-y-4", children: /* @__PURE__ */ y.jsxs("p", { className: "text-sm", children: [
              "This score (0-5) indicates your progress in addressing key sales qualification criteria. You can expand each category to view details.",
              " ",
              /* @__PURE__ */ y.jsx(
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
          const x = f(h), g = r.includes(h), T = e.dealBreakers[h];
          return /* @__PURE__ */ y.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ y.jsxs("div", { className: "flex items-center space-x-4", children: [
              /* @__PURE__ */ y.jsxs("div", { className: "w-48 flex items-center space-x-2", children: [
                x && /* @__PURE__ */ y.jsx(x, { className: "w-5 h-5" }),
                /* @__PURE__ */ y.jsx("span", { children: u(h) }),
                T && /* @__PURE__ */ y.jsx(_c, { className: "w-4 h-4 text-red-500" })
              ] }),
              /* @__PURE__ */ y.jsxs("div", { className: "flex-1 flex items-center space-x-4", children: [
                /* @__PURE__ */ y.jsx("div", { className: "flex-1", children: /* @__PURE__ */ y.jsx(wu, { value: p * 100 / 5 }) }),
                /* @__PURE__ */ y.jsx("div", { className: "w-12 text-center", children: /* @__PURE__ */ y.jsxs("span", { className: "text-sm font-medium", children: [
                  p,
                  "/5"
                ] }) }),
                /* @__PURE__ */ y.jsx(
                  Dn,
                  {
                    variant: "ghost",
                    size: "sm",
                    className: "p-0",
                    onClick: () => l(h),
                    children: /* @__PURE__ */ y.jsx(
                      ga,
                      {
                        className: `h-4 w-4 transform transition-transform duration-200 ${g ? "rotate-180" : ""}`
                      }
                    )
                  }
                )
              ] })
            ] }),
            g && /* @__PURE__ */ y.jsxs("div", { className: "ml-12 pl-4 border-l border-slate-200", children: [
              T && /* @__PURE__ */ y.jsxs("div", { className: "inline-flex items-center space-x-2 py-2 text-red-600 bg-red-50 px-3 rounded-md mb-2", children: [
                /* @__PURE__ */ y.jsx(_c, { className: "w-4 h-4 shrink-0" }),
                /* @__PURE__ */ y.jsx("span", { className: "text-sm font-medium", children: T })
              ] }),
              /* @__PURE__ */ y.jsx("div", { className: "space-y-2", children: [...e.qualificationDetails[h]].sort(
                (S, _) => _.completed === S.completed ? 0 : _.completed ? 1 : -1
              ).map((S, _) => /* @__PURE__ */ y.jsxs("div", { className: "flex items-center space-x-2", children: [
                S.completed ? /* @__PURE__ */ y.jsx(Om, { className: "h-4 w-4 text-green-500" }) : /* @__PURE__ */ y.jsx(Im, { className: "h-4 w-4 text-muted-foreground" }),
                /* @__PURE__ */ y.jsx(
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
    /* @__PURE__ */ y.jsx(tD, { open: s, onOpenChange: c, children: /* @__PURE__ */ y.jsxs(p0, { className: "sm:max-w-md", children: [
      /* @__PURE__ */ y.jsx(m0, { children: /* @__PURE__ */ y.jsx(v0, { children: "Qualification Score" }) }),
      /* @__PURE__ */ y.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ y.jsxs("div", { children: [
          /* @__PURE__ */ y.jsx("p", { className: "font-medium mb-2", children: "What the score means" }),
          /* @__PURE__ */ y.jsx("p", { className: "text-sm text-muted-foreground", children: "The score (0-5) reflects your progress in qualifying an opportunity across key criteria of the framework you have selected." })
        ] }),
        /* @__PURE__ */ y.jsxs("div", { children: [
          /* @__PURE__ */ y.jsx("p", { className: "font-medium mb-2", children: "Score interpretation" }),
          /* @__PURE__ */ y.jsxs("ul", { className: "text-sm text-muted-foreground space-y-1", children: [
            /* @__PURE__ */ y.jsxs("li", { children: [
              /* @__PURE__ */ y.jsx("strong", { children: "0" }),
              " = No progress"
            ] }),
            /* @__PURE__ */ y.jsxs("li", { children: [
              /* @__PURE__ */ y.jsx("strong", { children: "1-2" }),
              " = Limited progress"
            ] }),
            /* @__PURE__ */ y.jsxs("li", { children: [
              /* @__PURE__ */ y.jsx("strong", { children: "3" }),
              " = Moderate progress"
            ] }),
            /* @__PURE__ */ y.jsxs("li", { children: [
              /* @__PURE__ */ y.jsx("strong", { children: "4" }),
              " = Strong progress"
            ] }),
            /* @__PURE__ */ y.jsxs("li", { children: [
              /* @__PURE__ */ y.jsx("strong", { children: "5" }),
              " = Full progress"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ y.jsxs("div", { children: [
          /* @__PURE__ */ y.jsx("p", { className: "font-medium mb-2", children: "How the score is calculated" }),
          /* @__PURE__ */ y.jsx("p", { className: "text-sm text-muted-foreground", children: "Each component's score depends on how many weighted conditions are met. Meeting more conditions increases the score." })
        ] }),
        /* @__PURE__ */ y.jsxs("div", { children: [
          /* @__PURE__ */ y.jsx("p", { className: "font-medium mb-2", children: "What are deal breakers?" }),
          /* @__PURE__ */ y.jsx("p", { className: "text-sm text-muted-foreground", children: "Any flagged deal breakers are critical issues that may block the deal and need immediate attention." })
        ] }),
        /* @__PURE__ */ y.jsx(w0, {}),
        /* @__PURE__ */ y.jsxs("div", { children: [
          /* @__PURE__ */ y.jsx("p", { className: "font-medium mb-2", children: "Adjust the framework" }),
          /* @__PURE__ */ y.jsxs("p", { className: "text-sm text-muted-foreground", children: [
            "You can adjust the qualification questions and weights here",
            " ",
            /* @__PURE__ */ y.jsx(
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
      /* @__PURE__ */ y.jsxs(g0, { children: [
        /* @__PURE__ */ y.jsxs(Dn, { onClick: () => t == null ? void 0 : t("/deals/qualification-framework"), variant: "outline", children: [
          "Configure framework",
          /* @__PURE__ */ y.jsx(Oh, { className: "w-3 h-3 ml-1" })
        ] }),
        /* @__PURE__ */ y.jsx(Dn, { onClick: () => c(!1), children: "Close" })
      ] })
    ] }) })
  ] });
};
var aD = (e, t, r, o, s, c, l, u) => {
  let f = document.documentElement, h = ["light", "dark"];
  function p(g) {
    (Array.isArray(e) ? e : [e]).forEach((T) => {
      let S = T === "class", _ = S && c ? s.map((E) => c[E] || E) : s;
      S ? (f.classList.remove(..._), f.classList.add(g)) : f.setAttribute(T, g);
    }), v(g);
  }
  function v(g) {
    u && h.includes(g) && (f.style.colorScheme = g);
  }
  function x() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  if (o)
    p(o);
  else
    try {
      let g = localStorage.getItem(t) || r, T = l && g === "system" ? x() : g;
      p(T);
    } catch {
    }
}, lD = C.createContext(void 0), cD = { setTheme: (e) => {
}, themes: [] }, uD = () => {
  var e;
  return (e = C.useContext(lD)) != null ? e : cD;
};
C.memo(({ forcedTheme: e, storageKey: t, attribute: r, enableSystem: o, enableColorScheme: s, defaultTheme: c, value: l, themes: u, nonce: f, scriptProps: h }) => {
  let p = JSON.stringify([r, t, c, e, u, l, o, s]).slice(1, -1);
  return C.createElement("script", { ...h, suppressHydrationWarning: !0, nonce: typeof window > "u" ? f : "", dangerouslySetInnerHTML: { __html: `(${aD.toString()})(${p})` } });
});
var fD = (e) => {
  switch (e) {
    case "success":
      return pD;
    case "info":
      return gD;
    case "warning":
      return mD;
    case "error":
      return vD;
    default:
      return null;
  }
}, dD = Array(12).fill(0), hD = ({ visible: e, className: t }) => z.createElement("div", { className: ["sonner-loading-wrapper", t].filter(Boolean).join(" "), "data-visible": e }, z.createElement("div", { className: "sonner-spinner" }, dD.map((r, o) => z.createElement("div", { className: "sonner-loading-bar", key: `spinner-bar-${o}` })))), pD = z.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, z.createElement("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z", clipRule: "evenodd" })), mD = z.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", height: "20", width: "20" }, z.createElement("path", { fillRule: "evenodd", d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z", clipRule: "evenodd" })), gD = z.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, z.createElement("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z", clipRule: "evenodd" })), vD = z.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, z.createElement("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z", clipRule: "evenodd" })), yD = z.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }, z.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }), z.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" })), xD = () => {
  let [e, t] = z.useState(document.hidden);
  return z.useEffect(() => {
    let r = () => {
      t(document.hidden);
    };
    return document.addEventListener("visibilitychange", r), () => window.removeEventListener("visibilitychange", r);
  }, []), e;
}, eu = 1, wD = class {
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
      let { message: r, ...o } = e, s = typeof (e == null ? void 0 : e.id) == "number" || ((t = e.id) == null ? void 0 : t.length) > 0 ? e.id : eu++, c = this.toasts.find((u) => u.id === s), l = e.dismissible === void 0 ? !0 : e.dismissible;
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
        else if (SD(f) && !f.ok) {
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
      let r = (t == null ? void 0 : t.id) || eu++;
      return this.create({ jsx: e(r), id: r, ...t }), r;
    }, this.subscribers = [], this.toasts = [];
  }
}, Jt = new wD(), bD = (e, t) => {
  let r = (t == null ? void 0 : t.id) || eu++;
  return Jt.addToast({ title: e, ...t, id: r }), r;
}, SD = (e) => e && typeof e == "object" && "ok" in e && typeof e.ok == "boolean" && "status" in e && typeof e.status == "number", CD = bD, TD = () => Jt.toasts, ZD = Object.assign(CD, { success: Jt.success, info: Jt.info, warning: Jt.warning, error: Jt.error, custom: Jt.custom, message: Jt.message, promise: Jt.promise, dismiss: Jt.dismiss, loading: Jt.loading }, { getHistory: TD });
function _D(e, { insertAt: t } = {}) {
  if (typeof document > "u")
    return;
  let r = document.head || document.getElementsByTagName("head")[0], o = document.createElement("style");
  o.type = "text/css", t === "top" && r.firstChild ? r.insertBefore(o, r.firstChild) : r.appendChild(o), o.styleSheet ? o.styleSheet.cssText = e : o.appendChild(document.createTextNode(e));
}
_D(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:max(var(--offset),env(safe-area-inset-right))}:where([data-sonner-toaster][data-x-position="left"]){left:max(var(--offset),env(safe-area-inset-left))}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:max(var(--offset),env(safe-area-inset-top))}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:max(var(--offset),env(safe-area-inset-bottom))}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:0;right:0;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation:swipe-out .2s ease-out forwards}@keyframes swipe-out{0%{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount)));opacity:1}to{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount) + var(--lift) * -100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;--mobile-offset: 16px;right:var(--mobile-offset);left:var(--mobile-offset);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset)}[data-sonner-toaster][data-y-position=bottom]{bottom:20px}[data-sonner-toaster][data-y-position=top]{top:20px}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset);right:var(--mobile-offset);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function $s(e) {
  return e.label !== void 0;
}
var PD = 3, ED = "32px", wm = 4e3, AD = 356, RD = 14, ND = 20, MD = 200;
function OD(...e) {
  return e.filter(Boolean).join(" ");
}
var DD = (e) => {
  var t, r, o, s, c, l, u, f, h, p, v;
  let { invert: x, toast: g, unstyled: T, interacting: S, setHeights: _, visibleToasts: E, heights: A, index: M, toasts: I, expanded: j, removeToast: U, defaultRichColors: $, closeButton: H, style: te, cancelButtonStyle: re, actionButtonStyle: de, className: J = "", descriptionClassName: se = "", duration: ne, position: Te, gap: ie, loadingIcon: Z, expandByDefault: q, classNames: G, icons: pe, closeButtonAriaLabel: Ae = "Close toast", pauseWhenPageIsHidden: _e, cn: ge } = e, [Re, Fe] = z.useState(!1), [Je, X] = z.useState(!1), [we, je] = z.useState(!1), [Se, ve] = z.useState(!1), [Pe, st] = z.useState(!1), [Ke, ft] = z.useState(0), [Nt, at] = z.useState(0), nn = z.useRef(g.duration || ne || wm), kt = z.useRef(null), Mt = z.useRef(null), Ot = M === 0, mn = M + 1 <= E, dt = g.type, Tn = g.dismissible !== !1, _n = g.className || "", oi = g.descriptionClassName || "", Ct = z.useMemo(() => A.findIndex((oe) => oe.toastId === g.id) || 0, [A, g.id]), Pn = z.useMemo(() => {
    var oe;
    return (oe = g.closeButton) != null ? oe : H;
  }, [g.closeButton, H]);
  z.useMemo(() => g.duration || ne || wm, [g.duration, ne]);
  let En = z.useRef(0), zt = z.useRef(0), An = z.useRef(0), Rn = z.useRef(null), [Lr, jr] = Te.split("-"), ir = z.useMemo(() => A.reduce((oe, De, Be) => Be >= Ct ? oe : oe + De.height, 0), [A, Ct]), or = xD(), kr = g.invert || x, Vr = dt === "loading";
  zt.current = z.useMemo(() => Ct * ie + ir, [Ct, ir]), z.useEffect(() => {
    Fe(!0);
  }, []), z.useEffect(() => {
    let oe = Mt.current;
    if (oe) {
      let De = oe.getBoundingClientRect().height;
      return at(De), _((Be) => [{ toastId: g.id, height: De, position: g.position }, ...Be]), () => _((Be) => Be.filter((Tt) => Tt.toastId !== g.id));
    }
  }, [_, g.id]), z.useLayoutEffect(() => {
    if (!Re)
      return;
    let oe = Mt.current, De = oe.style.height;
    oe.style.height = "auto";
    let Be = oe.getBoundingClientRect().height;
    oe.style.height = De, at(Be), _((Tt) => Tt.find((Ft) => Ft.toastId === g.id) ? Tt.map((Ft) => Ft.toastId === g.id ? { ...Ft, height: Be } : Ft) : [{ toastId: g.id, height: Be, position: g.position }, ...Tt]);
  }, [Re, g.title, g.description, _, g.id]);
  let Vt = z.useCallback(() => {
    X(!0), ft(zt.current), _((oe) => oe.filter((De) => De.toastId !== g.id)), setTimeout(() => {
      U(g);
    }, MD);
  }, [g, U, _, zt]);
  z.useEffect(() => {
    if (g.promise && dt === "loading" || g.duration === 1 / 0 || g.type === "loading")
      return;
    let oe;
    return j || S || _e && or ? (() => {
      if (An.current < En.current) {
        let De = (/* @__PURE__ */ new Date()).getTime() - En.current;
        nn.current = nn.current - De;
      }
      An.current = (/* @__PURE__ */ new Date()).getTime();
    })() : nn.current !== 1 / 0 && (En.current = (/* @__PURE__ */ new Date()).getTime(), oe = setTimeout(() => {
      var De;
      (De = g.onAutoClose) == null || De.call(g, g), Vt();
    }, nn.current)), () => clearTimeout(oe);
  }, [j, S, g, dt, _e, or, Vt]), z.useEffect(() => {
    g.delete && Vt();
  }, [Vt, g.delete]);
  function si() {
    var oe, De, Be;
    return pe != null && pe.loading ? z.createElement("div", { className: ge(G == null ? void 0 : G.loader, (oe = g == null ? void 0 : g.classNames) == null ? void 0 : oe.loader, "sonner-loader"), "data-visible": dt === "loading" }, pe.loading) : Z ? z.createElement("div", { className: ge(G == null ? void 0 : G.loader, (De = g == null ? void 0 : g.classNames) == null ? void 0 : De.loader, "sonner-loader"), "data-visible": dt === "loading" }, Z) : z.createElement(hD, { className: ge(G == null ? void 0 : G.loader, (Be = g == null ? void 0 : g.classNames) == null ? void 0 : Be.loader), visible: dt === "loading" });
  }
  return z.createElement("li", { tabIndex: 0, ref: Mt, className: ge(J, _n, G == null ? void 0 : G.toast, (t = g == null ? void 0 : g.classNames) == null ? void 0 : t.toast, G == null ? void 0 : G.default, G == null ? void 0 : G[dt], (r = g == null ? void 0 : g.classNames) == null ? void 0 : r[dt]), "data-sonner-toast": "", "data-rich-colors": (o = g.richColors) != null ? o : $, "data-styled": !(g.jsx || g.unstyled || T), "data-mounted": Re, "data-promise": !!g.promise, "data-swiped": Pe, "data-removed": Je, "data-visible": mn, "data-y-position": Lr, "data-x-position": jr, "data-index": M, "data-front": Ot, "data-swiping": we, "data-dismissible": Tn, "data-type": dt, "data-invert": kr, "data-swipe-out": Se, "data-expanded": !!(j || q && Re), style: { "--index": M, "--toasts-before": M, "--z-index": I.length - M, "--offset": `${Je ? Ke : zt.current}px`, "--initial-height": q ? "auto" : `${Nt}px`, ...te, ...g.style }, onPointerDown: (oe) => {
    Vr || !Tn || (kt.current = /* @__PURE__ */ new Date(), ft(zt.current), oe.target.setPointerCapture(oe.pointerId), oe.target.tagName !== "BUTTON" && (je(!0), Rn.current = { x: oe.clientX, y: oe.clientY }));
  }, onPointerUp: () => {
    var oe, De, Be, Tt;
    if (Se || !Tn)
      return;
    Rn.current = null;
    let Ft = Number(((oe = Mt.current) == null ? void 0 : oe.style.getPropertyValue("--swipe-amount").replace("px", "")) || 0), sr = (/* @__PURE__ */ new Date()).getTime() - ((De = kt.current) == null ? void 0 : De.getTime()), ai = Math.abs(Ft) / sr;
    if (Math.abs(Ft) >= ND || ai > 0.11) {
      ft(zt.current), (Be = g.onDismiss) == null || Be.call(g, g), Vt(), ve(!0), st(!1);
      return;
    }
    (Tt = Mt.current) == null || Tt.style.setProperty("--swipe-amount", "0px"), je(!1);
  }, onPointerMove: (oe) => {
    var De, Be, Tt;
    if (!Rn.current || !Tn)
      return;
    let Ft = oe.clientY - Rn.current.y, sr = ((De = window.getSelection()) == null ? void 0 : De.toString().length) > 0;
    Number(((Be = Mt.current) == null ? void 0 : Be.style.getPropertyValue("--swipe-amount").replace("px", "")) || 0) > 0 && st(!0), !sr && ((Tt = Mt.current) == null || Tt.style.setProperty("--swipe-amount", `${Math.max(0, Ft)}px`));
  } }, Pn && !g.jsx ? z.createElement("button", { "aria-label": Ae, "data-disabled": Vr, "data-close-button": !0, onClick: Vr || !Tn ? () => {
  } : () => {
    var oe;
    Vt(), (oe = g.onDismiss) == null || oe.call(g, g);
  }, className: ge(G == null ? void 0 : G.closeButton, (s = g == null ? void 0 : g.classNames) == null ? void 0 : s.closeButton) }, (c = pe == null ? void 0 : pe.close) != null ? c : yD) : null, g.jsx || z.isValidElement(g.title) ? g.jsx ? g.jsx : typeof g.title == "function" ? g.title() : g.title : z.createElement(z.Fragment, null, dt || g.icon || g.promise ? z.createElement("div", { "data-icon": "", className: ge(G == null ? void 0 : G.icon, (l = g == null ? void 0 : g.classNames) == null ? void 0 : l.icon) }, g.promise || g.type === "loading" && !g.icon ? g.icon || si() : null, g.type !== "loading" ? g.icon || (pe == null ? void 0 : pe[dt]) || fD(dt) : null) : null, z.createElement("div", { "data-content": "", className: ge(G == null ? void 0 : G.content, (u = g == null ? void 0 : g.classNames) == null ? void 0 : u.content) }, z.createElement("div", { "data-title": "", className: ge(G == null ? void 0 : G.title, (f = g == null ? void 0 : g.classNames) == null ? void 0 : f.title) }, typeof g.title == "function" ? g.title() : g.title), g.description ? z.createElement("div", { "data-description": "", className: ge(se, oi, G == null ? void 0 : G.description, (h = g == null ? void 0 : g.classNames) == null ? void 0 : h.description) }, typeof g.description == "function" ? g.description() : g.description) : null), z.isValidElement(g.cancel) ? g.cancel : g.cancel && $s(g.cancel) ? z.createElement("button", { "data-button": !0, "data-cancel": !0, style: g.cancelButtonStyle || re, onClick: (oe) => {
    var De, Be;
    $s(g.cancel) && Tn && ((Be = (De = g.cancel).onClick) == null || Be.call(De, oe), Vt());
  }, className: ge(G == null ? void 0 : G.cancelButton, (p = g == null ? void 0 : g.classNames) == null ? void 0 : p.cancelButton) }, g.cancel.label) : null, z.isValidElement(g.action) ? g.action : g.action && $s(g.action) ? z.createElement("button", { "data-button": !0, "data-action": !0, style: g.actionButtonStyle || de, onClick: (oe) => {
    var De, Be;
    $s(g.action) && ((Be = (De = g.action).onClick) == null || Be.call(De, oe), !oe.defaultPrevented && Vt());
  }, className: ge(G == null ? void 0 : G.actionButton, (v = g == null ? void 0 : g.classNames) == null ? void 0 : v.actionButton) }, g.action.label) : null));
};
function bm() {
  if (typeof window > "u" || typeof document > "u")
    return "ltr";
  let e = document.documentElement.getAttribute("dir");
  return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e;
}
var ID = pa(function(e, t) {
  let { invert: r, position: o = "bottom-right", hotkey: s = ["altKey", "KeyT"], expand: c, closeButton: l, className: u, offset: f, theme: h = "light", richColors: p, duration: v, style: x, visibleToasts: g = PD, toastOptions: T, dir: S = bm(), gap: _ = RD, loadingIcon: E, icons: A, containerAriaLabel: M = "Notifications", pauseWhenPageIsHidden: I, cn: j = OD } = e, [U, $] = z.useState([]), H = z.useMemo(() => Array.from(new Set([o].concat(U.filter((_e) => _e.position).map((_e) => _e.position)))), [U, o]), [te, re] = z.useState([]), [de, J] = z.useState(!1), [se, ne] = z.useState(!1), [Te, ie] = z.useState(h !== "system" ? h : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), Z = z.useRef(null), q = s.join("+").replace(/Key/g, "").replace(/Digit/g, ""), G = z.useRef(null), pe = z.useRef(!1), Ae = z.useCallback((_e) => {
    $((ge) => {
      var Re;
      return (Re = ge.find((Fe) => Fe.id === _e.id)) != null && Re.delete || Jt.dismiss(_e.id), ge.filter(({ id: Fe }) => Fe !== _e.id);
    });
  }, []);
  return z.useEffect(() => Jt.subscribe((_e) => {
    if (_e.dismiss) {
      $((ge) => ge.map((Re) => Re.id === _e.id ? { ...Re, delete: !0 } : Re));
      return;
    }
    setTimeout(() => {
      _m.flushSync(() => {
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
    return U.length ? z.createElement("ol", { key: _e, dir: S === "auto" ? bm() : S, tabIndex: -1, ref: Z, className: u, "data-sonner-toaster": !0, "data-theme": Te, "data-y-position": Fe, "data-lifted": de && U.length > 1 && !c, "data-x-position": Je, style: { "--front-toast-height": `${((Re = te[0]) == null ? void 0 : Re.height) || 0}px`, "--offset": typeof f == "number" ? `${f}px` : f || ED, "--width": `${AD}px`, "--gap": `${_}px`, ...x }, onBlur: (X) => {
      pe.current && !X.currentTarget.contains(X.relatedTarget) && (pe.current = !1, G.current && (G.current.focus({ preventScroll: !0 }), G.current = null));
    }, onFocus: (X) => {
      X.target instanceof HTMLElement && X.target.dataset.dismissible === "false" || pe.current || (pe.current = !0, G.current = X.relatedTarget);
    }, onMouseEnter: () => J(!0), onMouseMove: () => J(!0), onMouseLeave: () => {
      se || J(!1);
    }, onPointerDown: (X) => {
      X.target instanceof HTMLElement && X.target.dataset.dismissible === "false" || ne(!0);
    }, onPointerUp: () => ne(!1) }, U.filter((X) => !X.position && ge === 0 || X.position === _e).map((X, we) => {
      var je, Se;
      return z.createElement(DD, { key: X.id, icons: A, index: we, toast: X, defaultRichColors: p, duration: (je = T == null ? void 0 : T.duration) != null ? je : v, className: T == null ? void 0 : T.className, descriptionClassName: T == null ? void 0 : T.descriptionClassName, invert: r, visibleToasts: g, closeButton: (Se = T == null ? void 0 : T.closeButton) != null ? Se : l, interacting: se, position: _e, style: T == null ? void 0 : T.style, unstyled: T == null ? void 0 : T.unstyled, classNames: T == null ? void 0 : T.classNames, cancelButtonStyle: T == null ? void 0 : T.cancelButtonStyle, actionButtonStyle: T == null ? void 0 : T.actionButtonStyle, removeToast: Ae, toasts: U.filter((ve) => ve.position == X.position), heights: te.filter((ve) => ve.position == X.position), setHeights: re, expandByDefault: c, gap: _, loadingIcon: E, expanded: de, pauseWhenPageIsHidden: I, cn: j });
    })) : null;
  }));
});
const JD = ({ ...e }) => {
  const { theme: t = "system" } = uD();
  return /* @__PURE__ */ y.jsx(
    ID,
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
export {
  kD as Counter,
  WD as DealHeader,
  UD as DealProgress,
  XD as DealQualification,
  KD as DealRisk,
  HD as DealStakeholders,
  JD as Toaster,
  ZD as toast
};
//# sourceMappingURL=index.js.map
