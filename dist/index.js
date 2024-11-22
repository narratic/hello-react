import * as v from "react";
import gn, { useState as af, useEffect as lf, forwardRef as cf, createElement as Ra, useLayoutEffect as dy } from "react";
import * as Li from "react-dom";
import py from "react-dom";
var io = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function hy(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var Aa = { exports: {} }, so = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Nu;
function gy() {
  if (Nu)
    return so;
  Nu = 1;
  var n = gn, i = Symbol.for("react.element"), r = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, l = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function f(d, g, m) {
    var w, _ = {}, E = null, R = null;
    m !== void 0 && (E = "" + m), g.key !== void 0 && (E = "" + g.key), g.ref !== void 0 && (R = g.ref);
    for (w in g)
      s.call(g, w) && !u.hasOwnProperty(w) && (_[w] = g[w]);
    if (d && d.defaultProps)
      for (w in g = d.defaultProps, g)
        _[w] === void 0 && (_[w] = g[w]);
    return { $$typeof: i, type: d, key: E, ref: R, props: _, _owner: l.current };
  }
  return so.Fragment = r, so.jsx = f, so.jsxs = f, so;
}
var ao = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Iu;
function vy() {
  return Iu || (Iu = 1, process.env.NODE_ENV !== "production" && function() {
    var n = gn, i = Symbol.for("react.element"), r = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), l = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), f = Symbol.for("react.provider"), d = Symbol.for("react.context"), g = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), w = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), E = Symbol.for("react.lazy"), R = Symbol.for("react.offscreen"), O = Symbol.iterator, y = "@@iterator";
    function A(C) {
      if (C === null || typeof C != "object")
        return null;
      var B = O && C[O] || C[y];
      return typeof B == "function" ? B : null;
    }
    var I = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function N(C) {
      {
        for (var B = arguments.length, z = new Array(B > 1 ? B - 1 : 0), te = 1; te < B; te++)
          z[te - 1] = arguments[te];
        M("error", C, z);
      }
    }
    function M(C, B, z) {
      {
        var te = I.ReactDebugCurrentFrame, Ae = te.getStackAddendum();
        Ae !== "" && (B += "%s", z = z.concat([Ae]));
        var Oe = z.map(function(we) {
          return String(we);
        });
        Oe.unshift("Warning: " + B), Function.prototype.apply.call(console[C], console, Oe);
      }
    }
    var W = !1, $ = !1, G = !1, U = !1, ee = !1, ue;
    ue = Symbol.for("react.module.reference");
    function he(C) {
      return !!(typeof C == "string" || typeof C == "function" || C === s || C === u || ee || C === l || C === m || C === w || U || C === R || W || $ || G || typeof C == "object" && C !== null && (C.$$typeof === E || C.$$typeof === _ || C.$$typeof === f || C.$$typeof === d || C.$$typeof === g || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      C.$$typeof === ue || C.getModuleId !== void 0));
    }
    function Ce(C, B, z) {
      var te = C.displayName;
      if (te)
        return te;
      var Ae = B.displayName || B.name || "";
      return Ae !== "" ? z + "(" + Ae + ")" : z;
    }
    function q(C) {
      return C.displayName || "Context";
    }
    function re(C) {
      if (C == null)
        return null;
      if (typeof C.tag == "number" && N("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof C == "function")
        return C.displayName || C.name || null;
      if (typeof C == "string")
        return C;
      switch (C) {
        case s:
          return "Fragment";
        case r:
          return "Portal";
        case u:
          return "Profiler";
        case l:
          return "StrictMode";
        case m:
          return "Suspense";
        case w:
          return "SuspenseList";
      }
      if (typeof C == "object")
        switch (C.$$typeof) {
          case d:
            var B = C;
            return q(B) + ".Consumer";
          case f:
            var z = C;
            return q(z._context) + ".Provider";
          case g:
            return Ce(C, C.render, "ForwardRef");
          case _:
            var te = C.displayName || null;
            return te !== null ? te : re(C.type) || "Memo";
          case E: {
            var Ae = C, Oe = Ae._payload, we = Ae._init;
            try {
              return re(we(Oe));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var ne = Object.assign, Se = 0, oe, se, Y, ve, ke, Ee, Yt;
    function qt() {
    }
    qt.__reactDisabledLog = !0;
    function Pt() {
      {
        if (Se === 0) {
          oe = console.log, se = console.info, Y = console.warn, ve = console.error, ke = console.group, Ee = console.groupCollapsed, Yt = console.groupEnd;
          var C = {
            configurable: !0,
            enumerable: !0,
            value: qt,
            writable: !0
          };
          Object.defineProperties(console, {
            info: C,
            log: C,
            warn: C,
            error: C,
            group: C,
            groupCollapsed: C,
            groupEnd: C
          });
        }
        Se++;
      }
    }
    function ut() {
      {
        if (Se--, Se === 0) {
          var C = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ne({}, C, {
              value: oe
            }),
            info: ne({}, C, {
              value: se
            }),
            warn: ne({}, C, {
              value: Y
            }),
            error: ne({}, C, {
              value: ve
            }),
            group: ne({}, C, {
              value: ke
            }),
            groupCollapsed: ne({}, C, {
              value: Ee
            }),
            groupEnd: ne({}, C, {
              value: Yt
            })
          });
        }
        Se < 0 && N("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var it = I.ReactCurrentDispatcher, Z;
    function me(C, B, z) {
      {
        if (Z === void 0)
          try {
            throw Error();
          } catch (Ae) {
            var te = Ae.stack.trim().match(/\n( *(at )?)/);
            Z = te && te[1] || "";
          }
        return `
` + Z + C;
      }
    }
    var Le = !1, Re;
    {
      var be = typeof WeakMap == "function" ? WeakMap : Map;
      Re = new be();
    }
    function xe(C, B) {
      if (!C || Le)
        return "";
      {
        var z = Re.get(C);
        if (z !== void 0)
          return z;
      }
      var te;
      Le = !0;
      var Ae = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Oe;
      Oe = it.current, it.current = null, Pt();
      try {
        if (B) {
          var we = function() {
            throw Error();
          };
          if (Object.defineProperty(we.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(we, []);
            } catch (at) {
              te = at;
            }
            Reflect.construct(C, [], we);
          } else {
            try {
              we.call();
            } catch (at) {
              te = at;
            }
            C.call(we.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (at) {
            te = at;
          }
          C();
        }
      } catch (at) {
        if (at && te && typeof at.stack == "string") {
          for (var pe = at.stack.split(`
`), tt = te.stack.split(`
`), $e = pe.length - 1, ze = tt.length - 1; $e >= 1 && ze >= 0 && pe[$e] !== tt[ze]; )
            ze--;
          for (; $e >= 1 && ze >= 0; $e--, ze--)
            if (pe[$e] !== tt[ze]) {
              if ($e !== 1 || ze !== 1)
                do
                  if ($e--, ze--, ze < 0 || pe[$e] !== tt[ze]) {
                    var nt = `
` + pe[$e].replace(" at new ", " at ");
                    return C.displayName && nt.includes("<anonymous>") && (nt = nt.replace("<anonymous>", C.displayName)), typeof C == "function" && Re.set(C, nt), nt;
                  }
                while ($e >= 1 && ze >= 0);
              break;
            }
        }
      } finally {
        Le = !1, it.current = Oe, ut(), Error.prepareStackTrace = Ae;
      }
      var bn = C ? C.displayName || C.name : "", Ot = bn ? me(bn) : "";
      return typeof C == "function" && Re.set(C, Ot), Ot;
    }
    function Ze(C, B, z) {
      return xe(C, !1);
    }
    function We(C) {
      var B = C.prototype;
      return !!(B && B.isReactComponent);
    }
    function st(C, B, z) {
      if (C == null)
        return "";
      if (typeof C == "function")
        return xe(C, We(C));
      if (typeof C == "string")
        return me(C);
      switch (C) {
        case m:
          return me("Suspense");
        case w:
          return me("SuspenseList");
      }
      if (typeof C == "object")
        switch (C.$$typeof) {
          case g:
            return Ze(C.render);
          case _:
            return st(C.type, B, z);
          case E: {
            var te = C, Ae = te._payload, Oe = te._init;
            try {
              return st(Oe(Ae), B, z);
            } catch {
            }
          }
        }
      return "";
    }
    var wt = Object.prototype.hasOwnProperty, Je = {}, Bn = I.ReactDebugCurrentFrame;
    function Wt(C) {
      if (C) {
        var B = C._owner, z = st(C.type, C._source, B ? B.type : null);
        Bn.setExtraStackFrame(z);
      } else
        Bn.setExtraStackFrame(null);
    }
    function $n(C, B, z, te, Ae) {
      {
        var Oe = Function.call.bind(wt);
        for (var we in C)
          if (Oe(C, we)) {
            var pe = void 0;
            try {
              if (typeof C[we] != "function") {
                var tt = Error((te || "React class") + ": " + z + " type `" + we + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof C[we] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw tt.name = "Invariant Violation", tt;
              }
              pe = C[we](B, we, te, z, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch ($e) {
              pe = $e;
            }
            pe && !(pe instanceof Error) && (Wt(Ae), N("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", te || "React class", z, we, typeof pe), Wt(null)), pe instanceof Error && !(pe.message in Je) && (Je[pe.message] = !0, Wt(Ae), N("Failed %s type: %s", z, pe.message), Wt(null));
          }
      }
    }
    var yt = Array.isArray;
    function nn(C) {
      return yt(C);
    }
    function er(C) {
      {
        var B = typeof Symbol == "function" && Symbol.toStringTag, z = B && C[Symbol.toStringTag] || C.constructor.name || "Object";
        return z;
      }
    }
    function Xi(C) {
      try {
        return wn(C), !1;
      } catch {
        return !0;
      }
    }
    function wn(C) {
      return "" + C;
    }
    function bo(C) {
      if (Xi(C))
        return N("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", er(C)), wn(C);
    }
    var Bt = I.ReactCurrentOwner, yn = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, tr, nr, Un;
    Un = {};
    function Mr(C) {
      if (wt.call(C, "ref")) {
        var B = Object.getOwnPropertyDescriptor(C, "ref").get;
        if (B && B.isReactWarning)
          return !1;
      }
      return C.ref !== void 0;
    }
    function Dr(C) {
      if (wt.call(C, "key")) {
        var B = Object.getOwnPropertyDescriptor(C, "key").get;
        if (B && B.isReactWarning)
          return !1;
      }
      return C.key !== void 0;
    }
    function kr(C, B) {
      if (typeof C.ref == "string" && Bt.current && B && Bt.current.stateNode !== B) {
        var z = re(Bt.current.type);
        Un[z] || (N('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', re(Bt.current.type), C.ref), Un[z] = !0);
      }
    }
    function jr(C, B) {
      {
        var z = function() {
          tr || (tr = !0, N("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", B));
        };
        z.isReactWarning = !0, Object.defineProperty(C, "key", {
          get: z,
          configurable: !0
        });
      }
    }
    function Fr(C, B) {
      {
        var z = function() {
          nr || (nr = !0, N("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", B));
        };
        z.isReactWarning = !0, Object.defineProperty(C, "ref", {
          get: z,
          configurable: !0
        });
      }
    }
    var Wr = function(C, B, z, te, Ae, Oe, we) {
      var pe = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: i,
        // Built-in properties that belong on the element
        type: C,
        key: B,
        ref: z,
        props: we,
        // Record the component responsible for creating this element.
        _owner: Oe
      };
      return pe._store = {}, Object.defineProperty(pe._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(pe, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: te
      }), Object.defineProperty(pe, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ae
      }), Object.freeze && (Object.freeze(pe.props), Object.freeze(pe)), pe;
    };
    function Zi(C, B, z, te, Ae) {
      {
        var Oe, we = {}, pe = null, tt = null;
        z !== void 0 && (bo(z), pe = "" + z), Dr(B) && (bo(B.key), pe = "" + B.key), Mr(B) && (tt = B.ref, kr(B, Ae));
        for (Oe in B)
          wt.call(B, Oe) && !yn.hasOwnProperty(Oe) && (we[Oe] = B[Oe]);
        if (C && C.defaultProps) {
          var $e = C.defaultProps;
          for (Oe in $e)
            we[Oe] === void 0 && (we[Oe] = $e[Oe]);
        }
        if (pe || tt) {
          var ze = typeof C == "function" ? C.displayName || C.name || "Unknown" : C;
          pe && jr(we, ze), tt && Fr(we, ze);
        }
        return Wr(C, pe, tt, Ae, te, Bt.current, we);
      }
    }
    var Br = I.ReactCurrentOwner, _o = I.ReactDebugCurrentFrame;
    function rn(C) {
      if (C) {
        var B = C._owner, z = st(C.type, C._source, B ? B.type : null);
        _o.setExtraStackFrame(z);
      } else
        _o.setExtraStackFrame(null);
    }
    var rr;
    rr = !1;
    function $r(C) {
      return typeof C == "object" && C !== null && C.$$typeof === i;
    }
    function Co() {
      {
        if (Br.current) {
          var C = re(Br.current.type);
          if (C)
            return `

Check the render method of \`` + C + "`.";
        }
        return "";
      }
    }
    function Ji(C) {
      return "";
    }
    var So = {};
    function Eo(C) {
      {
        var B = Co();
        if (!B) {
          var z = typeof C == "string" ? C : C.displayName || C.name;
          z && (B = `

Check the top-level render call using <` + z + ">.");
        }
        return B;
      }
    }
    function Ro(C, B) {
      {
        if (!C._store || C._store.validated || C.key != null)
          return;
        C._store.validated = !0;
        var z = Eo(B);
        if (So[z])
          return;
        So[z] = !0;
        var te = "";
        C && C._owner && C._owner !== Br.current && (te = " It was passed a child from " + re(C._owner.type) + "."), rn(C), N('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', z, te), rn(null);
      }
    }
    function Ao(C, B) {
      {
        if (typeof C != "object")
          return;
        if (nn(C))
          for (var z = 0; z < C.length; z++) {
            var te = C[z];
            $r(te) && Ro(te, B);
          }
        else if ($r(C))
          C._store && (C._store.validated = !0);
        else if (C) {
          var Ae = A(C);
          if (typeof Ae == "function" && Ae !== C.entries)
            for (var Oe = Ae.call(C), we; !(we = Oe.next()).done; )
              $r(we.value) && Ro(we.value, B);
        }
      }
    }
    function Qi(C) {
      {
        var B = C.type;
        if (B == null || typeof B == "string")
          return;
        var z;
        if (typeof B == "function")
          z = B.propTypes;
        else if (typeof B == "object" && (B.$$typeof === g || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        B.$$typeof === _))
          z = B.propTypes;
        else
          return;
        if (z) {
          var te = re(B);
          $n(z, C.props, "prop", te, C);
        } else if (B.PropTypes !== void 0 && !rr) {
          rr = !0;
          var Ae = re(B);
          N("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Ae || "Unknown");
        }
        typeof B.getDefaultProps == "function" && !B.getDefaultProps.isReactClassApproved && N("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ur(C) {
      {
        for (var B = Object.keys(C.props), z = 0; z < B.length; z++) {
          var te = B[z];
          if (te !== "children" && te !== "key") {
            rn(C), N("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", te), rn(null);
            break;
          }
        }
        C.ref !== null && (rn(C), N("Invalid attribute `ref` supplied to `React.Fragment`."), rn(null));
      }
    }
    var To = {};
    function or(C, B, z, te, Ae, Oe) {
      {
        var we = he(C);
        if (!we) {
          var pe = "";
          (C === void 0 || typeof C == "object" && C !== null && Object.keys(C).length === 0) && (pe += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var tt = Ji();
          tt ? pe += tt : pe += Co();
          var $e;
          C === null ? $e = "null" : nn(C) ? $e = "array" : C !== void 0 && C.$$typeof === i ? ($e = "<" + (re(C.type) || "Unknown") + " />", pe = " Did you accidentally export a JSX literal instead of a component?") : $e = typeof C, N("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", $e, pe);
        }
        var ze = Zi(C, B, z, Ae, Oe);
        if (ze == null)
          return ze;
        if (we) {
          var nt = B.children;
          if (nt !== void 0)
            if (te)
              if (nn(nt)) {
                for (var bn = 0; bn < nt.length; bn++)
                  Ao(nt[bn], C);
                Object.freeze && Object.freeze(nt);
              } else
                N("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ao(nt, C);
        }
        if (wt.call(B, "key")) {
          var Ot = re(C), at = Object.keys(B).filter(function(Po) {
            return Po !== "key";
          }), Hr = at.length > 0 ? "{key: someKey, " + at.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!To[Ot + Hr]) {
            var os = at.length > 0 ? "{" + at.join(": ..., ") + ": ...}" : "{}";
            N(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Hr, Ot, os, Ot), To[Ot + Hr] = !0;
          }
        }
        return C === s ? Ur(ze) : Qi(ze), ze;
      }
    }
    function es(C, B, z) {
      return or(C, B, z, !0);
    }
    function ts(C, B, z) {
      return or(C, B, z, !1);
    }
    var ns = ts, rs = es;
    ao.Fragment = s, ao.jsx = ns, ao.jsxs = rs;
  }()), ao;
}
process.env.NODE_ENV === "production" ? Aa.exports = gy() : Aa.exports = vy();
var b = Aa.exports, Ei = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
Ei.exports;
(function(n, i) {
  (function() {
    var r, s = "4.17.21", l = 200, u = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", f = "Expected a function", d = "Invalid `variable` option passed into `_.template`", g = "__lodash_hash_undefined__", m = 500, w = "__lodash_placeholder__", _ = 1, E = 2, R = 4, O = 1, y = 2, A = 1, I = 2, N = 4, M = 8, W = 16, $ = 32, G = 64, U = 128, ee = 256, ue = 512, he = 30, Ce = "...", q = 800, re = 16, ne = 1, Se = 2, oe = 3, se = 1 / 0, Y = 9007199254740991, ve = 17976931348623157e292, ke = NaN, Ee = 4294967295, Yt = Ee - 1, qt = Ee >>> 1, Pt = [
      ["ary", U],
      ["bind", A],
      ["bindKey", I],
      ["curry", M],
      ["curryRight", W],
      ["flip", ue],
      ["partial", $],
      ["partialRight", G],
      ["rearg", ee]
    ], ut = "[object Arguments]", it = "[object Array]", Z = "[object AsyncFunction]", me = "[object Boolean]", Le = "[object Date]", Re = "[object DOMException]", be = "[object Error]", xe = "[object Function]", Ze = "[object GeneratorFunction]", We = "[object Map]", st = "[object Number]", wt = "[object Null]", Je = "[object Object]", Bn = "[object Promise]", Wt = "[object Proxy]", $n = "[object RegExp]", yt = "[object Set]", nn = "[object String]", er = "[object Symbol]", Xi = "[object Undefined]", wn = "[object WeakMap]", bo = "[object WeakSet]", Bt = "[object ArrayBuffer]", yn = "[object DataView]", tr = "[object Float32Array]", nr = "[object Float64Array]", Un = "[object Int8Array]", Mr = "[object Int16Array]", Dr = "[object Int32Array]", kr = "[object Uint8Array]", jr = "[object Uint8ClampedArray]", Fr = "[object Uint16Array]", Wr = "[object Uint32Array]", Zi = /\b__p \+= '';/g, Br = /\b(__p \+=) '' \+/g, _o = /(__e\(.*?\)|\b__t\)) \+\n'';/g, rn = /&(?:amp|lt|gt|quot|#39);/g, rr = /[&<>"']/g, $r = RegExp(rn.source), Co = RegExp(rr.source), Ji = /<%-([\s\S]+?)%>/g, So = /<%([\s\S]+?)%>/g, Eo = /<%=([\s\S]+?)%>/g, Ro = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Ao = /^\w*$/, Qi = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Ur = /[\\^$.*+?()[\]{}|]/g, To = RegExp(Ur.source), or = /^\s+/, es = /\s/, ts = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, ns = /\{\n\/\* \[wrapped with (.+)\] \*/, rs = /,? & /, C = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, B = /[()=,{}\[\]\/\s]/, z = /\\(\\)?/g, te = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Ae = /\w*$/, Oe = /^[-+]0x[0-9a-f]+$/i, we = /^0b[01]+$/i, pe = /^\[object .+?Constructor\]$/, tt = /^0o[0-7]+$/i, $e = /^(?:0|[1-9]\d*)$/, ze = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, nt = /($^)/, bn = /['\n\r\u2028\u2029\\]/g, Ot = "\\ud800-\\udfff", at = "\\u0300-\\u036f", Hr = "\\ufe20-\\ufe2f", os = "\\u20d0-\\u20ff", Po = at + Hr + os, al = "\\u2700-\\u27bf", ll = "a-z\\xdf-\\xf6\\xf8-\\xff", lp = "\\xac\\xb1\\xd7\\xf7", cp = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", up = "\\u2000-\\u206f", fp = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", cl = "A-Z\\xc0-\\xd6\\xd8-\\xde", ul = "\\ufe0e\\ufe0f", fl = lp + cp + up + fp, is = "['’]", dp = "[" + Ot + "]", dl = "[" + fl + "]", Oo = "[" + Po + "]", pl = "\\d+", pp = "[" + al + "]", hl = "[" + ll + "]", gl = "[^" + Ot + fl + pl + al + ll + cl + "]", ss = "\\ud83c[\\udffb-\\udfff]", hp = "(?:" + Oo + "|" + ss + ")", vl = "[^" + Ot + "]", as = "(?:\\ud83c[\\udde6-\\uddff]){2}", ls = "[\\ud800-\\udbff][\\udc00-\\udfff]", ir = "[" + cl + "]", ml = "\\u200d", xl = "(?:" + hl + "|" + gl + ")", gp = "(?:" + ir + "|" + gl + ")", wl = "(?:" + is + "(?:d|ll|m|re|s|t|ve))?", yl = "(?:" + is + "(?:D|LL|M|RE|S|T|VE))?", bl = hp + "?", _l = "[" + ul + "]?", vp = "(?:" + ml + "(?:" + [vl, as, ls].join("|") + ")" + _l + bl + ")*", mp = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", xp = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Cl = _l + bl + vp, wp = "(?:" + [pp, as, ls].join("|") + ")" + Cl, yp = "(?:" + [vl + Oo + "?", Oo, as, ls, dp].join("|") + ")", bp = RegExp(is, "g"), _p = RegExp(Oo, "g"), cs = RegExp(ss + "(?=" + ss + ")|" + yp + Cl, "g"), Cp = RegExp([
      ir + "?" + hl + "+" + wl + "(?=" + [dl, ir, "$"].join("|") + ")",
      gp + "+" + yl + "(?=" + [dl, ir + xl, "$"].join("|") + ")",
      ir + "?" + xl + "+" + wl,
      ir + "+" + yl,
      xp,
      mp,
      pl,
      wp
    ].join("|"), "g"), Sp = RegExp("[" + ml + Ot + Po + ul + "]"), Ep = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Rp = [
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
    ], Ap = -1, je = {};
    je[tr] = je[nr] = je[Un] = je[Mr] = je[Dr] = je[kr] = je[jr] = je[Fr] = je[Wr] = !0, je[ut] = je[it] = je[Bt] = je[me] = je[yn] = je[Le] = je[be] = je[xe] = je[We] = je[st] = je[Je] = je[$n] = je[yt] = je[nn] = je[wn] = !1;
    var Me = {};
    Me[ut] = Me[it] = Me[Bt] = Me[yn] = Me[me] = Me[Le] = Me[tr] = Me[nr] = Me[Un] = Me[Mr] = Me[Dr] = Me[We] = Me[st] = Me[Je] = Me[$n] = Me[yt] = Me[nn] = Me[er] = Me[kr] = Me[jr] = Me[Fr] = Me[Wr] = !0, Me[be] = Me[xe] = Me[wn] = !1;
    var Tp = {
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
    }, Pp = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, Op = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, Np = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, Ip = parseFloat, Lp = parseInt, Sl = typeof io == "object" && io && io.Object === Object && io, Mp = typeof self == "object" && self && self.Object === Object && self, rt = Sl || Mp || Function("return this")(), us = i && !i.nodeType && i, Hn = us && !0 && n && !n.nodeType && n, El = Hn && Hn.exports === us, fs = El && Sl.process, Nt = function() {
      try {
        var T = Hn && Hn.require && Hn.require("util").types;
        return T || fs && fs.binding && fs.binding("util");
      } catch {
      }
    }(), Rl = Nt && Nt.isArrayBuffer, Al = Nt && Nt.isDate, Tl = Nt && Nt.isMap, Pl = Nt && Nt.isRegExp, Ol = Nt && Nt.isSet, Nl = Nt && Nt.isTypedArray;
    function bt(T, D, L) {
      switch (L.length) {
        case 0:
          return T.call(D);
        case 1:
          return T.call(D, L[0]);
        case 2:
          return T.call(D, L[0], L[1]);
        case 3:
          return T.call(D, L[0], L[1], L[2]);
      }
      return T.apply(D, L);
    }
    function Dp(T, D, L, V) {
      for (var ie = -1, Te = T == null ? 0 : T.length; ++ie < Te; ) {
        var qe = T[ie];
        D(V, qe, L(qe), T);
      }
      return V;
    }
    function It(T, D) {
      for (var L = -1, V = T == null ? 0 : T.length; ++L < V && D(T[L], L, T) !== !1; )
        ;
      return T;
    }
    function kp(T, D) {
      for (var L = T == null ? 0 : T.length; L-- && D(T[L], L, T) !== !1; )
        ;
      return T;
    }
    function Il(T, D) {
      for (var L = -1, V = T == null ? 0 : T.length; ++L < V; )
        if (!D(T[L], L, T))
          return !1;
      return !0;
    }
    function _n(T, D) {
      for (var L = -1, V = T == null ? 0 : T.length, ie = 0, Te = []; ++L < V; ) {
        var qe = T[L];
        D(qe, L, T) && (Te[ie++] = qe);
      }
      return Te;
    }
    function No(T, D) {
      var L = T == null ? 0 : T.length;
      return !!L && sr(T, D, 0) > -1;
    }
    function ds(T, D, L) {
      for (var V = -1, ie = T == null ? 0 : T.length; ++V < ie; )
        if (L(D, T[V]))
          return !0;
      return !1;
    }
    function Be(T, D) {
      for (var L = -1, V = T == null ? 0 : T.length, ie = Array(V); ++L < V; )
        ie[L] = D(T[L], L, T);
      return ie;
    }
    function Cn(T, D) {
      for (var L = -1, V = D.length, ie = T.length; ++L < V; )
        T[ie + L] = D[L];
      return T;
    }
    function ps(T, D, L, V) {
      var ie = -1, Te = T == null ? 0 : T.length;
      for (V && Te && (L = T[++ie]); ++ie < Te; )
        L = D(L, T[ie], ie, T);
      return L;
    }
    function jp(T, D, L, V) {
      var ie = T == null ? 0 : T.length;
      for (V && ie && (L = T[--ie]); ie--; )
        L = D(L, T[ie], ie, T);
      return L;
    }
    function hs(T, D) {
      for (var L = -1, V = T == null ? 0 : T.length; ++L < V; )
        if (D(T[L], L, T))
          return !0;
      return !1;
    }
    var Fp = gs("length");
    function Wp(T) {
      return T.split("");
    }
    function Bp(T) {
      return T.match(C) || [];
    }
    function Ll(T, D, L) {
      var V;
      return L(T, function(ie, Te, qe) {
        if (D(ie, Te, qe))
          return V = Te, !1;
      }), V;
    }
    function Io(T, D, L, V) {
      for (var ie = T.length, Te = L + (V ? 1 : -1); V ? Te-- : ++Te < ie; )
        if (D(T[Te], Te, T))
          return Te;
      return -1;
    }
    function sr(T, D, L) {
      return D === D ? Jp(T, D, L) : Io(T, Ml, L);
    }
    function $p(T, D, L, V) {
      for (var ie = L - 1, Te = T.length; ++ie < Te; )
        if (V(T[ie], D))
          return ie;
      return -1;
    }
    function Ml(T) {
      return T !== T;
    }
    function Dl(T, D) {
      var L = T == null ? 0 : T.length;
      return L ? ms(T, D) / L : ke;
    }
    function gs(T) {
      return function(D) {
        return D == null ? r : D[T];
      };
    }
    function vs(T) {
      return function(D) {
        return T == null ? r : T[D];
      };
    }
    function kl(T, D, L, V, ie) {
      return ie(T, function(Te, qe, Ie) {
        L = V ? (V = !1, Te) : D(L, Te, qe, Ie);
      }), L;
    }
    function Up(T, D) {
      var L = T.length;
      for (T.sort(D); L--; )
        T[L] = T[L].value;
      return T;
    }
    function ms(T, D) {
      for (var L, V = -1, ie = T.length; ++V < ie; ) {
        var Te = D(T[V]);
        Te !== r && (L = L === r ? Te : L + Te);
      }
      return L;
    }
    function xs(T, D) {
      for (var L = -1, V = Array(T); ++L < T; )
        V[L] = D(L);
      return V;
    }
    function Hp(T, D) {
      return Be(D, function(L) {
        return [L, T[L]];
      });
    }
    function jl(T) {
      return T && T.slice(0, $l(T) + 1).replace(or, "");
    }
    function _t(T) {
      return function(D) {
        return T(D);
      };
    }
    function ws(T, D) {
      return Be(D, function(L) {
        return T[L];
      });
    }
    function zr(T, D) {
      return T.has(D);
    }
    function Fl(T, D) {
      for (var L = -1, V = T.length; ++L < V && sr(D, T[L], 0) > -1; )
        ;
      return L;
    }
    function Wl(T, D) {
      for (var L = T.length; L-- && sr(D, T[L], 0) > -1; )
        ;
      return L;
    }
    function zp(T, D) {
      for (var L = T.length, V = 0; L--; )
        T[L] === D && ++V;
      return V;
    }
    var Vp = vs(Tp), Gp = vs(Pp);
    function Kp(T) {
      return "\\" + Np[T];
    }
    function Yp(T, D) {
      return T == null ? r : T[D];
    }
    function ar(T) {
      return Sp.test(T);
    }
    function qp(T) {
      return Ep.test(T);
    }
    function Xp(T) {
      for (var D, L = []; !(D = T.next()).done; )
        L.push(D.value);
      return L;
    }
    function ys(T) {
      var D = -1, L = Array(T.size);
      return T.forEach(function(V, ie) {
        L[++D] = [ie, V];
      }), L;
    }
    function Bl(T, D) {
      return function(L) {
        return T(D(L));
      };
    }
    function Sn(T, D) {
      for (var L = -1, V = T.length, ie = 0, Te = []; ++L < V; ) {
        var qe = T[L];
        (qe === D || qe === w) && (T[L] = w, Te[ie++] = L);
      }
      return Te;
    }
    function Lo(T) {
      var D = -1, L = Array(T.size);
      return T.forEach(function(V) {
        L[++D] = V;
      }), L;
    }
    function Zp(T) {
      var D = -1, L = Array(T.size);
      return T.forEach(function(V) {
        L[++D] = [V, V];
      }), L;
    }
    function Jp(T, D, L) {
      for (var V = L - 1, ie = T.length; ++V < ie; )
        if (T[V] === D)
          return V;
      return -1;
    }
    function Qp(T, D, L) {
      for (var V = L + 1; V--; )
        if (T[V] === D)
          return V;
      return V;
    }
    function lr(T) {
      return ar(T) ? th(T) : Fp(T);
    }
    function $t(T) {
      return ar(T) ? nh(T) : Wp(T);
    }
    function $l(T) {
      for (var D = T.length; D-- && es.test(T.charAt(D)); )
        ;
      return D;
    }
    var eh = vs(Op);
    function th(T) {
      for (var D = cs.lastIndex = 0; cs.test(T); )
        ++D;
      return D;
    }
    function nh(T) {
      return T.match(cs) || [];
    }
    function rh(T) {
      return T.match(Cp) || [];
    }
    var oh = function T(D) {
      D = D == null ? rt : cr.defaults(rt.Object(), D, cr.pick(rt, Rp));
      var L = D.Array, V = D.Date, ie = D.Error, Te = D.Function, qe = D.Math, Ie = D.Object, bs = D.RegExp, ih = D.String, Lt = D.TypeError, Mo = L.prototype, sh = Te.prototype, ur = Ie.prototype, Do = D["__core-js_shared__"], ko = sh.toString, Ne = ur.hasOwnProperty, ah = 0, Ul = function() {
        var e = /[^.]+$/.exec(Do && Do.keys && Do.keys.IE_PROTO || "");
        return e ? "Symbol(src)_1." + e : "";
      }(), jo = ur.toString, lh = ko.call(Ie), ch = rt._, uh = bs(
        "^" + ko.call(Ne).replace(Ur, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), Fo = El ? D.Buffer : r, En = D.Symbol, Wo = D.Uint8Array, Hl = Fo ? Fo.allocUnsafe : r, Bo = Bl(Ie.getPrototypeOf, Ie), zl = Ie.create, Vl = ur.propertyIsEnumerable, $o = Mo.splice, Gl = En ? En.isConcatSpreadable : r, Vr = En ? En.iterator : r, zn = En ? En.toStringTag : r, Uo = function() {
        try {
          var e = qn(Ie, "defineProperty");
          return e({}, "", {}), e;
        } catch {
        }
      }(), fh = D.clearTimeout !== rt.clearTimeout && D.clearTimeout, dh = V && V.now !== rt.Date.now && V.now, ph = D.setTimeout !== rt.setTimeout && D.setTimeout, Ho = qe.ceil, zo = qe.floor, _s = Ie.getOwnPropertySymbols, hh = Fo ? Fo.isBuffer : r, Kl = D.isFinite, gh = Mo.join, vh = Bl(Ie.keys, Ie), Xe = qe.max, lt = qe.min, mh = V.now, xh = D.parseInt, Yl = qe.random, wh = Mo.reverse, Cs = qn(D, "DataView"), Gr = qn(D, "Map"), Ss = qn(D, "Promise"), fr = qn(D, "Set"), Kr = qn(D, "WeakMap"), Yr = qn(Ie, "create"), Vo = Kr && new Kr(), dr = {}, yh = Xn(Cs), bh = Xn(Gr), _h = Xn(Ss), Ch = Xn(fr), Sh = Xn(Kr), Go = En ? En.prototype : r, qr = Go ? Go.valueOf : r, ql = Go ? Go.toString : r;
      function p(e) {
        if (Ve(e) && !ae(e) && !(e instanceof ye)) {
          if (e instanceof Mt)
            return e;
          if (Ne.call(e, "__wrapped__"))
            return Xc(e);
        }
        return new Mt(e);
      }
      var pr = /* @__PURE__ */ function() {
        function e() {
        }
        return function(t) {
          if (!Ue(t))
            return {};
          if (zl)
            return zl(t);
          e.prototype = t;
          var o = new e();
          return e.prototype = r, o;
        };
      }();
      function Ko() {
      }
      function Mt(e, t) {
        this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = r;
      }
      p.templateSettings = {
        /**
         * Used to detect `data` property values to be HTML-escaped.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        escape: Ji,
        /**
         * Used to detect code to be evaluated.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        evaluate: So,
        /**
         * Used to detect `data` property values to inject.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        interpolate: Eo,
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
          _: p
        }
      }, p.prototype = Ko.prototype, p.prototype.constructor = p, Mt.prototype = pr(Ko.prototype), Mt.prototype.constructor = Mt;
      function ye(e) {
        this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Ee, this.__views__ = [];
      }
      function Eh() {
        var e = new ye(this.__wrapped__);
        return e.__actions__ = gt(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = gt(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = gt(this.__views__), e;
      }
      function Rh() {
        if (this.__filtered__) {
          var e = new ye(this);
          e.__dir__ = -1, e.__filtered__ = !0;
        } else
          e = this.clone(), e.__dir__ *= -1;
        return e;
      }
      function Ah() {
        var e = this.__wrapped__.value(), t = this.__dir__, o = ae(e), a = t < 0, c = o ? e.length : 0, h = Wg(0, c, this.__views__), x = h.start, S = h.end, P = S - x, k = a ? S : x - 1, j = this.__iteratees__, F = j.length, H = 0, K = lt(P, this.__takeCount__);
        if (!o || !a && c == P && K == P)
          return wc(e, this.__actions__);
        var J = [];
        e:
          for (; P-- && H < K; ) {
            k += t;
            for (var fe = -1, Q = e[k]; ++fe < F; ) {
              var ge = j[fe], _e = ge.iteratee, Et = ge.type, pt = _e(Q);
              if (Et == Se)
                Q = pt;
              else if (!pt) {
                if (Et == ne)
                  continue e;
                break e;
              }
            }
            J[H++] = Q;
          }
        return J;
      }
      ye.prototype = pr(Ko.prototype), ye.prototype.constructor = ye;
      function Vn(e) {
        var t = -1, o = e == null ? 0 : e.length;
        for (this.clear(); ++t < o; ) {
          var a = e[t];
          this.set(a[0], a[1]);
        }
      }
      function Th() {
        this.__data__ = Yr ? Yr(null) : {}, this.size = 0;
      }
      function Ph(e) {
        var t = this.has(e) && delete this.__data__[e];
        return this.size -= t ? 1 : 0, t;
      }
      function Oh(e) {
        var t = this.__data__;
        if (Yr) {
          var o = t[e];
          return o === g ? r : o;
        }
        return Ne.call(t, e) ? t[e] : r;
      }
      function Nh(e) {
        var t = this.__data__;
        return Yr ? t[e] !== r : Ne.call(t, e);
      }
      function Ih(e, t) {
        var o = this.__data__;
        return this.size += this.has(e) ? 0 : 1, o[e] = Yr && t === r ? g : t, this;
      }
      Vn.prototype.clear = Th, Vn.prototype.delete = Ph, Vn.prototype.get = Oh, Vn.prototype.has = Nh, Vn.prototype.set = Ih;
      function on(e) {
        var t = -1, o = e == null ? 0 : e.length;
        for (this.clear(); ++t < o; ) {
          var a = e[t];
          this.set(a[0], a[1]);
        }
      }
      function Lh() {
        this.__data__ = [], this.size = 0;
      }
      function Mh(e) {
        var t = this.__data__, o = Yo(t, e);
        if (o < 0)
          return !1;
        var a = t.length - 1;
        return o == a ? t.pop() : $o.call(t, o, 1), --this.size, !0;
      }
      function Dh(e) {
        var t = this.__data__, o = Yo(t, e);
        return o < 0 ? r : t[o][1];
      }
      function kh(e) {
        return Yo(this.__data__, e) > -1;
      }
      function jh(e, t) {
        var o = this.__data__, a = Yo(o, e);
        return a < 0 ? (++this.size, o.push([e, t])) : o[a][1] = t, this;
      }
      on.prototype.clear = Lh, on.prototype.delete = Mh, on.prototype.get = Dh, on.prototype.has = kh, on.prototype.set = jh;
      function sn(e) {
        var t = -1, o = e == null ? 0 : e.length;
        for (this.clear(); ++t < o; ) {
          var a = e[t];
          this.set(a[0], a[1]);
        }
      }
      function Fh() {
        this.size = 0, this.__data__ = {
          hash: new Vn(),
          map: new (Gr || on)(),
          string: new Vn()
        };
      }
      function Wh(e) {
        var t = si(this, e).delete(e);
        return this.size -= t ? 1 : 0, t;
      }
      function Bh(e) {
        return si(this, e).get(e);
      }
      function $h(e) {
        return si(this, e).has(e);
      }
      function Uh(e, t) {
        var o = si(this, e), a = o.size;
        return o.set(e, t), this.size += o.size == a ? 0 : 1, this;
      }
      sn.prototype.clear = Fh, sn.prototype.delete = Wh, sn.prototype.get = Bh, sn.prototype.has = $h, sn.prototype.set = Uh;
      function Gn(e) {
        var t = -1, o = e == null ? 0 : e.length;
        for (this.__data__ = new sn(); ++t < o; )
          this.add(e[t]);
      }
      function Hh(e) {
        return this.__data__.set(e, g), this;
      }
      function zh(e) {
        return this.__data__.has(e);
      }
      Gn.prototype.add = Gn.prototype.push = Hh, Gn.prototype.has = zh;
      function Ut(e) {
        var t = this.__data__ = new on(e);
        this.size = t.size;
      }
      function Vh() {
        this.__data__ = new on(), this.size = 0;
      }
      function Gh(e) {
        var t = this.__data__, o = t.delete(e);
        return this.size = t.size, o;
      }
      function Kh(e) {
        return this.__data__.get(e);
      }
      function Yh(e) {
        return this.__data__.has(e);
      }
      function qh(e, t) {
        var o = this.__data__;
        if (o instanceof on) {
          var a = o.__data__;
          if (!Gr || a.length < l - 1)
            return a.push([e, t]), this.size = ++o.size, this;
          o = this.__data__ = new sn(a);
        }
        return o.set(e, t), this.size = o.size, this;
      }
      Ut.prototype.clear = Vh, Ut.prototype.delete = Gh, Ut.prototype.get = Kh, Ut.prototype.has = Yh, Ut.prototype.set = qh;
      function Xl(e, t) {
        var o = ae(e), a = !o && Zn(e), c = !o && !a && On(e), h = !o && !a && !c && mr(e), x = o || a || c || h, S = x ? xs(e.length, ih) : [], P = S.length;
        for (var k in e)
          (t || Ne.call(e, k)) && !(x && // Safari 9 has enumerable `arguments.length` in strict mode.
          (k == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          c && (k == "offset" || k == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          h && (k == "buffer" || k == "byteLength" || k == "byteOffset") || // Skip index properties.
          un(k, P))) && S.push(k);
        return S;
      }
      function Zl(e) {
        var t = e.length;
        return t ? e[Ds(0, t - 1)] : r;
      }
      function Xh(e, t) {
        return ai(gt(e), Kn(t, 0, e.length));
      }
      function Zh(e) {
        return ai(gt(e));
      }
      function Es(e, t, o) {
        (o !== r && !Ht(e[t], o) || o === r && !(t in e)) && an(e, t, o);
      }
      function Xr(e, t, o) {
        var a = e[t];
        (!(Ne.call(e, t) && Ht(a, o)) || o === r && !(t in e)) && an(e, t, o);
      }
      function Yo(e, t) {
        for (var o = e.length; o--; )
          if (Ht(e[o][0], t))
            return o;
        return -1;
      }
      function Jh(e, t, o, a) {
        return Rn(e, function(c, h, x) {
          t(a, c, o(c), x);
        }), a;
      }
      function Jl(e, t) {
        return e && Zt(t, Qe(t), e);
      }
      function Qh(e, t) {
        return e && Zt(t, mt(t), e);
      }
      function an(e, t, o) {
        t == "__proto__" && Uo ? Uo(e, t, {
          configurable: !0,
          enumerable: !0,
          value: o,
          writable: !0
        }) : e[t] = o;
      }
      function Rs(e, t) {
        for (var o = -1, a = t.length, c = L(a), h = e == null; ++o < a; )
          c[o] = h ? r : sa(e, t[o]);
        return c;
      }
      function Kn(e, t, o) {
        return e === e && (o !== r && (e = e <= o ? e : o), t !== r && (e = e >= t ? e : t)), e;
      }
      function Dt(e, t, o, a, c, h) {
        var x, S = t & _, P = t & E, k = t & R;
        if (o && (x = c ? o(e, a, c, h) : o(e)), x !== r)
          return x;
        if (!Ue(e))
          return e;
        var j = ae(e);
        if (j) {
          if (x = $g(e), !S)
            return gt(e, x);
        } else {
          var F = ct(e), H = F == xe || F == Ze;
          if (On(e))
            return _c(e, S);
          if (F == Je || F == ut || H && !c) {
            if (x = P || H ? {} : $c(e), !S)
              return P ? Og(e, Qh(x, e)) : Pg(e, Jl(x, e));
          } else {
            if (!Me[F])
              return c ? e : {};
            x = Ug(e, F, S);
          }
        }
        h || (h = new Ut());
        var K = h.get(e);
        if (K)
          return K;
        h.set(e, x), vu(e) ? e.forEach(function(Q) {
          x.add(Dt(Q, t, o, Q, e, h));
        }) : hu(e) && e.forEach(function(Q, ge) {
          x.set(ge, Dt(Q, t, o, ge, e, h));
        });
        var J = k ? P ? Gs : Vs : P ? mt : Qe, fe = j ? r : J(e);
        return It(fe || e, function(Q, ge) {
          fe && (ge = Q, Q = e[ge]), Xr(x, ge, Dt(Q, t, o, ge, e, h));
        }), x;
      }
      function eg(e) {
        var t = Qe(e);
        return function(o) {
          return Ql(o, e, t);
        };
      }
      function Ql(e, t, o) {
        var a = o.length;
        if (e == null)
          return !a;
        for (e = Ie(e); a--; ) {
          var c = o[a], h = t[c], x = e[c];
          if (x === r && !(c in e) || !h(x))
            return !1;
        }
        return !0;
      }
      function ec(e, t, o) {
        if (typeof e != "function")
          throw new Lt(f);
        return ro(function() {
          e.apply(r, o);
        }, t);
      }
      function Zr(e, t, o, a) {
        var c = -1, h = No, x = !0, S = e.length, P = [], k = t.length;
        if (!S)
          return P;
        o && (t = Be(t, _t(o))), a ? (h = ds, x = !1) : t.length >= l && (h = zr, x = !1, t = new Gn(t));
        e:
          for (; ++c < S; ) {
            var j = e[c], F = o == null ? j : o(j);
            if (j = a || j !== 0 ? j : 0, x && F === F) {
              for (var H = k; H--; )
                if (t[H] === F)
                  continue e;
              P.push(j);
            } else
              h(t, F, a) || P.push(j);
          }
        return P;
      }
      var Rn = Ac(Xt), tc = Ac(Ts, !0);
      function tg(e, t) {
        var o = !0;
        return Rn(e, function(a, c, h) {
          return o = !!t(a, c, h), o;
        }), o;
      }
      function qo(e, t, o) {
        for (var a = -1, c = e.length; ++a < c; ) {
          var h = e[a], x = t(h);
          if (x != null && (S === r ? x === x && !St(x) : o(x, S)))
            var S = x, P = h;
        }
        return P;
      }
      function ng(e, t, o, a) {
        var c = e.length;
        for (o = le(o), o < 0 && (o = -o > c ? 0 : c + o), a = a === r || a > c ? c : le(a), a < 0 && (a += c), a = o > a ? 0 : xu(a); o < a; )
          e[o++] = t;
        return e;
      }
      function nc(e, t) {
        var o = [];
        return Rn(e, function(a, c, h) {
          t(a, c, h) && o.push(a);
        }), o;
      }
      function ot(e, t, o, a, c) {
        var h = -1, x = e.length;
        for (o || (o = zg), c || (c = []); ++h < x; ) {
          var S = e[h];
          t > 0 && o(S) ? t > 1 ? ot(S, t - 1, o, a, c) : Cn(c, S) : a || (c[c.length] = S);
        }
        return c;
      }
      var As = Tc(), rc = Tc(!0);
      function Xt(e, t) {
        return e && As(e, t, Qe);
      }
      function Ts(e, t) {
        return e && rc(e, t, Qe);
      }
      function Xo(e, t) {
        return _n(t, function(o) {
          return fn(e[o]);
        });
      }
      function Yn(e, t) {
        t = Tn(t, e);
        for (var o = 0, a = t.length; e != null && o < a; )
          e = e[Jt(t[o++])];
        return o && o == a ? e : r;
      }
      function oc(e, t, o) {
        var a = t(e);
        return ae(e) ? a : Cn(a, o(e));
      }
      function ft(e) {
        return e == null ? e === r ? Xi : wt : zn && zn in Ie(e) ? Fg(e) : Zg(e);
      }
      function Ps(e, t) {
        return e > t;
      }
      function rg(e, t) {
        return e != null && Ne.call(e, t);
      }
      function og(e, t) {
        return e != null && t in Ie(e);
      }
      function ig(e, t, o) {
        return e >= lt(t, o) && e < Xe(t, o);
      }
      function Os(e, t, o) {
        for (var a = o ? ds : No, c = e[0].length, h = e.length, x = h, S = L(h), P = 1 / 0, k = []; x--; ) {
          var j = e[x];
          x && t && (j = Be(j, _t(t))), P = lt(j.length, P), S[x] = !o && (t || c >= 120 && j.length >= 120) ? new Gn(x && j) : r;
        }
        j = e[0];
        var F = -1, H = S[0];
        e:
          for (; ++F < c && k.length < P; ) {
            var K = j[F], J = t ? t(K) : K;
            if (K = o || K !== 0 ? K : 0, !(H ? zr(H, J) : a(k, J, o))) {
              for (x = h; --x; ) {
                var fe = S[x];
                if (!(fe ? zr(fe, J) : a(e[x], J, o)))
                  continue e;
              }
              H && H.push(J), k.push(K);
            }
          }
        return k;
      }
      function sg(e, t, o, a) {
        return Xt(e, function(c, h, x) {
          t(a, o(c), h, x);
        }), a;
      }
      function Jr(e, t, o) {
        t = Tn(t, e), e = Vc(e, t);
        var a = e == null ? e : e[Jt(jt(t))];
        return a == null ? r : bt(a, e, o);
      }
      function ic(e) {
        return Ve(e) && ft(e) == ut;
      }
      function ag(e) {
        return Ve(e) && ft(e) == Bt;
      }
      function lg(e) {
        return Ve(e) && ft(e) == Le;
      }
      function Qr(e, t, o, a, c) {
        return e === t ? !0 : e == null || t == null || !Ve(e) && !Ve(t) ? e !== e && t !== t : cg(e, t, o, a, Qr, c);
      }
      function cg(e, t, o, a, c, h) {
        var x = ae(e), S = ae(t), P = x ? it : ct(e), k = S ? it : ct(t);
        P = P == ut ? Je : P, k = k == ut ? Je : k;
        var j = P == Je, F = k == Je, H = P == k;
        if (H && On(e)) {
          if (!On(t))
            return !1;
          x = !0, j = !1;
        }
        if (H && !j)
          return h || (h = new Ut()), x || mr(e) ? Fc(e, t, o, a, c, h) : kg(e, t, P, o, a, c, h);
        if (!(o & O)) {
          var K = j && Ne.call(e, "__wrapped__"), J = F && Ne.call(t, "__wrapped__");
          if (K || J) {
            var fe = K ? e.value() : e, Q = J ? t.value() : t;
            return h || (h = new Ut()), c(fe, Q, o, a, h);
          }
        }
        return H ? (h || (h = new Ut()), jg(e, t, o, a, c, h)) : !1;
      }
      function ug(e) {
        return Ve(e) && ct(e) == We;
      }
      function Ns(e, t, o, a) {
        var c = o.length, h = c, x = !a;
        if (e == null)
          return !h;
        for (e = Ie(e); c--; ) {
          var S = o[c];
          if (x && S[2] ? S[1] !== e[S[0]] : !(S[0] in e))
            return !1;
        }
        for (; ++c < h; ) {
          S = o[c];
          var P = S[0], k = e[P], j = S[1];
          if (x && S[2]) {
            if (k === r && !(P in e))
              return !1;
          } else {
            var F = new Ut();
            if (a)
              var H = a(k, j, P, e, t, F);
            if (!(H === r ? Qr(j, k, O | y, a, F) : H))
              return !1;
          }
        }
        return !0;
      }
      function sc(e) {
        if (!Ue(e) || Gg(e))
          return !1;
        var t = fn(e) ? uh : pe;
        return t.test(Xn(e));
      }
      function fg(e) {
        return Ve(e) && ft(e) == $n;
      }
      function dg(e) {
        return Ve(e) && ct(e) == yt;
      }
      function pg(e) {
        return Ve(e) && pi(e.length) && !!je[ft(e)];
      }
      function ac(e) {
        return typeof e == "function" ? e : e == null ? xt : typeof e == "object" ? ae(e) ? uc(e[0], e[1]) : cc(e) : Pu(e);
      }
      function Is(e) {
        if (!no(e))
          return vh(e);
        var t = [];
        for (var o in Ie(e))
          Ne.call(e, o) && o != "constructor" && t.push(o);
        return t;
      }
      function hg(e) {
        if (!Ue(e))
          return Xg(e);
        var t = no(e), o = [];
        for (var a in e)
          a == "constructor" && (t || !Ne.call(e, a)) || o.push(a);
        return o;
      }
      function Ls(e, t) {
        return e < t;
      }
      function lc(e, t) {
        var o = -1, a = vt(e) ? L(e.length) : [];
        return Rn(e, function(c, h, x) {
          a[++o] = t(c, h, x);
        }), a;
      }
      function cc(e) {
        var t = Ys(e);
        return t.length == 1 && t[0][2] ? Hc(t[0][0], t[0][1]) : function(o) {
          return o === e || Ns(o, e, t);
        };
      }
      function uc(e, t) {
        return Xs(e) && Uc(t) ? Hc(Jt(e), t) : function(o) {
          var a = sa(o, e);
          return a === r && a === t ? aa(o, e) : Qr(t, a, O | y);
        };
      }
      function Zo(e, t, o, a, c) {
        e !== t && As(t, function(h, x) {
          if (c || (c = new Ut()), Ue(h))
            gg(e, t, x, o, Zo, a, c);
          else {
            var S = a ? a(Js(e, x), h, x + "", e, t, c) : r;
            S === r && (S = h), Es(e, x, S);
          }
        }, mt);
      }
      function gg(e, t, o, a, c, h, x) {
        var S = Js(e, o), P = Js(t, o), k = x.get(P);
        if (k) {
          Es(e, o, k);
          return;
        }
        var j = h ? h(S, P, o + "", e, t, x) : r, F = j === r;
        if (F) {
          var H = ae(P), K = !H && On(P), J = !H && !K && mr(P);
          j = P, H || K || J ? ae(S) ? j = S : Ge(S) ? j = gt(S) : K ? (F = !1, j = _c(P, !0)) : J ? (F = !1, j = Cc(P, !0)) : j = [] : oo(P) || Zn(P) ? (j = S, Zn(S) ? j = wu(S) : (!Ue(S) || fn(S)) && (j = $c(P))) : F = !1;
        }
        F && (x.set(P, j), c(j, P, a, h, x), x.delete(P)), Es(e, o, j);
      }
      function fc(e, t) {
        var o = e.length;
        if (o)
          return t += t < 0 ? o : 0, un(t, o) ? e[t] : r;
      }
      function dc(e, t, o) {
        t.length ? t = Be(t, function(h) {
          return ae(h) ? function(x) {
            return Yn(x, h.length === 1 ? h[0] : h);
          } : h;
        }) : t = [xt];
        var a = -1;
        t = Be(t, _t(X()));
        var c = lc(e, function(h, x, S) {
          var P = Be(t, function(k) {
            return k(h);
          });
          return { criteria: P, index: ++a, value: h };
        });
        return Up(c, function(h, x) {
          return Tg(h, x, o);
        });
      }
      function vg(e, t) {
        return pc(e, t, function(o, a) {
          return aa(e, a);
        });
      }
      function pc(e, t, o) {
        for (var a = -1, c = t.length, h = {}; ++a < c; ) {
          var x = t[a], S = Yn(e, x);
          o(S, x) && eo(h, Tn(x, e), S);
        }
        return h;
      }
      function mg(e) {
        return function(t) {
          return Yn(t, e);
        };
      }
      function Ms(e, t, o, a) {
        var c = a ? $p : sr, h = -1, x = t.length, S = e;
        for (e === t && (t = gt(t)), o && (S = Be(e, _t(o))); ++h < x; )
          for (var P = 0, k = t[h], j = o ? o(k) : k; (P = c(S, j, P, a)) > -1; )
            S !== e && $o.call(S, P, 1), $o.call(e, P, 1);
        return e;
      }
      function hc(e, t) {
        for (var o = e ? t.length : 0, a = o - 1; o--; ) {
          var c = t[o];
          if (o == a || c !== h) {
            var h = c;
            un(c) ? $o.call(e, c, 1) : Fs(e, c);
          }
        }
        return e;
      }
      function Ds(e, t) {
        return e + zo(Yl() * (t - e + 1));
      }
      function xg(e, t, o, a) {
        for (var c = -1, h = Xe(Ho((t - e) / (o || 1)), 0), x = L(h); h--; )
          x[a ? h : ++c] = e, e += o;
        return x;
      }
      function ks(e, t) {
        var o = "";
        if (!e || t < 1 || t > Y)
          return o;
        do
          t % 2 && (o += e), t = zo(t / 2), t && (e += e);
        while (t);
        return o;
      }
      function de(e, t) {
        return Qs(zc(e, t, xt), e + "");
      }
      function wg(e) {
        return Zl(xr(e));
      }
      function yg(e, t) {
        var o = xr(e);
        return ai(o, Kn(t, 0, o.length));
      }
      function eo(e, t, o, a) {
        if (!Ue(e))
          return e;
        t = Tn(t, e);
        for (var c = -1, h = t.length, x = h - 1, S = e; S != null && ++c < h; ) {
          var P = Jt(t[c]), k = o;
          if (P === "__proto__" || P === "constructor" || P === "prototype")
            return e;
          if (c != x) {
            var j = S[P];
            k = a ? a(j, P, S) : r, k === r && (k = Ue(j) ? j : un(t[c + 1]) ? [] : {});
          }
          Xr(S, P, k), S = S[P];
        }
        return e;
      }
      var gc = Vo ? function(e, t) {
        return Vo.set(e, t), e;
      } : xt, bg = Uo ? function(e, t) {
        return Uo(e, "toString", {
          configurable: !0,
          enumerable: !1,
          value: ca(t),
          writable: !0
        });
      } : xt;
      function _g(e) {
        return ai(xr(e));
      }
      function kt(e, t, o) {
        var a = -1, c = e.length;
        t < 0 && (t = -t > c ? 0 : c + t), o = o > c ? c : o, o < 0 && (o += c), c = t > o ? 0 : o - t >>> 0, t >>>= 0;
        for (var h = L(c); ++a < c; )
          h[a] = e[a + t];
        return h;
      }
      function Cg(e, t) {
        var o;
        return Rn(e, function(a, c, h) {
          return o = t(a, c, h), !o;
        }), !!o;
      }
      function Jo(e, t, o) {
        var a = 0, c = e == null ? a : e.length;
        if (typeof t == "number" && t === t && c <= qt) {
          for (; a < c; ) {
            var h = a + c >>> 1, x = e[h];
            x !== null && !St(x) && (o ? x <= t : x < t) ? a = h + 1 : c = h;
          }
          return c;
        }
        return js(e, t, xt, o);
      }
      function js(e, t, o, a) {
        var c = 0, h = e == null ? 0 : e.length;
        if (h === 0)
          return 0;
        t = o(t);
        for (var x = t !== t, S = t === null, P = St(t), k = t === r; c < h; ) {
          var j = zo((c + h) / 2), F = o(e[j]), H = F !== r, K = F === null, J = F === F, fe = St(F);
          if (x)
            var Q = a || J;
          else
            k ? Q = J && (a || H) : S ? Q = J && H && (a || !K) : P ? Q = J && H && !K && (a || !fe) : K || fe ? Q = !1 : Q = a ? F <= t : F < t;
          Q ? c = j + 1 : h = j;
        }
        return lt(h, Yt);
      }
      function vc(e, t) {
        for (var o = -1, a = e.length, c = 0, h = []; ++o < a; ) {
          var x = e[o], S = t ? t(x) : x;
          if (!o || !Ht(S, P)) {
            var P = S;
            h[c++] = x === 0 ? 0 : x;
          }
        }
        return h;
      }
      function mc(e) {
        return typeof e == "number" ? e : St(e) ? ke : +e;
      }
      function Ct(e) {
        if (typeof e == "string")
          return e;
        if (ae(e))
          return Be(e, Ct) + "";
        if (St(e))
          return ql ? ql.call(e) : "";
        var t = e + "";
        return t == "0" && 1 / e == -se ? "-0" : t;
      }
      function An(e, t, o) {
        var a = -1, c = No, h = e.length, x = !0, S = [], P = S;
        if (o)
          x = !1, c = ds;
        else if (h >= l) {
          var k = t ? null : Mg(e);
          if (k)
            return Lo(k);
          x = !1, c = zr, P = new Gn();
        } else
          P = t ? [] : S;
        e:
          for (; ++a < h; ) {
            var j = e[a], F = t ? t(j) : j;
            if (j = o || j !== 0 ? j : 0, x && F === F) {
              for (var H = P.length; H--; )
                if (P[H] === F)
                  continue e;
              t && P.push(F), S.push(j);
            } else
              c(P, F, o) || (P !== S && P.push(F), S.push(j));
          }
        return S;
      }
      function Fs(e, t) {
        return t = Tn(t, e), e = Vc(e, t), e == null || delete e[Jt(jt(t))];
      }
      function xc(e, t, o, a) {
        return eo(e, t, o(Yn(e, t)), a);
      }
      function Qo(e, t, o, a) {
        for (var c = e.length, h = a ? c : -1; (a ? h-- : ++h < c) && t(e[h], h, e); )
          ;
        return o ? kt(e, a ? 0 : h, a ? h + 1 : c) : kt(e, a ? h + 1 : 0, a ? c : h);
      }
      function wc(e, t) {
        var o = e;
        return o instanceof ye && (o = o.value()), ps(t, function(a, c) {
          return c.func.apply(c.thisArg, Cn([a], c.args));
        }, o);
      }
      function Ws(e, t, o) {
        var a = e.length;
        if (a < 2)
          return a ? An(e[0]) : [];
        for (var c = -1, h = L(a); ++c < a; )
          for (var x = e[c], S = -1; ++S < a; )
            S != c && (h[c] = Zr(h[c] || x, e[S], t, o));
        return An(ot(h, 1), t, o);
      }
      function yc(e, t, o) {
        for (var a = -1, c = e.length, h = t.length, x = {}; ++a < c; ) {
          var S = a < h ? t[a] : r;
          o(x, e[a], S);
        }
        return x;
      }
      function Bs(e) {
        return Ge(e) ? e : [];
      }
      function $s(e) {
        return typeof e == "function" ? e : xt;
      }
      function Tn(e, t) {
        return ae(e) ? e : Xs(e, t) ? [e] : qc(Pe(e));
      }
      var Sg = de;
      function Pn(e, t, o) {
        var a = e.length;
        return o = o === r ? a : o, !t && o >= a ? e : kt(e, t, o);
      }
      var bc = fh || function(e) {
        return rt.clearTimeout(e);
      };
      function _c(e, t) {
        if (t)
          return e.slice();
        var o = e.length, a = Hl ? Hl(o) : new e.constructor(o);
        return e.copy(a), a;
      }
      function Us(e) {
        var t = new e.constructor(e.byteLength);
        return new Wo(t).set(new Wo(e)), t;
      }
      function Eg(e, t) {
        var o = t ? Us(e.buffer) : e.buffer;
        return new e.constructor(o, e.byteOffset, e.byteLength);
      }
      function Rg(e) {
        var t = new e.constructor(e.source, Ae.exec(e));
        return t.lastIndex = e.lastIndex, t;
      }
      function Ag(e) {
        return qr ? Ie(qr.call(e)) : {};
      }
      function Cc(e, t) {
        var o = t ? Us(e.buffer) : e.buffer;
        return new e.constructor(o, e.byteOffset, e.length);
      }
      function Sc(e, t) {
        if (e !== t) {
          var o = e !== r, a = e === null, c = e === e, h = St(e), x = t !== r, S = t === null, P = t === t, k = St(t);
          if (!S && !k && !h && e > t || h && x && P && !S && !k || a && x && P || !o && P || !c)
            return 1;
          if (!a && !h && !k && e < t || k && o && c && !a && !h || S && o && c || !x && c || !P)
            return -1;
        }
        return 0;
      }
      function Tg(e, t, o) {
        for (var a = -1, c = e.criteria, h = t.criteria, x = c.length, S = o.length; ++a < x; ) {
          var P = Sc(c[a], h[a]);
          if (P) {
            if (a >= S)
              return P;
            var k = o[a];
            return P * (k == "desc" ? -1 : 1);
          }
        }
        return e.index - t.index;
      }
      function Ec(e, t, o, a) {
        for (var c = -1, h = e.length, x = o.length, S = -1, P = t.length, k = Xe(h - x, 0), j = L(P + k), F = !a; ++S < P; )
          j[S] = t[S];
        for (; ++c < x; )
          (F || c < h) && (j[o[c]] = e[c]);
        for (; k--; )
          j[S++] = e[c++];
        return j;
      }
      function Rc(e, t, o, a) {
        for (var c = -1, h = e.length, x = -1, S = o.length, P = -1, k = t.length, j = Xe(h - S, 0), F = L(j + k), H = !a; ++c < j; )
          F[c] = e[c];
        for (var K = c; ++P < k; )
          F[K + P] = t[P];
        for (; ++x < S; )
          (H || c < h) && (F[K + o[x]] = e[c++]);
        return F;
      }
      function gt(e, t) {
        var o = -1, a = e.length;
        for (t || (t = L(a)); ++o < a; )
          t[o] = e[o];
        return t;
      }
      function Zt(e, t, o, a) {
        var c = !o;
        o || (o = {});
        for (var h = -1, x = t.length; ++h < x; ) {
          var S = t[h], P = a ? a(o[S], e[S], S, o, e) : r;
          P === r && (P = e[S]), c ? an(o, S, P) : Xr(o, S, P);
        }
        return o;
      }
      function Pg(e, t) {
        return Zt(e, qs(e), t);
      }
      function Og(e, t) {
        return Zt(e, Wc(e), t);
      }
      function ei(e, t) {
        return function(o, a) {
          var c = ae(o) ? Dp : Jh, h = t ? t() : {};
          return c(o, e, X(a, 2), h);
        };
      }
      function hr(e) {
        return de(function(t, o) {
          var a = -1, c = o.length, h = c > 1 ? o[c - 1] : r, x = c > 2 ? o[2] : r;
          for (h = e.length > 3 && typeof h == "function" ? (c--, h) : r, x && dt(o[0], o[1], x) && (h = c < 3 ? r : h, c = 1), t = Ie(t); ++a < c; ) {
            var S = o[a];
            S && e(t, S, a, h);
          }
          return t;
        });
      }
      function Ac(e, t) {
        return function(o, a) {
          if (o == null)
            return o;
          if (!vt(o))
            return e(o, a);
          for (var c = o.length, h = t ? c : -1, x = Ie(o); (t ? h-- : ++h < c) && a(x[h], h, x) !== !1; )
            ;
          return o;
        };
      }
      function Tc(e) {
        return function(t, o, a) {
          for (var c = -1, h = Ie(t), x = a(t), S = x.length; S--; ) {
            var P = x[e ? S : ++c];
            if (o(h[P], P, h) === !1)
              break;
          }
          return t;
        };
      }
      function Ng(e, t, o) {
        var a = t & A, c = to(e);
        function h() {
          var x = this && this !== rt && this instanceof h ? c : e;
          return x.apply(a ? o : this, arguments);
        }
        return h;
      }
      function Pc(e) {
        return function(t) {
          t = Pe(t);
          var o = ar(t) ? $t(t) : r, a = o ? o[0] : t.charAt(0), c = o ? Pn(o, 1).join("") : t.slice(1);
          return a[e]() + c;
        };
      }
      function gr(e) {
        return function(t) {
          return ps(Au(Ru(t).replace(bp, "")), e, "");
        };
      }
      function to(e) {
        return function() {
          var t = arguments;
          switch (t.length) {
            case 0:
              return new e();
            case 1:
              return new e(t[0]);
            case 2:
              return new e(t[0], t[1]);
            case 3:
              return new e(t[0], t[1], t[2]);
            case 4:
              return new e(t[0], t[1], t[2], t[3]);
            case 5:
              return new e(t[0], t[1], t[2], t[3], t[4]);
            case 6:
              return new e(t[0], t[1], t[2], t[3], t[4], t[5]);
            case 7:
              return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6]);
          }
          var o = pr(e.prototype), a = e.apply(o, t);
          return Ue(a) ? a : o;
        };
      }
      function Ig(e, t, o) {
        var a = to(e);
        function c() {
          for (var h = arguments.length, x = L(h), S = h, P = vr(c); S--; )
            x[S] = arguments[S];
          var k = h < 3 && x[0] !== P && x[h - 1] !== P ? [] : Sn(x, P);
          if (h -= k.length, h < o)
            return Mc(
              e,
              t,
              ti,
              c.placeholder,
              r,
              x,
              k,
              r,
              r,
              o - h
            );
          var j = this && this !== rt && this instanceof c ? a : e;
          return bt(j, this, x);
        }
        return c;
      }
      function Oc(e) {
        return function(t, o, a) {
          var c = Ie(t);
          if (!vt(t)) {
            var h = X(o, 3);
            t = Qe(t), o = function(S) {
              return h(c[S], S, c);
            };
          }
          var x = e(t, o, a);
          return x > -1 ? c[h ? t[x] : x] : r;
        };
      }
      function Nc(e) {
        return cn(function(t) {
          var o = t.length, a = o, c = Mt.prototype.thru;
          for (e && t.reverse(); a--; ) {
            var h = t[a];
            if (typeof h != "function")
              throw new Lt(f);
            if (c && !x && ii(h) == "wrapper")
              var x = new Mt([], !0);
          }
          for (a = x ? a : o; ++a < o; ) {
            h = t[a];
            var S = ii(h), P = S == "wrapper" ? Ks(h) : r;
            P && Zs(P[0]) && P[1] == (U | M | $ | ee) && !P[4].length && P[9] == 1 ? x = x[ii(P[0])].apply(x, P[3]) : x = h.length == 1 && Zs(h) ? x[S]() : x.thru(h);
          }
          return function() {
            var k = arguments, j = k[0];
            if (x && k.length == 1 && ae(j))
              return x.plant(j).value();
            for (var F = 0, H = o ? t[F].apply(this, k) : j; ++F < o; )
              H = t[F].call(this, H);
            return H;
          };
        });
      }
      function ti(e, t, o, a, c, h, x, S, P, k) {
        var j = t & U, F = t & A, H = t & I, K = t & (M | W), J = t & ue, fe = H ? r : to(e);
        function Q() {
          for (var ge = arguments.length, _e = L(ge), Et = ge; Et--; )
            _e[Et] = arguments[Et];
          if (K)
            var pt = vr(Q), Rt = zp(_e, pt);
          if (a && (_e = Ec(_e, a, c, K)), h && (_e = Rc(_e, h, x, K)), ge -= Rt, K && ge < k) {
            var Ke = Sn(_e, pt);
            return Mc(
              e,
              t,
              ti,
              Q.placeholder,
              o,
              _e,
              Ke,
              S,
              P,
              k - ge
            );
          }
          var zt = F ? o : this, pn = H ? zt[e] : e;
          return ge = _e.length, S ? _e = Jg(_e, S) : J && ge > 1 && _e.reverse(), j && P < ge && (_e.length = P), this && this !== rt && this instanceof Q && (pn = fe || to(pn)), pn.apply(zt, _e);
        }
        return Q;
      }
      function Ic(e, t) {
        return function(o, a) {
          return sg(o, e, t(a), {});
        };
      }
      function ni(e, t) {
        return function(o, a) {
          var c;
          if (o === r && a === r)
            return t;
          if (o !== r && (c = o), a !== r) {
            if (c === r)
              return a;
            typeof o == "string" || typeof a == "string" ? (o = Ct(o), a = Ct(a)) : (o = mc(o), a = mc(a)), c = e(o, a);
          }
          return c;
        };
      }
      function Hs(e) {
        return cn(function(t) {
          return t = Be(t, _t(X())), de(function(o) {
            var a = this;
            return e(t, function(c) {
              return bt(c, a, o);
            });
          });
        });
      }
      function ri(e, t) {
        t = t === r ? " " : Ct(t);
        var o = t.length;
        if (o < 2)
          return o ? ks(t, e) : t;
        var a = ks(t, Ho(e / lr(t)));
        return ar(t) ? Pn($t(a), 0, e).join("") : a.slice(0, e);
      }
      function Lg(e, t, o, a) {
        var c = t & A, h = to(e);
        function x() {
          for (var S = -1, P = arguments.length, k = -1, j = a.length, F = L(j + P), H = this && this !== rt && this instanceof x ? h : e; ++k < j; )
            F[k] = a[k];
          for (; P--; )
            F[k++] = arguments[++S];
          return bt(H, c ? o : this, F);
        }
        return x;
      }
      function Lc(e) {
        return function(t, o, a) {
          return a && typeof a != "number" && dt(t, o, a) && (o = a = r), t = dn(t), o === r ? (o = t, t = 0) : o = dn(o), a = a === r ? t < o ? 1 : -1 : dn(a), xg(t, o, a, e);
        };
      }
      function oi(e) {
        return function(t, o) {
          return typeof t == "string" && typeof o == "string" || (t = Ft(t), o = Ft(o)), e(t, o);
        };
      }
      function Mc(e, t, o, a, c, h, x, S, P, k) {
        var j = t & M, F = j ? x : r, H = j ? r : x, K = j ? h : r, J = j ? r : h;
        t |= j ? $ : G, t &= ~(j ? G : $), t & N || (t &= ~(A | I));
        var fe = [
          e,
          t,
          c,
          K,
          F,
          J,
          H,
          S,
          P,
          k
        ], Q = o.apply(r, fe);
        return Zs(e) && Gc(Q, fe), Q.placeholder = a, Kc(Q, e, t);
      }
      function zs(e) {
        var t = qe[e];
        return function(o, a) {
          if (o = Ft(o), a = a == null ? 0 : lt(le(a), 292), a && Kl(o)) {
            var c = (Pe(o) + "e").split("e"), h = t(c[0] + "e" + (+c[1] + a));
            return c = (Pe(h) + "e").split("e"), +(c[0] + "e" + (+c[1] - a));
          }
          return t(o);
        };
      }
      var Mg = fr && 1 / Lo(new fr([, -0]))[1] == se ? function(e) {
        return new fr(e);
      } : da;
      function Dc(e) {
        return function(t) {
          var o = ct(t);
          return o == We ? ys(t) : o == yt ? Zp(t) : Hp(t, e(t));
        };
      }
      function ln(e, t, o, a, c, h, x, S) {
        var P = t & I;
        if (!P && typeof e != "function")
          throw new Lt(f);
        var k = a ? a.length : 0;
        if (k || (t &= ~($ | G), a = c = r), x = x === r ? x : Xe(le(x), 0), S = S === r ? S : le(S), k -= c ? c.length : 0, t & G) {
          var j = a, F = c;
          a = c = r;
        }
        var H = P ? r : Ks(e), K = [
          e,
          t,
          o,
          a,
          c,
          j,
          F,
          h,
          x,
          S
        ];
        if (H && qg(K, H), e = K[0], t = K[1], o = K[2], a = K[3], c = K[4], S = K[9] = K[9] === r ? P ? 0 : e.length : Xe(K[9] - k, 0), !S && t & (M | W) && (t &= ~(M | W)), !t || t == A)
          var J = Ng(e, t, o);
        else
          t == M || t == W ? J = Ig(e, t, S) : (t == $ || t == (A | $)) && !c.length ? J = Lg(e, t, o, a) : J = ti.apply(r, K);
        var fe = H ? gc : Gc;
        return Kc(fe(J, K), e, t);
      }
      function kc(e, t, o, a) {
        return e === r || Ht(e, ur[o]) && !Ne.call(a, o) ? t : e;
      }
      function jc(e, t, o, a, c, h) {
        return Ue(e) && Ue(t) && (h.set(t, e), Zo(e, t, r, jc, h), h.delete(t)), e;
      }
      function Dg(e) {
        return oo(e) ? r : e;
      }
      function Fc(e, t, o, a, c, h) {
        var x = o & O, S = e.length, P = t.length;
        if (S != P && !(x && P > S))
          return !1;
        var k = h.get(e), j = h.get(t);
        if (k && j)
          return k == t && j == e;
        var F = -1, H = !0, K = o & y ? new Gn() : r;
        for (h.set(e, t), h.set(t, e); ++F < S; ) {
          var J = e[F], fe = t[F];
          if (a)
            var Q = x ? a(fe, J, F, t, e, h) : a(J, fe, F, e, t, h);
          if (Q !== r) {
            if (Q)
              continue;
            H = !1;
            break;
          }
          if (K) {
            if (!hs(t, function(ge, _e) {
              if (!zr(K, _e) && (J === ge || c(J, ge, o, a, h)))
                return K.push(_e);
            })) {
              H = !1;
              break;
            }
          } else if (!(J === fe || c(J, fe, o, a, h))) {
            H = !1;
            break;
          }
        }
        return h.delete(e), h.delete(t), H;
      }
      function kg(e, t, o, a, c, h, x) {
        switch (o) {
          case yn:
            if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
              return !1;
            e = e.buffer, t = t.buffer;
          case Bt:
            return !(e.byteLength != t.byteLength || !h(new Wo(e), new Wo(t)));
          case me:
          case Le:
          case st:
            return Ht(+e, +t);
          case be:
            return e.name == t.name && e.message == t.message;
          case $n:
          case nn:
            return e == t + "";
          case We:
            var S = ys;
          case yt:
            var P = a & O;
            if (S || (S = Lo), e.size != t.size && !P)
              return !1;
            var k = x.get(e);
            if (k)
              return k == t;
            a |= y, x.set(e, t);
            var j = Fc(S(e), S(t), a, c, h, x);
            return x.delete(e), j;
          case er:
            if (qr)
              return qr.call(e) == qr.call(t);
        }
        return !1;
      }
      function jg(e, t, o, a, c, h) {
        var x = o & O, S = Vs(e), P = S.length, k = Vs(t), j = k.length;
        if (P != j && !x)
          return !1;
        for (var F = P; F--; ) {
          var H = S[F];
          if (!(x ? H in t : Ne.call(t, H)))
            return !1;
        }
        var K = h.get(e), J = h.get(t);
        if (K && J)
          return K == t && J == e;
        var fe = !0;
        h.set(e, t), h.set(t, e);
        for (var Q = x; ++F < P; ) {
          H = S[F];
          var ge = e[H], _e = t[H];
          if (a)
            var Et = x ? a(_e, ge, H, t, e, h) : a(ge, _e, H, e, t, h);
          if (!(Et === r ? ge === _e || c(ge, _e, o, a, h) : Et)) {
            fe = !1;
            break;
          }
          Q || (Q = H == "constructor");
        }
        if (fe && !Q) {
          var pt = e.constructor, Rt = t.constructor;
          pt != Rt && "constructor" in e && "constructor" in t && !(typeof pt == "function" && pt instanceof pt && typeof Rt == "function" && Rt instanceof Rt) && (fe = !1);
        }
        return h.delete(e), h.delete(t), fe;
      }
      function cn(e) {
        return Qs(zc(e, r, Qc), e + "");
      }
      function Vs(e) {
        return oc(e, Qe, qs);
      }
      function Gs(e) {
        return oc(e, mt, Wc);
      }
      var Ks = Vo ? function(e) {
        return Vo.get(e);
      } : da;
      function ii(e) {
        for (var t = e.name + "", o = dr[t], a = Ne.call(dr, t) ? o.length : 0; a--; ) {
          var c = o[a], h = c.func;
          if (h == null || h == e)
            return c.name;
        }
        return t;
      }
      function vr(e) {
        var t = Ne.call(p, "placeholder") ? p : e;
        return t.placeholder;
      }
      function X() {
        var e = p.iteratee || ua;
        return e = e === ua ? ac : e, arguments.length ? e(arguments[0], arguments[1]) : e;
      }
      function si(e, t) {
        var o = e.__data__;
        return Vg(t) ? o[typeof t == "string" ? "string" : "hash"] : o.map;
      }
      function Ys(e) {
        for (var t = Qe(e), o = t.length; o--; ) {
          var a = t[o], c = e[a];
          t[o] = [a, c, Uc(c)];
        }
        return t;
      }
      function qn(e, t) {
        var o = Yp(e, t);
        return sc(o) ? o : r;
      }
      function Fg(e) {
        var t = Ne.call(e, zn), o = e[zn];
        try {
          e[zn] = r;
          var a = !0;
        } catch {
        }
        var c = jo.call(e);
        return a && (t ? e[zn] = o : delete e[zn]), c;
      }
      var qs = _s ? function(e) {
        return e == null ? [] : (e = Ie(e), _n(_s(e), function(t) {
          return Vl.call(e, t);
        }));
      } : pa, Wc = _s ? function(e) {
        for (var t = []; e; )
          Cn(t, qs(e)), e = Bo(e);
        return t;
      } : pa, ct = ft;
      (Cs && ct(new Cs(new ArrayBuffer(1))) != yn || Gr && ct(new Gr()) != We || Ss && ct(Ss.resolve()) != Bn || fr && ct(new fr()) != yt || Kr && ct(new Kr()) != wn) && (ct = function(e) {
        var t = ft(e), o = t == Je ? e.constructor : r, a = o ? Xn(o) : "";
        if (a)
          switch (a) {
            case yh:
              return yn;
            case bh:
              return We;
            case _h:
              return Bn;
            case Ch:
              return yt;
            case Sh:
              return wn;
          }
        return t;
      });
      function Wg(e, t, o) {
        for (var a = -1, c = o.length; ++a < c; ) {
          var h = o[a], x = h.size;
          switch (h.type) {
            case "drop":
              e += x;
              break;
            case "dropRight":
              t -= x;
              break;
            case "take":
              t = lt(t, e + x);
              break;
            case "takeRight":
              e = Xe(e, t - x);
              break;
          }
        }
        return { start: e, end: t };
      }
      function Bg(e) {
        var t = e.match(ns);
        return t ? t[1].split(rs) : [];
      }
      function Bc(e, t, o) {
        t = Tn(t, e);
        for (var a = -1, c = t.length, h = !1; ++a < c; ) {
          var x = Jt(t[a]);
          if (!(h = e != null && o(e, x)))
            break;
          e = e[x];
        }
        return h || ++a != c ? h : (c = e == null ? 0 : e.length, !!c && pi(c) && un(x, c) && (ae(e) || Zn(e)));
      }
      function $g(e) {
        var t = e.length, o = new e.constructor(t);
        return t && typeof e[0] == "string" && Ne.call(e, "index") && (o.index = e.index, o.input = e.input), o;
      }
      function $c(e) {
        return typeof e.constructor == "function" && !no(e) ? pr(Bo(e)) : {};
      }
      function Ug(e, t, o) {
        var a = e.constructor;
        switch (t) {
          case Bt:
            return Us(e);
          case me:
          case Le:
            return new a(+e);
          case yn:
            return Eg(e, o);
          case tr:
          case nr:
          case Un:
          case Mr:
          case Dr:
          case kr:
          case jr:
          case Fr:
          case Wr:
            return Cc(e, o);
          case We:
            return new a();
          case st:
          case nn:
            return new a(e);
          case $n:
            return Rg(e);
          case yt:
            return new a();
          case er:
            return Ag(e);
        }
      }
      function Hg(e, t) {
        var o = t.length;
        if (!o)
          return e;
        var a = o - 1;
        return t[a] = (o > 1 ? "& " : "") + t[a], t = t.join(o > 2 ? ", " : " "), e.replace(ts, `{
/* [wrapped with ` + t + `] */
`);
      }
      function zg(e) {
        return ae(e) || Zn(e) || !!(Gl && e && e[Gl]);
      }
      function un(e, t) {
        var o = typeof e;
        return t = t ?? Y, !!t && (o == "number" || o != "symbol" && $e.test(e)) && e > -1 && e % 1 == 0 && e < t;
      }
      function dt(e, t, o) {
        if (!Ue(o))
          return !1;
        var a = typeof t;
        return (a == "number" ? vt(o) && un(t, o.length) : a == "string" && t in o) ? Ht(o[t], e) : !1;
      }
      function Xs(e, t) {
        if (ae(e))
          return !1;
        var o = typeof e;
        return o == "number" || o == "symbol" || o == "boolean" || e == null || St(e) ? !0 : Ao.test(e) || !Ro.test(e) || t != null && e in Ie(t);
      }
      function Vg(e) {
        var t = typeof e;
        return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
      }
      function Zs(e) {
        var t = ii(e), o = p[t];
        if (typeof o != "function" || !(t in ye.prototype))
          return !1;
        if (e === o)
          return !0;
        var a = Ks(o);
        return !!a && e === a[0];
      }
      function Gg(e) {
        return !!Ul && Ul in e;
      }
      var Kg = Do ? fn : ha;
      function no(e) {
        var t = e && e.constructor, o = typeof t == "function" && t.prototype || ur;
        return e === o;
      }
      function Uc(e) {
        return e === e && !Ue(e);
      }
      function Hc(e, t) {
        return function(o) {
          return o == null ? !1 : o[e] === t && (t !== r || e in Ie(o));
        };
      }
      function Yg(e) {
        var t = fi(e, function(a) {
          return o.size === m && o.clear(), a;
        }), o = t.cache;
        return t;
      }
      function qg(e, t) {
        var o = e[1], a = t[1], c = o | a, h = c < (A | I | U), x = a == U && o == M || a == U && o == ee && e[7].length <= t[8] || a == (U | ee) && t[7].length <= t[8] && o == M;
        if (!(h || x))
          return e;
        a & A && (e[2] = t[2], c |= o & A ? 0 : N);
        var S = t[3];
        if (S) {
          var P = e[3];
          e[3] = P ? Ec(P, S, t[4]) : S, e[4] = P ? Sn(e[3], w) : t[4];
        }
        return S = t[5], S && (P = e[5], e[5] = P ? Rc(P, S, t[6]) : S, e[6] = P ? Sn(e[5], w) : t[6]), S = t[7], S && (e[7] = S), a & U && (e[8] = e[8] == null ? t[8] : lt(e[8], t[8])), e[9] == null && (e[9] = t[9]), e[0] = t[0], e[1] = c, e;
      }
      function Xg(e) {
        var t = [];
        if (e != null)
          for (var o in Ie(e))
            t.push(o);
        return t;
      }
      function Zg(e) {
        return jo.call(e);
      }
      function zc(e, t, o) {
        return t = Xe(t === r ? e.length - 1 : t, 0), function() {
          for (var a = arguments, c = -1, h = Xe(a.length - t, 0), x = L(h); ++c < h; )
            x[c] = a[t + c];
          c = -1;
          for (var S = L(t + 1); ++c < t; )
            S[c] = a[c];
          return S[t] = o(x), bt(e, this, S);
        };
      }
      function Vc(e, t) {
        return t.length < 2 ? e : Yn(e, kt(t, 0, -1));
      }
      function Jg(e, t) {
        for (var o = e.length, a = lt(t.length, o), c = gt(e); a--; ) {
          var h = t[a];
          e[a] = un(h, o) ? c[h] : r;
        }
        return e;
      }
      function Js(e, t) {
        if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
          return e[t];
      }
      var Gc = Yc(gc), ro = ph || function(e, t) {
        return rt.setTimeout(e, t);
      }, Qs = Yc(bg);
      function Kc(e, t, o) {
        var a = t + "";
        return Qs(e, Hg(a, Qg(Bg(a), o)));
      }
      function Yc(e) {
        var t = 0, o = 0;
        return function() {
          var a = mh(), c = re - (a - o);
          if (o = a, c > 0) {
            if (++t >= q)
              return arguments[0];
          } else
            t = 0;
          return e.apply(r, arguments);
        };
      }
      function ai(e, t) {
        var o = -1, a = e.length, c = a - 1;
        for (t = t === r ? a : t; ++o < t; ) {
          var h = Ds(o, c), x = e[h];
          e[h] = e[o], e[o] = x;
        }
        return e.length = t, e;
      }
      var qc = Yg(function(e) {
        var t = [];
        return e.charCodeAt(0) === 46 && t.push(""), e.replace(Qi, function(o, a, c, h) {
          t.push(c ? h.replace(z, "$1") : a || o);
        }), t;
      });
      function Jt(e) {
        if (typeof e == "string" || St(e))
          return e;
        var t = e + "";
        return t == "0" && 1 / e == -se ? "-0" : t;
      }
      function Xn(e) {
        if (e != null) {
          try {
            return ko.call(e);
          } catch {
          }
          try {
            return e + "";
          } catch {
          }
        }
        return "";
      }
      function Qg(e, t) {
        return It(Pt, function(o) {
          var a = "_." + o[0];
          t & o[1] && !No(e, a) && e.push(a);
        }), e.sort();
      }
      function Xc(e) {
        if (e instanceof ye)
          return e.clone();
        var t = new Mt(e.__wrapped__, e.__chain__);
        return t.__actions__ = gt(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t;
      }
      function ev(e, t, o) {
        (o ? dt(e, t, o) : t === r) ? t = 1 : t = Xe(le(t), 0);
        var a = e == null ? 0 : e.length;
        if (!a || t < 1)
          return [];
        for (var c = 0, h = 0, x = L(Ho(a / t)); c < a; )
          x[h++] = kt(e, c, c += t);
        return x;
      }
      function tv(e) {
        for (var t = -1, o = e == null ? 0 : e.length, a = 0, c = []; ++t < o; ) {
          var h = e[t];
          h && (c[a++] = h);
        }
        return c;
      }
      function nv() {
        var e = arguments.length;
        if (!e)
          return [];
        for (var t = L(e - 1), o = arguments[0], a = e; a--; )
          t[a - 1] = arguments[a];
        return Cn(ae(o) ? gt(o) : [o], ot(t, 1));
      }
      var rv = de(function(e, t) {
        return Ge(e) ? Zr(e, ot(t, 1, Ge, !0)) : [];
      }), ov = de(function(e, t) {
        var o = jt(t);
        return Ge(o) && (o = r), Ge(e) ? Zr(e, ot(t, 1, Ge, !0), X(o, 2)) : [];
      }), iv = de(function(e, t) {
        var o = jt(t);
        return Ge(o) && (o = r), Ge(e) ? Zr(e, ot(t, 1, Ge, !0), r, o) : [];
      });
      function sv(e, t, o) {
        var a = e == null ? 0 : e.length;
        return a ? (t = o || t === r ? 1 : le(t), kt(e, t < 0 ? 0 : t, a)) : [];
      }
      function av(e, t, o) {
        var a = e == null ? 0 : e.length;
        return a ? (t = o || t === r ? 1 : le(t), t = a - t, kt(e, 0, t < 0 ? 0 : t)) : [];
      }
      function lv(e, t) {
        return e && e.length ? Qo(e, X(t, 3), !0, !0) : [];
      }
      function cv(e, t) {
        return e && e.length ? Qo(e, X(t, 3), !0) : [];
      }
      function uv(e, t, o, a) {
        var c = e == null ? 0 : e.length;
        return c ? (o && typeof o != "number" && dt(e, t, o) && (o = 0, a = c), ng(e, t, o, a)) : [];
      }
      function Zc(e, t, o) {
        var a = e == null ? 0 : e.length;
        if (!a)
          return -1;
        var c = o == null ? 0 : le(o);
        return c < 0 && (c = Xe(a + c, 0)), Io(e, X(t, 3), c);
      }
      function Jc(e, t, o) {
        var a = e == null ? 0 : e.length;
        if (!a)
          return -1;
        var c = a - 1;
        return o !== r && (c = le(o), c = o < 0 ? Xe(a + c, 0) : lt(c, a - 1)), Io(e, X(t, 3), c, !0);
      }
      function Qc(e) {
        var t = e == null ? 0 : e.length;
        return t ? ot(e, 1) : [];
      }
      function fv(e) {
        var t = e == null ? 0 : e.length;
        return t ? ot(e, se) : [];
      }
      function dv(e, t) {
        var o = e == null ? 0 : e.length;
        return o ? (t = t === r ? 1 : le(t), ot(e, t)) : [];
      }
      function pv(e) {
        for (var t = -1, o = e == null ? 0 : e.length, a = {}; ++t < o; ) {
          var c = e[t];
          a[c[0]] = c[1];
        }
        return a;
      }
      function eu(e) {
        return e && e.length ? e[0] : r;
      }
      function hv(e, t, o) {
        var a = e == null ? 0 : e.length;
        if (!a)
          return -1;
        var c = o == null ? 0 : le(o);
        return c < 0 && (c = Xe(a + c, 0)), sr(e, t, c);
      }
      function gv(e) {
        var t = e == null ? 0 : e.length;
        return t ? kt(e, 0, -1) : [];
      }
      var vv = de(function(e) {
        var t = Be(e, Bs);
        return t.length && t[0] === e[0] ? Os(t) : [];
      }), mv = de(function(e) {
        var t = jt(e), o = Be(e, Bs);
        return t === jt(o) ? t = r : o.pop(), o.length && o[0] === e[0] ? Os(o, X(t, 2)) : [];
      }), xv = de(function(e) {
        var t = jt(e), o = Be(e, Bs);
        return t = typeof t == "function" ? t : r, t && o.pop(), o.length && o[0] === e[0] ? Os(o, r, t) : [];
      });
      function wv(e, t) {
        return e == null ? "" : gh.call(e, t);
      }
      function jt(e) {
        var t = e == null ? 0 : e.length;
        return t ? e[t - 1] : r;
      }
      function yv(e, t, o) {
        var a = e == null ? 0 : e.length;
        if (!a)
          return -1;
        var c = a;
        return o !== r && (c = le(o), c = c < 0 ? Xe(a + c, 0) : lt(c, a - 1)), t === t ? Qp(e, t, c) : Io(e, Ml, c, !0);
      }
      function bv(e, t) {
        return e && e.length ? fc(e, le(t)) : r;
      }
      var _v = de(tu);
      function tu(e, t) {
        return e && e.length && t && t.length ? Ms(e, t) : e;
      }
      function Cv(e, t, o) {
        return e && e.length && t && t.length ? Ms(e, t, X(o, 2)) : e;
      }
      function Sv(e, t, o) {
        return e && e.length && t && t.length ? Ms(e, t, r, o) : e;
      }
      var Ev = cn(function(e, t) {
        var o = e == null ? 0 : e.length, a = Rs(e, t);
        return hc(e, Be(t, function(c) {
          return un(c, o) ? +c : c;
        }).sort(Sc)), a;
      });
      function Rv(e, t) {
        var o = [];
        if (!(e && e.length))
          return o;
        var a = -1, c = [], h = e.length;
        for (t = X(t, 3); ++a < h; ) {
          var x = e[a];
          t(x, a, e) && (o.push(x), c.push(a));
        }
        return hc(e, c), o;
      }
      function ea(e) {
        return e == null ? e : wh.call(e);
      }
      function Av(e, t, o) {
        var a = e == null ? 0 : e.length;
        return a ? (o && typeof o != "number" && dt(e, t, o) ? (t = 0, o = a) : (t = t == null ? 0 : le(t), o = o === r ? a : le(o)), kt(e, t, o)) : [];
      }
      function Tv(e, t) {
        return Jo(e, t);
      }
      function Pv(e, t, o) {
        return js(e, t, X(o, 2));
      }
      function Ov(e, t) {
        var o = e == null ? 0 : e.length;
        if (o) {
          var a = Jo(e, t);
          if (a < o && Ht(e[a], t))
            return a;
        }
        return -1;
      }
      function Nv(e, t) {
        return Jo(e, t, !0);
      }
      function Iv(e, t, o) {
        return js(e, t, X(o, 2), !0);
      }
      function Lv(e, t) {
        var o = e == null ? 0 : e.length;
        if (o) {
          var a = Jo(e, t, !0) - 1;
          if (Ht(e[a], t))
            return a;
        }
        return -1;
      }
      function Mv(e) {
        return e && e.length ? vc(e) : [];
      }
      function Dv(e, t) {
        return e && e.length ? vc(e, X(t, 2)) : [];
      }
      function kv(e) {
        var t = e == null ? 0 : e.length;
        return t ? kt(e, 1, t) : [];
      }
      function jv(e, t, o) {
        return e && e.length ? (t = o || t === r ? 1 : le(t), kt(e, 0, t < 0 ? 0 : t)) : [];
      }
      function Fv(e, t, o) {
        var a = e == null ? 0 : e.length;
        return a ? (t = o || t === r ? 1 : le(t), t = a - t, kt(e, t < 0 ? 0 : t, a)) : [];
      }
      function Wv(e, t) {
        return e && e.length ? Qo(e, X(t, 3), !1, !0) : [];
      }
      function Bv(e, t) {
        return e && e.length ? Qo(e, X(t, 3)) : [];
      }
      var $v = de(function(e) {
        return An(ot(e, 1, Ge, !0));
      }), Uv = de(function(e) {
        var t = jt(e);
        return Ge(t) && (t = r), An(ot(e, 1, Ge, !0), X(t, 2));
      }), Hv = de(function(e) {
        var t = jt(e);
        return t = typeof t == "function" ? t : r, An(ot(e, 1, Ge, !0), r, t);
      });
      function zv(e) {
        return e && e.length ? An(e) : [];
      }
      function Vv(e, t) {
        return e && e.length ? An(e, X(t, 2)) : [];
      }
      function Gv(e, t) {
        return t = typeof t == "function" ? t : r, e && e.length ? An(e, r, t) : [];
      }
      function ta(e) {
        if (!(e && e.length))
          return [];
        var t = 0;
        return e = _n(e, function(o) {
          if (Ge(o))
            return t = Xe(o.length, t), !0;
        }), xs(t, function(o) {
          return Be(e, gs(o));
        });
      }
      function nu(e, t) {
        if (!(e && e.length))
          return [];
        var o = ta(e);
        return t == null ? o : Be(o, function(a) {
          return bt(t, r, a);
        });
      }
      var Kv = de(function(e, t) {
        return Ge(e) ? Zr(e, t) : [];
      }), Yv = de(function(e) {
        return Ws(_n(e, Ge));
      }), qv = de(function(e) {
        var t = jt(e);
        return Ge(t) && (t = r), Ws(_n(e, Ge), X(t, 2));
      }), Xv = de(function(e) {
        var t = jt(e);
        return t = typeof t == "function" ? t : r, Ws(_n(e, Ge), r, t);
      }), Zv = de(ta);
      function Jv(e, t) {
        return yc(e || [], t || [], Xr);
      }
      function Qv(e, t) {
        return yc(e || [], t || [], eo);
      }
      var em = de(function(e) {
        var t = e.length, o = t > 1 ? e[t - 1] : r;
        return o = typeof o == "function" ? (e.pop(), o) : r, nu(e, o);
      });
      function ru(e) {
        var t = p(e);
        return t.__chain__ = !0, t;
      }
      function tm(e, t) {
        return t(e), e;
      }
      function li(e, t) {
        return t(e);
      }
      var nm = cn(function(e) {
        var t = e.length, o = t ? e[0] : 0, a = this.__wrapped__, c = function(h) {
          return Rs(h, e);
        };
        return t > 1 || this.__actions__.length || !(a instanceof ye) || !un(o) ? this.thru(c) : (a = a.slice(o, +o + (t ? 1 : 0)), a.__actions__.push({
          func: li,
          args: [c],
          thisArg: r
        }), new Mt(a, this.__chain__).thru(function(h) {
          return t && !h.length && h.push(r), h;
        }));
      });
      function rm() {
        return ru(this);
      }
      function om() {
        return new Mt(this.value(), this.__chain__);
      }
      function im() {
        this.__values__ === r && (this.__values__ = mu(this.value()));
        var e = this.__index__ >= this.__values__.length, t = e ? r : this.__values__[this.__index__++];
        return { done: e, value: t };
      }
      function sm() {
        return this;
      }
      function am(e) {
        for (var t, o = this; o instanceof Ko; ) {
          var a = Xc(o);
          a.__index__ = 0, a.__values__ = r, t ? c.__wrapped__ = a : t = a;
          var c = a;
          o = o.__wrapped__;
        }
        return c.__wrapped__ = e, t;
      }
      function lm() {
        var e = this.__wrapped__;
        if (e instanceof ye) {
          var t = e;
          return this.__actions__.length && (t = new ye(this)), t = t.reverse(), t.__actions__.push({
            func: li,
            args: [ea],
            thisArg: r
          }), new Mt(t, this.__chain__);
        }
        return this.thru(ea);
      }
      function cm() {
        return wc(this.__wrapped__, this.__actions__);
      }
      var um = ei(function(e, t, o) {
        Ne.call(e, o) ? ++e[o] : an(e, o, 1);
      });
      function fm(e, t, o) {
        var a = ae(e) ? Il : tg;
        return o && dt(e, t, o) && (t = r), a(e, X(t, 3));
      }
      function dm(e, t) {
        var o = ae(e) ? _n : nc;
        return o(e, X(t, 3));
      }
      var pm = Oc(Zc), hm = Oc(Jc);
      function gm(e, t) {
        return ot(ci(e, t), 1);
      }
      function vm(e, t) {
        return ot(ci(e, t), se);
      }
      function mm(e, t, o) {
        return o = o === r ? 1 : le(o), ot(ci(e, t), o);
      }
      function ou(e, t) {
        var o = ae(e) ? It : Rn;
        return o(e, X(t, 3));
      }
      function iu(e, t) {
        var o = ae(e) ? kp : tc;
        return o(e, X(t, 3));
      }
      var xm = ei(function(e, t, o) {
        Ne.call(e, o) ? e[o].push(t) : an(e, o, [t]);
      });
      function wm(e, t, o, a) {
        e = vt(e) ? e : xr(e), o = o && !a ? le(o) : 0;
        var c = e.length;
        return o < 0 && (o = Xe(c + o, 0)), hi(e) ? o <= c && e.indexOf(t, o) > -1 : !!c && sr(e, t, o) > -1;
      }
      var ym = de(function(e, t, o) {
        var a = -1, c = typeof t == "function", h = vt(e) ? L(e.length) : [];
        return Rn(e, function(x) {
          h[++a] = c ? bt(t, x, o) : Jr(x, t, o);
        }), h;
      }), bm = ei(function(e, t, o) {
        an(e, o, t);
      });
      function ci(e, t) {
        var o = ae(e) ? Be : lc;
        return o(e, X(t, 3));
      }
      function _m(e, t, o, a) {
        return e == null ? [] : (ae(t) || (t = t == null ? [] : [t]), o = a ? r : o, ae(o) || (o = o == null ? [] : [o]), dc(e, t, o));
      }
      var Cm = ei(function(e, t, o) {
        e[o ? 0 : 1].push(t);
      }, function() {
        return [[], []];
      });
      function Sm(e, t, o) {
        var a = ae(e) ? ps : kl, c = arguments.length < 3;
        return a(e, X(t, 4), o, c, Rn);
      }
      function Em(e, t, o) {
        var a = ae(e) ? jp : kl, c = arguments.length < 3;
        return a(e, X(t, 4), o, c, tc);
      }
      function Rm(e, t) {
        var o = ae(e) ? _n : nc;
        return o(e, di(X(t, 3)));
      }
      function Am(e) {
        var t = ae(e) ? Zl : wg;
        return t(e);
      }
      function Tm(e, t, o) {
        (o ? dt(e, t, o) : t === r) ? t = 1 : t = le(t);
        var a = ae(e) ? Xh : yg;
        return a(e, t);
      }
      function Pm(e) {
        var t = ae(e) ? Zh : _g;
        return t(e);
      }
      function Om(e) {
        if (e == null)
          return 0;
        if (vt(e))
          return hi(e) ? lr(e) : e.length;
        var t = ct(e);
        return t == We || t == yt ? e.size : Is(e).length;
      }
      function Nm(e, t, o) {
        var a = ae(e) ? hs : Cg;
        return o && dt(e, t, o) && (t = r), a(e, X(t, 3));
      }
      var Im = de(function(e, t) {
        if (e == null)
          return [];
        var o = t.length;
        return o > 1 && dt(e, t[0], t[1]) ? t = [] : o > 2 && dt(t[0], t[1], t[2]) && (t = [t[0]]), dc(e, ot(t, 1), []);
      }), ui = dh || function() {
        return rt.Date.now();
      };
      function Lm(e, t) {
        if (typeof t != "function")
          throw new Lt(f);
        return e = le(e), function() {
          if (--e < 1)
            return t.apply(this, arguments);
        };
      }
      function su(e, t, o) {
        return t = o ? r : t, t = e && t == null ? e.length : t, ln(e, U, r, r, r, r, t);
      }
      function au(e, t) {
        var o;
        if (typeof t != "function")
          throw new Lt(f);
        return e = le(e), function() {
          return --e > 0 && (o = t.apply(this, arguments)), e <= 1 && (t = r), o;
        };
      }
      var na = de(function(e, t, o) {
        var a = A;
        if (o.length) {
          var c = Sn(o, vr(na));
          a |= $;
        }
        return ln(e, a, t, o, c);
      }), lu = de(function(e, t, o) {
        var a = A | I;
        if (o.length) {
          var c = Sn(o, vr(lu));
          a |= $;
        }
        return ln(t, a, e, o, c);
      });
      function cu(e, t, o) {
        t = o ? r : t;
        var a = ln(e, M, r, r, r, r, r, t);
        return a.placeholder = cu.placeholder, a;
      }
      function uu(e, t, o) {
        t = o ? r : t;
        var a = ln(e, W, r, r, r, r, r, t);
        return a.placeholder = uu.placeholder, a;
      }
      function fu(e, t, o) {
        var a, c, h, x, S, P, k = 0, j = !1, F = !1, H = !0;
        if (typeof e != "function")
          throw new Lt(f);
        t = Ft(t) || 0, Ue(o) && (j = !!o.leading, F = "maxWait" in o, h = F ? Xe(Ft(o.maxWait) || 0, t) : h, H = "trailing" in o ? !!o.trailing : H);
        function K(Ke) {
          var zt = a, pn = c;
          return a = c = r, k = Ke, x = e.apply(pn, zt), x;
        }
        function J(Ke) {
          return k = Ke, S = ro(ge, t), j ? K(Ke) : x;
        }
        function fe(Ke) {
          var zt = Ke - P, pn = Ke - k, Ou = t - zt;
          return F ? lt(Ou, h - pn) : Ou;
        }
        function Q(Ke) {
          var zt = Ke - P, pn = Ke - k;
          return P === r || zt >= t || zt < 0 || F && pn >= h;
        }
        function ge() {
          var Ke = ui();
          if (Q(Ke))
            return _e(Ke);
          S = ro(ge, fe(Ke));
        }
        function _e(Ke) {
          return S = r, H && a ? K(Ke) : (a = c = r, x);
        }
        function Et() {
          S !== r && bc(S), k = 0, a = P = c = S = r;
        }
        function pt() {
          return S === r ? x : _e(ui());
        }
        function Rt() {
          var Ke = ui(), zt = Q(Ke);
          if (a = arguments, c = this, P = Ke, zt) {
            if (S === r)
              return J(P);
            if (F)
              return bc(S), S = ro(ge, t), K(P);
          }
          return S === r && (S = ro(ge, t)), x;
        }
        return Rt.cancel = Et, Rt.flush = pt, Rt;
      }
      var Mm = de(function(e, t) {
        return ec(e, 1, t);
      }), Dm = de(function(e, t, o) {
        return ec(e, Ft(t) || 0, o);
      });
      function km(e) {
        return ln(e, ue);
      }
      function fi(e, t) {
        if (typeof e != "function" || t != null && typeof t != "function")
          throw new Lt(f);
        var o = function() {
          var a = arguments, c = t ? t.apply(this, a) : a[0], h = o.cache;
          if (h.has(c))
            return h.get(c);
          var x = e.apply(this, a);
          return o.cache = h.set(c, x) || h, x;
        };
        return o.cache = new (fi.Cache || sn)(), o;
      }
      fi.Cache = sn;
      function di(e) {
        if (typeof e != "function")
          throw new Lt(f);
        return function() {
          var t = arguments;
          switch (t.length) {
            case 0:
              return !e.call(this);
            case 1:
              return !e.call(this, t[0]);
            case 2:
              return !e.call(this, t[0], t[1]);
            case 3:
              return !e.call(this, t[0], t[1], t[2]);
          }
          return !e.apply(this, t);
        };
      }
      function jm(e) {
        return au(2, e);
      }
      var Fm = Sg(function(e, t) {
        t = t.length == 1 && ae(t[0]) ? Be(t[0], _t(X())) : Be(ot(t, 1), _t(X()));
        var o = t.length;
        return de(function(a) {
          for (var c = -1, h = lt(a.length, o); ++c < h; )
            a[c] = t[c].call(this, a[c]);
          return bt(e, this, a);
        });
      }), ra = de(function(e, t) {
        var o = Sn(t, vr(ra));
        return ln(e, $, r, t, o);
      }), du = de(function(e, t) {
        var o = Sn(t, vr(du));
        return ln(e, G, r, t, o);
      }), Wm = cn(function(e, t) {
        return ln(e, ee, r, r, r, t);
      });
      function Bm(e, t) {
        if (typeof e != "function")
          throw new Lt(f);
        return t = t === r ? t : le(t), de(e, t);
      }
      function $m(e, t) {
        if (typeof e != "function")
          throw new Lt(f);
        return t = t == null ? 0 : Xe(le(t), 0), de(function(o) {
          var a = o[t], c = Pn(o, 0, t);
          return a && Cn(c, a), bt(e, this, c);
        });
      }
      function Um(e, t, o) {
        var a = !0, c = !0;
        if (typeof e != "function")
          throw new Lt(f);
        return Ue(o) && (a = "leading" in o ? !!o.leading : a, c = "trailing" in o ? !!o.trailing : c), fu(e, t, {
          leading: a,
          maxWait: t,
          trailing: c
        });
      }
      function Hm(e) {
        return su(e, 1);
      }
      function zm(e, t) {
        return ra($s(t), e);
      }
      function Vm() {
        if (!arguments.length)
          return [];
        var e = arguments[0];
        return ae(e) ? e : [e];
      }
      function Gm(e) {
        return Dt(e, R);
      }
      function Km(e, t) {
        return t = typeof t == "function" ? t : r, Dt(e, R, t);
      }
      function Ym(e) {
        return Dt(e, _ | R);
      }
      function qm(e, t) {
        return t = typeof t == "function" ? t : r, Dt(e, _ | R, t);
      }
      function Xm(e, t) {
        return t == null || Ql(e, t, Qe(t));
      }
      function Ht(e, t) {
        return e === t || e !== e && t !== t;
      }
      var Zm = oi(Ps), Jm = oi(function(e, t) {
        return e >= t;
      }), Zn = ic(/* @__PURE__ */ function() {
        return arguments;
      }()) ? ic : function(e) {
        return Ve(e) && Ne.call(e, "callee") && !Vl.call(e, "callee");
      }, ae = L.isArray, Qm = Rl ? _t(Rl) : ag;
      function vt(e) {
        return e != null && pi(e.length) && !fn(e);
      }
      function Ge(e) {
        return Ve(e) && vt(e);
      }
      function ex(e) {
        return e === !0 || e === !1 || Ve(e) && ft(e) == me;
      }
      var On = hh || ha, tx = Al ? _t(Al) : lg;
      function nx(e) {
        return Ve(e) && e.nodeType === 1 && !oo(e);
      }
      function rx(e) {
        if (e == null)
          return !0;
        if (vt(e) && (ae(e) || typeof e == "string" || typeof e.splice == "function" || On(e) || mr(e) || Zn(e)))
          return !e.length;
        var t = ct(e);
        if (t == We || t == yt)
          return !e.size;
        if (no(e))
          return !Is(e).length;
        for (var o in e)
          if (Ne.call(e, o))
            return !1;
        return !0;
      }
      function ox(e, t) {
        return Qr(e, t);
      }
      function ix(e, t, o) {
        o = typeof o == "function" ? o : r;
        var a = o ? o(e, t) : r;
        return a === r ? Qr(e, t, r, o) : !!a;
      }
      function oa(e) {
        if (!Ve(e))
          return !1;
        var t = ft(e);
        return t == be || t == Re || typeof e.message == "string" && typeof e.name == "string" && !oo(e);
      }
      function sx(e) {
        return typeof e == "number" && Kl(e);
      }
      function fn(e) {
        if (!Ue(e))
          return !1;
        var t = ft(e);
        return t == xe || t == Ze || t == Z || t == Wt;
      }
      function pu(e) {
        return typeof e == "number" && e == le(e);
      }
      function pi(e) {
        return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Y;
      }
      function Ue(e) {
        var t = typeof e;
        return e != null && (t == "object" || t == "function");
      }
      function Ve(e) {
        return e != null && typeof e == "object";
      }
      var hu = Tl ? _t(Tl) : ug;
      function ax(e, t) {
        return e === t || Ns(e, t, Ys(t));
      }
      function lx(e, t, o) {
        return o = typeof o == "function" ? o : r, Ns(e, t, Ys(t), o);
      }
      function cx(e) {
        return gu(e) && e != +e;
      }
      function ux(e) {
        if (Kg(e))
          throw new ie(u);
        return sc(e);
      }
      function fx(e) {
        return e === null;
      }
      function dx(e) {
        return e == null;
      }
      function gu(e) {
        return typeof e == "number" || Ve(e) && ft(e) == st;
      }
      function oo(e) {
        if (!Ve(e) || ft(e) != Je)
          return !1;
        var t = Bo(e);
        if (t === null)
          return !0;
        var o = Ne.call(t, "constructor") && t.constructor;
        return typeof o == "function" && o instanceof o && ko.call(o) == lh;
      }
      var ia = Pl ? _t(Pl) : fg;
      function px(e) {
        return pu(e) && e >= -Y && e <= Y;
      }
      var vu = Ol ? _t(Ol) : dg;
      function hi(e) {
        return typeof e == "string" || !ae(e) && Ve(e) && ft(e) == nn;
      }
      function St(e) {
        return typeof e == "symbol" || Ve(e) && ft(e) == er;
      }
      var mr = Nl ? _t(Nl) : pg;
      function hx(e) {
        return e === r;
      }
      function gx(e) {
        return Ve(e) && ct(e) == wn;
      }
      function vx(e) {
        return Ve(e) && ft(e) == bo;
      }
      var mx = oi(Ls), xx = oi(function(e, t) {
        return e <= t;
      });
      function mu(e) {
        if (!e)
          return [];
        if (vt(e))
          return hi(e) ? $t(e) : gt(e);
        if (Vr && e[Vr])
          return Xp(e[Vr]());
        var t = ct(e), o = t == We ? ys : t == yt ? Lo : xr;
        return o(e);
      }
      function dn(e) {
        if (!e)
          return e === 0 ? e : 0;
        if (e = Ft(e), e === se || e === -se) {
          var t = e < 0 ? -1 : 1;
          return t * ve;
        }
        return e === e ? e : 0;
      }
      function le(e) {
        var t = dn(e), o = t % 1;
        return t === t ? o ? t - o : t : 0;
      }
      function xu(e) {
        return e ? Kn(le(e), 0, Ee) : 0;
      }
      function Ft(e) {
        if (typeof e == "number")
          return e;
        if (St(e))
          return ke;
        if (Ue(e)) {
          var t = typeof e.valueOf == "function" ? e.valueOf() : e;
          e = Ue(t) ? t + "" : t;
        }
        if (typeof e != "string")
          return e === 0 ? e : +e;
        e = jl(e);
        var o = we.test(e);
        return o || tt.test(e) ? Lp(e.slice(2), o ? 2 : 8) : Oe.test(e) ? ke : +e;
      }
      function wu(e) {
        return Zt(e, mt(e));
      }
      function wx(e) {
        return e ? Kn(le(e), -Y, Y) : e === 0 ? e : 0;
      }
      function Pe(e) {
        return e == null ? "" : Ct(e);
      }
      var yx = hr(function(e, t) {
        if (no(t) || vt(t)) {
          Zt(t, Qe(t), e);
          return;
        }
        for (var o in t)
          Ne.call(t, o) && Xr(e, o, t[o]);
      }), yu = hr(function(e, t) {
        Zt(t, mt(t), e);
      }), gi = hr(function(e, t, o, a) {
        Zt(t, mt(t), e, a);
      }), bx = hr(function(e, t, o, a) {
        Zt(t, Qe(t), e, a);
      }), _x = cn(Rs);
      function Cx(e, t) {
        var o = pr(e);
        return t == null ? o : Jl(o, t);
      }
      var Sx = de(function(e, t) {
        e = Ie(e);
        var o = -1, a = t.length, c = a > 2 ? t[2] : r;
        for (c && dt(t[0], t[1], c) && (a = 1); ++o < a; )
          for (var h = t[o], x = mt(h), S = -1, P = x.length; ++S < P; ) {
            var k = x[S], j = e[k];
            (j === r || Ht(j, ur[k]) && !Ne.call(e, k)) && (e[k] = h[k]);
          }
        return e;
      }), Ex = de(function(e) {
        return e.push(r, jc), bt(bu, r, e);
      });
      function Rx(e, t) {
        return Ll(e, X(t, 3), Xt);
      }
      function Ax(e, t) {
        return Ll(e, X(t, 3), Ts);
      }
      function Tx(e, t) {
        return e == null ? e : As(e, X(t, 3), mt);
      }
      function Px(e, t) {
        return e == null ? e : rc(e, X(t, 3), mt);
      }
      function Ox(e, t) {
        return e && Xt(e, X(t, 3));
      }
      function Nx(e, t) {
        return e && Ts(e, X(t, 3));
      }
      function Ix(e) {
        return e == null ? [] : Xo(e, Qe(e));
      }
      function Lx(e) {
        return e == null ? [] : Xo(e, mt(e));
      }
      function sa(e, t, o) {
        var a = e == null ? r : Yn(e, t);
        return a === r ? o : a;
      }
      function Mx(e, t) {
        return e != null && Bc(e, t, rg);
      }
      function aa(e, t) {
        return e != null && Bc(e, t, og);
      }
      var Dx = Ic(function(e, t, o) {
        t != null && typeof t.toString != "function" && (t = jo.call(t)), e[t] = o;
      }, ca(xt)), kx = Ic(function(e, t, o) {
        t != null && typeof t.toString != "function" && (t = jo.call(t)), Ne.call(e, t) ? e[t].push(o) : e[t] = [o];
      }, X), jx = de(Jr);
      function Qe(e) {
        return vt(e) ? Xl(e) : Is(e);
      }
      function mt(e) {
        return vt(e) ? Xl(e, !0) : hg(e);
      }
      function Fx(e, t) {
        var o = {};
        return t = X(t, 3), Xt(e, function(a, c, h) {
          an(o, t(a, c, h), a);
        }), o;
      }
      function Wx(e, t) {
        var o = {};
        return t = X(t, 3), Xt(e, function(a, c, h) {
          an(o, c, t(a, c, h));
        }), o;
      }
      var Bx = hr(function(e, t, o) {
        Zo(e, t, o);
      }), bu = hr(function(e, t, o, a) {
        Zo(e, t, o, a);
      }), $x = cn(function(e, t) {
        var o = {};
        if (e == null)
          return o;
        var a = !1;
        t = Be(t, function(h) {
          return h = Tn(h, e), a || (a = h.length > 1), h;
        }), Zt(e, Gs(e), o), a && (o = Dt(o, _ | E | R, Dg));
        for (var c = t.length; c--; )
          Fs(o, t[c]);
        return o;
      });
      function Ux(e, t) {
        return _u(e, di(X(t)));
      }
      var Hx = cn(function(e, t) {
        return e == null ? {} : vg(e, t);
      });
      function _u(e, t) {
        if (e == null)
          return {};
        var o = Be(Gs(e), function(a) {
          return [a];
        });
        return t = X(t), pc(e, o, function(a, c) {
          return t(a, c[0]);
        });
      }
      function zx(e, t, o) {
        t = Tn(t, e);
        var a = -1, c = t.length;
        for (c || (c = 1, e = r); ++a < c; ) {
          var h = e == null ? r : e[Jt(t[a])];
          h === r && (a = c, h = o), e = fn(h) ? h.call(e) : h;
        }
        return e;
      }
      function Vx(e, t, o) {
        return e == null ? e : eo(e, t, o);
      }
      function Gx(e, t, o, a) {
        return a = typeof a == "function" ? a : r, e == null ? e : eo(e, t, o, a);
      }
      var Cu = Dc(Qe), Su = Dc(mt);
      function Kx(e, t, o) {
        var a = ae(e), c = a || On(e) || mr(e);
        if (t = X(t, 4), o == null) {
          var h = e && e.constructor;
          c ? o = a ? new h() : [] : Ue(e) ? o = fn(h) ? pr(Bo(e)) : {} : o = {};
        }
        return (c ? It : Xt)(e, function(x, S, P) {
          return t(o, x, S, P);
        }), o;
      }
      function Yx(e, t) {
        return e == null ? !0 : Fs(e, t);
      }
      function qx(e, t, o) {
        return e == null ? e : xc(e, t, $s(o));
      }
      function Xx(e, t, o, a) {
        return a = typeof a == "function" ? a : r, e == null ? e : xc(e, t, $s(o), a);
      }
      function xr(e) {
        return e == null ? [] : ws(e, Qe(e));
      }
      function Zx(e) {
        return e == null ? [] : ws(e, mt(e));
      }
      function Jx(e, t, o) {
        return o === r && (o = t, t = r), o !== r && (o = Ft(o), o = o === o ? o : 0), t !== r && (t = Ft(t), t = t === t ? t : 0), Kn(Ft(e), t, o);
      }
      function Qx(e, t, o) {
        return t = dn(t), o === r ? (o = t, t = 0) : o = dn(o), e = Ft(e), ig(e, t, o);
      }
      function ew(e, t, o) {
        if (o && typeof o != "boolean" && dt(e, t, o) && (t = o = r), o === r && (typeof t == "boolean" ? (o = t, t = r) : typeof e == "boolean" && (o = e, e = r)), e === r && t === r ? (e = 0, t = 1) : (e = dn(e), t === r ? (t = e, e = 0) : t = dn(t)), e > t) {
          var a = e;
          e = t, t = a;
        }
        if (o || e % 1 || t % 1) {
          var c = Yl();
          return lt(e + c * (t - e + Ip("1e-" + ((c + "").length - 1))), t);
        }
        return Ds(e, t);
      }
      var tw = gr(function(e, t, o) {
        return t = t.toLowerCase(), e + (o ? Eu(t) : t);
      });
      function Eu(e) {
        return la(Pe(e).toLowerCase());
      }
      function Ru(e) {
        return e = Pe(e), e && e.replace(ze, Vp).replace(_p, "");
      }
      function nw(e, t, o) {
        e = Pe(e), t = Ct(t);
        var a = e.length;
        o = o === r ? a : Kn(le(o), 0, a);
        var c = o;
        return o -= t.length, o >= 0 && e.slice(o, c) == t;
      }
      function rw(e) {
        return e = Pe(e), e && Co.test(e) ? e.replace(rr, Gp) : e;
      }
      function ow(e) {
        return e = Pe(e), e && To.test(e) ? e.replace(Ur, "\\$&") : e;
      }
      var iw = gr(function(e, t, o) {
        return e + (o ? "-" : "") + t.toLowerCase();
      }), sw = gr(function(e, t, o) {
        return e + (o ? " " : "") + t.toLowerCase();
      }), aw = Pc("toLowerCase");
      function lw(e, t, o) {
        e = Pe(e), t = le(t);
        var a = t ? lr(e) : 0;
        if (!t || a >= t)
          return e;
        var c = (t - a) / 2;
        return ri(zo(c), o) + e + ri(Ho(c), o);
      }
      function cw(e, t, o) {
        e = Pe(e), t = le(t);
        var a = t ? lr(e) : 0;
        return t && a < t ? e + ri(t - a, o) : e;
      }
      function uw(e, t, o) {
        e = Pe(e), t = le(t);
        var a = t ? lr(e) : 0;
        return t && a < t ? ri(t - a, o) + e : e;
      }
      function fw(e, t, o) {
        return o || t == null ? t = 0 : t && (t = +t), xh(Pe(e).replace(or, ""), t || 0);
      }
      function dw(e, t, o) {
        return (o ? dt(e, t, o) : t === r) ? t = 1 : t = le(t), ks(Pe(e), t);
      }
      function pw() {
        var e = arguments, t = Pe(e[0]);
        return e.length < 3 ? t : t.replace(e[1], e[2]);
      }
      var hw = gr(function(e, t, o) {
        return e + (o ? "_" : "") + t.toLowerCase();
      });
      function gw(e, t, o) {
        return o && typeof o != "number" && dt(e, t, o) && (t = o = r), o = o === r ? Ee : o >>> 0, o ? (e = Pe(e), e && (typeof t == "string" || t != null && !ia(t)) && (t = Ct(t), !t && ar(e)) ? Pn($t(e), 0, o) : e.split(t, o)) : [];
      }
      var vw = gr(function(e, t, o) {
        return e + (o ? " " : "") + la(t);
      });
      function mw(e, t, o) {
        return e = Pe(e), o = o == null ? 0 : Kn(le(o), 0, e.length), t = Ct(t), e.slice(o, o + t.length) == t;
      }
      function xw(e, t, o) {
        var a = p.templateSettings;
        o && dt(e, t, o) && (t = r), e = Pe(e), t = gi({}, t, a, kc);
        var c = gi({}, t.imports, a.imports, kc), h = Qe(c), x = ws(c, h), S, P, k = 0, j = t.interpolate || nt, F = "__p += '", H = bs(
          (t.escape || nt).source + "|" + j.source + "|" + (j === Eo ? te : nt).source + "|" + (t.evaluate || nt).source + "|$",
          "g"
        ), K = "//# sourceURL=" + (Ne.call(t, "sourceURL") ? (t.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++Ap + "]") + `
`;
        e.replace(H, function(Q, ge, _e, Et, pt, Rt) {
          return _e || (_e = Et), F += e.slice(k, Rt).replace(bn, Kp), ge && (S = !0, F += `' +
__e(` + ge + `) +
'`), pt && (P = !0, F += `';
` + pt + `;
__p += '`), _e && (F += `' +
((__t = (` + _e + `)) == null ? '' : __t) +
'`), k = Rt + Q.length, Q;
        }), F += `';
`;
        var J = Ne.call(t, "variable") && t.variable;
        if (!J)
          F = `with (obj) {
` + F + `
}
`;
        else if (B.test(J))
          throw new ie(d);
        F = (P ? F.replace(Zi, "") : F).replace(Br, "$1").replace(_o, "$1;"), F = "function(" + (J || "obj") + `) {
` + (J ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (S ? ", __e = _.escape" : "") + (P ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + F + `return __p
}`;
        var fe = Tu(function() {
          return Te(h, K + "return " + F).apply(r, x);
        });
        if (fe.source = F, oa(fe))
          throw fe;
        return fe;
      }
      function ww(e) {
        return Pe(e).toLowerCase();
      }
      function yw(e) {
        return Pe(e).toUpperCase();
      }
      function bw(e, t, o) {
        if (e = Pe(e), e && (o || t === r))
          return jl(e);
        if (!e || !(t = Ct(t)))
          return e;
        var a = $t(e), c = $t(t), h = Fl(a, c), x = Wl(a, c) + 1;
        return Pn(a, h, x).join("");
      }
      function _w(e, t, o) {
        if (e = Pe(e), e && (o || t === r))
          return e.slice(0, $l(e) + 1);
        if (!e || !(t = Ct(t)))
          return e;
        var a = $t(e), c = Wl(a, $t(t)) + 1;
        return Pn(a, 0, c).join("");
      }
      function Cw(e, t, o) {
        if (e = Pe(e), e && (o || t === r))
          return e.replace(or, "");
        if (!e || !(t = Ct(t)))
          return e;
        var a = $t(e), c = Fl(a, $t(t));
        return Pn(a, c).join("");
      }
      function Sw(e, t) {
        var o = he, a = Ce;
        if (Ue(t)) {
          var c = "separator" in t ? t.separator : c;
          o = "length" in t ? le(t.length) : o, a = "omission" in t ? Ct(t.omission) : a;
        }
        e = Pe(e);
        var h = e.length;
        if (ar(e)) {
          var x = $t(e);
          h = x.length;
        }
        if (o >= h)
          return e;
        var S = o - lr(a);
        if (S < 1)
          return a;
        var P = x ? Pn(x, 0, S).join("") : e.slice(0, S);
        if (c === r)
          return P + a;
        if (x && (S += P.length - S), ia(c)) {
          if (e.slice(S).search(c)) {
            var k, j = P;
            for (c.global || (c = bs(c.source, Pe(Ae.exec(c)) + "g")), c.lastIndex = 0; k = c.exec(j); )
              var F = k.index;
            P = P.slice(0, F === r ? S : F);
          }
        } else if (e.indexOf(Ct(c), S) != S) {
          var H = P.lastIndexOf(c);
          H > -1 && (P = P.slice(0, H));
        }
        return P + a;
      }
      function Ew(e) {
        return e = Pe(e), e && $r.test(e) ? e.replace(rn, eh) : e;
      }
      var Rw = gr(function(e, t, o) {
        return e + (o ? " " : "") + t.toUpperCase();
      }), la = Pc("toUpperCase");
      function Au(e, t, o) {
        return e = Pe(e), t = o ? r : t, t === r ? qp(e) ? rh(e) : Bp(e) : e.match(t) || [];
      }
      var Tu = de(function(e, t) {
        try {
          return bt(e, r, t);
        } catch (o) {
          return oa(o) ? o : new ie(o);
        }
      }), Aw = cn(function(e, t) {
        return It(t, function(o) {
          o = Jt(o), an(e, o, na(e[o], e));
        }), e;
      });
      function Tw(e) {
        var t = e == null ? 0 : e.length, o = X();
        return e = t ? Be(e, function(a) {
          if (typeof a[1] != "function")
            throw new Lt(f);
          return [o(a[0]), a[1]];
        }) : [], de(function(a) {
          for (var c = -1; ++c < t; ) {
            var h = e[c];
            if (bt(h[0], this, a))
              return bt(h[1], this, a);
          }
        });
      }
      function Pw(e) {
        return eg(Dt(e, _));
      }
      function ca(e) {
        return function() {
          return e;
        };
      }
      function Ow(e, t) {
        return e == null || e !== e ? t : e;
      }
      var Nw = Nc(), Iw = Nc(!0);
      function xt(e) {
        return e;
      }
      function ua(e) {
        return ac(typeof e == "function" ? e : Dt(e, _));
      }
      function Lw(e) {
        return cc(Dt(e, _));
      }
      function Mw(e, t) {
        return uc(e, Dt(t, _));
      }
      var Dw = de(function(e, t) {
        return function(o) {
          return Jr(o, e, t);
        };
      }), kw = de(function(e, t) {
        return function(o) {
          return Jr(e, o, t);
        };
      });
      function fa(e, t, o) {
        var a = Qe(t), c = Xo(t, a);
        o == null && !(Ue(t) && (c.length || !a.length)) && (o = t, t = e, e = this, c = Xo(t, Qe(t)));
        var h = !(Ue(o) && "chain" in o) || !!o.chain, x = fn(e);
        return It(c, function(S) {
          var P = t[S];
          e[S] = P, x && (e.prototype[S] = function() {
            var k = this.__chain__;
            if (h || k) {
              var j = e(this.__wrapped__), F = j.__actions__ = gt(this.__actions__);
              return F.push({ func: P, args: arguments, thisArg: e }), j.__chain__ = k, j;
            }
            return P.apply(e, Cn([this.value()], arguments));
          });
        }), e;
      }
      function jw() {
        return rt._ === this && (rt._ = ch), this;
      }
      function da() {
      }
      function Fw(e) {
        return e = le(e), de(function(t) {
          return fc(t, e);
        });
      }
      var Ww = Hs(Be), Bw = Hs(Il), $w = Hs(hs);
      function Pu(e) {
        return Xs(e) ? gs(Jt(e)) : mg(e);
      }
      function Uw(e) {
        return function(t) {
          return e == null ? r : Yn(e, t);
        };
      }
      var Hw = Lc(), zw = Lc(!0);
      function pa() {
        return [];
      }
      function ha() {
        return !1;
      }
      function Vw() {
        return {};
      }
      function Gw() {
        return "";
      }
      function Kw() {
        return !0;
      }
      function Yw(e, t) {
        if (e = le(e), e < 1 || e > Y)
          return [];
        var o = Ee, a = lt(e, Ee);
        t = X(t), e -= Ee;
        for (var c = xs(a, t); ++o < e; )
          t(o);
        return c;
      }
      function qw(e) {
        return ae(e) ? Be(e, Jt) : St(e) ? [e] : gt(qc(Pe(e)));
      }
      function Xw(e) {
        var t = ++ah;
        return Pe(e) + t;
      }
      var Zw = ni(function(e, t) {
        return e + t;
      }, 0), Jw = zs("ceil"), Qw = ni(function(e, t) {
        return e / t;
      }, 1), ey = zs("floor");
      function ty(e) {
        return e && e.length ? qo(e, xt, Ps) : r;
      }
      function ny(e, t) {
        return e && e.length ? qo(e, X(t, 2), Ps) : r;
      }
      function ry(e) {
        return Dl(e, xt);
      }
      function oy(e, t) {
        return Dl(e, X(t, 2));
      }
      function iy(e) {
        return e && e.length ? qo(e, xt, Ls) : r;
      }
      function sy(e, t) {
        return e && e.length ? qo(e, X(t, 2), Ls) : r;
      }
      var ay = ni(function(e, t) {
        return e * t;
      }, 1), ly = zs("round"), cy = ni(function(e, t) {
        return e - t;
      }, 0);
      function uy(e) {
        return e && e.length ? ms(e, xt) : 0;
      }
      function fy(e, t) {
        return e && e.length ? ms(e, X(t, 2)) : 0;
      }
      return p.after = Lm, p.ary = su, p.assign = yx, p.assignIn = yu, p.assignInWith = gi, p.assignWith = bx, p.at = _x, p.before = au, p.bind = na, p.bindAll = Aw, p.bindKey = lu, p.castArray = Vm, p.chain = ru, p.chunk = ev, p.compact = tv, p.concat = nv, p.cond = Tw, p.conforms = Pw, p.constant = ca, p.countBy = um, p.create = Cx, p.curry = cu, p.curryRight = uu, p.debounce = fu, p.defaults = Sx, p.defaultsDeep = Ex, p.defer = Mm, p.delay = Dm, p.difference = rv, p.differenceBy = ov, p.differenceWith = iv, p.drop = sv, p.dropRight = av, p.dropRightWhile = lv, p.dropWhile = cv, p.fill = uv, p.filter = dm, p.flatMap = gm, p.flatMapDeep = vm, p.flatMapDepth = mm, p.flatten = Qc, p.flattenDeep = fv, p.flattenDepth = dv, p.flip = km, p.flow = Nw, p.flowRight = Iw, p.fromPairs = pv, p.functions = Ix, p.functionsIn = Lx, p.groupBy = xm, p.initial = gv, p.intersection = vv, p.intersectionBy = mv, p.intersectionWith = xv, p.invert = Dx, p.invertBy = kx, p.invokeMap = ym, p.iteratee = ua, p.keyBy = bm, p.keys = Qe, p.keysIn = mt, p.map = ci, p.mapKeys = Fx, p.mapValues = Wx, p.matches = Lw, p.matchesProperty = Mw, p.memoize = fi, p.merge = Bx, p.mergeWith = bu, p.method = Dw, p.methodOf = kw, p.mixin = fa, p.negate = di, p.nthArg = Fw, p.omit = $x, p.omitBy = Ux, p.once = jm, p.orderBy = _m, p.over = Ww, p.overArgs = Fm, p.overEvery = Bw, p.overSome = $w, p.partial = ra, p.partialRight = du, p.partition = Cm, p.pick = Hx, p.pickBy = _u, p.property = Pu, p.propertyOf = Uw, p.pull = _v, p.pullAll = tu, p.pullAllBy = Cv, p.pullAllWith = Sv, p.pullAt = Ev, p.range = Hw, p.rangeRight = zw, p.rearg = Wm, p.reject = Rm, p.remove = Rv, p.rest = Bm, p.reverse = ea, p.sampleSize = Tm, p.set = Vx, p.setWith = Gx, p.shuffle = Pm, p.slice = Av, p.sortBy = Im, p.sortedUniq = Mv, p.sortedUniqBy = Dv, p.split = gw, p.spread = $m, p.tail = kv, p.take = jv, p.takeRight = Fv, p.takeRightWhile = Wv, p.takeWhile = Bv, p.tap = tm, p.throttle = Um, p.thru = li, p.toArray = mu, p.toPairs = Cu, p.toPairsIn = Su, p.toPath = qw, p.toPlainObject = wu, p.transform = Kx, p.unary = Hm, p.union = $v, p.unionBy = Uv, p.unionWith = Hv, p.uniq = zv, p.uniqBy = Vv, p.uniqWith = Gv, p.unset = Yx, p.unzip = ta, p.unzipWith = nu, p.update = qx, p.updateWith = Xx, p.values = xr, p.valuesIn = Zx, p.without = Kv, p.words = Au, p.wrap = zm, p.xor = Yv, p.xorBy = qv, p.xorWith = Xv, p.zip = Zv, p.zipObject = Jv, p.zipObjectDeep = Qv, p.zipWith = em, p.entries = Cu, p.entriesIn = Su, p.extend = yu, p.extendWith = gi, fa(p, p), p.add = Zw, p.attempt = Tu, p.camelCase = tw, p.capitalize = Eu, p.ceil = Jw, p.clamp = Jx, p.clone = Gm, p.cloneDeep = Ym, p.cloneDeepWith = qm, p.cloneWith = Km, p.conformsTo = Xm, p.deburr = Ru, p.defaultTo = Ow, p.divide = Qw, p.endsWith = nw, p.eq = Ht, p.escape = rw, p.escapeRegExp = ow, p.every = fm, p.find = pm, p.findIndex = Zc, p.findKey = Rx, p.findLast = hm, p.findLastIndex = Jc, p.findLastKey = Ax, p.floor = ey, p.forEach = ou, p.forEachRight = iu, p.forIn = Tx, p.forInRight = Px, p.forOwn = Ox, p.forOwnRight = Nx, p.get = sa, p.gt = Zm, p.gte = Jm, p.has = Mx, p.hasIn = aa, p.head = eu, p.identity = xt, p.includes = wm, p.indexOf = hv, p.inRange = Qx, p.invoke = jx, p.isArguments = Zn, p.isArray = ae, p.isArrayBuffer = Qm, p.isArrayLike = vt, p.isArrayLikeObject = Ge, p.isBoolean = ex, p.isBuffer = On, p.isDate = tx, p.isElement = nx, p.isEmpty = rx, p.isEqual = ox, p.isEqualWith = ix, p.isError = oa, p.isFinite = sx, p.isFunction = fn, p.isInteger = pu, p.isLength = pi, p.isMap = hu, p.isMatch = ax, p.isMatchWith = lx, p.isNaN = cx, p.isNative = ux, p.isNil = dx, p.isNull = fx, p.isNumber = gu, p.isObject = Ue, p.isObjectLike = Ve, p.isPlainObject = oo, p.isRegExp = ia, p.isSafeInteger = px, p.isSet = vu, p.isString = hi, p.isSymbol = St, p.isTypedArray = mr, p.isUndefined = hx, p.isWeakMap = gx, p.isWeakSet = vx, p.join = wv, p.kebabCase = iw, p.last = jt, p.lastIndexOf = yv, p.lowerCase = sw, p.lowerFirst = aw, p.lt = mx, p.lte = xx, p.max = ty, p.maxBy = ny, p.mean = ry, p.meanBy = oy, p.min = iy, p.minBy = sy, p.stubArray = pa, p.stubFalse = ha, p.stubObject = Vw, p.stubString = Gw, p.stubTrue = Kw, p.multiply = ay, p.nth = bv, p.noConflict = jw, p.noop = da, p.now = ui, p.pad = lw, p.padEnd = cw, p.padStart = uw, p.parseInt = fw, p.random = ew, p.reduce = Sm, p.reduceRight = Em, p.repeat = dw, p.replace = pw, p.result = zx, p.round = ly, p.runInContext = T, p.sample = Am, p.size = Om, p.snakeCase = hw, p.some = Nm, p.sortedIndex = Tv, p.sortedIndexBy = Pv, p.sortedIndexOf = Ov, p.sortedLastIndex = Nv, p.sortedLastIndexBy = Iv, p.sortedLastIndexOf = Lv, p.startCase = vw, p.startsWith = mw, p.subtract = cy, p.sum = uy, p.sumBy = fy, p.template = xw, p.times = Yw, p.toFinite = dn, p.toInteger = le, p.toLength = xu, p.toLower = ww, p.toNumber = Ft, p.toSafeInteger = wx, p.toString = Pe, p.toUpper = yw, p.trim = bw, p.trimEnd = _w, p.trimStart = Cw, p.truncate = Sw, p.unescape = Ew, p.uniqueId = Xw, p.upperCase = Rw, p.upperFirst = la, p.each = ou, p.eachRight = iu, p.first = eu, fa(p, function() {
        var e = {};
        return Xt(p, function(t, o) {
          Ne.call(p.prototype, o) || (e[o] = t);
        }), e;
      }(), { chain: !1 }), p.VERSION = s, It(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(e) {
        p[e].placeholder = p;
      }), It(["drop", "take"], function(e, t) {
        ye.prototype[e] = function(o) {
          o = o === r ? 1 : Xe(le(o), 0);
          var a = this.__filtered__ && !t ? new ye(this) : this.clone();
          return a.__filtered__ ? a.__takeCount__ = lt(o, a.__takeCount__) : a.__views__.push({
            size: lt(o, Ee),
            type: e + (a.__dir__ < 0 ? "Right" : "")
          }), a;
        }, ye.prototype[e + "Right"] = function(o) {
          return this.reverse()[e](o).reverse();
        };
      }), It(["filter", "map", "takeWhile"], function(e, t) {
        var o = t + 1, a = o == ne || o == oe;
        ye.prototype[e] = function(c) {
          var h = this.clone();
          return h.__iteratees__.push({
            iteratee: X(c, 3),
            type: o
          }), h.__filtered__ = h.__filtered__ || a, h;
        };
      }), It(["head", "last"], function(e, t) {
        var o = "take" + (t ? "Right" : "");
        ye.prototype[e] = function() {
          return this[o](1).value()[0];
        };
      }), It(["initial", "tail"], function(e, t) {
        var o = "drop" + (t ? "" : "Right");
        ye.prototype[e] = function() {
          return this.__filtered__ ? new ye(this) : this[o](1);
        };
      }), ye.prototype.compact = function() {
        return this.filter(xt);
      }, ye.prototype.find = function(e) {
        return this.filter(e).head();
      }, ye.prototype.findLast = function(e) {
        return this.reverse().find(e);
      }, ye.prototype.invokeMap = de(function(e, t) {
        return typeof e == "function" ? new ye(this) : this.map(function(o) {
          return Jr(o, e, t);
        });
      }), ye.prototype.reject = function(e) {
        return this.filter(di(X(e)));
      }, ye.prototype.slice = function(e, t) {
        e = le(e);
        var o = this;
        return o.__filtered__ && (e > 0 || t < 0) ? new ye(o) : (e < 0 ? o = o.takeRight(-e) : e && (o = o.drop(e)), t !== r && (t = le(t), o = t < 0 ? o.dropRight(-t) : o.take(t - e)), o);
      }, ye.prototype.takeRightWhile = function(e) {
        return this.reverse().takeWhile(e).reverse();
      }, ye.prototype.toArray = function() {
        return this.take(Ee);
      }, Xt(ye.prototype, function(e, t) {
        var o = /^(?:filter|find|map|reject)|While$/.test(t), a = /^(?:head|last)$/.test(t), c = p[a ? "take" + (t == "last" ? "Right" : "") : t], h = a || /^find/.test(t);
        c && (p.prototype[t] = function() {
          var x = this.__wrapped__, S = a ? [1] : arguments, P = x instanceof ye, k = S[0], j = P || ae(x), F = function(ge) {
            var _e = c.apply(p, Cn([ge], S));
            return a && H ? _e[0] : _e;
          };
          j && o && typeof k == "function" && k.length != 1 && (P = j = !1);
          var H = this.__chain__, K = !!this.__actions__.length, J = h && !H, fe = P && !K;
          if (!h && j) {
            x = fe ? x : new ye(this);
            var Q = e.apply(x, S);
            return Q.__actions__.push({ func: li, args: [F], thisArg: r }), new Mt(Q, H);
          }
          return J && fe ? e.apply(this, S) : (Q = this.thru(F), J ? a ? Q.value()[0] : Q.value() : Q);
        });
      }), It(["pop", "push", "shift", "sort", "splice", "unshift"], function(e) {
        var t = Mo[e], o = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru", a = /^(?:pop|shift)$/.test(e);
        p.prototype[e] = function() {
          var c = arguments;
          if (a && !this.__chain__) {
            var h = this.value();
            return t.apply(ae(h) ? h : [], c);
          }
          return this[o](function(x) {
            return t.apply(ae(x) ? x : [], c);
          });
        };
      }), Xt(ye.prototype, function(e, t) {
        var o = p[t];
        if (o) {
          var a = o.name + "";
          Ne.call(dr, a) || (dr[a] = []), dr[a].push({ name: t, func: o });
        }
      }), dr[ti(r, I).name] = [{
        name: "wrapper",
        func: r
      }], ye.prototype.clone = Eh, ye.prototype.reverse = Rh, ye.prototype.value = Ah, p.prototype.at = nm, p.prototype.chain = rm, p.prototype.commit = om, p.prototype.next = im, p.prototype.plant = am, p.prototype.reverse = lm, p.prototype.toJSON = p.prototype.valueOf = p.prototype.value = cm, p.prototype.first = p.prototype.head, Vr && (p.prototype[Vr] = sm), p;
    }, cr = oh();
    Hn ? ((Hn.exports = cr)._ = cr, us._ = cr) : rt._ = cr;
  }).call(io);
})(Ei, Ei.exports);
var my = Ei.exports;
const xy = /* @__PURE__ */ hy(my);
function wy(n, i) {
  typeof n == "function" ? n(i) : n != null && (n.current = i);
}
function uf(...n) {
  return (i) => n.forEach((r) => wy(r, i));
}
function Ye(...n) {
  return v.useCallback(uf(...n), n);
}
var Ar = v.forwardRef((n, i) => {
  const { children: r, ...s } = n, l = v.Children.toArray(r), u = l.find(yy);
  if (u) {
    const f = u.props.children, d = l.map((g) => g === u ? v.Children.count(f) > 1 ? v.Children.only(null) : v.isValidElement(f) ? f.props.children : null : g);
    return /* @__PURE__ */ b.jsx(Ta, { ...s, ref: i, children: v.isValidElement(f) ? v.cloneElement(f, void 0, d) : null });
  }
  return /* @__PURE__ */ b.jsx(Ta, { ...s, ref: i, children: r });
});
Ar.displayName = "Slot";
var Ta = v.forwardRef((n, i) => {
  const { children: r, ...s } = n;
  if (v.isValidElement(r)) {
    const l = _y(r);
    return v.cloneElement(r, {
      ...by(s, r.props),
      // @ts-ignore
      ref: i ? uf(i, l) : l
    });
  }
  return v.Children.count(r) > 1 ? v.Children.only(null) : null;
});
Ta.displayName = "SlotClone";
var ff = ({ children: n }) => /* @__PURE__ */ b.jsx(b.Fragment, { children: n });
function yy(n) {
  return v.isValidElement(n) && n.type === ff;
}
function by(n, i) {
  const r = { ...i };
  for (const s in i) {
    const l = n[s], u = i[s];
    /^on[A-Z]/.test(s) ? l && u ? r[s] = (...d) => {
      u(...d), l(...d);
    } : l && (r[s] = l) : s === "style" ? r[s] = { ...l, ...u } : s === "className" && (r[s] = [l, u].filter(Boolean).join(" "));
  }
  return { ...n, ...r };
}
function _y(n) {
  var s, l;
  let i = (s = Object.getOwnPropertyDescriptor(n.props, "ref")) == null ? void 0 : s.get, r = i && "isReactWarning" in i && i.isReactWarning;
  return r ? n.ref : (i = (l = Object.getOwnPropertyDescriptor(n, "ref")) == null ? void 0 : l.get, r = i && "isReactWarning" in i && i.isReactWarning, r ? n.props.ref : n.props.ref || n.ref);
}
function df(n) {
  var i, r, s = "";
  if (typeof n == "string" || typeof n == "number")
    s += n;
  else if (typeof n == "object")
    if (Array.isArray(n))
      for (i = 0; i < n.length; i++)
        n[i] && (r = df(n[i])) && (s && (s += " "), s += r);
    else
      for (i in n)
        n[i] && (s && (s += " "), s += i);
  return s;
}
function Cy() {
  for (var n, i, r = 0, s = ""; r < arguments.length; )
    (n = arguments[r++]) && (i = df(n)) && (s && (s += " "), s += i);
  return s;
}
const Lu = (n) => typeof n == "boolean" ? "".concat(n) : n === 0 ? "0" : n, Mu = Cy, pf = (n, i) => (r) => {
  var s;
  if ((i == null ? void 0 : i.variants) == null)
    return Mu(n, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
  const { variants: l, defaultVariants: u } = i, f = Object.keys(l).map((m) => {
    const w = r == null ? void 0 : r[m], _ = u == null ? void 0 : u[m];
    if (w === null)
      return null;
    const E = Lu(w) || Lu(_);
    return l[m][E];
  }), d = r && Object.entries(r).reduce((m, w) => {
    let [_, E] = w;
    return E === void 0 || (m[_] = E), m;
  }, {}), g = i == null || (s = i.compoundVariants) === null || s === void 0 ? void 0 : s.reduce((m, w) => {
    let { class: _, className: E, ...R } = w;
    return Object.entries(R).every((O) => {
      let [y, A] = O;
      return Array.isArray(A) ? A.includes({
        ...u,
        ...d
      }[y]) : {
        ...u,
        ...d
      }[y] === A;
    }) ? [
      ...m,
      _,
      E
    ] : m;
  }, []);
  return Mu(n, f, g, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
};
function hf(n) {
  var i, r, s = "";
  if (typeof n == "string" || typeof n == "number")
    s += n;
  else if (typeof n == "object")
    if (Array.isArray(n)) {
      var l = n.length;
      for (i = 0; i < l; i++)
        n[i] && (r = hf(n[i])) && (s && (s += " "), s += r);
    } else
      for (r in n)
        n[r] && (s && (s += " "), s += r);
  return s;
}
function Sy() {
  for (var n, i, r = 0, s = "", l = arguments.length; r < l; r++)
    (n = arguments[r]) && (i = hf(n)) && (s && (s += " "), s += i);
  return s;
}
const za = "-", Ey = (n) => {
  const i = Ay(n), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: s
  } = n;
  return {
    getClassGroupId: (f) => {
      const d = f.split(za);
      return d[0] === "" && d.length !== 1 && d.shift(), gf(d, i) || Ry(f);
    },
    getConflictingClassGroupIds: (f, d) => {
      const g = r[f] || [];
      return d && s[f] ? [...g, ...s[f]] : g;
    }
  };
}, gf = (n, i) => {
  var f;
  if (n.length === 0)
    return i.classGroupId;
  const r = n[0], s = i.nextPart.get(r), l = s ? gf(n.slice(1), s) : void 0;
  if (l)
    return l;
  if (i.validators.length === 0)
    return;
  const u = n.join(za);
  return (f = i.validators.find(({
    validator: d
  }) => d(u))) == null ? void 0 : f.classGroupId;
}, Du = /^\[(.+)\]$/, Ry = (n) => {
  if (Du.test(n)) {
    const i = Du.exec(n)[1], r = i == null ? void 0 : i.substring(0, i.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, Ay = (n) => {
  const {
    theme: i,
    prefix: r
  } = n, s = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Py(Object.entries(n.classGroups), r).forEach(([u, f]) => {
    Pa(f, s, u, i);
  }), s;
}, Pa = (n, i, r, s) => {
  n.forEach((l) => {
    if (typeof l == "string") {
      const u = l === "" ? i : ku(i, l);
      u.classGroupId = r;
      return;
    }
    if (typeof l == "function") {
      if (Ty(l)) {
        Pa(l(s), i, r, s);
        return;
      }
      i.validators.push({
        validator: l,
        classGroupId: r
      });
      return;
    }
    Object.entries(l).forEach(([u, f]) => {
      Pa(f, ku(i, u), r, s);
    });
  });
}, ku = (n, i) => {
  let r = n;
  return i.split(za).forEach((s) => {
    r.nextPart.has(s) || r.nextPart.set(s, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(s);
  }), r;
}, Ty = (n) => n.isThemeGetter, Py = (n, i) => i ? n.map(([r, s]) => {
  const l = s.map((u) => typeof u == "string" ? i + u : typeof u == "object" ? Object.fromEntries(Object.entries(u).map(([f, d]) => [i + f, d])) : u);
  return [r, l];
}) : n, Oy = (n) => {
  if (n < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let i = 0, r = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map();
  const l = (u, f) => {
    r.set(u, f), i++, i > n && (i = 0, s = r, r = /* @__PURE__ */ new Map());
  };
  return {
    get(u) {
      let f = r.get(u);
      if (f !== void 0)
        return f;
      if ((f = s.get(u)) !== void 0)
        return l(u, f), f;
    },
    set(u, f) {
      r.has(u) ? r.set(u, f) : l(u, f);
    }
  };
}, vf = "!", Ny = (n) => {
  const {
    separator: i,
    experimentalParseClassName: r
  } = n, s = i.length === 1, l = i[0], u = i.length, f = (d) => {
    const g = [];
    let m = 0, w = 0, _;
    for (let A = 0; A < d.length; A++) {
      let I = d[A];
      if (m === 0) {
        if (I === l && (s || d.slice(A, A + u) === i)) {
          g.push(d.slice(w, A)), w = A + u;
          continue;
        }
        if (I === "/") {
          _ = A;
          continue;
        }
      }
      I === "[" ? m++ : I === "]" && m--;
    }
    const E = g.length === 0 ? d : d.substring(w), R = E.startsWith(vf), O = R ? E.substring(1) : E, y = _ && _ > w ? _ - w : void 0;
    return {
      modifiers: g,
      hasImportantModifier: R,
      baseClassName: O,
      maybePostfixModifierPosition: y
    };
  };
  return r ? (d) => r({
    className: d,
    parseClassName: f
  }) : f;
}, Iy = (n) => {
  if (n.length <= 1)
    return n;
  const i = [];
  let r = [];
  return n.forEach((s) => {
    s[0] === "[" ? (i.push(...r.sort(), s), r = []) : r.push(s);
  }), i.push(...r.sort()), i;
}, Ly = (n) => ({
  cache: Oy(n.cacheSize),
  parseClassName: Ny(n),
  ...Ey(n)
}), My = /\s+/, Dy = (n, i) => {
  const {
    parseClassName: r,
    getClassGroupId: s,
    getConflictingClassGroupIds: l
  } = i, u = [], f = n.trim().split(My);
  let d = "";
  for (let g = f.length - 1; g >= 0; g -= 1) {
    const m = f[g], {
      modifiers: w,
      hasImportantModifier: _,
      baseClassName: E,
      maybePostfixModifierPosition: R
    } = r(m);
    let O = !!R, y = s(O ? E.substring(0, R) : E);
    if (!y) {
      if (!O) {
        d = m + (d.length > 0 ? " " + d : d);
        continue;
      }
      if (y = s(E), !y) {
        d = m + (d.length > 0 ? " " + d : d);
        continue;
      }
      O = !1;
    }
    const A = Iy(w).join(":"), I = _ ? A + vf : A, N = I + y;
    if (u.includes(N))
      continue;
    u.push(N);
    const M = l(y, O);
    for (let W = 0; W < M.length; ++W) {
      const $ = M[W];
      u.push(I + $);
    }
    d = m + (d.length > 0 ? " " + d : d);
  }
  return d;
};
function ky() {
  let n = 0, i, r, s = "";
  for (; n < arguments.length; )
    (i = arguments[n++]) && (r = mf(i)) && (s && (s += " "), s += r);
  return s;
}
const mf = (n) => {
  if (typeof n == "string")
    return n;
  let i, r = "";
  for (let s = 0; s < n.length; s++)
    n[s] && (i = mf(n[s])) && (r && (r += " "), r += i);
  return r;
};
function jy(n, ...i) {
  let r, s, l, u = f;
  function f(g) {
    const m = i.reduce((w, _) => _(w), n());
    return r = Ly(m), s = r.cache.get, l = r.cache.set, u = d, d(g);
  }
  function d(g) {
    const m = s(g);
    if (m)
      return m;
    const w = Dy(g, r);
    return l(g, w), w;
  }
  return function() {
    return u(ky.apply(null, arguments));
  };
}
const Fe = (n) => {
  const i = (r) => r[n] || [];
  return i.isThemeGetter = !0, i;
}, xf = /^\[(?:([a-z-]+):)?(.+)\]$/i, Fy = /^\d+\/\d+$/, Wy = /* @__PURE__ */ new Set(["px", "full", "screen"]), By = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, $y = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Uy = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Hy = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, zy = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, hn = (n) => _r(n) || Wy.has(n) || Fy.test(n), Nn = (n) => Or(n, "length", Jy), _r = (n) => !!n && !Number.isNaN(Number(n)), ga = (n) => Or(n, "number", _r), lo = (n) => !!n && Number.isInteger(Number(n)), Vy = (n) => n.endsWith("%") && _r(n.slice(0, -1)), ce = (n) => xf.test(n), In = (n) => By.test(n), Gy = /* @__PURE__ */ new Set(["length", "size", "percentage"]), Ky = (n) => Or(n, Gy, wf), Yy = (n) => Or(n, "position", wf), qy = /* @__PURE__ */ new Set(["image", "url"]), Xy = (n) => Or(n, qy, eb), Zy = (n) => Or(n, "", Qy), co = () => !0, Or = (n, i, r) => {
  const s = xf.exec(n);
  return s ? s[1] ? typeof i == "string" ? s[1] === i : i.has(s[1]) : r(s[2]) : !1;
}, Jy = (n) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  $y.test(n) && !Uy.test(n)
), wf = () => !1, Qy = (n) => Hy.test(n), eb = (n) => zy.test(n), tb = () => {
  const n = Fe("colors"), i = Fe("spacing"), r = Fe("blur"), s = Fe("brightness"), l = Fe("borderColor"), u = Fe("borderRadius"), f = Fe("borderSpacing"), d = Fe("borderWidth"), g = Fe("contrast"), m = Fe("grayscale"), w = Fe("hueRotate"), _ = Fe("invert"), E = Fe("gap"), R = Fe("gradientColorStops"), O = Fe("gradientColorStopPositions"), y = Fe("inset"), A = Fe("margin"), I = Fe("opacity"), N = Fe("padding"), M = Fe("saturate"), W = Fe("scale"), $ = Fe("sepia"), G = Fe("skew"), U = Fe("space"), ee = Fe("translate"), ue = () => ["auto", "contain", "none"], he = () => ["auto", "hidden", "clip", "visible", "scroll"], Ce = () => ["auto", ce, i], q = () => [ce, i], re = () => ["", hn, Nn], ne = () => ["auto", _r, ce], Se = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], oe = () => ["solid", "dashed", "dotted", "double", "none"], se = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], Y = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], ve = () => ["", "0", ce], ke = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], Ee = () => [_r, ce];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [co],
      spacing: [hn, Nn],
      blur: ["none", "", In, ce],
      brightness: Ee(),
      borderColor: [n],
      borderRadius: ["none", "", "full", In, ce],
      borderSpacing: q(),
      borderWidth: re(),
      contrast: Ee(),
      grayscale: ve(),
      hueRotate: Ee(),
      invert: ve(),
      gap: q(),
      gradientColorStops: [n],
      gradientColorStopPositions: [Vy, Nn],
      inset: Ce(),
      margin: Ce(),
      opacity: Ee(),
      padding: q(),
      saturate: Ee(),
      scale: Ee(),
      sepia: ve(),
      skew: Ee(),
      space: q(),
      translate: q()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", ce]
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
        columns: [In]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": ke()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": ke()
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
        object: [...Se(), ce]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: he()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": he()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": he()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: ue()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": ue()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": ue()
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
        inset: [y]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [y]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [y]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [y]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [y]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [y]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [y]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [y]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [y]
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
        z: ["auto", lo, ce]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: Ce()
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
        flex: ["1", "auto", "initial", "none", ce]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ve()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ve()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", lo, ce]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [co]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", lo, ce]
        }, ce]
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
        "grid-rows": [co]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [lo, ce]
        }, ce]
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
        "auto-cols": ["auto", "min", "max", "fr", ce]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", ce]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [E]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [E]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [E]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...Y()]
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
        content: ["normal", ...Y(), "baseline"]
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
        "place-content": [...Y(), "baseline"]
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
        p: [N]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [N]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [N]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [N]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [N]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [N]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [N]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [N]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [N]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [A]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [A]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [A]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [A]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [A]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [A]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [A]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [A]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [A]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", ce, i]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [ce, i, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [ce, i, "none", "full", "min", "max", "fit", "prose", {
          screen: [In]
        }, In]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [ce, i, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [ce, i, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [ce, i, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [ce, i, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", In, Nn]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", ga]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [co]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", ce]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", _r, ga]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", hn, ce]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", ce]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", ce]
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
        placeholder: [n]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [I]
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
        text: [n]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [I]
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
        decoration: [...oe(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", hn, Nn]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", hn, ce]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [n]
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
        indent: q()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", ce]
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
        content: ["none", ce]
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
        "bg-opacity": [I]
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
        bg: [...Se(), Yy]
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
        bg: ["auto", "cover", "contain", Ky]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Xy]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [n]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [O]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [O]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [O]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [R]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [R]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [R]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [u]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [u]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [u]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [u]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [u]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [u]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [u]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [u]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [u]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [u]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [u]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [u]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [u]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [u]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [u]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [d]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [d]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [d]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [d]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [d]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [d]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [d]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [d]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [d]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [I]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...oe(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [d]
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
        "divide-y": [d]
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
        "divide-opacity": [I]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: oe()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [l]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [l]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [l]
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": [l]
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": [l]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [l]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [l]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [l]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [l]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [l]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...oe()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [hn, ce]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [hn, Nn]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [n]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: re()
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
        ring: [n]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [I]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [hn, Nn]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [n]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", In, Zy]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [co]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [I]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...se(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": se()
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
        brightness: [s]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [g]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", In, ce]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [m]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [w]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [_]
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
        sepia: [$]
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
        "backdrop-brightness": [s]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [g]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [m]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [w]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [_]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [I]
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
        "backdrop-sepia": [$]
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
        "border-spacing": [f]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [f]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [f]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", ce]
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
        ease: ["linear", "in", "out", "in-out", ce]
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
        animate: ["none", "spin", "ping", "pulse", "bounce", ce]
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
        scale: [W]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [W]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [W]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [lo, ce]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [ee]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [ee]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [G]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [G]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", ce]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", n]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", ce]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [n]
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
        "scroll-m": q()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": q()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": q()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": q()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": q()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": q()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": q()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": q()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": q()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": q()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": q()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": q()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": q()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": q()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": q()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": q()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": q()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": q()
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
        "will-change": ["auto", "scroll", "contents", "transform", ce]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [n, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [hn, Nn, ga]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [n, "none"]
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
}, nb = /* @__PURE__ */ jy(tb);
function et(...n) {
  return nb(Sy(n));
}
function rb(n) {
  switch (n) {
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
const ob = pf(
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
), Cr = v.forwardRef(
  ({ className: n, variant: i, size: r, asChild: s = !1, ...l }, u) => {
    const f = s ? Ar : "button";
    return /* @__PURE__ */ b.jsx(
      f,
      {
        className: et(ob({ variant: i, size: r, className: n })),
        ref: u,
        ...l
      }
    );
  }
);
Cr.displayName = "Button";
const ib = "_counter_1wts1_1", sb = "_header_1wts1_10", ab = "_button_1wts1_16", va = {
  counter: ib,
  header: sb,
  button: ab
}, lb = (n) => {
  const [i, r] = af(n);
  return {
    count: i,
    incrementCount: () => r(i + 1)
  };
}, { throttle: cb } = xy, QC = ({ initialValue: n = 0 }) => {
  const { count: i, incrementCount: r } = lb(n);
  return lf(() => {
    cb(() => {
      console.log("throttle");
    }, 10)();
  }, []), /* @__PURE__ */ b.jsxs("div", { className: va.counter, children: [
    /* @__PURE__ */ b.jsx("h2", { className: va.header, children: "Counter" }),
    /* @__PURE__ */ b.jsx("button", { className: va.button, type: "button", onClick: r, children: "Increment by one" }),
    /* @__PURE__ */ b.jsx(Cr, { variant: "outline", children: "Shadcn button" }),
    /* @__PURE__ */ b.jsxs("div", { className: "bg-red-500", children: [
      "Total value: ",
      /* @__PURE__ */ b.jsx("strong", { children: i })
    ] })
  ] });
};
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ub = (n) => n.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), yf = (...n) => n.filter((i, r, s) => !!i && i.trim() !== "" && s.indexOf(i) === r).join(" ").trim();
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var fb = {
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
const db = cf(
  ({
    color: n = "currentColor",
    size: i = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: s,
    className: l = "",
    children: u,
    iconNode: f,
    ...d
  }, g) => Ra(
    "svg",
    {
      ref: g,
      ...fb,
      width: i,
      height: i,
      stroke: n,
      strokeWidth: s ? Number(r) * 24 / Number(i) : r,
      className: yf("lucide", l),
      ...d
    },
    [
      ...f.map(([m, w]) => Ra(m, w)),
      ...Array.isArray(u) ? u : [u]
    ]
  )
);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xo = (n, i) => {
  const r = cf(
    ({ className: s, ...l }, u) => Ra(db, {
      ref: u,
      iconNode: i,
      className: yf(`lucide-${ub(n)}`, s),
      ...l
    })
  );
  return r.displayName = `${n}`, r;
};
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pb = xo("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bf = xo("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hb = xo("ChevronUp", [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Oa = xo("CircleHelp", [
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
const _f = xo("ExternalLink", [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
]);
function ju(n, [i, r]) {
  return Math.min(r, Math.max(i, n));
}
function De(n, i, { checkForDefaultPrevented: r = !0 } = {}) {
  return function(l) {
    if (n == null || n(l), r === !1 || !l.defaultPrevented)
      return i == null ? void 0 : i(l);
  };
}
function gb(n, i = []) {
  let r = [];
  function s(u, f) {
    const d = v.createContext(f), g = r.length;
    r = [...r, f];
    function m(_) {
      const { scope: E, children: R, ...O } = _, y = (E == null ? void 0 : E[n][g]) || d, A = v.useMemo(() => O, Object.values(O));
      return /* @__PURE__ */ b.jsx(y.Provider, { value: A, children: R });
    }
    function w(_, E) {
      const R = (E == null ? void 0 : E[n][g]) || d, O = v.useContext(R);
      if (O)
        return O;
      if (f !== void 0)
        return f;
      throw new Error(`\`${_}\` must be used within \`${u}\``);
    }
    return m.displayName = u + "Provider", [m, w];
  }
  const l = () => {
    const u = r.map((f) => v.createContext(f));
    return function(d) {
      const g = (d == null ? void 0 : d[n]) || u;
      return v.useMemo(
        () => ({ [`__scope${n}`]: { ...d, [n]: g } }),
        [d, g]
      );
    };
  };
  return l.scopeName = n, [s, vb(l, ...i)];
}
function vb(...n) {
  const i = n[0];
  if (n.length === 1)
    return i;
  const r = () => {
    const s = n.map((l) => ({
      useScope: l(),
      scopeName: l.scopeName
    }));
    return function(u) {
      const f = s.reduce((d, { useScope: g, scopeName: m }) => {
        const _ = g(u)[`__scope${m}`];
        return { ...d, ..._ };
      }, {});
      return v.useMemo(() => ({ [`__scope${i.scopeName}`]: f }), [f]);
    };
  };
  return r.scopeName = i.scopeName, r;
}
function mb(n) {
  const i = n + "CollectionProvider", [r, s] = gb(i), [l, u] = r(
    i,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), f = (R) => {
    const { scope: O, children: y } = R, A = gn.useRef(null), I = gn.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ b.jsx(l, { scope: O, itemMap: I, collectionRef: A, children: y });
  };
  f.displayName = i;
  const d = n + "CollectionSlot", g = gn.forwardRef(
    (R, O) => {
      const { scope: y, children: A } = R, I = u(d, y), N = Ye(O, I.collectionRef);
      return /* @__PURE__ */ b.jsx(Ar, { ref: N, children: A });
    }
  );
  g.displayName = d;
  const m = n + "CollectionItemSlot", w = "data-radix-collection-item", _ = gn.forwardRef(
    (R, O) => {
      const { scope: y, children: A, ...I } = R, N = gn.useRef(null), M = Ye(O, N), W = u(m, y);
      return gn.useEffect(() => (W.itemMap.set(N, { ref: N, ...I }), () => void W.itemMap.delete(N))), /* @__PURE__ */ b.jsx(Ar, { [w]: "", ref: M, children: A });
    }
  );
  _.displayName = m;
  function E(R) {
    const O = u(n + "CollectionConsumer", R);
    return gn.useCallback(() => {
      const A = O.collectionRef.current;
      if (!A)
        return [];
      const I = Array.from(A.querySelectorAll(`[${w}]`));
      return Array.from(O.itemMap.values()).sort(
        (W, $) => I.indexOf(W.ref.current) - I.indexOf($.ref.current)
      );
    }, [O.collectionRef, O.itemMap]);
  }
  return [
    { Provider: f, Slot: g, ItemSlot: _ },
    E,
    s
  ];
}
function Cf(n, i = []) {
  let r = [];
  function s(u, f) {
    const d = v.createContext(f), g = r.length;
    r = [...r, f];
    const m = (_) => {
      var I;
      const { scope: E, children: R, ...O } = _, y = ((I = E == null ? void 0 : E[n]) == null ? void 0 : I[g]) || d, A = v.useMemo(() => O, Object.values(O));
      return /* @__PURE__ */ b.jsx(y.Provider, { value: A, children: R });
    };
    m.displayName = u + "Provider";
    function w(_, E) {
      var y;
      const R = ((y = E == null ? void 0 : E[n]) == null ? void 0 : y[g]) || d, O = v.useContext(R);
      if (O)
        return O;
      if (f !== void 0)
        return f;
      throw new Error(`\`${_}\` must be used within \`${u}\``);
    }
    return [m, w];
  }
  const l = () => {
    const u = r.map((f) => v.createContext(f));
    return function(d) {
      const g = (d == null ? void 0 : d[n]) || u;
      return v.useMemo(
        () => ({ [`__scope${n}`]: { ...d, [n]: g } }),
        [d, g]
      );
    };
  };
  return l.scopeName = n, [s, xb(l, ...i)];
}
function xb(...n) {
  const i = n[0];
  if (n.length === 1)
    return i;
  const r = () => {
    const s = n.map((l) => ({
      useScope: l(),
      scopeName: l.scopeName
    }));
    return function(u) {
      const f = s.reduce((d, { useScope: g, scopeName: m }) => {
        const _ = g(u)[`__scope${m}`];
        return { ...d, ..._ };
      }, {});
      return v.useMemo(() => ({ [`__scope${i.scopeName}`]: f }), [f]);
    };
  };
  return r.scopeName = i.scopeName, r;
}
var wb = v.createContext(void 0);
function yb(n) {
  const i = v.useContext(wb);
  return n || i || "ltr";
}
var bb = [
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
], He = bb.reduce((n, i) => {
  const r = v.forwardRef((s, l) => {
    const { asChild: u, ...f } = s, d = u ? Ar : i;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ b.jsx(d, { ...f, ref: l });
  });
  return r.displayName = `Primitive.${i}`, { ...n, [i]: r };
}, {});
function _b(n, i) {
  n && Li.flushSync(() => n.dispatchEvent(i));
}
function vn(n) {
  const i = v.useRef(n);
  return v.useEffect(() => {
    i.current = n;
  }), v.useMemo(() => (...r) => {
    var s;
    return (s = i.current) == null ? void 0 : s.call(i, ...r);
  }, []);
}
function Cb(n, i = globalThis == null ? void 0 : globalThis.document) {
  const r = vn(n);
  v.useEffect(() => {
    const s = (l) => {
      l.key === "Escape" && r(l);
    };
    return i.addEventListener("keydown", s, { capture: !0 }), () => i.removeEventListener("keydown", s, { capture: !0 });
  }, [r, i]);
}
var Sb = "DismissableLayer", Na = "dismissableLayer.update", Eb = "dismissableLayer.pointerDownOutside", Rb = "dismissableLayer.focusOutside", Fu, Sf = v.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Va = v.forwardRef(
  (n, i) => {
    const {
      disableOutsidePointerEvents: r = !1,
      onEscapeKeyDown: s,
      onPointerDownOutside: l,
      onFocusOutside: u,
      onInteractOutside: f,
      onDismiss: d,
      ...g
    } = n, m = v.useContext(Sf), [w, _] = v.useState(null), E = (w == null ? void 0 : w.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, R] = v.useState({}), O = Ye(i, (U) => _(U)), y = Array.from(m.layers), [A] = [...m.layersWithOutsidePointerEventsDisabled].slice(-1), I = y.indexOf(A), N = w ? y.indexOf(w) : -1, M = m.layersWithOutsidePointerEventsDisabled.size > 0, W = N >= I, $ = Pb((U) => {
      const ee = U.target, ue = [...m.branches].some((he) => he.contains(ee));
      !W || ue || (l == null || l(U), f == null || f(U), U.defaultPrevented || d == null || d());
    }, E), G = Ob((U) => {
      const ee = U.target;
      [...m.branches].some((he) => he.contains(ee)) || (u == null || u(U), f == null || f(U), U.defaultPrevented || d == null || d());
    }, E);
    return Cb((U) => {
      N === m.layers.size - 1 && (s == null || s(U), !U.defaultPrevented && d && (U.preventDefault(), d()));
    }, E), v.useEffect(() => {
      if (w)
        return r && (m.layersWithOutsidePointerEventsDisabled.size === 0 && (Fu = E.body.style.pointerEvents, E.body.style.pointerEvents = "none"), m.layersWithOutsidePointerEventsDisabled.add(w)), m.layers.add(w), Wu(), () => {
          r && m.layersWithOutsidePointerEventsDisabled.size === 1 && (E.body.style.pointerEvents = Fu);
        };
    }, [w, E, r, m]), v.useEffect(() => () => {
      w && (m.layers.delete(w), m.layersWithOutsidePointerEventsDisabled.delete(w), Wu());
    }, [w, m]), v.useEffect(() => {
      const U = () => R({});
      return document.addEventListener(Na, U), () => document.removeEventListener(Na, U);
    }, []), /* @__PURE__ */ b.jsx(
      He.div,
      {
        ...g,
        ref: O,
        style: {
          pointerEvents: M ? W ? "auto" : "none" : void 0,
          ...n.style
        },
        onFocusCapture: De(n.onFocusCapture, G.onFocusCapture),
        onBlurCapture: De(n.onBlurCapture, G.onBlurCapture),
        onPointerDownCapture: De(
          n.onPointerDownCapture,
          $.onPointerDownCapture
        )
      }
    );
  }
);
Va.displayName = Sb;
var Ab = "DismissableLayerBranch", Tb = v.forwardRef((n, i) => {
  const r = v.useContext(Sf), s = v.useRef(null), l = Ye(i, s);
  return v.useEffect(() => {
    const u = s.current;
    if (u)
      return r.branches.add(u), () => {
        r.branches.delete(u);
      };
  }, [r.branches]), /* @__PURE__ */ b.jsx(He.div, { ...n, ref: l });
});
Tb.displayName = Ab;
function Pb(n, i = globalThis == null ? void 0 : globalThis.document) {
  const r = vn(n), s = v.useRef(!1), l = v.useRef(() => {
  });
  return v.useEffect(() => {
    const u = (d) => {
      if (d.target && !s.current) {
        let g = function() {
          Ef(
            Eb,
            r,
            m,
            { discrete: !0 }
          );
        };
        const m = { originalEvent: d };
        d.pointerType === "touch" ? (i.removeEventListener("click", l.current), l.current = g, i.addEventListener("click", l.current, { once: !0 })) : g();
      } else
        i.removeEventListener("click", l.current);
      s.current = !1;
    }, f = window.setTimeout(() => {
      i.addEventListener("pointerdown", u);
    }, 0);
    return () => {
      window.clearTimeout(f), i.removeEventListener("pointerdown", u), i.removeEventListener("click", l.current);
    };
  }, [i, r]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => s.current = !0
  };
}
function Ob(n, i = globalThis == null ? void 0 : globalThis.document) {
  const r = vn(n), s = v.useRef(!1);
  return v.useEffect(() => {
    const l = (u) => {
      u.target && !s.current && Ef(Rb, r, { originalEvent: u }, {
        discrete: !1
      });
    };
    return i.addEventListener("focusin", l), () => i.removeEventListener("focusin", l);
  }, [i, r]), {
    onFocusCapture: () => s.current = !0,
    onBlurCapture: () => s.current = !1
  };
}
function Wu() {
  const n = new CustomEvent(Na);
  document.dispatchEvent(n);
}
function Ef(n, i, r, { discrete: s }) {
  const l = r.originalEvent.target, u = new CustomEvent(n, { bubbles: !1, cancelable: !0, detail: r });
  i && l.addEventListener(n, i, { once: !0 }), s ? _b(l, u) : l.dispatchEvent(u);
}
var ma = 0;
function Nb() {
  v.useEffect(() => {
    const n = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", n[0] ?? Bu()), document.body.insertAdjacentElement("beforeend", n[1] ?? Bu()), ma++, () => {
      ma === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((i) => i.remove()), ma--;
    };
  }, []);
}
function Bu() {
  const n = document.createElement("span");
  return n.setAttribute("data-radix-focus-guard", ""), n.tabIndex = 0, n.style.outline = "none", n.style.opacity = "0", n.style.position = "fixed", n.style.pointerEvents = "none", n;
}
var xa = "focusScope.autoFocusOnMount", wa = "focusScope.autoFocusOnUnmount", $u = { bubbles: !1, cancelable: !0 }, Ib = "FocusScope", Rf = v.forwardRef((n, i) => {
  const {
    loop: r = !1,
    trapped: s = !1,
    onMountAutoFocus: l,
    onUnmountAutoFocus: u,
    ...f
  } = n, [d, g] = v.useState(null), m = vn(l), w = vn(u), _ = v.useRef(null), E = Ye(i, (y) => g(y)), R = v.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  v.useEffect(() => {
    if (s) {
      let y = function(M) {
        if (R.paused || !d)
          return;
        const W = M.target;
        d.contains(W) ? _.current = W : Ln(_.current, { select: !0 });
      }, A = function(M) {
        if (R.paused || !d)
          return;
        const W = M.relatedTarget;
        W !== null && (d.contains(W) || Ln(_.current, { select: !0 }));
      }, I = function(M) {
        if (document.activeElement === document.body)
          for (const $ of M)
            $.removedNodes.length > 0 && Ln(d);
      };
      document.addEventListener("focusin", y), document.addEventListener("focusout", A);
      const N = new MutationObserver(I);
      return d && N.observe(d, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", y), document.removeEventListener("focusout", A), N.disconnect();
      };
    }
  }, [s, d, R.paused]), v.useEffect(() => {
    if (d) {
      Hu.add(R);
      const y = document.activeElement;
      if (!d.contains(y)) {
        const I = new CustomEvent(xa, $u);
        d.addEventListener(xa, m), d.dispatchEvent(I), I.defaultPrevented || (Lb(Fb(Af(d)), { select: !0 }), document.activeElement === y && Ln(d));
      }
      return () => {
        d.removeEventListener(xa, m), setTimeout(() => {
          const I = new CustomEvent(wa, $u);
          d.addEventListener(wa, w), d.dispatchEvent(I), I.defaultPrevented || Ln(y ?? document.body, { select: !0 }), d.removeEventListener(wa, w), Hu.remove(R);
        }, 0);
      };
    }
  }, [d, m, w, R]);
  const O = v.useCallback(
    (y) => {
      if (!r && !s || R.paused)
        return;
      const A = y.key === "Tab" && !y.altKey && !y.ctrlKey && !y.metaKey, I = document.activeElement;
      if (A && I) {
        const N = y.currentTarget, [M, W] = Mb(N);
        M && W ? !y.shiftKey && I === W ? (y.preventDefault(), r && Ln(M, { select: !0 })) : y.shiftKey && I === M && (y.preventDefault(), r && Ln(W, { select: !0 })) : I === N && y.preventDefault();
      }
    },
    [r, s, R.paused]
  );
  return /* @__PURE__ */ b.jsx(He.div, { tabIndex: -1, ...f, ref: E, onKeyDown: O });
});
Rf.displayName = Ib;
function Lb(n, { select: i = !1 } = {}) {
  const r = document.activeElement;
  for (const s of n)
    if (Ln(s, { select: i }), document.activeElement !== r)
      return;
}
function Mb(n) {
  const i = Af(n), r = Uu(i, n), s = Uu(i.reverse(), n);
  return [r, s];
}
function Af(n) {
  const i = [], r = document.createTreeWalker(n, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (s) => {
      const l = s.tagName === "INPUT" && s.type === "hidden";
      return s.disabled || s.hidden || l ? NodeFilter.FILTER_SKIP : s.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; r.nextNode(); )
    i.push(r.currentNode);
  return i;
}
function Uu(n, i) {
  for (const r of n)
    if (!Db(r, { upTo: i }))
      return r;
}
function Db(n, { upTo: i }) {
  if (getComputedStyle(n).visibility === "hidden")
    return !0;
  for (; n; ) {
    if (i !== void 0 && n === i)
      return !1;
    if (getComputedStyle(n).display === "none")
      return !0;
    n = n.parentElement;
  }
  return !1;
}
function kb(n) {
  return n instanceof HTMLInputElement && "select" in n;
}
function Ln(n, { select: i = !1 } = {}) {
  if (n && n.focus) {
    const r = document.activeElement;
    n.focus({ preventScroll: !0 }), n !== r && kb(n) && i && n.select();
  }
}
var Hu = jb();
function jb() {
  let n = [];
  return {
    add(i) {
      const r = n[0];
      i !== r && (r == null || r.pause()), n = zu(n, i), n.unshift(i);
    },
    remove(i) {
      var r;
      n = zu(n, i), (r = n[0]) == null || r.resume();
    }
  };
}
function zu(n, i) {
  const r = [...n], s = r.indexOf(i);
  return s !== -1 && r.splice(s, 1), r;
}
function Fb(n) {
  return n.filter((i) => i.tagName !== "A");
}
var ht = globalThis != null && globalThis.document ? v.useLayoutEffect : () => {
}, Wb = v.useId || (() => {
}), Bb = 0;
function Mi(n) {
  const [i, r] = v.useState(Wb());
  return ht(() => {
    r((s) => s ?? String(Bb++));
  }, [n]), i ? `radix-${i}` : "";
}
const $b = ["top", "right", "bottom", "left"], Dn = Math.min, At = Math.max, Ri = Math.round, vi = Math.floor, Qt = (n) => ({
  x: n,
  y: n
}), Ub = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Hb = {
  start: "end",
  end: "start"
};
function Ia(n, i, r) {
  return At(n, Dn(i, r));
}
function mn(n, i) {
  return typeof n == "function" ? n(i) : n;
}
function xn(n) {
  return n.split("-")[0];
}
function Nr(n) {
  return n.split("-")[1];
}
function Ga(n) {
  return n === "x" ? "y" : "x";
}
function Ka(n) {
  return n === "y" ? "height" : "width";
}
function kn(n) {
  return ["top", "bottom"].includes(xn(n)) ? "y" : "x";
}
function Ya(n) {
  return Ga(kn(n));
}
function zb(n, i, r) {
  r === void 0 && (r = !1);
  const s = Nr(n), l = Ya(n), u = Ka(l);
  let f = l === "x" ? s === (r ? "end" : "start") ? "right" : "left" : s === "start" ? "bottom" : "top";
  return i.reference[u] > i.floating[u] && (f = Ai(f)), [f, Ai(f)];
}
function Vb(n) {
  const i = Ai(n);
  return [La(n), i, La(i)];
}
function La(n) {
  return n.replace(/start|end/g, (i) => Hb[i]);
}
function Gb(n, i, r) {
  const s = ["left", "right"], l = ["right", "left"], u = ["top", "bottom"], f = ["bottom", "top"];
  switch (n) {
    case "top":
    case "bottom":
      return r ? i ? l : s : i ? s : l;
    case "left":
    case "right":
      return i ? u : f;
    default:
      return [];
  }
}
function Kb(n, i, r, s) {
  const l = Nr(n);
  let u = Gb(xn(n), r === "start", s);
  return l && (u = u.map((f) => f + "-" + l), i && (u = u.concat(u.map(La)))), u;
}
function Ai(n) {
  return n.replace(/left|right|bottom|top/g, (i) => Ub[i]);
}
function Yb(n) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...n
  };
}
function Tf(n) {
  return typeof n != "number" ? Yb(n) : {
    top: n,
    right: n,
    bottom: n,
    left: n
  };
}
function Ti(n) {
  const {
    x: i,
    y: r,
    width: s,
    height: l
  } = n;
  return {
    width: s,
    height: l,
    top: r,
    left: i,
    right: i + s,
    bottom: r + l,
    x: i,
    y: r
  };
}
function Vu(n, i, r) {
  let {
    reference: s,
    floating: l
  } = n;
  const u = kn(i), f = Ya(i), d = Ka(f), g = xn(i), m = u === "y", w = s.x + s.width / 2 - l.width / 2, _ = s.y + s.height / 2 - l.height / 2, E = s[d] / 2 - l[d] / 2;
  let R;
  switch (g) {
    case "top":
      R = {
        x: w,
        y: s.y - l.height
      };
      break;
    case "bottom":
      R = {
        x: w,
        y: s.y + s.height
      };
      break;
    case "right":
      R = {
        x: s.x + s.width,
        y: _
      };
      break;
    case "left":
      R = {
        x: s.x - l.width,
        y: _
      };
      break;
    default:
      R = {
        x: s.x,
        y: s.y
      };
  }
  switch (Nr(i)) {
    case "start":
      R[f] -= E * (r && m ? -1 : 1);
      break;
    case "end":
      R[f] += E * (r && m ? -1 : 1);
      break;
  }
  return R;
}
const qb = async (n, i, r) => {
  const {
    placement: s = "bottom",
    strategy: l = "absolute",
    middleware: u = [],
    platform: f
  } = r, d = u.filter(Boolean), g = await (f.isRTL == null ? void 0 : f.isRTL(i));
  let m = await f.getElementRects({
    reference: n,
    floating: i,
    strategy: l
  }), {
    x: w,
    y: _
  } = Vu(m, s, g), E = s, R = {}, O = 0;
  for (let y = 0; y < d.length; y++) {
    const {
      name: A,
      fn: I
    } = d[y], {
      x: N,
      y: M,
      data: W,
      reset: $
    } = await I({
      x: w,
      y: _,
      initialPlacement: s,
      placement: E,
      strategy: l,
      middlewareData: R,
      rects: m,
      platform: f,
      elements: {
        reference: n,
        floating: i
      }
    });
    w = N ?? w, _ = M ?? _, R = {
      ...R,
      [A]: {
        ...R[A],
        ...W
      }
    }, $ && O <= 50 && (O++, typeof $ == "object" && ($.placement && (E = $.placement), $.rects && (m = $.rects === !0 ? await f.getElementRects({
      reference: n,
      floating: i,
      strategy: l
    }) : $.rects), {
      x: w,
      y: _
    } = Vu(m, E, g)), y = -1);
  }
  return {
    x: w,
    y: _,
    placement: E,
    strategy: l,
    middlewareData: R
  };
};
async function vo(n, i) {
  var r;
  i === void 0 && (i = {});
  const {
    x: s,
    y: l,
    platform: u,
    rects: f,
    elements: d,
    strategy: g
  } = n, {
    boundary: m = "clippingAncestors",
    rootBoundary: w = "viewport",
    elementContext: _ = "floating",
    altBoundary: E = !1,
    padding: R = 0
  } = mn(i, n), O = Tf(R), A = d[E ? _ === "floating" ? "reference" : "floating" : _], I = Ti(await u.getClippingRect({
    element: (r = await (u.isElement == null ? void 0 : u.isElement(A))) == null || r ? A : A.contextElement || await (u.getDocumentElement == null ? void 0 : u.getDocumentElement(d.floating)),
    boundary: m,
    rootBoundary: w,
    strategy: g
  })), N = _ === "floating" ? {
    x: s,
    y: l,
    width: f.floating.width,
    height: f.floating.height
  } : f.reference, M = await (u.getOffsetParent == null ? void 0 : u.getOffsetParent(d.floating)), W = await (u.isElement == null ? void 0 : u.isElement(M)) ? await (u.getScale == null ? void 0 : u.getScale(M)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, $ = Ti(u.convertOffsetParentRelativeRectToViewportRelativeRect ? await u.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: d,
    rect: N,
    offsetParent: M,
    strategy: g
  }) : N);
  return {
    top: (I.top - $.top + O.top) / W.y,
    bottom: ($.bottom - I.bottom + O.bottom) / W.y,
    left: (I.left - $.left + O.left) / W.x,
    right: ($.right - I.right + O.right) / W.x
  };
}
const Xb = (n) => ({
  name: "arrow",
  options: n,
  async fn(i) {
    const {
      x: r,
      y: s,
      placement: l,
      rects: u,
      platform: f,
      elements: d,
      middlewareData: g
    } = i, {
      element: m,
      padding: w = 0
    } = mn(n, i) || {};
    if (m == null)
      return {};
    const _ = Tf(w), E = {
      x: r,
      y: s
    }, R = Ya(l), O = Ka(R), y = await f.getDimensions(m), A = R === "y", I = A ? "top" : "left", N = A ? "bottom" : "right", M = A ? "clientHeight" : "clientWidth", W = u.reference[O] + u.reference[R] - E[R] - u.floating[O], $ = E[R] - u.reference[R], G = await (f.getOffsetParent == null ? void 0 : f.getOffsetParent(m));
    let U = G ? G[M] : 0;
    (!U || !await (f.isElement == null ? void 0 : f.isElement(G))) && (U = d.floating[M] || u.floating[O]);
    const ee = W / 2 - $ / 2, ue = U / 2 - y[O] / 2 - 1, he = Dn(_[I], ue), Ce = Dn(_[N], ue), q = he, re = U - y[O] - Ce, ne = U / 2 - y[O] / 2 + ee, Se = Ia(q, ne, re), oe = !g.arrow && Nr(l) != null && ne !== Se && u.reference[O] / 2 - (ne < q ? he : Ce) - y[O] / 2 < 0, se = oe ? ne < q ? ne - q : ne - re : 0;
    return {
      [R]: E[R] + se,
      data: {
        [R]: Se,
        centerOffset: ne - Se - se,
        ...oe && {
          alignmentOffset: se
        }
      },
      reset: oe
    };
  }
}), Zb = function(n) {
  return n === void 0 && (n = {}), {
    name: "flip",
    options: n,
    async fn(i) {
      var r, s;
      const {
        placement: l,
        middlewareData: u,
        rects: f,
        initialPlacement: d,
        platform: g,
        elements: m
      } = i, {
        mainAxis: w = !0,
        crossAxis: _ = !0,
        fallbackPlacements: E,
        fallbackStrategy: R = "bestFit",
        fallbackAxisSideDirection: O = "none",
        flipAlignment: y = !0,
        ...A
      } = mn(n, i);
      if ((r = u.arrow) != null && r.alignmentOffset)
        return {};
      const I = xn(l), N = kn(d), M = xn(d) === d, W = await (g.isRTL == null ? void 0 : g.isRTL(m.floating)), $ = E || (M || !y ? [Ai(d)] : Vb(d)), G = O !== "none";
      !E && G && $.push(...Kb(d, y, O, W));
      const U = [d, ...$], ee = await vo(i, A), ue = [];
      let he = ((s = u.flip) == null ? void 0 : s.overflows) || [];
      if (w && ue.push(ee[I]), _) {
        const ne = zb(l, f, W);
        ue.push(ee[ne[0]], ee[ne[1]]);
      }
      if (he = [...he, {
        placement: l,
        overflows: ue
      }], !ue.every((ne) => ne <= 0)) {
        var Ce, q;
        const ne = (((Ce = u.flip) == null ? void 0 : Ce.index) || 0) + 1, Se = U[ne];
        if (Se)
          return {
            data: {
              index: ne,
              overflows: he
            },
            reset: {
              placement: Se
            }
          };
        let oe = (q = he.filter((se) => se.overflows[0] <= 0).sort((se, Y) => se.overflows[1] - Y.overflows[1])[0]) == null ? void 0 : q.placement;
        if (!oe)
          switch (R) {
            case "bestFit": {
              var re;
              const se = (re = he.filter((Y) => {
                if (G) {
                  const ve = kn(Y.placement);
                  return ve === N || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  ve === "y";
                }
                return !0;
              }).map((Y) => [Y.placement, Y.overflows.filter((ve) => ve > 0).reduce((ve, ke) => ve + ke, 0)]).sort((Y, ve) => Y[1] - ve[1])[0]) == null ? void 0 : re[0];
              se && (oe = se);
              break;
            }
            case "initialPlacement":
              oe = d;
              break;
          }
        if (l !== oe)
          return {
            reset: {
              placement: oe
            }
          };
      }
      return {};
    }
  };
};
function Gu(n, i) {
  return {
    top: n.top - i.height,
    right: n.right - i.width,
    bottom: n.bottom - i.height,
    left: n.left - i.width
  };
}
function Ku(n) {
  return $b.some((i) => n[i] >= 0);
}
const Jb = function(n) {
  return n === void 0 && (n = {}), {
    name: "hide",
    options: n,
    async fn(i) {
      const {
        rects: r
      } = i, {
        strategy: s = "referenceHidden",
        ...l
      } = mn(n, i);
      switch (s) {
        case "referenceHidden": {
          const u = await vo(i, {
            ...l,
            elementContext: "reference"
          }), f = Gu(u, r.reference);
          return {
            data: {
              referenceHiddenOffsets: f,
              referenceHidden: Ku(f)
            }
          };
        }
        case "escaped": {
          const u = await vo(i, {
            ...l,
            altBoundary: !0
          }), f = Gu(u, r.floating);
          return {
            data: {
              escapedOffsets: f,
              escaped: Ku(f)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function Qb(n, i) {
  const {
    placement: r,
    platform: s,
    elements: l
  } = n, u = await (s.isRTL == null ? void 0 : s.isRTL(l.floating)), f = xn(r), d = Nr(r), g = kn(r) === "y", m = ["left", "top"].includes(f) ? -1 : 1, w = u && g ? -1 : 1, _ = mn(i, n);
  let {
    mainAxis: E,
    crossAxis: R,
    alignmentAxis: O
  } = typeof _ == "number" ? {
    mainAxis: _,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: _.mainAxis || 0,
    crossAxis: _.crossAxis || 0,
    alignmentAxis: _.alignmentAxis
  };
  return d && typeof O == "number" && (R = d === "end" ? O * -1 : O), g ? {
    x: R * w,
    y: E * m
  } : {
    x: E * m,
    y: R * w
  };
}
const e0 = function(n) {
  return n === void 0 && (n = 0), {
    name: "offset",
    options: n,
    async fn(i) {
      var r, s;
      const {
        x: l,
        y: u,
        placement: f,
        middlewareData: d
      } = i, g = await Qb(i, n);
      return f === ((r = d.offset) == null ? void 0 : r.placement) && (s = d.arrow) != null && s.alignmentOffset ? {} : {
        x: l + g.x,
        y: u + g.y,
        data: {
          ...g,
          placement: f
        }
      };
    }
  };
}, t0 = function(n) {
  return n === void 0 && (n = {}), {
    name: "shift",
    options: n,
    async fn(i) {
      const {
        x: r,
        y: s,
        placement: l
      } = i, {
        mainAxis: u = !0,
        crossAxis: f = !1,
        limiter: d = {
          fn: (A) => {
            let {
              x: I,
              y: N
            } = A;
            return {
              x: I,
              y: N
            };
          }
        },
        ...g
      } = mn(n, i), m = {
        x: r,
        y: s
      }, w = await vo(i, g), _ = kn(xn(l)), E = Ga(_);
      let R = m[E], O = m[_];
      if (u) {
        const A = E === "y" ? "top" : "left", I = E === "y" ? "bottom" : "right", N = R + w[A], M = R - w[I];
        R = Ia(N, R, M);
      }
      if (f) {
        const A = _ === "y" ? "top" : "left", I = _ === "y" ? "bottom" : "right", N = O + w[A], M = O - w[I];
        O = Ia(N, O, M);
      }
      const y = d.fn({
        ...i,
        [E]: R,
        [_]: O
      });
      return {
        ...y,
        data: {
          x: y.x - r,
          y: y.y - s,
          enabled: {
            [E]: u,
            [_]: f
          }
        }
      };
    }
  };
}, n0 = function(n) {
  return n === void 0 && (n = {}), {
    options: n,
    fn(i) {
      const {
        x: r,
        y: s,
        placement: l,
        rects: u,
        middlewareData: f
      } = i, {
        offset: d = 0,
        mainAxis: g = !0,
        crossAxis: m = !0
      } = mn(n, i), w = {
        x: r,
        y: s
      }, _ = kn(l), E = Ga(_);
      let R = w[E], O = w[_];
      const y = mn(d, i), A = typeof y == "number" ? {
        mainAxis: y,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...y
      };
      if (g) {
        const M = E === "y" ? "height" : "width", W = u.reference[E] - u.floating[M] + A.mainAxis, $ = u.reference[E] + u.reference[M] - A.mainAxis;
        R < W ? R = W : R > $ && (R = $);
      }
      if (m) {
        var I, N;
        const M = E === "y" ? "width" : "height", W = ["top", "left"].includes(xn(l)), $ = u.reference[_] - u.floating[M] + (W && ((I = f.offset) == null ? void 0 : I[_]) || 0) + (W ? 0 : A.crossAxis), G = u.reference[_] + u.reference[M] + (W ? 0 : ((N = f.offset) == null ? void 0 : N[_]) || 0) - (W ? A.crossAxis : 0);
        O < $ ? O = $ : O > G && (O = G);
      }
      return {
        [E]: R,
        [_]: O
      };
    }
  };
}, r0 = function(n) {
  return n === void 0 && (n = {}), {
    name: "size",
    options: n,
    async fn(i) {
      var r, s;
      const {
        placement: l,
        rects: u,
        platform: f,
        elements: d
      } = i, {
        apply: g = () => {
        },
        ...m
      } = mn(n, i), w = await vo(i, m), _ = xn(l), E = Nr(l), R = kn(l) === "y", {
        width: O,
        height: y
      } = u.floating;
      let A, I;
      _ === "top" || _ === "bottom" ? (A = _, I = E === (await (f.isRTL == null ? void 0 : f.isRTL(d.floating)) ? "start" : "end") ? "left" : "right") : (I = _, A = E === "end" ? "top" : "bottom");
      const N = y - w.top - w.bottom, M = O - w.left - w.right, W = Dn(y - w[A], N), $ = Dn(O - w[I], M), G = !i.middlewareData.shift;
      let U = W, ee = $;
      if ((r = i.middlewareData.shift) != null && r.enabled.x && (ee = M), (s = i.middlewareData.shift) != null && s.enabled.y && (U = N), G && !E) {
        const he = At(w.left, 0), Ce = At(w.right, 0), q = At(w.top, 0), re = At(w.bottom, 0);
        R ? ee = O - 2 * (he !== 0 || Ce !== 0 ? he + Ce : At(w.left, w.right)) : U = y - 2 * (q !== 0 || re !== 0 ? q + re : At(w.top, w.bottom));
      }
      await g({
        ...i,
        availableWidth: ee,
        availableHeight: U
      });
      const ue = await f.getDimensions(d.floating);
      return O !== ue.width || y !== ue.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Di() {
  return typeof window < "u";
}
function Ir(n) {
  return Pf(n) ? (n.nodeName || "").toLowerCase() : "#document";
}
function Tt(n) {
  var i;
  return (n == null || (i = n.ownerDocument) == null ? void 0 : i.defaultView) || window;
}
function tn(n) {
  var i;
  return (i = (Pf(n) ? n.ownerDocument : n.document) || window.document) == null ? void 0 : i.documentElement;
}
function Pf(n) {
  return Di() ? n instanceof Node || n instanceof Tt(n).Node : !1;
}
function Gt(n) {
  return Di() ? n instanceof Element || n instanceof Tt(n).Element : !1;
}
function en(n) {
  return Di() ? n instanceof HTMLElement || n instanceof Tt(n).HTMLElement : !1;
}
function Yu(n) {
  return !Di() || typeof ShadowRoot > "u" ? !1 : n instanceof ShadowRoot || n instanceof Tt(n).ShadowRoot;
}
function wo(n) {
  const {
    overflow: i,
    overflowX: r,
    overflowY: s,
    display: l
  } = Kt(n);
  return /auto|scroll|overlay|hidden|clip/.test(i + s + r) && !["inline", "contents"].includes(l);
}
function o0(n) {
  return ["table", "td", "th"].includes(Ir(n));
}
function ki(n) {
  return [":popover-open", ":modal"].some((i) => {
    try {
      return n.matches(i);
    } catch {
      return !1;
    }
  });
}
function qa(n) {
  const i = Xa(), r = Gt(n) ? Kt(n) : n;
  return r.transform !== "none" || r.perspective !== "none" || (r.containerType ? r.containerType !== "normal" : !1) || !i && (r.backdropFilter ? r.backdropFilter !== "none" : !1) || !i && (r.filter ? r.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((s) => (r.willChange || "").includes(s)) || ["paint", "layout", "strict", "content"].some((s) => (r.contain || "").includes(s));
}
function i0(n) {
  let i = jn(n);
  for (; en(i) && !Tr(i); ) {
    if (qa(i))
      return i;
    if (ki(i))
      return null;
    i = jn(i);
  }
  return null;
}
function Xa() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Tr(n) {
  return ["html", "body", "#document"].includes(Ir(n));
}
function Kt(n) {
  return Tt(n).getComputedStyle(n);
}
function ji(n) {
  return Gt(n) ? {
    scrollLeft: n.scrollLeft,
    scrollTop: n.scrollTop
  } : {
    scrollLeft: n.scrollX,
    scrollTop: n.scrollY
  };
}
function jn(n) {
  if (Ir(n) === "html")
    return n;
  const i = (
    // Step into the shadow DOM of the parent of a slotted node.
    n.assignedSlot || // DOM Element detected.
    n.parentNode || // ShadowRoot detected.
    Yu(n) && n.host || // Fallback.
    tn(n)
  );
  return Yu(i) ? i.host : i;
}
function Of(n) {
  const i = jn(n);
  return Tr(i) ? n.ownerDocument ? n.ownerDocument.body : n.body : en(i) && wo(i) ? i : Of(i);
}
function mo(n, i, r) {
  var s;
  i === void 0 && (i = []), r === void 0 && (r = !0);
  const l = Of(n), u = l === ((s = n.ownerDocument) == null ? void 0 : s.body), f = Tt(l);
  if (u) {
    const d = Ma(f);
    return i.concat(f, f.visualViewport || [], wo(l) ? l : [], d && r ? mo(d) : []);
  }
  return i.concat(l, mo(l, [], r));
}
function Ma(n) {
  return n.parent && Object.getPrototypeOf(n.parent) ? n.frameElement : null;
}
function Nf(n) {
  const i = Kt(n);
  let r = parseFloat(i.width) || 0, s = parseFloat(i.height) || 0;
  const l = en(n), u = l ? n.offsetWidth : r, f = l ? n.offsetHeight : s, d = Ri(r) !== u || Ri(s) !== f;
  return d && (r = u, s = f), {
    width: r,
    height: s,
    $: d
  };
}
function Za(n) {
  return Gt(n) ? n : n.contextElement;
}
function Sr(n) {
  const i = Za(n);
  if (!en(i))
    return Qt(1);
  const r = i.getBoundingClientRect(), {
    width: s,
    height: l,
    $: u
  } = Nf(i);
  let f = (u ? Ri(r.width) : r.width) / s, d = (u ? Ri(r.height) : r.height) / l;
  return (!f || !Number.isFinite(f)) && (f = 1), (!d || !Number.isFinite(d)) && (d = 1), {
    x: f,
    y: d
  };
}
const s0 = /* @__PURE__ */ Qt(0);
function If(n) {
  const i = Tt(n);
  return !Xa() || !i.visualViewport ? s0 : {
    x: i.visualViewport.offsetLeft,
    y: i.visualViewport.offsetTop
  };
}
function a0(n, i, r) {
  return i === void 0 && (i = !1), !r || i && r !== Tt(n) ? !1 : i;
}
function Jn(n, i, r, s) {
  i === void 0 && (i = !1), r === void 0 && (r = !1);
  const l = n.getBoundingClientRect(), u = Za(n);
  let f = Qt(1);
  i && (s ? Gt(s) && (f = Sr(s)) : f = Sr(n));
  const d = a0(u, r, s) ? If(u) : Qt(0);
  let g = (l.left + d.x) / f.x, m = (l.top + d.y) / f.y, w = l.width / f.x, _ = l.height / f.y;
  if (u) {
    const E = Tt(u), R = s && Gt(s) ? Tt(s) : s;
    let O = E, y = Ma(O);
    for (; y && s && R !== O; ) {
      const A = Sr(y), I = y.getBoundingClientRect(), N = Kt(y), M = I.left + (y.clientLeft + parseFloat(N.paddingLeft)) * A.x, W = I.top + (y.clientTop + parseFloat(N.paddingTop)) * A.y;
      g *= A.x, m *= A.y, w *= A.x, _ *= A.y, g += M, m += W, O = Tt(y), y = Ma(O);
    }
  }
  return Ti({
    width: w,
    height: _,
    x: g,
    y: m
  });
}
function Ja(n, i) {
  const r = ji(n).scrollLeft;
  return i ? i.left + r : Jn(tn(n)).left + r;
}
function Lf(n, i, r) {
  r === void 0 && (r = !1);
  const s = n.getBoundingClientRect(), l = s.left + i.scrollLeft - (r ? 0 : (
    // RTL <body> scrollbar.
    Ja(n, s)
  )), u = s.top + i.scrollTop;
  return {
    x: l,
    y: u
  };
}
function l0(n) {
  let {
    elements: i,
    rect: r,
    offsetParent: s,
    strategy: l
  } = n;
  const u = l === "fixed", f = tn(s), d = i ? ki(i.floating) : !1;
  if (s === f || d && u)
    return r;
  let g = {
    scrollLeft: 0,
    scrollTop: 0
  }, m = Qt(1);
  const w = Qt(0), _ = en(s);
  if ((_ || !_ && !u) && ((Ir(s) !== "body" || wo(f)) && (g = ji(s)), en(s))) {
    const R = Jn(s);
    m = Sr(s), w.x = R.x + s.clientLeft, w.y = R.y + s.clientTop;
  }
  const E = f && !_ && !u ? Lf(f, g, !0) : Qt(0);
  return {
    width: r.width * m.x,
    height: r.height * m.y,
    x: r.x * m.x - g.scrollLeft * m.x + w.x + E.x,
    y: r.y * m.y - g.scrollTop * m.y + w.y + E.y
  };
}
function c0(n) {
  return Array.from(n.getClientRects());
}
function u0(n) {
  const i = tn(n), r = ji(n), s = n.ownerDocument.body, l = At(i.scrollWidth, i.clientWidth, s.scrollWidth, s.clientWidth), u = At(i.scrollHeight, i.clientHeight, s.scrollHeight, s.clientHeight);
  let f = -r.scrollLeft + Ja(n);
  const d = -r.scrollTop;
  return Kt(s).direction === "rtl" && (f += At(i.clientWidth, s.clientWidth) - l), {
    width: l,
    height: u,
    x: f,
    y: d
  };
}
function f0(n, i) {
  const r = Tt(n), s = tn(n), l = r.visualViewport;
  let u = s.clientWidth, f = s.clientHeight, d = 0, g = 0;
  if (l) {
    u = l.width, f = l.height;
    const m = Xa();
    (!m || m && i === "fixed") && (d = l.offsetLeft, g = l.offsetTop);
  }
  return {
    width: u,
    height: f,
    x: d,
    y: g
  };
}
function d0(n, i) {
  const r = Jn(n, !0, i === "fixed"), s = r.top + n.clientTop, l = r.left + n.clientLeft, u = en(n) ? Sr(n) : Qt(1), f = n.clientWidth * u.x, d = n.clientHeight * u.y, g = l * u.x, m = s * u.y;
  return {
    width: f,
    height: d,
    x: g,
    y: m
  };
}
function qu(n, i, r) {
  let s;
  if (i === "viewport")
    s = f0(n, r);
  else if (i === "document")
    s = u0(tn(n));
  else if (Gt(i))
    s = d0(i, r);
  else {
    const l = If(n);
    s = {
      x: i.x - l.x,
      y: i.y - l.y,
      width: i.width,
      height: i.height
    };
  }
  return Ti(s);
}
function Mf(n, i) {
  const r = jn(n);
  return r === i || !Gt(r) || Tr(r) ? !1 : Kt(r).position === "fixed" || Mf(r, i);
}
function p0(n, i) {
  const r = i.get(n);
  if (r)
    return r;
  let s = mo(n, [], !1).filter((d) => Gt(d) && Ir(d) !== "body"), l = null;
  const u = Kt(n).position === "fixed";
  let f = u ? jn(n) : n;
  for (; Gt(f) && !Tr(f); ) {
    const d = Kt(f), g = qa(f);
    !g && d.position === "fixed" && (l = null), (u ? !g && !l : !g && d.position === "static" && !!l && ["absolute", "fixed"].includes(l.position) || wo(f) && !g && Mf(n, f)) ? s = s.filter((w) => w !== f) : l = d, f = jn(f);
  }
  return i.set(n, s), s;
}
function h0(n) {
  let {
    element: i,
    boundary: r,
    rootBoundary: s,
    strategy: l
  } = n;
  const f = [...r === "clippingAncestors" ? ki(i) ? [] : p0(i, this._c) : [].concat(r), s], d = f[0], g = f.reduce((m, w) => {
    const _ = qu(i, w, l);
    return m.top = At(_.top, m.top), m.right = Dn(_.right, m.right), m.bottom = Dn(_.bottom, m.bottom), m.left = At(_.left, m.left), m;
  }, qu(i, d, l));
  return {
    width: g.right - g.left,
    height: g.bottom - g.top,
    x: g.left,
    y: g.top
  };
}
function g0(n) {
  const {
    width: i,
    height: r
  } = Nf(n);
  return {
    width: i,
    height: r
  };
}
function v0(n, i, r) {
  const s = en(i), l = tn(i), u = r === "fixed", f = Jn(n, !0, u, i);
  let d = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const g = Qt(0);
  if (s || !s && !u)
    if ((Ir(i) !== "body" || wo(l)) && (d = ji(i)), s) {
      const E = Jn(i, !0, u, i);
      g.x = E.x + i.clientLeft, g.y = E.y + i.clientTop;
    } else
      l && (g.x = Ja(l));
  const m = l && !s && !u ? Lf(l, d) : Qt(0), w = f.left + d.scrollLeft - g.x - m.x, _ = f.top + d.scrollTop - g.y - m.y;
  return {
    x: w,
    y: _,
    width: f.width,
    height: f.height
  };
}
function ya(n) {
  return Kt(n).position === "static";
}
function Xu(n, i) {
  if (!en(n) || Kt(n).position === "fixed")
    return null;
  if (i)
    return i(n);
  let r = n.offsetParent;
  return tn(n) === r && (r = r.ownerDocument.body), r;
}
function Df(n, i) {
  const r = Tt(n);
  if (ki(n))
    return r;
  if (!en(n)) {
    let l = jn(n);
    for (; l && !Tr(l); ) {
      if (Gt(l) && !ya(l))
        return l;
      l = jn(l);
    }
    return r;
  }
  let s = Xu(n, i);
  for (; s && o0(s) && ya(s); )
    s = Xu(s, i);
  return s && Tr(s) && ya(s) && !qa(s) ? r : s || i0(n) || r;
}
const m0 = async function(n) {
  const i = this.getOffsetParent || Df, r = this.getDimensions, s = await r(n.floating);
  return {
    reference: v0(n.reference, await i(n.floating), n.strategy),
    floating: {
      x: 0,
      y: 0,
      width: s.width,
      height: s.height
    }
  };
};
function x0(n) {
  return Kt(n).direction === "rtl";
}
const w0 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: l0,
  getDocumentElement: tn,
  getClippingRect: h0,
  getOffsetParent: Df,
  getElementRects: m0,
  getClientRects: c0,
  getDimensions: g0,
  getScale: Sr,
  isElement: Gt,
  isRTL: x0
};
function y0(n, i) {
  let r = null, s;
  const l = tn(n);
  function u() {
    var d;
    clearTimeout(s), (d = r) == null || d.disconnect(), r = null;
  }
  function f(d, g) {
    d === void 0 && (d = !1), g === void 0 && (g = 1), u();
    const {
      left: m,
      top: w,
      width: _,
      height: E
    } = n.getBoundingClientRect();
    if (d || i(), !_ || !E)
      return;
    const R = vi(w), O = vi(l.clientWidth - (m + _)), y = vi(l.clientHeight - (w + E)), A = vi(m), N = {
      rootMargin: -R + "px " + -O + "px " + -y + "px " + -A + "px",
      threshold: At(0, Dn(1, g)) || 1
    };
    let M = !0;
    function W($) {
      const G = $[0].intersectionRatio;
      if (G !== g) {
        if (!M)
          return f();
        G ? f(!1, G) : s = setTimeout(() => {
          f(!1, 1e-7);
        }, 1e3);
      }
      M = !1;
    }
    try {
      r = new IntersectionObserver(W, {
        ...N,
        // Handle <iframe>s
        root: l.ownerDocument
      });
    } catch {
      r = new IntersectionObserver(W, N);
    }
    r.observe(n);
  }
  return f(!0), u;
}
function b0(n, i, r, s) {
  s === void 0 && (s = {});
  const {
    ancestorScroll: l = !0,
    ancestorResize: u = !0,
    elementResize: f = typeof ResizeObserver == "function",
    layoutShift: d = typeof IntersectionObserver == "function",
    animationFrame: g = !1
  } = s, m = Za(n), w = l || u ? [...m ? mo(m) : [], ...mo(i)] : [];
  w.forEach((I) => {
    l && I.addEventListener("scroll", r, {
      passive: !0
    }), u && I.addEventListener("resize", r);
  });
  const _ = m && d ? y0(m, r) : null;
  let E = -1, R = null;
  f && (R = new ResizeObserver((I) => {
    let [N] = I;
    N && N.target === m && R && (R.unobserve(i), cancelAnimationFrame(E), E = requestAnimationFrame(() => {
      var M;
      (M = R) == null || M.observe(i);
    })), r();
  }), m && !g && R.observe(m), R.observe(i));
  let O, y = g ? Jn(n) : null;
  g && A();
  function A() {
    const I = Jn(n);
    y && (I.x !== y.x || I.y !== y.y || I.width !== y.width || I.height !== y.height) && r(), y = I, O = requestAnimationFrame(A);
  }
  return r(), () => {
    var I;
    w.forEach((N) => {
      l && N.removeEventListener("scroll", r), u && N.removeEventListener("resize", r);
    }), _ == null || _(), (I = R) == null || I.disconnect(), R = null, g && cancelAnimationFrame(O);
  };
}
const _0 = e0, C0 = t0, S0 = Zb, E0 = r0, R0 = Jb, Zu = Xb, A0 = n0, T0 = (n, i, r) => {
  const s = /* @__PURE__ */ new Map(), l = {
    platform: w0,
    ...r
  }, u = {
    ...l.platform,
    _c: s
  };
  return qb(n, i, {
    ...l,
    platform: u
  });
};
var _i = typeof document < "u" ? dy : lf;
function Pi(n, i) {
  if (n === i)
    return !0;
  if (typeof n != typeof i)
    return !1;
  if (typeof n == "function" && n.toString() === i.toString())
    return !0;
  let r, s, l;
  if (n && i && typeof n == "object") {
    if (Array.isArray(n)) {
      if (r = n.length, r !== i.length)
        return !1;
      for (s = r; s-- !== 0; )
        if (!Pi(n[s], i[s]))
          return !1;
      return !0;
    }
    if (l = Object.keys(n), r = l.length, r !== Object.keys(i).length)
      return !1;
    for (s = r; s-- !== 0; )
      if (!{}.hasOwnProperty.call(i, l[s]))
        return !1;
    for (s = r; s-- !== 0; ) {
      const u = l[s];
      if (!(u === "_owner" && n.$$typeof) && !Pi(n[u], i[u]))
        return !1;
    }
    return !0;
  }
  return n !== n && i !== i;
}
function kf(n) {
  return typeof window > "u" ? 1 : (n.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Ju(n, i) {
  const r = kf(n);
  return Math.round(i * r) / r;
}
function ba(n) {
  const i = v.useRef(n);
  return _i(() => {
    i.current = n;
  }), i;
}
function P0(n) {
  n === void 0 && (n = {});
  const {
    placement: i = "bottom",
    strategy: r = "absolute",
    middleware: s = [],
    platform: l,
    elements: {
      reference: u,
      floating: f
    } = {},
    transform: d = !0,
    whileElementsMounted: g,
    open: m
  } = n, [w, _] = v.useState({
    x: 0,
    y: 0,
    strategy: r,
    placement: i,
    middlewareData: {},
    isPositioned: !1
  }), [E, R] = v.useState(s);
  Pi(E, s) || R(s);
  const [O, y] = v.useState(null), [A, I] = v.useState(null), N = v.useCallback((Y) => {
    Y !== G.current && (G.current = Y, y(Y));
  }, []), M = v.useCallback((Y) => {
    Y !== U.current && (U.current = Y, I(Y));
  }, []), W = u || O, $ = f || A, G = v.useRef(null), U = v.useRef(null), ee = v.useRef(w), ue = g != null, he = ba(g), Ce = ba(l), q = ba(m), re = v.useCallback(() => {
    if (!G.current || !U.current)
      return;
    const Y = {
      placement: i,
      strategy: r,
      middleware: E
    };
    Ce.current && (Y.platform = Ce.current), T0(G.current, U.current, Y).then((ve) => {
      const ke = {
        ...ve,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: q.current !== !1
      };
      ne.current && !Pi(ee.current, ke) && (ee.current = ke, Li.flushSync(() => {
        _(ke);
      }));
    });
  }, [E, i, r, Ce, q]);
  _i(() => {
    m === !1 && ee.current.isPositioned && (ee.current.isPositioned = !1, _((Y) => ({
      ...Y,
      isPositioned: !1
    })));
  }, [m]);
  const ne = v.useRef(!1);
  _i(() => (ne.current = !0, () => {
    ne.current = !1;
  }), []), _i(() => {
    if (W && (G.current = W), $ && (U.current = $), W && $) {
      if (he.current)
        return he.current(W, $, re);
      re();
    }
  }, [W, $, re, he, ue]);
  const Se = v.useMemo(() => ({
    reference: G,
    floating: U,
    setReference: N,
    setFloating: M
  }), [N, M]), oe = v.useMemo(() => ({
    reference: W,
    floating: $
  }), [W, $]), se = v.useMemo(() => {
    const Y = {
      position: r,
      left: 0,
      top: 0
    };
    if (!oe.floating)
      return Y;
    const ve = Ju(oe.floating, w.x), ke = Ju(oe.floating, w.y);
    return d ? {
      ...Y,
      transform: "translate(" + ve + "px, " + ke + "px)",
      ...kf(oe.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: r,
      left: ve,
      top: ke
    };
  }, [r, d, oe.floating, w.x, w.y]);
  return v.useMemo(() => ({
    ...w,
    update: re,
    refs: Se,
    elements: oe,
    floatingStyles: se
  }), [w, re, Se, oe, se]);
}
const O0 = (n) => {
  function i(r) {
    return {}.hasOwnProperty.call(r, "current");
  }
  return {
    name: "arrow",
    options: n,
    fn(r) {
      const {
        element: s,
        padding: l
      } = typeof n == "function" ? n(r) : n;
      return s && i(s) ? s.current != null ? Zu({
        element: s.current,
        padding: l
      }).fn(r) : {} : s ? Zu({
        element: s,
        padding: l
      }).fn(r) : {};
    }
  };
}, N0 = (n, i) => ({
  ..._0(n),
  options: [n, i]
}), I0 = (n, i) => ({
  ...C0(n),
  options: [n, i]
}), L0 = (n, i) => ({
  ...A0(n),
  options: [n, i]
}), M0 = (n, i) => ({
  ...S0(n),
  options: [n, i]
}), D0 = (n, i) => ({
  ...E0(n),
  options: [n, i]
}), k0 = (n, i) => ({
  ...R0(n),
  options: [n, i]
}), j0 = (n, i) => ({
  ...O0(n),
  options: [n, i]
});
var F0 = "Arrow", jf = v.forwardRef((n, i) => {
  const { children: r, width: s = 10, height: l = 5, ...u } = n;
  return /* @__PURE__ */ b.jsx(
    He.svg,
    {
      ...u,
      ref: i,
      width: s,
      height: l,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: n.asChild ? r : /* @__PURE__ */ b.jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
jf.displayName = F0;
var W0 = jf;
function B0(n, i = []) {
  let r = [];
  function s(u, f) {
    const d = v.createContext(f), g = r.length;
    r = [...r, f];
    function m(_) {
      const { scope: E, children: R, ...O } = _, y = (E == null ? void 0 : E[n][g]) || d, A = v.useMemo(() => O, Object.values(O));
      return /* @__PURE__ */ b.jsx(y.Provider, { value: A, children: R });
    }
    function w(_, E) {
      const R = (E == null ? void 0 : E[n][g]) || d, O = v.useContext(R);
      if (O)
        return O;
      if (f !== void 0)
        return f;
      throw new Error(`\`${_}\` must be used within \`${u}\``);
    }
    return m.displayName = u + "Provider", [m, w];
  }
  const l = () => {
    const u = r.map((f) => v.createContext(f));
    return function(d) {
      const g = (d == null ? void 0 : d[n]) || u;
      return v.useMemo(
        () => ({ [`__scope${n}`]: { ...d, [n]: g } }),
        [d, g]
      );
    };
  };
  return l.scopeName = n, [s, $0(l, ...i)];
}
function $0(...n) {
  const i = n[0];
  if (n.length === 1)
    return i;
  const r = () => {
    const s = n.map((l) => ({
      useScope: l(),
      scopeName: l.scopeName
    }));
    return function(u) {
      const f = s.reduce((d, { useScope: g, scopeName: m }) => {
        const _ = g(u)[`__scope${m}`];
        return { ...d, ..._ };
      }, {});
      return v.useMemo(() => ({ [`__scope${i.scopeName}`]: f }), [f]);
    };
  };
  return r.scopeName = i.scopeName, r;
}
function U0(n) {
  const [i, r] = v.useState(void 0);
  return ht(() => {
    if (n) {
      r({ width: n.offsetWidth, height: n.offsetHeight });
      const s = new ResizeObserver((l) => {
        if (!Array.isArray(l) || !l.length)
          return;
        const u = l[0];
        let f, d;
        if ("borderBoxSize" in u) {
          const g = u.borderBoxSize, m = Array.isArray(g) ? g[0] : g;
          f = m.inlineSize, d = m.blockSize;
        } else
          f = n.offsetWidth, d = n.offsetHeight;
        r({ width: f, height: d });
      });
      return s.observe(n, { box: "border-box" }), () => s.unobserve(n);
    } else
      r(void 0);
  }, [n]), i;
}
var Qa = "Popper", [Ff, Fi] = B0(Qa), [H0, Wf] = Ff(Qa), Bf = (n) => {
  const { __scopePopper: i, children: r } = n, [s, l] = v.useState(null);
  return /* @__PURE__ */ b.jsx(H0, { scope: i, anchor: s, onAnchorChange: l, children: r });
};
Bf.displayName = Qa;
var $f = "PopperAnchor", Uf = v.forwardRef(
  (n, i) => {
    const { __scopePopper: r, virtualRef: s, ...l } = n, u = Wf($f, r), f = v.useRef(null), d = Ye(i, f);
    return v.useEffect(() => {
      u.onAnchorChange((s == null ? void 0 : s.current) || f.current);
    }), s ? null : /* @__PURE__ */ b.jsx(He.div, { ...l, ref: d });
  }
);
Uf.displayName = $f;
var el = "PopperContent", [z0, V0] = Ff(el), Hf = v.forwardRef(
  (n, i) => {
    var Z, me, Le, Re, be, xe;
    const {
      __scopePopper: r,
      side: s = "bottom",
      sideOffset: l = 0,
      align: u = "center",
      alignOffset: f = 0,
      arrowPadding: d = 0,
      avoidCollisions: g = !0,
      collisionBoundary: m = [],
      collisionPadding: w = 0,
      sticky: _ = "partial",
      hideWhenDetached: E = !1,
      updatePositionStrategy: R = "optimized",
      onPlaced: O,
      ...y
    } = n, A = Wf(el, r), [I, N] = v.useState(null), M = Ye(i, (Ze) => N(Ze)), [W, $] = v.useState(null), G = U0(W), U = (G == null ? void 0 : G.width) ?? 0, ee = (G == null ? void 0 : G.height) ?? 0, ue = s + (u !== "center" ? "-" + u : ""), he = typeof w == "number" ? w : { top: 0, right: 0, bottom: 0, left: 0, ...w }, Ce = Array.isArray(m) ? m : [m], q = Ce.length > 0, re = {
      padding: he,
      boundary: Ce.filter(K0),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: q
    }, { refs: ne, floatingStyles: Se, placement: oe, isPositioned: se, middlewareData: Y } = P0({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: ue,
      whileElementsMounted: (...Ze) => b0(...Ze, {
        animationFrame: R === "always"
      }),
      elements: {
        reference: A.anchor
      },
      middleware: [
        N0({ mainAxis: l + ee, alignmentAxis: f }),
        g && I0({
          mainAxis: !0,
          crossAxis: !1,
          limiter: _ === "partial" ? L0() : void 0,
          ...re
        }),
        g && M0({ ...re }),
        D0({
          ...re,
          apply: ({ elements: Ze, rects: We, availableWidth: st, availableHeight: wt }) => {
            const { width: Je, height: Bn } = We.reference, Wt = Ze.floating.style;
            Wt.setProperty("--radix-popper-available-width", `${st}px`), Wt.setProperty("--radix-popper-available-height", `${wt}px`), Wt.setProperty("--radix-popper-anchor-width", `${Je}px`), Wt.setProperty("--radix-popper-anchor-height", `${Bn}px`);
          }
        }),
        W && j0({ element: W, padding: d }),
        Y0({ arrowWidth: U, arrowHeight: ee }),
        E && k0({ strategy: "referenceHidden", ...re })
      ]
    }), [ve, ke] = Gf(oe), Ee = vn(O);
    ht(() => {
      se && (Ee == null || Ee());
    }, [se, Ee]);
    const Yt = (Z = Y.arrow) == null ? void 0 : Z.x, qt = (me = Y.arrow) == null ? void 0 : me.y, Pt = ((Le = Y.arrow) == null ? void 0 : Le.centerOffset) !== 0, [ut, it] = v.useState();
    return ht(() => {
      I && it(window.getComputedStyle(I).zIndex);
    }, [I]), /* @__PURE__ */ b.jsx(
      "div",
      {
        ref: ne.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...Se,
          transform: se ? Se.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: ut,
          "--radix-popper-transform-origin": [
            (Re = Y.transformOrigin) == null ? void 0 : Re.x,
            (be = Y.transformOrigin) == null ? void 0 : be.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((xe = Y.hide) == null ? void 0 : xe.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: n.dir,
        children: /* @__PURE__ */ b.jsx(
          z0,
          {
            scope: r,
            placedSide: ve,
            onArrowChange: $,
            arrowX: Yt,
            arrowY: qt,
            shouldHideArrow: Pt,
            children: /* @__PURE__ */ b.jsx(
              He.div,
              {
                "data-side": ve,
                "data-align": ke,
                ...y,
                ref: M,
                style: {
                  ...y.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: se ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
Hf.displayName = el;
var zf = "PopperArrow", G0 = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, Vf = v.forwardRef(function(i, r) {
  const { __scopePopper: s, ...l } = i, u = V0(zf, s), f = G0[u.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ b.jsx(
      "span",
      {
        ref: u.onArrowChange,
        style: {
          position: "absolute",
          left: u.arrowX,
          top: u.arrowY,
          [f]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[u.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[u.placedSide],
          visibility: u.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ b.jsx(
          W0,
          {
            ...l,
            ref: r,
            style: {
              ...l.style,
              // ensures the element can be measured correctly (mostly for if SVG)
              display: "block"
            }
          }
        )
      }
    )
  );
});
Vf.displayName = zf;
function K0(n) {
  return n !== null;
}
var Y0 = (n) => ({
  name: "transformOrigin",
  options: n,
  fn(i) {
    var A, I, N;
    const { placement: r, rects: s, middlewareData: l } = i, f = ((A = l.arrow) == null ? void 0 : A.centerOffset) !== 0, d = f ? 0 : n.arrowWidth, g = f ? 0 : n.arrowHeight, [m, w] = Gf(r), _ = { start: "0%", center: "50%", end: "100%" }[w], E = (((I = l.arrow) == null ? void 0 : I.x) ?? 0) + d / 2, R = (((N = l.arrow) == null ? void 0 : N.y) ?? 0) + g / 2;
    let O = "", y = "";
    return m === "bottom" ? (O = f ? _ : `${E}px`, y = `${-g}px`) : m === "top" ? (O = f ? _ : `${E}px`, y = `${s.floating.height + g}px`) : m === "right" ? (O = `${-g}px`, y = f ? _ : `${R}px`) : m === "left" && (O = `${s.floating.width + g}px`, y = f ? _ : `${R}px`), { data: { x: O, y } };
  }
});
function Gf(n) {
  const [i, r = "center"] = n.split("-");
  return [i, r];
}
var Kf = Bf, Yf = Uf, qf = Hf, Xf = Vf, q0 = "Portal", Zf = v.forwardRef((n, i) => {
  var d;
  const { container: r, ...s } = n, [l, u] = v.useState(!1);
  ht(() => u(!0), []);
  const f = r || l && ((d = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : d.body);
  return f ? py.createPortal(/* @__PURE__ */ b.jsx(He.div, { ...s, ref: i }), f) : null;
});
Zf.displayName = q0;
function Da({
  prop: n,
  defaultProp: i,
  onChange: r = () => {
  }
}) {
  const [s, l] = X0({ defaultProp: i, onChange: r }), u = n !== void 0, f = u ? n : s, d = vn(r), g = v.useCallback(
    (m) => {
      if (u) {
        const _ = typeof m == "function" ? m(n) : m;
        _ !== n && d(_);
      } else
        l(m);
    },
    [u, n, l, d]
  );
  return [f, g];
}
function X0({
  defaultProp: n,
  onChange: i
}) {
  const r = v.useState(n), [s] = r, l = v.useRef(s), u = vn(i);
  return v.useEffect(() => {
    l.current !== s && (u(s), l.current = s);
  }, [s, l, u]), r;
}
function Z0(n) {
  const i = v.useRef({ value: n, previous: n });
  return v.useMemo(() => (i.current.value !== n && (i.current.previous = i.current.value, i.current.value = n), i.current.previous), [n]);
}
var J0 = "VisuallyHidden", tl = v.forwardRef(
  (n, i) => /* @__PURE__ */ b.jsx(
    He.span,
    {
      ...n,
      ref: i,
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
        ...n.style
      }
    }
  )
);
tl.displayName = J0;
var Q0 = tl, e_ = function(n) {
  if (typeof document > "u")
    return null;
  var i = Array.isArray(n) ? n[0] : n;
  return i.ownerDocument.body;
}, wr = /* @__PURE__ */ new WeakMap(), mi = /* @__PURE__ */ new WeakMap(), xi = {}, _a = 0, Jf = function(n) {
  return n && (n.host || Jf(n.parentNode));
}, t_ = function(n, i) {
  return i.map(function(r) {
    if (n.contains(r))
      return r;
    var s = Jf(r);
    return s && n.contains(s) ? s : (console.error("aria-hidden", r, "in not contained inside", n, ". Doing nothing"), null);
  }).filter(function(r) {
    return !!r;
  });
}, n_ = function(n, i, r, s) {
  var l = t_(i, Array.isArray(n) ? n : [n]);
  xi[r] || (xi[r] = /* @__PURE__ */ new WeakMap());
  var u = xi[r], f = [], d = /* @__PURE__ */ new Set(), g = new Set(l), m = function(_) {
    !_ || d.has(_) || (d.add(_), m(_.parentNode));
  };
  l.forEach(m);
  var w = function(_) {
    !_ || g.has(_) || Array.prototype.forEach.call(_.children, function(E) {
      if (d.has(E))
        w(E);
      else
        try {
          var R = E.getAttribute(s), O = R !== null && R !== "false", y = (wr.get(E) || 0) + 1, A = (u.get(E) || 0) + 1;
          wr.set(E, y), u.set(E, A), f.push(E), y === 1 && O && mi.set(E, !0), A === 1 && E.setAttribute(r, "true"), O || E.setAttribute(s, "true");
        } catch (I) {
          console.error("aria-hidden: cannot operate on ", E, I);
        }
    });
  };
  return w(i), d.clear(), _a++, function() {
    f.forEach(function(_) {
      var E = wr.get(_) - 1, R = u.get(_) - 1;
      wr.set(_, E), u.set(_, R), E || (mi.has(_) || _.removeAttribute(s), mi.delete(_)), R || _.removeAttribute(r);
    }), _a--, _a || (wr = /* @__PURE__ */ new WeakMap(), wr = /* @__PURE__ */ new WeakMap(), mi = /* @__PURE__ */ new WeakMap(), xi = {});
  };
}, r_ = function(n, i, r) {
  r === void 0 && (r = "data-aria-hidden");
  var s = Array.from(Array.isArray(n) ? n : [n]), l = e_(n);
  return l ? (s.push.apply(s, Array.from(l.querySelectorAll("[aria-live]"))), n_(s, l, r, "aria-hidden")) : function() {
    return null;
  };
}, Mn = function() {
  return Mn = Object.assign || function(i) {
    for (var r, s = 1, l = arguments.length; s < l; s++) {
      r = arguments[s];
      for (var u in r)
        Object.prototype.hasOwnProperty.call(r, u) && (i[u] = r[u]);
    }
    return i;
  }, Mn.apply(this, arguments);
};
function o_(n, i) {
  var r = {};
  for (var s in n)
    Object.prototype.hasOwnProperty.call(n, s) && i.indexOf(s) < 0 && (r[s] = n[s]);
  if (n != null && typeof Object.getOwnPropertySymbols == "function")
    for (var l = 0, s = Object.getOwnPropertySymbols(n); l < s.length; l++)
      i.indexOf(s[l]) < 0 && Object.prototype.propertyIsEnumerable.call(n, s[l]) && (r[s[l]] = n[s[l]]);
  return r;
}
function i_(n, i, r) {
  if (r || arguments.length === 2)
    for (var s = 0, l = i.length, u; s < l; s++)
      (u || !(s in i)) && (u || (u = Array.prototype.slice.call(i, 0, s)), u[s] = i[s]);
  return n.concat(u || Array.prototype.slice.call(i));
}
var Ci = "right-scroll-bar-position", Si = "width-before-scroll-bar", s_ = "with-scroll-bars-hidden", a_ = "--removed-body-scroll-bar-size";
function Ca(n, i) {
  return typeof n == "function" ? n(i) : n && (n.current = i), n;
}
function l_(n, i) {
  var r = af(function() {
    return {
      // value
      value: n,
      // last callback
      callback: i,
      // "memoized" public interface
      facade: {
        get current() {
          return r.value;
        },
        set current(s) {
          var l = r.value;
          l !== s && (r.value = s, r.callback(s, l));
        }
      }
    };
  })[0];
  return r.callback = i, r.facade;
}
var c_ = typeof window < "u" ? v.useLayoutEffect : v.useEffect, Qu = /* @__PURE__ */ new WeakMap();
function u_(n, i) {
  var r = l_(null, function(s) {
    return n.forEach(function(l) {
      return Ca(l, s);
    });
  });
  return c_(function() {
    var s = Qu.get(r);
    if (s) {
      var l = new Set(s), u = new Set(n), f = r.current;
      l.forEach(function(d) {
        u.has(d) || Ca(d, null);
      }), u.forEach(function(d) {
        l.has(d) || Ca(d, f);
      });
    }
    Qu.set(r, n);
  }, [n]), r;
}
var Oi = function() {
  return Oi = Object.assign || function(i) {
    for (var r, s = 1, l = arguments.length; s < l; s++) {
      r = arguments[s];
      for (var u in r)
        Object.prototype.hasOwnProperty.call(r, u) && (i[u] = r[u]);
    }
    return i;
  }, Oi.apply(this, arguments);
};
function f_(n, i) {
  var r = {};
  for (var s in n)
    Object.prototype.hasOwnProperty.call(n, s) && i.indexOf(s) < 0 && (r[s] = n[s]);
  if (n != null && typeof Object.getOwnPropertySymbols == "function")
    for (var l = 0, s = Object.getOwnPropertySymbols(n); l < s.length; l++)
      i.indexOf(s[l]) < 0 && Object.prototype.propertyIsEnumerable.call(n, s[l]) && (r[s[l]] = n[s[l]]);
  return r;
}
function d_(n) {
  return n;
}
function p_(n, i) {
  i === void 0 && (i = d_);
  var r = [], s = !1, l = {
    read: function() {
      if (s)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return r.length ? r[r.length - 1] : n;
    },
    useMedium: function(u) {
      var f = i(u, s);
      return r.push(f), function() {
        r = r.filter(function(d) {
          return d !== f;
        });
      };
    },
    assignSyncMedium: function(u) {
      for (s = !0; r.length; ) {
        var f = r;
        r = [], f.forEach(u);
      }
      r = {
        push: function(d) {
          return u(d);
        },
        filter: function() {
          return r;
        }
      };
    },
    assignMedium: function(u) {
      s = !0;
      var f = [];
      if (r.length) {
        var d = r;
        r = [], d.forEach(u), f = r;
      }
      var g = function() {
        var w = f;
        f = [], w.forEach(u);
      }, m = function() {
        return Promise.resolve().then(g);
      };
      m(), r = {
        push: function(w) {
          f.push(w), m();
        },
        filter: function(w) {
          return f = f.filter(w), r;
        }
      };
    }
  };
  return l;
}
function h_(n) {
  n === void 0 && (n = {});
  var i = p_(null);
  return i.options = Oi({ async: !0, ssr: !1 }, n), i;
}
var Qf = function(n) {
  var i = n.sideCar, r = f_(n, ["sideCar"]);
  if (!i)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var s = i.read();
  if (!s)
    throw new Error("Sidecar medium not found");
  return v.createElement(s, Oi({}, r));
};
Qf.isSideCarExport = !0;
function g_(n, i) {
  return n.useMedium(i), Qf;
}
var ed = h_(), Sa = function() {
}, Wi = v.forwardRef(function(n, i) {
  var r = v.useRef(null), s = v.useState({
    onScrollCapture: Sa,
    onWheelCapture: Sa,
    onTouchMoveCapture: Sa
  }), l = s[0], u = s[1], f = n.forwardProps, d = n.children, g = n.className, m = n.removeScrollBar, w = n.enabled, _ = n.shards, E = n.sideCar, R = n.noIsolation, O = n.inert, y = n.allowPinchZoom, A = n.as, I = A === void 0 ? "div" : A, N = n.gapMode, M = o_(n, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), W = E, $ = u_([r, i]), G = Mn(Mn({}, M), l);
  return v.createElement(
    v.Fragment,
    null,
    w && v.createElement(W, { sideCar: ed, removeScrollBar: m, shards: _, noIsolation: R, inert: O, setCallbacks: u, allowPinchZoom: !!y, lockRef: r, gapMode: N }),
    f ? v.cloneElement(v.Children.only(d), Mn(Mn({}, G), { ref: $ })) : v.createElement(I, Mn({}, G, { className: g, ref: $ }), d)
  );
});
Wi.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Wi.classNames = {
  fullWidth: Si,
  zeroRight: Ci
};
var v_ = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function m_() {
  if (!document)
    return null;
  var n = document.createElement("style");
  n.type = "text/css";
  var i = v_();
  return i && n.setAttribute("nonce", i), n;
}
function x_(n, i) {
  n.styleSheet ? n.styleSheet.cssText = i : n.appendChild(document.createTextNode(i));
}
function w_(n) {
  var i = document.head || document.getElementsByTagName("head")[0];
  i.appendChild(n);
}
var y_ = function() {
  var n = 0, i = null;
  return {
    add: function(r) {
      n == 0 && (i = m_()) && (x_(i, r), w_(i)), n++;
    },
    remove: function() {
      n--, !n && i && (i.parentNode && i.parentNode.removeChild(i), i = null);
    }
  };
}, b_ = function() {
  var n = y_();
  return function(i, r) {
    v.useEffect(function() {
      return n.add(i), function() {
        n.remove();
      };
    }, [i && r]);
  };
}, td = function() {
  var n = b_(), i = function(r) {
    var s = r.styles, l = r.dynamic;
    return n(s, l), null;
  };
  return i;
}, __ = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Ea = function(n) {
  return parseInt(n || "", 10) || 0;
}, C_ = function(n) {
  var i = window.getComputedStyle(document.body), r = i[n === "padding" ? "paddingLeft" : "marginLeft"], s = i[n === "padding" ? "paddingTop" : "marginTop"], l = i[n === "padding" ? "paddingRight" : "marginRight"];
  return [Ea(r), Ea(s), Ea(l)];
}, S_ = function(n) {
  if (n === void 0 && (n = "margin"), typeof window > "u")
    return __;
  var i = C_(n), r = document.documentElement.clientWidth, s = window.innerWidth;
  return {
    left: i[0],
    top: i[1],
    right: i[2],
    gap: Math.max(0, s - r + i[2] - i[0])
  };
}, E_ = td(), Er = "data-scroll-locked", R_ = function(n, i, r, s) {
  var l = n.left, u = n.top, f = n.right, d = n.gap;
  return r === void 0 && (r = "margin"), `
  .`.concat(s_, ` {
   overflow: hidden `).concat(s, `;
   padding-right: `).concat(d, "px ").concat(s, `;
  }
  body[`).concat(Er, `] {
    overflow: hidden `).concat(s, `;
    overscroll-behavior: contain;
    `).concat([
    i && "position: relative ".concat(s, ";"),
    r === "margin" && `
    padding-left: `.concat(l, `px;
    padding-top: `).concat(u, `px;
    padding-right: `).concat(f, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(d, "px ").concat(s, `;
    `),
    r === "padding" && "padding-right: ".concat(d, "px ").concat(s, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(Ci, ` {
    right: `).concat(d, "px ").concat(s, `;
  }
  
  .`).concat(Si, ` {
    margin-right: `).concat(d, "px ").concat(s, `;
  }
  
  .`).concat(Ci, " .").concat(Ci, ` {
    right: 0 `).concat(s, `;
  }
  
  .`).concat(Si, " .").concat(Si, ` {
    margin-right: 0 `).concat(s, `;
  }
  
  body[`).concat(Er, `] {
    `).concat(a_, ": ").concat(d, `px;
  }
`);
}, ef = function() {
  var n = parseInt(document.body.getAttribute(Er) || "0", 10);
  return isFinite(n) ? n : 0;
}, A_ = function() {
  v.useEffect(function() {
    return document.body.setAttribute(Er, (ef() + 1).toString()), function() {
      var n = ef() - 1;
      n <= 0 ? document.body.removeAttribute(Er) : document.body.setAttribute(Er, n.toString());
    };
  }, []);
}, T_ = function(n) {
  var i = n.noRelative, r = n.noImportant, s = n.gapMode, l = s === void 0 ? "margin" : s;
  A_();
  var u = v.useMemo(function() {
    return S_(l);
  }, [l]);
  return v.createElement(E_, { styles: R_(u, !i, l, r ? "" : "!important") });
}, ka = !1;
if (typeof window < "u")
  try {
    var wi = Object.defineProperty({}, "passive", {
      get: function() {
        return ka = !0, !0;
      }
    });
    window.addEventListener("test", wi, wi), window.removeEventListener("test", wi, wi);
  } catch {
    ka = !1;
  }
var yr = ka ? { passive: !1 } : !1, P_ = function(n) {
  return n.tagName === "TEXTAREA";
}, nd = function(n, i) {
  if (!(n instanceof Element))
    return !1;
  var r = window.getComputedStyle(n);
  return (
    // not-not-scrollable
    r[i] !== "hidden" && // contains scroll inside self
    !(r.overflowY === r.overflowX && !P_(n) && r[i] === "visible")
  );
}, O_ = function(n) {
  return nd(n, "overflowY");
}, N_ = function(n) {
  return nd(n, "overflowX");
}, tf = function(n, i) {
  var r = i.ownerDocument, s = i;
  do {
    typeof ShadowRoot < "u" && s instanceof ShadowRoot && (s = s.host);
    var l = rd(n, s);
    if (l) {
      var u = od(n, s), f = u[1], d = u[2];
      if (f > d)
        return !0;
    }
    s = s.parentNode;
  } while (s && s !== r.body);
  return !1;
}, I_ = function(n) {
  var i = n.scrollTop, r = n.scrollHeight, s = n.clientHeight;
  return [
    i,
    r,
    s
  ];
}, L_ = function(n) {
  var i = n.scrollLeft, r = n.scrollWidth, s = n.clientWidth;
  return [
    i,
    r,
    s
  ];
}, rd = function(n, i) {
  return n === "v" ? O_(i) : N_(i);
}, od = function(n, i) {
  return n === "v" ? I_(i) : L_(i);
}, M_ = function(n, i) {
  return n === "h" && i === "rtl" ? -1 : 1;
}, D_ = function(n, i, r, s, l) {
  var u = M_(n, window.getComputedStyle(i).direction), f = u * s, d = r.target, g = i.contains(d), m = !1, w = f > 0, _ = 0, E = 0;
  do {
    var R = od(n, d), O = R[0], y = R[1], A = R[2], I = y - A - u * O;
    (O || I) && rd(n, d) && (_ += I, E += O), d instanceof ShadowRoot ? d = d.host : d = d.parentNode;
  } while (
    // portaled content
    !g && d !== document.body || // self content
    g && (i.contains(d) || i === d)
  );
  return (w && (Math.abs(_) < 1 || !l) || !w && (Math.abs(E) < 1 || !l)) && (m = !0), m;
}, yi = function(n) {
  return "changedTouches" in n ? [n.changedTouches[0].clientX, n.changedTouches[0].clientY] : [0, 0];
}, nf = function(n) {
  return [n.deltaX, n.deltaY];
}, rf = function(n) {
  return n && "current" in n ? n.current : n;
}, k_ = function(n, i) {
  return n[0] === i[0] && n[1] === i[1];
}, j_ = function(n) {
  return `
  .block-interactivity-`.concat(n, ` {pointer-events: none;}
  .allow-interactivity-`).concat(n, ` {pointer-events: all;}
`);
}, F_ = 0, br = [];
function W_(n) {
  var i = v.useRef([]), r = v.useRef([0, 0]), s = v.useRef(), l = v.useState(F_++)[0], u = v.useState(td)[0], f = v.useRef(n);
  v.useEffect(function() {
    f.current = n;
  }, [n]), v.useEffect(function() {
    if (n.inert) {
      document.body.classList.add("block-interactivity-".concat(l));
      var y = i_([n.lockRef.current], (n.shards || []).map(rf), !0).filter(Boolean);
      return y.forEach(function(A) {
        return A.classList.add("allow-interactivity-".concat(l));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(l)), y.forEach(function(A) {
          return A.classList.remove("allow-interactivity-".concat(l));
        });
      };
    }
  }, [n.inert, n.lockRef.current, n.shards]);
  var d = v.useCallback(function(y, A) {
    if ("touches" in y && y.touches.length === 2 || y.type === "wheel" && y.ctrlKey)
      return !f.current.allowPinchZoom;
    var I = yi(y), N = r.current, M = "deltaX" in y ? y.deltaX : N[0] - I[0], W = "deltaY" in y ? y.deltaY : N[1] - I[1], $, G = y.target, U = Math.abs(M) > Math.abs(W) ? "h" : "v";
    if ("touches" in y && U === "h" && G.type === "range")
      return !1;
    var ee = tf(U, G);
    if (!ee)
      return !0;
    if (ee ? $ = U : ($ = U === "v" ? "h" : "v", ee = tf(U, G)), !ee)
      return !1;
    if (!s.current && "changedTouches" in y && (M || W) && (s.current = $), !$)
      return !0;
    var ue = s.current || $;
    return D_(ue, A, y, ue === "h" ? M : W, !0);
  }, []), g = v.useCallback(function(y) {
    var A = y;
    if (!(!br.length || br[br.length - 1] !== u)) {
      var I = "deltaY" in A ? nf(A) : yi(A), N = i.current.filter(function($) {
        return $.name === A.type && ($.target === A.target || A.target === $.shadowParent) && k_($.delta, I);
      })[0];
      if (N && N.should) {
        A.cancelable && A.preventDefault();
        return;
      }
      if (!N) {
        var M = (f.current.shards || []).map(rf).filter(Boolean).filter(function($) {
          return $.contains(A.target);
        }), W = M.length > 0 ? d(A, M[0]) : !f.current.noIsolation;
        W && A.cancelable && A.preventDefault();
      }
    }
  }, []), m = v.useCallback(function(y, A, I, N) {
    var M = { name: y, delta: A, target: I, should: N, shadowParent: B_(I) };
    i.current.push(M), setTimeout(function() {
      i.current = i.current.filter(function(W) {
        return W !== M;
      });
    }, 1);
  }, []), w = v.useCallback(function(y) {
    r.current = yi(y), s.current = void 0;
  }, []), _ = v.useCallback(function(y) {
    m(y.type, nf(y), y.target, d(y, n.lockRef.current));
  }, []), E = v.useCallback(function(y) {
    m(y.type, yi(y), y.target, d(y, n.lockRef.current));
  }, []);
  v.useEffect(function() {
    return br.push(u), n.setCallbacks({
      onScrollCapture: _,
      onWheelCapture: _,
      onTouchMoveCapture: E
    }), document.addEventListener("wheel", g, yr), document.addEventListener("touchmove", g, yr), document.addEventListener("touchstart", w, yr), function() {
      br = br.filter(function(y) {
        return y !== u;
      }), document.removeEventListener("wheel", g, yr), document.removeEventListener("touchmove", g, yr), document.removeEventListener("touchstart", w, yr);
    };
  }, []);
  var R = n.removeScrollBar, O = n.inert;
  return v.createElement(
    v.Fragment,
    null,
    O ? v.createElement(u, { styles: j_(l) }) : null,
    R ? v.createElement(T_, { gapMode: n.gapMode }) : null
  );
}
function B_(n) {
  for (var i = null; n !== null; )
    n instanceof ShadowRoot && (i = n.host, n = n.host), n = n.parentNode;
  return i;
}
const $_ = g_(ed, W_);
var id = v.forwardRef(function(n, i) {
  return v.createElement(Wi, Mn({}, n, { ref: i, sideCar: $_ }));
});
id.classNames = Wi.classNames;
var U_ = [" ", "Enter", "ArrowUp", "ArrowDown"], H_ = [" ", "Enter"], yo = "Select", [Bi, $i, z_] = mb(yo), [Lr, eS] = Cf(yo, [
  z_,
  Fi
]), Ui = Fi(), [V_, Fn] = Lr(yo), [G_, K_] = Lr(yo), sd = (n) => {
  const {
    __scopeSelect: i,
    children: r,
    open: s,
    defaultOpen: l,
    onOpenChange: u,
    value: f,
    defaultValue: d,
    onValueChange: g,
    dir: m,
    name: w,
    autoComplete: _,
    disabled: E,
    required: R,
    form: O
  } = n, y = Ui(i), [A, I] = v.useState(null), [N, M] = v.useState(null), [W, $] = v.useState(!1), G = yb(m), [U = !1, ee] = Da({
    prop: s,
    defaultProp: l,
    onChange: u
  }), [ue, he] = Da({
    prop: f,
    defaultProp: d,
    onChange: g
  }), Ce = v.useRef(null), q = A ? O || !!A.closest("form") : !0, [re, ne] = v.useState(/* @__PURE__ */ new Set()), Se = Array.from(re).map((oe) => oe.props.value).join(";");
  return /* @__PURE__ */ b.jsx(Kf, { ...y, children: /* @__PURE__ */ b.jsxs(
    V_,
    {
      required: R,
      scope: i,
      trigger: A,
      onTriggerChange: I,
      valueNode: N,
      onValueNodeChange: M,
      valueNodeHasChildren: W,
      onValueNodeHasChildrenChange: $,
      contentId: Mi(),
      value: ue,
      onValueChange: he,
      open: U,
      onOpenChange: ee,
      dir: G,
      triggerPointerDownPosRef: Ce,
      disabled: E,
      children: [
        /* @__PURE__ */ b.jsx(Bi.Provider, { scope: i, children: /* @__PURE__ */ b.jsx(
          G_,
          {
            scope: n.__scopeSelect,
            onNativeOptionAdd: v.useCallback((oe) => {
              ne((se) => new Set(se).add(oe));
            }, []),
            onNativeOptionRemove: v.useCallback((oe) => {
              ne((se) => {
                const Y = new Set(se);
                return Y.delete(oe), Y;
              });
            }, []),
            children: r
          }
        ) }),
        q ? /* @__PURE__ */ b.jsxs(
          Nd,
          {
            "aria-hidden": !0,
            required: R,
            tabIndex: -1,
            name: w,
            autoComplete: _,
            value: ue,
            onChange: (oe) => he(oe.target.value),
            disabled: E,
            form: O,
            children: [
              ue === void 0 ? /* @__PURE__ */ b.jsx("option", { value: "" }) : null,
              Array.from(re)
            ]
          },
          Se
        ) : null
      ]
    }
  ) });
};
sd.displayName = yo;
var ad = "SelectTrigger", ld = v.forwardRef(
  (n, i) => {
    const { __scopeSelect: r, disabled: s = !1, ...l } = n, u = Ui(r), f = Fn(ad, r), d = f.disabled || s, g = Ye(i, f.onTriggerChange), m = $i(r), w = v.useRef("touch"), [_, E, R] = Id((y) => {
      const A = m().filter((M) => !M.disabled), I = A.find((M) => M.value === f.value), N = Ld(A, y, I);
      N !== void 0 && f.onValueChange(N.value);
    }), O = (y) => {
      d || (f.onOpenChange(!0), R()), y && (f.triggerPointerDownPosRef.current = {
        x: Math.round(y.pageX),
        y: Math.round(y.pageY)
      });
    };
    return /* @__PURE__ */ b.jsx(Yf, { asChild: !0, ...u, children: /* @__PURE__ */ b.jsx(
      He.button,
      {
        type: "button",
        role: "combobox",
        "aria-controls": f.contentId,
        "aria-expanded": f.open,
        "aria-required": f.required,
        "aria-autocomplete": "none",
        dir: f.dir,
        "data-state": f.open ? "open" : "closed",
        disabled: d,
        "data-disabled": d ? "" : void 0,
        "data-placeholder": Od(f.value) ? "" : void 0,
        ...l,
        ref: g,
        onClick: De(l.onClick, (y) => {
          y.currentTarget.focus(), w.current !== "mouse" && O(y);
        }),
        onPointerDown: De(l.onPointerDown, (y) => {
          w.current = y.pointerType;
          const A = y.target;
          A.hasPointerCapture(y.pointerId) && A.releasePointerCapture(y.pointerId), y.button === 0 && y.ctrlKey === !1 && y.pointerType === "mouse" && (O(y), y.preventDefault());
        }),
        onKeyDown: De(l.onKeyDown, (y) => {
          const A = _.current !== "";
          !(y.ctrlKey || y.altKey || y.metaKey) && y.key.length === 1 && E(y.key), !(A && y.key === " ") && U_.includes(y.key) && (O(), y.preventDefault());
        })
      }
    ) });
  }
);
ld.displayName = ad;
var cd = "SelectValue", ud = v.forwardRef(
  (n, i) => {
    const { __scopeSelect: r, className: s, style: l, children: u, placeholder: f = "", ...d } = n, g = Fn(cd, r), { onValueNodeHasChildrenChange: m } = g, w = u !== void 0, _ = Ye(i, g.onValueNodeChange);
    return ht(() => {
      m(w);
    }, [m, w]), /* @__PURE__ */ b.jsx(
      He.span,
      {
        ...d,
        ref: _,
        style: { pointerEvents: "none" },
        children: Od(g.value) ? /* @__PURE__ */ b.jsx(b.Fragment, { children: f }) : u
      }
    );
  }
);
ud.displayName = cd;
var Y_ = "SelectIcon", fd = v.forwardRef(
  (n, i) => {
    const { __scopeSelect: r, children: s, ...l } = n;
    return /* @__PURE__ */ b.jsx(He.span, { "aria-hidden": !0, ...l, ref: i, children: s || "▼" });
  }
);
fd.displayName = Y_;
var q_ = "SelectPortal", dd = (n) => /* @__PURE__ */ b.jsx(Zf, { asChild: !0, ...n });
dd.displayName = q_;
var Qn = "SelectContent", pd = v.forwardRef(
  (n, i) => {
    const r = Fn(Qn, n.__scopeSelect), [s, l] = v.useState();
    if (ht(() => {
      l(new DocumentFragment());
    }, []), !r.open) {
      const u = s;
      return u ? Li.createPortal(
        /* @__PURE__ */ b.jsx(hd, { scope: n.__scopeSelect, children: /* @__PURE__ */ b.jsx(Bi.Slot, { scope: n.__scopeSelect, children: /* @__PURE__ */ b.jsx("div", { children: n.children }) }) }),
        u
      ) : null;
    }
    return /* @__PURE__ */ b.jsx(gd, { ...n, ref: i });
  }
);
pd.displayName = Qn;
var Vt = 10, [hd, Wn] = Lr(Qn), X_ = "SelectContentImpl", gd = v.forwardRef(
  (n, i) => {
    const {
      __scopeSelect: r,
      position: s = "item-aligned",
      onCloseAutoFocus: l,
      onEscapeKeyDown: u,
      onPointerDownOutside: f,
      //
      // PopperContent props
      side: d,
      sideOffset: g,
      align: m,
      alignOffset: w,
      arrowPadding: _,
      collisionBoundary: E,
      collisionPadding: R,
      sticky: O,
      hideWhenDetached: y,
      avoidCollisions: A,
      //
      ...I
    } = n, N = Fn(Qn, r), [M, W] = v.useState(null), [$, G] = v.useState(null), U = Ye(i, (Z) => W(Z)), [ee, ue] = v.useState(null), [he, Ce] = v.useState(
      null
    ), q = $i(r), [re, ne] = v.useState(!1), Se = v.useRef(!1);
    v.useEffect(() => {
      if (M)
        return r_(M);
    }, [M]), Nb();
    const oe = v.useCallback(
      (Z) => {
        const [me, ...Le] = q().map((xe) => xe.ref.current), [Re] = Le.slice(-1), be = document.activeElement;
        for (const xe of Z)
          if (xe === be || (xe == null || xe.scrollIntoView({ block: "nearest" }), xe === me && $ && ($.scrollTop = 0), xe === Re && $ && ($.scrollTop = $.scrollHeight), xe == null || xe.focus(), document.activeElement !== be))
            return;
      },
      [q, $]
    ), se = v.useCallback(
      () => oe([ee, M]),
      [oe, ee, M]
    );
    v.useEffect(() => {
      re && se();
    }, [re, se]);
    const { onOpenChange: Y, triggerPointerDownPosRef: ve } = N;
    v.useEffect(() => {
      if (M) {
        let Z = { x: 0, y: 0 };
        const me = (Re) => {
          var be, xe;
          Z = {
            x: Math.abs(Math.round(Re.pageX) - (((be = ve.current) == null ? void 0 : be.x) ?? 0)),
            y: Math.abs(Math.round(Re.pageY) - (((xe = ve.current) == null ? void 0 : xe.y) ?? 0))
          };
        }, Le = (Re) => {
          Z.x <= 10 && Z.y <= 10 ? Re.preventDefault() : M.contains(Re.target) || Y(!1), document.removeEventListener("pointermove", me), ve.current = null;
        };
        return ve.current !== null && (document.addEventListener("pointermove", me), document.addEventListener("pointerup", Le, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", me), document.removeEventListener("pointerup", Le, { capture: !0 });
        };
      }
    }, [M, Y, ve]), v.useEffect(() => {
      const Z = () => Y(!1);
      return window.addEventListener("blur", Z), window.addEventListener("resize", Z), () => {
        window.removeEventListener("blur", Z), window.removeEventListener("resize", Z);
      };
    }, [Y]);
    const [ke, Ee] = Id((Z) => {
      const me = q().filter((be) => !be.disabled), Le = me.find((be) => be.ref.current === document.activeElement), Re = Ld(me, Z, Le);
      Re && setTimeout(() => Re.ref.current.focus());
    }), Yt = v.useCallback(
      (Z, me, Le) => {
        const Re = !Se.current && !Le;
        (N.value !== void 0 && N.value === me || Re) && (ue(Z), Re && (Se.current = !0));
      },
      [N.value]
    ), qt = v.useCallback(() => M == null ? void 0 : M.focus(), [M]), Pt = v.useCallback(
      (Z, me, Le) => {
        const Re = !Se.current && !Le;
        (N.value !== void 0 && N.value === me || Re) && Ce(Z);
      },
      [N.value]
    ), ut = s === "popper" ? ja : vd, it = ut === ja ? {
      side: d,
      sideOffset: g,
      align: m,
      alignOffset: w,
      arrowPadding: _,
      collisionBoundary: E,
      collisionPadding: R,
      sticky: O,
      hideWhenDetached: y,
      avoidCollisions: A
    } : {};
    return /* @__PURE__ */ b.jsx(
      hd,
      {
        scope: r,
        content: M,
        viewport: $,
        onViewportChange: G,
        itemRefCallback: Yt,
        selectedItem: ee,
        onItemLeave: qt,
        itemTextRefCallback: Pt,
        focusSelectedItem: se,
        selectedItemText: he,
        position: s,
        isPositioned: re,
        searchRef: ke,
        children: /* @__PURE__ */ b.jsx(id, { as: Ar, allowPinchZoom: !0, children: /* @__PURE__ */ b.jsx(
          Rf,
          {
            asChild: !0,
            trapped: N.open,
            onMountAutoFocus: (Z) => {
              Z.preventDefault();
            },
            onUnmountAutoFocus: De(l, (Z) => {
              var me;
              (me = N.trigger) == null || me.focus({ preventScroll: !0 }), Z.preventDefault();
            }),
            children: /* @__PURE__ */ b.jsx(
              Va,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: u,
                onPointerDownOutside: f,
                onFocusOutside: (Z) => Z.preventDefault(),
                onDismiss: () => N.onOpenChange(!1),
                children: /* @__PURE__ */ b.jsx(
                  ut,
                  {
                    role: "listbox",
                    id: N.contentId,
                    "data-state": N.open ? "open" : "closed",
                    dir: N.dir,
                    onContextMenu: (Z) => Z.preventDefault(),
                    ...I,
                    ...it,
                    onPlaced: () => ne(!0),
                    ref: U,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...I.style
                    },
                    onKeyDown: De(I.onKeyDown, (Z) => {
                      const me = Z.ctrlKey || Z.altKey || Z.metaKey;
                      if (Z.key === "Tab" && Z.preventDefault(), !me && Z.key.length === 1 && Ee(Z.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(Z.key)) {
                        let Re = q().filter((be) => !be.disabled).map((be) => be.ref.current);
                        if (["ArrowUp", "End"].includes(Z.key) && (Re = Re.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(Z.key)) {
                          const be = Z.target, xe = Re.indexOf(be);
                          Re = Re.slice(xe + 1);
                        }
                        setTimeout(() => oe(Re)), Z.preventDefault();
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
gd.displayName = X_;
var Z_ = "SelectItemAlignedPosition", vd = v.forwardRef((n, i) => {
  const { __scopeSelect: r, onPlaced: s, ...l } = n, u = Fn(Qn, r), f = Wn(Qn, r), [d, g] = v.useState(null), [m, w] = v.useState(null), _ = Ye(i, (U) => w(U)), E = $i(r), R = v.useRef(!1), O = v.useRef(!0), { viewport: y, selectedItem: A, selectedItemText: I, focusSelectedItem: N } = f, M = v.useCallback(() => {
    if (u.trigger && u.valueNode && d && m && y && A && I) {
      const U = u.trigger.getBoundingClientRect(), ee = m.getBoundingClientRect(), ue = u.valueNode.getBoundingClientRect(), he = I.getBoundingClientRect();
      if (u.dir !== "rtl") {
        const be = he.left - ee.left, xe = ue.left - be, Ze = U.left - xe, We = U.width + Ze, st = Math.max(We, ee.width), wt = window.innerWidth - Vt, Je = ju(xe, [
          Vt,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(Vt, wt - st)
        ]);
        d.style.minWidth = We + "px", d.style.left = Je + "px";
      } else {
        const be = ee.right - he.right, xe = window.innerWidth - ue.right - be, Ze = window.innerWidth - U.right - xe, We = U.width + Ze, st = Math.max(We, ee.width), wt = window.innerWidth - Vt, Je = ju(xe, [
          Vt,
          Math.max(Vt, wt - st)
        ]);
        d.style.minWidth = We + "px", d.style.right = Je + "px";
      }
      const Ce = E(), q = window.innerHeight - Vt * 2, re = y.scrollHeight, ne = window.getComputedStyle(m), Se = parseInt(ne.borderTopWidth, 10), oe = parseInt(ne.paddingTop, 10), se = parseInt(ne.borderBottomWidth, 10), Y = parseInt(ne.paddingBottom, 10), ve = Se + oe + re + Y + se, ke = Math.min(A.offsetHeight * 5, ve), Ee = window.getComputedStyle(y), Yt = parseInt(Ee.paddingTop, 10), qt = parseInt(Ee.paddingBottom, 10), Pt = U.top + U.height / 2 - Vt, ut = q - Pt, it = A.offsetHeight / 2, Z = A.offsetTop + it, me = Se + oe + Z, Le = ve - me;
      if (me <= Pt) {
        const be = Ce.length > 0 && A === Ce[Ce.length - 1].ref.current;
        d.style.bottom = "0px";
        const xe = m.clientHeight - y.offsetTop - y.offsetHeight, Ze = Math.max(
          ut,
          it + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (be ? qt : 0) + xe + se
        ), We = me + Ze;
        d.style.height = We + "px";
      } else {
        const be = Ce.length > 0 && A === Ce[0].ref.current;
        d.style.top = "0px";
        const Ze = Math.max(
          Pt,
          Se + y.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (be ? Yt : 0) + it
        ) + Le;
        d.style.height = Ze + "px", y.scrollTop = me - Pt + y.offsetTop;
      }
      d.style.margin = `${Vt}px 0`, d.style.minHeight = ke + "px", d.style.maxHeight = q + "px", s == null || s(), requestAnimationFrame(() => R.current = !0);
    }
  }, [
    E,
    u.trigger,
    u.valueNode,
    d,
    m,
    y,
    A,
    I,
    u.dir,
    s
  ]);
  ht(() => M(), [M]);
  const [W, $] = v.useState();
  ht(() => {
    m && $(window.getComputedStyle(m).zIndex);
  }, [m]);
  const G = v.useCallback(
    (U) => {
      U && O.current === !0 && (M(), N == null || N(), O.current = !1);
    },
    [M, N]
  );
  return /* @__PURE__ */ b.jsx(
    Q_,
    {
      scope: r,
      contentWrapper: d,
      shouldExpandOnScrollRef: R,
      onScrollButtonChange: G,
      children: /* @__PURE__ */ b.jsx(
        "div",
        {
          ref: g,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: W
          },
          children: /* @__PURE__ */ b.jsx(
            He.div,
            {
              ...l,
              ref: _,
              style: {
                // When we get the height of the content, it includes borders. If we were to set
                // the height without having `boxSizing: 'border-box'` it would be too big.
                boxSizing: "border-box",
                // We need to ensure the content doesn't get taller than the wrapper
                maxHeight: "100%",
                ...l.style
              }
            }
          )
        }
      )
    }
  );
});
vd.displayName = Z_;
var J_ = "SelectPopperPosition", ja = v.forwardRef((n, i) => {
  const {
    __scopeSelect: r,
    align: s = "start",
    collisionPadding: l = Vt,
    ...u
  } = n, f = Ui(r);
  return /* @__PURE__ */ b.jsx(
    qf,
    {
      ...f,
      ...u,
      ref: i,
      align: s,
      collisionPadding: l,
      style: {
        // Ensure border-box for floating-ui calculations
        boxSizing: "border-box",
        ...u.style,
        "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-select-content-available-width": "var(--radix-popper-available-width)",
        "--radix-select-content-available-height": "var(--radix-popper-available-height)",
        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
ja.displayName = J_;
var [Q_, nl] = Lr(Qn, {}), Fa = "SelectViewport", md = v.forwardRef(
  (n, i) => {
    const { __scopeSelect: r, nonce: s, ...l } = n, u = Wn(Fa, r), f = nl(Fa, r), d = Ye(i, u.onViewportChange), g = v.useRef(0);
    return /* @__PURE__ */ b.jsxs(b.Fragment, { children: [
      /* @__PURE__ */ b.jsx(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: s
        }
      ),
      /* @__PURE__ */ b.jsx(Bi.Slot, { scope: r, children: /* @__PURE__ */ b.jsx(
        He.div,
        {
          "data-radix-select-viewport": "",
          role: "presentation",
          ...l,
          ref: d,
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
            ...l.style
          },
          onScroll: De(l.onScroll, (m) => {
            const w = m.currentTarget, { contentWrapper: _, shouldExpandOnScrollRef: E } = f;
            if (E != null && E.current && _) {
              const R = Math.abs(g.current - w.scrollTop);
              if (R > 0) {
                const O = window.innerHeight - Vt * 2, y = parseFloat(_.style.minHeight), A = parseFloat(_.style.height), I = Math.max(y, A);
                if (I < O) {
                  const N = I + R, M = Math.min(O, N), W = N - M;
                  _.style.height = M + "px", _.style.bottom === "0px" && (w.scrollTop = W > 0 ? W : 0, _.style.justifyContent = "flex-end");
                }
              }
            }
            g.current = w.scrollTop;
          })
        }
      ) })
    ] });
  }
);
md.displayName = Fa;
var xd = "SelectGroup", [eC, tC] = Lr(xd), nC = v.forwardRef(
  (n, i) => {
    const { __scopeSelect: r, ...s } = n, l = Mi();
    return /* @__PURE__ */ b.jsx(eC, { scope: r, id: l, children: /* @__PURE__ */ b.jsx(He.div, { role: "group", "aria-labelledby": l, ...s, ref: i }) });
  }
);
nC.displayName = xd;
var wd = "SelectLabel", yd = v.forwardRef(
  (n, i) => {
    const { __scopeSelect: r, ...s } = n, l = tC(wd, r);
    return /* @__PURE__ */ b.jsx(He.div, { id: l.id, ...s, ref: i });
  }
);
yd.displayName = wd;
var Ni = "SelectItem", [rC, bd] = Lr(Ni), _d = v.forwardRef(
  (n, i) => {
    const {
      __scopeSelect: r,
      value: s,
      disabled: l = !1,
      textValue: u,
      ...f
    } = n, d = Fn(Ni, r), g = Wn(Ni, r), m = d.value === s, [w, _] = v.useState(u ?? ""), [E, R] = v.useState(!1), O = Ye(
      i,
      (N) => {
        var M;
        return (M = g.itemRefCallback) == null ? void 0 : M.call(g, N, s, l);
      }
    ), y = Mi(), A = v.useRef("touch"), I = () => {
      l || (d.onValueChange(s), d.onOpenChange(!1));
    };
    if (s === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ b.jsx(
      rC,
      {
        scope: r,
        value: s,
        disabled: l,
        textId: y,
        isSelected: m,
        onItemTextChange: v.useCallback((N) => {
          _((M) => M || ((N == null ? void 0 : N.textContent) ?? "").trim());
        }, []),
        children: /* @__PURE__ */ b.jsx(
          Bi.ItemSlot,
          {
            scope: r,
            value: s,
            disabled: l,
            textValue: w,
            children: /* @__PURE__ */ b.jsx(
              He.div,
              {
                role: "option",
                "aria-labelledby": y,
                "data-highlighted": E ? "" : void 0,
                "aria-selected": m && E,
                "data-state": m ? "checked" : "unchecked",
                "aria-disabled": l || void 0,
                "data-disabled": l ? "" : void 0,
                tabIndex: l ? void 0 : -1,
                ...f,
                ref: O,
                onFocus: De(f.onFocus, () => R(!0)),
                onBlur: De(f.onBlur, () => R(!1)),
                onClick: De(f.onClick, () => {
                  A.current !== "mouse" && I();
                }),
                onPointerUp: De(f.onPointerUp, () => {
                  A.current === "mouse" && I();
                }),
                onPointerDown: De(f.onPointerDown, (N) => {
                  A.current = N.pointerType;
                }),
                onPointerMove: De(f.onPointerMove, (N) => {
                  var M;
                  A.current = N.pointerType, l ? (M = g.onItemLeave) == null || M.call(g) : A.current === "mouse" && N.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: De(f.onPointerLeave, (N) => {
                  var M;
                  N.currentTarget === document.activeElement && ((M = g.onItemLeave) == null || M.call(g));
                }),
                onKeyDown: De(f.onKeyDown, (N) => {
                  var W;
                  ((W = g.searchRef) == null ? void 0 : W.current) !== "" && N.key === " " || (H_.includes(N.key) && I(), N.key === " " && N.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
_d.displayName = Ni;
var fo = "SelectItemText", Cd = v.forwardRef(
  (n, i) => {
    const { __scopeSelect: r, className: s, style: l, ...u } = n, f = Fn(fo, r), d = Wn(fo, r), g = bd(fo, r), m = K_(fo, r), [w, _] = v.useState(null), E = Ye(
      i,
      (I) => _(I),
      g.onItemTextChange,
      (I) => {
        var N;
        return (N = d.itemTextRefCallback) == null ? void 0 : N.call(d, I, g.value, g.disabled);
      }
    ), R = w == null ? void 0 : w.textContent, O = v.useMemo(
      () => /* @__PURE__ */ b.jsx("option", { value: g.value, disabled: g.disabled, children: R }, g.value),
      [g.disabled, g.value, R]
    ), { onNativeOptionAdd: y, onNativeOptionRemove: A } = m;
    return ht(() => (y(O), () => A(O)), [y, A, O]), /* @__PURE__ */ b.jsxs(b.Fragment, { children: [
      /* @__PURE__ */ b.jsx(He.span, { id: g.textId, ...u, ref: E }),
      g.isSelected && f.valueNode && !f.valueNodeHasChildren ? Li.createPortal(u.children, f.valueNode) : null
    ] });
  }
);
Cd.displayName = fo;
var Sd = "SelectItemIndicator", Ed = v.forwardRef(
  (n, i) => {
    const { __scopeSelect: r, ...s } = n;
    return bd(Sd, r).isSelected ? /* @__PURE__ */ b.jsx(He.span, { "aria-hidden": !0, ...s, ref: i }) : null;
  }
);
Ed.displayName = Sd;
var Wa = "SelectScrollUpButton", Rd = v.forwardRef((n, i) => {
  const r = Wn(Wa, n.__scopeSelect), s = nl(Wa, n.__scopeSelect), [l, u] = v.useState(!1), f = Ye(i, s.onScrollButtonChange);
  return ht(() => {
    if (r.viewport && r.isPositioned) {
      let d = function() {
        const m = g.scrollTop > 0;
        u(m);
      };
      const g = r.viewport;
      return d(), g.addEventListener("scroll", d), () => g.removeEventListener("scroll", d);
    }
  }, [r.viewport, r.isPositioned]), l ? /* @__PURE__ */ b.jsx(
    Td,
    {
      ...n,
      ref: f,
      onAutoScroll: () => {
        const { viewport: d, selectedItem: g } = r;
        d && g && (d.scrollTop = d.scrollTop - g.offsetHeight);
      }
    }
  ) : null;
});
Rd.displayName = Wa;
var Ba = "SelectScrollDownButton", Ad = v.forwardRef((n, i) => {
  const r = Wn(Ba, n.__scopeSelect), s = nl(Ba, n.__scopeSelect), [l, u] = v.useState(!1), f = Ye(i, s.onScrollButtonChange);
  return ht(() => {
    if (r.viewport && r.isPositioned) {
      let d = function() {
        const m = g.scrollHeight - g.clientHeight, w = Math.ceil(g.scrollTop) < m;
        u(w);
      };
      const g = r.viewport;
      return d(), g.addEventListener("scroll", d), () => g.removeEventListener("scroll", d);
    }
  }, [r.viewport, r.isPositioned]), l ? /* @__PURE__ */ b.jsx(
    Td,
    {
      ...n,
      ref: f,
      onAutoScroll: () => {
        const { viewport: d, selectedItem: g } = r;
        d && g && (d.scrollTop = d.scrollTop + g.offsetHeight);
      }
    }
  ) : null;
});
Ad.displayName = Ba;
var Td = v.forwardRef((n, i) => {
  const { __scopeSelect: r, onAutoScroll: s, ...l } = n, u = Wn("SelectScrollButton", r), f = v.useRef(null), d = $i(r), g = v.useCallback(() => {
    f.current !== null && (window.clearInterval(f.current), f.current = null);
  }, []);
  return v.useEffect(() => () => g(), [g]), ht(() => {
    var w;
    const m = d().find((_) => _.ref.current === document.activeElement);
    (w = m == null ? void 0 : m.ref.current) == null || w.scrollIntoView({ block: "nearest" });
  }, [d]), /* @__PURE__ */ b.jsx(
    He.div,
    {
      "aria-hidden": !0,
      ...l,
      ref: i,
      style: { flexShrink: 0, ...l.style },
      onPointerDown: De(l.onPointerDown, () => {
        f.current === null && (f.current = window.setInterval(s, 50));
      }),
      onPointerMove: De(l.onPointerMove, () => {
        var m;
        (m = u.onItemLeave) == null || m.call(u), f.current === null && (f.current = window.setInterval(s, 50));
      }),
      onPointerLeave: De(l.onPointerLeave, () => {
        g();
      })
    }
  );
}), oC = "SelectSeparator", Pd = v.forwardRef(
  (n, i) => {
    const { __scopeSelect: r, ...s } = n;
    return /* @__PURE__ */ b.jsx(He.div, { "aria-hidden": !0, ...s, ref: i });
  }
);
Pd.displayName = oC;
var $a = "SelectArrow", iC = v.forwardRef(
  (n, i) => {
    const { __scopeSelect: r, ...s } = n, l = Ui(r), u = Fn($a, r), f = Wn($a, r);
    return u.open && f.position === "popper" ? /* @__PURE__ */ b.jsx(Xf, { ...l, ...s, ref: i }) : null;
  }
);
iC.displayName = $a;
function Od(n) {
  return n === "" || n === void 0;
}
var Nd = v.forwardRef(
  (n, i) => {
    const { value: r, ...s } = n, l = v.useRef(null), u = Ye(i, l), f = Z0(r);
    return v.useEffect(() => {
      const d = l.current, g = window.HTMLSelectElement.prototype, w = Object.getOwnPropertyDescriptor(
        g,
        "value"
      ).set;
      if (f !== r && w) {
        const _ = new Event("change", { bubbles: !0 });
        w.call(d, r), d.dispatchEvent(_);
      }
    }, [f, r]), /* @__PURE__ */ b.jsx(tl, { asChild: !0, children: /* @__PURE__ */ b.jsx("select", { ...s, ref: u, defaultValue: r }) });
  }
);
Nd.displayName = "BubbleSelect";
function Id(n) {
  const i = vn(n), r = v.useRef(""), s = v.useRef(0), l = v.useCallback(
    (f) => {
      const d = r.current + f;
      i(d), function g(m) {
        r.current = m, window.clearTimeout(s.current), m !== "" && (s.current = window.setTimeout(() => g(""), 1e3));
      }(d);
    },
    [i]
  ), u = v.useCallback(() => {
    r.current = "", window.clearTimeout(s.current);
  }, []);
  return v.useEffect(() => () => window.clearTimeout(s.current), []), [r, l, u];
}
function Ld(n, i, r) {
  const l = i.length > 1 && Array.from(i).every((m) => m === i[0]) ? i[0] : i, u = r ? n.indexOf(r) : -1;
  let f = sC(n, Math.max(u, 0));
  l.length === 1 && (f = f.filter((m) => m !== r));
  const g = f.find(
    (m) => m.textValue.toLowerCase().startsWith(l.toLowerCase())
  );
  return g !== r ? g : void 0;
}
function sC(n, i) {
  return n.map((r, s) => n[(i + s) % n.length]);
}
var aC = sd, Md = ld, lC = ud, cC = fd, uC = dd, Dd = pd, fC = md, kd = yd, jd = _d, dC = Cd, pC = Ed, Fd = Rd, Wd = Ad, Bd = Pd;
const hC = aC, gC = lC, $d = v.forwardRef(({ className: n, children: i, ...r }, s) => /* @__PURE__ */ b.jsxs(
  Md,
  {
    ref: s,
    className: et(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      n
    ),
    ...r,
    children: [
      i,
      /* @__PURE__ */ b.jsx(cC, { asChild: !0, children: /* @__PURE__ */ b.jsx(bf, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
$d.displayName = Md.displayName;
const Ud = v.forwardRef(({ className: n, ...i }, r) => /* @__PURE__ */ b.jsx(
  Fd,
  {
    ref: r,
    className: et(
      "flex cursor-default items-center justify-center py-1",
      n
    ),
    ...i,
    children: /* @__PURE__ */ b.jsx(hb, { className: "h-4 w-4" })
  }
));
Ud.displayName = Fd.displayName;
const Hd = v.forwardRef(({ className: n, ...i }, r) => /* @__PURE__ */ b.jsx(
  Wd,
  {
    ref: r,
    className: et(
      "flex cursor-default items-center justify-center py-1",
      n
    ),
    ...i,
    children: /* @__PURE__ */ b.jsx(bf, { className: "h-4 w-4" })
  }
));
Hd.displayName = Wd.displayName;
const zd = v.forwardRef(({ className: n, children: i, position: r = "popper", ...s }, l) => /* @__PURE__ */ b.jsx(uC, { children: /* @__PURE__ */ b.jsxs(
  Dd,
  {
    ref: l,
    className: et(
      "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      r === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      n
    ),
    position: r,
    ...s,
    children: [
      /* @__PURE__ */ b.jsx(Ud, {}),
      /* @__PURE__ */ b.jsx(
        fC,
        {
          className: et(
            "p-1",
            r === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children: i
        }
      ),
      /* @__PURE__ */ b.jsx(Hd, {})
    ]
  }
) }));
zd.displayName = Dd.displayName;
const vC = v.forwardRef(({ className: n, ...i }, r) => /* @__PURE__ */ b.jsx(
  kd,
  {
    ref: r,
    className: et("py-1.5 pl-8 pr-2 text-sm font-semibold", n),
    ...i
  }
));
vC.displayName = kd.displayName;
const Vd = v.forwardRef(({ className: n, children: i, ...r }, s) => /* @__PURE__ */ b.jsxs(
  jd,
  {
    ref: s,
    className: et(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      n
    ),
    ...r,
    children: [
      /* @__PURE__ */ b.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ b.jsx(pC, { children: /* @__PURE__ */ b.jsx(pb, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ b.jsx(dC, { children: i })
    ]
  }
));
Vd.displayName = jd.displayName;
const mC = v.forwardRef(({ className: n, ...i }, r) => /* @__PURE__ */ b.jsx(
  Bd,
  {
    ref: r,
    className: et("-mx-1 my-1 h-px bg-muted", n),
    ...i
  }
));
mC.displayName = Bd.displayName;
function xC(n, i) {
  return v.useReducer((r, s) => i[r][s] ?? r, n);
}
var Gd = (n) => {
  const { present: i, children: r } = n, s = wC(i), l = typeof r == "function" ? r({ present: s.isPresent }) : v.Children.only(r), u = Ye(s.ref, yC(l));
  return typeof r == "function" || s.isPresent ? v.cloneElement(l, { ref: u }) : null;
};
Gd.displayName = "Presence";
function wC(n) {
  const [i, r] = v.useState(), s = v.useRef({}), l = v.useRef(n), u = v.useRef("none"), f = n ? "mounted" : "unmounted", [d, g] = xC(f, {
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
  return v.useEffect(() => {
    const m = bi(s.current);
    u.current = d === "mounted" ? m : "none";
  }, [d]), ht(() => {
    const m = s.current, w = l.current;
    if (w !== n) {
      const E = u.current, R = bi(m);
      n ? g("MOUNT") : R === "none" || (m == null ? void 0 : m.display) === "none" ? g("UNMOUNT") : g(w && E !== R ? "ANIMATION_OUT" : "UNMOUNT"), l.current = n;
    }
  }, [n, g]), ht(() => {
    if (i) {
      let m;
      const w = i.ownerDocument.defaultView ?? window, _ = (R) => {
        const y = bi(s.current).includes(R.animationName);
        if (R.target === i && y && (g("ANIMATION_END"), !l.current)) {
          const A = i.style.animationFillMode;
          i.style.animationFillMode = "forwards", m = w.setTimeout(() => {
            i.style.animationFillMode === "forwards" && (i.style.animationFillMode = A);
          });
        }
      }, E = (R) => {
        R.target === i && (u.current = bi(s.current));
      };
      return i.addEventListener("animationstart", E), i.addEventListener("animationcancel", _), i.addEventListener("animationend", _), () => {
        w.clearTimeout(m), i.removeEventListener("animationstart", E), i.removeEventListener("animationcancel", _), i.removeEventListener("animationend", _);
      };
    } else
      g("ANIMATION_END");
  }, [i, g]), {
    isPresent: ["mounted", "unmountSuspended"].includes(d),
    ref: v.useCallback((m) => {
      m && (s.current = getComputedStyle(m)), r(m);
    }, [])
  };
}
function bi(n) {
  return (n == null ? void 0 : n.animationName) || "none";
}
function yC(n) {
  var s, l;
  let i = (s = Object.getOwnPropertyDescriptor(n.props, "ref")) == null ? void 0 : s.get, r = i && "isReactWarning" in i && i.isReactWarning;
  return r ? n.ref : (i = (l = Object.getOwnPropertyDescriptor(n, "ref")) == null ? void 0 : l.get, r = i && "isReactWarning" in i && i.isReactWarning, r ? n.props.ref : n.props.ref || n.ref);
}
var [Hi, tS] = Cf("Tooltip", [
  Fi
]), zi = Fi(), Kd = "TooltipProvider", bC = 700, Ua = "tooltip.open", [_C, rl] = Hi(Kd), Yd = (n) => {
  const {
    __scopeTooltip: i,
    delayDuration: r = bC,
    skipDelayDuration: s = 300,
    disableHoverableContent: l = !1,
    children: u
  } = n, [f, d] = v.useState(!0), g = v.useRef(!1), m = v.useRef(0);
  return v.useEffect(() => {
    const w = m.current;
    return () => window.clearTimeout(w);
  }, []), /* @__PURE__ */ b.jsx(
    _C,
    {
      scope: i,
      isOpenDelayed: f,
      delayDuration: r,
      onOpen: v.useCallback(() => {
        window.clearTimeout(m.current), d(!1);
      }, []),
      onClose: v.useCallback(() => {
        window.clearTimeout(m.current), m.current = window.setTimeout(
          () => d(!0),
          s
        );
      }, [s]),
      isPointerInTransitRef: g,
      onPointerInTransitChange: v.useCallback((w) => {
        g.current = w;
      }, []),
      disableHoverableContent: l,
      children: u
    }
  );
};
Yd.displayName = Kd;
var Vi = "Tooltip", [CC, Gi] = Hi(Vi), qd = (n) => {
  const {
    __scopeTooltip: i,
    children: r,
    open: s,
    defaultOpen: l = !1,
    onOpenChange: u,
    disableHoverableContent: f,
    delayDuration: d
  } = n, g = rl(Vi, n.__scopeTooltip), m = zi(i), [w, _] = v.useState(null), E = Mi(), R = v.useRef(0), O = f ?? g.disableHoverableContent, y = d ?? g.delayDuration, A = v.useRef(!1), [I = !1, N] = Da({
    prop: s,
    defaultProp: l,
    onChange: (U) => {
      U ? (g.onOpen(), document.dispatchEvent(new CustomEvent(Ua))) : g.onClose(), u == null || u(U);
    }
  }), M = v.useMemo(() => I ? A.current ? "delayed-open" : "instant-open" : "closed", [I]), W = v.useCallback(() => {
    window.clearTimeout(R.current), R.current = 0, A.current = !1, N(!0);
  }, [N]), $ = v.useCallback(() => {
    window.clearTimeout(R.current), R.current = 0, N(!1);
  }, [N]), G = v.useCallback(() => {
    window.clearTimeout(R.current), R.current = window.setTimeout(() => {
      A.current = !0, N(!0), R.current = 0;
    }, y);
  }, [y, N]);
  return v.useEffect(() => () => {
    R.current && (window.clearTimeout(R.current), R.current = 0);
  }, []), /* @__PURE__ */ b.jsx(Kf, { ...m, children: /* @__PURE__ */ b.jsx(
    CC,
    {
      scope: i,
      contentId: E,
      open: I,
      stateAttribute: M,
      trigger: w,
      onTriggerChange: _,
      onTriggerEnter: v.useCallback(() => {
        g.isOpenDelayed ? G() : W();
      }, [g.isOpenDelayed, G, W]),
      onTriggerLeave: v.useCallback(() => {
        O ? $() : (window.clearTimeout(R.current), R.current = 0);
      }, [$, O]),
      onOpen: W,
      onClose: $,
      disableHoverableContent: O,
      children: r
    }
  ) });
};
qd.displayName = Vi;
var Ha = "TooltipTrigger", Xd = v.forwardRef(
  (n, i) => {
    const { __scopeTooltip: r, ...s } = n, l = Gi(Ha, r), u = rl(Ha, r), f = zi(r), d = v.useRef(null), g = Ye(i, d, l.onTriggerChange), m = v.useRef(!1), w = v.useRef(!1), _ = v.useCallback(() => m.current = !1, []);
    return v.useEffect(() => () => document.removeEventListener("pointerup", _), [_]), /* @__PURE__ */ b.jsx(Yf, { asChild: !0, ...f, children: /* @__PURE__ */ b.jsx(
      He.button,
      {
        "aria-describedby": l.open ? l.contentId : void 0,
        "data-state": l.stateAttribute,
        ...s,
        ref: g,
        onPointerMove: De(n.onPointerMove, (E) => {
          E.pointerType !== "touch" && !w.current && !u.isPointerInTransitRef.current && (l.onTriggerEnter(), w.current = !0);
        }),
        onPointerLeave: De(n.onPointerLeave, () => {
          l.onTriggerLeave(), w.current = !1;
        }),
        onPointerDown: De(n.onPointerDown, () => {
          m.current = !0, document.addEventListener("pointerup", _, { once: !0 });
        }),
        onFocus: De(n.onFocus, () => {
          m.current || l.onOpen();
        }),
        onBlur: De(n.onBlur, l.onClose),
        onClick: De(n.onClick, l.onClose)
      }
    ) });
  }
);
Xd.displayName = Ha;
var SC = "TooltipPortal", [nS, EC] = Hi(SC, {
  forceMount: void 0
}), Pr = "TooltipContent", Zd = v.forwardRef(
  (n, i) => {
    const r = EC(Pr, n.__scopeTooltip), { forceMount: s = r.forceMount, side: l = "top", ...u } = n, f = Gi(Pr, n.__scopeTooltip);
    return /* @__PURE__ */ b.jsx(Gd, { present: s || f.open, children: f.disableHoverableContent ? /* @__PURE__ */ b.jsx(Jd, { side: l, ...u, ref: i }) : /* @__PURE__ */ b.jsx(RC, { side: l, ...u, ref: i }) });
  }
), RC = v.forwardRef((n, i) => {
  const r = Gi(Pr, n.__scopeTooltip), s = rl(Pr, n.__scopeTooltip), l = v.useRef(null), u = Ye(i, l), [f, d] = v.useState(null), { trigger: g, onClose: m } = r, w = l.current, { onPointerInTransitChange: _ } = s, E = v.useCallback(() => {
    d(null), _(!1);
  }, [_]), R = v.useCallback(
    (O, y) => {
      const A = O.currentTarget, I = { x: O.clientX, y: O.clientY }, N = OC(I, A.getBoundingClientRect()), M = NC(I, N), W = IC(y.getBoundingClientRect()), $ = MC([...M, ...W]);
      d($), _(!0);
    },
    [_]
  );
  return v.useEffect(() => () => E(), [E]), v.useEffect(() => {
    if (g && w) {
      const O = (A) => R(A, w), y = (A) => R(A, g);
      return g.addEventListener("pointerleave", O), w.addEventListener("pointerleave", y), () => {
        g.removeEventListener("pointerleave", O), w.removeEventListener("pointerleave", y);
      };
    }
  }, [g, w, R, E]), v.useEffect(() => {
    if (f) {
      const O = (y) => {
        const A = y.target, I = { x: y.clientX, y: y.clientY }, N = (g == null ? void 0 : g.contains(A)) || (w == null ? void 0 : w.contains(A)), M = !LC(I, f);
        N ? E() : M && (E(), m());
      };
      return document.addEventListener("pointermove", O), () => document.removeEventListener("pointermove", O);
    }
  }, [g, w, f, m, E]), /* @__PURE__ */ b.jsx(Jd, { ...n, ref: u });
}), [AC, TC] = Hi(Vi, { isInside: !1 }), Jd = v.forwardRef(
  (n, i) => {
    const {
      __scopeTooltip: r,
      children: s,
      "aria-label": l,
      onEscapeKeyDown: u,
      onPointerDownOutside: f,
      ...d
    } = n, g = Gi(Pr, r), m = zi(r), { onClose: w } = g;
    return v.useEffect(() => (document.addEventListener(Ua, w), () => document.removeEventListener(Ua, w)), [w]), v.useEffect(() => {
      if (g.trigger) {
        const _ = (E) => {
          const R = E.target;
          R != null && R.contains(g.trigger) && w();
        };
        return window.addEventListener("scroll", _, { capture: !0 }), () => window.removeEventListener("scroll", _, { capture: !0 });
      }
    }, [g.trigger, w]), /* @__PURE__ */ b.jsx(
      Va,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: u,
        onPointerDownOutside: f,
        onFocusOutside: (_) => _.preventDefault(),
        onDismiss: w,
        children: /* @__PURE__ */ b.jsxs(
          qf,
          {
            "data-state": g.stateAttribute,
            ...m,
            ...d,
            ref: i,
            style: {
              ...d.style,
              "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
              "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
              "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
              "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
              "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [
              /* @__PURE__ */ b.jsx(ff, { children: s }),
              /* @__PURE__ */ b.jsx(AC, { scope: r, isInside: !0, children: /* @__PURE__ */ b.jsx(Q0, { id: g.contentId, role: "tooltip", children: l || s }) })
            ]
          }
        )
      }
    );
  }
);
Zd.displayName = Pr;
var Qd = "TooltipArrow", PC = v.forwardRef(
  (n, i) => {
    const { __scopeTooltip: r, ...s } = n, l = zi(r);
    return TC(
      Qd,
      r
    ).isInside ? null : /* @__PURE__ */ b.jsx(Xf, { ...l, ...s, ref: i });
  }
);
PC.displayName = Qd;
function OC(n, i) {
  const r = Math.abs(i.top - n.y), s = Math.abs(i.bottom - n.y), l = Math.abs(i.right - n.x), u = Math.abs(i.left - n.x);
  switch (Math.min(r, s, l, u)) {
    case u:
      return "left";
    case l:
      return "right";
    case r:
      return "top";
    case s:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function NC(n, i, r = 5) {
  const s = [];
  switch (i) {
    case "top":
      s.push(
        { x: n.x - r, y: n.y + r },
        { x: n.x + r, y: n.y + r }
      );
      break;
    case "bottom":
      s.push(
        { x: n.x - r, y: n.y - r },
        { x: n.x + r, y: n.y - r }
      );
      break;
    case "left":
      s.push(
        { x: n.x + r, y: n.y - r },
        { x: n.x + r, y: n.y + r }
      );
      break;
    case "right":
      s.push(
        { x: n.x - r, y: n.y - r },
        { x: n.x - r, y: n.y + r }
      );
      break;
  }
  return s;
}
function IC(n) {
  const { top: i, right: r, bottom: s, left: l } = n;
  return [
    { x: l, y: i },
    { x: r, y: i },
    { x: r, y: s },
    { x: l, y: s }
  ];
}
function LC(n, i) {
  const { x: r, y: s } = n;
  let l = !1;
  for (let u = 0, f = i.length - 1; u < i.length; f = u++) {
    const d = i[u].x, g = i[u].y, m = i[f].x, w = i[f].y;
    g > s != w > s && r < (m - d) * (s - g) / (w - g) + d && (l = !l);
  }
  return l;
}
function MC(n) {
  const i = n.slice();
  return i.sort((r, s) => r.x < s.x ? -1 : r.x > s.x ? 1 : r.y < s.y ? -1 : r.y > s.y ? 1 : 0), DC(i);
}
function DC(n) {
  if (n.length <= 1)
    return n.slice();
  const i = [];
  for (let s = 0; s < n.length; s++) {
    const l = n[s];
    for (; i.length >= 2; ) {
      const u = i[i.length - 1], f = i[i.length - 2];
      if ((u.x - f.x) * (l.y - f.y) >= (u.y - f.y) * (l.x - f.x))
        i.pop();
      else
        break;
    }
    i.push(l);
  }
  i.pop();
  const r = [];
  for (let s = n.length - 1; s >= 0; s--) {
    const l = n[s];
    for (; r.length >= 2; ) {
      const u = r[r.length - 1], f = r[r.length - 2];
      if ((u.x - f.x) * (l.y - f.y) >= (u.y - f.y) * (l.x - f.x))
        r.pop();
      else
        break;
    }
    r.push(l);
  }
  return r.pop(), i.length === 1 && r.length === 1 && i[0].x === r[0].x && i[0].y === r[0].y ? i : i.concat(r);
}
var kC = Yd, jC = qd, FC = Xd, ep = Zd;
const po = kC, ho = jC, go = FC, Rr = v.forwardRef(({ className: n, sideOffset: i = 4, ...r }, s) => /* @__PURE__ */ b.jsx(
  ep,
  {
    ref: s,
    sideOffset: i,
    className: et(
      "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      n
    ),
    ...r
  }
));
Rr.displayName = ep.displayName;
const WC = pf(
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
function tp({ className: n, variant: i, ...r }) {
  return /* @__PURE__ */ b.jsx("div", { className: et(WC({ variant: i }), n), ...r });
}
const Ki = v.forwardRef(({ className: n, ...i }, r) => /* @__PURE__ */ b.jsx(
  "div",
  {
    ref: r,
    className: et(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      n
    ),
    ...i
  }
));
Ki.displayName = "Card";
const Yi = v.forwardRef(({ className: n, ...i }, r) => /* @__PURE__ */ b.jsx(
  "div",
  {
    ref: r,
    className: et("flex flex-col space-y-1.5 p-6", n),
    ...i
  }
));
Yi.displayName = "CardHeader";
const ol = v.forwardRef(({ className: n, ...i }, r) => /* @__PURE__ */ b.jsx(
  "div",
  {
    ref: r,
    className: et(
      "text-2xl font-semibold leading-none tracking-tight",
      n
    ),
    ...i
  }
));
ol.displayName = "CardTitle";
const BC = v.forwardRef(({ className: n, ...i }, r) => /* @__PURE__ */ b.jsx(
  "div",
  {
    ref: r,
    className: et("text-sm text-muted-foreground", n),
    ...i
  }
));
BC.displayName = "CardDescription";
const qi = v.forwardRef(({ className: n, ...i }, r) => /* @__PURE__ */ b.jsx("div", { ref: r, className: et("p-6 pt-0", n), ...i }));
qi.displayName = "CardContent";
const $C = v.forwardRef(({ className: n, ...i }, r) => /* @__PURE__ */ b.jsx(
  "div",
  {
    ref: r,
    className: et("flex items-center p-6 pt-0", n),
    ...i
  }
));
$C.displayName = "CardFooter";
function rS({ deal: n, onDealChange: i, availableDeals: r }) {
  const s = (l) => {
    i(l);
  };
  return /* @__PURE__ */ b.jsxs(Ki, { className: "bg-white shadow-sm border-slate-200", children: [
    /* @__PURE__ */ b.jsx(Yi, { children: /* @__PURE__ */ b.jsxs("div", { className: "flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4", children: [
      /* @__PURE__ */ b.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ b.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ b.jsx("h2", { className: "text-xl font-semibold text-slate-900", children: n.dealName }),
          /* @__PURE__ */ b.jsx(po, { children: /* @__PURE__ */ b.jsxs(ho, { children: [
            /* @__PURE__ */ b.jsx(go, { asChild: !0, children: /* @__PURE__ */ b.jsx(
              Cr,
              {
                variant: "ghost",
                size: "sm",
                className: "p-1 h-auto",
                onClick: () => window.open(n.hubspotUrl, "_blank"),
                children: /* @__PURE__ */ b.jsx(_f, { className: "w-4 h-4 text-slate-500" })
              }
            ) }),
            /* @__PURE__ */ b.jsx(Rr, { children: /* @__PURE__ */ b.jsx("p", { children: "View in HubSpot" }) })
          ] }) })
        ] }),
        /* @__PURE__ */ b.jsx(tp, { variant: "outline", className: "text-sm", children: n.dealStage })
      ] }),
      /* @__PURE__ */ b.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 lg:gap-8", children: [
        /* @__PURE__ */ b.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ b.jsx("p", { className: "text-sm text-slate-500", children: "Amount" }),
          /* @__PURE__ */ b.jsxs("p", { className: "text-lg font-semibold", children: [
            "$",
            n.amount.toLocaleString()
          ] })
        ] }),
        /* @__PURE__ */ b.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ b.jsxs("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ b.jsx("p", { className: "text-sm text-slate-500", children: "Win Probability" }),
            /* @__PURE__ */ b.jsx(po, { children: /* @__PURE__ */ b.jsxs(ho, { children: [
              /* @__PURE__ */ b.jsx(go, { asChild: !0, children: /* @__PURE__ */ b.jsx(Cr, { variant: "ghost", size: "sm", className: "p-0 h-auto", children: /* @__PURE__ */ b.jsx(Oa, { className: "w-3 h-3 text-slate-400" }) }) }),
              /* @__PURE__ */ b.jsx(Rr, { className: "max-w-xs", children: /* @__PURE__ */ b.jsx("p", { children: "Estimated chance of winning, based on prospect engagement, qualification status, risk factors, and historic deal outcomes at the current stage." }) })
            ] }) })
          ] }),
          /* @__PURE__ */ b.jsxs("p", { className: "text-lg font-semibold", children: [
            n.probability,
            "%"
          ] })
        ] }),
        /* @__PURE__ */ b.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ b.jsx("p", { className: "text-sm text-slate-500", children: "Deal Owner" }),
          /* @__PURE__ */ b.jsx("p", { className: "text-lg font-semibold", children: n.dealOwner })
        ] }),
        /* @__PURE__ */ b.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ b.jsxs("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ b.jsx("p", { className: "text-sm text-slate-500", children: "Deal Lannguage" }),
            /* @__PURE__ */ b.jsx(po, { children: /* @__PURE__ */ b.jsxs(ho, { children: [
              /* @__PURE__ */ b.jsx(go, { asChild: !0, children: /* @__PURE__ */ b.jsx(Cr, { variant: "ghost", size: "sm", className: "p-0 h-auto", children: /* @__PURE__ */ b.jsx(Oa, { className: "w-3 h-3 text-slate-400" }) }) }),
              /* @__PURE__ */ b.jsx(Rr, { className: "max-w-xs", children: /* @__PURE__ */ b.jsx("p", { children: "The main language of the deal." }) })
            ] }) })
          ] }),
          /* @__PURE__ */ b.jsx("p", { className: "text-lg font-semibold", children: rb(n.dealLanguage) })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ b.jsx(qi, { children: /* @__PURE__ */ b.jsxs(hC, { value: n.dealId, onValueChange: s, children: [
      /* @__PURE__ */ b.jsx($d, { className: "w-[300px]", children: /* @__PURE__ */ b.jsxs(gC, { children: [
        n.dealName,
        " (",
        n.company,
        ")"
      ] }) }),
      /* @__PURE__ */ b.jsx(zd, { children: r.map((l) => /* @__PURE__ */ b.jsxs(Vd, { value: l.dealId, children: [
        l.dealName,
        " (",
        l.company,
        ")"
      ] }, l.dealId)) })
    ] }) })
  ] });
}
function UC(n, i = []) {
  let r = [];
  function s(u, f) {
    const d = v.createContext(f), g = r.length;
    r = [...r, f];
    function m(_) {
      const { scope: E, children: R, ...O } = _, y = (E == null ? void 0 : E[n][g]) || d, A = v.useMemo(() => O, Object.values(O));
      return /* @__PURE__ */ b.jsx(y.Provider, { value: A, children: R });
    }
    function w(_, E) {
      const R = (E == null ? void 0 : E[n][g]) || d, O = v.useContext(R);
      if (O)
        return O;
      if (f !== void 0)
        return f;
      throw new Error(`\`${_}\` must be used within \`${u}\``);
    }
    return m.displayName = u + "Provider", [m, w];
  }
  const l = () => {
    const u = r.map((f) => v.createContext(f));
    return function(d) {
      const g = (d == null ? void 0 : d[n]) || u;
      return v.useMemo(
        () => ({ [`__scope${n}`]: { ...d, [n]: g } }),
        [d, g]
      );
    };
  };
  return l.scopeName = n, [s, HC(l, ...i)];
}
function HC(...n) {
  const i = n[0];
  if (n.length === 1)
    return i;
  const r = () => {
    const s = n.map((l) => ({
      useScope: l(),
      scopeName: l.scopeName
    }));
    return function(u) {
      const f = s.reduce((d, { useScope: g, scopeName: m }) => {
        const _ = g(u)[`__scope${m}`];
        return { ...d, ..._ };
      }, {});
      return v.useMemo(() => ({ [`__scope${i.scopeName}`]: f }), [f]);
    };
  };
  return r.scopeName = i.scopeName, r;
}
var il = "Progress", sl = 100, [zC, oS] = UC(il), [VC, GC] = zC(il), np = v.forwardRef(
  (n, i) => {
    const {
      __scopeProgress: r,
      value: s = null,
      max: l,
      getValueLabel: u = KC,
      ...f
    } = n;
    (l || l === 0) && !of(l) && console.error(YC(`${l}`, "Progress"));
    const d = of(l) ? l : sl;
    s !== null && !sf(s, d) && console.error(qC(`${s}`, "Progress"));
    const g = sf(s, d) ? s : null, m = Ii(g) ? u(g, d) : void 0;
    return /* @__PURE__ */ b.jsx(VC, { scope: r, value: g, max: d, children: /* @__PURE__ */ b.jsx(
      He.div,
      {
        "aria-valuemax": d,
        "aria-valuemin": 0,
        "aria-valuenow": Ii(g) ? g : void 0,
        "aria-valuetext": m,
        role: "progressbar",
        "data-state": ip(g, d),
        "data-value": g ?? void 0,
        "data-max": d,
        ...f,
        ref: i
      }
    ) });
  }
);
np.displayName = il;
var rp = "ProgressIndicator", op = v.forwardRef(
  (n, i) => {
    const { __scopeProgress: r, ...s } = n, l = GC(rp, r);
    return /* @__PURE__ */ b.jsx(
      He.div,
      {
        "data-state": ip(l.value, l.max),
        "data-value": l.value ?? void 0,
        "data-max": l.max,
        ...s,
        ref: i
      }
    );
  }
);
op.displayName = rp;
function KC(n, i) {
  return `${Math.round(n / i * 100)}%`;
}
function ip(n, i) {
  return n == null ? "indeterminate" : n === i ? "complete" : "loading";
}
function Ii(n) {
  return typeof n == "number";
}
function of(n) {
  return Ii(n) && !isNaN(n) && n > 0;
}
function sf(n, i) {
  return Ii(n) && !isNaN(n) && n <= i && n >= 0;
}
function YC(n, i) {
  return `Invalid prop \`max\` of value \`${n}\` supplied to \`${i}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${sl}\`.`;
}
function qC(n, i) {
  return `Invalid prop \`value\` of value \`${n}\` supplied to \`${i}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${sl} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var sp = np, XC = op;
const ap = v.forwardRef(({ className: n, value: i, ...r }, s) => /* @__PURE__ */ b.jsx(
  sp,
  {
    ref: s,
    className: et(
      "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
      n
    ),
    ...r,
    children: /* @__PURE__ */ b.jsx(
      XC,
      {
        className: "h-full w-full flex-1 bg-primary transition-all",
        style: { transform: `translateX(-${100 - (i || 0)}%)` }
      }
    )
  }
));
ap.displayName = sp.displayName;
const uo = [
  "Discovery",
  "Solution Validation",
  "Pricing Communicated",
  "Contract Sent",
  "Closed Won",
  "Closed Lost"
], iS = ({ deal: n }) => {
  const i = {
    Discovery: 75,
    "Solution Validation": 65,
    "Pricing Communicated": 55,
    "Contract Sent": 85,
    "Closed Won": 100,
    "Closed Lost": 0
  }, r = uo.includes(n.dealStage) ? n.dealStage : uo[0], s = i[r] || 0;
  return /* @__PURE__ */ b.jsxs(Ki, { className: "bg-white shadow-sm border-slate-200", children: [
    /* @__PURE__ */ b.jsxs(Yi, { children: [
      /* @__PURE__ */ b.jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ b.jsx(ol, { className: "text-slate-800", children: "Deal Progress" }) }),
      /* @__PURE__ */ b.jsx("p", { className: "text-sm text-muted-foreground", children: "Current stage and overall progress" })
    ] }),
    /* @__PURE__ */ b.jsx(qi, { children: /* @__PURE__ */ b.jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ b.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ b.jsx("div", { className: "flex flex-wrap justify-between text-xs sm:text-sm text-slate-600", children: uo.map((l) => /* @__PURE__ */ b.jsx(
          "span",
          {
            className: `mb-2 ${r === l ? "font-bold" : ""}`,
            children: l
          },
          l
        )) }),
        /* @__PURE__ */ b.jsx(
          ap,
          {
            value: (uo.indexOf(r) + 1) / uo.length * 100,
            className: "h-2"
          }
        ),
        /* @__PURE__ */ b.jsxs("div", { className: "flex justify-between text-xs text-slate-500", children: [
          /* @__PURE__ */ b.jsx("span", { children: "0%" }),
          /* @__PURE__ */ b.jsx("span", { children: "100%" })
        ] })
      ] }),
      /* @__PURE__ */ b.jsxs("div", { className: "pt-4 border-t", children: [
        /* @__PURE__ */ b.jsxs("div", { className: "flex items-center space-x-1 mb-4", children: [
          /* @__PURE__ */ b.jsx("h3", { className: "text-sm font-medium text-slate-700", children: "Outlook" }),
          /* @__PURE__ */ b.jsx(po, { children: /* @__PURE__ */ b.jsxs(ho, { children: [
            /* @__PURE__ */ b.jsx(go, { children: /* @__PURE__ */ b.jsx(Oa, { className: "w-3 h-3 text-muted-foreground" }) }),
            /* @__PURE__ */ b.jsxs(Rr, { className: "max-w-xs", children: [
              /* @__PURE__ */ b.jsx("p", { children: "Predictions based on deal qualification status and comparison with historical deals at the same stage" }),
              /* @__PURE__ */ b.jsx("a", { href: "", children: /* @__PURE__ */ b.jsx("button", { children: "Learn more" }) })
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ b.jsxs("div", { className: "grid grid-cols-2 gap-8", children: [
          /* @__PURE__ */ b.jsxs("div", { children: [
            /* @__PURE__ */ b.jsx("div", { className: "text-sm font-medium text-muted-foreground mb-1", children: "Win Probability" }),
            /* @__PURE__ */ b.jsxs("div", { className: "text-2xl font-bold text-slate-800", children: [
              n.probability,
              "%"
            ] })
          ] }),
          /* @__PURE__ */ b.jsxs("div", { children: [
            /* @__PURE__ */ b.jsxs("div", { className: "text-sm font-medium text-muted-foreground mb-1 space-x-1", children: [
              "Next Stage Probability",
              " "
            ] }),
            /* @__PURE__ */ b.jsxs("div", { className: "text-2xl font-bold text-slate-800", children: [
              s,
              "%"
            ] })
          ] })
        ] })
      ] })
    ] }) })
  ] });
};
function sS({ deal: n }) {
  const i = (r) => {
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
  return /* @__PURE__ */ b.jsxs(Ki, { className: "bg-white shadow-sm border-slate-200", children: [
    /* @__PURE__ */ b.jsxs(Yi, { children: [
      /* @__PURE__ */ b.jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ b.jsx(ol, { className: "text-slate-800", children: "Key Stakeholders" }) }),
      /* @__PURE__ */ b.jsx("p", { className: "text-sm text-slate-500", children: "Engagement levels and relationships" })
    ] }),
    /* @__PURE__ */ b.jsx(qi, { children: /* @__PURE__ */ b.jsx("div", { className: "space-y-4", children: n.keyStakeholders.map((r, s) => /* @__PURE__ */ b.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ b.jsxs("div", { children: [
        /* @__PURE__ */ b.jsx("p", { className: "font-medium", children: r.name }),
        /* @__PURE__ */ b.jsx("p", { className: "text-sm text-slate-500", children: r.role })
      ] }),
      /* @__PURE__ */ b.jsxs("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ b.jsxs(tp, { className: i(r.engagementLevel), children: [
          r.engagementLevel,
          " Engagement"
        ] }),
        /* @__PURE__ */ b.jsx(po, { children: /* @__PURE__ */ b.jsxs(ho, { children: [
          /* @__PURE__ */ b.jsx(go, { asChild: !0, children: /* @__PURE__ */ b.jsx(
            Cr,
            {
              variant: "ghost",
              size: "sm",
              className: "",
              onClick: () => window.open(r.contactLink, "_blank"),
              children: /* @__PURE__ */ b.jsx(_f, { className: "w-4 h-4 text-slate-500" })
            }
          ) }),
          /* @__PURE__ */ b.jsx(Rr, { children: /* @__PURE__ */ b.jsx("p", { children: "View contact in CRM" }) })
        ] }) })
      ] })
    ] }, s)) }) })
  ] });
}
export {
  QC as Counter,
  rS as DealHeader,
  iS as DealProgress,
  sS as DealStakeholders
};
//# sourceMappingURL=index.js.map
