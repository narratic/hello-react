import * as m from "react";
import gn, { useState as sf, useEffect as af, forwardRef as lf, createElement as Ca, useLayoutEffect as uw } from "react";
import * as Li from "react-dom";
import fw from "react-dom";
var ro = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function dw(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var Sa = { exports: {} }, oo = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ou;
function pw() {
  if (Ou)
    return oo;
  Ou = 1;
  var n = gn, i = Symbol.for("react.element"), r = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, l = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function f(d, g, v) {
    var y, b = {}, E = null, R = null;
    v !== void 0 && (E = "" + v), g.key !== void 0 && (E = "" + g.key), g.ref !== void 0 && (R = g.ref);
    for (y in g)
      s.call(g, y) && !u.hasOwnProperty(y) && (b[y] = g[y]);
    if (d && d.defaultProps)
      for (y in g = d.defaultProps, g)
        b[y] === void 0 && (b[y] = g[y]);
    return { $$typeof: i, type: d, key: E, ref: R, props: b, _owner: l.current };
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
var Nu;
function hw() {
  return Nu || (Nu = 1, process.env.NODE_ENV !== "production" && function() {
    var n = gn, i = Symbol.for("react.element"), r = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), l = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), f = Symbol.for("react.provider"), d = Symbol.for("react.context"), g = Symbol.for("react.forward_ref"), v = Symbol.for("react.suspense"), y = Symbol.for("react.suspense_list"), b = Symbol.for("react.memo"), E = Symbol.for("react.lazy"), R = Symbol.for("react.offscreen"), O = Symbol.iterator, w = "@@iterator";
    function A(_) {
      if (_ === null || typeof _ != "object")
        return null;
      var B = O && _[O] || _[w];
      return typeof B == "function" ? B : null;
    }
    var I = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function N(_) {
      {
        for (var B = arguments.length, z = new Array(B > 1 ? B - 1 : 0), te = 1; te < B; te++)
          z[te - 1] = arguments[te];
        M("error", _, z);
      }
    }
    function M(_, B, z) {
      {
        var te = I.ReactDebugCurrentFrame, Ae = te.getStackAddendum();
        Ae !== "" && (B += "%s", z = z.concat([Ae]));
        var Oe = z.map(function(ye) {
          return String(ye);
        });
        Oe.unshift("Warning: " + B), Function.prototype.apply.call(console[_], console, Oe);
      }
    }
    var j = !1, $ = !1, G = !1, U = !1, ee = !1, ue;
    ue = Symbol.for("react.module.reference");
    function he(_) {
      return !!(typeof _ == "string" || typeof _ == "function" || _ === s || _ === u || ee || _ === l || _ === v || _ === y || U || _ === R || j || $ || G || typeof _ == "object" && _ !== null && (_.$$typeof === E || _.$$typeof === b || _.$$typeof === f || _.$$typeof === d || _.$$typeof === g || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      _.$$typeof === ue || _.getModuleId !== void 0));
    }
    function Ce(_, B, z) {
      var te = _.displayName;
      if (te)
        return te;
      var Ae = B.displayName || B.name || "";
      return Ae !== "" ? z + "(" + Ae + ")" : z;
    }
    function q(_) {
      return _.displayName || "Context";
    }
    function re(_) {
      if (_ == null)
        return null;
      if (typeof _.tag == "number" && N("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof _ == "function")
        return _.displayName || _.name || null;
      if (typeof _ == "string")
        return _;
      switch (_) {
        case s:
          return "Fragment";
        case r:
          return "Portal";
        case u:
          return "Profiler";
        case l:
          return "StrictMode";
        case v:
          return "Suspense";
        case y:
          return "SuspenseList";
      }
      if (typeof _ == "object")
        switch (_.$$typeof) {
          case d:
            var B = _;
            return q(B) + ".Consumer";
          case f:
            var z = _;
            return q(z._context) + ".Provider";
          case g:
            return Ce(_, _.render, "ForwardRef");
          case b:
            var te = _.displayName || null;
            return te !== null ? te : re(_.type) || "Memo";
          case E: {
            var Ae = _, Oe = Ae._payload, ye = Ae._init;
            try {
              return re(ye(Oe));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var ne = Object.assign, Se = 0, oe, se, Y, me, ke, Ee, Yt;
    function qt() {
    }
    qt.__reactDisabledLog = !0;
    function Pt() {
      {
        if (Se === 0) {
          oe = console.log, se = console.info, Y = console.warn, me = console.error, ke = console.group, Ee = console.groupCollapsed, Yt = console.groupEnd;
          var _ = {
            configurable: !0,
            enumerable: !0,
            value: qt,
            writable: !0
          };
          Object.defineProperties(console, {
            info: _,
            log: _,
            warn: _,
            error: _,
            group: _,
            groupCollapsed: _,
            groupEnd: _
          });
        }
        Se++;
      }
    }
    function ut() {
      {
        if (Se--, Se === 0) {
          var _ = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ne({}, _, {
              value: oe
            }),
            info: ne({}, _, {
              value: se
            }),
            warn: ne({}, _, {
              value: Y
            }),
            error: ne({}, _, {
              value: me
            }),
            group: ne({}, _, {
              value: ke
            }),
            groupCollapsed: ne({}, _, {
              value: Ee
            }),
            groupEnd: ne({}, _, {
              value: Yt
            })
          });
        }
        Se < 0 && N("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var it = I.ReactCurrentDispatcher, Z;
    function ve(_, B, z) {
      {
        if (Z === void 0)
          try {
            throw Error();
          } catch (Ae) {
            var te = Ae.stack.trim().match(/\n( *(at )?)/);
            Z = te && te[1] || "";
          }
        return `
` + Z + _;
      }
    }
    var Le = !1, Re;
    {
      var be = typeof WeakMap == "function" ? WeakMap : Map;
      Re = new be();
    }
    function xe(_, B) {
      if (!_ || Le)
        return "";
      {
        var z = Re.get(_);
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
          var ye = function() {
            throw Error();
          };
          if (Object.defineProperty(ye.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ye, []);
            } catch (at) {
              te = at;
            }
            Reflect.construct(_, [], ye);
          } else {
            try {
              ye.call();
            } catch (at) {
              te = at;
            }
            _.call(ye.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (at) {
            te = at;
          }
          _();
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
                    return _.displayName && nt.includes("<anonymous>") && (nt = nt.replace("<anonymous>", _.displayName)), typeof _ == "function" && Re.set(_, nt), nt;
                  }
                while ($e >= 1 && ze >= 0);
              break;
            }
        }
      } finally {
        Le = !1, it.current = Oe, ut(), Error.prepareStackTrace = Ae;
      }
      var bn = _ ? _.displayName || _.name : "", Ot = bn ? ve(bn) : "";
      return typeof _ == "function" && Re.set(_, Ot), Ot;
    }
    function Ze(_, B, z) {
      return xe(_, !1);
    }
    function je(_) {
      var B = _.prototype;
      return !!(B && B.isReactComponent);
    }
    function st(_, B, z) {
      if (_ == null)
        return "";
      if (typeof _ == "function")
        return xe(_, je(_));
      if (typeof _ == "string")
        return ve(_);
      switch (_) {
        case v:
          return ve("Suspense");
        case y:
          return ve("SuspenseList");
      }
      if (typeof _ == "object")
        switch (_.$$typeof) {
          case g:
            return Ze(_.render);
          case b:
            return st(_.type, B, z);
          case E: {
            var te = _, Ae = te._payload, Oe = te._init;
            try {
              return st(Oe(Ae), B, z);
            } catch {
            }
          }
        }
      return "";
    }
    var yt = Object.prototype.hasOwnProperty, Je = {}, Bn = I.ReactDebugCurrentFrame;
    function jt(_) {
      if (_) {
        var B = _._owner, z = st(_.type, _._source, B ? B.type : null);
        Bn.setExtraStackFrame(z);
      } else
        Bn.setExtraStackFrame(null);
    }
    function $n(_, B, z, te, Ae) {
      {
        var Oe = Function.call.bind(yt);
        for (var ye in _)
          if (Oe(_, ye)) {
            var pe = void 0;
            try {
              if (typeof _[ye] != "function") {
                var tt = Error((te || "React class") + ": " + z + " type `" + ye + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof _[ye] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw tt.name = "Invariant Violation", tt;
              }
              pe = _[ye](B, ye, te, z, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch ($e) {
              pe = $e;
            }
            pe && !(pe instanceof Error) && (jt(Ae), N("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", te || "React class", z, ye, typeof pe), jt(null)), pe instanceof Error && !(pe.message in Je) && (Je[pe.message] = !0, jt(Ae), N("Failed %s type: %s", z, pe.message), jt(null));
          }
      }
    }
    var wt = Array.isArray;
    function nn(_) {
      return wt(_);
    }
    function er(_) {
      {
        var B = typeof Symbol == "function" && Symbol.toStringTag, z = B && _[Symbol.toStringTag] || _.constructor.name || "Object";
        return z;
      }
    }
    function Ki(_) {
      try {
        return yn(_), !1;
      } catch {
        return !0;
      }
    }
    function yn(_) {
      return "" + _;
    }
    function xo(_) {
      if (Ki(_))
        return N("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", er(_)), yn(_);
    }
    var Bt = I.ReactCurrentOwner, wn = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, tr, nr, Un;
    Un = {};
    function Ir(_) {
      if (yt.call(_, "ref")) {
        var B = Object.getOwnPropertyDescriptor(_, "ref").get;
        if (B && B.isReactWarning)
          return !1;
      }
      return _.ref !== void 0;
    }
    function Lr(_) {
      if (yt.call(_, "key")) {
        var B = Object.getOwnPropertyDescriptor(_, "key").get;
        if (B && B.isReactWarning)
          return !1;
      }
      return _.key !== void 0;
    }
    function Mr(_, B) {
      if (typeof _.ref == "string" && Bt.current && B && Bt.current.stateNode !== B) {
        var z = re(Bt.current.type);
        Un[z] || (N('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', re(Bt.current.type), _.ref), Un[z] = !0);
      }
    }
    function Dr(_, B) {
      {
        var z = function() {
          tr || (tr = !0, N("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", B));
        };
        z.isReactWarning = !0, Object.defineProperty(_, "key", {
          get: z,
          configurable: !0
        });
      }
    }
    function kr(_, B) {
      {
        var z = function() {
          nr || (nr = !0, N("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", B));
        };
        z.isReactWarning = !0, Object.defineProperty(_, "ref", {
          get: z,
          configurable: !0
        });
      }
    }
    var Fr = function(_, B, z, te, Ae, Oe, ye) {
      var pe = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: i,
        // Built-in properties that belong on the element
        type: _,
        key: B,
        ref: z,
        props: ye,
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
    function Yi(_, B, z, te, Ae) {
      {
        var Oe, ye = {}, pe = null, tt = null;
        z !== void 0 && (xo(z), pe = "" + z), Lr(B) && (xo(B.key), pe = "" + B.key), Ir(B) && (tt = B.ref, Mr(B, Ae));
        for (Oe in B)
          yt.call(B, Oe) && !wn.hasOwnProperty(Oe) && (ye[Oe] = B[Oe]);
        if (_ && _.defaultProps) {
          var $e = _.defaultProps;
          for (Oe in $e)
            ye[Oe] === void 0 && (ye[Oe] = $e[Oe]);
        }
        if (pe || tt) {
          var ze = typeof _ == "function" ? _.displayName || _.name || "Unknown" : _;
          pe && Dr(ye, ze), tt && kr(ye, ze);
        }
        return Fr(_, pe, tt, Ae, te, Bt.current, ye);
      }
    }
    var Wr = I.ReactCurrentOwner, yo = I.ReactDebugCurrentFrame;
    function rn(_) {
      if (_) {
        var B = _._owner, z = st(_.type, _._source, B ? B.type : null);
        yo.setExtraStackFrame(z);
      } else
        yo.setExtraStackFrame(null);
    }
    var rr;
    rr = !1;
    function jr(_) {
      return typeof _ == "object" && _ !== null && _.$$typeof === i;
    }
    function wo() {
      {
        if (Wr.current) {
          var _ = re(Wr.current.type);
          if (_)
            return `

Check the render method of \`` + _ + "`.";
        }
        return "";
      }
    }
    function qi(_) {
      return "";
    }
    var bo = {};
    function _o(_) {
      {
        var B = wo();
        if (!B) {
          var z = typeof _ == "string" ? _ : _.displayName || _.name;
          z && (B = `

Check the top-level render call using <` + z + ">.");
        }
        return B;
      }
    }
    function Co(_, B) {
      {
        if (!_._store || _._store.validated || _.key != null)
          return;
        _._store.validated = !0;
        var z = _o(B);
        if (bo[z])
          return;
        bo[z] = !0;
        var te = "";
        _ && _._owner && _._owner !== Wr.current && (te = " It was passed a child from " + re(_._owner.type) + "."), rn(_), N('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', z, te), rn(null);
      }
    }
    function So(_, B) {
      {
        if (typeof _ != "object")
          return;
        if (nn(_))
          for (var z = 0; z < _.length; z++) {
            var te = _[z];
            jr(te) && Co(te, B);
          }
        else if (jr(_))
          _._store && (_._store.validated = !0);
        else if (_) {
          var Ae = A(_);
          if (typeof Ae == "function" && Ae !== _.entries)
            for (var Oe = Ae.call(_), ye; !(ye = Oe.next()).done; )
              jr(ye.value) && Co(ye.value, B);
        }
      }
    }
    function Xi(_) {
      {
        var B = _.type;
        if (B == null || typeof B == "string")
          return;
        var z;
        if (typeof B == "function")
          z = B.propTypes;
        else if (typeof B == "object" && (B.$$typeof === g || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        B.$$typeof === b))
          z = B.propTypes;
        else
          return;
        if (z) {
          var te = re(B);
          $n(z, _.props, "prop", te, _);
        } else if (B.PropTypes !== void 0 && !rr) {
          rr = !0;
          var Ae = re(B);
          N("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Ae || "Unknown");
        }
        typeof B.getDefaultProps == "function" && !B.getDefaultProps.isReactClassApproved && N("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Br(_) {
      {
        for (var B = Object.keys(_.props), z = 0; z < B.length; z++) {
          var te = B[z];
          if (te !== "children" && te !== "key") {
            rn(_), N("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", te), rn(null);
            break;
          }
        }
        _.ref !== null && (rn(_), N("Invalid attribute `ref` supplied to `React.Fragment`."), rn(null));
      }
    }
    var Eo = {};
    function or(_, B, z, te, Ae, Oe) {
      {
        var ye = he(_);
        if (!ye) {
          var pe = "";
          (_ === void 0 || typeof _ == "object" && _ !== null && Object.keys(_).length === 0) && (pe += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var tt = qi();
          tt ? pe += tt : pe += wo();
          var $e;
          _ === null ? $e = "null" : nn(_) ? $e = "array" : _ !== void 0 && _.$$typeof === i ? ($e = "<" + (re(_.type) || "Unknown") + " />", pe = " Did you accidentally export a JSX literal instead of a component?") : $e = typeof _, N("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", $e, pe);
        }
        var ze = Yi(_, B, z, Ae, Oe);
        if (ze == null)
          return ze;
        if (ye) {
          var nt = B.children;
          if (nt !== void 0)
            if (te)
              if (nn(nt)) {
                for (var bn = 0; bn < nt.length; bn++)
                  So(nt[bn], _);
                Object.freeze && Object.freeze(nt);
              } else
                N("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              So(nt, _);
        }
        if (yt.call(B, "key")) {
          var Ot = re(_), at = Object.keys(B).filter(function(Ro) {
            return Ro !== "key";
          }), $r = at.length > 0 ? "{key: someKey, " + at.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Eo[Ot + $r]) {
            var ts = at.length > 0 ? "{" + at.join(": ..., ") + ": ...}" : "{}";
            N(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, $r, Ot, ts, Ot), Eo[Ot + $r] = !0;
          }
        }
        return _ === s ? Br(ze) : Xi(ze), ze;
      }
    }
    function Zi(_, B, z) {
      return or(_, B, z, !0);
    }
    function Ji(_, B, z) {
      return or(_, B, z, !1);
    }
    var Qi = Ji, es = Zi;
    io.Fragment = s, io.jsx = Qi, io.jsxs = es;
  }()), io;
}
process.env.NODE_ENV === "production" ? Sa.exports = pw() : Sa.exports = hw();
var C = Sa.exports, Ei = { exports: {} };
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
    var r, s = "4.17.21", l = 200, u = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", f = "Expected a function", d = "Invalid `variable` option passed into `_.template`", g = "__lodash_hash_undefined__", v = 500, y = "__lodash_placeholder__", b = 1, E = 2, R = 4, O = 1, w = 2, A = 1, I = 2, N = 4, M = 8, j = 16, $ = 32, G = 64, U = 128, ee = 256, ue = 512, he = 30, Ce = "...", q = 800, re = 16, ne = 1, Se = 2, oe = 3, se = 1 / 0, Y = 9007199254740991, me = 17976931348623157e292, ke = NaN, Ee = 4294967295, Yt = Ee - 1, qt = Ee >>> 1, Pt = [
      ["ary", U],
      ["bind", A],
      ["bindKey", I],
      ["curry", M],
      ["curryRight", j],
      ["flip", ue],
      ["partial", $],
      ["partialRight", G],
      ["rearg", ee]
    ], ut = "[object Arguments]", it = "[object Array]", Z = "[object AsyncFunction]", ve = "[object Boolean]", Le = "[object Date]", Re = "[object DOMException]", be = "[object Error]", xe = "[object Function]", Ze = "[object GeneratorFunction]", je = "[object Map]", st = "[object Number]", yt = "[object Null]", Je = "[object Object]", Bn = "[object Promise]", jt = "[object Proxy]", $n = "[object RegExp]", wt = "[object Set]", nn = "[object String]", er = "[object Symbol]", Ki = "[object Undefined]", yn = "[object WeakMap]", xo = "[object WeakSet]", Bt = "[object ArrayBuffer]", wn = "[object DataView]", tr = "[object Float32Array]", nr = "[object Float64Array]", Un = "[object Int8Array]", Ir = "[object Int16Array]", Lr = "[object Int32Array]", Mr = "[object Uint8Array]", Dr = "[object Uint8ClampedArray]", kr = "[object Uint16Array]", Fr = "[object Uint32Array]", Yi = /\b__p \+= '';/g, Wr = /\b(__p \+=) '' \+/g, yo = /(__e\(.*?\)|\b__t\)) \+\n'';/g, rn = /&(?:amp|lt|gt|quot|#39);/g, rr = /[&<>"']/g, jr = RegExp(rn.source), wo = RegExp(rr.source), qi = /<%-([\s\S]+?)%>/g, bo = /<%([\s\S]+?)%>/g, _o = /<%=([\s\S]+?)%>/g, Co = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, So = /^\w*$/, Xi = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Br = /[\\^$.*+?()[\]{}|]/g, Eo = RegExp(Br.source), or = /^\s+/, Zi = /\s/, Ji = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Qi = /\{\n\/\* \[wrapped with (.+)\] \*/, es = /,? & /, _ = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, B = /[()=,{}\[\]\/\s]/, z = /\\(\\)?/g, te = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Ae = /\w*$/, Oe = /^[-+]0x[0-9a-f]+$/i, ye = /^0b[01]+$/i, pe = /^\[object .+?Constructor\]$/, tt = /^0o[0-7]+$/i, $e = /^(?:0|[1-9]\d*)$/, ze = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, nt = /($^)/, bn = /['\n\r\u2028\u2029\\]/g, Ot = "\\ud800-\\udfff", at = "\\u0300-\\u036f", $r = "\\ufe20-\\ufe2f", ts = "\\u20d0-\\u20ff", Ro = at + $r + ts, sl = "\\u2700-\\u27bf", al = "a-z\\xdf-\\xf6\\xf8-\\xff", sp = "\\xac\\xb1\\xd7\\xf7", ap = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", lp = "\\u2000-\\u206f", cp = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", ll = "A-Z\\xc0-\\xd6\\xd8-\\xde", cl = "\\ufe0e\\ufe0f", ul = sp + ap + lp + cp, ns = "['’]", up = "[" + Ot + "]", fl = "[" + ul + "]", Ao = "[" + Ro + "]", dl = "\\d+", fp = "[" + sl + "]", pl = "[" + al + "]", hl = "[^" + Ot + ul + dl + sl + al + ll + "]", rs = "\\ud83c[\\udffb-\\udfff]", dp = "(?:" + Ao + "|" + rs + ")", gl = "[^" + Ot + "]", os = "(?:\\ud83c[\\udde6-\\uddff]){2}", is = "[\\ud800-\\udbff][\\udc00-\\udfff]", ir = "[" + ll + "]", ml = "\\u200d", vl = "(?:" + pl + "|" + hl + ")", pp = "(?:" + ir + "|" + hl + ")", xl = "(?:" + ns + "(?:d|ll|m|re|s|t|ve))?", yl = "(?:" + ns + "(?:D|LL|M|RE|S|T|VE))?", wl = dp + "?", bl = "[" + cl + "]?", hp = "(?:" + ml + "(?:" + [gl, os, is].join("|") + ")" + bl + wl + ")*", gp = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", mp = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", _l = bl + wl + hp, vp = "(?:" + [fp, os, is].join("|") + ")" + _l, xp = "(?:" + [gl + Ao + "?", Ao, os, is, up].join("|") + ")", yp = RegExp(ns, "g"), wp = RegExp(Ao, "g"), ss = RegExp(rs + "(?=" + rs + ")|" + xp + _l, "g"), bp = RegExp([
      ir + "?" + pl + "+" + xl + "(?=" + [fl, ir, "$"].join("|") + ")",
      pp + "+" + yl + "(?=" + [fl, ir + vl, "$"].join("|") + ")",
      ir + "?" + vl + "+" + xl,
      ir + "+" + yl,
      mp,
      gp,
      dl,
      vp
    ].join("|"), "g"), _p = RegExp("[" + ml + Ot + Ro + cl + "]"), Cp = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Sp = [
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
    ], Ep = -1, Fe = {};
    Fe[tr] = Fe[nr] = Fe[Un] = Fe[Ir] = Fe[Lr] = Fe[Mr] = Fe[Dr] = Fe[kr] = Fe[Fr] = !0, Fe[ut] = Fe[it] = Fe[Bt] = Fe[ve] = Fe[wn] = Fe[Le] = Fe[be] = Fe[xe] = Fe[je] = Fe[st] = Fe[Je] = Fe[$n] = Fe[wt] = Fe[nn] = Fe[yn] = !1;
    var Me = {};
    Me[ut] = Me[it] = Me[Bt] = Me[wn] = Me[ve] = Me[Le] = Me[tr] = Me[nr] = Me[Un] = Me[Ir] = Me[Lr] = Me[je] = Me[st] = Me[Je] = Me[$n] = Me[wt] = Me[nn] = Me[er] = Me[Mr] = Me[Dr] = Me[kr] = Me[Fr] = !0, Me[be] = Me[xe] = Me[yn] = !1;
    var Rp = {
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
    }, Ap = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, Tp = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, Pp = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, Op = parseFloat, Np = parseInt, Cl = typeof ro == "object" && ro && ro.Object === Object && ro, Ip = typeof self == "object" && self && self.Object === Object && self, rt = Cl || Ip || Function("return this")(), as = i && !i.nodeType && i, Hn = as && !0 && n && !n.nodeType && n, Sl = Hn && Hn.exports === as, ls = Sl && Cl.process, Nt = function() {
      try {
        var T = Hn && Hn.require && Hn.require("util").types;
        return T || ls && ls.binding && ls.binding("util");
      } catch {
      }
    }(), El = Nt && Nt.isArrayBuffer, Rl = Nt && Nt.isDate, Al = Nt && Nt.isMap, Tl = Nt && Nt.isRegExp, Pl = Nt && Nt.isSet, Ol = Nt && Nt.isTypedArray;
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
    function Lp(T, D, L, V) {
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
    function Mp(T, D) {
      for (var L = T == null ? 0 : T.length; L-- && D(T[L], L, T) !== !1; )
        ;
      return T;
    }
    function Nl(T, D) {
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
    function To(T, D) {
      var L = T == null ? 0 : T.length;
      return !!L && sr(T, D, 0) > -1;
    }
    function cs(T, D, L) {
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
    function us(T, D, L, V) {
      var ie = -1, Te = T == null ? 0 : T.length;
      for (V && Te && (L = T[++ie]); ++ie < Te; )
        L = D(L, T[ie], ie, T);
      return L;
    }
    function Dp(T, D, L, V) {
      var ie = T == null ? 0 : T.length;
      for (V && ie && (L = T[--ie]); ie--; )
        L = D(L, T[ie], ie, T);
      return L;
    }
    function fs(T, D) {
      for (var L = -1, V = T == null ? 0 : T.length; ++L < V; )
        if (D(T[L], L, T))
          return !0;
      return !1;
    }
    var kp = ds("length");
    function Fp(T) {
      return T.split("");
    }
    function Wp(T) {
      return T.match(_) || [];
    }
    function Il(T, D, L) {
      var V;
      return L(T, function(ie, Te, qe) {
        if (D(ie, Te, qe))
          return V = Te, !1;
      }), V;
    }
    function Po(T, D, L, V) {
      for (var ie = T.length, Te = L + (V ? 1 : -1); V ? Te-- : ++Te < ie; )
        if (D(T[Te], Te, T))
          return Te;
      return -1;
    }
    function sr(T, D, L) {
      return D === D ? Xp(T, D, L) : Po(T, Ll, L);
    }
    function jp(T, D, L, V) {
      for (var ie = L - 1, Te = T.length; ++ie < Te; )
        if (V(T[ie], D))
          return ie;
      return -1;
    }
    function Ll(T) {
      return T !== T;
    }
    function Ml(T, D) {
      var L = T == null ? 0 : T.length;
      return L ? hs(T, D) / L : ke;
    }
    function ds(T) {
      return function(D) {
        return D == null ? r : D[T];
      };
    }
    function ps(T) {
      return function(D) {
        return T == null ? r : T[D];
      };
    }
    function Dl(T, D, L, V, ie) {
      return ie(T, function(Te, qe, Ie) {
        L = V ? (V = !1, Te) : D(L, Te, qe, Ie);
      }), L;
    }
    function Bp(T, D) {
      var L = T.length;
      for (T.sort(D); L--; )
        T[L] = T[L].value;
      return T;
    }
    function hs(T, D) {
      for (var L, V = -1, ie = T.length; ++V < ie; ) {
        var Te = D(T[V]);
        Te !== r && (L = L === r ? Te : L + Te);
      }
      return L;
    }
    function gs(T, D) {
      for (var L = -1, V = Array(T); ++L < T; )
        V[L] = D(L);
      return V;
    }
    function $p(T, D) {
      return Be(D, function(L) {
        return [L, T[L]];
      });
    }
    function kl(T) {
      return T && T.slice(0, Bl(T) + 1).replace(or, "");
    }
    function _t(T) {
      return function(D) {
        return T(D);
      };
    }
    function ms(T, D) {
      return Be(D, function(L) {
        return T[L];
      });
    }
    function Ur(T, D) {
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
    function Up(T, D) {
      for (var L = T.length, V = 0; L--; )
        T[L] === D && ++V;
      return V;
    }
    var Hp = ps(Rp), zp = ps(Ap);
    function Vp(T) {
      return "\\" + Pp[T];
    }
    function Gp(T, D) {
      return T == null ? r : T[D];
    }
    function ar(T) {
      return _p.test(T);
    }
    function Kp(T) {
      return Cp.test(T);
    }
    function Yp(T) {
      for (var D, L = []; !(D = T.next()).done; )
        L.push(D.value);
      return L;
    }
    function vs(T) {
      var D = -1, L = Array(T.size);
      return T.forEach(function(V, ie) {
        L[++D] = [ie, V];
      }), L;
    }
    function jl(T, D) {
      return function(L) {
        return T(D(L));
      };
    }
    function Sn(T, D) {
      for (var L = -1, V = T.length, ie = 0, Te = []; ++L < V; ) {
        var qe = T[L];
        (qe === D || qe === y) && (T[L] = y, Te[ie++] = L);
      }
      return Te;
    }
    function Oo(T) {
      var D = -1, L = Array(T.size);
      return T.forEach(function(V) {
        L[++D] = V;
      }), L;
    }
    function qp(T) {
      var D = -1, L = Array(T.size);
      return T.forEach(function(V) {
        L[++D] = [V, V];
      }), L;
    }
    function Xp(T, D, L) {
      for (var V = L - 1, ie = T.length; ++V < ie; )
        if (T[V] === D)
          return V;
      return -1;
    }
    function Zp(T, D, L) {
      for (var V = L + 1; V--; )
        if (T[V] === D)
          return V;
      return V;
    }
    function lr(T) {
      return ar(T) ? Qp(T) : kp(T);
    }
    function $t(T) {
      return ar(T) ? eh(T) : Fp(T);
    }
    function Bl(T) {
      for (var D = T.length; D-- && Zi.test(T.charAt(D)); )
        ;
      return D;
    }
    var Jp = ps(Tp);
    function Qp(T) {
      for (var D = ss.lastIndex = 0; ss.test(T); )
        ++D;
      return D;
    }
    function eh(T) {
      return T.match(ss) || [];
    }
    function th(T) {
      return T.match(bp) || [];
    }
    var nh = function T(D) {
      D = D == null ? rt : cr.defaults(rt.Object(), D, cr.pick(rt, Sp));
      var L = D.Array, V = D.Date, ie = D.Error, Te = D.Function, qe = D.Math, Ie = D.Object, xs = D.RegExp, rh = D.String, Lt = D.TypeError, No = L.prototype, oh = Te.prototype, ur = Ie.prototype, Io = D["__core-js_shared__"], Lo = oh.toString, Ne = ur.hasOwnProperty, ih = 0, $l = function() {
        var e = /[^.]+$/.exec(Io && Io.keys && Io.keys.IE_PROTO || "");
        return e ? "Symbol(src)_1." + e : "";
      }(), Mo = ur.toString, sh = Lo.call(Ie), ah = rt._, lh = xs(
        "^" + Lo.call(Ne).replace(Br, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), Do = Sl ? D.Buffer : r, En = D.Symbol, ko = D.Uint8Array, Ul = Do ? Do.allocUnsafe : r, Fo = jl(Ie.getPrototypeOf, Ie), Hl = Ie.create, zl = ur.propertyIsEnumerable, Wo = No.splice, Vl = En ? En.isConcatSpreadable : r, Hr = En ? En.iterator : r, zn = En ? En.toStringTag : r, jo = function() {
        try {
          var e = qn(Ie, "defineProperty");
          return e({}, "", {}), e;
        } catch {
        }
      }(), ch = D.clearTimeout !== rt.clearTimeout && D.clearTimeout, uh = V && V.now !== rt.Date.now && V.now, fh = D.setTimeout !== rt.setTimeout && D.setTimeout, Bo = qe.ceil, $o = qe.floor, ys = Ie.getOwnPropertySymbols, dh = Do ? Do.isBuffer : r, Gl = D.isFinite, ph = No.join, hh = jl(Ie.keys, Ie), Xe = qe.max, lt = qe.min, gh = V.now, mh = D.parseInt, Kl = qe.random, vh = No.reverse, ws = qn(D, "DataView"), zr = qn(D, "Map"), bs = qn(D, "Promise"), fr = qn(D, "Set"), Vr = qn(D, "WeakMap"), Gr = qn(Ie, "create"), Uo = Vr && new Vr(), dr = {}, xh = Xn(ws), yh = Xn(zr), wh = Xn(bs), bh = Xn(fr), _h = Xn(Vr), Ho = En ? En.prototype : r, Kr = Ho ? Ho.valueOf : r, Yl = Ho ? Ho.toString : r;
      function p(e) {
        if (Ve(e) && !ae(e) && !(e instanceof we)) {
          if (e instanceof Mt)
            return e;
          if (Ne.call(e, "__wrapped__"))
            return qc(e);
        }
        return new Mt(e);
      }
      var pr = /* @__PURE__ */ function() {
        function e() {
        }
        return function(t) {
          if (!Ue(t))
            return {};
          if (Hl)
            return Hl(t);
          e.prototype = t;
          var o = new e();
          return e.prototype = r, o;
        };
      }();
      function zo() {
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
        escape: qi,
        /**
         * Used to detect code to be evaluated.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        evaluate: bo,
        /**
         * Used to detect `data` property values to inject.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        interpolate: _o,
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
      }, p.prototype = zo.prototype, p.prototype.constructor = p, Mt.prototype = pr(zo.prototype), Mt.prototype.constructor = Mt;
      function we(e) {
        this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Ee, this.__views__ = [];
      }
      function Ch() {
        var e = new we(this.__wrapped__);
        return e.__actions__ = gt(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = gt(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = gt(this.__views__), e;
      }
      function Sh() {
        if (this.__filtered__) {
          var e = new we(this);
          e.__dir__ = -1, e.__filtered__ = !0;
        } else
          e = this.clone(), e.__dir__ *= -1;
        return e;
      }
      function Eh() {
        var e = this.__wrapped__.value(), t = this.__dir__, o = ae(e), a = t < 0, c = o ? e.length : 0, h = Fg(0, c, this.__views__), x = h.start, S = h.end, P = S - x, k = a ? S : x - 1, F = this.__iteratees__, W = F.length, H = 0, K = lt(P, this.__takeCount__);
        if (!o || !a && c == P && K == P)
          return xc(e, this.__actions__);
        var J = [];
        e:
          for (; P-- && H < K; ) {
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
      we.prototype = pr(zo.prototype), we.prototype.constructor = we;
      function Vn(e) {
        var t = -1, o = e == null ? 0 : e.length;
        for (this.clear(); ++t < o; ) {
          var a = e[t];
          this.set(a[0], a[1]);
        }
      }
      function Rh() {
        this.__data__ = Gr ? Gr(null) : {}, this.size = 0;
      }
      function Ah(e) {
        var t = this.has(e) && delete this.__data__[e];
        return this.size -= t ? 1 : 0, t;
      }
      function Th(e) {
        var t = this.__data__;
        if (Gr) {
          var o = t[e];
          return o === g ? r : o;
        }
        return Ne.call(t, e) ? t[e] : r;
      }
      function Ph(e) {
        var t = this.__data__;
        return Gr ? t[e] !== r : Ne.call(t, e);
      }
      function Oh(e, t) {
        var o = this.__data__;
        return this.size += this.has(e) ? 0 : 1, o[e] = Gr && t === r ? g : t, this;
      }
      Vn.prototype.clear = Rh, Vn.prototype.delete = Ah, Vn.prototype.get = Th, Vn.prototype.has = Ph, Vn.prototype.set = Oh;
      function on(e) {
        var t = -1, o = e == null ? 0 : e.length;
        for (this.clear(); ++t < o; ) {
          var a = e[t];
          this.set(a[0], a[1]);
        }
      }
      function Nh() {
        this.__data__ = [], this.size = 0;
      }
      function Ih(e) {
        var t = this.__data__, o = Vo(t, e);
        if (o < 0)
          return !1;
        var a = t.length - 1;
        return o == a ? t.pop() : Wo.call(t, o, 1), --this.size, !0;
      }
      function Lh(e) {
        var t = this.__data__, o = Vo(t, e);
        return o < 0 ? r : t[o][1];
      }
      function Mh(e) {
        return Vo(this.__data__, e) > -1;
      }
      function Dh(e, t) {
        var o = this.__data__, a = Vo(o, e);
        return a < 0 ? (++this.size, o.push([e, t])) : o[a][1] = t, this;
      }
      on.prototype.clear = Nh, on.prototype.delete = Ih, on.prototype.get = Lh, on.prototype.has = Mh, on.prototype.set = Dh;
      function sn(e) {
        var t = -1, o = e == null ? 0 : e.length;
        for (this.clear(); ++t < o; ) {
          var a = e[t];
          this.set(a[0], a[1]);
        }
      }
      function kh() {
        this.size = 0, this.__data__ = {
          hash: new Vn(),
          map: new (zr || on)(),
          string: new Vn()
        };
      }
      function Fh(e) {
        var t = ri(this, e).delete(e);
        return this.size -= t ? 1 : 0, t;
      }
      function Wh(e) {
        return ri(this, e).get(e);
      }
      function jh(e) {
        return ri(this, e).has(e);
      }
      function Bh(e, t) {
        var o = ri(this, e), a = o.size;
        return o.set(e, t), this.size += o.size == a ? 0 : 1, this;
      }
      sn.prototype.clear = kh, sn.prototype.delete = Fh, sn.prototype.get = Wh, sn.prototype.has = jh, sn.prototype.set = Bh;
      function Gn(e) {
        var t = -1, o = e == null ? 0 : e.length;
        for (this.__data__ = new sn(); ++t < o; )
          this.add(e[t]);
      }
      function $h(e) {
        return this.__data__.set(e, g), this;
      }
      function Uh(e) {
        return this.__data__.has(e);
      }
      Gn.prototype.add = Gn.prototype.push = $h, Gn.prototype.has = Uh;
      function Ut(e) {
        var t = this.__data__ = new on(e);
        this.size = t.size;
      }
      function Hh() {
        this.__data__ = new on(), this.size = 0;
      }
      function zh(e) {
        var t = this.__data__, o = t.delete(e);
        return this.size = t.size, o;
      }
      function Vh(e) {
        return this.__data__.get(e);
      }
      function Gh(e) {
        return this.__data__.has(e);
      }
      function Kh(e, t) {
        var o = this.__data__;
        if (o instanceof on) {
          var a = o.__data__;
          if (!zr || a.length < l - 1)
            return a.push([e, t]), this.size = ++o.size, this;
          o = this.__data__ = new sn(a);
        }
        return o.set(e, t), this.size = o.size, this;
      }
      Ut.prototype.clear = Hh, Ut.prototype.delete = zh, Ut.prototype.get = Vh, Ut.prototype.has = Gh, Ut.prototype.set = Kh;
      function ql(e, t) {
        var o = ae(e), a = !o && Zn(e), c = !o && !a && On(e), h = !o && !a && !c && vr(e), x = o || a || c || h, S = x ? gs(e.length, rh) : [], P = S.length;
        for (var k in e)
          (t || Ne.call(e, k)) && !(x && // Safari 9 has enumerable `arguments.length` in strict mode.
          (k == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          c && (k == "offset" || k == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          h && (k == "buffer" || k == "byteLength" || k == "byteOffset") || // Skip index properties.
          un(k, P))) && S.push(k);
        return S;
      }
      function Xl(e) {
        var t = e.length;
        return t ? e[Is(0, t - 1)] : r;
      }
      function Yh(e, t) {
        return oi(gt(e), Kn(t, 0, e.length));
      }
      function qh(e) {
        return oi(gt(e));
      }
      function _s(e, t, o) {
        (o !== r && !Ht(e[t], o) || o === r && !(t in e)) && an(e, t, o);
      }
      function Yr(e, t, o) {
        var a = e[t];
        (!(Ne.call(e, t) && Ht(a, o)) || o === r && !(t in e)) && an(e, t, o);
      }
      function Vo(e, t) {
        for (var o = e.length; o--; )
          if (Ht(e[o][0], t))
            return o;
        return -1;
      }
      function Xh(e, t, o, a) {
        return Rn(e, function(c, h, x) {
          t(a, c, o(c), x);
        }), a;
      }
      function Zl(e, t) {
        return e && Zt(t, Qe(t), e);
      }
      function Zh(e, t) {
        return e && Zt(t, vt(t), e);
      }
      function an(e, t, o) {
        t == "__proto__" && jo ? jo(e, t, {
          configurable: !0,
          enumerable: !0,
          value: o,
          writable: !0
        }) : e[t] = o;
      }
      function Cs(e, t) {
        for (var o = -1, a = t.length, c = L(a), h = e == null; ++o < a; )
          c[o] = h ? r : ra(e, t[o]);
        return c;
      }
      function Kn(e, t, o) {
        return e === e && (o !== r && (e = e <= o ? e : o), t !== r && (e = e >= t ? e : t)), e;
      }
      function Dt(e, t, o, a, c, h) {
        var x, S = t & b, P = t & E, k = t & R;
        if (o && (x = c ? o(e, a, c, h) : o(e)), x !== r)
          return x;
        if (!Ue(e))
          return e;
        var F = ae(e);
        if (F) {
          if (x = jg(e), !S)
            return gt(e, x);
        } else {
          var W = ct(e), H = W == xe || W == Ze;
          if (On(e))
            return bc(e, S);
          if (W == Je || W == ut || H && !c) {
            if (x = P || H ? {} : Bc(e), !S)
              return P ? Tg(e, Zh(x, e)) : Ag(e, Zl(x, e));
          } else {
            if (!Me[W])
              return c ? e : {};
            x = Bg(e, W, S);
          }
        }
        h || (h = new Ut());
        var K = h.get(e);
        if (K)
          return K;
        h.set(e, x), gu(e) ? e.forEach(function(Q) {
          x.add(Dt(Q, t, o, Q, e, h));
        }) : pu(e) && e.forEach(function(Q, ge) {
          x.set(ge, Dt(Q, t, o, ge, e, h));
        });
        var J = k ? P ? Hs : Us : P ? vt : Qe, fe = F ? r : J(e);
        return It(fe || e, function(Q, ge) {
          fe && (ge = Q, Q = e[ge]), Yr(x, ge, Dt(Q, t, o, ge, e, h));
        }), x;
      }
      function Jh(e) {
        var t = Qe(e);
        return function(o) {
          return Jl(o, e, t);
        };
      }
      function Jl(e, t, o) {
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
      function Ql(e, t, o) {
        if (typeof e != "function")
          throw new Lt(f);
        return to(function() {
          e.apply(r, o);
        }, t);
      }
      function qr(e, t, o, a) {
        var c = -1, h = To, x = !0, S = e.length, P = [], k = t.length;
        if (!S)
          return P;
        o && (t = Be(t, _t(o))), a ? (h = cs, x = !1) : t.length >= l && (h = Ur, x = !1, t = new Gn(t));
        e:
          for (; ++c < S; ) {
            var F = e[c], W = o == null ? F : o(F);
            if (F = a || F !== 0 ? F : 0, x && W === W) {
              for (var H = k; H--; )
                if (t[H] === W)
                  continue e;
              P.push(F);
            } else
              h(t, W, a) || P.push(F);
          }
        return P;
      }
      var Rn = Rc(Xt), ec = Rc(Es, !0);
      function Qh(e, t) {
        var o = !0;
        return Rn(e, function(a, c, h) {
          return o = !!t(a, c, h), o;
        }), o;
      }
      function Go(e, t, o) {
        for (var a = -1, c = e.length; ++a < c; ) {
          var h = e[a], x = t(h);
          if (x != null && (S === r ? x === x && !St(x) : o(x, S)))
            var S = x, P = h;
        }
        return P;
      }
      function eg(e, t, o, a) {
        var c = e.length;
        for (o = le(o), o < 0 && (o = -o > c ? 0 : c + o), a = a === r || a > c ? c : le(a), a < 0 && (a += c), a = o > a ? 0 : vu(a); o < a; )
          e[o++] = t;
        return e;
      }
      function tc(e, t) {
        var o = [];
        return Rn(e, function(a, c, h) {
          t(a, c, h) && o.push(a);
        }), o;
      }
      function ot(e, t, o, a, c) {
        var h = -1, x = e.length;
        for (o || (o = Ug), c || (c = []); ++h < x; ) {
          var S = e[h];
          t > 0 && o(S) ? t > 1 ? ot(S, t - 1, o, a, c) : Cn(c, S) : a || (c[c.length] = S);
        }
        return c;
      }
      var Ss = Ac(), nc = Ac(!0);
      function Xt(e, t) {
        return e && Ss(e, t, Qe);
      }
      function Es(e, t) {
        return e && nc(e, t, Qe);
      }
      function Ko(e, t) {
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
      function rc(e, t, o) {
        var a = t(e);
        return ae(e) ? a : Cn(a, o(e));
      }
      function ft(e) {
        return e == null ? e === r ? Ki : yt : zn && zn in Ie(e) ? kg(e) : qg(e);
      }
      function Rs(e, t) {
        return e > t;
      }
      function tg(e, t) {
        return e != null && Ne.call(e, t);
      }
      function ng(e, t) {
        return e != null && t in Ie(e);
      }
      function rg(e, t, o) {
        return e >= lt(t, o) && e < Xe(t, o);
      }
      function As(e, t, o) {
        for (var a = o ? cs : To, c = e[0].length, h = e.length, x = h, S = L(h), P = 1 / 0, k = []; x--; ) {
          var F = e[x];
          x && t && (F = Be(F, _t(t))), P = lt(F.length, P), S[x] = !o && (t || c >= 120 && F.length >= 120) ? new Gn(x && F) : r;
        }
        F = e[0];
        var W = -1, H = S[0];
        e:
          for (; ++W < c && k.length < P; ) {
            var K = F[W], J = t ? t(K) : K;
            if (K = o || K !== 0 ? K : 0, !(H ? Ur(H, J) : a(k, J, o))) {
              for (x = h; --x; ) {
                var fe = S[x];
                if (!(fe ? Ur(fe, J) : a(e[x], J, o)))
                  continue e;
              }
              H && H.push(J), k.push(K);
            }
          }
        return k;
      }
      function og(e, t, o, a) {
        return Xt(e, function(c, h, x) {
          t(a, o(c), h, x);
        }), a;
      }
      function Xr(e, t, o) {
        t = Tn(t, e), e = zc(e, t);
        var a = e == null ? e : e[Jt(Ft(t))];
        return a == null ? r : bt(a, e, o);
      }
      function oc(e) {
        return Ve(e) && ft(e) == ut;
      }
      function ig(e) {
        return Ve(e) && ft(e) == Bt;
      }
      function sg(e) {
        return Ve(e) && ft(e) == Le;
      }
      function Zr(e, t, o, a, c) {
        return e === t ? !0 : e == null || t == null || !Ve(e) && !Ve(t) ? e !== e && t !== t : ag(e, t, o, a, Zr, c);
      }
      function ag(e, t, o, a, c, h) {
        var x = ae(e), S = ae(t), P = x ? it : ct(e), k = S ? it : ct(t);
        P = P == ut ? Je : P, k = k == ut ? Je : k;
        var F = P == Je, W = k == Je, H = P == k;
        if (H && On(e)) {
          if (!On(t))
            return !1;
          x = !0, F = !1;
        }
        if (H && !F)
          return h || (h = new Ut()), x || vr(e) ? Fc(e, t, o, a, c, h) : Mg(e, t, P, o, a, c, h);
        if (!(o & O)) {
          var K = F && Ne.call(e, "__wrapped__"), J = W && Ne.call(t, "__wrapped__");
          if (K || J) {
            var fe = K ? e.value() : e, Q = J ? t.value() : t;
            return h || (h = new Ut()), c(fe, Q, o, a, h);
          }
        }
        return H ? (h || (h = new Ut()), Dg(e, t, o, a, c, h)) : !1;
      }
      function lg(e) {
        return Ve(e) && ct(e) == je;
      }
      function Ts(e, t, o, a) {
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
          var P = S[0], k = e[P], F = S[1];
          if (x && S[2]) {
            if (k === r && !(P in e))
              return !1;
          } else {
            var W = new Ut();
            if (a)
              var H = a(k, F, P, e, t, W);
            if (!(H === r ? Zr(F, k, O | w, a, W) : H))
              return !1;
          }
        }
        return !0;
      }
      function ic(e) {
        if (!Ue(e) || zg(e))
          return !1;
        var t = fn(e) ? lh : pe;
        return t.test(Xn(e));
      }
      function cg(e) {
        return Ve(e) && ft(e) == $n;
      }
      function ug(e) {
        return Ve(e) && ct(e) == wt;
      }
      function fg(e) {
        return Ve(e) && ui(e.length) && !!Fe[ft(e)];
      }
      function sc(e) {
        return typeof e == "function" ? e : e == null ? xt : typeof e == "object" ? ae(e) ? cc(e[0], e[1]) : lc(e) : Tu(e);
      }
      function Ps(e) {
        if (!eo(e))
          return hh(e);
        var t = [];
        for (var o in Ie(e))
          Ne.call(e, o) && o != "constructor" && t.push(o);
        return t;
      }
      function dg(e) {
        if (!Ue(e))
          return Yg(e);
        var t = eo(e), o = [];
        for (var a in e)
          a == "constructor" && (t || !Ne.call(e, a)) || o.push(a);
        return o;
      }
      function Os(e, t) {
        return e < t;
      }
      function ac(e, t) {
        var o = -1, a = mt(e) ? L(e.length) : [];
        return Rn(e, function(c, h, x) {
          a[++o] = t(c, h, x);
        }), a;
      }
      function lc(e) {
        var t = Vs(e);
        return t.length == 1 && t[0][2] ? Uc(t[0][0], t[0][1]) : function(o) {
          return o === e || Ts(o, e, t);
        };
      }
      function cc(e, t) {
        return Ks(e) && $c(t) ? Uc(Jt(e), t) : function(o) {
          var a = ra(o, e);
          return a === r && a === t ? oa(o, e) : Zr(t, a, O | w);
        };
      }
      function Yo(e, t, o, a, c) {
        e !== t && Ss(t, function(h, x) {
          if (c || (c = new Ut()), Ue(h))
            pg(e, t, x, o, Yo, a, c);
          else {
            var S = a ? a(qs(e, x), h, x + "", e, t, c) : r;
            S === r && (S = h), _s(e, x, S);
          }
        }, vt);
      }
      function pg(e, t, o, a, c, h, x) {
        var S = qs(e, o), P = qs(t, o), k = x.get(P);
        if (k) {
          _s(e, o, k);
          return;
        }
        var F = h ? h(S, P, o + "", e, t, x) : r, W = F === r;
        if (W) {
          var H = ae(P), K = !H && On(P), J = !H && !K && vr(P);
          F = P, H || K || J ? ae(S) ? F = S : Ge(S) ? F = gt(S) : K ? (W = !1, F = bc(P, !0)) : J ? (W = !1, F = _c(P, !0)) : F = [] : no(P) || Zn(P) ? (F = S, Zn(S) ? F = xu(S) : (!Ue(S) || fn(S)) && (F = Bc(P))) : W = !1;
        }
        W && (x.set(P, F), c(F, P, a, h, x), x.delete(P)), _s(e, o, F);
      }
      function uc(e, t) {
        var o = e.length;
        if (o)
          return t += t < 0 ? o : 0, un(t, o) ? e[t] : r;
      }
      function fc(e, t, o) {
        t.length ? t = Be(t, function(h) {
          return ae(h) ? function(x) {
            return Yn(x, h.length === 1 ? h[0] : h);
          } : h;
        }) : t = [xt];
        var a = -1;
        t = Be(t, _t(X()));
        var c = ac(e, function(h, x, S) {
          var P = Be(t, function(k) {
            return k(h);
          });
          return { criteria: P, index: ++a, value: h };
        });
        return Bp(c, function(h, x) {
          return Rg(h, x, o);
        });
      }
      function hg(e, t) {
        return dc(e, t, function(o, a) {
          return oa(e, a);
        });
      }
      function dc(e, t, o) {
        for (var a = -1, c = t.length, h = {}; ++a < c; ) {
          var x = t[a], S = Yn(e, x);
          o(S, x) && Jr(h, Tn(x, e), S);
        }
        return h;
      }
      function gg(e) {
        return function(t) {
          return Yn(t, e);
        };
      }
      function Ns(e, t, o, a) {
        var c = a ? jp : sr, h = -1, x = t.length, S = e;
        for (e === t && (t = gt(t)), o && (S = Be(e, _t(o))); ++h < x; )
          for (var P = 0, k = t[h], F = o ? o(k) : k; (P = c(S, F, P, a)) > -1; )
            S !== e && Wo.call(S, P, 1), Wo.call(e, P, 1);
        return e;
      }
      function pc(e, t) {
        for (var o = e ? t.length : 0, a = o - 1; o--; ) {
          var c = t[o];
          if (o == a || c !== h) {
            var h = c;
            un(c) ? Wo.call(e, c, 1) : Ds(e, c);
          }
        }
        return e;
      }
      function Is(e, t) {
        return e + $o(Kl() * (t - e + 1));
      }
      function mg(e, t, o, a) {
        for (var c = -1, h = Xe(Bo((t - e) / (o || 1)), 0), x = L(h); h--; )
          x[a ? h : ++c] = e, e += o;
        return x;
      }
      function Ls(e, t) {
        var o = "";
        if (!e || t < 1 || t > Y)
          return o;
        do
          t % 2 && (o += e), t = $o(t / 2), t && (e += e);
        while (t);
        return o;
      }
      function de(e, t) {
        return Xs(Hc(e, t, xt), e + "");
      }
      function vg(e) {
        return Xl(xr(e));
      }
      function xg(e, t) {
        var o = xr(e);
        return oi(o, Kn(t, 0, o.length));
      }
      function Jr(e, t, o, a) {
        if (!Ue(e))
          return e;
        t = Tn(t, e);
        for (var c = -1, h = t.length, x = h - 1, S = e; S != null && ++c < h; ) {
          var P = Jt(t[c]), k = o;
          if (P === "__proto__" || P === "constructor" || P === "prototype")
            return e;
          if (c != x) {
            var F = S[P];
            k = a ? a(F, P, S) : r, k === r && (k = Ue(F) ? F : un(t[c + 1]) ? [] : {});
          }
          Yr(S, P, k), S = S[P];
        }
        return e;
      }
      var hc = Uo ? function(e, t) {
        return Uo.set(e, t), e;
      } : xt, yg = jo ? function(e, t) {
        return jo(e, "toString", {
          configurable: !0,
          enumerable: !1,
          value: sa(t),
          writable: !0
        });
      } : xt;
      function wg(e) {
        return oi(xr(e));
      }
      function kt(e, t, o) {
        var a = -1, c = e.length;
        t < 0 && (t = -t > c ? 0 : c + t), o = o > c ? c : o, o < 0 && (o += c), c = t > o ? 0 : o - t >>> 0, t >>>= 0;
        for (var h = L(c); ++a < c; )
          h[a] = e[a + t];
        return h;
      }
      function bg(e, t) {
        var o;
        return Rn(e, function(a, c, h) {
          return o = t(a, c, h), !o;
        }), !!o;
      }
      function qo(e, t, o) {
        var a = 0, c = e == null ? a : e.length;
        if (typeof t == "number" && t === t && c <= qt) {
          for (; a < c; ) {
            var h = a + c >>> 1, x = e[h];
            x !== null && !St(x) && (o ? x <= t : x < t) ? a = h + 1 : c = h;
          }
          return c;
        }
        return Ms(e, t, xt, o);
      }
      function Ms(e, t, o, a) {
        var c = 0, h = e == null ? 0 : e.length;
        if (h === 0)
          return 0;
        t = o(t);
        for (var x = t !== t, S = t === null, P = St(t), k = t === r; c < h; ) {
          var F = $o((c + h) / 2), W = o(e[F]), H = W !== r, K = W === null, J = W === W, fe = St(W);
          if (x)
            var Q = a || J;
          else
            k ? Q = J && (a || H) : S ? Q = J && H && (a || !K) : P ? Q = J && H && !K && (a || !fe) : K || fe ? Q = !1 : Q = a ? W <= t : W < t;
          Q ? c = F + 1 : h = F;
        }
        return lt(h, Yt);
      }
      function gc(e, t) {
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
          return Yl ? Yl.call(e) : "";
        var t = e + "";
        return t == "0" && 1 / e == -se ? "-0" : t;
      }
      function An(e, t, o) {
        var a = -1, c = To, h = e.length, x = !0, S = [], P = S;
        if (o)
          x = !1, c = cs;
        else if (h >= l) {
          var k = t ? null : Ig(e);
          if (k)
            return Oo(k);
          x = !1, c = Ur, P = new Gn();
        } else
          P = t ? [] : S;
        e:
          for (; ++a < h; ) {
            var F = e[a], W = t ? t(F) : F;
            if (F = o || F !== 0 ? F : 0, x && W === W) {
              for (var H = P.length; H--; )
                if (P[H] === W)
                  continue e;
              t && P.push(W), S.push(F);
            } else
              c(P, W, o) || (P !== S && P.push(W), S.push(F));
          }
        return S;
      }
      function Ds(e, t) {
        return t = Tn(t, e), e = zc(e, t), e == null || delete e[Jt(Ft(t))];
      }
      function vc(e, t, o, a) {
        return Jr(e, t, o(Yn(e, t)), a);
      }
      function Xo(e, t, o, a) {
        for (var c = e.length, h = a ? c : -1; (a ? h-- : ++h < c) && t(e[h], h, e); )
          ;
        return o ? kt(e, a ? 0 : h, a ? h + 1 : c) : kt(e, a ? h + 1 : 0, a ? c : h);
      }
      function xc(e, t) {
        var o = e;
        return o instanceof we && (o = o.value()), us(t, function(a, c) {
          return c.func.apply(c.thisArg, Cn([a], c.args));
        }, o);
      }
      function ks(e, t, o) {
        var a = e.length;
        if (a < 2)
          return a ? An(e[0]) : [];
        for (var c = -1, h = L(a); ++c < a; )
          for (var x = e[c], S = -1; ++S < a; )
            S != c && (h[c] = qr(h[c] || x, e[S], t, o));
        return An(ot(h, 1), t, o);
      }
      function yc(e, t, o) {
        for (var a = -1, c = e.length, h = t.length, x = {}; ++a < c; ) {
          var S = a < h ? t[a] : r;
          o(x, e[a], S);
        }
        return x;
      }
      function Fs(e) {
        return Ge(e) ? e : [];
      }
      function Ws(e) {
        return typeof e == "function" ? e : xt;
      }
      function Tn(e, t) {
        return ae(e) ? e : Ks(e, t) ? [e] : Yc(Pe(e));
      }
      var _g = de;
      function Pn(e, t, o) {
        var a = e.length;
        return o = o === r ? a : o, !t && o >= a ? e : kt(e, t, o);
      }
      var wc = ch || function(e) {
        return rt.clearTimeout(e);
      };
      function bc(e, t) {
        if (t)
          return e.slice();
        var o = e.length, a = Ul ? Ul(o) : new e.constructor(o);
        return e.copy(a), a;
      }
      function js(e) {
        var t = new e.constructor(e.byteLength);
        return new ko(t).set(new ko(e)), t;
      }
      function Cg(e, t) {
        var o = t ? js(e.buffer) : e.buffer;
        return new e.constructor(o, e.byteOffset, e.byteLength);
      }
      function Sg(e) {
        var t = new e.constructor(e.source, Ae.exec(e));
        return t.lastIndex = e.lastIndex, t;
      }
      function Eg(e) {
        return Kr ? Ie(Kr.call(e)) : {};
      }
      function _c(e, t) {
        var o = t ? js(e.buffer) : e.buffer;
        return new e.constructor(o, e.byteOffset, e.length);
      }
      function Cc(e, t) {
        if (e !== t) {
          var o = e !== r, a = e === null, c = e === e, h = St(e), x = t !== r, S = t === null, P = t === t, k = St(t);
          if (!S && !k && !h && e > t || h && x && P && !S && !k || a && x && P || !o && P || !c)
            return 1;
          if (!a && !h && !k && e < t || k && o && c && !a && !h || S && o && c || !x && c || !P)
            return -1;
        }
        return 0;
      }
      function Rg(e, t, o) {
        for (var a = -1, c = e.criteria, h = t.criteria, x = c.length, S = o.length; ++a < x; ) {
          var P = Cc(c[a], h[a]);
          if (P) {
            if (a >= S)
              return P;
            var k = o[a];
            return P * (k == "desc" ? -1 : 1);
          }
        }
        return e.index - t.index;
      }
      function Sc(e, t, o, a) {
        for (var c = -1, h = e.length, x = o.length, S = -1, P = t.length, k = Xe(h - x, 0), F = L(P + k), W = !a; ++S < P; )
          F[S] = t[S];
        for (; ++c < x; )
          (W || c < h) && (F[o[c]] = e[c]);
        for (; k--; )
          F[S++] = e[c++];
        return F;
      }
      function Ec(e, t, o, a) {
        for (var c = -1, h = e.length, x = -1, S = o.length, P = -1, k = t.length, F = Xe(h - S, 0), W = L(F + k), H = !a; ++c < F; )
          W[c] = e[c];
        for (var K = c; ++P < k; )
          W[K + P] = t[P];
        for (; ++x < S; )
          (H || c < h) && (W[K + o[x]] = e[c++]);
        return W;
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
          P === r && (P = e[S]), c ? an(o, S, P) : Yr(o, S, P);
        }
        return o;
      }
      function Ag(e, t) {
        return Zt(e, Gs(e), t);
      }
      function Tg(e, t) {
        return Zt(e, Wc(e), t);
      }
      function Zo(e, t) {
        return function(o, a) {
          var c = ae(o) ? Lp : Xh, h = t ? t() : {};
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
      function Rc(e, t) {
        return function(o, a) {
          if (o == null)
            return o;
          if (!mt(o))
            return e(o, a);
          for (var c = o.length, h = t ? c : -1, x = Ie(o); (t ? h-- : ++h < c) && a(x[h], h, x) !== !1; )
            ;
          return o;
        };
      }
      function Ac(e) {
        return function(t, o, a) {
          for (var c = -1, h = Ie(t), x = a(t), S = x.length; S--; ) {
            var P = x[e ? S : ++c];
            if (o(h[P], P, h) === !1)
              break;
          }
          return t;
        };
      }
      function Pg(e, t, o) {
        var a = t & A, c = Qr(e);
        function h() {
          var x = this && this !== rt && this instanceof h ? c : e;
          return x.apply(a ? o : this, arguments);
        }
        return h;
      }
      function Tc(e) {
        return function(t) {
          t = Pe(t);
          var o = ar(t) ? $t(t) : r, a = o ? o[0] : t.charAt(0), c = o ? Pn(o, 1).join("") : t.slice(1);
          return a[e]() + c;
        };
      }
      function gr(e) {
        return function(t) {
          return us(Ru(Eu(t).replace(yp, "")), e, "");
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
          return Ue(a) ? a : o;
        };
      }
      function Og(e, t, o) {
        var a = Qr(e);
        function c() {
          for (var h = arguments.length, x = L(h), S = h, P = mr(c); S--; )
            x[S] = arguments[S];
          var k = h < 3 && x[0] !== P && x[h - 1] !== P ? [] : Sn(x, P);
          if (h -= k.length, h < o)
            return Lc(
              e,
              t,
              Jo,
              c.placeholder,
              r,
              x,
              k,
              r,
              r,
              o - h
            );
          var F = this && this !== rt && this instanceof c ? a : e;
          return bt(F, this, x);
        }
        return c;
      }
      function Pc(e) {
        return function(t, o, a) {
          var c = Ie(t);
          if (!mt(t)) {
            var h = X(o, 3);
            t = Qe(t), o = function(S) {
              return h(c[S], S, c);
            };
          }
          var x = e(t, o, a);
          return x > -1 ? c[h ? t[x] : x] : r;
        };
      }
      function Oc(e) {
        return cn(function(t) {
          var o = t.length, a = o, c = Mt.prototype.thru;
          for (e && t.reverse(); a--; ) {
            var h = t[a];
            if (typeof h != "function")
              throw new Lt(f);
            if (c && !x && ni(h) == "wrapper")
              var x = new Mt([], !0);
          }
          for (a = x ? a : o; ++a < o; ) {
            h = t[a];
            var S = ni(h), P = S == "wrapper" ? zs(h) : r;
            P && Ys(P[0]) && P[1] == (U | M | $ | ee) && !P[4].length && P[9] == 1 ? x = x[ni(P[0])].apply(x, P[3]) : x = h.length == 1 && Ys(h) ? x[S]() : x.thru(h);
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
      function Jo(e, t, o, a, c, h, x, S, P, k) {
        var F = t & U, W = t & A, H = t & I, K = t & (M | j), J = t & ue, fe = H ? r : Qr(e);
        function Q() {
          for (var ge = arguments.length, _e = L(ge), Et = ge; Et--; )
            _e[Et] = arguments[Et];
          if (K)
            var pt = mr(Q), Rt = Up(_e, pt);
          if (a && (_e = Sc(_e, a, c, K)), h && (_e = Ec(_e, h, x, K)), ge -= Rt, K && ge < k) {
            var Ke = Sn(_e, pt);
            return Lc(
              e,
              t,
              Jo,
              Q.placeholder,
              o,
              _e,
              Ke,
              S,
              P,
              k - ge
            );
          }
          var zt = W ? o : this, pn = H ? zt[e] : e;
          return ge = _e.length, S ? _e = Xg(_e, S) : J && ge > 1 && _e.reverse(), F && P < ge && (_e.length = P), this && this !== rt && this instanceof Q && (pn = fe || Qr(pn)), pn.apply(zt, _e);
        }
        return Q;
      }
      function Nc(e, t) {
        return function(o, a) {
          return og(o, e, t(a), {});
        };
      }
      function Qo(e, t) {
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
      function Bs(e) {
        return cn(function(t) {
          return t = Be(t, _t(X())), de(function(o) {
            var a = this;
            return e(t, function(c) {
              return bt(c, a, o);
            });
          });
        });
      }
      function ei(e, t) {
        t = t === r ? " " : Ct(t);
        var o = t.length;
        if (o < 2)
          return o ? Ls(t, e) : t;
        var a = Ls(t, Bo(e / lr(t)));
        return ar(t) ? Pn($t(a), 0, e).join("") : a.slice(0, e);
      }
      function Ng(e, t, o, a) {
        var c = t & A, h = Qr(e);
        function x() {
          for (var S = -1, P = arguments.length, k = -1, F = a.length, W = L(F + P), H = this && this !== rt && this instanceof x ? h : e; ++k < F; )
            W[k] = a[k];
          for (; P--; )
            W[k++] = arguments[++S];
          return bt(H, c ? o : this, W);
        }
        return x;
      }
      function Ic(e) {
        return function(t, o, a) {
          return a && typeof a != "number" && dt(t, o, a) && (o = a = r), t = dn(t), o === r ? (o = t, t = 0) : o = dn(o), a = a === r ? t < o ? 1 : -1 : dn(a), mg(t, o, a, e);
        };
      }
      function ti(e) {
        return function(t, o) {
          return typeof t == "string" && typeof o == "string" || (t = Wt(t), o = Wt(o)), e(t, o);
        };
      }
      function Lc(e, t, o, a, c, h, x, S, P, k) {
        var F = t & M, W = F ? x : r, H = F ? r : x, K = F ? h : r, J = F ? r : h;
        t |= F ? $ : G, t &= ~(F ? G : $), t & N || (t &= ~(A | I));
        var fe = [
          e,
          t,
          c,
          K,
          W,
          J,
          H,
          S,
          P,
          k
        ], Q = o.apply(r, fe);
        return Ys(e) && Vc(Q, fe), Q.placeholder = a, Gc(Q, e, t);
      }
      function $s(e) {
        var t = qe[e];
        return function(o, a) {
          if (o = Wt(o), a = a == null ? 0 : lt(le(a), 292), a && Gl(o)) {
            var c = (Pe(o) + "e").split("e"), h = t(c[0] + "e" + (+c[1] + a));
            return c = (Pe(h) + "e").split("e"), +(c[0] + "e" + (+c[1] - a));
          }
          return t(o);
        };
      }
      var Ig = fr && 1 / Oo(new fr([, -0]))[1] == se ? function(e) {
        return new fr(e);
      } : ca;
      function Mc(e) {
        return function(t) {
          var o = ct(t);
          return o == je ? vs(t) : o == wt ? qp(t) : $p(t, e(t));
        };
      }
      function ln(e, t, o, a, c, h, x, S) {
        var P = t & I;
        if (!P && typeof e != "function")
          throw new Lt(f);
        var k = a ? a.length : 0;
        if (k || (t &= ~($ | G), a = c = r), x = x === r ? x : Xe(le(x), 0), S = S === r ? S : le(S), k -= c ? c.length : 0, t & G) {
          var F = a, W = c;
          a = c = r;
        }
        var H = P ? r : zs(e), K = [
          e,
          t,
          o,
          a,
          c,
          F,
          W,
          h,
          x,
          S
        ];
        if (H && Kg(K, H), e = K[0], t = K[1], o = K[2], a = K[3], c = K[4], S = K[9] = K[9] === r ? P ? 0 : e.length : Xe(K[9] - k, 0), !S && t & (M | j) && (t &= ~(M | j)), !t || t == A)
          var J = Pg(e, t, o);
        else
          t == M || t == j ? J = Og(e, t, S) : (t == $ || t == (A | $)) && !c.length ? J = Ng(e, t, o, a) : J = Jo.apply(r, K);
        var fe = H ? hc : Vc;
        return Gc(fe(J, K), e, t);
      }
      function Dc(e, t, o, a) {
        return e === r || Ht(e, ur[o]) && !Ne.call(a, o) ? t : e;
      }
      function kc(e, t, o, a, c, h) {
        return Ue(e) && Ue(t) && (h.set(t, e), Yo(e, t, r, kc, h), h.delete(t)), e;
      }
      function Lg(e) {
        return no(e) ? r : e;
      }
      function Fc(e, t, o, a, c, h) {
        var x = o & O, S = e.length, P = t.length;
        if (S != P && !(x && P > S))
          return !1;
        var k = h.get(e), F = h.get(t);
        if (k && F)
          return k == t && F == e;
        var W = -1, H = !0, K = o & w ? new Gn() : r;
        for (h.set(e, t), h.set(t, e); ++W < S; ) {
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
            if (!fs(t, function(ge, _e) {
              if (!Ur(K, _e) && (J === ge || c(J, ge, o, a, h)))
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
      function Mg(e, t, o, a, c, h, x) {
        switch (o) {
          case wn:
            if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
              return !1;
            e = e.buffer, t = t.buffer;
          case Bt:
            return !(e.byteLength != t.byteLength || !h(new ko(e), new ko(t)));
          case ve:
          case Le:
          case st:
            return Ht(+e, +t);
          case be:
            return e.name == t.name && e.message == t.message;
          case $n:
          case nn:
            return e == t + "";
          case je:
            var S = vs;
          case wt:
            var P = a & O;
            if (S || (S = Oo), e.size != t.size && !P)
              return !1;
            var k = x.get(e);
            if (k)
              return k == t;
            a |= w, x.set(e, t);
            var F = Fc(S(e), S(t), a, c, h, x);
            return x.delete(e), F;
          case er:
            if (Kr)
              return Kr.call(e) == Kr.call(t);
        }
        return !1;
      }
      function Dg(e, t, o, a, c, h) {
        var x = o & O, S = Us(e), P = S.length, k = Us(t), F = k.length;
        if (P != F && !x)
          return !1;
        for (var W = P; W--; ) {
          var H = S[W];
          if (!(x ? H in t : Ne.call(t, H)))
            return !1;
        }
        var K = h.get(e), J = h.get(t);
        if (K && J)
          return K == t && J == e;
        var fe = !0;
        h.set(e, t), h.set(t, e);
        for (var Q = x; ++W < P; ) {
          H = S[W];
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
        return Xs(Hc(e, r, Jc), e + "");
      }
      function Us(e) {
        return rc(e, Qe, Gs);
      }
      function Hs(e) {
        return rc(e, vt, Wc);
      }
      var zs = Uo ? function(e) {
        return Uo.get(e);
      } : ca;
      function ni(e) {
        for (var t = e.name + "", o = dr[t], a = Ne.call(dr, t) ? o.length : 0; a--; ) {
          var c = o[a], h = c.func;
          if (h == null || h == e)
            return c.name;
        }
        return t;
      }
      function mr(e) {
        var t = Ne.call(p, "placeholder") ? p : e;
        return t.placeholder;
      }
      function X() {
        var e = p.iteratee || aa;
        return e = e === aa ? sc : e, arguments.length ? e(arguments[0], arguments[1]) : e;
      }
      function ri(e, t) {
        var o = e.__data__;
        return Hg(t) ? o[typeof t == "string" ? "string" : "hash"] : o.map;
      }
      function Vs(e) {
        for (var t = Qe(e), o = t.length; o--; ) {
          var a = t[o], c = e[a];
          t[o] = [a, c, $c(c)];
        }
        return t;
      }
      function qn(e, t) {
        var o = Gp(e, t);
        return ic(o) ? o : r;
      }
      function kg(e) {
        var t = Ne.call(e, zn), o = e[zn];
        try {
          e[zn] = r;
          var a = !0;
        } catch {
        }
        var c = Mo.call(e);
        return a && (t ? e[zn] = o : delete e[zn]), c;
      }
      var Gs = ys ? function(e) {
        return e == null ? [] : (e = Ie(e), _n(ys(e), function(t) {
          return zl.call(e, t);
        }));
      } : ua, Wc = ys ? function(e) {
        for (var t = []; e; )
          Cn(t, Gs(e)), e = Fo(e);
        return t;
      } : ua, ct = ft;
      (ws && ct(new ws(new ArrayBuffer(1))) != wn || zr && ct(new zr()) != je || bs && ct(bs.resolve()) != Bn || fr && ct(new fr()) != wt || Vr && ct(new Vr()) != yn) && (ct = function(e) {
        var t = ft(e), o = t == Je ? e.constructor : r, a = o ? Xn(o) : "";
        if (a)
          switch (a) {
            case xh:
              return wn;
            case yh:
              return je;
            case wh:
              return Bn;
            case bh:
              return wt;
            case _h:
              return yn;
          }
        return t;
      });
      function Fg(e, t, o) {
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
      function Wg(e) {
        var t = e.match(Qi);
        return t ? t[1].split(es) : [];
      }
      function jc(e, t, o) {
        t = Tn(t, e);
        for (var a = -1, c = t.length, h = !1; ++a < c; ) {
          var x = Jt(t[a]);
          if (!(h = e != null && o(e, x)))
            break;
          e = e[x];
        }
        return h || ++a != c ? h : (c = e == null ? 0 : e.length, !!c && ui(c) && un(x, c) && (ae(e) || Zn(e)));
      }
      function jg(e) {
        var t = e.length, o = new e.constructor(t);
        return t && typeof e[0] == "string" && Ne.call(e, "index") && (o.index = e.index, o.input = e.input), o;
      }
      function Bc(e) {
        return typeof e.constructor == "function" && !eo(e) ? pr(Fo(e)) : {};
      }
      function Bg(e, t, o) {
        var a = e.constructor;
        switch (t) {
          case Bt:
            return js(e);
          case ve:
          case Le:
            return new a(+e);
          case wn:
            return Cg(e, o);
          case tr:
          case nr:
          case Un:
          case Ir:
          case Lr:
          case Mr:
          case Dr:
          case kr:
          case Fr:
            return _c(e, o);
          case je:
            return new a();
          case st:
          case nn:
            return new a(e);
          case $n:
            return Sg(e);
          case wt:
            return new a();
          case er:
            return Eg(e);
        }
      }
      function $g(e, t) {
        var o = t.length;
        if (!o)
          return e;
        var a = o - 1;
        return t[a] = (o > 1 ? "& " : "") + t[a], t = t.join(o > 2 ? ", " : " "), e.replace(Ji, `{
/* [wrapped with ` + t + `] */
`);
      }
      function Ug(e) {
        return ae(e) || Zn(e) || !!(Vl && e && e[Vl]);
      }
      function un(e, t) {
        var o = typeof e;
        return t = t ?? Y, !!t && (o == "number" || o != "symbol" && $e.test(e)) && e > -1 && e % 1 == 0 && e < t;
      }
      function dt(e, t, o) {
        if (!Ue(o))
          return !1;
        var a = typeof t;
        return (a == "number" ? mt(o) && un(t, o.length) : a == "string" && t in o) ? Ht(o[t], e) : !1;
      }
      function Ks(e, t) {
        if (ae(e))
          return !1;
        var o = typeof e;
        return o == "number" || o == "symbol" || o == "boolean" || e == null || St(e) ? !0 : So.test(e) || !Co.test(e) || t != null && e in Ie(t);
      }
      function Hg(e) {
        var t = typeof e;
        return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
      }
      function Ys(e) {
        var t = ni(e), o = p[t];
        if (typeof o != "function" || !(t in we.prototype))
          return !1;
        if (e === o)
          return !0;
        var a = zs(o);
        return !!a && e === a[0];
      }
      function zg(e) {
        return !!$l && $l in e;
      }
      var Vg = Io ? fn : fa;
      function eo(e) {
        var t = e && e.constructor, o = typeof t == "function" && t.prototype || ur;
        return e === o;
      }
      function $c(e) {
        return e === e && !Ue(e);
      }
      function Uc(e, t) {
        return function(o) {
          return o == null ? !1 : o[e] === t && (t !== r || e in Ie(o));
        };
      }
      function Gg(e) {
        var t = li(e, function(a) {
          return o.size === v && o.clear(), a;
        }), o = t.cache;
        return t;
      }
      function Kg(e, t) {
        var o = e[1], a = t[1], c = o | a, h = c < (A | I | U), x = a == U && o == M || a == U && o == ee && e[7].length <= t[8] || a == (U | ee) && t[7].length <= t[8] && o == M;
        if (!(h || x))
          return e;
        a & A && (e[2] = t[2], c |= o & A ? 0 : N);
        var S = t[3];
        if (S) {
          var P = e[3];
          e[3] = P ? Sc(P, S, t[4]) : S, e[4] = P ? Sn(e[3], y) : t[4];
        }
        return S = t[5], S && (P = e[5], e[5] = P ? Ec(P, S, t[6]) : S, e[6] = P ? Sn(e[5], y) : t[6]), S = t[7], S && (e[7] = S), a & U && (e[8] = e[8] == null ? t[8] : lt(e[8], t[8])), e[9] == null && (e[9] = t[9]), e[0] = t[0], e[1] = c, e;
      }
      function Yg(e) {
        var t = [];
        if (e != null)
          for (var o in Ie(e))
            t.push(o);
        return t;
      }
      function qg(e) {
        return Mo.call(e);
      }
      function Hc(e, t, o) {
        return t = Xe(t === r ? e.length - 1 : t, 0), function() {
          for (var a = arguments, c = -1, h = Xe(a.length - t, 0), x = L(h); ++c < h; )
            x[c] = a[t + c];
          c = -1;
          for (var S = L(t + 1); ++c < t; )
            S[c] = a[c];
          return S[t] = o(x), bt(e, this, S);
        };
      }
      function zc(e, t) {
        return t.length < 2 ? e : Yn(e, kt(t, 0, -1));
      }
      function Xg(e, t) {
        for (var o = e.length, a = lt(t.length, o), c = gt(e); a--; ) {
          var h = t[a];
          e[a] = un(h, o) ? c[h] : r;
        }
        return e;
      }
      function qs(e, t) {
        if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
          return e[t];
      }
      var Vc = Kc(hc), to = fh || function(e, t) {
        return rt.setTimeout(e, t);
      }, Xs = Kc(yg);
      function Gc(e, t, o) {
        var a = t + "";
        return Xs(e, $g(a, Zg(Wg(a), o)));
      }
      function Kc(e) {
        var t = 0, o = 0;
        return function() {
          var a = gh(), c = re - (a - o);
          if (o = a, c > 0) {
            if (++t >= q)
              return arguments[0];
          } else
            t = 0;
          return e.apply(r, arguments);
        };
      }
      function oi(e, t) {
        var o = -1, a = e.length, c = a - 1;
        for (t = t === r ? a : t; ++o < t; ) {
          var h = Is(o, c), x = e[h];
          e[h] = e[o], e[o] = x;
        }
        return e.length = t, e;
      }
      var Yc = Gg(function(e) {
        var t = [];
        return e.charCodeAt(0) === 46 && t.push(""), e.replace(Xi, function(o, a, c, h) {
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
            return Lo.call(e);
          } catch {
          }
          try {
            return e + "";
          } catch {
          }
        }
        return "";
      }
      function Zg(e, t) {
        return It(Pt, function(o) {
          var a = "_." + o[0];
          t & o[1] && !To(e, a) && e.push(a);
        }), e.sort();
      }
      function qc(e) {
        if (e instanceof we)
          return e.clone();
        var t = new Mt(e.__wrapped__, e.__chain__);
        return t.__actions__ = gt(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t;
      }
      function Jg(e, t, o) {
        (o ? dt(e, t, o) : t === r) ? t = 1 : t = Xe(le(t), 0);
        var a = e == null ? 0 : e.length;
        if (!a || t < 1)
          return [];
        for (var c = 0, h = 0, x = L(Bo(a / t)); c < a; )
          x[h++] = kt(e, c, c += t);
        return x;
      }
      function Qg(e) {
        for (var t = -1, o = e == null ? 0 : e.length, a = 0, c = []; ++t < o; ) {
          var h = e[t];
          h && (c[a++] = h);
        }
        return c;
      }
      function em() {
        var e = arguments.length;
        if (!e)
          return [];
        for (var t = L(e - 1), o = arguments[0], a = e; a--; )
          t[a - 1] = arguments[a];
        return Cn(ae(o) ? gt(o) : [o], ot(t, 1));
      }
      var tm = de(function(e, t) {
        return Ge(e) ? qr(e, ot(t, 1, Ge, !0)) : [];
      }), nm = de(function(e, t) {
        var o = Ft(t);
        return Ge(o) && (o = r), Ge(e) ? qr(e, ot(t, 1, Ge, !0), X(o, 2)) : [];
      }), rm = de(function(e, t) {
        var o = Ft(t);
        return Ge(o) && (o = r), Ge(e) ? qr(e, ot(t, 1, Ge, !0), r, o) : [];
      });
      function om(e, t, o) {
        var a = e == null ? 0 : e.length;
        return a ? (t = o || t === r ? 1 : le(t), kt(e, t < 0 ? 0 : t, a)) : [];
      }
      function im(e, t, o) {
        var a = e == null ? 0 : e.length;
        return a ? (t = o || t === r ? 1 : le(t), t = a - t, kt(e, 0, t < 0 ? 0 : t)) : [];
      }
      function sm(e, t) {
        return e && e.length ? Xo(e, X(t, 3), !0, !0) : [];
      }
      function am(e, t) {
        return e && e.length ? Xo(e, X(t, 3), !0) : [];
      }
      function lm(e, t, o, a) {
        var c = e == null ? 0 : e.length;
        return c ? (o && typeof o != "number" && dt(e, t, o) && (o = 0, a = c), eg(e, t, o, a)) : [];
      }
      function Xc(e, t, o) {
        var a = e == null ? 0 : e.length;
        if (!a)
          return -1;
        var c = o == null ? 0 : le(o);
        return c < 0 && (c = Xe(a + c, 0)), Po(e, X(t, 3), c);
      }
      function Zc(e, t, o) {
        var a = e == null ? 0 : e.length;
        if (!a)
          return -1;
        var c = a - 1;
        return o !== r && (c = le(o), c = o < 0 ? Xe(a + c, 0) : lt(c, a - 1)), Po(e, X(t, 3), c, !0);
      }
      function Jc(e) {
        var t = e == null ? 0 : e.length;
        return t ? ot(e, 1) : [];
      }
      function cm(e) {
        var t = e == null ? 0 : e.length;
        return t ? ot(e, se) : [];
      }
      function um(e, t) {
        var o = e == null ? 0 : e.length;
        return o ? (t = t === r ? 1 : le(t), ot(e, t)) : [];
      }
      function fm(e) {
        for (var t = -1, o = e == null ? 0 : e.length, a = {}; ++t < o; ) {
          var c = e[t];
          a[c[0]] = c[1];
        }
        return a;
      }
      function Qc(e) {
        return e && e.length ? e[0] : r;
      }
      function dm(e, t, o) {
        var a = e == null ? 0 : e.length;
        if (!a)
          return -1;
        var c = o == null ? 0 : le(o);
        return c < 0 && (c = Xe(a + c, 0)), sr(e, t, c);
      }
      function pm(e) {
        var t = e == null ? 0 : e.length;
        return t ? kt(e, 0, -1) : [];
      }
      var hm = de(function(e) {
        var t = Be(e, Fs);
        return t.length && t[0] === e[0] ? As(t) : [];
      }), gm = de(function(e) {
        var t = Ft(e), o = Be(e, Fs);
        return t === Ft(o) ? t = r : o.pop(), o.length && o[0] === e[0] ? As(o, X(t, 2)) : [];
      }), mm = de(function(e) {
        var t = Ft(e), o = Be(e, Fs);
        return t = typeof t == "function" ? t : r, t && o.pop(), o.length && o[0] === e[0] ? As(o, r, t) : [];
      });
      function vm(e, t) {
        return e == null ? "" : ph.call(e, t);
      }
      function Ft(e) {
        var t = e == null ? 0 : e.length;
        return t ? e[t - 1] : r;
      }
      function xm(e, t, o) {
        var a = e == null ? 0 : e.length;
        if (!a)
          return -1;
        var c = a;
        return o !== r && (c = le(o), c = c < 0 ? Xe(a + c, 0) : lt(c, a - 1)), t === t ? Zp(e, t, c) : Po(e, Ll, c, !0);
      }
      function ym(e, t) {
        return e && e.length ? uc(e, le(t)) : r;
      }
      var wm = de(eu);
      function eu(e, t) {
        return e && e.length && t && t.length ? Ns(e, t) : e;
      }
      function bm(e, t, o) {
        return e && e.length && t && t.length ? Ns(e, t, X(o, 2)) : e;
      }
      function _m(e, t, o) {
        return e && e.length && t && t.length ? Ns(e, t, r, o) : e;
      }
      var Cm = cn(function(e, t) {
        var o = e == null ? 0 : e.length, a = Cs(e, t);
        return pc(e, Be(t, function(c) {
          return un(c, o) ? +c : c;
        }).sort(Cc)), a;
      });
      function Sm(e, t) {
        var o = [];
        if (!(e && e.length))
          return o;
        var a = -1, c = [], h = e.length;
        for (t = X(t, 3); ++a < h; ) {
          var x = e[a];
          t(x, a, e) && (o.push(x), c.push(a));
        }
        return pc(e, c), o;
      }
      function Zs(e) {
        return e == null ? e : vh.call(e);
      }
      function Em(e, t, o) {
        var a = e == null ? 0 : e.length;
        return a ? (o && typeof o != "number" && dt(e, t, o) ? (t = 0, o = a) : (t = t == null ? 0 : le(t), o = o === r ? a : le(o)), kt(e, t, o)) : [];
      }
      function Rm(e, t) {
        return qo(e, t);
      }
      function Am(e, t, o) {
        return Ms(e, t, X(o, 2));
      }
      function Tm(e, t) {
        var o = e == null ? 0 : e.length;
        if (o) {
          var a = qo(e, t);
          if (a < o && Ht(e[a], t))
            return a;
        }
        return -1;
      }
      function Pm(e, t) {
        return qo(e, t, !0);
      }
      function Om(e, t, o) {
        return Ms(e, t, X(o, 2), !0);
      }
      function Nm(e, t) {
        var o = e == null ? 0 : e.length;
        if (o) {
          var a = qo(e, t, !0) - 1;
          if (Ht(e[a], t))
            return a;
        }
        return -1;
      }
      function Im(e) {
        return e && e.length ? gc(e) : [];
      }
      function Lm(e, t) {
        return e && e.length ? gc(e, X(t, 2)) : [];
      }
      function Mm(e) {
        var t = e == null ? 0 : e.length;
        return t ? kt(e, 1, t) : [];
      }
      function Dm(e, t, o) {
        return e && e.length ? (t = o || t === r ? 1 : le(t), kt(e, 0, t < 0 ? 0 : t)) : [];
      }
      function km(e, t, o) {
        var a = e == null ? 0 : e.length;
        return a ? (t = o || t === r ? 1 : le(t), t = a - t, kt(e, t < 0 ? 0 : t, a)) : [];
      }
      function Fm(e, t) {
        return e && e.length ? Xo(e, X(t, 3), !1, !0) : [];
      }
      function Wm(e, t) {
        return e && e.length ? Xo(e, X(t, 3)) : [];
      }
      var jm = de(function(e) {
        return An(ot(e, 1, Ge, !0));
      }), Bm = de(function(e) {
        var t = Ft(e);
        return Ge(t) && (t = r), An(ot(e, 1, Ge, !0), X(t, 2));
      }), $m = de(function(e) {
        var t = Ft(e);
        return t = typeof t == "function" ? t : r, An(ot(e, 1, Ge, !0), r, t);
      });
      function Um(e) {
        return e && e.length ? An(e) : [];
      }
      function Hm(e, t) {
        return e && e.length ? An(e, X(t, 2)) : [];
      }
      function zm(e, t) {
        return t = typeof t == "function" ? t : r, e && e.length ? An(e, r, t) : [];
      }
      function Js(e) {
        if (!(e && e.length))
          return [];
        var t = 0;
        return e = _n(e, function(o) {
          if (Ge(o))
            return t = Xe(o.length, t), !0;
        }), gs(t, function(o) {
          return Be(e, ds(o));
        });
      }
      function tu(e, t) {
        if (!(e && e.length))
          return [];
        var o = Js(e);
        return t == null ? o : Be(o, function(a) {
          return bt(t, r, a);
        });
      }
      var Vm = de(function(e, t) {
        return Ge(e) ? qr(e, t) : [];
      }), Gm = de(function(e) {
        return ks(_n(e, Ge));
      }), Km = de(function(e) {
        var t = Ft(e);
        return Ge(t) && (t = r), ks(_n(e, Ge), X(t, 2));
      }), Ym = de(function(e) {
        var t = Ft(e);
        return t = typeof t == "function" ? t : r, ks(_n(e, Ge), r, t);
      }), qm = de(Js);
      function Xm(e, t) {
        return yc(e || [], t || [], Yr);
      }
      function Zm(e, t) {
        return yc(e || [], t || [], Jr);
      }
      var Jm = de(function(e) {
        var t = e.length, o = t > 1 ? e[t - 1] : r;
        return o = typeof o == "function" ? (e.pop(), o) : r, tu(e, o);
      });
      function nu(e) {
        var t = p(e);
        return t.__chain__ = !0, t;
      }
      function Qm(e, t) {
        return t(e), e;
      }
      function ii(e, t) {
        return t(e);
      }
      var ev = cn(function(e) {
        var t = e.length, o = t ? e[0] : 0, a = this.__wrapped__, c = function(h) {
          return Cs(h, e);
        };
        return t > 1 || this.__actions__.length || !(a instanceof we) || !un(o) ? this.thru(c) : (a = a.slice(o, +o + (t ? 1 : 0)), a.__actions__.push({
          func: ii,
          args: [c],
          thisArg: r
        }), new Mt(a, this.__chain__).thru(function(h) {
          return t && !h.length && h.push(r), h;
        }));
      });
      function tv() {
        return nu(this);
      }
      function nv() {
        return new Mt(this.value(), this.__chain__);
      }
      function rv() {
        this.__values__ === r && (this.__values__ = mu(this.value()));
        var e = this.__index__ >= this.__values__.length, t = e ? r : this.__values__[this.__index__++];
        return { done: e, value: t };
      }
      function ov() {
        return this;
      }
      function iv(e) {
        for (var t, o = this; o instanceof zo; ) {
          var a = qc(o);
          a.__index__ = 0, a.__values__ = r, t ? c.__wrapped__ = a : t = a;
          var c = a;
          o = o.__wrapped__;
        }
        return c.__wrapped__ = e, t;
      }
      function sv() {
        var e = this.__wrapped__;
        if (e instanceof we) {
          var t = e;
          return this.__actions__.length && (t = new we(this)), t = t.reverse(), t.__actions__.push({
            func: ii,
            args: [Zs],
            thisArg: r
          }), new Mt(t, this.__chain__);
        }
        return this.thru(Zs);
      }
      function av() {
        return xc(this.__wrapped__, this.__actions__);
      }
      var lv = Zo(function(e, t, o) {
        Ne.call(e, o) ? ++e[o] : an(e, o, 1);
      });
      function cv(e, t, o) {
        var a = ae(e) ? Nl : Qh;
        return o && dt(e, t, o) && (t = r), a(e, X(t, 3));
      }
      function uv(e, t) {
        var o = ae(e) ? _n : tc;
        return o(e, X(t, 3));
      }
      var fv = Pc(Xc), dv = Pc(Zc);
      function pv(e, t) {
        return ot(si(e, t), 1);
      }
      function hv(e, t) {
        return ot(si(e, t), se);
      }
      function gv(e, t, o) {
        return o = o === r ? 1 : le(o), ot(si(e, t), o);
      }
      function ru(e, t) {
        var o = ae(e) ? It : Rn;
        return o(e, X(t, 3));
      }
      function ou(e, t) {
        var o = ae(e) ? Mp : ec;
        return o(e, X(t, 3));
      }
      var mv = Zo(function(e, t, o) {
        Ne.call(e, o) ? e[o].push(t) : an(e, o, [t]);
      });
      function vv(e, t, o, a) {
        e = mt(e) ? e : xr(e), o = o && !a ? le(o) : 0;
        var c = e.length;
        return o < 0 && (o = Xe(c + o, 0)), fi(e) ? o <= c && e.indexOf(t, o) > -1 : !!c && sr(e, t, o) > -1;
      }
      var xv = de(function(e, t, o) {
        var a = -1, c = typeof t == "function", h = mt(e) ? L(e.length) : [];
        return Rn(e, function(x) {
          h[++a] = c ? bt(t, x, o) : Xr(x, t, o);
        }), h;
      }), yv = Zo(function(e, t, o) {
        an(e, o, t);
      });
      function si(e, t) {
        var o = ae(e) ? Be : ac;
        return o(e, X(t, 3));
      }
      function wv(e, t, o, a) {
        return e == null ? [] : (ae(t) || (t = t == null ? [] : [t]), o = a ? r : o, ae(o) || (o = o == null ? [] : [o]), fc(e, t, o));
      }
      var bv = Zo(function(e, t, o) {
        e[o ? 0 : 1].push(t);
      }, function() {
        return [[], []];
      });
      function _v(e, t, o) {
        var a = ae(e) ? us : Dl, c = arguments.length < 3;
        return a(e, X(t, 4), o, c, Rn);
      }
      function Cv(e, t, o) {
        var a = ae(e) ? Dp : Dl, c = arguments.length < 3;
        return a(e, X(t, 4), o, c, ec);
      }
      function Sv(e, t) {
        var o = ae(e) ? _n : tc;
        return o(e, ci(X(t, 3)));
      }
      function Ev(e) {
        var t = ae(e) ? Xl : vg;
        return t(e);
      }
      function Rv(e, t, o) {
        (o ? dt(e, t, o) : t === r) ? t = 1 : t = le(t);
        var a = ae(e) ? Yh : xg;
        return a(e, t);
      }
      function Av(e) {
        var t = ae(e) ? qh : wg;
        return t(e);
      }
      function Tv(e) {
        if (e == null)
          return 0;
        if (mt(e))
          return fi(e) ? lr(e) : e.length;
        var t = ct(e);
        return t == je || t == wt ? e.size : Ps(e).length;
      }
      function Pv(e, t, o) {
        var a = ae(e) ? fs : bg;
        return o && dt(e, t, o) && (t = r), a(e, X(t, 3));
      }
      var Ov = de(function(e, t) {
        if (e == null)
          return [];
        var o = t.length;
        return o > 1 && dt(e, t[0], t[1]) ? t = [] : o > 2 && dt(t[0], t[1], t[2]) && (t = [t[0]]), fc(e, ot(t, 1), []);
      }), ai = uh || function() {
        return rt.Date.now();
      };
      function Nv(e, t) {
        if (typeof t != "function")
          throw new Lt(f);
        return e = le(e), function() {
          if (--e < 1)
            return t.apply(this, arguments);
        };
      }
      function iu(e, t, o) {
        return t = o ? r : t, t = e && t == null ? e.length : t, ln(e, U, r, r, r, r, t);
      }
      function su(e, t) {
        var o;
        if (typeof t != "function")
          throw new Lt(f);
        return e = le(e), function() {
          return --e > 0 && (o = t.apply(this, arguments)), e <= 1 && (t = r), o;
        };
      }
      var Qs = de(function(e, t, o) {
        var a = A;
        if (o.length) {
          var c = Sn(o, mr(Qs));
          a |= $;
        }
        return ln(e, a, t, o, c);
      }), au = de(function(e, t, o) {
        var a = A | I;
        if (o.length) {
          var c = Sn(o, mr(au));
          a |= $;
        }
        return ln(t, a, e, o, c);
      });
      function lu(e, t, o) {
        t = o ? r : t;
        var a = ln(e, M, r, r, r, r, r, t);
        return a.placeholder = lu.placeholder, a;
      }
      function cu(e, t, o) {
        t = o ? r : t;
        var a = ln(e, j, r, r, r, r, r, t);
        return a.placeholder = cu.placeholder, a;
      }
      function uu(e, t, o) {
        var a, c, h, x, S, P, k = 0, F = !1, W = !1, H = !0;
        if (typeof e != "function")
          throw new Lt(f);
        t = Wt(t) || 0, Ue(o) && (F = !!o.leading, W = "maxWait" in o, h = W ? Xe(Wt(o.maxWait) || 0, t) : h, H = "trailing" in o ? !!o.trailing : H);
        function K(Ke) {
          var zt = a, pn = c;
          return a = c = r, k = Ke, x = e.apply(pn, zt), x;
        }
        function J(Ke) {
          return k = Ke, S = to(ge, t), F ? K(Ke) : x;
        }
        function fe(Ke) {
          var zt = Ke - P, pn = Ke - k, Pu = t - zt;
          return W ? lt(Pu, h - pn) : Pu;
        }
        function Q(Ke) {
          var zt = Ke - P, pn = Ke - k;
          return P === r || zt >= t || zt < 0 || W && pn >= h;
        }
        function ge() {
          var Ke = ai();
          if (Q(Ke))
            return _e(Ke);
          S = to(ge, fe(Ke));
        }
        function _e(Ke) {
          return S = r, H && a ? K(Ke) : (a = c = r, x);
        }
        function Et() {
          S !== r && wc(S), k = 0, a = P = c = S = r;
        }
        function pt() {
          return S === r ? x : _e(ai());
        }
        function Rt() {
          var Ke = ai(), zt = Q(Ke);
          if (a = arguments, c = this, P = Ke, zt) {
            if (S === r)
              return J(P);
            if (W)
              return wc(S), S = to(ge, t), K(P);
          }
          return S === r && (S = to(ge, t)), x;
        }
        return Rt.cancel = Et, Rt.flush = pt, Rt;
      }
      var Iv = de(function(e, t) {
        return Ql(e, 1, t);
      }), Lv = de(function(e, t, o) {
        return Ql(e, Wt(t) || 0, o);
      });
      function Mv(e) {
        return ln(e, ue);
      }
      function li(e, t) {
        if (typeof e != "function" || t != null && typeof t != "function")
          throw new Lt(f);
        var o = function() {
          var a = arguments, c = t ? t.apply(this, a) : a[0], h = o.cache;
          if (h.has(c))
            return h.get(c);
          var x = e.apply(this, a);
          return o.cache = h.set(c, x) || h, x;
        };
        return o.cache = new (li.Cache || sn)(), o;
      }
      li.Cache = sn;
      function ci(e) {
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
      function Dv(e) {
        return su(2, e);
      }
      var kv = _g(function(e, t) {
        t = t.length == 1 && ae(t[0]) ? Be(t[0], _t(X())) : Be(ot(t, 1), _t(X()));
        var o = t.length;
        return de(function(a) {
          for (var c = -1, h = lt(a.length, o); ++c < h; )
            a[c] = t[c].call(this, a[c]);
          return bt(e, this, a);
        });
      }), ea = de(function(e, t) {
        var o = Sn(t, mr(ea));
        return ln(e, $, r, t, o);
      }), fu = de(function(e, t) {
        var o = Sn(t, mr(fu));
        return ln(e, G, r, t, o);
      }), Fv = cn(function(e, t) {
        return ln(e, ee, r, r, r, t);
      });
      function Wv(e, t) {
        if (typeof e != "function")
          throw new Lt(f);
        return t = t === r ? t : le(t), de(e, t);
      }
      function jv(e, t) {
        if (typeof e != "function")
          throw new Lt(f);
        return t = t == null ? 0 : Xe(le(t), 0), de(function(o) {
          var a = o[t], c = Pn(o, 0, t);
          return a && Cn(c, a), bt(e, this, c);
        });
      }
      function Bv(e, t, o) {
        var a = !0, c = !0;
        if (typeof e != "function")
          throw new Lt(f);
        return Ue(o) && (a = "leading" in o ? !!o.leading : a, c = "trailing" in o ? !!o.trailing : c), uu(e, t, {
          leading: a,
          maxWait: t,
          trailing: c
        });
      }
      function $v(e) {
        return iu(e, 1);
      }
      function Uv(e, t) {
        return ea(Ws(t), e);
      }
      function Hv() {
        if (!arguments.length)
          return [];
        var e = arguments[0];
        return ae(e) ? e : [e];
      }
      function zv(e) {
        return Dt(e, R);
      }
      function Vv(e, t) {
        return t = typeof t == "function" ? t : r, Dt(e, R, t);
      }
      function Gv(e) {
        return Dt(e, b | R);
      }
      function Kv(e, t) {
        return t = typeof t == "function" ? t : r, Dt(e, b | R, t);
      }
      function Yv(e, t) {
        return t == null || Jl(e, t, Qe(t));
      }
      function Ht(e, t) {
        return e === t || e !== e && t !== t;
      }
      var qv = ti(Rs), Xv = ti(function(e, t) {
        return e >= t;
      }), Zn = oc(/* @__PURE__ */ function() {
        return arguments;
      }()) ? oc : function(e) {
        return Ve(e) && Ne.call(e, "callee") && !zl.call(e, "callee");
      }, ae = L.isArray, Zv = El ? _t(El) : ig;
      function mt(e) {
        return e != null && ui(e.length) && !fn(e);
      }
      function Ge(e) {
        return Ve(e) && mt(e);
      }
      function Jv(e) {
        return e === !0 || e === !1 || Ve(e) && ft(e) == ve;
      }
      var On = dh || fa, Qv = Rl ? _t(Rl) : sg;
      function ex(e) {
        return Ve(e) && e.nodeType === 1 && !no(e);
      }
      function tx(e) {
        if (e == null)
          return !0;
        if (mt(e) && (ae(e) || typeof e == "string" || typeof e.splice == "function" || On(e) || vr(e) || Zn(e)))
          return !e.length;
        var t = ct(e);
        if (t == je || t == wt)
          return !e.size;
        if (eo(e))
          return !Ps(e).length;
        for (var o in e)
          if (Ne.call(e, o))
            return !1;
        return !0;
      }
      function nx(e, t) {
        return Zr(e, t);
      }
      function rx(e, t, o) {
        o = typeof o == "function" ? o : r;
        var a = o ? o(e, t) : r;
        return a === r ? Zr(e, t, r, o) : !!a;
      }
      function ta(e) {
        if (!Ve(e))
          return !1;
        var t = ft(e);
        return t == be || t == Re || typeof e.message == "string" && typeof e.name == "string" && !no(e);
      }
      function ox(e) {
        return typeof e == "number" && Gl(e);
      }
      function fn(e) {
        if (!Ue(e))
          return !1;
        var t = ft(e);
        return t == xe || t == Ze || t == Z || t == jt;
      }
      function du(e) {
        return typeof e == "number" && e == le(e);
      }
      function ui(e) {
        return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Y;
      }
      function Ue(e) {
        var t = typeof e;
        return e != null && (t == "object" || t == "function");
      }
      function Ve(e) {
        return e != null && typeof e == "object";
      }
      var pu = Al ? _t(Al) : lg;
      function ix(e, t) {
        return e === t || Ts(e, t, Vs(t));
      }
      function sx(e, t, o) {
        return o = typeof o == "function" ? o : r, Ts(e, t, Vs(t), o);
      }
      function ax(e) {
        return hu(e) && e != +e;
      }
      function lx(e) {
        if (Vg(e))
          throw new ie(u);
        return ic(e);
      }
      function cx(e) {
        return e === null;
      }
      function ux(e) {
        return e == null;
      }
      function hu(e) {
        return typeof e == "number" || Ve(e) && ft(e) == st;
      }
      function no(e) {
        if (!Ve(e) || ft(e) != Je)
          return !1;
        var t = Fo(e);
        if (t === null)
          return !0;
        var o = Ne.call(t, "constructor") && t.constructor;
        return typeof o == "function" && o instanceof o && Lo.call(o) == sh;
      }
      var na = Tl ? _t(Tl) : cg;
      function fx(e) {
        return du(e) && e >= -Y && e <= Y;
      }
      var gu = Pl ? _t(Pl) : ug;
      function fi(e) {
        return typeof e == "string" || !ae(e) && Ve(e) && ft(e) == nn;
      }
      function St(e) {
        return typeof e == "symbol" || Ve(e) && ft(e) == er;
      }
      var vr = Ol ? _t(Ol) : fg;
      function dx(e) {
        return e === r;
      }
      function px(e) {
        return Ve(e) && ct(e) == yn;
      }
      function hx(e) {
        return Ve(e) && ft(e) == xo;
      }
      var gx = ti(Os), mx = ti(function(e, t) {
        return e <= t;
      });
      function mu(e) {
        if (!e)
          return [];
        if (mt(e))
          return fi(e) ? $t(e) : gt(e);
        if (Hr && e[Hr])
          return Yp(e[Hr]());
        var t = ct(e), o = t == je ? vs : t == wt ? Oo : xr;
        return o(e);
      }
      function dn(e) {
        if (!e)
          return e === 0 ? e : 0;
        if (e = Wt(e), e === se || e === -se) {
          var t = e < 0 ? -1 : 1;
          return t * me;
        }
        return e === e ? e : 0;
      }
      function le(e) {
        var t = dn(e), o = t % 1;
        return t === t ? o ? t - o : t : 0;
      }
      function vu(e) {
        return e ? Kn(le(e), 0, Ee) : 0;
      }
      function Wt(e) {
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
        e = kl(e);
        var o = ye.test(e);
        return o || tt.test(e) ? Np(e.slice(2), o ? 2 : 8) : Oe.test(e) ? ke : +e;
      }
      function xu(e) {
        return Zt(e, vt(e));
      }
      function vx(e) {
        return e ? Kn(le(e), -Y, Y) : e === 0 ? e : 0;
      }
      function Pe(e) {
        return e == null ? "" : Ct(e);
      }
      var xx = hr(function(e, t) {
        if (eo(t) || mt(t)) {
          Zt(t, Qe(t), e);
          return;
        }
        for (var o in t)
          Ne.call(t, o) && Yr(e, o, t[o]);
      }), yu = hr(function(e, t) {
        Zt(t, vt(t), e);
      }), di = hr(function(e, t, o, a) {
        Zt(t, vt(t), e, a);
      }), yx = hr(function(e, t, o, a) {
        Zt(t, Qe(t), e, a);
      }), wx = cn(Cs);
      function bx(e, t) {
        var o = pr(e);
        return t == null ? o : Zl(o, t);
      }
      var _x = de(function(e, t) {
        e = Ie(e);
        var o = -1, a = t.length, c = a > 2 ? t[2] : r;
        for (c && dt(t[0], t[1], c) && (a = 1); ++o < a; )
          for (var h = t[o], x = vt(h), S = -1, P = x.length; ++S < P; ) {
            var k = x[S], F = e[k];
            (F === r || Ht(F, ur[k]) && !Ne.call(e, k)) && (e[k] = h[k]);
          }
        return e;
      }), Cx = de(function(e) {
        return e.push(r, kc), bt(wu, r, e);
      });
      function Sx(e, t) {
        return Il(e, X(t, 3), Xt);
      }
      function Ex(e, t) {
        return Il(e, X(t, 3), Es);
      }
      function Rx(e, t) {
        return e == null ? e : Ss(e, X(t, 3), vt);
      }
      function Ax(e, t) {
        return e == null ? e : nc(e, X(t, 3), vt);
      }
      function Tx(e, t) {
        return e && Xt(e, X(t, 3));
      }
      function Px(e, t) {
        return e && Es(e, X(t, 3));
      }
      function Ox(e) {
        return e == null ? [] : Ko(e, Qe(e));
      }
      function Nx(e) {
        return e == null ? [] : Ko(e, vt(e));
      }
      function ra(e, t, o) {
        var a = e == null ? r : Yn(e, t);
        return a === r ? o : a;
      }
      function Ix(e, t) {
        return e != null && jc(e, t, tg);
      }
      function oa(e, t) {
        return e != null && jc(e, t, ng);
      }
      var Lx = Nc(function(e, t, o) {
        t != null && typeof t.toString != "function" && (t = Mo.call(t)), e[t] = o;
      }, sa(xt)), Mx = Nc(function(e, t, o) {
        t != null && typeof t.toString != "function" && (t = Mo.call(t)), Ne.call(e, t) ? e[t].push(o) : e[t] = [o];
      }, X), Dx = de(Xr);
      function Qe(e) {
        return mt(e) ? ql(e) : Ps(e);
      }
      function vt(e) {
        return mt(e) ? ql(e, !0) : dg(e);
      }
      function kx(e, t) {
        var o = {};
        return t = X(t, 3), Xt(e, function(a, c, h) {
          an(o, t(a, c, h), a);
        }), o;
      }
      function Fx(e, t) {
        var o = {};
        return t = X(t, 3), Xt(e, function(a, c, h) {
          an(o, c, t(a, c, h));
        }), o;
      }
      var Wx = hr(function(e, t, o) {
        Yo(e, t, o);
      }), wu = hr(function(e, t, o, a) {
        Yo(e, t, o, a);
      }), jx = cn(function(e, t) {
        var o = {};
        if (e == null)
          return o;
        var a = !1;
        t = Be(t, function(h) {
          return h = Tn(h, e), a || (a = h.length > 1), h;
        }), Zt(e, Hs(e), o), a && (o = Dt(o, b | E | R, Lg));
        for (var c = t.length; c--; )
          Ds(o, t[c]);
        return o;
      });
      function Bx(e, t) {
        return bu(e, ci(X(t)));
      }
      var $x = cn(function(e, t) {
        return e == null ? {} : hg(e, t);
      });
      function bu(e, t) {
        if (e == null)
          return {};
        var o = Be(Hs(e), function(a) {
          return [a];
        });
        return t = X(t), dc(e, o, function(a, c) {
          return t(a, c[0]);
        });
      }
      function Ux(e, t, o) {
        t = Tn(t, e);
        var a = -1, c = t.length;
        for (c || (c = 1, e = r); ++a < c; ) {
          var h = e == null ? r : e[Jt(t[a])];
          h === r && (a = c, h = o), e = fn(h) ? h.call(e) : h;
        }
        return e;
      }
      function Hx(e, t, o) {
        return e == null ? e : Jr(e, t, o);
      }
      function zx(e, t, o, a) {
        return a = typeof a == "function" ? a : r, e == null ? e : Jr(e, t, o, a);
      }
      var _u = Mc(Qe), Cu = Mc(vt);
      function Vx(e, t, o) {
        var a = ae(e), c = a || On(e) || vr(e);
        if (t = X(t, 4), o == null) {
          var h = e && e.constructor;
          c ? o = a ? new h() : [] : Ue(e) ? o = fn(h) ? pr(Fo(e)) : {} : o = {};
        }
        return (c ? It : Xt)(e, function(x, S, P) {
          return t(o, x, S, P);
        }), o;
      }
      function Gx(e, t) {
        return e == null ? !0 : Ds(e, t);
      }
      function Kx(e, t, o) {
        return e == null ? e : vc(e, t, Ws(o));
      }
      function Yx(e, t, o, a) {
        return a = typeof a == "function" ? a : r, e == null ? e : vc(e, t, Ws(o), a);
      }
      function xr(e) {
        return e == null ? [] : ms(e, Qe(e));
      }
      function qx(e) {
        return e == null ? [] : ms(e, vt(e));
      }
      function Xx(e, t, o) {
        return o === r && (o = t, t = r), o !== r && (o = Wt(o), o = o === o ? o : 0), t !== r && (t = Wt(t), t = t === t ? t : 0), Kn(Wt(e), t, o);
      }
      function Zx(e, t, o) {
        return t = dn(t), o === r ? (o = t, t = 0) : o = dn(o), e = Wt(e), rg(e, t, o);
      }
      function Jx(e, t, o) {
        if (o && typeof o != "boolean" && dt(e, t, o) && (t = o = r), o === r && (typeof t == "boolean" ? (o = t, t = r) : typeof e == "boolean" && (o = e, e = r)), e === r && t === r ? (e = 0, t = 1) : (e = dn(e), t === r ? (t = e, e = 0) : t = dn(t)), e > t) {
          var a = e;
          e = t, t = a;
        }
        if (o || e % 1 || t % 1) {
          var c = Kl();
          return lt(e + c * (t - e + Op("1e-" + ((c + "").length - 1))), t);
        }
        return Is(e, t);
      }
      var Qx = gr(function(e, t, o) {
        return t = t.toLowerCase(), e + (o ? Su(t) : t);
      });
      function Su(e) {
        return ia(Pe(e).toLowerCase());
      }
      function Eu(e) {
        return e = Pe(e), e && e.replace(ze, Hp).replace(wp, "");
      }
      function ey(e, t, o) {
        e = Pe(e), t = Ct(t);
        var a = e.length;
        o = o === r ? a : Kn(le(o), 0, a);
        var c = o;
        return o -= t.length, o >= 0 && e.slice(o, c) == t;
      }
      function ty(e) {
        return e = Pe(e), e && wo.test(e) ? e.replace(rr, zp) : e;
      }
      function ny(e) {
        return e = Pe(e), e && Eo.test(e) ? e.replace(Br, "\\$&") : e;
      }
      var ry = gr(function(e, t, o) {
        return e + (o ? "-" : "") + t.toLowerCase();
      }), oy = gr(function(e, t, o) {
        return e + (o ? " " : "") + t.toLowerCase();
      }), iy = Tc("toLowerCase");
      function sy(e, t, o) {
        e = Pe(e), t = le(t);
        var a = t ? lr(e) : 0;
        if (!t || a >= t)
          return e;
        var c = (t - a) / 2;
        return ei($o(c), o) + e + ei(Bo(c), o);
      }
      function ay(e, t, o) {
        e = Pe(e), t = le(t);
        var a = t ? lr(e) : 0;
        return t && a < t ? e + ei(t - a, o) : e;
      }
      function ly(e, t, o) {
        e = Pe(e), t = le(t);
        var a = t ? lr(e) : 0;
        return t && a < t ? ei(t - a, o) + e : e;
      }
      function cy(e, t, o) {
        return o || t == null ? t = 0 : t && (t = +t), mh(Pe(e).replace(or, ""), t || 0);
      }
      function uy(e, t, o) {
        return (o ? dt(e, t, o) : t === r) ? t = 1 : t = le(t), Ls(Pe(e), t);
      }
      function fy() {
        var e = arguments, t = Pe(e[0]);
        return e.length < 3 ? t : t.replace(e[1], e[2]);
      }
      var dy = gr(function(e, t, o) {
        return e + (o ? "_" : "") + t.toLowerCase();
      });
      function py(e, t, o) {
        return o && typeof o != "number" && dt(e, t, o) && (t = o = r), o = o === r ? Ee : o >>> 0, o ? (e = Pe(e), e && (typeof t == "string" || t != null && !na(t)) && (t = Ct(t), !t && ar(e)) ? Pn($t(e), 0, o) : e.split(t, o)) : [];
      }
      var hy = gr(function(e, t, o) {
        return e + (o ? " " : "") + ia(t);
      });
      function gy(e, t, o) {
        return e = Pe(e), o = o == null ? 0 : Kn(le(o), 0, e.length), t = Ct(t), e.slice(o, o + t.length) == t;
      }
      function my(e, t, o) {
        var a = p.templateSettings;
        o && dt(e, t, o) && (t = r), e = Pe(e), t = di({}, t, a, Dc);
        var c = di({}, t.imports, a.imports, Dc), h = Qe(c), x = ms(c, h), S, P, k = 0, F = t.interpolate || nt, W = "__p += '", H = xs(
          (t.escape || nt).source + "|" + F.source + "|" + (F === _o ? te : nt).source + "|" + (t.evaluate || nt).source + "|$",
          "g"
        ), K = "//# sourceURL=" + (Ne.call(t, "sourceURL") ? (t.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++Ep + "]") + `
`;
        e.replace(H, function(Q, ge, _e, Et, pt, Rt) {
          return _e || (_e = Et), W += e.slice(k, Rt).replace(bn, Vp), ge && (S = !0, W += `' +
__e(` + ge + `) +
'`), pt && (P = !0, W += `';
` + pt + `;
__p += '`), _e && (W += `' +
((__t = (` + _e + `)) == null ? '' : __t) +
'`), k = Rt + Q.length, Q;
        }), W += `';
`;
        var J = Ne.call(t, "variable") && t.variable;
        if (!J)
          W = `with (obj) {
` + W + `
}
`;
        else if (B.test(J))
          throw new ie(d);
        W = (P ? W.replace(Yi, "") : W).replace(Wr, "$1").replace(yo, "$1;"), W = "function(" + (J || "obj") + `) {
` + (J ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (S ? ", __e = _.escape" : "") + (P ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + W + `return __p
}`;
        var fe = Au(function() {
          return Te(h, K + "return " + W).apply(r, x);
        });
        if (fe.source = W, ta(fe))
          throw fe;
        return fe;
      }
      function vy(e) {
        return Pe(e).toLowerCase();
      }
      function xy(e) {
        return Pe(e).toUpperCase();
      }
      function yy(e, t, o) {
        if (e = Pe(e), e && (o || t === r))
          return kl(e);
        if (!e || !(t = Ct(t)))
          return e;
        var a = $t(e), c = $t(t), h = Fl(a, c), x = Wl(a, c) + 1;
        return Pn(a, h, x).join("");
      }
      function wy(e, t, o) {
        if (e = Pe(e), e && (o || t === r))
          return e.slice(0, Bl(e) + 1);
        if (!e || !(t = Ct(t)))
          return e;
        var a = $t(e), c = Wl(a, $t(t)) + 1;
        return Pn(a, 0, c).join("");
      }
      function by(e, t, o) {
        if (e = Pe(e), e && (o || t === r))
          return e.replace(or, "");
        if (!e || !(t = Ct(t)))
          return e;
        var a = $t(e), c = Fl(a, $t(t));
        return Pn(a, c).join("");
      }
      function _y(e, t) {
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
        if (x && (S += P.length - S), na(c)) {
          if (e.slice(S).search(c)) {
            var k, F = P;
            for (c.global || (c = xs(c.source, Pe(Ae.exec(c)) + "g")), c.lastIndex = 0; k = c.exec(F); )
              var W = k.index;
            P = P.slice(0, W === r ? S : W);
          }
        } else if (e.indexOf(Ct(c), S) != S) {
          var H = P.lastIndexOf(c);
          H > -1 && (P = P.slice(0, H));
        }
        return P + a;
      }
      function Cy(e) {
        return e = Pe(e), e && jr.test(e) ? e.replace(rn, Jp) : e;
      }
      var Sy = gr(function(e, t, o) {
        return e + (o ? " " : "") + t.toUpperCase();
      }), ia = Tc("toUpperCase");
      function Ru(e, t, o) {
        return e = Pe(e), t = o ? r : t, t === r ? Kp(e) ? th(e) : Wp(e) : e.match(t) || [];
      }
      var Au = de(function(e, t) {
        try {
          return bt(e, r, t);
        } catch (o) {
          return ta(o) ? o : new ie(o);
        }
      }), Ey = cn(function(e, t) {
        return It(t, function(o) {
          o = Jt(o), an(e, o, Qs(e[o], e));
        }), e;
      });
      function Ry(e) {
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
      function Ay(e) {
        return Jh(Dt(e, b));
      }
      function sa(e) {
        return function() {
          return e;
        };
      }
      function Ty(e, t) {
        return e == null || e !== e ? t : e;
      }
      var Py = Oc(), Oy = Oc(!0);
      function xt(e) {
        return e;
      }
      function aa(e) {
        return sc(typeof e == "function" ? e : Dt(e, b));
      }
      function Ny(e) {
        return lc(Dt(e, b));
      }
      function Iy(e, t) {
        return cc(e, Dt(t, b));
      }
      var Ly = de(function(e, t) {
        return function(o) {
          return Xr(o, e, t);
        };
      }), My = de(function(e, t) {
        return function(o) {
          return Xr(e, o, t);
        };
      });
      function la(e, t, o) {
        var a = Qe(t), c = Ko(t, a);
        o == null && !(Ue(t) && (c.length || !a.length)) && (o = t, t = e, e = this, c = Ko(t, Qe(t)));
        var h = !(Ue(o) && "chain" in o) || !!o.chain, x = fn(e);
        return It(c, function(S) {
          var P = t[S];
          e[S] = P, x && (e.prototype[S] = function() {
            var k = this.__chain__;
            if (h || k) {
              var F = e(this.__wrapped__), W = F.__actions__ = gt(this.__actions__);
              return W.push({ func: P, args: arguments, thisArg: e }), F.__chain__ = k, F;
            }
            return P.apply(e, Cn([this.value()], arguments));
          });
        }), e;
      }
      function Dy() {
        return rt._ === this && (rt._ = ah), this;
      }
      function ca() {
      }
      function ky(e) {
        return e = le(e), de(function(t) {
          return uc(t, e);
        });
      }
      var Fy = Bs(Be), Wy = Bs(Nl), jy = Bs(fs);
      function Tu(e) {
        return Ks(e) ? ds(Jt(e)) : gg(e);
      }
      function By(e) {
        return function(t) {
          return e == null ? r : Yn(e, t);
        };
      }
      var $y = Ic(), Uy = Ic(!0);
      function ua() {
        return [];
      }
      function fa() {
        return !1;
      }
      function Hy() {
        return {};
      }
      function zy() {
        return "";
      }
      function Vy() {
        return !0;
      }
      function Gy(e, t) {
        if (e = le(e), e < 1 || e > Y)
          return [];
        var o = Ee, a = lt(e, Ee);
        t = X(t), e -= Ee;
        for (var c = gs(a, t); ++o < e; )
          t(o);
        return c;
      }
      function Ky(e) {
        return ae(e) ? Be(e, Jt) : St(e) ? [e] : gt(Yc(Pe(e)));
      }
      function Yy(e) {
        var t = ++ih;
        return Pe(e) + t;
      }
      var qy = Qo(function(e, t) {
        return e + t;
      }, 0), Xy = $s("ceil"), Zy = Qo(function(e, t) {
        return e / t;
      }, 1), Jy = $s("floor");
      function Qy(e) {
        return e && e.length ? Go(e, xt, Rs) : r;
      }
      function ew(e, t) {
        return e && e.length ? Go(e, X(t, 2), Rs) : r;
      }
      function tw(e) {
        return Ml(e, xt);
      }
      function nw(e, t) {
        return Ml(e, X(t, 2));
      }
      function rw(e) {
        return e && e.length ? Go(e, xt, Os) : r;
      }
      function ow(e, t) {
        return e && e.length ? Go(e, X(t, 2), Os) : r;
      }
      var iw = Qo(function(e, t) {
        return e * t;
      }, 1), sw = $s("round"), aw = Qo(function(e, t) {
        return e - t;
      }, 0);
      function lw(e) {
        return e && e.length ? hs(e, xt) : 0;
      }
      function cw(e, t) {
        return e && e.length ? hs(e, X(t, 2)) : 0;
      }
      return p.after = Nv, p.ary = iu, p.assign = xx, p.assignIn = yu, p.assignInWith = di, p.assignWith = yx, p.at = wx, p.before = su, p.bind = Qs, p.bindAll = Ey, p.bindKey = au, p.castArray = Hv, p.chain = nu, p.chunk = Jg, p.compact = Qg, p.concat = em, p.cond = Ry, p.conforms = Ay, p.constant = sa, p.countBy = lv, p.create = bx, p.curry = lu, p.curryRight = cu, p.debounce = uu, p.defaults = _x, p.defaultsDeep = Cx, p.defer = Iv, p.delay = Lv, p.difference = tm, p.differenceBy = nm, p.differenceWith = rm, p.drop = om, p.dropRight = im, p.dropRightWhile = sm, p.dropWhile = am, p.fill = lm, p.filter = uv, p.flatMap = pv, p.flatMapDeep = hv, p.flatMapDepth = gv, p.flatten = Jc, p.flattenDeep = cm, p.flattenDepth = um, p.flip = Mv, p.flow = Py, p.flowRight = Oy, p.fromPairs = fm, p.functions = Ox, p.functionsIn = Nx, p.groupBy = mv, p.initial = pm, p.intersection = hm, p.intersectionBy = gm, p.intersectionWith = mm, p.invert = Lx, p.invertBy = Mx, p.invokeMap = xv, p.iteratee = aa, p.keyBy = yv, p.keys = Qe, p.keysIn = vt, p.map = si, p.mapKeys = kx, p.mapValues = Fx, p.matches = Ny, p.matchesProperty = Iy, p.memoize = li, p.merge = Wx, p.mergeWith = wu, p.method = Ly, p.methodOf = My, p.mixin = la, p.negate = ci, p.nthArg = ky, p.omit = jx, p.omitBy = Bx, p.once = Dv, p.orderBy = wv, p.over = Fy, p.overArgs = kv, p.overEvery = Wy, p.overSome = jy, p.partial = ea, p.partialRight = fu, p.partition = bv, p.pick = $x, p.pickBy = bu, p.property = Tu, p.propertyOf = By, p.pull = wm, p.pullAll = eu, p.pullAllBy = bm, p.pullAllWith = _m, p.pullAt = Cm, p.range = $y, p.rangeRight = Uy, p.rearg = Fv, p.reject = Sv, p.remove = Sm, p.rest = Wv, p.reverse = Zs, p.sampleSize = Rv, p.set = Hx, p.setWith = zx, p.shuffle = Av, p.slice = Em, p.sortBy = Ov, p.sortedUniq = Im, p.sortedUniqBy = Lm, p.split = py, p.spread = jv, p.tail = Mm, p.take = Dm, p.takeRight = km, p.takeRightWhile = Fm, p.takeWhile = Wm, p.tap = Qm, p.throttle = Bv, p.thru = ii, p.toArray = mu, p.toPairs = _u, p.toPairsIn = Cu, p.toPath = Ky, p.toPlainObject = xu, p.transform = Vx, p.unary = $v, p.union = jm, p.unionBy = Bm, p.unionWith = $m, p.uniq = Um, p.uniqBy = Hm, p.uniqWith = zm, p.unset = Gx, p.unzip = Js, p.unzipWith = tu, p.update = Kx, p.updateWith = Yx, p.values = xr, p.valuesIn = qx, p.without = Vm, p.words = Ru, p.wrap = Uv, p.xor = Gm, p.xorBy = Km, p.xorWith = Ym, p.zip = qm, p.zipObject = Xm, p.zipObjectDeep = Zm, p.zipWith = Jm, p.entries = _u, p.entriesIn = Cu, p.extend = yu, p.extendWith = di, la(p, p), p.add = qy, p.attempt = Au, p.camelCase = Qx, p.capitalize = Su, p.ceil = Xy, p.clamp = Xx, p.clone = zv, p.cloneDeep = Gv, p.cloneDeepWith = Kv, p.cloneWith = Vv, p.conformsTo = Yv, p.deburr = Eu, p.defaultTo = Ty, p.divide = Zy, p.endsWith = ey, p.eq = Ht, p.escape = ty, p.escapeRegExp = ny, p.every = cv, p.find = fv, p.findIndex = Xc, p.findKey = Sx, p.findLast = dv, p.findLastIndex = Zc, p.findLastKey = Ex, p.floor = Jy, p.forEach = ru, p.forEachRight = ou, p.forIn = Rx, p.forInRight = Ax, p.forOwn = Tx, p.forOwnRight = Px, p.get = ra, p.gt = qv, p.gte = Xv, p.has = Ix, p.hasIn = oa, p.head = Qc, p.identity = xt, p.includes = vv, p.indexOf = dm, p.inRange = Zx, p.invoke = Dx, p.isArguments = Zn, p.isArray = ae, p.isArrayBuffer = Zv, p.isArrayLike = mt, p.isArrayLikeObject = Ge, p.isBoolean = Jv, p.isBuffer = On, p.isDate = Qv, p.isElement = ex, p.isEmpty = tx, p.isEqual = nx, p.isEqualWith = rx, p.isError = ta, p.isFinite = ox, p.isFunction = fn, p.isInteger = du, p.isLength = ui, p.isMap = pu, p.isMatch = ix, p.isMatchWith = sx, p.isNaN = ax, p.isNative = lx, p.isNil = ux, p.isNull = cx, p.isNumber = hu, p.isObject = Ue, p.isObjectLike = Ve, p.isPlainObject = no, p.isRegExp = na, p.isSafeInteger = fx, p.isSet = gu, p.isString = fi, p.isSymbol = St, p.isTypedArray = vr, p.isUndefined = dx, p.isWeakMap = px, p.isWeakSet = hx, p.join = vm, p.kebabCase = ry, p.last = Ft, p.lastIndexOf = xm, p.lowerCase = oy, p.lowerFirst = iy, p.lt = gx, p.lte = mx, p.max = Qy, p.maxBy = ew, p.mean = tw, p.meanBy = nw, p.min = rw, p.minBy = ow, p.stubArray = ua, p.stubFalse = fa, p.stubObject = Hy, p.stubString = zy, p.stubTrue = Vy, p.multiply = iw, p.nth = ym, p.noConflict = Dy, p.noop = ca, p.now = ai, p.pad = sy, p.padEnd = ay, p.padStart = ly, p.parseInt = cy, p.random = Jx, p.reduce = _v, p.reduceRight = Cv, p.repeat = uy, p.replace = fy, p.result = Ux, p.round = sw, p.runInContext = T, p.sample = Ev, p.size = Tv, p.snakeCase = dy, p.some = Pv, p.sortedIndex = Rm, p.sortedIndexBy = Am, p.sortedIndexOf = Tm, p.sortedLastIndex = Pm, p.sortedLastIndexBy = Om, p.sortedLastIndexOf = Nm, p.startCase = hy, p.startsWith = gy, p.subtract = aw, p.sum = lw, p.sumBy = cw, p.template = my, p.times = Gy, p.toFinite = dn, p.toInteger = le, p.toLength = vu, p.toLower = vy, p.toNumber = Wt, p.toSafeInteger = vx, p.toString = Pe, p.toUpper = xy, p.trim = yy, p.trimEnd = wy, p.trimStart = by, p.truncate = _y, p.unescape = Cy, p.uniqueId = Yy, p.upperCase = Sy, p.upperFirst = ia, p.each = ru, p.eachRight = ou, p.first = Qc, la(p, function() {
        var e = {};
        return Xt(p, function(t, o) {
          Ne.call(p.prototype, o) || (e[o] = t);
        }), e;
      }(), { chain: !1 }), p.VERSION = s, It(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(e) {
        p[e].placeholder = p;
      }), It(["drop", "take"], function(e, t) {
        we.prototype[e] = function(o) {
          o = o === r ? 1 : Xe(le(o), 0);
          var a = this.__filtered__ && !t ? new we(this) : this.clone();
          return a.__filtered__ ? a.__takeCount__ = lt(o, a.__takeCount__) : a.__views__.push({
            size: lt(o, Ee),
            type: e + (a.__dir__ < 0 ? "Right" : "")
          }), a;
        }, we.prototype[e + "Right"] = function(o) {
          return this.reverse()[e](o).reverse();
        };
      }), It(["filter", "map", "takeWhile"], function(e, t) {
        var o = t + 1, a = o == ne || o == oe;
        we.prototype[e] = function(c) {
          var h = this.clone();
          return h.__iteratees__.push({
            iteratee: X(c, 3),
            type: o
          }), h.__filtered__ = h.__filtered__ || a, h;
        };
      }), It(["head", "last"], function(e, t) {
        var o = "take" + (t ? "Right" : "");
        we.prototype[e] = function() {
          return this[o](1).value()[0];
        };
      }), It(["initial", "tail"], function(e, t) {
        var o = "drop" + (t ? "" : "Right");
        we.prototype[e] = function() {
          return this.__filtered__ ? new we(this) : this[o](1);
        };
      }), we.prototype.compact = function() {
        return this.filter(xt);
      }, we.prototype.find = function(e) {
        return this.filter(e).head();
      }, we.prototype.findLast = function(e) {
        return this.reverse().find(e);
      }, we.prototype.invokeMap = de(function(e, t) {
        return typeof e == "function" ? new we(this) : this.map(function(o) {
          return Xr(o, e, t);
        });
      }), we.prototype.reject = function(e) {
        return this.filter(ci(X(e)));
      }, we.prototype.slice = function(e, t) {
        e = le(e);
        var o = this;
        return o.__filtered__ && (e > 0 || t < 0) ? new we(o) : (e < 0 ? o = o.takeRight(-e) : e && (o = o.drop(e)), t !== r && (t = le(t), o = t < 0 ? o.dropRight(-t) : o.take(t - e)), o);
      }, we.prototype.takeRightWhile = function(e) {
        return this.reverse().takeWhile(e).reverse();
      }, we.prototype.toArray = function() {
        return this.take(Ee);
      }, Xt(we.prototype, function(e, t) {
        var o = /^(?:filter|find|map|reject)|While$/.test(t), a = /^(?:head|last)$/.test(t), c = p[a ? "take" + (t == "last" ? "Right" : "") : t], h = a || /^find/.test(t);
        c && (p.prototype[t] = function() {
          var x = this.__wrapped__, S = a ? [1] : arguments, P = x instanceof we, k = S[0], F = P || ae(x), W = function(ge) {
            var _e = c.apply(p, Cn([ge], S));
            return a && H ? _e[0] : _e;
          };
          F && o && typeof k == "function" && k.length != 1 && (P = F = !1);
          var H = this.__chain__, K = !!this.__actions__.length, J = h && !H, fe = P && !K;
          if (!h && F) {
            x = fe ? x : new we(this);
            var Q = e.apply(x, S);
            return Q.__actions__.push({ func: ii, args: [W], thisArg: r }), new Mt(Q, H);
          }
          return J && fe ? e.apply(this, S) : (Q = this.thru(W), J ? a ? Q.value()[0] : Q.value() : Q);
        });
      }), It(["pop", "push", "shift", "sort", "splice", "unshift"], function(e) {
        var t = No[e], o = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru", a = /^(?:pop|shift)$/.test(e);
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
      }), Xt(we.prototype, function(e, t) {
        var o = p[t];
        if (o) {
          var a = o.name + "";
          Ne.call(dr, a) || (dr[a] = []), dr[a].push({ name: t, func: o });
        }
      }), dr[Jo(r, I).name] = [{
        name: "wrapper",
        func: r
      }], we.prototype.clone = Ch, we.prototype.reverse = Sh, we.prototype.value = Eh, p.prototype.at = ev, p.prototype.chain = tv, p.prototype.commit = nv, p.prototype.next = rv, p.prototype.plant = iv, p.prototype.reverse = sv, p.prototype.toJSON = p.prototype.valueOf = p.prototype.value = av, p.prototype.first = p.prototype.head, Hr && (p.prototype[Hr] = ov), p;
    }, cr = nh();
    Hn ? ((Hn.exports = cr)._ = cr, as._ = cr) : rt._ = cr;
  }).call(ro);
})(Ei, Ei.exports);
var gw = Ei.exports;
const mw = /* @__PURE__ */ dw(gw);
function vw(n, i) {
  typeof n == "function" ? n(i) : n != null && (n.current = i);
}
function cf(...n) {
  return (i) => n.forEach((r) => vw(r, i));
}
function Ye(...n) {
  return m.useCallback(cf(...n), n);
}
var Er = m.forwardRef((n, i) => {
  const { children: r, ...s } = n, l = m.Children.toArray(r), u = l.find(xw);
  if (u) {
    const f = u.props.children, d = l.map((g) => g === u ? m.Children.count(f) > 1 ? m.Children.only(null) : m.isValidElement(f) ? f.props.children : null : g);
    return /* @__PURE__ */ C.jsx(Ea, { ...s, ref: i, children: m.isValidElement(f) ? m.cloneElement(f, void 0, d) : null });
  }
  return /* @__PURE__ */ C.jsx(Ea, { ...s, ref: i, children: r });
});
Er.displayName = "Slot";
var Ea = m.forwardRef((n, i) => {
  const { children: r, ...s } = n;
  if (m.isValidElement(r)) {
    const l = ww(r);
    return m.cloneElement(r, {
      ...yw(s, r.props),
      // @ts-ignore
      ref: i ? cf(i, l) : l
    });
  }
  return m.Children.count(r) > 1 ? m.Children.only(null) : null;
});
Ea.displayName = "SlotClone";
var uf = ({ children: n }) => /* @__PURE__ */ C.jsx(C.Fragment, { children: n });
function xw(n) {
  return m.isValidElement(n) && n.type === uf;
}
function yw(n, i) {
  const r = { ...i };
  for (const s in i) {
    const l = n[s], u = i[s];
    /^on[A-Z]/.test(s) ? l && u ? r[s] = (...d) => {
      u(...d), l(...d);
    } : l && (r[s] = l) : s === "style" ? r[s] = { ...l, ...u } : s === "className" && (r[s] = [l, u].filter(Boolean).join(" "));
  }
  return { ...n, ...r };
}
function ww(n) {
  var s, l;
  let i = (s = Object.getOwnPropertyDescriptor(n.props, "ref")) == null ? void 0 : s.get, r = i && "isReactWarning" in i && i.isReactWarning;
  return r ? n.ref : (i = (l = Object.getOwnPropertyDescriptor(n, "ref")) == null ? void 0 : l.get, r = i && "isReactWarning" in i && i.isReactWarning, r ? n.props.ref : n.props.ref || n.ref);
}
function ff(n) {
  var i, r, s = "";
  if (typeof n == "string" || typeof n == "number")
    s += n;
  else if (typeof n == "object")
    if (Array.isArray(n))
      for (i = 0; i < n.length; i++)
        n[i] && (r = ff(n[i])) && (s && (s += " "), s += r);
    else
      for (i in n)
        n[i] && (s && (s += " "), s += i);
  return s;
}
function bw() {
  for (var n, i, r = 0, s = ""; r < arguments.length; )
    (n = arguments[r++]) && (i = ff(n)) && (s && (s += " "), s += i);
  return s;
}
const Iu = (n) => typeof n == "boolean" ? "".concat(n) : n === 0 ? "0" : n, Lu = bw, df = (n, i) => (r) => {
  var s;
  if ((i == null ? void 0 : i.variants) == null)
    return Lu(n, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
  const { variants: l, defaultVariants: u } = i, f = Object.keys(l).map((v) => {
    const y = r == null ? void 0 : r[v], b = u == null ? void 0 : u[v];
    if (y === null)
      return null;
    const E = Iu(y) || Iu(b);
    return l[v][E];
  }), d = r && Object.entries(r).reduce((v, y) => {
    let [b, E] = y;
    return E === void 0 || (v[b] = E), v;
  }, {}), g = i == null || (s = i.compoundVariants) === null || s === void 0 ? void 0 : s.reduce((v, y) => {
    let { class: b, className: E, ...R } = y;
    return Object.entries(R).every((O) => {
      let [w, A] = O;
      return Array.isArray(A) ? A.includes({
        ...u,
        ...d
      }[w]) : {
        ...u,
        ...d
      }[w] === A;
    }) ? [
      ...v,
      b,
      E
    ] : v;
  }, []);
  return Lu(n, f, g, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
};
function pf(n) {
  var i, r, s = "";
  if (typeof n == "string" || typeof n == "number")
    s += n;
  else if (typeof n == "object")
    if (Array.isArray(n)) {
      var l = n.length;
      for (i = 0; i < l; i++)
        n[i] && (r = pf(n[i])) && (s && (s += " "), s += r);
    } else
      for (r in n)
        n[r] && (s && (s += " "), s += r);
  return s;
}
function _w() {
  for (var n, i, r = 0, s = "", l = arguments.length; r < l; r++)
    (n = arguments[r]) && (i = pf(n)) && (s && (s += " "), s += i);
  return s;
}
const $a = "-", Cw = (n) => {
  const i = Ew(n), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: s
  } = n;
  return {
    getClassGroupId: (f) => {
      const d = f.split($a);
      return d[0] === "" && d.length !== 1 && d.shift(), hf(d, i) || Sw(f);
    },
    getConflictingClassGroupIds: (f, d) => {
      const g = r[f] || [];
      return d && s[f] ? [...g, ...s[f]] : g;
    }
  };
}, hf = (n, i) => {
  var f;
  if (n.length === 0)
    return i.classGroupId;
  const r = n[0], s = i.nextPart.get(r), l = s ? hf(n.slice(1), s) : void 0;
  if (l)
    return l;
  if (i.validators.length === 0)
    return;
  const u = n.join($a);
  return (f = i.validators.find(({
    validator: d
  }) => d(u))) == null ? void 0 : f.classGroupId;
}, Mu = /^\[(.+)\]$/, Sw = (n) => {
  if (Mu.test(n)) {
    const i = Mu.exec(n)[1], r = i == null ? void 0 : i.substring(0, i.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, Ew = (n) => {
  const {
    theme: i,
    prefix: r
  } = n, s = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Aw(Object.entries(n.classGroups), r).forEach(([u, f]) => {
    Ra(f, s, u, i);
  }), s;
}, Ra = (n, i, r, s) => {
  n.forEach((l) => {
    if (typeof l == "string") {
      const u = l === "" ? i : Du(i, l);
      u.classGroupId = r;
      return;
    }
    if (typeof l == "function") {
      if (Rw(l)) {
        Ra(l(s), i, r, s);
        return;
      }
      i.validators.push({
        validator: l,
        classGroupId: r
      });
      return;
    }
    Object.entries(l).forEach(([u, f]) => {
      Ra(f, Du(i, u), r, s);
    });
  });
}, Du = (n, i) => {
  let r = n;
  return i.split($a).forEach((s) => {
    r.nextPart.has(s) || r.nextPart.set(s, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(s);
  }), r;
}, Rw = (n) => n.isThemeGetter, Aw = (n, i) => i ? n.map(([r, s]) => {
  const l = s.map((u) => typeof u == "string" ? i + u : typeof u == "object" ? Object.fromEntries(Object.entries(u).map(([f, d]) => [i + f, d])) : u);
  return [r, l];
}) : n, Tw = (n) => {
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
}, gf = "!", Pw = (n) => {
  const {
    separator: i,
    experimentalParseClassName: r
  } = n, s = i.length === 1, l = i[0], u = i.length, f = (d) => {
    const g = [];
    let v = 0, y = 0, b;
    for (let A = 0; A < d.length; A++) {
      let I = d[A];
      if (v === 0) {
        if (I === l && (s || d.slice(A, A + u) === i)) {
          g.push(d.slice(y, A)), y = A + u;
          continue;
        }
        if (I === "/") {
          b = A;
          continue;
        }
      }
      I === "[" ? v++ : I === "]" && v--;
    }
    const E = g.length === 0 ? d : d.substring(y), R = E.startsWith(gf), O = R ? E.substring(1) : E, w = b && b > y ? b - y : void 0;
    return {
      modifiers: g,
      hasImportantModifier: R,
      baseClassName: O,
      maybePostfixModifierPosition: w
    };
  };
  return r ? (d) => r({
    className: d,
    parseClassName: f
  }) : f;
}, Ow = (n) => {
  if (n.length <= 1)
    return n;
  const i = [];
  let r = [];
  return n.forEach((s) => {
    s[0] === "[" ? (i.push(...r.sort(), s), r = []) : r.push(s);
  }), i.push(...r.sort()), i;
}, Nw = (n) => ({
  cache: Tw(n.cacheSize),
  parseClassName: Pw(n),
  ...Cw(n)
}), Iw = /\s+/, Lw = (n, i) => {
  const {
    parseClassName: r,
    getClassGroupId: s,
    getConflictingClassGroupIds: l
  } = i, u = [], f = n.trim().split(Iw);
  let d = "";
  for (let g = f.length - 1; g >= 0; g -= 1) {
    const v = f[g], {
      modifiers: y,
      hasImportantModifier: b,
      baseClassName: E,
      maybePostfixModifierPosition: R
    } = r(v);
    let O = !!R, w = s(O ? E.substring(0, R) : E);
    if (!w) {
      if (!O) {
        d = v + (d.length > 0 ? " " + d : d);
        continue;
      }
      if (w = s(E), !w) {
        d = v + (d.length > 0 ? " " + d : d);
        continue;
      }
      O = !1;
    }
    const A = Ow(y).join(":"), I = b ? A + gf : A, N = I + w;
    if (u.includes(N))
      continue;
    u.push(N);
    const M = l(w, O);
    for (let j = 0; j < M.length; ++j) {
      const $ = M[j];
      u.push(I + $);
    }
    d = v + (d.length > 0 ? " " + d : d);
  }
  return d;
};
function Mw() {
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
function Dw(n, ...i) {
  let r, s, l, u = f;
  function f(g) {
    const v = i.reduce((y, b) => b(y), n());
    return r = Nw(v), s = r.cache.get, l = r.cache.set, u = d, d(g);
  }
  function d(g) {
    const v = s(g);
    if (v)
      return v;
    const y = Lw(g, r);
    return l(g, y), y;
  }
  return function() {
    return u(Mw.apply(null, arguments));
  };
}
const We = (n) => {
  const i = (r) => r[n] || [];
  return i.isThemeGetter = !0, i;
}, vf = /^\[(?:([a-z-]+):)?(.+)\]$/i, kw = /^\d+\/\d+$/, Fw = /* @__PURE__ */ new Set(["px", "full", "screen"]), Ww = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, jw = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Bw = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, $w = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Uw = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, hn = (n) => _r(n) || Fw.has(n) || kw.test(n), Nn = (n) => Tr(n, "length", Xw), _r = (n) => !!n && !Number.isNaN(Number(n)), da = (n) => Tr(n, "number", _r), so = (n) => !!n && Number.isInteger(Number(n)), Hw = (n) => n.endsWith("%") && _r(n.slice(0, -1)), ce = (n) => vf.test(n), In = (n) => Ww.test(n), zw = /* @__PURE__ */ new Set(["length", "size", "percentage"]), Vw = (n) => Tr(n, zw, xf), Gw = (n) => Tr(n, "position", xf), Kw = /* @__PURE__ */ new Set(["image", "url"]), Yw = (n) => Tr(n, Kw, Jw), qw = (n) => Tr(n, "", Zw), ao = () => !0, Tr = (n, i, r) => {
  const s = vf.exec(n);
  return s ? s[1] ? typeof i == "string" ? s[1] === i : i.has(s[1]) : r(s[2]) : !1;
}, Xw = (n) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  jw.test(n) && !Bw.test(n)
), xf = () => !1, Zw = (n) => $w.test(n), Jw = (n) => Uw.test(n), Qw = () => {
  const n = We("colors"), i = We("spacing"), r = We("blur"), s = We("brightness"), l = We("borderColor"), u = We("borderRadius"), f = We("borderSpacing"), d = We("borderWidth"), g = We("contrast"), v = We("grayscale"), y = We("hueRotate"), b = We("invert"), E = We("gap"), R = We("gradientColorStops"), O = We("gradientColorStopPositions"), w = We("inset"), A = We("margin"), I = We("opacity"), N = We("padding"), M = We("saturate"), j = We("scale"), $ = We("sepia"), G = We("skew"), U = We("space"), ee = We("translate"), ue = () => ["auto", "contain", "none"], he = () => ["auto", "hidden", "clip", "visible", "scroll"], Ce = () => ["auto", ce, i], q = () => [ce, i], re = () => ["", hn, Nn], ne = () => ["auto", _r, ce], Se = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], oe = () => ["solid", "dashed", "dotted", "double", "none"], se = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], Y = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], me = () => ["", "0", ce], ke = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], Ee = () => [_r, ce];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [ao],
      spacing: [hn, Nn],
      blur: ["none", "", In, ce],
      brightness: Ee(),
      borderColor: [n],
      borderRadius: ["none", "", "full", In, ce],
      borderSpacing: q(),
      borderWidth: re(),
      contrast: Ee(),
      grayscale: me(),
      hueRotate: Ee(),
      invert: me(),
      gap: q(),
      gradientColorStops: [n],
      gradientColorStopPositions: [Hw, Nn],
      inset: Ce(),
      margin: Ce(),
      opacity: Ee(),
      padding: q(),
      saturate: Ee(),
      scale: Ee(),
      sepia: me(),
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
        z: ["auto", so, ce]
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
        grow: me()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: me()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", so, ce]
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
          span: ["full", so, ce]
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
        "grid-rows": [ao]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [so, ce]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", da]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", ce]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", _r, da]
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
        bg: [...Se(), Gw]
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
        bg: ["auto", "cover", "contain", Vw]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Yw]
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
        shadow: ["", "inner", "none", In, qw]
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
        grayscale: [v]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [y]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [b]
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
        "backdrop-grayscale": [v]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [y]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [b]
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
        scale: [j]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [j]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [j]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [so, ce]
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
        stroke: [hn, Nn, da]
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
}, eb = /* @__PURE__ */ Dw(Qw);
function et(...n) {
  return eb(_w(n));
}
function tb(n) {
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
const nb = df(
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
), uo = m.forwardRef(
  ({ className: n, variant: i, size: r, asChild: s = !1, ...l }, u) => {
    const f = s ? Er : "button";
    return /* @__PURE__ */ C.jsx(
      f,
      {
        className: et(nb({ variant: i, size: r, className: n })),
        ref: u,
        ...l
      }
    );
  }
);
uo.displayName = "Button";
const rb = "_counter_1wts1_1", ob = "_header_1wts1_10", ib = "_button_1wts1_16", pa = {
  counter: rb,
  header: ob,
  button: ib
}, sb = (n) => {
  const [i, r] = sf(n);
  return {
    count: i,
    incrementCount: () => r(i + 1)
  };
}, { throttle: ab } = mw, e1 = ({ initialValue: n = 0 }) => {
  const { count: i, incrementCount: r } = sb(n);
  return af(() => {
    ab(() => {
      console.log("throttle");
    }, 10)();
  }, []), /* @__PURE__ */ C.jsxs("div", { className: pa.counter, children: [
    /* @__PURE__ */ C.jsx("h2", { className: pa.header, children: "Counter" }),
    /* @__PURE__ */ C.jsx("button", { className: pa.button, type: "button", onClick: r, children: "Increment by one" }),
    /* @__PURE__ */ C.jsx(uo, { variant: "outline", children: "Shadcn button" }),
    /* @__PURE__ */ C.jsxs("div", { className: "bg-red-500", children: [
      "Total value: ",
      /* @__PURE__ */ C.jsx("strong", { children: i })
    ] })
  ] });
};
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lb = (n) => n.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), yf = (...n) => n.filter((i, r, s) => !!i && i.trim() !== "" && s.indexOf(i) === r).join(" ").trim();
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var cb = {
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
const ub = lf(
  ({
    color: n = "currentColor",
    size: i = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: s,
    className: l = "",
    children: u,
    iconNode: f,
    ...d
  }, g) => Ca(
    "svg",
    {
      ref: g,
      ...cb,
      width: i,
      height: i,
      stroke: n,
      strokeWidth: s ? Number(r) * 24 / Number(i) : r,
      className: yf("lucide", l),
      ...d
    },
    [
      ...f.map(([v, y]) => Ca(v, y)),
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
const go = (n, i) => {
  const r = lf(
    ({ className: s, ...l }, u) => Ca(ub, {
      ref: u,
      iconNode: i,
      className: yf(`lucide-${lb(n)}`, s),
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
const fb = go("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wf = go("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const db = go("ChevronUp", [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Aa = go("CircleHelp", [
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
const pb = go("ExternalLink", [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
]);
function ku(n, [i, r]) {
  return Math.min(r, Math.max(i, n));
}
function De(n, i, { checkForDefaultPrevented: r = !0 } = {}) {
  return function(l) {
    if (n == null || n(l), r === !1 || !l.defaultPrevented)
      return i == null ? void 0 : i(l);
  };
}
function hb(n, i = []) {
  let r = [];
  function s(u, f) {
    const d = m.createContext(f), g = r.length;
    r = [...r, f];
    function v(b) {
      const { scope: E, children: R, ...O } = b, w = (E == null ? void 0 : E[n][g]) || d, A = m.useMemo(() => O, Object.values(O));
      return /* @__PURE__ */ C.jsx(w.Provider, { value: A, children: R });
    }
    function y(b, E) {
      const R = (E == null ? void 0 : E[n][g]) || d, O = m.useContext(R);
      if (O)
        return O;
      if (f !== void 0)
        return f;
      throw new Error(`\`${b}\` must be used within \`${u}\``);
    }
    return v.displayName = u + "Provider", [v, y];
  }
  const l = () => {
    const u = r.map((f) => m.createContext(f));
    return function(d) {
      const g = (d == null ? void 0 : d[n]) || u;
      return m.useMemo(
        () => ({ [`__scope${n}`]: { ...d, [n]: g } }),
        [d, g]
      );
    };
  };
  return l.scopeName = n, [s, gb(l, ...i)];
}
function gb(...n) {
  const i = n[0];
  if (n.length === 1)
    return i;
  const r = () => {
    const s = n.map((l) => ({
      useScope: l(),
      scopeName: l.scopeName
    }));
    return function(u) {
      const f = s.reduce((d, { useScope: g, scopeName: v }) => {
        const b = g(u)[`__scope${v}`];
        return { ...d, ...b };
      }, {});
      return m.useMemo(() => ({ [`__scope${i.scopeName}`]: f }), [f]);
    };
  };
  return r.scopeName = i.scopeName, r;
}
function mb(n) {
  const i = n + "CollectionProvider", [r, s] = hb(i), [l, u] = r(
    i,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), f = (R) => {
    const { scope: O, children: w } = R, A = gn.useRef(null), I = gn.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ C.jsx(l, { scope: O, itemMap: I, collectionRef: A, children: w });
  };
  f.displayName = i;
  const d = n + "CollectionSlot", g = gn.forwardRef(
    (R, O) => {
      const { scope: w, children: A } = R, I = u(d, w), N = Ye(O, I.collectionRef);
      return /* @__PURE__ */ C.jsx(Er, { ref: N, children: A });
    }
  );
  g.displayName = d;
  const v = n + "CollectionItemSlot", y = "data-radix-collection-item", b = gn.forwardRef(
    (R, O) => {
      const { scope: w, children: A, ...I } = R, N = gn.useRef(null), M = Ye(O, N), j = u(v, w);
      return gn.useEffect(() => (j.itemMap.set(N, { ref: N, ...I }), () => void j.itemMap.delete(N))), /* @__PURE__ */ C.jsx(Er, { [y]: "", ref: M, children: A });
    }
  );
  b.displayName = v;
  function E(R) {
    const O = u(n + "CollectionConsumer", R);
    return gn.useCallback(() => {
      const A = O.collectionRef.current;
      if (!A)
        return [];
      const I = Array.from(A.querySelectorAll(`[${y}]`));
      return Array.from(O.itemMap.values()).sort(
        (j, $) => I.indexOf(j.ref.current) - I.indexOf($.ref.current)
      );
    }, [O.collectionRef, O.itemMap]);
  }
  return [
    { Provider: f, Slot: g, ItemSlot: b },
    E,
    s
  ];
}
function bf(n, i = []) {
  let r = [];
  function s(u, f) {
    const d = m.createContext(f), g = r.length;
    r = [...r, f];
    const v = (b) => {
      var I;
      const { scope: E, children: R, ...O } = b, w = ((I = E == null ? void 0 : E[n]) == null ? void 0 : I[g]) || d, A = m.useMemo(() => O, Object.values(O));
      return /* @__PURE__ */ C.jsx(w.Provider, { value: A, children: R });
    };
    v.displayName = u + "Provider";
    function y(b, E) {
      var w;
      const R = ((w = E == null ? void 0 : E[n]) == null ? void 0 : w[g]) || d, O = m.useContext(R);
      if (O)
        return O;
      if (f !== void 0)
        return f;
      throw new Error(`\`${b}\` must be used within \`${u}\``);
    }
    return [v, y];
  }
  const l = () => {
    const u = r.map((f) => m.createContext(f));
    return function(d) {
      const g = (d == null ? void 0 : d[n]) || u;
      return m.useMemo(
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
      const f = s.reduce((d, { useScope: g, scopeName: v }) => {
        const b = g(u)[`__scope${v}`];
        return { ...d, ...b };
      }, {});
      return m.useMemo(() => ({ [`__scope${i.scopeName}`]: f }), [f]);
    };
  };
  return r.scopeName = i.scopeName, r;
}
var xb = m.createContext(void 0);
function yb(n) {
  const i = m.useContext(xb);
  return n || i || "ltr";
}
var wb = [
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
], He = wb.reduce((n, i) => {
  const r = m.forwardRef((s, l) => {
    const { asChild: u, ...f } = s, d = u ? Er : i;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ C.jsx(d, { ...f, ref: l });
  });
  return r.displayName = `Primitive.${i}`, { ...n, [i]: r };
}, {});
function bb(n, i) {
  n && Li.flushSync(() => n.dispatchEvent(i));
}
function mn(n) {
  const i = m.useRef(n);
  return m.useEffect(() => {
    i.current = n;
  }), m.useMemo(() => (...r) => {
    var s;
    return (s = i.current) == null ? void 0 : s.call(i, ...r);
  }, []);
}
function _b(n, i = globalThis == null ? void 0 : globalThis.document) {
  const r = mn(n);
  m.useEffect(() => {
    const s = (l) => {
      l.key === "Escape" && r(l);
    };
    return i.addEventListener("keydown", s, { capture: !0 }), () => i.removeEventListener("keydown", s, { capture: !0 });
  }, [r, i]);
}
var Cb = "DismissableLayer", Ta = "dismissableLayer.update", Sb = "dismissableLayer.pointerDownOutside", Eb = "dismissableLayer.focusOutside", Fu, _f = m.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Ua = m.forwardRef(
  (n, i) => {
    const {
      disableOutsidePointerEvents: r = !1,
      onEscapeKeyDown: s,
      onPointerDownOutside: l,
      onFocusOutside: u,
      onInteractOutside: f,
      onDismiss: d,
      ...g
    } = n, v = m.useContext(_f), [y, b] = m.useState(null), E = (y == null ? void 0 : y.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, R] = m.useState({}), O = Ye(i, (U) => b(U)), w = Array.from(v.layers), [A] = [...v.layersWithOutsidePointerEventsDisabled].slice(-1), I = w.indexOf(A), N = y ? w.indexOf(y) : -1, M = v.layersWithOutsidePointerEventsDisabled.size > 0, j = N >= I, $ = Tb((U) => {
      const ee = U.target, ue = [...v.branches].some((he) => he.contains(ee));
      !j || ue || (l == null || l(U), f == null || f(U), U.defaultPrevented || d == null || d());
    }, E), G = Pb((U) => {
      const ee = U.target;
      [...v.branches].some((he) => he.contains(ee)) || (u == null || u(U), f == null || f(U), U.defaultPrevented || d == null || d());
    }, E);
    return _b((U) => {
      N === v.layers.size - 1 && (s == null || s(U), !U.defaultPrevented && d && (U.preventDefault(), d()));
    }, E), m.useEffect(() => {
      if (y)
        return r && (v.layersWithOutsidePointerEventsDisabled.size === 0 && (Fu = E.body.style.pointerEvents, E.body.style.pointerEvents = "none"), v.layersWithOutsidePointerEventsDisabled.add(y)), v.layers.add(y), Wu(), () => {
          r && v.layersWithOutsidePointerEventsDisabled.size === 1 && (E.body.style.pointerEvents = Fu);
        };
    }, [y, E, r, v]), m.useEffect(() => () => {
      y && (v.layers.delete(y), v.layersWithOutsidePointerEventsDisabled.delete(y), Wu());
    }, [y, v]), m.useEffect(() => {
      const U = () => R({});
      return document.addEventListener(Ta, U), () => document.removeEventListener(Ta, U);
    }, []), /* @__PURE__ */ C.jsx(
      He.div,
      {
        ...g,
        ref: O,
        style: {
          pointerEvents: M ? j ? "auto" : "none" : void 0,
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
Ua.displayName = Cb;
var Rb = "DismissableLayerBranch", Ab = m.forwardRef((n, i) => {
  const r = m.useContext(_f), s = m.useRef(null), l = Ye(i, s);
  return m.useEffect(() => {
    const u = s.current;
    if (u)
      return r.branches.add(u), () => {
        r.branches.delete(u);
      };
  }, [r.branches]), /* @__PURE__ */ C.jsx(He.div, { ...n, ref: l });
});
Ab.displayName = Rb;
function Tb(n, i = globalThis == null ? void 0 : globalThis.document) {
  const r = mn(n), s = m.useRef(!1), l = m.useRef(() => {
  });
  return m.useEffect(() => {
    const u = (d) => {
      if (d.target && !s.current) {
        let g = function() {
          Cf(
            Sb,
            r,
            v,
            { discrete: !0 }
          );
        };
        const v = { originalEvent: d };
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
function Pb(n, i = globalThis == null ? void 0 : globalThis.document) {
  const r = mn(n), s = m.useRef(!1);
  return m.useEffect(() => {
    const l = (u) => {
      u.target && !s.current && Cf(Eb, r, { originalEvent: u }, {
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
  const n = new CustomEvent(Ta);
  document.dispatchEvent(n);
}
function Cf(n, i, r, { discrete: s }) {
  const l = r.originalEvent.target, u = new CustomEvent(n, { bubbles: !1, cancelable: !0, detail: r });
  i && l.addEventListener(n, i, { once: !0 }), s ? bb(l, u) : l.dispatchEvent(u);
}
var ha = 0;
function Ob() {
  m.useEffect(() => {
    const n = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", n[0] ?? ju()), document.body.insertAdjacentElement("beforeend", n[1] ?? ju()), ha++, () => {
      ha === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((i) => i.remove()), ha--;
    };
  }, []);
}
function ju() {
  const n = document.createElement("span");
  return n.setAttribute("data-radix-focus-guard", ""), n.tabIndex = 0, n.style.outline = "none", n.style.opacity = "0", n.style.position = "fixed", n.style.pointerEvents = "none", n;
}
var ga = "focusScope.autoFocusOnMount", ma = "focusScope.autoFocusOnUnmount", Bu = { bubbles: !1, cancelable: !0 }, Nb = "FocusScope", Sf = m.forwardRef((n, i) => {
  const {
    loop: r = !1,
    trapped: s = !1,
    onMountAutoFocus: l,
    onUnmountAutoFocus: u,
    ...f
  } = n, [d, g] = m.useState(null), v = mn(l), y = mn(u), b = m.useRef(null), E = Ye(i, (w) => g(w)), R = m.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  m.useEffect(() => {
    if (s) {
      let w = function(M) {
        if (R.paused || !d)
          return;
        const j = M.target;
        d.contains(j) ? b.current = j : Ln(b.current, { select: !0 });
      }, A = function(M) {
        if (R.paused || !d)
          return;
        const j = M.relatedTarget;
        j !== null && (d.contains(j) || Ln(b.current, { select: !0 }));
      }, I = function(M) {
        if (document.activeElement === document.body)
          for (const $ of M)
            $.removedNodes.length > 0 && Ln(d);
      };
      document.addEventListener("focusin", w), document.addEventListener("focusout", A);
      const N = new MutationObserver(I);
      return d && N.observe(d, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", w), document.removeEventListener("focusout", A), N.disconnect();
      };
    }
  }, [s, d, R.paused]), m.useEffect(() => {
    if (d) {
      Uu.add(R);
      const w = document.activeElement;
      if (!d.contains(w)) {
        const I = new CustomEvent(ga, Bu);
        d.addEventListener(ga, v), d.dispatchEvent(I), I.defaultPrevented || (Ib(Fb(Ef(d)), { select: !0 }), document.activeElement === w && Ln(d));
      }
      return () => {
        d.removeEventListener(ga, v), setTimeout(() => {
          const I = new CustomEvent(ma, Bu);
          d.addEventListener(ma, y), d.dispatchEvent(I), I.defaultPrevented || Ln(w ?? document.body, { select: !0 }), d.removeEventListener(ma, y), Uu.remove(R);
        }, 0);
      };
    }
  }, [d, v, y, R]);
  const O = m.useCallback(
    (w) => {
      if (!r && !s || R.paused)
        return;
      const A = w.key === "Tab" && !w.altKey && !w.ctrlKey && !w.metaKey, I = document.activeElement;
      if (A && I) {
        const N = w.currentTarget, [M, j] = Lb(N);
        M && j ? !w.shiftKey && I === j ? (w.preventDefault(), r && Ln(M, { select: !0 })) : w.shiftKey && I === M && (w.preventDefault(), r && Ln(j, { select: !0 })) : I === N && w.preventDefault();
      }
    },
    [r, s, R.paused]
  );
  return /* @__PURE__ */ C.jsx(He.div, { tabIndex: -1, ...f, ref: E, onKeyDown: O });
});
Sf.displayName = Nb;
function Ib(n, { select: i = !1 } = {}) {
  const r = document.activeElement;
  for (const s of n)
    if (Ln(s, { select: i }), document.activeElement !== r)
      return;
}
function Lb(n) {
  const i = Ef(n), r = $u(i, n), s = $u(i.reverse(), n);
  return [r, s];
}
function Ef(n) {
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
function $u(n, i) {
  for (const r of n)
    if (!Mb(r, { upTo: i }))
      return r;
}
function Mb(n, { upTo: i }) {
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
function Db(n) {
  return n instanceof HTMLInputElement && "select" in n;
}
function Ln(n, { select: i = !1 } = {}) {
  if (n && n.focus) {
    const r = document.activeElement;
    n.focus({ preventScroll: !0 }), n !== r && Db(n) && i && n.select();
  }
}
var Uu = kb();
function kb() {
  let n = [];
  return {
    add(i) {
      const r = n[0];
      i !== r && (r == null || r.pause()), n = Hu(n, i), n.unshift(i);
    },
    remove(i) {
      var r;
      n = Hu(n, i), (r = n[0]) == null || r.resume();
    }
  };
}
function Hu(n, i) {
  const r = [...n], s = r.indexOf(i);
  return s !== -1 && r.splice(s, 1), r;
}
function Fb(n) {
  return n.filter((i) => i.tagName !== "A");
}
var ht = globalThis != null && globalThis.document ? m.useLayoutEffect : () => {
}, Wb = m.useId || (() => {
}), jb = 0;
function Mi(n) {
  const [i, r] = m.useState(Wb());
  return ht(() => {
    r((s) => s ?? String(jb++));
  }, [n]), i ? `radix-${i}` : "";
}
const Bb = ["top", "right", "bottom", "left"], Dn = Math.min, At = Math.max, Ri = Math.round, pi = Math.floor, Qt = (n) => ({
  x: n,
  y: n
}), $b = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Ub = {
  start: "end",
  end: "start"
};
function Pa(n, i, r) {
  return At(n, Dn(i, r));
}
function vn(n, i) {
  return typeof n == "function" ? n(i) : n;
}
function xn(n) {
  return n.split("-")[0];
}
function Pr(n) {
  return n.split("-")[1];
}
function Ha(n) {
  return n === "x" ? "y" : "x";
}
function za(n) {
  return n === "y" ? "height" : "width";
}
function kn(n) {
  return ["top", "bottom"].includes(xn(n)) ? "y" : "x";
}
function Va(n) {
  return Ha(kn(n));
}
function Hb(n, i, r) {
  r === void 0 && (r = !1);
  const s = Pr(n), l = Va(n), u = za(l);
  let f = l === "x" ? s === (r ? "end" : "start") ? "right" : "left" : s === "start" ? "bottom" : "top";
  return i.reference[u] > i.floating[u] && (f = Ai(f)), [f, Ai(f)];
}
function zb(n) {
  const i = Ai(n);
  return [Oa(n), i, Oa(i)];
}
function Oa(n) {
  return n.replace(/start|end/g, (i) => Ub[i]);
}
function Vb(n, i, r) {
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
function Gb(n, i, r, s) {
  const l = Pr(n);
  let u = Vb(xn(n), r === "start", s);
  return l && (u = u.map((f) => f + "-" + l), i && (u = u.concat(u.map(Oa)))), u;
}
function Ai(n) {
  return n.replace(/left|right|bottom|top/g, (i) => $b[i]);
}
function Kb(n) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...n
  };
}
function Rf(n) {
  return typeof n != "number" ? Kb(n) : {
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
function zu(n, i, r) {
  let {
    reference: s,
    floating: l
  } = n;
  const u = kn(i), f = Va(i), d = za(f), g = xn(i), v = u === "y", y = s.x + s.width / 2 - l.width / 2, b = s.y + s.height / 2 - l.height / 2, E = s[d] / 2 - l[d] / 2;
  let R;
  switch (g) {
    case "top":
      R = {
        x: y,
        y: s.y - l.height
      };
      break;
    case "bottom":
      R = {
        x: y,
        y: s.y + s.height
      };
      break;
    case "right":
      R = {
        x: s.x + s.width,
        y: b
      };
      break;
    case "left":
      R = {
        x: s.x - l.width,
        y: b
      };
      break;
    default:
      R = {
        x: s.x,
        y: s.y
      };
  }
  switch (Pr(i)) {
    case "start":
      R[f] -= E * (r && v ? -1 : 1);
      break;
    case "end":
      R[f] += E * (r && v ? -1 : 1);
      break;
  }
  return R;
}
const Yb = async (n, i, r) => {
  const {
    placement: s = "bottom",
    strategy: l = "absolute",
    middleware: u = [],
    platform: f
  } = r, d = u.filter(Boolean), g = await (f.isRTL == null ? void 0 : f.isRTL(i));
  let v = await f.getElementRects({
    reference: n,
    floating: i,
    strategy: l
  }), {
    x: y,
    y: b
  } = zu(v, s, g), E = s, R = {}, O = 0;
  for (let w = 0; w < d.length; w++) {
    const {
      name: A,
      fn: I
    } = d[w], {
      x: N,
      y: M,
      data: j,
      reset: $
    } = await I({
      x: y,
      y: b,
      initialPlacement: s,
      placement: E,
      strategy: l,
      middlewareData: R,
      rects: v,
      platform: f,
      elements: {
        reference: n,
        floating: i
      }
    });
    y = N ?? y, b = M ?? b, R = {
      ...R,
      [A]: {
        ...R[A],
        ...j
      }
    }, $ && O <= 50 && (O++, typeof $ == "object" && ($.placement && (E = $.placement), $.rects && (v = $.rects === !0 ? await f.getElementRects({
      reference: n,
      floating: i,
      strategy: l
    }) : $.rects), {
      x: y,
      y: b
    } = zu(v, E, g)), w = -1);
  }
  return {
    x: y,
    y: b,
    placement: E,
    strategy: l,
    middlewareData: R
  };
};
async function po(n, i) {
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
    boundary: v = "clippingAncestors",
    rootBoundary: y = "viewport",
    elementContext: b = "floating",
    altBoundary: E = !1,
    padding: R = 0
  } = vn(i, n), O = Rf(R), A = d[E ? b === "floating" ? "reference" : "floating" : b], I = Ti(await u.getClippingRect({
    element: (r = await (u.isElement == null ? void 0 : u.isElement(A))) == null || r ? A : A.contextElement || await (u.getDocumentElement == null ? void 0 : u.getDocumentElement(d.floating)),
    boundary: v,
    rootBoundary: y,
    strategy: g
  })), N = b === "floating" ? {
    x: s,
    y: l,
    width: f.floating.width,
    height: f.floating.height
  } : f.reference, M = await (u.getOffsetParent == null ? void 0 : u.getOffsetParent(d.floating)), j = await (u.isElement == null ? void 0 : u.isElement(M)) ? await (u.getScale == null ? void 0 : u.getScale(M)) || {
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
    top: (I.top - $.top + O.top) / j.y,
    bottom: ($.bottom - I.bottom + O.bottom) / j.y,
    left: (I.left - $.left + O.left) / j.x,
    right: ($.right - I.right + O.right) / j.x
  };
}
const qb = (n) => ({
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
      element: v,
      padding: y = 0
    } = vn(n, i) || {};
    if (v == null)
      return {};
    const b = Rf(y), E = {
      x: r,
      y: s
    }, R = Va(l), O = za(R), w = await f.getDimensions(v), A = R === "y", I = A ? "top" : "left", N = A ? "bottom" : "right", M = A ? "clientHeight" : "clientWidth", j = u.reference[O] + u.reference[R] - E[R] - u.floating[O], $ = E[R] - u.reference[R], G = await (f.getOffsetParent == null ? void 0 : f.getOffsetParent(v));
    let U = G ? G[M] : 0;
    (!U || !await (f.isElement == null ? void 0 : f.isElement(G))) && (U = d.floating[M] || u.floating[O]);
    const ee = j / 2 - $ / 2, ue = U / 2 - w[O] / 2 - 1, he = Dn(b[I], ue), Ce = Dn(b[N], ue), q = he, re = U - w[O] - Ce, ne = U / 2 - w[O] / 2 + ee, Se = Pa(q, ne, re), oe = !g.arrow && Pr(l) != null && ne !== Se && u.reference[O] / 2 - (ne < q ? he : Ce) - w[O] / 2 < 0, se = oe ? ne < q ? ne - q : ne - re : 0;
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
}), Xb = function(n) {
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
        elements: v
      } = i, {
        mainAxis: y = !0,
        crossAxis: b = !0,
        fallbackPlacements: E,
        fallbackStrategy: R = "bestFit",
        fallbackAxisSideDirection: O = "none",
        flipAlignment: w = !0,
        ...A
      } = vn(n, i);
      if ((r = u.arrow) != null && r.alignmentOffset)
        return {};
      const I = xn(l), N = kn(d), M = xn(d) === d, j = await (g.isRTL == null ? void 0 : g.isRTL(v.floating)), $ = E || (M || !w ? [Ai(d)] : zb(d)), G = O !== "none";
      !E && G && $.push(...Gb(d, w, O, j));
      const U = [d, ...$], ee = await po(i, A), ue = [];
      let he = ((s = u.flip) == null ? void 0 : s.overflows) || [];
      if (y && ue.push(ee[I]), b) {
        const ne = Hb(l, f, j);
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
                  const me = kn(Y.placement);
                  return me === N || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  me === "y";
                }
                return !0;
              }).map((Y) => [Y.placement, Y.overflows.filter((me) => me > 0).reduce((me, ke) => me + ke, 0)]).sort((Y, me) => Y[1] - me[1])[0]) == null ? void 0 : re[0];
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
function Vu(n, i) {
  return {
    top: n.top - i.height,
    right: n.right - i.width,
    bottom: n.bottom - i.height,
    left: n.left - i.width
  };
}
function Gu(n) {
  return Bb.some((i) => n[i] >= 0);
}
const Zb = function(n) {
  return n === void 0 && (n = {}), {
    name: "hide",
    options: n,
    async fn(i) {
      const {
        rects: r
      } = i, {
        strategy: s = "referenceHidden",
        ...l
      } = vn(n, i);
      switch (s) {
        case "referenceHidden": {
          const u = await po(i, {
            ...l,
            elementContext: "reference"
          }), f = Vu(u, r.reference);
          return {
            data: {
              referenceHiddenOffsets: f,
              referenceHidden: Gu(f)
            }
          };
        }
        case "escaped": {
          const u = await po(i, {
            ...l,
            altBoundary: !0
          }), f = Vu(u, r.floating);
          return {
            data: {
              escapedOffsets: f,
              escaped: Gu(f)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function Jb(n, i) {
  const {
    placement: r,
    platform: s,
    elements: l
  } = n, u = await (s.isRTL == null ? void 0 : s.isRTL(l.floating)), f = xn(r), d = Pr(r), g = kn(r) === "y", v = ["left", "top"].includes(f) ? -1 : 1, y = u && g ? -1 : 1, b = vn(i, n);
  let {
    mainAxis: E,
    crossAxis: R,
    alignmentAxis: O
  } = typeof b == "number" ? {
    mainAxis: b,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: b.mainAxis || 0,
    crossAxis: b.crossAxis || 0,
    alignmentAxis: b.alignmentAxis
  };
  return d && typeof O == "number" && (R = d === "end" ? O * -1 : O), g ? {
    x: R * y,
    y: E * v
  } : {
    x: E * v,
    y: R * y
  };
}
const Qb = function(n) {
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
      } = i, g = await Jb(i, n);
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
}, e0 = function(n) {
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
      } = vn(n, i), v = {
        x: r,
        y: s
      }, y = await po(i, g), b = kn(xn(l)), E = Ha(b);
      let R = v[E], O = v[b];
      if (u) {
        const A = E === "y" ? "top" : "left", I = E === "y" ? "bottom" : "right", N = R + y[A], M = R - y[I];
        R = Pa(N, R, M);
      }
      if (f) {
        const A = b === "y" ? "top" : "left", I = b === "y" ? "bottom" : "right", N = O + y[A], M = O - y[I];
        O = Pa(N, O, M);
      }
      const w = d.fn({
        ...i,
        [E]: R,
        [b]: O
      });
      return {
        ...w,
        data: {
          x: w.x - r,
          y: w.y - s,
          enabled: {
            [E]: u,
            [b]: f
          }
        }
      };
    }
  };
}, t0 = function(n) {
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
        crossAxis: v = !0
      } = vn(n, i), y = {
        x: r,
        y: s
      }, b = kn(l), E = Ha(b);
      let R = y[E], O = y[b];
      const w = vn(d, i), A = typeof w == "number" ? {
        mainAxis: w,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...w
      };
      if (g) {
        const M = E === "y" ? "height" : "width", j = u.reference[E] - u.floating[M] + A.mainAxis, $ = u.reference[E] + u.reference[M] - A.mainAxis;
        R < j ? R = j : R > $ && (R = $);
      }
      if (v) {
        var I, N;
        const M = E === "y" ? "width" : "height", j = ["top", "left"].includes(xn(l)), $ = u.reference[b] - u.floating[M] + (j && ((I = f.offset) == null ? void 0 : I[b]) || 0) + (j ? 0 : A.crossAxis), G = u.reference[b] + u.reference[M] + (j ? 0 : ((N = f.offset) == null ? void 0 : N[b]) || 0) - (j ? A.crossAxis : 0);
        O < $ ? O = $ : O > G && (O = G);
      }
      return {
        [E]: R,
        [b]: O
      };
    }
  };
}, n0 = function(n) {
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
        ...v
      } = vn(n, i), y = await po(i, v), b = xn(l), E = Pr(l), R = kn(l) === "y", {
        width: O,
        height: w
      } = u.floating;
      let A, I;
      b === "top" || b === "bottom" ? (A = b, I = E === (await (f.isRTL == null ? void 0 : f.isRTL(d.floating)) ? "start" : "end") ? "left" : "right") : (I = b, A = E === "end" ? "top" : "bottom");
      const N = w - y.top - y.bottom, M = O - y.left - y.right, j = Dn(w - y[A], N), $ = Dn(O - y[I], M), G = !i.middlewareData.shift;
      let U = j, ee = $;
      if ((r = i.middlewareData.shift) != null && r.enabled.x && (ee = M), (s = i.middlewareData.shift) != null && s.enabled.y && (U = N), G && !E) {
        const he = At(y.left, 0), Ce = At(y.right, 0), q = At(y.top, 0), re = At(y.bottom, 0);
        R ? ee = O - 2 * (he !== 0 || Ce !== 0 ? he + Ce : At(y.left, y.right)) : U = w - 2 * (q !== 0 || re !== 0 ? q + re : At(y.top, y.bottom));
      }
      await g({
        ...i,
        availableWidth: ee,
        availableHeight: U
      });
      const ue = await f.getDimensions(d.floating);
      return O !== ue.width || w !== ue.height ? {
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
function Or(n) {
  return Af(n) ? (n.nodeName || "").toLowerCase() : "#document";
}
function Tt(n) {
  var i;
  return (n == null || (i = n.ownerDocument) == null ? void 0 : i.defaultView) || window;
}
function tn(n) {
  var i;
  return (i = (Af(n) ? n.ownerDocument : n.document) || window.document) == null ? void 0 : i.documentElement;
}
function Af(n) {
  return Di() ? n instanceof Node || n instanceof Tt(n).Node : !1;
}
function Gt(n) {
  return Di() ? n instanceof Element || n instanceof Tt(n).Element : !1;
}
function en(n) {
  return Di() ? n instanceof HTMLElement || n instanceof Tt(n).HTMLElement : !1;
}
function Ku(n) {
  return !Di() || typeof ShadowRoot > "u" ? !1 : n instanceof ShadowRoot || n instanceof Tt(n).ShadowRoot;
}
function mo(n) {
  const {
    overflow: i,
    overflowX: r,
    overflowY: s,
    display: l
  } = Kt(n);
  return /auto|scroll|overlay|hidden|clip/.test(i + s + r) && !["inline", "contents"].includes(l);
}
function r0(n) {
  return ["table", "td", "th"].includes(Or(n));
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
function Ga(n) {
  const i = Ka(), r = Gt(n) ? Kt(n) : n;
  return r.transform !== "none" || r.perspective !== "none" || (r.containerType ? r.containerType !== "normal" : !1) || !i && (r.backdropFilter ? r.backdropFilter !== "none" : !1) || !i && (r.filter ? r.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((s) => (r.willChange || "").includes(s)) || ["paint", "layout", "strict", "content"].some((s) => (r.contain || "").includes(s));
}
function o0(n) {
  let i = Fn(n);
  for (; en(i) && !Rr(i); ) {
    if (Ga(i))
      return i;
    if (ki(i))
      return null;
    i = Fn(i);
  }
  return null;
}
function Ka() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Rr(n) {
  return ["html", "body", "#document"].includes(Or(n));
}
function Kt(n) {
  return Tt(n).getComputedStyle(n);
}
function Fi(n) {
  return Gt(n) ? {
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
    Ku(n) && n.host || // Fallback.
    tn(n)
  );
  return Ku(i) ? i.host : i;
}
function Tf(n) {
  const i = Fn(n);
  return Rr(i) ? n.ownerDocument ? n.ownerDocument.body : n.body : en(i) && mo(i) ? i : Tf(i);
}
function ho(n, i, r) {
  var s;
  i === void 0 && (i = []), r === void 0 && (r = !0);
  const l = Tf(n), u = l === ((s = n.ownerDocument) == null ? void 0 : s.body), f = Tt(l);
  if (u) {
    const d = Na(f);
    return i.concat(f, f.visualViewport || [], mo(l) ? l : [], d && r ? ho(d) : []);
  }
  return i.concat(l, ho(l, [], r));
}
function Na(n) {
  return n.parent && Object.getPrototypeOf(n.parent) ? n.frameElement : null;
}
function Pf(n) {
  const i = Kt(n);
  let r = parseFloat(i.width) || 0, s = parseFloat(i.height) || 0;
  const l = en(n), u = l ? n.offsetWidth : r, f = l ? n.offsetHeight : s, d = Ri(r) !== u || Ri(s) !== f;
  return d && (r = u, s = f), {
    width: r,
    height: s,
    $: d
  };
}
function Ya(n) {
  return Gt(n) ? n : n.contextElement;
}
function Cr(n) {
  const i = Ya(n);
  if (!en(i))
    return Qt(1);
  const r = i.getBoundingClientRect(), {
    width: s,
    height: l,
    $: u
  } = Pf(i);
  let f = (u ? Ri(r.width) : r.width) / s, d = (u ? Ri(r.height) : r.height) / l;
  return (!f || !Number.isFinite(f)) && (f = 1), (!d || !Number.isFinite(d)) && (d = 1), {
    x: f,
    y: d
  };
}
const i0 = /* @__PURE__ */ Qt(0);
function Of(n) {
  const i = Tt(n);
  return !Ka() || !i.visualViewport ? i0 : {
    x: i.visualViewport.offsetLeft,
    y: i.visualViewport.offsetTop
  };
}
function s0(n, i, r) {
  return i === void 0 && (i = !1), !r || i && r !== Tt(n) ? !1 : i;
}
function Jn(n, i, r, s) {
  i === void 0 && (i = !1), r === void 0 && (r = !1);
  const l = n.getBoundingClientRect(), u = Ya(n);
  let f = Qt(1);
  i && (s ? Gt(s) && (f = Cr(s)) : f = Cr(n));
  const d = s0(u, r, s) ? Of(u) : Qt(0);
  let g = (l.left + d.x) / f.x, v = (l.top + d.y) / f.y, y = l.width / f.x, b = l.height / f.y;
  if (u) {
    const E = Tt(u), R = s && Gt(s) ? Tt(s) : s;
    let O = E, w = Na(O);
    for (; w && s && R !== O; ) {
      const A = Cr(w), I = w.getBoundingClientRect(), N = Kt(w), M = I.left + (w.clientLeft + parseFloat(N.paddingLeft)) * A.x, j = I.top + (w.clientTop + parseFloat(N.paddingTop)) * A.y;
      g *= A.x, v *= A.y, y *= A.x, b *= A.y, g += M, v += j, O = Tt(w), w = Na(O);
    }
  }
  return Ti({
    width: y,
    height: b,
    x: g,
    y: v
  });
}
function qa(n, i) {
  const r = Fi(n).scrollLeft;
  return i ? i.left + r : Jn(tn(n)).left + r;
}
function Nf(n, i, r) {
  r === void 0 && (r = !1);
  const s = n.getBoundingClientRect(), l = s.left + i.scrollLeft - (r ? 0 : (
    // RTL <body> scrollbar.
    qa(n, s)
  )), u = s.top + i.scrollTop;
  return {
    x: l,
    y: u
  };
}
function a0(n) {
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
  }, v = Qt(1);
  const y = Qt(0), b = en(s);
  if ((b || !b && !u) && ((Or(s) !== "body" || mo(f)) && (g = Fi(s)), en(s))) {
    const R = Jn(s);
    v = Cr(s), y.x = R.x + s.clientLeft, y.y = R.y + s.clientTop;
  }
  const E = f && !b && !u ? Nf(f, g, !0) : Qt(0);
  return {
    width: r.width * v.x,
    height: r.height * v.y,
    x: r.x * v.x - g.scrollLeft * v.x + y.x + E.x,
    y: r.y * v.y - g.scrollTop * v.y + y.y + E.y
  };
}
function l0(n) {
  return Array.from(n.getClientRects());
}
function c0(n) {
  const i = tn(n), r = Fi(n), s = n.ownerDocument.body, l = At(i.scrollWidth, i.clientWidth, s.scrollWidth, s.clientWidth), u = At(i.scrollHeight, i.clientHeight, s.scrollHeight, s.clientHeight);
  let f = -r.scrollLeft + qa(n);
  const d = -r.scrollTop;
  return Kt(s).direction === "rtl" && (f += At(i.clientWidth, s.clientWidth) - l), {
    width: l,
    height: u,
    x: f,
    y: d
  };
}
function u0(n, i) {
  const r = Tt(n), s = tn(n), l = r.visualViewport;
  let u = s.clientWidth, f = s.clientHeight, d = 0, g = 0;
  if (l) {
    u = l.width, f = l.height;
    const v = Ka();
    (!v || v && i === "fixed") && (d = l.offsetLeft, g = l.offsetTop);
  }
  return {
    width: u,
    height: f,
    x: d,
    y: g
  };
}
function f0(n, i) {
  const r = Jn(n, !0, i === "fixed"), s = r.top + n.clientTop, l = r.left + n.clientLeft, u = en(n) ? Cr(n) : Qt(1), f = n.clientWidth * u.x, d = n.clientHeight * u.y, g = l * u.x, v = s * u.y;
  return {
    width: f,
    height: d,
    x: g,
    y: v
  };
}
function Yu(n, i, r) {
  let s;
  if (i === "viewport")
    s = u0(n, r);
  else if (i === "document")
    s = c0(tn(n));
  else if (Gt(i))
    s = f0(i, r);
  else {
    const l = Of(n);
    s = {
      x: i.x - l.x,
      y: i.y - l.y,
      width: i.width,
      height: i.height
    };
  }
  return Ti(s);
}
function If(n, i) {
  const r = Fn(n);
  return r === i || !Gt(r) || Rr(r) ? !1 : Kt(r).position === "fixed" || If(r, i);
}
function d0(n, i) {
  const r = i.get(n);
  if (r)
    return r;
  let s = ho(n, [], !1).filter((d) => Gt(d) && Or(d) !== "body"), l = null;
  const u = Kt(n).position === "fixed";
  let f = u ? Fn(n) : n;
  for (; Gt(f) && !Rr(f); ) {
    const d = Kt(f), g = Ga(f);
    !g && d.position === "fixed" && (l = null), (u ? !g && !l : !g && d.position === "static" && !!l && ["absolute", "fixed"].includes(l.position) || mo(f) && !g && If(n, f)) ? s = s.filter((y) => y !== f) : l = d, f = Fn(f);
  }
  return i.set(n, s), s;
}
function p0(n) {
  let {
    element: i,
    boundary: r,
    rootBoundary: s,
    strategy: l
  } = n;
  const f = [...r === "clippingAncestors" ? ki(i) ? [] : d0(i, this._c) : [].concat(r), s], d = f[0], g = f.reduce((v, y) => {
    const b = Yu(i, y, l);
    return v.top = At(b.top, v.top), v.right = Dn(b.right, v.right), v.bottom = Dn(b.bottom, v.bottom), v.left = At(b.left, v.left), v;
  }, Yu(i, d, l));
  return {
    width: g.right - g.left,
    height: g.bottom - g.top,
    x: g.left,
    y: g.top
  };
}
function h0(n) {
  const {
    width: i,
    height: r
  } = Pf(n);
  return {
    width: i,
    height: r
  };
}
function g0(n, i, r) {
  const s = en(i), l = tn(i), u = r === "fixed", f = Jn(n, !0, u, i);
  let d = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const g = Qt(0);
  if (s || !s && !u)
    if ((Or(i) !== "body" || mo(l)) && (d = Fi(i)), s) {
      const E = Jn(i, !0, u, i);
      g.x = E.x + i.clientLeft, g.y = E.y + i.clientTop;
    } else
      l && (g.x = qa(l));
  const v = l && !s && !u ? Nf(l, d) : Qt(0), y = f.left + d.scrollLeft - g.x - v.x, b = f.top + d.scrollTop - g.y - v.y;
  return {
    x: y,
    y: b,
    width: f.width,
    height: f.height
  };
}
function va(n) {
  return Kt(n).position === "static";
}
function qu(n, i) {
  if (!en(n) || Kt(n).position === "fixed")
    return null;
  if (i)
    return i(n);
  let r = n.offsetParent;
  return tn(n) === r && (r = r.ownerDocument.body), r;
}
function Lf(n, i) {
  const r = Tt(n);
  if (ki(n))
    return r;
  if (!en(n)) {
    let l = Fn(n);
    for (; l && !Rr(l); ) {
      if (Gt(l) && !va(l))
        return l;
      l = Fn(l);
    }
    return r;
  }
  let s = qu(n, i);
  for (; s && r0(s) && va(s); )
    s = qu(s, i);
  return s && Rr(s) && va(s) && !Ga(s) ? r : s || o0(n) || r;
}
const m0 = async function(n) {
  const i = this.getOffsetParent || Lf, r = this.getDimensions, s = await r(n.floating);
  return {
    reference: g0(n.reference, await i(n.floating), n.strategy),
    floating: {
      x: 0,
      y: 0,
      width: s.width,
      height: s.height
    }
  };
};
function v0(n) {
  return Kt(n).direction === "rtl";
}
const x0 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: a0,
  getDocumentElement: tn,
  getClippingRect: p0,
  getOffsetParent: Lf,
  getElementRects: m0,
  getClientRects: l0,
  getDimensions: h0,
  getScale: Cr,
  isElement: Gt,
  isRTL: v0
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
      left: v,
      top: y,
      width: b,
      height: E
    } = n.getBoundingClientRect();
    if (d || i(), !b || !E)
      return;
    const R = pi(y), O = pi(l.clientWidth - (v + b)), w = pi(l.clientHeight - (y + E)), A = pi(v), N = {
      rootMargin: -R + "px " + -O + "px " + -w + "px " + -A + "px",
      threshold: At(0, Dn(1, g)) || 1
    };
    let M = !0;
    function j($) {
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
      r = new IntersectionObserver(j, {
        ...N,
        // Handle <iframe>s
        root: l.ownerDocument
      });
    } catch {
      r = new IntersectionObserver(j, N);
    }
    r.observe(n);
  }
  return f(!0), u;
}
function w0(n, i, r, s) {
  s === void 0 && (s = {});
  const {
    ancestorScroll: l = !0,
    ancestorResize: u = !0,
    elementResize: f = typeof ResizeObserver == "function",
    layoutShift: d = typeof IntersectionObserver == "function",
    animationFrame: g = !1
  } = s, v = Ya(n), y = l || u ? [...v ? ho(v) : [], ...ho(i)] : [];
  y.forEach((I) => {
    l && I.addEventListener("scroll", r, {
      passive: !0
    }), u && I.addEventListener("resize", r);
  });
  const b = v && d ? y0(v, r) : null;
  let E = -1, R = null;
  f && (R = new ResizeObserver((I) => {
    let [N] = I;
    N && N.target === v && R && (R.unobserve(i), cancelAnimationFrame(E), E = requestAnimationFrame(() => {
      var M;
      (M = R) == null || M.observe(i);
    })), r();
  }), v && !g && R.observe(v), R.observe(i));
  let O, w = g ? Jn(n) : null;
  g && A();
  function A() {
    const I = Jn(n);
    w && (I.x !== w.x || I.y !== w.y || I.width !== w.width || I.height !== w.height) && r(), w = I, O = requestAnimationFrame(A);
  }
  return r(), () => {
    var I;
    y.forEach((N) => {
      l && N.removeEventListener("scroll", r), u && N.removeEventListener("resize", r);
    }), b == null || b(), (I = R) == null || I.disconnect(), R = null, g && cancelAnimationFrame(O);
  };
}
const b0 = Qb, _0 = e0, C0 = Xb, S0 = n0, E0 = Zb, Xu = qb, R0 = t0, A0 = (n, i, r) => {
  const s = /* @__PURE__ */ new Map(), l = {
    platform: x0,
    ...r
  }, u = {
    ...l.platform,
    _c: s
  };
  return Yb(n, i, {
    ...l,
    platform: u
  });
};
var yi = typeof document < "u" ? uw : af;
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
function Mf(n) {
  return typeof window > "u" ? 1 : (n.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Zu(n, i) {
  const r = Mf(n);
  return Math.round(i * r) / r;
}
function xa(n) {
  const i = m.useRef(n);
  return yi(() => {
    i.current = n;
  }), i;
}
function T0(n) {
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
    open: v
  } = n, [y, b] = m.useState({
    x: 0,
    y: 0,
    strategy: r,
    placement: i,
    middlewareData: {},
    isPositioned: !1
  }), [E, R] = m.useState(s);
  Pi(E, s) || R(s);
  const [O, w] = m.useState(null), [A, I] = m.useState(null), N = m.useCallback((Y) => {
    Y !== G.current && (G.current = Y, w(Y));
  }, []), M = m.useCallback((Y) => {
    Y !== U.current && (U.current = Y, I(Y));
  }, []), j = u || O, $ = f || A, G = m.useRef(null), U = m.useRef(null), ee = m.useRef(y), ue = g != null, he = xa(g), Ce = xa(l), q = xa(v), re = m.useCallback(() => {
    if (!G.current || !U.current)
      return;
    const Y = {
      placement: i,
      strategy: r,
      middleware: E
    };
    Ce.current && (Y.platform = Ce.current), A0(G.current, U.current, Y).then((me) => {
      const ke = {
        ...me,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: q.current !== !1
      };
      ne.current && !Pi(ee.current, ke) && (ee.current = ke, Li.flushSync(() => {
        b(ke);
      }));
    });
  }, [E, i, r, Ce, q]);
  yi(() => {
    v === !1 && ee.current.isPositioned && (ee.current.isPositioned = !1, b((Y) => ({
      ...Y,
      isPositioned: !1
    })));
  }, [v]);
  const ne = m.useRef(!1);
  yi(() => (ne.current = !0, () => {
    ne.current = !1;
  }), []), yi(() => {
    if (j && (G.current = j), $ && (U.current = $), j && $) {
      if (he.current)
        return he.current(j, $, re);
      re();
    }
  }, [j, $, re, he, ue]);
  const Se = m.useMemo(() => ({
    reference: G,
    floating: U,
    setReference: N,
    setFloating: M
  }), [N, M]), oe = m.useMemo(() => ({
    reference: j,
    floating: $
  }), [j, $]), se = m.useMemo(() => {
    const Y = {
      position: r,
      left: 0,
      top: 0
    };
    if (!oe.floating)
      return Y;
    const me = Zu(oe.floating, y.x), ke = Zu(oe.floating, y.y);
    return d ? {
      ...Y,
      transform: "translate(" + me + "px, " + ke + "px)",
      ...Mf(oe.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: r,
      left: me,
      top: ke
    };
  }, [r, d, oe.floating, y.x, y.y]);
  return m.useMemo(() => ({
    ...y,
    update: re,
    refs: Se,
    elements: oe,
    floatingStyles: se
  }), [y, re, Se, oe, se]);
}
const P0 = (n) => {
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
      return s && i(s) ? s.current != null ? Xu({
        element: s.current,
        padding: l
      }).fn(r) : {} : s ? Xu({
        element: s,
        padding: l
      }).fn(r) : {};
    }
  };
}, O0 = (n, i) => ({
  ...b0(n),
  options: [n, i]
}), N0 = (n, i) => ({
  ..._0(n),
  options: [n, i]
}), I0 = (n, i) => ({
  ...R0(n),
  options: [n, i]
}), L0 = (n, i) => ({
  ...C0(n),
  options: [n, i]
}), M0 = (n, i) => ({
  ...S0(n),
  options: [n, i]
}), D0 = (n, i) => ({
  ...E0(n),
  options: [n, i]
}), k0 = (n, i) => ({
  ...P0(n),
  options: [n, i]
});
var F0 = "Arrow", Df = m.forwardRef((n, i) => {
  const { children: r, width: s = 10, height: l = 5, ...u } = n;
  return /* @__PURE__ */ C.jsx(
    He.svg,
    {
      ...u,
      ref: i,
      width: s,
      height: l,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: n.asChild ? r : /* @__PURE__ */ C.jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
Df.displayName = F0;
var W0 = Df;
function j0(n, i = []) {
  let r = [];
  function s(u, f) {
    const d = m.createContext(f), g = r.length;
    r = [...r, f];
    function v(b) {
      const { scope: E, children: R, ...O } = b, w = (E == null ? void 0 : E[n][g]) || d, A = m.useMemo(() => O, Object.values(O));
      return /* @__PURE__ */ C.jsx(w.Provider, { value: A, children: R });
    }
    function y(b, E) {
      const R = (E == null ? void 0 : E[n][g]) || d, O = m.useContext(R);
      if (O)
        return O;
      if (f !== void 0)
        return f;
      throw new Error(`\`${b}\` must be used within \`${u}\``);
    }
    return v.displayName = u + "Provider", [v, y];
  }
  const l = () => {
    const u = r.map((f) => m.createContext(f));
    return function(d) {
      const g = (d == null ? void 0 : d[n]) || u;
      return m.useMemo(
        () => ({ [`__scope${n}`]: { ...d, [n]: g } }),
        [d, g]
      );
    };
  };
  return l.scopeName = n, [s, B0(l, ...i)];
}
function B0(...n) {
  const i = n[0];
  if (n.length === 1)
    return i;
  const r = () => {
    const s = n.map((l) => ({
      useScope: l(),
      scopeName: l.scopeName
    }));
    return function(u) {
      const f = s.reduce((d, { useScope: g, scopeName: v }) => {
        const b = g(u)[`__scope${v}`];
        return { ...d, ...b };
      }, {});
      return m.useMemo(() => ({ [`__scope${i.scopeName}`]: f }), [f]);
    };
  };
  return r.scopeName = i.scopeName, r;
}
function $0(n) {
  const [i, r] = m.useState(void 0);
  return ht(() => {
    if (n) {
      r({ width: n.offsetWidth, height: n.offsetHeight });
      const s = new ResizeObserver((l) => {
        if (!Array.isArray(l) || !l.length)
          return;
        const u = l[0];
        let f, d;
        if ("borderBoxSize" in u) {
          const g = u.borderBoxSize, v = Array.isArray(g) ? g[0] : g;
          f = v.inlineSize, d = v.blockSize;
        } else
          f = n.offsetWidth, d = n.offsetHeight;
        r({ width: f, height: d });
      });
      return s.observe(n, { box: "border-box" }), () => s.unobserve(n);
    } else
      r(void 0);
  }, [n]), i;
}
var Xa = "Popper", [kf, Wi] = j0(Xa), [U0, Ff] = kf(Xa), Wf = (n) => {
  const { __scopePopper: i, children: r } = n, [s, l] = m.useState(null);
  return /* @__PURE__ */ C.jsx(U0, { scope: i, anchor: s, onAnchorChange: l, children: r });
};
Wf.displayName = Xa;
var jf = "PopperAnchor", Bf = m.forwardRef(
  (n, i) => {
    const { __scopePopper: r, virtualRef: s, ...l } = n, u = Ff(jf, r), f = m.useRef(null), d = Ye(i, f);
    return m.useEffect(() => {
      u.onAnchorChange((s == null ? void 0 : s.current) || f.current);
    }), s ? null : /* @__PURE__ */ C.jsx(He.div, { ...l, ref: d });
  }
);
Bf.displayName = jf;
var Za = "PopperContent", [H0, z0] = kf(Za), $f = m.forwardRef(
  (n, i) => {
    var Z, ve, Le, Re, be, xe;
    const {
      __scopePopper: r,
      side: s = "bottom",
      sideOffset: l = 0,
      align: u = "center",
      alignOffset: f = 0,
      arrowPadding: d = 0,
      avoidCollisions: g = !0,
      collisionBoundary: v = [],
      collisionPadding: y = 0,
      sticky: b = "partial",
      hideWhenDetached: E = !1,
      updatePositionStrategy: R = "optimized",
      onPlaced: O,
      ...w
    } = n, A = Ff(Za, r), [I, N] = m.useState(null), M = Ye(i, (Ze) => N(Ze)), [j, $] = m.useState(null), G = $0(j), U = (G == null ? void 0 : G.width) ?? 0, ee = (G == null ? void 0 : G.height) ?? 0, ue = s + (u !== "center" ? "-" + u : ""), he = typeof y == "number" ? y : { top: 0, right: 0, bottom: 0, left: 0, ...y }, Ce = Array.isArray(v) ? v : [v], q = Ce.length > 0, re = {
      padding: he,
      boundary: Ce.filter(G0),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: q
    }, { refs: ne, floatingStyles: Se, placement: oe, isPositioned: se, middlewareData: Y } = T0({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: ue,
      whileElementsMounted: (...Ze) => w0(...Ze, {
        animationFrame: R === "always"
      }),
      elements: {
        reference: A.anchor
      },
      middleware: [
        O0({ mainAxis: l + ee, alignmentAxis: f }),
        g && N0({
          mainAxis: !0,
          crossAxis: !1,
          limiter: b === "partial" ? I0() : void 0,
          ...re
        }),
        g && L0({ ...re }),
        M0({
          ...re,
          apply: ({ elements: Ze, rects: je, availableWidth: st, availableHeight: yt }) => {
            const { width: Je, height: Bn } = je.reference, jt = Ze.floating.style;
            jt.setProperty("--radix-popper-available-width", `${st}px`), jt.setProperty("--radix-popper-available-height", `${yt}px`), jt.setProperty("--radix-popper-anchor-width", `${Je}px`), jt.setProperty("--radix-popper-anchor-height", `${Bn}px`);
          }
        }),
        j && k0({ element: j, padding: d }),
        K0({ arrowWidth: U, arrowHeight: ee }),
        E && D0({ strategy: "referenceHidden", ...re })
      ]
    }), [me, ke] = zf(oe), Ee = mn(O);
    ht(() => {
      se && (Ee == null || Ee());
    }, [se, Ee]);
    const Yt = (Z = Y.arrow) == null ? void 0 : Z.x, qt = (ve = Y.arrow) == null ? void 0 : ve.y, Pt = ((Le = Y.arrow) == null ? void 0 : Le.centerOffset) !== 0, [ut, it] = m.useState();
    return ht(() => {
      I && it(window.getComputedStyle(I).zIndex);
    }, [I]), /* @__PURE__ */ C.jsx(
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
        children: /* @__PURE__ */ C.jsx(
          H0,
          {
            scope: r,
            placedSide: me,
            onArrowChange: $,
            arrowX: Yt,
            arrowY: qt,
            shouldHideArrow: Pt,
            children: /* @__PURE__ */ C.jsx(
              He.div,
              {
                "data-side": me,
                "data-align": ke,
                ...w,
                ref: M,
                style: {
                  ...w.style,
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
$f.displayName = Za;
var Uf = "PopperArrow", V0 = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, Hf = m.forwardRef(function(i, r) {
  const { __scopePopper: s, ...l } = i, u = z0(Uf, s), f = V0[u.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ C.jsx(
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
        children: /* @__PURE__ */ C.jsx(
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
Hf.displayName = Uf;
function G0(n) {
  return n !== null;
}
var K0 = (n) => ({
  name: "transformOrigin",
  options: n,
  fn(i) {
    var A, I, N;
    const { placement: r, rects: s, middlewareData: l } = i, f = ((A = l.arrow) == null ? void 0 : A.centerOffset) !== 0, d = f ? 0 : n.arrowWidth, g = f ? 0 : n.arrowHeight, [v, y] = zf(r), b = { start: "0%", center: "50%", end: "100%" }[y], E = (((I = l.arrow) == null ? void 0 : I.x) ?? 0) + d / 2, R = (((N = l.arrow) == null ? void 0 : N.y) ?? 0) + g / 2;
    let O = "", w = "";
    return v === "bottom" ? (O = f ? b : `${E}px`, w = `${-g}px`) : v === "top" ? (O = f ? b : `${E}px`, w = `${s.floating.height + g}px`) : v === "right" ? (O = `${-g}px`, w = f ? b : `${R}px`) : v === "left" && (O = `${s.floating.width + g}px`, w = f ? b : `${R}px`), { data: { x: O, y: w } };
  }
});
function zf(n) {
  const [i, r = "center"] = n.split("-");
  return [i, r];
}
var Vf = Wf, Gf = Bf, Kf = $f, Yf = Hf, Y0 = "Portal", qf = m.forwardRef((n, i) => {
  var d;
  const { container: r, ...s } = n, [l, u] = m.useState(!1);
  ht(() => u(!0), []);
  const f = r || l && ((d = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : d.body);
  return f ? fw.createPortal(/* @__PURE__ */ C.jsx(He.div, { ...s, ref: i }), f) : null;
});
qf.displayName = Y0;
function Ia({
  prop: n,
  defaultProp: i,
  onChange: r = () => {
  }
}) {
  const [s, l] = q0({ defaultProp: i, onChange: r }), u = n !== void 0, f = u ? n : s, d = mn(r), g = m.useCallback(
    (v) => {
      if (u) {
        const b = typeof v == "function" ? v(n) : v;
        b !== n && d(b);
      } else
        l(v);
    },
    [u, n, l, d]
  );
  return [f, g];
}
function q0({
  defaultProp: n,
  onChange: i
}) {
  const r = m.useState(n), [s] = r, l = m.useRef(s), u = mn(i);
  return m.useEffect(() => {
    l.current !== s && (u(s), l.current = s);
  }, [s, l, u]), r;
}
function X0(n) {
  const i = m.useRef({ value: n, previous: n });
  return m.useMemo(() => (i.current.value !== n && (i.current.previous = i.current.value, i.current.value = n), i.current.previous), [n]);
}
var Z0 = "VisuallyHidden", Ja = m.forwardRef(
  (n, i) => /* @__PURE__ */ C.jsx(
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
Ja.displayName = Z0;
var J0 = Ja, Q0 = function(n) {
  if (typeof document > "u")
    return null;
  var i = Array.isArray(n) ? n[0] : n;
  return i.ownerDocument.body;
}, yr = /* @__PURE__ */ new WeakMap(), hi = /* @__PURE__ */ new WeakMap(), gi = {}, ya = 0, Xf = function(n) {
  return n && (n.host || Xf(n.parentNode));
}, e_ = function(n, i) {
  return i.map(function(r) {
    if (n.contains(r))
      return r;
    var s = Xf(r);
    return s && n.contains(s) ? s : (console.error("aria-hidden", r, "in not contained inside", n, ". Doing nothing"), null);
  }).filter(function(r) {
    return !!r;
  });
}, t_ = function(n, i, r, s) {
  var l = e_(i, Array.isArray(n) ? n : [n]);
  gi[r] || (gi[r] = /* @__PURE__ */ new WeakMap());
  var u = gi[r], f = [], d = /* @__PURE__ */ new Set(), g = new Set(l), v = function(b) {
    !b || d.has(b) || (d.add(b), v(b.parentNode));
  };
  l.forEach(v);
  var y = function(b) {
    !b || g.has(b) || Array.prototype.forEach.call(b.children, function(E) {
      if (d.has(E))
        y(E);
      else
        try {
          var R = E.getAttribute(s), O = R !== null && R !== "false", w = (yr.get(E) || 0) + 1, A = (u.get(E) || 0) + 1;
          yr.set(E, w), u.set(E, A), f.push(E), w === 1 && O && hi.set(E, !0), A === 1 && E.setAttribute(r, "true"), O || E.setAttribute(s, "true");
        } catch (I) {
          console.error("aria-hidden: cannot operate on ", E, I);
        }
    });
  };
  return y(i), d.clear(), ya++, function() {
    f.forEach(function(b) {
      var E = yr.get(b) - 1, R = u.get(b) - 1;
      yr.set(b, E), u.set(b, R), E || (hi.has(b) || b.removeAttribute(s), hi.delete(b)), R || b.removeAttribute(r);
    }), ya--, ya || (yr = /* @__PURE__ */ new WeakMap(), yr = /* @__PURE__ */ new WeakMap(), hi = /* @__PURE__ */ new WeakMap(), gi = {});
  };
}, n_ = function(n, i, r) {
  r === void 0 && (r = "data-aria-hidden");
  var s = Array.from(Array.isArray(n) ? n : [n]), l = Q0(n);
  return l ? (s.push.apply(s, Array.from(l.querySelectorAll("[aria-live]"))), t_(s, l, r, "aria-hidden")) : function() {
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
function r_(n, i) {
  var r = {};
  for (var s in n)
    Object.prototype.hasOwnProperty.call(n, s) && i.indexOf(s) < 0 && (r[s] = n[s]);
  if (n != null && typeof Object.getOwnPropertySymbols == "function")
    for (var l = 0, s = Object.getOwnPropertySymbols(n); l < s.length; l++)
      i.indexOf(s[l]) < 0 && Object.prototype.propertyIsEnumerable.call(n, s[l]) && (r[s[l]] = n[s[l]]);
  return r;
}
function o_(n, i, r) {
  if (r || arguments.length === 2)
    for (var s = 0, l = i.length, u; s < l; s++)
      (u || !(s in i)) && (u || (u = Array.prototype.slice.call(i, 0, s)), u[s] = i[s]);
  return n.concat(u || Array.prototype.slice.call(i));
}
var wi = "right-scroll-bar-position", bi = "width-before-scroll-bar", i_ = "with-scroll-bars-hidden", s_ = "--removed-body-scroll-bar-size";
function wa(n, i) {
  return typeof n == "function" ? n(i) : n && (n.current = i), n;
}
function a_(n, i) {
  var r = sf(function() {
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
var l_ = typeof window < "u" ? m.useLayoutEffect : m.useEffect, Ju = /* @__PURE__ */ new WeakMap();
function c_(n, i) {
  var r = a_(null, function(s) {
    return n.forEach(function(l) {
      return wa(l, s);
    });
  });
  return l_(function() {
    var s = Ju.get(r);
    if (s) {
      var l = new Set(s), u = new Set(n), f = r.current;
      l.forEach(function(d) {
        u.has(d) || wa(d, null);
      }), u.forEach(function(d) {
        l.has(d) || wa(d, f);
      });
    }
    Ju.set(r, n);
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
function u_(n, i) {
  var r = {};
  for (var s in n)
    Object.prototype.hasOwnProperty.call(n, s) && i.indexOf(s) < 0 && (r[s] = n[s]);
  if (n != null && typeof Object.getOwnPropertySymbols == "function")
    for (var l = 0, s = Object.getOwnPropertySymbols(n); l < s.length; l++)
      i.indexOf(s[l]) < 0 && Object.prototype.propertyIsEnumerable.call(n, s[l]) && (r[s[l]] = n[s[l]]);
  return r;
}
function f_(n) {
  return n;
}
function d_(n, i) {
  i === void 0 && (i = f_);
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
        var y = f;
        f = [], y.forEach(u);
      }, v = function() {
        return Promise.resolve().then(g);
      };
      v(), r = {
        push: function(y) {
          f.push(y), v();
        },
        filter: function(y) {
          return f = f.filter(y), r;
        }
      };
    }
  };
  return l;
}
function p_(n) {
  n === void 0 && (n = {});
  var i = d_(null);
  return i.options = Oi({ async: !0, ssr: !1 }, n), i;
}
var Zf = function(n) {
  var i = n.sideCar, r = u_(n, ["sideCar"]);
  if (!i)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var s = i.read();
  if (!s)
    throw new Error("Sidecar medium not found");
  return m.createElement(s, Oi({}, r));
};
Zf.isSideCarExport = !0;
function h_(n, i) {
  return n.useMedium(i), Zf;
}
var Jf = p_(), ba = function() {
}, ji = m.forwardRef(function(n, i) {
  var r = m.useRef(null), s = m.useState({
    onScrollCapture: ba,
    onWheelCapture: ba,
    onTouchMoveCapture: ba
  }), l = s[0], u = s[1], f = n.forwardProps, d = n.children, g = n.className, v = n.removeScrollBar, y = n.enabled, b = n.shards, E = n.sideCar, R = n.noIsolation, O = n.inert, w = n.allowPinchZoom, A = n.as, I = A === void 0 ? "div" : A, N = n.gapMode, M = r_(n, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), j = E, $ = c_([r, i]), G = Mn(Mn({}, M), l);
  return m.createElement(
    m.Fragment,
    null,
    y && m.createElement(j, { sideCar: Jf, removeScrollBar: v, shards: b, noIsolation: R, inert: O, setCallbacks: u, allowPinchZoom: !!w, lockRef: r, gapMode: N }),
    f ? m.cloneElement(m.Children.only(d), Mn(Mn({}, G), { ref: $ })) : m.createElement(I, Mn({}, G, { className: g, ref: $ }), d)
  );
});
ji.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
ji.classNames = {
  fullWidth: bi,
  zeroRight: wi
};
var g_ = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function m_() {
  if (!document)
    return null;
  var n = document.createElement("style");
  n.type = "text/css";
  var i = g_();
  return i && n.setAttribute("nonce", i), n;
}
function v_(n, i) {
  n.styleSheet ? n.styleSheet.cssText = i : n.appendChild(document.createTextNode(i));
}
function x_(n) {
  var i = document.head || document.getElementsByTagName("head")[0];
  i.appendChild(n);
}
var y_ = function() {
  var n = 0, i = null;
  return {
    add: function(r) {
      n == 0 && (i = m_()) && (v_(i, r), x_(i)), n++;
    },
    remove: function() {
      n--, !n && i && (i.parentNode && i.parentNode.removeChild(i), i = null);
    }
  };
}, w_ = function() {
  var n = y_();
  return function(i, r) {
    m.useEffect(function() {
      return n.add(i), function() {
        n.remove();
      };
    }, [i && r]);
  };
}, Qf = function() {
  var n = w_(), i = function(r) {
    var s = r.styles, l = r.dynamic;
    return n(s, l), null;
  };
  return i;
}, b_ = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, _a = function(n) {
  return parseInt(n || "", 10) || 0;
}, __ = function(n) {
  var i = window.getComputedStyle(document.body), r = i[n === "padding" ? "paddingLeft" : "marginLeft"], s = i[n === "padding" ? "paddingTop" : "marginTop"], l = i[n === "padding" ? "paddingRight" : "marginRight"];
  return [_a(r), _a(s), _a(l)];
}, C_ = function(n) {
  if (n === void 0 && (n = "margin"), typeof window > "u")
    return b_;
  var i = __(n), r = document.documentElement.clientWidth, s = window.innerWidth;
  return {
    left: i[0],
    top: i[1],
    right: i[2],
    gap: Math.max(0, s - r + i[2] - i[0])
  };
}, S_ = Qf(), Sr = "data-scroll-locked", E_ = function(n, i, r, s) {
  var l = n.left, u = n.top, f = n.right, d = n.gap;
  return r === void 0 && (r = "margin"), `
  .`.concat(i_, ` {
   overflow: hidden `).concat(s, `;
   padding-right: `).concat(d, "px ").concat(s, `;
  }
  body[`).concat(Sr, `] {
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
  
  .`).concat(wi, ` {
    right: `).concat(d, "px ").concat(s, `;
  }
  
  .`).concat(bi, ` {
    margin-right: `).concat(d, "px ").concat(s, `;
  }
  
  .`).concat(wi, " .").concat(wi, ` {
    right: 0 `).concat(s, `;
  }
  
  .`).concat(bi, " .").concat(bi, ` {
    margin-right: 0 `).concat(s, `;
  }
  
  body[`).concat(Sr, `] {
    `).concat(s_, ": ").concat(d, `px;
  }
`);
}, Qu = function() {
  var n = parseInt(document.body.getAttribute(Sr) || "0", 10);
  return isFinite(n) ? n : 0;
}, R_ = function() {
  m.useEffect(function() {
    return document.body.setAttribute(Sr, (Qu() + 1).toString()), function() {
      var n = Qu() - 1;
      n <= 0 ? document.body.removeAttribute(Sr) : document.body.setAttribute(Sr, n.toString());
    };
  }, []);
}, A_ = function(n) {
  var i = n.noRelative, r = n.noImportant, s = n.gapMode, l = s === void 0 ? "margin" : s;
  R_();
  var u = m.useMemo(function() {
    return C_(l);
  }, [l]);
  return m.createElement(S_, { styles: E_(u, !i, l, r ? "" : "!important") });
}, La = !1;
if (typeof window < "u")
  try {
    var mi = Object.defineProperty({}, "passive", {
      get: function() {
        return La = !0, !0;
      }
    });
    window.addEventListener("test", mi, mi), window.removeEventListener("test", mi, mi);
  } catch {
    La = !1;
  }
var wr = La ? { passive: !1 } : !1, T_ = function(n) {
  return n.tagName === "TEXTAREA";
}, ed = function(n, i) {
  if (!(n instanceof Element))
    return !1;
  var r = window.getComputedStyle(n);
  return (
    // not-not-scrollable
    r[i] !== "hidden" && // contains scroll inside self
    !(r.overflowY === r.overflowX && !T_(n) && r[i] === "visible")
  );
}, P_ = function(n) {
  return ed(n, "overflowY");
}, O_ = function(n) {
  return ed(n, "overflowX");
}, ef = function(n, i) {
  var r = i.ownerDocument, s = i;
  do {
    typeof ShadowRoot < "u" && s instanceof ShadowRoot && (s = s.host);
    var l = td(n, s);
    if (l) {
      var u = nd(n, s), f = u[1], d = u[2];
      if (f > d)
        return !0;
    }
    s = s.parentNode;
  } while (s && s !== r.body);
  return !1;
}, N_ = function(n) {
  var i = n.scrollTop, r = n.scrollHeight, s = n.clientHeight;
  return [
    i,
    r,
    s
  ];
}, I_ = function(n) {
  var i = n.scrollLeft, r = n.scrollWidth, s = n.clientWidth;
  return [
    i,
    r,
    s
  ];
}, td = function(n, i) {
  return n === "v" ? P_(i) : O_(i);
}, nd = function(n, i) {
  return n === "v" ? N_(i) : I_(i);
}, L_ = function(n, i) {
  return n === "h" && i === "rtl" ? -1 : 1;
}, M_ = function(n, i, r, s, l) {
  var u = L_(n, window.getComputedStyle(i).direction), f = u * s, d = r.target, g = i.contains(d), v = !1, y = f > 0, b = 0, E = 0;
  do {
    var R = nd(n, d), O = R[0], w = R[1], A = R[2], I = w - A - u * O;
    (O || I) && td(n, d) && (b += I, E += O), d instanceof ShadowRoot ? d = d.host : d = d.parentNode;
  } while (
    // portaled content
    !g && d !== document.body || // self content
    g && (i.contains(d) || i === d)
  );
  return (y && (Math.abs(b) < 1 || !l) || !y && (Math.abs(E) < 1 || !l)) && (v = !0), v;
}, vi = function(n) {
  return "changedTouches" in n ? [n.changedTouches[0].clientX, n.changedTouches[0].clientY] : [0, 0];
}, tf = function(n) {
  return [n.deltaX, n.deltaY];
}, nf = function(n) {
  return n && "current" in n ? n.current : n;
}, D_ = function(n, i) {
  return n[0] === i[0] && n[1] === i[1];
}, k_ = function(n) {
  return `
  .block-interactivity-`.concat(n, ` {pointer-events: none;}
  .allow-interactivity-`).concat(n, ` {pointer-events: all;}
`);
}, F_ = 0, br = [];
function W_(n) {
  var i = m.useRef([]), r = m.useRef([0, 0]), s = m.useRef(), l = m.useState(F_++)[0], u = m.useState(Qf)[0], f = m.useRef(n);
  m.useEffect(function() {
    f.current = n;
  }, [n]), m.useEffect(function() {
    if (n.inert) {
      document.body.classList.add("block-interactivity-".concat(l));
      var w = o_([n.lockRef.current], (n.shards || []).map(nf), !0).filter(Boolean);
      return w.forEach(function(A) {
        return A.classList.add("allow-interactivity-".concat(l));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(l)), w.forEach(function(A) {
          return A.classList.remove("allow-interactivity-".concat(l));
        });
      };
    }
  }, [n.inert, n.lockRef.current, n.shards]);
  var d = m.useCallback(function(w, A) {
    if ("touches" in w && w.touches.length === 2 || w.type === "wheel" && w.ctrlKey)
      return !f.current.allowPinchZoom;
    var I = vi(w), N = r.current, M = "deltaX" in w ? w.deltaX : N[0] - I[0], j = "deltaY" in w ? w.deltaY : N[1] - I[1], $, G = w.target, U = Math.abs(M) > Math.abs(j) ? "h" : "v";
    if ("touches" in w && U === "h" && G.type === "range")
      return !1;
    var ee = ef(U, G);
    if (!ee)
      return !0;
    if (ee ? $ = U : ($ = U === "v" ? "h" : "v", ee = ef(U, G)), !ee)
      return !1;
    if (!s.current && "changedTouches" in w && (M || j) && (s.current = $), !$)
      return !0;
    var ue = s.current || $;
    return M_(ue, A, w, ue === "h" ? M : j, !0);
  }, []), g = m.useCallback(function(w) {
    var A = w;
    if (!(!br.length || br[br.length - 1] !== u)) {
      var I = "deltaY" in A ? tf(A) : vi(A), N = i.current.filter(function($) {
        return $.name === A.type && ($.target === A.target || A.target === $.shadowParent) && D_($.delta, I);
      })[0];
      if (N && N.should) {
        A.cancelable && A.preventDefault();
        return;
      }
      if (!N) {
        var M = (f.current.shards || []).map(nf).filter(Boolean).filter(function($) {
          return $.contains(A.target);
        }), j = M.length > 0 ? d(A, M[0]) : !f.current.noIsolation;
        j && A.cancelable && A.preventDefault();
      }
    }
  }, []), v = m.useCallback(function(w, A, I, N) {
    var M = { name: w, delta: A, target: I, should: N, shadowParent: j_(I) };
    i.current.push(M), setTimeout(function() {
      i.current = i.current.filter(function(j) {
        return j !== M;
      });
    }, 1);
  }, []), y = m.useCallback(function(w) {
    r.current = vi(w), s.current = void 0;
  }, []), b = m.useCallback(function(w) {
    v(w.type, tf(w), w.target, d(w, n.lockRef.current));
  }, []), E = m.useCallback(function(w) {
    v(w.type, vi(w), w.target, d(w, n.lockRef.current));
  }, []);
  m.useEffect(function() {
    return br.push(u), n.setCallbacks({
      onScrollCapture: b,
      onWheelCapture: b,
      onTouchMoveCapture: E
    }), document.addEventListener("wheel", g, wr), document.addEventListener("touchmove", g, wr), document.addEventListener("touchstart", y, wr), function() {
      br = br.filter(function(w) {
        return w !== u;
      }), document.removeEventListener("wheel", g, wr), document.removeEventListener("touchmove", g, wr), document.removeEventListener("touchstart", y, wr);
    };
  }, []);
  var R = n.removeScrollBar, O = n.inert;
  return m.createElement(
    m.Fragment,
    null,
    O ? m.createElement(u, { styles: k_(l) }) : null,
    R ? m.createElement(A_, { gapMode: n.gapMode }) : null
  );
}
function j_(n) {
  for (var i = null; n !== null; )
    n instanceof ShadowRoot && (i = n.host, n = n.host), n = n.parentNode;
  return i;
}
const B_ = h_(Jf, W_);
var rd = m.forwardRef(function(n, i) {
  return m.createElement(ji, Mn({}, n, { ref: i, sideCar: B_ }));
});
rd.classNames = ji.classNames;
var $_ = [" ", "Enter", "ArrowUp", "ArrowDown"], U_ = [" ", "Enter"], vo = "Select", [Bi, $i, H_] = mb(vo), [Nr, t1] = bf(vo, [
  H_,
  Wi
]), Ui = Wi(), [z_, Wn] = Nr(vo), [V_, G_] = Nr(vo), od = (n) => {
  const {
    __scopeSelect: i,
    children: r,
    open: s,
    defaultOpen: l,
    onOpenChange: u,
    value: f,
    defaultValue: d,
    onValueChange: g,
    dir: v,
    name: y,
    autoComplete: b,
    disabled: E,
    required: R,
    form: O
  } = n, w = Ui(i), [A, I] = m.useState(null), [N, M] = m.useState(null), [j, $] = m.useState(!1), G = yb(v), [U = !1, ee] = Ia({
    prop: s,
    defaultProp: l,
    onChange: u
  }), [ue, he] = Ia({
    prop: f,
    defaultProp: d,
    onChange: g
  }), Ce = m.useRef(null), q = A ? O || !!A.closest("form") : !0, [re, ne] = m.useState(/* @__PURE__ */ new Set()), Se = Array.from(re).map((oe) => oe.props.value).join(";");
  return /* @__PURE__ */ C.jsx(Vf, { ...w, children: /* @__PURE__ */ C.jsxs(
    z_,
    {
      required: R,
      scope: i,
      trigger: A,
      onTriggerChange: I,
      valueNode: N,
      onValueNodeChange: M,
      valueNodeHasChildren: j,
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
        /* @__PURE__ */ C.jsx(Bi.Provider, { scope: i, children: /* @__PURE__ */ C.jsx(
          V_,
          {
            scope: n.__scopeSelect,
            onNativeOptionAdd: m.useCallback((oe) => {
              ne((se) => new Set(se).add(oe));
            }, []),
            onNativeOptionRemove: m.useCallback((oe) => {
              ne((se) => {
                const Y = new Set(se);
                return Y.delete(oe), Y;
              });
            }, []),
            children: r
          }
        ) }),
        q ? /* @__PURE__ */ C.jsxs(
          Pd,
          {
            "aria-hidden": !0,
            required: R,
            tabIndex: -1,
            name: y,
            autoComplete: b,
            value: ue,
            onChange: (oe) => he(oe.target.value),
            disabled: E,
            form: O,
            children: [
              ue === void 0 ? /* @__PURE__ */ C.jsx("option", { value: "" }) : null,
              Array.from(re)
            ]
          },
          Se
        ) : null
      ]
    }
  ) });
};
od.displayName = vo;
var id = "SelectTrigger", sd = m.forwardRef(
  (n, i) => {
    const { __scopeSelect: r, disabled: s = !1, ...l } = n, u = Ui(r), f = Wn(id, r), d = f.disabled || s, g = Ye(i, f.onTriggerChange), v = $i(r), y = m.useRef("touch"), [b, E, R] = Od((w) => {
      const A = v().filter((M) => !M.disabled), I = A.find((M) => M.value === f.value), N = Nd(A, w, I);
      N !== void 0 && f.onValueChange(N.value);
    }), O = (w) => {
      d || (f.onOpenChange(!0), R()), w && (f.triggerPointerDownPosRef.current = {
        x: Math.round(w.pageX),
        y: Math.round(w.pageY)
      });
    };
    return /* @__PURE__ */ C.jsx(Gf, { asChild: !0, ...u, children: /* @__PURE__ */ C.jsx(
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
        "data-placeholder": Td(f.value) ? "" : void 0,
        ...l,
        ref: g,
        onClick: De(l.onClick, (w) => {
          w.currentTarget.focus(), y.current !== "mouse" && O(w);
        }),
        onPointerDown: De(l.onPointerDown, (w) => {
          y.current = w.pointerType;
          const A = w.target;
          A.hasPointerCapture(w.pointerId) && A.releasePointerCapture(w.pointerId), w.button === 0 && w.ctrlKey === !1 && w.pointerType === "mouse" && (O(w), w.preventDefault());
        }),
        onKeyDown: De(l.onKeyDown, (w) => {
          const A = b.current !== "";
          !(w.ctrlKey || w.altKey || w.metaKey) && w.key.length === 1 && E(w.key), !(A && w.key === " ") && $_.includes(w.key) && (O(), w.preventDefault());
        })
      }
    ) });
  }
);
sd.displayName = id;
var ad = "SelectValue", ld = m.forwardRef(
  (n, i) => {
    const { __scopeSelect: r, className: s, style: l, children: u, placeholder: f = "", ...d } = n, g = Wn(ad, r), { onValueNodeHasChildrenChange: v } = g, y = u !== void 0, b = Ye(i, g.onValueNodeChange);
    return ht(() => {
      v(y);
    }, [v, y]), /* @__PURE__ */ C.jsx(
      He.span,
      {
        ...d,
        ref: b,
        style: { pointerEvents: "none" },
        children: Td(g.value) ? /* @__PURE__ */ C.jsx(C.Fragment, { children: f }) : u
      }
    );
  }
);
ld.displayName = ad;
var K_ = "SelectIcon", cd = m.forwardRef(
  (n, i) => {
    const { __scopeSelect: r, children: s, ...l } = n;
    return /* @__PURE__ */ C.jsx(He.span, { "aria-hidden": !0, ...l, ref: i, children: s || "▼" });
  }
);
cd.displayName = K_;
var Y_ = "SelectPortal", ud = (n) => /* @__PURE__ */ C.jsx(qf, { asChild: !0, ...n });
ud.displayName = Y_;
var Qn = "SelectContent", fd = m.forwardRef(
  (n, i) => {
    const r = Wn(Qn, n.__scopeSelect), [s, l] = m.useState();
    if (ht(() => {
      l(new DocumentFragment());
    }, []), !r.open) {
      const u = s;
      return u ? Li.createPortal(
        /* @__PURE__ */ C.jsx(dd, { scope: n.__scopeSelect, children: /* @__PURE__ */ C.jsx(Bi.Slot, { scope: n.__scopeSelect, children: /* @__PURE__ */ C.jsx("div", { children: n.children }) }) }),
        u
      ) : null;
    }
    return /* @__PURE__ */ C.jsx(pd, { ...n, ref: i });
  }
);
fd.displayName = Qn;
var Vt = 10, [dd, jn] = Nr(Qn), q_ = "SelectContentImpl", pd = m.forwardRef(
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
      align: v,
      alignOffset: y,
      arrowPadding: b,
      collisionBoundary: E,
      collisionPadding: R,
      sticky: O,
      hideWhenDetached: w,
      avoidCollisions: A,
      //
      ...I
    } = n, N = Wn(Qn, r), [M, j] = m.useState(null), [$, G] = m.useState(null), U = Ye(i, (Z) => j(Z)), [ee, ue] = m.useState(null), [he, Ce] = m.useState(
      null
    ), q = $i(r), [re, ne] = m.useState(!1), Se = m.useRef(!1);
    m.useEffect(() => {
      if (M)
        return n_(M);
    }, [M]), Ob();
    const oe = m.useCallback(
      (Z) => {
        const [ve, ...Le] = q().map((xe) => xe.ref.current), [Re] = Le.slice(-1), be = document.activeElement;
        for (const xe of Z)
          if (xe === be || (xe == null || xe.scrollIntoView({ block: "nearest" }), xe === ve && $ && ($.scrollTop = 0), xe === Re && $ && ($.scrollTop = $.scrollHeight), xe == null || xe.focus(), document.activeElement !== be))
            return;
      },
      [q, $]
    ), se = m.useCallback(
      () => oe([ee, M]),
      [oe, ee, M]
    );
    m.useEffect(() => {
      re && se();
    }, [re, se]);
    const { onOpenChange: Y, triggerPointerDownPosRef: me } = N;
    m.useEffect(() => {
      if (M) {
        let Z = { x: 0, y: 0 };
        const ve = (Re) => {
          var be, xe;
          Z = {
            x: Math.abs(Math.round(Re.pageX) - (((be = me.current) == null ? void 0 : be.x) ?? 0)),
            y: Math.abs(Math.round(Re.pageY) - (((xe = me.current) == null ? void 0 : xe.y) ?? 0))
          };
        }, Le = (Re) => {
          Z.x <= 10 && Z.y <= 10 ? Re.preventDefault() : M.contains(Re.target) || Y(!1), document.removeEventListener("pointermove", ve), me.current = null;
        };
        return me.current !== null && (document.addEventListener("pointermove", ve), document.addEventListener("pointerup", Le, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", ve), document.removeEventListener("pointerup", Le, { capture: !0 });
        };
      }
    }, [M, Y, me]), m.useEffect(() => {
      const Z = () => Y(!1);
      return window.addEventListener("blur", Z), window.addEventListener("resize", Z), () => {
        window.removeEventListener("blur", Z), window.removeEventListener("resize", Z);
      };
    }, [Y]);
    const [ke, Ee] = Od((Z) => {
      const ve = q().filter((be) => !be.disabled), Le = ve.find((be) => be.ref.current === document.activeElement), Re = Nd(ve, Z, Le);
      Re && setTimeout(() => Re.ref.current.focus());
    }), Yt = m.useCallback(
      (Z, ve, Le) => {
        const Re = !Se.current && !Le;
        (N.value !== void 0 && N.value === ve || Re) && (ue(Z), Re && (Se.current = !0));
      },
      [N.value]
    ), qt = m.useCallback(() => M == null ? void 0 : M.focus(), [M]), Pt = m.useCallback(
      (Z, ve, Le) => {
        const Re = !Se.current && !Le;
        (N.value !== void 0 && N.value === ve || Re) && Ce(Z);
      },
      [N.value]
    ), ut = s === "popper" ? Ma : hd, it = ut === Ma ? {
      side: d,
      sideOffset: g,
      align: v,
      alignOffset: y,
      arrowPadding: b,
      collisionBoundary: E,
      collisionPadding: R,
      sticky: O,
      hideWhenDetached: w,
      avoidCollisions: A
    } : {};
    return /* @__PURE__ */ C.jsx(
      dd,
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
        children: /* @__PURE__ */ C.jsx(rd, { as: Er, allowPinchZoom: !0, children: /* @__PURE__ */ C.jsx(
          Sf,
          {
            asChild: !0,
            trapped: N.open,
            onMountAutoFocus: (Z) => {
              Z.preventDefault();
            },
            onUnmountAutoFocus: De(l, (Z) => {
              var ve;
              (ve = N.trigger) == null || ve.focus({ preventScroll: !0 }), Z.preventDefault();
            }),
            children: /* @__PURE__ */ C.jsx(
              Ua,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: u,
                onPointerDownOutside: f,
                onFocusOutside: (Z) => Z.preventDefault(),
                onDismiss: () => N.onOpenChange(!1),
                children: /* @__PURE__ */ C.jsx(
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
                      const ve = Z.ctrlKey || Z.altKey || Z.metaKey;
                      if (Z.key === "Tab" && Z.preventDefault(), !ve && Z.key.length === 1 && Ee(Z.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(Z.key)) {
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
pd.displayName = q_;
var X_ = "SelectItemAlignedPosition", hd = m.forwardRef((n, i) => {
  const { __scopeSelect: r, onPlaced: s, ...l } = n, u = Wn(Qn, r), f = jn(Qn, r), [d, g] = m.useState(null), [v, y] = m.useState(null), b = Ye(i, (U) => y(U)), E = $i(r), R = m.useRef(!1), O = m.useRef(!0), { viewport: w, selectedItem: A, selectedItemText: I, focusSelectedItem: N } = f, M = m.useCallback(() => {
    if (u.trigger && u.valueNode && d && v && w && A && I) {
      const U = u.trigger.getBoundingClientRect(), ee = v.getBoundingClientRect(), ue = u.valueNode.getBoundingClientRect(), he = I.getBoundingClientRect();
      if (u.dir !== "rtl") {
        const be = he.left - ee.left, xe = ue.left - be, Ze = U.left - xe, je = U.width + Ze, st = Math.max(je, ee.width), yt = window.innerWidth - Vt, Je = ku(xe, [
          Vt,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(Vt, yt - st)
        ]);
        d.style.minWidth = je + "px", d.style.left = Je + "px";
      } else {
        const be = ee.right - he.right, xe = window.innerWidth - ue.right - be, Ze = window.innerWidth - U.right - xe, je = U.width + Ze, st = Math.max(je, ee.width), yt = window.innerWidth - Vt, Je = ku(xe, [
          Vt,
          Math.max(Vt, yt - st)
        ]);
        d.style.minWidth = je + "px", d.style.right = Je + "px";
      }
      const Ce = E(), q = window.innerHeight - Vt * 2, re = w.scrollHeight, ne = window.getComputedStyle(v), Se = parseInt(ne.borderTopWidth, 10), oe = parseInt(ne.paddingTop, 10), se = parseInt(ne.borderBottomWidth, 10), Y = parseInt(ne.paddingBottom, 10), me = Se + oe + re + Y + se, ke = Math.min(A.offsetHeight * 5, me), Ee = window.getComputedStyle(w), Yt = parseInt(Ee.paddingTop, 10), qt = parseInt(Ee.paddingBottom, 10), Pt = U.top + U.height / 2 - Vt, ut = q - Pt, it = A.offsetHeight / 2, Z = A.offsetTop + it, ve = Se + oe + Z, Le = me - ve;
      if (ve <= Pt) {
        const be = Ce.length > 0 && A === Ce[Ce.length - 1].ref.current;
        d.style.bottom = "0px";
        const xe = v.clientHeight - w.offsetTop - w.offsetHeight, Ze = Math.max(
          ut,
          it + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (be ? qt : 0) + xe + se
        ), je = ve + Ze;
        d.style.height = je + "px";
      } else {
        const be = Ce.length > 0 && A === Ce[0].ref.current;
        d.style.top = "0px";
        const Ze = Math.max(
          Pt,
          Se + w.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (be ? Yt : 0) + it
        ) + Le;
        d.style.height = Ze + "px", w.scrollTop = ve - Pt + w.offsetTop;
      }
      d.style.margin = `${Vt}px 0`, d.style.minHeight = ke + "px", d.style.maxHeight = q + "px", s == null || s(), requestAnimationFrame(() => R.current = !0);
    }
  }, [
    E,
    u.trigger,
    u.valueNode,
    d,
    v,
    w,
    A,
    I,
    u.dir,
    s
  ]);
  ht(() => M(), [M]);
  const [j, $] = m.useState();
  ht(() => {
    v && $(window.getComputedStyle(v).zIndex);
  }, [v]);
  const G = m.useCallback(
    (U) => {
      U && O.current === !0 && (M(), N == null || N(), O.current = !1);
    },
    [M, N]
  );
  return /* @__PURE__ */ C.jsx(
    J_,
    {
      scope: r,
      contentWrapper: d,
      shouldExpandOnScrollRef: R,
      onScrollButtonChange: G,
      children: /* @__PURE__ */ C.jsx(
        "div",
        {
          ref: g,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: j
          },
          children: /* @__PURE__ */ C.jsx(
            He.div,
            {
              ...l,
              ref: b,
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
hd.displayName = X_;
var Z_ = "SelectPopperPosition", Ma = m.forwardRef((n, i) => {
  const {
    __scopeSelect: r,
    align: s = "start",
    collisionPadding: l = Vt,
    ...u
  } = n, f = Ui(r);
  return /* @__PURE__ */ C.jsx(
    Kf,
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
Ma.displayName = Z_;
var [J_, Qa] = Nr(Qn, {}), Da = "SelectViewport", gd = m.forwardRef(
  (n, i) => {
    const { __scopeSelect: r, nonce: s, ...l } = n, u = jn(Da, r), f = Qa(Da, r), d = Ye(i, u.onViewportChange), g = m.useRef(0);
    return /* @__PURE__ */ C.jsxs(C.Fragment, { children: [
      /* @__PURE__ */ C.jsx(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: s
        }
      ),
      /* @__PURE__ */ C.jsx(Bi.Slot, { scope: r, children: /* @__PURE__ */ C.jsx(
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
          onScroll: De(l.onScroll, (v) => {
            const y = v.currentTarget, { contentWrapper: b, shouldExpandOnScrollRef: E } = f;
            if (E != null && E.current && b) {
              const R = Math.abs(g.current - y.scrollTop);
              if (R > 0) {
                const O = window.innerHeight - Vt * 2, w = parseFloat(b.style.minHeight), A = parseFloat(b.style.height), I = Math.max(w, A);
                if (I < O) {
                  const N = I + R, M = Math.min(O, N), j = N - M;
                  b.style.height = M + "px", b.style.bottom === "0px" && (y.scrollTop = j > 0 ? j : 0, b.style.justifyContent = "flex-end");
                }
              }
            }
            g.current = y.scrollTop;
          })
        }
      ) })
    ] });
  }
);
gd.displayName = Da;
var md = "SelectGroup", [Q_, eC] = Nr(md), tC = m.forwardRef(
  (n, i) => {
    const { __scopeSelect: r, ...s } = n, l = Mi();
    return /* @__PURE__ */ C.jsx(Q_, { scope: r, id: l, children: /* @__PURE__ */ C.jsx(He.div, { role: "group", "aria-labelledby": l, ...s, ref: i }) });
  }
);
tC.displayName = md;
var vd = "SelectLabel", xd = m.forwardRef(
  (n, i) => {
    const { __scopeSelect: r, ...s } = n, l = eC(vd, r);
    return /* @__PURE__ */ C.jsx(He.div, { id: l.id, ...s, ref: i });
  }
);
xd.displayName = vd;
var Ni = "SelectItem", [nC, yd] = Nr(Ni), wd = m.forwardRef(
  (n, i) => {
    const {
      __scopeSelect: r,
      value: s,
      disabled: l = !1,
      textValue: u,
      ...f
    } = n, d = Wn(Ni, r), g = jn(Ni, r), v = d.value === s, [y, b] = m.useState(u ?? ""), [E, R] = m.useState(!1), O = Ye(
      i,
      (N) => {
        var M;
        return (M = g.itemRefCallback) == null ? void 0 : M.call(g, N, s, l);
      }
    ), w = Mi(), A = m.useRef("touch"), I = () => {
      l || (d.onValueChange(s), d.onOpenChange(!1));
    };
    if (s === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ C.jsx(
      nC,
      {
        scope: r,
        value: s,
        disabled: l,
        textId: w,
        isSelected: v,
        onItemTextChange: m.useCallback((N) => {
          b((M) => M || ((N == null ? void 0 : N.textContent) ?? "").trim());
        }, []),
        children: /* @__PURE__ */ C.jsx(
          Bi.ItemSlot,
          {
            scope: r,
            value: s,
            disabled: l,
            textValue: y,
            children: /* @__PURE__ */ C.jsx(
              He.div,
              {
                role: "option",
                "aria-labelledby": w,
                "data-highlighted": E ? "" : void 0,
                "aria-selected": v && E,
                "data-state": v ? "checked" : "unchecked",
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
                  var j;
                  ((j = g.searchRef) == null ? void 0 : j.current) !== "" && N.key === " " || (U_.includes(N.key) && I(), N.key === " " && N.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
wd.displayName = Ni;
var co = "SelectItemText", bd = m.forwardRef(
  (n, i) => {
    const { __scopeSelect: r, className: s, style: l, ...u } = n, f = Wn(co, r), d = jn(co, r), g = yd(co, r), v = G_(co, r), [y, b] = m.useState(null), E = Ye(
      i,
      (I) => b(I),
      g.onItemTextChange,
      (I) => {
        var N;
        return (N = d.itemTextRefCallback) == null ? void 0 : N.call(d, I, g.value, g.disabled);
      }
    ), R = y == null ? void 0 : y.textContent, O = m.useMemo(
      () => /* @__PURE__ */ C.jsx("option", { value: g.value, disabled: g.disabled, children: R }, g.value),
      [g.disabled, g.value, R]
    ), { onNativeOptionAdd: w, onNativeOptionRemove: A } = v;
    return ht(() => (w(O), () => A(O)), [w, A, O]), /* @__PURE__ */ C.jsxs(C.Fragment, { children: [
      /* @__PURE__ */ C.jsx(He.span, { id: g.textId, ...u, ref: E }),
      g.isSelected && f.valueNode && !f.valueNodeHasChildren ? Li.createPortal(u.children, f.valueNode) : null
    ] });
  }
);
bd.displayName = co;
var _d = "SelectItemIndicator", Cd = m.forwardRef(
  (n, i) => {
    const { __scopeSelect: r, ...s } = n;
    return yd(_d, r).isSelected ? /* @__PURE__ */ C.jsx(He.span, { "aria-hidden": !0, ...s, ref: i }) : null;
  }
);
Cd.displayName = _d;
var ka = "SelectScrollUpButton", Sd = m.forwardRef((n, i) => {
  const r = jn(ka, n.__scopeSelect), s = Qa(ka, n.__scopeSelect), [l, u] = m.useState(!1), f = Ye(i, s.onScrollButtonChange);
  return ht(() => {
    if (r.viewport && r.isPositioned) {
      let d = function() {
        const v = g.scrollTop > 0;
        u(v);
      };
      const g = r.viewport;
      return d(), g.addEventListener("scroll", d), () => g.removeEventListener("scroll", d);
    }
  }, [r.viewport, r.isPositioned]), l ? /* @__PURE__ */ C.jsx(
    Rd,
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
Sd.displayName = ka;
var Fa = "SelectScrollDownButton", Ed = m.forwardRef((n, i) => {
  const r = jn(Fa, n.__scopeSelect), s = Qa(Fa, n.__scopeSelect), [l, u] = m.useState(!1), f = Ye(i, s.onScrollButtonChange);
  return ht(() => {
    if (r.viewport && r.isPositioned) {
      let d = function() {
        const v = g.scrollHeight - g.clientHeight, y = Math.ceil(g.scrollTop) < v;
        u(y);
      };
      const g = r.viewport;
      return d(), g.addEventListener("scroll", d), () => g.removeEventListener("scroll", d);
    }
  }, [r.viewport, r.isPositioned]), l ? /* @__PURE__ */ C.jsx(
    Rd,
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
Ed.displayName = Fa;
var Rd = m.forwardRef((n, i) => {
  const { __scopeSelect: r, onAutoScroll: s, ...l } = n, u = jn("SelectScrollButton", r), f = m.useRef(null), d = $i(r), g = m.useCallback(() => {
    f.current !== null && (window.clearInterval(f.current), f.current = null);
  }, []);
  return m.useEffect(() => () => g(), [g]), ht(() => {
    var y;
    const v = d().find((b) => b.ref.current === document.activeElement);
    (y = v == null ? void 0 : v.ref.current) == null || y.scrollIntoView({ block: "nearest" });
  }, [d]), /* @__PURE__ */ C.jsx(
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
        var v;
        (v = u.onItemLeave) == null || v.call(u), f.current === null && (f.current = window.setInterval(s, 50));
      }),
      onPointerLeave: De(l.onPointerLeave, () => {
        g();
      })
    }
  );
}), rC = "SelectSeparator", Ad = m.forwardRef(
  (n, i) => {
    const { __scopeSelect: r, ...s } = n;
    return /* @__PURE__ */ C.jsx(He.div, { "aria-hidden": !0, ...s, ref: i });
  }
);
Ad.displayName = rC;
var Wa = "SelectArrow", oC = m.forwardRef(
  (n, i) => {
    const { __scopeSelect: r, ...s } = n, l = Ui(r), u = Wn(Wa, r), f = jn(Wa, r);
    return u.open && f.position === "popper" ? /* @__PURE__ */ C.jsx(Yf, { ...l, ...s, ref: i }) : null;
  }
);
oC.displayName = Wa;
function Td(n) {
  return n === "" || n === void 0;
}
var Pd = m.forwardRef(
  (n, i) => {
    const { value: r, ...s } = n, l = m.useRef(null), u = Ye(i, l), f = X0(r);
    return m.useEffect(() => {
      const d = l.current, g = window.HTMLSelectElement.prototype, y = Object.getOwnPropertyDescriptor(
        g,
        "value"
      ).set;
      if (f !== r && y) {
        const b = new Event("change", { bubbles: !0 });
        y.call(d, r), d.dispatchEvent(b);
      }
    }, [f, r]), /* @__PURE__ */ C.jsx(Ja, { asChild: !0, children: /* @__PURE__ */ C.jsx("select", { ...s, ref: u, defaultValue: r }) });
  }
);
Pd.displayName = "BubbleSelect";
function Od(n) {
  const i = mn(n), r = m.useRef(""), s = m.useRef(0), l = m.useCallback(
    (f) => {
      const d = r.current + f;
      i(d), function g(v) {
        r.current = v, window.clearTimeout(s.current), v !== "" && (s.current = window.setTimeout(() => g(""), 1e3));
      }(d);
    },
    [i]
  ), u = m.useCallback(() => {
    r.current = "", window.clearTimeout(s.current);
  }, []);
  return m.useEffect(() => () => window.clearTimeout(s.current), []), [r, l, u];
}
function Nd(n, i, r) {
  const l = i.length > 1 && Array.from(i).every((v) => v === i[0]) ? i[0] : i, u = r ? n.indexOf(r) : -1;
  let f = iC(n, Math.max(u, 0));
  l.length === 1 && (f = f.filter((v) => v !== r));
  const g = f.find(
    (v) => v.textValue.toLowerCase().startsWith(l.toLowerCase())
  );
  return g !== r ? g : void 0;
}
function iC(n, i) {
  return n.map((r, s) => n[(i + s) % n.length]);
}
var sC = od, Id = sd, aC = ld, lC = cd, cC = ud, Ld = fd, uC = gd, Md = xd, Dd = wd, fC = bd, dC = Cd, kd = Sd, Fd = Ed, Wd = Ad;
const pC = sC, hC = aC, jd = m.forwardRef(({ className: n, children: i, ...r }, s) => /* @__PURE__ */ C.jsxs(
  Id,
  {
    ref: s,
    className: et(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      n
    ),
    ...r,
    children: [
      i,
      /* @__PURE__ */ C.jsx(lC, { asChild: !0, children: /* @__PURE__ */ C.jsx(wf, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
jd.displayName = Id.displayName;
const Bd = m.forwardRef(({ className: n, ...i }, r) => /* @__PURE__ */ C.jsx(
  kd,
  {
    ref: r,
    className: et(
      "flex cursor-default items-center justify-center py-1",
      n
    ),
    ...i,
    children: /* @__PURE__ */ C.jsx(db, { className: "h-4 w-4" })
  }
));
Bd.displayName = kd.displayName;
const $d = m.forwardRef(({ className: n, ...i }, r) => /* @__PURE__ */ C.jsx(
  Fd,
  {
    ref: r,
    className: et(
      "flex cursor-default items-center justify-center py-1",
      n
    ),
    ...i,
    children: /* @__PURE__ */ C.jsx(wf, { className: "h-4 w-4" })
  }
));
$d.displayName = Fd.displayName;
const Ud = m.forwardRef(({ className: n, children: i, position: r = "popper", ...s }, l) => /* @__PURE__ */ C.jsx(cC, { children: /* @__PURE__ */ C.jsxs(
  Ld,
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
      /* @__PURE__ */ C.jsx(Bd, {}),
      /* @__PURE__ */ C.jsx(
        uC,
        {
          className: et(
            "p-1",
            r === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children: i
        }
      ),
      /* @__PURE__ */ C.jsx($d, {})
    ]
  }
) }));
Ud.displayName = Ld.displayName;
const gC = m.forwardRef(({ className: n, ...i }, r) => /* @__PURE__ */ C.jsx(
  Md,
  {
    ref: r,
    className: et("py-1.5 pl-8 pr-2 text-sm font-semibold", n),
    ...i
  }
));
gC.displayName = Md.displayName;
const Hd = m.forwardRef(({ className: n, children: i, ...r }, s) => /* @__PURE__ */ C.jsxs(
  Dd,
  {
    ref: s,
    className: et(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      n
    ),
    ...r,
    children: [
      /* @__PURE__ */ C.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ C.jsx(dC, { children: /* @__PURE__ */ C.jsx(fb, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ C.jsx(fC, { children: i })
    ]
  }
));
Hd.displayName = Dd.displayName;
const mC = m.forwardRef(({ className: n, ...i }, r) => /* @__PURE__ */ C.jsx(
  Wd,
  {
    ref: r,
    className: et("-mx-1 my-1 h-px bg-muted", n),
    ...i
  }
));
mC.displayName = Wd.displayName;
function vC(n, i) {
  return m.useReducer((r, s) => i[r][s] ?? r, n);
}
var zd = (n) => {
  const { present: i, children: r } = n, s = xC(i), l = typeof r == "function" ? r({ present: s.isPresent }) : m.Children.only(r), u = Ye(s.ref, yC(l));
  return typeof r == "function" || s.isPresent ? m.cloneElement(l, { ref: u }) : null;
};
zd.displayName = "Presence";
function xC(n) {
  const [i, r] = m.useState(), s = m.useRef({}), l = m.useRef(n), u = m.useRef("none"), f = n ? "mounted" : "unmounted", [d, g] = vC(f, {
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
  return m.useEffect(() => {
    const v = xi(s.current);
    u.current = d === "mounted" ? v : "none";
  }, [d]), ht(() => {
    const v = s.current, y = l.current;
    if (y !== n) {
      const E = u.current, R = xi(v);
      n ? g("MOUNT") : R === "none" || (v == null ? void 0 : v.display) === "none" ? g("UNMOUNT") : g(y && E !== R ? "ANIMATION_OUT" : "UNMOUNT"), l.current = n;
    }
  }, [n, g]), ht(() => {
    if (i) {
      let v;
      const y = i.ownerDocument.defaultView ?? window, b = (R) => {
        const w = xi(s.current).includes(R.animationName);
        if (R.target === i && w && (g("ANIMATION_END"), !l.current)) {
          const A = i.style.animationFillMode;
          i.style.animationFillMode = "forwards", v = y.setTimeout(() => {
            i.style.animationFillMode === "forwards" && (i.style.animationFillMode = A);
          });
        }
      }, E = (R) => {
        R.target === i && (u.current = xi(s.current));
      };
      return i.addEventListener("animationstart", E), i.addEventListener("animationcancel", b), i.addEventListener("animationend", b), () => {
        y.clearTimeout(v), i.removeEventListener("animationstart", E), i.removeEventListener("animationcancel", b), i.removeEventListener("animationend", b);
      };
    } else
      g("ANIMATION_END");
  }, [i, g]), {
    isPresent: ["mounted", "unmountSuspended"].includes(d),
    ref: m.useCallback((v) => {
      v && (s.current = getComputedStyle(v)), r(v);
    }, [])
  };
}
function xi(n) {
  return (n == null ? void 0 : n.animationName) || "none";
}
function yC(n) {
  var s, l;
  let i = (s = Object.getOwnPropertyDescriptor(n.props, "ref")) == null ? void 0 : s.get, r = i && "isReactWarning" in i && i.isReactWarning;
  return r ? n.ref : (i = (l = Object.getOwnPropertyDescriptor(n, "ref")) == null ? void 0 : l.get, r = i && "isReactWarning" in i && i.isReactWarning, r ? n.props.ref : n.props.ref || n.ref);
}
var [Hi, n1] = bf("Tooltip", [
  Wi
]), zi = Wi(), Vd = "TooltipProvider", wC = 700, ja = "tooltip.open", [bC, el] = Hi(Vd), Gd = (n) => {
  const {
    __scopeTooltip: i,
    delayDuration: r = wC,
    skipDelayDuration: s = 300,
    disableHoverableContent: l = !1,
    children: u
  } = n, [f, d] = m.useState(!0), g = m.useRef(!1), v = m.useRef(0);
  return m.useEffect(() => {
    const y = v.current;
    return () => window.clearTimeout(y);
  }, []), /* @__PURE__ */ C.jsx(
    bC,
    {
      scope: i,
      isOpenDelayed: f,
      delayDuration: r,
      onOpen: m.useCallback(() => {
        window.clearTimeout(v.current), d(!1);
      }, []),
      onClose: m.useCallback(() => {
        window.clearTimeout(v.current), v.current = window.setTimeout(
          () => d(!0),
          s
        );
      }, [s]),
      isPointerInTransitRef: g,
      onPointerInTransitChange: m.useCallback((y) => {
        g.current = y;
      }, []),
      disableHoverableContent: l,
      children: u
    }
  );
};
Gd.displayName = Vd;
var Vi = "Tooltip", [_C, Gi] = Hi(Vi), Kd = (n) => {
  const {
    __scopeTooltip: i,
    children: r,
    open: s,
    defaultOpen: l = !1,
    onOpenChange: u,
    disableHoverableContent: f,
    delayDuration: d
  } = n, g = el(Vi, n.__scopeTooltip), v = zi(i), [y, b] = m.useState(null), E = Mi(), R = m.useRef(0), O = f ?? g.disableHoverableContent, w = d ?? g.delayDuration, A = m.useRef(!1), [I = !1, N] = Ia({
    prop: s,
    defaultProp: l,
    onChange: (U) => {
      U ? (g.onOpen(), document.dispatchEvent(new CustomEvent(ja))) : g.onClose(), u == null || u(U);
    }
  }), M = m.useMemo(() => I ? A.current ? "delayed-open" : "instant-open" : "closed", [I]), j = m.useCallback(() => {
    window.clearTimeout(R.current), R.current = 0, A.current = !1, N(!0);
  }, [N]), $ = m.useCallback(() => {
    window.clearTimeout(R.current), R.current = 0, N(!1);
  }, [N]), G = m.useCallback(() => {
    window.clearTimeout(R.current), R.current = window.setTimeout(() => {
      A.current = !0, N(!0), R.current = 0;
    }, w);
  }, [w, N]);
  return m.useEffect(() => () => {
    R.current && (window.clearTimeout(R.current), R.current = 0);
  }, []), /* @__PURE__ */ C.jsx(Vf, { ...v, children: /* @__PURE__ */ C.jsx(
    _C,
    {
      scope: i,
      contentId: E,
      open: I,
      stateAttribute: M,
      trigger: y,
      onTriggerChange: b,
      onTriggerEnter: m.useCallback(() => {
        g.isOpenDelayed ? G() : j();
      }, [g.isOpenDelayed, G, j]),
      onTriggerLeave: m.useCallback(() => {
        O ? $() : (window.clearTimeout(R.current), R.current = 0);
      }, [$, O]),
      onOpen: j,
      onClose: $,
      disableHoverableContent: O,
      children: r
    }
  ) });
};
Kd.displayName = Vi;
var Ba = "TooltipTrigger", Yd = m.forwardRef(
  (n, i) => {
    const { __scopeTooltip: r, ...s } = n, l = Gi(Ba, r), u = el(Ba, r), f = zi(r), d = m.useRef(null), g = Ye(i, d, l.onTriggerChange), v = m.useRef(!1), y = m.useRef(!1), b = m.useCallback(() => v.current = !1, []);
    return m.useEffect(() => () => document.removeEventListener("pointerup", b), [b]), /* @__PURE__ */ C.jsx(Gf, { asChild: !0, ...f, children: /* @__PURE__ */ C.jsx(
      He.button,
      {
        "aria-describedby": l.open ? l.contentId : void 0,
        "data-state": l.stateAttribute,
        ...s,
        ref: g,
        onPointerMove: De(n.onPointerMove, (E) => {
          E.pointerType !== "touch" && !y.current && !u.isPointerInTransitRef.current && (l.onTriggerEnter(), y.current = !0);
        }),
        onPointerLeave: De(n.onPointerLeave, () => {
          l.onTriggerLeave(), y.current = !1;
        }),
        onPointerDown: De(n.onPointerDown, () => {
          v.current = !0, document.addEventListener("pointerup", b, { once: !0 });
        }),
        onFocus: De(n.onFocus, () => {
          v.current || l.onOpen();
        }),
        onBlur: De(n.onBlur, l.onClose),
        onClick: De(n.onClick, l.onClose)
      }
    ) });
  }
);
Yd.displayName = Ba;
var CC = "TooltipPortal", [r1, SC] = Hi(CC, {
  forceMount: void 0
}), Ar = "TooltipContent", qd = m.forwardRef(
  (n, i) => {
    const r = SC(Ar, n.__scopeTooltip), { forceMount: s = r.forceMount, side: l = "top", ...u } = n, f = Gi(Ar, n.__scopeTooltip);
    return /* @__PURE__ */ C.jsx(zd, { present: s || f.open, children: f.disableHoverableContent ? /* @__PURE__ */ C.jsx(Xd, { side: l, ...u, ref: i }) : /* @__PURE__ */ C.jsx(EC, { side: l, ...u, ref: i }) });
  }
), EC = m.forwardRef((n, i) => {
  const r = Gi(Ar, n.__scopeTooltip), s = el(Ar, n.__scopeTooltip), l = m.useRef(null), u = Ye(i, l), [f, d] = m.useState(null), { trigger: g, onClose: v } = r, y = l.current, { onPointerInTransitChange: b } = s, E = m.useCallback(() => {
    d(null), b(!1);
  }, [b]), R = m.useCallback(
    (O, w) => {
      const A = O.currentTarget, I = { x: O.clientX, y: O.clientY }, N = PC(I, A.getBoundingClientRect()), M = OC(I, N), j = NC(w.getBoundingClientRect()), $ = LC([...M, ...j]);
      d($), b(!0);
    },
    [b]
  );
  return m.useEffect(() => () => E(), [E]), m.useEffect(() => {
    if (g && y) {
      const O = (A) => R(A, y), w = (A) => R(A, g);
      return g.addEventListener("pointerleave", O), y.addEventListener("pointerleave", w), () => {
        g.removeEventListener("pointerleave", O), y.removeEventListener("pointerleave", w);
      };
    }
  }, [g, y, R, E]), m.useEffect(() => {
    if (f) {
      const O = (w) => {
        const A = w.target, I = { x: w.clientX, y: w.clientY }, N = (g == null ? void 0 : g.contains(A)) || (y == null ? void 0 : y.contains(A)), M = !IC(I, f);
        N ? E() : M && (E(), v());
      };
      return document.addEventListener("pointermove", O), () => document.removeEventListener("pointermove", O);
    }
  }, [g, y, f, v, E]), /* @__PURE__ */ C.jsx(Xd, { ...n, ref: u });
}), [RC, AC] = Hi(Vi, { isInside: !1 }), Xd = m.forwardRef(
  (n, i) => {
    const {
      __scopeTooltip: r,
      children: s,
      "aria-label": l,
      onEscapeKeyDown: u,
      onPointerDownOutside: f,
      ...d
    } = n, g = Gi(Ar, r), v = zi(r), { onClose: y } = g;
    return m.useEffect(() => (document.addEventListener(ja, y), () => document.removeEventListener(ja, y)), [y]), m.useEffect(() => {
      if (g.trigger) {
        const b = (E) => {
          const R = E.target;
          R != null && R.contains(g.trigger) && y();
        };
        return window.addEventListener("scroll", b, { capture: !0 }), () => window.removeEventListener("scroll", b, { capture: !0 });
      }
    }, [g.trigger, y]), /* @__PURE__ */ C.jsx(
      Ua,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: u,
        onPointerDownOutside: f,
        onFocusOutside: (b) => b.preventDefault(),
        onDismiss: y,
        children: /* @__PURE__ */ C.jsxs(
          Kf,
          {
            "data-state": g.stateAttribute,
            ...v,
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
              /* @__PURE__ */ C.jsx(uf, { children: s }),
              /* @__PURE__ */ C.jsx(RC, { scope: r, isInside: !0, children: /* @__PURE__ */ C.jsx(J0, { id: g.contentId, role: "tooltip", children: l || s }) })
            ]
          }
        )
      }
    );
  }
);
qd.displayName = Ar;
var Zd = "TooltipArrow", TC = m.forwardRef(
  (n, i) => {
    const { __scopeTooltip: r, ...s } = n, l = zi(r);
    return AC(
      Zd,
      r
    ).isInside ? null : /* @__PURE__ */ C.jsx(Yf, { ...l, ...s, ref: i });
  }
);
TC.displayName = Zd;
function PC(n, i) {
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
function OC(n, i, r = 5) {
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
function NC(n) {
  const { top: i, right: r, bottom: s, left: l } = n;
  return [
    { x: l, y: i },
    { x: r, y: i },
    { x: r, y: s },
    { x: l, y: s }
  ];
}
function IC(n, i) {
  const { x: r, y: s } = n;
  let l = !1;
  for (let u = 0, f = i.length - 1; u < i.length; f = u++) {
    const d = i[u].x, g = i[u].y, v = i[f].x, y = i[f].y;
    g > s != y > s && r < (v - d) * (s - g) / (y - g) + d && (l = !l);
  }
  return l;
}
function LC(n) {
  const i = n.slice();
  return i.sort((r, s) => r.x < s.x ? -1 : r.x > s.x ? 1 : r.y < s.y ? -1 : r.y > s.y ? 1 : 0), MC(i);
}
function MC(n) {
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
var DC = Gd, kC = Kd, FC = Yd, Jd = qd;
const _i = DC, Ci = kC, Si = FC, fo = m.forwardRef(({ className: n, sideOffset: i = 4, ...r }, s) => /* @__PURE__ */ C.jsx(
  Jd,
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
fo.displayName = Jd.displayName;
const WC = df(
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
function jC({ className: n, variant: i, ...r }) {
  return /* @__PURE__ */ C.jsx("div", { className: et(WC({ variant: i }), n), ...r });
}
const tl = m.forwardRef(({ className: n, ...i }, r) => /* @__PURE__ */ C.jsx(
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
tl.displayName = "Card";
const nl = m.forwardRef(({ className: n, ...i }, r) => /* @__PURE__ */ C.jsx(
  "div",
  {
    ref: r,
    className: et("flex flex-col space-y-1.5 p-6", n),
    ...i
  }
));
nl.displayName = "CardHeader";
const Qd = m.forwardRef(({ className: n, ...i }, r) => /* @__PURE__ */ C.jsx(
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
Qd.displayName = "CardTitle";
const BC = m.forwardRef(({ className: n, ...i }, r) => /* @__PURE__ */ C.jsx(
  "div",
  {
    ref: r,
    className: et("text-sm text-muted-foreground", n),
    ...i
  }
));
BC.displayName = "CardDescription";
const rl = m.forwardRef(({ className: n, ...i }, r) => /* @__PURE__ */ C.jsx("div", { ref: r, className: et("p-6 pt-0", n), ...i }));
rl.displayName = "CardContent";
const $C = m.forwardRef(({ className: n, ...i }, r) => /* @__PURE__ */ C.jsx(
  "div",
  {
    ref: r,
    className: et("flex items-center p-6 pt-0", n),
    ...i
  }
));
$C.displayName = "CardFooter";
const UC = [
  {
    id: 1,
    dealId: "18551702398",
    dealName: "Acme Corp",
    amount: 45e4,
    probability: 90,
    company: "Acme Corp",
    contacts: "Jane Smith (IT Manager)",
    status: "Open",
    lastUpdated: "2023-10-15",
    dealStage: "Solution Validation",
    dealOwner: "Alice Green",
    dealLanguage: "en",
    nextInteraction: "2023-10-20",
    lastActivity: "2023-10-10",
    activityType: "Email",
    isStale: !0,
    highProbability: !1,
    metrics: {
      deal_age: 90,
      meetings_scheduled: 5,
      meetings_attended: 3,
      objections_raised: 0,
      objections_resolved: 0,
      competitor_mentions: 0,
      decision_maker_engaged: !1
    },
    meddpicc: {
      metrics: 2,
      economic_buyer: 1,
      decision_criteria: 3,
      decision_process: 1,
      paper_process: 1,
      implications: 4,
      champion: 1,
      competition: 3
    },
    riskFactors: [
      {
        label: "Lack of Engagement with Decision Makers",
        level: "high",
        info: "No engagement with economic buyer",
        category: "stakeholder",
        details: "No meetings with CFO or other decision-makers.",
        impact: "High risk of deal stalling due to lack of executive buy-in.",
        metric: "0 meetings with economic buyer",
        lostDealFrequency: 45
      },
      {
        label: "Undefined Decision Process",
        level: "medium",
        info: "Decision process not outlined",
        category: "process",
        details: "No clear understanding of the customer's decision-making process.",
        impact: "Potential delays and surprises in the sales cycle.",
        metric: "Decision process score: 1/5",
        lostDealFrequency: 30
      },
      {
        label: "High Deal Age with Slow Progression",
        level: "high",
        info: "Deal has aged without significant progress",
        category: "progress",
        details: "Deal has been open for 90 days but remains in early stages.",
        impact: "Increased risk of deal becoming inactive or lost.",
        metric: "Deal age: 90 days, Stage: Qualification",
        lostDealFrequency: 35
      }
    ],
    recommendedActions: [
      {
        text: "Engage with the CFO to establish executive sponsorship.",
        priority: "high",
        type: "meeting",
        completed: !1,
        addedToHubspot: !1
      },
      {
        text: "Clarify the customer's decision-making process and timeline.",
        priority: "medium",
        type: "call",
        completed: !1,
        addedToHubspot: !1
      },
      {
        text: "Accelerate deal progression by scheduling a product demo for additional stakeholders.",
        priority: "high",
        type: "event",
        completed: !1,
        addedToHubspot: !1
      }
    ],
    keyStakeholders: [
      {
        name: "Jane Smith",
        role: "IT Manager",
        engagementLevel: "High",
        contactLink: "https://app.hubspot.com/contacts/123456/contact/1"
      }
    ],
    maturity: {
      requirements: !0,
      budget: !1,
      timeline: !1,
      stakeholders: !1
    },
    riskScore: 8,
    hubspotUrl: "https://app.hubspot.com/deals/123/DEAL-18551702398"
  },
  {
    id: 2,
    dealId: "20079565168",
    dealName: "Beta Co.",
    amount: 7e5,
    probability: 60,
    company: "Beta Co.",
    contacts: "Mark Davis (VP Finance)",
    status: "Open",
    lastUpdated: "2023-11-01",
    dealStage: "Discovery",
    dealOwner: "Sara Lee",
    dealLanguage: "en",
    nextInteraction: "2023-11-05",
    lastActivity: "2023-10-28",
    activityType: "Follow-up Call",
    isStale: !1,
    highProbability: !0,
    metrics: {
      deal_age: 60,
      meetings_scheduled: 4,
      meetings_attended: 4,
      objections_raised: 1,
      objections_resolved: 1,
      competitor_mentions: 2,
      decision_maker_engaged: !0
    },
    meddpicc: {
      metrics: 4,
      economic_buyer: 4,
      decision_criteria: 4,
      decision_process: 3,
      paper_process: 2,
      implications: 3,
      champion: 4,
      competition: 2
    },
    riskFactors: [
      {
        label: "Pricing and Budget Constraints",
        level: "medium",
        info: "Budget concerns raised by VP Finance",
        category: "financial",
        details: "Customer indicated budget limitations for the current fiscal year.",
        impact: "Potential delay in approval or need for revised pricing.",
        metric: "1 budget concern raised",
        lostDealFrequency: 25
      },
      {
        label: "Competitor Mentions",
        level: "medium",
        info: "Mention of alternative vendors",
        category: "competitive",
        details: "Customer evaluating 2 other solutions alongside ours.",
        impact: "Risk of losing deal if differentiation isn't clear.",
        metric: "2 competitor mentions",
        lostDealFrequency: 20
      }
    ],
    recommendedActions: [
      {
        text: "Provide a revised pricing structure with flexible options to address budget concerns.",
        priority: "high",
        type: "document",
        completed: !1,
        addedToHubspot: !1
      },
      {
        text: "Schedule an executive review to reinforce competitive advantages over other vendors.",
        priority: "medium",
        type: "meeting",
        completed: !1,
        addedToHubspot: !1
      }
    ],
    keyStakeholders: [
      {
        name: "Mark Davis",
        role: "VP Finance",
        engagementLevel: "Medium",
        contactLink: "https://app.hubspot.com/contacts/123456/contact/2"
      }
    ],
    maturity: {
      requirements: !0,
      budget: !0,
      timeline: !1,
      stakeholders: !0
    },
    riskScore: 6,
    hubspotUrl: "https://app.hubspot.com/deals/123/DEAL-20079565168"
  },
  {
    id: 3,
    dealId: "19929371719",
    dealName: "Gamma Industries",
    amount: 3e5,
    probability: 40,
    company: "Gamma Industries",
    contacts: "Linda Brown (Operations Manager)",
    status: "Open",
    lastUpdated: "2023-09-20",
    dealStage: "Discovery",
    dealOwner: "Tommy Wright",
    dealLanguage: "en",
    nextInteraction: "2023-09-30",
    lastActivity: "2023-09-10",
    activityType: "Discovery Call",
    isStale: !0,
    highProbability: !1,
    metrics: {
      deal_age: 120,
      meetings_scheduled: 2,
      meetings_attended: 2,
      objections_raised: 3,
      objections_resolved: 1,
      competitor_mentions: 3,
      decision_maker_engaged: !1
    },
    meddpicc: {
      metrics: 2,
      economic_buyer: 1,
      decision_criteria: 2,
      decision_process: 1,
      paper_process: 1,
      implications: 2,
      champion: 2,
      competition: 3
    },
    riskFactors: [
      {
        label: "Multiple Objections Unresolved",
        level: "high",
        info: "Customer raised objections without resolution",
        category: "objections",
        details: "Several objections from Operations remain unaddressed.",
        impact: "Deal is likely to stall without further engagement from the sales team.",
        metric: "3 unresolved objections",
        lostDealFrequency: 40
      },
      {
        label: "High Competitor Mentions",
        level: "medium",
        info: "Multiple competitors considered by customer",
        category: "competitive",
        details: "Customer evaluating 3 competitors including incumbent provider.",
        impact: "Need to clearly communicate unique value proposition.",
        metric: "3 competitor mentions",
        lostDealFrequency: 32
      }
    ],
    recommendedActions: [
      {
        text: "Hold a follow-up call to address unresolved objections with Operations Manager.",
        priority: "high",
        type: "call",
        completed: !1,
        addedToHubspot: !1
      },
      {
        text: "Prepare a comparative analysis to highlight unique value against competitors.",
        priority: "medium",
        type: "document",
        completed: !1,
        addedToHubspot: !1
      }
    ],
    keyStakeholders: [
      {
        name: "Linda Brown",
        role: "Operations Manager",
        engagementLevel: "Medium",
        contactLink: "https://app.hubspot.com/contacts/123456/contact/3"
      }
    ],
    maturity: {
      requirements: !0,
      budget: !1,
      timeline: !1,
      stakeholders: !0
    },
    riskScore: 7,
    hubspotUrl: "https://app.hubspot.com/deals/123/DEAL-19929371719"
  }
];
function o1({ deal: n }) {
  const i = (r) => r;
  return /* @__PURE__ */ C.jsxs(tl, { className: "bg-white shadow-sm border-slate-200", children: [
    /* @__PURE__ */ C.jsx(nl, { children: /* @__PURE__ */ C.jsxs("div", { className: "flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4", children: [
      /* @__PURE__ */ C.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ C.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ C.jsx("h2", { className: "text-xl font-semibold text-slate-900", children: n.dealName }),
          /* @__PURE__ */ C.jsx(_i, { children: /* @__PURE__ */ C.jsxs(Ci, { children: [
            /* @__PURE__ */ C.jsx(Si, { asChild: !0, children: /* @__PURE__ */ C.jsx(
              uo,
              {
                variant: "ghost",
                size: "sm",
                className: "p-1 h-auto",
                onClick: () => window.open(n.hubspotUrl, "_blank"),
                children: /* @__PURE__ */ C.jsx(pb, { className: "w-4 h-4 text-slate-500" })
              }
            ) }),
            /* @__PURE__ */ C.jsx(fo, { children: /* @__PURE__ */ C.jsx("p", { children: "View in HubSpot" }) })
          ] }) })
        ] }),
        /* @__PURE__ */ C.jsx(jC, { variant: "outline", className: "text-sm", children: n.dealStage })
      ] }),
      /* @__PURE__ */ C.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 lg:gap-8", children: [
        /* @__PURE__ */ C.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ C.jsx("p", { className: "text-sm text-slate-500", children: "Amount" }),
          /* @__PURE__ */ C.jsxs("p", { className: "text-lg font-semibold", children: [
            "$",
            n.amount.toLocaleString()
          ] })
        ] }),
        /* @__PURE__ */ C.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ C.jsxs("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ C.jsx("p", { className: "text-sm text-slate-500", children: "Win Probability" }),
            /* @__PURE__ */ C.jsx(_i, { children: /* @__PURE__ */ C.jsxs(Ci, { children: [
              /* @__PURE__ */ C.jsx(Si, { asChild: !0, children: /* @__PURE__ */ C.jsx(uo, { variant: "ghost", size: "sm", className: "p-0 h-auto", children: /* @__PURE__ */ C.jsx(Aa, { className: "w-3 h-3 text-slate-400" }) }) }),
              /* @__PURE__ */ C.jsx(fo, { className: "max-w-xs", children: /* @__PURE__ */ C.jsx("p", { children: "Estimated chance of winning, based on prospect engagement, qualification status, risk factors, and historic deal outcomes at the current stage." }) })
            ] }) })
          ] }),
          /* @__PURE__ */ C.jsxs("p", { className: "text-lg font-semibold", children: [
            n.probability,
            "%"
          ] })
        ] }),
        /* @__PURE__ */ C.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ C.jsx("p", { className: "text-sm text-slate-500", children: "Deal Owner" }),
          /* @__PURE__ */ C.jsx("p", { className: "text-lg font-semibold", children: n.dealOwner })
        ] }),
        /* @__PURE__ */ C.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ C.jsxs("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ C.jsx("p", { className: "text-sm text-slate-500", children: "Deal Lannguage" }),
            /* @__PURE__ */ C.jsx(_i, { children: /* @__PURE__ */ C.jsxs(Ci, { children: [
              /* @__PURE__ */ C.jsx(Si, { asChild: !0, children: /* @__PURE__ */ C.jsx(uo, { variant: "ghost", size: "sm", className: "p-0 h-auto", children: /* @__PURE__ */ C.jsx(Aa, { className: "w-3 h-3 text-slate-400" }) }) }),
              /* @__PURE__ */ C.jsx(fo, { className: "max-w-xs", children: /* @__PURE__ */ C.jsx("p", { children: "The main language of the deal." }) })
            ] }) })
          ] }),
          /* @__PURE__ */ C.jsx("p", { className: "text-lg font-semibold", children: tb(n.dealLanguage) })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ C.jsx(rl, { children: /* @__PURE__ */ C.jsxs(
      pC,
      {
        value: n.dealId,
        onValueChange: i,
        children: [
          /* @__PURE__ */ C.jsx(jd, { className: "w-[300px]", children: /* @__PURE__ */ C.jsxs(hC, { children: [
            n.dealName,
            " (",
            n.company,
            ")"
          ] }) }),
          /* @__PURE__ */ C.jsx(Ud, { children: UC.map((r) => /* @__PURE__ */ C.jsxs(Hd, { value: r.dealId, children: [
            r.dealName,
            " (",
            r.company,
            ")"
          ] }, r.dealId)) })
        ]
      }
    ) })
  ] });
}
function HC(n, i = []) {
  let r = [];
  function s(u, f) {
    const d = m.createContext(f), g = r.length;
    r = [...r, f];
    function v(b) {
      const { scope: E, children: R, ...O } = b, w = (E == null ? void 0 : E[n][g]) || d, A = m.useMemo(() => O, Object.values(O));
      return /* @__PURE__ */ C.jsx(w.Provider, { value: A, children: R });
    }
    function y(b, E) {
      const R = (E == null ? void 0 : E[n][g]) || d, O = m.useContext(R);
      if (O)
        return O;
      if (f !== void 0)
        return f;
      throw new Error(`\`${b}\` must be used within \`${u}\``);
    }
    return v.displayName = u + "Provider", [v, y];
  }
  const l = () => {
    const u = r.map((f) => m.createContext(f));
    return function(d) {
      const g = (d == null ? void 0 : d[n]) || u;
      return m.useMemo(
        () => ({ [`__scope${n}`]: { ...d, [n]: g } }),
        [d, g]
      );
    };
  };
  return l.scopeName = n, [s, zC(l, ...i)];
}
function zC(...n) {
  const i = n[0];
  if (n.length === 1)
    return i;
  const r = () => {
    const s = n.map((l) => ({
      useScope: l(),
      scopeName: l.scopeName
    }));
    return function(u) {
      const f = s.reduce((d, { useScope: g, scopeName: v }) => {
        const b = g(u)[`__scope${v}`];
        return { ...d, ...b };
      }, {});
      return m.useMemo(() => ({ [`__scope${i.scopeName}`]: f }), [f]);
    };
  };
  return r.scopeName = i.scopeName, r;
}
var ol = "Progress", il = 100, [VC, i1] = HC(ol), [GC, KC] = VC(ol), ep = m.forwardRef(
  (n, i) => {
    const {
      __scopeProgress: r,
      value: s = null,
      max: l,
      getValueLabel: u = YC,
      ...f
    } = n;
    (l || l === 0) && !rf(l) && console.error(qC(`${l}`, "Progress"));
    const d = rf(l) ? l : il;
    s !== null && !of(s, d) && console.error(XC(`${s}`, "Progress"));
    const g = of(s, d) ? s : null, v = Ii(g) ? u(g, d) : void 0;
    return /* @__PURE__ */ C.jsx(GC, { scope: r, value: g, max: d, children: /* @__PURE__ */ C.jsx(
      He.div,
      {
        "aria-valuemax": d,
        "aria-valuemin": 0,
        "aria-valuenow": Ii(g) ? g : void 0,
        "aria-valuetext": v,
        role: "progressbar",
        "data-state": rp(g, d),
        "data-value": g ?? void 0,
        "data-max": d,
        ...f,
        ref: i
      }
    ) });
  }
);
ep.displayName = ol;
var tp = "ProgressIndicator", np = m.forwardRef(
  (n, i) => {
    const { __scopeProgress: r, ...s } = n, l = KC(tp, r);
    return /* @__PURE__ */ C.jsx(
      He.div,
      {
        "data-state": rp(l.value, l.max),
        "data-value": l.value ?? void 0,
        "data-max": l.max,
        ...s,
        ref: i
      }
    );
  }
);
np.displayName = tp;
function YC(n, i) {
  return `${Math.round(n / i * 100)}%`;
}
function rp(n, i) {
  return n == null ? "indeterminate" : n === i ? "complete" : "loading";
}
function Ii(n) {
  return typeof n == "number";
}
function rf(n) {
  return Ii(n) && !isNaN(n) && n > 0;
}
function of(n, i) {
  return Ii(n) && !isNaN(n) && n <= i && n >= 0;
}
function qC(n, i) {
  return `Invalid prop \`max\` of value \`${n}\` supplied to \`${i}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${il}\`.`;
}
function XC(n, i) {
  return `Invalid prop \`value\` of value \`${n}\` supplied to \`${i}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${il} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var op = ep, ZC = np;
const ip = m.forwardRef(({ className: n, value: i, ...r }, s) => /* @__PURE__ */ C.jsx(
  op,
  {
    ref: s,
    className: et(
      "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
      n
    ),
    ...r,
    children: /* @__PURE__ */ C.jsx(
      ZC,
      {
        className: "h-full w-full flex-1 bg-primary transition-all",
        style: { transform: `translateX(-${100 - (i || 0)}%)` }
      }
    )
  }
));
ip.displayName = op.displayName;
const lo = [
  "Discovery",
  "Solution Validation",
  "Pricing Communicated",
  "Contract Sent",
  "Closed Won",
  "Closed Lost"
], s1 = ({ deal: n }) => {
  const i = {
    Discovery: 75,
    "Solution Validation": 65,
    "Pricing Communicated": 55,
    "Contract Sent": 85,
    "Closed Won": 100,
    "Closed Lost": 0
  }, r = lo.includes(n.dealStage) ? n.dealStage : lo[0], s = i[r] || 0;
  return /* @__PURE__ */ C.jsxs(tl, { className: "bg-white shadow-sm border-slate-200", children: [
    /* @__PURE__ */ C.jsxs(nl, { children: [
      /* @__PURE__ */ C.jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ C.jsx(Qd, { className: "text-slate-800", children: "Deal Progress" }) }),
      /* @__PURE__ */ C.jsx("p", { className: "text-sm text-muted-foreground", children: "Current stage and overall progress" })
    ] }),
    /* @__PURE__ */ C.jsx(rl, { children: /* @__PURE__ */ C.jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ C.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ C.jsx("div", { className: "flex flex-wrap justify-between text-xs sm:text-sm text-slate-600", children: lo.map((l) => /* @__PURE__ */ C.jsx(
          "span",
          {
            className: `mb-2 ${r === l ? "font-bold" : ""}`,
            children: l
          },
          l
        )) }),
        /* @__PURE__ */ C.jsx(
          ip,
          {
            value: (lo.indexOf(r) + 1) / lo.length * 100,
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
          /* @__PURE__ */ C.jsx(_i, { children: /* @__PURE__ */ C.jsxs(Ci, { children: [
            /* @__PURE__ */ C.jsx(Si, { children: /* @__PURE__ */ C.jsx(Aa, { className: "w-3 h-3 text-muted-foreground" }) }),
            /* @__PURE__ */ C.jsxs(fo, { className: "max-w-xs", children: [
              /* @__PURE__ */ C.jsx("p", { children: "Predictions based on deal qualification status and comparison with historical deals at the same stage" }),
              /* @__PURE__ */ C.jsx("a", { href: "", children: /* @__PURE__ */ C.jsx("button", { children: "Learn more" }) })
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ C.jsxs("div", { className: "grid grid-cols-2 gap-8", children: [
          /* @__PURE__ */ C.jsxs("div", { children: [
            /* @__PURE__ */ C.jsx("div", { className: "text-sm font-medium text-muted-foreground mb-1", children: "Win Probability" }),
            /* @__PURE__ */ C.jsxs("div", { className: "text-2xl font-bold text-slate-800", children: [
              n.probability,
              "%"
            ] })
          ] }),
          /* @__PURE__ */ C.jsxs("div", { children: [
            /* @__PURE__ */ C.jsxs("div", { className: "text-sm font-medium text-muted-foreground mb-1 space-x-1", children: [
              "Next Stage Probability",
              " "
            ] }),
            /* @__PURE__ */ C.jsxs("div", { className: "text-2xl font-bold text-slate-800", children: [
              s,
              "%"
            ] })
          ] })
        ] })
      ] })
    ] }) })
  ] });
};
export {
  e1 as Counter,
  o1 as DealHeader,
  s1 as DealProgress
};
//# sourceMappingURL=index.js.map
