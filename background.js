"use strict";
(() => {
  var iv = Object.create;
  var Ws = Object.defineProperty;
  var sv = Object.getOwnPropertyDescriptor;
  var ov = Object.getOwnPropertyNames;
  var av = Object.getPrototypeOf,
    uv = Object.prototype.hasOwnProperty;
  var cv = (u, r, s) => (r in u ? Ws(u, r, { enumerable: !0, configurable: !0, writable: !0, value: s }) : (u[r] = s));
  var cr = (u, r) => () => (r || u((r = { exports: {} }).exports, r), r.exports);
  var lv = (u, r, s, a) => {
    if ((r && typeof r == "object") || typeof r == "function") for (let p of ov(r)) !uv.call(u, p) && p !== s && Ws(u, p, { get: () => r[p], enumerable: !(a = sv(r, p)) || a.enumerable });
    return u;
  };
  var A = (u, r, s) => ((s = u != null ? iv(av(u)) : {}), lv(r || !u || !u.__esModule ? Ws(s, "default", { value: u, enumerable: !0 }) : s, u));
  var _t = (u, r, s) => (cv(u, typeof r != "symbol" ? r + "" : r, s), s);
  var E = cr(() => {
    "use strict";
    globalThis && (globalThis.__aichat_envvars__ = { dev: !1, prod: !0, host: "https://webapp.chatgpt4google.com", project: "c4g" });
  });
  var ju = cr((Vs, Ks) => {
    var Mv = A(E());
    (function (u, r) {
      typeof Vs == "object" && typeof Ks < "u" ? (Ks.exports = r()) : typeof define == "function" && define.amd ? define(r) : ((u = typeof globalThis < "u" ? globalThis : u || self).dayjs = r());
    })(Vs, function () {
      "use strict";
      var u = 1e3,
        r = 6e4,
        s = 36e5,
        a = "millisecond",
        p = "second",
        m = "minute",
        C = "hour",
        w = "day",
        P = "week",
        M = "month",
        N = "quarter",
        q = "year",
        y = "date",
        v = "Invalid Date",
        x = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
        D = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
        W = {
          name: "en",
          weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
          months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
          ordinal: function (G) {
            var B = ["th", "st", "nd", "rd"],
              O = G % 100;
            return "[" + G + (B[(O - 20) % 10] || B[O] || B[0]) + "]";
          },
        },
        H = function (G, B, O) {
          var J = String(G);
          return !J || J.length >= B ? G : "" + Array(B + 1 - J.length).join(O) + G;
        },
        te = {
          s: H,
          z: function (G) {
            var B = -G.utcOffset(),
              O = Math.abs(B),
              J = Math.floor(O / 60),
              F = O % 60;
            return (B <= 0 ? "+" : "-") + H(J, 2, "0") + ":" + H(F, 2, "0");
          },
          m: function G(B, O) {
            if (B.date() < O.date()) return -G(O, B);
            var J = 12 * (O.year() - B.year()) + (O.month() - B.month()),
              F = B.clone().add(J, M),
              Q = O - F < 0,
              ne = B.clone().add(J + (Q ? -1 : 1), M);
            return +(-(J + (O - F) / (Q ? F - ne : ne - F)) || 0);
          },
          a: function (G) {
            return G < 0 ? Math.ceil(G) || 0 : Math.floor(G);
          },
          p: function (G) {
            return (
              { M, y: q, w: P, d: w, D: y, h: C, m, s: p, ms: a, Q: N }[G] ||
              String(G || "")
                .toLowerCase()
                .replace(/s$/, "")
            );
          },
          u: function (G) {
            return G === void 0;
          },
        },
        X = "en",
        I = {};
      I[X] = W;
      var b = function (G) {
        return G instanceof Ee;
      },
        L = function G(B, O, J) {
          var F;
          if (!B) return X;
          if (typeof B == "string") {
            var Q = B.toLowerCase();
            I[Q] && (F = Q), O && ((I[Q] = O), (F = Q));
            var ne = B.split("-");
            if (!F && ne.length > 1) return G(ne[0]);
          } else {
            var pe = B.name;
            (I[pe] = B), (F = pe);
          }
          return !J && F && (X = F), F || (!J && X);
        },
        U = function (G, B) {
          if (b(G)) return G.clone();
          var O = typeof B == "object" ? B : {};
          return (O.date = G), (O.args = arguments), new Ee(O);
        },
        V = te;
      (V.l = L),
        (V.i = b),
        (V.w = function (G, B) {
          return U(G, { locale: B.$L, utc: B.$u, x: B.$x, $offset: B.$offset });
        });
      var Ee = (function () {
        function G(O) {
          (this.$L = L(O.locale, null, !0)), this.parse(O);
        }
        var B = G.prototype;
        return (
          (B.parse = function (O) {
            (this.$d = (function (J) {
              var F = J.date,
                Q = J.utc;
              if (F === null) return new Date(NaN);
              if (V.u(F)) return new Date();
              if (F instanceof Date) return new Date(F);
              if (typeof F == "string" && !/Z$/i.test(F)) {
                var ne = F.match(x);
                if (ne) {
                  var pe = ne[2] - 1 || 0,
                    fe = (ne[7] || "0").substring(0, 3);
                  return Q ? new Date(Date.UTC(ne[1], pe, ne[3] || 1, ne[4] || 0, ne[5] || 0, ne[6] || 0, fe)) : new Date(ne[1], pe, ne[3] || 1, ne[4] || 0, ne[5] || 0, ne[6] || 0, fe);
                }
              }
              return new Date(F);
            })(O)),
              (this.$x = O.x || {}),
              this.init();
          }),
          (B.init = function () {
            var O = this.$d;
            (this.$y = O.getFullYear()),
              (this.$M = O.getMonth()),
              (this.$D = O.getDate()),
              (this.$W = O.getDay()),
              (this.$H = O.getHours()),
              (this.$m = O.getMinutes()),
              (this.$s = O.getSeconds()),
              (this.$ms = O.getMilliseconds());
          }),
          (B.$utils = function () {
            return V;
          }),
          (B.isValid = function () {
            return this.$d.toString() !== v;
          }),
          (B.isSame = function (O, J) {
            var F = U(O);
            return this.startOf(J) <= F && F <= this.endOf(J);
          }),
          (B.isAfter = function (O, J) {
            return U(O) < this.startOf(J);
          }),
          (B.isBefore = function (O, J) {
            return this.endOf(J) < U(O);
          }),
          (B.$g = function (O, J, F) {
            return V.u(O) ? this[J] : this.set(F, O);
          }),
          (B.unix = function () {
            return Math.floor(this.valueOf() / 1e3);
          }),
          (B.valueOf = function () {
            return this.$d.getTime();
          }),
          (B.startOf = function (O, J) {
            var F = this,
              Q = !!V.u(J) || J,
              ne = V.p(O),
              pe = function (lt, Re) {
                var It = V.w(F.$u ? Date.UTC(F.$y, Re, lt) : new Date(F.$y, Re, lt), F);
                return Q ? It : It.endOf(w);
              },
              fe = function (lt, Re) {
                return V.w(F.toDate()[lt].apply(F.toDate("s"), (Q ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(Re)), F);
              },
              xe = this.$W,
              De = this.$M,
              St = this.$D,
              Fe = "set" + (this.$u ? "UTC" : "");
            switch (ne) {
              case q:
                return Q ? pe(1, 0) : pe(31, 11);
              case M:
                return Q ? pe(1, De) : pe(0, De + 1);
              case P:
                var kt = this.$locale().weekStart || 0,
                  cn = (xe < kt ? xe + 7 : xe) - kt;
                return pe(Q ? St - cn : St + (6 - cn), De);
              case w:
              case y:
                return fe(Fe + "Hours", 0);
              case C:
                return fe(Fe + "Minutes", 1);
              case m:
                return fe(Fe + "Seconds", 2);
              case p:
                return fe(Fe + "Milliseconds", 3);
              default:
                return this.clone();
            }
          }),
          (B.endOf = function (O) {
            return this.startOf(O, !1);
          }),
          (B.$set = function (O, J) {
            var F,
              Q = V.p(O),
              ne = "set" + (this.$u ? "UTC" : ""),
              pe = ((F = {}),
                (F[w] = ne + "Date"),
                (F[y] = ne + "Date"),
                (F[M] = ne + "Month"),
                (F[q] = ne + "FullYear"),
                (F[C] = ne + "Hours"),
                (F[m] = ne + "Minutes"),
                (F[p] = ne + "Seconds"),
                (F[a] = ne + "Milliseconds"),
                F)[Q],
              fe = Q === w ? this.$D + (J - this.$W) : J;
            if (Q === M || Q === q) {
              var xe = this.clone().set(y, 1);
              xe.$d[pe](fe), xe.init(), (this.$d = xe.set(y, Math.min(this.$D, xe.daysInMonth())).$d);
            } else pe && this.$d[pe](fe);
            return this.init(), this;
          }),
          (B.set = function (O, J) {
            return this.clone().$set(O, J);
          }),
          (B.get = function (O) {
            return this[V.p(O)]();
          }),
          (B.add = function (O, J) {
            var F,
              Q = this;
            O = Number(O);
            var ne = V.p(J),
              pe = function (De) {
                var St = U(Q);
                return V.w(St.date(St.date() + Math.round(De * O)), Q);
              };
            if (ne === M) return this.set(M, this.$M + O);
            if (ne === q) return this.set(q, this.$y + O);
            if (ne === w) return pe(1);
            if (ne === P) return pe(7);
            var fe = ((F = {}), (F[m] = r), (F[C] = s), (F[p] = u), F)[ne] || 1,
              xe = this.$d.getTime() + O * fe;
            return V.w(xe, this);
          }),
          (B.subtract = function (O, J) {
            return this.add(-1 * O, J);
          }),
          (B.format = function (O) {
            var J = this,
              F = this.$locale();
            if (!this.isValid()) return F.invalidDate || v;
            var Q = O || "YYYY-MM-DDTHH:mm:ssZ",
              ne = V.z(this),
              pe = this.$H,
              fe = this.$m,
              xe = this.$M,
              De = F.weekdays,
              St = F.months,
              Fe = function (Re, It, Qt, Mt) {
                return (Re && (Re[It] || Re(J, Q))) || Qt[It].slice(0, Mt);
              },
              kt = function (Re) {
                return V.s(pe % 12 || 12, Re, "0");
              },
              cn =
                F.meridiem ||
                function (Re, It, Qt) {
                  var Mt = Re < 12 ? "AM" : "PM";
                  return Qt ? Mt.toLowerCase() : Mt;
                },
              lt = {
                YY: String(this.$y).slice(-2),
                YYYY: this.$y,
                M: xe + 1,
                MM: V.s(xe + 1, 2, "0"),
                MMM: Fe(F.monthsShort, xe, St, 3),
                MMMM: Fe(St, xe),
                D: this.$D,
                DD: V.s(this.$D, 2, "0"),
                d: String(this.$W),
                dd: Fe(F.weekdaysMin, this.$W, De, 2),
                ddd: Fe(F.weekdaysShort, this.$W, De, 3),
                dddd: De[this.$W],
                H: String(pe),
                HH: V.s(pe, 2, "0"),
                h: kt(1),
                hh: kt(2),
                a: cn(pe, fe, !0),
                A: cn(pe, fe, !1),
                m: String(fe),
                mm: V.s(fe, 2, "0"),
                s: String(this.$s),
                ss: V.s(this.$s, 2, "0"),
                SSS: V.s(this.$ms, 3, "0"),
                Z: ne,
              };
            return Q.replace(D, function (Re, It) {
              return It || lt[Re] || ne.replace(":", "");
            });
          }),
          (B.utcOffset = function () {
            return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
          }),
          (B.diff = function (O, J, F) {
            var Q,
              ne = V.p(J),
              pe = U(O),
              fe = (pe.utcOffset() - this.utcOffset()) * r,
              xe = this - pe,
              De = V.m(this, pe);
            return (De = ((Q = {}), (Q[q] = De / 12), (Q[M] = De), (Q[N] = De / 3), (Q[P] = (xe - fe) / 6048e5), (Q[w] = (xe - fe) / 864e5), (Q[C] = xe / s), (Q[m] = xe / r), (Q[p] = xe / u), Q)[ne] || xe), F ? De : V.a(De);
          }),
          (B.daysInMonth = function () {
            return this.endOf(M).$D;
          }),
          (B.$locale = function () {
            return I[this.$L];
          }),
          (B.locale = function (O, J) {
            if (!O) return this.$L;
            var F = this.clone(),
              Q = L(O, J, !0);
            return Q && (F.$L = Q), F;
          }),
          (B.clone = function () {
            return V.w(this.$d, this);
          }),
          (B.toDate = function () {
            return new Date(this.valueOf());
          }),
          (B.toJSON = function () {
            return this.isValid() ? this.toISOString() : null;
          }),
          (B.toISOString = function () {
            return this.$d.toISOString();
          }),
          (B.toString = function () {
            return this.$d.toUTCString();
          }),
          G
        );
      })(),
        qe = Ee.prototype;
      return (
        (U.prototype = qe),
        [
          ["$ms", a],
          ["$s", p],
          ["$m", m],
          ["$H", C],
          ["$W", w],
          ["$M", M],
          ["$y", q],
          ["$D", y],
        ].forEach(function (G) {
          qe[G[1]] = function (B) {
            return this.$g(B, G[0], G[1]);
          };
        }),
        (U.extend = function (G, B) {
          return G.$i || (G(B, Ee, U), (G.$i = !0)), U;
        }),
        (U.locale = L),
        (U.isDayjs = b),
        (U.unix = function (G) {
          return U(1e3 * G);
        }),
        (U.en = I[X]),
        (U.Ls = I),
        (U.p = {}),
        U
      );
    });
  });
  var ec = cr((Qs, zs) => {
    var Ov = A(E());
    (function (u, r) {
      typeof Qs == "object" && typeof zs < "u" ? (zs.exports = r()) : typeof define == "function" && define.amd ? define(r) : ((u = typeof globalThis < "u" ? globalThis : u || self).dayjs_plugin_relativeTime = r());
    })(Qs, function () {
      "use strict";
      return function (u, r, s) {
        u = u || {};
        var a = r.prototype,
          p = { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" };
        function m(w, P, M, N) {
          return a.fromToBase(w, P, M, N);
        }
        (s.en.relativeTime = p),
          (a.fromToBase = function (w, P, M, N, q) {
            for (
              var y,
              v,
              x,
              D = M.$locale().relativeTime || p,
              W = u.thresholds || [
                { l: "s", r: 44, d: "second" },
                { l: "m", r: 89 },
                { l: "mm", r: 44, d: "minute" },
                { l: "h", r: 89 },
                { l: "hh", r: 21, d: "hour" },
                { l: "d", r: 35 },
                { l: "dd", r: 25, d: "day" },
                { l: "M", r: 45 },
                { l: "MM", r: 10, d: "month" },
                { l: "y", r: 17 },
                { l: "yy", d: "year" },
              ],
              H = W.length,
              te = 0;
              te < H;
              te += 1
            ) {
              var X = W[te];
              X.d && (y = N ? s(w).diff(M, X.d, !0) : M.diff(w, X.d, !0));
              var I = (u.rounding || Math.round)(Math.abs(y));
              if (((x = y > 0), I <= X.r || !X.r)) {
                I <= 1 && te > 0 && (X = W[te - 1]);
                var b = D[X.l];
                q && (I = q("" + I)), (v = typeof b == "string" ? b.replace("%d", I) : b(I, P, X.l, x));
                break;
              }
            }
            if (P) return v;
            var L = x ? D.future : D.past;
            return typeof L == "function" ? L(v) : L.replace("%s", v);
          }),
          (a.to = function (w, P) {
            return m(w, P, this, !0);
          }),
          (a.from = function (w, P) {
            return m(w, P, this);
          });
        var C = function (w) {
          return w.$u ? s.utc() : s();
        };
        (a.toNow = function (w) {
          return this.to(C(this), w);
        }),
          (a.fromNow = function (w) {
            return this.from(C(this), w);
          });
      };
    });
  });
  var ut = cr((Xs, nc) => {
    var zv = A(E());
    (function (u, r) {
      if (typeof define == "function" && define.amd) define("webextension-polyfill", ["module"], r);
      else if (typeof Xs < "u") r(nc);
      else {
        var s = { exports: {} };
        r(s), (u.browser = s.exports);
      }
    })(typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : Xs, function (u) {
      "use strict";
      if (!globalThis.chrome?.runtime?.id) throw new Error("This script should only be loaded in a browser extension.");
      if (typeof globalThis.browser > "u" || Object.getPrototypeOf(globalThis.browser) !== Object.prototype) {
        let r = "The message port closed before a response was received.",
          s = (a) => {
            let p = {
              alarms: { clear: { minArgs: 0, maxArgs: 1 }, clearAll: { minArgs: 0, maxArgs: 0 }, get: { minArgs: 0, maxArgs: 1 }, getAll: { minArgs: 0, maxArgs: 0 } },
              bookmarks: {
                create: { minArgs: 1, maxArgs: 1 },
                get: { minArgs: 1, maxArgs: 1 },
                getChildren: { minArgs: 1, maxArgs: 1 },
                getRecent: { minArgs: 1, maxArgs: 1 },
                getSubTree: { minArgs: 1, maxArgs: 1 },
                getTree: { minArgs: 0, maxArgs: 0 },
                move: { minArgs: 2, maxArgs: 2 },
                remove: { minArgs: 1, maxArgs: 1 },
                removeTree: { minArgs: 1, maxArgs: 1 },
                search: { minArgs: 1, maxArgs: 1 },
                update: { minArgs: 2, maxArgs: 2 },
              },
              browserAction: {
                disable: { minArgs: 0, maxArgs: 1, fallbackToNoCallback: !0 },
                enable: { minArgs: 0, maxArgs: 1, fallbackToNoCallback: !0 },
                getBadgeBackgroundColor: { minArgs: 1, maxArgs: 1 },
                getBadgeText: { minArgs: 1, maxArgs: 1 },
                getPopup: { minArgs: 1, maxArgs: 1 },
                getTitle: { minArgs: 1, maxArgs: 1 },
                openPopup: { minArgs: 0, maxArgs: 0 },
                setBadgeBackgroundColor: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                setBadgeText: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                setIcon: { minArgs: 1, maxArgs: 1 },
                setPopup: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                setTitle: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
              },
              browsingData: {
                remove: { minArgs: 2, maxArgs: 2 },
                removeCache: { minArgs: 1, maxArgs: 1 },
                removeCookies: { minArgs: 1, maxArgs: 1 },
                removeDownloads: { minArgs: 1, maxArgs: 1 },
                removeFormData: { minArgs: 1, maxArgs: 1 },
                removeHistory: { minArgs: 1, maxArgs: 1 },
                removeLocalStorage: { minArgs: 1, maxArgs: 1 },
                removePasswords: { minArgs: 1, maxArgs: 1 },
                removePluginData: { minArgs: 1, maxArgs: 1 },
                settings: { minArgs: 0, maxArgs: 0 },
              },
              commands: { getAll: { minArgs: 0, maxArgs: 0 } },
              contextMenus: { remove: { minArgs: 1, maxArgs: 1 }, removeAll: { minArgs: 0, maxArgs: 0 }, update: { minArgs: 2, maxArgs: 2 } },
              cookies: { get: { minArgs: 1, maxArgs: 1 }, getAll: { minArgs: 1, maxArgs: 1 }, getAllCookieStores: { minArgs: 0, maxArgs: 0 }, remove: { minArgs: 1, maxArgs: 1 }, set: { minArgs: 1, maxArgs: 1 } },
              devtools: {
                inspectedWindow: { eval: { minArgs: 1, maxArgs: 2, singleCallbackArg: !1 } },
                panels: { create: { minArgs: 3, maxArgs: 3, singleCallbackArg: !0 }, elements: { createSidebarPane: { minArgs: 1, maxArgs: 1 } } },
              },
              downloads: {
                cancel: { minArgs: 1, maxArgs: 1 },
                download: { minArgs: 1, maxArgs: 1 },
                erase: { minArgs: 1, maxArgs: 1 },
                getFileIcon: { minArgs: 1, maxArgs: 2 },
                open: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                pause: { minArgs: 1, maxArgs: 1 },
                removeFile: { minArgs: 1, maxArgs: 1 },
                resume: { minArgs: 1, maxArgs: 1 },
                search: { minArgs: 1, maxArgs: 1 },
                show: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
              },
              extension: { isAllowedFileSchemeAccess: { minArgs: 0, maxArgs: 0 }, isAllowedIncognitoAccess: { minArgs: 0, maxArgs: 0 } },
              history: {
                addUrl: { minArgs: 1, maxArgs: 1 },
                deleteAll: { minArgs: 0, maxArgs: 0 },
                deleteRange: { minArgs: 1, maxArgs: 1 },
                deleteUrl: { minArgs: 1, maxArgs: 1 },
                getVisits: { minArgs: 1, maxArgs: 1 },
                search: { minArgs: 1, maxArgs: 1 },
              },
              i18n: { detectLanguage: { minArgs: 1, maxArgs: 1 }, getAcceptLanguages: { minArgs: 0, maxArgs: 0 } },
              identity: { launchWebAuthFlow: { minArgs: 1, maxArgs: 1 } },
              idle: { queryState: { minArgs: 1, maxArgs: 1 } },
              management: { get: { minArgs: 1, maxArgs: 1 }, getAll: { minArgs: 0, maxArgs: 0 }, getSelf: { minArgs: 0, maxArgs: 0 }, setEnabled: { minArgs: 2, maxArgs: 2 }, uninstallSelf: { minArgs: 0, maxArgs: 1 } },
              notifications: { clear: { minArgs: 1, maxArgs: 1 }, create: { minArgs: 1, maxArgs: 2 }, getAll: { minArgs: 0, maxArgs: 0 }, getPermissionLevel: { minArgs: 0, maxArgs: 0 }, update: { minArgs: 2, maxArgs: 2 } },
              pageAction: {
                getPopup: { minArgs: 1, maxArgs: 1 },
                getTitle: { minArgs: 1, maxArgs: 1 },
                hide: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                setIcon: { minArgs: 1, maxArgs: 1 },
                setPopup: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                setTitle: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                show: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
              },
              permissions: { contains: { minArgs: 1, maxArgs: 1 }, getAll: { minArgs: 0, maxArgs: 0 }, remove: { minArgs: 1, maxArgs: 1 }, request: { minArgs: 1, maxArgs: 1 } },
              runtime: {
                getBackgroundPage: { minArgs: 0, maxArgs: 0 },
                getPlatformInfo: { minArgs: 0, maxArgs: 0 },
                openOptionsPage: { minArgs: 0, maxArgs: 0 },
                requestUpdateCheck: { minArgs: 0, maxArgs: 0 },
                sendMessage: { minArgs: 1, maxArgs: 3 },
                sendNativeMessage: { minArgs: 2, maxArgs: 2 },
                setUninstallURL: { minArgs: 1, maxArgs: 1 },
              },
              sessions: { getDevices: { minArgs: 0, maxArgs: 1 }, getRecentlyClosed: { minArgs: 0, maxArgs: 1 }, restore: { minArgs: 0, maxArgs: 1 } },
              storage: {
                local: { clear: { minArgs: 0, maxArgs: 0 }, get: { minArgs: 0, maxArgs: 1 }, getBytesInUse: { minArgs: 0, maxArgs: 1 }, remove: { minArgs: 1, maxArgs: 1 }, set: { minArgs: 1, maxArgs: 1 } },
                managed: { get: { minArgs: 0, maxArgs: 1 }, getBytesInUse: { minArgs: 0, maxArgs: 1 } },
                sync: { clear: { minArgs: 0, maxArgs: 0 }, get: { minArgs: 0, maxArgs: 1 }, getBytesInUse: { minArgs: 0, maxArgs: 1 }, remove: { minArgs: 1, maxArgs: 1 }, set: { minArgs: 1, maxArgs: 1 } },
              },
              tabs: {
                captureVisibleTab: { minArgs: 0, maxArgs: 2 },
                create: { minArgs: 1, maxArgs: 1 },
                detectLanguage: { minArgs: 0, maxArgs: 1 },
                discard: { minArgs: 0, maxArgs: 1 },
                duplicate: { minArgs: 1, maxArgs: 1 },
                executeScript: { minArgs: 1, maxArgs: 2 },
                get: { minArgs: 1, maxArgs: 1 },
                getCurrent: { minArgs: 0, maxArgs: 0 },
                getZoom: { minArgs: 0, maxArgs: 1 },
                getZoomSettings: { minArgs: 0, maxArgs: 1 },
                goBack: { minArgs: 0, maxArgs: 1 },
                goForward: { minArgs: 0, maxArgs: 1 },
                highlight: { minArgs: 1, maxArgs: 1 },
                insertCSS: { minArgs: 1, maxArgs: 2 },
                move: { minArgs: 2, maxArgs: 2 },
                query: { minArgs: 1, maxArgs: 1 },
                reload: { minArgs: 0, maxArgs: 2 },
                remove: { minArgs: 1, maxArgs: 1 },
                removeCSS: { minArgs: 1, maxArgs: 2 },
                sendMessage: { minArgs: 2, maxArgs: 3 },
                setZoom: { minArgs: 1, maxArgs: 2 },
                setZoomSettings: { minArgs: 1, maxArgs: 2 },
                update: { minArgs: 1, maxArgs: 2 },
              },
              topSites: { get: { minArgs: 0, maxArgs: 0 } },
              webNavigation: { getAllFrames: { minArgs: 1, maxArgs: 1 }, getFrame: { minArgs: 1, maxArgs: 1 } },
              webRequest: { handlerBehaviorChanged: { minArgs: 0, maxArgs: 0 } },
              windows: {
                create: { minArgs: 0, maxArgs: 1 },
                get: { minArgs: 1, maxArgs: 2 },
                getAll: { minArgs: 0, maxArgs: 1 },
                getCurrent: { minArgs: 0, maxArgs: 1 },
                getLastFocused: { minArgs: 0, maxArgs: 1 },
                remove: { minArgs: 1, maxArgs: 1 },
                update: { minArgs: 2, maxArgs: 2 },
              },
            };
            if (Object.keys(p).length === 0) throw new Error("api-metadata.json has not been included in browser-polyfill");
            class m extends WeakMap {
              constructor(b, L = void 0) {
                super(L), (this.createItem = b);
              }
              get(b) {
                return this.has(b) || this.set(b, this.createItem(b)), super.get(b);
              }
            }
            let C = (I) => I && typeof I == "object" && typeof I.then == "function",
              w = (I, b) => (...L) => {
                a.runtime.lastError ? I.reject(new Error(a.runtime.lastError.message)) : b.singleCallbackArg || (L.length <= 1 && b.singleCallbackArg !== !1) ? I.resolve(L[0]) : I.resolve(L);
              },
              P = (I) => (I == 1 ? "argument" : "arguments"),
              M = (I, b) =>
                function (U, ...V) {
                  if (V.length < b.minArgs) throw new Error(`Expected at least ${b.minArgs} ${P(b.minArgs)} for ${I}(), got ${V.length}`);
                  if (V.length > b.maxArgs) throw new Error(`Expected at most ${b.maxArgs} ${P(b.maxArgs)} for ${I}(), got ${V.length}`);
                  return new Promise((Ee, qe) => {
                    if (b.fallbackToNoCallback)
                      try {
                        U[I](...V, w({ resolve: Ee, reject: qe }, b));
                      } catch (G) {
                        console.warn(`${I} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `, G),
                          U[I](...V),
                          (b.fallbackToNoCallback = !1),
                          (b.noCallback = !0),
                          Ee();
                      }
                    else b.noCallback ? (U[I](...V), Ee()) : U[I](...V, w({ resolve: Ee, reject: qe }, b));
                  });
                },
              N = (I, b, L) =>
                new Proxy(b, {
                  apply(U, V, Ee) {
                    return L.call(V, I, ...Ee);
                  },
                }),
              q = Function.call.bind(Object.prototype.hasOwnProperty),
              y = (I, b = {}, L = {}) => {
                let U = Object.create(null),
                  V = {
                    has(qe, G) {
                      return G in I || G in U;
                    },
                    get(qe, G, B) {
                      if (G in U) return U[G];
                      if (!(G in I)) return;
                      let O = I[G];
                      if (typeof O == "function")
                        if (typeof b[G] == "function") O = N(I, I[G], b[G]);
                        else if (q(L, G)) {
                          let J = M(G, L[G]);
                          O = N(I, I[G], J);
                        } else O = O.bind(I);
                      else if (typeof O == "object" && O !== null && (q(b, G) || q(L, G))) O = y(O, b[G], L[G]);
                      else if (q(L, "*")) O = y(O, b[G], L["*"]);
                      else
                        return (
                          Object.defineProperty(U, G, {
                            configurable: !0,
                            enumerable: !0,
                            get() {
                              return I[G];
                            },
                            set(J) {
                              I[G] = J;
                            },
                          }),
                          O
                        );
                      return (U[G] = O), O;
                    },
                    set(qe, G, B, O) {
                      return G in U ? (U[G] = B) : (I[G] = B), !0;
                    },
                    defineProperty(qe, G, B) {
                      return Reflect.defineProperty(U, G, B);
                    },
                    deleteProperty(qe, G) {
                      return Reflect.deleteProperty(U, G);
                    },
                  },
                  Ee = Object.create(I);
                return new Proxy(Ee, V);
              },
              v = (I) => ({
                addListener(b, L, ...U) {
                  b.addListener(I.get(L), ...U);
                },
                hasListener(b, L) {
                  return b.hasListener(I.get(L));
                },
                removeListener(b, L) {
                  b.removeListener(I.get(L));
                },
              }),
              x = new m((I) =>
                typeof I != "function"
                  ? I
                  : function (L) {
                    let U = y(L, {}, { getContent: { minArgs: 0, maxArgs: 0 } });
                    I(U);
                  }
              ),
              D = new m((I) =>
                typeof I != "function"
                  ? I
                  : function (L, U, V) {
                    let Ee = !1,
                      qe,
                      G = new Promise((F) => {
                        qe = function (Q) {
                          (Ee = !0), F(Q);
                        };
                      }),
                      B;
                    try {
                      B = I(L, U, qe);
                    } catch (F) {
                      B = Promise.reject(F);
                    }
                    let O = B !== !0 && C(B);
                    if (B !== !0 && !O && !Ee) return !1;
                    let J = (F) => {
                      F.then(
                        (Q) => {
                          V(Q);
                        },
                        (Q) => {
                          let ne;
                          Q && (Q instanceof Error || typeof Q.message == "string") ? (ne = Q.message) : (ne = "An unexpected error occurred"), V({ __mozWebExtensionPolyfillReject__: !0, message: ne });
                        }
                      ).catch((Q) => {
                        console.error("Failed to send onMessage rejected reply", Q);
                      });
                    };
                    return J(O ? B : G), !0;
                  }
              ),
              W = ({ reject: I, resolve: b }, L) => {
                a.runtime.lastError ? (a.runtime.lastError.message === r ? b() : I(new Error(a.runtime.lastError.message))) : L && L.__mozWebExtensionPolyfillReject__ ? I(new Error(L.message)) : b(L);
              },
              H = (I, b, L, ...U) => {
                if (U.length < b.minArgs) throw new Error(`Expected at least ${b.minArgs} ${P(b.minArgs)} for ${I}(), got ${U.length}`);
                if (U.length > b.maxArgs) throw new Error(`Expected at most ${b.maxArgs} ${P(b.maxArgs)} for ${I}(), got ${U.length}`);
                return new Promise((V, Ee) => {
                  let qe = W.bind(null, { resolve: V, reject: Ee });
                  U.push(qe), L.sendMessage(...U);
                });
              },
              te = {
                devtools: { network: { onRequestFinished: v(x) } },
                runtime: { onMessage: v(D), onMessageExternal: v(D), sendMessage: H.bind(null, "sendMessage", { minArgs: 1, maxArgs: 3 }) },
                tabs: { sendMessage: H.bind(null, "sendMessage", { minArgs: 2, maxArgs: 3 }) },
              },
              X = { clear: { minArgs: 1, maxArgs: 1 }, get: { minArgs: 1, maxArgs: 1 }, set: { minArgs: 1, maxArgs: 1 } };
            return (p.privacy = { network: { "*": X }, services: { "*": X }, websites: { "*": X } }), y(a, te, p);
          };
        u.exports = s(chrome);
      } else u.exports = globalThis.browser;
    });
  });
  var ii = cr((Un, pr) => {
    var py = A(E());
    (function () {
      var u,
        r = "4.17.21",
        s = 200,
        a = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",
        p = "Expected a function",
        m = "Invalid `variable` option passed into `_.template`",
        C = "__lodash_hash_undefined__",
        w = 500,
        P = "__lodash_placeholder__",
        M = 1,
        N = 2,
        q = 4,
        y = 1,
        v = 2,
        x = 1,
        D = 2,
        W = 4,
        H = 8,
        te = 16,
        X = 32,
        I = 64,
        b = 128,
        L = 256,
        U = 512,
        V = 30,
        Ee = "...",
        qe = 800,
        G = 16,
        B = 1,
        O = 2,
        J = 3,
        F = 1 / 0,
        Q = 9007199254740991,
        ne = 17976931348623157e292,
        pe = 0 / 0,
        fe = 4294967295,
        xe = fe - 1,
        De = fe >>> 1,
        St = [
          ["ary", b],
          ["bind", x],
          ["bindKey", D],
          ["curry", H],
          ["curryRight", te],
          ["flip", U],
          ["partial", X],
          ["partialRight", I],
          ["rearg", L],
        ],
        Fe = "[object Arguments]",
        kt = "[object Array]",
        cn = "[object AsyncFunction]",
        lt = "[object Boolean]",
        Re = "[object Date]",
        It = "[object DOMException]",
        Qt = "[object Error]",
        Mt = "[object Function]",
        vo = "[object GeneratorFunction]",
        Ct = "[object Map]",
        Wn = "[object Number]",
        Cc = "[object Null]",
        Ot = "[object Object]",
        yo = "[object Promise]",
        bc = "[object Proxy]",
        Hn = "[object RegExp]",
        bt = "[object Set]",
        Vn = "[object String]",
        gr = "[object Symbol]",
        xc = "[object Undefined]",
        Kn = "[object WeakMap]",
        Tc = "[object WeakSet]",
        Qn = "[object ArrayBuffer]",
        xn = "[object DataView]",
        xi = "[object Float32Array]",
        Ti = "[object Float64Array]",
        Ai = "[object Int8Array]",
        wi = "[object Int16Array]",
        Si = "[object Int32Array]",
        ki = "[object Uint8Array]",
        Ii = "[object Uint8ClampedArray]",
        Pi = "[object Uint16Array]",
        Ei = "[object Uint32Array]",
        Ac = /\b__p \+= '';/g,
        wc = /\b(__p \+=) '' \+/g,
        Sc = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
        _o = /&(?:amp|lt|gt|quot|#39);/g,
        Co = /[&<>"']/g,
        kc = RegExp(_o.source),
        Ic = RegExp(Co.source),
        Pc = /<%-([\s\S]+?)%>/g,
        Ec = /<%([\s\S]+?)%>/g,
        bo = /<%=([\s\S]+?)%>/g,
        Rc = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        Mc = /^\w*$/,
        Oc = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        Ri = /[\\^$.*+?()[\]{}|]/g,
        Lc = RegExp(Ri.source),
        Mi = /^\s+/,
        Dc = /\s/,
        Uc = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
        Nc = /\{\n\/\* \[wrapped with (.+)\] \*/,
        qc = /,? & /,
        Gc = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
        Bc = /[()=,{}\[\]\/\s]/,
        Fc = /\\(\\)?/g,
        $c = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
        xo = /\w*$/,
        Wc = /^[-+]0x[0-9a-f]+$/i,
        Hc = /^0b[01]+$/i,
        Vc = /^\[object .+?Constructor\]$/,
        Kc = /^0o[0-7]+$/i,
        Qc = /^(?:0|[1-9]\d*)$/,
        zc = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
        hr = /($^)/,
        Yc = /['\n\r\u2028\u2029\\]/g,
        mr = "\\ud800-\\udfff",
        Jc = "\\u0300-\\u036f",
        Zc = "\\ufe20-\\ufe2f",
        Xc = "\\u20d0-\\u20ff",
        To = Jc + Zc + Xc,
        Ao = "\\u2700-\\u27bf",
        wo = "a-z\\xdf-\\xf6\\xf8-\\xff",
        jc = "\\xac\\xb1\\xd7\\xf7",
        el = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",
        tl = "\\u2000-\\u206f",
        nl = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
        So = "A-Z\\xc0-\\xd6\\xd8-\\xde",
        ko = "\\ufe0e\\ufe0f",
        Io = jc + el + tl + nl,
        Oi = "['\u2019]",
        rl = "[" + mr + "]",
        Po = "[" + Io + "]",
        vr = "[" + To + "]",
        Eo = "\\d+",
        il = "[" + Ao + "]",
        Ro = "[" + wo + "]",
        Mo = "[^" + mr + Io + Eo + Ao + wo + So + "]",
        Li = "\\ud83c[\\udffb-\\udfff]",
        sl = "(?:" + vr + "|" + Li + ")",
        Oo = "[^" + mr + "]",
        Di = "(?:\\ud83c[\\udde6-\\uddff]){2}",
        Ui = "[\\ud800-\\udbff][\\udc00-\\udfff]",
        Tn = "[" + So + "]",
        Lo = "\\u200d",
        Do = "(?:" + Ro + "|" + Mo + ")",
        ol = "(?:" + Tn + "|" + Mo + ")",
        Uo = "(?:" + Oi + "(?:d|ll|m|re|s|t|ve))?",
        No = "(?:" + Oi + "(?:D|LL|M|RE|S|T|VE))?",
        qo = sl + "?",
        Go = "[" + ko + "]?",
        al = "(?:" + Lo + "(?:" + [Oo, Di, Ui].join("|") + ")" + Go + qo + ")*",
        ul = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
        cl = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
        Bo = Go + qo + al,
        ll = "(?:" + [il, Di, Ui].join("|") + ")" + Bo,
        pl = "(?:" + [Oo + vr + "?", vr, Di, Ui, rl].join("|") + ")",
        fl = RegExp(Oi, "g"),
        dl = RegExp(vr, "g"),
        Ni = RegExp(Li + "(?=" + Li + ")|" + pl + Bo, "g"),
        gl = RegExp([Tn + "?" + Ro + "+" + Uo + "(?=" + [Po, Tn, "$"].join("|") + ")", ol + "+" + No + "(?=" + [Po, Tn + Do, "$"].join("|") + ")", Tn + "?" + Do + "+" + Uo, Tn + "+" + No, cl, ul, Eo, ll].join("|"), "g"),
        hl = RegExp("[" + Lo + mr + To + ko + "]"),
        ml = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
        vl = [
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
          "setTimeout",
        ],
        yl = -1,
        be = {};
      (be[xi] = be[Ti] = be[Ai] = be[wi] = be[Si] = be[ki] = be[Ii] = be[Pi] = be[Ei] = !0), (be[Fe] = be[kt] = be[Qn] = be[lt] = be[xn] = be[Re] = be[Qt] = be[Mt] = be[Ct] = be[Wn] = be[Ot] = be[Hn] = be[bt] = be[Vn] = be[Kn] = !1);
      var _e = {};
      (_e[Fe] = _e[kt] = _e[Qn] = _e[xn] = _e[lt] = _e[Re] = _e[xi] = _e[Ti] = _e[Ai] = _e[wi] = _e[Si] = _e[Ct] = _e[Wn] = _e[Ot] = _e[Hn] = _e[bt] = _e[Vn] = _e[gr] = _e[ki] = _e[Ii] = _e[Pi] = _e[Ei] = !0),
        (_e[Qt] = _e[Mt] = _e[Kn] = !1);
      var _l = {
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
        ſ: "s",
      },
        Cl = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" },
        bl = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#39;": "'" },
        xl = { "\\": "\\", "'": "'", "\n": "n", "\r": "r", "\u2028": "u2028", "\u2029": "u2029" },
        Tl = parseFloat,
        Al = parseInt,
        Fo = typeof global == "object" && global && global.Object === Object && global,
        wl = typeof self == "object" && self && self.Object === Object && self,
        Ue = Fo || wl || Function("return this")(),
        qi = typeof Un == "object" && Un && !Un.nodeType && Un,
        ln = qi && typeof pr == "object" && pr && !pr.nodeType && pr,
        $o = ln && ln.exports === qi,
        Gi = $o && Fo.process,
        pt = (function () {
          try {
            var g = ln && ln.require && ln.require("util").types;
            return g || (Gi && Gi.binding && Gi.binding("util"));
          } catch { }
        })(),
        Wo = pt && pt.isArrayBuffer,
        Ho = pt && pt.isDate,
        Vo = pt && pt.isMap,
        Ko = pt && pt.isRegExp,
        Qo = pt && pt.isSet,
        zo = pt && pt.isTypedArray;
      function nt(g, T, _) {
        switch (_.length) {
          case 0:
            return g.call(T);
          case 1:
            return g.call(T, _[0]);
          case 2:
            return g.call(T, _[0], _[1]);
          case 3:
            return g.call(T, _[0], _[1], _[2]);
        }
        return g.apply(T, _);
      }
      function Sl(g, T, _, K) {
        for (var re = -1, de = g == null ? 0 : g.length; ++re < de;) {
          var Oe = g[re];
          T(K, Oe, _(Oe), g);
        }
        return K;
      }
      function ft(g, T) {
        for (var _ = -1, K = g == null ? 0 : g.length; ++_ < K && T(g[_], _, g) !== !1;);
        return g;
      }
      function kl(g, T) {
        for (var _ = g == null ? 0 : g.length; _-- && T(g[_], _, g) !== !1;);
        return g;
      }
      function Yo(g, T) {
        for (var _ = -1, K = g == null ? 0 : g.length; ++_ < K;) if (!T(g[_], _, g)) return !1;
        return !0;
      }
      function zt(g, T) {
        for (var _ = -1, K = g == null ? 0 : g.length, re = 0, de = []; ++_ < K;) {
          var Oe = g[_];
          T(Oe, _, g) && (de[re++] = Oe);
        }
        return de;
      }
      function yr(g, T) {
        var _ = g == null ? 0 : g.length;
        return !!_ && An(g, T, 0) > -1;
      }
      function Bi(g, T, _) {
        for (var K = -1, re = g == null ? 0 : g.length; ++K < re;) if (_(T, g[K])) return !0;
        return !1;
      }
      function Te(g, T) {
        for (var _ = -1, K = g == null ? 0 : g.length, re = Array(K); ++_ < K;) re[_] = T(g[_], _, g);
        return re;
      }
      function Yt(g, T) {
        for (var _ = -1, K = T.length, re = g.length; ++_ < K;) g[re + _] = T[_];
        return g;
      }
      function Fi(g, T, _, K) {
        var re = -1,
          de = g == null ? 0 : g.length;
        for (K && de && (_ = g[++re]); ++re < de;) _ = T(_, g[re], re, g);
        return _;
      }
      function Il(g, T, _, K) {
        var re = g == null ? 0 : g.length;
        for (K && re && (_ = g[--re]); re--;) _ = T(_, g[re], re, g);
        return _;
      }
      function $i(g, T) {
        for (var _ = -1, K = g == null ? 0 : g.length; ++_ < K;) if (T(g[_], _, g)) return !0;
        return !1;
      }
      var Pl = Wi("length");
      function El(g) {
        return g.split("");
      }
      function Rl(g) {
        return g.match(Gc) || [];
      }
      function Jo(g, T, _) {
        var K;
        return (
          _(g, function (re, de, Oe) {
            if (T(re, de, Oe)) return (K = de), !1;
          }),
          K
        );
      }
      function _r(g, T, _, K) {
        for (var re = g.length, de = _ + (K ? 1 : -1); K ? de-- : ++de < re;) if (T(g[de], de, g)) return de;
        return -1;
      }
      function An(g, T, _) {
        return T === T ? Wl(g, T, _) : _r(g, Zo, _);
      }
      function Ml(g, T, _, K) {
        for (var re = _ - 1, de = g.length; ++re < de;) if (K(g[re], T)) return re;
        return -1;
      }
      function Zo(g) {
        return g !== g;
      }
      function Xo(g, T) {
        var _ = g == null ? 0 : g.length;
        return _ ? Vi(g, T) / _ : pe;
      }
      function Wi(g) {
        return function (T) {
          return T == null ? u : T[g];
        };
      }
      function Hi(g) {
        return function (T) {
          return g == null ? u : g[T];
        };
      }
      function jo(g, T, _, K, re) {
        return (
          re(g, function (de, Oe, ye) {
            _ = K ? ((K = !1), de) : T(_, de, Oe, ye);
          }),
          _
        );
      }
      function Ol(g, T) {
        var _ = g.length;
        for (g.sort(T); _--;) g[_] = g[_].value;
        return g;
      }
      function Vi(g, T) {
        for (var _, K = -1, re = g.length; ++K < re;) {
          var de = T(g[K]);
          de !== u && (_ = _ === u ? de : _ + de);
        }
        return _;
      }
      function Ki(g, T) {
        for (var _ = -1, K = Array(g); ++_ < g;) K[_] = T(_);
        return K;
      }
      function Ll(g, T) {
        return Te(T, function (_) {
          return [_, g[_]];
        });
      }
      function ea(g) {
        return g && g.slice(0, ia(g) + 1).replace(Mi, "");
      }
      function rt(g) {
        return function (T) {
          return g(T);
        };
      }
      function Qi(g, T) {
        return Te(T, function (_) {
          return g[_];
        });
      }
      function zn(g, T) {
        return g.has(T);
      }
      function ta(g, T) {
        for (var _ = -1, K = g.length; ++_ < K && An(T, g[_], 0) > -1;);
        return _;
      }
      function na(g, T) {
        for (var _ = g.length; _-- && An(T, g[_], 0) > -1;);
        return _;
      }
      function Dl(g, T) {
        for (var _ = g.length, K = 0; _--;) g[_] === T && ++K;
        return K;
      }
      var Ul = Hi(_l),
        Nl = Hi(Cl);
      function ql(g) {
        return "\\" + xl[g];
      }
      function Gl(g, T) {
        return g == null ? u : g[T];
      }
      function wn(g) {
        return hl.test(g);
      }
      function Bl(g) {
        return ml.test(g);
      }
      function Fl(g) {
        for (var T, _ = []; !(T = g.next()).done;) _.push(T.value);
        return _;
      }
      function zi(g) {
        var T = -1,
          _ = Array(g.size);
        return (
          g.forEach(function (K, re) {
            _[++T] = [re, K];
          }),
          _
        );
      }
      function ra(g, T) {
        return function (_) {
          return g(T(_));
        };
      }
      function Jt(g, T) {
        for (var _ = -1, K = g.length, re = 0, de = []; ++_ < K;) {
          var Oe = g[_];
          (Oe === T || Oe === P) && ((g[_] = P), (de[re++] = _));
        }
        return de;
      }
      function Cr(g) {
        var T = -1,
          _ = Array(g.size);
        return (
          g.forEach(function (K) {
            _[++T] = K;
          }),
          _
        );
      }
      function $l(g) {
        var T = -1,
          _ = Array(g.size);
        return (
          g.forEach(function (K) {
            _[++T] = [K, K];
          }),
          _
        );
      }
      function Wl(g, T, _) {
        for (var K = _ - 1, re = g.length; ++K < re;) if (g[K] === T) return K;
        return -1;
      }
      function Hl(g, T, _) {
        for (var K = _ + 1; K--;) if (g[K] === T) return K;
        return K;
      }
      function Sn(g) {
        return wn(g) ? Kl(g) : Pl(g);
      }
      function xt(g) {
        return wn(g) ? Ql(g) : El(g);
      }
      function ia(g) {
        for (var T = g.length; T-- && Dc.test(g.charAt(T)););
        return T;
      }
      var Vl = Hi(bl);
      function Kl(g) {
        for (var T = (Ni.lastIndex = 0); Ni.test(g);) ++T;
        return T;
      }
      function Ql(g) {
        return g.match(Ni) || [];
      }
      function zl(g) {
        return g.match(gl) || [];
      }
      var Yl = function g(T) {
        T = T == null ? Ue : Zt.defaults(Ue.Object(), T, Zt.pick(Ue, vl));
        var _ = T.Array,
          K = T.Date,
          re = T.Error,
          de = T.Function,
          Oe = T.Math,
          ye = T.Object,
          Yi = T.RegExp,
          Jl = T.String,
          dt = T.TypeError,
          br = _.prototype,
          Zl = de.prototype,
          kn = ye.prototype,
          xr = T["__core-js_shared__"],
          Tr = Zl.toString,
          me = kn.hasOwnProperty,
          Xl = 0,
          sa = (function () {
            var e = /[^.]+$/.exec((xr && xr.keys && xr.keys.IE_PROTO) || "");
            return e ? "Symbol(src)_1." + e : "";
          })(),
          Ar = kn.toString,
          jl = Tr.call(ye),
          ep = Ue._,
          tp = Yi(
            "^" +
            Tr.call(me)
              .replace(Ri, "\\$&")
              .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") +
            "$"
          ),
          wr = $o ? T.Buffer : u,
          Xt = T.Symbol,
          Sr = T.Uint8Array,
          oa = wr ? wr.allocUnsafe : u,
          kr = ra(ye.getPrototypeOf, ye),
          aa = ye.create,
          ua = kn.propertyIsEnumerable,
          Ir = br.splice,
          ca = Xt ? Xt.isConcatSpreadable : u,
          Yn = Xt ? Xt.iterator : u,
          pn = Xt ? Xt.toStringTag : u,
          Pr = (function () {
            try {
              var e = mn(ye, "defineProperty");
              return e({}, "", {}), e;
            } catch { }
          })(),
          np = T.clearTimeout !== Ue.clearTimeout && T.clearTimeout,
          rp = K && K.now !== Ue.Date.now && K.now,
          ip = T.setTimeout !== Ue.setTimeout && T.setTimeout,
          Er = Oe.ceil,
          Rr = Oe.floor,
          Ji = ye.getOwnPropertySymbols,
          sp = wr ? wr.isBuffer : u,
          la = T.isFinite,
          op = br.join,
          ap = ra(ye.keys, ye),
          Le = Oe.max,
          $e = Oe.min,
          up = K.now,
          cp = T.parseInt,
          pa = Oe.random,
          lp = br.reverse,
          Zi = mn(T, "DataView"),
          Jn = mn(T, "Map"),
          Xi = mn(T, "Promise"),
          In = mn(T, "Set"),
          Zn = mn(T, "WeakMap"),
          Xn = mn(ye, "create"),
          Mr = Zn && new Zn(),
          Pn = {},
          pp = vn(Zi),
          fp = vn(Jn),
          dp = vn(Xi),
          gp = vn(In),
          hp = vn(Zn),
          Or = Xt ? Xt.prototype : u,
          jn = Or ? Or.valueOf : u,
          fa = Or ? Or.toString : u;
        function c(e) {
          if (we(e) && !ie(e) && !(e instanceof ce)) {
            if (e instanceof gt) return e;
            if (me.call(e, "__wrapped__")) return du(e);
          }
          return new gt(e);
        }
        var En = (function () {
          function e() { }
          return function (t) {
            if (!Ae(t)) return {};
            if (aa) return aa(t);
            e.prototype = t;
            var n = new e();
            return (e.prototype = u), n;
          };
        })();
        function Lr() { }
        function gt(e, t) {
          (this.__wrapped__ = e), (this.__actions__ = []), (this.__chain__ = !!t), (this.__index__ = 0), (this.__values__ = u);
        }
        (c.templateSettings = { escape: Pc, evaluate: Ec, interpolate: bo, variable: "", imports: { _: c } }),
          (c.prototype = Lr.prototype),
          (c.prototype.constructor = c),
          (gt.prototype = En(Lr.prototype)),
          (gt.prototype.constructor = gt);
        function ce(e) {
          (this.__wrapped__ = e), (this.__actions__ = []), (this.__dir__ = 1), (this.__filtered__ = !1), (this.__iteratees__ = []), (this.__takeCount__ = fe), (this.__views__ = []);
        }
        function mp() {
          var e = new ce(this.__wrapped__);
          return (
            (e.__actions__ = Je(this.__actions__)),
            (e.__dir__ = this.__dir__),
            (e.__filtered__ = this.__filtered__),
            (e.__iteratees__ = Je(this.__iteratees__)),
            (e.__takeCount__ = this.__takeCount__),
            (e.__views__ = Je(this.__views__)),
            e
          );
        }
        function vp() {
          if (this.__filtered__) {
            var e = new ce(this);
            (e.__dir__ = -1), (e.__filtered__ = !0);
          } else (e = this.clone()), (e.__dir__ *= -1);
          return e;
        }
        function yp() {
          var e = this.__wrapped__.value(),
            t = this.__dir__,
            n = ie(e),
            i = t < 0,
            o = n ? e.length : 0,
            l = Rf(0, o, this.__views__),
            f = l.start,
            d = l.end,
            h = d - f,
            S = i ? d : f - 1,
            k = this.__iteratees__,
            R = k.length,
            $ = 0,
            z = $e(h, this.__takeCount__);
          if (!n || (!i && o == h && z == h)) return Ua(e, this.__actions__);
          var j = [];
          e: for (; h-- && $ < z;) {
            S += t;
            for (var oe = -1, ee = e[S]; ++oe < R;) {
              var ue = k[oe],
                le = ue.iteratee,
                ot = ue.type,
                Qe = le(ee);
              if (ot == O) ee = Qe;
              else if (!Qe) {
                if (ot == B) continue e;
                break e;
              }
            }
            j[$++] = ee;
          }
          return j;
        }
        (ce.prototype = En(Lr.prototype)), (ce.prototype.constructor = ce);
        function fn(e) {
          var t = -1,
            n = e == null ? 0 : e.length;
          for (this.clear(); ++t < n;) {
            var i = e[t];
            this.set(i[0], i[1]);
          }
        }
        function _p() {
          (this.__data__ = Xn ? Xn(null) : {}), (this.size = 0);
        }
        function Cp(e) {
          var t = this.has(e) && delete this.__data__[e];
          return (this.size -= t ? 1 : 0), t;
        }
        function bp(e) {
          var t = this.__data__;
          if (Xn) {
            var n = t[e];
            return n === C ? u : n;
          }
          return me.call(t, e) ? t[e] : u;
        }
        function xp(e) {
          var t = this.__data__;
          return Xn ? t[e] !== u : me.call(t, e);
        }
        function Tp(e, t) {
          var n = this.__data__;
          return (this.size += this.has(e) ? 0 : 1), (n[e] = Xn && t === u ? C : t), this;
        }
        (fn.prototype.clear = _p), (fn.prototype.delete = Cp), (fn.prototype.get = bp), (fn.prototype.has = xp), (fn.prototype.set = Tp);
        function Lt(e) {
          var t = -1,
            n = e == null ? 0 : e.length;
          for (this.clear(); ++t < n;) {
            var i = e[t];
            this.set(i[0], i[1]);
          }
        }
        function Ap() {
          (this.__data__ = []), (this.size = 0);
        }
        function wp(e) {
          var t = this.__data__,
            n = Dr(t, e);
          if (n < 0) return !1;
          var i = t.length - 1;
          return n == i ? t.pop() : Ir.call(t, n, 1), --this.size, !0;
        }
        function Sp(e) {
          var t = this.__data__,
            n = Dr(t, e);
          return n < 0 ? u : t[n][1];
        }
        function kp(e) {
          return Dr(this.__data__, e) > -1;
        }
        function Ip(e, t) {
          var n = this.__data__,
            i = Dr(n, e);
          return i < 0 ? (++this.size, n.push([e, t])) : (n[i][1] = t), this;
        }
        (Lt.prototype.clear = Ap), (Lt.prototype.delete = wp), (Lt.prototype.get = Sp), (Lt.prototype.has = kp), (Lt.prototype.set = Ip);
        function Dt(e) {
          var t = -1,
            n = e == null ? 0 : e.length;
          for (this.clear(); ++t < n;) {
            var i = e[t];
            this.set(i[0], i[1]);
          }
        }
        function Pp() {
          (this.size = 0), (this.__data__ = { hash: new fn(), map: new (Jn || Lt)(), string: new fn() });
        }
        function Ep(e) {
          var t = Qr(this, e).delete(e);
          return (this.size -= t ? 1 : 0), t;
        }
        function Rp(e) {
          return Qr(this, e).get(e);
        }
        function Mp(e) {
          return Qr(this, e).has(e);
        }
        function Op(e, t) {
          var n = Qr(this, e),
            i = n.size;
          return n.set(e, t), (this.size += n.size == i ? 0 : 1), this;
        }
        (Dt.prototype.clear = Pp), (Dt.prototype.delete = Ep), (Dt.prototype.get = Rp), (Dt.prototype.has = Mp), (Dt.prototype.set = Op);
        function dn(e) {
          var t = -1,
            n = e == null ? 0 : e.length;
          for (this.__data__ = new Dt(); ++t < n;) this.add(e[t]);
        }
        function Lp(e) {
          return this.__data__.set(e, C), this;
        }
        function Dp(e) {
          return this.__data__.has(e);
        }
        (dn.prototype.add = dn.prototype.push = Lp), (dn.prototype.has = Dp);
        function Tt(e) {
          var t = (this.__data__ = new Lt(e));
          this.size = t.size;
        }
        function Up() {
          (this.__data__ = new Lt()), (this.size = 0);
        }
        function Np(e) {
          var t = this.__data__,
            n = t.delete(e);
          return (this.size = t.size), n;
        }
        function qp(e) {
          return this.__data__.get(e);
        }
        function Gp(e) {
          return this.__data__.has(e);
        }
        function Bp(e, t) {
          var n = this.__data__;
          if (n instanceof Lt) {
            var i = n.__data__;
            if (!Jn || i.length < s - 1) return i.push([e, t]), (this.size = ++n.size), this;
            n = this.__data__ = new Dt(i);
          }
          return n.set(e, t), (this.size = n.size), this;
        }
        (Tt.prototype.clear = Up), (Tt.prototype.delete = Np), (Tt.prototype.get = qp), (Tt.prototype.has = Gp), (Tt.prototype.set = Bp);
        function da(e, t) {
          var n = ie(e),
            i = !n && yn(e),
            o = !n && !i && rn(e),
            l = !n && !i && !o && Ln(e),
            f = n || i || o || l,
            d = f ? Ki(e.length, Jl) : [],
            h = d.length;
          for (var S in e) (t || me.call(e, S)) && !(f && (S == "length" || (o && (S == "offset" || S == "parent")) || (l && (S == "buffer" || S == "byteLength" || S == "byteOffset")) || Gt(S, h))) && d.push(S);
          return d;
        }
        function ga(e) {
          var t = e.length;
          return t ? e[cs(0, t - 1)] : u;
        }
        function Fp(e, t) {
          return zr(Je(e), gn(t, 0, e.length));
        }
        function $p(e) {
          return zr(Je(e));
        }
        function ji(e, t, n) {
          ((n !== u && !At(e[t], n)) || (n === u && !(t in e))) && Ut(e, t, n);
        }
        function er(e, t, n) {
          var i = e[t];
          (!(me.call(e, t) && At(i, n)) || (n === u && !(t in e))) && Ut(e, t, n);
        }
        function Dr(e, t) {
          for (var n = e.length; n--;) if (At(e[n][0], t)) return n;
          return -1;
        }
        function Wp(e, t, n, i) {
          return (
            jt(e, function (o, l, f) {
              t(i, o, n(o), f);
            }),
            i
          );
        }
        function ha(e, t) {
          return e && Et(t, Ne(t), e);
        }
        function Hp(e, t) {
          return e && Et(t, Xe(t), e);
        }
        function Ut(e, t, n) {
          t == "__proto__" && Pr ? Pr(e, t, { configurable: !0, enumerable: !0, value: n, writable: !0 }) : (e[t] = n);
        }
        function es(e, t) {
          for (var n = -1, i = t.length, o = _(i), l = e == null; ++n < i;) o[n] = l ? u : Ls(e, t[n]);
          return o;
        }
        function gn(e, t, n) {
          return e === e && (n !== u && (e = e <= n ? e : n), t !== u && (e = e >= t ? e : t)), e;
        }
        function ht(e, t, n, i, o, l) {
          var f,
            d = t & M,
            h = t & N,
            S = t & q;
          if ((n && (f = o ? n(e, i, o, l) : n(e)), f !== u)) return f;
          if (!Ae(e)) return e;
          var k = ie(e);
          if (k) {
            if (((f = Of(e)), !d)) return Je(e, f);
          } else {
            var R = We(e),
              $ = R == Mt || R == vo;
            if (rn(e)) return Ga(e, d);
            if (R == Ot || R == Fe || ($ && !o)) {
              if (((f = h || $ ? {} : iu(e)), !d)) return h ? xf(e, Hp(f, e)) : bf(e, ha(f, e));
            } else {
              if (!_e[R]) return o ? e : {};
              f = Lf(e, R, d);
            }
          }
          l || (l = new Tt());
          var z = l.get(e);
          if (z) return z;
          l.set(e, f),
            Ou(e)
              ? e.forEach(function (ee) {
                f.add(ht(ee, t, n, ee, e, l));
              })
              : Ru(e) &&
              e.forEach(function (ee, ue) {
                f.set(ue, ht(ee, t, n, ue, e, l));
              });
          var j = S ? (h ? Cs : _s) : h ? Xe : Ne,
            oe = k ? u : j(e);
          return (
            ft(oe || e, function (ee, ue) {
              oe && ((ue = ee), (ee = e[ue])), er(f, ue, ht(ee, t, n, ue, e, l));
            }),
            f
          );
        }
        function Vp(e) {
          var t = Ne(e);
          return function (n) {
            return ma(n, e, t);
          };
        }
        function ma(e, t, n) {
          var i = n.length;
          if (e == null) return !i;
          for (e = ye(e); i--;) {
            var o = n[i],
              l = t[o],
              f = e[o];
            if ((f === u && !(o in e)) || !l(f)) return !1;
          }
          return !0;
        }
        function va(e, t, n) {
          if (typeof e != "function") throw new dt(p);
          return ar(function () {
            e.apply(u, n);
          }, t);
        }
        function tr(e, t, n, i) {
          var o = -1,
            l = yr,
            f = !0,
            d = e.length,
            h = [],
            S = t.length;
          if (!d) return h;
          n && (t = Te(t, rt(n))), i ? ((l = Bi), (f = !1)) : t.length >= s && ((l = zn), (f = !1), (t = new dn(t)));
          e: for (; ++o < d;) {
            var k = e[o],
              R = n == null ? k : n(k);
            if (((k = i || k !== 0 ? k : 0), f && R === R)) {
              for (var $ = S; $--;) if (t[$] === R) continue e;
              h.push(k);
            } else l(t, R, i) || h.push(k);
          }
          return h;
        }
        var jt = Ha(Pt),
          ya = Ha(ns, !0);
        function Kp(e, t) {
          var n = !0;
          return (
            jt(e, function (i, o, l) {
              return (n = !!t(i, o, l)), n;
            }),
            n
          );
        }
        function Ur(e, t, n) {
          for (var i = -1, o = e.length; ++i < o;) {
            var l = e[i],
              f = t(l);
            if (f != null && (d === u ? f === f && !st(f) : n(f, d)))
              var d = f,
                h = l;
          }
          return h;
        }
        function Qp(e, t, n, i) {
          var o = e.length;
          for (n = se(n), n < 0 && (n = -n > o ? 0 : o + n), i = i === u || i > o ? o : se(i), i < 0 && (i += o), i = n > i ? 0 : Du(i); n < i;) e[n++] = t;
          return e;
        }
        function _a(e, t) {
          var n = [];
          return (
            jt(e, function (i, o, l) {
              t(i, o, l) && n.push(i);
            }),
            n
          );
        }
        function Ge(e, t, n, i, o) {
          var l = -1,
            f = e.length;
          for (n || (n = Uf), o || (o = []); ++l < f;) {
            var d = e[l];
            t > 0 && n(d) ? (t > 1 ? Ge(d, t - 1, n, i, o) : Yt(o, d)) : i || (o[o.length] = d);
          }
          return o;
        }
        var ts = Va(),
          Ca = Va(!0);
        function Pt(e, t) {
          return e && ts(e, t, Ne);
        }
        function ns(e, t) {
          return e && Ca(e, t, Ne);
        }
        function Nr(e, t) {
          return zt(t, function (n) {
            return Bt(e[n]);
          });
        }
        function hn(e, t) {
          t = tn(t, e);
          for (var n = 0, i = t.length; e != null && n < i;) e = e[Rt(t[n++])];
          return n && n == i ? e : u;
        }
        function ba(e, t, n) {
          var i = t(e);
          return ie(e) ? i : Yt(i, n(e));
        }
        function Ve(e) {
          return e == null ? (e === u ? xc : Cc) : pn && pn in ye(e) ? Ef(e) : Wf(e);
        }
        function rs(e, t) {
          return e > t;
        }
        function zp(e, t) {
          return e != null && me.call(e, t);
        }
        function Yp(e, t) {
          return e != null && t in ye(e);
        }
        function Jp(e, t, n) {
          return e >= $e(t, n) && e < Le(t, n);
        }
        function is(e, t, n) {
          for (var i = n ? Bi : yr, o = e[0].length, l = e.length, f = l, d = _(l), h = 1 / 0, S = []; f--;) {
            var k = e[f];
            f && t && (k = Te(k, rt(t))), (h = $e(k.length, h)), (d[f] = !n && (t || (o >= 120 && k.length >= 120)) ? new dn(f && k) : u);
          }
          k = e[0];
          var R = -1,
            $ = d[0];
          e: for (; ++R < o && S.length < h;) {
            var z = k[R],
              j = t ? t(z) : z;
            if (((z = n || z !== 0 ? z : 0), !($ ? zn($, j) : i(S, j, n)))) {
              for (f = l; --f;) {
                var oe = d[f];
                if (!(oe ? zn(oe, j) : i(e[f], j, n))) continue e;
              }
              $ && $.push(j), S.push(z);
            }
          }
          return S;
        }
        function Zp(e, t, n, i) {
          return (
            Pt(e, function (o, l, f) {
              t(i, n(o), l, f);
            }),
            i
          );
        }
        function nr(e, t, n) {
          (t = tn(t, e)), (e = uu(e, t));
          var i = e == null ? e : e[Rt(vt(t))];
          return i == null ? u : nt(i, e, n);
        }
        function xa(e) {
          return we(e) && Ve(e) == Fe;
        }
        function Xp(e) {
          return we(e) && Ve(e) == Qn;
        }
        function jp(e) {
          return we(e) && Ve(e) == Re;
        }
        function rr(e, t, n, i, o) {
          return e === t ? !0 : e == null || t == null || (!we(e) && !we(t)) ? e !== e && t !== t : ef(e, t, n, i, rr, o);
        }
        function ef(e, t, n, i, o, l) {
          var f = ie(e),
            d = ie(t),
            h = f ? kt : We(e),
            S = d ? kt : We(t);
          (h = h == Fe ? Ot : h), (S = S == Fe ? Ot : S);
          var k = h == Ot,
            R = S == Ot,
            $ = h == S;
          if ($ && rn(e)) {
            if (!rn(t)) return !1;
            (f = !0), (k = !1);
          }
          if ($ && !k) return l || (l = new Tt()), f || Ln(e) ? tu(e, t, n, i, o, l) : If(e, t, h, n, i, o, l);
          if (!(n & y)) {
            var z = k && me.call(e, "__wrapped__"),
              j = R && me.call(t, "__wrapped__");
            if (z || j) {
              var oe = z ? e.value() : e,
                ee = j ? t.value() : t;
              return l || (l = new Tt()), o(oe, ee, n, i, l);
            }
          }
          return $ ? (l || (l = new Tt()), Pf(e, t, n, i, o, l)) : !1;
        }
        function tf(e) {
          return we(e) && We(e) == Ct;
        }
        function ss(e, t, n, i) {
          var o = n.length,
            l = o,
            f = !i;
          if (e == null) return !l;
          for (e = ye(e); o--;) {
            var d = n[o];
            if (f && d[2] ? d[1] !== e[d[0]] : !(d[0] in e)) return !1;
          }
          for (; ++o < l;) {
            d = n[o];
            var h = d[0],
              S = e[h],
              k = d[1];
            if (f && d[2]) {
              if (S === u && !(h in e)) return !1;
            } else {
              var R = new Tt();
              if (i) var $ = i(S, k, h, e, t, R);
              if (!($ === u ? rr(k, S, y | v, i, R) : $)) return !1;
            }
          }
          return !0;
        }
        function Ta(e) {
          if (!Ae(e) || qf(e)) return !1;
          var t = Bt(e) ? tp : Vc;
          return t.test(vn(e));
        }
        function nf(e) {
          return we(e) && Ve(e) == Hn;
        }
        function rf(e) {
          return we(e) && We(e) == bt;
        }
        function sf(e) {
          return we(e) && ei(e.length) && !!be[Ve(e)];
        }
        function Aa(e) {
          return typeof e == "function" ? e : e == null ? je : typeof e == "object" ? (ie(e) ? ka(e[0], e[1]) : Sa(e)) : Ku(e);
        }
        function os(e) {
          if (!or(e)) return ap(e);
          var t = [];
          for (var n in ye(e)) me.call(e, n) && n != "constructor" && t.push(n);
          return t;
        }
        function of(e) {
          if (!Ae(e)) return $f(e);
          var t = or(e),
            n = [];
          for (var i in e) (i == "constructor" && (t || !me.call(e, i))) || n.push(i);
          return n;
        }
        function as(e, t) {
          return e < t;
        }
        function wa(e, t) {
          var n = -1,
            i = Ze(e) ? _(e.length) : [];
          return (
            jt(e, function (o, l, f) {
              i[++n] = t(o, l, f);
            }),
            i
          );
        }
        function Sa(e) {
          var t = xs(e);
          return t.length == 1 && t[0][2]
            ? ou(t[0][0], t[0][1])
            : function (n) {
              return n === e || ss(n, e, t);
            };
        }
        function ka(e, t) {
          return As(e) && su(t)
            ? ou(Rt(e), t)
            : function (n) {
              var i = Ls(n, e);
              return i === u && i === t ? Ds(n, e) : rr(t, i, y | v);
            };
        }
        function qr(e, t, n, i, o) {
          e !== t &&
            ts(
              t,
              function (l, f) {
                if ((o || (o = new Tt()), Ae(l))) af(e, t, f, n, qr, i, o);
                else {
                  var d = i ? i(Ss(e, f), l, f + "", e, t, o) : u;
                  d === u && (d = l), ji(e, f, d);
                }
              },
              Xe
            );
        }
        function af(e, t, n, i, o, l, f) {
          var d = Ss(e, n),
            h = Ss(t, n),
            S = f.get(h);
          if (S) {
            ji(e, n, S);
            return;
          }
          var k = l ? l(d, h, n + "", e, t, f) : u,
            R = k === u;
          if (R) {
            var $ = ie(h),
              z = !$ && rn(h),
              j = !$ && !z && Ln(h);
            (k = h),
              $ || z || j
                ? ie(d)
                  ? (k = d)
                  : Se(d)
                    ? (k = Je(d))
                    : z
                      ? ((R = !1), (k = Ga(h, !0)))
                      : j
                        ? ((R = !1), (k = Ba(h, !0)))
                        : (k = [])
                : ur(h) || yn(h)
                  ? ((k = d), yn(d) ? (k = Uu(d)) : (!Ae(d) || Bt(d)) && (k = iu(h)))
                  : (R = !1);
          }
          R && (f.set(h, k), o(k, h, i, l, f), f.delete(h)), ji(e, n, k);
        }
        function Ia(e, t) {
          var n = e.length;
          if (n) return (t += t < 0 ? n : 0), Gt(t, n) ? e[t] : u;
        }
        function Pa(e, t, n) {
          t.length
            ? (t = Te(t, function (l) {
              return ie(l)
                ? function (f) {
                  return hn(f, l.length === 1 ? l[0] : l);
                }
                : l;
            }))
            : (t = [je]);
          var i = -1;
          t = Te(t, rt(Z()));
          var o = wa(e, function (l, f, d) {
            var h = Te(t, function (S) {
              return S(l);
            });
            return { criteria: h, index: ++i, value: l };
          });
          return Ol(o, function (l, f) {
            return Cf(l, f, n);
          });
        }
        function uf(e, t) {
          return Ea(e, t, function (n, i) {
            return Ds(e, i);
          });
        }
        function Ea(e, t, n) {
          for (var i = -1, o = t.length, l = {}; ++i < o;) {
            var f = t[i],
              d = hn(e, f);
            n(d, f) && ir(l, tn(f, e), d);
          }
          return l;
        }
        function cf(e) {
          return function (t) {
            return hn(t, e);
          };
        }
        function us(e, t, n, i) {
          var o = i ? Ml : An,
            l = -1,
            f = t.length,
            d = e;
          for (e === t && (t = Je(t)), n && (d = Te(e, rt(n))); ++l < f;) for (var h = 0, S = t[l], k = n ? n(S) : S; (h = o(d, k, h, i)) > -1;) d !== e && Ir.call(d, h, 1), Ir.call(e, h, 1);
          return e;
        }
        function Ra(e, t) {
          for (var n = e ? t.length : 0, i = n - 1; n--;) {
            var o = t[n];
            if (n == i || o !== l) {
              var l = o;
              Gt(o) ? Ir.call(e, o, 1) : fs(e, o);
            }
          }
          return e;
        }
        function cs(e, t) {
          return e + Rr(pa() * (t - e + 1));
        }
        function lf(e, t, n, i) {
          for (var o = -1, l = Le(Er((t - e) / (n || 1)), 0), f = _(l); l--;) (f[i ? l : ++o] = e), (e += n);
          return f;
        }
        function ls(e, t) {
          var n = "";
          if (!e || t < 1 || t > Q) return n;
          do t % 2 && (n += e), (t = Rr(t / 2)), t && (e += e);
          while (t);
          return n;
        }
        function ae(e, t) {
          return ks(au(e, t, je), e + "");
        }
        function pf(e) {
          return ga(Dn(e));
        }
        function ff(e, t) {
          var n = Dn(e);
          return zr(n, gn(t, 0, n.length));
        }
        function ir(e, t, n, i) {
          if (!Ae(e)) return e;
          t = tn(t, e);
          for (var o = -1, l = t.length, f = l - 1, d = e; d != null && ++o < l;) {
            var h = Rt(t[o]),
              S = n;
            if (h === "__proto__" || h === "constructor" || h === "prototype") return e;
            if (o != f) {
              var k = d[h];
              (S = i ? i(k, h, d) : u), S === u && (S = Ae(k) ? k : Gt(t[o + 1]) ? [] : {});
            }
            er(d, h, S), (d = d[h]);
          }
          return e;
        }
        var Ma = Mr
          ? function (e, t) {
            return Mr.set(e, t), e;
          }
          : je,
          df = Pr
            ? function (e, t) {
              return Pr(e, "toString", { configurable: !0, enumerable: !1, value: Ns(t), writable: !0 });
            }
            : je;
        function gf(e) {
          return zr(Dn(e));
        }
        function mt(e, t, n) {
          var i = -1,
            o = e.length;
          t < 0 && (t = -t > o ? 0 : o + t), (n = n > o ? o : n), n < 0 && (n += o), (o = t > n ? 0 : (n - t) >>> 0), (t >>>= 0);
          for (var l = _(o); ++i < o;) l[i] = e[i + t];
          return l;
        }
        function hf(e, t) {
          var n;
          return (
            jt(e, function (i, o, l) {
              return (n = t(i, o, l)), !n;
            }),
            !!n
          );
        }
        function Gr(e, t, n) {
          var i = 0,
            o = e == null ? i : e.length;
          if (typeof t == "number" && t === t && o <= De) {
            for (; i < o;) {
              var l = (i + o) >>> 1,
                f = e[l];
              f !== null && !st(f) && (n ? f <= t : f < t) ? (i = l + 1) : (o = l);
            }
            return o;
          }
          return ps(e, t, je, n);
        }
        function ps(e, t, n, i) {
          var o = 0,
            l = e == null ? 0 : e.length;
          if (l === 0) return 0;
          t = n(t);
          for (var f = t !== t, d = t === null, h = st(t), S = t === u; o < l;) {
            var k = Rr((o + l) / 2),
              R = n(e[k]),
              $ = R !== u,
              z = R === null,
              j = R === R,
              oe = st(R);
            if (f) var ee = i || j;
            else S ? (ee = j && (i || $)) : d ? (ee = j && $ && (i || !z)) : h ? (ee = j && $ && !z && (i || !oe)) : z || oe ? (ee = !1) : (ee = i ? R <= t : R < t);
            ee ? (o = k + 1) : (l = k);
          }
          return $e(l, xe);
        }
        function Oa(e, t) {
          for (var n = -1, i = e.length, o = 0, l = []; ++n < i;) {
            var f = e[n],
              d = t ? t(f) : f;
            if (!n || !At(d, h)) {
              var h = d;
              l[o++] = f === 0 ? 0 : f;
            }
          }
          return l;
        }
        function La(e) {
          return typeof e == "number" ? e : st(e) ? pe : +e;
        }
        function it(e) {
          if (typeof e == "string") return e;
          if (ie(e)) return Te(e, it) + "";
          if (st(e)) return fa ? fa.call(e) : "";
          var t = e + "";
          return t == "0" && 1 / e == -F ? "-0" : t;
        }
        function en(e, t, n) {
          var i = -1,
            o = yr,
            l = e.length,
            f = !0,
            d = [],
            h = d;
          if (n) (f = !1), (o = Bi);
          else if (l >= s) {
            var S = t ? null : Sf(e);
            if (S) return Cr(S);
            (f = !1), (o = zn), (h = new dn());
          } else h = t ? [] : d;
          e: for (; ++i < l;) {
            var k = e[i],
              R = t ? t(k) : k;
            if (((k = n || k !== 0 ? k : 0), f && R === R)) {
              for (var $ = h.length; $--;) if (h[$] === R) continue e;
              t && h.push(R), d.push(k);
            } else o(h, R, n) || (h !== d && h.push(R), d.push(k));
          }
          return d;
        }
        function fs(e, t) {
          return (t = tn(t, e)), (e = uu(e, t)), e == null || delete e[Rt(vt(t))];
        }
        function Da(e, t, n, i) {
          return ir(e, t, n(hn(e, t)), i);
        }
        function Br(e, t, n, i) {
          for (var o = e.length, l = i ? o : -1; (i ? l-- : ++l < o) && t(e[l], l, e););
          return n ? mt(e, i ? 0 : l, i ? l + 1 : o) : mt(e, i ? l + 1 : 0, i ? o : l);
        }
        function Ua(e, t) {
          var n = e;
          return (
            n instanceof ce && (n = n.value()),
            Fi(
              t,
              function (i, o) {
                return o.func.apply(o.thisArg, Yt([i], o.args));
              },
              n
            )
          );
        }
        function ds(e, t, n) {
          var i = e.length;
          if (i < 2) return i ? en(e[0]) : [];
          for (var o = -1, l = _(i); ++o < i;) for (var f = e[o], d = -1; ++d < i;) d != o && (l[o] = tr(l[o] || f, e[d], t, n));
          return en(Ge(l, 1), t, n);
        }
        function Na(e, t, n) {
          for (var i = -1, o = e.length, l = t.length, f = {}; ++i < o;) {
            var d = i < l ? t[i] : u;
            n(f, e[i], d);
          }
          return f;
        }
        function gs(e) {
          return Se(e) ? e : [];
        }
        function hs(e) {
          return typeof e == "function" ? e : je;
        }
        function tn(e, t) {
          return ie(e) ? e : As(e, t) ? [e] : fu(he(e));
        }
        var mf = ae;
        function nn(e, t, n) {
          var i = e.length;
          return (n = n === u ? i : n), !t && n >= i ? e : mt(e, t, n);
        }
        var qa =
          np ||
          function (e) {
            return Ue.clearTimeout(e);
          };
        function Ga(e, t) {
          if (t) return e.slice();
          var n = e.length,
            i = oa ? oa(n) : new e.constructor(n);
          return e.copy(i), i;
        }
        function ms(e) {
          var t = new e.constructor(e.byteLength);
          return new Sr(t).set(new Sr(e)), t;
        }
        function vf(e, t) {
          var n = t ? ms(e.buffer) : e.buffer;
          return new e.constructor(n, e.byteOffset, e.byteLength);
        }
        function yf(e) {
          var t = new e.constructor(e.source, xo.exec(e));
          return (t.lastIndex = e.lastIndex), t;
        }
        function _f(e) {
          return jn ? ye(jn.call(e)) : {};
        }
        function Ba(e, t) {
          var n = t ? ms(e.buffer) : e.buffer;
          return new e.constructor(n, e.byteOffset, e.length);
        }
        function Fa(e, t) {
          if (e !== t) {
            var n = e !== u,
              i = e === null,
              o = e === e,
              l = st(e),
              f = t !== u,
              d = t === null,
              h = t === t,
              S = st(t);
            if ((!d && !S && !l && e > t) || (l && f && h && !d && !S) || (i && f && h) || (!n && h) || !o) return 1;
            if ((!i && !l && !S && e < t) || (S && n && o && !i && !l) || (d && n && o) || (!f && o) || !h) return -1;
          }
          return 0;
        }
        function Cf(e, t, n) {
          for (var i = -1, o = e.criteria, l = t.criteria, f = o.length, d = n.length; ++i < f;) {
            var h = Fa(o[i], l[i]);
            if (h) {
              if (i >= d) return h;
              var S = n[i];
              return h * (S == "desc" ? -1 : 1);
            }
          }
          return e.index - t.index;
        }
        function $a(e, t, n, i) {
          for (var o = -1, l = e.length, f = n.length, d = -1, h = t.length, S = Le(l - f, 0), k = _(h + S), R = !i; ++d < h;) k[d] = t[d];
          for (; ++o < f;) (R || o < l) && (k[n[o]] = e[o]);
          for (; S--;) k[d++] = e[o++];
          return k;
        }
        function Wa(e, t, n, i) {
          for (var o = -1, l = e.length, f = -1, d = n.length, h = -1, S = t.length, k = Le(l - d, 0), R = _(k + S), $ = !i; ++o < k;) R[o] = e[o];
          for (var z = o; ++h < S;) R[z + h] = t[h];
          for (; ++f < d;) ($ || o < l) && (R[z + n[f]] = e[o++]);
          return R;
        }
        function Je(e, t) {
          var n = -1,
            i = e.length;
          for (t || (t = _(i)); ++n < i;) t[n] = e[n];
          return t;
        }
        function Et(e, t, n, i) {
          var o = !n;
          n || (n = {});
          for (var l = -1, f = t.length; ++l < f;) {
            var d = t[l],
              h = i ? i(n[d], e[d], d, n, e) : u;
            h === u && (h = e[d]), o ? Ut(n, d, h) : er(n, d, h);
          }
          return n;
        }
        function bf(e, t) {
          return Et(e, Ts(e), t);
        }
        function xf(e, t) {
          return Et(e, nu(e), t);
        }
        function Fr(e, t) {
          return function (n, i) {
            var o = ie(n) ? Sl : Wp,
              l = t ? t() : {};
            return o(n, e, Z(i, 2), l);
          };
        }
        function Rn(e) {
          return ae(function (t, n) {
            var i = -1,
              o = n.length,
              l = o > 1 ? n[o - 1] : u,
              f = o > 2 ? n[2] : u;
            for (l = e.length > 3 && typeof l == "function" ? (o--, l) : u, f && Ke(n[0], n[1], f) && ((l = o < 3 ? u : l), (o = 1)), t = ye(t); ++i < o;) {
              var d = n[i];
              d && e(t, d, i, l);
            }
            return t;
          });
        }
        function Ha(e, t) {
          return function (n, i) {
            if (n == null) return n;
            if (!Ze(n)) return e(n, i);
            for (var o = n.length, l = t ? o : -1, f = ye(n); (t ? l-- : ++l < o) && i(f[l], l, f) !== !1;);
            return n;
          };
        }
        function Va(e) {
          return function (t, n, i) {
            for (var o = -1, l = ye(t), f = i(t), d = f.length; d--;) {
              var h = f[e ? d : ++o];
              if (n(l[h], h, l) === !1) break;
            }
            return t;
          };
        }
        function Tf(e, t, n) {
          var i = t & x,
            o = sr(e);
          function l() {
            var f = this && this !== Ue && this instanceof l ? o : e;
            return f.apply(i ? n : this, arguments);
          }
          return l;
        }
        function Ka(e) {
          return function (t) {
            t = he(t);
            var n = wn(t) ? xt(t) : u,
              i = n ? n[0] : t.charAt(0),
              o = n ? nn(n, 1).join("") : t.slice(1);
            return i[e]() + o;
          };
        }
        function Mn(e) {
          return function (t) {
            return Fi(Hu(Wu(t).replace(fl, "")), e, "");
          };
        }
        function sr(e) {
          return function () {
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
            var n = En(e.prototype),
              i = e.apply(n, t);
            return Ae(i) ? i : n;
          };
        }
        function Af(e, t, n) {
          var i = sr(e);
          function o() {
            for (var l = arguments.length, f = _(l), d = l, h = On(o); d--;) f[d] = arguments[d];
            var S = l < 3 && f[0] !== h && f[l - 1] !== h ? [] : Jt(f, h);
            if (((l -= S.length), l < n)) return Za(e, t, $r, o.placeholder, u, f, S, u, u, n - l);
            var k = this && this !== Ue && this instanceof o ? i : e;
            return nt(k, this, f);
          }
          return o;
        }
        function Qa(e) {
          return function (t, n, i) {
            var o = ye(t);
            if (!Ze(t)) {
              var l = Z(n, 3);
              (t = Ne(t)),
                (n = function (d) {
                  return l(o[d], d, o);
                });
            }
            var f = e(t, n, i);
            return f > -1 ? o[l ? t[f] : f] : u;
          };
        }
        function za(e) {
          return qt(function (t) {
            var n = t.length,
              i = n,
              o = gt.prototype.thru;
            for (e && t.reverse(); i--;) {
              var l = t[i];
              if (typeof l != "function") throw new dt(p);
              if (o && !f && Kr(l) == "wrapper") var f = new gt([], !0);
            }
            for (i = f ? i : n; ++i < n;) {
              l = t[i];
              var d = Kr(l),
                h = d == "wrapper" ? bs(l) : u;
              h && ws(h[0]) && h[1] == (b | H | X | L) && !h[4].length && h[9] == 1 ? (f = f[Kr(h[0])].apply(f, h[3])) : (f = l.length == 1 && ws(l) ? f[d]() : f.thru(l));
            }
            return function () {
              var S = arguments,
                k = S[0];
              if (f && S.length == 1 && ie(k)) return f.plant(k).value();
              for (var R = 0, $ = n ? t[R].apply(this, S) : k; ++R < n;) $ = t[R].call(this, $);
              return $;
            };
          });
        }
        function $r(e, t, n, i, o, l, f, d, h, S) {
          var k = t & b,
            R = t & x,
            $ = t & D,
            z = t & (H | te),
            j = t & U,
            oe = $ ? u : sr(e);
          function ee() {
            for (var ue = arguments.length, le = _(ue), ot = ue; ot--;) le[ot] = arguments[ot];
            if (z)
              var Qe = On(ee),
                at = Dl(le, Qe);
            if ((i && (le = $a(le, i, o, z)), l && (le = Wa(le, l, f, z)), (ue -= at), z && ue < S)) {
              var ke = Jt(le, Qe);
              return Za(e, t, $r, ee.placeholder, n, le, ke, d, h, S - ue);
            }
            var wt = R ? n : this,
              $t = $ ? wt[e] : e;
            return (ue = le.length), d ? (le = Hf(le, d)) : j && ue > 1 && le.reverse(), k && h < ue && (le.length = h), this && this !== Ue && this instanceof ee && ($t = oe || sr($t)), $t.apply(wt, le);
          }
          return ee;
        }
        function Ya(e, t) {
          return function (n, i) {
            return Zp(n, e, t(i), {});
          };
        }
        function Wr(e, t) {
          return function (n, i) {
            var o;
            if (n === u && i === u) return t;
            if ((n !== u && (o = n), i !== u)) {
              if (o === u) return i;
              typeof n == "string" || typeof i == "string" ? ((n = it(n)), (i = it(i))) : ((n = La(n)), (i = La(i))), (o = e(n, i));
            }
            return o;
          };
        }
        function vs(e) {
          return qt(function (t) {
            return (
              (t = Te(t, rt(Z()))),
              ae(function (n) {
                var i = this;
                return e(t, function (o) {
                  return nt(o, i, n);
                });
              })
            );
          });
        }
        function Hr(e, t) {
          t = t === u ? " " : it(t);
          var n = t.length;
          if (n < 2) return n ? ls(t, e) : t;
          var i = ls(t, Er(e / Sn(t)));
          return wn(t) ? nn(xt(i), 0, e).join("") : i.slice(0, e);
        }
        function wf(e, t, n, i) {
          var o = t & x,
            l = sr(e);
          function f() {
            for (var d = -1, h = arguments.length, S = -1, k = i.length, R = _(k + h), $ = this && this !== Ue && this instanceof f ? l : e; ++S < k;) R[S] = i[S];
            for (; h--;) R[S++] = arguments[++d];
            return nt($, o ? n : this, R);
          }
          return f;
        }
        function Ja(e) {
          return function (t, n, i) {
            return i && typeof i != "number" && Ke(t, n, i) && (n = i = u), (t = Ft(t)), n === u ? ((n = t), (t = 0)) : (n = Ft(n)), (i = i === u ? (t < n ? 1 : -1) : Ft(i)), lf(t, n, i, e);
          };
        }
        function Vr(e) {
          return function (t, n) {
            return (typeof t == "string" && typeof n == "string") || ((t = yt(t)), (n = yt(n))), e(t, n);
          };
        }
        function Za(e, t, n, i, o, l, f, d, h, S) {
          var k = t & H,
            R = k ? f : u,
            $ = k ? u : f,
            z = k ? l : u,
            j = k ? u : l;
          (t |= k ? X : I), (t &= ~(k ? I : X)), t & W || (t &= ~(x | D));
          var oe = [e, t, o, z, R, j, $, d, h, S],
            ee = n.apply(u, oe);
          return ws(e) && cu(ee, oe), (ee.placeholder = i), lu(ee, e, t);
        }
        function ys(e) {
          var t = Oe[e];
          return function (n, i) {
            if (((n = yt(n)), (i = i == null ? 0 : $e(se(i), 292)), i && la(n))) {
              var o = (he(n) + "e").split("e"),
                l = t(o[0] + "e" + (+o[1] + i));
              return (o = (he(l) + "e").split("e")), +(o[0] + "e" + (+o[1] - i));
            }
            return t(n);
          };
        }
        var Sf =
          In && 1 / Cr(new In([, -0]))[1] == F
            ? function (e) {
              return new In(e);
            }
            : Bs;
        function Xa(e) {
          return function (t) {
            var n = We(t);
            return n == Ct ? zi(t) : n == bt ? $l(t) : Ll(t, e(t));
          };
        }
        function Nt(e, t, n, i, o, l, f, d) {
          var h = t & D;
          if (!h && typeof e != "function") throw new dt(p);
          var S = i ? i.length : 0;
          if ((S || ((t &= ~(X | I)), (i = o = u)), (f = f === u ? f : Le(se(f), 0)), (d = d === u ? d : se(d)), (S -= o ? o.length : 0), t & I)) {
            var k = i,
              R = o;
            i = o = u;
          }
          var $ = h ? u : bs(e),
            z = [e, t, n, i, o, k, R, l, f, d];
          if (($ && Ff(z, $), (e = z[0]), (t = z[1]), (n = z[2]), (i = z[3]), (o = z[4]), (d = z[9] = z[9] === u ? (h ? 0 : e.length) : Le(z[9] - S, 0)), !d && t & (H | te) && (t &= ~(H | te)), !t || t == x))
            var j = Tf(e, t, n);
          else t == H || t == te ? (j = Af(e, t, d)) : (t == X || t == (x | X)) && !o.length ? (j = wf(e, t, n, i)) : (j = $r.apply(u, z));
          var oe = $ ? Ma : cu;
          return lu(oe(j, z), e, t);
        }
        function ja(e, t, n, i) {
          return e === u || (At(e, kn[n]) && !me.call(i, n)) ? t : e;
        }
        function eu(e, t, n, i, o, l) {
          return Ae(e) && Ae(t) && (l.set(t, e), qr(e, t, u, eu, l), l.delete(t)), e;
        }
        function kf(e) {
          return ur(e) ? u : e;
        }
        function tu(e, t, n, i, o, l) {
          var f = n & y,
            d = e.length,
            h = t.length;
          if (d != h && !(f && h > d)) return !1;
          var S = l.get(e),
            k = l.get(t);
          if (S && k) return S == t && k == e;
          var R = -1,
            $ = !0,
            z = n & v ? new dn() : u;
          for (l.set(e, t), l.set(t, e); ++R < d;) {
            var j = e[R],
              oe = t[R];
            if (i) var ee = f ? i(oe, j, R, t, e, l) : i(j, oe, R, e, t, l);
            if (ee !== u) {
              if (ee) continue;
              $ = !1;
              break;
            }
            if (z) {
              if (
                !$i(t, function (ue, le) {
                  if (!zn(z, le) && (j === ue || o(j, ue, n, i, l))) return z.push(le);
                })
              ) {
                $ = !1;
                break;
              }
            } else if (!(j === oe || o(j, oe, n, i, l))) {
              $ = !1;
              break;
            }
          }
          return l.delete(e), l.delete(t), $;
        }
        function If(e, t, n, i, o, l, f) {
          switch (n) {
            case xn:
              if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
              (e = e.buffer), (t = t.buffer);
            case Qn:
              return !(e.byteLength != t.byteLength || !l(new Sr(e), new Sr(t)));
            case lt:
            case Re:
            case Wn:
              return At(+e, +t);
            case Qt:
              return e.name == t.name && e.message == t.message;
            case Hn:
            case Vn:
              return e == t + "";
            case Ct:
              var d = zi;
            case bt:
              var h = i & y;
              if ((d || (d = Cr), e.size != t.size && !h)) return !1;
              var S = f.get(e);
              if (S) return S == t;
              (i |= v), f.set(e, t);
              var k = tu(d(e), d(t), i, o, l, f);
              return f.delete(e), k;
            case gr:
              if (jn) return jn.call(e) == jn.call(t);
          }
          return !1;
        }
        function Pf(e, t, n, i, o, l) {
          var f = n & y,
            d = _s(e),
            h = d.length,
            S = _s(t),
            k = S.length;
          if (h != k && !f) return !1;
          for (var R = h; R--;) {
            var $ = d[R];
            if (!(f ? $ in t : me.call(t, $))) return !1;
          }
          var z = l.get(e),
            j = l.get(t);
          if (z && j) return z == t && j == e;
          var oe = !0;
          l.set(e, t), l.set(t, e);
          for (var ee = f; ++R < h;) {
            $ = d[R];
            var ue = e[$],
              le = t[$];
            if (i) var ot = f ? i(le, ue, $, t, e, l) : i(ue, le, $, e, t, l);
            if (!(ot === u ? ue === le || o(ue, le, n, i, l) : ot)) {
              oe = !1;
              break;
            }
            ee || (ee = $ == "constructor");
          }
          if (oe && !ee) {
            var Qe = e.constructor,
              at = t.constructor;
            Qe != at && "constructor" in e && "constructor" in t && !(typeof Qe == "function" && Qe instanceof Qe && typeof at == "function" && at instanceof at) && (oe = !1);
          }
          return l.delete(e), l.delete(t), oe;
        }
        function qt(e) {
          return ks(au(e, u, mu), e + "");
        }
        function _s(e) {
          return ba(e, Ne, Ts);
        }
        function Cs(e) {
          return ba(e, Xe, nu);
        }
        var bs = Mr
          ? function (e) {
            return Mr.get(e);
          }
          : Bs;
        function Kr(e) {
          for (var t = e.name + "", n = Pn[t], i = me.call(Pn, t) ? n.length : 0; i--;) {
            var o = n[i],
              l = o.func;
            if (l == null || l == e) return o.name;
          }
          return t;
        }
        function On(e) {
          var t = me.call(c, "placeholder") ? c : e;
          return t.placeholder;
        }
        function Z() {
          var e = c.iteratee || qs;
          return (e = e === qs ? Aa : e), arguments.length ? e(arguments[0], arguments[1]) : e;
        }
        function Qr(e, t) {
          var n = e.__data__;
          return Nf(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
        }
        function xs(e) {
          for (var t = Ne(e), n = t.length; n--;) {
            var i = t[n],
              o = e[i];
            t[n] = [i, o, su(o)];
          }
          return t;
        }
        function mn(e, t) {
          var n = Gl(e, t);
          return Ta(n) ? n : u;
        }
        function Ef(e) {
          var t = me.call(e, pn),
            n = e[pn];
          try {
            e[pn] = u;
            var i = !0;
          } catch { }
          var o = Ar.call(e);
          return i && (t ? (e[pn] = n) : delete e[pn]), o;
        }
        var Ts = Ji
          ? function (e) {
            return e == null
              ? []
              : ((e = ye(e)),
                zt(Ji(e), function (t) {
                  return ua.call(e, t);
                }));
          }
          : Fs,
          nu = Ji
            ? function (e) {
              for (var t = []; e;) Yt(t, Ts(e)), (e = kr(e));
              return t;
            }
            : Fs,
          We = Ve;
        ((Zi && We(new Zi(new ArrayBuffer(1))) != xn) || (Jn && We(new Jn()) != Ct) || (Xi && We(Xi.resolve()) != yo) || (In && We(new In()) != bt) || (Zn && We(new Zn()) != Kn)) &&
          (We = function (e) {
            var t = Ve(e),
              n = t == Ot ? e.constructor : u,
              i = n ? vn(n) : "";
            if (i)
              switch (i) {
                case pp:
                  return xn;
                case fp:
                  return Ct;
                case dp:
                  return yo;
                case gp:
                  return bt;
                case hp:
                  return Kn;
              }
            return t;
          });
        function Rf(e, t, n) {
          for (var i = -1, o = n.length; ++i < o;) {
            var l = n[i],
              f = l.size;
            switch (l.type) {
              case "drop":
                e += f;
                break;
              case "dropRight":
                t -= f;
                break;
              case "take":
                t = $e(t, e + f);
                break;
              case "takeRight":
                e = Le(e, t - f);
                break;
            }
          }
          return { start: e, end: t };
        }
        function Mf(e) {
          var t = e.match(Nc);
          return t ? t[1].split(qc) : [];
        }
        function ru(e, t, n) {
          t = tn(t, e);
          for (var i = -1, o = t.length, l = !1; ++i < o;) {
            var f = Rt(t[i]);
            if (!(l = e != null && n(e, f))) break;
            e = e[f];
          }
          return l || ++i != o ? l : ((o = e == null ? 0 : e.length), !!o && ei(o) && Gt(f, o) && (ie(e) || yn(e)));
        }
        function Of(e) {
          var t = e.length,
            n = new e.constructor(t);
          return t && typeof e[0] == "string" && me.call(e, "index") && ((n.index = e.index), (n.input = e.input)), n;
        }
        function iu(e) {
          return typeof e.constructor == "function" && !or(e) ? En(kr(e)) : {};
        }
        function Lf(e, t, n) {
          var i = e.constructor;
          switch (t) {
            case Qn:
              return ms(e);
            case lt:
            case Re:
              return new i(+e);
            case xn:
              return vf(e, n);
            case xi:
            case Ti:
            case Ai:
            case wi:
            case Si:
            case ki:
            case Ii:
            case Pi:
            case Ei:
              return Ba(e, n);
            case Ct:
              return new i();
            case Wn:
            case Vn:
              return new i(e);
            case Hn:
              return yf(e);
            case bt:
              return new i();
            case gr:
              return _f(e);
          }
        }
        function Df(e, t) {
          var n = t.length;
          if (!n) return e;
          var i = n - 1;
          return (
            (t[i] = (n > 1 ? "& " : "") + t[i]),
            (t = t.join(n > 2 ? ", " : " ")),
            e.replace(
              Uc,
              `{
/* [wrapped with ` +
              t +
              `] */
`
            )
          );
        }
        function Uf(e) {
          return ie(e) || yn(e) || !!(ca && e && e[ca]);
        }
        function Gt(e, t) {
          var n = typeof e;
          return (t = t ?? Q), !!t && (n == "number" || (n != "symbol" && Qc.test(e))) && e > -1 && e % 1 == 0 && e < t;
        }
        function Ke(e, t, n) {
          if (!Ae(n)) return !1;
          var i = typeof t;
          return (i == "number" ? Ze(n) && Gt(t, n.length) : i == "string" && t in n) ? At(n[t], e) : !1;
        }
        function As(e, t) {
          if (ie(e)) return !1;
          var n = typeof e;
          return n == "number" || n == "symbol" || n == "boolean" || e == null || st(e) ? !0 : Mc.test(e) || !Rc.test(e) || (t != null && e in ye(t));
        }
        function Nf(e) {
          var t = typeof e;
          return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
        }
        function ws(e) {
          var t = Kr(e),
            n = c[t];
          if (typeof n != "function" || !(t in ce.prototype)) return !1;
          if (e === n) return !0;
          var i = bs(n);
          return !!i && e === i[0];
        }
        function qf(e) {
          return !!sa && sa in e;
        }
        var Gf = xr ? Bt : $s;
        function or(e) {
          var t = e && e.constructor,
            n = (typeof t == "function" && t.prototype) || kn;
          return e === n;
        }
        function su(e) {
          return e === e && !Ae(e);
        }
        function ou(e, t) {
          return function (n) {
            return n == null ? !1 : n[e] === t && (t !== u || e in ye(n));
          };
        }
        function Bf(e) {
          var t = Xr(e, function (i) {
            return n.size === w && n.clear(), i;
          }),
            n = t.cache;
          return t;
        }
        function Ff(e, t) {
          var n = e[1],
            i = t[1],
            o = n | i,
            l = o < (x | D | b),
            f = (i == b && n == H) || (i == b && n == L && e[7].length <= t[8]) || (i == (b | L) && t[7].length <= t[8] && n == H);
          if (!(l || f)) return e;
          i & x && ((e[2] = t[2]), (o |= n & x ? 0 : W));
          var d = t[3];
          if (d) {
            var h = e[3];
            (e[3] = h ? $a(h, d, t[4]) : d), (e[4] = h ? Jt(e[3], P) : t[4]);
          }
          return (
            (d = t[5]),
            d && ((h = e[5]), (e[5] = h ? Wa(h, d, t[6]) : d), (e[6] = h ? Jt(e[5], P) : t[6])),
            (d = t[7]),
            d && (e[7] = d),
            i & b && (e[8] = e[8] == null ? t[8] : $e(e[8], t[8])),
            e[9] == null && (e[9] = t[9]),
            (e[0] = t[0]),
            (e[1] = o),
            e
          );
        }
        function $f(e) {
          var t = [];
          if (e != null) for (var n in ye(e)) t.push(n);
          return t;
        }
        function Wf(e) {
          return Ar.call(e);
        }
        function au(e, t, n) {
          return (
            (t = Le(t === u ? e.length - 1 : t, 0)),
            function () {
              for (var i = arguments, o = -1, l = Le(i.length - t, 0), f = _(l); ++o < l;) f[o] = i[t + o];
              o = -1;
              for (var d = _(t + 1); ++o < t;) d[o] = i[o];
              return (d[t] = n(f)), nt(e, this, d);
            }
          );
        }
        function uu(e, t) {
          return t.length < 2 ? e : hn(e, mt(t, 0, -1));
        }
        function Hf(e, t) {
          for (var n = e.length, i = $e(t.length, n), o = Je(e); i--;) {
            var l = t[i];
            e[i] = Gt(l, n) ? o[l] : u;
          }
          return e;
        }
        function Ss(e, t) {
          if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__") return e[t];
        }
        var cu = pu(Ma),
          ar =
            ip ||
            function (e, t) {
              return Ue.setTimeout(e, t);
            },
          ks = pu(df);
        function lu(e, t, n) {
          var i = t + "";
          return ks(e, Df(i, Vf(Mf(i), n)));
        }
        function pu(e) {
          var t = 0,
            n = 0;
          return function () {
            var i = up(),
              o = G - (i - n);
            if (((n = i), o > 0)) {
              if (++t >= qe) return arguments[0];
            } else t = 0;
            return e.apply(u, arguments);
          };
        }
        function zr(e, t) {
          var n = -1,
            i = e.length,
            o = i - 1;
          for (t = t === u ? i : t; ++n < t;) {
            var l = cs(n, o),
              f = e[l];
            (e[l] = e[n]), (e[n] = f);
          }
          return (e.length = t), e;
        }
        var fu = Bf(function (e) {
          var t = [];
          return (
            e.charCodeAt(0) === 46 && t.push(""),
            e.replace(Oc, function (n, i, o, l) {
              t.push(o ? l.replace(Fc, "$1") : i || n);
            }),
            t
          );
        });
        function Rt(e) {
          if (typeof e == "string" || st(e)) return e;
          var t = e + "";
          return t == "0" && 1 / e == -F ? "-0" : t;
        }
        function vn(e) {
          if (e != null) {
            try {
              return Tr.call(e);
            } catch { }
            try {
              return e + "";
            } catch { }
          }
          return "";
        }
        function Vf(e, t) {
          return (
            ft(St, function (n) {
              var i = "_." + n[0];
              t & n[1] && !yr(e, i) && e.push(i);
            }),
            e.sort()
          );
        }
        function du(e) {
          if (e instanceof ce) return e.clone();
          var t = new gt(e.__wrapped__, e.__chain__);
          return (t.__actions__ = Je(e.__actions__)), (t.__index__ = e.__index__), (t.__values__ = e.__values__), t;
        }
        function Kf(e, t, n) {
          (n ? Ke(e, t, n) : t === u) ? (t = 1) : (t = Le(se(t), 0));
          var i = e == null ? 0 : e.length;
          if (!i || t < 1) return [];
          for (var o = 0, l = 0, f = _(Er(i / t)); o < i;) f[l++] = mt(e, o, (o += t));
          return f;
        }
        function Qf(e) {
          for (var t = -1, n = e == null ? 0 : e.length, i = 0, o = []; ++t < n;) {
            var l = e[t];
            l && (o[i++] = l);
          }
          return o;
        }
        function zf() {
          var e = arguments.length;
          if (!e) return [];
          for (var t = _(e - 1), n = arguments[0], i = e; i--;) t[i - 1] = arguments[i];
          return Yt(ie(n) ? Je(n) : [n], Ge(t, 1));
        }
        var Yf = ae(function (e, t) {
          return Se(e) ? tr(e, Ge(t, 1, Se, !0)) : [];
        }),
          Jf = ae(function (e, t) {
            var n = vt(t);
            return Se(n) && (n = u), Se(e) ? tr(e, Ge(t, 1, Se, !0), Z(n, 2)) : [];
          }),
          Zf = ae(function (e, t) {
            var n = vt(t);
            return Se(n) && (n = u), Se(e) ? tr(e, Ge(t, 1, Se, !0), u, n) : [];
          });
        function Xf(e, t, n) {
          var i = e == null ? 0 : e.length;
          return i ? ((t = n || t === u ? 1 : se(t)), mt(e, t < 0 ? 0 : t, i)) : [];
        }
        function jf(e, t, n) {
          var i = e == null ? 0 : e.length;
          return i ? ((t = n || t === u ? 1 : se(t)), (t = i - t), mt(e, 0, t < 0 ? 0 : t)) : [];
        }
        function ed(e, t) {
          return e && e.length ? Br(e, Z(t, 3), !0, !0) : [];
        }
        function td(e, t) {
          return e && e.length ? Br(e, Z(t, 3), !0) : [];
        }
        function nd(e, t, n, i) {
          var o = e == null ? 0 : e.length;
          return o ? (n && typeof n != "number" && Ke(e, t, n) && ((n = 0), (i = o)), Qp(e, t, n, i)) : [];
        }
        function gu(e, t, n) {
          var i = e == null ? 0 : e.length;
          if (!i) return -1;
          var o = n == null ? 0 : se(n);
          return o < 0 && (o = Le(i + o, 0)), _r(e, Z(t, 3), o);
        }
        function hu(e, t, n) {
          var i = e == null ? 0 : e.length;
          if (!i) return -1;
          var o = i - 1;
          return n !== u && ((o = se(n)), (o = n < 0 ? Le(i + o, 0) : $e(o, i - 1))), _r(e, Z(t, 3), o, !0);
        }
        function mu(e) {
          var t = e == null ? 0 : e.length;
          return t ? Ge(e, 1) : [];
        }
        function rd(e) {
          var t = e == null ? 0 : e.length;
          return t ? Ge(e, F) : [];
        }
        function id(e, t) {
          var n = e == null ? 0 : e.length;
          return n ? ((t = t === u ? 1 : se(t)), Ge(e, t)) : [];
        }
        function sd(e) {
          for (var t = -1, n = e == null ? 0 : e.length, i = {}; ++t < n;) {
            var o = e[t];
            i[o[0]] = o[1];
          }
          return i;
        }
        function vu(e) {
          return e && e.length ? e[0] : u;
        }
        function od(e, t, n) {
          var i = e == null ? 0 : e.length;
          if (!i) return -1;
          var o = n == null ? 0 : se(n);
          return o < 0 && (o = Le(i + o, 0)), An(e, t, o);
        }
        function ad(e) {
          var t = e == null ? 0 : e.length;
          return t ? mt(e, 0, -1) : [];
        }
        var ud = ae(function (e) {
          var t = Te(e, gs);
          return t.length && t[0] === e[0] ? is(t) : [];
        }),
          cd = ae(function (e) {
            var t = vt(e),
              n = Te(e, gs);
            return t === vt(n) ? (t = u) : n.pop(), n.length && n[0] === e[0] ? is(n, Z(t, 2)) : [];
          }),
          ld = ae(function (e) {
            var t = vt(e),
              n = Te(e, gs);
            return (t = typeof t == "function" ? t : u), t && n.pop(), n.length && n[0] === e[0] ? is(n, u, t) : [];
          });
        function pd(e, t) {
          return e == null ? "" : op.call(e, t);
        }
        function vt(e) {
          var t = e == null ? 0 : e.length;
          return t ? e[t - 1] : u;
        }
        function fd(e, t, n) {
          var i = e == null ? 0 : e.length;
          if (!i) return -1;
          var o = i;
          return n !== u && ((o = se(n)), (o = o < 0 ? Le(i + o, 0) : $e(o, i - 1))), t === t ? Hl(e, t, o) : _r(e, Zo, o, !0);
        }
        function dd(e, t) {
          return e && e.length ? Ia(e, se(t)) : u;
        }
        var gd = ae(yu);
        function yu(e, t) {
          return e && e.length && t && t.length ? us(e, t) : e;
        }
        function hd(e, t, n) {
          return e && e.length && t && t.length ? us(e, t, Z(n, 2)) : e;
        }
        function md(e, t, n) {
          return e && e.length && t && t.length ? us(e, t, u, n) : e;
        }
        var vd = qt(function (e, t) {
          var n = e == null ? 0 : e.length,
            i = es(e, t);
          return (
            Ra(
              e,
              Te(t, function (o) {
                return Gt(o, n) ? +o : o;
              }).sort(Fa)
            ),
            i
          );
        });
        function yd(e, t) {
          var n = [];
          if (!(e && e.length)) return n;
          var i = -1,
            o = [],
            l = e.length;
          for (t = Z(t, 3); ++i < l;) {
            var f = e[i];
            t(f, i, e) && (n.push(f), o.push(i));
          }
          return Ra(e, o), n;
        }
        function Is(e) {
          return e == null ? e : lp.call(e);
        }
        function _d(e, t, n) {
          var i = e == null ? 0 : e.length;
          return i ? (n && typeof n != "number" && Ke(e, t, n) ? ((t = 0), (n = i)) : ((t = t == null ? 0 : se(t)), (n = n === u ? i : se(n))), mt(e, t, n)) : [];
        }
        function Cd(e, t) {
          return Gr(e, t);
        }
        function bd(e, t, n) {
          return ps(e, t, Z(n, 2));
        }
        function xd(e, t) {
          var n = e == null ? 0 : e.length;
          if (n) {
            var i = Gr(e, t);
            if (i < n && At(e[i], t)) return i;
          }
          return -1;
        }
        function Td(e, t) {
          return Gr(e, t, !0);
        }
        function Ad(e, t, n) {
          return ps(e, t, Z(n, 2), !0);
        }
        function wd(e, t) {
          var n = e == null ? 0 : e.length;
          if (n) {
            var i = Gr(e, t, !0) - 1;
            if (At(e[i], t)) return i;
          }
          return -1;
        }
        function Sd(e) {
          return e && e.length ? Oa(e) : [];
        }
        function kd(e, t) {
          return e && e.length ? Oa(e, Z(t, 2)) : [];
        }
        function Id(e) {
          var t = e == null ? 0 : e.length;
          return t ? mt(e, 1, t) : [];
        }
        function Pd(e, t, n) {
          return e && e.length ? ((t = n || t === u ? 1 : se(t)), mt(e, 0, t < 0 ? 0 : t)) : [];
        }
        function Ed(e, t, n) {
          var i = e == null ? 0 : e.length;
          return i ? ((t = n || t === u ? 1 : se(t)), (t = i - t), mt(e, t < 0 ? 0 : t, i)) : [];
        }
        function Rd(e, t) {
          return e && e.length ? Br(e, Z(t, 3), !1, !0) : [];
        }
        function Md(e, t) {
          return e && e.length ? Br(e, Z(t, 3)) : [];
        }
        var Od = ae(function (e) {
          return en(Ge(e, 1, Se, !0));
        }),
          Ld = ae(function (e) {
            var t = vt(e);
            return Se(t) && (t = u), en(Ge(e, 1, Se, !0), Z(t, 2));
          }),
          Dd = ae(function (e) {
            var t = vt(e);
            return (t = typeof t == "function" ? t : u), en(Ge(e, 1, Se, !0), u, t);
          });
        function Ud(e) {
          return e && e.length ? en(e) : [];
        }
        function Nd(e, t) {
          return e && e.length ? en(e, Z(t, 2)) : [];
        }
        function qd(e, t) {
          return (t = typeof t == "function" ? t : u), e && e.length ? en(e, u, t) : [];
        }
        function Ps(e) {
          if (!(e && e.length)) return [];
          var t = 0;
          return (
            (e = zt(e, function (n) {
              if (Se(n)) return (t = Le(n.length, t)), !0;
            })),
            Ki(t, function (n) {
              return Te(e, Wi(n));
            })
          );
        }
        function _u(e, t) {
          if (!(e && e.length)) return [];
          var n = Ps(e);
          return t == null
            ? n
            : Te(n, function (i) {
              return nt(t, u, i);
            });
        }
        var Gd = ae(function (e, t) {
          return Se(e) ? tr(e, t) : [];
        }),
          Bd = ae(function (e) {
            return ds(zt(e, Se));
          }),
          Fd = ae(function (e) {
            var t = vt(e);
            return Se(t) && (t = u), ds(zt(e, Se), Z(t, 2));
          }),
          $d = ae(function (e) {
            var t = vt(e);
            return (t = typeof t == "function" ? t : u), ds(zt(e, Se), u, t);
          }),
          Wd = ae(Ps);
        function Hd(e, t) {
          return Na(e || [], t || [], er);
        }
        function Vd(e, t) {
          return Na(e || [], t || [], ir);
        }
        var Kd = ae(function (e) {
          var t = e.length,
            n = t > 1 ? e[t - 1] : u;
          return (n = typeof n == "function" ? (e.pop(), n) : u), _u(e, n);
        });
        function Cu(e) {
          var t = c(e);
          return (t.__chain__ = !0), t;
        }
        function Qd(e, t) {
          return t(e), e;
        }
        function Yr(e, t) {
          return t(e);
        }
        var zd = qt(function (e) {
          var t = e.length,
            n = t ? e[0] : 0,
            i = this.__wrapped__,
            o = function (l) {
              return es(l, e);
            };
          return t > 1 || this.__actions__.length || !(i instanceof ce) || !Gt(n)
            ? this.thru(o)
            : ((i = i.slice(n, +n + (t ? 1 : 0))),
              i.__actions__.push({ func: Yr, args: [o], thisArg: u }),
              new gt(i, this.__chain__).thru(function (l) {
                return t && !l.length && l.push(u), l;
              }));
        });
        function Yd() {
          return Cu(this);
        }
        function Jd() {
          return new gt(this.value(), this.__chain__);
        }
        function Zd() {
          this.__values__ === u && (this.__values__ = Lu(this.value()));
          var e = this.__index__ >= this.__values__.length,
            t = e ? u : this.__values__[this.__index__++];
          return { done: e, value: t };
        }
        function Xd() {
          return this;
        }
        function jd(e) {
          for (var t, n = this; n instanceof Lr;) {
            var i = du(n);
            (i.__index__ = 0), (i.__values__ = u), t ? (o.__wrapped__ = i) : (t = i);
            var o = i;
            n = n.__wrapped__;
          }
          return (o.__wrapped__ = e), t;
        }
        function eg() {
          var e = this.__wrapped__;
          if (e instanceof ce) {
            var t = e;
            return this.__actions__.length && (t = new ce(this)), (t = t.reverse()), t.__actions__.push({ func: Yr, args: [Is], thisArg: u }), new gt(t, this.__chain__);
          }
          return this.thru(Is);
        }
        function tg() {
          return Ua(this.__wrapped__, this.__actions__);
        }
        var ng = Fr(function (e, t, n) {
          me.call(e, n) ? ++e[n] : Ut(e, n, 1);
        });
        function rg(e, t, n) {
          var i = ie(e) ? Yo : Kp;
          return n && Ke(e, t, n) && (t = u), i(e, Z(t, 3));
        }
        function ig(e, t) {
          var n = ie(e) ? zt : _a;
          return n(e, Z(t, 3));
        }
        var sg = Qa(gu),
          og = Qa(hu);
        function ag(e, t) {
          return Ge(Jr(e, t), 1);
        }
        function ug(e, t) {
          return Ge(Jr(e, t), F);
        }
        function cg(e, t, n) {
          return (n = n === u ? 1 : se(n)), Ge(Jr(e, t), n);
        }
        function bu(e, t) {
          var n = ie(e) ? ft : jt;
          return n(e, Z(t, 3));
        }
        function xu(e, t) {
          var n = ie(e) ? kl : ya;
          return n(e, Z(t, 3));
        }
        var lg = Fr(function (e, t, n) {
          me.call(e, n) ? e[n].push(t) : Ut(e, n, [t]);
        });
        function pg(e, t, n, i) {
          (e = Ze(e) ? e : Dn(e)), (n = n && !i ? se(n) : 0);
          var o = e.length;
          return n < 0 && (n = Le(o + n, 0)), ti(e) ? n <= o && e.indexOf(t, n) > -1 : !!o && An(e, t, n) > -1;
        }
        var fg = ae(function (e, t, n) {
          var i = -1,
            o = typeof t == "function",
            l = Ze(e) ? _(e.length) : [];
          return (
            jt(e, function (f) {
              l[++i] = o ? nt(t, f, n) : nr(f, t, n);
            }),
            l
          );
        }),
          dg = Fr(function (e, t, n) {
            Ut(e, n, t);
          });
        function Jr(e, t) {
          var n = ie(e) ? Te : wa;
          return n(e, Z(t, 3));
        }
        function gg(e, t, n, i) {
          return e == null ? [] : (ie(t) || (t = t == null ? [] : [t]), (n = i ? u : n), ie(n) || (n = n == null ? [] : [n]), Pa(e, t, n));
        }
        var hg = Fr(
          function (e, t, n) {
            e[n ? 0 : 1].push(t);
          },
          function () {
            return [[], []];
          }
        );
        function mg(e, t, n) {
          var i = ie(e) ? Fi : jo,
            o = arguments.length < 3;
          return i(e, Z(t, 4), n, o, jt);
        }
        function vg(e, t, n) {
          var i = ie(e) ? Il : jo,
            o = arguments.length < 3;
          return i(e, Z(t, 4), n, o, ya);
        }
        function yg(e, t) {
          var n = ie(e) ? zt : _a;
          return n(e, jr(Z(t, 3)));
        }
        function _g(e) {
          var t = ie(e) ? ga : pf;
          return t(e);
        }
        function Cg(e, t, n) {
          (n ? Ke(e, t, n) : t === u) ? (t = 1) : (t = se(t));
          var i = ie(e) ? Fp : ff;
          return i(e, t);
        }
        function bg(e) {
          var t = ie(e) ? $p : gf;
          return t(e);
        }
        function xg(e) {
          if (e == null) return 0;
          if (Ze(e)) return ti(e) ? Sn(e) : e.length;
          var t = We(e);
          return t == Ct || t == bt ? e.size : os(e).length;
        }
        function Tg(e, t, n) {
          var i = ie(e) ? $i : hf;
          return n && Ke(e, t, n) && (t = u), i(e, Z(t, 3));
        }
        var Ag = ae(function (e, t) {
          if (e == null) return [];
          var n = t.length;
          return n > 1 && Ke(e, t[0], t[1]) ? (t = []) : n > 2 && Ke(t[0], t[1], t[2]) && (t = [t[0]]), Pa(e, Ge(t, 1), []);
        }),
          Zr =
            rp ||
            function () {
              return Ue.Date.now();
            };
        function wg(e, t) {
          if (typeof t != "function") throw new dt(p);
          return (
            (e = se(e)),
            function () {
              if (--e < 1) return t.apply(this, arguments);
            }
          );
        }
        function Tu(e, t, n) {
          return (t = n ? u : t), (t = e && t == null ? e.length : t), Nt(e, b, u, u, u, u, t);
        }
        function Au(e, t) {
          var n;
          if (typeof t != "function") throw new dt(p);
          return (
            (e = se(e)),
            function () {
              return --e > 0 && (n = t.apply(this, arguments)), e <= 1 && (t = u), n;
            }
          );
        }
        var Es = ae(function (e, t, n) {
          var i = x;
          if (n.length) {
            var o = Jt(n, On(Es));
            i |= X;
          }
          return Nt(e, i, t, n, o);
        }),
          wu = ae(function (e, t, n) {
            var i = x | D;
            if (n.length) {
              var o = Jt(n, On(wu));
              i |= X;
            }
            return Nt(t, i, e, n, o);
          });
        function Su(e, t, n) {
          t = n ? u : t;
          var i = Nt(e, H, u, u, u, u, u, t);
          return (i.placeholder = Su.placeholder), i;
        }
        function ku(e, t, n) {
          t = n ? u : t;
          var i = Nt(e, te, u, u, u, u, u, t);
          return (i.placeholder = ku.placeholder), i;
        }
        function Iu(e, t, n) {
          var i,
            o,
            l,
            f,
            d,
            h,
            S = 0,
            k = !1,
            R = !1,
            $ = !0;
          if (typeof e != "function") throw new dt(p);
          (t = yt(t) || 0), Ae(n) && ((k = !!n.leading), (R = "maxWait" in n), (l = R ? Le(yt(n.maxWait) || 0, t) : l), ($ = "trailing" in n ? !!n.trailing : $));
          function z(ke) {
            var wt = i,
              $t = o;
            return (i = o = u), (S = ke), (f = e.apply($t, wt)), f;
          }
          function j(ke) {
            return (S = ke), (d = ar(ue, t)), k ? z(ke) : f;
          }
          function oe(ke) {
            var wt = ke - h,
              $t = ke - S,
              Qu = t - wt;
            return R ? $e(Qu, l - $t) : Qu;
          }
          function ee(ke) {
            var wt = ke - h,
              $t = ke - S;
            return h === u || wt >= t || wt < 0 || (R && $t >= l);
          }
          function ue() {
            var ke = Zr();
            if (ee(ke)) return le(ke);
            d = ar(ue, oe(ke));
          }
          function le(ke) {
            return (d = u), $ && i ? z(ke) : ((i = o = u), f);
          }
          function ot() {
            d !== u && qa(d), (S = 0), (i = h = o = d = u);
          }
          function Qe() {
            return d === u ? f : le(Zr());
          }
          function at() {
            var ke = Zr(),
              wt = ee(ke);
            if (((i = arguments), (o = this), (h = ke), wt)) {
              if (d === u) return j(h);
              if (R) return qa(d), (d = ar(ue, t)), z(h);
            }
            return d === u && (d = ar(ue, t)), f;
          }
          return (at.cancel = ot), (at.flush = Qe), at;
        }
        var Sg = ae(function (e, t) {
          return va(e, 1, t);
        }),
          kg = ae(function (e, t, n) {
            return va(e, yt(t) || 0, n);
          });
        function Ig(e) {
          return Nt(e, U);
        }
        function Xr(e, t) {
          if (typeof e != "function" || (t != null && typeof t != "function")) throw new dt(p);
          var n = function () {
            var i = arguments,
              o = t ? t.apply(this, i) : i[0],
              l = n.cache;
            if (l.has(o)) return l.get(o);
            var f = e.apply(this, i);
            return (n.cache = l.set(o, f) || l), f;
          };
          return (n.cache = new (Xr.Cache || Dt)()), n;
        }
        Xr.Cache = Dt;
        function jr(e) {
          if (typeof e != "function") throw new dt(p);
          return function () {
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
        function Pg(e) {
          return Au(2, e);
        }
        var Eg = mf(function (e, t) {
          t = t.length == 1 && ie(t[0]) ? Te(t[0], rt(Z())) : Te(Ge(t, 1), rt(Z()));
          var n = t.length;
          return ae(function (i) {
            for (var o = -1, l = $e(i.length, n); ++o < l;) i[o] = t[o].call(this, i[o]);
            return nt(e, this, i);
          });
        }),
          Rs = ae(function (e, t) {
            var n = Jt(t, On(Rs));
            return Nt(e, X, u, t, n);
          }),
          Pu = ae(function (e, t) {
            var n = Jt(t, On(Pu));
            return Nt(e, I, u, t, n);
          }),
          Rg = qt(function (e, t) {
            return Nt(e, L, u, u, u, t);
          });
        function Mg(e, t) {
          if (typeof e != "function") throw new dt(p);
          return (t = t === u ? t : se(t)), ae(e, t);
        }
        function Og(e, t) {
          if (typeof e != "function") throw new dt(p);
          return (
            (t = t == null ? 0 : Le(se(t), 0)),
            ae(function (n) {
              var i = n[t],
                o = nn(n, 0, t);
              return i && Yt(o, i), nt(e, this, o);
            })
          );
        }
        function Lg(e, t, n) {
          var i = !0,
            o = !0;
          if (typeof e != "function") throw new dt(p);
          return Ae(n) && ((i = "leading" in n ? !!n.leading : i), (o = "trailing" in n ? !!n.trailing : o)), Iu(e, t, { leading: i, maxWait: t, trailing: o });
        }
        function Dg(e) {
          return Tu(e, 1);
        }
        function Ug(e, t) {
          return Rs(hs(t), e);
        }
        function Ng() {
          if (!arguments.length) return [];
          var e = arguments[0];
          return ie(e) ? e : [e];
        }
        function qg(e) {
          return ht(e, q);
        }
        function Gg(e, t) {
          return (t = typeof t == "function" ? t : u), ht(e, q, t);
        }
        function Bg(e) {
          return ht(e, M | q);
        }
        function Fg(e, t) {
          return (t = typeof t == "function" ? t : u), ht(e, M | q, t);
        }
        function $g(e, t) {
          return t == null || ma(e, t, Ne(t));
        }
        function At(e, t) {
          return e === t || (e !== e && t !== t);
        }
        var Wg = Vr(rs),
          Hg = Vr(function (e, t) {
            return e >= t;
          }),
          yn = xa(
            (function () {
              return arguments;
            })()
          )
            ? xa
            : function (e) {
              return we(e) && me.call(e, "callee") && !ua.call(e, "callee");
            },
          ie = _.isArray,
          Vg = Wo ? rt(Wo) : Xp;
        function Ze(e) {
          return e != null && ei(e.length) && !Bt(e);
        }
        function Se(e) {
          return we(e) && Ze(e);
        }
        function Kg(e) {
          return e === !0 || e === !1 || (we(e) && Ve(e) == lt);
        }
        var rn = sp || $s,
          Qg = Ho ? rt(Ho) : jp;
        function zg(e) {
          return we(e) && e.nodeType === 1 && !ur(e);
        }
        function Yg(e) {
          if (e == null) return !0;
          if (Ze(e) && (ie(e) || typeof e == "string" || typeof e.splice == "function" || rn(e) || Ln(e) || yn(e))) return !e.length;
          var t = We(e);
          if (t == Ct || t == bt) return !e.size;
          if (or(e)) return !os(e).length;
          for (var n in e) if (me.call(e, n)) return !1;
          return !0;
        }
        function Jg(e, t) {
          return rr(e, t);
        }
        function Zg(e, t, n) {
          n = typeof n == "function" ? n : u;
          var i = n ? n(e, t) : u;
          return i === u ? rr(e, t, u, n) : !!i;
        }
        function Ms(e) {
          if (!we(e)) return !1;
          var t = Ve(e);
          return t == Qt || t == It || (typeof e.message == "string" && typeof e.name == "string" && !ur(e));
        }
        function Xg(e) {
          return typeof e == "number" && la(e);
        }
        function Bt(e) {
          if (!Ae(e)) return !1;
          var t = Ve(e);
          return t == Mt || t == vo || t == cn || t == bc;
        }
        function Eu(e) {
          return typeof e == "number" && e == se(e);
        }
        function ei(e) {
          return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Q;
        }
        function Ae(e) {
          var t = typeof e;
          return e != null && (t == "object" || t == "function");
        }
        function we(e) {
          return e != null && typeof e == "object";
        }
        var Ru = Vo ? rt(Vo) : tf;
        function jg(e, t) {
          return e === t || ss(e, t, xs(t));
        }
        function eh(e, t, n) {
          return (n = typeof n == "function" ? n : u), ss(e, t, xs(t), n);
        }
        function th(e) {
          return Mu(e) && e != +e;
        }
        function nh(e) {
          if (Gf(e)) throw new re(a);
          return Ta(e);
        }
        function rh(e) {
          return e === null;
        }
        function ih(e) {
          return e == null;
        }
        function Mu(e) {
          return typeof e == "number" || (we(e) && Ve(e) == Wn);
        }
        function ur(e) {
          if (!we(e) || Ve(e) != Ot) return !1;
          var t = kr(e);
          if (t === null) return !0;
          var n = me.call(t, "constructor") && t.constructor;
          return typeof n == "function" && n instanceof n && Tr.call(n) == jl;
        }
        var Os = Ko ? rt(Ko) : nf;
        function sh(e) {
          return Eu(e) && e >= -Q && e <= Q;
        }
        var Ou = Qo ? rt(Qo) : rf;
        function ti(e) {
          return typeof e == "string" || (!ie(e) && we(e) && Ve(e) == Vn);
        }
        function st(e) {
          return typeof e == "symbol" || (we(e) && Ve(e) == gr);
        }
        var Ln = zo ? rt(zo) : sf;
        function oh(e) {
          return e === u;
        }
        function ah(e) {
          return we(e) && We(e) == Kn;
        }
        function uh(e) {
          return we(e) && Ve(e) == Tc;
        }
        var ch = Vr(as),
          lh = Vr(function (e, t) {
            return e <= t;
          });
        function Lu(e) {
          if (!e) return [];
          if (Ze(e)) return ti(e) ? xt(e) : Je(e);
          if (Yn && e[Yn]) return Fl(e[Yn]());
          var t = We(e),
            n = t == Ct ? zi : t == bt ? Cr : Dn;
          return n(e);
        }
        function Ft(e) {
          if (!e) return e === 0 ? e : 0;
          if (((e = yt(e)), e === F || e === -F)) {
            var t = e < 0 ? -1 : 1;
            return t * ne;
          }
          return e === e ? e : 0;
        }
        function se(e) {
          var t = Ft(e),
            n = t % 1;
          return t === t ? (n ? t - n : t) : 0;
        }
        function Du(e) {
          return e ? gn(se(e), 0, fe) : 0;
        }
        function yt(e) {
          if (typeof e == "number") return e;
          if (st(e)) return pe;
          if (Ae(e)) {
            var t = typeof e.valueOf == "function" ? e.valueOf() : e;
            e = Ae(t) ? t + "" : t;
          }
          if (typeof e != "string") return e === 0 ? e : +e;
          e = ea(e);
          var n = Hc.test(e);
          return n || Kc.test(e) ? Al(e.slice(2), n ? 2 : 8) : Wc.test(e) ? pe : +e;
        }
        function Uu(e) {
          return Et(e, Xe(e));
        }
        function ph(e) {
          return e ? gn(se(e), -Q, Q) : e === 0 ? e : 0;
        }
        function he(e) {
          return e == null ? "" : it(e);
        }
        var fh = Rn(function (e, t) {
          if (or(t) || Ze(t)) {
            Et(t, Ne(t), e);
            return;
          }
          for (var n in t) me.call(t, n) && er(e, n, t[n]);
        }),
          Nu = Rn(function (e, t) {
            Et(t, Xe(t), e);
          }),
          ni = Rn(function (e, t, n, i) {
            Et(t, Xe(t), e, i);
          }),
          dh = Rn(function (e, t, n, i) {
            Et(t, Ne(t), e, i);
          }),
          gh = qt(es);
        function hh(e, t) {
          var n = En(e);
          return t == null ? n : ha(n, t);
        }
        var mh = ae(function (e, t) {
          e = ye(e);
          var n = -1,
            i = t.length,
            o = i > 2 ? t[2] : u;
          for (o && Ke(t[0], t[1], o) && (i = 1); ++n < i;)
            for (var l = t[n], f = Xe(l), d = -1, h = f.length; ++d < h;) {
              var S = f[d],
                k = e[S];
              (k === u || (At(k, kn[S]) && !me.call(e, S))) && (e[S] = l[S]);
            }
          return e;
        }),
          vh = ae(function (e) {
            return e.push(u, eu), nt(qu, u, e);
          });
        function yh(e, t) {
          return Jo(e, Z(t, 3), Pt);
        }
        function _h(e, t) {
          return Jo(e, Z(t, 3), ns);
        }
        function Ch(e, t) {
          return e == null ? e : ts(e, Z(t, 3), Xe);
        }
        function bh(e, t) {
          return e == null ? e : Ca(e, Z(t, 3), Xe);
        }
        function xh(e, t) {
          return e && Pt(e, Z(t, 3));
        }
        function Th(e, t) {
          return e && ns(e, Z(t, 3));
        }
        function Ah(e) {
          return e == null ? [] : Nr(e, Ne(e));
        }
        function wh(e) {
          return e == null ? [] : Nr(e, Xe(e));
        }
        function Ls(e, t, n) {
          var i = e == null ? u : hn(e, t);
          return i === u ? n : i;
        }
        function Sh(e, t) {
          return e != null && ru(e, t, zp);
        }
        function Ds(e, t) {
          return e != null && ru(e, t, Yp);
        }
        var kh = Ya(function (e, t, n) {
          t != null && typeof t.toString != "function" && (t = Ar.call(t)), (e[t] = n);
        }, Ns(je)),
          Ih = Ya(function (e, t, n) {
            t != null && typeof t.toString != "function" && (t = Ar.call(t)), me.call(e, t) ? e[t].push(n) : (e[t] = [n]);
          }, Z),
          Ph = ae(nr);
        function Ne(e) {
          return Ze(e) ? da(e) : os(e);
        }
        function Xe(e) {
          return Ze(e) ? da(e, !0) : of(e);
        }
        function Eh(e, t) {
          var n = {};
          return (
            (t = Z(t, 3)),
            Pt(e, function (i, o, l) {
              Ut(n, t(i, o, l), i);
            }),
            n
          );
        }
        function Rh(e, t) {
          var n = {};
          return (
            (t = Z(t, 3)),
            Pt(e, function (i, o, l) {
              Ut(n, o, t(i, o, l));
            }),
            n
          );
        }
        var Mh = Rn(function (e, t, n) {
          qr(e, t, n);
        }),
          qu = Rn(function (e, t, n, i) {
            qr(e, t, n, i);
          }),
          Oh = qt(function (e, t) {
            var n = {};
            if (e == null) return n;
            var i = !1;
            (t = Te(t, function (l) {
              return (l = tn(l, e)), i || (i = l.length > 1), l;
            })),
              Et(e, Cs(e), n),
              i && (n = ht(n, M | N | q, kf));
            for (var o = t.length; o--;) fs(n, t[o]);
            return n;
          });
        function Lh(e, t) {
          return Gu(e, jr(Z(t)));
        }
        var Dh = qt(function (e, t) {
          return e == null ? {} : uf(e, t);
        });
        function Gu(e, t) {
          if (e == null) return {};
          var n = Te(Cs(e), function (i) {
            return [i];
          });
          return (
            (t = Z(t)),
            Ea(e, n, function (i, o) {
              return t(i, o[0]);
            })
          );
        }
        function Uh(e, t, n) {
          t = tn(t, e);
          var i = -1,
            o = t.length;
          for (o || ((o = 1), (e = u)); ++i < o;) {
            var l = e == null ? u : e[Rt(t[i])];
            l === u && ((i = o), (l = n)), (e = Bt(l) ? l.call(e) : l);
          }
          return e;
        }
        function Nh(e, t, n) {
          return e == null ? e : ir(e, t, n);
        }
        function qh(e, t, n, i) {
          return (i = typeof i == "function" ? i : u), e == null ? e : ir(e, t, n, i);
        }
        var Bu = Xa(Ne),
          Fu = Xa(Xe);
        function Gh(e, t, n) {
          var i = ie(e),
            o = i || rn(e) || Ln(e);
          if (((t = Z(t, 4)), n == null)) {
            var l = e && e.constructor;
            o ? (n = i ? new l() : []) : Ae(e) ? (n = Bt(l) ? En(kr(e)) : {}) : (n = {});
          }
          return (
            (o ? ft : Pt)(e, function (f, d, h) {
              return t(n, f, d, h);
            }),
            n
          );
        }
        function Bh(e, t) {
          return e == null ? !0 : fs(e, t);
        }
        function Fh(e, t, n) {
          return e == null ? e : Da(e, t, hs(n));
        }
        function $h(e, t, n, i) {
          return (i = typeof i == "function" ? i : u), e == null ? e : Da(e, t, hs(n), i);
        }
        function Dn(e) {
          return e == null ? [] : Qi(e, Ne(e));
        }
        function Wh(e) {
          return e == null ? [] : Qi(e, Xe(e));
        }
        function Hh(e, t, n) {
          return n === u && ((n = t), (t = u)), n !== u && ((n = yt(n)), (n = n === n ? n : 0)), t !== u && ((t = yt(t)), (t = t === t ? t : 0)), gn(yt(e), t, n);
        }
        function Vh(e, t, n) {
          return (t = Ft(t)), n === u ? ((n = t), (t = 0)) : (n = Ft(n)), (e = yt(e)), Jp(e, t, n);
        }
        function Kh(e, t, n) {
          if (
            (n && typeof n != "boolean" && Ke(e, t, n) && (t = n = u),
              n === u && (typeof t == "boolean" ? ((n = t), (t = u)) : typeof e == "boolean" && ((n = e), (e = u))),
              e === u && t === u ? ((e = 0), (t = 1)) : ((e = Ft(e)), t === u ? ((t = e), (e = 0)) : (t = Ft(t))),
              e > t)
          ) {
            var i = e;
            (e = t), (t = i);
          }
          if (n || e % 1 || t % 1) {
            var o = pa();
            return $e(e + o * (t - e + Tl("1e-" + ((o + "").length - 1))), t);
          }
          return cs(e, t);
        }
        var Qh = Mn(function (e, t, n) {
          return (t = t.toLowerCase()), e + (n ? $u(t) : t);
        });
        function $u(e) {
          return Us(he(e).toLowerCase());
        }
        function Wu(e) {
          return (e = he(e)), e && e.replace(zc, Ul).replace(dl, "");
        }
        function zh(e, t, n) {
          (e = he(e)), (t = it(t));
          var i = e.length;
          n = n === u ? i : gn(se(n), 0, i);
          var o = n;
          return (n -= t.length), n >= 0 && e.slice(n, o) == t;
        }
        function Yh(e) {
          return (e = he(e)), e && Ic.test(e) ? e.replace(Co, Nl) : e;
        }
        function Jh(e) {
          return (e = he(e)), e && Lc.test(e) ? e.replace(Ri, "\\$&") : e;
        }
        var Zh = Mn(function (e, t, n) {
          return e + (n ? "-" : "") + t.toLowerCase();
        }),
          Xh = Mn(function (e, t, n) {
            return e + (n ? " " : "") + t.toLowerCase();
          }),
          jh = Ka("toLowerCase");
        function em(e, t, n) {
          (e = he(e)), (t = se(t));
          var i = t ? Sn(e) : 0;
          if (!t || i >= t) return e;
          var o = (t - i) / 2;
          return Hr(Rr(o), n) + e + Hr(Er(o), n);
        }
        function tm(e, t, n) {
          (e = he(e)), (t = se(t));
          var i = t ? Sn(e) : 0;
          return t && i < t ? e + Hr(t - i, n) : e;
        }
        function nm(e, t, n) {
          (e = he(e)), (t = se(t));
          var i = t ? Sn(e) : 0;
          return t && i < t ? Hr(t - i, n) + e : e;
        }
        function rm(e, t, n) {
          return n || t == null ? (t = 0) : t && (t = +t), cp(he(e).replace(Mi, ""), t || 0);
        }
        function im(e, t, n) {
          return (n ? Ke(e, t, n) : t === u) ? (t = 1) : (t = se(t)), ls(he(e), t);
        }
        function sm() {
          var e = arguments,
            t = he(e[0]);
          return e.length < 3 ? t : t.replace(e[1], e[2]);
        }
        var om = Mn(function (e, t, n) {
          return e + (n ? "_" : "") + t.toLowerCase();
        });
        function am(e, t, n) {
          return (
            n && typeof n != "number" && Ke(e, t, n) && (t = n = u),
            (n = n === u ? fe : n >>> 0),
            n ? ((e = he(e)), e && (typeof t == "string" || (t != null && !Os(t))) && ((t = it(t)), !t && wn(e)) ? nn(xt(e), 0, n) : e.split(t, n)) : []
          );
        }
        var um = Mn(function (e, t, n) {
          return e + (n ? " " : "") + Us(t);
        });
        function cm(e, t, n) {
          return (e = he(e)), (n = n == null ? 0 : gn(se(n), 0, e.length)), (t = it(t)), e.slice(n, n + t.length) == t;
        }
        function lm(e, t, n) {
          var i = c.templateSettings;
          n && Ke(e, t, n) && (t = u), (e = he(e)), (t = ni({}, t, i, ja));
          var o = ni({}, t.imports, i.imports, ja),
            l = Ne(o),
            f = Qi(o, l),
            d,
            h,
            S = 0,
            k = t.interpolate || hr,
            R = "__p += '",
            $ = Yi((t.escape || hr).source + "|" + k.source + "|" + (k === bo ? $c : hr).source + "|" + (t.evaluate || hr).source + "|$", "g"),
            z =
              "//# sourceURL=" +
              (me.call(t, "sourceURL") ? (t.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++yl + "]") +
              `
`;
          e.replace($, function (ee, ue, le, ot, Qe, at) {
            return (
              le || (le = ot),
              (R += e.slice(S, at).replace(Yc, ql)),
              ue &&
              ((d = !0),
                (R +=
                  `' +
__e(` +
                  ue +
                  `) +
'`)),
              Qe &&
              ((h = !0),
                (R +=
                  `';
` +
                  Qe +
                  `;
__p += '`)),
              le &&
              (R +=
                `' +
((__t = (` +
                le +
                `)) == null ? '' : __t) +
'`),
              (S = at + ee.length),
              ee
            );
          }),
            (R += `';
`);
          var j = me.call(t, "variable") && t.variable;
          if (!j)
            R =
              `with (obj) {
` +
              R +
              `
}
`;
          else if (Bc.test(j)) throw new re(m);
          (R = (h ? R.replace(Ac, "") : R).replace(wc, "$1").replace(Sc, "$1;")),
            (R =
              "function(" +
              (j || "obj") +
              `) {
` +
              (j
                ? ""
                : `obj || (obj = {});
`) +
              "var __t, __p = ''" +
              (d ? ", __e = _.escape" : "") +
              (h
                ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`
                : `;
`) +
              R +
              `return __p
}`);
          var oe = Vu(function () {
            return de(l, z + "return " + R).apply(u, f);
          });
          if (((oe.source = R), Ms(oe))) throw oe;
          return oe;
        }
        function pm(e) {
          return he(e).toLowerCase();
        }
        function fm(e) {
          return he(e).toUpperCase();
        }
        function dm(e, t, n) {
          if (((e = he(e)), e && (n || t === u))) return ea(e);
          if (!e || !(t = it(t))) return e;
          var i = xt(e),
            o = xt(t),
            l = ta(i, o),
            f = na(i, o) + 1;
          return nn(i, l, f).join("");
        }
        function gm(e, t, n) {
          if (((e = he(e)), e && (n || t === u))) return e.slice(0, ia(e) + 1);
          if (!e || !(t = it(t))) return e;
          var i = xt(e),
            o = na(i, xt(t)) + 1;
          return nn(i, 0, o).join("");
        }
        function hm(e, t, n) {
          if (((e = he(e)), e && (n || t === u))) return e.replace(Mi, "");
          if (!e || !(t = it(t))) return e;
          var i = xt(e),
            o = ta(i, xt(t));
          return nn(i, o).join("");
        }
        function mm(e, t) {
          var n = V,
            i = Ee;
          if (Ae(t)) {
            var o = "separator" in t ? t.separator : o;
            (n = "length" in t ? se(t.length) : n), (i = "omission" in t ? it(t.omission) : i);
          }
          e = he(e);
          var l = e.length;
          if (wn(e)) {
            var f = xt(e);
            l = f.length;
          }
          if (n >= l) return e;
          var d = n - Sn(i);
          if (d < 1) return i;
          var h = f ? nn(f, 0, d).join("") : e.slice(0, d);
          if (o === u) return h + i;
          if ((f && (d += h.length - d), Os(o))) {
            if (e.slice(d).search(o)) {
              var S,
                k = h;
              for (o.global || (o = Yi(o.source, he(xo.exec(o)) + "g")), o.lastIndex = 0; (S = o.exec(k));) var R = S.index;
              h = h.slice(0, R === u ? d : R);
            }
          } else if (e.indexOf(it(o), d) != d) {
            var $ = h.lastIndexOf(o);
            $ > -1 && (h = h.slice(0, $));
          }
          return h + i;
        }
        function vm(e) {
          return (e = he(e)), e && kc.test(e) ? e.replace(_o, Vl) : e;
        }
        var ym = Mn(function (e, t, n) {
          return e + (n ? " " : "") + t.toUpperCase();
        }),
          Us = Ka("toUpperCase");
        function Hu(e, t, n) {
          return (e = he(e)), (t = n ? u : t), t === u ? (Bl(e) ? zl(e) : Rl(e)) : e.match(t) || [];
        }
        var Vu = ae(function (e, t) {
          try {
            return nt(e, u, t);
          } catch (n) {
            return Ms(n) ? n : new re(n);
          }
        }),
          _m = qt(function (e, t) {
            return (
              ft(t, function (n) {
                (n = Rt(n)), Ut(e, n, Es(e[n], e));
              }),
              e
            );
          });
        function Cm(e) {
          var t = e == null ? 0 : e.length,
            n = Z();
          return (
            (e = t
              ? Te(e, function (i) {
                if (typeof i[1] != "function") throw new dt(p);
                return [n(i[0]), i[1]];
              })
              : []),
            ae(function (i) {
              for (var o = -1; ++o < t;) {
                var l = e[o];
                if (nt(l[0], this, i)) return nt(l[1], this, i);
              }
            })
          );
        }
        function bm(e) {
          return Vp(ht(e, M));
        }
        function Ns(e) {
          return function () {
            return e;
          };
        }
        function xm(e, t) {
          return e == null || e !== e ? t : e;
        }
        var Tm = za(),
          Am = za(!0);
        function je(e) {
          return e;
        }
        function qs(e) {
          return Aa(typeof e == "function" ? e : ht(e, M));
        }
        function wm(e) {
          return Sa(ht(e, M));
        }
        function Sm(e, t) {
          return ka(e, ht(t, M));
        }
        var km = ae(function (e, t) {
          return function (n) {
            return nr(n, e, t);
          };
        }),
          Im = ae(function (e, t) {
            return function (n) {
              return nr(e, n, t);
            };
          });
        function Gs(e, t, n) {
          var i = Ne(t),
            o = Nr(t, i);
          n == null && !(Ae(t) && (o.length || !i.length)) && ((n = t), (t = e), (e = this), (o = Nr(t, Ne(t))));
          var l = !(Ae(n) && "chain" in n) || !!n.chain,
            f = Bt(e);
          return (
            ft(o, function (d) {
              var h = t[d];
              (e[d] = h),
                f &&
                (e.prototype[d] = function () {
                  var S = this.__chain__;
                  if (l || S) {
                    var k = e(this.__wrapped__),
                      R = (k.__actions__ = Je(this.__actions__));
                    return R.push({ func: h, args: arguments, thisArg: e }), (k.__chain__ = S), k;
                  }
                  return h.apply(e, Yt([this.value()], arguments));
                });
            }),
            e
          );
        }
        function Pm() {
          return Ue._ === this && (Ue._ = ep), this;
        }
        function Bs() { }
        function Em(e) {
          return (
            (e = se(e)),
            ae(function (t) {
              return Ia(t, e);
            })
          );
        }
        var Rm = vs(Te),
          Mm = vs(Yo),
          Om = vs($i);
        function Ku(e) {
          return As(e) ? Wi(Rt(e)) : cf(e);
        }
        function Lm(e) {
          return function (t) {
            return e == null ? u : hn(e, t);
          };
        }
        var Dm = Ja(),
          Um = Ja(!0);
        function Fs() {
          return [];
        }
        function $s() {
          return !1;
        }
        function Nm() {
          return {};
        }
        function qm() {
          return "";
        }
        function Gm() {
          return !0;
        }
        function Bm(e, t) {
          if (((e = se(e)), e < 1 || e > Q)) return [];
          var n = fe,
            i = $e(e, fe);
          (t = Z(t)), (e -= fe);
          for (var o = Ki(i, t); ++n < e;) t(n);
          return o;
        }
        function Fm(e) {
          return ie(e) ? Te(e, Rt) : st(e) ? [e] : Je(fu(he(e)));
        }
        function $m(e) {
          var t = ++Xl;
          return he(e) + t;
        }
        var Wm = Wr(function (e, t) {
          return e + t;
        }, 0),
          Hm = ys("ceil"),
          Vm = Wr(function (e, t) {
            return e / t;
          }, 1),
          Km = ys("floor");
        function Qm(e) {
          return e && e.length ? Ur(e, je, rs) : u;
        }
        function zm(e, t) {
          return e && e.length ? Ur(e, Z(t, 2), rs) : u;
        }
        function Ym(e) {
          return Xo(e, je);
        }
        function Jm(e, t) {
          return Xo(e, Z(t, 2));
        }
        function Zm(e) {
          return e && e.length ? Ur(e, je, as) : u;
        }
        function Xm(e, t) {
          return e && e.length ? Ur(e, Z(t, 2), as) : u;
        }
        var jm = Wr(function (e, t) {
          return e * t;
        }, 1),
          ev = ys("round"),
          tv = Wr(function (e, t) {
            return e - t;
          }, 0);
        function nv(e) {
          return e && e.length ? Vi(e, je) : 0;
        }
        function rv(e, t) {
          return e && e.length ? Vi(e, Z(t, 2)) : 0;
        }
        return (
          (c.after = wg),
          (c.ary = Tu),
          (c.assign = fh),
          (c.assignIn = Nu),
          (c.assignInWith = ni),
          (c.assignWith = dh),
          (c.at = gh),
          (c.before = Au),
          (c.bind = Es),
          (c.bindAll = _m),
          (c.bindKey = wu),
          (c.castArray = Ng),
          (c.chain = Cu),
          (c.chunk = Kf),
          (c.compact = Qf),
          (c.concat = zf),
          (c.cond = Cm),
          (c.conforms = bm),
          (c.constant = Ns),
          (c.countBy = ng),
          (c.create = hh),
          (c.curry = Su),
          (c.curryRight = ku),
          (c.debounce = Iu),
          (c.defaults = mh),
          (c.defaultsDeep = vh),
          (c.defer = Sg),
          (c.delay = kg),
          (c.difference = Yf),
          (c.differenceBy = Jf),
          (c.differenceWith = Zf),
          (c.drop = Xf),
          (c.dropRight = jf),
          (c.dropRightWhile = ed),
          (c.dropWhile = td),
          (c.fill = nd),
          (c.filter = ig),
          (c.flatMap = ag),
          (c.flatMapDeep = ug),
          (c.flatMapDepth = cg),
          (c.flatten = mu),
          (c.flattenDeep = rd),
          (c.flattenDepth = id),
          (c.flip = Ig),
          (c.flow = Tm),
          (c.flowRight = Am),
          (c.fromPairs = sd),
          (c.functions = Ah),
          (c.functionsIn = wh),
          (c.groupBy = lg),
          (c.initial = ad),
          (c.intersection = ud),
          (c.intersectionBy = cd),
          (c.intersectionWith = ld),
          (c.invert = kh),
          (c.invertBy = Ih),
          (c.invokeMap = fg),
          (c.iteratee = qs),
          (c.keyBy = dg),
          (c.keys = Ne),
          (c.keysIn = Xe),
          (c.map = Jr),
          (c.mapKeys = Eh),
          (c.mapValues = Rh),
          (c.matches = wm),
          (c.matchesProperty = Sm),
          (c.memoize = Xr),
          (c.merge = Mh),
          (c.mergeWith = qu),
          (c.method = km),
          (c.methodOf = Im),
          (c.mixin = Gs),
          (c.negate = jr),
          (c.nthArg = Em),
          (c.omit = Oh),
          (c.omitBy = Lh),
          (c.once = Pg),
          (c.orderBy = gg),
          (c.over = Rm),
          (c.overArgs = Eg),
          (c.overEvery = Mm),
          (c.overSome = Om),
          (c.partial = Rs),
          (c.partialRight = Pu),
          (c.partition = hg),
          (c.pick = Dh),
          (c.pickBy = Gu),
          (c.property = Ku),
          (c.propertyOf = Lm),
          (c.pull = gd),
          (c.pullAll = yu),
          (c.pullAllBy = hd),
          (c.pullAllWith = md),
          (c.pullAt = vd),
          (c.range = Dm),
          (c.rangeRight = Um),
          (c.rearg = Rg),
          (c.reject = yg),
          (c.remove = yd),
          (c.rest = Mg),
          (c.reverse = Is),
          (c.sampleSize = Cg),
          (c.set = Nh),
          (c.setWith = qh),
          (c.shuffle = bg),
          (c.slice = _d),
          (c.sortBy = Ag),
          (c.sortedUniq = Sd),
          (c.sortedUniqBy = kd),
          (c.split = am),
          (c.spread = Og),
          (c.tail = Id),
          (c.take = Pd),
          (c.takeRight = Ed),
          (c.takeRightWhile = Rd),
          (c.takeWhile = Md),
          (c.tap = Qd),
          (c.throttle = Lg),
          (c.thru = Yr),
          (c.toArray = Lu),
          (c.toPairs = Bu),
          (c.toPairsIn = Fu),
          (c.toPath = Fm),
          (c.toPlainObject = Uu),
          (c.transform = Gh),
          (c.unary = Dg),
          (c.union = Od),
          (c.unionBy = Ld),
          (c.unionWith = Dd),
          (c.uniq = Ud),
          (c.uniqBy = Nd),
          (c.uniqWith = qd),
          (c.unset = Bh),
          (c.unzip = Ps),
          (c.unzipWith = _u),
          (c.update = Fh),
          (c.updateWith = $h),
          (c.values = Dn),
          (c.valuesIn = Wh),
          (c.without = Gd),
          (c.words = Hu),
          (c.wrap = Ug),
          (c.xor = Bd),
          (c.xorBy = Fd),
          (c.xorWith = $d),
          (c.zip = Wd),
          (c.zipObject = Hd),
          (c.zipObjectDeep = Vd),
          (c.zipWith = Kd),
          (c.entries = Bu),
          (c.entriesIn = Fu),
          (c.extend = Nu),
          (c.extendWith = ni),
          Gs(c, c),
          (c.add = Wm),
          (c.attempt = Vu),
          (c.camelCase = Qh),
          (c.capitalize = $u),
          (c.ceil = Hm),
          (c.clamp = Hh),
          (c.clone = qg),
          (c.cloneDeep = Bg),
          (c.cloneDeepWith = Fg),
          (c.cloneWith = Gg),
          (c.conformsTo = $g),
          (c.deburr = Wu),
          (c.defaultTo = xm),
          (c.divide = Vm),
          (c.endsWith = zh),
          (c.eq = At),
          (c.escape = Yh),
          (c.escapeRegExp = Jh),
          (c.every = rg),
          (c.find = sg),
          (c.findIndex = gu),
          (c.findKey = yh),
          (c.findLast = og),
          (c.findLastIndex = hu),
          (c.findLastKey = _h),
          (c.floor = Km),
          (c.forEach = bu),
          (c.forEachRight = xu),
          (c.forIn = Ch),
          (c.forInRight = bh),
          (c.forOwn = xh),
          (c.forOwnRight = Th),
          (c.get = Ls),
          (c.gt = Wg),
          (c.gte = Hg),
          (c.has = Sh),
          (c.hasIn = Ds),
          (c.head = vu),
          (c.identity = je),
          (c.includes = pg),
          (c.indexOf = od),
          (c.inRange = Vh),
          (c.invoke = Ph),
          (c.isArguments = yn),
          (c.isArray = ie),
          (c.isArrayBuffer = Vg),
          (c.isArrayLike = Ze),
          (c.isArrayLikeObject = Se),
          (c.isBoolean = Kg),
          (c.isBuffer = rn),
          (c.isDate = Qg),
          (c.isElement = zg),
          (c.isEmpty = Yg),
          (c.isEqual = Jg),
          (c.isEqualWith = Zg),
          (c.isError = Ms),
          (c.isFinite = Xg),
          (c.isFunction = Bt),
          (c.isInteger = Eu),
          (c.isLength = ei),
          (c.isMap = Ru),
          (c.isMatch = jg),
          (c.isMatchWith = eh),
          (c.isNaN = th),
          (c.isNative = nh),
          (c.isNil = ih),
          (c.isNull = rh),
          (c.isNumber = Mu),
          (c.isObject = Ae),
          (c.isObjectLike = we),
          (c.isPlainObject = ur),
          (c.isRegExp = Os),
          (c.isSafeInteger = sh),
          (c.isSet = Ou),
          (c.isString = ti),
          (c.isSymbol = st),
          (c.isTypedArray = Ln),
          (c.isUndefined = oh),
          (c.isWeakMap = ah),
          (c.isWeakSet = uh),
          (c.join = pd),
          (c.kebabCase = Zh),
          (c.last = vt),
          (c.lastIndexOf = fd),
          (c.lowerCase = Xh),
          (c.lowerFirst = jh),
          (c.lt = ch),
          (c.lte = lh),
          (c.max = Qm),
          (c.maxBy = zm),
          (c.mean = Ym),
          (c.meanBy = Jm),
          (c.min = Zm),
          (c.minBy = Xm),
          (c.stubArray = Fs),
          (c.stubFalse = $s),
          (c.stubObject = Nm),
          (c.stubString = qm),
          (c.stubTrue = Gm),
          (c.multiply = jm),
          (c.nth = dd),
          (c.noConflict = Pm),
          (c.noop = Bs),
          (c.now = Zr),
          (c.pad = em),
          (c.padEnd = tm),
          (c.padStart = nm),
          (c.parseInt = rm),
          (c.random = Kh),
          (c.reduce = mg),
          (c.reduceRight = vg),
          (c.repeat = im),
          (c.replace = sm),
          (c.result = Uh),
          (c.round = ev),
          (c.runInContext = g),
          (c.sample = _g),
          (c.size = xg),
          (c.snakeCase = om),
          (c.some = Tg),
          (c.sortedIndex = Cd),
          (c.sortedIndexBy = bd),
          (c.sortedIndexOf = xd),
          (c.sortedLastIndex = Td),
          (c.sortedLastIndexBy = Ad),
          (c.sortedLastIndexOf = wd),
          (c.startCase = um),
          (c.startsWith = cm),
          (c.subtract = tv),
          (c.sum = nv),
          (c.sumBy = rv),
          (c.template = lm),
          (c.times = Bm),
          (c.toFinite = Ft),
          (c.toInteger = se),
          (c.toLength = Du),
          (c.toLower = pm),
          (c.toNumber = yt),
          (c.toSafeInteger = ph),
          (c.toString = he),
          (c.toUpper = fm),
          (c.trim = dm),
          (c.trimEnd = gm),
          (c.trimStart = hm),
          (c.truncate = mm),
          (c.unescape = vm),
          (c.uniqueId = $m),
          (c.upperCase = ym),
          (c.upperFirst = Us),
          (c.each = bu),
          (c.eachRight = xu),
          (c.first = vu),
          Gs(
            c,
            (function () {
              var e = {};
              return (
                Pt(c, function (t, n) {
                  me.call(c.prototype, n) || (e[n] = t);
                }),
                e
              );
            })(),
            { chain: !1 }
          ),
          (c.VERSION = r),
          ft(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function (e) {
            c[e].placeholder = c;
          }),
          ft(["drop", "take"], function (e, t) {
            (ce.prototype[e] = function (n) {
              n = n === u ? 1 : Le(se(n), 0);
              var i = this.__filtered__ && !t ? new ce(this) : this.clone();
              return i.__filtered__ ? (i.__takeCount__ = $e(n, i.__takeCount__)) : i.__views__.push({ size: $e(n, fe), type: e + (i.__dir__ < 0 ? "Right" : "") }), i;
            }),
              (ce.prototype[e + "Right"] = function (n) {
                return this.reverse()[e](n).reverse();
              });
          }),
          ft(["filter", "map", "takeWhile"], function (e, t) {
            var n = t + 1,
              i = n == B || n == J;
            ce.prototype[e] = function (o) {
              var l = this.clone();
              return l.__iteratees__.push({ iteratee: Z(o, 3), type: n }), (l.__filtered__ = l.__filtered__ || i), l;
            };
          }),
          ft(["head", "last"], function (e, t) {
            var n = "take" + (t ? "Right" : "");
            ce.prototype[e] = function () {
              return this[n](1).value()[0];
            };
          }),
          ft(["initial", "tail"], function (e, t) {
            var n = "drop" + (t ? "" : "Right");
            ce.prototype[e] = function () {
              return this.__filtered__ ? new ce(this) : this[n](1);
            };
          }),
          (ce.prototype.compact = function () {
            return this.filter(je);
          }),
          (ce.prototype.find = function (e) {
            return this.filter(e).head();
          }),
          (ce.prototype.findLast = function (e) {
            return this.reverse().find(e);
          }),
          (ce.prototype.invokeMap = ae(function (e, t) {
            return typeof e == "function"
              ? new ce(this)
              : this.map(function (n) {
                return nr(n, e, t);
              });
          })),
          (ce.prototype.reject = function (e) {
            return this.filter(jr(Z(e)));
          }),
          (ce.prototype.slice = function (e, t) {
            e = se(e);
            var n = this;
            return n.__filtered__ && (e > 0 || t < 0) ? new ce(n) : (e < 0 ? (n = n.takeRight(-e)) : e && (n = n.drop(e)), t !== u && ((t = se(t)), (n = t < 0 ? n.dropRight(-t) : n.take(t - e))), n);
          }),
          (ce.prototype.takeRightWhile = function (e) {
            return this.reverse().takeWhile(e).reverse();
          }),
          (ce.prototype.toArray = function () {
            return this.take(fe);
          }),
          Pt(ce.prototype, function (e, t) {
            var n = /^(?:filter|find|map|reject)|While$/.test(t),
              i = /^(?:head|last)$/.test(t),
              o = c[i ? "take" + (t == "last" ? "Right" : "") : t],
              l = i || /^find/.test(t);
            o &&
              (c.prototype[t] = function () {
                var f = this.__wrapped__,
                  d = i ? [1] : arguments,
                  h = f instanceof ce,
                  S = d[0],
                  k = h || ie(f),
                  R = function (ue) {
                    var le = o.apply(c, Yt([ue], d));
                    return i && $ ? le[0] : le;
                  };
                k && n && typeof S == "function" && S.length != 1 && (h = k = !1);
                var $ = this.__chain__,
                  z = !!this.__actions__.length,
                  j = l && !$,
                  oe = h && !z;
                if (!l && k) {
                  f = oe ? f : new ce(this);
                  var ee = e.apply(f, d);
                  return ee.__actions__.push({ func: Yr, args: [R], thisArg: u }), new gt(ee, $);
                }
                return j && oe ? e.apply(this, d) : ((ee = this.thru(R)), j ? (i ? ee.value()[0] : ee.value()) : ee);
              });
          }),
          ft(["pop", "push", "shift", "sort", "splice", "unshift"], function (e) {
            var t = br[e],
              n = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru",
              i = /^(?:pop|shift)$/.test(e);
            c.prototype[e] = function () {
              var o = arguments;
              if (i && !this.__chain__) {
                var l = this.value();
                return t.apply(ie(l) ? l : [], o);
              }
              return this[n](function (f) {
                return t.apply(ie(f) ? f : [], o);
              });
            };
          }),
          Pt(ce.prototype, function (e, t) {
            var n = c[t];
            if (n) {
              var i = n.name + "";
              me.call(Pn, i) || (Pn[i] = []), Pn[i].push({ name: t, func: n });
            }
          }),
          (Pn[$r(u, D).name] = [{ name: "wrapper", func: u }]),
          (ce.prototype.clone = mp),
          (ce.prototype.reverse = vp),
          (ce.prototype.value = yp),
          (c.prototype.at = zd),
          (c.prototype.chain = Yd),
          (c.prototype.commit = Jd),
          (c.prototype.next = Zd),
          (c.prototype.plant = jd),
          (c.prototype.reverse = eg),
          (c.prototype.toJSON = c.prototype.valueOf = c.prototype.value = tg),
          (c.prototype.first = c.prototype.head),
          Yn && (c.prototype[Yn] = Xd),
          c
        );
      },
        Zt = Yl();
      typeof define == "function" && typeof define.amd == "object" && define.amd
        ? ((Ue._ = Zt),
          define(function () {
            return Zt;
          }))
        : ln
          ? (((ln.exports = Zt)._ = Zt), (qi._ = Zt))
          : (Ue._ = Zt);
    }.call(Un));
  });
  var nx = A(E(), 1);
  var ex = A(E(), 1);
  var ny = A(E(), 1);
  var Rv = A(E(), 1);
  var pv = {
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
    Hindi: "\u0939\u093F\u0928\u094D\u0926\u0940",
  },
    Pv = { auto: "Auto", ...pv };
  var Hs = { ["chat_model"]: "gpt-3.5-turbo", ["text_model"]: "text-davinci-003" };
  var zu = `You are a large language model trained by OpenAI that generate human-like text based on the input you received.
Here is a conversation between human A and you:

`,
    Yu = `You are a large language model trained by OpenAI. Your job is to generate human-like text based on the input you received, allowing it to engage in natural-sounding conversations and provide responses that are coherent and relevant to the topic at hand.

If the input is a question, try your best to answer it. Otherwise, provide as much information as you can.
You should use "code blocks" syntax from markdown including programing language name to encapsulate any part in responses that's longer-format content such as poem, code, lyrics.
Provide programming language name in code blocks if possible.
You should also use bold syntax from markdown on the relevant parts of the responses to improve readability.
If your answer contains code, make sure to provide detailed explanations.
You can understand and communicate fluently in the user's language of choice such as English,\u4E2D\u6587,\u65E5\u672C\u543E,Espanol,Francais or Deutsch.

Here is a conversation between human A and you:

`,
    Ju = `You are a large language model trained by OpenAI. Answer as concisely as possible.
Knowledge cutoff: {knowledge_cutoff} Current date: {current_date}`,
    Zu = `You are a large language model trained by OpenAI. Your job is to generate human-like text based on the input you received, allowing it to engage in natural-sounding conversations and provide responses that are coherent and relevant to the topic at hand.

If the input is a question, try your best to answer it. Otherwise, provide as much information as you can.
You should use "code blocks" syntax from markdown including programing language name to encapsulate any part in responses that's longer-format content such as poem, code, lyrics.
Provide programming language name in code blocks if possible.
You should also use bold syntax from markdown on the relevant parts of the responses to improve readability.
If your answer contains code, make sure to provide detailed explanations.

Knowledge cutoff: {knowledge_cutoff} Current date: {current_date}`;
  var Xu = "https://api.openai.com";
  var sn = A(ju(), 1),
    rc = A(ec(), 1);
  var Kv = A(E());
  var Dv = A(E()),
    ri,
    fv = new Uint8Array(16);
  function Ys() {
    if (!ri && ((ri = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)), !ri))
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    return ri(fv);
  }
  var Nv = A(E());
  var Be = [];
  for (let u = 0; u < 256; ++u) Be.push((u + 256).toString(16).slice(1));
  function tc(u, r = 0) {
    return (
      Be[u[r + 0]] +
      Be[u[r + 1]] +
      Be[u[r + 2]] +
      Be[u[r + 3]] +
      "-" +
      Be[u[r + 4]] +
      Be[u[r + 5]] +
      "-" +
      Be[u[r + 6]] +
      Be[u[r + 7]] +
      "-" +
      Be[u[r + 8]] +
      Be[u[r + 9]] +
      "-" +
      Be[u[r + 10]] +
      Be[u[r + 11]] +
      Be[u[r + 12]] +
      Be[u[r + 13]] +
      Be[u[r + 14]] +
      Be[u[r + 15]]
    ).toLowerCase();
  }
  var Hv = A(E());
  var Gv = A(E()),
    dv = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto),
    Js = { randomUUID: dv };
  function gv(u, r, s) {
    if (Js.randomUUID && !r && !u) return Js.randomUUID();
    u = u || {};
    let a = u.random || (u.rng || Ys)();
    if (((a[6] = (a[6] & 15) | 64), (a[8] = (a[8] & 63) | 128), r)) {
      s = s || 0;
      for (let p = 0; p < 16; ++p) r[s + p] = a[p];
      return r;
    }
    return tc(a);
  }
  var Zs = gv;
  var lr = A(ut(), 1);
  var Jv = A(E(), 1),
    js = class {
      envvars = globalThis.__aichat_envvars__;
      _isBackground = !1;
      get currentProject() {
        return this.envvars.project;
      }
      get extensionPrefix() {
        return this.currentProject === "monica" ? "monica" : "c4g";
      }
      get isProd() {
        return this.envvars.prod;
      }
      get isBackground() {
        return this._isBackground;
      }
      get host() {
        return this.envvars.host;
      }
      markIsBackground() {
        this._isBackground = !0;
      }
    },
    ve = new js();
  sn.default.extend(rc.default);
  var eo = class {
    getExtensionVersion() {
      return lr.default.runtime.getManifest().version;
    }
    async tryGetTab(r) {
      try {
        return await lr.default.tabs.get(parseInt(r));
      } catch {
        return null;
      }
    }
    getOsType() {
      let r = navigator.userAgent,
        s = navigator.userAgentData?.platform || navigator.platform,
        a = ["Macintosh", "MacIntel", "MacPPC", "Mac68K", "macOS"],
        p = ["Win32", "Win64", "Windows", "WinCE"],
        m = ["iPhone", "iPad", "iPod"];
      return a.indexOf(s) !== -1
        ? "OSX"
        : m.indexOf(s) !== -1
          ? "IOS"
          : p.indexOf(s) !== -1
            ? "Windows"
            : /Android/.test(r)
              ? "Android"
              : /Linux/.test(s)
                ? "Linux"
                : (console.error("unable to detect os type, use Windows as default", s, r), "Windows");
    }
    detectSystemColorScheme() {
      return window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    isPromise(r) {
      return !!r && (typeof r == "object" || typeof r == "function") && typeof r.then == "function";
    }
    getWebOrigin() {
      return ve.host;
    }
    getModKeyName(r = !1) {
      return this.getOsType() === "OSX" ? "\u2318" : r ? "Ctrl + " : "Ctrl";
    }
    getStaticFile(r) {
      return lr.default.runtime.getURL(`static/${r}`);
    }
    genId() {
      return Zs();
    }
    onDOMReady(r) {
      document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", r) : r();
    }
    getRootId(r) {
      return `${ve.extensionPrefix}-${r}`;
    }
    camelizeKey(r, s = ["-", "_"]) {
      let a = [],
        p = 0,
        m = new Set(s);
      for (; p < r.length;) m.has(r[p]) ? (a.push(r[p + 1].toUpperCase()), p++) : a.push(r[p]), p++;
      return a.join("");
    }
    camelize(r) {
      if (r == null) return null;
      if (r instanceof Array) return r.map((s) => this.camelize(s));
      if (typeof r == "object") {
        let s = {};
        for (let a in r) {
          let p = r[a];
          s[this.camelizeKey(a)] = this.camelize(p);
        }
        return s;
      }
      return r;
    }
    underlizeKey(r, s = !1) {
      let a = [],
        p = 0,
        m = r.toString().toLowerCase();
      for (; p < r.length;) {
        if (r[p] !== m[p] && (!s || p !== 0)) {
          a.push("_"), a.push(m[p]), p++;
          continue;
        }
        a.push(r[p].toLocaleLowerCase()), p++;
      }
      return a.join("");
    }
    underlize(r) {
      if (r == null) return null;
      if (r instanceof Array) return r.map((s) => this.underlize(s));
      if (typeof r == "object") {
        let s = {};
        for (let a in r) {
          let p = r[a],
            m = this.underlizeKey(a),
            C = this.underlize(p);
          C != null && (s[m] = C);
        }
        return s;
      }
      return r;
    }
    capitalize(r) {
      return r.charAt(0).toUpperCase() + r.slice(1);
    }
    async *streamAsyncIterable(r) {
      let s = r.getReader();
      try {
        for (; ;) {
          let { done: a, value: p } = await s.read();
          if (a) return;
          yield p;
        }
      } finally {
        s.releaseLock();
      }
    }
    isBraveBrowser() {
      return navigator.brave?.isBrave();
    }
    endsWithQuestionMark(r) {
      return r.endsWith("?") || r.endsWith("\uFF1F") || r.endsWith("\u061F") || r.endsWith("\u2E2E");
    }
    copyToClipboard(r) {
      let s = document.createElement("textarea");
      s.id = "copy-to-clipboard";
      let a = document.body;
      a.appendChild(s), (s.value = r), s.select(), document.execCommand("copy"), a.removeChild(s);
    }
    getOffsetOfPageTop(r) {
      return document.documentElement.clientHeight - (r.getBoundingClientRect().top - document.documentElement.getBoundingClientRect().top);
    }
    async delay(r) {
      return new Promise((s) => {
        setTimeout(() => {
          s();
        }, r);
      });
    }
    async getContentFromClipboard() {
      try {
        let r = await navigator.clipboard.readText();
        return lr.default.tabs.query({}), r;
      } catch {
        return "";
      }
    }
    fromNow(r) {
      let s = "MMM D, YYYY";
      return (0, sn.default)().diff((0, sn.default)(r), "day") > 7 ? (0, sn.default)((0, sn.default)(r)).format(s) : (0, sn.default)((0, sn.default)(r)).fromNow();
    }
    formatMonicaSdkError(r) {
      let s = r.message || r.data.message || "server error",
        a = /请求失败\((\d+)\)/;
      return s.replace(a, "server error($1)");
    }
    addPromptLangSuffix(r, s) {
      return s === "auto" ? r : `${r}(in ${s})`;
    }
    getProductName() {
      return ve.currentProject === "monica" ? "Monica" : "ChatGPT for Google";
    }
    getDefaultShortcutKey() {
      return ve.currentProject === "monica" ? "m" : "b";
    }
    getChromeStoreUrl() {
      return ve.currentProject === "monica"
        ? "https://chrome.google.com/webstore/detail/monica-%E2%80%94-your-chatgpt-cop/ofpnmcalabcbjgholdjcjblkibolbppb"
        : "https://chrome.google.com/webstore/detail/chatgpt-for-google/jgjaeacdkonaoafenlfkkkmbaopkbilf";
    }
    getLogo(r = !0) {
      return ve.currentProject === "monica" ? this.getStaticFile("monicaLogo.png") : r ? this.getStaticFile("logo.png") : this.getStaticFile("c4g/c4gTransparentLogo.png");
    }
    getFeedbackEmail() {
      return ve.currentProject === "monica" ? "mailto:contact@monica.im?subject=Monica feedback" : "mailto:chatgpt4search@gmail.com?subject=ChatGPT for Google feedback";
    }
    checkIfMonicaLoadedSync() {
      let r = document.body.getAttribute("monica-id"),
        s = document.body.getAttribute("monica-version");
      return !!(r && s);
    }
    async checkIfMonicaLoaded() {
      return await Y.delay(100), this.checkIfMonicaLoadedSync();
    }
  },
    Y = new eo();
  var sy = A(E(), 1);
  var ic = ["ServiceBase", "BackgroundApp", "MonicaService", "ConfigService"],
    mv = [],
    to = class {
      console = console;
      loggers = [];
      enabledModules = ve.isProd ? new Set(mv) : new Set(ic);
      getLogger(r) {
        let s = new no(this.enabledModules, r);
        return this.loggers.push(s), s;
      }
      enableAllLoggers() {
        (this.enabledModules = new Set(ic)),
          this.loggers.forEach((r) => {
            r._enabledModules = this.enabledModules;
          });
      }
    },
    no = class {
      constructor(r, s) {
        this._enabledModules = r;
        this._module = s;
      }
      get log() {
        return this._enabledModules.has(this._module) ? console.log : sc;
      }
      get debug() {
        return this._enabledModules.has(this._module) ? console.debug : sc;
      }
      get warn() {
        return console.warn;
      }
      get error() {
        return console.error;
      }
    };
  function sc() { }
  var Me = new to();
  var ly = A(E(), 1),
    _n = A(ut(), 1);
  var ro = class {
    async sendToBackground(r, s, a) {
      let p = { type: r, data: s, id: a || Y.genId() };
      return _n.default.runtime.sendMessage(p);
    }
    async addListener(r, s) {
      _n.default.runtime.onMessage.addListener((a, p) => {
        a.type === r && s(a.data, a.id, p);
      });
    }
    async addExternalListener(r, s) {
      _n.default.runtime.onMessageExternal.addListener((a, p) => {
        console.log("incoming external msg", a), a.type === r && s(a.data, a.id, p);
      });
    }
    async sendToContent(r, s, a, p) {
      let m = { type: s, data: a, id: p || Y.genId() };
      return _n.default.tabs.sendMessage(r, m);
    }
    async sendToPopup(r, s, a) {
      let p = { type: r, data: s, id: a || Y.genId() };
      return _n.default.runtime.sendMessage(p);
    }
    broadcastFromBackground(r, s, a) {
      if (!ve.isBackground) throw new Error("only allowed in background");
      let p = a || Y.genId();
      _n.default.tabs.query({}).then((m) => {
        m.forEach((C) => {
          C.id && this.sendToContent(C.id, r, s, p).catch(() => { });
        });
      }),
        this.sendToPopup(r, s, p).catch(() => { });
    }
  },
    ze = new ro();
  var Dy = A(E(), 1);
  var Ey = A(E(), 1);
  var Ay = A(E(), 1);
  var ac = A(ii(), 1),
    Cn = A(ut(), 1);
  var vy = A(E(), 1);
  var oi = A(ii(), 1),
    Nn = A(ut(), 1),
    io = Me.getLogger("ServiceBase"),
    so = class {
      constructor(r, s) {
        this.prefix = r;
        this.defaultValues = s;
      }
      async get(r) {
        let s = this.encodeKey(r),
          p = (await Nn.default.storage.local.get(s))[s];
        return p === void 0 && (p = this.defaultValues[r]), p;
      }
      async set(r, s) {
        Nn.default.storage.local.set({ [this.encodeKey(r)]: s });
      }
      async getAll() {
        let r = Object.keys(this.defaultValues).map((a) => this.encodeKey(a)),
          s = await Nn.default.storage.local.get(r);
        return s ? (0, oi.defaults)(this.transformValues(s, !1), this.defaultValues) : this.defaultValues;
      }
      async update(r) {
        await Nn.default.storage.local.set(this.transformValues(r, !0));
      }
      async removeDeprecated(r) {
        await Nn.default.storage.local.remove(this.encodeKey(r));
      }
      encodeKey(r) {
        return this.prefix ? `${this.prefix}.${r}` : r;
      }
      decodeKey(r) {
        return this.prefix ? r.replace(`${this.prefix}.`, "") : r;
      }
      transformValues(r, s) {
        let a = {},
          p = new Set(Object.keys(this.defaultValues));
        for (let m of Object.keys(r))
          if (s) p.has(m) && (a[this.encodeKey(m)] = r[m]);
          else {
            let C = this.decodeKey(m);
            p.has(C) && (a[C] = r[m]);
          }
        return a;
      }
    },
    et = class {
      _instance;
      _eventListeners = {};
      constructor(r, s) {
        this._instance = new s();
        let a = this._instance,
          p = this,
          m = Object.getPrototypeOf(a),
          C = Object.getPrototypeOf(m),
          w = [...Object.getOwnPropertyNames(m), ...Object.getOwnPropertyNames(C)];
        for (let P of w)
          typeof a[P] == "function" &&
            (p[P] = (...N) => {
              if (ve.isBackground) return a._onCallMethod({ type: "bg" }, P, N);
              if (P.startsWith("_")) throw TypeError("method starting with _ can only be called from background");
              if (P === "on") {
                let [q, y] = N;
                return this._addEventListener(q, y);
              }
              return this._sendMethodCallToBackground(r, P, N);
            });
        ve.isBackground ||
          ze.addListener("serviceEvent", (P) => {
            let { serviceName: M, eventName: N, data: q } = P;
            if (r === M) {
              let y = this._eventListeners[N];
              y && y.forEach((v) => v.call(q));
            }
          }),
          io.debug("service proxy created", r, this);
      }
      async _sendMethodCallToBackground(r, s, a) {
        io.debug("send event call", r, s, a);
        let p = Y.genId(),
          m = [];
        return (
          a.forEach((C, w) => {
            if (typeof C == "function") {
              let P = `__func:${p}:${w}`;
              m.push(P), this._addProxiedFunc(P, C);
            } else m.push(C);
          }),
          ze.sendToBackground("callServiceMethod", { serviceName: r, methodName: s, finalArgs: m }, p)
        );
      }
      _addEventListener(r, s) {
        this._eventListeners[r] || (this._eventListeners[r] = []);
        let a = new si(r, s, () => {
          this._eventListeners[r] = this._eventListeners[r]?.filter((p) => p !== a);
        });
        return this._eventListeners[r].push(a), a;
      }
      _addProxiedFunc(r, s) {
        ze.addListener("proxiedFuncCall", (a) => {
          r === a.funcId && s(...a.args);
        });
      }
    },
    si = class {
      constructor(r, s, a) {
        this.event = r;
        this.handler = s;
        this.onDestroy = a;
      }
      destroy() {
        this.onDestroy();
      }
      call(r) {
        this.handler(r);
      }
    },
    tt = class {
      _serviceName = "";
      storage;
      lastCaller;
      eventListeners = {};
      _initService(r) {
        this._serviceName = r;
        let s = this.storagePrefix;
        (this.storage = new so(s, this.defaultStorageValues)), this.onInit();
      }
      on(r, s) {
        this.eventListeners[r] || (this.eventListeners[r] = []);
        let a = new si(r, s, () => {
          this.eventListeners[r] = this.eventListeners[r]?.filter((p) => p !== a);
        });
        return this.eventListeners[r].push(a), a;
      }
      async _onCallMethod(r, s, a) {
        let p = this;
        if (typeof p[s] != "function") throw new Error(`method ${s} not found`);
        let m = [];
        a.forEach((w) => {
          if (typeof w == "string" && w.startsWith("__func:")) {
            let P = w;
            m.push((...M) => {
              let N = `${this._serviceName}.${s}`;
              io.debug(`- call proxied func for ${N}:${P}`, { funcArgs: M }), r.tabId ? ze.sendToContent(r.tabId, "proxiedFuncCall", { funcId: P, args: M }) : ze.sendToPopup("proxiedFuncCall", { funcId: P, args: M });
            });
          } else m.push(w);
        }),
          (this.lastCaller = r);
        let C = p[s](...m);
        if (C !== void 0 && !Y.isPromise(C)) throw new TypeError("public service method must return a promise");
        return C;
      }
      emit(r, s) {
        let a = this.eventListeners[r];
        a && a.forEach((p) => p.call(s)), ze.broadcastFromBackground("serviceEvent", { serviceName: this._serviceName, eventName: r, data: s });
      }
      async _fetchWithCache(r, s, a) {
        let { useCache: p = !0, autoUpdate: m = !0, cacheOnly: C = !1 } = a || {},
          w = async () => {
            let P = await s();
            return this.storage.set(r, P), P;
          };
        if (p || C) {
          let P = await this.storage.get(r);
          if (C) return P;
          if (P && !(0, oi.isEmpty)(P)) return m && w(), P;
        }
        return await w();
      }
    };
  var oc = Me.getLogger("ConfigService"),
    Wt = class extends tt {
      storagePrefix = "";
      defaultStorageValues = {
        installTime: 0,
        mainWindowMode: null,
        composeLanguage: null,
        shortCutEnableOption: { disabledAll: !1, disabledHosts: {} },
        buttonEnableOption: { disabledAll: !1, disabledHosts: {} },
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
        permissionGranted: !1,
      };
      onInit() {
        oc.log("config service init", this.storage),
          Cn.default.storage.local.onChanged.addListener((r) => {
            let s = (0, ac.pick)(r, Object.keys(this.defaultStorageValues));
            Object.keys(s).length && (oc.log("config change"), this.emit("configChange", s));
          });
      }
      async get(r) {
        return this.storage.get(r);
      }
      async set(r, s) {
        this.storage.set(r, s);
      }
      async getAll() {
        return this.storage.getAll();
      }
      async update(r) {
        return this.storage.update(r);
      }
      openShortcutsPage() {
        Cn.default.tabs.create({ url: "chrome://extensions/shortcuts" });
      }
      openOptionsPage() {
        Cn.default.runtime.openOptionsPage();
      }
      async getCommands() {
        return await Cn.default.commands.getAll();
      }
      async keepAlive() {
        return "keep alive";
      }
      async getUiFlag(r) {
        return (await this.get("uiFlags"))[r];
      }
      async setUiFlag(r, s) {
        let a = await this.get("uiFlags");
        (a[r] = s), await this.set("uiFlags", a);
      }
      async shouldShowRatingTip() {
        let r = await Cn.default.storage.local.get("ratingTipShowTimes");
        if (r) {
          let a = r.ratingTipShowTimes;
          typeof a == "number" && (await Cn.default.storage.local.remove("ratingTipShowTimes"), await this.set("ratingTipShowTimes", a));
        }
        let s = await this.get("ratingTipShowTimes");
        return s >= 5 ? !1 : (await this.set("ratingTipShowTimes", s + 1), s >= 2);
      }
      async getProviderConfigs() {
        let r = await this.get("provider");
        if (r === "gpt3") {
          let s = await this.get("provider:gpt3");
          return { provider: r, configs: s };
        }
        return { provider: r, configs: null };
      }
    };
  _t(Wt, "serviceName", "ConfigService");
  var Sy = A(E(), 1);
  var Ie = new et(Wt.serviceName, Wt);
  var ai = A(ut(), 1),
    oo = class {
      permissions = { origins: ["<all_urls>"] };
      contains() {
        return ai.default.permissions.contains(this.permissions);
      }
      async request() {
        let r = await ai.default.permissions.request(this.permissions);
        return r && Ie.set("permissionGranted", !0), r;
      }
      registerContentScripts() {
        ai.default.scripting.registerContentScripts([{ id: "content", js: ["content.js"], matches: ["<all_urls>"] }]);
      }
      checkAndRegisterContentScripts() {
        this.contains().then((r) => {
          r && this.registerContentScripts();
        });
      }
    },
    uc = new oo();
  var Hy = A(E(), 1);
  var Gy = A(E(), 1);
  var qn = A(ut(), 1);
  var ui = Me.getLogger("AuthTabService"),
    vv = "https://chat.openai.com/chat",
    on = class extends tt {
      storagePrefix = "authTab";
      defaultStorageValues = { pinnedTabId: null, authCaller: null };
      iframeLoadedCallback = null;
      onInit() { }
      async backToCallerPage() {
        let r = await this.storage.get("authCaller");
        if (r) {
          let { type: s, tabId: a } = r;
          s === "tab" && qn.default.tabs.update(a, { active: !0 });
        }
      }
      resolveChatGptAuthError() {
        return this.createChatGptTabForAuth();
      }
      async isThisTheAuthTab() {
        let r = this.lastCaller?.tabId,
          { pinnedTabId: s, authCaller: a } = await this.storage.getAll();
        return !!(a && s === r);
      }
      async markAuthFinished() {
        return this.storage.update({ authCaller: null });
      }
      async waitIframeLoaded() {
        return new Promise((r, s) => {
          (this.iframeLoadedCallback = () => {
            r();
          }),
            setTimeout(() => {
              s("timeout");
            }, 8 * 1e3);
        });
      }
      async markIframeLoaded() {
        this.iframeLoadedCallback?.();
      }
      async createChatGptTabForAuth() {
        let r = this.lastCaller,
          s = await this.storage.get("pinnedTabId"),
          a = null;
        if (s) {
          ui.log("focused to old tab", s);
          try {
            (a = await qn.default.tabs.get(s)), qn.default.tabs.reload(a.id), qn.default.tabs.update(a.id, { active: !0, pinned: !0 });
          } catch (p) {
            ui.error(p);
          }
        }
        return a || (ui.log("create new tab", s), (a = await qn.default.tabs.create({ url: vv, pinned: !0, active: !0 }))), ui.log("update storage", a.id, r), this.storage.update({ pinnedTabId: a.id, authCaller: r });
      }
    };
  _t(on, "serviceName", "AuthTabService");
  var cc = new et(on.serviceName, on);
  var tC = A(E(), 1);
  var Y_ = A(E(), 1);
  var a_ = A(E(), 1);
  var r_ = A(E(), 1);
  var jy = A(E(), 1);
  var Jy = A(E(), 1);
  var Qy = A(E(), 1),
    Gn;
  ((p) => ((p.RESP_FIELD_STATUS = "code"), (p.RESP_FIELD_MESSAGE = "msg"), (p.RESP_FIELD_ERROR_NAME = "error"), (p.RESP_SUCCESS_STATUS = 0)))((Gn ||= {}));
  var ge;
  ((N) => {
    let u = "[CrepeSdk] ";
    class r { }
    (N.ExceptionHandler = r), (N.NameTransformers = { snakeToCamel: (q) => q.replace(/(_[a-z])/g, (y) => y.toUpperCase().replace("_", "")), camelToSnake: (q) => q.replace(/([A-Z])/g, (y) => `_${y.toLowerCase()}`).replace(/^_/, "") });
    class a {
      constructor(y, v, x, D, W, H, te, X) {
        this.reqInfo = y;
        (this.httpError = v), (this.httpStatus = x), (this.httpStatusText = D), (this.name = this.constructor.name), (this.code = W), (this.message = H), (this.data = te), (this.originalError = X);
      }
      name;
      httpError;
      httpStatus;
      httpStatusText;
      code;
      message;
      data;
      originalError;
      handled = !1;
    }
    N.ApiRequestError = a;
    class p {
      constructor(y, v, x, D) {
        this.reqInfo = y;
        (this.name = this.constructor.name), (this.originalError = x), (this.cause = v), (this.reason = D);
      }
      name;
      cause;
      originalError;
      reason;
    }
    N.ApiRequestAborted = p;
    class m {
      config;
      sessionMap = new WeakMap();
      idCounter = 0;
      constructor(y) {
        (this.config = y), this.config.nameTransformers || (this.config.nameTransformers = { toClientName: N.NameTransformers.snakeToCamel, toServerName: N.NameTransformers.camelToSnake });
      }
      nextId() {
        return ++this.idCounter;
      }
      expireSession(y, v) {
        let x = this.sessionMap.get(y);
        return x
          ? (v && x.has(v)
            ? (x.get(v)._expire(), x.delete(v))
            : (x.forEach((D) => {
              D._expire();
            }),
              x.clear()),
            !0)
          : !1;
      }
      convertObjectNames(y, v) {
        return (
          v &&
          (Array.isArray(v)
            ? v.map((x) => this.convertObjectNames(y, x))
            : typeof v == "object"
              ? Object.keys(v).reduce((x, D) => {
                let W = v[D],
                  H = this.convertNameKey(y, D);
                return (x[H] = this.convertObjectNames(y, W)), x;
              }, {})
              : v)
        );
      }
      convertNameKey(y, v) {
        return y === "client" ? this.config.nameTransformers.toClientName(v) : this.config.nameTransformers.toServerName(v);
      }
      getSession(y, v, x, D) {
        let W = this.sessionMap.get(y);
        W || ((W = new Map()), this.sessionMap.set(y, W));
        let H = W.get(v);
        if (H) return H._checkConfigs(x), H;
        let te = new D(y, v, x);
        return te._initApis(this), W.set(v, te), te;
      }
    }
    N.BaseSdk = m;
    class C {
      sdk;
      session;
      cachedData = new Map();
      constructor(y, v) {
        if (((this.sdk = y), v && !(v instanceof P))) throw new Error(`${u}session error`);
        this.session = v;
      }
      async sendRequest(y, v, x, D, W, H = {}) {
        if (H.cacheMode === "localStorage") throw new Error(`${u}localStorage cache not supported yet`);
        let X = { id: this.sdk.nextId(), method: y, path: v, cmd: x, otherParams: D, isLowLevelResp: W, config: H, cacheKey: null };
        if ((H.onResolve && !H.cacheMode && console.warn(`${u}onResolve is usually combined with cacheMode`), H.useCache)) {
          H.cacheMode || console.error(`${u}useCache must combined with cacheMode`);
          let I = this.getSignature(y, v, x, D);
          if ((console.log(I), (X.cacheKey = I), this.cachedData.has(I))) {
            this.handleSendRequest(X, !0);
            let b = this.cachedData.get(I);
            return H.onResolve?.(null, b, !0), b;
          }
        }
        return this.handleSendRequest(X, !1);
      }
      handleSendRequest(y, v) {
        let { sdk: x } = this,
          { method: D, config: W } = y,
          { body: H, query: te } = this.getParams(D, y.cmd, y.otherParams),
          X = x.config.baseUrl + this.pathPrefix + y.path;
        te && (X += `?${te}`);
        let I = W.headers || {};
        x.config.globalSetHeader && (I = x.config.globalSetHeader(I)), I["Content-Type"] || (I["Content-Type"] = "application/json");
        let b = W.abortSignal || this.session?.abortSignal;
        this.onBeforeRequest(W, v);
        let L = fetch(X, { method: D, headers: I, signal: b, body: D === "GET" ? null : JSON.stringify(H) });
        return this.handleRes(y, L, v);
      }
      async handleRes(y, v, x) {
        let { config: D } = y;
        try {
          let W = await v;
          if (W.status !== 200) throw new a(y, !0, W.status, W.statusText, 0, `request fail(${W.status})`, null, new Error(W.statusText));
          if (y.isLowLevelResp) throw new Error("TODO: handle low level resp");
          {
            let H = await W.json(),
              te = H[Gn.RESP_FIELD_STATUS],
              X = H[Gn.RESP_FIELD_MESSAGE],
              I = H[Gn.RESP_FIELD_ERROR_NAME],
              b = this.sdk.convertObjectNames("client", H);
            if (te === Gn.RESP_SUCCESS_STATUS) return y.cacheKey && this.cachedData.set(y.cacheKey, b), D.onResolve?.(null, b, !1), b;
            let L = a;
            throw (I && this.sdk.allExceptions[I] && (L = this.sdk.allExceptions[I]), new L(y, !1, W.status, W.statusText, te, X, b, new Error(X)));
          }
        } catch (W) {
          return x ? (console.error(`${u} cache update fail`, W), null) : this.handleError(y, W);
        } finally {
          this.onAfterRequest(D, x);
        }
      }
      handleError(y, v) {
        let { config: x } = y;
        if (v instanceof DOMException && v.code === v.ABORT_ERR) throw x.abortSignal?.aborted ? new p(y, "manualCanceled", v, x.abortSignal.reason) : new p(y, "autoCanceled", v);
        if (v instanceof TypeError && v.message === "Failed to fetch") {
          let W = new a(y, !0, 0, v.message, 0, "network error(0)", null, v);
          if ((this.triggerErrorHandlers(W, x), W.handled)) throw new p(y, "handled", v);
        }
        if (v instanceof a && (this.triggerErrorHandlers(v, x), v.handled)) throw new p(y, "handled", v);
        y.cacheKey && this.cachedData.delete(y.cacheKey);
        let D = v instanceof a ? v : new a(y, !1, 0, `${v.name}:${v.message}`, 0, "network error(-1)", null, v);
        throw (x.onResolve?.(D, null, !1), console.error(`${u} Unhandled api request error:`, D), D);
      }
      triggerErrorHandlers(y, v) {
        let x = !0;
        v.catch && (x = v.catch(y) === !1),
          x && this.session?.config.catch && (x = this.session.config.catch(y) === !1),
          this.sdk.config.globalErrorHandler && !v.ignoreGlobalErrorHandler && x && (x = this.sdk.config.globalErrorHandler(y) === !1),
          (y.handled = !x);
      }
      onBeforeRequest(y, v = !1) {
        if (!v && y.loadingProperties) {
          let [x, ...D] = y.loadingProperties;
          M(x, D, !0);
        }
      }
      onAfterRequest(y, v) {
        if (!v && y.loadingProperties) {
          let [x, ...D] = y.loadingProperties;
          M(x, D, !1);
        }
      }
      getParams(y, v, x) {
        let D;
        return (
          y === "GET" && v ? (D = Object.keys(v).map((W) => [W, v[W]])) : (D = x),
          {
            body: v ? this.sdk.convertObjectNames("server", v) : {},
            query: D.filter(([W, H]) => H !== void 0)
              .map(([W, H]) => `${this.sdk.convertNameKey("server", W)}=${encodeURIComponent(this.stringifyQuery(H))}`)
              .join("&"),
          }
        );
      }
      stringifyQuery(y) {
        if (y === "null") return "";
        let v = this.sdk.convertObjectNames("server", y);
        switch (typeof v) {
          case "boolean":
            return v ? "true" : "false";
          case "bigint":
          case "number":
          case "string":
            return v.toString();
          case "undefined":
            return "";
          case "object":
            return Array.isArray(v)
              ? v.map((x) => this.stringifyQuery(x)).join(",")
              : Object.keys(v)
                .map((x) => `${x}=${this.stringifyQuery(v[x])}`)
                .join("&");
          default:
            return "";
        }
      }
      getSignature(y, v, x, D) {
        return y.slice(0, 2) + v + this.stableJsonStringify(x) + this.stableJsonStringify(D);
      }
      stableJsonStringify(y) {
        let v = new Set();
        return JSON.stringify(y, (x, D) => (v.add(x), D)), JSON.stringify(y, Array.from(v).sort());
      }
    }
    N.BaseDomainApi = C;
    class w {
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
        return this.abortController.signal;
      }
      constructor(y, v) {
        if (((this.session = y), typeof v == "number")) this.wait = v;
        else {
          let { wait: x, leading: D, maxWait: W, trailing: H, mutex: te } = v;
          (this.wait = x),
            (this.maxWait = W),
            D !== void 0 && (this.leading = D),
            H !== void 0 && (this.trailing = H),
            te !== void 0 && (this.mutex = te),
            this.maxWait && this.maxWait < this.wait && console.warn("maxWait must >= wait");
        }
      }
      add(y) {
        if (this.expired) throw new Error(`${u}session has expired`);
        if (this.status === "idle") {
          if (this.leading) {
            this.onBeforeRun();
            try {
              let v = y(this.session);
              return this.doWait(), v;
            } finally {
              this.onAfterRun();
            }
          }
          return this.queueNext(y), this.doWait(), this.nextP;
        }
        return this.queueNext(y), this.doWait(), this.nextP;
      }
      expire() {
        clearInterval(this.timer), clearInterval(this.maxWaitTimer), this.abortController?.abort(), (this.expired = !0);
      }
      doWait() {
        (this.status = "waiting"),
          this.timer && (clearTimeout(this.timer), (this.timer = null)),
          (this.timer = setTimeout(() => {
            (this.status = "idle"), (this.timer = null), this.maxWaitTimer && (clearTimeout(this.maxWaitTimer), (this.maxWaitTimer = null)), this.trailing && this.run();
          }, this.wait)),
          this.maxWait &&
          !this.maxWaitTimer &&
          (this.maxWaitTimer = setTimeout(() => {
            (this.maxWaitTimer = null), this.run(), this.doWait();
          }, this.maxWait));
      }
      async run() {
        if (!this.next) return;
        this.onBeforeRun();
        let y = this.next;
        this.next = null;
        try {
          let v = await y(this.session);
          this.nextPResolve?.(v);
        } catch (v) {
          this.nextPReject?.(v);
        } finally {
          this.onAfterRun();
        }
      }
      queueNext(y) {
        (this.next = y),
          (this.nextP = new Promise((v, x) => {
            (this.nextPResolve = v), (this.nextPReject = x);
          }));
      }
      onBeforeRun() {
        this.mutex && (this.abortController?.abort(), (this.abortController = new AbortController())), this.session?._onBeforeRun();
      }
      onAfterRun() {
        this.session?._onAfterRun();
      }
    }
    class P {
      static idCounter = 0;
      get abortSignal() {
        return this.debounceManager?.abortSignal || this.abortController.signal;
      }
      id;
      context;
      name;
      config;
      get expired() {
        return this._expired;
      }
      _expired = !1;
      mode = "normal";
      abortController;
      debounceManager;
      constructor(y, v, x) {
        (this.id = ++P.idCounter), (this.context = y), (this.name = v), (this.config = x), (this.abortController = new AbortController()), this.initConfig(x);
      }
      _checkConfigs(y) {
        if (JSON.stringify(y) !== JSON.stringify(this.config)) throw (console.error({ context: this.context, name: this.name, oldConfig: this.config, newConfig: y }), new Error(`${u}config inconsistent when calling same session`));
      }
      async _run() {
        if (this._expired) throw new Error(`${u}session has expired`);
        if (this.mode === "normal") {
          this._onBeforeRun();
          try {
            return this.config.handler(this);
          } finally {
            this._onAfterRun();
          }
        }
        if (this.mode === "mutex") {
          this.cancelUnfinished(), this._onBeforeRun();
          try {
            return this.config.handler(this);
          } finally {
            this._onAfterRun();
          }
        }
        if (this.mode === "debounce") return this.debounceManager.add(this.config.handler);
        if (this.mode === "polling") {
          this._onBeforeRun();
          try {
            return this.config.handler(this);
          } finally {
            this._onAfterRun();
          }
        }
        throw new Error(`${u} Unknown session mode: ${this.mode}`);
      }
      _expire() {
        this.cancelUnfinished(), this.debounceManager?.expire(), (this._expired = !0);
      }
      _onBeforeRun() {
        this.config.loadingProperties && M(this.context, this.config.loadingProperties, !0);
      }
      _onAfterRun() {
        this.config.loadingProperties && M(this.context, this.config.loadingProperties, !1);
      }
      cancelUnfinished() {
        this.abortController.abort(), (this.abortController = new AbortController());
      }
      initConfig(y) {
        if (["mutex", "debounce", "pollingInterval"].filter((D) => y[D] !== void 0).length > 1) throw new Error(`${u} Multiple control param are not supported (mutex/debounce/pollingInterval)`);
        if (this.config.debounce) {
          (this.mode = "debounce"), (this.debounceManager = new w(this, this.config.debounce));
          return;
        }
        if (this.config.pollingInterval) throw ((this.mode = "polling"), new Error(`${u}polling not implemented`));
        if (this.config.mutex) {
          this.mode = "mutex";
          return;
        }
      }
    }
    N.BaseSession = P;
    function M(q, y, v) {
      y.forEach((x) => {
        q[x] = v;
      });
    }
  })((ge ||= {}));
  var bn;
  ((v) => {
    class u extends ge.ApiRequestError {
      errorName = "exceptions.CommonError";
    }
    v.CommonError = u;
    class r extends ge.ApiRequestError {
      errorName = "exceptions.InternalError";
    }
    v.InternalError = r;
    class s extends ge.ApiRequestError {
      errorName = "exceptions.AuthError";
    }
    v.AuthError = s;
    class a extends ge.ApiRequestError {
      errorName = "exceptions.UserAuthError";
    }
    v.UserAuthError = a;
    class p extends ge.ApiRequestError {
      errorName = "exceptions.ResourceNotFoundError";
    }
    v.ResourceNotFoundError = p;
    class m extends ge.ApiRequestError {
      errorName = "exceptions.ValidationError";
    }
    v.ValidationError = m;
    class C extends ge.ApiRequestError {
      errorName = "exceptions.UnexpectedError";
    }
    v.UnexpectedError = C;
    class w extends ge.ApiRequestError {
      errorName = "exceptions.DomainError";
    }
    v.DomainError = w;
    let P;
    ((b) => {
      class x extends ge.ApiRequestError {
        errorName = "task.exceptions.ChatError";
      }
      b.ChatError = x;
      class D extends ge.ApiRequestError {
        errorName = "task.exceptions.QuotaExceededError";
      }
      b.QuotaExceededError = D;
      class W extends ge.ApiRequestError {
        errorName = "task.exceptions.UidDuplicateError";
      }
      b.UidDuplicateError = W;
      class H extends ge.ApiRequestError {
        errorName = "task.exceptions.CustomPromptError";
      }
      b.CustomPromptError = H;
      class te extends ge.ApiRequestError {
        errorName = "task.exceptions.ConversationNotExistError";
      }
      b.ConversationNotExistError = te;
      class X extends ge.ApiRequestError {
        errorName = "task.exceptions.SharedConversationNotExistError";
      }
      b.SharedConversationNotExistError = X;
      class I extends ge.BaseDomainApi {
        pathPrefix = "/task";
        async generatePrompt(U, V) {
          return this.sendRequest("POST", "/generate_prompt", U, [], !1, V);
        }
        async generateOpenaiParam(U, V) {
          return this.sendRequest("POST", "/generate_openai_param", U, [], !1, V);
        }
        async onOpenaiResult(U, V) {
          return this.sendRequest("POST", "/on_openai_result", U, [], !1, V);
        }
        async feedbackGenResult(U, V) {
          return this.sendRequest("POST", "/feedback_gen_result", U, [], !1, V);
        }
        async getTemplateList(U) {
          return this.sendRequest("GET", "/get_template_list", null, [], !1, U);
        }
        async getToneList(U) {
          return this.sendRequest("GET", "/get_tone_list", null, [], !1, U);
        }
        async shareConversation(U, V) {
          return this.sendRequest("POST", "/share_conversation", U, [], !1, V);
        }
        async getSharedConversation(U, V) {
          return this.sendRequest("GET", "/get_shared_conversation", null, [["shortId", U]], !1, V);
        }
        async getConversationList(U, V) {
          return this.sendRequest("GET", "/get_conversation_list", U, [], !1, V);
        }
        async getChatItemList(U, V) {
          return this.sendRequest("GET", "/get_chat_item_list", U, [], !1, V);
        }
        async searchConversation(U, V) {
          return this.sendRequest("GET", "/search_conversation", U, [], !1, V);
        }
        async delConversation(U, V) {
          return this.sendRequest("POST", "/del_conversation", U, [], !1, V);
        }
      }
      b.Api = I;
    })((P = v.Task ||= {}));
    let M;
    ((X) => {
      class x extends ge.ApiRequestError {
        errorName = "user.exceptions.UserNotExistsError";
      }
      X.UserNotExistsError = x;
      class D extends ge.ApiRequestError {
        errorName = "user.exceptions.OauthCallbackError";
      }
      X.OauthCallbackError = D;
      class W extends ge.ApiRequestError {
        errorName = "user.exceptions.UserAlreadyExistsError";
      }
      X.UserAlreadyExistsError = W;
      class H extends ge.ApiRequestError {
        errorName = "user.exceptions.PasswordError";
      }
      X.PasswordError = H;
      class te extends ge.BaseDomainApi {
        pathPrefix = "/user";
        async superAccount(b, L) {
          return this.sendRequest("GET", "/super_account", null, [["superId", b]], !1, L);
        }
        async logout(b) {
          return this.sendRequest("GET", "/logout", null, [], !1, b);
        }
        async loginToken(b, L) {
          return this.sendRequest("GET", "/login_token", null, [["token", b]], !1, L);
        }
        async me(b) {
          return this.sendRequest("GET", "/me", null, [], !1, b);
        }
        async updateLanguagePreferences(b, L) {
          return this.sendRequest("POST", "/update_language_preferences", b, [], !1, L);
        }
        async updateTel(b, L) {
          return this.sendRequest("POST", "/update_tel", b, [], !1, L);
        }
        async oauth2Revoke(b) {
          return this.sendRequest("GET", "/oauth2_revoke", null, [], !1, b);
        }
        async clearCredentials(b) {
          return this.sendRequest("GET", "/clear_credentials", null, [], !1, b);
        }
        async updateUserInfo(b, L) {
          return this.sendRequest("POST", "/update_user_info", b, [], !1, L);
        }
        async uninstallReasons(b) {
          return this.sendRequest("GET", "/uninstall_reasons", null, [], !1, b);
        }
        async uninstallFeedback(b, L) {
          return this.sendRequest("POST", "/uninstall_feedback", b, [], !1, L);
        }
        async logoff(b) {
          return this.sendRequest("POST", "/logoff", null, [], !1, b);
        }
        async customPromptList(b, L) {
          return this.sendRequest("GET", "/custom_prompt_list", b, [], !1, L);
        }
        async createCustomPrompt(b, L) {
          return this.sendRequest("POST", "/create_custom_prompt", b, [], !1, L);
        }
        async updateCustomPrompt(b, L) {
          return this.sendRequest("POST", "/update_custom_prompt", b, [], !1, L);
        }
        async deleteCustomPrompt(b, L) {
          return this.sendRequest("POST", "/delete_custom_prompt", b, [], !1, L);
        }
        async updateCustomPromptPosition(b, L) {
          return this.sendRequest("POST", "/update_custom_prompt_position", b, [], !1, L);
        }
        async inviteList(b, L) {
          return this.sendRequest("GET", "/invite_list", b, [], !1, L);
        }
      }
      X.Api = te;
    })((M = v.User ||= {}));
    let N;
    ((X) => {
      class x extends ge.ApiRequestError {
        errorName = "vip.exceptions.NoCustomerError";
      }
      X.NoCustomerError = x;
      class D extends ge.ApiRequestError {
        errorName = "vip.exceptions.SubscriptionStatusError";
      }
      X.SubscriptionStatusError = D;
      class W extends ge.ApiRequestError {
        errorName = "vip.exceptions.StripeError";
      }
      X.StripeError = W;
      class H extends ge.ApiRequestError {
        errorName = "vip.exceptions.FrequentlyError";
      }
      X.FrequentlyError = H;
      class te extends ge.BaseDomainApi {
        pathPrefix = "/vip";
        async test(b) {
          return this.sendRequest("GET", "/test", null, [], !1, b);
        }
        async getVipStatus(b) {
          return this.sendRequest("GET", "/get_vip_status", null, [], !1, b);
        }
        async getSubscriptionPlans(b) {
          return this.sendRequest("GET", "/get_subscription_plans", null, [], !1, b);
        }
        async createSubscriptionCheckout(b, L) {
          return this.sendRequest("POST", "/create_subscription_checkout", b, [], !1, L);
        }
        async cancelSubscription(b) {
          return this.sendRequest("POST", "/cancel_subscription", null, [], !1, b);
        }
        async resubscribeSubscription(b) {
          return this.sendRequest("POST", "/resubscribe_subscription", null, [], !1, b);
        }
        async checkoutStatus(b, L) {
          return this.sendRequest("GET", "/checkout_status", b, [], !1, L);
        }
      }
      X.Api = te;
    })((N = v.Vip ||= {}));
    class q extends ge.BaseSession {
      taskApi;
      userApi;
      vipApi;
      _initApis(D) {
        (this.taskApi = new P.Api(D, this)), (this.userApi = new M.Api(D, this)), (this.vipApi = new N.Api(D, this));
      }
    }
    class y extends ge.BaseSdk {
      taskApi;
      userApi;
      vipApi;
      allExceptions = {
        "exceptions.CommonError": u,
        "exceptions.InternalError": r,
        "exceptions.AuthError": s,
        "exceptions.UserAuthError": a,
        "exceptions.ResourceNotFoundError": p,
        "exceptions.ValidationError": m,
        "exceptions.UnexpectedError": C,
        "exceptions.DomainError": w,
        "task.exceptions.ChatError": P.ChatError,
        "task.exceptions.QuotaExceededError": P.QuotaExceededError,
        "task.exceptions.UidDuplicateError": P.UidDuplicateError,
        "task.exceptions.CustomPromptError": P.CustomPromptError,
        "task.exceptions.ConversationNotExistError": P.ConversationNotExistError,
        "task.exceptions.SharedConversationNotExistError": P.SharedConversationNotExistError,
        "user.exceptions.UserNotExistsError": M.UserNotExistsError,
        "user.exceptions.OauthCallbackError": M.OauthCallbackError,
        "user.exceptions.UserAlreadyExistsError": M.UserAlreadyExistsError,
        "user.exceptions.PasswordError": M.PasswordError,
        "vip.exceptions.NoCustomerError": N.NoCustomerError,
        "vip.exceptions.SubscriptionStatusError": N.SubscriptionStatusError,
        "vip.exceptions.StripeError": N.StripeError,
        "vip.exceptions.FrequentlyError": N.FrequentlyError,
      };
      constructor(D) {
        super(D), (this.taskApi = new P.Api(this)), (this.userApi = new M.Api(this)), (this.vipApi = new N.Api(this));
      }
      async session(D, W, H) {
        return this.getSession(D, W, H, q)._run();
      }
    }
    v.Sdk = y;
  })((bn ||= {}));
  var fr = `${Y.getWebOrigin()}/api`,
    ao = () => ({ "Content-Type": "application/json", "X-Client-Version": Y.getExtensionVersion() }),
    yv = {
      baseUrl: fr,
      globalSetHeader(u) {
        let r = ao();
        return { ...u, ...r };
      },
      globalErrorHandler: (u) => (console.warn("ApiRequestError", u.code, `(${u.httpStatus}, ${u.httpStatusText})`), !1),
    },
    Pe = new bn.Sdk(yv);
  var _v = "https://chatgpt4google.com/api",
    uo = class {
      async createShare(r) {
        return await fetch(`${this.getFullUrl("/share/create")}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ data: JSON.stringify({ messages: r.messages, modelName: r.modelName }) }),
        }).then((s) => s.json());
      }
      async getUserVersion(r) {
        let a = await (await fetch(this.getFullUrl("/version/get"), { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(Y.underlize(r)) })).json();
        return Y.camelize(a);
      }
      fetchPromotion = async () => await (await fetch(this.getFullUrl("/p", "old"), { headers: { "x-version": Y.getExtensionVersion() } })).json();
      getFullUrl(r, s = "new") {
        return `${s === "old" ? _v : fr}${r}`;
      }
    },
    ci = new uo();
  var mc = A(ut(), 1);
  var M_ = A(E(), 1);
  var c_ = A(E(), 1);
  var p_ = A(E(), 1),
    li = class {
      emitter;
      event;
      handler;
      destroyed = !1;
      listenBy;
      constructor(r, s, a, p) {
        (this.event = r), (this.handler = s), (this.emitter = a), (this.listenBy = p);
      }
      unregister() {
        this.emitter.off(this.event, this), this._destroy();
      }
      _destroy() {
        return this.destroyed ? !1 : ((this.handler = null), (this.emitter = null), (this.destroyed = !0), !0);
      }
    },
    Bn = class {
      _events = {};
      on(r, s) {
        if (!s) throw new TypeError("invalid handler! --EventEmitter");
        this._events[r] || (this._events[r] = []);
        let a = new li(r, s, this, null);
        return this._events[r]?.push(a), a;
      }
      listenBy(r, s, a) {
        if (!a) throw new TypeError("invalid handler! --EventEmitter");
        this._events[s] || (this._events[s] = []);
        let p = new li(s, a, this, r);
        return this._events[s]?.push(p), p;
      }
      once(r, s) {
        let a = this.on(r, (p) => {
          s(p), a.unregister();
        });
        return a;
      }
      emit(r, s = null) {
        if (!this._events[r]) return !1;
        let a = [];
        for (let p of this._events[r]) p.destroyed || (a.push(p), p.handler.call(this, s));
        return !0;
      }
      off(r, s) {
        if (!this._events[r]) return !1;
        if (s) {
          for (let a = this._events[r], p = 0; p < a.length; p++) {
            let m = a[p];
            if (m === s) return (this._events[r] = this._events[r]?.filter((C) => C !== m)), this._events[r]?.length === 0 && delete this._events[r], !0;
          }
          return console.error(s, this), console.error(`Cannot find listener of ${r} --EventEmitter`), !1;
        }
        for (let a = this._events[r], p = 0; p < a.length; p++) {
          let m = a[p];
          (this._events[r][p] = null), m._destroy();
        }
        return delete this._events[r], !0;
      }
      stopListenBy(r) {
        for (let s in this._events) this._events[s] = this._events[s]?.filter((a) => (a.listenBy === r ? (a._destroy(), !1) : !0));
      }
      removeAllListeners() {
        for (let r in this._events) {
          let s = this._events[r];
          for (let a = s, p = 0; p < a.length; p++) s[p] = null;
          this._events[r] = null;
        }
      }
    };
  var T_ = A(E(), 1);
  var d_ = A(E());
  function lc(u) {
    let r, s, a, p, m, C, w;
    return P(), { feed: M, reset: P };
    function P() {
      (r = !0), (s = ""), (a = 0), (p = -1), (m = void 0), (C = void 0), (w = "");
    }
    function M(q) {
      (s = s ? s + q : q), r && Cv(s) && (s = s.slice(pc.length)), (r = !1);
      let y = s.length,
        v = 0,
        x = !1;
      for (; v < y;) {
        x &&
          (s[v] ===
            `
` && ++v,
            (x = !1));
        let D = -1,
          W = p,
          H;
        for (let te = a; D < 0 && te < y; ++te)
          (H = s[te]),
            H === ":" && W < 0
              ? (W = te - v)
              : H === "\r"
                ? ((x = !0), (D = te - v))
                : H ===
                `
` && (D = te - v);
        if (D < 0) {
          (a = y - v), (p = W);
          break;
        } else (a = 0), (p = -1);
        N(s, v, W, D), (v += D + 1);
      }
      v === y ? (s = "") : v > 0 && (s = s.slice(v));
    }
    function N(q, y, v, x) {
      if (x === 0) {
        w.length > 0 && (u({ type: "event", id: m, event: C || void 0, data: w.slice(0, -1) }), (w = ""), (m = void 0)), (C = void 0);
        return;
      }
      let D = v < 0,
        W = q.slice(y, y + (D ? x : v)),
        H = 0;
      D ? (H = x) : q[y + v + 1] === " " ? (H = v + 2) : (H = v + 1);
      let te = y + H,
        X = x - H,
        I = q.slice(te, te + X).toString();
      if (W === "data")
        w += I
          ? "".concat(
            I,
            `
`
          )
          : `
`;
      else if (W === "event") C = I;
      else if (W === "id" && !I.includes("\0")) m = I;
      else if (W === "retry") {
        let b = parseInt(I, 10);
        Number.isNaN(b) || u({ type: "reconnect-interval", value: b });
      }
    }
  }
  var pc = [239, 187, 191];
  function Cv(u) {
    return pc.every((r, s) => u.charCodeAt(s) === r);
  }
  var co = Me.getLogger("ChatService"),
    dr = class {
      onData = null;
    },
    pi = class {
      constructor(r) {
        this.chatService = r;
      }
      baseUrl = "https://chat.openai.com/backend-api";
      taskMap = {};
      modelNameMap = {};
      async getToken() {
        let r = await fetch("https://chat.openai.com/api/auth/session");
        if (r.status === 403) throw "CLOUDFLARE";
        let s = await r.json();
        if (s.accessToken) return s.accessToken;
        throw "UNAUTHORIZED";
      }
      async fetchModels(r) {
        return (await this.fetch({ method: "GET", path: `${this.baseUrl}/models`, headers: this.getRequestHeader(r) })).models;
      }
      async feedback(r, s) {
        return await this.fetch({ method: "POST", path: `${this.baseUrl}/conversation/message_feedback`, headers: this.getRequestHeader(r), data: s });
      }
      cancelTask(r, s) {
        let a = this.taskMap[s.taskId];
        a && (a.abortController.abort(), delete this.taskMap[a.taskId]);
      }
      async updateTitle(r, s) {
        return await this.fetch({
          method: "POST",
          path: `${this.baseUrl}/conversation/gen_title/${s.chatGptConvId}`,
          headers: this.getRequestHeader(r),
          data: { message_id: s.messageId, model: await this.getModelName(r, s.conversationId) },
        });
      }
      async getAnswer(r, s) {
        let a = new dr(),
          p = new AbortController(),
          m = { taskId: s.taskId, abortController: p, conversationId: s.conversationId };
        return (
          this.doGetAnswer({ token: r, taskInfo: m, params: s, resp: a }).catch((C) => {
            a.onData?.(null, !0, C);
          }),
          a
        );
      }
      async deleteConversation(r, s) {
        let { conversationId: a } = s;
        for (let C of Object.keys(this.taskMap)) this.taskMap[C].conversationId === a && this.cancelTask(r, { taskId: C });
        let m = (await this.chatService.getChatGptConversationMap())[a];
        if (!m) throw "CONVERSATION_NOT_FOUND";
        return this.chatService.removeChatGptConversationData(a), await this.fetch({ path: `${this.baseUrl}/conversation/${m.chatGptConvId}`, method: "PATCH", headers: this.getRequestHeader(r), data: { isVisible: !1 } });
      }
      async doGetAnswer(r) {
        let { token: s, taskInfo: a, params: p, resp: m } = r;
        this.taskMap[a.taskId] = a;
        let C = null,
          w = Y.genId();
        await this.fetchCompletions({
          question: p,
          messageId: w,
          token: s,
          taskInfo: a,
          onMessage: (P) => {
            if (P === "[DONE]") {
              this.chatService.getChatGptConversationMap().then((M) => {
                co.log("chat gpt resp msg:", { ...C, chatGptConvId: M[p.conversationId].chatGptConvId });
              }),
                m.onData?.(C, !0),
                this.cancelTask(s, { taskId: a.taskId });
              return;
            }
            try {
              let M = JSON.parse(P);
              if (M.message?.author?.role !== "assistant") return;
              let N = M.message?.content?.parts?.[0];
              N &&
                (this.chatService.getChatGptConversationMap().then((q) => {
                  let y = p.conversationId;
                  q[y] || this.chatService.addChatGptConversationData(y, { chatGptConvId: M.conversation_id, createdAt: Date.now() });
                }),
                  (C = { content: N, parentMessageId: w, type: "answer", messageId: M.message.id, conversationId: p.conversationId }),
                  m.onData?.(C, !1));
            } catch (M) {
              co.error("unsupported streaming msg:", M);
            }
          },
        });
      }
      async getModelName(r, s) {
        try {
          if (!this.modelNameMap[s]) {
            let p = (await Ie.get("provider:chatgpt"))?.modelType ?? "GPT-3.5 Turbo",
              m = await this.fetchModels(r),
              C;
            if (p === "Auto") {
              let w = m.find((P) => P.slug === "gpt-4");
              C = w ? w.slug : m[0].slug;
            } else C = m[0].slug;
            this.modelNameMap[s] = C;
          }
          return this.modelNameMap[s];
        } catch (a) {
          return co.error(a), "text-davinci-002-render-sha";
        }
      }
      getRequestHeader(r) {
        return { "Content-Type": "application/json", Authorization: `Bearer ${r}` };
      }
      async fetchCompletions(r) {
        let { onMessage: s, taskInfo: a, question: p, messageId: m, token: C } = r,
          w = await this.chatService.getChatGptConversationMap(),
          P = await this.getModelName(C, p.conversationId),
          M = w[p.conversationId],
          N = a.abortController.signal;
        if (N.aborted) return;
        let q = await this.fetch({
          method: "POST",
          path: `${this.baseUrl}/conversation`,
          headers: this.getRequestHeader(C),
          returnOriginResponse: !0,
          signal: a.abortController.signal,
          data: {
            action: "next",
            messages: [{ id: m, role: "user", content: { contentType: "text", parts: [p.content] } }],
            conversationId: M ? M.chatGptConvId : void 0,
            model: P,
            parentMessageId: p.parentMessageId || Y.genId(),
          },
        });
        if (!q.ok) {
          let x = await q.json().catch();
          throw this.openApiErrorHandler(x);
        }
        let y = lc((x) => {
          x.type === "event" && s(x.data);
        }),
          v = q.body.getReader();
        try {
          for (; !N.aborted;) {
            let { done: x, value: D } = await v.read();
            if (x) return;
            let W = new TextDecoder().decode(D);
            y.feed(W);
          }
        } catch {
          v.releaseLock();
        }
      }
      async fetch(r) {
        let s = Y.underlize(r.data),
          a = await fetch(r.path, { method: r.method, headers: r.headers, body: s == null ? void 0 : JSON.stringify(s), signal: r.signal });
        if (a.status === 403) throw "CLOUDFLARE";
        if (r.returnOriginResponse) return a;
        if (a.ok) {
          let m = await a.json();
          return Y.camelize(m);
        }
        let p = await a.json().catch(() => ({}));
        throw r.errorHandler ? r.errorHandler(p) : this.openApiErrorHandler(p);
      }
      openApiErrorHandler(r) {
        let s = "",
          a = "";
        if (r?.detail) {
          let p = r.detail;
          typeof p == "string" ? (s = p) : p.message && typeof p.message == "string" && ((s = p.message), (a = p.code));
        }
        return s ? (s.includes("Too many requests") ? "TOO_MANY_REQUESTS" : s.includes("Unauthorized") || s.includes("expired") || a === "invalid_jwt" ? "UNAUTHORIZED" : s.includes("Not Found") ? "OPENAI_NOT_FOUND" : s) : "UNKNOWN";
      }
    };
  var ct = A(ut(), 1),
    fi = Me.getLogger("ChatService"),
    bv = 3600 * 1e3 * 72,
    di = class {
      constructor(r, s) {
        this.storage = r;
        this.service = s;
        this.init()
          .then(() => {
            this.chatGptRequester = new pi(this.service);
          })
          .catch((a) => {
            fi.error("ChatGptProvider init error", a);
          });
      }
      currentSenderPort;
      get currentSenderTabId() {
        return this.currentSenderPort?.sender?.tab?.id;
      }
      pendingRequests = {};
      chatGptRequester;
      conversationMap;
      initReady = !1;
      events = new Bn();
      async init() {
        this.storage.removeDeprecated("chatGpt"),
          (this.conversationMap = await this.loadConversationMap()),
          await this.removeOutdatedConversations(),
          ve.isProd && this.initRequestSenderForProd(),
          ct.default.runtime.onConnect.addListener((r) => {
            r.name === "ChatGptRequestSender" &&
              (fi.log("ChatGptRequestSender connected"),
                this.currentSenderPort && this.disposeCurrentSenderPort(),
                (this.currentSenderPort = r),
                r.onMessage.addListener((s) => {
                  this.pendingRequests[s.reqId](s);
                }),
                r.onDisconnect.addListener(() => {
                  r === this.currentSenderPort && (this.currentSenderPort = void 0);
                }));
          }),
          (this.initReady = !0),
          this.events.emit("initReady");
      }
      async loadConversationMap() {
        let r = await this.storage.get("chatGptConversationMap");
        return r || fi.error("No conversationMap when init"), r || {};
      }
      initRequestSenderForProd() {
        this.searchAndInsertRequestSender(),
          ct.default.tabs.onUpdated.addListener((r, s) => {
            ct.default.tabs.get(r).then((a) => {
              this.isTargetHost(a.url) && s.status === "complete" && (this.disposeCurrentSenderPort(), this.insertScriptToTab(r));
            });
          }),
          ct.default.tabs.onRemoved.addListener((r) => {
            r === this.currentSenderTabId && (this.disposeCurrentSenderPort(), this.searchAndInsertRequestSender());
          });
      }
      async createConversation() {
        return `conv:${Y.genId()}`;
      }
      async addConversationData(r, s) {
        (this.conversationMap[r] = s), await this.saveConversationMap();
      }
      async removeConversationData(r) {
        delete this.conversationMap[r], await this.saveConversationMap();
      }
      async feedback(r) {
        return this.callRequestMethod("feedback", r);
      }
      async deleteConversation(r) {
        let s = this.conversationMap[r];
        !s || s.kept || this.callRequestMethod("deleteConversation", { conversationId: r });
      }
      cancelTask(r) {
        return this.callRequestMethod("cancelTask", { taskId: r });
      }
      getAnswer(r, s) {
        let a = `task:${Y.genId()}`;
        return (
          (async () => {
            let m = await Ie.get("language");
            r.parentMessageId || (r.content = Y.addPromptLangSuffix(r.content, m)), this.callRequestMethod("getAnswer", { taskId: a, ...r }, s);
          })(),
          { taskId: a }
        );
      }
      hasChatGptTab() {
        return !!this.currentSenderPort?.sender?.tab;
      }
      focusChatGptTab(r = !1) {
        if (!this.hasChatGptTab()) return !1;
        let s = this.currentSenderPort.sender.tab;
        return ct.default.windows.update(s.windowId, { focused: !0 }), ct.default.tabs.update(s.id, { active: !0 }), r && ct.default.tabs.reload(s.id), !0;
      }
      createChatGptTab() {
        return ct.default.windows.create({ url: "https://chat.openai.com/chat", type: "normal", width: 200, focused: !0 }), !0;
      }
      async getConversationMap() {
        return this.initReady
          ? this.conversationMap
          : new Promise((r) => {
            this.events.once("initReady", () => {
              r(this.conversationMap);
            });
          });
      }
      async saveConversationMap() {
        return this.storage.update({ chatGptConversationMap: this.conversationMap });
      }
      async openInChatGptWebApp(r) {
        if (!this.conversationMap[r]) return;
        let s = this.conversationMap[r];
        ct.default.tabs.create({ url: `https://chat.openai.com/chat/${s.chatGptConvId}`, active: !0 });
      }
      async keepConversation(r, s) {
        if (!this.conversationMap[r]) return;
        let a = this.conversationMap[r];
        (a.kept = !0), this.saveConversationMap();
        let p = a.chatGptConvId,
          m = { conversationId: r, chatGptConvId: p, messageId: s };
        this.callRequestMethod("updateTitle", m);
      }
      async unKeepConversation(r) {
        this.conversationMap[r] && ((this.conversationMap[r].kept = !1), this.saveConversationMap());
      }
      async updateToken(r) {
        await this.storage.set("chatGptToken", r);
      }
      isTargetHost(r) {
        return r?.includes("https://chat.openai.com");
      }
      isTargetTab(r) {
        return this.isTargetHost(r.url) && r.id;
      }
      disposeCurrentSenderPort() {
        this.currentSenderPort && (this.currentSenderPort.disconnect(), (this.currentSenderPort = void 0));
      }
      searchAndInsertRequestSender() {
        this.currentSenderPort ||
          ct.default.tabs.query({}).then((r) => {
            for (let s of r)
              if (this.isTargetTab(s)) {
                this.insertScriptToTab(s.id);
                break;
              }
          });
      }
      async insertScriptToTab(r) {
        ct.default.scripting.executeScript({ target: { tabId: r }, files: ["chatGptInjection.js"] }), ct.default.scripting.insertCSS({ target: { tabId: r }, files: ["chatGptInjection.css"] });
      }
      async callRequestMethod(r, s, a) {
        if (this.currentSenderPort) {
          let p = Y.genId();
          return new Promise((m, C) => {
            this.pendingRequests[p] = (P) => {
              let { respType: M, data: N, finished: q, error: y } = P;
              M === "data" ? (a?.(N, q, this.normalizeError(y)), q && (m(null), delete this.pendingRequests[p])) : M === "resp" ? (m(N), delete this.pendingRequests[p]) : (C(N), delete this.pendingRequests[p]);
            };
            let w = { event: "callMethod", reqId: p, data: { method: r, params: s } };
            this.currentSenderPort.postMessage(w);
          }).catch((m) => {
            throw (a?.(null, !0, this.normalizeError(m)), m);
          });
        } else
          try {
            let p = await this.getToken(),
              m = await this.chatGptRequester[r](p, s);
            return m instanceof dr
              ? ((m.onData = (C, w, P) => {
                a?.(C, w, this.normalizeError(P));
              }),
                null)
              : m;
          } catch (p) {
            throw (a?.(null, !0, this.normalizeError(p)), p);
          }
      }
      normalizeError(r) {
        return r === void 0 ? r : (fi.error(r, JSON.stringify(r)), typeof r == "string" ? r : "UNKNOWN_OPENAI_ERROR");
      }
      async getToken(r = !0) {
        if (r) {
          let a = await this.storage.get("chatGptToken");
          if (a) return a;
        }
        let s = await this.chatGptRequester.getToken();
        return await this.storage.update({ chatGptToken: s }), s;
      }
      async removeOutdatedConversations() {
        let r = this.conversationMap,
          s = Date.now();
        for (let a of Object.keys(r)) {
          let { createdAt: p = 0 } = r[a];
          s - p > bv && delete r[a];
        }
        await this.saveConversationMap();
      }
    };
  var F_ = A(E(), 1);
  var lo = Me.getLogger("ChatService"),
    dc = 800,
    xv = 3600 * 1e3 * 72,
    hc = "A",
    gc = "You",
    Tv = `
${hc}: `,
    gi = class {
      constructor(r) {
        this.storage = r;
        this.removeOutdatedConversations();
      }
      pendingTasks = {};
      async createConversation() {
        return `conv:${Y.genId()}`;
      }
      async getAnswer(r, s) {
        let a = `task:${Y.genId()}`,
          p = `msg:${Y.genId()}`,
          m = r.conversationId;
        await this.addConversationMessage({ ...r, messageId: p, type: "question" });
        let C = { conversationId: m, messageId: `msg:${Y.genId()}`, type: "answer", content: "" },
          w = new AbortController(),
          P = { taskId: a, conversationId: m, abortController: w };
        this.pendingTasks[a] = P;
        let M = !1;
        return (
          this.fetchCompletions({
            convId: m,
            taskInfo: P,
            onData: (N) => {
              (C.content += N.text || ""), s(C, N.finished, N.error), N.finished && ((M = !0), lo.debug("answer finished", C), this.addConversationMessage(C));
            },
            onAbort: () => {
              !M && C.content.trim() && (lo.debug("aborted, save partial message", C), this.addConversationMessage(C));
            },
          }).catch((N) => {
            throw (s(null, !0, `${N}`), N);
          }),
          { taskId: a }
        );
      }
      async cancelTask(r) {
        let s = this.pendingTasks[r];
        lo.debug("cancel task", s), s && (await this.handleTaskFinish(s));
      }
      async deleteConversation(r) {
        for (let a of Object.keys(this.pendingTasks)) this.pendingTasks[a].conversationId === r && this.cancelTask(a);
        let s = await this.getStore();
        delete s.conversations[r], this.saveStore(s);
      }
      async feedback(r) {
        return !0;
      }
      async addConversationMessage(r) {
        let s = await this.getStore(),
          a = r.conversationId;
        s.conversations[a] || (s.conversations[a] = { messages: [], createdAt: Date.now() }), s.conversations[a].messages.push(r), await this.saveStore(s);
      }
      async getStore() {
        return this.storage.get("gpt3");
      }
      async saveStore(r) {
        return this.storage.set("gpt3", r);
      }
      async fetchCompletions(r) {
        let { taskInfo: s, onData: a, onAbort: p } = r;
        if (s.abortController.signal.aborted) return;
        let C = await this.getProviderConfigs(),
          { apiKey: w, modelType: P = "chat_model", apiHost: M } = C || {},
          N,
          q = M?.trim() || Xu;
        if ((P === "chat_model" ? (N = await this.fetchChatCompletions(r, w, q)) : (N = await this.fetchTextCompletions(r, w, q)), N.status !== 200)) throw `${N.statusText}(${N.status})`;
        let y = N.body?.pipeThrough(new TextDecoderStream()).getReader(),
          v = !1;
        for (; ;) {
          let x;
          try {
            x = await y?.read();
          } catch {
            p();
            return;
          }
          if (!x || x.done) return;
          let W = x.value.split(/\r?\n\r?\n/);
          for (let H of W) {
            let te = H.replace(/^data: /, ""),
              X;
            P === "chat_model"
              ? (X = (L) => {
                let U = L.choices[0];
                return U.finish_reason ? { text: "", finished: !0 } : { text: U.delta?.content || "", finished: !1 };
              })
              : (X = (L) => {
                let U = L.choices[0];
                return U.finish_reason ? { text: "", finished: !0 } : { text: U.text, finished: !1 };
              });
            let I = this.parseStreamResult(te, X),
              { text: b } = I;
            if ((v || (b = b.replace(/^\n*/, "")), b.length > 0 && (v = !0), a({ text: b, finished: I.finished }), I.finished)) {
              this.handleTaskFinish(s);
              return;
            }
          }
        }
      }
      async fetchTextCompletions(r, s, a) {
        let p = await this.createPrompt(r.convId);
        return fetch(`${a}/v1/completions`, {
          headers: this.getHeaders(s),
          method: "POST",
          signal: r.taskInfo.abortController.signal,
          body: JSON.stringify({ model: Hs["text_model"], prompt: p, stream: !0, temperature: 0.3, stop: Tv, max_tokens: dc }),
        });
      }
      async fetchChatCompletions(r, s, a) {
        return fetch(`${a}/v1/chat/completions`, {
          headers: this.getHeaders(s),
          method: "POST",
          signal: r.taskInfo.abortController.signal,
          body: JSON.stringify({ model: Hs["chat_model"], messages: await this.createPromptMessages(r.convId), stream: !0, temperature: 0.5, max_tokens: dc }),
        });
      }
      async createPrompt(r) {
        let s = await this.getStore(),
          a = await Ie.getAll(),
          p = a.language,
          w = (a["provider:gpt3"]?.guideType || "default") === "default" ? Yu : zu;
        return (
          s.conversations[r].messages.forEach((P, M) => {
            let N = P.type === "question" ? hc : gc,
              q = P.content.trim();
            M === 0 && (q = Y.addPromptLangSuffix(q, p)),
              (w += `${N}: ${q}
`);
          }),
          (w += `${gc}:`),
          w
        );
      }
      async createPromptMessages(r) {
        let s = await this.getStore(),
          a = await Ie.getAll(),
          p = a.language,
          w = [{ role: "system", content: (a["provider:gpt3"]?.guideType || "default") === "default" ? Zu : Ju }];
        return (
          s.conversations[r].messages.forEach((P, M) => {
            let N = P.type === "question" ? "user" : "assistant",
              q = P.content.trim();
            M === 0 && (q = Y.addPromptLangSuffix(q, p)), w.push({ role: N, content: q });
          }),
          w
        );
      }
      getHeaders(r) {
        return { "Content-Type": "application/json", Authorization: `Bearer ${r}` };
      }
      parseStreamResult(r, s) {
        if (!r) return { text: "", finished: !1 };
        if (r === "[DONE]") return { text: "", finished: !0 };
        let a = JSON.parse(r);
        if (a.error) throw typeof a.error == "string" ? a.error : a.error?.message || "UNKNOWN_OPENAI_ERROR";
        return s(a);
      }
      async handleTaskFinish(r) {
        r.abortController.abort(), delete this.pendingTasks[r.taskId];
      }
      async getProviderConfigs() {
        let { configs: r } = await Ie.getProviderConfigs();
        return r;
      }
      async removeOutdatedConversations() {
        let r = await this.getStore(),
          s = Date.now();
        for (let a of Object.keys(r.conversations)) {
          let { createdAt: p = 0 } = r.conversations[a];
          s - p > xv && delete r.conversations[a];
        }
        await this.saveStore(r);
      }
    };
  var an = class extends tt {
    storagePrefix = "chat";
    defaultStorageValues = { tabConversationMap: {}, gpt3: { conversations: {} }, chatGptToken: null, chatGptConversationMap: {} };
    providers;
    onInit() {
      (this.providers = { chatGpt: new di(this.storage, this), gpt3: new gi(this.storage) }),
        mc.default.tabs.onRemoved.addListener(async (r) => {
          this.onTabUnload(r);
        });
    }
    async createConversation() {
      let r = this.lastCaller?.tabId,
        s;
      if (((await this.getProviderType()) === "gpt3" && (s = await this.providers.gpt3.createConversation()), (s = await this.providers.chatGpt.createConversation()), r)) {
        let a = await this.storage.get("tabConversationMap");
        (a[r] = s), await this.storage.update({ tabConversationMap: a });
      }
      return s;
    }
    async getAnswer(r, s) {
      return (await this.getProviderType()) === "gpt3" ? this.providers.gpt3.getAnswer(r, s) : this.providers.chatGpt.getAnswer(r, s);
    }
    async feedback(r) {
      return (await this.getProviderType()) === "gpt3" ? this.providers.gpt3.feedback(r) : this.providers.chatGpt.feedback(r);
    }
    createShare(r, s) {
      return ci.createShare({ messages: r, modelName: s });
    }
    async cancelTask(r) {
      return (await this.getProviderType()) === "gpt3" ? this.providers.gpt3.cancelTask(r) : this.providers.chatGpt.cancelTask(r);
    }
    async addChatGptConversationData(r, s) {
      return this.providers.chatGpt.addConversationData(r, s);
    }
    async removeChatGptConversationData(r) {
      return this.providers.chatGpt.removeConversationData(r);
    }
    async deleteConversation(r) {
      await Promise.all([this.providers.gpt3.deleteConversation(r), this.providers.chatGpt.deleteConversation(r)]);
    }
    async getChatGptConversationMap() {
      return this.providers.chatGpt.getConversationMap();
    }
    async clearChatGptToken() {
      await this.storage.update({ chatGptToken: null });
    }
    openInChatGptWebApp(r) {
      this.providers.chatGpt.openInChatGptWebApp(r);
    }
    async keepChatGptConversation(r, s) {
      this.providers.chatGpt.keepConversation(r, s);
    }
    async unKeepChatGptConversation(r) {
      this.providers.chatGpt.unKeepConversation(r);
    }
    updateChatGptToken(r) {
      return this.providers.chatGpt.updateToken(r);
    }
    async onTabUnload(r) {
      let s = await this.storage.get("tabConversationMap"),
        a = s[r];
      a && (this.deleteConversation(a), delete s[r]);
      for (let p of Object.keys(s)) (await Y.tryGetTab(p)) || (this.deleteConversation(a), delete s[p]);
      await this.storage.update({ tabConversationMap: s });
    }
    async getProviderType() {
      return Ie.get("provider");
    }
  };
  _t(an, "serviceName", "ChatService");
  var Z_ = A(E(), 1);
  var hi = new et(an.serviceName, an);
  var Ab = A(E(), 1);
  var sC = A(E(), 1),
    mi;
  ((C) => {
    function u(w) {
      return w.itemType === "reply" && w.data.type === "error";
    }
    C.isErrorReply = u;
    function r(w) {
      return w.itemType === "guide";
    }
    C.isGuide = r;
    function s(w) {
      return w.itemType === "intent";
    }
    C.isIntent = s;
    function a(w) {
      return w.itemType === "reply";
    }
    C.isReply = a;
    function p(w) {
      return w.itemType === "question";
    }
    C.isQuestion = p;
    function m(w) {
      return w.itemType === "reply" || w.itemType === "question";
    }
    C.isChatMessage = m;
  })((mi ||= {}));
  var vb = A(E(), 1);
  var fo = A(ut(), 1);
  var ZC = A(E(), 1);
  var PC = A(E(), 1);
  var TC = A(E(), 1);
  var lC = A(E(), 1);
  var { ApiRequestError: aC, ApiRequestAborted: uC } = ge;
  var Fn = A(ut(), 1);
  var Ht = class extends tt {
    storagePrefix = "user";
    defaultStorageValues = { userInfo: null, userVipStatus: null, myPrompts: [], selectionActions: [], userBatch: null, clientId: "" };
    onInit() {
      Fn.default.storage.local.onChanged.addListener((r) => {
        let s = r[this.storage.encodeKey("userInfo")],
          a = r[this.storage.encodeKey("userVipStatus")],
          p = r[this.storage.encodeKey("myPrompts")],
          m = r[this.storage.encodeKey("selectionActions")];
        s && this.emit("userInfoChange", { userInfo: s.newValue || null }),
          a?.newValue && this.emit("userVipStatusChange", { userVipStatus: a.newValue }),
          p && this.emit("myPromptsChange", { items: p.newValue }),
          m && this.emit("selectionActionsChange", { items: m.newValue });
      }),
        ze.addExternalListener("webEvent", (r, s, a) => {
          if (r.event === "markAuth") {
            let p = r.payload;
            a.tab?.id && p.loginEntry === "extension" && Fn.default.tabs.remove(a.tab.id), ze.broadcastFromBackground("webEvent", r), this.markAuth(p);
          }
          if (
            (r.event === "logout" && (this.logout(), ze.broadcastFromBackground("webEvent", r)),
              r.event === "markPaid" && ze.broadcastFromBackground("webEvent", r),
              r.event === "openShortcuts" && Ie.openShortcutsPage(),
              r.event === "openOptions")
          ) {
            let p = r.payload;
            a.tab?.id && !p.newTab ? Fn.default.tabs.update(a.tab.id, { url: Fn.default.runtime.getURL("options.html") }) : Ie.openOptionsPage();
          }
        }),
        this.initClientId();
    }
    markAuth(r) {
      this.storage.set("userInfo", r.userInfo), this.storage.set("userVipStatus", r.userVipStatus);
    }
    async getUserInfo(r) {
      return this._fetchWithCache(
        "userInfo",
        async () => {
          try {
            return (await Pe.userApi.me()).user;
          } catch (s) {
            if (s instanceof bn.UserAuthError || s instanceof bn.AuthError) return await this.handleLogout(), null;
            throw s;
          }
        },
        r
      );
    }
    async getVipStatus(r) {
      return this._fetchWithCache("userVipStatus", async () => (await Pe.vipApi.getVipStatus()).vipStatus, r);
    }
    async getUserStatus() {
      let r = await this.storage.getAll(),
        [s, a] = await Promise.all([
          async () => {
            if (r.userInfo) return Promise.resolve(r.userInfo);
            let { user: p } = await Pe.userApi.me();
            return this.storage.set("userInfo", p), p;
          },
          async () => {
            if (r.userVipStatus) return Promise.resolve(r.userVipStatus);
            let { vipStatus: p } = await Pe.vipApi.getVipStatus();
            return this.storage.set("userVipStatus", p), p;
          },
        ]);
      return { userInfo: s, vipStatus: a };
    }
    async getUserVersion() {
      let { clientId: r, userBatch: s } = await this.storage.getAll();
      return ci.getUserVersion({ clientId: r, userBatch: s });
    }
    async logout() {
      await Pe.userApi.logout(), await this.storage.set("userInfo", null), await this.storage.set("userVipStatus", null);
    }
    async clearUserInfo() {
      await this.storage.set("userInfo", null), await this.storage.set("userVipStatus", null);
    }
    async openGoogleAuthWindow(r) {
      let s = Y.getWebOrigin(),
        a = `${s}/api/user/oauth2_authorize?redirect_url=`,
        p = `${s}/auth-landing?from=extension`,
        m = `${a}${p}`,
        C = 500,
        w = 600,
        { availLeft: P, availTop: M, height: N, width: q } = r,
        y = Math.round((q - C) / 2) + P,
        v = Math.round((N - w) / 2) + M;
      Fn.default.windows.create({ url: m, focused: !0, width: C, height: w, type: "popup", left: y, top: v });
    }
    async getUserLanguages() {
      let r = await this.getUserInfo();
      return r ? r.languagePreferences || [] : [];
    }
    async updateUserLanguages(r) {
      await Pe.userApi.updateLanguagePreferences({ languagePreferences: r.filter((s) => s.toLowerCase() !== "auto") }), await this.getUserInfo();
    }
    async getCustomPrompts(r, s) {
      let a = this.getCustomPromptStorageKey(r);
      return this._fetchWithCache(a, async () => (await Pe.userApi.customPromptList({ type: r })).items, s);
    }
    async updateCustomPrompt(r, s) {
      return await Pe.userApi.updateCustomPrompt(s), await this.getCustomPrompts(r, { useCache: !1 }), !0;
    }
    async deleteCustomPrompt(r, s) {
      return await Pe.userApi.deleteCustomPrompt({ id: s }), await this.getCustomPrompts(r, { useCache: !1 }), !0;
    }
    async addCustomPrompt(r, s) {
      return await Pe.userApi.createCustomPrompt({ ...s, type: r }), await this.getCustomPrompts(r, { useCache: !1 }), !0;
    }
    async sortCustomPrompt(r, s, a) {
      return await Pe.userApi.updateCustomPromptPosition({ id: s, position: a }), await this.getCustomPrompts(r, { useCache: !1 }), !0;
    }
    async setUserBatch(r) {
      (await this.storage.get("userBatch")) || (await this.storage.set("userBatch", r));
    }
    getCustomPromptStorageKey(r) {
      if (r === "selection_action") return "selectionActions";
      if (r === "my_prompt") return "myPrompts";
      throw new Error("Invalid custom prompt type");
    }
    async handleLogout() {
      await this.storage.update({ ...this.defaultStorageValues }), this.emit("userLogout", {});
    }
    async initClientId() {
      if (!(await this.storage.get("clientId"))) {
        let s = Y.genId();
        await this.storage.set("clientId", s);
      }
    }
  };
  _t(Ht, "serviceName", "UserService");
  var wC = A(E(), 1);
  var Ye = new et(Ht.serviceName, Ht);
  var _i = A(ii(), 1),
    yc = A(ut(), 1);
  var GC = A(E(), 1);
  var vi = Me.getLogger("MonicaService"),
    un = class {
      constructor(r) {
        this.context = r;
        this.init().then(() => {
          (this.initReady = !0), this.events.emit("initReady");
        });
      }
      events = new Bn();
      initReady = !1;
      get host() {
        return this.context.apiHost;
      }
      get storage() {
        return this.context.storage;
      }
      pendingTasks = {};
      async onTabUnload(r) { }
      genTaskId() {
        return `task:${Y.genId()}`;
      }
      async cancelTask(r) {
        let s = this.pendingTasks[r];
        vi.debug("cancel task", s), s && (await this.markTaskFinished(s));
      }
      async createGenerationTask(r) {
        let { taskInfo: s, onData: a, onAbort: p } = r;
        this.pendingTasks[s.taskId] = s;
        let m = s.abortController.signal;
        if (m.aborted) return;
        let C, w;
        if (r.taskData) (w = "server"), (C = await this.fetchServerGeneration({ ...r.taskData, taskUid: s.taskId, language: r.language, abortSignal: m }));
        else throw new Error("not implemented");
        if (C.status !== 200) throw `${C.statusText}(${C.status})`;
        let P = C.body?.pipeThrough(new TextDecoderStream()).getReader(),
          M = !1;
        for (; ;) {
          let N;
          try {
            N = await P?.read();
          } catch {
            p();
            return;
          }
          if (!N || N.done) return;
          let q = N.value;
          vi.debug("[Value Received]"), vi.debug(q);
          let y = q.split(/\r?\n\r?\n/);
          for (let v of y) {
            let x = v.replace(/^data: /, "");
            vi.debug({ chunk: v, data: x });
            let D = this.parseStreamResult(x, w),
              { text: W } = D;
            if ((M || (W = W.replace(/^\n*/, "")), W.length > 0 && (M = !0), a({ text: W, finished: D.finished }), D.finished)) {
              this.markTaskFinished(s);
              return;
            }
          }
        }
      }
      async fetchServerGeneration(r) {
        let s = `${this.context.apiHost}/generate/gen`,
          a = { taskType: r.taskType, taskUid: r.taskUid, language: r.language, data: r.data };
        return fetch(s, { headers: ao(), method: "POST", signal: r.abortSignal, body: JSON.stringify(Y.underlize(a)) });
      }
      findAndCancelTasks(r) {
        for (let s of Object.keys(this.pendingTasks)) r(this.pendingTasks[s]) && this.cancelTask(s);
      }
      parseStreamResult(r, s) {
        if (!r) return { text: "", finished: !1 };
        if (r === "[DONE]") return { text: "", finished: !0 };
        let a = JSON.parse(r);
        if (s === "openAi") {
          if (a.error) throw typeof a.error == "string" ? a.error : a.error?.message || "UNKNOWN_OPENAI_ERROR";
          let p = a.choices[0];
          if (!p.finish_reason) return { text: p.text, finished: !1 };
        } else {
          let p = a;
          if (p.error) throw p.error.code === 10002 ? "QUOTA_EXCEEDED" : p.error.msg;
          if (!p.finished) return { text: p.text, finished: !1 };
        }
        return { text: "", finished: !0 };
      }
      async markTaskFinished(r) {
        r.abortController.abort(),
          delete this.pendingTasks[r.taskId],
          setTimeout(() => {
            Ye.getVipStatus();
          }, 1e3);
      }
    };
  var $n = Me.getLogger("MonicaService"),
    wv = 3600 * 1e3 * 72,
    yi = class extends un {
      conversations;
      tabActiveConversationMap;
      async init() {
        (this.conversations = (await this.storage.get("conversations")) || {}), (this.tabActiveConversationMap = (await this.storage.get("tabActiveConversationMap")) || {}), await this.removeOutdatedConversations();
      }
      async onTabUnload(r) {
        let s = await this.storage.get("tabConversationMap"),
          a = s[r];
        a && (await this.deleteConversation(a), delete s[r], await this.storage.update({ tabConversationMap: s })),
          this.tabActiveConversationMap[r] && (delete this.tabActiveConversationMap[r], await this.saveTabActiveConversationMap(), await this.emitActiveConversationCountChange());
      }
      async createConversation(r, s, a) {
        let p = `conv:${Y.genId()}`;
        if (($n.log("on create conversation", p), r)) {
          let C = await this.storage.get("tabConversationMap");
          (C[r] = p), await this.storage.update({ tabConversationMap: C });
        }
        let m = { id: p, items: this.createWelcomeItems(p), createdAt: Date.now(), tabInfo: r ? { id: r, title: s, url: a } : void 0 };
        return (this.conversations[p] = m), await this.saveConversations(), m;
      }
      async retryQuestion(r, s) {
        let { conversationId: a, questionId: p } = r,
          m = await this.getConversation(a),
          C = m?.items.find((w) => mi.isQuestion(w) && w.itemId === p) || null;
        if (!C) throw "QUESTION_NOT_FOUND";
        return (m.items = m.items.filter((w) => !(w === C || (mi.isReply(w) && w.data.questionId === p)))), this.askQuestion({ content: C.data.content, conversationId: C.conversationId, origin: r.origin, questionId: p }, s);
      }
      async askQuestion(r, s) {
        let a = this.createQuestion(r.conversationId, r.content);
        r.questionId && (a.itemId = r.questionId);
        let { taskId: p } = await this.doAskQuestion(a, r.origin, s);
        return { taskId: p, question: a };
      }
      async continueQuickActionInConversation(r) {
        let { conversationId: s, promptContent: a, result: p, selectedText: m } = r,
          C = await this.getConversation(s);
        if (!C) throw "CONVERSATION_NOT_FOUND";
        let w = await this.createIntentCandidate({ conversationId: s, type: "selection", content: m }),
          P = this.createQuestion(w.conversationId, a);
        P.data.intentId = w.itemId;
        let M = this.createReply(s, p),
          N = [w, ...w.data.replies, P, M];
        return C.items.push(...N), await this.saveConversations(), N;
      }
      async getActiveConversations() {
        let r = [];
        for (let s in this.tabActiveConversationMap) {
          let a = await Y.tryGetTab(s);
          if (!a) continue;
          let p = await this.getConversation(this.tabActiveConversationMap[s]);
          r.push({
            conversationId: p.id,
            createdAt: p.createdAt,
            tabInfo: { id: parseInt(s), title: a.title || p.tabInfo.title, url: a.url || p.tabInfo.url, favicon: a.favIconUrl },
            lastMessage: p.items.filter((m) => m.itemType === "reply").pop()?.summary || "",
            title: p.title || "",
          });
        }
        return r.sort((s, a) => a.createdAt - s.createdAt);
      }
      async switchToActiveConversation(r, s) {
        if (!this.conversations[s]) throw "CONVERSATION_NOT_FOUND";
        await yc.default.tabs.update(r, { active: !0 }), this.events.emit("activateConversation", { conversationId: s });
      }
      async markConversationActive(r, s, a) {
        a ? (this.tabActiveConversationMap[r] = s) : this.tabActiveConversationMap[r] === s && delete this.tabActiveConversationMap[r], await this.saveTabActiveConversationMap(), this.emitActiveConversationCountChange();
      }
      async fetchConversationList(r) {
        let s = await Pe.taskApi.getConversationList(r);
        return (
          s.conversationList.itemList.forEach((a) => {
            let p = this.conversations[a.conversationId];
            p && (p.title = a.title);
          }),
          this.saveConversations(),
          s
        );
      }
      async saveTabActiveConversationMap() {
        await this.storage.update({ tabActiveConversationMap: this.tabActiveConversationMap });
      }
      async doAskQuestion(r, s, a) {
        let p = this.genTaskId(),
          m = r.conversationId;
        await this.addChatItem(r);
        let C = this.createReply(m, "");
        C.data.questionId = r.itemId;
        let w = !1,
          P = await this.getNewItemsForSync(m);
        return (
          this.createGenerationTask({
            language: "auto",
            taskData: { taskType: "chat", data: { conversationId: m, items: P, preGeneratedReplyId: C.itemId, origin: s } },
            taskInfo: { taskId: p, conversationId: m, abortController: new AbortController() },
            onData: (M) => {
              if (((C.data.content += M.text || ""), (C.summary = C.data.content), M.error)) {
                a(this.createErrorReply(C, M.error), !0, M.error);
                return;
              }
              a(C, M.finished), M.finished && ((w = !0), $n.debug("reply finished successfully", C), P.forEach((N) => (N.synced = !0)), this.addChatItem(C));
            },
            onAbort: () => {
              !w && C.data.content.trim() && ($n.debug("aborted, save partial message", C), P.forEach((M) => (M.synced = !0)), this.addChatItem(C));
            },
          }).catch((M) => {
            $n.error(M);
            let N = `${M}`;
            throw (a(this.createErrorReply(C, N), !0, N), M);
          }),
          { taskId: p }
        );
      }
      async getNewItemsForSync(r) {
        return (await this.getConversation(r)).items.filter((a) => !a.synced);
      }
      createErrorReply(r, s) {
        let a = (0, _i.clone)(r);
        return (a.data.type = "error"), (a.summary = s), (a.data.content = s), a;
      }
      createQuestion(r, s) {
        return { conversationId: r, itemId: `msg:${Y.genId()}`, itemType: "question", summary: s, data: { type: "text", content: s } };
      }
      async createIntentCandidate(r) {
        let s = `intent:${Y.genId()}`,
          a = "What would you like to do with the text?",
          p = { itemId: s, itemType: "intent", conversationId: r.conversationId, summary: r.content, data: { type: r.type, content: r.content, replies: [this.createReply(r.conversationId, a)] } };
        return p.data.replies.forEach((m) => (m.data.intentId = s)), p;
      }
      async triggerIntentAction(r, s) {
        let { actionId: a, customQuestion: p, intent: m } = r,
          C;
        if (a) {
          let y = (await Ye.getCustomPrompts("selection_action", { autoUpdate: !1 })).find((v) => v.id === a);
          if (!y) throw "INTENT_ACTION_NOT_FOUND";
          C = y.content;
        } else {
          if (!p) throw "INTENT_ACTION_REQUIRED";
          C = p;
        }
        (await this.getConversation(m.conversationId)).items.push(m, ...m.data.replies);
        let P = this.createQuestion(m.conversationId, C);
        P.data.intentId = m.itemId;
        let M = [m, ...m.data.replies, P],
          { taskId: N } = await this.doAskQuestion(P, r.origin, s);
        return { newItems: M, question: P, taskId: N };
      }
      async deleteConversation(r) {
        this.findAndCancelTasks((s) => s.conversationId === r), delete this.conversations[r], await this.saveConversations();
      }
      async feedback(r) {
        return Pe.taskApi.feedbackGenResult(r);
      }
      async shareConversation(r) {
        return Pe.taskApi.shareConversation(r);
      }
      async getConversations() {
        return this.initReady
          ? this.conversations
          : new Promise((r) => {
            this.events.once("initReady", () => {
              r(this.conversations);
            });
          });
      }
      async getChatItemList(r) {
        return await Pe.taskApi.getChatItemList(r);
      }
      createConversationTitle(r) {
        let s = this.genTaskId(),
          a = "";
        return (
          this.createGenerationTask({
            language: "auto",
            taskData: { taskType: "gen_title", data: { conversationId: r } },
            taskInfo: { taskId: s, conversationId: r, abortController: new AbortController() },
            onData: (p) => {
              if (((a += p.text || ""), p.finished)) {
                let m = this.conversations[r];
                m && ((m.title = a), this.saveConversations());
              }
            },
            onAbort: () => { },
          }).catch((p) => {
            $n.error(p);
          }),
          { taskId: s }
        );
      }
      async saveConversations() {
        return this.storage.update({ conversations: this.conversations });
      }
      async addChatItem(r) {
        let s = r.conversationId;
        (await this.getConversation(s)).items.push(r), await this.saveConversations();
      }
      createWelcomeItems(r) {
        let s = [
          this.createGuide(r, "\u{1F914} Ask complex questions", "How do I make an HTTP request in Javascript?"),
          this.createGuide(r, "\u{1F44F} Get amazing inspiration", "Come up with 5 brand names and slogans for a Pizza restaurant."),
        ],
          a = this.createReply(r, "Welcome back! What would you like to chat about?");
        return (
          (a.data.suggestions = (0, _i.shuffle)([
            "Write a haiku about crocodiles in outer space in the voice of a pirate.",
            "Write a poem about the color blue.",
            "Write a headline for a newspaper article about the climate crisis.",
            "How to deal with a difficult boss?",
            "How do I make an HTTP request in Javascript?",
            "How to make a good cup of coffee?",
            "Highest mountain in the world",
            "What is GPT-3?",
            'Translate "Today is a good day" into French.',
          ])
            .slice(0, 3)
            .map((p) => ({ text: p }))
            .sort((p, m) => m.text.length - p.text.length)),
          [...s, a]
        );
      }
      createReply(r, s) {
        return { itemId: `msg:${Y.genId()}`, conversationId: r, itemType: "reply", summary: s, data: { type: "text", content: s, questionId: null } };
      }
      createGuide(r, s, a) {
        return { itemId: `guide:${Y.genId()}`, conversationId: r, itemType: "guide", summary: s, synced: !0, data: { title: s, content: a } };
      }
      async removeOutdatedConversations() {
        let r = Date.now();
        for (let p of Object.keys(this.conversations)) {
          let { createdAt: m = 0 } = this.conversations[p];
          r - m > wv && delete this.conversations[p];
        }
        await this.saveConversations();
        let s = !1;
        for (let p of Object.keys(this.tabActiveConversationMap)) (await Y.tryGetTab(p)) || ((s = !0), delete this.tabActiveConversationMap[p]);
        await this.saveTabActiveConversationMap(), s && this.emitActiveConversationCountChange();
        let a = await this.storage.get("tabConversationMap");
        if (a) {
          for (let p of Object.keys(a)) (await Y.tryGetTab(p)) || delete a[p];
          await this.storage.update({ tabConversationMap: a });
        }
      }
      async getConversation(r) {
        let s = this.conversations[r];
        if (s) return s;
        try {
          let { chatItemList: a, conversation: p } = await this.getChatItemList({ conversationId: r });
          return (this.conversations[r] = { id: r, items: a.itemList.map((m) => ({ ...m, synced: !0 })), title: p.title, createdAt: p.createdAt }), this.saveConversations(), this.conversations[r];
        } catch (a) {
          throw ($n.error(a), "CONVERSATION_NOT_FOUND");
        }
      }
      async emitActiveConversationCountChange() {
        let r = await this.getActiveConversations();
        this.events.emit("activeConversationChange", { count: r.length, conversationList: r });
      }
    };
  var sb = A(E(), 1);
  var jC = A(E(), 1),
    po = {
      length: [
        { key: "auto", name: "Auto" },
        { key: "short", name: "Short" },
        { key: "medium", name: "Medium" },
        { key: "long", name: "Long" },
      ],
      format: [
        { key: "text", name: "Auto", quantity: "some" },
        { name: "Email", key: "email", quantity: "an" },
        { key: "message", name: "Message", quantity: "a" },
        { key: "comment", name: "Comment", quantity: "a" },
        { key: "paragraph", name: "Paragraph", quantity: "a" },
        { key: "article", name: "Article", quantity: "an" },
        { key: "blog post", name: "Blog Post", quantity: "a" },
        { key: "ideas", name: "Ideas", quantity: "few" },
        { key: "outline", name: "Outline", quantity: "an" },
        { key: "twitter", name: "Twitter", quantity: "a" },
      ],
      tone: [
        { key: "auto", name: "Auto" },
        { key: "amicable", name: "Amicable" },
        { key: "casual", name: "Casual" },
        { key: "friendly", name: "Friendly" },
        { key: "professional", name: "Professional" },
        { key: "witty", name: "Witty" },
        { key: "funny", name: "Funny" },
        { key: "formal", name: "Formal" },
      ],
      language: [{ key: "auto", name: "Auto" }],
    };
  var Ci = class extends un {
    async init() { }
    async onTabUnload(r) {
      this.findAndCancelTasks((s) => s.tabId === r);
    }
    async compose(r, s, a) {
      let p = this.genTaskId();
      return (
        console.log(s, a),
        this.createGenerationTask({
          language: s.language.key,
          taskData: { taskType: "compose", data: { command: s.command, tone: s.tone.key, format: s.format.key, length: s.length.key } },
          taskInfo: { taskId: p, tabId: r, abortController: new AbortController() },
          onData: ({ text: m, finished: C, error: w }) => {
            a(m, C, w);
          },
          onAbort: () => {
            console.log("generation aborted");
          },
        }).catch((m) => {
          console.error(m);
          let C = `${m}`;
          throw (a(null, !0, C), m);
        }),
        { taskId: p }
      );
    }
    composeWithTemplate(r, s, a) {
      let p = this.genTaskId();
      return (
        this.createGenerationTask({
          language: "auto",
          taskData: { taskType: "compose_with_template", data: { count: 1, ...s } },
          taskInfo: { taskId: p, tabId: r, abortController: new AbortController() },
          onData: ({ text: m, finished: C, error: w }) => {
            a(m, C, w);
          },
          onAbort: () => {
            console.log("generation aborted");
          },
        }).catch((m) => {
          console.error(m);
          let C = `${m}`;
          throw (a(null, !0, C), m);
        }),
        { taskId: p }
      );
    }
    async getComposeOptions() {
      let r = await Ye.getUserInfo({ autoUpdate: !1 }),
        s = ["English"],
        a = r?.languagePreferences || s;
      return { ...po, language: [...po.language, ...a.filter((p) => p.toLowerCase() !== "auto").map((p) => ({ key: p, name: p }))] };
    }
  };
  var cb = A(E(), 1);
  var bi = class extends un {
    async init() { }
    triggerSelectionQuickAction(r, s, a) {
      let p = this.genTaskId();
      return (
        this.createGenerationTask({
          language: "auto",
          taskData: { taskType: "quick_action", data: { actionType: "selection", actionPrompt: s.promptContent, reference: s.selectedText } },
          taskInfo: { taskId: p, tabId: r, abortController: new AbortController() },
          onData: ({ text: m, finished: C, error: w }) => {
            a(m, C, w);
          },
          onAbort: () => {
            console.log("quick action aborted");
          },
        }).catch((m) => {
          console.error(m);
          let C = `${m}`;
          throw (a(null, !0, C), m);
        }),
        { taskId: p }
      );
    }
    async onTabUnload(r) {
      this.findAndCancelTasks((s) => s.tabId === r);
    }
  };
  var Vt = class extends tt {
    storagePrefix = "ai";
    defaultStorageValues = { templateList: [], tabConversationMap: {}, tabActiveConversationMap: {}, conversations: {} };
    context;
    chatProvider;
    composeProvider;
    quickActionProvider;
    onInit() {
      (this.context = { apiHost: fr, storage: this.storage, service: this }),
        (this.chatProvider = new yi(this.context)),
        (this.composeProvider = new Ci(this.context)),
        (this.quickActionProvider = new bi(this.context)),
        this.chatProvider.events.on("activeConversationChange", (r) => {
          this.emit("activeConversationChange", r);
        }),
        this.chatProvider.events.on("activateConversation", (r) => {
          this.emit("activateConversation", r);
        }),
        fo.default.tabs.onRemoved.addListener(async (r) => {
          this.chatProvider.onTabUnload(r), this.composeProvider.onTabUnload(r);
        }),
        fo.default.storage.local.onChanged.addListener((r) => {
          let s = r[this.storage.encodeKey("templateList")];
          s?.newValue && this.emit("templateListChange", { templateList: s.newValue });
        });
    }
    async onContentAppCreated() {
      if (this.lastCaller?.tabId) {
        let { tabId: r } = this.lastCaller;
        this.chatProvider.onTabUnload(r), this.composeProvider.onTabUnload(r), hi.onTabUnload(r);
      }
    }
    async createConversation(r, s) {
      return this.chatProvider.createConversation(this.lastCaller?.tabId, r, s);
    }
    async switchToActiveConversation(r, s) {
      await this.chatProvider.switchToActiveConversation(r, s);
    }
    async deleteConversation(r) {
      return this.chatProvider.deleteConversation(r);
    }
    async retryQuestion(r, s) {
      return this.chatProvider.retryQuestion(r, s);
    }
    async askQuestion(r, s) {
      return this.chatProvider.askQuestion(r, s);
    }
    async createConversationTitle(r) {
      return this.chatProvider.createConversationTitle(r);
    }
    async triggerIntentAction(r, s) {
      return this.chatProvider.triggerIntentAction(r, s);
    }
    async triggerSelectionQuickAction(r, s) {
      return this.quickActionProvider.triggerSelectionQuickAction(this.lastCaller?.tabId, r, s);
    }
    async continueQuickActionInConversation(r) {
      return this.chatProvider.continueQuickActionInConversation(r);
    }
    async cancelTask(r, s = "chat") {
      return s === "quickAction" ? this.quickActionProvider.cancelTask(r) : s === "compose" ? this.composeProvider.cancelTask(r) : this.chatProvider.cancelTask(r);
    }
    async createIntentCandidate(r) {
      return this.chatProvider.createIntentCandidate(r);
    }
    async chatFeedback(r) {
      return this.chatProvider.feedback(r);
    }
    async shareConversation(r) {
      return this.chatProvider.shareConversation(r);
    }
    async compose(r, s) {
      return this.composeProvider.compose(this.lastCaller?.tabId, r, s);
    }
    async composeWithTemplate(r, s) {
      return this.composeProvider.composeWithTemplate(this.lastCaller?.tabId, r, s);
    }
    async getComposeTemplates(r = !0) {
      return this._fetchWithCache("templateList", async () => (await Pe.taskApi.getTemplateList()).templateList, { useCache: r });
    }
    async getComposeOptions() {
      return this.composeProvider.getComposeOptions();
    }
    async fetchConversationList(r) {
      return this.chatProvider.fetchConversationList(r);
    }
    async getActiveConversationList() {
      return await this.chatProvider.getActiveConversations();
    }
    async getActiveConversationCount() {
      return (await this.chatProvider.getActiveConversations()).length;
    }
    async searchConversation(r) {
      return await Pe.taskApi.searchConversation(r);
    }
    async removeConversationHistory(r) {
      return await Pe.taskApi.delConversation(r);
    }
    async getChatItemList(r) {
      return this.chatProvider.getChatItemList(r);
    }
    async markConversationActive(r, s) {
      let a = this.lastCaller?.tabId;
      a && (await this.chatProvider.markConversationActive(a, r, s));
    }
  };
  _t(Vt, "serviceName", "MonicaService");
  var _b = A(E(), 1);
  var Cb = A(E(), 1);
  var go = new et(Vt.serviceName, Vt);
  var Bb = A(E(), 1);
  var Db = A(E(), 1);
  var _c = 15 * 60 * 1e3,
    Kt = class extends tt {
      storagePrefix = "sync";
      defaultStorageValues = { lastSyncTime: 0 };
      nextCheckTimeout = null;
      onInit() {
        this.checkSync();
      }
      async checkSync() {
        let r = await this.storage.get("lastSyncTime");
        (!r || Date.now() - r > _c) && this.sync(),
          this.nextCheckTimeout ||
          (this.nextCheckTimeout = setTimeout(() => {
            this.checkSync();
          }, _c));
      }
      async sync() {
        this.storage.set("lastSyncTime", Date.now()),
          !((ve.currentProject === "c4g" && !(await Ie.get("permissionGranted"))) || !(await Ye.getUserInfo({ useCache: !1 }))) &&
          (Ye.getVipStatus({ useCache: !1 }), Ye.getCustomPrompts("my_prompt"), Ye.getCustomPrompts("selection_action"));
      }
    };
  _t(Kt, "serviceName", "syncService");
  var ho = new et(Kt.serviceName, Kt);
  var Ce = A(ut(), 1),
    He = Me.getLogger("BackgroundApp");
  ve.markIsBackground();
  var mo = class {
    services;
    constructor() {
      ve.currentProject === "monica"
        ? (this.services = { [Wt.serviceName]: Ie, [Vt.serviceName]: go, [Ht.serviceName]: Ye, [Kt.serviceName]: ho })
        : (this.services = { [Wt.serviceName]: Ie, [Vt.serviceName]: go, [Ht.serviceName]: Ye, [Kt.serviceName]: ho, [an.serviceName]: hi, [on.serviceName]: cc }),
        this.connectToDevServer(),
        this.init(),
        this.addDebugTools();
    }
    init() {
      He.log("init background", new Date());
      for (let r of Object.keys(this.services)) He.debug("init service", r), this.services[r]._initService(r);
      Ce.default.runtime.onStartup.addListener(() => {
        He.log("on startup");
      }),
        Ce.default.runtime.onSuspend.addListener(() => {
          He.log("on suspend");
        }),
        Ce.default.runtime.onSuspendCanceled.addListener(() => {
          He.log("on suspend canceled");
        }),
        Ce.default.runtime.onInstalled.addListener((r) => {
          He.log("on install hook executed"),
            r.reason === "install" && (He.log("extension first install"), this.onFirstInstall(), Ie.set("installTime", Date.now())),
            ve.isProd &&
            ve.currentProject === "monica" &&
            Ce.default.tabs.query({}).then((s) => {
              s.forEach((a) => {
                a.id &&
                  (Ce.default.scripting.executeScript({ files: ["content.js"], target: { tabId: a.id } }).catch(() => { }),
                    Ce.default.scripting.insertCSS({ files: ["content.css"], target: { tabId: a.id } }).catch(() => { }));
              });
            }),
            He.log("extension installed or updated");
        }),
        Ce.default.commands.onCommand.addListener((r, s) => {
          s?.id && ze.sendToContent(s.id, "command", { command: r });
        }),
        Ce.default.runtime.onMessage.addListener((r, s) => {
          let { tab: a, url: p } = s;
          if (r.type === "callServiceMethod") {
            let { serviceName: m, methodName: C, finalArgs: w } = r.data,
              P = `${m}.${C}`;
            He.debug(`[RemoteServiceCall] ${P}`, { msgId: r.id, finalArgs: w, senderTab: s?.tab?.id });
            let M = { type: p?.startsWith("http") || p?.startsWith("file") ? "tab" : "popup", tabId: a?.id, url: p };
            return this.services[m]
              ._onCallMethod(M, C, w)
              .then((q) => (He.debug(`- ${P} success`, { msgId: r.id, data: q }), q))
              .catch((q) => {
                throw (He.error(`- ${P} error:`, { msgId: r.id, error: q }), q);
              });
          }
          return He.debug("background on message", r, { senderTab: s?.tab?.id }), Promise.resolve();
        }),
        Ce.default.runtime.setUninstallURL(`https://bit.ly/Sam_Gh`),
        ve.currentProject === "monica" &&
        Ce.default.action.onClicked.addListener((r) => {
          r.id && ze.sendToContent(r.id, "runMonica", {});
        }),
        ve.currentProject === "c4g" &&
        (uc.checkAndRegisterContentScripts(),
          Ce.default.scripting.registerContentScripts([
            { id: "ChatGptIframeChecker", js: ["iframeChecker.js"], matches: ["https://chat.openai.com/chat"], allFrames: !0, runAt: "document_start" },
            { id: "ChatGptShare", js: ["chatGptShare.js"], css: ["chatGptShare.css"], matches: ["https://chat.openai.com/chat/*"], runAt: "document_end" },
          ]));
    }
    addDebugTools() {
      let r = Me.console;
      globalThis.debugTools = {
        showStorage: async () => {
          let s = await Ce.default.storage.local.get();
          r.log(s);
        },
        clearStorage: async () => {
          await Ce.default.storage.local.clear(), r.log("success");
        },
        clearChatGptToken: async () => {
          await this.services.ChatService.clearChatGptToken(), r.log("done");
        },
        enableAllLogs() {
          Me.enableAllLoggers();
        },
        enableBeta: async () => {
          let s = await Ce.default.storage.local.get("user.clientId");
          if (s) {
            let a = `${s["user.clientId"].slice(0, -1)}1`;
            await Ce.default.storage.local.set({ "user.clientId": a, "user.userBatch": 1 });
          }
        },
      };
    }
    onFirstInstall() {
      if (ve.currentProject === "monica") {
        let r = () => {
          Ce.default.tabs.create({ url: `${Y.getWebOrigin()}/login?from=extension_install` });
        };
        Ye.getUserInfo({ useCache: !1 })
          .then((s) => {
            s || r();
          })
          .catch((s) => {
            He.error("init user info when install got error", s), r();
          });
      }
      ve.currentProject === "c4g" &&
        this.services.UserService.setUserBatch(1).finally(() => {
          Ce.default.tabs.create({ url: `https://bit.ly/Sam_Gh` });
        });
    }
    connectToDevServer() {
      if (ve.isProd) return;
      let r = "monica:dev:reload",
        s = ["figma.com", "modao.cc"];
      Ce.default.storage.local.get().then((p) => {
        p?.[r] &&
          (Ce.default.tabs.query({ active: !0, currentWindow: !0 }).then((m) => {
            m.forEach((C) => {
              if (C.id) {
                if (s.some((w) => C.url?.includes(w))) return;
                He.log("reload tab", C.id), Ce.default.tabs.reload(C.id);
              }
            });
          }),
            Ce.default.storage.local.set({ [r]: !1 }));
      });
      let a = new WebSocket("ws://localhost:8085");
      (a.onopen = () => {
        He.log("dev server connected");
      }),
        (a.onmessage = (p) => {
          He.log("dev server message", p.data),
            p.data === "reload" &&
            Ce.default.storage.local.set({ [r]: !0 }).then(() => {
              Ce.default.runtime.reload();
            });
        });
    }
  };
  new mo();
})();