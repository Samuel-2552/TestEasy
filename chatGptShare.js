"use strict";
(() => {
    var ex = Object.create;
    var $o = Object.defineProperty;
    var yh = Object.getOwnPropertyDescriptor;
    var tx = Object.getOwnPropertyNames;
    var nx = Object.getPrototypeOf,
        rx = Object.prototype.hasOwnProperty;
    var ax = (e, t, n) => t in e ? $o(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : e[t] = n;
    var Ut = (e, t) => () => (t || e((t = {
        exports: {}
    }).exports, t), t.exports);
    var ix = (e, t, n, r) => {
        if (t && typeof t == "object" || typeof t == "function")
            for (let i of tx(t)) !rx.call(e, i) && i !== n && $o(e, i, {
                get: () => t[i],
                enumerable: !(r = yh(t, i)) || r.enumerable
            });
        return e
    };
    var g = (e, t, n) => (n = e != null ? ex(nx(e)) : {}, ix(t || !e || !e.__esModule ? $o(n, "default", {
        value: e,
        enumerable: !0
    }) : n, e));
    var It = (e, t, n, r) => {
        for (var i = r > 1 ? void 0 : r ? yh(t, n) : t, s = e.length - 1, c; s >= 0; s--)(c = e[s]) && (i = (r ? c(t, n, i) : c(i)) || i);
        return r && i && $o(t, n, i), i
    };
    var h5 = (e, t, n) => (ax(e, typeof t != "symbol" ? t + "" : t, n), n);
    var A = Ut(() => {
        "use strict";
        globalThis && (globalThis.__aichat_envvars__ = {
            dev: !1,
            prod: !0,
            host: "https://webapp.chatgpt4google.com",
            project: "c4g"
        })
    });
    var Ch = Ut((Ul, jl) => {
        var qk = g(A());
        (function(e, t) {
            typeof Ul == "object" && typeof jl < "u" ? jl.exports = t() : typeof define == "function" && define.amd ? define(t) : (e = typeof globalThis < "u" ? globalThis : e || self).dayjs = t()
        })(Ul, function() {
            "use strict";
            var e = 1e3,
                t = 6e4,
                n = 36e5,
                r = "millisecond",
                i = "second",
                s = "minute",
                c = "hour",
                u = "day",
                f = "week",
                p = "month",
                h = "quarter",
                w = "year",
                v = "date",
                _ = "Invalid Date",
                S = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
                I = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
                R = {
                    name: "en",
                    weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                    months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                    ordinal: function(z) {
                        var G = ["th", "st", "nd", "rd"],
                            j = z % 100;
                        return "[" + z + (G[(j - 20) % 10] || G[j] || G[0]) + "]"
                    }
                },
                b = function(z, G, j) {
                    var ee = String(z);
                    return !ee || ee.length >= G ? z : "" + Array(G + 1 - ee.length).join(j) + z
                },
                C = {
                    s: b,
                    z: function(z) {
                        var G = -z.utcOffset(),
                            j = Math.abs(G),
                            ee = Math.floor(j / 60),
                            q = j % 60;
                        return (G <= 0 ? "+" : "-") + b(ee, 2, "0") + ":" + b(q, 2, "0")
                    },
                    m: function z(G, j) {
                        if (G.date() < j.date()) return -z(j, G);
                        var ee = 12 * (j.year() - G.year()) + (j.month() - G.month()),
                            q = G.clone().add(ee, p),
                            X = j - q < 0,
                            ne = G.clone().add(ee + (X ? -1 : 1), p);
                        return +(-(ee + (j - q) / (X ? q - ne : ne - q)) || 0)
                    },
                    a: function(z) {
                        return z < 0 ? Math.ceil(z) || 0 : Math.floor(z)
                    },
                    p: function(z) {
                        return {
                            M: p,
                            y: w,
                            w: f,
                            d: u,
                            D: v,
                            h: c,
                            m: s,
                            s: i,
                            ms: r,
                            Q: h
                        } [z] || String(z || "").toLowerCase().replace(/s$/, "")
                    },
                    u: function(z) {
                        return z === void 0
                    }
                },
                x = "en",
                Z = {};
            Z[x] = R;
            var T = function(z) {
                    return z instanceof le
                },
                P = function z(G, j, ee) {
                    var q;
                    if (!G) return x;
                    if (typeof G == "string") {
                        var X = G.toLowerCase();
                        Z[X] && (q = X), j && (Z[X] = j, q = X);
                        var ne = G.split("-");
                        if (!q && ne.length > 1) return z(ne[0])
                    } else {
                        var he = G.name;
                        Z[he] = G, q = he
                    }
                    return !ee && q && (x = q), q || !ee && x
                },
                N = function(z, G) {
                    if (T(z)) return z.clone();
                    var j = typeof G == "object" ? G : {};
                    return j.date = z, j.args = arguments, new le(j)
                },
                H = C;
            H.l = P, H.i = T, H.w = function(z, G) {
                return N(z, {
                    locale: G.$L,
                    utc: G.$u,
                    x: G.$x,
                    $offset: G.$offset
                })
            };
            var le = function() {
                    function z(j) {
                        this.$L = P(j.locale, null, !0), this.parse(j)
                    }
                    var G = z.prototype;
                    return G.parse = function(j) {
                        this.$d = function(ee) {
                            var q = ee.date,
                                X = ee.utc;
                            if (q === null) return new Date(NaN);
                            if (H.u(q)) return new Date;
                            if (q instanceof Date) return new Date(q);
                            if (typeof q == "string" && !/Z$/i.test(q)) {
                                var ne = q.match(S);
                                if (ne) {
                                    var he = ne[2] - 1 || 0,
                                        de = (ne[7] || "0").substring(0, 3);
                                    return X ? new Date(Date.UTC(ne[1], he, ne[3] || 1, ne[4] || 0, ne[5] || 0, ne[6] || 0, de)) : new Date(ne[1], he, ne[3] || 1, ne[4] || 0, ne[5] || 0, ne[6] || 0, de)
                                }
                            }
                            return new Date(q)
                        }(j), this.$x = j.x || {}, this.init()
                    }, G.init = function() {
                        var j = this.$d;
                        this.$y = j.getFullYear(), this.$M = j.getMonth(), this.$D = j.getDate(), this.$W = j.getDay(), this.$H = j.getHours(), this.$m = j.getMinutes(), this.$s = j.getSeconds(), this.$ms = j.getMilliseconds()
                    }, G.$utils = function() {
                        return H
                    }, G.isValid = function() {
                        return this.$d.toString() !== _
                    }, G.isSame = function(j, ee) {
                        var q = N(j);
                        return this.startOf(ee) <= q && q <= this.endOf(ee)
                    }, G.isAfter = function(j, ee) {
                        return N(j) < this.startOf(ee)
                    }, G.isBefore = function(j, ee) {
                        return this.endOf(ee) < N(j)
                    }, G.$g = function(j, ee, q) {
                        return H.u(j) ? this[ee] : this.set(q, j)
                    }, G.unix = function() {
                        return Math.floor(this.valueOf() / 1e3)
                    }, G.valueOf = function() {
                        return this.$d.getTime()
                    }, G.startOf = function(j, ee) {
                        var q = this,
                            X = !!H.u(ee) || ee,
                            ne = H.p(j),
                            he = function(gt, Re) {
                                var Vt = H.w(q.$u ? Date.UTC(q.$y, Re, gt) : new Date(q.$y, Re, gt), q);
                                return X ? Vt : Vt.endOf(u)
                            },
                            de = function(gt, Re) {
                                return H.w(q.toDate()[gt].apply(q.toDate("s"), (X ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(Re)), q)
                            },
                            Ce = this.$W,
                            Oe = this.$M,
                            re = this.$D,
                            Je = "set" + (this.$u ? "UTC" : "");
                        switch (ne) {
                            case w:
                                return X ? he(1, 0) : he(31, 11);
                            case p:
                                return X ? he(1, Oe) : he(0, Oe + 1);
                            case f:
                                var ot = this.$locale().weekStart || 0,
                                    st = (Ce < ot ? Ce + 7 : Ce) - ot;
                                return he(X ? re - st : re + (6 - st), Oe);
                            case u:
                            case v:
                                return de(Je + "Hours", 0);
                            case c:
                                return de(Je + "Minutes", 1);
                            case s:
                                return de(Je + "Seconds", 2);
                            case i:
                                return de(Je + "Milliseconds", 3);
                            default:
                                return this.clone()
                        }
                    }, G.endOf = function(j) {
                        return this.startOf(j, !1)
                    }, G.$set = function(j, ee) {
                        var q, X = H.p(j),
                            ne = "set" + (this.$u ? "UTC" : ""),
                            he = (q = {}, q[u] = ne + "Date", q[v] = ne + "Date", q[p] = ne + "Month", q[w] = ne + "FullYear", q[c] = ne + "Hours", q[s] = ne + "Minutes", q[i] = ne + "Seconds", q[r] = ne + "Milliseconds", q)[X],
                            de = X === u ? this.$D + (ee - this.$W) : ee;
                        if (X === p || X === w) {
                            var Ce = this.clone().set(v, 1);
                            Ce.$d[he](de), Ce.init(), this.$d = Ce.set(v, Math.min(this.$D, Ce.daysInMonth())).$d
                        } else he && this.$d[he](de);
                        return this.init(), this
                    }, G.set = function(j, ee) {
                        return this.clone().$set(j, ee)
                    }, G.get = function(j) {
                        return this[H.p(j)]()
                    }, G.add = function(j, ee) {
                        var q, X = this;
                        j = Number(j);
                        var ne = H.p(ee),
                            he = function(Oe) {
                                var re = N(X);
                                return H.w(re.date(re.date() + Math.round(Oe * j)), X)
                            };
                        if (ne === p) return this.set(p, this.$M + j);
                        if (ne === w) return this.set(w, this.$y + j);
                        if (ne === u) return he(1);
                        if (ne === f) return he(7);
                        var de = (q = {}, q[s] = t, q[c] = n, q[i] = e, q)[ne] || 1,
                            Ce = this.$d.getTime() + j * de;
                        return H.w(Ce, this)
                    }, G.subtract = function(j, ee) {
                        return this.add(-1 * j, ee)
                    }, G.format = function(j) {
                        var ee = this,
                            q = this.$locale();
                        if (!this.isValid()) return q.invalidDate || _;
                        var X = j || "YYYY-MM-DDTHH:mm:ssZ",
                            ne = H.z(this),
                            he = this.$H,
                            de = this.$m,
                            Ce = this.$M,
                            Oe = q.weekdays,
                            re = q.months,
                            Je = function(Re, Vt, Ht, xt) {
                                return Re && (Re[Vt] || Re(ee, X)) || Ht[Vt].slice(0, xt)
                            },
                            ot = function(Re) {
                                return H.s(he % 12 || 12, Re, "0")
                            },
                            st = q.meridiem || function(Re, Vt, Ht) {
                                var xt = Re < 12 ? "AM" : "PM";
                                return Ht ? xt.toLowerCase() : xt
                            },
                            gt = {
                                YY: String(this.$y).slice(-2),
                                YYYY: this.$y,
                                M: Ce + 1,
                                MM: H.s(Ce + 1, 2, "0"),
                                MMM: Je(q.monthsShort, Ce, re, 3),
                                MMMM: Je(re, Ce),
                                D: this.$D,
                                DD: H.s(this.$D, 2, "0"),
                                d: String(this.$W),
                                dd: Je(q.weekdaysMin, this.$W, Oe, 2),
                                ddd: Je(q.weekdaysShort, this.$W, Oe, 3),
                                dddd: Oe[this.$W],
                                H: String(he),
                                HH: H.s(he, 2, "0"),
                                h: ot(1),
                                hh: ot(2),
                                a: st(he, de, !0),
                                A: st(he, de, !1),
                                m: String(de),
                                mm: H.s(de, 2, "0"),
                                s: String(this.$s),
                                ss: H.s(this.$s, 2, "0"),
                                SSS: H.s(this.$ms, 3, "0"),
                                Z: ne
                            };
                        return X.replace(I, function(Re, Vt) {
                            return Vt || gt[Re] || ne.replace(":", "")
                        })
                    }, G.utcOffset = function() {
                        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15)
                    }, G.diff = function(j, ee, q) {
                        var X, ne = H.p(ee),
                            he = N(j),
                            de = (he.utcOffset() - this.utcOffset()) * t,
                            Ce = this - he,
                            Oe = H.m(this, he);
                        return Oe = (X = {}, X[w] = Oe / 12, X[p] = Oe, X[h] = Oe / 3, X[f] = (Ce - de) / 6048e5, X[u] = (Ce - de) / 864e5, X[c] = Ce / n, X[s] = Ce / t, X[i] = Ce / e, X)[ne] || Ce, q ? Oe : H.a(Oe)
                    }, G.daysInMonth = function() {
                        return this.endOf(p).$D
                    }, G.$locale = function() {
                        return Z[this.$L]
                    }, G.locale = function(j, ee) {
                        if (!j) return this.$L;
                        var q = this.clone(),
                            X = P(j, ee, !0);
                        return X && (q.$L = X), q
                    }, G.clone = function() {
                        return H.w(this.$d, this)
                    }, G.toDate = function() {
                        return new Date(this.valueOf())
                    }, G.toJSON = function() {
                        return this.isValid() ? this.toISOString() : null
                    }, G.toISOString = function() {
                        return this.$d.toISOString()
                    }, G.toString = function() {
                        return this.$d.toUTCString()
                    }, z
                }(),
                te = le.prototype;
            return N.prototype = te, [
                ["$ms", r],
                ["$s", i],
                ["$m", s],
                ["$H", c],
                ["$W", u],
                ["$M", p],
                ["$y", w],
                ["$D", v]
            ].forEach(function(z) {
                te[z[1]] = function(G) {
                    return this.$g(G, z[0], z[1])
                }
            }), N.extend = function(z, G) {
                return z.$i || (z(G, le, N), z.$i = !0), N
            }, N.locale = P, N.isDayjs = T, N.unix = function(z) {
                return N(1e3 * z)
            }, N.en = Z[x], N.Ls = Z, N.p = {}, N
        })
    });
    var xh = Ut((Gl, zl) => {
        var Wk = g(A());
        (function(e, t) {
            typeof Gl == "object" && typeof zl < "u" ? zl.exports = t() : typeof define == "function" && define.amd ? define(t) : (e = typeof globalThis < "u" ? globalThis : e || self).dayjs_plugin_relativeTime = t()
        })(Gl, function() {
            "use strict";
            return function(e, t, n) {
                e = e || {};
                var r = t.prototype,
                    i = {
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

                function s(u, f, p, h) {
                    return r.fromToBase(u, f, p, h)
                }
                n.en.relativeTime = i, r.fromToBase = function(u, f, p, h, w) {
                    for (var v, _, S, I = p.$locale().relativeTime || i, R = e.thresholds || [{
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
                        }], b = R.length, C = 0; C < b; C += 1) {
                        var x = R[C];
                        x.d && (v = h ? n(u).diff(p, x.d, !0) : p.diff(u, x.d, !0));
                        var Z = (e.rounding || Math.round)(Math.abs(v));
                        if (S = v > 0, Z <= x.r || !x.r) {
                            Z <= 1 && C > 0 && (x = R[C - 1]);
                            var T = I[x.l];
                            w && (Z = w("" + Z)), _ = typeof T == "string" ? T.replace("%d", Z) : T(Z, f, x.l, S);
                            break
                        }
                    }
                    if (f) return _;
                    var P = S ? I.future : I.past;
                    return typeof P == "function" ? P(_) : P.replace("%s", _)
                }, r.to = function(u, f) {
                    return s(u, f, this, !0)
                }, r.from = function(u, f) {
                    return s(u, f, this)
                };
                var c = function(u) {
                    return u.$u ? n.utc() : n()
                };
                r.toNow = function(u) {
                    return this.to(c(this), u)
                }, r.fromNow = function(u) {
                    return this.from(c(this), u)
                }
            }
        })
    });
    var zr = Ut((Kl, Mh) => {
        var cO = g(A());
        (function(e, t) {
            if (typeof define == "function" && define.amd) define("webextension-polyfill", ["module"], t);
            else if (typeof Kl < "u") t(Mh);
            else {
                var n = {
                    exports: {}
                };
                t(n), e.browser = n.exports
            }
        })(typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : Kl, function(e) {
            "use strict";
            if (!globalThis.chrome?.runtime?.id) throw new Error("This script should only be loaded in a browser extension.");
            if (typeof globalThis.browser > "u" || Object.getPrototypeOf(globalThis.browser) !== Object.prototype) {
                let t = "The message port closed before a response was received.",
                    n = r => {
                        let i = {
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
                        if (Object.keys(i).length === 0) throw new Error("api-metadata.json has not been included in browser-polyfill");
                        class s extends WeakMap {
                            constructor(T, P = void 0) {
                                super(P), this.createItem = T
                            }
                            get(T) {
                                return this.has(T) || this.set(T, this.createItem(T)), super.get(T)
                            }
                        }
                        let c = Z => Z && typeof Z == "object" && typeof Z.then == "function",
                            u = (Z, T) => (...P) => {
                                r.runtime.lastError ? Z.reject(new Error(r.runtime.lastError.message)) : T.singleCallbackArg || P.length <= 1 && T.singleCallbackArg !== !1 ? Z.resolve(P[0]) : Z.resolve(P)
                            },
                            f = Z => Z == 1 ? "argument" : "arguments",
                            p = (Z, T) => function(N, ...H) {
                                if (H.length < T.minArgs) throw new Error(`Expected at least ${T.minArgs} ${f(T.minArgs)} for ${Z}(), got ${H.length}`);
                                if (H.length > T.maxArgs) throw new Error(`Expected at most ${T.maxArgs} ${f(T.maxArgs)} for ${Z}(), got ${H.length}`);
                                return new Promise((le, te) => {
                                    if (T.fallbackToNoCallback) try {
                                        N[Z](...H, u({
                                            resolve: le,
                                            reject: te
                                        }, T))
                                    } catch (z) {
                                        console.warn(`${Z} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `, z), N[Z](...H), T.fallbackToNoCallback = !1, T.noCallback = !0, le()
                                    } else T.noCallback ? (N[Z](...H), le()) : N[Z](...H, u({
                                        resolve: le,
                                        reject: te
                                    }, T))
                                })
                            },
                            h = (Z, T, P) => new Proxy(T, {
                                apply(N, H, le) {
                                    return P.call(H, Z, ...le)
                                }
                            }),
                            w = Function.call.bind(Object.prototype.hasOwnProperty),
                            v = (Z, T = {}, P = {}) => {
                                let N = Object.create(null),
                                    H = {
                                        has(te, z) {
                                            return z in Z || z in N
                                        },
                                        get(te, z, G) {
                                            if (z in N) return N[z];
                                            if (!(z in Z)) return;
                                            let j = Z[z];
                                            if (typeof j == "function")
                                                if (typeof T[z] == "function") j = h(Z, Z[z], T[z]);
                                                else if (w(P, z)) {
                                                let ee = p(z, P[z]);
                                                j = h(Z, Z[z], ee)
                                            } else j = j.bind(Z);
                                            else if (typeof j == "object" && j !== null && (w(T, z) || w(P, z))) j = v(j, T[z], P[z]);
                                            else if (w(P, "*")) j = v(j, T[z], P["*"]);
                                            else return Object.defineProperty(N, z, {
                                                configurable: !0,
                                                enumerable: !0,
                                                get() {
                                                    return Z[z]
                                                },
                                                set(ee) {
                                                    Z[z] = ee
                                                }
                                            }), j;
                                            return N[z] = j, j
                                        },
                                        set(te, z, G, j) {
                                            return z in N ? N[z] = G : Z[z] = G, !0
                                        },
                                        defineProperty(te, z, G) {
                                            return Reflect.defineProperty(N, z, G)
                                        },
                                        deleteProperty(te, z) {
                                            return Reflect.deleteProperty(N, z)
                                        }
                                    },
                                    le = Object.create(Z);
                                return new Proxy(le, H)
                            },
                            _ = Z => ({
                                addListener(T, P, ...N) {
                                    T.addListener(Z.get(P), ...N)
                                },
                                hasListener(T, P) {
                                    return T.hasListener(Z.get(P))
                                },
                                removeListener(T, P) {
                                    T.removeListener(Z.get(P))
                                }
                            }),
                            S = new s(Z => typeof Z != "function" ? Z : function(P) {
                                let N = v(P, {}, {
                                    getContent: {
                                        minArgs: 0,
                                        maxArgs: 0
                                    }
                                });
                                Z(N)
                            }),
                            I = new s(Z => typeof Z != "function" ? Z : function(P, N, H) {
                                let le = !1,
                                    te, z = new Promise(q => {
                                        te = function(X) {
                                            le = !0, q(X)
                                        }
                                    }),
                                    G;
                                try {
                                    G = Z(P, N, te)
                                } catch (q) {
                                    G = Promise.reject(q)
                                }
                                let j = G !== !0 && c(G);
                                if (G !== !0 && !j && !le) return !1;
                                let ee = q => {
                                    q.then(X => {
                                        H(X)
                                    }, X => {
                                        let ne;
                                        X && (X instanceof Error || typeof X.message == "string") ? ne = X.message : ne = "An unexpected error occurred", H({
                                            __mozWebExtensionPolyfillReject__: !0,
                                            message: ne
                                        })
                                    }).catch(X => {
                                        console.error("Failed to send onMessage rejected reply", X)
                                    })
                                };
                                return ee(j ? G : z), !0
                            }),
                            R = ({
                                reject: Z,
                                resolve: T
                            }, P) => {
                                r.runtime.lastError ? r.runtime.lastError.message === t ? T() : Z(new Error(r.runtime.lastError.message)) : P && P.__mozWebExtensionPolyfillReject__ ? Z(new Error(P.message)) : T(P)
                            },
                            b = (Z, T, P, ...N) => {
                                if (N.length < T.minArgs) throw new Error(`Expected at least ${T.minArgs} ${f(T.minArgs)} for ${Z}(), got ${N.length}`);
                                if (N.length > T.maxArgs) throw new Error(`Expected at most ${T.maxArgs} ${f(T.maxArgs)} for ${Z}(), got ${N.length}`);
                                return new Promise((H, le) => {
                                    let te = R.bind(null, {
                                        resolve: H,
                                        reject: le
                                    });
                                    N.push(te), P.sendMessage(...N)
                                })
                            },
                            C = {
                                devtools: {
                                    network: {
                                        onRequestFinished: _(S)
                                    }
                                },
                                runtime: {
                                    onMessage: _(I),
                                    onMessageExternal: _(I),
                                    sendMessage: b.bind(null, "sendMessage", {
                                        minArgs: 1,
                                        maxArgs: 3
                                    })
                                },
                                tabs: {
                                    sendMessage: b.bind(null, "sendMessage", {
                                        minArgs: 2,
                                        maxArgs: 3
                                    })
                                }
                            },
                            x = {
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
                        return i.privacy = {
                            network: {
                                "*": x
                            },
                            services: {
                                "*": x
                            },
                            websites: {
                                "*": x
                            }
                        }, v(r, C, i)
                    };
                e.exports = n(chrome)
            } else e.exports = globalThis.browser
        })
    });
    var Dh = Ut(_e => {
        "use strict";
        var jO = g(A());
        var Da = Symbol.for("react.element"),
            fx = Symbol.for("react.portal"),
            dx = Symbol.for("react.fragment"),
            hx = Symbol.for("react.strict_mode"),
            px = Symbol.for("react.profiler"),
            mx = Symbol.for("react.provider"),
            vx = Symbol.for("react.context"),
            gx = Symbol.for("react.forward_ref"),
            yx = Symbol.for("react.suspense"),
            _x = Symbol.for("react.memo"),
            wx = Symbol.for("react.lazy"),
            Th = Symbol.iterator;

        function Ex(e) {
            return e === null || typeof e != "object" ? null : (e = Th && e[Th] || e["@@iterator"], typeof e == "function" ? e : null)
        }
        var Oh = {
                isMounted: function() {
                    return !1
                },
                enqueueForceUpdate: function() {},
                enqueueReplaceState: function() {},
                enqueueSetState: function() {}
            },
            Lh = Object.assign,
            Rh = {};

        function p5(e, t, n) {
            this.props = e, this.context = t, this.refs = Rh, this.updater = n || Oh
        }
        p5.prototype.isReactComponent = {};
        p5.prototype.setState = function(e, t) {
            if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
            this.updater.enqueueSetState(this, e, t, "setState")
        };
        p5.prototype.forceUpdate = function(e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate")
        };

        function Ph() {}
        Ph.prototype = p5.prototype;

        function ac(e, t, n) {
            this.props = e, this.context = t, this.refs = Rh, this.updater = n || Oh
        }
        var ic = ac.prototype = new Ph;
        ic.constructor = ac;
        Lh(ic, p5.prototype);
        ic.isPureReactComponent = !0;
        var Ih = Array.isArray,
            Nh = Object.prototype.hasOwnProperty,
            oc = {
                current: null
            },
            Vh = {
                key: !0,
                ref: !0,
                __self: !0,
                __source: !0
            };

        function Hh(e, t, n) {
            var r, i = {},
                s = null,
                c = null;
            if (t != null)
                for (r in t.ref !== void 0 && (c = t.ref), t.key !== void 0 && (s = "" + t.key), t) Nh.call(t, r) && !Vh.hasOwnProperty(r) && (i[r] = t[r]);
            var u = arguments.length - 2;
            if (u === 1) i.children = n;
            else if (1 < u) {
                for (var f = Array(u), p = 0; p < u; p++) f[p] = arguments[p + 2];
                i.children = f
            }
            if (e && e.defaultProps)
                for (r in u = e.defaultProps, u) i[r] === void 0 && (i[r] = u[r]);
            return {
                $$typeof: Da,
                type: e,
                key: s,
                ref: c,
                props: i,
                _owner: oc.current
            }
        }

        function Ax(e, t) {
            return {
                $$typeof: Da,
                type: e.type,
                key: t,
                ref: e.ref,
                props: e.props,
                _owner: e._owner
            }
        }

        function sc(e) {
            return typeof e == "object" && e !== null && e.$$typeof === Da
        }

        function bx(e) {
            var t = {
                "=": "=0",
                ":": "=2"
            };
            return "$" + e.replace(/[=:]/g, function(n) {
                return t[n]
            })
        }
        var kh = /\/+/g;

        function rc(e, t) {
            return typeof e == "object" && e !== null && e.key != null ? bx("" + e.key) : t.toString(36)
        }

        function Qo(e, t, n, r, i) {
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
                        case Da:
                        case fx:
                            c = !0
                    }
            }
            if (c) return c = e, i = i(c), e = r === "" ? "." + rc(c, 0) : r, Ih(i) ? (n = "", e != null && (n = e.replace(kh, "$&/") + "/"), Qo(i, t, n, "", function(p) {
                return p
            })) : i != null && (sc(i) && (i = Ax(i, n + (!i.key || c && c.key === i.key ? "" : ("" + i.key).replace(kh, "$&/") + "/") + e)), t.push(i)), 1;
            if (c = 0, r = r === "" ? "." : r + ":", Ih(e))
                for (var u = 0; u < e.length; u++) {
                    s = e[u];
                    var f = r + rc(s, u);
                    c += Qo(s, t, n, f, i)
                } else if (f = Ex(e), typeof f == "function")
                    for (e = f.call(e), u = 0; !(s = e.next()).done;) s = s.value, f = r + rc(s, u++), c += Qo(s, t, n, f, i);
                else if (s === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
            return c
        }

        function Ko(e, t, n) {
            if (e == null) return e;
            var r = [],
                i = 0;
            return Qo(e, r, "", "", function(s) {
                return t.call(n, s, i++)
            }), r
        }

        function Cx(e) {
            if (e._status === -1) {
                var t = e._result;
                t = t(), t.then(function(n) {
                    (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n)
                }, function(n) {
                    (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n)
                }), e._status === -1 && (e._status = 0, e._result = t)
            }
            if (e._status === 1) return e._result.default;
            throw e._result
        }
        var jt = {
                current: null
            },
            Xo = {
                transition: null
            },
            xx = {
                ReactCurrentDispatcher: jt,
                ReactCurrentBatchConfig: Xo,
                ReactCurrentOwner: oc
            };
        _e.Children = {
            map: Ko,
            forEach: function(e, t, n) {
                Ko(e, function() {
                    t.apply(this, arguments)
                }, n)
            },
            count: function(e) {
                var t = 0;
                return Ko(e, function() {
                    t++
                }), t
            },
            toArray: function(e) {
                return Ko(e, function(t) {
                    return t
                }) || []
            },
            only: function(e) {
                if (!sc(e)) throw Error("React.Children.only expected to receive a single React element child.");
                return e
            }
        };
        _e.Component = p5;
        _e.Fragment = dx;
        _e.Profiler = px;
        _e.PureComponent = ac;
        _e.StrictMode = hx;
        _e.Suspense = yx;
        _e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = xx;
        _e.cloneElement = function(e, t, n) {
            if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
            var r = Lh({}, e.props),
                i = e.key,
                s = e.ref,
                c = e._owner;
            if (t != null) {
                if (t.ref !== void 0 && (s = t.ref, c = oc.current), t.key !== void 0 && (i = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
                for (f in t) Nh.call(t, f) && !Vh.hasOwnProperty(f) && (r[f] = t[f] === void 0 && u !== void 0 ? u[f] : t[f])
            }
            var f = arguments.length - 2;
            if (f === 1) r.children = n;
            else if (1 < f) {
                u = Array(f);
                for (var p = 0; p < f; p++) u[p] = arguments[p + 2];
                r.children = u
            }
            return {
                $$typeof: Da,
                type: e.type,
                key: i,
                ref: s,
                props: r,
                _owner: c
            }
        };
        _e.createContext = function(e) {
            return e = {
                $$typeof: vx,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null
            }, e.Provider = {
                $$typeof: mx,
                _context: e
            }, e.Consumer = e
        };
        _e.createElement = Hh;
        _e.createFactory = function(e) {
            var t = Hh.bind(null, e);
            return t.type = e, t
        };
        _e.createRef = function() {
            return {
                current: null
            }
        };
        _e.forwardRef = function(e) {
            return {
                $$typeof: gx,
                render: e
            }
        };
        _e.isValidElement = sc;
        _e.lazy = function(e) {
            return {
                $$typeof: wx,
                _payload: {
                    _status: -1,
                    _result: e
                },
                _init: Cx
            }
        };
        _e.memo = function(e, t) {
            return {
                $$typeof: _x,
                type: e,
                compare: t === void 0 ? null : t
            }
        };
        _e.startTransition = function(e) {
            var t = Xo.transition;
            Xo.transition = {};
            try {
                e()
            } finally {
                Xo.transition = t
            }
        };
        _e.unstable_act = function() {
            throw Error("act(...) is not supported in production builds of React.")
        };
        _e.useCallback = function(e, t) {
            return jt.current.useCallback(e, t)
        };
        _e.useContext = function(e) {
            return jt.current.useContext(e)
        };
        _e.useDebugValue = function() {};
        _e.useDeferredValue = function(e) {
            return jt.current.useDeferredValue(e)
        };
        _e.useEffect = function(e, t) {
            return jt.current.useEffect(e, t)
        };
        _e.useId = function() {
            return jt.current.useId()
        };
        _e.useImperativeHandle = function(e, t, n) {
            return jt.current.useImperativeHandle(e, t, n)
        };
        _e.useInsertionEffect = function(e, t) {
            return jt.current.useInsertionEffect(e, t)
        };
        _e.useLayoutEffect = function(e, t) {
            return jt.current.useLayoutEffect(e, t)
        };
        _e.useMemo = function(e, t) {
            return jt.current.useMemo(e, t)
        };
        _e.useReducer = function(e, t, n) {
            return jt.current.useReducer(e, t, n)
        };
        _e.useRef = function(e) {
            return jt.current.useRef(e)
        };
        _e.useState = function(e) {
            return jt.current.useState(e)
        };
        _e.useSyncExternalStore = function(e, t, n) {
            return jt.current.useSyncExternalStore(e, t, n)
        };
        _e.useTransition = function() {
            return jt.current.useTransition()
        };
        _e.version = "18.2.0"
    });
    var Ee = Ut((GO, Fh) => {
        "use strict";
        var zO = g(A());
        Fh.exports = Dh()
    });
    var fp = Ut(Ve => {
        "use strict";
        var rR = g(A());

        function yc(e, t) {
            var n = e.length;
            e.push(t);
            e: for (; 0 < n;) {
                var r = n - 1 >>> 1,
                    i = e[r];
                if (0 < o2(i, t)) e[r] = t, e[n] = i, n = r;
                else break e
            }
        }

        function Qn(e) {
            return e.length === 0 ? null : e[0]
        }

        function l2(e) {
            if (e.length === 0) return null;
            var t = e[0],
                n = e.pop();
            if (n !== t) {
                e[0] = n;
                e: for (var r = 0, i = e.length, s = i >>> 1; r < s;) {
                    var c = 2 * (r + 1) - 1,
                        u = e[c],
                        f = c + 1,
                        p = e[f];
                    if (0 > o2(u, n)) f < i && 0 > o2(p, u) ? (e[r] = p, e[f] = n, r = f) : (e[r] = u, e[c] = n, r = c);
                    else if (f < i && 0 > o2(p, n)) e[r] = p, e[f] = n, r = f;
                    else break e
                }
            }
            return t
        }

        function o2(e, t) {
            var n = e.sortIndex - t.sortIndex;
            return n !== 0 ? n : e.id - t.id
        }
        typeof performance == "object" && typeof performance.now == "function" ? (np = performance, Ve.unstable_now = function() {
            return np.now()
        }) : (mc = Date, rp = mc.now(), Ve.unstable_now = function() {
            return mc.now() - rp
        });
        var np, mc, rp, Er = [],
            x1 = [],
            iS = 1,
            On = null,
            kt = 3,
            c2 = !1,
            A0 = !1,
            ja = !1,
            op = typeof setTimeout == "function" ? setTimeout : null,
            sp = typeof clearTimeout == "function" ? clearTimeout : null,
            ap = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

        function _c(e) {
            for (var t = Qn(x1); t !== null;) {
                if (t.callback === null) l2(x1);
                else if (t.startTime <= e) l2(x1), t.sortIndex = t.expirationTime, yc(Er, t);
                else break;
                t = Qn(x1)
            }
        }

        function wc(e) {
            if (ja = !1, _c(e), !A0)
                if (Qn(Er) !== null) A0 = !0, Ac(Ec);
                else {
                    var t = Qn(x1);
                    t !== null && bc(wc, t.startTime - e)
                }
        }

        function Ec(e, t) {
            A0 = !1, ja && (ja = !1, sp(Ga), Ga = -1), c2 = !0;
            var n = kt;
            try {
                for (_c(t), On = Qn(Er); On !== null && (!(On.expirationTime > t) || e && !up());) {
                    var r = On.callback;
                    if (typeof r == "function") {
                        On.callback = null, kt = On.priorityLevel;
                        var i = r(On.expirationTime <= t);
                        t = Ve.unstable_now(), typeof i == "function" ? On.callback = i : On === Qn(Er) && l2(Er), _c(t)
                    } else l2(Er);
                    On = Qn(Er)
                }
                if (On !== null) var s = !0;
                else {
                    var c = Qn(x1);
                    c !== null && bc(wc, c.startTime - t), s = !1
                }
                return s
            } finally {
                On = null, kt = n, c2 = !1
            }
        }
        var u2 = !1,
            s2 = null,
            Ga = -1,
            lp = 5,
            cp = -1;

        function up() {
            return !(Ve.unstable_now() - cp < lp)
        }

        function vc() {
            if (s2 !== null) {
                var e = Ve.unstable_now();
                cp = e;
                var t = !0;
                try {
                    t = s2(!0, e)
                } finally {
                    t ? Ua() : (u2 = !1, s2 = null)
                }
            } else u2 = !1
        }
        var Ua;
        typeof ap == "function" ? Ua = function() {
            ap(vc)
        } : typeof MessageChannel < "u" ? (gc = new MessageChannel, ip = gc.port2, gc.port1.onmessage = vc, Ua = function() {
            ip.postMessage(null)
        }) : Ua = function() {
            op(vc, 0)
        };
        var gc, ip;

        function Ac(e) {
            s2 = e, u2 || (u2 = !0, Ua())
        }

        function bc(e, t) {
            Ga = op(function() {
                e(Ve.unstable_now())
            }, t)
        }
        Ve.unstable_IdlePriority = 5;
        Ve.unstable_ImmediatePriority = 1;
        Ve.unstable_LowPriority = 4;
        Ve.unstable_NormalPriority = 3;
        Ve.unstable_Profiling = null;
        Ve.unstable_UserBlockingPriority = 2;
        Ve.unstable_cancelCallback = function(e) {
            e.callback = null
        };
        Ve.unstable_continueExecution = function() {
            A0 || c2 || (A0 = !0, Ac(Ec))
        };
        Ve.unstable_forceFrameRate = function(e) {
            0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : lp = 0 < e ? Math.floor(1e3 / e) : 5
        };
        Ve.unstable_getCurrentPriorityLevel = function() {
            return kt
        };
        Ve.unstable_getFirstCallbackNode = function() {
            return Qn(Er)
        };
        Ve.unstable_next = function(e) {
            switch (kt) {
                case 1:
                case 2:
                case 3:
                    var t = 3;
                    break;
                default:
                    t = kt
            }
            var n = kt;
            kt = t;
            try {
                return e()
            } finally {
                kt = n
            }
        };
        Ve.unstable_pauseExecution = function() {};
        Ve.unstable_requestPaint = function() {};
        Ve.unstable_runWithPriority = function(e, t) {
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
            var n = kt;
            kt = e;
            try {
                return t()
            } finally {
                kt = n
            }
        };
        Ve.unstable_scheduleCallback = function(e, t, n) {
            var r = Ve.unstable_now();
            switch (typeof n == "object" && n !== null ? (n = n.delay, n = typeof n == "number" && 0 < n ? r + n : r) : n = r, e) {
                case 1:
                    var i = -1;
                    break;
                case 2:
                    i = 250;
                    break;
                case 5:
                    i = 1073741823;
                    break;
                case 4:
                    i = 1e4;
                    break;
                default:
                    i = 5e3
            }
            return i = n + i, e = {
                id: iS++,
                callback: t,
                priorityLevel: e,
                startTime: n,
                expirationTime: i,
                sortIndex: -1
            }, n > r ? (e.sortIndex = n, yc(x1, e), Qn(Er) === null && e === Qn(x1) && (ja ? (sp(Ga), Ga = -1) : ja = !0, bc(wc, n - r))) : (e.sortIndex = i, yc(Er, e), A0 || c2 || (A0 = !0, Ac(Ec))), e
        };
        Ve.unstable_shouldYield = up;
        Ve.unstable_wrapCallback = function(e) {
            var t = kt;
            return function() {
                var n = kt;
                kt = t;
                try {
                    return e.apply(this, arguments)
                } finally {
                    kt = n
                }
            }
        }
    });
    var hp = Ut((aR, dp) => {
        "use strict";
        var iR = g(A());
        dp.exports = fp()
    });
    var _m = Ut(yn => {
        "use strict";
        var sR = g(A());
        var w6 = Ee(),
            vn = hp();

        function $(e) {
            for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
            return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
        }
        var E6 = new Set,
            di = {};

        function P0(e, t) {
            N5(e, t), N5(e + "Capture", t)
        }

        function N5(e, t) {
            for (di[e] = t, e = 0; e < t.length; e++) E6.add(t[e])
        }
        var Xr = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
            $c = Object.prototype.hasOwnProperty,
            oS = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
            pp = {},
            mp = {};

        function sS(e) {
            return $c.call(mp, e) ? !0 : $c.call(pp, e) ? !1 : oS.test(e) ? mp[e] = !0 : (pp[e] = !0, !1)
        }

        function lS(e, t, n, r) {
            if (n !== null && n.type === 0) return !1;
            switch (typeof t) {
                case "function":
                case "symbol":
                    return !0;
                case "boolean":
                    return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
                default:
                    return !1
            }
        }

        function cS(e, t, n, r) {
            if (t === null || typeof t > "u" || lS(e, t, n, r)) return !0;
            if (r) return !1;
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

        function qt(e, t, n, r, i, s, c) {
            this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = c
        }
        var Ct = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
            Ct[e] = new qt(e, 0, !1, e, null, !1, !1)
        });
        [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"]
        ].forEach(function(e) {
            var t = e[0];
            Ct[t] = new qt(t, 1, !1, e[1], null, !1, !1)
        });
        ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
            Ct[e] = new qt(e, 2, !1, e.toLowerCase(), null, !1, !1)
        });
        ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
            Ct[e] = new qt(e, 2, !1, e, null, !1, !1)
        });
        "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
            Ct[e] = new qt(e, 3, !1, e.toLowerCase(), null, !1, !1)
        });
        ["checked", "multiple", "muted", "selected"].forEach(function(e) {
            Ct[e] = new qt(e, 3, !0, e, null, !1, !1)
        });
        ["capture", "download"].forEach(function(e) {
            Ct[e] = new qt(e, 4, !1, e, null, !1, !1)
        });
        ["cols", "rows", "size", "span"].forEach(function(e) {
            Ct[e] = new qt(e, 6, !1, e, null, !1, !1)
        });
        ["rowSpan", "start"].forEach(function(e) {
            Ct[e] = new qt(e, 5, !1, e.toLowerCase(), null, !1, !1)
        });
        var Hu = /[\-:]([a-z])/g;

        function Du(e) {
            return e[1].toUpperCase()
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
            var t = e.replace(Hu, Du);
            Ct[t] = new qt(t, 1, !1, e, null, !1, !1)
        });
        "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
            var t = e.replace(Hu, Du);
            Ct[t] = new qt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
        });
        ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
            var t = e.replace(Hu, Du);
            Ct[t] = new qt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
        });
        ["tabIndex", "crossOrigin"].forEach(function(e) {
            Ct[e] = new qt(e, 1, !1, e.toLowerCase(), null, !1, !1)
        });
        Ct.xlinkHref = new qt("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
        ["src", "href", "action", "formAction"].forEach(function(e) {
            Ct[e] = new qt(e, 1, !1, e.toLowerCase(), null, !0, !0)
        });

        function Fu(e, t, n, r) {
            var i = Ct.hasOwnProperty(t) ? Ct[t] : null;
            (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (cS(t, n, i, r) && (n = null), r || i === null ? sS(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
        }
        var t1 = w6.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
            f2 = Symbol.for("react.element"),
            y5 = Symbol.for("react.portal"),
            _5 = Symbol.for("react.fragment"),
            Bu = Symbol.for("react.strict_mode"),
            qc = Symbol.for("react.profiler"),
            A6 = Symbol.for("react.provider"),
            b6 = Symbol.for("react.context"),
            Uu = Symbol.for("react.forward_ref"),
            Wc = Symbol.for("react.suspense"),
            Kc = Symbol.for("react.suspense_list"),
            ju = Symbol.for("react.memo"),
            M1 = Symbol.for("react.lazy");
        Symbol.for("react.scope");
        Symbol.for("react.debug_trace_mode");
        var C6 = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden");
        Symbol.for("react.cache");
        Symbol.for("react.tracing_marker");
        var vp = Symbol.iterator;

        function za(e) {
            return e === null || typeof e != "object" ? null : (e = vp && e[vp] || e["@@iterator"], typeof e == "function" ? e : null)
        }
        var Ke = Object.assign,
            Cc;

        function Ja(e) {
            if (Cc === void 0) try {
                throw Error()
            } catch (n) {
                var t = n.stack.trim().match(/\n( *(at )?)/);
                Cc = t && t[1] || ""
            }
            return `
` + Cc + e
        }
        var xc = !1;

        function Sc(e, t) {
            if (!e || xc) return "";
            xc = !0;
            var n = Error.prepareStackTrace;
            Error.prepareStackTrace = void 0;
            try {
                if (t)
                    if (t = function() {
                            throw Error()
                        }, Object.defineProperty(t.prototype, "props", {
                            set: function() {
                                throw Error()
                            }
                        }), typeof Reflect == "object" && Reflect.construct) {
                        try {
                            Reflect.construct(t, [])
                        } catch (p) {
                            var r = p
                        }
                        Reflect.construct(e, [], t)
                    } else {
                        try {
                            t.call()
                        } catch (p) {
                            r = p
                        }
                        e.call(t.prototype)
                    }
                else {
                    try {
                        throw Error()
                    } catch (p) {
                        r = p
                    }
                    e()
                }
            } catch (p) {
                if (p && r && typeof p.stack == "string") {
                    for (var i = p.stack.split(`
`), s = r.stack.split(`
`), c = i.length - 1, u = s.length - 1; 1 <= c && 0 <= u && i[c] !== s[u];) u--;
                    for (; 1 <= c && 0 <= u; c--, u--)
                        if (i[c] !== s[u]) {
                            if (c !== 1 || u !== 1)
                                do
                                    if (c--, u--, 0 > u || i[c] !== s[u]) {
                                        var f = `
` + i[c].replace(" at new ", " at ");
                                        return e.displayName && f.includes("<anonymous>") && (f = f.replace("<anonymous>", e.displayName)), f
                                    } while (1 <= c && 0 <= u);
                            break
                        }
                }
            } finally {
                xc = !1, Error.prepareStackTrace = n
            }
            return (e = e ? e.displayName || e.name : "") ? Ja(e) : ""
        }

        function uS(e) {
            switch (e.tag) {
                case 5:
                    return Ja(e.type);
                case 16:
                    return Ja("Lazy");
                case 13:
                    return Ja("Suspense");
                case 19:
                    return Ja("SuspenseList");
                case 0:
                case 2:
                case 15:
                    return e = Sc(e.type, !1), e;
                case 11:
                    return e = Sc(e.type.render, !1), e;
                case 1:
                    return e = Sc(e.type, !0), e;
                default:
                    return ""
            }
        }

        function Qc(e) {
            if (e == null) return null;
            if (typeof e == "function") return e.displayName || e.name || null;
            if (typeof e == "string") return e;
            switch (e) {
                case _5:
                    return "Fragment";
                case y5:
                    return "Portal";
                case qc:
                    return "Profiler";
                case Bu:
                    return "StrictMode";
                case Wc:
                    return "Suspense";
                case Kc:
                    return "SuspenseList"
            }
            if (typeof e == "object") switch (e.$$typeof) {
                case b6:
                    return (e.displayName || "Context") + ".Consumer";
                case A6:
                    return (e._context.displayName || "Context") + ".Provider";
                case Uu:
                    var t = e.render;
                    return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
                case ju:
                    return t = e.displayName || null, t !== null ? t : Qc(e.type) || "Memo";
                case M1:
                    t = e._payload, e = e._init;
                    try {
                        return Qc(e(t))
                    } catch {}
            }
            return null
        }

        function fS(e) {
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
                    return Qc(t);
                case 8:
                    return t === Bu ? "StrictMode" : "Mode";
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

        function B1(e) {
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

        function x6(e) {
            var t = e.type;
            return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
        }

        function dS(e) {
            var t = x6(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
            if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
                var i = n.get,
                    s = n.set;
                return Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function() {
                        return i.call(this)
                    },
                    set: function(c) {
                        r = "" + c, s.call(this, c)
                    }
                }), Object.defineProperty(e, t, {
                    enumerable: n.enumerable
                }), {
                    getValue: function() {
                        return r
                    },
                    setValue: function(c) {
                        r = "" + c
                    },
                    stopTracking: function() {
                        e._valueTracker = null, delete e[t]
                    }
                }
            }
        }

        function d2(e) {
            e._valueTracker || (e._valueTracker = dS(e))
        }

        function S6(e) {
            if (!e) return !1;
            var t = e._valueTracker;
            if (!t) return !0;
            var n = t.getValue(),
                r = "";
            return e && (r = x6(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1
        }

        function F2(e) {
            if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
            try {
                return e.activeElement || e.body
            } catch {
                return e.body
            }
        }

        function Xc(e, t) {
            var n = t.checked;
            return Ke({}, t, {
                defaultChecked: void 0,
                defaultValue: void 0,
                value: void 0,
                checked: n ?? e._wrapperState.initialChecked
            })
        }

        function gp(e, t) {
            var n = t.defaultValue == null ? "" : t.defaultValue,
                r = t.checked != null ? t.checked : t.defaultChecked;
            n = B1(t.value != null ? t.value : n), e._wrapperState = {
                initialChecked: r,
                initialValue: n,
                controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
            }
        }

        function M6(e, t) {
            t = t.checked, t != null && Fu(e, "checked", t, !1)
        }

        function Yc(e, t) {
            M6(e, t);
            var n = B1(t.value),
                r = t.type;
            if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
            else if (r === "submit" || r === "reset") {
                e.removeAttribute("value");
                return
            }
            t.hasOwnProperty("value") ? Jc(e, t.type, n) : t.hasOwnProperty("defaultValue") && Jc(e, t.type, B1(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
        }

        function yp(e, t, n) {
            if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
                var r = t.type;
                if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
                t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
            }
            n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n)
        }

        function Jc(e, t, n) {
            (t !== "number" || F2(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
        }
        var ei = Array.isArray;

        function I5(e, t, n, r) {
            if (e = e.options, t) {
                t = {};
                for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
                for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0)
            } else {
                for (n = "" + B1(n), t = null, i = 0; i < e.length; i++) {
                    if (e[i].value === n) {
                        e[i].selected = !0, r && (e[i].defaultSelected = !0);
                        return
                    }
                    t !== null || e[i].disabled || (t = e[i])
                }
                t !== null && (t.selected = !0)
            }
        }

        function eu(e, t) {
            if (t.dangerouslySetInnerHTML != null) throw Error($(91));
            return Ke({}, t, {
                value: void 0,
                defaultValue: void 0,
                children: "" + e._wrapperState.initialValue
            })
        }

        function _p(e, t) {
            var n = t.value;
            if (n == null) {
                if (n = t.children, t = t.defaultValue, n != null) {
                    if (t != null) throw Error($(92));
                    if (ei(n)) {
                        if (1 < n.length) throw Error($(93));
                        n = n[0]
                    }
                    t = n
                }
                t == null && (t = ""), n = t
            }
            e._wrapperState = {
                initialValue: B1(n)
            }
        }

        function Z6(e, t) {
            var n = B1(t.value),
                r = B1(t.defaultValue);
            n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r)
        }

        function wp(e) {
            var t = e.textContent;
            t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
        }

        function T6(e) {
            switch (e) {
                case "svg":
                    return "http://www.w3.org/2000/svg";
                case "math":
                    return "http://www.w3.org/1998/Math/MathML";
                default:
                    return "http://www.w3.org/1999/xhtml"
            }
        }

        function tu(e, t) {
            return e == null || e === "http://www.w3.org/1999/xhtml" ? T6(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
        }
        var h2, I6 = function(e) {
            return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
                MSApp.execUnsafeLocalFunction(function() {
                    return e(t, n, r, i)
                })
            } : e
        }(function(e, t) {
            if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
            else {
                for (h2 = h2 || document.createElement("div"), h2.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = h2.firstChild; e.firstChild;) e.removeChild(e.firstChild);
                for (; t.firstChild;) e.appendChild(t.firstChild)
            }
        });

        function hi(e, t) {
            if (t) {
                var n = e.firstChild;
                if (n && n === e.lastChild && n.nodeType === 3) {
                    n.nodeValue = t;
                    return
                }
            }
            e.textContent = t
        }
        var ri = {
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
            hS = ["Webkit", "ms", "Moz", "O"];
        Object.keys(ri).forEach(function(e) {
            hS.forEach(function(t) {
                t = t + e.charAt(0).toUpperCase() + e.substring(1), ri[t] = ri[e]
            })
        });

        function k6(e, t, n) {
            return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || ri.hasOwnProperty(e) && ri[e] ? ("" + t).trim() : t + "px"
        }

        function O6(e, t) {
            e = e.style;
            for (var n in t)
                if (t.hasOwnProperty(n)) {
                    var r = n.indexOf("--") === 0,
                        i = k6(n, t[n], r);
                    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i
                }
        }
        var pS = Ke({
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

        function nu(e, t) {
            if (t) {
                if (pS[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error($(137, e));
                if (t.dangerouslySetInnerHTML != null) {
                    if (t.children != null) throw Error($(60));
                    if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error($(61))
                }
                if (t.style != null && typeof t.style != "object") throw Error($(62))
            }
        }

        function ru(e, t) {
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
        var au = null;

        function Gu(e) {
            return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
        }
        var iu = null,
            k5 = null,
            O5 = null;

        function Ep(e) {
            if (e = ki(e)) {
                if (typeof iu != "function") throw Error($(280));
                var t = e.stateNode;
                t && (t = ps(t), iu(e.stateNode, e.type, t))
            }
        }

        function L6(e) {
            k5 ? O5 ? O5.push(e) : O5 = [e] : k5 = e
        }

        function R6() {
            if (k5) {
                var e = k5,
                    t = O5;
                if (O5 = k5 = null, Ep(e), t)
                    for (e = 0; e < t.length; e++) Ep(t[e])
            }
        }

        function P6(e, t) {
            return e(t)
        }

        function N6() {}
        var Mc = !1;

        function V6(e, t, n) {
            if (Mc) return e(t, n);
            Mc = !0;
            try {
                return P6(e, t, n)
            } finally {
                Mc = !1, (k5 !== null || O5 !== null) && (N6(), R6())
            }
        }

        function pi(e, t) {
            var n = e.stateNode;
            if (n === null) return null;
            var r = ps(n);
            if (r === null) return null;
            n = r[t];
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
                    (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
                    break e;
                default:
                    e = !1
            }
            if (e) return null;
            if (n && typeof n != "function") throw Error($(231, t, typeof n));
            return n
        }
        var ou = !1;
        if (Xr) try {
            v5 = {}, Object.defineProperty(v5, "passive", {
                get: function() {
                    ou = !0
                }
            }), window.addEventListener("test", v5, v5), window.removeEventListener("test", v5, v5)
        } catch {
            ou = !1
        }
        var v5;

        function mS(e, t, n, r, i, s, c, u, f) {
            var p = Array.prototype.slice.call(arguments, 3);
            try {
                t.apply(n, p)
            } catch (h) {
                this.onError(h)
            }
        }
        var ai = !1,
            B2 = null,
            U2 = !1,
            su = null,
            vS = {
                onError: function(e) {
                    ai = !0, B2 = e
                }
            };

        function gS(e, t, n, r, i, s, c, u, f) {
            ai = !1, B2 = null, mS.apply(vS, arguments)
        }

        function yS(e, t, n, r, i, s, c, u, f) {
            if (gS.apply(this, arguments), ai) {
                if (ai) {
                    var p = B2;
                    ai = !1, B2 = null
                } else throw Error($(198));
                U2 || (U2 = !0, su = p)
            }
        }

        function N0(e) {
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

        function H6(e) {
            if (e.tag === 13) {
                var t = e.memoizedState;
                if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
            }
            return null
        }

        function Ap(e) {
            if (N0(e) !== e) throw Error($(188))
        }

        function _S(e) {
            var t = e.alternate;
            if (!t) {
                if (t = N0(e), t === null) throw Error($(188));
                return t !== e ? null : e
            }
            for (var n = e, r = t;;) {
                var i = n.return;
                if (i === null) break;
                var s = i.alternate;
                if (s === null) {
                    if (r = i.return, r !== null) {
                        n = r;
                        continue
                    }
                    break
                }
                if (i.child === s.child) {
                    for (s = i.child; s;) {
                        if (s === n) return Ap(i), e;
                        if (s === r) return Ap(i), t;
                        s = s.sibling
                    }
                    throw Error($(188))
                }
                if (n.return !== r.return) n = i, r = s;
                else {
                    for (var c = !1, u = i.child; u;) {
                        if (u === n) {
                            c = !0, n = i, r = s;
                            break
                        }
                        if (u === r) {
                            c = !0, r = i, n = s;
                            break
                        }
                        u = u.sibling
                    }
                    if (!c) {
                        for (u = s.child; u;) {
                            if (u === n) {
                                c = !0, n = s, r = i;
                                break
                            }
                            if (u === r) {
                                c = !0, r = s, n = i;
                                break
                            }
                            u = u.sibling
                        }
                        if (!c) throw Error($(189))
                    }
                }
                if (n.alternate !== r) throw Error($(190))
            }
            if (n.tag !== 3) throw Error($(188));
            return n.stateNode.current === n ? e : t
        }

        function D6(e) {
            return e = _S(e), e !== null ? F6(e) : null
        }

        function F6(e) {
            if (e.tag === 5 || e.tag === 6) return e;
            for (e = e.child; e !== null;) {
                var t = F6(e);
                if (t !== null) return t;
                e = e.sibling
            }
            return null
        }
        var B6 = vn.unstable_scheduleCallback,
            bp = vn.unstable_cancelCallback,
            wS = vn.unstable_shouldYield,
            ES = vn.unstable_requestPaint,
            rt = vn.unstable_now,
            AS = vn.unstable_getCurrentPriorityLevel,
            zu = vn.unstable_ImmediatePriority,
            U6 = vn.unstable_UserBlockingPriority,
            j2 = vn.unstable_NormalPriority,
            bS = vn.unstable_LowPriority,
            j6 = vn.unstable_IdlePriority,
            us = null,
            xr = null;

        function CS(e) {
            if (xr && typeof xr.onCommitFiberRoot == "function") try {
                xr.onCommitFiberRoot(us, e, void 0, (e.current.flags & 128) === 128)
            } catch {}
        }
        var tr = Math.clz32 ? Math.clz32 : MS,
            xS = Math.log,
            SS = Math.LN2;

        function MS(e) {
            return e >>>= 0, e === 0 ? 32 : 31 - (xS(e) / SS | 0) | 0
        }
        var p2 = 64,
            m2 = 4194304;

        function ti(e) {
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

        function G2(e, t) {
            var n = e.pendingLanes;
            if (n === 0) return 0;
            var r = 0,
                i = e.suspendedLanes,
                s = e.pingedLanes,
                c = n & 268435455;
            if (c !== 0) {
                var u = c & ~i;
                u !== 0 ? r = ti(u) : (s &= c, s !== 0 && (r = ti(s)))
            } else c = n & ~i, c !== 0 ? r = ti(c) : s !== 0 && (r = ti(s));
            if (r === 0) return 0;
            if (t !== 0 && t !== r && !(t & i) && (i = r & -r, s = t & -t, i >= s || i === 16 && (s & 4194240) !== 0)) return t;
            if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
                for (e = e.entanglements, t &= r; 0 < t;) n = 31 - tr(t), i = 1 << n, r |= e[n], t &= ~i;
            return r
        }

        function ZS(e, t) {
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

        function TS(e, t) {
            for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, s = e.pendingLanes; 0 < s;) {
                var c = 31 - tr(s),
                    u = 1 << c,
                    f = i[c];
                f === -1 ? (!(u & n) || u & r) && (i[c] = ZS(u, t)) : f <= t && (e.expiredLanes |= u), s &= ~u
            }
        }

        function lu(e) {
            return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
        }

        function G6() {
            var e = p2;
            return p2 <<= 1, !(p2 & 4194240) && (p2 = 64), e
        }

        function Zc(e) {
            for (var t = [], n = 0; 31 > n; n++) t.push(e);
            return t
        }

        function Ti(e, t, n) {
            e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - tr(t), e[t] = n
        }

        function IS(e, t) {
            var n = e.pendingLanes & ~t;
            e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
            var r = e.eventTimes;
            for (e = e.expirationTimes; 0 < n;) {
                var i = 31 - tr(n),
                    s = 1 << i;
                t[i] = 0, r[i] = -1, e[i] = -1, n &= ~s
            }
        }

        function $u(e, t) {
            var n = e.entangledLanes |= t;
            for (e = e.entanglements; n;) {
                var r = 31 - tr(n),
                    i = 1 << r;
                i & t | e[r] & t && (e[r] |= t), n &= ~i
            }
        }
        var ke = 0;

        function z6(e) {
            return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
        }
        var $6, qu, q6, W6, K6, cu = !1,
            v2 = [],
            L1 = null,
            R1 = null,
            P1 = null,
            mi = new Map,
            vi = new Map,
            T1 = [],
            kS = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

        function Cp(e, t) {
            switch (e) {
                case "focusin":
                case "focusout":
                    L1 = null;
                    break;
                case "dragenter":
                case "dragleave":
                    R1 = null;
                    break;
                case "mouseover":
                case "mouseout":
                    P1 = null;
                    break;
                case "pointerover":
                case "pointerout":
                    mi.delete(t.pointerId);
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                    vi.delete(t.pointerId)
            }
        }

        function $a(e, t, n, r, i, s) {
            return e === null || e.nativeEvent !== s ? (e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: s,
                targetContainers: [i]
            }, t !== null && (t = ki(t), t !== null && qu(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e)
        }

        function OS(e, t, n, r, i) {
            switch (t) {
                case "focusin":
                    return L1 = $a(L1, e, t, n, r, i), !0;
                case "dragenter":
                    return R1 = $a(R1, e, t, n, r, i), !0;
                case "mouseover":
                    return P1 = $a(P1, e, t, n, r, i), !0;
                case "pointerover":
                    var s = i.pointerId;
                    return mi.set(s, $a(mi.get(s) || null, e, t, n, r, i)), !0;
                case "gotpointercapture":
                    return s = i.pointerId, vi.set(s, $a(vi.get(s) || null, e, t, n, r, i)), !0
            }
            return !1
        }

        function Q6(e) {
            var t = x0(e.target);
            if (t !== null) {
                var n = N0(t);
                if (n !== null) {
                    if (t = n.tag, t === 13) {
                        if (t = H6(n), t !== null) {
                            e.blockedOn = t, K6(e.priority, function() {
                                q6(n)
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

        function I2(e) {
            if (e.blockedOn !== null) return !1;
            for (var t = e.targetContainers; 0 < t.length;) {
                var n = uu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
                if (n === null) {
                    n = e.nativeEvent;
                    var r = new n.constructor(n.type, n);
                    au = r, n.target.dispatchEvent(r), au = null
                } else return t = ki(n), t !== null && qu(t), e.blockedOn = n, !1;
                t.shift()
            }
            return !0
        }

        function xp(e, t, n) {
            I2(e) && n.delete(t)
        }

        function LS() {
            cu = !1, L1 !== null && I2(L1) && (L1 = null), R1 !== null && I2(R1) && (R1 = null), P1 !== null && I2(P1) && (P1 = null), mi.forEach(xp), vi.forEach(xp)
        }

        function qa(e, t) {
            e.blockedOn === t && (e.blockedOn = null, cu || (cu = !0, vn.unstable_scheduleCallback(vn.unstable_NormalPriority, LS)))
        }

        function gi(e) {
            function t(i) {
                return qa(i, e)
            }
            if (0 < v2.length) {
                qa(v2[0], e);
                for (var n = 1; n < v2.length; n++) {
                    var r = v2[n];
                    r.blockedOn === e && (r.blockedOn = null)
                }
            }
            for (L1 !== null && qa(L1, e), R1 !== null && qa(R1, e), P1 !== null && qa(P1, e), mi.forEach(t), vi.forEach(t), n = 0; n < T1.length; n++) r = T1[n], r.blockedOn === e && (r.blockedOn = null);
            for (; 0 < T1.length && (n = T1[0], n.blockedOn === null);) Q6(n), n.blockedOn === null && T1.shift()
        }
        var L5 = t1.ReactCurrentBatchConfig,
            z2 = !0;

        function RS(e, t, n, r) {
            var i = ke,
                s = L5.transition;
            L5.transition = null;
            try {
                ke = 1, Wu(e, t, n, r)
            } finally {
                ke = i, L5.transition = s
            }
        }

        function PS(e, t, n, r) {
            var i = ke,
                s = L5.transition;
            L5.transition = null;
            try {
                ke = 4, Wu(e, t, n, r)
            } finally {
                ke = i, L5.transition = s
            }
        }

        function Wu(e, t, n, r) {
            if (z2) {
                var i = uu(e, t, n, r);
                if (i === null) Pc(e, t, r, $2, n), Cp(e, r);
                else if (OS(i, e, t, n, r)) r.stopPropagation();
                else if (Cp(e, r), t & 4 && -1 < kS.indexOf(e)) {
                    for (; i !== null;) {
                        var s = ki(i);
                        if (s !== null && $6(s), s = uu(e, t, n, r), s === null && Pc(e, t, r, $2, n), s === i) break;
                        i = s
                    }
                    i !== null && r.stopPropagation()
                } else Pc(e, t, r, null, n)
            }
        }
        var $2 = null;

        function uu(e, t, n, r) {
            if ($2 = null, e = Gu(r), e = x0(e), e !== null)
                if (t = N0(e), t === null) e = null;
                else if (n = t.tag, n === 13) {
                if (e = H6(t), e !== null) return e;
                e = null
            } else if (n === 3) {
                if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
                e = null
            } else t !== e && (e = null);
            return $2 = e, null
        }

        function X6(e) {
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
                    switch (AS()) {
                        case zu:
                            return 1;
                        case U6:
                            return 4;
                        case j2:
                        case bS:
                            return 16;
                        case j6:
                            return 536870912;
                        default:
                            return 16
                    }
                default:
                    return 16
            }
        }
        var k1 = null,
            Ku = null,
            k2 = null;

        function Y6() {
            if (k2) return k2;
            var e, t = Ku,
                n = t.length,
                r, i = "value" in k1 ? k1.value : k1.textContent,
                s = i.length;
            for (e = 0; e < n && t[e] === i[e]; e++);
            var c = n - e;
            for (r = 1; r <= c && t[n - r] === i[s - r]; r++);
            return k2 = i.slice(e, 1 < r ? 1 - r : void 0)
        }

        function O2(e) {
            var t = e.keyCode;
            return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
        }

        function g2() {
            return !0
        }

        function Sp() {
            return !1
        }

        function gn(e) {
            function t(n, r, i, s, c) {
                this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = s, this.target = c, this.currentTarget = null;
                for (var u in e) e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(s) : s[u]);
                return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? g2 : Sp, this.isPropagationStopped = Sp, this
            }
            return Ke(t.prototype, {
                preventDefault: function() {
                    this.defaultPrevented = !0;
                    var n = this.nativeEvent;
                    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = g2)
                },
                stopPropagation: function() {
                    var n = this.nativeEvent;
                    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = g2)
                },
                persist: function() {},
                isPersistent: g2
            }), t
        }
        var j5 = {
                eventPhase: 0,
                bubbles: 0,
                cancelable: 0,
                timeStamp: function(e) {
                    return e.timeStamp || Date.now()
                },
                defaultPrevented: 0,
                isTrusted: 0
            },
            Qu = gn(j5),
            Ii = Ke({}, j5, {
                view: 0,
                detail: 0
            }),
            NS = gn(Ii),
            Tc, Ic, Wa, fs = Ke({}, Ii, {
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
                getModifierState: Xu,
                button: 0,
                buttons: 0,
                relatedTarget: function(e) {
                    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
                },
                movementX: function(e) {
                    return "movementX" in e ? e.movementX : (e !== Wa && (Wa && e.type === "mousemove" ? (Tc = e.screenX - Wa.screenX, Ic = e.screenY - Wa.screenY) : Ic = Tc = 0, Wa = e), Tc)
                },
                movementY: function(e) {
                    return "movementY" in e ? e.movementY : Ic
                }
            }),
            Mp = gn(fs),
            VS = Ke({}, fs, {
                dataTransfer: 0
            }),
            HS = gn(VS),
            DS = Ke({}, Ii, {
                relatedTarget: 0
            }),
            kc = gn(DS),
            FS = Ke({}, j5, {
                animationName: 0,
                elapsedTime: 0,
                pseudoElement: 0
            }),
            BS = gn(FS),
            US = Ke({}, j5, {
                clipboardData: function(e) {
                    return "clipboardData" in e ? e.clipboardData : window.clipboardData
                }
            }),
            jS = gn(US),
            GS = Ke({}, j5, {
                data: 0
            }),
            Zp = gn(GS),
            zS = {
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
            $S = {
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
            qS = {
                Alt: "altKey",
                Control: "ctrlKey",
                Meta: "metaKey",
                Shift: "shiftKey"
            };

        function WS(e) {
            var t = this.nativeEvent;
            return t.getModifierState ? t.getModifierState(e) : (e = qS[e]) ? !!t[e] : !1
        }

        function Xu() {
            return WS
        }
        var KS = Ke({}, Ii, {
                key: function(e) {
                    if (e.key) {
                        var t = zS[e.key] || e.key;
                        if (t !== "Unidentified") return t
                    }
                    return e.type === "keypress" ? (e = O2(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? $S[e.keyCode] || "Unidentified" : ""
                },
                code: 0,
                location: 0,
                ctrlKey: 0,
                shiftKey: 0,
                altKey: 0,
                metaKey: 0,
                repeat: 0,
                locale: 0,
                getModifierState: Xu,
                charCode: function(e) {
                    return e.type === "keypress" ? O2(e) : 0
                },
                keyCode: function(e) {
                    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
                },
                which: function(e) {
                    return e.type === "keypress" ? O2(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
                }
            }),
            QS = gn(KS),
            XS = Ke({}, fs, {
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
            Tp = gn(XS),
            YS = Ke({}, Ii, {
                touches: 0,
                targetTouches: 0,
                changedTouches: 0,
                altKey: 0,
                metaKey: 0,
                ctrlKey: 0,
                shiftKey: 0,
                getModifierState: Xu
            }),
            JS = gn(YS),
            eM = Ke({}, j5, {
                propertyName: 0,
                elapsedTime: 0,
                pseudoElement: 0
            }),
            tM = gn(eM),
            nM = Ke({}, fs, {
                deltaX: function(e) {
                    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
                },
                deltaY: function(e) {
                    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
                },
                deltaZ: 0,
                deltaMode: 0
            }),
            rM = gn(nM),
            aM = [9, 13, 27, 32],
            Yu = Xr && "CompositionEvent" in window,
            ii = null;
        Xr && "documentMode" in document && (ii = document.documentMode);
        var iM = Xr && "TextEvent" in window && !ii,
            J6 = Xr && (!Yu || ii && 8 < ii && 11 >= ii),
            Ip = String.fromCharCode(32),
            kp = !1;

        function e8(e, t) {
            switch (e) {
                case "keyup":
                    return aM.indexOf(t.keyCode) !== -1;
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

        function t8(e) {
            return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
        }
        var w5 = !1;

        function oM(e, t) {
            switch (e) {
                case "compositionend":
                    return t8(t);
                case "keypress":
                    return t.which !== 32 ? null : (kp = !0, Ip);
                case "textInput":
                    return e = t.data, e === Ip && kp ? null : e;
                default:
                    return null
            }
        }

        function sM(e, t) {
            if (w5) return e === "compositionend" || !Yu && e8(e, t) ? (e = Y6(), k2 = Ku = k1 = null, w5 = !1, e) : null;
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
                    return J6 && t.locale !== "ko" ? null : t.data;
                default:
                    return null
            }
        }
        var lM = {
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

        function Op(e) {
            var t = e && e.nodeName && e.nodeName.toLowerCase();
            return t === "input" ? !!lM[e.type] : t === "textarea"
        }

        function n8(e, t, n, r) {
            L6(r), t = q2(t, "onChange"), 0 < t.length && (n = new Qu("onChange", "change", null, n, r), e.push({
                event: n,
                listeners: t
            }))
        }
        var oi = null,
            yi = null;

        function cM(e) {
            h8(e, 0)
        }

        function ds(e) {
            var t = b5(e);
            if (S6(t)) return e
        }

        function uM(e, t) {
            if (e === "change") return t
        }
        var r8 = !1;
        Xr && (Xr ? (_2 = "oninput" in document, _2 || (Oc = document.createElement("div"), Oc.setAttribute("oninput", "return;"), _2 = typeof Oc.oninput == "function"), y2 = _2) : y2 = !1, r8 = y2 && (!document.documentMode || 9 < document.documentMode));
        var y2, _2, Oc;

        function Lp() {
            oi && (oi.detachEvent("onpropertychange", a8), yi = oi = null)
        }

        function a8(e) {
            if (e.propertyName === "value" && ds(yi)) {
                var t = [];
                n8(t, yi, e, Gu(e)), V6(cM, t)
            }
        }

        function fM(e, t, n) {
            e === "focusin" ? (Lp(), oi = t, yi = n, oi.attachEvent("onpropertychange", a8)) : e === "focusout" && Lp()
        }

        function dM(e) {
            if (e === "selectionchange" || e === "keyup" || e === "keydown") return ds(yi)
        }

        function hM(e, t) {
            if (e === "click") return ds(t)
        }

        function pM(e, t) {
            if (e === "input" || e === "change") return ds(t)
        }

        function mM(e, t) {
            return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
        }
        var rr = typeof Object.is == "function" ? Object.is : mM;

        function _i(e, t) {
            if (rr(e, t)) return !0;
            if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
            var n = Object.keys(e),
                r = Object.keys(t);
            if (n.length !== r.length) return !1;
            for (r = 0; r < n.length; r++) {
                var i = n[r];
                if (!$c.call(t, i) || !rr(e[i], t[i])) return !1
            }
            return !0
        }

        function Rp(e) {
            for (; e && e.firstChild;) e = e.firstChild;
            return e
        }

        function Pp(e, t) {
            var n = Rp(e);
            e = 0;
            for (var r; n;) {
                if (n.nodeType === 3) {
                    if (r = e + n.textContent.length, e <= t && r >= t) return {
                        node: n,
                        offset: t - e
                    };
                    e = r
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
                n = Rp(n)
            }
        }

        function i8(e, t) {
            return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? i8(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
        }

        function o8() {
            for (var e = window, t = F2(); t instanceof e.HTMLIFrameElement;) {
                try {
                    var n = typeof t.contentWindow.location.href == "string"
                } catch {
                    n = !1
                }
                if (n) e = t.contentWindow;
                else break;
                t = F2(e.document)
            }
            return t
        }

        function Ju(e) {
            var t = e && e.nodeName && e.nodeName.toLowerCase();
            return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
        }

        function vM(e) {
            var t = o8(),
                n = e.focusedElem,
                r = e.selectionRange;
            if (t !== n && n && n.ownerDocument && i8(n.ownerDocument.documentElement, n)) {
                if (r !== null && Ju(n)) {
                    if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
                    else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
                        e = e.getSelection();
                        var i = n.textContent.length,
                            s = Math.min(r.start, i);
                        r = r.end === void 0 ? s : Math.min(r.end, i), !e.extend && s > r && (i = r, r = s, s = i), i = Pp(n, s);
                        var c = Pp(n, r);
                        i && c && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== c.node || e.focusOffset !== c.offset) && (t = t.createRange(), t.setStart(i.node, i.offset), e.removeAllRanges(), s > r ? (e.addRange(t), e.extend(c.node, c.offset)) : (t.setEnd(c.node, c.offset), e.addRange(t)))
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
        var gM = Xr && "documentMode" in document && 11 >= document.documentMode,
            E5 = null,
            fu = null,
            si = null,
            du = !1;

        function Np(e, t, n) {
            var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
            du || E5 == null || E5 !== F2(r) || (r = E5, "selectionStart" in r && Ju(r) ? r = {
                start: r.selectionStart,
                end: r.selectionEnd
            } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
                anchorNode: r.anchorNode,
                anchorOffset: r.anchorOffset,
                focusNode: r.focusNode,
                focusOffset: r.focusOffset
            }), si && _i(si, r) || (si = r, r = q2(fu, "onSelect"), 0 < r.length && (t = new Qu("onSelect", "select", null, t, n), e.push({
                event: t,
                listeners: r
            }), t.target = E5)))
        }

        function w2(e, t) {
            var n = {};
            return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
        }
        var A5 = {
                animationend: w2("Animation", "AnimationEnd"),
                animationiteration: w2("Animation", "AnimationIteration"),
                animationstart: w2("Animation", "AnimationStart"),
                transitionend: w2("Transition", "TransitionEnd")
            },
            Lc = {},
            s8 = {};
        Xr && (s8 = document.createElement("div").style, "AnimationEvent" in window || (delete A5.animationend.animation, delete A5.animationiteration.animation, delete A5.animationstart.animation), "TransitionEvent" in window || delete A5.transitionend.transition);

        function hs(e) {
            if (Lc[e]) return Lc[e];
            if (!A5[e]) return e;
            var t = A5[e],
                n;
            for (n in t)
                if (t.hasOwnProperty(n) && n in s8) return Lc[e] = t[n];
            return e
        }
        var l8 = hs("animationend"),
            c8 = hs("animationiteration"),
            u8 = hs("animationstart"),
            f8 = hs("transitionend"),
            d8 = new Map,
            Vp = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

        function j1(e, t) {
            d8.set(e, t), P0(t, [e])
        }
        for (E2 = 0; E2 < Vp.length; E2++) A2 = Vp[E2], Hp = A2.toLowerCase(), Dp = A2[0].toUpperCase() + A2.slice(1), j1(Hp, "on" + Dp);
        var A2, Hp, Dp, E2;
        j1(l8, "onAnimationEnd");
        j1(c8, "onAnimationIteration");
        j1(u8, "onAnimationStart");
        j1("dblclick", "onDoubleClick");
        j1("focusin", "onFocus");
        j1("focusout", "onBlur");
        j1(f8, "onTransitionEnd");
        N5("onMouseEnter", ["mouseout", "mouseover"]);
        N5("onMouseLeave", ["mouseout", "mouseover"]);
        N5("onPointerEnter", ["pointerout", "pointerover"]);
        N5("onPointerLeave", ["pointerout", "pointerover"]);
        P0("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
        P0("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
        P0("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
        P0("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
        P0("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
        P0("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
        var ni = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
            yM = new Set("cancel close invalid load scroll toggle".split(" ").concat(ni));

        function Fp(e, t, n) {
            var r = e.type || "unknown-event";
            e.currentTarget = n, yS(r, t, void 0, e), e.currentTarget = null
        }

        function h8(e, t) {
            t = (t & 4) !== 0;
            for (var n = 0; n < e.length; n++) {
                var r = e[n],
                    i = r.event;
                r = r.listeners;
                e: {
                    var s = void 0;
                    if (t)
                        for (var c = r.length - 1; 0 <= c; c--) {
                            var u = r[c],
                                f = u.instance,
                                p = u.currentTarget;
                            if (u = u.listener, f !== s && i.isPropagationStopped()) break e;
                            Fp(i, u, p), s = f
                        } else
                            for (c = 0; c < r.length; c++) {
                                if (u = r[c], f = u.instance, p = u.currentTarget, u = u.listener, f !== s && i.isPropagationStopped()) break e;
                                Fp(i, u, p), s = f
                            }
                }
            }
            if (U2) throw e = su, U2 = !1, su = null, e
        }

        function Fe(e, t) {
            var n = t[gu];
            n === void 0 && (n = t[gu] = new Set);
            var r = e + "__bubble";
            n.has(r) || (p8(t, e, 2, !1), n.add(r))
        }

        function Rc(e, t, n) {
            var r = 0;
            t && (r |= 4), p8(n, e, r, t)
        }
        var b2 = "_reactListening" + Math.random().toString(36).slice(2);

        function wi(e) {
            if (!e[b2]) {
                e[b2] = !0, E6.forEach(function(n) {
                    n !== "selectionchange" && (yM.has(n) || Rc(n, !1, e), Rc(n, !0, e))
                });
                var t = e.nodeType === 9 ? e : e.ownerDocument;
                t === null || t[b2] || (t[b2] = !0, Rc("selectionchange", !1, t))
            }
        }

        function p8(e, t, n, r) {
            switch (X6(t)) {
                case 1:
                    var i = RS;
                    break;
                case 4:
                    i = PS;
                    break;
                default:
                    i = Wu
            }
            n = i.bind(null, t, n, e), i = void 0, !ou || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i !== void 0 ? e.addEventListener(t, n, {
                capture: !0,
                passive: i
            }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, {
                passive: i
            }) : e.addEventListener(t, n, !1)
        }

        function Pc(e, t, n, r, i) {
            var s = r;
            if (!(t & 1) && !(t & 2) && r !== null) e: for (;;) {
                if (r === null) return;
                var c = r.tag;
                if (c === 3 || c === 4) {
                    var u = r.stateNode.containerInfo;
                    if (u === i || u.nodeType === 8 && u.parentNode === i) break;
                    if (c === 4)
                        for (c = r.return; c !== null;) {
                            var f = c.tag;
                            if ((f === 3 || f === 4) && (f = c.stateNode.containerInfo, f === i || f.nodeType === 8 && f.parentNode === i)) return;
                            c = c.return
                        }
                    for (; u !== null;) {
                        if (c = x0(u), c === null) return;
                        if (f = c.tag, f === 5 || f === 6) {
                            r = s = c;
                            continue e
                        }
                        u = u.parentNode
                    }
                }
                r = r.return
            }
            V6(function() {
                var p = s,
                    h = Gu(n),
                    w = [];
                e: {
                    var v = d8.get(e);
                    if (v !== void 0) {
                        var _ = Qu,
                            S = e;
                        switch (e) {
                            case "keypress":
                                if (O2(n) === 0) break e;
                            case "keydown":
                            case "keyup":
                                _ = QS;
                                break;
                            case "focusin":
                                S = "focus", _ = kc;
                                break;
                            case "focusout":
                                S = "blur", _ = kc;
                                break;
                            case "beforeblur":
                            case "afterblur":
                                _ = kc;
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
                                _ = Mp;
                                break;
                            case "drag":
                            case "dragend":
                            case "dragenter":
                            case "dragexit":
                            case "dragleave":
                            case "dragover":
                            case "dragstart":
                            case "drop":
                                _ = HS;
                                break;
                            case "touchcancel":
                            case "touchend":
                            case "touchmove":
                            case "touchstart":
                                _ = JS;
                                break;
                            case l8:
                            case c8:
                            case u8:
                                _ = BS;
                                break;
                            case f8:
                                _ = tM;
                                break;
                            case "scroll":
                                _ = NS;
                                break;
                            case "wheel":
                                _ = rM;
                                break;
                            case "copy":
                            case "cut":
                            case "paste":
                                _ = jS;
                                break;
                            case "gotpointercapture":
                            case "lostpointercapture":
                            case "pointercancel":
                            case "pointerdown":
                            case "pointermove":
                            case "pointerout":
                            case "pointerover":
                            case "pointerup":
                                _ = Tp
                        }
                        var I = (t & 4) !== 0,
                            R = !I && e === "scroll",
                            b = I ? v !== null ? v + "Capture" : null : v;
                        I = [];
                        for (var C = p, x; C !== null;) {
                            x = C;
                            var Z = x.stateNode;
                            if (x.tag === 5 && Z !== null && (x = Z, b !== null && (Z = pi(C, b), Z != null && I.push(Ei(C, Z, x)))), R) break;
                            C = C.return
                        }
                        0 < I.length && (v = new _(v, S, null, n, h), w.push({
                            event: v,
                            listeners: I
                        }))
                    }
                }
                if (!(t & 7)) {
                    e: {
                        if (v = e === "mouseover" || e === "pointerover", _ = e === "mouseout" || e === "pointerout", v && n !== au && (S = n.relatedTarget || n.fromElement) && (x0(S) || S[Yr])) break e;
                        if ((_ || v) && (v = h.window === h ? h : (v = h.ownerDocument) ? v.defaultView || v.parentWindow : window, _ ? (S = n.relatedTarget || n.toElement, _ = p, S = S ? x0(S) : null, S !== null && (R = N0(S), S !== R || S.tag !== 5 && S.tag !== 6) && (S = null)) : (_ = null, S = p), _ !== S)) {
                            if (I = Mp, Z = "onMouseLeave", b = "onMouseEnter", C = "mouse", (e === "pointerout" || e === "pointerover") && (I = Tp, Z = "onPointerLeave", b = "onPointerEnter", C = "pointer"), R = _ == null ? v : b5(_), x = S == null ? v : b5(S), v = new I(Z, C + "leave", _, n, h), v.target = R, v.relatedTarget = x, Z = null, x0(h) === p && (I = new I(b, C + "enter", S, n, h), I.target = x, I.relatedTarget = R, Z = I), R = Z, _ && S) t: {
                                for (I = _, b = S, C = 0, x = I; x; x = g5(x)) C++;
                                for (x = 0, Z = b; Z; Z = g5(Z)) x++;
                                for (; 0 < C - x;) I = g5(I),
                                C--;
                                for (; 0 < x - C;) b = g5(b),
                                x--;
                                for (; C--;) {
                                    if (I === b || b !== null && I === b.alternate) break t;
                                    I = g5(I), b = g5(b)
                                }
                                I = null
                            }
                            else I = null;
                            _ !== null && Bp(w, v, _, I, !1), S !== null && R !== null && Bp(w, R, S, I, !0)
                        }
                    }
                    e: {
                        if (v = p ? b5(p) : window, _ = v.nodeName && v.nodeName.toLowerCase(), _ === "select" || _ === "input" && v.type === "file") var T = uM;
                        else if (Op(v))
                            if (r8) T = pM;
                            else {
                                T = dM;
                                var P = fM
                            }
                        else(_ = v.nodeName) && _.toLowerCase() === "input" && (v.type === "checkbox" || v.type === "radio") && (T = hM);
                        if (T && (T = T(e, p))) {
                            n8(w, T, n, h);
                            break e
                        }
                        P && P(e, v, p),
                        e === "focusout" && (P = v._wrapperState) && P.controlled && v.type === "number" && Jc(v, "number", v.value)
                    }
                    switch (P = p ? b5(p) : window, e) {
                        case "focusin":
                            (Op(P) || P.contentEditable === "true") && (E5 = P, fu = p, si = null);
                            break;
                        case "focusout":
                            si = fu = E5 = null;
                            break;
                        case "mousedown":
                            du = !0;
                            break;
                        case "contextmenu":
                        case "mouseup":
                        case "dragend":
                            du = !1, Np(w, n, h);
                            break;
                        case "selectionchange":
                            if (gM) break;
                        case "keydown":
                        case "keyup":
                            Np(w, n, h)
                    }
                    var N;
                    if (Yu) e: {
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
                    else w5 ? e8(e, n) && (H = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (H = "onCompositionStart");H && (J6 && n.locale !== "ko" && (w5 || H !== "onCompositionStart" ? H === "onCompositionEnd" && w5 && (N = Y6()) : (k1 = h, Ku = "value" in k1 ? k1.value : k1.textContent, w5 = !0)), P = q2(p, H), 0 < P.length && (H = new Zp(H, e, null, n, h), w.push({
                        event: H,
                        listeners: P
                    }), N ? H.data = N : (N = t8(n), N !== null && (H.data = N)))),
                    (N = iM ? oM(e, n) : sM(e, n)) && (p = q2(p, "onBeforeInput"), 0 < p.length && (h = new Zp("onBeforeInput", "beforeinput", null, n, h), w.push({
                        event: h,
                        listeners: p
                    }), h.data = N))
                }
                h8(w, t)
            })
        }

        function Ei(e, t, n) {
            return {
                instance: e,
                listener: t,
                currentTarget: n
            }
        }

        function q2(e, t) {
            for (var n = t + "Capture", r = []; e !== null;) {
                var i = e,
                    s = i.stateNode;
                i.tag === 5 && s !== null && (i = s, s = pi(e, n), s != null && r.unshift(Ei(e, s, i)), s = pi(e, t), s != null && r.push(Ei(e, s, i))), e = e.return
            }
            return r
        }

        function g5(e) {
            if (e === null) return null;
            do e = e.return; while (e && e.tag !== 5);
            return e || null
        }

        function Bp(e, t, n, r, i) {
            for (var s = t._reactName, c = []; n !== null && n !== r;) {
                var u = n,
                    f = u.alternate,
                    p = u.stateNode;
                if (f !== null && f === r) break;
                u.tag === 5 && p !== null && (u = p, i ? (f = pi(n, s), f != null && c.unshift(Ei(n, f, u))) : i || (f = pi(n, s), f != null && c.push(Ei(n, f, u)))), n = n.return
            }
            c.length !== 0 && e.push({
                event: t,
                listeners: c
            })
        }
        var _M = /\r\n?/g,
            wM = /\u0000|\uFFFD/g;

        function Up(e) {
            return (typeof e == "string" ? e : "" + e).replace(_M, `
`).replace(wM, "")
        }

        function C2(e, t, n) {
            if (t = Up(t), Up(e) !== t && n) throw Error($(425))
        }

        function W2() {}
        var hu = null,
            pu = null;

        function mu(e, t) {
            return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
        }
        var vu = typeof setTimeout == "function" ? setTimeout : void 0,
            EM = typeof clearTimeout == "function" ? clearTimeout : void 0,
            jp = typeof Promise == "function" ? Promise : void 0,
            AM = typeof queueMicrotask == "function" ? queueMicrotask : typeof jp < "u" ? function(e) {
                return jp.resolve(null).then(e).catch(bM)
            } : vu;

        function bM(e) {
            setTimeout(function() {
                throw e
            })
        }

        function Nc(e, t) {
            var n = t,
                r = 0;
            do {
                var i = n.nextSibling;
                if (e.removeChild(n), i && i.nodeType === 8)
                    if (n = i.data, n === "/$") {
                        if (r === 0) {
                            e.removeChild(i), gi(t);
                            return
                        }
                        r--
                    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
                n = i
            } while (n);
            gi(t)
        }

        function N1(e) {
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

        function Gp(e) {
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
        var G5 = Math.random().toString(36).slice(2),
            Cr = "__reactFiber$" + G5,
            Ai = "__reactProps$" + G5,
            Yr = "__reactContainer$" + G5,
            gu = "__reactEvents$" + G5,
            CM = "__reactListeners$" + G5,
            xM = "__reactHandles$" + G5;

        function x0(e) {
            var t = e[Cr];
            if (t) return t;
            for (var n = e.parentNode; n;) {
                if (t = n[Yr] || n[Cr]) {
                    if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
                        for (e = Gp(e); e !== null;) {
                            if (n = e[Cr]) return n;
                            e = Gp(e)
                        }
                    return t
                }
                e = n, n = e.parentNode
            }
            return null
        }

        function ki(e) {
            return e = e[Cr] || e[Yr], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
        }

        function b5(e) {
            if (e.tag === 5 || e.tag === 6) return e.stateNode;
            throw Error($(33))
        }

        function ps(e) {
            return e[Ai] || null
        }
        var yu = [],
            C5 = -1;

        function G1(e) {
            return {
                current: e
            }
        }

        function Be(e) {
            0 > C5 || (e.current = yu[C5], yu[C5] = null, C5--)
        }

        function He(e, t) {
            C5++, yu[C5] = e.current, e.current = t
        }
        var U1 = {},
            Pt = G1(U1),
            nn = G1(!1),
            I0 = U1;

        function V5(e, t) {
            var n = e.type.contextTypes;
            if (!n) return U1;
            var r = e.stateNode;
            if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
            var i = {},
                s;
            for (s in n) i[s] = t[s];
            return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i
        }

        function rn(e) {
            return e = e.childContextTypes, e != null
        }

        function K2() {
            Be(nn), Be(Pt)
        }

        function zp(e, t, n) {
            if (Pt.current !== U1) throw Error($(168));
            He(Pt, t), He(nn, n)
        }

        function m8(e, t, n) {
            var r = e.stateNode;
            if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
            r = r.getChildContext();
            for (var i in r)
                if (!(i in t)) throw Error($(108, fS(e) || "Unknown", i));
            return Ke({}, n, r)
        }

        function Q2(e) {
            return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || U1, I0 = Pt.current, He(Pt, e), He(nn, nn.current), !0
        }

        function $p(e, t, n) {
            var r = e.stateNode;
            if (!r) throw Error($(169));
            n ? (e = m8(e, t, I0), r.__reactInternalMemoizedMergedChildContext = e, Be(nn), Be(Pt), He(Pt, e)) : Be(nn), He(nn, n)
        }
        var qr = null,
            ms = !1,
            Vc = !1;

        function v8(e) {
            qr === null ? qr = [e] : qr.push(e)
        }

        function SM(e) {
            ms = !0, v8(e)
        }

        function z1() {
            if (!Vc && qr !== null) {
                Vc = !0;
                var e = 0,
                    t = ke;
                try {
                    var n = qr;
                    for (ke = 1; e < n.length; e++) {
                        var r = n[e];
                        do r = r(!0); while (r !== null)
                    }
                    qr = null, ms = !1
                } catch (i) {
                    throw qr !== null && (qr = qr.slice(e + 1)), B6(zu, z1), i
                } finally {
                    ke = t, Vc = !1
                }
            }
            return null
        }
        var x5 = [],
            S5 = 0,
            X2 = null,
            Y2 = 0,
            Ln = [],
            Rn = 0,
            k0 = null,
            Wr = 1,
            Kr = "";

        function b0(e, t) {
            x5[S5++] = Y2, x5[S5++] = X2, X2 = e, Y2 = t
        }

        function g8(e, t, n) {
            Ln[Rn++] = Wr, Ln[Rn++] = Kr, Ln[Rn++] = k0, k0 = e;
            var r = Wr;
            e = Kr;
            var i = 32 - tr(r) - 1;
            r &= ~(1 << i), n += 1;
            var s = 32 - tr(t) + i;
            if (30 < s) {
                var c = i - i % 5;
                s = (r & (1 << c) - 1).toString(32), r >>= c, i -= c, Wr = 1 << 32 - tr(t) + i | n << i | r, Kr = s + e
            } else Wr = 1 << s | n << i | r, Kr = e
        }

        function e4(e) {
            e.return !== null && (b0(e, 1), g8(e, 1, 0))
        }

        function t4(e) {
            for (; e === X2;) X2 = x5[--S5], x5[S5] = null, Y2 = x5[--S5], x5[S5] = null;
            for (; e === k0;) k0 = Ln[--Rn], Ln[Rn] = null, Kr = Ln[--Rn], Ln[Rn] = null, Wr = Ln[--Rn], Ln[Rn] = null
        }
        var mn = null,
            pn = null,
            ze = !1,
            er = null;

        function y8(e, t) {
            var n = Pn(5, null, null, 0);
            n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n)
        }

        function qp(e, t) {
            switch (e.tag) {
                case 5:
                    var n = e.type;
                    return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, mn = e, pn = N1(t.firstChild), !0) : !1;
                case 6:
                    return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, mn = e, pn = null, !0) : !1;
                case 13:
                    return t = t.nodeType !== 8 ? null : t, t !== null ? (n = k0 !== null ? {
                        id: Wr,
                        overflow: Kr
                    } : null, e.memoizedState = {
                        dehydrated: t,
                        treeContext: n,
                        retryLane: 1073741824
                    }, n = Pn(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, mn = e, pn = null, !0) : !1;
                default:
                    return !1
            }
        }

        function _u(e) {
            return (e.mode & 1) !== 0 && (e.flags & 128) === 0
        }

        function wu(e) {
            if (ze) {
                var t = pn;
                if (t) {
                    var n = t;
                    if (!qp(e, t)) {
                        if (_u(e)) throw Error($(418));
                        t = N1(n.nextSibling);
                        var r = mn;
                        t && qp(e, t) ? y8(r, n) : (e.flags = e.flags & -4097 | 2, ze = !1, mn = e)
                    }
                } else {
                    if (_u(e)) throw Error($(418));
                    e.flags = e.flags & -4097 | 2, ze = !1, mn = e
                }
            }
        }

        function Wp(e) {
            for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
            mn = e
        }

        function x2(e) {
            if (e !== mn) return !1;
            if (!ze) return Wp(e), ze = !0, !1;
            var t;
            if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !mu(e.type, e.memoizedProps)), t && (t = pn)) {
                if (_u(e)) throw _8(), Error($(418));
                for (; t;) y8(e, t), t = N1(t.nextSibling)
            }
            if (Wp(e), e.tag === 13) {
                if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error($(317));
                e: {
                    for (e = e.nextSibling, t = 0; e;) {
                        if (e.nodeType === 8) {
                            var n = e.data;
                            if (n === "/$") {
                                if (t === 0) {
                                    pn = N1(e.nextSibling);
                                    break e
                                }
                                t--
                            } else n !== "$" && n !== "$!" && n !== "$?" || t++
                        }
                        e = e.nextSibling
                    }
                    pn = null
                }
            } else pn = mn ? N1(e.stateNode.nextSibling) : null;
            return !0
        }

        function _8() {
            for (var e = pn; e;) e = N1(e.nextSibling)
        }

        function H5() {
            pn = mn = null, ze = !1
        }

        function n4(e) {
            er === null ? er = [e] : er.push(e)
        }
        var MM = t1.ReactCurrentBatchConfig;

        function Yn(e, t) {
            if (e && e.defaultProps) {
                t = Ke({}, t), e = e.defaultProps;
                for (var n in e) t[n] === void 0 && (t[n] = e[n]);
                return t
            }
            return t
        }
        var J2 = G1(null),
            es = null,
            M5 = null,
            r4 = null;

        function a4() {
            r4 = M5 = es = null
        }

        function i4(e) {
            var t = J2.current;
            Be(J2), e._currentValue = t
        }

        function Eu(e, t, n) {
            for (; e !== null;) {
                var r = e.alternate;
                if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
                e = e.return
            }
        }

        function R5(e, t) {
            es = e, r4 = M5 = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (tn = !0), e.firstContext = null)
        }

        function Vn(e) {
            var t = e._currentValue;
            if (r4 !== e)
                if (e = {
                        context: e,
                        memoizedValue: t,
                        next: null
                    }, M5 === null) {
                    if (es === null) throw Error($(308));
                    M5 = e, es.dependencies = {
                        lanes: 0,
                        firstContext: e
                    }
                } else M5 = M5.next = e;
            return t
        }
        var S0 = null;

        function o4(e) {
            S0 === null ? S0 = [e] : S0.push(e)
        }

        function w8(e, t, n, r) {
            var i = t.interleaved;
            return i === null ? (n.next = n, o4(t)) : (n.next = i.next, i.next = n), t.interleaved = n, Jr(e, r)
        }

        function Jr(e, t) {
            e.lanes |= t;
            var n = e.alternate;
            for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
            return n.tag === 3 ? n.stateNode : null
        }
        var Z1 = !1;

        function s4(e) {
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

        function E8(e, t) {
            e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects
            })
        }

        function Qr(e, t) {
            return {
                eventTime: e,
                lane: t,
                tag: 0,
                payload: null,
                callback: null,
                next: null
            }
        }

        function V1(e, t, n) {
            var r = e.updateQueue;
            if (r === null) return null;
            if (r = r.shared, be & 2) {
                var i = r.pending;
                return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, Jr(e, n)
            }
            return i = r.interleaved, i === null ? (t.next = t, o4(r)) : (t.next = i.next, i.next = t), r.interleaved = t, Jr(e, n)
        }

        function L2(e, t, n) {
            if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
                var r = t.lanes;
                r &= e.pendingLanes, n |= r, t.lanes = n, $u(e, n)
            }
        }

        function Kp(e, t) {
            var n = e.updateQueue,
                r = e.alternate;
            if (r !== null && (r = r.updateQueue, n === r)) {
                var i = null,
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
                        s === null ? i = s = c : s = s.next = c, n = n.next
                    } while (n !== null);
                    s === null ? i = s = t : s = s.next = t
                } else i = s = t;
                n = {
                    baseState: r.baseState,
                    firstBaseUpdate: i,
                    lastBaseUpdate: s,
                    shared: r.shared,
                    effects: r.effects
                }, e.updateQueue = n;
                return
            }
            e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
        }

        function ts(e, t, n, r) {
            var i = e.updateQueue;
            Z1 = !1;
            var s = i.firstBaseUpdate,
                c = i.lastBaseUpdate,
                u = i.shared.pending;
            if (u !== null) {
                i.shared.pending = null;
                var f = u,
                    p = f.next;
                f.next = null, c === null ? s = p : c.next = p, c = f;
                var h = e.alternate;
                h !== null && (h = h.updateQueue, u = h.lastBaseUpdate, u !== c && (u === null ? h.firstBaseUpdate = p : u.next = p, h.lastBaseUpdate = f))
            }
            if (s !== null) {
                var w = i.baseState;
                c = 0, h = p = f = null, u = s;
                do {
                    var v = u.lane,
                        _ = u.eventTime;
                    if ((r & v) === v) {
                        h !== null && (h = h.next = {
                            eventTime: _,
                            lane: 0,
                            tag: u.tag,
                            payload: u.payload,
                            callback: u.callback,
                            next: null
                        });
                        e: {
                            var S = e,
                                I = u;
                            switch (v = t, _ = n, I.tag) {
                                case 1:
                                    if (S = I.payload, typeof S == "function") {
                                        w = S.call(_, w, v);
                                        break e
                                    }
                                    w = S;
                                    break e;
                                case 3:
                                    S.flags = S.flags & -65537 | 128;
                                case 0:
                                    if (S = I.payload, v = typeof S == "function" ? S.call(_, w, v) : S, v == null) break e;
                                    w = Ke({}, w, v);
                                    break e;
                                case 2:
                                    Z1 = !0
                            }
                        }
                        u.callback !== null && u.lane !== 0 && (e.flags |= 64, v = i.effects, v === null ? i.effects = [u] : v.push(u))
                    } else _ = {
                        eventTime: _,
                        lane: v,
                        tag: u.tag,
                        payload: u.payload,
                        callback: u.callback,
                        next: null
                    }, h === null ? (p = h = _, f = w) : h = h.next = _, c |= v;
                    if (u = u.next, u === null) {
                        if (u = i.shared.pending, u === null) break;
                        v = u, u = v.next, v.next = null, i.lastBaseUpdate = v, i.shared.pending = null
                    }
                } while (1);
                if (h === null && (f = w), i.baseState = f, i.firstBaseUpdate = p, i.lastBaseUpdate = h, t = i.shared.interleaved, t !== null) {
                    i = t;
                    do c |= i.lane, i = i.next; while (i !== t)
                } else s === null && (i.shared.lanes = 0);
                L0 |= c, e.lanes = c, e.memoizedState = w
            }
        }

        function Qp(e, t, n) {
            if (e = t.effects, t.effects = null, e !== null)
                for (t = 0; t < e.length; t++) {
                    var r = e[t],
                        i = r.callback;
                    if (i !== null) {
                        if (r.callback = null, r = n, typeof i != "function") throw Error($(191, i));
                        i.call(r)
                    }
                }
        }
        var A8 = new w6.Component().refs;

        function Au(e, t, n, r) {
            t = e.memoizedState, n = n(r, t), n = n == null ? t : Ke({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n)
        }
        var vs = {
            isMounted: function(e) {
                return (e = e._reactInternals) ? N0(e) === e : !1
            },
            enqueueSetState: function(e, t, n) {
                e = e._reactInternals;
                var r = $t(),
                    i = D1(e),
                    s = Qr(r, i);
                s.payload = t, n != null && (s.callback = n), t = V1(e, s, i), t !== null && (nr(t, e, i, r), L2(t, e, i))
            },
            enqueueReplaceState: function(e, t, n) {
                e = e._reactInternals;
                var r = $t(),
                    i = D1(e),
                    s = Qr(r, i);
                s.tag = 1, s.payload = t, n != null && (s.callback = n), t = V1(e, s, i), t !== null && (nr(t, e, i, r), L2(t, e, i))
            },
            enqueueForceUpdate: function(e, t) {
                e = e._reactInternals;
                var n = $t(),
                    r = D1(e),
                    i = Qr(n, r);
                i.tag = 2, t != null && (i.callback = t), t = V1(e, i, r), t !== null && (nr(t, e, r, n), L2(t, e, r))
            }
        };

        function Xp(e, t, n, r, i, s, c) {
            return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, s, c) : t.prototype && t.prototype.isPureReactComponent ? !_i(n, r) || !_i(i, s) : !0
        }

        function b8(e, t, n) {
            var r = !1,
                i = U1,
                s = t.contextType;
            return typeof s == "object" && s !== null ? s = Vn(s) : (i = rn(t) ? I0 : Pt.current, r = t.contextTypes, s = (r = r != null) ? V5(e, i) : U1), t = new t(n, s), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = vs, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = s), t
        }

        function Yp(e, t, n, r) {
            e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && vs.enqueueReplaceState(t, t.state, null)
        }

        function bu(e, t, n, r) {
            var i = e.stateNode;
            i.props = n, i.state = e.memoizedState, i.refs = A8, s4(e);
            var s = t.contextType;
            typeof s == "object" && s !== null ? i.context = Vn(s) : (s = rn(t) ? I0 : Pt.current, i.context = V5(e, s)), i.state = e.memoizedState, s = t.getDerivedStateFromProps, typeof s == "function" && (Au(e, t, s, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && vs.enqueueReplaceState(i, i.state, null), ts(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308)
        }

        function Ka(e, t, n) {
            if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
                if (n._owner) {
                    if (n = n._owner, n) {
                        if (n.tag !== 1) throw Error($(309));
                        var r = n.stateNode
                    }
                    if (!r) throw Error($(147, e));
                    var i = r,
                        s = "" + e;
                    return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === s ? t.ref : (t = function(c) {
                        var u = i.refs;
                        u === A8 && (u = i.refs = {}), c === null ? delete u[s] : u[s] = c
                    }, t._stringRef = s, t)
                }
                if (typeof e != "string") throw Error($(284));
                if (!n._owner) throw Error($(290, e))
            }
            return e
        }

        function S2(e, t) {
            throw e = Object.prototype.toString.call(t), Error($(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
        }

        function Jp(e) {
            var t = e._init;
            return t(e._payload)
        }

        function C8(e) {
            function t(b, C) {
                if (e) {
                    var x = b.deletions;
                    x === null ? (b.deletions = [C], b.flags |= 16) : x.push(C)
                }
            }

            function n(b, C) {
                if (!e) return null;
                for (; C !== null;) t(b, C), C = C.sibling;
                return null
            }

            function r(b, C) {
                for (b = new Map; C !== null;) C.key !== null ? b.set(C.key, C) : b.set(C.index, C), C = C.sibling;
                return b
            }

            function i(b, C) {
                return b = F1(b, C), b.index = 0, b.sibling = null, b
            }

            function s(b, C, x) {
                return b.index = x, e ? (x = b.alternate, x !== null ? (x = x.index, x < C ? (b.flags |= 2, C) : x) : (b.flags |= 2, C)) : (b.flags |= 1048576, C)
            }

            function c(b) {
                return e && b.alternate === null && (b.flags |= 2), b
            }

            function u(b, C, x, Z) {
                return C === null || C.tag !== 6 ? (C = Gc(x, b.mode, Z), C.return = b, C) : (C = i(C, x), C.return = b, C)
            }

            function f(b, C, x, Z) {
                var T = x.type;
                return T === _5 ? h(b, C, x.props.children, Z, x.key) : C !== null && (C.elementType === T || typeof T == "object" && T !== null && T.$$typeof === M1 && Jp(T) === C.type) ? (Z = i(C, x.props), Z.ref = Ka(b, C, x), Z.return = b, Z) : (Z = D2(x.type, x.key, x.props, null, b.mode, Z), Z.ref = Ka(b, C, x), Z.return = b, Z)
            }

            function p(b, C, x, Z) {
                return C === null || C.tag !== 4 || C.stateNode.containerInfo !== x.containerInfo || C.stateNode.implementation !== x.implementation ? (C = zc(x, b.mode, Z), C.return = b, C) : (C = i(C, x.children || []), C.return = b, C)
            }

            function h(b, C, x, Z, T) {
                return C === null || C.tag !== 7 ? (C = T0(x, b.mode, Z, T), C.return = b, C) : (C = i(C, x), C.return = b, C)
            }

            function w(b, C, x) {
                if (typeof C == "string" && C !== "" || typeof C == "number") return C = Gc("" + C, b.mode, x), C.return = b, C;
                if (typeof C == "object" && C !== null) {
                    switch (C.$$typeof) {
                        case f2:
                            return x = D2(C.type, C.key, C.props, null, b.mode, x), x.ref = Ka(b, null, C), x.return = b, x;
                        case y5:
                            return C = zc(C, b.mode, x), C.return = b, C;
                        case M1:
                            var Z = C._init;
                            return w(b, Z(C._payload), x)
                    }
                    if (ei(C) || za(C)) return C = T0(C, b.mode, x, null), C.return = b, C;
                    S2(b, C)
                }
                return null
            }

            function v(b, C, x, Z) {
                var T = C !== null ? C.key : null;
                if (typeof x == "string" && x !== "" || typeof x == "number") return T !== null ? null : u(b, C, "" + x, Z);
                if (typeof x == "object" && x !== null) {
                    switch (x.$$typeof) {
                        case f2:
                            return x.key === T ? f(b, C, x, Z) : null;
                        case y5:
                            return x.key === T ? p(b, C, x, Z) : null;
                        case M1:
                            return T = x._init, v(b, C, T(x._payload), Z)
                    }
                    if (ei(x) || za(x)) return T !== null ? null : h(b, C, x, Z, null);
                    S2(b, x)
                }
                return null
            }

            function _(b, C, x, Z, T) {
                if (typeof Z == "string" && Z !== "" || typeof Z == "number") return b = b.get(x) || null, u(C, b, "" + Z, T);
                if (typeof Z == "object" && Z !== null) {
                    switch (Z.$$typeof) {
                        case f2:
                            return b = b.get(Z.key === null ? x : Z.key) || null, f(C, b, Z, T);
                        case y5:
                            return b = b.get(Z.key === null ? x : Z.key) || null, p(C, b, Z, T);
                        case M1:
                            var P = Z._init;
                            return _(b, C, x, P(Z._payload), T)
                    }
                    if (ei(Z) || za(Z)) return b = b.get(x) || null, h(C, b, Z, T, null);
                    S2(C, Z)
                }
                return null
            }

            function S(b, C, x, Z) {
                for (var T = null, P = null, N = C, H = C = 0, le = null; N !== null && H < x.length; H++) {
                    N.index > H ? (le = N, N = null) : le = N.sibling;
                    var te = v(b, N, x[H], Z);
                    if (te === null) {
                        N === null && (N = le);
                        break
                    }
                    e && N && te.alternate === null && t(b, N), C = s(te, C, H), P === null ? T = te : P.sibling = te, P = te, N = le
                }
                if (H === x.length) return n(b, N), ze && b0(b, H), T;
                if (N === null) {
                    for (; H < x.length; H++) N = w(b, x[H], Z), N !== null && (C = s(N, C, H), P === null ? T = N : P.sibling = N, P = N);
                    return ze && b0(b, H), T
                }
                for (N = r(b, N); H < x.length; H++) le = _(N, b, H, x[H], Z), le !== null && (e && le.alternate !== null && N.delete(le.key === null ? H : le.key), C = s(le, C, H), P === null ? T = le : P.sibling = le, P = le);
                return e && N.forEach(function(z) {
                    return t(b, z)
                }), ze && b0(b, H), T
            }

            function I(b, C, x, Z) {
                var T = za(x);
                if (typeof T != "function") throw Error($(150));
                if (x = T.call(x), x == null) throw Error($(151));
                for (var P = T = null, N = C, H = C = 0, le = null, te = x.next(); N !== null && !te.done; H++, te = x.next()) {
                    N.index > H ? (le = N, N = null) : le = N.sibling;
                    var z = v(b, N, te.value, Z);
                    if (z === null) {
                        N === null && (N = le);
                        break
                    }
                    e && N && z.alternate === null && t(b, N), C = s(z, C, H), P === null ? T = z : P.sibling = z, P = z, N = le
                }
                if (te.done) return n(b, N), ze && b0(b, H), T;
                if (N === null) {
                    for (; !te.done; H++, te = x.next()) te = w(b, te.value, Z), te !== null && (C = s(te, C, H), P === null ? T = te : P.sibling = te, P = te);
                    return ze && b0(b, H), T
                }
                for (N = r(b, N); !te.done; H++, te = x.next()) te = _(N, b, H, te.value, Z), te !== null && (e && te.alternate !== null && N.delete(te.key === null ? H : te.key), C = s(te, C, H), P === null ? T = te : P.sibling = te, P = te);
                return e && N.forEach(function(G) {
                    return t(b, G)
                }), ze && b0(b, H), T
            }

            function R(b, C, x, Z) {
                if (typeof x == "object" && x !== null && x.type === _5 && x.key === null && (x = x.props.children), typeof x == "object" && x !== null) {
                    switch (x.$$typeof) {
                        case f2:
                            e: {
                                for (var T = x.key, P = C; P !== null;) {
                                    if (P.key === T) {
                                        if (T = x.type, T === _5) {
                                            if (P.tag === 7) {
                                                n(b, P.sibling), C = i(P, x.props.children), C.return = b, b = C;
                                                break e
                                            }
                                        } else if (P.elementType === T || typeof T == "object" && T !== null && T.$$typeof === M1 && Jp(T) === P.type) {
                                            n(b, P.sibling), C = i(P, x.props), C.ref = Ka(b, P, x), C.return = b, b = C;
                                            break e
                                        }
                                        n(b, P);
                                        break
                                    } else t(b, P);
                                    P = P.sibling
                                }
                                x.type === _5 ? (C = T0(x.props.children, b.mode, Z, x.key), C.return = b, b = C) : (Z = D2(x.type, x.key, x.props, null, b.mode, Z), Z.ref = Ka(b, C, x), Z.return = b, b = Z)
                            }
                            return c(b);
                        case y5:
                            e: {
                                for (P = x.key; C !== null;) {
                                    if (C.key === P)
                                        if (C.tag === 4 && C.stateNode.containerInfo === x.containerInfo && C.stateNode.implementation === x.implementation) {
                                            n(b, C.sibling), C = i(C, x.children || []), C.return = b, b = C;
                                            break e
                                        } else {
                                            n(b, C);
                                            break
                                        }
                                    else t(b, C);
                                    C = C.sibling
                                }
                                C = zc(x, b.mode, Z),
                                C.return = b,
                                b = C
                            }
                            return c(b);
                        case M1:
                            return P = x._init, R(b, C, P(x._payload), Z)
                    }
                    if (ei(x)) return S(b, C, x, Z);
                    if (za(x)) return I(b, C, x, Z);
                    S2(b, x)
                }
                return typeof x == "string" && x !== "" || typeof x == "number" ? (x = "" + x, C !== null && C.tag === 6 ? (n(b, C.sibling), C = i(C, x), C.return = b, b = C) : (n(b, C), C = Gc(x, b.mode, Z), C.return = b, b = C), c(b)) : n(b, C)
            }
            return R
        }
        var D5 = C8(!0),
            x8 = C8(!1),
            Oi = {},
            Sr = G1(Oi),
            bi = G1(Oi),
            Ci = G1(Oi);

        function M0(e) {
            if (e === Oi) throw Error($(174));
            return e
        }

        function l4(e, t) {
            switch (He(Ci, t), He(bi, e), He(Sr, Oi), e = t.nodeType, e) {
                case 9:
                case 11:
                    t = (t = t.documentElement) ? t.namespaceURI : tu(null, "");
                    break;
                default:
                    e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = tu(t, e)
            }
            Be(Sr), He(Sr, t)
        }

        function F5() {
            Be(Sr), Be(bi), Be(Ci)
        }

        function S8(e) {
            M0(Ci.current);
            var t = M0(Sr.current),
                n = tu(t, e.type);
            t !== n && (He(bi, e), He(Sr, n))
        }

        function c4(e) {
            bi.current === e && (Be(Sr), Be(bi))
        }
        var qe = G1(0);

        function ns(e) {
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
        var Hc = [];

        function u4() {
            for (var e = 0; e < Hc.length; e++) Hc[e]._workInProgressVersionPrimary = null;
            Hc.length = 0
        }
        var R2 = t1.ReactCurrentDispatcher,
            Dc = t1.ReactCurrentBatchConfig,
            O0 = 0,
            We = null,
            ut = null,
            mt = null,
            rs = !1,
            li = !1,
            xi = 0,
            ZM = 0;

        function Ot() {
            throw Error($(321))
        }

        function f4(e, t) {
            if (t === null) return !1;
            for (var n = 0; n < t.length && n < e.length; n++)
                if (!rr(e[n], t[n])) return !1;
            return !0
        }

        function d4(e, t, n, r, i, s) {
            if (O0 = s, We = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, R2.current = e === null || e.memoizedState === null ? OM : LM, e = n(r, i), li) {
                s = 0;
                do {
                    if (li = !1, xi = 0, 25 <= s) throw Error($(301));
                    s += 1, mt = ut = null, t.updateQueue = null, R2.current = RM, e = n(r, i)
                } while (li)
            }
            if (R2.current = as, t = ut !== null && ut.next !== null, O0 = 0, mt = ut = We = null, rs = !1, t) throw Error($(300));
            return e
        }

        function h4() {
            var e = xi !== 0;
            return xi = 0, e
        }

        function br() {
            var e = {
                memoizedState: null,
                baseState: null,
                baseQueue: null,
                queue: null,
                next: null
            };
            return mt === null ? We.memoizedState = mt = e : mt = mt.next = e, mt
        }

        function Hn() {
            if (ut === null) {
                var e = We.alternate;
                e = e !== null ? e.memoizedState : null
            } else e = ut.next;
            var t = mt === null ? We.memoizedState : mt.next;
            if (t !== null) mt = t, ut = e;
            else {
                if (e === null) throw Error($(310));
                ut = e, e = {
                    memoizedState: ut.memoizedState,
                    baseState: ut.baseState,
                    baseQueue: ut.baseQueue,
                    queue: ut.queue,
                    next: null
                }, mt === null ? We.memoizedState = mt = e : mt = mt.next = e
            }
            return mt
        }

        function Si(e, t) {
            return typeof t == "function" ? t(e) : t
        }

        function Fc(e) {
            var t = Hn(),
                n = t.queue;
            if (n === null) throw Error($(311));
            n.lastRenderedReducer = e;
            var r = ut,
                i = r.baseQueue,
                s = n.pending;
            if (s !== null) {
                if (i !== null) {
                    var c = i.next;
                    i.next = s.next, s.next = c
                }
                r.baseQueue = i = s, n.pending = null
            }
            if (i !== null) {
                s = i.next, r = r.baseState;
                var u = c = null,
                    f = null,
                    p = s;
                do {
                    var h = p.lane;
                    if ((O0 & h) === h) f !== null && (f = f.next = {
                        lane: 0,
                        action: p.action,
                        hasEagerState: p.hasEagerState,
                        eagerState: p.eagerState,
                        next: null
                    }), r = p.hasEagerState ? p.eagerState : e(r, p.action);
                    else {
                        var w = {
                            lane: h,
                            action: p.action,
                            hasEagerState: p.hasEagerState,
                            eagerState: p.eagerState,
                            next: null
                        };
                        f === null ? (u = f = w, c = r) : f = f.next = w, We.lanes |= h, L0 |= h
                    }
                    p = p.next
                } while (p !== null && p !== s);
                f === null ? c = r : f.next = u, rr(r, t.memoizedState) || (tn = !0), t.memoizedState = r, t.baseState = c, t.baseQueue = f, n.lastRenderedState = r
            }
            if (e = n.interleaved, e !== null) {
                i = e;
                do s = i.lane, We.lanes |= s, L0 |= s, i = i.next; while (i !== e)
            } else i === null && (n.lanes = 0);
            return [t.memoizedState, n.dispatch]
        }

        function Bc(e) {
            var t = Hn(),
                n = t.queue;
            if (n === null) throw Error($(311));
            n.lastRenderedReducer = e;
            var r = n.dispatch,
                i = n.pending,
                s = t.memoizedState;
            if (i !== null) {
                n.pending = null;
                var c = i = i.next;
                do s = e(s, c.action), c = c.next; while (c !== i);
                rr(s, t.memoizedState) || (tn = !0), t.memoizedState = s, t.baseQueue === null && (t.baseState = s), n.lastRenderedState = s
            }
            return [s, r]
        }

        function M8() {}

        function Z8(e, t) {
            var n = We,
                r = Hn(),
                i = t(),
                s = !rr(r.memoizedState, i);
            if (s && (r.memoizedState = i, tn = !0), r = r.queue, p4(k8.bind(null, n, r, e), [e]), r.getSnapshot !== t || s || mt !== null && mt.memoizedState.tag & 1) {
                if (n.flags |= 2048, Mi(9, I8.bind(null, n, r, i, t), void 0, null), vt === null) throw Error($(349));
                O0 & 30 || T8(n, t, i)
            }
            return i
        }

        function T8(e, t, n) {
            e.flags |= 16384, e = {
                getSnapshot: t,
                value: n
            }, t = We.updateQueue, t === null ? (t = {
                lastEffect: null,
                stores: null
            }, We.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e))
        }

        function I8(e, t, n, r) {
            t.value = n, t.getSnapshot = r, O8(t) && L8(e)
        }

        function k8(e, t, n) {
            return n(function() {
                O8(t) && L8(e)
            })
        }

        function O8(e) {
            var t = e.getSnapshot;
            e = e.value;
            try {
                var n = t();
                return !rr(e, n)
            } catch {
                return !0
            }
        }

        function L8(e) {
            var t = Jr(e, 1);
            t !== null && nr(t, e, 1, -1)
        }

        function e6(e) {
            var t = br();
            return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Si,
                lastRenderedState: e
            }, t.queue = e, e = e.dispatch = kM.bind(null, We, e), [t.memoizedState, e]
        }

        function Mi(e, t, n, r) {
            return e = {
                tag: e,
                create: t,
                destroy: n,
                deps: r,
                next: null
            }, t = We.updateQueue, t === null ? (t = {
                lastEffect: null,
                stores: null
            }, We.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e
        }

        function R8() {
            return Hn().memoizedState
        }

        function P2(e, t, n, r) {
            var i = br();
            We.flags |= e, i.memoizedState = Mi(1 | t, n, void 0, r === void 0 ? null : r)
        }

        function gs(e, t, n, r) {
            var i = Hn();
            r = r === void 0 ? null : r;
            var s = void 0;
            if (ut !== null) {
                var c = ut.memoizedState;
                if (s = c.destroy, r !== null && f4(r, c.deps)) {
                    i.memoizedState = Mi(t, n, s, r);
                    return
                }
            }
            We.flags |= e, i.memoizedState = Mi(1 | t, n, s, r)
        }

        function t6(e, t) {
            return P2(8390656, 8, e, t)
        }

        function p4(e, t) {
            return gs(2048, 8, e, t)
        }

        function P8(e, t) {
            return gs(4, 2, e, t)
        }

        function N8(e, t) {
            return gs(4, 4, e, t)
        }

        function V8(e, t) {
            if (typeof t == "function") return e = e(), t(e),
                function() {
                    t(null)
                };
            if (t != null) return e = e(), t.current = e,
                function() {
                    t.current = null
                }
        }

        function H8(e, t, n) {
            return n = n != null ? n.concat([e]) : null, gs(4, 4, V8.bind(null, t, e), n)
        }

        function m4() {}

        function D8(e, t) {
            var n = Hn();
            t = t === void 0 ? null : t;
            var r = n.memoizedState;
            return r !== null && t !== null && f4(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
        }

        function F8(e, t) {
            var n = Hn();
            t = t === void 0 ? null : t;
            var r = n.memoizedState;
            return r !== null && t !== null && f4(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
        }

        function B8(e, t, n) {
            return O0 & 21 ? (rr(n, t) || (n = G6(), We.lanes |= n, L0 |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, tn = !0), e.memoizedState = n)
        }

        function TM(e, t) {
            var n = ke;
            ke = n !== 0 && 4 > n ? n : 4, e(!0);
            var r = Dc.transition;
            Dc.transition = {};
            try {
                e(!1), t()
            } finally {
                ke = n, Dc.transition = r
            }
        }

        function U8() {
            return Hn().memoizedState
        }

        function IM(e, t, n) {
            var r = D1(e);
            if (n = {
                    lane: r,
                    action: n,
                    hasEagerState: !1,
                    eagerState: null,
                    next: null
                }, j8(e)) G8(t, n);
            else if (n = w8(e, t, n, r), n !== null) {
                var i = $t();
                nr(n, e, r, i), z8(n, t, r)
            }
        }

        function kM(e, t, n) {
            var r = D1(e),
                i = {
                    lane: r,
                    action: n,
                    hasEagerState: !1,
                    eagerState: null,
                    next: null
                };
            if (j8(e)) G8(t, i);
            else {
                var s = e.alternate;
                if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = t.lastRenderedReducer, s !== null)) try {
                    var c = t.lastRenderedState,
                        u = s(c, n);
                    if (i.hasEagerState = !0, i.eagerState = u, rr(u, c)) {
                        var f = t.interleaved;
                        f === null ? (i.next = i, o4(t)) : (i.next = f.next, f.next = i), t.interleaved = i;
                        return
                    }
                } catch {} finally {}
                n = w8(e, t, i, r), n !== null && (i = $t(), nr(n, e, r, i), z8(n, t, r))
            }
        }

        function j8(e) {
            var t = e.alternate;
            return e === We || t !== null && t === We
        }

        function G8(e, t) {
            li = rs = !0;
            var n = e.pending;
            n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
        }

        function z8(e, t, n) {
            if (n & 4194240) {
                var r = t.lanes;
                r &= e.pendingLanes, n |= r, t.lanes = n, $u(e, n)
            }
        }
        var as = {
                readContext: Vn,
                useCallback: Ot,
                useContext: Ot,
                useEffect: Ot,
                useImperativeHandle: Ot,
                useInsertionEffect: Ot,
                useLayoutEffect: Ot,
                useMemo: Ot,
                useReducer: Ot,
                useRef: Ot,
                useState: Ot,
                useDebugValue: Ot,
                useDeferredValue: Ot,
                useTransition: Ot,
                useMutableSource: Ot,
                useSyncExternalStore: Ot,
                useId: Ot,
                unstable_isNewReconciler: !1
            },
            OM = {
                readContext: Vn,
                useCallback: function(e, t) {
                    return br().memoizedState = [e, t === void 0 ? null : t], e
                },
                useContext: Vn,
                useEffect: t6,
                useImperativeHandle: function(e, t, n) {
                    return n = n != null ? n.concat([e]) : null, P2(4194308, 4, V8.bind(null, t, e), n)
                },
                useLayoutEffect: function(e, t) {
                    return P2(4194308, 4, e, t)
                },
                useInsertionEffect: function(e, t) {
                    return P2(4, 2, e, t)
                },
                useMemo: function(e, t) {
                    var n = br();
                    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e
                },
                useReducer: function(e, t, n) {
                    var r = br();
                    return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
                        pending: null,
                        interleaved: null,
                        lanes: 0,
                        dispatch: null,
                        lastRenderedReducer: e,
                        lastRenderedState: t
                    }, r.queue = e, e = e.dispatch = IM.bind(null, We, e), [r.memoizedState, e]
                },
                useRef: function(e) {
                    var t = br();
                    return e = {
                        current: e
                    }, t.memoizedState = e
                },
                useState: e6,
                useDebugValue: m4,
                useDeferredValue: function(e) {
                    return br().memoizedState = e
                },
                useTransition: function() {
                    var e = e6(!1),
                        t = e[0];
                    return e = TM.bind(null, e[1]), br().memoizedState = e, [t, e]
                },
                useMutableSource: function() {},
                useSyncExternalStore: function(e, t, n) {
                    var r = We,
                        i = br();
                    if (ze) {
                        if (n === void 0) throw Error($(407));
                        n = n()
                    } else {
                        if (n = t(), vt === null) throw Error($(349));
                        O0 & 30 || T8(r, t, n)
                    }
                    i.memoizedState = n;
                    var s = {
                        value: n,
                        getSnapshot: t
                    };
                    return i.queue = s, t6(k8.bind(null, r, s, e), [e]), r.flags |= 2048, Mi(9, I8.bind(null, r, s, n, t), void 0, null), n
                },
                useId: function() {
                    var e = br(),
                        t = vt.identifierPrefix;
                    if (ze) {
                        var n = Kr,
                            r = Wr;
                        n = (r & ~(1 << 32 - tr(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = xi++, 0 < n && (t += "H" + n.toString(32)), t += ":"
                    } else n = ZM++, t = ":" + t + "r" + n.toString(32) + ":";
                    return e.memoizedState = t
                },
                unstable_isNewReconciler: !1
            },
            LM = {
                readContext: Vn,
                useCallback: D8,
                useContext: Vn,
                useEffect: p4,
                useImperativeHandle: H8,
                useInsertionEffect: P8,
                useLayoutEffect: N8,
                useMemo: F8,
                useReducer: Fc,
                useRef: R8,
                useState: function() {
                    return Fc(Si)
                },
                useDebugValue: m4,
                useDeferredValue: function(e) {
                    var t = Hn();
                    return B8(t, ut.memoizedState, e)
                },
                useTransition: function() {
                    var e = Fc(Si)[0],
                        t = Hn().memoizedState;
                    return [e, t]
                },
                useMutableSource: M8,
                useSyncExternalStore: Z8,
                useId: U8,
                unstable_isNewReconciler: !1
            },
            RM = {
                readContext: Vn,
                useCallback: D8,
                useContext: Vn,
                useEffect: p4,
                useImperativeHandle: H8,
                useInsertionEffect: P8,
                useLayoutEffect: N8,
                useMemo: F8,
                useReducer: Bc,
                useRef: R8,
                useState: function() {
                    return Bc(Si)
                },
                useDebugValue: m4,
                useDeferredValue: function(e) {
                    var t = Hn();
                    return ut === null ? t.memoizedState = e : B8(t, ut.memoizedState, e)
                },
                useTransition: function() {
                    var e = Bc(Si)[0],
                        t = Hn().memoizedState;
                    return [e, t]
                },
                useMutableSource: M8,
                useSyncExternalStore: Z8,
                useId: U8,
                unstable_isNewReconciler: !1
            };

        function B5(e, t) {
            try {
                var n = "",
                    r = t;
                do n += uS(r), r = r.return; while (r);
                var i = n
            } catch (s) {
                i = `
Error generating stack: ` + s.message + `
` + s.stack
            }
            return {
                value: e,
                source: t,
                stack: i,
                digest: null
            }
        }

        function Uc(e, t, n) {
            return {
                value: e,
                source: null,
                stack: n ?? null,
                digest: t ?? null
            }
        }

        function Cu(e, t) {
            try {
                console.error(t.value)
            } catch (n) {
                setTimeout(function() {
                    throw n
                })
            }
        }
        var PM = typeof WeakMap == "function" ? WeakMap : Map;

        function $8(e, t, n) {
            n = Qr(-1, n), n.tag = 3, n.payload = {
                element: null
            };
            var r = t.value;
            return n.callback = function() {
                os || (os = !0, Ru = r), Cu(e, t)
            }, n
        }

        function q8(e, t, n) {
            n = Qr(-1, n), n.tag = 3;
            var r = e.type.getDerivedStateFromError;
            if (typeof r == "function") {
                var i = t.value;
                n.payload = function() {
                    return r(i)
                }, n.callback = function() {
                    Cu(e, t)
                }
            }
            var s = e.stateNode;
            return s !== null && typeof s.componentDidCatch == "function" && (n.callback = function() {
                Cu(e, t), typeof r != "function" && (H1 === null ? H1 = new Set([this]) : H1.add(this));
                var c = t.stack;
                this.componentDidCatch(t.value, {
                    componentStack: c !== null ? c : ""
                })
            }), n
        }

        function n6(e, t, n) {
            var r = e.pingCache;
            if (r === null) {
                r = e.pingCache = new PM;
                var i = new Set;
                r.set(t, i)
            } else i = r.get(t), i === void 0 && (i = new Set, r.set(t, i));
            i.has(n) || (i.add(n), e = KM.bind(null, e, t, n), t.then(e, e))
        }

        function r6(e) {
            do {
                var t;
                if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
                e = e.return
            } while (e !== null);
            return null
        }

        function a6(e, t, n, r, i) {
            return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Qr(-1, 1), t.tag = 2, V1(n, t, 1))), n.lanes |= 1), e)
        }
        var NM = t1.ReactCurrentOwner,
            tn = !1;

        function zt(e, t, n, r) {
            t.child = e === null ? x8(t, null, n, r) : D5(t, e.child, n, r)
        }

        function i6(e, t, n, r, i) {
            n = n.render;
            var s = t.ref;
            return R5(t, i), r = d4(e, t, n, r, s, i), n = h4(), e !== null && !tn ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, e1(e, t, i)) : (ze && n && e4(t), t.flags |= 1, zt(e, t, r, i), t.child)
        }

        function o6(e, t, n, r, i) {
            if (e === null) {
                var s = n.type;
                return typeof s == "function" && !b4(s) && s.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = s, W8(e, t, s, r, i)) : (e = D2(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e)
            }
            if (s = e.child, !(e.lanes & i)) {
                var c = s.memoizedProps;
                if (n = n.compare, n = n !== null ? n : _i, n(c, r) && e.ref === t.ref) return e1(e, t, i)
            }
            return t.flags |= 1, e = F1(s, r), e.ref = t.ref, e.return = t, t.child = e
        }

        function W8(e, t, n, r, i) {
            if (e !== null) {
                var s = e.memoizedProps;
                if (_i(s, r) && e.ref === t.ref)
                    if (tn = !1, t.pendingProps = r = s, (e.lanes & i) !== 0) e.flags & 131072 && (tn = !0);
                    else return t.lanes = e.lanes, e1(e, t, i)
            }
            return xu(e, t, n, r, i)
        }

        function K8(e, t, n) {
            var r = t.pendingProps,
                i = r.children,
                s = e !== null ? e.memoizedState : null;
            if (r.mode === "hidden")
                if (!(t.mode & 1)) t.memoizedState = {
                    baseLanes: 0,
                    cachePool: null,
                    transitions: null
                }, He(T5, hn), hn |= n;
                else {
                    if (!(n & 1073741824)) return e = s !== null ? s.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                        baseLanes: e,
                        cachePool: null,
                        transitions: null
                    }, t.updateQueue = null, He(T5, hn), hn |= e, null;
                    t.memoizedState = {
                        baseLanes: 0,
                        cachePool: null,
                        transitions: null
                    }, r = s !== null ? s.baseLanes : n, He(T5, hn), hn |= r
                }
            else s !== null ? (r = s.baseLanes | n, t.memoizedState = null) : r = n, He(T5, hn), hn |= r;
            return zt(e, t, i, n), t.child
        }

        function Q8(e, t) {
            var n = t.ref;
            (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
        }

        function xu(e, t, n, r, i) {
            var s = rn(n) ? I0 : Pt.current;
            return s = V5(t, s), R5(t, i), n = d4(e, t, n, r, s, i), r = h4(), e !== null && !tn ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, e1(e, t, i)) : (ze && r && e4(t), t.flags |= 1, zt(e, t, n, i), t.child)
        }

        function s6(e, t, n, r, i) {
            if (rn(n)) {
                var s = !0;
                Q2(t)
            } else s = !1;
            if (R5(t, i), t.stateNode === null) N2(e, t), b8(t, n, r), bu(t, n, r, i), r = !0;
            else if (e === null) {
                var c = t.stateNode,
                    u = t.memoizedProps;
                c.props = u;
                var f = c.context,
                    p = n.contextType;
                typeof p == "object" && p !== null ? p = Vn(p) : (p = rn(n) ? I0 : Pt.current, p = V5(t, p));
                var h = n.getDerivedStateFromProps,
                    w = typeof h == "function" || typeof c.getSnapshotBeforeUpdate == "function";
                w || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (u !== r || f !== p) && Yp(t, c, r, p), Z1 = !1;
                var v = t.memoizedState;
                c.state = v, ts(t, r, c, i), f = t.memoizedState, u !== r || v !== f || nn.current || Z1 ? (typeof h == "function" && (Au(t, n, h, r), f = t.memoizedState), (u = Z1 || Xp(t, n, u, r, v, f, p)) ? (w || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount()), typeof c.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof c.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = f), c.props = r, c.state = f, c.context = p, r = u) : (typeof c.componentDidMount == "function" && (t.flags |= 4194308), r = !1)
            } else {
                c = t.stateNode, E8(e, t), u = t.memoizedProps, p = t.type === t.elementType ? u : Yn(t.type, u), c.props = p, w = t.pendingProps, v = c.context, f = n.contextType, typeof f == "object" && f !== null ? f = Vn(f) : (f = rn(n) ? I0 : Pt.current, f = V5(t, f));
                var _ = n.getDerivedStateFromProps;
                (h = typeof _ == "function" || typeof c.getSnapshotBeforeUpdate == "function") || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (u !== w || v !== f) && Yp(t, c, r, f), Z1 = !1, v = t.memoizedState, c.state = v, ts(t, r, c, i);
                var S = t.memoizedState;
                u !== w || v !== S || nn.current || Z1 ? (typeof _ == "function" && (Au(t, n, _, r), S = t.memoizedState), (p = Z1 || Xp(t, n, p, r, v, S, f) || !1) ? (h || typeof c.UNSAFE_componentWillUpdate != "function" && typeof c.componentWillUpdate != "function" || (typeof c.componentWillUpdate == "function" && c.componentWillUpdate(r, S, f), typeof c.UNSAFE_componentWillUpdate == "function" && c.UNSAFE_componentWillUpdate(r, S, f)), typeof c.componentDidUpdate == "function" && (t.flags |= 4), typeof c.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof c.componentDidUpdate != "function" || u === e.memoizedProps && v === e.memoizedState || (t.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && v === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = S), c.props = r, c.state = S, c.context = f, r = p) : (typeof c.componentDidUpdate != "function" || u === e.memoizedProps && v === e.memoizedState || (t.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && v === e.memoizedState || (t.flags |= 1024), r = !1)
            }
            return Su(e, t, n, r, s, i)
        }

        function Su(e, t, n, r, i, s) {
            Q8(e, t);
            var c = (t.flags & 128) !== 0;
            if (!r && !c) return i && $p(t, n, !1), e1(e, t, s);
            r = t.stateNode, NM.current = t;
            var u = c && typeof n.getDerivedStateFromError != "function" ? null : r.render();
            return t.flags |= 1, e !== null && c ? (t.child = D5(t, e.child, null, s), t.child = D5(t, null, u, s)) : zt(e, t, u, s), t.memoizedState = r.state, i && $p(t, n, !0), t.child
        }

        function X8(e) {
            var t = e.stateNode;
            t.pendingContext ? zp(e, t.pendingContext, t.pendingContext !== t.context) : t.context && zp(e, t.context, !1), l4(e, t.containerInfo)
        }

        function l6(e, t, n, r, i) {
            return H5(), n4(i), t.flags |= 256, zt(e, t, n, r), t.child
        }
        var Mu = {
            dehydrated: null,
            treeContext: null,
            retryLane: 0
        };

        function Zu(e) {
            return {
                baseLanes: e,
                cachePool: null,
                transitions: null
            }
        }

        function Y8(e, t, n) {
            var r = t.pendingProps,
                i = qe.current,
                s = !1,
                c = (t.flags & 128) !== 0,
                u;
            if ((u = c) || (u = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), u ? (s = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), He(qe, i & 1), e === null) return wu(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (c = r.children, e = r.fallback, s ? (r = t.mode, s = t.child, c = {
                mode: "hidden",
                children: c
            }, !(r & 1) && s !== null ? (s.childLanes = 0, s.pendingProps = c) : s = ws(c, r, 0, null), e = T0(e, r, n, null), s.return = t, e.return = t, s.sibling = e, t.child = s, t.child.memoizedState = Zu(n), t.memoizedState = Mu, e) : v4(t, c));
            if (i = e.memoizedState, i !== null && (u = i.dehydrated, u !== null)) return VM(e, t, c, r, u, i, n);
            if (s) {
                s = r.fallback, c = t.mode, i = e.child, u = i.sibling;
                var f = {
                    mode: "hidden",
                    children: r.children
                };
                return !(c & 1) && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = f, t.deletions = null) : (r = F1(i, f), r.subtreeFlags = i.subtreeFlags & 14680064), u !== null ? s = F1(u, s) : (s = T0(s, c, n, null), s.flags |= 2), s.return = t, r.return = t, r.sibling = s, t.child = r, r = s, s = t.child, c = e.child.memoizedState, c = c === null ? Zu(n) : {
                    baseLanes: c.baseLanes | n,
                    cachePool: null,
                    transitions: c.transitions
                }, s.memoizedState = c, s.childLanes = e.childLanes & ~n, t.memoizedState = Mu, r
            }
            return s = e.child, e = s.sibling, r = F1(s, {
                mode: "visible",
                children: r.children
            }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r
        }

        function v4(e, t) {
            return t = ws({
                mode: "visible",
                children: t
            }, e.mode, 0, null), t.return = e, e.child = t
        }

        function M2(e, t, n, r) {
            return r !== null && n4(r), D5(t, e.child, null, n), e = v4(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
        }

        function VM(e, t, n, r, i, s, c) {
            if (n) return t.flags & 256 ? (t.flags &= -257, r = Uc(Error($(422))), M2(e, t, c, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (s = r.fallback, i = t.mode, r = ws({
                mode: "visible",
                children: r.children
            }, i, 0, null), s = T0(s, i, c, null), s.flags |= 2, r.return = t, s.return = t, r.sibling = s, t.child = r, t.mode & 1 && D5(t, e.child, null, c), t.child.memoizedState = Zu(c), t.memoizedState = Mu, s);
            if (!(t.mode & 1)) return M2(e, t, c, null);
            if (i.data === "$!") {
                if (r = i.nextSibling && i.nextSibling.dataset, r) var u = r.dgst;
                return r = u, s = Error($(419)), r = Uc(s, r, void 0), M2(e, t, c, r)
            }
            if (u = (c & e.childLanes) !== 0, tn || u) {
                if (r = vt, r !== null) {
                    switch (c & -c) {
                        case 4:
                            i = 2;
                            break;
                        case 16:
                            i = 8;
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
                            i = 32;
                            break;
                        case 536870912:
                            i = 268435456;
                            break;
                        default:
                            i = 0
                    }
                    i = i & (r.suspendedLanes | c) ? 0 : i, i !== 0 && i !== s.retryLane && (s.retryLane = i, Jr(e, i), nr(r, e, i, -1))
                }
                return A4(), r = Uc(Error($(421))), M2(e, t, c, r)
            }
            return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = QM.bind(null, e), i._reactRetry = t, null) : (e = s.treeContext, pn = N1(i.nextSibling), mn = t, ze = !0, er = null, e !== null && (Ln[Rn++] = Wr, Ln[Rn++] = Kr, Ln[Rn++] = k0, Wr = e.id, Kr = e.overflow, k0 = t), t = v4(t, r.children), t.flags |= 4096, t)
        }

        function c6(e, t, n) {
            e.lanes |= t;
            var r = e.alternate;
            r !== null && (r.lanes |= t), Eu(e.return, t, n)
        }

        function jc(e, t, n, r, i) {
            var s = e.memoizedState;
            s === null ? e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: i
            } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = r, s.tail = n, s.tailMode = i)
        }

        function J8(e, t, n) {
            var r = t.pendingProps,
                i = r.revealOrder,
                s = r.tail;
            if (zt(e, t, r.children, n), r = qe.current, r & 2) r = r & 1 | 2, t.flags |= 128;
            else {
                if (e !== null && e.flags & 128) e: for (e = t.child; e !== null;) {
                    if (e.tag === 13) e.memoizedState !== null && c6(e, n, t);
                    else if (e.tag === 19) c6(e, n, t);
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
                r &= 1
            }
            if (He(qe, r), !(t.mode & 1)) t.memoizedState = null;
            else switch (i) {
                case "forwards":
                    for (n = t.child, i = null; n !== null;) e = n.alternate, e !== null && ns(e) === null && (i = n), n = n.sibling;
                    n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), jc(t, !1, i, n, s);
                    break;
                case "backwards":
                    for (n = null, i = t.child, t.child = null; i !== null;) {
                        if (e = i.alternate, e !== null && ns(e) === null) {
                            t.child = i;
                            break
                        }
                        e = i.sibling, i.sibling = n, n = i, i = e
                    }
                    jc(t, !0, n, null, s);
                    break;
                case "together":
                    jc(t, !1, null, null, void 0);
                    break;
                default:
                    t.memoizedState = null
            }
            return t.child
        }

        function N2(e, t) {
            !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2)
        }

        function e1(e, t, n) {
            if (e !== null && (t.dependencies = e.dependencies), L0 |= t.lanes, !(n & t.childLanes)) return null;
            if (e !== null && t.child !== e.child) throw Error($(153));
            if (t.child !== null) {
                for (e = t.child, n = F1(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = F1(e, e.pendingProps), n.return = t;
                n.sibling = null
            }
            return t.child
        }

        function HM(e, t, n) {
            switch (t.tag) {
                case 3:
                    X8(t), H5();
                    break;
                case 5:
                    S8(t);
                    break;
                case 1:
                    rn(t.type) && Q2(t);
                    break;
                case 4:
                    l4(t, t.stateNode.containerInfo);
                    break;
                case 10:
                    var r = t.type._context,
                        i = t.memoizedProps.value;
                    He(J2, r._currentValue), r._currentValue = i;
                    break;
                case 13:
                    if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (He(qe, qe.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Y8(e, t, n) : (He(qe, qe.current & 1), e = e1(e, t, n), e !== null ? e.sibling : null);
                    He(qe, qe.current & 1);
                    break;
                case 19:
                    if (r = (n & t.childLanes) !== 0, e.flags & 128) {
                        if (r) return J8(e, t, n);
                        t.flags |= 128
                    }
                    if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), He(qe, qe.current), r) break;
                    return null;
                case 22:
                case 23:
                    return t.lanes = 0, K8(e, t, n)
            }
            return e1(e, t, n)
        }
        var em, Tu, tm, nm;
        em = function(e, t) {
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
        Tu = function() {};
        tm = function(e, t, n, r) {
            var i = e.memoizedProps;
            if (i !== r) {
                e = t.stateNode, M0(Sr.current);
                var s = null;
                switch (n) {
                    case "input":
                        i = Xc(e, i), r = Xc(e, r), s = [];
                        break;
                    case "select":
                        i = Ke({}, i, {
                            value: void 0
                        }), r = Ke({}, r, {
                            value: void 0
                        }), s = [];
                        break;
                    case "textarea":
                        i = eu(e, i), r = eu(e, r), s = [];
                        break;
                    default:
                        typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = W2)
                }
                nu(n, r);
                var c;
                n = null;
                for (p in i)
                    if (!r.hasOwnProperty(p) && i.hasOwnProperty(p) && i[p] != null)
                        if (p === "style") {
                            var u = i[p];
                            for (c in u) u.hasOwnProperty(c) && (n || (n = {}), n[c] = "")
                        } else p !== "dangerouslySetInnerHTML" && p !== "children" && p !== "suppressContentEditableWarning" && p !== "suppressHydrationWarning" && p !== "autoFocus" && (di.hasOwnProperty(p) ? s || (s = []) : (s = s || []).push(p, null));
                for (p in r) {
                    var f = r[p];
                    if (u = i?.[p], r.hasOwnProperty(p) && f !== u && (f != null || u != null))
                        if (p === "style")
                            if (u) {
                                for (c in u) !u.hasOwnProperty(c) || f && f.hasOwnProperty(c) || (n || (n = {}), n[c] = "");
                                for (c in f) f.hasOwnProperty(c) && u[c] !== f[c] && (n || (n = {}), n[c] = f[c])
                            } else n || (s || (s = []), s.push(p, n)), n = f;
                    else p === "dangerouslySetInnerHTML" ? (f = f ? f.__html : void 0, u = u ? u.__html : void 0, f != null && u !== f && (s = s || []).push(p, f)) : p === "children" ? typeof f != "string" && typeof f != "number" || (s = s || []).push(p, "" + f) : p !== "suppressContentEditableWarning" && p !== "suppressHydrationWarning" && (di.hasOwnProperty(p) ? (f != null && p === "onScroll" && Fe("scroll", e), s || u === f || (s = [])) : (s = s || []).push(p, f))
                }
                n && (s = s || []).push("style", n);
                var p = s;
                (t.updateQueue = p) && (t.flags |= 4)
            }
        };
        nm = function(e, t, n, r) {
            n !== r && (t.flags |= 4)
        };

        function Qa(e, t) {
            if (!ze) switch (e.tailMode) {
                case "hidden":
                    t = e.tail;
                    for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
                    n === null ? e.tail = null : n.sibling = null;
                    break;
                case "collapsed":
                    n = e.tail;
                    for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
                    r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
            }
        }

        function Lt(e) {
            var t = e.alternate !== null && e.alternate.child === e.child,
                n = 0,
                r = 0;
            if (t)
                for (var i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 14680064, r |= i.flags & 14680064, i.return = e, i = i.sibling;
            else
                for (i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
            return e.subtreeFlags |= r, e.childLanes = n, t
        }

        function DM(e, t, n) {
            var r = t.pendingProps;
            switch (t4(t), t.tag) {
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
                    return Lt(t), null;
                case 1:
                    return rn(t.type) && K2(), Lt(t), null;
                case 3:
                    return r = t.stateNode, F5(), Be(nn), Be(Pt), u4(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (x2(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, er !== null && (Vu(er), er = null))), Tu(e, t), Lt(t), null;
                case 5:
                    c4(t);
                    var i = M0(Ci.current);
                    if (n = t.type, e !== null && t.stateNode != null) tm(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
                    else {
                        if (!r) {
                            if (t.stateNode === null) throw Error($(166));
                            return Lt(t), null
                        }
                        if (e = M0(Sr.current), x2(t)) {
                            r = t.stateNode, n = t.type;
                            var s = t.memoizedProps;
                            switch (r[Cr] = t, r[Ai] = s, e = (t.mode & 1) !== 0, n) {
                                case "dialog":
                                    Fe("cancel", r), Fe("close", r);
                                    break;
                                case "iframe":
                                case "object":
                                case "embed":
                                    Fe("load", r);
                                    break;
                                case "video":
                                case "audio":
                                    for (i = 0; i < ni.length; i++) Fe(ni[i], r);
                                    break;
                                case "source":
                                    Fe("error", r);
                                    break;
                                case "img":
                                case "image":
                                case "link":
                                    Fe("error", r), Fe("load", r);
                                    break;
                                case "details":
                                    Fe("toggle", r);
                                    break;
                                case "input":
                                    gp(r, s), Fe("invalid", r);
                                    break;
                                case "select":
                                    r._wrapperState = {
                                        wasMultiple: !!s.multiple
                                    }, Fe("invalid", r);
                                    break;
                                case "textarea":
                                    _p(r, s), Fe("invalid", r)
                            }
                            nu(n, s), i = null;
                            for (var c in s)
                                if (s.hasOwnProperty(c)) {
                                    var u = s[c];
                                    c === "children" ? typeof u == "string" ? r.textContent !== u && (s.suppressHydrationWarning !== !0 && C2(r.textContent, u, e), i = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (s.suppressHydrationWarning !== !0 && C2(r.textContent, u, e), i = ["children", "" + u]) : di.hasOwnProperty(c) && u != null && c === "onScroll" && Fe("scroll", r)
                                } switch (n) {
                                case "input":
                                    d2(r), yp(r, s, !0);
                                    break;
                                case "textarea":
                                    d2(r), wp(r);
                                    break;
                                case "select":
                                case "option":
                                    break;
                                default:
                                    typeof s.onClick == "function" && (r.onclick = W2)
                            }
                            r = i, t.updateQueue = r, r !== null && (t.flags |= 4)
                        } else {
                            c = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = T6(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = c.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = c.createElement(n, {
                                is: r.is
                            }) : (e = c.createElement(n), n === "select" && (c = e, r.multiple ? c.multiple = !0 : r.size && (c.size = r.size))) : e = c.createElementNS(e, n), e[Cr] = t, e[Ai] = r, em(e, t, !1, !1), t.stateNode = e;
                            e: {
                                switch (c = ru(n, r), n) {
                                    case "dialog":
                                        Fe("cancel", e), Fe("close", e), i = r;
                                        break;
                                    case "iframe":
                                    case "object":
                                    case "embed":
                                        Fe("load", e), i = r;
                                        break;
                                    case "video":
                                    case "audio":
                                        for (i = 0; i < ni.length; i++) Fe(ni[i], e);
                                        i = r;
                                        break;
                                    case "source":
                                        Fe("error", e), i = r;
                                        break;
                                    case "img":
                                    case "image":
                                    case "link":
                                        Fe("error", e), Fe("load", e), i = r;
                                        break;
                                    case "details":
                                        Fe("toggle", e), i = r;
                                        break;
                                    case "input":
                                        gp(e, r), i = Xc(e, r), Fe("invalid", e);
                                        break;
                                    case "option":
                                        i = r;
                                        break;
                                    case "select":
                                        e._wrapperState = {
                                            wasMultiple: !!r.multiple
                                        }, i = Ke({}, r, {
                                            value: void 0
                                        }), Fe("invalid", e);
                                        break;
                                    case "textarea":
                                        _p(e, r), i = eu(e, r), Fe("invalid", e);
                                        break;
                                    default:
                                        i = r
                                }
                                nu(n, i),
                                u = i;
                                for (s in u)
                                    if (u.hasOwnProperty(s)) {
                                        var f = u[s];
                                        s === "style" ? O6(e, f) : s === "dangerouslySetInnerHTML" ? (f = f ? f.__html : void 0, f != null && I6(e, f)) : s === "children" ? typeof f == "string" ? (n !== "textarea" || f !== "") && hi(e, f) : typeof f == "number" && hi(e, "" + f) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (di.hasOwnProperty(s) ? f != null && s === "onScroll" && Fe("scroll", e) : f != null && Fu(e, s, f, c))
                                    } switch (n) {
                                    case "input":
                                        d2(e), yp(e, r, !1);
                                        break;
                                    case "textarea":
                                        d2(e), wp(e);
                                        break;
                                    case "option":
                                        r.value != null && e.setAttribute("value", "" + B1(r.value));
                                        break;
                                    case "select":
                                        e.multiple = !!r.multiple, s = r.value, s != null ? I5(e, !!r.multiple, s, !1) : r.defaultValue != null && I5(e, !!r.multiple, r.defaultValue, !0);
                                        break;
                                    default:
                                        typeof i.onClick == "function" && (e.onclick = W2)
                                }
                                switch (n) {
                                    case "button":
                                    case "input":
                                    case "select":
                                    case "textarea":
                                        r = !!r.autoFocus;
                                        break e;
                                    case "img":
                                        r = !0;
                                        break e;
                                    default:
                                        r = !1
                                }
                            }
                            r && (t.flags |= 4)
                        }
                        t.ref !== null && (t.flags |= 512, t.flags |= 2097152)
                    }
                    return Lt(t), null;
                case 6:
                    if (e && t.stateNode != null) nm(e, t, e.memoizedProps, r);
                    else {
                        if (typeof r != "string" && t.stateNode === null) throw Error($(166));
                        if (n = M0(Ci.current), M0(Sr.current), x2(t)) {
                            if (r = t.stateNode, n = t.memoizedProps, r[Cr] = t, (s = r.nodeValue !== n) && (e = mn, e !== null)) switch (e.tag) {
                                case 3:
                                    C2(r.nodeValue, n, (e.mode & 1) !== 0);
                                    break;
                                case 5:
                                    e.memoizedProps.suppressHydrationWarning !== !0 && C2(r.nodeValue, n, (e.mode & 1) !== 0)
                            }
                            s && (t.flags |= 4)
                        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Cr] = t, t.stateNode = r
                    }
                    return Lt(t), null;
                case 13:
                    if (Be(qe), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                        if (ze && pn !== null && t.mode & 1 && !(t.flags & 128)) _8(), H5(), t.flags |= 98560, s = !1;
                        else if (s = x2(t), r !== null && r.dehydrated !== null) {
                            if (e === null) {
                                if (!s) throw Error($(318));
                                if (s = t.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error($(317));
                                s[Cr] = t
                            } else H5(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
                            Lt(t), s = !1
                        } else er !== null && (Vu(er), er = null), s = !0;
                        if (!s) return t.flags & 65536 ? t : null
                    }
                    return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || qe.current & 1 ? ft === 0 && (ft = 3) : A4())), t.updateQueue !== null && (t.flags |= 4), Lt(t), null);
                case 4:
                    return F5(), Tu(e, t), e === null && wi(t.stateNode.containerInfo), Lt(t), null;
                case 10:
                    return i4(t.type._context), Lt(t), null;
                case 17:
                    return rn(t.type) && K2(), Lt(t), null;
                case 19:
                    if (Be(qe), s = t.memoizedState, s === null) return Lt(t), null;
                    if (r = (t.flags & 128) !== 0, c = s.rendering, c === null)
                        if (r) Qa(s, !1);
                        else {
                            if (ft !== 0 || e !== null && e.flags & 128)
                                for (e = t.child; e !== null;) {
                                    if (c = ns(e), c !== null) {
                                        for (t.flags |= 128, Qa(s, !1), r = c.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;) s = n, e = r, s.flags &= 14680066, c = s.alternate, c === null ? (s.childLanes = 0, s.lanes = e, s.child = null, s.subtreeFlags = 0, s.memoizedProps = null, s.memoizedState = null, s.updateQueue = null, s.dependencies = null, s.stateNode = null) : (s.childLanes = c.childLanes, s.lanes = c.lanes, s.child = c.child, s.subtreeFlags = 0, s.deletions = null, s.memoizedProps = c.memoizedProps, s.memoizedState = c.memoizedState, s.updateQueue = c.updateQueue, s.type = c.type, e = c.dependencies, s.dependencies = e === null ? null : {
                                            lanes: e.lanes,
                                            firstContext: e.firstContext
                                        }), n = n.sibling;
                                        return He(qe, qe.current & 1 | 2), t.child
                                    }
                                    e = e.sibling
                                }
                            s.tail !== null && rt() > U5 && (t.flags |= 128, r = !0, Qa(s, !1), t.lanes = 4194304)
                        }
                    else {
                        if (!r)
                            if (e = ns(c), e !== null) {
                                if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Qa(s, !0), s.tail === null && s.tailMode === "hidden" && !c.alternate && !ze) return Lt(t), null
                            } else 2 * rt() - s.renderingStartTime > U5 && n !== 1073741824 && (t.flags |= 128, r = !0, Qa(s, !1), t.lanes = 4194304);
                        s.isBackwards ? (c.sibling = t.child, t.child = c) : (n = s.last, n !== null ? n.sibling = c : t.child = c, s.last = c)
                    }
                    return s.tail !== null ? (t = s.tail, s.rendering = t, s.tail = t.sibling, s.renderingStartTime = rt(), t.sibling = null, n = qe.current, He(qe, r ? n & 1 | 2 : n & 1), t) : (Lt(t), null);
                case 22:
                case 23:
                    return E4(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? hn & 1073741824 && (Lt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Lt(t), null;
                case 24:
                    return null;
                case 25:
                    return null
            }
            throw Error($(156, t.tag))
        }

        function FM(e, t) {
            switch (t4(t), t.tag) {
                case 1:
                    return rn(t.type) && K2(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
                case 3:
                    return F5(), Be(nn), Be(Pt), u4(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
                case 5:
                    return c4(t), null;
                case 13:
                    if (Be(qe), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                        if (t.alternate === null) throw Error($(340));
                        H5()
                    }
                    return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
                case 19:
                    return Be(qe), null;
                case 4:
                    return F5(), null;
                case 10:
                    return i4(t.type._context), null;
                case 22:
                case 23:
                    return E4(), null;
                case 24:
                    return null;
                default:
                    return null
            }
        }
        var Z2 = !1,
            Rt = !1,
            BM = typeof WeakSet == "function" ? WeakSet : Set,
            Y = null;

        function Z5(e, t) {
            var n = e.ref;
            if (n !== null)
                if (typeof n == "function") try {
                    n(null)
                } catch (r) {
                    Xe(e, t, r)
                } else n.current = null
        }

        function Iu(e, t, n) {
            try {
                n()
            } catch (r) {
                Xe(e, t, r)
            }
        }
        var u6 = !1;

        function UM(e, t) {
            if (hu = z2, e = o8(), Ju(e)) {
                if ("selectionStart" in e) var n = {
                    start: e.selectionStart,
                    end: e.selectionEnd
                };
                else e: {
                    n = (n = e.ownerDocument) && n.defaultView || window;
                    var r = n.getSelection && n.getSelection();
                    if (r && r.rangeCount !== 0) {
                        n = r.anchorNode;
                        var i = r.anchorOffset,
                            s = r.focusNode;
                        r = r.focusOffset;
                        try {
                            n.nodeType, s.nodeType
                        } catch {
                            n = null;
                            break e
                        }
                        var c = 0,
                            u = -1,
                            f = -1,
                            p = 0,
                            h = 0,
                            w = e,
                            v = null;
                        t: for (;;) {
                            for (var _; w !== n || i !== 0 && w.nodeType !== 3 || (u = c + i), w !== s || r !== 0 && w.nodeType !== 3 || (f = c + r), w.nodeType === 3 && (c += w.nodeValue.length), (_ = w.firstChild) !== null;) v = w, w = _;
                            for (;;) {
                                if (w === e) break t;
                                if (v === n && ++p === i && (u = c), v === s && ++h === r && (f = c), (_ = w.nextSibling) !== null) break;
                                w = v, v = w.parentNode
                            }
                            w = _
                        }
                        n = u === -1 || f === -1 ? null : {
                            start: u,
                            end: f
                        }
                    } else n = null
                }
                n = n || {
                    start: 0,
                    end: 0
                }
            } else n = null;
            for (pu = {
                    focusedElem: e,
                    selectionRange: n
                }, z2 = !1, Y = t; Y !== null;)
                if (t = Y, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, Y = e;
                else
                    for (; Y !== null;) {
                        t = Y;
                        try {
                            var S = t.alternate;
                            if (t.flags & 1024) switch (t.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    break;
                                case 1:
                                    if (S !== null) {
                                        var I = S.memoizedProps,
                                            R = S.memoizedState,
                                            b = t.stateNode,
                                            C = b.getSnapshotBeforeUpdate(t.elementType === t.type ? I : Yn(t.type, I), R);
                                        b.__reactInternalSnapshotBeforeUpdate = C
                                    }
                                    break;
                                case 3:
                                    var x = t.stateNode.containerInfo;
                                    x.nodeType === 1 ? x.textContent = "" : x.nodeType === 9 && x.documentElement && x.removeChild(x.documentElement);
                                    break;
                                case 5:
                                case 6:
                                case 4:
                                case 17:
                                    break;
                                default:
                                    throw Error($(163))
                            }
                        } catch (Z) {
                            Xe(t, t.return, Z)
                        }
                        if (e = t.sibling, e !== null) {
                            e.return = t.return, Y = e;
                            break
                        }
                        Y = t.return
                    }
            return S = u6, u6 = !1, S
        }

        function ci(e, t, n) {
            var r = t.updateQueue;
            if (r = r !== null ? r.lastEffect : null, r !== null) {
                var i = r = r.next;
                do {
                    if ((i.tag & e) === e) {
                        var s = i.destroy;
                        i.destroy = void 0, s !== void 0 && Iu(t, n, s)
                    }
                    i = i.next
                } while (i !== r)
            }
        }

        function ys(e, t) {
            if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
                var n = t = t.next;
                do {
                    if ((n.tag & e) === e) {
                        var r = n.create;
                        n.destroy = r()
                    }
                    n = n.next
                } while (n !== t)
            }
        }

        function ku(e) {
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

        function rm(e) {
            var t = e.alternate;
            t !== null && (e.alternate = null, rm(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Cr], delete t[Ai], delete t[gu], delete t[CM], delete t[xM])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
        }

        function am(e) {
            return e.tag === 5 || e.tag === 3 || e.tag === 4
        }

        function f6(e) {
            e: for (;;) {
                for (; e.sibling === null;) {
                    if (e.return === null || am(e.return)) return null;
                    e = e.return
                }
                for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
                    if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
                    e.child.return = e, e = e.child
                }
                if (!(e.flags & 2)) return e.stateNode
            }
        }

        function Ou(e, t, n) {
            var r = e.tag;
            if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = W2));
            else if (r !== 4 && (e = e.child, e !== null))
                for (Ou(e, t, n), e = e.sibling; e !== null;) Ou(e, t, n), e = e.sibling
        }

        function Lu(e, t, n) {
            var r = e.tag;
            if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
            else if (r !== 4 && (e = e.child, e !== null))
                for (Lu(e, t, n), e = e.sibling; e !== null;) Lu(e, t, n), e = e.sibling
        }
        var At = null,
            Jn = !1;

        function S1(e, t, n) {
            for (n = n.child; n !== null;) im(e, t, n), n = n.sibling
        }

        function im(e, t, n) {
            if (xr && typeof xr.onCommitFiberUnmount == "function") try {
                xr.onCommitFiberUnmount(us, n)
            } catch {}
            switch (n.tag) {
                case 5:
                    Rt || Z5(n, t);
                case 6:
                    var r = At,
                        i = Jn;
                    At = null, S1(e, t, n), At = r, Jn = i, At !== null && (Jn ? (e = At, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : At.removeChild(n.stateNode));
                    break;
                case 18:
                    At !== null && (Jn ? (e = At, n = n.stateNode, e.nodeType === 8 ? Nc(e.parentNode, n) : e.nodeType === 1 && Nc(e, n), gi(e)) : Nc(At, n.stateNode));
                    break;
                case 4:
                    r = At, i = Jn, At = n.stateNode.containerInfo, Jn = !0, S1(e, t, n), At = r, Jn = i;
                    break;
                case 0:
                case 11:
                case 14:
                case 15:
                    if (!Rt && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
                        i = r = r.next;
                        do {
                            var s = i,
                                c = s.destroy;
                            s = s.tag, c !== void 0 && (s & 2 || s & 4) && Iu(n, t, c), i = i.next
                        } while (i !== r)
                    }
                    S1(e, t, n);
                    break;
                case 1:
                    if (!Rt && (Z5(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
                        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
                    } catch (u) {
                        Xe(n, t, u)
                    }
                    S1(e, t, n);
                    break;
                case 21:
                    S1(e, t, n);
                    break;
                case 22:
                    n.mode & 1 ? (Rt = (r = Rt) || n.memoizedState !== null, S1(e, t, n), Rt = r) : S1(e, t, n);
                    break;
                default:
                    S1(e, t, n)
            }
        }

        function d6(e) {
            var t = e.updateQueue;
            if (t !== null) {
                e.updateQueue = null;
                var n = e.stateNode;
                n === null && (n = e.stateNode = new BM), t.forEach(function(r) {
                    var i = XM.bind(null, e, r);
                    n.has(r) || (n.add(r), r.then(i, i))
                })
            }
        }

        function Xn(e, t) {
            var n = t.deletions;
            if (n !== null)
                for (var r = 0; r < n.length; r++) {
                    var i = n[r];
                    try {
                        var s = e,
                            c = t,
                            u = c;
                        e: for (; u !== null;) {
                            switch (u.tag) {
                                case 5:
                                    At = u.stateNode, Jn = !1;
                                    break e;
                                case 3:
                                    At = u.stateNode.containerInfo, Jn = !0;
                                    break e;
                                case 4:
                                    At = u.stateNode.containerInfo, Jn = !0;
                                    break e
                            }
                            u = u.return
                        }
                        if (At === null) throw Error($(160));
                        im(s, c, i), At = null, Jn = !1;
                        var f = i.alternate;
                        f !== null && (f.return = null), i.return = null
                    } catch (p) {
                        Xe(i, t, p)
                    }
                }
            if (t.subtreeFlags & 12854)
                for (t = t.child; t !== null;) om(t, e), t = t.sibling
        }

        function om(e, t) {
            var n = e.alternate,
                r = e.flags;
            switch (e.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                    if (Xn(t, e), Ar(e), r & 4) {
                        try {
                            ci(3, e, e.return), ys(3, e)
                        } catch (I) {
                            Xe(e, e.return, I)
                        }
                        try {
                            ci(5, e, e.return)
                        } catch (I) {
                            Xe(e, e.return, I)
                        }
                    }
                    break;
                case 1:
                    Xn(t, e), Ar(e), r & 512 && n !== null && Z5(n, n.return);
                    break;
                case 5:
                    if (Xn(t, e), Ar(e), r & 512 && n !== null && Z5(n, n.return), e.flags & 32) {
                        var i = e.stateNode;
                        try {
                            hi(i, "")
                        } catch (I) {
                            Xe(e, e.return, I)
                        }
                    }
                    if (r & 4 && (i = e.stateNode, i != null)) {
                        var s = e.memoizedProps,
                            c = n !== null ? n.memoizedProps : s,
                            u = e.type,
                            f = e.updateQueue;
                        if (e.updateQueue = null, f !== null) try {
                            u === "input" && s.type === "radio" && s.name != null && M6(i, s), ru(u, c);
                            var p = ru(u, s);
                            for (c = 0; c < f.length; c += 2) {
                                var h = f[c],
                                    w = f[c + 1];
                                h === "style" ? O6(i, w) : h === "dangerouslySetInnerHTML" ? I6(i, w) : h === "children" ? hi(i, w) : Fu(i, h, w, p)
                            }
                            switch (u) {
                                case "input":
                                    Yc(i, s);
                                    break;
                                case "textarea":
                                    Z6(i, s);
                                    break;
                                case "select":
                                    var v = i._wrapperState.wasMultiple;
                                    i._wrapperState.wasMultiple = !!s.multiple;
                                    var _ = s.value;
                                    _ != null ? I5(i, !!s.multiple, _, !1) : v !== !!s.multiple && (s.defaultValue != null ? I5(i, !!s.multiple, s.defaultValue, !0) : I5(i, !!s.multiple, s.multiple ? [] : "", !1))
                            }
                            i[Ai] = s
                        } catch (I) {
                            Xe(e, e.return, I)
                        }
                    }
                    break;
                case 6:
                    if (Xn(t, e), Ar(e), r & 4) {
                        if (e.stateNode === null) throw Error($(162));
                        i = e.stateNode, s = e.memoizedProps;
                        try {
                            i.nodeValue = s
                        } catch (I) {
                            Xe(e, e.return, I)
                        }
                    }
                    break;
                case 3:
                    if (Xn(t, e), Ar(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
                        gi(t.containerInfo)
                    } catch (I) {
                        Xe(e, e.return, I)
                    }
                    break;
                case 4:
                    Xn(t, e), Ar(e);
                    break;
                case 13:
                    Xn(t, e), Ar(e), i = e.child, i.flags & 8192 && (s = i.memoizedState !== null, i.stateNode.isHidden = s, !s || i.alternate !== null && i.alternate.memoizedState !== null || (_4 = rt())), r & 4 && d6(e);
                    break;
                case 22:
                    if (h = n !== null && n.memoizedState !== null, e.mode & 1 ? (Rt = (p = Rt) || h, Xn(t, e), Rt = p) : Xn(t, e), Ar(e), r & 8192) {
                        if (p = e.memoizedState !== null, (e.stateNode.isHidden = p) && !h && e.mode & 1)
                            for (Y = e, h = e.child; h !== null;) {
                                for (w = Y = h; Y !== null;) {
                                    switch (v = Y, _ = v.child, v.tag) {
                                        case 0:
                                        case 11:
                                        case 14:
                                        case 15:
                                            ci(4, v, v.return);
                                            break;
                                        case 1:
                                            Z5(v, v.return);
                                            var S = v.stateNode;
                                            if (typeof S.componentWillUnmount == "function") {
                                                r = v, n = v.return;
                                                try {
                                                    t = r, S.props = t.memoizedProps, S.state = t.memoizedState, S.componentWillUnmount()
                                                } catch (I) {
                                                    Xe(r, n, I)
                                                }
                                            }
                                            break;
                                        case 5:
                                            Z5(v, v.return);
                                            break;
                                        case 22:
                                            if (v.memoizedState !== null) {
                                                p6(w);
                                                continue
                                            }
                                    }
                                    _ !== null ? (_.return = v, Y = _) : p6(w)
                                }
                                h = h.sibling
                            }
                        e: for (h = null, w = e;;) {
                            if (w.tag === 5) {
                                if (h === null) {
                                    h = w;
                                    try {
                                        i = w.stateNode, p ? (s = i.style, typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none") : (u = w.stateNode, f = w.memoizedProps.style, c = f != null && f.hasOwnProperty("display") ? f.display : null, u.style.display = k6("display", c))
                                    } catch (I) {
                                        Xe(e, e.return, I)
                                    }
                                }
                            } else if (w.tag === 6) {
                                if (h === null) try {
                                    w.stateNode.nodeValue = p ? "" : w.memoizedProps
                                } catch (I) {
                                    Xe(e, e.return, I)
                                }
                            } else if ((w.tag !== 22 && w.tag !== 23 || w.memoizedState === null || w === e) && w.child !== null) {
                                w.child.return = w, w = w.child;
                                continue
                            }
                            if (w === e) break e;
                            for (; w.sibling === null;) {
                                if (w.return === null || w.return === e) break e;
                                h === w && (h = null), w = w.return
                            }
                            h === w && (h = null), w.sibling.return = w.return, w = w.sibling
                        }
                    }
                    break;
                case 19:
                    Xn(t, e), Ar(e), r & 4 && d6(e);
                    break;
                case 21:
                    break;
                default:
                    Xn(t, e), Ar(e)
            }
        }

        function Ar(e) {
            var t = e.flags;
            if (t & 2) {
                try {
                    e: {
                        for (var n = e.return; n !== null;) {
                            if (am(n)) {
                                var r = n;
                                break e
                            }
                            n = n.return
                        }
                        throw Error($(160))
                    }
                    switch (r.tag) {
                        case 5:
                            var i = r.stateNode;
                            r.flags & 32 && (hi(i, ""), r.flags &= -33);
                            var s = f6(e);
                            Lu(e, s, i);
                            break;
                        case 3:
                        case 4:
                            var c = r.stateNode.containerInfo,
                                u = f6(e);
                            Ou(e, u, c);
                            break;
                        default:
                            throw Error($(161))
                    }
                }
                catch (f) {
                    Xe(e, e.return, f)
                }
                e.flags &= -3
            }
            t & 4096 && (e.flags &= -4097)
        }

        function jM(e, t, n) {
            Y = e, sm(e, t, n)
        }

        function sm(e, t, n) {
            for (var r = (e.mode & 1) !== 0; Y !== null;) {
                var i = Y,
                    s = i.child;
                if (i.tag === 22 && r) {
                    var c = i.memoizedState !== null || Z2;
                    if (!c) {
                        var u = i.alternate,
                            f = u !== null && u.memoizedState !== null || Rt;
                        u = Z2;
                        var p = Rt;
                        if (Z2 = c, (Rt = f) && !p)
                            for (Y = i; Y !== null;) c = Y, f = c.child, c.tag === 22 && c.memoizedState !== null ? m6(i) : f !== null ? (f.return = c, Y = f) : m6(i);
                        for (; s !== null;) Y = s, sm(s, t, n), s = s.sibling;
                        Y = i, Z2 = u, Rt = p
                    }
                    h6(e, t, n)
                } else i.subtreeFlags & 8772 && s !== null ? (s.return = i, Y = s) : h6(e, t, n)
            }
        }

        function h6(e) {
            for (; Y !== null;) {
                var t = Y;
                if (t.flags & 8772) {
                    var n = t.alternate;
                    try {
                        if (t.flags & 8772) switch (t.tag) {
                            case 0:
                            case 11:
                            case 15:
                                Rt || ys(5, t);
                                break;
                            case 1:
                                var r = t.stateNode;
                                if (t.flags & 4 && !Rt)
                                    if (n === null) r.componentDidMount();
                                    else {
                                        var i = t.elementType === t.type ? n.memoizedProps : Yn(t.type, n.memoizedProps);
                                        r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                                    } var s = t.updateQueue;
                                s !== null && Qp(t, s, r);
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
                                    Qp(t, c, n)
                                }
                                break;
                            case 5:
                                var u = t.stateNode;
                                if (n === null && t.flags & 4) {
                                    n = u;
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
                                        var h = p.memoizedState;
                                        if (h !== null) {
                                            var w = h.dehydrated;
                                            w !== null && gi(w)
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
                                throw Error($(163))
                        }
                        Rt || t.flags & 512 && ku(t)
                    } catch (v) {
                        Xe(t, t.return, v)
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

        function p6(e) {
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

        function m6(e) {
            for (; Y !== null;) {
                var t = Y;
                try {
                    switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            var n = t.return;
                            try {
                                ys(4, t)
                            } catch (f) {
                                Xe(t, n, f)
                            }
                            break;
                        case 1:
                            var r = t.stateNode;
                            if (typeof r.componentDidMount == "function") {
                                var i = t.return;
                                try {
                                    r.componentDidMount()
                                } catch (f) {
                                    Xe(t, i, f)
                                }
                            }
                            var s = t.return;
                            try {
                                ku(t)
                            } catch (f) {
                                Xe(t, s, f)
                            }
                            break;
                        case 5:
                            var c = t.return;
                            try {
                                ku(t)
                            } catch (f) {
                                Xe(t, c, f)
                            }
                    }
                } catch (f) {
                    Xe(t, t.return, f)
                }
                if (t === e) {
                    Y = null;
                    break
                }
                var u = t.sibling;
                if (u !== null) {
                    u.return = t.return, Y = u;
                    break
                }
                Y = t.return
            }
        }
        var GM = Math.ceil,
            is = t1.ReactCurrentDispatcher,
            g4 = t1.ReactCurrentOwner,
            Nn = t1.ReactCurrentBatchConfig,
            be = 0,
            vt = null,
            at = null,
            bt = 0,
            hn = 0,
            T5 = G1(0),
            ft = 0,
            Zi = null,
            L0 = 0,
            _s = 0,
            y4 = 0,
            ui = null,
            en = null,
            _4 = 0,
            U5 = 1 / 0,
            $r = null,
            os = !1,
            Ru = null,
            H1 = null,
            T2 = !1,
            O1 = null,
            ss = 0,
            fi = 0,
            Pu = null,
            V2 = -1,
            H2 = 0;

        function $t() {
            return be & 6 ? rt() : V2 !== -1 ? V2 : V2 = rt()
        }

        function D1(e) {
            return e.mode & 1 ? be & 2 && bt !== 0 ? bt & -bt : MM.transition !== null ? (H2 === 0 && (H2 = G6()), H2) : (e = ke, e !== 0 || (e = window.event, e = e === void 0 ? 16 : X6(e.type)), e) : 1
        }

        function nr(e, t, n, r) {
            if (50 < fi) throw fi = 0, Pu = null, Error($(185));
            Ti(e, n, r), (!(be & 2) || e !== vt) && (e === vt && (!(be & 2) && (_s |= n), ft === 4 && I1(e, bt)), an(e, r), n === 1 && be === 0 && !(t.mode & 1) && (U5 = rt() + 500, ms && z1()))
        }

        function an(e, t) {
            var n = e.callbackNode;
            TS(e, t);
            var r = G2(e, e === vt ? bt : 0);
            if (r === 0) n !== null && bp(n), e.callbackNode = null, e.callbackPriority = 0;
            else if (t = r & -r, e.callbackPriority !== t) {
                if (n != null && bp(n), t === 1) e.tag === 0 ? SM(v6.bind(null, e)) : v8(v6.bind(null, e)), AM(function() {
                    !(be & 6) && z1()
                }), n = null;
                else {
                    switch (z6(r)) {
                        case 1:
                            n = zu;
                            break;
                        case 4:
                            n = U6;
                            break;
                        case 16:
                            n = j2;
                            break;
                        case 536870912:
                            n = j6;
                            break;
                        default:
                            n = j2
                    }
                    n = mm(n, lm.bind(null, e))
                }
                e.callbackPriority = t, e.callbackNode = n
            }
        }

        function lm(e, t) {
            if (V2 = -1, H2 = 0, be & 6) throw Error($(327));
            var n = e.callbackNode;
            if (P5() && e.callbackNode !== n) return null;
            var r = G2(e, e === vt ? bt : 0);
            if (r === 0) return null;
            if (r & 30 || r & e.expiredLanes || t) t = ls(e, r);
            else {
                t = r;
                var i = be;
                be |= 2;
                var s = um();
                (vt !== e || bt !== t) && ($r = null, U5 = rt() + 500, Z0(e, t));
                do try {
                    qM();
                    break
                } catch (u) {
                    cm(e, u)
                }
                while (1);
                a4(), is.current = s, be = i, at !== null ? t = 0 : (vt = null, bt = 0, t = ft)
            }
            if (t !== 0) {
                if (t === 2 && (i = lu(e), i !== 0 && (r = i, t = Nu(e, i))), t === 1) throw n = Zi, Z0(e, 0), I1(e, r), an(e, rt()), n;
                if (t === 6) I1(e, r);
                else {
                    if (i = e.current.alternate, !(r & 30) && !zM(i) && (t = ls(e, r), t === 2 && (s = lu(e), s !== 0 && (r = s, t = Nu(e, s))), t === 1)) throw n = Zi, Z0(e, 0), I1(e, r), an(e, rt()), n;
                    switch (e.finishedWork = i, e.finishedLanes = r, t) {
                        case 0:
                        case 1:
                            throw Error($(345));
                        case 2:
                            C0(e, en, $r);
                            break;
                        case 3:
                            if (I1(e, r), (r & 130023424) === r && (t = _4 + 500 - rt(), 10 < t)) {
                                if (G2(e, 0) !== 0) break;
                                if (i = e.suspendedLanes, (i & r) !== r) {
                                    $t(), e.pingedLanes |= e.suspendedLanes & i;
                                    break
                                }
                                e.timeoutHandle = vu(C0.bind(null, e, en, $r), t);
                                break
                            }
                            C0(e, en, $r);
                            break;
                        case 4:
                            if (I1(e, r), (r & 4194240) === r) break;
                            for (t = e.eventTimes, i = -1; 0 < r;) {
                                var c = 31 - tr(r);
                                s = 1 << c, c = t[c], c > i && (i = c), r &= ~s
                            }
                            if (r = i, r = rt() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * GM(r / 1960)) - r, 10 < r) {
                                e.timeoutHandle = vu(C0.bind(null, e, en, $r), r);
                                break
                            }
                            C0(e, en, $r);
                            break;
                        case 5:
                            C0(e, en, $r);
                            break;
                        default:
                            throw Error($(329))
                    }
                }
            }
            return an(e, rt()), e.callbackNode === n ? lm.bind(null, e) : null
        }

        function Nu(e, t) {
            var n = ui;
            return e.current.memoizedState.isDehydrated && (Z0(e, t).flags |= 256), e = ls(e, t), e !== 2 && (t = en, en = n, t !== null && Vu(t)), e
        }

        function Vu(e) {
            en === null ? en = e : en.push.apply(en, e)
        }

        function zM(e) {
            for (var t = e;;) {
                if (t.flags & 16384) {
                    var n = t.updateQueue;
                    if (n !== null && (n = n.stores, n !== null))
                        for (var r = 0; r < n.length; r++) {
                            var i = n[r],
                                s = i.getSnapshot;
                            i = i.value;
                            try {
                                if (!rr(s(), i)) return !1
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

        function I1(e, t) {
            for (t &= ~y4, t &= ~_s, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
                var n = 31 - tr(t),
                    r = 1 << n;
                e[n] = -1, t &= ~r
            }
        }

        function v6(e) {
            if (be & 6) throw Error($(327));
            P5();
            var t = G2(e, 0);
            if (!(t & 1)) return an(e, rt()), null;
            var n = ls(e, t);
            if (e.tag !== 0 && n === 2) {
                var r = lu(e);
                r !== 0 && (t = r, n = Nu(e, r))
            }
            if (n === 1) throw n = Zi, Z0(e, 0), I1(e, t), an(e, rt()), n;
            if (n === 6) throw Error($(345));
            return e.finishedWork = e.current.alternate, e.finishedLanes = t, C0(e, en, $r), an(e, rt()), null
        }

        function w4(e, t) {
            var n = be;
            be |= 1;
            try {
                return e(t)
            } finally {
                be = n, be === 0 && (U5 = rt() + 500, ms && z1())
            }
        }

        function R0(e) {
            O1 !== null && O1.tag === 0 && !(be & 6) && P5();
            var t = be;
            be |= 1;
            var n = Nn.transition,
                r = ke;
            try {
                if (Nn.transition = null, ke = 1, e) return e()
            } finally {
                ke = r, Nn.transition = n, be = t, !(be & 6) && z1()
            }
        }

        function E4() {
            hn = T5.current, Be(T5)
        }

        function Z0(e, t) {
            e.finishedWork = null, e.finishedLanes = 0;
            var n = e.timeoutHandle;
            if (n !== -1 && (e.timeoutHandle = -1, EM(n)), at !== null)
                for (n = at.return; n !== null;) {
                    var r = n;
                    switch (t4(r), r.tag) {
                        case 1:
                            r = r.type.childContextTypes, r != null && K2();
                            break;
                        case 3:
                            F5(), Be(nn), Be(Pt), u4();
                            break;
                        case 5:
                            c4(r);
                            break;
                        case 4:
                            F5();
                            break;
                        case 13:
                            Be(qe);
                            break;
                        case 19:
                            Be(qe);
                            break;
                        case 10:
                            i4(r.type._context);
                            break;
                        case 22:
                        case 23:
                            E4()
                    }
                    n = n.return
                }
            if (vt = e, at = e = F1(e.current, null), bt = hn = t, ft = 0, Zi = null, y4 = _s = L0 = 0, en = ui = null, S0 !== null) {
                for (t = 0; t < S0.length; t++)
                    if (n = S0[t], r = n.interleaved, r !== null) {
                        n.interleaved = null;
                        var i = r.next,
                            s = n.pending;
                        if (s !== null) {
                            var c = s.next;
                            s.next = i, r.next = c
                        }
                        n.pending = r
                    } S0 = null
            }
            return e
        }

        function cm(e, t) {
            do {
                var n = at;
                try {
                    if (a4(), R2.current = as, rs) {
                        for (var r = We.memoizedState; r !== null;) {
                            var i = r.queue;
                            i !== null && (i.pending = null), r = r.next
                        }
                        rs = !1
                    }
                    if (O0 = 0, mt = ut = We = null, li = !1, xi = 0, g4.current = null, n === null || n.return === null) {
                        ft = 1, Zi = t, at = null;
                        break
                    }
                    e: {
                        var s = e,
                            c = n.return,
                            u = n,
                            f = t;
                        if (t = bt, u.flags |= 32768, f !== null && typeof f == "object" && typeof f.then == "function") {
                            var p = f,
                                h = u,
                                w = h.tag;
                            if (!(h.mode & 1) && (w === 0 || w === 11 || w === 15)) {
                                var v = h.alternate;
                                v ? (h.updateQueue = v.updateQueue, h.memoizedState = v.memoizedState, h.lanes = v.lanes) : (h.updateQueue = null, h.memoizedState = null)
                            }
                            var _ = r6(c);
                            if (_ !== null) {
                                _.flags &= -257, a6(_, c, u, s, t), _.mode & 1 && n6(s, p, t), t = _, f = p;
                                var S = t.updateQueue;
                                if (S === null) {
                                    var I = new Set;
                                    I.add(f), t.updateQueue = I
                                } else S.add(f);
                                break e
                            } else {
                                if (!(t & 1)) {
                                    n6(s, p, t), A4();
                                    break e
                                }
                                f = Error($(426))
                            }
                        } else if (ze && u.mode & 1) {
                            var R = r6(c);
                            if (R !== null) {
                                !(R.flags & 65536) && (R.flags |= 256), a6(R, c, u, s, t), n4(B5(f, u));
                                break e
                            }
                        }
                        s = f = B5(f, u),
                        ft !== 4 && (ft = 2),
                        ui === null ? ui = [s] : ui.push(s),
                        s = c;do {
                            switch (s.tag) {
                                case 3:
                                    s.flags |= 65536, t &= -t, s.lanes |= t;
                                    var b = $8(s, f, t);
                                    Kp(s, b);
                                    break e;
                                case 1:
                                    u = f;
                                    var C = s.type,
                                        x = s.stateNode;
                                    if (!(s.flags & 128) && (typeof C.getDerivedStateFromError == "function" || x !== null && typeof x.componentDidCatch == "function" && (H1 === null || !H1.has(x)))) {
                                        s.flags |= 65536, t &= -t, s.lanes |= t;
                                        var Z = q8(s, u, t);
                                        Kp(s, Z);
                                        break e
                                    }
                            }
                            s = s.return
                        } while (s !== null)
                    }
                    dm(n)
                } catch (T) {
                    t = T, at === n && n !== null && (at = n = n.return);
                    continue
                }
                break
            } while (1)
        }

        function um() {
            var e = is.current;
            return is.current = as, e === null ? as : e
        }

        function A4() {
            (ft === 0 || ft === 3 || ft === 2) && (ft = 4), vt === null || !(L0 & 268435455) && !(_s & 268435455) || I1(vt, bt)
        }

        function ls(e, t) {
            var n = be;
            be |= 2;
            var r = um();
            (vt !== e || bt !== t) && ($r = null, Z0(e, t));
            do try {
                $M();
                break
            } catch (i) {
                cm(e, i)
            }
            while (1);
            if (a4(), be = n, is.current = r, at !== null) throw Error($(261));
            return vt = null, bt = 0, ft
        }

        function $M() {
            for (; at !== null;) fm(at)
        }

        function qM() {
            for (; at !== null && !wS();) fm(at)
        }

        function fm(e) {
            var t = pm(e.alternate, e, hn);
            e.memoizedProps = e.pendingProps, t === null ? dm(e) : at = t, g4.current = null
        }

        function dm(e) {
            var t = e;
            do {
                var n = t.alternate;
                if (e = t.return, t.flags & 32768) {
                    if (n = FM(n, t), n !== null) {
                        n.flags &= 32767, at = n;
                        return
                    }
                    if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
                    else {
                        ft = 6, at = null;
                        return
                    }
                } else if (n = DM(n, t, hn), n !== null) {
                    at = n;
                    return
                }
                if (t = t.sibling, t !== null) {
                    at = t;
                    return
                }
                at = t = e
            } while (t !== null);
            ft === 0 && (ft = 5)
        }

        function C0(e, t, n) {
            var r = ke,
                i = Nn.transition;
            try {
                Nn.transition = null, ke = 1, WM(e, t, n, r)
            } finally {
                Nn.transition = i, ke = r
            }
            return null
        }

        function WM(e, t, n, r) {
            do P5(); while (O1 !== null);
            if (be & 6) throw Error($(327));
            n = e.finishedWork;
            var i = e.finishedLanes;
            if (n === null) return null;
            if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error($(177));
            e.callbackNode = null, e.callbackPriority = 0;
            var s = n.lanes | n.childLanes;
            if (IS(e, s), e === vt && (at = vt = null, bt = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || T2 || (T2 = !0, mm(j2, function() {
                    return P5(), null
                })), s = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || s) {
                s = Nn.transition, Nn.transition = null;
                var c = ke;
                ke = 1;
                var u = be;
                be |= 4, g4.current = null, UM(e, n), om(n, e), vM(pu), z2 = !!hu, pu = hu = null, e.current = n, jM(n, e, i), ES(), be = u, ke = c, Nn.transition = s
            } else e.current = n;
            if (T2 && (T2 = !1, O1 = e, ss = i), s = e.pendingLanes, s === 0 && (H1 = null), CS(n.stateNode, r), an(e, rt()), t !== null)
                for (r = e.onRecoverableError, n = 0; n < t.length; n++) i = t[n], r(i.value, {
                    componentStack: i.stack,
                    digest: i.digest
                });
            if (os) throw os = !1, e = Ru, Ru = null, e;
            return ss & 1 && e.tag !== 0 && P5(), s = e.pendingLanes, s & 1 ? e === Pu ? fi++ : (fi = 0, Pu = e) : fi = 0, z1(), null
        }

        function P5() {
            if (O1 !== null) {
                var e = z6(ss),
                    t = Nn.transition,
                    n = ke;
                try {
                    if (Nn.transition = null, ke = 16 > e ? 16 : e, O1 === null) var r = !1;
                    else {
                        if (e = O1, O1 = null, ss = 0, be & 6) throw Error($(331));
                        var i = be;
                        for (be |= 4, Y = e.current; Y !== null;) {
                            var s = Y,
                                c = s.child;
                            if (Y.flags & 16) {
                                var u = s.deletions;
                                if (u !== null) {
                                    for (var f = 0; f < u.length; f++) {
                                        var p = u[f];
                                        for (Y = p; Y !== null;) {
                                            var h = Y;
                                            switch (h.tag) {
                                                case 0:
                                                case 11:
                                                case 15:
                                                    ci(8, h, s)
                                            }
                                            var w = h.child;
                                            if (w !== null) w.return = h, Y = w;
                                            else
                                                for (; Y !== null;) {
                                                    h = Y;
                                                    var v = h.sibling,
                                                        _ = h.return;
                                                    if (rm(h), h === p) {
                                                        Y = null;
                                                        break
                                                    }
                                                    if (v !== null) {
                                                        v.return = _, Y = v;
                                                        break
                                                    }
                                                    Y = _
                                                }
                                        }
                                    }
                                    var S = s.alternate;
                                    if (S !== null) {
                                        var I = S.child;
                                        if (I !== null) {
                                            S.child = null;
                                            do {
                                                var R = I.sibling;
                                                I.sibling = null, I = R
                                            } while (I !== null)
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
                                        ci(9, s, s.return)
                                }
                                var b = s.sibling;
                                if (b !== null) {
                                    b.return = s.return, Y = b;
                                    break e
                                }
                                Y = s.return
                            }
                        }
                        var C = e.current;
                        for (Y = C; Y !== null;) {
                            c = Y;
                            var x = c.child;
                            if (c.subtreeFlags & 2064 && x !== null) x.return = c, Y = x;
                            else e: for (c = C; Y !== null;) {
                                if (u = Y, u.flags & 2048) try {
                                    switch (u.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            ys(9, u)
                                    }
                                } catch (T) {
                                    Xe(u, u.return, T)
                                }
                                if (u === c) {
                                    Y = null;
                                    break e
                                }
                                var Z = u.sibling;
                                if (Z !== null) {
                                    Z.return = u.return, Y = Z;
                                    break e
                                }
                                Y = u.return
                            }
                        }
                        if (be = i, z1(), xr && typeof xr.onPostCommitFiberRoot == "function") try {
                            xr.onPostCommitFiberRoot(us, e)
                        } catch {}
                        r = !0
                    }
                    return r
                } finally {
                    ke = n, Nn.transition = t
                }
            }
            return !1
        }

        function g6(e, t, n) {
            t = B5(n, t), t = $8(e, t, 1), e = V1(e, t, 1), t = $t(), e !== null && (Ti(e, 1, t), an(e, t))
        }

        function Xe(e, t, n) {
            if (e.tag === 3) g6(e, e, n);
            else
                for (; t !== null;) {
                    if (t.tag === 3) {
                        g6(t, e, n);
                        break
                    } else if (t.tag === 1) {
                        var r = t.stateNode;
                        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (H1 === null || !H1.has(r))) {
                            e = B5(n, e), e = q8(t, e, 1), t = V1(t, e, 1), e = $t(), t !== null && (Ti(t, 1, e), an(t, e));
                            break
                        }
                    }
                    t = t.return
                }
        }

        function KM(e, t, n) {
            var r = e.pingCache;
            r !== null && r.delete(t), t = $t(), e.pingedLanes |= e.suspendedLanes & n, vt === e && (bt & n) === n && (ft === 4 || ft === 3 && (bt & 130023424) === bt && 500 > rt() - _4 ? Z0(e, 0) : y4 |= n), an(e, t)
        }

        function hm(e, t) {
            t === 0 && (e.mode & 1 ? (t = m2, m2 <<= 1, !(m2 & 130023424) && (m2 = 4194304)) : t = 1);
            var n = $t();
            e = Jr(e, t), e !== null && (Ti(e, t, n), an(e, n))
        }

        function QM(e) {
            var t = e.memoizedState,
                n = 0;
            t !== null && (n = t.retryLane), hm(e, n)
        }

        function XM(e, t) {
            var n = 0;
            switch (e.tag) {
                case 13:
                    var r = e.stateNode,
                        i = e.memoizedState;
                    i !== null && (n = i.retryLane);
                    break;
                case 19:
                    r = e.stateNode;
                    break;
                default:
                    throw Error($(314))
            }
            r !== null && r.delete(t), hm(e, n)
        }
        var pm;
        pm = function(e, t, n) {
            if (e !== null)
                if (e.memoizedProps !== t.pendingProps || nn.current) tn = !0;
                else {
                    if (!(e.lanes & n) && !(t.flags & 128)) return tn = !1, HM(e, t, n);
                    tn = !!(e.flags & 131072)
                }
            else tn = !1, ze && t.flags & 1048576 && g8(t, Y2, t.index);
            switch (t.lanes = 0, t.tag) {
                case 2:
                    var r = t.type;
                    N2(e, t), e = t.pendingProps;
                    var i = V5(t, Pt.current);
                    R5(t, n), i = d4(null, t, r, e, i, n);
                    var s = h4();
                    return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, rn(r) ? (s = !0, Q2(t)) : s = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, s4(t), i.updater = vs, t.stateNode = i, i._reactInternals = t, bu(t, r, e, n), t = Su(null, t, r, !0, s, n)) : (t.tag = 0, ze && s && e4(t), zt(null, t, i, n), t = t.child), t;
                case 16:
                    r = t.elementType;
                    e: {
                        switch (N2(e, t), e = t.pendingProps, i = r._init, r = i(r._payload), t.type = r, i = t.tag = JM(r), e = Yn(r, e), i) {
                            case 0:
                                t = xu(null, t, r, e, n);
                                break e;
                            case 1:
                                t = s6(null, t, r, e, n);
                                break e;
                            case 11:
                                t = i6(null, t, r, e, n);
                                break e;
                            case 14:
                                t = o6(null, t, r, Yn(r.type, e), n);
                                break e
                        }
                        throw Error($(306, r, ""))
                    }
                    return t;
                case 0:
                    return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Yn(r, i), xu(e, t, r, i, n);
                case 1:
                    return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Yn(r, i), s6(e, t, r, i, n);
                case 3:
                    e: {
                        if (X8(t), e === null) throw Error($(387));r = t.pendingProps,
                        s = t.memoizedState,
                        i = s.element,
                        E8(e, t),
                        ts(t, r, null, n);
                        var c = t.memoizedState;
                        if (r = c.element, s.isDehydrated)
                            if (s = {
                                    element: r,
                                    isDehydrated: !1,
                                    cache: c.cache,
                                    pendingSuspenseBoundaries: c.pendingSuspenseBoundaries,
                                    transitions: c.transitions
                                }, t.updateQueue.baseState = s, t.memoizedState = s, t.flags & 256) {
                                i = B5(Error($(423)), t), t = l6(e, t, r, n, i);
                                break e
                            } else if (r !== i) {
                            i = B5(Error($(424)), t), t = l6(e, t, r, n, i);
                            break e
                        } else
                            for (pn = N1(t.stateNode.containerInfo.firstChild), mn = t, ze = !0, er = null, n = x8(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
                        else {
                            if (H5(), r === i) {
                                t = e1(e, t, n);
                                break e
                            }
                            zt(e, t, r, n)
                        }
                        t = t.child
                    }
                    return t;
                case 5:
                    return S8(t), e === null && wu(t), r = t.type, i = t.pendingProps, s = e !== null ? e.memoizedProps : null, c = i.children, mu(r, i) ? c = null : s !== null && mu(r, s) && (t.flags |= 32), Q8(e, t), zt(e, t, c, n), t.child;
                case 6:
                    return e === null && wu(t), null;
                case 13:
                    return Y8(e, t, n);
                case 4:
                    return l4(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = D5(t, null, r, n) : zt(e, t, r, n), t.child;
                case 11:
                    return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Yn(r, i), i6(e, t, r, i, n);
                case 7:
                    return zt(e, t, t.pendingProps, n), t.child;
                case 8:
                    return zt(e, t, t.pendingProps.children, n), t.child;
                case 12:
                    return zt(e, t, t.pendingProps.children, n), t.child;
                case 10:
                    e: {
                        if (r = t.type._context, i = t.pendingProps, s = t.memoizedProps, c = i.value, He(J2, r._currentValue), r._currentValue = c, s !== null)
                            if (rr(s.value, c)) {
                                if (s.children === i.children && !nn.current) {
                                    t = e1(e, t, n);
                                    break e
                                }
                            } else
                                for (s = t.child, s !== null && (s.return = t); s !== null;) {
                                    var u = s.dependencies;
                                    if (u !== null) {
                                        c = s.child;
                                        for (var f = u.firstContext; f !== null;) {
                                            if (f.context === r) {
                                                if (s.tag === 1) {
                                                    f = Qr(-1, n & -n), f.tag = 2;
                                                    var p = s.updateQueue;
                                                    if (p !== null) {
                                                        p = p.shared;
                                                        var h = p.pending;
                                                        h === null ? f.next = f : (f.next = h.next, h.next = f), p.pending = f
                                                    }
                                                }
                                                s.lanes |= n, f = s.alternate, f !== null && (f.lanes |= n), Eu(s.return, n, t), u.lanes |= n;
                                                break
                                            }
                                            f = f.next
                                        }
                                    } else if (s.tag === 10) c = s.type === t.type ? null : s.child;
                                    else if (s.tag === 18) {
                                        if (c = s.return, c === null) throw Error($(341));
                                        c.lanes |= n, u = c.alternate, u !== null && (u.lanes |= n), Eu(c, n, t), c = s.sibling
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
                        zt(e, t, i.children, n),
                        t = t.child
                    }
                    return t;
                case 9:
                    return i = t.type, r = t.pendingProps.children, R5(t, n), i = Vn(i), r = r(i), t.flags |= 1, zt(e, t, r, n), t.child;
                case 14:
                    return r = t.type, i = Yn(r, t.pendingProps), i = Yn(r.type, i), o6(e, t, r, i, n);
                case 15:
                    return W8(e, t, t.type, t.pendingProps, n);
                case 17:
                    return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Yn(r, i), N2(e, t), t.tag = 1, rn(r) ? (e = !0, Q2(t)) : e = !1, R5(t, n), b8(t, r, i), bu(t, r, i, n), Su(null, t, r, !0, e, n);
                case 19:
                    return J8(e, t, n);
                case 22:
                    return K8(e, t, n)
            }
            throw Error($(156, t.tag))
        };

        function mm(e, t) {
            return B6(e, t)
        }

        function YM(e, t, n, r) {
            this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
        }

        function Pn(e, t, n, r) {
            return new YM(e, t, n, r)
        }

        function b4(e) {
            return e = e.prototype, !(!e || !e.isReactComponent)
        }

        function JM(e) {
            if (typeof e == "function") return b4(e) ? 1 : 0;
            if (e != null) {
                if (e = e.$$typeof, e === Uu) return 11;
                if (e === ju) return 14
            }
            return 2
        }

        function F1(e, t) {
            var n = e.alternate;
            return n === null ? (n = Pn(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
                lanes: t.lanes,
                firstContext: t.firstContext
            }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
        }

        function D2(e, t, n, r, i, s) {
            var c = 2;
            if (r = e, typeof e == "function") b4(e) && (c = 1);
            else if (typeof e == "string") c = 5;
            else e: switch (e) {
                case _5:
                    return T0(n.children, i, s, t);
                case Bu:
                    c = 8, i |= 8;
                    break;
                case qc:
                    return e = Pn(12, n, t, i | 2), e.elementType = qc, e.lanes = s, e;
                case Wc:
                    return e = Pn(13, n, t, i), e.elementType = Wc, e.lanes = s, e;
                case Kc:
                    return e = Pn(19, n, t, i), e.elementType = Kc, e.lanes = s, e;
                case C6:
                    return ws(n, i, s, t);
                default:
                    if (typeof e == "object" && e !== null) switch (e.$$typeof) {
                        case A6:
                            c = 10;
                            break e;
                        case b6:
                            c = 9;
                            break e;
                        case Uu:
                            c = 11;
                            break e;
                        case ju:
                            c = 14;
                            break e;
                        case M1:
                            c = 16, r = null;
                            break e
                    }
                    throw Error($(130, e == null ? e : typeof e, ""))
            }
            return t = Pn(c, n, t, i), t.elementType = e, t.type = r, t.lanes = s, t
        }

        function T0(e, t, n, r) {
            return e = Pn(7, e, r, t), e.lanes = n, e
        }

        function ws(e, t, n, r) {
            return e = Pn(22, e, r, t), e.elementType = C6, e.lanes = n, e.stateNode = {
                isHidden: !1
            }, e
        }

        function Gc(e, t, n) {
            return e = Pn(6, e, null, t), e.lanes = n, e
        }

        function zc(e, t, n) {
            return t = Pn(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
                containerInfo: e.containerInfo,
                pendingChildren: null,
                implementation: e.implementation
            }, t
        }

        function eZ(e, t, n, r, i) {
            this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Zc(0), this.expirationTimes = Zc(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Zc(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null
        }

        function C4(e, t, n, r, i, s, c, u, f) {
            return e = new eZ(e, t, n, u, f), t === 1 ? (t = 1, s === !0 && (t |= 8)) : t = 0, s = Pn(3, null, null, t), e.current = s, s.stateNode = e, s.memoizedState = {
                element: r,
                isDehydrated: n,
                cache: null,
                transitions: null,
                pendingSuspenseBoundaries: null
            }, s4(s), e
        }

        function tZ(e, t, n) {
            var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
            return {
                $$typeof: y5,
                key: r == null ? null : "" + r,
                children: e,
                containerInfo: t,
                implementation: n
            }
        }

        function vm(e) {
            if (!e) return U1;
            e = e._reactInternals;
            e: {
                if (N0(e) !== e || e.tag !== 1) throw Error($(170));
                var t = e;do {
                    switch (t.tag) {
                        case 3:
                            t = t.stateNode.context;
                            break e;
                        case 1:
                            if (rn(t.type)) {
                                t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                                break e
                            }
                    }
                    t = t.return
                } while (t !== null);
                throw Error($(171))
            }
            if (e.tag === 1) {
                var n = e.type;
                if (rn(n)) return m8(e, n, t)
            }
            return t
        }

        function gm(e, t, n, r, i, s, c, u, f) {
            return e = C4(n, r, !0, e, i, s, c, u, f), e.context = vm(null), n = e.current, r = $t(), i = D1(n), s = Qr(r, i), s.callback = t ?? null, V1(n, s, i), e.current.lanes = i, Ti(e, i, r), an(e, r), e
        }

        function Es(e, t, n, r) {
            var i = t.current,
                s = $t(),
                c = D1(i);
            return n = vm(n), t.context === null ? t.context = n : t.pendingContext = n, t = Qr(s, c), t.payload = {
                element: e
            }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = V1(i, t, c), e !== null && (nr(e, i, c, s), L2(e, i, c)), c
        }

        function cs(e) {
            if (e = e.current, !e.child) return null;
            switch (e.child.tag) {
                case 5:
                    return e.child.stateNode;
                default:
                    return e.child.stateNode
            }
        }

        function y6(e, t) {
            if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
                var n = e.retryLane;
                e.retryLane = n !== 0 && n < t ? n : t
            }
        }

        function x4(e, t) {
            y6(e, t), (e = e.alternate) && y6(e, t)
        }

        function nZ() {
            return null
        }
        var ym = typeof reportError == "function" ? reportError : function(e) {
            console.error(e)
        };

        function S4(e) {
            this._internalRoot = e
        }
        As.prototype.render = S4.prototype.render = function(e) {
            var t = this._internalRoot;
            if (t === null) throw Error($(409));
            Es(e, t, null, null)
        };
        As.prototype.unmount = S4.prototype.unmount = function() {
            var e = this._internalRoot;
            if (e !== null) {
                this._internalRoot = null;
                var t = e.containerInfo;
                R0(function() {
                    Es(null, e, null, null)
                }), t[Yr] = null
            }
        };

        function As(e) {
            this._internalRoot = e
        }
        As.prototype.unstable_scheduleHydration = function(e) {
            if (e) {
                var t = W6();
                e = {
                    blockedOn: null,
                    target: e,
                    priority: t
                };
                for (var n = 0; n < T1.length && t !== 0 && t < T1[n].priority; n++);
                T1.splice(n, 0, e), n === 0 && Q6(e)
            }
        };

        function M4(e) {
            return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
        }

        function bs(e) {
            return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
        }

        function _6() {}

        function rZ(e, t, n, r, i) {
            if (i) {
                if (typeof r == "function") {
                    var s = r;
                    r = function() {
                        var p = cs(c);
                        s.call(p)
                    }
                }
                var c = gm(t, r, e, 0, null, !1, !1, "", _6);
                return e._reactRootContainer = c, e[Yr] = c.current, wi(e.nodeType === 8 ? e.parentNode : e), R0(), c
            }
            for (; i = e.lastChild;) e.removeChild(i);
            if (typeof r == "function") {
                var u = r;
                r = function() {
                    var p = cs(f);
                    u.call(p)
                }
            }
            var f = C4(e, 0, !1, null, null, !1, !1, "", _6);
            return e._reactRootContainer = f, e[Yr] = f.current, wi(e.nodeType === 8 ? e.parentNode : e), R0(function() {
                Es(t, f, n, r)
            }), f
        }

        function Cs(e, t, n, r, i) {
            var s = n._reactRootContainer;
            if (s) {
                var c = s;
                if (typeof i == "function") {
                    var u = i;
                    i = function() {
                        var f = cs(c);
                        u.call(f)
                    }
                }
                Es(t, c, e, i)
            } else c = rZ(n, t, e, i, r);
            return cs(c)
        }
        $6 = function(e) {
            switch (e.tag) {
                case 3:
                    var t = e.stateNode;
                    if (t.current.memoizedState.isDehydrated) {
                        var n = ti(t.pendingLanes);
                        n !== 0 && ($u(t, n | 1), an(t, rt()), !(be & 6) && (U5 = rt() + 500, z1()))
                    }
                    break;
                case 13:
                    R0(function() {
                        var r = Jr(e, 1);
                        if (r !== null) {
                            var i = $t();
                            nr(r, e, 1, i)
                        }
                    }), x4(e, 1)
            }
        };
        qu = function(e) {
            if (e.tag === 13) {
                var t = Jr(e, 134217728);
                if (t !== null) {
                    var n = $t();
                    nr(t, e, 134217728, n)
                }
                x4(e, 134217728)
            }
        };
        q6 = function(e) {
            if (e.tag === 13) {
                var t = D1(e),
                    n = Jr(e, t);
                if (n !== null) {
                    var r = $t();
                    nr(n, e, t, r)
                }
                x4(e, t)
            }
        };
        W6 = function() {
            return ke
        };
        K6 = function(e, t) {
            var n = ke;
            try {
                return ke = e, t()
            } finally {
                ke = n
            }
        };
        iu = function(e, t, n) {
            switch (t) {
                case "input":
                    if (Yc(e, n), t = n.name, n.type === "radio" && t != null) {
                        for (n = e; n.parentNode;) n = n.parentNode;
                        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                            var r = n[t];
                            if (r !== e && r.form === e.form) {
                                var i = ps(r);
                                if (!i) throw Error($(90));
                                S6(r), Yc(r, i)
                            }
                        }
                    }
                    break;
                case "textarea":
                    Z6(e, n);
                    break;
                case "select":
                    t = n.value, t != null && I5(e, !!n.multiple, t, !1)
            }
        };
        P6 = w4;
        N6 = R0;
        var aZ = {
                usingClientEntryPoint: !1,
                Events: [ki, b5, ps, L6, R6, w4]
            },
            Xa = {
                findFiberByHostInstance: x0,
                bundleType: 0,
                version: "18.2.0",
                rendererPackageName: "react-dom"
            },
            iZ = {
                bundleType: Xa.bundleType,
                version: Xa.version,
                rendererPackageName: Xa.rendererPackageName,
                rendererConfig: Xa.rendererConfig,
                overrideHookState: null,
                overrideHookStateDeletePath: null,
                overrideHookStateRenamePath: null,
                overrideProps: null,
                overridePropsDeletePath: null,
                overridePropsRenamePath: null,
                setErrorHandler: null,
                setSuspenseHandler: null,
                scheduleUpdate: null,
                currentDispatcherRef: t1.ReactCurrentDispatcher,
                findHostInstanceByFiber: function(e) {
                    return e = D6(e), e === null ? null : e.stateNode
                },
                findFiberByHostInstance: Xa.findFiberByHostInstance || nZ,
                findHostInstancesForRefresh: null,
                scheduleRefresh: null,
                scheduleRoot: null,
                setRefreshHandler: null,
                getCurrentFiber: null,
                reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
            };
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && (Ya = __REACT_DEVTOOLS_GLOBAL_HOOK__, !Ya.isDisabled && Ya.supportsFiber)) try {
            us = Ya.inject(iZ), xr = Ya
        } catch {}
        var Ya;
        yn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = aZ;
        yn.createPortal = function(e, t) {
            var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
            if (!M4(t)) throw Error($(200));
            return tZ(e, t, null, n)
        };
        yn.createRoot = function(e, t) {
            if (!M4(e)) throw Error($(299));
            var n = !1,
                r = "",
                i = ym;
            return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = C4(e, 1, !1, null, null, n, !1, r, i), e[Yr] = t.current, wi(e.nodeType === 8 ? e.parentNode : e), new S4(t)
        };
        yn.findDOMNode = function(e) {
            if (e == null) return null;
            if (e.nodeType === 1) return e;
            var t = e._reactInternals;
            if (t === void 0) throw typeof e.render == "function" ? Error($(188)) : (e = Object.keys(e).join(","), Error($(268, e)));
            return e = D6(t), e = e === null ? null : e.stateNode, e
        };
        yn.flushSync = function(e) {
            return R0(e)
        };
        yn.hydrate = function(e, t, n) {
            if (!bs(t)) throw Error($(200));
            return Cs(null, e, t, !0, n)
        };
        yn.hydrateRoot = function(e, t, n) {
            if (!M4(e)) throw Error($(405));
            var r = n != null && n.hydratedSources || null,
                i = !1,
                s = "",
                c = ym;
            if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (s = n.identifierPrefix), n.onRecoverableError !== void 0 && (c = n.onRecoverableError)), t = gm(t, null, e, 1, n ?? null, i, !1, s, c), e[Yr] = t.current, wi(e), r)
                for (e = 0; e < r.length; e++) n = r[e], i = n._getVersion, i = i(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(n, i);
            return new As(t)
        };
        yn.render = function(e, t, n) {
            if (!bs(t)) throw Error($(200));
            return Cs(null, e, t, !1, n)
        };
        yn.unmountComponentAtNode = function(e) {
            if (!bs(e)) throw Error($(40));
            return e._reactRootContainer ? (R0(function() {
                Cs(null, null, e, !1, function() {
                    e._reactRootContainer = null, e[Yr] = null
                })
            }), !0) : !1
        };
        yn.unstable_batchedUpdates = w4;
        yn.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
            if (!bs(n)) throw Error($(200));
            if (e == null || e._reactInternals === void 0) throw Error($(38));
            return Cs(e, t, n, !1, r)
        };
        yn.version = "18.2.0-next-9e3b772b8-20220608"
    });
    var xs = Ut((lR, Em) => {
        "use strict";
        var cR = g(A());

        function wm() {
            if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(wm)
            } catch (e) {
                console.error(e)
            }
        }
        wm(), Em.exports = _m()
    });
    var Is = Ut(U4 => {
        "use strict";
        var ON = g(A()),
            Jm = xs();
        U4.createRoot = Jm.createRoot, U4.hydrateRoot = Jm.hydrateRoot;
        var IN
    });
    var eg = Ut(u7 => {
        "use strict";
        var uH = g(A());
        var Ak = Ee(),
            bk = Symbol.for("react.element"),
            Ck = Symbol.for("react.fragment"),
            xk = Object.prototype.hasOwnProperty,
            Sk = Ak.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
            Mk = {
                key: !0,
                ref: !0,
                __self: !0,
                __source: !0
            };

        function Jv(e, t, n) {
            var r, i = {},
                s = null,
                c = null;
            n !== void 0 && (s = "" + n), t.key !== void 0 && (s = "" + t.key), t.ref !== void 0 && (c = t.ref);
            for (r in t) xk.call(t, r) && !Mk.hasOwnProperty(r) && (i[r] = t[r]);
            if (e && e.defaultProps)
                for (r in t = e.defaultProps, t) i[r] === void 0 && (i[r] = t[r]);
            return {
                $$typeof: bk,
                type: e,
                key: s,
                ref: c,
                props: i,
                _owner: Sk.current
            }
        }
        u7.Fragment = Ck;
        u7.jsx = Jv;
        u7.jsxs = Jv
    });
    var Wt = Ut((fH, tg) => {
        "use strict";
        var dH = g(A());
        tg.exports = eg()
    });
    var rg = Ut((yH, f7) => {
        var _H = g(A());
        (function() {
            "use strict";
            var e = {}.hasOwnProperty,
                t = "[native code]";

            function n() {
                for (var r = [], i = 0; i < arguments.length; i++) {
                    var s = arguments[i];
                    if (s) {
                        var c = typeof s;
                        if (c === "string" || c === "number") r.push(s);
                        else if (Array.isArray(s)) {
                            if (s.length) {
                                var u = n.apply(null, s);
                                u && r.push(u)
                            }
                        } else if (c === "object") {
                            if (s.toString !== Object.prototype.toString && !s.toString.toString().includes("[native code]")) {
                                r.push(s.toString());
                                continue
                            }
                            for (var f in s) e.call(s, f) && s[f] && r.push(f)
                        }
                    }
                }
                return r.join(" ")
            }
            typeof f7 < "u" && f7.exports ? (n.default = n, f7.exports = n) : typeof define == "function" && typeof define.amd == "object" && define.amd ? define("classnames", [], function() {
                return n
            }) : window.classNames = n
        })()
    });
    var T3 = Ut((ca, Xi) => {
        var GH = g(A());
        (function() {
            var e, t = "4.17.21",
                n = 200,
                r = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",
                i = "Expected a function",
                s = "Invalid `variable` option passed into `_.template`",
                c = "__lodash_hash_undefined__",
                u = 500,
                f = "__lodash_placeholder__",
                p = 1,
                h = 2,
                w = 4,
                v = 1,
                _ = 2,
                S = 1,
                I = 2,
                R = 4,
                b = 8,
                C = 16,
                x = 32,
                Z = 64,
                T = 128,
                P = 256,
                N = 512,
                H = 30,
                le = "...",
                te = 800,
                z = 16,
                G = 1,
                j = 2,
                ee = 3,
                q = 1 / 0,
                X = 9007199254740991,
                ne = 17976931348623157e292,
                he = 0 / 0,
                de = 4294967295,
                Ce = de - 1,
                Oe = de >>> 1,
                re = [
                    ["ary", T],
                    ["bind", S],
                    ["bindKey", I],
                    ["curry", b],
                    ["curryRight", C],
                    ["flip", N],
                    ["partial", x],
                    ["partialRight", Z],
                    ["rearg", P]
                ],
                Je = "[object Arguments]",
                ot = "[object Array]",
                st = "[object AsyncFunction]",
                gt = "[object Boolean]",
                Re = "[object Date]",
                Vt = "[object DOMException]",
                Ht = "[object Error]",
                xt = "[object Function]",
                Gn = "[object GeneratorFunction]",
                St = "[object Map]",
                Kt = "[object Number]",
                K0 = "[object Null]",
                yt = "[object Object]",
                ga = "[object Promise]",
                Q0 = "[object Proxy]",
                d1 = "[object RegExp]",
                Mt = "[object Set]",
                h1 = "[object String]",
                fr = "[object Symbol]",
                o0 = "[object Undefined]",
                zn = "[object WeakMap]",
                s0 = "[object WeakSet]",
                Pr = "[object ArrayBuffer]",
                dr = "[object DataView]",
                ya = "[object Float32Array]",
                _a = "[object Float64Array]",
                wa = "[object Int8Array]",
                hr = "[object Int16Array]",
                pr = "[object Int32Array]",
                X0 = "[object Uint8Array]",
                l0 = "[object Uint8ClampedArray]",
                Y0 = "[object Uint16Array]",
                Ea = "[object Uint32Array]",
                x7 = /\b__p \+= '';/g,
                _t = /\b(__p \+=) '' \+/g,
                S7 = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
                M7 = /&(?:amp|lt|gt|quot|#39);/g,
                c0 = /[&<>"']/g,
                Aa = RegExp(M7.source),
                J0 = RegExp(c0.source),
                no = /<%-([\s\S]+?)%>/g,
                Z7 = /<%([\s\S]+?)%>/g,
                G3 = /<%=([\s\S]+?)%>/g,
                Zg = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                Tg = /^\w*$/,
                Ig = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                T7 = /[\\^$.*+?()[\]{}|]/g,
                kg = RegExp(T7.source),
                I7 = /^\s+/,
                Og = /\s/,
                Lg = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
                Rg = /\{\n\/\* \[wrapped with (.+)\] \*/,
                Pg = /,? & /,
                Ng = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
                Vg = /[()=,{}\[\]\/\s]/,
                Hg = /\\(\\)?/g,
                Dg = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
                z3 = /\w*$/,
                Fg = /^[-+]0x[0-9a-f]+$/i,
                Bg = /^0b[01]+$/i,
                Ug = /^\[object .+?Constructor\]$/,
                jg = /^0o[0-7]+$/i,
                Gg = /^(?:0|[1-9]\d*)$/,
                zg = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
                ro = /($^)/,
                $g = /['\n\r\u2028\u2029\\]/g,
                ao = "\\ud800-\\udfff",
                qg = "\\u0300-\\u036f",
                Wg = "\\ufe20-\\ufe2f",
                Kg = "\\u20d0-\\u20ff",
                $3 = qg + Wg + Kg,
                q3 = "\\u2700-\\u27bf",
                W3 = "a-z\\xdf-\\xf6\\xf8-\\xff",
                Qg = "\\xac\\xb1\\xd7\\xf7",
                Xg = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",
                Yg = "\\u2000-\\u206f",
                Jg = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
                K3 = "A-Z\\xc0-\\xd6\\xd8-\\xde",
                Q3 = "\\ufe0e\\ufe0f",
                X3 = Qg + Xg + Yg + Jg,
                k7 = "['\u2019]",
                ey = "[" + ao + "]",
                Y3 = "[" + X3 + "]",
                io = "[" + $3 + "]",
                J3 = "\\d+",
                ty = "[" + q3 + "]",
                ef = "[" + W3 + "]",
                tf = "[^" + ao + X3 + J3 + q3 + W3 + K3 + "]",
                O7 = "\\ud83c[\\udffb-\\udfff]",
                ny = "(?:" + io + "|" + O7 + ")",
                nf = "[^" + ao + "]",
                L7 = "(?:\\ud83c[\\udde6-\\uddff]){2}",
                R7 = "[\\ud800-\\udbff][\\udc00-\\udfff]",
                e5 = "[" + K3 + "]",
                rf = "\\u200d",
                af = "(?:" + ef + "|" + tf + ")",
                ry = "(?:" + e5 + "|" + tf + ")",
                of = "(?:" + k7 + "(?:d|ll|m|re|s|t|ve))?",
                sf = "(?:" + k7 + "(?:D|LL|M|RE|S|T|VE))?",
                lf = ny + "?",
                cf = "[" + Q3 + "]?",
                ay = "(?:" + rf + "(?:" + [nf, L7, R7].join("|") + ")" + cf + lf + ")*",
                iy = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
                oy = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
                uf = cf + lf + ay,
                sy = "(?:" + [ty, L7, R7].join("|") + ")" + uf,
                ly = "(?:" + [nf + io + "?", io, L7, R7, ey].join("|") + ")",
                cy = RegExp(k7, "g"),
                uy = RegExp(io, "g"),
                P7 = RegExp(O7 + "(?=" + O7 + ")|" + ly + uf, "g"),
                fy = RegExp([e5 + "?" + ef + "+" + of + "(?=" + [Y3, e5, "$"].join("|") + ")", ry + "+" + sf + "(?=" + [Y3, e5 + af, "$"].join("|") + ")", e5 + "?" + af + "+" + of, e5 + "+" + sf, oy, iy, J3, sy].join("|"), "g"),
                dy = RegExp("[" + rf + ao + $3 + Q3 + "]"),
                hy = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
                py = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"],
                my = -1,
                De = {};
            De[ya] = De[_a] = De[wa] = De[hr] = De[pr] = De[X0] = De[l0] = De[Y0] = De[Ea] = !0, De[Je] = De[ot] = De[Pr] = De[gt] = De[dr] = De[Re] = De[Ht] = De[xt] = De[St] = De[Kt] = De[yt] = De[d1] = De[Mt] = De[h1] = De[zn] = !1;
            var Ne = {};
            Ne[Je] = Ne[ot] = Ne[Pr] = Ne[dr] = Ne[gt] = Ne[Re] = Ne[ya] = Ne[_a] = Ne[wa] = Ne[hr] = Ne[pr] = Ne[St] = Ne[Kt] = Ne[yt] = Ne[d1] = Ne[Mt] = Ne[h1] = Ne[fr] = Ne[X0] = Ne[l0] = Ne[Y0] = Ne[Ea] = !0, Ne[Ht] = Ne[xt] = Ne[zn] = !1;
            var vy = {
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
                gy = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;"
                },
                yy = {
                    "&amp;": "&",
                    "&lt;": "<",
                    "&gt;": ">",
                    "&quot;": '"',
                    "&#39;": "'"
                },
                _y = {
                    "\\": "\\",
                    "'": "'",
                    "\n": "n",
                    "\r": "r",
                    "\u2028": "u2028",
                    "\u2029": "u2029"
                },
                wy = parseFloat,
                Ey = parseInt,
                ff = typeof global == "object" && global && global.Object === Object && global,
                Ay = typeof self == "object" && self && self.Object === Object && self,
                ht = ff || Ay || Function("return this")(),
                N7 = typeof ca == "object" && ca && !ca.nodeType && ca,
                u0 = N7 && typeof Xi == "object" && Xi && !Xi.nodeType && Xi,
                df = u0 && u0.exports === N7,
                V7 = df && ff.process,
                bn = function() {
                    try {
                        var O = u0 && u0.require && u0.require("util").types;
                        return O || V7 && V7.binding && V7.binding("util")
                    } catch {}
                }(),
                hf = bn && bn.isArrayBuffer,
                pf = bn && bn.isDate,
                mf = bn && bn.isMap,
                vf = bn && bn.isRegExp,
                gf = bn && bn.isSet,
                yf = bn && bn.isTypedArray;

            function sn(O, D, V) {
                switch (V.length) {
                    case 0:
                        return O.call(D);
                    case 1:
                        return O.call(D, V[0]);
                    case 2:
                        return O.call(D, V[0], V[1]);
                    case 3:
                        return O.call(D, V[0], V[1], V[2])
                }
                return O.apply(D, V)
            }

            function by(O, D, V, Q) {
                for (var ue = -1, Se = O == null ? 0 : O.length; ++ue < Se;) {
                    var lt = O[ue];
                    D(Q, lt, V(lt), O)
                }
                return Q
            }

            function Cn(O, D) {
                for (var V = -1, Q = O == null ? 0 : O.length; ++V < Q && D(O[V], V, O) !== !1;);
                return O
            }

            function Cy(O, D) {
                for (var V = O == null ? 0 : O.length; V-- && D(O[V], V, O) !== !1;);
                return O
            }

            function _f(O, D) {
                for (var V = -1, Q = O == null ? 0 : O.length; ++V < Q;)
                    if (!D(O[V], V, O)) return !1;
                return !0
            }

            function p1(O, D) {
                for (var V = -1, Q = O == null ? 0 : O.length, ue = 0, Se = []; ++V < Q;) {
                    var lt = O[V];
                    D(lt, V, O) && (Se[ue++] = lt)
                }
                return Se
            }

            function oo(O, D) {
                var V = O == null ? 0 : O.length;
                return !!V && t5(O, D, 0) > -1
            }

            function H7(O, D, V) {
                for (var Q = -1, ue = O == null ? 0 : O.length; ++Q < ue;)
                    if (V(D, O[Q])) return !0;
                return !1
            }

            function je(O, D) {
                for (var V = -1, Q = O == null ? 0 : O.length, ue = Array(Q); ++V < Q;) ue[V] = D(O[V], V, O);
                return ue
            }

            function m1(O, D) {
                for (var V = -1, Q = D.length, ue = O.length; ++V < Q;) O[ue + V] = D[V];
                return O
            }

            function D7(O, D, V, Q) {
                var ue = -1,
                    Se = O == null ? 0 : O.length;
                for (Q && Se && (V = O[++ue]); ++ue < Se;) V = D(V, O[ue], ue, O);
                return V
            }

            function xy(O, D, V, Q) {
                var ue = O == null ? 0 : O.length;
                for (Q && ue && (V = O[--ue]); ue--;) V = D(V, O[ue], ue, O);
                return V
            }

            function F7(O, D) {
                for (var V = -1, Q = O == null ? 0 : O.length; ++V < Q;)
                    if (D(O[V], V, O)) return !0;
                return !1
            }
            var Sy = B7("length");

            function My(O) {
                return O.split("")
            }

            function Zy(O) {
                return O.match(Ng) || []
            }

            function wf(O, D, V) {
                var Q;
                return V(O, function(ue, Se, lt) {
                    if (D(ue, Se, lt)) return Q = Se, !1
                }), Q
            }

            function so(O, D, V, Q) {
                for (var ue = O.length, Se = V + (Q ? 1 : -1); Q ? Se-- : ++Se < ue;)
                    if (D(O[Se], Se, O)) return Se;
                return -1
            }

            function t5(O, D, V) {
                return D === D ? Fy(O, D, V) : so(O, Ef, V)
            }

            function Ty(O, D, V, Q) {
                for (var ue = V - 1, Se = O.length; ++ue < Se;)
                    if (Q(O[ue], D)) return ue;
                return -1
            }

            function Ef(O) {
                return O !== O
            }

            function Af(O, D) {
                var V = O == null ? 0 : O.length;
                return V ? j7(O, D) / V : he
            }

            function B7(O) {
                return function(D) {
                    return D == null ? e : D[O]
                }
            }

            function U7(O) {
                return function(D) {
                    return O == null ? e : O[D]
                }
            }

            function bf(O, D, V, Q, ue) {
                return ue(O, function(Se, lt, Pe) {
                    V = Q ? (Q = !1, Se) : D(V, Se, lt, Pe)
                }), V
            }

            function Iy(O, D) {
                var V = O.length;
                for (O.sort(D); V--;) O[V] = O[V].value;
                return O
            }

            function j7(O, D) {
                for (var V, Q = -1, ue = O.length; ++Q < ue;) {
                    var Se = D(O[Q]);
                    Se !== e && (V = V === e ? Se : V + Se)
                }
                return V
            }

            function G7(O, D) {
                for (var V = -1, Q = Array(O); ++V < O;) Q[V] = D(V);
                return Q
            }

            function ky(O, D) {
                return je(D, function(V) {
                    return [V, O[V]]
                })
            }

            function Cf(O) {
                return O && O.slice(0, Zf(O) + 1).replace(I7, "")
            }

            function ln(O) {
                return function(D) {
                    return O(D)
                }
            }

            function z7(O, D) {
                return je(D, function(V) {
                    return O[V]
                })
            }

            function ba(O, D) {
                return O.has(D)
            }

            function xf(O, D) {
                for (var V = -1, Q = O.length; ++V < Q && t5(D, O[V], 0) > -1;);
                return V
            }

            function Sf(O, D) {
                for (var V = O.length; V-- && t5(D, O[V], 0) > -1;);
                return V
            }

            function Oy(O, D) {
                for (var V = O.length, Q = 0; V--;) O[V] === D && ++Q;
                return Q
            }
            var Ly = U7(vy),
                Ry = U7(gy);

            function Py(O) {
                return "\\" + _y[O]
            }

            function Ny(O, D) {
                return O == null ? e : O[D]
            }

            function n5(O) {
                return dy.test(O)
            }

            function Vy(O) {
                return hy.test(O)
            }

            function Hy(O) {
                for (var D, V = []; !(D = O.next()).done;) V.push(D.value);
                return V
            }

            function $7(O) {
                var D = -1,
                    V = Array(O.size);
                return O.forEach(function(Q, ue) {
                    V[++D] = [ue, Q]
                }), V
            }

            function Mf(O, D) {
                return function(V) {
                    return O(D(V))
                }
            }

            function v1(O, D) {
                for (var V = -1, Q = O.length, ue = 0, Se = []; ++V < Q;) {
                    var lt = O[V];
                    (lt === D || lt === f) && (O[V] = f, Se[ue++] = V)
                }
                return Se
            }

            function lo(O) {
                var D = -1,
                    V = Array(O.size);
                return O.forEach(function(Q) {
                    V[++D] = Q
                }), V
            }

            function Dy(O) {
                var D = -1,
                    V = Array(O.size);
                return O.forEach(function(Q) {
                    V[++D] = [Q, Q]
                }), V
            }

            function Fy(O, D, V) {
                for (var Q = V - 1, ue = O.length; ++Q < ue;)
                    if (O[Q] === D) return Q;
                return -1
            }

            function By(O, D, V) {
                for (var Q = V + 1; Q--;)
                    if (O[Q] === D) return Q;
                return Q
            }

            function r5(O) {
                return n5(O) ? jy(O) : Sy(O)
            }

            function $n(O) {
                return n5(O) ? Gy(O) : My(O)
            }

            function Zf(O) {
                for (var D = O.length; D-- && Og.test(O.charAt(D)););
                return D
            }
            var Uy = U7(yy);

            function jy(O) {
                for (var D = P7.lastIndex = 0; P7.test(O);) ++D;
                return D
            }

            function Gy(O) {
                return O.match(P7) || []
            }

            function zy(O) {
                return O.match(fy) || []
            }
            var $y = function O(D) {
                    D = D == null ? ht : g1.defaults(ht.Object(), D, g1.pick(ht, py));
                    var V = D.Array,
                        Q = D.Date,
                        ue = D.Error,
                        Se = D.Function,
                        lt = D.Math,
                        Pe = D.Object,
                        q7 = D.RegExp,
                        qy = D.String,
                        xn = D.TypeError,
                        co = V.prototype,
                        Wy = Se.prototype,
                        a5 = Pe.prototype,
                        uo = D["__core-js_shared__"],
                        fo = Wy.toString,
                        Te = a5.hasOwnProperty,
                        Ky = 0,
                        Tf = function() {
                            var a = /[^.]+$/.exec(uo && uo.keys && uo.keys.IE_PROTO || "");
                            return a ? "Symbol(src)_1." + a : ""
                        }(),
                        ho = a5.toString,
                        Qy = fo.call(Pe),
                        Xy = ht._,
                        Yy = q7("^" + fo.call(Te).replace(T7, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                        po = df ? D.Buffer : e,
                        y1 = D.Symbol,
                        mo = D.Uint8Array,
                        If = po ? po.allocUnsafe : e,
                        vo = Mf(Pe.getPrototypeOf, Pe),
                        kf = Pe.create,
                        Of = a5.propertyIsEnumerable,
                        go = co.splice,
                        Lf = y1 ? y1.isConcatSpreadable : e,
                        Ca = y1 ? y1.iterator : e,
                        f0 = y1 ? y1.toStringTag : e,
                        yo = function() {
                            try {
                                var a = v0(Pe, "defineProperty");
                                return a({}, "", {}), a
                            } catch {}
                        }(),
                        Jy = D.clearTimeout !== ht.clearTimeout && D.clearTimeout,
                        e_ = Q && Q.now !== ht.Date.now && Q.now,
                        t_ = D.setTimeout !== ht.setTimeout && D.setTimeout,
                        _o = lt.ceil,
                        wo = lt.floor,
                        W7 = Pe.getOwnPropertySymbols,
                        n_ = po ? po.isBuffer : e,
                        Rf = D.isFinite,
                        r_ = co.join,
                        a_ = Mf(Pe.keys, Pe),
                        ct = lt.max,
                        Zt = lt.min,
                        i_ = Q.now,
                        o_ = D.parseInt,
                        Pf = lt.random,
                        s_ = co.reverse,
                        K7 = v0(D, "DataView"),
                        xa = v0(D, "Map"),
                        Q7 = v0(D, "Promise"),
                        i5 = v0(D, "Set"),
                        Sa = v0(D, "WeakMap"),
                        Ma = v0(Pe, "create"),
                        Eo = Sa && new Sa,
                        o5 = {},
                        l_ = g0(K7),
                        c_ = g0(xa),
                        u_ = g0(Q7),
                        f_ = g0(i5),
                        d_ = g0(Sa),
                        Ao = y1 ? y1.prototype : e,
                        Za = Ao ? Ao.valueOf : e,
                        Nf = Ao ? Ao.toString : e;

                    function y(a) {
                        if (Qe(a) && !fe(a) && !(a instanceof ye)) {
                            if (a instanceof Sn) return a;
                            if (Te.call(a, "__wrapped__")) return Vd(a)
                        }
                        return new Sn(a)
                    }
                    var s5 = function() {
                        function a() {}
                        return function(o) {
                            if (!$e(o)) return {};
                            if (kf) return kf(o);
                            a.prototype = o;
                            var l = new a;
                            return a.prototype = e, l
                        }
                    }();

                    function bo() {}

                    function Sn(a, o) {
                        this.__wrapped__ = a, this.__actions__ = [], this.__chain__ = !!o, this.__index__ = 0, this.__values__ = e
                    }
                    y.templateSettings = {
                        escape: no,
                        evaluate: Z7,
                        interpolate: G3,
                        variable: "",
                        imports: {
                            _: y
                        }
                    }, y.prototype = bo.prototype, y.prototype.constructor = y, Sn.prototype = s5(bo.prototype), Sn.prototype.constructor = Sn;

                    function ye(a) {
                        this.__wrapped__ = a, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = de, this.__views__ = []
                    }

                    function h_() {
                        var a = new ye(this.__wrapped__);
                        return a.__actions__ = Qt(this.__actions__), a.__dir__ = this.__dir__, a.__filtered__ = this.__filtered__, a.__iteratees__ = Qt(this.__iteratees__), a.__takeCount__ = this.__takeCount__, a.__views__ = Qt(this.__views__), a
                    }

                    function p_() {
                        if (this.__filtered__) {
                            var a = new ye(this);
                            a.__dir__ = -1, a.__filtered__ = !0
                        } else a = this.clone(), a.__dir__ *= -1;
                        return a
                    }

                    function m_() {
                        var a = this.__wrapped__.value(),
                            o = this.__dir__,
                            l = fe(a),
                            d = o < 0,
                            m = l ? a.length : 0,
                            E = Mw(0, m, this.__views__),
                            M = E.start,
                            k = E.end,
                            L = k - M,
                            F = d ? k : M - 1,
                            B = this.__iteratees__,
                            U = B.length,
                            K = 0,
                            J = Zt(L, this.__takeCount__);
                        if (!l || !d && m == L && J == L) return od(a, this.__actions__);
                        var oe = [];
                        e: for (; L-- && K < J;) {
                            F += o;
                            for (var me = -1, se = a[F]; ++me < U;) {
                                var ge = B[me],
                                    we = ge.iteratee,
                                    fn = ge.type,
                                    Bt = we(se);
                                if (fn == j) se = Bt;
                                else if (!Bt) {
                                    if (fn == G) continue e;
                                    break e
                                }
                            }
                            oe[K++] = se
                        }
                        return oe
                    }
                    ye.prototype = s5(bo.prototype), ye.prototype.constructor = ye;

                    function d0(a) {
                        var o = -1,
                            l = a == null ? 0 : a.length;
                        for (this.clear(); ++o < l;) {
                            var d = a[o];
                            this.set(d[0], d[1])
                        }
                    }

                    function v_() {
                        this.__data__ = Ma ? Ma(null) : {}, this.size = 0
                    }

                    function g_(a) {
                        var o = this.has(a) && delete this.__data__[a];
                        return this.size -= o ? 1 : 0, o
                    }

                    function y_(a) {
                        var o = this.__data__;
                        if (Ma) {
                            var l = o[a];
                            return l === c ? e : l
                        }
                        return Te.call(o, a) ? o[a] : e
                    }

                    function __(a) {
                        var o = this.__data__;
                        return Ma ? o[a] !== e : Te.call(o, a)
                    }

                    function w_(a, o) {
                        var l = this.__data__;
                        return this.size += this.has(a) ? 0 : 1, l[a] = Ma && o === e ? c : o, this
                    }
                    d0.prototype.clear = v_, d0.prototype.delete = g_, d0.prototype.get = y_, d0.prototype.has = __, d0.prototype.set = w_;

                    function Nr(a) {
                        var o = -1,
                            l = a == null ? 0 : a.length;
                        for (this.clear(); ++o < l;) {
                            var d = a[o];
                            this.set(d[0], d[1])
                        }
                    }

                    function E_() {
                        this.__data__ = [], this.size = 0
                    }

                    function A_(a) {
                        var o = this.__data__,
                            l = Co(o, a);
                        if (l < 0) return !1;
                        var d = o.length - 1;
                        return l == d ? o.pop() : go.call(o, l, 1), --this.size, !0
                    }

                    function b_(a) {
                        var o = this.__data__,
                            l = Co(o, a);
                        return l < 0 ? e : o[l][1]
                    }

                    function C_(a) {
                        return Co(this.__data__, a) > -1
                    }

                    function x_(a, o) {
                        var l = this.__data__,
                            d = Co(l, a);
                        return d < 0 ? (++this.size, l.push([a, o])) : l[d][1] = o, this
                    }
                    Nr.prototype.clear = E_, Nr.prototype.delete = A_, Nr.prototype.get = b_, Nr.prototype.has = C_, Nr.prototype.set = x_;

                    function Vr(a) {
                        var o = -1,
                            l = a == null ? 0 : a.length;
                        for (this.clear(); ++o < l;) {
                            var d = a[o];
                            this.set(d[0], d[1])
                        }
                    }

                    function S_() {
                        this.size = 0, this.__data__ = {
                            hash: new d0,
                            map: new(xa || Nr),
                            string: new d0
                        }
                    }

                    function M_(a) {
                        var o = No(this, a).delete(a);
                        return this.size -= o ? 1 : 0, o
                    }

                    function Z_(a) {
                        return No(this, a).get(a)
                    }

                    function T_(a) {
                        return No(this, a).has(a)
                    }

                    function I_(a, o) {
                        var l = No(this, a),
                            d = l.size;
                        return l.set(a, o), this.size += l.size == d ? 0 : 1, this
                    }
                    Vr.prototype.clear = S_, Vr.prototype.delete = M_, Vr.prototype.get = Z_, Vr.prototype.has = T_, Vr.prototype.set = I_;

                    function h0(a) {
                        var o = -1,
                            l = a == null ? 0 : a.length;
                        for (this.__data__ = new Vr; ++o < l;) this.add(a[o])
                    }

                    function k_(a) {
                        return this.__data__.set(a, c), this
                    }

                    function O_(a) {
                        return this.__data__.has(a)
                    }
                    h0.prototype.add = h0.prototype.push = k_, h0.prototype.has = O_;

                    function qn(a) {
                        var o = this.__data__ = new Nr(a);
                        this.size = o.size
                    }

                    function L_() {
                        this.__data__ = new Nr, this.size = 0
                    }

                    function R_(a) {
                        var o = this.__data__,
                            l = o.delete(a);
                        return this.size = o.size, l
                    }

                    function P_(a) {
                        return this.__data__.get(a)
                    }

                    function N_(a) {
                        return this.__data__.has(a)
                    }

                    function V_(a, o) {
                        var l = this.__data__;
                        if (l instanceof Nr) {
                            var d = l.__data__;
                            if (!xa || d.length < n - 1) return d.push([a, o]), this.size = ++l.size, this;
                            l = this.__data__ = new Vr(d)
                        }
                        return l.set(a, o), this.size = l.size, this
                    }
                    qn.prototype.clear = L_, qn.prototype.delete = R_, qn.prototype.get = P_, qn.prototype.has = N_, qn.prototype.set = V_;

                    function Vf(a, o) {
                        var l = fe(a),
                            d = !l && y0(a),
                            m = !l && !d && b1(a),
                            E = !l && !d && !m && f5(a),
                            M = l || d || m || E,
                            k = M ? G7(a.length, qy) : [],
                            L = k.length;
                        for (var F in a)(o || Te.call(a, F)) && !(M && (F == "length" || m && (F == "offset" || F == "parent") || E && (F == "buffer" || F == "byteLength" || F == "byteOffset") || Br(F, L))) && k.push(F);
                        return k
                    }

                    function Hf(a) {
                        var o = a.length;
                        return o ? a[sl(0, o - 1)] : e
                    }

                    function H_(a, o) {
                        return Vo(Qt(a), p0(o, 0, a.length))
                    }

                    function D_(a) {
                        return Vo(Qt(a))
                    }

                    function X7(a, o, l) {
                        (l !== e && !Wn(a[o], l) || l === e && !(o in a)) && Hr(a, o, l)
                    }

                    function Ta(a, o, l) {
                        var d = a[o];
                        (!(Te.call(a, o) && Wn(d, l)) || l === e && !(o in a)) && Hr(a, o, l)
                    }

                    function Co(a, o) {
                        for (var l = a.length; l--;)
                            if (Wn(a[l][0], o)) return l;
                        return -1
                    }

                    function F_(a, o, l, d) {
                        return _1(a, function(m, E, M) {
                            o(d, m, l(m), M)
                        }), d
                    }

                    function Df(a, o) {
                        return a && vr(o, pt(o), a)
                    }

                    function B_(a, o) {
                        return a && vr(o, Yt(o), a)
                    }

                    function Hr(a, o, l) {
                        o == "__proto__" && yo ? yo(a, o, {
                            configurable: !0,
                            enumerable: !0,
                            value: l,
                            writable: !0
                        }) : a[o] = l
                    }

                    function Y7(a, o) {
                        for (var l = -1, d = o.length, m = V(d), E = a == null; ++l < d;) m[l] = E ? e : Ol(a, o[l]);
                        return m
                    }

                    function p0(a, o, l) {
                        return a === a && (l !== e && (a = a <= l ? a : l), o !== e && (a = a >= o ? a : o)), a
                    }

                    function Mn(a, o, l, d, m, E) {
                        var M, k = o & p,
                            L = o & h,
                            F = o & w;
                        if (l && (M = m ? l(a, d, m, E) : l(a)), M !== e) return M;
                        if (!$e(a)) return a;
                        var B = fe(a);
                        if (B) {
                            if (M = Tw(a), !k) return Qt(a, M)
                        } else {
                            var U = Tt(a),
                                K = U == xt || U == Gn;
                            if (b1(a)) return cd(a, k);
                            if (U == yt || U == Je || K && !m) {
                                if (M = L || K ? {} : Zd(a), !k) return L ? yw(a, B_(M, a)) : gw(a, Df(M, a))
                            } else {
                                if (!Ne[U]) return m ? a : {};
                                M = Iw(a, U, k)
                            }
                        }
                        E || (E = new qn);
                        var J = E.get(a);
                        if (J) return J;
                        E.set(a, M), rh(a) ? a.forEach(function(se) {
                            M.add(Mn(se, o, l, se, a, E))
                        }) : th(a) && a.forEach(function(se, ge) {
                            M.set(ge, Mn(se, o, l, ge, a, E))
                        });
                        var oe = F ? L ? yl : gl : L ? Yt : pt,
                            me = B ? e : oe(a);
                        return Cn(me || a, function(se, ge) {
                            me && (ge = se, se = a[ge]), Ta(M, ge, Mn(se, o, l, ge, a, E))
                        }), M
                    }

                    function U_(a) {
                        var o = pt(a);
                        return function(l) {
                            return Ff(l, a, o)
                        }
                    }

                    function Ff(a, o, l) {
                        var d = l.length;
                        if (a == null) return !d;
                        for (a = Pe(a); d--;) {
                            var m = l[d],
                                E = o[m],
                                M = a[m];
                            if (M === e && !(m in a) || !E(M)) return !1
                        }
                        return !0
                    }

                    function Bf(a, o, l) {
                        if (typeof a != "function") throw new xn(i);
                        return Na(function() {
                            a.apply(e, l)
                        }, o)
                    }

                    function Ia(a, o, l, d) {
                        var m = -1,
                            E = oo,
                            M = !0,
                            k = a.length,
                            L = [],
                            F = o.length;
                        if (!k) return L;
                        l && (o = je(o, ln(l))), d ? (E = H7, M = !1) : o.length >= n && (E = ba, M = !1, o = new h0(o));
                        e: for (; ++m < k;) {
                            var B = a[m],
                                U = l == null ? B : l(B);
                            if (B = d || B !== 0 ? B : 0, M && U === U) {
                                for (var K = F; K--;)
                                    if (o[K] === U) continue e;
                                L.push(B)
                            } else E(o, U, d) || L.push(B)
                        }
                        return L
                    }
                    var _1 = pd(mr),
                        Uf = pd(el, !0);

                    function j_(a, o) {
                        var l = !0;
                        return _1(a, function(d, m, E) {
                            return l = !!o(d, m, E), l
                        }), l
                    }

                    function xo(a, o, l) {
                        for (var d = -1, m = a.length; ++d < m;) {
                            var E = a[d],
                                M = o(E);
                            if (M != null && (k === e ? M === M && !un(M) : l(M, k))) var k = M,
                                L = E
                        }
                        return L
                    }

                    function G_(a, o, l, d) {
                        var m = a.length;
                        for (l = pe(l), l < 0 && (l = -l > m ? 0 : m + l), d = d === e || d > m ? m : pe(d), d < 0 && (d += m), d = l > d ? 0 : ih(d); l < d;) a[l++] = o;
                        return a
                    }

                    function jf(a, o) {
                        var l = [];
                        return _1(a, function(d, m, E) {
                            o(d, m, E) && l.push(d)
                        }), l
                    }

                    function wt(a, o, l, d, m) {
                        var E = -1,
                            M = a.length;
                        for (l || (l = Ow), m || (m = []); ++E < M;) {
                            var k = a[E];
                            o > 0 && l(k) ? o > 1 ? wt(k, o - 1, l, d, m) : m1(m, k) : d || (m[m.length] = k)
                        }
                        return m
                    }
                    var J7 = md(),
                        Gf = md(!0);

                    function mr(a, o) {
                        return a && J7(a, o, pt)
                    }

                    function el(a, o) {
                        return a && Gf(a, o, pt)
                    }

                    function So(a, o) {
                        return p1(o, function(l) {
                            return Ur(a[l])
                        })
                    }

                    function m0(a, o) {
                        o = E1(o, a);
                        for (var l = 0, d = o.length; a != null && l < d;) a = a[gr(o[l++])];
                        return l && l == d ? a : e
                    }

                    function zf(a, o, l) {
                        var d = o(a);
                        return fe(a) ? d : m1(d, l(a))
                    }

                    function Dt(a) {
                        return a == null ? a === e ? o0 : K0 : f0 && f0 in Pe(a) ? Sw(a) : Dw(a)
                    }

                    function tl(a, o) {
                        return a > o
                    }

                    function z_(a, o) {
                        return a != null && Te.call(a, o)
                    }

                    function $_(a, o) {
                        return a != null && o in Pe(a)
                    }

                    function q_(a, o, l) {
                        return a >= Zt(o, l) && a < ct(o, l)
                    }

                    function nl(a, o, l) {
                        for (var d = l ? H7 : oo, m = a[0].length, E = a.length, M = E, k = V(E), L = 1 / 0, F = []; M--;) {
                            var B = a[M];
                            M && o && (B = je(B, ln(o))), L = Zt(B.length, L), k[M] = !l && (o || m >= 120 && B.length >= 120) ? new h0(M && B) : e
                        }
                        B = a[0];
                        var U = -1,
                            K = k[0];
                        e: for (; ++U < m && F.length < L;) {
                            var J = B[U],
                                oe = o ? o(J) : J;
                            if (J = l || J !== 0 ? J : 0, !(K ? ba(K, oe) : d(F, oe, l))) {
                                for (M = E; --M;) {
                                    var me = k[M];
                                    if (!(me ? ba(me, oe) : d(a[M], oe, l))) continue e
                                }
                                K && K.push(oe), F.push(J)
                            }
                        }
                        return F
                    }

                    function W_(a, o, l, d) {
                        return mr(a, function(m, E, M) {
                            o(d, l(m), E, M)
                        }), d
                    }

                    function ka(a, o, l) {
                        o = E1(o, a), a = Od(a, o);
                        var d = a == null ? a : a[gr(Tn(o))];
                        return d == null ? e : sn(d, a, l)
                    }

                    function $f(a) {
                        return Qe(a) && Dt(a) == Je
                    }

                    function K_(a) {
                        return Qe(a) && Dt(a) == Pr
                    }

                    function Q_(a) {
                        return Qe(a) && Dt(a) == Re
                    }

                    function Oa(a, o, l, d, m) {
                        return a === o ? !0 : a == null || o == null || !Qe(a) && !Qe(o) ? a !== a && o !== o : X_(a, o, l, d, Oa, m)
                    }

                    function X_(a, o, l, d, m, E) {
                        var M = fe(a),
                            k = fe(o),
                            L = M ? ot : Tt(a),
                            F = k ? ot : Tt(o);
                        L = L == Je ? yt : L, F = F == Je ? yt : F;
                        var B = L == yt,
                            U = F == yt,
                            K = L == F;
                        if (K && b1(a)) {
                            if (!b1(o)) return !1;
                            M = !0, B = !1
                        }
                        if (K && !B) return E || (E = new qn), M || f5(a) ? xd(a, o, l, d, m, E) : Cw(a, o, L, l, d, m, E);
                        if (!(l & v)) {
                            var J = B && Te.call(a, "__wrapped__"),
                                oe = U && Te.call(o, "__wrapped__");
                            if (J || oe) {
                                var me = J ? a.value() : a,
                                    se = oe ? o.value() : o;
                                return E || (E = new qn), m(me, se, l, d, E)
                            }
                        }
                        return K ? (E || (E = new qn), xw(a, o, l, d, m, E)) : !1
                    }

                    function Y_(a) {
                        return Qe(a) && Tt(a) == St
                    }

                    function rl(a, o, l, d) {
                        var m = l.length,
                            E = m,
                            M = !d;
                        if (a == null) return !E;
                        for (a = Pe(a); m--;) {
                            var k = l[m];
                            if (M && k[2] ? k[1] !== a[k[0]] : !(k[0] in a)) return !1
                        }
                        for (; ++m < E;) {
                            k = l[m];
                            var L = k[0],
                                F = a[L],
                                B = k[1];
                            if (M && k[2]) {
                                if (F === e && !(L in a)) return !1
                            } else {
                                var U = new qn;
                                if (d) var K = d(F, B, L, a, o, U);
                                if (!(K === e ? Oa(B, F, v | _, d, U) : K)) return !1
                            }
                        }
                        return !0
                    }

                    function qf(a) {
                        if (!$e(a) || Rw(a)) return !1;
                        var o = Ur(a) ? Yy : Ug;
                        return o.test(g0(a))
                    }

                    function J_(a) {
                        return Qe(a) && Dt(a) == d1
                    }

                    function ew(a) {
                        return Qe(a) && Tt(a) == Mt
                    }

                    function tw(a) {
                        return Qe(a) && jo(a.length) && !!De[Dt(a)]
                    }

                    function Wf(a) {
                        return typeof a == "function" ? a : a == null ? Jt : typeof a == "object" ? fe(a) ? Xf(a[0], a[1]) : Qf(a) : vh(a)
                    }

                    function al(a) {
                        if (!Pa(a)) return a_(a);
                        var o = [];
                        for (var l in Pe(a)) Te.call(a, l) && l != "constructor" && o.push(l);
                        return o
                    }

                    function nw(a) {
                        if (!$e(a)) return Hw(a);
                        var o = Pa(a),
                            l = [];
                        for (var d in a) d == "constructor" && (o || !Te.call(a, d)) || l.push(d);
                        return l
                    }

                    function il(a, o) {
                        return a < o
                    }

                    function Kf(a, o) {
                        var l = -1,
                            d = Xt(a) ? V(a.length) : [];
                        return _1(a, function(m, E, M) {
                            d[++l] = o(m, E, M)
                        }), d
                    }

                    function Qf(a) {
                        var o = wl(a);
                        return o.length == 1 && o[0][2] ? Id(o[0][0], o[0][1]) : function(l) {
                            return l === a || rl(l, a, o)
                        }
                    }

                    function Xf(a, o) {
                        return Al(a) && Td(o) ? Id(gr(a), o) : function(l) {
                            var d = Ol(l, a);
                            return d === e && d === o ? Ll(l, a) : Oa(o, d, v | _)
                        }
                    }

                    function Mo(a, o, l, d, m) {
                        a !== o && J7(o, function(E, M) {
                            if (m || (m = new qn), $e(E)) rw(a, o, M, l, Mo, d, m);
                            else {
                                var k = d ? d(Cl(a, M), E, M + "", a, o, m) : e;
                                k === e && (k = E), X7(a, M, k)
                            }
                        }, Yt)
                    }

                    function rw(a, o, l, d, m, E, M) {
                        var k = Cl(a, l),
                            L = Cl(o, l),
                            F = M.get(L);
                        if (F) {
                            X7(a, l, F);
                            return
                        }
                        var B = E ? E(k, L, l + "", a, o, M) : e,
                            U = B === e;
                        if (U) {
                            var K = fe(L),
                                J = !K && b1(L),
                                oe = !K && !J && f5(L);
                            B = L, K || J || oe ? fe(k) ? B = k : et(k) ? B = Qt(k) : J ? (U = !1, B = cd(L, !0)) : oe ? (U = !1, B = ud(L, !0)) : B = [] : Va(L) || y0(L) ? (B = k, y0(k) ? B = oh(k) : (!$e(k) || Ur(k)) && (B = Zd(L))) : U = !1
                        }
                        U && (M.set(L, B), m(B, L, d, E, M), M.delete(L)), X7(a, l, B)
                    }

                    function Yf(a, o) {
                        var l = a.length;
                        if (l) return o += o < 0 ? l : 0, Br(o, l) ? a[o] : e
                    }

                    function Jf(a, o, l) {
                        o.length ? o = je(o, function(E) {
                            return fe(E) ? function(M) {
                                return m0(M, E.length === 1 ? E[0] : E)
                            } : E
                        }) : o = [Jt];
                        var d = -1;
                        o = je(o, ln(ae()));
                        var m = Kf(a, function(E, M, k) {
                            var L = je(o, function(F) {
                                return F(E)
                            });
                            return {
                                criteria: L,
                                index: ++d,
                                value: E
                            }
                        });
                        return Iy(m, function(E, M) {
                            return vw(E, M, l)
                        })
                    }

                    function aw(a, o) {
                        return ed(a, o, function(l, d) {
                            return Ll(a, d)
                        })
                    }

                    function ed(a, o, l) {
                        for (var d = -1, m = o.length, E = {}; ++d < m;) {
                            var M = o[d],
                                k = m0(a, M);
                            l(k, M) && La(E, E1(M, a), k)
                        }
                        return E
                    }

                    function iw(a) {
                        return function(o) {
                            return m0(o, a)
                        }
                    }

                    function ol(a, o, l, d) {
                        var m = d ? Ty : t5,
                            E = -1,
                            M = o.length,
                            k = a;
                        for (a === o && (o = Qt(o)), l && (k = je(a, ln(l))); ++E < M;)
                            for (var L = 0, F = o[E], B = l ? l(F) : F;
                                (L = m(k, B, L, d)) > -1;) k !== a && go.call(k, L, 1), go.call(a, L, 1);
                        return a
                    }

                    function td(a, o) {
                        for (var l = a ? o.length : 0, d = l - 1; l--;) {
                            var m = o[l];
                            if (l == d || m !== E) {
                                var E = m;
                                Br(m) ? go.call(a, m, 1) : ul(a, m)
                            }
                        }
                        return a
                    }

                    function sl(a, o) {
                        return a + wo(Pf() * (o - a + 1))
                    }

                    function ow(a, o, l, d) {
                        for (var m = -1, E = ct(_o((o - a) / (l || 1)), 0), M = V(E); E--;) M[d ? E : ++m] = a, a += l;
                        return M
                    }

                    function ll(a, o) {
                        var l = "";
                        if (!a || o < 1 || o > X) return l;
                        do o % 2 && (l += a), o = wo(o / 2), o && (a += a); while (o);
                        return l
                    }

                    function ve(a, o) {
                        return xl(kd(a, o, Jt), a + "")
                    }

                    function sw(a) {
                        return Hf(d5(a))
                    }

                    function lw(a, o) {
                        var l = d5(a);
                        return Vo(l, p0(o, 0, l.length))
                    }

                    function La(a, o, l, d) {
                        if (!$e(a)) return a;
                        o = E1(o, a);
                        for (var m = -1, E = o.length, M = E - 1, k = a; k != null && ++m < E;) {
                            var L = gr(o[m]),
                                F = l;
                            if (L === "__proto__" || L === "constructor" || L === "prototype") return a;
                            if (m != M) {
                                var B = k[L];
                                F = d ? d(B, L, k) : e, F === e && (F = $e(B) ? B : Br(o[m + 1]) ? [] : {})
                            }
                            Ta(k, L, F), k = k[L]
                        }
                        return a
                    }
                    var nd = Eo ? function(a, o) {
                            return Eo.set(a, o), a
                        } : Jt,
                        cw = yo ? function(a, o) {
                            return yo(a, "toString", {
                                configurable: !0,
                                enumerable: !1,
                                value: Pl(o),
                                writable: !0
                            })
                        } : Jt;

                    function uw(a) {
                        return Vo(d5(a))
                    }

                    function Zn(a, o, l) {
                        var d = -1,
                            m = a.length;
                        o < 0 && (o = -o > m ? 0 : m + o), l = l > m ? m : l, l < 0 && (l += m), m = o > l ? 0 : l - o >>> 0, o >>>= 0;
                        for (var E = V(m); ++d < m;) E[d] = a[d + o];
                        return E
                    }

                    function fw(a, o) {
                        var l;
                        return _1(a, function(d, m, E) {
                            return l = o(d, m, E), !l
                        }), !!l
                    }

                    function Zo(a, o, l) {
                        var d = 0,
                            m = a == null ? d : a.length;
                        if (typeof o == "number" && o === o && m <= Oe) {
                            for (; d < m;) {
                                var E = d + m >>> 1,
                                    M = a[E];
                                M !== null && !un(M) && (l ? M <= o : M < o) ? d = E + 1 : m = E
                            }
                            return m
                        }
                        return cl(a, o, Jt, l)
                    }

                    function cl(a, o, l, d) {
                        var m = 0,
                            E = a == null ? 0 : a.length;
                        if (E === 0) return 0;
                        o = l(o);
                        for (var M = o !== o, k = o === null, L = un(o), F = o === e; m < E;) {
                            var B = wo((m + E) / 2),
                                U = l(a[B]),
                                K = U !== e,
                                J = U === null,
                                oe = U === U,
                                me = un(U);
                            if (M) var se = d || oe;
                            else F ? se = oe && (d || K) : k ? se = oe && K && (d || !J) : L ? se = oe && K && !J && (d || !me) : J || me ? se = !1 : se = d ? U <= o : U < o;
                            se ? m = B + 1 : E = B
                        }
                        return Zt(E, Ce)
                    }

                    function rd(a, o) {
                        for (var l = -1, d = a.length, m = 0, E = []; ++l < d;) {
                            var M = a[l],
                                k = o ? o(M) : M;
                            if (!l || !Wn(k, L)) {
                                var L = k;
                                E[m++] = M === 0 ? 0 : M
                            }
                        }
                        return E
                    }

                    function ad(a) {
                        return typeof a == "number" ? a : un(a) ? he : +a
                    }

                    function cn(a) {
                        if (typeof a == "string") return a;
                        if (fe(a)) return je(a, cn) + "";
                        if (un(a)) return Nf ? Nf.call(a) : "";
                        var o = a + "";
                        return o == "0" && 1 / a == -q ? "-0" : o
                    }

                    function w1(a, o, l) {
                        var d = -1,
                            m = oo,
                            E = a.length,
                            M = !0,
                            k = [],
                            L = k;
                        if (l) M = !1, m = H7;
                        else if (E >= n) {
                            var F = o ? null : Aw(a);
                            if (F) return lo(F);
                            M = !1, m = ba, L = new h0
                        } else L = o ? [] : k;
                        e: for (; ++d < E;) {
                            var B = a[d],
                                U = o ? o(B) : B;
                            if (B = l || B !== 0 ? B : 0, M && U === U) {
                                for (var K = L.length; K--;)
                                    if (L[K] === U) continue e;
                                o && L.push(U), k.push(B)
                            } else m(L, U, l) || (L !== k && L.push(U), k.push(B))
                        }
                        return k
                    }

                    function ul(a, o) {
                        return o = E1(o, a), a = Od(a, o), a == null || delete a[gr(Tn(o))]
                    }

                    function id(a, o, l, d) {
                        return La(a, o, l(m0(a, o)), d)
                    }

                    function To(a, o, l, d) {
                        for (var m = a.length, E = d ? m : -1;
                            (d ? E-- : ++E < m) && o(a[E], E, a););
                        return l ? Zn(a, d ? 0 : E, d ? E + 1 : m) : Zn(a, d ? E + 1 : 0, d ? m : E)
                    }

                    function od(a, o) {
                        var l = a;
                        return l instanceof ye && (l = l.value()), D7(o, function(d, m) {
                            return m.func.apply(m.thisArg, m1([d], m.args))
                        }, l)
                    }

                    function fl(a, o, l) {
                        var d = a.length;
                        if (d < 2) return d ? w1(a[0]) : [];
                        for (var m = -1, E = V(d); ++m < d;)
                            for (var M = a[m], k = -1; ++k < d;) k != m && (E[m] = Ia(E[m] || M, a[k], o, l));
                        return w1(wt(E, 1), o, l)
                    }

                    function sd(a, o, l) {
                        for (var d = -1, m = a.length, E = o.length, M = {}; ++d < m;) {
                            var k = d < E ? o[d] : e;
                            l(M, a[d], k)
                        }
                        return M
                    }

                    function dl(a) {
                        return et(a) ? a : []
                    }

                    function hl(a) {
                        return typeof a == "function" ? a : Jt
                    }

                    function E1(a, o) {
                        return fe(a) ? a : Al(a, o) ? [a] : Nd(Ze(a))
                    }
                    var dw = ve;

                    function A1(a, o, l) {
                        var d = a.length;
                        return l = l === e ? d : l, !o && l >= d ? a : Zn(a, o, l)
                    }
                    var ld = Jy || function(a) {
                        return ht.clearTimeout(a)
                    };

                    function cd(a, o) {
                        if (o) return a.slice();
                        var l = a.length,
                            d = If ? If(l) : new a.constructor(l);
                        return a.copy(d), d
                    }

                    function pl(a) {
                        var o = new a.constructor(a.byteLength);
                        return new mo(o).set(new mo(a)), o
                    }

                    function hw(a, o) {
                        var l = o ? pl(a.buffer) : a.buffer;
                        return new a.constructor(l, a.byteOffset, a.byteLength)
                    }

                    function pw(a) {
                        var o = new a.constructor(a.source, z3.exec(a));
                        return o.lastIndex = a.lastIndex, o
                    }

                    function mw(a) {
                        return Za ? Pe(Za.call(a)) : {}
                    }

                    function ud(a, o) {
                        var l = o ? pl(a.buffer) : a.buffer;
                        return new a.constructor(l, a.byteOffset, a.length)
                    }

                    function fd(a, o) {
                        if (a !== o) {
                            var l = a !== e,
                                d = a === null,
                                m = a === a,
                                E = un(a),
                                M = o !== e,
                                k = o === null,
                                L = o === o,
                                F = un(o);
                            if (!k && !F && !E && a > o || E && M && L && !k && !F || d && M && L || !l && L || !m) return 1;
                            if (!d && !E && !F && a < o || F && l && m && !d && !E || k && l && m || !M && m || !L) return -1
                        }
                        return 0
                    }

                    function vw(a, o, l) {
                        for (var d = -1, m = a.criteria, E = o.criteria, M = m.length, k = l.length; ++d < M;) {
                            var L = fd(m[d], E[d]);
                            if (L) {
                                if (d >= k) return L;
                                var F = l[d];
                                return L * (F == "desc" ? -1 : 1)
                            }
                        }
                        return a.index - o.index
                    }

                    function dd(a, o, l, d) {
                        for (var m = -1, E = a.length, M = l.length, k = -1, L = o.length, F = ct(E - M, 0), B = V(L + F), U = !d; ++k < L;) B[k] = o[k];
                        for (; ++m < M;)(U || m < E) && (B[l[m]] = a[m]);
                        for (; F--;) B[k++] = a[m++];
                        return B
                    }

                    function hd(a, o, l, d) {
                        for (var m = -1, E = a.length, M = -1, k = l.length, L = -1, F = o.length, B = ct(E - k, 0), U = V(B + F), K = !d; ++m < B;) U[m] = a[m];
                        for (var J = m; ++L < F;) U[J + L] = o[L];
                        for (; ++M < k;)(K || m < E) && (U[J + l[M]] = a[m++]);
                        return U
                    }

                    function Qt(a, o) {
                        var l = -1,
                            d = a.length;
                        for (o || (o = V(d)); ++l < d;) o[l] = a[l];
                        return o
                    }

                    function vr(a, o, l, d) {
                        var m = !l;
                        l || (l = {});
                        for (var E = -1, M = o.length; ++E < M;) {
                            var k = o[E],
                                L = d ? d(l[k], a[k], k, l, a) : e;
                            L === e && (L = a[k]), m ? Hr(l, k, L) : Ta(l, k, L)
                        }
                        return l
                    }

                    function gw(a, o) {
                        return vr(a, El(a), o)
                    }

                    function yw(a, o) {
                        return vr(a, Sd(a), o)
                    }

                    function Io(a, o) {
                        return function(l, d) {
                            var m = fe(l) ? by : F_,
                                E = o ? o() : {};
                            return m(l, a, ae(d, 2), E)
                        }
                    }

                    function l5(a) {
                        return ve(function(o, l) {
                            var d = -1,
                                m = l.length,
                                E = m > 1 ? l[m - 1] : e,
                                M = m > 2 ? l[2] : e;
                            for (E = a.length > 3 && typeof E == "function" ? (m--, E) : e, M && Ft(l[0], l[1], M) && (E = m < 3 ? e : E, m = 1), o = Pe(o); ++d < m;) {
                                var k = l[d];
                                k && a(o, k, d, E)
                            }
                            return o
                        })
                    }

                    function pd(a, o) {
                        return function(l, d) {
                            if (l == null) return l;
                            if (!Xt(l)) return a(l, d);
                            for (var m = l.length, E = o ? m : -1, M = Pe(l);
                                (o ? E-- : ++E < m) && d(M[E], E, M) !== !1;);
                            return l
                        }
                    }

                    function md(a) {
                        return function(o, l, d) {
                            for (var m = -1, E = Pe(o), M = d(o), k = M.length; k--;) {
                                var L = M[a ? k : ++m];
                                if (l(E[L], L, E) === !1) break
                            }
                            return o
                        }
                    }

                    function _w(a, o, l) {
                        var d = o & S,
                            m = Ra(a);

                        function E() {
                            var M = this && this !== ht && this instanceof E ? m : a;
                            return M.apply(d ? l : this, arguments)
                        }
                        return E
                    }

                    function vd(a) {
                        return function(o) {
                            o = Ze(o);
                            var l = n5(o) ? $n(o) : e,
                                d = l ? l[0] : o.charAt(0),
                                m = l ? A1(l, 1).join("") : o.slice(1);
                            return d[a]() + m
                        }
                    }

                    function c5(a) {
                        return function(o) {
                            return D7(ph(hh(o).replace(cy, "")), a, "")
                        }
                    }

                    function Ra(a) {
                        return function() {
                            var o = arguments;
                            switch (o.length) {
                                case 0:
                                    return new a;
                                case 1:
                                    return new a(o[0]);
                                case 2:
                                    return new a(o[0], o[1]);
                                case 3:
                                    return new a(o[0], o[1], o[2]);
                                case 4:
                                    return new a(o[0], o[1], o[2], o[3]);
                                case 5:
                                    return new a(o[0], o[1], o[2], o[3], o[4]);
                                case 6:
                                    return new a(o[0], o[1], o[2], o[3], o[4], o[5]);
                                case 7:
                                    return new a(o[0], o[1], o[2], o[3], o[4], o[5], o[6])
                            }
                            var l = s5(a.prototype),
                                d = a.apply(l, o);
                            return $e(d) ? d : l
                        }
                    }

                    function ww(a, o, l) {
                        var d = Ra(a);

                        function m() {
                            for (var E = arguments.length, M = V(E), k = E, L = u5(m); k--;) M[k] = arguments[k];
                            var F = E < 3 && M[0] !== L && M[E - 1] !== L ? [] : v1(M, L);
                            if (E -= F.length, E < l) return Ed(a, o, ko, m.placeholder, e, M, F, e, e, l - E);
                            var B = this && this !== ht && this instanceof m ? d : a;
                            return sn(B, this, M)
                        }
                        return m
                    }

                    function gd(a) {
                        return function(o, l, d) {
                            var m = Pe(o);
                            if (!Xt(o)) {
                                var E = ae(l, 3);
                                o = pt(o), l = function(k) {
                                    return E(m[k], k, m)
                                }
                            }
                            var M = a(o, l, d);
                            return M > -1 ? m[E ? o[M] : M] : e
                        }
                    }

                    function yd(a) {
                        return Fr(function(o) {
                            var l = o.length,
                                d = l,
                                m = Sn.prototype.thru;
                            for (a && o.reverse(); d--;) {
                                var E = o[d];
                                if (typeof E != "function") throw new xn(i);
                                if (m && !M && Po(E) == "wrapper") var M = new Sn([], !0)
                            }
                            for (d = M ? d : l; ++d < l;) {
                                E = o[d];
                                var k = Po(E),
                                    L = k == "wrapper" ? _l(E) : e;
                                L && bl(L[0]) && L[1] == (T | b | x | P) && !L[4].length && L[9] == 1 ? M = M[Po(L[0])].apply(M, L[3]) : M = E.length == 1 && bl(E) ? M[k]() : M.thru(E)
                            }
                            return function() {
                                var F = arguments,
                                    B = F[0];
                                if (M && F.length == 1 && fe(B)) return M.plant(B).value();
                                for (var U = 0, K = l ? o[U].apply(this, F) : B; ++U < l;) K = o[U].call(this, K);
                                return K
                            }
                        })
                    }

                    function ko(a, o, l, d, m, E, M, k, L, F) {
                        var B = o & T,
                            U = o & S,
                            K = o & I,
                            J = o & (b | C),
                            oe = o & N,
                            me = K ? e : Ra(a);

                        function se() {
                            for (var ge = arguments.length, we = V(ge), fn = ge; fn--;) we[fn] = arguments[fn];
                            if (J) var Bt = u5(se),
                                dn = Oy(we, Bt);
                            if (d && (we = dd(we, d, m, J)), E && (we = hd(we, E, M, J)), ge -= dn, J && ge < F) {
                                var tt = v1(we, Bt);
                                return Ed(a, o, ko, se.placeholder, l, we, tt, k, L, F - ge)
                            }
                            var Kn = U ? l : this,
                                Gr = K ? Kn[a] : a;
                            return ge = we.length, k ? we = Fw(we, k) : oe && ge > 1 && we.reverse(), B && L < ge && (we.length = L), this && this !== ht && this instanceof se && (Gr = me || Ra(Gr)), Gr.apply(Kn, we)
                        }
                        return se
                    }

                    function _d(a, o) {
                        return function(l, d) {
                            return W_(l, a, o(d), {})
                        }
                    }

                    function Oo(a, o) {
                        return function(l, d) {
                            var m;
                            if (l === e && d === e) return o;
                            if (l !== e && (m = l), d !== e) {
                                if (m === e) return d;
                                typeof l == "string" || typeof d == "string" ? (l = cn(l), d = cn(d)) : (l = ad(l), d = ad(d)), m = a(l, d)
                            }
                            return m
                        }
                    }

                    function ml(a) {
                        return Fr(function(o) {
                            return o = je(o, ln(ae())), ve(function(l) {
                                var d = this;
                                return a(o, function(m) {
                                    return sn(m, d, l)
                                })
                            })
                        })
                    }

                    function Lo(a, o) {
                        o = o === e ? " " : cn(o);
                        var l = o.length;
                        if (l < 2) return l ? ll(o, a) : o;
                        var d = ll(o, _o(a / r5(o)));
                        return n5(o) ? A1($n(d), 0, a).join("") : d.slice(0, a)
                    }

                    function Ew(a, o, l, d) {
                        var m = o & S,
                            E = Ra(a);

                        function M() {
                            for (var k = -1, L = arguments.length, F = -1, B = d.length, U = V(B + L), K = this && this !== ht && this instanceof M ? E : a; ++F < B;) U[F] = d[F];
                            for (; L--;) U[F++] = arguments[++k];
                            return sn(K, m ? l : this, U)
                        }
                        return M
                    }

                    function wd(a) {
                        return function(o, l, d) {
                            return d && typeof d != "number" && Ft(o, l, d) && (l = d = e), o = jr(o), l === e ? (l = o, o = 0) : l = jr(l), d = d === e ? o < l ? 1 : -1 : jr(d), ow(o, l, d, a)
                        }
                    }

                    function Ro(a) {
                        return function(o, l) {
                            return typeof o == "string" && typeof l == "string" || (o = In(o), l = In(l)), a(o, l)
                        }
                    }

                    function Ed(a, o, l, d, m, E, M, k, L, F) {
                        var B = o & b,
                            U = B ? M : e,
                            K = B ? e : M,
                            J = B ? E : e,
                            oe = B ? e : E;
                        o |= B ? x : Z, o &= ~(B ? Z : x), o & R || (o &= ~(S | I));
                        var me = [a, o, m, J, U, oe, K, k, L, F],
                            se = l.apply(e, me);
                        return bl(a) && Ld(se, me), se.placeholder = d, Rd(se, a, o)
                    }

                    function vl(a) {
                        var o = lt[a];
                        return function(l, d) {
                            if (l = In(l), d = d == null ? 0 : Zt(pe(d), 292), d && Rf(l)) {
                                var m = (Ze(l) + "e").split("e"),
                                    E = o(m[0] + "e" + (+m[1] + d));
                                return m = (Ze(E) + "e").split("e"), +(m[0] + "e" + (+m[1] - d))
                            }
                            return o(l)
                        }
                    }
                    var Aw = i5 && 1 / lo(new i5([, -0]))[1] == q ? function(a) {
                        return new i5(a)
                    } : Hl;

                    function Ad(a) {
                        return function(o) {
                            var l = Tt(o);
                            return l == St ? $7(o) : l == Mt ? Dy(o) : ky(o, a(o))
                        }
                    }

                    function Dr(a, o, l, d, m, E, M, k) {
                        var L = o & I;
                        if (!L && typeof a != "function") throw new xn(i);
                        var F = d ? d.length : 0;
                        if (F || (o &= ~(x | Z), d = m = e), M = M === e ? M : ct(pe(M), 0), k = k === e ? k : pe(k), F -= m ? m.length : 0, o & Z) {
                            var B = d,
                                U = m;
                            d = m = e
                        }
                        var K = L ? e : _l(a),
                            J = [a, o, l, d, m, B, U, E, M, k];
                        if (K && Vw(J, K), a = J[0], o = J[1], l = J[2], d = J[3], m = J[4], k = J[9] = J[9] === e ? L ? 0 : a.length : ct(J[9] - F, 0), !k && o & (b | C) && (o &= ~(b | C)), !o || o == S) var oe = _w(a, o, l);
                        else o == b || o == C ? oe = ww(a, o, k) : (o == x || o == (S | x)) && !m.length ? oe = Ew(a, o, l, d) : oe = ko.apply(e, J);
                        var me = K ? nd : Ld;
                        return Rd(me(oe, J), a, o)
                    }

                    function bd(a, o, l, d) {
                        return a === e || Wn(a, a5[l]) && !Te.call(d, l) ? o : a
                    }

                    function Cd(a, o, l, d, m, E) {
                        return $e(a) && $e(o) && (E.set(o, a), Mo(a, o, e, Cd, E), E.delete(o)), a
                    }

                    function bw(a) {
                        return Va(a) ? e : a
                    }

                    function xd(a, o, l, d, m, E) {
                        var M = l & v,
                            k = a.length,
                            L = o.length;
                        if (k != L && !(M && L > k)) return !1;
                        var F = E.get(a),
                            B = E.get(o);
                        if (F && B) return F == o && B == a;
                        var U = -1,
                            K = !0,
                            J = l & _ ? new h0 : e;
                        for (E.set(a, o), E.set(o, a); ++U < k;) {
                            var oe = a[U],
                                me = o[U];
                            if (d) var se = M ? d(me, oe, U, o, a, E) : d(oe, me, U, a, o, E);
                            if (se !== e) {
                                if (se) continue;
                                K = !1;
                                break
                            }
                            if (J) {
                                if (!F7(o, function(ge, we) {
                                        if (!ba(J, we) && (oe === ge || m(oe, ge, l, d, E))) return J.push(we)
                                    })) {
                                    K = !1;
                                    break
                                }
                            } else if (!(oe === me || m(oe, me, l, d, E))) {
                                K = !1;
                                break
                            }
                        }
                        return E.delete(a), E.delete(o), K
                    }

                    function Cw(a, o, l, d, m, E, M) {
                        switch (l) {
                            case dr:
                                if (a.byteLength != o.byteLength || a.byteOffset != o.byteOffset) return !1;
                                a = a.buffer, o = o.buffer;
                            case Pr:
                                return !(a.byteLength != o.byteLength || !E(new mo(a), new mo(o)));
                            case gt:
                            case Re:
                            case Kt:
                                return Wn(+a, +o);
                            case Ht:
                                return a.name == o.name && a.message == o.message;
                            case d1:
                            case h1:
                                return a == o + "";
                            case St:
                                var k = $7;
                            case Mt:
                                var L = d & v;
                                if (k || (k = lo), a.size != o.size && !L) return !1;
                                var F = M.get(a);
                                if (F) return F == o;
                                d |= _, M.set(a, o);
                                var B = xd(k(a), k(o), d, m, E, M);
                                return M.delete(a), B;
                            case fr:
                                if (Za) return Za.call(a) == Za.call(o)
                        }
                        return !1
                    }

                    function xw(a, o, l, d, m, E) {
                        var M = l & v,
                            k = gl(a),
                            L = k.length,
                            F = gl(o),
                            B = F.length;
                        if (L != B && !M) return !1;
                        for (var U = L; U--;) {
                            var K = k[U];
                            if (!(M ? K in o : Te.call(o, K))) return !1
                        }
                        var J = E.get(a),
                            oe = E.get(o);
                        if (J && oe) return J == o && oe == a;
                        var me = !0;
                        E.set(a, o), E.set(o, a);
                        for (var se = M; ++U < L;) {
                            K = k[U];
                            var ge = a[K],
                                we = o[K];
                            if (d) var fn = M ? d(we, ge, K, o, a, E) : d(ge, we, K, a, o, E);
                            if (!(fn === e ? ge === we || m(ge, we, l, d, E) : fn)) {
                                me = !1;
                                break
                            }
                            se || (se = K == "constructor")
                        }
                        if (me && !se) {
                            var Bt = a.constructor,
                                dn = o.constructor;
                            Bt != dn && "constructor" in a && "constructor" in o && !(typeof Bt == "function" && Bt instanceof Bt && typeof dn == "function" && dn instanceof dn) && (me = !1)
                        }
                        return E.delete(a), E.delete(o), me
                    }

                    function Fr(a) {
                        return xl(kd(a, e, Fd), a + "")
                    }

                    function gl(a) {
                        return zf(a, pt, El)
                    }

                    function yl(a) {
                        return zf(a, Yt, Sd)
                    }
                    var _l = Eo ? function(a) {
                        return Eo.get(a)
                    } : Hl;

                    function Po(a) {
                        for (var o = a.name + "", l = o5[o], d = Te.call(o5, o) ? l.length : 0; d--;) {
                            var m = l[d],
                                E = m.func;
                            if (E == null || E == a) return m.name
                        }
                        return o
                    }

                    function u5(a) {
                        var o = Te.call(y, "placeholder") ? y : a;
                        return o.placeholder
                    }

                    function ae() {
                        var a = y.iteratee || Nl;
                        return a = a === Nl ? Wf : a, arguments.length ? a(arguments[0], arguments[1]) : a
                    }

                    function No(a, o) {
                        var l = a.__data__;
                        return Lw(o) ? l[typeof o == "string" ? "string" : "hash"] : l.map
                    }

                    function wl(a) {
                        for (var o = pt(a), l = o.length; l--;) {
                            var d = o[l],
                                m = a[d];
                            o[l] = [d, m, Td(m)]
                        }
                        return o
                    }

                    function v0(a, o) {
                        var l = Ny(a, o);
                        return qf(l) ? l : e
                    }

                    function Sw(a) {
                        var o = Te.call(a, f0),
                            l = a[f0];
                        try {
                            a[f0] = e;
                            var d = !0
                        } catch {}
                        var m = ho.call(a);
                        return d && (o ? a[f0] = l : delete a[f0]), m
                    }
                    var El = W7 ? function(a) {
                            return a == null ? [] : (a = Pe(a), p1(W7(a), function(o) {
                                return Of.call(a, o)
                            }))
                        } : Dl,
                        Sd = W7 ? function(a) {
                            for (var o = []; a;) m1(o, El(a)), a = vo(a);
                            return o
                        } : Dl,
                        Tt = Dt;
                    (K7 && Tt(new K7(new ArrayBuffer(1))) != dr || xa && Tt(new xa) != St || Q7 && Tt(Q7.resolve()) != ga || i5 && Tt(new i5) != Mt || Sa && Tt(new Sa) != zn) && (Tt = function(a) {
                        var o = Dt(a),
                            l = o == yt ? a.constructor : e,
                            d = l ? g0(l) : "";
                        if (d) switch (d) {
                            case l_:
                                return dr;
                            case c_:
                                return St;
                            case u_:
                                return ga;
                            case f_:
                                return Mt;
                            case d_:
                                return zn
                        }
                        return o
                    });

                    function Mw(a, o, l) {
                        for (var d = -1, m = l.length; ++d < m;) {
                            var E = l[d],
                                M = E.size;
                            switch (E.type) {
                                case "drop":
                                    a += M;
                                    break;
                                case "dropRight":
                                    o -= M;
                                    break;
                                case "take":
                                    o = Zt(o, a + M);
                                    break;
                                case "takeRight":
                                    a = ct(a, o - M);
                                    break
                            }
                        }
                        return {
                            start: a,
                            end: o
                        }
                    }

                    function Zw(a) {
                        var o = a.match(Rg);
                        return o ? o[1].split(Pg) : []
                    }

                    function Md(a, o, l) {
                        o = E1(o, a);
                        for (var d = -1, m = o.length, E = !1; ++d < m;) {
                            var M = gr(o[d]);
                            if (!(E = a != null && l(a, M))) break;
                            a = a[M]
                        }
                        return E || ++d != m ? E : (m = a == null ? 0 : a.length, !!m && jo(m) && Br(M, m) && (fe(a) || y0(a)))
                    }

                    function Tw(a) {
                        var o = a.length,
                            l = new a.constructor(o);
                        return o && typeof a[0] == "string" && Te.call(a, "index") && (l.index = a.index, l.input = a.input), l
                    }

                    function Zd(a) {
                        return typeof a.constructor == "function" && !Pa(a) ? s5(vo(a)) : {}
                    }

                    function Iw(a, o, l) {
                        var d = a.constructor;
                        switch (o) {
                            case Pr:
                                return pl(a);
                            case gt:
                            case Re:
                                return new d(+a);
                            case dr:
                                return hw(a, l);
                            case ya:
                            case _a:
                            case wa:
                            case hr:
                            case pr:
                            case X0:
                            case l0:
                            case Y0:
                            case Ea:
                                return ud(a, l);
                            case St:
                                return new d;
                            case Kt:
                            case h1:
                                return new d(a);
                            case d1:
                                return pw(a);
                            case Mt:
                                return new d;
                            case fr:
                                return mw(a)
                        }
                    }

                    function kw(a, o) {
                        var l = o.length;
                        if (!l) return a;
                        var d = l - 1;
                        return o[d] = (l > 1 ? "& " : "") + o[d], o = o.join(l > 2 ? ", " : " "), a.replace(Lg, `{
/* [wrapped with ` + o + `] */
`)
                    }

                    function Ow(a) {
                        return fe(a) || y0(a) || !!(Lf && a && a[Lf])
                    }

                    function Br(a, o) {
                        var l = typeof a;
                        return o = o ?? X, !!o && (l == "number" || l != "symbol" && Gg.test(a)) && a > -1 && a % 1 == 0 && a < o
                    }

                    function Ft(a, o, l) {
                        if (!$e(l)) return !1;
                        var d = typeof o;
                        return (d == "number" ? Xt(l) && Br(o, l.length) : d == "string" && o in l) ? Wn(l[o], a) : !1
                    }

                    function Al(a, o) {
                        if (fe(a)) return !1;
                        var l = typeof a;
                        return l == "number" || l == "symbol" || l == "boolean" || a == null || un(a) ? !0 : Tg.test(a) || !Zg.test(a) || o != null && a in Pe(o)
                    }

                    function Lw(a) {
                        var o = typeof a;
                        return o == "string" || o == "number" || o == "symbol" || o == "boolean" ? a !== "__proto__" : a === null
                    }

                    function bl(a) {
                        var o = Po(a),
                            l = y[o];
                        if (typeof l != "function" || !(o in ye.prototype)) return !1;
                        if (a === l) return !0;
                        var d = _l(l);
                        return !!d && a === d[0]
                    }

                    function Rw(a) {
                        return !!Tf && Tf in a
                    }
                    var Pw = uo ? Ur : Fl;

                    function Pa(a) {
                        var o = a && a.constructor,
                            l = typeof o == "function" && o.prototype || a5;
                        return a === l
                    }

                    function Td(a) {
                        return a === a && !$e(a)
                    }

                    function Id(a, o) {
                        return function(l) {
                            return l == null ? !1 : l[a] === o && (o !== e || a in Pe(l))
                        }
                    }

                    function Nw(a) {
                        var o = Bo(a, function(d) {
                                return l.size === u && l.clear(), d
                            }),
                            l = o.cache;
                        return o
                    }

                    function Vw(a, o) {
                        var l = a[1],
                            d = o[1],
                            m = l | d,
                            E = m < (S | I | T),
                            M = d == T && l == b || d == T && l == P && a[7].length <= o[8] || d == (T | P) && o[7].length <= o[8] && l == b;
                        if (!(E || M)) return a;
                        d & S && (a[2] = o[2], m |= l & S ? 0 : R);
                        var k = o[3];
                        if (k) {
                            var L = a[3];
                            a[3] = L ? dd(L, k, o[4]) : k, a[4] = L ? v1(a[3], f) : o[4]
                        }
                        return k = o[5], k && (L = a[5], a[5] = L ? hd(L, k, o[6]) : k, a[6] = L ? v1(a[5], f) : o[6]), k = o[7], k && (a[7] = k), d & T && (a[8] = a[8] == null ? o[8] : Zt(a[8], o[8])), a[9] == null && (a[9] = o[9]), a[0] = o[0], a[1] = m, a
                    }

                    function Hw(a) {
                        var o = [];
                        if (a != null)
                            for (var l in Pe(a)) o.push(l);
                        return o
                    }

                    function Dw(a) {
                        return ho.call(a)
                    }

                    function kd(a, o, l) {
                        return o = ct(o === e ? a.length - 1 : o, 0),
                            function() {
                                for (var d = arguments, m = -1, E = ct(d.length - o, 0), M = V(E); ++m < E;) M[m] = d[o + m];
                                m = -1;
                                for (var k = V(o + 1); ++m < o;) k[m] = d[m];
                                return k[o] = l(M), sn(a, this, k)
                            }
                    }

                    function Od(a, o) {
                        return o.length < 2 ? a : m0(a, Zn(o, 0, -1))
                    }

                    function Fw(a, o) {
                        for (var l = a.length, d = Zt(o.length, l), m = Qt(a); d--;) {
                            var E = o[d];
                            a[d] = Br(E, l) ? m[E] : e
                        }
                        return a
                    }

                    function Cl(a, o) {
                        if (!(o === "constructor" && typeof a[o] == "function") && o != "__proto__") return a[o]
                    }
                    var Ld = Pd(nd),
                        Na = t_ || function(a, o) {
                            return ht.setTimeout(a, o)
                        },
                        xl = Pd(cw);

                    function Rd(a, o, l) {
                        var d = o + "";
                        return xl(a, kw(d, Bw(Zw(d), l)))
                    }

                    function Pd(a) {
                        var o = 0,
                            l = 0;
                        return function() {
                            var d = i_(),
                                m = z - (d - l);
                            if (l = d, m > 0) {
                                if (++o >= te) return arguments[0]
                            } else o = 0;
                            return a.apply(e, arguments)
                        }
                    }

                    function Vo(a, o) {
                        var l = -1,
                            d = a.length,
                            m = d - 1;
                        for (o = o === e ? d : o; ++l < o;) {
                            var E = sl(l, m),
                                M = a[E];
                            a[E] = a[l], a[l] = M
                        }
                        return a.length = o, a
                    }
                    var Nd = Nw(function(a) {
                        var o = [];
                        return a.charCodeAt(0) === 46 && o.push(""), a.replace(Ig, function(l, d, m, E) {
                            o.push(m ? E.replace(Hg, "$1") : d || l)
                        }), o
                    });

                    function gr(a) {
                        if (typeof a == "string" || un(a)) return a;
                        var o = a + "";
                        return o == "0" && 1 / a == -q ? "-0" : o
                    }

                    function g0(a) {
                        if (a != null) {
                            try {
                                return fo.call(a)
                            } catch {}
                            try {
                                return a + ""
                            } catch {}
                        }
                        return ""
                    }

                    function Bw(a, o) {
                        return Cn(re, function(l) {
                            var d = "_." + l[0];
                            o & l[1] && !oo(a, d) && a.push(d)
                        }), a.sort()
                    }

                    function Vd(a) {
                        if (a instanceof ye) return a.clone();
                        var o = new Sn(a.__wrapped__, a.__chain__);
                        return o.__actions__ = Qt(a.__actions__), o.__index__ = a.__index__, o.__values__ = a.__values__, o
                    }

                    function Uw(a, o, l) {
                        (l ? Ft(a, o, l) : o === e) ? o = 1: o = ct(pe(o), 0);
                        var d = a == null ? 0 : a.length;
                        if (!d || o < 1) return [];
                        for (var m = 0, E = 0, M = V(_o(d / o)); m < d;) M[E++] = Zn(a, m, m += o);
                        return M
                    }

                    function jw(a) {
                        for (var o = -1, l = a == null ? 0 : a.length, d = 0, m = []; ++o < l;) {
                            var E = a[o];
                            E && (m[d++] = E)
                        }
                        return m
                    }

                    function Gw() {
                        var a = arguments.length;
                        if (!a) return [];
                        for (var o = V(a - 1), l = arguments[0], d = a; d--;) o[d - 1] = arguments[d];
                        return m1(fe(l) ? Qt(l) : [l], wt(o, 1))
                    }
                    var zw = ve(function(a, o) {
                            return et(a) ? Ia(a, wt(o, 1, et, !0)) : []
                        }),
                        $w = ve(function(a, o) {
                            var l = Tn(o);
                            return et(l) && (l = e), et(a) ? Ia(a, wt(o, 1, et, !0), ae(l, 2)) : []
                        }),
                        qw = ve(function(a, o) {
                            var l = Tn(o);
                            return et(l) && (l = e), et(a) ? Ia(a, wt(o, 1, et, !0), e, l) : []
                        });

                    function Ww(a, o, l) {
                        var d = a == null ? 0 : a.length;
                        return d ? (o = l || o === e ? 1 : pe(o), Zn(a, o < 0 ? 0 : o, d)) : []
                    }

                    function Kw(a, o, l) {
                        var d = a == null ? 0 : a.length;
                        return d ? (o = l || o === e ? 1 : pe(o), o = d - o, Zn(a, 0, o < 0 ? 0 : o)) : []
                    }

                    function Qw(a, o) {
                        return a && a.length ? To(a, ae(o, 3), !0, !0) : []
                    }

                    function Xw(a, o) {
                        return a && a.length ? To(a, ae(o, 3), !0) : []
                    }

                    function Yw(a, o, l, d) {
                        var m = a == null ? 0 : a.length;
                        return m ? (l && typeof l != "number" && Ft(a, o, l) && (l = 0, d = m), G_(a, o, l, d)) : []
                    }

                    function Hd(a, o, l) {
                        var d = a == null ? 0 : a.length;
                        if (!d) return -1;
                        var m = l == null ? 0 : pe(l);
                        return m < 0 && (m = ct(d + m, 0)), so(a, ae(o, 3), m)
                    }

                    function Dd(a, o, l) {
                        var d = a == null ? 0 : a.length;
                        if (!d) return -1;
                        var m = d - 1;
                        return l !== e && (m = pe(l), m = l < 0 ? ct(d + m, 0) : Zt(m, d - 1)), so(a, ae(o, 3), m, !0)
                    }

                    function Fd(a) {
                        var o = a == null ? 0 : a.length;
                        return o ? wt(a, 1) : []
                    }

                    function Jw(a) {
                        var o = a == null ? 0 : a.length;
                        return o ? wt(a, q) : []
                    }

                    function eE(a, o) {
                        var l = a == null ? 0 : a.length;
                        return l ? (o = o === e ? 1 : pe(o), wt(a, o)) : []
                    }

                    function tE(a) {
                        for (var o = -1, l = a == null ? 0 : a.length, d = {}; ++o < l;) {
                            var m = a[o];
                            d[m[0]] = m[1]
                        }
                        return d
                    }

                    function Bd(a) {
                        return a && a.length ? a[0] : e
                    }

                    function nE(a, o, l) {
                        var d = a == null ? 0 : a.length;
                        if (!d) return -1;
                        var m = l == null ? 0 : pe(l);
                        return m < 0 && (m = ct(d + m, 0)), t5(a, o, m)
                    }

                    function rE(a) {
                        var o = a == null ? 0 : a.length;
                        return o ? Zn(a, 0, -1) : []
                    }
                    var aE = ve(function(a) {
                            var o = je(a, dl);
                            return o.length && o[0] === a[0] ? nl(o) : []
                        }),
                        iE = ve(function(a) {
                            var o = Tn(a),
                                l = je(a, dl);
                            return o === Tn(l) ? o = e : l.pop(), l.length && l[0] === a[0] ? nl(l, ae(o, 2)) : []
                        }),
                        oE = ve(function(a) {
                            var o = Tn(a),
                                l = je(a, dl);
                            return o = typeof o == "function" ? o : e, o && l.pop(), l.length && l[0] === a[0] ? nl(l, e, o) : []
                        });

                    function sE(a, o) {
                        return a == null ? "" : r_.call(a, o)
                    }

                    function Tn(a) {
                        var o = a == null ? 0 : a.length;
                        return o ? a[o - 1] : e
                    }

                    function lE(a, o, l) {
                        var d = a == null ? 0 : a.length;
                        if (!d) return -1;
                        var m = d;
                        return l !== e && (m = pe(l), m = m < 0 ? ct(d + m, 0) : Zt(m, d - 1)), o === o ? By(a, o, m) : so(a, Ef, m, !0)
                    }

                    function cE(a, o) {
                        return a && a.length ? Yf(a, pe(o)) : e
                    }
                    var uE = ve(Ud);

                    function Ud(a, o) {
                        return a && a.length && o && o.length ? ol(a, o) : a
                    }

                    function fE(a, o, l) {
                        return a && a.length && o && o.length ? ol(a, o, ae(l, 2)) : a
                    }

                    function dE(a, o, l) {
                        return a && a.length && o && o.length ? ol(a, o, e, l) : a
                    }
                    var hE = Fr(function(a, o) {
                        var l = a == null ? 0 : a.length,
                            d = Y7(a, o);
                        return td(a, je(o, function(m) {
                            return Br(m, l) ? +m : m
                        }).sort(fd)), d
                    });

                    function pE(a, o) {
                        var l = [];
                        if (!(a && a.length)) return l;
                        var d = -1,
                            m = [],
                            E = a.length;
                        for (o = ae(o, 3); ++d < E;) {
                            var M = a[d];
                            o(M, d, a) && (l.push(M), m.push(d))
                        }
                        return td(a, m), l
                    }

                    function Sl(a) {
                        return a == null ? a : s_.call(a)
                    }

                    function mE(a, o, l) {
                        var d = a == null ? 0 : a.length;
                        return d ? (l && typeof l != "number" && Ft(a, o, l) ? (o = 0, l = d) : (o = o == null ? 0 : pe(o), l = l === e ? d : pe(l)), Zn(a, o, l)) : []
                    }

                    function vE(a, o) {
                        return Zo(a, o)
                    }

                    function gE(a, o, l) {
                        return cl(a, o, ae(l, 2))
                    }

                    function yE(a, o) {
                        var l = a == null ? 0 : a.length;
                        if (l) {
                            var d = Zo(a, o);
                            if (d < l && Wn(a[d], o)) return d
                        }
                        return -1
                    }

                    function _E(a, o) {
                        return Zo(a, o, !0)
                    }

                    function wE(a, o, l) {
                        return cl(a, o, ae(l, 2), !0)
                    }

                    function EE(a, o) {
                        var l = a == null ? 0 : a.length;
                        if (l) {
                            var d = Zo(a, o, !0) - 1;
                            if (Wn(a[d], o)) return d
                        }
                        return -1
                    }

                    function AE(a) {
                        return a && a.length ? rd(a) : []
                    }

                    function bE(a, o) {
                        return a && a.length ? rd(a, ae(o, 2)) : []
                    }

                    function CE(a) {
                        var o = a == null ? 0 : a.length;
                        return o ? Zn(a, 1, o) : []
                    }

                    function xE(a, o, l) {
                        return a && a.length ? (o = l || o === e ? 1 : pe(o), Zn(a, 0, o < 0 ? 0 : o)) : []
                    }

                    function SE(a, o, l) {
                        var d = a == null ? 0 : a.length;
                        return d ? (o = l || o === e ? 1 : pe(o), o = d - o, Zn(a, o < 0 ? 0 : o, d)) : []
                    }

                    function ME(a, o) {
                        return a && a.length ? To(a, ae(o, 3), !1, !0) : []
                    }

                    function ZE(a, o) {
                        return a && a.length ? To(a, ae(o, 3)) : []
                    }
                    var TE = ve(function(a) {
                            return w1(wt(a, 1, et, !0))
                        }),
                        IE = ve(function(a) {
                            var o = Tn(a);
                            return et(o) && (o = e), w1(wt(a, 1, et, !0), ae(o, 2))
                        }),
                        kE = ve(function(a) {
                            var o = Tn(a);
                            return o = typeof o == "function" ? o : e, w1(wt(a, 1, et, !0), e, o)
                        });

                    function OE(a) {
                        return a && a.length ? w1(a) : []
                    }

                    function LE(a, o) {
                        return a && a.length ? w1(a, ae(o, 2)) : []
                    }

                    function RE(a, o) {
                        return o = typeof o == "function" ? o : e, a && a.length ? w1(a, e, o) : []
                    }

                    function Ml(a) {
                        if (!(a && a.length)) return [];
                        var o = 0;
                        return a = p1(a, function(l) {
                            if (et(l)) return o = ct(l.length, o), !0
                        }), G7(o, function(l) {
                            return je(a, B7(l))
                        })
                    }

                    function jd(a, o) {
                        if (!(a && a.length)) return [];
                        var l = Ml(a);
                        return o == null ? l : je(l, function(d) {
                            return sn(o, e, d)
                        })
                    }
                    var PE = ve(function(a, o) {
                            return et(a) ? Ia(a, o) : []
                        }),
                        NE = ve(function(a) {
                            return fl(p1(a, et))
                        }),
                        VE = ve(function(a) {
                            var o = Tn(a);
                            return et(o) && (o = e), fl(p1(a, et), ae(o, 2))
                        }),
                        HE = ve(function(a) {
                            var o = Tn(a);
                            return o = typeof o == "function" ? o : e, fl(p1(a, et), e, o)
                        }),
                        DE = ve(Ml);

                    function FE(a, o) {
                        return sd(a || [], o || [], Ta)
                    }

                    function BE(a, o) {
                        return sd(a || [], o || [], La)
                    }
                    var UE = ve(function(a) {
                        var o = a.length,
                            l = o > 1 ? a[o - 1] : e;
                        return l = typeof l == "function" ? (a.pop(), l) : e, jd(a, l)
                    });

                    function Gd(a) {
                        var o = y(a);
                        return o.__chain__ = !0, o
                    }

                    function jE(a, o) {
                        return o(a), a
                    }

                    function Ho(a, o) {
                        return o(a)
                    }
                    var GE = Fr(function(a) {
                        var o = a.length,
                            l = o ? a[0] : 0,
                            d = this.__wrapped__,
                            m = function(E) {
                                return Y7(E, a)
                            };
                        return o > 1 || this.__actions__.length || !(d instanceof ye) || !Br(l) ? this.thru(m) : (d = d.slice(l, +l + (o ? 1 : 0)), d.__actions__.push({
                            func: Ho,
                            args: [m],
                            thisArg: e
                        }), new Sn(d, this.__chain__).thru(function(E) {
                            return o && !E.length && E.push(e), E
                        }))
                    });

                    function zE() {
                        return Gd(this)
                    }

                    function $E() {
                        return new Sn(this.value(), this.__chain__)
                    }

                    function qE() {
                        this.__values__ === e && (this.__values__ = ah(this.value()));
                        var a = this.__index__ >= this.__values__.length,
                            o = a ? e : this.__values__[this.__index__++];
                        return {
                            done: a,
                            value: o
                        }
                    }

                    function WE() {
                        return this
                    }

                    function KE(a) {
                        for (var o, l = this; l instanceof bo;) {
                            var d = Vd(l);
                            d.__index__ = 0, d.__values__ = e, o ? m.__wrapped__ = d : o = d;
                            var m = d;
                            l = l.__wrapped__
                        }
                        return m.__wrapped__ = a, o
                    }

                    function QE() {
                        var a = this.__wrapped__;
                        if (a instanceof ye) {
                            var o = a;
                            return this.__actions__.length && (o = new ye(this)), o = o.reverse(), o.__actions__.push({
                                func: Ho,
                                args: [Sl],
                                thisArg: e
                            }), new Sn(o, this.__chain__)
                        }
                        return this.thru(Sl)
                    }

                    function XE() {
                        return od(this.__wrapped__, this.__actions__)
                    }
                    var YE = Io(function(a, o, l) {
                        Te.call(a, l) ? ++a[l] : Hr(a, l, 1)
                    });

                    function JE(a, o, l) {
                        var d = fe(a) ? _f : j_;
                        return l && Ft(a, o, l) && (o = e), d(a, ae(o, 3))
                    }

                    function eA(a, o) {
                        var l = fe(a) ? p1 : jf;
                        return l(a, ae(o, 3))
                    }
                    var tA = gd(Hd),
                        nA = gd(Dd);

                    function rA(a, o) {
                        return wt(Do(a, o), 1)
                    }

                    function aA(a, o) {
                        return wt(Do(a, o), q)
                    }

                    function iA(a, o, l) {
                        return l = l === e ? 1 : pe(l), wt(Do(a, o), l)
                    }

                    function zd(a, o) {
                        var l = fe(a) ? Cn : _1;
                        return l(a, ae(o, 3))
                    }

                    function $d(a, o) {
                        var l = fe(a) ? Cy : Uf;
                        return l(a, ae(o, 3))
                    }
                    var oA = Io(function(a, o, l) {
                        Te.call(a, l) ? a[l].push(o) : Hr(a, l, [o])
                    });

                    function sA(a, o, l, d) {
                        a = Xt(a) ? a : d5(a), l = l && !d ? pe(l) : 0;
                        var m = a.length;
                        return l < 0 && (l = ct(m + l, 0)), Go(a) ? l <= m && a.indexOf(o, l) > -1 : !!m && t5(a, o, l) > -1
                    }
                    var lA = ve(function(a, o, l) {
                            var d = -1,
                                m = typeof o == "function",
                                E = Xt(a) ? V(a.length) : [];
                            return _1(a, function(M) {
                                E[++d] = m ? sn(o, M, l) : ka(M, o, l)
                            }), E
                        }),
                        cA = Io(function(a, o, l) {
                            Hr(a, l, o)
                        });

                    function Do(a, o) {
                        var l = fe(a) ? je : Kf;
                        return l(a, ae(o, 3))
                    }

                    function uA(a, o, l, d) {
                        return a == null ? [] : (fe(o) || (o = o == null ? [] : [o]), l = d ? e : l, fe(l) || (l = l == null ? [] : [l]), Jf(a, o, l))
                    }
                    var fA = Io(function(a, o, l) {
                        a[l ? 0 : 1].push(o)
                    }, function() {
                        return [
                            [],
                            []
                        ]
                    });

                    function dA(a, o, l) {
                        var d = fe(a) ? D7 : bf,
                            m = arguments.length < 3;
                        return d(a, ae(o, 4), l, m, _1)
                    }

                    function hA(a, o, l) {
                        var d = fe(a) ? xy : bf,
                            m = arguments.length < 3;
                        return d(a, ae(o, 4), l, m, Uf)
                    }

                    function pA(a, o) {
                        var l = fe(a) ? p1 : jf;
                        return l(a, Uo(ae(o, 3)))
                    }

                    function mA(a) {
                        var o = fe(a) ? Hf : sw;
                        return o(a)
                    }

                    function vA(a, o, l) {
                        (l ? Ft(a, o, l) : o === e) ? o = 1: o = pe(o);
                        var d = fe(a) ? H_ : lw;
                        return d(a, o)
                    }

                    function gA(a) {
                        var o = fe(a) ? D_ : uw;
                        return o(a)
                    }

                    function yA(a) {
                        if (a == null) return 0;
                        if (Xt(a)) return Go(a) ? r5(a) : a.length;
                        var o = Tt(a);
                        return o == St || o == Mt ? a.size : al(a).length
                    }

                    function _A(a, o, l) {
                        var d = fe(a) ? F7 : fw;
                        return l && Ft(a, o, l) && (o = e), d(a, ae(o, 3))
                    }
                    var wA = ve(function(a, o) {
                            if (a == null) return [];
                            var l = o.length;
                            return l > 1 && Ft(a, o[0], o[1]) ? o = [] : l > 2 && Ft(o[0], o[1], o[2]) && (o = [o[0]]), Jf(a, wt(o, 1), [])
                        }),
                        Fo = e_ || function() {
                            return ht.Date.now()
                        };

                    function EA(a, o) {
                        if (typeof o != "function") throw new xn(i);
                        return a = pe(a),
                            function() {
                                if (--a < 1) return o.apply(this, arguments)
                            }
                    }

                    function qd(a, o, l) {
                        return o = l ? e : o, o = a && o == null ? a.length : o, Dr(a, T, e, e, e, e, o)
                    }

                    function Wd(a, o) {
                        var l;
                        if (typeof o != "function") throw new xn(i);
                        return a = pe(a),
                            function() {
                                return --a > 0 && (l = o.apply(this, arguments)), a <= 1 && (o = e), l
                            }
                    }
                    var Zl = ve(function(a, o, l) {
                            var d = S;
                            if (l.length) {
                                var m = v1(l, u5(Zl));
                                d |= x
                            }
                            return Dr(a, d, o, l, m)
                        }),
                        Kd = ve(function(a, o, l) {
                            var d = S | I;
                            if (l.length) {
                                var m = v1(l, u5(Kd));
                                d |= x
                            }
                            return Dr(o, d, a, l, m)
                        });

                    function Qd(a, o, l) {
                        o = l ? e : o;
                        var d = Dr(a, b, e, e, e, e, e, o);
                        return d.placeholder = Qd.placeholder, d
                    }

                    function Xd(a, o, l) {
                        o = l ? e : o;
                        var d = Dr(a, C, e, e, e, e, e, o);
                        return d.placeholder = Xd.placeholder, d
                    }

                    function Yd(a, o, l) {
                        var d, m, E, M, k, L, F = 0,
                            B = !1,
                            U = !1,
                            K = !0;
                        if (typeof a != "function") throw new xn(i);
                        o = In(o) || 0, $e(l) && (B = !!l.leading, U = "maxWait" in l, E = U ? ct(In(l.maxWait) || 0, o) : E, K = "trailing" in l ? !!l.trailing : K);

                        function J(tt) {
                            var Kn = d,
                                Gr = m;
                            return d = m = e, F = tt, M = a.apply(Gr, Kn), M
                        }

                        function oe(tt) {
                            return F = tt, k = Na(ge, o), B ? J(tt) : M
                        }

                        function me(tt) {
                            var Kn = tt - L,
                                Gr = tt - F,
                                gh = o - Kn;
                            return U ? Zt(gh, E - Gr) : gh
                        }

                        function se(tt) {
                            var Kn = tt - L,
                                Gr = tt - F;
                            return L === e || Kn >= o || Kn < 0 || U && Gr >= E
                        }

                        function ge() {
                            var tt = Fo();
                            if (se(tt)) return we(tt);
                            k = Na(ge, me(tt))
                        }

                        function we(tt) {
                            return k = e, K && d ? J(tt) : (d = m = e, M)
                        }

                        function fn() {
                            k !== e && ld(k), F = 0, d = L = m = k = e
                        }

                        function Bt() {
                            return k === e ? M : we(Fo())
                        }

                        function dn() {
                            var tt = Fo(),
                                Kn = se(tt);
                            if (d = arguments, m = this, L = tt, Kn) {
                                if (k === e) return oe(L);
                                if (U) return ld(k), k = Na(ge, o), J(L)
                            }
                            return k === e && (k = Na(ge, o)), M
                        }
                        return dn.cancel = fn, dn.flush = Bt, dn
                    }
                    var AA = ve(function(a, o) {
                            return Bf(a, 1, o)
                        }),
                        bA = ve(function(a, o, l) {
                            return Bf(a, In(o) || 0, l)
                        });

                    function CA(a) {
                        return Dr(a, N)
                    }

                    function Bo(a, o) {
                        if (typeof a != "function" || o != null && typeof o != "function") throw new xn(i);
                        var l = function() {
                            var d = arguments,
                                m = o ? o.apply(this, d) : d[0],
                                E = l.cache;
                            if (E.has(m)) return E.get(m);
                            var M = a.apply(this, d);
                            return l.cache = E.set(m, M) || E, M
                        };
                        return l.cache = new(Bo.Cache || Vr), l
                    }
                    Bo.Cache = Vr;

                    function Uo(a) {
                        if (typeof a != "function") throw new xn(i);
                        return function() {
                            var o = arguments;
                            switch (o.length) {
                                case 0:
                                    return !a.call(this);
                                case 1:
                                    return !a.call(this, o[0]);
                                case 2:
                                    return !a.call(this, o[0], o[1]);
                                case 3:
                                    return !a.call(this, o[0], o[1], o[2])
                            }
                            return !a.apply(this, o)
                        }
                    }

                    function xA(a) {
                        return Wd(2, a)
                    }
                    var SA = dw(function(a, o) {
                            o = o.length == 1 && fe(o[0]) ? je(o[0], ln(ae())) : je(wt(o, 1), ln(ae()));
                            var l = o.length;
                            return ve(function(d) {
                                for (var m = -1, E = Zt(d.length, l); ++m < E;) d[m] = o[m].call(this, d[m]);
                                return sn(a, this, d)
                            })
                        }),
                        Tl = ve(function(a, o) {
                            var l = v1(o, u5(Tl));
                            return Dr(a, x, e, o, l)
                        }),
                        Jd = ve(function(a, o) {
                            var l = v1(o, u5(Jd));
                            return Dr(a, Z, e, o, l)
                        }),
                        MA = Fr(function(a, o) {
                            return Dr(a, P, e, e, e, o)
                        });

                    function ZA(a, o) {
                        if (typeof a != "function") throw new xn(i);
                        return o = o === e ? o : pe(o), ve(a, o)
                    }

                    function TA(a, o) {
                        if (typeof a != "function") throw new xn(i);
                        return o = o == null ? 0 : ct(pe(o), 0), ve(function(l) {
                            var d = l[o],
                                m = A1(l, 0, o);
                            return d && m1(m, d), sn(a, this, m)
                        })
                    }

                    function IA(a, o, l) {
                        var d = !0,
                            m = !0;
                        if (typeof a != "function") throw new xn(i);
                        return $e(l) && (d = "leading" in l ? !!l.leading : d, m = "trailing" in l ? !!l.trailing : m), Yd(a, o, {
                            leading: d,
                            maxWait: o,
                            trailing: m
                        })
                    }

                    function kA(a) {
                        return qd(a, 1)
                    }

                    function OA(a, o) {
                        return Tl(hl(o), a)
                    }

                    function LA() {
                        if (!arguments.length) return [];
                        var a = arguments[0];
                        return fe(a) ? a : [a]
                    }

                    function RA(a) {
                        return Mn(a, w)
                    }

                    function PA(a, o) {
                        return o = typeof o == "function" ? o : e, Mn(a, w, o)
                    }

                    function NA(a) {
                        return Mn(a, p | w)
                    }

                    function VA(a, o) {
                        return o = typeof o == "function" ? o : e, Mn(a, p | w, o)
                    }

                    function HA(a, o) {
                        return o == null || Ff(a, o, pt(o))
                    }

                    function Wn(a, o) {
                        return a === o || a !== a && o !== o
                    }
                    var DA = Ro(tl),
                        FA = Ro(function(a, o) {
                            return a >= o
                        }),
                        y0 = $f(function() {
                            return arguments
                        }()) ? $f : function(a) {
                            return Qe(a) && Te.call(a, "callee") && !Of.call(a, "callee")
                        },
                        fe = V.isArray,
                        BA = hf ? ln(hf) : K_;

                    function Xt(a) {
                        return a != null && jo(a.length) && !Ur(a)
                    }

                    function et(a) {
                        return Qe(a) && Xt(a)
                    }

                    function UA(a) {
                        return a === !0 || a === !1 || Qe(a) && Dt(a) == gt
                    }
                    var b1 = n_ || Fl,
                        jA = pf ? ln(pf) : Q_;

                    function GA(a) {
                        return Qe(a) && a.nodeType === 1 && !Va(a)
                    }

                    function zA(a) {
                        if (a == null) return !0;
                        if (Xt(a) && (fe(a) || typeof a == "string" || typeof a.splice == "function" || b1(a) || f5(a) || y0(a))) return !a.length;
                        var o = Tt(a);
                        if (o == St || o == Mt) return !a.size;
                        if (Pa(a)) return !al(a).length;
                        for (var l in a)
                            if (Te.call(a, l)) return !1;
                        return !0
                    }

                    function $A(a, o) {
                        return Oa(a, o)
                    }

                    function qA(a, o, l) {
                        l = typeof l == "function" ? l : e;
                        var d = l ? l(a, o) : e;
                        return d === e ? Oa(a, o, e, l) : !!d
                    }

                    function Il(a) {
                        if (!Qe(a)) return !1;
                        var o = Dt(a);
                        return o == Ht || o == Vt || typeof a.message == "string" && typeof a.name == "string" && !Va(a)
                    }

                    function WA(a) {
                        return typeof a == "number" && Rf(a)
                    }

                    function Ur(a) {
                        if (!$e(a)) return !1;
                        var o = Dt(a);
                        return o == xt || o == Gn || o == st || o == Q0
                    }

                    function eh(a) {
                        return typeof a == "number" && a == pe(a)
                    }

                    function jo(a) {
                        return typeof a == "number" && a > -1 && a % 1 == 0 && a <= X
                    }

                    function $e(a) {
                        var o = typeof a;
                        return a != null && (o == "object" || o == "function")
                    }

                    function Qe(a) {
                        return a != null && typeof a == "object"
                    }
                    var th = mf ? ln(mf) : Y_;

                    function KA(a, o) {
                        return a === o || rl(a, o, wl(o))
                    }

                    function QA(a, o, l) {
                        return l = typeof l == "function" ? l : e, rl(a, o, wl(o), l)
                    }

                    function XA(a) {
                        return nh(a) && a != +a
                    }

                    function YA(a) {
                        if (Pw(a)) throw new ue(r);
                        return qf(a)
                    }

                    function JA(a) {
                        return a === null
                    }

                    function eb(a) {
                        return a == null
                    }

                    function nh(a) {
                        return typeof a == "number" || Qe(a) && Dt(a) == Kt
                    }

                    function Va(a) {
                        if (!Qe(a) || Dt(a) != yt) return !1;
                        var o = vo(a);
                        if (o === null) return !0;
                        var l = Te.call(o, "constructor") && o.constructor;
                        return typeof l == "function" && l instanceof l && fo.call(l) == Qy
                    }
                    var kl = vf ? ln(vf) : J_;

                    function tb(a) {
                        return eh(a) && a >= -X && a <= X
                    }
                    var rh = gf ? ln(gf) : ew;

                    function Go(a) {
                        return typeof a == "string" || !fe(a) && Qe(a) && Dt(a) == h1
                    }

                    function un(a) {
                        return typeof a == "symbol" || Qe(a) && Dt(a) == fr
                    }
                    var f5 = yf ? ln(yf) : tw;

                    function nb(a) {
                        return a === e
                    }

                    function rb(a) {
                        return Qe(a) && Tt(a) == zn
                    }

                    function ab(a) {
                        return Qe(a) && Dt(a) == s0
                    }
                    var ib = Ro(il),
                        ob = Ro(function(a, o) {
                            return a <= o
                        });

                    function ah(a) {
                        if (!a) return [];
                        if (Xt(a)) return Go(a) ? $n(a) : Qt(a);
                        if (Ca && a[Ca]) return Hy(a[Ca]());
                        var o = Tt(a),
                            l = o == St ? $7 : o == Mt ? lo : d5;
                        return l(a)
                    }

                    function jr(a) {
                        if (!a) return a === 0 ? a : 0;
                        if (a = In(a), a === q || a === -q) {
                            var o = a < 0 ? -1 : 1;
                            return o * ne
                        }
                        return a === a ? a : 0
                    }

                    function pe(a) {
                        var o = jr(a),
                            l = o % 1;
                        return o === o ? l ? o - l : o : 0
                    }

                    function ih(a) {
                        return a ? p0(pe(a), 0, de) : 0
                    }

                    function In(a) {
                        if (typeof a == "number") return a;
                        if (un(a)) return he;
                        if ($e(a)) {
                            var o = typeof a.valueOf == "function" ? a.valueOf() : a;
                            a = $e(o) ? o + "" : o
                        }
                        if (typeof a != "string") return a === 0 ? a : +a;
                        a = Cf(a);
                        var l = Bg.test(a);
                        return l || jg.test(a) ? Ey(a.slice(2), l ? 2 : 8) : Fg.test(a) ? he : +a
                    }

                    function oh(a) {
                        return vr(a, Yt(a))
                    }

                    function sb(a) {
                        return a ? p0(pe(a), -X, X) : a === 0 ? a : 0
                    }

                    function Ze(a) {
                        return a == null ? "" : cn(a)
                    }
                    var lb = l5(function(a, o) {
                            if (Pa(o) || Xt(o)) {
                                vr(o, pt(o), a);
                                return
                            }
                            for (var l in o) Te.call(o, l) && Ta(a, l, o[l])
                        }),
                        sh = l5(function(a, o) {
                            vr(o, Yt(o), a)
                        }),
                        zo = l5(function(a, o, l, d) {
                            vr(o, Yt(o), a, d)
                        }),
                        cb = l5(function(a, o, l, d) {
                            vr(o, pt(o), a, d)
                        }),
                        ub = Fr(Y7);

                    function fb(a, o) {
                        var l = s5(a);
                        return o == null ? l : Df(l, o)
                    }
                    var db = ve(function(a, o) {
                            a = Pe(a);
                            var l = -1,
                                d = o.length,
                                m = d > 2 ? o[2] : e;
                            for (m && Ft(o[0], o[1], m) && (d = 1); ++l < d;)
                                for (var E = o[l], M = Yt(E), k = -1, L = M.length; ++k < L;) {
                                    var F = M[k],
                                        B = a[F];
                                    (B === e || Wn(B, a5[F]) && !Te.call(a, F)) && (a[F] = E[F])
                                }
                            return a
                        }),
                        hb = ve(function(a) {
                            return a.push(e, Cd), sn(lh, e, a)
                        });

                    function pb(a, o) {
                        return wf(a, ae(o, 3), mr)
                    }

                    function mb(a, o) {
                        return wf(a, ae(o, 3), el)
                    }

                    function vb(a, o) {
                        return a == null ? a : J7(a, ae(o, 3), Yt)
                    }

                    function gb(a, o) {
                        return a == null ? a : Gf(a, ae(o, 3), Yt)
                    }

                    function yb(a, o) {
                        return a && mr(a, ae(o, 3))
                    }

                    function _b(a, o) {
                        return a && el(a, ae(o, 3))
                    }

                    function wb(a) {
                        return a == null ? [] : So(a, pt(a))
                    }

                    function Eb(a) {
                        return a == null ? [] : So(a, Yt(a))
                    }

                    function Ol(a, o, l) {
                        var d = a == null ? e : m0(a, o);
                        return d === e ? l : d
                    }

                    function Ab(a, o) {
                        return a != null && Md(a, o, z_)
                    }

                    function Ll(a, o) {
                        return a != null && Md(a, o, $_)
                    }
                    var bb = _d(function(a, o, l) {
                            o != null && typeof o.toString != "function" && (o = ho.call(o)), a[o] = l
                        }, Pl(Jt)),
                        Cb = _d(function(a, o, l) {
                            o != null && typeof o.toString != "function" && (o = ho.call(o)), Te.call(a, o) ? a[o].push(l) : a[o] = [l]
                        }, ae),
                        xb = ve(ka);

                    function pt(a) {
                        return Xt(a) ? Vf(a) : al(a)
                    }

                    function Yt(a) {
                        return Xt(a) ? Vf(a, !0) : nw(a)
                    }

                    function Sb(a, o) {
                        var l = {};
                        return o = ae(o, 3), mr(a, function(d, m, E) {
                            Hr(l, o(d, m, E), d)
                        }), l
                    }

                    function Mb(a, o) {
                        var l = {};
                        return o = ae(o, 3), mr(a, function(d, m, E) {
                            Hr(l, m, o(d, m, E))
                        }), l
                    }
                    var Zb = l5(function(a, o, l) {
                            Mo(a, o, l)
                        }),
                        lh = l5(function(a, o, l, d) {
                            Mo(a, o, l, d)
                        }),
                        Tb = Fr(function(a, o) {
                            var l = {};
                            if (a == null) return l;
                            var d = !1;
                            o = je(o, function(E) {
                                return E = E1(E, a), d || (d = E.length > 1), E
                            }), vr(a, yl(a), l), d && (l = Mn(l, p | h | w, bw));
                            for (var m = o.length; m--;) ul(l, o[m]);
                            return l
                        });

                    function Ib(a, o) {
                        return ch(a, Uo(ae(o)))
                    }
                    var kb = Fr(function(a, o) {
                        return a == null ? {} : aw(a, o)
                    });

                    function ch(a, o) {
                        if (a == null) return {};
                        var l = je(yl(a), function(d) {
                            return [d]
                        });
                        return o = ae(o), ed(a, l, function(d, m) {
                            return o(d, m[0])
                        })
                    }

                    function Ob(a, o, l) {
                        o = E1(o, a);
                        var d = -1,
                            m = o.length;
                        for (m || (m = 1, a = e); ++d < m;) {
                            var E = a == null ? e : a[gr(o[d])];
                            E === e && (d = m, E = l), a = Ur(E) ? E.call(a) : E
                        }
                        return a
                    }

                    function Lb(a, o, l) {
                        return a == null ? a : La(a, o, l)
                    }

                    function Rb(a, o, l, d) {
                        return d = typeof d == "function" ? d : e, a == null ? a : La(a, o, l, d)
                    }
                    var uh = Ad(pt),
                        fh = Ad(Yt);

                    function Pb(a, o, l) {
                        var d = fe(a),
                            m = d || b1(a) || f5(a);
                        if (o = ae(o, 4), l == null) {
                            var E = a && a.constructor;
                            m ? l = d ? new E : [] : $e(a) ? l = Ur(E) ? s5(vo(a)) : {} : l = {}
                        }
                        return (m ? Cn : mr)(a, function(M, k, L) {
                            return o(l, M, k, L)
                        }), l
                    }

                    function Nb(a, o) {
                        return a == null ? !0 : ul(a, o)
                    }

                    function Vb(a, o, l) {
                        return a == null ? a : id(a, o, hl(l))
                    }

                    function Hb(a, o, l, d) {
                        return d = typeof d == "function" ? d : e, a == null ? a : id(a, o, hl(l), d)
                    }

                    function d5(a) {
                        return a == null ? [] : z7(a, pt(a))
                    }

                    function Db(a) {
                        return a == null ? [] : z7(a, Yt(a))
                    }

                    function Fb(a, o, l) {
                        return l === e && (l = o, o = e), l !== e && (l = In(l), l = l === l ? l : 0), o !== e && (o = In(o), o = o === o ? o : 0), p0(In(a), o, l)
                    }

                    function Bb(a, o, l) {
                        return o = jr(o), l === e ? (l = o, o = 0) : l = jr(l), a = In(a), q_(a, o, l)
                    }

                    function Ub(a, o, l) {
                        if (l && typeof l != "boolean" && Ft(a, o, l) && (o = l = e), l === e && (typeof o == "boolean" ? (l = o, o = e) : typeof a == "boolean" && (l = a, a = e)), a === e && o === e ? (a = 0, o = 1) : (a = jr(a), o === e ? (o = a, a = 0) : o = jr(o)), a > o) {
                            var d = a;
                            a = o, o = d
                        }
                        if (l || a % 1 || o % 1) {
                            var m = Pf();
                            return Zt(a + m * (o - a + wy("1e-" + ((m + "").length - 1))), o)
                        }
                        return sl(a, o)
                    }
                    var jb = c5(function(a, o, l) {
                        return o = o.toLowerCase(), a + (l ? dh(o) : o)
                    });

                    function dh(a) {
                        return Rl(Ze(a).toLowerCase())
                    }

                    function hh(a) {
                        return a = Ze(a), a && a.replace(zg, Ly).replace(uy, "")
                    }

                    function Gb(a, o, l) {
                        a = Ze(a), o = cn(o);
                        var d = a.length;
                        l = l === e ? d : p0(pe(l), 0, d);
                        var m = l;
                        return l -= o.length, l >= 0 && a.slice(l, m) == o
                    }

                    function zb(a) {
                        return a = Ze(a), a && J0.test(a) ? a.replace(c0, Ry) : a
                    }

                    function $b(a) {
                        return a = Ze(a), a && kg.test(a) ? a.replace(T7, "\\$&") : a
                    }
                    var qb = c5(function(a, o, l) {
                            return a + (l ? "-" : "") + o.toLowerCase()
                        }),
                        Wb = c5(function(a, o, l) {
                            return a + (l ? " " : "") + o.toLowerCase()
                        }),
                        Kb = vd("toLowerCase");

                    function Qb(a, o, l) {
                        a = Ze(a), o = pe(o);
                        var d = o ? r5(a) : 0;
                        if (!o || d >= o) return a;
                        var m = (o - d) / 2;
                        return Lo(wo(m), l) + a + Lo(_o(m), l)
                    }

                    function Xb(a, o, l) {
                        a = Ze(a), o = pe(o);
                        var d = o ? r5(a) : 0;
                        return o && d < o ? a + Lo(o - d, l) : a
                    }

                    function Yb(a, o, l) {
                        a = Ze(a), o = pe(o);
                        var d = o ? r5(a) : 0;
                        return o && d < o ? Lo(o - d, l) + a : a
                    }

                    function Jb(a, o, l) {
                        return l || o == null ? o = 0 : o && (o = +o), o_(Ze(a).replace(I7, ""), o || 0)
                    }

                    function eC(a, o, l) {
                        return (l ? Ft(a, o, l) : o === e) ? o = 1 : o = pe(o), ll(Ze(a), o)
                    }

                    function tC() {
                        var a = arguments,
                            o = Ze(a[0]);
                        return a.length < 3 ? o : o.replace(a[1], a[2])
                    }
                    var nC = c5(function(a, o, l) {
                        return a + (l ? "_" : "") + o.toLowerCase()
                    });

                    function rC(a, o, l) {
                        return l && typeof l != "number" && Ft(a, o, l) && (o = l = e), l = l === e ? de : l >>> 0, l ? (a = Ze(a), a && (typeof o == "string" || o != null && !kl(o)) && (o = cn(o), !o && n5(a)) ? A1($n(a), 0, l) : a.split(o, l)) : []
                    }
                    var aC = c5(function(a, o, l) {
                        return a + (l ? " " : "") + Rl(o)
                    });

                    function iC(a, o, l) {
                        return a = Ze(a), l = l == null ? 0 : p0(pe(l), 0, a.length), o = cn(o), a.slice(l, l + o.length) == o
                    }

                    function oC(a, o, l) {
                        var d = y.templateSettings;
                        l && Ft(a, o, l) && (o = e), a = Ze(a), o = zo({}, o, d, bd);
                        var m = zo({}, o.imports, d.imports, bd),
                            E = pt(m),
                            M = z7(m, E),
                            k, L, F = 0,
                            B = o.interpolate || ro,
                            U = "__p += '",
                            K = q7((o.escape || ro).source + "|" + B.source + "|" + (B === G3 ? Dg : ro).source + "|" + (o.evaluate || ro).source + "|$", "g"),
                            J = "//# sourceURL=" + (Te.call(o, "sourceURL") ? (o.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++my + "]") + `
`;
                        a.replace(K, function(se, ge, we, fn, Bt, dn) {
                            return we || (we = fn), U += a.slice(F, dn).replace($g, Py), ge && (k = !0, U += `' +
__e(` + ge + `) +
'`), Bt && (L = !0, U += `';
` + Bt + `;
__p += '`), we && (U += `' +
((__t = (` + we + `)) == null ? '' : __t) +
'`), F = dn + se.length, se
                        }), U += `';
`;
                        var oe = Te.call(o, "variable") && o.variable;
                        if (!oe) U = `with (obj) {
` + U + `
}
`;
                        else if (Vg.test(oe)) throw new ue(s);
                        U = (L ? U.replace(x7, "") : U).replace(_t, "$1").replace(S7, "$1;"), U = "function(" + (oe || "obj") + `) {
` + (oe ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (k ? ", __e = _.escape" : "") + (L ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + U + `return __p
}`;
                        var me = mh(function() {
                            return Se(E, J + "return " + U).apply(e, M)
                        });
                        if (me.source = U, Il(me)) throw me;
                        return me
                    }

                    function sC(a) {
                        return Ze(a).toLowerCase()
                    }

                    function lC(a) {
                        return Ze(a).toUpperCase()
                    }

                    function cC(a, o, l) {
                        if (a = Ze(a), a && (l || o === e)) return Cf(a);
                        if (!a || !(o = cn(o))) return a;
                        var d = $n(a),
                            m = $n(o),
                            E = xf(d, m),
                            M = Sf(d, m) + 1;
                        return A1(d, E, M).join("")
                    }

                    function uC(a, o, l) {
                        if (a = Ze(a), a && (l || o === e)) return a.slice(0, Zf(a) + 1);
                        if (!a || !(o = cn(o))) return a;
                        var d = $n(a),
                            m = Sf(d, $n(o)) + 1;
                        return A1(d, 0, m).join("")
                    }

                    function fC(a, o, l) {
                        if (a = Ze(a), a && (l || o === e)) return a.replace(I7, "");
                        if (!a || !(o = cn(o))) return a;
                        var d = $n(a),
                            m = xf(d, $n(o));
                        return A1(d, m).join("")
                    }

                    function dC(a, o) {
                        var l = H,
                            d = le;
                        if ($e(o)) {
                            var m = "separator" in o ? o.separator : m;
                            l = "length" in o ? pe(o.length) : l, d = "omission" in o ? cn(o.omission) : d
                        }
                        a = Ze(a);
                        var E = a.length;
                        if (n5(a)) {
                            var M = $n(a);
                            E = M.length
                        }
                        if (l >= E) return a;
                        var k = l - r5(d);
                        if (k < 1) return d;
                        var L = M ? A1(M, 0, k).join("") : a.slice(0, k);
                        if (m === e) return L + d;
                        if (M && (k += L.length - k), kl(m)) {
                            if (a.slice(k).search(m)) {
                                var F, B = L;
                                for (m.global || (m = q7(m.source, Ze(z3.exec(m)) + "g")), m.lastIndex = 0; F = m.exec(B);) var U = F.index;
                                L = L.slice(0, U === e ? k : U)
                            }
                        } else if (a.indexOf(cn(m), k) != k) {
                            var K = L.lastIndexOf(m);
                            K > -1 && (L = L.slice(0, K))
                        }
                        return L + d
                    }

                    function hC(a) {
                        return a = Ze(a), a && Aa.test(a) ? a.replace(M7, Uy) : a
                    }
                    var pC = c5(function(a, o, l) {
                            return a + (l ? " " : "") + o.toUpperCase()
                        }),
                        Rl = vd("toUpperCase");

                    function ph(a, o, l) {
                        return a = Ze(a), o = l ? e : o, o === e ? Vy(a) ? zy(a) : Zy(a) : a.match(o) || []
                    }
                    var mh = ve(function(a, o) {
                            try {
                                return sn(a, e, o)
                            } catch (l) {
                                return Il(l) ? l : new ue(l)
                            }
                        }),
                        mC = Fr(function(a, o) {
                            return Cn(o, function(l) {
                                l = gr(l), Hr(a, l, Zl(a[l], a))
                            }), a
                        });

                    function vC(a) {
                        var o = a == null ? 0 : a.length,
                            l = ae();
                        return a = o ? je(a, function(d) {
                            if (typeof d[1] != "function") throw new xn(i);
                            return [l(d[0]), d[1]]
                        }) : [], ve(function(d) {
                            for (var m = -1; ++m < o;) {
                                var E = a[m];
                                if (sn(E[0], this, d)) return sn(E[1], this, d)
                            }
                        })
                    }

                    function gC(a) {
                        return U_(Mn(a, p))
                    }

                    function Pl(a) {
                        return function() {
                            return a
                        }
                    }

                    function yC(a, o) {
                        return a == null || a !== a ? o : a
                    }
                    var _C = yd(),
                        wC = yd(!0);

                    function Jt(a) {
                        return a
                    }

                    function Nl(a) {
                        return Wf(typeof a == "function" ? a : Mn(a, p))
                    }

                    function EC(a) {
                        return Qf(Mn(a, p))
                    }

                    function AC(a, o) {
                        return Xf(a, Mn(o, p))
                    }
                    var bC = ve(function(a, o) {
                            return function(l) {
                                return ka(l, a, o)
                            }
                        }),
                        CC = ve(function(a, o) {
                            return function(l) {
                                return ka(a, l, o)
                            }
                        });

                    function Vl(a, o, l) {
                        var d = pt(o),
                            m = So(o, d);
                        l == null && !($e(o) && (m.length || !d.length)) && (l = o, o = a, a = this, m = So(o, pt(o)));
                        var E = !($e(l) && "chain" in l) || !!l.chain,
                            M = Ur(a);
                        return Cn(m, function(k) {
                            var L = o[k];
                            a[k] = L, M && (a.prototype[k] = function() {
                                var F = this.__chain__;
                                if (E || F) {
                                    var B = a(this.__wrapped__),
                                        U = B.__actions__ = Qt(this.__actions__);
                                    return U.push({
                                        func: L,
                                        args: arguments,
                                        thisArg: a
                                    }), B.__chain__ = F, B
                                }
                                return L.apply(a, m1([this.value()], arguments))
                            })
                        }), a
                    }

                    function xC() {
                        return ht._ === this && (ht._ = Xy), this
                    }

                    function Hl() {}

                    function SC(a) {
                        return a = pe(a), ve(function(o) {
                            return Yf(o, a)
                        })
                    }
                    var MC = ml(je),
                        ZC = ml(_f),
                        TC = ml(F7);

                    function vh(a) {
                        return Al(a) ? B7(gr(a)) : iw(a)
                    }

                    function IC(a) {
                        return function(o) {
                            return a == null ? e : m0(a, o)
                        }
                    }
                    var kC = wd(),
                        OC = wd(!0);

                    function Dl() {
                        return []
                    }

                    function Fl() {
                        return !1
                    }

                    function LC() {
                        return {}
                    }

                    function RC() {
                        return ""
                    }

                    function PC() {
                        return !0
                    }

                    function NC(a, o) {
                        if (a = pe(a), a < 1 || a > X) return [];
                        var l = de,
                            d = Zt(a, de);
                        o = ae(o), a -= de;
                        for (var m = G7(d, o); ++l < a;) o(l);
                        return m
                    }

                    function VC(a) {
                        return fe(a) ? je(a, gr) : un(a) ? [a] : Qt(Nd(Ze(a)))
                    }

                    function HC(a) {
                        var o = ++Ky;
                        return Ze(a) + o
                    }
                    var DC = Oo(function(a, o) {
                            return a + o
                        }, 0),
                        FC = vl("ceil"),
                        BC = Oo(function(a, o) {
                            return a / o
                        }, 1),
                        UC = vl("floor");

                    function jC(a) {
                        return a && a.length ? xo(a, Jt, tl) : e
                    }

                    function GC(a, o) {
                        return a && a.length ? xo(a, ae(o, 2), tl) : e
                    }

                    function zC(a) {
                        return Af(a, Jt)
                    }

                    function $C(a, o) {
                        return Af(a, ae(o, 2))
                    }

                    function qC(a) {
                        return a && a.length ? xo(a, Jt, il) : e
                    }

                    function WC(a, o) {
                        return a && a.length ? xo(a, ae(o, 2), il) : e
                    }
                    var KC = Oo(function(a, o) {
                            return a * o
                        }, 1),
                        QC = vl("round"),
                        XC = Oo(function(a, o) {
                            return a - o
                        }, 0);

                    function YC(a) {
                        return a && a.length ? j7(a, Jt) : 0
                    }

                    function JC(a, o) {
                        return a && a.length ? j7(a, ae(o, 2)) : 0
                    }
                    return y.after = EA, y.ary = qd, y.assign = lb, y.assignIn = sh, y.assignInWith = zo, y.assignWith = cb, y.at = ub, y.before = Wd, y.bind = Zl, y.bindAll = mC, y.bindKey = Kd, y.castArray = LA, y.chain = Gd, y.chunk = Uw, y.compact = jw, y.concat = Gw, y.cond = vC, y.conforms = gC, y.constant = Pl, y.countBy = YE, y.create = fb, y.curry = Qd, y.curryRight = Xd, y.debounce = Yd, y.defaults = db, y.defaultsDeep = hb, y.defer = AA, y.delay = bA, y.difference = zw, y.differenceBy = $w, y.differenceWith = qw, y.drop = Ww, y.dropRight = Kw, y.dropRightWhile = Qw, y.dropWhile = Xw, y.fill = Yw, y.filter = eA, y.flatMap = rA, y.flatMapDeep = aA, y.flatMapDepth = iA, y.flatten = Fd, y.flattenDeep = Jw, y.flattenDepth = eE, y.flip = CA, y.flow = _C, y.flowRight = wC, y.fromPairs = tE, y.functions = wb, y.functionsIn = Eb, y.groupBy = oA, y.initial = rE, y.intersection = aE, y.intersectionBy = iE, y.intersectionWith = oE, y.invert = bb, y.invertBy = Cb, y.invokeMap = lA, y.iteratee = Nl, y.keyBy = cA, y.keys = pt, y.keysIn = Yt, y.map = Do, y.mapKeys = Sb, y.mapValues = Mb, y.matches = EC, y.matchesProperty = AC, y.memoize = Bo, y.merge = Zb, y.mergeWith = lh, y.method = bC, y.methodOf = CC, y.mixin = Vl, y.negate = Uo, y.nthArg = SC, y.omit = Tb, y.omitBy = Ib, y.once = xA, y.orderBy = uA, y.over = MC, y.overArgs = SA, y.overEvery = ZC, y.overSome = TC, y.partial = Tl, y.partialRight = Jd, y.partition = fA, y.pick = kb, y.pickBy = ch, y.property = vh, y.propertyOf = IC, y.pull = uE, y.pullAll = Ud, y.pullAllBy = fE, y.pullAllWith = dE, y.pullAt = hE, y.range = kC, y.rangeRight = OC, y.rearg = MA, y.reject = pA, y.remove = pE, y.rest = ZA, y.reverse = Sl, y.sampleSize = vA, y.set = Lb, y.setWith = Rb, y.shuffle = gA, y.slice = mE, y.sortBy = wA, y.sortedUniq = AE, y.sortedUniqBy = bE, y.split = rC, y.spread = TA, y.tail = CE, y.take = xE, y.takeRight = SE, y.takeRightWhile = ME, y.takeWhile = ZE, y.tap = jE, y.throttle = IA, y.thru = Ho, y.toArray = ah, y.toPairs = uh, y.toPairsIn = fh, y.toPath = VC, y.toPlainObject = oh, y.transform = Pb, y.unary = kA, y.union = TE, y.unionBy = IE, y.unionWith = kE, y.uniq = OE, y.uniqBy = LE, y.uniqWith = RE, y.unset = Nb, y.unzip = Ml, y.unzipWith = jd, y.update = Vb, y.updateWith = Hb, y.values = d5, y.valuesIn = Db, y.without = PE, y.words = ph, y.wrap = OA, y.xor = NE, y.xorBy = VE, y.xorWith = HE, y.zip = DE, y.zipObject = FE, y.zipObjectDeep = BE, y.zipWith = UE, y.entries = uh, y.entriesIn = fh, y.extend = sh, y.extendWith = zo, Vl(y, y), y.add = DC, y.attempt = mh, y.camelCase = jb, y.capitalize = dh, y.ceil = FC, y.clamp = Fb, y.clone = RA, y.cloneDeep = NA, y.cloneDeepWith = VA, y.cloneWith = PA, y.conformsTo = HA, y.deburr = hh, y.defaultTo = yC, y.divide = BC, y.endsWith = Gb, y.eq = Wn, y.escape = zb, y.escapeRegExp = $b, y.every = JE, y.find = tA, y.findIndex = Hd, y.findKey = pb, y.findLast = nA, y.findLastIndex = Dd, y.findLastKey = mb, y.floor = UC, y.forEach = zd, y.forEachRight = $d, y.forIn = vb, y.forInRight = gb, y.forOwn = yb, y.forOwnRight = _b, y.get = Ol, y.gt = DA, y.gte = FA, y.has = Ab, y.hasIn = Ll, y.head = Bd, y.identity = Jt, y.includes = sA, y.indexOf = nE, y.inRange = Bb, y.invoke = xb, y.isArguments = y0, y.isArray = fe, y.isArrayBuffer = BA, y.isArrayLike = Xt, y.isArrayLikeObject = et, y.isBoolean = UA, y.isBuffer = b1, y.isDate = jA, y.isElement = GA, y.isEmpty = zA, y.isEqual = $A, y.isEqualWith = qA, y.isError = Il, y.isFinite = WA, y.isFunction = Ur, y.isInteger = eh, y.isLength = jo, y.isMap = th, y.isMatch = KA, y.isMatchWith = QA, y.isNaN = XA, y.isNative = YA, y.isNil = eb, y.isNull = JA, y.isNumber = nh, y.isObject = $e, y.isObjectLike = Qe, y.isPlainObject = Va, y.isRegExp = kl, y.isSafeInteger = tb, y.isSet = rh, y.isString = Go, y.isSymbol = un, y.isTypedArray = f5, y.isUndefined = nb, y.isWeakMap = rb, y.isWeakSet = ab, y.join = sE, y.kebabCase = qb, y.last = Tn, y.lastIndexOf = lE, y.lowerCase = Wb, y.lowerFirst = Kb, y.lt = ib, y.lte = ob, y.max = jC, y.maxBy = GC, y.mean = zC, y.meanBy = $C, y.min = qC, y.minBy = WC, y.stubArray = Dl, y.stubFalse = Fl, y.stubObject = LC, y.stubString = RC, y.stubTrue = PC, y.multiply = KC, y.nth = cE, y.noConflict = xC, y.noop = Hl, y.now = Fo, y.pad = Qb, y.padEnd = Xb, y.padStart = Yb, y.parseInt = Jb, y.random = Ub, y.reduce = dA, y.reduceRight = hA, y.repeat = eC, y.replace = tC, y.result = Ob, y.round = QC, y.runInContext = O, y.sample = mA, y.size = yA, y.snakeCase = nC, y.some = _A, y.sortedIndex = vE, y.sortedIndexBy = gE, y.sortedIndexOf = yE, y.sortedLastIndex = _E, y.sortedLastIndexBy = wE, y.sortedLastIndexOf = EE, y.startCase = aC, y.startsWith = iC, y.subtract = XC, y.sum = YC, y.sumBy = JC, y.template = oC, y.times = NC, y.toFinite = jr, y.toInteger = pe, y.toLength = ih, y.toLower = sC, y.toNumber = In, y.toSafeInteger = sb, y.toString = Ze, y.toUpper = lC, y.trim = cC, y.trimEnd = uC, y.trimStart = fC, y.truncate = dC, y.unescape = hC, y.uniqueId = HC, y.upperCase = pC, y.upperFirst = Rl, y.each = zd, y.eachRight = $d, y.first = Bd, Vl(y, function() {
                        var a = {};
                        return mr(y, function(o, l) {
                            Te.call(y.prototype, l) || (a[l] = o)
                        }), a
                    }(), {
                        chain: !1
                    }), y.VERSION = t, Cn(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(a) {
                        y[a].placeholder = y
                    }), Cn(["drop", "take"], function(a, o) {
                        ye.prototype[a] = function(l) {
                            l = l === e ? 1 : ct(pe(l), 0);
                            var d = this.__filtered__ && !o ? new ye(this) : this.clone();
                            return d.__filtered__ ? d.__takeCount__ = Zt(l, d.__takeCount__) : d.__views__.push({
                                size: Zt(l, de),
                                type: a + (d.__dir__ < 0 ? "Right" : "")
                            }), d
                        }, ye.prototype[a + "Right"] = function(l) {
                            return this.reverse()[a](l).reverse()
                        }
                    }), Cn(["filter", "map", "takeWhile"], function(a, o) {
                        var l = o + 1,
                            d = l == G || l == ee;
                        ye.prototype[a] = function(m) {
                            var E = this.clone();
                            return E.__iteratees__.push({
                                iteratee: ae(m, 3),
                                type: l
                            }), E.__filtered__ = E.__filtered__ || d, E
                        }
                    }), Cn(["head", "last"], function(a, o) {
                        var l = "take" + (o ? "Right" : "");
                        ye.prototype[a] = function() {
                            return this[l](1).value()[0]
                        }
                    }), Cn(["initial", "tail"], function(a, o) {
                        var l = "drop" + (o ? "" : "Right");
                        ye.prototype[a] = function() {
                            return this.__filtered__ ? new ye(this) : this[l](1)
                        }
                    }), ye.prototype.compact = function() {
                        return this.filter(Jt)
                    }, ye.prototype.find = function(a) {
                        return this.filter(a).head()
                    }, ye.prototype.findLast = function(a) {
                        return this.reverse().find(a)
                    }, ye.prototype.invokeMap = ve(function(a, o) {
                        return typeof a == "function" ? new ye(this) : this.map(function(l) {
                            return ka(l, a, o)
                        })
                    }), ye.prototype.reject = function(a) {
                        return this.filter(Uo(ae(a)))
                    }, ye.prototype.slice = function(a, o) {
                        a = pe(a);
                        var l = this;
                        return l.__filtered__ && (a > 0 || o < 0) ? new ye(l) : (a < 0 ? l = l.takeRight(-a) : a && (l = l.drop(a)), o !== e && (o = pe(o), l = o < 0 ? l.dropRight(-o) : l.take(o - a)), l)
                    }, ye.prototype.takeRightWhile = function(a) {
                        return this.reverse().takeWhile(a).reverse()
                    }, ye.prototype.toArray = function() {
                        return this.take(de)
                    }, mr(ye.prototype, function(a, o) {
                        var l = /^(?:filter|find|map|reject)|While$/.test(o),
                            d = /^(?:head|last)$/.test(o),
                            m = y[d ? "take" + (o == "last" ? "Right" : "") : o],
                            E = d || /^find/.test(o);
                        m && (y.prototype[o] = function() {
                            var M = this.__wrapped__,
                                k = d ? [1] : arguments,
                                L = M instanceof ye,
                                F = k[0],
                                B = L || fe(M),
                                U = function(ge) {
                                    var we = m.apply(y, m1([ge], k));
                                    return d && K ? we[0] : we
                                };
                            B && l && typeof F == "function" && F.length != 1 && (L = B = !1);
                            var K = this.__chain__,
                                J = !!this.__actions__.length,
                                oe = E && !K,
                                me = L && !J;
                            if (!E && B) {
                                M = me ? M : new ye(this);
                                var se = a.apply(M, k);
                                return se.__actions__.push({
                                    func: Ho,
                                    args: [U],
                                    thisArg: e
                                }), new Sn(se, K)
                            }
                            return oe && me ? a.apply(this, k) : (se = this.thru(U), oe ? d ? se.value()[0] : se.value() : se)
                        })
                    }), Cn(["pop", "push", "shift", "sort", "splice", "unshift"], function(a) {
                        var o = co[a],
                            l = /^(?:push|sort|unshift)$/.test(a) ? "tap" : "thru",
                            d = /^(?:pop|shift)$/.test(a);
                        y.prototype[a] = function() {
                            var m = arguments;
                            if (d && !this.__chain__) {
                                var E = this.value();
                                return o.apply(fe(E) ? E : [], m)
                            }
                            return this[l](function(M) {
                                return o.apply(fe(M) ? M : [], m)
                            })
                        }
                    }), mr(ye.prototype, function(a, o) {
                        var l = y[o];
                        if (l) {
                            var d = l.name + "";
                            Te.call(o5, d) || (o5[d] = []), o5[d].push({
                                name: o,
                                func: l
                            })
                        }
                    }), o5[ko(e, I).name] = [{
                        name: "wrapper",
                        func: e
                    }], ye.prototype.clone = h_, ye.prototype.reverse = p_, ye.prototype.value = m_, y.prototype.at = GE, y.prototype.chain = zE, y.prototype.commit = $E, y.prototype.next = qE, y.prototype.plant = KE, y.prototype.reverse = QE, y.prototype.toJSON = y.prototype.valueOf = y.prototype.value = XE, y.prototype.first = y.prototype.head, Ca && (y.prototype[Ca] = WE), y
                },
                g1 = $y();
            typeof define == "function" && typeof define.amd == "object" && define.amd ? (ht._ = g1, define(function() {
                return g1
            })) : u0 ? ((u0.exports = g1)._ = g1, N7._ = g1) : ht._ = g1
        }).call(ca)
    });
    var $U = g(A(), 1);
    var jU = g(A(), 1);
    var BU = g(A(), 1);
    var gO = g(A(), 1);
    var $k = g(A(), 1);
    var ox = {
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
        Gk = {
            auto: "Auto",
            ...ox
        };
    var Bl = {
        ["chat_model"]: "gpt-3.5-turbo",
        ["text_model"]: "text-davinci-003"
    };
    var _h = `You are a large language model trained by OpenAI that generate human-like text based on the input you received.
Here is a conversation between human A and you:

`,
        wh = `You are a large language model trained by OpenAI. Your job is to generate human-like text based on the input you received, allowing it to engage in natural-sounding conversations and provide responses that are coherent and relevant to the topic at hand.

If the input is a question, try your best to answer it. Otherwise, provide as much information as you can.
You should use "code blocks" syntax from markdown including programing language name to encapsulate any part in responses that's longer-format content such as poem, code, lyrics.
Provide programming language name in code blocks if possible.
You should also use bold syntax from markdown on the relevant parts of the responses to improve readability.
If your answer contains code, make sure to provide detailed explanations.
You can understand and communicate fluently in the user's language of choice such as English,\u4E2D\u6587,\u65E5\u672C\u543E,Espanol,Francais or Deutsch.

Here is a conversation between human A and you:

`,
        Eh = `You are a large language model trained by OpenAI. Answer as concisely as possible.
Knowledge cutoff: {knowledge_cutoff} Current date: {current_date}`,
        Ah = `You are a large language model trained by OpenAI. Your job is to generate human-like text based on the input you received, allowing it to engage in natural-sounding conversations and provide responses that are coherent and relevant to the topic at hand.

If the input is a question, try your best to answer it. Otherwise, provide as much information as you can.
You should use "code blocks" syntax from markdown including programing language name to encapsulate any part in responses that's longer-format content such as poem, code, lyrics.
Provide programming language name in code blocks if possible.
You should also use bold syntax from markdown on the relevant parts of the responses to improve readability.
If your answer contains code, make sure to provide detailed explanations.

Knowledge cutoff: {knowledge_cutoff} Current date: {current_date}`;
    var bh = "https://api.openai.com";
    var C1 = g(Ch(), 1),
        Zh = g(xh(), 1);
    var sO = g(A());
    var Qk = g(A()),
        qo, sx = new Uint8Array(16);

    function $l() {
        if (!qo && (qo = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !qo)) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        return qo(sx)
    }
    var Yk = g(A());
    var Et = [];
    for (let e = 0; e < 256; ++e) Et.push((e + 256).toString(16).slice(1));

    function Sh(e, t = 0) {
        return (Et[e[t + 0]] + Et[e[t + 1]] + Et[e[t + 2]] + Et[e[t + 3]] + "-" + Et[e[t + 4]] + Et[e[t + 5]] + "-" + Et[e[t + 6]] + Et[e[t + 7]] + "-" + Et[e[t + 8]] + Et[e[t + 9]] + "-" + Et[e[t + 10]] + Et[e[t + 11]] + Et[e[t + 12]] + Et[e[t + 13]] + Et[e[t + 14]] + Et[e[t + 15]]).toLowerCase()
    }
    var iO = g(A());
    var eO = g(A()),
        lx = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto),
        ql = {
            randomUUID: lx
        };

    function cx(e, t, n) {
        if (ql.randomUUID && !t && !e) return ql.randomUUID();
        e = e || {};
        let r = e.random || (e.rng || $l)();
        if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, t) {
            n = n || 0;
            for (let i = 0; i < 16; ++i) t[n + i] = r[i];
            return t
        }
        return Sh(r)
    }
    var Wl = cx;
    var Ha = g(zr(), 1);
    var fO = g(A(), 1),
        Ql = class {
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
        nt = new Ql;
    C1.default.extend(Zh.default);
    var Xl = class {
            getExtensionVersion() {
                return Ha.default.runtime.getManifest().version
            }
            async tryGetTab(t) {
                try {
                    return await Ha.default.tabs.get(parseInt(t))
                } catch {
                    return null
                }
            }
            getOsType() {
                let t = navigator.userAgent,
                    n = navigator.userAgentData?.platform || navigator.platform,
                    r = ["Macintosh", "MacIntel", "MacPPC", "Mac68K", "macOS"],
                    i = ["Win32", "Win64", "Windows", "WinCE"],
                    s = ["iPhone", "iPad", "iPod"];
                return r.indexOf(n) !== -1 ? "OSX" : s.indexOf(n) !== -1 ? "IOS" : i.indexOf(n) !== -1 ? "Windows" : /Android/.test(t) ? "Android" : /Linux/.test(n) ? "Linux" : (console.error("unable to detect os type, use Windows as default", n, t), "Windows")
            }
            detectSystemColorScheme() {
                return window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light"
            }
            isPromise(t) {
                return !!t && (typeof t == "object" || typeof t == "function") && typeof t.then == "function"
            }
            getWebOrigin() {
                return nt.host
            }
            getModKeyName(t = !1) {
                return this.getOsType() === "OSX" ? "\u2318" : t ? "Ctrl + " : "Ctrl"
            }
            getStaticFile(t) {
                return Ha.default.runtime.getURL(`static/${t}`)
            }
            genId() {
                return Wl()
            }
            onDOMReady(t) {
                document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", t) : t()
            }
            getRootId(t) {
                return `${nt.extensionPrefix}-${t}`
            }
            camelizeKey(t, n = ["-", "_"]) {
                let r = [],
                    i = 0,
                    s = new Set(n);
                for (; i < t.length;) s.has(t[i]) ? (r.push(t[i + 1].toUpperCase()), i++) : r.push(t[i]), i++;
                return r.join("")
            }
            camelize(t) {
                if (t == null) return null;
                if (t instanceof Array) return t.map(n => this.camelize(n));
                if (typeof t == "object") {
                    let n = {};
                    for (let r in t) {
                        let i = t[r];
                        n[this.camelizeKey(r)] = this.camelize(i)
                    }
                    return n
                }
                return t
            }
            underlizeKey(t, n = !1) {
                let r = [],
                    i = 0,
                    s = t.toString().toLowerCase();
                for (; i < t.length;) {
                    if (t[i] !== s[i] && (!n || i !== 0)) {
                        r.push("_"), r.push(s[i]), i++;
                        continue
                    }
                    r.push(t[i].toLocaleLowerCase()), i++
                }
                return r.join("")
            }
            underlize(t) {
                if (t == null) return null;
                if (t instanceof Array) return t.map(n => this.underlize(n));
                if (typeof t == "object") {
                    let n = {};
                    for (let r in t) {
                        let i = t[r],
                            s = this.underlizeKey(r),
                            c = this.underlize(i);
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
                    for (;;) {
                        let {
                            done: r,
                            value: i
                        } = await n.read();
                        if (r) return;
                        yield i
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
                let r = document.body;
                r.appendChild(n), n.value = t, n.select(), document.execCommand("copy"), r.removeChild(n)
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
                    return Ha.default.tabs.query({}), t
                } catch {
                    return ""
                }
            }
            fromNow(t) {
                let n = "MMM D, YYYY";
                return (0, C1.default)().diff((0, C1.default)(t), "day") > 7 ? (0, C1.default)((0, C1.default)(t)).format(n) : (0, C1.default)((0, C1.default)(t)).fromNow()
            }
            formatMonicaSdkError(t) {
                let n = t.message || t.data.message || "server error",
                    r = /请求失败\((\d+)\)/;
                return n.replace(r, "server error($1)")
            }
            addPromptLangSuffix(t, n) {
                return n === "auto" ? t : `${t}(in ${n})`
            }
            getProductName() {
                return nt.currentProject === "monica" ? "Monica" : "ChatGPT for Google"
            }
            getDefaultShortcutKey() {
                return nt.currentProject === "monica" ? "m" : "b"
            }
            getChromeStoreUrl() {
                return nt.currentProject === "monica" ? "https://chrome.google.com/webstore/detail/monica-%E2%80%94-your-chatgpt-cop/ofpnmcalabcbjgholdjcjblkibolbppb" : "https://chrome.google.com/webstore/detail/chatgpt-for-google/jgjaeacdkonaoafenlfkkkmbaopkbilf"
            }
            getLogo(t = !0) {
                return nt.currentProject === "monica" ? this.getStaticFile("monicaLogo.png") : t ? this.getStaticFile("logo.png") : this.getStaticFile("c4g/c4gTransparentLogo.png")
            }
            getFeedbackEmail() {
                return nt.currentProject === "monica" ? "mailto:contact@monica.im?subject=Monica feedback" : "mailto:chatgpt4search@gmail.com?subject=ChatGPT for Google feedback"
            }
            checkIfMonicaLoadedSync() {
                let t = document.body.getAttribute("monica-id"),
                    n = document.body.getAttribute("monica-version");
                return !!(t && n)
            }
            async checkIfMonicaLoaded() {
                return await ie.delay(100), this.checkIfMonicaLoadedSync()
            }
        },
        ie = new Xl;
    var MN = g(A());
    var _O = g(A(), 1);

    function Ie() {
        return Ie = Object.assign ? Object.assign.bind() : function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }, Ie.apply(this, arguments)
    }
    var NO = g(A(), 1);
    var EO = g(A(), 1);

    function Yl(e) {
        if (Array.isArray(e)) return e
    }
    var bO = g(A(), 1);

    function Jl(e, t) {
        var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
        if (n != null) {
            var r, i, s, c, u = [],
                f = !0,
                p = !1;
            try {
                if (s = (n = n.call(e)).next, t === 0) {
                    if (Object(n) !== n) return;
                    f = !1
                } else
                    for (; !(f = (r = s.call(n)).done) && (u.push(r.value), u.length !== t); f = !0);
            } catch (h) {
                p = !0, i = h
            } finally {
                try {
                    if (!f && n.return != null && (c = n.return(), Object(c) !== c)) return
                } finally {
                    if (p) throw i
                }
            }
            return u
        }
    }
    var ZO = g(A(), 1);
    var xO = g(A(), 1);

    function Wo(e, t) {
        (t == null || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function ec(e, t) {
        if (e) {
            if (typeof e == "string") return Wo(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
            if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Wo(e, t)
        }
    }
    var IO = g(A(), 1);

    function tc() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
    }

    function Ge(e, t) {
        return Yl(e) || Jl(e, t) || ec(e, t) || tc()
    }
    var BO = g(A(), 1);
    var HO = g(A(), 1);

    function nc(e, t) {
        if (e == null) return {};
        var n = {},
            r = Object.keys(e),
            i, s;
        for (s = 0; s < r.length; s++) i = r[s], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
        return n
    }

    function kn(e, t) {
        if (e == null) return {};
        var n = nc(e, t),
            r, i;
        if (Object.getOwnPropertySymbols) {
            var s = Object.getOwnPropertySymbols(e);
            for (i = 0; i < s.length; i++) r = s[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r])
        }
        return n
    }
    var qO = g(A()),
        lc = g(Ee()),
        _0 = {},
        Bh = {};

    function Sx(e) {
        for (var t = 5381, n = e.length; n;) t = t * 33 ^ e.charCodeAt(--n);
        return t >>> 0
    }
    var Mx = Sx,
        Uh = {};
    (function(e) {
        e.__esModule = !0, e.default = void 0;

        function t(u, f) {
            for (var p = 0; p < f.length; p++) {
                var h = f[p];
                h.enumerable = h.enumerable || !1, h.configurable = !0, "value" in h && (h.writable = !0), Object.defineProperty(u, h.key, h)
            }
        }

        function n(u, f, p) {
            return f && t(u.prototype, f), p && t(u, p), u
        }
        var r = typeof process < "u" && process.env && !0,
            i = function(f) {
                return Object.prototype.toString.call(f) === "[object String]"
            },
            s = function() {
                function u(p) {
                    var h = p === void 0 ? {} : p,
                        w = h.name,
                        v = w === void 0 ? "stylesheet" : w,
                        _ = h.optimizeForSpeed,
                        S = _ === void 0 ? r : _,
                        I = h.isBrowser,
                        R = I === void 0 ? typeof window < "u" : I;
                    c(i(v), "`name` must be a string"), this._name = v, this._deletedRulePlaceholder = "#" + v + "-deleted-rule____{}", c(typeof S == "boolean", "`optimizeForSpeed` must be a boolean"), this._optimizeForSpeed = S, this._isBrowser = R, this._serverSheet = void 0, this._tags = [], this._injected = !1, this._rulesCount = 0;
                    var b = this._isBrowser && document.querySelector('meta[property="csp-nonce"]');
                    this._nonce = b ? b.getAttribute("content") : null
                }
                var f = u.prototype;
                return f.setOptimizeForSpeed = function(h) {
                    c(typeof h == "boolean", "`setOptimizeForSpeed` accepts a boolean"), c(this._rulesCount === 0, "optimizeForSpeed cannot be when rules have already been inserted"), this.flush(), this._optimizeForSpeed = h, this.inject()
                }, f.isOptimizeForSpeed = function() {
                    return this._optimizeForSpeed
                }, f.inject = function() {
                    var h = this;
                    if (c(!this._injected, "sheet already injected"), this._injected = !0, this._isBrowser && this._optimizeForSpeed) {
                        this._tags[0] = this.makeStyleTag(this._name), this._optimizeForSpeed = "insertRule" in this.getSheet(), this._optimizeForSpeed || (r || console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."), this.flush(), this._injected = !0);
                        return
                    }
                    this._serverSheet = {
                        cssRules: [],
                        insertRule: function(v, _) {
                            return typeof _ == "number" ? h._serverSheet.cssRules[_] = {
                                cssText: v
                            } : h._serverSheet.cssRules.push({
                                cssText: v
                            }), _
                        },
                        deleteRule: function(v) {
                            h._serverSheet.cssRules[v] = null
                        }
                    }
                }, f.getSheetForTag = function(h) {
                    if (h.sheet) return h.sheet;
                    for (var w = 0; w < document.styleSheets.length; w++)
                        if (document.styleSheets[w].ownerNode === h) return document.styleSheets[w]
                }, f.getSheet = function() {
                    return this.getSheetForTag(this._tags[this._tags.length - 1])
                }, f.insertRule = function(h, w) {
                    if (c(i(h), "`insertRule` accepts only strings"), !this._isBrowser) return typeof w != "number" && (w = this._serverSheet.cssRules.length), this._serverSheet.insertRule(h, w), this._rulesCount++;
                    if (this._optimizeForSpeed) {
                        var v = this.getSheet();
                        typeof w != "number" && (w = v.cssRules.length);
                        try {
                            v.insertRule(h, w)
                        } catch {
                            return r || console.warn(`StyleSheet: illegal rule: 

` + h + `

See https://stackoverflow.com/q/20007992 for more info`), -1
                        }
                    } else {
                        var _ = this._tags[w];
                        this._tags.push(this.makeStyleTag(this._name, h, _))
                    }
                    return this._rulesCount++
                }, f.replaceRule = function(h, w) {
                    if (this._optimizeForSpeed || !this._isBrowser) {
                        var v = this._isBrowser ? this.getSheet() : this._serverSheet;
                        if (w.trim() || (w = this._deletedRulePlaceholder), !v.cssRules[h]) return h;
                        v.deleteRule(h);
                        try {
                            v.insertRule(w, h)
                        } catch {
                            r || console.warn(`StyleSheet: illegal rule: 

` + w + `

See https://stackoverflow.com/q/20007992 for more info`), v.insertRule(this._deletedRulePlaceholder, h)
                        }
                    } else {
                        var _ = this._tags[h];
                        c(_, "old rule at index `" + h + "` not found"), _.textContent = w
                    }
                    return h
                }, f.deleteRule = function(h) {
                    if (!this._isBrowser) {
                        this._serverSheet.deleteRule(h);
                        return
                    }
                    if (this._optimizeForSpeed) this.replaceRule(h, "");
                    else {
                        var w = this._tags[h];
                        c(w, "rule at index `" + h + "` not found"), w.parentNode.removeChild(w), this._tags[h] = null
                    }
                }, f.flush = function() {
                    this._injected = !1, this._rulesCount = 0, this._isBrowser ? (this._tags.forEach(function(h) {
                        return h && h.parentNode.removeChild(h)
                    }), this._tags = []) : this._serverSheet.cssRules = []
                }, f.cssRules = function() {
                    var h = this;
                    return this._isBrowser ? this._tags.reduce(function(w, v) {
                        return v ? w = w.concat(Array.prototype.map.call(h.getSheetForTag(v).cssRules, function(_) {
                            return _.cssText === h._deletedRulePlaceholder ? null : _
                        })) : w.push(null), w
                    }, []) : this._serverSheet.cssRules
                }, f.makeStyleTag = function(h, w, v) {
                    w && c(i(w), "makeStyleTag acceps only strings as second parameter");
                    var _ = document.createElement("style"),
                        S = document.createElement("style");
                    this._nonce && _.setAttribute("nonce", this._nonce), _.type = "text/css", _.setAttribute("data-" + h, ""), S.type = "text/css", S.setAttribute("data-" + h, ""), w && (_.appendChild(document.createTextNode(w)), S.appendChild(document.createTextNode(w)));
                    var I = window["chat-gpt-google-extension-style-head"],
                        R = window["monica-extension-style-head"],
                        b = document.head || document.getElementsByTagName("head")[0];
                    return v ? (I && I.insertBefore(_, v), R && R.insertBefore(S, v), !R && !I && b.insertBefore(_, v)) : (I && I.appendChild(_), R && R.appendChild(S), !R && !I && b.appendChild(_)), R ? S : _
                }, n(u, [{
                    key: "length",
                    get: function() {
                        return this._rulesCount
                    }
                }]), u
            }();
        e.default = s;

        function c(u, f) {
            if (!u) throw new Error("StyleSheet: " + f + ".")
        }
    })(Uh);
    (function(e) {
        e.__esModule = !0, e.default = void 0;
        var t = r(Mx),
            n = r(Uh);

        function r(u) {
            return u && u.__esModule ? u : {
                default: u
            }
        }
        var i = function(f) {
                return f.replace(/\/style/gi, "\\/style")
            },
            s = function() {
                function u(p) {
                    var h = p === void 0 ? {} : p,
                        w = h.styleSheet,
                        v = w === void 0 ? null : w,
                        _ = h.optimizeForSpeed,
                        S = _ === void 0 ? !1 : _,
                        I = h.isBrowser,
                        R = I === void 0 ? typeof window < "u" : I;
                    this._sheet = v || new n.default({
                        name: "styled-jsx",
                        optimizeForSpeed: S
                    }), this._sheet.inject(), v && typeof S == "boolean" && (this._sheet.setOptimizeForSpeed(S), this._optimizeForSpeed = this._sheet.isOptimizeForSpeed()), this._isBrowser = R, this._fromServer = void 0, this._indices = {}, this._instancesCounts = {}, this.computeId = this.createComputeId(), this.computeSelector = this.createComputeSelector()
                }
                var f = u.prototype;
                return f.add = function(h) {
                    var w = this;
                    this._optimizeForSpeed === void 0 && (this._optimizeForSpeed = Array.isArray(h.children), this._sheet.setOptimizeForSpeed(this._optimizeForSpeed), this._optimizeForSpeed = this._sheet.isOptimizeForSpeed()), this._isBrowser && !this._fromServer && (this._fromServer = this.selectFromServer(), this._instancesCounts = Object.keys(this._fromServer).reduce(function(R, b) {
                        return R[b] = 0, R
                    }, {}));
                    var v = this.getIdAndRules(h),
                        _ = v.styleId,
                        S = v.rules;
                    if (_ in this._instancesCounts) {
                        this._instancesCounts[_] += 1;
                        return
                    }
                    var I = S.map(function(R) {
                        return w._sheet.insertRule(R)
                    }).filter(function(R) {
                        return R !== -1
                    });
                    this._indices[_] = I, this._instancesCounts[_] = 1
                }, f.remove = function(h) {
                    var w = this,
                        v = this.getIdAndRules(h),
                        _ = v.styleId;
                    if (c(_ in this._instancesCounts, "styleId: `" + _ + "` not found"), this._instancesCounts[_] -= 1, this._instancesCounts[_] < 1) {
                        var S = this._fromServer && this._fromServer[_];
                        S ? (S.parentNode.removeChild(S), delete this._fromServer[_]) : (this._indices[_].forEach(function(I) {
                            return w._sheet.deleteRule(I)
                        }), delete this._indices[_]), delete this._instancesCounts[_]
                    }
                }, f.update = function(h, w) {
                    this.add(w), this.remove(h)
                }, f.flush = function() {
                    this._sheet.flush(), this._sheet.inject(), this._fromServer = void 0, this._indices = {}, this._instancesCounts = {}, this.computeId = this.createComputeId(), this.computeSelector = this.createComputeSelector()
                }, f.cssRules = function() {
                    var h = this,
                        w = this._fromServer ? Object.keys(this._fromServer).map(function(_) {
                            return [_, h._fromServer[_]]
                        }) : [],
                        v = this._sheet.cssRules();
                    return w.concat(Object.keys(this._indices).map(function(_) {
                        return [_, h._indices[_].map(function(S) {
                            return v[S].cssText
                        }).join(h._optimizeForSpeed ? "" : `
`)]
                    }).filter(function(_) {
                        return Boolean(_[1])
                    }))
                }, f.createComputeId = function() {
                    var h = {};
                    return function(w, v) {
                        if (!v) return "jsx-" + w;
                        var _ = String(v),
                            S = w + _;
                        return h[S] || (h[S] = "jsx-" + (0, t.default)(w + "-" + _)), h[S]
                    }
                }, f.createComputeSelector = function(h) {
                    h === void 0 && (h = /__jsx-style-dynamic-selector/g);
                    var w = {};
                    return function(v, _) {
                        this._isBrowser || (_ = i(_));
                        var S = v + _;
                        return w[S] || (w[S] = _.replace(h, v)), w[S]
                    }
                }, f.getIdAndRules = function(h) {
                    var w = this,
                        v = h.children,
                        _ = h.dynamic,
                        S = h.id;
                    if (_) {
                        var I = this.computeId(S, _);
                        return {
                            styleId: I,
                            rules: Array.isArray(v) ? v.map(function(R) {
                                return w.computeSelector(I, R)
                            }) : [this.computeSelector(I, v)]
                        }
                    }
                    return {
                        styleId: this.computeId(S),
                        rules: Array.isArray(v) ? v : [v]
                    }
                }, f.selectFromServer = function() {
                    var h = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
                    return h.reduce(function(w, v) {
                        var _ = v.id.slice(2);
                        return w[_] = v, w
                    }, {})
                }, u
            }();
        e.default = s;

        function c(u, f) {
            if (!u) throw new Error("StyleSheetRegistry: " + f + ".")
        }
    })(Bh);
    (function(e) {
        e.__esModule = !0, e.default = s, e.flush = c;
        var t = lc.default,
            n = r(Bh);

        function r(u) {
            return u && u.__esModule ? u : {
                default: u
            }
        }
        var i = new n.default;

        function s(u) {
            return typeof window > "u" ? (i.add(u), null) : ((0, t.useLayoutEffect)(function() {
                return i.add(u),
                    function() {
                        i.remove(u)
                    }
            }, [u.id, String(u.dynamic)]), null)
        }
        s.dynamic = function(u) {
            return u.map(function(f) {
                var p = f[0],
                    h = f[1];
                return i.computeId(p, h)
            }).join(" ")
        };

        function c() {
            var u = i.cssRules();
            return i.flush(), u
        }
    })(_0);
    var jh = _0.default || _0;
    jh.flush = _0.flush;
    var Yo = {};
    (function(e) {
        e.__esModule = !0, e.default = i, e.flushToHTML = s;
        var t = r(lc.default),
            n = _0.default || _0;
        n.flush = _0.flush;

        function r(c) {
            return c && c.__esModule ? c : {
                default: c
            }
        }

        function i(c) {
            return c === void 0 && (c = {}), (0, n.flush)().map(function(u) {
                var f = u[0],
                    p = u[1];
                return t.default.createElement("style", {
                    id: "__" + f,
                    key: "__" + f,
                    nonce: c.nonce ? c.nonce : void 0,
                    dangerouslySetInnerHTML: {
                        __html: p
                    }
                })
            })
        }

        function s(c) {
            return c === void 0 && (c = {}), (0, n.flush)().reduce(function(u, f) {
                var p = f[0],
                    h = f[1];
                return u += '<style id="__' + p + '"' + (c.nonce ? ' nonce="' + c.nonce + '"' : "") + ">" + h + "</style>", u
            }, "")
        }
    })(Yo);
    var Zx = Yo.default || Yo;
    Zx.flushToHTML = Yo.flushToHTML;
    var Le = jh;
    var yL = g(A());
    var mL = g(A()),
        fc = g(Ee());
    var dL = g(A());
    var cL = g(A());
    var KO = g(A(), 1);

    function w0(e) {
        return w0 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
            return typeof t
        } : function(t) {
            return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, w0(e)
    }
    var eL = g(A());
    var XO = g(A()),
        Jo = {
            sans: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
            mono: "Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace",
            prism: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,"Liberation Mono", "Courier New", monospace'
        },
        m5 = {
            xs: {
                min: "0",
                max: "650px"
            },
            sm: {
                min: "650px",
                max: "900px"
            },
            md: {
                min: "900px",
                max: "1280px"
            },
            lg: {
                min: "1280px",
                max: "1920px"
            },
            xl: {
                min: "1920px",
                max: "10000px"
            }
        },
        e2 = {
            gap: "16pt",
            gapNegative: "-16pt",
            gapHalf: "8pt",
            gapHalfNegative: "-8pt",
            gapQuarter: "4pt",
            gapQuarterNegative: "-4pt",
            pageMargin: "16pt",
            pageWidth: "750pt",
            pageWidthWithMargin: "782pt",
            breakpointMobile: m5.xs.max,
            breakpointTablet: m5.sm.max,
            radius: "6px",
            unit: "16px"
        };
    var Tx = {
            accents_1: "#fafafa",
            accents_2: "#eaeaea",
            accents_3: "#999",
            accents_4: "#888",
            accents_5: "#666",
            accents_6: "#444",
            accents_7: "#333",
            accents_8: "#111",
            background: "#fff",
            foreground: "#000",
            selection: "#79ffe1",
            secondary: "#666",
            code: "#f81ce5",
            border: "#eaeaea",
            error: "#e00",
            errorLight: "#ff1a1a",
            errorLighter: "#f7d4d6",
            errorDark: "#c50000",
            success: "#0070f3",
            successLight: "#3291ff",
            successLighter: "#d3e5ff",
            successDark: "#0761d1",
            warning: "#f5a623",
            warningLight: "#f7b955",
            warningLighter: "#ffefcf",
            warningDark: "#ab570a",
            cyan: "#50e3c2",
            cyanLighter: "#aaffec",
            cyanLight: "#79ffe1",
            cyanDark: "#29bc9b",
            violet: "#7928ca",
            violetLighter: "#e3d7fc",
            violetLight: "#8a63d2",
            violetDark: "#4c2889",
            purple: "#f81ce5",
            alert: "#ff0080",
            magenta: "#eb367f",
            link: "#0070f3"
        },
        Ix = {
            linkStyle: "none",
            linkHoverStyle: "none",
            dropdownBoxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.02)",
            scrollerStart: "rgba(255, 255, 255, 1)",
            scrollerEnd: "rgba(255, 255, 255, 0)",
            shadowSmall: "0 5px 10px rgba(0, 0, 0, 0.12)",
            shadowMedium: "0 8px 30px rgba(0, 0, 0, 0.12)",
            shadowLarge: "0 30px 60px rgba(0, 0, 0, 0.12)",
            portalOpacity: .25
        },
        kx = Jo,
        Ox = m5,
        Lx = e2,
        Rx = {
            type: "light",
            font: kx,
            layout: Lx,
            palette: Tx,
            breakpoints: Ox,
            expressiveness: Ix
        },
        t2 = Rx;
    var rL = g(A());
    var Px = {
            accents_1: "#111",
            accents_2: "#333",
            accents_3: "#444",
            accents_4: "#666",
            accents_5: "#888",
            accents_6: "#999",
            accents_7: "#eaeaea",
            accents_8: "#fafafa",
            background: "#000",
            foreground: "#fff",
            selection: "#f81ce5",
            secondary: "#888",
            code: "#79ffe1",
            border: "#333",
            error: "#e00",
            errorLighter: "#f7d4d6",
            errorLight: "#ff1a1a",
            errorDark: "#c50000",
            success: "#0070f3",
            successLighter: "#d3e5ff",
            successLight: "#3291ff",
            successDark: "#0761d1",
            warning: "#f5a623",
            warningLighter: "#ffefcf",
            warningLight: "#f7b955",
            warningDark: "#ab570a",
            cyan: "#50e3c2",
            cyanLighter: "#aaffec",
            cyanLight: "#79ffe1",
            cyanDark: "#29bc9b",
            violet: "#7928ca",
            violetLighter: "#e3d7fc",
            violetLight: "#8a63d2",
            violetDark: "#4c2889",
            purple: "#f81ce5",
            alert: "#ff0080",
            magenta: "#eb367f",
            link: "#3291ff"
        },
        Nx = {
            linkStyle: "none",
            linkHoverStyle: "none",
            dropdownBoxShadow: "0 0 0 1px #333",
            scrollerStart: "rgba(255, 255, 255, 1)",
            scrollerEnd: "rgba(255, 255, 255, 0)",
            shadowSmall: "0 0 0 1px #333",
            shadowMedium: "0 0 0 1px #333",
            shadowLarge: "0 0 0 1px #333",
            portalOpacity: .75
        },
        Vx = Jo,
        Hx = m5,
        Dx = e2,
        Fx = {
            type: "dark",
            font: Vx,
            layout: Dx,
            palette: Px,
            breakpoints: Hx,
            expressiveness: Nx
        },
        cc = Fx;
    var n2 = function(t) {
            return t && w0(t) === "object"
        },
        Bx = function e(t, n) {
            if (!n2(n) || !n2(t)) return t;
            for (var r = Object.keys(t), i = {}, s = 0, c = r; s < c.length; s++) {
                var u = c[s],
                    f = t[u],
                    p = n[u];
                Array.isArray(f) && Array.isArray(p) ? i[u] = p.concat(f) : n2(f) && n2(p) ? i[u] = e(f, Ie({}, p)) : p ? i[u] = p : i[u] = f
            }
            return i
        },
        Gh = function() {
            return [t2, cc]
        },
        Ux = function() {
            return t2
        },
        r2 = function(t) {
            if (!t) return !1;
            var n = Gh(),
                r = n.find(function(i) {
                    return i.type === t
                });
            return !r
        },
        jx = function(t) {
            if (!t) return !1;
            var n = typeof t == "string",
                r = n ? t : t.type;
            return !r2(r)
        },
        Gx = function() {
            var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
            return !!t.find(function(n) {
                return r2(n.type)
            })
        },
        uc = function(t, n) {
            if (!r2(n.type)) throw new Error("Duplicate or unavailable theme type");
            return Bx(t, n)
        },
        zx = function(t) {
            return uc(cc, t)
        },
        $x = function(t) {
            return uc(t2, t)
        },
        qx = {
            isPresetTheme: jx,
            isAvailableThemeType: r2,
            hasUserCustomTheme: Gx,
            getPresets: Gh,
            getPresetStaticTheme: Ux,
            create: uc,
            createFromDark: zx,
            createFromLight: $x
        },
        a2 = qx;
    var E0 = a2;
    var Wx = E0.getPresetStaticTheme(),
        dc = fc.default.createContext(Wx),
        zh = function() {
            return fc.default.useContext(dc)
        };
    var yr = zh;
    var CL = g(A());
    var EL = g(A());
    var Kx = function(t) {
            for (var n = Object.keys(t), r = n.length, i = "", s = 0; s < r; s++) {
                var c = n[s],
                    u = t[n[s]];
                u && (i = i ? "".concat(i, " ").concat(String(c)) : String(c))
            }
            return i
        },
        Qx = function(t) {
            return w0(t) === "object" && !Array.isArray(t)
        },
        Xx = function() {
            var t = arguments.length,
                n = "";
            if (t === 0) return n;
            for (var r = 0; r < t; r++) {
                var i = r < 0 || arguments.length <= r ? void 0 : arguments[r];
                i && (Qx(i) ? n += " ".concat(Kx(i)) : n += " ".concat(String(i).trim()))
            }
            return n.trim()
        },
        $h = Xx;
    var _r = $h;
    var jL = g(A());
    var DL = g(A());
    var Fa = g(Ee());
    var SL = g(A()),
        hc = g(Ee()),
        qh = ["width", "height", "padding", "margin", "w", "h", "paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "pl", "pr", "pt", "pb", "marginLeft", "marginRight", "marginTop", "marginBottom", "ml", "mr", "mt", "mb", "px", "py", "mx", "my", "font", "unit", "scale"],
        Gt = function(t) {
            return "".concat(t)
        },
        Yx = {
            getScaleProps: function() {},
            getAllScaleProps: function() {
                return {}
            },
            SCALES: {
                pl: Gt,
                pr: Gt,
                pb: Gt,
                pt: Gt,
                px: Gt,
                py: Gt,
                mb: Gt,
                ml: Gt,
                mr: Gt,
                mt: Gt,
                mx: Gt,
                my: Gt,
                width: Gt,
                height: Gt,
                font: Gt
            },
            unit: "16px"
        },
        pc = hc.default.createContext(Yx),
        Wh = function() {
            return hc.default.useContext(pc)
        };
    var ZL = g(A()),
        Jx = g(Ee()),
        Kh = function() {
            return Math.random().toString(32).slice(2, 10)
        };
    var Qh = function() {
        return Boolean(typeof window < "u" && window.document && window.document.createElement)
    };
    var Xh = function(t) {
        return t !== void 0 && !Number.isNaN(+t)
    };
    var kL = g(A());

    function Jh(e, t) {
        var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
        if (!n) {
            if (Array.isArray(e) || (n = eS(e)) || t && e && typeof e.length == "number") {
                n && (e = n);
                var r = 0,
                    i = function() {};
                return {
                    s: i,
                    n: function() {
                        return r >= e.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: e[r++]
                        }
                    },
                    e: function(p) {
                        throw p
                    },
                    f: i
                }
            }
            throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
        }
        var s = !0,
            c = !1,
            u;
        return {
            s: function() {
                n = n.call(e)
            },
            n: function() {
                var p = n.next();
                return s = p.done, p
            },
            e: function(p) {
                c = !0, u = p
            },
            f: function() {
                try {
                    !s && n.return != null && n.return()
                } finally {
                    if (c) throw u
                }
            }
        }
    }

    function eS(e, t) {
        if (e) {
            if (typeof e == "string") return Yh(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
            if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Yh(e, t)
        }
    }

    function Yh(e, t) {
        (t == null || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
    }
    var ep = function(t) {
            var n = function(i) {
                if (!Array.isArray(i)) return t[i];
                var s = void 0,
                    c = Jh(i),
                    u;
                try {
                    for (c.s(); !(u = c.n()).done;) {
                        var f = u.value,
                            p = t[f];
                        typeof p < "u" && (s = p)
                    }
                } catch (h) {
                    c.e(h)
                } finally {
                    c.f()
                }
                return s
            };
            return n
        },
        tp = function(t) {
            var n = function() {
                var i = {},
                    s = Jh(qh),
                    c;
                try {
                    for (s.s(); !(c = s.n()).done;) {
                        var u = c.value,
                            f = t[u];
                        typeof f < "u" && (i[u] = f)
                    }
                } catch (p) {
                    s.e(p)
                } finally {
                    s.f()
                }
                return i
            };
            return n
        };
    var tS = ["children"],
        nS = ["paddingLeft", "pl", "paddingRight", "pr", "paddingTop", "pt", "paddingBottom", "pb", "marginTop", "mt", "marginRight", "mr", "marginBottom", "mb", "marginLeft", "ml", "px", "py", "mx", "my", "width", "height", "font", "w", "h", "margin", "padding", "unit", "scale"],
        rS = function(t) {
            if (t === 1) return t;
            var n = Math.abs((t - 1) / 2);
            return t > 1 ? 1 + n : 1 - n
        },
        aS = function(t) {
            var n = (0, Fa.forwardRef)(function(r, i) {
                var s, c, u, f, p, h, w, v, _, S, I, R, b, C, x, Z, T, P, N, H, le, te, z, G, j, ee, q, X, ne, he, de, Ce, Oe = r.children,
                    re = kn(r, tS),
                    Je = yr(),
                    ot = Je.layout,
                    st = re.paddingLeft,
                    gt = re.pl,
                    Re = re.paddingRight,
                    Vt = re.pr,
                    Ht = re.paddingTop,
                    xt = re.pt,
                    Gn = re.paddingBottom,
                    St = re.pb,
                    Kt = re.marginTop,
                    K0 = re.mt,
                    yt = re.marginRight,
                    ga = re.mr,
                    Q0 = re.marginBottom,
                    d1 = re.mb,
                    Mt = re.marginLeft,
                    h1 = re.ml,
                    fr = re.px,
                    o0 = re.py,
                    zn = re.mx,
                    s0 = re.my,
                    Pr = re.width,
                    dr = re.height,
                    ya = re.font,
                    _a = re.w,
                    wa = re.h,
                    hr = re.margin,
                    pr = re.padding,
                    X0 = re.unit,
                    l0 = X0 === void 0 ? ot.unit : X0,
                    Y0 = re.scale,
                    Ea = Y0 === void 0 ? 1 : Y0,
                    x7 = kn(re, nS),
                    _t = function(c0) {
                        return function(Aa, J0) {
                            Aa === 0 && (Aa = 1, J0 = J0 || 0);
                            var no = rS(Ea) * Aa;
                            if (typeof c0 > "u") return typeof J0 < "u" ? "".concat(J0) : "calc(".concat(no, " * ").concat(l0, ")");
                            if (!Xh(c0)) return "".concat(c0);
                            var Z7 = no * Number(c0);
                            return "calc(".concat(Z7, " * ").concat(l0, ")")
                        }
                    },
                    S7 = {
                        unit: l0,
                        SCALES: {
                            pt: _t((s = (c = Ht ?? xt) !== null && c !== void 0 ? c : o0) !== null && s !== void 0 ? s : pr),
                            pr: _t((u = (f = Re ?? Vt) !== null && f !== void 0 ? f : fr) !== null && u !== void 0 ? u : pr),
                            pb: _t((p = (h = Gn ?? St) !== null && h !== void 0 ? h : o0) !== null && p !== void 0 ? p : pr),
                            pl: _t((w = (v = st ?? gt) !== null && v !== void 0 ? v : fr) !== null && w !== void 0 ? w : pr),
                            px: _t((_ = (S = (I = (R = fr ?? st) !== null && R !== void 0 ? R : Re) !== null && I !== void 0 ? I : gt) !== null && S !== void 0 ? S : Vt) !== null && _ !== void 0 ? _ : pr),
                            py: _t((b = (C = (x = (Z = o0 ?? Ht) !== null && Z !== void 0 ? Z : Gn) !== null && x !== void 0 ? x : xt) !== null && C !== void 0 ? C : St) !== null && b !== void 0 ? b : pr),
                            mt: _t((T = (P = Kt ?? K0) !== null && P !== void 0 ? P : s0) !== null && T !== void 0 ? T : hr),
                            mr: _t((N = (H = yt ?? ga) !== null && H !== void 0 ? H : zn) !== null && N !== void 0 ? N : hr),
                            mb: _t((le = (te = Q0 ?? d1) !== null && te !== void 0 ? te : s0) !== null && le !== void 0 ? le : hr),
                            ml: _t((z = (G = Mt ?? h1) !== null && G !== void 0 ? G : zn) !== null && z !== void 0 ? z : hr),
                            mx: _t((j = (ee = (q = (X = zn ?? Mt) !== null && X !== void 0 ? X : yt) !== null && q !== void 0 ? q : h1) !== null && ee !== void 0 ? ee : ga) !== null && j !== void 0 ? j : hr),
                            my: _t((ne = (he = (de = (Ce = s0 ?? Kt) !== null && Ce !== void 0 ? Ce : Q0) !== null && de !== void 0 ? de : K0) !== null && he !== void 0 ? he : d1) !== null && ne !== void 0 ? ne : hr),
                            width: _t(Pr ?? _a),
                            height: _t(dr ?? wa),
                            font: _t(ya)
                        },
                        getScaleProps: ep(re),
                        getAllScaleProps: tp(re)
                    };
                return Fa.default.createElement(pc.Provider, {
                    value: S7
                }, Fa.default.createElement(t, Ie({}, x7, {
                    ref: i
                }), Oe))
            });
            return n.displayName = "Scale".concat(t.displayName || "Wrapper"), n
        },
        Ba = aS;
    var i2 = Wh;
    var tR = g(A()),
        wr = function() {
            for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
            return n
        };
    var $L = wr("default", "secondary", "success", "warning", "error", "abort", "secondary-light", "success-light", "warning-light", "error-light"),
        qL = wr("default", "secondary", "success", "warning", "error"),
        WL = wr("default", "secondary", "success", "warning", "error", "dark", "lite"),
        KL = wr("default", "secondary", "success", "warning", "error", "dark", "lite", "alert", "purple", "violet", "cyan"),
        QL = wr("default", "silent", "prevent"),
        XL = wr("hover", "click"),
        YL = wr("top", "topStart", "topEnd", "left", "leftStart", "leftEnd", "bottom", "bottomStart", "bottomEnd", "right", "rightStart", "rightEnd"),
        JL = wr("start", "center", "end", "left", "right");
    var yR = g(A());
    var Ms = g(Ee());
    var hR = g(A());
    var Ss = g(Ee());
    var oZ = function() {
            var t = (0, Ss.useState)(!1),
                n = Ge(t, 2),
                r = n[0],
                i = n[1];
            return (0, Ss.useEffect)(function() {
                i(Qh())
            }, []), {
                isBrowser: r,
                isServer: !r
            }
        },
        Am = oZ;
    var bm = function(t) {
            var n = document.createElement("div");
            return n.setAttribute("id", t), n
        },
        sZ = function() {
            var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Kh(),
                n = arguments.length > 1 ? arguments[1] : void 0,
                r = "geist-ui-".concat(t),
                i = Am(),
                s = i.isBrowser,
                c = (0, Ms.useState)(s ? bm(r) : null),
                u = Ge(c, 2),
                f = u[0],
                p = u[1];
            return (0, Ms.useEffect)(function() {
                var h = n ? n() : null,
                    w = h || document.body,
                    v = w.querySelector("#".concat(r)),
                    _ = v || bm(r);
                v || w.appendChild(_), p(_)
            }, []), f
        },
        Cm = sZ;
    var bR = g(A());
    var $1 = g(Ee()),
        lZ = ["children", "className", "visible", "enterTime", "leaveTime", "clearTime", "name"],
        cZ = {
            visible: !1,
            enterTime: 60,
            leaveTime: 60,
            clearTime: 60,
            className: "",
            name: "transition"
        },
        Z4 = function(t) {
            var n = t.children,
                r = t.className,
                i = t.visible,
                s = t.enterTime,
                c = t.leaveTime,
                u = t.clearTime,
                f = t.name,
                p = kn(t, lZ),
                h = (0, $1.useState)(""),
                w = Ge(h, 2),
                v = w[0],
                _ = w[1],
                S = (0, $1.useState)(i),
                I = Ge(S, 2),
                R = I[0],
                b = I[1];
            return (0, $1.useEffect)(function() {
                var C = i ? "enter" : "leave",
                    x = i ? s : c;
                i && !R && b(!0), _("".concat(f, "-").concat(C));
                var Z = setTimeout(function() {
                        _("".concat(f, "-").concat(C, " ").concat(f, "-").concat(C, "-active")), clearTimeout(Z)
                    }, x),
                    T = setTimeout(function() {
                        i || (_(""), b(!1)), clearTimeout(T)
                    }, x + u);
                return function() {
                    clearTimeout(Z), clearTimeout(T)
                }
            }, [i, R]), !$1.default.isValidElement(n) || !R ? null : $1.default.cloneElement(n, Ie({}, p, {
                className: "".concat(n.props.className, " ").concat(r, " ").concat(v)
            }))
        };
    Z4.defaultProps = cZ;
    Z4.displayName = "GeistCssTransition";
    var xm = Z4;
    var RR = g(A());
    var kR = g(A());
    var Mr = g(Ee());
    var uZ = ["children", "type", "color", "className", "spaceRatio"],
        fZ = {
            type: "default",
            className: "",
            spaceRatio: 1
        },
        dZ = function(t, n, r) {
            var i = {
                default: n.accents_6,
                secondary: n.secondary,
                success: n.success,
                warning: n.warning,
                error: n.error
            };
            return r || i[t]
        },
        T4 = function(t) {
            var n = t.children,
                r = t.type,
                i = t.color,
                s = t.className,
                c = t.spaceRatio,
                u = kn(t, uZ),
                f = yr(),
                p = i2(),
                h = p.SCALES,
                w = _r("loading-container", s),
                v = (0, Mr.useMemo)(function() {
                    return dZ(r, f.palette, i)
                }, [r, f.palette, i]);
            return Mr.default.createElement("div", Ie({}, u, {
                className: Le.dynamic([
                    ["2201634259", [h.font(1), h.width(1, "100%"), h.height(1, "100%"), h.pt(0), h.pr(0), h.pb(0), h.pl(0), h.mt(0), h.mr(0), h.mb(0), h.ml(0), f.palette.accents_5, v, c]]
                ]) + " " + (u && u.className != null && u.className || w || "")
            }), Mr.default.createElement("span", {
                className: Le.dynamic([
                    ["2201634259", [h.font(1), h.width(1, "100%"), h.height(1, "100%"), h.pt(0), h.pr(0), h.pb(0), h.pl(0), h.mt(0), h.mr(0), h.mb(0), h.ml(0), f.palette.accents_5, v, c]]
                ]) + " loading"
            }, n && Mr.default.createElement("label", {
                className: Le.dynamic([
                    ["2201634259", [h.font(1), h.width(1, "100%"), h.height(1, "100%"), h.pt(0), h.pr(0), h.pb(0), h.pl(0), h.mt(0), h.mr(0), h.mb(0), h.ml(0), f.palette.accents_5, v, c]]
                ])
            }, n), Mr.default.createElement("i", {
                className: Le.dynamic([
                    ["2201634259", [h.font(1), h.width(1, "100%"), h.height(1, "100%"), h.pt(0), h.pr(0), h.pb(0), h.pl(0), h.mt(0), h.mr(0), h.mb(0), h.ml(0), f.palette.accents_5, v, c]]
                ])
            }), Mr.default.createElement("i", {
                className: Le.dynamic([
                    ["2201634259", [h.font(1), h.width(1, "100%"), h.height(1, "100%"), h.pt(0), h.pr(0), h.pb(0), h.pl(0), h.mt(0), h.mr(0), h.mb(0), h.ml(0), f.palette.accents_5, v, c]]
                ])
            }), Mr.default.createElement("i", {
                className: Le.dynamic([
                    ["2201634259", [h.font(1), h.width(1, "100%"), h.height(1, "100%"), h.pt(0), h.pr(0), h.pb(0), h.pl(0), h.mt(0), h.mr(0), h.mb(0), h.ml(0), f.palette.accents_5, v, c]]
                ])
            })), Mr.default.createElement(Le, {
                id: "2201634259",
                dynamic: [h.font(1), h.width(1, "100%"), h.height(1, "100%"), h.pt(0), h.pr(0), h.pb(0), h.pl(0), h.mt(0), h.mr(0), h.mb(0), h.ml(0), f.palette.accents_5, v, c]
            }, ".loading-container.__jsx-style-dynamic-selector{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;font-size:".concat(h.font(1), ";width:").concat(h.width(1, "100%"), ";height:").concat(h.height(1, "100%"), ";min-height:1em;padding:").concat(h.pt(0), " ").concat(h.pr(0), " ").concat(h.pb(0), " ").concat(h.pl(0), ";margin:").concat(h.mt(0), " ").concat(h.mr(0), " ").concat(h.mb(0), " ").concat(h.ml(0), ";}label.__jsx-style-dynamic-selector{margin-right:0.5em;color:").concat(f.palette.accents_5, ";line-height:1;}label.__jsx-style-dynamic-selector *{margin:0;}.loading.__jsx-style-dynamic-selector{position:absolute;top:50%;left:50%;width:100%;height:100%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:transparent;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}i.__jsx-style-dynamic-selector{width:0.25em;height:0.25em;border-radius:50%;background-color:").concat(v, ";margin:0 calc(0.25em / 2 * ").concat(c, ");display:inline-block;-webkit-animation:loading-blink-__jsx-style-dynamic-selector 1.4s infinite both;animation:loading-blink-__jsx-style-dynamic-selector 1.4s infinite both;}i.__jsx-style-dynamic-selector:nth-child(2){-webkit-animation-delay:0.2s;animation-delay:0.2s;}i.__jsx-style-dynamic-selector:nth-child(3){-webkit-animation-delay:0.4s;animation-delay:0.4s;}@-webkit-keyframes loading-blink-__jsx-style-dynamic-selector{0%{opacity:0.2;}20%{opacity:1;}100%{opacity:0.2;}}@keyframes loading-blink-__jsx-style-dynamic-selector{0%{opacity:0.2;}20%{opacity:1;}100%{opacity:0.2;}}")))
        };
    T4.defaultProps = fZ;
    T4.displayName = "GeistLoading";
    var hZ = Ba(T4),
        Sm = hZ;
    var Mm = Sm;
    var jR = g(A());
    var FR = g(A());
    var VR = g(A());
    var z5 = g(Ee()),
        pZ = function(t) {
            var n = (0, z5.useState)(function() {
                    return typeof t == "function" ? t() : t
                }),
                r = Ge(n, 2),
                i = r[0],
                s = r[1],
                c = (0, z5.useRef)(t);
            (0, z5.useEffect)(function() {
                c.current = i
            }, [i]);
            var u = function(p) {
                var h = typeof p == "function" ? p(c.current) : p;
                c.current = h, s(h)
            };
            return [i, u, c]
        },
        Zm = pZ;
    var Tm = Zm;
    var Li = Tm;
    var $R = g(A());
    var mZ = function(t) {
            var n = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
                r = t.replace(n, function(s, c, u, f) {
                    return "".concat(c).concat(c).concat(u).concat(u).concat(f).concat(f)
                }),
                i = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(r);
            if (!i) throw new Error("Geist UI: Unsupported ".concat(t, " color."));
            return [Number.parseInt(i[1], 16), Number.parseInt(i[2], 16), Number.parseInt(i[3], 16)]
        },
        vZ = function(t) {
            if (t.charAt(0) === "#") return mZ(t);
            var n = t.replace(/ /g, ""),
                r = t.substr(0, 4),
                i = n.match(/\((.+)\)/);
            if (!r.startsWith("rgb") || !i) throw console.log(t), new Error('Geist UI: Only support ["RGB", "RGBA", "HEX"] color.');
            return i[1].split(",").map(function(s) {
                return Number.parseFloat(s)
            })
        },
        Zs = function(t, n) {
            if (!/^#|rgb|RGB/.test(t)) return t;
            var r = vZ(t),
                i = Ge(r, 3),
                s = i[0],
                c = i[1],
                u = i[2],
                f = n > 1 ? 1 : n < 0 ? 0 : n;
            return "rgba(".concat(s, ", ").concat(c, ", ").concat(u, ", ").concat(f, ")")
        };
    var RP = g(A());
    var kP = g(A());
    var it = g(Ee());
    var KR = g(A());
    var ar = g(Ee()),
        gZ = {
            x: 0,
            y: 0
        },
        I4 = function(t) {
            var n = t.x,
                r = t.y,
                i = t.color,
                s = t.onCompleted,
                c = (0, ar.useRef)(null),
                u = Number.isNaN(+r) ? 0 : r - 10,
                f = Number.isNaN(+n) ? 0 : n - 10;
            return (0, ar.useEffect)(function() {
                if (c.current) return c.current.addEventListener("animationend", s),
                    function() {
                        c.current && c.current.removeEventListener("animationend", s)
                    }
            }), ar.default.createElement("div", {
                ref: c,
                className: "jsx-3424889537 drip"
            }, ar.default.createElement("svg", {
                width: "20",
                height: "20",
                viewBox: "0 0 20 20",
                style: {
                    top: u,
                    left: f
                },
                className: "jsx-3424889537"
            }, ar.default.createElement("g", {
                stroke: "none",
                strokeWidth: "1",
                fill: "none",
                fillRule: "evenodd",
                className: "jsx-3424889537"
            }, ar.default.createElement("g", {
                fill: i,
                className: "jsx-3424889537"
            }, ar.default.createElement("rect", {
                width: "100%",
                height: "100%",
                rx: "10",
                className: "jsx-3424889537"
            })))), ar.default.createElement(Le, {
                id: "3424889537"
            }, ".drip.jsx-3424889537{position:absolute;left:0;right:0;top:0;bottom:0;}svg.jsx-3424889537{position:absolute;-webkit-animation:350ms ease-in expand-jsx-3424889537;animation:350ms ease-in expand-jsx-3424889537;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;width:1rem;height:1rem;}@-webkit-keyframes expand-jsx-3424889537{0%{opacity:0;-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}30%{opacity:1;}80%{opacity:0.5;}100%{-webkit-transform:scale(28);-ms-transform:scale(28);transform:scale(28);opacity:0;}}@keyframes expand-jsx-3424889537{0%{opacity:0;-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}30%{opacity:1;}80%{opacity:0.5;}100%{-webkit-transform:scale(28);-ms-transform:scale(28);transform:scale(28);opacity:0;}}"))
        };
    I4.defaultProps = gZ;
    I4.displayName = "GeistButtonDrip";
    var Im = I4;
    var JR = g(A());
    var Ts = g(Ee());
    var km = function(t) {
        var n = t.color;
        return Ts.default.createElement("div", {
            className: "jsx-3416748964 btn-loading"
        }, Ts.default.createElement(Mm, {
            color: n
        }), Ts.default.createElement(Le, {
            id: "3416748964"
        }, ".btn-loading.jsx-3416748964{position:absolute;top:0;left:0;right:0;bottom:0;z-index:2;background-color:var(--geist-ui-button-bg);}"))
    };
    km.displayName = "GeistButtonLoading";
    var Om = km;
    var fP = g(A());
    var n1 = g(Ee());
    var iP = g(A());
    var k4 = g(Ee());
    var yZ = ["isRight", "isSingle", "children", "className"],
        _Z = {
            isRight: !1,
            className: ""
        },
        O4 = function(t) {
            var n = t.isRight,
                r = t.isSingle,
                i = t.children,
                s = t.className,
                c = kn(t, yZ),
                u = _r("icon", {
                    right: n,
                    single: r
                }, s);
            return k4.default.createElement("span", Ie({}, c, {
                className: "jsx-643337184 " + (c && c.className != null && c.className || u || "")
            }), i, k4.default.createElement(Le, {
                id: "643337184"
            }, ".icon.jsx-643337184{position:absolute;left:var(--geist-ui-button-icon-padding);right:auto;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:var(--geist-ui-button-color);z-index:1;}.right.jsx-643337184{right:var(--geist-ui-button-icon-padding);left:auto;}.icon.jsx-643337184 svg{background:transparent;height:calc(var(--geist-ui-button-height) / 2.35);width:calc(var(--geist-ui-button-height) / 2.35);}.single.jsx-643337184{position:static;-webkit-transform:none;-ms-transform:none;transform:none;}"))
        };
    O4.defaultProps = _Z;
    O4.displayName = "GeistButtonIcon";
    var L4 = O4;
    var Lm = function(t, n, r) {
            var i = r.icon,
                s = r.iconRight,
                c = i || s,
                u = Boolean(s),
                f = t ? "calc(var(--geist-ui-button-height) / 2 + var(--geist-ui-button-icon-padding) * .5)" : 0,
                p = _r("text", u ? "right" : "left");
            return c ? n1.default.Children.count(n) === 0 ? n1.default.createElement(L4, {
                isRight: u,
                isSingle: !0
            }, c) : n1.default.createElement(n1.default.Fragment, null, n1.default.createElement(L4, {
                isRight: u
            }, c), n1.default.createElement("div", {
                className: Le.dynamic([
                    ["3568181479", [f, f]]
                ]) + " " + (p || "")
            }, n, n1.default.createElement(Le, {
                id: "3568181479",
                dynamic: [f, f]
            }, ".left.__jsx-style-dynamic-selector{padding-left:".concat(f, ";}.right.__jsx-style-dynamic-selector{padding-right:").concat(f, ";}")))) : n1.default.createElement("div", {
                className: "text"
            }, n)
        },
        Rm = function(t, n) {
            return n.isButtonGroup ? Ie({}, t, {
                auto: !0,
                shadow: !1,
                ghost: n.ghost || t.ghost,
                type: n.type || t.type,
                disabled: n.disabled || t.disabled
            }) : t
        };
    var hP = g(A()),
        R4 = g(Ee()),
        wZ = {
            isButtonGroup: !1,
            disabled: !1
        },
        EZ = R4.default.createContext(wZ),
        Pm = function() {
            return R4.default.useContext(EZ)
        };
    var gP = g(A());
    var AZ = function(t, n) {
            var r = {
                secondary: {
                    bg: t.background,
                    border: t.foreground,
                    color: t.foreground
                },
                success: {
                    bg: t.background,
                    border: t.success,
                    color: t.success
                },
                warning: {
                    bg: t.background,
                    border: t.warning,
                    color: t.warning
                },
                error: {
                    bg: t.background,
                    border: t.error,
                    color: t.error
                }
            };
            return r[n] || null
        },
        P4 = function(t, n) {
            var r = n.type,
                i = n.disabled,
                s = n.ghost,
                c = {
                    default: {
                        bg: t.background,
                        border: t.border,
                        color: t.accents_5
                    },
                    secondary: {
                        bg: t.foreground,
                        border: t.foreground,
                        color: t.background
                    },
                    success: {
                        bg: t.success,
                        border: t.success,
                        color: "#fff"
                    },
                    warning: {
                        bg: t.warning,
                        border: t.warning,
                        color: "#fff"
                    },
                    error: {
                        bg: t.error,
                        border: t.error,
                        color: "#fff"
                    },
                    abort: {
                        bg: "transparent",
                        border: "transparent",
                        color: t.accents_5
                    }
                };
            if (i) return {
                bg: t.accents_1,
                border: t.accents_2,
                color: "#ccc"
            };
            var u = r?.replace("-light", ""),
                f = c.default;
            return s ? AZ(t, u) || f : c[u] || f
        },
        bZ = function(t, n) {
            var r = {
                    secondary: {
                        bg: t.foreground,
                        border: t.background,
                        color: t.background
                    },
                    success: {
                        bg: t.success,
                        border: t.background,
                        color: "white"
                    },
                    warning: {
                        bg: t.warning,
                        border: t.background,
                        color: "white"
                    },
                    error: {
                        bg: t.error,
                        border: t.background,
                        color: "white"
                    }
                },
                i = n.replace("-light", "");
            return r[i] || null
        },
        N4 = function(t, n) {
            var r = n.type,
                i = n.disabled,
                s = n.loading,
                c = n.shadow,
                u = n.ghost,
                f = P4(t, n),
                p = Zs(f.bg, .85),
                h = {
                    default: {
                        bg: t.background,
                        border: t.foreground
                    },
                    secondary: {
                        bg: t.background,
                        border: t.foreground
                    },
                    success: {
                        bg: t.background,
                        border: t.success
                    },
                    warning: {
                        bg: t.background,
                        border: t.warning
                    },
                    error: {
                        bg: t.background,
                        border: t.error
                    },
                    abort: {
                        bg: "transparent",
                        border: "transparent",
                        color: t.accents_5
                    },
                    "secondary-light": Ie({}, f, {
                        bg: p
                    }),
                    "success-light": Ie({}, f, {
                        bg: p
                    }),
                    "warning-light": Ie({}, f, {
                        bg: p
                    }),
                    "error-light": Ie({}, f, {
                        bg: p
                    })
                };
            if (i) return {
                bg: t.accents_1,
                border: t.accents_2,
                color: "#ccc"
            };
            if (s) return Ie({}, f, {
                color: "transparent"
            });
            if (c) return f;
            var w = (u ? bZ(t, r) : h[r]) || h.default;
            return Ie({}, w, {
                color: w.color || w.border
            })
        },
        Nm = function(t, n) {
            return t ? {
                cursor: "not-allowed",
                events: "auto"
            } : n ? {
                cursor: "default",
                events: "none"
            } : {
                cursor: "pointer",
                events: "auto"
            }
        },
        Vm = function(t, n) {
            var r = n.type,
                i = r.endsWith("light"),
                s = N4(t, n);
            return i ? Zs(s.bg, .65) : Zs(t.accents_2, .65)
        };
    var CZ = ["children", "disabled", "type", "loading", "shadow", "ghost", "effect", "onClick", "auto", "icon", "htmlType", "iconRight", "className"],
        xZ = {
            type: "default",
            htmlType: "button",
            ghost: !1,
            loading: !1,
            shadow: !1,
            auto: !1,
            effect: !0,
            disabled: !1,
            className: ""
        },
        V4 = it.default.forwardRef(function(e, t) {
            var n = yr(),
                r = i2(),
                i = r.SCALES,
                s = (0, it.useRef)(null);
            (0, it.useImperativeHandle)(t, function() {
                return s.current
            });
            var c = (0, it.useState)(!1),
                u = Ge(c, 2),
                f = u[0],
                p = u[1],
                h = (0, it.useState)(0),
                w = Ge(h, 2),
                v = w[0],
                _ = w[1],
                S = (0, it.useState)(0),
                I = Ge(S, 2),
                R = I[0],
                b = I[1],
                C = Pm(),
                x = Rm(e, C),
                Z = x.children,
                T = x.disabled,
                P = x.type,
                N = x.loading,
                H = x.shadow,
                le = x.ghost,
                te = x.effect,
                z = x.onClick,
                G = x.auto,
                j = x.icon,
                ee = x.htmlType,
                q = x.iconRight,
                X = x.className,
                ne = kn(x, CZ),
                he = (0, it.useMemo)(function() {
                    return P4(n.palette, x)
                }, [n.palette, x]),
                de = he.bg,
                Ce = he.border,
                Oe = he.color,
                re = (0, it.useMemo)(function() {
                    return N4(n.palette, x)
                }, [n.palette, x]),
                Je = (0, it.useMemo)(function() {
                    return Nm(T, N)
                }, [T, N]),
                ot = Je.cursor,
                st = Je.events,
                gt = (0, it.useMemo)(function() {
                    return Vm(n.palette, x)
                }, [n.palette, x]),
                Re = function() {
                    p(!1), _(0), b(0)
                },
                Vt = function(Kt) {
                    if (!(T || N)) {
                        var K0 = !H && !le && te;
                        if (K0 && s.current) {
                            var yt = s.current.getBoundingClientRect();
                            p(!0), _(Kt.clientX - yt.left), b(Kt.clientY - yt.top)
                        }
                        z && z(Kt)
                    }
                },
                Ht = (0, it.useMemo)(function() {
                    return Lm(G, Z, {
                        icon: j,
                        iconRight: q
                    })
                }, [G, Z, j, q]),
                xt = G ? i.pl(1.15) : i.pl(1.375),
                Gn = G ? i.pr(1.15) : i.pr(1.375);
            return it.default.createElement("button", Ie({
                ref: s,
                type: ee,
                disabled: T,
                onClick: Vt
            }, ne, {
                className: Le.dynamic([
                    ["86551275", [i.height(2.5), n.layout.radius, i.font(.875), Oe, de, Ce, ot, st, H ? n.expressiveness.shadowSmall : "none", i.pl(.727), i.height(2.5), Oe, de, G ? "min-content" : i.width(10.5), G ? "auto" : "initial", i.height(2.5), i.pt(0), Gn, i.pb(0), xt, i.mt(0), i.mr(0), i.mb(0), i.ml(0), re.color, re.color, re.bg, re.border, ot, st, H ? n.expressiveness.shadowMedium : "none", H ? "-1px" : "0px"]]
                ]) + " " + (ne && ne.className != null && ne.className || _r("btn", X) || "")
            }), N && it.default.createElement(Om, {
                color: Oe
            }), Ht, f && it.default.createElement(Im, {
                x: v,
                y: R,
                color: gt,
                onCompleted: Re
            }), it.default.createElement(Le, {
                id: "86551275",
                dynamic: [i.height(2.5), n.layout.radius, i.font(.875), Oe, de, Ce, ot, st, H ? n.expressiveness.shadowSmall : "none", i.pl(.727), i.height(2.5), Oe, de, G ? "min-content" : i.width(10.5), G ? "auto" : "initial", i.height(2.5), i.pt(0), Gn, i.pb(0), xt, i.mt(0), i.mr(0), i.mb(0), i.ml(0), re.color, re.color, re.bg, re.border, ot, st, H ? n.expressiveness.shadowMedium : "none", H ? "-1px" : "0px"]
            }, ".btn.__jsx-style-dynamic-selector{box-sizing:border-box;display:inline-block;line-height:".concat(i.height(2.5), ";border-radius:").concat(n.layout.radius, ";font-weight:400;font-size:").concat(i.font(.875), ";-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:none;text-transform:capitalize;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;white-space:nowrap;-webkit-transition:background-color 200ms ease 0ms,box-shadow 200ms ease 0ms, border 200ms ease 0ms,color 200ms ease 0ms;transition:background-color 200ms ease 0ms,box-shadow 200ms ease 0ms, border 200ms ease 0ms,color 200ms ease 0ms;position:relative;overflow:hidden;color:").concat(Oe, ";background-color:").concat(de, ";border:1px solid ").concat(Ce, ";cursor:").concat(ot, ";pointer-events:").concat(st, ";box-shadow:").concat(H ? n.expressiveness.shadowSmall : "none", ";--geist-ui-button-icon-padding:").concat(i.pl(.727), ";--geist-ui-button-height:").concat(i.height(2.5), ";--geist-ui-button-color:").concat(Oe, ";--geist-ui-button-bg:").concat(de, ";min-width:").concat(G ? "min-content" : i.width(10.5), ";width:").concat(G ? "auto" : "initial", ";height:").concat(i.height(2.5), ";padding:").concat(i.pt(0), " ").concat(Gn, " ").concat(i.pb(0), " ").concat(xt, ";margin:").concat(i.mt(0), " ").concat(i.mr(0), " ").concat(i.mb(0), " ").concat(i.ml(0), ";}.btn.__jsx-style-dynamic-selector:hover,.btn.__jsx-style-dynamic-selector:focus{color:").concat(re.color, ";--geist-ui-button-color:").concat(re.color, ";background-color:").concat(re.bg, ";border-color:").concat(re.border, ";cursor:").concat(ot, ";pointer-events:").concat(st, ";box-shadow:").concat(H ? n.expressiveness.shadowMedium : "none", ";-webkit-transform:translate3d(0px,").concat(H ? "-1px" : "0px", ",0px);-ms-transform:translate3d(0px,").concat(H ? "-1px" : "0px", ",0px);transform:translate3d(0px,").concat(H ? "-1px" : "0px", ",0px);}.btn.__jsx-style-dynamic-selector .text{position:relative;z-index:1;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;line-height:inherit;top:-1px;}.btn.__jsx-style-dynamic-selector .text p,.btn.__jsx-style-dynamic-selector .text pre,.btn.__jsx-style-dynamic-selector .text div{margin:0;}")))
        });
    V4.defaultProps = xZ;
    V4.displayName = "GeistButton";
    var SZ = Ba(V4),
        Hm = SZ;
    var Ri = Hm;
    var xN = g(A());
    var AN = g(A());
    var q1 = g(Ee());
    var NP = g(A()),
        H4 = g(Ee()),
        D4 = {
            padding: "12px 16px",
            margin: "8px 0",
            width: "420px",
            maxWidth: "90vw",
            maxHeight: "75px",
            placement: "bottomRight"
        },
        MZ = {
            toasts: [],
            toastLayout: D4,
            updateToastLayout: function(t) {
                return t
            },
            updateToasts: function(t) {
                return t
            },
            lastUpdateToastId: null,
            updateLastToastId: function() {
                return null
            }
        },
        F4 = H4.default.createContext(MZ),
        Dm = function() {
            return H4.default.useContext(F4)
        };
    var $P = g(A());
    var r1 = g(Ee());
    var DP = g(A()),
        Fm = g(Ee());
    var ZZ = {
            themes: a2.getPresets()
        },
        Bm = Fm.default.createContext(ZZ);
    var TZ = function(t) {
            var n = t.children,
                r = t.themeType,
                i = t.themes,
                s = i === void 0 ? [] : i,
                c = (0, r1.useState)({
                    themes: E0.getPresets()
                }),
                u = Ge(c, 2),
                f = u[0],
                p = u[1],
                h = (0, r1.useMemo)(function() {
                    var w = f.themes.find(function(v) {
                        return v.type === r
                    });
                    return w || E0.getPresetStaticTheme()
                }, [f, r]);
            return (0, r1.useEffect)(function() {
                s != null && s.length && p(function(w) {
                    var v = s.filter(function(S) {
                            return E0.isAvailableThemeType(S.type)
                        }),
                        _ = E0.getPresets().concat(v);
                    return Ie({}, w, {
                        themes: _
                    })
                })
            }, [s]), r1.default.createElement(Bm.Provider, {
                value: f
            }, r1.default.createElement(dc.Provider, {
                value: h
            }, n))
        },
        Um = TZ;
    var mN = g(A());
    var ir = g(Ee()),
        Qm = g(xs());
    var rN = g(A());
    var Dn = g(Ee());
    var XP = g(A()),
        jm = g(Ee());
    var Gm = function(t, n) {
            var r = function(s, c) {
                c && c(s, n)
            };
            return !t || !t.length ? null : t.map(function(i, s) {
                return jm.default.createElement(Ri, {
                    auto: !0,
                    scale: 1 / 3,
                    font: "13px",
                    type: i.passive ? "default" : "secondary",
                    key: "action-".concat(s),
                    onClick: function(u) {
                        return r(u, i.handler)
                    }
                }, i.name)
            })
        },
        zm = function(t, n) {
            var r = {
                    default: t.background,
                    secondary: t.secondary,
                    success: t.success,
                    warning: t.warning,
                    error: t.error
                },
                i = !n || n === "default";
            return i ? {
                bgColor: r.default,
                color: t.foreground
            } : {
                bgColor: r[n],
                color: "white"
            }
        },
        KP = wr("topLeft", "topRight", "bottomLeft", "bottomRight"),
        $m = function(t) {
            return "".concat(t).toLowerCase().startsWith("top")
        },
        qm = function(t) {
            return "".concat(t).toLowerCase().endsWith("left")
        },
        Wm = function(t) {
            var n = {
                    topLeft: "translate(-60px, -60px)",
                    topRight: "translate(60px, -60px)",
                    bottomLeft: "translate(-60px, 60px)",
                    bottomRight: "translate(60px, 60px)"
                },
                r = {
                    topLeft: "translate(-50px, 15px) scale(0.85)",
                    topRight: "translate(50px, 15px) scale(0.85)",
                    bottomLeft: "translate(-50px, -15px) scale(0.85)",
                    bottomRight: "translate(50px, -15px) scale(0.85)"
                };
            return {
                enter: n[t],
                leave: r[t]
            }
        };
    var IZ = Dn.default.memo(function(e) {
            var t = e.toast,
                n = e.layout,
                r = yr(),
                i = (0, Dn.useMemo)(function() {
                    return zm(r.palette, t.type)
                }, [r.palette, t.type]),
                s = i.color,
                c = i.bgColor,
                u = typeof t.text != "string",
                f = n.padding,
                p = n.margin,
                h = n.maxHeight,
                w = n.maxWidth,
                v = n.width,
                _ = n.placement,
                S = (0, Dn.useMemo)(function() {
                    return Wm(_)
                }, [_]),
                I = S.enter,
                R = S.leave;
            return Dn.default.createElement(xm, {
                name: "toast",
                visible: t.visible,
                clearTime: 350
            }, Dn.default.createElement("div", {
                key: t.id,
                className: Le.dynamic([
                    ["1407001838", [v, w, h, r.palette.foreground, c, s, r.layout.radius, r.expressiveness.shadowSmall, r.layout.gapHalf, I, p, f, p, f, R]]
                ]) + " toast"
            }, u ? t.text : Dn.default.createElement(Dn.default.Fragment, null, Dn.default.createElement("div", {
                className: Le.dynamic([
                    ["1407001838", [v, w, h, r.palette.foreground, c, s, r.layout.radius, r.expressiveness.shadowSmall, r.layout.gapHalf, I, p, f, p, f, R]]
                ]) + " message"
            }, t.text), Dn.default.createElement("div", {
                className: Le.dynamic([
                    ["1407001838", [v, w, h, r.palette.foreground, c, s, r.layout.radius, r.expressiveness.shadowSmall, r.layout.gapHalf, I, p, f, p, f, R]]
                ]) + " action"
            }, Gm(t.actions, t.cancel))), Dn.default.createElement(Le, {
                id: "1407001838",
                dynamic: [v, w, h, r.palette.foreground, c, s, r.layout.radius, r.expressiveness.shadowSmall, r.layout.gapHalf, I, p, f, p, f, R]
            }, ".toast.__jsx-style-dynamic-selector{width:".concat(v, ";max-width:").concat(w, ";max-height:").concat(h, ";display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:").concat(r.palette.foreground, ";background-color:").concat(c, ";color:").concat(s, ";border:0;border-radius:").concat(r.layout.radius, ";opacity:1;box-shadow:").concat(r.expressiveness.shadowSmall, ";-webkit-transition:all 350ms cubic-bezier(0.1,0.2,0.1,1);transition:all 350ms cubic-bezier(0.1,0.2,0.1,1);overflow:hidden;}.message.__jsx-style-dynamic-selector{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100%;font-size:0.875em;display:-webkit-box;word-break:break-all;padding-right:").concat(r.layout.gapHalf, ";overflow:hidden;max-height:100%;text-overflow:ellipsis;-webkit-box-orient:vertical;-webkit-line-clamp:2;line-height:1.1rem;}.toast-enter.__jsx-style-dynamic-selector{opacity:0;height:0;padding:0;margin:0;-webkit-transform:").concat(I, ";-ms-transform:").concat(I, ";transform:").concat(I, ";}.toast-enter-active.__jsx-style-dynamic-selector{opacity:1;height:auto;margin:").concat(p, ";padding:").concat(f, ";-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0);}.toast-leave.__jsx-style-dynamic-selector{opacity:1;-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0);height:auto;margin:").concat(p, ";padding:").concat(f, ";}.toast-leave-active.__jsx-style-dynamic-selector{opacity:0;-webkit-transform:").concat(R, ";-ms-transform:").concat(R, ";transform:").concat(R, ";}"))))
        }),
        Km = IZ;
    var kZ = function() {
            var t = yr(),
                n = Cm("toast"),
                r = Li(!1),
                i = Ge(r, 3),
                s = i[1],
                c = i[2],
                u = Dm(),
                f = u.toasts,
                p = u.updateToasts,
                h = u.toastLayout,
                w = u.lastUpdateToastId,
                v = (0, ir.useMemo)(function() {
                    return h
                }, [h]),
                _ = (0, ir.useMemo)(function() {
                    return f.map(function(R) {
                        return ir.default.createElement(Km, {
                            toast: R,
                            layout: v,
                            key: R._internalIdent
                        })
                    })
                }, [f, v]),
                S = (0, ir.useMemo)(function() {
                    return _r("toasts", {
                        top: $m(h.placement),
                        left: qm(h.placement)
                    })
                }, [v]),
                I = function(b) {
                    if (s(b), b) return p(function(C) {
                        return C.map(function(x) {
                            return x.visible ? (x._timeout && window.clearTimeout(x._timeout), Ie({}, x, {
                                timeout: null
                            })) : x
                        })
                    });
                    p(function(C) {
                        return C.map(function(x, Z) {
                            return x.visible ? (x._timeout && window.clearTimeout(x._timeout), Ie({}, x, {
                                _timeout: function() {
                                    var T = window.setTimeout(function() {
                                        x.cancel(), window.clearTimeout(T)
                                    }, x.delay + Z * 100);
                                    return T
                                }()
                            })) : x
                        })
                    })
                };
            return (0, ir.useEffect)(function() {
                var R = f.findIndex(function(x) {
                        return x._internalIdent === w
                    }),
                    b = f[R];
                if (!(!b || b.visible || !c.current)) {
                    var C = f.find(function(x, Z) {
                        return Z < R && x.visible
                    });
                    C || !c.current || I(!1)
                }
            }, [f, w]), (0, ir.useEffect)(function() {
                var R = null,
                    b = window.setInterval(function() {
                        f.length !== 0 && (R = window.setTimeout(function() {
                            var C = !f.find(function(x) {
                                return x.visible
                            });
                            C && p(function() {
                                return []
                            }), R && clearTimeout(R)
                        }, 350))
                    }, 5e3);
                return function() {
                    b && clearInterval(b), R && clearTimeout(R)
                }
            }, [f]), !n || !f || f.length === 0 ? null : (0, Qm.createPortal)(ir.default.createElement("div", {
                onMouseEnter: function() {
                    return I(!0)
                },
                onMouseLeave: function() {
                    return I(!1)
                },
                className: Le.dynamic([
                    ["622610754", [t.layout.gap, t.layout.gap, t.layout.gap, t.layout.gap]]
                ]) + " " + (S || "")
            }, _, ir.default.createElement(Le, {
                id: "622610754",
                dynamic: [t.layout.gap, t.layout.gap, t.layout.gap, t.layout.gap]
            }, ".toasts.__jsx-style-dynamic-selector{position:fixed;width:auto;max-width:100%;right:".concat(t.layout.gap, ";bottom:").concat(t.layout.gap, ";z-index:2000;-webkit-transition:all 400ms ease;transition:all 400ms ease;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.top.__jsx-style-dynamic-selector{bottom:unset;-webkit-flex-direction:column-reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse;top:").concat(t.layout.gap, ";}.left.__jsx-style-dynamic-selector{right:unset;left:").concat(t.layout.gap, ";}"))), n)
        },
        Xm = kZ;
    var OZ = function(t) {
            var n = t.themes,
                r = t.themeType,
                i = t.children,
                s = (0, q1.useState)(null),
                c = Ge(s, 2),
                u = c[0],
                f = c[1],
                p = Li([]),
                h = Ge(p, 3),
                w = h[0],
                v = h[1],
                _ = h[2],
                S = Li(D4),
                I = Ge(S, 3),
                R = I[0],
                b = I[1],
                C = I[2],
                x = function(H) {
                    var le = H(_.current);
                    v(le)
                },
                Z = function(H) {
                    var le = H(C.current);
                    b(le)
                },
                T = function(H) {
                    f(H())
                },
                P = (0, q1.useMemo)(function() {
                    return {
                        toasts: w,
                        toastLayout: R,
                        updateToasts: x,
                        lastUpdateToastId: u,
                        updateToastLayout: Z,
                        updateLastToastId: T
                    }
                }, [w, R, u]);
            return q1.default.createElement(F4.Provider, {
                value: P
            }, q1.default.createElement(Um, {
                themes: n,
                themeType: r
            }, i, q1.default.createElement(Xm, null)))
        },
        Ym = OZ;
    var B4 = Ym;
    var U3 = g(Is(), 1);
    var RN = g(A());

    function LZ(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) n.hasOwnProperty(r) && (e[r] = n[r])
        }
        return e
    }

    function $4(e, t) {
        return Array(t + 1).join(e)
    }

    function RZ(e) {
        return e.replace(/^\n*/, "")
    }

    function PZ(e) {
        for (var t = e.length; t > 0 && e[t - 1] === `
`;) t--;
        return e.substring(0, t)
    }
    var NZ = ["ADDRESS", "ARTICLE", "ASIDE", "AUDIO", "BLOCKQUOTE", "BODY", "CANVAS", "CENTER", "DD", "DIR", "DIV", "DL", "DT", "FIELDSET", "FIGCAPTION", "FIGURE", "FOOTER", "FORM", "FRAMESET", "H1", "H2", "H3", "H4", "H5", "H6", "HEADER", "HGROUP", "HR", "HTML", "ISINDEX", "LI", "MAIN", "MENU", "NAV", "NOFRAMES", "NOSCRIPT", "OL", "OUTPUT", "P", "PRE", "SECTION", "TABLE", "TBODY", "TD", "TFOOT", "TH", "THEAD", "TR", "UL"];

    function q4(e) {
        return W4(e, NZ)
    }
    var n9 = ["AREA", "BASE", "BR", "COL", "COMMAND", "EMBED", "HR", "IMG", "INPUT", "KEYGEN", "LINK", "META", "PARAM", "SOURCE", "TRACK", "WBR"];

    function r9(e) {
        return W4(e, n9)
    }

    function VZ(e) {
        return i9(e, n9)
    }
    var a9 = ["A", "TABLE", "THEAD", "TBODY", "TFOOT", "TH", "TD", "IFRAME", "SCRIPT", "AUDIO", "VIDEO"];

    function HZ(e) {
        return W4(e, a9)
    }

    function DZ(e) {
        return i9(e, a9)
    }

    function W4(e, t) {
        return t.indexOf(e.nodeName) >= 0
    }

    function i9(e, t) {
        return e.getElementsByTagName && t.some(function(n) {
            return e.getElementsByTagName(n).length
        })
    }
    var Nt = {};
    Nt.paragraph = {
        filter: "p",
        replacement: function(e) {
            return `

` + e + `

`
        }
    };
    Nt.lineBreak = {
        filter: "br",
        replacement: function(e, t, n) {
            return n.br + `
`
        }
    };
    Nt.heading = {
        filter: ["h1", "h2", "h3", "h4", "h5", "h6"],
        replacement: function(e, t, n) {
            var r = Number(t.nodeName.charAt(1));
            if (n.headingStyle === "setext" && r < 3) {
                var i = $4(r === 1 ? "=" : "-", e.length);
                return `

` + e + `
` + i + `

`
            } else return `

` + $4("#", r) + " " + e + `

`
        }
    };
    Nt.blockquote = {
        filter: "blockquote",
        replacement: function(e) {
            return e = e.replace(/^\n+|\n+$/g, ""), e = e.replace(/^/gm, "> "), `

` + e + `

`
        }
    };
    Nt.list = {
        filter: ["ul", "ol"],
        replacement: function(e, t) {
            var n = t.parentNode;
            return n.nodeName === "LI" && n.lastElementChild === t ? `
` + e : `

` + e + `

`
        }
    };
    Nt.listItem = {
        filter: "li",
        replacement: function(e, t, n) {
            e = e.replace(/^\n+/, "").replace(/\n+$/, `
`).replace(/\n/gm, `
    `);
            var r = n.bulletListMarker + "   ",
                i = t.parentNode;
            if (i.nodeName === "OL") {
                var s = i.getAttribute("start"),
                    c = Array.prototype.indexOf.call(i.children, t);
                r = (s ? Number(s) + c : c + 1) + ".  "
            }
            return r + e + (t.nextSibling && !/\n$/.test(e) ? `
` : "")
        }
    };
    Nt.indentedCodeBlock = {
        filter: function(e, t) {
            return t.codeBlockStyle === "indented" && e.nodeName === "PRE" && e.firstChild && e.firstChild.nodeName === "CODE"
        },
        replacement: function(e, t, n) {
            return `

    ` + t.firstChild.textContent.replace(/\n/g, `
    `) + `

`
        }
    };
    Nt.fencedCodeBlock = {
        filter: function(e, t) {
            return t.codeBlockStyle === "fenced" && e.nodeName === "PRE" && e.firstChild && e.firstChild.nodeName === "CODE"
        },
        replacement: function(e, t, n) {
            for (var r = t.firstChild.getAttribute("class") || "", i = (r.match(/language-(\S+)/) || [null, ""])[1], s = t.firstChild.textContent, c = n.fence.charAt(0), u = 3, f = new RegExp("^" + c + "{3,}", "gm"), p; p = f.exec(s);) p[0].length >= u && (u = p[0].length + 1);
            var h = $4(c, u);
            return `

` + h + i + `
` + s.replace(/\n$/, "") + `
` + h + `

`
        }
    };
    Nt.horizontalRule = {
        filter: "hr",
        replacement: function(e, t, n) {
            return `

` + n.hr + `

`
        }
    };
    Nt.inlineLink = {
        filter: function(e, t) {
            return t.linkStyle === "inlined" && e.nodeName === "A" && e.getAttribute("href")
        },
        replacement: function(e, t) {
            var n = t.getAttribute("href"),
                r = ks(t.getAttribute("title"));
            return r && (r = ' "' + r + '"'), "[" + e + "](" + n + r + ")"
        }
    };
    Nt.referenceLink = {
        filter: function(e, t) {
            return t.linkStyle === "referenced" && e.nodeName === "A" && e.getAttribute("href")
        },
        replacement: function(e, t, n) {
            var r = t.getAttribute("href"),
                i = ks(t.getAttribute("title"));
            i && (i = ' "' + i + '"');
            var s, c;
            switch (n.linkReferenceStyle) {
                case "collapsed":
                    s = "[" + e + "][]", c = "[" + e + "]: " + r + i;
                    break;
                case "shortcut":
                    s = "[" + e + "]", c = "[" + e + "]: " + r + i;
                    break;
                default:
                    var u = this.references.length + 1;
                    s = "[" + e + "][" + u + "]", c = "[" + u + "]: " + r + i
            }
            return this.references.push(c), s
        },
        references: [],
        append: function(e) {
            var t = "";
            return this.references.length && (t = `

` + this.references.join(`
`) + `

`, this.references = []), t
        }
    };
    Nt.emphasis = {
        filter: ["em", "i"],
        replacement: function(e, t, n) {
            return e.trim() ? n.emDelimiter + e + n.emDelimiter : ""
        }
    };
    Nt.strong = {
        filter: ["strong", "b"],
        replacement: function(e, t, n) {
            return e.trim() ? n.strongDelimiter + e + n.strongDelimiter : ""
        }
    };
    Nt.code = {
        filter: function(e) {
            var t = e.previousSibling || e.nextSibling,
                n = e.parentNode.nodeName === "PRE" && !t;
            return e.nodeName === "CODE" && !n
        },
        replacement: function(e) {
            if (!e) return "";
            e = e.replace(/\r?\n|\r/g, " ");
            for (var t = /^`|^ .*?[^ ].* $|`$/.test(e) ? " " : "", n = "`", r = e.match(/`+/gm) || []; r.indexOf(n) !== -1;) n = n + "`";
            return n + t + e + t + n
        }
    };
    Nt.image = {
        filter: "img",
        replacement: function(e, t) {
            var n = ks(t.getAttribute("alt")),
                r = t.getAttribute("src") || "",
                i = ks(t.getAttribute("title")),
                s = i ? ' "' + i + '"' : "";
            return r ? "![" + n + "](" + r + s + ")" : ""
        }
    };

    function ks(e) {
        return e ? e.replace(/(\n+\s*)+/g, `
`) : ""
    }

    function o9(e) {
        this.options = e, this._keep = [], this._remove = [], this.blankRule = {
            replacement: e.blankReplacement
        }, this.keepReplacement = e.keepReplacement, this.defaultRule = {
            replacement: e.defaultReplacement
        }, this.array = [];
        for (var t in e.rules) this.array.push(e.rules[t])
    }
    o9.prototype = {
        add: function(e, t) {
            this.array.unshift(t)
        },
        keep: function(e) {
            this._keep.unshift({
                filter: e,
                replacement: this.keepReplacement
            })
        },
        remove: function(e) {
            this._remove.unshift({
                filter: e,
                replacement: function() {
                    return ""
                }
            })
        },
        forNode: function(e) {
            if (e.isBlank) return this.blankRule;
            var t;
            return (t = j4(this.array, e, this.options)) || (t = j4(this._keep, e, this.options)) || (t = j4(this._remove, e, this.options)) ? t : this.defaultRule
        },
        forEach: function(e) {
            for (var t = 0; t < this.array.length; t++) e(this.array[t], t)
        }
    };

    function j4(e, t, n) {
        for (var r = 0; r < e.length; r++) {
            var i = e[r];
            if (FZ(i, t, n)) return i
        }
    }

    function FZ(e, t, n) {
        var r = e.filter;
        if (typeof r == "string") {
            if (r === t.nodeName.toLowerCase()) return !0
        } else if (Array.isArray(r)) {
            if (r.indexOf(t.nodeName.toLowerCase()) > -1) return !0
        } else if (typeof r == "function") {
            if (r.call(e, t, n)) return !0
        } else throw new TypeError("`filter` needs to be a string, array, or function")
    }

    function BZ(e) {
        var t = e.element,
            n = e.isBlock,
            r = e.isVoid,
            i = e.isPre || function(w) {
                return w.nodeName === "PRE"
            };
        if (!(!t.firstChild || i(t))) {
            for (var s = null, c = !1, u = null, f = e9(u, t, i); f !== t;) {
                if (f.nodeType === 3 || f.nodeType === 4) {
                    var p = f.data.replace(/[ \r\n\t]+/g, " ");
                    if ((!s || / $/.test(s.data)) && !c && p[0] === " " && (p = p.substr(1)), !p) {
                        f = G4(f);
                        continue
                    }
                    f.data = p, s = f
                } else if (f.nodeType === 1) n(f) || f.nodeName === "BR" ? (s && (s.data = s.data.replace(/ $/, "")), s = null, c = !1) : r(f) || i(f) ? (s = null, c = !0) : s && (c = !1);
                else {
                    f = G4(f);
                    continue
                }
                var h = e9(u, f, i);
                u = f, f = h
            }
            s && (s.data = s.data.replace(/ $/, ""), s.data || G4(s))
        }
    }

    function G4(e) {
        var t = e.nextSibling || e.parentNode;
        return e.parentNode.removeChild(e), t
    }

    function e9(e, t, n) {
        return e && e.parentNode === t || n(t) ? t.nextSibling || t.parentNode : t.firstChild || t.nextSibling || t.parentNode
    }
    var s9 = typeof window < "u" ? window : {};

    function UZ() {
        var e = s9.DOMParser,
            t = !1;
        try {
            new e().parseFromString("", "text/html") && (t = !0)
        } catch {}
        return t
    }

    function jZ() {
        var e = function() {};
        return GZ() ? e.prototype.parseFromString = function(t) {
            var n = new window.ActiveXObject("htmlfile");
            return n.designMode = "on", n.open(), n.write(t), n.close(), n
        } : e.prototype.parseFromString = function(t) {
            var n = document.implementation.createHTMLDocument("");
            return n.open(), n.write(t), n.close(), n
        }, e
    }

    function GZ() {
        var e = !1;
        try {
            document.implementation.createHTMLDocument("").open()
        } catch {
            window.ActiveXObject && (e = !0)
        }
        return e
    }
    var zZ = UZ() ? s9.DOMParser : jZ();

    function $Z(e, t) {
        var n;
        if (typeof e == "string") {
            var r = qZ().parseFromString('<x-turndown id="turndown-root">' + e + "</x-turndown>", "text/html");
            n = r.getElementById("turndown-root")
        } else n = e.cloneNode(!0);
        return BZ({
            element: n,
            isBlock: q4,
            isVoid: r9,
            isPre: t.preformattedCode ? WZ : null
        }), n
    }
    var z4;

    function qZ() {
        return z4 = z4 || new zZ, z4
    }

    function WZ(e) {
        return e.nodeName === "PRE" || e.nodeName === "CODE"
    }

    function KZ(e, t) {
        return e.isBlock = q4(e), e.isCode = e.nodeName === "CODE" || e.parentNode.isCode, e.isBlank = QZ(e), e.flankingWhitespace = XZ(e, t), e
    }

    function QZ(e) {
        return !r9(e) && !HZ(e) && /^\s*$/i.test(e.textContent) && !VZ(e) && !DZ(e)
    }

    function XZ(e, t) {
        if (e.isBlock || t.preformattedCode && e.isCode) return {
            leading: "",
            trailing: ""
        };
        var n = YZ(e.textContent);
        return n.leadingAscii && t9("left", e, t) && (n.leading = n.leadingNonAscii), n.trailingAscii && t9("right", e, t) && (n.trailing = n.trailingNonAscii), {
            leading: n.leading,
            trailing: n.trailing
        }
    }

    function YZ(e) {
        var t = e.match(/^(([ \t\r\n]*)(\s*))(?:(?=\S)[\s\S]*\S)?((\s*?)([ \t\r\n]*))$/);
        return {
            leading: t[1],
            leadingAscii: t[2],
            leadingNonAscii: t[3],
            trailing: t[4],
            trailingNonAscii: t[5],
            trailingAscii: t[6]
        }
    }

    function t9(e, t, n) {
        var r, i, s;
        return e === "left" ? (r = t.previousSibling, i = / $/) : (r = t.nextSibling, i = /^ /), r && (r.nodeType === 3 ? s = i.test(r.nodeValue) : n.preformattedCode && r.nodeName === "CODE" ? s = !1 : r.nodeType === 1 && !q4(r) && (s = i.test(r.textContent))), s
    }
    var JZ = Array.prototype.reduce,
        eT = [
            [/\\/g, "\\\\"],
            [/\*/g, "\\*"],
            [/^-/g, "\\-"],
            [/^\+ /g, "\\+ "],
            [/^(=+)/g, "\\$1"],
            [/^(#{1,6}) /g, "\\$1 "],
            [/`/g, "\\`"],
            [/^~~~/g, "\\~~~"],
            [/\[/g, "\\["],
            [/\]/g, "\\]"],
            [/^>/g, "\\>"],
            [/_/g, "\\_"],
            [/^(\d+)\. /g, "$1\\. "]
        ];

    function Os(e) {
        if (!(this instanceof Os)) return new Os(e);
        var t = {
            rules: Nt,
            headingStyle: "setext",
            hr: "* * *",
            bulletListMarker: "*",
            codeBlockStyle: "indented",
            fence: "```",
            emDelimiter: "_",
            strongDelimiter: "**",
            linkStyle: "inlined",
            linkReferenceStyle: "full",
            br: "  ",
            preformattedCode: !1,
            blankReplacement: function(n, r) {
                return r.isBlock ? `

` : ""
            },
            keepReplacement: function(n, r) {
                return r.isBlock ? `

` + r.outerHTML + `

` : r.outerHTML
            },
            defaultReplacement: function(n, r) {
                return r.isBlock ? `

` + n + `

` : n
            }
        };
        this.options = LZ({}, t, e), this.rules = new o9(this.options)
    }
    Os.prototype = {
        turndown: function(e) {
            if (!rT(e)) throw new TypeError(e + " is not a string, or an element/document/fragment node.");
            if (e === "") return "";
            var t = l9.call(this, new $Z(e, this.options));
            return tT.call(this, t)
        },
        use: function(e) {
            if (Array.isArray(e))
                for (var t = 0; t < e.length; t++) this.use(e[t]);
            else if (typeof e == "function") e(this);
            else throw new TypeError("plugin must be a Function or an Array of Functions");
            return this
        },
        addRule: function(e, t) {
            return this.rules.add(e, t), this
        },
        keep: function(e) {
            return this.rules.keep(e), this
        },
        remove: function(e) {
            return this.rules.remove(e), this
        },
        escape: function(e) {
            return eT.reduce(function(t, n) {
                return t.replace(n[0], n[1])
            }, e)
        }
    };

    function l9(e) {
        var t = this;
        return JZ.call(e.childNodes, function(n, r) {
            r = new KZ(r, t.options);
            var i = "";
            return r.nodeType === 3 ? i = r.isCode ? r.nodeValue : t.escape(r.nodeValue) : r.nodeType === 1 && (i = nT.call(t, r)), c9(n, i)
        }, "")
    }

    function tT(e) {
        var t = this;
        return this.rules.forEach(function(n) {
            typeof n.append == "function" && (e = c9(e, n.append(t.options)))
        }), e.replace(/^[\t\r\n]+/, "").replace(/[\t\r\n\s]+$/, "")
    }

    function nT(e) {
        var t = this.rules.forNode(e),
            n = l9.call(this, e),
            r = e.flankingWhitespace;
        return (r.leading || r.trailing) && (n = n.trim()), r.leading + t.replacement(n, e, this.options) + r.trailing
    }

    function c9(e, t) {
        var n = PZ(e),
            r = RZ(t),
            i = Math.max(e.length - n.length, t.length - r.length),
            s = `

`.substring(0, i);
        return n + s + r
    }

    function rT(e) {
        return e != null && (typeof e == "string" || e.nodeType && (e.nodeType === 1 || e.nodeType === 9 || e.nodeType === 11))
    }
    var u9 = Os;
    var NN = g(A()),
        f9 = /highlight-(?:text|source)-([a-z0-9]+)/;

    function aT(e) {
        e.addRule("highlightedCodeBlock", {
            filter: function(t) {
                var n = t.firstChild;
                return t.nodeName === "DIV" && f9.test(t.className) && n && n.nodeName === "PRE"
            },
            replacement: function(t, n, r) {
                var i = n.className || "",
                    s = (i.match(f9) || [null, ""])[1];
                return `

` + r.fence + s + `
` + n.firstChild.textContent + `
` + r.fence + `

`
            }
        })
    }

    function iT(e) {
        e.addRule("strikethrough", {
            filter: ["del", "s", "strike"],
            replacement: function(t) {
                return "~" + t + "~"
            }
        })
    }
    var oT = Array.prototype.indexOf,
        sT = Array.prototype.every,
        $5 = {};
    $5.tableCell = {
        filter: ["th", "td"],
        replacement: function(e, t) {
            return d9(e, t)
        }
    };
    $5.tableRow = {
        filter: "tr",
        replacement: function(e, t) {
            var n = "",
                r = {
                    left: ":--",
                    right: "--:",
                    center: ":-:"
                };
            if (K4(t))
                for (var i = 0; i < t.childNodes.length; i++) {
                    var s = "---",
                        c = (t.childNodes[i].getAttribute("align") || "").toLowerCase();
                    c && (s = r[c] || s), n += d9(s, t.childNodes[i])
                }
            return `
` + e + (n ? `
` + n : "")
        }
    };
    $5.table = {
        filter: function(e) {
            return e.nodeName === "TABLE" && K4(e.rows[0])
        },
        replacement: function(e) {
            return e = e.replace(`

`, `
`), `

` + e + `

`
        }
    };
    $5.tableSection = {
        filter: ["thead", "tbody", "tfoot"],
        replacement: function(e) {
            return e
        }
    };

    function K4(e) {
        var t = e.parentNode;
        return t.nodeName === "THEAD" || t.firstChild === e && (t.nodeName === "TABLE" || lT(t)) && sT.call(e.childNodes, function(n) {
            return n.nodeName === "TH"
        })
    }

    function lT(e) {
        var t = e.previousSibling;
        return e.nodeName === "TBODY" && (!t || t.nodeName === "THEAD" && /^\s*$/i.test(t.textContent))
    }

    function d9(e, t) {
        var n = oT.call(t.parentNode.childNodes, t),
            r = " ";
        return n === 0 && (r = "| "), r + e + " |"
    }

    function cT(e) {
        e.keep(function(n) {
            return n.nodeName === "TABLE" && !K4(n.rows[0])
        });
        for (var t in $5) e.addRule(t, $5[t])
    }

    function uT(e) {
        e.addRule("taskListItems", {
            filter: function(t) {
                return t.type === "checkbox" && t.parentNode.nodeName === "LI"
            },
            replacement: function(t, n) {
                return (n.checked ? "[x]" : "[ ]") + " "
            }
        })
    }

    function h9(e) {
        e.use([aT, iT, cT, uT])
    }
    var fU = g(A(), 1);
    var cU = g(A(), 1);
    var VH = g(A(), 1);
    var PH = g(A(), 1);
    var vH = g(A(), 1);
    var VN = g(A());

    function Ae(e) {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        if (!1) var i;
        throw new Error(typeof e == "number" ? "[MobX] minified error nr: " + e + (n.length ? " " + n.map(String).join(",") : "") + ". Find the full error at: https://github.com/mobxjs/mobx/blob/main/packages/mobx/src/errors.ts" : "[MobX] " + e)
    }
    var fT = {};

    function i3() {
        return typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : fT
    }
    var T9 = Object.assign,
        Fs = Object.getOwnPropertyDescriptor,
        Tr = Object.defineProperty,
        Di = Object.prototype,
        Y4 = [];
    Object.freeze(Y4);
    var o3 = {};
    Object.freeze(o3);
    var dT = typeof Proxy < "u",
        hT = Object.toString();

    function I9() {
        dT || Ae("Proxy not available")
    }

    function k9(e) {
        var t = !1;
        return function() {
            if (!t) return t = !0, e.apply(this, arguments)
        }
    }
    var K5 = function() {};

    function lr(e) {
        return typeof e == "function"
    }

    function F0(e) {
        var t = typeof e;
        switch (t) {
            case "string":
            case "symbol":
            case "number":
                return !0
        }
        return !1
    }

    function qs(e) {
        return e !== null && typeof e == "object"
    }

    function X1(e) {
        if (!qs(e)) return !1;
        var t = Object.getPrototypeOf(e);
        if (t == null) return !0;
        var n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
        return typeof n == "function" && n.toString() === hT
    }

    function O9(e) {
        var t = e?.constructor;
        return t ? t.name === "GeneratorFunction" || t.displayName === "GeneratorFunction" : !1
    }

    function Ws(e, t, n) {
        Tr(e, t, {
            enumerable: !1,
            writable: !0,
            configurable: !0,
            value: n
        })
    }

    function L9(e, t, n) {
        Tr(e, t, {
            enumerable: !1,
            writable: !1,
            configurable: !0,
            value: n
        })
    }

    function J1(e, t) {
        var n = "isMobX" + e;
        return t.prototype[n] = !0,
            function(r) {
                return qs(r) && r[n] === !0
            }
    }

    function na(e) {
        return e instanceof Map
    }

    function Fi(e) {
        return e instanceof Set
    }
    var R9 = typeof Object.getOwnPropertySymbols < "u";

    function pT(e) {
        var t = Object.keys(e);
        if (!R9) return t;
        var n = Object.getOwnPropertySymbols(e);
        return n.length ? [].concat(t, n.filter(function(r) {
            return Di.propertyIsEnumerable.call(e, r)
        })) : t
    }
    var Ks = typeof Reflect < "u" && Reflect.ownKeys ? Reflect.ownKeys : R9 ? function(e) {
        return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
    } : Object.getOwnPropertyNames;

    function P9(e) {
        return e === null ? null : typeof e == "object" ? "" + e : e
    }

    function i1(e, t) {
        return Di.hasOwnProperty.call(e, t)
    }
    var mT = Object.getOwnPropertyDescriptors || function(t) {
        var n = {};
        return Ks(t).forEach(function(r) {
            n[r] = Fs(t, r)
        }), n
    };

    function p9(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, yT(r.key), r)
        }
    }

    function s3(e, t, n) {
        return t && p9(e.prototype, t), n && p9(e, n), Object.defineProperty(e, "prototype", {
            writable: !1
        }), e
    }

    function X5() {
        return X5 = Object.assign ? Object.assign.bind() : function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }, X5.apply(this, arguments)
    }

    function N9(e, t) {
        e.prototype = Object.create(t.prototype), e.prototype.constructor = e, J4(e, t)
    }

    function J4(e, t) {
        return J4 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, i) {
            return r.__proto__ = i, r
        }, J4(e, t)
    }

    function Q4(e) {
        if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function vT(e, t) {
        if (e) {
            if (typeof e == "string") return m9(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
            if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return m9(e, t)
        }
    }

    function m9(e, t) {
        (t == null || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function Q5(e, t) {
        var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
        if (n) return (n = n.call(e)).next.bind(n);
        if (Array.isArray(e) || (n = vT(e)) || t && e && typeof e.length == "number") {
            n && (e = n);
            var r = 0;
            return function() {
                return r >= e.length ? {
                    done: !0
                } : {
                    done: !1,
                    value: e[r++]
                }
            }
        }
        throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
    }

    function gT(e, t) {
        if (typeof e != "object" || e === null) return e;
        var n = e[Symbol.toPrimitive];
        if (n !== void 0) {
            var r = n.call(e, t || "default");
            if (typeof r != "object") return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return (t === "string" ? String : Number)(e)
    }

    function yT(e) {
        var t = gT(e, "string");
        return typeof t == "symbol" ? t : String(t)
    }
    var Zr = Symbol("mobx-stored-annotations");

    function Ir(e) {
        function t(n, r) {
            Bi(n, r, e)
        }
        return Object.assign(t, e)
    }

    function Bi(e, t, n) {
        if (i1(e, Zr) || Ws(e, Zr, X5({}, e[Zr])), !1) var r;
        _T(e, n, t), ZT(n) || (e[Zr][t] = n)
    }

    function _T(e, t, n) {
        if (!1) var r, i, s
    }

    function wT(e) {
        return i1(e, Zr) || Ws(e, Zr, X5({}, e[Zr])), e[Zr]
    }
    var ce = Symbol("mobx administration"),
        Ui = function() {
            function e(n) {
                n === void 0 && (n = "Atom"), this.name_ = void 0, this.isPendingUnobservation_ = !1, this.isBeingObserved_ = !1, this.observers_ = new Set, this.diffValue_ = 0, this.lastAccessedBy_ = 0, this.lowestObserverState_ = xe.NOT_TRACKING_, this.onBOL = void 0, this.onBUOL = void 0, this.name_ = n
            }
            var t = e.prototype;
            return t.onBO = function() {
                this.onBOL && this.onBOL.forEach(function(r) {
                    return r()
                })
            }, t.onBUO = function() {
                this.onBUOL && this.onBUOL.forEach(function(r) {
                    return r()
                })
            }, t.reportObserved = function() {
                return ev(this)
            }, t.reportChanged = function() {
                _n(), tv(this), wn()
            }, t.toString = function() {
                return this.name_
            }, e
        }(),
        l3 = J1("Atom", Ui);

    function Qs(e, t, n) {
        t === void 0 && (t = K5), n === void 0 && (n = K5);
        var r = new Ui(e);
        return t !== K5 && ZI(r, t), n !== K5 && uv(r, n), r
    }

    function ET(e, t) {
        return e === t
    }

    function AT(e, t) {
        return v3(e, t)
    }

    function bT(e, t) {
        return v3(e, t, 1)
    }

    function CT(e, t) {
        return Object.is ? Object.is(e, t) : e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t
    }
    var Y5 = {
        identity: ET,
        structural: AT,
        default: CT,
        shallow: bT
    };

    function J5(e, t, n) {
        return d3(e) ? e : Array.isArray(e) ? Ye.array(e, {
            name: n
        }) : X1(e) ? Ye.object(e, void 0, {
            name: n
        }) : na(e) ? Ye.map(e, {
            name: n
        }) : Fi(e) ? Ye.set(e, {
            name: n
        }) : typeof e == "function" && !f3(e) && !Gs(e) ? O9(e) ? Vi(e) : Ni(n, e) : e
    }

    function xT(e, t, n) {
        if (e == null || B0(e) || ia(e) || c1(e) || j0(e)) return e;
        if (Array.isArray(e)) return Ye.array(e, {
            name: n,
            deep: !1
        });
        if (X1(e)) return Ye.object(e, void 0, {
            name: n,
            deep: !1
        });
        if (na(e)) return Ye.map(e, {
            name: n,
            deep: !1
        });
        if (Fi(e)) return Ye.set(e, {
            name: n,
            deep: !1
        })
    }

    function Xs(e) {
        return e
    }

    function ST(e, t) {
        return v3(e, t) ? t : e
    }
    var MT = "override";

    function ZT(e) {
        return e.annotationType_ === MT
    }

    function ji(e, t) {
        return {
            annotationType_: e,
            options_: t,
            make_: TT,
            extend_: IT
        }
    }

    function TT(e, t, n, r) {
        var i;
        if ((i = this.options_) != null && i.bound) return this.extend_(e, t, n, !1) === null ? 0 : 1;
        if (r === e.target_) return this.extend_(e, t, n, !1) === null ? 0 : 2;
        if (f3(n.value)) return 1;
        var s = V9(e, this, t, n, !1);
        return Tr(r, t, s), 2
    }

    function IT(e, t, n, r) {
        var i = V9(e, this, t, n);
        return e.defineProperty_(t, i, r)
    }

    function kT(e, t, n, r) {
        var i = t.annotationType_,
            s = r.value
    }

    function V9(e, t, n, r, i) {
        var s, c, u, f, p, h, w;
        i === void 0 && (i = W.safeDescriptors), kT(e, t, n, r);
        var v = r.value;
        if ((s = t.options_) != null && s.bound) {
            var _;
            v = v.bind((_ = e.proxy_) != null ? _ : e.target_)
        }
        return {
            value: ea((c = (u = t.options_) == null ? void 0 : u.name) != null ? c : n.toString(), v, (f = (p = t.options_) == null ? void 0 : p.autoAction) != null ? f : !1, (h = t.options_) != null && h.bound ? (w = e.proxy_) != null ? w : e.target_ : void 0),
            configurable: i ? e.isPlainObject_ : !0,
            enumerable: !1,
            writable: !i
        }
    }

    function H9(e, t) {
        return {
            annotationType_: e,
            options_: t,
            make_: OT,
            extend_: LT
        }
    }

    function OT(e, t, n, r) {
        var i;
        if (r === e.target_) return this.extend_(e, t, n, !1) === null ? 0 : 2;
        if ((i = this.options_) != null && i.bound && (!i1(e.target_, t) || !Gs(e.target_[t])) && this.extend_(e, t, n, !1) === null) return 0;
        if (Gs(n.value)) return 1;
        var s = D9(e, this, t, n, !1, !1);
        return Tr(r, t, s), 2
    }

    function LT(e, t, n, r) {
        var i, s = D9(e, this, t, n, (i = this.options_) == null ? void 0 : i.bound);
        return e.defineProperty_(t, s, r)
    }

    function RT(e, t, n, r) {
        var i = t.annotationType_,
            s = r.value
    }

    function D9(e, t, n, r, i, s) {
        s === void 0 && (s = W.safeDescriptors), RT(e, t, n, r);
        var c = r.value;
        if (Gs(c) || (c = Vi(c)), i) {
            var u;
            c = c.bind((u = e.proxy_) != null ? u : e.target_), c.isMobXFlow = !0
        }
        return {
            value: c,
            configurable: s ? e.isPlainObject_ : !0,
            enumerable: !1,
            writable: !s
        }
    }

    function c3(e, t) {
        return {
            annotationType_: e,
            options_: t,
            make_: PT,
            extend_: NT
        }
    }

    function PT(e, t, n) {
        return this.extend_(e, t, n, !1) === null ? 0 : 1
    }

    function NT(e, t, n, r) {
        return VT(e, this, t, n), e.defineComputedProperty_(t, X5({}, this.options_, {
            get: n.get,
            set: n.set
        }), r)
    }

    function VT(e, t, n, r) {
        var i = t.annotationType_,
            s = r.get
    }

    function Ys(e, t) {
        return {
            annotationType_: e,
            options_: t,
            make_: HT,
            extend_: DT
        }
    }

    function HT(e, t, n) {
        return this.extend_(e, t, n, !1) === null ? 0 : 1
    }

    function DT(e, t, n, r) {
        var i, s;
        return FT(e, this, t, n), e.defineObservableProperty_(t, n.value, (i = (s = this.options_) == null ? void 0 : s.enhancer) != null ? i : J5, r)
    }

    function FT(e, t, n, r) {
        var i = t.annotationType_
    }
    var BT = "true",
        UT = F9();

    function F9(e) {
        return {
            annotationType_: BT,
            options_: e,
            make_: jT,
            extend_: GT
        }
    }

    function jT(e, t, n, r) {
        var i, s;
        if (n.get) return Js.make_(e, t, n, r);
        if (n.set) {
            var c = ea(t.toString(), n.set);
            return r === e.target_ ? e.defineProperty_(t, {
                configurable: W.safeDescriptors ? e.isPlainObject_ : !0,
                set: c
            }) === null ? 0 : 2 : (Tr(r, t, {
                configurable: !0,
                set: c
            }), 2)
        }
        if (r !== e.target_ && typeof n.value == "function") {
            var u;
            if (O9(n.value)) {
                var f, p = (f = this.options_) != null && f.autoBind ? Vi.bound : Vi;
                return p.make_(e, t, n, r)
            }
            var h = (u = this.options_) != null && u.autoBind ? Ni.bound : Ni;
            return h.make_(e, t, n, r)
        }
        var w = ((i = this.options_) == null ? void 0 : i.deep) === !1 ? Ye.ref : Ye;
        if (typeof n.value == "function" && (s = this.options_) != null && s.autoBind) {
            var v;
            n.value = n.value.bind((v = e.proxy_) != null ? v : e.target_)
        }
        return w.make_(e, t, n, r)
    }

    function GT(e, t, n, r) {
        var i, s;
        if (n.get) return Js.extend_(e, t, n, r);
        if (n.set) return e.defineProperty_(t, {
            configurable: W.safeDescriptors ? e.isPlainObject_ : !0,
            set: ea(t.toString(), n.set)
        }, r);
        if (typeof n.value == "function" && (i = this.options_) != null && i.autoBind) {
            var c;
            n.value = n.value.bind((c = e.proxy_) != null ? c : e.target_)
        }
        var u = ((s = this.options_) == null ? void 0 : s.deep) === !1 ? Ye.ref : Ye;
        return u.extend_(e, t, n, r)
    }
    var zT = "observable",
        $T = "observable.ref",
        qT = "observable.shallow",
        WT = "observable.struct",
        B9 = {
            deep: !0,
            name: void 0,
            defaultDecorator: void 0,
            proxy: !0
        };
    Object.freeze(B9);

    function Ls(e) {
        return e || B9
    }
    var U9 = Ys(zT),
        KT = Ys($T, {
            enhancer: Xs
        }),
        QT = Ys(qT, {
            enhancer: xT
        }),
        XT = Ys(WT, {
            enhancer: ST
        }),
        j9 = Ir(U9);

    function Rs(e) {
        return e.deep === !0 ? J5 : e.deep === !1 ? Xs : JT(e.defaultDecorator)
    }

    function YT(e) {
        var t;
        return e ? (t = e.defaultDecorator) != null ? t : F9(e) : void 0
    }

    function JT(e) {
        var t, n;
        return e && (t = (n = e.options_) == null ? void 0 : n.enhancer) != null ? t : J5
    }

    function G9(e, t, n) {
        if (F0(t)) {
            Bi(e, t, U9);
            return
        }
        return d3(e) ? e : X1(e) ? Ye.object(e, t, n) : Array.isArray(e) ? Ye.array(e, t) : na(e) ? Ye.map(e, t) : Fi(e) ? Ye.set(e, t) : typeof e == "object" && e !== null ? e : Ye.box(e, t)
    }
    T9(G9, j9);
    var eI = {
            box: function(t, n) {
                var r = Ls(n);
                return new H0(t, Rs(r), r.name, !0, r.equals)
            },
            array: function(t, n) {
                var r = Ls(n);
                return (W.useProxies === !1 || r.proxy === !1 ? YI : jI)(t, Rs(r), r.name)
            },
            map: function(t, n) {
                var r = Ls(n);
                return new yv(t, Rs(r), r.name)
            },
            set: function(t, n) {
                var r = Ls(n);
                return new Ev(t, Rs(r), r.name)
            },
            object: function(t, n, r) {
                return kI(W.useProxies === !1 || r?.proxy === !1 ? n7({}, r) : FI({}, r), t, n)
            },
            ref: Ir(KT),
            shallow: Ir(QT),
            deep: j9,
            struct: Ir(XT)
        },
        Ye = T9(G9, eI),
        z9 = "computed",
        tI = "computed.struct",
        $9 = c3(z9),
        nI = c3(tI, {
            equals: Y5.structural
        }),
        Js = function(t, n) {
            if (F0(n)) return Bi(t, n, $9);
            if (X1(t)) return Ir(c3(z9, t));
            var r = X1(n) ? n : {};
            return r.get = t, r.name || (r.name = t.name || ""), new Pi(r)
        };
    Object.assign(Js, $9);
    Js.struct = Ir(nI);
    var v9, g9, Bs = 0,
        rI = 1,
        aI = (v9 = (g9 = Fs(function() {}, "name")) == null ? void 0 : g9.configurable) != null ? v9 : !1,
        y9 = {
            value: "action",
            configurable: !0,
            writable: !1,
            enumerable: !1
        };

    function ea(e, t, n, r) {
        n === void 0 && (n = !1);

        function i() {
            return iI(e, n, t, r || this, arguments)
        }
        return i.isMobxAction = !0, aI && (y9.value = e, Tr(i, "name", y9)), i
    }

    function iI(e, t, n, r, i) {
        var s = oI(e, t, r, i);
        try {
            return n.apply(r, i)
        } catch (c) {
            throw s.error_ = c, c
        } finally {
            sI(s)
        }
    }

    function oI(e, t, n, r) {
        var i = !1,
            s = 0;
        if (!1) var c;
        var u = W.trackingDerivation,
            f = !t || !u;
        _n();
        var p = W.allowStateChanges;
        f && (ra(), p = Gi(!0));
        var h = U0(!0),
            w = {
                runAsAction_: f,
                prevDerivation_: u,
                prevAllowStateChanges_: p,
                prevAllowStateReads_: h,
                notifySpy_: i,
                startTime_: s,
                actionId_: rI++,
                parentActionId_: Bs
            };
        return Bs = w.actionId_, w
    }

    function sI(e) {
        Bs !== e.actionId_ && Ae(30), Bs = e.parentActionId_, e.error_ !== void 0 && (W.suppressReactionErrors = !0), zi(e.prevAllowStateChanges_), o1(e.prevAllowStateReads_), wn(), e.runAsAction_ && Q1(e.prevDerivation_), W.suppressReactionErrors = !1
    }

    function e7(e, t) {
        var n = Gi(e);
        try {
            return t()
        } finally {
            zi(n)
        }
    }

    function Gi(e) {
        var t = W.allowStateChanges;
        return W.allowStateChanges = e, t
    }

    function zi(e) {
        W.allowStateChanges = e
    }
    var q9;
    q9 = Symbol.toPrimitive;
    var H0 = function(e) {
            N9(t, e);

            function t(r, i, s, c, u) {
                var f;
                return s === void 0 && (s = "ObservableValue"), c === void 0 && (c = !0), u === void 0 && (u = Y5.default), f = e.call(this, s) || this, f.enhancer = void 0, f.name_ = void 0, f.equals = void 0, f.hasUnreportedChange_ = !1, f.interceptors_ = void 0, f.changeListeners_ = void 0, f.value_ = void 0, f.dehancer = void 0, f.enhancer = i, f.name_ = s, f.equals = u, f.value_ = i(r, void 0, s), f
            }
            var n = t.prototype;
            return n.dehanceValue = function(i) {
                return this.dehancer !== void 0 ? this.dehancer(i) : i
            }, n.set = function(i) {
                var s = this.value_;
                if (i = this.prepareNewValue_(i), i !== W.UNCHANGED) {
                    var c = D0();
                    this.setNewValue_(i)
                }
            }, n.prepareNewValue_ = function(i) {
                if (ta(this), Fn(this)) {
                    var s = Bn(this, {
                        object: this,
                        type: kr,
                        newValue: i
                    });
                    if (!s) return W.UNCHANGED;
                    i = s.newValue
                }
                return i = this.enhancer(i, this.value_, this.name_), this.equals(this.value_, i) ? W.UNCHANGED : i
            }, n.setNewValue_ = function(i) {
                var s = this.value_;
                this.value_ = i, this.reportChanged(), or(this) && sr(this, {
                    type: kr,
                    object: this,
                    newValue: i,
                    oldValue: s
                })
            }, n.get = function() {
                return this.reportObserved(), this.dehanceValue(this.value_)
            }, n.intercept_ = function(i) {
                return qi(this, i)
            }, n.observe_ = function(i, s) {
                return s && i({
                    observableKind: "value",
                    debugObjectName: this.name_,
                    object: this,
                    type: kr,
                    newValue: this.value_,
                    oldValue: void 0
                }), Wi(this, i)
            }, n.raw = function() {
                return this.value_
            }, n.toJSON = function() {
                return this.get()
            }, n.toString = function() {
                return this.name_ + "[" + this.value_ + "]"
            }, n.valueOf = function() {
                return P9(this.get())
            }, n[q9] = function() {
                return this.valueOf()
            }, t
        }(Ui),
        lI = J1("ObservableValue", H0),
        W9;
    W9 = Symbol.toPrimitive;
    var Pi = function() {
            function e(n) {
                this.dependenciesState_ = xe.NOT_TRACKING_, this.observing_ = [], this.newObserving_ = null, this.isBeingObserved_ = !1, this.isPendingUnobservation_ = !1, this.observers_ = new Set, this.diffValue_ = 0, this.runId_ = 0, this.lastAccessedBy_ = 0, this.lowestObserverState_ = xe.UP_TO_DATE_, this.unboundDepsCount_ = 0, this.value_ = new Us(null), this.name_ = void 0, this.triggeredBy_ = void 0, this.isComputing_ = !1, this.isRunningSetter_ = !1, this.derivation = void 0, this.setter_ = void 0, this.isTracing_ = K1.NONE, this.scope_ = void 0, this.equals_ = void 0, this.requiresReaction_ = void 0, this.keepAlive_ = void 0, this.onBOL = void 0, this.onBUOL = void 0, n.get || Ae(31), this.derivation = n.get, this.name_ = n.name || "ComputedValue", n.set && (this.setter_ = ea("ComputedValue-setter", n.set)), this.equals_ = n.equals || (n.compareStructural || n.struct ? Y5.structural : Y5.default), this.scope_ = n.context, this.requiresReaction_ = n.requiresReaction, this.keepAlive_ = !!n.keepAlive
            }
            var t = e.prototype;
            return t.onBecomeStale_ = function() {
                hI(this)
            }, t.onBO = function() {
                this.onBOL && this.onBOL.forEach(function(r) {
                    return r()
                })
            }, t.onBUO = function() {
                this.onBUOL && this.onBUOL.forEach(function(r) {
                    return r()
                })
            }, t.get = function() {
                if (this.isComputing_ && Ae(32, this.name_, this.derivation), W.inBatch === 0 && this.observers_.size === 0 && !this.keepAlive_) e3(this) && (this.warnAboutUntrackedRead_(), _n(), this.value_ = this.computeValue_(!1), wn());
                else if (ev(this), e3(this)) {
                    var r = W.trackingContext;
                    this.keepAlive_ && !r && (W.trackingContext = this), this.trackAndCompute() && dI(this), W.trackingContext = r
                }
                var i = this.value_;
                if (Vs(i)) throw i.cause;
                return i
            }, t.set = function(r) {
                if (this.setter_) {
                    this.isRunningSetter_ && Ae(33, this.name_), this.isRunningSetter_ = !0;
                    try {
                        this.setter_.call(this.scope_, r)
                    } finally {
                        this.isRunningSetter_ = !1
                    }
                } else Ae(34, this.name_)
            }, t.trackAndCompute = function() {
                var r = this.value_,
                    i = this.dependenciesState_ === xe.NOT_TRACKING_,
                    s = this.computeValue_(!0),
                    c = i || Vs(r) || Vs(s) || !this.equals_(r, s);
                return c && (this.value_ = s), c
            }, t.computeValue_ = function(r) {
                this.isComputing_ = !0;
                var i = Gi(!1),
                    s;
                if (r) s = K9(this, this.derivation, this.scope_);
                else if (W.disableErrorBoundaries === !0) s = this.derivation.call(this.scope_);
                else try {
                    s = this.derivation.call(this.scope_)
                } catch (c) {
                    s = new Us(c)
                }
                return zi(i), this.isComputing_ = !1, s
            }, t.suspend_ = function() {
                this.keepAlive_ || (t3(this), this.value_ = void 0)
            }, t.observe_ = function(r, i) {
                var s = this,
                    c = !0,
                    u = void 0;
                return bI(function() {
                    var f = s.get();
                    if (!c || i) {
                        var p = ra();
                        r({
                            observableKind: "computed",
                            debugObjectName: s.name_,
                            type: kr,
                            object: s,
                            newValue: f,
                            oldValue: u
                        }), Q1(p)
                    }
                    c = !1, u = f
                })
            }, t.warnAboutUntrackedRead_ = function() {}, t.toString = function() {
                return this.name_ + "[" + this.derivation.toString() + "]"
            }, t.valueOf = function() {
                return P9(this.get())
            }, t[W9] = function() {
                return this.valueOf()
            }, e
        }(),
        $i = J1("ComputedValue", Pi),
        xe;
    (function(e) {
        e[e.NOT_TRACKING_ = -1] = "NOT_TRACKING_", e[e.UP_TO_DATE_ = 0] = "UP_TO_DATE_", e[e.POSSIBLY_STALE_ = 1] = "POSSIBLY_STALE_", e[e.STALE_ = 2] = "STALE_"
    })(xe || (xe = {}));
    var K1;
    (function(e) {
        e[e.NONE = 0] = "NONE", e[e.LOG = 1] = "LOG", e[e.BREAK = 2] = "BREAK"
    })(K1 || (K1 = {}));
    var Us = function(t) {
        this.cause = void 0, this.cause = t
    };

    function Vs(e) {
        return e instanceof Us
    }

    function e3(e) {
        switch (e.dependenciesState_) {
            case xe.UP_TO_DATE_:
                return !1;
            case xe.NOT_TRACKING_:
            case xe.STALE_:
                return !0;
            case xe.POSSIBLY_STALE_: {
                for (var t = U0(!0), n = ra(), r = e.observing_, i = r.length, s = 0; s < i; s++) {
                    var c = r[s];
                    if ($i(c)) {
                        if (W.disableErrorBoundaries) c.get();
                        else try {
                            c.get()
                        } catch {
                            return Q1(n), o1(t), !0
                        }
                        if (e.dependenciesState_ === xe.STALE_) return Q1(n), o1(t), !0
                    }
                }
                return Q9(e), Q1(n), o1(t), !1
            }
        }
    }

    function ta(e) {
        return;
        var t
    }

    function K9(e, t, n) {
        var r = U0(!0);
        Q9(e), e.newObserving_ = new Array(e.observing_.length + 100), e.unboundDepsCount_ = 0, e.runId_ = ++W.runId;
        var i = W.trackingDerivation;
        W.trackingDerivation = e, W.inBatch++;
        var s;
        if (W.disableErrorBoundaries === !0) s = t.call(n);
        else try {
            s = t.call(n)
        } catch (c) {
            s = new Us(c)
        }
        return W.inBatch--, W.trackingDerivation = i, cI(e), o1(r), s
    }

    function cI(e) {
        for (var t = e.observing_, n = e.observing_ = e.newObserving_, r = xe.UP_TO_DATE_, i = 0, s = e.unboundDepsCount_, c = 0; c < s; c++) {
            var u = n[c];
            u.diffValue_ === 0 && (u.diffValue_ = 1, i !== c && (n[i] = u), i++), u.dependenciesState_ > r && (r = u.dependenciesState_)
        }
        for (n.length = i, e.newObserving_ = null, s = t.length; s--;) {
            var f = t[s];
            f.diffValue_ === 0 && Y9(f, e), f.diffValue_ = 0
        }
        for (; i--;) {
            var p = n[i];
            p.diffValue_ === 1 && (p.diffValue_ = 0, fI(p, e))
        }
        r !== xe.UP_TO_DATE_ && (e.dependenciesState_ = r, e.onBecomeStale_())
    }

    function t3(e) {
        var t = e.observing_;
        e.observing_ = [];
        for (var n = t.length; n--;) Y9(t[n], e);
        e.dependenciesState_ = xe.NOT_TRACKING_
    }

    function u3(e) {
        var t = ra();
        try {
            return e()
        } finally {
            Q1(t)
        }
    }

    function ra() {
        var e = W.trackingDerivation;
        return W.trackingDerivation = null, e
    }

    function Q1(e) {
        W.trackingDerivation = e
    }

    function U0(e) {
        var t = W.allowStateReads;
        return W.allowStateReads = e, t
    }

    function o1(e) {
        W.allowStateReads = e
    }

    function Q9(e) {
        if (e.dependenciesState_ !== xe.UP_TO_DATE_) {
            e.dependenciesState_ = xe.UP_TO_DATE_;
            for (var t = e.observing_, n = t.length; n--;) t[n].lowestObserverState_ = xe.UP_TO_DATE_
        }
    }
    var Hs = function() {
            this.version = 6, this.UNCHANGED = {}, this.trackingDerivation = null, this.trackingContext = null, this.runId = 0, this.mobxGuid = 0, this.inBatch = 0, this.pendingUnobservations = [], this.pendingReactions = [], this.isRunningReactions = !1, this.allowStateChanges = !1, this.allowStateReads = !0, this.enforceActions = !0, this.spyListeners = [], this.globalReactionErrorHandlers = [], this.computedRequiresReaction = !1, this.reactionRequiresObservable = !1, this.observableRequiresReaction = !1, this.disableErrorBoundaries = !1, this.suppressReactionErrors = !1, this.useProxies = !0, this.verifyProxies = !1, this.safeDescriptors = !0
        },
        Ds = !0,
        X9 = !1,
        W = function() {
            var e = i3();
            return e.__mobxInstanceCount > 0 && !e.__mobxGlobals && (Ds = !1), e.__mobxGlobals && e.__mobxGlobals.version !== new Hs().version && (Ds = !1), Ds ? e.__mobxGlobals ? (e.__mobxInstanceCount += 1, e.__mobxGlobals.UNCHANGED || (e.__mobxGlobals.UNCHANGED = {}), e.__mobxGlobals) : (e.__mobxInstanceCount = 1, e.__mobxGlobals = new Hs) : (setTimeout(function() {
                X9 || Ae(35)
            }, 1), new Hs)
        }();

    function uI() {
        if ((W.pendingReactions.length || W.inBatch || W.isRunningReactions) && Ae(36), X9 = !0, Ds) {
            var e = i3();
            --e.__mobxInstanceCount === 0 && (e.__mobxGlobals = void 0), W = new Hs
        }
    }

    function fI(e, t) {
        e.observers_.add(t), e.lowestObserverState_ > t.dependenciesState_ && (e.lowestObserverState_ = t.dependenciesState_)
    }

    function Y9(e, t) {
        e.observers_.delete(t), e.observers_.size === 0 && J9(e)
    }

    function J9(e) {
        e.isPendingUnobservation_ === !1 && (e.isPendingUnobservation_ = !0, W.pendingUnobservations.push(e))
    }

    function _n() {
        W.inBatch++
    }

    function wn() {
        if (--W.inBatch === 0) {
            nv();
            for (var e = W.pendingUnobservations, t = 0; t < e.length; t++) {
                var n = e[t];
                n.isPendingUnobservation_ = !1, n.observers_.size === 0 && (n.isBeingObserved_ && (n.isBeingObserved_ = !1, n.onBUO()), n instanceof Pi && n.suspend_())
            }
            W.pendingUnobservations = []
        }
    }

    function ev(e) {
        var t = W.trackingDerivation;
        return t !== null ? (t.runId_ !== e.lastAccessedBy_ && (e.lastAccessedBy_ = t.runId_, t.newObserving_[t.unboundDepsCount_++] = e, !e.isBeingObserved_ && W.trackingContext && (e.isBeingObserved_ = !0, e.onBO())), e.isBeingObserved_) : (e.observers_.size === 0 && W.inBatch > 0 && J9(e), !1)
    }

    function tv(e) {
        e.lowestObserverState_ !== xe.STALE_ && (e.lowestObserverState_ = xe.STALE_, e.observers_.forEach(function(t) {
            t.dependenciesState_ === xe.UP_TO_DATE_ && t.onBecomeStale_(), t.dependenciesState_ = xe.STALE_
        }))
    }

    function dI(e) {
        e.lowestObserverState_ !== xe.STALE_ && (e.lowestObserverState_ = xe.STALE_, e.observers_.forEach(function(t) {
            t.dependenciesState_ === xe.POSSIBLY_STALE_ ? t.dependenciesState_ = xe.STALE_ : t.dependenciesState_ === xe.UP_TO_DATE_ && (e.lowestObserverState_ = xe.UP_TO_DATE_)
        }))
    }

    function hI(e) {
        e.lowestObserverState_ === xe.UP_TO_DATE_ && (e.lowestObserverState_ = xe.POSSIBLY_STALE_, e.observers_.forEach(function(t) {
            t.dependenciesState_ === xe.UP_TO_DATE_ && (t.dependenciesState_ = xe.POSSIBLY_STALE_, t.onBecomeStale_())
        }))
    }
    var s1 = function() {
        function e(n, r, i, s) {
            n === void 0 && (n = "Reaction"), this.name_ = void 0, this.onInvalidate_ = void 0, this.errorHandler_ = void 0, this.requiresObservable_ = void 0, this.observing_ = [], this.newObserving_ = [], this.dependenciesState_ = xe.NOT_TRACKING_, this.diffValue_ = 0, this.runId_ = 0, this.unboundDepsCount_ = 0, this.isDisposed_ = !1, this.isScheduled_ = !1, this.isTrackPending_ = !1, this.isRunning_ = !1, this.isTracing_ = K1.NONE, this.name_ = n, this.onInvalidate_ = r, this.errorHandler_ = i, this.requiresObservable_ = s
        }
        var t = e.prototype;
        return t.onBecomeStale_ = function() {
            this.schedule_()
        }, t.schedule_ = function() {
            this.isScheduled_ || (this.isScheduled_ = !0, W.pendingReactions.push(this), nv())
        }, t.isScheduled = function() {
            return this.isScheduled_
        }, t.runReaction_ = function() {
            if (!this.isDisposed_) {
                _n(), this.isScheduled_ = !1;
                var r = W.trackingContext;
                if (W.trackingContext = this, e3(this)) {
                    this.isTrackPending_ = !0;
                    try {
                        this.onInvalidate_()
                    } catch (i) {
                        this.reportExceptionInDerivation_(i)
                    }
                }
                W.trackingContext = r, wn()
            }
        }, t.track = function(r) {
            if (!this.isDisposed_) {
                _n();
                var i = D0(),
                    s;
                this.isRunning_ = !0;
                var c = W.trackingContext;
                W.trackingContext = this;
                var u = K9(this, r, void 0);
                W.trackingContext = c, this.isRunning_ = !1, this.isTrackPending_ = !1, this.isDisposed_ && t3(this), Vs(u) && this.reportExceptionInDerivation_(u.cause), wn()
            }
        }, t.reportExceptionInDerivation_ = function(r) {
            var i = this;
            if (this.errorHandler_) {
                this.errorHandler_(r, this);
                return
            }
            if (W.disableErrorBoundaries) throw r;
            var s = "[mobx] uncaught error in '" + this + "'";
            W.suppressReactionErrors || console.error(s, r), W.globalReactionErrorHandlers.forEach(function(c) {
                return c(r, i)
            })
        }, t.dispose = function() {
            this.isDisposed_ || (this.isDisposed_ = !0, this.isRunning_ || (_n(), t3(this), wn()))
        }, t.getDisposer_ = function() {
            var r = this.dispose.bind(this);
            return r[ce] = this, r
        }, t.toString = function() {
            return "Reaction[" + this.name_ + "]"
        }, t.trace = function(r) {
            r === void 0 && (r = !1), VI(this, r)
        }, e
    }();
    var pI = 100,
        n3 = function(t) {
            return t()
        };

    function nv() {
        W.inBatch > 0 || W.isRunningReactions || n3(mI)
    }

    function mI() {
        W.isRunningReactions = !0;
        for (var e = W.pendingReactions, t = 0; e.length > 0;) {
            ++t === pI && (console.error("[mobx] cycle in reaction: " + e[0]), e.splice(0));
            for (var n = e.splice(0), r = 0, i = n.length; r < i; r++) n[r].runReaction_()
        }
        W.isRunningReactions = !1
    }
    var js = J1("Reaction", s1);

    function vI(e) {
        var t = n3;
        n3 = function(r) {
            return e(function() {
                return t(r)
            })
        }
    }

    function D0() {
        return !1
    }

    function gI(e) {
        return console.warn("[mobx.spy] Is a no-op in production builds"),
            function() {}
    }
    var rv = "action",
        yI = "action.bound",
        av = "autoAction",
        _I = "autoAction.bound",
        wI = "<unnamed action>",
        iv = ji(rv),
        EI = ji(yI, {
            bound: !0
        }),
        ov = ji(av, {
            autoAction: !0
        }),
        AI = ji(_I, {
            autoAction: !0,
            bound: !0
        });

    function sv(e) {
        var t = function(r, i) {
            if (lr(r)) return ea(r.name || wI, r, e);
            if (lr(i)) return ea(r, i, e);
            if (F0(i)) return Bi(r, i, e ? ov : iv);
            if (F0(r)) return Ir(ji(e ? av : rv, {
                name: r,
                autoAction: e
            }))
        };
        return t
    }
    var V0 = sv(!1);
    Object.assign(V0, iv);
    var Ni = sv(!0);
    Object.assign(Ni, ov);
    V0.bound = Ir(EI);
    Ni.bound = Ir(AI);

    function f3(e) {
        return lr(e) && e.isMobxAction === !0
    }

    function bI(e, t) {
        var n, r;
        t === void 0 && (t = o3);
        var i = (n = (r = t) == null ? void 0 : r.name) != null ? n : "Autorun",
            s = !t.scheduler && !t.delay,
            c;
        if (s) c = new s1(i, function() {
            this.track(p)
        }, t.onError, t.requiresObservable);
        else {
            var u = lv(t),
                f = !1;
            c = new s1(i, function() {
                f || (f = !0, u(function() {
                    f = !1, c.isDisposed_ || c.track(p)
                }))
            }, t.onError, t.requiresObservable)
        }

        function p() {
            e(c)
        }
        return c.schedule_(), c.getDisposer_()
    }
    var CI = function(t) {
        return t()
    };

    function lv(e) {
        return e.scheduler ? e.scheduler : e.delay ? function(t) {
            return setTimeout(t, e.delay)
        } : CI
    }

    function cv(e, t, n) {
        var r;
        n === void 0 && (n = o3);
        var i = (r = n.name) != null ? r : "Reaction",
            s = V0(i, n.onError ? xI(n.onError, t) : t),
            c = !n.scheduler && !n.delay,
            u = lv(n),
            f = !0,
            p = !1,
            h, w, v = n.compareStructural ? Y5.structural : n.equals || Y5.default,
            _ = new s1(i, function() {
                f || c ? S() : p || (p = !0, u(S))
            }, n.onError, n.requiresObservable);

        function S() {
            if (p = !1, !_.isDisposed_) {
                var I = !1;
                _.track(function() {
                    var R = e7(!1, function() {
                        return e(_)
                    });
                    I = f || !v(h, R), w = h, h = R
                }), (f && n.fireImmediately || !f && I) && s(h, w, _), f = !1
            }
        }
        return _.schedule_(), _.getDisposer_()
    }

    function xI(e, t) {
        return function() {
            try {
                return t.apply(this, arguments)
            } catch (n) {
                e.call(this, n)
            }
        }
    }
    var SI = "onBO",
        MI = "onBUO";

    function ZI(e, t, n) {
        return fv(SI, e, t, n)
    }

    function uv(e, t, n) {
        return fv(MI, e, t, n)
    }

    function fv(e, t, n, r) {
        var i = typeof r == "function" ? Y1(t, n) : Y1(t),
            s = lr(r) ? r : n,
            c = e + "L";
        return i[c] ? i[c].add(s) : i[c] = new Set([s]),
            function() {
                var u = i[c];
                u && (u.delete(s), u.size === 0 && delete i[c])
            }
    }
    var TI = "never",
        Ps = "always",
        II = "observed";

    function t7(e) {
        e.isolateGlobalState === !0 && uI();
        var t = e.useProxies,
            n = e.enforceActions;
        if (t !== void 0 && (W.useProxies = t === Ps ? !0 : t === TI ? !1 : typeof Proxy < "u"), t === "ifavailable" && (W.verifyProxies = !0), n !== void 0) {
            var r = n === Ps ? Ps : n === II;
            W.enforceActions = r, W.allowStateChanges = !(r === !0 || r === Ps)
        } ["computedRequiresReaction", "reactionRequiresObservable", "observableRequiresReaction", "disableErrorBoundaries", "safeDescriptors"].forEach(function(i) {
            i in e && (W[i] = !!e[i])
        }), W.allowStateReads = !W.observableRequiresReaction, e.reactionScheduler && vI(e.reactionScheduler)
    }

    function kI(e, t, n, r) {
        var i = mT(t),
            s = n7(e, r)[ce];
        _n();
        try {
            Ks(i).forEach(function(c) {
                s.extend_(c, i[c], n && c in n ? n[c] : !0)
            })
        } finally {
            wn()
        }
        return e
    }

    function dv(e, t) {
        return hv(Y1(e, t))
    }

    function hv(e) {
        var t = {
            name: e.name_
        };
        return e.observing_ && e.observing_.length > 0 && (t.dependencies = OI(e.observing_).map(hv)), t
    }

    function OI(e) {
        return Array.from(new Set(e))
    }
    var LI = 0;

    function pv() {
        this.message = "FLOW_CANCELLED"
    }
    pv.prototype = Object.create(Error.prototype);
    var _9 = H9("flow"),
        RI = H9("flow.bound", {
            bound: !0
        }),
        Vi = Object.assign(function(t, n) {
            if (F0(n)) return Bi(t, n, _9);
            var r = t,
                i = r.name || "<unnamed flow>",
                s = function() {
                    var u = this,
                        f = arguments,
                        p = ++LI,
                        h = V0(i + " - runid: " + p + " - init", r).apply(u, f),
                        w, v = void 0,
                        _ = new Promise(function(S, I) {
                            var R = 0;
                            w = I;

                            function b(Z) {
                                v = void 0;
                                var T;
                                try {
                                    T = V0(i + " - runid: " + p + " - yield " + R++, h.next).call(h, Z)
                                } catch (P) {
                                    return I(P)
                                }
                                x(T)
                            }

                            function C(Z) {
                                v = void 0;
                                var T;
                                try {
                                    T = V0(i + " - runid: " + p + " - yield " + R++, h.throw).call(h, Z)
                                } catch (P) {
                                    return I(P)
                                }
                                x(T)
                            }

                            function x(Z) {
                                if (lr(Z?.then)) {
                                    Z.then(x, I);
                                    return
                                }
                                return Z.done ? S(Z.value) : (v = Promise.resolve(Z.value), v.then(b, C))
                            }
                            b(void 0)
                        });
                    return _.cancel = V0(i + " - runid: " + p + " - cancel", function() {
                        try {
                            v && w9(v);
                            var S = h.return(void 0),
                                I = Promise.resolve(S.value);
                            I.then(K5, K5), w9(I), w(new pv)
                        } catch (R) {
                            w(R)
                        }
                    }), _
                };
            return s.isMobXFlow = !0, s
        }, _9);
    Vi.bound = Ir(RI);

    function w9(e) {
        lr(e.cancel) && e.cancel()
    }

    function Gs(e) {
        return e?.isMobXFlow === !0
    }

    function PI(e, t) {
        return e ? t !== void 0 ? B0(e) ? e[ce].values_.has(t) : !1 : B0(e) || !!e[ce] || l3(e) || js(e) || $i(e) : !1
    }

    function d3(e) {
        return PI(e)
    }

    function NI(e) {
        if (B0(e)) return e[ce].ownKeys_();
        Ae(38)
    }

    function Ns(e, t, n) {
        return e.set(t, n), n
    }

    function W5(e, t) {
        if (e == null || typeof e != "object" || e instanceof Date || !d3(e)) return e;
        if (lI(e) || $i(e)) return W5(e.get(), t);
        if (t.has(e)) return t.get(e);
        if (ia(e)) {
            var n = Ns(t, e, new Array(e.length));
            return e.forEach(function(c, u) {
                n[u] = W5(c, t)
            }), n
        }
        if (j0(e)) {
            var r = Ns(t, e, new Set);
            return e.forEach(function(c) {
                r.add(W5(c, t))
            }), r
        }
        if (c1(e)) {
            var i = Ns(t, e, new Map);
            return e.forEach(function(c, u) {
                i.set(u, W5(c, t))
            }), i
        } else {
            var s = Ns(t, e, {});
            return NI(e).forEach(function(c) {
                Di.propertyIsEnumerable.call(e, c) && (s[c] = W5(e[c], t))
            }), s
        }
    }

    function h3(e, t) {
        return W5(e, new Map)
    }

    function VI() {
        Ae("trace() is not available in production builds");
        for (var e = !1, t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
        typeof n[n.length - 1] == "boolean" && (e = n.pop());
        var i = HI(n);
        if (!i) return Ae("'trace(break?)' can only be used inside a tracked computed value or a Reaction. Consider passing in the computed value or reaction explicitly");
        i.isTracing_ === K1.NONE && console.log("[mobx.trace] '" + i.name_ + "' tracing enabled"), i.isTracing_ = e ? K1.BREAK : K1.LOG
    }

    function HI(e) {
        switch (e.length) {
            case 0:
                return W.trackingDerivation;
            case 1:
                return Y1(e[0]);
            case 2:
                return Y1(e[0], e[1])
        }
    }

    function a1(e, t) {
        t === void 0 && (t = void 0), _n();
        try {
            return e.apply(t)
        } finally {
            wn()
        }
    }

    function q5(e) {
        return e[ce]
    }
    var DI = {
        has: function(t, n) {
            return q5(t).has_(n)
        },
        get: function(t, n) {
            return q5(t).get_(n)
        },
        set: function(t, n, r) {
            var i;
            return F0(n) ? (i = q5(t).set_(n, r, !0)) != null ? i : !0 : !1
        },
        deleteProperty: function(t, n) {
            var r;
            return F0(n) ? (r = q5(t).delete_(n, !0)) != null ? r : !0 : !1
        },
        defineProperty: function(t, n, r) {
            var i;
            return (i = q5(t).defineProperty_(n, r)) != null ? i : !0
        },
        ownKeys: function(t) {
            return q5(t).ownKeys_()
        },
        preventExtensions: function(t) {
            Ae(13)
        }
    };

    function FI(e, t) {
        var n, r;
        return I9(), e = n7(e, t), (r = (n = e[ce]).proxy_) != null ? r : n.proxy_ = new Proxy(e, DI)
    }

    function Fn(e) {
        return e.interceptors_ !== void 0 && e.interceptors_.length > 0
    }

    function qi(e, t) {
        var n = e.interceptors_ || (e.interceptors_ = []);
        return n.push(t), k9(function() {
            var r = n.indexOf(t);
            r !== -1 && n.splice(r, 1)
        })
    }

    function Bn(e, t) {
        var n = ra();
        try {
            for (var r = [].concat(e.interceptors_ || []), i = 0, s = r.length; i < s && (t = r[i](t), t && !t.type && Ae(14), !!t); i++);
            return t
        } finally {
            Q1(n)
        }
    }

    function or(e) {
        return e.changeListeners_ !== void 0 && e.changeListeners_.length > 0
    }

    function Wi(e, t) {
        var n = e.changeListeners_ || (e.changeListeners_ = []);
        return n.push(t), k9(function() {
            var r = n.indexOf(t);
            r !== -1 && n.splice(r, 1)
        })
    }

    function sr(e, t) {
        var n = ra(),
            r = e.changeListeners_;
        if (r) {
            r = r.slice();
            for (var i = 0, s = r.length; i < s; i++) r[i](t);
            Q1(n)
        }
    }

    function aa(e, t, n) {
        var r = n7(e, n)[ce];
        _n();
        try {
            var i;
            (i = t) != null || (t = wT(e)), Ks(t).forEach(function(s) {
                return r.make_(s, t[s])
            })
        } finally {
            wn()
        }
        return e
    }
    var E9 = "splice",
        kr = "update",
        BI = 1e4,
        UI = {
            get: function(t, n) {
                var r = t[ce];
                return n === ce ? r : n === "length" ? r.getArrayLength_() : typeof n == "string" && !isNaN(n) ? r.get_(parseInt(n)) : i1(zs, n) ? zs[n] : t[n]
            },
            set: function(t, n, r) {
                var i = t[ce];
                return n === "length" && i.setArrayLength_(r), typeof n == "symbol" || isNaN(n) ? t[n] = r : i.set_(parseInt(n), r), !0
            },
            preventExtensions: function() {
                Ae(15)
            }
        },
        p3 = function() {
            function e(n, r, i, s) {
                n === void 0 && (n = "ObservableArray"), this.owned_ = void 0, this.legacyMode_ = void 0, this.atom_ = void 0, this.values_ = [], this.interceptors_ = void 0, this.changeListeners_ = void 0, this.enhancer_ = void 0, this.dehancer = void 0, this.proxy_ = void 0, this.lastKnownLength_ = 0, this.owned_ = i, this.legacyMode_ = s, this.atom_ = new Ui(n), this.enhancer_ = function(c, u) {
                    return r(c, u, "ObservableArray[..]")
                }
            }
            var t = e.prototype;
            return t.dehanceValue_ = function(r) {
                return this.dehancer !== void 0 ? this.dehancer(r) : r
            }, t.dehanceValues_ = function(r) {
                return this.dehancer !== void 0 && r.length > 0 ? r.map(this.dehancer) : r
            }, t.intercept_ = function(r) {
                return qi(this, r)
            }, t.observe_ = function(r, i) {
                return i === void 0 && (i = !1), i && r({
                    observableKind: "array",
                    object: this.proxy_,
                    debugObjectName: this.atom_.name_,
                    type: "splice",
                    index: 0,
                    added: this.values_.slice(),
                    addedCount: this.values_.length,
                    removed: [],
                    removedCount: 0
                }), Wi(this, r)
            }, t.getArrayLength_ = function() {
                return this.atom_.reportObserved(), this.values_.length
            }, t.setArrayLength_ = function(r) {
                (typeof r != "number" || isNaN(r) || r < 0) && Ae("Out of range: " + r);
                var i = this.values_.length;
                if (r !== i)
                    if (r > i) {
                        for (var s = new Array(r - i), c = 0; c < r - i; c++) s[c] = void 0;
                        this.spliceWithArray_(i, 0, s)
                    } else this.spliceWithArray_(r, i - r)
            }, t.updateArrayLength_ = function(r, i) {
                r !== this.lastKnownLength_ && Ae(16), this.lastKnownLength_ += i, this.legacyMode_ && i > 0 && xv(r + i + 1)
            }, t.spliceWithArray_ = function(r, i, s) {
                var c = this;
                ta(this.atom_);
                var u = this.values_.length;
                if (r === void 0 ? r = 0 : r > u ? r = u : r < 0 && (r = Math.max(0, u + r)), arguments.length === 1 ? i = u - r : i == null ? i = 0 : i = Math.max(0, Math.min(i, u - r)), s === void 0 && (s = Y4), Fn(this)) {
                    var f = Bn(this, {
                        object: this.proxy_,
                        type: E9,
                        index: r,
                        removedCount: i,
                        added: s
                    });
                    if (!f) return Y4;
                    i = f.removedCount, s = f.added
                }
                if (s = s.length === 0 ? s : s.map(function(w) {
                        return c.enhancer_(w, void 0)
                    }), this.legacyMode_) {
                    var p = s.length - i;
                    this.updateArrayLength_(u, p)
                }
                var h = this.spliceItemsIntoValues_(r, i, s);
                return (i !== 0 || s.length !== 0) && this.notifyArraySplice_(r, s, h), this.dehanceValues_(h)
            }, t.spliceItemsIntoValues_ = function(r, i, s) {
                if (s.length < BI) {
                    var c;
                    return (c = this.values_).splice.apply(c, [r, i].concat(s))
                } else {
                    var u = this.values_.slice(r, r + i),
                        f = this.values_.slice(r + i);
                    this.values_.length += s.length - i;
                    for (var p = 0; p < s.length; p++) this.values_[r + p] = s[p];
                    for (var h = 0; h < f.length; h++) this.values_[r + s.length + h] = f[h];
                    return u
                }
            }, t.notifyArrayChildUpdate_ = function(r, i, s) {
                var c = !this.owned_ && D0(),
                    u = or(this),
                    f = u || c ? {
                        observableKind: "array",
                        object: this.proxy_,
                        type: kr,
                        debugObjectName: this.atom_.name_,
                        index: r,
                        newValue: i,
                        oldValue: s
                    } : null;
                this.atom_.reportChanged(), u && sr(this, f)
            }, t.notifyArraySplice_ = function(r, i, s) {
                var c = !this.owned_ && D0(),
                    u = or(this),
                    f = u || c ? {
                        observableKind: "array",
                        object: this.proxy_,
                        debugObjectName: this.atom_.name_,
                        type: E9,
                        index: r,
                        removed: s,
                        added: i,
                        removedCount: s.length,
                        addedCount: i.length
                    } : null;
                this.atom_.reportChanged(), u && sr(this, f)
            }, t.get_ = function(r) {
                if (this.legacyMode_ && r >= this.values_.length) {
                    console.warn("[mobx] Out of bounds read: " + r);
                    return
                }
                return this.atom_.reportObserved(), this.dehanceValue_(this.values_[r])
            }, t.set_ = function(r, i) {
                var s = this.values_;
                if (this.legacyMode_ && r > s.length && Ae(17, r, s.length), r < s.length) {
                    ta(this.atom_);
                    var c = s[r];
                    if (Fn(this)) {
                        var u = Bn(this, {
                            type: kr,
                            object: this.proxy_,
                            index: r,
                            newValue: i
                        });
                        if (!u) return;
                        i = u.newValue
                    }
                    i = this.enhancer_(i, c);
                    var f = i !== c;
                    f && (s[r] = i, this.notifyArrayChildUpdate_(r, i, c))
                } else {
                    for (var p = new Array(r + 1 - s.length), h = 0; h < p.length - 1; h++) p[h] = void 0;
                    p[p.length - 1] = i, this.spliceWithArray_(s.length, 0, p)
                }
            }, e
        }();

    function jI(e, t, n, r) {
        n === void 0 && (n = "ObservableArray"), r === void 0 && (r = !1), I9();
        var i = new p3(n, t, r, !1);
        L9(i.values_, ce, i);
        var s = new Proxy(i.values_, UI);
        if (i.proxy_ = s, e && e.length) {
            var c = Gi(!0);
            i.spliceWithArray_(0, 0, e), zi(c)
        }
        return s
    }
    var zs = {
        clear: function() {
            return this.splice(0)
        },
        replace: function(t) {
            var n = this[ce];
            return n.spliceWithArray_(0, n.values_.length, t)
        },
        toJSON: function() {
            return this.slice()
        },
        splice: function(t, n) {
            for (var r = arguments.length, i = new Array(r > 2 ? r - 2 : 0), s = 2; s < r; s++) i[s - 2] = arguments[s];
            var c = this[ce];
            switch (arguments.length) {
                case 0:
                    return [];
                case 1:
                    return c.spliceWithArray_(t);
                case 2:
                    return c.spliceWithArray_(t, n)
            }
            return c.spliceWithArray_(t, n, i)
        },
        spliceWithArray: function(t, n, r) {
            return this[ce].spliceWithArray_(t, n, r)
        },
        push: function() {
            for (var t = this[ce], n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
            return t.spliceWithArray_(t.values_.length, 0, r), t.values_.length
        },
        pop: function() {
            return this.splice(Math.max(this[ce].values_.length - 1, 0), 1)[0]
        },
        shift: function() {
            return this.splice(0, 1)[0]
        },
        unshift: function() {
            for (var t = this[ce], n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
            return t.spliceWithArray_(0, 0, r), t.values_.length
        },
        reverse: function() {
            return W.trackingDerivation && Ae(37, "reverse"), this.replace(this.slice().reverse()), this
        },
        sort: function() {
            W.trackingDerivation && Ae(37, "sort");
            var t = this.slice();
            return t.sort.apply(t, arguments), this.replace(t), this
        },
        remove: function(t) {
            var n = this[ce],
                r = n.dehanceValues_(n.values_).indexOf(t);
            return r > -1 ? (this.splice(r, 1), !0) : !1
        }
    };
    dt("concat", l1);
    dt("flat", l1);
    dt("includes", l1);
    dt("indexOf", l1);
    dt("join", l1);
    dt("lastIndexOf", l1);
    dt("slice", l1);
    dt("toString", l1);
    dt("toLocaleString", l1);
    dt("every", e0);
    dt("filter", e0);
    dt("find", e0);
    dt("findIndex", e0);
    dt("flatMap", e0);
    dt("forEach", e0);
    dt("map", e0);
    dt("some", e0);
    dt("reduce", mv);
    dt("reduceRight", mv);

    function dt(e, t) {
        typeof Array.prototype[e] == "function" && (zs[e] = t(e))
    }

    function l1(e) {
        return function() {
            var t = this[ce];
            t.atom_.reportObserved();
            var n = t.dehanceValues_(t.values_);
            return n[e].apply(n, arguments)
        }
    }

    function e0(e) {
        return function(t, n) {
            var r = this,
                i = this[ce];
            i.atom_.reportObserved();
            var s = i.dehanceValues_(i.values_);
            return s[e](function(c, u) {
                return t.call(n, c, u, r)
            })
        }
    }

    function mv(e) {
        return function() {
            var t = this,
                n = this[ce];
            n.atom_.reportObserved();
            var r = n.dehanceValues_(n.values_),
                i = arguments[0];
            return arguments[0] = function(s, c, u) {
                return i(s, c, u, t)
            }, r[e].apply(r, arguments)
        }
    }
    var GI = J1("ObservableArrayAdministration", p3);

    function ia(e) {
        return qs(e) && GI(e[ce])
    }
    var vv, gv, zI = {},
        W1 = "add",
        $s = "delete";
    vv = Symbol.iterator;
    gv = Symbol.toStringTag;
    var yv = function() {
            function e(n, r, i) {
                var s = this;
                r === void 0 && (r = J5), i === void 0 && (i = "ObservableMap"), this.enhancer_ = void 0, this.name_ = void 0, this[ce] = zI, this.data_ = void 0, this.hasMap_ = void 0, this.keysAtom_ = void 0, this.interceptors_ = void 0, this.changeListeners_ = void 0, this.dehancer = void 0, this.enhancer_ = r, this.name_ = i, lr(Map) || Ae(18), this.keysAtom_ = Qs("ObservableMap.keys()"), this.data_ = new Map, this.hasMap_ = new Map, e7(!0, function() {
                    s.merge(n)
                })
            }
            var t = e.prototype;
            return t.has_ = function(r) {
                return this.data_.has(r)
            }, t.has = function(r) {
                var i = this;
                if (!W.trackingDerivation) return this.has_(r);
                var s = this.hasMap_.get(r);
                if (!s) {
                    var c = s = new H0(this.has_(r), Xs, "ObservableMap.key?", !1);
                    this.hasMap_.set(r, c), uv(c, function() {
                        return i.hasMap_.delete(r)
                    })
                }
                return s.get()
            }, t.set = function(r, i) {
                var s = this.has_(r);
                if (Fn(this)) {
                    var c = Bn(this, {
                        type: s ? kr : W1,
                        object: this,
                        newValue: i,
                        name: r
                    });
                    if (!c) return this;
                    i = c.newValue
                }
                return s ? this.updateValue_(r, i) : this.addValue_(r, i), this
            }, t.delete = function(r) {
                var i = this;
                if (ta(this.keysAtom_), Fn(this)) {
                    var s = Bn(this, {
                        type: $s,
                        object: this,
                        name: r
                    });
                    if (!s) return !1
                }
                if (this.has_(r)) {
                    var c = D0(),
                        u = or(this),
                        f = u || c ? {
                            observableKind: "map",
                            debugObjectName: this.name_,
                            type: $s,
                            object: this,
                            oldValue: this.data_.get(r).value_,
                            name: r
                        } : null;
                    return a1(function() {
                        var p;
                        i.keysAtom_.reportChanged(), (p = i.hasMap_.get(r)) == null || p.setNewValue_(!1);
                        var h = i.data_.get(r);
                        h.setNewValue_(void 0), i.data_.delete(r)
                    }), u && sr(this, f), !0
                }
                return !1
            }, t.updateValue_ = function(r, i) {
                var s = this.data_.get(r);
                if (i = s.prepareNewValue_(i), i !== W.UNCHANGED) {
                    var c = D0(),
                        u = or(this),
                        f = u || c ? {
                            observableKind: "map",
                            debugObjectName: this.name_,
                            type: kr,
                            object: this,
                            oldValue: s.value_,
                            name: r,
                            newValue: i
                        } : null;
                    s.setNewValue_(i), u && sr(this, f)
                }
            }, t.addValue_ = function(r, i) {
                var s = this;
                ta(this.keysAtom_), a1(function() {
                    var p, h = new H0(i, s.enhancer_, "ObservableMap.key", !1);
                    s.data_.set(r, h), i = h.value_, (p = s.hasMap_.get(r)) == null || p.setNewValue_(!0), s.keysAtom_.reportChanged()
                });
                var c = D0(),
                    u = or(this),
                    f = u || c ? {
                        observableKind: "map",
                        debugObjectName: this.name_,
                        type: W1,
                        object: this,
                        name: r,
                        newValue: i
                    } : null;
                u && sr(this, f)
            }, t.get = function(r) {
                return this.has(r) ? this.dehanceValue_(this.data_.get(r).get()) : this.dehanceValue_(void 0)
            }, t.dehanceValue_ = function(r) {
                return this.dehancer !== void 0 ? this.dehancer(r) : r
            }, t.keys = function() {
                return this.keysAtom_.reportObserved(), this.data_.keys()
            }, t.values = function() {
                var r = this,
                    i = this.keys();
                return Hi({
                    next: function() {
                        var c = i.next(),
                            u = c.done,
                            f = c.value;
                        return {
                            done: u,
                            value: u ? void 0 : r.get(f)
                        }
                    }
                })
            }, t.entries = function() {
                var r = this,
                    i = this.keys();
                return Hi({
                    next: function() {
                        var c = i.next(),
                            u = c.done,
                            f = c.value;
                        return {
                            done: u,
                            value: u ? void 0 : [f, r.get(f)]
                        }
                    }
                })
            }, t[vv] = function() {
                return this.entries()
            }, t.forEach = function(r, i) {
                for (var s = Q5(this), c; !(c = s()).done;) {
                    var u = c.value,
                        f = u[0],
                        p = u[1];
                    r.call(i, p, f, this)
                }
            }, t.merge = function(r) {
                var i = this;
                return c1(r) && (r = new Map(r)), a1(function() {
                    X1(r) ? pT(r).forEach(function(s) {
                        return i.set(s, r[s])
                    }) : Array.isArray(r) ? r.forEach(function(s) {
                        var c = s[0],
                            u = s[1];
                        return i.set(c, u)
                    }) : na(r) ? (r.constructor !== Map && Ae(19, r), r.forEach(function(s, c) {
                        return i.set(c, s)
                    })) : r != null && Ae(20, r)
                }), this
            }, t.clear = function() {
                var r = this;
                a1(function() {
                    u3(function() {
                        for (var i = Q5(r.keys()), s; !(s = i()).done;) {
                            var c = s.value;
                            r.delete(c)
                        }
                    })
                })
            }, t.replace = function(r) {
                var i = this;
                return a1(function() {
                    for (var s = $I(r), c = new Map, u = !1, f = Q5(i.data_.keys()), p; !(p = f()).done;) {
                        var h = p.value;
                        if (!s.has(h)) {
                            var w = i.delete(h);
                            if (w) u = !0;
                            else {
                                var v = i.data_.get(h);
                                c.set(h, v)
                            }
                        }
                    }
                    for (var _ = Q5(s.entries()), S; !(S = _()).done;) {
                        var I = S.value,
                            R = I[0],
                            b = I[1],
                            C = i.data_.has(R);
                        if (i.set(R, b), i.data_.has(R)) {
                            var x = i.data_.get(R);
                            c.set(R, x), C || (u = !0)
                        }
                    }
                    if (!u)
                        if (i.data_.size !== c.size) i.keysAtom_.reportChanged();
                        else
                            for (var Z = i.data_.keys(), T = c.keys(), P = Z.next(), N = T.next(); !P.done;) {
                                if (P.value !== N.value) {
                                    i.keysAtom_.reportChanged();
                                    break
                                }
                                P = Z.next(), N = T.next()
                            }
                    i.data_ = c
                }), this
            }, t.toString = function() {
                return "[object ObservableMap]"
            }, t.toJSON = function() {
                return Array.from(this)
            }, t.observe_ = function(r, i) {
                return Wi(this, r)
            }, t.intercept_ = function(r) {
                return qi(this, r)
            }, s3(e, [{
                key: "size",
                get: function() {
                    return this.keysAtom_.reportObserved(), this.data_.size
                }
            }, {
                key: gv,
                get: function() {
                    return "Map"
                }
            }]), e
        }(),
        c1 = J1("ObservableMap", yv);

    function $I(e) {
        if (na(e) || c1(e)) return e;
        if (Array.isArray(e)) return new Map(e);
        if (X1(e)) {
            var t = new Map;
            for (var n in e) t.set(n, e[n]);
            return t
        } else return Ae(21, e)
    }
    var _v, wv, qI = {};
    _v = Symbol.iterator;
    wv = Symbol.toStringTag;
    var Ev = function() {
            function e(n, r, i) {
                r === void 0 && (r = J5), i === void 0 && (i = "ObservableSet"), this.name_ = void 0, this[ce] = qI, this.data_ = new Set, this.atom_ = void 0, this.changeListeners_ = void 0, this.interceptors_ = void 0, this.dehancer = void 0, this.enhancer_ = void 0, this.name_ = i, lr(Set) || Ae(22), this.atom_ = Qs(this.name_), this.enhancer_ = function(s, c) {
                    return r(s, c, i)
                }, n && this.replace(n)
            }
            var t = e.prototype;
            return t.dehanceValue_ = function(r) {
                return this.dehancer !== void 0 ? this.dehancer(r) : r
            }, t.clear = function() {
                var r = this;
                a1(function() {
                    u3(function() {
                        for (var i = Q5(r.data_.values()), s; !(s = i()).done;) {
                            var c = s.value;
                            r.delete(c)
                        }
                    })
                })
            }, t.forEach = function(r, i) {
                for (var s = Q5(this), c; !(c = s()).done;) {
                    var u = c.value;
                    r.call(i, u, u, this)
                }
            }, t.add = function(r) {
                var i = this;
                if (ta(this.atom_), Fn(this)) {
                    var s = Bn(this, {
                        type: W1,
                        object: this,
                        newValue: r
                    });
                    if (!s) return this
                }
                if (!this.has(r)) {
                    a1(function() {
                        i.data_.add(i.enhancer_(r, void 0)), i.atom_.reportChanged()
                    });
                    var c = !1,
                        u = or(this),
                        f = u || c ? {
                            observableKind: "set",
                            debugObjectName: this.name_,
                            type: W1,
                            object: this,
                            newValue: r
                        } : null;
                    u && sr(this, f)
                }
                return this
            }, t.delete = function(r) {
                var i = this;
                if (Fn(this)) {
                    var s = Bn(this, {
                        type: $s,
                        object: this,
                        oldValue: r
                    });
                    if (!s) return !1
                }
                if (this.has(r)) {
                    var c = !1,
                        u = or(this),
                        f = u || c ? {
                            observableKind: "set",
                            debugObjectName: this.name_,
                            type: $s,
                            object: this,
                            oldValue: r
                        } : null;
                    return a1(function() {
                        i.atom_.reportChanged(), i.data_.delete(r)
                    }), u && sr(this, f), !0
                }
                return !1
            }, t.has = function(r) {
                return this.atom_.reportObserved(), this.data_.has(this.dehanceValue_(r))
            }, t.entries = function() {
                var r = 0,
                    i = Array.from(this.keys()),
                    s = Array.from(this.values());
                return Hi({
                    next: function() {
                        var u = r;
                        return r += 1, u < s.length ? {
                            value: [i[u], s[u]],
                            done: !1
                        } : {
                            done: !0
                        }
                    }
                })
            }, t.keys = function() {
                return this.values()
            }, t.values = function() {
                this.atom_.reportObserved();
                var r = this,
                    i = 0,
                    s = Array.from(this.data_.values());
                return Hi({
                    next: function() {
                        return i < s.length ? {
                            value: r.dehanceValue_(s[i++]),
                            done: !1
                        } : {
                            done: !0
                        }
                    }
                })
            }, t.replace = function(r) {
                var i = this;
                return j0(r) && (r = new Set(r)), a1(function() {
                    Array.isArray(r) ? (i.clear(), r.forEach(function(s) {
                        return i.add(s)
                    })) : Fi(r) ? (i.clear(), r.forEach(function(s) {
                        return i.add(s)
                    })) : r != null && Ae("Cannot initialize set from " + r)
                }), this
            }, t.observe_ = function(r, i) {
                return Wi(this, r)
            }, t.intercept_ = function(r) {
                return qi(this, r)
            }, t.toJSON = function() {
                return Array.from(this)
            }, t.toString = function() {
                return "[object ObservableSet]"
            }, t[_v] = function() {
                return this.values()
            }, s3(e, [{
                key: "size",
                get: function() {
                    return this.atom_.reportObserved(), this.data_.size
                }
            }, {
                key: wv,
                get: function() {
                    return "Set"
                }
            }]), e
        }(),
        j0 = J1("ObservableSet", Ev),
        A9 = Object.create(null),
        b9 = "remove",
        Av = function() {
            function e(n, r, i, s) {
                r === void 0 && (r = new Map), s === void 0 && (s = UT), this.target_ = void 0, this.values_ = void 0, this.name_ = void 0, this.defaultAnnotation_ = void 0, this.keysAtom_ = void 0, this.changeListeners_ = void 0, this.interceptors_ = void 0, this.proxy_ = void 0, this.isPlainObject_ = void 0, this.appliedAnnotations_ = void 0, this.pendingKeys_ = void 0, this.target_ = n, this.values_ = r, this.name_ = i, this.defaultAnnotation_ = s, this.keysAtom_ = new Ui("ObservableObject.keys"), this.isPlainObject_ = X1(this.target_)
            }
            var t = e.prototype;
            return t.getObservablePropValue_ = function(r) {
                return this.values_.get(r).get()
            }, t.setObservablePropValue_ = function(r, i) {
                var s = this.values_.get(r);
                if (s instanceof Pi) return s.set(i), !0;
                if (Fn(this)) {
                    var c = Bn(this, {
                        type: kr,
                        object: this.proxy_ || this.target_,
                        name: r,
                        newValue: i
                    });
                    if (!c) return null;
                    i = c.newValue
                }
                if (i = s.prepareNewValue_(i), i !== W.UNCHANGED) {
                    var u = or(this),
                        f = !1,
                        p = u || f ? {
                            type: kr,
                            observableKind: "object",
                            debugObjectName: this.name_,
                            object: this.proxy_ || this.target_,
                            oldValue: s.value_,
                            name: r,
                            newValue: i
                        } : null;
                    s.setNewValue_(i), u && sr(this, p)
                }
                return !0
            }, t.get_ = function(r) {
                return W.trackingDerivation && !i1(this.target_, r) && this.has_(r), this.target_[r]
            }, t.set_ = function(r, i, s) {
                return s === void 0 && (s = !1), i1(this.target_, r) ? this.values_.has(r) ? this.setObservablePropValue_(r, i) : s ? Reflect.set(this.target_, r, i) : (this.target_[r] = i, !0) : this.extend_(r, {
                    value: i,
                    enumerable: !0,
                    writable: !0,
                    configurable: !0
                }, this.defaultAnnotation_, s)
            }, t.has_ = function(r) {
                if (!W.trackingDerivation) return r in this.target_;
                this.pendingKeys_ || (this.pendingKeys_ = new Map);
                var i = this.pendingKeys_.get(r);
                return i || (i = new H0(r in this.target_, Xs, "ObservableObject.key?", !1), this.pendingKeys_.set(r, i)), i.get()
            }, t.make_ = function(r, i) {
                if (i === !0 && (i = this.defaultAnnotation_), i !== !1) {
                    if (S9(this, i, r), !(r in this.target_)) {
                        var s;
                        if ((s = this.target_[Zr]) != null && s[r]) return;
                        Ae(1, i.annotationType_, this.name_ + "." + r.toString())
                    }
                    for (var c = this.target_; c && c !== Di;) {
                        var u = Fs(c, r);
                        if (u) {
                            var f = i.make_(this, r, u, c);
                            if (f === 0) return;
                            if (f === 1) break
                        }
                        c = Object.getPrototypeOf(c)
                    }
                    x9(this, i, r)
                }
            }, t.extend_ = function(r, i, s, c) {
                if (c === void 0 && (c = !1), s === !0 && (s = this.defaultAnnotation_), s === !1) return this.defineProperty_(r, i, c);
                S9(this, s, r);
                var u = s.extend_(this, r, i, c);
                return u && x9(this, s, r), u
            }, t.defineProperty_ = function(r, i, s) {
                s === void 0 && (s = !1);
                try {
                    _n();
                    var c = this.delete_(r);
                    if (!c) return c;
                    if (Fn(this)) {
                        var u = Bn(this, {
                            object: this.proxy_ || this.target_,
                            name: r,
                            type: W1,
                            newValue: i.value
                        });
                        if (!u) return null;
                        var f = u.newValue;
                        i.value !== f && (i = X5({}, i, {
                            value: f
                        }))
                    }
                    if (s) {
                        if (!Reflect.defineProperty(this.target_, r, i)) return !1
                    } else Tr(this.target_, r, i);
                    this.notifyPropertyAddition_(r, i.value)
                } finally {
                    wn()
                }
                return !0
            }, t.defineObservableProperty_ = function(r, i, s, c) {
                c === void 0 && (c = !1);
                try {
                    _n();
                    var u = this.delete_(r);
                    if (!u) return u;
                    if (Fn(this)) {
                        var f = Bn(this, {
                            object: this.proxy_ || this.target_,
                            name: r,
                            type: W1,
                            newValue: i
                        });
                        if (!f) return null;
                        i = f.newValue
                    }
                    var p = C9(r),
                        h = {
                            configurable: W.safeDescriptors ? this.isPlainObject_ : !0,
                            enumerable: !0,
                            get: p.get,
                            set: p.set
                        };
                    if (c) {
                        if (!Reflect.defineProperty(this.target_, r, h)) return !1
                    } else Tr(this.target_, r, h);
                    var w = new H0(i, s, "ObservableObject.key", !1);
                    this.values_.set(r, w), this.notifyPropertyAddition_(r, w.value_)
                } finally {
                    wn()
                }
                return !0
            }, t.defineComputedProperty_ = function(r, i, s) {
                s === void 0 && (s = !1);
                try {
                    _n();
                    var c = this.delete_(r);
                    if (!c) return c;
                    if (Fn(this)) {
                        var u = Bn(this, {
                            object: this.proxy_ || this.target_,
                            name: r,
                            type: W1,
                            newValue: void 0
                        });
                        if (!u) return null
                    }
                    i.name || (i.name = "ObservableObject.key"), i.context = this.proxy_ || this.target_;
                    var f = C9(r),
                        p = {
                            configurable: W.safeDescriptors ? this.isPlainObject_ : !0,
                            enumerable: !1,
                            get: f.get,
                            set: f.set
                        };
                    if (s) {
                        if (!Reflect.defineProperty(this.target_, r, p)) return !1
                    } else Tr(this.target_, r, p);
                    this.values_.set(r, new Pi(i)), this.notifyPropertyAddition_(r, void 0)
                } finally {
                    wn()
                }
                return !0
            }, t.delete_ = function(r, i) {
                if (i === void 0 && (i = !1), !i1(this.target_, r)) return !0;
                if (Fn(this)) {
                    var s = Bn(this, {
                        object: this.proxy_ || this.target_,
                        name: r,
                        type: b9
                    });
                    if (!s) return null
                }
                try {
                    var c, u;
                    _n();
                    var f = or(this),
                        p = !1,
                        h = this.values_.get(r),
                        w = void 0;
                    if (!h && (f || p)) {
                        var v;
                        w = (v = Fs(this.target_, r)) == null ? void 0 : v.value
                    }
                    if (i) {
                        if (!Reflect.deleteProperty(this.target_, r)) return !1
                    } else delete this.target_[r];
                    if (h && (this.values_.delete(r), h instanceof H0 && (w = h.value_), tv(h)), this.keysAtom_.reportChanged(), (c = this.pendingKeys_) == null || (u = c.get(r)) == null || u.set(r in this.target_), f || p) {
                        var _ = {
                            type: b9,
                            observableKind: "object",
                            object: this.proxy_ || this.target_,
                            debugObjectName: this.name_,
                            oldValue: w,
                            name: r
                        };
                        f && sr(this, _)
                    }
                } finally {
                    wn()
                }
                return !0
            }, t.observe_ = function(r, i) {
                return Wi(this, r)
            }, t.intercept_ = function(r) {
                return qi(this, r)
            }, t.notifyPropertyAddition_ = function(r, i) {
                var s, c, u = or(this),
                    f = !1;
                if (u || f) {
                    var p = u || f ? {
                        type: W1,
                        observableKind: "object",
                        debugObjectName: this.name_,
                        object: this.proxy_ || this.target_,
                        name: r,
                        newValue: i
                    } : null;
                    u && sr(this, p)
                }(s = this.pendingKeys_) == null || (c = s.get(r)) == null || c.set(!0), this.keysAtom_.reportChanged()
            }, t.ownKeys_ = function() {
                return this.keysAtom_.reportObserved(), Ks(this.target_)
            }, t.keys_ = function() {
                return this.keysAtom_.reportObserved(), Object.keys(this.target_)
            }, e
        }();

    function n7(e, t) {
        var n;
        if (i1(e, ce)) return e;
        var r = (n = t?.name) != null ? n : "ObservableObject",
            i = new Av(e, new Map, String(r), YT(t));
        return Ws(e, ce, i), e
    }
    var WI = J1("ObservableObjectAdministration", Av);

    function C9(e) {
        return A9[e] || (A9[e] = {
            get: function() {
                return this[ce].getObservablePropValue_(e)
            },
            set: function(n) {
                return this[ce].setObservablePropValue_(e, n)
            }
        })
    }

    function B0(e) {
        return qs(e) ? WI(e[ce]) : !1
    }

    function x9(e, t, n) {
        var r;
        (r = e.target_[Zr]) == null || delete r[n]
    }

    function S9(e, t, n) {
        if (!1) var r, i, s
    }
    var KI = Cv(0),
        X4 = 0,
        bv = function() {};

    function QI(e, t) {
        Object.setPrototypeOf ? Object.setPrototypeOf(e.prototype, t) : e.prototype.__proto__ !== void 0 ? e.prototype.__proto__ = t : e.prototype = t
    }
    QI(bv, Array.prototype);
    var m3 = function(e, t, n) {
        N9(r, e);

        function r(s, c, u, f) {
            var p;
            u === void 0 && (u = "ObservableArray"), f === void 0 && (f = !1), p = e.call(this) || this;
            var h = new p3(u, c, f, !0);
            if (h.proxy_ = Q4(p), L9(Q4(p), ce, h), s && s.length) {
                var w = Gi(!0);
                p.spliceWithArray(0, 0, s), zi(w)
            }
            return Object.defineProperty(Q4(p), "0", KI), p
        }
        var i = r.prototype;
        return i.concat = function() {
            this[ce].atom_.reportObserved();
            for (var c = arguments.length, u = new Array(c), f = 0; f < c; f++) u[f] = arguments[f];
            return Array.prototype.concat.apply(this.slice(), u.map(function(p) {
                return ia(p) ? p.slice() : p
            }))
        }, i[n] = function() {
            var s = this,
                c = 0;
            return Hi({
                next: function() {
                    return c < s.length ? {
                        value: s[c++],
                        done: !1
                    } : {
                        done: !0,
                        value: void 0
                    }
                }
            })
        }, s3(r, [{
            key: "length",
            get: function() {
                return this[ce].getArrayLength_()
            },
            set: function(c) {
                this[ce].setArrayLength_(c)
            }
        }, {
            key: t,
            get: function() {
                return "Array"
            }
        }]), r
    }(bv, Symbol.toStringTag, Symbol.iterator);
    Object.entries(zs).forEach(function(e) {
        var t = e[0],
            n = e[1];
        t !== "concat" && Ws(m3.prototype, t, n)
    });

    function Cv(e) {
        return {
            enumerable: !1,
            configurable: !0,
            get: function() {
                return this[ce].get_(e)
            },
            set: function(n) {
                this[ce].set_(e, n)
            }
        }
    }

    function XI(e) {
        Tr(m3.prototype, "" + e, Cv(e))
    }

    function xv(e) {
        if (e > X4) {
            for (var t = X4; t < e + 100; t++) XI(t);
            X4 = e
        }
    }
    xv(1e3);

    function YI(e, t, n) {
        return new m3(e, t, n)
    }

    function Y1(e, t) {
        if (typeof e == "object" && e !== null) {
            if (ia(e)) return t !== void 0 && Ae(23), e[ce].atom_;
            if (j0(e)) return e.atom_;
            if (c1(e)) {
                if (t === void 0) return e.keysAtom_;
                var n = e.data_.get(t) || e.hasMap_.get(t);
                return n || Ae(25, t, r3(e)), n
            }
            if (B0(e)) {
                if (!t) return Ae(26);
                var r = e[ce].values_.get(t);
                return r || Ae(27, t, r3(e)), r
            }
            if (l3(e) || $i(e) || js(e)) return e
        } else if (lr(e) && js(e[ce])) return e[ce];
        Ae(28)
    }

    function Sv(e, t) {
        if (e || Ae(29), t !== void 0) return Sv(Y1(e, t));
        if (l3(e) || $i(e) || js(e) || c1(e) || j0(e)) return e;
        if (e[ce]) return e[ce];
        Ae(24, e)
    }

    function r3(e, t) {
        var n;
        if (t !== void 0) n = Y1(e, t);
        else {
            if (f3(e)) return e.name;
            B0(e) || c1(e) || j0(e) ? n = Sv(e) : n = Y1(e)
        }
        return n.name_
    }
    var M9 = Di.toString;

    function v3(e, t, n) {
        return n === void 0 && (n = -1), a3(e, t, n)
    }

    function a3(e, t, n, r, i) {
        if (e === t) return e !== 0 || 1 / e === 1 / t;
        if (e == null || t == null) return !1;
        if (e !== e) return t !== t;
        var s = typeof e;
        if (s !== "function" && s !== "object" && typeof t != "object") return !1;
        var c = M9.call(e);
        if (c !== M9.call(t)) return !1;
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
        e = Z9(e), t = Z9(t);
        var u = c === "[object Array]";
        if (!u) {
            if (typeof e != "object" || typeof t != "object") return !1;
            var f = e.constructor,
                p = t.constructor;
            if (f !== p && !(lr(f) && f instanceof f && lr(p) && p instanceof p) && "constructor" in e && "constructor" in t) return !1
        }
        if (n === 0) return !1;
        n < 0 && (n = -1), r = r || [], i = i || [];
        for (var h = r.length; h--;)
            if (r[h] === e) return i[h] === t;
        if (r.push(e), i.push(t), u) {
            if (h = e.length, h !== t.length) return !1;
            for (; h--;)
                if (!a3(e[h], t[h], n - 1, r, i)) return !1
        } else {
            var w = Object.keys(e),
                v;
            if (h = w.length, Object.keys(t).length !== h) return !1;
            for (; h--;)
                if (v = w[h], !(i1(t, v) && a3(e[v], t[v], n - 1, r, i))) return !1
        }
        return r.pop(), i.pop(), !0
    }

    function Z9(e) {
        return ia(e) ? e.slice() : na(e) || c1(e) || Fi(e) || j0(e) ? Array.from(e.entries()) : e
    }

    function Hi(e) {
        return e[Symbol.iterator] = JI, e
    }

    function JI() {
        return this
    } ["Symbol", "Map", "Set"].forEach(function(e) {
        var t = i3();
        typeof t[e] > "u" && Ae("MobX requires global '" + e + "' to be available or polyfilled")
    });
    typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ == "object" && __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
        spy: gI,
        extras: {
            getDebugName: r3
        },
        $mobx: ce
    });
    var sH = g(A());
    var En = g(Ee());
    var qV = g(A());
    var DN = g(A());
    var Mv = g(Ee());
    if (!Mv.useState) throw new Error("mobx-react-lite requires React with Hooks support");
    if (!aa) throw new Error("mobx-react-lite@3 requires mobx at least version 6 to be available");
    var BN = g(A()),
        g3 = g(xs());
    var GN = g(A());

    function tk(e) {
        e()
    }

    function r7(e) {
        e || (e = tk), t7({
            reactionScheduler: e
        })
    }
    var $N = g(A());
    var _V = g(A());
    var oa = g(Ee());
    var KN = g(A());

    function Zv(e) {
        return dv(e)
    }
    var fV = g(A());
    var XN = g(A()),
        y3 = typeof FinalizationRegistry > "u" ? void 0 : FinalizationRegistry;
    var nV = g(A());
    var JN = g(A());

    function a7(e) {
        var t = {
            reaction: e,
            mounted: !1,
            changedBeforeMount: !1,
            cleanAt: Date.now() + nk
        };
        return t
    }
    var nk = 1e4,
        Tv = 1e4;

    function Iv(e) {
        var t = new Map,
            n = 1,
            r = new e(function(s) {
                var c = t.get(s);
                c && (c.reaction.dispose(), t.delete(s))
            });
        return {
            addReactionToTrack: function(i, s, c) {
                var u = n++;
                return r.register(c, u, i), i.current = a7(s), i.current.finalizationRegistryCleanupToken = u, t.set(u, i.current), i.current
            },
            recordReactionAsCommitted: function(i) {
                r.unregister(i), i.current && i.current.finalizationRegistryCleanupToken && t.delete(i.current.finalizationRegistryCleanupToken)
            },
            forceCleanupTimerToRunNowForTests: function() {},
            resetCleanupScheduleForTests: function() {}
        }
    }
    var iV = g(A());
    var rk = function(e) {
        var t = typeof Symbol == "function" && Symbol.iterator,
            n = t && e[t],
            r = 0;
        if (n) return n.call(e);
        if (e && typeof e.length == "number") return {
            next: function() {
                return e && r >= e.length && (e = void 0), {
                    value: e && e[r++],
                    done: !e
                }
            }
        };
        throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
    };

    function kv() {
        var e = new Set,
            t;

        function n() {
            t && (clearTimeout(t), u())
        }

        function r() {
            var f, p;
            if (e.size > 0) {
                try {
                    for (var h = rk(e), w = h.next(); !w.done; w = h.next()) {
                        var v = w.value,
                            _ = v.current;
                        _ && (_.reaction.dispose(), v.current = null)
                    }
                } catch (S) {
                    f = {
                        error: S
                    }
                } finally {
                    try {
                        w && !w.done && (p = h.return) && p.call(h)
                    } finally {
                        if (f) throw f.error
                    }
                }
                e.clear()
            }
            t && (clearTimeout(t), t = void 0)
        }

        function i() {
            t === void 0 && (t = setTimeout(u, Tv))
        }

        function s(f) {
            e.add(f), i()
        }

        function c(f) {
            e.delete(f)
        }

        function u() {
            t = void 0;
            var f = Date.now();
            e.forEach(function(p) {
                var h = p.current;
                h && f >= h.cleanAt && (h.reaction.dispose(), p.current = null, e.delete(p))
            }), e.size > 0 && i()
        }
        return {
            addReactionToTrack: function(f, p, h) {
                return f.current = a7(p), s(f), f.current
            },
            recordReactionAsCommitted: c,
            forceCleanupTimerToRunNowForTests: n,
            resetCleanupScheduleForTests: r
        }
    }
    var i7 = y3 ? Iv(y3) : kv(),
        Ov = i7.addReactionToTrack,
        Lv = i7.recordReactionAsCommitted,
        ak = i7.resetCleanupScheduleForTests,
        cV = i7.forceCleanupTimerToRunNowForTests;
    var hV = g(A()),
        ik = !1;

    function Or() {
        return ik
    }
    var Rv = function(e, t) {
        var n = typeof Symbol == "function" && e[Symbol.iterator];
        if (!n) return e;
        var r = n.call(e),
            i, s = [],
            c;
        try {
            for (;
                (t === void 0 || t-- > 0) && !(i = r.next()).done;) s.push(i.value)
        } catch (u) {
            c = {
                error: u
            }
        } finally {
            try {
                i && !i.done && (n = r.return) && n.call(r)
            } finally {
                if (c) throw c.error
            }
        }
        return s
    };

    function Pv(e) {
        return "observer".concat(e)
    }
    var ok = function() {
        function e() {}
        return e
    }();

    function sk() {
        return new ok
    }

    function Ki(e, t) {
        if (t === void 0 && (t = "observed"), Or()) return e();
        var n = Rv(oa.default.useState(sk), 1),
            r = n[0],
            i = Rv(oa.default.useState(), 2),
            s = i[1],
            c = function() {
                return s([])
            },
            u = oa.default.useRef(null);
        if (!u.current) var f = new s1(Pv(t), function() {
                p.mounted ? c() : p.changedBeforeMount = !0
            }),
            p = Ov(u, f, r);
        var h = u.current.reaction;
        oa.default.useDebugValue(h, Zv), oa.default.useEffect(function() {
            return Lv(u), u.current ? (u.current.mounted = !0, u.current.changedBeforeMount && (u.current.changedBeforeMount = !1, c())) : (u.current = {
                    reaction: new s1(Pv(t), function() {
                        c()
                    }),
                    mounted: !0,
                    changedBeforeMount: !1,
                    cleanAt: 1 / 0
                }, c()),
                function() {
                    u.current.reaction.dispose(), u.current = null
                }
        }, []);
        var w, v;
        if (h.track(function() {
                try {
                    w = e()
                } catch (_) {
                    v = _
                }
            }), v) throw v;
        return w
    }
    var bV = g(A()),
        t0 = g(Ee());
    var Hv = typeof Symbol == "function" && Symbol.for,
        Nv = Hv ? Symbol.for("react.forward_ref") : typeof t0.forwardRef == "function" && (0, t0.forwardRef)(function(e) {
            return null
        }).$$typeof,
        Vv = Hv ? Symbol.for("react.memo") : typeof t0.memo == "function" && (0, t0.memo)(function(e) {
            return null
        }).$$typeof;

    function _3(e, t) {
        var n;
        if (Vv && e.$$typeof === Vv) throw new Error("[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.");
        if (Or()) return e;
        var r = (n = t?.forwardRef) !== null && n !== void 0 ? n : !1,
            i = e,
            s = e.displayName || e.name;
        if (Nv && e.$$typeof === Nv && (r = !0, i = e.render, typeof i != "function")) throw new Error("[mobx-react-lite] `render` property of ForwardRef was not a function");
        var c = function(u, f) {
            return Ki(function() {
                return i(u, f)
            }, s)
        };
        return s !== "" && (c.displayName = s), e.contextTypes && (c.contextTypes = e.contextTypes), r && (c = (0, t0.forwardRef)(c)), c = (0, t0.memo)(c), ck(e, c), c
    }
    var lk = {
        $$typeof: !0,
        render: !0,
        compare: !0,
        type: !0,
        displayName: !0
    };

    function ck(e, t) {
        Object.keys(e).forEach(function(n) {
            lk[n] || Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n))
        })
    }
    var SV = g(A());

    function w3(e) {
        var t = e.children,
            n = e.render,
            r = t || n;
        return typeof r != "function" ? null : Ki(r)
    }
    w3.displayName = "Observer";
    var ZV = g(A());
    var uk = g(Ee());
    var VV = g(A());
    var dk = g(Ee());
    var OV = g(A());
    var fk = g(Ee());
    r7(g3.unstable_batchedUpdates);
    var Bv = 0;

    function mk(e) {
        if (typeof Symbol == "function") return Symbol(e);
        var t = "__$mobx-react " + e + " (" + Bv + ")";
        return Bv++, t
    }
    var E3 = {};

    function n0(e) {
        return E3[e] || (E3[e] = mk(e)), E3[e]
    }

    function Qv(e, t) {
        if (Uv(e, t)) return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
        var n = Object.keys(e),
            r = Object.keys(t);
        if (n.length !== r.length) return !1;
        for (var i = 0; i < n.length; i++)
            if (!Object.hasOwnProperty.call(t, n[i]) || !Uv(e[n[i]], t[n[i]])) return !1;
        return !0
    }

    function Uv(e, t) {
        return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t
    }

    function u1(e, t, n) {
        Object.hasOwnProperty.call(e, t) ? e[t] = n : Object.defineProperty(e, t, {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: n
        })
    }
    var jv = n0("patchMixins"),
        Xv = n0("patchedDefinition");

    function vk(e, t) {
        var n = e[jv] = e[jv] || {},
            r = n[t] = n[t] || {};
        return r.locks = r.locks || 0, r.methods = r.methods || [], r
    }

    function Gv(e, t) {
        for (var n = this, r = arguments.length, i = new Array(r > 2 ? r - 2 : 0), s = 2; s < r; s++) i[s - 2] = arguments[s];
        t.locks++;
        try {
            var c;
            return e != null && (c = e.apply(this, i)), c
        } finally {
            t.locks--, t.locks === 0 && t.methods.forEach(function(u) {
                u.apply(n, i)
            })
        }
    }

    function zv(e, t) {
        var n = function() {
            for (var i = arguments.length, s = new Array(i), c = 0; c < i; c++) s[c] = arguments[c];
            Gv.call.apply(Gv, [this, e, t].concat(s))
        };
        return n
    }

    function $v(e, t, n) {
        var r = vk(e, t);
        r.methods.indexOf(n) < 0 && r.methods.push(n);
        var i = Object.getOwnPropertyDescriptor(e, t);
        if (!(i && i[Xv])) {
            var s = e[t],
                c = Yv(e, t, i ? i.enumerable : void 0, r, s);
            Object.defineProperty(e, t, c)
        }
    }

    function Yv(e, t, n, r, i) {
        var s, c = zv(i, r);
        return s = {}, s[Xv] = !0, s.get = function() {
            return c
        }, s.set = function(f) {
            if (this === e) c = zv(f, r);
            else {
                var p = Yv(this, t, n, r, f);
                Object.defineProperty(this, t, p)
            }
        }, s.configurable = !0, s.enumerable = n, s
    }
    var sa = ce || "$mobx",
        qv = n0("isMobXReactObserver"),
        b3 = n0("isUnmounted"),
        l7 = n0("skipRender"),
        o7 = n0("isForcingUpdate");

    function gk(e) {
        var t = e.prototype;
        if (e[qv]) {
            var n = s7(t);
            console.warn("The provided component class (" + n + `)
                has already been declared as an observer component.`)
        } else e[qv] = !0;
        if (t.componentWillReact) throw new Error("The componentWillReact life-cycle event is no longer supported");
        if (e.__proto__ !== En.PureComponent) {
            if (!t.shouldComponentUpdate) t.shouldComponentUpdate = Wv;
            else if (t.shouldComponentUpdate !== Wv) throw new Error("It is not allowed to use shouldComponentUpdate in observer based components.")
        }
        A3(t, "props"), A3(t, "state"), e.contextType && A3(t, "context");
        var r = t.render;
        if (typeof r != "function") {
            var i = s7(t);
            throw new Error("[mobx-react] class component (" + i + ") is missing `render` method.\n`observer` requires `render` being a function defined on prototype.\n`render = () => {}` or `render = function() {}` is not supported.")
        }
        return t.render = function() {
            return this.render = Or() ? r : yk.call(this, r), this.render()
        }, $v(t, "componentDidMount", function() {
            this[b3] = !1, this.render[sa] || En.Component.prototype.forceUpdate.call(this)
        }), $v(t, "componentWillUnmount", function() {
            if (!Or()) {
                var s = this.render[sa];
                if (s) s.dispose(), this.render[sa] = null;
                else {
                    var c = s7(this);
                    console.warn("The reactive render of an observer class component (" + c + `)
                was overridden after MobX attached. This may result in a memory leak if the
                overridden reactive render was not properly disposed.`)
                }
                this[b3] = !0
            }
        }), e
    }

    function s7(e) {
        return e.displayName || e.name || e.constructor && (e.constructor.displayName || e.constructor.name) || "<component>"
    }

    function yk(e) {
        var t = this;
        u1(this, l7, !1), u1(this, o7, !1);
        var n = s7(this),
            r = e.bind(this),
            i = !1,
            s = function() {
                var f = new s1(n + ".render()", function() {
                    if (!i && (i = !0, t[b3] !== !0)) {
                        var p = !0;
                        try {
                            u1(t, o7, !0), t[l7] || En.Component.prototype.forceUpdate.call(t), p = !1
                        } finally {
                            u1(t, o7, !1), p && (f.dispose(), t.render[sa] = null)
                        }
                    }
                });
                return f.reactComponent = t, f
            };

        function c() {
            var u;
            i = !1;
            var f = (u = c[sa]) != null ? u : c[sa] = s(),
                p = void 0,
                h = void 0;
            if (f.track(function() {
                    try {
                        h = e7(!1, r)
                    } catch (w) {
                        p = w
                    }
                }), p) throw p;
            return h
        }
        return c
    }

    function Wv(e, t) {
        return Or() && console.warn("[mobx-react] It seems that a re-rendering of a React component is triggered while in static (server-side) mode. Please make sure components are rendered only once server-side."), this.state !== t ? !0 : !Qv(this.props, e)
    }

    function A3(e, t) {
        var n = n0("reactProp_" + t + "_valueHolder"),
            r = n0("reactProp_" + t + "_atomHolder");

        function i() {
            return this[r] || u1(this, r, Qs("reactive " + t)), this[r]
        }
        Object.defineProperty(e, t, {
            configurable: !0,
            enumerable: !0,
            get: function() {
                var c = !1;
                return U0 && o1 && (c = U0(!0)), i.call(this).reportObserved(), U0 && o1 && o1(c), this[n]
            },
            set: function(c) {
                !this[o7] && !Qv(this[n], c) ? (u1(this, n, c), u1(this, l7, !0), i.call(this).reportChanged(), u1(this, l7, !1)) : u1(this, n, c)
            }
        })
    }

    function c7(e) {
        return e.isMobxInjector === !0 && console.warn("Mobx observer: You are trying to use `observer` on a component that already has `inject`. Please apply `observer` before applying `inject`"), Object.prototype.isPrototypeOf.call(En.Component, e) || Object.prototype.isPrototypeOf.call(En.PureComponent, e) ? gk(e) : _3(e)
    }

    function C3() {
        return C3 = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }, C3.apply(this, arguments)
    }

    function _k(e, t) {
        if (e == null) return {};
        var n = {},
            r = Object.keys(e),
            i, s;
        for (s = 0; s < r.length; s++) i = r[s], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
        return n
    }
    var wk = ["children"],
        Kv = En.default.createContext({});

    function Ek(e) {
        var t = e.children,
            n = _k(e, wk),
            r = En.default.useContext(Kv),
            i = En.default.useRef(C3({}, r, n)),
            s = i.current;
        if (!1) var c;
        return En.default.createElement(Kv.Provider, {
            value: s
        }, t)
    }
    Ek.displayName = "MobXProvider";
    if (!En.Component) throw new Error("mobx-react requires React to be available");
    if (!Ye) throw new Error("mobx-react requires mobx to be available");
    var f1 = g(Ee(), 1);
    var ng = g(Wt(), 1);
    t7({
        enforceActions: "never"
    });

    function Zk() {
        let [e, t] = (0, f1.useState)(0);
        return () => t(n => n + 1)
    }
    var cr = class {
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
        constructor() {}
        onBeforeMount() {}
        onViewCreate() {}
        onViewDestroy() {}
        onPropsChange(t, n) {}
        forceUpdate() {
            this._forceUpdateVersion += 1
        }
        nextTick(t) {
            requestAnimationFrame(() => {
                t()
            })
        }
    };
    It([Ye], cr.prototype, "_forceUpdateVersion", 2);
    var Lr = class {
            static createComponent(t, n, r) {
                let i = c7(s => {
                    let c = (0, f1.useMemo)(() => {
                            let p = new n;
                            return p.viewName = t, aa(p), p
                        }, []),
                        u = c.props;
                    c.props = s, c.onPropsChange(s, u);
                    let f = c._forceUpdateVersion;
                    return (0, f1.useState)(() => (c.onBeforeMount(), null)), (0, f1.useLayoutEffect)(() => () => {
                        c.onViewDestroy()
                    }, [c]), (0, f1.useEffect)(() => {
                        c.onViewCreate()
                    }, [c]), r(c)
                });
                return i.displayName = t, i
            }
            static createModeledComponent(t, n) {
                let r = c7(({
                    model: i
                }) => {
                    let s = c7(() => {
                        let c = Zk();
                        return i.bindUpdater(c), n(i)
                    });
                    return (0, ng.jsx)(s, {})
                });
                return r.displayName = t, r
            }
        },
        on = Ye;
    var S3 = g(rg(), 1);
    var CH = g(A());
    var x3 = {
        logo: "logo-BMmO0o",
        title: "title-5PmQ50"
    };
    var MH = g(A(), 1);
    var Qi = class extends cr {
        props;
        someState = !0;
        onViewCreate() {}
        onViewDestroy() {}
    };
    It([on], Qi.prototype, "someState", 2);
    var G0 = g(Wt(), 1),
        ag = e => {
            let {
                size: t,
                hasBg: n,
                className: r
            } = e;
            return (0, G0.jsx)("img", {
                src: ie.getLogo(n),
                className: r,
                style: {
                    width: t,
                    height: t,
                    borderRadius: 4
                }
            })
        },
        ig = Lr.createComponent("Logo", Qi, e => {
            let {
                showTitle: t = !1,
                size: n = 32,
                className: r,
                titleClassName: i,
                hasBg: s = !0
            } = e.props;
            return t ? (0, G0.jsxs)("div", {
                className: (0, S3.default)(x3.logo, r),
                children: [(0, G0.jsx)(ag, {
                    size: n,
                    hasBg: s
                }), (0, G0.jsx)("span", {
                    className: (0, S3.default)(x3.title, i),
                    children: e.props.title || ie.getProductName()
                })]
            }) : (0, G0.jsx)(ag, {
                size: n,
                hasBg: s,
                className: r
            })
        });
    var FH = g(A()),
        la = g(Ee());
    var Tk = {
        small: 16,
        medium: 32,
        large: 64
    };

    function og(e, t, n) {
        var r = n(),
            i = Object.keys(r);

        function s(c) {
            var u = c["aria-label"],
                f = c.tabIndex,
                p = c.className,
                h = p === void 0 ? t : p,
                w = c.fill,
                v = w === void 0 ? "currentColor" : w,
                _ = c.size,
                S = _ === void 0 ? 16 : _,
                I = c.verticalAlign,
                R = I === void 0 ? "text-bottom" : I,
                b = Tk[S] || S,
                C = Ik(i, b),
                x = r[C].width,
                Z = b * (x / C),
                T = r[C].path;
            return la.default.createElement("svg", {
                "aria-hidden": u ? "false" : "true",
                tabIndex: f,
                focusable: f >= 0 ? "true" : "false",
                "aria-label": u,
                role: "img",
                className: h,
                viewBox: "0 0 ".concat(x, " ").concat(C),
                width: Z,
                height: b,
                fill: v,
                style: {
                    display: "inline-block",
                    userSelect: "none",
                    verticalAlign: R,
                    overflow: "visible"
                }
            }, T)
        }
        return s.displayName = e, s
    }

    function Ik(e, t) {
        return e.map(function(n) {
            return parseInt(n, 10)
        }).reduce(function(n, r) {
            return r <= t ? r : n
        }, e[0])
    }
    var sg = og("ShareAndroidIcon", "octicon octicon-share-android", function() {
        return {
            16: {
                width: 16,
                path: la.default.createElement("path", {
                    d: "M15 3a3 3 0 0 1-5.175 2.066l-3.92 2.179a2.994 2.994 0 0 1 0 1.51l3.92 2.179a3 3 0 1 1-.73 1.31l-3.92-2.178a3 3 0 1 1 0-4.133l3.92-2.178A3 3 0 1 1 15 3Zm-1.5 10a1.5 1.5 0 1 0-3.001.001A1.5 1.5 0 0 0 13.5 13Zm-9-5a1.5 1.5 0 1 0-3.001.001A1.5 1.5 0 0 0 4.5 8Zm9-5a1.5 1.5 0 1 0-3.001.001A1.5 1.5 0 0 0 13.5 3Z"
                })
            },
            24: {
                width: 24,
                path: la.default.createElement("path", {
                    d: "M20 5.5a3.498 3.498 0 0 1-6.062 2.385l-5.112 3.021a3.498 3.498 0 0 1 0 2.188l5.112 3.021a3.5 3.5 0 1 1-.764 1.29l-5.112-3.02a3.499 3.499 0 1 1-3.843-5.642 3.499 3.499 0 0 1 3.843.872l5.112-3.021A3.5 3.5 0 1 1 20 5.5Zm-1.5 13a2 2 0 1 0-3.999-.001 2 2 0 0 0 3.999.001Zm0-13a2 2 0 1 0-3.999-.001A2 2 0 0 0 18.5 5.5ZM5.5 14a2 2 0 1 0 .001-3.999A2 2 0 0 0 5.5 14Z"
                })
            }
        }
    });
    var lg = og("XIcon", "octicon octicon-x", function() {
        return {
            16: {
                width: 16,
                path: la.default.createElement("path", {
                    d: "M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"
                })
            },
            24: {
                width: 24,
                path: la.default.createElement("path", {
                    d: "M5.72 5.72a.75.75 0 0 1 1.06 0L12 10.94l5.22-5.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L13.06 12l5.22 5.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L12 13.06l-5.22 5.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L10.94 12 5.72 6.78a.75.75 0 0 1 0-1.06Z"
                })
            }
        }
    });
    var Fk = g(Is(), 1);
    var qF = g(A(), 1);
    var CD = g(A(), 1);
    var pD = g(A(), 1);
    var lD = g(A(), 1);
    var jH = g(A(), 1);
    var cg = ["ServiceBase", "BackgroundApp", "MonicaService", "ConfigService"],
        kk = [],
        M3 = class {
            console = console;
            loggers = [];
            enabledModules = nt.isProd ? new Set(kk) : new Set(cg);
            getLogger(t) {
                let n = new Z3(this.enabledModules, t);
                return this.loggers.push(n), n
            }
            enableAllLoggers() {
                this.enabledModules = new Set(cg), this.loggers.forEach(t => {
                    t._enabledModules = this.enabledModules
                })
            }
        },
        Z3 = class {
            constructor(t, n) {
                this._enabledModules = t;
                this._module = n
            }
            get log() {
                return this._enabledModules.has(this._module) ? console.log : ug
            }
            get debug() {
                return this._enabledModules.has(this._module) ? console.debug : ug
            }
            get warn() {
                return console.warn
            }
            get error() {
                return console.error
            }
        };

    function ug() {}
    var Rr = new M3;
    var dg = g(T3(), 1),
        $0 = g(zr(), 1);
    var tD = g(A(), 1);
    var KH = g(A(), 1),
        z0 = g(zr(), 1);
    var I3 = class {
            async sendToBackground(t, n, r) {
                let i = {
                    type: t,
                    data: n,
                    id: r || ie.genId()
                };
                return z0.default.runtime.sendMessage(i)
            }
            async addListener(t, n) {
                z0.default.runtime.onMessage.addListener((r, i) => {
                    r.type === t && n(r.data, r.id, i)
                })
            }
            async addExternalListener(t, n) {
                z0.default.runtime.onMessageExternal.addListener((r, i) => {
                    console.log("incoming external msg", r), r.type === t && n(r.data, r.id, i)
                })
            }
            async sendToContent(t, n, r, i) {
                let s = {
                    type: n,
                    data: r,
                    id: i || ie.genId()
                };
                return z0.default.tabs.sendMessage(t, s)
            }
            async sendToPopup(t, n, r) {
                let i = {
                    type: t,
                    data: n,
                    id: r || ie.genId()
                };
                return z0.default.runtime.sendMessage(i)
            }
            broadcastFromBackground(t, n, r) {
                if (!nt.isBackground) throw new Error("only allowed in background");
                let i = r || ie.genId();
                z0.default.tabs.query({}).then(s => {
                    s.forEach(c => {
                        c.id && this.sendToContent(c.id, t, n, i).catch(() => {})
                    })
                }), this.sendToPopup(t, n, i).catch(() => {})
            }
        },
        Un = new I3;
    var h7 = g(T3(), 1),
        ua = g(zr(), 1),
        k3 = Rr.getLogger("ServiceBase"),
        O3 = class {
            constructor(t, n) {
                this.prefix = t;
                this.defaultValues = n
            }
            async get(t) {
                let n = this.encodeKey(t),
                    i = (await ua.default.storage.local.get(n))[n];
                return i === void 0 && (i = this.defaultValues[t]), i
            }
            async set(t, n) {
                ua.default.storage.local.set({
                    [this.encodeKey(t)]: n
                })
            }
            async getAll() {
                let t = Object.keys(this.defaultValues).map(r => this.encodeKey(r)),
                    n = await ua.default.storage.local.get(t);
                return n ? (0, h7.defaults)(this.transformValues(n, !1), this.defaultValues) : this.defaultValues
            }
            async update(t) {
                await ua.default.storage.local.set(this.transformValues(t, !0))
            }
            async removeDeprecated(t) {
                await ua.default.storage.local.remove(this.encodeKey(t))
            }
            encodeKey(t) {
                return this.prefix ? `${this.prefix}.${t}` : t
            }
            decodeKey(t) {
                return this.prefix ? t.replace(`${this.prefix}.`, "") : t
            }
            transformValues(t, n) {
                let r = {},
                    i = new Set(Object.keys(this.defaultValues));
                for (let s of Object.keys(t))
                    if (n) i.has(s) && (r[this.encodeKey(s)] = t[s]);
                    else {
                        let c = this.decodeKey(s);
                        i.has(c) && (r[c] = t[s])
                    } return r
            }
        },
        r0 = class {
            _instance;
            _eventListeners = {};
            constructor(t, n) {
                this._instance = new n;
                let r = this._instance,
                    i = this,
                    s = Object.getPrototypeOf(r),
                    c = Object.getPrototypeOf(s),
                    u = [...Object.getOwnPropertyNames(s), ...Object.getOwnPropertyNames(c)];
                for (let f of u) typeof r[f] == "function" && (i[f] = (...h) => {
                    if (nt.isBackground) return r._onCallMethod({
                        type: "bg"
                    }, f, h);
                    if (f.startsWith("_")) throw TypeError("method starting with _ can only be called from background");
                    if (f === "on") {
                        let [w, v] = h;
                        return this._addEventListener(w, v)
                    }
                    return this._sendMethodCallToBackground(t, f, h)
                });
                nt.isBackground || Un.addListener("serviceEvent", f => {
                    let {
                        serviceName: p,
                        eventName: h,
                        data: w
                    } = f;
                    if (t === p) {
                        let v = this._eventListeners[h];
                        v && v.forEach(_ => _.call(w))
                    }
                }), k3.debug("service proxy created", t, this)
            }
            async _sendMethodCallToBackground(t, n, r) {
                k3.debug("send event call", t, n, r);
                let i = ie.genId(),
                    s = [];
                return r.forEach((c, u) => {
                    if (typeof c == "function") {
                        let f = `__func:${i}:${u}`;
                        s.push(f), this._addProxiedFunc(f, c)
                    } else s.push(c)
                }), Un.sendToBackground("callServiceMethod", {
                    serviceName: t,
                    methodName: n,
                    finalArgs: s
                }, i)
            }
            _addEventListener(t, n) {
                this._eventListeners[t] || (this._eventListeners[t] = []);
                let r = new d7(t, n, () => {
                    this._eventListeners[t] = this._eventListeners[t]?.filter(i => i !== r)
                });
                return this._eventListeners[t].push(r), r
            }
            _addProxiedFunc(t, n) {
                Un.addListener("proxiedFuncCall", r => {
                    t === r.funcId && n(...r.args)
                })
            }
        },
        d7 = class {
            constructor(t, n, r) {
                this.event = t;
                this.handler = n;
                this.onDestroy = r
            }
            destroy() {
                this.onDestroy()
            }
            call(t) {
                this.handler(t)
            }
        },
        a0 = class {
            _serviceName = "";
            storage;
            lastCaller;
            eventListeners = {};
            _initService(t) {
                this._serviceName = t;
                let n = this.storagePrefix;
                this.storage = new O3(n, this.defaultStorageValues), this.onInit()
            }
            on(t, n) {
                this.eventListeners[t] || (this.eventListeners[t] = []);
                let r = new d7(t, n, () => {
                    this.eventListeners[t] = this.eventListeners[t]?.filter(i => i !== r)
                });
                return this.eventListeners[t].push(r), r
            }
            async _onCallMethod(t, n, r) {
                let i = this;
                if (typeof i[n] != "function") throw new Error(`method ${n} not found`);
                let s = [];
                r.forEach(u => {
                    if (typeof u == "string" && u.startsWith("__func:")) {
                        let f = u;
                        s.push((...p) => {
                            let h = `${this._serviceName}.${n}`;
                            k3.debug(`- call proxied func for ${h}:${f}`, {
                                funcArgs: p
                            }), t.tabId ? Un.sendToContent(t.tabId, "proxiedFuncCall", {
                                funcId: f,
                                args: p
                            }) : Un.sendToPopup("proxiedFuncCall", {
                                funcId: f,
                                args: p
                            })
                        })
                    } else s.push(u)
                }), this.lastCaller = t;
                let c = i[n](...s);
                if (c !== void 0 && !ie.isPromise(c)) throw new TypeError("public service method must return a promise");
                return c
            }
            emit(t, n) {
                let r = this.eventListeners[t];
                r && r.forEach(i => i.call(n)), Un.broadcastFromBackground("serviceEvent", {
                    serviceName: this._serviceName,
                    eventName: t,
                    data: n
                })
            }
            async _fetchWithCache(t, n, r) {
                let {
                    useCache: i = !0,
                    autoUpdate: s = !0,
                    cacheOnly: c = !1
                } = r || {}, u = async () => {
                    let f = await n();
                    return this.storage.set(t, f), f
                };
                if (i || c) {
                    let f = await this.storage.get(t);
                    if (c) return f;
                    if (f && !(0, h7.isEmpty)(f)) return s && u(), f
                }
                return await u()
            }
        };
    var fg = Rr.getLogger("ConfigService"),
        fa = class extends a0 {
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
                fg.log("config service init", this.storage), $0.default.storage.local.onChanged.addListener(t => {
                    let n = (0, dg.pick)(t, Object.keys(this.defaultStorageValues));
                    Object.keys(n).length && (fg.log("config change"), this.emit("configChange", n))
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
                $0.default.tabs.create({
                    url: "chrome://extensions/shortcuts"
                })
            }
            openOptionsPage() {
                $0.default.runtime.openOptionsPage()
            }
            async getCommands() {
                return await $0.default.commands.getAll()
            }
            async keepAlive() {
                return "keep alive"
            }
            async getUiFlag(t) {
                return (await this.get("uiFlags"))[t]
            }
            async setUiFlag(t, n) {
                let r = await this.get("uiFlags");
                r[t] = n, await this.set("uiFlags", r)
            }
            async shouldShowRatingTip() {
                let t = await $0.default.storage.local.get("ratingTipShowTimes");
                if (t) {
                    let r = t.ratingTipShowTimes;
                    typeof r == "number" && (await $0.default.storage.local.remove("ratingTipShowTimes"), await this.set("ratingTipShowTimes", r))
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
    h5(fa, "serviceName", "ConfigService");
    var uD = g(A(), 1);
    var Ue = new r0(fa.serviceName, fa);
    var i0 = class {
        shortCutEnableOption = {
            disabledAll: !1,
            disabledHosts: {}
        };
        buttonEnableOption = {
            disabledAll: !1,
            disabledHosts: {}
        };
        commands = {
            "run-monica": {
                shortcut: "",
                from: "default"
            }
        };
        invitationFirstShownAt = null;
        permissionGranted = !1;
        constructor() {
            aa(this), this.loadConfigs(), Ue.on("configChange", t => {
                t.buttonEnableOption && (this.buttonEnableOption = t.buttonEnableOption.newValue), t.shortCutEnableOption && (this.shortCutEnableOption = t.shortCutEnableOption.newValue), t.uiFlags && (this.invitationFirstShownAt = t.uiFlags.newValue.invitationFirstShownAt || null), t.permissionGranted && (this.permissionGranted = t.permissionGranted.newValue)
            })
        }
        async ensurePermissionGranted() {
            nt.currentProject !== "monica" && (this.permissionGranted || await new Promise(t => {
                let n = cv(() => this.permissionGranted, r => {
                    r && (t(), n())
                })
            }))
        }
        async loadConfigs() {
            let {
                shortCutEnableOption: t,
                buttonEnableOption: n,
                uiFlags: r,
                permissionGranted: i
            } = await Ue.getAll();
            this.shortCutEnableOption = t, this.buttonEnableOption = n, this.invitationFirstShownAt = r.invitationFirstShownAt || null, this.permissionGranted = i
        }
        async loadCommands() {
            (await Ue.getCommands()).forEach(r => {
                r.name === "run-monica" && (this.commands["run-monica"] = {
                    shortcut: r.shortcut || "",
                    from: "chrome"
                })
            });
            let n = ie.getDefaultShortcutKey().toUpperCase();
            this.commands["run-monica"].shortcut || (this.commands["run-monica"] = {
                shortcut: ie.getOsType() === "OSX" ? `\u2303${n}` : `Ctrl+${n}`,
                from: "default"
            })
        }
        shouldEnable(t, n) {
            let r = this[n].disabledHosts[t];
            return !(this[n].disabledAll || r)
        }
        setButtonDisableValue(t, n) {
            let r = h3(this.buttonEnableOption);
            if (t === "thisPage") {
                let i = window.location.host;
                r.disabledHosts[i] = n
            } else r.disabledAll = n;
            Ue.update({
                buttonEnableOption: r
            })
        }
        setShortcutDisableValue(t, n) {
            let r = h3(this.shortCutEnableOption);
            if (t === "thisPage") {
                let i = window.location.host;
                r.disabledHosts[i] = n
            } else r.disabledAll = n;
            Ue.update({
                shortCutEnableOption: r
            })
        }
        markInvitationFirstShown() {
            Ue.setUiFlag("invitationFirstShownAt", Date.now())
        }
        setPermissionGranted(t) {
            Ue.update({
                permissionGranted: t
            })
        }
    };
    It([on], i0.prototype, "shortCutEnableOption", 2), It([on], i0.prototype, "buttonEnableOption", 2), It([on], i0.prototype, "commands", 2), It([on], i0.prototype, "invitationFirstShownAt", 2), It([on], i0.prototype, "permissionGranted", 2);
    var hg = new i0;
    var MD = g(A(), 1),
        L3 = class {
            getPossibleElementByQuerySelector(t) {
                for (let n of t) {
                    let r = document.querySelector(n);
                    if (r) return r
                }
                return null
            }
            getScrollableRoot() {
                return getComputedStyle(document.body).overflowY === "scroll" ? document.body : document.documentElement
            }
        },
        p7 = new L3;
    var pF = g(A(), 1);
    var lF = g(A(), 1);
    var FD = g(A(), 1);
    var OD = g(A(), 1);
    var TD = g(A(), 1),
        da;
    (i => (i.RESP_FIELD_STATUS = "code", i.RESP_FIELD_MESSAGE = "msg", i.RESP_FIELD_ERROR_NAME = "error", i.RESP_SUCCESS_STATUS = 0))(da ||= {});
    var Me;
    (h => {
        let e = "[CrepeSdk] ";
        class t {}
        h.ExceptionHandler = t, h.NameTransformers = {
            snakeToCamel: w => w.replace(/(_[a-z])/g, v => v.toUpperCase().replace("_", "")),
            camelToSnake: w => w.replace(/([A-Z])/g, v => `_${v.toLowerCase()}`).replace(/^_/, "")
        };
        class r {
            constructor(v, _, S, I, R, b, C, x) {
                this.reqInfo = v;
                this.httpError = _, this.httpStatus = S, this.httpStatusText = I, this.name = this.constructor.name, this.code = R, this.message = b, this.data = C, this.originalError = x
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
        h.ApiRequestError = r;
        class i {
            constructor(v, _, S, I) {
                this.reqInfo = v;
                this.name = this.constructor.name, this.originalError = S, this.cause = _, this.reason = I
            }
            name;
            cause;
            originalError;
            reason
        }
        h.ApiRequestAborted = i;
        class s {
            config;
            sessionMap = new WeakMap;
            idCounter = 0;
            constructor(v) {
                this.config = v, this.config.nameTransformers || (this.config.nameTransformers = {
                    toClientName: h.NameTransformers.snakeToCamel,
                    toServerName: h.NameTransformers.camelToSnake
                })
            }
            nextId() {
                return ++this.idCounter
            }
            expireSession(v, _) {
                let S = this.sessionMap.get(v);
                return S ? (_ && S.has(_) ? (S.get(_)._expire(), S.delete(_)) : (S.forEach(I => {
                    I._expire()
                }), S.clear()), !0) : !1
            }
            convertObjectNames(v, _) {
                return _ && (Array.isArray(_) ? _.map(S => this.convertObjectNames(v, S)) : typeof _ == "object" ? Object.keys(_).reduce((S, I) => {
                    let R = _[I],
                        b = this.convertNameKey(v, I);
                    return S[b] = this.convertObjectNames(v, R), S
                }, {}) : _)
            }
            convertNameKey(v, _) {
                return v === "client" ? this.config.nameTransformers.toClientName(_) : this.config.nameTransformers.toServerName(_)
            }
            getSession(v, _, S, I) {
                let R = this.sessionMap.get(v);
                R || (R = new Map, this.sessionMap.set(v, R));
                let b = R.get(_);
                if (b) return b._checkConfigs(S), b;
                let C = new I(v, _, S);
                return C._initApis(this), R.set(_, C), C
            }
        }
        h.BaseSdk = s;
        class c {
            sdk;
            session;
            cachedData = new Map;
            constructor(v, _) {
                if (this.sdk = v, _ && !(_ instanceof f)) throw new Error(`${e}session error`);
                this.session = _
            }
            async sendRequest(v, _, S, I, R, b = {}) {
                if (b.cacheMode === "localStorage") throw new Error(`${e}localStorage cache not supported yet`);
                let x = {
                    id: this.sdk.nextId(),
                    method: v,
                    path: _,
                    cmd: S,
                    otherParams: I,
                    isLowLevelResp: R,
                    config: b,
                    cacheKey: null
                };
                if (b.onResolve && !b.cacheMode && console.warn(`${e}onResolve is usually combined with cacheMode`), b.useCache) {
                    b.cacheMode || console.error(`${e}useCache must combined with cacheMode`);
                    let Z = this.getSignature(v, _, S, I);
                    if (console.log(Z), x.cacheKey = Z, this.cachedData.has(Z)) {
                        this.handleSendRequest(x, !0);
                        let T = this.cachedData.get(Z);
                        return b.onResolve?.(null, T, !0), T
                    }
                }
                return this.handleSendRequest(x, !1)
            }
            handleSendRequest(v, _) {
                let {
                    sdk: S
                } = this, {
                    method: I,
                    config: R
                } = v, {
                    body: b,
                    query: C
                } = this.getParams(I, v.cmd, v.otherParams), x = S.config.baseUrl + this.pathPrefix + v.path;
                C && (x += `?${C}`);
                let Z = R.headers || {};
                S.config.globalSetHeader && (Z = S.config.globalSetHeader(Z)), Z["Content-Type"] || (Z["Content-Type"] = "application/json");
                let T = R.abortSignal || this.session?.abortSignal;
                this.onBeforeRequest(R, _);
                let P = fetch(x, {
                    method: I,
                    headers: Z,
                    signal: T,
                    body: I === "GET" ? null : JSON.stringify(b)
                });
                return this.handleRes(v, P, _)
            }
            async handleRes(v, _, S) {
                let {
                    config: I
                } = v;
                try {
                    let R = await _;
                    if (R.status !== 200) throw new r(v, !0, R.status, R.statusText, 0, `request fail(${R.status})`, null, new Error(R.statusText));
                    if (v.isLowLevelResp) throw new Error("TODO: handle low level resp"); {
                        let b = await R.json(),
                            C = b[da.RESP_FIELD_STATUS],
                            x = b[da.RESP_FIELD_MESSAGE],
                            Z = b[da.RESP_FIELD_ERROR_NAME],
                            T = this.sdk.convertObjectNames("client", b);
                        if (C === da.RESP_SUCCESS_STATUS) return v.cacheKey && this.cachedData.set(v.cacheKey, T), I.onResolve?.(null, T, !1), T;
                        let P = r;
                        throw Z && this.sdk.allExceptions[Z] && (P = this.sdk.allExceptions[Z]), new P(v, !1, R.status, R.statusText, C, x, T, new Error(x))
                    }
                } catch (R) {
                    return S ? (console.error(`${e} cache update fail`, R), null) : this.handleError(v, R)
                } finally {
                    this.onAfterRequest(I, S)
                }
            }
            handleError(v, _) {
                let {
                    config: S
                } = v;
                if (_ instanceof DOMException && _.code === _.ABORT_ERR) throw S.abortSignal?.aborted ? new i(v, "manualCanceled", _, S.abortSignal.reason) : new i(v, "autoCanceled", _);
                if (_ instanceof TypeError && _.message === "Failed to fetch") {
                    let R = new r(v, !0, 0, _.message, 0, "network error(0)", null, _);
                    if (this.triggerErrorHandlers(R, S), R.handled) throw new i(v, "handled", _)
                }
                if (_ instanceof r && (this.triggerErrorHandlers(_, S), _.handled)) throw new i(v, "handled", _);
                v.cacheKey && this.cachedData.delete(v.cacheKey);
                let I = _ instanceof r ? _ : new r(v, !1, 0, `${_.name}:${_.message}`, 0, "network error(-1)", null, _);
                throw S.onResolve?.(I, null, !1), console.error(`${e} Unhandled api request error:`, I), I
            }
            triggerErrorHandlers(v, _) {
                let S = !0;
                _.catch && (S = _.catch(v) === !1), S && this.session?.config.catch && (S = this.session.config.catch(v) === !1), this.sdk.config.globalErrorHandler && !_.ignoreGlobalErrorHandler && S && (S = this.sdk.config.globalErrorHandler(v) === !1), v.handled = !S
            }
            onBeforeRequest(v, _ = !1) {
                if (!_ && v.loadingProperties) {
                    let [S, ...I] = v.loadingProperties;
                    p(S, I, !0)
                }
            }
            onAfterRequest(v, _) {
                if (!_ && v.loadingProperties) {
                    let [S, ...I] = v.loadingProperties;
                    p(S, I, !1)
                }
            }
            getParams(v, _, S) {
                let I;
                return v === "GET" && _ ? I = Object.keys(_).map(R => [R, _[R]]) : I = S, {
                    body: _ ? this.sdk.convertObjectNames("server", _) : {},
                    query: I.filter(([R, b]) => b !== void 0).map(([R, b]) => `${this.sdk.convertNameKey("server", R)}=${encodeURIComponent(this.stringifyQuery(b))}`).join("&")
                }
            }
            stringifyQuery(v) {
                if (v === "null") return "";
                let _ = this.sdk.convertObjectNames("server", v);
                switch (typeof _) {
                    case "boolean":
                        return _ ? "true" : "false";
                    case "bigint":
                    case "number":
                    case "string":
                        return _.toString();
                    case "undefined":
                        return "";
                    case "object":
                        return Array.isArray(_) ? _.map(S => this.stringifyQuery(S)).join(",") : Object.keys(_).map(S => `${S}=${this.stringifyQuery(_[S])}`).join("&");
                    default:
                        return ""
                }
            }
            getSignature(v, _, S, I) {
                return v.slice(0, 2) + _ + this.stableJsonStringify(S) + this.stableJsonStringify(I)
            }
            stableJsonStringify(v) {
                let _ = new Set;
                return JSON.stringify(v, (S, I) => (_.add(S), I)), JSON.stringify(v, Array.from(_).sort())
            }
        }
        h.BaseDomainApi = c;
        class u {
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
            constructor(v, _) {
                if (this.session = v, typeof _ == "number") this.wait = _;
                else {
                    let {
                        wait: S,
                        leading: I,
                        maxWait: R,
                        trailing: b,
                        mutex: C
                    } = _;
                    this.wait = S, this.maxWait = R, I !== void 0 && (this.leading = I), b !== void 0 && (this.trailing = b), C !== void 0 && (this.mutex = C), this.maxWait && this.maxWait < this.wait && console.warn("maxWait must >= wait")
                }
            }
            add(v) {
                if (this.expired) throw new Error(`${e}session has expired`);
                if (this.status === "idle") {
                    if (this.leading) {
                        this.onBeforeRun();
                        try {
                            let _ = v(this.session);
                            return this.doWait(), _
                        } finally {
                            this.onAfterRun()
                        }
                    }
                    return this.queueNext(v), this.doWait(), this.nextP
                }
                return this.queueNext(v), this.doWait(), this.nextP
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
                let v = this.next;
                this.next = null;
                try {
                    let _ = await v(this.session);
                    this.nextPResolve?.(_)
                } catch (_) {
                    this.nextPReject?.(_)
                } finally {
                    this.onAfterRun()
                }
            }
            queueNext(v) {
                this.next = v, this.nextP = new Promise((_, S) => {
                    this.nextPResolve = _, this.nextPReject = S
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
            constructor(v, _, S) {
                this.id = ++f.idCounter, this.context = v, this.name = _, this.config = S, this.abortController = new AbortController, this.initConfig(S)
            }
            _checkConfigs(v) {
                if (JSON.stringify(v) !== JSON.stringify(this.config)) throw console.error({
                    context: this.context,
                    name: this.name,
                    oldConfig: this.config,
                    newConfig: v
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
            initConfig(v) {
                if (["mutex", "debounce", "pollingInterval"].filter(I => v[I] !== void 0).length > 1) throw new Error(`${e} Multiple control param are not supported (mutex/debounce/pollingInterval)`);
                if (this.config.debounce) {
                    this.mode = "debounce", this.debounceManager = new u(this, this.config.debounce);
                    return
                }
                if (this.config.pollingInterval) throw this.mode = "polling", new Error(`${e}polling not implemented`);
                if (this.config.mutex) {
                    this.mode = "mutex";
                    return
                }
            }
        }
        h.BaseSession = f;

        function p(w, v, _) {
            v.forEach(S => {
                w[S] = _
            })
        }
    })(Me ||= {});
    var PD = g(A(), 1);
    var q0;
    (_ => {
        class e extends Me.ApiRequestError {
            errorName = "exceptions.CommonError"
        }
        _.CommonError = e;
        class t extends Me.ApiRequestError {
            errorName = "exceptions.InternalError"
        }
        _.InternalError = t;
        class n extends Me.ApiRequestError {
            errorName = "exceptions.AuthError"
        }
        _.AuthError = n;
        class r extends Me.ApiRequestError {
            errorName = "exceptions.UserAuthError"
        }
        _.UserAuthError = r;
        class i extends Me.ApiRequestError {
            errorName = "exceptions.ResourceNotFoundError"
        }
        _.ResourceNotFoundError = i;
        class s extends Me.ApiRequestError {
            errorName = "exceptions.ValidationError"
        }
        _.ValidationError = s;
        class c extends Me.ApiRequestError {
            errorName = "exceptions.UnexpectedError"
        }
        _.UnexpectedError = c;
        class u extends Me.ApiRequestError {
            errorName = "exceptions.DomainError"
        }
        _.DomainError = u;
        let f;
        (T => {
            class S extends Me.ApiRequestError {
                errorName = "task.exceptions.ChatError"
            }
            T.ChatError = S;
            class I extends Me.ApiRequestError {
                errorName = "task.exceptions.QuotaExceededError"
            }
            T.QuotaExceededError = I;
            class R extends Me.ApiRequestError {
                errorName = "task.exceptions.UidDuplicateError"
            }
            T.UidDuplicateError = R;
            class b extends Me.ApiRequestError {
                errorName = "task.exceptions.CustomPromptError"
            }
            T.CustomPromptError = b;
            class C extends Me.ApiRequestError {
                errorName = "task.exceptions.ConversationNotExistError"
            }
            T.ConversationNotExistError = C;
            class x extends Me.ApiRequestError {
                errorName = "task.exceptions.SharedConversationNotExistError"
            }
            T.SharedConversationNotExistError = x;
            class Z extends Me.BaseDomainApi {
                pathPrefix = "/task";
                async generatePrompt(N, H) {
                    return this.sendRequest("POST", "/generate_prompt", N, [], !1, H)
                }
                async generateOpenaiParam(N, H) {
                    return this.sendRequest("POST", "/generate_openai_param", N, [], !1, H)
                }
                async onOpenaiResult(N, H) {
                    return this.sendRequest("POST", "/on_openai_result", N, [], !1, H)
                }
                async feedbackGenResult(N, H) {
                    return this.sendRequest("POST", "/feedback_gen_result", N, [], !1, H)
                }
                async getTemplateList(N) {
                    return this.sendRequest("GET", "/get_template_list", null, [], !1, N)
                }
                async getToneList(N) {
                    return this.sendRequest("GET", "/get_tone_list", null, [], !1, N)
                }
                async shareConversation(N, H) {
                    return this.sendRequest("POST", "/share_conversation", N, [], !1, H)
                }
                async getSharedConversation(N, H) {
                    return this.sendRequest("GET", "/get_shared_conversation", null, [
                        ["shortId", N]
                    ], !1, H)
                }
                async getConversationList(N, H) {
                    return this.sendRequest("GET", "/get_conversation_list", N, [], !1, H)
                }
                async getChatItemList(N, H) {
                    return this.sendRequest("GET", "/get_chat_item_list", N, [], !1, H)
                }
                async searchConversation(N, H) {
                    return this.sendRequest("GET", "/search_conversation", N, [], !1, H)
                }
                async delConversation(N, H) {
                    return this.sendRequest("POST", "/del_conversation", N, [], !1, H)
                }
            }
            T.Api = Z
        })(f = _.Task ||= {});
        let p;
        (x => {
            class S extends Me.ApiRequestError {
                errorName = "user.exceptions.UserNotExistsError"
            }
            x.UserNotExistsError = S;
            class I extends Me.ApiRequestError {
                errorName = "user.exceptions.OauthCallbackError"
            }
            x.OauthCallbackError = I;
            class R extends Me.ApiRequestError {
                errorName = "user.exceptions.UserAlreadyExistsError"
            }
            x.UserAlreadyExistsError = R;
            class b extends Me.ApiRequestError {
                errorName = "user.exceptions.PasswordError"
            }
            x.PasswordError = b;
            class C extends Me.BaseDomainApi {
                pathPrefix = "/user";
                async superAccount(T, P) {
                    return this.sendRequest("GET", "/super_account", null, [
                        ["superId", T]
                    ], !1, P)
                }
                async logout(T) {
                    return this.sendRequest("GET", "/logout", null, [], !1, T)
                }
                async loginToken(T, P) {
                    return this.sendRequest("GET", "/login_token", null, [
                        ["token", T]
                    ], !1, P)
                }
                async me(T) {
                    return this.sendRequest("GET", "/me", null, [], !1, T)
                }
                async updateLanguagePreferences(T, P) {
                    return this.sendRequest("POST", "/update_language_preferences", T, [], !1, P)
                }
                async updateTel(T, P) {
                    return this.sendRequest("POST", "/update_tel", T, [], !1, P)
                }
                async oauth2Revoke(T) {
                    return this.sendRequest("GET", "/oauth2_revoke", null, [], !1, T)
                }
                async clearCredentials(T) {
                    return this.sendRequest("GET", "/clear_credentials", null, [], !1, T)
                }
                async updateUserInfo(T, P) {
                    return this.sendRequest("POST", "/update_user_info", T, [], !1, P)
                }
                async uninstallReasons(T) {
                    return this.sendRequest("GET", "/uninstall_reasons", null, [], !1, T)
                }
                async uninstallFeedback(T, P) {
                    return this.sendRequest("POST", "/uninstall_feedback", T, [], !1, P)
                }
                async logoff(T) {
                    return this.sendRequest("POST", "/logoff", null, [], !1, T)
                }
                async customPromptList(T, P) {
                    return this.sendRequest("GET", "/custom_prompt_list", T, [], !1, P)
                }
                async createCustomPrompt(T, P) {
                    return this.sendRequest("POST", "/create_custom_prompt", T, [], !1, P)
                }
                async updateCustomPrompt(T, P) {
                    return this.sendRequest("POST", "/update_custom_prompt", T, [], !1, P)
                }
                async deleteCustomPrompt(T, P) {
                    return this.sendRequest("POST", "/delete_custom_prompt", T, [], !1, P)
                }
                async updateCustomPromptPosition(T, P) {
                    return this.sendRequest("POST", "/update_custom_prompt_position", T, [], !1, P)
                }
                async inviteList(T, P) {
                    return this.sendRequest("GET", "/invite_list", T, [], !1, P)
                }
            }
            x.Api = C
        })(p = _.User ||= {});
        let h;
        (x => {
            class S extends Me.ApiRequestError {
                errorName = "vip.exceptions.NoCustomerError"
            }
            x.NoCustomerError = S;
            class I extends Me.ApiRequestError {
                errorName = "vip.exceptions.SubscriptionStatusError"
            }
            x.SubscriptionStatusError = I;
            class R extends Me.ApiRequestError {
                errorName = "vip.exceptions.StripeError"
            }
            x.StripeError = R;
            class b extends Me.ApiRequestError {
                errorName = "vip.exceptions.FrequentlyError"
            }
            x.FrequentlyError = b;
            class C extends Me.BaseDomainApi {
                pathPrefix = "/vip";
                async test(T) {
                    return this.sendRequest("GET", "/test", null, [], !1, T)
                }
                async getVipStatus(T) {
                    return this.sendRequest("GET", "/get_vip_status", null, [], !1, T)
                }
                async getSubscriptionPlans(T) {
                    return this.sendRequest("GET", "/get_subscription_plans", null, [], !1, T)
                }
                async createSubscriptionCheckout(T, P) {
                    return this.sendRequest("POST", "/create_subscription_checkout", T, [], !1, P)
                }
                async cancelSubscription(T) {
                    return this.sendRequest("POST", "/cancel_subscription", null, [], !1, T)
                }
                async resubscribeSubscription(T) {
                    return this.sendRequest("POST", "/resubscribe_subscription", null, [], !1, T)
                }
                async checkoutStatus(T, P) {
                    return this.sendRequest("GET", "/checkout_status", T, [], !1, P)
                }
            }
            x.Api = C
        })(h = _.Vip ||= {});
        class w extends Me.BaseSession {
            taskApi;
            userApi;
            vipApi;
            _initApis(I) {
                this.taskApi = new f.Api(I, this), this.userApi = new p.Api(I, this), this.vipApi = new h.Api(I, this)
            }
        }
        class v extends Me.BaseSdk {
            taskApi;
            userApi;
            vipApi;
            allExceptions = {
                "exceptions.CommonError": e,
                "exceptions.InternalError": t,
                "exceptions.AuthError": n,
                "exceptions.UserAuthError": r,
                "exceptions.ResourceNotFoundError": i,
                "exceptions.ValidationError": s,
                "exceptions.UnexpectedError": c,
                "exceptions.DomainError": u,
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
                "vip.exceptions.NoCustomerError": h.NoCustomerError,
                "vip.exceptions.SubscriptionStatusError": h.SubscriptionStatusError,
                "vip.exceptions.StripeError": h.StripeError,
                "vip.exceptions.FrequentlyError": h.FrequentlyError
            };
            constructor(I) {
                super(I), this.taskApi = new f.Api(this), this.userApi = new p.Api(this), this.vipApi = new h.Api(this)
            }
            async session(I, R, b) {
                return this.getSession(I, R, b, w)._run()
            }
        }
        _.Sdk = v
    })(q0 ||= {});
    var {
        ApiRequestError: VD,
        ApiRequestAborted: HD
    } = Me;
    var zD = g(A(), 1);
    var R3 = `${ie.getWebOrigin()}/api`,
        Ok = () => ({
            "Content-Type": "application/json",
            "X-Client-Version": ie.getExtensionVersion()
        }),
        Lk = {
            baseUrl: R3,
            globalSetHeader(e) {
                let t = Ok();
                return {
                    ...e,
                    ...t
                }
            },
            globalErrorHandler: e => (console.warn("ApiRequestError", e.code, `(${e.httpStatus}, ${e.httpStatusText})`), !1)
        },
        jn = new q0.Sdk(Lk);
    var KD = g(A(), 1);
    var Rk = "https://chatgpt4google.com/api",
        P3 = class {
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
                let r = await (await fetch(this.getFullUrl("/version/get"), {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(ie.underlize(t))
                })).json();
                return ie.camelize(r)
            }
            fetchPromotion = async () => await (await fetch(this.getFullUrl("/p", "old"), {
                headers: {
                    "x-version": ie.getExtensionVersion()
                }
            })).json();
            getFullUrl(t, n = "new") {
                return `${n === "old" ? Rk : R3}${t}`
            }
        },
        m7 = new P3;
    var ha = g(zr(), 1);
    var pa = class extends a0 {
        storagePrefix = "user";
        defaultStorageValues = {
            userInfo: null,
            userVipStatus: null,
            myPrompts: [],
            selectionActions: [],
            userBatch: null,
            clientId: ""
        };
        onInit() {
            ha.default.storage.local.onChanged.addListener(t => {
                let n = t[this.storage.encodeKey("userInfo")],
                    r = t[this.storage.encodeKey("userVipStatus")],
                    i = t[this.storage.encodeKey("myPrompts")],
                    s = t[this.storage.encodeKey("selectionActions")];
                n && this.emit("userInfoChange", {
                    userInfo: n.newValue || null
                }), r?.newValue && this.emit("userVipStatusChange", {
                    userVipStatus: r.newValue
                }), i && this.emit("myPromptsChange", {
                    items: i.newValue
                }), s && this.emit("selectionActionsChange", {
                    items: s.newValue
                })
            }), Un.addExternalListener("webEvent", (t, n, r) => {
                if (t.event === "markAuth") {
                    let i = t.payload;
                    r.tab?.id && i.loginEntry === "extension" && ha.default.tabs.remove(r.tab.id), Un.broadcastFromBackground("webEvent", t), this.markAuth(i)
                }
                if (t.event === "logout" && (this.logout(), Un.broadcastFromBackground("webEvent", t)), t.event === "markPaid" && Un.broadcastFromBackground("webEvent", t), t.event === "openShortcuts" && Ue.openShortcutsPage(), t.event === "openOptions") {
                    let i = t.payload;
                    r.tab?.id && !i.newTab ? ha.default.tabs.update(r.tab.id, {
                        url: ha.default.runtime.getURL("options.html")
                    }) : Ue.openOptionsPage()
                }
            }), this.initClientId()
        }
        markAuth(t) {
            this.storage.set("userInfo", t.userInfo), this.storage.set("userVipStatus", t.userVipStatus)
        }
        async getUserInfo(t) {
            return this._fetchWithCache("userInfo", async () => {
                try {
                    return (await jn.userApi.me()).user
                } catch (n) {
                    if (n instanceof q0.UserAuthError || n instanceof q0.AuthError) return await this.handleLogout(), null;
                    throw n
                }
            }, t)
        }
        async getVipStatus(t) {
            return this._fetchWithCache("userVipStatus", async () => (await jn.vipApi.getVipStatus()).vipStatus, t)
        }
        async getUserStatus() {
            let t = await this.storage.getAll(),
                [n, r] = await Promise.all([async () => {
                    if (t.userInfo) return Promise.resolve(t.userInfo);
                    let {
                        user: i
                    } = await jn.userApi.me();
                    return this.storage.set("userInfo", i), i
                }, async () => {
                    if (t.userVipStatus) return Promise.resolve(t.userVipStatus);
                    let {
                        vipStatus: i
                    } = await jn.vipApi.getVipStatus();
                    return this.storage.set("userVipStatus", i), i
                }]);
            return {
                userInfo: n,
                vipStatus: r
            }
        }
        async getUserVersion() {
            let {
                clientId: t,
                userBatch: n
            } = await this.storage.getAll();
            return m7.getUserVersion({
                clientId: t,
                userBatch: n
            })
        }
        async logout() {
            await jn.userApi.logout(), await this.storage.set("userInfo", null), await this.storage.set("userVipStatus", null)
        }
        async clearUserInfo() {
            await this.storage.set("userInfo", null), await this.storage.set("userVipStatus", null)
        }
        async openGoogleAuthWindow(t) {
            let n = ie.getWebOrigin(),
                r = `${n}/api/user/oauth2_authorize?redirect_url=`,
                i = `${n}/auth-landing?from=extension`,
                s = `${r}${i}`,
                c = 500,
                u = 600,
                {
                    availLeft: f,
                    availTop: p,
                    height: h,
                    width: w
                } = t,
                v = Math.round((w - c) / 2) + f,
                _ = Math.round((h - u) / 2) + p;
            ha.default.windows.create({
                url: s,
                focused: !0,
                width: c,
                height: u,
                type: "popup",
                left: v,
                top: _
            })
        }
        async getUserLanguages() {
            let t = await this.getUserInfo();
            return t ? t.languagePreferences || [] : []
        }
        async updateUserLanguages(t) {
            await jn.userApi.updateLanguagePreferences({
                languagePreferences: t.filter(n => n.toLowerCase() !== "auto")
            }), await this.getUserInfo()
        }
        async getCustomPrompts(t, n) {
            let r = this.getCustomPromptStorageKey(t);
            return this._fetchWithCache(r, async () => (await jn.userApi.customPromptList({
                type: t
            })).items, n)
        }
        async updateCustomPrompt(t, n) {
            return await jn.userApi.updateCustomPrompt(n), await this.getCustomPrompts(t, {
                useCache: !1
            }), !0
        }
        async deleteCustomPrompt(t, n) {
            return await jn.userApi.deleteCustomPrompt({
                id: n
            }), await this.getCustomPrompts(t, {
                useCache: !1
            }), !0
        }
        async addCustomPrompt(t, n) {
            return await jn.userApi.createCustomPrompt({
                ...n,
                type: t
            }), await this.getCustomPrompts(t, {
                useCache: !1
            }), !0
        }
        async sortCustomPrompt(t, n, r) {
            return await jn.userApi.updateCustomPromptPosition({
                id: n,
                position: r
            }), await this.getCustomPrompts(t, {
                useCache: !1
            }), !0
        }
        async setUserBatch(t) {
            await this.storage.get("userBatch") || await this.storage.set("userBatch", t)
        }
        getCustomPromptStorageKey(t) {
            if (t === "selection_action") return "selectionActions";
            if (t === "my_prompt") return "myPrompts";
            throw new Error("Invalid custom prompt type")
        }
        async handleLogout() {
            await this.storage.update({
                ...this.defaultStorageValues
            }), this.emit("userLogout", {})
        }
        async initClientId() {
            if (!await this.storage.get("clientId")) {
                let n = ie.genId();
                await this.storage.set("clientId", n)
            }
        }
    };
    h5(pa, "serviceName", "UserService");
    var uF = g(A(), 1);
    var pg = new r0(pa.serviceName, pa);
    var V3 = g(Is(), 1),
        vg = g(zr(), 1);
    var RF = g(A(), 1);
    var OF = g(A(), 1);
    var EF = g(A());
    var v7 = {
        "invitation-card": "invitation-card-4VpduH",
        invitationCard: "invitation-card-4VpduH",
        content: "content-xUiKw7",
        footer: "footer-77f4gX"
    };
    var CF = g(A(), 1);
    var Yi = class extends cr {
        props;
        someState = !0;
        onViewCreate() {}
        onViewDestroy() {}
    };
    It([on], Yi.prototype, "someState", 2);
    var ma = g(Wt(), 1),
        mg = Lr.createComponent("InvitationCard", Yi, e => (0, ma.jsxs)("div", {
            className: v7.invitationCard,
            children: [(0, ma.jsx)("div", {
                className: v7.content,
                children: " \u{1F389} We're thrilled to invite you to try our new amazing features. We make sure that you'll love it, would you like to give it a go?"
            }), (0, ma.jsx)("div", {
                className: v7.footer,
                children: (0, ma.jsx)("button", {
                    onClick: () => {
                        Ue.openOptionsPage()
                    },
                    children: "Get Started \u{1F449}"
                })
            })]
        }));
    var VF = g(A(), 1),
        N3 = {
            google: {
                inputQuery: ["input[name='q']"],
                sidebarContainerQuery: ["#rhs"],
                appendContainerQuery: ["#rcnt"]
            },
            bing: {
                inputQuery: ["[name='q']"],
                sidebarContainerQuery: ["#b_context"],
                appendContainerQuery: [],
                sidebarStyle: {
                    width: 472,
                    marginLeft: -20
                }
            },
            yahoo: {
                inputQuery: ["input[name='p']"],
                sidebarContainerQuery: ["#right", ".Contents__inner.Contents__inner--sub"],
                appendContainerQuery: ["#cols", "#contents__wrap"],
                sidebarStyle: {
                    width: 442
                }
            },
            duckduckgo: {
                inputQuery: ["input[name='q']"],
                sidebarContainerQuery: [".results--sidebar.js-results-sidebar"],
                appendContainerQuery: ["#links_wrapper"],
                sidebarStyle: {
                    width: 448
                }
            },
            baidu: {
                inputQuery: ["input[name='wd']"],
                sidebarContainerQuery: ["#content_right"],
                appendContainerQuery: ["#container"],
                watchRouteChange(e) {
                    let t = document.getElementById("wrapper_wrapper");
                    new MutationObserver(function(r) {
                        for (let i of r)
                            if (i.type === "childList") {
                                for (let s of i.addedNodes)
                                    if ("id" in s && s.id === "container") {
                                        e();
                                        return
                                    }
                            }
                    }).observe(t, {
                        childList: !0
                    })
                }
            },
            kagi: {
                inputQuery: ["input[name='q']"],
                sidebarContainerQuery: [".right-content-box ._0_right_sidebar"],
                appendContainerQuery: ["#_0_app_content"]
            },
            yandex: {
                inputQuery: ["input[name='text']"],
                sidebarContainerQuery: ["#search-result-aside"],
                appendContainerQuery: []
            },
            naver: {
                inputQuery: ["input[name='query']"],
                sidebarContainerQuery: ["#sub_pack"],
                appendContainerQuery: ["#content"],
                sidebarStyle: {
                    width: 400,
                    marginLeft: 16
                }
            },
            brave: {
                inputQuery: ["input[name='q']"],
                sidebarContainerQuery: ["#side-right"],
                appendContainerQuery: []
            },
            searx: {
                inputQuery: ["input[name='q']"],
                sidebarContainerQuery: ["#sidebar_results"],
                appendContainerQuery: []
            }
        };
    var D3 = g(Wt(), 1),
        H3 = class {
            componentsRoot = null;
            rootId = ie.getRootId("search-enhance");
            searchEnhanceComponent;
            async inject(t) {
                if (this.searchEnhanceComponent = t, document.getElementById(this.rootId)) return;
                let n = new RegExp(Object.keys(N3).join("|")),
                    r = location.hostname.match(n)?.[0];
                if (!r) return;
                let i = N3[r];
                i && (i.watchRouteChange && i.watchRouteChange(this.mountSearchEnhance.bind(this, i)), this.mountSearchEnhance(i))
            }
            destroy() {}
            async mountSearchEnhance(t) {
                let n = document.createElement("div");
                n.id = this.rootId, n.style.marginBottom = "20px";
                let r = "",
                    i = p7.getPossibleElementByQuerySelector(t.inputQuery);
                i && (r = i.value);
                let s = p7.getPossibleElementByQuerySelector(t.sidebarContainerQuery),
                    c = !!s;
                if (s) s.prepend(n);
                else {
                    if (n.style.marginLeft = "30px", n.style.height = "fit-content", s = p7.getPossibleElementByQuerySelector(t.appendContainerQuery), !s) {
                        pg.getUserVersion().then(_ => {
                            _.code === 0 && _.betaAll && !hg.permissionGranted && this.mountInvitationCard()
                        });
                        return
                    }
                    s.appendChild(n)
                }
                let u = await Ue.getAll(),
                    f = n.attachShadow({
                        mode: "open"
                    }),
                    p = vg.default.runtime.getURL("content.css"),
                    h = await (await fetch(p)).text(),
                    w = document.createElement("style");
                w.textContent = h, f.appendChild(w), window["chat-gpt-google-extension-style-head"] = f;
                let v = document.createElement("div");
                f.appendChild(v), this.componentsRoot = v, (0, V3.createRoot)(v).render((0, D3.jsx)(this.searchEnhanceComponent, {
                    theme: u.theme,
                    trigger: u.triggerMode || "always",
                    question: r,
                    ...c ? t.sidebarStyle || {} : {}
                }))
            }
            async mountInvitationCard() {
                let t = "c4g-extension-invitation-card";
                if (document.getElementById(t)) return;
                let n = document.createElement("div");
                n.id = t, n.style.position = "fixed", n.style.bottom = "20px", n.style.right = "40px", n.style.width = "369px", n.style.zIndex = "9999999", document.body.appendChild(n), (0, V3.createRoot)(n).render((0, D3.jsx)(mg, {}))
            }
        },
        Pk = new H3;
    var YF = g(A());
    var W0 = {
        "chat-share": "chat-share-5z3yrc",
        chatShare: "chat-share-5z3yrc",
        chatShareContainer: "chatShareContainer-vRvnPO",
        close: "close-ySHu8E",
        header: "header-djZkvW",
        content: "content-RzocRV",
        footer: "footer-Ay4mKD"
    };
    var YB = g(A(), 1);
    var $B = g(A(), 1);
    var FB = g(A(), 1);
    var bg = g(zr(), 1);
    var bB = g(A(), 1);
    var eB = g(A(), 1);
    var nB = g(A(), 1),
        g7 = class {
            emitter;
            event;
            handler;
            destroyed = !1;
            listenBy;
            constructor(t, n, r, i) {
                this.event = t, this.handler = n, this.emitter = r, this.listenBy = i
            }
            unregister() {
                this.emitter.off(this.event, this), this._destroy()
            }
            _destroy() {
                return this.destroyed ? !1 : (this.handler = null, this.emitter = null, this.destroyed = !0, !0)
            }
        },
        y7 = class {
            _events = {};
            on(t, n) {
                if (!n) throw new TypeError("invalid handler! --EventEmitter");
                this._events[t] || (this._events[t] = []);
                let r = new g7(t, n, this, null);
                return this._events[t]?.push(r), r
            }
            listenBy(t, n, r) {
                if (!r) throw new TypeError("invalid handler! --EventEmitter");
                this._events[n] || (this._events[n] = []);
                let i = new g7(n, r, this, t);
                return this._events[n]?.push(i), i
            }
            once(t, n) {
                let r = this.on(t, i => {
                    n(i), r.unregister()
                });
                return r
            }
            emit(t, n = null) {
                if (!this._events[t]) return !1;
                let r = [];
                for (let i of this._events[t]) i.destroyed || (r.push(i), i.handler.call(this, n));
                return !0
            }
            off(t, n) {
                if (!this._events[t]) return !1;
                if (n) {
                    for (let r = this._events[t], i = 0; i < r.length; i++) {
                        let s = r[i];
                        if (s === n) return this._events[t] = this._events[t]?.filter(c => c !== s), this._events[t]?.length === 0 && delete this._events[t], !0
                    }
                    return console.error(n, this), console.error(`Cannot find listener of ${t} --EventEmitter`), !1
                }
                for (let r = this._events[t], i = 0; i < r.length; i++) {
                    let s = r[i];
                    this._events[t][i] = null, s._destroy()
                }
                return delete this._events[t], !0
            }
            stopListenBy(t) {
                for (let n in this._events) this._events[n] = this._events[n]?.filter(r => r.listenBy === t ? (r._destroy(), !1) : !0)
            }
            removeAllListeners() {
                for (let t in this._events) {
                    let n = this._events[t];
                    for (let r = n, i = 0; i < r.length; i++) n[i] = null;
                    this._events[t] = null
                }
            }
        };
    var pB = g(A(), 1);
    var aB = g(A());

    function gg(e) {
        let t, n, r, i, s, c, u;
        return f(), {
            feed: p,
            reset: f
        };

        function f() {
            t = !0, n = "", r = 0, i = -1, s = void 0, c = void 0, u = ""
        }

        function p(w) {
            n = n ? n + w : w, t && Nk(n) && (n = n.slice(yg.length)), t = !1;
            let v = n.length,
                _ = 0,
                S = !1;
            for (; _ < v;) {
                S && (n[_] === `
` && ++_, S = !1);
                let I = -1,
                    R = i,
                    b;
                for (let C = r; I < 0 && C < v; ++C) b = n[C], b === ":" && R < 0 ? R = C - _ : b === "\r" ? (S = !0, I = C - _) : b === `
` && (I = C - _);
                if (I < 0) {
                    r = v - _, i = R;
                    break
                } else r = 0, i = -1;
                h(n, _, R, I), _ += I + 1
            }
            _ === v ? n = "" : _ > 0 && (n = n.slice(_))
        }

        function h(w, v, _, S) {
            if (S === 0) {
                u.length > 0 && (e({
                    type: "event",
                    id: s,
                    event: c || void 0,
                    data: u.slice(0, -1)
                }), u = "", s = void 0), c = void 0;
                return
            }
            let I = _ < 0,
                R = w.slice(v, v + (I ? S : _)),
                b = 0;
            I ? b = S : w[v + _ + 1] === " " ? b = _ + 2 : b = _ + 1;
            let C = v + b,
                x = S - b,
                Z = w.slice(C, C + x).toString();
            if (R === "data") u += Z ? "".concat(Z, `
`) : `
`;
            else if (R === "event") c = Z;
            else if (R === "id" && !Z.includes("\0")) s = Z;
            else if (R === "retry") {
                let T = parseInt(Z, 10);
                Number.isNaN(T) || e({
                    type: "reconnect-interval",
                    value: T
                })
            }
        }
    }
    var yg = [239, 187, 191];

    function Nk(e) {
        return yg.every((t, n) => e.charCodeAt(n) === t)
    }
    var F3 = Rr.getLogger("ChatService"),
        Ji = class {
            onData = null
        },
        _7 = class {
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
                let r = this.taskMap[n.taskId];
                r && (r.abortController.abort(), delete this.taskMap[r.taskId])
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
                let r = new Ji,
                    i = new AbortController,
                    s = {
                        taskId: n.taskId,
                        abortController: i,
                        conversationId: n.conversationId
                    };
                return this.doGetAnswer({
                    token: t,
                    taskInfo: s,
                    params: n,
                    resp: r
                }).catch(c => {
                    r.onData?.(null, !0, c)
                }), r
            }
            async deleteConversation(t, n) {
                let {
                    conversationId: r
                } = n;
                for (let c of Object.keys(this.taskMap)) this.taskMap[c].conversationId === r && this.cancelTask(t, {
                    taskId: c
                });
                let s = (await this.chatService.getChatGptConversationMap())[r];
                if (!s) throw "CONVERSATION_NOT_FOUND";
                return this.chatService.removeChatGptConversationData(r), await this.fetch({
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
                    taskInfo: r,
                    params: i,
                    resp: s
                } = t;
                this.taskMap[r.taskId] = r;
                let c = null,
                    u = ie.genId();
                await this.fetchCompletions({
                    question: i,
                    messageId: u,
                    token: n,
                    taskInfo: r,
                    onMessage: f => {
                        if (f === "[DONE]") {
                            this.chatService.getChatGptConversationMap().then(p => {
                                F3.log("chat gpt resp msg:", {
                                    ...c,
                                    chatGptConvId: p[i.conversationId].chatGptConvId
                                })
                            }), s.onData?.(c, !0), this.cancelTask(n, {
                                taskId: r.taskId
                            });
                            return
                        }
                        try {
                            let p = JSON.parse(f);
                            if (p.message?.author?.role !== "assistant") return;
                            let h = p.message?.content?.parts?.[0];
                            h && (this.chatService.getChatGptConversationMap().then(w => {
                                let v = i.conversationId;
                                w[v] || this.chatService.addChatGptConversationData(v, {
                                    chatGptConvId: p.conversation_id,
                                    createdAt: Date.now()
                                })
                            }), c = {
                                content: h,
                                parentMessageId: u,
                                type: "answer",
                                messageId: p.message.id,
                                conversationId: i.conversationId
                            }, s.onData?.(c, !1))
                        } catch (p) {
                            F3.error("unsupported streaming msg:", p)
                        }
                    }
                })
            }
            async getModelName(t, n) {
                try {
                    if (!this.modelNameMap[n]) {
                        let i = (await Ue.get("provider:chatgpt"))?.modelType ?? "GPT-3.5 Turbo",
                            s = await this.fetchModels(t),
                            c;
                        if (i === "Auto") {
                            let u = s.find(f => f.slug === "gpt-4");
                            c = u ? u.slug : s[0].slug
                        } else c = s[0].slug;
                        this.modelNameMap[n] = c
                    }
                    return this.modelNameMap[n]
                } catch (r) {
                    return F3.error(r), "text-davinci-002-render-sha"
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
                    taskInfo: r,
                    question: i,
                    messageId: s,
                    token: c
                } = t, u = await this.chatService.getChatGptConversationMap(), f = await this.getModelName(c, i.conversationId), p = u[i.conversationId], h = r.abortController.signal;
                if (h.aborted) return;
                let w = await this.fetch({
                    method: "POST",
                    path: `${this.baseUrl}/conversation`,
                    headers: this.getRequestHeader(c),
                    returnOriginResponse: !0,
                    signal: r.abortController.signal,
                    data: {
                        action: "next",
                        messages: [{
                            id: s,
                            role: "user",
                            content: {
                                contentType: "text",
                                parts: [i.content]
                            }
                        }],
                        conversationId: p ? p.chatGptConvId : void 0,
                        model: f,
                        parentMessageId: i.parentMessageId || ie.genId()
                    }
                });
                if (!w.ok) {
                    let S = await w.json().catch();
                    throw this.openApiErrorHandler(S)
                }
                let v = gg(S => {
                        S.type === "event" && n(S.data)
                    }),
                    _ = w.body.getReader();
                try {
                    for (; !h.aborted;) {
                        let {
                            done: S,
                            value: I
                        } = await _.read();
                        if (S) return;
                        let R = new TextDecoder().decode(I);
                        v.feed(R)
                    }
                } catch {
                    _.releaseLock()
                }
            }
            async fetch(t) {
                let n = ie.underlize(t.data),
                    r = await fetch(t.path, {
                        method: t.method,
                        headers: t.headers,
                        body: n == null ? void 0 : JSON.stringify(n),
                        signal: t.signal
                    });
                if (r.status === 403) throw "CLOUDFLARE";
                if (t.returnOriginResponse) return r;
                if (r.ok) {
                    let s = await r.json();
                    return ie.camelize(s)
                }
                let i = await r.json().catch(() => ({}));
                throw t.errorHandler ? t.errorHandler(i) : this.openApiErrorHandler(i)
            }
            openApiErrorHandler(t) {
                let n = "",
                    r = "";
                if (t?.detail) {
                    let i = t.detail;
                    typeof i == "string" ? n = i : i.message && typeof i.message == "string" && (n = i.message, r = i.code)
                }
                return n ? n.includes("Too many requests") ? "TOO_MANY_REQUESTS" : n.includes("Unauthorized") || n.includes("expired") || r === "invalid_jwt" ? "UNAUTHORIZED" : n.includes("Not Found") ? "OPENAI_NOT_FOUND" : n : "UNKNOWN"
            }
        };
    var An = g(zr(), 1),
        w7 = Rr.getLogger("ChatService"),
        Vk = 3600 * 1e3 * 72,
        E7 = class {
            constructor(t, n) {
                this.storage = t;
                this.service = n;
                this.init().then(() => {
                    this.chatGptRequester = new _7(this.service)
                }).catch(r => {
                    w7.error("ChatGptProvider init error", r)
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
            events = new y7;
            async init() {
                this.storage.removeDeprecated("chatGpt"), this.conversationMap = await this.loadConversationMap(), await this.removeOutdatedConversations(), nt.isProd && this.initRequestSenderForProd(), An.default.runtime.onConnect.addListener(t => {
                    t.name === "ChatGptRequestSender" && (w7.log("ChatGptRequestSender connected"), this.currentSenderPort && this.disposeCurrentSenderPort(), this.currentSenderPort = t, t.onMessage.addListener(n => {
                        this.pendingRequests[n.reqId](n)
                    }), t.onDisconnect.addListener(() => {
                        t === this.currentSenderPort && (this.currentSenderPort = void 0)
                    }))
                }), this.initReady = !0, this.events.emit("initReady")
            }
            async loadConversationMap() {
                let t = await this.storage.get("chatGptConversationMap");
                return t || w7.error("No conversationMap when init"), t || {}
            }
            initRequestSenderForProd() {
                this.searchAndInsertRequestSender(), An.default.tabs.onUpdated.addListener((t, n) => {
                    An.default.tabs.get(t).then(r => {
                        this.isTargetHost(r.url) && n.status === "complete" && (this.disposeCurrentSenderPort(), this.insertScriptToTab(t))
                    })
                }), An.default.tabs.onRemoved.addListener(t => {
                    t === this.currentSenderTabId && (this.disposeCurrentSenderPort(), this.searchAndInsertRequestSender())
                })
            }
            async createConversation() {
                return `conv:${ie.genId()}`
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
                let r = `task:${ie.genId()}`;
                return (async () => {
                    let s = await Ue.get("language");
                    t.parentMessageId || (t.content = ie.addPromptLangSuffix(t.content, s)), this.callRequestMethod("getAnswer", {
                        taskId: r,
                        ...t
                    }, n)
                })(), {
                    taskId: r
                }
            }
            hasChatGptTab() {
                return !!this.currentSenderPort?.sender?.tab
            }
            focusChatGptTab(t = !1) {
                if (!this.hasChatGptTab()) return !1;
                let n = this.currentSenderPort.sender.tab;
                return An.default.windows.update(n.windowId, {
                    focused: !0
                }), An.default.tabs.update(n.id, {
                    active: !0
                }), t && An.default.tabs.reload(n.id), !0
            }
            createChatGptTab() {
                return An.default.windows.create({
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
                An.default.tabs.create({
                    url: `https://chat.openai.com/chat/${n.chatGptConvId}`,
                    active: !0
                })
            }
            async keepConversation(t, n) {
                if (!this.conversationMap[t]) return;
                let r = this.conversationMap[t];
                r.kept = !0, this.saveConversationMap();
                let i = r.chatGptConvId,
                    s = {
                        conversationId: t,
                        chatGptConvId: i,
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
                this.currentSenderPort || An.default.tabs.query({}).then(t => {
                    for (let n of t)
                        if (this.isTargetTab(n)) {
                            this.insertScriptToTab(n.id);
                            break
                        }
                })
            }
            async insertScriptToTab(t) {
                An.default.scripting.executeScript({
                    target: {
                        tabId: t
                    },
                    files: ["chatGptInjection.js"]
                }), An.default.scripting.insertCSS({
                    target: {
                        tabId: t
                    },
                    files: ["chatGptInjection.css"]
                })
            }
            async callRequestMethod(t, n, r) {
                if (this.currentSenderPort) {
                    let i = ie.genId();
                    return new Promise((s, c) => {
                        this.pendingRequests[i] = f => {
                            let {
                                respType: p,
                                data: h,
                                finished: w,
                                error: v
                            } = f;
                            p === "data" ? (r?.(h, w, this.normalizeError(v)), w && (s(null), delete this.pendingRequests[i])) : p === "resp" ? (s(h), delete this.pendingRequests[i]) : (c(h), delete this.pendingRequests[i])
                        };
                        let u = {
                            event: "callMethod",
                            reqId: i,
                            data: {
                                method: t,
                                params: n
                            }
                        };
                        this.currentSenderPort.postMessage(u)
                    }).catch(s => {
                        throw r?.(null, !0, this.normalizeError(s)), s
                    })
                } else try {
                    let i = await this.getToken(),
                        s = await this.chatGptRequester[t](i, n);
                    return s instanceof Ji ? (s.onData = (c, u, f) => {
                        r?.(c, u, this.normalizeError(f))
                    }, null) : s
                } catch (i) {
                    throw r?.(null, !0, this.normalizeError(i)), i
                }
            }
            normalizeError(t) {
                return t === void 0 ? t : (w7.error(t, JSON.stringify(t)), typeof t == "string" ? t : "UNKNOWN_OPENAI_ERROR")
            }
            async getToken(t = !0) {
                if (t) {
                    let r = await this.storage.get("chatGptToken");
                    if (r) return r
                }
                let n = await this.chatGptRequester.getToken();
                return await this.storage.update({
                    chatGptToken: n
                }), n
            }
            async removeOutdatedConversations() {
                let t = this.conversationMap,
                    n = Date.now();
                for (let r of Object.keys(t)) {
                    let {
                        createdAt: i = 0
                    } = t[r];
                    n - i > Vk && delete t[r]
                }
                await this.saveConversationMap()
            }
        };
    var OB = g(A(), 1);
    var B3 = Rr.getLogger("ChatService"),
        wg = 800,
        Hk = 3600 * 1e3 * 72,
        Ag = "A",
        Eg = "You",
        Dk = `
${Ag}: `,
        A7 = class {
            constructor(t) {
                this.storage = t;
                this.removeOutdatedConversations()
            }
            pendingTasks = {};
            async createConversation() {
                return `conv:${ie.genId()}`
            }
            async getAnswer(t, n) {
                let r = `task:${ie.genId()}`,
                    i = `msg:${ie.genId()}`,
                    s = t.conversationId;
                await this.addConversationMessage({
                    ...t,
                    messageId: i,
                    type: "question"
                });
                let c = {
                        conversationId: s,
                        messageId: `msg:${ie.genId()}`,
                        type: "answer",
                        content: ""
                    },
                    u = new AbortController,
                    f = {
                        taskId: r,
                        conversationId: s,
                        abortController: u
                    };
                this.pendingTasks[r] = f;
                let p = !1;
                return this.fetchCompletions({
                    convId: s,
                    taskInfo: f,
                    onData: h => {
                        c.content += h.text || "", n(c, h.finished, h.error), h.finished && (p = !0, B3.debug("answer finished", c), this.addConversationMessage(c))
                    },
                    onAbort: () => {
                        !p && c.content.trim() && (B3.debug("aborted, save partial message", c), this.addConversationMessage(c))
                    }
                }).catch(h => {
                    throw n(null, !0, `${h}`), h
                }), {
                    taskId: r
                }
            }
            async cancelTask(t) {
                let n = this.pendingTasks[t];
                B3.debug("cancel task", n), n && await this.handleTaskFinish(n)
            }
            async deleteConversation(t) {
                for (let r of Object.keys(this.pendingTasks)) this.pendingTasks[r].conversationId === t && this.cancelTask(r);
                let n = await this.getStore();
                delete n.conversations[t], this.saveStore(n)
            }
            async feedback(t) {
                return !0
            }
            async addConversationMessage(t) {
                let n = await this.getStore(),
                    r = t.conversationId;
                n.conversations[r] || (n.conversations[r] = {
                    messages: [],
                    createdAt: Date.now()
                }), n.conversations[r].messages.push(t), await this.saveStore(n)
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
                    onData: r,
                    onAbort: i
                } = t;
                if (n.abortController.signal.aborted) return;
                let c = await this.getProviderConfigs(),
                    {
                        apiKey: u,
                        modelType: f = "chat_model",
                        apiHost: p
                    } = c || {},
                    h, w = p?.trim() || bh;
                if (f === "chat_model" ? h = await this.fetchChatCompletions(t, u, w) : h = await this.fetchTextCompletions(t, u, w), h.status !== 200) throw `${h.statusText}(${h.status})`;
                let v = h.body?.pipeThrough(new TextDecoderStream).getReader(),
                    _ = !1;
                for (;;) {
                    let S;
                    try {
                        S = await v?.read()
                    } catch {
                        i();
                        return
                    }
                    if (!S || S.done) return;
                    let R = S.value.split(/\r?\n\r?\n/);
                    for (let b of R) {
                        let C = b.replace(/^data: /, ""),
                            x;
                        f === "chat_model" ? x = P => {
                            let N = P.choices[0];
                            return N.finish_reason ? {
                                text: "",
                                finished: !0
                            } : {
                                text: N.delta?.content || "",
                                finished: !1
                            }
                        } : x = P => {
                            let N = P.choices[0];
                            return N.finish_reason ? {
                                text: "",
                                finished: !0
                            } : {
                                text: N.text,
                                finished: !1
                            }
                        };
                        let Z = this.parseStreamResult(C, x),
                            {
                                text: T
                            } = Z;
                        if (_ || (T = T.replace(/^\n*/, "")), T.length > 0 && (_ = !0), r({
                                text: T,
                                finished: Z.finished
                            }), Z.finished) {
                            this.handleTaskFinish(n);
                            return
                        }
                    }
                }
            }
            async fetchTextCompletions(t, n, r) {
                let i = await this.createPrompt(t.convId);
                return fetch(`${r}/v1/completions`, {
                    headers: this.getHeaders(n),
                    method: "POST",
                    signal: t.taskInfo.abortController.signal,
                    body: JSON.stringify({
                        model: Bl["text_model"],
                        prompt: i,
                        stream: !0,
                        temperature: .3,
                        stop: Dk,
                        max_tokens: wg
                    })
                })
            }
            async fetchChatCompletions(t, n, r) {
                return fetch(`${r}/v1/chat/completions`, {
                    headers: this.getHeaders(n),
                    method: "POST",
                    signal: t.taskInfo.abortController.signal,
                    body: JSON.stringify({
                        model: Bl["chat_model"],
                        messages: await this.createPromptMessages(t.convId),
                        stream: !0,
                        temperature: .5,
                        max_tokens: wg
                    })
                })
            }
            async createPrompt(t) {
                let n = await this.getStore(),
                    r = await Ue.getAll(),
                    i = r.language,
                    u = (r["provider:gpt3"]?.guideType || "default") === "default" ? wh : _h;
                return n.conversations[t].messages.forEach((f, p) => {
                    let h = f.type === "question" ? Ag : Eg,
                        w = f.content.trim();
                    p === 0 && (w = ie.addPromptLangSuffix(w, i)), u += `${h}: ${w}
`
                }), u += `${Eg}:`, u
            }
            async createPromptMessages(t) {
                let n = await this.getStore(),
                    r = await Ue.getAll(),
                    i = r.language,
                    u = [{
                        role: "system",
                        content: (r["provider:gpt3"]?.guideType || "default") === "default" ? Ah : Eh
                    }];
                return n.conversations[t].messages.forEach((f, p) => {
                    let h = f.type === "question" ? "user" : "assistant",
                        w = f.content.trim();
                    p === 0 && (w = ie.addPromptLangSuffix(w, i)), u.push({
                        role: h,
                        content: w
                    })
                }), u
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
                let r = JSON.parse(t);
                if (r.error) throw typeof r.error == "string" ? r.error : r.error?.message || "UNKNOWN_OPENAI_ERROR";
                return n(r)
            }
            async handleTaskFinish(t) {
                t.abortController.abort(), delete this.pendingTasks[t.taskId]
            }
            async getProviderConfigs() {
                let {
                    configs: t
                } = await Ue.getProviderConfigs();
                return t
            }
            async removeOutdatedConversations() {
                let t = await this.getStore(),
                    n = Date.now();
                for (let r of Object.keys(t.conversations)) {
                    let {
                        createdAt: i = 0
                    } = t.conversations[r];
                    n - i > Hk && delete t.conversations[r]
                }
                await this.saveStore(t)
            }
        };
    var va = class extends a0 {
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
                chatGpt: new E7(this.storage, this),
                gpt3: new A7(this.storage)
            }, bg.default.tabs.onRemoved.addListener(async t => {
                this.onTabUnload(t)
            })
        }
        async createConversation() {
            let t = this.lastCaller?.tabId,
                n;
            if (await this.getProviderType() === "gpt3" && (n = await this.providers.gpt3.createConversation()), n = await this.providers.chatGpt.createConversation(), t) {
                let r = await this.storage.get("tabConversationMap");
                r[t] = n, await this.storage.update({
                    tabConversationMap: r
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
            return m7.createShare({
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
                r = n[t];
            r && (this.deleteConversation(r), delete n[t]);
            for (let i of Object.keys(n)) await ie.tryGetTab(i) || (this.deleteConversation(r), delete n[i]);
            await this.storage.update({
                tabConversationMap: n
            })
        }
        async getProviderType() {
            return Ue.get("provider")
        }
    };
    h5(va, "serviceName", "ChatService");
    var UB = g(A(), 1);
    var Cg = new r0(va.serviceName, va);
    var eo = class extends cr {
        props;
        isClosed = !1;
        isLoading = !1;
        onViewCreate() {}
        onViewDestroy() {}
        async shareChatContent() {
            this.isLoading = !0;
            let t = await Cg.createShare(this.props.messages, this.props.modelName);
            if (t.code === 0 && t.data) {
                if (this.isClosed) return;
                window.open(t.data.shareUrl, "_blank")
            }
            this.isLoading = !1, this.props.destroy()
        }
        close() {
            this.isClosed = !0, this.props.destroy()
        }
    };
    It([on], eo.prototype, "isLoading", 2);
    var ur = g(Wt(), 1),
        xg = Lr.createComponent("ChatShare", eo, e => (0, ur.jsx)("div", {
            className: W0.chatShare,
            children: (0, ur.jsxs)("div", {
                className: W0.chatShareContainer,
                children: [(0, ur.jsx)("div", {
                    className: W0.close,
                    onClick: t => {
                        t.stopPropagation(), e.close()
                    },
                    children: (0, ur.jsx)(lg, {
                        size: 24
                    })
                }), (0, ur.jsxs)("div", {
                    className: W0.header,
                    children: [(0, ur.jsx)(ig, {
                        size: 24
                    }), " Share conversation using ", ie.getProductName()]
                }), (0, ur.jsx)("div", {
                    className: W0.content,
                    children: "The shared content will be uploaded to our server, and the content is visible to anyone who gets the link."
                }), (0, ur.jsx)("div", {
                    className: W0.footer,
                    children: (0, ur.jsx)(Ri, {
                        loading: e.isLoading,
                        type: "success",
                        ghost: !0,
                        auto: !0,
                        scale: .7,
                        onClick: () => {
                            e.shareChatContent()
                        },
                        children: "Create share link"
                    })
                })]
            })
        }));
    var IU = g(A(), 1);
    var ZU = g(A(), 1);
    var gU = g(A());
    var Sg = {
        "chat-gpt-share-btn-hide": "chat-gpt-share-btn-hide-xUZjqj",
        chatGptShareBtnHide: "chat-gpt-share-btn-hide-xUZjqj"
    };
    var wU = g(A(), 1);
    var to = class extends cr {
        props;
        observer = null;
        shouldDisable = !1;
        onViewCreate() {
            let t = new MutationObserver(i => {
                    i.forEach(s => {
                        s.type === "attributes" && s.attributeName === "disabled" && (s.target.getAttribute("disabled") !== null ? this.shouldDisable = !0 : this.shouldDisable = !1)
                    })
                }),
                r = document.querySelector("#__next main form textarea").nextElementSibling;
            this.observer = t, t.observe(r, {
                attributes: !0,
                childList: !1,
                subtree: !1
            })
        }
        onViewDestroy() {
            this.observer?.disconnect()
        }
    };
    It([on], to.prototype, "shouldDisable", 2);
    var b7 = g(Wt(), 1),
        Mg = Lr.createComponent("ChatGptShareBtn", to, e => (0, b7.jsxs)("button", {
            onClick: () => e.props.handleShare(),
            className: `${e.shouldDisable ? Sg.chatGptShareBtnHide : ""} btn flex gap-2 justify-center btn-neutral`,
            children: [(0, b7.jsx)(sg, {
                size: 12
            }), "Share"]
        }));
    var C7 = g(Wt(), 1),
        j3 = class {
            rootId = `${nt.extensionPrefix}-gpt-chat-share`;
            root = null;
            constructor() {
                this.init()
            }
            init() {
                let t = document.querySelector("#__next");
                if (!t) {
                    console.error("ChatGptShare: target dom node not found");
                    return
                }
                this.injectBtn(), this.observeDomMutation(t)
            }
            parseMsgAndModel() {
                let t = document.getElementsByClassName("flex flex-col items-center text-sm dark:bg-gray-800")[0],
                    n = {
                        model: "ChatGPT",
                        items: []
                    },
                    r = document.body.querySelector(".dark\\:bg-gray-700");
                r?.textContent?.includes("Model:") && (n.model = `ChatGPT ${r.textContent.split("Model:")[1].trim()}`);
                for (let i of t.children) {
                    let s = i,
                        c = s.querySelector(".markdown");
                    if ([...s.classList].includes("dark:bg-gray-800")) {
                        let u = s.querySelector(".text-orange-500");
                        if (u) n.items.push({
                            type: "question",
                            content: u.innerText.split(`
`)[0]
                        });
                        else {
                            let f = s.querySelector(".min-h-\\[20px\\]");
                            f ? n.items.push({
                                type: "question",
                                content: f.textContent
                            }) : n.items.push({
                                type: "question",
                                content: s.textContent
                            })
                        }
                    } else if (c) {
                        let u = new u9;
                        u.use(h9), u.addRule("pre", {
                            filter: ["pre"],
                            replacement: (p, h) => `\`\`\`
${h.querySelector("code").textContent}
\`\`\``
                        });
                        let f = u.turndown(c.outerHTML);
                        n.items.push({
                            type: "answer",
                            content: f
                        })
                    }
                }
                return n
            }
            getMsgAndModel() {
                let {
                    model: t,
                    items: n
                } = this.parseMsgAndModel(), r = ie.genId(), i = n.map(s => this.mapPlainMsgToMsg(s, r));
                return {
                    modelName: t,
                    messages: i
                }
            }
            handleShare() {
                if (!this.root) return;
                let {
                    messages: t,
                    modelName: n
                } = this.getMsgAndModel(), r = document.createElement("div");
                r.className = "chat-share-dialog", this.root.domRoot.appendChild(r);
                let i = (0, U3.createRoot)(r),
                    s = () => {
                        i.unmount(), r.remove()
                    };
                window["chat-gpt-google-extension-style-head"] = document.head, i.render((0, C7.jsx)(B4, {
                    children: (0, C7.jsx)(xg, {
                        destroy: s,
                        messages: t,
                        modelName: n
                    })
                }))
            }
            mapPlainMsgToMsg(t, n) {
                return {
                    ...t,
                    conversationId: n,
                    messageId: ie.genId()
                }
            }
            observeDomMutation(t) {
                new MutationObserver(r => {
                    r.forEach(i => {
                        i.addedNodes.length > 0 && this.injectBtn()
                    })
                }).observe(t, {
                    subtree: !1,
                    childList: !0
                })
            }
            async injectBtn() {
                this.root && (this.root.reactRoot.unmount(), this.root.domRoot.remove());
                let t = document.querySelector("#__next main form > div div:nth-of-type(1)");
                if (!t) {
                    console.error("ChatGptShare: buttonsWrapper not found");
                    return
                }
                let n = document.createElement("div");
                n.id = this.rootId;
                let r = (0, U3.createRoot)(n);
                this.root = {
                    domRoot: n,
                    reactRoot: r
                }, r.render((0, C7.jsx)(Mg, {
                    handleShare: () => this.handleShare()
                })), t.appendChild(n)
            }
        };
    new j3;
})();