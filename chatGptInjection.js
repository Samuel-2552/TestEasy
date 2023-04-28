"use strict";
(() => {
  var Qw = Object.create;
  var Vi = Object.defineProperty;
  var m6 = Object.getOwnPropertyDescriptor;
  var Yw = Object.getOwnPropertyNames;
  var Xw = Object.getPrototypeOf,
    Jw = Object.prototype.hasOwnProperty;
  var eA = (e, t, n) => t in e ? Vi(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
  }) : e[t] = n;
  var kt = (e, t) => () => (t || e((t = {
    exports: {}
  }).exports, t), t.exports);
  var tA = (e, t, n, a) => {
    if (t && typeof t == "object" || typeof t == "function")
      for (let o of Yw(t)) !Jw.call(e, o) && o !== n && Vi(e, o, {
        get: () => t[o],
        enumerable: !(a = m6(t, o)) || a.enumerable
      });
    return e
  };
  var O = (e, t, n) => (n = e != null ? Qw(Xw(e)) : {}, tA(t || !e || !e.__esModule ? Vi(n, "default", {
    value: e,
    enumerable: !0
  }) : n, e));
  var Vr = (e, t, n, a) => {
    for (var o = a > 1 ? void 0 : a ? m6(t, n) : t, s = e.length - 1, c; s >= 0; s--)(c = e[s]) && (o = (a ? c(t, n, o) : c(o)) || o);
    return a && o && Vi(t, n, o), o
  };
  var m0 = (e, t, n) => (eA(e, typeof t != "symbol" ? t + "" : t, n), n);
  var P = kt(() => {
    "use strict";
    globalThis && (globalThis.__aichat_envvars__ = {
      dev: !1,
      prod: !0,
      host: "https://webapp.chatgpt4google.com",
      project: "c4g"
    })
  });
  var Z6 = kt(ve => {
    "use strict";
    var oS = O(P());
    var Nr = Symbol.for("react.element"),
      nA = Symbol.for("react.portal"),
      rA = Symbol.for("react.fragment"),
      aA = Symbol.for("react.strict_mode"),
      iA = Symbol.for("react.profiler"),
      oA = Symbol.for("react.provider"),
      sA = Symbol.for("react.context"),
      lA = Symbol.for("react.forward_ref"),
      cA = Symbol.for("react.suspense"),
      uA = Symbol.for("react.memo"),
      hA = Symbol.for("react.lazy"),
      v6 = Symbol.iterator;

    function fA(e) {
      return e === null || typeof e != "object" ? null : (e = v6 && e[v6] || e["@@iterator"], typeof e == "function" ? e : null)
    }
    var _6 = {
      isMounted: function () {
        return !1
      },
      enqueueForceUpdate: function () { },
      enqueueReplaceState: function () { },
      enqueueSetState: function () { }
    },
      E6 = Object.assign,
      w6 = {};

    function v0(e, t, n) {
      this.props = e, this.context = t, this.refs = w6, this.updater = n || _6
    }
    v0.prototype.isReactComponent = {};
    v0.prototype.setState = function (e, t) {
      if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, e, t, "setState")
    };
    v0.prototype.forceUpdate = function (e) {
      this.updater.enqueueForceUpdate(this, e, "forceUpdate")
    };

    function A6() { }
    A6.prototype = v0.prototype;

    function As(e, t, n) {
      this.props = e, this.context = t, this.refs = w6, this.updater = n || _6
    }
    var Cs = As.prototype = new A6;
    Cs.constructor = As;
    E6(Cs, v0.prototype);
    Cs.isPureReactComponent = !0;
    var g6 = Array.isArray,
      C6 = Object.prototype.hasOwnProperty,
      bs = {
        current: null
      },
      b6 = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      };

    function M6(e, t, n) {
      var a, o = {},
        s = null,
        c = null;
      if (t != null)
        for (a in t.ref !== void 0 && (c = t.ref), t.key !== void 0 && (s = "" + t.key), t) C6.call(t, a) && !b6.hasOwnProperty(a) && (o[a] = t[a]);
      var h = arguments.length - 2;
      if (h === 1) o.children = n;
      else if (1 < h) {
        for (var f = Array(h), p = 0; p < h; p++) f[p] = arguments[p + 2];
        o.children = f
      }
      if (e && e.defaultProps)
        for (a in h = e.defaultProps, h) o[a] === void 0 && (o[a] = h[a]);
      return {
        $$typeof: Nr,
        type: e,
        key: s,
        ref: c,
        props: o,
        _owner: bs.current
      }
    }

    function dA(e, t) {
      return {
        $$typeof: Nr,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
      }
    }

    function Ms(e) {
      return typeof e == "object" && e !== null && e.$$typeof === Nr
    }

    function pA(e) {
      var t = {
        "=": "=0",
        ":": "=2"
      };
      return "$" + e.replace(/[=:]/g, function (n) {
        return t[n]
      })
    }
    var y6 = /\/+/g;

    function ws(e, t) {
      return typeof e == "object" && e !== null && e.key != null ? pA("" + e.key) : t.toString(36)
    }

    function Hi(e, t, n, a, o) {
      var s = typeof e;
      (s === "undefined" || s === "boolean") && (e = null);
      var c = !1;
      if (e === null) c = !0;
      else switch (s) {
        case "string":
        case "number":
          c = !0;
          break;
        case "object":
          switch (e.$$typeof) {
            case Nr:
            case nA:
              c = !0
          }
      }
      if (c) return c = e, o = o(c), e = a === "" ? "." + ws(c, 0) : a, g6(o) ? (n = "", e != null && (n = e.replace(y6, "$&/") + "/"), Hi(o, t, n, "", function (p) {
        return p
      })) : o != null && (Ms(o) && (o = dA(o, n + (!o.key || c && c.key === o.key ? "" : ("" + o.key).replace(y6, "$&/") + "/") + e)), t.push(o)), 1;
      if (c = 0, a = a === "" ? "." : a + ":", g6(e))
        for (var h = 0; h < e.length; h++) {
          s = e[h];
          var f = a + ws(s, h);
          c += Hi(s, t, n, f, o)
        } else if (f = fA(e), typeof f == "function")
        for (e = f.call(e), h = 0; !(s = e.next()).done;) s = s.value, f = a + ws(s, h++), c += Hi(s, t, n, f, o);
      else if (s === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
      return c
    }

    function Ni(e, t, n) {
      if (e == null) return e;
      var a = [],
        o = 0;
      return Hi(e, a, "", "", function (s) {
        return t.call(n, s, o++)
      }), a
    }

    function mA(e) {
      if (e._status === -1) {
        var t = e._result;
        t = t(), t.then(function (n) {
          (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n)
        }, function (n) {
          (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n)
        }), e._status === -1 && (e._status = 0, e._result = t)
      }
      if (e._status === 1) return e._result.default;
      throw e._result
    }
    var bt = {
      current: null
    },
      Di = {
        transition: null
      },
      vA = {
        ReactCurrentDispatcher: bt,
        ReactCurrentBatchConfig: Di,
        ReactCurrentOwner: bs
      };
    ve.Children = {
      map: Ni,
      forEach: function (e, t, n) {
        Ni(e, function () {
          t.apply(this, arguments)
        }, n)
      },
      count: function (e) {
        var t = 0;
        return Ni(e, function () {
          t++
        }), t
      },
      toArray: function (e) {
        return Ni(e, function (t) {
          return t
        }) || []
      },
      only: function (e) {
        if (!Ms(e)) throw Error("React.Children.only expected to receive a single React element child.");
        return e
      }
    };
    ve.Component = v0;
    ve.Fragment = rA;
    ve.Profiler = iA;
    ve.PureComponent = As;
    ve.StrictMode = aA;
    ve.Suspense = cA;
    ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = vA;
    ve.cloneElement = function (e, t, n) {
      if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
      var a = E6({}, e.props),
        o = e.key,
        s = e.ref,
        c = e._owner;
      if (t != null) {
        if (t.ref !== void 0 && (s = t.ref, c = bs.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var h = e.type.defaultProps;
        for (f in t) C6.call(t, f) && !b6.hasOwnProperty(f) && (a[f] = t[f] === void 0 && h !== void 0 ? h[f] : t[f])
      }
      var f = arguments.length - 2;
      if (f === 1) a.children = n;
      else if (1 < f) {
        h = Array(f);
        for (var p = 0; p < f; p++) h[p] = arguments[p + 2];
        a.children = h
      }
      return {
        $$typeof: Nr,
        type: e.type,
        key: o,
        ref: s,
        props: a,
        _owner: c
      }
    };
    ve.createContext = function (e) {
      return e = {
        $$typeof: sA,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
      }, e.Provider = {
        $$typeof: oA,
        _context: e
      }, e.Consumer = e
    };
    ve.createElement = M6;
    ve.createFactory = function (e) {
      var t = M6.bind(null, e);
      return t.type = e, t
    };
    ve.createRef = function () {
      return {
        current: null
      }
    };
    ve.forwardRef = function (e) {
      return {
        $$typeof: lA,
        render: e
      }
    };
    ve.isValidElement = Ms;
    ve.lazy = function (e) {
      return {
        $$typeof: hA,
        _payload: {
          _status: -1,
          _result: e
        },
        _init: mA
      }
    };
    ve.memo = function (e, t) {
      return {
        $$typeof: uA,
        type: e,
        compare: t === void 0 ? null : t
      }
    };
    ve.startTransition = function (e) {
      var t = Di.transition;
      Di.transition = {};
      try {
        e()
      } finally {
        Di.transition = t
      }
    };
    ve.unstable_act = function () {
      throw Error("act(...) is not supported in production builds of React.")
    };
    ve.useCallback = function (e, t) {
      return bt.current.useCallback(e, t)
    };
    ve.useContext = function (e) {
      return bt.current.useContext(e)
    };
    ve.useDebugValue = function () { };
    ve.useDeferredValue = function (e) {
      return bt.current.useDeferredValue(e)
    };
    ve.useEffect = function (e, t) {
      return bt.current.useEffect(e, t)
    };
    ve.useId = function () {
      return bt.current.useId()
    };
    ve.useImperativeHandle = function (e, t, n) {
      return bt.current.useImperativeHandle(e, t, n)
    };
    ve.useInsertionEffect = function (e, t) {
      return bt.current.useInsertionEffect(e, t)
    };
    ve.useLayoutEffect = function (e, t) {
      return bt.current.useLayoutEffect(e, t)
    };
    ve.useMemo = function (e, t) {
      return bt.current.useMemo(e, t)
    };
    ve.useReducer = function (e, t, n) {
      return bt.current.useReducer(e, t, n)
    };
    ve.useRef = function (e) {
      return bt.current.useRef(e)
    };
    ve.useState = function (e) {
      return bt.current.useState(e)
    };
    ve.useSyncExternalStore = function (e, t, n) {
      return bt.current.useSyncExternalStore(e, t, n)
    };
    ve.useTransition = function () {
      return bt.current.useTransition()
    };
    ve.version = "18.2.0"
  });
  var c1 = kt((sS, S6) => {
    "use strict";
    var lS = O(P());
    S6.exports = Z6()
  });
  var N6 = kt(Te => {
    "use strict";
    var uS = O(P());

    function Is(e, t) {
      var n = e.length;
      e.push(t);
      e: for (; 0 < n;) {
        var a = n - 1 >>> 1,
          o = e[a];
        if (0 < Fi(o, t)) e[a] = t, e[n] = o, n = a;
        else break e
      }
    }

    function Z1(e) {
      return e.length === 0 ? null : e[0]
    }

    function Bi(e) {
      if (e.length === 0) return null;
      var t = e[0],
        n = e.pop();
      if (n !== t) {
        e[0] = n;
        e: for (var a = 0, o = e.length, s = o >>> 1; a < s;) {
          var c = 2 * (a + 1) - 1,
            h = e[c],
            f = c + 1,
            p = e[f];
          if (0 > Fi(h, n)) f < o && 0 > Fi(p, h) ? (e[a] = p, e[f] = n, a = f) : (e[a] = h, e[c] = n, a = c);
          else if (f < o && 0 > Fi(p, n)) e[a] = p, e[f] = n, a = f;
          else break e
        }
      }
      return t
    }

    function Fi(e, t) {
      var n = e.sortIndex - t.sortIndex;
      return n !== 0 ? n : e.id - t.id
    }
    typeof performance == "object" && typeof performance.now == "function" ? (x6 = performance, Te.unstable_now = function () {
      return x6.now()
    }) : (Zs = Date, I6 = Zs.now(), Te.unstable_now = function () {
      return Zs.now() - I6
    });
    var x6, Zs, I6, G1 = [],
      Un = [],
      gA = 1,
      u1 = null,
      mt = 3,
      Gi = !1,
      O5 = !1,
      Dr = !1,
      k6 = typeof setTimeout == "function" ? setTimeout : null,
      L6 = typeof clearTimeout == "function" ? clearTimeout : null,
      T6 = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

    function Ts(e) {
      for (var t = Z1(Un); t !== null;) {
        if (t.callback === null) Bi(Un);
        else if (t.startTime <= e) Bi(Un), t.sortIndex = t.expirationTime, Is(G1, t);
        else break;
        t = Z1(Un)
      }
    }

    function Os(e) {
      if (Dr = !1, Ts(e), !O5)
        if (Z1(G1) !== null) O5 = !0, Ls(ks);
        else {
          var t = Z1(Un);
          t !== null && Ps(Os, t.startTime - e)
        }
    }

    function ks(e, t) {
      O5 = !1, Dr && (Dr = !1, L6(Fr), Fr = -1), Gi = !0;
      var n = mt;
      try {
        for (Ts(t), u1 = Z1(G1); u1 !== null && (!(u1.expirationTime > t) || e && !V6());) {
          var a = u1.callback;
          if (typeof a == "function") {
            u1.callback = null, mt = u1.priorityLevel;
            var o = a(u1.expirationTime <= t);
            t = Te.unstable_now(), typeof o == "function" ? u1.callback = o : u1 === Z1(G1) && Bi(G1), Ts(t)
          } else Bi(G1);
          u1 = Z1(G1)
        }
        if (u1 !== null) var s = !0;
        else {
          var c = Z1(Un);
          c !== null && Ps(Os, c.startTime - t), s = !1
        }
        return s
      } finally {
        u1 = null, mt = n, Gi = !1
      }
    }
    var zi = !1,
      Ui = null,
      Fr = -1,
      P6 = 5,
      R6 = -1;

    function V6() {
      return !(Te.unstable_now() - R6 < P6)
    }

    function Ss() {
      if (Ui !== null) {
        var e = Te.unstable_now();
        R6 = e;
        var t = !0;
        try {
          t = Ui(!0, e)
        } finally {
          t ? Hr() : (zi = !1, Ui = null)
        }
      } else zi = !1
    }
    var Hr;
    typeof T6 == "function" ? Hr = function () {
      T6(Ss)
    } : typeof MessageChannel < "u" ? (xs = new MessageChannel, O6 = xs.port2, xs.port1.onmessage = Ss, Hr = function () {
      O6.postMessage(null)
    }) : Hr = function () {
      k6(Ss, 0)
    };
    var xs, O6;

    function Ls(e) {
      Ui = e, zi || (zi = !0, Hr())
    }

    function Ps(e, t) {
      Fr = k6(function () {
        e(Te.unstable_now())
      }, t)
    }
    Te.unstable_IdlePriority = 5;
    Te.unstable_ImmediatePriority = 1;
    Te.unstable_LowPriority = 4;
    Te.unstable_NormalPriority = 3;
    Te.unstable_Profiling = null;
    Te.unstable_UserBlockingPriority = 2;
    Te.unstable_cancelCallback = function (e) {
      e.callback = null
    };
    Te.unstable_continueExecution = function () {
      O5 || Gi || (O5 = !0, Ls(ks))
    };
    Te.unstable_forceFrameRate = function (e) {
      0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P6 = 0 < e ? Math.floor(1e3 / e) : 5
    };
    Te.unstable_getCurrentPriorityLevel = function () {
      return mt
    };
    Te.unstable_getFirstCallbackNode = function () {
      return Z1(G1)
    };
    Te.unstable_next = function (e) {
      switch (mt) {
        case 1:
        case 2:
        case 3:
          var t = 3;
          break;
        default:
          t = mt
      }
      var n = mt;
      mt = t;
      try {
        return e()
      } finally {
        mt = n
      }
    };
    Te.unstable_pauseExecution = function () { };
    Te.unstable_requestPaint = function () { };
    Te.unstable_runWithPriority = function (e, t) {
      switch (e) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          e = 3
      }
      var n = mt;
      mt = e;
      try {
        return t()
      } finally {
        mt = n
      }
    };
    Te.unstable_scheduleCallback = function (e, t, n) {
      var a = Te.unstable_now();
      switch (typeof n == "object" && n !== null ? (n = n.delay, n = typeof n == "number" && 0 < n ? a + n : a) : n = a, e) {
        case 1:
          var o = -1;
          break;
        case 2:
          o = 250;
          break;
        case 5:
          o = 1073741823;
          break;
        case 4:
          o = 1e4;
          break;
        default:
          o = 5e3
      }
      return o = n + o, e = {
        id: gA++,
        callback: t,
        priorityLevel: e,
        startTime: n,
        expirationTime: o,
        sortIndex: -1
      }, n > a ? (e.sortIndex = n, Is(Un, e), Z1(G1) === null && e === Z1(Un) && (Dr ? (L6(Fr), Fr = -1) : Dr = !0, Ps(Os, n - a))) : (e.sortIndex = o, Is(G1, e), O5 || Gi || (O5 = !0, Ls(ks))), e
    };
    Te.unstable_shouldYield = V6;
    Te.unstable_wrapCallback = function (e) {
      var t = mt;
      return function () {
        var n = mt;
        mt = t;
        try {
          return e.apply(this, arguments)
        } finally {
          mt = n
        }
      }
    }
  });
  var D6 = kt((hS, H6) => {
    "use strict";
    var fS = O(P());
    H6.exports = N6()
  });
  var q8 = kt(Kt => {
    "use strict";
    var pS = O(P());
    var qh = c1(),
      jt = D6();

    function G(e) {
      for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
      return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    var jh = new Set,
      la = {};

    function z5(e, t) {
      N0(e, t), N0(e + "Capture", t)
    }

    function N0(e, t) {
      for (la[e] = t, e = 0; e < t.length; e++) jh.add(t[e])
    }
    var yn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
      rl = Object.prototype.hasOwnProperty,
      yA = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
      F6 = {},
      U6 = {};

    function _A(e) {
      return rl.call(U6, e) ? !0 : rl.call(F6, e) ? !1 : yA.test(e) ? U6[e] = !0 : (F6[e] = !0, !1)
    }

    function EA(e, t, n, a) {
      if (n !== null && n.type === 0) return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean":
          return a ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
        default:
          return !1
      }
    }

    function wA(e, t, n, a) {
      if (t === null || typeof t > "u" || EA(e, t, n, a)) return !0;
      if (a) return !1;
      if (n !== null) switch (n.type) {
        case 3:
          return !t;
        case 4:
          return t === !1;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t
      }
      return !1
    }

    function St(e, t, n, a, o, s, c) {
      this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = a, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = c
    }
    var ut = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (e) {
      ut[e] = new St(e, 0, !1, e, null, !1, !1)
    });
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"]
    ].forEach(function (e) {
      var t = e[0];
      ut[t] = new St(t, 1, !1, e[1], null, !1, !1)
    });
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
      ut[e] = new St(e, 2, !1, e.toLowerCase(), null, !1, !1)
    });
    ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
      ut[e] = new St(e, 2, !1, e, null, !1, !1)
    });
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (e) {
      ut[e] = new St(e, 3, !1, e.toLowerCase(), null, !1, !1)
    });
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      ut[e] = new St(e, 3, !0, e, null, !1, !1)
    });
    ["capture", "download"].forEach(function (e) {
      ut[e] = new St(e, 4, !1, e, null, !1, !1)
    });
    ["cols", "rows", "size", "span"].forEach(function (e) {
      ut[e] = new St(e, 6, !1, e, null, !1, !1)
    });
    ["rowSpan", "start"].forEach(function (e) {
      ut[e] = new St(e, 5, !1, e.toLowerCase(), null, !1, !1)
    });
    var Kl = /[\-:]([a-z])/g;

    function Ql(e) {
      return e[1].toUpperCase()
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function (e) {
      var t = e.replace(Kl, Ql);
      ut[t] = new St(t, 1, !1, e, null, !1, !1)
    });
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) {
      var t = e.replace(Kl, Ql);
      ut[t] = new St(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
    });
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(Kl, Ql);
      ut[t] = new St(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
    });
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      ut[e] = new St(e, 1, !1, e.toLowerCase(), null, !1, !1)
    });
    ut.xlinkHref = new St("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
    ["src", "href", "action", "formAction"].forEach(function (e) {
      ut[e] = new St(e, 1, !1, e.toLowerCase(), null, !0, !0)
    });

    function Yl(e, t, n, a) {
      var o = ut.hasOwnProperty(t) ? ut[t] : null;
      (o !== null ? o.type !== 0 : a || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (wA(t, n, o, a) && (n = null), a || o === null ? _A(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, a = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, a ? e.setAttributeNS(a, t, n) : e.setAttribute(t, n))))
    }
    var An = qh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
      $i = Symbol.for("react.element"),
      _0 = Symbol.for("react.portal"),
      E0 = Symbol.for("react.fragment"),
      Xl = Symbol.for("react.strict_mode"),
      al = Symbol.for("react.profiler"),
      Wh = Symbol.for("react.provider"),
      Kh = Symbol.for("react.context"),
      Jl = Symbol.for("react.forward_ref"),
      il = Symbol.for("react.suspense"),
      ol = Symbol.for("react.suspense_list"),
      ec = Symbol.for("react.memo"),
      Gn = Symbol.for("react.lazy");
    Symbol.for("react.scope");
    Symbol.for("react.debug_trace_mode");
    var Qh = Symbol.for("react.offscreen");
    Symbol.for("react.legacy_hidden");
    Symbol.for("react.cache");
    Symbol.for("react.tracing_marker");
    var B6 = Symbol.iterator;

    function Ur(e) {
      return e === null || typeof e != "object" ? null : (e = B6 && e[B6] || e["@@iterator"], typeof e == "function" ? e : null)
    }
    var Ue = Object.assign,
      Rs;

    function Kr(e) {
      if (Rs === void 0) try {
        throw Error()
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        Rs = t && t[1] || ""
      }
      return `
` + Rs + e
    }
    var Vs = !1;

    function Ns(e, t) {
      if (!e || Vs) return "";
      Vs = !0;
      var n = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        if (t)
          if (t = function () {
            throw Error()
          }, Object.defineProperty(t.prototype, "props", {
            set: function () {
              throw Error()
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(t, [])
            } catch (p) {
              var a = p
            }
            Reflect.construct(e, [], t)
          } else {
            try {
              t.call()
            } catch (p) {
              a = p
            }
            e.call(t.prototype)
          }
        else {
          try {
            throw Error()
          } catch (p) {
            a = p
          }
          e()
        }
      } catch (p) {
        if (p && a && typeof p.stack == "string") {
          for (var o = p.stack.split(`
`), s = a.stack.split(`
`), c = o.length - 1, h = s.length - 1; 1 <= c && 0 <= h && o[c] !== s[h];) h--;
          for (; 1 <= c && 0 <= h; c--, h--)
            if (o[c] !== s[h]) {
              if (c !== 1 || h !== 1)
                do
                  if (c--, h--, 0 > h || o[c] !== s[h]) {
                    var f = `
` + o[c].replace(" at new ", " at ");
                    return e.displayName && f.includes("<anonymous>") && (f = f.replace("<anonymous>", e.displayName)), f
                  } while (1 <= c && 0 <= h);
              break
            }
        }
      } finally {
        Vs = !1, Error.prepareStackTrace = n
      }
      return (e = e ? e.displayName || e.name : "") ? Kr(e) : ""
    }

    function AA(e) {
      switch (e.tag) {
        case 5:
          return Kr(e.type);
        case 16:
          return Kr("Lazy");
        case 13:
          return Kr("Suspense");
        case 19:
          return Kr("SuspenseList");
        case 0:
        case 2:
        case 15:
          return e = Ns(e.type, !1), e;
        case 11:
          return e = Ns(e.type.render, !1), e;
        case 1:
          return e = Ns(e.type, !0), e;
        default:
          return ""
      }
    }

    function sl(e) {
      if (e == null) return null;
      if (typeof e == "function") return e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case E0:
          return "Fragment";
        case _0:
          return "Portal";
        case al:
          return "Profiler";
        case Xl:
          return "StrictMode";
        case il:
          return "Suspense";
        case ol:
          return "SuspenseList"
      }
      if (typeof e == "object") switch (e.$$typeof) {
        case Kh:
          return (e.displayName || "Context") + ".Consumer";
        case Wh:
          return (e._context.displayName || "Context") + ".Provider";
        case Jl:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case ec:
          return t = e.displayName || null, t !== null ? t : sl(e.type) || "Memo";
        case Gn:
          t = e._payload, e = e._init;
          try {
            return sl(e(t))
          } catch { }
      }
      return null
    }

    function CA(e) {
      var t = e.type;
      switch (e.tag) {
        case 24:
          return "Cache";
        case 9:
          return (t.displayName || "Context") + ".Consumer";
        case 10:
          return (t._context.displayName || "Context") + ".Provider";
        case 18:
          return "DehydratedFragment";
        case 11:
          return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
          return "Fragment";
        case 5:
          return t;
        case 4:
          return "Portal";
        case 3:
          return "Root";
        case 6:
          return "Text";
        case 16:
          return sl(t);
        case 8:
          return t === Xl ? "StrictMode" : "Mode";
        case 22:
          return "Offscreen";
        case 12:
          return "Profiler";
        case 21:
          return "Scope";
        case 13:
          return "Suspense";
        case 19:
          return "SuspenseList";
        case 25:
          return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
          if (typeof t == "function") return t.displayName || t.name || null;
          if (typeof t == "string") return t
      }
      return null
    }

    function r5(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return e;
        default:
          return ""
      }
    }

    function Yh(e) {
      var t = e.type;
      return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
    }

    function bA(e) {
      var t = Yh(e) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        a = "" + e[t];
      if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var o = n.get,
          s = n.set;
        return Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return o.call(this)
          },
          set: function (c) {
            a = "" + c, s.call(this, c)
          }
        }), Object.defineProperty(e, t, {
          enumerable: n.enumerable
        }), {
          getValue: function () {
            return a
          },
          setValue: function (c) {
            a = "" + c
          },
          stopTracking: function () {
            e._valueTracker = null, delete e[t]
          }
        }
      }
    }

    function qi(e) {
      e._valueTracker || (e._valueTracker = bA(e))
    }

    function Xh(e) {
      if (!e) return !1;
      var t = e._valueTracker;
      if (!t) return !0;
      var n = t.getValue(),
        a = "";
      return e && (a = Yh(e) ? e.checked ? "true" : "false" : e.value), e = a, e !== n ? (t.setValue(e), !0) : !1
    }

    function E2(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
      try {
        return e.activeElement || e.body
      } catch {
        return e.body
      }
    }

    function ll(e, t) {
      var n = t.checked;
      return Ue({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
      })
    }

    function G6(e, t) {
      var n = t.defaultValue == null ? "" : t.defaultValue,
        a = t.checked != null ? t.checked : t.defaultChecked;
      n = r5(t.value != null ? t.value : n), e._wrapperState = {
        initialChecked: a,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
      }
    }

    function Jh(e, t) {
      t = t.checked, t != null && Yl(e, "checked", t, !1)
    }

    function cl(e, t) {
      Jh(e, t);
      var n = r5(t.value),
        a = t.type;
      if (n != null) a === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
      else if (a === "submit" || a === "reset") {
        e.removeAttribute("value");
        return
      }
      t.hasOwnProperty("value") ? ul(e, t.type, n) : t.hasOwnProperty("defaultValue") && ul(e, t.type, r5(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
    }

    function z6(e, t, n) {
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var a = t.type;
        if (!(a !== "submit" && a !== "reset" || t.value !== void 0 && t.value !== null)) return;
        t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
      }
      n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n)
    }

    function ul(e, t, n) {
      (t !== "number" || E2(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
    }
    var Qr = Array.isArray;

    function O0(e, t, n, a) {
      if (e = e.options, t) {
        t = {};
        for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
        for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && a && (e[n].defaultSelected = !0)
      } else {
        for (n = "" + r5(n), t = null, o = 0; o < e.length; o++) {
          if (e[o].value === n) {
            e[o].selected = !0, a && (e[o].defaultSelected = !0);
            return
          }
          t !== null || e[o].disabled || (t = e[o])
        }
        t !== null && (t.selected = !0)
      }
    }

    function hl(e, t) {
      if (t.dangerouslySetInnerHTML != null) throw Error(G(91));
      return Ue({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
      })
    }

    function $6(e, t) {
      var n = t.value;
      if (n == null) {
        if (n = t.children, t = t.defaultValue, n != null) {
          if (t != null) throw Error(G(92));
          if (Qr(n)) {
            if (1 < n.length) throw Error(G(93));
            n = n[0]
          }
          t = n
        }
        t == null && (t = ""), n = t
      }
      e._wrapperState = {
        initialValue: r5(n)
      }
    }

    function ef(e, t) {
      var n = r5(t.value),
        a = r5(t.defaultValue);
      n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), a != null && (e.defaultValue = "" + a)
    }

    function q6(e) {
      var t = e.textContent;
      t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
    }

    function tf(e) {
      switch (e) {
        case "svg":
          return "http://www.w3.org/2000/svg";
        case "math":
          return "http://www.w3.org/1998/Math/MathML";
        default:
          return "http://www.w3.org/1999/xhtml"
      }
    }

    function fl(e, t) {
      return e == null || e === "http://www.w3.org/1999/xhtml" ? tf(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
    }
    var ji, nf = function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function (t, n, a, o) {
        MSApp.execUnsafeLocalFunction(function () {
          return e(t, n, a, o)
        })
      } : e
    }(function (e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
      else {
        for (ji = ji || document.createElement("div"), ji.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = ji.firstChild; e.firstChild;) e.removeChild(e.firstChild);
        for (; t.firstChild;) e.appendChild(t.firstChild)
      }
    });

    function ca(e, t) {
      if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
          n.nodeValue = t;
          return
        }
      }
      e.textContent = t
    }
    var Jr = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    },
      MA = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Jr).forEach(function (e) {
      MA.forEach(function (t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1), Jr[t] = Jr[e]
      })
    });

    function rf(e, t, n) {
      return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Jr.hasOwnProperty(e) && Jr[e] ? ("" + t).trim() : t + "px"
    }

    function af(e, t) {
      e = e.style;
      for (var n in t)
        if (t.hasOwnProperty(n)) {
          var a = n.indexOf("--") === 0,
            o = rf(n, t[n], a);
          n === "float" && (n = "cssFloat"), a ? e.setProperty(n, o) : e[n] = o
        }
    }
    var ZA = Ue({
      menuitem: !0
    }, {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
    });

    function dl(e, t) {
      if (t) {
        if (ZA[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(G(137, e));
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null) throw Error(G(60));
          if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(G(61))
        }
        if (t.style != null && typeof t.style != "object") throw Error(G(62))
      }
    }

    function pl(e, t) {
      if (e.indexOf("-") === -1) return typeof t.is == "string";
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0
      }
    }
    var ml = null;

    function tc(e) {
      return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
    }
    var vl = null,
      k0 = null,
      L0 = null;

    function j6(e) {
      if (e = Sa(e)) {
        if (typeof vl != "function") throw Error(G(280));
        var t = e.stateNode;
        t && (t = W2(t), vl(e.stateNode, e.type, t))
      }
    }

    function of(e) {
      k0 ? L0 ? L0.push(e) : L0 = [e] : k0 = e
    }

    function sf() {
      if (k0) {
        var e = k0,
          t = L0;
        if (L0 = k0 = null, j6(e), t)
          for (e = 0; e < t.length; e++) j6(t[e])
      }
    }

    function lf(e, t) {
      return e(t)
    }

    function cf() { }
    var Hs = !1;

    function uf(e, t, n) {
      if (Hs) return e(t, n);
      Hs = !0;
      try {
        return lf(e, t, n)
      } finally {
        Hs = !1, (k0 !== null || L0 !== null) && (cf(), sf())
      }
    }

    function ua(e, t) {
      var n = e.stateNode;
      if (n === null) return null;
      var a = W2(n);
      if (a === null) return null;
      n = a[t];
      e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (a = !a.disabled) || (e = e.type, a = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !a;
          break e;
        default:
          e = !1
      }
      if (e) return null;
      if (n && typeof n != "function") throw Error(G(231, t, typeof n));
      return n
    }
    var gl = !1;
    if (yn) try {
      g0 = {}, Object.defineProperty(g0, "passive", {
        get: function () {
          gl = !0
        }
      }), window.addEventListener("test", g0, g0), window.removeEventListener("test", g0, g0)
    } catch {
      gl = !1
    }
    var g0;

    function SA(e, t, n, a, o, s, c, h, f) {
      var p = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(n, p)
      } catch (_) {
        this.onError(_)
      }
    }
    var ea = !1,
      w2 = null,
      A2 = !1,
      yl = null,
      xA = {
        onError: function (e) {
          ea = !0, w2 = e
        }
      };

    function IA(e, t, n, a, o, s, c, h, f) {
      ea = !1, w2 = null, SA.apply(xA, arguments)
    }

    function TA(e, t, n, a, o, s, c, h, f) {
      if (IA.apply(this, arguments), ea) {
        if (ea) {
          var p = w2;
          ea = !1, w2 = null
        } else throw Error(G(198));
        A2 || (A2 = !0, yl = p)
      }
    }

    function $5(e) {
      var t = e,
        n = e;
      if (e.alternate)
        for (; t.return;) t = t.return;
      else {
        e = t;
        do t = e, t.flags & 4098 && (n = t.return), e = t.return; while (e)
      }
      return t.tag === 3 ? n : null
    }

    function hf(e) {
      if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
      }
      return null
    }

    function W6(e) {
      if ($5(e) !== e) throw Error(G(188))
    }

    function OA(e) {
      var t = e.alternate;
      if (!t) {
        if (t = $5(e), t === null) throw Error(G(188));
        return t !== e ? null : e
      }
      for (var n = e, a = t; ;) {
        var o = n.return;
        if (o === null) break;
        var s = o.alternate;
        if (s === null) {
          if (a = o.return, a !== null) {
            n = a;
            continue
          }
          break
        }
        if (o.child === s.child) {
          for (s = o.child; s;) {
            if (s === n) return W6(o), e;
            if (s === a) return W6(o), t;
            s = s.sibling
          }
          throw Error(G(188))
        }
        if (n.return !== a.return) n = o, a = s;
        else {
          for (var c = !1, h = o.child; h;) {
            if (h === n) {
              c = !0, n = o, a = s;
              break
            }
            if (h === a) {
              c = !0, a = o, n = s;
              break
            }
            h = h.sibling
          }
          if (!c) {
            for (h = s.child; h;) {
              if (h === n) {
                c = !0, n = s, a = o;
                break
              }
              if (h === a) {
                c = !0, a = s, n = o;
                break
              }
              h = h.sibling
            }
            if (!c) throw Error(G(189))
          }
        }
        if (n.alternate !== a) throw Error(G(190))
      }
      if (n.tag !== 3) throw Error(G(188));
      return n.stateNode.current === n ? e : t
    }

    function ff(e) {
      return e = OA(e), e !== null ? df(e) : null
    }

    function df(e) {
      if (e.tag === 5 || e.tag === 6) return e;
      for (e = e.child; e !== null;) {
        var t = df(e);
        if (t !== null) return t;
        e = e.sibling
      }
      return null
    }
    var pf = jt.unstable_scheduleCallback,
      K6 = jt.unstable_cancelCallback,
      kA = jt.unstable_shouldYield,
      LA = jt.unstable_requestPaint,
      je = jt.unstable_now,
      PA = jt.unstable_getCurrentPriorityLevel,
      nc = jt.unstable_ImmediatePriority,
      mf = jt.unstable_UserBlockingPriority,
      C2 = jt.unstable_NormalPriority,
      RA = jt.unstable_LowPriority,
      vf = jt.unstable_IdlePriority,
      z2 = null,
      j1 = null;

    function VA(e) {
      if (j1 && typeof j1.onCommitFiberRoot == "function") try {
        j1.onCommitFiberRoot(z2, e, void 0, (e.current.flags & 128) === 128)
      } catch { }
    }
    var O1 = Math.clz32 ? Math.clz32 : DA,
      NA = Math.log,
      HA = Math.LN2;

    function DA(e) {
      return e >>>= 0, e === 0 ? 32 : 31 - (NA(e) / HA | 0) | 0
    }
    var Wi = 64,
      Ki = 4194304;

    function Yr(e) {
      switch (e & -e) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          return e & 130023424;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 1073741824;
        default:
          return e
      }
    }

    function b2(e, t) {
      var n = e.pendingLanes;
      if (n === 0) return 0;
      var a = 0,
        o = e.suspendedLanes,
        s = e.pingedLanes,
        c = n & 268435455;
      if (c !== 0) {
        var h = c & ~o;
        h !== 0 ? a = Yr(h) : (s &= c, s !== 0 && (a = Yr(s)))
      } else c = n & ~o, c !== 0 ? a = Yr(c) : s !== 0 && (a = Yr(s));
      if (a === 0) return 0;
      if (t !== 0 && t !== a && !(t & o) && (o = a & -a, s = t & -t, o >= s || o === 16 && (s & 4194240) !== 0)) return t;
      if (a & 4 && (a |= n & 16), t = e.entangledLanes, t !== 0)
        for (e = e.entanglements, t &= a; 0 < t;) n = 31 - O1(t), o = 1 << n, a |= e[n], t &= ~o;
      return a
    }

    function FA(e, t) {
      switch (e) {
        case 1:
        case 2:
        case 4:
          return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return -1
      }
    }

    function UA(e, t) {
      for (var n = e.suspendedLanes, a = e.pingedLanes, o = e.expirationTimes, s = e.pendingLanes; 0 < s;) {
        var c = 31 - O1(s),
          h = 1 << c,
          f = o[c];
        f === -1 ? (!(h & n) || h & a) && (o[c] = FA(h, t)) : f <= t && (e.expiredLanes |= h), s &= ~h
      }
    }

    function _l(e) {
      return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    }

    function gf() {
      var e = Wi;
      return Wi <<= 1, !(Wi & 4194240) && (Wi = 64), e
    }

    function Ds(e) {
      for (var t = [], n = 0; 31 > n; n++) t.push(e);
      return t
    }

    function Ma(e, t, n) {
      e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - O1(t), e[t] = n
    }

    function BA(e, t) {
      var n = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
      var a = e.eventTimes;
      for (e = e.expirationTimes; 0 < n;) {
        var o = 31 - O1(n),
          s = 1 << o;
        t[o] = 0, a[o] = -1, e[o] = -1, n &= ~s
      }
    }

    function rc(e, t) {
      var n = e.entangledLanes |= t;
      for (e = e.entanglements; n;) {
        var a = 31 - O1(n),
          o = 1 << a;
        o & t | e[a] & t && (e[a] |= t), n &= ~o
      }
    }
    var Ze = 0;

    function yf(e) {
      return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
    }
    var _f, ac, Ef, wf, Af, El = !1,
      Qi = [],
      Kn = null,
      Qn = null,
      Yn = null,
      ha = new Map,
      fa = new Map,
      $n = [],
      GA = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

    function Q6(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          Kn = null;
          break;
        case "dragenter":
        case "dragleave":
          Qn = null;
          break;
        case "mouseover":
        case "mouseout":
          Yn = null;
          break;
        case "pointerover":
        case "pointerout":
          ha.delete(t.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          fa.delete(t.pointerId)
      }
    }

    function Br(e, t, n, a, o, s) {
      return e === null || e.nativeEvent !== s ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: a,
        nativeEvent: s,
        targetContainers: [o]
      }, t !== null && (t = Sa(t), t !== null && ac(t)), e) : (e.eventSystemFlags |= a, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e)
    }

    function zA(e, t, n, a, o) {
      switch (t) {
        case "focusin":
          return Kn = Br(Kn, e, t, n, a, o), !0;
        case "dragenter":
          return Qn = Br(Qn, e, t, n, a, o), !0;
        case "mouseover":
          return Yn = Br(Yn, e, t, n, a, o), !0;
        case "pointerover":
          var s = o.pointerId;
          return ha.set(s, Br(ha.get(s) || null, e, t, n, a, o)), !0;
        case "gotpointercapture":
          return s = o.pointerId, fa.set(s, Br(fa.get(s) || null, e, t, n, a, o)), !0
      }
      return !1
    }

    function Cf(e) {
      var t = P5(e.target);
      if (t !== null) {
        var n = $5(t);
        if (n !== null) {
          if (t = n.tag, t === 13) {
            if (t = hf(n), t !== null) {
              e.blockedOn = t, Af(e.priority, function () {
                Ef(n)
              });
              return
            }
          } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
            e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
            return
          }
        }
      }
      e.blockedOn = null
    }

    function u2(e) {
      if (e.blockedOn !== null) return !1;
      for (var t = e.targetContainers; 0 < t.length;) {
        var n = wl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
          n = e.nativeEvent;
          var a = new n.constructor(n.type, n);
          ml = a, n.target.dispatchEvent(a), ml = null
        } else return t = Sa(n), t !== null && ac(t), e.blockedOn = n, !1;
        t.shift()
      }
      return !0
    }

    function Y6(e, t, n) {
      u2(e) && n.delete(t)
    }

    function $A() {
      El = !1, Kn !== null && u2(Kn) && (Kn = null), Qn !== null && u2(Qn) && (Qn = null), Yn !== null && u2(Yn) && (Yn = null), ha.forEach(Y6), fa.forEach(Y6)
    }

    function Gr(e, t) {
      e.blockedOn === t && (e.blockedOn = null, El || (El = !0, jt.unstable_scheduleCallback(jt.unstable_NormalPriority, $A)))
    }

    function da(e) {
      function t(o) {
        return Gr(o, e)
      }
      if (0 < Qi.length) {
        Gr(Qi[0], e);
        for (var n = 1; n < Qi.length; n++) {
          var a = Qi[n];
          a.blockedOn === e && (a.blockedOn = null)
        }
      }
      for (Kn !== null && Gr(Kn, e), Qn !== null && Gr(Qn, e), Yn !== null && Gr(Yn, e), ha.forEach(t), fa.forEach(t), n = 0; n < $n.length; n++) a = $n[n], a.blockedOn === e && (a.blockedOn = null);
      for (; 0 < $n.length && (n = $n[0], n.blockedOn === null);) Cf(n), n.blockedOn === null && $n.shift()
    }
    var P0 = An.ReactCurrentBatchConfig,
      M2 = !0;

    function qA(e, t, n, a) {
      var o = Ze,
        s = P0.transition;
      P0.transition = null;
      try {
        Ze = 1, ic(e, t, n, a)
      } finally {
        Ze = o, P0.transition = s
      }
    }

    function jA(e, t, n, a) {
      var o = Ze,
        s = P0.transition;
      P0.transition = null;
      try {
        Ze = 4, ic(e, t, n, a)
      } finally {
        Ze = o, P0.transition = s
      }
    }

    function ic(e, t, n, a) {
      if (M2) {
        var o = wl(e, t, n, a);
        if (o === null) qs(e, t, a, Z2, n), Q6(e, a);
        else if (zA(o, e, t, n, a)) a.stopPropagation();
        else if (Q6(e, a), t & 4 && -1 < GA.indexOf(e)) {
          for (; o !== null;) {
            var s = Sa(o);
            if (s !== null && _f(s), s = wl(e, t, n, a), s === null && qs(e, t, a, Z2, n), s === o) break;
            o = s
          }
          o !== null && a.stopPropagation()
        } else qs(e, t, a, null, n)
      }
    }
    var Z2 = null;

    function wl(e, t, n, a) {
      if (Z2 = null, e = tc(a), e = P5(e), e !== null)
        if (t = $5(e), t === null) e = null;
        else if (n = t.tag, n === 13) {
          if (e = hf(t), e !== null) return e;
          e = null
        } else if (n === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null
        } else t !== e && (e = null);
      return Z2 = e, null
    }

    function bf(e) {
      switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return 4;
        case "message":
          switch (PA()) {
            case nc:
              return 1;
            case mf:
              return 4;
            case C2:
            case RA:
              return 16;
            case vf:
              return 536870912;
            default:
              return 16
          }
        default:
          return 16
      }
    }
    var jn = null,
      oc = null,
      h2 = null;

    function Mf() {
      if (h2) return h2;
      var e, t = oc,
        n = t.length,
        a, o = "value" in jn ? jn.value : jn.textContent,
        s = o.length;
      for (e = 0; e < n && t[e] === o[e]; e++);
      var c = n - e;
      for (a = 1; a <= c && t[n - a] === o[s - a]; a++);
      return h2 = o.slice(e, 1 < a ? 1 - a : void 0)
    }

    function f2(e) {
      var t = e.keyCode;
      return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
    }

    function Yi() {
      return !0
    }

    function X6() {
      return !1
    }

    function Wt(e) {
      function t(n, a, o, s, c) {
        this._reactName = n, this._targetInst = o, this.type = a, this.nativeEvent = s, this.target = c, this.currentTarget = null;
        for (var h in e) e.hasOwnProperty(h) && (n = e[h], this[h] = n ? n(s) : s[h]);
        return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? Yi : X6, this.isPropagationStopped = X6, this
      }
      return Ue(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Yi)
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Yi)
        },
        persist: function () { },
        isPersistent: Yi
      }), t
    }
    var z0 = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now()
      },
      defaultPrevented: 0,
      isTrusted: 0
    },
      sc = Wt(z0),
      Za = Ue({}, z0, {
        view: 0,
        detail: 0
      }),
      WA = Wt(Za),
      Fs, Us, zr, $2 = Ue({}, Za, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: lc,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
          return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function (e) {
          return "movementX" in e ? e.movementX : (e !== zr && (zr && e.type === "mousemove" ? (Fs = e.screenX - zr.screenX, Us = e.screenY - zr.screenY) : Us = Fs = 0, zr = e), Fs)
        },
        movementY: function (e) {
          return "movementY" in e ? e.movementY : Us
        }
      }),
      J6 = Wt($2),
      KA = Ue({}, $2, {
        dataTransfer: 0
      }),
      QA = Wt(KA),
      YA = Ue({}, Za, {
        relatedTarget: 0
      }),
      Bs = Wt(YA),
      XA = Ue({}, z0, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
      }),
      JA = Wt(XA),
      eC = Ue({}, z0, {
        clipboardData: function (e) {
          return "clipboardData" in e ? e.clipboardData : window.clipboardData
        }
      }),
      tC = Wt(eC),
      nC = Ue({}, z0, {
        data: 0
      }),
      eh = Wt(nC),
      rC = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
      },
      aC = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
      },
      iC = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
      };

    function oC(e) {
      var t = this.nativeEvent;
      return t.getModifierState ? t.getModifierState(e) : (e = iC[e]) ? !!t[e] : !1
    }

    function lc() {
      return oC
    }
    var sC = Ue({}, Za, {
      key: function (e) {
        if (e.key) {
          var t = rC[e.key] || e.key;
          if (t !== "Unidentified") return t
        }
        return e.type === "keypress" ? (e = f2(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? aC[e.keyCode] || "Unidentified" : ""
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: lc,
      charCode: function (e) {
        return e.type === "keypress" ? f2(e) : 0
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
      },
      which: function (e) {
        return e.type === "keypress" ? f2(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
      }
    }),
      lC = Wt(sC),
      cC = Ue({}, $2, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
      }),
      th = Wt(cC),
      uC = Ue({}, Za, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: lc
      }),
      hC = Wt(uC),
      fC = Ue({}, z0, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
      }),
      dC = Wt(fC),
      pC = Ue({}, $2, {
        deltaX: function (e) {
          return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        },
        deltaY: function (e) {
          return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
      }),
      mC = Wt(pC),
      vC = [9, 13, 27, 32],
      cc = yn && "CompositionEvent" in window,
      ta = null;
    yn && "documentMode" in document && (ta = document.documentMode);
    var gC = yn && "TextEvent" in window && !ta,
      Zf = yn && (!cc || ta && 8 < ta && 11 >= ta),
      nh = String.fromCharCode(32),
      rh = !1;

    function Sf(e, t) {
      switch (e) {
        case "keyup":
          return vC.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1
      }
    }

    function xf(e) {
      return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
    }
    var w0 = !1;

    function yC(e, t) {
      switch (e) {
        case "compositionend":
          return xf(t);
        case "keypress":
          return t.which !== 32 ? null : (rh = !0, nh);
        case "textInput":
          return e = t.data, e === nh && rh ? null : e;
        default:
          return null
      }
    }

    function _C(e, t) {
      if (w0) return e === "compositionend" || !cc && Sf(e, t) ? (e = Mf(), h2 = oc = jn = null, w0 = !1, e) : null;
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length) return t.char;
            if (t.which) return String.fromCharCode(t.which)
          }
          return null;
        case "compositionend":
          return Zf && t.locale !== "ko" ? null : t.data;
        default:
          return null
      }
    }
    var EC = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    };

    function ah(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!EC[e.type] : t === "textarea"
    }

    function If(e, t, n, a) {
      of(a), t = S2(t, "onChange"), 0 < t.length && (n = new sc("onChange", "change", null, n, a), e.push({
        event: n,
        listeners: t
      }))
    }
    var na = null,
      pa = null;

    function wC(e) {
      Ff(e, 0)
    }

    function q2(e) {
      var t = b0(e);
      if (Xh(t)) return e
    }

    function AC(e, t) {
      if (e === "change") return t
    }
    var Tf = !1;
    yn && (yn ? (Ji = "oninput" in document, Ji || (Gs = document.createElement("div"), Gs.setAttribute("oninput", "return;"), Ji = typeof Gs.oninput == "function"), Xi = Ji) : Xi = !1, Tf = Xi && (!document.documentMode || 9 < document.documentMode));
    var Xi, Ji, Gs;

    function ih() {
      na && (na.detachEvent("onpropertychange", Of), pa = na = null)
    }

    function Of(e) {
      if (e.propertyName === "value" && q2(pa)) {
        var t = [];
        If(t, pa, e, tc(e)), uf(wC, t)
      }
    }

    function CC(e, t, n) {
      e === "focusin" ? (ih(), na = t, pa = n, na.attachEvent("onpropertychange", Of)) : e === "focusout" && ih()
    }

    function bC(e) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown") return q2(pa)
    }

    function MC(e, t) {
      if (e === "click") return q2(t)
    }

    function ZC(e, t) {
      if (e === "input" || e === "change") return q2(t)
    }

    function SC(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
    }
    var L1 = typeof Object.is == "function" ? Object.is : SC;

    function ma(e, t) {
      if (L1(e, t)) return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
      var n = Object.keys(e),
        a = Object.keys(t);
      if (n.length !== a.length) return !1;
      for (a = 0; a < n.length; a++) {
        var o = n[a];
        if (!rl.call(t, o) || !L1(e[o], t[o])) return !1
      }
      return !0
    }

    function oh(e) {
      for (; e && e.firstChild;) e = e.firstChild;
      return e
    }

    function sh(e, t) {
      var n = oh(e);
      e = 0;
      for (var a; n;) {
        if (n.nodeType === 3) {
          if (a = e + n.textContent.length, e <= t && a >= t) return {
            node: n,
            offset: t - e
          };
          e = a
        }
        e: {
          for (; n;) {
            if (n.nextSibling) {
              n = n.nextSibling;
              break e
            }
            n = n.parentNode
          }
          n = void 0
        }
        n = oh(n)
      }
    }

    function kf(e, t) {
      return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? kf(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
    }

    function Lf() {
      for (var e = window, t = E2(); t instanceof e.HTMLIFrameElement;) {
        try {
          var n = typeof t.contentWindow.location.href == "string"
        } catch {
          n = !1
        }
        if (n) e = t.contentWindow;
        else break;
        t = E2(e.document)
      }
      return t
    }

    function uc(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
    }

    function xC(e) {
      var t = Lf(),
        n = e.focusedElem,
        a = e.selectionRange;
      if (t !== n && n && n.ownerDocument && kf(n.ownerDocument.documentElement, n)) {
        if (a !== null && uc(n)) {
          if (t = a.start, e = a.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
          else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
            e = e.getSelection();
            var o = n.textContent.length,
              s = Math.min(a.start, o);
            a = a.end === void 0 ? s : Math.min(a.end, o), !e.extend && s > a && (o = a, a = s, s = o), o = sh(n, s);
            var c = sh(n, a);
            o && c && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== c.node || e.focusOffset !== c.offset) && (t = t.createRange(), t.setStart(o.node, o.offset), e.removeAllRanges(), s > a ? (e.addRange(t), e.extend(c.node, c.offset)) : (t.setEnd(c.node, c.offset), e.addRange(t)))
          }
        }
        for (t = [], e = n; e = e.parentNode;) e.nodeType === 1 && t.push({
          element: e,
          left: e.scrollLeft,
          top: e.scrollTop
        });
        for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
      }
    }
    var IC = yn && "documentMode" in document && 11 >= document.documentMode,
      A0 = null,
      Al = null,
      ra = null,
      Cl = !1;

    function lh(e, t, n) {
      var a = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
      Cl || A0 == null || A0 !== E2(a) || (a = A0, "selectionStart" in a && uc(a) ? a = {
        start: a.selectionStart,
        end: a.selectionEnd
      } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      }), ra && ma(ra, a) || (ra = a, a = S2(Al, "onSelect"), 0 < a.length && (t = new sc("onSelect", "select", null, t, n), e.push({
        event: t,
        listeners: a
      }), t.target = A0)))
    }

    function e2(e, t) {
      var n = {};
      return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
    }
    var C0 = {
      animationend: e2("Animation", "AnimationEnd"),
      animationiteration: e2("Animation", "AnimationIteration"),
      animationstart: e2("Animation", "AnimationStart"),
      transitionend: e2("Transition", "TransitionEnd")
    },
      zs = {},
      Pf = {};
    yn && (Pf = document.createElement("div").style, "AnimationEvent" in window || (delete C0.animationend.animation, delete C0.animationiteration.animation, delete C0.animationstart.animation), "TransitionEvent" in window || delete C0.transitionend.transition);

    function j2(e) {
      if (zs[e]) return zs[e];
      if (!C0[e]) return e;
      var t = C0[e],
        n;
      for (n in t)
        if (t.hasOwnProperty(n) && n in Pf) return zs[e] = t[n];
      return e
    }
    var Rf = j2("animationend"),
      Vf = j2("animationiteration"),
      Nf = j2("animationstart"),
      Hf = j2("transitionend"),
      Df = new Map,
      ch = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

    function i5(e, t) {
      Df.set(e, t), z5(t, [e])
    }
    for (t2 = 0; t2 < ch.length; t2++) n2 = ch[t2], uh = n2.toLowerCase(), hh = n2[0].toUpperCase() + n2.slice(1), i5(uh, "on" + hh);
    var n2, uh, hh, t2;
    i5(Rf, "onAnimationEnd");
    i5(Vf, "onAnimationIteration");
    i5(Nf, "onAnimationStart");
    i5("dblclick", "onDoubleClick");
    i5("focusin", "onFocus");
    i5("focusout", "onBlur");
    i5(Hf, "onTransitionEnd");
    N0("onMouseEnter", ["mouseout", "mouseover"]);
    N0("onMouseLeave", ["mouseout", "mouseover"]);
    N0("onPointerEnter", ["pointerout", "pointerover"]);
    N0("onPointerLeave", ["pointerout", "pointerover"]);
    z5("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
    z5("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
    z5("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
    z5("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
    z5("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
    z5("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var Xr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
      TC = new Set("cancel close invalid load scroll toggle".split(" ").concat(Xr));

    function fh(e, t, n) {
      var a = e.type || "unknown-event";
      e.currentTarget = n, TA(a, t, void 0, e), e.currentTarget = null
    }

    function Ff(e, t) {
      t = (t & 4) !== 0;
      for (var n = 0; n < e.length; n++) {
        var a = e[n],
          o = a.event;
        a = a.listeners;
        e: {
          var s = void 0;
          if (t)
            for (var c = a.length - 1; 0 <= c; c--) {
              var h = a[c],
                f = h.instance,
                p = h.currentTarget;
              if (h = h.listener, f !== s && o.isPropagationStopped()) break e;
              fh(o, h, p), s = f
            } else
            for (c = 0; c < a.length; c++) {
              if (h = a[c], f = h.instance, p = h.currentTarget, h = h.listener, f !== s && o.isPropagationStopped()) break e;
              fh(o, h, p), s = f
            }
        }
      }
      if (A2) throw e = yl, A2 = !1, yl = null, e
    }

    function Le(e, t) {
      var n = t[xl];
      n === void 0 && (n = t[xl] = new Set);
      var a = e + "__bubble";
      n.has(a) || (Uf(t, e, 2, !1), n.add(a))
    }

    function $s(e, t, n) {
      var a = 0;
      t && (a |= 4), Uf(n, e, a, t)
    }
    var r2 = "_reactListening" + Math.random().toString(36).slice(2);

    function va(e) {
      if (!e[r2]) {
        e[r2] = !0, jh.forEach(function (n) {
          n !== "selectionchange" && (TC.has(n) || $s(n, !1, e), $s(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[r2] || (t[r2] = !0, $s("selectionchange", !1, t))
      }
    }

    function Uf(e, t, n, a) {
      switch (bf(t)) {
        case 1:
          var o = qA;
          break;
        case 4:
          o = jA;
          break;
        default:
          o = ic
      }
      n = o.bind(null, t, n, e), o = void 0, !gl || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), a ? o !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: o
      }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, {
        passive: o
      }) : e.addEventListener(t, n, !1)
    }

    function qs(e, t, n, a, o) {
      var s = a;
      if (!(t & 1) && !(t & 2) && a !== null) e: for (; ;) {
        if (a === null) return;
        var c = a.tag;
        if (c === 3 || c === 4) {
          var h = a.stateNode.containerInfo;
          if (h === o || h.nodeType === 8 && h.parentNode === o) break;
          if (c === 4)
            for (c = a.return; c !== null;) {
              var f = c.tag;
              if ((f === 3 || f === 4) && (f = c.stateNode.containerInfo, f === o || f.nodeType === 8 && f.parentNode === o)) return;
              c = c.return
            }
          for (; h !== null;) {
            if (c = P5(h), c === null) return;
            if (f = c.tag, f === 5 || f === 6) {
              a = s = c;
              continue e
            }
            h = h.parentNode
          }
        }
        a = a.return
      }
      uf(function () {
        var p = s,
          _ = tc(n),
          M = [];
        e: {
          var g = Df.get(e);
          if (g !== void 0) {
            var A = sc,
              x = e;
            switch (e) {
              case "keypress":
                if (f2(n) === 0) break e;
              case "keydown":
              case "keyup":
                A = lC;
                break;
              case "focusin":
                x = "focus", A = Bs;
                break;
              case "focusout":
                x = "blur", A = Bs;
                break;
              case "beforeblur":
              case "afterblur":
                A = Bs;
                break;
              case "click":
                if (n.button === 2) break e;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                A = J6;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                A = QA;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                A = hC;
                break;
              case Rf:
              case Vf:
              case Nf:
                A = JA;
                break;
              case Hf:
                A = dC;
                break;
              case "scroll":
                A = WA;
                break;
              case "wheel":
                A = mC;
                break;
              case "copy":
              case "cut":
              case "paste":
                A = tC;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                A = th
            }
            var k = (t & 4) !== 0,
              U = !k && e === "scroll",
              E = k ? g !== null ? g + "Capture" : null : g;
            k = [];
            for (var y = p, C; y !== null;) {
              C = y;
              var b = C.stateNode;
              if (C.tag === 5 && b !== null && (C = b, E !== null && (b = ua(y, E), b != null && k.push(ga(y, b, C)))), U) break;
              y = y.return
            }
            0 < k.length && (g = new A(g, x, null, n, _), M.push({
              event: g,
              listeners: k
            }))
          }
        }
        if (!(t & 7)) {
          e: {
            if (g = e === "mouseover" || e === "pointerover", A = e === "mouseout" || e === "pointerout", g && n !== ml && (x = n.relatedTarget || n.fromElement) && (P5(x) || x[_n])) break e;
            if ((A || g) && (g = _.window === _ ? _ : (g = _.ownerDocument) ? g.defaultView || g.parentWindow : window, A ? (x = n.relatedTarget || n.toElement, A = p, x = x ? P5(x) : null, x !== null && (U = $5(x), x !== U || x.tag !== 5 && x.tag !== 6) && (x = null)) : (A = null, x = p), A !== x)) {
              if (k = J6, b = "onMouseLeave", E = "onMouseEnter", y = "mouse", (e === "pointerout" || e === "pointerover") && (k = th, b = "onPointerLeave", E = "onPointerEnter", y = "pointer"), U = A == null ? g : b0(A), C = x == null ? g : b0(x), g = new k(b, y + "leave", A, n, _), g.target = U, g.relatedTarget = C, b = null, P5(_) === p && (k = new k(E, y + "enter", x, n, _), k.target = C, k.relatedTarget = U, b = k), U = b, A && x) t: {
                for (k = A, E = x, y = 0, C = k; C; C = y0(C)) y++;
                for (C = 0, b = E; b; b = y0(b)) C++;
                for (; 0 < y - C;) k = y0(k),
                  y--;
                for (; 0 < C - y;) E = y0(E),
                  C--;
                for (; y--;) {
                  if (k === E || E !== null && k === E.alternate) break t;
                  k = y0(k), E = y0(E)
                }
                k = null
              }
              else k = null;
              A !== null && dh(M, g, A, k, !1), x !== null && U !== null && dh(M, U, x, k, !0)
            }
          }
          e: {
            if (g = p ? b0(p) : window, A = g.nodeName && g.nodeName.toLowerCase(), A === "select" || A === "input" && g.type === "file") var S = AC;
            else if (ah(g))
              if (Tf) S = ZC;
              else {
                S = bC;
                var L = CC
              }
            else (A = g.nodeName) && A.toLowerCase() === "input" && (g.type === "checkbox" || g.type === "radio") && (S = MC);
            if (S && (S = S(e, p))) {
              If(M, S, n, _);
              break e
            }
            L && L(e, g, p),
              e === "focusout" && (L = g._wrapperState) && L.controlled && g.type === "number" && ul(g, "number", g.value)
          }
          switch (L = p ? b0(p) : window, e) {
            case "focusin":
              (ah(L) || L.contentEditable === "true") && (A0 = L, Al = p, ra = null);
              break;
            case "focusout":
              ra = Al = A0 = null;
              break;
            case "mousedown":
              Cl = !0;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              Cl = !1, lh(M, n, _);
              break;
            case "selectionchange":
              if (IC) break;
            case "keydown":
            case "keyup":
              lh(M, n, _)
          }
          var V;
          if (cc) e: {
            switch (e) {
              case "compositionstart":
                var H = "onCompositionStart";
                break e;
              case "compositionend":
                H = "onCompositionEnd";
                break e;
              case "compositionupdate":
                H = "onCompositionUpdate";
                break e
            }
            H = void 0
          }
          else w0 ? Sf(e, n) && (H = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (H = "onCompositionStart"); H && (Zf && n.locale !== "ko" && (w0 || H !== "onCompositionStart" ? H === "onCompositionEnd" && w0 && (V = Mf()) : (jn = _, oc = "value" in jn ? jn.value : jn.textContent, w0 = !0)), L = S2(p, H), 0 < L.length && (H = new eh(H, e, null, n, _), M.push({
            event: H,
            listeners: L
          }), V ? H.data = V : (V = xf(n), V !== null && (H.data = V)))),
            (V = gC ? yC(e, n) : _C(e, n)) && (p = S2(p, "onBeforeInput"), 0 < p.length && (_ = new eh("onBeforeInput", "beforeinput", null, n, _), M.push({
              event: _,
              listeners: p
            }), _.data = V))
        }
        Ff(M, t)
      })
    }

    function ga(e, t, n) {
      return {
        instance: e,
        listener: t,
        currentTarget: n
      }
    }

    function S2(e, t) {
      for (var n = t + "Capture", a = []; e !== null;) {
        var o = e,
          s = o.stateNode;
        o.tag === 5 && s !== null && (o = s, s = ua(e, n), s != null && a.unshift(ga(e, s, o)), s = ua(e, t), s != null && a.push(ga(e, s, o))), e = e.return
      }
      return a
    }

    function y0(e) {
      if (e === null) return null;
      do e = e.return; while (e && e.tag !== 5);
      return e || null
    }

    function dh(e, t, n, a, o) {
      for (var s = t._reactName, c = []; n !== null && n !== a;) {
        var h = n,
          f = h.alternate,
          p = h.stateNode;
        if (f !== null && f === a) break;
        h.tag === 5 && p !== null && (h = p, o ? (f = ua(n, s), f != null && c.unshift(ga(n, f, h))) : o || (f = ua(n, s), f != null && c.push(ga(n, f, h)))), n = n.return
      }
      c.length !== 0 && e.push({
        event: t,
        listeners: c
      })
    }
    var OC = /\r\n?/g,
      kC = /\u0000|\uFFFD/g;

    function ph(e) {
      return (typeof e == "string" ? e : "" + e).replace(OC, `
`).replace(kC, "")
    }

    function a2(e, t, n) {
      if (t = ph(t), ph(e) !== t && n) throw Error(G(425))
    }

    function x2() { }
    var bl = null,
      Ml = null;

    function Zl(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
    }
    var Sl = typeof setTimeout == "function" ? setTimeout : void 0,
      LC = typeof clearTimeout == "function" ? clearTimeout : void 0,
      mh = typeof Promise == "function" ? Promise : void 0,
      PC = typeof queueMicrotask == "function" ? queueMicrotask : typeof mh < "u" ? function (e) {
        return mh.resolve(null).then(e).catch(RC)
      } : Sl;

    function RC(e) {
      setTimeout(function () {
        throw e
      })
    }

    function js(e, t) {
      var n = t,
        a = 0;
      do {
        var o = n.nextSibling;
        if (e.removeChild(n), o && o.nodeType === 8)
          if (n = o.data, n === "/$") {
            if (a === 0) {
              e.removeChild(o), da(t);
              return
            }
            a--
          } else n !== "$" && n !== "$?" && n !== "$!" || a++;
        n = o
      } while (n);
      da(t)
    }

    function Xn(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
          if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
          if (t === "/$") return null
        }
      }
      return e
    }

    function vh(e) {
      e = e.previousSibling;
      for (var t = 0; e;) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "$" || n === "$!" || n === "$?") {
            if (t === 0) return e;
            t--
          } else n === "/$" && t++
        }
        e = e.previousSibling
      }
      return null
    }
    var $0 = Math.random().toString(36).slice(2),
      q1 = "__reactFiber$" + $0,
      ya = "__reactProps$" + $0,
      _n = "__reactContainer$" + $0,
      xl = "__reactEvents$" + $0,
      VC = "__reactListeners$" + $0,
      NC = "__reactHandles$" + $0;

    function P5(e) {
      var t = e[q1];
      if (t) return t;
      for (var n = e.parentNode; n;) {
        if (t = n[_n] || n[q1]) {
          if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
            for (e = vh(e); e !== null;) {
              if (n = e[q1]) return n;
              e = vh(e)
            }
          return t
        }
        e = n, n = e.parentNode
      }
      return null
    }

    function Sa(e) {
      return e = e[q1] || e[_n], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
    }

    function b0(e) {
      if (e.tag === 5 || e.tag === 6) return e.stateNode;
      throw Error(G(33))
    }

    function W2(e) {
      return e[ya] || null
    }
    var Il = [],
      M0 = -1;

    function o5(e) {
      return {
        current: e
      }
    }

    function Pe(e) {
      0 > M0 || (e.current = Il[M0], Il[M0] = null, M0--)
    }

    function Oe(e, t) {
      M0++, Il[M0] = e.current, e.current = t
    }
    var a5 = {},
      _t = o5(a5),
      Rt = o5(!1),
      D5 = a5;

    function H0(e, t) {
      var n = e.type.contextTypes;
      if (!n) return a5;
      var a = e.stateNode;
      if (a && a.__reactInternalMemoizedUnmaskedChildContext === t) return a.__reactInternalMemoizedMaskedChildContext;
      var o = {},
        s;
      for (s in n) o[s] = t[s];
      return a && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o
    }

    function Vt(e) {
      return e = e.childContextTypes, e != null
    }

    function I2() {
      Pe(Rt), Pe(_t)
    }

    function gh(e, t, n) {
      if (_t.current !== a5) throw Error(G(168));
      Oe(_t, t), Oe(Rt, n)
    }

    function Bf(e, t, n) {
      var a = e.stateNode;
      if (t = t.childContextTypes, typeof a.getChildContext != "function") return n;
      a = a.getChildContext();
      for (var o in a)
        if (!(o in t)) throw Error(G(108, CA(e) || "Unknown", o));
      return Ue({}, n, a)
    }

    function T2(e) {
      return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || a5, D5 = _t.current, Oe(_t, e), Oe(Rt, Rt.current), !0
    }

    function yh(e, t, n) {
      var a = e.stateNode;
      if (!a) throw Error(G(169));
      n ? (e = Bf(e, t, D5), a.__reactInternalMemoizedMergedChildContext = e, Pe(Rt), Pe(_t), Oe(_t, e)) : Pe(Rt), Oe(Rt, n)
    }
    var pn = null,
      K2 = !1,
      Ws = !1;

    function Gf(e) {
      pn === null ? pn = [e] : pn.push(e)
    }

    function HC(e) {
      K2 = !0, Gf(e)
    }

    function s5() {
      if (!Ws && pn !== null) {
        Ws = !0;
        var e = 0,
          t = Ze;
        try {
          var n = pn;
          for (Ze = 1; e < n.length; e++) {
            var a = n[e];
            do a = a(!0); while (a !== null)
          }
          pn = null, K2 = !1
        } catch (o) {
          throw pn !== null && (pn = pn.slice(e + 1)), pf(nc, s5), o
        } finally {
          Ze = t, Ws = !1
        }
      }
      return null
    }
    var Z0 = [],
      S0 = 0,
      O2 = null,
      k2 = 0,
      h1 = [],
      f1 = 0,
      F5 = null,
      mn = 1,
      vn = "";

    function k5(e, t) {
      Z0[S0++] = k2, Z0[S0++] = O2, O2 = e, k2 = t
    }

    function zf(e, t, n) {
      h1[f1++] = mn, h1[f1++] = vn, h1[f1++] = F5, F5 = e;
      var a = mn;
      e = vn;
      var o = 32 - O1(a) - 1;
      a &= ~(1 << o), n += 1;
      var s = 32 - O1(t) + o;
      if (30 < s) {
        var c = o - o % 5;
        s = (a & (1 << c) - 1).toString(32), a >>= c, o -= c, mn = 1 << 32 - O1(t) + o | n << o | a, vn = s + e
      } else mn = 1 << s | n << o | a, vn = e
    }

    function hc(e) {
      e.return !== null && (k5(e, 1), zf(e, 1, 0))
    }

    function fc(e) {
      for (; e === O2;) O2 = Z0[--S0], Z0[S0] = null, k2 = Z0[--S0], Z0[S0] = null;
      for (; e === F5;) F5 = h1[--f1], h1[f1] = null, vn = h1[--f1], h1[f1] = null, mn = h1[--f1], h1[f1] = null
    }
    var qt = null,
      $t = null,
      Ne = !1,
      T1 = null;

    function $f(e, t) {
      var n = d1(5, null, null, 0);
      n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n)
    }

    function _h(e, t) {
      switch (e.tag) {
        case 5:
          var n = e.type;
          return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, qt = e, $t = Xn(t.firstChild), !0) : !1;
        case 6:
          return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, qt = e, $t = null, !0) : !1;
        case 13:
          return t = t.nodeType !== 8 ? null : t, t !== null ? (n = F5 !== null ? {
            id: mn,
            overflow: vn
          } : null, e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824
          }, n = d1(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, qt = e, $t = null, !0) : !1;
        default:
          return !1
      }
    }

    function Tl(e) {
      return (e.mode & 1) !== 0 && (e.flags & 128) === 0
    }

    function Ol(e) {
      if (Ne) {
        var t = $t;
        if (t) {
          var n = t;
          if (!_h(e, t)) {
            if (Tl(e)) throw Error(G(418));
            t = Xn(n.nextSibling);
            var a = qt;
            t && _h(e, t) ? $f(a, n) : (e.flags = e.flags & -4097 | 2, Ne = !1, qt = e)
          }
        } else {
          if (Tl(e)) throw Error(G(418));
          e.flags = e.flags & -4097 | 2, Ne = !1, qt = e
        }
      }
    }

    function Eh(e) {
      for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
      qt = e
    }

    function i2(e) {
      if (e !== qt) return !1;
      if (!Ne) return Eh(e), Ne = !0, !1;
      var t;
      if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Zl(e.type, e.memoizedProps)), t && (t = $t)) {
        if (Tl(e)) throw qf(), Error(G(418));
        for (; t;) $f(e, t), t = Xn(t.nextSibling)
      }
      if (Eh(e), e.tag === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(G(317));
        e: {
          for (e = e.nextSibling, t = 0; e;) {
            if (e.nodeType === 8) {
              var n = e.data;
              if (n === "/$") {
                if (t === 0) {
                  $t = Xn(e.nextSibling);
                  break e
                }
                t--
              } else n !== "$" && n !== "$!" && n !== "$?" || t++
            }
            e = e.nextSibling
          }
          $t = null
        }
      } else $t = qt ? Xn(e.stateNode.nextSibling) : null;
      return !0
    }

    function qf() {
      for (var e = $t; e;) e = Xn(e.nextSibling)
    }

    function D0() {
      $t = qt = null, Ne = !1
    }

    function dc(e) {
      T1 === null ? T1 = [e] : T1.push(e)
    }
    var DC = An.ReactCurrentBatchConfig;

    function x1(e, t) {
      if (e && e.defaultProps) {
        t = Ue({}, t), e = e.defaultProps;
        for (var n in e) t[n] === void 0 && (t[n] = e[n]);
        return t
      }
      return t
    }
    var L2 = o5(null),
      P2 = null,
      x0 = null,
      pc = null;

    function mc() {
      pc = x0 = P2 = null
    }

    function vc(e) {
      var t = L2.current;
      Pe(L2), e._currentValue = t
    }

    function kl(e, t, n) {
      for (; e !== null;) {
        var a = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), e === n) break;
        e = e.return
      }
    }

    function R0(e, t) {
      P2 = e, pc = x0 = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Pt = !0), e.firstContext = null)
    }

    function m1(e) {
      var t = e._currentValue;
      if (pc !== e)
        if (e = {
          context: e,
          memoizedValue: t,
          next: null
        }, x0 === null) {
          if (P2 === null) throw Error(G(308));
          x0 = e, P2.dependencies = {
            lanes: 0,
            firstContext: e
          }
        } else x0 = x0.next = e;
      return t
    }
    var R5 = null;

    function gc(e) {
      R5 === null ? R5 = [e] : R5.push(e)
    }

    function jf(e, t, n, a) {
      var o = t.interleaved;
      return o === null ? (n.next = n, gc(t)) : (n.next = o.next, o.next = n), t.interleaved = n, En(e, a)
    }

    function En(e, t) {
      e.lanes |= t;
      var n = e.alternate;
      for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
      return n.tag === 3 ? n.stateNode : null
    }
    var zn = !1;

    function yc(e) {
      e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: 0
        },
        effects: null
      }
    }

    function Wf(e, t) {
      e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
      })
    }

    function gn(e, t) {
      return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
      }
    }

    function Jn(e, t, n) {
      var a = e.updateQueue;
      if (a === null) return null;
      if (a = a.shared, _e & 2) {
        var o = a.pending;
        return o === null ? t.next = t : (t.next = o.next, o.next = t), a.pending = t, En(e, n)
      }
      return o = a.interleaved, o === null ? (t.next = t, gc(a)) : (t.next = o.next, o.next = t), a.interleaved = t, En(e, n)
    }

    function d2(e, t, n) {
      if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
        var a = t.lanes;
        a &= e.pendingLanes, n |= a, t.lanes = n, rc(e, n)
      }
    }

    function wh(e, t) {
      var n = e.updateQueue,
        a = e.alternate;
      if (a !== null && (a = a.updateQueue, n === a)) {
        var o = null,
          s = null;
        if (n = n.firstBaseUpdate, n !== null) {
          do {
            var c = {
              eventTime: n.eventTime,
              lane: n.lane,
              tag: n.tag,
              payload: n.payload,
              callback: n.callback,
              next: null
            };
            s === null ? o = s = c : s = s.next = c, n = n.next
          } while (n !== null);
          s === null ? o = s = t : s = s.next = t
        } else o = s = t;
        n = {
          baseState: a.baseState,
          firstBaseUpdate: o,
          lastBaseUpdate: s,
          shared: a.shared,
          effects: a.effects
        }, e.updateQueue = n;
        return
      }
      e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
    }

    function R2(e, t, n, a) {
      var o = e.updateQueue;
      zn = !1;
      var s = o.firstBaseUpdate,
        c = o.lastBaseUpdate,
        h = o.shared.pending;
      if (h !== null) {
        o.shared.pending = null;
        var f = h,
          p = f.next;
        f.next = null, c === null ? s = p : c.next = p, c = f;
        var _ = e.alternate;
        _ !== null && (_ = _.updateQueue, h = _.lastBaseUpdate, h !== c && (h === null ? _.firstBaseUpdate = p : h.next = p, _.lastBaseUpdate = f))
      }
      if (s !== null) {
        var M = o.baseState;
        c = 0, _ = p = f = null, h = s;
        do {
          var g = h.lane,
            A = h.eventTime;
          if ((a & g) === g) {
            _ !== null && (_ = _.next = {
              eventTime: A,
              lane: 0,
              tag: h.tag,
              payload: h.payload,
              callback: h.callback,
              next: null
            });
            e: {
              var x = e,
                k = h;
              switch (g = t, A = n, k.tag) {
                case 1:
                  if (x = k.payload, typeof x == "function") {
                    M = x.call(A, M, g);
                    break e
                  }
                  M = x;
                  break e;
                case 3:
                  x.flags = x.flags & -65537 | 128;
                case 0:
                  if (x = k.payload, g = typeof x == "function" ? x.call(A, M, g) : x, g == null) break e;
                  M = Ue({}, M, g);
                  break e;
                case 2:
                  zn = !0
              }
            }
            h.callback !== null && h.lane !== 0 && (e.flags |= 64, g = o.effects, g === null ? o.effects = [h] : g.push(h))
          } else A = {
            eventTime: A,
            lane: g,
            tag: h.tag,
            payload: h.payload,
            callback: h.callback,
            next: null
          }, _ === null ? (p = _ = A, f = M) : _ = _.next = A, c |= g;
          if (h = h.next, h === null) {
            if (h = o.shared.pending, h === null) break;
            g = h, h = g.next, g.next = null, o.lastBaseUpdate = g, o.shared.pending = null
          }
        } while (1);
        if (_ === null && (f = M), o.baseState = f, o.firstBaseUpdate = p, o.lastBaseUpdate = _, t = o.shared.interleaved, t !== null) {
          o = t;
          do c |= o.lane, o = o.next; while (o !== t)
        } else s === null && (o.shared.lanes = 0);
        B5 |= c, e.lanes = c, e.memoizedState = M
      }
    }

    function Ah(e, t, n) {
      if (e = t.effects, t.effects = null, e !== null)
        for (t = 0; t < e.length; t++) {
          var a = e[t],
            o = a.callback;
          if (o !== null) {
            if (a.callback = null, a = n, typeof o != "function") throw Error(G(191, o));
            o.call(a)
          }
        }
    }
    var Kf = new qh.Component().refs;

    function Ll(e, t, n, a) {
      t = e.memoizedState, n = n(a, t), n = n == null ? t : Ue({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n)
    }
    var Q2 = {
      isMounted: function (e) {
        return (e = e._reactInternals) ? $5(e) === e : !1
      },
      enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var a = Zt(),
          o = t5(e),
          s = gn(a, o);
        s.payload = t, n != null && (s.callback = n), t = Jn(e, s, o), t !== null && (k1(t, e, o, a), d2(t, e, o))
      },
      enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var a = Zt(),
          o = t5(e),
          s = gn(a, o);
        s.tag = 1, s.payload = t, n != null && (s.callback = n), t = Jn(e, s, o), t !== null && (k1(t, e, o, a), d2(t, e, o))
      },
      enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = Zt(),
          a = t5(e),
          o = gn(n, a);
        o.tag = 2, t != null && (o.callback = t), t = Jn(e, o, a), t !== null && (k1(t, e, a, n), d2(t, e, a))
      }
    };

    function Ch(e, t, n, a, o, s, c) {
      return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(a, s, c) : t.prototype && t.prototype.isPureReactComponent ? !ma(n, a) || !ma(o, s) : !0
    }

    function Qf(e, t, n) {
      var a = !1,
        o = a5,
        s = t.contextType;
      return typeof s == "object" && s !== null ? s = m1(s) : (o = Vt(t) ? D5 : _t.current, a = t.contextTypes, s = (a = a != null) ? H0(e, o) : a5), t = new t(n, s), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Q2, e.stateNode = t, t._reactInternals = e, a && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = s), t
    }

    function bh(e, t, n, a) {
      e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, a), t.state !== e && Q2.enqueueReplaceState(t, t.state, null)
    }

    function Pl(e, t, n, a) {
      var o = e.stateNode;
      o.props = n, o.state = e.memoizedState, o.refs = Kf, yc(e);
      var s = t.contextType;
      typeof s == "object" && s !== null ? o.context = m1(s) : (s = Vt(t) ? D5 : _t.current, o.context = H0(e, s)), o.state = e.memoizedState, s = t.getDerivedStateFromProps, typeof s == "function" && (Ll(e, t, s, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && Q2.enqueueReplaceState(o, o.state, null), R2(e, n, o, a), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308)
    }

    function $r(e, t, n) {
      if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
          if (n = n._owner, n) {
            if (n.tag !== 1) throw Error(G(309));
            var a = n.stateNode
          }
          if (!a) throw Error(G(147, e));
          var o = a,
            s = "" + e;
          return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === s ? t.ref : (t = function (c) {
            var h = o.refs;
            h === Kf && (h = o.refs = {}), c === null ? delete h[s] : h[s] = c
          }, t._stringRef = s, t)
        }
        if (typeof e != "string") throw Error(G(284));
        if (!n._owner) throw Error(G(290, e))
      }
      return e
    }

    function o2(e, t) {
      throw e = Object.prototype.toString.call(t), Error(G(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
    }

    function Mh(e) {
      var t = e._init;
      return t(e._payload)
    }

    function Yf(e) {
      function t(E, y) {
        if (e) {
          var C = E.deletions;
          C === null ? (E.deletions = [y], E.flags |= 16) : C.push(y)
        }
      }

      function n(E, y) {
        if (!e) return null;
        for (; y !== null;) t(E, y), y = y.sibling;
        return null
      }

      function a(E, y) {
        for (E = new Map; y !== null;) y.key !== null ? E.set(y.key, y) : E.set(y.index, y), y = y.sibling;
        return E
      }

      function o(E, y) {
        return E = n5(E, y), E.index = 0, E.sibling = null, E
      }

      function s(E, y, C) {
        return E.index = C, e ? (C = E.alternate, C !== null ? (C = C.index, C < y ? (E.flags |= 2, y) : C) : (E.flags |= 2, y)) : (E.flags |= 1048576, y)
      }

      function c(E) {
        return e && E.alternate === null && (E.flags |= 2), E
      }

      function h(E, y, C, b) {
        return y === null || y.tag !== 6 ? (y = tl(C, E.mode, b), y.return = E, y) : (y = o(y, C), y.return = E, y)
      }

      function f(E, y, C, b) {
        var S = C.type;
        return S === E0 ? _(E, y, C.props.children, b, C.key) : y !== null && (y.elementType === S || typeof S == "object" && S !== null && S.$$typeof === Gn && Mh(S) === y.type) ? (b = o(y, C.props), b.ref = $r(E, y, C), b.return = E, b) : (b = _2(C.type, C.key, C.props, null, E.mode, b), b.ref = $r(E, y, C), b.return = E, b)
      }

      function p(E, y, C, b) {
        return y === null || y.tag !== 4 || y.stateNode.containerInfo !== C.containerInfo || y.stateNode.implementation !== C.implementation ? (y = nl(C, E.mode, b), y.return = E, y) : (y = o(y, C.children || []), y.return = E, y)
      }

      function _(E, y, C, b, S) {
        return y === null || y.tag !== 7 ? (y = H5(C, E.mode, b, S), y.return = E, y) : (y = o(y, C), y.return = E, y)
      }

      function M(E, y, C) {
        if (typeof y == "string" && y !== "" || typeof y == "number") return y = tl("" + y, E.mode, C), y.return = E, y;
        if (typeof y == "object" && y !== null) {
          switch (y.$$typeof) {
            case $i:
              return C = _2(y.type, y.key, y.props, null, E.mode, C), C.ref = $r(E, null, y), C.return = E, C;
            case _0:
              return y = nl(y, E.mode, C), y.return = E, y;
            case Gn:
              var b = y._init;
              return M(E, b(y._payload), C)
          }
          if (Qr(y) || Ur(y)) return y = H5(y, E.mode, C, null), y.return = E, y;
          o2(E, y)
        }
        return null
      }

      function g(E, y, C, b) {
        var S = y !== null ? y.key : null;
        if (typeof C == "string" && C !== "" || typeof C == "number") return S !== null ? null : h(E, y, "" + C, b);
        if (typeof C == "object" && C !== null) {
          switch (C.$$typeof) {
            case $i:
              return C.key === S ? f(E, y, C, b) : null;
            case _0:
              return C.key === S ? p(E, y, C, b) : null;
            case Gn:
              return S = C._init, g(E, y, S(C._payload), b)
          }
          if (Qr(C) || Ur(C)) return S !== null ? null : _(E, y, C, b, null);
          o2(E, C)
        }
        return null
      }

      function A(E, y, C, b, S) {
        if (typeof b == "string" && b !== "" || typeof b == "number") return E = E.get(C) || null, h(y, E, "" + b, S);
        if (typeof b == "object" && b !== null) {
          switch (b.$$typeof) {
            case $i:
              return E = E.get(b.key === null ? C : b.key) || null, f(y, E, b, S);
            case _0:
              return E = E.get(b.key === null ? C : b.key) || null, p(y, E, b, S);
            case Gn:
              var L = b._init;
              return A(E, y, C, L(b._payload), S)
          }
          if (Qr(b) || Ur(b)) return E = E.get(C) || null, _(y, E, b, S, null);
          o2(y, b)
        }
        return null
      }

      function x(E, y, C, b) {
        for (var S = null, L = null, V = y, H = y = 0, he = null; V !== null && H < C.length; H++) {
          V.index > H ? (he = V, V = null) : he = V.sibling;
          var ne = g(E, V, C[H], b);
          if (ne === null) {
            V === null && (V = he);
            break
          }
          e && V && ne.alternate === null && t(E, V), y = s(ne, y, H), L === null ? S = ne : L.sibling = ne, L = ne, V = he
        }
        if (H === C.length) return n(E, V), Ne && k5(E, H), S;
        if (V === null) {
          for (; H < C.length; H++) V = M(E, C[H], b), V !== null && (y = s(V, y, H), L === null ? S = V : L.sibling = V, L = V);
          return Ne && k5(E, H), S
        }
        for (V = a(E, V); H < C.length; H++) he = A(V, E, H, C[H], b), he !== null && (e && he.alternate !== null && V.delete(he.key === null ? H : he.key), y = s(he, y, H), L === null ? S = he : L.sibling = he, L = he);
        return e && V.forEach(function ($) {
          return t(E, $)
        }), Ne && k5(E, H), S
      }

      function k(E, y, C, b) {
        var S = Ur(C);
        if (typeof S != "function") throw Error(G(150));
        if (C = S.call(C), C == null) throw Error(G(151));
        for (var L = S = null, V = y, H = y = 0, he = null, ne = C.next(); V !== null && !ne.done; H++, ne = C.next()) {
          V.index > H ? (he = V, V = null) : he = V.sibling;
          var $ = g(E, V, ne.value, b);
          if ($ === null) {
            V === null && (V = he);
            break
          }
          e && V && $.alternate === null && t(E, V), y = s($, y, H), L === null ? S = $ : L.sibling = $, L = $, V = he
        }
        if (ne.done) return n(E, V), Ne && k5(E, H), S;
        if (V === null) {
          for (; !ne.done; H++, ne = C.next()) ne = M(E, ne.value, b), ne !== null && (y = s(ne, y, H), L === null ? S = ne : L.sibling = ne, L = ne);
          return Ne && k5(E, H), S
        }
        for (V = a(E, V); !ne.done; H++, ne = C.next()) ne = A(V, E, H, ne.value, b), ne !== null && (e && ne.alternate !== null && V.delete(ne.key === null ? H : ne.key), y = s(ne, y, H), L === null ? S = ne : L.sibling = ne, L = ne);
        return e && V.forEach(function (j) {
          return t(E, j)
        }), Ne && k5(E, H), S
      }

      function U(E, y, C, b) {
        if (typeof C == "object" && C !== null && C.type === E0 && C.key === null && (C = C.props.children), typeof C == "object" && C !== null) {
          switch (C.$$typeof) {
            case $i:
              e: {
                for (var S = C.key, L = y; L !== null;) {
                  if (L.key === S) {
                    if (S = C.type, S === E0) {
                      if (L.tag === 7) {
                        n(E, L.sibling), y = o(L, C.props.children), y.return = E, E = y;
                        break e
                      }
                    } else if (L.elementType === S || typeof S == "object" && S !== null && S.$$typeof === Gn && Mh(S) === L.type) {
                      n(E, L.sibling), y = o(L, C.props), y.ref = $r(E, L, C), y.return = E, E = y;
                      break e
                    }
                    n(E, L);
                    break
                  } else t(E, L);
                  L = L.sibling
                }
                C.type === E0 ? (y = H5(C.props.children, E.mode, b, C.key), y.return = E, E = y) : (b = _2(C.type, C.key, C.props, null, E.mode, b), b.ref = $r(E, y, C), b.return = E, E = b)
              }
              return c(E);
            case _0:
              e: {
                for (L = C.key; y !== null;) {
                  if (y.key === L)
                    if (y.tag === 4 && y.stateNode.containerInfo === C.containerInfo && y.stateNode.implementation === C.implementation) {
                      n(E, y.sibling), y = o(y, C.children || []), y.return = E, E = y;
                      break e
                    } else {
                      n(E, y);
                      break
                    }
                  else t(E, y);
                  y = y.sibling
                }
                y = nl(C, E.mode, b),
                  y.return = E,
                  E = y
              }
              return c(E);
            case Gn:
              return L = C._init, U(E, y, L(C._payload), b)
          }
          if (Qr(C)) return x(E, y, C, b);
          if (Ur(C)) return k(E, y, C, b);
          o2(E, C)
        }
        return typeof C == "string" && C !== "" || typeof C == "number" ? (C = "" + C, y !== null && y.tag === 6 ? (n(E, y.sibling), y = o(y, C), y.return = E, E = y) : (n(E, y), y = tl(C, E.mode, b), y.return = E, E = y), c(E)) : n(E, y)
      }
      return U
    }
    var F0 = Yf(!0),
      Xf = Yf(!1),
      xa = {},
      W1 = o5(xa),
      _a = o5(xa),
      Ea = o5(xa);

    function V5(e) {
      if (e === xa) throw Error(G(174));
      return e
    }

    function _c(e, t) {
      switch (Oe(Ea, t), Oe(_a, e), Oe(W1, xa), e = t.nodeType, e) {
        case 9:
        case 11:
          t = (t = t.documentElement) ? t.namespaceURI : fl(null, "");
          break;
        default:
          e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = fl(t, e)
      }
      Pe(W1), Oe(W1, t)
    }

    function U0() {
      Pe(W1), Pe(_a), Pe(Ea)
    }

    function Jf(e) {
      V5(Ea.current);
      var t = V5(W1.current),
        n = fl(t, e.type);
      t !== n && (Oe(_a, e), Oe(W1, n))
    }

    function Ec(e) {
      _a.current === e && (Pe(W1), Pe(_a))
    }
    var De = o5(0);

    function V2(e) {
      for (var t = e; t !== null;) {
        if (t.tag === 13) {
          var n = t.memoizedState;
          if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
          if (t.flags & 128) return t
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue
        }
        if (t === e) break;
        for (; t.sibling === null;) {
          if (t.return === null || t.return === e) return null;
          t = t.return
        }
        t.sibling.return = t.return, t = t.sibling
      }
      return null
    }
    var Ks = [];

    function wc() {
      for (var e = 0; e < Ks.length; e++) Ks[e]._workInProgressVersionPrimary = null;
      Ks.length = 0
    }
    var p2 = An.ReactCurrentDispatcher,
      Qs = An.ReactCurrentBatchConfig,
      U5 = 0,
      Fe = null,
      Je = null,
      it = null,
      N2 = !1,
      aa = !1,
      wa = 0,
      FC = 0;

    function vt() {
      throw Error(G(321))
    }

    function Ac(e, t) {
      if (t === null) return !1;
      for (var n = 0; n < t.length && n < e.length; n++)
        if (!L1(e[n], t[n])) return !1;
      return !0
    }

    function Cc(e, t, n, a, o, s) {
      if (U5 = s, Fe = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, p2.current = e === null || e.memoizedState === null ? zC : $C, e = n(a, o), aa) {
        s = 0;
        do {
          if (aa = !1, wa = 0, 25 <= s) throw Error(G(301));
          s += 1, it = Je = null, t.updateQueue = null, p2.current = qC, e = n(a, o)
        } while (aa)
      }
      if (p2.current = H2, t = Je !== null && Je.next !== null, U5 = 0, it = Je = Fe = null, N2 = !1, t) throw Error(G(300));
      return e
    }

    function bc() {
      var e = wa !== 0;
      return wa = 0, e
    }

    function $1() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return it === null ? Fe.memoizedState = it = e : it = it.next = e, it
    }

    function v1() {
      if (Je === null) {
        var e = Fe.alternate;
        e = e !== null ? e.memoizedState : null
      } else e = Je.next;
      var t = it === null ? Fe.memoizedState : it.next;
      if (t !== null) it = t, Je = e;
      else {
        if (e === null) throw Error(G(310));
        Je = e, e = {
          memoizedState: Je.memoizedState,
          baseState: Je.baseState,
          baseQueue: Je.baseQueue,
          queue: Je.queue,
          next: null
        }, it === null ? Fe.memoizedState = it = e : it = it.next = e
      }
      return it
    }

    function Aa(e, t) {
      return typeof t == "function" ? t(e) : t
    }

    function Ys(e) {
      var t = v1(),
        n = t.queue;
      if (n === null) throw Error(G(311));
      n.lastRenderedReducer = e;
      var a = Je,
        o = a.baseQueue,
        s = n.pending;
      if (s !== null) {
        if (o !== null) {
          var c = o.next;
          o.next = s.next, s.next = c
        }
        a.baseQueue = o = s, n.pending = null
      }
      if (o !== null) {
        s = o.next, a = a.baseState;
        var h = c = null,
          f = null,
          p = s;
        do {
          var _ = p.lane;
          if ((U5 & _) === _) f !== null && (f = f.next = {
            lane: 0,
            action: p.action,
            hasEagerState: p.hasEagerState,
            eagerState: p.eagerState,
            next: null
          }), a = p.hasEagerState ? p.eagerState : e(a, p.action);
          else {
            var M = {
              lane: _,
              action: p.action,
              hasEagerState: p.hasEagerState,
              eagerState: p.eagerState,
              next: null
            };
            f === null ? (h = f = M, c = a) : f = f.next = M, Fe.lanes |= _, B5 |= _
          }
          p = p.next
        } while (p !== null && p !== s);
        f === null ? c = a : f.next = h, L1(a, t.memoizedState) || (Pt = !0), t.memoizedState = a, t.baseState = c, t.baseQueue = f, n.lastRenderedState = a
      }
      if (e = n.interleaved, e !== null) {
        o = e;
        do s = o.lane, Fe.lanes |= s, B5 |= s, o = o.next; while (o !== e)
      } else o === null && (n.lanes = 0);
      return [t.memoizedState, n.dispatch]
    }

    function Xs(e) {
      var t = v1(),
        n = t.queue;
      if (n === null) throw Error(G(311));
      n.lastRenderedReducer = e;
      var a = n.dispatch,
        o = n.pending,
        s = t.memoizedState;
      if (o !== null) {
        n.pending = null;
        var c = o = o.next;
        do s = e(s, c.action), c = c.next; while (c !== o);
        L1(s, t.memoizedState) || (Pt = !0), t.memoizedState = s, t.baseQueue === null && (t.baseState = s), n.lastRenderedState = s
      }
      return [s, a]
    }

    function e8() { }

    function t8(e, t) {
      var n = Fe,
        a = v1(),
        o = t(),
        s = !L1(a.memoizedState, o);
      if (s && (a.memoizedState = o, Pt = !0), a = a.queue, Mc(a8.bind(null, n, a, e), [e]), a.getSnapshot !== t || s || it !== null && it.memoizedState.tag & 1) {
        if (n.flags |= 2048, Ca(9, r8.bind(null, n, a, o, t), void 0, null), ot === null) throw Error(G(349));
        U5 & 30 || n8(n, t, o)
      }
      return o
    }

    function n8(e, t, n) {
      e.flags |= 16384, e = {
        getSnapshot: t,
        value: n
      }, t = Fe.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
      }, Fe.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e))
    }

    function r8(e, t, n, a) {
      t.value = n, t.getSnapshot = a, i8(t) && o8(e)
    }

    function a8(e, t, n) {
      return n(function () {
        i8(t) && o8(e)
      })
    }

    function i8(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var n = t();
        return !L1(e, n)
      } catch {
        return !0
      }
    }

    function o8(e) {
      var t = En(e, 1);
      t !== null && k1(t, e, 1, -1)
    }

    function Zh(e) {
      var t = $1();
      return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Aa,
        lastRenderedState: e
      }, t.queue = e, e = e.dispatch = GC.bind(null, Fe, e), [t.memoizedState, e]
    }

    function Ca(e, t, n, a) {
      return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: a,
        next: null
      }, t = Fe.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
      }, Fe.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (a = n.next, n.next = e, e.next = a, t.lastEffect = e)), e
    }

    function s8() {
      return v1().memoizedState
    }

    function m2(e, t, n, a) {
      var o = $1();
      Fe.flags |= e, o.memoizedState = Ca(1 | t, n, void 0, a === void 0 ? null : a)
    }

    function Y2(e, t, n, a) {
      var o = v1();
      a = a === void 0 ? null : a;
      var s = void 0;
      if (Je !== null) {
        var c = Je.memoizedState;
        if (s = c.destroy, a !== null && Ac(a, c.deps)) {
          o.memoizedState = Ca(t, n, s, a);
          return
        }
      }
      Fe.flags |= e, o.memoizedState = Ca(1 | t, n, s, a)
    }

    function Sh(e, t) {
      return m2(8390656, 8, e, t)
    }

    function Mc(e, t) {
      return Y2(2048, 8, e, t)
    }

    function l8(e, t) {
      return Y2(4, 2, e, t)
    }

    function c8(e, t) {
      return Y2(4, 4, e, t)
    }

    function u8(e, t) {
      if (typeof t == "function") return e = e(), t(e),
        function () {
          t(null)
        };
      if (t != null) return e = e(), t.current = e,
        function () {
          t.current = null
        }
    }

    function h8(e, t, n) {
      return n = n != null ? n.concat([e]) : null, Y2(4, 4, u8.bind(null, t, e), n)
    }

    function Zc() { }

    function f8(e, t) {
      var n = v1();
      t = t === void 0 ? null : t;
      var a = n.memoizedState;
      return a !== null && t !== null && Ac(t, a[1]) ? a[0] : (n.memoizedState = [e, t], e)
    }

    function d8(e, t) {
      var n = v1();
      t = t === void 0 ? null : t;
      var a = n.memoizedState;
      return a !== null && t !== null && Ac(t, a[1]) ? a[0] : (e = e(), n.memoizedState = [e, t], e)
    }

    function p8(e, t, n) {
      return U5 & 21 ? (L1(n, t) || (n = gf(), Fe.lanes |= n, B5 |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Pt = !0), e.memoizedState = n)
    }

    function UC(e, t) {
      var n = Ze;
      Ze = n !== 0 && 4 > n ? n : 4, e(!0);
      var a = Qs.transition;
      Qs.transition = {};
      try {
        e(!1), t()
      } finally {
        Ze = n, Qs.transition = a
      }
    }

    function m8() {
      return v1().memoizedState
    }

    function BC(e, t, n) {
      var a = t5(e);
      if (n = {
        lane: a,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
      }, v8(e)) g8(t, n);
      else if (n = jf(e, t, n, a), n !== null) {
        var o = Zt();
        k1(n, e, a, o), y8(n, t, a)
      }
    }

    function GC(e, t, n) {
      var a = t5(e),
        o = {
          lane: a,
          action: n,
          hasEagerState: !1,
          eagerState: null,
          next: null
        };
      if (v8(e)) g8(t, o);
      else {
        var s = e.alternate;
        if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = t.lastRenderedReducer, s !== null)) try {
          var c = t.lastRenderedState,
            h = s(c, n);
          if (o.hasEagerState = !0, o.eagerState = h, L1(h, c)) {
            var f = t.interleaved;
            f === null ? (o.next = o, gc(t)) : (o.next = f.next, f.next = o), t.interleaved = o;
            return
          }
        } catch { } finally { }
        n = jf(e, t, o, a), n !== null && (o = Zt(), k1(n, e, a, o), y8(n, t, a))
      }
    }

    function v8(e) {
      var t = e.alternate;
      return e === Fe || t !== null && t === Fe
    }

    function g8(e, t) {
      aa = N2 = !0;
      var n = e.pending;
      n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
    }

    function y8(e, t, n) {
      if (n & 4194240) {
        var a = t.lanes;
        a &= e.pendingLanes, n |= a, t.lanes = n, rc(e, n)
      }
    }
    var H2 = {
      readContext: m1,
      useCallback: vt,
      useContext: vt,
      useEffect: vt,
      useImperativeHandle: vt,
      useInsertionEffect: vt,
      useLayoutEffect: vt,
      useMemo: vt,
      useReducer: vt,
      useRef: vt,
      useState: vt,
      useDebugValue: vt,
      useDeferredValue: vt,
      useTransition: vt,
      useMutableSource: vt,
      useSyncExternalStore: vt,
      useId: vt,
      unstable_isNewReconciler: !1
    },
      zC = {
        readContext: m1,
        useCallback: function (e, t) {
          return $1().memoizedState = [e, t === void 0 ? null : t], e
        },
        useContext: m1,
        useEffect: Sh,
        useImperativeHandle: function (e, t, n) {
          return n = n != null ? n.concat([e]) : null, m2(4194308, 4, u8.bind(null, t, e), n)
        },
        useLayoutEffect: function (e, t) {
          return m2(4194308, 4, e, t)
        },
        useInsertionEffect: function (e, t) {
          return m2(4, 2, e, t)
        },
        useMemo: function (e, t) {
          var n = $1();
          return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e
        },
        useReducer: function (e, t, n) {
          var a = $1();
          return t = n !== void 0 ? n(t) : t, a.memoizedState = a.baseState = t, e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
          }, a.queue = e, e = e.dispatch = BC.bind(null, Fe, e), [a.memoizedState, e]
        },
        useRef: function (e) {
          var t = $1();
          return e = {
            current: e
          }, t.memoizedState = e
        },
        useState: Zh,
        useDebugValue: Zc,
        useDeferredValue: function (e) {
          return $1().memoizedState = e
        },
        useTransition: function () {
          var e = Zh(!1),
            t = e[0];
          return e = UC.bind(null, e[1]), $1().memoizedState = e, [t, e]
        },
        useMutableSource: function () { },
        useSyncExternalStore: function (e, t, n) {
          var a = Fe,
            o = $1();
          if (Ne) {
            if (n === void 0) throw Error(G(407));
            n = n()
          } else {
            if (n = t(), ot === null) throw Error(G(349));
            U5 & 30 || n8(a, t, n)
          }
          o.memoizedState = n;
          var s = {
            value: n,
            getSnapshot: t
          };
          return o.queue = s, Sh(a8.bind(null, a, s, e), [e]), a.flags |= 2048, Ca(9, r8.bind(null, a, s, n, t), void 0, null), n
        },
        useId: function () {
          var e = $1(),
            t = ot.identifierPrefix;
          if (Ne) {
            var n = vn,
              a = mn;
            n = (a & ~(1 << 32 - O1(a) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = wa++, 0 < n && (t += "H" + n.toString(32)), t += ":"
          } else n = FC++, t = ":" + t + "r" + n.toString(32) + ":";
          return e.memoizedState = t
        },
        unstable_isNewReconciler: !1
      },
      $C = {
        readContext: m1,
        useCallback: f8,
        useContext: m1,
        useEffect: Mc,
        useImperativeHandle: h8,
        useInsertionEffect: l8,
        useLayoutEffect: c8,
        useMemo: d8,
        useReducer: Ys,
        useRef: s8,
        useState: function () {
          return Ys(Aa)
        },
        useDebugValue: Zc,
        useDeferredValue: function (e) {
          var t = v1();
          return p8(t, Je.memoizedState, e)
        },
        useTransition: function () {
          var e = Ys(Aa)[0],
            t = v1().memoizedState;
          return [e, t]
        },
        useMutableSource: e8,
        useSyncExternalStore: t8,
        useId: m8,
        unstable_isNewReconciler: !1
      },
      qC = {
        readContext: m1,
        useCallback: f8,
        useContext: m1,
        useEffect: Mc,
        useImperativeHandle: h8,
        useInsertionEffect: l8,
        useLayoutEffect: c8,
        useMemo: d8,
        useReducer: Xs,
        useRef: s8,
        useState: function () {
          return Xs(Aa)
        },
        useDebugValue: Zc,
        useDeferredValue: function (e) {
          var t = v1();
          return Je === null ? t.memoizedState = e : p8(t, Je.memoizedState, e)
        },
        useTransition: function () {
          var e = Xs(Aa)[0],
            t = v1().memoizedState;
          return [e, t]
        },
        useMutableSource: e8,
        useSyncExternalStore: t8,
        useId: m8,
        unstable_isNewReconciler: !1
      };

    function B0(e, t) {
      try {
        var n = "",
          a = t;
        do n += AA(a), a = a.return; while (a);
        var o = n
      } catch (s) {
        o = `
Error generating stack: ` + s.message + `
` + s.stack
      }
      return {
        value: e,
        source: t,
        stack: o,
        digest: null
      }
    }

    function Js(e, t, n) {
      return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
      }
    }

    function Rl(e, t) {
      try {
        console.error(t.value)
      } catch (n) {
        setTimeout(function () {
          throw n
        })
      }
    }
    var jC = typeof WeakMap == "function" ? WeakMap : Map;

    function _8(e, t, n) {
      n = gn(-1, n), n.tag = 3, n.payload = {
        element: null
      };
      var a = t.value;
      return n.callback = function () {
        F2 || (F2 = !0, $l = a), Rl(e, t)
      }, n
    }

    function E8(e, t, n) {
      n = gn(-1, n), n.tag = 3;
      var a = e.type.getDerivedStateFromError;
      if (typeof a == "function") {
        var o = t.value;
        n.payload = function () {
          return a(o)
        }, n.callback = function () {
          Rl(e, t)
        }
      }
      var s = e.stateNode;
      return s !== null && typeof s.componentDidCatch == "function" && (n.callback = function () {
        Rl(e, t), typeof a != "function" && (e5 === null ? e5 = new Set([this]) : e5.add(this));
        var c = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: c !== null ? c : ""
        })
      }), n
    }

    function xh(e, t, n) {
      var a = e.pingCache;
      if (a === null) {
        a = e.pingCache = new jC;
        var o = new Set;
        a.set(t, o)
      } else o = a.get(t), o === void 0 && (o = new Set, a.set(t, o));
      o.has(n) || (o.add(n), e = sb.bind(null, e, t, n), t.then(e, e))
    }

    function Ih(e) {
      do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
        e = e.return
      } while (e !== null);
      return null
    }

    function Th(e, t, n, a, o) {
      return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = gn(-1, 1), t.tag = 2, Jn(n, t, 1))), n.lanes |= 1), e)
    }
    var WC = An.ReactCurrentOwner,
      Pt = !1;

    function Mt(e, t, n, a) {
      t.child = e === null ? Xf(t, null, n, a) : F0(t, e.child, n, a)
    }

    function Oh(e, t, n, a, o) {
      n = n.render;
      var s = t.ref;
      return R0(t, o), a = Cc(e, t, n, a, s, o), n = bc(), e !== null && !Pt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, wn(e, t, o)) : (Ne && n && hc(t), t.flags |= 1, Mt(e, t, a, o), t.child)
    }

    function kh(e, t, n, a, o) {
      if (e === null) {
        var s = n.type;
        return typeof s == "function" && !Pc(s) && s.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = s, w8(e, t, s, a, o)) : (e = _2(n.type, null, a, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e)
      }
      if (s = e.child, !(e.lanes & o)) {
        var c = s.memoizedProps;
        if (n = n.compare, n = n !== null ? n : ma, n(c, a) && e.ref === t.ref) return wn(e, t, o)
      }
      return t.flags |= 1, e = n5(s, a), e.ref = t.ref, e.return = t, t.child = e
    }

    function w8(e, t, n, a, o) {
      if (e !== null) {
        var s = e.memoizedProps;
        if (ma(s, a) && e.ref === t.ref)
          if (Pt = !1, t.pendingProps = a = s, (e.lanes & o) !== 0) e.flags & 131072 && (Pt = !0);
          else return t.lanes = e.lanes, wn(e, t, o)
      }
      return Vl(e, t, n, a, o)
    }

    function A8(e, t, n) {
      var a = t.pendingProps,
        o = a.children,
        s = e !== null ? e.memoizedState : null;
      if (a.mode === "hidden")
        if (!(t.mode & 1)) t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null
        }, Oe(T0, zt), zt |= n;
        else {
          if (!(n & 1073741824)) return e = s !== null ? s.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null
          }, t.updateQueue = null, Oe(T0, zt), zt |= e, null;
          t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
          }, a = s !== null ? s.baseLanes : n, Oe(T0, zt), zt |= a
        }
      else s !== null ? (a = s.baseLanes | n, t.memoizedState = null) : a = n, Oe(T0, zt), zt |= a;
      return Mt(e, t, o, n), t.child
    }

    function C8(e, t) {
      var n = t.ref;
      (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
    }

    function Vl(e, t, n, a, o) {
      var s = Vt(n) ? D5 : _t.current;
      return s = H0(t, s), R0(t, o), n = Cc(e, t, n, a, s, o), a = bc(), e !== null && !Pt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, wn(e, t, o)) : (Ne && a && hc(t), t.flags |= 1, Mt(e, t, n, o), t.child)
    }

    function Lh(e, t, n, a, o) {
      if (Vt(n)) {
        var s = !0;
        T2(t)
      } else s = !1;
      if (R0(t, o), t.stateNode === null) v2(e, t), Qf(t, n, a), Pl(t, n, a, o), a = !0;
      else if (e === null) {
        var c = t.stateNode,
          h = t.memoizedProps;
        c.props = h;
        var f = c.context,
          p = n.contextType;
        typeof p == "object" && p !== null ? p = m1(p) : (p = Vt(n) ? D5 : _t.current, p = H0(t, p));
        var _ = n.getDerivedStateFromProps,
          M = typeof _ == "function" || typeof c.getSnapshotBeforeUpdate == "function";
        M || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (h !== a || f !== p) && bh(t, c, a, p), zn = !1;
        var g = t.memoizedState;
        c.state = g, R2(t, a, c, o), f = t.memoizedState, h !== a || g !== f || Rt.current || zn ? (typeof _ == "function" && (Ll(t, n, _, a), f = t.memoizedState), (h = zn || Ch(t, n, h, a, g, f, p)) ? (M || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount()), typeof c.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof c.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = f), c.props = a, c.state = f, c.context = p, a = h) : (typeof c.componentDidMount == "function" && (t.flags |= 4194308), a = !1)
      } else {
        c = t.stateNode, Wf(e, t), h = t.memoizedProps, p = t.type === t.elementType ? h : x1(t.type, h), c.props = p, M = t.pendingProps, g = c.context, f = n.contextType, typeof f == "object" && f !== null ? f = m1(f) : (f = Vt(n) ? D5 : _t.current, f = H0(t, f));
        var A = n.getDerivedStateFromProps;
        (_ = typeof A == "function" || typeof c.getSnapshotBeforeUpdate == "function") || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (h !== M || g !== f) && bh(t, c, a, f), zn = !1, g = t.memoizedState, c.state = g, R2(t, a, c, o);
        var x = t.memoizedState;
        h !== M || g !== x || Rt.current || zn ? (typeof A == "function" && (Ll(t, n, A, a), x = t.memoizedState), (p = zn || Ch(t, n, p, a, g, x, f) || !1) ? (_ || typeof c.UNSAFE_componentWillUpdate != "function" && typeof c.componentWillUpdate != "function" || (typeof c.componentWillUpdate == "function" && c.componentWillUpdate(a, x, f), typeof c.UNSAFE_componentWillUpdate == "function" && c.UNSAFE_componentWillUpdate(a, x, f)), typeof c.componentDidUpdate == "function" && (t.flags |= 4), typeof c.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof c.componentDidUpdate != "function" || h === e.memoizedProps && g === e.memoizedState || (t.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || h === e.memoizedProps && g === e.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = x), c.props = a, c.state = x, c.context = f, a = p) : (typeof c.componentDidUpdate != "function" || h === e.memoizedProps && g === e.memoizedState || (t.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || h === e.memoizedProps && g === e.memoizedState || (t.flags |= 1024), a = !1)
      }
      return Nl(e, t, n, a, s, o)
    }

    function Nl(e, t, n, a, o, s) {
      C8(e, t);
      var c = (t.flags & 128) !== 0;
      if (!a && !c) return o && yh(t, n, !1), wn(e, t, s);
      a = t.stateNode, WC.current = t;
      var h = c && typeof n.getDerivedStateFromError != "function" ? null : a.render();
      return t.flags |= 1, e !== null && c ? (t.child = F0(t, e.child, null, s), t.child = F0(t, null, h, s)) : Mt(e, t, h, s), t.memoizedState = a.state, o && yh(t, n, !0), t.child
    }

    function b8(e) {
      var t = e.stateNode;
      t.pendingContext ? gh(e, t.pendingContext, t.pendingContext !== t.context) : t.context && gh(e, t.context, !1), _c(e, t.containerInfo)
    }

    function Ph(e, t, n, a, o) {
      return D0(), dc(o), t.flags |= 256, Mt(e, t, n, a), t.child
    }
    var Hl = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0
    };

    function Dl(e) {
      return {
        baseLanes: e,
        cachePool: null,
        transitions: null
      }
    }

    function M8(e, t, n) {
      var a = t.pendingProps,
        o = De.current,
        s = !1,
        c = (t.flags & 128) !== 0,
        h;
      if ((h = c) || (h = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), h ? (s = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), Oe(De, o & 1), e === null) return Ol(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (c = a.children, e = a.fallback, s ? (a = t.mode, s = t.child, c = {
        mode: "hidden",
        children: c
      }, !(a & 1) && s !== null ? (s.childLanes = 0, s.pendingProps = c) : s = eo(c, a, 0, null), e = H5(e, a, n, null), s.return = t, e.return = t, s.sibling = e, t.child = s, t.child.memoizedState = Dl(n), t.memoizedState = Hl, e) : Sc(t, c));
      if (o = e.memoizedState, o !== null && (h = o.dehydrated, h !== null)) return KC(e, t, c, a, h, o, n);
      if (s) {
        s = a.fallback, c = t.mode, o = e.child, h = o.sibling;
        var f = {
          mode: "hidden",
          children: a.children
        };
        return !(c & 1) && t.child !== o ? (a = t.child, a.childLanes = 0, a.pendingProps = f, t.deletions = null) : (a = n5(o, f), a.subtreeFlags = o.subtreeFlags & 14680064), h !== null ? s = n5(h, s) : (s = H5(s, c, n, null), s.flags |= 2), s.return = t, a.return = t, a.sibling = s, t.child = a, a = s, s = t.child, c = e.child.memoizedState, c = c === null ? Dl(n) : {
          baseLanes: c.baseLanes | n,
          cachePool: null,
          transitions: c.transitions
        }, s.memoizedState = c, s.childLanes = e.childLanes & ~n, t.memoizedState = Hl, a
      }
      return s = e.child, e = s.sibling, a = n5(s, {
        mode: "visible",
        children: a.children
      }), !(t.mode & 1) && (a.lanes = n), a.return = t, a.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = a, t.memoizedState = null, a
    }

    function Sc(e, t) {
      return t = eo({
        mode: "visible",
        children: t
      }, e.mode, 0, null), t.return = e, e.child = t
    }

    function s2(e, t, n, a) {
      return a !== null && dc(a), F0(t, e.child, null, n), e = Sc(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
    }

    function KC(e, t, n, a, o, s, c) {
      if (n) return t.flags & 256 ? (t.flags &= -257, a = Js(Error(G(422))), s2(e, t, c, a)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (s = a.fallback, o = t.mode, a = eo({
        mode: "visible",
        children: a.children
      }, o, 0, null), s = H5(s, o, c, null), s.flags |= 2, a.return = t, s.return = t, a.sibling = s, t.child = a, t.mode & 1 && F0(t, e.child, null, c), t.child.memoizedState = Dl(c), t.memoizedState = Hl, s);
      if (!(t.mode & 1)) return s2(e, t, c, null);
      if (o.data === "$!") {
        if (a = o.nextSibling && o.nextSibling.dataset, a) var h = a.dgst;
        return a = h, s = Error(G(419)), a = Js(s, a, void 0), s2(e, t, c, a)
      }
      if (h = (c & e.childLanes) !== 0, Pt || h) {
        if (a = ot, a !== null) {
          switch (c & -c) {
            case 4:
              o = 2;
              break;
            case 16:
              o = 8;
              break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              o = 32;
              break;
            case 536870912:
              o = 268435456;
              break;
            default:
              o = 0
          }
          o = o & (a.suspendedLanes | c) ? 0 : o, o !== 0 && o !== s.retryLane && (s.retryLane = o, En(e, o), k1(a, e, o, -1))
        }
        return Lc(), a = Js(Error(G(421))), s2(e, t, c, a)
      }
      return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = lb.bind(null, e), o._reactRetry = t, null) : (e = s.treeContext, $t = Xn(o.nextSibling), qt = t, Ne = !0, T1 = null, e !== null && (h1[f1++] = mn, h1[f1++] = vn, h1[f1++] = F5, mn = e.id, vn = e.overflow, F5 = t), t = Sc(t, a.children), t.flags |= 4096, t)
    }

    function Rh(e, t, n) {
      e.lanes |= t;
      var a = e.alternate;
      a !== null && (a.lanes |= t), kl(e.return, t, n)
    }

    function el(e, t, n, a, o) {
      var s = e.memoizedState;
      s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: a,
        tail: n,
        tailMode: o
      } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = a, s.tail = n, s.tailMode = o)
    }

    function Z8(e, t, n) {
      var a = t.pendingProps,
        o = a.revealOrder,
        s = a.tail;
      if (Mt(e, t, a.children, n), a = De.current, a & 2) a = a & 1 | 2, t.flags |= 128;
      else {
        if (e !== null && e.flags & 128) e: for (e = t.child; e !== null;) {
          if (e.tag === 13) e.memoizedState !== null && Rh(e, n, t);
          else if (e.tag === 19) Rh(e, n, t);
          else if (e.child !== null) {
            e.child.return = e, e = e.child;
            continue
          }
          if (e === t) break e;
          for (; e.sibling === null;) {
            if (e.return === null || e.return === t) break e;
            e = e.return
          }
          e.sibling.return = e.return, e = e.sibling
        }
        a &= 1
      }
      if (Oe(De, a), !(t.mode & 1)) t.memoizedState = null;
      else switch (o) {
        case "forwards":
          for (n = t.child, o = null; n !== null;) e = n.alternate, e !== null && V2(e) === null && (o = n), n = n.sibling;
          n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), el(t, !1, o, n, s);
          break;
        case "backwards":
          for (n = null, o = t.child, t.child = null; o !== null;) {
            if (e = o.alternate, e !== null && V2(e) === null) {
              t.child = o;
              break
            }
            e = o.sibling, o.sibling = n, n = o, o = e
          }
          el(t, !0, n, null, s);
          break;
        case "together":
          el(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null
      }
      return t.child
    }

    function v2(e, t) {
      !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2)
    }

    function wn(e, t, n) {
      if (e !== null && (t.dependencies = e.dependencies), B5 |= t.lanes, !(n & t.childLanes)) return null;
      if (e !== null && t.child !== e.child) throw Error(G(153));
      if (t.child !== null) {
        for (e = t.child, n = n5(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = n5(e, e.pendingProps), n.return = t;
        n.sibling = null
      }
      return t.child
    }

    function QC(e, t, n) {
      switch (t.tag) {
        case 3:
          b8(t), D0();
          break;
        case 5:
          Jf(t);
          break;
        case 1:
          Vt(t.type) && T2(t);
          break;
        case 4:
          _c(t, t.stateNode.containerInfo);
          break;
        case 10:
          var a = t.type._context,
            o = t.memoizedProps.value;
          Oe(L2, a._currentValue), a._currentValue = o;
          break;
        case 13:
          if (a = t.memoizedState, a !== null) return a.dehydrated !== null ? (Oe(De, De.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? M8(e, t, n) : (Oe(De, De.current & 1), e = wn(e, t, n), e !== null ? e.sibling : null);
          Oe(De, De.current & 1);
          break;
        case 19:
          if (a = (n & t.childLanes) !== 0, e.flags & 128) {
            if (a) return Z8(e, t, n);
            t.flags |= 128
          }
          if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), Oe(De, De.current), a) break;
          return null;
        case 22:
        case 23:
          return t.lanes = 0, A8(e, t, n)
      }
      return wn(e, t, n)
    }
    var S8, Fl, x8, I8;
    S8 = function (e, t) {
      for (var n = t.child; n !== null;) {
        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
          n.child.return = n, n = n.child;
          continue
        }
        if (n === t) break;
        for (; n.sibling === null;) {
          if (n.return === null || n.return === t) return;
          n = n.return
        }
        n.sibling.return = n.return, n = n.sibling
      }
    };
    Fl = function () { };
    x8 = function (e, t, n, a) {
      var o = e.memoizedProps;
      if (o !== a) {
        e = t.stateNode, V5(W1.current);
        var s = null;
        switch (n) {
          case "input":
            o = ll(e, o), a = ll(e, a), s = [];
            break;
          case "select":
            o = Ue({}, o, {
              value: void 0
            }), a = Ue({}, a, {
              value: void 0
            }), s = [];
            break;
          case "textarea":
            o = hl(e, o), a = hl(e, a), s = [];
            break;
          default:
            typeof o.onClick != "function" && typeof a.onClick == "function" && (e.onclick = x2)
        }
        dl(n, a);
        var c;
        n = null;
        for (p in o)
          if (!a.hasOwnProperty(p) && o.hasOwnProperty(p) && o[p] != null)
            if (p === "style") {
              var h = o[p];
              for (c in h) h.hasOwnProperty(c) && (n || (n = {}), n[c] = "")
            } else p !== "dangerouslySetInnerHTML" && p !== "children" && p !== "suppressContentEditableWarning" && p !== "suppressHydrationWarning" && p !== "autoFocus" && (la.hasOwnProperty(p) ? s || (s = []) : (s = s || []).push(p, null));
        for (p in a) {
          var f = a[p];
          if (h = o?.[p], a.hasOwnProperty(p) && f !== h && (f != null || h != null))
            if (p === "style")
              if (h) {
                for (c in h) !h.hasOwnProperty(c) || f && f.hasOwnProperty(c) || (n || (n = {}), n[c] = "");
                for (c in f) f.hasOwnProperty(c) && h[c] !== f[c] && (n || (n = {}), n[c] = f[c])
              } else n || (s || (s = []), s.push(p, n)), n = f;
            else p === "dangerouslySetInnerHTML" ? (f = f ? f.__html : void 0, h = h ? h.__html : void 0, f != null && h !== f && (s = s || []).push(p, f)) : p === "children" ? typeof f != "string" && typeof f != "number" || (s = s || []).push(p, "" + f) : p !== "suppressContentEditableWarning" && p !== "suppressHydrationWarning" && (la.hasOwnProperty(p) ? (f != null && p === "onScroll" && Le("scroll", e), s || h === f || (s = [])) : (s = s || []).push(p, f))
        }
        n && (s = s || []).push("style", n);
        var p = s;
        (t.updateQueue = p) && (t.flags |= 4)
      }
    };
    I8 = function (e, t, n, a) {
      n !== a && (t.flags |= 4)
    };

    function qr(e, t) {
      if (!Ne) switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
          n === null ? e.tail = null : n.sibling = null;
          break;
        case "collapsed":
          n = e.tail;
          for (var a = null; n !== null;) n.alternate !== null && (a = n), n = n.sibling;
          a === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : a.sibling = null
      }
    }

    function gt(e) {
      var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        a = 0;
      if (t)
        for (var o = e.child; o !== null;) n |= o.lanes | o.childLanes, a |= o.subtreeFlags & 14680064, a |= o.flags & 14680064, o.return = e, o = o.sibling;
      else
        for (o = e.child; o !== null;) n |= o.lanes | o.childLanes, a |= o.subtreeFlags, a |= o.flags, o.return = e, o = o.sibling;
      return e.subtreeFlags |= a, e.childLanes = n, t
    }

    function YC(e, t, n) {
      var a = t.pendingProps;
      switch (fc(t), t.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return gt(t), null;
        case 1:
          return Vt(t.type) && I2(), gt(t), null;
        case 3:
          return a = t.stateNode, U0(), Pe(Rt), Pe(_t), wc(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && (i2(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, T1 !== null && (Wl(T1), T1 = null))), Fl(e, t), gt(t), null;
        case 5:
          Ec(t);
          var o = V5(Ea.current);
          if (n = t.type, e !== null && t.stateNode != null) x8(e, t, n, a, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
          else {
            if (!a) {
              if (t.stateNode === null) throw Error(G(166));
              return gt(t), null
            }
            if (e = V5(W1.current), i2(t)) {
              a = t.stateNode, n = t.type;
              var s = t.memoizedProps;
              switch (a[q1] = t, a[ya] = s, e = (t.mode & 1) !== 0, n) {
                case "dialog":
                  Le("cancel", a), Le("close", a);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Le("load", a);
                  break;
                case "video":
                case "audio":
                  for (o = 0; o < Xr.length; o++) Le(Xr[o], a);
                  break;
                case "source":
                  Le("error", a);
                  break;
                case "img":
                case "image":
                case "link":
                  Le("error", a), Le("load", a);
                  break;
                case "details":
                  Le("toggle", a);
                  break;
                case "input":
                  G6(a, s), Le("invalid", a);
                  break;
                case "select":
                  a._wrapperState = {
                    wasMultiple: !!s.multiple
                  }, Le("invalid", a);
                  break;
                case "textarea":
                  $6(a, s), Le("invalid", a)
              }
              dl(n, s), o = null;
              for (var c in s)
                if (s.hasOwnProperty(c)) {
                  var h = s[c];
                  c === "children" ? typeof h == "string" ? a.textContent !== h && (s.suppressHydrationWarning !== !0 && a2(a.textContent, h, e), o = ["children", h]) : typeof h == "number" && a.textContent !== "" + h && (s.suppressHydrationWarning !== !0 && a2(a.textContent, h, e), o = ["children", "" + h]) : la.hasOwnProperty(c) && h != null && c === "onScroll" && Le("scroll", a)
                } switch (n) {
                  case "input":
                    qi(a), z6(a, s, !0);
                    break;
                  case "textarea":
                    qi(a), q6(a);
                    break;
                  case "select":
                  case "option":
                    break;
                  default:
                    typeof s.onClick == "function" && (a.onclick = x2)
                }
              a = o, t.updateQueue = a, a !== null && (t.flags |= 4)
            } else {
              c = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = tf(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = c.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof a.is == "string" ? e = c.createElement(n, {
                is: a.is
              }) : (e = c.createElement(n), n === "select" && (c = e, a.multiple ? c.multiple = !0 : a.size && (c.size = a.size))) : e = c.createElementNS(e, n), e[q1] = t, e[ya] = a, S8(e, t, !1, !1), t.stateNode = e;
              e: {
                switch (c = pl(n, a), n) {
                  case "dialog":
                    Le("cancel", e), Le("close", e), o = a;
                    break;
                  case "iframe":
                  case "object":
                  case "embed":
                    Le("load", e), o = a;
                    break;
                  case "video":
                  case "audio":
                    for (o = 0; o < Xr.length; o++) Le(Xr[o], e);
                    o = a;
                    break;
                  case "source":
                    Le("error", e), o = a;
                    break;
                  case "img":
                  case "image":
                  case "link":
                    Le("error", e), Le("load", e), o = a;
                    break;
                  case "details":
                    Le("toggle", e), o = a;
                    break;
                  case "input":
                    G6(e, a), o = ll(e, a), Le("invalid", e);
                    break;
                  case "option":
                    o = a;
                    break;
                  case "select":
                    e._wrapperState = {
                      wasMultiple: !!a.multiple
                    }, o = Ue({}, a, {
                      value: void 0
                    }), Le("invalid", e);
                    break;
                  case "textarea":
                    $6(e, a), o = hl(e, a), Le("invalid", e);
                    break;
                  default:
                    o = a
                }
                dl(n, o),
                  h = o;
                for (s in h)
                  if (h.hasOwnProperty(s)) {
                    var f = h[s];
                    s === "style" ? af(e, f) : s === "dangerouslySetInnerHTML" ? (f = f ? f.__html : void 0, f != null && nf(e, f)) : s === "children" ? typeof f == "string" ? (n !== "textarea" || f !== "") && ca(e, f) : typeof f == "number" && ca(e, "" + f) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (la.hasOwnProperty(s) ? f != null && s === "onScroll" && Le("scroll", e) : f != null && Yl(e, s, f, c))
                  } switch (n) {
                    case "input":
                      qi(e), z6(e, a, !1);
                      break;
                    case "textarea":
                      qi(e), q6(e);
                      break;
                    case "option":
                      a.value != null && e.setAttribute("value", "" + r5(a.value));
                      break;
                    case "select":
                      e.multiple = !!a.multiple, s = a.value, s != null ? O0(e, !!a.multiple, s, !1) : a.defaultValue != null && O0(e, !!a.multiple, a.defaultValue, !0);
                      break;
                    default:
                      typeof o.onClick == "function" && (e.onclick = x2)
                  }
                switch (n) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a = !!a.autoFocus;
                    break e;
                  case "img":
                    a = !0;
                    break e;
                  default:
                    a = !1
                }
              }
              a && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 512, t.flags |= 2097152)
          }
          return gt(t), null;
        case 6:
          if (e && t.stateNode != null) I8(e, t, e.memoizedProps, a);
          else {
            if (typeof a != "string" && t.stateNode === null) throw Error(G(166));
            if (n = V5(Ea.current), V5(W1.current), i2(t)) {
              if (a = t.stateNode, n = t.memoizedProps, a[q1] = t, (s = a.nodeValue !== n) && (e = qt, e !== null)) switch (e.tag) {
                case 3:
                  a2(a.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 && a2(a.nodeValue, n, (e.mode & 1) !== 0)
              }
              s && (t.flags |= 4)
            } else a = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(a), a[q1] = t, t.stateNode = a
          }
          return gt(t), null;
        case 13:
          if (Pe(De), a = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (Ne && $t !== null && t.mode & 1 && !(t.flags & 128)) qf(), D0(), t.flags |= 98560, s = !1;
            else if (s = i2(t), a !== null && a.dehydrated !== null) {
              if (e === null) {
                if (!s) throw Error(G(318));
                if (s = t.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(G(317));
                s[q1] = t
              } else D0(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
              gt(t), s = !1
            } else T1 !== null && (Wl(T1), T1 = null), s = !0;
            if (!s) return t.flags & 65536 ? t : null
          }
          return t.flags & 128 ? (t.lanes = n, t) : (a = a !== null, a !== (e !== null && e.memoizedState !== null) && a && (t.child.flags |= 8192, t.mode & 1 && (e === null || De.current & 1 ? et === 0 && (et = 3) : Lc())), t.updateQueue !== null && (t.flags |= 4), gt(t), null);
        case 4:
          return U0(), Fl(e, t), e === null && va(t.stateNode.containerInfo), gt(t), null;
        case 10:
          return vc(t.type._context), gt(t), null;
        case 17:
          return Vt(t.type) && I2(), gt(t), null;
        case 19:
          if (Pe(De), s = t.memoizedState, s === null) return gt(t), null;
          if (a = (t.flags & 128) !== 0, c = s.rendering, c === null)
            if (a) qr(s, !1);
            else {
              if (et !== 0 || e !== null && e.flags & 128)
                for (e = t.child; e !== null;) {
                  if (c = V2(e), c !== null) {
                    for (t.flags |= 128, qr(s, !1), a = c.updateQueue, a !== null && (t.updateQueue = a, t.flags |= 4), t.subtreeFlags = 0, a = n, n = t.child; n !== null;) s = n, e = a, s.flags &= 14680066, c = s.alternate, c === null ? (s.childLanes = 0, s.lanes = e, s.child = null, s.subtreeFlags = 0, s.memoizedProps = null, s.memoizedState = null, s.updateQueue = null, s.dependencies = null, s.stateNode = null) : (s.childLanes = c.childLanes, s.lanes = c.lanes, s.child = c.child, s.subtreeFlags = 0, s.deletions = null, s.memoizedProps = c.memoizedProps, s.memoizedState = c.memoizedState, s.updateQueue = c.updateQueue, s.type = c.type, e = c.dependencies, s.dependencies = e === null ? null : {
                      lanes: e.lanes,
                      firstContext: e.firstContext
                    }), n = n.sibling;
                    return Oe(De, De.current & 1 | 2), t.child
                  }
                  e = e.sibling
                }
              s.tail !== null && je() > G0 && (t.flags |= 128, a = !0, qr(s, !1), t.lanes = 4194304)
            }
          else {
            if (!a)
              if (e = V2(c), e !== null) {
                if (t.flags |= 128, a = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), qr(s, !0), s.tail === null && s.tailMode === "hidden" && !c.alternate && !Ne) return gt(t), null
              } else 2 * je() - s.renderingStartTime > G0 && n !== 1073741824 && (t.flags |= 128, a = !0, qr(s, !1), t.lanes = 4194304);
            s.isBackwards ? (c.sibling = t.child, t.child = c) : (n = s.last, n !== null ? n.sibling = c : t.child = c, s.last = c)
          }
          return s.tail !== null ? (t = s.tail, s.rendering = t, s.tail = t.sibling, s.renderingStartTime = je(), t.sibling = null, n = De.current, Oe(De, a ? n & 1 | 2 : n & 1), t) : (gt(t), null);
        case 22:
        case 23:
          return kc(), a = t.memoizedState !== null, e !== null && e.memoizedState !== null !== a && (t.flags |= 8192), a && t.mode & 1 ? zt & 1073741824 && (gt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : gt(t), null;
        case 24:
          return null;
        case 25:
          return null
      }
      throw Error(G(156, t.tag))
    }

    function XC(e, t) {
      switch (fc(t), t.tag) {
        case 1:
          return Vt(t.type) && I2(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 3:
          return U0(), Pe(Rt), Pe(_t), wc(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
        case 5:
          return Ec(t), null;
        case 13:
          if (Pe(De), e = t.memoizedState, e !== null && e.dehydrated !== null) {
            if (t.alternate === null) throw Error(G(340));
            D0()
          }
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 19:
          return Pe(De), null;
        case 4:
          return U0(), null;
        case 10:
          return vc(t.type._context), null;
        case 22:
        case 23:
          return kc(), null;
        case 24:
          return null;
        default:
          return null
      }
    }
    var l2 = !1,
      yt = !1,
      JC = typeof WeakSet == "function" ? WeakSet : Set,
      Y = null;

    function I0(e, t) {
      var n = e.ref;
      if (n !== null)
        if (typeof n == "function") try {
          n(null)
        } catch (a) {
          Ge(e, t, a)
        } else n.current = null
    }

    function Ul(e, t, n) {
      try {
        n()
      } catch (a) {
        Ge(e, t, a)
      }
    }
    var Vh = !1;

    function eb(e, t) {
      if (bl = M2, e = Lf(), uc(e)) {
        if ("selectionStart" in e) var n = {
          start: e.selectionStart,
          end: e.selectionEnd
        };
        else e: {
          n = (n = e.ownerDocument) && n.defaultView || window;
          var a = n.getSelection && n.getSelection();
          if (a && a.rangeCount !== 0) {
            n = a.anchorNode;
            var o = a.anchorOffset,
              s = a.focusNode;
            a = a.focusOffset;
            try {
              n.nodeType, s.nodeType
            } catch {
              n = null;
              break e
            }
            var c = 0,
              h = -1,
              f = -1,
              p = 0,
              _ = 0,
              M = e,
              g = null;
            t: for (; ;) {
              for (var A; M !== n || o !== 0 && M.nodeType !== 3 || (h = c + o), M !== s || a !== 0 && M.nodeType !== 3 || (f = c + a), M.nodeType === 3 && (c += M.nodeValue.length), (A = M.firstChild) !== null;) g = M, M = A;
              for (; ;) {
                if (M === e) break t;
                if (g === n && ++p === o && (h = c), g === s && ++_ === a && (f = c), (A = M.nextSibling) !== null) break;
                M = g, g = M.parentNode
              }
              M = A
            }
            n = h === -1 || f === -1 ? null : {
              start: h,
              end: f
            }
          } else n = null
        }
        n = n || {
          start: 0,
          end: 0
        }
      } else n = null;
      for (Ml = {
        focusedElem: e,
        selectionRange: n
      }, M2 = !1, Y = t; Y !== null;)
        if (t = Y, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, Y = e;
        else
          for (; Y !== null;) {
            t = Y;
            try {
              var x = t.alternate;
              if (t.flags & 1024) switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (x !== null) {
                    var k = x.memoizedProps,
                      U = x.memoizedState,
                      E = t.stateNode,
                      y = E.getSnapshotBeforeUpdate(t.elementType === t.type ? k : x1(t.type, k), U);
                    E.__reactInternalSnapshotBeforeUpdate = y
                  }
                  break;
                case 3:
                  var C = t.stateNode.containerInfo;
                  C.nodeType === 1 ? C.textContent = "" : C.nodeType === 9 && C.documentElement && C.removeChild(C.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(G(163))
              }
            } catch (b) {
              Ge(t, t.return, b)
            }
            if (e = t.sibling, e !== null) {
              e.return = t.return, Y = e;
              break
            }
            Y = t.return
          }
      return x = Vh, Vh = !1, x
    }

    function ia(e, t, n) {
      var a = t.updateQueue;
      if (a = a !== null ? a.lastEffect : null, a !== null) {
        var o = a = a.next;
        do {
          if ((o.tag & e) === e) {
            var s = o.destroy;
            o.destroy = void 0, s !== void 0 && Ul(t, n, s)
          }
          o = o.next
        } while (o !== a)
      }
    }

    function X2(e, t) {
      if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
        var n = t = t.next;
        do {
          if ((n.tag & e) === e) {
            var a = n.create;
            n.destroy = a()
          }
          n = n.next
        } while (n !== t)
      }
    }

    function Bl(e) {
      var t = e.ref;
      if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
          case 5:
            e = n;
            break;
          default:
            e = n
        }
        typeof t == "function" ? t(e) : t.current = e
      }
    }

    function T8(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, T8(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[q1], delete t[ya], delete t[xl], delete t[VC], delete t[NC])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
    }

    function O8(e) {
      return e.tag === 5 || e.tag === 3 || e.tag === 4
    }

    function Nh(e) {
      e: for (; ;) {
        for (; e.sibling === null;) {
          if (e.return === null || O8(e.return)) return null;
          e = e.return
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
          if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
          e.child.return = e, e = e.child
        }
        if (!(e.flags & 2)) return e.stateNode
      }
    }

    function Gl(e, t, n) {
      var a = e.tag;
      if (a === 5 || a === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = x2));
      else if (a !== 4 && (e = e.child, e !== null))
        for (Gl(e, t, n), e = e.sibling; e !== null;) Gl(e, t, n), e = e.sibling
    }

    function zl(e, t, n) {
      var a = e.tag;
      if (a === 5 || a === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
      else if (a !== 4 && (e = e.child, e !== null))
        for (zl(e, t, n), e = e.sibling; e !== null;) zl(e, t, n), e = e.sibling
    }
    var lt = null,
      I1 = !1;

    function Bn(e, t, n) {
      for (n = n.child; n !== null;) k8(e, t, n), n = n.sibling
    }

    function k8(e, t, n) {
      if (j1 && typeof j1.onCommitFiberUnmount == "function") try {
        j1.onCommitFiberUnmount(z2, n)
      } catch { }
      switch (n.tag) {
        case 5:
          yt || I0(n, t);
        case 6:
          var a = lt,
            o = I1;
          lt = null, Bn(e, t, n), lt = a, I1 = o, lt !== null && (I1 ? (e = lt, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : lt.removeChild(n.stateNode));
          break;
        case 18:
          lt !== null && (I1 ? (e = lt, n = n.stateNode, e.nodeType === 8 ? js(e.parentNode, n) : e.nodeType === 1 && js(e, n), da(e)) : js(lt, n.stateNode));
          break;
        case 4:
          a = lt, o = I1, lt = n.stateNode.containerInfo, I1 = !0, Bn(e, t, n), lt = a, I1 = o;
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          if (!yt && (a = n.updateQueue, a !== null && (a = a.lastEffect, a !== null))) {
            o = a = a.next;
            do {
              var s = o,
                c = s.destroy;
              s = s.tag, c !== void 0 && (s & 2 || s & 4) && Ul(n, t, c), o = o.next
            } while (o !== a)
          }
          Bn(e, t, n);
          break;
        case 1:
          if (!yt && (I0(n, t), a = n.stateNode, typeof a.componentWillUnmount == "function")) try {
            a.props = n.memoizedProps, a.state = n.memoizedState, a.componentWillUnmount()
          } catch (h) {
            Ge(n, t, h)
          }
          Bn(e, t, n);
          break;
        case 21:
          Bn(e, t, n);
          break;
        case 22:
          n.mode & 1 ? (yt = (a = yt) || n.memoizedState !== null, Bn(e, t, n), yt = a) : Bn(e, t, n);
          break;
        default:
          Bn(e, t, n)
      }
    }

    function Hh(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new JC), t.forEach(function (a) {
          var o = cb.bind(null, e, a);
          n.has(a) || (n.add(a), a.then(o, o))
        })
      }
    }

    function S1(e, t) {
      var n = t.deletions;
      if (n !== null)
        for (var a = 0; a < n.length; a++) {
          var o = n[a];
          try {
            var s = e,
              c = t,
              h = c;
            e: for (; h !== null;) {
              switch (h.tag) {
                case 5:
                  lt = h.stateNode, I1 = !1;
                  break e;
                case 3:
                  lt = h.stateNode.containerInfo, I1 = !0;
                  break e;
                case 4:
                  lt = h.stateNode.containerInfo, I1 = !0;
                  break e
              }
              h = h.return
            }
            if (lt === null) throw Error(G(160));
            k8(s, c, o), lt = null, I1 = !1;
            var f = o.alternate;
            f !== null && (f.return = null), o.return = null
          } catch (p) {
            Ge(o, t, p)
          }
        }
      if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null;) L8(t, e), t = t.sibling
    }

    function L8(e, t) {
      var n = e.alternate,
        a = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          if (S1(t, e), z1(e), a & 4) {
            try {
              ia(3, e, e.return), X2(3, e)
            } catch (k) {
              Ge(e, e.return, k)
            }
            try {
              ia(5, e, e.return)
            } catch (k) {
              Ge(e, e.return, k)
            }
          }
          break;
        case 1:
          S1(t, e), z1(e), a & 512 && n !== null && I0(n, n.return);
          break;
        case 5:
          if (S1(t, e), z1(e), a & 512 && n !== null && I0(n, n.return), e.flags & 32) {
            var o = e.stateNode;
            try {
              ca(o, "")
            } catch (k) {
              Ge(e, e.return, k)
            }
          }
          if (a & 4 && (o = e.stateNode, o != null)) {
            var s = e.memoizedProps,
              c = n !== null ? n.memoizedProps : s,
              h = e.type,
              f = e.updateQueue;
            if (e.updateQueue = null, f !== null) try {
              h === "input" && s.type === "radio" && s.name != null && Jh(o, s), pl(h, c);
              var p = pl(h, s);
              for (c = 0; c < f.length; c += 2) {
                var _ = f[c],
                  M = f[c + 1];
                _ === "style" ? af(o, M) : _ === "dangerouslySetInnerHTML" ? nf(o, M) : _ === "children" ? ca(o, M) : Yl(o, _, M, p)
              }
              switch (h) {
                case "input":
                  cl(o, s);
                  break;
                case "textarea":
                  ef(o, s);
                  break;
                case "select":
                  var g = o._wrapperState.wasMultiple;
                  o._wrapperState.wasMultiple = !!s.multiple;
                  var A = s.value;
                  A != null ? O0(o, !!s.multiple, A, !1) : g !== !!s.multiple && (s.defaultValue != null ? O0(o, !!s.multiple, s.defaultValue, !0) : O0(o, !!s.multiple, s.multiple ? [] : "", !1))
              }
              o[ya] = s
            } catch (k) {
              Ge(e, e.return, k)
            }
          }
          break;
        case 6:
          if (S1(t, e), z1(e), a & 4) {
            if (e.stateNode === null) throw Error(G(162));
            o = e.stateNode, s = e.memoizedProps;
            try {
              o.nodeValue = s
            } catch (k) {
              Ge(e, e.return, k)
            }
          }
          break;
        case 3:
          if (S1(t, e), z1(e), a & 4 && n !== null && n.memoizedState.isDehydrated) try {
            da(t.containerInfo)
          } catch (k) {
            Ge(e, e.return, k)
          }
          break;
        case 4:
          S1(t, e), z1(e);
          break;
        case 13:
          S1(t, e), z1(e), o = e.child, o.flags & 8192 && (s = o.memoizedState !== null, o.stateNode.isHidden = s, !s || o.alternate !== null && o.alternate.memoizedState !== null || (Tc = je())), a & 4 && Hh(e);
          break;
        case 22:
          if (_ = n !== null && n.memoizedState !== null, e.mode & 1 ? (yt = (p = yt) || _, S1(t, e), yt = p) : S1(t, e), z1(e), a & 8192) {
            if (p = e.memoizedState !== null, (e.stateNode.isHidden = p) && !_ && e.mode & 1)
              for (Y = e, _ = e.child; _ !== null;) {
                for (M = Y = _; Y !== null;) {
                  switch (g = Y, A = g.child, g.tag) {
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                      ia(4, g, g.return);
                      break;
                    case 1:
                      I0(g, g.return);
                      var x = g.stateNode;
                      if (typeof x.componentWillUnmount == "function") {
                        a = g, n = g.return;
                        try {
                          t = a, x.props = t.memoizedProps, x.state = t.memoizedState, x.componentWillUnmount()
                        } catch (k) {
                          Ge(a, n, k)
                        }
                      }
                      break;
                    case 5:
                      I0(g, g.return);
                      break;
                    case 22:
                      if (g.memoizedState !== null) {
                        Fh(M);
                        continue
                      }
                  }
                  A !== null ? (A.return = g, Y = A) : Fh(M)
                }
                _ = _.sibling
              }
            e: for (_ = null, M = e; ;) {
              if (M.tag === 5) {
                if (_ === null) {
                  _ = M;
                  try {
                    o = M.stateNode, p ? (s = o.style, typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none") : (h = M.stateNode, f = M.memoizedProps.style, c = f != null && f.hasOwnProperty("display") ? f.display : null, h.style.display = rf("display", c))
                  } catch (k) {
                    Ge(e, e.return, k)
                  }
                }
              } else if (M.tag === 6) {
                if (_ === null) try {
                  M.stateNode.nodeValue = p ? "" : M.memoizedProps
                } catch (k) {
                  Ge(e, e.return, k)
                }
              } else if ((M.tag !== 22 && M.tag !== 23 || M.memoizedState === null || M === e) && M.child !== null) {
                M.child.return = M, M = M.child;
                continue
              }
              if (M === e) break e;
              for (; M.sibling === null;) {
                if (M.return === null || M.return === e) break e;
                _ === M && (_ = null), M = M.return
              }
              _ === M && (_ = null), M.sibling.return = M.return, M = M.sibling
            }
          }
          break;
        case 19:
          S1(t, e), z1(e), a & 4 && Hh(e);
          break;
        case 21:
          break;
        default:
          S1(t, e), z1(e)
      }
    }

    function z1(e) {
      var t = e.flags;
      if (t & 2) {
        try {
          e: {
            for (var n = e.return; n !== null;) {
              if (O8(n)) {
                var a = n;
                break e
              }
              n = n.return
            }
            throw Error(G(160))
          }
          switch (a.tag) {
            case 5:
              var o = a.stateNode;
              a.flags & 32 && (ca(o, ""), a.flags &= -33);
              var s = Nh(e);
              zl(e, s, o);
              break;
            case 3:
            case 4:
              var c = a.stateNode.containerInfo,
                h = Nh(e);
              Gl(e, h, c);
              break;
            default:
              throw Error(G(161))
          }
        }
        catch (f) {
          Ge(e, e.return, f)
        }
        e.flags &= -3
      }
      t & 4096 && (e.flags &= -4097)
    }

    function tb(e, t, n) {
      Y = e, P8(e, t, n)
    }

    function P8(e, t, n) {
      for (var a = (e.mode & 1) !== 0; Y !== null;) {
        var o = Y,
          s = o.child;
        if (o.tag === 22 && a) {
          var c = o.memoizedState !== null || l2;
          if (!c) {
            var h = o.alternate,
              f = h !== null && h.memoizedState !== null || yt;
            h = l2;
            var p = yt;
            if (l2 = c, (yt = f) && !p)
              for (Y = o; Y !== null;) c = Y, f = c.child, c.tag === 22 && c.memoizedState !== null ? Uh(o) : f !== null ? (f.return = c, Y = f) : Uh(o);
            for (; s !== null;) Y = s, P8(s, t, n), s = s.sibling;
            Y = o, l2 = h, yt = p
          }
          Dh(e, t, n)
        } else o.subtreeFlags & 8772 && s !== null ? (s.return = o, Y = s) : Dh(e, t, n)
      }
    }

    function Dh(e) {
      for (; Y !== null;) {
        var t = Y;
        if (t.flags & 8772) {
          var n = t.alternate;
          try {
            if (t.flags & 8772) switch (t.tag) {
              case 0:
              case 11:
              case 15:
                yt || X2(5, t);
                break;
              case 1:
                var a = t.stateNode;
                if (t.flags & 4 && !yt)
                  if (n === null) a.componentDidMount();
                  else {
                    var o = t.elementType === t.type ? n.memoizedProps : x1(t.type, n.memoizedProps);
                    a.componentDidUpdate(o, n.memoizedState, a.__reactInternalSnapshotBeforeUpdate)
                  } var s = t.updateQueue;
                s !== null && Ah(t, s, a);
                break;
              case 3:
                var c = t.updateQueue;
                if (c !== null) {
                  if (n = null, t.child !== null) switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode
                  }
                  Ah(t, c, n)
                }
                break;
              case 5:
                var h = t.stateNode;
                if (n === null && t.flags & 4) {
                  n = h;
                  var f = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      f.autoFocus && n.focus();
                      break;
                    case "img":
                      f.src && (n.src = f.src)
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (t.memoizedState === null) {
                  var p = t.alternate;
                  if (p !== null) {
                    var _ = p.memoizedState;
                    if (_ !== null) {
                      var M = _.dehydrated;
                      M !== null && da(M)
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(G(163))
            }
            yt || t.flags & 512 && Bl(t)
          } catch (g) {
            Ge(t, t.return, g)
          }
        }
        if (t === e) {
          Y = null;
          break
        }
        if (n = t.sibling, n !== null) {
          n.return = t.return, Y = n;
          break
        }
        Y = t.return
      }
    }

    function Fh(e) {
      for (; Y !== null;) {
        var t = Y;
        if (t === e) {
          Y = null;
          break
        }
        var n = t.sibling;
        if (n !== null) {
          n.return = t.return, Y = n;
          break
        }
        Y = t.return
      }
    }

    function Uh(e) {
      for (; Y !== null;) {
        var t = Y;
        try {
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              var n = t.return;
              try {
                X2(4, t)
              } catch (f) {
                Ge(t, n, f)
              }
              break;
            case 1:
              var a = t.stateNode;
              if (typeof a.componentDidMount == "function") {
                var o = t.return;
                try {
                  a.componentDidMount()
                } catch (f) {
                  Ge(t, o, f)
                }
              }
              var s = t.return;
              try {
                Bl(t)
              } catch (f) {
                Ge(t, s, f)
              }
              break;
            case 5:
              var c = t.return;
              try {
                Bl(t)
              } catch (f) {
                Ge(t, c, f)
              }
          }
        } catch (f) {
          Ge(t, t.return, f)
        }
        if (t === e) {
          Y = null;
          break
        }
        var h = t.sibling;
        if (h !== null) {
          h.return = t.return, Y = h;
          break
        }
        Y = t.return
      }
    }
    var nb = Math.ceil,
      D2 = An.ReactCurrentDispatcher,
      xc = An.ReactCurrentOwner,
      p1 = An.ReactCurrentBatchConfig,
      _e = 0,
      ot = null,
      Ke = null,
      ct = 0,
      zt = 0,
      T0 = o5(0),
      et = 0,
      ba = null,
      B5 = 0,
      J2 = 0,
      Ic = 0,
      oa = null,
      Lt = null,
      Tc = 0,
      G0 = 1 / 0,
      dn = null,
      F2 = !1,
      $l = null,
      e5 = null,
      c2 = !1,
      Wn = null,
      U2 = 0,
      sa = 0,
      ql = null,
      g2 = -1,
      y2 = 0;

    function Zt() {
      return _e & 6 ? je() : g2 !== -1 ? g2 : g2 = je()
    }

    function t5(e) {
      return e.mode & 1 ? _e & 2 && ct !== 0 ? ct & -ct : DC.transition !== null ? (y2 === 0 && (y2 = gf()), y2) : (e = Ze, e !== 0 || (e = window.event, e = e === void 0 ? 16 : bf(e.type)), e) : 1
    }

    function k1(e, t, n, a) {
      if (50 < sa) throw sa = 0, ql = null, Error(G(185));
      Ma(e, n, a), (!(_e & 2) || e !== ot) && (e === ot && (!(_e & 2) && (J2 |= n), et === 4 && qn(e, ct)), Nt(e, a), n === 1 && _e === 0 && !(t.mode & 1) && (G0 = je() + 500, K2 && s5()))
    }

    function Nt(e, t) {
      var n = e.callbackNode;
      UA(e, t);
      var a = b2(e, e === ot ? ct : 0);
      if (a === 0) n !== null && K6(n), e.callbackNode = null, e.callbackPriority = 0;
      else if (t = a & -a, e.callbackPriority !== t) {
        if (n != null && K6(n), t === 1) e.tag === 0 ? HC(Bh.bind(null, e)) : Gf(Bh.bind(null, e)), PC(function () {
          !(_e & 6) && s5()
        }), n = null;
        else {
          switch (yf(a)) {
            case 1:
              n = nc;
              break;
            case 4:
              n = mf;
              break;
            case 16:
              n = C2;
              break;
            case 536870912:
              n = vf;
              break;
            default:
              n = C2
          }
          n = B8(n, R8.bind(null, e))
        }
        e.callbackPriority = t, e.callbackNode = n
      }
    }

    function R8(e, t) {
      if (g2 = -1, y2 = 0, _e & 6) throw Error(G(327));
      var n = e.callbackNode;
      if (V0() && e.callbackNode !== n) return null;
      var a = b2(e, e === ot ? ct : 0);
      if (a === 0) return null;
      if (a & 30 || a & e.expiredLanes || t) t = B2(e, a);
      else {
        t = a;
        var o = _e;
        _e |= 2;
        var s = N8();
        (ot !== e || ct !== t) && (dn = null, G0 = je() + 500, N5(e, t));
        do try {
          ib();
          break
        } catch (h) {
          V8(e, h)
        }
        while (1);
        mc(), D2.current = s, _e = o, Ke !== null ? t = 0 : (ot = null, ct = 0, t = et)
      }
      if (t !== 0) {
        if (t === 2 && (o = _l(e), o !== 0 && (a = o, t = jl(e, o))), t === 1) throw n = ba, N5(e, 0), qn(e, a), Nt(e, je()), n;
        if (t === 6) qn(e, a);
        else {
          if (o = e.current.alternate, !(a & 30) && !rb(o) && (t = B2(e, a), t === 2 && (s = _l(e), s !== 0 && (a = s, t = jl(e, s))), t === 1)) throw n = ba, N5(e, 0), qn(e, a), Nt(e, je()), n;
          switch (e.finishedWork = o, e.finishedLanes = a, t) {
            case 0:
            case 1:
              throw Error(G(345));
            case 2:
              L5(e, Lt, dn);
              break;
            case 3:
              if (qn(e, a), (a & 130023424) === a && (t = Tc + 500 - je(), 10 < t)) {
                if (b2(e, 0) !== 0) break;
                if (o = e.suspendedLanes, (o & a) !== a) {
                  Zt(), e.pingedLanes |= e.suspendedLanes & o;
                  break
                }
                e.timeoutHandle = Sl(L5.bind(null, e, Lt, dn), t);
                break
              }
              L5(e, Lt, dn);
              break;
            case 4:
              if (qn(e, a), (a & 4194240) === a) break;
              for (t = e.eventTimes, o = -1; 0 < a;) {
                var c = 31 - O1(a);
                s = 1 << c, c = t[c], c > o && (o = c), a &= ~s
              }
              if (a = o, a = je() - a, a = (120 > a ? 120 : 480 > a ? 480 : 1080 > a ? 1080 : 1920 > a ? 1920 : 3e3 > a ? 3e3 : 4320 > a ? 4320 : 1960 * nb(a / 1960)) - a, 10 < a) {
                e.timeoutHandle = Sl(L5.bind(null, e, Lt, dn), a);
                break
              }
              L5(e, Lt, dn);
              break;
            case 5:
              L5(e, Lt, dn);
              break;
            default:
              throw Error(G(329))
          }
        }
      }
      return Nt(e, je()), e.callbackNode === n ? R8.bind(null, e) : null
    }

    function jl(e, t) {
      var n = oa;
      return e.current.memoizedState.isDehydrated && (N5(e, t).flags |= 256), e = B2(e, t), e !== 2 && (t = Lt, Lt = n, t !== null && Wl(t)), e
    }

    function Wl(e) {
      Lt === null ? Lt = e : Lt.push.apply(Lt, e)
    }

    function rb(e) {
      for (var t = e; ;) {
        if (t.flags & 16384) {
          var n = t.updateQueue;
          if (n !== null && (n = n.stores, n !== null))
            for (var a = 0; a < n.length; a++) {
              var o = n[a],
                s = o.getSnapshot;
              o = o.value;
              try {
                if (!L1(s(), o)) return !1
              } catch {
                return !1
              }
            }
        }
        if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
        else {
          if (t === e) break;
          for (; t.sibling === null;) {
            if (t.return === null || t.return === e) return !0;
            t = t.return
          }
          t.sibling.return = t.return, t = t.sibling
        }
      }
      return !0
    }

    function qn(e, t) {
      for (t &= ~Ic, t &= ~J2, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
        var n = 31 - O1(t),
          a = 1 << n;
        e[n] = -1, t &= ~a
      }
    }

    function Bh(e) {
      if (_e & 6) throw Error(G(327));
      V0();
      var t = b2(e, 0);
      if (!(t & 1)) return Nt(e, je()), null;
      var n = B2(e, t);
      if (e.tag !== 0 && n === 2) {
        var a = _l(e);
        a !== 0 && (t = a, n = jl(e, a))
      }
      if (n === 1) throw n = ba, N5(e, 0), qn(e, t), Nt(e, je()), n;
      if (n === 6) throw Error(G(345));
      return e.finishedWork = e.current.alternate, e.finishedLanes = t, L5(e, Lt, dn), Nt(e, je()), null
    }

    function Oc(e, t) {
      var n = _e;
      _e |= 1;
      try {
        return e(t)
      } finally {
        _e = n, _e === 0 && (G0 = je() + 500, K2 && s5())
      }
    }

    function G5(e) {
      Wn !== null && Wn.tag === 0 && !(_e & 6) && V0();
      var t = _e;
      _e |= 1;
      var n = p1.transition,
        a = Ze;
      try {
        if (p1.transition = null, Ze = 1, e) return e()
      } finally {
        Ze = a, p1.transition = n, _e = t, !(_e & 6) && s5()
      }
    }

    function kc() {
      zt = T0.current, Pe(T0)
    }

    function N5(e, t) {
      e.finishedWork = null, e.finishedLanes = 0;
      var n = e.timeoutHandle;
      if (n !== -1 && (e.timeoutHandle = -1, LC(n)), Ke !== null)
        for (n = Ke.return; n !== null;) {
          var a = n;
          switch (fc(a), a.tag) {
            case 1:
              a = a.type.childContextTypes, a != null && I2();
              break;
            case 3:
              U0(), Pe(Rt), Pe(_t), wc();
              break;
            case 5:
              Ec(a);
              break;
            case 4:
              U0();
              break;
            case 13:
              Pe(De);
              break;
            case 19:
              Pe(De);
              break;
            case 10:
              vc(a.type._context);
              break;
            case 22:
            case 23:
              kc()
          }
          n = n.return
        }
      if (ot = e, Ke = e = n5(e.current, null), ct = zt = t, et = 0, ba = null, Ic = J2 = B5 = 0, Lt = oa = null, R5 !== null) {
        for (t = 0; t < R5.length; t++)
          if (n = R5[t], a = n.interleaved, a !== null) {
            n.interleaved = null;
            var o = a.next,
              s = n.pending;
            if (s !== null) {
              var c = s.next;
              s.next = o, a.next = c
            }
            n.pending = a
          } R5 = null
      }
      return e
    }

    function V8(e, t) {
      do {
        var n = Ke;
        try {
          if (mc(), p2.current = H2, N2) {
            for (var a = Fe.memoizedState; a !== null;) {
              var o = a.queue;
              o !== null && (o.pending = null), a = a.next
            }
            N2 = !1
          }
          if (U5 = 0, it = Je = Fe = null, aa = !1, wa = 0, xc.current = null, n === null || n.return === null) {
            et = 1, ba = t, Ke = null;
            break
          }
          e: {
            var s = e,
              c = n.return,
              h = n,
              f = t;
            if (t = ct, h.flags |= 32768, f !== null && typeof f == "object" && typeof f.then == "function") {
              var p = f,
                _ = h,
                M = _.tag;
              if (!(_.mode & 1) && (M === 0 || M === 11 || M === 15)) {
                var g = _.alternate;
                g ? (_.updateQueue = g.updateQueue, _.memoizedState = g.memoizedState, _.lanes = g.lanes) : (_.updateQueue = null, _.memoizedState = null)
              }
              var A = Ih(c);
              if (A !== null) {
                A.flags &= -257, Th(A, c, h, s, t), A.mode & 1 && xh(s, p, t), t = A, f = p;
                var x = t.updateQueue;
                if (x === null) {
                  var k = new Set;
                  k.add(f), t.updateQueue = k
                } else x.add(f);
                break e
              } else {
                if (!(t & 1)) {
                  xh(s, p, t), Lc();
                  break e
                }
                f = Error(G(426))
              }
            } else if (Ne && h.mode & 1) {
              var U = Ih(c);
              if (U !== null) {
                !(U.flags & 65536) && (U.flags |= 256), Th(U, c, h, s, t), dc(B0(f, h));
                break e
              }
            }
            s = f = B0(f, h),
              et !== 4 && (et = 2),
              oa === null ? oa = [s] : oa.push(s),
              s = c; do {
                switch (s.tag) {
                  case 3:
                    s.flags |= 65536, t &= -t, s.lanes |= t;
                    var E = _8(s, f, t);
                    wh(s, E);
                    break e;
                  case 1:
                    h = f;
                    var y = s.type,
                      C = s.stateNode;
                    if (!(s.flags & 128) && (typeof y.getDerivedStateFromError == "function" || C !== null && typeof C.componentDidCatch == "function" && (e5 === null || !e5.has(C)))) {
                      s.flags |= 65536, t &= -t, s.lanes |= t;
                      var b = E8(s, h, t);
                      wh(s, b);
                      break e
                    }
                }
                s = s.return
              } while (s !== null)
          }
          D8(n)
        } catch (S) {
          t = S, Ke === n && n !== null && (Ke = n = n.return);
          continue
        }
        break
      } while (1)
    }

    function N8() {
      var e = D2.current;
      return D2.current = H2, e === null ? H2 : e
    }

    function Lc() {
      (et === 0 || et === 3 || et === 2) && (et = 4), ot === null || !(B5 & 268435455) && !(J2 & 268435455) || qn(ot, ct)
    }

    function B2(e, t) {
      var n = _e;
      _e |= 2;
      var a = N8();
      (ot !== e || ct !== t) && (dn = null, N5(e, t));
      do try {
        ab();
        break
      } catch (o) {
        V8(e, o)
      }
      while (1);
      if (mc(), _e = n, D2.current = a, Ke !== null) throw Error(G(261));
      return ot = null, ct = 0, et
    }

    function ab() {
      for (; Ke !== null;) H8(Ke)
    }

    function ib() {
      for (; Ke !== null && !kA();) H8(Ke)
    }

    function H8(e) {
      var t = U8(e.alternate, e, zt);
      e.memoizedProps = e.pendingProps, t === null ? D8(e) : Ke = t, xc.current = null
    }

    function D8(e) {
      var t = e;
      do {
        var n = t.alternate;
        if (e = t.return, t.flags & 32768) {
          if (n = XC(n, t), n !== null) {
            n.flags &= 32767, Ke = n;
            return
          }
          if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
          else {
            et = 6, Ke = null;
            return
          }
        } else if (n = YC(n, t, zt), n !== null) {
          Ke = n;
          return
        }
        if (t = t.sibling, t !== null) {
          Ke = t;
          return
        }
        Ke = t = e
      } while (t !== null);
      et === 0 && (et = 5)
    }

    function L5(e, t, n) {
      var a = Ze,
        o = p1.transition;
      try {
        p1.transition = null, Ze = 1, ob(e, t, n, a)
      } finally {
        p1.transition = o, Ze = a
      }
      return null
    }

    function ob(e, t, n, a) {
      do V0(); while (Wn !== null);
      if (_e & 6) throw Error(G(327));
      n = e.finishedWork;
      var o = e.finishedLanes;
      if (n === null) return null;
      if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(G(177));
      e.callbackNode = null, e.callbackPriority = 0;
      var s = n.lanes | n.childLanes;
      if (BA(e, s), e === ot && (Ke = ot = null, ct = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || c2 || (c2 = !0, B8(C2, function () {
        return V0(), null
      })), s = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || s) {
        s = p1.transition, p1.transition = null;
        var c = Ze;
        Ze = 1;
        var h = _e;
        _e |= 4, xc.current = null, eb(e, n), L8(n, e), xC(Ml), M2 = !!bl, Ml = bl = null, e.current = n, tb(n, e, o), LA(), _e = h, Ze = c, p1.transition = s
      } else e.current = n;
      if (c2 && (c2 = !1, Wn = e, U2 = o), s = e.pendingLanes, s === 0 && (e5 = null), VA(n.stateNode, a), Nt(e, je()), t !== null)
        for (a = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], a(o.value, {
          componentStack: o.stack,
          digest: o.digest
        });
      if (F2) throw F2 = !1, e = $l, $l = null, e;
      return U2 & 1 && e.tag !== 0 && V0(), s = e.pendingLanes, s & 1 ? e === ql ? sa++ : (sa = 0, ql = e) : sa = 0, s5(), null
    }

    function V0() {
      if (Wn !== null) {
        var e = yf(U2),
          t = p1.transition,
          n = Ze;
        try {
          if (p1.transition = null, Ze = 16 > e ? 16 : e, Wn === null) var a = !1;
          else {
            if (e = Wn, Wn = null, U2 = 0, _e & 6) throw Error(G(331));
            var o = _e;
            for (_e |= 4, Y = e.current; Y !== null;) {
              var s = Y,
                c = s.child;
              if (Y.flags & 16) {
                var h = s.deletions;
                if (h !== null) {
                  for (var f = 0; f < h.length; f++) {
                    var p = h[f];
                    for (Y = p; Y !== null;) {
                      var _ = Y;
                      switch (_.tag) {
                        case 0:
                        case 11:
                        case 15:
                          ia(8, _, s)
                      }
                      var M = _.child;
                      if (M !== null) M.return = _, Y = M;
                      else
                        for (; Y !== null;) {
                          _ = Y;
                          var g = _.sibling,
                            A = _.return;
                          if (T8(_), _ === p) {
                            Y = null;
                            break
                          }
                          if (g !== null) {
                            g.return = A, Y = g;
                            break
                          }
                          Y = A
                        }
                    }
                  }
                  var x = s.alternate;
                  if (x !== null) {
                    var k = x.child;
                    if (k !== null) {
                      x.child = null;
                      do {
                        var U = k.sibling;
                        k.sibling = null, k = U
                      } while (k !== null)
                    }
                  }
                  Y = s
                }
              }
              if (s.subtreeFlags & 2064 && c !== null) c.return = s, Y = c;
              else e: for (; Y !== null;) {
                if (s = Y, s.flags & 2048) switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    ia(9, s, s.return)
                }
                var E = s.sibling;
                if (E !== null) {
                  E.return = s.return, Y = E;
                  break e
                }
                Y = s.return
              }
            }
            var y = e.current;
            for (Y = y; Y !== null;) {
              c = Y;
              var C = c.child;
              if (c.subtreeFlags & 2064 && C !== null) C.return = c, Y = C;
              else e: for (c = y; Y !== null;) {
                if (h = Y, h.flags & 2048) try {
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      X2(9, h)
                  }
                } catch (S) {
                  Ge(h, h.return, S)
                }
                if (h === c) {
                  Y = null;
                  break e
                }
                var b = h.sibling;
                if (b !== null) {
                  b.return = h.return, Y = b;
                  break e
                }
                Y = h.return
              }
            }
            if (_e = o, s5(), j1 && typeof j1.onPostCommitFiberRoot == "function") try {
              j1.onPostCommitFiberRoot(z2, e)
            } catch { }
            a = !0
          }
          return a
        } finally {
          Ze = n, p1.transition = t
        }
      }
      return !1
    }

    function Gh(e, t, n) {
      t = B0(n, t), t = _8(e, t, 1), e = Jn(e, t, 1), t = Zt(), e !== null && (Ma(e, 1, t), Nt(e, t))
    }

    function Ge(e, t, n) {
      if (e.tag === 3) Gh(e, e, n);
      else
        for (; t !== null;) {
          if (t.tag === 3) {
            Gh(t, e, n);
            break
          } else if (t.tag === 1) {
            var a = t.stateNode;
            if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (e5 === null || !e5.has(a))) {
              e = B0(n, e), e = E8(t, e, 1), t = Jn(t, e, 1), e = Zt(), t !== null && (Ma(t, 1, e), Nt(t, e));
              break
            }
          }
          t = t.return
        }
    }

    function sb(e, t, n) {
      var a = e.pingCache;
      a !== null && a.delete(t), t = Zt(), e.pingedLanes |= e.suspendedLanes & n, ot === e && (ct & n) === n && (et === 4 || et === 3 && (ct & 130023424) === ct && 500 > je() - Tc ? N5(e, 0) : Ic |= n), Nt(e, t)
    }

    function F8(e, t) {
      t === 0 && (e.mode & 1 ? (t = Ki, Ki <<= 1, !(Ki & 130023424) && (Ki = 4194304)) : t = 1);
      var n = Zt();
      e = En(e, t), e !== null && (Ma(e, t, n), Nt(e, n))
    }

    function lb(e) {
      var t = e.memoizedState,
        n = 0;
      t !== null && (n = t.retryLane), F8(e, n)
    }

    function cb(e, t) {
      var n = 0;
      switch (e.tag) {
        case 13:
          var a = e.stateNode,
            o = e.memoizedState;
          o !== null && (n = o.retryLane);
          break;
        case 19:
          a = e.stateNode;
          break;
        default:
          throw Error(G(314))
      }
      a !== null && a.delete(t), F8(e, n)
    }
    var U8;
    U8 = function (e, t, n) {
      if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Rt.current) Pt = !0;
        else {
          if (!(e.lanes & n) && !(t.flags & 128)) return Pt = !1, QC(e, t, n);
          Pt = !!(e.flags & 131072)
        }
      else Pt = !1, Ne && t.flags & 1048576 && zf(t, k2, t.index);
      switch (t.lanes = 0, t.tag) {
        case 2:
          var a = t.type;
          v2(e, t), e = t.pendingProps;
          var o = H0(t, _t.current);
          R0(t, n), o = Cc(null, t, a, e, o, n);
          var s = bc();
          return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Vt(a) ? (s = !0, T2(t)) : s = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, yc(t), o.updater = Q2, t.stateNode = o, o._reactInternals = t, Pl(t, a, e, n), t = Nl(null, t, a, !0, s, n)) : (t.tag = 0, Ne && s && hc(t), Mt(null, t, o, n), t = t.child), t;
        case 16:
          a = t.elementType;
          e: {
            switch (v2(e, t), e = t.pendingProps, o = a._init, a = o(a._payload), t.type = a, o = t.tag = hb(a), e = x1(a, e), o) {
              case 0:
                t = Vl(null, t, a, e, n);
                break e;
              case 1:
                t = Lh(null, t, a, e, n);
                break e;
              case 11:
                t = Oh(null, t, a, e, n);
                break e;
              case 14:
                t = kh(null, t, a, x1(a.type, e), n);
                break e
            }
            throw Error(G(306, a, ""))
          }
          return t;
        case 0:
          return a = t.type, o = t.pendingProps, o = t.elementType === a ? o : x1(a, o), Vl(e, t, a, o, n);
        case 1:
          return a = t.type, o = t.pendingProps, o = t.elementType === a ? o : x1(a, o), Lh(e, t, a, o, n);
        case 3:
          e: {
            if (b8(t), e === null) throw Error(G(387)); a = t.pendingProps,
              s = t.memoizedState,
              o = s.element,
              Wf(e, t),
              R2(t, a, null, n);
            var c = t.memoizedState;
            if (a = c.element, s.isDehydrated)
              if (s = {
                element: a,
                isDehydrated: !1,
                cache: c.cache,
                pendingSuspenseBoundaries: c.pendingSuspenseBoundaries,
                transitions: c.transitions
              }, t.updateQueue.baseState = s, t.memoizedState = s, t.flags & 256) {
                o = B0(Error(G(423)), t), t = Ph(e, t, a, n, o);
                break e
              } else if (a !== o) {
                o = B0(Error(G(424)), t), t = Ph(e, t, a, n, o);
                break e
              } else
                for ($t = Xn(t.stateNode.containerInfo.firstChild), qt = t, Ne = !0, T1 = null, n = Xf(t, null, a, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
            else {
              if (D0(), a === o) {
                t = wn(e, t, n);
                break e
              }
              Mt(e, t, a, n)
            }
            t = t.child
          }
          return t;
        case 5:
          return Jf(t), e === null && Ol(t), a = t.type, o = t.pendingProps, s = e !== null ? e.memoizedProps : null, c = o.children, Zl(a, o) ? c = null : s !== null && Zl(a, s) && (t.flags |= 32), C8(e, t), Mt(e, t, c, n), t.child;
        case 6:
          return e === null && Ol(t), null;
        case 13:
          return M8(e, t, n);
        case 4:
          return _c(t, t.stateNode.containerInfo), a = t.pendingProps, e === null ? t.child = F0(t, null, a, n) : Mt(e, t, a, n), t.child;
        case 11:
          return a = t.type, o = t.pendingProps, o = t.elementType === a ? o : x1(a, o), Oh(e, t, a, o, n);
        case 7:
          return Mt(e, t, t.pendingProps, n), t.child;
        case 8:
          return Mt(e, t, t.pendingProps.children, n), t.child;
        case 12:
          return Mt(e, t, t.pendingProps.children, n), t.child;
        case 10:
          e: {
            if (a = t.type._context, o = t.pendingProps, s = t.memoizedProps, c = o.value, Oe(L2, a._currentValue), a._currentValue = c, s !== null)
              if (L1(s.value, c)) {
                if (s.children === o.children && !Rt.current) {
                  t = wn(e, t, n);
                  break e
                }
              } else
                for (s = t.child, s !== null && (s.return = t); s !== null;) {
                  var h = s.dependencies;
                  if (h !== null) {
                    c = s.child;
                    for (var f = h.firstContext; f !== null;) {
                      if (f.context === a) {
                        if (s.tag === 1) {
                          f = gn(-1, n & -n), f.tag = 2;
                          var p = s.updateQueue;
                          if (p !== null) {
                            p = p.shared;
                            var _ = p.pending;
                            _ === null ? f.next = f : (f.next = _.next, _.next = f), p.pending = f
                          }
                        }
                        s.lanes |= n, f = s.alternate, f !== null && (f.lanes |= n), kl(s.return, n, t), h.lanes |= n;
                        break
                      }
                      f = f.next
                    }
                  } else if (s.tag === 10) c = s.type === t.type ? null : s.child;
                  else if (s.tag === 18) {
                    if (c = s.return, c === null) throw Error(G(341));
                    c.lanes |= n, h = c.alternate, h !== null && (h.lanes |= n), kl(c, n, t), c = s.sibling
                  } else c = s.child;
                  if (c !== null) c.return = s;
                  else
                    for (c = s; c !== null;) {
                      if (c === t) {
                        c = null;
                        break
                      }
                      if (s = c.sibling, s !== null) {
                        s.return = c.return, c = s;
                        break
                      }
                      c = c.return
                    }
                  s = c
                }
            Mt(e, t, o.children, n),
              t = t.child
          }
          return t;
        case 9:
          return o = t.type, a = t.pendingProps.children, R0(t, n), o = m1(o), a = a(o), t.flags |= 1, Mt(e, t, a, n), t.child;
        case 14:
          return a = t.type, o = x1(a, t.pendingProps), o = x1(a.type, o), kh(e, t, a, o, n);
        case 15:
          return w8(e, t, t.type, t.pendingProps, n);
        case 17:
          return a = t.type, o = t.pendingProps, o = t.elementType === a ? o : x1(a, o), v2(e, t), t.tag = 1, Vt(a) ? (e = !0, T2(t)) : e = !1, R0(t, n), Qf(t, a, o), Pl(t, a, o, n), Nl(null, t, a, !0, e, n);
        case 19:
          return Z8(e, t, n);
        case 22:
          return A8(e, t, n)
      }
      throw Error(G(156, t.tag))
    };

    function B8(e, t) {
      return pf(e, t)
    }

    function ub(e, t, n, a) {
      this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
    }

    function d1(e, t, n, a) {
      return new ub(e, t, n, a)
    }

    function Pc(e) {
      return e = e.prototype, !(!e || !e.isReactComponent)
    }

    function hb(e) {
      if (typeof e == "function") return Pc(e) ? 1 : 0;
      if (e != null) {
        if (e = e.$$typeof, e === Jl) return 11;
        if (e === ec) return 14
      }
      return 2
    }

    function n5(e, t) {
      var n = e.alternate;
      return n === null ? (n = d1(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
      }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
    }

    function _2(e, t, n, a, o, s) {
      var c = 2;
      if (a = e, typeof e == "function") Pc(e) && (c = 1);
      else if (typeof e == "string") c = 5;
      else e: switch (e) {
        case E0:
          return H5(n.children, o, s, t);
        case Xl:
          c = 8, o |= 8;
          break;
        case al:
          return e = d1(12, n, t, o | 2), e.elementType = al, e.lanes = s, e;
        case il:
          return e = d1(13, n, t, o), e.elementType = il, e.lanes = s, e;
        case ol:
          return e = d1(19, n, t, o), e.elementType = ol, e.lanes = s, e;
        case Qh:
          return eo(n, o, s, t);
        default:
          if (typeof e == "object" && e !== null) switch (e.$$typeof) {
            case Wh:
              c = 10;
              break e;
            case Kh:
              c = 9;
              break e;
            case Jl:
              c = 11;
              break e;
            case ec:
              c = 14;
              break e;
            case Gn:
              c = 16, a = null;
              break e
          }
          throw Error(G(130, e == null ? e : typeof e, ""))
      }
      return t = d1(c, n, t, o), t.elementType = e, t.type = a, t.lanes = s, t
    }

    function H5(e, t, n, a) {
      return e = d1(7, e, a, t), e.lanes = n, e
    }

    function eo(e, t, n, a) {
      return e = d1(22, e, a, t), e.elementType = Qh, e.lanes = n, e.stateNode = {
        isHidden: !1
      }, e
    }

    function tl(e, t, n) {
      return e = d1(6, e, null, t), e.lanes = n, e
    }

    function nl(e, t, n) {
      return t = d1(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
      }, t
    }

    function fb(e, t, n, a, o) {
      this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ds(0), this.expirationTimes = Ds(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ds(0), this.identifierPrefix = a, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null
    }

    function Rc(e, t, n, a, o, s, c, h, f) {
      return e = new fb(e, t, n, h, f), t === 1 ? (t = 1, s === !0 && (t |= 8)) : t = 0, s = d1(3, null, null, t), e.current = s, s.stateNode = e, s.memoizedState = {
        element: a,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
      }, yc(s), e
    }

    function db(e, t, n) {
      var a = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return {
        $$typeof: _0,
        key: a == null ? null : "" + a,
        children: e,
        containerInfo: t,
        implementation: n
      }
    }

    function G8(e) {
      if (!e) return a5;
      e = e._reactInternals;
      e: {
        if ($5(e) !== e || e.tag !== 1) throw Error(G(170));
        var t = e; do {
          switch (t.tag) {
            case 3:
              t = t.stateNode.context;
              break e;
            case 1:
              if (Vt(t.type)) {
                t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                break e
              }
          }
          t = t.return
        } while (t !== null);
        throw Error(G(171))
      }
      if (e.tag === 1) {
        var n = e.type;
        if (Vt(n)) return Bf(e, n, t)
      }
      return t
    }

    function z8(e, t, n, a, o, s, c, h, f) {
      return e = Rc(n, a, !0, e, o, s, c, h, f), e.context = G8(null), n = e.current, a = Zt(), o = t5(n), s = gn(a, o), s.callback = t ?? null, Jn(n, s, o), e.current.lanes = o, Ma(e, o, a), Nt(e, a), e
    }

    function to(e, t, n, a) {
      var o = t.current,
        s = Zt(),
        c = t5(o);
      return n = G8(n), t.context === null ? t.context = n : t.pendingContext = n, t = gn(s, c), t.payload = {
        element: e
      }, a = a === void 0 ? null : a, a !== null && (t.callback = a), e = Jn(o, t, c), e !== null && (k1(e, o, c, s), d2(e, o, c)), c
    }

    function G2(e) {
      if (e = e.current, !e.child) return null;
      switch (e.child.tag) {
        case 5:
          return e.child.stateNode;
        default:
          return e.child.stateNode
      }
    }

    function zh(e, t) {
      if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
      }
    }

    function Vc(e, t) {
      zh(e, t), (e = e.alternate) && zh(e, t)
    }

    function pb() {
      return null
    }
    var $8 = typeof reportError == "function" ? reportError : function (e) {
      console.error(e)
    };

    function Nc(e) {
      this._internalRoot = e
    }
    no.prototype.render = Nc.prototype.render = function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(G(409));
      to(e, t, null, null)
    };
    no.prototype.unmount = Nc.prototype.unmount = function () {
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        G5(function () {
          to(null, e, null, null)
        }), t[_n] = null
      }
    };

    function no(e) {
      this._internalRoot = e
    }
    no.prototype.unstable_scheduleHydration = function (e) {
      if (e) {
        var t = wf();
        e = {
          blockedOn: null,
          target: e,
          priority: t
        };
        for (var n = 0; n < $n.length && t !== 0 && t < $n[n].priority; n++);
        $n.splice(n, 0, e), n === 0 && Cf(e)
      }
    };

    function Hc(e) {
      return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
    }

    function ro(e) {
      return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    }

    function $h() { }

    function mb(e, t, n, a, o) {
      if (o) {
        if (typeof a == "function") {
          var s = a;
          a = function () {
            var p = G2(c);
            s.call(p)
          }
        }
        var c = z8(t, a, e, 0, null, !1, !1, "", $h);
        return e._reactRootContainer = c, e[_n] = c.current, va(e.nodeType === 8 ? e.parentNode : e), G5(), c
      }
      for (; o = e.lastChild;) e.removeChild(o);
      if (typeof a == "function") {
        var h = a;
        a = function () {
          var p = G2(f);
          h.call(p)
        }
      }
      var f = Rc(e, 0, !1, null, null, !1, !1, "", $h);
      return e._reactRootContainer = f, e[_n] = f.current, va(e.nodeType === 8 ? e.parentNode : e), G5(function () {
        to(t, f, n, a)
      }), f
    }

    function ao(e, t, n, a, o) {
      var s = n._reactRootContainer;
      if (s) {
        var c = s;
        if (typeof o == "function") {
          var h = o;
          o = function () {
            var f = G2(c);
            h.call(f)
          }
        }
        to(t, c, e, o)
      } else c = mb(n, t, e, o, a);
      return G2(c)
    }
    _f = function (e) {
      switch (e.tag) {
        case 3:
          var t = e.stateNode;
          if (t.current.memoizedState.isDehydrated) {
            var n = Yr(t.pendingLanes);
            n !== 0 && (rc(t, n | 1), Nt(t, je()), !(_e & 6) && (G0 = je() + 500, s5()))
          }
          break;
        case 13:
          G5(function () {
            var a = En(e, 1);
            if (a !== null) {
              var o = Zt();
              k1(a, e, 1, o)
            }
          }), Vc(e, 1)
      }
    };
    ac = function (e) {
      if (e.tag === 13) {
        var t = En(e, 134217728);
        if (t !== null) {
          var n = Zt();
          k1(t, e, 134217728, n)
        }
        Vc(e, 134217728)
      }
    };
    Ef = function (e) {
      if (e.tag === 13) {
        var t = t5(e),
          n = En(e, t);
        if (n !== null) {
          var a = Zt();
          k1(n, e, t, a)
        }
        Vc(e, t)
      }
    };
    wf = function () {
      return Ze
    };
    Af = function (e, t) {
      var n = Ze;
      try {
        return Ze = e, t()
      } finally {
        Ze = n
      }
    };
    vl = function (e, t, n) {
      switch (t) {
        case "input":
          if (cl(e, n), t = n.name, n.type === "radio" && t != null) {
            for (n = e; n.parentNode;) n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
              var a = n[t];
              if (a !== e && a.form === e.form) {
                var o = W2(a);
                if (!o) throw Error(G(90));
                Xh(a), cl(a, o)
              }
            }
          }
          break;
        case "textarea":
          ef(e, n);
          break;
        case "select":
          t = n.value, t != null && O0(e, !!n.multiple, t, !1)
      }
    };
    lf = Oc;
    cf = G5;
    var vb = {
      usingClientEntryPoint: !1,
      Events: [Sa, b0, W2, of, sf, Oc]
    },
      jr = {
        findFiberByHostInstance: P5,
        bundleType: 0,
        version: "18.2.0",
        rendererPackageName: "react-dom"
      },
      gb = {
        bundleType: jr.bundleType,
        version: jr.version,
        rendererPackageName: jr.rendererPackageName,
        rendererConfig: jr.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: An.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
          return e = ff(e), e === null ? null : e.stateNode
        },
        findFiberByHostInstance: jr.findFiberByHostInstance || pb,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
      };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && (Wr = __REACT_DEVTOOLS_GLOBAL_HOOK__, !Wr.isDisabled && Wr.supportsFiber)) try {
      z2 = Wr.inject(gb), j1 = Wr
    } catch { }
    var Wr;
    Kt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = vb;
    Kt.createPortal = function (e, t) {
      var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Hc(t)) throw Error(G(200));
      return db(e, t, null, n)
    };
    Kt.createRoot = function (e, t) {
      if (!Hc(e)) throw Error(G(299));
      var n = !1,
        a = "",
        o = $8;
      return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = Rc(e, 1, !1, null, null, n, !1, a, o), e[_n] = t.current, va(e.nodeType === 8 ? e.parentNode : e), new Nc(t)
    };
    Kt.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0) throw typeof e.render == "function" ? Error(G(188)) : (e = Object.keys(e).join(","), Error(G(268, e)));
      return e = ff(t), e = e === null ? null : e.stateNode, e
    };
    Kt.flushSync = function (e) {
      return G5(e)
    };
    Kt.hydrate = function (e, t, n) {
      if (!ro(t)) throw Error(G(200));
      return ao(null, e, t, !0, n)
    };
    Kt.hydrateRoot = function (e, t, n) {
      if (!Hc(e)) throw Error(G(405));
      var a = n != null && n.hydratedSources || null,
        o = !1,
        s = "",
        c = $8;
      if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (s = n.identifierPrefix), n.onRecoverableError !== void 0 && (c = n.onRecoverableError)), t = z8(t, null, e, 1, n ?? null, o, !1, s, c), e[_n] = t.current, va(e), a)
        for (e = 0; e < a.length; e++) n = a[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(n, o);
      return new no(t)
    };
    Kt.render = function (e, t, n) {
      if (!ro(t)) throw Error(G(200));
      return ao(null, e, t, !1, n)
    };
    Kt.unmountComponentAtNode = function (e) {
      if (!ro(e)) throw Error(G(40));
      return e._reactRootContainer ? (G5(function () {
        ao(null, null, e, !1, function () {
          e._reactRootContainer = null, e[_n] = null
        })
      }), !0) : !1
    };
    Kt.unstable_batchedUpdates = Oc;
    Kt.unstable_renderSubtreeIntoContainer = function (e, t, n, a) {
      if (!ro(n)) throw Error(G(200));
      if (e == null || e._reactInternals === void 0) throw Error(G(38));
      return ao(e, t, n, !1, a)
    };
    Kt.version = "18.2.0-next-9e3b772b8-20220608"
  });
  var Dc = kt((mS, W8) => {
    "use strict";
    var vS = O(P());

    function j8() {
      if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(j8)
      } catch (e) {
        console.error(e)
      }
    }
    j8(), W8.exports = q8()
  });
  var Q8 = kt(Fc => {
    "use strict";
    var _S = O(P()),
      K8 = Dc();
    Fc.createRoot = K8.createRoot, Fc.hydrateRoot = K8.hydrateRoot;
    var gS
  });
  var Np = kt(Do => {
    "use strict";
    var jx = O(P());
    var SZ = c1(),
      xZ = Symbol.for("react.element"),
      IZ = Symbol.for("react.fragment"),
      TZ = Object.prototype.hasOwnProperty,
      OZ = SZ.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
      kZ = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      };

    function Vp(e, t, n) {
      var a, o = {},
        s = null,
        c = null;
      n !== void 0 && (s = "" + n), t.key !== void 0 && (s = "" + t.key), t.ref !== void 0 && (c = t.ref);
      for (a in t) TZ.call(t, a) && !kZ.hasOwnProperty(a) && (o[a] = t[a]);
      if (e && e.defaultProps)
        for (a in t = e.defaultProps, t) o[a] === void 0 && (o[a] = t[a]);
      return {
        $$typeof: xZ,
        type: e,
        key: s,
        ref: c,
        props: o,
        _owner: OZ.current
      }
    }
    Do.Fragment = IZ;
    Do.jsx = Vp;
    Do.jsxs = Vp
  });
  var Q5 = kt((Wx, Hp) => {
    "use strict";
    var Kx = O(P());
    Hp.exports = Np()
  });
  var $p = kt((vu, gu) => {
    var aI = O(P());
    (function (e, t) {
      typeof vu == "object" && typeof gu < "u" ? gu.exports = t() : typeof define == "function" && define.amd ? define(t) : (e = typeof globalThis < "u" ? globalThis : e || self).dayjs = t()
    })(vu, function () {
      "use strict";
      var e = 1e3,
        t = 6e4,
        n = 36e5,
        a = "millisecond",
        o = "second",
        s = "minute",
        c = "hour",
        h = "day",
        f = "week",
        p = "month",
        _ = "quarter",
        M = "year",
        g = "date",
        A = "Invalid Date",
        x = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
        k = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
        U = {
          name: "en",
          weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
          months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
          ordinal: function ($) {
            var j = ["th", "st", "nd", "rd"],
              z = $ % 100;
            return "[" + $ + (j[(z - 20) % 10] || j[z] || j[0]) + "]"
          }
        },
        E = function ($, j, z) {
          var ee = String($);
          return !ee || ee.length >= j ? $ : "" + Array(j + 1 - ee.length).join(z) + $
        },
        y = {
          s: E,
          z: function ($) {
            var j = -$.utcOffset(),
              z = Math.abs(j),
              ee = Math.floor(z / 60),
              W = z % 60;
            return (j <= 0 ? "+" : "-") + E(ee, 2, "0") + ":" + E(W, 2, "0")
          },
          m: function $(j, z) {
            if (j.date() < z.date()) return -$(z, j);
            var ee = 12 * (z.year() - j.year()) + (z.month() - j.month()),
              W = j.clone().add(ee, p),
              X = z - W < 0,
              ie = j.clone().add(ee + (X ? -1 : 1), p);
            return +(-(ee + (z - W) / (X ? W - ie : ie - W)) || 0)
          },
          a: function ($) {
            return $ < 0 ? Math.ceil($) || 0 : Math.floor($)
          },
          p: function ($) {
            return {
              M: p,
              y: M,
              w: f,
              d: h,
              D: g,
              h: c,
              m: s,
              s: o,
              ms: a,
              Q: _
            }[$] || String($ || "").toLowerCase().replace(/s$/, "")
          },
          u: function ($) {
            return $ === void 0
          }
        },
        C = "en",
        b = {};
      b[C] = U;
      var S = function ($) {
        return $ instanceof he
      },
        L = function $(j, z, ee) {
          var W;
          if (!j) return C;
          if (typeof j == "string") {
            var X = j.toLowerCase();
            b[X] && (W = X), z && (b[X] = z, W = X);
            var ie = j.split("-");
            if (!W && ie.length > 1) return $(ie[0])
          } else {
            var ye = j.name;
            b[ye] = j, W = ye
          }
          return !ee && W && (C = W), W || !ee && C
        },
        V = function ($, j) {
          if (S($)) return $.clone();
          var z = typeof j == "object" ? j : {};
          return z.date = $, z.args = arguments, new he(z)
        },
        H = y;
      H.l = L, H.i = S, H.w = function ($, j) {
        return V($, {
          locale: j.$L,
          utc: j.$u,
          x: j.$x,
          $offset: j.$offset
        })
      };
      var he = function () {
        function $(z) {
          this.$L = L(z.locale, null, !0), this.parse(z)
        }
        var j = $.prototype;
        return j.parse = function (z) {
          this.$d = function (ee) {
            var W = ee.date,
              X = ee.utc;
            if (W === null) return new Date(NaN);
            if (H.u(W)) return new Date;
            if (W instanceof Date) return new Date(W);
            if (typeof W == "string" && !/Z$/i.test(W)) {
              var ie = W.match(x);
              if (ie) {
                var ye = ie[2] - 1 || 0,
                  Ae = (ie[7] || "0").substring(0, 3);
                return X ? new Date(Date.UTC(ie[1], ye, ie[3] || 1, ie[4] || 0, ie[5] || 0, ie[6] || 0, Ae)) : new Date(ie[1], ye, ie[3] || 1, ie[4] || 0, ie[5] || 0, ie[6] || 0, Ae)
              }
            }
            return new Date(W)
          }(z), this.$x = z.x || {}, this.init()
        }, j.init = function () {
          var z = this.$d;
          this.$y = z.getFullYear(), this.$M = z.getMonth(), this.$D = z.getDate(), this.$W = z.getDay(), this.$H = z.getHours(), this.$m = z.getMinutes(), this.$s = z.getSeconds(), this.$ms = z.getMilliseconds()
        }, j.$utils = function () {
          return H
        }, j.isValid = function () {
          return this.$d.toString() !== A
        }, j.isSame = function (z, ee) {
          var W = V(z);
          return this.startOf(ee) <= W && W <= this.endOf(ee)
        }, j.isAfter = function (z, ee) {
          return V(z) < this.startOf(ee)
        }, j.isBefore = function (z, ee) {
          return this.endOf(ee) < V(z)
        }, j.$g = function (z, ee, W) {
          return H.u(z) ? this[ee] : this.set(W, z)
        }, j.unix = function () {
          return Math.floor(this.valueOf() / 1e3)
        }, j.valueOf = function () {
          return this.$d.getTime()
        }, j.startOf = function (z, ee) {
          var W = this,
            X = !!H.u(ee) || ee,
            ie = H.p(z),
            ye = function (e1, We) {
              var D1 = H.w(W.$u ? Date.UTC(W.$y, We, e1) : new Date(W.$y, We, e1), W);
              return X ? D1 : D1.endOf(h)
            },
            Ae = function (e1, We) {
              return H.w(W.toDate()[e1].apply(W.toDate("s"), (X ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(We)), W)
            },
            Re = this.$W,
            nt = this.$M,
            N1 = this.$D,
            ft = "set" + (this.$u ? "UTC" : "");
          switch (ie) {
            case M:
              return X ? ye(1, 0) : ye(31, 11);
            case p:
              return X ? ye(1, nt) : ye(0, nt + 1);
            case f:
              var H1 = this.$locale().weekStart || 0,
                w5 = (Re < H1 ? Re + 7 : Re) - H1;
              return ye(X ? N1 - w5 : N1 + (6 - w5), nt);
            case h:
            case g:
              return Ae(ft + "Hours", 0);
            case c:
              return Ae(ft + "Minutes", 1);
            case s:
              return Ae(ft + "Seconds", 2);
            case o:
              return Ae(ft + "Milliseconds", 3);
            default:
              return this.clone()
          }
        }, j.endOf = function (z) {
          return this.startOf(z, !1)
        }, j.$set = function (z, ee) {
          var W, X = H.p(z),
            ie = "set" + (this.$u ? "UTC" : ""),
            ye = (W = {}, W[h] = ie + "Date", W[g] = ie + "Date", W[p] = ie + "Month", W[M] = ie + "FullYear", W[c] = ie + "Hours", W[s] = ie + "Minutes", W[o] = ie + "Seconds", W[a] = ie + "Milliseconds", W)[X],
            Ae = X === h ? this.$D + (ee - this.$W) : ee;
          if (X === p || X === M) {
            var Re = this.clone().set(g, 1);
            Re.$d[ye](Ae), Re.init(), this.$d = Re.set(g, Math.min(this.$D, Re.daysInMonth())).$d
          } else ye && this.$d[ye](Ae);
          return this.init(), this
        }, j.set = function (z, ee) {
          return this.clone().$set(z, ee)
        }, j.get = function (z) {
          return this[H.p(z)]()
        }, j.add = function (z, ee) {
          var W, X = this;
          z = Number(z);
          var ie = H.p(ee),
            ye = function (nt) {
              var N1 = V(X);
              return H.w(N1.date(N1.date() + Math.round(nt * z)), X)
            };
          if (ie === p) return this.set(p, this.$M + z);
          if (ie === M) return this.set(M, this.$y + z);
          if (ie === h) return ye(1);
          if (ie === f) return ye(7);
          var Ae = (W = {}, W[s] = t, W[c] = n, W[o] = e, W)[ie] || 1,
            Re = this.$d.getTime() + z * Ae;
          return H.w(Re, this)
        }, j.subtract = function (z, ee) {
          return this.add(-1 * z, ee)
        }, j.format = function (z) {
          var ee = this,
            W = this.$locale();
          if (!this.isValid()) return W.invalidDate || A;
          var X = z || "YYYY-MM-DDTHH:mm:ssZ",
            ie = H.z(this),
            ye = this.$H,
            Ae = this.$m,
            Re = this.$M,
            nt = W.weekdays,
            N1 = W.months,
            ft = function (We, D1, Tn, tn) {
              return We && (We[D1] || We(ee, X)) || Tn[D1].slice(0, tn)
            },
            H1 = function (We) {
              return H.s(ye % 12 || 12, We, "0")
            },
            w5 = W.meridiem || function (We, D1, Tn) {
              var tn = We < 12 ? "AM" : "PM";
              return Tn ? tn.toLowerCase() : tn
            },
            e1 = {
              YY: String(this.$y).slice(-2),
              YYYY: this.$y,
              M: Re + 1,
              MM: H.s(Re + 1, 2, "0"),
              MMM: ft(W.monthsShort, Re, N1, 3),
              MMMM: ft(N1, Re),
              D: this.$D,
              DD: H.s(this.$D, 2, "0"),
              d: String(this.$W),
              dd: ft(W.weekdaysMin, this.$W, nt, 2),
              ddd: ft(W.weekdaysShort, this.$W, nt, 3),
              dddd: nt[this.$W],
              H: String(ye),
              HH: H.s(ye, 2, "0"),
              h: H1(1),
              hh: H1(2),
              a: w5(ye, Ae, !0),
              A: w5(ye, Ae, !1),
              m: String(Ae),
              mm: H.s(Ae, 2, "0"),
              s: String(this.$s),
              ss: H.s(this.$s, 2, "0"),
              SSS: H.s(this.$ms, 3, "0"),
              Z: ie
            };
          return X.replace(k, function (We, D1) {
            return D1 || e1[We] || ie.replace(":", "")
          })
        }, j.utcOffset = function () {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15)
        }, j.diff = function (z, ee, W) {
          var X, ie = H.p(ee),
            ye = V(z),
            Ae = (ye.utcOffset() - this.utcOffset()) * t,
            Re = this - ye,
            nt = H.m(this, ye);
          return nt = (X = {}, X[M] = nt / 12, X[p] = nt, X[_] = nt / 3, X[f] = (Re - Ae) / 6048e5, X[h] = (Re - Ae) / 864e5, X[c] = Re / n, X[s] = Re / t, X[o] = Re / e, X)[ie] || Re, W ? nt : H.a(nt)
        }, j.daysInMonth = function () {
          return this.endOf(p).$D
        }, j.$locale = function () {
          return b[this.$L]
        }, j.locale = function (z, ee) {
          if (!z) return this.$L;
          var W = this.clone(),
            X = L(z, ee, !0);
          return X && (W.$L = X), W
        }, j.clone = function () {
          return H.w(this.$d, this)
        }, j.toDate = function () {
          return new Date(this.valueOf())
        }, j.toJSON = function () {
          return this.isValid() ? this.toISOString() : null
        }, j.toISOString = function () {
          return this.$d.toISOString()
        }, j.toString = function () {
          return this.$d.toUTCString()
        }, $
      }(),
        ne = he.prototype;
      return V.prototype = ne, [
        ["$ms", a],
        ["$s", o],
        ["$m", s],
        ["$H", c],
        ["$W", h],
        ["$M", p],
        ["$y", M],
        ["$D", g]
      ].forEach(function ($) {
        ne[$[1]] = function (j) {
          return this.$g(j, $[0], $[1])
        }
      }), V.extend = function ($, j) {
        return $.$i || ($(j, he, V), $.$i = !0), V
      }, V.locale = L, V.isDayjs = S, V.unix = function ($) {
        return V(1e3 * $)
      }, V.en = b[C], V.Ls = b, V.p = {}, V
    })
  });
  var qp = kt((yu, _u) => {
    var iI = O(P());
    (function (e, t) {
      typeof yu == "object" && typeof _u < "u" ? _u.exports = t() : typeof define == "function" && define.amd ? define(t) : (e = typeof globalThis < "u" ? globalThis : e || self).dayjs_plugin_relativeTime = t()
    })(yu, function () {
      "use strict";
      return function (e, t, n) {
        e = e || {};
        var a = t.prototype,
          o = {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
          };

        function s(h, f, p, _) {
          return a.fromToBase(h, f, p, _)
        }
        n.en.relativeTime = o, a.fromToBase = function (h, f, p, _, M) {
          for (var g, A, x, k = p.$locale().relativeTime || o, U = e.thresholds || [{
            l: "s",
            r: 44,
            d: "second"
          }, {
            l: "m",
            r: 89
          }, {
            l: "mm",
            r: 44,
            d: "minute"
          }, {
            l: "h",
            r: 89
          }, {
            l: "hh",
            r: 21,
            d: "hour"
          }, {
            l: "d",
            r: 35
          }, {
            l: "dd",
            r: 25,
            d: "day"
          }, {
            l: "M",
            r: 45
          }, {
            l: "MM",
            r: 10,
            d: "month"
          }, {
            l: "y",
            r: 17
          }, {
            l: "yy",
            d: "year"
          }], E = U.length, y = 0; y < E; y += 1) {
            var C = U[y];
            C.d && (g = _ ? n(h).diff(p, C.d, !0) : p.diff(h, C.d, !0));
            var b = (e.rounding || Math.round)(Math.abs(g));
            if (x = g > 0, b <= C.r || !C.r) {
              b <= 1 && y > 0 && (C = U[y - 1]);
              var S = k[C.l];
              M && (b = M("" + b)), A = typeof S == "string" ? S.replace("%d", b) : S(b, f, C.l, x);
              break
            }
          }
          if (f) return A;
          var L = x ? k.future : k.past;
          return typeof L == "function" ? L(A) : L.replace("%s", A)
        }, a.to = function (h, f) {
          return s(h, f, this, !0)
        }, a.from = function (h, f) {
          return s(h, f, this)
        };
        var c = function (h) {
          return h.$u ? n.utc() : n()
        };
        a.toNow = function (h) {
          return this.to(c(this), h)
        }, a.fromNow = function (h) {
          return this.from(c(this), h)
        }
      }
    })
  });
  var In = kt((Cu, Wp) => {
    var EI = O(P());
    (function (e, t) {
      if (typeof define == "function" && define.amd) define("webextension-polyfill", ["module"], t);
      else if (typeof Cu < "u") t(Wp);
      else {
        var n = {
          exports: {}
        };
        t(n), e.browser = n.exports
      }
    })(typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : Cu, function (e) {
      "use strict";
      if (!globalThis.chrome?.runtime?.id) throw new Error("This script should only be loaded in a browser extension.");
      if (typeof globalThis.browser > "u" || Object.getPrototypeOf(globalThis.browser) !== Object.prototype) {
        let t = "The message port closed before a response was received.",
          n = a => {
            let o = {
              alarms: {
                clear: {
                  minArgs: 0,
                  maxArgs: 1
                },
                clearAll: {
                  minArgs: 0,
                  maxArgs: 0
                },
                get: {
                  minArgs: 0,
                  maxArgs: 1
                },
                getAll: {
                  minArgs: 0,
                  maxArgs: 0
                }
              },
              bookmarks: {
                create: {
                  minArgs: 1,
                  maxArgs: 1
                },
                get: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getChildren: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getRecent: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getSubTree: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getTree: {
                  minArgs: 0,
                  maxArgs: 0
                },
                move: {
                  minArgs: 2,
                  maxArgs: 2
                },
                remove: {
                  minArgs: 1,
                  maxArgs: 1
                },
                removeTree: {
                  minArgs: 1,
                  maxArgs: 1
                },
                search: {
                  minArgs: 1,
                  maxArgs: 1
                },
                update: {
                  minArgs: 2,
                  maxArgs: 2
                }
              },
              browserAction: {
                disable: {
                  minArgs: 0,
                  maxArgs: 1,
                  fallbackToNoCallback: !0
                },
                enable: {
                  minArgs: 0,
                  maxArgs: 1,
                  fallbackToNoCallback: !0
                },
                getBadgeBackgroundColor: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getBadgeText: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getPopup: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getTitle: {
                  minArgs: 1,
                  maxArgs: 1
                },
                openPopup: {
                  minArgs: 0,
                  maxArgs: 0
                },
                setBadgeBackgroundColor: {
                  minArgs: 1,
                  maxArgs: 1,
                  fallbackToNoCallback: !0
                },
                setBadgeText: {
                  minArgs: 1,
                  maxArgs: 1,
                  fallbackToNoCallback: !0
                },
                setIcon: {
                  minArgs: 1,
                  maxArgs: 1
                },
                setPopup: {
                  minArgs: 1,
                  maxArgs: 1,
                  fallbackToNoCallback: !0
                },
                setTitle: {
                  minArgs: 1,
                  maxArgs: 1,
                  fallbackToNoCallback: !0
                }
              },
              browsingData: {
                remove: {
                  minArgs: 2,
                  maxArgs: 2
                },
                removeCache: {
                  minArgs: 1,
                  maxArgs: 1
                },
                removeCookies: {
                  minArgs: 1,
                  maxArgs: 1
                },
                removeDownloads: {
                  minArgs: 1,
                  maxArgs: 1
                },
                removeFormData: {
                  minArgs: 1,
                  maxArgs: 1
                },
                removeHistory: {
                  minArgs: 1,
                  maxArgs: 1
                },
                removeLocalStorage: {
                  minArgs: 1,
                  maxArgs: 1
                },
                removePasswords: {
                  minArgs: 1,
                  maxArgs: 1
                },
                removePluginData: {
                  minArgs: 1,
                  maxArgs: 1
                },
                settings: {
                  minArgs: 0,
                  maxArgs: 0
                }
              },
              commands: {
                getAll: {
                  minArgs: 0,
                  maxArgs: 0
                }
              },
              contextMenus: {
                remove: {
                  minArgs: 1,
                  maxArgs: 1
                },
                removeAll: {
                  minArgs: 0,
                  maxArgs: 0
                },
                update: {
                  minArgs: 2,
                  maxArgs: 2
                }
              },
              cookies: {
                get: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getAll: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getAllCookieStores: {
                  minArgs: 0,
                  maxArgs: 0
                },
                remove: {
                  minArgs: 1,
                  maxArgs: 1
                },
                set: {
                  minArgs: 1,
                  maxArgs: 1
                }
              },
              devtools: {
                inspectedWindow: {
                  eval: {
                    minArgs: 1,
                    maxArgs: 2,
                    singleCallbackArg: !1
                  }
                },
                panels: {
                  create: {
                    minArgs: 3,
                    maxArgs: 3,
                    singleCallbackArg: !0
                  },
                  elements: {
                    createSidebarPane: {
                      minArgs: 1,
                      maxArgs: 1
                    }
                  }
                }
              },
              downloads: {
                cancel: {
                  minArgs: 1,
                  maxArgs: 1
                },
                download: {
                  minArgs: 1,
                  maxArgs: 1
                },
                erase: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getFileIcon: {
                  minArgs: 1,
                  maxArgs: 2
                },
                open: {
                  minArgs: 1,
                  maxArgs: 1,
                  fallbackToNoCallback: !0
                },
                pause: {
                  minArgs: 1,
                  maxArgs: 1
                },
                removeFile: {
                  minArgs: 1,
                  maxArgs: 1
                },
                resume: {
                  minArgs: 1,
                  maxArgs: 1
                },
                search: {
                  minArgs: 1,
                  maxArgs: 1
                },
                show: {
                  minArgs: 1,
                  maxArgs: 1,
                  fallbackToNoCallback: !0
                }
              },
              extension: {
                isAllowedFileSchemeAccess: {
                  minArgs: 0,
                  maxArgs: 0
                },
                isAllowedIncognitoAccess: {
                  minArgs: 0,
                  maxArgs: 0
                }
              },
              history: {
                addUrl: {
                  minArgs: 1,
                  maxArgs: 1
                },
                deleteAll: {
                  minArgs: 0,
                  maxArgs: 0
                },
                deleteRange: {
                  minArgs: 1,
                  maxArgs: 1
                },
                deleteUrl: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getVisits: {
                  minArgs: 1,
                  maxArgs: 1
                },
                search: {
                  minArgs: 1,
                  maxArgs: 1
                }
              },
              i18n: {
                detectLanguage: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getAcceptLanguages: {
                  minArgs: 0,
                  maxArgs: 0
                }
              },
              identity: {
                launchWebAuthFlow: {
                  minArgs: 1,
                  maxArgs: 1
                }
              },
              idle: {
                queryState: {
                  minArgs: 1,
                  maxArgs: 1
                }
              },
              management: {
                get: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getAll: {
                  minArgs: 0,
                  maxArgs: 0
                },
                getSelf: {
                  minArgs: 0,
                  maxArgs: 0
                },
                setEnabled: {
                  minArgs: 2,
                  maxArgs: 2
                },
                uninstallSelf: {
                  minArgs: 0,
                  maxArgs: 1
                }
              },
              notifications: {
                clear: {
                  minArgs: 1,
                  maxArgs: 1
                },
                create: {
                  minArgs: 1,
                  maxArgs: 2
                },
                getAll: {
                  minArgs: 0,
                  maxArgs: 0
                },
                getPermissionLevel: {
                  minArgs: 0,
                  maxArgs: 0
                },
                update: {
                  minArgs: 2,
                  maxArgs: 2
                }
              },
              pageAction: {
                getPopup: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getTitle: {
                  minArgs: 1,
                  maxArgs: 1
                },
                hide: {
                  minArgs: 1,
                  maxArgs: 1,
                  fallbackToNoCallback: !0
                },
                setIcon: {
                  minArgs: 1,
                  maxArgs: 1
                },
                setPopup: {
                  minArgs: 1,
                  maxArgs: 1,
                  fallbackToNoCallback: !0
                },
                setTitle: {
                  minArgs: 1,
                  maxArgs: 1,
                  fallbackToNoCallback: !0
                },
                show: {
                  minArgs: 1,
                  maxArgs: 1,
                  fallbackToNoCallback: !0
                }
              },
              permissions: {
                contains: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getAll: {
                  minArgs: 0,
                  maxArgs: 0
                },
                remove: {
                  minArgs: 1,
                  maxArgs: 1
                },
                request: {
                  minArgs: 1,
                  maxArgs: 1
                }
              },
              runtime: {
                getBackgroundPage: {
                  minArgs: 0,
                  maxArgs: 0
                },
                getPlatformInfo: {
                  minArgs: 0,
                  maxArgs: 0
                },
                openOptionsPage: {
                  minArgs: 0,
                  maxArgs: 0
                },
                requestUpdateCheck: {
                  minArgs: 0,
                  maxArgs: 0
                },
                sendMessage: {
                  minArgs: 1,
                  maxArgs: 3
                },
                sendNativeMessage: {
                  minArgs: 2,
                  maxArgs: 2
                },
                setUninstallURL: {
                  minArgs: 1,
                  maxArgs: 1
                }
              },
              sessions: {
                getDevices: {
                  minArgs: 0,
                  maxArgs: 1
                },
                getRecentlyClosed: {
                  minArgs: 0,
                  maxArgs: 1
                },
                restore: {
                  minArgs: 0,
                  maxArgs: 1
                }
              },
              storage: {
                local: {
                  clear: {
                    minArgs: 0,
                    maxArgs: 0
                  },
                  get: {
                    minArgs: 0,
                    maxArgs: 1
                  },
                  getBytesInUse: {
                    minArgs: 0,
                    maxArgs: 1
                  },
                  remove: {
                    minArgs: 1,
                    maxArgs: 1
                  },
                  set: {
                    minArgs: 1,
                    maxArgs: 1
                  }
                },
                managed: {
                  get: {
                    minArgs: 0,
                    maxArgs: 1
                  },
                  getBytesInUse: {
                    minArgs: 0,
                    maxArgs: 1
                  }
                },
                sync: {
                  clear: {
                    minArgs: 0,
                    maxArgs: 0
                  },
                  get: {
                    minArgs: 0,
                    maxArgs: 1
                  },
                  getBytesInUse: {
                    minArgs: 0,
                    maxArgs: 1
                  },
                  remove: {
                    minArgs: 1,
                    maxArgs: 1
                  },
                  set: {
                    minArgs: 1,
                    maxArgs: 1
                  }
                }
              },
              tabs: {
                captureVisibleTab: {
                  minArgs: 0,
                  maxArgs: 2
                },
                create: {
                  minArgs: 1,
                  maxArgs: 1
                },
                detectLanguage: {
                  minArgs: 0,
                  maxArgs: 1
                },
                discard: {
                  minArgs: 0,
                  maxArgs: 1
                },
                duplicate: {
                  minArgs: 1,
                  maxArgs: 1
                },
                executeScript: {
                  minArgs: 1,
                  maxArgs: 2
                },
                get: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getCurrent: {
                  minArgs: 0,
                  maxArgs: 0
                },
                getZoom: {
                  minArgs: 0,
                  maxArgs: 1
                },
                getZoomSettings: {
                  minArgs: 0,
                  maxArgs: 1
                },
                goBack: {
                  minArgs: 0,
                  maxArgs: 1
                },
                goForward: {
                  minArgs: 0,
                  maxArgs: 1
                },
                highlight: {
                  minArgs: 1,
                  maxArgs: 1
                },
                insertCSS: {
                  minArgs: 1,
                  maxArgs: 2
                },
                move: {
                  minArgs: 2,
                  maxArgs: 2
                },
                query: {
                  minArgs: 1,
                  maxArgs: 1
                },
                reload: {
                  minArgs: 0,
                  maxArgs: 2
                },
                remove: {
                  minArgs: 1,
                  maxArgs: 1
                },
                removeCSS: {
                  minArgs: 1,
                  maxArgs: 2
                },
                sendMessage: {
                  minArgs: 2,
                  maxArgs: 3
                },
                setZoom: {
                  minArgs: 1,
                  maxArgs: 2
                },
                setZoomSettings: {
                  minArgs: 1,
                  maxArgs: 2
                },
                update: {
                  minArgs: 1,
                  maxArgs: 2
                }
              },
              topSites: {
                get: {
                  minArgs: 0,
                  maxArgs: 0
                }
              },
              webNavigation: {
                getAllFrames: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getFrame: {
                  minArgs: 1,
                  maxArgs: 1
                }
              },
              webRequest: {
                handlerBehaviorChanged: {
                  minArgs: 0,
                  maxArgs: 0
                }
              },
              windows: {
                create: {
                  minArgs: 0,
                  maxArgs: 1
                },
                get: {
                  minArgs: 1,
                  maxArgs: 2
                },
                getAll: {
                  minArgs: 0,
                  maxArgs: 1
                },
                getCurrent: {
                  minArgs: 0,
                  maxArgs: 1
                },
                getLastFocused: {
                  minArgs: 0,
                  maxArgs: 1
                },
                remove: {
                  minArgs: 1,
                  maxArgs: 1
                },
                update: {
                  minArgs: 2,
                  maxArgs: 2
                }
              }
            };
            if (Object.keys(o).length === 0) throw new Error("api-metadata.json has not been included in browser-polyfill");
            class s extends WeakMap {
              constructor(S, L = void 0) {
                super(L), this.createItem = S
              }
              get(S) {
                return this.has(S) || this.set(S, this.createItem(S)), super.get(S)
              }
            }
            let c = b => b && typeof b == "object" && typeof b.then == "function",
              h = (b, S) => (...L) => {
                a.runtime.lastError ? b.reject(new Error(a.runtime.lastError.message)) : S.singleCallbackArg || L.length <= 1 && S.singleCallbackArg !== !1 ? b.resolve(L[0]) : b.resolve(L)
              },
              f = b => b == 1 ? "argument" : "arguments",
              p = (b, S) => function (V, ...H) {
                if (H.length < S.minArgs) throw new Error(`Expected at least ${S.minArgs} ${f(S.minArgs)} for ${b}(), got ${H.length}`);
                if (H.length > S.maxArgs) throw new Error(`Expected at most ${S.maxArgs} ${f(S.maxArgs)} for ${b}(), got ${H.length}`);
                return new Promise((he, ne) => {
                  if (S.fallbackToNoCallback) try {
                    V[b](...H, h({
                      resolve: he,
                      reject: ne
                    }, S))
                  } catch ($) {
                    console.warn(`${b} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `, $), V[b](...H), S.fallbackToNoCallback = !1, S.noCallback = !0, he()
                  } else S.noCallback ? (V[b](...H), he()) : V[b](...H, h({
                    resolve: he,
                    reject: ne
                  }, S))
                })
              },
              _ = (b, S, L) => new Proxy(S, {
                apply(V, H, he) {
                  return L.call(H, b, ...he)
                }
              }),
              M = Function.call.bind(Object.prototype.hasOwnProperty),
              g = (b, S = {}, L = {}) => {
                let V = Object.create(null),
                  H = {
                    has(ne, $) {
                      return $ in b || $ in V
                    },
                    get(ne, $, j) {
                      if ($ in V) return V[$];
                      if (!($ in b)) return;
                      let z = b[$];
                      if (typeof z == "function")
                        if (typeof S[$] == "function") z = _(b, b[$], S[$]);
                        else if (M(L, $)) {
                          let ee = p($, L[$]);
                          z = _(b, b[$], ee)
                        } else z = z.bind(b);
                      else if (typeof z == "object" && z !== null && (M(S, $) || M(L, $))) z = g(z, S[$], L[$]);
                      else if (M(L, "*")) z = g(z, S[$], L["*"]);
                      else return Object.defineProperty(V, $, {
                        configurable: !0,
                        enumerable: !0,
                        get() {
                          return b[$]
                        },
                        set(ee) {
                          b[$] = ee
                        }
                      }), z;
                      return V[$] = z, z
                    },
                    set(ne, $, j, z) {
                      return $ in V ? V[$] = j : b[$] = j, !0
                    },
                    defineProperty(ne, $, j) {
                      return Reflect.defineProperty(V, $, j)
                    },
                    deleteProperty(ne, $) {
                      return Reflect.deleteProperty(V, $)
                    }
                  },
                  he = Object.create(b);
                return new Proxy(he, H)
              },
              A = b => ({
                addListener(S, L, ...V) {
                  S.addListener(b.get(L), ...V)
                },
                hasListener(S, L) {
                  return S.hasListener(b.get(L))
                },
                removeListener(S, L) {
                  S.removeListener(b.get(L))
                }
              }),
              x = new s(b => typeof b != "function" ? b : function (L) {
                let V = g(L, {}, {
                  getContent: {
                    minArgs: 0,
                    maxArgs: 0
                  }
                });
                b(V)
              }),
              k = new s(b => typeof b != "function" ? b : function (L, V, H) {
                let he = !1,
                  ne, $ = new Promise(W => {
                    ne = function (X) {
                      he = !0, W(X)
                    }
                  }),
                  j;
                try {
                  j = b(L, V, ne)
                } catch (W) {
                  j = Promise.reject(W)
                }
                let z = j !== !0 && c(j);
                if (j !== !0 && !z && !he) return !1;
                let ee = W => {
                  W.then(X => {
                    H(X)
                  }, X => {
                    let ie;
                    X && (X instanceof Error || typeof X.message == "string") ? ie = X.message : ie = "An unexpected error occurred", H({
                      __mozWebExtensionPolyfillReject__: !0,
                      message: ie
                    })
                  }).catch(X => {
                    console.error("Failed to send onMessage rejected reply", X)
                  })
                };
                return ee(z ? j : $), !0
              }),
              U = ({
                reject: b,
                resolve: S
              }, L) => {
                a.runtime.lastError ? a.runtime.lastError.message === t ? S() : b(new Error(a.runtime.lastError.message)) : L && L.__mozWebExtensionPolyfillReject__ ? b(new Error(L.message)) : S(L)
              },
              E = (b, S, L, ...V) => {
                if (V.length < S.minArgs) throw new Error(`Expected at least ${S.minArgs} ${f(S.minArgs)} for ${b}(), got ${V.length}`);
                if (V.length > S.maxArgs) throw new Error(`Expected at most ${S.maxArgs} ${f(S.maxArgs)} for ${b}(), got ${V.length}`);
                return new Promise((H, he) => {
                  let ne = U.bind(null, {
                    resolve: H,
                    reject: he
                  });
                  V.push(ne), L.sendMessage(...V)
                })
              },
              y = {
                devtools: {
                  network: {
                    onRequestFinished: A(x)
                  }
                },
                runtime: {
                  onMessage: A(k),
                  onMessageExternal: A(k),
                  sendMessage: E.bind(null, "sendMessage", {
                    minArgs: 1,
                    maxArgs: 3
                  })
                },
                tabs: {
                  sendMessage: E.bind(null, "sendMessage", {
                    minArgs: 2,
                    maxArgs: 3
                  })
                }
              },
              C = {
                clear: {
                  minArgs: 1,
                  maxArgs: 1
                },
                get: {
                  minArgs: 1,
                  maxArgs: 1
                },
                set: {
                  minArgs: 1,
                  maxArgs: 1
                }
              };
            return o.privacy = {
              network: {
                "*": C
              },
              services: {
                "*": C
              },
              websites: {
                "*": C
              }
            }, g(a, y, o)
          };
        e.exports = n(chrome)
      } else e.exports = globalThis.browser
    })
  });
  var xu = kt((sr, $a) => {
    var BI = O(P());
    (function () {
      var e, t = "4.17.21",
        n = 200,
        a = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",
        o = "Expected a function",
        s = "Invalid `variable` option passed into `_.template`",
        c = "__lodash_hash_undefined__",
        h = 500,
        f = "__lodash_placeholder__",
        p = 1,
        _ = 2,
        M = 4,
        g = 1,
        A = 2,
        x = 1,
        k = 2,
        U = 4,
        E = 8,
        y = 16,
        C = 32,
        b = 64,
        S = 128,
        L = 256,
        V = 512,
        H = 30,
        he = "...",
        ne = 800,
        $ = 16,
        j = 1,
        z = 2,
        ee = 3,
        W = 1 / 0,
        X = 9007199254740991,
        ie = 17976931348623157e292,
        ye = 0 / 0,
        Ae = 4294967295,
        Re = Ae - 1,
        nt = Ae >>> 1,
        N1 = [
          ["ary", S],
          ["bind", x],
          ["bindKey", k],
          ["curry", E],
          ["curryRight", y],
          ["flip", V],
          ["partial", C],
          ["partialRight", b],
          ["rearg", L]
        ],
        ft = "[object Arguments]",
        H1 = "[object Array]",
        w5 = "[object AsyncFunction]",
        e1 = "[object Boolean]",
        We = "[object Date]",
        D1 = "[object DOMException]",
        Tn = "[object Error]",
        tn = "[object Function]",
        Hu = "[object GeneratorFunction]",
        E1 = "[object Map]",
        vr = "[object Number]",
        d9 = "[object Null]",
        nn = "[object Object]",
        Du = "[object Promise]",
        p9 = "[object Proxy]",
        gr = "[object RegExp]",
        w1 = "[object Set]",
        yr = "[object String]",
        ja = "[object Symbol]",
        m9 = "[object Undefined]",
        _r = "[object WeakMap]",
        v9 = "[object WeakSet]",
        Er = "[object ArrayBuffer]",
        t0 = "[object DataView]",
        Jo = "[object Float32Array]",
        e7 = "[object Float64Array]",
        t7 = "[object Int8Array]",
        n7 = "[object Int16Array]",
        r7 = "[object Int32Array]",
        a7 = "[object Uint8Array]",
        i7 = "[object Uint8ClampedArray]",
        o7 = "[object Uint16Array]",
        s7 = "[object Uint32Array]",
        g9 = /\b__p \+= '';/g,
        y9 = /\b(__p \+=) '' \+/g,
        _9 = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
        Fu = /&(?:amp|lt|gt|quot|#39);/g,
        Uu = /[&<>"']/g,
        E9 = RegExp(Fu.source),
        w9 = RegExp(Uu.source),
        A9 = /<%-([\s\S]+?)%>/g,
        C9 = /<%([\s\S]+?)%>/g,
        Bu = /<%=([\s\S]+?)%>/g,
        b9 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        M9 = /^\w*$/,
        Z9 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        l7 = /[\\^$.*+?()[\]{}|]/g,
        S9 = RegExp(l7.source),
        c7 = /^\s+/,
        x9 = /\s/,
        I9 = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
        T9 = /\{\n\/\* \[wrapped with (.+)\] \*/,
        O9 = /,? & /,
        k9 = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
        L9 = /[()=,{}\[\]\/\s]/,
        P9 = /\\(\\)?/g,
        R9 = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
        Gu = /\w*$/,
        V9 = /^[-+]0x[0-9a-f]+$/i,
        N9 = /^0b[01]+$/i,
        H9 = /^\[object .+?Constructor\]$/,
        D9 = /^0o[0-7]+$/i,
        F9 = /^(?:0|[1-9]\d*)$/,
        U9 = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
        Wa = /($^)/,
        B9 = /['\n\r\u2028\u2029\\]/g,
        Ka = "\\ud800-\\udfff",
        G9 = "\\u0300-\\u036f",
        z9 = "\\ufe20-\\ufe2f",
        $9 = "\\u20d0-\\u20ff",
        zu = G9 + z9 + $9,
        $u = "\\u2700-\\u27bf",
        qu = "a-z\\xdf-\\xf6\\xf8-\\xff",
        q9 = "\\xac\\xb1\\xd7\\xf7",
        j9 = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",
        W9 = "\\u2000-\\u206f",
        K9 = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
        ju = "A-Z\\xc0-\\xd6\\xd8-\\xde",
        Wu = "\\ufe0e\\ufe0f",
        Ku = q9 + j9 + W9 + K9,
        u7 = "['\u2019]",
        Q9 = "[" + Ka + "]",
        Qu = "[" + Ku + "]",
        Qa = "[" + zu + "]",
        Yu = "\\d+",
        Y9 = "[" + $u + "]",
        Xu = "[" + qu + "]",
        Ju = "[^" + Ka + Ku + Yu + $u + qu + ju + "]",
        h7 = "\\ud83c[\\udffb-\\udfff]",
        X9 = "(?:" + Qa + "|" + h7 + ")",
        e4 = "[^" + Ka + "]",
        f7 = "(?:\\ud83c[\\udde6-\\uddff]){2}",
        d7 = "[\\ud800-\\udbff][\\udc00-\\udfff]",
        n0 = "[" + ju + "]",
        t4 = "\\u200d",
        n4 = "(?:" + Xu + "|" + Ju + ")",
        J9 = "(?:" + n0 + "|" + Ju + ")",
        r4 = "(?:" + u7 + "(?:d|ll|m|re|s|t|ve))?",
        a4 = "(?:" + u7 + "(?:D|LL|M|RE|S|T|VE))?",
        i4 = X9 + "?",
        o4 = "[" + Wu + "]?",
        em = "(?:" + t4 + "(?:" + [e4, f7, d7].join("|") + ")" + o4 + i4 + ")*",
        tm = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
        nm = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
        s4 = o4 + i4 + em,
        rm = "(?:" + [Y9, f7, d7].join("|") + ")" + s4,
        am = "(?:" + [e4 + Qa + "?", Qa, f7, d7, Q9].join("|") + ")",
        im = RegExp(u7, "g"),
        om = RegExp(Qa, "g"),
        p7 = RegExp(h7 + "(?=" + h7 + ")|" + am + s4, "g"),
        sm = RegExp([n0 + "?" + Xu + "+" + r4 + "(?=" + [Qu, n0, "$"].join("|") + ")", J9 + "+" + a4 + "(?=" + [Qu, n0 + n4, "$"].join("|") + ")", n0 + "?" + n4 + "+" + r4, n0 + "+" + a4, nm, tm, Yu, rm].join("|"), "g"),
        lm = RegExp("[" + t4 + Ka + zu + Wu + "]"),
        cm = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
        um = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"],
        hm = -1,
        ke = {};
      ke[Jo] = ke[e7] = ke[t7] = ke[n7] = ke[r7] = ke[a7] = ke[i7] = ke[o7] = ke[s7] = !0, ke[ft] = ke[H1] = ke[Er] = ke[e1] = ke[t0] = ke[We] = ke[Tn] = ke[tn] = ke[E1] = ke[vr] = ke[nn] = ke[gr] = ke[w1] = ke[yr] = ke[_r] = !1;
      var Ie = {};
      Ie[ft] = Ie[H1] = Ie[Er] = Ie[t0] = Ie[e1] = Ie[We] = Ie[Jo] = Ie[e7] = Ie[t7] = Ie[n7] = Ie[r7] = Ie[E1] = Ie[vr] = Ie[nn] = Ie[gr] = Ie[w1] = Ie[yr] = Ie[ja] = Ie[a7] = Ie[i7] = Ie[o7] = Ie[s7] = !0, Ie[Tn] = Ie[tn] = Ie[_r] = !1;
      var fm = {
        \u00C0: "A",
        \u00C1: "A",
        \u00C2: "A",
        \u00C3: "A",
        \u00C4: "A",
        \u00C5: "A",
        \u00E0: "a",
        \u00E1: "a",
        \u00E2: "a",
        \u00E3: "a",
        \u00E4: "a",
        \u00E5: "a",
        \u00C7: "C",
        \u00E7: "c",
        \u00D0: "D",
        \u00F0: "d",
        \u00C8: "E",
        \u00C9: "E",
        \u00CA: "E",
        \u00CB: "E",
        \u00E8: "e",
        \u00E9: "e",
        \u00EA: "e",
        \u00EB: "e",
        \u00CC: "I",
        \u00CD: "I",
        \u00CE: "I",
        \u00CF: "I",
        \u00EC: "i",
        \u00ED: "i",
        \u00EE: "i",
        \u00EF: "i",
        \u00D1: "N",
        \u00F1: "n",
        \u00D2: "O",
        \u00D3: "O",
        \u00D4: "O",
        \u00D5: "O",
        \u00D6: "O",
        \u00D8: "O",
        \u00F2: "o",
        \u00F3: "o",
        \u00F4: "o",
        \u00F5: "o",
        \u00F6: "o",
        \u00F8: "o",
        \u00D9: "U",
        \u00DA: "U",
        \u00DB: "U",
        \u00DC: "U",
        \u00F9: "u",
        \u00FA: "u",
        \u00FB: "u",
        \u00FC: "u",
        \u00DD: "Y",
        \u00FD: "y",
        \u00FF: "y",
        \u00C6: "Ae",
        \u00E6: "ae",
        \u00DE: "Th",
        \u00FE: "th",
        \u00DF: "ss",
        \u0100: "A",
        \u0102: "A",
        \u0104: "A",
        \u0101: "a",
        \u0103: "a",
        \u0105: "a",
        \u0106: "C",
        \u0108: "C",
        \u010A: "C",
        \u010C: "C",
        \u0107: "c",
        \u0109: "c",
        \u010B: "c",
        \u010D: "c",
        \u010E: "D",
        \u0110: "D",
        \u010F: "d",
        \u0111: "d",
        \u0112: "E",
        \u0114: "E",
        \u0116: "E",
        \u0118: "E",
        \u011A: "E",
        \u0113: "e",
        \u0115: "e",
        \u0117: "e",
        \u0119: "e",
        \u011B: "e",
        \u011C: "G",
        \u011E: "G",
        \u0120: "G",
        \u0122: "G",
        \u011D: "g",
        \u011F: "g",
        \u0121: "g",
        \u0123: "g",
        \u0124: "H",
        \u0126: "H",
        \u0125: "h",
        \u0127: "h",
        \u0128: "I",
        \u012A: "I",
        \u012C: "I",
        \u012E: "I",
        \u0130: "I",
        \u0129: "i",
        \u012B: "i",
        \u012D: "i",
        \u012F: "i",
        \u0131: "i",
        \u0134: "J",
        \u0135: "j",
        \u0136: "K",
        \u0137: "k",
        \u0138: "k",
        \u0139: "L",
        \u013B: "L",
        \u013D: "L",
        \u013F: "L",
        \u0141: "L",
        \u013A: "l",
        \u013C: "l",
        \u013E: "l",
        \u0140: "l",
        \u0142: "l",
        \u0143: "N",
        \u0145: "N",
        \u0147: "N",
        \u014A: "N",
        \u0144: "n",
        \u0146: "n",
        \u0148: "n",
        \u014B: "n",
        \u014C: "O",
        \u014E: "O",
        \u0150: "O",
        \u014D: "o",
        \u014F: "o",
        \u0151: "o",
        \u0154: "R",
        \u0156: "R",
        \u0158: "R",
        \u0155: "r",
        \u0157: "r",
        \u0159: "r",
        \u015A: "S",
        \u015C: "S",
        \u015E: "S",
        \u0160: "S",
        \u015B: "s",
        \u015D: "s",
        \u015F: "s",
        \u0161: "s",
        \u0162: "T",
        \u0164: "T",
        \u0166: "T",
        \u0163: "t",
        \u0165: "t",
        \u0167: "t",
        \u0168: "U",
        \u016A: "U",
        \u016C: "U",
        \u016E: "U",
        \u0170: "U",
        \u0172: "U",
        \u0169: "u",
        \u016B: "u",
        \u016D: "u",
        \u016F: "u",
        \u0171: "u",
        \u0173: "u",
        \u0174: "W",
        \u0175: "w",
        \u0176: "Y",
        \u0177: "y",
        \u0178: "Y",
        \u0179: "Z",
        \u017B: "Z",
        \u017D: "Z",
        \u017A: "z",
        \u017C: "z",
        \u017E: "z",
        \u0132: "IJ",
        \u0133: "ij",
        \u0152: "Oe",
        \u0153: "oe",
        \u0149: "'n",
        \u017F: "s"
      },
        dm = {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;"
        },
        pm = {
          "&amp;": "&",
          "&lt;": "<",
          "&gt;": ">",
          "&quot;": '"',
          "&#39;": "'"
        },
        mm = {
          "\\": "\\",
          "'": "'",
          "\n": "n",
          "\r": "r",
          "\u2028": "u2028",
          "\u2029": "u2029"
        },
        vm = parseFloat,
        gm = parseInt,
        l4 = typeof global == "object" && global && global.Object === Object && global,
        ym = typeof self == "object" && self && self.Object === Object && self,
        rt = l4 || ym || Function("return this")(),
        m7 = typeof sr == "object" && sr && !sr.nodeType && sr,
        A5 = m7 && typeof $a == "object" && $a && !$a.nodeType && $a,
        c4 = A5 && A5.exports === m7,
        v7 = c4 && l4.process,
        t1 = function () {
          try {
            var I = A5 && A5.require && A5.require("util").types;
            return I || v7 && v7.binding && v7.binding("util")
          } catch { }
        }(),
        u4 = t1 && t1.isArrayBuffer,
        h4 = t1 && t1.isDate,
        f4 = t1 && t1.isMap,
        d4 = t1 && t1.isRegExp,
        p4 = t1 && t1.isSet,
        m4 = t1 && t1.isTypedArray;

      function Ht(I, N, R) {
        switch (R.length) {
          case 0:
            return I.call(N);
          case 1:
            return I.call(N, R[0]);
          case 2:
            return I.call(N, R[0], R[1]);
          case 3:
            return I.call(N, R[0], R[1], R[2])
        }
        return I.apply(N, R)
      }

      function _m(I, N, R, Q) {
        for (var oe = -1, Ce = I == null ? 0 : I.length; ++oe < Ce;) {
          var Qe = I[oe];
          N(Q, Qe, R(Qe), I)
        }
        return Q
      }

      function n1(I, N) {
        for (var R = -1, Q = I == null ? 0 : I.length; ++R < Q && N(I[R], R, I) !== !1;);
        return I
      }

      function Em(I, N) {
        for (var R = I == null ? 0 : I.length; R-- && N(I[R], R, I) !== !1;);
        return I
      }

      function v4(I, N) {
        for (var R = -1, Q = I == null ? 0 : I.length; ++R < Q;)
          if (!N(I[R], R, I)) return !1;
        return !0
      }

      function On(I, N) {
        for (var R = -1, Q = I == null ? 0 : I.length, oe = 0, Ce = []; ++R < Q;) {
          var Qe = I[R];
          N(Qe, R, I) && (Ce[oe++] = Qe)
        }
        return Ce
      }

      function Ya(I, N) {
        var R = I == null ? 0 : I.length;
        return !!R && r0(I, N, 0) > -1
      }

      function g7(I, N, R) {
        for (var Q = -1, oe = I == null ? 0 : I.length; ++Q < oe;)
          if (R(N, I[Q])) return !0;
        return !1
      }

      function Ve(I, N) {
        for (var R = -1, Q = I == null ? 0 : I.length, oe = Array(Q); ++R < Q;) oe[R] = N(I[R], R, I);
        return oe
      }

      function kn(I, N) {
        for (var R = -1, Q = N.length, oe = I.length; ++R < Q;) I[oe + R] = N[R];
        return I
      }

      function y7(I, N, R, Q) {
        var oe = -1,
          Ce = I == null ? 0 : I.length;
        for (Q && Ce && (R = I[++oe]); ++oe < Ce;) R = N(R, I[oe], oe, I);
        return R
      }

      function wm(I, N, R, Q) {
        var oe = I == null ? 0 : I.length;
        for (Q && oe && (R = I[--oe]); oe--;) R = N(R, I[oe], oe, I);
        return R
      }

      function _7(I, N) {
        for (var R = -1, Q = I == null ? 0 : I.length; ++R < Q;)
          if (N(I[R], R, I)) return !0;
        return !1
      }
      var Am = E7("length");

      function Cm(I) {
        return I.split("")
      }

      function bm(I) {
        return I.match(k9) || []
      }

      function g4(I, N, R) {
        var Q;
        return R(I, function (oe, Ce, Qe) {
          if (N(oe, Ce, Qe)) return Q = Ce, !1
        }), Q
      }

      function Xa(I, N, R, Q) {
        for (var oe = I.length, Ce = R + (Q ? 1 : -1); Q ? Ce-- : ++Ce < oe;)
          if (N(I[Ce], Ce, I)) return Ce;
        return -1
      }

      function r0(I, N, R) {
        return N === N ? Vm(I, N, R) : Xa(I, y4, R)
      }

      function Mm(I, N, R, Q) {
        for (var oe = R - 1, Ce = I.length; ++oe < Ce;)
          if (Q(I[oe], N)) return oe;
        return -1
      }

      function y4(I) {
        return I !== I
      }

      function _4(I, N) {
        var R = I == null ? 0 : I.length;
        return R ? A7(I, N) / R : ye
      }

      function E7(I) {
        return function (N) {
          return N == null ? e : N[I]
        }
      }

      function w7(I) {
        return function (N) {
          return I == null ? e : I[N]
        }
      }

      function E4(I, N, R, Q, oe) {
        return oe(I, function (Ce, Qe, xe) {
          R = Q ? (Q = !1, Ce) : N(R, Ce, Qe, xe)
        }), R
      }

      function Zm(I, N) {
        var R = I.length;
        for (I.sort(N); R--;) I[R] = I[R].value;
        return I
      }

      function A7(I, N) {
        for (var R, Q = -1, oe = I.length; ++Q < oe;) {
          var Ce = N(I[Q]);
          Ce !== e && (R = R === e ? Ce : R + Ce)
        }
        return R
      }

      function C7(I, N) {
        for (var R = -1, Q = Array(I); ++R < I;) Q[R] = N(R);
        return Q
      }

      function Sm(I, N) {
        return Ve(N, function (R) {
          return [R, I[R]]
        })
      }

      function w4(I) {
        return I && I.slice(0, M4(I) + 1).replace(c7, "")
      }

      function Dt(I) {
        return function (N) {
          return I(N)
        }
      }

      function b7(I, N) {
        return Ve(N, function (R) {
          return I[R]
        })
      }

      function wr(I, N) {
        return I.has(N)
      }

      function A4(I, N) {
        for (var R = -1, Q = I.length; ++R < Q && r0(N, I[R], 0) > -1;);
        return R
      }

      function C4(I, N) {
        for (var R = I.length; R-- && r0(N, I[R], 0) > -1;);
        return R
      }

      function xm(I, N) {
        for (var R = I.length, Q = 0; R--;) I[R] === N && ++Q;
        return Q
      }
      var Im = w7(fm),
        Tm = w7(dm);

      function Om(I) {
        return "\\" + mm[I]
      }

      function km(I, N) {
        return I == null ? e : I[N]
      }

      function a0(I) {
        return lm.test(I)
      }

      function Lm(I) {
        return cm.test(I)
      }

      function Pm(I) {
        for (var N, R = []; !(N = I.next()).done;) R.push(N.value);
        return R
      }

      function M7(I) {
        var N = -1,
          R = Array(I.size);
        return I.forEach(function (Q, oe) {
          R[++N] = [oe, Q]
        }), R
      }

      function b4(I, N) {
        return function (R) {
          return I(N(R))
        }
      }

      function Ln(I, N) {
        for (var R = -1, Q = I.length, oe = 0, Ce = []; ++R < Q;) {
          var Qe = I[R];
          (Qe === N || Qe === f) && (I[R] = f, Ce[oe++] = R)
        }
        return Ce
      }

      function Ja(I) {
        var N = -1,
          R = Array(I.size);
        return I.forEach(function (Q) {
          R[++N] = Q
        }), R
      }

      function Rm(I) {
        var N = -1,
          R = Array(I.size);
        return I.forEach(function (Q) {
          R[++N] = [Q, Q]
        }), R
      }

      function Vm(I, N, R) {
        for (var Q = R - 1, oe = I.length; ++Q < oe;)
          if (I[Q] === N) return Q;
        return -1
      }

      function Nm(I, N, R) {
        for (var Q = R + 1; Q--;)
          if (I[Q] === N) return Q;
        return Q
      }

      function i0(I) {
        return a0(I) ? Dm(I) : Am(I)
      }

      function A1(I) {
        return a0(I) ? Fm(I) : Cm(I)
      }

      function M4(I) {
        for (var N = I.length; N-- && x9.test(I.charAt(N)););
        return N
      }
      var Hm = w7(pm);

      function Dm(I) {
        for (var N = p7.lastIndex = 0; p7.test(I);) ++N;
        return N
      }

      function Fm(I) {
        return I.match(p7) || []
      }

      function Um(I) {
        return I.match(sm) || []
      }
      var Bm = function I(N) {
        N = N == null ? rt : Pn.defaults(rt.Object(), N, Pn.pick(rt, um));
        var R = N.Array,
          Q = N.Date,
          oe = N.Error,
          Ce = N.Function,
          Qe = N.Math,
          xe = N.Object,
          Z7 = N.RegExp,
          Gm = N.String,
          r1 = N.TypeError,
          ei = R.prototype,
          zm = Ce.prototype,
          o0 = xe.prototype,
          ti = N["__core-js_shared__"],
          ni = zm.toString,
          Me = o0.hasOwnProperty,
          $m = 0,
          Z4 = function () {
            var r = /[^.]+$/.exec(ti && ti.keys && ti.keys.IE_PROTO || "");
            return r ? "Symbol(src)_1." + r : ""
          }(),
          ri = o0.toString,
          qm = ni.call(xe),
          jm = rt._,
          Wm = Z7("^" + ni.call(Me).replace(l7, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
          ai = c4 ? N.Buffer : e,
          Rn = N.Symbol,
          ii = N.Uint8Array,
          S4 = ai ? ai.allocUnsafe : e,
          oi = b4(xe.getPrototypeOf, xe),
          x4 = xe.create,
          I4 = o0.propertyIsEnumerable,
          si = ei.splice,
          T4 = Rn ? Rn.isConcatSpreadable : e,
          Ar = Rn ? Rn.iterator : e,
          C5 = Rn ? Rn.toStringTag : e,
          li = function () {
            try {
              var r = x5(xe, "defineProperty");
              return r({}, "", {}), r
            } catch { }
          }(),
          Km = N.clearTimeout !== rt.clearTimeout && N.clearTimeout,
          Qm = Q && Q.now !== rt.Date.now && Q.now,
          Ym = N.setTimeout !== rt.setTimeout && N.setTimeout,
          ci = Qe.ceil,
          ui = Qe.floor,
          S7 = xe.getOwnPropertySymbols,
          Xm = ai ? ai.isBuffer : e,
          O4 = N.isFinite,
          Jm = ei.join,
          ev = b4(xe.keys, xe),
          Ye = Qe.max,
          dt = Qe.min,
          tv = Q.now,
          nv = N.parseInt,
          k4 = Qe.random,
          rv = ei.reverse,
          x7 = x5(N, "DataView"),
          Cr = x5(N, "Map"),
          I7 = x5(N, "Promise"),
          s0 = x5(N, "Set"),
          br = x5(N, "WeakMap"),
          Mr = x5(xe, "create"),
          hi = br && new br,
          l0 = {},
          av = I5(x7),
          iv = I5(Cr),
          ov = I5(I7),
          sv = I5(s0),
          lv = I5(br),
          fi = Rn ? Rn.prototype : e,
          Zr = fi ? fi.valueOf : e,
          L4 = fi ? fi.toString : e;

        function m(r) {
          if (Be(r) && !le(r) && !(r instanceof me)) {
            if (r instanceof a1) return r;
            if (Me.call(r, "__wrapped__")) return P3(r)
          }
          return new a1(r)
        }
        var c0 = function () {
          function r() { }
          return function (i) {
            if (!He(i)) return {};
            if (x4) return x4(i);
            r.prototype = i;
            var l = new r;
            return r.prototype = e, l
          }
        }();

        function di() { }

        function a1(r, i) {
          this.__wrapped__ = r, this.__actions__ = [], this.__chain__ = !!i, this.__index__ = 0, this.__values__ = e
        }
        m.templateSettings = {
          escape: A9,
          evaluate: C9,
          interpolate: Bu,
          variable: "",
          imports: {
            _: m
          }
        }, m.prototype = di.prototype, m.prototype.constructor = m, a1.prototype = c0(di.prototype), a1.prototype.constructor = a1;

        function me(r) {
          this.__wrapped__ = r, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Ae, this.__views__ = []
        }

        function cv() {
          var r = new me(this.__wrapped__);
          return r.__actions__ = xt(this.__actions__), r.__dir__ = this.__dir__, r.__filtered__ = this.__filtered__, r.__iteratees__ = xt(this.__iteratees__), r.__takeCount__ = this.__takeCount__, r.__views__ = xt(this.__views__), r
        }

        function uv() {
          if (this.__filtered__) {
            var r = new me(this);
            r.__dir__ = -1, r.__filtered__ = !0
          } else r = this.clone(), r.__dir__ *= -1;
          return r
        }

        function hv() {
          var r = this.__wrapped__.value(),
            i = this.__dir__,
            l = le(r),
            u = i < 0,
            d = l ? r.length : 0,
            v = Cg(0, d, this.__views__),
            w = v.start,
            Z = v.end,
            T = Z - w,
            D = u ? Z : w - 1,
            F = this.__iteratees__,
            B = F.length,
            K = 0,
            J = dt(T, this.__takeCount__);
          if (!l || !u && d == T && J == T) return r3(r, this.__actions__);
          var re = [];
          e: for (; T-- && K < J;) {
            D += i;
            for (var ue = -1, ae = r[D]; ++ue < B;) {
              var pe = F[ue],
                ge = pe.iteratee,
                Bt = pe.type,
                Ct = ge(ae);
              if (Bt == z) ae = Ct;
              else if (!Ct) {
                if (Bt == j) continue e;
                break e
              }
            }
            re[K++] = ae
          }
          return re
        }
        me.prototype = c0(di.prototype), me.prototype.constructor = me;

        function b5(r) {
          var i = -1,
            l = r == null ? 0 : r.length;
          for (this.clear(); ++i < l;) {
            var u = r[i];
            this.set(u[0], u[1])
          }
        }

        function fv() {
          this.__data__ = Mr ? Mr(null) : {}, this.size = 0
        }

        function dv(r) {
          var i = this.has(r) && delete this.__data__[r];
          return this.size -= i ? 1 : 0, i
        }

        function pv(r) {
          var i = this.__data__;
          if (Mr) {
            var l = i[r];
            return l === c ? e : l
          }
          return Me.call(i, r) ? i[r] : e
        }

        function mv(r) {
          var i = this.__data__;
          return Mr ? i[r] !== e : Me.call(i, r)
        }

        function vv(r, i) {
          var l = this.__data__;
          return this.size += this.has(r) ? 0 : 1, l[r] = Mr && i === e ? c : i, this
        }
        b5.prototype.clear = fv, b5.prototype.delete = dv, b5.prototype.get = pv, b5.prototype.has = mv, b5.prototype.set = vv;

        function rn(r) {
          var i = -1,
            l = r == null ? 0 : r.length;
          for (this.clear(); ++i < l;) {
            var u = r[i];
            this.set(u[0], u[1])
          }
        }

        function gv() {
          this.__data__ = [], this.size = 0
        }

        function yv(r) {
          var i = this.__data__,
            l = pi(i, r);
          if (l < 0) return !1;
          var u = i.length - 1;
          return l == u ? i.pop() : si.call(i, l, 1), --this.size, !0
        }

        function _v(r) {
          var i = this.__data__,
            l = pi(i, r);
          return l < 0 ? e : i[l][1]
        }

        function Ev(r) {
          return pi(this.__data__, r) > -1
        }

        function wv(r, i) {
          var l = this.__data__,
            u = pi(l, r);
          return u < 0 ? (++this.size, l.push([r, i])) : l[u][1] = i, this
        }
        rn.prototype.clear = gv, rn.prototype.delete = yv, rn.prototype.get = _v, rn.prototype.has = Ev, rn.prototype.set = wv;

        function an(r) {
          var i = -1,
            l = r == null ? 0 : r.length;
          for (this.clear(); ++i < l;) {
            var u = r[i];
            this.set(u[0], u[1])
          }
        }

        function Av() {
          this.size = 0, this.__data__ = {
            hash: new b5,
            map: new (Cr || rn),
            string: new b5
          }
        }

        function Cv(r) {
          var i = Zi(this, r).delete(r);
          return this.size -= i ? 1 : 0, i
        }

        function bv(r) {
          return Zi(this, r).get(r)
        }

        function Mv(r) {
          return Zi(this, r).has(r)
        }

        function Zv(r, i) {
          var l = Zi(this, r),
            u = l.size;
          return l.set(r, i), this.size += l.size == u ? 0 : 1, this
        }
        an.prototype.clear = Av, an.prototype.delete = Cv, an.prototype.get = bv, an.prototype.has = Mv, an.prototype.set = Zv;

        function M5(r) {
          var i = -1,
            l = r == null ? 0 : r.length;
          for (this.__data__ = new an; ++i < l;) this.add(r[i])
        }

        function Sv(r) {
          return this.__data__.set(r, c), this
        }

        function xv(r) {
          return this.__data__.has(r)
        }
        M5.prototype.add = M5.prototype.push = Sv, M5.prototype.has = xv;

        function C1(r) {
          var i = this.__data__ = new rn(r);
          this.size = i.size
        }

        function Iv() {
          this.__data__ = new rn, this.size = 0
        }

        function Tv(r) {
          var i = this.__data__,
            l = i.delete(r);
          return this.size = i.size, l
        }

        function Ov(r) {
          return this.__data__.get(r)
        }

        function kv(r) {
          return this.__data__.has(r)
        }

        function Lv(r, i) {
          var l = this.__data__;
          if (l instanceof rn) {
            var u = l.__data__;
            if (!Cr || u.length < n - 1) return u.push([r, i]), this.size = ++l.size, this;
            l = this.__data__ = new an(u)
          }
          return l.set(r, i), this.size = l.size, this
        }
        C1.prototype.clear = Iv, C1.prototype.delete = Tv, C1.prototype.get = Ov, C1.prototype.has = kv, C1.prototype.set = Lv;

        function P4(r, i) {
          var l = le(r),
            u = !l && T5(r),
            d = !l && !u && Fn(r),
            v = !l && !u && !d && d0(r),
            w = l || u || d || v,
            Z = w ? C7(r.length, Gm) : [],
            T = Z.length;
          for (var D in r) (i || Me.call(r, D)) && !(w && (D == "length" || d && (D == "offset" || D == "parent") || v && (D == "buffer" || D == "byteLength" || D == "byteOffset") || cn(D, T))) && Z.push(D);
          return Z
        }

        function R4(r) {
          var i = r.length;
          return i ? r[F7(0, i - 1)] : e
        }

        function Pv(r, i) {
          return Si(xt(r), Z5(i, 0, r.length))
        }

        function Rv(r) {
          return Si(xt(r))
        }

        function T7(r, i, l) {
          (l !== e && !b1(r[i], l) || l === e && !(i in r)) && on(r, i, l)
        }

        function Sr(r, i, l) {
          var u = r[i];
          (!(Me.call(r, i) && b1(u, l)) || l === e && !(i in r)) && on(r, i, l)
        }

        function pi(r, i) {
          for (var l = r.length; l--;)
            if (b1(r[l][0], i)) return l;
          return -1
        }

        function Vv(r, i, l, u) {
          return Vn(r, function (d, v, w) {
            i(u, d, l(d), w)
          }), u
        }

        function V4(r, i) {
          return r && U1(i, at(i), r)
        }

        function Nv(r, i) {
          return r && U1(i, Tt(i), r)
        }

        function on(r, i, l) {
          i == "__proto__" && li ? li(r, i, {
            configurable: !0,
            enumerable: !0,
            value: l,
            writable: !0
          }) : r[i] = l
        }

        function O7(r, i) {
          for (var l = -1, u = i.length, d = R(u), v = r == null; ++l < u;) d[l] = v ? e : hs(r, i[l]);
          return d
        }

        function Z5(r, i, l) {
          return r === r && (l !== e && (r = r <= l ? r : l), i !== e && (r = r >= i ? r : i)), r
        }

        function i1(r, i, l, u, d, v) {
          var w, Z = i & p,
            T = i & _,
            D = i & M;
          if (l && (w = d ? l(r, u, d, v) : l(r)), w !== e) return w;
          if (!He(r)) return r;
          var F = le(r);
          if (F) {
            if (w = Mg(r), !Z) return xt(r, w)
          } else {
            var B = pt(r),
              K = B == tn || B == Hu;
            if (Fn(r)) return o3(r, Z);
            if (B == nn || B == ft || K && !d) {
              if (w = T || K ? {} : M3(r), !Z) return T ? pg(r, Nv(w, r)) : dg(r, V4(w, r))
            } else {
              if (!Ie[B]) return d ? r : {};
              w = Zg(r, B, Z)
            }
          }
          v || (v = new C1);
          var J = v.get(r);
          if (J) return J;
          v.set(r, w), e6(r) ? r.forEach(function (ae) {
            w.add(i1(ae, i, l, ae, r, v))
          }) : X3(r) && r.forEach(function (ae, pe) {
            w.set(pe, i1(ae, i, l, pe, r, v))
          });
          var re = D ? T ? Y7 : Q7 : T ? Tt : at,
            ue = F ? e : re(r);
          return n1(ue || r, function (ae, pe) {
            ue && (pe = ae, ae = r[pe]), Sr(w, pe, i1(ae, i, l, pe, r, v))
          }), w
        }

        function Hv(r) {
          var i = at(r);
          return function (l) {
            return N4(l, r, i)
          }
        }

        function N4(r, i, l) {
          var u = l.length;
          if (r == null) return !u;
          for (r = xe(r); u--;) {
            var d = l[u],
              v = i[d],
              w = r[d];
            if (w === e && !(d in r) || !v(w)) return !1
          }
          return !0
        }

        function H4(r, i, l) {
          if (typeof r != "function") throw new r1(o);
          return Pr(function () {
            r.apply(e, l)
          }, i)
        }

        function xr(r, i, l, u) {
          var d = -1,
            v = Ya,
            w = !0,
            Z = r.length,
            T = [],
            D = i.length;
          if (!Z) return T;
          l && (i = Ve(i, Dt(l))), u ? (v = g7, w = !1) : i.length >= n && (v = wr, w = !1, i = new M5(i));
          e: for (; ++d < Z;) {
            var F = r[d],
              B = l == null ? F : l(F);
            if (F = u || F !== 0 ? F : 0, w && B === B) {
              for (var K = D; K--;)
                if (i[K] === B) continue e;
              T.push(F)
            } else v(i, B, u) || T.push(F)
          }
          return T
        }
        var Vn = h3(F1),
          D4 = h3(L7, !0);

        function Dv(r, i) {
          var l = !0;
          return Vn(r, function (u, d, v) {
            return l = !!i(u, d, v), l
          }), l
        }

        function mi(r, i, l) {
          for (var u = -1, d = r.length; ++u < d;) {
            var v = r[u],
              w = i(v);
            if (w != null && (Z === e ? w === w && !Ut(w) : l(w, Z))) var Z = w,
              T = v
          }
          return T
        }

        function Fv(r, i, l, u) {
          var d = r.length;
          for (l = ce(l), l < 0 && (l = -l > d ? 0 : d + l), u = u === e || u > d ? d : ce(u), u < 0 && (u += d), u = l > u ? 0 : n6(u); l < u;) r[l++] = i;
          return r
        }

        function F4(r, i) {
          var l = [];
          return Vn(r, function (u, d, v) {
            i(u, d, v) && l.push(u)
          }), l
        }

        function st(r, i, l, u, d) {
          var v = -1,
            w = r.length;
          for (l || (l = xg), d || (d = []); ++v < w;) {
            var Z = r[v];
            i > 0 && l(Z) ? i > 1 ? st(Z, i - 1, l, u, d) : kn(d, Z) : u || (d[d.length] = Z)
          }
          return d
        }
        var k7 = f3(),
          U4 = f3(!0);

        function F1(r, i) {
          return r && k7(r, i, at)
        }

        function L7(r, i) {
          return r && U4(r, i, at)
        }

        function vi(r, i) {
          return On(i, function (l) {
            return un(r[l])
          })
        }

        function S5(r, i) {
          i = Hn(i, r);
          for (var l = 0, u = i.length; r != null && l < u;) r = r[B1(i[l++])];
          return l && l == u ? r : e
        }

        function B4(r, i, l) {
          var u = i(r);
          return le(r) ? u : kn(u, l(r))
        }

        function wt(r) {
          return r == null ? r === e ? m9 : d9 : C5 && C5 in xe(r) ? Ag(r) : Rg(r)
        }

        function P7(r, i) {
          return r > i
        }

        function Uv(r, i) {
          return r != null && Me.call(r, i)
        }

        function Bv(r, i) {
          return r != null && i in xe(r)
        }

        function Gv(r, i, l) {
          return r >= dt(i, l) && r < Ye(i, l)
        }

        function R7(r, i, l) {
          for (var u = l ? g7 : Ya, d = r[0].length, v = r.length, w = v, Z = R(v), T = 1 / 0, D = []; w--;) {
            var F = r[w];
            w && i && (F = Ve(F, Dt(i))), T = dt(F.length, T), Z[w] = !l && (i || d >= 120 && F.length >= 120) ? new M5(w && F) : e
          }
          F = r[0];
          var B = -1,
            K = Z[0];
          e: for (; ++B < d && D.length < T;) {
            var J = F[B],
              re = i ? i(J) : J;
            if (J = l || J !== 0 ? J : 0, !(K ? wr(K, re) : u(D, re, l))) {
              for (w = v; --w;) {
                var ue = Z[w];
                if (!(ue ? wr(ue, re) : u(r[w], re, l))) continue e
              }
              K && K.push(re), D.push(J)
            }
          }
          return D
        }

        function zv(r, i, l, u) {
          return F1(r, function (d, v, w) {
            i(u, l(d), v, w)
          }), u
        }

        function Ir(r, i, l) {
          i = Hn(i, r), r = I3(r, i);
          var u = r == null ? r : r[B1(s1(i))];
          return u == null ? e : Ht(u, r, l)
        }

        function G4(r) {
          return Be(r) && wt(r) == ft
        }

        function $v(r) {
          return Be(r) && wt(r) == Er
        }

        function qv(r) {
          return Be(r) && wt(r) == We
        }

        function Tr(r, i, l, u, d) {
          return r === i ? !0 : r == null || i == null || !Be(r) && !Be(i) ? r !== r && i !== i : jv(r, i, l, u, Tr, d)
        }

        function jv(r, i, l, u, d, v) {
          var w = le(r),
            Z = le(i),
            T = w ? H1 : pt(r),
            D = Z ? H1 : pt(i);
          T = T == ft ? nn : T, D = D == ft ? nn : D;
          var F = T == nn,
            B = D == nn,
            K = T == D;
          if (K && Fn(r)) {
            if (!Fn(i)) return !1;
            w = !0, F = !1
          }
          if (K && !F) return v || (v = new C1), w || d0(r) ? A3(r, i, l, u, d, v) : Eg(r, i, T, l, u, d, v);
          if (!(l & g)) {
            var J = F && Me.call(r, "__wrapped__"),
              re = B && Me.call(i, "__wrapped__");
            if (J || re) {
              var ue = J ? r.value() : r,
                ae = re ? i.value() : i;
              return v || (v = new C1), d(ue, ae, l, u, v)
            }
          }
          return K ? (v || (v = new C1), wg(r, i, l, u, d, v)) : !1
        }

        function Wv(r) {
          return Be(r) && pt(r) == E1
        }

        function V7(r, i, l, u) {
          var d = l.length,
            v = d,
            w = !u;
          if (r == null) return !v;
          for (r = xe(r); d--;) {
            var Z = l[d];
            if (w && Z[2] ? Z[1] !== r[Z[0]] : !(Z[0] in r)) return !1
          }
          for (; ++d < v;) {
            Z = l[d];
            var T = Z[0],
              D = r[T],
              F = Z[1];
            if (w && Z[2]) {
              if (D === e && !(T in r)) return !1
            } else {
              var B = new C1;
              if (u) var K = u(D, F, T, r, i, B);
              if (!(K === e ? Tr(F, D, g | A, u, B) : K)) return !1
            }
          }
          return !0
        }

        function z4(r) {
          if (!He(r) || Tg(r)) return !1;
          var i = un(r) ? Wm : H9;
          return i.test(I5(r))
        }

        function Kv(r) {
          return Be(r) && wt(r) == gr
        }

        function Qv(r) {
          return Be(r) && pt(r) == w1
        }

        function Yv(r) {
          return Be(r) && Li(r.length) && !!ke[wt(r)]
        }

        function $4(r) {
          return typeof r == "function" ? r : r == null ? Ot : typeof r == "object" ? le(r) ? W4(r[0], r[1]) : j4(r) : d6(r)
        }

        function N7(r) {
          if (!Lr(r)) return ev(r);
          var i = [];
          for (var l in xe(r)) Me.call(r, l) && l != "constructor" && i.push(l);
          return i
        }

        function Xv(r) {
          if (!He(r)) return Pg(r);
          var i = Lr(r),
            l = [];
          for (var u in r) u == "constructor" && (i || !Me.call(r, u)) || l.push(u);
          return l
        }

        function H7(r, i) {
          return r < i
        }

        function q4(r, i) {
          var l = -1,
            u = It(r) ? R(r.length) : [];
          return Vn(r, function (d, v, w) {
            u[++l] = i(d, v, w)
          }), u
        }

        function j4(r) {
          var i = J7(r);
          return i.length == 1 && i[0][2] ? S3(i[0][0], i[0][1]) : function (l) {
            return l === r || V7(l, r, i)
          }
        }

        function W4(r, i) {
          return ts(r) && Z3(i) ? S3(B1(r), i) : function (l) {
            var u = hs(l, r);
            return u === e && u === i ? fs(l, r) : Tr(i, u, g | A)
          }
        }

        function gi(r, i, l, u, d) {
          r !== i && k7(i, function (v, w) {
            if (d || (d = new C1), He(v)) Jv(r, i, w, l, gi, u, d);
            else {
              var Z = u ? u(rs(r, w), v, w + "", r, i, d) : e;
              Z === e && (Z = v), T7(r, w, Z)
            }
          }, Tt)
        }

        function Jv(r, i, l, u, d, v, w) {
          var Z = rs(r, l),
            T = rs(i, l),
            D = w.get(T);
          if (D) {
            T7(r, l, D);
            return
          }
          var F = v ? v(Z, T, l + "", r, i, w) : e,
            B = F === e;
          if (B) {
            var K = le(T),
              J = !K && Fn(T),
              re = !K && !J && d0(T);
            F = T, K || J || re ? le(Z) ? F = Z : $e(Z) ? F = xt(Z) : J ? (B = !1, F = o3(T, !0)) : re ? (B = !1, F = s3(T, !0)) : F = [] : Rr(T) || T5(T) ? (F = Z, T5(Z) ? F = r6(Z) : (!He(Z) || un(Z)) && (F = M3(T))) : B = !1
          }
          B && (w.set(T, F), d(F, T, u, v, w), w.delete(T)), T7(r, l, F)
        }

        function K4(r, i) {
          var l = r.length;
          if (l) return i += i < 0 ? l : 0, cn(i, l) ? r[i] : e
        }

        function Q4(r, i, l) {
          i.length ? i = Ve(i, function (v) {
            return le(v) ? function (w) {
              return S5(w, v.length === 1 ? v[0] : v)
            } : v
          }) : i = [Ot];
          var u = -1;
          i = Ve(i, Dt(te()));
          var d = q4(r, function (v, w, Z) {
            var T = Ve(i, function (D) {
              return D(v)
            });
            return {
              criteria: T,
              index: ++u,
              value: v
            }
          });
          return Zm(d, function (v, w) {
            return fg(v, w, l)
          })
        }

        function eg(r, i) {
          return Y4(r, i, function (l, u) {
            return fs(r, u)
          })
        }

        function Y4(r, i, l) {
          for (var u = -1, d = i.length, v = {}; ++u < d;) {
            var w = i[u],
              Z = S5(r, w);
            l(Z, w) && Or(v, Hn(w, r), Z)
          }
          return v
        }

        function tg(r) {
          return function (i) {
            return S5(i, r)
          }
        }

        function D7(r, i, l, u) {
          var d = u ? Mm : r0,
            v = -1,
            w = i.length,
            Z = r;
          for (r === i && (i = xt(i)), l && (Z = Ve(r, Dt(l))); ++v < w;)
            for (var T = 0, D = i[v], F = l ? l(D) : D;
              (T = d(Z, F, T, u)) > -1;) Z !== r && si.call(Z, T, 1), si.call(r, T, 1);
          return r
        }

        function X4(r, i) {
          for (var l = r ? i.length : 0, u = l - 1; l--;) {
            var d = i[l];
            if (l == u || d !== v) {
              var v = d;
              cn(d) ? si.call(r, d, 1) : G7(r, d)
            }
          }
          return r
        }

        function F7(r, i) {
          return r + ui(k4() * (i - r + 1))
        }

        function ng(r, i, l, u) {
          for (var d = -1, v = Ye(ci((i - r) / (l || 1)), 0), w = R(v); v--;) w[u ? v : ++d] = r, r += l;
          return w
        }

        function U7(r, i) {
          var l = "";
          if (!r || i < 1 || i > X) return l;
          do i % 2 && (l += r), i = ui(i / 2), i && (r += r); while (i);
          return l
        }

        function fe(r, i) {
          return as(x3(r, i, Ot), r + "")
        }

        function rg(r) {
          return R4(p0(r))
        }

        function ag(r, i) {
          var l = p0(r);
          return Si(l, Z5(i, 0, l.length))
        }

        function Or(r, i, l, u) {
          if (!He(r)) return r;
          i = Hn(i, r);
          for (var d = -1, v = i.length, w = v - 1, Z = r; Z != null && ++d < v;) {
            var T = B1(i[d]),
              D = l;
            if (T === "__proto__" || T === "constructor" || T === "prototype") return r;
            if (d != w) {
              var F = Z[T];
              D = u ? u(F, T, Z) : e, D === e && (D = He(F) ? F : cn(i[d + 1]) ? [] : {})
            }
            Sr(Z, T, D), Z = Z[T]
          }
          return r
        }
        var J4 = hi ? function (r, i) {
          return hi.set(r, i), r
        } : Ot,
          ig = li ? function (r, i) {
            return li(r, "toString", {
              configurable: !0,
              enumerable: !1,
              value: ps(i),
              writable: !0
            })
          } : Ot;

        function og(r) {
          return Si(p0(r))
        }

        function o1(r, i, l) {
          var u = -1,
            d = r.length;
          i < 0 && (i = -i > d ? 0 : d + i), l = l > d ? d : l, l < 0 && (l += d), d = i > l ? 0 : l - i >>> 0, i >>>= 0;
          for (var v = R(d); ++u < d;) v[u] = r[u + i];
          return v
        }

        function sg(r, i) {
          var l;
          return Vn(r, function (u, d, v) {
            return l = i(u, d, v), !l
          }), !!l
        }

        function yi(r, i, l) {
          var u = 0,
            d = r == null ? u : r.length;
          if (typeof i == "number" && i === i && d <= nt) {
            for (; u < d;) {
              var v = u + d >>> 1,
                w = r[v];
              w !== null && !Ut(w) && (l ? w <= i : w < i) ? u = v + 1 : d = v
            }
            return d
          }
          return B7(r, i, Ot, l)
        }

        function B7(r, i, l, u) {
          var d = 0,
            v = r == null ? 0 : r.length;
          if (v === 0) return 0;
          i = l(i);
          for (var w = i !== i, Z = i === null, T = Ut(i), D = i === e; d < v;) {
            var F = ui((d + v) / 2),
              B = l(r[F]),
              K = B !== e,
              J = B === null,
              re = B === B,
              ue = Ut(B);
            if (w) var ae = u || re;
            else D ? ae = re && (u || K) : Z ? ae = re && K && (u || !J) : T ? ae = re && K && !J && (u || !ue) : J || ue ? ae = !1 : ae = u ? B <= i : B < i;
            ae ? d = F + 1 : v = F
          }
          return dt(v, Re)
        }

        function e3(r, i) {
          for (var l = -1, u = r.length, d = 0, v = []; ++l < u;) {
            var w = r[l],
              Z = i ? i(w) : w;
            if (!l || !b1(Z, T)) {
              var T = Z;
              v[d++] = w === 0 ? 0 : w
            }
          }
          return v
        }

        function t3(r) {
          return typeof r == "number" ? r : Ut(r) ? ye : +r
        }

        function Ft(r) {
          if (typeof r == "string") return r;
          if (le(r)) return Ve(r, Ft) + "";
          if (Ut(r)) return L4 ? L4.call(r) : "";
          var i = r + "";
          return i == "0" && 1 / r == -W ? "-0" : i
        }

        function Nn(r, i, l) {
          var u = -1,
            d = Ya,
            v = r.length,
            w = !0,
            Z = [],
            T = Z;
          if (l) w = !1, d = g7;
          else if (v >= n) {
            var D = i ? null : yg(r);
            if (D) return Ja(D);
            w = !1, d = wr, T = new M5
          } else T = i ? [] : Z;
          e: for (; ++u < v;) {
            var F = r[u],
              B = i ? i(F) : F;
            if (F = l || F !== 0 ? F : 0, w && B === B) {
              for (var K = T.length; K--;)
                if (T[K] === B) continue e;
              i && T.push(B), Z.push(F)
            } else d(T, B, l) || (T !== Z && T.push(B), Z.push(F))
          }
          return Z
        }

        function G7(r, i) {
          return i = Hn(i, r), r = I3(r, i), r == null || delete r[B1(s1(i))]
        }

        function n3(r, i, l, u) {
          return Or(r, i, l(S5(r, i)), u)
        }

        function _i(r, i, l, u) {
          for (var d = r.length, v = u ? d : -1;
            (u ? v-- : ++v < d) && i(r[v], v, r););
          return l ? o1(r, u ? 0 : v, u ? v + 1 : d) : o1(r, u ? v + 1 : 0, u ? d : v)
        }

        function r3(r, i) {
          var l = r;
          return l instanceof me && (l = l.value()), y7(i, function (u, d) {
            return d.func.apply(d.thisArg, kn([u], d.args))
          }, l)
        }

        function z7(r, i, l) {
          var u = r.length;
          if (u < 2) return u ? Nn(r[0]) : [];
          for (var d = -1, v = R(u); ++d < u;)
            for (var w = r[d], Z = -1; ++Z < u;) Z != d && (v[d] = xr(v[d] || w, r[Z], i, l));
          return Nn(st(v, 1), i, l)
        }

        function a3(r, i, l) {
          for (var u = -1, d = r.length, v = i.length, w = {}; ++u < d;) {
            var Z = u < v ? i[u] : e;
            l(w, r[u], Z)
          }
          return w
        }

        function $7(r) {
          return $e(r) ? r : []
        }

        function q7(r) {
          return typeof r == "function" ? r : Ot
        }

        function Hn(r, i) {
          return le(r) ? r : ts(r, i) ? [r] : L3(be(r))
        }
        var lg = fe;

        function Dn(r, i, l) {
          var u = r.length;
          return l = l === e ? u : l, !i && l >= u ? r : o1(r, i, l)
        }
        var i3 = Km || function (r) {
          return rt.clearTimeout(r)
        };

        function o3(r, i) {
          if (i) return r.slice();
          var l = r.length,
            u = S4 ? S4(l) : new r.constructor(l);
          return r.copy(u), u
        }

        function j7(r) {
          var i = new r.constructor(r.byteLength);
          return new ii(i).set(new ii(r)), i
        }

        function cg(r, i) {
          var l = i ? j7(r.buffer) : r.buffer;
          return new r.constructor(l, r.byteOffset, r.byteLength)
        }

        function ug(r) {
          var i = new r.constructor(r.source, Gu.exec(r));
          return i.lastIndex = r.lastIndex, i
        }

        function hg(r) {
          return Zr ? xe(Zr.call(r)) : {}
        }

        function s3(r, i) {
          var l = i ? j7(r.buffer) : r.buffer;
          return new r.constructor(l, r.byteOffset, r.length)
        }

        function l3(r, i) {
          if (r !== i) {
            var l = r !== e,
              u = r === null,
              d = r === r,
              v = Ut(r),
              w = i !== e,
              Z = i === null,
              T = i === i,
              D = Ut(i);
            if (!Z && !D && !v && r > i || v && w && T && !Z && !D || u && w && T || !l && T || !d) return 1;
            if (!u && !v && !D && r < i || D && l && d && !u && !v || Z && l && d || !w && d || !T) return -1
          }
          return 0
        }

        function fg(r, i, l) {
          for (var u = -1, d = r.criteria, v = i.criteria, w = d.length, Z = l.length; ++u < w;) {
            var T = l3(d[u], v[u]);
            if (T) {
              if (u >= Z) return T;
              var D = l[u];
              return T * (D == "desc" ? -1 : 1)
            }
          }
          return r.index - i.index
        }

        function c3(r, i, l, u) {
          for (var d = -1, v = r.length, w = l.length, Z = -1, T = i.length, D = Ye(v - w, 0), F = R(T + D), B = !u; ++Z < T;) F[Z] = i[Z];
          for (; ++d < w;)(B || d < v) && (F[l[d]] = r[d]);
          for (; D--;) F[Z++] = r[d++];
          return F
        }

        function u3(r, i, l, u) {
          for (var d = -1, v = r.length, w = -1, Z = l.length, T = -1, D = i.length, F = Ye(v - Z, 0), B = R(F + D), K = !u; ++d < F;) B[d] = r[d];
          for (var J = d; ++T < D;) B[J + T] = i[T];
          for (; ++w < Z;)(K || d < v) && (B[J + l[w]] = r[d++]);
          return B
        }

        function xt(r, i) {
          var l = -1,
            u = r.length;
          for (i || (i = R(u)); ++l < u;) i[l] = r[l];
          return i
        }

        function U1(r, i, l, u) {
          var d = !l;
          l || (l = {});
          for (var v = -1, w = i.length; ++v < w;) {
            var Z = i[v],
              T = u ? u(l[Z], r[Z], Z, l, r) : e;
            T === e && (T = r[Z]), d ? on(l, Z, T) : Sr(l, Z, T)
          }
          return l
        }

        function dg(r, i) {
          return U1(r, es(r), i)
        }

        function pg(r, i) {
          return U1(r, C3(r), i)
        }

        function Ei(r, i) {
          return function (l, u) {
            var d = le(l) ? _m : Vv,
              v = i ? i() : {};
            return d(l, r, te(u, 2), v)
          }
        }

        function u0(r) {
          return fe(function (i, l) {
            var u = -1,
              d = l.length,
              v = d > 1 ? l[d - 1] : e,
              w = d > 2 ? l[2] : e;
            for (v = r.length > 3 && typeof v == "function" ? (d--, v) : e, w && At(l[0], l[1], w) && (v = d < 3 ? e : v, d = 1), i = xe(i); ++u < d;) {
              var Z = l[u];
              Z && r(i, Z, u, v)
            }
            return i
          })
        }

        function h3(r, i) {
          return function (l, u) {
            if (l == null) return l;
            if (!It(l)) return r(l, u);
            for (var d = l.length, v = i ? d : -1, w = xe(l);
              (i ? v-- : ++v < d) && u(w[v], v, w) !== !1;);
            return l
          }
        }

        function f3(r) {
          return function (i, l, u) {
            for (var d = -1, v = xe(i), w = u(i), Z = w.length; Z--;) {
              var T = w[r ? Z : ++d];
              if (l(v[T], T, v) === !1) break
            }
            return i
          }
        }

        function mg(r, i, l) {
          var u = i & x,
            d = kr(r);

          function v() {
            var w = this && this !== rt && this instanceof v ? d : r;
            return w.apply(u ? l : this, arguments)
          }
          return v
        }

        function d3(r) {
          return function (i) {
            i = be(i);
            var l = a0(i) ? A1(i) : e,
              u = l ? l[0] : i.charAt(0),
              d = l ? Dn(l, 1).join("") : i.slice(1);
            return u[r]() + d
          }
        }

        function h0(r) {
          return function (i) {
            return y7(h6(u6(i).replace(im, "")), r, "")
          }
        }

        function kr(r) {
          return function () {
            var i = arguments;
            switch (i.length) {
              case 0:
                return new r;
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
                return new r(i[0], i[1], i[2], i[3], i[4], i[5], i[6])
            }
            var l = c0(r.prototype),
              u = r.apply(l, i);
            return He(u) ? u : l
          }
        }

        function vg(r, i, l) {
          var u = kr(r);

          function d() {
            for (var v = arguments.length, w = R(v), Z = v, T = f0(d); Z--;) w[Z] = arguments[Z];
            var D = v < 3 && w[0] !== T && w[v - 1] !== T ? [] : Ln(w, T);
            if (v -= D.length, v < l) return y3(r, i, wi, d.placeholder, e, w, D, e, e, l - v);
            var F = this && this !== rt && this instanceof d ? u : r;
            return Ht(F, this, w)
          }
          return d
        }

        function p3(r) {
          return function (i, l, u) {
            var d = xe(i);
            if (!It(i)) {
              var v = te(l, 3);
              i = at(i), l = function (Z) {
                return v(d[Z], Z, d)
              }
            }
            var w = r(i, l, u);
            return w > -1 ? d[v ? i[w] : w] : e
          }
        }

        function m3(r) {
          return ln(function (i) {
            var l = i.length,
              u = l,
              d = a1.prototype.thru;
            for (r && i.reverse(); u--;) {
              var v = i[u];
              if (typeof v != "function") throw new r1(o);
              if (d && !w && Mi(v) == "wrapper") var w = new a1([], !0)
            }
            for (u = w ? u : l; ++u < l;) {
              v = i[u];
              var Z = Mi(v),
                T = Z == "wrapper" ? X7(v) : e;
              T && ns(T[0]) && T[1] == (S | E | C | L) && !T[4].length && T[9] == 1 ? w = w[Mi(T[0])].apply(w, T[3]) : w = v.length == 1 && ns(v) ? w[Z]() : w.thru(v)
            }
            return function () {
              var D = arguments,
                F = D[0];
              if (w && D.length == 1 && le(F)) return w.plant(F).value();
              for (var B = 0, K = l ? i[B].apply(this, D) : F; ++B < l;) K = i[B].call(this, K);
              return K
            }
          })
        }

        function wi(r, i, l, u, d, v, w, Z, T, D) {
          var F = i & S,
            B = i & x,
            K = i & k,
            J = i & (E | y),
            re = i & V,
            ue = K ? e : kr(r);

          function ae() {
            for (var pe = arguments.length, ge = R(pe), Bt = pe; Bt--;) ge[Bt] = arguments[Bt];
            if (J) var Ct = f0(ae),
              Gt = xm(ge, Ct);
            if (u && (ge = c3(ge, u, d, J)), v && (ge = u3(ge, v, w, J)), pe -= Gt, J && pe < D) {
              var qe = Ln(ge, Ct);
              return y3(r, i, wi, ae.placeholder, l, ge, qe, Z, T, D - pe)
            }
            var M1 = B ? l : this,
              fn = K ? M1[r] : r;
            return pe = ge.length, Z ? ge = Vg(ge, Z) : re && pe > 1 && ge.reverse(), F && T < pe && (ge.length = T), this && this !== rt && this instanceof ae && (fn = ue || kr(fn)), fn.apply(M1, ge)
          }
          return ae
        }

        function v3(r, i) {
          return function (l, u) {
            return zv(l, r, i(u), {})
          }
        }

        function Ai(r, i) {
          return function (l, u) {
            var d;
            if (l === e && u === e) return i;
            if (l !== e && (d = l), u !== e) {
              if (d === e) return u;
              typeof l == "string" || typeof u == "string" ? (l = Ft(l), u = Ft(u)) : (l = t3(l), u = t3(u)), d = r(l, u)
            }
            return d
          }
        }

        function W7(r) {
          return ln(function (i) {
            return i = Ve(i, Dt(te())), fe(function (l) {
              var u = this;
              return r(i, function (d) {
                return Ht(d, u, l)
              })
            })
          })
        }

        function Ci(r, i) {
          i = i === e ? " " : Ft(i);
          var l = i.length;
          if (l < 2) return l ? U7(i, r) : i;
          var u = U7(i, ci(r / i0(i)));
          return a0(i) ? Dn(A1(u), 0, r).join("") : u.slice(0, r)
        }

        function gg(r, i, l, u) {
          var d = i & x,
            v = kr(r);

          function w() {
            for (var Z = -1, T = arguments.length, D = -1, F = u.length, B = R(F + T), K = this && this !== rt && this instanceof w ? v : r; ++D < F;) B[D] = u[D];
            for (; T--;) B[D++] = arguments[++Z];
            return Ht(K, d ? l : this, B)
          }
          return w
        }

        function g3(r) {
          return function (i, l, u) {
            return u && typeof u != "number" && At(i, l, u) && (l = u = e), i = hn(i), l === e ? (l = i, i = 0) : l = hn(l), u = u === e ? i < l ? 1 : -1 : hn(u), ng(i, l, u, r)
          }
        }

        function bi(r) {
          return function (i, l) {
            return typeof i == "string" && typeof l == "string" || (i = l1(i), l = l1(l)), r(i, l)
          }
        }

        function y3(r, i, l, u, d, v, w, Z, T, D) {
          var F = i & E,
            B = F ? w : e,
            K = F ? e : w,
            J = F ? v : e,
            re = F ? e : v;
          i |= F ? C : b, i &= ~(F ? b : C), i & U || (i &= ~(x | k));
          var ue = [r, i, d, J, B, re, K, Z, T, D],
            ae = l.apply(e, ue);
          return ns(r) && T3(ae, ue), ae.placeholder = u, O3(ae, r, i)
        }

        function K7(r) {
          var i = Qe[r];
          return function (l, u) {
            if (l = l1(l), u = u == null ? 0 : dt(ce(u), 292), u && O4(l)) {
              var d = (be(l) + "e").split("e"),
                v = i(d[0] + "e" + (+d[1] + u));
              return d = (be(v) + "e").split("e"), +(d[0] + "e" + (+d[1] - u))
            }
            return i(l)
          }
        }
        var yg = s0 && 1 / Ja(new s0([, -0]))[1] == W ? function (r) {
          return new s0(r)
        } : gs;

        function _3(r) {
          return function (i) {
            var l = pt(i);
            return l == E1 ? M7(i) : l == w1 ? Rm(i) : Sm(i, r(i))
          }
        }

        function sn(r, i, l, u, d, v, w, Z) {
          var T = i & k;
          if (!T && typeof r != "function") throw new r1(o);
          var D = u ? u.length : 0;
          if (D || (i &= ~(C | b), u = d = e), w = w === e ? w : Ye(ce(w), 0), Z = Z === e ? Z : ce(Z), D -= d ? d.length : 0, i & b) {
            var F = u,
              B = d;
            u = d = e
          }
          var K = T ? e : X7(r),
            J = [r, i, l, u, d, F, B, v, w, Z];
          if (K && Lg(J, K), r = J[0], i = J[1], l = J[2], u = J[3], d = J[4], Z = J[9] = J[9] === e ? T ? 0 : r.length : Ye(J[9] - D, 0), !Z && i & (E | y) && (i &= ~(E | y)), !i || i == x) var re = mg(r, i, l);
          else i == E || i == y ? re = vg(r, i, Z) : (i == C || i == (x | C)) && !d.length ? re = gg(r, i, l, u) : re = wi.apply(e, J);
          var ue = K ? J4 : T3;
          return O3(ue(re, J), r, i)
        }

        function E3(r, i, l, u) {
          return r === e || b1(r, o0[l]) && !Me.call(u, l) ? i : r
        }

        function w3(r, i, l, u, d, v) {
          return He(r) && He(i) && (v.set(i, r), gi(r, i, e, w3, v), v.delete(i)), r
        }

        function _g(r) {
          return Rr(r) ? e : r
        }

        function A3(r, i, l, u, d, v) {
          var w = l & g,
            Z = r.length,
            T = i.length;
          if (Z != T && !(w && T > Z)) return !1;
          var D = v.get(r),
            F = v.get(i);
          if (D && F) return D == i && F == r;
          var B = -1,
            K = !0,
            J = l & A ? new M5 : e;
          for (v.set(r, i), v.set(i, r); ++B < Z;) {
            var re = r[B],
              ue = i[B];
            if (u) var ae = w ? u(ue, re, B, i, r, v) : u(re, ue, B, r, i, v);
            if (ae !== e) {
              if (ae) continue;
              K = !1;
              break
            }
            if (J) {
              if (!_7(i, function (pe, ge) {
                if (!wr(J, ge) && (re === pe || d(re, pe, l, u, v))) return J.push(ge)
              })) {
                K = !1;
                break
              }
            } else if (!(re === ue || d(re, ue, l, u, v))) {
              K = !1;
              break
            }
          }
          return v.delete(r), v.delete(i), K
        }

        function Eg(r, i, l, u, d, v, w) {
          switch (l) {
            case t0:
              if (r.byteLength != i.byteLength || r.byteOffset != i.byteOffset) return !1;
              r = r.buffer, i = i.buffer;
            case Er:
              return !(r.byteLength != i.byteLength || !v(new ii(r), new ii(i)));
            case e1:
            case We:
            case vr:
              return b1(+r, +i);
            case Tn:
              return r.name == i.name && r.message == i.message;
            case gr:
            case yr:
              return r == i + "";
            case E1:
              var Z = M7;
            case w1:
              var T = u & g;
              if (Z || (Z = Ja), r.size != i.size && !T) return !1;
              var D = w.get(r);
              if (D) return D == i;
              u |= A, w.set(r, i);
              var F = A3(Z(r), Z(i), u, d, v, w);
              return w.delete(r), F;
            case ja:
              if (Zr) return Zr.call(r) == Zr.call(i)
          }
          return !1
        }

        function wg(r, i, l, u, d, v) {
          var w = l & g,
            Z = Q7(r),
            T = Z.length,
            D = Q7(i),
            F = D.length;
          if (T != F && !w) return !1;
          for (var B = T; B--;) {
            var K = Z[B];
            if (!(w ? K in i : Me.call(i, K))) return !1
          }
          var J = v.get(r),
            re = v.get(i);
          if (J && re) return J == i && re == r;
          var ue = !0;
          v.set(r, i), v.set(i, r);
          for (var ae = w; ++B < T;) {
            K = Z[B];
            var pe = r[K],
              ge = i[K];
            if (u) var Bt = w ? u(ge, pe, K, i, r, v) : u(pe, ge, K, r, i, v);
            if (!(Bt === e ? pe === ge || d(pe, ge, l, u, v) : Bt)) {
              ue = !1;
              break
            }
            ae || (ae = K == "constructor")
          }
          if (ue && !ae) {
            var Ct = r.constructor,
              Gt = i.constructor;
            Ct != Gt && "constructor" in r && "constructor" in i && !(typeof Ct == "function" && Ct instanceof Ct && typeof Gt == "function" && Gt instanceof Gt) && (ue = !1)
          }
          return v.delete(r), v.delete(i), ue
        }

        function ln(r) {
          return as(x3(r, e, N3), r + "")
        }

        function Q7(r) {
          return B4(r, at, es)
        }

        function Y7(r) {
          return B4(r, Tt, C3)
        }
        var X7 = hi ? function (r) {
          return hi.get(r)
        } : gs;

        function Mi(r) {
          for (var i = r.name + "", l = l0[i], u = Me.call(l0, i) ? l.length : 0; u--;) {
            var d = l[u],
              v = d.func;
            if (v == null || v == r) return d.name
          }
          return i
        }

        function f0(r) {
          var i = Me.call(m, "placeholder") ? m : r;
          return i.placeholder
        }

        function te() {
          var r = m.iteratee || ms;
          return r = r === ms ? $4 : r, arguments.length ? r(arguments[0], arguments[1]) : r
        }

        function Zi(r, i) {
          var l = r.__data__;
          return Ig(i) ? l[typeof i == "string" ? "string" : "hash"] : l.map
        }

        function J7(r) {
          for (var i = at(r), l = i.length; l--;) {
            var u = i[l],
              d = r[u];
            i[l] = [u, d, Z3(d)]
          }
          return i
        }

        function x5(r, i) {
          var l = km(r, i);
          return z4(l) ? l : e
        }

        function Ag(r) {
          var i = Me.call(r, C5),
            l = r[C5];
          try {
            r[C5] = e;
            var u = !0
          } catch { }
          var d = ri.call(r);
          return u && (i ? r[C5] = l : delete r[C5]), d
        }
        var es = S7 ? function (r) {
          return r == null ? [] : (r = xe(r), On(S7(r), function (i) {
            return I4.call(r, i)
          }))
        } : ys,
          C3 = S7 ? function (r) {
            for (var i = []; r;) kn(i, es(r)), r = oi(r);
            return i
          } : ys,
          pt = wt;
        (x7 && pt(new x7(new ArrayBuffer(1))) != t0 || Cr && pt(new Cr) != E1 || I7 && pt(I7.resolve()) != Du || s0 && pt(new s0) != w1 || br && pt(new br) != _r) && (pt = function (r) {
          var i = wt(r),
            l = i == nn ? r.constructor : e,
            u = l ? I5(l) : "";
          if (u) switch (u) {
            case av:
              return t0;
            case iv:
              return E1;
            case ov:
              return Du;
            case sv:
              return w1;
            case lv:
              return _r
          }
          return i
        });

        function Cg(r, i, l) {
          for (var u = -1, d = l.length; ++u < d;) {
            var v = l[u],
              w = v.size;
            switch (v.type) {
              case "drop":
                r += w;
                break;
              case "dropRight":
                i -= w;
                break;
              case "take":
                i = dt(i, r + w);
                break;
              case "takeRight":
                r = Ye(r, i - w);
                break
            }
          }
          return {
            start: r,
            end: i
          }
        }

        function bg(r) {
          var i = r.match(T9);
          return i ? i[1].split(O9) : []
        }

        function b3(r, i, l) {
          i = Hn(i, r);
          for (var u = -1, d = i.length, v = !1; ++u < d;) {
            var w = B1(i[u]);
            if (!(v = r != null && l(r, w))) break;
            r = r[w]
          }
          return v || ++u != d ? v : (d = r == null ? 0 : r.length, !!d && Li(d) && cn(w, d) && (le(r) || T5(r)))
        }

        function Mg(r) {
          var i = r.length,
            l = new r.constructor(i);
          return i && typeof r[0] == "string" && Me.call(r, "index") && (l.index = r.index, l.input = r.input), l
        }

        function M3(r) {
          return typeof r.constructor == "function" && !Lr(r) ? c0(oi(r)) : {}
        }

        function Zg(r, i, l) {
          var u = r.constructor;
          switch (i) {
            case Er:
              return j7(r);
            case e1:
            case We:
              return new u(+r);
            case t0:
              return cg(r, l);
            case Jo:
            case e7:
            case t7:
            case n7:
            case r7:
            case a7:
            case i7:
            case o7:
            case s7:
              return s3(r, l);
            case E1:
              return new u;
            case vr:
            case yr:
              return new u(r);
            case gr:
              return ug(r);
            case w1:
              return new u;
            case ja:
              return hg(r)
          }
        }

        function Sg(r, i) {
          var l = i.length;
          if (!l) return r;
          var u = l - 1;
          return i[u] = (l > 1 ? "& " : "") + i[u], i = i.join(l > 2 ? ", " : " "), r.replace(I9, `{
/* [wrapped with ` + i + `] */
`)
        }

        function xg(r) {
          return le(r) || T5(r) || !!(T4 && r && r[T4])
        }

        function cn(r, i) {
          var l = typeof r;
          return i = i ?? X, !!i && (l == "number" || l != "symbol" && F9.test(r)) && r > -1 && r % 1 == 0 && r < i
        }

        function At(r, i, l) {
          if (!He(l)) return !1;
          var u = typeof i;
          return (u == "number" ? It(l) && cn(i, l.length) : u == "string" && i in l) ? b1(l[i], r) : !1
        }

        function ts(r, i) {
          if (le(r)) return !1;
          var l = typeof r;
          return l == "number" || l == "symbol" || l == "boolean" || r == null || Ut(r) ? !0 : M9.test(r) || !b9.test(r) || i != null && r in xe(i)
        }

        function Ig(r) {
          var i = typeof r;
          return i == "string" || i == "number" || i == "symbol" || i == "boolean" ? r !== "__proto__" : r === null
        }

        function ns(r) {
          var i = Mi(r),
            l = m[i];
          if (typeof l != "function" || !(i in me.prototype)) return !1;
          if (r === l) return !0;
          var u = X7(l);
          return !!u && r === u[0]
        }

        function Tg(r) {
          return !!Z4 && Z4 in r
        }
        var Og = ti ? un : _s;

        function Lr(r) {
          var i = r && r.constructor,
            l = typeof i == "function" && i.prototype || o0;
          return r === l
        }

        function Z3(r) {
          return r === r && !He(r)
        }

        function S3(r, i) {
          return function (l) {
            return l == null ? !1 : l[r] === i && (i !== e || r in xe(l))
          }
        }

        function kg(r) {
          var i = Oi(r, function (u) {
            return l.size === h && l.clear(), u
          }),
            l = i.cache;
          return i
        }

        function Lg(r, i) {
          var l = r[1],
            u = i[1],
            d = l | u,
            v = d < (x | k | S),
            w = u == S && l == E || u == S && l == L && r[7].length <= i[8] || u == (S | L) && i[7].length <= i[8] && l == E;
          if (!(v || w)) return r;
          u & x && (r[2] = i[2], d |= l & x ? 0 : U);
          var Z = i[3];
          if (Z) {
            var T = r[3];
            r[3] = T ? c3(T, Z, i[4]) : Z, r[4] = T ? Ln(r[3], f) : i[4]
          }
          return Z = i[5], Z && (T = r[5], r[5] = T ? u3(T, Z, i[6]) : Z, r[6] = T ? Ln(r[5], f) : i[6]), Z = i[7], Z && (r[7] = Z), u & S && (r[8] = r[8] == null ? i[8] : dt(r[8], i[8])), r[9] == null && (r[9] = i[9]), r[0] = i[0], r[1] = d, r
        }

        function Pg(r) {
          var i = [];
          if (r != null)
            for (var l in xe(r)) i.push(l);
          return i
        }

        function Rg(r) {
          return ri.call(r)
        }

        function x3(r, i, l) {
          return i = Ye(i === e ? r.length - 1 : i, 0),
            function () {
              for (var u = arguments, d = -1, v = Ye(u.length - i, 0), w = R(v); ++d < v;) w[d] = u[i + d];
              d = -1;
              for (var Z = R(i + 1); ++d < i;) Z[d] = u[d];
              return Z[i] = l(w), Ht(r, this, Z)
            }
        }

        function I3(r, i) {
          return i.length < 2 ? r : S5(r, o1(i, 0, -1))
        }

        function Vg(r, i) {
          for (var l = r.length, u = dt(i.length, l), d = xt(r); u--;) {
            var v = i[u];
            r[u] = cn(v, l) ? d[v] : e
          }
          return r
        }

        function rs(r, i) {
          if (!(i === "constructor" && typeof r[i] == "function") && i != "__proto__") return r[i]
        }
        var T3 = k3(J4),
          Pr = Ym || function (r, i) {
            return rt.setTimeout(r, i)
          },
          as = k3(ig);

        function O3(r, i, l) {
          var u = i + "";
          return as(r, Sg(u, Ng(bg(u), l)))
        }

        function k3(r) {
          var i = 0,
            l = 0;
          return function () {
            var u = tv(),
              d = $ - (u - l);
            if (l = u, d > 0) {
              if (++i >= ne) return arguments[0]
            } else i = 0;
            return r.apply(e, arguments)
          }
        }

        function Si(r, i) {
          var l = -1,
            u = r.length,
            d = u - 1;
          for (i = i === e ? u : i; ++l < i;) {
            var v = F7(l, d),
              w = r[v];
            r[v] = r[l], r[l] = w
          }
          return r.length = i, r
        }
        var L3 = kg(function (r) {
          var i = [];
          return r.charCodeAt(0) === 46 && i.push(""), r.replace(Z9, function (l, u, d, v) {
            i.push(d ? v.replace(P9, "$1") : u || l)
          }), i
        });

        function B1(r) {
          if (typeof r == "string" || Ut(r)) return r;
          var i = r + "";
          return i == "0" && 1 / r == -W ? "-0" : i
        }

        function I5(r) {
          if (r != null) {
            try {
              return ni.call(r)
            } catch { }
            try {
              return r + ""
            } catch { }
          }
          return ""
        }

        function Ng(r, i) {
          return n1(N1, function (l) {
            var u = "_." + l[0];
            i & l[1] && !Ya(r, u) && r.push(u)
          }), r.sort()
        }

        function P3(r) {
          if (r instanceof me) return r.clone();
          var i = new a1(r.__wrapped__, r.__chain__);
          return i.__actions__ = xt(r.__actions__), i.__index__ = r.__index__, i.__values__ = r.__values__, i
        }

        function Hg(r, i, l) {
          (l ? At(r, i, l) : i === e) ? i = 1 : i = Ye(ce(i), 0);
          var u = r == null ? 0 : r.length;
          if (!u || i < 1) return [];
          for (var d = 0, v = 0, w = R(ci(u / i)); d < u;) w[v++] = o1(r, d, d += i);
          return w
        }

        function Dg(r) {
          for (var i = -1, l = r == null ? 0 : r.length, u = 0, d = []; ++i < l;) {
            var v = r[i];
            v && (d[u++] = v)
          }
          return d
        }

        function Fg() {
          var r = arguments.length;
          if (!r) return [];
          for (var i = R(r - 1), l = arguments[0], u = r; u--;) i[u - 1] = arguments[u];
          return kn(le(l) ? xt(l) : [l], st(i, 1))
        }
        var Ug = fe(function (r, i) {
          return $e(r) ? xr(r, st(i, 1, $e, !0)) : []
        }),
          Bg = fe(function (r, i) {
            var l = s1(i);
            return $e(l) && (l = e), $e(r) ? xr(r, st(i, 1, $e, !0), te(l, 2)) : []
          }),
          Gg = fe(function (r, i) {
            var l = s1(i);
            return $e(l) && (l = e), $e(r) ? xr(r, st(i, 1, $e, !0), e, l) : []
          });

        function zg(r, i, l) {
          var u = r == null ? 0 : r.length;
          return u ? (i = l || i === e ? 1 : ce(i), o1(r, i < 0 ? 0 : i, u)) : []
        }

        function $g(r, i, l) {
          var u = r == null ? 0 : r.length;
          return u ? (i = l || i === e ? 1 : ce(i), i = u - i, o1(r, 0, i < 0 ? 0 : i)) : []
        }

        function qg(r, i) {
          return r && r.length ? _i(r, te(i, 3), !0, !0) : []
        }

        function jg(r, i) {
          return r && r.length ? _i(r, te(i, 3), !0) : []
        }

        function Wg(r, i, l, u) {
          var d = r == null ? 0 : r.length;
          return d ? (l && typeof l != "number" && At(r, i, l) && (l = 0, u = d), Fv(r, i, l, u)) : []
        }

        function R3(r, i, l) {
          var u = r == null ? 0 : r.length;
          if (!u) return -1;
          var d = l == null ? 0 : ce(l);
          return d < 0 && (d = Ye(u + d, 0)), Xa(r, te(i, 3), d)
        }

        function V3(r, i, l) {
          var u = r == null ? 0 : r.length;
          if (!u) return -1;
          var d = u - 1;
          return l !== e && (d = ce(l), d = l < 0 ? Ye(u + d, 0) : dt(d, u - 1)), Xa(r, te(i, 3), d, !0)
        }

        function N3(r) {
          var i = r == null ? 0 : r.length;
          return i ? st(r, 1) : []
        }

        function Kg(r) {
          var i = r == null ? 0 : r.length;
          return i ? st(r, W) : []
        }

        function Qg(r, i) {
          var l = r == null ? 0 : r.length;
          return l ? (i = i === e ? 1 : ce(i), st(r, i)) : []
        }

        function Yg(r) {
          for (var i = -1, l = r == null ? 0 : r.length, u = {}; ++i < l;) {
            var d = r[i];
            u[d[0]] = d[1]
          }
          return u
        }

        function H3(r) {
          return r && r.length ? r[0] : e
        }

        function Xg(r, i, l) {
          var u = r == null ? 0 : r.length;
          if (!u) return -1;
          var d = l == null ? 0 : ce(l);
          return d < 0 && (d = Ye(u + d, 0)), r0(r, i, d)
        }

        function Jg(r) {
          var i = r == null ? 0 : r.length;
          return i ? o1(r, 0, -1) : []
        }
        var ey = fe(function (r) {
          var i = Ve(r, $7);
          return i.length && i[0] === r[0] ? R7(i) : []
        }),
          ty = fe(function (r) {
            var i = s1(r),
              l = Ve(r, $7);
            return i === s1(l) ? i = e : l.pop(), l.length && l[0] === r[0] ? R7(l, te(i, 2)) : []
          }),
          ny = fe(function (r) {
            var i = s1(r),
              l = Ve(r, $7);
            return i = typeof i == "function" ? i : e, i && l.pop(), l.length && l[0] === r[0] ? R7(l, e, i) : []
          });

        function ry(r, i) {
          return r == null ? "" : Jm.call(r, i)
        }

        function s1(r) {
          var i = r == null ? 0 : r.length;
          return i ? r[i - 1] : e
        }

        function ay(r, i, l) {
          var u = r == null ? 0 : r.length;
          if (!u) return -1;
          var d = u;
          return l !== e && (d = ce(l), d = d < 0 ? Ye(u + d, 0) : dt(d, u - 1)), i === i ? Nm(r, i, d) : Xa(r, y4, d, !0)
        }

        function iy(r, i) {
          return r && r.length ? K4(r, ce(i)) : e
        }
        var oy = fe(D3);

        function D3(r, i) {
          return r && r.length && i && i.length ? D7(r, i) : r
        }

        function sy(r, i, l) {
          return r && r.length && i && i.length ? D7(r, i, te(l, 2)) : r
        }

        function ly(r, i, l) {
          return r && r.length && i && i.length ? D7(r, i, e, l) : r
        }
        var cy = ln(function (r, i) {
          var l = r == null ? 0 : r.length,
            u = O7(r, i);
          return X4(r, Ve(i, function (d) {
            return cn(d, l) ? +d : d
          }).sort(l3)), u
        });

        function uy(r, i) {
          var l = [];
          if (!(r && r.length)) return l;
          var u = -1,
            d = [],
            v = r.length;
          for (i = te(i, 3); ++u < v;) {
            var w = r[u];
            i(w, u, r) && (l.push(w), d.push(u))
          }
          return X4(r, d), l
        }

        function is(r) {
          return r == null ? r : rv.call(r)
        }

        function hy(r, i, l) {
          var u = r == null ? 0 : r.length;
          return u ? (l && typeof l != "number" && At(r, i, l) ? (i = 0, l = u) : (i = i == null ? 0 : ce(i), l = l === e ? u : ce(l)), o1(r, i, l)) : []
        }

        function fy(r, i) {
          return yi(r, i)
        }

        function dy(r, i, l) {
          return B7(r, i, te(l, 2))
        }

        function py(r, i) {
          var l = r == null ? 0 : r.length;
          if (l) {
            var u = yi(r, i);
            if (u < l && b1(r[u], i)) return u
          }
          return -1
        }

        function my(r, i) {
          return yi(r, i, !0)
        }

        function vy(r, i, l) {
          return B7(r, i, te(l, 2), !0)
        }

        function gy(r, i) {
          var l = r == null ? 0 : r.length;
          if (l) {
            var u = yi(r, i, !0) - 1;
            if (b1(r[u], i)) return u
          }
          return -1
        }

        function yy(r) {
          return r && r.length ? e3(r) : []
        }

        function _y(r, i) {
          return r && r.length ? e3(r, te(i, 2)) : []
        }

        function Ey(r) {
          var i = r == null ? 0 : r.length;
          return i ? o1(r, 1, i) : []
        }

        function wy(r, i, l) {
          return r && r.length ? (i = l || i === e ? 1 : ce(i), o1(r, 0, i < 0 ? 0 : i)) : []
        }

        function Ay(r, i, l) {
          var u = r == null ? 0 : r.length;
          return u ? (i = l || i === e ? 1 : ce(i), i = u - i, o1(r, i < 0 ? 0 : i, u)) : []
        }

        function Cy(r, i) {
          return r && r.length ? _i(r, te(i, 3), !1, !0) : []
        }

        function by(r, i) {
          return r && r.length ? _i(r, te(i, 3)) : []
        }
        var My = fe(function (r) {
          return Nn(st(r, 1, $e, !0))
        }),
          Zy = fe(function (r) {
            var i = s1(r);
            return $e(i) && (i = e), Nn(st(r, 1, $e, !0), te(i, 2))
          }),
          Sy = fe(function (r) {
            var i = s1(r);
            return i = typeof i == "function" ? i : e, Nn(st(r, 1, $e, !0), e, i)
          });

        function xy(r) {
          return r && r.length ? Nn(r) : []
        }

        function Iy(r, i) {
          return r && r.length ? Nn(r, te(i, 2)) : []
        }

        function Ty(r, i) {
          return i = typeof i == "function" ? i : e, r && r.length ? Nn(r, e, i) : []
        }

        function os(r) {
          if (!(r && r.length)) return [];
          var i = 0;
          return r = On(r, function (l) {
            if ($e(l)) return i = Ye(l.length, i), !0
          }), C7(i, function (l) {
            return Ve(r, E7(l))
          })
        }

        function F3(r, i) {
          if (!(r && r.length)) return [];
          var l = os(r);
          return i == null ? l : Ve(l, function (u) {
            return Ht(i, e, u)
          })
        }
        var Oy = fe(function (r, i) {
          return $e(r) ? xr(r, i) : []
        }),
          ky = fe(function (r) {
            return z7(On(r, $e))
          }),
          Ly = fe(function (r) {
            var i = s1(r);
            return $e(i) && (i = e), z7(On(r, $e), te(i, 2))
          }),
          Py = fe(function (r) {
            var i = s1(r);
            return i = typeof i == "function" ? i : e, z7(On(r, $e), e, i)
          }),
          Ry = fe(os);

        function Vy(r, i) {
          return a3(r || [], i || [], Sr)
        }

        function Ny(r, i) {
          return a3(r || [], i || [], Or)
        }
        var Hy = fe(function (r) {
          var i = r.length,
            l = i > 1 ? r[i - 1] : e;
          return l = typeof l == "function" ? (r.pop(), l) : e, F3(r, l)
        });

        function U3(r) {
          var i = m(r);
          return i.__chain__ = !0, i
        }

        function Dy(r, i) {
          return i(r), r
        }

        function xi(r, i) {
          return i(r)
        }
        var Fy = ln(function (r) {
          var i = r.length,
            l = i ? r[0] : 0,
            u = this.__wrapped__,
            d = function (v) {
              return O7(v, r)
            };
          return i > 1 || this.__actions__.length || !(u instanceof me) || !cn(l) ? this.thru(d) : (u = u.slice(l, +l + (i ? 1 : 0)), u.__actions__.push({
            func: xi,
            args: [d],
            thisArg: e
          }), new a1(u, this.__chain__).thru(function (v) {
            return i && !v.length && v.push(e), v
          }))
        });

        function Uy() {
          return U3(this)
        }

        function By() {
          return new a1(this.value(), this.__chain__)
        }

        function Gy() {
          this.__values__ === e && (this.__values__ = t6(this.value()));
          var r = this.__index__ >= this.__values__.length,
            i = r ? e : this.__values__[this.__index__++];
          return {
            done: r,
            value: i
          }
        }

        function zy() {
          return this
        }

        function $y(r) {
          for (var i, l = this; l instanceof di;) {
            var u = P3(l);
            u.__index__ = 0, u.__values__ = e, i ? d.__wrapped__ = u : i = u;
            var d = u;
            l = l.__wrapped__
          }
          return d.__wrapped__ = r, i
        }

        function qy() {
          var r = this.__wrapped__;
          if (r instanceof me) {
            var i = r;
            return this.__actions__.length && (i = new me(this)), i = i.reverse(), i.__actions__.push({
              func: xi,
              args: [is],
              thisArg: e
            }), new a1(i, this.__chain__)
          }
          return this.thru(is)
        }

        function jy() {
          return r3(this.__wrapped__, this.__actions__)
        }
        var Wy = Ei(function (r, i, l) {
          Me.call(r, l) ? ++r[l] : on(r, l, 1)
        });

        function Ky(r, i, l) {
          var u = le(r) ? v4 : Dv;
          return l && At(r, i, l) && (i = e), u(r, te(i, 3))
        }

        function Qy(r, i) {
          var l = le(r) ? On : F4;
          return l(r, te(i, 3))
        }
        var Yy = p3(R3),
          Xy = p3(V3);

        function Jy(r, i) {
          return st(Ii(r, i), 1)
        }

        function e_(r, i) {
          return st(Ii(r, i), W)
        }

        function t_(r, i, l) {
          return l = l === e ? 1 : ce(l), st(Ii(r, i), l)
        }

        function B3(r, i) {
          var l = le(r) ? n1 : Vn;
          return l(r, te(i, 3))
        }

        function G3(r, i) {
          var l = le(r) ? Em : D4;
          return l(r, te(i, 3))
        }
        var n_ = Ei(function (r, i, l) {
          Me.call(r, l) ? r[l].push(i) : on(r, l, [i])
        });

        function r_(r, i, l, u) {
          r = It(r) ? r : p0(r), l = l && !u ? ce(l) : 0;
          var d = r.length;
          return l < 0 && (l = Ye(d + l, 0)), Pi(r) ? l <= d && r.indexOf(i, l) > -1 : !!d && r0(r, i, l) > -1
        }
        var a_ = fe(function (r, i, l) {
          var u = -1,
            d = typeof i == "function",
            v = It(r) ? R(r.length) : [];
          return Vn(r, function (w) {
            v[++u] = d ? Ht(i, w, l) : Ir(w, i, l)
          }), v
        }),
          i_ = Ei(function (r, i, l) {
            on(r, l, i)
          });

        function Ii(r, i) {
          var l = le(r) ? Ve : q4;
          return l(r, te(i, 3))
        }

        function o_(r, i, l, u) {
          return r == null ? [] : (le(i) || (i = i == null ? [] : [i]), l = u ? e : l, le(l) || (l = l == null ? [] : [l]), Q4(r, i, l))
        }
        var s_ = Ei(function (r, i, l) {
          r[l ? 0 : 1].push(i)
        }, function () {
          return [
            [],
            []
          ]
        });

        function l_(r, i, l) {
          var u = le(r) ? y7 : E4,
            d = arguments.length < 3;
          return u(r, te(i, 4), l, d, Vn)
        }

        function c_(r, i, l) {
          var u = le(r) ? wm : E4,
            d = arguments.length < 3;
          return u(r, te(i, 4), l, d, D4)
        }

        function u_(r, i) {
          var l = le(r) ? On : F4;
          return l(r, ki(te(i, 3)))
        }

        function h_(r) {
          var i = le(r) ? R4 : rg;
          return i(r)
        }

        function f_(r, i, l) {
          (l ? At(r, i, l) : i === e) ? i = 1 : i = ce(i);
          var u = le(r) ? Pv : ag;
          return u(r, i)
        }

        function d_(r) {
          var i = le(r) ? Rv : og;
          return i(r)
        }

        function p_(r) {
          if (r == null) return 0;
          if (It(r)) return Pi(r) ? i0(r) : r.length;
          var i = pt(r);
          return i == E1 || i == w1 ? r.size : N7(r).length
        }

        function m_(r, i, l) {
          var u = le(r) ? _7 : sg;
          return l && At(r, i, l) && (i = e), u(r, te(i, 3))
        }
        var v_ = fe(function (r, i) {
          if (r == null) return [];
          var l = i.length;
          return l > 1 && At(r, i[0], i[1]) ? i = [] : l > 2 && At(i[0], i[1], i[2]) && (i = [i[0]]), Q4(r, st(i, 1), [])
        }),
          Ti = Qm || function () {
            return rt.Date.now()
          };

        function g_(r, i) {
          if (typeof i != "function") throw new r1(o);
          return r = ce(r),
            function () {
              if (--r < 1) return i.apply(this, arguments)
            }
        }

        function z3(r, i, l) {
          return i = l ? e : i, i = r && i == null ? r.length : i, sn(r, S, e, e, e, e, i)
        }

        function $3(r, i) {
          var l;
          if (typeof i != "function") throw new r1(o);
          return r = ce(r),
            function () {
              return --r > 0 && (l = i.apply(this, arguments)), r <= 1 && (i = e), l
            }
        }
        var ss = fe(function (r, i, l) {
          var u = x;
          if (l.length) {
            var d = Ln(l, f0(ss));
            u |= C
          }
          return sn(r, u, i, l, d)
        }),
          q3 = fe(function (r, i, l) {
            var u = x | k;
            if (l.length) {
              var d = Ln(l, f0(q3));
              u |= C
            }
            return sn(i, u, r, l, d)
          });

        function j3(r, i, l) {
          i = l ? e : i;
          var u = sn(r, E, e, e, e, e, e, i);
          return u.placeholder = j3.placeholder, u
        }

        function W3(r, i, l) {
          i = l ? e : i;
          var u = sn(r, y, e, e, e, e, e, i);
          return u.placeholder = W3.placeholder, u
        }

        function K3(r, i, l) {
          var u, d, v, w, Z, T, D = 0,
            F = !1,
            B = !1,
            K = !0;
          if (typeof r != "function") throw new r1(o);
          i = l1(i) || 0, He(l) && (F = !!l.leading, B = "maxWait" in l, v = B ? Ye(l1(l.maxWait) || 0, i) : v, K = "trailing" in l ? !!l.trailing : K);

          function J(qe) {
            var M1 = u,
              fn = d;
            return u = d = e, D = qe, w = r.apply(fn, M1), w
          }

          function re(qe) {
            return D = qe, Z = Pr(pe, i), F ? J(qe) : w
          }

          function ue(qe) {
            var M1 = qe - T,
              fn = qe - D,
              p6 = i - M1;
            return B ? dt(p6, v - fn) : p6
          }

          function ae(qe) {
            var M1 = qe - T,
              fn = qe - D;
            return T === e || M1 >= i || M1 < 0 || B && fn >= v
          }

          function pe() {
            var qe = Ti();
            if (ae(qe)) return ge(qe);
            Z = Pr(pe, ue(qe))
          }

          function ge(qe) {
            return Z = e, K && u ? J(qe) : (u = d = e, w)
          }

          function Bt() {
            Z !== e && i3(Z), D = 0, u = T = d = Z = e
          }

          function Ct() {
            return Z === e ? w : ge(Ti())
          }

          function Gt() {
            var qe = Ti(),
              M1 = ae(qe);
            if (u = arguments, d = this, T = qe, M1) {
              if (Z === e) return re(T);
              if (B) return i3(Z), Z = Pr(pe, i), J(T)
            }
            return Z === e && (Z = Pr(pe, i)), w
          }
          return Gt.cancel = Bt, Gt.flush = Ct, Gt
        }
        var y_ = fe(function (r, i) {
          return H4(r, 1, i)
        }),
          __ = fe(function (r, i, l) {
            return H4(r, l1(i) || 0, l)
          });

        function E_(r) {
          return sn(r, V)
        }

        function Oi(r, i) {
          if (typeof r != "function" || i != null && typeof i != "function") throw new r1(o);
          var l = function () {
            var u = arguments,
              d = i ? i.apply(this, u) : u[0],
              v = l.cache;
            if (v.has(d)) return v.get(d);
            var w = r.apply(this, u);
            return l.cache = v.set(d, w) || v, w
          };
          return l.cache = new (Oi.Cache || an), l
        }
        Oi.Cache = an;

        function ki(r) {
          if (typeof r != "function") throw new r1(o);
          return function () {
            var i = arguments;
            switch (i.length) {
              case 0:
                return !r.call(this);
              case 1:
                return !r.call(this, i[0]);
              case 2:
                return !r.call(this, i[0], i[1]);
              case 3:
                return !r.call(this, i[0], i[1], i[2])
            }
            return !r.apply(this, i)
          }
        }

        function w_(r) {
          return $3(2, r)
        }
        var A_ = lg(function (r, i) {
          i = i.length == 1 && le(i[0]) ? Ve(i[0], Dt(te())) : Ve(st(i, 1), Dt(te()));
          var l = i.length;
          return fe(function (u) {
            for (var d = -1, v = dt(u.length, l); ++d < v;) u[d] = i[d].call(this, u[d]);
            return Ht(r, this, u)
          })
        }),
          ls = fe(function (r, i) {
            var l = Ln(i, f0(ls));
            return sn(r, C, e, i, l)
          }),
          Q3 = fe(function (r, i) {
            var l = Ln(i, f0(Q3));
            return sn(r, b, e, i, l)
          }),
          C_ = ln(function (r, i) {
            return sn(r, L, e, e, e, i)
          });

        function b_(r, i) {
          if (typeof r != "function") throw new r1(o);
          return i = i === e ? i : ce(i), fe(r, i)
        }

        function M_(r, i) {
          if (typeof r != "function") throw new r1(o);
          return i = i == null ? 0 : Ye(ce(i), 0), fe(function (l) {
            var u = l[i],
              d = Dn(l, 0, i);
            return u && kn(d, u), Ht(r, this, d)
          })
        }

        function Z_(r, i, l) {
          var u = !0,
            d = !0;
          if (typeof r != "function") throw new r1(o);
          return He(l) && (u = "leading" in l ? !!l.leading : u, d = "trailing" in l ? !!l.trailing : d), K3(r, i, {
            leading: u,
            maxWait: i,
            trailing: d
          })
        }

        function S_(r) {
          return z3(r, 1)
        }

        function x_(r, i) {
          return ls(q7(i), r)
        }

        function I_() {
          if (!arguments.length) return [];
          var r = arguments[0];
          return le(r) ? r : [r]
        }

        function T_(r) {
          return i1(r, M)
        }

        function O_(r, i) {
          return i = typeof i == "function" ? i : e, i1(r, M, i)
        }

        function k_(r) {
          return i1(r, p | M)
        }

        function L_(r, i) {
          return i = typeof i == "function" ? i : e, i1(r, p | M, i)
        }

        function P_(r, i) {
          return i == null || N4(r, i, at(i))
        }

        function b1(r, i) {
          return r === i || r !== r && i !== i
        }
        var R_ = bi(P7),
          V_ = bi(function (r, i) {
            return r >= i
          }),
          T5 = G4(function () {
            return arguments
          }()) ? G4 : function (r) {
            return Be(r) && Me.call(r, "callee") && !I4.call(r, "callee")
          },
          le = R.isArray,
          N_ = u4 ? Dt(u4) : $v;

        function It(r) {
          return r != null && Li(r.length) && !un(r)
        }

        function $e(r) {
          return Be(r) && It(r)
        }

        function H_(r) {
          return r === !0 || r === !1 || Be(r) && wt(r) == e1
        }
        var Fn = Xm || _s,
          D_ = h4 ? Dt(h4) : qv;

        function F_(r) {
          return Be(r) && r.nodeType === 1 && !Rr(r)
        }

        function U_(r) {
          if (r == null) return !0;
          if (It(r) && (le(r) || typeof r == "string" || typeof r.splice == "function" || Fn(r) || d0(r) || T5(r))) return !r.length;
          var i = pt(r);
          if (i == E1 || i == w1) return !r.size;
          if (Lr(r)) return !N7(r).length;
          for (var l in r)
            if (Me.call(r, l)) return !1;
          return !0
        }

        function B_(r, i) {
          return Tr(r, i)
        }

        function G_(r, i, l) {
          l = typeof l == "function" ? l : e;
          var u = l ? l(r, i) : e;
          return u === e ? Tr(r, i, e, l) : !!u
        }

        function cs(r) {
          if (!Be(r)) return !1;
          var i = wt(r);
          return i == Tn || i == D1 || typeof r.message == "string" && typeof r.name == "string" && !Rr(r)
        }

        function z_(r) {
          return typeof r == "number" && O4(r)
        }

        function un(r) {
          if (!He(r)) return !1;
          var i = wt(r);
          return i == tn || i == Hu || i == w5 || i == p9
        }

        function Y3(r) {
          return typeof r == "number" && r == ce(r)
        }

        function Li(r) {
          return typeof r == "number" && r > -1 && r % 1 == 0 && r <= X
        }

        function He(r) {
          var i = typeof r;
          return r != null && (i == "object" || i == "function")
        }

        function Be(r) {
          return r != null && typeof r == "object"
        }
        var X3 = f4 ? Dt(f4) : Wv;

        function $_(r, i) {
          return r === i || V7(r, i, J7(i))
        }

        function q_(r, i, l) {
          return l = typeof l == "function" ? l : e, V7(r, i, J7(i), l)
        }

        function j_(r) {
          return J3(r) && r != +r
        }

        function W_(r) {
          if (Og(r)) throw new oe(a);
          return z4(r)
        }

        function K_(r) {
          return r === null
        }

        function Q_(r) {
          return r == null
        }

        function J3(r) {
          return typeof r == "number" || Be(r) && wt(r) == vr
        }

        function Rr(r) {
          if (!Be(r) || wt(r) != nn) return !1;
          var i = oi(r);
          if (i === null) return !0;
          var l = Me.call(i, "constructor") && i.constructor;
          return typeof l == "function" && l instanceof l && ni.call(l) == qm
        }
        var us = d4 ? Dt(d4) : Kv;

        function Y_(r) {
          return Y3(r) && r >= -X && r <= X
        }
        var e6 = p4 ? Dt(p4) : Qv;

        function Pi(r) {
          return typeof r == "string" || !le(r) && Be(r) && wt(r) == yr
        }

        function Ut(r) {
          return typeof r == "symbol" || Be(r) && wt(r) == ja
        }
        var d0 = m4 ? Dt(m4) : Yv;

        function X_(r) {
          return r === e
        }

        function J_(r) {
          return Be(r) && pt(r) == _r
        }

        function eE(r) {
          return Be(r) && wt(r) == v9
        }
        var tE = bi(H7),
          nE = bi(function (r, i) {
            return r <= i
          });

        function t6(r) {
          if (!r) return [];
          if (It(r)) return Pi(r) ? A1(r) : xt(r);
          if (Ar && r[Ar]) return Pm(r[Ar]());
          var i = pt(r),
            l = i == E1 ? M7 : i == w1 ? Ja : p0;
          return l(r)
        }

        function hn(r) {
          if (!r) return r === 0 ? r : 0;
          if (r = l1(r), r === W || r === -W) {
            var i = r < 0 ? -1 : 1;
            return i * ie
          }
          return r === r ? r : 0
        }

        function ce(r) {
          var i = hn(r),
            l = i % 1;
          return i === i ? l ? i - l : i : 0
        }

        function n6(r) {
          return r ? Z5(ce(r), 0, Ae) : 0
        }

        function l1(r) {
          if (typeof r == "number") return r;
          if (Ut(r)) return ye;
          if (He(r)) {
            var i = typeof r.valueOf == "function" ? r.valueOf() : r;
            r = He(i) ? i + "" : i
          }
          if (typeof r != "string") return r === 0 ? r : +r;
          r = w4(r);
          var l = N9.test(r);
          return l || D9.test(r) ? gm(r.slice(2), l ? 2 : 8) : V9.test(r) ? ye : +r
        }

        function r6(r) {
          return U1(r, Tt(r))
        }

        function rE(r) {
          return r ? Z5(ce(r), -X, X) : r === 0 ? r : 0
        }

        function be(r) {
          return r == null ? "" : Ft(r)
        }
        var aE = u0(function (r, i) {
          if (Lr(i) || It(i)) {
            U1(i, at(i), r);
            return
          }
          for (var l in i) Me.call(i, l) && Sr(r, l, i[l])
        }),
          a6 = u0(function (r, i) {
            U1(i, Tt(i), r)
          }),
          Ri = u0(function (r, i, l, u) {
            U1(i, Tt(i), r, u)
          }),
          iE = u0(function (r, i, l, u) {
            U1(i, at(i), r, u)
          }),
          oE = ln(O7);

        function sE(r, i) {
          var l = c0(r);
          return i == null ? l : V4(l, i)
        }
        var lE = fe(function (r, i) {
          r = xe(r);
          var l = -1,
            u = i.length,
            d = u > 2 ? i[2] : e;
          for (d && At(i[0], i[1], d) && (u = 1); ++l < u;)
            for (var v = i[l], w = Tt(v), Z = -1, T = w.length; ++Z < T;) {
              var D = w[Z],
                F = r[D];
              (F === e || b1(F, o0[D]) && !Me.call(r, D)) && (r[D] = v[D])
            }
          return r
        }),
          cE = fe(function (r) {
            return r.push(e, w3), Ht(i6, e, r)
          });

        function uE(r, i) {
          return g4(r, te(i, 3), F1)
        }

        function hE(r, i) {
          return g4(r, te(i, 3), L7)
        }

        function fE(r, i) {
          return r == null ? r : k7(r, te(i, 3), Tt)
        }

        function dE(r, i) {
          return r == null ? r : U4(r, te(i, 3), Tt)
        }

        function pE(r, i) {
          return r && F1(r, te(i, 3))
        }

        function mE(r, i) {
          return r && L7(r, te(i, 3))
        }

        function vE(r) {
          return r == null ? [] : vi(r, at(r))
        }

        function gE(r) {
          return r == null ? [] : vi(r, Tt(r))
        }

        function hs(r, i, l) {
          var u = r == null ? e : S5(r, i);
          return u === e ? l : u
        }

        function yE(r, i) {
          return r != null && b3(r, i, Uv)
        }

        function fs(r, i) {
          return r != null && b3(r, i, Bv)
        }
        var _E = v3(function (r, i, l) {
          i != null && typeof i.toString != "function" && (i = ri.call(i)), r[i] = l
        }, ps(Ot)),
          EE = v3(function (r, i, l) {
            i != null && typeof i.toString != "function" && (i = ri.call(i)), Me.call(r, i) ? r[i].push(l) : r[i] = [l]
          }, te),
          wE = fe(Ir);

        function at(r) {
          return It(r) ? P4(r) : N7(r)
        }

        function Tt(r) {
          return It(r) ? P4(r, !0) : Xv(r)
        }

        function AE(r, i) {
          var l = {};
          return i = te(i, 3), F1(r, function (u, d, v) {
            on(l, i(u, d, v), u)
          }), l
        }

        function CE(r, i) {
          var l = {};
          return i = te(i, 3), F1(r, function (u, d, v) {
            on(l, d, i(u, d, v))
          }), l
        }
        var bE = u0(function (r, i, l) {
          gi(r, i, l)
        }),
          i6 = u0(function (r, i, l, u) {
            gi(r, i, l, u)
          }),
          ME = ln(function (r, i) {
            var l = {};
            if (r == null) return l;
            var u = !1;
            i = Ve(i, function (v) {
              return v = Hn(v, r), u || (u = v.length > 1), v
            }), U1(r, Y7(r), l), u && (l = i1(l, p | _ | M, _g));
            for (var d = i.length; d--;) G7(l, i[d]);
            return l
          });

        function ZE(r, i) {
          return o6(r, ki(te(i)))
        }
        var SE = ln(function (r, i) {
          return r == null ? {} : eg(r, i)
        });

        function o6(r, i) {
          if (r == null) return {};
          var l = Ve(Y7(r), function (u) {
            return [u]
          });
          return i = te(i), Y4(r, l, function (u, d) {
            return i(u, d[0])
          })
        }

        function xE(r, i, l) {
          i = Hn(i, r);
          var u = -1,
            d = i.length;
          for (d || (d = 1, r = e); ++u < d;) {
            var v = r == null ? e : r[B1(i[u])];
            v === e && (u = d, v = l), r = un(v) ? v.call(r) : v
          }
          return r
        }

        function IE(r, i, l) {
          return r == null ? r : Or(r, i, l)
        }

        function TE(r, i, l, u) {
          return u = typeof u == "function" ? u : e, r == null ? r : Or(r, i, l, u)
        }
        var s6 = _3(at),
          l6 = _3(Tt);

        function OE(r, i, l) {
          var u = le(r),
            d = u || Fn(r) || d0(r);
          if (i = te(i, 4), l == null) {
            var v = r && r.constructor;
            d ? l = u ? new v : [] : He(r) ? l = un(v) ? c0(oi(r)) : {} : l = {}
          }
          return (d ? n1 : F1)(r, function (w, Z, T) {
            return i(l, w, Z, T)
          }), l
        }

        function kE(r, i) {
          return r == null ? !0 : G7(r, i)
        }

        function LE(r, i, l) {
          return r == null ? r : n3(r, i, q7(l))
        }

        function PE(r, i, l, u) {
          return u = typeof u == "function" ? u : e, r == null ? r : n3(r, i, q7(l), u)
        }

        function p0(r) {
          return r == null ? [] : b7(r, at(r))
        }

        function RE(r) {
          return r == null ? [] : b7(r, Tt(r))
        }

        function VE(r, i, l) {
          return l === e && (l = i, i = e), l !== e && (l = l1(l), l = l === l ? l : 0), i !== e && (i = l1(i), i = i === i ? i : 0), Z5(l1(r), i, l)
        }

        function NE(r, i, l) {
          return i = hn(i), l === e ? (l = i, i = 0) : l = hn(l), r = l1(r), Gv(r, i, l)
        }

        function HE(r, i, l) {
          if (l && typeof l != "boolean" && At(r, i, l) && (i = l = e), l === e && (typeof i == "boolean" ? (l = i, i = e) : typeof r == "boolean" && (l = r, r = e)), r === e && i === e ? (r = 0, i = 1) : (r = hn(r), i === e ? (i = r, r = 0) : i = hn(i)), r > i) {
            var u = r;
            r = i, i = u
          }
          if (l || r % 1 || i % 1) {
            var d = k4();
            return dt(r + d * (i - r + vm("1e-" + ((d + "").length - 1))), i)
          }
          return F7(r, i)
        }
        var DE = h0(function (r, i, l) {
          return i = i.toLowerCase(), r + (l ? c6(i) : i)
        });

        function c6(r) {
          return ds(be(r).toLowerCase())
        }

        function u6(r) {
          return r = be(r), r && r.replace(U9, Im).replace(om, "")
        }

        function FE(r, i, l) {
          r = be(r), i = Ft(i);
          var u = r.length;
          l = l === e ? u : Z5(ce(l), 0, u);
          var d = l;
          return l -= i.length, l >= 0 && r.slice(l, d) == i
        }

        function UE(r) {
          return r = be(r), r && w9.test(r) ? r.replace(Uu, Tm) : r
        }

        function BE(r) {
          return r = be(r), r && S9.test(r) ? r.replace(l7, "\\$&") : r
        }
        var GE = h0(function (r, i, l) {
          return r + (l ? "-" : "") + i.toLowerCase()
        }),
          zE = h0(function (r, i, l) {
            return r + (l ? " " : "") + i.toLowerCase()
          }),
          $E = d3("toLowerCase");

        function qE(r, i, l) {
          r = be(r), i = ce(i);
          var u = i ? i0(r) : 0;
          if (!i || u >= i) return r;
          var d = (i - u) / 2;
          return Ci(ui(d), l) + r + Ci(ci(d), l)
        }

        function jE(r, i, l) {
          r = be(r), i = ce(i);
          var u = i ? i0(r) : 0;
          return i && u < i ? r + Ci(i - u, l) : r
        }

        function WE(r, i, l) {
          r = be(r), i = ce(i);
          var u = i ? i0(r) : 0;
          return i && u < i ? Ci(i - u, l) + r : r
        }

        function KE(r, i, l) {
          return l || i == null ? i = 0 : i && (i = +i), nv(be(r).replace(c7, ""), i || 0)
        }

        function QE(r, i, l) {
          return (l ? At(r, i, l) : i === e) ? i = 1 : i = ce(i), U7(be(r), i)
        }

        function YE() {
          var r = arguments,
            i = be(r[0]);
          return r.length < 3 ? i : i.replace(r[1], r[2])
        }
        var XE = h0(function (r, i, l) {
          return r + (l ? "_" : "") + i.toLowerCase()
        });

        function JE(r, i, l) {
          return l && typeof l != "number" && At(r, i, l) && (i = l = e), l = l === e ? Ae : l >>> 0, l ? (r = be(r), r && (typeof i == "string" || i != null && !us(i)) && (i = Ft(i), !i && a0(r)) ? Dn(A1(r), 0, l) : r.split(i, l)) : []
        }
        var ew = h0(function (r, i, l) {
          return r + (l ? " " : "") + ds(i)
        });

        function tw(r, i, l) {
          return r = be(r), l = l == null ? 0 : Z5(ce(l), 0, r.length), i = Ft(i), r.slice(l, l + i.length) == i
        }

        function nw(r, i, l) {
          var u = m.templateSettings;
          l && At(r, i, l) && (i = e), r = be(r), i = Ri({}, i, u, E3);
          var d = Ri({}, i.imports, u.imports, E3),
            v = at(d),
            w = b7(d, v),
            Z, T, D = 0,
            F = i.interpolate || Wa,
            B = "__p += '",
            K = Z7((i.escape || Wa).source + "|" + F.source + "|" + (F === Bu ? R9 : Wa).source + "|" + (i.evaluate || Wa).source + "|$", "g"),
            J = "//# sourceURL=" + (Me.call(i, "sourceURL") ? (i.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++hm + "]") + `
`;
          r.replace(K, function (ae, pe, ge, Bt, Ct, Gt) {
            return ge || (ge = Bt), B += r.slice(D, Gt).replace(B9, Om), pe && (Z = !0, B += `' +
__e(` + pe + `) +
'`), Ct && (T = !0, B += `';
` + Ct + `;
__p += '`), ge && (B += `' +
((__t = (` + ge + `)) == null ? '' : __t) +
'`), D = Gt + ae.length, ae
          }), B += `';
`;
          var re = Me.call(i, "variable") && i.variable;
          if (!re) B = `with (obj) {
` + B + `
}
`;
          else if (L9.test(re)) throw new oe(s);
          B = (T ? B.replace(g9, "") : B).replace(y9, "$1").replace(_9, "$1;"), B = "function(" + (re || "obj") + `) {
` + (re ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (Z ? ", __e = _.escape" : "") + (T ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + B + `return __p
}`;
          var ue = f6(function () {
            return Ce(v, J + "return " + B).apply(e, w)
          });
          if (ue.source = B, cs(ue)) throw ue;
          return ue
        }

        function rw(r) {
          return be(r).toLowerCase()
        }

        function aw(r) {
          return be(r).toUpperCase()
        }

        function iw(r, i, l) {
          if (r = be(r), r && (l || i === e)) return w4(r);
          if (!r || !(i = Ft(i))) return r;
          var u = A1(r),
            d = A1(i),
            v = A4(u, d),
            w = C4(u, d) + 1;
          return Dn(u, v, w).join("")
        }

        function ow(r, i, l) {
          if (r = be(r), r && (l || i === e)) return r.slice(0, M4(r) + 1);
          if (!r || !(i = Ft(i))) return r;
          var u = A1(r),
            d = C4(u, A1(i)) + 1;
          return Dn(u, 0, d).join("")
        }

        function sw(r, i, l) {
          if (r = be(r), r && (l || i === e)) return r.replace(c7, "");
          if (!r || !(i = Ft(i))) return r;
          var u = A1(r),
            d = A4(u, A1(i));
          return Dn(u, d).join("")
        }

        function lw(r, i) {
          var l = H,
            u = he;
          if (He(i)) {
            var d = "separator" in i ? i.separator : d;
            l = "length" in i ? ce(i.length) : l, u = "omission" in i ? Ft(i.omission) : u
          }
          r = be(r);
          var v = r.length;
          if (a0(r)) {
            var w = A1(r);
            v = w.length
          }
          if (l >= v) return r;
          var Z = l - i0(u);
          if (Z < 1) return u;
          var T = w ? Dn(w, 0, Z).join("") : r.slice(0, Z);
          if (d === e) return T + u;
          if (w && (Z += T.length - Z), us(d)) {
            if (r.slice(Z).search(d)) {
              var D, F = T;
              for (d.global || (d = Z7(d.source, be(Gu.exec(d)) + "g")), d.lastIndex = 0; D = d.exec(F);) var B = D.index;
              T = T.slice(0, B === e ? Z : B)
            }
          } else if (r.indexOf(Ft(d), Z) != Z) {
            var K = T.lastIndexOf(d);
            K > -1 && (T = T.slice(0, K))
          }
          return T + u
        }

        function cw(r) {
          return r = be(r), r && E9.test(r) ? r.replace(Fu, Hm) : r
        }
        var uw = h0(function (r, i, l) {
          return r + (l ? " " : "") + i.toUpperCase()
        }),
          ds = d3("toUpperCase");

        function h6(r, i, l) {
          return r = be(r), i = l ? e : i, i === e ? Lm(r) ? Um(r) : bm(r) : r.match(i) || []
        }
        var f6 = fe(function (r, i) {
          try {
            return Ht(r, e, i)
          } catch (l) {
            return cs(l) ? l : new oe(l)
          }
        }),
          hw = ln(function (r, i) {
            return n1(i, function (l) {
              l = B1(l), on(r, l, ss(r[l], r))
            }), r
          });

        function fw(r) {
          var i = r == null ? 0 : r.length,
            l = te();
          return r = i ? Ve(r, function (u) {
            if (typeof u[1] != "function") throw new r1(o);
            return [l(u[0]), u[1]]
          }) : [], fe(function (u) {
            for (var d = -1; ++d < i;) {
              var v = r[d];
              if (Ht(v[0], this, u)) return Ht(v[1], this, u)
            }
          })
        }

        function dw(r) {
          return Hv(i1(r, p))
        }

        function ps(r) {
          return function () {
            return r
          }
        }

        function pw(r, i) {
          return r == null || r !== r ? i : r
        }
        var mw = m3(),
          vw = m3(!0);

        function Ot(r) {
          return r
        }

        function ms(r) {
          return $4(typeof r == "function" ? r : i1(r, p))
        }

        function gw(r) {
          return j4(i1(r, p))
        }

        function yw(r, i) {
          return W4(r, i1(i, p))
        }
        var _w = fe(function (r, i) {
          return function (l) {
            return Ir(l, r, i)
          }
        }),
          Ew = fe(function (r, i) {
            return function (l) {
              return Ir(r, l, i)
            }
          });

        function vs(r, i, l) {
          var u = at(i),
            d = vi(i, u);
          l == null && !(He(i) && (d.length || !u.length)) && (l = i, i = r, r = this, d = vi(i, at(i)));
          var v = !(He(l) && "chain" in l) || !!l.chain,
            w = un(r);
          return n1(d, function (Z) {
            var T = i[Z];
            r[Z] = T, w && (r.prototype[Z] = function () {
              var D = this.__chain__;
              if (v || D) {
                var F = r(this.__wrapped__),
                  B = F.__actions__ = xt(this.__actions__);
                return B.push({
                  func: T,
                  args: arguments,
                  thisArg: r
                }), F.__chain__ = D, F
              }
              return T.apply(r, kn([this.value()], arguments))
            })
          }), r
        }

        function ww() {
          return rt._ === this && (rt._ = jm), this
        }

        function gs() { }

        function Aw(r) {
          return r = ce(r), fe(function (i) {
            return K4(i, r)
          })
        }
        var Cw = W7(Ve),
          bw = W7(v4),
          Mw = W7(_7);

        function d6(r) {
          return ts(r) ? E7(B1(r)) : tg(r)
        }

        function Zw(r) {
          return function (i) {
            return r == null ? e : S5(r, i)
          }
        }
        var Sw = g3(),
          xw = g3(!0);

        function ys() {
          return []
        }

        function _s() {
          return !1
        }

        function Iw() {
          return {}
        }

        function Tw() {
          return ""
        }

        function Ow() {
          return !0
        }

        function kw(r, i) {
          if (r = ce(r), r < 1 || r > X) return [];
          var l = Ae,
            u = dt(r, Ae);
          i = te(i), r -= Ae;
          for (var d = C7(u, i); ++l < r;) i(l);
          return d
        }

        function Lw(r) {
          return le(r) ? Ve(r, B1) : Ut(r) ? [r] : xt(L3(be(r)))
        }

        function Pw(r) {
          var i = ++$m;
          return be(r) + i
        }
        var Rw = Ai(function (r, i) {
          return r + i
        }, 0),
          Vw = K7("ceil"),
          Nw = Ai(function (r, i) {
            return r / i
          }, 1),
          Hw = K7("floor");

        function Dw(r) {
          return r && r.length ? mi(r, Ot, P7) : e
        }

        function Fw(r, i) {
          return r && r.length ? mi(r, te(i, 2), P7) : e
        }

        function Uw(r) {
          return _4(r, Ot)
        }

        function Bw(r, i) {
          return _4(r, te(i, 2))
        }

        function Gw(r) {
          return r && r.length ? mi(r, Ot, H7) : e
        }

        function zw(r, i) {
          return r && r.length ? mi(r, te(i, 2), H7) : e
        }
        var $w = Ai(function (r, i) {
          return r * i
        }, 1),
          qw = K7("round"),
          jw = Ai(function (r, i) {
            return r - i
          }, 0);

        function Ww(r) {
          return r && r.length ? A7(r, Ot) : 0
        }

        function Kw(r, i) {
          return r && r.length ? A7(r, te(i, 2)) : 0
        }
        return m.after = g_, m.ary = z3, m.assign = aE, m.assignIn = a6, m.assignInWith = Ri, m.assignWith = iE, m.at = oE, m.before = $3, m.bind = ss, m.bindAll = hw, m.bindKey = q3, m.castArray = I_, m.chain = U3, m.chunk = Hg, m.compact = Dg, m.concat = Fg, m.cond = fw, m.conforms = dw, m.constant = ps, m.countBy = Wy, m.create = sE, m.curry = j3, m.curryRight = W3, m.debounce = K3, m.defaults = lE, m.defaultsDeep = cE, m.defer = y_, m.delay = __, m.difference = Ug, m.differenceBy = Bg, m.differenceWith = Gg, m.drop = zg, m.dropRight = $g, m.dropRightWhile = qg, m.dropWhile = jg, m.fill = Wg, m.filter = Qy, m.flatMap = Jy, m.flatMapDeep = e_, m.flatMapDepth = t_, m.flatten = N3, m.flattenDeep = Kg, m.flattenDepth = Qg, m.flip = E_, m.flow = mw, m.flowRight = vw, m.fromPairs = Yg, m.functions = vE, m.functionsIn = gE, m.groupBy = n_, m.initial = Jg, m.intersection = ey, m.intersectionBy = ty, m.intersectionWith = ny, m.invert = _E, m.invertBy = EE, m.invokeMap = a_, m.iteratee = ms, m.keyBy = i_, m.keys = at, m.keysIn = Tt, m.map = Ii, m.mapKeys = AE, m.mapValues = CE, m.matches = gw, m.matchesProperty = yw, m.memoize = Oi, m.merge = bE, m.mergeWith = i6, m.method = _w, m.methodOf = Ew, m.mixin = vs, m.negate = ki, m.nthArg = Aw, m.omit = ME, m.omitBy = ZE, m.once = w_, m.orderBy = o_, m.over = Cw, m.overArgs = A_, m.overEvery = bw, m.overSome = Mw, m.partial = ls, m.partialRight = Q3, m.partition = s_, m.pick = SE, m.pickBy = o6, m.property = d6, m.propertyOf = Zw, m.pull = oy, m.pullAll = D3, m.pullAllBy = sy, m.pullAllWith = ly, m.pullAt = cy, m.range = Sw, m.rangeRight = xw, m.rearg = C_, m.reject = u_, m.remove = uy, m.rest = b_, m.reverse = is, m.sampleSize = f_, m.set = IE, m.setWith = TE, m.shuffle = d_, m.slice = hy, m.sortBy = v_, m.sortedUniq = yy, m.sortedUniqBy = _y, m.split = JE, m.spread = M_, m.tail = Ey, m.take = wy, m.takeRight = Ay, m.takeRightWhile = Cy, m.takeWhile = by, m.tap = Dy, m.throttle = Z_, m.thru = xi, m.toArray = t6, m.toPairs = s6, m.toPairsIn = l6, m.toPath = Lw, m.toPlainObject = r6, m.transform = OE, m.unary = S_, m.union = My, m.unionBy = Zy, m.unionWith = Sy, m.uniq = xy, m.uniqBy = Iy, m.uniqWith = Ty, m.unset = kE, m.unzip = os, m.unzipWith = F3, m.update = LE, m.updateWith = PE, m.values = p0, m.valuesIn = RE, m.without = Oy, m.words = h6, m.wrap = x_, m.xor = ky, m.xorBy = Ly, m.xorWith = Py, m.zip = Ry, m.zipObject = Vy, m.zipObjectDeep = Ny, m.zipWith = Hy, m.entries = s6, m.entriesIn = l6, m.extend = a6, m.extendWith = Ri, vs(m, m), m.add = Rw, m.attempt = f6, m.camelCase = DE, m.capitalize = c6, m.ceil = Vw, m.clamp = VE, m.clone = T_, m.cloneDeep = k_, m.cloneDeepWith = L_, m.cloneWith = O_, m.conformsTo = P_, m.deburr = u6, m.defaultTo = pw, m.divide = Nw, m.endsWith = FE, m.eq = b1, m.escape = UE, m.escapeRegExp = BE, m.every = Ky, m.find = Yy, m.findIndex = R3, m.findKey = uE, m.findLast = Xy, m.findLastIndex = V3, m.findLastKey = hE, m.floor = Hw, m.forEach = B3, m.forEachRight = G3, m.forIn = fE, m.forInRight = dE, m.forOwn = pE, m.forOwnRight = mE, m.get = hs, m.gt = R_, m.gte = V_, m.has = yE, m.hasIn = fs, m.head = H3, m.identity = Ot, m.includes = r_, m.indexOf = Xg, m.inRange = NE, m.invoke = wE, m.isArguments = T5, m.isArray = le, m.isArrayBuffer = N_, m.isArrayLike = It, m.isArrayLikeObject = $e, m.isBoolean = H_, m.isBuffer = Fn, m.isDate = D_, m.isElement = F_, m.isEmpty = U_, m.isEqual = B_, m.isEqualWith = G_, m.isError = cs, m.isFinite = z_, m.isFunction = un, m.isInteger = Y3, m.isLength = Li, m.isMap = X3, m.isMatch = $_, m.isMatchWith = q_, m.isNaN = j_, m.isNative = W_, m.isNil = Q_, m.isNull = K_, m.isNumber = J3, m.isObject = He, m.isObjectLike = Be, m.isPlainObject = Rr, m.isRegExp = us, m.isSafeInteger = Y_, m.isSet = e6, m.isString = Pi, m.isSymbol = Ut, m.isTypedArray = d0, m.isUndefined = X_, m.isWeakMap = J_, m.isWeakSet = eE, m.join = ry, m.kebabCase = GE, m.last = s1, m.lastIndexOf = ay, m.lowerCase = zE, m.lowerFirst = $E, m.lt = tE, m.lte = nE, m.max = Dw, m.maxBy = Fw, m.mean = Uw, m.meanBy = Bw, m.min = Gw, m.minBy = zw, m.stubArray = ys, m.stubFalse = _s, m.stubObject = Iw, m.stubString = Tw, m.stubTrue = Ow, m.multiply = $w, m.nth = iy, m.noConflict = ww, m.noop = gs, m.now = Ti, m.pad = qE, m.padEnd = jE, m.padStart = WE, m.parseInt = KE, m.random = HE, m.reduce = l_, m.reduceRight = c_, m.repeat = QE, m.replace = YE, m.result = xE, m.round = qw, m.runInContext = I, m.sample = h_, m.size = p_, m.snakeCase = XE, m.some = m_, m.sortedIndex = fy, m.sortedIndexBy = dy, m.sortedIndexOf = py, m.sortedLastIndex = my, m.sortedLastIndexBy = vy, m.sortedLastIndexOf = gy, m.startCase = ew, m.startsWith = tw, m.subtract = jw, m.sum = Ww, m.sumBy = Kw, m.template = nw, m.times = kw, m.toFinite = hn, m.toInteger = ce, m.toLength = n6, m.toLower = rw, m.toNumber = l1, m.toSafeInteger = rE, m.toString = be, m.toUpper = aw, m.trim = iw, m.trimEnd = ow, m.trimStart = sw, m.truncate = lw, m.unescape = cw, m.uniqueId = Pw, m.upperCase = uw, m.upperFirst = ds, m.each = B3, m.eachRight = G3, m.first = H3, vs(m, function () {
          var r = {};
          return F1(m, function (i, l) {
            Me.call(m.prototype, l) || (r[l] = i)
          }), r
        }(), {
          chain: !1
        }), m.VERSION = t, n1(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function (r) {
          m[r].placeholder = m
        }), n1(["drop", "take"], function (r, i) {
          me.prototype[r] = function (l) {
            l = l === e ? 1 : Ye(ce(l), 0);
            var u = this.__filtered__ && !i ? new me(this) : this.clone();
            return u.__filtered__ ? u.__takeCount__ = dt(l, u.__takeCount__) : u.__views__.push({
              size: dt(l, Ae),
              type: r + (u.__dir__ < 0 ? "Right" : "")
            }), u
          }, me.prototype[r + "Right"] = function (l) {
            return this.reverse()[r](l).reverse()
          }
        }), n1(["filter", "map", "takeWhile"], function (r, i) {
          var l = i + 1,
            u = l == j || l == ee;
          me.prototype[r] = function (d) {
            var v = this.clone();
            return v.__iteratees__.push({
              iteratee: te(d, 3),
              type: l
            }), v.__filtered__ = v.__filtered__ || u, v
          }
        }), n1(["head", "last"], function (r, i) {
          var l = "take" + (i ? "Right" : "");
          me.prototype[r] = function () {
            return this[l](1).value()[0]
          }
        }), n1(["initial", "tail"], function (r, i) {
          var l = "drop" + (i ? "" : "Right");
          me.prototype[r] = function () {
            return this.__filtered__ ? new me(this) : this[l](1)
          }
        }), me.prototype.compact = function () {
          return this.filter(Ot)
        }, me.prototype.find = function (r) {
          return this.filter(r).head()
        }, me.prototype.findLast = function (r) {
          return this.reverse().find(r)
        }, me.prototype.invokeMap = fe(function (r, i) {
          return typeof r == "function" ? new me(this) : this.map(function (l) {
            return Ir(l, r, i)
          })
        }), me.prototype.reject = function (r) {
          return this.filter(ki(te(r)))
        }, me.prototype.slice = function (r, i) {
          r = ce(r);
          var l = this;
          return l.__filtered__ && (r > 0 || i < 0) ? new me(l) : (r < 0 ? l = l.takeRight(-r) : r && (l = l.drop(r)), i !== e && (i = ce(i), l = i < 0 ? l.dropRight(-i) : l.take(i - r)), l)
        }, me.prototype.takeRightWhile = function (r) {
          return this.reverse().takeWhile(r).reverse()
        }, me.prototype.toArray = function () {
          return this.take(Ae)
        }, F1(me.prototype, function (r, i) {
          var l = /^(?:filter|find|map|reject)|While$/.test(i),
            u = /^(?:head|last)$/.test(i),
            d = m[u ? "take" + (i == "last" ? "Right" : "") : i],
            v = u || /^find/.test(i);
          d && (m.prototype[i] = function () {
            var w = this.__wrapped__,
              Z = u ? [1] : arguments,
              T = w instanceof me,
              D = Z[0],
              F = T || le(w),
              B = function (pe) {
                var ge = d.apply(m, kn([pe], Z));
                return u && K ? ge[0] : ge
              };
            F && l && typeof D == "function" && D.length != 1 && (T = F = !1);
            var K = this.__chain__,
              J = !!this.__actions__.length,
              re = v && !K,
              ue = T && !J;
            if (!v && F) {
              w = ue ? w : new me(this);
              var ae = r.apply(w, Z);
              return ae.__actions__.push({
                func: xi,
                args: [B],
                thisArg: e
              }), new a1(ae, K)
            }
            return re && ue ? r.apply(this, Z) : (ae = this.thru(B), re ? u ? ae.value()[0] : ae.value() : ae)
          })
        }), n1(["pop", "push", "shift", "sort", "splice", "unshift"], function (r) {
          var i = ei[r],
            l = /^(?:push|sort|unshift)$/.test(r) ? "tap" : "thru",
            u = /^(?:pop|shift)$/.test(r);
          m.prototype[r] = function () {
            var d = arguments;
            if (u && !this.__chain__) {
              var v = this.value();
              return i.apply(le(v) ? v : [], d)
            }
            return this[l](function (w) {
              return i.apply(le(w) ? w : [], d)
            })
          }
        }), F1(me.prototype, function (r, i) {
          var l = m[i];
          if (l) {
            var u = l.name + "";
            Me.call(l0, u) || (l0[u] = []), l0[u].push({
              name: i,
              func: l
            })
          }
        }), l0[wi(e, k).name] = [{
          name: "wrapper",
          func: e
        }], me.prototype.clone = cv, me.prototype.reverse = uv, me.prototype.value = hv, m.prototype.at = Fy, m.prototype.chain = Uy, m.prototype.commit = By, m.prototype.next = Gy, m.prototype.plant = $y, m.prototype.reverse = qy, m.prototype.toJSON = m.prototype.valueOf = m.prototype.value = jy, m.prototype.first = m.prototype.head, Ar && (m.prototype[Ar] = zy), m
      },
        Pn = Bm();
      typeof define == "function" && typeof define.amd == "object" && define.amd ? (rt._ = Pn, define(function () {
        return Pn
      })) : A5 ? ((A5.exports = Pn)._ = Pn, m7._ = Pn) : rt._ = Pn
    }).call(sr)
  });
  var ik = O(P(), 1);
  var rk = O(P(), 1);
  var aS = O(P(), 1),
    Es = class {
      envvars = globalThis.__aichat_envvars__;
      _isBackground = !1;
      get currentProject() {
        return this.envvars.project
      }
      get extensionPrefix() {
        return this.currentProject === "monica" ? "monica" : "c4g"
      }
      get isProd() {
        return this.envvars.prod
      }
      get isBackground() {
        return this._isBackground
      }
      get host() {
        return this.envvars.host
      }
      markIsBackground() {
        this._isBackground = !0
      }
    },
    Xe = new Es;
  var h9 = O(Q8(), 1);
  var _T = O(P(), 1);
  var gT = O(P(), 1);
  var Jx = O(P(), 1);
  var ES = O(P());

  function Ee(e) {
    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++) n[a - 1] = arguments[a];
    if (!1) var o;
    throw new Error(typeof e == "number" ? "[MobX] minified error nr: " + e + (n.length ? " " + n.map(String).join(",") : "") + ". Find the full error at: https://github.com/mobxjs/mobx/blob/main/packages/mobx/src/errors.ts" : "[MobX] " + e)
  }
  var yb = {};

  function Qc() {
    return typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : yb
  }
  var fd = Object.assign,
    ho = Object.getOwnPropertyDescriptor,
    Q1 = Object.defineProperty,
    Eo = Object.prototype,
    Gc = [];
  Object.freeze(Gc);
  var dd = {};
  Object.freeze(dd);
  var _b = typeof Proxy < "u",
    Eb = Object.toString();

  function pd() {
    _b || Ee("Proxy not available")
  }

  function md(e) {
    var t = !1;
    return function () {
      if (!t) return t = !0, e.apply(this, arguments)
    }
  }
  var j0 = function () { };

  function V1(e) {
    return typeof e == "function"
  }

  function j5(e) {
    var t = typeof e;
    switch (t) {
      case "string":
      case "symbol":
      case "number":
        return !0
    }
    return !1
  }

  function wo(e) {
    return e !== null && typeof e == "object"
  }

  function h5(e) {
    if (!wo(e)) return !1;
    var t = Object.getPrototypeOf(e);
    if (t == null) return !0;
    var n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
    return typeof n == "function" && n.toString() === Eb
  }

  function vd(e) {
    var t = e?.constructor;
    return t ? t.name === "GeneratorFunction" || t.displayName === "GeneratorFunction" : !1
  }

  function Ao(e, t, n) {
    Q1(e, t, {
      enumerable: !1,
      writable: !0,
      configurable: !0,
      value: n
    })
  }

  function gd(e, t, n) {
    Q1(e, t, {
      enumerable: !1,
      writable: !1,
      configurable: !0,
      value: n
    })
  }

  function W5(e, t) {
    var n = "isMobX" + e;
    return t.prototype[n] = !0,
      function (a) {
        return wo(a) && a[n] === !0
      }
  }

  function nr(e) {
    return e instanceof Map
  }

  function La(e) {
    return e instanceof Set
  }
  var yd = typeof Object.getOwnPropertySymbols < "u";

  function wb(e) {
    var t = Object.keys(e);
    if (!yd) return t;
    var n = Object.getOwnPropertySymbols(e);
    return n.length ? [].concat(t, n.filter(function (a) {
      return Eo.propertyIsEnumerable.call(e, a)
    })) : t
  }
  var Co = typeof Reflect < "u" && Reflect.ownKeys ? Reflect.ownKeys : yd ? function (e) {
    return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
  } : Object.getOwnPropertyNames;

  function _d(e) {
    return e === null ? null : typeof e == "object" ? "" + e : e
  }

  function bn(e, t) {
    return Eo.hasOwnProperty.call(e, t)
  }
  var Ab = Object.getOwnPropertyDescriptors || function (t) {
    var n = {};
    return Co(t).forEach(function (a) {
      n[a] = ho(t, a)
    }), n
  };

  function Y8(e, t) {
    for (var n = 0; n < t.length; n++) {
      var a = t[n];
      a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, Mb(a.key), a)
    }
  }

  function Yc(e, t, n) {
    return t && Y8(e.prototype, t), n && Y8(e, n), Object.defineProperty(e, "prototype", {
      writable: !1
    }), e
  }

  function Y0() {
    return Y0 = Object.assign ? Object.assign.bind() : function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
      }
      return e
    }, Y0.apply(this, arguments)
  }

  function Ed(e, t) {
    e.prototype = Object.create(t.prototype), e.prototype.constructor = e, zc(e, t)
  }

  function zc(e, t) {
    return zc = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (a, o) {
      return a.__proto__ = o, a
    }, zc(e, t)
  }

  function Uc(e) {
    if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
  }

  function Cb(e, t) {
    if (e) {
      if (typeof e == "string") return X8(e, t);
      var n = Object.prototype.toString.call(e).slice(8, -1);
      if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return X8(e, t)
    }
  }

  function X8(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
    return a
  }

  function W0(e, t) {
    var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
    if (n) return (n = n.call(e)).next.bind(n);
    if (Array.isArray(e) || (n = Cb(e)) || t && e && typeof e.length == "number") {
      n && (e = n);
      var a = 0;
      return function () {
        return a >= e.length ? {
          done: !0
        } : {
          done: !1,
          value: e[a++]
        }
      }
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
  }

  function bb(e, t) {
    if (typeof e != "object" || e === null) return e;
    var n = e[Symbol.toPrimitive];
    if (n !== void 0) {
      var a = n.call(e, t || "default");
      if (typeof a != "object") return a;
      throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
  }

  function Mb(e) {
    var t = bb(e, "string");
    return typeof t == "symbol" ? t : String(t)
  }
  var K1 = Symbol("mobx-stored-annotations");

  function Y1(e) {
    function t(n, a) {
      Pa(n, a, e)
    }
    return Object.assign(t, e)
  }

  function Pa(e, t, n) {
    if (bn(e, K1) || Ao(e, K1, Y0({}, e[K1])), !1) var a;
    Zb(e, n, t), Rb(n) || (e[K1][t] = n)
  }

  function Zb(e, t, n) {
    if (!1) var a, o, s
  }

  function Sb(e) {
    return bn(e, K1) || Ao(e, K1, Y0({}, e[K1])), e[K1]
  }
  var se = Symbol("mobx administration"),
    Ra = function () {
      function e(n) {
        n === void 0 && (n = "Atom"), this.name_ = void 0, this.isPendingUnobservation_ = !1, this.isBeingObserved_ = !1, this.observers_ = new Set, this.diffValue_ = 0, this.lastAccessedBy_ = 0, this.lowestObserverState_ = we.NOT_TRACKING_, this.onBOL = void 0, this.onBUOL = void 0, this.name_ = n
      }
      var t = e.prototype;
      return t.onBO = function () {
        this.onBOL && this.onBOL.forEach(function (a) {
          return a()
        })
      }, t.onBUO = function () {
        this.onBUOL && this.onBUOL.forEach(function (a) {
          return a()
        })
      }, t.reportObserved = function () {
        return Hd(this)
      }, t.reportChanged = function () {
        Qt(), Dd(this), Yt()
      }, t.toString = function () {
        return this.name_
      }, e
    }(),
    Xc = W5("Atom", Ra);

  function bo(e, t, n) {
    t === void 0 && (t = j0), n === void 0 && (n = j0);
    var a = new Ra(e);
    return t !== j0 && PM(a, t), n !== j0 && qd(a, n), a
  }

  function xb(e, t) {
    return e === t
  }

  function Ib(e, t) {
    return iu(e, t)
  }

  function Tb(e, t) {
    return iu(e, t, 1)
  }

  function Ob(e, t) {
    return Object.is ? Object.is(e, t) : e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t
  }
  var fo = {
    identity: xb,
    structural: Ib,
    default: Ob,
    shallow: Tb
  };

  function X0(e, t, n) {
    return Yd(e) ? e : Array.isArray(e) ? ze.array(e, {
      name: n
    }) : h5(e) ? ze.object(e, void 0, {
      name: n
    }) : nr(e) ? ze.map(e, {
      name: n
    }) : La(e) ? ze.set(e, {
      name: n
    }) : typeof e == "function" && !nu(e) && !go(e) ? vd(e) ? Oa(e) : Ta(n, e) : e
  }

  function kb(e, t, n) {
    if (e == null || tr(e) || Ua(e) || m5(e) || ar(e)) return e;
    if (Array.isArray(e)) return ze.array(e, {
      name: n,
      deep: !1
    });
    if (h5(e)) return ze.object(e, void 0, {
      name: n,
      deep: !1
    });
    if (nr(e)) return ze.map(e, {
      name: n,
      deep: !1
    });
    if (La(e)) return ze.set(e, {
      name: n,
      deep: !1
    })
  }

  function Mo(e) {
    return e
  }

  function Lb(e, t) {
    return iu(e, t) ? t : e
  }
  var Pb = "override";

  function Rb(e) {
    return e.annotationType_ === Pb
  }

  function Va(e, t) {
    return {
      annotationType_: e,
      options_: t,
      make_: Vb,
      extend_: Nb
    }
  }

  function Vb(e, t, n, a) {
    var o;
    if ((o = this.options_) != null && o.bound) return this.extend_(e, t, n, !1) === null ? 0 : 1;
    if (a === e.target_) return this.extend_(e, t, n, !1) === null ? 0 : 2;
    if (nu(n.value)) return 1;
    var s = wd(e, this, t, n, !1);
    return Q1(a, t, s), 2
  }

  function Nb(e, t, n, a) {
    var o = wd(e, this, t, n);
    return e.defineProperty_(t, o, a)
  }

  function Hb(e, t, n, a) {
    var o = t.annotationType_,
      s = a.value
  }

  function wd(e, t, n, a, o) {
    var s, c, h, f, p, _, M;
    o === void 0 && (o = q.safeDescriptors), Hb(e, t, n, a);
    var g = a.value;
    if ((s = t.options_) != null && s.bound) {
      var A;
      g = g.bind((A = e.proxy_) != null ? A : e.target_)
    }
    return {
      value: J0((c = (h = t.options_) == null ? void 0 : h.name) != null ? c : n.toString(), g, (f = (p = t.options_) == null ? void 0 : p.autoAction) != null ? f : !1, (_ = t.options_) != null && _.bound ? (M = e.proxy_) != null ? M : e.target_ : void 0),
      configurable: o ? e.isPlainObject_ : !0,
      enumerable: !1,
      writable: !o
    }
  }

  function Ad(e, t) {
    return {
      annotationType_: e,
      options_: t,
      make_: Db,
      extend_: Fb
    }
  }

  function Db(e, t, n, a) {
    var o;
    if (a === e.target_) return this.extend_(e, t, n, !1) === null ? 0 : 2;
    if ((o = this.options_) != null && o.bound && (!bn(e.target_, t) || !go(e.target_[t])) && this.extend_(e, t, n, !1) === null) return 0;
    if (go(n.value)) return 1;
    var s = Cd(e, this, t, n, !1, !1);
    return Q1(a, t, s), 2
  }

  function Fb(e, t, n, a) {
    var o, s = Cd(e, this, t, n, (o = this.options_) == null ? void 0 : o.bound);
    return e.defineProperty_(t, s, a)
  }

  function Ub(e, t, n, a) {
    var o = t.annotationType_,
      s = a.value
  }

  function Cd(e, t, n, a, o, s) {
    s === void 0 && (s = q.safeDescriptors), Ub(e, t, n, a);
    var c = a.value;
    if (go(c) || (c = Oa(c)), o) {
      var h;
      c = c.bind((h = e.proxy_) != null ? h : e.target_), c.isMobXFlow = !0
    }
    return {
      value: c,
      configurable: s ? e.isPlainObject_ : !0,
      enumerable: !1,
      writable: !s
    }
  }

  function Jc(e, t) {
    return {
      annotationType_: e,
      options_: t,
      make_: Bb,
      extend_: Gb
    }
  }

  function Bb(e, t, n) {
    return this.extend_(e, t, n, !1) === null ? 0 : 1
  }

  function Gb(e, t, n, a) {
    return zb(e, this, t, n), e.defineComputedProperty_(t, Y0({}, this.options_, {
      get: n.get,
      set: n.set
    }), a)
  }

  function zb(e, t, n, a) {
    var o = t.annotationType_,
      s = a.get
  }

  function Zo(e, t) {
    return {
      annotationType_: e,
      options_: t,
      make_: $b,
      extend_: qb
    }
  }

  function $b(e, t, n) {
    return this.extend_(e, t, n, !1) === null ? 0 : 1
  }

  function qb(e, t, n, a) {
    var o, s;
    return jb(e, this, t, n), e.defineObservableProperty_(t, n.value, (o = (s = this.options_) == null ? void 0 : s.enhancer) != null ? o : X0, a)
  }

  function jb(e, t, n, a) {
    var o = t.annotationType_
  }
  var Wb = "true",
    Kb = bd();

  function bd(e) {
    return {
      annotationType_: Wb,
      options_: e,
      make_: Qb,
      extend_: Yb
    }
  }

  function Qb(e, t, n, a) {
    var o, s;
    if (n.get) return So.make_(e, t, n, a);
    if (n.set) {
      var c = J0(t.toString(), n.set);
      return a === e.target_ ? e.defineProperty_(t, {
        configurable: q.safeDescriptors ? e.isPlainObject_ : !0,
        set: c
      }) === null ? 0 : 2 : (Q1(a, t, {
        configurable: !0,
        set: c
      }), 2)
    }
    if (a !== e.target_ && typeof n.value == "function") {
      var h;
      if (vd(n.value)) {
        var f, p = (f = this.options_) != null && f.autoBind ? Oa.bound : Oa;
        return p.make_(e, t, n, a)
      }
      var _ = (h = this.options_) != null && h.autoBind ? Ta.bound : Ta;
      return _.make_(e, t, n, a)
    }
    var M = ((o = this.options_) == null ? void 0 : o.deep) === !1 ? ze.ref : ze;
    if (typeof n.value == "function" && (s = this.options_) != null && s.autoBind) {
      var g;
      n.value = n.value.bind((g = e.proxy_) != null ? g : e.target_)
    }
    return M.make_(e, t, n, a)
  }

  function Yb(e, t, n, a) {
    var o, s;
    if (n.get) return So.extend_(e, t, n, a);
    if (n.set) return e.defineProperty_(t, {
      configurable: q.safeDescriptors ? e.isPlainObject_ : !0,
      set: J0(t.toString(), n.set)
    }, a);
    if (typeof n.value == "function" && (o = this.options_) != null && o.autoBind) {
      var c;
      n.value = n.value.bind((c = e.proxy_) != null ? c : e.target_)
    }
    var h = ((s = this.options_) == null ? void 0 : s.deep) === !1 ? ze.ref : ze;
    return h.extend_(e, t, n, a)
  }
  var Xb = "observable",
    Jb = "observable.ref",
    eM = "observable.shallow",
    tM = "observable.struct",
    Md = {
      deep: !0,
      name: void 0,
      defaultDecorator: void 0,
      proxy: !0
    };
  Object.freeze(Md);

  function io(e) {
    return e || Md
  }
  var Zd = Zo(Xb),
    nM = Zo(Jb, {
      enhancer: Mo
    }),
    rM = Zo(eM, {
      enhancer: kb
    }),
    aM = Zo(tM, {
      enhancer: Lb
    }),
    Sd = Y1(Zd);

  function oo(e) {
    return e.deep === !0 ? X0 : e.deep === !1 ? Mo : oM(e.defaultDecorator)
  }

  function iM(e) {
    var t;
    return e ? (t = e.defaultDecorator) != null ? t : bd(e) : void 0
  }

  function oM(e) {
    var t, n;
    return e && (t = (n = e.options_) == null ? void 0 : n.enhancer) != null ? t : X0
  }

  function xd(e, t, n) {
    if (j5(t)) {
      Pa(e, t, Zd);
      return
    }
    return Yd(e) ? e : h5(e) ? ze.object(e, t, n) : Array.isArray(e) ? ze.array(e, t) : nr(e) ? ze.map(e, t) : La(e) ? ze.set(e, t) : typeof e == "object" && e !== null ? e : ze.box(e, t)
  }
  fd(xd, Sd);
  var sM = {
    box: function (t, n) {
      var a = io(n);
      return new Q0(t, oo(a), a.name, !0, a.equals)
    },
    array: function (t, n) {
      var a = io(n);
      return (q.useProxies === !1 || a.proxy === !1 ? rZ : WM)(t, oo(a), a.name)
    },
    map: function (t, n) {
      var a = io(n);
      return new tp(t, oo(a), a.name)
    },
    set: function (t, n) {
      var a = io(n);
      return new ap(t, oo(a), a.name)
    },
    object: function (t, n, a) {
      return NM(q.useProxies === !1 || a?.proxy === !1 ? Oo({}, a) : $M({}, a), t, n)
    },
    ref: Y1(nM),
    shallow: Y1(rM),
    deep: Sd,
    struct: Y1(aM)
  },
    ze = fd(xd, sM),
    Id = "computed",
    lM = "computed.struct",
    Td = Jc(Id),
    cM = Jc(lM, {
      equals: fo.structural
    }),
    So = function (t, n) {
      if (j5(n)) return Pa(t, n, Td);
      if (h5(t)) return Y1(Jc(Id, t));
      var a = h5(n) ? n : {};
      return a.get = t, a.name || (a.name = t.name || ""), new Ia(a)
    };
  Object.assign(So, Td);
  So.struct = Y1(cM);
  var J8, ed, po = 0,
    uM = 1,
    hM = (J8 = (ed = ho(function () { }, "name")) == null ? void 0 : ed.configurable) != null ? J8 : !1,
    td = {
      value: "action",
      configurable: !0,
      writable: !1,
      enumerable: !1
    };

  function J0(e, t, n, a) {
    n === void 0 && (n = !1);

    function o() {
      return fM(e, n, t, a || this, arguments)
    }
    return o.isMobxAction = !0, hM && (td.value = e, Q1(o, "name", td)), o
  }

  function fM(e, t, n, a, o) {
    var s = dM(e, t, a, o);
    try {
      return n.apply(a, o)
    } catch (c) {
      throw s.error_ = c, c
    } finally {
      pM(s)
    }
  }

  function dM(e, t, n, a) {
    var o = !1,
      s = 0;
    if (!1) var c;
    var h = q.trackingDerivation,
      f = !t || !h;
    Qt();
    var p = q.allowStateChanges;
    f && (rr(), p = Na(!0));
    var _ = K5(!0),
      M = {
        runAsAction_: f,
        prevDerivation_: h,
        prevAllowStateChanges_: p,
        prevAllowStateReads_: _,
        notifySpy_: o,
        startTime_: s,
        actionId_: uM++,
        parentActionId_: po
      };
    return po = M.actionId_, M
  }

  function pM(e) {
    po !== e.actionId_ && Ee(30), po = e.parentActionId_, e.error_ !== void 0 && (q.suppressReactionErrors = !0), Ha(e.prevAllowStateChanges_), Mn(e.prevAllowStateReads_), Yt(), e.runAsAction_ && u5(e.prevDerivation_), q.suppressReactionErrors = !1
  }

  function eu(e, t) {
    var n = Na(e);
    try {
      return t()
    } finally {
      Ha(n)
    }
  }

  function Na(e) {
    var t = q.allowStateChanges;
    return q.allowStateChanges = e, t
  }

  function Ha(e) {
    q.allowStateChanges = e
  }
  var Od;
  Od = Symbol.toPrimitive;
  var Q0 = function (e) {
    Ed(t, e);

    function t(a, o, s, c, h) {
      var f;
      return s === void 0 && (s = "ObservableValue"), c === void 0 && (c = !0), h === void 0 && (h = fo.default), f = e.call(this, s) || this, f.enhancer = void 0, f.name_ = void 0, f.equals = void 0, f.hasUnreportedChange_ = !1, f.interceptors_ = void 0, f.changeListeners_ = void 0, f.value_ = void 0, f.dehancer = void 0, f.enhancer = o, f.name_ = s, f.equals = h, f.value_ = o(a, void 0, s), f
    }
    var n = t.prototype;
    return n.dehanceValue = function (o) {
      return this.dehancer !== void 0 ? this.dehancer(o) : o
    }, n.set = function (o) {
      var s = this.value_;
      if (o = this.prepareNewValue_(o), o !== q.UNCHANGED) {
        var c = q5();
        this.setNewValue_(o)
      }
    }, n.prepareNewValue_ = function (o) {
      if (er(this), g1(this)) {
        var s = y1(this, {
          object: this,
          type: X1,
          newValue: o
        });
        if (!s) return q.UNCHANGED;
        o = s.newValue
      }
      return o = this.enhancer(o, this.value_, this.name_), this.equals(this.value_, o) ? q.UNCHANGED : o
    }, n.setNewValue_ = function (o) {
      var s = this.value_;
      this.value_ = o, this.reportChanged(), P1(this) && R1(this, {
        type: X1,
        object: this,
        newValue: o,
        oldValue: s
      })
    }, n.get = function () {
      return this.reportObserved(), this.dehanceValue(this.value_)
    }, n.intercept_ = function (o) {
      return Da(this, o)
    }, n.observe_ = function (o, s) {
      return s && o({
        observableKind: "value",
        debugObjectName: this.name_,
        object: this,
        type: X1,
        newValue: this.value_,
        oldValue: void 0
      }), Fa(this, o)
    }, n.raw = function () {
      return this.value_
    }, n.toJSON = function () {
      return this.get()
    }, n.toString = function () {
      return this.name_ + "[" + this.value_ + "]"
    }, n.valueOf = function () {
      return _d(this.get())
    }, n[Od] = function () {
      return this.valueOf()
    }, t
  }(Ra);
  var kd;
  kd = Symbol.toPrimitive;
  var Ia = function () {
    function e(n) {
      this.dependenciesState_ = we.NOT_TRACKING_, this.observing_ = [], this.newObserving_ = null, this.isBeingObserved_ = !1, this.isPendingUnobservation_ = !1, this.observers_ = new Set, this.diffValue_ = 0, this.runId_ = 0, this.lastAccessedBy_ = 0, this.lowestObserverState_ = we.UP_TO_DATE_, this.unboundDepsCount_ = 0, this.value_ = new mo(null), this.name_ = void 0, this.triggeredBy_ = void 0, this.isComputing_ = !1, this.isRunningSetter_ = !1, this.derivation = void 0, this.setter_ = void 0, this.isTracing_ = c5.NONE, this.scope_ = void 0, this.equals_ = void 0, this.requiresReaction_ = void 0, this.keepAlive_ = void 0, this.onBOL = void 0, this.onBUOL = void 0, n.get || Ee(31), this.derivation = n.get, this.name_ = n.name || "ComputedValue", n.set && (this.setter_ = J0("ComputedValue-setter", n.set)), this.equals_ = n.equals || (n.compareStructural || n.struct ? fo.structural : fo.default), this.scope_ = n.context, this.requiresReaction_ = n.requiresReaction, this.keepAlive_ = !!n.keepAlive
    }
    var t = e.prototype;
    return t.onBecomeStale_ = function () {
      _M(this)
    }, t.onBO = function () {
      this.onBOL && this.onBOL.forEach(function (a) {
        return a()
      })
    }, t.onBUO = function () {
      this.onBUOL && this.onBUOL.forEach(function (a) {
        return a()
      })
    }, t.get = function () {
      if (this.isComputing_ && Ee(32, this.name_, this.derivation), q.inBatch === 0 && this.observers_.size === 0 && !this.keepAlive_) $c(this) && (this.warnAboutUntrackedRead_(), Qt(), this.value_ = this.computeValue_(!1), Yt());
      else if (Hd(this), $c(this)) {
        var a = q.trackingContext;
        this.keepAlive_ && !a && (q.trackingContext = this), this.trackAndCompute() && yM(this), q.trackingContext = a
      }
      var o = this.value_;
      if (lo(o)) throw o.cause;
      return o
    }, t.set = function (a) {
      if (this.setter_) {
        this.isRunningSetter_ && Ee(33, this.name_), this.isRunningSetter_ = !0;
        try {
          this.setter_.call(this.scope_, a)
        } finally {
          this.isRunningSetter_ = !1
        }
      } else Ee(34, this.name_)
    }, t.trackAndCompute = function () {
      var a = this.value_,
        o = this.dependenciesState_ === we.NOT_TRACKING_,
        s = this.computeValue_(!0),
        c = o || lo(a) || lo(s) || !this.equals_(a, s);
      return c && (this.value_ = s), c
    }, t.computeValue_ = function (a) {
      this.isComputing_ = !0;
      var o = Na(!1),
        s;
      if (a) s = Ld(this, this.derivation, this.scope_);
      else if (q.disableErrorBoundaries === !0) s = this.derivation.call(this.scope_);
      else try {
        s = this.derivation.call(this.scope_)
      } catch (c) {
        s = new mo(c)
      }
      return Ha(o), this.isComputing_ = !1, s
    }, t.suspend_ = function () {
      this.keepAlive_ || (qc(this), this.value_ = void 0)
    }, t.observe_ = function (a, o) {
      var s = this,
        c = !0,
        h = void 0;
      return IM(function () {
        var f = s.get();
        if (!c || o) {
          var p = rr();
          a({
            observableKind: "computed",
            debugObjectName: s.name_,
            type: X1,
            object: s,
            newValue: f,
            oldValue: h
          }), u5(p)
        }
        c = !1, h = f
      })
    }, t.warnAboutUntrackedRead_ = function () { }, t.toString = function () {
      return this.name_ + "[" + this.derivation.toString() + "]"
    }, t.valueOf = function () {
      return _d(this.get())
    }, t[kd] = function () {
      return this.valueOf()
    }, e
  }(),
    xo = W5("ComputedValue", Ia),
    we;
  (function (e) {
    e[e.NOT_TRACKING_ = -1] = "NOT_TRACKING_", e[e.UP_TO_DATE_ = 0] = "UP_TO_DATE_", e[e.POSSIBLY_STALE_ = 1] = "POSSIBLY_STALE_", e[e.STALE_ = 2] = "STALE_"
  })(we || (we = {}));
  var c5;
  (function (e) {
    e[e.NONE = 0] = "NONE", e[e.LOG = 1] = "LOG", e[e.BREAK = 2] = "BREAK"
  })(c5 || (c5 = {}));
  var mo = function (t) {
    this.cause = void 0, this.cause = t
  };

  function lo(e) {
    return e instanceof mo
  }

  function $c(e) {
    switch (e.dependenciesState_) {
      case we.UP_TO_DATE_:
        return !1;
      case we.NOT_TRACKING_:
      case we.STALE_:
        return !0;
      case we.POSSIBLY_STALE_: {
        for (var t = K5(!0), n = rr(), a = e.observing_, o = a.length, s = 0; s < o; s++) {
          var c = a[s];
          if (xo(c)) {
            if (q.disableErrorBoundaries) c.get();
            else try {
              c.get()
            } catch {
              return u5(n), Mn(t), !0
            }
            if (e.dependenciesState_ === we.STALE_) return u5(n), Mn(t), !0
          }
        }
        return Pd(e), u5(n), Mn(t), !1
      }
    }
  }

  function er(e) {
    return;
    var t
  }

  function Ld(e, t, n) {
    var a = K5(!0);
    Pd(e), e.newObserving_ = new Array(e.observing_.length + 100), e.unboundDepsCount_ = 0, e.runId_ = ++q.runId;
    var o = q.trackingDerivation;
    q.trackingDerivation = e, q.inBatch++;
    var s;
    if (q.disableErrorBoundaries === !0) s = t.call(n);
    else try {
      s = t.call(n)
    } catch (c) {
      s = new mo(c)
    }
    return q.inBatch--, q.trackingDerivation = o, mM(e), Mn(a), s
  }

  function mM(e) {
    for (var t = e.observing_, n = e.observing_ = e.newObserving_, a = we.UP_TO_DATE_, o = 0, s = e.unboundDepsCount_, c = 0; c < s; c++) {
      var h = n[c];
      h.diffValue_ === 0 && (h.diffValue_ = 1, o !== c && (n[o] = h), o++), h.dependenciesState_ > a && (a = h.dependenciesState_)
    }
    for (n.length = o, e.newObserving_ = null, s = t.length; s--;) {
      var f = t[s];
      f.diffValue_ === 0 && Vd(f, e), f.diffValue_ = 0
    }
    for (; o--;) {
      var p = n[o];
      p.diffValue_ === 1 && (p.diffValue_ = 0, gM(p, e))
    }
    a !== we.UP_TO_DATE_ && (e.dependenciesState_ = a, e.onBecomeStale_())
  }

  function qc(e) {
    var t = e.observing_;
    e.observing_ = [];
    for (var n = t.length; n--;) Vd(t[n], e);
    e.dependenciesState_ = we.NOT_TRACKING_
  }

  function tu(e) {
    var t = rr();
    try {
      return e()
    } finally {
      u5(t)
    }
  }

  function rr() {
    var e = q.trackingDerivation;
    return q.trackingDerivation = null, e
  }

  function u5(e) {
    q.trackingDerivation = e
  }

  function K5(e) {
    var t = q.allowStateReads;
    return q.allowStateReads = e, t
  }

  function Mn(e) {
    q.allowStateReads = e
  }

  function Pd(e) {
    if (e.dependenciesState_ !== we.UP_TO_DATE_) {
      e.dependenciesState_ = we.UP_TO_DATE_;
      for (var t = e.observing_, n = t.length; n--;) t[n].lowestObserverState_ = we.UP_TO_DATE_
    }
  }
  var co = function () {
    this.version = 6, this.UNCHANGED = {}, this.trackingDerivation = null, this.trackingContext = null, this.runId = 0, this.mobxGuid = 0, this.inBatch = 0, this.pendingUnobservations = [], this.pendingReactions = [], this.isRunningReactions = !1, this.allowStateChanges = !1, this.allowStateReads = !0, this.enforceActions = !0, this.spyListeners = [], this.globalReactionErrorHandlers = [], this.computedRequiresReaction = !1, this.reactionRequiresObservable = !1, this.observableRequiresReaction = !1, this.disableErrorBoundaries = !1, this.suppressReactionErrors = !1, this.useProxies = !0, this.verifyProxies = !1, this.safeDescriptors = !0
  },
    uo = !0,
    Rd = !1,
    q = function () {
      var e = Qc();
      return e.__mobxInstanceCount > 0 && !e.__mobxGlobals && (uo = !1), e.__mobxGlobals && e.__mobxGlobals.version !== new co().version && (uo = !1), uo ? e.__mobxGlobals ? (e.__mobxInstanceCount += 1, e.__mobxGlobals.UNCHANGED || (e.__mobxGlobals.UNCHANGED = {}), e.__mobxGlobals) : (e.__mobxInstanceCount = 1, e.__mobxGlobals = new co) : (setTimeout(function () {
        Rd || Ee(35)
      }, 1), new co)
    }();

  function vM() {
    if ((q.pendingReactions.length || q.inBatch || q.isRunningReactions) && Ee(36), Rd = !0, uo) {
      var e = Qc();
      --e.__mobxInstanceCount === 0 && (e.__mobxGlobals = void 0), q = new co
    }
  }

  function gM(e, t) {
    e.observers_.add(t), e.lowestObserverState_ > t.dependenciesState_ && (e.lowestObserverState_ = t.dependenciesState_)
  }

  function Vd(e, t) {
    e.observers_.delete(t), e.observers_.size === 0 && Nd(e)
  }

  function Nd(e) {
    e.isPendingUnobservation_ === !1 && (e.isPendingUnobservation_ = !0, q.pendingUnobservations.push(e))
  }

  function Qt() {
    q.inBatch++
  }

  function Yt() {
    if (--q.inBatch === 0) {
      Fd();
      for (var e = q.pendingUnobservations, t = 0; t < e.length; t++) {
        var n = e[t];
        n.isPendingUnobservation_ = !1, n.observers_.size === 0 && (n.isBeingObserved_ && (n.isBeingObserved_ = !1, n.onBUO()), n instanceof Ia && n.suspend_())
      }
      q.pendingUnobservations = []
    }
  }

  function Hd(e) {
    var t = q.trackingDerivation;
    return t !== null ? (t.runId_ !== e.lastAccessedBy_ && (e.lastAccessedBy_ = t.runId_, t.newObserving_[t.unboundDepsCount_++] = e, !e.isBeingObserved_ && q.trackingContext && (e.isBeingObserved_ = !0, e.onBO())), e.isBeingObserved_) : (e.observers_.size === 0 && q.inBatch > 0 && Nd(e), !1)
  }

  function Dd(e) {
    e.lowestObserverState_ !== we.STALE_ && (e.lowestObserverState_ = we.STALE_, e.observers_.forEach(function (t) {
      t.dependenciesState_ === we.UP_TO_DATE_ && t.onBecomeStale_(), t.dependenciesState_ = we.STALE_
    }))
  }

  function yM(e) {
    e.lowestObserverState_ !== we.STALE_ && (e.lowestObserverState_ = we.STALE_, e.observers_.forEach(function (t) {
      t.dependenciesState_ === we.POSSIBLY_STALE_ ? t.dependenciesState_ = we.STALE_ : t.dependenciesState_ === we.UP_TO_DATE_ && (e.lowestObserverState_ = we.UP_TO_DATE_)
    }))
  }

  function _M(e) {
    e.lowestObserverState_ === we.UP_TO_DATE_ && (e.lowestObserverState_ = we.POSSIBLY_STALE_, e.observers_.forEach(function (t) {
      t.dependenciesState_ === we.UP_TO_DATE_ && (t.dependenciesState_ = we.POSSIBLY_STALE_, t.onBecomeStale_())
    }))
  }
  var f5 = function () {
    function e(n, a, o, s) {
      n === void 0 && (n = "Reaction"), this.name_ = void 0, this.onInvalidate_ = void 0, this.errorHandler_ = void 0, this.requiresObservable_ = void 0, this.observing_ = [], this.newObserving_ = [], this.dependenciesState_ = we.NOT_TRACKING_, this.diffValue_ = 0, this.runId_ = 0, this.unboundDepsCount_ = 0, this.isDisposed_ = !1, this.isScheduled_ = !1, this.isTrackPending_ = !1, this.isRunning_ = !1, this.isTracing_ = c5.NONE, this.name_ = n, this.onInvalidate_ = a, this.errorHandler_ = o, this.requiresObservable_ = s
    }
    var t = e.prototype;
    return t.onBecomeStale_ = function () {
      this.schedule_()
    }, t.schedule_ = function () {
      this.isScheduled_ || (this.isScheduled_ = !0, q.pendingReactions.push(this), Fd())
    }, t.isScheduled = function () {
      return this.isScheduled_
    }, t.runReaction_ = function () {
      if (!this.isDisposed_) {
        Qt(), this.isScheduled_ = !1;
        var a = q.trackingContext;
        if (q.trackingContext = this, $c(this)) {
          this.isTrackPending_ = !0;
          try {
            this.onInvalidate_()
          } catch (o) {
            this.reportExceptionInDerivation_(o)
          }
        }
        q.trackingContext = a, Yt()
      }
    }, t.track = function (a) {
      if (!this.isDisposed_) {
        Qt();
        var o = q5(),
          s;
        this.isRunning_ = !0;
        var c = q.trackingContext;
        q.trackingContext = this;
        var h = Ld(this, a, void 0);
        q.trackingContext = c, this.isRunning_ = !1, this.isTrackPending_ = !1, this.isDisposed_ && qc(this), lo(h) && this.reportExceptionInDerivation_(h.cause), Yt()
      }
    }, t.reportExceptionInDerivation_ = function (a) {
      var o = this;
      if (this.errorHandler_) {
        this.errorHandler_(a, this);
        return
      }
      if (q.disableErrorBoundaries) throw a;
      var s = "[mobx] uncaught error in '" + this + "'";
      q.suppressReactionErrors || console.error(s, a), q.globalReactionErrorHandlers.forEach(function (c) {
        return c(a, o)
      })
    }, t.dispose = function () {
      this.isDisposed_ || (this.isDisposed_ = !0, this.isRunning_ || (Qt(), qc(this), Yt()))
    }, t.getDisposer_ = function () {
      var a = this.dispose.bind(this);
      return a[se] = this, a
    }, t.toString = function () {
      return "Reaction[" + this.name_ + "]"
    }, t.trace = function (a) {
      a === void 0 && (a = !1), BM(this, a)
    }, e
  }();
  var EM = 100,
    jc = function (t) {
      return t()
    };

  function Fd() {
    q.inBatch > 0 || q.isRunningReactions || jc(wM)
  }

  function wM() {
    q.isRunningReactions = !0;
    for (var e = q.pendingReactions, t = 0; e.length > 0;) {
      ++t === EM && (console.error("[mobx] cycle in reaction: " + e[0]), e.splice(0));
      for (var n = e.splice(0), a = 0, o = n.length; a < o; a++) n[a].runReaction_()
    }
    q.isRunningReactions = !1
  }
  var vo = W5("Reaction", f5);

  function AM(e) {
    var t = jc;
    jc = function (a) {
      return e(function () {
        return t(a)
      })
    }
  }

  function q5() {
    return !1
  }

  function CM(e) {
    return console.warn("[mobx.spy] Is a no-op in production builds"),
      function () { }
  }
  var Ud = "action",
    bM = "action.bound",
    Bd = "autoAction",
    MM = "autoAction.bound",
    ZM = "<unnamed action>",
    Gd = Va(Ud),
    SM = Va(bM, {
      bound: !0
    }),
    zd = Va(Bd, {
      autoAction: !0
    }),
    xM = Va(MM, {
      autoAction: !0,
      bound: !0
    });

  function $d(e) {
    var t = function (a, o) {
      if (V1(a)) return J0(a.name || ZM, a, e);
      if (V1(o)) return J0(a, o, e);
      if (j5(o)) return Pa(a, o, e ? zd : Gd);
      if (j5(a)) return Y1(Va(e ? Bd : Ud, {
        name: a,
        autoAction: e
      }))
    };
    return t
  }
  var K0 = $d(!1);
  Object.assign(K0, Gd);
  var Ta = $d(!0);
  Object.assign(Ta, zd);
  K0.bound = Y1(SM);
  Ta.bound = Y1(xM);

  function nu(e) {
    return V1(e) && e.isMobxAction === !0
  }

  function IM(e, t) {
    var n, a;
    t === void 0 && (t = dd);
    var o = (n = (a = t) == null ? void 0 : a.name) != null ? n : "Autorun",
      s = !t.scheduler && !t.delay,
      c;
    if (s) c = new f5(o, function () {
      this.track(p)
    }, t.onError, t.requiresObservable);
    else {
      var h = OM(t),
        f = !1;
      c = new f5(o, function () {
        f || (f = !0, h(function () {
          f = !1, c.isDisposed_ || c.track(p)
        }))
      }, t.onError, t.requiresObservable)
    }

    function p() {
      e(c)
    }
    return c.schedule_(), c.getDisposer_()
  }
  var TM = function (t) {
    return t()
  };

  function OM(e) {
    return e.scheduler ? e.scheduler : e.delay ? function (t) {
      return setTimeout(t, e.delay)
    } : TM
  }
  var kM = "onBO",
    LM = "onBUO";

  function PM(e, t, n) {
    return jd(kM, e, t, n)
  }

  function qd(e, t, n) {
    return jd(LM, e, t, n)
  }

  function jd(e, t, n, a) {
    var o = typeof a == "function" ? d5(t, n) : d5(t),
      s = V1(a) ? a : n,
      c = e + "L";
    return o[c] ? o[c].add(s) : o[c] = new Set([s]),
      function () {
        var h = o[c];
        h && (h.delete(s), h.size === 0 && delete o[c])
      }
  }
  var RM = "never",
    so = "always",
    VM = "observed";

  function Io(e) {
    e.isolateGlobalState === !0 && vM();
    var t = e.useProxies,
      n = e.enforceActions;
    if (t !== void 0 && (q.useProxies = t === so ? !0 : t === RM ? !1 : typeof Proxy < "u"), t === "ifavailable" && (q.verifyProxies = !0), n !== void 0) {
      var a = n === so ? so : n === VM;
      q.enforceActions = a, q.allowStateChanges = !(a === !0 || a === so)
    } ["computedRequiresReaction", "reactionRequiresObservable", "observableRequiresReaction", "disableErrorBoundaries", "safeDescriptors"].forEach(function (o) {
      o in e && (q[o] = !!e[o])
    }), q.allowStateReads = !q.observableRequiresReaction, e.reactionScheduler && AM(e.reactionScheduler)
  }

  function NM(e, t, n, a) {
    var o = Ab(t),
      s = Oo(e, a)[se];
    Qt();
    try {
      Co(o).forEach(function (c) {
        s.extend_(c, o[c], n && c in n ? n[c] : !0)
      })
    } finally {
      Yt()
    }
    return e
  }

  function Wd(e, t) {
    return Kd(d5(e, t))
  }

  function Kd(e) {
    var t = {
      name: e.name_
    };
    return e.observing_ && e.observing_.length > 0 && (t.dependencies = HM(e.observing_).map(Kd)), t
  }

  function HM(e) {
    return Array.from(new Set(e))
  }
  var DM = 0;

  function Qd() {
    this.message = "FLOW_CANCELLED"
  }
  Qd.prototype = Object.create(Error.prototype);
  var nd = Ad("flow"),
    FM = Ad("flow.bound", {
      bound: !0
    }),
    Oa = Object.assign(function (t, n) {
      if (j5(n)) return Pa(t, n, nd);
      var a = t,
        o = a.name || "<unnamed flow>",
        s = function () {
          var h = this,
            f = arguments,
            p = ++DM,
            _ = K0(o + " - runid: " + p + " - init", a).apply(h, f),
            M, g = void 0,
            A = new Promise(function (x, k) {
              var U = 0;
              M = k;

              function E(b) {
                g = void 0;
                var S;
                try {
                  S = K0(o + " - runid: " + p + " - yield " + U++, _.next).call(_, b)
                } catch (L) {
                  return k(L)
                }
                C(S)
              }

              function y(b) {
                g = void 0;
                var S;
                try {
                  S = K0(o + " - runid: " + p + " - yield " + U++, _.throw).call(_, b)
                } catch (L) {
                  return k(L)
                }
                C(S)
              }

              function C(b) {
                if (V1(b?.then)) {
                  b.then(C, k);
                  return
                }
                return b.done ? x(b.value) : (g = Promise.resolve(b.value), g.then(E, y))
              }
              E(void 0)
            });
          return A.cancel = K0(o + " - runid: " + p + " - cancel", function () {
            try {
              g && rd(g);
              var x = _.return(void 0),
                k = Promise.resolve(x.value);
              k.then(j0, j0), rd(k), M(new Qd)
            } catch (U) {
              M(U)
            }
          }), A
        };
      return s.isMobXFlow = !0, s
    }, nd);
  Oa.bound = Y1(FM);

  function rd(e) {
    V1(e.cancel) && e.cancel()
  }

  function go(e) {
    return e?.isMobXFlow === !0
  }

  function UM(e, t) {
    return e ? t !== void 0 ? tr(e) ? e[se].values_.has(t) : !1 : tr(e) || !!e[se] || Xc(e) || vo(e) || xo(e) : !1
  }

  function Yd(e) {
    return UM(e)
  }

  function BM() {
    Ee("trace() is not available in production builds");
    for (var e = !1, t = arguments.length, n = new Array(t), a = 0; a < t; a++) n[a] = arguments[a];
    typeof n[n.length - 1] == "boolean" && (e = n.pop());
    var o = GM(n);
    if (!o) return Ee("'trace(break?)' can only be used inside a tracked computed value or a Reaction. Consider passing in the computed value or reaction explicitly");
    o.isTracing_ === c5.NONE && console.log("[mobx.trace] '" + o.name_ + "' tracing enabled"), o.isTracing_ = e ? c5.BREAK : c5.LOG
  }

  function GM(e) {
    switch (e.length) {
      case 0:
        return q.trackingDerivation;
      case 1:
        return d5(e[0]);
      case 2:
        return d5(e[0], e[1])
    }
  }

  function Cn(e, t) {
    t === void 0 && (t = void 0), Qt();
    try {
      return e.apply(t)
    } finally {
      Yt()
    }
  }

  function q0(e) {
    return e[se]
  }
  var zM = {
    has: function (t, n) {
      return q0(t).has_(n)
    },
    get: function (t, n) {
      return q0(t).get_(n)
    },
    set: function (t, n, a) {
      var o;
      return j5(n) ? (o = q0(t).set_(n, a, !0)) != null ? o : !0 : !1
    },
    deleteProperty: function (t, n) {
      var a;
      return j5(n) ? (a = q0(t).delete_(n, !0)) != null ? a : !0 : !1
    },
    defineProperty: function (t, n, a) {
      var o;
      return (o = q0(t).defineProperty_(n, a)) != null ? o : !0
    },
    ownKeys: function (t) {
      return q0(t).ownKeys_()
    },
    preventExtensions: function (t) {
      Ee(13)
    }
  };

  function $M(e, t) {
    var n, a;
    return pd(), e = Oo(e, t), (a = (n = e[se]).proxy_) != null ? a : n.proxy_ = new Proxy(e, zM)
  }

  function g1(e) {
    return e.interceptors_ !== void 0 && e.interceptors_.length > 0
  }

  function Da(e, t) {
    var n = e.interceptors_ || (e.interceptors_ = []);
    return n.push(t), md(function () {
      var a = n.indexOf(t);
      a !== -1 && n.splice(a, 1)
    })
  }

  function y1(e, t) {
    var n = rr();
    try {
      for (var a = [].concat(e.interceptors_ || []), o = 0, s = a.length; o < s && (t = a[o](t), t && !t.type && Ee(14), !!t); o++);
      return t
    } finally {
      u5(n)
    }
  }

  function P1(e) {
    return e.changeListeners_ !== void 0 && e.changeListeners_.length > 0
  }

  function Fa(e, t) {
    var n = e.changeListeners_ || (e.changeListeners_ = []);
    return n.push(t), md(function () {
      var a = n.indexOf(t);
      a !== -1 && n.splice(a, 1)
    })
  }

  function R1(e, t) {
    var n = rr(),
      a = e.changeListeners_;
    if (a) {
      a = a.slice();
      for (var o = 0, s = a.length; o < s; o++) a[o](t);
      u5(n)
    }
  }

  function To(e, t, n) {
    var a = Oo(e, n)[se];
    Qt();
    try {
      var o;
      (o = t) != null || (t = Sb(e)), Co(t).forEach(function (s) {
        return a.make_(s, t[s])
      })
    } finally {
      Yt()
    }
    return e
  }
  var ad = "splice",
    X1 = "update",
    qM = 1e4,
    jM = {
      get: function (t, n) {
        var a = t[se];
        return n === se ? a : n === "length" ? a.getArrayLength_() : typeof n == "string" && !isNaN(n) ? a.get_(parseInt(n)) : bn(yo, n) ? yo[n] : t[n]
      },
      set: function (t, n, a) {
        var o = t[se];
        return n === "length" && o.setArrayLength_(a), typeof n == "symbol" || isNaN(n) ? t[n] = a : o.set_(parseInt(n), a), !0
      },
      preventExtensions: function () {
        Ee(15)
      }
    },
    ru = function () {
      function e(n, a, o, s) {
        n === void 0 && (n = "ObservableArray"), this.owned_ = void 0, this.legacyMode_ = void 0, this.atom_ = void 0, this.values_ = [], this.interceptors_ = void 0, this.changeListeners_ = void 0, this.enhancer_ = void 0, this.dehancer = void 0, this.proxy_ = void 0, this.lastKnownLength_ = 0, this.owned_ = o, this.legacyMode_ = s, this.atom_ = new Ra(n), this.enhancer_ = function (c, h) {
          return a(c, h, "ObservableArray[..]")
        }
      }
      var t = e.prototype;
      return t.dehanceValue_ = function (a) {
        return this.dehancer !== void 0 ? this.dehancer(a) : a
      }, t.dehanceValues_ = function (a) {
        return this.dehancer !== void 0 && a.length > 0 ? a.map(this.dehancer) : a
      }, t.intercept_ = function (a) {
        return Da(this, a)
      }, t.observe_ = function (a, o) {
        return o === void 0 && (o = !1), o && a({
          observableKind: "array",
          object: this.proxy_,
          debugObjectName: this.atom_.name_,
          type: "splice",
          index: 0,
          added: this.values_.slice(),
          addedCount: this.values_.length,
          removed: [],
          removedCount: 0
        }), Fa(this, a)
      }, t.getArrayLength_ = function () {
        return this.atom_.reportObserved(), this.values_.length
      }, t.setArrayLength_ = function (a) {
        (typeof a != "number" || isNaN(a) || a < 0) && Ee("Out of range: " + a);
        var o = this.values_.length;
        if (a !== o)
          if (a > o) {
            for (var s = new Array(a - o), c = 0; c < a - o; c++) s[c] = void 0;
            this.spliceWithArray_(o, 0, s)
          } else this.spliceWithArray_(a, o - a)
      }, t.updateArrayLength_ = function (a, o) {
        a !== this.lastKnownLength_ && Ee(16), this.lastKnownLength_ += o, this.legacyMode_ && o > 0 && lp(a + o + 1)
      }, t.spliceWithArray_ = function (a, o, s) {
        var c = this;
        er(this.atom_);
        var h = this.values_.length;
        if (a === void 0 ? a = 0 : a > h ? a = h : a < 0 && (a = Math.max(0, h + a)), arguments.length === 1 ? o = h - a : o == null ? o = 0 : o = Math.max(0, Math.min(o, h - a)), s === void 0 && (s = Gc), g1(this)) {
          var f = y1(this, {
            object: this.proxy_,
            type: ad,
            index: a,
            removedCount: o,
            added: s
          });
          if (!f) return Gc;
          o = f.removedCount, s = f.added
        }
        if (s = s.length === 0 ? s : s.map(function (M) {
          return c.enhancer_(M, void 0)
        }), this.legacyMode_) {
          var p = s.length - o;
          this.updateArrayLength_(h, p)
        }
        var _ = this.spliceItemsIntoValues_(a, o, s);
        return (o !== 0 || s.length !== 0) && this.notifyArraySplice_(a, s, _), this.dehanceValues_(_)
      }, t.spliceItemsIntoValues_ = function (a, o, s) {
        if (s.length < qM) {
          var c;
          return (c = this.values_).splice.apply(c, [a, o].concat(s))
        } else {
          var h = this.values_.slice(a, a + o),
            f = this.values_.slice(a + o);
          this.values_.length += s.length - o;
          for (var p = 0; p < s.length; p++) this.values_[a + p] = s[p];
          for (var _ = 0; _ < f.length; _++) this.values_[a + s.length + _] = f[_];
          return h
        }
      }, t.notifyArrayChildUpdate_ = function (a, o, s) {
        var c = !this.owned_ && q5(),
          h = P1(this),
          f = h || c ? {
            observableKind: "array",
            object: this.proxy_,
            type: X1,
            debugObjectName: this.atom_.name_,
            index: a,
            newValue: o,
            oldValue: s
          } : null;
        this.atom_.reportChanged(), h && R1(this, f)
      }, t.notifyArraySplice_ = function (a, o, s) {
        var c = !this.owned_ && q5(),
          h = P1(this),
          f = h || c ? {
            observableKind: "array",
            object: this.proxy_,
            debugObjectName: this.atom_.name_,
            type: ad,
            index: a,
            removed: s,
            added: o,
            removedCount: s.length,
            addedCount: o.length
          } : null;
        this.atom_.reportChanged(), h && R1(this, f)
      }, t.get_ = function (a) {
        if (this.legacyMode_ && a >= this.values_.length) {
          console.warn("[mobx] Out of bounds read: " + a);
          return
        }
        return this.atom_.reportObserved(), this.dehanceValue_(this.values_[a])
      }, t.set_ = function (a, o) {
        var s = this.values_;
        if (this.legacyMode_ && a > s.length && Ee(17, a, s.length), a < s.length) {
          er(this.atom_);
          var c = s[a];
          if (g1(this)) {
            var h = y1(this, {
              type: X1,
              object: this.proxy_,
              index: a,
              newValue: o
            });
            if (!h) return;
            o = h.newValue
          }
          o = this.enhancer_(o, c);
          var f = o !== c;
          f && (s[a] = o, this.notifyArrayChildUpdate_(a, o, c))
        } else {
          for (var p = new Array(a + 1 - s.length), _ = 0; _ < p.length - 1; _++) p[_] = void 0;
          p[p.length - 1] = o, this.spliceWithArray_(s.length, 0, p)
        }
      }, e
    }();

  function WM(e, t, n, a) {
    n === void 0 && (n = "ObservableArray"), a === void 0 && (a = !1), pd();
    var o = new ru(n, t, a, !1);
    gd(o.values_, se, o);
    var s = new Proxy(o.values_, jM);
    if (o.proxy_ = s, e && e.length) {
      var c = Na(!0);
      o.spliceWithArray_(0, 0, e), Ha(c)
    }
    return s
  }
  var yo = {
    clear: function () {
      return this.splice(0)
    },
    replace: function (t) {
      var n = this[se];
      return n.spliceWithArray_(0, n.values_.length, t)
    },
    toJSON: function () {
      return this.slice()
    },
    splice: function (t, n) {
      for (var a = arguments.length, o = new Array(a > 2 ? a - 2 : 0), s = 2; s < a; s++) o[s - 2] = arguments[s];
      var c = this[se];
      switch (arguments.length) {
        case 0:
          return [];
        case 1:
          return c.spliceWithArray_(t);
        case 2:
          return c.spliceWithArray_(t, n)
      }
      return c.spliceWithArray_(t, n, o)
    },
    spliceWithArray: function (t, n, a) {
      return this[se].spliceWithArray_(t, n, a)
    },
    push: function () {
      for (var t = this[se], n = arguments.length, a = new Array(n), o = 0; o < n; o++) a[o] = arguments[o];
      return t.spliceWithArray_(t.values_.length, 0, a), t.values_.length
    },
    pop: function () {
      return this.splice(Math.max(this[se].values_.length - 1, 0), 1)[0]
    },
    shift: function () {
      return this.splice(0, 1)[0]
    },
    unshift: function () {
      for (var t = this[se], n = arguments.length, a = new Array(n), o = 0; o < n; o++) a[o] = arguments[o];
      return t.spliceWithArray_(0, 0, a), t.values_.length
    },
    reverse: function () {
      return q.trackingDerivation && Ee(37, "reverse"), this.replace(this.slice().reverse()), this
    },
    sort: function () {
      q.trackingDerivation && Ee(37, "sort");
      var t = this.slice();
      return t.sort.apply(t, arguments), this.replace(t), this
    },
    remove: function (t) {
      var n = this[se],
        a = n.dehanceValues_(n.values_).indexOf(t);
      return a > -1 ? (this.splice(a, 1), !0) : !1
    }
  };
  tt("concat", Zn);
  tt("flat", Zn);
  tt("includes", Zn);
  tt("indexOf", Zn);
  tt("join", Zn);
  tt("lastIndexOf", Zn);
  tt("slice", Zn);
  tt("toString", Zn);
  tt("toLocaleString", Zn);
  tt("every", p5);
  tt("filter", p5);
  tt("find", p5);
  tt("findIndex", p5);
  tt("flatMap", p5);
  tt("forEach", p5);
  tt("map", p5);
  tt("some", p5);
  tt("reduce", Xd);
  tt("reduceRight", Xd);

  function tt(e, t) {
    typeof Array.prototype[e] == "function" && (yo[e] = t(e))
  }

  function Zn(e) {
    return function () {
      var t = this[se];
      t.atom_.reportObserved();
      var n = t.dehanceValues_(t.values_);
      return n[e].apply(n, arguments)
    }
  }

  function p5(e) {
    return function (t, n) {
      var a = this,
        o = this[se];
      o.atom_.reportObserved();
      var s = o.dehanceValues_(o.values_);
      return s[e](function (c, h) {
        return t.call(n, c, h, a)
      })
    }
  }

  function Xd(e) {
    return function () {
      var t = this,
        n = this[se];
      n.atom_.reportObserved();
      var a = n.dehanceValues_(n.values_),
        o = arguments[0];
      return arguments[0] = function (s, c, h) {
        return o(s, c, h, t)
      }, a[e].apply(a, arguments)
    }
  }
  var KM = W5("ObservableArrayAdministration", ru);

  function Ua(e) {
    return wo(e) && KM(e[se])
  }
  var Jd, ep, QM = {},
    l5 = "add",
    _o = "delete";
  Jd = Symbol.iterator;
  ep = Symbol.toStringTag;
  var tp = function () {
    function e(n, a, o) {
      var s = this;
      a === void 0 && (a = X0), o === void 0 && (o = "ObservableMap"), this.enhancer_ = void 0, this.name_ = void 0, this[se] = QM, this.data_ = void 0, this.hasMap_ = void 0, this.keysAtom_ = void 0, this.interceptors_ = void 0, this.changeListeners_ = void 0, this.dehancer = void 0, this.enhancer_ = a, this.name_ = o, V1(Map) || Ee(18), this.keysAtom_ = bo("ObservableMap.keys()"), this.data_ = new Map, this.hasMap_ = new Map, eu(!0, function () {
        s.merge(n)
      })
    }
    var t = e.prototype;
    return t.has_ = function (a) {
      return this.data_.has(a)
    }, t.has = function (a) {
      var o = this;
      if (!q.trackingDerivation) return this.has_(a);
      var s = this.hasMap_.get(a);
      if (!s) {
        var c = s = new Q0(this.has_(a), Mo, "ObservableMap.key?", !1);
        this.hasMap_.set(a, c), qd(c, function () {
          return o.hasMap_.delete(a)
        })
      }
      return s.get()
    }, t.set = function (a, o) {
      var s = this.has_(a);
      if (g1(this)) {
        var c = y1(this, {
          type: s ? X1 : l5,
          object: this,
          newValue: o,
          name: a
        });
        if (!c) return this;
        o = c.newValue
      }
      return s ? this.updateValue_(a, o) : this.addValue_(a, o), this
    }, t.delete = function (a) {
      var o = this;
      if (er(this.keysAtom_), g1(this)) {
        var s = y1(this, {
          type: _o,
          object: this,
          name: a
        });
        if (!s) return !1
      }
      if (this.has_(a)) {
        var c = q5(),
          h = P1(this),
          f = h || c ? {
            observableKind: "map",
            debugObjectName: this.name_,
            type: _o,
            object: this,
            oldValue: this.data_.get(a).value_,
            name: a
          } : null;
        return Cn(function () {
          var p;
          o.keysAtom_.reportChanged(), (p = o.hasMap_.get(a)) == null || p.setNewValue_(!1);
          var _ = o.data_.get(a);
          _.setNewValue_(void 0), o.data_.delete(a)
        }), h && R1(this, f), !0
      }
      return !1
    }, t.updateValue_ = function (a, o) {
      var s = this.data_.get(a);
      if (o = s.prepareNewValue_(o), o !== q.UNCHANGED) {
        var c = q5(),
          h = P1(this),
          f = h || c ? {
            observableKind: "map",
            debugObjectName: this.name_,
            type: X1,
            object: this,
            oldValue: s.value_,
            name: a,
            newValue: o
          } : null;
        s.setNewValue_(o), h && R1(this, f)
      }
    }, t.addValue_ = function (a, o) {
      var s = this;
      er(this.keysAtom_), Cn(function () {
        var p, _ = new Q0(o, s.enhancer_, "ObservableMap.key", !1);
        s.data_.set(a, _), o = _.value_, (p = s.hasMap_.get(a)) == null || p.setNewValue_(!0), s.keysAtom_.reportChanged()
      });
      var c = q5(),
        h = P1(this),
        f = h || c ? {
          observableKind: "map",
          debugObjectName: this.name_,
          type: l5,
          object: this,
          name: a,
          newValue: o
        } : null;
      h && R1(this, f)
    }, t.get = function (a) {
      return this.has(a) ? this.dehanceValue_(this.data_.get(a).get()) : this.dehanceValue_(void 0)
    }, t.dehanceValue_ = function (a) {
      return this.dehancer !== void 0 ? this.dehancer(a) : a
    }, t.keys = function () {
      return this.keysAtom_.reportObserved(), this.data_.keys()
    }, t.values = function () {
      var a = this,
        o = this.keys();
      return ka({
        next: function () {
          var c = o.next(),
            h = c.done,
            f = c.value;
          return {
            done: h,
            value: h ? void 0 : a.get(f)
          }
        }
      })
    }, t.entries = function () {
      var a = this,
        o = this.keys();
      return ka({
        next: function () {
          var c = o.next(),
            h = c.done,
            f = c.value;
          return {
            done: h,
            value: h ? void 0 : [f, a.get(f)]
          }
        }
      })
    }, t[Jd] = function () {
      return this.entries()
    }, t.forEach = function (a, o) {
      for (var s = W0(this), c; !(c = s()).done;) {
        var h = c.value,
          f = h[0],
          p = h[1];
        a.call(o, p, f, this)
      }
    }, t.merge = function (a) {
      var o = this;
      return m5(a) && (a = new Map(a)), Cn(function () {
        h5(a) ? wb(a).forEach(function (s) {
          return o.set(s, a[s])
        }) : Array.isArray(a) ? a.forEach(function (s) {
          var c = s[0],
            h = s[1];
          return o.set(c, h)
        }) : nr(a) ? (a.constructor !== Map && Ee(19, a), a.forEach(function (s, c) {
          return o.set(c, s)
        })) : a != null && Ee(20, a)
      }), this
    }, t.clear = function () {
      var a = this;
      Cn(function () {
        tu(function () {
          for (var o = W0(a.keys()), s; !(s = o()).done;) {
            var c = s.value;
            a.delete(c)
          }
        })
      })
    }, t.replace = function (a) {
      var o = this;
      return Cn(function () {
        for (var s = YM(a), c = new Map, h = !1, f = W0(o.data_.keys()), p; !(p = f()).done;) {
          var _ = p.value;
          if (!s.has(_)) {
            var M = o.delete(_);
            if (M) h = !0;
            else {
              var g = o.data_.get(_);
              c.set(_, g)
            }
          }
        }
        for (var A = W0(s.entries()), x; !(x = A()).done;) {
          var k = x.value,
            U = k[0],
            E = k[1],
            y = o.data_.has(U);
          if (o.set(U, E), o.data_.has(U)) {
            var C = o.data_.get(U);
            c.set(U, C), y || (h = !0)
          }
        }
        if (!h)
          if (o.data_.size !== c.size) o.keysAtom_.reportChanged();
          else
            for (var b = o.data_.keys(), S = c.keys(), L = b.next(), V = S.next(); !L.done;) {
              if (L.value !== V.value) {
                o.keysAtom_.reportChanged();
                break
              }
              L = b.next(), V = S.next()
            }
        o.data_ = c
      }), this
    }, t.toString = function () {
      return "[object ObservableMap]"
    }, t.toJSON = function () {
      return Array.from(this)
    }, t.observe_ = function (a, o) {
      return Fa(this, a)
    }, t.intercept_ = function (a) {
      return Da(this, a)
    }, Yc(e, [{
      key: "size",
      get: function () {
        return this.keysAtom_.reportObserved(), this.data_.size
      }
    }, {
      key: ep,
      get: function () {
        return "Map"
      }
    }]), e
  }(),
    m5 = W5("ObservableMap", tp);

  function YM(e) {
    if (nr(e) || m5(e)) return e;
    if (Array.isArray(e)) return new Map(e);
    if (h5(e)) {
      var t = new Map;
      for (var n in e) t.set(n, e[n]);
      return t
    } else return Ee(21, e)
  }
  var np, rp, XM = {};
  np = Symbol.iterator;
  rp = Symbol.toStringTag;
  var ap = function () {
    function e(n, a, o) {
      a === void 0 && (a = X0), o === void 0 && (o = "ObservableSet"), this.name_ = void 0, this[se] = XM, this.data_ = new Set, this.atom_ = void 0, this.changeListeners_ = void 0, this.interceptors_ = void 0, this.dehancer = void 0, this.enhancer_ = void 0, this.name_ = o, V1(Set) || Ee(22), this.atom_ = bo(this.name_), this.enhancer_ = function (s, c) {
        return a(s, c, o)
      }, n && this.replace(n)
    }
    var t = e.prototype;
    return t.dehanceValue_ = function (a) {
      return this.dehancer !== void 0 ? this.dehancer(a) : a
    }, t.clear = function () {
      var a = this;
      Cn(function () {
        tu(function () {
          for (var o = W0(a.data_.values()), s; !(s = o()).done;) {
            var c = s.value;
            a.delete(c)
          }
        })
      })
    }, t.forEach = function (a, o) {
      for (var s = W0(this), c; !(c = s()).done;) {
        var h = c.value;
        a.call(o, h, h, this)
      }
    }, t.add = function (a) {
      var o = this;
      if (er(this.atom_), g1(this)) {
        var s = y1(this, {
          type: l5,
          object: this,
          newValue: a
        });
        if (!s) return this
      }
      if (!this.has(a)) {
        Cn(function () {
          o.data_.add(o.enhancer_(a, void 0)), o.atom_.reportChanged()
        });
        var c = !1,
          h = P1(this),
          f = h || c ? {
            observableKind: "set",
            debugObjectName: this.name_,
            type: l5,
            object: this,
            newValue: a
          } : null;
        h && R1(this, f)
      }
      return this
    }, t.delete = function (a) {
      var o = this;
      if (g1(this)) {
        var s = y1(this, {
          type: _o,
          object: this,
          oldValue: a
        });
        if (!s) return !1
      }
      if (this.has(a)) {
        var c = !1,
          h = P1(this),
          f = h || c ? {
            observableKind: "set",
            debugObjectName: this.name_,
            type: _o,
            object: this,
            oldValue: a
          } : null;
        return Cn(function () {
          o.atom_.reportChanged(), o.data_.delete(a)
        }), h && R1(this, f), !0
      }
      return !1
    }, t.has = function (a) {
      return this.atom_.reportObserved(), this.data_.has(this.dehanceValue_(a))
    }, t.entries = function () {
      var a = 0,
        o = Array.from(this.keys()),
        s = Array.from(this.values());
      return ka({
        next: function () {
          var h = a;
          return a += 1, h < s.length ? {
            value: [o[h], s[h]],
            done: !1
          } : {
            done: !0
          }
        }
      })
    }, t.keys = function () {
      return this.values()
    }, t.values = function () {
      this.atom_.reportObserved();
      var a = this,
        o = 0,
        s = Array.from(this.data_.values());
      return ka({
        next: function () {
          return o < s.length ? {
            value: a.dehanceValue_(s[o++]),
            done: !1
          } : {
            done: !0
          }
        }
      })
    }, t.replace = function (a) {
      var o = this;
      return ar(a) && (a = new Set(a)), Cn(function () {
        Array.isArray(a) ? (o.clear(), a.forEach(function (s) {
          return o.add(s)
        })) : La(a) ? (o.clear(), a.forEach(function (s) {
          return o.add(s)
        })) : a != null && Ee("Cannot initialize set from " + a)
      }), this
    }, t.observe_ = function (a, o) {
      return Fa(this, a)
    }, t.intercept_ = function (a) {
      return Da(this, a)
    }, t.toJSON = function () {
      return Array.from(this)
    }, t.toString = function () {
      return "[object ObservableSet]"
    }, t[np] = function () {
      return this.values()
    }, Yc(e, [{
      key: "size",
      get: function () {
        return this.atom_.reportObserved(), this.data_.size
      }
    }, {
      key: rp,
      get: function () {
        return "Set"
      }
    }]), e
  }(),
    ar = W5("ObservableSet", ap),
    id = Object.create(null),
    od = "remove",
    ip = function () {
      function e(n, a, o, s) {
        a === void 0 && (a = new Map), s === void 0 && (s = Kb), this.target_ = void 0, this.values_ = void 0, this.name_ = void 0, this.defaultAnnotation_ = void 0, this.keysAtom_ = void 0, this.changeListeners_ = void 0, this.interceptors_ = void 0, this.proxy_ = void 0, this.isPlainObject_ = void 0, this.appliedAnnotations_ = void 0, this.pendingKeys_ = void 0, this.target_ = n, this.values_ = a, this.name_ = o, this.defaultAnnotation_ = s, this.keysAtom_ = new Ra("ObservableObject.keys"), this.isPlainObject_ = h5(this.target_)
      }
      var t = e.prototype;
      return t.getObservablePropValue_ = function (a) {
        return this.values_.get(a).get()
      }, t.setObservablePropValue_ = function (a, o) {
        var s = this.values_.get(a);
        if (s instanceof Ia) return s.set(o), !0;
        if (g1(this)) {
          var c = y1(this, {
            type: X1,
            object: this.proxy_ || this.target_,
            name: a,
            newValue: o
          });
          if (!c) return null;
          o = c.newValue
        }
        if (o = s.prepareNewValue_(o), o !== q.UNCHANGED) {
          var h = P1(this),
            f = !1,
            p = h || f ? {
              type: X1,
              observableKind: "object",
              debugObjectName: this.name_,
              object: this.proxy_ || this.target_,
              oldValue: s.value_,
              name: a,
              newValue: o
            } : null;
          s.setNewValue_(o), h && R1(this, p)
        }
        return !0
      }, t.get_ = function (a) {
        return q.trackingDerivation && !bn(this.target_, a) && this.has_(a), this.target_[a]
      }, t.set_ = function (a, o, s) {
        return s === void 0 && (s = !1), bn(this.target_, a) ? this.values_.has(a) ? this.setObservablePropValue_(a, o) : s ? Reflect.set(this.target_, a, o) : (this.target_[a] = o, !0) : this.extend_(a, {
          value: o,
          enumerable: !0,
          writable: !0,
          configurable: !0
        }, this.defaultAnnotation_, s)
      }, t.has_ = function (a) {
        if (!q.trackingDerivation) return a in this.target_;
        this.pendingKeys_ || (this.pendingKeys_ = new Map);
        var o = this.pendingKeys_.get(a);
        return o || (o = new Q0(a in this.target_, Mo, "ObservableObject.key?", !1), this.pendingKeys_.set(a, o)), o.get()
      }, t.make_ = function (a, o) {
        if (o === !0 && (o = this.defaultAnnotation_), o !== !1) {
          if (cd(this, o, a), !(a in this.target_)) {
            var s;
            if ((s = this.target_[K1]) != null && s[a]) return;
            Ee(1, o.annotationType_, this.name_ + "." + a.toString())
          }
          for (var c = this.target_; c && c !== Eo;) {
            var h = ho(c, a);
            if (h) {
              var f = o.make_(this, a, h, c);
              if (f === 0) return;
              if (f === 1) break
            }
            c = Object.getPrototypeOf(c)
          }
          ld(this, o, a)
        }
      }, t.extend_ = function (a, o, s, c) {
        if (c === void 0 && (c = !1), s === !0 && (s = this.defaultAnnotation_), s === !1) return this.defineProperty_(a, o, c);
        cd(this, s, a);
        var h = s.extend_(this, a, o, c);
        return h && ld(this, s, a), h
      }, t.defineProperty_ = function (a, o, s) {
        s === void 0 && (s = !1);
        try {
          Qt();
          var c = this.delete_(a);
          if (!c) return c;
          if (g1(this)) {
            var h = y1(this, {
              object: this.proxy_ || this.target_,
              name: a,
              type: l5,
              newValue: o.value
            });
            if (!h) return null;
            var f = h.newValue;
            o.value !== f && (o = Y0({}, o, {
              value: f
            }))
          }
          if (s) {
            if (!Reflect.defineProperty(this.target_, a, o)) return !1
          } else Q1(this.target_, a, o);
          this.notifyPropertyAddition_(a, o.value)
        } finally {
          Yt()
        }
        return !0
      }, t.defineObservableProperty_ = function (a, o, s, c) {
        c === void 0 && (c = !1);
        try {
          Qt();
          var h = this.delete_(a);
          if (!h) return h;
          if (g1(this)) {
            var f = y1(this, {
              object: this.proxy_ || this.target_,
              name: a,
              type: l5,
              newValue: o
            });
            if (!f) return null;
            o = f.newValue
          }
          var p = sd(a),
            _ = {
              configurable: q.safeDescriptors ? this.isPlainObject_ : !0,
              enumerable: !0,
              get: p.get,
              set: p.set
            };
          if (c) {
            if (!Reflect.defineProperty(this.target_, a, _)) return !1
          } else Q1(this.target_, a, _);
          var M = new Q0(o, s, "ObservableObject.key", !1);
          this.values_.set(a, M), this.notifyPropertyAddition_(a, M.value_)
        } finally {
          Yt()
        }
        return !0
      }, t.defineComputedProperty_ = function (a, o, s) {
        s === void 0 && (s = !1);
        try {
          Qt();
          var c = this.delete_(a);
          if (!c) return c;
          if (g1(this)) {
            var h = y1(this, {
              object: this.proxy_ || this.target_,
              name: a,
              type: l5,
              newValue: void 0
            });
            if (!h) return null
          }
          o.name || (o.name = "ObservableObject.key"), o.context = this.proxy_ || this.target_;
          var f = sd(a),
            p = {
              configurable: q.safeDescriptors ? this.isPlainObject_ : !0,
              enumerable: !1,
              get: f.get,
              set: f.set
            };
          if (s) {
            if (!Reflect.defineProperty(this.target_, a, p)) return !1
          } else Q1(this.target_, a, p);
          this.values_.set(a, new Ia(o)), this.notifyPropertyAddition_(a, void 0)
        } finally {
          Yt()
        }
        return !0
      }, t.delete_ = function (a, o) {
        if (o === void 0 && (o = !1), !bn(this.target_, a)) return !0;
        if (g1(this)) {
          var s = y1(this, {
            object: this.proxy_ || this.target_,
            name: a,
            type: od
          });
          if (!s) return null
        }
        try {
          var c, h;
          Qt();
          var f = P1(this),
            p = !1,
            _ = this.values_.get(a),
            M = void 0;
          if (!_ && (f || p)) {
            var g;
            M = (g = ho(this.target_, a)) == null ? void 0 : g.value
          }
          if (o) {
            if (!Reflect.deleteProperty(this.target_, a)) return !1
          } else delete this.target_[a];
          if (_ && (this.values_.delete(a), _ instanceof Q0 && (M = _.value_), Dd(_)), this.keysAtom_.reportChanged(), (c = this.pendingKeys_) == null || (h = c.get(a)) == null || h.set(a in this.target_), f || p) {
            var A = {
              type: od,
              observableKind: "object",
              object: this.proxy_ || this.target_,
              debugObjectName: this.name_,
              oldValue: M,
              name: a
            };
            f && R1(this, A)
          }
        } finally {
          Yt()
        }
        return !0
      }, t.observe_ = function (a, o) {
        return Fa(this, a)
      }, t.intercept_ = function (a) {
        return Da(this, a)
      }, t.notifyPropertyAddition_ = function (a, o) {
        var s, c, h = P1(this),
          f = !1;
        if (h || f) {
          var p = h || f ? {
            type: l5,
            observableKind: "object",
            debugObjectName: this.name_,
            object: this.proxy_ || this.target_,
            name: a,
            newValue: o
          } : null;
          h && R1(this, p)
        } (s = this.pendingKeys_) == null || (c = s.get(a)) == null || c.set(!0), this.keysAtom_.reportChanged()
      }, t.ownKeys_ = function () {
        return this.keysAtom_.reportObserved(), Co(this.target_)
      }, t.keys_ = function () {
        return this.keysAtom_.reportObserved(), Object.keys(this.target_)
      }, e
    }();

  function Oo(e, t) {
    var n;
    if (bn(e, se)) return e;
    var a = (n = t?.name) != null ? n : "ObservableObject",
      o = new ip(e, new Map, String(a), iM(t));
    return Ao(e, se, o), e
  }
  var JM = W5("ObservableObjectAdministration", ip);

  function sd(e) {
    return id[e] || (id[e] = {
      get: function () {
        return this[se].getObservablePropValue_(e)
      },
      set: function (n) {
        return this[se].setObservablePropValue_(e, n)
      }
    })
  }

  function tr(e) {
    return wo(e) ? JM(e[se]) : !1
  }

  function ld(e, t, n) {
    var a;
    (a = e.target_[K1]) == null || delete a[n]
  }

  function cd(e, t, n) {
    if (!1) var a, o, s
  }
  var eZ = sp(0),
    Bc = 0,
    op = function () { };

  function tZ(e, t) {
    Object.setPrototypeOf ? Object.setPrototypeOf(e.prototype, t) : e.prototype.__proto__ !== void 0 ? e.prototype.__proto__ = t : e.prototype = t
  }
  tZ(op, Array.prototype);
  var au = function (e, t, n) {
    Ed(a, e);

    function a(s, c, h, f) {
      var p;
      h === void 0 && (h = "ObservableArray"), f === void 0 && (f = !1), p = e.call(this) || this;
      var _ = new ru(h, c, f, !0);
      if (_.proxy_ = Uc(p), gd(Uc(p), se, _), s && s.length) {
        var M = Na(!0);
        p.spliceWithArray(0, 0, s), Ha(M)
      }
      return Object.defineProperty(Uc(p), "0", eZ), p
    }
    var o = a.prototype;
    return o.concat = function () {
      this[se].atom_.reportObserved();
      for (var c = arguments.length, h = new Array(c), f = 0; f < c; f++) h[f] = arguments[f];
      return Array.prototype.concat.apply(this.slice(), h.map(function (p) {
        return Ua(p) ? p.slice() : p
      }))
    }, o[n] = function () {
      var s = this,
        c = 0;
      return ka({
        next: function () {
          return c < s.length ? {
            value: s[c++],
            done: !1
          } : {
            done: !0,
            value: void 0
          }
        }
      })
    }, Yc(a, [{
      key: "length",
      get: function () {
        return this[se].getArrayLength_()
      },
      set: function (c) {
        this[se].setArrayLength_(c)
      }
    }, {
      key: t,
      get: function () {
        return "Array"
      }
    }]), a
  }(op, Symbol.toStringTag, Symbol.iterator);
  Object.entries(yo).forEach(function (e) {
    var t = e[0],
      n = e[1];
    t !== "concat" && Ao(au.prototype, t, n)
  });

  function sp(e) {
    return {
      enumerable: !1,
      configurable: !0,
      get: function () {
        return this[se].get_(e)
      },
      set: function (n) {
        this[se].set_(e, n)
      }
    }
  }

  function nZ(e) {
    Q1(au.prototype, "" + e, sp(e))
  }

  function lp(e) {
    if (e > Bc) {
      for (var t = Bc; t < e + 100; t++) nZ(t);
      Bc = e
    }
  }
  lp(1e3);

  function rZ(e, t, n) {
    return new au(e, t, n)
  }

  function d5(e, t) {
    if (typeof e == "object" && e !== null) {
      if (Ua(e)) return t !== void 0 && Ee(23), e[se].atom_;
      if (ar(e)) return e.atom_;
      if (m5(e)) {
        if (t === void 0) return e.keysAtom_;
        var n = e.data_.get(t) || e.hasMap_.get(t);
        return n || Ee(25, t, Wc(e)), n
      }
      if (tr(e)) {
        if (!t) return Ee(26);
        var a = e[se].values_.get(t);
        return a || Ee(27, t, Wc(e)), a
      }
      if (Xc(e) || xo(e) || vo(e)) return e
    } else if (V1(e) && vo(e[se])) return e[se];
    Ee(28)
  }

  function cp(e, t) {
    if (e || Ee(29), t !== void 0) return cp(d5(e, t));
    if (Xc(e) || xo(e) || vo(e) || m5(e) || ar(e)) return e;
    if (e[se]) return e[se];
    Ee(24, e)
  }

  function Wc(e, t) {
    var n;
    if (t !== void 0) n = d5(e, t);
    else {
      if (nu(e)) return e.name;
      tr(e) || m5(e) || ar(e) ? n = cp(e) : n = d5(e)
    }
    return n.name_
  }
  var ud = Eo.toString;

  function iu(e, t, n) {
    return n === void 0 && (n = -1), Kc(e, t, n)
  }

  function Kc(e, t, n, a, o) {
    if (e === t) return e !== 0 || 1 / e === 1 / t;
    if (e == null || t == null) return !1;
    if (e !== e) return t !== t;
    var s = typeof e;
    if (s !== "function" && s !== "object" && typeof t != "object") return !1;
    var c = ud.call(e);
    if (c !== ud.call(t)) return !1;
    switch (c) {
      case "[object RegExp]":
      case "[object String]":
        return "" + e == "" + t;
      case "[object Number]":
        return +e != +e ? +t != +t : +e == 0 ? 1 / +e === 1 / t : +e == +t;
      case "[object Date]":
      case "[object Boolean]":
        return +e == +t;
      case "[object Symbol]":
        return typeof Symbol < "u" && Symbol.valueOf.call(e) === Symbol.valueOf.call(t);
      case "[object Map]":
      case "[object Set]":
        n >= 0 && n++;
        break
    }
    e = hd(e), t = hd(t);
    var h = c === "[object Array]";
    if (!h) {
      if (typeof e != "object" || typeof t != "object") return !1;
      var f = e.constructor,
        p = t.constructor;
      if (f !== p && !(V1(f) && f instanceof f && V1(p) && p instanceof p) && "constructor" in e && "constructor" in t) return !1
    }
    if (n === 0) return !1;
    n < 0 && (n = -1), a = a || [], o = o || [];
    for (var _ = a.length; _--;)
      if (a[_] === e) return o[_] === t;
    if (a.push(e), o.push(t), h) {
      if (_ = e.length, _ !== t.length) return !1;
      for (; _--;)
        if (!Kc(e[_], t[_], n - 1, a, o)) return !1
    } else {
      var M = Object.keys(e),
        g;
      if (_ = M.length, Object.keys(t).length !== _) return !1;
      for (; _--;)
        if (g = M[_], !(bn(t, g) && Kc(e[g], t[g], n - 1, a, o))) return !1
    }
    return a.pop(), o.pop(), !0
  }

  function hd(e) {
    return Ua(e) ? e.slice() : nr(e) || m5(e) || La(e) || ar(e) ? Array.from(e.entries()) : e
  }

  function ka(e) {
    return e[Symbol.iterator] = aZ, e
  }

  function aZ() {
    return this
  } ["Symbol", "Map", "Set"].forEach(function (e) {
    var t = Qc();
    typeof t[e] > "u" && Ee("MobX requires global '" + e + "' to be available or polyfilled")
  });
  typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ == "object" && __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
    spy: CM,
    extras: {
      getDebugName: Wc
    },
    $mobx: se
  });
  var zx = O(P());
  var Xt = O(c1());
  var Tx = O(P());
  var AS = O(P());
  var up = O(c1());
  if (!up.useState) throw new Error("mobx-react-lite requires React with Hooks support");
  if (!To) throw new Error("mobx-react-lite@3 requires mobx at least version 6 to be available");
  var bS = O(P()),
    ou = O(Dc());
  var SS = O(P());

  function oZ(e) {
    e()
  }

  function ko(e) {
    e || (e = oZ), Io({
      reactionScheduler: e
    })
  }
  var IS = O(P());
  var nx = O(P());
  var ir = O(c1());
  var kS = O(P());

  function hp(e) {
    return Wd(e)
  }
  var WS = O(P());
  var PS = O(P()),
    su = typeof FinalizationRegistry > "u" ? void 0 : FinalizationRegistry;
  var DS = O(P());
  var VS = O(P());

  function Lo(e) {
    var t = {
      reaction: e,
      mounted: !1,
      changedBeforeMount: !1,
      cleanAt: Date.now() + sZ
    };
    return t
  }
  var sZ = 1e4,
    fp = 1e4;

  function dp(e) {
    var t = new Map,
      n = 1,
      a = new e(function (s) {
        var c = t.get(s);
        c && (c.reaction.dispose(), t.delete(s))
      });
    return {
      addReactionToTrack: function (o, s, c) {
        var h = n++;
        return a.register(c, h, o), o.current = Lo(s), o.current.finalizationRegistryCleanupToken = h, t.set(h, o.current), o.current
      },
      recordReactionAsCommitted: function (o) {
        a.unregister(o), o.current && o.current.finalizationRegistryCleanupToken && t.delete(o.current.finalizationRegistryCleanupToken)
      },
      forceCleanupTimerToRunNowForTests: function () { },
      resetCleanupScheduleForTests: function () { }
    }
  }
  var BS = O(P());
  var lZ = function (e) {
    var t = typeof Symbol == "function" && Symbol.iterator,
      n = t && e[t],
      a = 0;
    if (n) return n.call(e);
    if (e && typeof e.length == "number") return {
      next: function () {
        return e && a >= e.length && (e = void 0), {
          value: e && e[a++],
          done: !e
        }
      }
    };
    throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
  };

  function pp() {
    var e = new Set,
      t;

    function n() {
      t && (clearTimeout(t), h())
    }

    function a() {
      var f, p;
      if (e.size > 0) {
        try {
          for (var _ = lZ(e), M = _.next(); !M.done; M = _.next()) {
            var g = M.value,
              A = g.current;
            A && (A.reaction.dispose(), g.current = null)
          }
        } catch (x) {
          f = {
            error: x
          }
        } finally {
          try {
            M && !M.done && (p = _.return) && p.call(_)
          } finally {
            if (f) throw f.error
          }
        }
        e.clear()
      }
      t && (clearTimeout(t), t = void 0)
    }

    function o() {
      t === void 0 && (t = setTimeout(h, fp))
    }

    function s(f) {
      e.add(f), o()
    }

    function c(f) {
      e.delete(f)
    }

    function h() {
      t = void 0;
      var f = Date.now();
      e.forEach(function (p) {
        var _ = p.current;
        _ && f >= _.cleanAt && (_.reaction.dispose(), p.current = null, e.delete(p))
      }), e.size > 0 && o()
    }
    return {
      addReactionToTrack: function (f, p, _) {
        return f.current = Lo(p), s(f), f.current
      },
      recordReactionAsCommitted: c,
      forceCleanupTimerToRunNowForTests: n,
      resetCleanupScheduleForTests: a
    }
  }
  var Po = su ? dp(su) : pp(),
    mp = Po.addReactionToTrack,
    vp = Po.recordReactionAsCommitted,
    cZ = Po.resetCleanupScheduleForTests,
    qS = Po.forceCleanupTimerToRunNowForTests;
  var QS = O(P()),
    uZ = !1;

  function J1() {
    return uZ
  }
  var gp = function (e, t) {
    var n = typeof Symbol == "function" && e[Symbol.iterator];
    if (!n) return e;
    var a = n.call(e),
      o, s = [],
      c;
    try {
      for (;
        (t === void 0 || t-- > 0) && !(o = a.next()).done;) s.push(o.value)
    } catch (h) {
      c = {
        error: h
      }
    } finally {
      try {
        o && !o.done && (n = a.return) && n.call(a)
      } finally {
        if (c) throw c.error
      }
    }
    return s
  };

  function yp(e) {
    return "observer".concat(e)
  }
  var hZ = function () {
    function e() { }
    return e
  }();

  function fZ() {
    return new hZ
  }

  function Ba(e, t) {
    if (t === void 0 && (t = "observed"), J1()) return e();
    var n = gp(ir.default.useState(fZ), 1),
      a = n[0],
      o = gp(ir.default.useState(), 2),
      s = o[1],
      c = function () {
        return s([])
      },
      h = ir.default.useRef(null);
    if (!h.current) var f = new f5(yp(t), function () {
      p.mounted ? c() : p.changedBeforeMount = !0
    }),
      p = mp(h, f, a);
    var _ = h.current.reaction;
    ir.default.useDebugValue(_, hp), ir.default.useEffect(function () {
      return vp(h), h.current ? (h.current.mounted = !0, h.current.changedBeforeMount && (h.current.changedBeforeMount = !1, c())) : (h.current = {
        reaction: new f5(yp(t), function () {
          c()
        }),
        mounted: !0,
        changedBeforeMount: !1,
        cleanAt: 1 / 0
      }, c()),
        function () {
          h.current.reaction.dispose(), h.current = null
        }
    }, []);
    var M, g;
    if (_.track(function () {
      try {
        M = e()
      } catch (A) {
        g = A
      }
    }), g) throw g;
    return M
  }
  var ox = O(P()),
    v5 = O(c1());
  var wp = typeof Symbol == "function" && Symbol.for,
    _p = wp ? Symbol.for("react.forward_ref") : typeof v5.forwardRef == "function" && (0, v5.forwardRef)(function (e) {
      return null
    }).$$typeof,
    Ep = wp ? Symbol.for("react.memo") : typeof v5.memo == "function" && (0, v5.memo)(function (e) {
      return null
    }).$$typeof;

  function lu(e, t) {
    var n;
    if (Ep && e.$$typeof === Ep) throw new Error("[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.");
    if (J1()) return e;
    var a = (n = t?.forwardRef) !== null && n !== void 0 ? n : !1,
      o = e,
      s = e.displayName || e.name;
    if (_p && e.$$typeof === _p && (a = !0, o = e.render, typeof o != "function")) throw new Error("[mobx-react-lite] `render` property of ForwardRef was not a function");
    var c = function (h, f) {
      return Ba(function () {
        return o(h, f)
      }, s)
    };
    return s !== "" && (c.displayName = s), e.contextTypes && (c.contextTypes = e.contextTypes), a && (c = (0, v5.forwardRef)(c)), c = (0, v5.memo)(c), pZ(e, c), c
  }
  var dZ = {
    $$typeof: !0,
    render: !0,
    compare: !0,
    type: !0,
    displayName: !0
  };

  function pZ(e, t) {
    Object.keys(e).forEach(function (n) {
      dZ[n] || Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n))
    })
  }
  var cx = O(P());

  function cu(e) {
    var t = e.children,
      n = e.render,
      a = t || n;
    return typeof a != "function" ? null : Ba(a)
  }
  cu.displayName = "Observer";
  var hx = O(P());
  var mZ = O(c1());
  var Ex = O(P());
  var gZ = O(c1());
  var mx = O(P());
  var vZ = O(c1());
  ko(ou.unstable_batchedUpdates);
  var bp = 0;

  function EZ(e) {
    if (typeof Symbol == "function") return Symbol(e);
    var t = "__$mobx-react " + e + " (" + bp + ")";
    return bp++, t
  }
  var uu = {};

  function g5(e) {
    return uu[e] || (uu[e] = EZ(e)), uu[e]
  }

  function Lp(e, t) {
    if (Mp(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e),
      a = Object.keys(t);
    if (n.length !== a.length) return !1;
    for (var o = 0; o < n.length; o++)
      if (!Object.hasOwnProperty.call(t, n[o]) || !Mp(e[n[o]], t[n[o]])) return !1;
    return !0
  }

  function Mp(e, t) {
    return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t
  }

  function Sn(e, t, n) {
    Object.hasOwnProperty.call(e, t) ? e[t] = n : Object.defineProperty(e, t, {
      enumerable: !1,
      configurable: !0,
      writable: !0,
      value: n
    })
  }
  var Zp = g5("patchMixins"),
    Pp = g5("patchedDefinition");

  function wZ(e, t) {
    var n = e[Zp] = e[Zp] || {},
      a = n[t] = n[t] || {};
    return a.locks = a.locks || 0, a.methods = a.methods || [], a
  }

  function Sp(e, t) {
    for (var n = this, a = arguments.length, o = new Array(a > 2 ? a - 2 : 0), s = 2; s < a; s++) o[s - 2] = arguments[s];
    t.locks++;
    try {
      var c;
      return e != null && (c = e.apply(this, o)), c
    } finally {
      t.locks--, t.locks === 0 && t.methods.forEach(function (h) {
        h.apply(n, o)
      })
    }
  }

  function xp(e, t) {
    var n = function () {
      for (var o = arguments.length, s = new Array(o), c = 0; c < o; c++) s[c] = arguments[c];
      Sp.call.apply(Sp, [this, e, t].concat(s))
    };
    return n
  }

  function Ip(e, t, n) {
    var a = wZ(e, t);
    a.methods.indexOf(n) < 0 && a.methods.push(n);
    var o = Object.getOwnPropertyDescriptor(e, t);
    if (!(o && o[Pp])) {
      var s = e[t],
        c = Rp(e, t, o ? o.enumerable : void 0, a, s);
      Object.defineProperty(e, t, c)
    }
  }

  function Rp(e, t, n, a, o) {
    var s, c = xp(o, a);
    return s = {}, s[Pp] = !0, s.get = function () {
      return c
    }, s.set = function (f) {
      if (this === e) c = xp(f, a);
      else {
        var p = Rp(this, t, n, a, f);
        Object.defineProperty(this, t, p)
      }
    }, s.configurable = !0, s.enumerable = n, s
  }
  var or = se || "$mobx",
    Tp = g5("isMobXReactObserver"),
    fu = g5("isUnmounted"),
    No = g5("skipRender"),
    Ro = g5("isForcingUpdate");

  function AZ(e) {
    var t = e.prototype;
    if (e[Tp]) {
      var n = Vo(t);
      console.warn("The provided component class (" + n + `)
                has already been declared as an observer component.`)
    } else e[Tp] = !0;
    if (t.componentWillReact) throw new Error("The componentWillReact life-cycle event is no longer supported");
    if (e.__proto__ !== Xt.PureComponent) {
      if (!t.shouldComponentUpdate) t.shouldComponentUpdate = Op;
      else if (t.shouldComponentUpdate !== Op) throw new Error("It is not allowed to use shouldComponentUpdate in observer based components.")
    }
    hu(t, "props"), hu(t, "state"), e.contextType && hu(t, "context");
    var a = t.render;
    if (typeof a != "function") {
      var o = Vo(t);
      throw new Error("[mobx-react] class component (" + o + ") is missing `render` method.\n`observer` requires `render` being a function defined on prototype.\n`render = () => {}` or `render = function() {}` is not supported.")
    }
    return t.render = function () {
      return this.render = J1() ? a : CZ.call(this, a), this.render()
    }, Ip(t, "componentDidMount", function () {
      this[fu] = !1, this.render[or] || Xt.Component.prototype.forceUpdate.call(this)
    }), Ip(t, "componentWillUnmount", function () {
      if (!J1()) {
        var s = this.render[or];
        if (s) s.dispose(), this.render[or] = null;
        else {
          var c = Vo(this);
          console.warn("The reactive render of an observer class component (" + c + `)
                was overridden after MobX attached. This may result in a memory leak if the
                overridden reactive render was not properly disposed.`)
        }
        this[fu] = !0
      }
    }), e
  }

  function Vo(e) {
    return e.displayName || e.name || e.constructor && (e.constructor.displayName || e.constructor.name) || "<component>"
  }

  function CZ(e) {
    var t = this;
    Sn(this, No, !1), Sn(this, Ro, !1);
    var n = Vo(this),
      a = e.bind(this),
      o = !1,
      s = function () {
        var f = new f5(n + ".render()", function () {
          if (!o && (o = !0, t[fu] !== !0)) {
            var p = !0;
            try {
              Sn(t, Ro, !0), t[No] || Xt.Component.prototype.forceUpdate.call(t), p = !1
            } finally {
              Sn(t, Ro, !1), p && (f.dispose(), t.render[or] = null)
            }
          }
        });
        return f.reactComponent = t, f
      };

    function c() {
      var h;
      o = !1;
      var f = (h = c[or]) != null ? h : c[or] = s(),
        p = void 0,
        _ = void 0;
      if (f.track(function () {
        try {
          _ = eu(!1, a)
        } catch (M) {
          p = M
        }
      }), p) throw p;
      return _
    }
    return c
  }

  function Op(e, t) {
    return J1() && console.warn("[mobx-react] It seems that a re-rendering of a React component is triggered while in static (server-side) mode. Please make sure components are rendered only once server-side."), this.state !== t ? !0 : !Lp(this.props, e)
  }

  function hu(e, t) {
    var n = g5("reactProp_" + t + "_valueHolder"),
      a = g5("reactProp_" + t + "_atomHolder");

    function o() {
      return this[a] || Sn(this, a, bo("reactive " + t)), this[a]
    }
    Object.defineProperty(e, t, {
      configurable: !0,
      enumerable: !0,
      get: function () {
        var c = !1;
        return K5 && Mn && (c = K5(!0)), o.call(this).reportObserved(), K5 && Mn && Mn(c), this[n]
      },
      set: function (c) {
        !this[Ro] && !Lp(this[n], c) ? (Sn(this, n, c), Sn(this, No, !0), o.call(this).reportChanged(), Sn(this, No, !1)) : Sn(this, n, c)
      }
    })
  }

  function Ho(e) {
    return e.isMobxInjector === !0 && console.warn("Mobx observer: You are trying to use `observer` on a component that already has `inject`. Please apply `observer` before applying `inject`"), Object.prototype.isPrototypeOf.call(Xt.Component, e) || Object.prototype.isPrototypeOf.call(Xt.PureComponent, e) ? AZ(e) : lu(e)
  }

  function du() {
    return du = Object.assign || function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
      }
      return e
    }, du.apply(this, arguments)
  }

  function bZ(e, t) {
    if (e == null) return {};
    var n = {},
      a = Object.keys(e),
      o, s;
    for (s = 0; s < a.length; s++) o = a[s], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
    return n
  }
  var MZ = ["children"],
    kp = Xt.default.createContext({});

  function ZZ(e) {
    var t = e.children,
      n = bZ(e, MZ),
      a = Xt.default.useContext(kp),
      o = Xt.default.useRef(du({}, a, n)),
      s = o.current;
    if (!1) var c;
    return Xt.default.createElement(kp.Provider, {
      value: s
    }, t)
  }
  ZZ.displayName = "MobXProvider";
  if (!Xt.Component) throw new Error("mobx-react requires React to be available");
  if (!ze) throw new Error("mobx-react requires mobx to be available");
  var xn = O(c1(), 1);
  var Dp = O(Q5(), 1);
  Io({
    enforceActions: "never"
  });

  function LZ() {
    let [e, t] = (0, xn.useState)(0);
    return () => t(n => n + 1)
  }
  var Ga = class {
    _forceUpdateVersion = 1;
    _viewName = null;
    get viewName() {
      if (this._viewName === null) throw new Error("called before view bound");
      return this._viewName
    }
    set viewName(t) {
      if (this._viewName !== null) throw new Error("view name should only change once");
      this._viewName = t
    }
    constructor() { }
    onBeforeMount() { }
    onViewCreate() { }
    onViewDestroy() { }
    onPropsChange(t, n) { }
    forceUpdate() {
      this._forceUpdateVersion += 1
    }
    nextTick(t) {
      requestAnimationFrame(() => {
        t()
      })
    }
  };
  Vr([ze], Ga.prototype, "_forceUpdateVersion", 2);
  var Fo = class {
    static createComponent(t, n, a) {
      let o = Ho(s => {
        let c = (0, xn.useMemo)(() => {
          let p = new n;
          return p.viewName = t, To(p), p
        }, []),
          h = c.props;
        c.props = s, c.onPropsChange(s, h);
        let f = c._forceUpdateVersion;
        return (0, xn.useState)(() => (c.onBeforeMount(), null)), (0, xn.useLayoutEffect)(() => () => {
          c.onViewDestroy()
        }, [c]), (0, xn.useEffect)(() => {
          c.onViewCreate()
        }, [c]), a(c)
      });
      return o.displayName = t, o
    }
    static createModeledComponent(t, n) {
      let a = Ho(({
        model: o
      }) => {
        let s = Ho(() => {
          let c = LZ();
          return o.bindUpdater(c), n(o)
        });
        return (0, Dp.jsx)(s, {})
      });
      return a.displayName = t, a
    }
  },
    pu = ze;
  var ZI = O(P(), 1);
  var rI = O(P(), 1);
  var PZ = {
    English: "English",
    ["Simplified Chinese"]: "\u7B80\u4F53\u4E2D\u6587",
    ["Traditional Chinese"]: "\u7E41\u9AD4\u4E2D\u6587",
    Japanese: "\u65E5\u672C\u8A9E",
    Spanish: "Espa\xF1ol",
    French: "Fran\xE7ais",
    German: "Deutsch",
    Russian: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439",
    Portuguese: "Portugu\xEAs",
    Italian: "Italiano",
    Korean: "\uD55C\uAD6D\uC5B4",
    Turkish: "T\xFCrk\xE7e",
    Dutch: "Nederlands",
    Arabic: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629",
    Thai: "\u0E20\u0E32\u0E29\u0E32\u0E44\u0E17\u0E22",
    Swedish: "Svenska",
    Danish: "Dansk",
    Vietnamese: "Ti\u1EBFng Vi\u1EC7t",
    Norwegian: "Norsk",
    Polish: "Polski",
    Finnish: "Suomi",
    Indonesian: "Bahasa Indonesia",
    Hebrew: "\u05E2\u05D1\u05E8\u05D9\u05EA",
    Greek: "\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC",
    Romanian: "Rom\xE2n\u0103",
    Hungarian: "Magyar",
    Czech: "\u010Ce\u0161tina",
    Catalan: "Catal\xE0",
    Slovak: "Sloven\u010Dina",
    Ukrainian: "\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430",
    Croatian: "Hrvatski",
    Malay: "Bahasa Melayu",
    Hindi: "\u0939\u093F\u0928\u094D\u0926\u0940"
  },
    tI = {
      auto: "Auto",
      ...PZ
    };
  var mu = {
    ["chat_model"]: "gpt-3.5-turbo",
    ["text_model"]: "text-davinci-003"
  };
  var Fp = `You are a large language model trained by OpenAI that generate human-like text based on the input you received.
Here is a conversation between human A and you:

`,
    Up = `You are a large language model trained by OpenAI. Your job is to generate human-like text based on the input you received, allowing it to engage in natural-sounding conversations and provide responses that are coherent and relevant to the topic at hand.

If the input is a question, try your best to answer it. Otherwise, provide as much information as you can.
You should use "code blocks" syntax from markdown including programing language name to encapsulate any part in responses that's longer-format content such as poem, code, lyrics.
Provide programming language name in code blocks if possible.
You should also use bold syntax from markdown on the relevant parts of the responses to improve readability.
If your answer contains code, make sure to provide detailed explanations.
You can understand and communicate fluently in the user's language of choice such as English,\u4E2D\u6587,\u65E5\u672C\u543E,Espanol,Francais or Deutsch.

Here is a conversation between human A and you:

`,
    Bp = `You are a large language model trained by OpenAI. Answer as concisely as possible.
Knowledge cutoff: {knowledge_cutoff} Current date: {current_date}`,
    Gp = `You are a large language model trained by OpenAI. Your job is to generate human-like text based on the input you received, allowing it to engage in natural-sounding conversations and provide responses that are coherent and relevant to the topic at hand.

If the input is a question, try your best to answer it. Otherwise, provide as much information as you can.
You should use "code blocks" syntax from markdown including programing language name to encapsulate any part in responses that's longer-format content such as poem, code, lyrics.
Provide programming language name in code blocks if possible.
You should also use bold syntax from markdown on the relevant parts of the responses to improve readability.
If your answer contains code, make sure to provide detailed explanations.

Knowledge cutoff: {knowledge_cutoff} Current date: {current_date}`;
  var zp = "https://api.openai.com";
  var y5 = O($p(), 1),
    Kp = O(qp(), 1);
  var yI = O(P());
  var sI = O(P()),
    Uo, RZ = new Uint8Array(16);

  function Eu() {
    if (!Uo && (Uo = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !Uo)) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    return Uo(RZ)
  }
  var cI = O(P());
  var ht = [];
  for (let e = 0; e < 256; ++e) ht.push((e + 256).toString(16).slice(1));

  function jp(e, t = 0) {
    return (ht[e[t + 0]] + ht[e[t + 1]] + ht[e[t + 2]] + ht[e[t + 3]] + "-" + ht[e[t + 4]] + ht[e[t + 5]] + "-" + ht[e[t + 6]] + ht[e[t + 7]] + "-" + ht[e[t + 8]] + ht[e[t + 9]] + "-" + ht[e[t + 10]] + ht[e[t + 11]] + ht[e[t + 12]] + ht[e[t + 13]] + ht[e[t + 14]] + ht[e[t + 15]]).toLowerCase()
  }
  var vI = O(P());
  var hI = O(P()),
    VZ = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto),
    wu = {
      randomUUID: VZ
    };

  function NZ(e, t, n) {
    if (wu.randomUUID && !t && !e) return wu.randomUUID();
    e = e || {};
    let a = e.random || (e.rng || Eu)();
    if (a[6] = a[6] & 15 | 64, a[8] = a[8] & 63 | 128, t) {
      n = n || 0;
      for (let o = 0; o < 16; ++o) t[n + o] = a[o];
      return t
    }
    return jp(a)
  }
  var Au = NZ;
  var za = O(In(), 1);
  y5.default.extend(Kp.default);
  var bu = class {
    getExtensionVersion() {
      return za.default.runtime.getManifest().version
    }
    async tryGetTab(t) {
      try {
        return await za.default.tabs.get(parseInt(t))
      } catch {
        return null
      }
    }
    getOsType() {
      let t = navigator.userAgent,
        n = navigator.userAgentData?.platform || navigator.platform,
        a = ["Macintosh", "MacIntel", "MacPPC", "Mac68K", "macOS"],
        o = ["Win32", "Win64", "Windows", "WinCE"],
        s = ["iPhone", "iPad", "iPod"];
      return a.indexOf(n) !== -1 ? "OSX" : s.indexOf(n) !== -1 ? "IOS" : o.indexOf(n) !== -1 ? "Windows" : /Android/.test(t) ? "Android" : /Linux/.test(n) ? "Linux" : (console.error("unable to detect os type, use Windows as default", n, t), "Windows")
    }
    detectSystemColorScheme() {
      return window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light"
    }
    isPromise(t) {
      return !!t && (typeof t == "object" || typeof t == "function") && typeof t.then == "function"
    }
    getWebOrigin() {
      return Xe.host
    }
    getModKeyName(t = !1) {
      return this.getOsType() === "OSX" ? "\u2318" : t ? "Ctrl + " : "Ctrl"
    }
    getStaticFile(t) {
      return za.default.runtime.getURL(`static/${t}`)
    }
    genId() {
      return Au()
    }
    onDOMReady(t) {
      document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", t) : t()
    }
    getRootId(t) {
      return `${Xe.extensionPrefix}-${t}`
    }
    camelizeKey(t, n = ["-", "_"]) {
      let a = [],
        o = 0,
        s = new Set(n);
      for (; o < t.length;) s.has(t[o]) ? (a.push(t[o + 1].toUpperCase()), o++) : a.push(t[o]), o++;
      return a.join("")
    }
    camelize(t) {
      if (t == null) return null;
      if (t instanceof Array) return t.map(n => this.camelize(n));
      if (typeof t == "object") {
        let n = {};
        for (let a in t) {
          let o = t[a];
          n[this.camelizeKey(a)] = this.camelize(o)
        }
        return n
      }
      return t
    }
    underlizeKey(t, n = !1) {
      let a = [],
        o = 0,
        s = t.toString().toLowerCase();
      for (; o < t.length;) {
        if (t[o] !== s[o] && (!n || o !== 0)) {
          a.push("_"), a.push(s[o]), o++;
          continue
        }
        a.push(t[o].toLocaleLowerCase()), o++
      }
      return a.join("")
    }
    underlize(t) {
      if (t == null) return null;
      if (t instanceof Array) return t.map(n => this.underlize(n));
      if (typeof t == "object") {
        let n = {};
        for (let a in t) {
          let o = t[a],
            s = this.underlizeKey(a),
            c = this.underlize(o);
          c != null && (n[s] = c)
        }
        return n
      }
      return t
    }
    capitalize(t) {
      return t.charAt(0).toUpperCase() + t.slice(1)
    }
    async * streamAsyncIterable(t) {
      let n = t.getReader();
      try {
        for (; ;) {
          let {
            done: a,
            value: o
          } = await n.read();
          if (a) return;
          yield o
        }
      } finally {
        n.releaseLock()
      }
    }
    isBraveBrowser() {
      return navigator.brave?.isBrave()
    }
    endsWithQuestionMark(t) {
      return t.endsWith("?") || t.endsWith("\uFF1F") || t.endsWith("\u061F") || t.endsWith("\u2E2E")
    }
    copyToClipboard(t) {
      let n = document.createElement("textarea");
      n.id = "copy-to-clipboard";
      let a = document.body;
      a.appendChild(n), n.value = t, n.select(), document.execCommand("copy"), a.removeChild(n)
    }
    getOffsetOfPageTop(t) {
      return document.documentElement.clientHeight - (t.getBoundingClientRect().top - document.documentElement.getBoundingClientRect().top)
    }
    async delay(t) {
      return new Promise(n => {
        setTimeout(() => {
          n()
        }, t)
      })
    }
    async getContentFromClipboard() {
      try {
        let t = await navigator.clipboard.readText();
        return za.default.tabs.query({}), t
      } catch {
        return ""
      }
    }
    fromNow(t) {
      let n = "MMM D, YYYY";
      return (0, y5.default)().diff((0, y5.default)(t), "day") > 7 ? (0, y5.default)((0, y5.default)(t)).format(n) : (0, y5.default)((0, y5.default)(t)).fromNow()
    }
    formatMonicaSdkError(t) {
      let n = t.message || t.data.message || "server error",
        a = /请求失败\((\d+)\)/;
      return n.replace(a, "server error($1)")
    }
    addPromptLangSuffix(t, n) {
      return n === "auto" ? t : `${t}(in ${n})`
    }
    getProductName() {
      return Xe.currentProject === "monica" ? "Monica" : "ChatGPT for Google"
    }
    getDefaultShortcutKey() {
      return Xe.currentProject === "monica" ? "m" : "b"
    }
    getChromeStoreUrl() {
      return Xe.currentProject === "monica" ? "https://chrome.google.com/webstore/detail/monica-%E2%80%94-your-chatgpt-cop/ofpnmcalabcbjgholdjcjblkibolbppb" : "https://chrome.google.com/webstore/detail/chatgpt-for-google/jgjaeacdkonaoafenlfkkkmbaopkbilf"
    }
    getLogo(t = !0) {
      return Xe.currentProject === "monica" ? this.getStaticFile("monicaLogo.png") : t ? this.getStaticFile("logo.png") : this.getStaticFile("c4g/c4gTransparentLogo.png")
    }
    getFeedbackEmail() {
      return Xe.currentProject === "monica" ? "mailto:contact@monica.im?subject=Monica feedback" : "mailto:chatgpt4search@gmail.com?subject=ChatGPT for Google feedback"
    }
    checkIfMonicaLoadedSync() {
      let t = document.body.getAttribute("monica-id"),
        n = document.body.getAttribute("monica-version");
      return !!(t && n)
    }
    async checkIfMonicaLoaded() {
      return await de.delay(100), this.checkIfMonicaLoadedSync()
    }
  },
    de = new bu;
  var xI = O(P()),
    Bo = O(c1());
  var DZ = {
    small: 16,
    medium: 32,
    large: 64
  };

  function FZ(e, t, n) {
    var a = n(),
      o = Object.keys(a);

    function s(c) {
      var h = c["aria-label"],
        f = c.tabIndex,
        p = c.className,
        _ = p === void 0 ? t : p,
        M = c.fill,
        g = M === void 0 ? "currentColor" : M,
        A = c.size,
        x = A === void 0 ? 16 : A,
        k = c.verticalAlign,
        U = k === void 0 ? "text-bottom" : k,
        E = DZ[x] || x,
        y = UZ(o, E),
        C = a[y].width,
        b = E * (C / y),
        S = a[y].path;
      return Bo.default.createElement("svg", {
        "aria-hidden": h ? "false" : "true",
        tabIndex: f,
        focusable: f >= 0 ? "true" : "false",
        "aria-label": h,
        role: "img",
        className: _,
        viewBox: "0 0 ".concat(C, " ").concat(y),
        width: b,
        height: E,
        fill: g,
        style: {
          display: "inline-block",
          userSelect: "none",
          verticalAlign: U,
          overflow: "visible"
        }
      }, S)
    }
    return s.displayName = e, s
  }

  function UZ(e, t) {
    return e.map(function (n) {
      return parseInt(n, 10)
    }).reduce(function (n, a) {
      return a <= t ? a : n
    }, e[0])
  }
  var Qp = FZ("XIcon", "octicon octicon-x", function () {
    return {
      16: {
        width: 16,
        path: Bo.default.createElement("path", {
          d: "M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"
        })
      },
      24: {
        width: 24,
        path: Bo.default.createElement("path", {
          d: "M5.72 5.72a.75.75 0 0 1 1.06 0L12 10.94l5.22-5.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L13.06 12l5.22 5.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L12 13.06l-5.22 5.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L10.94 12 5.72 6.78a.75.75 0 0 1 0-1.06Z"
        })
      }
    }
  });
  var LI = O(P());
  var Go = {
    "chat-gpt-hint": "chat-gpt-hint-Qk6OtC",
    chatGptHint: "chat-gpt-hint-Qk6OtC",
    "go-back-btn": "go-back-btn-Qp7GpS",
    goBackBtn: "go-back-btn-Qp7GpS",
    close: "close-MIQb5g"
  };
  var cT = O(P(), 1);
  var rT = O(P(), 1);
  var XI = O(P(), 1);
  var VI = O(P(), 1);
  var Yp = ["ServiceBase", "BackgroundApp", "MonicaService", "ConfigService"],
    BZ = [],
    Mu = class {
      console = console;
      loggers = [];
      enabledModules = Xe.isProd ? new Set(BZ) : new Set(Yp);
      getLogger(t) {
        let n = new Zu(this.enabledModules, t);
        return this.loggers.push(n), n
      }
      enableAllLoggers() {
        this.enabledModules = new Set(Yp), this.loggers.forEach(t => {
          t._enabledModules = this.enabledModules
        })
      }
    },
    Zu = class {
      constructor(t, n) {
        this._enabledModules = t;
        this._module = n
      }
      get log() {
        return this._enabledModules.has(this._module) ? console.log : Xp
      }
      get debug() {
        return this._enabledModules.has(this._module) ? console.debug : Xp
      }
      get warn() {
        return console.warn
      }
      get error() {
        return console.error
      }
    };

  function Xp() { }
  var _1 = new Mu;
  var cr = O(In(), 1);
  var WI = O(P(), 1);
  var UI = O(P(), 1),
    Y5 = O(In(), 1);
  var Su = class {
    async sendToBackground(t, n, a) {
      let o = {
        type: t,
        data: n,
        id: a || de.genId()
      };
      return Y5.default.runtime.sendMessage(o)
    }
    async addListener(t, n) {
      Y5.default.runtime.onMessage.addListener((a, o) => {
        a.type === t && n(a.data, a.id, o)
      })
    }
    async addExternalListener(t, n) {
      Y5.default.runtime.onMessageExternal.addListener((a, o) => {
        console.log("incoming external msg", a), a.type === t && n(a.data, a.id, o)
      })
    }
    async sendToContent(t, n, a, o) {
      let s = {
        type: n,
        data: a,
        id: o || de.genId()
      };
      return Y5.default.tabs.sendMessage(t, s)
    }
    async sendToPopup(t, n, a) {
      let o = {
        type: t,
        data: n,
        id: a || de.genId()
      };
      return Y5.default.runtime.sendMessage(o)
    }
    broadcastFromBackground(t, n, a) {
      if (!Xe.isBackground) throw new Error("only allowed in background");
      let o = a || de.genId();
      Y5.default.tabs.query({}).then(s => {
        s.forEach(c => {
          c.id && this.sendToContent(c.id, t, n, o).catch(() => { })
        })
      }), this.sendToPopup(t, n, o).catch(() => { })
    }
  },
    X5 = new Su;
  var $o = O(xu(), 1),
    lr = O(In(), 1),
    Iu = _1.getLogger("ServiceBase"),
    Tu = class {
      constructor(t, n) {
        this.prefix = t;
        this.defaultValues = n
      }
      async get(t) {
        let n = this.encodeKey(t),
          o = (await lr.default.storage.local.get(n))[n];
        return o === void 0 && (o = this.defaultValues[t]), o
      }
      async set(t, n) {
        lr.default.storage.local.set({
          [this.encodeKey(t)]: n
        })
      }
      async getAll() {
        let t = Object.keys(this.defaultValues).map(a => this.encodeKey(a)),
          n = await lr.default.storage.local.get(t);
        return n ? (0, $o.defaults)(this.transformValues(n, !1), this.defaultValues) : this.defaultValues
      }
      async update(t) {
        await lr.default.storage.local.set(this.transformValues(t, !0))
      }
      async removeDeprecated(t) {
        await lr.default.storage.local.remove(this.encodeKey(t))
      }
      encodeKey(t) {
        return this.prefix ? `${this.prefix}.${t}` : t
      }
      decodeKey(t) {
        return this.prefix ? t.replace(`${this.prefix}.`, "") : t
      }
      transformValues(t, n) {
        let a = {},
          o = new Set(Object.keys(this.defaultValues));
        for (let s of Object.keys(t))
          if (n) o.has(s) && (a[this.encodeKey(s)] = t[s]);
          else {
            let c = this.decodeKey(s);
            o.has(c) && (a[c] = t[s])
          } return a
      }
    },
    _5 = class {
      _instance;
      _eventListeners = {};
      constructor(t, n) {
        this._instance = new n;
        let a = this._instance,
          o = this,
          s = Object.getPrototypeOf(a),
          c = Object.getPrototypeOf(s),
          h = [...Object.getOwnPropertyNames(s), ...Object.getOwnPropertyNames(c)];
        for (let f of h) typeof a[f] == "function" && (o[f] = (..._) => {
          if (Xe.isBackground) return a._onCallMethod({
            type: "bg"
          }, f, _);
          if (f.startsWith("_")) throw TypeError("method starting with _ can only be called from background");
          if (f === "on") {
            let [M, g] = _;
            return this._addEventListener(M, g)
          }
          return this._sendMethodCallToBackground(t, f, _)
        });
        Xe.isBackground || X5.addListener("serviceEvent", f => {
          let {
            serviceName: p,
            eventName: _,
            data: M
          } = f;
          if (t === p) {
            let g = this._eventListeners[_];
            g && g.forEach(A => A.call(M))
          }
        }), Iu.debug("service proxy created", t, this)
      }
      async _sendMethodCallToBackground(t, n, a) {
        Iu.debug("send event call", t, n, a);
        let o = de.genId(),
          s = [];
        return a.forEach((c, h) => {
          if (typeof c == "function") {
            let f = `__func:${o}:${h}`;
            s.push(f), this._addProxiedFunc(f, c)
          } else s.push(c)
        }), X5.sendToBackground("callServiceMethod", {
          serviceName: t,
          methodName: n,
          finalArgs: s
        }, o)
      }
      _addEventListener(t, n) {
        this._eventListeners[t] || (this._eventListeners[t] = []);
        let a = new zo(t, n, () => {
          this._eventListeners[t] = this._eventListeners[t]?.filter(o => o !== a)
        });
        return this._eventListeners[t].push(a), a
      }
      _addProxiedFunc(t, n) {
        X5.addListener("proxiedFuncCall", a => {
          t === a.funcId && n(...a.args)
        })
      }
    },
    zo = class {
      constructor(t, n, a) {
        this.event = t;
        this.handler = n;
        this.onDestroy = a
      }
      destroy() {
        this.onDestroy()
      }
      call(t) {
        this.handler(t)
      }
    },
    E5 = class {
      _serviceName = "";
      storage;
      lastCaller;
      eventListeners = {};
      _initService(t) {
        this._serviceName = t;
        let n = this.storagePrefix;
        this.storage = new Tu(n, this.defaultStorageValues), this.onInit()
      }
      on(t, n) {
        this.eventListeners[t] || (this.eventListeners[t] = []);
        let a = new zo(t, n, () => {
          this.eventListeners[t] = this.eventListeners[t]?.filter(o => o !== a)
        });
        return this.eventListeners[t].push(a), a
      }
      async _onCallMethod(t, n, a) {
        let o = this;
        if (typeof o[n] != "function") throw new Error(`method ${n} not found`);
        let s = [];
        a.forEach(h => {
          if (typeof h == "string" && h.startsWith("__func:")) {
            let f = h;
            s.push((...p) => {
              let _ = `${this._serviceName}.${n}`;
              Iu.debug(`- call proxied func for ${_}:${f}`, {
                funcArgs: p
              }), t.tabId ? X5.sendToContent(t.tabId, "proxiedFuncCall", {
                funcId: f,
                args: p
              }) : X5.sendToPopup("proxiedFuncCall", {
                funcId: f,
                args: p
              })
            })
          } else s.push(h)
        }), this.lastCaller = t;
        let c = o[n](...s);
        if (c !== void 0 && !de.isPromise(c)) throw new TypeError("public service method must return a promise");
        return c
      }
      emit(t, n) {
        let a = this.eventListeners[t];
        a && a.forEach(o => o.call(n)), X5.broadcastFromBackground("serviceEvent", {
          serviceName: this._serviceName,
          eventName: t,
          data: n
        })
      }
      async _fetchWithCache(t, n, a) {
        let {
          useCache: o = !0,
          autoUpdate: s = !0,
          cacheOnly: c = !1
        } = a || {}, h = async () => {
          let f = await n();
          return this.storage.set(t, f), f
        };
        if (o || c) {
          let f = await this.storage.get(t);
          if (c) return f;
          if (f && !(0, $o.isEmpty)(f)) return s && h(), f
        }
        return await h()
      }
    };
  var qo = _1.getLogger("AuthTabService"),
    GZ = "https://chat.openai.com/chat",
    ur = class extends E5 {
      storagePrefix = "authTab";
      defaultStorageValues = {
        pinnedTabId: null,
        authCaller: null
      };
      iframeLoadedCallback = null;
      onInit() { }
      async backToCallerPage() {
        let t = await this.storage.get("authCaller");
        if (t) {
          let {
            type: n,
            tabId: a
          } = t;
          n === "tab" && cr.default.tabs.update(a, {
            active: !0
          })
        }
      }
      resolveChatGptAuthError() {
        return this.createChatGptTabForAuth()
      }
      async isThisTheAuthTab() {
        let t = this.lastCaller?.tabId,
          {
            pinnedTabId: n,
            authCaller: a
          } = await this.storage.getAll();
        return !!(a && n === t)
      }
      async markAuthFinished() {
        return this.storage.update({
          authCaller: null
        })
      }
      async waitIframeLoaded() {
        return new Promise((t, n) => {
          this.iframeLoadedCallback = () => {
            t()
          }, setTimeout(() => {
            n("timeout")
          }, 8 * 1e3)
        })
      }
      async markIframeLoaded() {
        this.iframeLoadedCallback?.()
      }
      async createChatGptTabForAuth() {
        let t = this.lastCaller,
          n = await this.storage.get("pinnedTabId"),
          a = null;
        if (n) {
          qo.log("focused to old tab", n);
          try {
            a = await cr.default.tabs.get(n), cr.default.tabs.reload(a.id), cr.default.tabs.update(a.id, {
              active: !0,
              pinned: !0
            })
          } catch (o) {
            qo.error(o)
          }
        }
        return a || (qo.log("create new tab", n), a = await cr.default.tabs.create({
          url: GZ,
          pinned: !0,
          active: !0
        })), qo.log("update storage", a.id, t), this.storage.update({
          pinnedTabId: a.id,
          authCaller: t
        })
      }
    };
  m0(ur, "serviceName", "AuthTabService");
  var qa = new _5(ur.serviceName, ur);
  var zZ = /https:\/\/.*\.openai\.com\/auth/,
    $Z = "body .container .data",
    qZ = "body main div form",
    hr = class extends Ga {
      props;
      visible = !1;
      pageType = "other";
      async onViewCreate() {
        await qa.isThisTheAuthTab() && (this.updatePageType(), this.visible = !0)
      }
      onViewDestroy() { }
      handleClose() {
        this.visible = !1, qa.markAuthFinished()
      }
      async handleGoBack() {
        this.visible = !1, await qa.backToCallerPage(), qa.markAuthFinished()
      }
      updatePageType() {
        if (document.querySelector($Z)) {
          this.pageType = "cloudflare";
          return
        }
        if (location.href.match(zZ)) {
          this.pageType = "login";
          return
        }
        if (document.querySelector(qZ)) {
          this.pageType = "webapp";
          return
        }
        this.pageType = "other"
      }
    };
  Vr([pu], hr.prototype, "visible", 2), Vr([pu], hr.prototype, "pageType", 2);
  var Et = O(Q5(), 1),
    Jp = Fo.createComponent("ChatGptHint", hr, e => {
      if (!e.visible) return null;

      function t() {
        return e.pageType === "webapp" ? (0, Et.jsxs)(Et.Fragment, {
          children: [(0, Et.jsxs)("b", {
            children: [de.getProductName(), " is Ready!"]
          }), (0, Et.jsx)("p", {
            children: "Keep this tab open to make ChatGPT more stable"
          }), (0, Et.jsx)("div", {
            className: Go.goBackBtn,
            onClick: () => {
              e.handleGoBack()
            },
            children: "Back to Search"
          })]
        }) : (0, Et.jsxs)(Et.Fragment, {
          children: [(0, Et.jsxs)("b", {
            children: [de.getProductName(), " Says:"]
          }), (0, Et.jsxs)("p", {
            children: ["Login to ChatGPT webapp to use ", de.getProductName()]
          })]
        })
      }
      return (0, Et.jsxs)("div", {
        className: Go.chatGptHint,
        children: [(0, Et.jsx)("p", {
          children: t()
        }), (0, Et.jsx)("span", {
          className: Go.close,
          onClick: () => {
            e.handleClose()
          },
          children: (0, Et.jsx)(Qp, {
            size: 16
          })
        })]
      })
    });
  var XO = O(P(), 1);
  var qO = O(P(), 1);
  var FO = O(P(), 1);
  var NT = O(P(), 1);
  var LT = O(P(), 1);
  var xT = O(P(), 1);
  var MT = O(P(), 1);
  var AT = O(P(), 1),
    fr;
  (o => (o.RESP_FIELD_STATUS = "code", o.RESP_FIELD_MESSAGE = "msg", o.RESP_FIELD_ERROR_NAME = "error", o.RESP_SUCCESS_STATUS = 0))(fr ||= {});
  var Se;
  (_ => {
    let e = "[CrepeSdk] ";
    class t { }
    _.ExceptionHandler = t, _.NameTransformers = {
      snakeToCamel: M => M.replace(/(_[a-z])/g, g => g.toUpperCase().replace("_", "")),
      camelToSnake: M => M.replace(/([A-Z])/g, g => `_${g.toLowerCase()}`).replace(/^_/, "")
    };
    class a {
      constructor(g, A, x, k, U, E, y, C) {
        this.reqInfo = g;
        this.httpError = A, this.httpStatus = x, this.httpStatusText = k, this.name = this.constructor.name, this.code = U, this.message = E, this.data = y, this.originalError = C
      }
      name;
      httpError;
      httpStatus;
      httpStatusText;
      code;
      message;
      data;
      originalError;
      handled = !1
    }
    _.ApiRequestError = a;
    class o {
      constructor(g, A, x, k) {
        this.reqInfo = g;
        this.name = this.constructor.name, this.originalError = x, this.cause = A, this.reason = k
      }
      name;
      cause;
      originalError;
      reason
    }
    _.ApiRequestAborted = o;
    class s {
      config;
      sessionMap = new WeakMap;
      idCounter = 0;
      constructor(g) {
        this.config = g, this.config.nameTransformers || (this.config.nameTransformers = {
          toClientName: _.NameTransformers.snakeToCamel,
          toServerName: _.NameTransformers.camelToSnake
        })
      }
      nextId() {
        return ++this.idCounter
      }
      expireSession(g, A) {
        let x = this.sessionMap.get(g);
        return x ? (A && x.has(A) ? (x.get(A)._expire(), x.delete(A)) : (x.forEach(k => {
          k._expire()
        }), x.clear()), !0) : !1
      }
      convertObjectNames(g, A) {
        return A && (Array.isArray(A) ? A.map(x => this.convertObjectNames(g, x)) : typeof A == "object" ? Object.keys(A).reduce((x, k) => {
          let U = A[k],
            E = this.convertNameKey(g, k);
          return x[E] = this.convertObjectNames(g, U), x
        }, {}) : A)
      }
      convertNameKey(g, A) {
        return g === "client" ? this.config.nameTransformers.toClientName(A) : this.config.nameTransformers.toServerName(A)
      }
      getSession(g, A, x, k) {
        let U = this.sessionMap.get(g);
        U || (U = new Map, this.sessionMap.set(g, U));
        let E = U.get(A);
        if (E) return E._checkConfigs(x), E;
        let y = new k(g, A, x);
        return y._initApis(this), U.set(A, y), y
      }
    }
    _.BaseSdk = s;
    class c {
      sdk;
      session;
      cachedData = new Map;
      constructor(g, A) {
        if (this.sdk = g, A && !(A instanceof f)) throw new Error(`${e}session error`);
        this.session = A
      }
      async sendRequest(g, A, x, k, U, E = {}) {
        if (E.cacheMode === "localStorage") throw new Error(`${e}localStorage cache not supported yet`);
        let C = {
          id: this.sdk.nextId(),
          method: g,
          path: A,
          cmd: x,
          otherParams: k,
          isLowLevelResp: U,
          config: E,
          cacheKey: null
        };
        if (E.onResolve && !E.cacheMode && console.warn(`${e}onResolve is usually combined with cacheMode`), E.useCache) {
          E.cacheMode || console.error(`${e}useCache must combined with cacheMode`);
          let b = this.getSignature(g, A, x, k);
          if (console.log(b), C.cacheKey = b, this.cachedData.has(b)) {
            this.handleSendRequest(C, !0);
            let S = this.cachedData.get(b);
            return E.onResolve?.(null, S, !0), S
          }
        }
        return this.handleSendRequest(C, !1)
      }
      handleSendRequest(g, A) {
        let {
          sdk: x
        } = this, {
          method: k,
          config: U
        } = g, {
          body: E,
          query: y
        } = this.getParams(k, g.cmd, g.otherParams), C = x.config.baseUrl + this.pathPrefix + g.path;
        y && (C += `?${y}`);
        let b = U.headers || {};
        x.config.globalSetHeader && (b = x.config.globalSetHeader(b)), b["Content-Type"] || (b["Content-Type"] = "application/json");
        let S = U.abortSignal || this.session?.abortSignal;
        this.onBeforeRequest(U, A);
        let L = fetch(C, {
          method: k,
          headers: b,
          signal: S,
          body: k === "GET" ? null : JSON.stringify(E)
        });
        return this.handleRes(g, L, A)
      }
      async handleRes(g, A, x) {
        let {
          config: k
        } = g;
        try {
          let U = await A;
          if (U.status !== 200) throw new a(g, !0, U.status, U.statusText, 0, `request fail(${U.status})`, null, new Error(U.statusText));
          if (g.isLowLevelResp) throw new Error("TODO: handle low level resp"); {
            let E = await U.json(),
              y = E[fr.RESP_FIELD_STATUS],
              C = E[fr.RESP_FIELD_MESSAGE],
              b = E[fr.RESP_FIELD_ERROR_NAME],
              S = this.sdk.convertObjectNames("client", E);
            if (y === fr.RESP_SUCCESS_STATUS) return g.cacheKey && this.cachedData.set(g.cacheKey, S), k.onResolve?.(null, S, !1), S;
            let L = a;
            throw b && this.sdk.allExceptions[b] && (L = this.sdk.allExceptions[b]), new L(g, !1, U.status, U.statusText, y, C, S, new Error(C))
          }
        } catch (U) {
          return x ? (console.error(`${e} cache update fail`, U), null) : this.handleError(g, U)
        } finally {
          this.onAfterRequest(k, x)
        }
      }
      handleError(g, A) {
        let {
          config: x
        } = g;
        if (A instanceof DOMException && A.code === A.ABORT_ERR) throw x.abortSignal?.aborted ? new o(g, "manualCanceled", A, x.abortSignal.reason) : new o(g, "autoCanceled", A);
        if (A instanceof TypeError && A.message === "Failed to fetch") {
          let U = new a(g, !0, 0, A.message, 0, "network error(0)", null, A);
          if (this.triggerErrorHandlers(U, x), U.handled) throw new o(g, "handled", A)
        }
        if (A instanceof a && (this.triggerErrorHandlers(A, x), A.handled)) throw new o(g, "handled", A);
        g.cacheKey && this.cachedData.delete(g.cacheKey);
        let k = A instanceof a ? A : new a(g, !1, 0, `${A.name}:${A.message}`, 0, "network error(-1)", null, A);
        throw x.onResolve?.(k, null, !1), console.error(`${e} Unhandled api request error:`, k), k
      }
      triggerErrorHandlers(g, A) {
        let x = !0;
        A.catch && (x = A.catch(g) === !1), x && this.session?.config.catch && (x = this.session.config.catch(g) === !1), this.sdk.config.globalErrorHandler && !A.ignoreGlobalErrorHandler && x && (x = this.sdk.config.globalErrorHandler(g) === !1), g.handled = !x
      }
      onBeforeRequest(g, A = !1) {
        if (!A && g.loadingProperties) {
          let [x, ...k] = g.loadingProperties;
          p(x, k, !0)
        }
      }
      onAfterRequest(g, A) {
        if (!A && g.loadingProperties) {
          let [x, ...k] = g.loadingProperties;
          p(x, k, !1)
        }
      }
      getParams(g, A, x) {
        let k;
        return g === "GET" && A ? k = Object.keys(A).map(U => [U, A[U]]) : k = x, {
          body: A ? this.sdk.convertObjectNames("server", A) : {},
          query: k.filter(([U, E]) => E !== void 0).map(([U, E]) => `${this.sdk.convertNameKey("server", U)}=${encodeURIComponent(this.stringifyQuery(E))}`).join("&")
        }
      }
      stringifyQuery(g) {
        if (g === "null") return "";
        let A = this.sdk.convertObjectNames("server", g);
        switch (typeof A) {
          case "boolean":
            return A ? "true" : "false";
          case "bigint":
          case "number":
          case "string":
            return A.toString();
          case "undefined":
            return "";
          case "object":
            return Array.isArray(A) ? A.map(x => this.stringifyQuery(x)).join(",") : Object.keys(A).map(x => `${x}=${this.stringifyQuery(A[x])}`).join("&");
          default:
            return ""
        }
      }
      getSignature(g, A, x, k) {
        return g.slice(0, 2) + A + this.stableJsonStringify(x) + this.stableJsonStringify(k)
      }
      stableJsonStringify(g) {
        let A = new Set;
        return JSON.stringify(g, (x, k) => (A.add(x), k)), JSON.stringify(g, Array.from(A).sort())
      }
    }
    _.BaseDomainApi = c;
    class h {
      session;
      wait;
      maxWait;
      leading = !1;
      trailing = !0;
      mutex = !0;
      status = "idle";
      next = null;
      nextP = null;
      nextPResolve = null;
      nextPReject = null;
      timer = null;
      maxWaitTimer = null;
      abortController;
      expired = !1;
      get abortSignal() {
        return this.abortController.signal
      }
      constructor(g, A) {
        if (this.session = g, typeof A == "number") this.wait = A;
        else {
          let {
            wait: x,
            leading: k,
            maxWait: U,
            trailing: E,
            mutex: y
          } = A;
          this.wait = x, this.maxWait = U, k !== void 0 && (this.leading = k), E !== void 0 && (this.trailing = E), y !== void 0 && (this.mutex = y), this.maxWait && this.maxWait < this.wait && console.warn("maxWait must >= wait")
        }
      }
      add(g) {
        if (this.expired) throw new Error(`${e}session has expired`);
        if (this.status === "idle") {
          if (this.leading) {
            this.onBeforeRun();
            try {
              let A = g(this.session);
              return this.doWait(), A
            } finally {
              this.onAfterRun()
            }
          }
          return this.queueNext(g), this.doWait(), this.nextP
        }
        return this.queueNext(g), this.doWait(), this.nextP
      }
      expire() {
        clearInterval(this.timer), clearInterval(this.maxWaitTimer), this.abortController?.abort(), this.expired = !0
      }
      doWait() {
        this.status = "waiting", this.timer && (clearTimeout(this.timer), this.timer = null), this.timer = setTimeout(() => {
          this.status = "idle", this.timer = null, this.maxWaitTimer && (clearTimeout(this.maxWaitTimer), this.maxWaitTimer = null), this.trailing && this.run()
        }, this.wait), this.maxWait && !this.maxWaitTimer && (this.maxWaitTimer = setTimeout(() => {
          this.maxWaitTimer = null, this.run(), this.doWait()
        }, this.maxWait))
      }
      async run() {
        if (!this.next) return;
        this.onBeforeRun();
        let g = this.next;
        this.next = null;
        try {
          let A = await g(this.session);
          this.nextPResolve?.(A)
        } catch (A) {
          this.nextPReject?.(A)
        } finally {
          this.onAfterRun()
        }
      }
      queueNext(g) {
        this.next = g, this.nextP = new Promise((A, x) => {
          this.nextPResolve = A, this.nextPReject = x
        })
      }
      onBeforeRun() {
        this.mutex && (this.abortController?.abort(), this.abortController = new AbortController), this.session?._onBeforeRun()
      }
      onAfterRun() {
        this.session?._onAfterRun()
      }
    }
    class f {
      static idCounter = 0;
      get abortSignal() {
        return this.debounceManager?.abortSignal || this.abortController.signal
      }
      id;
      context;
      name;
      config;
      get expired() {
        return this._expired
      }
      _expired = !1;
      mode = "normal";
      abortController;
      debounceManager;
      constructor(g, A, x) {
        this.id = ++f.idCounter, this.context = g, this.name = A, this.config = x, this.abortController = new AbortController, this.initConfig(x)
      }
      _checkConfigs(g) {
        if (JSON.stringify(g) !== JSON.stringify(this.config)) throw console.error({
          context: this.context,
          name: this.name,
          oldConfig: this.config,
          newConfig: g
        }), new Error(`${e}config inconsistent when calling same session`)
      }
      async _run() {
        if (this._expired) throw new Error(`${e}session has expired`);
        if (this.mode === "normal") {
          this._onBeforeRun();
          try {
            return this.config.handler(this)
          } finally {
            this._onAfterRun()
          }
        }
        if (this.mode === "mutex") {
          this.cancelUnfinished(), this._onBeforeRun();
          try {
            return this.config.handler(this)
          } finally {
            this._onAfterRun()
          }
        }
        if (this.mode === "debounce") return this.debounceManager.add(this.config.handler);
        if (this.mode === "polling") {
          this._onBeforeRun();
          try {
            return this.config.handler(this)
          } finally {
            this._onAfterRun()
          }
        }
        throw new Error(`${e} Unknown session mode: ${this.mode}`)
      }
      _expire() {
        this.cancelUnfinished(), this.debounceManager?.expire(), this._expired = !0
      }
      _onBeforeRun() {
        this.config.loadingProperties && p(this.context, this.config.loadingProperties, !0)
      }
      _onAfterRun() {
        this.config.loadingProperties && p(this.context, this.config.loadingProperties, !1)
      }
      cancelUnfinished() {
        this.abortController.abort(), this.abortController = new AbortController
      }
      initConfig(g) {
        if (["mutex", "debounce", "pollingInterval"].filter(k => g[k] !== void 0).length > 1) throw new Error(`${e} Multiple control param are not supported (mutex/debounce/pollingInterval)`);
        if (this.config.debounce) {
          this.mode = "debounce", this.debounceManager = new h(this, this.config.debounce);
          return
        }
        if (this.config.pollingInterval) throw this.mode = "polling", new Error(`${e}polling not implemented`);
        if (this.config.mutex) {
          this.mode = "mutex";
          return
        }
      }
    }
    _.BaseSession = f;

    function p(M, g, A) {
      g.forEach(x => {
        M[x] = A
      })
    }
  })(Se ||= {});
  var Ou;
  (A => {
    class e extends Se.ApiRequestError {
      errorName = "exceptions.CommonError"
    }
    A.CommonError = e;
    class t extends Se.ApiRequestError {
      errorName = "exceptions.InternalError"
    }
    A.InternalError = t;
    class n extends Se.ApiRequestError {
      errorName = "exceptions.AuthError"
    }
    A.AuthError = n;
    class a extends Se.ApiRequestError {
      errorName = "exceptions.UserAuthError"
    }
    A.UserAuthError = a;
    class o extends Se.ApiRequestError {
      errorName = "exceptions.ResourceNotFoundError"
    }
    A.ResourceNotFoundError = o;
    class s extends Se.ApiRequestError {
      errorName = "exceptions.ValidationError"
    }
    A.ValidationError = s;
    class c extends Se.ApiRequestError {
      errorName = "exceptions.UnexpectedError"
    }
    A.UnexpectedError = c;
    class h extends Se.ApiRequestError {
      errorName = "exceptions.DomainError"
    }
    A.DomainError = h;
    let f;
    (S => {
      class x extends Se.ApiRequestError {
        errorName = "task.exceptions.ChatError"
      }
      S.ChatError = x;
      class k extends Se.ApiRequestError {
        errorName = "task.exceptions.QuotaExceededError"
      }
      S.QuotaExceededError = k;
      class U extends Se.ApiRequestError {
        errorName = "task.exceptions.UidDuplicateError"
      }
      S.UidDuplicateError = U;
      class E extends Se.ApiRequestError {
        errorName = "task.exceptions.CustomPromptError"
      }
      S.CustomPromptError = E;
      class y extends Se.ApiRequestError {
        errorName = "task.exceptions.ConversationNotExistError"
      }
      S.ConversationNotExistError = y;
      class C extends Se.ApiRequestError {
        errorName = "task.exceptions.SharedConversationNotExistError"
      }
      S.SharedConversationNotExistError = C;
      class b extends Se.BaseDomainApi {
        pathPrefix = "/task";
        async generatePrompt(V, H) {
          return this.sendRequest("POST", "/generate_prompt", V, [], !1, H)
        }
        async generateOpenaiParam(V, H) {
          return this.sendRequest("POST", "/generate_openai_param", V, [], !1, H)
        }
        async onOpenaiResult(V, H) {
          return this.sendRequest("POST", "/on_openai_result", V, [], !1, H)
        }
        async feedbackGenResult(V, H) {
          return this.sendRequest("POST", "/feedback_gen_result", V, [], !1, H)
        }
        async getTemplateList(V) {
          return this.sendRequest("GET", "/get_template_list", null, [], !1, V)
        }
        async getToneList(V) {
          return this.sendRequest("GET", "/get_tone_list", null, [], !1, V)
        }
        async shareConversation(V, H) {
          return this.sendRequest("POST", "/share_conversation", V, [], !1, H)
        }
        async getSharedConversation(V, H) {
          return this.sendRequest("GET", "/get_shared_conversation", null, [
            ["shortId", V]
          ], !1, H)
        }
        async getConversationList(V, H) {
          return this.sendRequest("GET", "/get_conversation_list", V, [], !1, H)
        }
        async getChatItemList(V, H) {
          return this.sendRequest("GET", "/get_chat_item_list", V, [], !1, H)
        }
        async searchConversation(V, H) {
          return this.sendRequest("GET", "/search_conversation", V, [], !1, H)
        }
        async delConversation(V, H) {
          return this.sendRequest("POST", "/del_conversation", V, [], !1, H)
        }
      }
      S.Api = b
    })(f = A.Task ||= {});
    let p;
    (C => {
      class x extends Se.ApiRequestError {
        errorName = "user.exceptions.UserNotExistsError"
      }
      C.UserNotExistsError = x;
      class k extends Se.ApiRequestError {
        errorName = "user.exceptions.OauthCallbackError"
      }
      C.OauthCallbackError = k;
      class U extends Se.ApiRequestError {
        errorName = "user.exceptions.UserAlreadyExistsError"
      }
      C.UserAlreadyExistsError = U;
      class E extends Se.ApiRequestError {
        errorName = "user.exceptions.PasswordError"
      }
      C.PasswordError = E;
      class y extends Se.BaseDomainApi {
        pathPrefix = "/user";
        async superAccount(S, L) {
          return this.sendRequest("GET", "/super_account", null, [
            ["superId", S]
          ], !1, L)
        }
        async logout(S) {
          return this.sendRequest("GET", "/logout", null, [], !1, S)
        }
        async loginToken(S, L) {
          return this.sendRequest("GET", "/login_token", null, [
            ["token", S]
          ], !1, L)
        }
        async me(S) {
          return this.sendRequest("GET", "/me", null, [], !1, S)
        }
        async updateLanguagePreferences(S, L) {
          return this.sendRequest("POST", "/update_language_preferences", S, [], !1, L)
        }
        async updateTel(S, L) {
          return this.sendRequest("POST", "/update_tel", S, [], !1, L)
        }
        async oauth2Revoke(S) {
          return this.sendRequest("GET", "/oauth2_revoke", null, [], !1, S)
        }
        async clearCredentials(S) {
          return this.sendRequest("GET", "/clear_credentials", null, [], !1, S)
        }
        async updateUserInfo(S, L) {
          return this.sendRequest("POST", "/update_user_info", S, [], !1, L)
        }
        async uninstallReasons(S) {
          return this.sendRequest("GET", "/uninstall_reasons", null, [], !1, S)
        }
        async uninstallFeedback(S, L) {
          return this.sendRequest("POST", "/uninstall_feedback", S, [], !1, L)
        }
        async logoff(S) {
          return this.sendRequest("POST", "/logoff", null, [], !1, S)
        }
        async customPromptList(S, L) {
          return this.sendRequest("GET", "/custom_prompt_list", S, [], !1, L)
        }
        async createCustomPrompt(S, L) {
          return this.sendRequest("POST", "/create_custom_prompt", S, [], !1, L)
        }
        async updateCustomPrompt(S, L) {
          return this.sendRequest("POST", "/update_custom_prompt", S, [], !1, L)
        }
        async deleteCustomPrompt(S, L) {
          return this.sendRequest("POST", "/delete_custom_prompt", S, [], !1, L)
        }
        async updateCustomPromptPosition(S, L) {
          return this.sendRequest("POST", "/update_custom_prompt_position", S, [], !1, L)
        }
        async inviteList(S, L) {
          return this.sendRequest("GET", "/invite_list", S, [], !1, L)
        }
      }
      C.Api = y
    })(p = A.User ||= {});
    let _;
    (C => {
      class x extends Se.ApiRequestError {
        errorName = "vip.exceptions.NoCustomerError"
      }
      C.NoCustomerError = x;
      class k extends Se.ApiRequestError {
        errorName = "vip.exceptions.SubscriptionStatusError"
      }
      C.SubscriptionStatusError = k;
      class U extends Se.ApiRequestError {
        errorName = "vip.exceptions.StripeError"
      }
      C.StripeError = U;
      class E extends Se.ApiRequestError {
        errorName = "vip.exceptions.FrequentlyError"
      }
      C.FrequentlyError = E;
      class y extends Se.BaseDomainApi {
        pathPrefix = "/vip";
        async test(S) {
          return this.sendRequest("GET", "/test", null, [], !1, S)
        }
        async getVipStatus(S) {
          return this.sendRequest("GET", "/get_vip_status", null, [], !1, S)
        }
        async getSubscriptionPlans(S) {
          return this.sendRequest("GET", "/get_subscription_plans", null, [], !1, S)
        }
        async createSubscriptionCheckout(S, L) {
          return this.sendRequest("POST", "/create_subscription_checkout", S, [], !1, L)
        }
        async cancelSubscription(S) {
          return this.sendRequest("POST", "/cancel_subscription", null, [], !1, S)
        }
        async resubscribeSubscription(S) {
          return this.sendRequest("POST", "/resubscribe_subscription", null, [], !1, S)
        }
        async checkoutStatus(S, L) {
          return this.sendRequest("GET", "/checkout_status", S, [], !1, L)
        }
      }
      C.Api = y
    })(_ = A.Vip ||= {});
    class M extends Se.BaseSession {
      taskApi;
      userApi;
      vipApi;
      _initApis(k) {
        this.taskApi = new f.Api(k, this), this.userApi = new p.Api(k, this), this.vipApi = new _.Api(k, this)
      }
    }
    class g extends Se.BaseSdk {
      taskApi;
      userApi;
      vipApi;
      allExceptions = {
        "exceptions.CommonError": e,
        "exceptions.InternalError": t,
        "exceptions.AuthError": n,
        "exceptions.UserAuthError": a,
        "exceptions.ResourceNotFoundError": o,
        "exceptions.ValidationError": s,
        "exceptions.UnexpectedError": c,
        "exceptions.DomainError": h,
        "task.exceptions.ChatError": f.ChatError,
        "task.exceptions.QuotaExceededError": f.QuotaExceededError,
        "task.exceptions.UidDuplicateError": f.UidDuplicateError,
        "task.exceptions.CustomPromptError": f.CustomPromptError,
        "task.exceptions.ConversationNotExistError": f.ConversationNotExistError,
        "task.exceptions.SharedConversationNotExistError": f.SharedConversationNotExistError,
        "user.exceptions.UserNotExistsError": p.UserNotExistsError,
        "user.exceptions.OauthCallbackError": p.OauthCallbackError,
        "user.exceptions.UserAlreadyExistsError": p.UserAlreadyExistsError,
        "user.exceptions.PasswordError": p.PasswordError,
        "vip.exceptions.NoCustomerError": _.NoCustomerError,
        "vip.exceptions.SubscriptionStatusError": _.SubscriptionStatusError,
        "vip.exceptions.StripeError": _.StripeError,
        "vip.exceptions.FrequentlyError": _.FrequentlyError
      };
      constructor(k) {
        super(k), this.taskApi = new f.Api(this), this.userApi = new p.Api(this), this.vipApi = new _.Api(this)
      }
      async session(k, U, E) {
        return this.getSession(k, U, E, M)._run()
      }
    }
    A.Sdk = g
  })(Ou ||= {});
  var ku = `${de.getWebOrigin()}/api`,
    jZ = () => ({
      "Content-Type": "application/json",
      "X-Client-Version": de.getExtensionVersion()
    }),
    WZ = {
      baseUrl: ku,
      globalSetHeader(e) {
        let t = jZ();
        return {
          ...e,
          ...t
        }
      },
      globalErrorHandler: e => (console.warn("ApiRequestError", e.code, `(${e.httpStatus}, ${e.httpStatusText})`), !1)
    },
    OT = new Ou.Sdk(WZ);
  var KZ = "https://chatgpt4google.com/api",
    Lu = class {
      async createShare(t) {
        return await fetch(`${this.getFullUrl("/share/create")}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            data: JSON.stringify({
              messages: t.messages,
              modelName: t.modelName
            })
          })
        }).then(n => n.json())
      }
      async getUserVersion(t) {
        let a = await (await fetch(this.getFullUrl("/version/get"), {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(de.underlize(t))
        })).json();
        return de.camelize(a)
      }
      fetchPromotion = async () => await (await fetch(this.getFullUrl("/p", "old"), {
        headers: {
          "x-version": de.getExtensionVersion()
        }
      })).json();
      getFullUrl(t, n = "new") {
        return `${n === "old" ? KZ : ku}${t}`
      }
    },
    e9 = new Lu;
  var c9 = O(In(), 1);
  var QT = O(P(), 1);
  var zT = O(P(), 1);
  var n9 = O(xu(), 1),
    J5 = O(In(), 1);
  var t9 = _1.getLogger("ConfigService"),
    dr = class extends E5 {
      storagePrefix = "";
      defaultStorageValues = {
        installTime: 0,
        mainWindowMode: null,
        composeLanguage: null,
        shortCutEnableOption: {
          disabledAll: !1,
          disabledHosts: {}
        },
        buttonEnableOption: {
          disabledAll: !1,
          disabledHosts: {}
        },
        mainWindowSize: null,
        sidebarSize: null,
        uiFlags: {},
        triggerMode: "always",
        theme: "auto",
        language: "auto",
        provider: "chatgpt",
        "provider:gpt3": null,
        "provider:chatgpt": null,
        "ui:popup:hideShortcutsTip": !1,
        ratingTipShowTimes: 0,
        permissionGranted: !1
      };
      onInit() {
        t9.log("config service init", this.storage), J5.default.storage.local.onChanged.addListener(t => {
          let n = (0, n9.pick)(t, Object.keys(this.defaultStorageValues));
          Object.keys(n).length && (t9.log("config change"), this.emit("configChange", n))
        })
      }
      async get(t) {
        return this.storage.get(t)
      }
      async set(t, n) {
        this.storage.set(t, n)
      }
      async getAll() {
        return this.storage.getAll()
      }
      async update(t) {
        return this.storage.update(t)
      }
      openShortcutsPage() {
        J5.default.tabs.create({
          url: "chrome://extensions/shortcuts"
        })
      }
      openOptionsPage() {
        J5.default.runtime.openOptionsPage()
      }
      async getCommands() {
        return await J5.default.commands.getAll()
      }
      async keepAlive() {
        return "keep alive"
      }
      async getUiFlag(t) {
        return (await this.get("uiFlags"))[t]
      }
      async setUiFlag(t, n) {
        let a = await this.get("uiFlags");
        a[t] = n, await this.set("uiFlags", a)
      }
      async shouldShowRatingTip() {
        let t = await J5.default.storage.local.get("ratingTipShowTimes");
        if (t) {
          let a = t.ratingTipShowTimes;
          typeof a == "number" && (await J5.default.storage.local.remove("ratingTipShowTimes"), await this.set("ratingTipShowTimes", a))
        }
        let n = await this.get("ratingTipShowTimes");
        return n >= 5 ? !1 : (await this.set("ratingTipShowTimes", n + 1), n >= 2)
      }
      async getProviderConfigs() {
        let t = await this.get("provider");
        if (t === "gpt3") {
          let n = await this.get("provider:gpt3");
          return {
            provider: t,
            configs: n
          }
        }
        return {
          provider: t,
          configs: null
        }
      }
    };
  m0(dr, "serviceName", "ConfigService");
  var qT = O(P(), 1);
  var en = new _5(dr.serviceName, dr);
  var CO = O(P(), 1);
  var eO = O(P(), 1);
  var nO = O(P(), 1),
    jo = class {
      emitter;
      event;
      handler;
      destroyed = !1;
      listenBy;
      constructor(t, n, a, o) {
        this.event = t, this.handler = n, this.emitter = a, this.listenBy = o
      }
      unregister() {
        this.emitter.off(this.event, this), this._destroy()
      }
      _destroy() {
        return this.destroyed ? !1 : (this.handler = null, this.emitter = null, this.destroyed = !0, !0)
      }
    },
    Wo = class {
      _events = {};
      on(t, n) {
        if (!n) throw new TypeError("invalid handler! --EventEmitter");
        this._events[t] || (this._events[t] = []);
        let a = new jo(t, n, this, null);
        return this._events[t]?.push(a), a
      }
      listenBy(t, n, a) {
        if (!a) throw new TypeError("invalid handler! --EventEmitter");
        this._events[n] || (this._events[n] = []);
        let o = new jo(n, a, this, t);
        return this._events[n]?.push(o), o
      }
      once(t, n) {
        let a = this.on(t, o => {
          n(o), a.unregister()
        });
        return a
      }
      emit(t, n = null) {
        if (!this._events[t]) return !1;
        let a = [];
        for (let o of this._events[t]) o.destroyed || (a.push(o), o.handler.call(this, n));
        return !0
      }
      off(t, n) {
        if (!this._events[t]) return !1;
        if (n) {
          for (let a = this._events[t], o = 0; o < a.length; o++) {
            let s = a[o];
            if (s === n) return this._events[t] = this._events[t]?.filter(c => c !== s), this._events[t]?.length === 0 && delete this._events[t], !0
          }
          return console.error(n, this), console.error(`Cannot find listener of ${t} --EventEmitter`), !1
        }
        for (let a = this._events[t], o = 0; o < a.length; o++) {
          let s = a[o];
          this._events[t][o] = null, s._destroy()
        }
        return delete this._events[t], !0
      }
      stopListenBy(t) {
        for (let n in this._events) this._events[n] = this._events[n]?.filter(a => a.listenBy === t ? (a._destroy(), !1) : !0)
      }
      removeAllListeners() {
        for (let t in this._events) {
          let n = this._events[t];
          for (let a = n, o = 0; o < a.length; o++) n[o] = null;
          this._events[t] = null
        }
      }
    };
  var pO = O(P(), 1);
  var aO = O(P());

  function r9(e) {
    let t, n, a, o, s, c, h;
    return f(), {
      feed: p,
      reset: f
    };

    function f() {
      t = !0, n = "", a = 0, o = -1, s = void 0, c = void 0, h = ""
    }

    function p(M) {
      n = n ? n + M : M, t && QZ(n) && (n = n.slice(a9.length)), t = !1;
      let g = n.length,
        A = 0,
        x = !1;
      for (; A < g;) {
        x && (n[A] === `
` && ++A, x = !1);
        let k = -1,
          U = o,
          E;
        for (let y = a; k < 0 && y < g; ++y) E = n[y], E === ":" && U < 0 ? U = y - A : E === "\r" ? (x = !0, k = y - A) : E === `
` && (k = y - A);
        if (k < 0) {
          a = g - A, o = U;
          break
        } else a = 0, o = -1;
        _(n, A, U, k), A += k + 1
      }
      A === g ? n = "" : A > 0 && (n = n.slice(A))
    }

    function _(M, g, A, x) {
      if (x === 0) {
        h.length > 0 && (e({
          type: "event",
          id: s,
          event: c || void 0,
          data: h.slice(0, -1)
        }), h = "", s = void 0), c = void 0;
        return
      }
      let k = A < 0,
        U = M.slice(g, g + (k ? x : A)),
        E = 0;
      k ? E = x : M[g + A + 1] === " " ? E = A + 2 : E = A + 1;
      let y = g + E,
        C = x - E,
        b = M.slice(y, y + C).toString();
      if (U === "data") h += b ? "".concat(b, `
`) : `
`;
      else if (U === "event") c = b;
      else if (U === "id" && !b.includes("\0")) s = b;
      else if (U === "retry") {
        let S = parseInt(b, 10);
        Number.isNaN(S) || e({
          type: "reconnect-interval",
          value: S
        })
      }
    }
  }
  var a9 = [239, 187, 191];

  function QZ(e) {
    return a9.every((t, n) => e.charCodeAt(n) === t)
  }
  var Pu = _1.getLogger("ChatService"),
    e0 = class {
      onData = null
    },
    pr = class {
      constructor(t) {
        this.chatService = t
      }
      baseUrl = "https://chat.openai.com/backend-api";
      taskMap = {};
      modelNameMap = {};
      async getToken() {
        let t = await fetch("https://chat.openai.com/api/auth/session");
        if (t.status === 403) throw "CLOUDFLARE";
        let n = await t.json();
        if (n.accessToken) return n.accessToken;
        throw "UNAUTHORIZED"
      }
      async fetchModels(t) {
        return (await this.fetch({
          method: "GET",
          path: `${this.baseUrl}/models`,
          headers: this.getRequestHeader(t)
        })).models
      }
      async feedback(t, n) {
        return await this.fetch({
          method: "POST",
          path: `${this.baseUrl}/conversation/message_feedback`,
          headers: this.getRequestHeader(t),
          data: n
        })
      }
      cancelTask(t, n) {
        let a = this.taskMap[n.taskId];
        a && (a.abortController.abort(), delete this.taskMap[a.taskId])
      }
      async updateTitle(t, n) {
        return await this.fetch({
          method: "POST",
          path: `${this.baseUrl}/conversation/gen_title/${n.chatGptConvId}`,
          headers: this.getRequestHeader(t),
          data: {
            message_id: n.messageId,
            model: await this.getModelName(t, n.conversationId)
          }
        })
      }
      async getAnswer(t, n) {
        let a = new e0,
          o = new AbortController,
          s = {
            taskId: n.taskId,
            abortController: o,
            conversationId: n.conversationId
          };
        return this.doGetAnswer({
          token: t,
          taskInfo: s,
          params: n,
          resp: a
        }).catch(c => {
          a.onData?.(null, !0, c)
        }), a
      }
      async deleteConversation(t, n) {
        let {
          conversationId: a
        } = n;
        for (let c of Object.keys(this.taskMap)) this.taskMap[c].conversationId === a && this.cancelTask(t, {
          taskId: c
        });
        let s = (await this.chatService.getChatGptConversationMap())[a];
        if (!s) throw "CONVERSATION_NOT_FOUND";
        return this.chatService.removeChatGptConversationData(a), await this.fetch({
          path: `${this.baseUrl}/conversation/${s.chatGptConvId}`,
          method: "PATCH",
          headers: this.getRequestHeader(t),
          data: {
            isVisible: !1
          }
        })
      }
      async doGetAnswer(t) {
        let {
          token: n,
          taskInfo: a,
          params: o,
          resp: s
        } = t;
        this.taskMap[a.taskId] = a;
        let c = null,
          h = de.genId();
        await this.fetchCompletions({
          question: o,
          messageId: h,
          token: n,
          taskInfo: a,
          onMessage: f => {
            if (f === "[DONE]") {
              this.chatService.getChatGptConversationMap().then(p => {
                Pu.log("chat gpt resp msg:", {
                  ...c,
                  chatGptConvId: p[o.conversationId].chatGptConvId
                })
              }), s.onData?.(c, !0), this.cancelTask(n, {
                taskId: a.taskId
              });
              return
            }
            try {
              let p = JSON.parse(f);
              if (p.message?.author?.role !== "assistant") return;
              let _ = p.message?.content?.parts?.[0];
              _ && (this.chatService.getChatGptConversationMap().then(M => {
                let g = o.conversationId;
                M[g] || this.chatService.addChatGptConversationData(g, {
                  chatGptConvId: p.conversation_id,
                  createdAt: Date.now()
                })
              }), c = {
                content: _,
                parentMessageId: h,
                type: "answer",
                messageId: p.message.id,
                conversationId: o.conversationId
              }, s.onData?.(c, !1))
            } catch (p) {
              Pu.error("unsupported streaming msg:", p)
            }
          }
        })
      }
      async getModelName(t, n) {
        try {
          if (!this.modelNameMap[n]) {
            let o = (await en.get("provider:chatgpt"))?.modelType ?? "GPT-3.5 Turbo",
              s = await this.fetchModels(t),
              c;
            if (o === "Auto") {
              let h = s.find(f => f.slug === "gpt-4");
              c = h ? h.slug : s[0].slug
            } else c = s[0].slug;
            this.modelNameMap[n] = c
          }
          return this.modelNameMap[n]
        } catch (a) {
          return Pu.error(a), "text-davinci-002-render-sha"
        }
      }
      getRequestHeader(t) {
        return {
          "Content-Type": "application/json",
          Authorization: `Bearer ${t}`
        }
      }
      async fetchCompletions(t) {
        let {
          onMessage: n,
          taskInfo: a,
          question: o,
          messageId: s,
          token: c
        } = t, h = await this.chatService.getChatGptConversationMap(), f = await this.getModelName(c, o.conversationId), p = h[o.conversationId], _ = a.abortController.signal;
        if (_.aborted) return;
        let M = await this.fetch({
          method: "POST",
          path: `${this.baseUrl}/conversation`,
          headers: this.getRequestHeader(c),
          returnOriginResponse: !0,
          signal: a.abortController.signal,
          data: {
            action: "next",
            messages: [{
              id: s,
              role: "user",
              content: {
                contentType: "text",
                parts: [o.content]
              }
            }],
            conversationId: p ? p.chatGptConvId : void 0,
            model: f,
            parentMessageId: o.parentMessageId || de.genId()
          }
        });
        if (!M.ok) {
          let x = await M.json().catch();
          throw this.openApiErrorHandler(x)
        }
        let g = r9(x => {
          x.type === "event" && n(x.data)
        }),
          A = M.body.getReader();
        try {
          for (; !_.aborted;) {
            let {
              done: x,
              value: k
            } = await A.read();
            if (x) return;
            let U = new TextDecoder().decode(k);
            g.feed(U)
          }
        } catch {
          A.releaseLock()
        }
      }
      async fetch(t) {
        let n = de.underlize(t.data),
          a = await fetch(t.path, {
            method: t.method,
            headers: t.headers,
            body: n == null ? void 0 : JSON.stringify(n),
            signal: t.signal
          });
        if (a.status === 403) throw "CLOUDFLARE";
        if (t.returnOriginResponse) return a;
        if (a.ok) {
          let s = await a.json();
          return de.camelize(s)
        }
        let o = await a.json().catch(() => ({}));
        throw t.errorHandler ? t.errorHandler(o) : this.openApiErrorHandler(o)
      }
      openApiErrorHandler(t) {
        let n = "",
          a = "";
        if (t?.detail) {
          let o = t.detail;
          typeof o == "string" ? n = o : o.message && typeof o.message == "string" && (n = o.message, a = o.code)
        }
        return n ? n.includes("Too many requests") ? "TOO_MANY_REQUESTS" : n.includes("Unauthorized") || n.includes("expired") || a === "invalid_jwt" ? "UNAUTHORIZED" : n.includes("Not Found") ? "OPENAI_NOT_FOUND" : n : "UNKNOWN"
      }
    };
  var Jt = O(In(), 1),
    Ko = _1.getLogger("ChatService"),
    YZ = 3600 * 1e3 * 72,
    Qo = class {
      constructor(t, n) {
        this.storage = t;
        this.service = n;
        this.init().then(() => {
          this.chatGptRequester = new pr(this.service)
        }).catch(a => {
          Ko.error("ChatGptProvider init error", a)
        })
      }
      currentSenderPort;
      get currentSenderTabId() {
        return this.currentSenderPort?.sender?.tab?.id
      }
      pendingRequests = {};
      chatGptRequester;
      conversationMap;
      initReady = !1;
      events = new Wo;
      async init() {
        this.storage.removeDeprecated("chatGpt"), this.conversationMap = await this.loadConversationMap(), await this.removeOutdatedConversations(), Xe.isProd && this.initRequestSenderForProd(), Jt.default.runtime.onConnect.addListener(t => {
          t.name === "ChatGptRequestSender" && (Ko.log("ChatGptRequestSender connected"), this.currentSenderPort && this.disposeCurrentSenderPort(), this.currentSenderPort = t, t.onMessage.addListener(n => {
            this.pendingRequests[n.reqId](n)
          }), t.onDisconnect.addListener(() => {
            t === this.currentSenderPort && (this.currentSenderPort = void 0)
          }))
        }), this.initReady = !0, this.events.emit("initReady")
      }
      async loadConversationMap() {
        let t = await this.storage.get("chatGptConversationMap");
        return t || Ko.error("No conversationMap when init"), t || {}
      }
      initRequestSenderForProd() {
        this.searchAndInsertRequestSender(), Jt.default.tabs.onUpdated.addListener((t, n) => {
          Jt.default.tabs.get(t).then(a => {
            this.isTargetHost(a.url) && n.status === "complete" && (this.disposeCurrentSenderPort(), this.insertScriptToTab(t))
          })
        }), Jt.default.tabs.onRemoved.addListener(t => {
          t === this.currentSenderTabId && (this.disposeCurrentSenderPort(), this.searchAndInsertRequestSender())
        })
      }
      async createConversation() {
        return `conv:${de.genId()}`
      }
      async addConversationData(t, n) {
        this.conversationMap[t] = n, await this.saveConversationMap()
      }
      async removeConversationData(t) {
        delete this.conversationMap[t], await this.saveConversationMap()
      }
      async feedback(t) {
        return this.callRequestMethod("feedback", t)
      }
      async deleteConversation(t) {
        let n = this.conversationMap[t];
        !n || n.kept || this.callRequestMethod("deleteConversation", {
          conversationId: t
        })
      }
      cancelTask(t) {
        return this.callRequestMethod("cancelTask", {
          taskId: t
        })
      }
      getAnswer(t, n) {
        let a = `task:${de.genId()}`;
        return (async () => {
          let s = await en.get("language");
          t.parentMessageId || (t.content = de.addPromptLangSuffix(t.content, s)), this.callRequestMethod("getAnswer", {
            taskId: a,
            ...t
          }, n)
        })(), {
          taskId: a
        }
      }
      hasChatGptTab() {
        return !!this.currentSenderPort?.sender?.tab
      }
      focusChatGptTab(t = !1) {
        if (!this.hasChatGptTab()) return !1;
        let n = this.currentSenderPort.sender.tab;
        return Jt.default.windows.update(n.windowId, {
          focused: !0
        }), Jt.default.tabs.update(n.id, {
          active: !0
        }), t && Jt.default.tabs.reload(n.id), !0
      }
      createChatGptTab() {
        return Jt.default.windows.create({
          url: "https://chat.openai.com/chat",
          type: "normal",
          width: 200,
          focused: !0
        }), !0
      }
      async getConversationMap() {
        return this.initReady ? this.conversationMap : new Promise(t => {
          this.events.once("initReady", () => {
            t(this.conversationMap)
          })
        })
      }
      async saveConversationMap() {
        return this.storage.update({
          chatGptConversationMap: this.conversationMap
        })
      }
      async openInChatGptWebApp(t) {
        if (!this.conversationMap[t]) return;
        let n = this.conversationMap[t];
        Jt.default.tabs.create({
          url: `https://chat.openai.com/chat/${n.chatGptConvId}`,
          active: !0
        })
      }
      async keepConversation(t, n) {
        if (!this.conversationMap[t]) return;
        let a = this.conversationMap[t];
        a.kept = !0, this.saveConversationMap();
        let o = a.chatGptConvId,
          s = {
            conversationId: t,
            chatGptConvId: o,
            messageId: n
          };
        this.callRequestMethod("updateTitle", s)
      }
      async unKeepConversation(t) {
        this.conversationMap[t] && (this.conversationMap[t].kept = !1, this.saveConversationMap())
      }
      async updateToken(t) {
        await this.storage.set("chatGptToken", t)
      }
      isTargetHost(t) {
        return t?.includes("https://chat.openai.com")
      }
      isTargetTab(t) {
        return this.isTargetHost(t.url) && t.id
      }
      disposeCurrentSenderPort() {
        this.currentSenderPort && (this.currentSenderPort.disconnect(), this.currentSenderPort = void 0)
      }
      searchAndInsertRequestSender() {
        this.currentSenderPort || Jt.default.tabs.query({}).then(t => {
          for (let n of t)
            if (this.isTargetTab(n)) {
              this.insertScriptToTab(n.id);
              break
            }
        })
      }
      async insertScriptToTab(t) {
        Jt.default.scripting.executeScript({
          target: {
            tabId: t
          },
          files: ["chatGptInjection.js"]
        }), Jt.default.scripting.insertCSS({
          target: {
            tabId: t
          },
          files: ["chatGptInjection.css"]
        })
      }
      async callRequestMethod(t, n, a) {
        if (this.currentSenderPort) {
          let o = de.genId();
          return new Promise((s, c) => {
            this.pendingRequests[o] = f => {
              let {
                respType: p,
                data: _,
                finished: M,
                error: g
              } = f;
              p === "data" ? (a?.(_, M, this.normalizeError(g)), M && (s(null), delete this.pendingRequests[o])) : p === "resp" ? (s(_), delete this.pendingRequests[o]) : (c(_), delete this.pendingRequests[o])
            };
            let h = {
              event: "callMethod",
              reqId: o,
              data: {
                method: t,
                params: n
              }
            };
            this.currentSenderPort.postMessage(h)
          }).catch(s => {
            throw a?.(null, !0, this.normalizeError(s)), s
          })
        } else try {
          let o = await this.getToken(),
            s = await this.chatGptRequester[t](o, n);
          return s instanceof e0 ? (s.onData = (c, h, f) => {
            a?.(c, h, this.normalizeError(f))
          }, null) : s
        } catch (o) {
          throw a?.(null, !0, this.normalizeError(o)), o
        }
      }
      normalizeError(t) {
        return t === void 0 ? t : (Ko.error(t, JSON.stringify(t)), typeof t == "string" ? t : "UNKNOWN_OPENAI_ERROR")
      }
      async getToken(t = !0) {
        if (t) {
          let a = await this.storage.get("chatGptToken");
          if (a) return a
        }
        let n = await this.chatGptRequester.getToken();
        return await this.storage.update({
          chatGptToken: n
        }), n
      }
      async removeOutdatedConversations() {
        let t = this.conversationMap,
          n = Date.now();
        for (let a of Object.keys(t)) {
          let {
            createdAt: o = 0
          } = t[a];
          n - o > YZ && delete t[a]
        }
        await this.saveConversationMap()
      }
    };
  var kO = O(P(), 1);
  var Ru = _1.getLogger("ChatService"),
    o9 = 800,
    XZ = 3600 * 1e3 * 72,
    l9 = "A",
    s9 = "You",
    JZ = `
${l9}: `,
    Yo = class {
      constructor(t) {
        this.storage = t;
        this.removeOutdatedConversations()
      }
      pendingTasks = {};
      async createConversation() {
        return `conv:${de.genId()}`
      }
      async getAnswer(t, n) {
        let a = `task:${de.genId()}`,
          o = `msg:${de.genId()}`,
          s = t.conversationId;
        await this.addConversationMessage({
          ...t,
          messageId: o,
          type: "question"
        });
        let c = {
          conversationId: s,
          messageId: `msg:${de.genId()}`,
          type: "answer",
          content: ""
        },
          h = new AbortController,
          f = {
            taskId: a,
            conversationId: s,
            abortController: h
          };
        this.pendingTasks[a] = f;
        let p = !1;
        return this.fetchCompletions({
          convId: s,
          taskInfo: f,
          onData: _ => {
            c.content += _.text || "", n(c, _.finished, _.error), _.finished && (p = !0, Ru.debug("answer finished", c), this.addConversationMessage(c))
          },
          onAbort: () => {
            !p && c.content.trim() && (Ru.debug("aborted, save partial message", c), this.addConversationMessage(c))
          }
        }).catch(_ => {
          throw n(null, !0, `${_}`), _
        }), {
          taskId: a
        }
      }
      async cancelTask(t) {
        let n = this.pendingTasks[t];
        Ru.debug("cancel task", n), n && await this.handleTaskFinish(n)
      }
      async deleteConversation(t) {
        for (let a of Object.keys(this.pendingTasks)) this.pendingTasks[a].conversationId === t && this.cancelTask(a);
        let n = await this.getStore();
        delete n.conversations[t], this.saveStore(n)
      }
      async feedback(t) {
        return !0
      }
      async addConversationMessage(t) {
        let n = await this.getStore(),
          a = t.conversationId;
        n.conversations[a] || (n.conversations[a] = {
          messages: [],
          createdAt: Date.now()
        }), n.conversations[a].messages.push(t), await this.saveStore(n)
      }
      async getStore() {
        return this.storage.get("gpt3")
      }
      async saveStore(t) {
        return this.storage.set("gpt3", t)
      }
      async fetchCompletions(t) {
        let {
          taskInfo: n,
          onData: a,
          onAbort: o
        } = t;
        if (n.abortController.signal.aborted) return;
        let c = await this.getProviderConfigs(),
          {
            apiKey: h,
            modelType: f = "chat_model",
            apiHost: p
          } = c || {},
          _, M = p?.trim() || zp;
        if (f === "chat_model" ? _ = await this.fetchChatCompletions(t, h, M) : _ = await this.fetchTextCompletions(t, h, M), _.status !== 200) throw `${_.statusText}(${_.status})`;
        let g = _.body?.pipeThrough(new TextDecoderStream).getReader(),
          A = !1;
        for (; ;) {
          let x;
          try {
            x = await g?.read()
          } catch {
            o();
            return
          }
          if (!x || x.done) return;
          let U = x.value.split(/\r?\n\r?\n/);
          for (let E of U) {
            let y = E.replace(/^data: /, ""),
              C;
            f === "chat_model" ? C = L => {
              let V = L.choices[0];
              return V.finish_reason ? {
                text: "",
                finished: !0
              } : {
                text: V.delta?.content || "",
                finished: !1
              }
            } : C = L => {
              let V = L.choices[0];
              return V.finish_reason ? {
                text: "",
                finished: !0
              } : {
                text: V.text,
                finished: !1
              }
            };
            let b = this.parseStreamResult(y, C),
              {
                text: S
              } = b;
            if (A || (S = S.replace(/^\n*/, "")), S.length > 0 && (A = !0), a({
              text: S,
              finished: b.finished
            }), b.finished) {
              this.handleTaskFinish(n);
              return
            }
          }
        }
      }
      async fetchTextCompletions(t, n, a) {
        let o = await this.createPrompt(t.convId);
        return fetch(`${a}/v1/completions`, {
          headers: this.getHeaders(n),
          method: "POST",
          signal: t.taskInfo.abortController.signal,
          body: JSON.stringify({
            model: mu["text_model"],
            prompt: o,
            stream: !0,
            temperature: .3,
            stop: JZ,
            max_tokens: o9
          })
        })
      }
      async fetchChatCompletions(t, n, a) {
        return fetch(`${a}/v1/chat/completions`, {
          headers: this.getHeaders(n),
          method: "POST",
          signal: t.taskInfo.abortController.signal,
          body: JSON.stringify({
            model: mu["chat_model"],
            messages: await this.createPromptMessages(t.convId),
            stream: !0,
            temperature: .5,
            max_tokens: o9
          })
        })
      }
      async createPrompt(t) {
        let n = await this.getStore(),
          a = await en.getAll(),
          o = a.language,
          h = (a["provider:gpt3"]?.guideType || "default") === "default" ? Up : Fp;
        return n.conversations[t].messages.forEach((f, p) => {
          let _ = f.type === "question" ? l9 : s9,
            M = f.content.trim();
          p === 0 && (M = de.addPromptLangSuffix(M, o)), h += `${_}: ${M}
`
        }), h += `${s9}:`, h
      }
      async createPromptMessages(t) {
        let n = await this.getStore(),
          a = await en.getAll(),
          o = a.language,
          h = [{
            role: "system",
            content: (a["provider:gpt3"]?.guideType || "default") === "default" ? Gp : Bp
          }];
        return n.conversations[t].messages.forEach((f, p) => {
          let _ = f.type === "question" ? "user" : "assistant",
            M = f.content.trim();
          p === 0 && (M = de.addPromptLangSuffix(M, o)), h.push({
            role: _,
            content: M
          })
        }), h
      }
      getHeaders(t) {
        return {
          "Content-Type": "application/json",
          Authorization: `Bearer ${t}`
        }
      }
      parseStreamResult(t, n) {
        if (!t) return {
          text: "",
          finished: !1
        };
        if (t === "[DONE]") return {
          text: "",
          finished: !0
        };
        let a = JSON.parse(t);
        if (a.error) throw typeof a.error == "string" ? a.error : a.error?.message || "UNKNOWN_OPENAI_ERROR";
        return n(a)
      }
      async handleTaskFinish(t) {
        t.abortController.abort(), delete this.pendingTasks[t.taskId]
      }
      async getProviderConfigs() {
        let {
          configs: t
        } = await en.getProviderConfigs();
        return t
      }
      async removeOutdatedConversations() {
        let t = await this.getStore(),
          n = Date.now();
        for (let a of Object.keys(t.conversations)) {
          let {
            createdAt: o = 0
          } = t.conversations[a];
          n - o > XZ && delete t.conversations[a]
        }
        await this.saveStore(t)
      }
    };
  var mr = class extends E5 {
    storagePrefix = "chat";
    defaultStorageValues = {
      tabConversationMap: {},
      gpt3: {
        conversations: {}
      },
      chatGptToken: null,
      chatGptConversationMap: {}
    };
    providers;
    onInit() {
      this.providers = {
        chatGpt: new Qo(this.storage, this),
        gpt3: new Yo(this.storage)
      }, c9.default.tabs.onRemoved.addListener(async t => {
        this.onTabUnload(t)
      })
    }
    async createConversation() {
      let t = this.lastCaller?.tabId,
        n;
      if (await this.getProviderType() === "gpt3" && (n = await this.providers.gpt3.createConversation()), n = await this.providers.chatGpt.createConversation(), t) {
        let a = await this.storage.get("tabConversationMap");
        a[t] = n, await this.storage.update({
          tabConversationMap: a
        })
      }
      return n
    }
    async getAnswer(t, n) {
      return await this.getProviderType() === "gpt3" ? this.providers.gpt3.getAnswer(t, n) : this.providers.chatGpt.getAnswer(t, n)
    }
    async feedback(t) {
      return await this.getProviderType() === "gpt3" ? this.providers.gpt3.feedback(t) : this.providers.chatGpt.feedback(t)
    }
    createShare(t, n) {
      return e9.createShare({
        messages: t,
        modelName: n
      })
    }
    async cancelTask(t) {
      return await this.getProviderType() === "gpt3" ? this.providers.gpt3.cancelTask(t) : this.providers.chatGpt.cancelTask(t)
    }
    async addChatGptConversationData(t, n) {
      return this.providers.chatGpt.addConversationData(t, n)
    }
    async removeChatGptConversationData(t) {
      return this.providers.chatGpt.removeConversationData(t)
    }
    async deleteConversation(t) {
      await Promise.all([this.providers.gpt3.deleteConversation(t), this.providers.chatGpt.deleteConversation(t)])
    }
    async getChatGptConversationMap() {
      return this.providers.chatGpt.getConversationMap()
    }
    async clearChatGptToken() {
      await this.storage.update({
        chatGptToken: null
      })
    }
    openInChatGptWebApp(t) {
      this.providers.chatGpt.openInChatGptWebApp(t)
    }
    async keepChatGptConversation(t, n) {
      this.providers.chatGpt.keepConversation(t, n)
    }
    async unKeepChatGptConversation(t) {
      this.providers.chatGpt.unKeepConversation(t)
    }
    updateChatGptToken(t) {
      return this.providers.chatGpt.updateToken(t)
    }
    async onTabUnload(t) {
      let n = await this.storage.get("tabConversationMap"),
        a = n[t];
      a && (this.deleteConversation(a), delete n[t]);
      for (let o of Object.keys(n)) await de.tryGetTab(o) || (this.deleteConversation(a), delete n[o]);
      await this.storage.update({
        tabConversationMap: n
      })
    }
    async getProviderType() {
      return en.get("provider")
    }
  };
  m0(mr, "serviceName", "ChatService");
  var BO = O(P(), 1);
  var Vu = new _5(mr.serviceName, mr);
  var u9 = O(In(), 1),
    Xo = class {
      chatGptRequest = new pr(Vu);
      token = null;
      constructor() {
        this.init()
      }
      init() {
        let t = u9.default.runtime.connect({
          name: "ChatGptRequestSender"
        });
        t.onMessage.addListener(async n => {
          if (n.event === "close") t.disconnect();
          else if (n.event === "callMethod") {
            let {
              reqId: a,
              data: o
            } = n, {
              method: s,
              params: c
            } = o;
            try {
              let h = await this.getToken(),
                f = await this.chatGptRequest[s](h, c);
              if (f instanceof e0) f.onData = (p, _, M) => {
                let g = {
                  respType: "data",
                  reqId: a,
                  data: p,
                  finished: _,
                  error: M
                };
                t.postMessage(g)
              };
              else {
                let p = {
                  respType: "resp",
                  reqId: a,
                  data: f
                };
                t.postMessage(p)
              }
            } catch (h) {
              let f = {
                respType: "error",
                reqId: a,
                data: h
              };
              t.postMessage(f)
            }
          }
        }), this.getToken().then(n => {
          n && Vu.updateChatGptToken(n)
        })
      }
      async getToken(t = !0) {
        if (t && this.token) return this.token;
        let n = await this.chatGptRequest.getToken();
        return this.token = n, n
      }
    };
  var f9 = O(Q5(), 1),
    Nu = class {
      rootId = `${Xe.extensionPrefix}-hint`;
      constructor() {
        this.init()
      }
      init() {
        this.injectSender(), this.injectHint()
      }
      injectSender() {
        new Xo
      }
      injectHint() {
        let t = document.createElement("div");
        t.id = this.rootId, (0, h9.createRoot)(t).render((0, f9.jsx)(Jp, {})), document.body.appendChild(t)
      }
    };
  new Nu;
})();