import * as v from "react";
import gn, { useState as Xu, useEffect as Zu, forwardRef as Ju, createElement as ba, useLayoutEffect as Zw } from "react";
import * as Ti from "react-dom";
import Jw from "react-dom";
var ro = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Qw(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var _a = { exports: {} }, oo = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _u;
function ey() {
  if (_u)
    return oo;
  _u = 1;
  var n = gn, i = Symbol.for("react.element"), r = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, c = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function f(d, g, m) {
    var w, _ = {}, R = null, E = null;
    m !== void 0 && (R = "" + m), g.key !== void 0 && (R = "" + g.key), g.ref !== void 0 && (E = g.ref);
    for (w in g)
      s.call(g, w) && !u.hasOwnProperty(w) && (_[w] = g[w]);
    if (d && d.defaultProps)
      for (w in g = d.defaultProps, g)
        _[w] === void 0 && (_[w] = g[w]);
    return { $$typeof: i, type: d, key: R, ref: E, props: _, _owner: c.current };
  }
  return oo.Fragment = r, oo.jsx = f, oo.jsxs = f, oo;
}
var io = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cu;
function ty() {
  return Cu || (Cu = 1, process.env.NODE_ENV !== "production" && function() {
    var n = gn, i = Symbol.for("react.element"), r = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), f = Symbol.for("react.provider"), d = Symbol.for("react.context"), g = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), w = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), R = Symbol.for("react.lazy"), E = Symbol.for("react.offscreen"), O = Symbol.iterator, y = "@@iterator";
    function S(b) {
      if (b === null || typeof b != "object")
        return null;
      var j = O && b[O] || b[y];
      return typeof j == "function" ? j : null;
    }
    var N = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function I(b) {
      {
        for (var j = arguments.length, z = new Array(j > 1 ? j - 1 : 0), te = 1; te < j; te++)
          z[te - 1] = arguments[te];
        M("error", b, z);
      }
    }
    function M(b, j, z) {
      {
        var te = N.ReactDebugCurrentFrame, Ae = te.getStackAddendum();
        Ae !== "" && (j += "%s", z = z.concat([Ae]));
        var Oe = z.map(function(we) {
          return String(we);
        });
        Oe.unshift("Warning: " + j), Function.prototype.apply.call(console[b], console, Oe);
      }
    }
    var B = !1, U = !1, V = !1, $ = !1, ee = !1, ue;
    ue = Symbol.for("react.module.reference");
    function he(b) {
      return !!(typeof b == "string" || typeof b == "function" || b === s || b === u || ee || b === c || b === m || b === w || $ || b === E || B || U || V || typeof b == "object" && b !== null && (b.$$typeof === R || b.$$typeof === _ || b.$$typeof === f || b.$$typeof === d || b.$$typeof === g || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      b.$$typeof === ue || b.getModuleId !== void 0));
    }
    function Ce(b, j, z) {
      var te = b.displayName;
      if (te)
        return te;
      var Ae = j.displayName || j.name || "";
      return Ae !== "" ? z + "(" + Ae + ")" : z;
    }
    function q(b) {
      return b.displayName || "Context";
    }
    function re(b) {
      if (b == null)
        return null;
      if (typeof b.tag == "number" && I("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof b == "function")
        return b.displayName || b.name || null;
      if (typeof b == "string")
        return b;
      switch (b) {
        case s:
          return "Fragment";
        case r:
          return "Portal";
        case u:
          return "Profiler";
        case c:
          return "StrictMode";
        case m:
          return "Suspense";
        case w:
          return "SuspenseList";
      }
      if (typeof b == "object")
        switch (b.$$typeof) {
          case d:
            var j = b;
            return q(j) + ".Consumer";
          case f:
            var z = b;
            return q(z._context) + ".Provider";
          case g:
            return Ce(b, b.render, "ForwardRef");
          case _:
            var te = b.displayName || null;
            return te !== null ? te : re(b.type) || "Memo";
          case R: {
            var Ae = b, Oe = Ae._payload, we = Ae._init;
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
          var b = {
            configurable: !0,
            enumerable: !0,
            value: qt,
            writable: !0
          };
          Object.defineProperties(console, {
            info: b,
            log: b,
            warn: b,
            error: b,
            group: b,
            groupCollapsed: b,
            groupEnd: b
          });
        }
        Se++;
      }
    }
    function ut() {
      {
        if (Se--, Se === 0) {
          var b = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ne({}, b, {
              value: oe
            }),
            info: ne({}, b, {
              value: se
            }),
            warn: ne({}, b, {
              value: Y
            }),
            error: ne({}, b, {
              value: ve
            }),
            group: ne({}, b, {
              value: ke
            }),
            groupCollapsed: ne({}, b, {
              value: Ee
            }),
            groupEnd: ne({}, b, {
              value: Yt
            })
          });
        }
        Se < 0 && I("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var it = N.ReactCurrentDispatcher, Z;
    function me(b, j, z) {
      {
        if (Z === void 0)
          try {
            throw Error();
          } catch (Ae) {
            var te = Ae.stack.trim().match(/\n( *(at )?)/);
            Z = te && te[1] || "";
          }
        return `
` + Z + b;
      }
    }
    var Le = !1, Re;
    {
      var be = typeof WeakMap == "function" ? WeakMap : Map;
      Re = new be();
    }
    function xe(b, j) {
      if (!b || Le)
        return "";
      {
        var z = Re.get(b);
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
        if (j) {
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
            Reflect.construct(b, [], we);
          } else {
            try {
              we.call();
            } catch (at) {
              te = at;
            }
            b.call(we.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (at) {
            te = at;
          }
          b();
        }
      } catch (at) {
        if (at && te && typeof at.stack == "string") {
          for (var pe = at.stack.split(`
`), et = te.stack.split(`
`), Ue = pe.length - 1, He = et.length - 1; Ue >= 1 && He >= 0 && pe[Ue] !== et[He]; )
            He--;
          for (; Ue >= 1 && He >= 0; Ue--, He--)
            if (pe[Ue] !== et[He]) {
              if (Ue !== 1 || He !== 1)
                do
                  if (Ue--, He--, He < 0 || pe[Ue] !== et[He]) {
                    var tt = `
` + pe[Ue].replace(" at new ", " at ");
                    return b.displayName && tt.includes("<anonymous>") && (tt = tt.replace("<anonymous>", b.displayName)), typeof b == "function" && Re.set(b, tt), tt;
                  }
                while (Ue >= 1 && He >= 0);
              break;
            }
        }
      } finally {
        Le = !1, it.current = Oe, ut(), Error.prepareStackTrace = Ae;
      }
      var bn = b ? b.displayName || b.name : "", Ot = bn ? me(bn) : "";
      return typeof b == "function" && Re.set(b, Ot), Ot;
    }
    function Ze(b, j, z) {
      return xe(b, !1);
    }
    function Be(b) {
      var j = b.prototype;
      return !!(j && j.isReactComponent);
    }
    function st(b, j, z) {
      if (b == null)
        return "";
      if (typeof b == "function")
        return xe(b, Be(b));
      if (typeof b == "string")
        return me(b);
      switch (b) {
        case m:
          return me("Suspense");
        case w:
          return me("SuspenseList");
      }
      if (typeof b == "object")
        switch (b.$$typeof) {
          case g:
            return Ze(b.render);
          case _:
            return st(b.type, j, z);
          case R: {
            var te = b, Ae = te._payload, Oe = te._init;
            try {
              return st(Oe(Ae), j, z);
            } catch {
            }
          }
        }
      return "";
    }
    var wt = Object.prototype.hasOwnProperty, Je = {}, jn = N.ReactDebugCurrentFrame;
    function Bt(b) {
      if (b) {
        var j = b._owner, z = st(b.type, b._source, j ? j.type : null);
        jn.setExtraStackFrame(z);
      } else
        jn.setExtraStackFrame(null);
    }
    function Un(b, j, z, te, Ae) {
      {
        var Oe = Function.call.bind(wt);
        for (var we in b)
          if (Oe(b, we)) {
            var pe = void 0;
            try {
              if (typeof b[we] != "function") {
                var et = Error((te || "React class") + ": " + z + " type `" + we + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof b[we] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw et.name = "Invariant Violation", et;
              }
              pe = b[we](j, we, te, z, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Ue) {
              pe = Ue;
            }
            pe && !(pe instanceof Error) && (Bt(Ae), I("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", te || "React class", z, we, typeof pe), Bt(null)), pe instanceof Error && !(pe.message in Je) && (Je[pe.message] = !0, Bt(Ae), I("Failed %s type: %s", z, pe.message), Bt(null));
          }
      }
    }
    var yt = Array.isArray;
    function nn(b) {
      return yt(b);
    }
    function er(b) {
      {
        var j = typeof Symbol == "function" && Symbol.toStringTag, z = j && b[Symbol.toStringTag] || b.constructor.name || "Object";
        return z;
      }
    }
    function $i(b) {
      try {
        return wn(b), !1;
      } catch {
        return !0;
      }
    }
    function wn(b) {
      return "" + b;
    }
    function vo(b) {
      if ($i(b))
        return I("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", er(b)), wn(b);
    }
    var jt = N.ReactCurrentOwner, yn = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, tr, nr, $n;
    $n = {};
    function Nr(b) {
      if (wt.call(b, "ref")) {
        var j = Object.getOwnPropertyDescriptor(b, "ref").get;
        if (j && j.isReactWarning)
          return !1;
      }
      return b.ref !== void 0;
    }
    function Lr(b) {
      if (wt.call(b, "key")) {
        var j = Object.getOwnPropertyDescriptor(b, "key").get;
        if (j && j.isReactWarning)
          return !1;
      }
      return b.key !== void 0;
    }
    function Mr(b, j) {
      if (typeof b.ref == "string" && jt.current && j && jt.current.stateNode !== j) {
        var z = re(jt.current.type);
        $n[z] || (I('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', re(jt.current.type), b.ref), $n[z] = !0);
      }
    }
    function Dr(b, j) {
      {
        var z = function() {
          tr || (tr = !0, I("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", j));
        };
        z.isReactWarning = !0, Object.defineProperty(b, "key", {
          get: z,
          configurable: !0
        });
      }
    }
    function kr(b, j) {
      {
        var z = function() {
          nr || (nr = !0, I("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", j));
        };
        z.isReactWarning = !0, Object.defineProperty(b, "ref", {
          get: z,
          configurable: !0
        });
      }
    }
    var Fr = function(b, j, z, te, Ae, Oe, we) {
      var pe = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: i,
        // Built-in properties that belong on the element
        type: b,
        key: j,
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
    function Hi(b, j, z, te, Ae) {
      {
        var Oe, we = {}, pe = null, et = null;
        z !== void 0 && (vo(z), pe = "" + z), Lr(j) && (vo(j.key), pe = "" + j.key), Nr(j) && (et = j.ref, Mr(j, Ae));
        for (Oe in j)
          wt.call(j, Oe) && !yn.hasOwnProperty(Oe) && (we[Oe] = j[Oe]);
        if (b && b.defaultProps) {
          var Ue = b.defaultProps;
          for (Oe in Ue)
            we[Oe] === void 0 && (we[Oe] = Ue[Oe]);
        }
        if (pe || et) {
          var He = typeof b == "function" ? b.displayName || b.name || "Unknown" : b;
          pe && Dr(we, He), et && kr(we, He);
        }
        return Fr(b, pe, et, Ae, te, jt.current, we);
      }
    }
    var Wr = N.ReactCurrentOwner, mo = N.ReactDebugCurrentFrame;
    function rn(b) {
      if (b) {
        var j = b._owner, z = st(b.type, b._source, j ? j.type : null);
        mo.setExtraStackFrame(z);
      } else
        mo.setExtraStackFrame(null);
    }
    var rr;
    rr = !1;
    function Br(b) {
      return typeof b == "object" && b !== null && b.$$typeof === i;
    }
    function xo() {
      {
        if (Wr.current) {
          var b = re(Wr.current.type);
          if (b)
            return `

Check the render method of \`` + b + "`.";
        }
        return "";
      }
    }
    function zi(b) {
      return "";
    }
    var wo = {};
    function yo(b) {
      {
        var j = xo();
        if (!j) {
          var z = typeof b == "string" ? b : b.displayName || b.name;
          z && (j = `

Check the top-level render call using <` + z + ">.");
        }
        return j;
      }
    }
    function bo(b, j) {
      {
        if (!b._store || b._store.validated || b.key != null)
          return;
        b._store.validated = !0;
        var z = yo(j);
        if (wo[z])
          return;
        wo[z] = !0;
        var te = "";
        b && b._owner && b._owner !== Wr.current && (te = " It was passed a child from " + re(b._owner.type) + "."), rn(b), I('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', z, te), rn(null);
      }
    }
    function _o(b, j) {
      {
        if (typeof b != "object")
          return;
        if (nn(b))
          for (var z = 0; z < b.length; z++) {
            var te = b[z];
            Br(te) && bo(te, j);
          }
        else if (Br(b))
          b._store && (b._store.validated = !0);
        else if (b) {
          var Ae = S(b);
          if (typeof Ae == "function" && Ae !== b.entries)
            for (var Oe = Ae.call(b), we; !(we = Oe.next()).done; )
              Br(we.value) && bo(we.value, j);
        }
      }
    }
    function Gi(b) {
      {
        var j = b.type;
        if (j == null || typeof j == "string")
          return;
        var z;
        if (typeof j == "function")
          z = j.propTypes;
        else if (typeof j == "object" && (j.$$typeof === g || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        j.$$typeof === _))
          z = j.propTypes;
        else
          return;
        if (z) {
          var te = re(j);
          Un(z, b.props, "prop", te, b);
        } else if (j.PropTypes !== void 0 && !rr) {
          rr = !0;
          var Ae = re(j);
          I("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Ae || "Unknown");
        }
        typeof j.getDefaultProps == "function" && !j.getDefaultProps.isReactClassApproved && I("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function jr(b) {
      {
        for (var j = Object.keys(b.props), z = 0; z < j.length; z++) {
          var te = j[z];
          if (te !== "children" && te !== "key") {
            rn(b), I("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", te), rn(null);
            break;
          }
        }
        b.ref !== null && (rn(b), I("Invalid attribute `ref` supplied to `React.Fragment`."), rn(null));
      }
    }
    var Co = {};
    function or(b, j, z, te, Ae, Oe) {
      {
        var we = he(b);
        if (!we) {
          var pe = "";
          (b === void 0 || typeof b == "object" && b !== null && Object.keys(b).length === 0) && (pe += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var et = zi();
          et ? pe += et : pe += xo();
          var Ue;
          b === null ? Ue = "null" : nn(b) ? Ue = "array" : b !== void 0 && b.$$typeof === i ? (Ue = "<" + (re(b.type) || "Unknown") + " />", pe = " Did you accidentally export a JSX literal instead of a component?") : Ue = typeof b, I("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ue, pe);
        }
        var He = Hi(b, j, z, Ae, Oe);
        if (He == null)
          return He;
        if (we) {
          var tt = j.children;
          if (tt !== void 0)
            if (te)
              if (nn(tt)) {
                for (var bn = 0; bn < tt.length; bn++)
                  _o(tt[bn], b);
                Object.freeze && Object.freeze(tt);
              } else
                I("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              _o(tt, b);
        }
        if (wt.call(j, "key")) {
          var Ot = re(b), at = Object.keys(j).filter(function(So) {
            return So !== "key";
          }), Ur = at.length > 0 ? "{key: someKey, " + at.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Co[Ot + Ur]) {
            var Xi = at.length > 0 ? "{" + at.join(": ..., ") + ": ...}" : "{}";
            I(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ur, Ot, Xi, Ot), Co[Ot + Ur] = !0;
          }
        }
        return b === s ? jr(He) : Gi(He), He;
      }
    }
    function Vi(b, j, z) {
      return or(b, j, z, !0);
    }
    function Ki(b, j, z) {
      return or(b, j, z, !1);
    }
    var Yi = Ki, qi = Vi;
    io.Fragment = s, io.jsx = Yi, io.jsxs = qi;
  }()), io;
}
process.env.NODE_ENV === "production" ? _a.exports = ey() : _a.exports = ty();
var P = _a.exports, bi = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
bi.exports;
(function(n, i) {
  (function() {
    var r, s = "4.17.21", c = 200, u = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", f = "Expected a function", d = "Invalid `variable` option passed into `_.template`", g = "__lodash_hash_undefined__", m = 500, w = "__lodash_placeholder__", _ = 1, R = 2, E = 4, O = 1, y = 2, S = 1, N = 2, I = 4, M = 8, B = 16, U = 32, V = 64, $ = 128, ee = 256, ue = 512, he = 30, Ce = "...", q = 800, re = 16, ne = 1, Se = 2, oe = 3, se = 1 / 0, Y = 9007199254740991, ve = 17976931348623157e292, ke = NaN, Ee = 4294967295, Yt = Ee - 1, qt = Ee >>> 1, Pt = [
      ["ary", $],
      ["bind", S],
      ["bindKey", N],
      ["curry", M],
      ["curryRight", B],
      ["flip", ue],
      ["partial", U],
      ["partialRight", V],
      ["rearg", ee]
    ], ut = "[object Arguments]", it = "[object Array]", Z = "[object AsyncFunction]", me = "[object Boolean]", Le = "[object Date]", Re = "[object DOMException]", be = "[object Error]", xe = "[object Function]", Ze = "[object GeneratorFunction]", Be = "[object Map]", st = "[object Number]", wt = "[object Null]", Je = "[object Object]", jn = "[object Promise]", Bt = "[object Proxy]", Un = "[object RegExp]", yt = "[object Set]", nn = "[object String]", er = "[object Symbol]", $i = "[object Undefined]", wn = "[object WeakMap]", vo = "[object WeakSet]", jt = "[object ArrayBuffer]", yn = "[object DataView]", tr = "[object Float32Array]", nr = "[object Float64Array]", $n = "[object Int8Array]", Nr = "[object Int16Array]", Lr = "[object Int32Array]", Mr = "[object Uint8Array]", Dr = "[object Uint8ClampedArray]", kr = "[object Uint16Array]", Fr = "[object Uint32Array]", Hi = /\b__p \+= '';/g, Wr = /\b(__p \+=) '' \+/g, mo = /(__e\(.*?\)|\b__t\)) \+\n'';/g, rn = /&(?:amp|lt|gt|quot|#39);/g, rr = /[&<>"']/g, Br = RegExp(rn.source), xo = RegExp(rr.source), zi = /<%-([\s\S]+?)%>/g, wo = /<%([\s\S]+?)%>/g, yo = /<%=([\s\S]+?)%>/g, bo = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, _o = /^\w*$/, Gi = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, jr = /[\\^$.*+?()[\]{}|]/g, Co = RegExp(jr.source), or = /^\s+/, Vi = /\s/, Ki = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Yi = /\{\n\/\* \[wrapped with (.+)\] \*/, qi = /,? & /, b = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, j = /[()=,{}\[\]\/\s]/, z = /\\(\\)?/g, te = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Ae = /\w*$/, Oe = /^[-+]0x[0-9a-f]+$/i, we = /^0b[01]+$/i, pe = /^\[object .+?Constructor\]$/, et = /^0o[0-7]+$/i, Ue = /^(?:0|[1-9]\d*)$/, He = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, tt = /($^)/, bn = /['\n\r\u2028\u2029\\]/g, Ot = "\\ud800-\\udfff", at = "\\u0300-\\u036f", Ur = "\\ufe20-\\ufe2f", Xi = "\\u20d0-\\u20ff", So = at + Ur + Xi, Ja = "\\u2700-\\u27bf", Qa = "a-z\\xdf-\\xf6\\xf8-\\xff", Kd = "\\xac\\xb1\\xd7\\xf7", Yd = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", qd = "\\u2000-\\u206f", Xd = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", ec = "A-Z\\xc0-\\xd6\\xd8-\\xde", tc = "\\ufe0e\\ufe0f", nc = Kd + Yd + qd + Xd, Zi = "['’]", Zd = "[" + Ot + "]", rc = "[" + nc + "]", Eo = "[" + So + "]", oc = "\\d+", Jd = "[" + Ja + "]", ic = "[" + Qa + "]", sc = "[^" + Ot + nc + oc + Ja + Qa + ec + "]", Ji = "\\ud83c[\\udffb-\\udfff]", Qd = "(?:" + Eo + "|" + Ji + ")", ac = "[^" + Ot + "]", Qi = "(?:\\ud83c[\\udde6-\\uddff]){2}", es = "[\\ud800-\\udbff][\\udc00-\\udfff]", ir = "[" + ec + "]", cc = "\\u200d", lc = "(?:" + ic + "|" + sc + ")", ep = "(?:" + ir + "|" + sc + ")", uc = "(?:" + Zi + "(?:d|ll|m|re|s|t|ve))?", fc = "(?:" + Zi + "(?:D|LL|M|RE|S|T|VE))?", dc = Qd + "?", pc = "[" + tc + "]?", tp = "(?:" + cc + "(?:" + [ac, Qi, es].join("|") + ")" + pc + dc + ")*", np = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", rp = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", hc = pc + dc + tp, op = "(?:" + [Jd, Qi, es].join("|") + ")" + hc, ip = "(?:" + [ac + Eo + "?", Eo, Qi, es, Zd].join("|") + ")", sp = RegExp(Zi, "g"), ap = RegExp(Eo, "g"), ts = RegExp(Ji + "(?=" + Ji + ")|" + ip + hc, "g"), cp = RegExp([
      ir + "?" + ic + "+" + uc + "(?=" + [rc, ir, "$"].join("|") + ")",
      ep + "+" + fc + "(?=" + [rc, ir + lc, "$"].join("|") + ")",
      ir + "?" + lc + "+" + uc,
      ir + "+" + fc,
      rp,
      np,
      oc,
      op
    ].join("|"), "g"), lp = RegExp("[" + cc + Ot + So + tc + "]"), up = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, fp = [
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
    ], dp = -1, Fe = {};
    Fe[tr] = Fe[nr] = Fe[$n] = Fe[Nr] = Fe[Lr] = Fe[Mr] = Fe[Dr] = Fe[kr] = Fe[Fr] = !0, Fe[ut] = Fe[it] = Fe[jt] = Fe[me] = Fe[yn] = Fe[Le] = Fe[be] = Fe[xe] = Fe[Be] = Fe[st] = Fe[Je] = Fe[Un] = Fe[yt] = Fe[nn] = Fe[wn] = !1;
    var Me = {};
    Me[ut] = Me[it] = Me[jt] = Me[yn] = Me[me] = Me[Le] = Me[tr] = Me[nr] = Me[$n] = Me[Nr] = Me[Lr] = Me[Be] = Me[st] = Me[Je] = Me[Un] = Me[yt] = Me[nn] = Me[er] = Me[Mr] = Me[Dr] = Me[kr] = Me[Fr] = !0, Me[be] = Me[xe] = Me[wn] = !1;
    var pp = {
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
    }, hp = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, gp = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, vp = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, mp = parseFloat, xp = parseInt, gc = typeof ro == "object" && ro && ro.Object === Object && ro, wp = typeof self == "object" && self && self.Object === Object && self, nt = gc || wp || Function("return this")(), ns = i && !i.nodeType && i, Hn = ns && !0 && n && !n.nodeType && n, vc = Hn && Hn.exports === ns, rs = vc && gc.process, It = function() {
      try {
        var A = Hn && Hn.require && Hn.require("util").types;
        return A || rs && rs.binding && rs.binding("util");
      } catch {
      }
    }(), mc = It && It.isArrayBuffer, xc = It && It.isDate, wc = It && It.isMap, yc = It && It.isRegExp, bc = It && It.isSet, _c = It && It.isTypedArray;
    function bt(A, D, L) {
      switch (L.length) {
        case 0:
          return A.call(D);
        case 1:
          return A.call(D, L[0]);
        case 2:
          return A.call(D, L[0], L[1]);
        case 3:
          return A.call(D, L[0], L[1], L[2]);
      }
      return A.apply(D, L);
    }
    function yp(A, D, L, G) {
      for (var ie = -1, Te = A == null ? 0 : A.length; ++ie < Te; ) {
        var qe = A[ie];
        D(G, qe, L(qe), A);
      }
      return G;
    }
    function Nt(A, D) {
      for (var L = -1, G = A == null ? 0 : A.length; ++L < G && D(A[L], L, A) !== !1; )
        ;
      return A;
    }
    function bp(A, D) {
      for (var L = A == null ? 0 : A.length; L-- && D(A[L], L, A) !== !1; )
        ;
      return A;
    }
    function Cc(A, D) {
      for (var L = -1, G = A == null ? 0 : A.length; ++L < G; )
        if (!D(A[L], L, A))
          return !1;
      return !0;
    }
    function _n(A, D) {
      for (var L = -1, G = A == null ? 0 : A.length, ie = 0, Te = []; ++L < G; ) {
        var qe = A[L];
        D(qe, L, A) && (Te[ie++] = qe);
      }
      return Te;
    }
    function Ro(A, D) {
      var L = A == null ? 0 : A.length;
      return !!L && sr(A, D, 0) > -1;
    }
    function os(A, D, L) {
      for (var G = -1, ie = A == null ? 0 : A.length; ++G < ie; )
        if (L(D, A[G]))
          return !0;
      return !1;
    }
    function je(A, D) {
      for (var L = -1, G = A == null ? 0 : A.length, ie = Array(G); ++L < G; )
        ie[L] = D(A[L], L, A);
      return ie;
    }
    function Cn(A, D) {
      for (var L = -1, G = D.length, ie = A.length; ++L < G; )
        A[ie + L] = D[L];
      return A;
    }
    function is(A, D, L, G) {
      var ie = -1, Te = A == null ? 0 : A.length;
      for (G && Te && (L = A[++ie]); ++ie < Te; )
        L = D(L, A[ie], ie, A);
      return L;
    }
    function _p(A, D, L, G) {
      var ie = A == null ? 0 : A.length;
      for (G && ie && (L = A[--ie]); ie--; )
        L = D(L, A[ie], ie, A);
      return L;
    }
    function ss(A, D) {
      for (var L = -1, G = A == null ? 0 : A.length; ++L < G; )
        if (D(A[L], L, A))
          return !0;
      return !1;
    }
    var Cp = as("length");
    function Sp(A) {
      return A.split("");
    }
    function Ep(A) {
      return A.match(b) || [];
    }
    function Sc(A, D, L) {
      var G;
      return L(A, function(ie, Te, qe) {
        if (D(ie, Te, qe))
          return G = Te, !1;
      }), G;
    }
    function Ao(A, D, L, G) {
      for (var ie = A.length, Te = L + (G ? 1 : -1); G ? Te-- : ++Te < ie; )
        if (D(A[Te], Te, A))
          return Te;
      return -1;
    }
    function sr(A, D, L) {
      return D === D ? Fp(A, D, L) : Ao(A, Ec, L);
    }
    function Rp(A, D, L, G) {
      for (var ie = L - 1, Te = A.length; ++ie < Te; )
        if (G(A[ie], D))
          return ie;
      return -1;
    }
    function Ec(A) {
      return A !== A;
    }
    function Rc(A, D) {
      var L = A == null ? 0 : A.length;
      return L ? ls(A, D) / L : ke;
    }
    function as(A) {
      return function(D) {
        return D == null ? r : D[A];
      };
    }
    function cs(A) {
      return function(D) {
        return A == null ? r : A[D];
      };
    }
    function Ac(A, D, L, G, ie) {
      return ie(A, function(Te, qe, Ne) {
        L = G ? (G = !1, Te) : D(L, Te, qe, Ne);
      }), L;
    }
    function Ap(A, D) {
      var L = A.length;
      for (A.sort(D); L--; )
        A[L] = A[L].value;
      return A;
    }
    function ls(A, D) {
      for (var L, G = -1, ie = A.length; ++G < ie; ) {
        var Te = D(A[G]);
        Te !== r && (L = L === r ? Te : L + Te);
      }
      return L;
    }
    function us(A, D) {
      for (var L = -1, G = Array(A); ++L < A; )
        G[L] = D(L);
      return G;
    }
    function Tp(A, D) {
      return je(D, function(L) {
        return [L, A[L]];
      });
    }
    function Tc(A) {
      return A && A.slice(0, Nc(A) + 1).replace(or, "");
    }
    function _t(A) {
      return function(D) {
        return A(D);
      };
    }
    function fs(A, D) {
      return je(D, function(L) {
        return A[L];
      });
    }
    function $r(A, D) {
      return A.has(D);
    }
    function Pc(A, D) {
      for (var L = -1, G = A.length; ++L < G && sr(D, A[L], 0) > -1; )
        ;
      return L;
    }
    function Oc(A, D) {
      for (var L = A.length; L-- && sr(D, A[L], 0) > -1; )
        ;
      return L;
    }
    function Pp(A, D) {
      for (var L = A.length, G = 0; L--; )
        A[L] === D && ++G;
      return G;
    }
    var Op = cs(pp), Ip = cs(hp);
    function Np(A) {
      return "\\" + vp[A];
    }
    function Lp(A, D) {
      return A == null ? r : A[D];
    }
    function ar(A) {
      return lp.test(A);
    }
    function Mp(A) {
      return up.test(A);
    }
    function Dp(A) {
      for (var D, L = []; !(D = A.next()).done; )
        L.push(D.value);
      return L;
    }
    function ds(A) {
      var D = -1, L = Array(A.size);
      return A.forEach(function(G, ie) {
        L[++D] = [ie, G];
      }), L;
    }
    function Ic(A, D) {
      return function(L) {
        return A(D(L));
      };
    }
    function Sn(A, D) {
      for (var L = -1, G = A.length, ie = 0, Te = []; ++L < G; ) {
        var qe = A[L];
        (qe === D || qe === w) && (A[L] = w, Te[ie++] = L);
      }
      return Te;
    }
    function To(A) {
      var D = -1, L = Array(A.size);
      return A.forEach(function(G) {
        L[++D] = G;
      }), L;
    }
    function kp(A) {
      var D = -1, L = Array(A.size);
      return A.forEach(function(G) {
        L[++D] = [G, G];
      }), L;
    }
    function Fp(A, D, L) {
      for (var G = L - 1, ie = A.length; ++G < ie; )
        if (A[G] === D)
          return G;
      return -1;
    }
    function Wp(A, D, L) {
      for (var G = L + 1; G--; )
        if (A[G] === D)
          return G;
      return G;
    }
    function cr(A) {
      return ar(A) ? jp(A) : Cp(A);
    }
    function Ut(A) {
      return ar(A) ? Up(A) : Sp(A);
    }
    function Nc(A) {
      for (var D = A.length; D-- && Vi.test(A.charAt(D)); )
        ;
      return D;
    }
    var Bp = cs(gp);
    function jp(A) {
      for (var D = ts.lastIndex = 0; ts.test(A); )
        ++D;
      return D;
    }
    function Up(A) {
      return A.match(ts) || [];
    }
    function $p(A) {
      return A.match(cp) || [];
    }
    var Hp = function A(D) {
      D = D == null ? nt : lr.defaults(nt.Object(), D, lr.pick(nt, fp));
      var L = D.Array, G = D.Date, ie = D.Error, Te = D.Function, qe = D.Math, Ne = D.Object, ps = D.RegExp, zp = D.String, Lt = D.TypeError, Po = L.prototype, Gp = Te.prototype, ur = Ne.prototype, Oo = D["__core-js_shared__"], Io = Gp.toString, Ie = ur.hasOwnProperty, Vp = 0, Lc = function() {
        var e = /[^.]+$/.exec(Oo && Oo.keys && Oo.keys.IE_PROTO || "");
        return e ? "Symbol(src)_1." + e : "";
      }(), No = ur.toString, Kp = Io.call(Ne), Yp = nt._, qp = ps(
        "^" + Io.call(Ie).replace(jr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), Lo = vc ? D.Buffer : r, En = D.Symbol, Mo = D.Uint8Array, Mc = Lo ? Lo.allocUnsafe : r, Do = Ic(Ne.getPrototypeOf, Ne), Dc = Ne.create, kc = ur.propertyIsEnumerable, ko = Po.splice, Fc = En ? En.isConcatSpreadable : r, Hr = En ? En.iterator : r, zn = En ? En.toStringTag : r, Fo = function() {
        try {
          var e = qn(Ne, "defineProperty");
          return e({}, "", {}), e;
        } catch {
        }
      }(), Xp = D.clearTimeout !== nt.clearTimeout && D.clearTimeout, Zp = G && G.now !== nt.Date.now && G.now, Jp = D.setTimeout !== nt.setTimeout && D.setTimeout, Wo = qe.ceil, Bo = qe.floor, hs = Ne.getOwnPropertySymbols, Qp = Lo ? Lo.isBuffer : r, Wc = D.isFinite, eh = Po.join, th = Ic(Ne.keys, Ne), Xe = qe.max, ct = qe.min, nh = G.now, rh = D.parseInt, Bc = qe.random, oh = Po.reverse, gs = qn(D, "DataView"), zr = qn(D, "Map"), vs = qn(D, "Promise"), fr = qn(D, "Set"), Gr = qn(D, "WeakMap"), Vr = qn(Ne, "create"), jo = Gr && new Gr(), dr = {}, ih = Xn(gs), sh = Xn(zr), ah = Xn(vs), ch = Xn(fr), lh = Xn(Gr), Uo = En ? En.prototype : r, Kr = Uo ? Uo.valueOf : r, jc = Uo ? Uo.toString : r;
      function p(e) {
        if (ze(e) && !ae(e) && !(e instanceof ye)) {
          if (e instanceof Mt)
            return e;
          if (Ie.call(e, "__wrapped__"))
            return Ul(e);
        }
        return new Mt(e);
      }
      var pr = /* @__PURE__ */ function() {
        function e() {
        }
        return function(t) {
          if (!$e(t))
            return {};
          if (Dc)
            return Dc(t);
          e.prototype = t;
          var o = new e();
          return e.prototype = r, o;
        };
      }();
      function $o() {
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
        escape: zi,
        /**
         * Used to detect code to be evaluated.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        evaluate: wo,
        /**
         * Used to detect `data` property values to inject.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        interpolate: yo,
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
      }, p.prototype = $o.prototype, p.prototype.constructor = p, Mt.prototype = pr($o.prototype), Mt.prototype.constructor = Mt;
      function ye(e) {
        this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Ee, this.__views__ = [];
      }
      function uh() {
        var e = new ye(this.__wrapped__);
        return e.__actions__ = gt(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = gt(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = gt(this.__views__), e;
      }
      function fh() {
        if (this.__filtered__) {
          var e = new ye(this);
          e.__dir__ = -1, e.__filtered__ = !0;
        } else
          e = this.clone(), e.__dir__ *= -1;
        return e;
      }
      function dh() {
        var e = this.__wrapped__.value(), t = this.__dir__, o = ae(e), a = t < 0, l = o ? e.length : 0, h = Sg(0, l, this.__views__), x = h.start, C = h.end, T = C - x, k = a ? C : x - 1, F = this.__iteratees__, W = F.length, H = 0, K = ct(T, this.__takeCount__);
        if (!o || !a && l == T && K == T)
          return ul(e, this.__actions__);
        var J = [];
        e:
          for (; T-- && H < K; ) {
            k += t;
            for (var fe = -1, Q = e[k]; ++fe < W; ) {
              var ge = F[fe], _e = ge.iteratee, Et = ge.type, pt = _e(Q);
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
      ye.prototype = pr($o.prototype), ye.prototype.constructor = ye;
      function Gn(e) {
        var t = -1, o = e == null ? 0 : e.length;
        for (this.clear(); ++t < o; ) {
          var a = e[t];
          this.set(a[0], a[1]);
        }
      }
      function ph() {
        this.__data__ = Vr ? Vr(null) : {}, this.size = 0;
      }
      function hh(e) {
        var t = this.has(e) && delete this.__data__[e];
        return this.size -= t ? 1 : 0, t;
      }
      function gh(e) {
        var t = this.__data__;
        if (Vr) {
          var o = t[e];
          return o === g ? r : o;
        }
        return Ie.call(t, e) ? t[e] : r;
      }
      function vh(e) {
        var t = this.__data__;
        return Vr ? t[e] !== r : Ie.call(t, e);
      }
      function mh(e, t) {
        var o = this.__data__;
        return this.size += this.has(e) ? 0 : 1, o[e] = Vr && t === r ? g : t, this;
      }
      Gn.prototype.clear = ph, Gn.prototype.delete = hh, Gn.prototype.get = gh, Gn.prototype.has = vh, Gn.prototype.set = mh;
      function on(e) {
        var t = -1, o = e == null ? 0 : e.length;
        for (this.clear(); ++t < o; ) {
          var a = e[t];
          this.set(a[0], a[1]);
        }
      }
      function xh() {
        this.__data__ = [], this.size = 0;
      }
      function wh(e) {
        var t = this.__data__, o = Ho(t, e);
        if (o < 0)
          return !1;
        var a = t.length - 1;
        return o == a ? t.pop() : ko.call(t, o, 1), --this.size, !0;
      }
      function yh(e) {
        var t = this.__data__, o = Ho(t, e);
        return o < 0 ? r : t[o][1];
      }
      function bh(e) {
        return Ho(this.__data__, e) > -1;
      }
      function _h(e, t) {
        var o = this.__data__, a = Ho(o, e);
        return a < 0 ? (++this.size, o.push([e, t])) : o[a][1] = t, this;
      }
      on.prototype.clear = xh, on.prototype.delete = wh, on.prototype.get = yh, on.prototype.has = bh, on.prototype.set = _h;
      function sn(e) {
        var t = -1, o = e == null ? 0 : e.length;
        for (this.clear(); ++t < o; ) {
          var a = e[t];
          this.set(a[0], a[1]);
        }
      }
      function Ch() {
        this.size = 0, this.__data__ = {
          hash: new Gn(),
          map: new (zr || on)(),
          string: new Gn()
        };
      }
      function Sh(e) {
        var t = ti(this, e).delete(e);
        return this.size -= t ? 1 : 0, t;
      }
      function Eh(e) {
        return ti(this, e).get(e);
      }
      function Rh(e) {
        return ti(this, e).has(e);
      }
      function Ah(e, t) {
        var o = ti(this, e), a = o.size;
        return o.set(e, t), this.size += o.size == a ? 0 : 1, this;
      }
      sn.prototype.clear = Ch, sn.prototype.delete = Sh, sn.prototype.get = Eh, sn.prototype.has = Rh, sn.prototype.set = Ah;
      function Vn(e) {
        var t = -1, o = e == null ? 0 : e.length;
        for (this.__data__ = new sn(); ++t < o; )
          this.add(e[t]);
      }
      function Th(e) {
        return this.__data__.set(e, g), this;
      }
      function Ph(e) {
        return this.__data__.has(e);
      }
      Vn.prototype.add = Vn.prototype.push = Th, Vn.prototype.has = Ph;
      function $t(e) {
        var t = this.__data__ = new on(e);
        this.size = t.size;
      }
      function Oh() {
        this.__data__ = new on(), this.size = 0;
      }
      function Ih(e) {
        var t = this.__data__, o = t.delete(e);
        return this.size = t.size, o;
      }
      function Nh(e) {
        return this.__data__.get(e);
      }
      function Lh(e) {
        return this.__data__.has(e);
      }
      function Mh(e, t) {
        var o = this.__data__;
        if (o instanceof on) {
          var a = o.__data__;
          if (!zr || a.length < c - 1)
            return a.push([e, t]), this.size = ++o.size, this;
          o = this.__data__ = new sn(a);
        }
        return o.set(e, t), this.size = o.size, this;
      }
      $t.prototype.clear = Oh, $t.prototype.delete = Ih, $t.prototype.get = Nh, $t.prototype.has = Lh, $t.prototype.set = Mh;
      function Uc(e, t) {
        var o = ae(e), a = !o && Zn(e), l = !o && !a && On(e), h = !o && !a && !l && mr(e), x = o || a || l || h, C = x ? us(e.length, zp) : [], T = C.length;
        for (var k in e)
          (t || Ie.call(e, k)) && !(x && // Safari 9 has enumerable `arguments.length` in strict mode.
          (k == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          l && (k == "offset" || k == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          h && (k == "buffer" || k == "byteLength" || k == "byteOffset") || // Skip index properties.
          un(k, T))) && C.push(k);
        return C;
      }
      function $c(e) {
        var t = e.length;
        return t ? e[As(0, t - 1)] : r;
      }
      function Dh(e, t) {
        return ni(gt(e), Kn(t, 0, e.length));
      }
      function kh(e) {
        return ni(gt(e));
      }
      function ms(e, t, o) {
        (o !== r && !Ht(e[t], o) || o === r && !(t in e)) && an(e, t, o);
      }
      function Yr(e, t, o) {
        var a = e[t];
        (!(Ie.call(e, t) && Ht(a, o)) || o === r && !(t in e)) && an(e, t, o);
      }
      function Ho(e, t) {
        for (var o = e.length; o--; )
          if (Ht(e[o][0], t))
            return o;
        return -1;
      }
      function Fh(e, t, o, a) {
        return Rn(e, function(l, h, x) {
          t(a, l, o(l), x);
        }), a;
      }
      function Hc(e, t) {
        return e && Zt(t, Qe(t), e);
      }
      function Wh(e, t) {
        return e && Zt(t, mt(t), e);
      }
      function an(e, t, o) {
        t == "__proto__" && Fo ? Fo(e, t, {
          configurable: !0,
          enumerable: !0,
          value: o,
          writable: !0
        }) : e[t] = o;
      }
      function xs(e, t) {
        for (var o = -1, a = t.length, l = L(a), h = e == null; ++o < a; )
          l[o] = h ? r : Js(e, t[o]);
        return l;
      }
      function Kn(e, t, o) {
        return e === e && (o !== r && (e = e <= o ? e : o), t !== r && (e = e >= t ? e : t)), e;
      }
      function Dt(e, t, o, a, l, h) {
        var x, C = t & _, T = t & R, k = t & E;
        if (o && (x = l ? o(e, a, l, h) : o(e)), x !== r)
          return x;
        if (!$e(e))
          return e;
        var F = ae(e);
        if (F) {
          if (x = Rg(e), !C)
            return gt(e, x);
        } else {
          var W = lt(e), H = W == xe || W == Ze;
          if (On(e))
            return pl(e, C);
          if (W == Je || W == ut || H && !l) {
            if (x = T || H ? {} : Nl(e), !C)
              return T ? gg(e, Wh(x, e)) : hg(e, Hc(x, e));
          } else {
            if (!Me[W])
              return l ? e : {};
            x = Ag(e, W, C);
          }
        }
        h || (h = new $t());
        var K = h.get(e);
        if (K)
          return K;
        h.set(e, x), au(e) ? e.forEach(function(Q) {
          x.add(Dt(Q, t, o, Q, e, h));
        }) : iu(e) && e.forEach(function(Q, ge) {
          x.set(ge, Dt(Q, t, o, ge, e, h));
        });
        var J = k ? T ? Ws : Fs : T ? mt : Qe, fe = F ? r : J(e);
        return Nt(fe || e, function(Q, ge) {
          fe && (ge = Q, Q = e[ge]), Yr(x, ge, Dt(Q, t, o, ge, e, h));
        }), x;
      }
      function Bh(e) {
        var t = Qe(e);
        return function(o) {
          return zc(o, e, t);
        };
      }
      function zc(e, t, o) {
        var a = o.length;
        if (e == null)
          return !a;
        for (e = Ne(e); a--; ) {
          var l = o[a], h = t[l], x = e[l];
          if (x === r && !(l in e) || !h(x))
            return !1;
        }
        return !0;
      }
      function Gc(e, t, o) {
        if (typeof e != "function")
          throw new Lt(f);
        return to(function() {
          e.apply(r, o);
        }, t);
      }
      function qr(e, t, o, a) {
        var l = -1, h = Ro, x = !0, C = e.length, T = [], k = t.length;
        if (!C)
          return T;
        o && (t = je(t, _t(o))), a ? (h = os, x = !1) : t.length >= c && (h = $r, x = !1, t = new Vn(t));
        e:
          for (; ++l < C; ) {
            var F = e[l], W = o == null ? F : o(F);
            if (F = a || F !== 0 ? F : 0, x && W === W) {
              for (var H = k; H--; )
                if (t[H] === W)
                  continue e;
              T.push(F);
            } else
              h(t, W, a) || T.push(F);
          }
        return T;
      }
      var Rn = xl(Xt), Vc = xl(ys, !0);
      function jh(e, t) {
        var o = !0;
        return Rn(e, function(a, l, h) {
          return o = !!t(a, l, h), o;
        }), o;
      }
      function zo(e, t, o) {
        for (var a = -1, l = e.length; ++a < l; ) {
          var h = e[a], x = t(h);
          if (x != null && (C === r ? x === x && !St(x) : o(x, C)))
            var C = x, T = h;
        }
        return T;
      }
      function Uh(e, t, o, a) {
        var l = e.length;
        for (o = ce(o), o < 0 && (o = -o > l ? 0 : l + o), a = a === r || a > l ? l : ce(a), a < 0 && (a += l), a = o > a ? 0 : lu(a); o < a; )
          e[o++] = t;
        return e;
      }
      function Kc(e, t) {
        var o = [];
        return Rn(e, function(a, l, h) {
          t(a, l, h) && o.push(a);
        }), o;
      }
      function rt(e, t, o, a, l) {
        var h = -1, x = e.length;
        for (o || (o = Pg), l || (l = []); ++h < x; ) {
          var C = e[h];
          t > 0 && o(C) ? t > 1 ? rt(C, t - 1, o, a, l) : Cn(l, C) : a || (l[l.length] = C);
        }
        return l;
      }
      var ws = wl(), Yc = wl(!0);
      function Xt(e, t) {
        return e && ws(e, t, Qe);
      }
      function ys(e, t) {
        return e && Yc(e, t, Qe);
      }
      function Go(e, t) {
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
      function qc(e, t, o) {
        var a = t(e);
        return ae(e) ? a : Cn(a, o(e));
      }
      function ft(e) {
        return e == null ? e === r ? $i : wt : zn && zn in Ne(e) ? Cg(e) : kg(e);
      }
      function bs(e, t) {
        return e > t;
      }
      function $h(e, t) {
        return e != null && Ie.call(e, t);
      }
      function Hh(e, t) {
        return e != null && t in Ne(e);
      }
      function zh(e, t, o) {
        return e >= ct(t, o) && e < Xe(t, o);
      }
      function _s(e, t, o) {
        for (var a = o ? os : Ro, l = e[0].length, h = e.length, x = h, C = L(h), T = 1 / 0, k = []; x--; ) {
          var F = e[x];
          x && t && (F = je(F, _t(t))), T = ct(F.length, T), C[x] = !o && (t || l >= 120 && F.length >= 120) ? new Vn(x && F) : r;
        }
        F = e[0];
        var W = -1, H = C[0];
        e:
          for (; ++W < l && k.length < T; ) {
            var K = F[W], J = t ? t(K) : K;
            if (K = o || K !== 0 ? K : 0, !(H ? $r(H, J) : a(k, J, o))) {
              for (x = h; --x; ) {
                var fe = C[x];
                if (!(fe ? $r(fe, J) : a(e[x], J, o)))
                  continue e;
              }
              H && H.push(J), k.push(K);
            }
          }
        return k;
      }
      function Gh(e, t, o, a) {
        return Xt(e, function(l, h, x) {
          t(a, o(l), h, x);
        }), a;
      }
      function Xr(e, t, o) {
        t = Tn(t, e), e = kl(e, t);
        var a = e == null ? e : e[Jt(Ft(t))];
        return a == null ? r : bt(a, e, o);
      }
      function Xc(e) {
        return ze(e) && ft(e) == ut;
      }
      function Vh(e) {
        return ze(e) && ft(e) == jt;
      }
      function Kh(e) {
        return ze(e) && ft(e) == Le;
      }
      function Zr(e, t, o, a, l) {
        return e === t ? !0 : e == null || t == null || !ze(e) && !ze(t) ? e !== e && t !== t : Yh(e, t, o, a, Zr, l);
      }
      function Yh(e, t, o, a, l, h) {
        var x = ae(e), C = ae(t), T = x ? it : lt(e), k = C ? it : lt(t);
        T = T == ut ? Je : T, k = k == ut ? Je : k;
        var F = T == Je, W = k == Je, H = T == k;
        if (H && On(e)) {
          if (!On(t))
            return !1;
          x = !0, F = !1;
        }
        if (H && !F)
          return h || (h = new $t()), x || mr(e) ? Pl(e, t, o, a, l, h) : bg(e, t, T, o, a, l, h);
        if (!(o & O)) {
          var K = F && Ie.call(e, "__wrapped__"), J = W && Ie.call(t, "__wrapped__");
          if (K || J) {
            var fe = K ? e.value() : e, Q = J ? t.value() : t;
            return h || (h = new $t()), l(fe, Q, o, a, h);
          }
        }
        return H ? (h || (h = new $t()), _g(e, t, o, a, l, h)) : !1;
      }
      function qh(e) {
        return ze(e) && lt(e) == Be;
      }
      function Cs(e, t, o, a) {
        var l = o.length, h = l, x = !a;
        if (e == null)
          return !h;
        for (e = Ne(e); l--; ) {
          var C = o[l];
          if (x && C[2] ? C[1] !== e[C[0]] : !(C[0] in e))
            return !1;
        }
        for (; ++l < h; ) {
          C = o[l];
          var T = C[0], k = e[T], F = C[1];
          if (x && C[2]) {
            if (k === r && !(T in e))
              return !1;
          } else {
            var W = new $t();
            if (a)
              var H = a(k, F, T, e, t, W);
            if (!(H === r ? Zr(F, k, O | y, a, W) : H))
              return !1;
          }
        }
        return !0;
      }
      function Zc(e) {
        if (!$e(e) || Ig(e))
          return !1;
        var t = fn(e) ? qp : pe;
        return t.test(Xn(e));
      }
      function Xh(e) {
        return ze(e) && ft(e) == Un;
      }
      function Zh(e) {
        return ze(e) && lt(e) == yt;
      }
      function Jh(e) {
        return ze(e) && ci(e.length) && !!Fe[ft(e)];
      }
      function Jc(e) {
        return typeof e == "function" ? e : e == null ? xt : typeof e == "object" ? ae(e) ? tl(e[0], e[1]) : el(e) : yu(e);
      }
      function Ss(e) {
        if (!eo(e))
          return th(e);
        var t = [];
        for (var o in Ne(e))
          Ie.call(e, o) && o != "constructor" && t.push(o);
        return t;
      }
      function Qh(e) {
        if (!$e(e))
          return Dg(e);
        var t = eo(e), o = [];
        for (var a in e)
          a == "constructor" && (t || !Ie.call(e, a)) || o.push(a);
        return o;
      }
      function Es(e, t) {
        return e < t;
      }
      function Qc(e, t) {
        var o = -1, a = vt(e) ? L(e.length) : [];
        return Rn(e, function(l, h, x) {
          a[++o] = t(l, h, x);
        }), a;
      }
      function el(e) {
        var t = js(e);
        return t.length == 1 && t[0][2] ? Ml(t[0][0], t[0][1]) : function(o) {
          return o === e || Cs(o, e, t);
        };
      }
      function tl(e, t) {
        return $s(e) && Ll(t) ? Ml(Jt(e), t) : function(o) {
          var a = Js(o, e);
          return a === r && a === t ? Qs(o, e) : Zr(t, a, O | y);
        };
      }
      function Vo(e, t, o, a, l) {
        e !== t && ws(t, function(h, x) {
          if (l || (l = new $t()), $e(h))
            eg(e, t, x, o, Vo, a, l);
          else {
            var C = a ? a(zs(e, x), h, x + "", e, t, l) : r;
            C === r && (C = h), ms(e, x, C);
          }
        }, mt);
      }
      function eg(e, t, o, a, l, h, x) {
        var C = zs(e, o), T = zs(t, o), k = x.get(T);
        if (k) {
          ms(e, o, k);
          return;
        }
        var F = h ? h(C, T, o + "", e, t, x) : r, W = F === r;
        if (W) {
          var H = ae(T), K = !H && On(T), J = !H && !K && mr(T);
          F = T, H || K || J ? ae(C) ? F = C : Ge(C) ? F = gt(C) : K ? (W = !1, F = pl(T, !0)) : J ? (W = !1, F = hl(T, !0)) : F = [] : no(T) || Zn(T) ? (F = C, Zn(C) ? F = uu(C) : (!$e(C) || fn(C)) && (F = Nl(T))) : W = !1;
        }
        W && (x.set(T, F), l(F, T, a, h, x), x.delete(T)), ms(e, o, F);
      }
      function nl(e, t) {
        var o = e.length;
        if (o)
          return t += t < 0 ? o : 0, un(t, o) ? e[t] : r;
      }
      function rl(e, t, o) {
        t.length ? t = je(t, function(h) {
          return ae(h) ? function(x) {
            return Yn(x, h.length === 1 ? h[0] : h);
          } : h;
        }) : t = [xt];
        var a = -1;
        t = je(t, _t(X()));
        var l = Qc(e, function(h, x, C) {
          var T = je(t, function(k) {
            return k(h);
          });
          return { criteria: T, index: ++a, value: h };
        });
        return Ap(l, function(h, x) {
          return pg(h, x, o);
        });
      }
      function tg(e, t) {
        return ol(e, t, function(o, a) {
          return Qs(e, a);
        });
      }
      function ol(e, t, o) {
        for (var a = -1, l = t.length, h = {}; ++a < l; ) {
          var x = t[a], C = Yn(e, x);
          o(C, x) && Jr(h, Tn(x, e), C);
        }
        return h;
      }
      function ng(e) {
        return function(t) {
          return Yn(t, e);
        };
      }
      function Rs(e, t, o, a) {
        var l = a ? Rp : sr, h = -1, x = t.length, C = e;
        for (e === t && (t = gt(t)), o && (C = je(e, _t(o))); ++h < x; )
          for (var T = 0, k = t[h], F = o ? o(k) : k; (T = l(C, F, T, a)) > -1; )
            C !== e && ko.call(C, T, 1), ko.call(e, T, 1);
        return e;
      }
      function il(e, t) {
        for (var o = e ? t.length : 0, a = o - 1; o--; ) {
          var l = t[o];
          if (o == a || l !== h) {
            var h = l;
            un(l) ? ko.call(e, l, 1) : Os(e, l);
          }
        }
        return e;
      }
      function As(e, t) {
        return e + Bo(Bc() * (t - e + 1));
      }
      function rg(e, t, o, a) {
        for (var l = -1, h = Xe(Wo((t - e) / (o || 1)), 0), x = L(h); h--; )
          x[a ? h : ++l] = e, e += o;
        return x;
      }
      function Ts(e, t) {
        var o = "";
        if (!e || t < 1 || t > Y)
          return o;
        do
          t % 2 && (o += e), t = Bo(t / 2), t && (e += e);
        while (t);
        return o;
      }
      function de(e, t) {
        return Gs(Dl(e, t, xt), e + "");
      }
      function og(e) {
        return $c(xr(e));
      }
      function ig(e, t) {
        var o = xr(e);
        return ni(o, Kn(t, 0, o.length));
      }
      function Jr(e, t, o, a) {
        if (!$e(e))
          return e;
        t = Tn(t, e);
        for (var l = -1, h = t.length, x = h - 1, C = e; C != null && ++l < h; ) {
          var T = Jt(t[l]), k = o;
          if (T === "__proto__" || T === "constructor" || T === "prototype")
            return e;
          if (l != x) {
            var F = C[T];
            k = a ? a(F, T, C) : r, k === r && (k = $e(F) ? F : un(t[l + 1]) ? [] : {});
          }
          Yr(C, T, k), C = C[T];
        }
        return e;
      }
      var sl = jo ? function(e, t) {
        return jo.set(e, t), e;
      } : xt, sg = Fo ? function(e, t) {
        return Fo(e, "toString", {
          configurable: !0,
          enumerable: !1,
          value: ta(t),
          writable: !0
        });
      } : xt;
      function ag(e) {
        return ni(xr(e));
      }
      function kt(e, t, o) {
        var a = -1, l = e.length;
        t < 0 && (t = -t > l ? 0 : l + t), o = o > l ? l : o, o < 0 && (o += l), l = t > o ? 0 : o - t >>> 0, t >>>= 0;
        for (var h = L(l); ++a < l; )
          h[a] = e[a + t];
        return h;
      }
      function cg(e, t) {
        var o;
        return Rn(e, function(a, l, h) {
          return o = t(a, l, h), !o;
        }), !!o;
      }
      function Ko(e, t, o) {
        var a = 0, l = e == null ? a : e.length;
        if (typeof t == "number" && t === t && l <= qt) {
          for (; a < l; ) {
            var h = a + l >>> 1, x = e[h];
            x !== null && !St(x) && (o ? x <= t : x < t) ? a = h + 1 : l = h;
          }
          return l;
        }
        return Ps(e, t, xt, o);
      }
      function Ps(e, t, o, a) {
        var l = 0, h = e == null ? 0 : e.length;
        if (h === 0)
          return 0;
        t = o(t);
        for (var x = t !== t, C = t === null, T = St(t), k = t === r; l < h; ) {
          var F = Bo((l + h) / 2), W = o(e[F]), H = W !== r, K = W === null, J = W === W, fe = St(W);
          if (x)
            var Q = a || J;
          else
            k ? Q = J && (a || H) : C ? Q = J && H && (a || !K) : T ? Q = J && H && !K && (a || !fe) : K || fe ? Q = !1 : Q = a ? W <= t : W < t;
          Q ? l = F + 1 : h = F;
        }
        return ct(h, Yt);
      }
      function al(e, t) {
        for (var o = -1, a = e.length, l = 0, h = []; ++o < a; ) {
          var x = e[o], C = t ? t(x) : x;
          if (!o || !Ht(C, T)) {
            var T = C;
            h[l++] = x === 0 ? 0 : x;
          }
        }
        return h;
      }
      function cl(e) {
        return typeof e == "number" ? e : St(e) ? ke : +e;
      }
      function Ct(e) {
        if (typeof e == "string")
          return e;
        if (ae(e))
          return je(e, Ct) + "";
        if (St(e))
          return jc ? jc.call(e) : "";
        var t = e + "";
        return t == "0" && 1 / e == -se ? "-0" : t;
      }
      function An(e, t, o) {
        var a = -1, l = Ro, h = e.length, x = !0, C = [], T = C;
        if (o)
          x = !1, l = os;
        else if (h >= c) {
          var k = t ? null : wg(e);
          if (k)
            return To(k);
          x = !1, l = $r, T = new Vn();
        } else
          T = t ? [] : C;
        e:
          for (; ++a < h; ) {
            var F = e[a], W = t ? t(F) : F;
            if (F = o || F !== 0 ? F : 0, x && W === W) {
              for (var H = T.length; H--; )
                if (T[H] === W)
                  continue e;
              t && T.push(W), C.push(F);
            } else
              l(T, W, o) || (T !== C && T.push(W), C.push(F));
          }
        return C;
      }
      function Os(e, t) {
        return t = Tn(t, e), e = kl(e, t), e == null || delete e[Jt(Ft(t))];
      }
      function ll(e, t, o, a) {
        return Jr(e, t, o(Yn(e, t)), a);
      }
      function Yo(e, t, o, a) {
        for (var l = e.length, h = a ? l : -1; (a ? h-- : ++h < l) && t(e[h], h, e); )
          ;
        return o ? kt(e, a ? 0 : h, a ? h + 1 : l) : kt(e, a ? h + 1 : 0, a ? l : h);
      }
      function ul(e, t) {
        var o = e;
        return o instanceof ye && (o = o.value()), is(t, function(a, l) {
          return l.func.apply(l.thisArg, Cn([a], l.args));
        }, o);
      }
      function Is(e, t, o) {
        var a = e.length;
        if (a < 2)
          return a ? An(e[0]) : [];
        for (var l = -1, h = L(a); ++l < a; )
          for (var x = e[l], C = -1; ++C < a; )
            C != l && (h[l] = qr(h[l] || x, e[C], t, o));
        return An(rt(h, 1), t, o);
      }
      function fl(e, t, o) {
        for (var a = -1, l = e.length, h = t.length, x = {}; ++a < l; ) {
          var C = a < h ? t[a] : r;
          o(x, e[a], C);
        }
        return x;
      }
      function Ns(e) {
        return Ge(e) ? e : [];
      }
      function Ls(e) {
        return typeof e == "function" ? e : xt;
      }
      function Tn(e, t) {
        return ae(e) ? e : $s(e, t) ? [e] : jl(Pe(e));
      }
      var lg = de;
      function Pn(e, t, o) {
        var a = e.length;
        return o = o === r ? a : o, !t && o >= a ? e : kt(e, t, o);
      }
      var dl = Xp || function(e) {
        return nt.clearTimeout(e);
      };
      function pl(e, t) {
        if (t)
          return e.slice();
        var o = e.length, a = Mc ? Mc(o) : new e.constructor(o);
        return e.copy(a), a;
      }
      function Ms(e) {
        var t = new e.constructor(e.byteLength);
        return new Mo(t).set(new Mo(e)), t;
      }
      function ug(e, t) {
        var o = t ? Ms(e.buffer) : e.buffer;
        return new e.constructor(o, e.byteOffset, e.byteLength);
      }
      function fg(e) {
        var t = new e.constructor(e.source, Ae.exec(e));
        return t.lastIndex = e.lastIndex, t;
      }
      function dg(e) {
        return Kr ? Ne(Kr.call(e)) : {};
      }
      function hl(e, t) {
        var o = t ? Ms(e.buffer) : e.buffer;
        return new e.constructor(o, e.byteOffset, e.length);
      }
      function gl(e, t) {
        if (e !== t) {
          var o = e !== r, a = e === null, l = e === e, h = St(e), x = t !== r, C = t === null, T = t === t, k = St(t);
          if (!C && !k && !h && e > t || h && x && T && !C && !k || a && x && T || !o && T || !l)
            return 1;
          if (!a && !h && !k && e < t || k && o && l && !a && !h || C && o && l || !x && l || !T)
            return -1;
        }
        return 0;
      }
      function pg(e, t, o) {
        for (var a = -1, l = e.criteria, h = t.criteria, x = l.length, C = o.length; ++a < x; ) {
          var T = gl(l[a], h[a]);
          if (T) {
            if (a >= C)
              return T;
            var k = o[a];
            return T * (k == "desc" ? -1 : 1);
          }
        }
        return e.index - t.index;
      }
      function vl(e, t, o, a) {
        for (var l = -1, h = e.length, x = o.length, C = -1, T = t.length, k = Xe(h - x, 0), F = L(T + k), W = !a; ++C < T; )
          F[C] = t[C];
        for (; ++l < x; )
          (W || l < h) && (F[o[l]] = e[l]);
        for (; k--; )
          F[C++] = e[l++];
        return F;
      }
      function ml(e, t, o, a) {
        for (var l = -1, h = e.length, x = -1, C = o.length, T = -1, k = t.length, F = Xe(h - C, 0), W = L(F + k), H = !a; ++l < F; )
          W[l] = e[l];
        for (var K = l; ++T < k; )
          W[K + T] = t[T];
        for (; ++x < C; )
          (H || l < h) && (W[K + o[x]] = e[l++]);
        return W;
      }
      function gt(e, t) {
        var o = -1, a = e.length;
        for (t || (t = L(a)); ++o < a; )
          t[o] = e[o];
        return t;
      }
      function Zt(e, t, o, a) {
        var l = !o;
        o || (o = {});
        for (var h = -1, x = t.length; ++h < x; ) {
          var C = t[h], T = a ? a(o[C], e[C], C, o, e) : r;
          T === r && (T = e[C]), l ? an(o, C, T) : Yr(o, C, T);
        }
        return o;
      }
      function hg(e, t) {
        return Zt(e, Us(e), t);
      }
      function gg(e, t) {
        return Zt(e, Ol(e), t);
      }
      function qo(e, t) {
        return function(o, a) {
          var l = ae(o) ? yp : Fh, h = t ? t() : {};
          return l(o, e, X(a, 2), h);
        };
      }
      function hr(e) {
        return de(function(t, o) {
          var a = -1, l = o.length, h = l > 1 ? o[l - 1] : r, x = l > 2 ? o[2] : r;
          for (h = e.length > 3 && typeof h == "function" ? (l--, h) : r, x && dt(o[0], o[1], x) && (h = l < 3 ? r : h, l = 1), t = Ne(t); ++a < l; ) {
            var C = o[a];
            C && e(t, C, a, h);
          }
          return t;
        });
      }
      function xl(e, t) {
        return function(o, a) {
          if (o == null)
            return o;
          if (!vt(o))
            return e(o, a);
          for (var l = o.length, h = t ? l : -1, x = Ne(o); (t ? h-- : ++h < l) && a(x[h], h, x) !== !1; )
            ;
          return o;
        };
      }
      function wl(e) {
        return function(t, o, a) {
          for (var l = -1, h = Ne(t), x = a(t), C = x.length; C--; ) {
            var T = x[e ? C : ++l];
            if (o(h[T], T, h) === !1)
              break;
          }
          return t;
        };
      }
      function vg(e, t, o) {
        var a = t & S, l = Qr(e);
        function h() {
          var x = this && this !== nt && this instanceof h ? l : e;
          return x.apply(a ? o : this, arguments);
        }
        return h;
      }
      function yl(e) {
        return function(t) {
          t = Pe(t);
          var o = ar(t) ? Ut(t) : r, a = o ? o[0] : t.charAt(0), l = o ? Pn(o, 1).join("") : t.slice(1);
          return a[e]() + l;
        };
      }
      function gr(e) {
        return function(t) {
          return is(xu(mu(t).replace(sp, "")), e, "");
        };
      }
      function Qr(e) {
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
          return $e(a) ? a : o;
        };
      }
      function mg(e, t, o) {
        var a = Qr(e);
        function l() {
          for (var h = arguments.length, x = L(h), C = h, T = vr(l); C--; )
            x[C] = arguments[C];
          var k = h < 3 && x[0] !== T && x[h - 1] !== T ? [] : Sn(x, T);
          if (h -= k.length, h < o)
            return El(
              e,
              t,
              Xo,
              l.placeholder,
              r,
              x,
              k,
              r,
              r,
              o - h
            );
          var F = this && this !== nt && this instanceof l ? a : e;
          return bt(F, this, x);
        }
        return l;
      }
      function bl(e) {
        return function(t, o, a) {
          var l = Ne(t);
          if (!vt(t)) {
            var h = X(o, 3);
            t = Qe(t), o = function(C) {
              return h(l[C], C, l);
            };
          }
          var x = e(t, o, a);
          return x > -1 ? l[h ? t[x] : x] : r;
        };
      }
      function _l(e) {
        return ln(function(t) {
          var o = t.length, a = o, l = Mt.prototype.thru;
          for (e && t.reverse(); a--; ) {
            var h = t[a];
            if (typeof h != "function")
              throw new Lt(f);
            if (l && !x && ei(h) == "wrapper")
              var x = new Mt([], !0);
          }
          for (a = x ? a : o; ++a < o; ) {
            h = t[a];
            var C = ei(h), T = C == "wrapper" ? Bs(h) : r;
            T && Hs(T[0]) && T[1] == ($ | M | U | ee) && !T[4].length && T[9] == 1 ? x = x[ei(T[0])].apply(x, T[3]) : x = h.length == 1 && Hs(h) ? x[C]() : x.thru(h);
          }
          return function() {
            var k = arguments, F = k[0];
            if (x && k.length == 1 && ae(F))
              return x.plant(F).value();
            for (var W = 0, H = o ? t[W].apply(this, k) : F; ++W < o; )
              H = t[W].call(this, H);
            return H;
          };
        });
      }
      function Xo(e, t, o, a, l, h, x, C, T, k) {
        var F = t & $, W = t & S, H = t & N, K = t & (M | B), J = t & ue, fe = H ? r : Qr(e);
        function Q() {
          for (var ge = arguments.length, _e = L(ge), Et = ge; Et--; )
            _e[Et] = arguments[Et];
          if (K)
            var pt = vr(Q), Rt = Pp(_e, pt);
          if (a && (_e = vl(_e, a, l, K)), h && (_e = ml(_e, h, x, K)), ge -= Rt, K && ge < k) {
            var Ve = Sn(_e, pt);
            return El(
              e,
              t,
              Xo,
              Q.placeholder,
              o,
              _e,
              Ve,
              C,
              T,
              k - ge
            );
          }
          var zt = W ? o : this, pn = H ? zt[e] : e;
          return ge = _e.length, C ? _e = Fg(_e, C) : J && ge > 1 && _e.reverse(), F && T < ge && (_e.length = T), this && this !== nt && this instanceof Q && (pn = fe || Qr(pn)), pn.apply(zt, _e);
        }
        return Q;
      }
      function Cl(e, t) {
        return function(o, a) {
          return Gh(o, e, t(a), {});
        };
      }
      function Zo(e, t) {
        return function(o, a) {
          var l;
          if (o === r && a === r)
            return t;
          if (o !== r && (l = o), a !== r) {
            if (l === r)
              return a;
            typeof o == "string" || typeof a == "string" ? (o = Ct(o), a = Ct(a)) : (o = cl(o), a = cl(a)), l = e(o, a);
          }
          return l;
        };
      }
      function Ds(e) {
        return ln(function(t) {
          return t = je(t, _t(X())), de(function(o) {
            var a = this;
            return e(t, function(l) {
              return bt(l, a, o);
            });
          });
        });
      }
      function Jo(e, t) {
        t = t === r ? " " : Ct(t);
        var o = t.length;
        if (o < 2)
          return o ? Ts(t, e) : t;
        var a = Ts(t, Wo(e / cr(t)));
        return ar(t) ? Pn(Ut(a), 0, e).join("") : a.slice(0, e);
      }
      function xg(e, t, o, a) {
        var l = t & S, h = Qr(e);
        function x() {
          for (var C = -1, T = arguments.length, k = -1, F = a.length, W = L(F + T), H = this && this !== nt && this instanceof x ? h : e; ++k < F; )
            W[k] = a[k];
          for (; T--; )
            W[k++] = arguments[++C];
          return bt(H, l ? o : this, W);
        }
        return x;
      }
      function Sl(e) {
        return function(t, o, a) {
          return a && typeof a != "number" && dt(t, o, a) && (o = a = r), t = dn(t), o === r ? (o = t, t = 0) : o = dn(o), a = a === r ? t < o ? 1 : -1 : dn(a), rg(t, o, a, e);
        };
      }
      function Qo(e) {
        return function(t, o) {
          return typeof t == "string" && typeof o == "string" || (t = Wt(t), o = Wt(o)), e(t, o);
        };
      }
      function El(e, t, o, a, l, h, x, C, T, k) {
        var F = t & M, W = F ? x : r, H = F ? r : x, K = F ? h : r, J = F ? r : h;
        t |= F ? U : V, t &= ~(F ? V : U), t & I || (t &= ~(S | N));
        var fe = [
          e,
          t,
          l,
          K,
          W,
          J,
          H,
          C,
          T,
          k
        ], Q = o.apply(r, fe);
        return Hs(e) && Fl(Q, fe), Q.placeholder = a, Wl(Q, e, t);
      }
      function ks(e) {
        var t = qe[e];
        return function(o, a) {
          if (o = Wt(o), a = a == null ? 0 : ct(ce(a), 292), a && Wc(o)) {
            var l = (Pe(o) + "e").split("e"), h = t(l[0] + "e" + (+l[1] + a));
            return l = (Pe(h) + "e").split("e"), +(l[0] + "e" + (+l[1] - a));
          }
          return t(o);
        };
      }
      var wg = fr && 1 / To(new fr([, -0]))[1] == se ? function(e) {
        return new fr(e);
      } : oa;
      function Rl(e) {
        return function(t) {
          var o = lt(t);
          return o == Be ? ds(t) : o == yt ? kp(t) : Tp(t, e(t));
        };
      }
      function cn(e, t, o, a, l, h, x, C) {
        var T = t & N;
        if (!T && typeof e != "function")
          throw new Lt(f);
        var k = a ? a.length : 0;
        if (k || (t &= ~(U | V), a = l = r), x = x === r ? x : Xe(ce(x), 0), C = C === r ? C : ce(C), k -= l ? l.length : 0, t & V) {
          var F = a, W = l;
          a = l = r;
        }
        var H = T ? r : Bs(e), K = [
          e,
          t,
          o,
          a,
          l,
          F,
          W,
          h,
          x,
          C
        ];
        if (H && Mg(K, H), e = K[0], t = K[1], o = K[2], a = K[3], l = K[4], C = K[9] = K[9] === r ? T ? 0 : e.length : Xe(K[9] - k, 0), !C && t & (M | B) && (t &= ~(M | B)), !t || t == S)
          var J = vg(e, t, o);
        else
          t == M || t == B ? J = mg(e, t, C) : (t == U || t == (S | U)) && !l.length ? J = xg(e, t, o, a) : J = Xo.apply(r, K);
        var fe = H ? sl : Fl;
        return Wl(fe(J, K), e, t);
      }
      function Al(e, t, o, a) {
        return e === r || Ht(e, ur[o]) && !Ie.call(a, o) ? t : e;
      }
      function Tl(e, t, o, a, l, h) {
        return $e(e) && $e(t) && (h.set(t, e), Vo(e, t, r, Tl, h), h.delete(t)), e;
      }
      function yg(e) {
        return no(e) ? r : e;
      }
      function Pl(e, t, o, a, l, h) {
        var x = o & O, C = e.length, T = t.length;
        if (C != T && !(x && T > C))
          return !1;
        var k = h.get(e), F = h.get(t);
        if (k && F)
          return k == t && F == e;
        var W = -1, H = !0, K = o & y ? new Vn() : r;
        for (h.set(e, t), h.set(t, e); ++W < C; ) {
          var J = e[W], fe = t[W];
          if (a)
            var Q = x ? a(fe, J, W, t, e, h) : a(J, fe, W, e, t, h);
          if (Q !== r) {
            if (Q)
              continue;
            H = !1;
            break;
          }
          if (K) {
            if (!ss(t, function(ge, _e) {
              if (!$r(K, _e) && (J === ge || l(J, ge, o, a, h)))
                return K.push(_e);
            })) {
              H = !1;
              break;
            }
          } else if (!(J === fe || l(J, fe, o, a, h))) {
            H = !1;
            break;
          }
        }
        return h.delete(e), h.delete(t), H;
      }
      function bg(e, t, o, a, l, h, x) {
        switch (o) {
          case yn:
            if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
              return !1;
            e = e.buffer, t = t.buffer;
          case jt:
            return !(e.byteLength != t.byteLength || !h(new Mo(e), new Mo(t)));
          case me:
          case Le:
          case st:
            return Ht(+e, +t);
          case be:
            return e.name == t.name && e.message == t.message;
          case Un:
          case nn:
            return e == t + "";
          case Be:
            var C = ds;
          case yt:
            var T = a & O;
            if (C || (C = To), e.size != t.size && !T)
              return !1;
            var k = x.get(e);
            if (k)
              return k == t;
            a |= y, x.set(e, t);
            var F = Pl(C(e), C(t), a, l, h, x);
            return x.delete(e), F;
          case er:
            if (Kr)
              return Kr.call(e) == Kr.call(t);
        }
        return !1;
      }
      function _g(e, t, o, a, l, h) {
        var x = o & O, C = Fs(e), T = C.length, k = Fs(t), F = k.length;
        if (T != F && !x)
          return !1;
        for (var W = T; W--; ) {
          var H = C[W];
          if (!(x ? H in t : Ie.call(t, H)))
            return !1;
        }
        var K = h.get(e), J = h.get(t);
        if (K && J)
          return K == t && J == e;
        var fe = !0;
        h.set(e, t), h.set(t, e);
        for (var Q = x; ++W < T; ) {
          H = C[W];
          var ge = e[H], _e = t[H];
          if (a)
            var Et = x ? a(_e, ge, H, t, e, h) : a(ge, _e, H, e, t, h);
          if (!(Et === r ? ge === _e || l(ge, _e, o, a, h) : Et)) {
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
      function ln(e) {
        return Gs(Dl(e, r, zl), e + "");
      }
      function Fs(e) {
        return qc(e, Qe, Us);
      }
      function Ws(e) {
        return qc(e, mt, Ol);
      }
      var Bs = jo ? function(e) {
        return jo.get(e);
      } : oa;
      function ei(e) {
        for (var t = e.name + "", o = dr[t], a = Ie.call(dr, t) ? o.length : 0; a--; ) {
          var l = o[a], h = l.func;
          if (h == null || h == e)
            return l.name;
        }
        return t;
      }
      function vr(e) {
        var t = Ie.call(p, "placeholder") ? p : e;
        return t.placeholder;
      }
      function X() {
        var e = p.iteratee || na;
        return e = e === na ? Jc : e, arguments.length ? e(arguments[0], arguments[1]) : e;
      }
      function ti(e, t) {
        var o = e.__data__;
        return Og(t) ? o[typeof t == "string" ? "string" : "hash"] : o.map;
      }
      function js(e) {
        for (var t = Qe(e), o = t.length; o--; ) {
          var a = t[o], l = e[a];
          t[o] = [a, l, Ll(l)];
        }
        return t;
      }
      function qn(e, t) {
        var o = Lp(e, t);
        return Zc(o) ? o : r;
      }
      function Cg(e) {
        var t = Ie.call(e, zn), o = e[zn];
        try {
          e[zn] = r;
          var a = !0;
        } catch {
        }
        var l = No.call(e);
        return a && (t ? e[zn] = o : delete e[zn]), l;
      }
      var Us = hs ? function(e) {
        return e == null ? [] : (e = Ne(e), _n(hs(e), function(t) {
          return kc.call(e, t);
        }));
      } : ia, Ol = hs ? function(e) {
        for (var t = []; e; )
          Cn(t, Us(e)), e = Do(e);
        return t;
      } : ia, lt = ft;
      (gs && lt(new gs(new ArrayBuffer(1))) != yn || zr && lt(new zr()) != Be || vs && lt(vs.resolve()) != jn || fr && lt(new fr()) != yt || Gr && lt(new Gr()) != wn) && (lt = function(e) {
        var t = ft(e), o = t == Je ? e.constructor : r, a = o ? Xn(o) : "";
        if (a)
          switch (a) {
            case ih:
              return yn;
            case sh:
              return Be;
            case ah:
              return jn;
            case ch:
              return yt;
            case lh:
              return wn;
          }
        return t;
      });
      function Sg(e, t, o) {
        for (var a = -1, l = o.length; ++a < l; ) {
          var h = o[a], x = h.size;
          switch (h.type) {
            case "drop":
              e += x;
              break;
            case "dropRight":
              t -= x;
              break;
            case "take":
              t = ct(t, e + x);
              break;
            case "takeRight":
              e = Xe(e, t - x);
              break;
          }
        }
        return { start: e, end: t };
      }
      function Eg(e) {
        var t = e.match(Yi);
        return t ? t[1].split(qi) : [];
      }
      function Il(e, t, o) {
        t = Tn(t, e);
        for (var a = -1, l = t.length, h = !1; ++a < l; ) {
          var x = Jt(t[a]);
          if (!(h = e != null && o(e, x)))
            break;
          e = e[x];
        }
        return h || ++a != l ? h : (l = e == null ? 0 : e.length, !!l && ci(l) && un(x, l) && (ae(e) || Zn(e)));
      }
      function Rg(e) {
        var t = e.length, o = new e.constructor(t);
        return t && typeof e[0] == "string" && Ie.call(e, "index") && (o.index = e.index, o.input = e.input), o;
      }
      function Nl(e) {
        return typeof e.constructor == "function" && !eo(e) ? pr(Do(e)) : {};
      }
      function Ag(e, t, o) {
        var a = e.constructor;
        switch (t) {
          case jt:
            return Ms(e);
          case me:
          case Le:
            return new a(+e);
          case yn:
            return ug(e, o);
          case tr:
          case nr:
          case $n:
          case Nr:
          case Lr:
          case Mr:
          case Dr:
          case kr:
          case Fr:
            return hl(e, o);
          case Be:
            return new a();
          case st:
          case nn:
            return new a(e);
          case Un:
            return fg(e);
          case yt:
            return new a();
          case er:
            return dg(e);
        }
      }
      function Tg(e, t) {
        var o = t.length;
        if (!o)
          return e;
        var a = o - 1;
        return t[a] = (o > 1 ? "& " : "") + t[a], t = t.join(o > 2 ? ", " : " "), e.replace(Ki, `{
/* [wrapped with ` + t + `] */
`);
      }
      function Pg(e) {
        return ae(e) || Zn(e) || !!(Fc && e && e[Fc]);
      }
      function un(e, t) {
        var o = typeof e;
        return t = t ?? Y, !!t && (o == "number" || o != "symbol" && Ue.test(e)) && e > -1 && e % 1 == 0 && e < t;
      }
      function dt(e, t, o) {
        if (!$e(o))
          return !1;
        var a = typeof t;
        return (a == "number" ? vt(o) && un(t, o.length) : a == "string" && t in o) ? Ht(o[t], e) : !1;
      }
      function $s(e, t) {
        if (ae(e))
          return !1;
        var o = typeof e;
        return o == "number" || o == "symbol" || o == "boolean" || e == null || St(e) ? !0 : _o.test(e) || !bo.test(e) || t != null && e in Ne(t);
      }
      function Og(e) {
        var t = typeof e;
        return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
      }
      function Hs(e) {
        var t = ei(e), o = p[t];
        if (typeof o != "function" || !(t in ye.prototype))
          return !1;
        if (e === o)
          return !0;
        var a = Bs(o);
        return !!a && e === a[0];
      }
      function Ig(e) {
        return !!Lc && Lc in e;
      }
      var Ng = Oo ? fn : sa;
      function eo(e) {
        var t = e && e.constructor, o = typeof t == "function" && t.prototype || ur;
        return e === o;
      }
      function Ll(e) {
        return e === e && !$e(e);
      }
      function Ml(e, t) {
        return function(o) {
          return o == null ? !1 : o[e] === t && (t !== r || e in Ne(o));
        };
      }
      function Lg(e) {
        var t = si(e, function(a) {
          return o.size === m && o.clear(), a;
        }), o = t.cache;
        return t;
      }
      function Mg(e, t) {
        var o = e[1], a = t[1], l = o | a, h = l < (S | N | $), x = a == $ && o == M || a == $ && o == ee && e[7].length <= t[8] || a == ($ | ee) && t[7].length <= t[8] && o == M;
        if (!(h || x))
          return e;
        a & S && (e[2] = t[2], l |= o & S ? 0 : I);
        var C = t[3];
        if (C) {
          var T = e[3];
          e[3] = T ? vl(T, C, t[4]) : C, e[4] = T ? Sn(e[3], w) : t[4];
        }
        return C = t[5], C && (T = e[5], e[5] = T ? ml(T, C, t[6]) : C, e[6] = T ? Sn(e[5], w) : t[6]), C = t[7], C && (e[7] = C), a & $ && (e[8] = e[8] == null ? t[8] : ct(e[8], t[8])), e[9] == null && (e[9] = t[9]), e[0] = t[0], e[1] = l, e;
      }
      function Dg(e) {
        var t = [];
        if (e != null)
          for (var o in Ne(e))
            t.push(o);
        return t;
      }
      function kg(e) {
        return No.call(e);
      }
      function Dl(e, t, o) {
        return t = Xe(t === r ? e.length - 1 : t, 0), function() {
          for (var a = arguments, l = -1, h = Xe(a.length - t, 0), x = L(h); ++l < h; )
            x[l] = a[t + l];
          l = -1;
          for (var C = L(t + 1); ++l < t; )
            C[l] = a[l];
          return C[t] = o(x), bt(e, this, C);
        };
      }
      function kl(e, t) {
        return t.length < 2 ? e : Yn(e, kt(t, 0, -1));
      }
      function Fg(e, t) {
        for (var o = e.length, a = ct(t.length, o), l = gt(e); a--; ) {
          var h = t[a];
          e[a] = un(h, o) ? l[h] : r;
        }
        return e;
      }
      function zs(e, t) {
        if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
          return e[t];
      }
      var Fl = Bl(sl), to = Jp || function(e, t) {
        return nt.setTimeout(e, t);
      }, Gs = Bl(sg);
      function Wl(e, t, o) {
        var a = t + "";
        return Gs(e, Tg(a, Wg(Eg(a), o)));
      }
      function Bl(e) {
        var t = 0, o = 0;
        return function() {
          var a = nh(), l = re - (a - o);
          if (o = a, l > 0) {
            if (++t >= q)
              return arguments[0];
          } else
            t = 0;
          return e.apply(r, arguments);
        };
      }
      function ni(e, t) {
        var o = -1, a = e.length, l = a - 1;
        for (t = t === r ? a : t; ++o < t; ) {
          var h = As(o, l), x = e[h];
          e[h] = e[o], e[o] = x;
        }
        return e.length = t, e;
      }
      var jl = Lg(function(e) {
        var t = [];
        return e.charCodeAt(0) === 46 && t.push(""), e.replace(Gi, function(o, a, l, h) {
          t.push(l ? h.replace(z, "$1") : a || o);
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
            return Io.call(e);
          } catch {
          }
          try {
            return e + "";
          } catch {
          }
        }
        return "";
      }
      function Wg(e, t) {
        return Nt(Pt, function(o) {
          var a = "_." + o[0];
          t & o[1] && !Ro(e, a) && e.push(a);
        }), e.sort();
      }
      function Ul(e) {
        if (e instanceof ye)
          return e.clone();
        var t = new Mt(e.__wrapped__, e.__chain__);
        return t.__actions__ = gt(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t;
      }
      function Bg(e, t, o) {
        (o ? dt(e, t, o) : t === r) ? t = 1 : t = Xe(ce(t), 0);
        var a = e == null ? 0 : e.length;
        if (!a || t < 1)
          return [];
        for (var l = 0, h = 0, x = L(Wo(a / t)); l < a; )
          x[h++] = kt(e, l, l += t);
        return x;
      }
      function jg(e) {
        for (var t = -1, o = e == null ? 0 : e.length, a = 0, l = []; ++t < o; ) {
          var h = e[t];
          h && (l[a++] = h);
        }
        return l;
      }
      function Ug() {
        var e = arguments.length;
        if (!e)
          return [];
        for (var t = L(e - 1), o = arguments[0], a = e; a--; )
          t[a - 1] = arguments[a];
        return Cn(ae(o) ? gt(o) : [o], rt(t, 1));
      }
      var $g = de(function(e, t) {
        return Ge(e) ? qr(e, rt(t, 1, Ge, !0)) : [];
      }), Hg = de(function(e, t) {
        var o = Ft(t);
        return Ge(o) && (o = r), Ge(e) ? qr(e, rt(t, 1, Ge, !0), X(o, 2)) : [];
      }), zg = de(function(e, t) {
        var o = Ft(t);
        return Ge(o) && (o = r), Ge(e) ? qr(e, rt(t, 1, Ge, !0), r, o) : [];
      });
      function Gg(e, t, o) {
        var a = e == null ? 0 : e.length;
        return a ? (t = o || t === r ? 1 : ce(t), kt(e, t < 0 ? 0 : t, a)) : [];
      }
      function Vg(e, t, o) {
        var a = e == null ? 0 : e.length;
        return a ? (t = o || t === r ? 1 : ce(t), t = a - t, kt(e, 0, t < 0 ? 0 : t)) : [];
      }
      function Kg(e, t) {
        return e && e.length ? Yo(e, X(t, 3), !0, !0) : [];
      }
      function Yg(e, t) {
        return e && e.length ? Yo(e, X(t, 3), !0) : [];
      }
      function qg(e, t, o, a) {
        var l = e == null ? 0 : e.length;
        return l ? (o && typeof o != "number" && dt(e, t, o) && (o = 0, a = l), Uh(e, t, o, a)) : [];
      }
      function $l(e, t, o) {
        var a = e == null ? 0 : e.length;
        if (!a)
          return -1;
        var l = o == null ? 0 : ce(o);
        return l < 0 && (l = Xe(a + l, 0)), Ao(e, X(t, 3), l);
      }
      function Hl(e, t, o) {
        var a = e == null ? 0 : e.length;
        if (!a)
          return -1;
        var l = a - 1;
        return o !== r && (l = ce(o), l = o < 0 ? Xe(a + l, 0) : ct(l, a - 1)), Ao(e, X(t, 3), l, !0);
      }
      function zl(e) {
        var t = e == null ? 0 : e.length;
        return t ? rt(e, 1) : [];
      }
      function Xg(e) {
        var t = e == null ? 0 : e.length;
        return t ? rt(e, se) : [];
      }
      function Zg(e, t) {
        var o = e == null ? 0 : e.length;
        return o ? (t = t === r ? 1 : ce(t), rt(e, t)) : [];
      }
      function Jg(e) {
        for (var t = -1, o = e == null ? 0 : e.length, a = {}; ++t < o; ) {
          var l = e[t];
          a[l[0]] = l[1];
        }
        return a;
      }
      function Gl(e) {
        return e && e.length ? e[0] : r;
      }
      function Qg(e, t, o) {
        var a = e == null ? 0 : e.length;
        if (!a)
          return -1;
        var l = o == null ? 0 : ce(o);
        return l < 0 && (l = Xe(a + l, 0)), sr(e, t, l);
      }
      function ev(e) {
        var t = e == null ? 0 : e.length;
        return t ? kt(e, 0, -1) : [];
      }
      var tv = de(function(e) {
        var t = je(e, Ns);
        return t.length && t[0] === e[0] ? _s(t) : [];
      }), nv = de(function(e) {
        var t = Ft(e), o = je(e, Ns);
        return t === Ft(o) ? t = r : o.pop(), o.length && o[0] === e[0] ? _s(o, X(t, 2)) : [];
      }), rv = de(function(e) {
        var t = Ft(e), o = je(e, Ns);
        return t = typeof t == "function" ? t : r, t && o.pop(), o.length && o[0] === e[0] ? _s(o, r, t) : [];
      });
      function ov(e, t) {
        return e == null ? "" : eh.call(e, t);
      }
      function Ft(e) {
        var t = e == null ? 0 : e.length;
        return t ? e[t - 1] : r;
      }
      function iv(e, t, o) {
        var a = e == null ? 0 : e.length;
        if (!a)
          return -1;
        var l = a;
        return o !== r && (l = ce(o), l = l < 0 ? Xe(a + l, 0) : ct(l, a - 1)), t === t ? Wp(e, t, l) : Ao(e, Ec, l, !0);
      }
      function sv(e, t) {
        return e && e.length ? nl(e, ce(t)) : r;
      }
      var av = de(Vl);
      function Vl(e, t) {
        return e && e.length && t && t.length ? Rs(e, t) : e;
      }
      function cv(e, t, o) {
        return e && e.length && t && t.length ? Rs(e, t, X(o, 2)) : e;
      }
      function lv(e, t, o) {
        return e && e.length && t && t.length ? Rs(e, t, r, o) : e;
      }
      var uv = ln(function(e, t) {
        var o = e == null ? 0 : e.length, a = xs(e, t);
        return il(e, je(t, function(l) {
          return un(l, o) ? +l : l;
        }).sort(gl)), a;
      });
      function fv(e, t) {
        var o = [];
        if (!(e && e.length))
          return o;
        var a = -1, l = [], h = e.length;
        for (t = X(t, 3); ++a < h; ) {
          var x = e[a];
          t(x, a, e) && (o.push(x), l.push(a));
        }
        return il(e, l), o;
      }
      function Vs(e) {
        return e == null ? e : oh.call(e);
      }
      function dv(e, t, o) {
        var a = e == null ? 0 : e.length;
        return a ? (o && typeof o != "number" && dt(e, t, o) ? (t = 0, o = a) : (t = t == null ? 0 : ce(t), o = o === r ? a : ce(o)), kt(e, t, o)) : [];
      }
      function pv(e, t) {
        return Ko(e, t);
      }
      function hv(e, t, o) {
        return Ps(e, t, X(o, 2));
      }
      function gv(e, t) {
        var o = e == null ? 0 : e.length;
        if (o) {
          var a = Ko(e, t);
          if (a < o && Ht(e[a], t))
            return a;
        }
        return -1;
      }
      function vv(e, t) {
        return Ko(e, t, !0);
      }
      function mv(e, t, o) {
        return Ps(e, t, X(o, 2), !0);
      }
      function xv(e, t) {
        var o = e == null ? 0 : e.length;
        if (o) {
          var a = Ko(e, t, !0) - 1;
          if (Ht(e[a], t))
            return a;
        }
        return -1;
      }
      function wv(e) {
        return e && e.length ? al(e) : [];
      }
      function yv(e, t) {
        return e && e.length ? al(e, X(t, 2)) : [];
      }
      function bv(e) {
        var t = e == null ? 0 : e.length;
        return t ? kt(e, 1, t) : [];
      }
      function _v(e, t, o) {
        return e && e.length ? (t = o || t === r ? 1 : ce(t), kt(e, 0, t < 0 ? 0 : t)) : [];
      }
      function Cv(e, t, o) {
        var a = e == null ? 0 : e.length;
        return a ? (t = o || t === r ? 1 : ce(t), t = a - t, kt(e, t < 0 ? 0 : t, a)) : [];
      }
      function Sv(e, t) {
        return e && e.length ? Yo(e, X(t, 3), !1, !0) : [];
      }
      function Ev(e, t) {
        return e && e.length ? Yo(e, X(t, 3)) : [];
      }
      var Rv = de(function(e) {
        return An(rt(e, 1, Ge, !0));
      }), Av = de(function(e) {
        var t = Ft(e);
        return Ge(t) && (t = r), An(rt(e, 1, Ge, !0), X(t, 2));
      }), Tv = de(function(e) {
        var t = Ft(e);
        return t = typeof t == "function" ? t : r, An(rt(e, 1, Ge, !0), r, t);
      });
      function Pv(e) {
        return e && e.length ? An(e) : [];
      }
      function Ov(e, t) {
        return e && e.length ? An(e, X(t, 2)) : [];
      }
      function Iv(e, t) {
        return t = typeof t == "function" ? t : r, e && e.length ? An(e, r, t) : [];
      }
      function Ks(e) {
        if (!(e && e.length))
          return [];
        var t = 0;
        return e = _n(e, function(o) {
          if (Ge(o))
            return t = Xe(o.length, t), !0;
        }), us(t, function(o) {
          return je(e, as(o));
        });
      }
      function Kl(e, t) {
        if (!(e && e.length))
          return [];
        var o = Ks(e);
        return t == null ? o : je(o, function(a) {
          return bt(t, r, a);
        });
      }
      var Nv = de(function(e, t) {
        return Ge(e) ? qr(e, t) : [];
      }), Lv = de(function(e) {
        return Is(_n(e, Ge));
      }), Mv = de(function(e) {
        var t = Ft(e);
        return Ge(t) && (t = r), Is(_n(e, Ge), X(t, 2));
      }), Dv = de(function(e) {
        var t = Ft(e);
        return t = typeof t == "function" ? t : r, Is(_n(e, Ge), r, t);
      }), kv = de(Ks);
      function Fv(e, t) {
        return fl(e || [], t || [], Yr);
      }
      function Wv(e, t) {
        return fl(e || [], t || [], Jr);
      }
      var Bv = de(function(e) {
        var t = e.length, o = t > 1 ? e[t - 1] : r;
        return o = typeof o == "function" ? (e.pop(), o) : r, Kl(e, o);
      });
      function Yl(e) {
        var t = p(e);
        return t.__chain__ = !0, t;
      }
      function jv(e, t) {
        return t(e), e;
      }
      function ri(e, t) {
        return t(e);
      }
      var Uv = ln(function(e) {
        var t = e.length, o = t ? e[0] : 0, a = this.__wrapped__, l = function(h) {
          return xs(h, e);
        };
        return t > 1 || this.__actions__.length || !(a instanceof ye) || !un(o) ? this.thru(l) : (a = a.slice(o, +o + (t ? 1 : 0)), a.__actions__.push({
          func: ri,
          args: [l],
          thisArg: r
        }), new Mt(a, this.__chain__).thru(function(h) {
          return t && !h.length && h.push(r), h;
        }));
      });
      function $v() {
        return Yl(this);
      }
      function Hv() {
        return new Mt(this.value(), this.__chain__);
      }
      function zv() {
        this.__values__ === r && (this.__values__ = cu(this.value()));
        var e = this.__index__ >= this.__values__.length, t = e ? r : this.__values__[this.__index__++];
        return { done: e, value: t };
      }
      function Gv() {
        return this;
      }
      function Vv(e) {
        for (var t, o = this; o instanceof $o; ) {
          var a = Ul(o);
          a.__index__ = 0, a.__values__ = r, t ? l.__wrapped__ = a : t = a;
          var l = a;
          o = o.__wrapped__;
        }
        return l.__wrapped__ = e, t;
      }
      function Kv() {
        var e = this.__wrapped__;
        if (e instanceof ye) {
          var t = e;
          return this.__actions__.length && (t = new ye(this)), t = t.reverse(), t.__actions__.push({
            func: ri,
            args: [Vs],
            thisArg: r
          }), new Mt(t, this.__chain__);
        }
        return this.thru(Vs);
      }
      function Yv() {
        return ul(this.__wrapped__, this.__actions__);
      }
      var qv = qo(function(e, t, o) {
        Ie.call(e, o) ? ++e[o] : an(e, o, 1);
      });
      function Xv(e, t, o) {
        var a = ae(e) ? Cc : jh;
        return o && dt(e, t, o) && (t = r), a(e, X(t, 3));
      }
      function Zv(e, t) {
        var o = ae(e) ? _n : Kc;
        return o(e, X(t, 3));
      }
      var Jv = bl($l), Qv = bl(Hl);
      function em(e, t) {
        return rt(oi(e, t), 1);
      }
      function tm(e, t) {
        return rt(oi(e, t), se);
      }
      function nm(e, t, o) {
        return o = o === r ? 1 : ce(o), rt(oi(e, t), o);
      }
      function ql(e, t) {
        var o = ae(e) ? Nt : Rn;
        return o(e, X(t, 3));
      }
      function Xl(e, t) {
        var o = ae(e) ? bp : Vc;
        return o(e, X(t, 3));
      }
      var rm = qo(function(e, t, o) {
        Ie.call(e, o) ? e[o].push(t) : an(e, o, [t]);
      });
      function om(e, t, o, a) {
        e = vt(e) ? e : xr(e), o = o && !a ? ce(o) : 0;
        var l = e.length;
        return o < 0 && (o = Xe(l + o, 0)), li(e) ? o <= l && e.indexOf(t, o) > -1 : !!l && sr(e, t, o) > -1;
      }
      var im = de(function(e, t, o) {
        var a = -1, l = typeof t == "function", h = vt(e) ? L(e.length) : [];
        return Rn(e, function(x) {
          h[++a] = l ? bt(t, x, o) : Xr(x, t, o);
        }), h;
      }), sm = qo(function(e, t, o) {
        an(e, o, t);
      });
      function oi(e, t) {
        var o = ae(e) ? je : Qc;
        return o(e, X(t, 3));
      }
      function am(e, t, o, a) {
        return e == null ? [] : (ae(t) || (t = t == null ? [] : [t]), o = a ? r : o, ae(o) || (o = o == null ? [] : [o]), rl(e, t, o));
      }
      var cm = qo(function(e, t, o) {
        e[o ? 0 : 1].push(t);
      }, function() {
        return [[], []];
      });
      function lm(e, t, o) {
        var a = ae(e) ? is : Ac, l = arguments.length < 3;
        return a(e, X(t, 4), o, l, Rn);
      }
      function um(e, t, o) {
        var a = ae(e) ? _p : Ac, l = arguments.length < 3;
        return a(e, X(t, 4), o, l, Vc);
      }
      function fm(e, t) {
        var o = ae(e) ? _n : Kc;
        return o(e, ai(X(t, 3)));
      }
      function dm(e) {
        var t = ae(e) ? $c : og;
        return t(e);
      }
      function pm(e, t, o) {
        (o ? dt(e, t, o) : t === r) ? t = 1 : t = ce(t);
        var a = ae(e) ? Dh : ig;
        return a(e, t);
      }
      function hm(e) {
        var t = ae(e) ? kh : ag;
        return t(e);
      }
      function gm(e) {
        if (e == null)
          return 0;
        if (vt(e))
          return li(e) ? cr(e) : e.length;
        var t = lt(e);
        return t == Be || t == yt ? e.size : Ss(e).length;
      }
      function vm(e, t, o) {
        var a = ae(e) ? ss : cg;
        return o && dt(e, t, o) && (t = r), a(e, X(t, 3));
      }
      var mm = de(function(e, t) {
        if (e == null)
          return [];
        var o = t.length;
        return o > 1 && dt(e, t[0], t[1]) ? t = [] : o > 2 && dt(t[0], t[1], t[2]) && (t = [t[0]]), rl(e, rt(t, 1), []);
      }), ii = Zp || function() {
        return nt.Date.now();
      };
      function xm(e, t) {
        if (typeof t != "function")
          throw new Lt(f);
        return e = ce(e), function() {
          if (--e < 1)
            return t.apply(this, arguments);
        };
      }
      function Zl(e, t, o) {
        return t = o ? r : t, t = e && t == null ? e.length : t, cn(e, $, r, r, r, r, t);
      }
      function Jl(e, t) {
        var o;
        if (typeof t != "function")
          throw new Lt(f);
        return e = ce(e), function() {
          return --e > 0 && (o = t.apply(this, arguments)), e <= 1 && (t = r), o;
        };
      }
      var Ys = de(function(e, t, o) {
        var a = S;
        if (o.length) {
          var l = Sn(o, vr(Ys));
          a |= U;
        }
        return cn(e, a, t, o, l);
      }), Ql = de(function(e, t, o) {
        var a = S | N;
        if (o.length) {
          var l = Sn(o, vr(Ql));
          a |= U;
        }
        return cn(t, a, e, o, l);
      });
      function eu(e, t, o) {
        t = o ? r : t;
        var a = cn(e, M, r, r, r, r, r, t);
        return a.placeholder = eu.placeholder, a;
      }
      function tu(e, t, o) {
        t = o ? r : t;
        var a = cn(e, B, r, r, r, r, r, t);
        return a.placeholder = tu.placeholder, a;
      }
      function nu(e, t, o) {
        var a, l, h, x, C, T, k = 0, F = !1, W = !1, H = !0;
        if (typeof e != "function")
          throw new Lt(f);
        t = Wt(t) || 0, $e(o) && (F = !!o.leading, W = "maxWait" in o, h = W ? Xe(Wt(o.maxWait) || 0, t) : h, H = "trailing" in o ? !!o.trailing : H);
        function K(Ve) {
          var zt = a, pn = l;
          return a = l = r, k = Ve, x = e.apply(pn, zt), x;
        }
        function J(Ve) {
          return k = Ve, C = to(ge, t), F ? K(Ve) : x;
        }
        function fe(Ve) {
          var zt = Ve - T, pn = Ve - k, bu = t - zt;
          return W ? ct(bu, h - pn) : bu;
        }
        function Q(Ve) {
          var zt = Ve - T, pn = Ve - k;
          return T === r || zt >= t || zt < 0 || W && pn >= h;
        }
        function ge() {
          var Ve = ii();
          if (Q(Ve))
            return _e(Ve);
          C = to(ge, fe(Ve));
        }
        function _e(Ve) {
          return C = r, H && a ? K(Ve) : (a = l = r, x);
        }
        function Et() {
          C !== r && dl(C), k = 0, a = T = l = C = r;
        }
        function pt() {
          return C === r ? x : _e(ii());
        }
        function Rt() {
          var Ve = ii(), zt = Q(Ve);
          if (a = arguments, l = this, T = Ve, zt) {
            if (C === r)
              return J(T);
            if (W)
              return dl(C), C = to(ge, t), K(T);
          }
          return C === r && (C = to(ge, t)), x;
        }
        return Rt.cancel = Et, Rt.flush = pt, Rt;
      }
      var wm = de(function(e, t) {
        return Gc(e, 1, t);
      }), ym = de(function(e, t, o) {
        return Gc(e, Wt(t) || 0, o);
      });
      function bm(e) {
        return cn(e, ue);
      }
      function si(e, t) {
        if (typeof e != "function" || t != null && typeof t != "function")
          throw new Lt(f);
        var o = function() {
          var a = arguments, l = t ? t.apply(this, a) : a[0], h = o.cache;
          if (h.has(l))
            return h.get(l);
          var x = e.apply(this, a);
          return o.cache = h.set(l, x) || h, x;
        };
        return o.cache = new (si.Cache || sn)(), o;
      }
      si.Cache = sn;
      function ai(e) {
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
      function _m(e) {
        return Jl(2, e);
      }
      var Cm = lg(function(e, t) {
        t = t.length == 1 && ae(t[0]) ? je(t[0], _t(X())) : je(rt(t, 1), _t(X()));
        var o = t.length;
        return de(function(a) {
          for (var l = -1, h = ct(a.length, o); ++l < h; )
            a[l] = t[l].call(this, a[l]);
          return bt(e, this, a);
        });
      }), qs = de(function(e, t) {
        var o = Sn(t, vr(qs));
        return cn(e, U, r, t, o);
      }), ru = de(function(e, t) {
        var o = Sn(t, vr(ru));
        return cn(e, V, r, t, o);
      }), Sm = ln(function(e, t) {
        return cn(e, ee, r, r, r, t);
      });
      function Em(e, t) {
        if (typeof e != "function")
          throw new Lt(f);
        return t = t === r ? t : ce(t), de(e, t);
      }
      function Rm(e, t) {
        if (typeof e != "function")
          throw new Lt(f);
        return t = t == null ? 0 : Xe(ce(t), 0), de(function(o) {
          var a = o[t], l = Pn(o, 0, t);
          return a && Cn(l, a), bt(e, this, l);
        });
      }
      function Am(e, t, o) {
        var a = !0, l = !0;
        if (typeof e != "function")
          throw new Lt(f);
        return $e(o) && (a = "leading" in o ? !!o.leading : a, l = "trailing" in o ? !!o.trailing : l), nu(e, t, {
          leading: a,
          maxWait: t,
          trailing: l
        });
      }
      function Tm(e) {
        return Zl(e, 1);
      }
      function Pm(e, t) {
        return qs(Ls(t), e);
      }
      function Om() {
        if (!arguments.length)
          return [];
        var e = arguments[0];
        return ae(e) ? e : [e];
      }
      function Im(e) {
        return Dt(e, E);
      }
      function Nm(e, t) {
        return t = typeof t == "function" ? t : r, Dt(e, E, t);
      }
      function Lm(e) {
        return Dt(e, _ | E);
      }
      function Mm(e, t) {
        return t = typeof t == "function" ? t : r, Dt(e, _ | E, t);
      }
      function Dm(e, t) {
        return t == null || zc(e, t, Qe(t));
      }
      function Ht(e, t) {
        return e === t || e !== e && t !== t;
      }
      var km = Qo(bs), Fm = Qo(function(e, t) {
        return e >= t;
      }), Zn = Xc(/* @__PURE__ */ function() {
        return arguments;
      }()) ? Xc : function(e) {
        return ze(e) && Ie.call(e, "callee") && !kc.call(e, "callee");
      }, ae = L.isArray, Wm = mc ? _t(mc) : Vh;
      function vt(e) {
        return e != null && ci(e.length) && !fn(e);
      }
      function Ge(e) {
        return ze(e) && vt(e);
      }
      function Bm(e) {
        return e === !0 || e === !1 || ze(e) && ft(e) == me;
      }
      var On = Qp || sa, jm = xc ? _t(xc) : Kh;
      function Um(e) {
        return ze(e) && e.nodeType === 1 && !no(e);
      }
      function $m(e) {
        if (e == null)
          return !0;
        if (vt(e) && (ae(e) || typeof e == "string" || typeof e.splice == "function" || On(e) || mr(e) || Zn(e)))
          return !e.length;
        var t = lt(e);
        if (t == Be || t == yt)
          return !e.size;
        if (eo(e))
          return !Ss(e).length;
        for (var o in e)
          if (Ie.call(e, o))
            return !1;
        return !0;
      }
      function Hm(e, t) {
        return Zr(e, t);
      }
      function zm(e, t, o) {
        o = typeof o == "function" ? o : r;
        var a = o ? o(e, t) : r;
        return a === r ? Zr(e, t, r, o) : !!a;
      }
      function Xs(e) {
        if (!ze(e))
          return !1;
        var t = ft(e);
        return t == be || t == Re || typeof e.message == "string" && typeof e.name == "string" && !no(e);
      }
      function Gm(e) {
        return typeof e == "number" && Wc(e);
      }
      function fn(e) {
        if (!$e(e))
          return !1;
        var t = ft(e);
        return t == xe || t == Ze || t == Z || t == Bt;
      }
      function ou(e) {
        return typeof e == "number" && e == ce(e);
      }
      function ci(e) {
        return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Y;
      }
      function $e(e) {
        var t = typeof e;
        return e != null && (t == "object" || t == "function");
      }
      function ze(e) {
        return e != null && typeof e == "object";
      }
      var iu = wc ? _t(wc) : qh;
      function Vm(e, t) {
        return e === t || Cs(e, t, js(t));
      }
      function Km(e, t, o) {
        return o = typeof o == "function" ? o : r, Cs(e, t, js(t), o);
      }
      function Ym(e) {
        return su(e) && e != +e;
      }
      function qm(e) {
        if (Ng(e))
          throw new ie(u);
        return Zc(e);
      }
      function Xm(e) {
        return e === null;
      }
      function Zm(e) {
        return e == null;
      }
      function su(e) {
        return typeof e == "number" || ze(e) && ft(e) == st;
      }
      function no(e) {
        if (!ze(e) || ft(e) != Je)
          return !1;
        var t = Do(e);
        if (t === null)
          return !0;
        var o = Ie.call(t, "constructor") && t.constructor;
        return typeof o == "function" && o instanceof o && Io.call(o) == Kp;
      }
      var Zs = yc ? _t(yc) : Xh;
      function Jm(e) {
        return ou(e) && e >= -Y && e <= Y;
      }
      var au = bc ? _t(bc) : Zh;
      function li(e) {
        return typeof e == "string" || !ae(e) && ze(e) && ft(e) == nn;
      }
      function St(e) {
        return typeof e == "symbol" || ze(e) && ft(e) == er;
      }
      var mr = _c ? _t(_c) : Jh;
      function Qm(e) {
        return e === r;
      }
      function ex(e) {
        return ze(e) && lt(e) == wn;
      }
      function tx(e) {
        return ze(e) && ft(e) == vo;
      }
      var nx = Qo(Es), rx = Qo(function(e, t) {
        return e <= t;
      });
      function cu(e) {
        if (!e)
          return [];
        if (vt(e))
          return li(e) ? Ut(e) : gt(e);
        if (Hr && e[Hr])
          return Dp(e[Hr]());
        var t = lt(e), o = t == Be ? ds : t == yt ? To : xr;
        return o(e);
      }
      function dn(e) {
        if (!e)
          return e === 0 ? e : 0;
        if (e = Wt(e), e === se || e === -se) {
          var t = e < 0 ? -1 : 1;
          return t * ve;
        }
        return e === e ? e : 0;
      }
      function ce(e) {
        var t = dn(e), o = t % 1;
        return t === t ? o ? t - o : t : 0;
      }
      function lu(e) {
        return e ? Kn(ce(e), 0, Ee) : 0;
      }
      function Wt(e) {
        if (typeof e == "number")
          return e;
        if (St(e))
          return ke;
        if ($e(e)) {
          var t = typeof e.valueOf == "function" ? e.valueOf() : e;
          e = $e(t) ? t + "" : t;
        }
        if (typeof e != "string")
          return e === 0 ? e : +e;
        e = Tc(e);
        var o = we.test(e);
        return o || et.test(e) ? xp(e.slice(2), o ? 2 : 8) : Oe.test(e) ? ke : +e;
      }
      function uu(e) {
        return Zt(e, mt(e));
      }
      function ox(e) {
        return e ? Kn(ce(e), -Y, Y) : e === 0 ? e : 0;
      }
      function Pe(e) {
        return e == null ? "" : Ct(e);
      }
      var ix = hr(function(e, t) {
        if (eo(t) || vt(t)) {
          Zt(t, Qe(t), e);
          return;
        }
        for (var o in t)
          Ie.call(t, o) && Yr(e, o, t[o]);
      }), fu = hr(function(e, t) {
        Zt(t, mt(t), e);
      }), ui = hr(function(e, t, o, a) {
        Zt(t, mt(t), e, a);
      }), sx = hr(function(e, t, o, a) {
        Zt(t, Qe(t), e, a);
      }), ax = ln(xs);
      function cx(e, t) {
        var o = pr(e);
        return t == null ? o : Hc(o, t);
      }
      var lx = de(function(e, t) {
        e = Ne(e);
        var o = -1, a = t.length, l = a > 2 ? t[2] : r;
        for (l && dt(t[0], t[1], l) && (a = 1); ++o < a; )
          for (var h = t[o], x = mt(h), C = -1, T = x.length; ++C < T; ) {
            var k = x[C], F = e[k];
            (F === r || Ht(F, ur[k]) && !Ie.call(e, k)) && (e[k] = h[k]);
          }
        return e;
      }), ux = de(function(e) {
        return e.push(r, Tl), bt(du, r, e);
      });
      function fx(e, t) {
        return Sc(e, X(t, 3), Xt);
      }
      function dx(e, t) {
        return Sc(e, X(t, 3), ys);
      }
      function px(e, t) {
        return e == null ? e : ws(e, X(t, 3), mt);
      }
      function hx(e, t) {
        return e == null ? e : Yc(e, X(t, 3), mt);
      }
      function gx(e, t) {
        return e && Xt(e, X(t, 3));
      }
      function vx(e, t) {
        return e && ys(e, X(t, 3));
      }
      function mx(e) {
        return e == null ? [] : Go(e, Qe(e));
      }
      function xx(e) {
        return e == null ? [] : Go(e, mt(e));
      }
      function Js(e, t, o) {
        var a = e == null ? r : Yn(e, t);
        return a === r ? o : a;
      }
      function wx(e, t) {
        return e != null && Il(e, t, $h);
      }
      function Qs(e, t) {
        return e != null && Il(e, t, Hh);
      }
      var yx = Cl(function(e, t, o) {
        t != null && typeof t.toString != "function" && (t = No.call(t)), e[t] = o;
      }, ta(xt)), bx = Cl(function(e, t, o) {
        t != null && typeof t.toString != "function" && (t = No.call(t)), Ie.call(e, t) ? e[t].push(o) : e[t] = [o];
      }, X), _x = de(Xr);
      function Qe(e) {
        return vt(e) ? Uc(e) : Ss(e);
      }
      function mt(e) {
        return vt(e) ? Uc(e, !0) : Qh(e);
      }
      function Cx(e, t) {
        var o = {};
        return t = X(t, 3), Xt(e, function(a, l, h) {
          an(o, t(a, l, h), a);
        }), o;
      }
      function Sx(e, t) {
        var o = {};
        return t = X(t, 3), Xt(e, function(a, l, h) {
          an(o, l, t(a, l, h));
        }), o;
      }
      var Ex = hr(function(e, t, o) {
        Vo(e, t, o);
      }), du = hr(function(e, t, o, a) {
        Vo(e, t, o, a);
      }), Rx = ln(function(e, t) {
        var o = {};
        if (e == null)
          return o;
        var a = !1;
        t = je(t, function(h) {
          return h = Tn(h, e), a || (a = h.length > 1), h;
        }), Zt(e, Ws(e), o), a && (o = Dt(o, _ | R | E, yg));
        for (var l = t.length; l--; )
          Os(o, t[l]);
        return o;
      });
      function Ax(e, t) {
        return pu(e, ai(X(t)));
      }
      var Tx = ln(function(e, t) {
        return e == null ? {} : tg(e, t);
      });
      function pu(e, t) {
        if (e == null)
          return {};
        var o = je(Ws(e), function(a) {
          return [a];
        });
        return t = X(t), ol(e, o, function(a, l) {
          return t(a, l[0]);
        });
      }
      function Px(e, t, o) {
        t = Tn(t, e);
        var a = -1, l = t.length;
        for (l || (l = 1, e = r); ++a < l; ) {
          var h = e == null ? r : e[Jt(t[a])];
          h === r && (a = l, h = o), e = fn(h) ? h.call(e) : h;
        }
        return e;
      }
      function Ox(e, t, o) {
        return e == null ? e : Jr(e, t, o);
      }
      function Ix(e, t, o, a) {
        return a = typeof a == "function" ? a : r, e == null ? e : Jr(e, t, o, a);
      }
      var hu = Rl(Qe), gu = Rl(mt);
      function Nx(e, t, o) {
        var a = ae(e), l = a || On(e) || mr(e);
        if (t = X(t, 4), o == null) {
          var h = e && e.constructor;
          l ? o = a ? new h() : [] : $e(e) ? o = fn(h) ? pr(Do(e)) : {} : o = {};
        }
        return (l ? Nt : Xt)(e, function(x, C, T) {
          return t(o, x, C, T);
        }), o;
      }
      function Lx(e, t) {
        return e == null ? !0 : Os(e, t);
      }
      function Mx(e, t, o) {
        return e == null ? e : ll(e, t, Ls(o));
      }
      function Dx(e, t, o, a) {
        return a = typeof a == "function" ? a : r, e == null ? e : ll(e, t, Ls(o), a);
      }
      function xr(e) {
        return e == null ? [] : fs(e, Qe(e));
      }
      function kx(e) {
        return e == null ? [] : fs(e, mt(e));
      }
      function Fx(e, t, o) {
        return o === r && (o = t, t = r), o !== r && (o = Wt(o), o = o === o ? o : 0), t !== r && (t = Wt(t), t = t === t ? t : 0), Kn(Wt(e), t, o);
      }
      function Wx(e, t, o) {
        return t = dn(t), o === r ? (o = t, t = 0) : o = dn(o), e = Wt(e), zh(e, t, o);
      }
      function Bx(e, t, o) {
        if (o && typeof o != "boolean" && dt(e, t, o) && (t = o = r), o === r && (typeof t == "boolean" ? (o = t, t = r) : typeof e == "boolean" && (o = e, e = r)), e === r && t === r ? (e = 0, t = 1) : (e = dn(e), t === r ? (t = e, e = 0) : t = dn(t)), e > t) {
          var a = e;
          e = t, t = a;
        }
        if (o || e % 1 || t % 1) {
          var l = Bc();
          return ct(e + l * (t - e + mp("1e-" + ((l + "").length - 1))), t);
        }
        return As(e, t);
      }
      var jx = gr(function(e, t, o) {
        return t = t.toLowerCase(), e + (o ? vu(t) : t);
      });
      function vu(e) {
        return ea(Pe(e).toLowerCase());
      }
      function mu(e) {
        return e = Pe(e), e && e.replace(He, Op).replace(ap, "");
      }
      function Ux(e, t, o) {
        e = Pe(e), t = Ct(t);
        var a = e.length;
        o = o === r ? a : Kn(ce(o), 0, a);
        var l = o;
        return o -= t.length, o >= 0 && e.slice(o, l) == t;
      }
      function $x(e) {
        return e = Pe(e), e && xo.test(e) ? e.replace(rr, Ip) : e;
      }
      function Hx(e) {
        return e = Pe(e), e && Co.test(e) ? e.replace(jr, "\\$&") : e;
      }
      var zx = gr(function(e, t, o) {
        return e + (o ? "-" : "") + t.toLowerCase();
      }), Gx = gr(function(e, t, o) {
        return e + (o ? " " : "") + t.toLowerCase();
      }), Vx = yl("toLowerCase");
      function Kx(e, t, o) {
        e = Pe(e), t = ce(t);
        var a = t ? cr(e) : 0;
        if (!t || a >= t)
          return e;
        var l = (t - a) / 2;
        return Jo(Bo(l), o) + e + Jo(Wo(l), o);
      }
      function Yx(e, t, o) {
        e = Pe(e), t = ce(t);
        var a = t ? cr(e) : 0;
        return t && a < t ? e + Jo(t - a, o) : e;
      }
      function qx(e, t, o) {
        e = Pe(e), t = ce(t);
        var a = t ? cr(e) : 0;
        return t && a < t ? Jo(t - a, o) + e : e;
      }
      function Xx(e, t, o) {
        return o || t == null ? t = 0 : t && (t = +t), rh(Pe(e).replace(or, ""), t || 0);
      }
      function Zx(e, t, o) {
        return (o ? dt(e, t, o) : t === r) ? t = 1 : t = ce(t), Ts(Pe(e), t);
      }
      function Jx() {
        var e = arguments, t = Pe(e[0]);
        return e.length < 3 ? t : t.replace(e[1], e[2]);
      }
      var Qx = gr(function(e, t, o) {
        return e + (o ? "_" : "") + t.toLowerCase();
      });
      function ew(e, t, o) {
        return o && typeof o != "number" && dt(e, t, o) && (t = o = r), o = o === r ? Ee : o >>> 0, o ? (e = Pe(e), e && (typeof t == "string" || t != null && !Zs(t)) && (t = Ct(t), !t && ar(e)) ? Pn(Ut(e), 0, o) : e.split(t, o)) : [];
      }
      var tw = gr(function(e, t, o) {
        return e + (o ? " " : "") + ea(t);
      });
      function nw(e, t, o) {
        return e = Pe(e), o = o == null ? 0 : Kn(ce(o), 0, e.length), t = Ct(t), e.slice(o, o + t.length) == t;
      }
      function rw(e, t, o) {
        var a = p.templateSettings;
        o && dt(e, t, o) && (t = r), e = Pe(e), t = ui({}, t, a, Al);
        var l = ui({}, t.imports, a.imports, Al), h = Qe(l), x = fs(l, h), C, T, k = 0, F = t.interpolate || tt, W = "__p += '", H = ps(
          (t.escape || tt).source + "|" + F.source + "|" + (F === yo ? te : tt).source + "|" + (t.evaluate || tt).source + "|$",
          "g"
        ), K = "//# sourceURL=" + (Ie.call(t, "sourceURL") ? (t.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++dp + "]") + `
`;
        e.replace(H, function(Q, ge, _e, Et, pt, Rt) {
          return _e || (_e = Et), W += e.slice(k, Rt).replace(bn, Np), ge && (C = !0, W += `' +
__e(` + ge + `) +
'`), pt && (T = !0, W += `';
` + pt + `;
__p += '`), _e && (W += `' +
((__t = (` + _e + `)) == null ? '' : __t) +
'`), k = Rt + Q.length, Q;
        }), W += `';
`;
        var J = Ie.call(t, "variable") && t.variable;
        if (!J)
          W = `with (obj) {
` + W + `
}
`;
        else if (j.test(J))
          throw new ie(d);
        W = (T ? W.replace(Hi, "") : W).replace(Wr, "$1").replace(mo, "$1;"), W = "function(" + (J || "obj") + `) {
` + (J ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (C ? ", __e = _.escape" : "") + (T ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + W + `return __p
}`;
        var fe = wu(function() {
          return Te(h, K + "return " + W).apply(r, x);
        });
        if (fe.source = W, Xs(fe))
          throw fe;
        return fe;
      }
      function ow(e) {
        return Pe(e).toLowerCase();
      }
      function iw(e) {
        return Pe(e).toUpperCase();
      }
      function sw(e, t, o) {
        if (e = Pe(e), e && (o || t === r))
          return Tc(e);
        if (!e || !(t = Ct(t)))
          return e;
        var a = Ut(e), l = Ut(t), h = Pc(a, l), x = Oc(a, l) + 1;
        return Pn(a, h, x).join("");
      }
      function aw(e, t, o) {
        if (e = Pe(e), e && (o || t === r))
          return e.slice(0, Nc(e) + 1);
        if (!e || !(t = Ct(t)))
          return e;
        var a = Ut(e), l = Oc(a, Ut(t)) + 1;
        return Pn(a, 0, l).join("");
      }
      function cw(e, t, o) {
        if (e = Pe(e), e && (o || t === r))
          return e.replace(or, "");
        if (!e || !(t = Ct(t)))
          return e;
        var a = Ut(e), l = Pc(a, Ut(t));
        return Pn(a, l).join("");
      }
      function lw(e, t) {
        var o = he, a = Ce;
        if ($e(t)) {
          var l = "separator" in t ? t.separator : l;
          o = "length" in t ? ce(t.length) : o, a = "omission" in t ? Ct(t.omission) : a;
        }
        e = Pe(e);
        var h = e.length;
        if (ar(e)) {
          var x = Ut(e);
          h = x.length;
        }
        if (o >= h)
          return e;
        var C = o - cr(a);
        if (C < 1)
          return a;
        var T = x ? Pn(x, 0, C).join("") : e.slice(0, C);
        if (l === r)
          return T + a;
        if (x && (C += T.length - C), Zs(l)) {
          if (e.slice(C).search(l)) {
            var k, F = T;
            for (l.global || (l = ps(l.source, Pe(Ae.exec(l)) + "g")), l.lastIndex = 0; k = l.exec(F); )
              var W = k.index;
            T = T.slice(0, W === r ? C : W);
          }
        } else if (e.indexOf(Ct(l), C) != C) {
          var H = T.lastIndexOf(l);
          H > -1 && (T = T.slice(0, H));
        }
        return T + a;
      }
      function uw(e) {
        return e = Pe(e), e && Br.test(e) ? e.replace(rn, Bp) : e;
      }
      var fw = gr(function(e, t, o) {
        return e + (o ? " " : "") + t.toUpperCase();
      }), ea = yl("toUpperCase");
      function xu(e, t, o) {
        return e = Pe(e), t = o ? r : t, t === r ? Mp(e) ? $p(e) : Ep(e) : e.match(t) || [];
      }
      var wu = de(function(e, t) {
        try {
          return bt(e, r, t);
        } catch (o) {
          return Xs(o) ? o : new ie(o);
        }
      }), dw = ln(function(e, t) {
        return Nt(t, function(o) {
          o = Jt(o), an(e, o, Ys(e[o], e));
        }), e;
      });
      function pw(e) {
        var t = e == null ? 0 : e.length, o = X();
        return e = t ? je(e, function(a) {
          if (typeof a[1] != "function")
            throw new Lt(f);
          return [o(a[0]), a[1]];
        }) : [], de(function(a) {
          for (var l = -1; ++l < t; ) {
            var h = e[l];
            if (bt(h[0], this, a))
              return bt(h[1], this, a);
          }
        });
      }
      function hw(e) {
        return Bh(Dt(e, _));
      }
      function ta(e) {
        return function() {
          return e;
        };
      }
      function gw(e, t) {
        return e == null || e !== e ? t : e;
      }
      var vw = _l(), mw = _l(!0);
      function xt(e) {
        return e;
      }
      function na(e) {
        return Jc(typeof e == "function" ? e : Dt(e, _));
      }
      function xw(e) {
        return el(Dt(e, _));
      }
      function ww(e, t) {
        return tl(e, Dt(t, _));
      }
      var yw = de(function(e, t) {
        return function(o) {
          return Xr(o, e, t);
        };
      }), bw = de(function(e, t) {
        return function(o) {
          return Xr(e, o, t);
        };
      });
      function ra(e, t, o) {
        var a = Qe(t), l = Go(t, a);
        o == null && !($e(t) && (l.length || !a.length)) && (o = t, t = e, e = this, l = Go(t, Qe(t)));
        var h = !($e(o) && "chain" in o) || !!o.chain, x = fn(e);
        return Nt(l, function(C) {
          var T = t[C];
          e[C] = T, x && (e.prototype[C] = function() {
            var k = this.__chain__;
            if (h || k) {
              var F = e(this.__wrapped__), W = F.__actions__ = gt(this.__actions__);
              return W.push({ func: T, args: arguments, thisArg: e }), F.__chain__ = k, F;
            }
            return T.apply(e, Cn([this.value()], arguments));
          });
        }), e;
      }
      function _w() {
        return nt._ === this && (nt._ = Yp), this;
      }
      function oa() {
      }
      function Cw(e) {
        return e = ce(e), de(function(t) {
          return nl(t, e);
        });
      }
      var Sw = Ds(je), Ew = Ds(Cc), Rw = Ds(ss);
      function yu(e) {
        return $s(e) ? as(Jt(e)) : ng(e);
      }
      function Aw(e) {
        return function(t) {
          return e == null ? r : Yn(e, t);
        };
      }
      var Tw = Sl(), Pw = Sl(!0);
      function ia() {
        return [];
      }
      function sa() {
        return !1;
      }
      function Ow() {
        return {};
      }
      function Iw() {
        return "";
      }
      function Nw() {
        return !0;
      }
      function Lw(e, t) {
        if (e = ce(e), e < 1 || e > Y)
          return [];
        var o = Ee, a = ct(e, Ee);
        t = X(t), e -= Ee;
        for (var l = us(a, t); ++o < e; )
          t(o);
        return l;
      }
      function Mw(e) {
        return ae(e) ? je(e, Jt) : St(e) ? [e] : gt(jl(Pe(e)));
      }
      function Dw(e) {
        var t = ++Vp;
        return Pe(e) + t;
      }
      var kw = Zo(function(e, t) {
        return e + t;
      }, 0), Fw = ks("ceil"), Ww = Zo(function(e, t) {
        return e / t;
      }, 1), Bw = ks("floor");
      function jw(e) {
        return e && e.length ? zo(e, xt, bs) : r;
      }
      function Uw(e, t) {
        return e && e.length ? zo(e, X(t, 2), bs) : r;
      }
      function $w(e) {
        return Rc(e, xt);
      }
      function Hw(e, t) {
        return Rc(e, X(t, 2));
      }
      function zw(e) {
        return e && e.length ? zo(e, xt, Es) : r;
      }
      function Gw(e, t) {
        return e && e.length ? zo(e, X(t, 2), Es) : r;
      }
      var Vw = Zo(function(e, t) {
        return e * t;
      }, 1), Kw = ks("round"), Yw = Zo(function(e, t) {
        return e - t;
      }, 0);
      function qw(e) {
        return e && e.length ? ls(e, xt) : 0;
      }
      function Xw(e, t) {
        return e && e.length ? ls(e, X(t, 2)) : 0;
      }
      return p.after = xm, p.ary = Zl, p.assign = ix, p.assignIn = fu, p.assignInWith = ui, p.assignWith = sx, p.at = ax, p.before = Jl, p.bind = Ys, p.bindAll = dw, p.bindKey = Ql, p.castArray = Om, p.chain = Yl, p.chunk = Bg, p.compact = jg, p.concat = Ug, p.cond = pw, p.conforms = hw, p.constant = ta, p.countBy = qv, p.create = cx, p.curry = eu, p.curryRight = tu, p.debounce = nu, p.defaults = lx, p.defaultsDeep = ux, p.defer = wm, p.delay = ym, p.difference = $g, p.differenceBy = Hg, p.differenceWith = zg, p.drop = Gg, p.dropRight = Vg, p.dropRightWhile = Kg, p.dropWhile = Yg, p.fill = qg, p.filter = Zv, p.flatMap = em, p.flatMapDeep = tm, p.flatMapDepth = nm, p.flatten = zl, p.flattenDeep = Xg, p.flattenDepth = Zg, p.flip = bm, p.flow = vw, p.flowRight = mw, p.fromPairs = Jg, p.functions = mx, p.functionsIn = xx, p.groupBy = rm, p.initial = ev, p.intersection = tv, p.intersectionBy = nv, p.intersectionWith = rv, p.invert = yx, p.invertBy = bx, p.invokeMap = im, p.iteratee = na, p.keyBy = sm, p.keys = Qe, p.keysIn = mt, p.map = oi, p.mapKeys = Cx, p.mapValues = Sx, p.matches = xw, p.matchesProperty = ww, p.memoize = si, p.merge = Ex, p.mergeWith = du, p.method = yw, p.methodOf = bw, p.mixin = ra, p.negate = ai, p.nthArg = Cw, p.omit = Rx, p.omitBy = Ax, p.once = _m, p.orderBy = am, p.over = Sw, p.overArgs = Cm, p.overEvery = Ew, p.overSome = Rw, p.partial = qs, p.partialRight = ru, p.partition = cm, p.pick = Tx, p.pickBy = pu, p.property = yu, p.propertyOf = Aw, p.pull = av, p.pullAll = Vl, p.pullAllBy = cv, p.pullAllWith = lv, p.pullAt = uv, p.range = Tw, p.rangeRight = Pw, p.rearg = Sm, p.reject = fm, p.remove = fv, p.rest = Em, p.reverse = Vs, p.sampleSize = pm, p.set = Ox, p.setWith = Ix, p.shuffle = hm, p.slice = dv, p.sortBy = mm, p.sortedUniq = wv, p.sortedUniqBy = yv, p.split = ew, p.spread = Rm, p.tail = bv, p.take = _v, p.takeRight = Cv, p.takeRightWhile = Sv, p.takeWhile = Ev, p.tap = jv, p.throttle = Am, p.thru = ri, p.toArray = cu, p.toPairs = hu, p.toPairsIn = gu, p.toPath = Mw, p.toPlainObject = uu, p.transform = Nx, p.unary = Tm, p.union = Rv, p.unionBy = Av, p.unionWith = Tv, p.uniq = Pv, p.uniqBy = Ov, p.uniqWith = Iv, p.unset = Lx, p.unzip = Ks, p.unzipWith = Kl, p.update = Mx, p.updateWith = Dx, p.values = xr, p.valuesIn = kx, p.without = Nv, p.words = xu, p.wrap = Pm, p.xor = Lv, p.xorBy = Mv, p.xorWith = Dv, p.zip = kv, p.zipObject = Fv, p.zipObjectDeep = Wv, p.zipWith = Bv, p.entries = hu, p.entriesIn = gu, p.extend = fu, p.extendWith = ui, ra(p, p), p.add = kw, p.attempt = wu, p.camelCase = jx, p.capitalize = vu, p.ceil = Fw, p.clamp = Fx, p.clone = Im, p.cloneDeep = Lm, p.cloneDeepWith = Mm, p.cloneWith = Nm, p.conformsTo = Dm, p.deburr = mu, p.defaultTo = gw, p.divide = Ww, p.endsWith = Ux, p.eq = Ht, p.escape = $x, p.escapeRegExp = Hx, p.every = Xv, p.find = Jv, p.findIndex = $l, p.findKey = fx, p.findLast = Qv, p.findLastIndex = Hl, p.findLastKey = dx, p.floor = Bw, p.forEach = ql, p.forEachRight = Xl, p.forIn = px, p.forInRight = hx, p.forOwn = gx, p.forOwnRight = vx, p.get = Js, p.gt = km, p.gte = Fm, p.has = wx, p.hasIn = Qs, p.head = Gl, p.identity = xt, p.includes = om, p.indexOf = Qg, p.inRange = Wx, p.invoke = _x, p.isArguments = Zn, p.isArray = ae, p.isArrayBuffer = Wm, p.isArrayLike = vt, p.isArrayLikeObject = Ge, p.isBoolean = Bm, p.isBuffer = On, p.isDate = jm, p.isElement = Um, p.isEmpty = $m, p.isEqual = Hm, p.isEqualWith = zm, p.isError = Xs, p.isFinite = Gm, p.isFunction = fn, p.isInteger = ou, p.isLength = ci, p.isMap = iu, p.isMatch = Vm, p.isMatchWith = Km, p.isNaN = Ym, p.isNative = qm, p.isNil = Zm, p.isNull = Xm, p.isNumber = su, p.isObject = $e, p.isObjectLike = ze, p.isPlainObject = no, p.isRegExp = Zs, p.isSafeInteger = Jm, p.isSet = au, p.isString = li, p.isSymbol = St, p.isTypedArray = mr, p.isUndefined = Qm, p.isWeakMap = ex, p.isWeakSet = tx, p.join = ov, p.kebabCase = zx, p.last = Ft, p.lastIndexOf = iv, p.lowerCase = Gx, p.lowerFirst = Vx, p.lt = nx, p.lte = rx, p.max = jw, p.maxBy = Uw, p.mean = $w, p.meanBy = Hw, p.min = zw, p.minBy = Gw, p.stubArray = ia, p.stubFalse = sa, p.stubObject = Ow, p.stubString = Iw, p.stubTrue = Nw, p.multiply = Vw, p.nth = sv, p.noConflict = _w, p.noop = oa, p.now = ii, p.pad = Kx, p.padEnd = Yx, p.padStart = qx, p.parseInt = Xx, p.random = Bx, p.reduce = lm, p.reduceRight = um, p.repeat = Zx, p.replace = Jx, p.result = Px, p.round = Kw, p.runInContext = A, p.sample = dm, p.size = gm, p.snakeCase = Qx, p.some = vm, p.sortedIndex = pv, p.sortedIndexBy = hv, p.sortedIndexOf = gv, p.sortedLastIndex = vv, p.sortedLastIndexBy = mv, p.sortedLastIndexOf = xv, p.startCase = tw, p.startsWith = nw, p.subtract = Yw, p.sum = qw, p.sumBy = Xw, p.template = rw, p.times = Lw, p.toFinite = dn, p.toInteger = ce, p.toLength = lu, p.toLower = ow, p.toNumber = Wt, p.toSafeInteger = ox, p.toString = Pe, p.toUpper = iw, p.trim = sw, p.trimEnd = aw, p.trimStart = cw, p.truncate = lw, p.unescape = uw, p.uniqueId = Dw, p.upperCase = fw, p.upperFirst = ea, p.each = ql, p.eachRight = Xl, p.first = Gl, ra(p, function() {
        var e = {};
        return Xt(p, function(t, o) {
          Ie.call(p.prototype, o) || (e[o] = t);
        }), e;
      }(), { chain: !1 }), p.VERSION = s, Nt(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(e) {
        p[e].placeholder = p;
      }), Nt(["drop", "take"], function(e, t) {
        ye.prototype[e] = function(o) {
          o = o === r ? 1 : Xe(ce(o), 0);
          var a = this.__filtered__ && !t ? new ye(this) : this.clone();
          return a.__filtered__ ? a.__takeCount__ = ct(o, a.__takeCount__) : a.__views__.push({
            size: ct(o, Ee),
            type: e + (a.__dir__ < 0 ? "Right" : "")
          }), a;
        }, ye.prototype[e + "Right"] = function(o) {
          return this.reverse()[e](o).reverse();
        };
      }), Nt(["filter", "map", "takeWhile"], function(e, t) {
        var o = t + 1, a = o == ne || o == oe;
        ye.prototype[e] = function(l) {
          var h = this.clone();
          return h.__iteratees__.push({
            iteratee: X(l, 3),
            type: o
          }), h.__filtered__ = h.__filtered__ || a, h;
        };
      }), Nt(["head", "last"], function(e, t) {
        var o = "take" + (t ? "Right" : "");
        ye.prototype[e] = function() {
          return this[o](1).value()[0];
        };
      }), Nt(["initial", "tail"], function(e, t) {
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
          return Xr(o, e, t);
        });
      }), ye.prototype.reject = function(e) {
        return this.filter(ai(X(e)));
      }, ye.prototype.slice = function(e, t) {
        e = ce(e);
        var o = this;
        return o.__filtered__ && (e > 0 || t < 0) ? new ye(o) : (e < 0 ? o = o.takeRight(-e) : e && (o = o.drop(e)), t !== r && (t = ce(t), o = t < 0 ? o.dropRight(-t) : o.take(t - e)), o);
      }, ye.prototype.takeRightWhile = function(e) {
        return this.reverse().takeWhile(e).reverse();
      }, ye.prototype.toArray = function() {
        return this.take(Ee);
      }, Xt(ye.prototype, function(e, t) {
        var o = /^(?:filter|find|map|reject)|While$/.test(t), a = /^(?:head|last)$/.test(t), l = p[a ? "take" + (t == "last" ? "Right" : "") : t], h = a || /^find/.test(t);
        l && (p.prototype[t] = function() {
          var x = this.__wrapped__, C = a ? [1] : arguments, T = x instanceof ye, k = C[0], F = T || ae(x), W = function(ge) {
            var _e = l.apply(p, Cn([ge], C));
            return a && H ? _e[0] : _e;
          };
          F && o && typeof k == "function" && k.length != 1 && (T = F = !1);
          var H = this.__chain__, K = !!this.__actions__.length, J = h && !H, fe = T && !K;
          if (!h && F) {
            x = fe ? x : new ye(this);
            var Q = e.apply(x, C);
            return Q.__actions__.push({ func: ri, args: [W], thisArg: r }), new Mt(Q, H);
          }
          return J && fe ? e.apply(this, C) : (Q = this.thru(W), J ? a ? Q.value()[0] : Q.value() : Q);
        });
      }), Nt(["pop", "push", "shift", "sort", "splice", "unshift"], function(e) {
        var t = Po[e], o = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru", a = /^(?:pop|shift)$/.test(e);
        p.prototype[e] = function() {
          var l = arguments;
          if (a && !this.__chain__) {
            var h = this.value();
            return t.apply(ae(h) ? h : [], l);
          }
          return this[o](function(x) {
            return t.apply(ae(x) ? x : [], l);
          });
        };
      }), Xt(ye.prototype, function(e, t) {
        var o = p[t];
        if (o) {
          var a = o.name + "";
          Ie.call(dr, a) || (dr[a] = []), dr[a].push({ name: t, func: o });
        }
      }), dr[Xo(r, N).name] = [{
        name: "wrapper",
        func: r
      }], ye.prototype.clone = uh, ye.prototype.reverse = fh, ye.prototype.value = dh, p.prototype.at = Uv, p.prototype.chain = $v, p.prototype.commit = Hv, p.prototype.next = zv, p.prototype.plant = Vv, p.prototype.reverse = Kv, p.prototype.toJSON = p.prototype.valueOf = p.prototype.value = Yv, p.prototype.first = p.prototype.head, Hr && (p.prototype[Hr] = Gv), p;
    }, lr = Hp();
    Hn ? ((Hn.exports = lr)._ = lr, ns._ = lr) : nt._ = lr;
  }).call(ro);
})(bi, bi.exports);
var ny = bi.exports;
const ry = /* @__PURE__ */ Qw(ny);
function oy(n, i) {
  typeof n == "function" ? n(i) : n != null && (n.current = i);
}
function Qu(...n) {
  return (i) => n.forEach((r) => oy(r, i));
}
function Ye(...n) {
  return v.useCallback(Qu(...n), n);
}
var Er = v.forwardRef((n, i) => {
  const { children: r, ...s } = n, c = v.Children.toArray(r), u = c.find(iy);
  if (u) {
    const f = u.props.children, d = c.map((g) => g === u ? v.Children.count(f) > 1 ? v.Children.only(null) : v.isValidElement(f) ? f.props.children : null : g);
    return /* @__PURE__ */ P.jsx(Ca, { ...s, ref: i, children: v.isValidElement(f) ? v.cloneElement(f, void 0, d) : null });
  }
  return /* @__PURE__ */ P.jsx(Ca, { ...s, ref: i, children: r });
});
Er.displayName = "Slot";
var Ca = v.forwardRef((n, i) => {
  const { children: r, ...s } = n;
  if (v.isValidElement(r)) {
    const c = ay(r);
    return v.cloneElement(r, {
      ...sy(s, r.props),
      // @ts-ignore
      ref: i ? Qu(i, c) : c
    });
  }
  return v.Children.count(r) > 1 ? v.Children.only(null) : null;
});
Ca.displayName = "SlotClone";
var ef = ({ children: n }) => /* @__PURE__ */ P.jsx(P.Fragment, { children: n });
function iy(n) {
  return v.isValidElement(n) && n.type === ef;
}
function sy(n, i) {
  const r = { ...i };
  for (const s in i) {
    const c = n[s], u = i[s];
    /^on[A-Z]/.test(s) ? c && u ? r[s] = (...d) => {
      u(...d), c(...d);
    } : c && (r[s] = c) : s === "style" ? r[s] = { ...c, ...u } : s === "className" && (r[s] = [c, u].filter(Boolean).join(" "));
  }
  return { ...n, ...r };
}
function ay(n) {
  var s, c;
  let i = (s = Object.getOwnPropertyDescriptor(n.props, "ref")) == null ? void 0 : s.get, r = i && "isReactWarning" in i && i.isReactWarning;
  return r ? n.ref : (i = (c = Object.getOwnPropertyDescriptor(n, "ref")) == null ? void 0 : c.get, r = i && "isReactWarning" in i && i.isReactWarning, r ? n.props.ref : n.props.ref || n.ref);
}
function tf(n) {
  var i, r, s = "";
  if (typeof n == "string" || typeof n == "number")
    s += n;
  else if (typeof n == "object")
    if (Array.isArray(n))
      for (i = 0; i < n.length; i++)
        n[i] && (r = tf(n[i])) && (s && (s += " "), s += r);
    else
      for (i in n)
        n[i] && (s && (s += " "), s += i);
  return s;
}
function cy() {
  for (var n, i, r = 0, s = ""; r < arguments.length; )
    (n = arguments[r++]) && (i = tf(n)) && (s && (s += " "), s += i);
  return s;
}
const Su = (n) => typeof n == "boolean" ? "".concat(n) : n === 0 ? "0" : n, Eu = cy, nf = (n, i) => (r) => {
  var s;
  if ((i == null ? void 0 : i.variants) == null)
    return Eu(n, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
  const { variants: c, defaultVariants: u } = i, f = Object.keys(c).map((m) => {
    const w = r == null ? void 0 : r[m], _ = u == null ? void 0 : u[m];
    if (w === null)
      return null;
    const R = Su(w) || Su(_);
    return c[m][R];
  }), d = r && Object.entries(r).reduce((m, w) => {
    let [_, R] = w;
    return R === void 0 || (m[_] = R), m;
  }, {}), g = i == null || (s = i.compoundVariants) === null || s === void 0 ? void 0 : s.reduce((m, w) => {
    let { class: _, className: R, ...E } = w;
    return Object.entries(E).every((O) => {
      let [y, S] = O;
      return Array.isArray(S) ? S.includes({
        ...u,
        ...d
      }[y]) : {
        ...u,
        ...d
      }[y] === S;
    }) ? [
      ...m,
      _,
      R
    ] : m;
  }, []);
  return Eu(n, f, g, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
};
function rf(n) {
  var i, r, s = "";
  if (typeof n == "string" || typeof n == "number")
    s += n;
  else if (typeof n == "object")
    if (Array.isArray(n)) {
      var c = n.length;
      for (i = 0; i < c; i++)
        n[i] && (r = rf(n[i])) && (s && (s += " "), s += r);
    } else
      for (r in n)
        n[r] && (s && (s += " "), s += r);
  return s;
}
function ly() {
  for (var n, i, r = 0, s = "", c = arguments.length; r < c; r++)
    (n = arguments[r]) && (i = rf(n)) && (s && (s += " "), s += i);
  return s;
}
const Wa = "-", uy = (n) => {
  const i = dy(n), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: s
  } = n;
  return {
    getClassGroupId: (f) => {
      const d = f.split(Wa);
      return d[0] === "" && d.length !== 1 && d.shift(), of(d, i) || fy(f);
    },
    getConflictingClassGroupIds: (f, d) => {
      const g = r[f] || [];
      return d && s[f] ? [...g, ...s[f]] : g;
    }
  };
}, of = (n, i) => {
  var f;
  if (n.length === 0)
    return i.classGroupId;
  const r = n[0], s = i.nextPart.get(r), c = s ? of(n.slice(1), s) : void 0;
  if (c)
    return c;
  if (i.validators.length === 0)
    return;
  const u = n.join(Wa);
  return (f = i.validators.find(({
    validator: d
  }) => d(u))) == null ? void 0 : f.classGroupId;
}, Ru = /^\[(.+)\]$/, fy = (n) => {
  if (Ru.test(n)) {
    const i = Ru.exec(n)[1], r = i == null ? void 0 : i.substring(0, i.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, dy = (n) => {
  const {
    theme: i,
    prefix: r
  } = n, s = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return hy(Object.entries(n.classGroups), r).forEach(([u, f]) => {
    Sa(f, s, u, i);
  }), s;
}, Sa = (n, i, r, s) => {
  n.forEach((c) => {
    if (typeof c == "string") {
      const u = c === "" ? i : Au(i, c);
      u.classGroupId = r;
      return;
    }
    if (typeof c == "function") {
      if (py(c)) {
        Sa(c(s), i, r, s);
        return;
      }
      i.validators.push({
        validator: c,
        classGroupId: r
      });
      return;
    }
    Object.entries(c).forEach(([u, f]) => {
      Sa(f, Au(i, u), r, s);
    });
  });
}, Au = (n, i) => {
  let r = n;
  return i.split(Wa).forEach((s) => {
    r.nextPart.has(s) || r.nextPart.set(s, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(s);
  }), r;
}, py = (n) => n.isThemeGetter, hy = (n, i) => i ? n.map(([r, s]) => {
  const c = s.map((u) => typeof u == "string" ? i + u : typeof u == "object" ? Object.fromEntries(Object.entries(u).map(([f, d]) => [i + f, d])) : u);
  return [r, c];
}) : n, gy = (n) => {
  if (n < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let i = 0, r = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map();
  const c = (u, f) => {
    r.set(u, f), i++, i > n && (i = 0, s = r, r = /* @__PURE__ */ new Map());
  };
  return {
    get(u) {
      let f = r.get(u);
      if (f !== void 0)
        return f;
      if ((f = s.get(u)) !== void 0)
        return c(u, f), f;
    },
    set(u, f) {
      r.has(u) ? r.set(u, f) : c(u, f);
    }
  };
}, sf = "!", vy = (n) => {
  const {
    separator: i,
    experimentalParseClassName: r
  } = n, s = i.length === 1, c = i[0], u = i.length, f = (d) => {
    const g = [];
    let m = 0, w = 0, _;
    for (let S = 0; S < d.length; S++) {
      let N = d[S];
      if (m === 0) {
        if (N === c && (s || d.slice(S, S + u) === i)) {
          g.push(d.slice(w, S)), w = S + u;
          continue;
        }
        if (N === "/") {
          _ = S;
          continue;
        }
      }
      N === "[" ? m++ : N === "]" && m--;
    }
    const R = g.length === 0 ? d : d.substring(w), E = R.startsWith(sf), O = E ? R.substring(1) : R, y = _ && _ > w ? _ - w : void 0;
    return {
      modifiers: g,
      hasImportantModifier: E,
      baseClassName: O,
      maybePostfixModifierPosition: y
    };
  };
  return r ? (d) => r({
    className: d,
    parseClassName: f
  }) : f;
}, my = (n) => {
  if (n.length <= 1)
    return n;
  const i = [];
  let r = [];
  return n.forEach((s) => {
    s[0] === "[" ? (i.push(...r.sort(), s), r = []) : r.push(s);
  }), i.push(...r.sort()), i;
}, xy = (n) => ({
  cache: gy(n.cacheSize),
  parseClassName: vy(n),
  ...uy(n)
}), wy = /\s+/, yy = (n, i) => {
  const {
    parseClassName: r,
    getClassGroupId: s,
    getConflictingClassGroupIds: c
  } = i, u = [], f = n.trim().split(wy);
  let d = "";
  for (let g = f.length - 1; g >= 0; g -= 1) {
    const m = f[g], {
      modifiers: w,
      hasImportantModifier: _,
      baseClassName: R,
      maybePostfixModifierPosition: E
    } = r(m);
    let O = !!E, y = s(O ? R.substring(0, E) : R);
    if (!y) {
      if (!O) {
        d = m + (d.length > 0 ? " " + d : d);
        continue;
      }
      if (y = s(R), !y) {
        d = m + (d.length > 0 ? " " + d : d);
        continue;
      }
      O = !1;
    }
    const S = my(w).join(":"), N = _ ? S + sf : S, I = N + y;
    if (u.includes(I))
      continue;
    u.push(I);
    const M = c(y, O);
    for (let B = 0; B < M.length; ++B) {
      const U = M[B];
      u.push(N + U);
    }
    d = m + (d.length > 0 ? " " + d : d);
  }
  return d;
};
function by() {
  let n = 0, i, r, s = "";
  for (; n < arguments.length; )
    (i = arguments[n++]) && (r = af(i)) && (s && (s += " "), s += r);
  return s;
}
const af = (n) => {
  if (typeof n == "string")
    return n;
  let i, r = "";
  for (let s = 0; s < n.length; s++)
    n[s] && (i = af(n[s])) && (r && (r += " "), r += i);
  return r;
};
function _y(n, ...i) {
  let r, s, c, u = f;
  function f(g) {
    const m = i.reduce((w, _) => _(w), n());
    return r = xy(m), s = r.cache.get, c = r.cache.set, u = d, d(g);
  }
  function d(g) {
    const m = s(g);
    if (m)
      return m;
    const w = yy(g, r);
    return c(g, w), w;
  }
  return function() {
    return u(by.apply(null, arguments));
  };
}
const We = (n) => {
  const i = (r) => r[n] || [];
  return i.isThemeGetter = !0, i;
}, cf = /^\[(?:([a-z-]+):)?(.+)\]$/i, Cy = /^\d+\/\d+$/, Sy = /* @__PURE__ */ new Set(["px", "full", "screen"]), Ey = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Ry = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Ay = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Ty = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Py = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, hn = (n) => _r(n) || Sy.has(n) || Cy.test(n), In = (n) => Tr(n, "length", Fy), _r = (n) => !!n && !Number.isNaN(Number(n)), aa = (n) => Tr(n, "number", _r), so = (n) => !!n && Number.isInteger(Number(n)), Oy = (n) => n.endsWith("%") && _r(n.slice(0, -1)), le = (n) => cf.test(n), Nn = (n) => Ey.test(n), Iy = /* @__PURE__ */ new Set(["length", "size", "percentage"]), Ny = (n) => Tr(n, Iy, lf), Ly = (n) => Tr(n, "position", lf), My = /* @__PURE__ */ new Set(["image", "url"]), Dy = (n) => Tr(n, My, By), ky = (n) => Tr(n, "", Wy), ao = () => !0, Tr = (n, i, r) => {
  const s = cf.exec(n);
  return s ? s[1] ? typeof i == "string" ? s[1] === i : i.has(s[1]) : r(s[2]) : !1;
}, Fy = (n) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Ry.test(n) && !Ay.test(n)
), lf = () => !1, Wy = (n) => Ty.test(n), By = (n) => Py.test(n), jy = () => {
  const n = We("colors"), i = We("spacing"), r = We("blur"), s = We("brightness"), c = We("borderColor"), u = We("borderRadius"), f = We("borderSpacing"), d = We("borderWidth"), g = We("contrast"), m = We("grayscale"), w = We("hueRotate"), _ = We("invert"), R = We("gap"), E = We("gradientColorStops"), O = We("gradientColorStopPositions"), y = We("inset"), S = We("margin"), N = We("opacity"), I = We("padding"), M = We("saturate"), B = We("scale"), U = We("sepia"), V = We("skew"), $ = We("space"), ee = We("translate"), ue = () => ["auto", "contain", "none"], he = () => ["auto", "hidden", "clip", "visible", "scroll"], Ce = () => ["auto", le, i], q = () => [le, i], re = () => ["", hn, In], ne = () => ["auto", _r, le], Se = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], oe = () => ["solid", "dashed", "dotted", "double", "none"], se = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], Y = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], ve = () => ["", "0", le], ke = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], Ee = () => [_r, le];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [ao],
      spacing: [hn, In],
      blur: ["none", "", Nn, le],
      brightness: Ee(),
      borderColor: [n],
      borderRadius: ["none", "", "full", Nn, le],
      borderSpacing: q(),
      borderWidth: re(),
      contrast: Ee(),
      grayscale: ve(),
      hueRotate: Ee(),
      invert: ve(),
      gap: q(),
      gradientColorStops: [n],
      gradientColorStopPositions: [Oy, In],
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
        aspect: ["auto", "square", "video", le]
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
        columns: [Nn]
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
        object: [...Se(), le]
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
        z: ["auto", so, le]
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
        flex: ["1", "auto", "initial", "none", le]
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
        order: ["first", "last", "none", so, le]
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
          span: ["full", so, le]
        }, le]
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
        "grid-rows": [ao]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [so, le]
        }, le]
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
        "auto-cols": ["auto", "min", "max", "fr", le]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", le]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [R]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [R]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [R]
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
        p: [I]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [I]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [I]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [I]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [I]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [I]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [I]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [I]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [I]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [S]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [S]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [S]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [S]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [S]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [S]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [S]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [S]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [S]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", le, i]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [le, i, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [le, i, "none", "full", "min", "max", "fit", "prose", {
          screen: [Nn]
        }, Nn]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [le, i, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [le, i, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [le, i, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [le, i, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", Nn, In]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", aa]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", le]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", _r, aa]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", hn, le]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", le]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", le]
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
        "placeholder-opacity": [N]
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
        "text-opacity": [N]
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
        decoration: ["auto", "from-font", hn, In]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", hn, le]
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
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", le]
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
        content: ["none", le]
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
        "bg-opacity": [N]
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
        bg: [...Se(), Ly]
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
        bg: ["auto", "cover", "contain", Ny]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Dy]
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
        from: [E]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [E]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [E]
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
        "border-opacity": [N]
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
        "divide-opacity": [N]
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
        border: [c]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [c]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [c]
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": [c]
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": [c]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [c]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [c]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [c]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [c]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [c]
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
        "outline-offset": [hn, le]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [hn, In]
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
        "ring-opacity": [N]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [hn, In]
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
        shadow: ["", "inner", "none", Nn, ky]
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
        opacity: [N]
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
        "drop-shadow": ["", "none", Nn, le]
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
        sepia: [U]
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
        "backdrop-opacity": [N]
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
        "backdrop-sepia": [U]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", le]
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
        ease: ["linear", "in", "out", "in-out", le]
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
        animate: ["none", "spin", "ping", "pulse", "bounce", le]
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
        scale: [B]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [B]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [B]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [so, le]
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
        "skew-x": [V]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [V]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", le]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", le]
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
        "will-change": ["auto", "scroll", "contents", "transform", le]
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
        stroke: [hn, In, aa]
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
}, Uy = /* @__PURE__ */ _y(jy);
function ot(...n) {
  return Uy(ly(n));
}
function $y(n) {
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
const Hy = nf(
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
), lo = v.forwardRef(
  ({ className: n, variant: i, size: r, asChild: s = !1, ...c }, u) => {
    const f = s ? Er : "button";
    return /* @__PURE__ */ P.jsx(
      f,
      {
        className: ot(Hy({ variant: i, size: r, className: n })),
        ref: u,
        ...c
      }
    );
  }
);
lo.displayName = "Button";
const zy = "_counter_1wts1_1", Gy = "_header_1wts1_10", Vy = "_button_1wts1_16", ca = {
  counter: zy,
  header: Gy,
  button: Vy
}, Ky = (n) => {
  const [i, r] = Xu(n);
  return {
    count: i,
    incrementCount: () => r(i + 1)
  };
}, { throttle: Yy } = ry, NC = ({ initialValue: n = 0 }) => {
  const { count: i, incrementCount: r } = Ky(n);
  return Zu(() => {
    Yy(() => {
      console.log("throttle");
    }, 10)();
  }, []), /* @__PURE__ */ P.jsxs("div", { className: ca.counter, children: [
    /* @__PURE__ */ P.jsx("h2", { className: ca.header, children: "Counter" }),
    /* @__PURE__ */ P.jsx("button", { className: ca.button, type: "button", onClick: r, children: "Increment by one" }),
    /* @__PURE__ */ P.jsx(lo, { variant: "outline", children: "Shadcn button" }),
    /* @__PURE__ */ P.jsxs("div", { className: "bg-red-500", children: [
      "Total value: ",
      /* @__PURE__ */ P.jsx("strong", { children: i })
    ] })
  ] });
};
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qy = (n) => n.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), uf = (...n) => n.filter((i, r, s) => !!i && i.trim() !== "" && s.indexOf(i) === r).join(" ").trim();
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Xy = {
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
const Zy = Ju(
  ({
    color: n = "currentColor",
    size: i = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: s,
    className: c = "",
    children: u,
    iconNode: f,
    ...d
  }, g) => ba(
    "svg",
    {
      ref: g,
      ...Xy,
      width: i,
      height: i,
      stroke: n,
      strokeWidth: s ? Number(r) * 24 / Number(i) : r,
      className: uf("lucide", c),
      ...d
    },
    [
      ...f.map(([m, w]) => ba(m, w)),
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
const po = (n, i) => {
  const r = Ju(
    ({ className: s, ...c }, u) => ba(Zy, {
      ref: u,
      iconNode: i,
      className: uf(`lucide-${qy(n)}`, s),
      ...c
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
const Jy = po("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ff = po("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qy = po("ChevronUp", [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tu = po("CircleHelp", [
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
const eb = po("ExternalLink", [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
]);
function Pu(n, [i, r]) {
  return Math.min(r, Math.max(i, n));
}
function De(n, i, { checkForDefaultPrevented: r = !0 } = {}) {
  return function(c) {
    if (n == null || n(c), r === !1 || !c.defaultPrevented)
      return i == null ? void 0 : i(c);
  };
}
function tb(n, i = []) {
  let r = [];
  function s(u, f) {
    const d = v.createContext(f), g = r.length;
    r = [...r, f];
    function m(_) {
      const { scope: R, children: E, ...O } = _, y = (R == null ? void 0 : R[n][g]) || d, S = v.useMemo(() => O, Object.values(O));
      return /* @__PURE__ */ P.jsx(y.Provider, { value: S, children: E });
    }
    function w(_, R) {
      const E = (R == null ? void 0 : R[n][g]) || d, O = v.useContext(E);
      if (O)
        return O;
      if (f !== void 0)
        return f;
      throw new Error(`\`${_}\` must be used within \`${u}\``);
    }
    return m.displayName = u + "Provider", [m, w];
  }
  const c = () => {
    const u = r.map((f) => v.createContext(f));
    return function(d) {
      const g = (d == null ? void 0 : d[n]) || u;
      return v.useMemo(
        () => ({ [`__scope${n}`]: { ...d, [n]: g } }),
        [d, g]
      );
    };
  };
  return c.scopeName = n, [s, nb(c, ...i)];
}
function nb(...n) {
  const i = n[0];
  if (n.length === 1)
    return i;
  const r = () => {
    const s = n.map((c) => ({
      useScope: c(),
      scopeName: c.scopeName
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
function rb(n) {
  const i = n + "CollectionProvider", [r, s] = tb(i), [c, u] = r(
    i,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), f = (E) => {
    const { scope: O, children: y } = E, S = gn.useRef(null), N = gn.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ P.jsx(c, { scope: O, itemMap: N, collectionRef: S, children: y });
  };
  f.displayName = i;
  const d = n + "CollectionSlot", g = gn.forwardRef(
    (E, O) => {
      const { scope: y, children: S } = E, N = u(d, y), I = Ye(O, N.collectionRef);
      return /* @__PURE__ */ P.jsx(Er, { ref: I, children: S });
    }
  );
  g.displayName = d;
  const m = n + "CollectionItemSlot", w = "data-radix-collection-item", _ = gn.forwardRef(
    (E, O) => {
      const { scope: y, children: S, ...N } = E, I = gn.useRef(null), M = Ye(O, I), B = u(m, y);
      return gn.useEffect(() => (B.itemMap.set(I, { ref: I, ...N }), () => void B.itemMap.delete(I))), /* @__PURE__ */ P.jsx(Er, { [w]: "", ref: M, children: S });
    }
  );
  _.displayName = m;
  function R(E) {
    const O = u(n + "CollectionConsumer", E);
    return gn.useCallback(() => {
      const S = O.collectionRef.current;
      if (!S)
        return [];
      const N = Array.from(S.querySelectorAll(`[${w}]`));
      return Array.from(O.itemMap.values()).sort(
        (B, U) => N.indexOf(B.ref.current) - N.indexOf(U.ref.current)
      );
    }, [O.collectionRef, O.itemMap]);
  }
  return [
    { Provider: f, Slot: g, ItemSlot: _ },
    R,
    s
  ];
}
function df(n, i = []) {
  let r = [];
  function s(u, f) {
    const d = v.createContext(f), g = r.length;
    r = [...r, f];
    const m = (_) => {
      var N;
      const { scope: R, children: E, ...O } = _, y = ((N = R == null ? void 0 : R[n]) == null ? void 0 : N[g]) || d, S = v.useMemo(() => O, Object.values(O));
      return /* @__PURE__ */ P.jsx(y.Provider, { value: S, children: E });
    };
    m.displayName = u + "Provider";
    function w(_, R) {
      var y;
      const E = ((y = R == null ? void 0 : R[n]) == null ? void 0 : y[g]) || d, O = v.useContext(E);
      if (O)
        return O;
      if (f !== void 0)
        return f;
      throw new Error(`\`${_}\` must be used within \`${u}\``);
    }
    return [m, w];
  }
  const c = () => {
    const u = r.map((f) => v.createContext(f));
    return function(d) {
      const g = (d == null ? void 0 : d[n]) || u;
      return v.useMemo(
        () => ({ [`__scope${n}`]: { ...d, [n]: g } }),
        [d, g]
      );
    };
  };
  return c.scopeName = n, [s, ob(c, ...i)];
}
function ob(...n) {
  const i = n[0];
  if (n.length === 1)
    return i;
  const r = () => {
    const s = n.map((c) => ({
      useScope: c(),
      scopeName: c.scopeName
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
var ib = v.createContext(void 0);
function sb(n) {
  const i = v.useContext(ib);
  return n || i || "ltr";
}
var ab = [
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
], Ke = ab.reduce((n, i) => {
  const r = v.forwardRef((s, c) => {
    const { asChild: u, ...f } = s, d = u ? Er : i;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ P.jsx(d, { ...f, ref: c });
  });
  return r.displayName = `Primitive.${i}`, { ...n, [i]: r };
}, {});
function cb(n, i) {
  n && Ti.flushSync(() => n.dispatchEvent(i));
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
function lb(n, i = globalThis == null ? void 0 : globalThis.document) {
  const r = vn(n);
  v.useEffect(() => {
    const s = (c) => {
      c.key === "Escape" && r(c);
    };
    return i.addEventListener("keydown", s, { capture: !0 }), () => i.removeEventListener("keydown", s, { capture: !0 });
  }, [r, i]);
}
var ub = "DismissableLayer", Ea = "dismissableLayer.update", fb = "dismissableLayer.pointerDownOutside", db = "dismissableLayer.focusOutside", Ou, pf = v.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Ba = v.forwardRef(
  (n, i) => {
    const {
      disableOutsidePointerEvents: r = !1,
      onEscapeKeyDown: s,
      onPointerDownOutside: c,
      onFocusOutside: u,
      onInteractOutside: f,
      onDismiss: d,
      ...g
    } = n, m = v.useContext(pf), [w, _] = v.useState(null), R = (w == null ? void 0 : w.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, E] = v.useState({}), O = Ye(i, ($) => _($)), y = Array.from(m.layers), [S] = [...m.layersWithOutsidePointerEventsDisabled].slice(-1), N = y.indexOf(S), I = w ? y.indexOf(w) : -1, M = m.layersWithOutsidePointerEventsDisabled.size > 0, B = I >= N, U = gb(($) => {
      const ee = $.target, ue = [...m.branches].some((he) => he.contains(ee));
      !B || ue || (c == null || c($), f == null || f($), $.defaultPrevented || d == null || d());
    }, R), V = vb(($) => {
      const ee = $.target;
      [...m.branches].some((he) => he.contains(ee)) || (u == null || u($), f == null || f($), $.defaultPrevented || d == null || d());
    }, R);
    return lb(($) => {
      I === m.layers.size - 1 && (s == null || s($), !$.defaultPrevented && d && ($.preventDefault(), d()));
    }, R), v.useEffect(() => {
      if (w)
        return r && (m.layersWithOutsidePointerEventsDisabled.size === 0 && (Ou = R.body.style.pointerEvents, R.body.style.pointerEvents = "none"), m.layersWithOutsidePointerEventsDisabled.add(w)), m.layers.add(w), Iu(), () => {
          r && m.layersWithOutsidePointerEventsDisabled.size === 1 && (R.body.style.pointerEvents = Ou);
        };
    }, [w, R, r, m]), v.useEffect(() => () => {
      w && (m.layers.delete(w), m.layersWithOutsidePointerEventsDisabled.delete(w), Iu());
    }, [w, m]), v.useEffect(() => {
      const $ = () => E({});
      return document.addEventListener(Ea, $), () => document.removeEventListener(Ea, $);
    }, []), /* @__PURE__ */ P.jsx(
      Ke.div,
      {
        ...g,
        ref: O,
        style: {
          pointerEvents: M ? B ? "auto" : "none" : void 0,
          ...n.style
        },
        onFocusCapture: De(n.onFocusCapture, V.onFocusCapture),
        onBlurCapture: De(n.onBlurCapture, V.onBlurCapture),
        onPointerDownCapture: De(
          n.onPointerDownCapture,
          U.onPointerDownCapture
        )
      }
    );
  }
);
Ba.displayName = ub;
var pb = "DismissableLayerBranch", hb = v.forwardRef((n, i) => {
  const r = v.useContext(pf), s = v.useRef(null), c = Ye(i, s);
  return v.useEffect(() => {
    const u = s.current;
    if (u)
      return r.branches.add(u), () => {
        r.branches.delete(u);
      };
  }, [r.branches]), /* @__PURE__ */ P.jsx(Ke.div, { ...n, ref: c });
});
hb.displayName = pb;
function gb(n, i = globalThis == null ? void 0 : globalThis.document) {
  const r = vn(n), s = v.useRef(!1), c = v.useRef(() => {
  });
  return v.useEffect(() => {
    const u = (d) => {
      if (d.target && !s.current) {
        let g = function() {
          hf(
            fb,
            r,
            m,
            { discrete: !0 }
          );
        };
        const m = { originalEvent: d };
        d.pointerType === "touch" ? (i.removeEventListener("click", c.current), c.current = g, i.addEventListener("click", c.current, { once: !0 })) : g();
      } else
        i.removeEventListener("click", c.current);
      s.current = !1;
    }, f = window.setTimeout(() => {
      i.addEventListener("pointerdown", u);
    }, 0);
    return () => {
      window.clearTimeout(f), i.removeEventListener("pointerdown", u), i.removeEventListener("click", c.current);
    };
  }, [i, r]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => s.current = !0
  };
}
function vb(n, i = globalThis == null ? void 0 : globalThis.document) {
  const r = vn(n), s = v.useRef(!1);
  return v.useEffect(() => {
    const c = (u) => {
      u.target && !s.current && hf(db, r, { originalEvent: u }, {
        discrete: !1
      });
    };
    return i.addEventListener("focusin", c), () => i.removeEventListener("focusin", c);
  }, [i, r]), {
    onFocusCapture: () => s.current = !0,
    onBlurCapture: () => s.current = !1
  };
}
function Iu() {
  const n = new CustomEvent(Ea);
  document.dispatchEvent(n);
}
function hf(n, i, r, { discrete: s }) {
  const c = r.originalEvent.target, u = new CustomEvent(n, { bubbles: !1, cancelable: !0, detail: r });
  i && c.addEventListener(n, i, { once: !0 }), s ? cb(c, u) : c.dispatchEvent(u);
}
var la = 0;
function mb() {
  v.useEffect(() => {
    const n = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", n[0] ?? Nu()), document.body.insertAdjacentElement("beforeend", n[1] ?? Nu()), la++, () => {
      la === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((i) => i.remove()), la--;
    };
  }, []);
}
function Nu() {
  const n = document.createElement("span");
  return n.setAttribute("data-radix-focus-guard", ""), n.tabIndex = 0, n.style.outline = "none", n.style.opacity = "0", n.style.position = "fixed", n.style.pointerEvents = "none", n;
}
var ua = "focusScope.autoFocusOnMount", fa = "focusScope.autoFocusOnUnmount", Lu = { bubbles: !1, cancelable: !0 }, xb = "FocusScope", gf = v.forwardRef((n, i) => {
  const {
    loop: r = !1,
    trapped: s = !1,
    onMountAutoFocus: c,
    onUnmountAutoFocus: u,
    ...f
  } = n, [d, g] = v.useState(null), m = vn(c), w = vn(u), _ = v.useRef(null), R = Ye(i, (y) => g(y)), E = v.useRef({
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
        if (E.paused || !d)
          return;
        const B = M.target;
        d.contains(B) ? _.current = B : Ln(_.current, { select: !0 });
      }, S = function(M) {
        if (E.paused || !d)
          return;
        const B = M.relatedTarget;
        B !== null && (d.contains(B) || Ln(_.current, { select: !0 }));
      }, N = function(M) {
        if (document.activeElement === document.body)
          for (const U of M)
            U.removedNodes.length > 0 && Ln(d);
      };
      document.addEventListener("focusin", y), document.addEventListener("focusout", S);
      const I = new MutationObserver(N);
      return d && I.observe(d, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", y), document.removeEventListener("focusout", S), I.disconnect();
      };
    }
  }, [s, d, E.paused]), v.useEffect(() => {
    if (d) {
      Du.add(E);
      const y = document.activeElement;
      if (!d.contains(y)) {
        const N = new CustomEvent(ua, Lu);
        d.addEventListener(ua, m), d.dispatchEvent(N), N.defaultPrevented || (wb(Sb(vf(d)), { select: !0 }), document.activeElement === y && Ln(d));
      }
      return () => {
        d.removeEventListener(ua, m), setTimeout(() => {
          const N = new CustomEvent(fa, Lu);
          d.addEventListener(fa, w), d.dispatchEvent(N), N.defaultPrevented || Ln(y ?? document.body, { select: !0 }), d.removeEventListener(fa, w), Du.remove(E);
        }, 0);
      };
    }
  }, [d, m, w, E]);
  const O = v.useCallback(
    (y) => {
      if (!r && !s || E.paused)
        return;
      const S = y.key === "Tab" && !y.altKey && !y.ctrlKey && !y.metaKey, N = document.activeElement;
      if (S && N) {
        const I = y.currentTarget, [M, B] = yb(I);
        M && B ? !y.shiftKey && N === B ? (y.preventDefault(), r && Ln(M, { select: !0 })) : y.shiftKey && N === M && (y.preventDefault(), r && Ln(B, { select: !0 })) : N === I && y.preventDefault();
      }
    },
    [r, s, E.paused]
  );
  return /* @__PURE__ */ P.jsx(Ke.div, { tabIndex: -1, ...f, ref: R, onKeyDown: O });
});
gf.displayName = xb;
function wb(n, { select: i = !1 } = {}) {
  const r = document.activeElement;
  for (const s of n)
    if (Ln(s, { select: i }), document.activeElement !== r)
      return;
}
function yb(n) {
  const i = vf(n), r = Mu(i, n), s = Mu(i.reverse(), n);
  return [r, s];
}
function vf(n) {
  const i = [], r = document.createTreeWalker(n, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (s) => {
      const c = s.tagName === "INPUT" && s.type === "hidden";
      return s.disabled || s.hidden || c ? NodeFilter.FILTER_SKIP : s.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; r.nextNode(); )
    i.push(r.currentNode);
  return i;
}
function Mu(n, i) {
  for (const r of n)
    if (!bb(r, { upTo: i }))
      return r;
}
function bb(n, { upTo: i }) {
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
function _b(n) {
  return n instanceof HTMLInputElement && "select" in n;
}
function Ln(n, { select: i = !1 } = {}) {
  if (n && n.focus) {
    const r = document.activeElement;
    n.focus({ preventScroll: !0 }), n !== r && _b(n) && i && n.select();
  }
}
var Du = Cb();
function Cb() {
  let n = [];
  return {
    add(i) {
      const r = n[0];
      i !== r && (r == null || r.pause()), n = ku(n, i), n.unshift(i);
    },
    remove(i) {
      var r;
      n = ku(n, i), (r = n[0]) == null || r.resume();
    }
  };
}
function ku(n, i) {
  const r = [...n], s = r.indexOf(i);
  return s !== -1 && r.splice(s, 1), r;
}
function Sb(n) {
  return n.filter((i) => i.tagName !== "A");
}
var ht = globalThis != null && globalThis.document ? v.useLayoutEffect : () => {
}, Eb = v.useId || (() => {
}), Rb = 0;
function Pi(n) {
  const [i, r] = v.useState(Eb());
  return ht(() => {
    r((s) => s ?? String(Rb++));
  }, [n]), i ? `radix-${i}` : "";
}
const Ab = ["top", "right", "bottom", "left"], Dn = Math.min, At = Math.max, _i = Math.round, fi = Math.floor, Qt = (n) => ({
  x: n,
  y: n
}), Tb = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Pb = {
  start: "end",
  end: "start"
};
function Ra(n, i, r) {
  return At(n, Dn(i, r));
}
function mn(n, i) {
  return typeof n == "function" ? n(i) : n;
}
function xn(n) {
  return n.split("-")[0];
}
function Pr(n) {
  return n.split("-")[1];
}
function ja(n) {
  return n === "x" ? "y" : "x";
}
function Ua(n) {
  return n === "y" ? "height" : "width";
}
function kn(n) {
  return ["top", "bottom"].includes(xn(n)) ? "y" : "x";
}
function $a(n) {
  return ja(kn(n));
}
function Ob(n, i, r) {
  r === void 0 && (r = !1);
  const s = Pr(n), c = $a(n), u = Ua(c);
  let f = c === "x" ? s === (r ? "end" : "start") ? "right" : "left" : s === "start" ? "bottom" : "top";
  return i.reference[u] > i.floating[u] && (f = Ci(f)), [f, Ci(f)];
}
function Ib(n) {
  const i = Ci(n);
  return [Aa(n), i, Aa(i)];
}
function Aa(n) {
  return n.replace(/start|end/g, (i) => Pb[i]);
}
function Nb(n, i, r) {
  const s = ["left", "right"], c = ["right", "left"], u = ["top", "bottom"], f = ["bottom", "top"];
  switch (n) {
    case "top":
    case "bottom":
      return r ? i ? c : s : i ? s : c;
    case "left":
    case "right":
      return i ? u : f;
    default:
      return [];
  }
}
function Lb(n, i, r, s) {
  const c = Pr(n);
  let u = Nb(xn(n), r === "start", s);
  return c && (u = u.map((f) => f + "-" + c), i && (u = u.concat(u.map(Aa)))), u;
}
function Ci(n) {
  return n.replace(/left|right|bottom|top/g, (i) => Tb[i]);
}
function Mb(n) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...n
  };
}
function mf(n) {
  return typeof n != "number" ? Mb(n) : {
    top: n,
    right: n,
    bottom: n,
    left: n
  };
}
function Si(n) {
  const {
    x: i,
    y: r,
    width: s,
    height: c
  } = n;
  return {
    width: s,
    height: c,
    top: r,
    left: i,
    right: i + s,
    bottom: r + c,
    x: i,
    y: r
  };
}
function Fu(n, i, r) {
  let {
    reference: s,
    floating: c
  } = n;
  const u = kn(i), f = $a(i), d = Ua(f), g = xn(i), m = u === "y", w = s.x + s.width / 2 - c.width / 2, _ = s.y + s.height / 2 - c.height / 2, R = s[d] / 2 - c[d] / 2;
  let E;
  switch (g) {
    case "top":
      E = {
        x: w,
        y: s.y - c.height
      };
      break;
    case "bottom":
      E = {
        x: w,
        y: s.y + s.height
      };
      break;
    case "right":
      E = {
        x: s.x + s.width,
        y: _
      };
      break;
    case "left":
      E = {
        x: s.x - c.width,
        y: _
      };
      break;
    default:
      E = {
        x: s.x,
        y: s.y
      };
  }
  switch (Pr(i)) {
    case "start":
      E[f] -= R * (r && m ? -1 : 1);
      break;
    case "end":
      E[f] += R * (r && m ? -1 : 1);
      break;
  }
  return E;
}
const Db = async (n, i, r) => {
  const {
    placement: s = "bottom",
    strategy: c = "absolute",
    middleware: u = [],
    platform: f
  } = r, d = u.filter(Boolean), g = await (f.isRTL == null ? void 0 : f.isRTL(i));
  let m = await f.getElementRects({
    reference: n,
    floating: i,
    strategy: c
  }), {
    x: w,
    y: _
  } = Fu(m, s, g), R = s, E = {}, O = 0;
  for (let y = 0; y < d.length; y++) {
    const {
      name: S,
      fn: N
    } = d[y], {
      x: I,
      y: M,
      data: B,
      reset: U
    } = await N({
      x: w,
      y: _,
      initialPlacement: s,
      placement: R,
      strategy: c,
      middlewareData: E,
      rects: m,
      platform: f,
      elements: {
        reference: n,
        floating: i
      }
    });
    w = I ?? w, _ = M ?? _, E = {
      ...E,
      [S]: {
        ...E[S],
        ...B
      }
    }, U && O <= 50 && (O++, typeof U == "object" && (U.placement && (R = U.placement), U.rects && (m = U.rects === !0 ? await f.getElementRects({
      reference: n,
      floating: i,
      strategy: c
    }) : U.rects), {
      x: w,
      y: _
    } = Fu(m, R, g)), y = -1);
  }
  return {
    x: w,
    y: _,
    placement: R,
    strategy: c,
    middlewareData: E
  };
};
async function uo(n, i) {
  var r;
  i === void 0 && (i = {});
  const {
    x: s,
    y: c,
    platform: u,
    rects: f,
    elements: d,
    strategy: g
  } = n, {
    boundary: m = "clippingAncestors",
    rootBoundary: w = "viewport",
    elementContext: _ = "floating",
    altBoundary: R = !1,
    padding: E = 0
  } = mn(i, n), O = mf(E), S = d[R ? _ === "floating" ? "reference" : "floating" : _], N = Si(await u.getClippingRect({
    element: (r = await (u.isElement == null ? void 0 : u.isElement(S))) == null || r ? S : S.contextElement || await (u.getDocumentElement == null ? void 0 : u.getDocumentElement(d.floating)),
    boundary: m,
    rootBoundary: w,
    strategy: g
  })), I = _ === "floating" ? {
    x: s,
    y: c,
    width: f.floating.width,
    height: f.floating.height
  } : f.reference, M = await (u.getOffsetParent == null ? void 0 : u.getOffsetParent(d.floating)), B = await (u.isElement == null ? void 0 : u.isElement(M)) ? await (u.getScale == null ? void 0 : u.getScale(M)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, U = Si(u.convertOffsetParentRelativeRectToViewportRelativeRect ? await u.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: d,
    rect: I,
    offsetParent: M,
    strategy: g
  }) : I);
  return {
    top: (N.top - U.top + O.top) / B.y,
    bottom: (U.bottom - N.bottom + O.bottom) / B.y,
    left: (N.left - U.left + O.left) / B.x,
    right: (U.right - N.right + O.right) / B.x
  };
}
const kb = (n) => ({
  name: "arrow",
  options: n,
  async fn(i) {
    const {
      x: r,
      y: s,
      placement: c,
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
    const _ = mf(w), R = {
      x: r,
      y: s
    }, E = $a(c), O = Ua(E), y = await f.getDimensions(m), S = E === "y", N = S ? "top" : "left", I = S ? "bottom" : "right", M = S ? "clientHeight" : "clientWidth", B = u.reference[O] + u.reference[E] - R[E] - u.floating[O], U = R[E] - u.reference[E], V = await (f.getOffsetParent == null ? void 0 : f.getOffsetParent(m));
    let $ = V ? V[M] : 0;
    (!$ || !await (f.isElement == null ? void 0 : f.isElement(V))) && ($ = d.floating[M] || u.floating[O]);
    const ee = B / 2 - U / 2, ue = $ / 2 - y[O] / 2 - 1, he = Dn(_[N], ue), Ce = Dn(_[I], ue), q = he, re = $ - y[O] - Ce, ne = $ / 2 - y[O] / 2 + ee, Se = Ra(q, ne, re), oe = !g.arrow && Pr(c) != null && ne !== Se && u.reference[O] / 2 - (ne < q ? he : Ce) - y[O] / 2 < 0, se = oe ? ne < q ? ne - q : ne - re : 0;
    return {
      [E]: R[E] + se,
      data: {
        [E]: Se,
        centerOffset: ne - Se - se,
        ...oe && {
          alignmentOffset: se
        }
      },
      reset: oe
    };
  }
}), Fb = function(n) {
  return n === void 0 && (n = {}), {
    name: "flip",
    options: n,
    async fn(i) {
      var r, s;
      const {
        placement: c,
        middlewareData: u,
        rects: f,
        initialPlacement: d,
        platform: g,
        elements: m
      } = i, {
        mainAxis: w = !0,
        crossAxis: _ = !0,
        fallbackPlacements: R,
        fallbackStrategy: E = "bestFit",
        fallbackAxisSideDirection: O = "none",
        flipAlignment: y = !0,
        ...S
      } = mn(n, i);
      if ((r = u.arrow) != null && r.alignmentOffset)
        return {};
      const N = xn(c), I = kn(d), M = xn(d) === d, B = await (g.isRTL == null ? void 0 : g.isRTL(m.floating)), U = R || (M || !y ? [Ci(d)] : Ib(d)), V = O !== "none";
      !R && V && U.push(...Lb(d, y, O, B));
      const $ = [d, ...U], ee = await uo(i, S), ue = [];
      let he = ((s = u.flip) == null ? void 0 : s.overflows) || [];
      if (w && ue.push(ee[N]), _) {
        const ne = Ob(c, f, B);
        ue.push(ee[ne[0]], ee[ne[1]]);
      }
      if (he = [...he, {
        placement: c,
        overflows: ue
      }], !ue.every((ne) => ne <= 0)) {
        var Ce, q;
        const ne = (((Ce = u.flip) == null ? void 0 : Ce.index) || 0) + 1, Se = $[ne];
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
          switch (E) {
            case "bestFit": {
              var re;
              const se = (re = he.filter((Y) => {
                if (V) {
                  const ve = kn(Y.placement);
                  return ve === I || // Create a bias to the `y` side axis due to horizontal
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
        if (c !== oe)
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
function Wu(n, i) {
  return {
    top: n.top - i.height,
    right: n.right - i.width,
    bottom: n.bottom - i.height,
    left: n.left - i.width
  };
}
function Bu(n) {
  return Ab.some((i) => n[i] >= 0);
}
const Wb = function(n) {
  return n === void 0 && (n = {}), {
    name: "hide",
    options: n,
    async fn(i) {
      const {
        rects: r
      } = i, {
        strategy: s = "referenceHidden",
        ...c
      } = mn(n, i);
      switch (s) {
        case "referenceHidden": {
          const u = await uo(i, {
            ...c,
            elementContext: "reference"
          }), f = Wu(u, r.reference);
          return {
            data: {
              referenceHiddenOffsets: f,
              referenceHidden: Bu(f)
            }
          };
        }
        case "escaped": {
          const u = await uo(i, {
            ...c,
            altBoundary: !0
          }), f = Wu(u, r.floating);
          return {
            data: {
              escapedOffsets: f,
              escaped: Bu(f)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function Bb(n, i) {
  const {
    placement: r,
    platform: s,
    elements: c
  } = n, u = await (s.isRTL == null ? void 0 : s.isRTL(c.floating)), f = xn(r), d = Pr(r), g = kn(r) === "y", m = ["left", "top"].includes(f) ? -1 : 1, w = u && g ? -1 : 1, _ = mn(i, n);
  let {
    mainAxis: R,
    crossAxis: E,
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
  return d && typeof O == "number" && (E = d === "end" ? O * -1 : O), g ? {
    x: E * w,
    y: R * m
  } : {
    x: R * m,
    y: E * w
  };
}
const jb = function(n) {
  return n === void 0 && (n = 0), {
    name: "offset",
    options: n,
    async fn(i) {
      var r, s;
      const {
        x: c,
        y: u,
        placement: f,
        middlewareData: d
      } = i, g = await Bb(i, n);
      return f === ((r = d.offset) == null ? void 0 : r.placement) && (s = d.arrow) != null && s.alignmentOffset ? {} : {
        x: c + g.x,
        y: u + g.y,
        data: {
          ...g,
          placement: f
        }
      };
    }
  };
}, Ub = function(n) {
  return n === void 0 && (n = {}), {
    name: "shift",
    options: n,
    async fn(i) {
      const {
        x: r,
        y: s,
        placement: c
      } = i, {
        mainAxis: u = !0,
        crossAxis: f = !1,
        limiter: d = {
          fn: (S) => {
            let {
              x: N,
              y: I
            } = S;
            return {
              x: N,
              y: I
            };
          }
        },
        ...g
      } = mn(n, i), m = {
        x: r,
        y: s
      }, w = await uo(i, g), _ = kn(xn(c)), R = ja(_);
      let E = m[R], O = m[_];
      if (u) {
        const S = R === "y" ? "top" : "left", N = R === "y" ? "bottom" : "right", I = E + w[S], M = E - w[N];
        E = Ra(I, E, M);
      }
      if (f) {
        const S = _ === "y" ? "top" : "left", N = _ === "y" ? "bottom" : "right", I = O + w[S], M = O - w[N];
        O = Ra(I, O, M);
      }
      const y = d.fn({
        ...i,
        [R]: E,
        [_]: O
      });
      return {
        ...y,
        data: {
          x: y.x - r,
          y: y.y - s,
          enabled: {
            [R]: u,
            [_]: f
          }
        }
      };
    }
  };
}, $b = function(n) {
  return n === void 0 && (n = {}), {
    options: n,
    fn(i) {
      const {
        x: r,
        y: s,
        placement: c,
        rects: u,
        middlewareData: f
      } = i, {
        offset: d = 0,
        mainAxis: g = !0,
        crossAxis: m = !0
      } = mn(n, i), w = {
        x: r,
        y: s
      }, _ = kn(c), R = ja(_);
      let E = w[R], O = w[_];
      const y = mn(d, i), S = typeof y == "number" ? {
        mainAxis: y,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...y
      };
      if (g) {
        const M = R === "y" ? "height" : "width", B = u.reference[R] - u.floating[M] + S.mainAxis, U = u.reference[R] + u.reference[M] - S.mainAxis;
        E < B ? E = B : E > U && (E = U);
      }
      if (m) {
        var N, I;
        const M = R === "y" ? "width" : "height", B = ["top", "left"].includes(xn(c)), U = u.reference[_] - u.floating[M] + (B && ((N = f.offset) == null ? void 0 : N[_]) || 0) + (B ? 0 : S.crossAxis), V = u.reference[_] + u.reference[M] + (B ? 0 : ((I = f.offset) == null ? void 0 : I[_]) || 0) - (B ? S.crossAxis : 0);
        O < U ? O = U : O > V && (O = V);
      }
      return {
        [R]: E,
        [_]: O
      };
    }
  };
}, Hb = function(n) {
  return n === void 0 && (n = {}), {
    name: "size",
    options: n,
    async fn(i) {
      var r, s;
      const {
        placement: c,
        rects: u,
        platform: f,
        elements: d
      } = i, {
        apply: g = () => {
        },
        ...m
      } = mn(n, i), w = await uo(i, m), _ = xn(c), R = Pr(c), E = kn(c) === "y", {
        width: O,
        height: y
      } = u.floating;
      let S, N;
      _ === "top" || _ === "bottom" ? (S = _, N = R === (await (f.isRTL == null ? void 0 : f.isRTL(d.floating)) ? "start" : "end") ? "left" : "right") : (N = _, S = R === "end" ? "top" : "bottom");
      const I = y - w.top - w.bottom, M = O - w.left - w.right, B = Dn(y - w[S], I), U = Dn(O - w[N], M), V = !i.middlewareData.shift;
      let $ = B, ee = U;
      if ((r = i.middlewareData.shift) != null && r.enabled.x && (ee = M), (s = i.middlewareData.shift) != null && s.enabled.y && ($ = I), V && !R) {
        const he = At(w.left, 0), Ce = At(w.right, 0), q = At(w.top, 0), re = At(w.bottom, 0);
        E ? ee = O - 2 * (he !== 0 || Ce !== 0 ? he + Ce : At(w.left, w.right)) : $ = y - 2 * (q !== 0 || re !== 0 ? q + re : At(w.top, w.bottom));
      }
      await g({
        ...i,
        availableWidth: ee,
        availableHeight: $
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
function Oi() {
  return typeof window < "u";
}
function Or(n) {
  return xf(n) ? (n.nodeName || "").toLowerCase() : "#document";
}
function Tt(n) {
  var i;
  return (n == null || (i = n.ownerDocument) == null ? void 0 : i.defaultView) || window;
}
function tn(n) {
  var i;
  return (i = (xf(n) ? n.ownerDocument : n.document) || window.document) == null ? void 0 : i.documentElement;
}
function xf(n) {
  return Oi() ? n instanceof Node || n instanceof Tt(n).Node : !1;
}
function Vt(n) {
  return Oi() ? n instanceof Element || n instanceof Tt(n).Element : !1;
}
function en(n) {
  return Oi() ? n instanceof HTMLElement || n instanceof Tt(n).HTMLElement : !1;
}
function ju(n) {
  return !Oi() || typeof ShadowRoot > "u" ? !1 : n instanceof ShadowRoot || n instanceof Tt(n).ShadowRoot;
}
function ho(n) {
  const {
    overflow: i,
    overflowX: r,
    overflowY: s,
    display: c
  } = Kt(n);
  return /auto|scroll|overlay|hidden|clip/.test(i + s + r) && !["inline", "contents"].includes(c);
}
function zb(n) {
  return ["table", "td", "th"].includes(Or(n));
}
function Ii(n) {
  return [":popover-open", ":modal"].some((i) => {
    try {
      return n.matches(i);
    } catch {
      return !1;
    }
  });
}
function Ha(n) {
  const i = za(), r = Vt(n) ? Kt(n) : n;
  return r.transform !== "none" || r.perspective !== "none" || (r.containerType ? r.containerType !== "normal" : !1) || !i && (r.backdropFilter ? r.backdropFilter !== "none" : !1) || !i && (r.filter ? r.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((s) => (r.willChange || "").includes(s)) || ["paint", "layout", "strict", "content"].some((s) => (r.contain || "").includes(s));
}
function Gb(n) {
  let i = Fn(n);
  for (; en(i) && !Rr(i); ) {
    if (Ha(i))
      return i;
    if (Ii(i))
      return null;
    i = Fn(i);
  }
  return null;
}
function za() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Rr(n) {
  return ["html", "body", "#document"].includes(Or(n));
}
function Kt(n) {
  return Tt(n).getComputedStyle(n);
}
function Ni(n) {
  return Vt(n) ? {
    scrollLeft: n.scrollLeft,
    scrollTop: n.scrollTop
  } : {
    scrollLeft: n.scrollX,
    scrollTop: n.scrollY
  };
}
function Fn(n) {
  if (Or(n) === "html")
    return n;
  const i = (
    // Step into the shadow DOM of the parent of a slotted node.
    n.assignedSlot || // DOM Element detected.
    n.parentNode || // ShadowRoot detected.
    ju(n) && n.host || // Fallback.
    tn(n)
  );
  return ju(i) ? i.host : i;
}
function wf(n) {
  const i = Fn(n);
  return Rr(i) ? n.ownerDocument ? n.ownerDocument.body : n.body : en(i) && ho(i) ? i : wf(i);
}
function fo(n, i, r) {
  var s;
  i === void 0 && (i = []), r === void 0 && (r = !0);
  const c = wf(n), u = c === ((s = n.ownerDocument) == null ? void 0 : s.body), f = Tt(c);
  if (u) {
    const d = Ta(f);
    return i.concat(f, f.visualViewport || [], ho(c) ? c : [], d && r ? fo(d) : []);
  }
  return i.concat(c, fo(c, [], r));
}
function Ta(n) {
  return n.parent && Object.getPrototypeOf(n.parent) ? n.frameElement : null;
}
function yf(n) {
  const i = Kt(n);
  let r = parseFloat(i.width) || 0, s = parseFloat(i.height) || 0;
  const c = en(n), u = c ? n.offsetWidth : r, f = c ? n.offsetHeight : s, d = _i(r) !== u || _i(s) !== f;
  return d && (r = u, s = f), {
    width: r,
    height: s,
    $: d
  };
}
function Ga(n) {
  return Vt(n) ? n : n.contextElement;
}
function Cr(n) {
  const i = Ga(n);
  if (!en(i))
    return Qt(1);
  const r = i.getBoundingClientRect(), {
    width: s,
    height: c,
    $: u
  } = yf(i);
  let f = (u ? _i(r.width) : r.width) / s, d = (u ? _i(r.height) : r.height) / c;
  return (!f || !Number.isFinite(f)) && (f = 1), (!d || !Number.isFinite(d)) && (d = 1), {
    x: f,
    y: d
  };
}
const Vb = /* @__PURE__ */ Qt(0);
function bf(n) {
  const i = Tt(n);
  return !za() || !i.visualViewport ? Vb : {
    x: i.visualViewport.offsetLeft,
    y: i.visualViewport.offsetTop
  };
}
function Kb(n, i, r) {
  return i === void 0 && (i = !1), !r || i && r !== Tt(n) ? !1 : i;
}
function Jn(n, i, r, s) {
  i === void 0 && (i = !1), r === void 0 && (r = !1);
  const c = n.getBoundingClientRect(), u = Ga(n);
  let f = Qt(1);
  i && (s ? Vt(s) && (f = Cr(s)) : f = Cr(n));
  const d = Kb(u, r, s) ? bf(u) : Qt(0);
  let g = (c.left + d.x) / f.x, m = (c.top + d.y) / f.y, w = c.width / f.x, _ = c.height / f.y;
  if (u) {
    const R = Tt(u), E = s && Vt(s) ? Tt(s) : s;
    let O = R, y = Ta(O);
    for (; y && s && E !== O; ) {
      const S = Cr(y), N = y.getBoundingClientRect(), I = Kt(y), M = N.left + (y.clientLeft + parseFloat(I.paddingLeft)) * S.x, B = N.top + (y.clientTop + parseFloat(I.paddingTop)) * S.y;
      g *= S.x, m *= S.y, w *= S.x, _ *= S.y, g += M, m += B, O = Tt(y), y = Ta(O);
    }
  }
  return Si({
    width: w,
    height: _,
    x: g,
    y: m
  });
}
function Va(n, i) {
  const r = Ni(n).scrollLeft;
  return i ? i.left + r : Jn(tn(n)).left + r;
}
function _f(n, i, r) {
  r === void 0 && (r = !1);
  const s = n.getBoundingClientRect(), c = s.left + i.scrollLeft - (r ? 0 : (
    // RTL <body> scrollbar.
    Va(n, s)
  )), u = s.top + i.scrollTop;
  return {
    x: c,
    y: u
  };
}
function Yb(n) {
  let {
    elements: i,
    rect: r,
    offsetParent: s,
    strategy: c
  } = n;
  const u = c === "fixed", f = tn(s), d = i ? Ii(i.floating) : !1;
  if (s === f || d && u)
    return r;
  let g = {
    scrollLeft: 0,
    scrollTop: 0
  }, m = Qt(1);
  const w = Qt(0), _ = en(s);
  if ((_ || !_ && !u) && ((Or(s) !== "body" || ho(f)) && (g = Ni(s)), en(s))) {
    const E = Jn(s);
    m = Cr(s), w.x = E.x + s.clientLeft, w.y = E.y + s.clientTop;
  }
  const R = f && !_ && !u ? _f(f, g, !0) : Qt(0);
  return {
    width: r.width * m.x,
    height: r.height * m.y,
    x: r.x * m.x - g.scrollLeft * m.x + w.x + R.x,
    y: r.y * m.y - g.scrollTop * m.y + w.y + R.y
  };
}
function qb(n) {
  return Array.from(n.getClientRects());
}
function Xb(n) {
  const i = tn(n), r = Ni(n), s = n.ownerDocument.body, c = At(i.scrollWidth, i.clientWidth, s.scrollWidth, s.clientWidth), u = At(i.scrollHeight, i.clientHeight, s.scrollHeight, s.clientHeight);
  let f = -r.scrollLeft + Va(n);
  const d = -r.scrollTop;
  return Kt(s).direction === "rtl" && (f += At(i.clientWidth, s.clientWidth) - c), {
    width: c,
    height: u,
    x: f,
    y: d
  };
}
function Zb(n, i) {
  const r = Tt(n), s = tn(n), c = r.visualViewport;
  let u = s.clientWidth, f = s.clientHeight, d = 0, g = 0;
  if (c) {
    u = c.width, f = c.height;
    const m = za();
    (!m || m && i === "fixed") && (d = c.offsetLeft, g = c.offsetTop);
  }
  return {
    width: u,
    height: f,
    x: d,
    y: g
  };
}
function Jb(n, i) {
  const r = Jn(n, !0, i === "fixed"), s = r.top + n.clientTop, c = r.left + n.clientLeft, u = en(n) ? Cr(n) : Qt(1), f = n.clientWidth * u.x, d = n.clientHeight * u.y, g = c * u.x, m = s * u.y;
  return {
    width: f,
    height: d,
    x: g,
    y: m
  };
}
function Uu(n, i, r) {
  let s;
  if (i === "viewport")
    s = Zb(n, r);
  else if (i === "document")
    s = Xb(tn(n));
  else if (Vt(i))
    s = Jb(i, r);
  else {
    const c = bf(n);
    s = {
      x: i.x - c.x,
      y: i.y - c.y,
      width: i.width,
      height: i.height
    };
  }
  return Si(s);
}
function Cf(n, i) {
  const r = Fn(n);
  return r === i || !Vt(r) || Rr(r) ? !1 : Kt(r).position === "fixed" || Cf(r, i);
}
function Qb(n, i) {
  const r = i.get(n);
  if (r)
    return r;
  let s = fo(n, [], !1).filter((d) => Vt(d) && Or(d) !== "body"), c = null;
  const u = Kt(n).position === "fixed";
  let f = u ? Fn(n) : n;
  for (; Vt(f) && !Rr(f); ) {
    const d = Kt(f), g = Ha(f);
    !g && d.position === "fixed" && (c = null), (u ? !g && !c : !g && d.position === "static" && !!c && ["absolute", "fixed"].includes(c.position) || ho(f) && !g && Cf(n, f)) ? s = s.filter((w) => w !== f) : c = d, f = Fn(f);
  }
  return i.set(n, s), s;
}
function e0(n) {
  let {
    element: i,
    boundary: r,
    rootBoundary: s,
    strategy: c
  } = n;
  const f = [...r === "clippingAncestors" ? Ii(i) ? [] : Qb(i, this._c) : [].concat(r), s], d = f[0], g = f.reduce((m, w) => {
    const _ = Uu(i, w, c);
    return m.top = At(_.top, m.top), m.right = Dn(_.right, m.right), m.bottom = Dn(_.bottom, m.bottom), m.left = At(_.left, m.left), m;
  }, Uu(i, d, c));
  return {
    width: g.right - g.left,
    height: g.bottom - g.top,
    x: g.left,
    y: g.top
  };
}
function t0(n) {
  const {
    width: i,
    height: r
  } = yf(n);
  return {
    width: i,
    height: r
  };
}
function n0(n, i, r) {
  const s = en(i), c = tn(i), u = r === "fixed", f = Jn(n, !0, u, i);
  let d = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const g = Qt(0);
  if (s || !s && !u)
    if ((Or(i) !== "body" || ho(c)) && (d = Ni(i)), s) {
      const R = Jn(i, !0, u, i);
      g.x = R.x + i.clientLeft, g.y = R.y + i.clientTop;
    } else
      c && (g.x = Va(c));
  const m = c && !s && !u ? _f(c, d) : Qt(0), w = f.left + d.scrollLeft - g.x - m.x, _ = f.top + d.scrollTop - g.y - m.y;
  return {
    x: w,
    y: _,
    width: f.width,
    height: f.height
  };
}
function da(n) {
  return Kt(n).position === "static";
}
function $u(n, i) {
  if (!en(n) || Kt(n).position === "fixed")
    return null;
  if (i)
    return i(n);
  let r = n.offsetParent;
  return tn(n) === r && (r = r.ownerDocument.body), r;
}
function Sf(n, i) {
  const r = Tt(n);
  if (Ii(n))
    return r;
  if (!en(n)) {
    let c = Fn(n);
    for (; c && !Rr(c); ) {
      if (Vt(c) && !da(c))
        return c;
      c = Fn(c);
    }
    return r;
  }
  let s = $u(n, i);
  for (; s && zb(s) && da(s); )
    s = $u(s, i);
  return s && Rr(s) && da(s) && !Ha(s) ? r : s || Gb(n) || r;
}
const r0 = async function(n) {
  const i = this.getOffsetParent || Sf, r = this.getDimensions, s = await r(n.floating);
  return {
    reference: n0(n.reference, await i(n.floating), n.strategy),
    floating: {
      x: 0,
      y: 0,
      width: s.width,
      height: s.height
    }
  };
};
function o0(n) {
  return Kt(n).direction === "rtl";
}
const i0 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Yb,
  getDocumentElement: tn,
  getClippingRect: e0,
  getOffsetParent: Sf,
  getElementRects: r0,
  getClientRects: qb,
  getDimensions: t0,
  getScale: Cr,
  isElement: Vt,
  isRTL: o0
};
function s0(n, i) {
  let r = null, s;
  const c = tn(n);
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
      height: R
    } = n.getBoundingClientRect();
    if (d || i(), !_ || !R)
      return;
    const E = fi(w), O = fi(c.clientWidth - (m + _)), y = fi(c.clientHeight - (w + R)), S = fi(m), I = {
      rootMargin: -E + "px " + -O + "px " + -y + "px " + -S + "px",
      threshold: At(0, Dn(1, g)) || 1
    };
    let M = !0;
    function B(U) {
      const V = U[0].intersectionRatio;
      if (V !== g) {
        if (!M)
          return f();
        V ? f(!1, V) : s = setTimeout(() => {
          f(!1, 1e-7);
        }, 1e3);
      }
      M = !1;
    }
    try {
      r = new IntersectionObserver(B, {
        ...I,
        // Handle <iframe>s
        root: c.ownerDocument
      });
    } catch {
      r = new IntersectionObserver(B, I);
    }
    r.observe(n);
  }
  return f(!0), u;
}
function a0(n, i, r, s) {
  s === void 0 && (s = {});
  const {
    ancestorScroll: c = !0,
    ancestorResize: u = !0,
    elementResize: f = typeof ResizeObserver == "function",
    layoutShift: d = typeof IntersectionObserver == "function",
    animationFrame: g = !1
  } = s, m = Ga(n), w = c || u ? [...m ? fo(m) : [], ...fo(i)] : [];
  w.forEach((N) => {
    c && N.addEventListener("scroll", r, {
      passive: !0
    }), u && N.addEventListener("resize", r);
  });
  const _ = m && d ? s0(m, r) : null;
  let R = -1, E = null;
  f && (E = new ResizeObserver((N) => {
    let [I] = N;
    I && I.target === m && E && (E.unobserve(i), cancelAnimationFrame(R), R = requestAnimationFrame(() => {
      var M;
      (M = E) == null || M.observe(i);
    })), r();
  }), m && !g && E.observe(m), E.observe(i));
  let O, y = g ? Jn(n) : null;
  g && S();
  function S() {
    const N = Jn(n);
    y && (N.x !== y.x || N.y !== y.y || N.width !== y.width || N.height !== y.height) && r(), y = N, O = requestAnimationFrame(S);
  }
  return r(), () => {
    var N;
    w.forEach((I) => {
      c && I.removeEventListener("scroll", r), u && I.removeEventListener("resize", r);
    }), _ == null || _(), (N = E) == null || N.disconnect(), E = null, g && cancelAnimationFrame(O);
  };
}
const c0 = jb, l0 = Ub, u0 = Fb, f0 = Hb, d0 = Wb, Hu = kb, p0 = $b, h0 = (n, i, r) => {
  const s = /* @__PURE__ */ new Map(), c = {
    platform: i0,
    ...r
  }, u = {
    ...c.platform,
    _c: s
  };
  return Db(n, i, {
    ...c,
    platform: u
  });
};
var mi = typeof document < "u" ? Zw : Zu;
function Ei(n, i) {
  if (n === i)
    return !0;
  if (typeof n != typeof i)
    return !1;
  if (typeof n == "function" && n.toString() === i.toString())
    return !0;
  let r, s, c;
  if (n && i && typeof n == "object") {
    if (Array.isArray(n)) {
      if (r = n.length, r !== i.length)
        return !1;
      for (s = r; s-- !== 0; )
        if (!Ei(n[s], i[s]))
          return !1;
      return !0;
    }
    if (c = Object.keys(n), r = c.length, r !== Object.keys(i).length)
      return !1;
    for (s = r; s-- !== 0; )
      if (!{}.hasOwnProperty.call(i, c[s]))
        return !1;
    for (s = r; s-- !== 0; ) {
      const u = c[s];
      if (!(u === "_owner" && n.$$typeof) && !Ei(n[u], i[u]))
        return !1;
    }
    return !0;
  }
  return n !== n && i !== i;
}
function Ef(n) {
  return typeof window > "u" ? 1 : (n.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function zu(n, i) {
  const r = Ef(n);
  return Math.round(i * r) / r;
}
function pa(n) {
  const i = v.useRef(n);
  return mi(() => {
    i.current = n;
  }), i;
}
function g0(n) {
  n === void 0 && (n = {});
  const {
    placement: i = "bottom",
    strategy: r = "absolute",
    middleware: s = [],
    platform: c,
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
  }), [R, E] = v.useState(s);
  Ei(R, s) || E(s);
  const [O, y] = v.useState(null), [S, N] = v.useState(null), I = v.useCallback((Y) => {
    Y !== V.current && (V.current = Y, y(Y));
  }, []), M = v.useCallback((Y) => {
    Y !== $.current && ($.current = Y, N(Y));
  }, []), B = u || O, U = f || S, V = v.useRef(null), $ = v.useRef(null), ee = v.useRef(w), ue = g != null, he = pa(g), Ce = pa(c), q = pa(m), re = v.useCallback(() => {
    if (!V.current || !$.current)
      return;
    const Y = {
      placement: i,
      strategy: r,
      middleware: R
    };
    Ce.current && (Y.platform = Ce.current), h0(V.current, $.current, Y).then((ve) => {
      const ke = {
        ...ve,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: q.current !== !1
      };
      ne.current && !Ei(ee.current, ke) && (ee.current = ke, Ti.flushSync(() => {
        _(ke);
      }));
    });
  }, [R, i, r, Ce, q]);
  mi(() => {
    m === !1 && ee.current.isPositioned && (ee.current.isPositioned = !1, _((Y) => ({
      ...Y,
      isPositioned: !1
    })));
  }, [m]);
  const ne = v.useRef(!1);
  mi(() => (ne.current = !0, () => {
    ne.current = !1;
  }), []), mi(() => {
    if (B && (V.current = B), U && ($.current = U), B && U) {
      if (he.current)
        return he.current(B, U, re);
      re();
    }
  }, [B, U, re, he, ue]);
  const Se = v.useMemo(() => ({
    reference: V,
    floating: $,
    setReference: I,
    setFloating: M
  }), [I, M]), oe = v.useMemo(() => ({
    reference: B,
    floating: U
  }), [B, U]), se = v.useMemo(() => {
    const Y = {
      position: r,
      left: 0,
      top: 0
    };
    if (!oe.floating)
      return Y;
    const ve = zu(oe.floating, w.x), ke = zu(oe.floating, w.y);
    return d ? {
      ...Y,
      transform: "translate(" + ve + "px, " + ke + "px)",
      ...Ef(oe.floating) >= 1.5 && {
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
const v0 = (n) => {
  function i(r) {
    return {}.hasOwnProperty.call(r, "current");
  }
  return {
    name: "arrow",
    options: n,
    fn(r) {
      const {
        element: s,
        padding: c
      } = typeof n == "function" ? n(r) : n;
      return s && i(s) ? s.current != null ? Hu({
        element: s.current,
        padding: c
      }).fn(r) : {} : s ? Hu({
        element: s,
        padding: c
      }).fn(r) : {};
    }
  };
}, m0 = (n, i) => ({
  ...c0(n),
  options: [n, i]
}), x0 = (n, i) => ({
  ...l0(n),
  options: [n, i]
}), w0 = (n, i) => ({
  ...p0(n),
  options: [n, i]
}), y0 = (n, i) => ({
  ...u0(n),
  options: [n, i]
}), b0 = (n, i) => ({
  ...f0(n),
  options: [n, i]
}), _0 = (n, i) => ({
  ...d0(n),
  options: [n, i]
}), C0 = (n, i) => ({
  ...v0(n),
  options: [n, i]
});
var S0 = "Arrow", Rf = v.forwardRef((n, i) => {
  const { children: r, width: s = 10, height: c = 5, ...u } = n;
  return /* @__PURE__ */ P.jsx(
    Ke.svg,
    {
      ...u,
      ref: i,
      width: s,
      height: c,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: n.asChild ? r : /* @__PURE__ */ P.jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
Rf.displayName = S0;
var E0 = Rf;
function R0(n, i = []) {
  let r = [];
  function s(u, f) {
    const d = v.createContext(f), g = r.length;
    r = [...r, f];
    function m(_) {
      const { scope: R, children: E, ...O } = _, y = (R == null ? void 0 : R[n][g]) || d, S = v.useMemo(() => O, Object.values(O));
      return /* @__PURE__ */ P.jsx(y.Provider, { value: S, children: E });
    }
    function w(_, R) {
      const E = (R == null ? void 0 : R[n][g]) || d, O = v.useContext(E);
      if (O)
        return O;
      if (f !== void 0)
        return f;
      throw new Error(`\`${_}\` must be used within \`${u}\``);
    }
    return m.displayName = u + "Provider", [m, w];
  }
  const c = () => {
    const u = r.map((f) => v.createContext(f));
    return function(d) {
      const g = (d == null ? void 0 : d[n]) || u;
      return v.useMemo(
        () => ({ [`__scope${n}`]: { ...d, [n]: g } }),
        [d, g]
      );
    };
  };
  return c.scopeName = n, [s, A0(c, ...i)];
}
function A0(...n) {
  const i = n[0];
  if (n.length === 1)
    return i;
  const r = () => {
    const s = n.map((c) => ({
      useScope: c(),
      scopeName: c.scopeName
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
function T0(n) {
  const [i, r] = v.useState(void 0);
  return ht(() => {
    if (n) {
      r({ width: n.offsetWidth, height: n.offsetHeight });
      const s = new ResizeObserver((c) => {
        if (!Array.isArray(c) || !c.length)
          return;
        const u = c[0];
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
var Ka = "Popper", [Af, Li] = R0(Ka), [P0, Tf] = Af(Ka), Pf = (n) => {
  const { __scopePopper: i, children: r } = n, [s, c] = v.useState(null);
  return /* @__PURE__ */ P.jsx(P0, { scope: i, anchor: s, onAnchorChange: c, children: r });
};
Pf.displayName = Ka;
var Of = "PopperAnchor", If = v.forwardRef(
  (n, i) => {
    const { __scopePopper: r, virtualRef: s, ...c } = n, u = Tf(Of, r), f = v.useRef(null), d = Ye(i, f);
    return v.useEffect(() => {
      u.onAnchorChange((s == null ? void 0 : s.current) || f.current);
    }), s ? null : /* @__PURE__ */ P.jsx(Ke.div, { ...c, ref: d });
  }
);
If.displayName = Of;
var Ya = "PopperContent", [O0, I0] = Af(Ya), Nf = v.forwardRef(
  (n, i) => {
    var Z, me, Le, Re, be, xe;
    const {
      __scopePopper: r,
      side: s = "bottom",
      sideOffset: c = 0,
      align: u = "center",
      alignOffset: f = 0,
      arrowPadding: d = 0,
      avoidCollisions: g = !0,
      collisionBoundary: m = [],
      collisionPadding: w = 0,
      sticky: _ = "partial",
      hideWhenDetached: R = !1,
      updatePositionStrategy: E = "optimized",
      onPlaced: O,
      ...y
    } = n, S = Tf(Ya, r), [N, I] = v.useState(null), M = Ye(i, (Ze) => I(Ze)), [B, U] = v.useState(null), V = T0(B), $ = (V == null ? void 0 : V.width) ?? 0, ee = (V == null ? void 0 : V.height) ?? 0, ue = s + (u !== "center" ? "-" + u : ""), he = typeof w == "number" ? w : { top: 0, right: 0, bottom: 0, left: 0, ...w }, Ce = Array.isArray(m) ? m : [m], q = Ce.length > 0, re = {
      padding: he,
      boundary: Ce.filter(L0),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: q
    }, { refs: ne, floatingStyles: Se, placement: oe, isPositioned: se, middlewareData: Y } = g0({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: ue,
      whileElementsMounted: (...Ze) => a0(...Ze, {
        animationFrame: E === "always"
      }),
      elements: {
        reference: S.anchor
      },
      middleware: [
        m0({ mainAxis: c + ee, alignmentAxis: f }),
        g && x0({
          mainAxis: !0,
          crossAxis: !1,
          limiter: _ === "partial" ? w0() : void 0,
          ...re
        }),
        g && y0({ ...re }),
        b0({
          ...re,
          apply: ({ elements: Ze, rects: Be, availableWidth: st, availableHeight: wt }) => {
            const { width: Je, height: jn } = Be.reference, Bt = Ze.floating.style;
            Bt.setProperty("--radix-popper-available-width", `${st}px`), Bt.setProperty("--radix-popper-available-height", `${wt}px`), Bt.setProperty("--radix-popper-anchor-width", `${Je}px`), Bt.setProperty("--radix-popper-anchor-height", `${jn}px`);
          }
        }),
        B && C0({ element: B, padding: d }),
        M0({ arrowWidth: $, arrowHeight: ee }),
        R && _0({ strategy: "referenceHidden", ...re })
      ]
    }), [ve, ke] = Df(oe), Ee = vn(O);
    ht(() => {
      se && (Ee == null || Ee());
    }, [se, Ee]);
    const Yt = (Z = Y.arrow) == null ? void 0 : Z.x, qt = (me = Y.arrow) == null ? void 0 : me.y, Pt = ((Le = Y.arrow) == null ? void 0 : Le.centerOffset) !== 0, [ut, it] = v.useState();
    return ht(() => {
      N && it(window.getComputedStyle(N).zIndex);
    }, [N]), /* @__PURE__ */ P.jsx(
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
        children: /* @__PURE__ */ P.jsx(
          O0,
          {
            scope: r,
            placedSide: ve,
            onArrowChange: U,
            arrowX: Yt,
            arrowY: qt,
            shouldHideArrow: Pt,
            children: /* @__PURE__ */ P.jsx(
              Ke.div,
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
Nf.displayName = Ya;
var Lf = "PopperArrow", N0 = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, Mf = v.forwardRef(function(i, r) {
  const { __scopePopper: s, ...c } = i, u = I0(Lf, s), f = N0[u.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ P.jsx(
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
        children: /* @__PURE__ */ P.jsx(
          E0,
          {
            ...c,
            ref: r,
            style: {
              ...c.style,
              // ensures the element can be measured correctly (mostly for if SVG)
              display: "block"
            }
          }
        )
      }
    )
  );
});
Mf.displayName = Lf;
function L0(n) {
  return n !== null;
}
var M0 = (n) => ({
  name: "transformOrigin",
  options: n,
  fn(i) {
    var S, N, I;
    const { placement: r, rects: s, middlewareData: c } = i, f = ((S = c.arrow) == null ? void 0 : S.centerOffset) !== 0, d = f ? 0 : n.arrowWidth, g = f ? 0 : n.arrowHeight, [m, w] = Df(r), _ = { start: "0%", center: "50%", end: "100%" }[w], R = (((N = c.arrow) == null ? void 0 : N.x) ?? 0) + d / 2, E = (((I = c.arrow) == null ? void 0 : I.y) ?? 0) + g / 2;
    let O = "", y = "";
    return m === "bottom" ? (O = f ? _ : `${R}px`, y = `${-g}px`) : m === "top" ? (O = f ? _ : `${R}px`, y = `${s.floating.height + g}px`) : m === "right" ? (O = `${-g}px`, y = f ? _ : `${E}px`) : m === "left" && (O = `${s.floating.width + g}px`, y = f ? _ : `${E}px`), { data: { x: O, y } };
  }
});
function Df(n) {
  const [i, r = "center"] = n.split("-");
  return [i, r];
}
var kf = Pf, Ff = If, Wf = Nf, Bf = Mf, D0 = "Portal", jf = v.forwardRef((n, i) => {
  var d;
  const { container: r, ...s } = n, [c, u] = v.useState(!1);
  ht(() => u(!0), []);
  const f = r || c && ((d = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : d.body);
  return f ? Jw.createPortal(/* @__PURE__ */ P.jsx(Ke.div, { ...s, ref: i }), f) : null;
});
jf.displayName = D0;
function Pa({
  prop: n,
  defaultProp: i,
  onChange: r = () => {
  }
}) {
  const [s, c] = k0({ defaultProp: i, onChange: r }), u = n !== void 0, f = u ? n : s, d = vn(r), g = v.useCallback(
    (m) => {
      if (u) {
        const _ = typeof m == "function" ? m(n) : m;
        _ !== n && d(_);
      } else
        c(m);
    },
    [u, n, c, d]
  );
  return [f, g];
}
function k0({
  defaultProp: n,
  onChange: i
}) {
  const r = v.useState(n), [s] = r, c = v.useRef(s), u = vn(i);
  return v.useEffect(() => {
    c.current !== s && (u(s), c.current = s);
  }, [s, c, u]), r;
}
function F0(n) {
  const i = v.useRef({ value: n, previous: n });
  return v.useMemo(() => (i.current.value !== n && (i.current.previous = i.current.value, i.current.value = n), i.current.previous), [n]);
}
var W0 = "VisuallyHidden", qa = v.forwardRef(
  (n, i) => /* @__PURE__ */ P.jsx(
    Ke.span,
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
qa.displayName = W0;
var B0 = qa, j0 = function(n) {
  if (typeof document > "u")
    return null;
  var i = Array.isArray(n) ? n[0] : n;
  return i.ownerDocument.body;
}, wr = /* @__PURE__ */ new WeakMap(), di = /* @__PURE__ */ new WeakMap(), pi = {}, ha = 0, Uf = function(n) {
  return n && (n.host || Uf(n.parentNode));
}, U0 = function(n, i) {
  return i.map(function(r) {
    if (n.contains(r))
      return r;
    var s = Uf(r);
    return s && n.contains(s) ? s : (console.error("aria-hidden", r, "in not contained inside", n, ". Doing nothing"), null);
  }).filter(function(r) {
    return !!r;
  });
}, $0 = function(n, i, r, s) {
  var c = U0(i, Array.isArray(n) ? n : [n]);
  pi[r] || (pi[r] = /* @__PURE__ */ new WeakMap());
  var u = pi[r], f = [], d = /* @__PURE__ */ new Set(), g = new Set(c), m = function(_) {
    !_ || d.has(_) || (d.add(_), m(_.parentNode));
  };
  c.forEach(m);
  var w = function(_) {
    !_ || g.has(_) || Array.prototype.forEach.call(_.children, function(R) {
      if (d.has(R))
        w(R);
      else
        try {
          var E = R.getAttribute(s), O = E !== null && E !== "false", y = (wr.get(R) || 0) + 1, S = (u.get(R) || 0) + 1;
          wr.set(R, y), u.set(R, S), f.push(R), y === 1 && O && di.set(R, !0), S === 1 && R.setAttribute(r, "true"), O || R.setAttribute(s, "true");
        } catch (N) {
          console.error("aria-hidden: cannot operate on ", R, N);
        }
    });
  };
  return w(i), d.clear(), ha++, function() {
    f.forEach(function(_) {
      var R = wr.get(_) - 1, E = u.get(_) - 1;
      wr.set(_, R), u.set(_, E), R || (di.has(_) || _.removeAttribute(s), di.delete(_)), E || _.removeAttribute(r);
    }), ha--, ha || (wr = /* @__PURE__ */ new WeakMap(), wr = /* @__PURE__ */ new WeakMap(), di = /* @__PURE__ */ new WeakMap(), pi = {});
  };
}, H0 = function(n, i, r) {
  r === void 0 && (r = "data-aria-hidden");
  var s = Array.from(Array.isArray(n) ? n : [n]), c = j0(n);
  return c ? (s.push.apply(s, Array.from(c.querySelectorAll("[aria-live]"))), $0(s, c, r, "aria-hidden")) : function() {
    return null;
  };
}, Mn = function() {
  return Mn = Object.assign || function(i) {
    for (var r, s = 1, c = arguments.length; s < c; s++) {
      r = arguments[s];
      for (var u in r)
        Object.prototype.hasOwnProperty.call(r, u) && (i[u] = r[u]);
    }
    return i;
  }, Mn.apply(this, arguments);
};
function z0(n, i) {
  var r = {};
  for (var s in n)
    Object.prototype.hasOwnProperty.call(n, s) && i.indexOf(s) < 0 && (r[s] = n[s]);
  if (n != null && typeof Object.getOwnPropertySymbols == "function")
    for (var c = 0, s = Object.getOwnPropertySymbols(n); c < s.length; c++)
      i.indexOf(s[c]) < 0 && Object.prototype.propertyIsEnumerable.call(n, s[c]) && (r[s[c]] = n[s[c]]);
  return r;
}
function G0(n, i, r) {
  if (r || arguments.length === 2)
    for (var s = 0, c = i.length, u; s < c; s++)
      (u || !(s in i)) && (u || (u = Array.prototype.slice.call(i, 0, s)), u[s] = i[s]);
  return n.concat(u || Array.prototype.slice.call(i));
}
var xi = "right-scroll-bar-position", wi = "width-before-scroll-bar", V0 = "with-scroll-bars-hidden", K0 = "--removed-body-scroll-bar-size";
function ga(n, i) {
  return typeof n == "function" ? n(i) : n && (n.current = i), n;
}
function Y0(n, i) {
  var r = Xu(function() {
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
          var c = r.value;
          c !== s && (r.value = s, r.callback(s, c));
        }
      }
    };
  })[0];
  return r.callback = i, r.facade;
}
var q0 = typeof window < "u" ? v.useLayoutEffect : v.useEffect, Gu = /* @__PURE__ */ new WeakMap();
function X0(n, i) {
  var r = Y0(null, function(s) {
    return n.forEach(function(c) {
      return ga(c, s);
    });
  });
  return q0(function() {
    var s = Gu.get(r);
    if (s) {
      var c = new Set(s), u = new Set(n), f = r.current;
      c.forEach(function(d) {
        u.has(d) || ga(d, null);
      }), u.forEach(function(d) {
        c.has(d) || ga(d, f);
      });
    }
    Gu.set(r, n);
  }, [n]), r;
}
var Ri = function() {
  return Ri = Object.assign || function(i) {
    for (var r, s = 1, c = arguments.length; s < c; s++) {
      r = arguments[s];
      for (var u in r)
        Object.prototype.hasOwnProperty.call(r, u) && (i[u] = r[u]);
    }
    return i;
  }, Ri.apply(this, arguments);
};
function Z0(n, i) {
  var r = {};
  for (var s in n)
    Object.prototype.hasOwnProperty.call(n, s) && i.indexOf(s) < 0 && (r[s] = n[s]);
  if (n != null && typeof Object.getOwnPropertySymbols == "function")
    for (var c = 0, s = Object.getOwnPropertySymbols(n); c < s.length; c++)
      i.indexOf(s[c]) < 0 && Object.prototype.propertyIsEnumerable.call(n, s[c]) && (r[s[c]] = n[s[c]]);
  return r;
}
function J0(n) {
  return n;
}
function Q0(n, i) {
  i === void 0 && (i = J0);
  var r = [], s = !1, c = {
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
  return c;
}
function e_(n) {
  n === void 0 && (n = {});
  var i = Q0(null);
  return i.options = Ri({ async: !0, ssr: !1 }, n), i;
}
var $f = function(n) {
  var i = n.sideCar, r = Z0(n, ["sideCar"]);
  if (!i)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var s = i.read();
  if (!s)
    throw new Error("Sidecar medium not found");
  return v.createElement(s, Ri({}, r));
};
$f.isSideCarExport = !0;
function t_(n, i) {
  return n.useMedium(i), $f;
}
var Hf = e_(), va = function() {
}, Mi = v.forwardRef(function(n, i) {
  var r = v.useRef(null), s = v.useState({
    onScrollCapture: va,
    onWheelCapture: va,
    onTouchMoveCapture: va
  }), c = s[0], u = s[1], f = n.forwardProps, d = n.children, g = n.className, m = n.removeScrollBar, w = n.enabled, _ = n.shards, R = n.sideCar, E = n.noIsolation, O = n.inert, y = n.allowPinchZoom, S = n.as, N = S === void 0 ? "div" : S, I = n.gapMode, M = z0(n, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), B = R, U = X0([r, i]), V = Mn(Mn({}, M), c);
  return v.createElement(
    v.Fragment,
    null,
    w && v.createElement(B, { sideCar: Hf, removeScrollBar: m, shards: _, noIsolation: E, inert: O, setCallbacks: u, allowPinchZoom: !!y, lockRef: r, gapMode: I }),
    f ? v.cloneElement(v.Children.only(d), Mn(Mn({}, V), { ref: U })) : v.createElement(N, Mn({}, V, { className: g, ref: U }), d)
  );
});
Mi.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Mi.classNames = {
  fullWidth: wi,
  zeroRight: xi
};
var n_ = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function r_() {
  if (!document)
    return null;
  var n = document.createElement("style");
  n.type = "text/css";
  var i = n_();
  return i && n.setAttribute("nonce", i), n;
}
function o_(n, i) {
  n.styleSheet ? n.styleSheet.cssText = i : n.appendChild(document.createTextNode(i));
}
function i_(n) {
  var i = document.head || document.getElementsByTagName("head")[0];
  i.appendChild(n);
}
var s_ = function() {
  var n = 0, i = null;
  return {
    add: function(r) {
      n == 0 && (i = r_()) && (o_(i, r), i_(i)), n++;
    },
    remove: function() {
      n--, !n && i && (i.parentNode && i.parentNode.removeChild(i), i = null);
    }
  };
}, a_ = function() {
  var n = s_();
  return function(i, r) {
    v.useEffect(function() {
      return n.add(i), function() {
        n.remove();
      };
    }, [i && r]);
  };
}, zf = function() {
  var n = a_(), i = function(r) {
    var s = r.styles, c = r.dynamic;
    return n(s, c), null;
  };
  return i;
}, c_ = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, ma = function(n) {
  return parseInt(n || "", 10) || 0;
}, l_ = function(n) {
  var i = window.getComputedStyle(document.body), r = i[n === "padding" ? "paddingLeft" : "marginLeft"], s = i[n === "padding" ? "paddingTop" : "marginTop"], c = i[n === "padding" ? "paddingRight" : "marginRight"];
  return [ma(r), ma(s), ma(c)];
}, u_ = function(n) {
  if (n === void 0 && (n = "margin"), typeof window > "u")
    return c_;
  var i = l_(n), r = document.documentElement.clientWidth, s = window.innerWidth;
  return {
    left: i[0],
    top: i[1],
    right: i[2],
    gap: Math.max(0, s - r + i[2] - i[0])
  };
}, f_ = zf(), Sr = "data-scroll-locked", d_ = function(n, i, r, s) {
  var c = n.left, u = n.top, f = n.right, d = n.gap;
  return r === void 0 && (r = "margin"), `
  .`.concat(V0, ` {
   overflow: hidden `).concat(s, `;
   padding-right: `).concat(d, "px ").concat(s, `;
  }
  body[`).concat(Sr, `] {
    overflow: hidden `).concat(s, `;
    overscroll-behavior: contain;
    `).concat([
    i && "position: relative ".concat(s, ";"),
    r === "margin" && `
    padding-left: `.concat(c, `px;
    padding-top: `).concat(u, `px;
    padding-right: `).concat(f, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(d, "px ").concat(s, `;
    `),
    r === "padding" && "padding-right: ".concat(d, "px ").concat(s, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(xi, ` {
    right: `).concat(d, "px ").concat(s, `;
  }
  
  .`).concat(wi, ` {
    margin-right: `).concat(d, "px ").concat(s, `;
  }
  
  .`).concat(xi, " .").concat(xi, ` {
    right: 0 `).concat(s, `;
  }
  
  .`).concat(wi, " .").concat(wi, ` {
    margin-right: 0 `).concat(s, `;
  }
  
  body[`).concat(Sr, `] {
    `).concat(K0, ": ").concat(d, `px;
  }
`);
}, Vu = function() {
  var n = parseInt(document.body.getAttribute(Sr) || "0", 10);
  return isFinite(n) ? n : 0;
}, p_ = function() {
  v.useEffect(function() {
    return document.body.setAttribute(Sr, (Vu() + 1).toString()), function() {
      var n = Vu() - 1;
      n <= 0 ? document.body.removeAttribute(Sr) : document.body.setAttribute(Sr, n.toString());
    };
  }, []);
}, h_ = function(n) {
  var i = n.noRelative, r = n.noImportant, s = n.gapMode, c = s === void 0 ? "margin" : s;
  p_();
  var u = v.useMemo(function() {
    return u_(c);
  }, [c]);
  return v.createElement(f_, { styles: d_(u, !i, c, r ? "" : "!important") });
}, Oa = !1;
if (typeof window < "u")
  try {
    var hi = Object.defineProperty({}, "passive", {
      get: function() {
        return Oa = !0, !0;
      }
    });
    window.addEventListener("test", hi, hi), window.removeEventListener("test", hi, hi);
  } catch {
    Oa = !1;
  }
var yr = Oa ? { passive: !1 } : !1, g_ = function(n) {
  return n.tagName === "TEXTAREA";
}, Gf = function(n, i) {
  if (!(n instanceof Element))
    return !1;
  var r = window.getComputedStyle(n);
  return (
    // not-not-scrollable
    r[i] !== "hidden" && // contains scroll inside self
    !(r.overflowY === r.overflowX && !g_(n) && r[i] === "visible")
  );
}, v_ = function(n) {
  return Gf(n, "overflowY");
}, m_ = function(n) {
  return Gf(n, "overflowX");
}, Ku = function(n, i) {
  var r = i.ownerDocument, s = i;
  do {
    typeof ShadowRoot < "u" && s instanceof ShadowRoot && (s = s.host);
    var c = Vf(n, s);
    if (c) {
      var u = Kf(n, s), f = u[1], d = u[2];
      if (f > d)
        return !0;
    }
    s = s.parentNode;
  } while (s && s !== r.body);
  return !1;
}, x_ = function(n) {
  var i = n.scrollTop, r = n.scrollHeight, s = n.clientHeight;
  return [
    i,
    r,
    s
  ];
}, w_ = function(n) {
  var i = n.scrollLeft, r = n.scrollWidth, s = n.clientWidth;
  return [
    i,
    r,
    s
  ];
}, Vf = function(n, i) {
  return n === "v" ? v_(i) : m_(i);
}, Kf = function(n, i) {
  return n === "v" ? x_(i) : w_(i);
}, y_ = function(n, i) {
  return n === "h" && i === "rtl" ? -1 : 1;
}, b_ = function(n, i, r, s, c) {
  var u = y_(n, window.getComputedStyle(i).direction), f = u * s, d = r.target, g = i.contains(d), m = !1, w = f > 0, _ = 0, R = 0;
  do {
    var E = Kf(n, d), O = E[0], y = E[1], S = E[2], N = y - S - u * O;
    (O || N) && Vf(n, d) && (_ += N, R += O), d instanceof ShadowRoot ? d = d.host : d = d.parentNode;
  } while (
    // portaled content
    !g && d !== document.body || // self content
    g && (i.contains(d) || i === d)
  );
  return (w && (Math.abs(_) < 1 || !c) || !w && (Math.abs(R) < 1 || !c)) && (m = !0), m;
}, gi = function(n) {
  return "changedTouches" in n ? [n.changedTouches[0].clientX, n.changedTouches[0].clientY] : [0, 0];
}, Yu = function(n) {
  return [n.deltaX, n.deltaY];
}, qu = function(n) {
  return n && "current" in n ? n.current : n;
}, __ = function(n, i) {
  return n[0] === i[0] && n[1] === i[1];
}, C_ = function(n) {
  return `
  .block-interactivity-`.concat(n, ` {pointer-events: none;}
  .allow-interactivity-`).concat(n, ` {pointer-events: all;}
`);
}, S_ = 0, br = [];
function E_(n) {
  var i = v.useRef([]), r = v.useRef([0, 0]), s = v.useRef(), c = v.useState(S_++)[0], u = v.useState(zf)[0], f = v.useRef(n);
  v.useEffect(function() {
    f.current = n;
  }, [n]), v.useEffect(function() {
    if (n.inert) {
      document.body.classList.add("block-interactivity-".concat(c));
      var y = G0([n.lockRef.current], (n.shards || []).map(qu), !0).filter(Boolean);
      return y.forEach(function(S) {
        return S.classList.add("allow-interactivity-".concat(c));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(c)), y.forEach(function(S) {
          return S.classList.remove("allow-interactivity-".concat(c));
        });
      };
    }
  }, [n.inert, n.lockRef.current, n.shards]);
  var d = v.useCallback(function(y, S) {
    if ("touches" in y && y.touches.length === 2 || y.type === "wheel" && y.ctrlKey)
      return !f.current.allowPinchZoom;
    var N = gi(y), I = r.current, M = "deltaX" in y ? y.deltaX : I[0] - N[0], B = "deltaY" in y ? y.deltaY : I[1] - N[1], U, V = y.target, $ = Math.abs(M) > Math.abs(B) ? "h" : "v";
    if ("touches" in y && $ === "h" && V.type === "range")
      return !1;
    var ee = Ku($, V);
    if (!ee)
      return !0;
    if (ee ? U = $ : (U = $ === "v" ? "h" : "v", ee = Ku($, V)), !ee)
      return !1;
    if (!s.current && "changedTouches" in y && (M || B) && (s.current = U), !U)
      return !0;
    var ue = s.current || U;
    return b_(ue, S, y, ue === "h" ? M : B, !0);
  }, []), g = v.useCallback(function(y) {
    var S = y;
    if (!(!br.length || br[br.length - 1] !== u)) {
      var N = "deltaY" in S ? Yu(S) : gi(S), I = i.current.filter(function(U) {
        return U.name === S.type && (U.target === S.target || S.target === U.shadowParent) && __(U.delta, N);
      })[0];
      if (I && I.should) {
        S.cancelable && S.preventDefault();
        return;
      }
      if (!I) {
        var M = (f.current.shards || []).map(qu).filter(Boolean).filter(function(U) {
          return U.contains(S.target);
        }), B = M.length > 0 ? d(S, M[0]) : !f.current.noIsolation;
        B && S.cancelable && S.preventDefault();
      }
    }
  }, []), m = v.useCallback(function(y, S, N, I) {
    var M = { name: y, delta: S, target: N, should: I, shadowParent: R_(N) };
    i.current.push(M), setTimeout(function() {
      i.current = i.current.filter(function(B) {
        return B !== M;
      });
    }, 1);
  }, []), w = v.useCallback(function(y) {
    r.current = gi(y), s.current = void 0;
  }, []), _ = v.useCallback(function(y) {
    m(y.type, Yu(y), y.target, d(y, n.lockRef.current));
  }, []), R = v.useCallback(function(y) {
    m(y.type, gi(y), y.target, d(y, n.lockRef.current));
  }, []);
  v.useEffect(function() {
    return br.push(u), n.setCallbacks({
      onScrollCapture: _,
      onWheelCapture: _,
      onTouchMoveCapture: R
    }), document.addEventListener("wheel", g, yr), document.addEventListener("touchmove", g, yr), document.addEventListener("touchstart", w, yr), function() {
      br = br.filter(function(y) {
        return y !== u;
      }), document.removeEventListener("wheel", g, yr), document.removeEventListener("touchmove", g, yr), document.removeEventListener("touchstart", w, yr);
    };
  }, []);
  var E = n.removeScrollBar, O = n.inert;
  return v.createElement(
    v.Fragment,
    null,
    O ? v.createElement(u, { styles: C_(c) }) : null,
    E ? v.createElement(h_, { gapMode: n.gapMode }) : null
  );
}
function R_(n) {
  for (var i = null; n !== null; )
    n instanceof ShadowRoot && (i = n.host, n = n.host), n = n.parentNode;
  return i;
}
const A_ = t_(Hf, E_);
var Yf = v.forwardRef(function(n, i) {
  return v.createElement(Mi, Mn({}, n, { ref: i, sideCar: A_ }));
});
Yf.classNames = Mi.classNames;
var T_ = [" ", "Enter", "ArrowUp", "ArrowDown"], P_ = [" ", "Enter"], go = "Select", [Di, ki, O_] = rb(go), [Ir, LC] = df(go, [
  O_,
  Li
]), Fi = Li(), [I_, Wn] = Ir(go), [N_, L_] = Ir(go), qf = (n) => {
  const {
    __scopeSelect: i,
    children: r,
    open: s,
    defaultOpen: c,
    onOpenChange: u,
    value: f,
    defaultValue: d,
    onValueChange: g,
    dir: m,
    name: w,
    autoComplete: _,
    disabled: R,
    required: E,
    form: O
  } = n, y = Fi(i), [S, N] = v.useState(null), [I, M] = v.useState(null), [B, U] = v.useState(!1), V = sb(m), [$ = !1, ee] = Pa({
    prop: s,
    defaultProp: c,
    onChange: u
  }), [ue, he] = Pa({
    prop: f,
    defaultProp: d,
    onChange: g
  }), Ce = v.useRef(null), q = S ? O || !!S.closest("form") : !0, [re, ne] = v.useState(/* @__PURE__ */ new Set()), Se = Array.from(re).map((oe) => oe.props.value).join(";");
  return /* @__PURE__ */ P.jsx(kf, { ...y, children: /* @__PURE__ */ P.jsxs(
    I_,
    {
      required: E,
      scope: i,
      trigger: S,
      onTriggerChange: N,
      valueNode: I,
      onValueNodeChange: M,
      valueNodeHasChildren: B,
      onValueNodeHasChildrenChange: U,
      contentId: Pi(),
      value: ue,
      onValueChange: he,
      open: $,
      onOpenChange: ee,
      dir: V,
      triggerPointerDownPosRef: Ce,
      disabled: R,
      children: [
        /* @__PURE__ */ P.jsx(Di.Provider, { scope: i, children: /* @__PURE__ */ P.jsx(
          N_,
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
        q ? /* @__PURE__ */ P.jsxs(
          yd,
          {
            "aria-hidden": !0,
            required: E,
            tabIndex: -1,
            name: w,
            autoComplete: _,
            value: ue,
            onChange: (oe) => he(oe.target.value),
            disabled: R,
            form: O,
            children: [
              ue === void 0 ? /* @__PURE__ */ P.jsx("option", { value: "" }) : null,
              Array.from(re)
            ]
          },
          Se
        ) : null
      ]
    }
  ) });
};
qf.displayName = go;
var Xf = "SelectTrigger", Zf = v.forwardRef(
  (n, i) => {
    const { __scopeSelect: r, disabled: s = !1, ...c } = n, u = Fi(r), f = Wn(Xf, r), d = f.disabled || s, g = Ye(i, f.onTriggerChange), m = ki(r), w = v.useRef("touch"), [_, R, E] = bd((y) => {
      const S = m().filter((M) => !M.disabled), N = S.find((M) => M.value === f.value), I = _d(S, y, N);
      I !== void 0 && f.onValueChange(I.value);
    }), O = (y) => {
      d || (f.onOpenChange(!0), E()), y && (f.triggerPointerDownPosRef.current = {
        x: Math.round(y.pageX),
        y: Math.round(y.pageY)
      });
    };
    return /* @__PURE__ */ P.jsx(Ff, { asChild: !0, ...u, children: /* @__PURE__ */ P.jsx(
      Ke.button,
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
        "data-placeholder": wd(f.value) ? "" : void 0,
        ...c,
        ref: g,
        onClick: De(c.onClick, (y) => {
          y.currentTarget.focus(), w.current !== "mouse" && O(y);
        }),
        onPointerDown: De(c.onPointerDown, (y) => {
          w.current = y.pointerType;
          const S = y.target;
          S.hasPointerCapture(y.pointerId) && S.releasePointerCapture(y.pointerId), y.button === 0 && y.ctrlKey === !1 && y.pointerType === "mouse" && (O(y), y.preventDefault());
        }),
        onKeyDown: De(c.onKeyDown, (y) => {
          const S = _.current !== "";
          !(y.ctrlKey || y.altKey || y.metaKey) && y.key.length === 1 && R(y.key), !(S && y.key === " ") && T_.includes(y.key) && (O(), y.preventDefault());
        })
      }
    ) });
  }
);
Zf.displayName = Xf;
var Jf = "SelectValue", Qf = v.forwardRef(
  (n, i) => {
    const { __scopeSelect: r, className: s, style: c, children: u, placeholder: f = "", ...d } = n, g = Wn(Jf, r), { onValueNodeHasChildrenChange: m } = g, w = u !== void 0, _ = Ye(i, g.onValueNodeChange);
    return ht(() => {
      m(w);
    }, [m, w]), /* @__PURE__ */ P.jsx(
      Ke.span,
      {
        ...d,
        ref: _,
        style: { pointerEvents: "none" },
        children: wd(g.value) ? /* @__PURE__ */ P.jsx(P.Fragment, { children: f }) : u
      }
    );
  }
);
Qf.displayName = Jf;
var M_ = "SelectIcon", ed = v.forwardRef(
  (n, i) => {
    const { __scopeSelect: r, children: s, ...c } = n;
    return /* @__PURE__ */ P.jsx(Ke.span, { "aria-hidden": !0, ...c, ref: i, children: s || "▼" });
  }
);
ed.displayName = M_;
var D_ = "SelectPortal", td = (n) => /* @__PURE__ */ P.jsx(jf, { asChild: !0, ...n });
td.displayName = D_;
var Qn = "SelectContent", nd = v.forwardRef(
  (n, i) => {
    const r = Wn(Qn, n.__scopeSelect), [s, c] = v.useState();
    if (ht(() => {
      c(new DocumentFragment());
    }, []), !r.open) {
      const u = s;
      return u ? Ti.createPortal(
        /* @__PURE__ */ P.jsx(rd, { scope: n.__scopeSelect, children: /* @__PURE__ */ P.jsx(Di.Slot, { scope: n.__scopeSelect, children: /* @__PURE__ */ P.jsx("div", { children: n.children }) }) }),
        u
      ) : null;
    }
    return /* @__PURE__ */ P.jsx(od, { ...n, ref: i });
  }
);
nd.displayName = Qn;
var Gt = 10, [rd, Bn] = Ir(Qn), k_ = "SelectContentImpl", od = v.forwardRef(
  (n, i) => {
    const {
      __scopeSelect: r,
      position: s = "item-aligned",
      onCloseAutoFocus: c,
      onEscapeKeyDown: u,
      onPointerDownOutside: f,
      //
      // PopperContent props
      side: d,
      sideOffset: g,
      align: m,
      alignOffset: w,
      arrowPadding: _,
      collisionBoundary: R,
      collisionPadding: E,
      sticky: O,
      hideWhenDetached: y,
      avoidCollisions: S,
      //
      ...N
    } = n, I = Wn(Qn, r), [M, B] = v.useState(null), [U, V] = v.useState(null), $ = Ye(i, (Z) => B(Z)), [ee, ue] = v.useState(null), [he, Ce] = v.useState(
      null
    ), q = ki(r), [re, ne] = v.useState(!1), Se = v.useRef(!1);
    v.useEffect(() => {
      if (M)
        return H0(M);
    }, [M]), mb();
    const oe = v.useCallback(
      (Z) => {
        const [me, ...Le] = q().map((xe) => xe.ref.current), [Re] = Le.slice(-1), be = document.activeElement;
        for (const xe of Z)
          if (xe === be || (xe == null || xe.scrollIntoView({ block: "nearest" }), xe === me && U && (U.scrollTop = 0), xe === Re && U && (U.scrollTop = U.scrollHeight), xe == null || xe.focus(), document.activeElement !== be))
            return;
      },
      [q, U]
    ), se = v.useCallback(
      () => oe([ee, M]),
      [oe, ee, M]
    );
    v.useEffect(() => {
      re && se();
    }, [re, se]);
    const { onOpenChange: Y, triggerPointerDownPosRef: ve } = I;
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
    const [ke, Ee] = bd((Z) => {
      const me = q().filter((be) => !be.disabled), Le = me.find((be) => be.ref.current === document.activeElement), Re = _d(me, Z, Le);
      Re && setTimeout(() => Re.ref.current.focus());
    }), Yt = v.useCallback(
      (Z, me, Le) => {
        const Re = !Se.current && !Le;
        (I.value !== void 0 && I.value === me || Re) && (ue(Z), Re && (Se.current = !0));
      },
      [I.value]
    ), qt = v.useCallback(() => M == null ? void 0 : M.focus(), [M]), Pt = v.useCallback(
      (Z, me, Le) => {
        const Re = !Se.current && !Le;
        (I.value !== void 0 && I.value === me || Re) && Ce(Z);
      },
      [I.value]
    ), ut = s === "popper" ? Ia : id, it = ut === Ia ? {
      side: d,
      sideOffset: g,
      align: m,
      alignOffset: w,
      arrowPadding: _,
      collisionBoundary: R,
      collisionPadding: E,
      sticky: O,
      hideWhenDetached: y,
      avoidCollisions: S
    } : {};
    return /* @__PURE__ */ P.jsx(
      rd,
      {
        scope: r,
        content: M,
        viewport: U,
        onViewportChange: V,
        itemRefCallback: Yt,
        selectedItem: ee,
        onItemLeave: qt,
        itemTextRefCallback: Pt,
        focusSelectedItem: se,
        selectedItemText: he,
        position: s,
        isPositioned: re,
        searchRef: ke,
        children: /* @__PURE__ */ P.jsx(Yf, { as: Er, allowPinchZoom: !0, children: /* @__PURE__ */ P.jsx(
          gf,
          {
            asChild: !0,
            trapped: I.open,
            onMountAutoFocus: (Z) => {
              Z.preventDefault();
            },
            onUnmountAutoFocus: De(c, (Z) => {
              var me;
              (me = I.trigger) == null || me.focus({ preventScroll: !0 }), Z.preventDefault();
            }),
            children: /* @__PURE__ */ P.jsx(
              Ba,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: u,
                onPointerDownOutside: f,
                onFocusOutside: (Z) => Z.preventDefault(),
                onDismiss: () => I.onOpenChange(!1),
                children: /* @__PURE__ */ P.jsx(
                  ut,
                  {
                    role: "listbox",
                    id: I.contentId,
                    "data-state": I.open ? "open" : "closed",
                    dir: I.dir,
                    onContextMenu: (Z) => Z.preventDefault(),
                    ...N,
                    ...it,
                    onPlaced: () => ne(!0),
                    ref: $,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...N.style
                    },
                    onKeyDown: De(N.onKeyDown, (Z) => {
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
od.displayName = k_;
var F_ = "SelectItemAlignedPosition", id = v.forwardRef((n, i) => {
  const { __scopeSelect: r, onPlaced: s, ...c } = n, u = Wn(Qn, r), f = Bn(Qn, r), [d, g] = v.useState(null), [m, w] = v.useState(null), _ = Ye(i, ($) => w($)), R = ki(r), E = v.useRef(!1), O = v.useRef(!0), { viewport: y, selectedItem: S, selectedItemText: N, focusSelectedItem: I } = f, M = v.useCallback(() => {
    if (u.trigger && u.valueNode && d && m && y && S && N) {
      const $ = u.trigger.getBoundingClientRect(), ee = m.getBoundingClientRect(), ue = u.valueNode.getBoundingClientRect(), he = N.getBoundingClientRect();
      if (u.dir !== "rtl") {
        const be = he.left - ee.left, xe = ue.left - be, Ze = $.left - xe, Be = $.width + Ze, st = Math.max(Be, ee.width), wt = window.innerWidth - Gt, Je = Pu(xe, [
          Gt,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(Gt, wt - st)
        ]);
        d.style.minWidth = Be + "px", d.style.left = Je + "px";
      } else {
        const be = ee.right - he.right, xe = window.innerWidth - ue.right - be, Ze = window.innerWidth - $.right - xe, Be = $.width + Ze, st = Math.max(Be, ee.width), wt = window.innerWidth - Gt, Je = Pu(xe, [
          Gt,
          Math.max(Gt, wt - st)
        ]);
        d.style.minWidth = Be + "px", d.style.right = Je + "px";
      }
      const Ce = R(), q = window.innerHeight - Gt * 2, re = y.scrollHeight, ne = window.getComputedStyle(m), Se = parseInt(ne.borderTopWidth, 10), oe = parseInt(ne.paddingTop, 10), se = parseInt(ne.borderBottomWidth, 10), Y = parseInt(ne.paddingBottom, 10), ve = Se + oe + re + Y + se, ke = Math.min(S.offsetHeight * 5, ve), Ee = window.getComputedStyle(y), Yt = parseInt(Ee.paddingTop, 10), qt = parseInt(Ee.paddingBottom, 10), Pt = $.top + $.height / 2 - Gt, ut = q - Pt, it = S.offsetHeight / 2, Z = S.offsetTop + it, me = Se + oe + Z, Le = ve - me;
      if (me <= Pt) {
        const be = Ce.length > 0 && S === Ce[Ce.length - 1].ref.current;
        d.style.bottom = "0px";
        const xe = m.clientHeight - y.offsetTop - y.offsetHeight, Ze = Math.max(
          ut,
          it + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (be ? qt : 0) + xe + se
        ), Be = me + Ze;
        d.style.height = Be + "px";
      } else {
        const be = Ce.length > 0 && S === Ce[0].ref.current;
        d.style.top = "0px";
        const Ze = Math.max(
          Pt,
          Se + y.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (be ? Yt : 0) + it
        ) + Le;
        d.style.height = Ze + "px", y.scrollTop = me - Pt + y.offsetTop;
      }
      d.style.margin = `${Gt}px 0`, d.style.minHeight = ke + "px", d.style.maxHeight = q + "px", s == null || s(), requestAnimationFrame(() => E.current = !0);
    }
  }, [
    R,
    u.trigger,
    u.valueNode,
    d,
    m,
    y,
    S,
    N,
    u.dir,
    s
  ]);
  ht(() => M(), [M]);
  const [B, U] = v.useState();
  ht(() => {
    m && U(window.getComputedStyle(m).zIndex);
  }, [m]);
  const V = v.useCallback(
    ($) => {
      $ && O.current === !0 && (M(), I == null || I(), O.current = !1);
    },
    [M, I]
  );
  return /* @__PURE__ */ P.jsx(
    B_,
    {
      scope: r,
      contentWrapper: d,
      shouldExpandOnScrollRef: E,
      onScrollButtonChange: V,
      children: /* @__PURE__ */ P.jsx(
        "div",
        {
          ref: g,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: B
          },
          children: /* @__PURE__ */ P.jsx(
            Ke.div,
            {
              ...c,
              ref: _,
              style: {
                // When we get the height of the content, it includes borders. If we were to set
                // the height without having `boxSizing: 'border-box'` it would be too big.
                boxSizing: "border-box",
                // We need to ensure the content doesn't get taller than the wrapper
                maxHeight: "100%",
                ...c.style
              }
            }
          )
        }
      )
    }
  );
});
id.displayName = F_;
var W_ = "SelectPopperPosition", Ia = v.forwardRef((n, i) => {
  const {
    __scopeSelect: r,
    align: s = "start",
    collisionPadding: c = Gt,
    ...u
  } = n, f = Fi(r);
  return /* @__PURE__ */ P.jsx(
    Wf,
    {
      ...f,
      ...u,
      ref: i,
      align: s,
      collisionPadding: c,
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
Ia.displayName = W_;
var [B_, Xa] = Ir(Qn, {}), Na = "SelectViewport", sd = v.forwardRef(
  (n, i) => {
    const { __scopeSelect: r, nonce: s, ...c } = n, u = Bn(Na, r), f = Xa(Na, r), d = Ye(i, u.onViewportChange), g = v.useRef(0);
    return /* @__PURE__ */ P.jsxs(P.Fragment, { children: [
      /* @__PURE__ */ P.jsx(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: s
        }
      ),
      /* @__PURE__ */ P.jsx(Di.Slot, { scope: r, children: /* @__PURE__ */ P.jsx(
        Ke.div,
        {
          "data-radix-select-viewport": "",
          role: "presentation",
          ...c,
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
            ...c.style
          },
          onScroll: De(c.onScroll, (m) => {
            const w = m.currentTarget, { contentWrapper: _, shouldExpandOnScrollRef: R } = f;
            if (R != null && R.current && _) {
              const E = Math.abs(g.current - w.scrollTop);
              if (E > 0) {
                const O = window.innerHeight - Gt * 2, y = parseFloat(_.style.minHeight), S = parseFloat(_.style.height), N = Math.max(y, S);
                if (N < O) {
                  const I = N + E, M = Math.min(O, I), B = I - M;
                  _.style.height = M + "px", _.style.bottom === "0px" && (w.scrollTop = B > 0 ? B : 0, _.style.justifyContent = "flex-end");
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
sd.displayName = Na;
var ad = "SelectGroup", [j_, U_] = Ir(ad), $_ = v.forwardRef(
  (n, i) => {
    const { __scopeSelect: r, ...s } = n, c = Pi();
    return /* @__PURE__ */ P.jsx(j_, { scope: r, id: c, children: /* @__PURE__ */ P.jsx(Ke.div, { role: "group", "aria-labelledby": c, ...s, ref: i }) });
  }
);
$_.displayName = ad;
var cd = "SelectLabel", ld = v.forwardRef(
  (n, i) => {
    const { __scopeSelect: r, ...s } = n, c = U_(cd, r);
    return /* @__PURE__ */ P.jsx(Ke.div, { id: c.id, ...s, ref: i });
  }
);
ld.displayName = cd;
var Ai = "SelectItem", [H_, ud] = Ir(Ai), fd = v.forwardRef(
  (n, i) => {
    const {
      __scopeSelect: r,
      value: s,
      disabled: c = !1,
      textValue: u,
      ...f
    } = n, d = Wn(Ai, r), g = Bn(Ai, r), m = d.value === s, [w, _] = v.useState(u ?? ""), [R, E] = v.useState(!1), O = Ye(
      i,
      (I) => {
        var M;
        return (M = g.itemRefCallback) == null ? void 0 : M.call(g, I, s, c);
      }
    ), y = Pi(), S = v.useRef("touch"), N = () => {
      c || (d.onValueChange(s), d.onOpenChange(!1));
    };
    if (s === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ P.jsx(
      H_,
      {
        scope: r,
        value: s,
        disabled: c,
        textId: y,
        isSelected: m,
        onItemTextChange: v.useCallback((I) => {
          _((M) => M || ((I == null ? void 0 : I.textContent) ?? "").trim());
        }, []),
        children: /* @__PURE__ */ P.jsx(
          Di.ItemSlot,
          {
            scope: r,
            value: s,
            disabled: c,
            textValue: w,
            children: /* @__PURE__ */ P.jsx(
              Ke.div,
              {
                role: "option",
                "aria-labelledby": y,
                "data-highlighted": R ? "" : void 0,
                "aria-selected": m && R,
                "data-state": m ? "checked" : "unchecked",
                "aria-disabled": c || void 0,
                "data-disabled": c ? "" : void 0,
                tabIndex: c ? void 0 : -1,
                ...f,
                ref: O,
                onFocus: De(f.onFocus, () => E(!0)),
                onBlur: De(f.onBlur, () => E(!1)),
                onClick: De(f.onClick, () => {
                  S.current !== "mouse" && N();
                }),
                onPointerUp: De(f.onPointerUp, () => {
                  S.current === "mouse" && N();
                }),
                onPointerDown: De(f.onPointerDown, (I) => {
                  S.current = I.pointerType;
                }),
                onPointerMove: De(f.onPointerMove, (I) => {
                  var M;
                  S.current = I.pointerType, c ? (M = g.onItemLeave) == null || M.call(g) : S.current === "mouse" && I.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: De(f.onPointerLeave, (I) => {
                  var M;
                  I.currentTarget === document.activeElement && ((M = g.onItemLeave) == null || M.call(g));
                }),
                onKeyDown: De(f.onKeyDown, (I) => {
                  var B;
                  ((B = g.searchRef) == null ? void 0 : B.current) !== "" && I.key === " " || (P_.includes(I.key) && N(), I.key === " " && I.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
fd.displayName = Ai;
var co = "SelectItemText", dd = v.forwardRef(
  (n, i) => {
    const { __scopeSelect: r, className: s, style: c, ...u } = n, f = Wn(co, r), d = Bn(co, r), g = ud(co, r), m = L_(co, r), [w, _] = v.useState(null), R = Ye(
      i,
      (N) => _(N),
      g.onItemTextChange,
      (N) => {
        var I;
        return (I = d.itemTextRefCallback) == null ? void 0 : I.call(d, N, g.value, g.disabled);
      }
    ), E = w == null ? void 0 : w.textContent, O = v.useMemo(
      () => /* @__PURE__ */ P.jsx("option", { value: g.value, disabled: g.disabled, children: E }, g.value),
      [g.disabled, g.value, E]
    ), { onNativeOptionAdd: y, onNativeOptionRemove: S } = m;
    return ht(() => (y(O), () => S(O)), [y, S, O]), /* @__PURE__ */ P.jsxs(P.Fragment, { children: [
      /* @__PURE__ */ P.jsx(Ke.span, { id: g.textId, ...u, ref: R }),
      g.isSelected && f.valueNode && !f.valueNodeHasChildren ? Ti.createPortal(u.children, f.valueNode) : null
    ] });
  }
);
dd.displayName = co;
var pd = "SelectItemIndicator", hd = v.forwardRef(
  (n, i) => {
    const { __scopeSelect: r, ...s } = n;
    return ud(pd, r).isSelected ? /* @__PURE__ */ P.jsx(Ke.span, { "aria-hidden": !0, ...s, ref: i }) : null;
  }
);
hd.displayName = pd;
var La = "SelectScrollUpButton", gd = v.forwardRef((n, i) => {
  const r = Bn(La, n.__scopeSelect), s = Xa(La, n.__scopeSelect), [c, u] = v.useState(!1), f = Ye(i, s.onScrollButtonChange);
  return ht(() => {
    if (r.viewport && r.isPositioned) {
      let d = function() {
        const m = g.scrollTop > 0;
        u(m);
      };
      const g = r.viewport;
      return d(), g.addEventListener("scroll", d), () => g.removeEventListener("scroll", d);
    }
  }, [r.viewport, r.isPositioned]), c ? /* @__PURE__ */ P.jsx(
    md,
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
gd.displayName = La;
var Ma = "SelectScrollDownButton", vd = v.forwardRef((n, i) => {
  const r = Bn(Ma, n.__scopeSelect), s = Xa(Ma, n.__scopeSelect), [c, u] = v.useState(!1), f = Ye(i, s.onScrollButtonChange);
  return ht(() => {
    if (r.viewport && r.isPositioned) {
      let d = function() {
        const m = g.scrollHeight - g.clientHeight, w = Math.ceil(g.scrollTop) < m;
        u(w);
      };
      const g = r.viewport;
      return d(), g.addEventListener("scroll", d), () => g.removeEventListener("scroll", d);
    }
  }, [r.viewport, r.isPositioned]), c ? /* @__PURE__ */ P.jsx(
    md,
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
vd.displayName = Ma;
var md = v.forwardRef((n, i) => {
  const { __scopeSelect: r, onAutoScroll: s, ...c } = n, u = Bn("SelectScrollButton", r), f = v.useRef(null), d = ki(r), g = v.useCallback(() => {
    f.current !== null && (window.clearInterval(f.current), f.current = null);
  }, []);
  return v.useEffect(() => () => g(), [g]), ht(() => {
    var w;
    const m = d().find((_) => _.ref.current === document.activeElement);
    (w = m == null ? void 0 : m.ref.current) == null || w.scrollIntoView({ block: "nearest" });
  }, [d]), /* @__PURE__ */ P.jsx(
    Ke.div,
    {
      "aria-hidden": !0,
      ...c,
      ref: i,
      style: { flexShrink: 0, ...c.style },
      onPointerDown: De(c.onPointerDown, () => {
        f.current === null && (f.current = window.setInterval(s, 50));
      }),
      onPointerMove: De(c.onPointerMove, () => {
        var m;
        (m = u.onItemLeave) == null || m.call(u), f.current === null && (f.current = window.setInterval(s, 50));
      }),
      onPointerLeave: De(c.onPointerLeave, () => {
        g();
      })
    }
  );
}), z_ = "SelectSeparator", xd = v.forwardRef(
  (n, i) => {
    const { __scopeSelect: r, ...s } = n;
    return /* @__PURE__ */ P.jsx(Ke.div, { "aria-hidden": !0, ...s, ref: i });
  }
);
xd.displayName = z_;
var Da = "SelectArrow", G_ = v.forwardRef(
  (n, i) => {
    const { __scopeSelect: r, ...s } = n, c = Fi(r), u = Wn(Da, r), f = Bn(Da, r);
    return u.open && f.position === "popper" ? /* @__PURE__ */ P.jsx(Bf, { ...c, ...s, ref: i }) : null;
  }
);
G_.displayName = Da;
function wd(n) {
  return n === "" || n === void 0;
}
var yd = v.forwardRef(
  (n, i) => {
    const { value: r, ...s } = n, c = v.useRef(null), u = Ye(i, c), f = F0(r);
    return v.useEffect(() => {
      const d = c.current, g = window.HTMLSelectElement.prototype, w = Object.getOwnPropertyDescriptor(
        g,
        "value"
      ).set;
      if (f !== r && w) {
        const _ = new Event("change", { bubbles: !0 });
        w.call(d, r), d.dispatchEvent(_);
      }
    }, [f, r]), /* @__PURE__ */ P.jsx(qa, { asChild: !0, children: /* @__PURE__ */ P.jsx("select", { ...s, ref: u, defaultValue: r }) });
  }
);
yd.displayName = "BubbleSelect";
function bd(n) {
  const i = vn(n), r = v.useRef(""), s = v.useRef(0), c = v.useCallback(
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
  return v.useEffect(() => () => window.clearTimeout(s.current), []), [r, c, u];
}
function _d(n, i, r) {
  const c = i.length > 1 && Array.from(i).every((m) => m === i[0]) ? i[0] : i, u = r ? n.indexOf(r) : -1;
  let f = V_(n, Math.max(u, 0));
  c.length === 1 && (f = f.filter((m) => m !== r));
  const g = f.find(
    (m) => m.textValue.toLowerCase().startsWith(c.toLowerCase())
  );
  return g !== r ? g : void 0;
}
function V_(n, i) {
  return n.map((r, s) => n[(i + s) % n.length]);
}
var K_ = qf, Cd = Zf, Y_ = Qf, q_ = ed, X_ = td, Sd = nd, Z_ = sd, Ed = ld, Rd = fd, J_ = dd, Q_ = hd, Ad = gd, Td = vd, Pd = xd;
const eC = K_, tC = Y_, Od = v.forwardRef(({ className: n, children: i, ...r }, s) => /* @__PURE__ */ P.jsxs(
  Cd,
  {
    ref: s,
    className: ot(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      n
    ),
    ...r,
    children: [
      i,
      /* @__PURE__ */ P.jsx(q_, { asChild: !0, children: /* @__PURE__ */ P.jsx(ff, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
Od.displayName = Cd.displayName;
const Id = v.forwardRef(({ className: n, ...i }, r) => /* @__PURE__ */ P.jsx(
  Ad,
  {
    ref: r,
    className: ot(
      "flex cursor-default items-center justify-center py-1",
      n
    ),
    ...i,
    children: /* @__PURE__ */ P.jsx(Qy, { className: "h-4 w-4" })
  }
));
Id.displayName = Ad.displayName;
const Nd = v.forwardRef(({ className: n, ...i }, r) => /* @__PURE__ */ P.jsx(
  Td,
  {
    ref: r,
    className: ot(
      "flex cursor-default items-center justify-center py-1",
      n
    ),
    ...i,
    children: /* @__PURE__ */ P.jsx(ff, { className: "h-4 w-4" })
  }
));
Nd.displayName = Td.displayName;
const Ld = v.forwardRef(({ className: n, children: i, position: r = "popper", ...s }, c) => /* @__PURE__ */ P.jsx(X_, { children: /* @__PURE__ */ P.jsxs(
  Sd,
  {
    ref: c,
    className: ot(
      "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      r === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      n
    ),
    position: r,
    ...s,
    children: [
      /* @__PURE__ */ P.jsx(Id, {}),
      /* @__PURE__ */ P.jsx(
        Z_,
        {
          className: ot(
            "p-1",
            r === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children: i
        }
      ),
      /* @__PURE__ */ P.jsx(Nd, {})
    ]
  }
) }));
Ld.displayName = Sd.displayName;
const nC = v.forwardRef(({ className: n, ...i }, r) => /* @__PURE__ */ P.jsx(
  Ed,
  {
    ref: r,
    className: ot("py-1.5 pl-8 pr-2 text-sm font-semibold", n),
    ...i
  }
));
nC.displayName = Ed.displayName;
const Md = v.forwardRef(({ className: n, children: i, ...r }, s) => /* @__PURE__ */ P.jsxs(
  Rd,
  {
    ref: s,
    className: ot(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      n
    ),
    ...r,
    children: [
      /* @__PURE__ */ P.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ P.jsx(Q_, { children: /* @__PURE__ */ P.jsx(Jy, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ P.jsx(J_, { children: i })
    ]
  }
));
Md.displayName = Rd.displayName;
const rC = v.forwardRef(({ className: n, ...i }, r) => /* @__PURE__ */ P.jsx(
  Pd,
  {
    ref: r,
    className: ot("-mx-1 my-1 h-px bg-muted", n),
    ...i
  }
));
rC.displayName = Pd.displayName;
function oC(n, i) {
  return v.useReducer((r, s) => i[r][s] ?? r, n);
}
var Dd = (n) => {
  const { present: i, children: r } = n, s = iC(i), c = typeof r == "function" ? r({ present: s.isPresent }) : v.Children.only(r), u = Ye(s.ref, sC(c));
  return typeof r == "function" || s.isPresent ? v.cloneElement(c, { ref: u }) : null;
};
Dd.displayName = "Presence";
function iC(n) {
  const [i, r] = v.useState(), s = v.useRef({}), c = v.useRef(n), u = v.useRef("none"), f = n ? "mounted" : "unmounted", [d, g] = oC(f, {
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
    const m = vi(s.current);
    u.current = d === "mounted" ? m : "none";
  }, [d]), ht(() => {
    const m = s.current, w = c.current;
    if (w !== n) {
      const R = u.current, E = vi(m);
      n ? g("MOUNT") : E === "none" || (m == null ? void 0 : m.display) === "none" ? g("UNMOUNT") : g(w && R !== E ? "ANIMATION_OUT" : "UNMOUNT"), c.current = n;
    }
  }, [n, g]), ht(() => {
    if (i) {
      let m;
      const w = i.ownerDocument.defaultView ?? window, _ = (E) => {
        const y = vi(s.current).includes(E.animationName);
        if (E.target === i && y && (g("ANIMATION_END"), !c.current)) {
          const S = i.style.animationFillMode;
          i.style.animationFillMode = "forwards", m = w.setTimeout(() => {
            i.style.animationFillMode === "forwards" && (i.style.animationFillMode = S);
          });
        }
      }, R = (E) => {
        E.target === i && (u.current = vi(s.current));
      };
      return i.addEventListener("animationstart", R), i.addEventListener("animationcancel", _), i.addEventListener("animationend", _), () => {
        w.clearTimeout(m), i.removeEventListener("animationstart", R), i.removeEventListener("animationcancel", _), i.removeEventListener("animationend", _);
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
function vi(n) {
  return (n == null ? void 0 : n.animationName) || "none";
}
function sC(n) {
  var s, c;
  let i = (s = Object.getOwnPropertyDescriptor(n.props, "ref")) == null ? void 0 : s.get, r = i && "isReactWarning" in i && i.isReactWarning;
  return r ? n.ref : (i = (c = Object.getOwnPropertyDescriptor(n, "ref")) == null ? void 0 : c.get, r = i && "isReactWarning" in i && i.isReactWarning, r ? n.props.ref : n.props.ref || n.ref);
}
var [Wi, MC] = df("Tooltip", [
  Li
]), Bi = Li(), kd = "TooltipProvider", aC = 700, ka = "tooltip.open", [cC, Za] = Wi(kd), Fd = (n) => {
  const {
    __scopeTooltip: i,
    delayDuration: r = aC,
    skipDelayDuration: s = 300,
    disableHoverableContent: c = !1,
    children: u
  } = n, [f, d] = v.useState(!0), g = v.useRef(!1), m = v.useRef(0);
  return v.useEffect(() => {
    const w = m.current;
    return () => window.clearTimeout(w);
  }, []), /* @__PURE__ */ P.jsx(
    cC,
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
      disableHoverableContent: c,
      children: u
    }
  );
};
Fd.displayName = kd;
var ji = "Tooltip", [lC, Ui] = Wi(ji), Wd = (n) => {
  const {
    __scopeTooltip: i,
    children: r,
    open: s,
    defaultOpen: c = !1,
    onOpenChange: u,
    disableHoverableContent: f,
    delayDuration: d
  } = n, g = Za(ji, n.__scopeTooltip), m = Bi(i), [w, _] = v.useState(null), R = Pi(), E = v.useRef(0), O = f ?? g.disableHoverableContent, y = d ?? g.delayDuration, S = v.useRef(!1), [N = !1, I] = Pa({
    prop: s,
    defaultProp: c,
    onChange: ($) => {
      $ ? (g.onOpen(), document.dispatchEvent(new CustomEvent(ka))) : g.onClose(), u == null || u($);
    }
  }), M = v.useMemo(() => N ? S.current ? "delayed-open" : "instant-open" : "closed", [N]), B = v.useCallback(() => {
    window.clearTimeout(E.current), E.current = 0, S.current = !1, I(!0);
  }, [I]), U = v.useCallback(() => {
    window.clearTimeout(E.current), E.current = 0, I(!1);
  }, [I]), V = v.useCallback(() => {
    window.clearTimeout(E.current), E.current = window.setTimeout(() => {
      S.current = !0, I(!0), E.current = 0;
    }, y);
  }, [y, I]);
  return v.useEffect(() => () => {
    E.current && (window.clearTimeout(E.current), E.current = 0);
  }, []), /* @__PURE__ */ P.jsx(kf, { ...m, children: /* @__PURE__ */ P.jsx(
    lC,
    {
      scope: i,
      contentId: R,
      open: N,
      stateAttribute: M,
      trigger: w,
      onTriggerChange: _,
      onTriggerEnter: v.useCallback(() => {
        g.isOpenDelayed ? V() : B();
      }, [g.isOpenDelayed, V, B]),
      onTriggerLeave: v.useCallback(() => {
        O ? U() : (window.clearTimeout(E.current), E.current = 0);
      }, [U, O]),
      onOpen: B,
      onClose: U,
      disableHoverableContent: O,
      children: r
    }
  ) });
};
Wd.displayName = ji;
var Fa = "TooltipTrigger", Bd = v.forwardRef(
  (n, i) => {
    const { __scopeTooltip: r, ...s } = n, c = Ui(Fa, r), u = Za(Fa, r), f = Bi(r), d = v.useRef(null), g = Ye(i, d, c.onTriggerChange), m = v.useRef(!1), w = v.useRef(!1), _ = v.useCallback(() => m.current = !1, []);
    return v.useEffect(() => () => document.removeEventListener("pointerup", _), [_]), /* @__PURE__ */ P.jsx(Ff, { asChild: !0, ...f, children: /* @__PURE__ */ P.jsx(
      Ke.button,
      {
        "aria-describedby": c.open ? c.contentId : void 0,
        "data-state": c.stateAttribute,
        ...s,
        ref: g,
        onPointerMove: De(n.onPointerMove, (R) => {
          R.pointerType !== "touch" && !w.current && !u.isPointerInTransitRef.current && (c.onTriggerEnter(), w.current = !0);
        }),
        onPointerLeave: De(n.onPointerLeave, () => {
          c.onTriggerLeave(), w.current = !1;
        }),
        onPointerDown: De(n.onPointerDown, () => {
          m.current = !0, document.addEventListener("pointerup", _, { once: !0 });
        }),
        onFocus: De(n.onFocus, () => {
          m.current || c.onOpen();
        }),
        onBlur: De(n.onBlur, c.onClose),
        onClick: De(n.onClick, c.onClose)
      }
    ) });
  }
);
Bd.displayName = Fa;
var uC = "TooltipPortal", [DC, fC] = Wi(uC, {
  forceMount: void 0
}), Ar = "TooltipContent", jd = v.forwardRef(
  (n, i) => {
    const r = fC(Ar, n.__scopeTooltip), { forceMount: s = r.forceMount, side: c = "top", ...u } = n, f = Ui(Ar, n.__scopeTooltip);
    return /* @__PURE__ */ P.jsx(Dd, { present: s || f.open, children: f.disableHoverableContent ? /* @__PURE__ */ P.jsx(Ud, { side: c, ...u, ref: i }) : /* @__PURE__ */ P.jsx(dC, { side: c, ...u, ref: i }) });
  }
), dC = v.forwardRef((n, i) => {
  const r = Ui(Ar, n.__scopeTooltip), s = Za(Ar, n.__scopeTooltip), c = v.useRef(null), u = Ye(i, c), [f, d] = v.useState(null), { trigger: g, onClose: m } = r, w = c.current, { onPointerInTransitChange: _ } = s, R = v.useCallback(() => {
    d(null), _(!1);
  }, [_]), E = v.useCallback(
    (O, y) => {
      const S = O.currentTarget, N = { x: O.clientX, y: O.clientY }, I = vC(N, S.getBoundingClientRect()), M = mC(N, I), B = xC(y.getBoundingClientRect()), U = yC([...M, ...B]);
      d(U), _(!0);
    },
    [_]
  );
  return v.useEffect(() => () => R(), [R]), v.useEffect(() => {
    if (g && w) {
      const O = (S) => E(S, w), y = (S) => E(S, g);
      return g.addEventListener("pointerleave", O), w.addEventListener("pointerleave", y), () => {
        g.removeEventListener("pointerleave", O), w.removeEventListener("pointerleave", y);
      };
    }
  }, [g, w, E, R]), v.useEffect(() => {
    if (f) {
      const O = (y) => {
        const S = y.target, N = { x: y.clientX, y: y.clientY }, I = (g == null ? void 0 : g.contains(S)) || (w == null ? void 0 : w.contains(S)), M = !wC(N, f);
        I ? R() : M && (R(), m());
      };
      return document.addEventListener("pointermove", O), () => document.removeEventListener("pointermove", O);
    }
  }, [g, w, f, m, R]), /* @__PURE__ */ P.jsx(Ud, { ...n, ref: u });
}), [pC, hC] = Wi(ji, { isInside: !1 }), Ud = v.forwardRef(
  (n, i) => {
    const {
      __scopeTooltip: r,
      children: s,
      "aria-label": c,
      onEscapeKeyDown: u,
      onPointerDownOutside: f,
      ...d
    } = n, g = Ui(Ar, r), m = Bi(r), { onClose: w } = g;
    return v.useEffect(() => (document.addEventListener(ka, w), () => document.removeEventListener(ka, w)), [w]), v.useEffect(() => {
      if (g.trigger) {
        const _ = (R) => {
          const E = R.target;
          E != null && E.contains(g.trigger) && w();
        };
        return window.addEventListener("scroll", _, { capture: !0 }), () => window.removeEventListener("scroll", _, { capture: !0 });
      }
    }, [g.trigger, w]), /* @__PURE__ */ P.jsx(
      Ba,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: u,
        onPointerDownOutside: f,
        onFocusOutside: (_) => _.preventDefault(),
        onDismiss: w,
        children: /* @__PURE__ */ P.jsxs(
          Wf,
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
              /* @__PURE__ */ P.jsx(ef, { children: s }),
              /* @__PURE__ */ P.jsx(pC, { scope: r, isInside: !0, children: /* @__PURE__ */ P.jsx(B0, { id: g.contentId, role: "tooltip", children: c || s }) })
            ]
          }
        )
      }
    );
  }
);
jd.displayName = Ar;
var $d = "TooltipArrow", gC = v.forwardRef(
  (n, i) => {
    const { __scopeTooltip: r, ...s } = n, c = Bi(r);
    return hC(
      $d,
      r
    ).isInside ? null : /* @__PURE__ */ P.jsx(Bf, { ...c, ...s, ref: i });
  }
);
gC.displayName = $d;
function vC(n, i) {
  const r = Math.abs(i.top - n.y), s = Math.abs(i.bottom - n.y), c = Math.abs(i.right - n.x), u = Math.abs(i.left - n.x);
  switch (Math.min(r, s, c, u)) {
    case u:
      return "left";
    case c:
      return "right";
    case r:
      return "top";
    case s:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function mC(n, i, r = 5) {
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
function xC(n) {
  const { top: i, right: r, bottom: s, left: c } = n;
  return [
    { x: c, y: i },
    { x: r, y: i },
    { x: r, y: s },
    { x: c, y: s }
  ];
}
function wC(n, i) {
  const { x: r, y: s } = n;
  let c = !1;
  for (let u = 0, f = i.length - 1; u < i.length; f = u++) {
    const d = i[u].x, g = i[u].y, m = i[f].x, w = i[f].y;
    g > s != w > s && r < (m - d) * (s - g) / (w - g) + d && (c = !c);
  }
  return c;
}
function yC(n) {
  const i = n.slice();
  return i.sort((r, s) => r.x < s.x ? -1 : r.x > s.x ? 1 : r.y < s.y ? -1 : r.y > s.y ? 1 : 0), bC(i);
}
function bC(n) {
  if (n.length <= 1)
    return n.slice();
  const i = [];
  for (let s = 0; s < n.length; s++) {
    const c = n[s];
    for (; i.length >= 2; ) {
      const u = i[i.length - 1], f = i[i.length - 2];
      if ((u.x - f.x) * (c.y - f.y) >= (u.y - f.y) * (c.x - f.x))
        i.pop();
      else
        break;
    }
    i.push(c);
  }
  i.pop();
  const r = [];
  for (let s = n.length - 1; s >= 0; s--) {
    const c = n[s];
    for (; r.length >= 2; ) {
      const u = r[r.length - 1], f = r[r.length - 2];
      if ((u.x - f.x) * (c.y - f.y) >= (u.y - f.y) * (c.x - f.x))
        r.pop();
      else
        break;
    }
    r.push(c);
  }
  return r.pop(), i.length === 1 && r.length === 1 && i[0].x === r[0].x && i[0].y === r[0].y ? i : i.concat(r);
}
var _C = Fd, CC = Wd, SC = Bd, Hd = jd;
const xa = _C, wa = CC, ya = SC, yi = v.forwardRef(({ className: n, sideOffset: i = 4, ...r }, s) => /* @__PURE__ */ P.jsx(
  Hd,
  {
    ref: s,
    sideOffset: i,
    className: ot(
      "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      n
    ),
    ...r
  }
));
yi.displayName = Hd.displayName;
const EC = nf(
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
function RC({ className: n, variant: i, ...r }) {
  return /* @__PURE__ */ P.jsx("div", { className: ot(EC({ variant: i }), n), ...r });
}
const zd = v.forwardRef(({ className: n, ...i }, r) => /* @__PURE__ */ P.jsx(
  "div",
  {
    ref: r,
    className: ot(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      n
    ),
    ...i
  }
));
zd.displayName = "Card";
const Gd = v.forwardRef(({ className: n, ...i }, r) => /* @__PURE__ */ P.jsx(
  "div",
  {
    ref: r,
    className: ot("flex flex-col space-y-1.5 p-6", n),
    ...i
  }
));
Gd.displayName = "CardHeader";
const AC = v.forwardRef(({ className: n, ...i }, r) => /* @__PURE__ */ P.jsx(
  "div",
  {
    ref: r,
    className: ot(
      "text-2xl font-semibold leading-none tracking-tight",
      n
    ),
    ...i
  }
));
AC.displayName = "CardTitle";
const TC = v.forwardRef(({ className: n, ...i }, r) => /* @__PURE__ */ P.jsx(
  "div",
  {
    ref: r,
    className: ot("text-sm text-muted-foreground", n),
    ...i
  }
));
TC.displayName = "CardDescription";
const Vd = v.forwardRef(({ className: n, ...i }, r) => /* @__PURE__ */ P.jsx("div", { ref: r, className: ot("p-6 pt-0", n), ...i }));
Vd.displayName = "CardContent";
const PC = v.forwardRef(({ className: n, ...i }, r) => /* @__PURE__ */ P.jsx(
  "div",
  {
    ref: r,
    className: ot("flex items-center p-6 pt-0", n),
    ...i
  }
));
PC.displayName = "CardFooter";
function kC({ dealStage: n, dealName: i }) {
  return /* @__PURE__ */ P.jsxs(zd, { className: "bg-white shadow-sm border-slate-200", children: [
    /* @__PURE__ */ P.jsx(Gd, { children: /* @__PURE__ */ P.jsxs("div", { className: "flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4", children: [
      /* @__PURE__ */ P.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ P.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ P.jsx("h2", { className: "text-xl font-semibold text-slate-900", children: i }),
          /* @__PURE__ */ P.jsx(xa, { children: /* @__PURE__ */ P.jsxs(wa, { children: [
            /* @__PURE__ */ P.jsx(ya, { asChild: !0, children: /* @__PURE__ */ P.jsx(
              lo,
              {
                variant: "ghost",
                size: "sm",
                className: "p-1 h-auto",
                onClick: () => window.open("https://narratic.ai", "_blank"),
                children: /* @__PURE__ */ P.jsx(eb, { className: "w-4 h-4 text-slate-500" })
              }
            ) }),
            /* @__PURE__ */ P.jsx(yi, { children: /* @__PURE__ */ P.jsx("p", { children: "View in HubSpot" }) })
          ] }) })
        ] }),
        /* @__PURE__ */ P.jsx(RC, { variant: "outline", className: "text-sm", children: n })
      ] }),
      /* @__PURE__ */ P.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 lg:gap-8", children: [
        /* @__PURE__ */ P.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ P.jsx("p", { className: "text-sm text-slate-500", children: "Amount" }),
          /* @__PURE__ */ P.jsxs("p", { className: "text-lg font-semibold", children: [
            "$",
            n
          ] })
        ] }),
        /* @__PURE__ */ P.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ P.jsxs("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ P.jsx("p", { className: "text-sm text-slate-500", children: "Win Probability" }),
            /* @__PURE__ */ P.jsx(xa, { children: /* @__PURE__ */ P.jsxs(wa, { children: [
              /* @__PURE__ */ P.jsx(ya, { asChild: !0, children: /* @__PURE__ */ P.jsx(lo, { variant: "ghost", size: "sm", className: "p-0 h-auto", children: /* @__PURE__ */ P.jsx(Tu, { className: "w-3 h-3 text-slate-400" }) }) }),
              /* @__PURE__ */ P.jsx(yi, { className: "max-w-xs", children: /* @__PURE__ */ P.jsx("p", { children: "Estimated chance of winning, based on prospect engagement, qualification status, risk factors, and historic deal outcomes at the current stage." }) })
            ] }) })
          ] }),
          /* @__PURE__ */ P.jsxs("p", { className: "text-lg font-semibold", children: [
            i,
            "%"
          ] })
        ] }),
        /* @__PURE__ */ P.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ P.jsx("p", { className: "text-sm text-slate-500", children: "Deal Owner" }),
          /* @__PURE__ */ P.jsx("p", { className: "text-lg font-semibold", children: i })
        ] }),
        /* @__PURE__ */ P.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ P.jsxs("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ P.jsx("p", { className: "text-sm text-slate-500", children: "Deal Lannguage" }),
            /* @__PURE__ */ P.jsx(xa, { children: /* @__PURE__ */ P.jsxs(wa, { children: [
              /* @__PURE__ */ P.jsx(ya, { asChild: !0, children: /* @__PURE__ */ P.jsx(lo, { variant: "ghost", size: "sm", className: "p-0 h-auto", children: /* @__PURE__ */ P.jsx(Tu, { className: "w-3 h-3 text-slate-400" }) }) }),
              /* @__PURE__ */ P.jsx(yi, { className: "max-w-xs", children: /* @__PURE__ */ P.jsx("p", { children: "The main language of the deal." }) })
            ] }) })
          ] }),
          /* @__PURE__ */ P.jsx("p", { className: "text-lg font-semibold", children: $y(i) })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ P.jsx(Vd, { children: /* @__PURE__ */ P.jsxs(eC, { value: i, children: [
      /* @__PURE__ */ P.jsx(Od, { className: "w-[300px]", children: /* @__PURE__ */ P.jsxs(tC, { children: [
        i,
        " (",
        i,
        ")"
      ] }) }),
      /* @__PURE__ */ P.jsx(Ld, { children: /* @__PURE__ */ P.jsxs(Md, { value: i, children: [
        i,
        " (",
        i,
        ")"
      ] }) })
    ] }) })
  ] });
}
export {
  NC as Counter,
  kC as DealHeader
};
//# sourceMappingURL=index.js.map
